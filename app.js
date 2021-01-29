(function() {
  var f = window.__fuse = window.__fuse || {};
  var modules = f.modules = f.modules || {}; f.dt = function (x) { return x && x.__esModule ? x : { "default": x }; };

f.modules = modules;
  f.bundle = function(collection, fn) {
    for (var num in collection) {
      modules[num] = collection[num];
    }
    fn ? fn() : void 0;
  };
  f.c = {};
  f.r = function(id) {
    var cached = f.c[id];
    if (cached) return cached.m.exports;
    var module = modules[id];
    if (!module) {
      
      throw new Error('Module ' + id + ' was not found');
    }
    cached = f.c[id] = {};
    cached.exports = {};
    cached.m = { exports: cached.exports };
    module(f.r, cached.exports, cached.m);
    return cached.m.exports;
  }; 
})();
__fuse.bundle({

// src/index.css @7
7: function(__fusereq, exports, module){
__fusereq(8)("src/index.css","html, body {\n  margin: 0;\n  border: 0;\n}")
},

// ../library/src/core/data-source.ts @13
13: function(__fusereq, exports, module){
const MUTATING_ARR_FNS = ["pop", "push", "concat", "reverse", "shift", "sort", "splice", "unshift"];
const BAR_SIZE = 6;
function buildDataSource() {
  let data = [];
  let bar = new Float32Array(BAR_SIZE), bar2x_cpu, bar2x, bar3x_cpu, bar3x;
  let ids_cpu, ids;
  let is_dirty = true;
  function refresh(regl) {
    bar2x_cpu = new Float32Array(2 * data.length * BAR_SIZE);
    bar3x_cpu = new Float32Array(3 * data.length * BAR_SIZE);
    let N = Math.max(ids_cpu && ids_cpu.length || 100, 100);
    if (!ids_cpu || ids_cpu.length < N) {
      ids_cpu = new Float32Array(N * 2);
      for (let i = 0; i < N * 2; ++i) ids_cpu[i] = i;
      ids = ids && ids(ids_cpu) || regl.buffer(ids_cpu);
    }
    for (let i = 0; i < data.length; ++i) {
      bar[0] = data[i].epoch;
      bar[1] = data[i].open;
      bar[2] = data[i].high;
      bar[3] = data[i].low;
      bar[4] = data[i].close;
      bar[5] = data[i].volume;
      bar2x_cpu.set(bar, (2 * i + 0) * BAR_SIZE);
      bar2x_cpu.set(bar, (2 * i + 1) * BAR_SIZE);
      bar3x_cpu.set(bar, (3 * i + 0) * BAR_SIZE);
      bar3x_cpu.set(bar, (3 * i + 1) * BAR_SIZE);
      bar3x_cpu.set(bar, (3 * i + 2) * BAR_SIZE);
    }
    bar2x = bar2x && bar2x(bar2x_cpu) || regl.buffer(bar2x_cpu);
    bar3x = bar3x && bar3x(bar2x_cpu) || regl.buffer(bar3x_cpu);
  }
  function buffers(regl) {
    if (is_dirty) {
      refresh(regl);
      is_dirty = false;
    }
    return {
      ids,
      bar2x,
      bar3x,
      bar2x_cpu,
      bar3x_cpu
    };
  }
  data.buffers = buffers;
  return new Proxy(data, {
    get(target, key, receiver) {
      if (!is_dirty && MUTATING_ARR_FNS.includes(key)) {
        is_dirty = true;
      }
      return Reflect.get(target, key, receiver);
    },
    set(target, idx, value, receiver) {
      if (typeof idx === "number") {
        is_dirty = true;
      }
      return Reflect.set(target, idx, value, receiver);
    }
  });
}
exports.buildDataSource = buildDataSource;

},

// ../library/src/core/data-view.ts @14
14: function(__fusereq, exports, module){
const MIN_VISIBLE_BARS = 5;
const clamp = (v, min, max) => {
  return v < min ? min : v > max ? max : v;
};
function buildDataView(width, getBarCount) {
  const DPR = window.devicePixelRatio;
  let zoom = Math.max(7 * DPR, (getBarCount() + 10) / width);
  let origin = getBarCount() - width / zoom + 10;
  function setWidth(value) {
    const delta = (width - value) / zoom;
    width = value;
    move(delta);
  }
  function move(bars) {
    const bar_count = width / zoom;
    origin = clamp(origin + bars, MIN_VISIBLE_BARS - bar_count, getBarCount() - MIN_VISIBLE_BARS);
  }
  function squeeze(pixels) {
    const delta = pixels / zoom;
    const bar_count = width / zoom;
    zoom = clamp(width / (bar_count + delta), DPR, 45 * DPR);
    const bars = width / zoom - bar_count;
    move(-bars);
  }
  return {
    move,
    squeeze,
    setWidth,
    getZoom: () => zoom,
    getOrigin: () => origin
  };
}
exports.buildDataView = buildDataView;

},

// ../library/src/input/user-input.ts @17
17: function(__fusereq, exports, module){
function trackUserInput(view, element) {
  function wheel(e) {
    e.preventDefault();
    view.squeeze(e.deltaY);
    view.move(e.deltaX / view.getZoom());
  }
  function keydown(event) {
    const callback = ({
      ArrowLeft: () => view.move(-1),
      ArrowRight: () => view.move(+1)
    })[event.key];
    callback && callback();
  }
  function onDestroy() {
    element.removeEventListener("wheel", wheel);
    window.removeEventListener("keydown", keydown);
  }
  let one, two;
  function tstart(e) {
    e.preventDefault();
    const t = e.touches;
    one = {
      x: t[0].pageX,
      y: t[0].pageY
    };
    if (t[1]) {
      two = {
        x: t[1].pageX,
        y: t[1].pageY
      };
    }
  }
  function tmove(e) {
    e.preventDefault();
    if (e.touches.length === 1) {
      const deltaX = one.x - e.touches[0].pageX;
      view.move(deltaX / view.getZoom());
    }
  }
  element.addEventListener("wheel", wheel, {
    passive: false
  });
  window.addEventListener("keydown", keydown);
  element.addEventListener("touchstart", tstart, false);
  element.addEventListener("touchmove", tmove, false);
  return {
    onDestroy
  };
}
exports.trackUserInput = trackUserInput;

},

// ../library/src/draw/candle/candle-border.ts @20
20: function(__fusereq, exports, module){
exports.__esModule = true;
exports.Border = {
  count: (_, {count}) => count * 2,
  instances: 4,
  primitive: "lines",
  depth: {
    enable: false
  },
  attributes: {
    inst_id: (_, {ids}) => ({
      buffer: ids,
      stride: 4,
      divisor: 1
    }),
    vert_id: (_, {ids}) => ({
      buffer: ids,
      offset: 0,
      stride: 4,
      divisor: 0
    }),
    ohlc: (_, {bar2x}) => ({
      buffer: bar2x,
      offset: 4,
      stride: 6 * 4
    })
  },
  uniforms: {
    posColor: (_, {theme}) => theme.posColor,
    negColor: (_, {theme}) => theme.negColor,
    resolution: ctx => [ctx.viewportWidth, ctx.viewportHeight],
    y_min_max: (_, {y_min_max}) => y_min_max,
    x_zoom: (_, {x_zoom}) => x_zoom,
    x_origin: (_, {x_origin}) => x_origin
  },
  vert: `
    precision mediump float;

    uniform vec4 posColor;
    uniform vec4 negColor;

    uniform vec2 resolution;
    uniform vec2 y_min_max;
    uniform float x_zoom;
    uniform float x_origin;

    attribute float inst_id;
    attribute float vert_id;
    attribute vec4 ohlc;

    varying vec4 color;

    void main() {
      color = ohlc[0] <= ohlc[3] ? posColor : negColor;

      int vid = int(mod(vert_id, 2.0));
      int iid = int(mod(inst_id, 4.0));

      float y =
        iid == 0 ? ohlc[0]:
        iid == 2 ? ohlc[3]:
        vid == 0 ? ohlc[0]:
                   ohlc[3];
      y = floor(
        resolution.y * (y - y_min_max[0]) / (y_min_max[1] - y_min_max[0])
      );

      float halved = x_zoom >= 3.0 ? floor((x_zoom - 2.0) / 3.0) + 1.0 : 0.0;

      float x = floor(
        (floor(vert_id / 2.0) - x_origin + 0.5) * x_zoom + 0.5
      );
      x +=
        iid == 3 ? -halved:
        iid == 1 ? +halved:
        vid == 0 ? -halved - 1.0:
                   +halved;
      gl_Position = vec4(2.0 * vec2(x, y) / resolution - 1.0, 0., 1.);
    }`,
  frag: `
    precision mediump float;
    varying vec4 color;
    void main() {
      gl_FragColor = color;
    }`
};

},

// ../library/src/draw/candle/candle-wick.ts @18
18: function(__fusereq, exports, module){
exports.__esModule = true;
exports.Wick = {
  count: (_, {count}) => count * 2,
  instances: 2,
  primitive: "lines",
  depth: {
    enable: false
  },
  attributes: {
    inst_id: (_, {ids}) => ({
      buffer: ids,
      stride: 4,
      divisor: 1
    }),
    vert_id: (_, {ids}) => ({
      buffer: ids,
      stride: 4,
      divisor: 0
    }),
    ohlc: (_, {bar2x}) => ({
      buffer: bar2x,
      offset: 4,
      stride: 6 * 4
    })
  },
  uniforms: {
    posColor: (_, {theme}) => theme.posColor,
    negColor: (_, {theme}) => theme.negColor,
    resolution: ctx => [ctx.viewportWidth, ctx.viewportHeight],
    y_min_max: (_, {y_min_max}) => y_min_max,
    x_zoom: (_, {x_zoom}) => x_zoom,
    x_origin: (_, {x_origin}) => x_origin
  },
  vert: `
    precision mediump float;

    uniform vec4 posColor;
    uniform vec4 negColor;

    uniform vec2 resolution;
    uniform vec2 y_min_max;
    uniform float x_zoom;
    uniform float x_origin;

    attribute float inst_id;
    attribute float vert_id;
    attribute vec4 ohlc;

    varying vec4 color;

    void main() {
      color = ohlc[0] <= ohlc[3] ? posColor : negColor;
      int mode = int(mod(vert_id, 2.0) + 2.0 * inst_id);

      float y = 
        mode == 0 ? ohlc[1] :
        mode == 1 ? max(ohlc[0], ohlc[3]):
        mode == 2 ? ohlc[2] :
                    min(ohlc[0], ohlc[3]);
      y = floor(
        resolution.y * (y - y_min_max[0]) / (y_min_max[1] - y_min_max[0])
      );

      float x = floor(
        (floor(vert_id / 2.0) - x_origin + 0.5) * x_zoom + 0.5
      );
      gl_Position = vec4(2.0 * vec2(x, y) / resolution - 1.0, 0., 1.);
    }`,
  frag: `
    precision mediump float;
    varying vec4 color;
    void main() {
      gl_FragColor = color;
    }`
};

},

// ../library/src/draw/candle/candle-body.ts @19
19: function(__fusereq, exports, module){
exports.__esModule = true;
exports.Body = {
  count: (_, {count}) => count * 3,
  instances: 2,
  primitive: "triangles",
  depth: {
    enable: false
  },
  attributes: {
    inst_id: (_, {ids}) => ({
      buffer: ids,
      stride: 4,
      divisor: 1
    }),
    vert_id: (_, {ids}) => ({
      buffer: ids,
      offset: 0,
      stride: 4,
      divisor: 0
    }),
    ohlc: (_, {bar3x}) => ({
      buffer: bar3x,
      offset: 4,
      stride: 6 * 4
    })
  },
  uniforms: {
    posColor: (_, {theme}) => theme.posColor,
    negColor: (_, {theme}) => theme.negColor,
    resolution: ctx => [ctx.viewportWidth, ctx.viewportHeight],
    y_min_max: (_, {y_min_max}) => y_min_max,
    x_zoom: (_, {x_zoom}) => x_zoom,
    x_origin: (_, {x_origin}) => x_origin
  },
  vert: `
    precision mediump float;

    uniform vec4 posColor;
    uniform vec4 negColor;

    uniform vec2 resolution;
    uniform vec2 y_min_max;
    uniform float x_zoom;
    uniform float x_origin;

    attribute float inst_id;
    attribute float vert_id;
    attribute vec4 ohlc;

    varying vec4 color;

    void main() {
      color = ohlc[0] <= ohlc[3] ? posColor : negColor;

      int vid = int(mod(vert_id, 3.0));
      int iid = int(mod(inst_id, 2.0));

      float y = (iid == 0 && vid != 1) || (iid == 1 && vid == 0)
                ? ohlc[0] : ohlc[3];
      y = floor(
        resolution.y * (y - y_min_max[0]) / (y_min_max[1] - y_min_max[0])
      );

      float halved = x_zoom >= 3.0 ? floor((x_zoom - 2.0) / 3.0) + 1.0 : 0.0;
      float x = floor(
        (floor(vert_id / 3.0) - x_origin + 0.5) * x_zoom + 0.5
      );
      x += (iid == 0 && vid == 0) || (iid == 1 && vid != 2)
           ? -halved - 1.0: +halved;

      gl_Position = vec4(2.0 * vec2(x, y) / resolution - 1.0, 0., 1.);
    }`,
  frag: `
    precision mediump float;
    varying vec4 color;
    void main() {
      gl_FragColor = color;
    }`
};

},

// ../library/src/draw/candle/candle.ts @12
12: function(__fusereq, exports, module){
exports.__esModule = true;
var candle_wick_1 = __fusereq(18);
var candle_body_1 = __fusereq(19);
var candle_border_1 = __fusereq(20);
function buildCandle(regl) {
  const wick = regl(candle_wick_1.Wick);
  const body = regl(candle_body_1.Body);
  const border = regl(candle_border_1.Border);
  return function (source, view, theme) {
    const {bar2x, bar3x, ids} = source.buffers(regl);
    wick({
      theme: theme.wick,
      bar2x,
      ids,
      count: source.length,
      ...view
    });
    if (!theme.hollow) {
      body({
        theme: theme.body,
        bar3x,
        ids,
        count: source.length,
        ...view
      });
    }
    border({
      theme: theme.border,
      bar2x,
      ids,
      count: source.length,
      ...view
    });
  };
}
exports.buildCandle = buildCandle;

},

// ../library/src/core/build-regl.ts @15
15: function(__fusereq, exports, module){
exports.__esModule = true;
var regl_1 = __fusereq(21);
var regl_1d = __fuse.dt(regl_1);
function buildRegl(element, onResize) {
  const pixelRatio = typeof window === "undefined" ? 1 : window.devicePixelRatio;
  const canvas = document.createElement("canvas");
  Object.assign(canvas.style, {
    border: 0,
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    display: "block",
    imageRendering: "pixelated"
  });
  element.appendChild(canvas);
  if (element === document.body) {
    canvas.style.position = "absolute";
    Object.assign(element.style, {
      margin: 0,
      padding: 0
    });
  }
  function resize() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    if (element !== document.body) {
      let bounds = element.getBoundingClientRect();
      w = bounds.width;
      h = bounds.height;
    }
    canvas.width = pixelRatio * w;
    canvas.height = pixelRatio * h;
    Object.assign(canvas.style, {
      width: w + "px",
      height: h + "px"
    });
    onResize && onResize(pixelRatio * w, pixelRatio * h);
  }
  let resizeObserver;
  if (element !== document.body && typeof ResizeObserver === "function") {
    resizeObserver = new ResizeObserver(function () {
      setTimeout(resize);
    });
    resizeObserver.observe(element);
  } else {
    window.addEventListener("resize", resize, false);
  }
  function onDestroy() {
    if (resizeObserver) {
      resizeObserver.disconnect();
    } else {
      window.removeEventListener("resize", resize);
    }
    element.removeChild(canvas);
  }
  resize();
  const gl = canvas.getContext("webgl", {
    antialias: false
  });
  return regl_1d.default({
    gl: gl,
    extensions: ["ANGLE_instanced_arrays", "OES_vertex_array_object"]
  });
}
exports.buildRegl = buildRegl;

},

// ../library/src/theme/convert-color.ts @23
23: function(__fusereq, exports, module){
exports.__esModule = true;
exports.to_rgba = (function () {
  const cvs = document.createElement("canvas");
  cvs.height = 1;
  cvs.width = 1;
  const ctx = cvs.getContext("2d");
  const cache = {};
  return function (color) {
    if (cache[color]) {
      return cache[color];
    }
    if (!color) {
      return [0, 0, 0, 1];
    }
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const data = ctx.getImageData(0, 0, 1, 1).data;
    return cache[color] = [...data].map(v => v / 255);
  };
})();

},

// ../library/src/theme/default-themes.ts @24
24: function(__fusereq, exports, module){
exports.__esModule = true;
exports.LightTheme = {
  candle: {
    hollow: false,
    border: {
      posColor: "#26a69a",
      negColor: "#ef5350"
    },
    body: {
      posColor: "#26a69a",
      negColor: "#ef5350"
    },
    wick: {
      posColor: "#26a69a",
      negColor: "#ef5350"
    }
  }
};
exports.DarkTheme = {
  candle: {
    hollow: false,
    border: {
      posColor: "#26a69a",
      negColor: "#ef5350"
    },
    body: {
      posColor: "#26a69a",
      negColor: "#ef5350"
    },
    wick: {
      posColor: "#26a69a",
      negColor: "#ef5350"
    }
  }
};

},

// ../library/src/theme/build-theme.ts @16
16: function(__fusereq, exports, module){
exports.__esModule = true;
var convert_color_1 = __fusereq(23);
var default_themes_1 = __fusereq(24);
function buildTheme() {
  let backup = {};
  let rgba = {};
  function setTheme(theme) {
    merge(backup, theme);
    rgba = clone(backup);
    rgba_colors(rgba);
  }
  setTheme(default_themes_1.LightTheme);
  return {
    getRGBA: () => rgba,
    getTheme: () => backup,
    setTheme
  };
}
exports.buildTheme = buildTheme;
function rgba_colors(obj) {
  for (let k in obj) {
    if (typeof obj[k] == "object" && obj[k] !== null) {
      rgba_colors(obj[k]);
    } else if (k.endsWith("Color")) {
      obj[k] = convert_color_1.to_rgba(obj[k]);
    }
  }
}
function merge(target, source) {
  for (let k in source) {
    if (typeof source[k] == "object" && source[k]) {
      target[k] = target[k] || ({});
      merge(target[k], source[k]);
    } else {
      target[k] = source[k];
    }
  }
}
const clone = obj => JSON.parse(JSON.stringify(obj));

},

// ../library/src/index.ts @6
6: function(__fusereq, exports, module){
exports.__esModule = true;
var candle_1 = __fusereq(12);
var data_source_1 = __fusereq(13);
var data_view_1 = __fusereq(14);
var build_regl_1 = __fusereq(15);
var build_theme_1 = __fusereq(16);
var user_input_1 = __fusereq(17);
function buildChart({element}) {
  const source = data_source_1.buildDataSource();
  const view = data_view_1.buildDataView(300, () => source.length);
  const regl = build_regl_1.buildRegl(element, (w, _) => view.setWidth(w));
  const input = user_input_1.trackUserInput(view, element);
  const theme = build_theme_1.buildTheme();
  const candle = candle_1.buildCandle(regl);
  regl.frame(() => {
    const rgba = theme.getRGBA();
    candle(source, {
      x_origin: view.getOrigin(),
      x_zoom: view.getZoom(),
      y_min_max: [0, 10]
    }, rgba.candle);
  });
  return {
    source: source,
    view,
    theme
  };
}
exports.buildChart = buildChart;

},

// src/index.tsx @1
1: function(__fusereq, exports, module){
exports.__esModule = true;
var react_1 = __fusereq(4);
var react_1d = __fuse.dt(react_1);
var react_dom_1 = __fusereq(5);
var index_1 = __fusereq(6);
__fusereq(7);
function GChart() {
  const ref = react_1.useRef();
  react_1.useEffect(() => {
    const element = ref.current;
    const chart = index_1.buildChart({
      element
    });
    chart.source.push({
      epoch: 0,
      open: 3,
      high: 7,
      low: 3,
      close: 7,
      volume: 5
    }, {
      epoch: 1,
      open: 7,
      high: 10,
      low: 2,
      close: 4,
      volume: 5
    }, {
      epoch: 0,
      open: 3,
      high: 9,
      low: 1,
      close: 7,
      volume: 5
    }, {
      epoch: 1,
      open: 7,
      high: 10,
      low: 2,
      close: 4,
      volume: 5
    }, {
      epoch: 0,
      open: 3,
      high: 9,
      low: 1,
      close: 7,
      volume: 5
    }, {
      epoch: 1,
      open: 7,
      high: 10,
      low: 2,
      close: 4,
      volume: 5
    }, {
      epoch: 0,
      open: 3,
      high: 9,
      low: 1,
      close: 7,
      volume: 5
    }, {
      epoch: 1,
      open: 7,
      high: 10,
      low: 2,
      close: 4,
      volume: 5
    });
    window.chart = chart;
  }, []);
  return react_1d.default.createElement("div", {
    id: 'gchart',
    style: {
      height: 'calc(100vh - 140px)'
    },
    ref: ref
  });
}
function App() {
  return react_1d.default.createElement(react_1d.default.Fragment, null, react_1d.default.createElement("h1", null, " Hello World "), react_1d.default.createElement(GChart, null));
}
react_dom_1.render(react_1d.default.createElement(App, null), document.getElementById("root"));

}
})
//# sourceMappingURL=app.js.map