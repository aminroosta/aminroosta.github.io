/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator,__exportStar,__values,__read,__spread,__spreadArrays,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault;!function(){var e=window.__fuse=window.__fuse||{},o=e.modules=e.modules||{};e.dt=function(e){return e&&e.__esModule?e:{default:e}},e.bundle=function(e,n){for(var t in e)o[t]=e[t];n&&n()},e.c={},e.r=function(n){var t=e.c[n];if(t)return t.m.exports;var r=o[n];if(!r)throw new Error("Module "+n+" was not found");return(t=e.c[n]={}).exports={},t.m={exports:t.exports},r(e.r,t.exports,t.m),t.m.exports}}(),function(e){var o="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==o&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(o,t){return e[o]=n?n(o,t):t}}"function"==typeof define&&define.amd?define("tslib",["exports"],(function(t){e(n(o,n(t)))})):"object"==typeof module&&"object"==typeof module.exports?e(n(o,n(module.exports))):e(n(o))}((function(e){var o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,o){e.__proto__=o}||function(e,o){for(var n in o)o.hasOwnProperty(n)&&(e[n]=o[n])};__extends=function(e,n){function t(){this.constructor=e}o(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)},__assign=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},__rest=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n},__decorate=function(e,o,n,t){var r,i=arguments.length,a=i<3?o:null===t?t=Object.getOwnPropertyDescriptor(o,n):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,o,n,t);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(o,n,a):r(o,n))||a);return i>3&&a&&Object.defineProperty(o,n,a),a},__param=function(e,o){return function(n,t){o(n,t,e)}},__metadata=function(e,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,o)},__awaiter=function(e,o,n,t){return new(n||(n=Promise))((function(r,i){function a(e){try{c(t.next(e))}catch(e){i(e)}}function l(e){try{c(t.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n((function(o){o(e.value)})).then(a,l)}c((t=t.apply(e,o||[])).next())}))},__generator=function(e,o){var n,t,r,i,a={label:0,ops:[],sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[]};return i={next:l(0),return:l(2),throw:l(1)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,t&&(r=2&i[0]?t.return:i[0]?t.throw||((r=t.return)&&r.call(t),0):t.next)&&!(r=r.call(t,i[1])).done)return r;switch(t=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{done:!1,value:i[1]};case 5:a.label++,t=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=o.call(e,a)}catch(e){i=[6,e],t=0}finally{n=r=0}if(5&i[0])throw i[1];return{done:!0,value:i[0]?i[1]:void 0}}([i,l])}}},__exportStar=function(e,o){for(var n in e)o.hasOwnProperty(n)||(o[n]=e[n])},__values=function(e){var o="function"==typeof Symbol&&e[Symbol.iterator],n=0;return o?o.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{done:!e,value:e&&e[n++]}}}},__read=function(e,o){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,r,i=n.call(e),a=[];try{for(;(void 0===o||o-- >0)&&!(t=i.next()).done;)a.push(t.value)}catch(e){r={error:e}}finally{try{t&&!t.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},__spread=function(){for(var e=[],o=0;o<arguments.length;o++)e=e.concat(__read(arguments[o]));return e},__spreadArrays=function(){for(var e=0,o=0,n=arguments.length;o<n;o++)e+=arguments[o].length;var t=Array(e),r=0;for(o=0;o<n;o++)for(var i=arguments[o],a=0,l=i.length;a<l;a++,r++)t[r]=i[a];return t},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,o,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=n.apply(e,o||[]),i=[];return t={},a("next"),a("throw"),a("return"),t[Symbol.asyncIterator]=function(){return this},t;function a(e){r[e]&&(t[e]=function(o){return new Promise((function(n,t){i.push([e,o,n,t])>1||l(e,o)}))})}function l(e,o){try{(n=r[e](o)).value instanceof __await?Promise.resolve(n.value.v).then(c,u):s(i[0][2],n)}catch(e){s(i[0][3],e)}var n}function c(e){l("next",e)}function u(e){l("throw",e)}function s(e,o){e(o),i.shift(),i.length&&l(i[0][0],i[0][1])}},__asyncDelegator=function(e){var o,n;return o={},t("next"),t("throw",(function(e){throw e})),t("return"),o[Symbol.iterator]=function(){return this},o;function t(t,r){o[t]=e[t]?function(o){return(n=!n)?{done:"return"===t,value:__await(e[t](o))}:r?r(o):o}:r}},__asyncValues=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),o={},t("next"),t("throw"),t("return"),o[Symbol.asyncIterator]=function(){return this},o);function t(n){o[n]=e[n]&&function(o){return new Promise((function(t,r){(function(e,o,n,t){Promise.resolve(t).then((function(o){e({done:n,value:o})}),o)})(t,r,(o=e[n](o)).done,o.value)}))}}},__makeTemplateObject=function(e,o){return Object.defineProperty?Object.defineProperty(e,"raw",{value:o}):e.raw=o,e},__importStar=function(e){if(e&&e.__esModule)return e;var o={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(o[n]=e[n]);return o.default=e,o},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},e("__extends",__extends),e("__assign",__assign),e("__rest",__rest),e("__decorate",__decorate),e("__param",__param),e("__metadata",__metadata),e("__awaiter",__awaiter),e("__generator",__generator),e("__exportStar",__exportStar),e("__values",__values),e("__read",__read),e("__spread",__spread),e("__spreadArrays",__spreadArrays),e("__await",__await),e("__asyncGenerator",__asyncGenerator),e("__asyncDelegator",__asyncDelegator),e("__asyncValues",__asyncValues),e("__makeTemplateObject",__makeTemplateObject),e("__importStar",__importStar),e("__importDefault",__importDefault)})),__fuse.bundle({1:function(e,o,n){o.__esModule=!0;var t=e(2),r=__fuse.dt(t),i=e(3),a=e(4);function l(){const e=t.useRef();return t.useEffect((()=>{const o=e.current,n=a.buildChart({element:o});n.source.push({epoch:0,open:3,high:7,low:3,close:7,volume:5},{epoch:1,open:7,high:10,low:2,close:4,volume:5},{epoch:0,open:3,high:9,low:1,close:7,volume:5},{epoch:1,open:7,high:10,low:2,close:4,volume:5},{epoch:0,open:3,high:9,low:1,close:7,volume:5},{epoch:1,open:7,high:10,low:2,close:4,volume:5},{epoch:0,open:3,high:9,low:1,close:7,volume:5},{epoch:1,open:7,high:10,low:2,close:4,volume:5}),window.chart=n}),[]),r.default.createElement("div",{id:"gchart",style:{height:"calc(100vh - 140px)"},ref:e})}i.render(r.default.createElement((function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement("h1",null," Hello World "),r.default.createElement(l,null))}),null),document.getElementById("root"))},4:function(e,o,n){o.__esModule=!0;var t=e(8),r=e(9),i=e(10),a=e(11),l=e(12),c=e(13);o.buildChart=function({element:e}){const o=r.buildDataSource(),n=i.buildDataView(300,(()=>o.length)),u=a.buildRegl(e,((e,o)=>n.setWidth(e))),s=(c.trackUserInput(n,e),l.buildTheme()),f=t.buildCandle(u);return u.frame((()=>{const e=s.getRGBA();f(o,{x_origin:n.getOrigin(),x_zoom:n.getZoom(),y_min_max:[0,10]},e.candle)})),{source:o,view:n,theme:s}}},8:function(e,o,n){o.__esModule=!0;var t=e(14),r=e(15),i=e(16);o.buildCandle=function(e){const o=e(t.Wick),n=e(r.Body),a=e(i.Border);return function(t,r,i){const{bar2x:l,bar3x:c,ids:u}=t.buffers(e);o(Object.assign({theme:i.wick,bar2x:l,ids:u,count:t.length},r)),i.hollow||n(Object.assign({theme:i.body,bar3x:c,ids:u,count:t.length},r)),a(Object.assign({theme:i.border,bar2x:l,ids:u,count:t.length},r))}}},9:function(e,o,n){const t=["pop","push","concat","reverse","shift","sort","splice","unshift"];o.buildDataSource=function(){let e,o,n,r,i,a,l=[],c=new Float32Array(6),u=!0;return l.buffers=function(t){return u&&(!function(t){e=new Float32Array(2*l.length*6),n=new Float32Array(3*l.length*6);let u=Math.max(i&&i.length||100,100);if(!i||i.length<u){i=new Float32Array(2*u);for(let e=0;e<2*u;++e)i[e]=e;a=a&&a(i)||t.buffer(i)}for(let o=0;o<l.length;++o)c[0]=l[o].epoch,c[1]=l[o].open,c[2]=l[o].high,c[3]=l[o].low,c[4]=l[o].close,c[5]=l[o].volume,e.set(c,6*(2*o+0)),e.set(c,6*(2*o+1)),n.set(c,6*(3*o+0)),n.set(c,6*(3*o+1)),n.set(c,6*(3*o+2));o=o&&o(e)||t.buffer(e),r=r&&r(e)||t.buffer(n)}(t),u=!1),{ids:a,bar2x:o,bar3x:r,bar2x_cpu:e,bar3x_cpu:n}},new Proxy(l,{get:(e,o,n)=>(!u&&t.includes(o)&&(u=!0),Reflect.get(e,o,n)),set:(e,o,n,t)=>("number"==typeof o&&(u=!0),Reflect.set(e,o,n,t))})}},10:function(e,o,n){const t=(e,o,n)=>e<o?o:e>n?n:e;o.buildDataView=function(e,o){const n=window.devicePixelRatio;let r=Math.max(7*n,(o()+10)/e),i=o()-e/r+10;function a(n){i=t(i+n,5-e/r,o()-5)}return{move:a,squeeze:function(o){const i=e/r;r=t(e/(i+o/r),n,45*n),a(-(e/r-i))},setWidth:function(o){const n=(e-o)/r;e=o,a(n)},getZoom:()=>r,getOrigin:()=>i}}},11:function(e,o,n){o.__esModule=!0;var t=e(19),r=__fuse.dt(t);o.buildRegl=function(e,o){const n="undefined"==typeof window?1:window.devicePixelRatio,t=document.createElement("canvas");function i(){let r=window.innerWidth,i=window.innerHeight;if(e!==document.body){let o=e.getBoundingClientRect();r=o.width,i=o.height}t.width=n*r,t.height=n*i,Object.assign(t.style,{width:r+"px",height:i+"px"}),o&&o(n*r,n*i)}let a;Object.assign(t.style,{border:0,margin:0,padding:0,top:0,left:0,display:"block",imageRendering:"pixelated"}),e.appendChild(t),e===document.body&&(t.style.position="absolute",Object.assign(e.style,{margin:0,padding:0})),e!==document.body&&"function"==typeof ResizeObserver?(a=new ResizeObserver((function(){setTimeout(i)})),a.observe(e)):window.addEventListener("resize",i,!1),i();const l=t.getContext("webgl",{antialias:!1});return r.default({gl:l,extensions:["ANGLE_instanced_arrays","OES_vertex_array_object"]})}},12:function(e,o,n){o.__esModule=!0;var t=e(20),r=e(21);function i(e){for(let o in e)"object"==typeof e[o]&&null!==e[o]?i(e[o]):o.endsWith("Color")&&(e[o]=t.to_rgba(e[o]))}function a(e,o){for(let n in o)"object"==typeof o[n]&&o[n]?(e[n]=e[n]||{},a(e[n],o[n])):e[n]=o[n]}o.buildTheme=function(){let e={},o={};function n(n){a(e,n),o=l(e),i(o)}return n(r.LightTheme),{getRGBA:()=>o,getTheme:()=>e,setTheme:n}};const l=e=>JSON.parse(JSON.stringify(e))},13:function(e,o,n){o.trackUserInput=function(e,o){function n(o){o.preventDefault(),e.squeeze(o.deltaY),e.move(o.deltaX/e.getZoom())}function t(o){const n={ArrowLeft:()=>e.move(-1),ArrowRight:()=>e.move(1)}[o.key];n&&n()}let r,i;return o.addEventListener("wheel",n,{passive:!1}),window.addEventListener("keydown",t),o.addEventListener("touchstart",(function(e){e.preventDefault();const o=e.touches;r={x:o[0].pageX,y:o[0].pageY},o[1]&&(i={x:o[1].pageX,y:o[1].pageY})}),!1),o.addEventListener("touchmove",(function(o){if(o.preventDefault(),1===o.touches.length){const n=r.x-o.touches[0].pageX;e.move(n/e.getZoom())}}),!1),{onDestroy:function(){o.removeEventListener("wheel",n),window.removeEventListener("keydown",t)}}}},14:function(e,o,n){o.__esModule=!0,o.Wick={count:(e,{count:o})=>2*o,instances:2,primitive:"lines",depth:{enable:!1},attributes:{inst_id:(e,{ids:o})=>({buffer:o,stride:4,divisor:1}),vert_id:(e,{ids:o})=>({buffer:o,stride:4,divisor:0}),ohlc:(e,{bar2x:o})=>({buffer:o,offset:4,stride:24})},uniforms:{posColor:(e,{theme:o})=>o.posColor,negColor:(e,{theme:o})=>o.negColor,resolution:e=>[e.viewportWidth,e.viewportHeight],y_min_max:(e,{y_min_max:o})=>o,x_zoom:(e,{x_zoom:o})=>o,x_origin:(e,{x_origin:o})=>o},vert:"\n    precision mediump float;\n\n    uniform vec4 posColor;\n    uniform vec4 negColor;\n\n    uniform vec2 resolution;\n    uniform vec2 y_min_max;\n    uniform float x_zoom;\n    uniform float x_origin;\n\n    attribute float inst_id;\n    attribute float vert_id;\n    attribute vec4 ohlc;\n\n    varying vec4 color;\n\n    void main() {\n      color = ohlc[0] <= ohlc[3] ? posColor : negColor;\n      int mode = int(mod(vert_id, 2.0) + 2.0 * inst_id);\n\n      float y = \n        mode == 0 ? ohlc[1] :\n        mode == 1 ? max(ohlc[0], ohlc[3]):\n        mode == 2 ? ohlc[2] :\n                    min(ohlc[0], ohlc[3]);\n      y = floor(\n        resolution.y * (y - y_min_max[0]) / (y_min_max[1] - y_min_max[0])\n      );\n\n      float x = floor(\n        (floor(vert_id / 2.0) - x_origin + 0.5) * x_zoom + 0.5\n      );\n      gl_Position = vec4(2.0 * vec2(x, y) / resolution - 1.0, 0., 1.);\n    }",frag:"\n    precision mediump float;\n    varying vec4 color;\n    void main() {\n      gl_FragColor = color;\n    }"}},15:function(e,o,n){o.__esModule=!0,o.Body={count:(e,{count:o})=>3*o,instances:2,primitive:"triangles",depth:{enable:!1},attributes:{inst_id:(e,{ids:o})=>({buffer:o,stride:4,divisor:1}),vert_id:(e,{ids:o})=>({buffer:o,offset:0,stride:4,divisor:0}),ohlc:(e,{bar3x:o})=>({buffer:o,offset:4,stride:24})},uniforms:{posColor:(e,{theme:o})=>o.posColor,negColor:(e,{theme:o})=>o.negColor,resolution:e=>[e.viewportWidth,e.viewportHeight],y_min_max:(e,{y_min_max:o})=>o,x_zoom:(e,{x_zoom:o})=>o,x_origin:(e,{x_origin:o})=>o},vert:"\n    precision mediump float;\n\n    uniform vec4 posColor;\n    uniform vec4 negColor;\n\n    uniform vec2 resolution;\n    uniform vec2 y_min_max;\n    uniform float x_zoom;\n    uniform float x_origin;\n\n    attribute float inst_id;\n    attribute float vert_id;\n    attribute vec4 ohlc;\n\n    varying vec4 color;\n\n    void main() {\n      color = ohlc[0] <= ohlc[3] ? posColor : negColor;\n\n      int vid = int(mod(vert_id, 3.0));\n      int iid = int(mod(inst_id, 2.0));\n\n      float y = (iid == 0 && vid != 1) || (iid == 1 && vid == 0)\n                ? ohlc[0] : ohlc[3];\n      y = floor(\n        resolution.y * (y - y_min_max[0]) / (y_min_max[1] - y_min_max[0])\n      );\n\n      float halved = x_zoom >= 3.0 ? floor((x_zoom - 2.0) / 3.0) + 1.0 : 0.0;\n      float x = floor(\n        (floor(vert_id / 3.0) - x_origin + 0.5) * x_zoom + 0.5\n      );\n      x += (iid == 0 && vid == 0) || (iid == 1 && vid != 2)\n           ? -halved - 1.0: +halved;\n\n      gl_Position = vec4(2.0 * vec2(x, y) / resolution - 1.0, 0., 1.);\n    }",frag:"\n    precision mediump float;\n    varying vec4 color;\n    void main() {\n      gl_FragColor = color;\n    }"}},16:function(e,o,n){o.__esModule=!0,o.Border={count:(e,{count:o})=>2*o,instances:4,primitive:"lines",depth:{enable:!1},attributes:{inst_id:(e,{ids:o})=>({buffer:o,stride:4,divisor:1}),vert_id:(e,{ids:o})=>({buffer:o,offset:0,stride:4,divisor:0}),ohlc:(e,{bar2x:o})=>({buffer:o,offset:4,stride:24})},uniforms:{posColor:(e,{theme:o})=>o.posColor,negColor:(e,{theme:o})=>o.negColor,resolution:e=>[e.viewportWidth,e.viewportHeight],y_min_max:(e,{y_min_max:o})=>o,x_zoom:(e,{x_zoom:o})=>o,x_origin:(e,{x_origin:o})=>o},vert:"\n    precision mediump float;\n\n    uniform vec4 posColor;\n    uniform vec4 negColor;\n\n    uniform vec2 resolution;\n    uniform vec2 y_min_max;\n    uniform float x_zoom;\n    uniform float x_origin;\n\n    attribute float inst_id;\n    attribute float vert_id;\n    attribute vec4 ohlc;\n\n    varying vec4 color;\n\n    void main() {\n      color = ohlc[0] <= ohlc[3] ? posColor : negColor;\n\n      int vid = int(mod(vert_id, 2.0));\n      int iid = int(mod(inst_id, 4.0));\n\n      float y =\n        iid == 0 ? ohlc[0]:\n        iid == 2 ? ohlc[3]:\n        vid == 0 ? ohlc[0]:\n                   ohlc[3];\n      y = floor(\n        resolution.y * (y - y_min_max[0]) / (y_min_max[1] - y_min_max[0])\n      );\n\n      float halved = x_zoom >= 3.0 ? floor((x_zoom - 2.0) / 3.0) + 1.0 : 0.0;\n\n      float x = floor(\n        (floor(vert_id / 2.0) - x_origin + 0.5) * x_zoom + 0.5\n      );\n      x +=\n        iid == 3 ? -halved:\n        iid == 1 ? +halved:\n        vid == 0 ? -halved - 1.0:\n                   +halved;\n      gl_Position = vec4(2.0 * vec2(x, y) / resolution - 1.0, 0., 1.);\n    }",frag:"\n    precision mediump float;\n    varying vec4 color;\n    void main() {\n      gl_FragColor = color;\n    }"}},20:function(e,o,n){o.__esModule=!0,o.to_rgba=function(){const e=document.createElement("canvas");e.height=1,e.width=1;const o=e.getContext("2d"),n={};return function(e){if(n[e])return n[e];if(!e)return[0,0,0,1];o.fillStyle=e,o.fillRect(0,0,1,1);const t=o.getImageData(0,0,1,1).data;return n[e]=[...t].map((e=>e/255))}}()},21:function(e,o,n){o.__esModule=!0,o.LightTheme={candle:{hollow:!1,border:{posColor:"#26a69a",negColor:"#ef5350"},body:{posColor:"#26a69a",negColor:"#ef5350"},wick:{posColor:"#26a69a",negColor:"#ef5350"}}},o.DarkTheme={candle:{hollow:!1,border:{posColor:"#26a69a",negColor:"#ef5350"},body:{posColor:"#26a69a",negColor:"#ef5350"},wick:{posColor:"#26a69a",negColor:"#ef5350"}}}}});