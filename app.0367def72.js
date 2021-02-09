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
var __extends,__assign,__rest,__decorate,__param,__metadata,__awaiter,__generator,__exportStar,__values,__read,__spread,__spreadArrays,__await,__asyncGenerator,__asyncDelegator,__asyncValues,__makeTemplateObject,__importStar,__importDefault;!function(){var e=window.__fuse=window.__fuse||{},t=e.modules=e.modules||{};e.dt=function(e){return e&&e.__esModule?e:{default:e}},e.bundle=function(e,n){for(var o in e)t[o]=e[o];n&&n()},e.c={},e.r=function(n){var o=e.c[n];if(o)return o.m.exports;var r=t[n];if(!r)throw new Error("Module "+n+" was not found");return(o=e.c[n]={}).exports={},o.m={exports:o.exports},r(e.r,o.exports,o.m),o.m.exports}}(),function(e){var t="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:{};function n(e,n){return e!==t&&("function"==typeof Object.create?Object.defineProperty(e,"__esModule",{value:!0}):e.__esModule=!0),function(t,o){return e[t]=n?n(t,o):o}}"function"==typeof define&&define.amd?define("tslib",["exports"],(function(o){e(n(t,n(o)))})):"object"==typeof module&&"object"==typeof module.exports?e(n(t,n(module.exports))):e(n(t))}((function(e){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};__extends=function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)},__assign=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},__rest=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n},__decorate=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},__param=function(e,t){return function(n,o){t(n,o,e)}},__metadata=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__awaiter=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function l(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(a,l)}c((o=o.apply(e,t||[])).next())}))},__generator=function(e,t){var n,o,r,i,a={label:0,ops:[],sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[]};return i={next:l(0),return:l(2),throw:l(1)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{done:!1,value:i[1]};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=a.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{done:!0,value:i[0]?i[1]:void 0}}([i,l])}}},__exportStar=function(e,t){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},__values=function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{done:!e,value:e&&e[n++]}}}},__read=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;)a.push(o.value)}catch(e){r={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return a},__spread=function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e},__spreadArrays=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var o=Array(e),r=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,l=i.length;a<l;a++,r++)o[r]=i[a];return o},__await=function(e){return this instanceof __await?(this.v=e,this):new __await(e)},__asyncGenerator=function(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o,r=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){r[e]&&(o[e]=function(t){return new Promise((function(n,o){i.push([e,t,n,o])>1||l(e,t)}))})}function l(e,t){try{(n=r[e](t)).value instanceof __await?Promise.resolve(n.value.v).then(c,u):s(i[0][2],n)}catch(e){s(i[0][3],e)}var n}function c(e){l("next",e)}function u(e){l("throw",e)}function s(e,t){e(t),i.shift(),i.length&&l(i[0][0],i[0][1])}},__asyncDelegator=function(e){var t,n;return t={},o("next"),o("throw",(function(e){throw e})),o("return"),t[Symbol.iterator]=function(){return this},t;function o(o,r){t[o]=e[o]?function(t){return(n=!n)?{done:"return"===o,value:__await(e[o](t))}:r?r(t):t}:r}},__asyncValues=function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(t){return new Promise((function(o,r){(function(e,t,n,o){Promise.resolve(o).then((function(t){e({done:n,value:t})}),t)})(o,r,(t=e[n](t)).done,t.value)}))}}},__makeTemplateObject=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},__importStar=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},__importDefault=function(e){return e&&e.__esModule?e:{default:e}},e("__extends",__extends),e("__assign",__assign),e("__rest",__rest),e("__decorate",__decorate),e("__param",__param),e("__metadata",__metadata),e("__awaiter",__awaiter),e("__generator",__generator),e("__exportStar",__exportStar),e("__values",__values),e("__read",__read),e("__spread",__spread),e("__spreadArrays",__spreadArrays),e("__await",__await),e("__asyncGenerator",__asyncGenerator),e("__asyncDelegator",__asyncDelegator),e("__asyncValues",__asyncValues),e("__makeTemplateObject",__makeTemplateObject),e("__importStar",__importStar),e("__importDefault",__importDefault)})),__fuse.bundle({1:function(e,t,n){t.__esModule=!0;var o=e(2),r=__fuse.dt(o),i=e(3),a=e(4),l=e(5);function c(){const e=o.useRef();return o.useEffect((()=>{const t=e.current,n=a.buildChart({element:t});n.createSeries().theme.hollow=!0,l.query({symbol:"msft",interval:"60min"}).then((e=>{let t=e;n.source.setData(t),n.view.move(t.length),setInterval((()=>{const e=n.source.getData();e[e.length-1].open+=Math.random()>.5?.02:-.02,n.source.setData(e)}),1e3)})),window.chart=n}),[]),r.default.createElement("div",{id:"gchart",style:{height:"calc(100vh - 80pt)"},ref:e})}i.render(r.default.createElement((function(){return r.default.createElement(r.default.Fragment,null,r.default.createElement(c,null),r.default.createElement("div",{style:{fontSize:"16px"}},"msft intraday ^"))}),null),document.getElementById("root"))},4:function(e,t,n){t.__esModule=!0;var o=e(8),r=e(9),i=e(10),a=e(11),l=e(12),c=e(13),u=e(14),s=e(15);t.buildChart=function({element:e}){const t=[],n=o.buildRegl(e,(()=>{})),{divider:f,xaxis:d}=i.buildLayout(e),p=a.buildDataSource(),_=l.buildDataView(300,p.getBarCount),m=(c.trackUserInput(_,e),u.timeParser({timezone:0,getRevision:()=>p.getRevision(),getBars:()=>p.getData()})),g=s.buildGrid(n);return n.frame((e=>{const n=f.viewport(0);_.setWidth(n.width);const{text:o,positions:r}=m.getLabels({origin:_.getOrigin(),zoom:_.getZoom(),width:n.width,fontsize:12});d.draw(o,r),g(r,{viewport:n},{color:[0,0,0,.1]}),t.forEach(((e,t)=>{const n=f.viewport(t);e.draw({view:_,viewport:n,source:p})}))})),{source:p,view:_,createSeries:function(){const e=r.buildCandleSeries({regl:n});return t.push(e),e},get series(){return[...t]}}}},5:function(e,t,n){t.query=function({symbol:e,interval:t="5min"}){const n=`${e}-${t}`;let o=localStorage.getItem(n);if(o){const e=JSON.parse(o);return Promise.resolve(e)}return fetch(`https://www.alphavantage.co/query?outputsize=full&function=TIME_SERIES_INTRADAY&apikey=MZ9LJ2SQGBF1TA30&symbol=${e}&interval=${t}`).then((e=>e.json())).then((e=>{const o=e[`Time Series (${t})`];let r=[];for(let e in o){const{"1. open":t,"2. high":n,"3. low":i,"4. close":a,"5. volume":l}=o[e],c=new Date(e.replace(" ","T")+"Z");r.push({epoch:Math.floor(+c/1e3),open:+(+t).toFixed(2),high:+(+n).toFixed(2),low:+(+i).toFixed(2),close:+(+a).toFixed(2),volume:+(+l).toFixed(2)})}return r=r.sort(((e,t)=>e.epoch<t.epoch?-1:e.epoch>t.epoch?1:0)),localStorage.setItem(n,JSON.stringify(r)),r}))}},8:function(e,t,n){t.__esModule=!0;var o=e(20),r=__fuse.dt(o),i=e(21);t.buildRegl=function(e,t){const n=document.createElement("canvas");function o(){let o=window.innerWidth,r=window.innerHeight;if(e!==document.body){let t=e.getBoundingClientRect();o=t.width,r=t.height}n.width=o,n.height=r,Object.assign(n.style,{width:o+"px",height:r+"px"}),t&&t(o,r)}n.style.cssText="z-index: -1;\n  position: absolute; top: 0; left: 0;\n  border: 0; margin: 0; padding: 0; display: block;\n  image-rendering:pixelated;",Object.assign(e.style,{position:"relative",margin:0,padding:0}),e.appendChild(n),e===document.body&&(n.style.position="absolute",Object.assign(e.style,{margin:0,padding:0})),i.resizeObserve(e,o),o();const a=n.getContext("webgl",{antialias:!1,stencil:!1,depth:!1});return r.default({gl:a,extensions:[]})}},9:function(e,t,n){t.__esModule=!0;var o=e(17),r=e(18),i=e(19);t.buildCandleSeries=function({theme:e=r.CandleLight,regl:t}){const n=o.buildTheme(e),a=i.buildCandle(t);return{draw:function({view:e,viewport:t,source:o}){const r=e.getOrigin(),i=e.getZoom(),l=Math.round(r),c=Math.ceil(t.width/i),u=o.getData().slice(Math.max(l,0),Math.max(l+c,0)),s=Math.min(...u.map((e=>e.low))),f=Math.max(...u.map((e=>e.high)));a(o,{viewport:t,x_origin:e.getOrigin(),x_zoom:e.getZoom(),y_min_max:[s,f]},n.getRGBA())},get theme(){return n.proxy},set theme(e){n.setTheme(e)}}}},10:function(e,t,n){t.__esModule=!0;var o=e(24),r=__fuse.dt(o),i=e(25);const a=document.createElement.bind(document);t.buildLayout=function(e){!function(){if(l)return;const e=a("style");e.innerHTML='\n    .gutter {\n      position:relative;\n      background: transparent;\n    }\n    .gutter:before {\n      content: "";\n      position: absolute;\n      z-index: -1;\n      background-color: rgba(15, 15, 15, 0.05);\n    }\n    .gutter.gutter-horizontal:before {\n      top: 0; bottom: 0; left: 40%; right: 40%;\n    }\n    .gutter.gutter-vertical:before {\n      left: 0; right: 0; top: 40%; bottom: 40%;\n    }\n    .gutter.gutter-horizontal {\n      cursor: col-resize;\n      transform: scale(5, 1);\n     }\n    .gutter.gutter-vertical {\n      cursor: row-resize;\n      transform: scale(1, 5);\n    }\n  ',document.head.appendChild(e),l=!0}();const t=a("div");return t.style.cssText="display: flex; flex-direction: row; height: 100%;",e.appendChild(t),t.innerHTML='\n    <div class="g-left" style="flex: 0 0 25pt;background: #bbb;"></div>\n    <div class="g-midle" style="display: flex; flex-direction: column; flex-grow: 1;">\n      <div class="g-divider"></div>\n      <div class="g-bottom"></div>\n    </div>\n    <div class="g-right" style="flex: 0 0 25pt;background: #bbb;"></div>\n  ',{divider:c({root:t.querySelector(".g-divider"),parent:e,sizes:[100,10],direction:"vertical"}),xaxis:i.buildAxis({root:t.querySelector(".g-bottom"),direction:"horizontal",font:"16px serif"})}};let l=!1;function c({parent:e,root:t,sizes:n=[100],direction:o}){function i(e){const t=e.reduce(((e,t)=>e+t),0);return e.map((e=>100*e/t))}let l,c;function u(e){l&&l.destroy(),c=e.map((()=>a("div"))),t.innerHTML="",c.forEach((e=>t.appendChild(e)))}const s=window&&window.devicePixelRatio||1;function f(e){l=r.default(t.children,{sizes:e,gutterSize:3,direction:o,minSize:15*s,onDrag:t=>{const n=e.reduce(((e,t)=>e+t),0);e=t.map((e=>e*n/100))},elementStyle:(t,n,o)=>({"flex-basis":e.length>1?`calc(${n}% - ${o}pt)`:"100%"}),gutterStyle:(e,t)=>({"flex-basis":`${t}pt`})})}let d=i(n);const p="horizontal"==o?"row":"column";return t.style.cssText=`display: flex; flex-direction: ${p}; height: 100%; flex-grow: 1;`,u(d),f(i(d)),{getSizes:()=>[...d],setSizes:function(e){e.length===d.length?(l.setSizes(i(e)),d=e):(d=e,u(d),f(i(d)))},viewport:function(t){const n=e.getBoundingClientRect(),o=c[t].getBoundingClientRect();return{width:o.width,height:o.height,x:o.left-n.left,y:n.bottom-o.bottom}}}}t.Divider=c},11:function(e,t,n){t.buildDataSource=function(){let e,t,n,o,r,i,a=[],l=1,c=0;return{buffers:function(u){return l!==c&&(!function(l){e=new Float32Array(18*a.length),n=new Float32Array(12*a.length),r=new Float32Array(24*a.length);for(let t=0;t<a.length;++t){const{open:o,close:i,high:l,low:c}=a[t],u=o<=i?1:-1,s=t+1;let f=18*t;e[f+0]=e[f+3]=e[f+9]=-s,e[f+6]=e[f+12]=e[f+15]=+s,e[f+1]=e[f+7]=e[f+13]=o,e[f+4]=e[f+10]=e[f+16]=i,e[f+2]=e[f+5]=e[f+8]=u,e[f+11]=e[f+14]=e[f+17]=u,f=12*t,n[f+1]=l,n[f+4]=o>i?o:i,n[f+7]=o<i?o:i,n[f+10]=c,n[f+0]=n[f+3]=n[f+6]=n[f+9]=s,n[f+2]=n[f+5]=n[f+8]=n[f+11]=u,f=24*t,r[f+0]=r[f+15]=r[f+18]=r[f+21]=-s,r[f+3]=r[f+6]=r[f+9]=r[f+12]=+s,r[f+1]=r[f+4]=r[f+7]=r[f+22]=o,r[f+10]=r[f+13]=r[f+16]=r[f+19]=i,r[f+2]=r[f+5]=r[f+8]=r[f+11]=r[f+14]=r[f+17]=u,r[f+20]=r[f+23]=2*u}t=t&&t(e)||l.buffer(e),o=o&&o(n)||l.buffer(n),i=i&&i(r)||l.buffer(r)}(u),c=l),{body:t,body_cpu:e,wick:o,wick_cpu:n,border:i,border_cpu:r}},getRevision:()=>l,getBarCount:()=>a.length,getData:()=>a,setData(e){l+=1,a=e}}}},12:function(e,t,n){const o=(e,t,n)=>e<t?t:e>n?n:e;t.buildDataView=function(e,t){let n=Math.max(9,(t()+10)/e),r=Math.max(0,t()-e/n+10);function i(i){r=o(r+i,5-e/n,t()-5)}let a,l=0;return{moveVelocity(e){a=+new Date,l=e},move:i,squeeze:function(t){const r=e/n;n=o(e/(r+t/n),1,90),i(-(e/n-r))},setWidth:function(t){if(t==e)return;const o=(e-t)/n;e=t,i(o)},getZoom:()=>n,getOrigin:function(){if(l){const e=+new Date;i(-(l*(e-a)/n)),l*=.97,a=e}return r}}}},13:function(e,t,n){t.trackUserInput=function(e,t){function n(t){t.preventDefault(),e.squeeze(t.deltaY),e.move(t.deltaX/e.getZoom())}function o(t){const n={ArrowLeft:()=>e.move(-1),ArrowRight:()=>e.move(1)}[t.key];n&&n()}function r(e,t){const n=e.x-t.x,o=e.y-t.y;return Math.sqrt(n*n+o*o)}let i,a,l=[];function c(e){e.preventDefault();const t=e.touches,n=+new Date;i={x:t[0].pageX,y:t[0].pageY,t:n},t[1]&&(a={x:t[1].pageX,y:t[1].pageY,t:n}),l.push(i),l.length>2&&l.shift()}return t.addEventListener("wheel",n,{passive:!1}),window.addEventListener("keydown",o),t.addEventListener("touchstart",c,!1),t.addEventListener("touchmove",(function(t){if(t.preventDefault(),1===t.touches.length){const n=i.x-t.touches[0].pageX;e.move(n/e.getZoom()),c(t)}else{if(2==t.touches.length){let n=r(i,a);c(t),n-=r(i,a),e.squeeze(n)}l=[]}}),!1),t.addEventListener("touchend",(function(t){if(t.preventDefault(),t.touches.length>0)return c(t);if(2==l.length){const t=(l[1].x-l[0].x)/(l[1].t-l[0].t);e.moveVelocity(t)}l=[]}),!1),{cleanup:function(){t.removeEventListener("wheel",n),window.removeEventListener("keydown",o)}}}},14:function(e,t,n){const o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.timeParser=function({timezone:e,getBars:t,getRevision:n}){function r(t,n){const o=new Date(1e3*t-1e3*e),r=new Date(1e3*n-1e3*e);if(o.getUTCFullYear()!==r.getUTCFullYear())return 31536e3;if(o.getUTCMonth()!==r.getUTCMonth())return 2592e3;if(o.getUTCDate()!==r.getUTCDate())return 86400;const i=o.getUTCHours(),a=o.getUTCMinutes(),l=o.getUTCSeconds();if(0===l&&0===a)return 0==i?86400:i%6==0?21600:i%3==0?10800:3600;let c=l?1:60;const u=l||a;return 30===u?30*c:u%15==0?15*c:u%10==0?10*c:u%5==0?5*c:u%5==2?2*c:c}function i(t,n){const r=new Date(1e3*t-1e3*e);if(-1===n)return"";if(n>=31536e3)return""+r.getUTCFullYear();if(n>=2592e3)return o[r.getUTCMonth()];if(n>=86400)return""+r.getUTCDate();const i=r.getUTCHours(),a=(i<10?"0":"")+i;if(n>=3600)return a+":00";const l=r.getUTCMinutes(),c=(l<10?"0":"")+l;if(n>=60)return a+":"+c;const u=r.getUTCSeconds();return a+":"+c+":"+((u<10?"0":"")+u)}let a=[],l=[],c=new Int32Array(0),u=new Int32Array(0),s=-1,f=-1;return{getLabels:function({zoom:e,origin:o,width:d,fontsize:p}){const _=t();n()!==f&&(f=n(),function(e){if(!e.length)return void(a=l=[]);a=e.map((e=>e.epoch));let t=a[0]-1,n=t;l=a.map((e=>{let o=r(e,t);return n=t,t=e,o}));const o=t-n;for(let e=0;e<240;++e)l.push(r(t+o,t)),a.push(t+=o)}(_),s=-1);const m=Math.ceil(5*p/e);m!=s&&(s=m,function(e){c.length<a.length?(c=new Int32Array(a.length),u=new Int32Array(a.length)):(c.fill(0),u.fill(0));const t=l.length;for(let n=0;n<t;++n){let o=l[n];for(let r=e;r<2*e&&n+r<t;++r)c[n+r]<c[n]+o&&(c[n+r]=c[n]+o,u[n+r]=n)}}(m));let g=Math.min(Math.ceil(o+d/e)+2*m,_.length+2*m,l.length-1);const h=[],v=[];for(;g;){g=u[g];const t=(g-o+.5)*e;g&&t>-m&&t<d+m&&(h.push(i(a[g],l[g])),v.push((g-o+.5)*e))}return{text:h,positions:v}},rank:r,label:i}}},15:function(e,t,n){t.__esModule=!0;var o=e(26);t.buildGrid=function(e){const t=e(o.Vertical);return function(n,o,r){const i=e.buffer(n.map((e=>[e,0,e,1])));t({viewport:o.viewport,theme:r,pos:i,count:2*n.length})}}},17:function(e,t,n){function o(e){for(let t in e)"object"==typeof e[t]&&null!==e[t]?o(e[t]):t.endsWith("Color")&&(e[t]=a(e[t]))}function r(e,t){for(let n in t)"object"==typeof t[n]&&t[n]?(e[n]=e[n]||{},r(e[n],t[n])):e[n]=t[n]}t.buildTheme=function(e){let t={},n={};function a(e){r(t,e),n=i(t),o(n)}a(e);const l={get:(e,t)=>"object"==typeof e[t]&&null!==e[t]?new Proxy(e[t],l):e[t],set(e,a,l){r(e,{[a]:l}),n=i(t),o(n)}};return{getRGBA:()=>n,setTheme:a,proxy:new Proxy(t,l)}};const i=e=>JSON.parse(JSON.stringify(e)),a=function(){const e=document.createElement("canvas");e.height=1,e.width=1;const t=e.getContext("2d"),n={};return function(e){if(n[e])return n[e];if(!e)return[0,0,0,1];t.fillStyle=e,t.fillRect(0,0,1,1);const o=t.getImageData(0,0,1,1).data;return n[e]=[...o].map((e=>e/255))}}()},18:function(e,t,n){t.__esModule=!0,t.CandleLight={hollow:!1,border:{posColor:"#26a69a",negColor:"#ef5350"},body:{posColor:"#26a69a",negColor:"#ef5350"},wick:{posColor:"#26a69a",negColor:"#ef5350"}},t.CandleDark={hollow:!1,border:{posColor:"#26a69a",negColor:"#ef5350"},body:{posColor:"#26a69a",negColor:"#ef5350"},wick:{posColor:"#26a69a",negColor:"#ef5350"}}},19:function(e,t,n){t.__esModule=!0;var o=e(27),r=e(28),i=e(29);t.buildCandle=function(e){const t=e(o.Wick),n=e(r.Body),a=e(i.Border);return function(o,r,i){const l=o.buffers(e);t(Object.assign({theme:i.wick,pos:l.wick,count:l.wick_cpu.length/3},r)),n(Object.assign(Object.assign({pos:l.body},r),{theme:{posColor:i.hollow?[0,0,0,0]:i.body.posColor,negColor:i.body.negColor},count:l.body_cpu.length/3})),a(Object.assign(Object.assign({pos:l.border},r),{theme:i.border,count:l.border_cpu.length/3}))}}},21:function(e,t,n){t.resizeObserve=function(e,t){let n;return e!==document.body&&"function"==typeof ResizeObserver?(n=new ResizeObserver((function(){setTimeout(t)})),n.observe(e)):window.addEventListener("resize",t,!1),()=>{n?n.disconnect():window.removeEventListener("resize",t)}}},25:function(e,t,n){t.__esModule=!0;var o=e(21);t.buildAxis=function({root:e,font:t,direction:n}){const r=window&&window.devicePixelRatio||1,{fontStyle:i,fontSize:a,fontFamily:l}=(c=`font: ${t}`,(u=document.createElement("span")).setAttribute("style",c),u.style);var c,u;const s=parseInt(a,10),f=document.createElement("canvas");f.style.background="#0000cc11",e.style.position="relative",f.style.position="absolute",e.appendChild(f);const d="horizontal"===n?"width":"height",p="horizontal"===n?"height":"width";f[p]=s*r*2,f.style[p]=2*s+"px",e.style.flex=`0 0 ${2*s}px`;const _=f.getContext("2d");return _.imageSmoothingEnabled=!1,window.ctx=_,{cleanup:o.resizeObserve(e,(function(){const t=e.getBoundingClientRect();f.style[d]=`${t[d]}px`,f[d]=t[d]*r,_.font=`${i} ${s*r}px ${l}`,_.textBaseline="middle",_.textAlign="center"})),draw:function(e,t){if(_.clearRect(0,0,f.width,f.height),"horizontal"===n)for(let n=0;n<e.length;++n)_.fillText(e[n],t[n]*r,s*r);else for(let n=0;n<e.length;++n)_.fillText(e[n],s*r,t[n]*r)}}}},26:function(e,t,n){t.__esModule=!0,t.Vertical={count:(e,{count:t})=>t,primitive:"lines",depth:{enable:!1},viewport:(e,{viewport:t})=>t,attributes:{pos:(e,{pos:t})=>({buffer:t})},uniforms:{color:(e,{theme:t})=>t.color,resolution:e=>[e.viewportWidth,e.viewportHeight]},vert:"\n    precision highp float;\n    uniform vec2 resolution;\n    attribute vec2 pos;\n\n    void main() {\n      float y = resolution.y * pos[1];\n      gl_Position = vec4(2.0 * vec2(pos[0], y) / resolution - 1.0, 0., 1.);\n    }",frag:"\n    precision mediump float;\n    uniform vec4 color;\n    void main() {\n      gl_FragColor = color;\n    }"}},27:function(e,t,n){t.__esModule=!0,t.Wick={count:(e,{count:t})=>t,primitive:"lines",depth:{enable:!1},viewport:(e,{viewport:t})=>t,attributes:{pos:(e,{pos:t})=>({buffer:t})},uniforms:{posColor:(e,{theme:t})=>t.posColor,negColor:(e,{theme:t})=>t.negColor,resolution:e=>[e.viewportWidth,e.viewportHeight],y_min_max:(e,{y_min_max:t})=>t,x_zoom:(e,{x_zoom:t})=>t,x_origin:(e,{x_origin:t})=>t},vert:"\n    precision highp float;\n\n    uniform vec4 posColor;\n    uniform vec4 negColor;\n\n    uniform vec2 resolution;\n    uniform vec2 y_min_max;\n    uniform float x_zoom;\n    uniform float x_origin;\n\n    attribute vec3 pos;\n\n    varying vec4 color;\n\n    void main() {\n      color = pos[2] > 0.0 ? posColor : negColor;\n      float y = resolution.y * (pos[1] - y_min_max[0]) / (y_min_max[1] - y_min_max[0]);\n\n      float x = floor((abs(pos[0]) - 1.0 - x_origin + 0.5) * x_zoom + 0.5);\n      gl_Position = vec4(2.0 * vec2(x, y) / resolution - 1.0, 0., 1.);\n    }",frag:"\n    precision mediump float;\n    varying vec4 color;\n    void main() {\n      gl_FragColor = color;\n    }"}},28:function(e,t,n){t.__esModule=!0,t.Body={depth:{enable:!1},count:(e,{count:t})=>t,primitive:"triangles",viewport:(e,{viewport:t})=>t,attributes:{pos:(e,{pos:t})=>({buffer:t,offset:0,stride:12})},uniforms:{posColor:(e,{theme:t})=>t.posColor,negColor:(e,{theme:t})=>t.negColor,resolution:e=>[e.viewportWidth,e.viewportHeight],y_min_max:(e,{y_min_max:t})=>t,x_zoom:(e,{x_zoom:t})=>t,x_origin:(e,{x_origin:t})=>t},vert:"\n    precision highp float;\n\n    uniform vec2 resolution;\n    uniform vec2 y_min_max;\n    uniform vec4 posColor;\n    uniform vec4 negColor;\n    uniform float x_zoom;\n    uniform float x_origin;\n\n    attribute vec3 pos;\n\n    varying vec4 color;\n\n    void main() {\n      color = pos[2] > 0.0 ? posColor : negColor;\n\n      float y = resolution.y * (pos[1] - y_min_max[0]) / (y_min_max[1] - y_min_max[0]);\n\n      float halved = x_zoom >= 3.0 ? floor((x_zoom - 2.0) / 3.0) + 1.0 : 0.0;\n      float x = floor((abs(pos[0]) - 1.0 - x_origin + 0.5) * x_zoom + 0.5);\n      x += pos[0] > 0.0 ? +halved : -halved - 1.0;\n\n      gl_Position = vec4(\n        2.0 * vec2(x, y) / resolution - 1.0, 0.0, 1.0\n      );\n    }",frag:"\n    precision mediump float;\n    varying vec4 color;\n    void main() {\n      gl_FragColor = color;\n    }"}},29:function(e,t,n){t.__esModule=!0,t.Border={count:(e,{count:t})=>t,primitive:"lines",depth:{enable:!1},viewport:(e,{viewport:t})=>t,attributes:{pos:(e,{pos:t})=>({buffer:t})},uniforms:{posColor:(e,{theme:t})=>t.posColor,negColor:(e,{theme:t})=>t.negColor,resolution:e=>[e.viewportWidth,e.viewportHeight],y_min_max:(e,{y_min_max:t})=>t,x_zoom:(e,{x_zoom:t})=>t,x_origin:(e,{x_origin:t})=>t},vert:"\n    precision highp float;\n\n    uniform vec4 posColor;\n    uniform vec4 negColor;\n\n    uniform vec2 resolution;\n    uniform vec2 y_min_max;\n    uniform float x_zoom;\n    uniform float x_origin;\n\n    attribute vec3 pos;\n\n    varying vec4 color;\n\n    void main() {\n      color = pos[2] > 0.0 ? posColor : negColor;\n\n      float y = resolution.y * (pos[1] - y_min_max[0]) / (y_min_max[1] - y_min_max[0]);\n\n      float halved = x_zoom >= 3.0 ? floor((x_zoom - 2.0) / 3.0) + 1.0 : 0.0;\n      float x = floor((abs(pos[0]) - 1.0 - x_origin + 0.5) * x_zoom + 0.5);\n      x += pos[0] > 0.0 ? +halved : -halved - (abs(pos[2]) > 1.0 ? 0.0 : 1.0);\n\n      gl_Position = vec4(\n        2.0 * vec2(x, y) / resolution - 1.0, 0.0, 1.0\n      );\n    }",frag:"\n    precision mediump float;\n    varying vec4 color;\n    void main() {\n      gl_FragColor = color;\n    }"}}});