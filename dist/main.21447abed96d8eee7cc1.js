!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=8)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(3))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(1);t.exports=!o((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(4),r=n(27),i=n(32);t.exports=o?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){(function(n){var o,r;/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(t){var e,n=(this.document||this.ownerDocument).querySelectorAll(t),o=this;do{for(e=n.length;0<=--e&&n.item(e)!==o;);}while(e<0&&(o=o.parentElement));return o}),function(){function t(t,e){e=e||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail),n}"function"!=typeof window.CustomEvent&&(t.prototype=window.Event.prototype,window.CustomEvent=t)}(),function(){for(var t=0,e=["ms","moz","webkit","o"],n=0;n<e.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[e[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[n]+"CancelAnimationFrame"]||window[e[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,n){var o=(new Date).getTime(),r=Math.max(0,16-(o-t)),i=window.setTimeout((function(){e(o+r)}),r);return t=o+r,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},o=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,r=-1,i="",a=n.charCodeAt(0);++r<o;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===a?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(e,n,o,r){if(n.emitEvents&&"function"==typeof t.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(i)}};return function(a,u){var c,s,l,f,d={cancelScroll:function(t){cancelAnimationFrame(f),f=null,t||i("scrollCancel",c)},animateScroll:function(o,a,u){d.cancelScroll();var s=n(c||e,u||{}),m="[object Number]"===Object.prototype.toString.call(o),p=m||!o.tagName?null:o;if(m||p){var h=t.pageYOffset;s.header&&!l&&(l=document.querySelector(s.header));var v,y,g,S,b,E,w,L,O=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(l),x=m?o:function(e,n,o,i){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-n-o,0),i&&(a=Math.min(a,r()-t.innerHeight)),a}(p,O,parseInt("function"==typeof s.offset?s.offset(o,a):s.offset,10),s.clip),M=x-h,A=r(),C=0,T=(v=M,g=(y=s).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&g>y.durationMax?y.durationMax:y.durationMin&&g<y.durationMin?y.durationMin:parseInt(g,10)),I=function(e){var n,r,u;S||(S=e),C+=e-S,E=h+M*(r=b=1<(b=0===T?0:C/T)?1:b,"easeInQuad"===(n=s).easing&&(u=r*r),"easeOutQuad"===n.easing&&(u=r*(2-r)),"easeInOutQuad"===n.easing&&(u=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(u=r*r*r),"easeOutCubic"===n.easing&&(u=--r*r*r+1),"easeInOutCubic"===n.easing&&(u=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(u=r*r*r*r),"easeOutQuart"===n.easing&&(u=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(u=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(u=r*r*r*r*r),"easeOutQuint"===n.easing&&(u=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(u=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(u=n.customEasing(r)),u||r),t.scrollTo(0,Math.floor(E)),function(e,n){var r,u,c,l=t.pageYOffset;if(e==n||l==n||(h<n&&t.innerHeight+l)>=A)return d.cancelScroll(!0),u=n,c=m,0===(r=o)&&document.body.focus(),c||(r.focus(),document.activeElement!==r&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),t.scrollTo(0,u)),i("scrollStop",s,o,a),!(f=S=null)}(E,x)||(f=t.requestAnimationFrame(I),S=e)};0===t.pageYOffset&&t.scrollTo(0,0),w=o,L=s,m||history.pushState&&L.updateURL&&history.pushState({smoothScroll:JSON.stringify(L),anchor:w.id},document.title,w===document.documentElement?"#top":"#"+w.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?t.scrollTo(0,Math.floor(x)):(i("scrollStart",s,o,a),d.cancelScroll(!0),t.requestAnimationFrame(I))}}},m=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(s=e.target.closest(a))&&"a"===s.tagName.toLowerCase()&&!e.target.closest(c.ignore)&&s.hostname===t.location.hostname&&s.pathname===t.location.pathname&&/#/.test(s.href)){var n,r=o(s.hash);if("#"===r){if(!c.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(r);(n=n||"#top"!==r?n:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(c),d.animateScroll(n,s))}},p=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(o(history.state.anchor)))||d.animateScroll(e,null,{updateURL:!1})}};return d.destroy=function(){c&&(document.removeEventListener("click",m,!1),t.removeEventListener("popstate",p,!1),d.cancelScroll(),f=l=s=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";d.destroy(),c=n(e,u||{}),l=c.header?document.querySelector(c.header):null,document.addEventListener("click",m,!1),c.updateURL&&c.popstate&&t.addEventListener("popstate",p,!1)}(),d}}(r)}.apply(e,[]))||(t.exports=o)}).call(this,n(3))},function(t,e,n){"use strict";n.r(e),n.d(e,"init",(function(){return u}));n(9),n(36);var o=n(7),r=n.n(o),i=(n(37),document.querySelectorAll(".feedback__form-input")),a=document.querySelector(".feedback__button");function u(){return new r.a('a[href*="#"]',{speed:100,speedAsDuration:!0})}i.forEach((function(t){t.addEventListener("input",(function(){""!==t.value?t.classList.add("focused"):t.classList.remove("focused")})),t.addEventListener("blur",(function(){t.value.length||(t.classList.remove("focused"),t.classList.remove("error"))}))})),i.forEach((function(t){t.addEventListener("blur",(function(){t.value.length&&(t.classList.remove("focused"),t.classList.remove("error"))}))})),a.addEventListener("click",(function(t){i.forEach((function(e){0===e.value.length&&(e.classList.add("error"),t.preventDefault()),e.value.length>0&&e.classList.remove("error")}))}))},function(t,e,n){var o=n(0),r=n(10),i=n(11),a=n(6);for(var u in r){var c=o[u],s=c&&c.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var o=n(12).forEach,r=n(35);t.exports=r("forEach")?function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,e,n){var o=n(13),r=n(15),i=n(16),a=n(18),u=n(20),c=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,l=4==t,f=6==t,d=5==t||f;return function(m,p,h,v){for(var y,g,S=i(m),b=r(S),E=o(p,h,3),w=a(b.length),L=0,O=v||u,x=e?O(m,w):n?O(m,0):void 0;w>L;L++)if((d||L in b)&&(g=E(y=b[L],L,S),t))if(e)x[L]=g;else if(g)switch(t){case 3:return!0;case 5:return y;case 6:return L;case 2:c.call(x,y)}else if(l)return!1;return f?-1:s||l?l:x}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var o=n(14);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var o=n(1),r=n(5),i="".split;t.exports=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var o=n(17);t.exports=function(t){return Object(o(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var o=n(19),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(2),r=n(21),i=n(22)("species");t.exports=function(t,e){var n;return r(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!r(n.prototype)?o(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var o=n(5);t.exports=Array.isArray||function(t){return"Array"==o(t)}},function(t,e,n){var o=n(0),r=n(23),i=n(33),a=n(34),u=o.Symbol,c=r("wks");t.exports=function(t){return c[t]||(c[t]=a&&u[t]||(a?u:i)("Symbol."+t))}},function(t,e,n){var o=n(24),r=n(25);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.4.1",mode:o?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){t.exports=!1},function(t,e,n){var o=n(0),r=n(26),i=o["__core-js_shared__"]||r("__core-js_shared__",{});t.exports=i},function(t,e,n){var o=n(0),r=n(6);t.exports=function(t,e){try{r(o,t,e)}catch(n){o[t]=e}return e}},function(t,e,n){var o=n(4),r=n(28),i=n(30),a=n(31),u=Object.defineProperty;e.f=o?u:function(t,e,n){if(i(t),e=a(e,!0),i(n),r)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var o=n(4),r=n(1),i=n(29);t.exports=!o&&!r((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var o=n(0),r=n(2),i=o.document,a=r(i)&&r(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,n){var o=n(2);t.exports=function(t){if(!o(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var o=n(2);t.exports=function(t,e){if(!o(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!o(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!o(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+o).toString(36)}},function(t,e,n){var o=n(1);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var o=n(1);t.exports=function(t,e){var n=[][t];return!n||!o((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){},function(t,e,n){(function(n){var o,r;/*! smooth-scroll v16.1.0 | (c) 2019 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(o=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},o=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,r=-1,i="",a=n.charCodeAt(0);++r<o;){if(0===(e=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=e&&e<=31||127==e||0===r&&48<=e&&e<=57||1===r&&48<=e&&e<=57&&45===a?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+i},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(e,n,o,r){if(n.emitEvents&&"function"==typeof t.CustomEvent){var i=new CustomEvent(e,{bubbles:!0,detail:{anchor:o,toggle:r}});document.dispatchEvent(i)}};return function(a,u){var c,s,l,f,d={cancelScroll:function(t){cancelAnimationFrame(f),f=null,t||i("scrollCancel",c)},animateScroll:function(o,a,u){d.cancelScroll();var s=n(c||e,u||{}),m="[object Number]"===Object.prototype.toString.call(o),p=m||!o.tagName?null:o;if(m||p){var h=t.pageYOffset;s.header&&!l&&(l=document.querySelector(s.header));var v,y,g,S,b,E,w,L,O=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(l),x=m?o:function(e,n,o,i){var a=0;if(e.offsetParent)for(;a+=e.offsetTop,e=e.offsetParent;);return a=Math.max(a-n-o,0),i&&(a=Math.min(a,r()-t.innerHeight)),a}(p,O,parseInt("function"==typeof s.offset?s.offset(o,a):s.offset,10),s.clip),M=x-h,A=r(),C=0,T=(v=M,g=(y=s).speedAsDuration?y.speed:Math.abs(v/1e3*y.speed),y.durationMax&&g>y.durationMax?y.durationMax:y.durationMin&&g<y.durationMin?y.durationMin:parseInt(g,10)),I=function(e){var n,r,u;S||(S=e),C+=e-S,E=h+M*(r=b=1<(b=0===T?0:C/T)?1:b,"easeInQuad"===(n=s).easing&&(u=r*r),"easeOutQuad"===n.easing&&(u=r*(2-r)),"easeInOutQuad"===n.easing&&(u=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(u=r*r*r),"easeOutCubic"===n.easing&&(u=--r*r*r+1),"easeInOutCubic"===n.easing&&(u=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(u=r*r*r*r),"easeOutQuart"===n.easing&&(u=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(u=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(u=r*r*r*r*r),"easeOutQuint"===n.easing&&(u=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(u=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(u=n.customEasing(r)),u||r),t.scrollTo(0,Math.floor(E)),function(e,n){var r,u,c,l=t.pageYOffset;if(e==n||l==n||(h<n&&t.innerHeight+l)>=A)return d.cancelScroll(!0),u=n,c=m,0===(r=o)&&document.body.focus(),c||(r.focus(),document.activeElement!==r&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),t.scrollTo(0,u)),i("scrollStop",s,o,a),!(f=S=null)}(E,x)||(f=t.requestAnimationFrame(I),S=e)};0===t.pageYOffset&&t.scrollTo(0,0),w=o,L=s,m||history.pushState&&L.updateURL&&history.pushState({smoothScroll:JSON.stringify(L),anchor:w.id},document.title,w===document.documentElement?"#top":"#"+w.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?t.scrollTo(0,Math.floor(x)):(i("scrollStart",s,o,a),d.cancelScroll(!0),t.requestAnimationFrame(I))}}},m=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(s=e.target.closest(a))&&"a"===s.tagName.toLowerCase()&&!e.target.closest(c.ignore)&&s.hostname===t.location.hostname&&s.pathname===t.location.pathname&&/#/.test(s.href)){var n,r=o(s.hash);if("#"===r){if(!c.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(r);(n=n||"#top"!==r?n:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(c),d.animateScroll(n,s))}},p=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(o(history.state.anchor)))||d.animateScroll(e,null,{updateURL:!1})}};return d.destroy=function(){c&&(document.removeEventListener("click",m,!1),t.removeEventListener("popstate",p,!1),d.cancelScroll(),f=l=s=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";d.destroy(),c=n(e,u||{}),l=c.header?document.querySelector(c.header):null,document.addEventListener("click",m,!1),c.updateURL&&c.popstate&&t.addEventListener("popstate",p,!1)}(),d}}(r)}.apply(e,[]))||(t.exports=o)}).call(this,n(3))}]);