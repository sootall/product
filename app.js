(()=>{var mb=Object.create;var A0=Object.defineProperty;var gb=Object.getOwnPropertyDescriptor;var _b=Object.getOwnPropertyNames;var vb=Object.getPrototypeOf,yb=Object.prototype.hasOwnProperty;var ws=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var xb=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _b(t))!yb.call(e,s)&&s!==n&&A0(e,s,{get:()=>t[s],enumerable:!(i=gb(t,s))||i.enumerable});return e};var Qf=(e,t,n)=>(n=e!=null?mb(vb(e)):{},xb(t||!e||!e.__esModule?A0(n,"default",{value:e,enumerable:!0}):n,e));var B0=ws(Pt=>{"use strict";var ed=Symbol.for("react.transitional.element"),Sb=Symbol.for("react.portal"),Mb=Symbol.for("react.fragment"),bb=Symbol.for("react.strict_mode"),Eb=Symbol.for("react.profiler"),Tb=Symbol.for("react.consumer"),Ab=Symbol.for("react.context"),wb=Symbol.for("react.forward_ref"),Cb=Symbol.for("react.suspense"),Rb=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),Db=Symbol.for("react.activity"),w0=Symbol.iterator;function Nb(e){return e===null||typeof e!="object"?null:(e=w0&&e[w0]||e["@@iterator"],typeof e=="function"?e:null)}var L0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U0=Object.assign,O0={};function nr(e,t,n){this.props=e,this.context=t,this.refs=O0,this.updater=n||L0}nr.prototype.isReactComponent={};nr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};nr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I0(){}I0.prototype=nr.prototype;function nd(e,t,n){this.props=e,this.context=t,this.refs=O0,this.updater=n||L0}var id=nd.prototype=new I0;id.constructor=nd;U0(id,nr.prototype);id.isPureReactComponent=!0;var C0=Array.isArray;function td(){}var be={H:null,A:null,T:null,S:null},P0=Object.prototype.hasOwnProperty;function sd(e,t,n){var i=n.ref;return{$$typeof:ed,type:e,key:t,ref:i!==void 0?i:null,props:n}}function Lb(e,t){return sd(e.type,t,e.props)}function ad(e){return typeof e=="object"&&e!==null&&e.$$typeof===ed}function Ub(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var R0=/\/+/g;function $f(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ub(""+e.key):t.toString(36)}function Ob(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(td,td):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function er(e,t,n,i,s){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(a){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case ed:case Sb:r=!0;break;case N0:return r=e._init,er(r(e._payload),t,n,i,s)}}if(r)return s=s(e),r=i===""?"."+$f(e,0):i,C0(s)?(n="",r!=null&&(n=r.replace(R0,"$&/")+"/"),er(s,t,n,"",function(c){return c})):s!=null&&(ad(s)&&(s=Lb(s,n+(s.key==null||e&&e.key===s.key?"":(""+s.key).replace(R0,"$&/")+"/")+r)),t.push(s)),1;r=0;var o=i===""?".":i+":";if(C0(e))for(var l=0;l<e.length;l++)i=e[l],a=o+$f(i,l),r+=er(i,t,n,a,s);else if(l=Nb(e),typeof l=="function")for(e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,a=o+$f(i,l++),r+=er(i,t,n,a,s);else if(a==="object"){if(typeof e.then=="function")return er(Ob(e),t,n,i,s);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function yc(e,t,n){if(e==null)return e;var i=[],s=0;return er(e,i,"","",function(a){return t.call(n,a,s++)}),i}function Ib(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D0=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pb={map:yc,forEach:function(e,t,n){yc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yc(e,function(){t++}),t},toArray:function(e){return yc(e,function(t){return t})||[]},only:function(e){if(!ad(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pt.Activity=Db;Pt.Children=Pb;Pt.Component=nr;Pt.Fragment=Mb;Pt.Profiler=Eb;Pt.PureComponent=nd;Pt.StrictMode=bb;Pt.Suspense=Cb;Pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=be;Pt.__COMPILER_RUNTIME={__proto__:null,c:function(e){return be.H.useMemoCache(e)}};Pt.cache=function(e){return function(){return e.apply(null,arguments)}};Pt.cacheSignal=function(){return null};Pt.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var i=U0({},e.props),s=e.key;if(t!=null)for(a in t.key!==void 0&&(s=""+t.key),t)!P0.call(t,a)||a==="key"||a==="__self"||a==="__source"||a==="ref"&&t.ref===void 0||(i[a]=t[a]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var r=Array(a),o=0;o<a;o++)r[o]=arguments[o+2];i.children=r}return sd(e.type,s,i)};Pt.createContext=function(e){return e={$$typeof:Ab,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Tb,_context:e},e};Pt.createElement=function(e,t,n){var i,s={},a=null;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)P0.call(t,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(s[i]=t[i]);var r=arguments.length-2;if(r===1)s.children=n;else if(1<r){for(var o=Array(r),l=0;l<r;l++)o[l]=arguments[l+2];s.children=o}if(e&&e.defaultProps)for(i in r=e.defaultProps,r)s[i]===void 0&&(s[i]=r[i]);return sd(e,a,s)};Pt.createRef=function(){return{current:null}};Pt.forwardRef=function(e){return{$$typeof:wb,render:e}};Pt.isValidElement=ad;Pt.lazy=function(e){return{$$typeof:N0,_payload:{_status:-1,_result:e},_init:Ib}};Pt.memo=function(e,t){return{$$typeof:Rb,type:e,compare:t===void 0?null:t}};Pt.startTransition=function(e){var t=be.T,n={};be.T=n;try{var i=e(),s=be.S;s!==null&&s(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(td,D0)}catch(a){D0(a)}finally{t!==null&&n.types!==null&&(t.types=n.types),be.T=t}};Pt.unstable_useCacheRefresh=function(){return be.H.useCacheRefresh()};Pt.use=function(e){return be.H.use(e)};Pt.useActionState=function(e,t,n){return be.H.useActionState(e,t,n)};Pt.useCallback=function(e,t){return be.H.useCallback(e,t)};Pt.useContext=function(e){return be.H.useContext(e)};Pt.useDebugValue=function(){};Pt.useDeferredValue=function(e,t){return be.H.useDeferredValue(e,t)};Pt.useEffect=function(e,t){return be.H.useEffect(e,t)};Pt.useEffectEvent=function(e){return be.H.useEffectEvent(e)};Pt.useId=function(){return be.H.useId()};Pt.useImperativeHandle=function(e,t,n){return be.H.useImperativeHandle(e,t,n)};Pt.useInsertionEffect=function(e,t){return be.H.useInsertionEffect(e,t)};Pt.useLayoutEffect=function(e,t){return be.H.useLayoutEffect(e,t)};Pt.useMemo=function(e,t){return be.H.useMemo(e,t)};Pt.useOptimistic=function(e,t){return be.H.useOptimistic(e,t)};Pt.useReducer=function(e,t,n){return be.H.useReducer(e,t,n)};Pt.useRef=function(e){return be.H.useRef(e)};Pt.useState=function(e){return be.H.useState(e)};Pt.useSyncExternalStore=function(e,t,n){return be.H.useSyncExternalStore(e,t,n)};Pt.useTransition=function(){return be.H.useTransition()};Pt.version="19.2.0"});var Do=ws((SR,z0)=>{"use strict";z0.exports=B0()});var Z0=ws(Re=>{"use strict";function cd(e,t){var n=e.length;e.push(t);t:for(;0<n;){var i=n-1>>>1,s=e[i];if(0<xc(s,t))e[i]=t,e[n]=s,n=i;else break t}}function Ii(e){return e.length===0?null:e[0]}function Mc(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;t:for(var i=0,s=e.length,a=s>>>1;i<a;){var r=2*(i+1)-1,o=e[r],l=r+1,c=e[l];if(0>xc(o,n))l<s&&0>xc(c,o)?(e[i]=c,e[l]=n,i=l):(e[i]=o,e[r]=n,i=r);else if(l<s&&0>xc(c,n))e[i]=c,e[l]=n,i=l;else break t}}return t}function xc(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}Re.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(F0=performance,Re.unstable_now=function(){return F0.now()}):(rd=Date,V0=rd.now(),Re.unstable_now=function(){return rd.now()-V0});var F0,rd,V0,Zi=[],Cs=[],Bb=1,ri=null,dn=3,ud=!1,No=!1,Lo=!1,hd=!1,k0=typeof setTimeout=="function"?setTimeout:null,X0=typeof clearTimeout=="function"?clearTimeout:null,H0=typeof setImmediate<"u"?setImmediate:null;function Sc(e){for(var t=Ii(Cs);t!==null;){if(t.callback===null)Mc(Cs);else if(t.startTime<=e)Mc(Cs),t.sortIndex=t.expirationTime,cd(Zi,t);else break;t=Ii(Cs)}}function fd(e){if(Lo=!1,Sc(e),!No)if(Ii(Zi)!==null)No=!0,sr||(sr=!0,ir());else{var t=Ii(Cs);t!==null&&dd(fd,t.startTime-e)}}var sr=!1,Uo=-1,W0=5,q0=-1;function Y0(){return hd?!0:!(Re.unstable_now()-q0<W0)}function od(){if(hd=!1,sr){var e=Re.unstable_now();q0=e;var t=!0;try{t:{No=!1,Lo&&(Lo=!1,X0(Uo),Uo=-1),ud=!0;var n=dn;try{e:{for(Sc(e),ri=Ii(Zi);ri!==null&&!(ri.expirationTime>e&&Y0());){var i=ri.callback;if(typeof i=="function"){ri.callback=null,dn=ri.priorityLevel;var s=i(ri.expirationTime<=e);if(e=Re.unstable_now(),typeof s=="function"){ri.callback=s,Sc(e),t=!0;break e}ri===Ii(Zi)&&Mc(Zi),Sc(e)}else Mc(Zi);ri=Ii(Zi)}if(ri!==null)t=!0;else{var a=Ii(Cs);a!==null&&dd(fd,a.startTime-e),t=!1}}break t}finally{ri=null,dn=n,ud=!1}t=void 0}}finally{t?ir():sr=!1}}}var ir;typeof H0=="function"?ir=function(){H0(od)}:typeof MessageChannel<"u"?(ld=new MessageChannel,G0=ld.port2,ld.port1.onmessage=od,ir=function(){G0.postMessage(null)}):ir=function(){k0(od,0)};var ld,G0;function dd(e,t){Uo=k0(function(){e(Re.unstable_now())},t)}Re.unstable_IdlePriority=5;Re.unstable_ImmediatePriority=1;Re.unstable_LowPriority=4;Re.unstable_NormalPriority=3;Re.unstable_Profiling=null;Re.unstable_UserBlockingPriority=2;Re.unstable_cancelCallback=function(e){e.callback=null};Re.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W0=0<e?Math.floor(1e3/e):5};Re.unstable_getCurrentPriorityLevel=function(){return dn};Re.unstable_next=function(e){switch(dn){case 1:case 2:case 3:var t=3;break;default:t=dn}var n=dn;dn=t;try{return e()}finally{dn=n}};Re.unstable_requestPaint=function(){hd=!0};Re.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=dn;dn=e;try{return t()}finally{dn=n}};Re.unstable_scheduleCallback=function(e,t,n){var i=Re.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=n+s,e={id:Bb++,callback:t,priorityLevel:e,startTime:n,expirationTime:s,sortIndex:-1},n>i?(e.sortIndex=n,cd(Cs,e),Ii(Zi)===null&&e===Ii(Cs)&&(Lo?(X0(Uo),Uo=-1):Lo=!0,dd(fd,n-i))):(e.sortIndex=s,cd(Zi,e),No||ud||(No=!0,sr||(sr=!0,ir()))),e};Re.unstable_shouldYield=Y0;Re.unstable_wrapCallback=function(e){var t=dn;return function(){var n=dn;dn=t;try{return e.apply(this,arguments)}finally{dn=n}}}});var J0=ws((bR,K0)=>{"use strict";K0.exports=Z0()});var Q0=ws(bn=>{"use strict";var zb=Do();function j0(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Rs(){}var Mn={d:{f:Rs,r:function(){throw Error(j0(522))},D:Rs,C:Rs,L:Rs,m:Rs,X:Rs,S:Rs,M:Rs},p:0,findDOMNode:null},Fb=Symbol.for("react.portal");function Vb(e,t,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fb,key:i==null?null:""+i,children:e,containerInfo:t,implementation:n}}var Oo=zb.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function bc(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}bn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mn;bn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(j0(299));return Vb(e,t,null,n)};bn.flushSync=function(e){var t=Oo.T,n=Mn.p;try{if(Oo.T=null,Mn.p=2,e)return e()}finally{Oo.T=t,Mn.p=n,Mn.d.f()}};bn.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Mn.d.C(e,t))};bn.prefetchDNS=function(e){typeof e=="string"&&Mn.d.D(e)};bn.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,i=bc(n,t.crossOrigin),s=typeof t.integrity=="string"?t.integrity:void 0,a=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Mn.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:i,integrity:s,fetchPriority:a}):n==="script"&&Mn.d.X(e,{crossOrigin:i,integrity:s,fetchPriority:a,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};bn.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=bc(t.as,t.crossOrigin);Mn.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Mn.d.M(e)};bn.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,i=bc(n,t.crossOrigin);Mn.d.L(e,n,{crossOrigin:i,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};bn.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=bc(t.as,t.crossOrigin);Mn.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Mn.d.m(e)};bn.requestFormReset=function(e){Mn.d.r(e)};bn.unstable_batchedUpdates=function(e,t){return e(t)};bn.useFormState=function(e,t,n){return Oo.H.useFormState(e,t,n)};bn.useFormStatus=function(){return Oo.H.useHostTransitionStatus()};bn.version="19.2.0"});var e_=ws((TR,t_)=>{"use strict";function $0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($0)}catch(e){console.error(e)}}$0(),t_.exports=Q0()});var dS=ws(Zu=>{"use strict";var Ze=J0(),wv=Do(),Hb=e_();function $(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Cv(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function xl(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Rv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Dv(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function n_(e){if(xl(e)!==e)throw Error($(188))}function Gb(e){var t=e.alternate;if(!t){if(t=xl(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,i=t;;){var s=n.return;if(s===null)break;var a=s.alternate;if(a===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===a.child){for(a=s.child;a;){if(a===n)return n_(s),e;if(a===i)return n_(s),t;a=a.sibling}throw Error($(188))}if(n.return!==i.return)n=s,i=a;else{for(var r=!1,o=s.child;o;){if(o===n){r=!0,n=s,i=a;break}if(o===i){r=!0,i=s,n=a;break}o=o.sibling}if(!r){for(o=a.child;o;){if(o===n){r=!0,n=a,i=s;break}if(o===i){r=!0,i=a,n=s;break}o=o.sibling}if(!r)throw Error($(189))}}if(n.alternate!==i)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function Nv(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Nv(e),t!==null)return t;e=e.sibling}return null}var Ae=Object.assign,kb=Symbol.for("react.element"),Ec=Symbol.for("react.transitional.element"),Go=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),Uv=Symbol.for("react.consumer"),ns=Symbol.for("react.context"),Gp=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),Kd=Symbol.for("react.suspense_list"),kp=Symbol.for("react.memo"),Ds=Symbol.for("react.lazy");Symbol.for("react.scope");var Jd=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var Xb=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var i_=Symbol.iterator;function Io(e){return e===null||typeof e!="object"?null:(e=i_&&e[i_]||e["@@iterator"],typeof e=="function"?e:null)}var Wb=Symbol.for("react.client.reference");function jd(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Wb?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case Yd:return"Profiler";case Lv:return"StrictMode";case Zd:return"Suspense";case Kd:return"SuspenseList";case Jd:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Go:return"Portal";case ns:return e.displayName||"Context";case Uv:return(e._context.displayName||"Context")+".Consumer";case Gp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case kp:return t=e.displayName||null,t!==null?t:jd(e.type)||"Memo";case Ds:t=e._payload,e=e._init;try{return jd(e(t))}catch{}}return null}var ko=Array.isArray,Nt=wv.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=Hb.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,wa={pending:!1,data:null,method:null,action:null},Qd=[],hr=-1;function Vi(e){return{current:e}}function en(e){0>hr||(e.current=Qd[hr],Qd[hr]=null,hr--)}function Se(e,t){hr++,Qd[hr]=e.current,e.current=t}var Fi=Vi(null),rl=Vi(null),Hs=Vi(null),iu=Vi(null);function su(e,t){switch(Se(Hs,t),Se(rl,e),Se(Fi,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?uv(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=uv(t),e=$x(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}en(Fi),Se(Fi,e)}function Rr(){en(Fi),en(rl),en(Hs)}function $d(e){e.memoizedState!==null&&Se(iu,e);var t=Fi.current,n=$x(t,e.type);t!==n&&(Se(rl,e),Se(Fi,n))}function au(e){rl.current===e&&(en(Fi),en(rl)),iu.current===e&&(en(iu),_l._currentValue=wa)}var pd,s_;function ba(e){if(pd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pd=t&&t[1]||"",s_=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+pd+e+s_}var md=!1;function gd(e,t){if(!e||md)return"";md=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var d=function(){throw Error()};if(Object.defineProperty(d.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(d,[])}catch(p){var u=p}Reflect.construct(e,[],d)}else{try{d.call()}catch(p){u=p}e.call(d.prototype)}}else{try{throw Error()}catch(p){u=p}(d=e())&&typeof d.catch=="function"&&d.catch(function(){})}}catch(p){if(p&&u&&typeof p.stack=="string")return[p.stack,u.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=i.DetermineComponentFrameRoot(),r=a[0],o=a[1];if(r&&o){var l=r.split(`
`),c=o.split(`
`);for(s=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;s<c.length&&!c[s].includes("DetermineComponentFrameRoot");)s++;if(i===l.length||s===c.length)for(i=l.length-1,s=c.length-1;1<=i&&0<=s&&l[i]!==c[s];)s--;for(;1<=i&&0<=s;i--,s--)if(l[i]!==c[s]){if(i!==1||s!==1)do if(i--,s--,0>s||l[i]!==c[s]){var h=`
`+l[i].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=i&&0<=s);break}}}finally{md=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ba(n):""}function qb(e,t){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return e.child!==t&&t!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return gd(e.type,!1);case 11:return gd(e.type.render,!1);case 1:return gd(e.type,!0);case 31:return ba("Activity");default:return""}}function a_(e){try{var t="",n=null;do t+=qb(e,n),n=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var tp=Object.prototype.hasOwnProperty,Xp=Ze.unstable_scheduleCallback,_d=Ze.unstable_cancelCallback,Yb=Ze.unstable_shouldYield,Zb=Ze.unstable_requestPaint,qn=Ze.unstable_now,Kb=Ze.unstable_getCurrentPriorityLevel,Ov=Ze.unstable_ImmediatePriority,Iv=Ze.unstable_UserBlockingPriority,ru=Ze.unstable_NormalPriority,Jb=Ze.unstable_LowPriority,Pv=Ze.unstable_IdlePriority,jb=Ze.log,Qb=Ze.unstable_setDisableYieldValue,Sl=null,Yn=null;function Ps(e){if(typeof jb=="function"&&Qb(e),Yn&&typeof Yn.setStrictMode=="function")try{Yn.setStrictMode(Sl,e)}catch{}}var Zn=Math.clz32?Math.clz32:e1,$b=Math.log,t1=Math.LN2;function e1(e){return e>>>=0,e===0?32:31-($b(e)/t1|0)|0}var Tc=256,Ac=262144,wc=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Lu(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var s=0,a=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=i&134217727;return o!==0?(i=o&~a,i!==0?s=Ea(i):(r&=o,r!==0?s=Ea(r):n||(n=o&~e,n!==0&&(s=Ea(n))))):(o=i&~a,o!==0?s=Ea(o):r!==0?s=Ea(r):n||(n=i&~e,n!==0&&(s=Ea(n)))),s===0?0:t!==0&&t!==s&&(t&a)===0&&(a=s&-s,n=t&-t,a>=n||a===32&&(n&4194048)!==0)?t:s}function Ml(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function n1(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bv(){var e=wc;return wc<<=1,(wc&62914560)===0&&(wc=4194304),e}function vd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function bl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function i1(e,t,n,i,s,a){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=r&~n;0<n;){var h=31-Zn(n),d=1<<h;o[h]=0,l[h]=-1;var u=c[h];if(u!==null)for(c[h]=null,h=0;h<u.length;h++){var p=u[h];p!==null&&(p.lane&=-536870913)}n&=~d}i!==0&&zv(e,i,0),a!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=a&~(r&~t))}function zv(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Zn(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function Fv(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Zn(n),s=1<<i;s&t|e[i]&t&&(e[i]|=t),n&=~s}}function Vv(e,t){var n=t&-t;return n=(n&42)!==0?1:Wp(n),(n&(e.suspendedLanes|t))!==0?0:n}function Wp(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function qp(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hv(){var e=se.p;return e!==0?e:(e=window.event,e===void 0?32:uS(e.type))}function r_(e,t){var n=se.p;try{return se.p=e,t()}finally{se.p=n}}var ta=Math.random().toString(36).slice(2),rn="__reactFiber$"+ta,In="__reactProps$"+ta,Vr="__reactContainer$"+ta,ep="__reactEvents$"+ta,s1="__reactListeners$"+ta,a1="__reactHandles$"+ta,o_="__reactResources$"+ta,El="__reactMarker$"+ta;function Yp(e){delete e[rn],delete e[In],delete e[ep],delete e[s1],delete e[a1]}function fr(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vr]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=mv(e);e!==null;){if(n=e[rn])return n;e=mv(e)}return t}e=n,n=e.parentNode}return null}function Hr(e){if(e=e[rn]||e[Vr]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Xo(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error($(33))}function Mr(e){var t=e[o_];return t||(t=e[o_]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function tn(e){e[El]=!0}var Gv=new Set,kv={};function Ba(e,t){Dr(e,t),Dr(e+"Capture",t)}function Dr(e,t){for(kv[e]=t,e=0;e<t.length;e++)Gv.add(t[e])}var r1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),l_={},c_={};function o1(e){return tp.call(c_,e)?!0:tp.call(l_,e)?!1:r1.test(e)?c_[e]=!0:(l_[e]=!0,!1)}function Gc(e,t,n){if(o1(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Cc(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ki(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}function li(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function l1(e,t,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,a=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(r){n=""+r,a.call(this,r)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function np(e){if(!e._valueTracker){var t=Xv(e)?"checked":"value";e._valueTracker=l1(e,t,""+e[t])}}function Wv(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Xv(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ou(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var c1=/[\n"\\]/g;function hi(e){return e.replace(c1,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ip(e,t,n,i,s,a,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+li(t)):e.value!==""+li(t)&&(e.value=""+li(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?sp(e,r,li(t)):n!=null?sp(e,r,li(n)):i!=null&&e.removeAttribute("value"),s==null&&a!=null&&(e.defaultChecked=!!a),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+li(o):e.removeAttribute("name")}function qv(e,t,n,i,s,a,r,o){if(a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.type=a),t!=null||n!=null){if(!(a!=="submit"&&a!=="reset"||t!=null)){np(e);return}n=n!=null?""+li(n):"",t=t!=null?""+li(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}i=i??s,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=o?e.checked:!!i,e.defaultChecked=!!i,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),np(e)}function sp(e,t,n){t==="number"&&ou(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function br(e,t,n,i){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&i&&(e[n].defaultSelected=!0)}else{for(n=""+li(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,i&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Yv(e,t,n){if(t!=null&&(t=""+li(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+li(n):""}function Zv(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error($(92));if(ko(i)){if(1<i.length)throw Error($(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=li(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),np(e)}function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var u1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function u_(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||u1.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Kv(e,t,n){if(t!=null&&typeof t!="object")throw Error($(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var s in t)i=t[s],t.hasOwnProperty(s)&&n[s]!==i&&u_(e,s,i)}else for(var a in t)t.hasOwnProperty(a)&&u_(e,a,t[a])}function Zp(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var h1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),f1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function kc(e){return f1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function is(){}var ap=null;function Kp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,Er=null;function h_(e){var t=Hr(e);if(t&&(e=t.stateNode)){var n=e[In]||null;t:switch(e=t.stateNode,t.type){case"input":if(ip(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+hi(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var s=i[In]||null;if(!s)throw Error($(90));ip(i,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Wv(i)}break t;case"textarea":Yv(e,n.value,n.defaultValue);break t;case"select":t=n.value,t!=null&&br(e,!!n.multiple,t,!1)}}}var yd=!1;function Jv(e,t,n){if(yd)return e(t,n);yd=!0;try{var i=e(t);return i}finally{if(yd=!1,(dr!==null||Er!==null)&&(Xu(),dr&&(t=dr,e=Er,Er=dr=null,h_(t),e)))for(t=0;t<e.length;t++)h_(e[t])}}function ol(e,t){var n=e.stateNode;if(n===null)return null;var i=n[In]||null;if(i===null)return null;n=i[t];t:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break t;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var ls=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rp=!1;if(ls)try{ar={},Object.defineProperty(ar,"passive",{get:function(){rp=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{rp=!1}var ar,Bs=null,Jp=null,Xc=null;function jv(){if(Xc)return Xc;var e,t=Jp,n=t.length,i,s="value"in Bs?Bs.value:Bs.textContent,a=s.length;for(e=0;e<n&&t[e]===s[e];e++);var r=n-e;for(i=1;i<=r&&t[n-i]===s[a-i];i++);return Xc=s.slice(e,1<i?1-i:void 0)}function Wc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Rc(){return!0}function f_(){return!1}function Pn(e){function t(n,i,s,a,r){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=a,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Rc:f_,this.isPropagationStopped=f_,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rc)},persist:function(){},isPersistent:Rc}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=Pn(za),Tl=Ae({},za,{view:0,detail:0}),d1=Pn(Tl),xd,Sd,Po,Ou=Ae({},Tl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(xd=e.screenX-Po.screenX,Sd=e.screenY-Po.screenY):Sd=xd=0,Po=e),xd)},movementY:function(e){return"movementY"in e?e.movementY:Sd}}),d_=Pn(Ou),p1=Ae({},Ou,{dataTransfer:0}),m1=Pn(p1),g1=Ae({},Tl,{relatedTarget:0}),Md=Pn(g1),_1=Ae({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),v1=Pn(_1),y1=Ae({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x1=Pn(y1),S1=Ae({},za,{data:0}),p_=Pn(S1),M1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},E1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=E1[e])?!!t[e]:!1}function jp(){return T1}var A1=Ae({},Tl,{key:function(e){if(e.key){var t=M1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?b1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jp,charCode:function(e){return e.type==="keypress"?Wc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),w1=Pn(A1),C1=Ae({},Ou,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),m_=Pn(C1),R1=Ae({},Tl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jp}),D1=Pn(R1),N1=Ae({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=Pn(N1),U1=Ae({},Ou,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=Pn(U1),I1=Ae({},za,{newState:0,oldState:0}),P1=Pn(I1),B1=[9,13,27,32],Qp=ls&&"CompositionEvent"in window,Yo=null;ls&&"documentMode"in document&&(Yo=document.documentMode);var z1=ls&&"TextEvent"in window&&!Yo,Qv=ls&&(!Qp||Yo&&8<Yo&&11>=Yo),g_=" ",__=!1;function $v(e,t){switch(e){case"keyup":return B1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ty(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var pr=!1;function F1(e,t){switch(e){case"compositionend":return ty(t);case"keypress":return t.which!==32?null:(__=!0,g_);case"textInput":return e=t.data,e===g_&&__?null:e;default:return null}}function V1(e,t){if(pr)return e==="compositionend"||!Qp&&$v(e,t)?(e=jv(),Xc=Jp=Bs=null,pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qv&&t.locale!=="ko"?null:t.data;default:return null}}var H1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function v_(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!H1[e.type]:t==="textarea"}function ey(e,t,n,i){dr?Er?Er.push(i):Er=[i]:dr=i,t=Tu(t,"onChange"),0<t.length&&(n=new Uu("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Zo=null,ll=null;function G1(e){Jx(e,0)}function Iu(e){var t=Xo(e);if(Wv(t))return e}function y_(e,t){if(e==="change")return t}var ny=!1;ls&&(ls?(Nc="oninput"in document,Nc||(bd=document.createElement("div"),bd.setAttribute("oninput","return;"),Nc=typeof bd.oninput=="function"),Dc=Nc):Dc=!1,ny=Dc&&(!document.documentMode||9<document.documentMode));var Dc,Nc,bd;function x_(){Zo&&(Zo.detachEvent("onpropertychange",iy),ll=Zo=null)}function iy(e){if(e.propertyName==="value"&&Iu(ll)){var t=[];ey(t,ll,e,Kp(e)),Jv(G1,t)}}function k1(e,t,n){e==="focusin"?(x_(),Zo=t,ll=n,Zo.attachEvent("onpropertychange",iy)):e==="focusout"&&x_()}function X1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Iu(ll)}function W1(e,t){if(e==="click")return Iu(t)}function q1(e,t){if(e==="input"||e==="change")return Iu(t)}function Y1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Jn=typeof Object.is=="function"?Object.is:Y1;function cl(e,t){if(Jn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!tp.call(t,s)||!Jn(e[s],t[s]))return!1}return!0}function S_(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function M_(e,t){var n=S_(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=S_(n)}}function sy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ay(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ou(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ou(e.document)}return t}function $p(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Z1=ls&&"documentMode"in document&&11>=document.documentMode,mr=null,op=null,Ko=null,lp=!1;function b_(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lp||mr==null||mr!==ou(i)||(i=mr,"selectionStart"in i&&$p(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ko&&cl(Ko,i)||(Ko=i,i=Tu(op,"onSelect"),0<i.length&&(t=new Uu("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=mr)))}function Ma(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gr={animationend:Ma("Animation","AnimationEnd"),animationiteration:Ma("Animation","AnimationIteration"),animationstart:Ma("Animation","AnimationStart"),transitionrun:Ma("Transition","TransitionRun"),transitionstart:Ma("Transition","TransitionStart"),transitioncancel:Ma("Transition","TransitionCancel"),transitionend:Ma("Transition","TransitionEnd")},Ed={},ry={};ls&&(ry=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Fa(e){if(Ed[e])return Ed[e];if(!gr[e])return e;var t=gr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ry)return Ed[e]=t[n];return e}var oy=Fa("animationend"),ly=Fa("animationiteration"),cy=Fa("animationstart"),K1=Fa("transitionrun"),J1=Fa("transitionstart"),j1=Fa("transitioncancel"),uy=Fa("transitionend"),hy=new Map,cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cp.push("scrollEnd");function bi(e,t){hy.set(e,t),Ba(t,[e])}var lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],_r=0,tm=0;function Pu(){for(var e=_r,t=tm=_r=0;t<e;){var n=oi[t];oi[t++]=null;var i=oi[t];oi[t++]=null;var s=oi[t];oi[t++]=null;var a=oi[t];if(oi[t++]=null,i!==null&&s!==null){var r=i.pending;r===null?s.next=s:(s.next=r.next,r.next=s),i.pending=s}a!==0&&fy(n,s,a)}}function Bu(e,t,n,i){oi[_r++]=e,oi[_r++]=t,oi[_r++]=n,oi[_r++]=i,tm|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function em(e,t,n,i){return Bu(e,t,n,i),cu(e)}function Va(e,t){return Bu(e,null,null,t),cu(e)}function fy(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var s=!1,a=e.return;a!==null;)a.childLanes|=n,i=a.alternate,i!==null&&(i.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(s=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,s&&t!==null&&(s=31-Zn(n),e=a.hiddenUpdates,i=e[s],i===null?e[s]=[t]:i.push(t),t.lane=n|536870912),a):null}function cu(e){if(50<sl)throw sl=0,Dp=null,Error($(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vr={};function Q1(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,t,n,i){return new Q1(e,t,n,i)}function nm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function as(e,t){var n=e.alternate;return n===null?(n=Xn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function dy(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function qc(e,t,n,i,s,a){var r=0;if(i=e,typeof e=="function")nm(e)&&(r=1);else if(typeof e=="string")r=eT(e,n,Fi.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case Jd:return e=Xn(31,n,t,s),e.elementType=Jd,e.lanes=a,e;case ur:return Ca(n.children,s,a,t);case Lv:r=8,s|=24;break;case Yd:return e=Xn(12,n,t,s|2),e.elementType=Yd,e.lanes=a,e;case Zd:return e=Xn(13,n,t,s),e.elementType=Zd,e.lanes=a,e;case Kd:return e=Xn(19,n,t,s),e.elementType=Kd,e.lanes=a,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ns:r=10;break t;case Uv:r=9;break t;case Gp:r=11;break t;case kp:r=14;break t;case Ds:r=16,i=null;break t}r=29,n=Error($(130,e===null?"null":typeof e,"")),i=null}return t=Xn(r,n,t,s),t.elementType=e,t.type=i,t.lanes=a,t}function Ca(e,t,n,i){return e=Xn(7,e,i,t),e.lanes=n,e}function Td(e,t,n){return e=Xn(6,e,null,t),e.lanes=n,e}function py(e){var t=Xn(18,null,null,0);return t.stateNode=e,t}function Ad(e,t,n){return t=Xn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var E_=new WeakMap;function fi(e,t){if(typeof e=="object"&&e!==null){var n=E_.get(e);return n!==void 0?n:(t={value:e,source:t,stack:a_(t)},E_.set(e,t),t)}return{value:e,source:t,stack:a_(t)}}var yr=[],xr=0,uu=null,ul=0,ci=[],ui=0,Js=null,Pi=1,Bi="";function ts(e,t){yr[xr++]=ul,yr[xr++]=uu,uu=e,ul=t}function my(e,t,n){ci[ui++]=Pi,ci[ui++]=Bi,ci[ui++]=Js,Js=e;var i=Pi;e=Bi;var s=32-Zn(i)-1;i&=~(1<<s),n+=1;var a=32-Zn(t)+s;if(30<a){var r=s-s%5;a=(i&(1<<r)-1).toString(32),i>>=r,s-=r,Pi=1<<32-Zn(t)+s|n<<s|i,Bi=a+e}else Pi=1<<a|n<<s|i,Bi=e}function im(e){e.return!==null&&(ts(e,1),my(e,1,0))}function sm(e){for(;e===uu;)uu=yr[--xr],yr[xr]=null,ul=yr[--xr],yr[xr]=null;for(;e===Js;)Js=ci[--ui],ci[ui]=null,Bi=ci[--ui],ci[ui]=null,Pi=ci[--ui],ci[ui]=null}function gy(e,t){ci[ui++]=Pi,ci[ui++]=Bi,ci[ui++]=Js,Pi=t.id,Bi=t.overflow,Js=e}var on=null,Te=null,Qt=!1,Gs=null,di=!1,up=Error($(519));function js(e){var t=Error($(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hl(fi(t,e)),up}function T_(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[rn]=e,t[In]=i,n){case"dialog":Yt("cancel",t),Yt("close",t);break;case"iframe":case"object":case"embed":Yt("load",t);break;case"video":case"audio":for(n=0;n<ml.length;n++)Yt(ml[n],t);break;case"source":Yt("error",t);break;case"img":case"image":case"link":Yt("error",t),Yt("load",t);break;case"details":Yt("toggle",t);break;case"input":Yt("invalid",t),qv(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Yt("invalid",t);break;case"textarea":Yt("invalid",t),Zv(t,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Qx(t.textContent,n)?(i.popover!=null&&(Yt("beforetoggle",t),Yt("toggle",t)),i.onScroll!=null&&Yt("scroll",t),i.onScrollEnd!=null&&Yt("scrollend",t),i.onClick!=null&&(t.onclick=is),t=!0):t=!1,t||js(e,!0)}function A_(e){for(on=e.return;on;)switch(on.tag){case 5:case 31:case 13:di=!1;return;case 27:case 3:di=!0;return;default:on=on.return}}function rr(e){if(e!==on)return!1;if(!Qt)return A_(e),Qt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ip(e.type,e.memoizedProps)),n=!n),n&&Te&&js(e),A_(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Te=pv(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));Te=pv(e)}else t===27?(t=Te,ea(e.type)?(e=Fp,Fp=null,Te=e):Te=t):Te=on?mi(e.stateNode.nextSibling):null;return!0}function La(){Te=on=null,Qt=!1}function wd(){var e=Gs;return e!==null&&(Un===null?Un=e:Un.push.apply(Un,e),Gs=null),e}function hl(e){Gs===null?Gs=[e]:Gs.push(e)}var hp=Vi(null),Ha=null,ss=null;function Ls(e,t,n){Se(hp,t._currentValue),t._currentValue=n}function rs(e){e._currentValue=hp.current,en(hp)}function fp(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function dp(e,t,n,i){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){var r=s.child;a=a.firstContext;t:for(;a!==null;){var o=a;a=s;for(var l=0;l<t.length;l++)if(o.context===t[l]){a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),fp(a.return,n,e),i||(r=null);break t}a=o.next}}else if(s.tag===18){if(r=s.return,r===null)throw Error($(341));r.lanes|=n,a=r.alternate,a!==null&&(a.lanes|=n),fp(r,n,e),r=null}else r=s.child;if(r!==null)r.return=s;else for(r=s;r!==null;){if(r===e){r=null;break}if(s=r.sibling,s!==null){s.return=r.return,r=s;break}r=r.return}s=r}}function Gr(e,t,n,i){e=null;for(var s=t,a=!1;s!==null;){if(!a){if((s.flags&524288)!==0)a=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var r=s.alternate;if(r===null)throw Error($(387));if(r=r.memoizedProps,r!==null){var o=s.type;Jn(s.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(s===iu.current){if(r=s.alternate,r===null)throw Error($(387));r.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(_l):e=[_l])}s=s.return}e!==null&&dp(t,e,n,i),t.flags|=262144}function hu(e){for(e=e.firstContext;e!==null;){if(!Jn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){Ha=e,ss=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return _y(Ha,e)}function Lc(e,t){return Ha===null&&Ua(e),_y(e,t)}function _y(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ss===null){if(e===null)throw Error($(308));ss=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ss=ss.next=t;return n}var $1=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},tE=Ze.unstable_scheduleCallback,eE=Ze.unstable_NormalPriority,ke={$$typeof:ns,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function am(){return{controller:new $1,data:new Map,refCount:0}}function Al(e){e.refCount--,e.refCount===0&&tE(eE,function(){e.controller.abort()})}var Jo=null,pp=0,Lr=0,Tr=null;function nE(e,t){if(Jo===null){var n=Jo=[];pp=0,Lr=Dm(),Tr={status:"pending",value:void 0,then:function(i){n.push(i)}}}return pp++,t.then(w_,w_),t}function w_(){if(--pp===0&&Jo!==null){Tr!==null&&(Tr.status="fulfilled");var e=Jo;Jo=null,Lr=0,Tr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function iE(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(i.status="rejected",i.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),i}var C_=Nt.S;Nt.S=function(e,t){Nx=qn(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&nE(e,t),C_!==null&&C_(e,t)};var Ra=Vi(null);function rm(){var e=Ra.current;return e!==null?e:ge.pooledCache}function Yc(e,t){t===null?Se(Ra,Ra.current):Se(Ra,t.pool)}function vy(){var e=rm();return e===null?null:{parent:ke._currentValue,pool:e}}var kr=Error($(460)),om=Error($(474)),zu=Error($(542)),fu={then:function(){}};function R_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function yy(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(is,is),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,N_(e),e;default:if(typeof t.status=="string")t.then(is,is);else{if(e=ge,e!==null&&100<e.shellSuspendCounter)throw Error($(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=i}},function(i){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,N_(e),e}throw Da=t,kr}}function Ta(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Da=n,kr):n}}var Da=null;function D_(){if(Da===null)throw Error($(459));var e=Da;return Da=null,e}function N_(e){if(e===kr||e===zu)throw Error($(483))}var Ar=null,fl=0;function Uc(e){var t=fl;return fl+=1,Ar===null&&(Ar=[]),yy(Ar,e,t)}function Bo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Oc(e,t){throw t.$$typeof===kb?Error($(525)):(e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xy(e){function t(f,g){if(e){var S=f.deletions;S===null?(f.deletions=[g],f.flags|=16):S.push(g)}}function n(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function i(f){for(var g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function s(f,g){return f=as(f,g),f.index=0,f.sibling=null,f}function a(f,g,S){return f.index=S,e?(S=f.alternate,S!==null?(S=S.index,S<g?(f.flags|=67108866,g):S):(f.flags|=67108866,g)):(f.flags|=1048576,g)}function r(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function o(f,g,S,v){return g===null||g.tag!==6?(g=Td(S,f.mode,v),g.return=f,g):(g=s(g,S),g.return=f,g)}function l(f,g,S,v){var E=S.type;return E===ur?h(f,g,S.props.children,v,S.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ds&&Ta(E)===g.type)?(g=s(g,S.props),Bo(g,S),g.return=f,g):(g=qc(S.type,S.key,S.props,null,f.mode,v),Bo(g,S),g.return=f,g)}function c(f,g,S,v){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Ad(S,f.mode,v),g.return=f,g):(g=s(g,S.children||[]),g.return=f,g)}function h(f,g,S,v,E){return g===null||g.tag!==7?(g=Ca(S,f.mode,v,E),g.return=f,g):(g=s(g,S),g.return=f,g)}function d(f,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Td(""+g,f.mode,S),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ec:return S=qc(g.type,g.key,g.props,null,f.mode,S),Bo(S,g),S.return=f,S;case Go:return g=Ad(g,f.mode,S),g.return=f,g;case Ds:return g=Ta(g),d(f,g,S)}if(ko(g)||Io(g))return g=Ca(g,f.mode,S,null),g.return=f,g;if(typeof g.then=="function")return d(f,Uc(g),S);if(g.$$typeof===ns)return d(f,Lc(f,g),S);Oc(f,g)}return null}function u(f,g,S,v){var E=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return E!==null?null:o(f,g,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ec:return S.key===E?l(f,g,S,v):null;case Go:return S.key===E?c(f,g,S,v):null;case Ds:return S=Ta(S),u(f,g,S,v)}if(ko(S)||Io(S))return E!==null?null:h(f,g,S,v,null);if(typeof S.then=="function")return u(f,g,Uc(S),v);if(S.$$typeof===ns)return u(f,g,Lc(f,S),v);Oc(f,S)}return null}function p(f,g,S,v,E){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return f=f.get(S)||null,o(g,f,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ec:return f=f.get(v.key===null?S:v.key)||null,l(g,f,v,E);case Go:return f=f.get(v.key===null?S:v.key)||null,c(g,f,v,E);case Ds:return v=Ta(v),p(f,g,S,v,E)}if(ko(v)||Io(v))return f=f.get(S)||null,h(g,f,v,E,null);if(typeof v.then=="function")return p(f,g,S,Uc(v),E);if(v.$$typeof===ns)return p(f,g,S,Lc(g,v),E);Oc(g,v)}return null}function _(f,g,S,v){for(var E=null,T=null,C=g,x=g=0,w=null;C!==null&&x<S.length;x++){C.index>x?(w=C,C=null):w=C.sibling;var D=u(f,C,S[x],v);if(D===null){C===null&&(C=w);break}e&&C&&D.alternate===null&&t(f,C),g=a(D,g,x),T===null?E=D:T.sibling=D,T=D,C=w}if(x===S.length)return n(f,C),Qt&&ts(f,x),E;if(C===null){for(;x<S.length;x++)C=d(f,S[x],v),C!==null&&(g=a(C,g,x),T===null?E=C:T.sibling=C,T=C);return Qt&&ts(f,x),E}for(C=i(C);x<S.length;x++)w=p(C,f,x,S[x],v),w!==null&&(e&&w.alternate!==null&&C.delete(w.key===null?x:w.key),g=a(w,g,x),T===null?E=w:T.sibling=w,T=w);return e&&C.forEach(function(L){return t(f,L)}),Qt&&ts(f,x),E}function M(f,g,S,v){if(S==null)throw Error($(151));for(var E=null,T=null,C=g,x=g=0,w=null,D=S.next();C!==null&&!D.done;x++,D=S.next()){C.index>x?(w=C,C=null):w=C.sibling;var L=u(f,C,D.value,v);if(L===null){C===null&&(C=w);break}e&&C&&L.alternate===null&&t(f,C),g=a(L,g,x),T===null?E=L:T.sibling=L,T=L,C=w}if(D.done)return n(f,C),Qt&&ts(f,x),E;if(C===null){for(;!D.done;x++,D=S.next())D=d(f,D.value,v),D!==null&&(g=a(D,g,x),T===null?E=D:T.sibling=D,T=D);return Qt&&ts(f,x),E}for(C=i(C);!D.done;x++,D=S.next())D=p(C,f,x,D.value,v),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?x:D.key),g=a(D,g,x),T===null?E=D:T.sibling=D,T=D);return e&&C.forEach(function(z){return t(f,z)}),Qt&&ts(f,x),E}function m(f,g,S,v){if(typeof S=="object"&&S!==null&&S.type===ur&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ec:t:{for(var E=S.key;g!==null;){if(g.key===E){if(E=S.type,E===ur){if(g.tag===7){n(f,g.sibling),v=s(g,S.props.children),v.return=f,f=v;break t}}else if(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Ds&&Ta(E)===g.type){n(f,g.sibling),v=s(g,S.props),Bo(v,S),v.return=f,f=v;break t}n(f,g);break}else t(f,g);g=g.sibling}S.type===ur?(v=Ca(S.props.children,f.mode,v,S.key),v.return=f,f=v):(v=qc(S.type,S.key,S.props,null,f.mode,v),Bo(v,S),v.return=f,f=v)}return r(f);case Go:t:{for(E=S.key;g!==null;){if(g.key===E)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){n(f,g.sibling),v=s(g,S.children||[]),v.return=f,f=v;break t}else{n(f,g);break}else t(f,g);g=g.sibling}v=Ad(S,f.mode,v),v.return=f,f=v}return r(f);case Ds:return S=Ta(S),m(f,g,S,v)}if(ko(S))return _(f,g,S,v);if(Io(S)){if(E=Io(S),typeof E!="function")throw Error($(150));return S=E.call(S),M(f,g,S,v)}if(typeof S.then=="function")return m(f,g,Uc(S),v);if(S.$$typeof===ns)return m(f,g,Lc(f,S),v);Oc(f,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(n(f,g.sibling),v=s(g,S),v.return=f,f=v):(n(f,g),v=Td(S,f.mode,v),v.return=f,f=v),r(f)):n(f,g)}return function(f,g,S,v){try{fl=0;var E=m(f,g,S,v);return Ar=null,E}catch(C){if(C===kr||C===zu)throw C;var T=Xn(29,C,null,f.mode);return T.lanes=v,T.return=f,T}finally{}}}var Oa=xy(!0),Sy=xy(!1),Ns=!1;function lm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ks(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xs(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ie&2)!==0){var s=i.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),i.pending=t,t=cu(e),fy(e,null,n),t}return Bu(e,i,t,n),cu(e)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Fv(e,n)}}function Cd(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?s=a=r:a=a.next=r,n=n.next}while(n!==null);a===null?s=a=t:a=a.next=t}else s=a=t;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:a,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var gp=!1;function Qo(){if(gp){var e=Tr;if(e!==null)throw e}}function $o(e,t,n,i){gp=!1;var s=e.updateQueue;Ns=!1;var a=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var l=o,c=l.next;l.next=null,r===null?a=c:r.next=c,r=l;var h=e.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==r&&(o===null?h.firstBaseUpdate=c:o.next=c,h.lastBaseUpdate=l))}if(a!==null){var d=s.baseState;r=0,h=c=l=null,o=a;do{var u=o.lane&-536870913,p=u!==o.lane;if(p?(Jt&u)===u:(i&u)===u){u!==0&&u===Lr&&(gp=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var _=e,M=o;u=t;var m=n;switch(M.tag){case 1:if(_=M.payload,typeof _=="function"){d=_.call(m,d,u);break t}d=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,u=typeof _=="function"?_.call(m,d,u):_,u==null)break t;d=Ae({},d,u);break t;case 2:Ns=!0}}u=o.callback,u!==null&&(e.flags|=64,p&&(e.flags|=8192),p=s.callbacks,p===null?s.callbacks=[u]:p.push(u))}else p={lane:u,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(c=h=p,l=d):h=h.next=p,r|=u;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;p=o,o=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);h===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=h,a===null&&(s.shared.lanes=0),$s|=r,e.lanes=r,e.memoizedState=d}}function My(e,t){if(typeof e!="function")throw Error($(191,e));e.call(t)}function by(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)My(n[e],t)}var Ur=Vi(null),du=Vi(0);function L_(e,t){e=fs,Se(du,e),Se(Ur,t),fs=e|t.baseLanes}function _p(){Se(du,fs),Se(Ur,Ur.current)}function cm(){fs=du.current,en(Ur),en(du)}var jn=Vi(null),pi=null;function Us(e){var t=e.alternate;Se(Be,Be.current&1),Se(jn,e),pi===null&&(t===null||Ur.current!==null||t.memoizedState!==null)&&(pi=e)}function vp(e){Se(Be,Be.current),Se(jn,e),pi===null&&(pi=e)}function Ey(e){e.tag===22?(Se(Be,Be.current),Se(jn,e),pi===null&&(pi=e)):Os(e)}function Os(){Se(Be,Be.current),Se(jn,jn.current)}function kn(e){en(jn),pi===e&&(pi=null),en(Be)}var Be=Vi(0);function pu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bp(n)||zp(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var cs=0,zt=null,pe=null,He=null,mu=!1,wr=!1,Ia=!1,gu=0,dl=0,Cr=null,sE=0;function Oe(){throw Error($(321))}function um(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Jn(e[n],t[n]))return!1;return!0}function hm(e,t,n,i,s,a){return cs=a,zt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Nt.H=e===null||e.memoizedState===null?ex:Mm,Ia=!1,a=n(i,s),Ia=!1,wr&&(a=Ay(t,n,i,s)),Ty(e),a}function Ty(e){Nt.H=pl;var t=pe!==null&&pe.next!==null;if(cs=0,He=pe=zt=null,mu=!1,dl=0,Cr=null,t)throw Error($(300));e===null||Xe||(e=e.dependencies,e!==null&&hu(e)&&(Xe=!0))}function Ay(e,t,n,i){zt=e;var s=0;do{if(wr&&(Cr=null),dl=0,wr=!1,25<=s)throw Error($(301));if(s+=1,He=pe=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Nt.H=nx,a=t(n,i)}while(wr);return a}function aE(){var e=Nt.H,t=e.useState()[0];return t=typeof t.then=="function"?wl(t):t,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(zt.flags|=1024),t}function fm(){var e=gu!==0;return gu=0,e}function dm(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function pm(e){if(mu){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}mu=!1}cs=0,He=pe=zt=null,wr=!1,dl=gu=0,Cr=null}function En(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return He===null?zt.memoizedState=He=e:He=He.next=e,He}function ze(){if(pe===null){var e=zt.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=He===null?zt.memoizedState:He.next;if(t!==null)He=t,pe=e;else{if(e===null)throw zt.alternate===null?Error($(467)):Error($(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},He===null?zt.memoizedState=He=e:He=He.next=e}return He}function Fu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wl(e){var t=dl;return dl+=1,Cr===null&&(Cr=[]),e=yy(Cr,e,t),t=zt,(He===null?t.memoizedState:He.next)===null&&(t=t.alternate,Nt.H=t===null||t.memoizedState===null?ex:Mm),e}function Vu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wl(e);if(e.$$typeof===ns)return ln(e)}throw Error($(438,String(e)))}function mm(e){var t=null,n=zt.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=zt.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Fu(),zt.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=Xb;return t.index++,n}function us(e,t){return typeof t=="function"?t(e):t}function Zc(e){var t=ze();return gm(t,pe,e)}function gm(e,t,n){var i=e.queue;if(i===null)throw Error($(311));i.lastRenderedReducer=n;var s=e.baseQueue,a=i.pending;if(a!==null){if(s!==null){var r=s.next;s.next=a.next,a.next=r}t.baseQueue=s=a,i.pending=null}if(a=e.baseState,s===null)e.memoizedState=a;else{t=s.next;var o=r=null,l=null,c=t,h=!1;do{var d=c.lane&-536870913;if(d!==c.lane?(Jt&d)===d:(cs&d)===d){var u=c.revertLane;if(u===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),d===Lr&&(h=!0);else if((cs&u)===u){c=c.next,u===Lr&&(h=!0);continue}else d={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=d,r=a):l=l.next=d,zt.lanes|=u,$s|=u;d=c.action,Ia&&n(a,d),a=c.hasEagerState?c.eagerState:n(a,d)}else u={lane:d,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},l===null?(o=l=u,r=a):l=l.next=u,zt.lanes|=d,$s|=d;c=c.next}while(c!==null&&c!==t);if(l===null?r=a:l.next=o,!Jn(a,e.memoizedState)&&(Xe=!0,h&&(n=Tr,n!==null)))throw n;e.memoizedState=a,e.baseState=r,e.baseQueue=l,i.lastRenderedState=a}return s===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Rd(e){var t=ze(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var i=n.dispatch,s=n.pending,a=t.memoizedState;if(s!==null){n.pending=null;var r=s=s.next;do a=e(a,r.action),r=r.next;while(r!==s);Jn(a,t.memoizedState)||(Xe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,i]}function wy(e,t,n){var i=zt,s=ze(),a=Qt;if(a){if(n===void 0)throw Error($(407));n=n()}else n=t();var r=!Jn((pe||s).memoizedState,n);if(r&&(s.memoizedState=n,Xe=!0),s=s.queue,_m(Dy.bind(null,i,s,e),[e]),s.getSnapshot!==t||r||He!==null&&He.memoizedState.tag&1){if(i.flags|=2048,Or(9,{destroy:void 0},Ry.bind(null,i,s,n,t),null),ge===null)throw Error($(349));a||(cs&127)!==0||Cy(i,t,n)}return n}function Cy(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=zt.updateQueue,t===null?(t=Fu(),zt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ry(e,t,n,i){t.value=n,t.getSnapshot=i,Ny(t)&&Ly(e)}function Dy(e,t,n){return n(function(){Ny(t)&&Ly(e)})}function Ny(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Jn(e,n)}catch{return!0}}function Ly(e){var t=Va(e,2);t!==null&&On(t,e,2)}function yp(e){var t=En();if(typeof e=="function"){var n=e;if(e=n(),Ia){Ps(!0);try{n()}finally{Ps(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:e},t}function Uy(e,t,n,i){return e.baseState=n,gm(e,pe,typeof i=="function"?i:us)}function rE(e,t,n,i,s){if(Gu(e))throw Error($(485));if(e=t.action,e!==null){var a={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){a.listeners.push(r)}};Nt.T!==null?n(!0):a.isTransition=!1,i(a),n=t.pending,n===null?(a.next=t.pending=a,Oy(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Oy(e,t){var n=t.action,i=t.payload,s=e.state;if(t.isTransition){var a=Nt.T,r={};Nt.T=r;try{var o=n(s,i),l=Nt.S;l!==null&&l(r,o),U_(e,t,o)}catch(c){xp(e,t,c)}finally{a!==null&&r.types!==null&&(a.types=r.types),Nt.T=a}}else try{a=n(s,i),U_(e,t,a)}catch(c){xp(e,t,c)}}function U_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){O_(e,t,i)},function(i){return xp(e,t,i)}):O_(e,t,n)}function O_(e,t,n){t.status="fulfilled",t.value=n,Iy(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Oy(e,n)))}function xp(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Iy(t),t=t.next;while(t!==i)}e.action=null}function Iy(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Py(e,t){return t}function I_(e,t){if(Qt){var n=ge.formState;if(n!==null){t:{var i=zt;if(Qt){if(Te){e:{for(var s=Te,a=di;s.nodeType!==8;){if(!a){s=null;break e}if(s=mi(s.nextSibling),s===null){s=null;break e}}a=s.data,s=a==="F!"||a==="F"?s:null}if(s){Te=mi(s.nextSibling),i=s.data==="F!";break t}}js(i)}i=!1}i&&(t=n[0])}}return n=En(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Py,lastRenderedState:t},n.queue=i,n=Qy.bind(null,zt,i),i.dispatch=n,i=yp(!1),a=Sm.bind(null,zt,!1,i.queue),i=En(),s={state:t,dispatch:null,action:e,pending:null},i.queue=s,n=rE.bind(null,zt,s,a,n),s.dispatch=n,i.memoizedState=e,[t,n,!1]}function P_(e){var t=ze();return By(t,pe,e)}function By(e,t,n){if(t=gm(e,t,Py)[0],e=Zc(us)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=wl(t)}catch(r){throw r===kr?zu:r}else i=t;t=ze();var s=t.queue,a=s.dispatch;return n!==t.memoizedState&&(zt.flags|=2048,Or(9,{destroy:void 0},oE.bind(null,s,n),null)),[i,a,e]}function oE(e,t){e.action=t}function B_(e){var t=ze(),n=pe;if(n!==null)return By(t,n,e);ze(),t=t.memoizedState,n=ze();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Or(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=zt.updateQueue,t===null&&(t=Fu(),zt.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function zy(){return ze().memoizedState}function Kc(e,t,n,i){var s=En();zt.flags|=e,s.memoizedState=Or(1|t,{destroy:void 0},n,i===void 0?null:i)}function Hu(e,t,n,i){var s=ze();i=i===void 0?null:i;var a=s.memoizedState.inst;pe!==null&&i!==null&&um(i,pe.memoizedState.deps)?s.memoizedState=Or(t,a,n,i):(zt.flags|=e,s.memoizedState=Or(1|t,a,n,i))}function z_(e,t){Kc(8390656,8,e,t)}function _m(e,t){Hu(2048,8,e,t)}function lE(e){zt.flags|=4;var t=zt.updateQueue;if(t===null)t=Fu(),zt.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Fy(e){var t=ze().memoizedState;return lE({ref:t,nextImpl:e}),function(){if((ie&2)!==0)throw Error($(440));return t.impl.apply(void 0,arguments)}}function Vy(e,t){return Hu(4,2,e,t)}function Hy(e,t){return Hu(4,4,e,t)}function Gy(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ky(e,t,n){n=n!=null?n.concat([e]):null,Hu(4,4,Gy.bind(null,t,e),n)}function vm(){}function Xy(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&um(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Wy(e,t){var n=ze();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&um(t,i[1]))return i[0];if(i=e(),Ia){Ps(!0);try{e()}finally{Ps(!1)}}return n.memoizedState=[i,t],i}function ym(e,t,n){return n===void 0||(cs&1073741824)!==0&&(Jt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Ux(),zt.lanes|=e,$s|=e,n)}function qy(e,t,n,i){return Jn(n,t)?n:Ur.current!==null?(e=ym(e,n,i),Jn(e,t)||(Xe=!0),e):(cs&42)===0||(cs&1073741824)!==0&&(Jt&261930)===0?(Xe=!0,e.memoizedState=n):(e=Ux(),zt.lanes|=e,$s|=e,t)}function Yy(e,t,n,i,s){var a=se.p;se.p=a!==0&&8>a?a:8;var r=Nt.T,o={};Nt.T=o,Sm(e,!1,t,n);try{var l=s(),c=Nt.S;if(c!==null&&c(o,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=iE(l,i);tl(e,t,h,Kn(e))}else tl(e,t,i,Kn(e))}catch(d){tl(e,t,{then:function(){},status:"rejected",reason:d},Kn())}finally{se.p=a,r!==null&&o.types!==null&&(r.types=o.types),Nt.T=r}}function cE(){}function Sp(e,t,n,i){if(e.tag!==5)throw Error($(476));var s=Zy(e).queue;Yy(e,s,t,wa,n===null?cE:function(){return Ky(e),n(i)})}function Zy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:wa,baseState:wa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:wa},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:us,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ky(e){var t=Zy(e);t.next===null&&(t=e.alternate.memoizedState),tl(e,t.next.queue,{},Kn())}function xm(){return ln(_l)}function Jy(){return ze().memoizedState}function jy(){return ze().memoizedState}function uE(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Kn();e=ks(n);var i=Xs(t,e,n);i!==null&&(On(i,t,n),jo(i,t,n)),t={cache:am()},e.payload=t;return}t=t.return}}function hE(e,t,n){var i=Kn();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Gu(e)?$y(t,n):(n=em(e,t,n,i),n!==null&&(On(n,e,i),tx(n,t,i)))}function Qy(e,t,n){var i=Kn();tl(e,t,n,i)}function tl(e,t,n,i){var s={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gu(e))$y(t,s);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var r=t.lastRenderedState,o=a(r,n);if(s.hasEagerState=!0,s.eagerState=o,Jn(o,r))return Bu(e,t,s,0),ge===null&&Pu(),!1}catch{}finally{}if(n=em(e,t,s,i),n!==null)return On(n,e,i),tx(n,t,i),!0}return!1}function Sm(e,t,n,i){if(i={lane:2,revertLane:Dm(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Gu(e)){if(t)throw Error($(479))}else t=em(e,n,i,2),t!==null&&On(t,e,2)}function Gu(e){var t=e.alternate;return e===zt||t!==null&&t===zt}function $y(e,t){wr=mu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function tx(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,Fv(e,n)}}var pl={readContext:ln,use:Vu,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};pl.useEffectEvent=Oe;var ex={readContext:ln,use:Vu,useCallback:function(e,t){return En().memoizedState=[e,t===void 0?null:t],e},useContext:ln,useEffect:z_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Kc(4194308,4,Gy.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Kc(4194308,4,e,t)},useInsertionEffect:function(e,t){Kc(4,2,e,t)},useMemo:function(e,t){var n=En();t=t===void 0?null:t;var i=e();if(Ia){Ps(!0);try{e()}finally{Ps(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=En();if(n!==void 0){var s=n(t);if(Ia){Ps(!0);try{n(t)}finally{Ps(!1)}}}else s=t;return i.memoizedState=i.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},i.queue=e,e=e.dispatch=hE.bind(null,zt,e),[i.memoizedState,e]},useRef:function(e){var t=En();return e={current:e},t.memoizedState=e},useState:function(e){e=yp(e);var t=e.queue,n=Qy.bind(null,zt,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:vm,useDeferredValue:function(e,t){var n=En();return ym(n,e,t)},useTransition:function(){var e=yp(!1);return e=Yy.bind(null,zt,e.queue,!0,!1),En().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=zt,s=En();if(Qt){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),ge===null)throw Error($(349));(Jt&127)!==0||Cy(i,t,n)}s.memoizedState=n;var a={value:n,getSnapshot:t};return s.queue=a,z_(Dy.bind(null,i,a,e),[e]),i.flags|=2048,Or(9,{destroy:void 0},Ry.bind(null,i,a,n,t),null),n},useId:function(){var e=En(),t=ge.identifierPrefix;if(Qt){var n=Bi,i=Pi;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,t="_"+t+"R_"+n,n=gu++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=sE++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:xm,useFormState:I_,useActionState:I_,useOptimistic:function(e){var t=En();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Sm.bind(null,zt,!0,n),n.dispatch=t,[e,t]},useMemoCache:mm,useCacheRefresh:function(){return En().memoizedState=uE.bind(null,zt)},useEffectEvent:function(e){var t=En(),n={impl:e};return t.memoizedState=n,function(){if((ie&2)!==0)throw Error($(440));return n.impl.apply(void 0,arguments)}}},Mm={readContext:ln,use:Vu,useCallback:Xy,useContext:ln,useEffect:_m,useImperativeHandle:ky,useInsertionEffect:Vy,useLayoutEffect:Hy,useMemo:Wy,useReducer:Zc,useRef:zy,useState:function(){return Zc(us)},useDebugValue:vm,useDeferredValue:function(e,t){var n=ze();return qy(n,pe.memoizedState,e,t)},useTransition:function(){var e=Zc(us)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:wy,useId:Jy,useHostTransitionStatus:xm,useFormState:P_,useActionState:P_,useOptimistic:function(e,t){var n=ze();return Uy(n,pe,e,t)},useMemoCache:mm,useCacheRefresh:jy};Mm.useEffectEvent=Fy;var nx={readContext:ln,use:Vu,useCallback:Xy,useContext:ln,useEffect:_m,useImperativeHandle:ky,useInsertionEffect:Vy,useLayoutEffect:Hy,useMemo:Wy,useReducer:Rd,useRef:zy,useState:function(){return Rd(us)},useDebugValue:vm,useDeferredValue:function(e,t){var n=ze();return pe===null?ym(n,e,t):qy(n,pe.memoizedState,e,t)},useTransition:function(){var e=Rd(us)[0],t=ze().memoizedState;return[typeof e=="boolean"?e:wl(e),t]},useSyncExternalStore:wy,useId:Jy,useHostTransitionStatus:xm,useFormState:B_,useActionState:B_,useOptimistic:function(e,t){var n=ze();return pe!==null?Uy(n,pe,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:mm,useCacheRefresh:jy};nx.useEffectEvent=Fy;function Dd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mp={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Kn(),s=ks(i);s.payload=t,n!=null&&(s.callback=n),t=Xs(e,s,i),t!==null&&(On(t,e,i),jo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Kn(),s=ks(i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Xs(e,s,i),t!==null&&(On(t,e,i),jo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Kn(),i=ks(n);i.tag=2,t!=null&&(i.callback=t),t=Xs(e,i,n),t!==null&&(On(t,e,n),jo(t,e,n))}};function F_(e,t,n,i,s,a,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,a,r):t.prototype&&t.prototype.isPureReactComponent?!cl(n,i)||!cl(s,a):!0}function V_(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Mp.enqueueReplaceState(t,t.state,null)}function Pa(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=Ae({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function ix(e){lu(e)}function sx(e){console.error(e)}function ax(e){lu(e)}function _u(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function H_(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function bp(e,t,n){return n=ks(n),n.tag=3,n.payload={element:null},n.callback=function(){_u(e,t)},n}function rx(e){return e=ks(e),e.tag=3,e}function ox(e,t,n,i){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var a=i.value;e.payload=function(){return s(a)},e.callback=function(){H_(t,n,i)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){H_(t,n,i),typeof s!="function"&&(Ws===null?Ws=new Set([this]):Ws.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function fE(e,t,n,i,s){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&Gr(t,n,s,!0),n=jn.current,n!==null){switch(n.tag){case 31:case 13:return pi===null?Mu():n.alternate===null&&Ie===0&&(Ie=3),n.flags&=-257,n.flags|=65536,n.lanes=s,i===fu?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Hd(e,i,s)),!1;case 22:return n.flags|=65536,i===fu?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Hd(e,i,s)),!1}throw Error($(435,n.tag))}return Hd(e,i,s),Mu(),!1}if(Qt)return t=jn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,i!==up&&(e=Error($(422),{cause:i}),hl(fi(e,n)))):(i!==up&&(t=Error($(423),{cause:i}),hl(fi(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,i=fi(i,n),s=bp(e.stateNode,i,s),Cd(e,s),Ie!==4&&(Ie=2)),!1;var a=Error($(520),{cause:i});if(a=fi(a,n),il===null?il=[a]:il.push(a),Ie!==4&&(Ie=2),t===null)return!0;i=fi(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=bp(n.stateNode,i,e),Cd(n,e),!1;case 1:if(t=n.type,a=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||a!==null&&typeof a.componentDidCatch=="function"&&(Ws===null||!Ws.has(a))))return n.flags|=65536,s&=-s,n.lanes|=s,s=rx(s),ox(s,e,n,i),Cd(n,s),!1}n=n.return}while(n!==null);return!1}var bm=Error($(461)),Xe=!1;function an(e,t,n,i){t.child=e===null?Sy(t,null,n,i):Oa(t,e.child,n,i)}function G_(e,t,n,i,s){n=n.render;var a=t.ref;if("ref"in i){var r={};for(var o in i)o!=="ref"&&(r[o]=i[o])}else r=i;return Ua(t),i=hm(e,t,n,r,a,s),o=fm(),e!==null&&!Xe?(dm(e,t,s),hs(e,t,s)):(Qt&&o&&im(t),t.flags|=1,an(e,t,i,s),t.child)}function k_(e,t,n,i,s){if(e===null){var a=n.type;return typeof a=="function"&&!nm(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lx(e,t,a,i,s)):(e=qc(n.type,null,i,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Em(e,s)){var r=a.memoizedProps;if(n=n.compare,n=n!==null?n:cl,n(r,i)&&e.ref===t.ref)return hs(e,t,s)}return t.flags|=1,e=as(a,i),e.ref=t.ref,e.return=t,t.child=e}function lx(e,t,n,i,s){if(e!==null){var a=e.memoizedProps;if(cl(a,i)&&e.ref===t.ref)if(Xe=!1,t.pendingProps=i=a,Em(e,s))(e.flags&131072)!==0&&(Xe=!0);else return t.lanes=e.lanes,hs(e,t,s)}return Ep(e,t,n,i,s)}function cx(e,t,n,i){var s=i.children,a=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(a=a!==null?a.baseLanes|n:n,e!==null){for(i=t.child=e.child,s=0;i!==null;)s=s|i.lanes|i.childLanes,i=i.sibling;i=s&~a}else i=0,t.child=null;return X_(e,t,a,n,i)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Yc(t,a!==null?a.cachePool:null),a!==null?L_(t,a):_p(),Ey(t);else return i=t.lanes=536870912,X_(e,t,a!==null?a.baseLanes|n:n,n,i)}else a!==null?(Yc(t,a.cachePool),L_(t,a),Os(t),t.memoizedState=null):(e!==null&&Yc(t,null),_p(),Os(t));return an(e,t,s,n),t.child}function Wo(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function X_(e,t,n,i,s){var a=rm();return a=a===null?null:{parent:ke._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Yc(t,null),_p(),Ey(t),e!==null&&Gr(e,t,i,!0),t.childLanes=s,null}function Jc(e,t){return t=vu({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function W_(e,t,n){return Oa(t,e.child,null,n),e=Jc(t,t.pendingProps),e.flags|=2,kn(t),t.memoizedState=null,e}function dE(e,t,n){var i=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Qt){if(i.mode==="hidden")return e=Jc(t,i),t.lanes=536870912,Wo(null,e);if(vp(t),(e=Te)?(e=eS(e,di),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Js!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},n=py(e),n.return=t,t.child=n,on=t,Te=null)):e=null,e===null)throw js(t);return t.lanes=536870912,null}return Jc(t,i)}var a=e.memoizedState;if(a!==null){var r=a.dehydrated;if(vp(t),s)if(t.flags&256)t.flags&=-257,t=W_(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error($(558));else if(Xe||Gr(e,t,n,!1),s=(n&e.childLanes)!==0,Xe||s){if(i=ge,i!==null&&(r=Vv(i,n),r!==0&&r!==a.retryLane))throw a.retryLane=r,Va(e,r),On(i,e,r),bm;Mu(),t=W_(e,t,n)}else e=a.treeContext,Te=mi(r.nextSibling),on=t,Qt=!0,Gs=null,di=!1,e!==null&&gy(t,e),t=Jc(t,i),t.flags|=4096;return t}return e=as(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function jc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error($(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ep(e,t,n,i,s){return Ua(t),n=hm(e,t,n,i,void 0,s),i=fm(),e!==null&&!Xe?(dm(e,t,s),hs(e,t,s)):(Qt&&i&&im(t),t.flags|=1,an(e,t,n,s),t.child)}function q_(e,t,n,i,s,a){return Ua(t),t.updateQueue=null,n=Ay(t,i,n,s),Ty(e),i=fm(),e!==null&&!Xe?(dm(e,t,a),hs(e,t,a)):(Qt&&i&&im(t),t.flags|=1,an(e,t,n,a),t.child)}function Y_(e,t,n,i,s){if(Ua(t),t.stateNode===null){var a=vr,r=n.contextType;typeof r=="object"&&r!==null&&(a=ln(r)),a=new n(i,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Mp,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=i,a.state=t.memoizedState,a.refs={},lm(t),r=n.contextType,a.context=typeof r=="object"&&r!==null?ln(r):vr,a.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Dd(t,n,r,i),a.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&Mp.enqueueReplaceState(a,a.state,null),$o(t,i,a,s),Qo(),a.state=t.memoizedState),typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){a=t.stateNode;var o=t.memoizedProps,l=Pa(n,o);a.props=l;var c=a.context,h=n.contextType;r=vr,typeof h=="object"&&h!==null&&(r=ln(h));var d=n.getDerivedStateFromProps;h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o||c!==r)&&V_(t,a,i,r),Ns=!1;var u=t.memoizedState;a.state=u,$o(t,i,a,s),Qo(),c=t.memoizedState,o||u!==c||Ns?(typeof d=="function"&&(Dd(t,n,d,i),c=t.memoizedState),(l=Ns||F_(t,n,l,i,u,c,r))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=c),a.props=i,a.state=c,a.context=r,i=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{a=t.stateNode,mp(e,t),r=t.memoizedProps,h=Pa(n,r),a.props=h,d=t.pendingProps,u=a.context,c=n.contextType,l=vr,typeof c=="object"&&c!==null&&(l=ln(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(r!==d||u!==l)&&V_(t,a,i,l),Ns=!1,u=t.memoizedState,a.state=u,$o(t,i,a,s),Qo();var p=t.memoizedState;r!==d||u!==p||Ns||e!==null&&e.dependencies!==null&&hu(e.dependencies)?(typeof o=="function"&&(Dd(t,n,o,i),p=t.memoizedState),(h=Ns||F_(t,n,h,i,u,p,l)||e!==null&&e.dependencies!==null&&hu(e.dependencies))?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,p,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,p,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=p),a.props=i,a.state=p,a.context=l,i=h):(typeof a.componentDidUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),i=!1)}return a=i,jc(e,t),i=(t.flags&128)!==0,a||i?(a=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:a.render(),t.flags|=1,e!==null&&i?(t.child=Oa(t,e.child,null,s),t.child=Oa(t,null,n,s)):an(e,t,n,s),t.memoizedState=a.state,e=t.child):e=hs(e,t,s),e}function Z_(e,t,n,i){return La(),t.flags|=256,an(e,t,n,i),t.child}var Nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ld(e){return{baseLanes:e,cachePool:vy()}}function Ud(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Wn),e}function ux(e,t,n){var i=t.pendingProps,s=!1,a=(t.flags&128)!==0,r;if((r=a)||(r=e!==null&&e.memoizedState===null?!1:(Be.current&2)!==0),r&&(s=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Qt){if(s?Us(t):Os(t),(e=Te)?(e=eS(e,di),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Js!==null?{id:Pi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},n=py(e),n.return=t,t.child=n,on=t,Te=null)):e=null,e===null)throw js(t);return zp(e)?t.lanes=32:t.lanes=536870912,null}var o=i.children;return i=i.fallback,s?(Os(t),s=t.mode,o=vu({mode:"hidden",children:o},s),i=Ca(i,s,n,null),o.return=t,i.return=t,o.sibling=i,t.child=o,i=t.child,i.memoizedState=Ld(n),i.childLanes=Ud(e,r,n),t.memoizedState=Nd,Wo(null,i)):(Us(t),Tp(t,o))}var l=e.memoizedState;if(l!==null&&(o=l.dehydrated,o!==null)){if(a)t.flags&256?(Us(t),t.flags&=-257,t=Od(e,t,n)):t.memoizedState!==null?(Os(t),t.child=e.child,t.flags|=128,t=null):(Os(t),o=i.fallback,s=t.mode,i=vu({mode:"visible",children:i.children},s),o=Ca(o,s,n,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,Oa(t,e.child,null,n),i=t.child,i.memoizedState=Ld(n),i.childLanes=Ud(e,r,n),t.memoizedState=Nd,t=Wo(null,i));else if(Us(t),zp(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var c=r.dgst;r=c,i=Error($(419)),i.stack="",i.digest=r,hl({value:i,source:null,stack:null}),t=Od(e,t,n)}else if(Xe||Gr(e,t,n,!1),r=(n&e.childLanes)!==0,Xe||r){if(r=ge,r!==null&&(i=Vv(r,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,Va(e,i),On(r,e,i),bm;Bp(o)||Mu(),t=Od(e,t,n)}else Bp(o)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Te=mi(o.nextSibling),on=t,Qt=!0,Gs=null,di=!1,e!==null&&gy(t,e),t=Tp(t,i.children),t.flags|=4096);return t}return s?(Os(t),o=i.fallback,s=t.mode,l=e.child,c=l.sibling,i=as(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,c!==null?o=as(c,o):(o=Ca(o,s,n,null),o.flags|=2),o.return=t,i.return=t,i.sibling=o,t.child=i,Wo(null,i),i=t.child,o=e.child.memoizedState,o===null?o=Ld(n):(s=o.cachePool,s!==null?(l=ke._currentValue,s=s.parent!==l?{parent:l,pool:l}:s):s=vy(),o={baseLanes:o.baseLanes|n,cachePool:s}),i.memoizedState=o,i.childLanes=Ud(e,r,n),t.memoizedState=Nd,Wo(e.child,i)):(Us(t),n=e.child,e=n.sibling,n=as(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Tp(e,t){return t=vu({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function vu(e,t){return e=Xn(22,e,null,t),e.lanes=0,e}function Od(e,t,n){return Oa(t,e.child,null,n),e=Tp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K_(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),fp(e.return,t,n)}function Id(e,t,n,i,s,a){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s,treeForkCount:a}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=i,r.tail=n,r.tailMode=s,r.treeForkCount=a)}function hx(e,t,n){var i=t.pendingProps,s=i.revealOrder,a=i.tail;i=i.children;var r=Be.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,Se(Be,r),an(e,t,i,n),i=Qt?ul:0,!o&&e!==null&&(e.flags&128)!==0)t:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&K_(e,n,t);else if(e.tag===19)K_(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&pu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Id(t,!1,s,n,a,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&pu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Id(t,!0,n,null,a,i);break;case"together":Id(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function hs(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),$s|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Gr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=as(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=as(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Em(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&hu(e)))}function pE(e,t,n){switch(t.tag){case 3:su(t,t.stateNode.containerInfo),Ls(t,ke,e.memoizedState.cache),La();break;case 27:case 5:$d(t);break;case 4:su(t,t.stateNode.containerInfo);break;case 10:Ls(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,vp(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(Us(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ux(e,t,n):(Us(t),e=hs(e,t,n),e!==null?e.sibling:null);Us(t);break;case 19:var s=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(Gr(e,t,n,!1),i=(n&t.childLanes)!==0),s){if(i)return hx(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Se(Be,Be.current),i)break;return null;case 22:return t.lanes=0,cx(e,t,n,t.pendingProps);case 24:Ls(t,ke,e.memoizedState.cache)}return hs(e,t,n)}function fx(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xe=!0;else{if(!Em(e,n)&&(t.flags&128)===0)return Xe=!1,pE(e,t,n);Xe=(e.flags&131072)!==0}else Xe=!1,Qt&&(t.flags&1048576)!==0&&my(t,ul,t.index);switch(t.lanes=0,t.tag){case 16:t:{var i=t.pendingProps;if(e=Ta(t.elementType),t.type=e,typeof e=="function")nm(e)?(i=Pa(e,i),t.tag=1,t=Y_(null,t,e,i,n)):(t.tag=0,t=Ep(null,t,e,i,n));else{if(e!=null){var s=e.$$typeof;if(s===Gp){t.tag=11,t=G_(null,t,e,i,n);break t}else if(s===kp){t.tag=14,t=k_(null,t,e,i,n);break t}}throw t=jd(e)||e,Error($(306,t,""))}}return t;case 0:return Ep(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,s=Pa(i,t.pendingProps),Y_(e,t,i,s,n);case 3:t:{if(su(t,t.stateNode.containerInfo),e===null)throw Error($(387));i=t.pendingProps;var a=t.memoizedState;s=a.element,mp(e,t),$o(t,i,null,n);var r=t.memoizedState;if(i=r.cache,Ls(t,ke,i),i!==a.cache&&dp(t,[ke],n,!0),Qo(),i=r.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Z_(e,t,i,n);break t}else if(i!==s){s=fi(Error($(424)),t),hl(s),t=Z_(e,t,i,n);break t}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Te=mi(e.firstChild),on=t,Qt=!0,Gs=null,di=!0,n=Sy(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(La(),i===s){t=hs(e,t,n);break t}an(e,t,i,n)}t=t.child}return t;case 26:return jc(e,t),e===null?(n=_v(t.type,null,t.pendingProps,null))?t.memoizedState=n:Qt||(n=t.type,e=t.pendingProps,i=Au(Hs.current).createElement(n),i[rn]=t,i[In]=e,cn(i,n,e),tn(i),t.stateNode=i):t.memoizedState=_v(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return $d(t),e===null&&Qt&&(i=t.stateNode=nS(t.type,t.pendingProps,Hs.current),on=t,di=!0,s=Te,ea(t.type)?(Fp=s,Te=mi(i.firstChild)):Te=s),an(e,t,t.pendingProps.children,n),jc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Qt&&((s=i=Te)&&(i=GE(i,t.type,t.pendingProps,di),i!==null?(t.stateNode=i,on=t,Te=mi(i.firstChild),di=!1,s=!0):s=!1),s||js(t)),$d(t),s=t.type,a=t.pendingProps,r=e!==null?e.memoizedProps:null,i=a.children,Ip(s,a)?i=null:r!==null&&Ip(s,r)&&(t.flags|=32),t.memoizedState!==null&&(s=hm(e,t,aE,null,null,n),_l._currentValue=s),jc(e,t),an(e,t,i,n),t.child;case 6:return e===null&&Qt&&((e=n=Te)&&(n=kE(n,t.pendingProps,di),n!==null?(t.stateNode=n,on=t,Te=null,e=!0):e=!1),e||js(t)),null;case 13:return ux(e,t,n);case 4:return su(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Oa(t,null,i,n):an(e,t,i,n),t.child;case 11:return G_(e,t,t.type,t.pendingProps,n);case 7:return an(e,t,t.pendingProps,n),t.child;case 8:return an(e,t,t.pendingProps.children,n),t.child;case 12:return an(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Ls(t,t.type,i.value),an(e,t,i.children,n),t.child;case 9:return s=t.type._context,i=t.pendingProps.children,Ua(t),s=ln(s),i=i(s),t.flags|=1,an(e,t,i,n),t.child;case 14:return k_(e,t,t.type,t.pendingProps,n);case 15:return lx(e,t,t.type,t.pendingProps,n);case 19:return hx(e,t,n);case 31:return dE(e,t,n);case 22:return cx(e,t,n,t.pendingProps);case 24:return Ua(t),i=ln(ke),e===null?(s=rm(),s===null&&(s=ge,a=am(),s.pooledCache=a,a.refCount++,a!==null&&(s.pooledCacheLanes|=n),s=a),t.memoizedState={parent:i,cache:s},lm(t),Ls(t,ke,s)):((e.lanes&n)!==0&&(mp(e,t),$o(t,null,null,n),Qo()),s=e.memoizedState,a=t.memoizedState,s.parent!==i?(s={parent:i,cache:i},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ls(t,ke,i)):(i=a.cache,Ls(t,ke,i),i!==s.cache&&dp(t,[ke],n,!0))),an(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error($(156,t.tag))}function Ji(e){e.flags|=4}function Pd(e,t,n,i,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Px())e.flags|=8192;else throw Da=fu,om}else e.flags&=-16777217}function J_(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!aS(t))if(Px())e.flags|=8192;else throw Da=fu,om}function Ic(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Bv():536870912,e.lanes|=t,Ir|=t)}function zo(e,t){if(!Qt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&65011712,i|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function mE(e,t,n){var i=t.pendingProps;switch(sm(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ee(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),rs(ke),Rr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(rr(t)?Ji(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wd())),Ee(t),null;case 26:var s=t.type,a=t.memoizedState;return e===null?(Ji(t),a!==null?(Ee(t),J_(t,a)):(Ee(t),Pd(t,s,null,i,n))):a?a!==e.memoizedState?(Ji(t),Ee(t),J_(t,a)):(Ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ji(t),Ee(t),Pd(t,s,e,i,n)),null;case 27:if(au(t),n=Hs.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Ee(t),null}e=Fi.current,rr(t)?T_(t,e):(e=nS(s,i,n),t.stateNode=e,Ji(t))}return Ee(t),null;case 5:if(au(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(!i){if(t.stateNode===null)throw Error($(166));return Ee(t),null}if(a=Fi.current,rr(t))T_(t,a);else{var r=Au(Hs.current);switch(a){case 1:a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":a=r.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":a=r.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":a=r.createElement("div"),a.innerHTML="<script><\/script>",a=a.removeChild(a.firstChild);break;case"select":a=typeof i.is=="string"?r.createElement("select",{is:i.is}):r.createElement("select"),i.multiple?a.multiple=!0:i.size&&(a.size=i.size);break;default:a=typeof i.is=="string"?r.createElement(s,{is:i.is}):r.createElement(s)}}a[rn]=t,a[In]=i;t:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)a.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break t;for(;r.sibling===null;){if(r.return===null||r.return===t)break t;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=a;t:switch(cn(a,s,i),s){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break t;case"img":i=!0;break t;default:i=!1}i&&Ji(t)}}return Ee(t),Pd(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Ji(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error($(166));if(e=Hs.current,rr(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,s=on,s!==null)switch(s.tag){case 27:case 5:i=s.memoizedProps}e[rn]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Qx(e.nodeValue,n)),e||js(t,!0)}else e=Au(e).createTextNode(i),e[rn]=t,t.stateNode=e}return Ee(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(i=rr(t),n!==null){if(e===null){if(!i)throw Error($(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(557));e[rn]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),e=!1}else n=wd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(kn(t),t):(kn(t),null);if((t.flags&128)!==0)throw Error($(558))}return Ee(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=rr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error($(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[rn]=t}else La(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),s=!1}else s=wd(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(kn(t),t):(kn(t),null)}return kn(t),(t.flags&128)!==0?(t.lanes=n,t):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=t.child,s=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(s=i.alternate.memoizedState.cachePool.pool),a=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(a=i.memoizedState.cachePool.pool),a!==s&&(i.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ic(t,t.updateQueue),Ee(t),null);case 4:return Rr(),e===null&&Nm(t.stateNode.containerInfo),Ee(t),null;case 10:return rs(t.type),Ee(t),null;case 19:if(en(Be),i=t.memoizedState,i===null)return Ee(t),null;if(s=(t.flags&128)!==0,a=i.rendering,a===null)if(s)zo(i,!1);else{if(Ie!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(a=pu(e),a!==null){for(t.flags|=128,zo(i,!1),e=a.updateQueue,t.updateQueue=e,Ic(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)dy(n,e),n=n.sibling;return Se(Be,Be.current&1|2),Qt&&ts(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&qn()>xu&&(t.flags|=128,s=!0,zo(i,!1),t.lanes=4194304)}else{if(!s)if(e=pu(a),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Ic(t,e),zo(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Qt)return Ee(t),null}else 2*qn()-i.renderingStartTime>xu&&n!==536870912&&(t.flags|=128,s=!0,zo(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(e=i.last,e!==null?e.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=qn(),e.sibling=null,n=Be.current,Se(Be,s?n&1|2:n&1),Qt&&ts(t,i.treeForkCount),e):(Ee(t),null);case 22:case 23:return kn(t),cm(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),n=t.updateQueue,n!==null&&Ic(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&en(Ra),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),rs(ke),Ee(t),null;case 25:return null;case 30:return null}throw Error($(156,t.tag))}function gE(e,t){switch(sm(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return rs(ke),Rr(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return au(t),null;case 31:if(t.memoizedState!==null){if(kn(t),t.alternate===null)throw Error($(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(kn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));La()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return en(Be),null;case 4:return Rr(),null;case 10:return rs(t.type),null;case 22:case 23:return kn(t),cm(),e!==null&&en(Ra),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return rs(ke),null;case 25:return null;default:return null}}function dx(e,t){switch(sm(t),t.tag){case 3:rs(ke),Rr();break;case 26:case 27:case 5:au(t);break;case 4:Rr();break;case 31:t.memoizedState!==null&&kn(t);break;case 13:kn(t);break;case 19:en(Be);break;case 10:rs(t.type);break;case 22:case 23:kn(t),cm(),e!==null&&en(Ra);break;case 24:rs(ke)}}function Cl(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){i=void 0;var a=n.create,r=n.inst;i=a(),r.destroy=i}n=n.next}while(n!==s)}}catch(o){ue(t,t.return,o)}}function Qs(e,t,n){try{var i=t.updateQueue,s=i!==null?i.lastEffect:null;if(s!==null){var a=s.next;i=a;do{if((i.tag&e)===e){var r=i.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,s=t;var l=n,c=o;try{c()}catch(h){ue(s,l,h)}}}i=i.next}while(i!==a)}}catch(h){ue(t,t.return,h)}}function px(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{by(t,n)}catch(i){ue(e,e.return,i)}}}function mx(e,t,n){n.props=Pa(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){ue(e,t,i)}}function el(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(s){ue(e,t,s)}}function zi(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(s){ue(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){ue(e,t,s)}else n.current=null}function gx(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{t:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break t;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(s){ue(e,e.return,s)}}function Bd(e,t,n){try{var i=e.stateNode;PE(i,e.type,n,t),i[In]=t}catch(s){ue(e,e.return,s)}}function _x(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ea(e.type)||e.tag===4}function zd(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||_x(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ea(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ap(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=is));else if(i!==4&&(i===27&&ea(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Ap(e,t,n),e=e.sibling;e!==null;)Ap(e,t,n),e=e.sibling}function yu(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&ea(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function vx(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);cn(t,i,n),t[rn]=e,t[In]=n}catch(a){ue(e,e.return,a)}}var es=!1,Ge=!1,Fd=!1,j_=typeof WeakSet=="function"?WeakSet:Set,$e=null;function _E(e,t){if(e=e.containerInfo,Up=Du,e=ay(e),$p(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else t:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break t}var r=0,o=-1,l=-1,c=0,h=0,d=e,u=null;e:for(;;){for(var p;d!==n||s!==0&&d.nodeType!==3||(o=r+s),d!==a||i!==0&&d.nodeType!==3||(l=r+i),d.nodeType===3&&(r+=d.nodeValue.length),(p=d.firstChild)!==null;)u=d,d=p;for(;;){if(d===e)break e;if(u===n&&++c===s&&(o=r),u===a&&++h===i&&(l=r),(p=d.nextSibling)!==null)break;d=u,u=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Op={focusedElem:e,selectionRange:n},Du=!1,$e=t;$e!==null;)if(t=$e,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$e=e;else for(;$e!==null;){switch(t=$e,a=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&a!==null){e=void 0,n=t,s=a.memoizedProps,a=a.memoizedState,i=n.stateNode;try{var _=Pa(n.type,s);e=i.getSnapshotBeforeUpdate(_,a),i.__reactInternalSnapshotBeforeUpdate=e}catch(M){ue(n,n.return,M)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Pp(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pp(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error($(163))}if(e=t.sibling,e!==null){e.return=t.return,$e=e;break}$e=t.return}}function yx(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Qi(e,n),i&4&&Cl(5,n);break;case 1:if(Qi(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){ue(n,n.return,r)}else{var s=Pa(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){ue(n,n.return,r)}}i&64&&px(n),i&512&&el(n,n.return);break;case 3:if(Qi(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{by(e,t)}catch(r){ue(n,n.return,r)}}break;case 27:t===null&&i&4&&vx(n);case 26:case 5:Qi(e,n),t===null&&i&4&&gx(n),i&512&&el(n,n.return);break;case 12:Qi(e,n);break;case 31:Qi(e,n),i&4&&Mx(e,n);break;case 13:Qi(e,n),i&4&&bx(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=AE.bind(null,n),XE(e,n))));break;case 22:if(i=n.memoizedState!==null||es,!i){t=t!==null&&t.memoizedState!==null||Ge,s=es;var a=Ge;es=i,(Ge=t)&&!a?$i(e,n,(n.subtreeFlags&8772)!==0):Qi(e,n),es=s,Ge=a}break;case 30:break;default:Qi(e,n)}}function xx(e){var t=e.alternate;t!==null&&(e.alternate=null,xx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Yp(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var De=null,Ln=!1;function ji(e,t,n){for(n=n.child;n!==null;)Sx(e,t,n),n=n.sibling}function Sx(e,t,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 26:Ge||zi(n,t),ji(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ge||zi(n,t);var i=De,s=Ln;ea(n.type)&&(De=n.stateNode,Ln=!1),ji(e,t,n),al(n.stateNode),De=i,Ln=s;break;case 5:Ge||zi(n,t);case 6:if(i=De,s=Ln,De=null,ji(e,t,n),De=i,Ln=s,De!==null)if(Ln)try{(De.nodeType===9?De.body:De.nodeName==="HTML"?De.ownerDocument.body:De).removeChild(n.stateNode)}catch(a){ue(n,t,a)}else try{De.removeChild(n.stateNode)}catch(a){ue(n,t,a)}break;case 18:De!==null&&(Ln?(e=De,fv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fr(e)):fv(De,n.stateNode));break;case 4:i=De,s=Ln,De=n.stateNode.containerInfo,Ln=!0,ji(e,t,n),De=i,Ln=s;break;case 0:case 11:case 14:case 15:Qs(2,n,t),Ge||Qs(4,n,t),ji(e,t,n);break;case 1:Ge||(zi(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&mx(n,t,i)),ji(e,t,n);break;case 21:ji(e,t,n);break;case 22:Ge=(i=Ge)||n.memoizedState!==null,ji(e,t,n),Ge=i;break;default:ji(e,t,n)}}function Mx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fr(e)}catch(n){ue(t,t.return,n)}}}function bx(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fr(e)}catch(n){ue(t,t.return,n)}}function vE(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new j_),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new j_),t;default:throw Error($(435,e.tag))}}function Pc(e,t){var n=vE(e);t.forEach(function(i){if(!n.has(i)){n.add(i);var s=wE.bind(null,e,i);i.then(s,s)}})}function Dn(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],a=e,r=t,o=r;t:for(;o!==null;){switch(o.tag){case 27:if(ea(o.type)){De=o.stateNode,Ln=!1;break t}break;case 5:De=o.stateNode,Ln=!1;break t;case 3:case 4:De=o.stateNode.containerInfo,Ln=!0;break t}o=o.return}if(De===null)throw Error($(160));Sx(a,r,s),De=null,Ln=!1,a=s.alternate,a!==null&&(a.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ex(t,e),t=t.sibling}var Mi=null;function Ex(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Dn(t,e),Nn(e),i&4&&(Qs(3,e,e.return),Cl(3,e),Qs(5,e,e.return));break;case 1:Dn(t,e),Nn(e),i&512&&(Ge||n===null||zi(n,n.return)),i&64&&es&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var s=Mi;if(Dn(t,e),Nn(e),i&512&&(Ge||n===null||zi(n,n.return)),i&4){var a=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){t:{i=e.type,n=e.memoizedProps,s=s.ownerDocument||s;e:switch(i){case"title":a=s.getElementsByTagName("title")[0],(!a||a[El]||a[rn]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=s.createElement(i),s.head.insertBefore(a,s.querySelector("head > title"))),cn(a,i,n),a[rn]=e,tn(a),i=a;break t;case"link":var r=yv("link","href",s).get(i+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(a=r[o],a.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&a.getAttribute("rel")===(n.rel==null?null:n.rel)&&a.getAttribute("title")===(n.title==null?null:n.title)&&a.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break e}}a=s.createElement(i),cn(a,i,n),s.head.appendChild(a);break;case"meta":if(r=yv("meta","content",s).get(i+(n.content||""))){for(o=0;o<r.length;o++)if(a=r[o],a.getAttribute("content")===(n.content==null?null:""+n.content)&&a.getAttribute("name")===(n.name==null?null:n.name)&&a.getAttribute("property")===(n.property==null?null:n.property)&&a.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break e}}a=s.createElement(i),cn(a,i,n),s.head.appendChild(a);break;default:throw Error($(468,i))}a[rn]=e,tn(a),i=a}e.stateNode=i}else xv(s,e.type,e.stateNode);else e.stateNode=vv(s,i,e.memoizedProps);else a!==i?(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,i===null?xv(s,e.type,e.stateNode):vv(s,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Bd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Dn(t,e),Nn(e),i&512&&(Ge||n===null||zi(n,n.return)),n!==null&&i&4&&Bd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Dn(t,e),Nn(e),i&512&&(Ge||n===null||zi(n,n.return)),e.flags&32){s=e.stateNode;try{Nr(s,"")}catch(_){ue(e,e.return,_)}}i&4&&e.stateNode!=null&&(s=e.memoizedProps,Bd(e,s,n!==null?n.memoizedProps:s)),i&1024&&(Fd=!0);break;case 6:if(Dn(t,e),Nn(e),i&4){if(e.stateNode===null)throw Error($(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(_){ue(e,e.return,_)}}break;case 3:if(tu=null,s=Mi,Mi=wu(t.containerInfo),Dn(t,e),Mi=s,Nn(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fr(t.containerInfo)}catch(_){ue(e,e.return,_)}Fd&&(Fd=!1,Tx(e));break;case 4:i=Mi,Mi=wu(e.stateNode.containerInfo),Dn(t,e),Nn(e),Mi=i;break;case 12:Dn(t,e),Nn(e);break;case 31:Dn(t,e),Nn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pc(e,i)));break;case 13:Dn(t,e),Nn(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ku=qn()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pc(e,i)));break;case 22:s=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,c=es,h=Ge;if(es=c||s,Ge=h||l,Dn(t,e),Ge=h,es=c,Nn(e),i&8192)t:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||l||es||Ge||Aa(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,s)r=a.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=l.stateNode;var d=l.memoizedProps.style,u=d!=null&&d.hasOwnProperty("display")?d.display:null;o.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(_){ue(l,l.return,_)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=s?"":l.memoizedProps}catch(_){ue(l,l.return,_)}}}else if(t.tag===18){if(n===null){l=t;try{var p=l.stateNode;s?dv(p,!0):dv(l.stateNode,!1)}catch(_){ue(l,l.return,_)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Pc(e,n))));break;case 19:Dn(t,e),Nn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Pc(e,i)));break;case 30:break;case 21:break;default:Dn(t,e),Nn(e)}}function Nn(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(_x(i)){n=i;break}i=i.return}if(n==null)throw Error($(160));switch(n.tag){case 27:var s=n.stateNode,a=zd(e);yu(e,a,s);break;case 5:var r=n.stateNode;n.flags&32&&(Nr(r,""),n.flags&=-33);var o=zd(e);yu(e,o,r);break;case 3:case 4:var l=n.stateNode.containerInfo,c=zd(e);Ap(e,c,l);break;default:throw Error($(161))}}catch(h){ue(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tx(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Tx(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qi(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yx(e,t.alternate,t),t=t.sibling}function Aa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Qs(4,t,t.return),Aa(t);break;case 1:zi(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mx(t,t.return,n),Aa(t);break;case 27:al(t.stateNode);case 26:case 5:zi(t,t.return),Aa(t);break;case 22:t.memoizedState===null&&Aa(t);break;case 30:Aa(t);break;default:Aa(t)}e=e.sibling}}function $i(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,s=e,a=t,r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(s,a,n),Cl(4,a);break;case 1:if($i(s,a,n),i=a,s=i.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(c){ue(i,i.return,c)}if(i=a,s=i.updateQueue,s!==null){var o=i.stateNode;try{var l=s.shared.hiddenCallbacks;if(l!==null)for(s.shared.hiddenCallbacks=null,s=0;s<l.length;s++)My(l[s],o)}catch(c){ue(i,i.return,c)}}n&&r&64&&px(a),el(a,a.return);break;case 27:vx(a);case 26:case 5:$i(s,a,n),n&&i===null&&r&4&&gx(a),el(a,a.return);break;case 12:$i(s,a,n);break;case 31:$i(s,a,n),n&&r&4&&Mx(s,a);break;case 13:$i(s,a,n),n&&r&4&&bx(s,a);break;case 22:a.memoizedState===null&&$i(s,a,n),el(a,a.return);break;case 30:break;default:$i(s,a,n)}t=t.sibling}}function Tm(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Al(n))}function Am(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Al(e))}function Si(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ax(e,t,n,i),t=t.sibling}function Ax(e,t,n,i){var s=t.flags;switch(t.tag){case 0:case 11:case 15:Si(e,t,n,i),s&2048&&Cl(9,t);break;case 1:Si(e,t,n,i);break;case 3:Si(e,t,n,i),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Al(e)));break;case 12:if(s&2048){Si(e,t,n,i),e=t.stateNode;try{var a=t.memoizedProps,r=a.id,o=a.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(l){ue(t,t.return,l)}}else Si(e,t,n,i);break;case 31:Si(e,t,n,i);break;case 13:Si(e,t,n,i);break;case 23:break;case 22:a=t.stateNode,r=t.alternate,t.memoizedState!==null?a._visibility&2?Si(e,t,n,i):nl(e,t):a._visibility&2?Si(e,t,n,i):(a._visibility|=2,lr(e,t,n,i,(t.subtreeFlags&10256)!==0||!1)),s&2048&&Tm(r,t);break;case 24:Si(e,t,n,i),s&2048&&Am(t.alternate,t);break;default:Si(e,t,n,i)}}function lr(e,t,n,i,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var a=e,r=t,o=n,l=i,c=r.flags;switch(r.tag){case 0:case 11:case 15:lr(a,r,o,l,s),Cl(8,r);break;case 23:break;case 22:var h=r.stateNode;r.memoizedState!==null?h._visibility&2?lr(a,r,o,l,s):nl(a,r):(h._visibility|=2,lr(a,r,o,l,s)),s&&c&2048&&Tm(r.alternate,r);break;case 24:lr(a,r,o,l,s),s&&c&2048&&Am(r.alternate,r);break;default:lr(a,r,o,l,s)}t=t.sibling}}function nl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,s=i.flags;switch(i.tag){case 22:nl(n,i),s&2048&&Tm(i.alternate,i);break;case 24:nl(n,i),s&2048&&Am(i.alternate,i);break;default:nl(n,i)}t=t.sibling}}var qo=8192;function or(e,t,n){if(e.subtreeFlags&qo)for(e=e.child;e!==null;)wx(e,t,n),e=e.sibling}function wx(e,t,n){switch(e.tag){case 26:or(e,t,n),e.flags&qo&&e.memoizedState!==null&&nT(n,Mi,e.memoizedState,e.memoizedProps);break;case 5:or(e,t,n);break;case 3:case 4:var i=Mi;Mi=wu(e.stateNode.containerInfo),or(e,t,n),Mi=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=qo,qo=16777216,or(e,t,n),qo=i):or(e,t,n));break;default:or(e,t,n)}}function Cx(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,Dx(i,e)}Cx(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rx(e),e=e.sibling}function Rx(e){switch(e.tag){case 0:case 11:case 15:Fo(e),e.flags&2048&&Qs(9,e,e.return);break;case 3:Fo(e);break;case 12:Fo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Qc(e)):Fo(e);break;default:Fo(e)}}function Qc(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];$e=i,Dx(i,e)}Cx(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Qs(8,t,t.return),Qc(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Qc(t));break;default:Qc(t)}e=e.sibling}}function Dx(e,t){for(;$e!==null;){var n=$e;switch(n.tag){case 0:case 11:case 15:Qs(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Al(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,$e=i;else t:for(n=e;$e!==null;){i=$e;var s=i.sibling,a=i.return;if(xx(i),i===n){$e=null;break t}if(s!==null){s.return=a,$e=s;break t}$e=a}}}var yE={getCacheForType:function(e){var t=ln(ke),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ln(ke).controller.signal}},xE=typeof WeakMap=="function"?WeakMap:Map,ie=0,ge=null,Zt=null,Jt=0,ce=0,Gn=null,zs=!1,Xr=!1,wm=!1,fs=0,Ie=0,$s=0,Na=0,Cm=0,Wn=0,Ir=0,il=null,Un=null,wp=!1,ku=0,Nx=0,xu=1/0,Su=null,Ws=null,Ye=0,qs=null,Pr=null,os=0,Cp=0,Rp=null,Lx=null,sl=0,Dp=null;function Kn(){return(ie&2)!==0&&Jt!==0?Jt&-Jt:Nt.T!==null?Dm():Hv()}function Ux(){if(Wn===0)if((Jt&536870912)===0||Qt){var e=Ac;Ac<<=1,(Ac&3932160)===0&&(Ac=262144),Wn=e}else Wn=536870912;return e=jn.current,e!==null&&(e.flags|=32),Wn}function On(e,t,n){(e===ge&&(ce===2||ce===9)||e.cancelPendingCommit!==null)&&(Br(e,0),Fs(e,Jt,Wn,!1)),bl(e,n),((ie&2)===0||e!==ge)&&(e===ge&&((ie&2)===0&&(Na|=n),Ie===4&&Fs(e,Jt,Wn,!1)),Hi(e))}function Ox(e,t,n){if((ie&6)!==0)throw Error($(327));var i=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ml(e,t),s=i?bE(e,t):Vd(e,t,!0),a=i;do{if(s===0){Xr&&!i&&Fs(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!SE(n)){s=Vd(e,t,!1),a=!1;continue}if(s===2){if(a=t,e.errorRecoveryDisabledLanes&a)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;t:{var o=e;s=il;var l=o.current.memoizedState.isDehydrated;if(l&&(Br(o,r).flags|=256),r=Vd(o,r,!1),r!==2){if(wm&&!l){o.errorRecoveryDisabledLanes|=a,Na|=a,s=4;break t}a=Un,Un=s,a!==null&&(Un===null?Un=a:Un.push.apply(Un,a))}s=r}if(a=!1,s!==2)continue}}if(s===1){Br(e,0),Fs(e,t,0,!0);break}t:{switch(i=e,a=s,a){case 0:case 1:throw Error($(345));case 4:if((t&4194048)!==t)break;case 6:Fs(i,t,Wn,!zs);break t;case 2:Un=null;break;case 3:case 5:break;default:throw Error($(329))}if((t&62914560)===t&&(s=ku+300-qn(),10<s)){if(Fs(i,t,Wn,!zs),Lu(i,0,!0)!==0)break t;os=t,i.timeoutHandle=tS(Q_.bind(null,i,n,Un,Su,wp,t,Wn,Na,Ir,zs,a,"Throttled",-0,0),s);break t}Q_(i,n,Un,Su,wp,t,Wn,Na,Ir,zs,a,null,-0,0)}}break}while(!0);Hi(e)}function Q_(e,t,n,i,s,a,r,o,l,c,h,d,u,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)===16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:is},wx(t,a,d);var _=(a&62914560)===a?ku-qn():(a&4194048)===a?Nx-qn():0;if(_=iT(d,_),_!==null){os=a,e.cancelPendingCommit=_(tv.bind(null,e,t,a,n,i,s,r,o,l,h,d,null,u,p)),Fs(e,a,r,!c);return}}tv(e,t,a,n,i,s,r,o,l)}function SE(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var s=n[i],a=s.getSnapshot;s=s.value;try{if(!Jn(a(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fs(e,t,n,i){t&=~Cm,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var s=t;0<s;){var a=31-Zn(s),r=1<<a;i[a]=-1,s&=~r}n!==0&&zv(e,n,t)}function Xu(){return(ie&6)===0?(Rl(0,!1),!1):!0}function Rm(){if(Zt!==null){if(ce===0)var e=Zt.return;else e=Zt,ss=Ha=null,pm(e),Ar=null,fl=0,e=Zt;for(;e!==null;)dx(e.alternate,e),e=e.return;Zt=null}}function Br(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,FE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),os=0,Rm(),ge=e,Zt=n=as(e.current,null),Jt=t,ce=0,Gn=null,zs=!1,Xr=Ml(e,t),wm=!1,Ir=Wn=Cm=Na=$s=Ie=0,Un=il=null,wp=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var s=31-Zn(i),a=1<<s;t|=e[s],i&=~a}return fs=t,Pu(),n}function Ix(e,t){zt=null,Nt.H=pl,t===kr||t===zu?(t=D_(),ce=3):t===om?(t=D_(),ce=4):ce=t===bm?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Gn=t,Zt===null&&(Ie=1,_u(e,fi(t,e.current)))}function Px(){var e=jn.current;return e===null?!0:(Jt&4194048)===Jt?pi===null:(Jt&62914560)===Jt||(Jt&536870912)!==0?e===pi:!1}function Bx(){var e=Nt.H;return Nt.H=pl,e===null?pl:e}function zx(){var e=Nt.A;return Nt.A=yE,e}function Mu(){Ie=4,zs||(Jt&4194048)!==Jt&&jn.current!==null||(Xr=!0),($s&134217727)===0&&(Na&134217727)===0||ge===null||Fs(ge,Jt,Wn,!1)}function Vd(e,t,n){var i=ie;ie|=2;var s=Bx(),a=zx();(ge!==e||Jt!==t)&&(Su=null,Br(e,t)),t=!1;var r=Ie;t:do try{if(ce!==0&&Zt!==null){var o=Zt,l=Gn;switch(ce){case 8:Rm(),r=6;break t;case 3:case 2:case 9:case 6:jn.current===null&&(t=!0);var c=ce;if(ce=0,Gn=null,Sr(e,o,l,c),n&&Xr){r=0;break t}break;default:c=ce,ce=0,Gn=null,Sr(e,o,l,c)}}ME(),r=Ie;break}catch(h){Ix(e,h)}while(!0);return t&&e.shellSuspendCounter++,ss=Ha=null,ie=i,Nt.H=s,Nt.A=a,Zt===null&&(ge=null,Jt=0,Pu()),r}function ME(){for(;Zt!==null;)Fx(Zt)}function bE(e,t){var n=ie;ie|=2;var i=Bx(),s=zx();ge!==e||Jt!==t?(Su=null,xu=qn()+500,Br(e,t)):Xr=Ml(e,t);t:do try{if(ce!==0&&Zt!==null){t=Zt;var a=Gn;e:switch(ce){case 1:ce=0,Gn=null,Sr(e,t,a,1);break;case 2:case 9:if(R_(a)){ce=0,Gn=null,$_(t);break}t=function(){ce!==2&&ce!==9||ge!==e||(ce=7),Hi(e)},a.then(t,t);break t;case 3:ce=7;break t;case 4:ce=5;break t;case 7:R_(a)?(ce=0,Gn=null,$_(t)):(ce=0,Gn=null,Sr(e,t,a,7));break;case 5:var r=null;switch(Zt.tag){case 26:r=Zt.memoizedState;case 5:case 27:var o=Zt;if(r?aS(r):o.stateNode.complete){ce=0,Gn=null;var l=o.sibling;if(l!==null)Zt=l;else{var c=o.return;c!==null?(Zt=c,Wu(c)):Zt=null}break e}}ce=0,Gn=null,Sr(e,t,a,5);break;case 6:ce=0,Gn=null,Sr(e,t,a,6);break;case 8:Rm(),Ie=6;break t;default:throw Error($(462))}}EE();break}catch(h){Ix(e,h)}while(!0);return ss=Ha=null,Nt.H=i,Nt.A=s,ie=n,Zt!==null?0:(ge=null,Jt=0,Pu(),Ie)}function EE(){for(;Zt!==null&&!Yb();)Fx(Zt)}function Fx(e){var t=fx(e.alternate,e,fs);e.memoizedProps=e.pendingProps,t===null?Wu(e):Zt=t}function $_(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=q_(n,t,t.pendingProps,t.type,void 0,Jt);break;case 11:t=q_(n,t,t.pendingProps,t.type.render,t.ref,Jt);break;case 5:pm(t);default:dx(n,t),t=Zt=dy(t,fs),t=fx(n,t,fs)}e.memoizedProps=e.pendingProps,t===null?Wu(e):Zt=t}function Sr(e,t,n,i){ss=Ha=null,pm(t),Ar=null,fl=0;var s=t.return;try{if(fE(e,s,t,n,Jt)){Ie=1,_u(e,fi(n,e.current)),Zt=null;return}}catch(a){if(s!==null)throw Zt=s,a;Ie=1,_u(e,fi(n,e.current)),Zt=null;return}t.flags&32768?(Qt||i===1?e=!0:Xr||(Jt&536870912)!==0?e=!1:(zs=e=!0,(i===2||i===9||i===3||i===6)&&(i=jn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Vx(t,e)):Wu(t)}function Wu(e){var t=e;do{if((t.flags&32768)!==0){Vx(t,zs);return}e=t.return;var n=mE(t.alternate,t,fs);if(n!==null){Zt=n;return}if(t=t.sibling,t!==null){Zt=t;return}Zt=t=e}while(t!==null);Ie===0&&(Ie=5)}function Vx(e,t){do{var n=gE(e.alternate,e);if(n!==null){n.flags&=32767,Zt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Zt=e;return}Zt=e=n}while(e!==null);Ie=6,Zt=null}function tv(e,t,n,i,s,a,r,o,l){e.cancelPendingCommit=null;do qu();while(Ye!==0);if((ie&6)!==0)throw Error($(327));if(t!==null){if(t===e.current)throw Error($(177));if(a=t.lanes|t.childLanes,a|=tm,i1(e,n,a,r,o,l),e===ge&&(Zt=ge=null,Jt=0),Pr=t,qs=e,os=n,Cp=a,Rp=s,Lx=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,CE(ru,function(){return Wx(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Nt.T,Nt.T=null,s=se.p,se.p=2,r=ie,ie|=4;try{_E(e,t,n)}finally{ie=r,se.p=s,Nt.T=i}}Ye=1,Hx(),Gx(),kx()}}function Hx(){if(Ye===1){Ye=0;var e=qs,t=Pr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Nt.T,Nt.T=null;var i=se.p;se.p=2;var s=ie;ie|=4;try{Ex(t,e);var a=Op,r=ay(e.containerInfo),o=a.focusedElem,l=a.selectionRange;if(r!==o&&o&&o.ownerDocument&&sy(o.ownerDocument.documentElement,o)){if(l!==null&&$p(o)){var c=l.start,h=l.end;if(h===void 0&&(h=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(h,o.value.length);else{var d=o.ownerDocument||document,u=d&&d.defaultView||window;if(u.getSelection){var p=u.getSelection(),_=o.textContent.length,M=Math.min(l.start,_),m=l.end===void 0?M:Math.min(l.end,_);!p.extend&&M>m&&(r=m,m=M,M=r);var f=M_(o,M),g=M_(o,m);if(f&&g&&(p.rangeCount!==1||p.anchorNode!==f.node||p.anchorOffset!==f.offset||p.focusNode!==g.node||p.focusOffset!==g.offset)){var S=d.createRange();S.setStart(f.node,f.offset),p.removeAllRanges(),M>m?(p.addRange(S),p.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),p.addRange(S))}}}}for(d=[],p=o;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<d.length;o++){var v=d[o];v.element.scrollLeft=v.left,v.element.scrollTop=v.top}}Du=!!Up,Op=Up=null}finally{ie=s,se.p=i,Nt.T=n}}e.current=t,Ye=2}}function Gx(){if(Ye===2){Ye=0;var e=qs,t=Pr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Nt.T,Nt.T=null;var i=se.p;se.p=2;var s=ie;ie|=4;try{yx(e,t.alternate,t)}finally{ie=s,se.p=i,Nt.T=n}}Ye=3}}function kx(){if(Ye===4||Ye===3){Ye=0,Zb();var e=qs,t=Pr,n=os,i=Lx;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ye=5:(Ye=0,Pr=qs=null,Xx(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Ws=null),qp(n),t=t.stateNode,Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Nt.T,s=se.p,se.p=2,Nt.T=null;try{for(var a=e.onRecoverableError,r=0;r<i.length;r++){var o=i[r];a(o.value,{componentStack:o.stack})}}finally{Nt.T=t,se.p=s}}(os&3)!==0&&qu(),Hi(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Dp?sl++:(sl=0,Dp=e):sl=0,Rl(0,!1)}}function Xx(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Al(t)))}function qu(){return Hx(),Gx(),kx(),Wx()}function Wx(){if(Ye!==5)return!1;var e=qs,t=Cp;Cp=0;var n=qp(os),i=Nt.T,s=se.p;try{se.p=32>n?32:n,Nt.T=null,n=Rp,Rp=null;var a=qs,r=os;if(Ye=0,Pr=qs=null,os=0,(ie&6)!==0)throw Error($(331));var o=ie;if(ie|=4,Rx(a.current),Ax(a,a.current,r,n),ie=o,Rl(0,!1),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(Sl,a)}catch{}return!0}finally{se.p=s,Nt.T=i,Xx(e,t)}}function ev(e,t,n){t=fi(n,t),t=bp(e.stateNode,t,2),e=Xs(e,t,2),e!==null&&(bl(e,2),Hi(e))}function ue(e,t,n){if(e.tag===3)ev(e,e,n);else for(;t!==null;){if(t.tag===3){ev(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ws===null||!Ws.has(i))){e=fi(n,e),n=rx(2),i=Xs(t,n,2),i!==null&&(ox(n,i,t,e),bl(i,2),Hi(i));break}}t=t.return}}function Hd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new xE;var s=new Set;i.set(t,s)}else s=i.get(t),s===void 0&&(s=new Set,i.set(t,s));s.has(n)||(wm=!0,s.add(n),e=TE.bind(null,e,t,n),t.then(e,e))}function TE(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ge===e&&(Jt&n)===n&&(Ie===4||Ie===3&&(Jt&62914560)===Jt&&300>qn()-ku?(ie&2)===0&&Br(e,0):Cm|=n,Ir===Jt&&(Ir=0)),Hi(e)}function qx(e,t){t===0&&(t=Bv()),e=Va(e,t),e!==null&&(bl(e,t),Hi(e))}function AE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qx(e,n)}function wE(e,t){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error($(314))}i!==null&&i.delete(t),qx(e,n)}function CE(e,t){return Xp(e,t)}var bu=null,cr=null,Np=!1,Eu=!1,Gd=!1,Vs=0;function Hi(e){e!==cr&&e.next===null&&(cr===null?bu=cr=e:cr=cr.next=e),Eu=!0,Np||(Np=!0,DE())}function Rl(e,t){if(!Gd&&Eu){Gd=!0;do for(var n=!1,i=bu;i!==null;){if(!t)if(e!==0){var s=i.pendingLanes;if(s===0)var a=0;else{var r=i.suspendedLanes,o=i.pingedLanes;a=(1<<31-Zn(42|e)+1)-1,a&=s&~(r&~o),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,nv(i,a))}else a=Jt,a=Lu(i,i===ge?a:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(a&3)===0||Ml(i,a)||(n=!0,nv(i,a));i=i.next}while(n);Gd=!1}}function RE(){Yx()}function Yx(){Eu=Np=!1;var e=0;Vs!==0&&zE()&&(e=Vs);for(var t=qn(),n=null,i=bu;i!==null;){var s=i.next,a=Zx(i,t);a===0?(i.next=null,n===null?bu=s:n.next=s,s===null&&(cr=n)):(n=i,(e!==0||(a&3)!==0)&&(Eu=!0)),i=s}Ye!==0&&Ye!==5||Rl(e,!1),Vs!==0&&(Vs=0)}function Zx(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var r=31-Zn(a),o=1<<r,l=s[r];l===-1?((o&n)===0||(o&i)!==0)&&(s[r]=n1(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}if(t=ge,n=Jt,n=Lu(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ce===2||ce===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&_d(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ml(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&_d(i),qp(n)){case 2:case 8:n=Iv;break;case 32:n=ru;break;case 268435456:n=Pv;break;default:n=ru}return i=Kx.bind(null,e),n=Xp(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&_d(i),e.callbackPriority=2,e.callbackNode=null,2}function Kx(e,t){if(Ye!==0&&Ye!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(qu()&&e.callbackNode!==n)return null;var i=Jt;return i=Lu(e,e===ge?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ox(e,i,t),Zx(e,qn()),e.callbackNode!=null&&e.callbackNode===n?Kx.bind(null,e):null)}function nv(e,t){if(qu())return null;Ox(e,t,!0)}function DE(){VE(function(){(ie&6)!==0?Xp(Ov,RE):Yx()})}function Dm(){if(Vs===0){var e=Lr;e===0&&(e=Tc,Tc<<=1,(Tc&261888)===0&&(Tc=256)),Vs=e}return Vs}function iv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:kc(""+e)}function sv(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function NE(e,t,n,i,s){if(t==="submit"&&n&&n.stateNode===s){var a=iv((s[In]||null).action),r=i.submitter;r&&(t=(t=r[In]||null)?iv(t.formAction):r.getAttribute("formAction"),t!==null&&(a=t,r=null));var o=new Uu("action","action",null,i,s);e.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Vs!==0){var l=r?sv(s,r):new FormData(s);Sp(n,{pending:!0,data:l,method:s.method,action:a},null,l)}}else typeof a=="function"&&(o.preventDefault(),l=r?sv(s,r):new FormData(s),Sp(n,{pending:!0,data:l,method:s.method,action:a},a,l))},currentTarget:s}]})}}for(Bc=0;Bc<cp.length;Bc++)zc=cp[Bc],av=zc.toLowerCase(),rv=zc[0].toUpperCase()+zc.slice(1),bi(av,"on"+rv);var zc,av,rv,Bc;bi(oy,"onAnimationEnd");bi(ly,"onAnimationIteration");bi(cy,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(K1,"onTransitionRun");bi(J1,"onTransitionStart");bi(j1,"onTransitionCancel");bi(uy,"onTransitionEnd");Dr("onMouseEnter",["mouseout","mouseover"]);Dr("onMouseLeave",["mouseout","mouseover"]);Dr("onPointerEnter",["pointerout","pointerover"]);Dr("onPointerLeave",["pointerout","pointerover"]);Ba("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ba("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ba("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ba("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ba("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ba("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ml="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ml));function Jx(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],s=i.event;i=i.listeners;t:{var a=void 0;if(t)for(var r=i.length-1;0<=r;r--){var o=i[r],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){lu(h)}s.currentTarget=null,a=l}else for(r=0;r<i.length;r++){if(o=i[r],l=o.instance,c=o.currentTarget,o=o.listener,l!==a&&s.isPropagationStopped())break t;a=o,s.currentTarget=c;try{a(s)}catch(h){lu(h)}s.currentTarget=null,a=l}}}}function Yt(e,t){var n=t[ep];n===void 0&&(n=t[ep]=new Set);var i=e+"__bubble";n.has(i)||(jx(t,e,2,!1),n.add(i))}function kd(e,t,n){var i=0;t&&(i|=4),jx(n,e,i,t)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function Nm(e){if(!e[Fc]){e[Fc]=!0,Gv.forEach(function(n){n!=="selectionchange"&&(LE.has(n)||kd(n,!1,e),kd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fc]||(t[Fc]=!0,kd("selectionchange",!1,t))}}function jx(e,t,n,i){switch(uS(t)){case 2:var s=rT;break;case 8:s=oT;break;default:s=Im}n=s.bind(null,t,n,e),s=void 0,!rp||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),i?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Xd(e,t,n,i,s){var a=i;if((t&1)===0&&(t&2)===0&&i!==null)t:for(;;){if(i===null)return;var r=i.tag;if(r===3||r===4){var o=i.stateNode.containerInfo;if(o===s)break;if(r===4)for(r=i.return;r!==null;){var l=r.tag;if((l===3||l===4)&&r.stateNode.containerInfo===s)return;r=r.return}for(;o!==null;){if(r=fr(o),r===null)return;if(l=r.tag,l===5||l===6||l===26||l===27){i=a=r;continue t}o=o.parentNode}}i=i.return}Jv(function(){var c=a,h=Kp(n),d=[];t:{var u=hy.get(e);if(u!==void 0){var p=Uu,_=e;switch(e){case"keypress":if(Wc(n)===0)break t;case"keydown":case"keyup":p=w1;break;case"focusin":_="focus",p=Md;break;case"focusout":_="blur",p=Md;break;case"beforeblur":case"afterblur":p=Md;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=d_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=m1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=D1;break;case oy:case ly:case cy:p=v1;break;case uy:p=L1;break;case"scroll":case"scrollend":p=d1;break;case"wheel":p=O1;break;case"copy":case"cut":case"paste":p=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=m_;break;case"toggle":case"beforetoggle":p=P1}var M=(t&4)!==0,m=!M&&(e==="scroll"||e==="scrollend"),f=M?u!==null?u+"Capture":null:u;M=[];for(var g=c,S;g!==null;){var v=g;if(S=v.stateNode,v=v.tag,v!==5&&v!==26&&v!==27||S===null||f===null||(v=ol(g,f),v!=null&&M.push(gl(g,v,S))),m)break;g=g.return}0<M.length&&(u=new p(u,_,null,n,h),d.push({event:u,listeners:M}))}}if((t&7)===0){t:{if(u=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",u&&n!==ap&&(_=n.relatedTarget||n.fromElement)&&(fr(_)||_[Vr]))break t;if((p||u)&&(u=h.window===h?h:(u=h.ownerDocument)?u.defaultView||u.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?fr(_):null,_!==null&&(m=xl(_),M=_.tag,_!==m||M!==5&&M!==27&&M!==6)&&(_=null)):(p=null,_=c),p!==_)){if(M=d_,v="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(M=m_,v="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?u:Xo(p),S=_==null?u:Xo(_),u=new M(v,g+"leave",p,n,h),u.target=m,u.relatedTarget=S,v=null,fr(h)===c&&(M=new M(f,g+"enter",_,n,h),M.target=S,M.relatedTarget=m,v=M),m=v,p&&_)e:{for(M=UE,f=p,g=_,S=0,v=f;v;v=M(v))S++;v=0;for(var E=g;E;E=M(E))v++;for(;0<S-v;)f=M(f),S--;for(;0<v-S;)g=M(g),v--;for(;S--;){if(f===g||g!==null&&f===g.alternate){M=f;break e}f=M(f),g=M(g)}M=null}else M=null;p!==null&&ov(d,u,p,M,!1),_!==null&&m!==null&&ov(d,m,_,M,!0)}}t:{if(u=c?Xo(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var T=y_;else if(v_(u))if(ny)T=q1;else{T=X1;var C=k1}else p=u.nodeName,!p||p.toLowerCase()!=="input"||u.type!=="checkbox"&&u.type!=="radio"?c&&Zp(c.elementType)&&(T=y_):T=W1;if(T&&(T=T(e,c))){ey(d,T,n,h);break t}C&&C(e,u,c),e==="focusout"&&c&&u.type==="number"&&c.memoizedProps.value!=null&&sp(u,"number",u.value)}switch(C=c?Xo(c):window,e){case"focusin":(v_(C)||C.contentEditable==="true")&&(mr=C,op=c,Ko=null);break;case"focusout":Ko=op=mr=null;break;case"mousedown":lp=!0;break;case"contextmenu":case"mouseup":case"dragend":lp=!1,b_(d,n,h);break;case"selectionchange":if(Z1)break;case"keydown":case"keyup":b_(d,n,h)}var x;if(Qp)t:{switch(e){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else pr?$v(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(Qv&&n.locale!=="ko"&&(pr||w!=="onCompositionStart"?w==="onCompositionEnd"&&pr&&(x=jv()):(Bs=h,Jp="value"in Bs?Bs.value:Bs.textContent,pr=!0)),C=Tu(c,w),0<C.length&&(w=new p_(w,e,null,n,h),d.push({event:w,listeners:C}),x?w.data=x:(x=ty(n),x!==null&&(w.data=x)))),(x=z1?F1(e,n):V1(e,n))&&(w=Tu(c,"onBeforeInput"),0<w.length&&(C=new p_("onBeforeInput","beforeinput",null,n,h),d.push({event:C,listeners:w}),C.data=x)),NE(d,e,c,n,h)}Jx(d,t)})}function gl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Tu(e,t){for(var n=t+"Capture",i=[];e!==null;){var s=e,a=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||a===null||(s=ol(e,n),s!=null&&i.unshift(gl(e,s,a)),s=ol(e,t),s!=null&&i.push(gl(e,s,a))),e.tag===3)return i;e=e.return}return[]}function UE(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ov(e,t,n,i,s){for(var a=t._reactName,r=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(o=o.tag,l!==null&&l===i)break;o!==5&&o!==26&&o!==27||c===null||(l=c,s?(c=ol(n,a),c!=null&&r.unshift(gl(n,c,l))):s||(c=ol(n,a),c!=null&&r.push(gl(n,c,l)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var OE=/\r\n?/g,IE=/\u0000|\uFFFD/g;function lv(e){return(typeof e=="string"?e:""+e).replace(OE,`
`).replace(IE,"")}function Qx(e,t){return t=lv(t),lv(e)===t}function de(e,t,n,i,s,a){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Nr(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Nr(e,""+i);break;case"className":Cc(e,"class",i);break;case"tabIndex":Cc(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Cc(e,n,i);break;case"style":Kv(e,i,a);break;case"data":if(t!=="object"){Cc(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=kc(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof a=="function"&&(n==="formAction"?(t!=="input"&&de(e,t,"name",s.name,s,null),de(e,t,"formEncType",s.formEncType,s,null),de(e,t,"formMethod",s.formMethod,s,null),de(e,t,"formTarget",s.formTarget,s,null)):(de(e,t,"encType",s.encType,s,null),de(e,t,"method",s.method,s,null),de(e,t,"target",s.target,s,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=kc(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=is);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error($(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=kc(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Yt("beforetoggle",e),Yt("toggle",e),Gc(e,"popover",i);break;case"xlinkActuate":Ki(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ki(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ki(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ki(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ki(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ki(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ki(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ki(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ki(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Gc(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=h1.get(n)||n,Gc(e,n,i))}}function Lp(e,t,n,i,s,a){switch(n){case"style":Kv(e,i,a);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error($(61));if(n=i.__html,n!=null){if(s.children!=null)throw Error($(60));e.innerHTML=n}}break;case"children":typeof i=="string"?Nr(e,i):(typeof i=="number"||typeof i=="bigint")&&Nr(e,""+i);break;case"onScroll":i!=null&&Yt("scroll",e);break;case"onScrollEnd":i!=null&&Yt("scrollend",e);break;case"onClick":i!=null&&(e.onclick=is);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!kv.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),a=e[In]||null,a=a!=null?a[n]:null,typeof a=="function"&&e.removeEventListener(t,a,s),typeof i=="function")){typeof a!="function"&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,s);break t}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Gc(e,n,i)}}}function cn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Yt("error",e),Yt("load",e);var i=!1,s=!1,a;for(a in n)if(n.hasOwnProperty(a)){var r=n[a];if(r!=null)switch(a){case"src":i=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:de(e,t,a,r,n,null)}}s&&de(e,t,"srcSet",n.srcSet,n,null),i&&de(e,t,"src",n.src,n,null);return;case"input":Yt("invalid",e);var o=a=r=s=null,l=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var h=n[i];if(h!=null)switch(i){case"name":s=h;break;case"type":r=h;break;case"checked":l=h;break;case"defaultChecked":c=h;break;case"value":a=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error($(137,t));break;default:de(e,t,i,h,n,null)}}qv(e,a,o,l,c,r,s,!1);return;case"select":Yt("invalid",e),i=r=a=null;for(s in n)if(n.hasOwnProperty(s)&&(o=n[s],o!=null))switch(s){case"value":a=o;break;case"defaultValue":r=o;break;case"multiple":i=o;default:de(e,t,s,o,n,null)}t=a,n=r,e.multiple=!!i,t!=null?br(e,!!i,t,!1):n!=null&&br(e,!!i,n,!0);return;case"textarea":Yt("invalid",e),a=s=i=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":i=o;break;case"defaultValue":s=o;break;case"children":a=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error($(91));break;default:de(e,t,r,o,n,null)}Zv(e,i,s,a);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:de(e,t,l,i,n,null)}return;case"dialog":Yt("beforetoggle",e),Yt("toggle",e),Yt("cancel",e),Yt("close",e);break;case"iframe":case"object":Yt("load",e);break;case"video":case"audio":for(i=0;i<ml.length;i++)Yt(ml[i],e);break;case"image":Yt("error",e),Yt("load",e);break;case"details":Yt("toggle",e);break;case"embed":case"source":case"link":Yt("error",e),Yt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error($(137,t));default:de(e,t,c,i,n,null)}return;default:if(Zp(t)){for(h in n)n.hasOwnProperty(h)&&(i=n[h],i!==void 0&&Lp(e,t,h,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&de(e,t,o,i,n,null))}function PE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,a=null,r=null,o=null,l=null,c=null,h=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":l=d;default:i.hasOwnProperty(p)||de(e,t,p,null,i,d)}}for(var u in i){var p=i[u];if(d=n[u],i.hasOwnProperty(u)&&(p!=null||d!=null))switch(u){case"type":a=p;break;case"name":s=p;break;case"checked":c=p;break;case"defaultChecked":h=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error($(137,t));break;default:p!==d&&de(e,t,u,p,i,d)}}ip(e,r,o,l,c,h,a,s);return;case"select":p=r=o=u=null;for(a in n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case"value":break;case"multiple":p=l;default:i.hasOwnProperty(a)||de(e,t,a,null,i,l)}for(s in i)if(a=i[s],l=n[s],i.hasOwnProperty(s)&&(a!=null||l!=null))switch(s){case"value":u=a;break;case"defaultValue":o=a;break;case"multiple":r=a;default:a!==l&&de(e,t,s,a,i,l)}t=o,n=r,i=p,u!=null?br(e,!!n,u,!1):!!i!=!!n&&(t!=null?br(e,!!n,t,!0):br(e,!!n,n?[]:"",!1));return;case"textarea":p=u=null;for(o in n)if(s=n[o],n.hasOwnProperty(o)&&s!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:de(e,t,o,null,i,s)}for(r in i)if(s=i[r],a=n[r],i.hasOwnProperty(r)&&(s!=null||a!=null))switch(r){case"value":u=s;break;case"defaultValue":p=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error($(91));break;default:s!==a&&de(e,t,r,s,i,a)}Yv(e,u,p);return;case"option":for(var _ in n)if(u=n[_],n.hasOwnProperty(_)&&u!=null&&!i.hasOwnProperty(_))switch(_){case"selected":e.selected=!1;break;default:de(e,t,_,null,i,u)}for(l in i)if(u=i[l],p=n[l],i.hasOwnProperty(l)&&u!==p&&(u!=null||p!=null))switch(l){case"selected":e.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:de(e,t,l,u,i,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var M in n)u=n[M],n.hasOwnProperty(M)&&u!=null&&!i.hasOwnProperty(M)&&de(e,t,M,null,i,u);for(c in i)if(u=i[c],p=n[c],i.hasOwnProperty(c)&&u!==p&&(u!=null||p!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(u!=null)throw Error($(137,t));break;default:de(e,t,c,u,i,p)}return;default:if(Zp(t)){for(var m in n)u=n[m],n.hasOwnProperty(m)&&u!==void 0&&!i.hasOwnProperty(m)&&Lp(e,t,m,void 0,i,u);for(h in i)u=i[h],p=n[h],!i.hasOwnProperty(h)||u===p||u===void 0&&p===void 0||Lp(e,t,h,u,i,p);return}}for(var f in n)u=n[f],n.hasOwnProperty(f)&&u!=null&&!i.hasOwnProperty(f)&&de(e,t,f,null,i,u);for(d in i)u=i[d],p=n[d],!i.hasOwnProperty(d)||u===p||u==null&&p==null||de(e,t,d,u,i,p)}function cv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function BE(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var s=n[i],a=s.transferSize,r=s.initiatorType,o=s.duration;if(a&&o&&cv(r)){for(r=0,o=s.responseEnd,i+=1;i<n.length;i++){var l=n[i],c=l.startTime;if(c>o)break;var h=l.transferSize,d=l.initiatorType;h&&cv(d)&&(l=l.responseEnd,r+=h*(l<o?1:(o-c)/(l-c)))}if(--i,t+=8*(a+r)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Up=null,Op=null;function Au(e){return e.nodeType===9?e:e.ownerDocument}function uv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $x(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ip(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function zE(){var e=window.event;return e&&e.type==="popstate"?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var tS=typeof setTimeout=="function"?setTimeout:void 0,FE=typeof clearTimeout=="function"?clearTimeout:void 0,hv=typeof Promise=="function"?Promise:void 0,VE=typeof queueMicrotask=="function"?queueMicrotask:typeof hv<"u"?function(e){return hv.resolve(null).then(e).catch(HE)}:tS;function HE(e){setTimeout(function(){throw e})}function ea(e){return e==="head"}function fv(e,t){var n=t,i=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(s),Fr(t);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")al(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,al(n);for(var a=n.firstChild;a;){var r=a.nextSibling,o=a.nodeName;a[El]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&a.rel.toLowerCase()==="stylesheet"||n.removeChild(a),a=r}}else n==="body"&&al(e.ownerDocument.body);n=s}while(n);Fr(t)}function dv(e,t){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Pp(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pp(n),Yp(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function GE(e,t,n,i){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[El])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(a=e.getAttribute("rel"),a==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(a!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(a=e.getAttribute("src"),(a!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var a=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===a)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function kE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=mi(e.nextSibling),e===null))return null;return e}function eS(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=mi(e.nextSibling),e===null))return null;return e}function Bp(e){return e.data==="$?"||e.data==="$~"}function zp(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XE(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function mi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Fp=null;function pv(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return mi(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function mv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function nS(e,t,n){switch(t=Au(n),e){case"html":if(e=t.documentElement,!e)throw Error($(452));return e;case"head":if(e=t.head,!e)throw Error($(453));return e;case"body":if(e=t.body,!e)throw Error($(454));return e;default:throw Error($(451))}}function al(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Yp(e)}var gi=new Map,gv=new Set;function wu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ds=se.d;se.d={f:WE,r:qE,D:YE,C:ZE,L:KE,m:JE,X:QE,S:jE,M:$E};function WE(){var e=ds.f(),t=Xu();return e||t}function qE(e){var t=Hr(e);t!==null&&t.tag===5&&t.type==="form"?Ky(t):ds.r(e)}var Wr=typeof document>"u"?null:document;function iS(e,t,n){var i=Wr;if(i&&typeof t=="string"&&t){var s=hi(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),gv.has(s)||(gv.add(s),e={rel:e,crossOrigin:n,href:t},i.querySelector(s)===null&&(t=i.createElement("link"),cn(t,"link",e),tn(t),i.head.appendChild(t)))}}function YE(e){ds.D(e),iS("dns-prefetch",e,null)}function ZE(e,t){ds.C(e,t),iS("preconnect",e,t)}function KE(e,t,n){ds.L(e,t,n);var i=Wr;if(i&&e&&t){var s='link[rel="preload"][as="'+hi(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+hi(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+hi(n.imageSizes)+'"]')):s+='[href="'+hi(e)+'"]';var a=s;switch(t){case"style":a=zr(e);break;case"script":a=qr(e)}gi.has(a)||(e=Ae({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),gi.set(a,e),i.querySelector(s)!==null||t==="style"&&i.querySelector(Dl(a))||t==="script"&&i.querySelector(Nl(a))||(t=i.createElement("link"),cn(t,"link",e),tn(t),i.head.appendChild(t)))}}function JE(e,t){ds.m(e,t);var n=Wr;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+hi(i)+'"][href="'+hi(e)+'"]',a=s;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=qr(e)}if(!gi.has(a)&&(e=Ae({rel:"modulepreload",href:e},t),gi.set(a,e),n.querySelector(s)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Nl(a)))return}i=n.createElement("link"),cn(i,"link",e),tn(i),n.head.appendChild(i)}}}function jE(e,t,n){ds.S(e,t,n);var i=Wr;if(i&&e){var s=Mr(i).hoistableStyles,a=zr(e);t=t||"default";var r=s.get(a);if(!r){var o={loading:0,preload:null};if(r=i.querySelector(Dl(a)))o.loading=5;else{e=Ae({rel:"stylesheet",href:e,"data-precedence":t},n),(n=gi.get(a))&&Lm(e,n);var l=r=i.createElement("link");tn(l),cn(l,"link",e),l._p=new Promise(function(c,h){l.onload=c,l.onerror=h}),l.addEventListener("load",function(){o.loading|=1}),l.addEventListener("error",function(){o.loading|=2}),o.loading|=4,$c(r,t,i)}r={type:"stylesheet",instance:r,count:1,state:o},s.set(a,r)}}}function QE(e,t){ds.X(e,t);var n=Wr;if(n&&e){var i=Mr(n).hoistableScripts,s=qr(e),a=i.get(s);a||(a=n.querySelector(Nl(s)),a||(e=Ae({src:e,async:!0},t),(t=gi.get(s))&&Um(e,t),a=n.createElement("script"),tn(a),cn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function $E(e,t){ds.M(e,t);var n=Wr;if(n&&e){var i=Mr(n).hoistableScripts,s=qr(e),a=i.get(s);a||(a=n.querySelector(Nl(s)),a||(e=Ae({src:e,async:!0,type:"module"},t),(t=gi.get(s))&&Um(e,t),a=n.createElement("script"),tn(a),cn(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},i.set(s,a))}}function _v(e,t,n,i){var s=(s=Hs.current)?wu(s):null;if(!s)throw Error($(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=zr(n.href),n=Mr(s).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=zr(n.href);var a=Mr(s).hoistableStyles,r=a.get(e);if(r||(s=s.ownerDocument||s,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},a.set(e,r),(a=s.querySelector(Dl(e)))&&!a._p&&(r.instance=a,r.state.loading=5),gi.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},gi.set(e,n),a||tT(s,e,n,r.state))),t&&i===null)throw Error($(528,""));return r}if(t&&i!==null)throw Error($(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=qr(n),n=Mr(s).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error($(444,e))}}function zr(e){return'href="'+hi(e)+'"'}function Dl(e){return'link[rel="stylesheet"]['+e+"]"}function sS(e){return Ae({},e,{"data-precedence":e.precedence,precedence:null})}function tT(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),cn(t,"link",n),tn(t),e.head.appendChild(t))}function qr(e){return'[src="'+hi(e)+'"]'}function Nl(e){return"script[async]"+e}function vv(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+hi(n.href)+'"]');if(i)return t.instance=i,tn(i),i;var s=Ae({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),tn(i),cn(i,"style",s),$c(i,n.precedence,e),t.instance=i;case"stylesheet":s=zr(n.href);var a=e.querySelector(Dl(s));if(a)return t.state.loading|=4,t.instance=a,tn(a),a;i=sS(n),(s=gi.get(s))&&Lm(i,s),a=(e.ownerDocument||e).createElement("link"),tn(a);var r=a;return r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(a,"link",i),t.state.loading|=4,$c(a,n.precedence,e),t.instance=a;case"script":return a=qr(n.src),(s=e.querySelector(Nl(a)))?(t.instance=s,tn(s),s):(i=n,(s=gi.get(a))&&(i=Ae({},n),Um(i,s)),e=e.ownerDocument||e,s=e.createElement("script"),tn(s),cn(s,"link",i),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error($(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,$c(i,n.precedence,e));return t.instance}function $c(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=i.length?i[i.length-1]:null,a=s,r=0;r<i.length;r++){var o=i[r];if(o.dataset.precedence===t)a=o;else if(a!==s)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Lm(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Um(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var tu=null;function yv(e,t,n){if(tu===null){var i=new Map,s=tu=new Map;s.set(n,i)}else s=tu,i=s.get(n),i||(i=new Map,s.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var a=n[s];if(!(a[El]||a[rn]||e==="link"&&a.getAttribute("rel")==="stylesheet")&&a.namespaceURI!=="http://www.w3.org/2000/svg"){var r=a.getAttribute(t)||"";r=e+r;var o=i.get(r);o?o.push(a):i.set(r,[a])}}return i}function xv(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function eT(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function aS(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function nT(e,t,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=zr(i.href),a=t.querySelector(Dl(s));if(a){t=a._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Cu.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,tn(a);return}a=t.ownerDocument||t,i=sS(i),(s=gi.get(s))&&Lm(i,s),a=a.createElement("link"),tn(a);var r=a;r._p=new Promise(function(o,l){r.onload=o,r.onerror=l}),cn(a,"link",i),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Cu.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var qd=0;function iT(e,t){return e.stylesheets&&e.count===0&&eu(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend){var a=e.unsuspend;e.unsuspend=null,a()}},6e4+t);0<e.imgBytes&&qd===0&&(qd=62500*BE());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&eu(e,e.stylesheets),e.unsuspend)){var a=e.unsuspend;e.unsuspend=null,a()}},(e.imgBytes>qd?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(s)}}:null}function Cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)eu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ru=null;function eu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ru=new Map,t.forEach(sT,e),Ru=null,Cu.call(e))}function sT(e,t){if(!(t.state.loading&4)){var n=Ru.get(e);if(n)var i=n.get(null);else{n=new Map,Ru.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<s.length;a++){var r=s[a];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),i=r)}i&&n.set(null,i)}s=t.instance,r=s.getAttribute("data-precedence"),a=n.get(r)||i,a===i&&n.set(null,s),n.set(r,s),this.count++,i=Cu.bind(this),s.addEventListener("load",i),s.addEventListener("error",i),a?a.parentNode.insertBefore(s,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var _l={$$typeof:ns,Provider:null,Consumer:null,_currentValue:wa,_currentValue2:wa,_threadCount:0};function aT(e,t,n,i,s,a,r,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vd(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vd(0),this.hiddenUpdates=vd(null),this.identifierPrefix=i,this.onUncaughtError=s,this.onCaughtError=a,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function rS(e,t,n,i,s,a,r,o,l,c,h,d){return e=new aT(e,t,n,r,l,c,h,d,o),t=1,a===!0&&(t|=24),a=Xn(3,null,null,t),e.current=a,a.stateNode=e,t=am(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:i,isDehydrated:n,cache:t},lm(a),e}function oS(e){return e?(e=vr,e):vr}function lS(e,t,n,i,s,a){s=oS(s),i.context===null?i.context=s:i.pendingContext=s,i=ks(t),i.payload={element:n},a=a===void 0?null:a,a!==null&&(i.callback=a),n=Xs(e,i,t),n!==null&&(On(n,e,t),jo(n,e,t))}function Sv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Om(e,t){Sv(e,t),(e=e.alternate)&&Sv(e,t)}function cS(e){if(e.tag===13||e.tag===31){var t=Va(e,67108864);t!==null&&On(t,e,67108864),Om(e,67108864)}}function Mv(e){if(e.tag===13||e.tag===31){var t=Kn();t=Wp(t);var n=Va(e,t);n!==null&&On(n,e,t),Om(e,t)}}var Du=!0;function rT(e,t,n,i){var s=Nt.T;Nt.T=null;var a=se.p;try{se.p=2,Im(e,t,n,i)}finally{se.p=a,Nt.T=s}}function oT(e,t,n,i){var s=Nt.T;Nt.T=null;var a=se.p;try{se.p=8,Im(e,t,n,i)}finally{se.p=a,Nt.T=s}}function Im(e,t,n,i){if(Du){var s=Vp(i);if(s===null)Xd(e,t,i,Nu,n),bv(e,i);else if(cT(s,e,t,n,i))i.stopPropagation();else if(bv(e,i),t&4&&-1<lT.indexOf(e)){for(;s!==null;){var a=Hr(s);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var r=Ea(a.pendingLanes);if(r!==0){var o=a;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var l=1<<31-Zn(r);o.entanglements[1]|=l,r&=~l}Hi(a),(ie&6)===0&&(xu=qn()+500,Rl(0,!1))}}break;case 31:case 13:o=Va(a,2),o!==null&&On(o,a,2),Xu(),Om(a,2)}if(a=Vp(i),a===null&&Xd(e,t,i,Nu,n),a===s)break;s=a}s!==null&&i.stopPropagation()}else Xd(e,t,i,null,n)}}function Vp(e){return e=Kp(e),Pm(e)}var Nu=null;function Pm(e){if(Nu=null,e=fr(e),e!==null){var t=xl(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Rv(t),e!==null)return e;e=null}else if(n===31){if(e=Dv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nu=e,null}function uS(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kb()){case Ov:return 2;case Iv:return 8;case ru:case Jb:return 32;case Pv:return 268435456;default:return 32}default:return 32}}var Hp=!1,Ys=null,Zs=null,Ks=null,vl=new Map,yl=new Map,Is=[],lT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function bv(e,t){switch(e){case"focusin":case"focusout":Ys=null;break;case"dragenter":case"dragleave":Zs=null;break;case"mouseover":case"mouseout":Ks=null;break;case"pointerover":case"pointerout":vl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yl.delete(t.pointerId)}}function Vo(e,t,n,i,s,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[s]},t!==null&&(t=Hr(t),t!==null&&cS(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function cT(e,t,n,i,s){switch(t){case"focusin":return Ys=Vo(Ys,e,t,n,i,s),!0;case"dragenter":return Zs=Vo(Zs,e,t,n,i,s),!0;case"mouseover":return Ks=Vo(Ks,e,t,n,i,s),!0;case"pointerover":var a=s.pointerId;return vl.set(a,Vo(vl.get(a)||null,e,t,n,i,s)),!0;case"gotpointercapture":return a=s.pointerId,yl.set(a,Vo(yl.get(a)||null,e,t,n,i,s)),!0}return!1}function hS(e){var t=fr(e.target);if(t!==null){var n=xl(t);if(n!==null){if(t=n.tag,t===13){if(t=Rv(n),t!==null){e.blockedOn=t,r_(e.priority,function(){Mv(n)});return}}else if(t===31){if(t=Dv(n),t!==null){e.blockedOn=t,r_(e.priority,function(){Mv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function nu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Vp(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);ap=i,n.target.dispatchEvent(i),ap=null}else return t=Hr(n),t!==null&&cS(t),e.blockedOn=n,!1;t.shift()}return!0}function Ev(e,t,n){nu(e)&&n.delete(t)}function uT(){Hp=!1,Ys!==null&&nu(Ys)&&(Ys=null),Zs!==null&&nu(Zs)&&(Zs=null),Ks!==null&&nu(Ks)&&(Ks=null),vl.forEach(Ev),yl.forEach(Ev)}function Vc(e,t){e.blockedOn===t&&(e.blockedOn=null,Hp||(Hp=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,uT)))}var Hc=null;function Tv(e){Hc!==e&&(Hc=e,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,function(){Hc===e&&(Hc=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],s=e[t+2];if(typeof i!="function"){if(Pm(i||n)===null)continue;break}var a=Hr(n);a!==null&&(e.splice(t,3),t-=3,Sp(a,{pending:!0,data:s,method:n.method,action:i},i,s))}}))}function Fr(e){function t(l){return Vc(l,e)}Ys!==null&&Vc(Ys,e),Zs!==null&&Vc(Zs,e),Ks!==null&&Vc(Ks,e),vl.forEach(t),yl.forEach(t);for(var n=0;n<Is.length;n++){var i=Is[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Is.length&&(n=Is[0],n.blockedOn===null);)hS(n),n.blockedOn===null&&Is.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var s=n[i],a=n[i+1],r=s[In]||null;if(typeof a=="function")r||Tv(n);else if(r){var o=null;if(a&&a.hasAttribute("formAction")){if(s=a,r=a[In]||null)o=r.formAction;else if(Pm(s)!==null)continue}else o=r.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),Tv(n)}}}function fS(){function e(a){a.canIntercept&&a.info==="react-transition"&&a.intercept({handler:function(){return new Promise(function(r){return s=r})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var a=navigation.currentEntry;a&&a.url!=null&&navigation.navigate(a.url,{state:a.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function Bm(e){this._internalRoot=e}Yu.prototype.render=Bm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));var n=t.current,i=Kn();lS(n,i,e,t,null,null)};Yu.prototype.unmount=Bm.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lS(e.current,2,null,e,null,null),Xu(),t[Vr]=null}};function Yu(e){this._internalRoot=e}Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Hv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Is.length&&t!==0&&t<Is[n].priority;n++);Is.splice(n,0,e),n===0&&hS(e)}};var Av=wv.version;if(Av!=="19.2.0")throw Error($(527,Av,"19.2.0"));se.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=Gb(t),e=e!==null?Nv(e):null,e=e===null?null:e.stateNode,e};var hT={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:Nt,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ho=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ho.isDisabled&&Ho.supportsFiber))try{Sl=Ho.inject(hT),Yn=Ho}catch{}var Ho;Zu.createRoot=function(e,t){if(!Cv(e))throw Error($(299));var n=!1,i="",s=ix,a=sx,r=ax;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=rS(e,1,!1,null,null,n,i,null,s,a,r,fS),e[Vr]=t.current,Nm(e),new Bm(t)};Zu.hydrateRoot=function(e,t,n){if(!Cv(e))throw Error($(299));var i=!1,s="",a=ix,r=sx,o=ax,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),t=rS(e,1,!0,t,n??null,i,s,l,a,r,o,fS),t.context=oS(null),n=t.current,i=Kn(),i=Wp(i),s=ks(i),s.callback=null,Xs(n,s,i),n=i,t.current.lanes=n,bl(t,n),Hi(t),e[Vr]=t.current,Nm(e),new Yu(t)};Zu.version="19.2.0"});var gS=ws((wR,mS)=>{"use strict";function pS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pS)}catch(e){console.error(e)}}pS(),mS.exports=dS()});var A=Qf(Do(),1),ob=Qf(gS(),1);var Ku=new Map,Ju=new Map;function zm(e){if(Ku.has(e))return Ku.get(e);let t=new AbortController,n=setTimeout(()=>t.abort(),12e4),i=fetch(e,{cache:"force-cache",signal:t.signal}).then(s=>{if(!s.ok)throw new Error("Model download failed");return s.arrayBuffer()}).catch(s=>{throw Ku.delete(e),s}).finally(()=>clearTimeout(n));return Ku.set(e,i),i}function fT(e){if(Ju.has(e))return Ju.get(e).promise;let t=new Image;t.decoding="async",t.fetchPriority="low";let n,i=new Promise((s,a)=>{n=setTimeout(()=>a(new Error("Image download timed out")),9e4),t.onload=()=>s(),t.onerror=()=>a(new Error("Image download failed")),t.src=e}).catch(s=>{throw Ju.delete(e),s}).finally(()=>{clearTimeout(n),t.onload=null,t.onerror=null});return Ju.set(e,{image:t,promise:i}),i}function dT(e){let t=new Set,n=new Set;for(let i of e.projects){for(let s of i.gallery||[])s.src&&t.add(s.src);i.modelUrl&&n.add(i.modelUrl)}e.profile.photo&&t.add(e.profile.photo);for(let i of e.experiences||[])i.image&&t.add(i.image);return[...t].map(i=>({kind:"image",url:i})).concat([...n].map(i=>({kind:"model",url:i})))}function _S(e){let t=!1,n=!1,i=null,s=dT(e);async function a(){if(!(t||n)){n=!0;try{for(let o of[...s]){if(t||navigator.onLine===!1)break;try{await(o.kind==="model"?zm(o.url):fT(o.url)),s.splice(s.indexOf(o),1)}catch{}}}finally{n=!1}}}function r(){t||("requestIdleCallback"in window?i=window.requestIdleCallback(a,{timeout:2e3}):i=setTimeout(a,300))}return document.readyState==="complete"?r():window.addEventListener("load",r,{once:!0}),window.addEventListener("online",r),()=>{t=!0,window.removeEventListener("load",r),window.removeEventListener("online",r),"cancelIdleCallback"in window?window.cancelIdleCallback(i):clearTimeout(i)}}var Ft=Qf(Do(),1);var pa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ma={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},HS=0,mg=1,GS=2;var ac=1,kS=2,So=3,ga=0,Cn=1,vi=2,Wi=0,Mo=1,gg=2,_g=3,vg=4,XS=5;var Ka=100,WS=101,qS=102,YS=103,ZS=104,KS=200,JS=201,jS=202,QS=203,yg=204,xg=205,$S=206,tM=207,eM=208,nM=209,iM=210,sM=211,aM=212,rM=213,oM=214,vh=0,yh=1,xh=2,lo=3,Sh=4,Mh=5,bh=6,Eh=7,Sg=0,lM=1,cM=2,Ri=0,Mg=1,bg=2,Eg=3,Tg=4,Ag=5,wg=6,Cg=7;var Rg=300,_a=301,Ja=302,Kh=303,Jh=304,rc=306,Th=1e3,ki=1001,Ah=1002,sn=1003,uM=1004;var oc=1005;var un=1006,jh=1007;var va=1008;var Vn=1009,Dg=1010,Ng=1011,bo=1012,Qh=1013,Di=1014,Ni=1015,Li=1016,$h=1017,tf=1018,Eo=1020,Lg=35902,Ug=35899,Og=1021,Ig=1022,yi=1023,Xi=1026,ya=1027,Pg=1028,ef=1029,xa=1030,nf=1031;var sf=1033,lc=33776,cc=33777,uc=33778,hc=33779,af=35840,rf=35841,of=35842,lf=35843,cf=36196,uf=37492,hf=37496,ff=37488,df=37489,fc=37490,pf=37491,mf=37808,gf=37809,_f=37810,vf=37811,yf=37812,xf=37813,Sf=37814,Mf=37815,bf=37816,Ef=37817,Tf=37818,Af=37819,wf=37820,Cf=37821,Rf=36492,Df=36494,Nf=36495,Lf=36283,Uf=36284,dc=36285,Of=36286;var zl=2300,wh=2301,gh=2302,rg=2303,og=2400,lg=2401,cg=2402;var hM=3200;var If=0,fM=1,Ms="",An="srgb",Fl="srgb-linear",Vl="linear",oe="srgb";var _h=7680;var dM=519,pM=512,mM=513,gM=514,Pf=515,_M=516,vM=517,Bf=518,yM=519,xM=35044;var Bg="300 es",wi=2e3,co=2001;function pT(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function mT(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Hl(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function SM(){let e=Hl("canvas");return e.style.display="block",e}var vS={},uo=null;function zg(...e){let t="THREE."+e.shift();uo?uo("log",t,...e):console.log(t,...e)}function MM(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Dt(...e){e=MM(e);let t="THREE."+e.shift();if(uo)uo("warn",t,...e);else{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function Lt(...e){e=MM(e);let t="THREE."+e.shift();if(uo)uo("error",t,...e);else{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Ya(...e){let t=e.join(" ");t in vS||(vS[t]=!0,Dt(...e))}function bM(e,t,n){return new Promise(function(i,s){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:i()}}setTimeout(a,n)})}var EM={[vh]:yh,[xh]:bh,[Sh]:Eh,[lo]:Mh,[yh]:vh,[bh]:xh,[Eh]:Sh,[Mh]:lo},Ci=class{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let a=s.indexOf(n);a!==-1&&s.splice(a,1)}}dispatchEvent(t){let n=this._listeners;if(n===void 0)return;let i=n[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,t);t.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yS=1234567,Pl=Math.PI/180,ho=180/Math.PI;function To(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[e&255]+pn[e>>8&255]+pn[e>>16&255]+pn[e>>24&255]+"-"+pn[t&255]+pn[t>>8&255]+"-"+pn[t>>16&15|64]+pn[t>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Xt(e,t,n){return Math.max(t,Math.min(n,e))}function Fg(e,t){return(e%t+t)%t}function gT(e,t,n,i,s){return i+(e-t)*(s-i)/(n-t)}function _T(e,t,n){return e!==t?(n-e)/(t-e):0}function Bl(e,t,n){return(1-n)*e+n*t}function vT(e,t,n,i){return Bl(e,t,1-Math.exp(-n*i))}function yT(e,t=1){return t-Math.abs(Fg(e,t*2)-t)}function xT(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function ST(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function MT(e,t){return e+Math.floor(Math.random()*(t-e+1))}function bT(e,t){return e+Math.random()*(t-e)}function ET(e){return e*(.5-Math.random())}function TT(e){e!==void 0&&(yS=e);let t=yS+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function AT(e){return e*Pl}function wT(e){return e*ho}function CT(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function RT(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function DT(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function NT(e,t,n,i,s){let a=Math.cos,r=Math.sin,o=a(n/2),l=r(n/2),c=a((t+i)/2),h=r((t+i)/2),d=a((t-i)/2),u=r((t-i)/2),p=a((i-t)/2),_=r((i-t)/2);switch(s){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*_,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*_,o*c);break;case"ZYZ":e.set(l*_,l*p,o*h,o*c);break;default:Dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ro(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vg={DEG2RAD:Pl,RAD2DEG:ho,generateUUID:To,clamp:Xt,euclideanModulo:Fg,mapLinear:gT,inverseLerp:_T,lerp:Bl,damp:vT,pingpong:yT,smoothstep:xT,smootherstep:ST,randInt:MT,randFloat:bT,randFloatSpread:ET,seededRandom:TT,degToRad:AT,radToDeg:wT,isPowerOfTwo:CT,ceilPowerOfTwo:RT,floorPowerOfTwo:DT,setQuaternionFromProperEuler:NT,normalize:Tn,denormalize:ro},Wg=class Wg{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){let i=Math.cos(n),s=Math.sin(n),a=this.x-t.x,r=this.y-t.y;return this.x=a*i-r*s+t.x,this.y=a*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wg.prototype.isVector2=!0;var Ut=Wg,ei=class{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=a[r+0],p=a[r+1],_=a[r+2],M=a[r+3];if(d!==M||l!==u||c!==p||h!==_){let m=l*u+c*p+h*_+d*M;m<0&&(u=-u,p=-p,_=-_,M=-M,m=-m);let f=1-o;if(m<.9995){let g=Math.acos(m),S=Math.sin(g);f=Math.sin(f*g)/S,o=Math.sin(o*g)/S,l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+M*o}else{l=l*f+u*o,c=c*f+p*o,h=h*f+_*o,d=d*f+M*o;let g=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=g,c*=g,h*=g,d*=g}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],u=a[r+1],p=a[r+2],_=a[r+3];return t[n]=o*_+h*d+l*p-c*u,t[n+1]=l*_+h*u+c*d-o*p,t[n+2]=c*_+h*p+o*u-l*d,t[n+3]=h*_-o*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){let i=t._x,s=t._y,a=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),u=l(i/2),p=l(s/2),_=l(a/2);switch(r){case"XYZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d+u*p*_;break;case"YZX":this._x=u*h*d+c*p*_,this._y=c*p*d+u*h*_,this._z=c*h*_-u*p*d,this._w=c*h*d-u*p*_;break;case"XZY":this._x=u*h*d-c*p*_,this._y=c*p*d-u*h*_,this._z=c*h*_+u*p*d,this._w=c*h*d+u*p*_;break;default:Dt("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){let i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let n=t.elements,i=n[0],s=n[4],a=n[8],r=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){let p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,n){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,a=t._z,r=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-n;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+a*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){let t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(n),a*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},qg=class qg{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(xS.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(xS.setFromAxisAngle(t,n))}applyMatrix3(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[3]*i+a[6]*s,this.y=a[1]*n+a[4]*i+a[7]*s,this.z=a[2]*n+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=t.elements,r=1/(a[3]*n+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*n+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*n+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(t){let n=this.x,i=this.y,s=this.z,a=t.x,r=t.y,o=t.z,l=t.w,c=2*(r*s-o*i),h=2*(o*n-a*s),d=2*(a*i-r*n);return this.x=n+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let n=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s,this.y=a[1]*n+a[5]*i+a[9]*s,this.z=a[2]*n+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this.z=Xt(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this.z=Xt(this.z,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){let i=t.x,s=t.y,a=t.z,r=n.x,o=n.y,l=n.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(t){let n=t.lengthSq();if(n===0)return this.set(0,0,0);let i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fm.copy(this).projectOnVector(t),this.sub(Fm)}reflect(t){return this.sub(Fm.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(t)/n;return Math.acos(Xt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){let s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){let n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qg.prototype.isVector3=!0;var B=qg,Fm=new B,xS=new ei,Yg=class Yg{constructor(t,n,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c)}set(t,n,i,s,a,r,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=n,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],p=i[5],_=i[8],M=s[0],m=s[3],f=s[6],g=s[1],S=s[4],v=s[7],E=s[2],T=s[5],C=s[8];return a[0]=r*M+o*g+l*E,a[3]=r*m+o*S+l*T,a[6]=r*f+o*v+l*C,a[1]=c*M+h*g+d*E,a[4]=c*m+h*S+d*T,a[7]=c*f+h*v+d*C,a[2]=u*M+p*g+_*E,a[5]=u*m+p*S+_*T,a[8]=u*f+p*v+_*C,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return n*r*h-n*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*r-o*c,u=o*l-h*a,p=c*a-r*l,_=n*d+i*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return t[0]=d*M,t[1]=(s*c-h*i)*M,t[2]=(o*i-s*r)*M,t[3]=u*M,t[4]=(h*n-s*l)*M,t[5]=(s*a-o*n)*M,t[6]=p*M,t[7]=(i*l-c*n)*M,t[8]=(r*n-i*a)*M,this}transpose(){let t,n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+t,-s*c,s*l,-s*(-c*r+l*o)+o+n,0,0,1),this}scale(t,n){return Ya("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vm.makeScale(t,n)),this}rotate(t){return Ya("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vm.makeRotation(-t)),this}translate(t,n){return Ya("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vm.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Yg.prototype.isMatrix3=!0;var Ot=Yg,Vm=new Ot,SS=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),MS=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function LT(){let e={enabled:!0,workingColorSpace:Fl,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===oe&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===oe&&(s.r=oo(s.r),s.g=oo(s.g),s.b=oo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ms?Vl:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ya("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ya("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,a)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Fl]:{primaries:t,whitePoint:i,transfer:Vl,toXYZ:SS,fromXYZ:MS,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:SS,fromXYZ:MS,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),e}var jt=LT();function xs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function oo(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Yr,Ch=class{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Yr===void 0&&(Yr=Hl("canvas")),Yr.width=t.width,Yr.height=t.height;let s=Yr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Yr}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let n=Hl("canvas");n.width=t.width,n.height=t.height;let i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=xs(a[r]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){let n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xs(n[i]/255)*255):n[i]=xs(n[i]);return{data:n,width:t.width,height:t.height}}else return Dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},UT=0,fo=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=To(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Hm(s[r].image)):a.push(Hm(s[r]))}else a=Hm(s);i.url=a}return n||(t.images[this.uuid]=i),i}};function Hm(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Ch.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Dt("Texture: Unable to serialize Texture."),{})}var OT=0,Gm=new B,Bn=class e extends Ci{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,i=ki,s=ki,a=un,r=va,o=yi,l=Vn,c=e.DEFAULT_ANISOTROPY,h=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=To(),this.name="",this.source=new fo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Gm).x}get height(){return this.source.getSize(Gm).y}get depth(){return this.source.getSize(Gm).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let n in t){let i=t[n];if(i===void 0){Dt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Th:t.x=t.x-Math.floor(t.x);break;case ki:t.x=t.x<0?0:1;break;case Ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Th:t.y=t.y-Math.floor(t.y);break;case ki:t.y=t.y<0?0:1;break;case Ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Rg;Bn.DEFAULT_ANISOTROPY=1;var Zg=class Zg{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let n=this.x,i=this.y,s=this.z,a=this.w,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*n+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*n+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*n+r[7]*i+r[11]*s+r[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,a,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],_=l[9],M=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let S=(c+1)/2,v=(p+1)/2,E=(f+1)/2,T=(h+u)/4,C=(d+M)/4,x=(_+m)/4;return S>v&&S>E?S<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(S),s=T/i,a=C/i):v>E?v<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(v),i=T/s,a=x/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=C/a,s=x/a),this.set(i,s,a,n),this}let g=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(u-h)*(u-h));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(d-M)/g,this.z=(u-h)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Xt(this.x,t.x,n.x),this.y=Xt(this.y,t.y,n.y),this.z=Xt(this.z,t.z,n.z),this.w=Xt(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Xt(this.x,t,n),this.y=Xt(this.y,t,n),this.z=Xt(this.z,t,n),this.w=Xt(this.w,t,n),this}clampLength(t,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Xt(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zg.prototype.isVector4=!0;var Ne=Zg,Rh=class extends Ci{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Ne(0,0,t,n),this.scissorTest=!1,this.viewport=new Ne(0,0,t,n),this.textures=[];let s={width:t,height:n,depth:i.depth},a=new Bn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let n={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},t.textures[n].image);this.textures[n].source=new fo(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let n=t.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends Rh{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}},Gl=class extends Bn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dh=class extends Bn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Zh=class Zh{constructor(t,n,i,s,a,r,o,l,c,h,d,u,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,a,r,o,l,c,h,d,u,p,_,M,m)}set(t,n,i,s,a,r,o,l,c,h,d,u,p,_,M,m){let f=this.elements;return f[0]=t,f[4]=n,f[8]=i,f[12]=s,f[1]=a,f[5]=r,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=M,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zh().fromArray(this.elements)}copy(t){let n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){let n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){let n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let n=this.elements,i=t.elements,s=1/Zr.setFromMatrixColumn(t,0).length(),a=1/Zr.setFromMatrixColumn(t,1).length(),r=1/Zr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*r,n[9]=i[9]*r,n[10]=i[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){let n=this.elements,i=t.x,s=t.y,a=t.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(t.order==="XYZ"){let u=r*h,p=r*d,_=o*h,M=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=u-M*c,n[9]=-o*l,n[2]=M-u*c,n[6]=_+p*c,n[10]=r*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,_=c*h,M=c*d;n[0]=u+M*o,n[4]=_*o-p,n[8]=r*c,n[1]=r*d,n[5]=r*h,n[9]=-o,n[2]=p*o-_,n[6]=M+u*o,n[10]=r*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,_=c*h,M=c*d;n[0]=u-M*o,n[4]=-r*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=r*h,n[9]=M-u*o,n[2]=-r*c,n[6]=o,n[10]=r*l}else if(t.order==="ZYX"){let u=r*h,p=r*d,_=o*h,M=o*d;n[0]=l*h,n[4]=_*c-p,n[8]=u*c+M,n[1]=l*d,n[5]=M*c+u,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=r*l}else if(t.order==="YZX"){let u=r*l,p=r*c,_=o*l,M=o*c;n[0]=l*h,n[4]=M-u*d,n[8]=_*d+p,n[1]=d,n[5]=r*h,n[9]=-o*h,n[2]=-c*h,n[6]=p*d+_,n[10]=u-M*d}else if(t.order==="XZY"){let u=r*l,p=r*c,_=o*l,M=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=u*d+M,n[5]=r*h,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*h,n[10]=M*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(IT,t,PT)}lookAt(t,n,i){let s=this.elements;return Qn.subVectors(t,n),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),na.crossVectors(i,Qn),na.lengthSq()===0&&(Math.abs(i.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),na.crossVectors(i,Qn)),na.normalize(),ju.crossVectors(Qn,na),s[0]=na.x,s[4]=ju.x,s[8]=Qn.x,s[1]=na.y,s[5]=ju.y,s[9]=Qn.y,s[2]=na.z,s[6]=ju.z,s[10]=Qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){let i=t.elements,s=n.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],p=i[13],_=i[2],M=i[6],m=i[10],f=i[14],g=i[3],S=i[7],v=i[11],E=i[15],T=s[0],C=s[4],x=s[8],w=s[12],D=s[1],L=s[5],z=s[9],k=s[13],I=s[2],G=s[6],W=s[10],q=s[14],nt=s[3],Z=s[7],et=s[11],st=s[15];return a[0]=r*T+o*D+l*I+c*nt,a[4]=r*C+o*L+l*G+c*Z,a[8]=r*x+o*z+l*W+c*et,a[12]=r*w+o*k+l*q+c*st,a[1]=h*T+d*D+u*I+p*nt,a[5]=h*C+d*L+u*G+p*Z,a[9]=h*x+d*z+u*W+p*et,a[13]=h*w+d*k+u*q+p*st,a[2]=_*T+M*D+m*I+f*nt,a[6]=_*C+M*L+m*G+f*Z,a[10]=_*x+M*z+m*W+f*et,a[14]=_*w+M*k+m*q+f*st,a[3]=g*T+S*D+v*I+E*nt,a[7]=g*C+S*L+v*G+E*Z,a[11]=g*x+S*z+v*W+E*et,a[15]=g*w+S*k+v*q+E*st,this}multiplyScalar(t){let n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[12],r=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],_=t[3],M=t[7],m=t[11],f=t[15],g=l*p-c*u,S=o*p-c*d,v=o*u-l*d,E=r*p-c*h,T=r*u-l*h,C=r*d-o*h;return n*(M*g-m*S+f*v)-i*(_*g-m*E+f*T)+s*(_*S-M*E+f*C)-a*(_*v-M*T+m*C)}determinantAffine(){let t=this.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return n*(r*h-o*c)-i*(a*h-o*l)+s*(a*c-r*l)}transpose(){let t=this.elements,n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){let t=this.elements,n=t[0],i=t[1],s=t[2],a=t[3],r=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],_=t[12],M=t[13],m=t[14],f=t[15],g=n*o-i*r,S=n*l-s*r,v=n*c-a*r,E=i*l-s*o,T=i*c-a*o,C=s*c-a*l,x=h*M-d*_,w=h*m-u*_,D=h*f-p*_,L=d*m-u*M,z=d*f-p*M,k=u*f-p*m,I=g*k-S*z+v*L+E*D-T*w+C*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*k-l*z+c*L)*G,t[1]=(s*z-i*k-a*L)*G,t[2]=(M*C-m*T+f*E)*G,t[3]=(u*T-d*C-p*E)*G,t[4]=(l*D-r*k-c*w)*G,t[5]=(n*k-s*D+a*w)*G,t[6]=(m*v-_*C-f*S)*G,t[7]=(h*C-u*v+p*S)*G,t[8]=(r*z-o*D+c*x)*G,t[9]=(i*D-n*z-a*x)*G,t[10]=(_*T-M*v+f*g)*G,t[11]=(d*v-h*T-p*g)*G,t[12]=(o*w-r*L-l*x)*G,t[13]=(n*L-i*w+s*x)*G,t[14]=(M*S-_*E-m*g)*G,t[15]=(h*E-d*S+u*g)*G,this}scale(t){let n=this.elements,i=t.x,s=t.y,a=t.z;return n[0]*=i,n[4]*=s,n[8]*=a,n[1]*=i,n[5]*=s,n[9]*=a,n[2]*=i,n[6]*=s,n[10]*=a,n[3]*=i,n[7]*=s,n[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){let n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){let n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){let i=Math.cos(n),s=Math.sin(n),a=1-i,r=t.x,o=t.y,l=t.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,a,r){return this.set(1,i,a,0,t,1,r,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){let s=this.elements,a=n._x,r=n._y,o=n._z,l=n._w,c=a+a,h=r+r,d=o+o,u=a*c,p=a*h,_=a*d,M=r*h,m=r*d,f=o*d,g=l*c,S=l*h,v=l*d,E=i.x,T=i.y,C=i.z;return s[0]=(1-(M+f))*E,s[1]=(p+v)*E,s[2]=(_-S)*E,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(u+f))*T,s[6]=(m+g)*T,s[7]=0,s[8]=(_+S)*C,s[9]=(m-g)*C,s[10]=(1-(u+M))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),n.identity(),this;let r=Zr.set(s[0],s[1],s[2]).length(),o=Zr.set(s[4],s[5],s[6]).length(),l=Zr.set(s[8],s[9],s[10]).length();a<0&&(r=-r),Ei.copy(this);let c=1/r,h=1/o,d=1/l;return Ei.elements[0]*=c,Ei.elements[1]*=c,Ei.elements[2]*=c,Ei.elements[4]*=h,Ei.elements[5]*=h,Ei.elements[6]*=h,Ei.elements[8]*=d,Ei.elements[9]*=d,Ei.elements[10]*=d,n.setFromRotationMatrix(Ei),i.x=r,i.y=o,i.z=l,this}makePerspective(t,n,i,s,a,r,o=wi,l=!1){let c=this.elements,h=2*a/(n-t),d=2*a/(i-s),u=(n+t)/(n-t),p=(i+s)/(i-s),_,M;if(l)_=a/(r-a),M=r*a/(r-a);else if(o===wi)_=-(r+a)/(r-a),M=-2*r*a/(r-a);else if(o===co)_=-r/(r-a),M=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,a,r,o=wi,l=!1){let c=this.elements,h=2/(n-t),d=2/(i-s),u=-(n+t)/(n-t),p=-(i+s)/(i-s),_,M;if(l)_=1/(r-a),M=r/(r-a);else if(o===wi)_=-2/(r-a),M=-(r+a)/(r-a);else if(o===co)_=-1/(r-a),M=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){let i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Zh.prototype.isMatrix4=!0;var Ue=Zh,Zr=new B,Ei=new Ue,IT=new B(0,0,0),PT=new B(1,1,1),na=new B,ju=new B,Qn=new B,bS=new Ue,ES=new ei,Ss=class e{constructor(t=0,n=0,i=0,s=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){let s=t.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],p=s[10];switch(n){case"XYZ":this._y=Math.asin(Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Xt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return bS.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bS,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ES.setFromEuler(this),this.setFromQuaternion(ES,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ss.DEFAULT_ORDER="XYZ";var kl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},BT=0,TS=new B,Kr=new ei,ps=new Ue,Qu=new B,Ll=new B,zT=new B,FT=new ei,AS=new B(1,0,0),wS=new B(0,1,0),CS=new B(0,0,1),RS={type:"added"},VT={type:"removed"},Jr={type:"childadded",child:null},km={type:"childremoved",child:null},vn=class e extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=To(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new B,n=new Ss,i=new ei,s=new B(1,1,1);function a(){i.setFromEuler(n,!1)}function r(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Ot}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.multiply(Kr),this}rotateOnWorldAxis(t,n){return Kr.setFromAxisAngle(t,n),this.quaternion.premultiply(Kr),this}rotateX(t){return this.rotateOnAxis(AS,t)}rotateY(t){return this.rotateOnAxis(wS,t)}rotateZ(t){return this.rotateOnAxis(CS,t)}translateOnAxis(t,n){return TS.copy(t).applyQuaternion(this.quaternion),this.position.add(TS.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(AS,t)}translateY(t){return this.translateOnAxis(wS,t)}translateZ(t){return this.translateOnAxis(CS,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ps.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Qu.copy(t):Qu.set(t,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ll.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ps.lookAt(Ll,Qu,this.up):ps.lookAt(Qu,Ll,this.up),this.quaternion.setFromRotationMatrix(ps),s&&(ps.extractRotation(s.matrixWorld),Kr.setFromRotationMatrix(ps),this.quaternion.premultiply(Kr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(RS),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(VT),km.child=t,this.dispatchEvent(km),km.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ps.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ps.multiply(t.parent.matrixWorld)),t.applyMatrix4(ps),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(RS),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(t,n);if(r!==void 0)return r}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,t,zT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ll,FT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let n=t.x,i=t.y,s=t.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(t){let n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];a(t.shapes,d)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(t.materials,this.material[l]));s.material=o}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(t.animations,l))}}if(n){let o=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=s,i;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};vn.DEFAULT_UP=new B(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qa=class extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}},HT={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let n=this._hand;if(n)for(let i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(let M of t.hand.values()){let m=n.getJointPose(M,i),f=this._getHandJoint(c,M);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&u>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(a=n.getPose(t.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HT)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){let i=new qa;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}},TM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ia={h:0,s:0,l:0},$u={h:0,s:0,l:0};function Xm(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Gt=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,jt.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=jt.workingColorSpace){if(t=Fg(t,1),n=Xt(n,0,1),i=Xt(i,0,1),n===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+n):i+n-i*n,r=2*i-a;this.r=Xm(r,a,t+1/3),this.g=Xm(r,a,t),this.b=Xm(r,a,t-1/3)}return jt.colorSpaceToWorking(this,s),this}setStyle(t,n=An){function i(a){a!==void 0&&parseFloat(a)<1&&Dt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:Dt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(a,16),n);Dt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=An){let i=TM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Dt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xs(t.r),this.g=xs(t.g),this.b=xs(t.b),this}copyLinearToSRGB(t){return this.r=oo(t.r),this.g=oo(t.g),this.b=oo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return jt.workingToColorSpace(mn.copy(this),t),Math.round(Xt(mn.r*255,0,255))*65536+Math.round(Xt(mn.g*255,0,255))*256+Math.round(Xt(mn.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=jt.workingColorSpace){jt.workingToColorSpace(mn.copy(this),n);let i=mn.r,s=mn.g,a=mn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=jt.workingColorSpace){return jt.workingToColorSpace(mn.copy(this),n),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=An){jt.workingToColorSpace(mn.copy(this),t);let n=mn.r,i=mn.g,s=mn.b;return t!==An?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ia),this.setHSL(ia.h+t,ia.s+n,ia.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ia),t.getHSL($u);let i=Bl(ia.h,$u.h,n),s=Bl(ia.s,$u.s,n),a=Bl(ia.l,$u.l,n);return this.setHSL(i,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let n=this.r,i=this.g,s=this.b,a=t.elements;return this.r=a[0]*n+a[3]*i+a[6]*s,this.g=a[1]*n+a[4]*i+a[7]*s,this.b=a[2]*n+a[5]*i+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Gt;Gt.NAMES=TM;var Xl=class extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Ti=new B,ms=new B,Wm=new B,gs=new B,jr=new B,Qr=new B,DS=new B,qm=new B,Ym=new B,Zm=new B,Km=new Ne,Jm=new Ne,jm=new Ne,oa=class e{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Ti.subVectors(t,n),s.cross(Ti);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,n,i,s,a){Ti.subVectors(s,n),ms.subVectors(i,n),Wm.subVectors(t,n);let r=Ti.dot(Ti),o=Ti.dot(ms),l=Ti.dot(Wm),c=ms.dot(ms),h=ms.dot(Wm),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,_=(r*h-o*l)*u;return a.set(1-p-_,_,p)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,gs)===null?!1:gs.x>=0&&gs.y>=0&&gs.x+gs.y<=1}static getInterpolation(t,n,i,s,a,r,o,l){return this.getBarycoord(t,n,i,s,gs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,gs.x),l.addScaledVector(r,gs.y),l.addScaledVector(o,gs.z),l)}static getInterpolatedAttribute(t,n,i,s,a,r){return Km.setScalar(0),Jm.setScalar(0),jm.setScalar(0),Km.fromBufferAttribute(t,n),Jm.fromBufferAttribute(t,i),jm.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Km,a.x),r.addScaledVector(Jm,a.y),r.addScaledVector(jm,a.z),r}static isFrontFacing(t,n,i,s){return Ti.subVectors(i,n),ms.subVectors(t,n),Ti.cross(ms).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),ms.subVectors(this.a,this.b),Ti.cross(ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,a){return e.getInterpolation(t,this.a,this.b,this.c,n,i,s,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){let i=this.a,s=this.b,a=this.c,r,o;jr.subVectors(s,i),Qr.subVectors(a,i),qm.subVectors(t,i);let l=jr.dot(qm),c=Qr.dot(qm);if(l<=0&&c<=0)return n.copy(i);Ym.subVectors(t,s);let h=jr.dot(Ym),d=Qr.dot(Ym);if(h>=0&&d<=h)return n.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),n.copy(i).addScaledVector(jr,r);Zm.subVectors(t,a);let p=jr.dot(Zm),_=Qr.dot(Zm);if(_>=0&&p<=_)return n.copy(a);let M=p*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Qr,o);let m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return DS.subVectors(a,s),o=(d-h)/(d-h+(p-_)),n.copy(s).addScaledVector(DS,o);let f=1/(m+M+u);return r=M*f,o=u*f,n.copy(i).addScaledVector(jr,r).addScaledVector(Qr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},la=class{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Ai.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Ai.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){let i=Ai.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let a=i.getAttribute("position");if(n===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)t.isMesh===!0?t.getVertexPosition(r,Ai):Ai.fromBufferAttribute(a,r),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),th.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),th.copy(i.boundingBox)),th.applyMatrix4(t.matrixWorld),this.union(th)}let s=t.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ul),eh.subVectors(this.max,Ul),$r.subVectors(t.a,Ul),to.subVectors(t.b,Ul),eo.subVectors(t.c,Ul),sa.subVectors(to,$r),aa.subVectors(eo,to),Ga.subVectors($r,eo);let n=[0,-sa.z,sa.y,0,-aa.z,aa.y,0,-Ga.z,Ga.y,sa.z,0,-sa.x,aa.z,0,-aa.x,Ga.z,0,-Ga.x,-sa.y,sa.x,0,-aa.y,aa.x,0,-Ga.y,Ga.x,0];return!Qm(n,$r,to,eo,eh)||(n=[1,0,0,0,1,0,0,0,1],!Qm(n,$r,to,eo,eh))?!1:(nh.crossVectors(sa,aa),n=[nh.x,nh.y,nh.z],Qm(n,$r,to,eo,eh))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_s[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_s[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_s[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_s[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_s[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_s[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_s[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_s[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_s),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_s=[new B,new B,new B,new B,new B,new B,new B,new B],Ai=new B,th=new la,$r=new B,to=new B,eo=new B,sa=new B,aa=new B,Ga=new B,Ul=new B,eh=new B,nh=new B,ka=new B;function Qm(e,t,n,i,s){for(let a=0,r=e.length-3;a<=r;a+=3){ka.fromArray(e,a);let o=s.x*Math.abs(ka.x)+s.y*Math.abs(ka.y)+s.z*Math.abs(ka.z),l=t.dot(ka),c=n.dot(ka),h=i.dot(ka);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var We=new B,ih=new Ut,GT=0,_n=class extends Ci{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GT++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=xM,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ih.fromBufferAttribute(this,n),ih.applyMatrix3(t),this.setXY(n,ih.x,ih.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix3(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyMatrix4(t),this.setXYZ(n,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.applyNormalMatrix(t),this.setXYZ(n,We.x,We.y,We.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)We.fromBufferAttribute(this,n),We.transformDirection(t),this.setXYZ(n,We.x,We.y,We.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ro(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Tn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ro(n,this.array)),n}setX(t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ro(n,this.array)),n}setY(t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ro(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ro(n,this.array)),n}setW(t,n){return this.normalized&&(n=Tn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,a){return t*=this.itemSize,this.normalized&&(n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array),a=Tn(a,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Wl=class extends _n{constructor(t,n,i){super(new Uint16Array(t),n,i)}};var ql=class extends _n{constructor(t,n,i){super(new Uint32Array(t),n,i)}};var wn=class extends _n{constructor(t,n,i){super(new Float32Array(t),n,i)}},kT=new la,Ol=new B,$m=new B,mo=class{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){let i=this.center;n!==void 0?i.copy(n):kT.setFromPoints(t).getCenter(i);let s=0;for(let a=0,r=t.length;a<r;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){let i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ol.subVectors(t,this.center);let n=Ol.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ol,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($m.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ol.copy(t.center).add($m)),this.expandByPoint(Ol.copy(t.center).sub($m))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},XT=0,_i=new Ue,tg=new vn,no=new B,$n=new la,Il=new la,nn=new B,ni=class e extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=To(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pT(t)?ql:Wl)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new Ot().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _i.makeRotationFromQuaternion(t),this.applyMatrix4(_i),this}rotateX(t){return _i.makeRotationX(t),this.applyMatrix4(_i),this}rotateY(t){return _i.makeRotationY(t),this.applyMatrix4(_i),this}rotateZ(t){return _i.makeRotationZ(t),this.applyMatrix4(_i),this}translate(t,n,i){return _i.makeTranslation(t,n,i),this.applyMatrix4(_i),this}scale(t,n,i){return _i.makeScale(t,n,i),this.applyMatrix4(_i),this}lookAt(t){return tg.lookAt(t),tg.updateMatrix(),this.applyMatrix4(tg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,a=t.length;s<a;s++){let r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new wn(i,3))}else{let i=Math.min(t.length,n.count);for(let s=0;s<i;s++){let a=t[s];n.setXYZ(s,a.x,a.y,a.z||0)}t.length>n.count&&Dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){let a=n[i];$n.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mo);let t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let i=this.boundingSphere.center;if($n.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){let o=n[a];Il.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors($n.min,Il.min),$n.expandByPoint(nn),nn.addVectors($n.max,Il.max),$n.expandByPoint(nn)):($n.expandByPoint(Il.min),$n.expandByPoint(Il.max))}$n.getCenter(i);let s=0;for(let a=0,r=t.count;a<r;a++)nn.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(nn));if(n)for(let a=0,r=n.length;a<r;a++){let o=n[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(no.fromBufferAttribute(t,c),nn.add(no)),s=Math.max(s,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,a=n.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new _n(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new B,l[x]=new B;let c=new B,h=new B,d=new B,u=new Ut,p=new Ut,_=new Ut,M=new B,m=new B;function f(x,w,D){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,D),u.fromBufferAttribute(a,x),p.fromBufferAttribute(a,w),_.fromBufferAttribute(a,D),h.sub(c),d.sub(c),p.sub(u),_.sub(u);let L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(M.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),o[x].add(M),o[w].add(M),o[D].add(M),l[x].add(m),l[w].add(m),l[D].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:t.count}]);for(let x=0,w=g.length;x<w;++x){let D=g[x],L=D.start,z=D.count;for(let k=L,I=L+z;k<I;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let S=new B,v=new B,E=new B,T=new B;function C(x){E.fromBufferAttribute(s,x),T.copy(E);let w=o[x];S.copy(w),S.sub(E.multiplyScalar(E.dot(w))).normalize(),v.crossVectors(T,w);let L=v.dot(l[x])<0?-1:1;r.setXYZW(x,S.x,S.y,S.z,L)}for(let x=0,w=g.length;x<w;++x){let D=g[x],L=D.start,z=D.count;for(let k=L,I=L+z;k<I;k+=3)C(t.getX(k+0)),C(t.getX(k+1)),C(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);let s=new B,a=new B,r=new B,o=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,p=t.count;u<p;u+=3){let _=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,M),r.fromBufferAttribute(n,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=n.count;u<p;u+=3)s.fromBufferAttribute(n,u+0),a.fromBufferAttribute(n,u+1),r.fromBufferAttribute(n,u+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)nn.fromBufferAttribute(t,n),nn.normalize(),t.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,_=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*h;for(let f=0;f<h;f++)u[_++]=c[p++]}return new _n(u,h,d)}if(this.index===null)return Dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new e,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);n.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let a=t.morphAttributes;for(let c in a){let h=[],d=a[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var eg=new B,WT=new B,qT=new Ot,ti=class{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){let s=eg.subVectors(i,n).cross(WT.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){let s=t.delta(eg),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:n.copy(t.start).addScaledVector(s,r)}intersectsLine(t){let n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){let i=n||qT.getNormalMatrix(t),s=this.coplanarPoint(eg).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},YT=0,ca=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YT++}),this.uuid=To(),this.name="",this.type="Material",this.blending=Mo,this.side=ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yg,this.blendDst=xg,this.blendEquation=Ka,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_h,this.stencilZFail=_h,this.stencilZPass=_h,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let n in t){let i=t[n];if(i===void 0){Dt(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Dt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){let n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(n){let a=s(t.textures),r=s(t.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ti().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ut().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let n=t.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vs=new B,ng=new B,sh=new B,ah=new B,go=class{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let n=vs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(vs.copy(this.origin).addScaledVector(this.direction,n),vs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){ng.copy(t).add(n).multiplyScalar(.5),sh.copy(n).sub(t).normalize(),ah.copy(this.origin).sub(ng);let a=t.distanceTo(n)*.5,r=-this.direction.dot(sh),o=ah.dot(this.direction),l=-ah.dot(sh),c=ah.lengthSq(),h=Math.abs(1-r*r),d,u,p,_;if(h>0)if(d=r*l-o,u=r*o-l,_=a*h,d>=0)if(u>=-_)if(u<=_){let M=1/h;d*=M,u*=M,p=d*(d+r*u+2*o)+u*(r*d+u+2*l)+c}else u=a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-r*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-a,-l),a),p=u*(u+2*l)+c):(d=Math.max(0,-(r*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+u*(u+2*l)+c);else u=r>0?-a:a,d=Math.max(0,-(r*u+o)),p=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ng).addScaledVector(sh,u),p}intersectSphere(t,n){if(t.radius<0)return null;vs.subVectors(t.center,this.origin);let i=vs.dot(this.direction),s=vs.dot(vs)-i*i,a=t.radius*t.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){let i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){let n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,a,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(a=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(a=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,vs)!==null}intersectTriangle(t,n,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-r.x,u=t.y-r.y,p=t.z-r.z,_=n.x-r.x,M=n.y-r.y,m=n.z-r.z,f=i.x-r.x,g=i.y-r.y,S=i.z-r.z,v=Math.abs(l),E=Math.abs(c),T=Math.abs(h),C,x,w,D,L,z,k,I,G,W,q,nt;if(v>=E&&v>=T?(w=l,z=d,G=_,nt=f,l>=0?(C=c,x=h,D=u,L=p,k=M,I=m,W=g,q=S):(C=h,x=c,D=p,L=u,k=m,I=M,W=S,q=g)):E>=T?(w=c,z=u,G=M,nt=g,c>=0?(C=h,x=l,D=p,L=d,k=m,I=_,W=S,q=f):(C=l,x=h,D=d,L=p,k=_,I=m,W=f,q=S)):(w=h,z=p,G=m,nt=S,h>=0?(C=l,x=c,D=d,L=u,k=_,I=M,W=f,q=g):(C=c,x=l,D=u,L=d,k=M,I=_,W=g,q=f)),w===0)return null;let Z=C/w,et=x/w,st=1/w,Ct=D-Z*z,At=L-et*z,_e=k-Z*G,$t=I-et*G,ne=W-Z*nt,K=q-et*nt,tt=ne*$t-K*_e,yt=Ct*K-At*ne,It=_e*At-$t*Ct;if(s){if(tt<0||yt<0||It<0)return null}else if((tt<0||yt<0||It<0)&&(tt>0||yt>0||It>0))return null;let _t=tt+yt+It;if(_t===0)return null;let kt=st*(tt*z+yt*G+It*nt);return(_t>0?kt<0:kt>0)?null:this.at(kt/_t,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yl=class extends ca{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},NS=new Ue,Xa=new go,rh=new mo,LS=new B,oh=new B,lh=new B,ch=new B,ig=new B,uh=new B,US=new B,hh=new B,Fn=class extends vn{constructor(t=new ni,n=new Yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(t,n){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;n.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(a&&o){uh.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let h=o[l],d=a[l];h!==0&&(ig.fromBufferAttribute(d,t),r?uh.addScaledVector(ig,h):uh.addScaledVector(ig.sub(n),h))}n.add(uh)}return n}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,n){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rh.copy(i.boundingSphere),rh.applyMatrix4(a),Xa.copy(t.ray).recast(t.near),!(rh.containsPoint(Xa.origin)===!1&&(Xa.intersectSphere(rh,LS)===null||Xa.origin.distanceToSquared(LS)>(t.far-t.near)**2))&&(NS.copy(a).invert(),Xa.copy(t.ray).applyMatrix4(NS),!(i.boundingBox!==null&&Xa.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Xa)))}_computeIntersections(t,n,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){let m=u[_],f=r[m.materialIndex],g=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,E=S;v<E;v+=3){let T=o.getX(v),C=o.getX(v+1),x=o.getX(v+2);s=fh(this,f,t,i,c,h,d,T,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let g=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=fh(this,r,t,i,c,h,d,g,S,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,M=u.length;_<M;_++){let m=u[_],f=r[m.materialIndex],g=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=g,E=S;v<E;v+=3){let T=v,C=v+1,x=v+2;s=fh(this,f,t,i,c,h,d,T,C,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let m=_,f=M;m<f;m+=3){let g=m,S=m+1,v=m+2;s=fh(this,r,t,i,c,h,d,g,S,v),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};function ZT(e,t,n,i,s,a,r,o){let l;if(t.side===Cn?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,t.side===ga,o),l===null)return null;hh.copy(o),hh.applyMatrix4(e.matrixWorld);let c=n.ray.origin.distanceTo(hh);return c<n.near||c>n.far?null:{distance:c,point:hh.clone(),object:e}}function fh(e,t,n,i,s,a,r,o,l,c){e.getVertexPosition(o,oh),e.getVertexPosition(l,lh),e.getVertexPosition(c,ch);let h=ZT(e,t,n,i,oh,lh,ch,US);if(h){let d=new B;oa.getBarycoord(US,oh,lh,ch,d),s&&(h.uv=oa.getInterpolatedAttribute(s,o,l,c,d,new Ut)),a&&(h.uv1=oa.getInterpolatedAttribute(a,o,l,c,d,new Ut)),r&&(h.normal=oa.getInterpolatedAttribute(r,o,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};oa.getNormal(oh,lh,ch,u.normal),h.face=u,h.barycoord=d}return h}var Nh=class extends Bn{constructor(t=null,n=1,i=1,s,a,r,o,l,c=sn,h=sn,d,u){super(null,r,o,l,c,h,s,a,d,u),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wa=new mo,KT=new Ut(.5,.5),dh=new B,_o=class{constructor(t=new ti,n=new ti,i=new ti,s=new ti,a=new ti,r=new ti){this.planes=[t,n,i,s,a,r]}set(t,n,i,s,a,r){let o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(t){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=wi,i=!1){let s=this.planes,a=t.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],u=a[6],p=a[7],_=a[8],M=a[9],m=a[10],f=a[11],g=a[12],S=a[13],v=a[14],E=a[15];if(s[0].setComponents(c-r,p-h,f-_,E-g).normalize(),s[1].setComponents(c+r,p+h,f+_,E+g).normalize(),s[2].setComponents(c+o,p+d,f+M,E+S).normalize(),s[3].setComponents(c-o,p-d,f-M,E-S).normalize(),i)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,p-u,f-m,E-v).normalize();else if(s[4].setComponents(c-l,p-u,f-m,E-v).normalize(),n===wi)s[5].setComponents(c+l,p+u,f+m,E+v).normalize();else if(n===co)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wa.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wa)}intersectsSprite(t){Wa.center.set(0,0,0);let n=KT.distanceTo(t.center);return Wa.radius=.7071067811865476+n,Wa.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wa)}intersectsSphere(t){let n=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(dh.x=s.normal.x>0?t.max.x:t.min.x,dh.y=s.normal.y>0?t.max.y:t.min.y,dh.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dh)<0)return!1}return!0}containsPoint(t){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zl=class extends Bn{constructor(t=[],n=_a,i,s,a,r,o,l,c,h){super(t,n,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var ua=class extends Bn{constructor(t,n,i=Di,s,a,r,o=sn,l=sn,c,h=Xi,d=1){if(h!==Xi&&h!==ya)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:n,depth:d};super(u,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let n=super.toJSON(t);return n.compareFunction=this.compareFunction,n}},Lh=class extends ua{constructor(t,n=Di,i=_a,s,a,r=sn,o=sn,l,c=Xi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Kl=class extends Bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},vo=class e extends ni{constructor(t=1,n=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],h=[],d=[],u=0,p=0;_("z","y","x",-1,-1,i,n,t,r,a,0),_("z","y","x",1,-1,i,n,-t,r,a,1),_("x","z","y",1,1,t,i,n,s,r,2),_("x","z","y",1,-1,t,i,-n,s,r,3),_("x","y","z",1,-1,t,n,i,s,a,4),_("x","y","z",-1,-1,t,n,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(h,3)),this.setAttribute("uv",new wn(d,2));function _(M,m,f,g,S,v,E,T,C,x,w){let D=v/C,L=E/x,z=v/2,k=E/2,I=T/2,G=C+1,W=x+1,q=0,nt=0,Z=new B;for(let et=0;et<W;et++){let st=et*L-k;for(let Ct=0;Ct<G;Ct++){let At=Ct*D-z;Z[M]=At*g,Z[m]=st*S,Z[f]=I,c.push(Z.x,Z.y,Z.z),Z[M]=0,Z[m]=0,Z[f]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(Ct/C),d.push(1-et/x),q+=1}}for(let et=0;et<x;et++)for(let st=0;st<C;st++){let Ct=u+st+G*et,At=u+st+G*(et+1),_e=u+(st+1)+G*(et+1),$t=u+(st+1)+G*et;l.push(Ct,At,$t),l.push(At,_e,$t),nt+=6}o.addGroup(p,nt,w),p+=nt,u+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Jl=class e extends ni{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};let a=t/2,r=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=n/l,p=[],_=[],M=[],m=[];for(let f=0;f<h;f++){let g=f*u-r;for(let S=0;S<c;S++){let v=S*d-a;_.push(v,-g,0),M.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<o;g++){let S=g+c*f,v=g+c*(f+1),E=g+1+c*(f+1),T=g+1+c*f;p.push(S,v,T),p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new wn(_,3)),this.setAttribute("normal",new wn(M,3)),this.setAttribute("uv",new wn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}};function ja(e){let t={};for(let n in e){t[n]={};for(let i in e[n]){let s=e[n][i];if(OS(s))s.isRenderTargetTexture?(Dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(OS(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();t[n][i]=a}else t[n][i]=s.slice();else t[n][i]=s}}return t}function yn(e){let t={};for(let n=0;n<e.length;n++){let i=ja(e[n]);for(let s in i)t[s]=i[s]}return t}function OS(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function JT(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Hg(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var AM={clone:ja,merge:yn},jT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ii=class extends ca{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jT,this.fragmentShader=QT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ja(t.uniforms),this.uniformsGroups=JT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?n.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?n.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[s]={type:"m4",value:r.toArray()}:n.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ne().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ue().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Uh=class extends ii{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jl=class extends ca{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=If,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Oh=class extends ca{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ih=class extends ca{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function io(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function sg(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ha=class{constructor(t,n,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],a=n[i-1];t:{e:{let r;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<a)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=n[++i],t<s)break e}r=n.length;break n}if(!(t>=a)){let o=n[1];t<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=n[--i-1],t>=a)break e}r=i,i=0;break n}break t}for(;i<r;){let o=i+r>>>1;t<n[o]?r=o:i=o+1}if(s=n[i],a=n[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=t*s;for(let r=0;r!==s;++r)n[r]=i[a+r];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ph=class extends ha{constructor(t,n,i,s){super(t,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:og,endingEnd:og}}intervalChanged_(t,n,i){let s=this.parameterPositions,a=t-2,r=t+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case lg:a=t,o=2*n-i;break;case cg:a=s.length-2,o=n+s[a]-s[a+1];break;default:a=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case lg:r=t,l=2*i-n;break;case cg:r=1,l=i+s[1]-s[0];break;default:r=t-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=r*h}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(i-n)/(s-n),M=_*_,m=M*_,f=-u*m+2*u*M-u*_,g=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*_+1,S=(-1-p)*m+(1.5+p)*M+.5*_,v=p*m-p*M;for(let E=0;E!==o;++E)a[E]=f*r[h+E]+g*r[c+E]+S*r[l+E]+v*r[d+E];return a}},Bh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==o;++u)a[u]=r[c+u]*d+r[l+u]*h;return a}},zh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Fh=class extends ha{interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(i-n)/(s-n),M=1-_;for(let m=0;m!==o;++m)a[m]=r[c+m]*M+r[l+m]*_;return a}let u=o*2,p=t-1;for(let _=0;_!==o;++_){let M=r[c+_],m=r[l+_],f=p*u+_*2,g=d[f],S=d[f+1],v=t*u+_*2,E=h[v],T=h[v+1],C=tA(i,n,g,E,s);a[_]=wM(C,M,S,T,m)}return a}};function wM(e,t,n,i,s){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*i+e*e*e*s}function $T(e,t,n,i,s){let a=1-e;return 3*a*a*(n-t)+6*a*e*(i-n)+3*e*e*(s-i)}function tA(e,t,n,i,s){let a=(e-t)/(s-t);for(let r=0;r<8;r++){let o=wM(a,t,n,i,s)-e;if(Math.abs(o)<1e-10)break;let l=$T(a,t,n,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var si=class{constructor(t,n,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=io(n,this.TimeBufferType),this.values=io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let n=t.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:io(t.times,Array),values:io(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),sg(t.settings)&&(i.settings={inTangents:io(t.settings.inTangents,Array),outTangents:io(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new zh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ph(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let n=new Fh(this.times,this.values,this.getValueSize(),t);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(t){let n;switch(t){case zl:n=this.InterpolantFactoryMethodDiscrete;break;case wh:n=this.InterpolantFactoryMethodLinear;break;case gh:n=this.InterpolantFactoryMethodSmooth;break;case rg:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Dt("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zl;case this.InterpolantFactoryMethodLinear:return wh;case this.InterpolantFactoryMethodSmooth:return gh;case this.InterpolantFactoryMethodBezier:return rg}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=t}return this}scale(t){if(t!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=t;sg(this.settings)&&(IS(this.settings.inTangents,t),IS(this.settings.outTangents,t))}return this}trim(t,n){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<t;)++a;for(;r!==-1&&i[r]>n;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let t=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,a=i.length;a===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(r!==null&&r>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,r),t=!1;break}r=l}if(s!==void 0&&mT(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===gh,a=t.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,p=d+i;for(let _=0;_!==i;++_){let M=n[d+_];if(M!==n[u+_]||M!==n[p+_]){l=!0;break}}}if(l){if(o!==r){t[r]=t[o];let d=o*i,u=r*i;for(let p=0;p!==i;++p)n[u+p]=n[d+p]}++r}}if(a>0){t[r]=t[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)n[l+c]=n[o+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=n.slice(0,r*i)):(this.times=t,this.values=n),this}clone(){let t=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,t,n);return s.createInterpolant=this.createInterpolant,sg(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function IS(e,t){for(let n=0,i=e.length;n!==i;n+=2)e[n]*=t}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=wh;var fa=class extends si{constructor(t,n,i){super(t,n,i)}};fa.prototype.ValueTypeName="bool";fa.prototype.ValueBufferType=Array;fa.prototype.DefaultInterpolation=zl;fa.prototype.InterpolantFactoryMethodLinear=void 0;fa.prototype.InterpolantFactoryMethodSmooth=void 0;var Vh=class extends si{constructor(t,n,i,s){super(t,n,i,s)}};Vh.prototype.ValueTypeName="color";var Hh=class extends si{constructor(t,n,i,s){super(t,n,i,s)}};Hh.prototype.ValueTypeName="number";var Gh=class extends ha{constructor(t,n,i,s){super(t,n,i,s)}interpolate_(t,n,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=t*o;for(let h=c+o;c!==h;c+=4)ei.slerpFlat(a,0,r,c-o,r,c,l);return a}},Ql=class extends si{constructor(t,n,i,s){super(t,n,i,s)}InterpolantFactoryMethodLinear(t){return new Gh(this.times,this.values,this.getValueSize(),t)}};Ql.prototype.ValueTypeName="quaternion";Ql.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends si{constructor(t,n,i){super(t,n,i)}};da.prototype.ValueTypeName="string";da.prototype.ValueBufferType=Array;da.prototype.DefaultInterpolation=zl;da.prototype.InterpolantFactoryMethodLinear=void 0;da.prototype.InterpolantFactoryMethodSmooth=void 0;var kh=class extends si{constructor(t,n,i,s){super(t,n,i,s)}};kh.prototype.ValueTypeName="vector";var ug={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(PS(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!PS(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function PS(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Xh=class{constructor(t,n,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},CM=new Xh,Za=class{constructor(t){this.manager=t!==void 0?t:CM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){let i=this;return new Promise(function(s,a){i.load(t,s,n,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Za.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys={},hg=class extends Error{constructor(t,n){super(t),this.response=n}},$l=class extends Za{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,n,i,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let a=ug.get(`file:${t}`);if(a!==void 0){this.manager.itemStart(t),setTimeout(()=>{n&&n(a),this.manager.itemEnd(t)},0);return}if(ys[t]!==void 0){ys[t].push({onLoad:n,onProgress:i,onError:s});return}ys[t]=[],ys[t].push({onLoad:n,onProgress:i,onError:s});let r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Dt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=ys[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,_=p!==0,M=0,m=new ReadableStream({start(f){g();function g(){d.read().then(({done:S,value:v})=>{if(S)f.close();else{M+=v.byteLength;let E=new ProgressEvent("progress",{lengthComputable:_,loaded:M,total:p});for(let T=0,C=h.length;T<C;T++){let x=h[T];x.onProgress&&x.onProgress(E)}f.enqueue(v),g()}},S=>{f.error(S)})}}});return new Response(m)}else throw new hg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{ug.add(`file:${t}`,c);let h=ys[t];delete ys[t];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=ys[t];if(h===void 0)throw this.manager.itemError(t),c;delete ys[t];for(let d=0,u=h.length;d<u;d++){let p=h[d];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var tc=class extends vn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=n}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},ec=class extends tc{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){let n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}},ag=new Ue,BS=new B,zS=new B,Wh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let n=this.camera;BS.setFromMatrixPosition(t.matrixWorld),n.position.copy(BS),zS.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(zS),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(t,n,i,s){ag.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ag,t.coordinateSystem,t.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;t.coordinateSystem===co||t.reversedDepth?n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(ag)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ph=new B,mh=new ei,Gi=new B,nc=class extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ph,mh,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ph,mh,Gi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(ph,mh,Gi),Gi.x===1&&Gi.y===1&&Gi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ph,mh,Gi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ra=new B,FS=new Ut,VS=new Ut,gn=class extends nc{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let n=.5*this.getFilmHeight()/t;this.fov=ho*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ho*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ra.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ra.x,ra.y).multiplyScalar(-t/ra.z),ra.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ra.x,ra.y).multiplyScalar(-t/ra.z)}getViewSize(t,n){return this.getViewBounds(t,FS,VS),n.subVectors(VS,FS)}setViewOffset(t,n,i,s,a,r){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,n=t*Math.tan(Pl*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,n-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}};var yo=class extends nc{constructor(t=-1,n=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-t,r=i+t,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},fg=class extends Wh{constructor(){super(new yo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ic=class extends tc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new fg}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};var so=-90,ao=1,qh=class extends vn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(so,ao,t,n);s.layers=this.layers,this.add(s);let a=new gn(so,ao,t,n);a.layers=this.layers,this.add(a);let r=new gn(so,ao,t,n);r.layers=this.layers,this.add(r);let o=new gn(so,ao,t,n);o.layers=this.layers,this.add(o);let l=new gn(so,ao,t,n);l.layers=this.layers,this.add(l);let c=new gn(so,ao,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,n=this.children.concat(),[i,s,a,r,o,l]=n;for(let c of n)this.remove(c);if(t===wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===co)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,u,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Yh=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gg="\\[\\]\\.:\\/",eA=new RegExp("["+Gg+"]","g"),kg="[^"+Gg+"]",nA="[^"+Gg.replace("\\.","")+"]",iA=/((?:WC+[\/:])*)/.source.replace("WC",kg),sA=/(WCOD+)?/.source.replace("WCOD",nA),aA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kg),rA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kg),oA=new RegExp("^"+iA+sA+aA+rA+"$"),lA=["material","materials","bones","map"],dg=class{constructor(t,n,i){let s=i||we.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,s)}getValue(t,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,n)}setValue(t,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(t,n)}bind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}},we=class e{constructor(t,n,i){this.path=n,this.parsedPath=i||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,i):new e(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(eA,"")}static parseTrackName(t){let n=oA.exec(t);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);lA.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)t[n++]=i[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Dt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let r=t[s];if(r===void 0){let c=n.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=dg;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RR=new Float32Array(1);var xo=class{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Xt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Kg=class Kg{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){let a=this.elements;return a[0]=t,a[2]=n,a[1]=i,a[3]=s,this}};Kg.prototype.isMatrix2=!0;var pg=Kg;var sc=class extends Ci{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Xg(e,t,n,i){let s=cA(i);switch(n){case Og:return e*t;case Pg:return e*t/s.components*s.byteLength;case ef:return e*t/s.components*s.byteLength;case xa:return e*t*2/s.components*s.byteLength;case nf:return e*t*2/s.components*s.byteLength;case Ig:return e*t*3/s.components*s.byteLength;case yi:return e*t*4/s.components*s.byteLength;case sf:return e*t*4/s.components*s.byteLength;case lc:case cc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case uc:case hc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rf:case lf:return Math.max(e,16)*Math.max(t,8)/4;case af:case of:return Math.max(e,8)*Math.max(t,8)/2;case cf:case uf:case ff:case df:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case hf:case fc:case pf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _f:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case vf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case yf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Sf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Mf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case bf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ef:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Tf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Af:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case wf:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Cf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Rf:case Df:case Nf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Lf:case Uf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case dc:case Of:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cA(e){switch(e){case Vn:case Dg:return{byteLength:1,components:1};case bo:case Ng:case Li:return{byteLength:2,components:1};case $h:case tf:return{byteLength:2,components:4};case Di:case Qh:case Ni:return{byteLength:4,components:1};case Lg:case Ug:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function JM(){let e=null,t=!1,n=null,i=null;function s(a,r){i=e.requestAnimationFrame(s),n(a,r)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){n=a},setContext:function(a){e=a}}}function hA(e){let t=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<d.length;p++){let _=d[u],M=d[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,d[u]=M)}d.length=u+1;for(let p=0,_=d.length;p<_;p++){let M=d[p];e.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var fA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,SA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,TA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,DA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,NA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,LA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,UA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,OA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,IA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,PA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,zA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GA="gl_FragColor = linearToOutputTexel( gl_FragColor );",kA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,XA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,WA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,qA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,YA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$A=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ew=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,sw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,mw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ew=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Aw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ww=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Nw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ow=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Iw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ww=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$w=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,aC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_C=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,SC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,MC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,UC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,BC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,WC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ht={alphahash_fragment:fA,alphahash_pars_fragment:dA,alphamap_fragment:pA,alphamap_pars_fragment:mA,alphatest_fragment:gA,alphatest_pars_fragment:_A,aomap_fragment:vA,aomap_pars_fragment:yA,batching_pars_vertex:xA,batching_vertex:SA,begin_vertex:MA,beginnormal_vertex:bA,bsdfs:EA,iridescence_fragment:TA,bumpmap_pars_fragment:AA,clipping_planes_fragment:wA,clipping_planes_pars_fragment:CA,clipping_planes_pars_vertex:RA,clipping_planes_vertex:DA,color_fragment:NA,color_pars_fragment:LA,color_pars_vertex:UA,color_vertex:OA,common:IA,cube_uv_reflection_fragment:PA,defaultnormal_vertex:BA,displacementmap_pars_vertex:zA,displacementmap_vertex:FA,emissivemap_fragment:VA,emissivemap_pars_fragment:HA,colorspace_fragment:GA,colorspace_pars_fragment:kA,envmap_fragment:XA,envmap_common_pars_fragment:WA,envmap_pars_fragment:qA,envmap_pars_vertex:YA,envmap_physical_pars_fragment:sw,envmap_vertex:ZA,fog_vertex:KA,fog_pars_vertex:JA,fog_fragment:jA,fog_pars_fragment:QA,gradientmap_pars_fragment:$A,lightmap_pars_fragment:tw,lights_lambert_fragment:ew,lights_lambert_pars_fragment:nw,lights_pars_begin:iw,lights_toon_fragment:aw,lights_toon_pars_fragment:rw,lights_phong_fragment:ow,lights_phong_pars_fragment:lw,lights_physical_fragment:cw,lights_physical_pars_fragment:uw,lights_fragment_begin:hw,lights_fragment_maps:fw,lights_fragment_end:dw,lightprobes_pars_fragment:pw,logdepthbuf_fragment:mw,logdepthbuf_pars_fragment:gw,logdepthbuf_pars_vertex:_w,logdepthbuf_vertex:vw,map_fragment:yw,map_pars_fragment:xw,map_particle_fragment:Sw,map_particle_pars_fragment:Mw,metalnessmap_fragment:bw,metalnessmap_pars_fragment:Ew,morphinstance_vertex:Tw,morphcolor_vertex:Aw,morphnormal_vertex:ww,morphtarget_pars_vertex:Cw,morphtarget_vertex:Rw,normal_fragment_begin:Dw,normal_fragment_maps:Nw,normal_pars_fragment:Lw,normal_pars_vertex:Uw,normal_vertex:Ow,normalmap_pars_fragment:Iw,clearcoat_normal_fragment_begin:Pw,clearcoat_normal_fragment_maps:Bw,clearcoat_pars_fragment:zw,iridescence_pars_fragment:Fw,opaque_fragment:Vw,packing:Hw,premultiplied_alpha_fragment:Gw,project_vertex:kw,dithering_fragment:Xw,dithering_pars_fragment:Ww,roughnessmap_fragment:qw,roughnessmap_pars_fragment:Yw,shadowmap_pars_fragment:Zw,shadowmap_pars_vertex:Kw,shadowmap_vertex:Jw,shadowmask_pars_fragment:jw,skinbase_vertex:Qw,skinning_pars_vertex:$w,skinning_vertex:tC,skinnormal_vertex:eC,specularmap_fragment:nC,specularmap_pars_fragment:iC,tonemapping_fragment:sC,tonemapping_pars_fragment:aC,transmission_fragment:rC,transmission_pars_fragment:oC,uv_pars_fragment:lC,uv_pars_vertex:cC,uv_vertex:uC,worldpos_vertex:hC,background_vert:fC,background_frag:dC,backgroundCube_vert:pC,backgroundCube_frag:mC,cube_vert:gC,cube_frag:_C,depth_vert:vC,depth_frag:yC,distance_vert:xC,distance_frag:SC,equirect_vert:MC,equirect_frag:bC,linedashed_vert:EC,linedashed_frag:TC,meshbasic_vert:AC,meshbasic_frag:wC,meshlambert_vert:CC,meshlambert_frag:RC,meshmatcap_vert:DC,meshmatcap_frag:NC,meshnormal_vert:LC,meshnormal_frag:UC,meshphong_vert:OC,meshphong_frag:IC,meshphysical_vert:PC,meshphysical_frag:BC,meshtoon_vert:zC,meshtoon_frag:FC,points_vert:VC,points_frag:HC,shadow_vert:GC,shadow_frag:kC,sprite_vert:XC,sprite_frag:WC},ft={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Yi={basic:{uniforms:yn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:yn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:yn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:yn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:yn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:yn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:yn([ft.points,ft.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:yn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:yn([ft.common,ft.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:yn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:yn([ft.sprite,ft.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:yn([ft.common,ft.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:yn([ft.lights,ft.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Yi.physical={uniforms:yn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var zf={r:0,b:0,g:0},qC=new Ue,jM=new Ot;jM.set(-1,0,0,0,1,0,0,0,1);function YC(e,t,n,i,s,a){let r=new Gt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function p(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){let v=g.backgroundBlurriness>0;S=t.get(S,v)}return S}function _(g){let S=!1,v=p(g);v===null?m(r,o):v&&v.isColor&&(m(v,1),S=!0);let E=e.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function M(g,S){let v=p(S);v&&(v.isCubeTexture||v.mapping===rc)?(c===void 0&&(c=new Fn(new vo(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:ja(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qC.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(jM),c.material.toneMapped=jt.getTransfer(v.colorSpace)!==oe,(h!==v||d!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Fn(new Jl(2,2),new ii({name:"BackgroundMaterial",uniforms:ja(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ga,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=jt.getTransfer(v.colorSpace)!==oe,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,S){g.getRGB(zf,Hg(e)),n.buffers.color.setClear(zf.r,zf.g,zf.b,S,a)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,S=1){r.set(g),o=S,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,m(r,o)},render:_,addToRenderList:M,dispose:f}}function ZC(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=u(null),a=s,r=!1;function o(L,z,k,I,G){let W=!1,q=d(L,I,k,z);a!==q&&(a=q,c(a.object)),W=p(L,I,k,G),W&&_(L,I,k,G),G!==null&&t.update(G,e.ELEMENT_ARRAY_BUFFER),(W||r)&&(r=!1,v(L,z,k,I),G!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function d(L,z,k,I){let G=I.wireframe===!0,W=i[z.id];W===void 0&&(W={},i[z.id]=W);let q=L.isInstancedMesh===!0?L.id:0,nt=W[q];nt===void 0&&(nt={},W[q]=nt);let Z=nt[k.id];Z===void 0&&(Z={},nt[k.id]=Z);let et=Z[G];return et===void 0&&(et=u(l()),Z[G]=et),et}function u(L){let z=[],k=[],I=[];for(let G=0;G<n;G++)z[G]=0,k[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function p(L,z,k,I){let G=a.attributes,W=z.attributes,q=0,nt=k.getAttributes();for(let Z in nt)if(nt[Z].location>=0){let st=G[Z],Ct=W[Z];if(Ct===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Ct=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Ct=L.instanceColor)),st===void 0||st.attribute!==Ct||Ct&&st.data!==Ct.data)return!0;q++}return a.attributesNum!==q||a.index!==I}function _(L,z,k,I){let G={},W=z.attributes,q=0,nt=k.getAttributes();for(let Z in nt)if(nt[Z].location>=0){let st=W[Z];st===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(st=L.instanceColor));let Ct={};Ct.attribute=st,st&&st.data&&(Ct.data=st.data),G[Z]=Ct,q++}a.attributes=G,a.attributesNum=q,a.index=I}function M(){let L=a.newAttributes;for(let z=0,k=L.length;z<k;z++)L[z]=0}function m(L){f(L,0)}function f(L,z){let k=a.newAttributes,I=a.enabledAttributes,G=a.attributeDivisors;k[L]=1,I[L]===0&&(e.enableVertexAttribArray(L),I[L]=1),G[L]!==z&&(e.vertexAttribDivisor(L,z),G[L]=z)}function g(){let L=a.newAttributes,z=a.enabledAttributes;for(let k=0,I=z.length;k<I;k++)z[k]!==L[k]&&(e.disableVertexAttribArray(k),z[k]=0)}function S(L,z,k,I,G,W,q){q===!0?e.vertexAttribIPointer(L,z,k,G,W):e.vertexAttribPointer(L,z,k,I,G,W)}function v(L,z,k,I){M();let G=I.attributes,W=k.getAttributes(),q=z.defaultAttributeValues;for(let nt in W){let Z=W[nt];if(Z.location>=0){let et=G[nt];if(et===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(et=L.instanceColor)),et!==void 0){let st=et.normalized,Ct=et.itemSize,At=t.get(et);if(At===void 0)continue;let _e=At.buffer,$t=At.type,ne=At.bytesPerElement,K=$t===e.INT||$t===e.UNSIGNED_INT||et.gpuType===Qh;if(et.isInterleavedBufferAttribute){let tt=et.data,yt=tt.stride,It=et.offset;if(tt.isInstancedInterleavedBuffer){for(let _t=0;_t<Z.locationSize;_t++)f(Z.location+_t,tt.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let _t=0;_t<Z.locationSize;_t++)m(Z.location+_t);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let _t=0;_t<Z.locationSize;_t++)S(Z.location+_t,Ct/Z.locationSize,$t,st,yt*ne,(It+Ct/Z.locationSize*_t)*ne,K)}else{if(et.isInstancedBufferAttribute){for(let tt=0;tt<Z.locationSize;tt++)f(Z.location+tt,et.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let tt=0;tt<Z.locationSize;tt++)m(Z.location+tt);e.bindBuffer(e.ARRAY_BUFFER,_e);for(let tt=0;tt<Z.locationSize;tt++)S(Z.location+tt,Ct/Z.locationSize,$t,st,Ct*ne,Ct/Z.locationSize*tt*ne,K)}}else if(q!==void 0){let st=q[nt];if(st!==void 0)switch(st.length){case 2:e.vertexAttrib2fv(Z.location,st);break;case 3:e.vertexAttrib3fv(Z.location,st);break;case 4:e.vertexAttrib4fv(Z.location,st);break;default:e.vertexAttrib1fv(Z.location,st)}}}}g()}function E(){w();for(let L in i){let z=i[L];for(let k in z){let I=z[k];for(let G in I){let W=I[G];for(let q in W)h(W[q].object),delete W[q];delete I[G]}}delete i[L]}}function T(L){if(i[L.id]===void 0)return;let z=i[L.id];for(let k in z){let I=z[k];for(let G in I){let W=I[G];for(let q in W)h(W[q].object),delete W[q];delete I[G]}}delete i[L.id]}function C(L){for(let z in i){let k=i[z];for(let I in k){let G=k[I];if(G[L.id]===void 0)continue;let W=G[L.id];for(let q in W)h(W[q].object),delete W[q];delete G[L.id]}}}function x(L){for(let z in i){let k=i[z],I=L.isInstancedMesh===!0?L.id:0,G=k[I];if(G!==void 0){for(let W in G){let q=G[W];for(let nt in q)h(q[nt].object),delete q[nt];delete G[W]}delete k[I],Object.keys(k).length===0&&delete i[z]}}}function w(){D(),r=!0,a!==s&&(a=s,c(a.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:D,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:m,disableUnusedAttributes:g}}function KC(e,t,n){let i;function s(l){i=l}function a(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function r(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let p=0;p<h;p++)u+=c[p];n.update(u,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function JC(e,t,n,i){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==yi&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Vn&&C!==Ni&&!x&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(Dt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,u=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&u===!1&&Dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),g=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),E=e.getParameter(e.MAX_SAMPLES),T=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:T}}function jC(e){let t=this,n=null,i=0,s=!1,a=!1,r=new ti,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||i!==0||s;return s=u,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,p){let _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!s||_===null||_.length===0||a&&!m)a?h(null):c();else{let g=a?0:i,S=g*4,v=f.clippingState||null;l.value=v,v=h(_,u,S,p);for(let E=0;E!==S;++E)v[E]=n[E];f.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,p,_){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,_!==!0||m===null){let f=p+M*4,g=u.matrixWorldInverse;o.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,v=p;S!==M;++S,v+=4)r.copy(d[S]).applyMatrix4(g,o),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var wo=4,QC=6,$C=20,t3=256,pc=new yo,RM=new Gt,Jg=null,jg=0,Qg=0,$g=!1,e3=new B,Qa=new B,Vf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,a={}){let{size:r=256,position:o=e3}=a;Jg=this._renderer.getRenderTarget(),jg=this._renderer.getActiveCubeFace(),Qg=this._renderer.getActiveMipmapLevel(),$g=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=LM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=NM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jg,jg,Qg),this._renderer.xr.enabled=$g,t.scissorTest=!1,Ao(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===_a||t.mapping===Ja?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jg=this._renderer.getRenderTarget(),jg=this._renderer.getActiveCubeFace(),Qg=this._renderer.getActiveMipmapLevel(),$g=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Li,format:yi,colorSpace:Fl,depthBuffer:!1},s=DM(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=DM(t,n,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=n3(a)),this._blurMaterial=s3(a,t,n),this._ggxMaterial=i3(a,t,n)}return s}_compileMaterial(t){let n=new Fn(new ni,t);this._renderer.compile(n,pc)}_sceneToCubeUV(t,n,i,s,a){let l=new gn(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(RM),d.toneMapping=Ri,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new vo,new Yl({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,f=!1,g=t.background;g?g.isColor&&(m.color.copy(g),t.background=null,f=!0):(m.color.copy(RM),f=!0);for(let S=0;S<6;S++){let v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[S],a.y,a.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[S],a.z)):(l.up.set(0,c[S],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[S]));let E=this._cubeSize;Ao(s,v*E,S>2?E:0,E,E),d.setRenderTarget(s),f&&d.render(M,l),d.render(t,l)}d.toneMapping=p,d.autoClear=u,t.background=g}_textureToCubeUV(t,n){let i=this._renderer,s=t.mapping===_a||t.mapping===Ja;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=LM()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=NM());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=t;let l=this._cubeSize;Ao(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(r,pc)}_applyPMREM(t){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(t,a-1,a);n.autoClear=i}_applyGGXFilter(t,n,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,p=d*u,{_lodMax:_}=this,M=this._sizeLods[i],m=3*M*(i>_-wo?i-_+wo:0),f=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=_-n,Ao(a,m,f,3*M,2*M),s.setRenderTarget(a),s.render(o,pc),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=_-i,Ao(t,m,f,3*M,2*M),s.setRenderTarget(t),s.render(o,pc)}_blur(t,n,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,a,n,i,r),this._blurPass(a,t,i,i,r)}_blurPass(t,n,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-wo?s-this._lodMax+wo:0),u=4*(this._cubeSize-h);Ao(n,d,u,3*h,2*h),r.setRenderTarget(n),r.render(l,pc)}};function n3(e){let t=[],n=[],i=e,s=e-wo+1+QC;for(let a=0;a<s;a++){let r=Math.pow(2,i);t.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,_=new Float32Array(p*u*d),M=new Float32Array(p*u*d);for(let f=0;f<d;f++){let g=f%3*2/3-1,S=f>2?0:-1,v=[g,S,0,g+2/3,S,0,g+2/3,S+1,0,g,S,0,g+2/3,S+1,0,g,S+1,0];_.set(v,p*u*f);for(let E=0;E<u;E++){let T=h[E*2]*2-1,C=h[E*2+1]*2-1;f===0?Qa.set(1,C,T):f===1?Qa.set(-T,1,-C):f===2?Qa.set(-T,C,1):f===3?Qa.set(-1,C,-T):f===4?Qa.set(-T,-1,C):Qa.set(T,C,-1),Qa.toArray(M,(f*u+E)*p)}}let m=new ni;m.setAttribute("position",new _n(_,p)),m.setAttribute("outputDirection",new _n(M,p)),n.push(new Fn(m,null)),i>wo&&i--}return{lodMeshes:n,sizeLods:t}}function DM(e,t,n){let i=new zn(e,t,n);return i.texture.mapping=rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function i3(e,t,n){return new ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:t3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function s3(e,t,n){return new ii({name:"SphericalGaussianBlur",defines:{SAMPLES:$C,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function NM(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function LM(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function kf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Hf=class extends zn{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Zl(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vo(5,5,5),a=new ii({name:"CubemapFromEquirect",uniforms:ja(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Wi});a.uniforms.tEquirect.value=n;let r=new Fn(s,a),o=n.minFilter;return n.minFilter===va&&(n.minFilter=un),new qh(1,10,this).update(t,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){let a=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(n,i,s);t.setRenderTarget(a)}};function a3(e){let t=new WeakMap,n=new WeakMap,i=null;function s(u,p=!1){return u==null?null:p?r(u):a(u)}function a(u){if(u&&u.isTexture){let p=u.mapping;if(p===Kh||p===Jh)if(t.has(u)){let _=t.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new Hf(_.height);return M.fromEquirectangularTexture(e,u),t.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function r(u){if(u&&u.isTexture){let p=u.mapping,_=p===Kh||p===Jh,M=p===_a||p===Ja;if(_||M){let m=n.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new Vf(e)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let g=u.image;return _&&g&&g.height>0||M&&g&&l(g)?(i===null&&(i=new Vf(e)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Kh?u.mapping=_a:p===Jh&&(u.mapping=Ja),u}function l(u){let p=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function c(u){let p=u.target;p.removeEventListener("dispose",c);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=n.get(p);_!==void 0&&(n.delete(p),_.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function r3(e){let t={};function n(i){if(t[i]!==void 0)return t[i];let s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Ya("WebGLRenderer: "+i+" extension not supported."),s}}}function o3(e,t,n,i){let s={},a=new WeakMap;function r(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",r),delete s[u.id];let p=a.get(u);p&&(t.remove(p),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,n.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",r),s[u.id]=!0,n.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,_=d.attributes.position,M=0;if(_===void 0)return;if(p!==null){let g=p.array;M=p.version;for(let S=0,v=g.length;S<v;S+=3){let E=g[S+0],T=g[S+1],C=g[S+2];u.push(E,T,T,C,C,E)}}else{let g=_.array;M=_.version;for(let S=0,v=g.length/3-1;S<v;S+=3){let E=S+0,T=S+1,C=S+2;u.push(E,T,T,C,C,E)}}let m=new(_.count>=65535?ql:Wl)(u,1);m.version=M;let f=a.get(d);f&&t.remove(f),a.set(d,m)}function h(d){let u=a.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function l3(e,t,n){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,u){e.drawElements(i,u,a,d*r),n.update(u,i,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(i,u,a,d*r,p),n.update(u,i,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,d,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];n.update(M,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function c3(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=o*(a/3);break;case e.LINES:n.lines+=o*(a/2);break;case e.LINE_STRIP:n.lines+=o*(a-1);break;case e.LINE_LOOP:n.lines+=o*a;break;case e.POINTS:n.points+=o*a;break;default:Lt("WebGLInfo: Unknown draw mode:",r);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function u3(e,t,n){let i=new WeakMap,s=new Ne;function a(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let w=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],S=0;p===!0&&(S=1),_===!0&&(S=2),M===!0&&(S=3);let v=o.attributes.position.count*S,E=1;v>t.maxTextureSize&&(E=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*E*4*d),C=new Gl(T,v,E,d);C.type=Ni,C.needsUpdate=!0;let x=S*4;for(let D=0;D<d;D++){let L=m[D],z=f[D],k=g[D],I=v*E*4*D;for(let G=0;G<L.count;G++){let W=G*x;p===!0&&(s.fromBufferAttribute(L,G),T[I+W+0]=s.x,T[I+W+1]=s.y,T[I+W+2]=s.z,T[I+W+3]=0),_===!0&&(s.fromBufferAttribute(z,G),T[I+W+4]=s.x,T[I+W+5]=s.y,T[I+W+6]=s.z,T[I+W+7]=0),M===!0&&(s.fromBufferAttribute(k,G),T[I+W+8]=s.x,T[I+W+9]=s.y,T[I+W+10]=s.z,T[I+W+11]=k.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Ut(v,E)},i.set(o,u),o.addEventListener("dispose",w)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",r.morphTexture,n);else{let p=0;for(let M=0;M<c.length;M++)p+=c[M];let _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:a}}function h3(e,t,n,i,s){let a=new WeakMap;function r(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(a.get(u)!==h&&(t.update(u),a.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),a.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;a.get(p)!==h&&(p.update(),a.set(p,h))}return u}function o(){a=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:r,dispose:o}}var f3={[Mg]:"LINEAR_TONE_MAPPING",[bg]:"REINHARD_TONE_MAPPING",[Eg]:"CINEON_TONE_MAPPING",[Tg]:"ACES_FILMIC_TONE_MAPPING",[wg]:"AGX_TONE_MAPPING",[Cg]:"NEUTRAL_TONE_MAPPING",[Ag]:"CUSTOM_TONE_MAPPING"};function d3(e,t,n,i,s,a){let r=new zn(t,n,{type:e,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ni;c.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new wn([0,2,0,0,2,0],2));let h=new Uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Fn(c,h),u=new yo(-1,1,1,-1,0,1),p=null,_=null,M=!1,m,f=null,g=[],S=!1;this.setSize=function(v,E){r.setSize(v,E),o!==null&&o.setSize(v,E),l!==null&&l.setSize(v,E);for(let T=0;T<g.length;T++){let C=g[T];C.setSize&&C.setSize(v,E)}},this.setEffects=function(v){g=v,S=g.length>0&&g[0].isRenderPass===!0;let E=r.width,T=r.height;g.length>0&&o===null&&(o=new zn(E,T,{type:Li,depthBuffer:!1,stencilBuffer:!1}),l=new zn(E,T,{type:Li,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<g.length;C++){let x=g[C];x.setSize&&x.setSize(E,T)}},this.begin=function(v,E){if(M||v.toneMapping===Ri&&g.length===0)return!1;if(f=E,E!==null){let T=E.width,C=E.height;(r.width!==T||r.height!==C)&&this.setSize(T,C)}return S===!1&&v.setRenderTarget(r),m=v.toneMapping,v.toneMapping=Ri,!0},this.hasRenderPass=function(){return S},this.end=function(v,E){v.toneMapping=m,M=!0;let T=r,C=o;for(let x=0;x<g.length;x++){let w=g[x];w.enabled!==!1&&(w.render(v,C,T,E),w.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(p!==v.outputColorSpace||_!==v.toneMapping){p=v.outputColorSpace,_=v.toneMapping,h.defines={},jt.getTransfer(p)===oe&&(h.defines.SRGB_TRANSFER="");let x=f3[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(f),v.render(d,u),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var QM=new Bn,n0=new ua(1,1),$M=new Gl,tb=new Dh,eb=new Zl,UM=[],OM=[],IM=new Float32Array(16),PM=new Float32Array(9),BM=new Float32Array(4);function Ro(e,t,n){let i=e[0];if(i<=0||i>0)return e;let s=t*n,a=UM[s];if(a===void 0&&(a=new Float32Array(s),UM[s]=a),t!==0){i.toArray(a,0);for(let r=1,o=0;r!==t;++r)o+=n,e[r].toArray(a,o)}return a}function Ke(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Je(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Xf(e,t){let n=OM[t];n===void 0&&(n=new Int32Array(t),OM[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function p3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function m3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2fv(this.addr,t),Je(n,t)}}function g3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ke(n,t))return;e.uniform3fv(this.addr,t),Je(n,t)}}function _3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4fv(this.addr,t),Je(n,t)}}function v3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Je(n,t)}else{if(Ke(n,i))return;BM.set(i),e.uniformMatrix2fv(this.addr,!1,BM),Je(n,i)}}function y3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Je(n,t)}else{if(Ke(n,i))return;PM.set(i),e.uniformMatrix3fv(this.addr,!1,PM),Je(n,i)}}function x3(e,t){let n=this.cache,i=t.elements;if(i===void 0){if(Ke(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Je(n,t)}else{if(Ke(n,i))return;IM.set(i),e.uniformMatrix4fv(this.addr,!1,IM),Je(n,i)}}function S3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function M3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2iv(this.addr,t),Je(n,t)}}function b3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3iv(this.addr,t),Je(n,t)}}function E3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4iv(this.addr,t),Je(n,t)}}function T3(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function A3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ke(n,t))return;e.uniform2uiv(this.addr,t),Je(n,t)}}function w3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Ke(n,t))return;e.uniform3uiv(this.addr,t),Je(n,t)}}function C3(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ke(n,t))return;e.uniform4uiv(this.addr,t),Je(n,t)}}function R3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let a;this.type===e.SAMPLER_2D_SHADOW?(n0.compareFunction=n.isReversedDepthBuffer()?Bf:Pf,a=n0):a=QM,n.setTexture2D(t||a,s)}function D3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||tb,s)}function N3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||eb,s)}function L3(e,t,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||$M,s)}function U3(e){switch(e){case 5126:return p3;case 35664:return m3;case 35665:return g3;case 35666:return _3;case 35674:return v3;case 35675:return y3;case 35676:return x3;case 5124:case 35670:return S3;case 35667:case 35671:return M3;case 35668:case 35672:return b3;case 35669:case 35673:return E3;case 5125:return T3;case 36294:return A3;case 36295:return w3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return N3;case 36289:case 36303:case 36311:case 36292:return L3}}function O3(e,t){e.uniform1fv(this.addr,t)}function I3(e,t){let n=Ro(t,this.size,2);e.uniform2fv(this.addr,n)}function P3(e,t){let n=Ro(t,this.size,3);e.uniform3fv(this.addr,n)}function B3(e,t){let n=Ro(t,this.size,4);e.uniform4fv(this.addr,n)}function z3(e,t){let n=Ro(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function F3(e,t){let n=Ro(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function V3(e,t){let n=Ro(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function H3(e,t){e.uniform1iv(this.addr,t)}function G3(e,t){e.uniform2iv(this.addr,t)}function k3(e,t){e.uniform3iv(this.addr,t)}function X3(e,t){e.uniform4iv(this.addr,t)}function W3(e,t){e.uniform1uiv(this.addr,t)}function q3(e,t){e.uniform2uiv(this.addr,t)}function Y3(e,t){e.uniform3uiv(this.addr,t)}function Z3(e,t){e.uniform4uiv(this.addr,t)}function K3(e,t,n){let i=this.cache,s=t.length,a=Xf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));let r;this.type===e.SAMPLER_2D_SHADOW?r=n0:r=QM;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||r,a[o])}function J3(e,t,n){let i=this.cache,s=t.length,a=Xf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture3D(t[r]||tb,a[r])}function j3(e,t,n){let i=this.cache,s=t.length,a=Xf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTextureCube(t[r]||eb,a[r])}function Q3(e,t,n){let i=this.cache,s=t.length,a=Xf(n,s);Ke(i,a)||(e.uniform1iv(this.addr,a),Je(i,a));for(let r=0;r!==s;++r)n.setTexture2DArray(t[r]||$M,a[r])}function $3(e){switch(e){case 5126:return O3;case 35664:return I3;case 35665:return P3;case 35666:return B3;case 35674:return z3;case 35675:return F3;case 35676:return V3;case 5124:case 35670:return H3;case 35667:case 35671:return G3;case 35668:case 35672:return k3;case 35669:case 35673:return X3;case 5125:return W3;case 36294:return q3;case 36295:return Y3;case 36296:return Z3;case 35678:case 36198:case 36298:case 36306:case 35682:return K3;case 35679:case 36299:case 36307:return J3;case 35680:case 36300:case 36308:case 36293:return j3;case 36289:case 36303:case 36311:case 36292:return Q3}}var i0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=U3(n.type)}},s0=class{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=$3(n.type)}},a0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(t,n[o.id],i)}}},t0=/(\w+)(\])?(\[|\.)?/g;function zM(e,t){e.seq.push(t),e.map[t.id]=t}function t2(e,t,n){let i=e.name,s=i.length;for(t0.lastIndex=0;;){let a=t0.exec(i),r=t0.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){zM(n,c===void 0?new i0(o,e,t):new s0(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new a0(o),zM(n,d)),n=d}}}var Co=class{constructor(t,n){this.seq=[],this.map={};let i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(n,r),l=t.getUniformLocation(n,o.name);t2(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===t.SAMPLER_2D_SHADOW||r.type===t.SAMPLER_CUBE_SHADOW||r.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(t,n,i,s){let a=this.map[n];a!==void 0&&a.setValue(t,i,s)}setOptional(t,n,i){let s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let a=0,r=n.length;a!==r;++a){let o=n[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,n){let i=[];for(let s=0,a=t.length;s!==a;++s){let r=t[s];r.id in n&&i.push(r)}return i}};function FM(e,t,n){let i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}var e2=37297,n2=0;function i2(e,t){let n=e.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===t?">":" "} ${o}: ${n[r]}`)}return i.join(`
`)}var VM=new Ot;function s2(e){jt._getMatrix(VM,jt.workingColorSpace,e);let t=`mat3( ${VM.elements.map(n=>n.toFixed(4))} )`;switch(jt.getTransfer(e)){case Vl:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Dt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function HM(e,t,n){let i=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return n.toUpperCase()+`

`+a+`

`+i2(e.getShaderSource(t),o)}else return a}function a2(e,t){let n=s2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var r2={[Mg]:"Linear",[bg]:"Reinhard",[Eg]:"Cineon",[Tg]:"ACESFilmic",[wg]:"AgX",[Cg]:"Neutral",[Ag]:"Custom"};function o2(e,t){let n=r2[t];return n===void 0?(Dt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ff=new B;function l2(){jt.getLuminanceCoefficients(Ff);let e=Ff.x.toFixed(4),t=Ff.y.toFixed(4),n=Ff.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gc).join(`
`)}function u2(e){let t=[];for(let n in e){let i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function h2(e,t){let n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=e.getActiveAttrib(t,s),r=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),n[r]={type:a.type,location:e.getAttribLocation(t,r),locationSize:o}}return n}function gc(e){return e!==""}function GM(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kM(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var f2=/^[ \t]*#include +<([\w\d./]+)>/gm;function r0(e){return e.replace(f2,p2)}var d2=new Map;function p2(e,t){let n=Ht[t];if(n===void 0){let i=d2.get(t);if(i!==void 0)n=Ht[i],Dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return r0(n)}var m2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function XM(e){return e.replace(m2,g2)}function g2(e,t,n,i){let s="";for(let a=parseInt(t);a<parseInt(n);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function WM(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var _2={[ac]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function v2(e){return _2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var y2={[_a]:"ENVMAP_TYPE_CUBE",[Ja]:"ENVMAP_TYPE_CUBE",[rc]:"ENVMAP_TYPE_CUBE_UV"};function x2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":y2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var S2={[Ja]:"ENVMAP_MODE_REFRACTION"};function M2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":S2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var b2={[Sg]:"ENVMAP_BLENDING_MULTIPLY",[lM]:"ENVMAP_BLENDING_MIX",[cM]:"ENVMAP_BLENDING_ADD"};function E2(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":b2[e.combine]||"ENVMAP_BLENDING_NONE"}function T2(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function A2(e,t,n,i){let s=e.getContext(),a=n.defines,r=n.vertexShader,o=n.fragmentShader,l=v2(n),c=x2(n),h=M2(n),d=E2(n),u=T2(n),p=c2(n),_=u2(a),M=s.createProgram(),m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(gc).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(gc).join(`
`),f.length>0&&(f+=`
`)):(m=[WM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gc).join(`
`),f=[WM(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?Ht.tonemapping_pars_fragment:"",n.toneMapping!==Ri?o2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,a2("linearToOutputTexel",n.outputColorSpace),l2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gc).join(`
`)),r=r0(r),r=GM(r,n),r=kM(r,n),o=r0(o),o=GM(o,n),o=kM(o,n),r=XM(r),o=XM(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let S=g+m+r,v=g+f+o,E=FM(s,s.VERTEX_SHADER,S),T=FM(s,s.FRAGMENT_SHADER,v);s.attachShader(M,E),s.attachShader(M,T),n.index0AttributeName!==void 0?s.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function C(L){if(e.debug.checkShaderErrors){let z=s.getProgramInfoLog(M)||"",k=s.getShaderInfoLog(E)||"",I=s.getShaderInfoLog(T)||"",G=z.trim(),W=k.trim(),q=I.trim(),nt=!0,Z=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(nt=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,M,E,T);else{let et=HM(s,E,"vertex"),st=HM(s,T,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+et+`
`+st)}else G!==""?Dt("WebGLProgram: Program Info Log:",G):(W===""||q==="")&&(Z=!1);Z&&(L.diagnostics={runnable:nt,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(E),s.deleteShader(T),x=new Co(s,M),w=h2(s,M)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(M,e2)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=n2++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=T,this}var w2=0,o0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){let s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let n=this.materialCache.get(t);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let n=this.materialCache,i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){let n=this.shaderCache,i=n.get(t);return i===void 0&&(i=new l0(t),n.set(t,i)),i}},l0=class{constructor(t){this.id=w2++,this.code=t,this.usedTimes=0}};function C2(e){return e===xa||e===fc||e===dc}function R2(e,t,n,i,s,a){let r=new kl,o=new o0,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,w,D,L,z,k){let I=L.fog,G=z.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||W,q),Z=nt&&nt.mapping===rc?nt.image.height:null,et=p[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Dt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ct=st!==void 0?st.length:0,At=0;G.morphAttributes.position!==void 0&&(At=1),G.morphAttributes.normal!==void 0&&(At=2),G.morphAttributes.color!==void 0&&(At=3);let _e,$t,ne,K;if(et){let ye=Yi[et];_e=ye.vertexShader,$t=ye.fragmentShader}else{_e=x.vertexShader,$t=x.fragmentShader;let ye=o.getVertexShaderStage(x),ae=o.getFragmentShaderStage(x);o.update(x,ye,ae),ne=ye.id,K=ae.id}let tt=e.getRenderTarget(),yt=e.state.buffers.depth.getReversed(),It=z.isInstancedMesh===!0,_t=z.isBatchedMesh===!0,kt=!!x.map,qe=!!x.matcap,Wt=!!nt,ee=!!x.aoMap,ve=!!x.lightMap,Kt=!!x.bumpMap&&x.wireframe===!1,Ce=!!x.normalMap,Qe=!!x.displacementMap,Rn=!!x.emissiveMap,Le=!!x.metalnessMap,Fe=!!x.roughnessMap,O=x.anisotropy>0,hn=x.clearcoat>0,le=x.dispersion>0,R=x.retroreflectivity>0,y=x.iridescence>0,P=x.sheen>0,H=x.transmission>0,Y=O&&!!x.anisotropyMap,at=hn&&!!x.clearcoatMap,rt=hn&&!!x.clearcoatNormalMap,J=hn&&!!x.clearcoatRoughnessMap,Q=y&&!!x.iridescenceMap,ot=y&&!!x.iridescenceThicknessMap,Et=P&&!!x.sheenColorMap,ht=P&&!!x.sheenRoughnessMap,lt=!!x.specularMap,Tt=!!x.specularColorMap,Rt=!!x.specularIntensityMap,Bt=H&&!!x.transmissionMap,U=H&&!!x.thicknessMap,ct=!!x.gradientMap,j=!!x.alphaMap,ut=x.alphaTest>0,mt=!!x.alphaHash,it=!!x.extensions,wt=Ri;x.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(wt=e.toneMapping);let Mt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:_e,fragmentShader:$t,defines:x.defines,customVertexShaderID:ne,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:_t,batchingColor:_t&&z._colorsTexture!==null,instancing:It,instancingColor:It&&z.instanceColor!==null,instancingMorph:It&&z.morphTexture!==null,outputColorSpace:tt===null?e.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:jt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:kt,matcap:qe,envMap:Wt,envMapMode:Wt&&nt.mapping,envMapCubeUVHeight:Z,aoMap:ee,lightMap:ve,bumpMap:Kt,normalMap:Ce,displacementMap:Qe,emissiveMap:Rn,normalMapObjectSpace:Ce&&x.normalMapType===fM,normalMapTangentSpace:Ce&&x.normalMapType===If,packedNormalMap:Ce&&x.normalMapType===If&&C2(x.normalMap.format),metalnessMap:Le,roughnessMap:Fe,anisotropy:O,anisotropyMap:Y,clearcoat:hn,clearcoatMap:at,clearcoatNormalMap:rt,clearcoatRoughnessMap:J,dispersion:le,retroreflection:R,iridescence:y,iridescenceMap:Q,iridescenceThicknessMap:ot,sheen:P,sheenColorMap:Et,sheenRoughnessMap:ht,specularMap:lt,specularColorMap:Tt,specularIntensityMap:Rt,transmission:H,transmissionMap:Bt,thicknessMap:U,gradientMap:ct,opaque:x.transparent===!1&&x.blending===Mo&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ut,alphaHash:mt,combine:x.combine,mapUv:kt&&_(x.map.channel),aoMapUv:ee&&_(x.aoMap.channel),lightMapUv:ve&&_(x.lightMap.channel),bumpMapUv:Kt&&_(x.bumpMap.channel),normalMapUv:Ce&&_(x.normalMap.channel),displacementMapUv:Qe&&_(x.displacementMap.channel),emissiveMapUv:Rn&&_(x.emissiveMap.channel),metalnessMapUv:Le&&_(x.metalnessMap.channel),roughnessMapUv:Fe&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:at&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:rt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ht&&_(x.sheenRoughnessMap.channel),specularMapUv:lt&&_(x.specularMap.channel),specularColorMapUv:Tt&&_(x.specularColorMap.channel),specularIntensityMapUv:Rt&&_(x.specularIntensityMap.channel),transmissionMapUv:Bt&&_(x.transmissionMap.channel),thicknessMapUv:U&&_(x.thicknessMap.channel),alphaMapUv:j&&_(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ce||O),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(kt||j),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Ce===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:At,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&D.length>0,shadowMapType:e.shadowMap.type,toneMapping:wt,decodeVideoTexture:kt&&x.map.isVideoTexture===!0&&jt.getTransfer(x.map.colorSpace)===oe,decodeVideoTextureEmissive:Rn&&x.emissiveMap.isVideoTexture===!0&&jt.getTransfer(x.emissiveMap.colorSpace)===oe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vi,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)w.push(D),w.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(f(w,x),g(w,x),w.push(e.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function g(x,w){r.disableAll(),w.instancing&&r.enable(0),w.instancingColor&&r.enable(1),w.instancingMorph&&r.enable(2),w.matcap&&r.enable(3),w.envMap&&r.enable(4),w.normalMapObjectSpace&&r.enable(5),w.normalMapTangentSpace&&r.enable(6),w.clearcoat&&r.enable(7),w.iridescence&&r.enable(8),w.alphaTest&&r.enable(9),w.vertexColors&&r.enable(10),w.vertexAlphas&&r.enable(11),w.vertexUv1s&&r.enable(12),w.vertexUv2s&&r.enable(13),w.vertexUv3s&&r.enable(14),w.vertexTangents&&r.enable(15),w.anisotropy&&r.enable(16),w.alphaHash&&r.enable(17),w.batching&&r.enable(18),w.dispersion&&r.enable(19),w.retroreflection&&r.enable(24),w.batchingColor&&r.enable(20),w.gradientMap&&r.enable(21),w.packedNormalMap&&r.enable(22),w.vertexNormals&&r.enable(23),x.push(r.mask),r.disableAll(),w.fog&&r.enable(0),w.useFog&&r.enable(1),w.flatShading&&r.enable(2),w.logarithmicDepthBuffer&&r.enable(3),w.reversedDepthBuffer&&r.enable(4),w.skinning&&r.enable(5),w.morphTargets&&r.enable(6),w.morphNormals&&r.enable(7),w.morphColors&&r.enable(8),w.premultipliedAlpha&&r.enable(9),w.shadowMapEnabled&&r.enable(10),w.doubleSided&&r.enable(11),w.flipSided&&r.enable(12),w.useDepthPacking&&r.enable(13),w.dithering&&r.enable(14),w.transmission&&r.enable(15),w.sheen&&r.enable(16),w.opaque&&r.enable(17),w.pointsUvs&&r.enable(18),w.decodeVideoTexture&&r.enable(19),w.decodeVideoTextureEmissive&&r.enable(20),w.alphaToCoverage&&r.enable(21),w.numLightProbeGrids>0&&r.enable(22),w.hasPositionAttribute&&r.enable(23),x.push(r.mask)}function S(x){let w=p[x.type],D;if(w){let L=Yi[w];D=AM.clone(L.uniforms)}else D=x.uniforms;return D}function v(x,w){let D=h.get(w);return D!==void 0?++D.usedTimes:(D=new A2(e,w,x,s),c.push(D),h.set(w,D)),D}function E(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:C}}function D2(){let e=new WeakMap;function t(r){return e.has(r)}function n(r){let o=e.get(r);return o===void 0&&(o={},e.set(r,o)),o}function i(r){e.delete(r)}function s(r,o,l){e.get(r)[o]=l}function a(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:a}}function N2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function qM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function YM(){let e=[],t=0,n=[],i=[],s=[];function a(){t=0,n.length=0,i.length=0,s.length=0}function r(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,m,f){let g=e[t];return g===void 0?(g={id:u.id,object:u,geometry:p,material:_,materialVariant:r(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:f},e[t]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=_,g.materialVariant=r(u),g.groupOrder=M,g.renderOrder=u.renderOrder,g.z=m,g.group=f),t++,g}function l(u,p,_,M,m,f,g){g.reversedDepth===!0&&(m=-m);let S=o(u,p,_,M,m,f);_.transmission>0?i.push(S):_.transparent===!0?s.push(S):n.push(S)}function c(u,p,_,M,m,f){let g=o(u,p,_,M,m,f);_.transmission>0?i.unshift(g):_.transparent===!0?s.unshift(g):n.unshift(g)}function h(u,p){n.length>1&&n.sort(u||N2),i.length>1&&i.sort(p||qM),s.length>1&&s.sort(p||qM)}function d(){for(let u=t,p=e.length;u<p;u++){let _=e[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:d,sort:h}}function L2(){let e=new WeakMap;function t(i,s){let a=e.get(i),r;return a===void 0?(r=new YM,e.set(i,[r])):s>=a.length?(r=new YM,a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function U2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={direction:new B,color:new Gt};break;case"SpotLight":n={position:new B,direction:new B,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":n={color:new Gt,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function O2(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var I2=0;function P2(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function B2(e){let t=new U2,n=O2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,a=new Ue,r=new Ue;function o(c){let h=0,d=0,u=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let p=0,_=0,M=0,m=0,f=0,g=0,S=0,v=0,E=0,T=0,C=0,x=0,w=0,D=0;c.sort(P2);for(let z=0,k=c.length;z<k;z++){let I=c[z],G=I.color,W=I.intensity,q=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===xa?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=G.r*W,d+=G.g*W,u+=G.b*W;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(I.sh.coefficients[Z],W);D++}else if(I.isSunLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,st=n.get(I);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[_]=st,i.sunShadowMap[_]=nt;let Ct=et.getViewportCount();for(let At=0;At<Ct;At++)i.sunShadowMatrix[M+At]=et.getMatrix(At),i.sunShadowCascade[M+At]=et._cascadeData[At];M+=Ct,_++}i.sun[p]=Z,p++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let et=I.shadow,st=n.get(I);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,i.directionalShadow[m]=st,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=I.shadow.matrix,E++}i.directional[m]=Z,m++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(G).multiplyScalar(W),Z.distance=q,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,i.spot[g]=Z;let et=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,et.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[g]=et.matrix,I.castShadow){let st=n.get(I);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,i.spotShadow[g]=st,i.spotShadowMap[g]=nt,C++}g++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(G).multiplyScalar(W),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),i.rectArea[S]=Z,S++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let et=I.shadow,st=n.get(I);st.shadowIntensity=et.intensity,st.shadowBias=et.bias,st.shadowNormalBias=et.normalBias,st.shadowRadius=et.radius,st.shadowMapSize=et.mapSize,st.shadowCameraNear=et.camera.near,st.shadowCameraFar=et.camera.far,i.pointShadow[f]=st,i.pointShadowMap[f]=nt,i.pointShadowMatrix[f]=I.shadow.matrix,T++}i.point[f]=Z,f++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(W),Z.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[v]=Z,v++}}S>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==g||L.rectAreaLength!==S||L.hemiLength!==v||L.numSunShadows!==_||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==C||L.numSpotMaps!==x||L.numLightProbes!==D)&&(i.sun.length=p,i.directional.length=m,i.spot.length=g,i.rectArea.length=S,i.point.length=f,i.hemi.length=v,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=D,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=g,L.rectAreaLength=S,L.hemiLength=v,L.numSunShadows=_,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=C,L.numSpotMaps=x,L.numLightProbes=D,i.version=I2++)}function l(c,h){let d=0,u=0,p=0,_=0,M=0,m=0,f=h.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){let v=c[g];if(v.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),u++}else if(v.isSpotLight){let E=i.spot[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),_++}else if(v.isRectAreaLight){let E=i.rectArea[M];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),r.identity(),a.copy(v.matrixWorld),a.premultiply(f),r.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(r),E.halfHeight.applyMatrix4(r),M++}else if(v.isPointLight){let E=i.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:i}}function ZM(e){let t=new B2(e),n=[],i=[],s=[];function a(u){d.camera=u,n.length=0,i.length=0,s.length=0}function r(u){n.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(n)}function h(u){t.setupView(n,u)}let d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function z2(e){let t=new WeakMap;function n(s,a=0){let r=t.get(s),o;return r===void 0?(o=new ZM(e),t.set(s,[o])):a>=r.length?(o=new ZM(e),r.push(o)):o=r[a],o}function i(){t=new WeakMap}return{get:n,dispose:i}}var F2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H2=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],G2=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],KM=new Ue,mc=new B,e0=new B;function k2(e,t,n){let i=new _o,s=new Ut,a=new Ut,r=new Ne,o=new Oh,l=new Ih,c={},h=n.maxTextureSize,d={[ga]:Cn,[Cn]:ga,[vi]:vi},u=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:F2,fragmentShader:V2}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new ni;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Fn(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===kS&&(Dt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);let w=e.getRenderTarget(),D=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Wi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=f!==this.type;k&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=T.length;I<G;I++){let W=T[I],q=W.shadow;if(q===void 0){Dt("WebGLShadowMap:",W,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let nt=q.getFrameExtents();s.multiply(nt),a.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/nt.x),s.x=a.x*nt.x,q.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/nt.y),s.y=a.y*nt.y,q.mapSize.y=a.y));let Z=e.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===So){if(W.isPointLight){Dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new zn(s.x,s.y,{format:xa,type:Li,minFilter:un,magFilter:un,generateMipmaps:!1}),q.map.texture.name=W.name+".shadowMap",q.map.depthTexture=new ua(s.x,s.y,Ni),q.map.depthTexture.name=W.name+".shadowMapDepth",q.map.depthTexture.format=Xi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=sn,q.map.depthTexture.magFilter=sn}else W.isPointLight?(q.map=new Hf(s.x),q.map.depthTexture=new Lh(s.x,Di)):(q.map=new zn(s.x,s.y),q.map.depthTexture=new ua(s.x,s.y,Di)),q.map.depthTexture.name=W.name+".shadowMap",q.map.depthTexture.format=Xi,this.type===ac?(q.map.depthTexture.compareFunction=Z?Bf:Pf,q.map.depthTexture.minFilter=un,q.map.depthTexture.magFilter=un):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=sn,q.map.depthTexture.magFilter=sn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let et=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();W.isPointLight!==!0&&q.updateMatrices(W,x);for(let st=0;st<et;st++){let Ct=q.getCamera(st);if(W.isPointLight){let At=q.camera,_e=q.matrix,$t=W.distance||At.far;$t!==At.far&&(At.far=$t,At.updateProjectionMatrix()),mc.setFromMatrixPosition(W.matrixWorld),At.position.copy(mc),e0.copy(At.position),e0.add(H2[st]),At.up.copy(G2[st]),At.lookAt(e0),At.updateMatrixWorld(),_e.makeTranslation(-mc.x,-mc.y,-mc.z),KM.multiplyMatrices(At.projectionMatrix,At.matrixWorldInverse),q._frustum.setFromProjectionMatrix(KM,At.coordinateSystem,At.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)e.setRenderTarget(q.map,st),e.clear();else{st===0&&(e.setRenderTarget(q.map),e.clear());let At=q.getViewport(st);r.set(a.x*At.x,a.y*At.y,a.x*At.z,a.y*At.w),z.viewport(r)}i=q.getFrustum(st),v(C,x,Ct,W,this.type)}q.isPointLightShadow!==!0&&this.type===So&&g(q,x),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(w,D,L)};function g(T,C){let x=t.update(M);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new zn(s.x,s.y,{format:xa,type:Li}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(C,null,x,u,M,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(C,null,x,p,M,null)}function S(T,C,x,w){let D=null,L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)D=L;else if(D=x.isPointLight===!0?l:o,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let z=D.uuid,k=C.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let G=I[k];G===void 0&&(G=D.clone(),I[k]=G,C.addEventListener("dispose",E)),D=G}if(D.visible=C.visible,D.wireframe=C.wireframe,w===So?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=e.properties.get(D);z.light=x}return D}function v(T,C,x,w,D){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&D===So)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let k=t.update(T),I=T.material;if(Array.isArray(I)){let G=k.groups;for(let W=0,q=G.length;W<q;W++){let nt=G[W],Z=I[nt.materialIndex];if(Z&&Z.visible){let et=S(T,Z,w,D);T.onBeforeShadow(e,T,C,x,k,et,nt),e.renderBufferDirect(x,null,k,et,T,nt),T.onAfterShadow(e,T,C,x,k,et,nt)}}}else if(I.visible){let G=S(T,I,w,D);T.onBeforeShadow(e,T,C,x,k,G,null),e.renderBufferDirect(x,null,k,G,T,null),T.onAfterShadow(e,T,C,x,k,G,null)}}let z=T.children;for(let k=0,I=z.length;k<I;k++)v(z[k],C,x,w,D)}function E(T){T.target.removeEventListener("dispose",E);for(let x in c){let w=c[x],D=T.target.uuid;D in w&&(w[D].dispose(),delete w[D])}}}function X2(e,t){function n(){let U=!1,ct=new Ne,j=null,ut=new Ne(0,0,0,0);return{setMask:function(mt){j!==mt&&!U&&(e.colorMask(mt,mt,mt,mt),j=mt)},setLocked:function(mt){U=mt},setClear:function(mt,it,wt,Mt,ye){ye===!0&&(mt*=Mt,it*=Mt,wt*=Mt),ct.set(mt,it,wt,Mt),ut.equals(ct)===!1&&(e.clearColor(mt,it,wt,Mt),ut.copy(ct))},reset:function(){U=!1,j=null,ut.set(-1,0,0,0)}}}function i(){let U=!1,ct=!1,j=null,ut=null,mt=null;return{setReversed:function(it){if(ct!==it){let wt=t.get("EXT_clip_control");it?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),ct=it;let Mt=mt;mt=null,this.setClear(Mt)}},getReversed:function(){return ct},setTest:function(it){it?tt(e.DEPTH_TEST):yt(e.DEPTH_TEST)},setMask:function(it){j!==it&&!U&&(e.depthMask(it),j=it)},setFunc:function(it){if(ct&&(it=EM[it]),ut!==it){switch(it){case vh:e.depthFunc(e.NEVER);break;case yh:e.depthFunc(e.ALWAYS);break;case xh:e.depthFunc(e.LESS);break;case lo:e.depthFunc(e.LEQUAL);break;case Sh:e.depthFunc(e.EQUAL);break;case Mh:e.depthFunc(e.GEQUAL);break;case bh:e.depthFunc(e.GREATER);break;case Eh:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ut=it}},setLocked:function(it){U=it},setClear:function(it){mt!==it&&(mt=it,ct&&(it=1-it),e.clearDepth(it))},reset:function(){U=!1,j=null,ut=null,mt=null,ct=!1}}}function s(){let U=!1,ct=null,j=null,ut=null,mt=null,it=null,wt=null,Mt=null,ye=null;return{setTest:function(ae){U||(ae?tt(e.STENCIL_TEST):yt(e.STENCIL_TEST))},setMask:function(ae){ct!==ae&&!U&&(e.stencilMask(ae),ct=ae)},setFunc:function(ae,xi,Ui){(j!==ae||ut!==xi||mt!==Ui)&&(e.stencilFunc(ae,xi,Ui),j=ae,ut=xi,mt=Ui)},setOp:function(ae,xi,Ui){(it!==ae||wt!==xi||Mt!==Ui)&&(e.stencilOp(ae,xi,Ui),it=ae,wt=xi,Mt=Ui)},setLocked:function(ae){U=ae},setClear:function(ae){ye!==ae&&(e.clearStencil(ae),ye=ae)},reset:function(){U=!1,ct=null,j=null,ut=null,mt=null,it=null,wt=null,Mt=null,ye=null}}}let a=new n,r=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,_=[],M=null,m=!1,f=null,g=null,S=null,v=null,E=null,T=null,C=null,x=new Gt(0,0,0),w=0,D=!1,L=null,z=null,k=null,I=null,G=null,W=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,nt=0,Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=nt>=1):Z.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=nt>=2);let et=null,st={},Ct=e.getParameter(e.SCISSOR_BOX),At=e.getParameter(e.VIEWPORT),_e=new Ne().fromArray(Ct),$t=new Ne().fromArray(At);function ne(U,ct,j,ut){let mt=new Uint8Array(4),it=e.createTexture();e.bindTexture(U,it),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let wt=0;wt<j;wt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(ct,0,e.RGBA,1,1,ut,0,e.RGBA,e.UNSIGNED_BYTE,mt):e.texImage2D(ct+wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,mt);return it}let K={};K[e.TEXTURE_2D]=ne(e.TEXTURE_2D,e.TEXTURE_2D,1),K[e.TEXTURE_CUBE_MAP]=ne(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[e.TEXTURE_2D_ARRAY]=ne(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),K[e.TEXTURE_3D]=ne(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),tt(e.DEPTH_TEST),r.setFunc(lo),Kt(!1),Ce(mg),tt(e.CULL_FACE),ee(Wi);function tt(U){h[U]!==!0&&(e.enable(U),h[U]=!0)}function yt(U){h[U]!==!1&&(e.disable(U),h[U]=!1)}function It(U,ct){return u[U]!==ct?(e.bindFramebuffer(U,ct),u[U]=ct,U===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ct),U===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ct),!0):!1}function _t(U,ct){let j=_,ut=!1;if(U){j=p.get(ct),j===void 0&&(j=[],p.set(ct,j));let mt=U.textures;if(j.length!==mt.length||j[0]!==e.COLOR_ATTACHMENT0){for(let it=0,wt=mt.length;it<wt;it++)j[it]=e.COLOR_ATTACHMENT0+it;j.length=mt.length,ut=!0}}else j[0]!==e.BACK&&(j[0]=e.BACK,ut=!0);ut&&e.drawBuffers(j)}function kt(U){return M!==U?(e.useProgram(U),M=U,!0):!1}let qe={[Ka]:e.FUNC_ADD,[WS]:e.FUNC_SUBTRACT,[qS]:e.FUNC_REVERSE_SUBTRACT};qe[YS]=e.MIN,qe[ZS]=e.MAX;let Wt={[KS]:e.ZERO,[JS]:e.ONE,[jS]:e.SRC_COLOR,[yg]:e.SRC_ALPHA,[iM]:e.SRC_ALPHA_SATURATE,[eM]:e.DST_COLOR,[$S]:e.DST_ALPHA,[QS]:e.ONE_MINUS_SRC_COLOR,[xg]:e.ONE_MINUS_SRC_ALPHA,[nM]:e.ONE_MINUS_DST_COLOR,[tM]:e.ONE_MINUS_DST_ALPHA,[sM]:e.CONSTANT_COLOR,[aM]:e.ONE_MINUS_CONSTANT_COLOR,[rM]:e.CONSTANT_ALPHA,[oM]:e.ONE_MINUS_CONSTANT_ALPHA};function ee(U,ct,j,ut,mt,it,wt,Mt,ye,ae){if(U===Wi){m===!0&&(yt(e.BLEND),m=!1);return}if(m===!1&&(tt(e.BLEND),m=!0),U!==XS){if(U!==f||ae!==D){if((g!==Ka||E!==Ka)&&(e.blendEquation(e.FUNC_ADD),g=Ka,E=Ka),ae)switch(U){case Mo:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gg:e.blendFunc(e.ONE,e.ONE);break;case _g:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case vg:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Lt("WebGLState: Invalid blending: ",U);break}else switch(U){case Mo:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case gg:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case _g:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vg:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",U);break}S=null,v=null,T=null,C=null,x.set(0,0,0),w=0,f=U,D=ae}return}mt=mt||ct,it=it||j,wt=wt||ut,(ct!==g||mt!==E)&&(e.blendEquationSeparate(qe[ct],qe[mt]),g=ct,E=mt),(j!==S||ut!==v||it!==T||wt!==C)&&(e.blendFuncSeparate(Wt[j],Wt[ut],Wt[it],Wt[wt]),S=j,v=ut,T=it,C=wt),(Mt.equals(x)===!1||ye!==w)&&(e.blendColor(Mt.r,Mt.g,Mt.b,ye),x.copy(Mt),w=ye),f=U,D=!1}function ve(U,ct){U.side===vi?yt(e.CULL_FACE):tt(e.CULL_FACE);let j=U.side===Cn;ct&&(j=!j),Kt(j),U.blending===Mo&&U.transparent===!1?ee(Wi):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),r.setFunc(U.depthFunc),r.setTest(U.depthTest),r.setMask(U.depthWrite),a.setMask(U.colorWrite);let ut=U.stencilWrite;o.setTest(ut),ut&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Rn(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?tt(e.SAMPLE_ALPHA_TO_COVERAGE):yt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(U){L!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),L=U)}function Ce(U){U!==HS?(tt(e.CULL_FACE),U!==z&&(U===mg?e.cullFace(e.BACK):U===GS?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):yt(e.CULL_FACE),z=U}function Qe(U){U!==k&&(q&&e.lineWidth(U),k=U)}function Rn(U,ct,j){U?(tt(e.POLYGON_OFFSET_FILL),(I!==ct||G!==j)&&(I=ct,G=j,r.getReversed()&&(ct=-ct),e.polygonOffset(ct,j))):yt(e.POLYGON_OFFSET_FILL)}function Le(U){U?tt(e.SCISSOR_TEST):yt(e.SCISSOR_TEST)}function Fe(U){U===void 0&&(U=e.TEXTURE0+W-1),et!==U&&(e.activeTexture(U),et=U)}function O(U,ct,j){j===void 0&&(et===null?j=e.TEXTURE0+W-1:j=et);let ut=st[j];ut===void 0&&(ut={type:void 0,texture:void 0},st[j]=ut),(ut.type!==U||ut.texture!==ct)&&(et!==j&&(e.activeTexture(j),et=j),e.bindTexture(U,ct||K[U]),ut.type=U,ut.texture=ct)}function hn(){let U=st[et];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function le(){try{e.compressedTexImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function R(){try{e.compressedTexImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function y(){try{e.texSubImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function P(){try{e.texSubImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function H(){try{e.compressedTexSubImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function Y(){try{e.compressedTexSubImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function at(){try{e.texStorage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function rt(){try{e.texStorage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function J(){try{e.texImage2D(...arguments)}catch(U){Lt("WebGLState:",U)}}function Q(){try{e.texImage3D(...arguments)}catch(U){Lt("WebGLState:",U)}}function ot(U){return d[U]!==void 0?d[U]:e.getParameter(U)}function Et(U,ct){d[U]!==ct&&(e.pixelStorei(U,ct),d[U]=ct)}function ht(U){_e.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function lt(U){$t.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),$t.copy(U))}function Tt(U,ct){let j=c.get(ct);j===void 0&&(j=new WeakMap,c.set(ct,j));let ut=j.get(U);ut===void 0&&(ut=e.getUniformBlockIndex(ct,U.name),j.set(U,ut))}function Rt(U,ct){let ut=c.get(ct).get(U);l.get(ct)!==ut&&(e.uniformBlockBinding(ct,ut,U.__bindingPointIndex),l.set(ct,ut))}function Bt(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},et=null,st={},u={},p=new WeakMap,_=[],M=null,m=!1,f=null,g=null,S=null,v=null,E=null,T=null,C=null,x=new Gt(0,0,0),w=0,D=!1,L=null,z=null,k=null,I=null,G=null,_e.set(0,0,e.canvas.width,e.canvas.height),$t.set(0,0,e.canvas.width,e.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:tt,disable:yt,bindFramebuffer:It,drawBuffers:_t,useProgram:kt,setBlending:ee,setMaterial:ve,setFlipSided:Kt,setCullFace:Ce,setLineWidth:Qe,setPolygonOffset:Rn,setScissorTest:Le,activeTexture:Fe,bindTexture:O,unbindTexture:hn,compressedTexImage2D:le,compressedTexImage3D:R,texImage2D:J,texImage3D:Q,pixelStorei:Et,getParameter:ot,updateUBOMapping:Tt,uniformBlockBinding:Rt,texStorage2D:at,texStorage3D:rt,texSubImage2D:y,texSubImage3D:P,compressedTexSubImage2D:H,compressedTexSubImage3D:Y,scissor:ht,viewport:lt,reset:Bt}}function W2(e,t,n,i,s,a,r){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,d=new Set,u,p=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,y){return _?new OffscreenCanvas(R,y):Hl("canvas")}function m(R,y,P){let H=1,Y=le(R);if((Y.width>P||Y.height>P)&&(H=P/Math.max(Y.width,Y.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let at=Math.floor(H*Y.width),rt=Math.floor(H*Y.height);u===void 0&&(u=M(at,rt));let J=y?M(at,rt):u;return J.width=at,J.height=rt,J.getContext("2d").drawImage(R,0,0,at,rt),Dt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+at+"x"+rt+")."),J}else return"data"in R&&Dt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),R;return R}function f(R){return R.generateMipmaps}function g(R){e.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?e.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(R,y,P,H,Y,at=!1){if(R!==null){if(e[R]!==void 0)return e[R];Dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let rt;H&&(rt=t.get("EXT_texture_norm16"),rt||Dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===e.RED&&(P===e.FLOAT&&(J=e.R32F),P===e.HALF_FLOAT&&(J=e.R16F),P===e.UNSIGNED_BYTE&&(J=e.R8),P===e.UNSIGNED_SHORT&&rt&&(J=rt.R16_EXT),P===e.SHORT&&rt&&(J=rt.R16_SNORM_EXT)),y===e.RED_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.R8UI),P===e.UNSIGNED_SHORT&&(J=e.R16UI),P===e.UNSIGNED_INT&&(J=e.R32UI),P===e.BYTE&&(J=e.R8I),P===e.SHORT&&(J=e.R16I),P===e.INT&&(J=e.R32I)),y===e.RG&&(P===e.FLOAT&&(J=e.RG32F),P===e.HALF_FLOAT&&(J=e.RG16F),P===e.UNSIGNED_BYTE&&(J=e.RG8),P===e.UNSIGNED_SHORT&&rt&&(J=rt.RG16_EXT),P===e.SHORT&&rt&&(J=rt.RG16_SNORM_EXT)),y===e.RG_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RG8UI),P===e.UNSIGNED_SHORT&&(J=e.RG16UI),P===e.UNSIGNED_INT&&(J=e.RG32UI),P===e.BYTE&&(J=e.RG8I),P===e.SHORT&&(J=e.RG16I),P===e.INT&&(J=e.RG32I)),y===e.RGB_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RGB8UI),P===e.UNSIGNED_SHORT&&(J=e.RGB16UI),P===e.UNSIGNED_INT&&(J=e.RGB32UI),P===e.BYTE&&(J=e.RGB8I),P===e.SHORT&&(J=e.RGB16I),P===e.INT&&(J=e.RGB32I)),y===e.RGBA_INTEGER&&(P===e.UNSIGNED_BYTE&&(J=e.RGBA8UI),P===e.UNSIGNED_SHORT&&(J=e.RGBA16UI),P===e.UNSIGNED_INT&&(J=e.RGBA32UI),P===e.BYTE&&(J=e.RGBA8I),P===e.SHORT&&(J=e.RGBA16I),P===e.INT&&(J=e.RGBA32I)),y===e.RGB&&(P===e.UNSIGNED_SHORT&&rt&&(J=rt.RGB16_EXT),P===e.SHORT&&rt&&(J=rt.RGB16_SNORM_EXT),P===e.UNSIGNED_INT_5_9_9_9_REV&&(J=e.RGB9_E5),P===e.UNSIGNED_INT_10F_11F_11F_REV&&(J=e.R11F_G11F_B10F)),y===e.RGBA){let Q=at?Vl:jt.getTransfer(Y);P===e.FLOAT&&(J=e.RGBA32F),P===e.HALF_FLOAT&&(J=e.RGBA16F),P===e.UNSIGNED_BYTE&&(J=Q===oe?e.SRGB8_ALPHA8:e.RGBA8),P===e.UNSIGNED_SHORT&&rt&&(J=rt.RGBA16_EXT),P===e.SHORT&&rt&&(J=rt.RGBA16_SNORM_EXT),P===e.UNSIGNED_SHORT_4_4_4_4&&(J=e.RGBA4),P===e.UNSIGNED_SHORT_5_5_5_1&&(J=e.RGB5_A1)}return(J===e.R16F||J===e.R32F||J===e.RG16F||J===e.RG32F||J===e.RGBA16F||J===e.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function E(R,y){let P;return R?y===null||y===Di||y===Eo?P=e.DEPTH24_STENCIL8:y===Ni?P=e.DEPTH32F_STENCIL8:y===bo&&(P=e.DEPTH24_STENCIL8,Dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Di||y===Eo?P=e.DEPTH_COMPONENT24:y===Ni?P=e.DEPTH_COMPONENT32F:y===bo&&(P=e.DEPTH_COMPONENT16),P}function T(R,y){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function C(R){let y=R.target;y.removeEventListener("dispose",C),w(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(R){let y=R.target;y.removeEventListener("dispose",x),L(y)}function w(R){let y=i.get(R);if(y.__webglInit===void 0)return;let P=R.source,H=p.get(P);if(H){let Y=H[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&D(R),Object.keys(H).length===0&&p.delete(P)}i.remove(R)}function D(R){let y=i.get(R);e.deleteTexture(y.__webglTexture);let P=R.source,H=p.get(P);delete H[y.__cacheKey],r.memory.textures--}function L(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let Y=0;Y<y.__webglFramebuffer[H].length;Y++)e.deleteFramebuffer(y.__webglFramebuffer[H][Y]);else e.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)e.deleteFramebuffer(y.__webglFramebuffer[H]);else e.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&e.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&e.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&e.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&e.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let P=R.textures;for(let H=0,Y=P.length;H<Y;H++){let at=i.get(P[H]);at.__webglTexture&&(e.deleteTexture(at.__webglTexture),r.memory.textures--),i.remove(P[H])}i.remove(R)}let z=0;function k(){z=0}function I(){return z}function G(R){z=R}function W(){let R=z;return R>=s.maxTextures&&Dt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,R}function q(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function nt(R,y){let P=i.get(R);if(R.isVideoTexture&&O(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&P.__version!==R.version){let H=R.image;if(H===null)Dt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Dt("WebGLRenderer: Texture marked for update but image is incomplete");else{yt(P,R,y);return}}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,P.__webglTexture,e.TEXTURE0+y)}function Z(R,y){let P=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){yt(P,R,y);return}else R.isExternalTexture&&(P.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,P.__webglTexture,e.TEXTURE0+y)}function et(R,y){let P=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&P.__version!==R.version){yt(P,R,y);return}n.bindTexture(e.TEXTURE_3D,P.__webglTexture,e.TEXTURE0+y)}function st(R,y){let P=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&P.__version!==R.version){It(P,R,y);return}n.bindTexture(e.TEXTURE_CUBE_MAP,P.__webglTexture,e.TEXTURE0+y)}let Ct={[Th]:e.REPEAT,[ki]:e.CLAMP_TO_EDGE,[Ah]:e.MIRRORED_REPEAT},At={[sn]:e.NEAREST,[uM]:e.NEAREST_MIPMAP_NEAREST,[oc]:e.NEAREST_MIPMAP_LINEAR,[un]:e.LINEAR,[jh]:e.LINEAR_MIPMAP_NEAREST,[va]:e.LINEAR_MIPMAP_LINEAR},_e={[pM]:e.NEVER,[yM]:e.ALWAYS,[mM]:e.LESS,[Pf]:e.LEQUAL,[gM]:e.EQUAL,[Bf]:e.GEQUAL,[_M]:e.GREATER,[vM]:e.NOTEQUAL};function $t(R,y){if(y.type===Ni&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===jh||y.magFilter===oc||y.magFilter===va||y.minFilter===un||y.minFilter===jh||y.minFilter===oc||y.minFilter===va)&&Dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(R,e.TEXTURE_WRAP_S,Ct[y.wrapS]),e.texParameteri(R,e.TEXTURE_WRAP_T,Ct[y.wrapT]),(R===e.TEXTURE_3D||R===e.TEXTURE_2D_ARRAY)&&e.texParameteri(R,e.TEXTURE_WRAP_R,Ct[y.wrapR]),e.texParameteri(R,e.TEXTURE_MAG_FILTER,At[y.magFilter]),e.texParameteri(R,e.TEXTURE_MIN_FILTER,At[y.minFilter]),y.compareFunction&&(e.texParameteri(R,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(R,e.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==oc&&y.minFilter!==va||y.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");e.texParameterf(R,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ne(R,y){let P=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",C));let H=y.source,Y=p.get(H);Y===void 0&&(Y={},p.set(H,Y));let at=q(y);if(at!==R.__cacheKey){Y[at]===void 0&&(Y[at]={texture:e.createTexture(),usedTimes:0},r.memory.textures++,P=!0),Y[at].usedTimes++;let rt=Y[R.__cacheKey];rt!==void 0&&(Y[R.__cacheKey].usedTimes--,rt.usedTimes===0&&D(y)),R.__cacheKey=at,R.__webglTexture=Y[at].texture}return P}function K(R,y,P){return Math.floor(Math.floor(R/P)/y)}function tt(R,y,P,H){let at=R.updateRanges;if(at.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,y.width,y.height,P,H,y.data);else{at.sort((Et,ht)=>Et.start-ht.start);let rt=0;for(let Et=1;Et<at.length;Et++){let ht=at[rt],lt=at[Et],Tt=ht.start+ht.count,Rt=K(lt.start,y.width,4),Bt=K(ht.start,y.width,4);lt.start<=Tt+1&&Rt===Bt&&K(lt.start+lt.count-1,y.width,4)===Rt?ht.count=Math.max(ht.count,lt.start+lt.count-ht.start):(++rt,at[rt]=lt)}at.length=rt+1;let J=n.getParameter(e.UNPACK_ROW_LENGTH),Q=n.getParameter(e.UNPACK_SKIP_PIXELS),ot=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,y.width);for(let Et=0,ht=at.length;Et<ht;Et++){let lt=at[Et],Tt=Math.floor(lt.start/4),Rt=Math.ceil(lt.count/4),Bt=Tt%y.width,U=Math.floor(Tt/y.width),ct=Rt,j=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,Bt),n.pixelStorei(e.UNPACK_SKIP_ROWS,U),n.texSubImage2D(e.TEXTURE_2D,0,Bt,U,ct,j,P,H,y.data)}R.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,J),n.pixelStorei(e.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(e.UNPACK_SKIP_ROWS,ot)}}function yt(R,y,P){let H=e.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=e.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=e.TEXTURE_3D);let Y=ne(R,y),at=y.source;n.bindTexture(H,R.__webglTexture,e.TEXTURE0+P);let rt=i.get(at);if(at.version!==rt.__version||Y===!0){if(n.activeTexture(e.TEXTURE0+P),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let j=jt.getPrimaries(jt.workingColorSpace),ut=y.colorSpace===Ms?null:jt.getPrimaries(y.colorSpace),mt=y.colorSpace===Ms||j===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt)}n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=m(y.image,!1,s.maxTextureSize);Q=hn(y,Q);let ot=a.convert(y.format,y.colorSpace),Et=a.convert(y.type),ht=v(y.internalFormat,ot,Et,y.normalized,y.colorSpace,y.isVideoTexture);$t(H,y);let lt,Tt=y.mipmaps,Rt=y.isVideoTexture!==!0,Bt=rt.__version===void 0||Y===!0,U=at.dataReady,ct=T(y,Q);if(y.isDepthTexture)ht=E(y.format===ya,y.type),Bt&&(Rt?n.texStorage2D(e.TEXTURE_2D,1,ht,Q.width,Q.height):n.texImage2D(e.TEXTURE_2D,0,ht,Q.width,Q.height,0,ot,Et,null));else if(y.isDataTexture)if(Tt.length>0){Rt&&Bt&&n.texStorage2D(e.TEXTURE_2D,ct,ht,Tt[0].width,Tt[0].height);for(let j=0,ut=Tt.length;j<ut;j++)lt=Tt[j],Rt?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,Et,lt.data):n.texImage2D(e.TEXTURE_2D,j,ht,lt.width,lt.height,0,ot,Et,lt.data);y.generateMipmaps=!1}else Rt?(Bt&&n.texStorage2D(e.TEXTURE_2D,ct,ht,Q.width,Q.height),U&&tt(y,Q,ot,Et)):n.texImage2D(e.TEXTURE_2D,0,ht,Q.width,Q.height,0,ot,Et,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Rt&&Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,ht,Tt[0].width,Tt[0].height,Q.depth);for(let j=0,ut=Tt.length;j<ut;j++)if(lt=Tt[j],y.format!==yi)if(ot!==null)if(Rt){if(U)if(y.layerUpdates.size>0){let mt=Xg(lt.width,lt.height,y.format,y.type);for(let it of y.layerUpdates){let wt=lt.data.subarray(it*mt/lt.data.BYTES_PER_ELEMENT,(it+1)*mt/lt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,it,lt.width,lt.height,1,ot,wt)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,Q.depth,ot,lt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,j,ht,lt.width,lt.height,Q.depth,0,lt.data,0,0);else Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,j,0,0,0,lt.width,lt.height,Q.depth,ot,Et,lt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,j,ht,lt.width,lt.height,Q.depth,0,ot,Et,lt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Rt&&Bt&&n.texStorage2D(e.TEXTURE_2D,ct,ht,Tt[0].width,Tt[0].height);for(let j=0,ut=Tt.length;j<ut;j++)lt=Tt[j],y.format!==yi?ot!==null?Rt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,lt.data):n.compressedTexImage2D(e.TEXTURE_2D,j,ht,lt.width,lt.height,0,lt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,lt.width,lt.height,ot,Et,lt.data):n.texImage2D(e.TEXTURE_2D,j,ht,lt.width,lt.height,0,ot,Et,lt.data)}else if(y.isDataArrayTexture)if(Rt){if(Bt&&n.texStorage3D(e.TEXTURE_2D_ARRAY,ct,ht,Q.width,Q.height,Q.depth),U)if(y.layerUpdates.size>0){let j=Xg(Q.width,Q.height,y.format,y.type);for(let ut of y.layerUpdates){let mt=Q.data.subarray(ut*j/Q.data.BYTES_PER_ELEMENT,(ut+1)*j/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,ot,Et,mt)}y.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ot,Et,Q.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,ht,Q.width,Q.height,Q.depth,0,ot,Et,Q.data);else if(y.isData3DTexture)Rt?(Bt&&n.texStorage3D(e.TEXTURE_3D,ct,ht,Q.width,Q.height,Q.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ot,Et,Q.data)):n.texImage3D(e.TEXTURE_3D,0,ht,Q.width,Q.height,Q.depth,0,ot,Et,Q.data);else if(y.isFramebufferTexture){if(Bt)if(Rt)n.texStorage2D(e.TEXTURE_2D,ct,ht,Q.width,Q.height);else{let j=Q.width,ut=Q.height;for(let mt=0;mt<ct;mt++)n.texImage2D(e.TEXTURE_2D,mt,ht,j,ut,0,ot,Et,null),j>>=1,ut>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in e){let j=e.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),Q.parentNode!==j){j.appendChild(Q),d.add(y),j.onpaint=ut=>{let mt=ut.changedElements;for(let it of d)mt.includes(it.image)&&(it.needsUpdate=!0)},j.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,Q);else{let mt=e.RGBA,it=e.RGBA,wt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,mt,it,wt,Q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Rt&&Bt){let j=le(Tt[0]);n.texStorage2D(e.TEXTURE_2D,ct,ht,j.width,j.height)}for(let j=0,ut=Tt.length;j<ut;j++)lt=Tt[j],Rt?U&&n.texSubImage2D(e.TEXTURE_2D,j,0,0,ot,Et,lt):n.texImage2D(e.TEXTURE_2D,j,ht,ot,Et,lt);y.generateMipmaps=!1}else if(Rt){if(Bt){let j=le(Q);n.texStorage2D(e.TEXTURE_2D,ct,ht,j.width,j.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ot,Et,Q)}else n.texImage2D(e.TEXTURE_2D,0,ht,ot,Et,Q);f(y)&&g(H),rt.__version=at.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function It(R,y,P){if(y.image.length!==6)return;let H=ne(R,y),Y=y.source;n.bindTexture(e.TEXTURE_CUBE_MAP,R.__webglTexture,e.TEXTURE0+P);let at=i.get(Y);if(Y.version!==at.__version||H===!0){n.activeTexture(e.TEXTURE0+P);let rt=jt.getPrimaries(jt.workingColorSpace),J=y.colorSpace===Ms?null:jt.getPrimaries(y.colorSpace),Q=y.colorSpace===Ms||rt===J?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ot=y.isCompressedTexture||y.image[0].isCompressedTexture,Et=y.image[0]&&y.image[0].isDataTexture,ht=[];for(let it=0;it<6;it++)!ot&&!Et?ht[it]=m(y.image[it],!0,s.maxCubemapSize):ht[it]=Et?y.image[it].image:y.image[it],ht[it]=hn(y,ht[it]);let lt=ht[0],Tt=a.convert(y.format,y.colorSpace),Rt=a.convert(y.type),Bt=v(y.internalFormat,Tt,Rt,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ct=at.__version===void 0||H===!0,j=Y.dataReady,ut=T(y,lt);$t(e.TEXTURE_CUBE_MAP,y);let mt;if(ot){U&&ct&&n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Bt,lt.width,lt.height);for(let it=0;it<6;it++){mt=ht[it].mipmaps;for(let wt=0;wt<mt.length;wt++){let Mt=mt[wt];y.format!==yi?Tt!==null?U?j&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,0,0,Mt.width,Mt.height,Tt,Mt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,Bt,Mt.width,Mt.height,0,Mt.data):Dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,0,0,Mt.width,Mt.height,Tt,Rt,Mt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt,Bt,Mt.width,Mt.height,0,Tt,Rt,Mt.data)}}}else{if(mt=y.mipmaps,U&&ct){mt.length>0&&ut++;let it=le(ht[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,ut,Bt,it.width,it.height)}for(let it=0;it<6;it++)if(Et){U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ht[it].width,ht[it].height,Tt,Rt,ht[it].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,ht[it].width,ht[it].height,0,Tt,Rt,ht[it].data);for(let wt=0;wt<mt.length;wt++){let ye=mt[wt].image[it].image;U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,0,0,ye.width,ye.height,Tt,Rt,ye.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,Bt,ye.width,ye.height,0,Tt,Rt,ye.data)}}else{U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Tt,Rt,ht[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Bt,Tt,Rt,ht[it]);for(let wt=0;wt<mt.length;wt++){let Mt=mt[wt];U?j&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,0,0,Tt,Rt,Mt.image[it]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+it,wt+1,Bt,Tt,Rt,Mt.image[it])}}}f(y)&&g(e.TEXTURE_CUBE_MAP),at.__version=Y.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function _t(R,y,P,H,Y,at){let rt=a.convert(P.format,P.colorSpace),J=a.convert(P.type),Q=v(P.internalFormat,rt,J,P.normalized,P.colorSpace),ot=i.get(y),Et=i.get(P);if(Et.__renderTarget=y,!ot.__hasExternalTextures){let ht=Math.max(1,y.width>>at),lt=Math.max(1,y.height>>at);Y===e.TEXTURE_3D||Y===e.TEXTURE_2D_ARRAY?n.texImage3D(Y,at,Q,ht,lt,y.depth,0,rt,J,null):n.texImage2D(Y,at,Q,ht,lt,0,rt,J,null)}n.bindFramebuffer(e.FRAMEBUFFER,R),Fe(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,H,Y,Et.__webglTexture,0,Le(y)):(Y===e.TEXTURE_2D||Y>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,H,Y,Et.__webglTexture,at),n.bindFramebuffer(e.FRAMEBUFFER,null)}function kt(R,y,P){if(e.bindRenderbuffer(e.RENDERBUFFER,R),y.depthBuffer){let H=y.depthTexture,Y=H&&H.isDepthTexture?H.type:null,at=E(y.stencilBuffer,Y),rt=y.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Fe(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(y),at,y.width,y.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(y),at,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,at,y.width,y.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,rt,e.RENDERBUFFER,R)}else{let H=y.textures;for(let Y=0;Y<H.length;Y++){let at=H[Y],rt=a.convert(at.format,at.colorSpace),J=a.convert(at.type),Q=v(at.internalFormat,rt,J,at.normalized,at.colorSpace);Fe(y)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Le(y),Q,y.width,y.height):P?e.renderbufferStorageMultisample(e.RENDERBUFFER,Le(y),Q,y.width,y.height):e.renderbufferStorage(e.RENDERBUFFER,Q,y.width,y.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function qe(R,y,P){let H=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),H){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,Y.__webglTexture),$t(e.TEXTURE_CUBE_MAP,y.depthTexture);let ot=a.convert(y.depthTexture.format),Et=a.convert(y.depthTexture.type),ht;y.depthTexture.format===Xi?ht=e.DEPTH_COMPONENT24:y.depthTexture.format===ya&&(ht=e.DEPTH24_STENCIL8);for(let lt=0;lt<6;lt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ht,y.width,y.height,0,ot,Et,null)}}else nt(y.depthTexture,0);let at=Y.__webglTexture,rt=Le(y),J=H?e.TEXTURE_CUBE_MAP_POSITIVE_X+P:e.TEXTURE_2D,Q=y.depthTexture.format===ya?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xi)Fe(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,J,at,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,Q,J,at,0);else if(y.depthTexture.format===ya)Fe(y)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,J,at,0,rt):e.framebufferTexture2D(e.FRAMEBUFFER,Q,J,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Wt(R){let y=i.get(R),P=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let H=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",Y)};H.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=H}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(P)for(let H=0;H<6;H++)qe(y.__webglFramebuffer[H],R,H);else{let H=R.texture.mipmaps;H&&H.length>0?qe(y.__webglFramebuffer[0],R,0):qe(y.__webglFramebuffer,R,0)}else if(P){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=e.createRenderbuffer(),kt(y.__webglDepthbuffer[H],R,!1);else{let Y=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer[H];e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,at)}}else{let H=R.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=e.createRenderbuffer(),kt(y.__webglDepthbuffer,R,!1);else{let Y=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,at=y.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,at),e.framebufferRenderbuffer(e.FRAMEBUFFER,Y,e.RENDERBUFFER,at)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ee(R,y,P){let H=i.get(R);y!==void 0&&_t(H.__webglFramebuffer,R,R.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),P!==void 0&&Wt(R)}function ve(R){let y=R.texture,P=i.get(R),H=i.get(y);R.addEventListener("dispose",x);let Y=R.textures,at=R.isWebGLCubeRenderTarget===!0,rt=Y.length>1;if(rt||(H.__webglTexture===void 0&&(H.__webglTexture=e.createTexture()),H.__version=y.version,r.memory.textures++),at){P.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer[J]=[];for(let Q=0;Q<y.mipmaps.length;Q++)P.__webglFramebuffer[J][Q]=e.createFramebuffer()}else P.__webglFramebuffer[J]=e.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){P.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)P.__webglFramebuffer[J]=e.createFramebuffer()}else P.__webglFramebuffer=e.createFramebuffer();if(rt)for(let J=0,Q=Y.length;J<Q;J++){let ot=i.get(Y[J]);ot.__webglTexture===void 0&&(ot.__webglTexture=e.createTexture(),r.memory.textures++)}if(R.samples>0&&Fe(R)===!1){P.__webglMultisampledFramebuffer=e.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){let Q=Y[J];P.__webglColorRenderbuffer[J]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,P.__webglColorRenderbuffer[J]);let ot=a.convert(Q.format,Q.colorSpace),Et=a.convert(Q.type),ht=v(Q.internalFormat,ot,Et,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),lt=Le(R);e.renderbufferStorageMultisample(e.RENDERBUFFER,lt,ht,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+J,e.RENDERBUFFER,P.__webglColorRenderbuffer[J])}e.bindRenderbuffer(e.RENDERBUFFER,null),R.depthBuffer&&(P.__webglDepthRenderbuffer=e.createRenderbuffer(),kt(P.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(at){n.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture),$t(e.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)_t(P.__webglFramebuffer[J][Q],R,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,Q);else _t(P.__webglFramebuffer[J],R,y,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);f(y)&&g(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(rt){for(let J=0,Q=Y.length;J<Q;J++){let ot=Y[J],Et=i.get(ot),ht=e.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ht=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(ht,Et.__webglTexture),$t(ht,ot),_t(P.__webglFramebuffer,R,ot,e.COLOR_ATTACHMENT0+J,ht,0),f(ot)&&g(ht)}n.unbindTexture()}else{let J=e.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(J=R.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(J,H.__webglTexture),$t(J,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)_t(P.__webglFramebuffer[Q],R,y,e.COLOR_ATTACHMENT0,J,Q);else _t(P.__webglFramebuffer,R,y,e.COLOR_ATTACHMENT0,J,0);f(y)&&g(J),n.unbindTexture()}R.depthBuffer&&Wt(R)}function Kt(R){let y=R.textures;for(let P=0,H=y.length;P<H;P++){let Y=y[P];if(f(Y)){let at=S(R),rt=i.get(Y).__webglTexture;n.bindTexture(at,rt),g(at),n.unbindTexture()}}}let Ce=[],Qe=[];function Rn(R){if(R.samples>0){if(Fe(R)===!1){let y=R.textures,P=R.width,H=R.height,Y=e.COLOR_BUFFER_BIT,at=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=i.get(R),J=y.length>1;if(J)for(let ot=0;ot<y.length;ot++)n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let Q=R.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let ot=0;ot<y.length;ot++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Y|=e.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Y|=e.STENCIL_BUFFER_BIT)),J){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let Et=i.get(y[ot]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,P,H,0,0,P,H,Y,e.NEAREST),l===!0&&(Ce.length=0,Qe.length=0,Ce.push(e.COLOR_ATTACHMENT0+ot),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Ce.push(at),Qe.push(at),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Qe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ce))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),J)for(let ot=0;ot<y.length;ot++){n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.RENDERBUFFER,rt.__webglColorRenderbuffer[ot]);let Et=i.get(y[ot]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,rt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ot,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[y])}}}function Le(R){return Math.min(s.maxSamples,R.samples)}function Fe(R){let y=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function O(R){let y=r.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function hn(R,y){let P=R.colorSpace,H=R.format,Y=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||P!==Fl&&P!==Ms&&(jt.getTransfer(P)===oe?(H!==yi||Y!==Vn)&&Dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",P)),y}function le(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=nt,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=st,this.rebindTextures=ee,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=Fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function q2(e,t){function n(i,s=Ms){let a,r=jt.getTransfer(s);if(i===Vn)return e.UNSIGNED_BYTE;if(i===$h)return e.UNSIGNED_SHORT_4_4_4_4;if(i===tf)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Lg)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ug)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Dg)return e.BYTE;if(i===Ng)return e.SHORT;if(i===bo)return e.UNSIGNED_SHORT;if(i===Qh)return e.INT;if(i===Di)return e.UNSIGNED_INT;if(i===Ni)return e.FLOAT;if(i===Li)return e.HALF_FLOAT;if(i===Og)return e.ALPHA;if(i===Ig)return e.RGB;if(i===yi)return e.RGBA;if(i===Xi)return e.DEPTH_COMPONENT;if(i===ya)return e.DEPTH_STENCIL;if(i===Pg)return e.RED;if(i===ef)return e.RED_INTEGER;if(i===xa)return e.RG;if(i===nf)return e.RG_INTEGER;if(i===sf)return e.RGBA_INTEGER;if(i===lc||i===cc||i===uc||i===hc)if(r===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===lc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===lc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===af||i===rf||i===of||i===lf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===af)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===of)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cf||i===uf||i===hf||i===ff||i===df||i===fc||i===pf)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(i===cf||i===uf)return r===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===hf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===ff)return a.COMPRESSED_R11_EAC;if(i===df)return a.COMPRESSED_SIGNED_R11_EAC;if(i===fc)return a.COMPRESSED_RG11_EAC;if(i===pf)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===mf||i===gf||i===_f||i===vf||i===yf||i===xf||i===Sf||i===Mf||i===bf||i===Ef||i===Tf||i===Af||i===wf||i===Cf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(i===mf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_f)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ef)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Af)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===wf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cf)return r===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Rf||i===Df||i===Nf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(i===Rf)return r===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Df)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lf||i===Uf||i===dc||i===Of)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(i===Lf)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Uf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Of)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Eo?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}var Y2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,c0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){let i=new Kl(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let n=t.cameras[0].viewport,i=new ii({vertexShader:Y2,fragmentShader:Z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new Jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},u0=class extends Ci{constructor(t,n){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,_=null,M=typeof XRWebGLBinding<"u",m=new c0,f={},g=n.getContextAttributes(),S=null,v=null,E=[],T=[],C=new Ut,x=null,w=null,D=new gn;D.viewport=new Ne;let L=new gn;L.viewport=new Ne;let z=[D,L],k=new Yh,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let tt=E[K];return tt===void 0&&(tt=new po,E[K]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(K){let tt=E[K];return tt===void 0&&(tt=new po,E[K]=tt),tt.getGripSpace()},this.getHand=function(K){let tt=E[K];return tt===void 0&&(tt=new po,E[K]=tt),tt.getHandSpace()};function W(K){let tt=T.indexOf(K.inputSource);if(tt===-1)return;let yt=E[tt];yt!==void 0&&(yt.update(K.inputSource,K.frame,c||r),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",nt);for(let K=0;K<E.length;K++){let tt=T[K];tt!==null&&(T[K]=null,E[K].disconnect(tt))}I=null,G=null,m.reset();for(let K in f)delete f[K];if(t.setRenderTarget(S),p=null,u=null,d=null,s=null,v=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),w!==null){let K=w.camera;K.fov=w.fov,K.zoom=w.zoom,K.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){a=K,i.isPresenting===!0&&Dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",nt),g.xrCompatible!==!0&&await n.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,It=null,_t=null;g.depth&&(_t=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,yt=g.stencil?ya:Xi,It=g.stencil?Eo:Di);let kt={colorFormat:n.RGBA8,depthFormat:_t,scaleFactor:a};d=this.getBinding(),u=d.createProjectionLayer(kt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new zn(u.textureWidth,u.textureHeight,{format:yi,type:Vn,depthTexture:new ua(u.textureWidth,u.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let yt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,n,yt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new zn(p.framebufferWidth,p.framebufferHeight,{format:yi,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(K){for(let tt=0;tt<K.removed.length;tt++){let yt=K.removed[tt],It=T.indexOf(yt);It>=0&&(T[It]=null,E[It].disconnect(yt))}for(let tt=0;tt<K.added.length;tt++){let yt=K.added[tt],It=T.indexOf(yt);if(It===-1){for(let kt=0;kt<E.length;kt++)if(kt>=T.length){T.push(yt),It=kt;break}else if(T[kt]===null){T[kt]=yt,It=kt;break}if(It===-1)break}let _t=E[It];_t&&_t.connect(yt)}}let Z=new B,et=new B;function st(K,tt,yt){Z.setFromMatrixPosition(tt.matrixWorld),et.setFromMatrixPosition(yt.matrixWorld);let It=Z.distanceTo(et),_t=tt.projectionMatrix.elements,kt=yt.projectionMatrix.elements,qe=_t[14]/(_t[10]-1),Wt=_t[14]/(_t[10]+1),ee=(_t[9]+1)/_t[5],ve=(_t[9]-1)/_t[5],Kt=(_t[8]-1)/_t[0],Ce=(kt[8]+1)/kt[0],Qe=qe*Kt,Rn=qe*Ce,Le=It/(-Kt+Ce),Fe=Le*-Kt;if(tt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Fe),K.translateZ(Le),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),_t[10]===-1)K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let O=qe+Le,hn=Wt+Le,le=Qe-Fe,R=Rn+(It-Fe),y=ee*Wt/hn*O,P=ve*Wt/hn*O;K.projectionMatrix.makePerspective(le,R,y,P,O,hn),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ct(K,tt){tt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(tt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let tt=K.near,yt=K.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(yt=m.depthFar)),k.near=L.near=D.near=tt,k.far=L.far=D.far=yt,(I!==k.near||G!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,G=k.far),k.layers.mask=K.layers.mask|6,D.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;let It=K.parent,_t=k.cameras;Ct(k,It);for(let kt=0;kt<_t.length;kt++)Ct(_t[kt],It);_t.length===2?st(k,D,L):k.projectionMatrix.copy(D.projectionMatrix),w===null&&K.isPerspectiveCamera&&(w={camera:K,fov:K.fov,zoom:K.zoom}),At(K,k,It)};function At(K,tt,yt){yt===null?K.matrix.copy(tt.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(tt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(tt.projectionMatrix),K.projectionMatrixInverse.copy(tt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ho*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return f[K]};let _e=null;function $t(K,tt){if(h=tt.getViewerPose(c||r),_=tt,h!==null){let yt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let It=!1;yt.length!==k.cameras.length&&(k.cameras.length=0,It=!0);for(let Wt=0;Wt<yt.length;Wt++){let ee=yt[Wt],ve=null;if(p!==null)ve=p.getViewport(ee);else{let Ce=d.getViewSubImage(u,ee);ve=Ce.viewport,Wt===0&&(t.setRenderTargetTextures(v,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(v))}let Kt=z[Wt];Kt===void 0&&(Kt=new gn,Kt.layers.enable(Wt),Kt.viewport=new Ne,z[Wt]=Kt),Kt.matrix.fromArray(ee.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(ee.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ve.x,ve.y,ve.width,ve.height),Wt===0&&(k.matrix.copy(Kt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),It===!0&&k.cameras.push(Kt)}let _t=s.enabledFeatures;if(_t&&_t.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=i.getBinding();let Wt=d.getDepthInformation(yt[0]);Wt&&Wt.isValid&&Wt.texture&&m.init(Wt,s.renderState)}if(_t&&_t.includes("camera-access")&&M){t.state.unbindTexture(),d=i.getBinding();for(let Wt=0;Wt<yt.length;Wt++){let ee=yt[Wt].camera;if(ee){let ve=f[ee];ve||(ve=new Kl,f[ee]=ve);let Kt=d.getCameraImage(ee);ve.sourceTexture=Kt}}}}for(let yt=0;yt<E.length;yt++){let It=T[yt],_t=E[yt];It!==null&&_t!==void 0&&_t.update(It,tt,c||r)}_e&&_e(K,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),_=null}let ne=new JM;ne.setAnimationLoop($t),this.setAnimationLoop=function(K){_e=K},this.dispose=function(){}}},K2=new Ue,nb=new Ot;nb.set(-1,0,0,0,1,0,0,0,1);function J2(e,t){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Hg(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,g,S,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?a(m,f):f.isMeshLambertMaterial?(a(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(a(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(a(m,f),_(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),M(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,g,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let g=t.get(f),S=g.envMap,v=g.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(K2.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(nb),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=S*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function M(m,f){let g=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function j2(e,t,n,i){let s={},a={},r=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){let T=E.program;i.uniformBlockBinding(v,T)}function c(v,E){let T=s[v.id];T===void 0&&(m(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",g));let C=E.program;i.updateUBOMapping(v,C);let x=t.render.frame;a[v.id]!==x&&(u(v),a[v.id]=x)}function h(v){let E=d();v.__bindingPointIndex=E;let T=e.createBuffer(),C=v.__size,x=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,C,x),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,T),T}function d(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let E=s[v.id],T=v.uniforms,C=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let x=0,w=T.length;x<w;x++){let D=T[x];if(Array.isArray(D))for(let L=0,z=D.length;L<z;L++)p(D[L],x,L,C);else p(D,x,0,C)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,E,T,C){if(M(v,E,T,C)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let D=0;for(let L=0;L<w.length;L++){let z=w[L],k=f(z);_(z,v.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,x,v.__data)}}function _(v,E,T){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,T)}function M(v,E,T,C){let x=v.value,w=E+"_"+T;if(C[w]===void 0)return typeof x=="number"||typeof x=="boolean"?C[w]=x:ArrayBuffer.isView(x)?C[w]=x.slice():C[w]=x.clone(),!0;{let D=C[w];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return C[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function m(v){let E=v.uniforms,T=0,C=16;for(let w=0,D=E.length;w<D;w++){let L=Array.isArray(E[w])?E[w]:[E[w]];for(let z=0,k=L.length;z<k;z++){let I=L[z],G=Array.isArray(I.value)?I.value:[I.value];for(let W=0,q=G.length;W<q;W++){let nt=G[W],Z=f(nt),et=T%C,st=et%Z.boundary,Ct=et+st;T+=st,Ct!==0&&C-Ct<Z.storage&&(T+=C-Ct),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=Z.storage}}}let x=T%C;return x>0&&(T+=C-x),v.__size=T,v.__cache={},this}function f(v){let E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Dt("WebGLRenderer: Unsupported uniform value type.",v),E}function g(v){let E=v.target;E.removeEventListener("dispose",g);let T=r.indexOf(E.__bindingPointIndex);r.splice(T,1),e.deleteBuffer(s[E.id]),delete s[E.id],delete a[E.id]}function S(){for(let v in s)e.deleteBuffer(s[v]);r=[],s={},a={}}return{bind:l,update:c,dispose:S}}var Q2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),qi=null;function $2(){return qi===null&&(qi=new Nh(Q2,16,16,xa,Li),qi.name="DFG_LUT",qi.minFilter=un,qi.magFilter=un,qi.wrapS=ki,qi.wrapT=ki,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}var Gf=class{constructor(t={}){let{canvas:n=SM(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Vn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=r;let M=p,m=new Set([sf,nf,ef]),f=new Set([Vn,Di,bo,Eo,$h,tf]),g=new Uint32Array(4),S=new Int32Array(4),v=new B,E=null,T=null,C=[],x=[],w=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,L=!1,z=null,k=null,I=null,G=null;this._outputColorSpace=An;let W=0,q=0,nt=null,Z=-1,et=null,st=new Ne,Ct=new Ne,At=null,_e=new Gt(0),$t=0,ne=n.width,K=n.height,tt=1,yt=null,It=null,_t=new Ne(0,0,ne,K),kt=new Ne(0,0,ne,K),qe=!1,Wt=new _o,ee=!1,ve=!1,Kt=new Ue,Ce=new B,Qe=new Ne,Rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function Fe(){return nt===null?tt:1}let O=i;function hn(b,N){return n.getContext(b,N)}let le,R,y,P,H,Y,at,rt,J,Q,ot,Et,ht,lt,Tt,Rt,Bt,U,ct,j,ut,mt,it;try{let b={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",xi,!1),O===null){let N="webgl2";if(O=hn(N,b),O===null)throw hn(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(b){throw n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",xi,!1),Lt("WebGLRenderer: "+b.message),b}function wt(){le=new r3(O),le.init(),ut=new q2(O,le),R=new JC(O,le,t,ut),y=new X2(O,le),R.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),k=O.createFramebuffer(),I=O.createFramebuffer(),G=O.createFramebuffer(),P=new c3(O),H=new D2,Y=new W2(O,le,y,H,R,ut,P),at=new a3(D),rt=new hA(O),mt=new ZC(O,rt),J=new o3(O,rt,P,mt),Q=new h3(O,J,rt,mt,P),U=new u3(O,R,Y),Tt=new jC(H),ot=new R2(D,at,le,R,mt,Tt),Et=new J2(D,H),ht=new L2,lt=new z2(le),Bt=new YC(D,at,y,Q,_,l),Rt=new k2(D,Q,R),it=new j2(O,P,R,y),ct=new KC(O,le,P),j=new l3(O,le,P),P.programs=ot.programs,D.capabilities=R,D.extensions=le,D.properties=H,D.renderLists=ht,D.shadowMap=Rt,D.state=y,D.info=P}M!==Vn&&(w=new d3(M,n.width,n.height,o,s,a));let Mt=new u0(D,O);this.xr=Mt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(ne,K,!1))},this.getSize=function(b){return b.set(ne,K)},this.setSize=function(b,N,X=!0){if(Mt.isPresenting){Dt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,K=N,n.width=Math.floor(b*tt),n.height=Math.floor(N*tt),X===!0&&(n.style.width=b+"px",n.style.height=N+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set(ne*tt,K*tt).floor()},this.setDrawingBufferSize=function(b,N,X){ne=b,K=N,tt=X,n.width=Math.floor(b*X),n.height=Math.floor(N*X),this.setViewport(0,0,b,N)},this.setEffects=function(b){if(M===Vn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let N=0;N<b.length;N++)if(b[N].isOutputPass===!0){Dt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(st)},this.getViewport=function(b){return b.copy(_t)},this.setViewport=function(b,N,X,F){b.isVector4?_t.set(b.x,b.y,b.z,b.w):_t.set(b,N,X,F),y.viewport(st.copy(_t).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(kt)},this.setScissor=function(b,N,X,F){b.isVector4?kt.set(b.x,b.y,b.z,b.w):kt.set(b,N,X,F),y.scissor(Ct.copy(kt).multiplyScalar(tt).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(b){y.setScissorTest(qe=b)},this.setOpaqueSort=function(b){yt=b},this.setTransparentSort=function(b){It=b},this.getClearColor=function(b){return b.copy(Bt.getClearColor())},this.setClearColor=function(){Bt.setClearColor(...arguments)},this.getClearAlpha=function(){return Bt.getClearAlpha()},this.setClearAlpha=function(){Bt.setClearAlpha(...arguments)},this.clear=function(b=!0,N=!0,X=!0){let F=0;if(b){let V=!1;if(nt!==null){let pt=nt.texture.format;V=m.has(pt)}if(V){let pt=nt.texture.type,vt=f.has(pt),dt=Bt.getClearColor(),xt=Bt.getClearAlpha(),bt=dt.r,Vt=dt.g,qt=dt.b;vt?(g[0]=bt,g[1]=Vt,g[2]=qt,g[3]=xt,O.clearBufferuiv(O.COLOR,0,g)):(S[0]=bt,S[1]=Vt,S[2]=qt,S[3]=xt,O.clearBufferiv(O.COLOR,0,S))}else F|=O.COLOR_BUFFER_BIT}N&&(F|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(F|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&O.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),z=b},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",xi,!1),Bt.dispose(),ht.dispose(),lt.dispose(),H.dispose(),at.dispose(),Q.dispose(),mt.dispose(),it.dispose(),ot.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",_0),Mt.removeEventListener("sessionend",v0),Sa.stop()};function ye(b){b.preventDefault(),zg("WebGLRenderer: Context Lost."),L=!0}function ae(){zg("WebGLRenderer: Context Restored."),L=!1;let b=P.autoReset,N=Rt.enabled,X=Rt.autoUpdate,F=Rt.needsUpdate,V=Rt.type;wt(),P.autoReset=b,Rt.enabled=N,Rt.autoUpdate=X,Rt.needsUpdate=F,Rt.type=V}function xi(b){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ui(b){let N=b.target;N.removeEventListener("dispose",Ui),lb(N)}function lb(b){cb(b),H.remove(b)}function cb(b){let N=H.get(b).programs;N!==void 0&&(N.forEach(function(X){ot.releaseProgram(X)}),b.isShaderMaterial&&ot.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,X,F,V,pt){N===null&&(N=Rn);let vt=V.isMesh&&V.matrixWorld.determinantAffine()<0,dt=fb(b,N,X,F,V);y.setMaterial(F,vt);let xt=X.index,bt=1;if(F.wireframe===!0){if(xt=J.getWireframeAttribute(X),xt===void 0)return;bt=2}let Vt=X.drawRange,qt=X.attributes.position,St=Vt.start*bt,re=(Vt.start+Vt.count)*bt;pt!==null&&(St=Math.max(St,pt.start*bt),re=Math.min(re,(pt.start+pt.count)*bt)),xt!==null?(St=Math.max(St,0),re=Math.min(re,xt.count)):qt!=null&&(St=Math.max(St,0),re=Math.min(re,qt.count));let Ve=re-St;if(Ve<0||Ve===1/0)return;mt.setup(V,F,dt,X,xt);let Me,me=ct;if(xt!==null&&(Me=rt.get(xt),me=j,me.setIndex(Me)),V.isMesh)F.wireframe===!0?(y.setLineWidth(F.wireframeLinewidth*Fe()),me.setMode(O.LINES)):me.setMode(O.TRIANGLES);else if(V.isLine){let fn=F.linewidth;fn===void 0&&(fn=1),y.setLineWidth(fn*Fe()),V.isLineSegments?me.setMode(O.LINES):V.isLineLoop?me.setMode(O.LINE_LOOP):me.setMode(O.LINE_STRIP)}else V.isPoints?me.setMode(O.POINTS):V.isSprite&&me.setMode(O.TRIANGLES);if(V.isBatchedMesh)if(le.get("WEBGL_multi_draw"))me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let fn=V._multiDrawStarts,gt=V._multiDrawCounts,Sn=V._multiDrawCount,te=xt?rt.get(xt).bytesPerElement:1,ai=H.get(F).currentProgram.getUniforms();for(let Oi=0;Oi<Sn;Oi++)ai.setValue(O,"_gl_DrawID",Oi),me.render(fn[Oi]/te,gt[Oi])}else if(V.isInstancedMesh)me.renderInstances(St,Ve,V.count);else if(X.isInstancedBufferGeometry){let fn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gt=Math.min(X.instanceCount,fn);me.renderInstances(St,Ve,gt)}else me.render(St,Ve)};function g0(b,N,X,F){z!==null&&b.isNodeMaterial&&z.setObject(F,b),ee===!0&&Tt.setState(b,X,!1),b.transparent===!0&&b.side===vi&&b.forceSinglePass===!1?(b.side=Cn,b.needsUpdate=!0,vc(b,N,F),b.side=ga,b.needsUpdate=!0,vc(b,N,F),b.side=vi):vc(b,N,F)}this.compile=function(b,N,X=null){X===null&&(X=b),z!==null&&z.renderStart(b,N,X),T=lt.get(X),T.init(N),x.push(T),X.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),b!==X&&b.traverseVisible(function(V){V.isLight&&V.layers.test(N.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),z!==null&&z.updateLights(T.state.lightsArray),ve=this.localClippingEnabled,ee=Tt.init(this.clippingPlanes,ve),ee===!0&&Tt.setGlobalState(this.clippingPlanes,N),z!==null&&Rt.render(T.state.shadowsArray,X,N);let F=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let pt=V.material;if(pt)if(Array.isArray(pt))for(let vt=0;vt<pt.length;vt++){let dt=pt[vt];g0(dt,X,N,V),F.add(dt)}else g0(pt,X,N,V),F.add(pt)}),T=x.pop(),z!==null&&z.renderEnd(),F},this.compileAsync=function(b,N,X=null){let F=this.compile(b,N,X);return new Promise(V=>{function pt(){if(F.forEach(function(vt){let xt=H.get(vt).currentProgram;(xt===void 0||xt.isReady())&&F.delete(vt)}),F.size===0){V(b);return}setTimeout(pt,10)}le.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Jf=null;function ub(b){Jf&&Jf(b)}function _0(){Sa.stop()}function v0(){Sa.start()}let Sa=new JM;Sa.setAnimationLoop(ub),typeof self<"u"&&Sa.setContext(self),this.setAnimationLoop=function(b){Jf=b,Mt.setAnimationLoop(b),b===null?Sa.stop():Sa.start()},Mt.addEventListener("sessionstart",_0),Mt.addEventListener("sessionend",v0),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;z!==null&&z.renderStart(b,N);let X=Mt.enabled===!0&&Mt.isPresenting===!0,F=w!==null&&(nt===null||X)&&w.begin(D,nt);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(N),N=Mt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,N,nt),T=lt.get(b,x.length),T.init(N),T.state.textureUnits=Y.getTextureUnits(),x.push(T),Kt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Wt.setFromProjectionMatrix(Kt,wi,N.reversedDepth),ve=this.localClippingEnabled,ee=Tt.init(this.clippingPlanes,ve),E=ht.get(b,C.length),E.init(),C.push(E),Mt.enabled===!0&&Mt.isPresenting===!0){let vt=D.xr.getDepthSensingMesh();vt!==null&&jf(vt,N,-1/0,D.sortObjects)}jf(b,N,0,D.sortObjects),E.finish(),z!==null&&z.updateLights(T.state.lightsArray),D.sortObjects===!0&&E.sort(yt,It),Le=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,Le&&Bt.addToRenderList(E,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ee===!0&&Tt.beginShadows();let V=T.state.shadowsArray;if(Rt.render(V,b,N),ee===!0&&Tt.endShadows(),(F&&w.hasRenderPass())===!1){let vt=E.opaque,dt=E.transmissive;if(T.setupLights(),N.isArrayCamera){let xt=N.cameras;if(dt.length>0)for(let bt=0,Vt=xt.length;bt<Vt;bt++){let qt=xt[bt];x0(vt,dt,b,qt)}Le&&Bt.render(b);for(let bt=0,Vt=xt.length;bt<Vt;bt++){let qt=xt[bt];y0(E,b,qt,qt.viewport)}}else dt.length>0&&x0(vt,dt,b,N),Le&&Bt.render(b),y0(E,b,N)}nt!==null&&q===0&&(Y.updateMultisampleRenderTarget(nt),Y.updateRenderTargetMipmap(nt)),F&&w.end(D),b.isScene===!0&&b.onAfterRender(D,b,N),mt.resetDefaultState(),Z=-1,et=null,x.pop(),x.length>0?(T=x[x.length-1],Y.setTextureUnits(T.state.textureUnits),ee===!0&&Tt.setGlobalState(D.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,z!==null&&z.renderEnd()};function jf(b,N,X,F){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Wt)){F&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Kt);let vt=Q.update(b),dt=b.material;dt.visible&&E.push(b,vt,dt,X,Qe.z,null,N)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Wt))){let vt=Q.update(b),dt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Qe.copy(vt.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(Kt)),Array.isArray(dt)){let xt=vt.groups;for(let bt=0,Vt=xt.length;bt<Vt;bt++){let qt=xt[bt],St=dt[qt.materialIndex];St&&St.visible&&E.push(b,vt,St,X,Qe.z,qt,N)}}else dt.visible&&E.push(b,vt,dt,X,Qe.z,null,N)}}let pt=b.children;for(let vt=0,dt=pt.length;vt<dt;vt++)jf(pt[vt],N,X,F)}function y0(b,N,X,F){let{opaque:V,transmissive:pt,transparent:vt}=b;T.setupLightsView(X),ee===!0&&Tt.setGlobalState(D.clippingPlanes,X),F&&y.viewport(st.copy(F)),V.length>0&&_c(V,N,X),pt.length>0&&_c(pt,N,X),vt.length>0&&_c(vt,N,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function x0(b,N,X,F){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[F.id]===void 0){let St=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[F.id]=new zn(1,1,{generateMipmaps:!0,type:St?Li:Vn,minFilter:va,samples:Math.max(4,R.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:jt.workingColorSpace})}let pt=T.state.transmissionRenderTarget[F.id],vt=F.viewport||st;pt.setSize(vt.z*D.transmissionResolutionScale,vt.w*D.transmissionResolutionScale);let dt=D.getRenderTarget(),xt=D.getActiveCubeFace(),bt=D.getActiveMipmapLevel();D.setRenderTarget(pt),D.getClearColor(_e),$t=D.getClearAlpha(),$t<1&&D.setClearColor(16777215,.5),D.clear(),Le&&Bt.render(X);let Vt=D.toneMapping;D.toneMapping=Ri;let qt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),T.setupLightsView(F),ee===!0&&Tt.setGlobalState(D.clippingPlanes,F),_c(b,X,F),Y.updateMultisampleRenderTarget(pt),Y.updateRenderTargetMipmap(pt),le.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let re=0,Ve=N.length;re<Ve;re++){let Me=N[re],{object:me,geometry:fn,material:gt,group:Sn}=Me;if(gt.side===vi&&me.layers.test(F.layers)){let te=gt.side;gt.side=Cn,gt.needsUpdate=!0,S0(me,X,F,fn,gt,Sn),gt.side=te,gt.needsUpdate=!0,St=!0}}St===!0&&(Y.updateMultisampleRenderTarget(pt),Y.updateRenderTargetMipmap(pt))}D.setRenderTarget(dt,xt,bt),D.setClearColor(_e,$t),qt!==void 0&&(F.viewport=qt),D.toneMapping=Vt}function _c(b,N,X){let F=N.isScene===!0?N.overrideMaterial:null;for(let V=0,pt=b.length;V<pt;V++){let vt=b[V],{object:dt,geometry:xt,group:bt}=vt,Vt=vt.material;Vt.allowOverride===!0&&F!==null&&(Vt=F),dt.layers.test(X.layers)&&S0(dt,N,X,xt,Vt,bt)}}function S0(b,N,X,F,V,pt){z!==null&&V.isNodeMaterial&&z.setObject(b,V),b.onBeforeRender(D,N,X,F,V,pt),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(D,N,X,F,b,pt),V.transparent===!0&&V.side===vi&&V.forceSinglePass===!1?(V.side=Cn,V.needsUpdate=!0,D.renderBufferDirect(X,N,F,V,b,pt),V.side=ga,V.needsUpdate=!0,D.renderBufferDirect(X,N,F,V,b,pt),V.side=vi):D.renderBufferDirect(X,N,F,V,b,pt),b.onAfterRender(D,N,X,F,V,pt)}function vc(b,N,X){N.isScene!==!0&&(N=Rn);let F=H.get(b),V=T.state.lights,pt=T.state.shadowsArray,vt=V.state.version,dt=ot.getParameters(b,V.state,pt,N,X,T.state.lightProbeGridArray),xt=ot.getProgramCacheKey(dt),bt=F.programs;F.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?N.environment:null,F.fog=N.fog;let Vt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;F.envMap=at.get(b.envMap||F.environment,Vt),F.envMapRotation=F.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,bt===void 0&&(b.addEventListener("dispose",Ui),bt=new Map,F.programs=bt);let qt=bt.get(xt);if(qt!==void 0){if(F.currentProgram===qt&&F.lightsStateVersion===vt)return b0(b,dt),qt}else dt.uniforms=ot.getUniforms(b),z!==null&&b.isNodeMaterial&&z.build(b,X,dt),b.onBeforeCompile(dt,D),qt=ot.acquireProgram(dt,xt),bt.set(xt,qt),F.uniforms=dt.uniforms;let St=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=Tt.uniform),b0(b,dt),F.needsLights=pb(b),F.lightsStateVersion=vt,F.needsLights&&(St.ambientLightColor.value=V.state.ambient,St.lightProbe.value=V.state.probe,St.sunLights.value=V.state.sun,St.sunLightShadows.value=V.state.sunShadow,St.directionalLights.value=V.state.directional,St.directionalLightShadows.value=V.state.directionalShadow,St.spotLights.value=V.state.spot,St.spotLightShadows.value=V.state.spotShadow,St.rectAreaLights.value=V.state.rectArea,St.ltc_1.value=V.state.rectAreaLTC1,St.ltc_2.value=V.state.rectAreaLTC2,St.pointLights.value=V.state.point,St.pointLightShadows.value=V.state.pointShadow,St.hemisphereLights.value=V.state.hemi,St.sunShadowMatrix.value=V.state.sunShadowMatrix,St.sunShadowCascade.value=V.state.sunShadowCascade,St.directionalShadowMatrix.value=V.state.directionalShadowMatrix,St.spotLightMatrix.value=V.state.spotLightMatrix,St.spotLightMap.value=V.state.spotLightMap,St.pointShadowMatrix.value=V.state.pointShadowMatrix),F.lightProbeGrid=T.state.lightProbeGridArray.length>0,F.currentProgram=qt,F.uniformsList=null,qt}function M0(b){if(b.uniformsList===null){let N=b.currentProgram.getUniforms();b.uniformsList=Co.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function b0(b,N){let X=H.get(b);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function hb(b,N){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let X=0,F=b.length;X<F;X++){let V=b[X];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function fb(b,N,X,F,V){N.isScene!==!0&&(N=Rn),Y.resetTextureUnits();let pt=N.fog,vt=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?N.environment:null,dt=nt===null?D.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:jt.workingColorSpace,xt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,bt=at.get(F.envMap||vt,xt),Vt=F.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qt=!!X.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),St=!!X.morphAttributes.position,re=!!X.morphAttributes.normal,Ve=!!X.morphAttributes.color,Me=Ri;F.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Me=D.toneMapping);let me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fn=me!==void 0?me.length:0,gt=H.get(F),Sn=T.state.lights;if(ee===!0&&(ve===!0||b!==et)){let xe=b===et&&F.id===Z;Tt.setState(F,b,xe)}let te=!1;F.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==Sn.state.version||gt.outputColorSpace!==dt||V.isBatchedMesh&&gt.batching===!1||!V.isBatchedMesh&&gt.batching===!0||V.isBatchedMesh&&gt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&gt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&gt.instancing===!1||!V.isInstancedMesh&&gt.instancing===!0||V.isSkinnedMesh&&gt.skinning===!1||!V.isSkinnedMesh&&gt.skinning===!0||V.isInstancedMesh&&gt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&gt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&gt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&gt.instancingMorph===!1&&V.morphTexture!==null||gt.envMap!==bt||F.fog===!0&&gt.fog!==pt||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Tt.numPlanes||gt.numIntersection!==Tt.numIntersection)||gt.vertexAlphas!==Vt||gt.vertexTangents!==qt||gt.morphTargets!==St||gt.morphNormals!==re||gt.morphColors!==Ve||gt.toneMapping!==Me||gt.morphTargetsCount!==fn||!!gt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(te=!0):(te=!0,gt.__version=F.version);let ai=gt.currentProgram;te===!0&&(ai=vc(F,N,V),z&&F.isNodeMaterial&&z.onUpdateProgram(F,ai,gt));let Oi=!1,Es=!1,$a=!1,fe=ai.getUniforms(),Pe=gt.uniforms;if(y.useProgram(ai.program)&&(Oi=!0,Es=!0,$a=!0),F.id!==Z&&(Z=F.id,Es=!0),gt.needsLights){let xe=hb(T.state.lightProbeGridArray,V);gt.lightProbeGrid!==xe&&(gt.lightProbeGrid=xe,Es=!0)}if(Oi||et!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),fe.setValue(O,"projectionMatrix",b.projectionMatrix),fe.setValue(O,"viewMatrix",b.matrixWorldInverse);let As=fe.map.cameraPosition;As!==void 0&&As.setValue(O,Ce.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&fe.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&fe.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),et!==b&&(et=b,Es=!0,$a=!0)}if(gt.needsLights&&(Sn.state.sunShadowMap.length>0&&fe.setValue(O,"sunShadowMap",Sn.state.sunShadowMap,Y),Sn.state.directionalShadowMap.length>0&&fe.setValue(O,"directionalShadowMap",Sn.state.directionalShadowMap,Y),Sn.state.spotShadowMap.length>0&&fe.setValue(O,"spotShadowMap",Sn.state.spotShadowMap,Y),Sn.state.pointShadowMap.length>0&&fe.setValue(O,"pointShadowMap",Sn.state.pointShadowMap,Y)),V.isSkinnedMesh){fe.setOptional(O,V,"bindMatrix"),fe.setOptional(O,V,"bindMatrixInverse");let xe=V.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),fe.setValue(O,"boneTexture",xe.boneTexture,Y))}V.isBatchedMesh&&(fe.setOptional(O,V,"batchingTexture"),fe.setValue(O,"batchingTexture",V._matricesTexture,Y),fe.setOptional(O,V,"batchingIdTexture"),fe.setValue(O,"batchingIdTexture",V._indirectTexture,Y),fe.setOptional(O,V,"batchingColorTexture"),V._colorsTexture!==null&&fe.setValue(O,"batchingColorTexture",V._colorsTexture,Y));let Ts=X.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&U.update(V,X,ai),(Es||gt.receiveShadow!==V.receiveShadow)&&(gt.receiveShadow=V.receiveShadow,fe.setValue(O,"receiveShadow",V.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&N.environment!==null&&(Pe.envMapIntensity.value=N.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=$2()),Es){if(fe.setValue(O,"toneMappingExposure",D.toneMappingExposure),gt.needsLights&&db(Pe,$a),pt&&F.fog===!0&&Et.refreshFogUniforms(Pe,pt),Et.refreshMaterialUniforms(Pe,F,tt,K,T.state.transmissionRenderTarget[b.id]),gt.needsLights&&gt.lightProbeGrid){let xe=gt.lightProbeGrid;Pe.probesSH.value=xe.texture,Pe.probesMin.value.copy(xe.boundingBox.min),Pe.probesMax.value.copy(xe.boundingBox.max),Pe.probesResolution.value.copy(xe.resolution)}Co.upload(O,M0(gt),Pe,Y)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Co.upload(O,M0(gt),Pe,Y),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&fe.setValue(O,"center",V.center),fe.setValue(O,"modelViewMatrix",V.modelViewMatrix),fe.setValue(O,"normalMatrix",V.normalMatrix),fe.setValue(O,"modelMatrix",V.matrixWorld),F.uniformsGroups!==void 0){let xe=F.uniformsGroups;for(let As=0,tr=xe.length;As<tr;As++){let T0=xe[As];it.update(T0,ai),it.bind(T0,ai)}}return ai}function db(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.sunLights.needsUpdate=N,b.sunLightShadows.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function pb(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(b,N,X){let F=H.get(b);F.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=N,H.get(b.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:X,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,N){let X=H.get(b);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,X=0){nt=b,W=N,q=X;let F=null,V=!1,pt=!1;if(b){let dt=H.get(b);if(dt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(O.FRAMEBUFFER,dt.__webglFramebuffer),st.copy(b.viewport),Ct.copy(b.scissor),At=b.scissorTest,y.viewport(st),y.scissor(Ct),y.setScissorTest(At),Z=-1;return}else if(dt.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(dt.__hasExternalTextures)Y.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Vt=b.depthTexture;if(dt.__boundDepthTexture!==Vt){if(Vt!==null&&H.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}let xt=b.texture;(xt.isData3DTexture||xt.isDataArrayTexture||xt.isCompressedArrayTexture)&&(pt=!0);let bt=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(bt[N])?F=bt[N][X]:F=bt[N],V=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?F=H.get(b).__webglMultisampledFramebuffer:Array.isArray(bt)?F=bt[X]:F=bt,st.copy(b.viewport),Ct.copy(b.scissor),At=b.scissorTest}else st.copy(_t).multiplyScalar(tt).floor(),Ct.copy(kt).multiplyScalar(tt).floor(),At=qe;if(X!==0&&(F=k),y.bindFramebuffer(O.FRAMEBUFFER,F)&&y.drawBuffers(b,F),y.viewport(st),y.scissor(Ct),y.setScissorTest(At),V){let dt=H.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,dt.__webglTexture,X)}else if(pt){let dt=N;for(let xt=0;xt<b.textures.length;xt++){let bt=H.get(b.textures[xt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+xt,bt.__webglTexture,X,dt)}}else if(b!==null&&X!==0){let dt=H.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dt.__webglTexture,X)}Z=-1};function E0(b){let N=H.get(b);return(N.__readFormat!==b.format||N.__readType!==b.type)&&(N.__readFormat=b.format,N.__readType=b.type,N.__formatReadable=R.textureFormatReadable(b.format),N.__typeReadable=R.textureTypeReadable(b.type)),N}this.readRenderTargetPixels=function(b,N,X,F,V,pt,vt,dt=0){if(!(b&&b.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xt=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt]),xt){y.bindFramebuffer(O.FRAMEBUFFER,xt);try{let bt=b.textures[dt],Vt=bt.format,qt=bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+dt);let St=E0(bt);if(St.__formatReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(St.__typeReadable===!1){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-F&&X>=0&&X<=b.height-V&&O.readPixels(N,X,F,V,ut.convert(Vt),ut.convert(qt),pt)}finally{let bt=nt!==null?H.get(nt).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(b,N,X,F,V,pt,vt,dt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xt=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&vt!==void 0&&(xt=xt[vt]),xt)if(N>=0&&N<=b.width-F&&X>=0&&X<=b.height-V){y.bindFramebuffer(O.FRAMEBUFFER,xt);let bt=b.textures[dt],Vt=bt.format,qt=bt.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+dt);let St=E0(bt);if(St.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(St.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let re=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,re),O.bufferData(O.PIXEL_PACK_BUFFER,pt.byteLength,O.STREAM_READ),O.readPixels(N,X,F,V,ut.convert(Vt),ut.convert(qt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ve=nt!==null?H.get(nt).__webglFramebuffer:null;y.bindFramebuffer(O.FRAMEBUFFER,Ve);let Me=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await bM(O,Me,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,re),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,pt),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(re),O.deleteSync(Me),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,N=null,X=0){let F=Math.pow(2,-X),V=Math.floor(b.image.width*F),pt=Math.floor(b.image.height*F),vt=N!==null?N.x:0,dt=N!==null?N.y:0;Y.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,X,0,0,vt,dt,V,pt),y.unbindTexture()},this.copyTextureToTexture=function(b,N,X=null,F=null,V=0,pt=0){let vt,dt,xt,bt,Vt,qt,St,re,Ve,Me=b.isCompressedTexture?b.mipmaps[pt]:b.image;if(X!==null)vt=X.max.x-X.min.x,dt=X.max.y-X.min.y,xt=X.isBox3?X.max.z-X.min.z:1,bt=X.min.x,Vt=X.min.y,qt=X.isBox3?X.min.z:0;else{let Pe=Math.pow(2,-V);vt=Math.floor(Me.width*Pe),dt=Math.floor(Me.height*Pe),b.isDataArrayTexture?xt=Me.depth:b.isData3DTexture?xt=Math.floor(Me.depth*Pe):xt=1,bt=0,Vt=0,qt=0}F!==null?(St=F.x,re=F.y,Ve=F.z):(St=0,re=0,Ve=0);let me=ut.convert(N.format),fn=ut.convert(N.type),gt;N.isData3DTexture?(Y.setTexture3D(N,0),gt=O.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(Y.setTexture2DArray(N,0),gt=O.TEXTURE_2D_ARRAY):(Y.setTexture2D(N,0),gt=O.TEXTURE_2D),y.activeTexture(O.TEXTURE0),y.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,N.flipY),y.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),y.pixelStorei(O.UNPACK_ALIGNMENT,N.unpackAlignment);let Sn=y.getParameter(O.UNPACK_ROW_LENGTH),te=y.getParameter(O.UNPACK_IMAGE_HEIGHT),ai=y.getParameter(O.UNPACK_SKIP_PIXELS),Oi=y.getParameter(O.UNPACK_SKIP_ROWS),Es=y.getParameter(O.UNPACK_SKIP_IMAGES);y.pixelStorei(O.UNPACK_ROW_LENGTH,Me.width),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Me.height),y.pixelStorei(O.UNPACK_SKIP_PIXELS,bt),y.pixelStorei(O.UNPACK_SKIP_ROWS,Vt),y.pixelStorei(O.UNPACK_SKIP_IMAGES,qt);let $a=b.isDataArrayTexture||b.isData3DTexture,fe=N.isDataArrayTexture||N.isData3DTexture;if(b.isDepthTexture){let Pe=H.get(b),Ts=H.get(N),xe=H.get(Pe.__renderTarget),As=H.get(Ts.__renderTarget);y.bindFramebuffer(O.READ_FRAMEBUFFER,xe.__webglFramebuffer),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let tr=0;tr<xt;tr++)$a&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(b).__webglTexture,V,qt+tr),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,H.get(N).__webglTexture,pt,Ve+tr)),O.blitFramebuffer(bt,Vt,vt,dt,St,re,vt,dt,O.DEPTH_BUFFER_BIT,O.NEAREST);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||H.has(b)){let Pe=H.get(b),Ts=H.get(N);y.bindFramebuffer(O.READ_FRAMEBUFFER,I),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,G);for(let xe=0;xe<xt;xe++)$a?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pe.__webglTexture,V,qt+xe):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pe.__webglTexture,V),fe?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ts.__webglTexture,pt,Ve+xe):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ts.__webglTexture,pt),V!==0?O.blitFramebuffer(bt,Vt,vt,dt,St,re,vt,dt,O.COLOR_BUFFER_BIT,O.NEAREST):fe?O.copyTexSubImage3D(gt,pt,St,re,Ve+xe,bt,Vt,vt,dt):O.copyTexSubImage2D(gt,pt,St,re,bt,Vt,vt,dt);y.bindFramebuffer(O.READ_FRAMEBUFFER,null),y.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else fe?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(gt,pt,St,re,Ve,vt,dt,xt,me,fn,Me.data):N.isCompressedArrayTexture?O.compressedTexSubImage3D(gt,pt,St,re,Ve,vt,dt,xt,me,Me.data):O.texSubImage3D(gt,pt,St,re,Ve,vt,dt,xt,me,fn,Me):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,pt,St,re,vt,dt,me,fn,Me.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,pt,St,re,Me.width,Me.height,me,Me.data):O.texSubImage2D(O.TEXTURE_2D,pt,St,re,vt,dt,me,fn,Me);y.pixelStorei(O.UNPACK_ROW_LENGTH,Sn),y.pixelStorei(O.UNPACK_IMAGE_HEIGHT,te),y.pixelStorei(O.UNPACK_SKIP_PIXELS,ai),y.pixelStorei(O.UNPACK_SKIP_ROWS,Oi),y.pixelStorei(O.UNPACK_SKIP_IMAGES,Es),pt===0&&N.generateMipmaps&&O.generateMipmap(gt),y.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){W=0,q=0,nt=null,y.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let n=this.getContext();n.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=jt._getUnpackColorSpace()}};var ib={type:"change"},f0={type:"start"},ab={type:"end"},Wf=new go,sb=new ti,eR=Math.cos(70*Vg.DEG2RAD),je=new B,Hn=2*Math.PI,he={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},h0=1e-6,qf=class extends sc{constructor(t,n=null){super(t,n),this.state=he.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pa.ROTATE,MIDDLE:pa.DOLLY,RIGHT:pa.PAN},this.touches={ONE:ma.ROTATE,TWO:ma.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new ei,this._lastTargetPosition=new B,this._quat=new ei().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xo,this._sphericalDelta=new xo,this._scale=1,this._panOffset=new B,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new B,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iR.bind(this),this._onPointerDown=nR.bind(this),this._onPointerUp=sR.bind(this),this._onContextMenu=hR.bind(this),this._onMouseWheel=oR.bind(this),this._onKeyDown=lR.bind(this),this._onTouchStart=cR.bind(this),this._onTouchMove=uR.bind(this),this._onMouseDown=aR.bind(this),this._onMouseMove=rR.bind(this),this._interceptControlDown=fR.bind(this),this._interceptControlUp=dR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=he.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ib),this.update(),this.state=he.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let n=this.object.position;je.copy(n).sub(this.target),je.applyQuaternion(this._quat),this._spherical.setFromVector3(je),this.autoRotate&&this.state===he.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(je.setFromSpherical(this._spherical),je.applyQuaternion(this._quatInverse),n.copy(this.target).add(je),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){let o=je.length();r=this._clampDistance(o*this._scale);let l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){let o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=je.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(Wf.origin.copy(this.object.position),Wf.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wf.direction))<eR?this.object.lookAt(this.target):(sb.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wf.intersectPlane(sb,this.target))))}else if(this.object.isOrthographicCamera){let r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>h0||8*(1-this._lastQuaternion.dot(this.object.quaternion))>h0||this._lastTargetPosition.distanceToSquared(this.target)>h0?(this.dispatchEvent(ib),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Hn/60*this.autoRotateSpeed*t:Hn/60/60*this.autoRotateSpeed}_getZoomScale(t){let n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){je.setFromMatrixColumn(n,0),je.multiplyScalar(-t),this._panOffset.add(je)}_panUp(t,n){this.screenSpacePanning===!0?je.setFromMatrixColumn(n,1):(je.setFromMatrixColumn(n,0),je.crossVectors(this.object.up,je)),je.multiplyScalar(t),this._panOffset.add(je)}_pan(t,n){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;je.copy(s).sub(this.target);let a=je.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*a/i.clientHeight,this.object.matrix),this._panUp(2*n*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,a=n-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),a=.5*(t.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let n=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let r=(t.pageX+n.x)*.5,o=(t.pageY+n.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Ut,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){let n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function nR(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iR(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function sR(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ab),this.state=he.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function aR(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=he.DOLLY;break;case pa.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=he.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=he.ROTATE}break;case pa.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=he.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=he.PAN}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(f0)}function rR(e){switch(this.state){case he.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case he.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case he.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function oR(e){this.enabled===!1||this.enableZoom===!1||this.state!==he.NONE||(e.preventDefault(),this.dispatchEvent(f0),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(ab))}function lR(e){this.enabled!==!1&&this._handleKeyDown(e)}function cR(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case ma.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=he.TOUCH_ROTATE;break;case ma.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=he.TOUCH_PAN;break;default:this.state=he.NONE}break;case 2:switch(this.touches.TWO){case ma.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=he.TOUCH_DOLLY_PAN;break;case ma.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=he.TOUCH_DOLLY_ROTATE;break;default:this.state=he.NONE}break;default:this.state=he.NONE}this.state!==he.NONE&&this.dispatchEvent(f0)}function uR(e){switch(this._trackPointer(e),this.state){case he.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case he.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case he.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case he.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=he.NONE}}function hR(e){this.enabled!==!1&&e.preventDefault()}function fR(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function dR(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Yf=class extends Za{constructor(t){super(t)}load(t,n,i,s){let a=this,r=new $l(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){try{n(a.parse(o))}catch(l){s?s(l):console.error(l),a.manager.itemError(t)}},i,s)}parse(t){function n(c){let h=new DataView(c),d=32/8*3+32/8*3*3+16/8,u=h.getUint32(80,!0);if(80+32/8+u*d===h.byteLength)return!0;let _=[115,111,108,105,100];for(let M=0;M<5;M++)if(i(_,h,M))return!1;return!0}function i(c,h,d){for(let u=0,p=c.length;u<p;u++)if(c[u]!==h.getUint8(d+u))return!1;return!0}function s(c){let h=new DataView(c),d=h.getUint32(80,!0),u,p,_,M=!1,m,f,g,S,v;for(let L=0;L<70;L++)h.getUint32(L,!1)==1129270351&&h.getUint8(L+4)==82&&h.getUint8(L+5)==61&&(M=!0,m=new Float32Array(d*3*3),f=h.getUint8(L+6)/255,g=h.getUint8(L+7)/255,S=h.getUint8(L+8)/255,v=h.getUint8(L+9)/255);let E=84,T=50,C=new ni,x=new Float32Array(d*3*3),w=new Float32Array(d*3*3),D=new Gt;for(let L=0;L<d;L++){let z=E+L*T,k=h.getFloat32(z,!0),I=h.getFloat32(z+4,!0),G=h.getFloat32(z+8,!0);if(M){let W=h.getUint16(z+48,!0);(W&32768)===0?(u=(W&31)/31,p=(W>>5&31)/31,_=(W>>10&31)/31):(u=f,p=g,_=S)}for(let W=1;W<=3;W++){let q=z+W*12,nt=L*3*3+(W-1)*3;x[nt]=h.getFloat32(q,!0),x[nt+1]=h.getFloat32(q+4,!0),x[nt+2]=h.getFloat32(q+8,!0),w[nt]=k,w[nt+1]=I,w[nt+2]=G,M&&(D.setRGB(u,p,_,An),m[nt]=D.r,m[nt+1]=D.g,m[nt+2]=D.b)}}return C.setAttribute("position",new _n(x,3)),C.setAttribute("normal",new _n(w,3)),M&&(C.setAttribute("color",new _n(m,3)),C.hasColors=!0,C.alpha=v),C}function a(c){let h=new ni,d=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g,p=/solid\s(.+)/,_=0,M=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+M+M+M,"g"),f=new RegExp("normal"+M+M+M,"g"),g=[],S=[],v=[],E=new B,T,C=0,x=0,w=0;for(;(T=d.exec(c))!==null;){x=w;let D=T[0],L=(T=p.exec(D))!==null?T[1]:"";for(v.push(L);(T=u.exec(D))!==null;){let I=0,G=0,W=T[0];for(;(T=f.exec(W))!==null;)E.x=parseFloat(T[1]),E.y=parseFloat(T[2]),E.z=parseFloat(T[3]),G++;for(;(T=m.exec(W))!==null;)g.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),S.push(E.x,E.y,E.z),I++,w++;G!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+_),I!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+_),_++}let z=x,k=w-x;h.userData.groupNames=v,h.addGroup(z,k,C),C++}return h.setAttribute("position",new wn(g,3)),h.setAttribute("normal",new wn(S,3)),h}function r(c){return typeof c!="string"?new TextDecoder().decode(c):c}function o(c){if(typeof c=="string"){let h=new Uint8Array(c.length);for(let d=0;d<c.length;d++)h[d]=c.charCodeAt(d)&255;return h.buffer||h}else return c}let l=o(t);return n(l)?s(l):a(r(t))}};function rb({url:e}){let t=(0,Ft.useRef)(null),n=(0,Ft.useRef)(null),[i,s]=(0,Ft.useState)(e?"\u6A21\u578B\u8F09\u5165\u4E2D\u2026":"STL \u6A21\u578B\u5C1A\u672A\u63D0\u4F9B"),[a,r]=(0,Ft.useState)(!1);return(0,Ft.useEffect)(()=>{let o;try{o=new Gf({antialias:!0,alpha:!0})}catch{s("\u6B64\u700F\u89BD\u5668\u7121\u6CD5\u555F\u7528 3D \u986F\u793A\uFF0C\u8ACB\u4F7F\u7528\u652F\u63F4 WebGL \u7684\u700F\u89BD\u5668\u3002");return}let l=t.current,c=new Xl,h=new gn(40,1,.01,100),d=new qf(h,o.domElement),u=new Yf,p,_=!1;o.setPixelRatio(Math.min(devicePixelRatio,2)),l.appendChild(o.domElement),o.domElement.setAttribute("aria-label","STL \u6A21\u578B\uFF1A\u62D6\u66F3\u65CB\u8F49\uFF0C\u6EFE\u8F2A\u6216\u96D9\u6307\u7E2E\u653E"),o.domElement.tabIndex=0,c.add(new ec(16777215,7045241,3));let M=new ic(16777215,4);M.position.set(3,5,4),c.add(M),d.enableDamping=!0,d.minDistance=.6,d.maxDistance=12;let m=()=>{h.position.set(2.7,2,3),d.target.set(0,0,0),d.update()};m();function f(v){if(_)return;let E;try{E=u.parse(v);let T=E.attributes.position;if(!T||T.count<3||!T.array.every(Number.isFinite))throw Error();E.computeBoundingBox();let C=E.boundingBox.getSize(new B),x=Math.max(C.x,C.y,C.z);if(!x)throw Error();E.center(),E.scale(2/x,2/x,2/x),E.computeVertexNormals(),p&&(c.remove(p),p.geometry.dispose(),p.material.dispose()),p=new Fn(E,new jl({color:4814957,roughness:.38,metalness:.18,side:vi})),p.rotation.x=3*Math.PI/2,c.add(p),m(),r(!0),s("\u62D6\u66F3\u65CB\u8F49 \xB7 \u6EFE\u8F2A\uFF0F\u96D9\u6307\u7E2E\u653E")}catch{E?.dispose(),s("\u7121\u6CD5\u8B80\u53D6\u6B64 STL\uFF0C\u8ACB\u78BA\u8A8D\u6A94\u6848\u683C\u5F0F\u8207\u5167\u5BB9\u3002")}}let g=()=>{let v=l.clientWidth,E=l.clientHeight;v&&E&&(o.setSize(v,E),h.aspect=v/E,h.updateProjectionMatrix())},S=new ResizeObserver(g);return S.observe(l),g(),o.setAnimationLoop(()=>{d.update(),o.render(c,h)}),n.current={reset:m,zoom:v=>{h.position.sub(d.target).multiplyScalar(v).add(d.target),d.update()}},e&&zm(e).then(f).catch(v=>{_||s("\u6A21\u578B\u8F09\u5165\u5931\u6557\uFF0C\u8ACB\u7A0D\u5F8C\u91CD\u65B0\u958B\u555F\u4F5C\u54C1\u3002")}),()=>{_=!0,n.current=null,S.disconnect(),o.setAnimationLoop(null),d.dispose(),p?.geometry.dispose(),p?.material.dispose(),o.dispose(),o.domElement.remove()}},[e]),Ft.default.createElement("div",{className:"stl-viewer"},Ft.default.createElement("div",{className:"stl-stage",ref:t}),Ft.default.createElement("p",{className:"stl-status",role:"status"},i),Ft.default.createElement("div",{className:"stl-toolbar"},Ft.default.createElement("button",{disabled:!a,onClick:()=>n.current?.zoom(.8),"aria-label":"\u653E\u5927\u6A21\u578B"},"\uFF0B"),Ft.default.createElement("button",{disabled:!a,onClick:()=>n.current?.zoom(1.25),"aria-label":"\u7E2E\u5C0F\u6A21\u578B"},"\u2212"),Ft.default.createElement("button",{disabled:!a,onClick:()=>n.current?.reset()},"\u91CD\u8A2D\u8996\u89D2")),Ft.default.createElement("p",{className:"stl-hint"},"\u62D6\u66F3\u53EF\u81EA\u7531\u65CB\u8F49\u6A21\u578B\uFF0C\u4E5F\u53EF\u4F7F\u7528\u4E0A\u65B9\u6309\u9215\u8ABF\u6574\u8996\u89D2\u3002"))}function d0({project:e,onZoom:t}){let[n,i]=(0,Ft.useState)(0),s=e.gallery?.length?e.gallery:[{src:e.image,alt:e.alt,caption:e.title}],a=s[n],r=o=>i(l=>(l+o+s.length)%s.length);return Ft.default.createElement("div",{className:"project-carousel",role:"region","aria-label":"\u4F5C\u54C1\u5716\u7247\u8F2A\u64AD",onKeyDown:o=>{o.key==="ArrowLeft"&&(o.preventDefault(),r(-1)),o.key==="ArrowRight"&&(o.preventDefault(),r(1))}},Ft.default.createElement("div",{className:"carousel-stage"},Ft.default.createElement(Ft.default.Fragment,null,a.interactive?Ft.default.createElement("div",{className:"inline-tilt"},Ft.default.createElement(p0,{key:a.src,image:a}),Ft.default.createElement("button",{className:"tilt-expand",onClick:()=>t(a)},"\u5168\u87A2\u5E55\u6AA2\u8996")):Ft.default.createElement("button",{className:"carousel-image",onClick:()=>t(a),"aria-label":"\u653E\u5927\u76EE\u524D\u4F5C\u54C1\u5716\u7247"},Ft.default.createElement("img",{src:a.src,alt:a.alt,draggable:!1}))),s.length>1&&Ft.default.createElement(Ft.default.Fragment,null,Ft.default.createElement("button",{className:"carousel-arrow previous",onClick:()=>r(-1),"aria-label":"\u4E0A\u4E00\u5F35\u5716\u7247"},"\u2039"),Ft.default.createElement("button",{className:"carousel-arrow next",onClick:()=>r(1),"aria-label":"\u4E0B\u4E00\u5F35\u5716\u7247"},"\u203A"))),Ft.default.createElement("div",{className:"carousel-caption","aria-live":"polite"},Ft.default.createElement("span",null,a.caption),Ft.default.createElement("span",null,n+1," / ",s.length)))}function p0({image:e}){let[t,n]=(0,Ft.useState)({x:0,y:0,active:!1}),i=(0,Ft.useRef)(null),s=()=>{i.current=null,n({x:0,y:0,active:!1})},a=r=>{if(!i.current||r.pointerId!==i.current.id)return;let o=r.currentTarget.getBoundingClientRect(),l=c=>Math.max(-1,Math.min(1,c));n({x:l((r.clientX-i.current.x)/Math.max(o.width*.45,1)),y:l((r.clientY-i.current.y)/Math.max(o.height*.45,1)),active:!0})};return Ft.default.createElement("figure",{className:"tilt-figure"},Ft.default.createElement("div",{className:"tilt-perspective"},Ft.default.createElement("div",{className:"tilt-art "+(t.active?"is-dragging":""),onDragStart:r=>r.preventDefault(),role:"img","aria-label":e.alt+"\uFF1B\u6309\u4F4F\u62D6\u66F3\u6539\u8B8A\u89C0\u770B\u89D2\u5EA6\uFF0C\u653E\u958B\u5FA9\u4F4D\u3002\u9375\u76E4\u53EF\u6309\u4F4F\u65B9\u5411\u9375\u64CD\u4F5C\u3002",tabIndex:0,style:{"--rx":`${-t.y*8}deg`,"--ry":`${t.x*8}deg`,"--gx":`${50+t.x*35}%`,"--gy":`${50+t.y*35}%`,"--sx":`${-t.x*20}px`,"--sy":`${18-t.y*12}px`,"--glow":t.active?.28:0},onPointerDown:r=>{r.button===0&&(i.current={id:r.pointerId,x:r.clientX,y:r.clientY},r.currentTarget.setPointerCapture(r.pointerId),n({x:0,y:0,active:!0}))},onPointerMove:a,onPointerUp:s,onPointerCancel:s,onLostPointerCapture:s,onBlur:s,onKeyDown:r=>{["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(r.key)&&(r.preventDefault(),r.stopPropagation(),n({x:r.key==="ArrowLeft"?-.7:r.key==="ArrowRight"?.7:0,y:r.key==="ArrowUp"?-.7:r.key==="ArrowDown"?.7:0,active:!0})),r.key==="Escape"&&s()},onKeyUp:r=>{r.key.startsWith("Arrow")&&s()}},Ft.default.createElement("img",{src:e.src,alt:"",draggable:!1}),Ft.default.createElement("span",{className:"tilt-shine","aria-hidden":"true"}))),Ft.default.createElement("figcaption",null,e.caption))}var bs=window.PORTFOLIO_DATA,pR=[["projects","\u7CBE\u9078\u4F5C\u54C1"],["competencies","\u6838\u5FC3\u80FD\u529B"],["experience","\u7D93\u6B77"],["certifications","\u8B49\u7167"],["about","\u95DC\u65BC\u6211"],["contact","\u806F\u7D61"]];function xn({name:e="arrow",size:t=24,...n}){let i={arrow:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"M5 19 19 5M5 5h14v14"})),down:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"M12 4v16m-6-6 6 6 6-6"})),close:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"m6 6 12 12M6 18 18 6"})),download:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5"})),design:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"m4 17 13-13 3 3L7 20H4zM14 7l3 3M4 4h6M4 4v6"})),cube:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"m12 2 9 5v10l-9 5-9-5V7zM3 7l9 5 9-5M12 12v10"})),code:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"m7 5-6 7 6 7m10-14 6 7-6 7M14 3l-4 18"})),layers:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"m12 2 10 6-10 6L2 8zM2 12l10 6 10-6M2 16l10 6 10-6"})),visual:A.default.createElement(A.default.Fragment,null,A.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"1"}),A.default.createElement("path",{d:"M3 9h18M9 9v12"}),A.default.createElement("circle",{cx:"6",cy:"6",r:".5"})),image:A.default.createElement(A.default.Fragment,null,A.default.createElement("rect",{x:"2",y:"3",width:"20",height:"18",rx:"2"}),A.default.createElement("path",{d:"m3 18 6-6 5 5 3-3 4 4"}),A.default.createElement("circle",{cx:"16",cy:"8",r:"2"})),file:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"M5 2h9l5 5v15H5zM14 2v6h5M8 12h8M8 16h6"})),menu:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"M3 7h18M3 12h18M3 17h18"})),mail:A.default.createElement(A.default.Fragment,null,A.default.createElement("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),A.default.createElement("path",{d:"m2 5 10 8L22 5"})),plus:A.default.createElement(A.default.Fragment,null,A.default.createElement("path",{d:"M12 4v16M4 12h16"}))};return A.default.createElement("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",...n},i[e]||i.arrow)}function Kf({src:e,...t}){return A.default.createElement("img",{...t,src:window.PORTFOLIO_PREVIEWS?.[e]||e,"data-preview-src":e,decoding:"async"})}function Zf({number:e,english:t,title:n,children:i}){return A.default.createElement("div",{className:"section-head reveal"},A.default.createElement("div",null,A.default.createElement("p",{className:"eyebrow"},A.default.createElement("span",null,e)," ",t),A.default.createElement("h2",null,n)),i&&A.default.createElement("div",{className:"section-description"},i))}function m0({open:e,onClose:t,label:n,children:i,kind:s=""}){let a=(0,A.useRef)(null),r=(0,A.useRef)(null);return(0,A.useEffect)(()=>{let o=a.current;e&&!o.open?(r.current=document.activeElement,o.showModal(),o.scrollTop=0):!e&&o.open&&(o.close(),r.current?.focus?.())},[e]),A.default.createElement("dialog",{ref:a,className:"dialog "+s,"aria-label":n,onCancel:o=>{o.preventDefault(),t()},onClick:o=>{if(o.target===a.current){let l=a.current.getBoundingClientRect();(o.clientX<l.left||o.clientX>l.right||o.clientY<l.top||o.clientY>l.bottom)&&t()}}},A.default.createElement("div",{className:"dialog-top"},A.default.createElement("span",null,n),A.default.createElement("button",{className:"icon-button",onClick:t,"aria-label":"\u95DC\u9589\u8996\u7A97"},A.default.createElement(xn,{name:"close"}))),i)}function mR({ratio:e="4:3",label:t="\u5716\u7247\u5F85\u88DC",className:n=""}){return A.default.createElement("div",{className:"placeholder "+n},A.default.createElement(xn,{name:"image",size:30}),A.default.createElement("span",null,t),A.default.createElement("small",null,"\u5EFA\u8B70\u6BD4\u4F8B ",e))}function gR({project:e,onOpen:t,index:n}){return A.default.createElement("article",{className:"project-card project-"+(n+1)},A.default.createElement("button",{className:"project-image "+(e.imageProvided?"has-photo":""),onClick:()=>t(e),"aria-label":"\u67E5\u770B\u5C08\u6848\uFF1A"+e.title},A.default.createElement(Kf,{src:e.image,alt:e.alt,loading:"lazy",width:"1000",height:"750"}),A.default.createElement("span",{className:"image-number"},e.number," / ",e.imageProvided?"PROJECT":"CONCEPT"),(e.demo||e.contentPending)&&A.default.createElement("span",{className:"demo-label"},e.contentPending?"\u4F5C\u54C1\u8CC7\u6599\u5F85\u88DC":"\u793A\u7BC4\u5C08\u6848"),A.default.createElement("span",{className:"image-arrow"},A.default.createElement(xn,{name:"arrow"}))),A.default.createElement("div",{className:"project-topline"},A.default.createElement("span",null,e.category.join(" / ")),A.default.createElement("span",null,e.number)),A.default.createElement("h3",null,A.default.createElement("button",{onClick:()=>t(e)},e.title)),A.default.createElement("p",{className:"project-english"},e.english),A.default.createElement("button",{className:"inline-link",onClick:()=>t(e)},"\u67E5\u770B\u5C08\u6848 ",A.default.createElement(xn,{name:"arrow",size:16})))}function _R({profile:e,active:t}){let[n,i]=(0,A.useState)(!1),s=(0,A.useRef)(null),a=(0,A.useRef)(null),r=(0,A.useRef)(null),o=[["top","\u56DE\u5230\u9996\u9801"],...pR],l=()=>{r.current&&clearTimeout(r.current)};return(0,A.useEffect)(()=>{let c=d=>{s.current?.contains(d.target)||i(!1)},h=d=>{d.key==="Escape"&&(l(),i(!1),s.current?.contains(document.activeElement)&&a.current?.focus())};return document.addEventListener("pointerdown",c),document.addEventListener("keydown",h),()=>{l(),document.removeEventListener("pointerdown",c),document.removeEventListener("keydown",h)}},[]),A.default.createElement("aside",{ref:s,className:"floating-island "+(n?"is-open":""),"aria-label":"\u6D6E\u52D5\u5340\u584A\u5C0E\u89BD",onPointerEnter:c=>{c.pointerType==="mouse"&&(l(),i(!0))},onPointerLeave:c=>{c.pointerType==="mouse"&&(l(),r.current=setTimeout(()=>{s.current?.querySelector(":focus-visible")||i(!1)},220))},onBlur:c=>{c.currentTarget.contains(c.relatedTarget)||i(!1)}},A.default.createElement("button",{ref:a,className:"island-trigger","aria-label":n?"\u6536\u5408\u6D6E\u52D5\u5C0E\u89BD":"\u5C55\u958B\u6D6E\u52D5\u5C0E\u89BD","aria-expanded":n,"aria-controls":"floating-navigation",onClick:()=>{l(),i(c=>!c)}},A.default.createElement("span",{className:"brand-symbol"},A.default.createElement("i",null),A.default.createElement("i",null)),A.default.createElement("span",{className:"island-identity"},e.name,A.default.createElement("small",null,"EXPLORE PORTFOLIO")),A.default.createElement("span",{className:"island-toggle"},A.default.createElement(xn,{name:n?"close":"menu",size:16}))),A.default.createElement("nav",{id:"floating-navigation",className:"island-navigation","aria-label":"\u4E3B\u5C0E\u89BD","aria-hidden":!n,inert:!n},A.default.createElement("div",{className:"island-caption"},"CONTENTS ",A.default.createElement("span",null,"\u76EE\u9304")),o.map(([c,h],d)=>A.default.createElement("a",{key:c,href:"#"+c,"aria-current":t===c?"location":void 0,className:t===c?"is-current":"",onClick:()=>{l(),i(!1),a.current?.focus({preventScroll:!0})}},A.default.createElement("span",{className:"island-index"},String(d).padStart(2,"0")),A.default.createElement("span",null,h),A.default.createElement(xn,{name:"arrow",size:14}))),A.default.createElement("p",{className:"island-footer"},A.default.createElement("span",null)," DESIGN \xD7 DEVELOPMENT")))}function vR(){(0,A.useEffect)(()=>_S(bs),[]);let[e,t]=(0,A.useState)("top"),[n,i]=(0,A.useState)("All"),[s,a]=(0,A.useState)(null),[r,o]=(0,A.useState)(null),[l,c]=(0,A.useState)(null),[h,d]=(0,A.useState)(""),[u,p]=(0,A.useState)(!1),_=!!(s||r||l);(0,A.useEffect)(()=>(document.body.classList.toggle("locked",_),()=>document.body.classList.remove("locked")),[_]),(0,A.useEffect)(()=>{let S=()=>p(window.scrollY>450);window.addEventListener("scroll",S,{passive:!0}),S();let v=new IntersectionObserver(T=>T.forEach(C=>{C.isIntersecting&&(C.target.classList.add("revealed"),v.unobserve(C.target))}),{threshold:.08});document.querySelectorAll(".reveal").forEach(T=>{v.observe(T),T.classList.add("will-reveal")});let E=new IntersectionObserver(T=>T.forEach(C=>{C.isIntersecting&&t(C.target.id)}),{rootMargin:"-15% 0px -65% 0px"});return document.querySelectorAll("main section[id]").forEach(T=>E.observe(T)),()=>{window.removeEventListener("scroll",S),v.disconnect(),E.disconnect()}},[]),(0,A.useEffect)(()=>{if(!h)return;let S=setTimeout(()=>d(""),5e3);return()=>clearTimeout(S)},[h]);let M=bs.profile,m=bs.projects.filter(S=>n==="All"||S.category.includes(n)),f=bs.experiences;async function g(){try{await navigator.clipboard.writeText(M.email),d("Email \u5DF2\u8907\u88FD")}catch{d("\u8ACB\u76F4\u63A5\u9078\u53D6 Email \u6587\u5B57\u8907\u88FD\u3002")}}return A.default.createElement(A.default.Fragment,null,A.default.createElement("a",{className:"skip-link",href:"#projects"},"\u8DF3\u81F3\u4F5C\u54C1\u5167\u5BB9"),A.default.createElement(_R,{profile:M,active:e}),A.default.createElement("main",null,A.default.createElement("section",{id:"top",className:"hero shell"},A.default.createElement("div",{className:"hero-copy"},A.default.createElement("p",{className:"eyebrow"},A.default.createElement("span",{className:"tiny-dot"})," DESIGN WITH PURPOSE"),A.default.createElement("p",{className:"hero-person"},M.name," ",A.default.createElement("span",null,M.englishName),M.englishNamePending&&A.default.createElement("small",null,"\u82F1\u6587\u59D3\u540D\u5F85\u88DC")),A.default.createElement("h1",{"aria-label":M.title},M.titleLines[0],A.default.createElement("br",null),M.titleLines[1],A.default.createElement("span",{className:"amp"},"&"),M.titleLines[2],A.default.createElement("span",{className:"title-dot"},".")),A.default.createElement("p",{className:"hero-subtitle"},M.subtitle),A.default.createElement("p",{className:"hero-description"},M.positioning)),A.default.createElement("div",{className:"hero-visual"},A.default.createElement("div",{className:"hero-visual-label"},A.default.createElement("span",null,"FORM. FUNCTION. POSSIBILITY."),A.default.createElement("span",null,"PORTFOLIO / 01")),A.default.createElement(Kf,{src:M.heroImage,alt:M.heroAlt,width:"1000",height:"750",fetchPriority:"high"}),A.default.createElement("div",{className:"hero-caption"},A.default.createElement("span",null,A.default.createElement("b",null,"\u628A\u60F3\u6CD5\uFF0C\u5E36\u9032\u771F\u5BE6\u4E16\u754C\u3002"),A.default.createElement("small",null,"FROM CONCEPT TO CREATION"))),A.default.createElement("div",{className:"visual-index"},"01 \u2014 06")),A.default.createElement("div",{className:"hero-footer"},A.default.createElement("span",null,"PRODUCT \xD7 DIGITAL \xD7 MATERIAL"),A.default.createElement("a",{href:"#competencies"},"SCROLL TO EXPLORE ",A.default.createElement(xn,{name:"down",size:16})))),A.default.createElement("section",{id:"competencies",className:"section competencies shell"},A.default.createElement(Zf,{number:"01",english:"CORE COMPETENCIES",title:A.default.createElement(A.default.Fragment,null,"\u8DE8\u8D8A\u9818\u57DF\uFF0C",A.default.createElement("br",{className:"mobile-break"}),"\u4E32\u8D77\u5B8C\u6574\u7684\u958B\u767C\u904E\u7A0B\u3002")},A.default.createElement("p",null,"\u5F9E\u554F\u984C\u5B9A\u7FA9\u5230\u5546\u54C1\u6E9D\u901A\uFF0C",A.default.createElement("br",null),"\u8B93\u4E0D\u540C\u5C08\u9577\u5728\u540C\u4E00\u500B\u6D41\u7A0B\u4E2D\u767C\u63EE\u50F9\u503C\u3002")),A.default.createElement("div",{className:"competency-grid"},bs.competencies.map((S,v)=>A.default.createElement("article",{className:"competency reveal",key:S.id},A.default.createElement("div",{className:"flex justify-between items-center"},A.default.createElement(xn,{name:S.icon,size:27}),A.default.createElement("span",{className:"card-index"},"0",v+1)),A.default.createElement("h3",null,S.title),A.default.createElement("p",{className:"english"},S.english),A.default.createElement("p",{className:"description"},S.description),A.default.createElement("div",{className:"skill-tags"},S.skills.map(E=>A.default.createElement("span",{key:E},E))))))),A.default.createElement("section",{id:"projects",className:"section projects-section"},A.default.createElement("div",{className:"shell"},A.default.createElement(Zf,{number:"02",english:"SELECTED PROJECTS",title:A.default.createElement(A.default.Fragment,null,"\u8B93\u4F5C\u54C1\uFF0C",A.default.createElement("span",{className:"serif-word"},"\u8AAA\u660E\u8A2D\u8A08\u3002"))},A.default.createElement("p",null,"\u5F9E\u4F5C\u54C1\u5F71\u50CF\uFF0C\u63A2\u7D22\u8A2D\u8A08\u8207\u5BE6\u4F5C\u7684\u4E0D\u540C\u9762\u5411\u3002",A.default.createElement("br",null),"\u9EDE\u9078\u5361\u7247\uFF0C\u63A2\u7D22\u8A2D\u8A08\u7406\u5FF5\u8207\u5B8C\u6574\u4F5C\u54C1\u3002")),A.default.createElement("div",{className:"project-toolbar"},A.default.createElement("div",{className:"filter-list",role:"group","aria-label":"\u4F5C\u54C1\u5206\u985E"},bs.filters.map(S=>A.default.createElement("button",{key:S,"aria-pressed":n===S,className:n===S?"active":"",onClick:()=>i(S)},S))),A.default.createElement("span",{className:"project-count",role:"status"},String(m.length).padStart(2,"0")," PROJECTS")),A.default.createElement("div",{className:"project-grid"},m.map((S,v)=>A.default.createElement(gR,{key:S.id,project:S,index:v,onOpen:a}))),A.default.createElement("div",{className:"projects-footnote"},A.default.createElement(xn,{name:"image",size:17}),A.default.createElement("span",null,"\u9EDE\u9078\u4F5C\u54C1\uFF0C\u67E5\u770B\u8A2D\u8A08\u7406\u5FF5\u3001\u5B8C\u6574\u5716\u7247\u8207\u4E92\u52D5\u6A21\u578B\u3002")))),A.default.createElement("section",{id:"experience",className:"section shell experience-section"},A.default.createElement(Zf,{number:"03",english:"EXPERIENCE & ACHIEVEMENTS",title:"\u6BCF\u4E00\u6B21\u53C3\u8207\uFF0C\u90FD\u662F\u8A2D\u8A08\u7684\u5EF6\u4F38\u3002"}),A.default.createElement("div",{className:"experience-layout"},A.default.createElement("aside",{className:"experience-aside"},A.default.createElement("div",{className:"vertical-label"},"LEARN. MAKE. COLLABORATE."),A.default.createElement("p",null,"\u7D93\u6B77\u6642\u9593\u8EF8")),A.default.createElement("div",{className:"timeline"},f.map(S=>A.default.createElement("article",{className:"timeline-item",key:S.id},A.default.createElement("div",{className:"timeline-year"},A.default.createElement("time",{dateTime:S.year},S.year),A.default.createElement("span",null)),A.default.createElement("div",{className:"timeline-content"},A.default.createElement("h3",null,S.title))))))),A.default.createElement("section",{id:"certifications",className:"section certificates-section"},A.default.createElement("div",{className:"shell"},A.default.createElement(Zf,{number:"04",english:"CERTIFICATIONS",title:"\u4EE5\u5C08\u696D\u57FA\u790E\uFF0C\u652F\u6490\u6BCF\u500B\u958B\u767C\u968E\u6BB5\u3002"},A.default.createElement("p",null,"\u4F9D\u5546\u54C1\u958B\u767C\u6D41\u7A0B\u6574\u7406\u80FD\u529B\u4F50\u8B49\uFF0C",A.default.createElement("br",null),"\u5448\u73FE\u5F9E\u8A2D\u8A08\u3001\u88FD\u4F5C\u5230\u884C\u92B7\u7684\u5C08\u696D\u57FA\u790E\u3002")),A.default.createElement("ol",{className:"process-flow","aria-label":"\u5546\u54C1\u958B\u767C\u6D41\u7A0B"},bs.process.map((S,v)=>A.default.createElement("li",{key:S},A.default.createElement("span",null,"0",v+1),A.default.createElement("b",null,S),v<bs.process.length-1&&A.default.createElement(xn,{name:"arrow",size:15})))),A.default.createElement("div",{className:"certificate-grid"},bs.certifications.map((S,v)=>A.default.createElement("article",{className:"certificate reveal",key:S.id},A.default.createElement("div",{className:"certificate-image"},S.image?A.default.createElement(Kf,{src:S.image,alt:S.name,loading:"lazy"}):A.default.createElement("div",{className:"document-placeholder"},A.default.createElement("span",null,"PROFESSIONAL",A.default.createElement("br",null),"CERTIFICATION"),A.default.createElement(xn,{name:"file",size:38}),A.default.createElement("div",{className:"document-lines"},A.default.createElement("i",null),A.default.createElement("i",null),A.default.createElement("i",null)),A.default.createElement("small",null,"\u8B49\u7167\u5716\u7247\u5F85\u88DC")),A.default.createElement("span",{className:"cert-number"},"0",v+1)),A.default.createElement("div",{className:"certificate-copy"},A.default.createElement("p",{className:"cert-category"},S.category),A.default.createElement("h3",null,S.name))))))),A.default.createElement("section",{id:"about",className:"section shell about-section"},A.default.createElement("div",{className:"about-photo reveal"},M.photo?A.default.createElement("button",{className:"photo-button",onClick:()=>o({src:M.photo,alt:M.photoAlt,caption:M.name})},A.default.createElement(Kf,{src:M.photo,alt:M.photoAlt,loading:"lazy"})):A.default.createElement("div",{className:"portrait-placeholder"},A.default.createElement("div",{className:"portrait-outline"},A.default.createElement("span",null),A.default.createElement("i",null)),A.default.createElement("span",{className:"portrait-label"},"YOUR PORTRAIT HERE",A.default.createElement("small",null,"\u500B\u4EBA\u5F62\u8C61\u7167\u7247\u5F85\u88DC \xB7 \u5EFA\u8B70 3:4"))),A.default.createElement("span",{className:"photo-side-label"},"THE PERSON BEHIND THE PROCESS")),A.default.createElement("div",{className:"about-copy reveal"},A.default.createElement("p",{className:"eyebrow"},A.default.createElement("span",null,"05")," ABOUT ME"),A.default.createElement("h2",null,"\u8A2D\u8A08\u4E4B\u5916\uFF0C",A.default.createElement("br",null),"\u6211\u4E5F\u5728\u610F\u5982\u4F55\u5BE6\u73FE\u3002"),A.default.createElement("h3",null,M.name,A.default.createElement("span",null,M.englishName)),A.default.createElement("p",null,M.about),M.background&&A.default.createElement("p",{className:"about-background"},M.background),A.default.createElement("div",{className:"education"},A.default.createElement("span",null,"EDUCATION"),A.default.createElement("p",null,M.education)),A.default.createElement("div",{className:"traits"},M.traits.map(S=>A.default.createElement("span",{key:S},S))),A.default.createElement("p",null,M.career))),A.default.createElement("section",{id:"contact",className:"contact-section"},A.default.createElement("div",{className:"shell"},A.default.createElement("div",{className:"contact-top"},A.default.createElement("div",null,A.default.createElement("p",{className:"eyebrow"},A.default.createElement("span",null,"06")," LET\u2019S CONNECT"),A.default.createElement("h2",null,"\u4E0B\u4E00\u500B\u60F3\u6CD5\uFF0C",A.default.createElement("br",null),"\u4E00\u8D77\u8B93\u5B83\u6210\u5F62",A.default.createElement("span",null,"."))),A.default.createElement("div",{className:"contact-side"},A.default.createElement("p",null,"\u671F\u5F85\u4EA4\u6D41\u5546\u54C1\u8A2D\u8A08\u3001\u6578\u4F4D\u61C9\u7528",A.default.createElement("br",null),"\u8207\u8DE8\u9818\u57DF\u958B\u767C\u7684\u66F4\u591A\u53EF\u80FD\u3002"),M.email?A.default.createElement("div",{className:"email-row"},A.default.createElement("a",{href:"mailto:"+M.email},M.email,A.default.createElement(xn,{name:"arrow",size:20})),A.default.createElement("button",{className:"copy-email",onClick:g},"\u8907\u88FD Email")):A.default.createElement("div",{className:"contact-email pending-contact"},A.default.createElement(xn,{name:"mail",size:22}),A.default.createElement("span",null,"Email \u5F85\u88DC"),A.default.createElement("small",null,"\u65B0\u589E\u806F\u7D61\u8CC7\u8A0A\u5F8C\u986F\u793A\u9023\u7D50")))),A.default.createElement("footer",null,A.default.createElement("span",null,M.name," ",A.default.createElement("b",null,"\uFF0F")," PRODUCT DESIGN & DEVELOPMENT"),A.default.createElement("a",{href:"#top"},"BACK TO TOP ",A.default.createElement(xn,{name:"arrow",size:14})))))),A.default.createElement("a",{href:"#top",className:"back-top "+(u?"visible":""),"aria-label":"\u8FD4\u56DE\u9802\u90E8",tabIndex:u?0:-1},A.default.createElement(xn,{name:"down",size:20})),A.default.createElement("div",{className:"toast "+(h?"show":""),role:"status"},h),A.default.createElement(m0,{open:!!s,onClose:()=>a(null),label:"PROJECT / \u5C08\u6848\u8A73\u60C5",kind:"project-dialog"},s&&A.default.createElement("div",{className:"project-detail"},A.default.createElement("div",{className:"detail-heading"},A.default.createElement("span",{className:"eyebrow"},"PROJECT ",s.number," / ",s.demo?"\u793A\u7BC4\u5C08\u6848":"SELECTED WORK"),A.default.createElement("h2",null,s.title)),s.category.includes("3D Modeling")?A.default.createElement("div",null,A.default.createElement(rb,{key:s.id,url:s.modelUrl}),s.imageProvided&&A.default.createElement(d0,{key:s.id,project:s,onZoom:o})):A.default.createElement(d0,{key:s.id,project:s,onZoom:o}),A.default.createElement("section",{className:"concept-section"},A.default.createElement("h3",null,"\u8A2D\u8A08\u6982\u5FF5"),A.default.createElement("p",null,s.concept||s.details?.find(S=>S.title==="\u8A2D\u8A08\u6982\u5FF5")?.text||"\u5F85\u88DC\u8CC7\u6599\uFF5C\u8ACB\u88DC\u5145\u4F5C\u54C1\u7684\u8A2D\u8A08\u6982\u5FF5\u3002")),A.default.createElement("button",{className:"button primary",onClick:()=>a(null)},"\u8FD4\u56DE\u4F5C\u54C1\u5217\u8868 ",A.default.createElement(xn,{name:"close",size:16})))),A.default.createElement(m0,{open:!!l,onClose:()=>c(null),label:"DOCUMENT / \u8B49\u660E\u8CC7\u6599",kind:"proof-dialog"},l&&A.default.createElement("div",{className:"proof-content"},A.default.createElement("h2",null,l.title),l.image?A.default.createElement("button",{className:"proof-image",onClick:()=>o({src:l.image,alt:l.title,caption:l.title})},A.default.createElement("img",{src:l.image,alt:l.title}),A.default.createElement("span",null,"\u9EDE\u64CA\u653E\u5927")):A.default.createElement(mR,{ratio:"\u539F\u59CB\u6587\u4EF6\u6BD4\u4F8B",label:"\u5C1A\u672A\u4E0A\u50B3\u8B49\u660E\u8CC7\u6599"}),A.default.createElement("p",null,l.caption))),A.default.createElement(m0,{open:!!r,onClose:()=>o(null),label:"IMAGE / \u5716\u7247\u6AA2\u8996",kind:"lightbox"},r&&(r.interactive?A.default.createElement(p0,{key:r.src,image:r}):A.default.createElement("figure",null,A.default.createElement("img",{src:r.src,alt:r.alt}),A.default.createElement("figcaption",null,r.caption)))))}(0,ob.createRoot)(document.getElementById("root")).render(A.default.createElement(vR,null));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
