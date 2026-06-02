#!/usr/bin/env bash
set -Eeuo pipefail

prompt="${1:-__CODEX_CONTEXT_DUMP_SYNTHETIC_USER_PROMPT__}"
codex_bin="${CODEX_BIN:-}"

if [[ -z "${codex_bin}" ]]; then
  codex_bin="$(command -v codex || true)"
fi

if [[ -z "${codex_bin}" || ! -x "${codex_bin}" ]]; then
  echo "error: codex binary not found. Set CODEX_BIN=/path/to/codex." >&2
  exit 127
fi

tmp_dir="$(mktemp -d "${TMPDIR:-/tmp}/codex-context.XXXXXX")"
server_info="${tmp_dir}/server.json"
request_json="${tmp_dir}/request.json"
server_log="${tmp_dir}/server.log"
codex_stderr="${tmp_dir}/codex.stderr"
server_pid=""

cleanup() {
  if [[ -n "${server_pid}" ]] && kill -0 "${server_pid}" >/dev/null 2>&1; then
    kill "${server_pid}" >/dev/null 2>&1 || true
    wait "${server_pid}" >/dev/null 2>&1 || true
  fi
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

python3 - "${server_info}" "${request_json}" <<'PY' >"${server_log}" 2>&1 &
import json
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

server_info = Path(sys.argv[1])
request_json = Path(sys.argv[2])

class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        return

    def do_GET(self):
        if urlparse(self.path).path == "/v1/models":
            body = b'{"models":[]}'
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        self.send_error(404)

    def do_POST(self):
        if urlparse(self.path).path != "/v1/responses":
            self.send_error(404)
            return

        raw = self.rfile.read(int(self.headers.get("Content-Length") or "0"))
        body = json.loads(raw.decode("utf-8"))
        request_json.write_text(json.dumps(body, indent=2, ensure_ascii=False) + "\n")

        response_id = "codex-context-dump-response"
        events = [
            {"type": "response.created", "response": {"id": response_id}},
            {"type": "response.completed", "response": {"id": response_id, "usage": {"input_tokens": 0, "output_tokens": 0, "total_tokens": 0}}},
        ]
        payload = "".join(
            f"event: {event['type']}\n"
            f"data: {json.dumps(event, separators=(',', ':'))}\n\n"
            for event in events
        ).encode("utf-8")

        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

server = ThreadingHTTPServer(("127.0.0.1", 0), Handler)
server_info.write_text(json.dumps({"port": server.server_address[1]}) + "\n")
server.serve_forever()
PY
server_pid=$!

for _ in {1..100}; do
  [[ -s "${server_info}" ]] && break
  sleep 0.05
done

if [[ ! -s "${server_info}" ]]; then
  echo "error: fake Responses API server did not start" >&2
  cat "${server_log}" >&2 || true
  exit 1
fi

port="$(python3 -c 'import json,sys; print(json.load(open(sys.argv[1]))["port"])' "${server_info}")"
base_url="http://127.0.0.1:${port}/v1"
provider_id="codex-context-dump"
provider_override="model_providers.${provider_id}={ name = 'Codex Context Dump', base_url = '${base_url}', wire_api = 'responses', request_max_retries = 0, stream_max_retries = 0, stream_idle_timeout_ms = 30000 }"

set +e
"${codex_bin}" exec \
  --ephemeral \
  --skip-git-repo-check \
  --json \
  -c "${provider_override}" \
  -c "model_provider=\"${provider_id}\"" \
  -c "features.responses_websockets=false" \
  "${prompt}" >/dev/null 2>"${codex_stderr}"
codex_status=$?
set -e

if [[ ! -s "${request_json}" ]]; then
  echo "error: Codex exited without sending a /v1/responses request (exit ${codex_status})." >&2
  cat "${codex_stderr}" >&2 || true
  exit 1
fi

python3 - "${request_json}" "${prompt}" <<'PY'
import json
import sys

request = json.load(open(sys.argv[1]))
sentinel = sys.argv[2]

def text(value):
    if isinstance(value, str):
        return value
    if isinstance(value, list):
        return "\n".join(
            item.get("text") or item.get("input_text") or json.dumps(item, ensure_ascii=False)
            for item in value
            if isinstance(item, dict)
        )
    if isinstance(value, dict):
        return value.get("text") or json.dumps(value, ensure_ascii=False, indent=2)
    return ""

print("# Codex model-visible context dump")
print(f"# model: {request.get('model')}")
print()
print("## Top-Level Instructions")
print(request.get("instructions") or "")

for index, item in enumerate(request.get("input") or []):
    item_text = text(item.get("content")) if isinstance(item, dict) else text(item)
    if sentinel in item_text:
        continue
    role = item.get("role", "") if isinstance(item, dict) else ""
    print()
    print(f"## Input {index} {role}".rstrip())
    print(item_text)

tools = request.get("tools") or []
print()
print(f"## Tools ({len(tools)})")
for index, tool in enumerate(tools):
    name = tool.get("name") or tool.get("type") or "<unknown>"
    print()
    print(f"### Tool {index}: {name}")
    print("```json")
    print(json.dumps(tool, indent=2, ensure_ascii=False))
    print("```")
PY
