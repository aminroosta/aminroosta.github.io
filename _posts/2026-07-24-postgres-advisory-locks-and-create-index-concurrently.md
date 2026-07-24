---
layout: post
title: "Postgres Advisory Locks Can Block CREATE INDEX CONCURRENTLY"
date: 2026-07-24
categories: [database, devops, postgresql]
---

We run Alembic migrations when an API container starts. During a deployment, multiple containers can start at the same time and try to migrate the same Postgres database.

We had already protected `alembic_version` with a table lock, but some migrations use Alembic's [`autocommit_block()`](https://alembic.sqlalchemy.org/en/latest/api/runtime.html#alembic.runtime.migration.MigrationContext.autocommit_block):

```python
def upgrade() -> None:
    with op.get_context().autocommit_block():
        op.execute(
            """
            CREATE INDEX CONCURRENTLY IF NOT EXISTS ix_node_tenant_canvas
            ON node (tenant_id, canvas_id)
            """
        )
```

`CREATE INDEX CONCURRENTLY` cannot run inside a transaction. `autocommit_block()` commits the current transaction before running it, which also releases the table lock.

That means another container can enter the migration while the first one is still running. Eventually, both try to update `alembic_version`, and we get a deadlock.

## The First Fix: A Session-Level Advisory Lock

Postgres [advisory locks](https://www.postgresql.org/docs/current/explicit-locking.html#ADVISORY-LOCKS) are a good fit here. Unlike transaction-level locks, a session-level advisory lock survives commits. It remains held across Alembic's `autocommit_block()`.

The first implementation used the blocking lock function:

```python
lock_connection = engine.connect()
lock_connection.execute(
    text("select pg_advisory_lock(:lock_id)"),
    {"lock_id": MIGRATION_ADVISORY_LOCK_ID},
)

try:
    command.upgrade(alembic_cfg, "head")
finally:
    lock_connection.invalidate()
    lock_connection.close()
```

There are two important details:

- The lock needs its own explicit connection. Session-level locks belong to the physical Postgres session; acquiring and releasing through `engine.execute(...)` may use different pooled connections.
- We invalidate the connection instead of returning it to the pool. This guarantees the session-level lock is released and prevents session settings changed for migrations from leaking into normal application queries.

This looked correct. Then a parallel migration test hung on `CREATE INDEX CONCURRENTLY`.

## The Hidden Wait Cycle

The blocking `pg_advisory_lock(...)` call was the problem.

Suppose container A gets the advisory lock and container B starts a blocking query to acquire the same lock:

1. Container A holds the advisory lock.
2. Container B's `SELECT pg_advisory_lock(...)` waits inside an active query.
3. Container A starts `CREATE INDEX CONCURRENTLY`.
4. Postgres waits for transactions with older snapshots before completing the concurrent index build.
5. Container B's query cannot finish until A releases the advisory lock.
6. Container A does not release the lock until its migration finishes.

`pg_stat_activity` makes both database-visible waits clear:

```txt
query                                      wait_event   blocked by
select pg_advisory_lock(...)               advisory     container A's lock session
create index concurrently ...              virtualxid   container B's lock query
```

{% graphviz %}
digraph AdvisoryLockCycle {
  graph [rankdir=LR, fontname="Helvetica,Arial,sans-serif", bgcolor=transparent]
  node [shape=box, style="filled,rounded", fontname="Helvetica,Arial,sans-serif", fillcolor="#fdfbfb", color="#0f172a33"]
  edge [fontname="Helvetica,Arial,sans-serif", fontsize=9, color="#0b122088", arrowsize=0.7]

  lock [label="Container A\nadvisory-lock session", fillcolor="#c2e59c"]
  index [label="Container A\nCREATE INDEX CONCURRENTLY", fillcolor="#fde68a"]
  waiter [label="Container B\npg_advisory_lock(...) query", fillcolor="#fecaca"]

  lock -> index [label="releases lock only after\nmigration finishes"]
  index -> waiter [label="waits for old snapshot"]
  waiter -> lock [label="waits for advisory lock"]
}
{% endgraphviz %}

This is especially sneaky because container A uses one connection for the advisory lock and another connection for Alembic. Postgres cannot see the application-level dependency between those two sessions, so its deadlock detector does not see the complete cycle.

## The Fix: Try, Sleep, Repeat

[`pg_try_advisory_lock(...)`](https://www.postgresql.org/docs/current/functions-admin.html#FUNCTIONS-ADVISORY-LOCKS) returns immediately: `true` if it acquired the lock, otherwise `false`.

The losing containers can retry outside an active query:

```python
import time


lock_connection = engine.connect()

# Our normal pool applies timeouts that are not suitable for migrations.
lock_connection.execute(
    text("set lock_timeout = 0; set idle_in_transaction_session_timeout = 0")
)

while not lock_connection.execute(
    text("select pg_try_advisory_lock(:lock_id)"),
    {"lock_id": MIGRATION_ADVISORY_LOCK_ID},
).scalar():
    time.sleep(1)

try:
    command.upgrade(alembic_cfg, "head")
finally:
    lock_connection.invalidate()
    lock_connection.close()
```

The behavior is almost the same: one container migrates while the others wait. The important difference is that the losers wait in `sleep()`, not inside a Postgres query holding an active snapshot.

Once the winner finishes, one of the waiting containers acquires the lock, runs `upgrade head` as a no-op, and continues startup. This also avoids letting a losing container serve traffic against a partially migrated schema.

## The Lesson

`pg_advisory_lock(...)` and a retry loop around `pg_try_advisory_lock(...)` look equivalent, but they are not.

A blocking database query remains part of Postgres's transaction machinery while it waits. That can matter to operations such as [`CREATE INDEX CONCURRENTLY`](https://www.postgresql.org/docs/current/sql-createindex.html#SQL-CREATEINDEX-CONCURRENTLY), which wait for other transactions and snapshots as part of the index build.

The parallel test was the key. A normal migration test passed; only two migration runners using the real migration history exposed the wait cycle.

<sub>Credit to my teammate Eric for writing that test and finding the root cause.</sub>
