"use strict";exports.id=902,exports.ids=[902],exports.modules={5962:(t,r)=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(){n=function(){return r};var t,r={},o=Object.prototype,i=o.hasOwnProperty,u=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",f=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function p(r,e,n,o){var i,a,c=Object.create((e&&e.prototype instanceof m?e:m).prototype);return u(c,"_invoke",{value:(i=new N(o||[]),a=y,function(e,o){if(a===d)throw Error("Generator is already running");if(a===v){if("throw"===e)throw o;return{value:t,done:!0}}for(i.method=e,i.arg=o;;){var u=i.delegate;if(u){var c=function r(e,n){var o=n.method,i=e.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=t,r(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),g;var u=h(i,e.iterator,n.arg);if("throw"===u.type)return n.method="throw",n.arg=u.arg,n.delegate=null,g;var a=u.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(u,i);if(c){if(c===g)continue;return c}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(a===y)throw a=v,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a=d;var f=h(r,n,i);if("normal"===f.type){if(a=i.done?v:"suspendedYield",f.arg===g)continue;return{value:f.arg,done:i.done}}"throw"===f.type&&(a=v,i.method="throw",i.arg=f.arg)}})}),c}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var y="suspendedStart",d="executing",v="completed",g={};function m(){}function b(){}function w(){}var E={};l(E,c,function(){return this});var x=Object.getPrototypeOf,O=x&&x(x(k([])));O&&O!==o&&i.call(O,c)&&(E=O);var P=w.prototype=m.prototype=Object.create(E);function L(t){["next","throw","return"].forEach(function(r){l(t,r,function(t){return this._invoke(r,t)})})}function j(t,r){var n;u(this,"_invoke",{value:function(o,u){function a(){return new r(function(n,a){!function n(o,u,a,c){var f=h(t[o],t,u);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==e(l)&&i.call(l,"__await")?r.resolve(l.__await).then(function(t){n("next",t,a,c)},function(t){n("throw",t,a,c)}):r.resolve(l).then(function(t){s.value=t,a(s)},function(t){return n("throw",t,a,c)})}c(f.arg)}(o,u,n,a)})}return n=n?n.then(a,a):a()}})}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(r){if(r||""===r){var n=r[c];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,u=function e(){for(;++o<r.length;)if(i.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return u.next=u}}throw TypeError(e(r)+" is not iterable")}return b.prototype=w,u(P,"constructor",{value:w,configurable:!0}),u(w,"constructor",{value:b,configurable:!0}),b.displayName=l(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(P),t},r.awrap=function(t){return{__await:t}},L(j.prototype),l(j.prototype,f,function(){return this}),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var u=new j(p(t,e,n,o),i);return r.isGeneratorFunction(e)?u:u.next().then(function(t){return t.done?t.value:u.next()})},L(P),l(P,s,"Generator"),l(P,c,function(){return this}),l(P,"toString",function(){return"[object Generator]"}),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=k,N.prototype={constructor:N,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return a.type="throw",a.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var u=this.tryEntries[o],a=u.completion;if("root"===u.tryLoc)return n("end");if(u.tryLoc<=this.prev){var c=i.call(u,"catchLoc"),f=i.call(u,"finallyLoc");if(c&&f){if(this.prev<u.catchLoc)return n(u.catchLoc,!0);if(this.prev<u.finallyLoc)return n(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return n(u.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return n(u.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(u)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:k(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}function o(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(o.key),o)}}function i(t,r,e){return r&&o(t.prototype,r),e&&o(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function u(t,r){if(!(t instanceof r))throw TypeError("Cannot call a class as a function")}function a(t,r,n){return r=p(r),function(t,r){if(r&&("object"===e(r)||"function"==typeof r))return r;if(void 0!==r)throw TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){return!1}}()?r.apply(t,n):Reflect.construct(r,n||[],p(t).constructor))}function c(t,r){if("function"!=typeof r&&null!==r)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),r&&l(t,r)}function f(t){var r="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return s(t,arguments,p(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),l(e,t)})(t)}function s(t,r,e){return(s=!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}()?function(t,r,e){var n=[null];n.push.apply(n,r);var o=new(Function.bind.apply(t,n));return e&&l(o,e.prototype),o}:Reflect.construct.bind()).apply(null,arguments)}function l(t,r){return(l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t})(t,r)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,r,e,n,o,i,u){try{var a=t[i](u),c=a.value}catch(t){e(t);return}a.done?r(c):Promise.resolve(c).then(n,o)}Object.defineProperty(r,"__esModule",{value:!0}),function(t,r){for(var e in r)Object.defineProperty(t,e,{enumerable:!0,get:r[e]})}(r,{DecodeError:function(){return _},MiddlewareNotFoundError:function(){return T},MissingStaticPage:function(){return k},NormalizeError:function(){return S},PageNotFoundError:function(){return N},SP:function(){return L},ST:function(){return j},WEB_VITALS:function(){return y},execOnce:function(){return d},getDisplayName:function(){return w},getLocationOrigin:function(){return m},getURL:function(){return b},isAbsoluteUrl:function(){return g},isResSent:function(){return E},loadGetInitialProps:function(){return O},normalizeRepeatedSlashes:function(){return x},stringifyError:function(){return F}});var y=["CLS","FCP","FID","INP","LCP","TTFB"];function d(t){var r,e=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return e||(e=!0,r=t.apply(void 0,o)),r}}var v=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,g=function(t){return v.test(t)};function m(){var t=window.location,r=t.protocol,e=t.hostname,n=t.port;return r+"//"+e+(n?":"+n:"")}function b(){var t=window.location.href,r=m();return t.substring(r.length)}function w(t){return"string"==typeof t?t:t.displayName||t.name||"Unknown"}function E(t){return t.finished||t.headersSent}function x(t){var r=t.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?"?"+r.slice(1).join("?"):"")}function O(t,r){return P.apply(this,arguments)}function P(){var t;return t=n().mark(function t(r,e){var o,i;return n().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.next=4;break;case 4:if(o=e.res||e.ctx&&e.ctx.res,r.getInitialProps){t.next=12;break}if(!(e.ctx&&e.Component)){t.next=11;break}return t.next=9,O(e.Component,e.ctx);case 9:return t.t0=t.sent,t.abrupt("return",{pageProps:t.t0});case 11:return t.abrupt("return",{});case 12:return t.next=14,r.getInitialProps(e);case 14:if(i=t.sent,!(o&&E(o))){t.next=17;break}return t.abrupt("return",i);case 17:if(i){t.next=20;break}throw Error('"'+w(r)+'.getInitialProps()" should resolve to an object. But found "'+i+'" instead.');case 20:return t.abrupt("return",i);case 22:case"end":return t.stop()}},t)}),(P=function(){var r=this,e=arguments;return new Promise(function(n,o){var i=t.apply(r,e);function u(t){h(i,n,o,u,a,"next",t)}function a(t){h(i,n,o,u,a,"throw",t)}u(void 0)})}).apply(this,arguments)}var L="undefined"!=typeof performance,j=L&&["mark","measure","getEntriesByName"].every(function(t){return"function"==typeof performance[t]}),_=function(t){function r(){return u(this,r),a(this,r,arguments)}return c(r,t),i(r)}(f(Error)),S=function(t){function r(){return u(this,r),a(this,r,arguments)}return c(r,t),i(r)}(f(Error)),N=function(t){function r(t){var e;return u(this,r),(e=a(this,r)).code="ENOENT",e.name="PageNotFoundError",e.message="Cannot find module for page: "+t,e}return c(r,t),i(r)}(f(Error)),k=function(t){function r(t,e){var n;return u(this,r),(n=a(this,r)).message="Failed to load static file for page: "+t+" "+e,n}return c(r,t),i(r)}(f(Error)),T=function(t){function r(){var t;return u(this,r),(t=a(this,r)).code="ENOENT",t.message="Cannot find the middleware module",t}return c(r,t),i(r)}(f(Error));function F(t){return JSON.stringify({message:t.message,stack:t.stack})}},9929:(t,r)=>{r._=function(t){return t&&t.__esModule?t:{default:t}}}};