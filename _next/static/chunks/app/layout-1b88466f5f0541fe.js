(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{8097:(e,t,n)=>{Promise.resolve().then(n.bind(n,766)),Promise.resolve().then(n.bind(n,96)),Promise.resolve().then(n.bind(n,3479)),Promise.resolve().then(n.t.bind(n,3704,23)),Promise.resolve().then(n.t.bind(n,8224,23)),Promise.resolve().then(n.t.bind(n,6407,23)),Promise.resolve().then(n.t.bind(n,3729,23)),Promise.resolve().then(n.t.bind(n,8584,23)),Promise.resolve().then(n.t.bind(n,7561,23)),Promise.resolve().then(n.t.bind(n,2352,23)),Promise.resolve().then(n.t.bind(n,9324,23))},3479:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let{html:t,height:n=null,width:l=null,children:i,dataNtpc:o=""}=e;return(0,r.useEffect)(()=>{o&&performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-".concat(o)}})},[o]),(0,a.jsxs)(a.Fragment,{children:[i,t?(0,a.jsx)("div",{style:{height:null!=n?"".concat(n,"px"):"auto",width:null!=l?"".concat(l,"px"):"auto"},"data-ntpc":o,dangerouslySetInnerHTML:{__html:t}}):null]})};let a=n(5155),r=n(2115)},766:(e,t,n)=>{"use strict";let a;Object.defineProperty(t,"__esModule",{value:!0}),t.GoogleAnalytics=function(e){let{gaId:t,debugMode:n,dataLayerName:o="dataLayer",nonce:s}=e;return void 0===a&&(a=o),(0,l.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-ga"}})},[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{id:"_next-ga-init",dangerouslySetInnerHTML:{__html:"\n          window['".concat(o,"'] = window['").concat(o,"'] || [];\n          function gtag(){window['").concat(o,"'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '").concat(t,"' ").concat(n?",{ 'debug_mode': true }":"",");")},nonce:s}),(0,r.jsx)(i.default,{id:"_next-ga",src:"https://www.googletagmanager.com/gtag/js?id=".concat(t),nonce:s})]})},t.sendGAEvent=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(void 0===a){console.warn("@next/third-parties: GA has not been initialized");return}window[a]?window[a].push(arguments):console.warn("@next/third-parties: GA dataLayer ".concat(a," does not exist"))};let r=n(5155),l=n(2115),i=function(e){return e&&e.__esModule?e:{default:e}}(n(6584))},96:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.sendGTMEvent=void 0,t.GoogleTagManager=function(e){let{gtmId:t,gtmScriptUrl:n="https://www.googletagmanager.com/gtm.js",dataLayerName:o="dataLayer",auth:s,preview:c,dataLayer:d,nonce:u}=e;i=o;let f="dataLayer"!==o?"&l=".concat(o):"";return(0,r.useEffect)(()=>{performance.mark("mark_feature_usage",{detail:{feature:"next-third-parties-gtm"}})},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.default,{id:"_next-gtm-init",dangerouslySetInnerHTML:{__html:"\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        ".concat(d?"w[l].push(".concat(JSON.stringify(d),")"):"","\n      })(window,'").concat(o,"');")},nonce:u}),(0,a.jsx)(l.default,{id:"_next-gtm","data-ntpc":"GTM",src:"".concat(n,"?id=").concat(t).concat(f).concat(s?"&gtm_auth=".concat(s):"").concat(c?"&gtm_preview=".concat(c,"&gtm_cookies_win=x"):""),nonce:u})]})};let a=n(5155),r=n(2115),l=function(e){return e&&e.__esModule?e:{default:e}}(n(6584)),i="dataLayer";t.sendGTMEvent=(e,t)=>{let n=t||i;window[n]=window[n]||[],window[n].push(e)}},6584:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r.a});var a=n(3704),r=n.n(a),l={};for(let e in a)"default"!==e&&(l[e]=()=>a[e]);n.d(t,l)},8571:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return a},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},a="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3704:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return y},handleClientScriptLoad:function(){return m},initScriptLoader:function(){return p}});let a=n(306),r=n(9955),l=n(5155),i=a._(n(7650)),o=r._(n(2115)),s=n(1147),c=n(2815),d=n(8571),u=new Map,f=new Set,_=e=>{if(i.default.preinit){e.forEach(e=>{i.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},g=e=>{let{src:t,id:n,onLoad:a=()=>{},onReady:r=null,dangerouslySetInnerHTML:l,children:i="",strategy:o="afterInteractive",onError:s,stylesheets:d}=e,g=n||t;if(g&&f.has(g))return;if(u.has(t)){f.add(g),u.get(t).then(a,s);return}let m=()=>{r&&r(),f.add(g)},p=document.createElement("script"),b=new Promise((e,t)=>{p.addEventListener("load",function(t){e(),a&&a.call(this,t),m()}),p.addEventListener("error",function(e){t(e)})}).catch(function(e){s&&s(e)});l?(p.innerHTML=l.__html||"",m()):i?(p.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):"",m()):t&&(p.src=t,u.set(t,b)),(0,c.setAttributesFromProps)(p,e),"worker"===o&&p.setAttribute("type","text/partytown"),p.setAttribute("data-nscript",o),d&&_(d),document.body.appendChild(p)};function m(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>g(e))}):g(e)}function p(e){e.forEach(m),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function b(e){let{id:t,src:n="",onLoad:a=()=>{},onReady:r=null,strategy:c="afterInteractive",onError:u,stylesheets:_,...m}=e,{updateScripts:p,scripts:b,getIsSsr:y,appDir:h,nonce:v}=(0,o.useContext)(s.HeadManagerContext),w=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;w.current||(r&&e&&f.has(e)&&r(),w.current=!0)},[r,t,n]);let x=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!x.current&&("afterInteractive"===c?g(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>g(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>g(e))})),x.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(p?(b[c]=(b[c]||[]).concat([{id:t,src:n,onLoad:a,onReady:r,onError:u,...m}]),p(b)):y&&y()?f.add(t||n):y&&!y()&&g(e)),h){if(_&&_.forEach(e=>{i.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(i.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:v,crossOrigin:m.crossOrigin}:{as:"script",nonce:v,crossOrigin:m.crossOrigin}),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...m,id:t}])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),(0,l.jsx)("script",{nonce:v,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m,id:t}])+")"}}));"afterInteractive"===c&&n&&i.default.preload(n,m.integrity?{as:"script",integrity:m.integrity,nonce:v,crossOrigin:m.crossOrigin}:{as:"script",nonce:v,crossOrigin:m.crossOrigin})}return null}Object.defineProperty(b,"__nextScript",{value:!0});let y=b;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2815:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"setAttributesFromProps",{enumerable:!0,get:function(){return l}});let n={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"},a=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"];function r(e){return["async","defer","noModule"].includes(e)}function l(e,t){for(let[l,i]of Object.entries(t)){if(!t.hasOwnProperty(l)||a.includes(l)||void 0===i)continue;let o=n[l]||l.toLowerCase();"SCRIPT"===e.tagName&&r(o)?e[o]=!!i:e.setAttribute(o,String(i)),(!1===i||"SCRIPT"===e.tagName&&r(o)&&(!i||"false"===i))&&(e.setAttribute(o,""),e.removeAttribute(o))}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9324:()=>{},8224:e=>{e.exports={style:{fontFamily:"'aeonikBold', 'aeonikBold Fallback'"},className:"__className_e832ff",variable:"__variable_e832ff"}},6407:e=>{e.exports={style:{fontFamily:"'aeonikBoldItalic', 'aeonikBoldItalic Fallback'"},className:"__className_8a8a4d",variable:"__variable_8a8a4d"}},3729:e=>{e.exports={style:{fontFamily:"'aeonikLight', 'aeonikLight Fallback'"},className:"__className_592db9",variable:"__variable_592db9"}},8584:e=>{e.exports={style:{fontFamily:"'aeonikLightItalic', 'aeonikLightItalic Fallback'"},className:"__className_a6d7e3",variable:"__variable_a6d7e3"}},7561:e=>{e.exports={style:{fontFamily:"'aeonikRegular', 'aeonikRegular Fallback'"},className:"__className_ccb277",variable:"__variable_ccb277"}},2352:e=>{e.exports={style:{fontFamily:"'aeonikRegularItalic', 'aeonikRegularItalic Fallback'"},className:"__className_5ac26d",variable:"__variable_5ac26d"}}},e=>{var t=t=>e(e.s=t);e.O(0,[840,441,517,358],()=>t(8097)),_N_E=e.O()}]);