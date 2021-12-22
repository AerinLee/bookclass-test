var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l;function u(t,e){return l||(l=document.createElement("a")),l.href=e,t===l.href}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function f(t,e,n){t.$$.on_destroy.push(a(e,n))}const d="undefined"!=typeof window;let p=d?()=>window.performance.now():()=>Date.now(),h=d?t=>requestAnimationFrame(t):t;const g=new Set;function m(t){g.forEach((e=>{e.c(t)||(g.delete(e),e.f())})),0!==g.size&&h(m)}function v(t){let e;return 0===g.size&&h(m),{promise:new Promise((n=>{g.add(e={c:t,f:n})})),abort(){g.delete(e)}}}function y(t,e){t.appendChild(e)}function w(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function b(t){const e=x("style");return function(t,e){y(t.head||t,e)}(w(t),e),e}function $(t,e,n){t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function q(t){return document.createTextNode(t)}function E(){return q(" ")}function k(){return q("")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function O(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function L(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function j(t,e){t.value=null==e?"":e}function S(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}function A(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}const T=new Set;let D,N=0;function R(t,e,n,o,r,s,i,c=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*s(t);u+=100*t+`%{${i(o,1-o)}}\n`}const a=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${c}`,d=w(t);T.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=b(t).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,N+=1,f}function I(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),N-=r,N||h((()=>{N||(T.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),T.clear())})))}function M(t){D=t}function P(){if(!D)throw new Error("Function called outside component initialization");return D}function H(t){P().$$.on_mount.push(t)}function B(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const Y=[],z=[],X=[],F=[],U=Promise.resolve();let W=!1;function G(){W||(W=!0,U.then(Z))}function K(){return G(),U}function J(t){X.push(t)}let Q=!1;const V=new Set;function Z(){if(!Q){Q=!0;do{for(let t=0;t<Y.length;t+=1){const e=Y[t];M(e),tt(e.$$)}for(M(null),Y.length=0;z.length;)z.pop()();for(let t=0;t<X.length;t+=1){const e=X[t];V.has(e)||(V.add(e),e())}X.length=0}while(Y.length);for(;F.length;)F.pop()();W=!1,Q=!1,V.clear()}}function tt(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}let et;function nt(){return et||(et=Promise.resolve(),et.then((()=>{et=null}))),et}function ot(t,e,n){t.dispatchEvent(A(`${e?"intro":"outro"}${n}`))}const rt=new Set;let st;function it(){st={r:0,c:[],p:st}}function ct(){st.r||s(st.c),st=st.p}function lt(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function ut(t,e,n,o){if(t&&t.o){if(rt.has(t))return;rt.add(t),st.c.push((()=>{rt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const at={duration:0};function ft(n,o,r){let s,c,l=o(n,r),u=!1,a=0;function f(){s&&I(n,s)}function d(){const{delay:o=0,duration:r=300,easing:i=e,tick:d=t,css:h}=l||at;h&&(s=R(n,0,1,r,o,i,h,a++)),d(0,1);const g=p()+o,m=g+r;c&&c.abort(),u=!0,J((()=>ot(n,!0,"start"))),c=v((t=>{if(u){if(t>=m)return d(1,0),ot(n,!0,"end"),f(),u=!1;if(t>=g){const e=i((t-g)/r);d(e,1-e)}}return u}))}let h=!1;return{start(){h||(h=!0,I(n),i(l)?(l=l(),nt().then(d)):d())},invalidate(){h=!1},end(){u&&(f(),u=!1)}}}function dt(n,o,r){let c,l=o(n,r),u=!0;const a=st;function f(){const{delay:o=0,duration:r=300,easing:i=e,tick:f=t,css:d}=l||at;d&&(c=R(n,1,0,r,o,i,d));const h=p()+o,g=h+r;J((()=>ot(n,!1,"start"))),v((t=>{if(u){if(t>=g)return f(0,1),ot(n,!1,"end"),--a.r||s(a.c),!1;if(t>=h){const e=i((t-h)/r);f(1-e,e)}}return u}))}return a.r+=1,i(l)?nt().then((()=>{l=l(),f()})):f(),{end(t){t&&l.tick&&l.tick(1,0),u&&(c&&I(n,c),u=!1)}}}function pt(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=e[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function ht(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function mt(t,e,n,r){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(e,n),r||J((()=>{const e=l.map(o).filter(i);u?u.push(...e):s(e),t.$$.on_mount=[]})),a.forEach(J)}function vt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function yt(e,n,o,i,c,l,u,a=[-1]){const f=D;M(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(Y.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&lt(e.$$.fragment),mt(e,n.target,n.anchor,n.customElement),Z()}M(f)}class wt{$destroy(){vt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const bt=[];function $t(t,e){return{subscribe:_t(t,e).subscribe}}function _t(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!bt.length;for(const t of r)t[1](),bt.push(t,e);if(t){for(let t=0;t<bt.length;t+=2)bt[t][0](bt[t+1]);bt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const l=[i,c];return r.add(l),1===r.size&&(o=n(s)||t),i(e),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}function xt(e,n,o){const r=!Array.isArray(e),c=r?[e]:e,l=n.length<2;return $t(o,(e=>{let o=!1;const u=[];let f=0,d=t;const p=()=>{if(f)return;d();const o=n(r?u[0]:u,e);l?e(o):d=i(o)?o:t},h=c.map(((t,e)=>a(t,(t=>{u[e]=t,f&=~(1<<e),o&&p()}),(()=>{f|=1<<e}))));return o=!0,p(),function(){s(h),d()}}))}function qt(t){let e,o,r;const s=[t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(c()),e.$on("routeEvent",t[7])),{c(){e&&gt(e.$$.fragment),o=k()},m(t,n){e&&mt(e,t,n),$(t,o,n),r=!0},p(t,n){const r=4&n?pt(s,[ht(t[2])]):{};if(i!==(i=t[0])){if(e){it();const t=e;ut(t.$$.fragment,1,0,(()=>{vt(t,1)})),ct()}i?(e=new i(c()),e.$on("routeEvent",t[7]),gt(e.$$.fragment),lt(e.$$.fragment,1),mt(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&lt(e.$$.fragment,t),r=!0)},o(t){e&&ut(e.$$.fragment,t),r=!1},d(t){t&&_(o),e&&vt(e,t)}}}function Et(t){let e,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function c(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(c()),e.$on("routeEvent",t[6])),{c(){e&&gt(e.$$.fragment),o=k()},m(t,n){e&&mt(e,t,n),$(t,o,n),r=!0},p(t,n){const r=6&n?pt(s,[2&n&&{params:t[1]},4&n&&ht(t[2])]):{};if(i!==(i=t[0])){if(e){it();const t=e;ut(t.$$.fragment,1,0,(()=>{vt(t,1)})),ct()}i?(e=new i(c()),e.$on("routeEvent",t[6]),gt(e.$$.fragment),lt(e.$$.fragment,1),mt(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&lt(e.$$.fragment,t),r=!0)},o(t){e&&ut(e.$$.fragment,t),r=!1},d(t){t&&_(o),e&&vt(e,t)}}}function kt(t){let e,n,o,r;const s=[Et,qt],i=[];function c(t,e){return t[1]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),o=k()},m(t,n){i[e].m(t,n),$(t,o,n),r=!0},p(t,[r]){let l=e;e=c(t),e===l?i[e].p(t,r):(it(),ut(i[l],1,1,(()=>{i[l]=null})),ct(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),lt(n,1),n.m(o.parentNode,o))},i(t){r||(lt(n),r=!0)},o(t){ut(n),r=!1},d(t){i[e].d(t),t&&_(o)}}}function Ct(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const Ot=$t(null,(function(t){t(Ct());const e=()=>{t(Ct())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}}));xt(Ot,(t=>t.location)),xt(Ot,(t=>t.querystring));const Lt=_t(void 0);function jt(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,i=[],c="",l=t.split("/");for(l[0]||l.shift();r=l.shift();)"*"===(n=r[0])?(i.push("wild"),c+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),c+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(c+=(~o?"?":"")+"\\"+r.substring(s))):c+="/"+r;return{keys:i,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const c=[];o instanceof Map?o.forEach(((t,e)=>{c.push(new i(e,t))})):Object.keys(o).forEach((t=>{c.push(new i(t,o[t]))}));let l=null,u=null,a={};const f=function(){const t=P();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=A(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}();async function d(t,e){await K(),f(t,e)}let p=null,h=null;var g;s&&(h=t=>{p=t.state&&t.state.__svelte_spa_router_scrollY?t.state:null},window.addEventListener("popstate",h),g=()=>{p?window.scrollTo(p.__svelte_spa_router_scrollX,p.__svelte_spa_router_scrollY):window.scrollTo(0,0)},P().$$.after_update.push(g));let m=null,v=null;const y=Ot.subscribe((async t=>{m=t;let e=0;for(;e<c.length;){const o=c[e].match(t.location);if(!o){e++;continue}const r={route:c[e].path,location:t.location,querystring:t.querystring,userData:c[e].userData,params:o&&"object"==typeof o&&Object.keys(o).length?o:null};if(!await c[e].checkConditions(r))return n(0,l=null),v=null,void d("conditionsFailed",r);d("routeLoading",Object.assign({},r));const s=c[e].component;if(v!=s){s.loading?(n(0,l=s.loading),v=s,n(1,u=s.loadingParams),n(2,a={}),d("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:u}))):(n(0,l=null),v=null);const e=await s();if(t!=m)return;n(0,l=e&&e.default||e),v=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,u=o):n(1,u=null),n(2,a=c[e].props),void d("routeLoaded",Object.assign({},r,{component:l,name:l.name,params:u})).then((()=>{Lt.set(u)}))}n(0,l=null),v=null,Lt.set(void 0)}));return function(t){P().$$.on_destroy.push(t)}((()=>{y(),h&&window.removeEventListener("popstate",h)})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[l,u,a,o,r,s,function(e){B.call(this,t,e)},function(e){B.call(this,t,e)}]}class St extends wt{constructor(t){super(),yt(this,t,jt,kt,c,{routes:3,prefix:4,restoreScrollState:5})}}function At(t){const e=t-1;return e*e*e+1}function Tt(t){return--t*t*t*t*t+1}function Dt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*s}}function Nt(t,{delay:e=0,duration:n=400,easing:o=At,x:r=0,y:s=0,opacity:i=0}={}){const c=getComputedStyle(t),l=+c.opacity,u="none"===c.transform?"":c.transform,a=l*(1-i);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${l-a*e}`}}function Rt(e){let n,o,r,s,i,c,l,u,a,f,d,p,h,g,m,v,w,b,q,k,L,j;return{c(){n=x("body"),o=x("div"),r=x("section"),s=x("div"),s.innerHTML='<h1 class="title svelte-1u5p29s">나에게 딱맞는<br/>\n          BOOKCLASS 알아보기</h1> \n        <h3 class="sec-tit svelte-1u5p29s">간단한 퀴즈로<br/>\n          알아보는 내 공부스타일</h3> \n        <div class="svelte-1u5p29s">소요 시간 : 3분 내외</div>',c=E(),l=x("hr"),a=E(),f=x("p"),f.innerHTML='<span id="p-tit" class="svelte-1u5p29s">이 테스트로 당신은...</span><br/>\n        AI Tutor에서 새로 출시한 &#39;북클래스&#39; 중 어떤 클래스가 알맞은지 알 수 있습니다.<br/>\n        공부 스타일과 간단한 퀴즈로 알아보는 테스트 시작해볼까요?',p=E(),h=x("hr"),m=E(),v=x("div"),w=x("button"),w.textContent="시 작",O(s,"id","title-box"),O(s,"class","svelte-1u5p29s"),O(l,"class","w-line svelte-1u5p29s"),O(f,"class","w-line svelte-1u5p29s"),O(h,"class","w-line svelte-1u5p29s"),O(w,"class","start svelte-1u5p29s"),O(v,"class","start-wrap svelte-1u5p29s"),O(r,"id","welcome"),O(r,"class","container svelte-1u5p29s"),O(o,"id","wrap")},m(t,i){$(t,n,i),y(n,o),y(o,r),y(r,s),y(r,c),y(r,l),y(r,a),y(r,f),y(r,p),y(r,h),y(r,m),y(r,v),y(v,w),k=!0,L||(j=C(w,"click",e[0]),L=!0)},p:t,i(t){k||(i||J((()=>{i=ft(s,Nt,{y:-50,duration:800}),i.start()})),u||J((()=>{u=ft(l,Nt,{y:-40,duration:800,delay:800}),u.start()})),d||J((()=>{d=ft(f,Nt,{y:-40,duration:800,delay:800}),d.start()})),g||J((()=>{g=ft(h,Nt,{y:-40,duration:800,delay:800}),g.start()})),b||J((()=>{b=ft(v,Nt,{y:-40,duration:1e3,delay:1800}),b.start()})),q&&q.end(1),k=!0)},o(t){q=dt(o,Dt,{}),k=!1},d(t){t&&_(n),t&&q&&q.end(),L=!1,j()}}}function It(t){return[()=>async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await K(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0,void 0),window.location.hash=("#"==t.charAt(0)?"":"#")+t}("/qna")]}class Mt extends wt{constructor(t){super(),yt(this,t,It,Rt,c,{})}}const Pt=_t(0),Ht=_t(0);function Bt(t){return"[object Date]"===Object.prototype.toString.call(t)}function Yt(t,e){if(t===e||t!=t)return()=>t;const n=typeof t;if(n!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const n=e.map(((e,n)=>Yt(t[n],e)));return t=>n.map((e=>e(t)))}if("object"===n){if(!t||!e)throw new Error("Object cannot be null");if(Bt(t)&&Bt(e)){t=t.getTime();const n=(e=e.getTime())-t;return e=>new Date(t+e*n)}const n=Object.keys(e),o={};return n.forEach((n=>{o[n]=Yt(t[n],e[n])})),t=>{const e={};return n.forEach((n=>{e[n]=o[n](t)})),e}}if("number"===n){const n=e-t;return e=>t+e*n}throw new Error(`Cannot interpolate ${n} values`)}function zt(t,o={}){const r=_t(t);let s,i=t;function c(c,l){if(null==t)return r.set(t=c),Promise.resolve();i=c;let u=s,a=!1,{delay:f=0,duration:d=400,easing:h=e,interpolate:g=Yt}=n(n({},o),l);if(0===d)return u&&(u.abort(),u=null),r.set(t=i),Promise.resolve();const m=p()+f;let y;return s=v((e=>{if(e<m)return!0;a||(y=g(t,c),"function"==typeof d&&(d=d(t,c)),a=!0),u&&(u.abort(),u=null);const n=e-m;return n>d?(r.set(t=c),!1):(r.set(t=y(h(n/d))),!0)})),s.promise}return{set:c,update:(e,n)=>c(e(i,t),n),subscribe:r.subscribe}}const Xt=[{q:"이번 휴가에 가는 미국 여행을 위해 영어 회화 공부를 시작하기로 했다. 가장 먼저 하는 일은?",a:[{answer:"서점에 가서 영어 회화 책을 산다.",outgoing:1},{answer:"실습이 중요하지! 영어학원에 등록한다.",outgoing:5},{answer:"공부는 재밌게! 미드, 영드 정주행을 시작한다.",outgoing:3}]},{q:"미국으로 홀로 여행을 왔다. 게스트하우스에서 파티가 있다고 하는데...",a:[{answer:"외국인 친구를 사귈 수 있는 절호의 기회! 당장 참여한다.",outgoing:5},{answer:"파티가 시작된 후 분위기를 보면서 고민해본다.",outgoing:3},{answer:"파티는 관심 없다. 혼자 노는 것이 편하다.",outgoing:1}]},{q:'휴가 후 첫 출근날. 잠이 안 와서 새벽에 잤더니 너무 졸리다. 어제 일찍 잘걸 그랬네ㅜㅜ <br/><br/> "I ____ have gone to bed early yesterday." <br/><br/> 빈칸에 들어갈 단어는? ',a:[{answer:"must",score:0},{answer:"should",score:5},{answer:"could",score:0}]},{q:"다음 중 가장 갖고 싶은 영어 능력은?",a:[{answer:"유학파세요...? 원어민 뺨치는 발음",outgoing:5},{answer:"어떤 표현도 알아듣는 뻥 뚫린 귀",outgoing:3},{answer:"어떠한 실수도 용납 않는 철저한 문법 실력",outgoing:1}]},{q:'캐나다에서 온 새로운 매니저 Emma씨를 출근길에 만났다. <br/><br/> "요새 일교차가 정말 커요."<br/><br/>를 영어로 말해야한다면?',a:[{answer:"이정도는 식은죽먹기지~ 머리에서 바로 떠오른다.",score:5},{answer:"완벽한 문장은 아니지만 의미는 전달할 수 있다",score:3},{answer:"음...^^; 미소를 지으며 도망간다.",score:0}]},{q:"Emma씨가 회의에 갔는데 전화가 왔다. 앗 그런데 영어로 대화를 건다.",a:[{answer:'"She has just stepped out." 당황하지 않고 Emma가 부재중임을 밝힌다.',score:5},{answer:'"Wait... She is not here." 당황했지만 할 말은 할 수 있다.',score:3},{answer:"뚜-- 실수로 전화가 끊어진 척 한다.",score:0}]},{q:'퇴근 길에 Emma씨를 만났다. 그녀가 <br/><br/>"I can\'t wait for Saturday."<br/><br/>라고 한다. 무슨 말일까?',a:[{answer:"토요일을 기다릴 수가 없어요.",score:0},{answer:"토요일이 너무 기다려져요.",score:5},{answer:"전혀 모르겠다 ㅜㅜ",score:0}]}],Ft=[{level:"고급반",outgoing:"low",img:"이지잉글리시.png",name:"김태연의 <br/>'이지 잉글리시'",url:"http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024799",desc:"60개국이 넘는 국가들을 직접 발로 뛰고 여행하며 영어를 쓰는 많은 여행자들과 \n      다양한 상황에서 나누는 대화와 에피소드들을 모으고 정리하여 \n      수많은 상황과 일상생활 속에서 꼭 필요한 내용들을 대화문에 담아 완성된 책입니다. \n      뿐만 아니라, 영화, 미드, 시트콤 등을 수없이 보고 메모하고 대화문을 만들어냈습니다."},{level:"초급반",outgoing:"low",img:"밤10시.png",url:"http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024811",name:"지나쌤의 <br/>'밤 10시, 나를 돌보는 시간'",desc:"밤 10시, 바쁜 일상과 육아에 지쳐 하루 일과를 마무리하고 쉬고 싶은 시간이기도 \n          나의 부족함과 목마름을 채울 수 있는 시간이기도 하다. \n          밤 10시, 나를 돌보는 시간》은 이 시간을 이용한 100일간의 영어 공부를 제안합니다."},{level:"중급반",outgoing:"high",img:"5분영어회화.png",name:"지나쌤의 <br/>'5분 영어회화'",url:"http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024812",desc:"‘네이티브가 매일 쓰는 영어 표현’부터 ‘직역하면 안 되는 영어’, ‘콩글리시 바로잡기’까지 \n        네이티브가 밥 먹듯이 매일 쓰는 영어회화 표현을 딱 5분만 투자해서 외워 봅시다. \n        지나쌤의 친절한 설명으로 이해도 쏙쏙되어요."},{level:"초급반",outgoing:"high",img:"60세컨즈.jfif",name:"소피반의 <br/>'60세컨즈 잉글리쉬'",url:"http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024813",desc:"저자 소피반이 ‘한국인들에게 간단하지만 꼭 필요한 표현으로는 무엇이 있을까?’라는 고민을 통해 만든 콘텐츠를 기반으로\n한국인이 실생활에서 가장 많이 하는 말 100개를 엄선하여 영어로 서슴없이 말할 수 있도록 학습하는 도서입니다. "},{level:"중급반",outgoing:"low",img:"리얼영어회화.png",name:"제나쌤의 <br/>'리얼 영어회화'",url:"http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024814",desc:"생활 밀착형 50개의 상황으로 떠나는 방구석 어학 연수로 \n        어디에 가든, 누굴 만나든 통하는 ‘진짜’ 영어 대화가 가능해집니다.\n        당장 외국에 나가지 않더라도 어디서 누굴 만나도 바로 쓸 수 있는 생활 초 밀착형 표현들을 익혀 \n        누굴 만나도 자신 있게 대화가 통하는 ‘영어 인싸’가 될 수 있습니다!"},{level:"중급반",outgoing:"middle",img:"스피킹코치.jpg",name:"월터의 <br/>'낫 Not 뻔한 영어",url:"http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024816",desc:"우리가 실생활에서 뻔하게 마주하는 상황 속 누구나 다 아는 표현 말고 어나더 레벨의 영어 회화 표현을 담은 책입니다. \n          Native의 입과 생각을 빌려 매일 똑같이 쓰는 지루한 표현에서 탈피해 봅시다."},{level:"고급반",outgoing:"high",img:"기죽지않는.png",name:"소피반의 <br/>'미국에서 기죽지 않는 쓸만한 영어'",url:"http://glearningplus.lgcns.com/lgcns/mt/courseinfo/nesreqcourse/nesreqcourse/retrieveOnlineCourseDetailList.dev?coursecode=50024817",desc:"20만 명에 가까운 구독자를 보유한 영어 교육 유튜브 채널 Sophie Ban에서 현재 인기리에 연재 중인 ‘쓸만한 영어’를 그대로 수록한 도서로서,\n 수많은 구독자들이 정말 ‘배울 만한 가치가 있는 영어 학습 콘텐츠’로서 선택한 검증된 내용의 영어 학습서입니다. \n 저자가 미국에서 직접 온몸으로 부딪히며 익힌 제대로 써먹을 수 있는 영어, 즉 ‘미국에서 정말 통할 수 있는 제대로 된 100% 현실 영어’를 배울 수 있습니다."}];function Ut(t,e,n){const o=t.slice();return o[8]=e[n],o}function Wt(t){let e;return{c(){e=x("div"),O(e,"class","status svelte-hhscyn"),S(e,"width",(t[0]+1)/Xt.length*100+"%")},m(t,n){$(t,e,n)},p(t,n){1&n&&S(e,"width",(t[0]+1)/Xt.length*100+"%")},d(t){t&&_(e)}}}function Gt(t){let e,n,o,r,s,i,c,l=t[8].answer+"";function u(){return t[3](t[8])}return{c(){e=x("button"),n=q(l),O(e,"class","a box svelte-hhscyn")},m(t,o){$(t,e,o),y(e,n),s=!0,i||(c=C(e,"click",u),i=!0)},p(e,o){t=e,(!s||2&o)&&l!==(l=t[8].answer+"")&&L(n,l)},i(t){s||(J((()=>{r&&r.end(1),o=ft(e,Nt,{y:20,delay:600}),o.start()})),s=!0)},o(t){o&&o.invalidate(),r=dt(e,Nt,{x:20}),s=!1},d(t){t&&_(e),t&&r&&r.end(),i=!1,c()}}}function Kt(t){let e,n,o,r,s,i,c=t[1].q+"",l=t[1].a,u=[];for(let e=0;e<l.length;e+=1)u[e]=Gt(Ut(t,l,e));const a=t=>ut(u[t],1,1,(()=>{u[t]=null}));return{c(){e=x("div"),r=E(),s=x("div");for(let t=0;t<u.length;t+=1)u[t].c();O(e,"class","q box svelte-hhscyn"),O(s,"class","answer svelte-hhscyn")},m(t,n){$(t,e,n),e.innerHTML=c,$(t,r,n),$(t,s,n);for(let t=0;t<u.length;t+=1)u[t].m(s,null);i=!0},p(t,n){if((!i||2&n)&&c!==(c=t[1].q+"")&&(e.innerHTML=c),6&n){let e;for(l=t[1].a,e=0;e<l.length;e+=1){const o=Ut(t,l,e);u[e]?(u[e].p(o,n),lt(u[e],1)):(u[e]=Gt(o),u[e].c(),lt(u[e],1),u[e].m(s,null))}for(it(),e=l.length;e<u.length;e+=1)a(e);ct()}},i(t){if(!i){J((()=>{o&&o.end(1),n=ft(e,Dt,{duration:400,delay:600}),n.start()}));for(let t=0;t<l.length;t+=1)lt(u[t]);i=!0}},o(t){n&&n.invalidate(),o=dt(e,Dt,{delay:400}),u=u.filter(Boolean);for(let t=0;t<u.length;t+=1)ut(u[t]);i=!1},d(t){t&&_(e),t&&o&&o.end(),t&&_(r),t&&_(s),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(u,t)}}}function Jt(e){let n,o,r,s,i,l,u=e[0],a=e[0],f=Wt(e),d=Kt(e);return{c(){n=x("body"),o=x("div"),r=x("section"),s=x("div"),f.c(),i=E(),d.c(),O(s,"class","status-bar svelte-hhscyn"),O(r,"id","qna"),O(r,"class","container"),O(o,"id","wrap")},m(t,e){$(t,n,e),y(n,o),y(o,r),y(r,s),f.m(s,null),y(r,i),d.m(r,null),l=!0},p(e,[n]){1&n&&c(u,u=e[0])?(f.d(1),f=Wt(e),f.c(),f.m(s,null)):f.p(e,n),1&n&&c(a,a=e[0])?(it(),ut(d,1,1,t),ct(),d=Kt(e),d.c(),lt(d),d.m(r,null)):d.p(e,n)},i(t){l||(lt(d),l=!0)},o(t){ut(d),l=!1},d(t){t&&_(n),f.d(t),d.d(t)}}}function Qt(t,e,n){let o,r=0,s=0,i=0;H((()=>{}));const c=zt(0,{duration:400,easing:At});function l(t){t.score?i+=t.score:t.outgoing&&(s+=t.outgoing),c.set((r+1)/Xt.length),r+1<Xt.length?n(0,r++,r):(Pt.set(i),Ht.set(s),async function(t){if(!t||t.length<1||"/"!=t.charAt(0)&&0!==t.indexOf("#/"))throw Error("Invalid parameter location");await K();const e=("#"==t.charAt(0)?"":"#")+t;try{const t={...history.state};delete t.__svelte_spa_router_scrollX,delete t.__svelte_spa_router_scrollY,window.history.replaceState(t,void 0,e)}catch(t){console.warn("Caught exception while replacing the current page. If you're running this in the Svelte REPL, please note that the `replace` method might not work in this environment.")}window.dispatchEvent(new Event("hashchange"))}("/result/"))}return t.$$.update=()=>{1&t.$$.dirty&&n(1,o=Xt[r])},[r,o,l,t=>l(t)]}class Vt extends wt{constructor(t){super(),yt(this,t,Qt,Jt,c,{})}}function Zt(e){let n,o,r;return{c(){n=x("textarea")},m(t,s){$(t,n,s),j(n,e[0]),e[3](n),o||(r=C(n,"input",e[2]),o=!0)},p(t,[e]){1&e&&j(n,t[0])},i:t,o:t,d(t){t&&_(n),e[3](null),o=!1,r()}}}function te(t,e,n){let o,{value:r}=e;return H((()=>{o.select(),document.execCommand("copy")})),t.$$set=t=>{"value"in t&&n(0,r=t.value)},[r,o,function(){r=this.value,n(0,r)},function(t){z[t?"unshift":"push"]((()=>{o=t,n(1,o)}))}]}class ee extends wt{constructor(t){super(),yt(this,t,te,Zt,c,{value:0})}}function ne(e){let n,o=e[0],r=re(e);return{c(){r.c(),n=k()},m(t,e){r.m(t,e),$(t,n,e)},p(e,s){1&s&&c(o,o=e[0])?(it(),ut(r,1,1,t),ct(),r=re(e),r.c(),lt(r),r.m(n.parentNode,n)):r.p(e,s)},i(t){lt(r)},o(t){ut(r)},d(t){t&&_(n),r.d(t)}}}function oe(e){let n,o,r=e[0],s=ie(e);return{c(){s.c(),n=k()},m(t,e){s.m(t,e),$(t,n,e),o=!0},p(e,o){1&o&&c(r,r=e[0])?(it(),ut(s,1,1,t),ct(),s=ie(e),s.c(),lt(s),s.m(n.parentNode,n)):s.p(e,o)},i(t){o||(lt(s),o=!0)},o(t){ut(s),o=!1},d(t){t&&_(n),s.d(t)}}}function re(e){let n,o,r,i,c,l,a,f,d,p,h,g,m,v,w,b,k,j,S,A,T,D,N,R,I,M,P,H,B,Y,z,X,F,U,W,G,K,Q,V,Z,tt,et,nt,ot,rt,st,it=e[1].name+"",ct=e[1].desc+"";return{c(){n=x("section"),o=x("div"),o.innerHTML='<div class="p title svelte-1646q23">당신에게 딱 맞는 북클래스는...</div>',r=E(),i=x("div"),c=x("div"),l=x("img"),p=E(),h=x("div"),g=E(),m=x("div"),v=q(ct),w=E(),b=x("hr"),k=E(),j=x("p"),j.textContent="공유하기",S=E(),A=x("div"),A.textContent="#MissionEnglish #북클래스 #영어회화",T=E(),D=x("button"),D.textContent="링크 복사하기",N=E(),R=x("hr"),I=E(),M=x("div"),P=x("p"),H=q("Youtube 명강사가 만든 브랜드 섹션 북클래스!"),B=x("br"),Y=q("\r\n            이젠 유튜브로 듣지만 말고 직접 말해보아요."),z=x("br"),X=q("\r\n            370개의 상황대화는 보너스!!"),F=x("br"),U=x("br"),W=q("\r\n            지금 바로 신청하세요~\r\n            "),G=x("br"),K=x("br"),Q=E(),Z=E(),tt=x("hr"),nt=E(),ot=x("div"),O(o,"id","score-box"),O(o,"class","svelte-1646q23"),u(l.src,a="img/"+e[1].img)||O(l,"src",a),O(l,"alt",f=e[1].name),O(l,"title",d=e[1].name),O(l,"class","svelte-1646q23"),O(c,"class","art svelte-1646q23"),O(h,"class","result title svelte-1646q23"),O(m,"class","res desc svelte-1646q23"),O(i,"id","desc-box"),O(i,"class","svelte-1646q23"),O(j,"class","svelte-1646q23"),O(A,"class","hash svelte-1646q23"),O(D,"class","btn svelte-1646q23"),O(V,"class","btn svelte-1646q23"),O(P,"class","svelte-1646q23"),O(M,"class","caution svelte-1646q23"),O(n,"id","result"),O(n,"class","container svelte-1646q23"),O(ot,"id","clipboard")},m(t,s){$(t,n,s),y(n,o),y(n,r),y(n,i),y(i,c),y(c,l),y(i,p),y(i,h),h.innerHTML=it,y(i,g),y(i,m),y(m,v),y(n,w),y(n,b),y(n,k),y(n,j),y(n,S),y(n,A),y(n,T),y(n,D),y(n,N),y(n,R),y(n,I),y(n,M),y(M,P),y(P,H),y(P,B),y(P,Y),y(P,z),y(P,X),y(P,F),y(P,U),y(P,W),y(P,G),y(P,K),y(P,Q),y(P,V),y(n,Z),y(n,tt),$(t,nt,s),$(t,ot,s),rt||(st=[C(D,"click",e[6]),C(V,"click",e[7])],rt=!0)},p(t,e){2&e&&!u(l.src,a="img/"+t[1].img)&&O(l,"src",a),2&e&&f!==(f=t[1].name)&&O(l,"alt",f),2&e&&d!==(d=t[1].name)&&O(l,"title",d),2&e&&it!==(it=t[1].name+"")&&(h.innerHTML=it),2&e&&ct!==(ct=t[1].desc+"")&&L(v,ct)},i(t){et||J((()=>{et=ft(n,Dt,{delay:500}),et.start()}))},o:t,d(t){t&&_(n),t&&_(nt),t&&_(ot),rt=!1,s(st)}}}function se(e){let n,o;return{c(){n=x("p"),n.textContent="잠시 기다려주세요...",O(n,"class","wait svelte-1646q23")},m(t,e){$(t,n,e)},i(t){o||J((()=>{o=ft(n,Nt,{y:-20,duration:1e3}),o.start()}))},o:t,d(t){t&&_(n)}}}function ie(e){let n,o,r,s,i,l,u,a=e[0],f=se();return{c(){n=x("section"),o=x("div"),r=q("CALCULATING\r\n      "),s=x("div"),i=E(),f.c(),O(s,"class","calc svelte-1646q23"),S(s,"width",e[2]+"%"),O(o,"class","calc-bar svelte-1646q23"),O(n,"id","calc")},m(t,e){$(t,n,e),y(n,o),y(o,r),y(o,s),y(n,i),f.m(n,null),u=!0},p(e,o){(!u||4&o)&&S(s,"width",e[2]+"%"),1&o&&c(a,a=e[0])&&(it(),ut(f,1,1,t),ct(),f=se(),f.c(),lt(f),f.m(n,null))},i(t){u||(lt(f),l&&l.end(1),u=!0)},o(t){ut(f),l=dt(n,Dt,{}),u=!1},d(t){t&&_(n),f.d(t),t&&l&&l.end()}}}function ce(t){let e,n,o,r;const s=[oe,ne],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=s[e](t),{c(){n.c(),o=k()},m(t,n){i[e].m(t,n),$(t,o,n),r=!0},p(t,[r]){let l=e;e=c(t),e===l?i[e].p(t,r):(it(),ut(i[l],1,1,(()=>{i[l]=null})),ct(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),lt(n,1),n.m(o.parentNode,o))},i(t){r||(lt(n),r=!0)},o(t){ut(n),r=!1},d(t){i[e].d(t),t&&_(o)}}}function le(t,e,n){let o,r,s;f(t,Ht,(t=>n(10,o=t))),f(t,Pt,(t=>n(11,r=t)));let i=r,c=o,l="",u="",a=!0,d={};function p(){const t=new ee({target:document.getElementById("clipboard"),props:{value:"https://aerinlee.github.io/bookclass-test/"}});alert("복사되었습니다."),t.$destroy()}const h=zt(0,{duration:4e3,easing:Tt});function g(){window.open(d.url)}f(t,h,(t=>n(2,s=t))),H((()=>{setTimeout((()=>{h.set(100)}),1500),setTimeout((()=>{!function(){l=i>17?"고급반":i>10?"중급반":"초급반";u="중급반"==l?c>9?"high":c<9?"low":"middle":c>=9?"high":"low";for(let t=0;t<Ft.length;t++)Ft[t].outgoing==u&&Ft[t].level==l&&n(1,d=Ft[t])}(),n(0,a=!1)}),4400)}));return[a,d,s,p,h,g,()=>p(),()=>g()]}class ue extends wt{constructor(t){super(),yt(this,t,le,ce,c,{})}}function ae(e){let n,o,r,s;return r=new St({props:{routes:e[0]}}),{c(){n=x("head"),n.innerHTML='<meta charset="utf-8"/> \n  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"/> \n\n  <meta property="og:type" content="website"/> \n  <meta property="og:title" content="나에게 딱 맞는 북클래스"/> \n  <meta property="og:description" content="어떤 북클래스가 나에게 맞을까?"/> \n  <meta property="og:image" content="img/title_img.jpg"/> \n  <meta property="og:url" content="https://aerinlee.github.io/bookclass-test/"/> \n\n  <meta http-equiv="X-UA-Compatible" content="IE=edge"/> \n\n  <link rel="shortcut icon" type="text/css" href="img/favicon.png"/> \n  <link rel="appel-touch-icon-precomposed" href="img/favicon.png"/> \n  <title>나에게 딱 맞는 북클래스</title>',o=E(),gt(r.$$.fragment)},m(t,e){$(t,n,e),$(t,o,e),mt(r,t,e),s=!0},p:t,i(t){s||(lt(r.$$.fragment,t),s=!0)},o(t){ut(r.$$.fragment,t),s=!1},d(t){t&&_(n),t&&_(o),vt(r,t)}}}function fe(t){return[{"/":Mt,"/qna/":Vt,"/result/":ue}]}return new class extends wt{constructor(t){super(),yt(this,t,fe,ae,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
