(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Ju(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $d={exports:{}},ha={},zd={exports:{}},De={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function XS(){if(Xg)return De;Xg=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.iterator;function S(M){return M===null||typeof M!="object"?null:(M=w&&M[w]||M["@@iterator"],typeof M=="function"?M:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function j(M,X,de){this.props=M,this.context=X,this.refs=N,this.updater=de||I}j.prototype.isReactComponent={},j.prototype.setState=function(M,X){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,X,"setState")},j.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function z(){}z.prototype=j.prototype;function W(M,X,de){this.props=M,this.context=X,this.refs=N,this.updater=de||I}var G=W.prototype=new z;G.constructor=W,T(G,j.prototype),G.isPureReactComponent=!0;var K=Array.isArray,V=Object.prototype.hasOwnProperty,J={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function _(M,X,de){var Ee,me={},xe=null,_e=null;if(X!=null)for(Ee in X.ref!==void 0&&(_e=X.ref),X.key!==void 0&&(xe=""+X.key),X)V.call(X,Ee)&&!k.hasOwnProperty(Ee)&&(me[Ee]=X[Ee]);var Ce=arguments.length-2;if(Ce===1)me.children=de;else if(1<Ce){for(var ke=Array(Ce),He=0;He<Ce;He++)ke[He]=arguments[He+2];me.children=ke}if(M&&M.defaultProps)for(Ee in Ce=M.defaultProps,Ce)me[Ee]===void 0&&(me[Ee]=Ce[Ee]);return{$$typeof:t,type:M,key:xe,ref:_e,props:me,_owner:J.current}}function P(M,X){return{$$typeof:t,type:M.type,key:X,ref:M.ref,props:M.props,_owner:M._owner}}function A(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function R(M){var X={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(de){return X[de]})}var B=/\/+/g;function C(M,X){return typeof M=="object"&&M!==null&&M.key!=null?R(""+M.key):X.toString(36)}function Se(M,X,de,Ee,me){var xe=typeof M;(xe==="undefined"||xe==="boolean")&&(M=null);var _e=!1;if(M===null)_e=!0;else switch(xe){case"string":case"number":_e=!0;break;case"object":switch(M.$$typeof){case t:case e:_e=!0}}if(_e)return _e=M,me=me(_e),M=Ee===""?"."+C(_e,0):Ee,K(me)?(de="",M!=null&&(de=M.replace(B,"$&/")+"/"),Se(me,X,de,"",function(He){return He})):me!=null&&(A(me)&&(me=P(me,de+(!me.key||_e&&_e.key===me.key?"":(""+me.key).replace(B,"$&/")+"/")+M)),X.push(me)),1;if(_e=0,Ee=Ee===""?".":Ee+":",K(M))for(var Ce=0;Ce<M.length;Ce++){xe=M[Ce];var ke=Ee+C(xe,Ce);_e+=Se(xe,X,de,ke,me)}else if(ke=S(M),typeof ke=="function")for(M=ke.call(M),Ce=0;!(xe=M.next()).done;)xe=xe.value,ke=Ee+C(xe,Ce++),_e+=Se(xe,X,de,ke,me);else if(xe==="object")throw X=String(M),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return _e}function je(M,X,de){if(M==null)return M;var Ee=[],me=0;return Se(M,Ee,"","",function(xe){return X.call(de,xe,me++)}),Ee}function Fe(M){if(M._status===-1){var X=M._result;X=X(),X.then(function(de){(M._status===0||M._status===-1)&&(M._status=1,M._result=de)},function(de){(M._status===0||M._status===-1)&&(M._status=2,M._result=de)}),M._status===-1&&(M._status=0,M._result=X)}if(M._status===1)return M._result.default;throw M._result}var Pe={current:null},ne={transition:null},le={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:ne,ReactCurrentOwner:J};function oe(){throw Error("act(...) is not supported in production builds of React.")}return De.Children={map:je,forEach:function(M,X,de){je(M,function(){X.apply(this,arguments)},de)},count:function(M){var X=0;return je(M,function(){X++}),X},toArray:function(M){return je(M,function(X){return X})||[]},only:function(M){if(!A(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},De.Component=j,De.Fragment=n,De.Profiler=a,De.PureComponent=W,De.StrictMode=o,De.Suspense=m,De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,De.act=oe,De.cloneElement=function(M,X,de){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Ee=T({},M.props),me=M.key,xe=M.ref,_e=M._owner;if(X!=null){if(X.ref!==void 0&&(xe=X.ref,_e=J.current),X.key!==void 0&&(me=""+X.key),M.type&&M.type.defaultProps)var Ce=M.type.defaultProps;for(ke in X)V.call(X,ke)&&!k.hasOwnProperty(ke)&&(Ee[ke]=X[ke]===void 0&&Ce!==void 0?Ce[ke]:X[ke])}var ke=arguments.length-2;if(ke===1)Ee.children=de;else if(1<ke){Ce=Array(ke);for(var He=0;He<ke;He++)Ce[He]=arguments[He+2];Ee.children=Ce}return{$$typeof:t,type:M.type,key:me,ref:xe,props:Ee,_owner:_e}},De.createContext=function(M){return M={$$typeof:d,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:u,_context:M},M.Consumer=M},De.createElement=_,De.createFactory=function(M){var X=_.bind(null,M);return X.type=M,X},De.createRef=function(){return{current:null}},De.forwardRef=function(M){return{$$typeof:p,render:M}},De.isValidElement=A,De.lazy=function(M){return{$$typeof:b,_payload:{_status:-1,_result:M},_init:Fe}},De.memo=function(M,X){return{$$typeof:y,type:M,compare:X===void 0?null:X}},De.startTransition=function(M){var X=ne.transition;ne.transition={};try{M()}finally{ne.transition=X}},De.unstable_act=oe,De.useCallback=function(M,X){return Pe.current.useCallback(M,X)},De.useContext=function(M){return Pe.current.useContext(M)},De.useDebugValue=function(){},De.useDeferredValue=function(M){return Pe.current.useDeferredValue(M)},De.useEffect=function(M,X){return Pe.current.useEffect(M,X)},De.useId=function(){return Pe.current.useId()},De.useImperativeHandle=function(M,X,de){return Pe.current.useImperativeHandle(M,X,de)},De.useInsertionEffect=function(M,X){return Pe.current.useInsertionEffect(M,X)},De.useLayoutEffect=function(M,X){return Pe.current.useLayoutEffect(M,X)},De.useMemo=function(M,X){return Pe.current.useMemo(M,X)},De.useReducer=function(M,X,de){return Pe.current.useReducer(M,X,de)},De.useRef=function(M){return Pe.current.useRef(M)},De.useState=function(M){return Pe.current.useState(M)},De.useSyncExternalStore=function(M,X,de){return Pe.current.useSyncExternalStore(M,X,de)},De.useTransition=function(){return Pe.current.useTransition()},De.version="18.3.1",De}var Jg;function Xf(){return Jg||(Jg=1,zd.exports=XS()),zd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function JS(){if(Qg)return ha;Qg=1;var t=Xf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(p,m,y){var b,w={},S=null,I=null;y!==void 0&&(S=""+y),m.key!==void 0&&(S=""+m.key),m.ref!==void 0&&(I=m.ref);for(b in m)o.call(m,b)&&!u.hasOwnProperty(b)&&(w[b]=m[b]);if(p&&p.defaultProps)for(b in m=p.defaultProps,m)w[b]===void 0&&(w[b]=m[b]);return{$$typeof:e,type:p,key:S,ref:I,props:w,_owner:a.current}}return ha.Fragment=n,ha.jsx=d,ha.jsxs=d,ha}var Zg;function QS(){return Zg||(Zg=1,$d.exports=JS()),$d.exports}var F=QS(),uu={},Hd={exports:{}},qt={},Wd={exports:{}},Vd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function ZS(){return em||(em=1,function(t){function e(ne,le){var oe=ne.length;ne.push(le);e:for(;0<oe;){var M=oe-1>>>1,X=ne[M];if(0<a(X,le))ne[M]=le,ne[oe]=X,oe=M;else break e}}function n(ne){return ne.length===0?null:ne[0]}function o(ne){if(ne.length===0)return null;var le=ne[0],oe=ne.pop();if(oe!==le){ne[0]=oe;e:for(var M=0,X=ne.length,de=X>>>1;M<de;){var Ee=2*(M+1)-1,me=ne[Ee],xe=Ee+1,_e=ne[xe];if(0>a(me,oe))xe<X&&0>a(_e,me)?(ne[M]=_e,ne[xe]=oe,M=xe):(ne[M]=me,ne[Ee]=oe,M=Ee);else if(xe<X&&0>a(_e,oe))ne[M]=_e,ne[xe]=oe,M=xe;else break e}}return le}function a(ne,le){var oe=ne.sortIndex-le.sortIndex;return oe!==0?oe:ne.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var d=Date,p=d.now();t.unstable_now=function(){return d.now()-p}}var m=[],y=[],b=1,w=null,S=3,I=!1,T=!1,N=!1,j=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(ne){for(var le=n(y);le!==null;){if(le.callback===null)o(y);else if(le.startTime<=ne)o(y),le.sortIndex=le.expirationTime,e(m,le);else break;le=n(y)}}function K(ne){if(N=!1,G(ne),!T)if(n(m)!==null)T=!0,Fe(V);else{var le=n(y);le!==null&&Pe(K,le.startTime-ne)}}function V(ne,le){T=!1,N&&(N=!1,z(_),_=-1),I=!0;var oe=S;try{for(G(le),w=n(m);w!==null&&(!(w.expirationTime>le)||ne&&!R());){var M=w.callback;if(typeof M=="function"){w.callback=null,S=w.priorityLevel;var X=M(w.expirationTime<=le);le=t.unstable_now(),typeof X=="function"?w.callback=X:w===n(m)&&o(m),G(le)}else o(m);w=n(m)}if(w!==null)var de=!0;else{var Ee=n(y);Ee!==null&&Pe(K,Ee.startTime-le),de=!1}return de}finally{w=null,S=oe,I=!1}}var J=!1,k=null,_=-1,P=5,A=-1;function R(){return!(t.unstable_now()-A<P)}function B(){if(k!==null){var ne=t.unstable_now();A=ne;var le=!0;try{le=k(!0,ne)}finally{le?C():(J=!1,k=null)}}else J=!1}var C;if(typeof W=="function")C=function(){W(B)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,je=Se.port2;Se.port1.onmessage=B,C=function(){je.postMessage(null)}}else C=function(){j(B,0)};function Fe(ne){k=ne,J||(J=!0,C())}function Pe(ne,le){_=j(function(){ne(t.unstable_now())},le)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ne){ne.callback=null},t.unstable_continueExecution=function(){T||I||(T=!0,Fe(V))},t.unstable_forceFrameRate=function(ne){0>ne||125<ne?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ne?Math.floor(1e3/ne):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return n(m)},t.unstable_next=function(ne){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var oe=S;S=le;try{return ne()}finally{S=oe}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ne,le){switch(ne){case 1:case 2:case 3:case 4:case 5:break;default:ne=3}var oe=S;S=ne;try{return le()}finally{S=oe}},t.unstable_scheduleCallback=function(ne,le,oe){var M=t.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?M+oe:M):oe=M,ne){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=oe+X,ne={id:b++,callback:le,priorityLevel:ne,startTime:oe,expirationTime:X,sortIndex:-1},oe>M?(ne.sortIndex=oe,e(y,ne),n(m)===null&&ne===n(y)&&(N?(z(_),_=-1):N=!0,Pe(K,oe-M))):(ne.sortIndex=X,e(m,ne),T||I||(T=!0,Fe(V))),ne},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(ne){var le=S;return function(){var oe=S;S=le;try{return ne.apply(this,arguments)}finally{S=oe}}}}(Vd)),Vd}var tm;function e1(){return tm||(tm=1,Wd.exports=ZS()),Wd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function t1(){if(rm)return qt;rm=1;var t=Xf(),e=e1();function n(r){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+r,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+r+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,a={};function u(r,i){d(r,i),d(r+"Capture",i)}function d(r,i){for(a[r]=i,r=0;r<i.length;r++)o.add(i[r])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,b={},w={};function S(r){return m.call(w,r)?!0:m.call(b,r)?!1:y.test(r)?w[r]=!0:(b[r]=!0,!1)}function I(r,i,s,c){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function T(r,i,s,c){if(i===null||typeof i>"u"||I(r,i,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(r,i,s,c,f,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=r,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){j[r]=new N(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var i=r[0];j[i]=new N(i,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){j[r]=new N(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){j[r]=new N(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){j[r]=new N(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){j[r]=new N(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){j[r]=new N(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){j[r]=new N(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){j[r]=new N(r,5,!1,r.toLowerCase(),null,!1,!1)});var z=/[\-:]([a-z])/g;function W(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var i=r.replace(z,W);j[i]=new N(i,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var i=r.replace(z,W);j[i]=new N(i,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var i=r.replace(z,W);j[i]=new N(i,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){j[r]=new N(r,1,!1,r.toLowerCase(),null,!1,!1)}),j.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){j[r]=new N(r,1,!1,r.toLowerCase(),null,!0,!0)});function G(r,i,s,c){var f=j.hasOwnProperty(i)?j[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,s,f,c)&&(s=null),c||f===null?S(i)&&(s===null?r.removeAttribute(i):r.setAttribute(i,""+s)):f.mustUseProperty?r[f.propertyName]=s===null?f.type===3?!1:"":s:(i=f.attributeName,c=f.attributeNamespace,s===null?r.removeAttribute(i):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,c?r.setAttributeNS(c,i,s):r.setAttribute(i,s))))}var K=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),J=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),R=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Se=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),ne=Symbol.iterator;function le(r){return r===null||typeof r!="object"?null:(r=ne&&r[ne]||r["@@iterator"],typeof r=="function"?r:null)}var oe=Object.assign,M;function X(r){if(M===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);M=i&&i[1]||""}return`
`+M+r}var de=!1;function Ee(r,i){if(!r||de)return"";de=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(q){var c=q}Reflect.construct(r,[],i)}else{try{i.call()}catch(q){c=q}r.call(i.prototype)}else{try{throw Error()}catch(q){c=q}r()}}catch(q){if(q&&c&&typeof q.stack=="string"){for(var f=q.stack.split(`
`),g=c.stack.split(`
`),E=f.length-1,D=g.length-1;1<=E&&0<=D&&f[E]!==g[D];)D--;for(;1<=E&&0<=D;E--,D--)if(f[E]!==g[D]){if(E!==1||D!==1)do if(E--,D--,0>D||f[E]!==g[D]){var O=`
`+f[E].replace(" at new "," at ");return r.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",r.displayName)),O}while(1<=E&&0<=D);break}}}finally{de=!1,Error.prepareStackTrace=s}return(r=r?r.displayName||r.name:"")?X(r):""}function me(r){switch(r.tag){case 5:return X(r.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return r=Ee(r.type,!1),r;case 11:return r=Ee(r.type.render,!1),r;case 1:return r=Ee(r.type,!0),r;default:return""}}function xe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case k:return"Fragment";case J:return"Portal";case P:return"Profiler";case _:return"StrictMode";case C:return"Suspense";case Se:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case R:return(r.displayName||"Context")+".Consumer";case A:return(r._context.displayName||"Context")+".Provider";case B:var i=r.render;return r=r.displayName,r||(r=i.displayName||i.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case je:return i=r.displayName||null,i!==null?i:xe(r.type)||"Memo";case Fe:i=r._payload,r=r._init;try{return xe(r(i))}catch{}}return null}function _e(r){var i=r.type;switch(r.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=i.render,r=r.displayName||r.name||"",i.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function ke(r){var i=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(r){var i=ke(r)?"checked":"value",s=Object.getOwnPropertyDescriptor(r.constructor.prototype,i),c=""+r[i];if(!r.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,g=s.set;return Object.defineProperty(r,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(r,i,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){r._valueTracker=null,delete r[i]}}}}function ft(r){r._valueTracker||(r._valueTracker=He(r))}function pt(r){if(!r)return!1;var i=r._valueTracker;if(!i)return!0;var s=i.getValue(),c="";return r&&(c=ke(r)?r.checked?"true":"false":r.value),r=c,r!==s?(i.setValue(r),!0):!1}function lr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ur(r,i){var s=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??r._wrapperState.initialChecked})}function on(r,i){var s=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;s=Ce(i.value!=null?i.value:s),r._wrapperState={initialChecked:c,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function sn(r,i){i=i.checked,i!=null&&G(r,"checked",i,!1)}function an(r,i){sn(r,i);var s=Ce(i.value),c=i.type;if(s!=null)c==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+s):r.value!==""+s&&(r.value=""+s);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}i.hasOwnProperty("value")?cr(r,i.type,s):i.hasOwnProperty("defaultValue")&&cr(r,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(r.defaultChecked=!!i.defaultChecked)}function so(r,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+r._wrapperState.initialValue,s||i===r.value||(r.value=i),r.defaultValue=i}s=r.name,s!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,s!==""&&(r.name=s)}function cr(r,i,s){(i!=="number"||lr(r.ownerDocument)!==r)&&(s==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+s&&(r.defaultValue=""+s))}var Jt=Array.isArray;function ln(r,i,s,c){if(r=r.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<r.length;s++)f=i.hasOwnProperty("$"+r[s].value),r[s].selected!==f&&(r[s].selected=f),f&&c&&(r[s].defaultSelected=!0)}else{for(s=""+Ce(s),i=null,f=0;f<r.length;f++){if(r[f].value===s){r[f].selected=!0,c&&(r[f].defaultSelected=!0);return}i!==null||r[f].disabled||(i=r[f])}i!==null&&(i.selected=!0)}}function Ss(r,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ao(r,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(Jt(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}r._wrapperState={initialValue:Ce(s)}}function lo(r,i){var s=Ce(i.value),c=Ce(i.defaultValue);s!=null&&(s=""+s,s!==r.value&&(r.value=s),i.defaultValue==null&&r.defaultValue!==s&&(r.defaultValue=s)),c!=null&&(r.defaultValue=""+c)}function bs(r){var i=r.textContent;i===r._wrapperState.initialValue&&i!==""&&i!==null&&(r.value=i)}function at(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lt(r,i){return r==null||r==="http://www.w3.org/1999/xhtml"?at(i):r==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var un,Es=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,c,f){MSApp.execUnsafeLocalFunction(function(){return r(i,s,c,f)})}:r}(function(r,i){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=i;else{for(un=un||document.createElement("div"),un.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=un.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;i.firstChild;)r.appendChild(i.firstChild)}});function Nn(r,i){if(i){var s=r.firstChild;if(s&&s===r.lastChild&&s.nodeType===3){s.nodeValue=i;return}}r.textContent=i}var Ei={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ii=["Webkit","ms","Moz","O"];Object.keys(Ei).forEach(function(r){Ii.forEach(function(i){i=i+r.charAt(0).toUpperCase()+r.substring(1),Ei[i]=Ei[r]})});function Is(r,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Ei.hasOwnProperty(r)&&Ei[r]?(""+i).trim():i+"px"}function xs(r,i){r=r.style;for(var s in i)if(i.hasOwnProperty(s)){var c=s.indexOf("--")===0,f=Is(s,i[s],c);s==="float"&&(s="cssFloat"),c?r.setProperty(s,f):r[s]=f}}var Cs=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _s(r,i){if(i){if(Cs[r]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,r));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ts(r,i){if(r.indexOf("-")===-1)return typeof i.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xi=null;function uo(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Ps=null,dr=null,Vr=null;function co(r){if(r=Zs(r)){if(typeof Ps!="function")throw Error(n(280));var i=r.stateNode;i&&(i=xl(i),Ps(r.stateNode,r.type,i))}}function cn(r){dr?Vr?Vr.push(r):Vr=[r]:dr=r}function ks(){if(dr){var r=dr,i=Vr;if(Vr=dr=null,co(r),i)for(r=0;r<i.length;r++)co(i[r])}}function fo(r,i){return r(i)}function Ds(){}var dn=!1;function As(r,i,s){if(dn)return r(i,s);dn=!0;try{return fo(r,i,s)}finally{dn=!1,(dr!==null||Vr!==null)&&(Ds(),ks())}}function nt(r,i){var s=r.stateNode;if(s===null)return null;var c=xl(s);if(c===null)return null;s=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var po=!1;if(p)try{var Cr={};Object.defineProperty(Cr,"passive",{get:function(){po=!0}}),window.addEventListener("test",Cr,Cr),window.removeEventListener("test",Cr,Cr)}catch{po=!1}function Ci(r,i,s,c,f,g,E,D,O){var q=Array.prototype.slice.call(arguments,3);try{i.apply(s,q)}catch(Z){this.onError(Z)}}var _i=!1,ho=null,_r=!1,Rs=null,hc={onError:function(r){_i=!0,ho=r}};function Os(r,i,s,c,f,g,E,D,O){_i=!1,ho=null,Ci.apply(hc,arguments)}function gc(r,i,s,c,f,g,E,D,O){if(Os.apply(this,arguments),_i){if(_i){var q=ho;_i=!1,ho=null}else throw Error(n(198));_r||(_r=!0,Rs=q)}}function Tr(r){var i=r,s=r;if(r.alternate)for(;i.return;)i=i.return;else{r=i;do i=r,(i.flags&4098)!==0&&(s=i.return),r=i.return;while(r)}return i.tag===3?s:null}function Ti(r){if(r.tag===13){var i=r.memoizedState;if(i===null&&(r=r.alternate,r!==null&&(i=r.memoizedState)),i!==null)return i.dehydrated}return null}function Pr(r){if(Tr(r)!==r)throw Error(n(188))}function Xa(r){var i=r.alternate;if(!i){if(i=Tr(r),i===null)throw Error(n(188));return i!==r?null:r}for(var s=r,c=i;;){var f=s.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===s)return Pr(f),r;if(g===c)return Pr(f),i;g=g.sibling}throw Error(n(188))}if(s.return!==c.return)s=f,c=g;else{for(var E=!1,D=f.child;D;){if(D===s){E=!0,s=f,c=g;break}if(D===c){E=!0,c=f,s=g;break}D=D.sibling}if(!E){for(D=g.child;D;){if(D===s){E=!0,s=g,c=f;break}if(D===c){E=!0,c=g,s=f;break}D=D.sibling}if(!E)throw Error(n(189))}}if(s.alternate!==c)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?r:i}function Ns(r){return r=Xa(r),r!==null?go(r):null}function go(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var i=go(r);if(i!==null)return i;r=r.sibling}return null}var mo=e.unstable_scheduleCallback,Ls=e.unstable_cancelCallback,Ja=e.unstable_shouldYield,mc=e.unstable_requestPaint,qe=e.unstable_now,Qa=e.unstable_getCurrentPriorityLevel,Pi=e.unstable_ImmediatePriority,Ln=e.unstable_UserBlockingPriority,fr=e.unstable_NormalPriority,Ms=e.unstable_LowPriority,Za=e.unstable_IdlePriority,ki=null,Qt=null;function el(r){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(ki,r,void 0,(r.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:rl,Bs=Math.log,tl=Math.LN2;function rl(r){return r>>>=0,r===0?32:31-(Bs(r)/tl|0)|0}var vo=64,yo=4194304;function Mn(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Di(r,i){var s=r.pendingLanes;if(s===0)return 0;var c=0,f=r.suspendedLanes,g=r.pingedLanes,E=s&268435455;if(E!==0){var D=E&~f;D!==0?c=Mn(D):(g&=E,g!==0&&(c=Mn(g)))}else E=s&~f,E!==0?c=Mn(E):g!==0&&(c=Mn(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=s&16),i=r.entangledLanes,i!==0)for(r=r.entanglements,i&=c;0<i;)s=31-Ot(i),f=1<<s,c|=r[s],i&=~f;return c}function vc(r,i){switch(r){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fn(r,i){for(var s=r.suspendedLanes,c=r.pingedLanes,f=r.expirationTimes,g=r.pendingLanes;0<g;){var E=31-Ot(g),D=1<<E,O=f[E];O===-1?((D&s)===0||(D&c)!==0)&&(f[E]=vc(D,i)):O<=i&&(r.expiredLanes|=D),g&=~D}}function Zt(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Ai(){var r=vo;return vo<<=1,(vo&4194240)===0&&(vo=64),r}function Bn(r){for(var i=[],s=0;31>s;s++)i.push(r);return i}function jn(r,i,s){r.pendingLanes|=i,i!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,i=31-Ot(i),r[i]=s}function Ge(r,i){var s=r.pendingLanes&~i;r.pendingLanes=i,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=i,r.mutableReadLanes&=i,r.entangledLanes&=i,i=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<s;){var f=31-Ot(s),g=1<<f;i[f]=0,c[f]=-1,r[f]=-1,s&=~g}}function Fn(r,i){var s=r.entangledLanes|=i;for(r=r.entanglements;s;){var c=31-Ot(s),f=1<<c;f&i|r[c]&i&&(r[c]|=i),s&=~f}}var Re=0;function Un(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var nl,wo,il,ol,sl,js=!1,Gr=[],It=null,kr=null,Dr=null,$n=new Map,pr=new Map,qr=[],yc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function al(r,i){switch(r){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":$n.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pr.delete(i.pointerId)}}function Ft(r,i,s,c,f,g){return r===null||r.nativeEvent!==g?(r={blockedOn:i,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Zs(i),i!==null&&wo(i)),r):(r.eventSystemFlags|=c,i=r.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),r)}function wc(r,i,s,c,f){switch(i){case"focusin":return It=Ft(It,r,i,s,c,f),!0;case"dragenter":return kr=Ft(kr,r,i,s,c,f),!0;case"mouseover":return Dr=Ft(Dr,r,i,s,c,f),!0;case"pointerover":var g=f.pointerId;return $n.set(g,Ft($n.get(g)||null,r,i,s,c,f)),!0;case"gotpointercapture":return g=f.pointerId,pr.set(g,Ft(pr.get(g)||null,r,i,s,c,f)),!0}return!1}function ll(r){var i=Li(r.target);if(i!==null){var s=Tr(i);if(s!==null){if(i=s.tag,i===13){if(i=Ti(s),i!==null){r.blockedOn=i,sl(r.priority,function(){il(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){r.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}r.blockedOn=null}function pn(r){if(r.blockedOn!==null)return!1;for(var i=r.targetContainers;0<i.length;){var s=So(r.domEventName,r.eventSystemFlags,i[0],r.nativeEvent);if(s===null){s=r.nativeEvent;var c=new s.constructor(s.type,s);xi=c,s.target.dispatchEvent(c),xi=null}else return i=Zs(s),i!==null&&wo(i),r.blockedOn=s,!1;i.shift()}return!0}function Ri(r,i,s){pn(r)&&s.delete(i)}function ul(){js=!1,It!==null&&pn(It)&&(It=null),kr!==null&&pn(kr)&&(kr=null),Dr!==null&&pn(Dr)&&(Dr=null),$n.forEach(Ri),pr.forEach(Ri)}function Ar(r,i){r.blockedOn===i&&(r.blockedOn=null,js||(js=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ul)))}function Rr(r){function i(f){return Ar(f,r)}if(0<Gr.length){Ar(Gr[0],r);for(var s=1;s<Gr.length;s++){var c=Gr[s];c.blockedOn===r&&(c.blockedOn=null)}}for(It!==null&&Ar(It,r),kr!==null&&Ar(kr,r),Dr!==null&&Ar(Dr,r),$n.forEach(i),pr.forEach(i),s=0;s<qr.length;s++)c=qr[s],c.blockedOn===r&&(c.blockedOn=null);for(;0<qr.length&&(s=qr[0],s.blockedOn===null);)ll(s),s.blockedOn===null&&qr.shift()}var hn=K.ReactCurrentBatchConfig,zn=!0;function Ze(r,i,s,c){var f=Re,g=hn.transition;hn.transition=null;try{Re=1,Fs(r,i,s,c)}finally{Re=f,hn.transition=g}}function Sc(r,i,s,c){var f=Re,g=hn.transition;hn.transition=null;try{Re=4,Fs(r,i,s,c)}finally{Re=f,hn.transition=g}}function Fs(r,i,s,c){if(zn){var f=So(r,i,s,c);if(f===null)Ac(r,i,c,Oi,s),al(r,c);else if(wc(f,r,i,s,c))c.stopPropagation();else if(al(r,c),i&4&&-1<yc.indexOf(r)){for(;f!==null;){var g=Zs(f);if(g!==null&&nl(g),g=So(r,i,s,c),g===null&&Ac(r,i,c,Oi,s),g===f)break;f=g}f!==null&&c.stopPropagation()}else Ac(r,i,c,null,s)}}var Oi=null;function So(r,i,s,c){if(Oi=null,r=uo(c),r=Li(r),r!==null)if(i=Tr(r),i===null)r=null;else if(s=i.tag,s===13){if(r=Ti(i),r!==null)return r;r=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;r=null}else i!==r&&(r=null);return Oi=r,null}function Us(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qa()){case Pi:return 1;case Ln:return 4;case fr:case Ms:return 16;case Za:return 536870912;default:return 16}default:return 16}}var er=null,bo=null,Ut=null;function $s(){if(Ut)return Ut;var r,i=bo,s=i.length,c,f="value"in er?er.value:er.textContent,g=f.length;for(r=0;r<s&&i[r]===f[r];r++);var E=s-r;for(c=1;c<=E&&i[s-c]===f[g-c];c++);return Ut=f.slice(r,1<c?1-c:void 0)}function Eo(r){var i=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&i===13&&(r=13)):r=i,r===10&&(r=13),32<=r||r===13?r:0}function Kr(){return!0}function zs(){return!1}function xt(r){function i(s,c,f,g,E){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var D in r)r.hasOwnProperty(D)&&(s=r[D],this[D]=s?s(g):g[D]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Kr:zs,this.isPropagationStopped=zs,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Kr)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Kr)},persist:function(){},isPersistent:Kr}),i}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Io=xt(Or),Yr=oe({},Or,{view:0,detail:0}),bc=xt(Yr),xo,gn,Hn,Ni=oe({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:l,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Hn&&(Hn&&r.type==="mousemove"?(xo=r.screenX-Hn.screenX,gn=r.screenY-Hn.screenY):gn=xo=0,Hn=r),xo)},movementY:function(r){return"movementY"in r?r.movementY:gn}}),Co=xt(Ni),Hs=oe({},Ni,{dataTransfer:0}),cl=xt(Hs),_o=oe({},Yr,{relatedTarget:0}),To=xt(_o),dl=oe({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),mn=xt(dl),fl=oe({},Or,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),pl=xt(fl),hl=oe({},Or,{data:0}),Ws=xt(hl),$t={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gl={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ml={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wn(r){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(r):(r=ml[r])?!!i[r]:!1}function l(){return Wn}var h=oe({},Yr,{key:function(r){if(r.key){var i=$t[r.key]||r.key;if(i!=="Unidentified")return i}return r.type==="keypress"?(r=Eo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?gl[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:l,charCode:function(r){return r.type==="keypress"?Eo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Eo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),v=xt(h),x=oe({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),U=xt(x),Y=oe({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:l}),ae=xt(Y),We=oe({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),ut=xt(We),Oe=oe({},Ni,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),ht=xt(Oe),gt=[9,13,27,32],Xr=p&&"CompositionEvent"in window,Ct=null;p&&"documentMode"in document&&(Ct=document.documentMode);var Po=p&&"TextEvent"in window&&!Ct,ko=p&&(!Xr||Ct&&8<Ct&&11>=Ct),Hp=" ",Wp=!1;function Vp(r,i){switch(r){case"keyup":return gt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Do=!1;function qw(r,i){switch(r){case"compositionend":return Gp(i);case"keypress":return i.which!==32?null:(Wp=!0,Hp);case"textInput":return r=i.data,r===Hp&&Wp?null:r;default:return null}}function Kw(r,i){if(Do)return r==="compositionend"||!Xr&&Vp(r,i)?(r=$s(),Ut=bo=er=null,Do=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ko&&i.locale!=="ko"?null:i.data;default:return null}}var Yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i==="input"?!!Yw[r.type]:i==="textarea"}function Kp(r,i,s,c){cn(c),i=bl(i,"onChange"),0<i.length&&(s=new Io("onChange","change",null,s,c),r.push({event:s,listeners:i}))}var Vs=null,Gs=null;function Xw(r){fh(r,0)}function vl(r){var i=Lo(r);if(pt(i))return r}function Jw(r,i){if(r==="change")return i}var Yp=!1;if(p){var Ec;if(p){var Ic="oninput"in document;if(!Ic){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ic=typeof Xp.oninput=="function"}Ec=Ic}else Ec=!1;Yp=Ec&&(!document.documentMode||9<document.documentMode)}function Jp(){Vs&&(Vs.detachEvent("onpropertychange",Qp),Gs=Vs=null)}function Qp(r){if(r.propertyName==="value"&&vl(Gs)){var i=[];Kp(i,Gs,r,uo(r)),As(Xw,i)}}function Qw(r,i,s){r==="focusin"?(Jp(),Vs=i,Gs=s,Vs.attachEvent("onpropertychange",Qp)):r==="focusout"&&Jp()}function Zw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return vl(Gs)}function eS(r,i){if(r==="click")return vl(i)}function tS(r,i){if(r==="input"||r==="change")return vl(i)}function rS(r,i){return r===i&&(r!==0||1/r===1/i)||r!==r&&i!==i}var Nr=typeof Object.is=="function"?Object.is:rS;function qs(r,i){if(Nr(r,i))return!0;if(typeof r!="object"||r===null||typeof i!="object"||i===null)return!1;var s=Object.keys(r),c=Object.keys(i);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!m.call(i,f)||!Nr(r[f],i[f]))return!1}return!0}function Zp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function eh(r,i){var s=Zp(r);r=0;for(var c;s;){if(s.nodeType===3){if(c=r+s.textContent.length,r<=i&&c>=i)return{node:s,offset:i-r};r=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Zp(s)}}function th(r,i){return r&&i?r===i?!0:r&&r.nodeType===3?!1:i&&i.nodeType===3?th(r,i.parentNode):"contains"in r?r.contains(i):r.compareDocumentPosition?!!(r.compareDocumentPosition(i)&16):!1:!1}function rh(){for(var r=window,i=lr();i instanceof r.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)r=i.contentWindow;else break;i=lr(r.document)}return i}function xc(r){var i=r&&r.nodeName&&r.nodeName.toLowerCase();return i&&(i==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||i==="textarea"||r.contentEditable==="true")}function nS(r){var i=rh(),s=r.focusedElem,c=r.selectionRange;if(i!==s&&s&&s.ownerDocument&&th(s.ownerDocument.documentElement,s)){if(c!==null&&xc(s)){if(i=c.start,r=c.end,r===void 0&&(r=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(r,s.value.length);else if(r=(i=s.ownerDocument||document)&&i.defaultView||window,r.getSelection){r=r.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!r.extend&&g>c&&(f=c,c=g,g=f),f=eh(s,g);var E=eh(s,c);f&&E&&(r.rangeCount!==1||r.anchorNode!==f.node||r.anchorOffset!==f.offset||r.focusNode!==E.node||r.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),r.removeAllRanges(),g>c?(r.addRange(i),r.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),r.addRange(i)))}}for(i=[],r=s;r=r.parentNode;)r.nodeType===1&&i.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)r=i[s],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var iS=p&&"documentMode"in document&&11>=document.documentMode,Ao=null,Cc=null,Ks=null,_c=!1;function nh(r,i,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;_c||Ao==null||Ao!==lr(c)||(c=Ao,"selectionStart"in c&&xc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ks&&qs(Ks,c)||(Ks=c,c=bl(Cc,"onSelect"),0<c.length&&(i=new Io("onSelect","select",null,i,s),r.push({event:i,listeners:c}),i.target=Ao)))}function yl(r,i){var s={};return s[r.toLowerCase()]=i.toLowerCase(),s["Webkit"+r]="webkit"+i,s["Moz"+r]="moz"+i,s}var Ro={animationend:yl("Animation","AnimationEnd"),animationiteration:yl("Animation","AnimationIteration"),animationstart:yl("Animation","AnimationStart"),transitionend:yl("Transition","TransitionEnd")},Tc={},ih={};p&&(ih=document.createElement("div").style,"AnimationEvent"in window||(delete Ro.animationend.animation,delete Ro.animationiteration.animation,delete Ro.animationstart.animation),"TransitionEvent"in window||delete Ro.transitionend.transition);function wl(r){if(Tc[r])return Tc[r];if(!Ro[r])return r;var i=Ro[r],s;for(s in i)if(i.hasOwnProperty(s)&&s in ih)return Tc[r]=i[s];return r}var oh=wl("animationend"),sh=wl("animationiteration"),ah=wl("animationstart"),lh=wl("transitionend"),uh=new Map,ch="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vn(r,i){uh.set(r,i),u(i,[r])}for(var Pc=0;Pc<ch.length;Pc++){var kc=ch[Pc],oS=kc.toLowerCase(),sS=kc[0].toUpperCase()+kc.slice(1);Vn(oS,"on"+sS)}Vn(oh,"onAnimationEnd"),Vn(sh,"onAnimationIteration"),Vn(ah,"onAnimationStart"),Vn("dblclick","onDoubleClick"),Vn("focusin","onFocus"),Vn("focusout","onBlur"),Vn(lh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function dh(r,i,s){var c=r.type||"unknown-event";r.currentTarget=s,gc(c,i,void 0,r),r.currentTarget=null}function fh(r,i){i=(i&4)!==0;for(var s=0;s<r.length;s++){var c=r[s],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var D=c[E],O=D.instance,q=D.currentTarget;if(D=D.listener,O!==g&&f.isPropagationStopped())break e;dh(f,D,q),g=O}else for(E=0;E<c.length;E++){if(D=c[E],O=D.instance,q=D.currentTarget,D=D.listener,O!==g&&f.isPropagationStopped())break e;dh(f,D,q),g=O}}}if(_r)throw r=Rs,_r=!1,Rs=null,r}function Ye(r,i){var s=i[Bc];s===void 0&&(s=i[Bc]=new Set);var c=r+"__bubble";s.has(c)||(ph(i,r,2,!1),s.add(c))}function Dc(r,i,s){var c=0;i&&(c|=4),ph(s,r,c,i)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function Xs(r){if(!r[Sl]){r[Sl]=!0,o.forEach(function(s){s!=="selectionchange"&&(aS.has(s)||Dc(s,!1,r),Dc(s,!0,r))});var i=r.nodeType===9?r:r.ownerDocument;i===null||i[Sl]||(i[Sl]=!0,Dc("selectionchange",!1,i))}}function ph(r,i,s,c){switch(Us(i)){case 1:var f=Ze;break;case 4:f=Sc;break;default:f=Fs}s=f.bind(null,i,s,r),f=void 0,!po||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?r.addEventListener(i,s,{capture:!0,passive:f}):r.addEventListener(i,s,!0):f!==void 0?r.addEventListener(i,s,{passive:f}):r.addEventListener(i,s,!1)}function Ac(r,i,s,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var D=c.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(E===4)for(E=c.return;E!==null;){var O=E.tag;if((O===3||O===4)&&(O=E.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;E=E.return}for(;D!==null;){if(E=Li(D),E===null)return;if(O=E.tag,O===5||O===6){c=g=E;continue e}D=D.parentNode}}c=c.return}As(function(){var q=g,Z=uo(s),te=[];e:{var Q=uh.get(r);if(Q!==void 0){var ue=Io,fe=r;switch(r){case"keypress":if(Eo(s)===0)break e;case"keydown":case"keyup":ue=v;break;case"focusin":fe="focus",ue=To;break;case"focusout":fe="blur",ue=To;break;case"beforeblur":case"afterblur":ue=To;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Co;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=cl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=ae;break;case oh:case sh:case ah:ue=mn;break;case lh:ue=ut;break;case"scroll":ue=bc;break;case"wheel":ue=ht;break;case"copy":case"cut":case"paste":ue=pl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=U}var pe=(i&4)!==0,it=!pe&&r==="scroll",$=pe?Q!==null?Q+"Capture":null:Q;pe=[];for(var L=q,H;L!==null;){H=L;var ie=H.stateNode;if(H.tag===5&&ie!==null&&(H=ie,$!==null&&(ie=nt(L,$),ie!=null&&pe.push(Js(L,ie,H)))),it)break;L=L.return}0<pe.length&&(Q=new ue(Q,fe,null,s,Z),te.push({event:Q,listeners:pe}))}}if((i&7)===0){e:{if(Q=r==="mouseover"||r==="pointerover",ue=r==="mouseout"||r==="pointerout",Q&&s!==xi&&(fe=s.relatedTarget||s.fromElement)&&(Li(fe)||fe[vn]))break e;if((ue||Q)&&(Q=Z.window===Z?Z:(Q=Z.ownerDocument)?Q.defaultView||Q.parentWindow:window,ue?(fe=s.relatedTarget||s.toElement,ue=q,fe=fe?Li(fe):null,fe!==null&&(it=Tr(fe),fe!==it||fe.tag!==5&&fe.tag!==6)&&(fe=null)):(ue=null,fe=q),ue!==fe)){if(pe=Co,ie="onMouseLeave",$="onMouseEnter",L="mouse",(r==="pointerout"||r==="pointerover")&&(pe=U,ie="onPointerLeave",$="onPointerEnter",L="pointer"),it=ue==null?Q:Lo(ue),H=fe==null?Q:Lo(fe),Q=new pe(ie,L+"leave",ue,s,Z),Q.target=it,Q.relatedTarget=H,ie=null,Li(Z)===q&&(pe=new pe($,L+"enter",fe,s,Z),pe.target=H,pe.relatedTarget=it,ie=pe),it=ie,ue&&fe)t:{for(pe=ue,$=fe,L=0,H=pe;H;H=Oo(H))L++;for(H=0,ie=$;ie;ie=Oo(ie))H++;for(;0<L-H;)pe=Oo(pe),L--;for(;0<H-L;)$=Oo($),H--;for(;L--;){if(pe===$||$!==null&&pe===$.alternate)break t;pe=Oo(pe),$=Oo($)}pe=null}else pe=null;ue!==null&&hh(te,Q,ue,pe,!1),fe!==null&&it!==null&&hh(te,it,fe,pe,!0)}}e:{if(Q=q?Lo(q):window,ue=Q.nodeName&&Q.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Q.type==="file")var he=Jw;else if(qp(Q))if(Yp)he=tS;else{he=Zw;var ve=Qw}else(ue=Q.nodeName)&&ue.toLowerCase()==="input"&&(Q.type==="checkbox"||Q.type==="radio")&&(he=eS);if(he&&(he=he(r,q))){Kp(te,he,s,Z);break e}ve&&ve(r,Q,q),r==="focusout"&&(ve=Q._wrapperState)&&ve.controlled&&Q.type==="number"&&cr(Q,"number",Q.value)}switch(ve=q?Lo(q):window,r){case"focusin":(qp(ve)||ve.contentEditable==="true")&&(Ao=ve,Cc=q,Ks=null);break;case"focusout":Ks=Cc=Ao=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,nh(te,s,Z);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":nh(te,s,Z)}var ye;if(Xr)e:{switch(r){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else Do?Vp(r,s)&&(Ie="onCompositionEnd"):r==="keydown"&&s.keyCode===229&&(Ie="onCompositionStart");Ie&&(ko&&s.locale!=="ko"&&(Do||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&Do&&(ye=$s()):(er=Z,bo="value"in er?er.value:er.textContent,Do=!0)),ve=bl(q,Ie),0<ve.length&&(Ie=new Ws(Ie,r,null,s,Z),te.push({event:Ie,listeners:ve}),ye?Ie.data=ye:(ye=Gp(s),ye!==null&&(Ie.data=ye)))),(ye=Po?qw(r,s):Kw(r,s))&&(q=bl(q,"onBeforeInput"),0<q.length&&(Z=new Ws("onBeforeInput","beforeinput",null,s,Z),te.push({event:Z,listeners:q}),Z.data=ye))}fh(te,i)})}function Js(r,i,s){return{instance:r,listener:i,currentTarget:s}}function bl(r,i){for(var s=i+"Capture",c=[];r!==null;){var f=r,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=nt(r,s),g!=null&&c.unshift(Js(r,g,f)),g=nt(r,i),g!=null&&c.push(Js(r,g,f))),r=r.return}return c}function Oo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function hh(r,i,s,c,f){for(var g=i._reactName,E=[];s!==null&&s!==c;){var D=s,O=D.alternate,q=D.stateNode;if(O!==null&&O===c)break;D.tag===5&&q!==null&&(D=q,f?(O=nt(s,g),O!=null&&E.unshift(Js(s,O,D))):f||(O=nt(s,g),O!=null&&E.push(Js(s,O,D)))),s=s.return}E.length!==0&&r.push({event:i,listeners:E})}var lS=/\r\n?/g,uS=/\u0000|\uFFFD/g;function gh(r){return(typeof r=="string"?r:""+r).replace(lS,`
`).replace(uS,"")}function El(r,i,s){if(i=gh(i),gh(r)!==i&&s)throw Error(n(425))}function Il(){}var Rc=null,Oc=null;function Nc(r,i){return r==="textarea"||r==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Lc=typeof setTimeout=="function"?setTimeout:void 0,cS=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(r){return mh.resolve(null).then(r).catch(fS)}:Lc;function fS(r){setTimeout(function(){throw r})}function Mc(r,i){var s=i,c=0;do{var f=s.nextSibling;if(r.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(c===0){r.removeChild(f),Rr(i);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=f}while(s);Rr(i)}function Gn(r){for(;r!=null;r=r.nextSibling){var i=r.nodeType;if(i===1||i===3)break;if(i===8){if(i=r.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return r}function vh(r){r=r.previousSibling;for(var i=0;r;){if(r.nodeType===8){var s=r.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return r;i--}else s==="/$"&&i++}r=r.previousSibling}return null}var No=Math.random().toString(36).slice(2),Jr="__reactFiber$"+No,Qs="__reactProps$"+No,vn="__reactContainer$"+No,Bc="__reactEvents$"+No,pS="__reactListeners$"+No,hS="__reactHandles$"+No;function Li(r){var i=r[Jr];if(i)return i;for(var s=r.parentNode;s;){if(i=s[vn]||s[Jr]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(r=vh(r);r!==null;){if(s=r[Jr])return s;r=vh(r)}return i}r=s,s=r.parentNode}return null}function Zs(r){return r=r[Jr]||r[vn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Lo(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(n(33))}function xl(r){return r[Qs]||null}var jc=[],Mo=-1;function qn(r){return{current:r}}function Xe(r){0>Mo||(r.current=jc[Mo],jc[Mo]=null,Mo--)}function Ke(r,i){Mo++,jc[Mo]=r.current,r.current=i}var Kn={},kt=qn(Kn),zt=qn(!1),Mi=Kn;function Bo(r,i){var s=r.type.contextTypes;if(!s)return Kn;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in s)f[g]=i[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=i,r.__reactInternalMemoizedMaskedChildContext=f),f}function Ht(r){return r=r.childContextTypes,r!=null}function Cl(){Xe(zt),Xe(kt)}function yh(r,i,s){if(kt.current!==Kn)throw Error(n(168));Ke(kt,i),Ke(zt,s)}function wh(r,i,s){var c=r.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,_e(r)||"Unknown",f));return oe({},s,c)}function _l(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Kn,Mi=kt.current,Ke(kt,r),Ke(zt,zt.current),!0}function Sh(r,i,s){var c=r.stateNode;if(!c)throw Error(n(169));s?(r=wh(r,i,Mi),c.__reactInternalMemoizedMergedChildContext=r,Xe(zt),Xe(kt),Ke(kt,r)):Xe(zt),Ke(zt,s)}var yn=null,Tl=!1,Fc=!1;function bh(r){yn===null?yn=[r]:yn.push(r)}function gS(r){Tl=!0,bh(r)}function Yn(){if(!Fc&&yn!==null){Fc=!0;var r=0,i=Re;try{var s=yn;for(Re=1;r<s.length;r++){var c=s[r];do c=c(!0);while(c!==null)}yn=null,Tl=!1}catch(f){throw yn!==null&&(yn=yn.slice(r+1)),mo(Pi,Yn),f}finally{Re=i,Fc=!1}}return null}var jo=[],Fo=0,Pl=null,kl=0,hr=[],gr=0,Bi=null,wn=1,Sn="";function ji(r,i){jo[Fo++]=kl,jo[Fo++]=Pl,Pl=r,kl=i}function Eh(r,i,s){hr[gr++]=wn,hr[gr++]=Sn,hr[gr++]=Bi,Bi=r;var c=wn;r=Sn;var f=32-Ot(c)-1;c&=~(1<<f),s+=1;var g=32-Ot(i)+f;if(30<g){var E=f-f%5;g=(c&(1<<E)-1).toString(32),c>>=E,f-=E,wn=1<<32-Ot(i)+f|s<<f|c,Sn=g+r}else wn=1<<g|s<<f|c,Sn=r}function Uc(r){r.return!==null&&(ji(r,1),Eh(r,1,0))}function $c(r){for(;r===Pl;)Pl=jo[--Fo],jo[Fo]=null,kl=jo[--Fo],jo[Fo]=null;for(;r===Bi;)Bi=hr[--gr],hr[gr]=null,Sn=hr[--gr],hr[gr]=null,wn=hr[--gr],hr[gr]=null}var tr=null,rr=null,Qe=!1,Lr=null;function Ih(r,i){var s=wr(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=r,i=r.deletions,i===null?(r.deletions=[s],r.flags|=16):i.push(s)}function xh(r,i){switch(r.tag){case 5:var s=r.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(r.stateNode=i,tr=r,rr=Gn(i.firstChild),!0):!1;case 6:return i=r.pendingProps===""||i.nodeType!==3?null:i,i!==null?(r.stateNode=i,tr=r,rr=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Bi!==null?{id:wn,overflow:Sn}:null,r.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=wr(18,null,null,0),s.stateNode=i,s.return=r,r.child=s,tr=r,rr=null,!0):!1;default:return!1}}function zc(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Hc(r){if(Qe){var i=rr;if(i){var s=i;if(!xh(r,i)){if(zc(r))throw Error(n(418));i=Gn(s.nextSibling);var c=tr;i&&xh(r,i)?Ih(c,s):(r.flags=r.flags&-4097|2,Qe=!1,tr=r)}}else{if(zc(r))throw Error(n(418));r.flags=r.flags&-4097|2,Qe=!1,tr=r}}}function Ch(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;tr=r}function Dl(r){if(r!==tr)return!1;if(!Qe)return Ch(r),Qe=!0,!1;var i;if((i=r.tag!==3)&&!(i=r.tag!==5)&&(i=r.type,i=i!=="head"&&i!=="body"&&!Nc(r.type,r.memoizedProps)),i&&(i=rr)){if(zc(r))throw _h(),Error(n(418));for(;i;)Ih(r,i),i=Gn(i.nextSibling)}if(Ch(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,i=0;r;){if(r.nodeType===8){var s=r.data;if(s==="/$"){if(i===0){rr=Gn(r.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}r=r.nextSibling}rr=null}}else rr=tr?Gn(r.stateNode.nextSibling):null;return!0}function _h(){for(var r=rr;r;)r=Gn(r.nextSibling)}function Uo(){rr=tr=null,Qe=!1}function Wc(r){Lr===null?Lr=[r]:Lr.push(r)}var mS=K.ReactCurrentBatchConfig;function ea(r,i,s){if(r=s.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var c=s.stateNode}if(!c)throw Error(n(147,r));var f=c,g=""+r;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var D=f.refs;E===null?delete D[g]:D[g]=E},i._stringRef=g,i)}if(typeof r!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,r))}return r}function Al(r,i){throw r=Object.prototype.toString.call(i),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":r))}function Th(r){var i=r._init;return i(r._payload)}function Ph(r){function i($,L){if(r){var H=$.deletions;H===null?($.deletions=[L],$.flags|=16):H.push(L)}}function s($,L){if(!r)return null;for(;L!==null;)i($,L),L=L.sibling;return null}function c($,L){for($=new Map;L!==null;)L.key!==null?$.set(L.key,L):$.set(L.index,L),L=L.sibling;return $}function f($,L){return $=ni($,L),$.index=0,$.sibling=null,$}function g($,L,H){return $.index=H,r?(H=$.alternate,H!==null?(H=H.index,H<L?($.flags|=2,L):H):($.flags|=2,L)):($.flags|=1048576,L)}function E($){return r&&$.alternate===null&&($.flags|=2),$}function D($,L,H,ie){return L===null||L.tag!==6?(L=Ld(H,$.mode,ie),L.return=$,L):(L=f(L,H),L.return=$,L)}function O($,L,H,ie){var he=H.type;return he===k?Z($,L,H.props.children,ie,H.key):L!==null&&(L.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Fe&&Th(he)===L.type)?(ie=f(L,H.props),ie.ref=ea($,L,H),ie.return=$,ie):(ie=tu(H.type,H.key,H.props,null,$.mode,ie),ie.ref=ea($,L,H),ie.return=$,ie)}function q($,L,H,ie){return L===null||L.tag!==4||L.stateNode.containerInfo!==H.containerInfo||L.stateNode.implementation!==H.implementation?(L=Md(H,$.mode,ie),L.return=$,L):(L=f(L,H.children||[]),L.return=$,L)}function Z($,L,H,ie,he){return L===null||L.tag!==7?(L=Gi(H,$.mode,ie,he),L.return=$,L):(L=f(L,H),L.return=$,L)}function te($,L,H){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Ld(""+L,$.mode,H),L.return=$,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case V:return H=tu(L.type,L.key,L.props,null,$.mode,H),H.ref=ea($,null,L),H.return=$,H;case J:return L=Md(L,$.mode,H),L.return=$,L;case Fe:var ie=L._init;return te($,ie(L._payload),H)}if(Jt(L)||le(L))return L=Gi(L,$.mode,H,null),L.return=$,L;Al($,L)}return null}function Q($,L,H,ie){var he=L!==null?L.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return he!==null?null:D($,L,""+H,ie);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case V:return H.key===he?O($,L,H,ie):null;case J:return H.key===he?q($,L,H,ie):null;case Fe:return he=H._init,Q($,L,he(H._payload),ie)}if(Jt(H)||le(H))return he!==null?null:Z($,L,H,ie,null);Al($,H)}return null}function ue($,L,H,ie,he){if(typeof ie=="string"&&ie!==""||typeof ie=="number")return $=$.get(H)||null,D(L,$,""+ie,he);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case V:return $=$.get(ie.key===null?H:ie.key)||null,O(L,$,ie,he);case J:return $=$.get(ie.key===null?H:ie.key)||null,q(L,$,ie,he);case Fe:var ve=ie._init;return ue($,L,H,ve(ie._payload),he)}if(Jt(ie)||le(ie))return $=$.get(H)||null,Z(L,$,ie,he,null);Al(L,ie)}return null}function fe($,L,H,ie){for(var he=null,ve=null,ye=L,Ie=L=0,yt=null;ye!==null&&Ie<H.length;Ie++){ye.index>Ie?(yt=ye,ye=null):yt=ye.sibling;var Be=Q($,ye,H[Ie],ie);if(Be===null){ye===null&&(ye=yt);break}r&&ye&&Be.alternate===null&&i($,ye),L=g(Be,L,Ie),ve===null?he=Be:ve.sibling=Be,ve=Be,ye=yt}if(Ie===H.length)return s($,ye),Qe&&ji($,Ie),he;if(ye===null){for(;Ie<H.length;Ie++)ye=te($,H[Ie],ie),ye!==null&&(L=g(ye,L,Ie),ve===null?he=ye:ve.sibling=ye,ve=ye);return Qe&&ji($,Ie),he}for(ye=c($,ye);Ie<H.length;Ie++)yt=ue(ye,$,Ie,H[Ie],ie),yt!==null&&(r&&yt.alternate!==null&&ye.delete(yt.key===null?Ie:yt.key),L=g(yt,L,Ie),ve===null?he=yt:ve.sibling=yt,ve=yt);return r&&ye.forEach(function(ii){return i($,ii)}),Qe&&ji($,Ie),he}function pe($,L,H,ie){var he=le(H);if(typeof he!="function")throw Error(n(150));if(H=he.call(H),H==null)throw Error(n(151));for(var ve=he=null,ye=L,Ie=L=0,yt=null,Be=H.next();ye!==null&&!Be.done;Ie++,Be=H.next()){ye.index>Ie?(yt=ye,ye=null):yt=ye.sibling;var ii=Q($,ye,Be.value,ie);if(ii===null){ye===null&&(ye=yt);break}r&&ye&&ii.alternate===null&&i($,ye),L=g(ii,L,Ie),ve===null?he=ii:ve.sibling=ii,ve=ii,ye=yt}if(Be.done)return s($,ye),Qe&&ji($,Ie),he;if(ye===null){for(;!Be.done;Ie++,Be=H.next())Be=te($,Be.value,ie),Be!==null&&(L=g(Be,L,Ie),ve===null?he=Be:ve.sibling=Be,ve=Be);return Qe&&ji($,Ie),he}for(ye=c($,ye);!Be.done;Ie++,Be=H.next())Be=ue(ye,$,Ie,Be.value,ie),Be!==null&&(r&&Be.alternate!==null&&ye.delete(Be.key===null?Ie:Be.key),L=g(Be,L,Ie),ve===null?he=Be:ve.sibling=Be,ve=Be);return r&&ye.forEach(function(YS){return i($,YS)}),Qe&&ji($,Ie),he}function it($,L,H,ie){if(typeof H=="object"&&H!==null&&H.type===k&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case V:e:{for(var he=H.key,ve=L;ve!==null;){if(ve.key===he){if(he=H.type,he===k){if(ve.tag===7){s($,ve.sibling),L=f(ve,H.props.children),L.return=$,$=L;break e}}else if(ve.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Fe&&Th(he)===ve.type){s($,ve.sibling),L=f(ve,H.props),L.ref=ea($,ve,H),L.return=$,$=L;break e}s($,ve);break}else i($,ve);ve=ve.sibling}H.type===k?(L=Gi(H.props.children,$.mode,ie,H.key),L.return=$,$=L):(ie=tu(H.type,H.key,H.props,null,$.mode,ie),ie.ref=ea($,L,H),ie.return=$,$=ie)}return E($);case J:e:{for(ve=H.key;L!==null;){if(L.key===ve)if(L.tag===4&&L.stateNode.containerInfo===H.containerInfo&&L.stateNode.implementation===H.implementation){s($,L.sibling),L=f(L,H.children||[]),L.return=$,$=L;break e}else{s($,L);break}else i($,L);L=L.sibling}L=Md(H,$.mode,ie),L.return=$,$=L}return E($);case Fe:return ve=H._init,it($,L,ve(H._payload),ie)}if(Jt(H))return fe($,L,H,ie);if(le(H))return pe($,L,H,ie);Al($,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,L!==null&&L.tag===6?(s($,L.sibling),L=f(L,H),L.return=$,$=L):(s($,L),L=Ld(H,$.mode,ie),L.return=$,$=L),E($)):s($,L)}return it}var $o=Ph(!0),kh=Ph(!1),Rl=qn(null),Ol=null,zo=null,Vc=null;function Gc(){Vc=zo=Ol=null}function qc(r){var i=Rl.current;Xe(Rl),r._currentValue=i}function Kc(r,i,s){for(;r!==null;){var c=r.alternate;if((r.childLanes&i)!==i?(r.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),r===s)break;r=r.return}}function Ho(r,i){Ol=r,Vc=zo=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&i)!==0&&(Wt=!0),r.firstContext=null)}function mr(r){var i=r._currentValue;if(Vc!==r)if(r={context:r,memoizedValue:i,next:null},zo===null){if(Ol===null)throw Error(n(308));zo=r,Ol.dependencies={lanes:0,firstContext:r}}else zo=zo.next=r;return i}var Fi=null;function Yc(r){Fi===null?Fi=[r]:Fi.push(r)}function Dh(r,i,s,c){var f=i.interleaved;return f===null?(s.next=s,Yc(i)):(s.next=f.next,f.next=s),i.interleaved=s,bn(r,c)}function bn(r,i){r.lanes|=i;var s=r.alternate;for(s!==null&&(s.lanes|=i),s=r,r=r.return;r!==null;)r.childLanes|=i,s=r.alternate,s!==null&&(s.childLanes|=i),s=r,r=r.return;return s.tag===3?s.stateNode:null}var Xn=!1;function Xc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ah(r,i){r=r.updateQueue,i.updateQueue===r&&(i.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function En(r,i){return{eventTime:r,lane:i,tag:0,payload:null,callback:null,next:null}}function Jn(r,i,s){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,bn(r,s)}return f=c.interleaved,f===null?(i.next=i,Yc(c)):(i.next=f.next,f.next=i),c.interleaved=i,bn(r,s)}function Nl(r,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var c=i.lanes;c&=r.pendingLanes,s|=c,i.lanes=s,Fn(r,s)}}function Rh(r,i){var s=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var E={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};g===null?f=g=E:g=g.next=E,s=s.next}while(s!==null);g===null?f=g=i:g=g.next=i}else f=g=i;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=s;return}r=s.lastBaseUpdate,r===null?s.firstBaseUpdate=i:r.next=i,s.lastBaseUpdate=i}function Ll(r,i,s,c){var f=r.updateQueue;Xn=!1;var g=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var O=D,q=O.next;O.next=null,E===null?g=q:E.next=q,E=O;var Z=r.alternate;Z!==null&&(Z=Z.updateQueue,D=Z.lastBaseUpdate,D!==E&&(D===null?Z.firstBaseUpdate=q:D.next=q,Z.lastBaseUpdate=O))}if(g!==null){var te=f.baseState;E=0,Z=q=O=null,D=g;do{var Q=D.lane,ue=D.eventTime;if((c&Q)===Q){Z!==null&&(Z=Z.next={eventTime:ue,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var fe=r,pe=D;switch(Q=i,ue=s,pe.tag){case 1:if(fe=pe.payload,typeof fe=="function"){te=fe.call(ue,te,Q);break e}te=fe;break e;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=pe.payload,Q=typeof fe=="function"?fe.call(ue,te,Q):fe,Q==null)break e;te=oe({},te,Q);break e;case 2:Xn=!0}}D.callback!==null&&D.lane!==0&&(r.flags|=64,Q=f.effects,Q===null?f.effects=[D]:Q.push(D))}else ue={eventTime:ue,lane:Q,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Z===null?(q=Z=ue,O=te):Z=Z.next=ue,E|=Q;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;Q=D,D=Q.next,Q.next=null,f.lastBaseUpdate=Q,f.shared.pending=null}}while(!0);if(Z===null&&(O=te),f.baseState=O,f.firstBaseUpdate=q,f.lastBaseUpdate=Z,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);zi|=E,r.lanes=E,r.memoizedState=te}}function Oh(r,i,s){if(r=i.effects,i.effects=null,r!==null)for(i=0;i<r.length;i++){var c=r[i],f=c.callback;if(f!==null){if(c.callback=null,c=s,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var ta={},Qr=qn(ta),ra=qn(ta),na=qn(ta);function Ui(r){if(r===ta)throw Error(n(174));return r}function Jc(r,i){switch(Ke(na,i),Ke(ra,r),Ke(Qr,ta),r=i.nodeType,r){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:lt(null,"");break;default:r=r===8?i.parentNode:i,i=r.namespaceURI||null,r=r.tagName,i=lt(i,r)}Xe(Qr),Ke(Qr,i)}function Wo(){Xe(Qr),Xe(ra),Xe(na)}function Nh(r){Ui(na.current);var i=Ui(Qr.current),s=lt(i,r.type);i!==s&&(Ke(ra,r),Ke(Qr,s))}function Qc(r){ra.current===r&&(Xe(Qr),Xe(ra))}var et=qn(0);function Ml(r){for(var i=r;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zc=[];function ed(){for(var r=0;r<Zc.length;r++)Zc[r]._workInProgressVersionPrimary=null;Zc.length=0}var Bl=K.ReactCurrentDispatcher,td=K.ReactCurrentBatchConfig,$i=0,tt=null,ct=null,mt=null,jl=!1,ia=!1,oa=0,vS=0;function Dt(){throw Error(n(321))}function rd(r,i){if(i===null)return!1;for(var s=0;s<i.length&&s<r.length;s++)if(!Nr(r[s],i[s]))return!1;return!0}function nd(r,i,s,c,f,g){if($i=g,tt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Bl.current=r===null||r.memoizedState===null?bS:ES,r=s(c,f),ia){g=0;do{if(ia=!1,oa=0,25<=g)throw Error(n(301));g+=1,mt=ct=null,i.updateQueue=null,Bl.current=IS,r=s(c,f)}while(ia)}if(Bl.current=$l,i=ct!==null&&ct.next!==null,$i=0,mt=ct=tt=null,jl=!1,i)throw Error(n(300));return r}function id(){var r=oa!==0;return oa=0,r}function Zr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?tt.memoizedState=mt=r:mt=mt.next=r,mt}function vr(){if(ct===null){var r=tt.alternate;r=r!==null?r.memoizedState:null}else r=ct.next;var i=mt===null?tt.memoizedState:mt.next;if(i!==null)mt=i,ct=r;else{if(r===null)throw Error(n(310));ct=r,r={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},mt===null?tt.memoizedState=mt=r:mt=mt.next=r}return mt}function sa(r,i){return typeof i=="function"?i(r):i}function od(r){var i=vr(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=r;var c=ct,f=c.baseQueue,g=s.pending;if(g!==null){if(f!==null){var E=f.next;f.next=g.next,g.next=E}c.baseQueue=f=g,s.pending=null}if(f!==null){g=f.next,c=c.baseState;var D=E=null,O=null,q=g;do{var Z=q.lane;if(($i&Z)===Z)O!==null&&(O=O.next={lane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),c=q.hasEagerState?q.eagerState:r(c,q.action);else{var te={lane:Z,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null};O===null?(D=O=te,E=c):O=O.next=te,tt.lanes|=Z,zi|=Z}q=q.next}while(q!==null&&q!==g);O===null?E=c:O.next=D,Nr(c,i.memoizedState)||(Wt=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=O,s.lastRenderedState=c}if(r=s.interleaved,r!==null){f=r;do g=f.lane,tt.lanes|=g,zi|=g,f=f.next;while(f!==r)}else f===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function sd(r){var i=vr(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=r;var c=s.dispatch,f=s.pending,g=i.memoizedState;if(f!==null){s.pending=null;var E=f=f.next;do g=r(g,E.action),E=E.next;while(E!==f);Nr(g,i.memoizedState)||(Wt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),s.lastRenderedState=g}return[g,c]}function Lh(){}function Mh(r,i){var s=tt,c=vr(),f=i(),g=!Nr(c.memoizedState,f);if(g&&(c.memoizedState=f,Wt=!0),c=c.queue,ad(Fh.bind(null,s,c,r),[r]),c.getSnapshot!==i||g||mt!==null&&mt.memoizedState.tag&1){if(s.flags|=2048,aa(9,jh.bind(null,s,c,f,i),void 0,null),vt===null)throw Error(n(349));($i&30)!==0||Bh(s,i,f)}return f}function Bh(r,i,s){r.flags|=16384,r={getSnapshot:i,value:s},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.stores=[r]):(s=i.stores,s===null?i.stores=[r]:s.push(r))}function jh(r,i,s,c){i.value=s,i.getSnapshot=c,Uh(i)&&$h(r)}function Fh(r,i,s){return s(function(){Uh(i)&&$h(r)})}function Uh(r){var i=r.getSnapshot;r=r.value;try{var s=i();return!Nr(r,s)}catch{return!0}}function $h(r){var i=bn(r,1);i!==null&&Fr(i,r,1,-1)}function zh(r){var i=Zr();return typeof r=="function"&&(r=r()),i.memoizedState=i.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:r},i.queue=r,r=r.dispatch=SS.bind(null,tt,r),[i.memoizedState,r]}function aa(r,i,s,c){return r={tag:r,create:i,destroy:s,deps:c,next:null},i=tt.updateQueue,i===null?(i={lastEffect:null,stores:null},tt.updateQueue=i,i.lastEffect=r.next=r):(s=i.lastEffect,s===null?i.lastEffect=r.next=r:(c=s.next,s.next=r,r.next=c,i.lastEffect=r)),r}function Hh(){return vr().memoizedState}function Fl(r,i,s,c){var f=Zr();tt.flags|=r,f.memoizedState=aa(1|i,s,void 0,c===void 0?null:c)}function Ul(r,i,s,c){var f=vr();c=c===void 0?null:c;var g=void 0;if(ct!==null){var E=ct.memoizedState;if(g=E.destroy,c!==null&&rd(c,E.deps)){f.memoizedState=aa(i,s,g,c);return}}tt.flags|=r,f.memoizedState=aa(1|i,s,g,c)}function Wh(r,i){return Fl(8390656,8,r,i)}function ad(r,i){return Ul(2048,8,r,i)}function Vh(r,i){return Ul(4,2,r,i)}function Gh(r,i){return Ul(4,4,r,i)}function qh(r,i){if(typeof i=="function")return r=r(),i(r),function(){i(null)};if(i!=null)return r=r(),i.current=r,function(){i.current=null}}function Kh(r,i,s){return s=s!=null?s.concat([r]):null,Ul(4,4,qh.bind(null,i,r),s)}function ld(){}function Yh(r,i){var s=vr();i=i===void 0?null:i;var c=s.memoizedState;return c!==null&&i!==null&&rd(i,c[1])?c[0]:(s.memoizedState=[r,i],r)}function Xh(r,i){var s=vr();i=i===void 0?null:i;var c=s.memoizedState;return c!==null&&i!==null&&rd(i,c[1])?c[0]:(r=r(),s.memoizedState=[r,i],r)}function Jh(r,i,s){return($i&21)===0?(r.baseState&&(r.baseState=!1,Wt=!0),r.memoizedState=s):(Nr(s,i)||(s=Ai(),tt.lanes|=s,zi|=s,r.baseState=!0),i)}function yS(r,i){var s=Re;Re=s!==0&&4>s?s:4,r(!0);var c=td.transition;td.transition={};try{r(!1),i()}finally{Re=s,td.transition=c}}function Qh(){return vr().memoizedState}function wS(r,i,s){var c=ti(r);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},Zh(r))eg(i,s);else if(s=Dh(r,i,s,c),s!==null){var f=Lt();Fr(s,r,c,f),tg(s,i,c)}}function SS(r,i,s){var c=ti(r),f={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(Zh(r))eg(i,f);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,D=g(E,s);if(f.hasEagerState=!0,f.eagerState=D,Nr(D,E)){var O=i.interleaved;O===null?(f.next=f,Yc(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}s=Dh(r,i,f,c),s!==null&&(f=Lt(),Fr(s,r,c,f),tg(s,i,c))}}function Zh(r){var i=r.alternate;return r===tt||i!==null&&i===tt}function eg(r,i){ia=jl=!0;var s=r.pending;s===null?i.next=i:(i.next=s.next,s.next=i),r.pending=i}function tg(r,i,s){if((s&4194240)!==0){var c=i.lanes;c&=r.pendingLanes,s|=c,i.lanes=s,Fn(r,s)}}var $l={readContext:mr,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},bS={readContext:mr,useCallback:function(r,i){return Zr().memoizedState=[r,i===void 0?null:i],r},useContext:mr,useEffect:Wh,useImperativeHandle:function(r,i,s){return s=s!=null?s.concat([r]):null,Fl(4194308,4,qh.bind(null,i,r),s)},useLayoutEffect:function(r,i){return Fl(4194308,4,r,i)},useInsertionEffect:function(r,i){return Fl(4,2,r,i)},useMemo:function(r,i){var s=Zr();return i=i===void 0?null:i,r=r(),s.memoizedState=[r,i],r},useReducer:function(r,i,s){var c=Zr();return i=s!==void 0?s(i):i,c.memoizedState=c.baseState=i,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:i},c.queue=r,r=r.dispatch=wS.bind(null,tt,r),[c.memoizedState,r]},useRef:function(r){var i=Zr();return r={current:r},i.memoizedState=r},useState:zh,useDebugValue:ld,useDeferredValue:function(r){return Zr().memoizedState=r},useTransition:function(){var r=zh(!1),i=r[0];return r=yS.bind(null,r[1]),Zr().memoizedState=r,[i,r]},useMutableSource:function(){},useSyncExternalStore:function(r,i,s){var c=tt,f=Zr();if(Qe){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),vt===null)throw Error(n(349));($i&30)!==0||Bh(c,i,s)}f.memoizedState=s;var g={value:s,getSnapshot:i};return f.queue=g,Wh(Fh.bind(null,c,g,r),[r]),c.flags|=2048,aa(9,jh.bind(null,c,g,s,i),void 0,null),s},useId:function(){var r=Zr(),i=vt.identifierPrefix;if(Qe){var s=Sn,c=wn;s=(c&~(1<<32-Ot(c)-1)).toString(32)+s,i=":"+i+"R"+s,s=oa++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=vS++,i=":"+i+"r"+s.toString(32)+":";return r.memoizedState=i},unstable_isNewReconciler:!1},ES={readContext:mr,useCallback:Yh,useContext:mr,useEffect:ad,useImperativeHandle:Kh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:Xh,useReducer:od,useRef:Hh,useState:function(){return od(sa)},useDebugValue:ld,useDeferredValue:function(r){var i=vr();return Jh(i,ct.memoizedState,r)},useTransition:function(){var r=od(sa)[0],i=vr().memoizedState;return[r,i]},useMutableSource:Lh,useSyncExternalStore:Mh,useId:Qh,unstable_isNewReconciler:!1},IS={readContext:mr,useCallback:Yh,useContext:mr,useEffect:ad,useImperativeHandle:Kh,useInsertionEffect:Vh,useLayoutEffect:Gh,useMemo:Xh,useReducer:sd,useRef:Hh,useState:function(){return sd(sa)},useDebugValue:ld,useDeferredValue:function(r){var i=vr();return ct===null?i.memoizedState=r:Jh(i,ct.memoizedState,r)},useTransition:function(){var r=sd(sa)[0],i=vr().memoizedState;return[r,i]},useMutableSource:Lh,useSyncExternalStore:Mh,useId:Qh,unstable_isNewReconciler:!1};function Mr(r,i){if(r&&r.defaultProps){i=oe({},i),r=r.defaultProps;for(var s in r)i[s]===void 0&&(i[s]=r[s]);return i}return i}function ud(r,i,s,c){i=r.memoizedState,s=s(c,i),s=s==null?i:oe({},i,s),r.memoizedState=s,r.lanes===0&&(r.updateQueue.baseState=s)}var zl={isMounted:function(r){return(r=r._reactInternals)?Tr(r)===r:!1},enqueueSetState:function(r,i,s){r=r._reactInternals;var c=Lt(),f=ti(r),g=En(c,f);g.payload=i,s!=null&&(g.callback=s),i=Jn(r,g,f),i!==null&&(Fr(i,r,f,c),Nl(i,r,f))},enqueueReplaceState:function(r,i,s){r=r._reactInternals;var c=Lt(),f=ti(r),g=En(c,f);g.tag=1,g.payload=i,s!=null&&(g.callback=s),i=Jn(r,g,f),i!==null&&(Fr(i,r,f,c),Nl(i,r,f))},enqueueForceUpdate:function(r,i){r=r._reactInternals;var s=Lt(),c=ti(r),f=En(s,c);f.tag=2,i!=null&&(f.callback=i),i=Jn(r,f,c),i!==null&&(Fr(i,r,c,s),Nl(i,r,c))}};function rg(r,i,s,c,f,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!qs(s,c)||!qs(f,g):!0}function ng(r,i,s){var c=!1,f=Kn,g=i.contextType;return typeof g=="object"&&g!==null?g=mr(g):(f=Ht(i)?Mi:kt.current,c=i.contextTypes,g=(c=c!=null)?Bo(r,f):Kn),i=new i(s,g),r.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zl,r.stateNode=i,i._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=f,r.__reactInternalMemoizedMaskedChildContext=g),i}function ig(r,i,s,c){r=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,c),i.state!==r&&zl.enqueueReplaceState(i,i.state,null)}function cd(r,i,s,c){var f=r.stateNode;f.props=s,f.state=r.memoizedState,f.refs={},Xc(r);var g=i.contextType;typeof g=="object"&&g!==null?f.context=mr(g):(g=Ht(i)?Mi:kt.current,f.context=Bo(r,g)),f.state=r.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(ud(r,i,g,s),f.state=r.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&zl.enqueueReplaceState(f,f.state,null),Ll(r,s,f,c),f.state=r.memoizedState),typeof f.componentDidMount=="function"&&(r.flags|=4194308)}function Vo(r,i){try{var s="",c=i;do s+=me(c),c=c.return;while(c);var f=s}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:i,stack:f,digest:null}}function dd(r,i,s){return{value:r,source:null,stack:s??null,digest:i??null}}function fd(r,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function og(r,i,s){s=En(-1,s),s.tag=3,s.payload={element:null};var c=i.value;return s.callback=function(){Yl||(Yl=!0,Td=c),fd(r,i)},s}function sg(r,i,s){s=En(-1,s),s.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;s.payload=function(){return c(f)},s.callback=function(){fd(r,i)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(s.callback=function(){fd(r,i),typeof c!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),s}function ag(r,i,s){var c=r.pingCache;if(c===null){c=r.pingCache=new xS;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(s)||(f.add(s),r=jS.bind(null,r,i,s),i.then(r,r))}function lg(r){do{var i;if((i=r.tag===13)&&(i=r.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return r;r=r.return}while(r!==null);return null}function ug(r,i,s,c,f){return(r.mode&1)===0?(r===i?r.flags|=65536:(r.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=En(-1,1),i.tag=2,Jn(s,i,1))),s.lanes|=1),r):(r.flags|=65536,r.lanes=f,r)}var CS=K.ReactCurrentOwner,Wt=!1;function Nt(r,i,s,c){i.child=r===null?kh(i,null,s,c):$o(i,r.child,s,c)}function cg(r,i,s,c,f){s=s.render;var g=i.ref;return Ho(i,f),c=nd(r,i,s,c,g,f),s=id(),r!==null&&!Wt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~f,In(r,i,f)):(Qe&&s&&Uc(i),i.flags|=1,Nt(r,i,c,f),i.child)}function dg(r,i,s,c,f){if(r===null){var g=s.type;return typeof g=="function"&&!Nd(g)&&g.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=g,fg(r,i,g,c,f)):(r=tu(s.type,null,c,i,i.mode,f),r.ref=i.ref,r.return=i,i.child=r)}if(g=r.child,(r.lanes&f)===0){var E=g.memoizedProps;if(s=s.compare,s=s!==null?s:qs,s(E,c)&&r.ref===i.ref)return In(r,i,f)}return i.flags|=1,r=ni(g,c),r.ref=i.ref,r.return=i,i.child=r}function fg(r,i,s,c,f){if(r!==null){var g=r.memoizedProps;if(qs(g,c)&&r.ref===i.ref)if(Wt=!1,i.pendingProps=c=g,(r.lanes&f)!==0)(r.flags&131072)!==0&&(Wt=!0);else return i.lanes=r.lanes,In(r,i,f)}return pd(r,i,s,c,f)}function pg(r,i,s){var c=i.pendingProps,f=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(qo,nr),nr|=s;else{if((s&1073741824)===0)return r=g!==null?g.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:r,cachePool:null,transitions:null},i.updateQueue=null,Ke(qo,nr),nr|=r,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:s,Ke(qo,nr),nr|=c}else g!==null?(c=g.baseLanes|s,i.memoizedState=null):c=s,Ke(qo,nr),nr|=c;return Nt(r,i,f,s),i.child}function hg(r,i){var s=i.ref;(r===null&&s!==null||r!==null&&r.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function pd(r,i,s,c,f){var g=Ht(s)?Mi:kt.current;return g=Bo(i,g),Ho(i,f),s=nd(r,i,s,c,g,f),c=id(),r!==null&&!Wt?(i.updateQueue=r.updateQueue,i.flags&=-2053,r.lanes&=~f,In(r,i,f)):(Qe&&c&&Uc(i),i.flags|=1,Nt(r,i,s,f),i.child)}function gg(r,i,s,c,f){if(Ht(s)){var g=!0;_l(i)}else g=!1;if(Ho(i,f),i.stateNode===null)Wl(r,i),ng(i,s,c),cd(i,s,c,f),c=!0;else if(r===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var O=E.context,q=s.contextType;typeof q=="object"&&q!==null?q=mr(q):(q=Ht(s)?Mi:kt.current,q=Bo(i,q));var Z=s.getDerivedStateFromProps,te=typeof Z=="function"||typeof E.getSnapshotBeforeUpdate=="function";te||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==c||O!==q)&&ig(i,E,c,q),Xn=!1;var Q=i.memoizedState;E.state=Q,Ll(i,c,E,f),O=i.memoizedState,D!==c||Q!==O||zt.current||Xn?(typeof Z=="function"&&(ud(i,s,Z,c),O=i.memoizedState),(D=Xn||rg(i,s,D,c,Q,O,q))?(te||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=O),E.props=c,E.state=O,E.context=q,c=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Ah(r,i),D=i.memoizedProps,q=i.type===i.elementType?D:Mr(i.type,D),E.props=q,te=i.pendingProps,Q=E.context,O=s.contextType,typeof O=="object"&&O!==null?O=mr(O):(O=Ht(s)?Mi:kt.current,O=Bo(i,O));var ue=s.getDerivedStateFromProps;(Z=typeof ue=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==te||Q!==O)&&ig(i,E,c,O),Xn=!1,Q=i.memoizedState,E.state=Q,Ll(i,c,E,f);var fe=i.memoizedState;D!==te||Q!==fe||zt.current||Xn?(typeof ue=="function"&&(ud(i,s,ue,c),fe=i.memoizedState),(q=Xn||rg(i,s,q,c,Q,fe,O)||!1)?(Z||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,fe,O),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,fe,O)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===r.memoizedProps&&Q===r.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===r.memoizedProps&&Q===r.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=fe),E.props=c,E.state=fe,E.context=O,c=q):(typeof E.componentDidUpdate!="function"||D===r.memoizedProps&&Q===r.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===r.memoizedProps&&Q===r.memoizedState||(i.flags|=1024),c=!1)}return hd(r,i,s,c,g,f)}function hd(r,i,s,c,f,g){hg(r,i);var E=(i.flags&128)!==0;if(!c&&!E)return f&&Sh(i,s,!1),In(r,i,g);c=i.stateNode,CS.current=i;var D=E&&typeof s.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,r!==null&&E?(i.child=$o(i,r.child,null,g),i.child=$o(i,null,D,g)):Nt(r,i,D,g),i.memoizedState=c.state,f&&Sh(i,s,!0),i.child}function mg(r){var i=r.stateNode;i.pendingContext?yh(r,i.pendingContext,i.pendingContext!==i.context):i.context&&yh(r,i.context,!1),Jc(r,i.containerInfo)}function vg(r,i,s,c,f){return Uo(),Wc(f),i.flags|=256,Nt(r,i,s,c),i.child}var gd={dehydrated:null,treeContext:null,retryLane:0};function md(r){return{baseLanes:r,cachePool:null,transitions:null}}function yg(r,i,s){var c=i.pendingProps,f=et.current,g=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=r!==null&&r.memoizedState===null?!1:(f&2)!==0),D?(g=!0,i.flags&=-129):(r===null||r.memoizedState!==null)&&(f|=1),Ke(et,f&1),r===null)return Hc(i),r=i.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((i.mode&1)===0?i.lanes=1:r.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,r=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=ru(E,c,0,null),r=Gi(r,c,s,null),g.return=i,r.return=i,g.sibling=r,i.child=g,i.child.memoizedState=md(s),i.memoizedState=gd,r):vd(i,E));if(f=r.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return _S(r,i,E,c,D,f,s);if(g){g=c.fallback,E=i.mode,f=r.child,D=f.sibling;var O={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=O,i.deletions=null):(c=ni(f,O),c.subtreeFlags=f.subtreeFlags&14680064),D!==null?g=ni(D,g):(g=Gi(g,E,s,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=r.child.memoizedState,E=E===null?md(s):{baseLanes:E.baseLanes|s,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=r.childLanes&~s,i.memoizedState=gd,c}return g=r.child,r=g.sibling,c=ni(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=s),c.return=i,c.sibling=null,r!==null&&(s=i.deletions,s===null?(i.deletions=[r],i.flags|=16):s.push(r)),i.child=c,i.memoizedState=null,c}function vd(r,i){return i=ru({mode:"visible",children:i},r.mode,0,null),i.return=r,r.child=i}function Hl(r,i,s,c){return c!==null&&Wc(c),$o(i,r.child,null,s),r=vd(i,i.pendingProps.children),r.flags|=2,i.memoizedState=null,r}function _S(r,i,s,c,f,g,E){if(s)return i.flags&256?(i.flags&=-257,c=dd(Error(n(422))),Hl(r,i,E,c)):i.memoizedState!==null?(i.child=r.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=ru({mode:"visible",children:c.children},f,0,null),g=Gi(g,f,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&$o(i,r.child,null,E),i.child.memoizedState=md(E),i.memoizedState=gd,g);if((i.mode&1)===0)return Hl(r,i,E,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var D=c.dgst;return c=D,g=Error(n(419)),c=dd(g,c,void 0),Hl(r,i,E,c)}if(D=(E&r.childLanes)!==0,Wt||D){if(c=vt,c!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|E))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,bn(r,f),Fr(c,r,f,-1))}return Od(),c=dd(Error(n(421))),Hl(r,i,E,c)}return f.data==="$?"?(i.flags|=128,i.child=r.child,i=FS.bind(null,r),f._reactRetry=i,null):(r=g.treeContext,rr=Gn(f.nextSibling),tr=i,Qe=!0,Lr=null,r!==null&&(hr[gr++]=wn,hr[gr++]=Sn,hr[gr++]=Bi,wn=r.id,Sn=r.overflow,Bi=i),i=vd(i,c.children),i.flags|=4096,i)}function wg(r,i,s){r.lanes|=i;var c=r.alternate;c!==null&&(c.lanes|=i),Kc(r.return,i,s)}function yd(r,i,s,c,f){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=s,g.tailMode=f)}function Sg(r,i,s){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Nt(r,i,c.children,s),c=et.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=i.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&wg(r,s,i);else if(r.tag===19)wg(r,s,i);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Ke(et,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(s=i.child,f=null;s!==null;)r=s.alternate,r!==null&&Ml(r)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),yd(i,!1,f,s,g);break;case"backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(r=f.alternate,r!==null&&Ml(r)===null){i.child=f;break}r=f.sibling,f.sibling=s,s=f,f=r}yd(i,!0,s,null,g);break;case"together":yd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wl(r,i){(i.mode&1)===0&&r!==null&&(r.alternate=null,i.alternate=null,i.flags|=2)}function In(r,i,s){if(r!==null&&(i.dependencies=r.dependencies),zi|=i.lanes,(s&i.childLanes)===0)return null;if(r!==null&&i.child!==r.child)throw Error(n(153));if(i.child!==null){for(r=i.child,s=ni(r,r.pendingProps),i.child=s,s.return=i;r.sibling!==null;)r=r.sibling,s=s.sibling=ni(r,r.pendingProps),s.return=i;s.sibling=null}return i.child}function TS(r,i,s){switch(i.tag){case 3:mg(i),Uo();break;case 5:Nh(i);break;case 1:Ht(i.type)&&_l(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ke(Rl,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ke(et,et.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?yg(r,i,s):(Ke(et,et.current&1),r=In(r,i,s),r!==null?r.sibling:null);Ke(et,et.current&1);break;case 19:if(c=(s&i.childLanes)!==0,(r.flags&128)!==0){if(c)return Sg(r,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ke(et,et.current),c)break;return null;case 22:case 23:return i.lanes=0,pg(r,i,s)}return In(r,i,s)}var bg,wd,Eg,Ig;bg=function(r,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},wd=function(){},Eg=function(r,i,s,c){var f=r.memoizedProps;if(f!==c){r=i.stateNode,Ui(Qr.current);var g=null;switch(s){case"input":f=ur(r,f),c=ur(r,c),g=[];break;case"select":f=oe({},f,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":f=Ss(r,f),c=Ss(r,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=Il)}_s(s,c);var E;s=null;for(q in f)if(!c.hasOwnProperty(q)&&f.hasOwnProperty(q)&&f[q]!=null)if(q==="style"){var D=f[q];for(E in D)D.hasOwnProperty(E)&&(s||(s={}),s[E]="")}else q!=="dangerouslySetInnerHTML"&&q!=="children"&&q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&q!=="autoFocus"&&(a.hasOwnProperty(q)?g||(g=[]):(g=g||[]).push(q,null));for(q in c){var O=c[q];if(D=f!=null?f[q]:void 0,c.hasOwnProperty(q)&&O!==D&&(O!=null||D!=null))if(q==="style")if(D){for(E in D)!D.hasOwnProperty(E)||O&&O.hasOwnProperty(E)||(s||(s={}),s[E]="");for(E in O)O.hasOwnProperty(E)&&D[E]!==O[E]&&(s||(s={}),s[E]=O[E])}else s||(g||(g=[]),g.push(q,s)),s=O;else q==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,D=D?D.__html:void 0,O!=null&&D!==O&&(g=g||[]).push(q,O)):q==="children"?typeof O!="string"&&typeof O!="number"||(g=g||[]).push(q,""+O):q!=="suppressContentEditableWarning"&&q!=="suppressHydrationWarning"&&(a.hasOwnProperty(q)?(O!=null&&q==="onScroll"&&Ye("scroll",r),g||D===O||(g=[])):(g=g||[]).push(q,O))}s&&(g=g||[]).push("style",s);var q=g;(i.updateQueue=q)&&(i.flags|=4)}},Ig=function(r,i,s,c){s!==c&&(i.flags|=4)};function la(r,i){if(!Qe)switch(r.tailMode){case"hidden":i=r.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?r.tail=null:s.sibling=null;break;case"collapsed":s=r.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?i||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function At(r){var i=r.alternate!==null&&r.alternate.child===r.child,s=0,c=0;if(i)for(var f=r.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=r,f=f.sibling;else for(f=r.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=r,f=f.sibling;return r.subtreeFlags|=c,r.childLanes=s,i}function PS(r,i,s){var c=i.pendingProps;switch($c(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return At(i),null;case 1:return Ht(i.type)&&Cl(),At(i),null;case 3:return c=i.stateNode,Wo(),Xe(zt),Xe(kt),ed(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(Dl(i)?i.flags|=4:r===null||r.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Lr!==null&&(Dd(Lr),Lr=null))),wd(r,i),At(i),null;case 5:Qc(i);var f=Ui(na.current);if(s=i.type,r!==null&&i.stateNode!=null)Eg(r,i,s,c,f),r.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return At(i),null}if(r=Ui(Qr.current),Dl(i)){c=i.stateNode,s=i.type;var g=i.memoizedProps;switch(c[Jr]=i,c[Qs]=g,r=(i.mode&1)!==0,s){case"dialog":Ye("cancel",c),Ye("close",c);break;case"iframe":case"object":case"embed":Ye("load",c);break;case"video":case"audio":for(f=0;f<Ys.length;f++)Ye(Ys[f],c);break;case"source":Ye("error",c);break;case"img":case"image":case"link":Ye("error",c),Ye("load",c);break;case"details":Ye("toggle",c);break;case"input":on(c,g),Ye("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ye("invalid",c);break;case"textarea":ao(c,g),Ye("invalid",c)}_s(s,g),f=null;for(var E in g)if(g.hasOwnProperty(E)){var D=g[E];E==="children"?typeof D=="string"?c.textContent!==D&&(g.suppressHydrationWarning!==!0&&El(c.textContent,D,r),f=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(g.suppressHydrationWarning!==!0&&El(c.textContent,D,r),f=["children",""+D]):a.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ye("scroll",c)}switch(s){case"input":ft(c),so(c,g,!0);break;case"textarea":ft(c),bs(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Il)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=at(s)),r==="http://www.w3.org/1999/xhtml"?s==="script"?(r=E.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=E.createElement(s,{is:c.is}):(r=E.createElement(s),s==="select"&&(E=r,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):r=E.createElementNS(r,s),r[Jr]=i,r[Qs]=c,bg(r,i,!1,!1),i.stateNode=r;e:{switch(E=Ts(s,c),s){case"dialog":Ye("cancel",r),Ye("close",r),f=c;break;case"iframe":case"object":case"embed":Ye("load",r),f=c;break;case"video":case"audio":for(f=0;f<Ys.length;f++)Ye(Ys[f],r);f=c;break;case"source":Ye("error",r),f=c;break;case"img":case"image":case"link":Ye("error",r),Ye("load",r),f=c;break;case"details":Ye("toggle",r),f=c;break;case"input":on(r,c),f=ur(r,c),Ye("invalid",r);break;case"option":f=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},f=oe({},c,{value:void 0}),Ye("invalid",r);break;case"textarea":ao(r,c),f=Ss(r,c),Ye("invalid",r);break;default:f=c}_s(s,f),D=f;for(g in D)if(D.hasOwnProperty(g)){var O=D[g];g==="style"?xs(r,O):g==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Es(r,O)):g==="children"?typeof O=="string"?(s!=="textarea"||O!=="")&&Nn(r,O):typeof O=="number"&&Nn(r,""+O):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(a.hasOwnProperty(g)?O!=null&&g==="onScroll"&&Ye("scroll",r):O!=null&&G(r,g,O,E))}switch(s){case"input":ft(r),so(r,c,!1);break;case"textarea":ft(r),bs(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ce(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?ln(r,!!c.multiple,g,!1):c.defaultValue!=null&&ln(r,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(r.onclick=Il)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return At(i),null;case 6:if(r&&i.stateNode!=null)Ig(r,i,r.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(s=Ui(na.current),Ui(Qr.current),Dl(i)){if(c=i.stateNode,s=i.memoizedProps,c[Jr]=i,(g=c.nodeValue!==s)&&(r=tr,r!==null))switch(r.tag){case 3:El(c.nodeValue,s,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&El(c.nodeValue,s,(r.mode&1)!==0)}g&&(i.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[Jr]=i,i.stateNode=c}return At(i),null;case 13:if(Xe(et),c=i.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Qe&&rr!==null&&(i.mode&1)!==0&&(i.flags&128)===0)_h(),Uo(),i.flags|=98560,g=!1;else if(g=Dl(i),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[Jr]=i}else Uo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;At(i),g=!1}else Lr!==null&&(Dd(Lr),Lr=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(r===null||(et.current&1)!==0?dt===0&&(dt=3):Od())),i.updateQueue!==null&&(i.flags|=4),At(i),null);case 4:return Wo(),wd(r,i),r===null&&Xs(i.stateNode.containerInfo),At(i),null;case 10:return qc(i.type._context),At(i),null;case 17:return Ht(i.type)&&Cl(),At(i),null;case 19:if(Xe(et),g=i.memoizedState,g===null)return At(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)la(g,!1);else{if(dt!==0||r!==null&&(r.flags&128)!==0)for(r=i.child;r!==null;){if(E=Ml(r),E!==null){for(i.flags|=128,la(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=s,s=i.child;s!==null;)g=s,r=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,r=E.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),s=s.sibling;return Ke(et,et.current&1|2),i.child}r=r.sibling}g.tail!==null&&qe()>Ko&&(i.flags|=128,c=!0,la(g,!1),i.lanes=4194304)}else{if(!c)if(r=Ml(E),r!==null){if(i.flags|=128,c=!0,s=r.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),la(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Qe)return At(i),null}else 2*qe()-g.renderingStartTime>Ko&&s!==1073741824&&(i.flags|=128,c=!0,la(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(s=g.last,s!==null?s.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qe(),i.sibling=null,s=et.current,Ke(et,c?s&1|2:s&1),i):(At(i),null);case 22:case 23:return Rd(),c=i.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(nr&1073741824)!==0&&(At(i),i.subtreeFlags&6&&(i.flags|=8192)):At(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function kS(r,i){switch($c(i),i.tag){case 1:return Ht(i.type)&&Cl(),r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 3:return Wo(),Xe(zt),Xe(kt),ed(),r=i.flags,(r&65536)!==0&&(r&128)===0?(i.flags=r&-65537|128,i):null;case 5:return Qc(i),null;case 13:if(Xe(et),r=i.memoizedState,r!==null&&r.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Uo()}return r=i.flags,r&65536?(i.flags=r&-65537|128,i):null;case 19:return Xe(et),null;case 4:return Wo(),null;case 10:return qc(i.type._context),null;case 22:case 23:return Rd(),null;case 24:return null;default:return null}}var Vl=!1,Rt=!1,DS=typeof WeakSet=="function"?WeakSet:Set,ce=null;function Go(r,i){var s=r.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){rt(r,i,c)}else s.current=null}function Sd(r,i,s){try{s()}catch(c){rt(r,i,c)}}var xg=!1;function AS(r,i){if(Rc=zn,r=rh(),xc(r)){if("selectionStart"in r)var s={start:r.selectionStart,end:r.selectionEnd};else e:{s=(s=r.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var E=0,D=-1,O=-1,q=0,Z=0,te=r,Q=null;t:for(;;){for(var ue;te!==s||f!==0&&te.nodeType!==3||(D=E+f),te!==g||c!==0&&te.nodeType!==3||(O=E+c),te.nodeType===3&&(E+=te.nodeValue.length),(ue=te.firstChild)!==null;)Q=te,te=ue;for(;;){if(te===r)break t;if(Q===s&&++q===f&&(D=E),Q===g&&++Z===c&&(O=E),(ue=te.nextSibling)!==null)break;te=Q,Q=te.parentNode}te=ue}s=D===-1||O===-1?null:{start:D,end:O}}else s=null}s=s||{start:0,end:0}}else s=null;for(Oc={focusedElem:r,selectionRange:s},zn=!1,ce=i;ce!==null;)if(i=ce,r=i.child,(i.subtreeFlags&1028)!==0&&r!==null)r.return=i,ce=r;else for(;ce!==null;){i=ce;try{var fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(fe!==null){var pe=fe.memoizedProps,it=fe.memoizedState,$=i.stateNode,L=$.getSnapshotBeforeUpdate(i.elementType===i.type?pe:Mr(i.type,pe),it);$.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var H=i.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ie){rt(i,i.return,ie)}if(r=i.sibling,r!==null){r.return=i.return,ce=r;break}ce=i.return}return fe=xg,xg=!1,fe}function ua(r,i,s){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&r)===r){var g=f.destroy;f.destroy=void 0,g!==void 0&&Sd(i,s,g)}f=f.next}while(f!==c)}}function Gl(r,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&r)===r){var c=s.create;s.destroy=c()}s=s.next}while(s!==i)}}function bd(r){var i=r.ref;if(i!==null){var s=r.stateNode;switch(r.tag){case 5:r=s;break;default:r=s}typeof i=="function"?i(r):i.current=r}}function Cg(r){var i=r.alternate;i!==null&&(r.alternate=null,Cg(i)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(i=r.stateNode,i!==null&&(delete i[Jr],delete i[Qs],delete i[Bc],delete i[pS],delete i[hS])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function _g(r){return r.tag===5||r.tag===3||r.tag===4}function Tg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||_g(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ed(r,i,s){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(r,i):s.insertBefore(r,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(r,s)):(i=s,i.appendChild(r)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Il));else if(c!==4&&(r=r.child,r!==null))for(Ed(r,i,s),r=r.sibling;r!==null;)Ed(r,i,s),r=r.sibling}function Id(r,i,s){var c=r.tag;if(c===5||c===6)r=r.stateNode,i?s.insertBefore(r,i):s.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(Id(r,i,s),r=r.sibling;r!==null;)Id(r,i,s),r=r.sibling}var _t=null,Br=!1;function Qn(r,i,s){for(s=s.child;s!==null;)Pg(r,i,s),s=s.sibling}function Pg(r,i,s){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(ki,s)}catch{}switch(s.tag){case 5:Rt||Go(s,i);case 6:var c=_t,f=Br;_t=null,Qn(r,i,s),_t=c,Br=f,_t!==null&&(Br?(r=_t,s=s.stateNode,r.nodeType===8?r.parentNode.removeChild(s):r.removeChild(s)):_t.removeChild(s.stateNode));break;case 18:_t!==null&&(Br?(r=_t,s=s.stateNode,r.nodeType===8?Mc(r.parentNode,s):r.nodeType===1&&Mc(r,s),Rr(r)):Mc(_t,s.stateNode));break;case 4:c=_t,f=Br,_t=s.stateNode.containerInfo,Br=!0,Qn(r,i,s),_t=c,Br=f;break;case 0:case 11:case 14:case 15:if(!Rt&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Sd(s,i,E),f=f.next}while(f!==c)}Qn(r,i,s);break;case 1:if(!Rt&&(Go(s,i),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(D){rt(s,i,D)}Qn(r,i,s);break;case 21:Qn(r,i,s);break;case 22:s.mode&1?(Rt=(c=Rt)||s.memoizedState!==null,Qn(r,i,s),Rt=c):Qn(r,i,s);break;default:Qn(r,i,s)}}function kg(r){var i=r.updateQueue;if(i!==null){r.updateQueue=null;var s=r.stateNode;s===null&&(s=r.stateNode=new DS),i.forEach(function(c){var f=US.bind(null,r,c);s.has(c)||(s.add(c),c.then(f,f))})}}function jr(r,i){var s=i.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c];try{var g=r,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:_t=D.stateNode,Br=!1;break e;case 3:_t=D.stateNode.containerInfo,Br=!0;break e;case 4:_t=D.stateNode.containerInfo,Br=!0;break e}D=D.return}if(_t===null)throw Error(n(160));Pg(g,E,f),_t=null,Br=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(q){rt(f,i,q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dg(i,r),i=i.sibling}function Dg(r,i){var s=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(jr(i,r),en(r),c&4){try{ua(3,r,r.return),Gl(3,r)}catch(pe){rt(r,r.return,pe)}try{ua(5,r,r.return)}catch(pe){rt(r,r.return,pe)}}break;case 1:jr(i,r),en(r),c&512&&s!==null&&Go(s,s.return);break;case 5:if(jr(i,r),en(r),c&512&&s!==null&&Go(s,s.return),r.flags&32){var f=r.stateNode;try{Nn(f,"")}catch(pe){rt(r,r.return,pe)}}if(c&4&&(f=r.stateNode,f!=null)){var g=r.memoizedProps,E=s!==null?s.memoizedProps:g,D=r.type,O=r.updateQueue;if(r.updateQueue=null,O!==null)try{D==="input"&&g.type==="radio"&&g.name!=null&&sn(f,g),Ts(D,E);var q=Ts(D,g);for(E=0;E<O.length;E+=2){var Z=O[E],te=O[E+1];Z==="style"?xs(f,te):Z==="dangerouslySetInnerHTML"?Es(f,te):Z==="children"?Nn(f,te):G(f,Z,te,q)}switch(D){case"input":an(f,g);break;case"textarea":lo(f,g);break;case"select":var Q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ue=g.value;ue!=null?ln(f,!!g.multiple,ue,!1):Q!==!!g.multiple&&(g.defaultValue!=null?ln(f,!!g.multiple,g.defaultValue,!0):ln(f,!!g.multiple,g.multiple?[]:"",!1))}f[Qs]=g}catch(pe){rt(r,r.return,pe)}}break;case 6:if(jr(i,r),en(r),c&4){if(r.stateNode===null)throw Error(n(162));f=r.stateNode,g=r.memoizedProps;try{f.nodeValue=g}catch(pe){rt(r,r.return,pe)}}break;case 3:if(jr(i,r),en(r),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Rr(i.containerInfo)}catch(pe){rt(r,r.return,pe)}break;case 4:jr(i,r),en(r);break;case 13:jr(i,r),en(r),f=r.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(_d=qe())),c&4&&kg(r);break;case 22:if(Z=s!==null&&s.memoizedState!==null,r.mode&1?(Rt=(q=Rt)||Z,jr(i,r),Rt=q):jr(i,r),en(r),c&8192){if(q=r.memoizedState!==null,(r.stateNode.isHidden=q)&&!Z&&(r.mode&1)!==0)for(ce=r,Z=r.child;Z!==null;){for(te=ce=Z;ce!==null;){switch(Q=ce,ue=Q.child,Q.tag){case 0:case 11:case 14:case 15:ua(4,Q,Q.return);break;case 1:Go(Q,Q.return);var fe=Q.stateNode;if(typeof fe.componentWillUnmount=="function"){c=Q,s=Q.return;try{i=c,fe.props=i.memoizedProps,fe.state=i.memoizedState,fe.componentWillUnmount()}catch(pe){rt(c,s,pe)}}break;case 5:Go(Q,Q.return);break;case 22:if(Q.memoizedState!==null){Og(te);continue}}ue!==null?(ue.return=Q,ce=ue):Og(te)}Z=Z.sibling}e:for(Z=null,te=r;;){if(te.tag===5){if(Z===null){Z=te;try{f=te.stateNode,q?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(D=te.stateNode,O=te.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null,D.style.display=Is("display",E))}catch(pe){rt(r,r.return,pe)}}}else if(te.tag===6){if(Z===null)try{te.stateNode.nodeValue=q?"":te.memoizedProps}catch(pe){rt(r,r.return,pe)}}else if((te.tag!==22&&te.tag!==23||te.memoizedState===null||te===r)&&te.child!==null){te.child.return=te,te=te.child;continue}if(te===r)break e;for(;te.sibling===null;){if(te.return===null||te.return===r)break e;Z===te&&(Z=null),te=te.return}Z===te&&(Z=null),te.sibling.return=te.return,te=te.sibling}}break;case 19:jr(i,r),en(r),c&4&&kg(r);break;case 21:break;default:jr(i,r),en(r)}}function en(r){var i=r.flags;if(i&2){try{e:{for(var s=r.return;s!==null;){if(_g(s)){var c=s;break e}s=s.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Nn(f,""),c.flags&=-33);var g=Tg(r);Id(r,g,f);break;case 3:case 4:var E=c.stateNode.containerInfo,D=Tg(r);Ed(r,D,E);break;default:throw Error(n(161))}}catch(O){rt(r,r.return,O)}r.flags&=-3}i&4096&&(r.flags&=-4097)}function RS(r,i,s){ce=r,Ag(r)}function Ag(r,i,s){for(var c=(r.mode&1)!==0;ce!==null;){var f=ce,g=f.child;if(f.tag===22&&c){var E=f.memoizedState!==null||Vl;if(!E){var D=f.alternate,O=D!==null&&D.memoizedState!==null||Rt;D=Vl;var q=Rt;if(Vl=E,(Rt=O)&&!q)for(ce=f;ce!==null;)E=ce,O=E.child,E.tag===22&&E.memoizedState!==null?Ng(f):O!==null?(O.return=E,ce=O):Ng(f);for(;g!==null;)ce=g,Ag(g),g=g.sibling;ce=f,Vl=D,Rt=q}Rg(r)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,ce=g):Rg(r)}}function Rg(r){for(;ce!==null;){var i=ce;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Rt||Gl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Rt)if(s===null)c.componentDidMount();else{var f=i.elementType===i.type?s.memoizedProps:Mr(i.type,s.memoizedProps);c.componentDidUpdate(f,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Oh(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}Oh(i,E,s)}break;case 5:var D=i.stateNode;if(s===null&&i.flags&4){s=D;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&s.focus();break;case"img":O.src&&(s.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var q=i.alternate;if(q!==null){var Z=q.memoizedState;if(Z!==null){var te=Z.dehydrated;te!==null&&Rr(te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Rt||i.flags&512&&bd(i)}catch(Q){rt(i,i.return,Q)}}if(i===r){ce=null;break}if(s=i.sibling,s!==null){s.return=i.return,ce=s;break}ce=i.return}}function Og(r){for(;ce!==null;){var i=ce;if(i===r){ce=null;break}var s=i.sibling;if(s!==null){s.return=i.return,ce=s;break}ce=i.return}}function Ng(r){for(;ce!==null;){var i=ce;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Gl(4,i)}catch(O){rt(i,s,O)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(O){rt(i,f,O)}}var g=i.return;try{bd(i)}catch(O){rt(i,g,O)}break;case 5:var E=i.return;try{bd(i)}catch(O){rt(i,E,O)}}}catch(O){rt(i,i.return,O)}if(i===r){ce=null;break}var D=i.sibling;if(D!==null){D.return=i.return,ce=D;break}ce=i.return}}var OS=Math.ceil,ql=K.ReactCurrentDispatcher,xd=K.ReactCurrentOwner,yr=K.ReactCurrentBatchConfig,Le=0,vt=null,ot=null,Tt=0,nr=0,qo=qn(0),dt=0,ca=null,zi=0,Kl=0,Cd=0,da=null,Vt=null,_d=0,Ko=1/0,xn=null,Yl=!1,Td=null,Zn=null,Xl=!1,ei=null,Jl=0,fa=0,Pd=null,Ql=-1,Zl=0;function Lt(){return(Le&6)!==0?qe():Ql!==-1?Ql:Ql=qe()}function ti(r){return(r.mode&1)===0?1:(Le&2)!==0&&Tt!==0?Tt&-Tt:mS.transition!==null?(Zl===0&&(Zl=Ai()),Zl):(r=Re,r!==0||(r=window.event,r=r===void 0?16:Us(r.type)),r)}function Fr(r,i,s,c){if(50<fa)throw fa=0,Pd=null,Error(n(185));jn(r,s,c),((Le&2)===0||r!==vt)&&(r===vt&&((Le&2)===0&&(Kl|=s),dt===4&&ri(r,Tt)),Gt(r,c),s===1&&Le===0&&(i.mode&1)===0&&(Ko=qe()+500,Tl&&Yn()))}function Gt(r,i){var s=r.callbackNode;fn(r,i);var c=Di(r,r===vt?Tt:0);if(c===0)s!==null&&Ls(s),r.callbackNode=null,r.callbackPriority=0;else if(i=c&-c,r.callbackPriority!==i){if(s!=null&&Ls(s),i===1)r.tag===0?gS(Mg.bind(null,r)):bh(Mg.bind(null,r)),dS(function(){(Le&6)===0&&Yn()}),s=null;else{switch(Un(c)){case 1:s=Pi;break;case 4:s=Ln;break;case 16:s=fr;break;case 536870912:s=Za;break;default:s=fr}s=Wg(s,Lg.bind(null,r))}r.callbackPriority=i,r.callbackNode=s}}function Lg(r,i){if(Ql=-1,Zl=0,(Le&6)!==0)throw Error(n(327));var s=r.callbackNode;if(Yo()&&r.callbackNode!==s)return null;var c=Di(r,r===vt?Tt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||i)i=eu(r,c);else{i=c;var f=Le;Le|=2;var g=jg();(vt!==r||Tt!==i)&&(xn=null,Ko=qe()+500,Wi(r,i));do try{MS();break}catch(D){Bg(r,D)}while(!0);Gc(),ql.current=g,Le=f,ot!==null?i=0:(vt=null,Tt=0,i=dt)}if(i!==0){if(i===2&&(f=Zt(r),f!==0&&(c=f,i=kd(r,f))),i===1)throw s=ca,Wi(r,0),ri(r,c),Gt(r,qe()),s;if(i===6)ri(r,c);else{if(f=r.current.alternate,(c&30)===0&&!NS(f)&&(i=eu(r,c),i===2&&(g=Zt(r),g!==0&&(c=g,i=kd(r,g))),i===1))throw s=ca,Wi(r,0),ri(r,c),Gt(r,qe()),s;switch(r.finishedWork=f,r.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Vi(r,Vt,xn);break;case 3:if(ri(r,c),(c&130023424)===c&&(i=_d+500-qe(),10<i)){if(Di(r,0)!==0)break;if(f=r.suspendedLanes,(f&c)!==c){Lt(),r.pingedLanes|=r.suspendedLanes&f;break}r.timeoutHandle=Lc(Vi.bind(null,r,Vt,xn),i);break}Vi(r,Vt,xn);break;case 4:if(ri(r,c),(c&4194240)===c)break;for(i=r.eventTimes,f=-1;0<c;){var E=31-Ot(c);g=1<<E,E=i[E],E>f&&(f=E),c&=~g}if(c=f,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*OS(c/1960))-c,10<c){r.timeoutHandle=Lc(Vi.bind(null,r,Vt,xn),c);break}Vi(r,Vt,xn);break;case 5:Vi(r,Vt,xn);break;default:throw Error(n(329))}}}return Gt(r,qe()),r.callbackNode===s?Lg.bind(null,r):null}function kd(r,i){var s=da;return r.current.memoizedState.isDehydrated&&(Wi(r,i).flags|=256),r=eu(r,i),r!==2&&(i=Vt,Vt=s,i!==null&&Dd(i)),r}function Dd(r){Vt===null?Vt=r:Vt.push.apply(Vt,r)}function NS(r){for(var i=r;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var f=s[c],g=f.getSnapshot;f=f.value;try{if(!Nr(g(),f))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===r)break;for(;i.sibling===null;){if(i.return===null||i.return===r)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ri(r,i){for(i&=~Cd,i&=~Kl,r.suspendedLanes|=i,r.pingedLanes&=~i,r=r.expirationTimes;0<i;){var s=31-Ot(i),c=1<<s;r[s]=-1,i&=~c}}function Mg(r){if((Le&6)!==0)throw Error(n(327));Yo();var i=Di(r,0);if((i&1)===0)return Gt(r,qe()),null;var s=eu(r,i);if(r.tag!==0&&s===2){var c=Zt(r);c!==0&&(i=c,s=kd(r,c))}if(s===1)throw s=ca,Wi(r,0),ri(r,i),Gt(r,qe()),s;if(s===6)throw Error(n(345));return r.finishedWork=r.current.alternate,r.finishedLanes=i,Vi(r,Vt,xn),Gt(r,qe()),null}function Ad(r,i){var s=Le;Le|=1;try{return r(i)}finally{Le=s,Le===0&&(Ko=qe()+500,Tl&&Yn())}}function Hi(r){ei!==null&&ei.tag===0&&(Le&6)===0&&Yo();var i=Le;Le|=1;var s=yr.transition,c=Re;try{if(yr.transition=null,Re=1,r)return r()}finally{Re=c,yr.transition=s,Le=i,(Le&6)===0&&Yn()}}function Rd(){nr=qo.current,Xe(qo)}function Wi(r,i){r.finishedWork=null,r.finishedLanes=0;var s=r.timeoutHandle;if(s!==-1&&(r.timeoutHandle=-1,cS(s)),ot!==null)for(s=ot.return;s!==null;){var c=s;switch($c(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Cl();break;case 3:Wo(),Xe(zt),Xe(kt),ed();break;case 5:Qc(c);break;case 4:Wo();break;case 13:Xe(et);break;case 19:Xe(et);break;case 10:qc(c.type._context);break;case 22:case 23:Rd()}s=s.return}if(vt=r,ot=r=ni(r.current,null),Tt=nr=i,dt=0,ca=null,Cd=Kl=zi=0,Vt=da=null,Fi!==null){for(i=0;i<Fi.length;i++)if(s=Fi[i],c=s.interleaved,c!==null){s.interleaved=null;var f=c.next,g=s.pending;if(g!==null){var E=g.next;g.next=f,c.next=E}s.pending=c}Fi=null}return r}function Bg(r,i){do{var s=ot;try{if(Gc(),Bl.current=$l,jl){for(var c=tt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}jl=!1}if($i=0,mt=ct=tt=null,ia=!1,oa=0,xd.current=null,s===null||s.return===null){dt=1,ca=i,ot=null;break}e:{var g=r,E=s.return,D=s,O=i;if(i=Tt,D.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var q=O,Z=D,te=Z.tag;if((Z.mode&1)===0&&(te===0||te===11||te===15)){var Q=Z.alternate;Q?(Z.updateQueue=Q.updateQueue,Z.memoizedState=Q.memoizedState,Z.lanes=Q.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var ue=lg(E);if(ue!==null){ue.flags&=-257,ug(ue,E,D,g,i),ue.mode&1&&ag(g,q,i),i=ue,O=q;var fe=i.updateQueue;if(fe===null){var pe=new Set;pe.add(O),i.updateQueue=pe}else fe.add(O);break e}else{if((i&1)===0){ag(g,q,i),Od();break e}O=Error(n(426))}}else if(Qe&&D.mode&1){var it=lg(E);if(it!==null){(it.flags&65536)===0&&(it.flags|=256),ug(it,E,D,g,i),Wc(Vo(O,D));break e}}g=O=Vo(O,D),dt!==4&&(dt=2),da===null?da=[g]:da.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var $=og(g,O,i);Rh(g,$);break e;case 1:D=O;var L=g.type,H=g.stateNode;if((g.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(Zn===null||!Zn.has(H)))){g.flags|=65536,i&=-i,g.lanes|=i;var ie=sg(g,D,i);Rh(g,ie);break e}}g=g.return}while(g!==null)}Ug(s)}catch(he){i=he,ot===s&&s!==null&&(ot=s=s.return);continue}break}while(!0)}function jg(){var r=ql.current;return ql.current=$l,r===null?$l:r}function Od(){(dt===0||dt===3||dt===2)&&(dt=4),vt===null||(zi&268435455)===0&&(Kl&268435455)===0||ri(vt,Tt)}function eu(r,i){var s=Le;Le|=2;var c=jg();(vt!==r||Tt!==i)&&(xn=null,Wi(r,i));do try{LS();break}catch(f){Bg(r,f)}while(!0);if(Gc(),Le=s,ql.current=c,ot!==null)throw Error(n(261));return vt=null,Tt=0,dt}function LS(){for(;ot!==null;)Fg(ot)}function MS(){for(;ot!==null&&!Ja();)Fg(ot)}function Fg(r){var i=Hg(r.alternate,r,nr);r.memoizedProps=r.pendingProps,i===null?Ug(r):ot=i,xd.current=null}function Ug(r){var i=r;do{var s=i.alternate;if(r=i.return,(i.flags&32768)===0){if(s=PS(s,i,nr),s!==null){ot=s;return}}else{if(s=kS(s,i),s!==null){s.flags&=32767,ot=s;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{dt=6,ot=null;return}}if(i=i.sibling,i!==null){ot=i;return}ot=i=r}while(i!==null);dt===0&&(dt=5)}function Vi(r,i,s){var c=Re,f=yr.transition;try{yr.transition=null,Re=1,BS(r,i,s,c)}finally{yr.transition=f,Re=c}return null}function BS(r,i,s,c){do Yo();while(ei!==null);if((Le&6)!==0)throw Error(n(327));s=r.finishedWork;var f=r.finishedLanes;if(s===null)return null;if(r.finishedWork=null,r.finishedLanes=0,s===r.current)throw Error(n(177));r.callbackNode=null,r.callbackPriority=0;var g=s.lanes|s.childLanes;if(Ge(r,g),r===vt&&(ot=vt=null,Tt=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Xl||(Xl=!0,Wg(fr,function(){return Yo(),null})),g=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||g){g=yr.transition,yr.transition=null;var E=Re;Re=1;var D=Le;Le|=4,xd.current=null,AS(r,s),Dg(s,r),nS(Oc),zn=!!Rc,Oc=Rc=null,r.current=s,RS(s),mc(),Le=D,Re=E,yr.transition=g}else r.current=s;if(Xl&&(Xl=!1,ei=r,Jl=f),g=r.pendingLanes,g===0&&(Zn=null),el(s.stateNode),Gt(r,qe()),i!==null)for(c=r.onRecoverableError,s=0;s<i.length;s++)f=i[s],c(f.value,{componentStack:f.stack,digest:f.digest});if(Yl)throw Yl=!1,r=Td,Td=null,r;return(Jl&1)!==0&&r.tag!==0&&Yo(),g=r.pendingLanes,(g&1)!==0?r===Pd?fa++:(fa=0,Pd=r):fa=0,Yn(),null}function Yo(){if(ei!==null){var r=Un(Jl),i=yr.transition,s=Re;try{if(yr.transition=null,Re=16>r?16:r,ei===null)var c=!1;else{if(r=ei,ei=null,Jl=0,(Le&6)!==0)throw Error(n(331));var f=Le;for(Le|=4,ce=r.current;ce!==null;){var g=ce,E=g.child;if((ce.flags&16)!==0){var D=g.deletions;if(D!==null){for(var O=0;O<D.length;O++){var q=D[O];for(ce=q;ce!==null;){var Z=ce;switch(Z.tag){case 0:case 11:case 15:ua(8,Z,g)}var te=Z.child;if(te!==null)te.return=Z,ce=te;else for(;ce!==null;){Z=ce;var Q=Z.sibling,ue=Z.return;if(Cg(Z),Z===q){ce=null;break}if(Q!==null){Q.return=ue,ce=Q;break}ce=ue}}}var fe=g.alternate;if(fe!==null){var pe=fe.child;if(pe!==null){fe.child=null;do{var it=pe.sibling;pe.sibling=null,pe=it}while(pe!==null)}}ce=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,ce=E;else e:for(;ce!==null;){if(g=ce,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ua(9,g,g.return)}var $=g.sibling;if($!==null){$.return=g.return,ce=$;break e}ce=g.return}}var L=r.current;for(ce=L;ce!==null;){E=ce;var H=E.child;if((E.subtreeFlags&2064)!==0&&H!==null)H.return=E,ce=H;else e:for(E=L;ce!==null;){if(D=ce,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Gl(9,D)}}catch(he){rt(D,D.return,he)}if(D===E){ce=null;break e}var ie=D.sibling;if(ie!==null){ie.return=D.return,ce=ie;break e}ce=D.return}}if(Le=f,Yn(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(ki,r)}catch{}c=!0}return c}finally{Re=s,yr.transition=i}}return!1}function $g(r,i,s){i=Vo(s,i),i=og(r,i,1),r=Jn(r,i,1),i=Lt(),r!==null&&(jn(r,1,i),Gt(r,i))}function rt(r,i,s){if(r.tag===3)$g(r,r,s);else for(;i!==null;){if(i.tag===3){$g(i,r,s);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Zn===null||!Zn.has(c))){r=Vo(s,r),r=sg(i,r,1),i=Jn(i,r,1),r=Lt(),i!==null&&(jn(i,1,r),Gt(i,r));break}}i=i.return}}function jS(r,i,s){var c=r.pingCache;c!==null&&c.delete(i),i=Lt(),r.pingedLanes|=r.suspendedLanes&s,vt===r&&(Tt&s)===s&&(dt===4||dt===3&&(Tt&130023424)===Tt&&500>qe()-_d?Wi(r,0):Cd|=s),Gt(r,i)}function zg(r,i){i===0&&((r.mode&1)===0?i=1:(i=yo,yo<<=1,(yo&130023424)===0&&(yo=4194304)));var s=Lt();r=bn(r,i),r!==null&&(jn(r,i,s),Gt(r,s))}function FS(r){var i=r.memoizedState,s=0;i!==null&&(s=i.retryLane),zg(r,s)}function US(r,i){var s=0;switch(r.tag){case 13:var c=r.stateNode,f=r.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),zg(r,s)}var Hg;Hg=function(r,i,s){if(r!==null)if(r.memoizedProps!==i.pendingProps||zt.current)Wt=!0;else{if((r.lanes&s)===0&&(i.flags&128)===0)return Wt=!1,TS(r,i,s);Wt=(r.flags&131072)!==0}else Wt=!1,Qe&&(i.flags&1048576)!==0&&Eh(i,kl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Wl(r,i),r=i.pendingProps;var f=Bo(i,kt.current);Ho(i,s),f=nd(null,i,c,r,f,s);var g=id();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ht(c)?(g=!0,_l(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Xc(i),f.updater=zl,i.stateNode=f,f._reactInternals=i,cd(i,c,r,s),i=hd(null,i,c,!0,g,s)):(i.tag=0,Qe&&g&&Uc(i),Nt(null,i,f,s),i=i.child),i;case 16:c=i.elementType;e:{switch(Wl(r,i),r=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=zS(c),r=Mr(c,r),f){case 0:i=pd(null,i,c,r,s);break e;case 1:i=gg(null,i,c,r,s);break e;case 11:i=cg(null,i,c,r,s);break e;case 14:i=dg(null,i,c,Mr(c.type,r),s);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mr(c,f),pd(r,i,c,f,s);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mr(c,f),gg(r,i,c,f,s);case 3:e:{if(mg(i),r===null)throw Error(n(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Ah(r,i),Ll(i,c,null,s);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=Vo(Error(n(423)),i),i=vg(r,i,c,s,f);break e}else if(c!==f){f=Vo(Error(n(424)),i),i=vg(r,i,c,s,f);break e}else for(rr=Gn(i.stateNode.containerInfo.firstChild),tr=i,Qe=!0,Lr=null,s=kh(i,null,c,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Uo(),c===f){i=In(r,i,s);break e}Nt(r,i,c,s)}i=i.child}return i;case 5:return Nh(i),r===null&&Hc(i),c=i.type,f=i.pendingProps,g=r!==null?r.memoizedProps:null,E=f.children,Nc(c,f)?E=null:g!==null&&Nc(c,g)&&(i.flags|=32),hg(r,i),Nt(r,i,E,s),i.child;case 6:return r===null&&Hc(i),null;case 13:return yg(r,i,s);case 4:return Jc(i,i.stateNode.containerInfo),c=i.pendingProps,r===null?i.child=$o(i,null,c,s):Nt(r,i,c,s),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mr(c,f),cg(r,i,c,f,s);case 7:return Nt(r,i,i.pendingProps,s),i.child;case 8:return Nt(r,i,i.pendingProps.children,s),i.child;case 12:return Nt(r,i,i.pendingProps.children,s),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,E=f.value,Ke(Rl,c._currentValue),c._currentValue=E,g!==null)if(Nr(g.value,E)){if(g.children===f.children&&!zt.current){i=In(r,i,s);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var D=g.dependencies;if(D!==null){E=g.child;for(var O=D.firstContext;O!==null;){if(O.context===c){if(g.tag===1){O=En(-1,s&-s),O.tag=2;var q=g.updateQueue;if(q!==null){q=q.shared;var Z=q.pending;Z===null?O.next=O:(O.next=Z.next,Z.next=O),q.pending=O}}g.lanes|=s,O=g.alternate,O!==null&&(O.lanes|=s),Kc(g.return,s,i),D.lanes|=s;break}O=O.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(n(341));E.lanes|=s,D=E.alternate,D!==null&&(D.lanes|=s),Kc(E,s,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Nt(r,i,f.children,s),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ho(i,s),f=mr(f),c=c(f),i.flags|=1,Nt(r,i,c,s),i.child;case 14:return c=i.type,f=Mr(c,i.pendingProps),f=Mr(c.type,f),dg(r,i,c,f,s);case 15:return fg(r,i,i.type,i.pendingProps,s);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Mr(c,f),Wl(r,i),i.tag=1,Ht(c)?(r=!0,_l(i)):r=!1,Ho(i,s),ng(i,c,f),cd(i,c,f,s),hd(null,i,c,!0,r,s);case 19:return Sg(r,i,s);case 22:return pg(r,i,s)}throw Error(n(156,i.tag))};function Wg(r,i){return mo(r,i)}function $S(r,i,s,c){this.tag=r,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wr(r,i,s,c){return new $S(r,i,s,c)}function Nd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function zS(r){if(typeof r=="function")return Nd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===B)return 11;if(r===je)return 14}return 2}function ni(r,i){var s=r.alternate;return s===null?(s=wr(r.tag,i,r.key,r.mode),s.elementType=r.elementType,s.type=r.type,s.stateNode=r.stateNode,s.alternate=r,r.alternate=s):(s.pendingProps=i,s.type=r.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=r.flags&14680064,s.childLanes=r.childLanes,s.lanes=r.lanes,s.child=r.child,s.memoizedProps=r.memoizedProps,s.memoizedState=r.memoizedState,s.updateQueue=r.updateQueue,i=r.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=r.sibling,s.index=r.index,s.ref=r.ref,s}function tu(r,i,s,c,f,g){var E=2;if(c=r,typeof r=="function")Nd(r)&&(E=1);else if(typeof r=="string")E=5;else e:switch(r){case k:return Gi(s.children,f,g,i);case _:E=8,f|=8;break;case P:return r=wr(12,s,i,f|2),r.elementType=P,r.lanes=g,r;case C:return r=wr(13,s,i,f),r.elementType=C,r.lanes=g,r;case Se:return r=wr(19,s,i,f),r.elementType=Se,r.lanes=g,r;case Pe:return ru(s,f,g,i);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case A:E=10;break e;case R:E=9;break e;case B:E=11;break e;case je:E=14;break e;case Fe:E=16,c=null;break e}throw Error(n(130,r==null?r:typeof r,""))}return i=wr(E,s,i,f),i.elementType=r,i.type=c,i.lanes=g,i}function Gi(r,i,s,c){return r=wr(7,r,c,i),r.lanes=s,r}function ru(r,i,s,c){return r=wr(22,r,c,i),r.elementType=Pe,r.lanes=s,r.stateNode={isHidden:!1},r}function Ld(r,i,s){return r=wr(6,r,null,i),r.lanes=s,r}function Md(r,i,s){return i=wr(4,r.children!==null?r.children:[],r.key,i),i.lanes=s,i.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},i}function HS(r,i,s,c,f){this.tag=i,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bn(0),this.expirationTimes=Bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Bd(r,i,s,c,f,g,E,D,O){return r=new HS(r,i,s,D,O),i===1?(i=1,g===!0&&(i|=8)):i=0,g=wr(3,null,null,i),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xc(g),r}function WS(r,i,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:J,key:c==null?null:""+c,children:r,containerInfo:i,implementation:s}}function Vg(r){if(!r)return Kn;r=r._reactInternals;e:{if(Tr(r)!==r||r.tag!==1)throw Error(n(170));var i=r;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ht(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(r.tag===1){var s=r.type;if(Ht(s))return wh(r,s,i)}return i}function Gg(r,i,s,c,f,g,E,D,O){return r=Bd(s,c,!0,r,f,g,E,D,O),r.context=Vg(null),s=r.current,c=Lt(),f=ti(s),g=En(c,f),g.callback=i??null,Jn(s,g,f),r.current.lanes=f,jn(r,f,c),Gt(r,c),r}function nu(r,i,s,c){var f=i.current,g=Lt(),E=ti(f);return s=Vg(s),i.context===null?i.context=s:i.pendingContext=s,i=En(g,E),i.payload={element:r},c=c===void 0?null:c,c!==null&&(i.callback=c),r=Jn(f,i,E),r!==null&&(Fr(r,f,E,g),Nl(r,f,E)),E}function iu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function qg(r,i){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var s=r.retryLane;r.retryLane=s!==0&&s<i?s:i}}function jd(r,i){qg(r,i),(r=r.alternate)&&qg(r,i)}function VS(){return null}var Kg=typeof reportError=="function"?reportError:function(r){console.error(r)};function Fd(r){this._internalRoot=r}ou.prototype.render=Fd.prototype.render=function(r){var i=this._internalRoot;if(i===null)throw Error(n(409));nu(r,i,null,null)},ou.prototype.unmount=Fd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var i=r.containerInfo;Hi(function(){nu(null,r,null,null)}),i[vn]=null}};function ou(r){this._internalRoot=r}ou.prototype.unstable_scheduleHydration=function(r){if(r){var i=ol();r={blockedOn:null,target:r,priority:i};for(var s=0;s<qr.length&&i!==0&&i<qr[s].priority;s++);qr.splice(s,0,r),s===0&&ll(r)}};function Ud(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function su(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function GS(r,i,s,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var q=iu(E);g.call(q)}}var E=Gg(i,c,r,0,null,!1,!1,"",Yg);return r._reactRootContainer=E,r[vn]=E.current,Xs(r.nodeType===8?r.parentNode:r),Hi(),E}for(;f=r.lastChild;)r.removeChild(f);if(typeof c=="function"){var D=c;c=function(){var q=iu(O);D.call(q)}}var O=Bd(r,0,!1,null,null,!1,!1,"",Yg);return r._reactRootContainer=O,r[vn]=O.current,Xs(r.nodeType===8?r.parentNode:r),Hi(function(){nu(i,O,s,c)}),O}function au(r,i,s,c,f){var g=s._reactRootContainer;if(g){var E=g;if(typeof f=="function"){var D=f;f=function(){var O=iu(E);D.call(O)}}nu(i,E,r,f)}else E=GS(s,i,r,f,c);return iu(E)}nl=function(r){switch(r.tag){case 3:var i=r.stateNode;if(i.current.memoizedState.isDehydrated){var s=Mn(i.pendingLanes);s!==0&&(Fn(i,s|1),Gt(i,qe()),(Le&6)===0&&(Ko=qe()+500,Yn()))}break;case 13:Hi(function(){var c=bn(r,1);if(c!==null){var f=Lt();Fr(c,r,1,f)}}),jd(r,1)}},wo=function(r){if(r.tag===13){var i=bn(r,134217728);if(i!==null){var s=Lt();Fr(i,r,134217728,s)}jd(r,134217728)}},il=function(r){if(r.tag===13){var i=ti(r),s=bn(r,i);if(s!==null){var c=Lt();Fr(s,r,i,c)}jd(r,i)}},ol=function(){return Re},sl=function(r,i){var s=Re;try{return Re=r,i()}finally{Re=s}},Ps=function(r,i,s){switch(i){case"input":if(an(r,s),i=s.name,s.type==="radio"&&i!=null){for(s=r;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var c=s[i];if(c!==r&&c.form===r.form){var f=xl(c);if(!f)throw Error(n(90));pt(c),an(c,f)}}}break;case"textarea":lo(r,s);break;case"select":i=s.value,i!=null&&ln(r,!!s.multiple,i,!1)}},fo=Ad,Ds=Hi;var qS={usingClientEntryPoint:!1,Events:[Zs,Lo,xl,cn,ks,Ad]},pa={findFiberByHostInstance:Li,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KS={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:K.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=Ns(r),r===null?null:r.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||VS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lu.isDisabled&&lu.supportsFiber)try{ki=lu.inject(KS),Qt=lu}catch{}}return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qS,qt.createPortal=function(r,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ud(i))throw Error(n(200));return WS(r,i,null,s)},qt.createRoot=function(r,i){if(!Ud(r))throw Error(n(299));var s=!1,c="",f=Kg;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Bd(r,1,!1,null,null,s,!1,c,f),r[vn]=i.current,Xs(r.nodeType===8?r.parentNode:r),new Fd(i)},qt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var i=r._reactInternals;if(i===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=Ns(i),r=r===null?null:r.stateNode,r},qt.flushSync=function(r){return Hi(r)},qt.hydrate=function(r,i,s){if(!su(i))throw Error(n(200));return au(null,r,i,!0,s)},qt.hydrateRoot=function(r,i,s){if(!Ud(r))throw Error(n(405));var c=s!=null&&s.hydratedSources||null,f=!1,g="",E=Kg;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(g=s.identifierPrefix),s.onRecoverableError!==void 0&&(E=s.onRecoverableError)),i=Gg(i,null,r,1,s??null,f,!1,g,E),r[vn]=i.current,Xs(r),c)for(r=0;r<c.length;r++)s=c[r],f=s._getVersion,f=f(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,f]:i.mutableSourceEagerHydrationData.push(s,f);return new ou(i)},qt.render=function(r,i,s){if(!su(i))throw Error(n(200));return au(null,r,i,!1,s)},qt.unmountComponentAtNode=function(r){if(!su(r))throw Error(n(40));return r._reactRootContainer?(Hi(function(){au(null,null,r,!1,function(){r._reactRootContainer=null,r[vn]=null})}),!0):!1},qt.unstable_batchedUpdates=Ad,qt.unstable_renderSubtreeIntoContainer=function(r,i,s,c){if(!su(s))throw Error(n(200));if(r==null||r._reactInternals===void 0)throw Error(n(38));return au(r,i,s,!1,c)},qt.version="18.3.1-next-f1338f8080-20240426",qt}var nm;function ay(){if(nm)return Hd.exports;nm=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Hd.exports=t1(),Hd.exports}var im;function r1(){if(im)return uu;im=1;var t=ay();return uu.createRoot=t.createRoot,uu.hydrateRoot=t.hydrateRoot,uu}var n1=r1(),St=function(){return St=Object.assign||function(e){for(var n,o=1,a=arguments.length;o<a;o++){n=arguments[o];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},St.apply(this,arguments)};function Jf(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,o=Object.getOwnPropertySymbols(t);a<o.length;a++)e.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(t,o[a])&&(n[o[a]]=t[o[a]]);return n}function Pa(t,e,n){if(n||arguments.length===2)for(var o=0,a=e.length,u;o<a;o++)(u||!(o in e))&&(u||(u=Array.prototype.slice.call(e,0,o)),u[o]=e[o]);return t.concat(u||Array.prototype.slice.call(e))}var re=Xf();const Ae=Ju(re);var Je="-ms-",Ea="-moz-",$e="-webkit-",ly="comm",Qu="rule",Qf="decl",i1="@import",uy="@keyframes",o1="@layer",cy=Math.abs,Zf=String.fromCharCode,xf=Object.assign;function s1(t,e){return wt(t,0)^45?(((e<<2^wt(t,0))<<2^wt(t,1))<<2^wt(t,2))<<2^wt(t,3):0}function dy(t){return t.trim()}function Cn(t,e){return(t=e.exec(t))?t[0]:t}function Te(t,e,n){return t.replace(e,n)}function yu(t,e,n){return t.indexOf(e,n)}function wt(t,e){return t.charCodeAt(e)|0}function is(t,e,n){return t.slice(e,n)}function tn(t){return t.length}function fy(t){return t.length}function wa(t,e){return e.push(t),t}function a1(t,e){return t.map(e).join("")}function om(t,e){return t.filter(function(n){return!Cn(n,e)})}var Zu=1,os=1,py=0,xr=0,st=0,ps="";function ec(t,e,n,o,a,u,d,p){return{value:t,root:e,parent:n,type:o,props:a,children:u,line:Zu,column:os,length:d,return:"",siblings:p}}function si(t,e){return xf(ec("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Xo(t){for(;t.root;)t=si(t.root,{children:[t]});wa(t,t.siblings)}function l1(){return st}function u1(){return st=xr>0?wt(ps,--xr):0,os--,st===10&&(os=1,Zu--),st}function Hr(){return st=xr<py?wt(ps,xr++):0,os++,st===10&&(os=1,Zu++),st}function Ji(){return wt(ps,xr)}function wu(){return xr}function tc(t,e){return is(ps,t,e)}function Cf(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function c1(t){return Zu=os=1,py=tn(ps=t),xr=0,[]}function d1(t){return ps="",t}function Gd(t){return dy(tc(xr-1,_f(t===91?t+2:t===40?t+1:t)))}function f1(t){for(;(st=Ji())&&st<33;)Hr();return Cf(t)>2||Cf(st)>3?"":" "}function p1(t,e){for(;--e&&Hr()&&!(st<48||st>102||st>57&&st<65||st>70&&st<97););return tc(t,wu()+(e<6&&Ji()==32&&Hr()==32))}function _f(t){for(;Hr();)switch(st){case t:return xr;case 34:case 39:t!==34&&t!==39&&_f(st);break;case 40:t===41&&_f(t);break;case 92:Hr();break}return xr}function h1(t,e){for(;Hr()&&t+st!==57;)if(t+st===84&&Ji()===47)break;return"/*"+tc(e,xr-1)+"*"+Zf(t===47?t:Hr())}function g1(t){for(;!Cf(Ji());)Hr();return tc(t,xr)}function m1(t){return d1(Su("",null,null,null,[""],t=c1(t),0,[0],t))}function Su(t,e,n,o,a,u,d,p,m){for(var y=0,b=0,w=d,S=0,I=0,T=0,N=1,j=1,z=1,W=0,G="",K=a,V=u,J=o,k=G;j;)switch(T=W,W=Hr()){case 40:if(T!=108&&wt(k,w-1)==58){yu(k+=Te(Gd(W),"&","&\f"),"&\f",cy(y?p[y-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:k+=Gd(W);break;case 9:case 10:case 13:case 32:k+=f1(T);break;case 92:k+=p1(wu()-1,7);continue;case 47:switch(Ji()){case 42:case 47:wa(v1(h1(Hr(),wu()),e,n,m),m);break;default:k+="/"}break;case 123*N:p[y++]=tn(k)*z;case 125*N:case 59:case 0:switch(W){case 0:case 125:j=0;case 59+b:z==-1&&(k=Te(k,/\f/g,"")),I>0&&tn(k)-w&&wa(I>32?am(k+";",o,n,w-1,m):am(Te(k," ","")+";",o,n,w-2,m),m);break;case 59:k+=";";default:if(wa(J=sm(k,e,n,y,b,a,p,G,K=[],V=[],w,u),u),W===123)if(b===0)Su(k,e,J,J,K,u,w,p,V);else switch(S===99&&wt(k,3)===110?100:S){case 100:case 108:case 109:case 115:Su(t,J,J,o&&wa(sm(t,J,J,0,0,a,p,G,a,K=[],w,V),V),a,V,w,p,o?K:V);break;default:Su(k,J,J,J,[""],V,0,p,V)}}y=b=I=0,N=z=1,G=k="",w=d;break;case 58:w=1+tn(k),I=T;default:if(N<1){if(W==123)--N;else if(W==125&&N++==0&&u1()==125)continue}switch(k+=Zf(W),W*N){case 38:z=b>0?1:(k+="\f",-1);break;case 44:p[y++]=(tn(k)-1)*z,z=1;break;case 64:Ji()===45&&(k+=Gd(Hr())),S=Ji(),b=w=tn(G=k+=g1(wu())),W++;break;case 45:T===45&&tn(k)==2&&(N=0)}}return u}function sm(t,e,n,o,a,u,d,p,m,y,b,w){for(var S=a-1,I=a===0?u:[""],T=fy(I),N=0,j=0,z=0;N<o;++N)for(var W=0,G=is(t,S+1,S=cy(j=d[N])),K=t;W<T;++W)(K=dy(j>0?I[W]+" "+G:Te(G,/&\f/g,I[W])))&&(m[z++]=K);return ec(t,e,n,a===0?Qu:p,m,y,b,w)}function v1(t,e,n,o){return ec(t,e,n,ly,Zf(l1()),is(t,2,-2),0,o)}function am(t,e,n,o,a){return ec(t,e,n,Qf,is(t,0,o),is(t,o+1,-1),o,a)}function hy(t,e,n){switch(s1(t,e)){case 5103:return $e+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $e+t+t;case 4789:return Ea+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return $e+t+Ea+t+Je+t+t;case 5936:switch(wt(t,e+11)){case 114:return $e+t+Je+Te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return $e+t+Je+Te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return $e+t+Je+Te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return $e+t+Je+t+t;case 6165:return $e+t+Je+"flex-"+t+t;case 5187:return $e+t+Te(t,/(\w+).+(:[^]+)/,$e+"box-$1$2"+Je+"flex-$1$2")+t;case 5443:return $e+t+Je+"flex-item-"+Te(t,/flex-|-self/g,"")+(Cn(t,/flex-|baseline/)?"":Je+"grid-row-"+Te(t,/flex-|-self/g,""))+t;case 4675:return $e+t+Je+"flex-line-pack"+Te(t,/align-content|flex-|-self/g,"")+t;case 5548:return $e+t+Je+Te(t,"shrink","negative")+t;case 5292:return $e+t+Je+Te(t,"basis","preferred-size")+t;case 6060:return $e+"box-"+Te(t,"-grow","")+$e+t+Je+Te(t,"grow","positive")+t;case 4554:return $e+Te(t,/([^-])(transform)/g,"$1"+$e+"$2")+t;case 6187:return Te(Te(Te(t,/(zoom-|grab)/,$e+"$1"),/(image-set)/,$e+"$1"),t,"")+t;case 5495:case 3959:return Te(t,/(image-set\([^]*)/,$e+"$1$`$1");case 4968:return Te(Te(t,/(.+:)(flex-)?(.*)/,$e+"box-pack:$3"+Je+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$e+t+t;case 4200:if(!Cn(t,/flex-|baseline/))return Je+"grid-column-align"+is(t,e)+t;break;case 2592:case 3360:return Je+Te(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(o,a){return e=a,Cn(o.props,/grid-\w+-end/)})?~yu(t+(n=n[e].value),"span",0)?t:Je+Te(t,"-start","")+t+Je+"grid-row-span:"+(~yu(n,"span",0)?Cn(n,/\d+/):+Cn(n,/\d+/)-+Cn(t,/\d+/))+";":Je+Te(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(o){return Cn(o.props,/grid-\w+-start/)})?t:Je+Te(Te(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Te(t,/(.+)-inline(.+)/,$e+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tn(t)-1-e>6)switch(wt(t,e+1)){case 109:if(wt(t,e+4)!==45)break;case 102:return Te(t,/(.+:)(.+)-([^]+)/,"$1"+$e+"$2-$3$1"+Ea+(wt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~yu(t,"stretch",0)?hy(Te(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Te(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,a,u,d,p,m,y){return Je+a+":"+u+y+(d?Je+a+"-span:"+(p?m:+m-+u)+y:"")+t});case 4949:if(wt(t,e+6)===121)return Te(t,":",":"+$e)+t;break;case 6444:switch(wt(t,wt(t,14)===45?18:11)){case 120:return Te(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$e+(wt(t,14)===45?"inline-":"")+"box$3$1"+$e+"$2$3$1"+Je+"$2box$3")+t;case 100:return Te(t,":",":"+Je)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Te(t,"scroll-","scroll-snap-")+t}return t}function ku(t,e){for(var n="",o=0;o<t.length;o++)n+=e(t[o],o,t,e)||"";return n}function y1(t,e,n,o){switch(t.type){case o1:if(t.children.length)break;case i1:case Qf:return t.return=t.return||t.value;case ly:return"";case uy:return t.return=t.value+"{"+ku(t.children,o)+"}";case Qu:if(!tn(t.value=t.props.join(",")))return""}return tn(n=ku(t.children,o))?t.return=t.value+"{"+n+"}":""}function w1(t){var e=fy(t);return function(n,o,a,u){for(var d="",p=0;p<e;p++)d+=t[p](n,o,a,u)||"";return d}}function S1(t){return function(e){e.root||(e=e.return)&&t(e)}}function b1(t,e,n,o){if(t.length>-1&&!t.return)switch(t.type){case Qf:t.return=hy(t.value,t.length,n);return;case uy:return ku([si(t,{value:Te(t.value,"@","@"+$e)})],o);case Qu:if(t.length)return a1(n=t.props,function(a){switch(Cn(a,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xo(si(t,{props:[Te(a,/:(read-\w+)/,":"+Ea+"$1")]})),Xo(si(t,{props:[a]})),xf(t,{props:om(n,o)});break;case"::placeholder":Xo(si(t,{props:[Te(a,/:(plac\w+)/,":"+$e+"input-$1")]})),Xo(si(t,{props:[Te(a,/:(plac\w+)/,":"+Ea+"$1")]})),Xo(si(t,{props:[Te(a,/:(plac\w+)/,Je+"input-$1")]})),Xo(si(t,{props:[a]})),xf(t,{props:om(n,o)});break}return""})}}var E1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ir={},ss=typeof process<"u"&&ir!==void 0&&(ir.REACT_APP_SC_ATTR||ir.SC_ATTR)||"data-styled",gy="active",my="data-styled-version",rc="6.1.13",ep=`/*!sc*/
`,Du=typeof window<"u"&&"HTMLElement"in window,I1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ir!==void 0&&ir.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ir.REACT_APP_SC_DISABLE_SPEEDY!==""?ir.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ir.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ir!==void 0&&ir.SC_DISABLE_SPEEDY!==void 0&&ir.SC_DISABLE_SPEEDY!==""&&ir.SC_DISABLE_SPEEDY!=="false"&&ir.SC_DISABLE_SPEEDY),x1={},nc=Object.freeze([]),as=Object.freeze({});function vy(t,e,n){return n===void 0&&(n=as),t.theme!==n.theme&&t.theme||e||n.theme}var yy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),C1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_1=/(^-|-$)/g;function lm(t){return t.replace(C1,"-").replace(_1,"")}var T1=/(a)(d)/gi,cu=52,um=function(t){return String.fromCharCode(t+(t>25?39:97))};function Tf(t){var e,n="";for(e=Math.abs(t);e>cu;e=e/cu|0)n=um(e%cu)+n;return(um(e%cu)+n).replace(T1,"$1-$2")}var qd,wy=5381,Zo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},Sy=function(t){return Zo(wy,t)};function by(t){return Tf(Sy(t)>>>0)}function P1(t){return t.displayName||t.name||"Component"}function Kd(t){return typeof t=="string"&&!0}var Ey=typeof Symbol=="function"&&Symbol.for,Iy=Ey?Symbol.for("react.memo"):60115,k1=Ey?Symbol.for("react.forward_ref"):60112,D1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},A1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},R1=((qd={})[k1]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},qd[Iy]=xy,qd);function cm(t){return("type"in(e=t)&&e.type.$$typeof)===Iy?xy:"$$typeof"in t?R1[t.$$typeof]:D1;var e}var O1=Object.defineProperty,N1=Object.getOwnPropertyNames,dm=Object.getOwnPropertySymbols,L1=Object.getOwnPropertyDescriptor,M1=Object.getPrototypeOf,fm=Object.prototype;function Cy(t,e,n){if(typeof e!="string"){if(fm){var o=M1(e);o&&o!==fm&&Cy(t,o,n)}var a=N1(e);dm&&(a=a.concat(dm(e)));for(var u=cm(t),d=cm(e),p=0;p<a.length;++p){var m=a[p];if(!(m in A1||n&&n[m]||d&&m in d||u&&m in u)){var y=L1(e,m);try{O1(t,m,y)}catch{}}}}return t}function Qi(t){return typeof t=="function"}function tp(t){return typeof t=="object"&&"styledComponentId"in t}function Xi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Pf(t,e){if(t.length===0)return"";for(var n=t[0],o=1;o<t.length;o++)n+=t[o];return n}function ka(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function kf(t,e,n){if(n===void 0&&(n=!1),!n&&!ka(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var o=0;o<e.length;o++)t[o]=kf(t[o],e[o]);else if(ka(e))for(var o in e)t[o]=kf(t[o],e[o]);return t}function rp(t,e){Object.defineProperty(t,"toString",{value:e})}function Zi(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var B1=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,o=0;o<e;o++)n+=this.groupSizes[o];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,u=a;e>=u;)if((u<<=1)<0)throw Zi(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var d=a;d<u;d++)this.groupSizes[d]=0}for(var p=this.indexOfGroup(e+1),m=(d=0,n.length);d<m;d++)this.tag.insertRule(p,n[d])&&(this.groupSizes[e]++,p++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],o=this.indexOfGroup(e),a=o+n;this.groupSizes[e]=0;for(var u=o;u<a;u++)this.tag.deleteRule(o)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var o=this.groupSizes[e],a=this.indexOfGroup(e),u=a+o,d=a;d<u;d++)n+="".concat(this.tag.getRule(d)).concat(ep);return n},t}(),bu=new Map,Au=new Map,Eu=1,du=function(t){if(bu.has(t))return bu.get(t);for(;Au.has(Eu);)Eu++;var e=Eu++;return bu.set(t,e),Au.set(e,t),e},j1=function(t,e){Eu=e+1,bu.set(t,e),Au.set(e,t)},F1="style[".concat(ss,"][").concat(my,'="').concat(rc,'"]'),U1=new RegExp("^".concat(ss,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$1=function(t,e,n){for(var o,a=n.split(","),u=0,d=a.length;u<d;u++)(o=a[u])&&t.registerName(e,o)},z1=function(t,e){for(var n,o=((n=e.textContent)!==null&&n!==void 0?n:"").split(ep),a=[],u=0,d=o.length;u<d;u++){var p=o[u].trim();if(p){var m=p.match(U1);if(m){var y=0|parseInt(m[1],10),b=m[2];y!==0&&(j1(b,y),$1(t,b,m[3]),t.getTag().insertRules(y,a)),a.length=0}else a.push(p)}}},pm=function(t){for(var e=document.querySelectorAll(F1),n=0,o=e.length;n<o;n++){var a=e[n];a&&a.getAttribute(ss)!==gy&&(z1(t,a),a.parentNode&&a.parentNode.removeChild(a))}};function H1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _y=function(t){var e=document.head,n=t||e,o=document.createElement("style"),a=function(p){var m=Array.from(p.querySelectorAll("style[".concat(ss,"]")));return m[m.length-1]}(n),u=a!==void 0?a.nextSibling:null;o.setAttribute(ss,gy),o.setAttribute(my,rc);var d=H1();return d&&o.setAttribute("nonce",d),n.insertBefore(o,u),o},W1=function(){function t(e){this.element=_y(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var o=document.styleSheets,a=0,u=o.length;a<u;a++){var d=o[a];if(d.ownerNode===n)return d}throw Zi(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),V1=function(){function t(e){this.element=_y(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var o=document.createTextNode(n);return this.element.insertBefore(o,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),G1=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),hm=Du,q1={isServer:!Du,useCSSOMInjection:!I1},Ru=function(){function t(e,n,o){e===void 0&&(e=as),n===void 0&&(n={});var a=this;this.options=St(St({},q1),e),this.gs=n,this.names=new Map(o),this.server=!!e.isServer,!this.server&&Du&&hm&&(hm=!1,pm(this)),rp(this,function(){return function(u){for(var d=u.getTag(),p=d.length,m="",y=function(w){var S=function(z){return Au.get(z)}(w);if(S===void 0)return"continue";var I=u.names.get(S),T=d.getGroup(w);if(I===void 0||!I.size||T.length===0)return"continue";var N="".concat(ss,".g").concat(w,'[id="').concat(S,'"]'),j="";I!==void 0&&I.forEach(function(z){z.length>0&&(j+="".concat(z,","))}),m+="".concat(T).concat(N,'{content:"').concat(j,'"}').concat(ep)},b=0;b<p;b++)y(b);return m}(a)})}return t.registerId=function(e){return du(e)},t.prototype.rehydrate=function(){!this.server&&Du&&pm(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(St(St({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var o=n.useCSSOMInjection,a=n.target;return n.isServer?new G1(a):o?new W1(a):new V1(a)}(this.options),new B1(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(du(e),this.names.has(e))this.names.get(e).add(n);else{var o=new Set;o.add(n),this.names.set(e,o)}},t.prototype.insertRules=function(e,n,o){this.registerName(e,n),this.getTag().insertRules(du(e),o)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(du(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),K1=/&/g,Y1=/^\s*\/\/.*$/gm;function Ty(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(o){return"".concat(e," ").concat(o)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ty(n.children,e)),n})}function X1(t){var e,n,o,a=as,u=a.options,d=u===void 0?as:u,p=a.plugins,m=p===void 0?nc:p,y=function(S,I,T){return T.startsWith(n)&&T.endsWith(n)&&T.replaceAll(n,"").length>0?".".concat(e):S},b=m.slice();b.push(function(S){S.type===Qu&&S.value.includes("&")&&(S.props[0]=S.props[0].replace(K1,n).replace(o,y))}),d.prefix&&b.push(b1),b.push(y1);var w=function(S,I,T,N){I===void 0&&(I=""),T===void 0&&(T=""),N===void 0&&(N="&"),e=N,n=I,o=new RegExp("\\".concat(n,"\\b"),"g");var j=S.replace(Y1,""),z=m1(T||I?"".concat(T," ").concat(I," { ").concat(j," }"):j);d.namespace&&(z=Ty(z,d.namespace));var W=[];return ku(z,w1(b.concat(S1(function(G){return W.push(G)})))),W};return w.hash=m.length?m.reduce(function(S,I){return I.name||Zi(15),Zo(S,I.name)},wy).toString():"",w}var J1=new Ru,Df=X1(),Py=Ae.createContext({shouldForwardProp:void 0,styleSheet:J1,stylis:Df});Py.Consumer;Ae.createContext(void 0);function Af(){return re.useContext(Py)}var Q1=function(){function t(e,n){var o=this;this.inject=function(a,u){u===void 0&&(u=Df);var d=o.name+u.hash;a.hasNameForId(o.id,d)||a.insertRules(o.id,d,u(o.rules,d,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,rp(this,function(){throw Zi(12,String(o.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Df),this.name+e.hash},t}(),Z1=function(t){return t>="A"&&t<="Z"};function gm(t){for(var e="",n=0;n<t.length;n++){var o=t[n];if(n===1&&o==="-"&&t[0]==="-")return t;Z1(o)?e+="-"+o.toLowerCase():e+=o}return e.startsWith("ms-")?"-"+e:e}var ky=function(t){return t==null||t===!1||t===""},Dy=function(t){var e,n,o=[];for(var a in t){var u=t[a];t.hasOwnProperty(a)&&!ky(u)&&(Array.isArray(u)&&u.isCss||Qi(u)?o.push("".concat(gm(a),":"),u,";"):ka(u)?o.push.apply(o,Pa(Pa(["".concat(a," {")],Dy(u),!1),["}"],!1)):o.push("".concat(gm(a),": ").concat((e=a,(n=u)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in E1||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return o};function di(t,e,n,o){if(ky(t))return[];if(tp(t))return[".".concat(t.styledComponentId)];if(Qi(t)){if(!Qi(u=t)||u.prototype&&u.prototype.isReactComponent||!e)return[t];var a=t(e);return di(a,e,n,o)}var u;return t instanceof Q1?n?(t.inject(n,o),[t.getName(o)]):[t]:ka(t)?Dy(t):Array.isArray(t)?Array.prototype.concat.apply(nc,t.map(function(d){return di(d,e,n,o)})):[t.toString()]}function Ay(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Qi(n)&&!tp(n))return!1}return!0}var eb=Sy(rc),tb=function(){function t(e,n,o){this.rules=e,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&Ay(e),this.componentId=n,this.baseHash=Zo(eb,n),this.baseStyle=o,Ru.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,o){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Xi(a,this.staticRulesId);else{var u=Pf(di(this.rules,e,n,o)),d=Tf(Zo(this.baseHash,u)>>>0);if(!n.hasNameForId(this.componentId,d)){var p=o(u,".".concat(d),void 0,this.componentId);n.insertRules(this.componentId,d,p)}a=Xi(a,d),this.staticRulesId=d}else{for(var m=Zo(this.baseHash,o.hash),y="",b=0;b<this.rules.length;b++){var w=this.rules[b];if(typeof w=="string")y+=w;else if(w){var S=Pf(di(w,e,n,o));m=Zo(m,S+b),y+=S}}if(y){var I=Tf(m>>>0);n.hasNameForId(this.componentId,I)||n.insertRules(this.componentId,I,o(y,".".concat(I),void 0,this.componentId)),a=Xi(a,I)}}return a},t}(),Da=Ae.createContext(void 0);Da.Consumer;function rb(t){var e=Ae.useContext(Da),n=re.useMemo(function(){return function(o,a){if(!o)throw Zi(14);if(Qi(o)){var u=o(a);return u}if(Array.isArray(o)||typeof o!="object")throw Zi(8);return a?St(St({},a),o):o}(t.theme,e)},[t.theme,e]);return t.children?Ae.createElement(Da.Provider,{value:n},t.children):null}var Yd={};function nb(t,e,n){var o=tp(t),a=t,u=!Kd(t),d=e.attrs,p=d===void 0?nc:d,m=e.componentId,y=m===void 0?function(K,V){var J=typeof K!="string"?"sc":lm(K);Yd[J]=(Yd[J]||0)+1;var k="".concat(J,"-").concat(by(rc+J+Yd[J]));return V?"".concat(V,"-").concat(k):k}(e.displayName,e.parentComponentId):m,b=e.displayName,w=b===void 0?function(K){return Kd(K)?"styled.".concat(K):"Styled(".concat(P1(K),")")}(t):b,S=e.displayName&&e.componentId?"".concat(lm(e.displayName),"-").concat(e.componentId):e.componentId||y,I=o&&a.attrs?a.attrs.concat(p).filter(Boolean):p,T=e.shouldForwardProp;if(o&&a.shouldForwardProp){var N=a.shouldForwardProp;if(e.shouldForwardProp){var j=e.shouldForwardProp;T=function(K,V){return N(K,V)&&j(K,V)}}else T=N}var z=new tb(n,S,o?a.componentStyle:void 0);function W(K,V){return function(J,k,_){var P=J.attrs,A=J.componentStyle,R=J.defaultProps,B=J.foldedComponentIds,C=J.styledComponentId,Se=J.target,je=Ae.useContext(Da),Fe=Af(),Pe=J.shouldForwardProp||Fe.shouldForwardProp,ne=vy(k,je,R)||as,le=function(me,xe,_e){for(var Ce,ke=St(St({},xe),{className:void 0,theme:_e}),He=0;He<me.length;He+=1){var ft=Qi(Ce=me[He])?Ce(ke):Ce;for(var pt in ft)ke[pt]=pt==="className"?Xi(ke[pt],ft[pt]):pt==="style"?St(St({},ke[pt]),ft[pt]):ft[pt]}return xe.className&&(ke.className=Xi(ke.className,xe.className)),ke}(P,k,ne),oe=le.as||Se,M={};for(var X in le)le[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&le.theme===ne||(X==="forwardedAs"?M.as=le.forwardedAs:Pe&&!Pe(X,oe)||(M[X]=le[X]));var de=function(me,xe){var _e=Af(),Ce=me.generateAndInjectStyles(xe,_e.styleSheet,_e.stylis);return Ce}(A,le),Ee=Xi(B,C);return de&&(Ee+=" "+de),le.className&&(Ee+=" "+le.className),M[Kd(oe)&&!yy.has(oe)?"class":"className"]=Ee,M.ref=_,re.createElement(oe,M)}(G,K,V)}W.displayName=w;var G=Ae.forwardRef(W);return G.attrs=I,G.componentStyle=z,G.displayName=w,G.shouldForwardProp=T,G.foldedComponentIds=o?Xi(a.foldedComponentIds,a.styledComponentId):"",G.styledComponentId=S,G.target=o?a.target:t,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(K){this._foldedDefaultProps=o?function(V){for(var J=[],k=1;k<arguments.length;k++)J[k-1]=arguments[k];for(var _=0,P=J;_<P.length;_++)kf(V,P[_],!0);return V}({},a.defaultProps,K):K}}),rp(G,function(){return".".concat(G.styledComponentId)}),u&&Cy(G,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function mm(t,e){for(var n=[t[0]],o=0,a=e.length;o<a;o+=1)n.push(e[o],t[o+1]);return n}var vm=function(t){return Object.assign(t,{isCss:!0})};function Ry(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Qi(t)||ka(t))return vm(di(mm(nc,Pa([t],e,!0))));var o=t;return e.length===0&&o.length===1&&typeof o[0]=="string"?di(o):vm(di(mm(o,e)))}function Rf(t,e,n){if(n===void 0&&(n=as),!e)throw Zi(1,e);var o=function(a){for(var u=[],d=1;d<arguments.length;d++)u[d-1]=arguments[d];return t(e,n,Ry.apply(void 0,Pa([a],u,!1)))};return o.attrs=function(a){return Rf(t,e,St(St({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return Rf(t,e,St(St({},n),a))},o}var Oy=function(t){return Rf(nb,t)},ee=Oy;yy.forEach(function(t){ee[t]=Oy(t)});var ib=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=Ay(e),Ru.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,o,a){var u=a(Pf(di(this.rules,n,o,a)),""),d=this.componentId+e;o.insertRules(d,d,u)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,o,a){e>2&&Ru.registerId(this.componentId+e),this.removeStyles(e,o),this.createStyles(e,n,o,a)},t}();function ob(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var o=Ry.apply(void 0,Pa([t],e,!1)),a="sc-global-".concat(by(JSON.stringify(o))),u=new ib(o,a),d=function(m){var y=Af(),b=Ae.useContext(Da),w=Ae.useRef(y.styleSheet.allocateGSInstance(a)).current;return y.styleSheet.server&&p(w,m,y.styleSheet,b,y.stylis),Ae.useLayoutEffect(function(){if(!y.styleSheet.server)return p(w,m,y.styleSheet,b,y.stylis),function(){return u.removeStyles(w,y.styleSheet)}},[w,m,y.styleSheet,b,y.stylis]),null};function p(m,y,b,w,S){if(u.isStatic)u.renderStyles(m,x1,b,S);else{var I=St(St({},y),{theme:vy(y,w,d.defaultProps)});u.renderStyles(m,I,b,S)}}return Ae.memo(d)}const sb=ee.div`
  width: 1500px;
`,ab=ob`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body, html {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  ul[role='list'], ol[role='list'] {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 400;
  }

  img, picture, svg, video, canvas object {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: cover;
  }

  input, button, textarea, select {
    font: inherit;
    border: none;
    outline: none;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0s;
      animation-iteration-count: 1;
      transition-duration: 0s;
      scroll-behavior: auto;
      transition: none;
    }
  }

  body {
    text-rendering: optimizeSpeed;
    font-family: 'Inter', sans-serif;
    color: ${({theme:t})=>t.colors.darkText};
    background-color: ${({theme:t})=>t.colors.primaryLightBackground};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    overflow-y: ${({$isSidebarOpen:t})=>t?"hidden":""};
  }
  }

  #root {
    min-height: 100vh;
    min-width: 100vw;
    overflow-x: hidden;
  }
`,lb=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-width: 14rem;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    min-width: 9.5rem;
  }

  @media (max-width: ${({theme:t})=>t.mobile}) {
    min-width: 9rem;
  }
`,ub=ee.div`
  overflow: auto;
  position: fixed;
  z-index: 100;
  padding: 2rem 1rem;
  width: 16rem;
  height: 100vh;
  border-right: ${({theme:t})=>t.colors.borderLineColor};
  background-color: ${({theme:t})=>t.colors.primaryLightBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transform: ${({$isSidebarOpen:t})=>t?"translateX(0)":"translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  margin-top: ${({theme:t})=>t.headerSize.desktopHeight};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: ${({theme:t})=>t.headerSize.mobileHeight};
    transform: ${({$isSidebarOpen:t})=>t?"translateX(0)":"translateX(-100)"};
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: ${({theme:t})=>t.headerSize.tabletHeight};
  }
`,cb=ee.aside`
  display: flex;
  flex-direction: column;
`,db=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({theme:t})=>t.colors.darkText};
    font-family: ${({theme:t})=>t.fonts.primaryFont};

    @media (max-width: ${({theme:t})=>t.tablet}) {
      font-size: 1rem;
    }

    @media (max-width: ${({theme:t})=>t.mobile}) {
      font-size: 0.8rem;
    }
  }
`,fb=ee.button`
  height: 88px;
  background: transparent;
  cursor: pointer;
  border-right: ${({$isSidebarOpen:t})=>t?"1px solid rgb(219, 219, 219)":"none"};

  transform: ${({$isSidebarOpen:t})=>t?"rotate(0deg)":"rotate(180deg)"};

  transition: transform 0.3s ease-in-out;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    border: none;
    height: 100%;
  }

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`,pb=ee.header`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 100;
  background-color: ${({theme:t})=>t.colors.primaryLightBackground};
  width: 100%;
  padding: 0 2rem;
  height: ${({theme:t})=>t.headerSize.desktopHeight};
  border-bottom: ${({theme:t})=>t.colors.borderLineColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: ${({theme:t})=>t.mobile}) {
    padding: 0.5rem;
    height: ${({theme:t})=>t.headerSize.mobileHeight};
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    padding: 1rem;
    height: ${({theme:t})=>t.headerSize.tabletHeight};
  }
`,hb=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 3rem;
  width: 100%;
  height: 100%;

  @media (max-width: ${({theme:t})=>t.desktop}) {
    margin-left: 2rem;
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-left: 1rem;
  }

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    margin-left: 0.5rem;
    justify-content: end;
  }
`;var Xd={exports:{}},Jd,ym;function gb(){if(ym)return Jd;ym=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Jd=t,Jd}var Qd,wm;function mb(){if(wm)return Qd;wm=1;var t=gb();function e(){}function n(){}return n.resetWarningCache=e,Qd=function(){function o(d,p,m,y,b,w){if(w!==t){var S=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw S.name="Invariant Violation",S}}o.isRequired=o;function a(){return o}var u={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:a,element:o,elementType:o,instanceOf:a,node:o,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:n,resetWarningCache:e};return u.PropTypes=u,u},Qd}var Sm;function vb(){return Sm||(Sm=1,Xd.exports=mb()()),Xd.exports}var yb=vb();const Pn=Ju(yb),Ny=ee.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 30rem;
  min-width: 6rem;
  height: 3rem;
  margin-right: 2rem;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
  border-radius: 8px;

  @media  (max-width: ${({theme:t})=>t.desktop}) {
    height: 2.5rem;
    margin-right: 1rem;
  }

  @media  (max-width: ${({theme:t})=>t.tablet}) {
    height: 2rem;
  }

  @media  (max-width: ${({theme:t})=>t.mobileL}) {
    display: none;
  }
`,wb=ee.input`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  background-color: transparent;
  font-size: 1rem;
  font-weight: 400;
  text-align: left;
  border-radius: 8px;

  &::placeholder {
    color: ${({theme:t})=>t.colors.lightText};
  }

  @media  (max-width: ${({theme:t})=>t.desktop}) {
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }
`,Sb=ee.img`
  margin-left: 1rem;
  height: 1.5rem;
  width: 1.5rem;

  @media (max-width: ${({theme:t})=>t.desktop}) {
    margin-left: 0.5rem;
    height: 1.2rem;
    width: 1.2rem;
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-left: 0.3rem;
    height: 1rem;
    width: 1rem;
  }
`,bb=()=>F.jsxs(Ny,{children:[F.jsx(Sb,{src:"icon/search_icon.svg","aria-hidden":"true",alt:""}),F.jsx(wb,{"aria-label":"Search on your page",type:"text",placeholder:"Search for anything..."})]}),bm=ee.div`
  display: flex;
`,Eb=ee.div`
  display: flex;
  align-items: end;
  flex-direction: column;
  margin-right: 1.5rem;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-right: 1rem;
  }

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    margin-right: 0.5rem;
  }
`,Ib=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,xb=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
  margin-right: 1rem;
  min-width: 6rem;

  @media (max-width: ${({theme:t})=>t.desktop}) {
    gap: 0.5rem;
    margin-right: 0.5rem;
    min-width: 5rem;
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    gap: 0.3rem;
    margin-right: 0.5rem;
    min-width: 4rem;
  }

  @media (max-width: ${({theme:t})=>t.mobile}) {
    display: none;
  }
`,Cb=ee.button`
  cursor: pointer;
  background-color: transparent;
  width: 1.5rem;
  height: 1.5rem;

  @media (max-width: ${({theme:t})=>t.desktop}) {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    width: 1rem;
    height: 1rem;
  }
`,Em=ee.img``,_b=ee.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  min-width: 13rem;
  white-space: nowrap;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    min-width: 12rem;
  }

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    min-width: 10rem;
  }
`,Tb=ee.span`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,Pb=ee.span`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,kb=ee.img`
  margin-right: 0.8rem;
  object-fit: cover;
  object-position: top;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`,Db=ee.button`
  cursor: pointer;
  background-color: transparent;
`;ee.img`
  width: 1.5rem;
  height: 1.5rem;
`;const Ab=ee.div`
  position: absolute;
  top: 100%;
  right: 3%;
  width: 10rem;
  height: 10rem;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`;ee(Ny)`
  margin: 0;
  border-radius: 0;
  padding: 0;
  display: block;
`;const Aa={mobile:"425px",mobileL:"600px",tablet:"768px",desktop:"1024px",headerSize:{mobileHeight:"3rem",tabletHeight:"4rem",desktopHeight:"5.5rem"},fonts:{primaryFont:"'Inter', sans-serif"},colors:{primaryLightBackground:"#fff",secondaryLightBackground:"#f5f5f5",primaryDarkBackground:"#0D062D",secondaryDarkBackground:"#E0E0E0",hoverBackground:"rgba(80, 48, 229, 0.08)",borderLineColor:"1px solid rgb(219, 219, 219)",darkBlue:" #5030E5",lightBlue:"rgb(34, 1, 179)",darkText:"#0D062D",lightText:"#625F6D"}},Rb=ee.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`,Ob=ee.form`
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 300px;

  @media (max-width: ${Aa.mobileL}) {
    padding: 1.5rem;
  }
  @media (max-width: ${Aa.mobile}) {
    padding: 1rem;
  }
`,Nb=ee.h2`
  color: ${({theme:t})=>t.colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`,Zd=ee.div`
  margin-bottom: 1.2rem;
`,ef=ee.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${Aa.colors.lightBlue};
  }
`,np=ee.button`
  width: 100%;
  padding: 12px;
  background: ${({theme:t})=>t.colors.darkBlue};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({theme:t})=>t.colors.lightBlue};
  }
`,Lb=ee(np)``,Mb=ee.p`
  text-align: center;
  margin-top: 1rem;
  color: ${({theme:t})=>t.colors.lightText};
`,Bb=ee.span`
  color: ${({theme:t})=>t.colors.darkBlue};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,Im=ee.div`
  font-weight: 500;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 3000ms;

  span {
    color: #ff0000b5;
  }
`,jb=ee.div`
  display: flex;
  justify-content: end;
  width: 100%;
`,hs=re.createContext({isLoggedIn:!1,setIsLoggedIn:()=>{},showLoginForm:!1,setShowLoginForm:()=>{},mode:"login",setMode:()=>{},loggedUser:null,setLoggedUser:()=>{}}),Fb=()=>{};var xm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=function(t){const e=[];let n=0;for(let o=0;o<t.length;o++){let a=t.charCodeAt(o);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&o+1<t.length&&(t.charCodeAt(o+1)&64512)===56320?(a=65536+((a&1023)<<10)+(t.charCodeAt(++o)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},Ub=function(t){const e=[];let n=0,o=0;for(;n<t.length;){const a=t[n++];if(a<128)e[o++]=String.fromCharCode(a);else if(a>191&&a<224){const u=t[n++];e[o++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=t[n++],d=t[n++],p=t[n++],m=((a&7)<<18|(u&63)<<12|(d&63)<<6|p&63)-65536;e[o++]=String.fromCharCode(55296+(m>>10)),e[o++]=String.fromCharCode(56320+(m&1023))}else{const u=t[n++],d=t[n++];e[o++]=String.fromCharCode((a&15)<<12|(u&63)<<6|d&63)}}return e.join("")},My={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let a=0;a<t.length;a+=3){const u=t[a],d=a+1<t.length,p=d?t[a+1]:0,m=a+2<t.length,y=m?t[a+2]:0,b=u>>2,w=(u&3)<<4|p>>4;let S=(p&15)<<2|y>>6,I=y&63;m||(I=64,d||(S=64)),o.push(n[b],n[w],n[S],n[I])}return o.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ly(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ub(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let a=0;a<t.length;){const u=n[t.charAt(a++)],p=a<t.length?n[t.charAt(a)]:0;++a;const y=a<t.length?n[t.charAt(a)]:64;++a;const w=a<t.length?n[t.charAt(a)]:64;if(++a,u==null||p==null||y==null||w==null)throw new $b;const S=u<<2|p>>4;if(o.push(S),y!==64){const I=p<<4&240|y>>2;if(o.push(I),w!==64){const T=y<<6&192|w;o.push(T)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $b extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zb=function(t){const e=Ly(t);return My.encodeByteArray(e,!0)},Ou=function(t){return zb(t).replace(/\./g,"")},By=function(t){try{return My.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=()=>Hb().__FIREBASE_DEFAULTS__,Vb=()=>{if(typeof process>"u"||typeof xm>"u")return;const t=xm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&By(t[1]);return e&&JSON.parse(e)},ip=()=>{try{return Fb()||Wb()||Vb()||Gb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jy=t=>{var e,n;return(n=(e=ip())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qb=t=>{const e=jy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),o]:[e.substring(0,n),o]},Fy=()=>{var t;return(t=ip())===null||t===void 0?void 0:t.config},Uy=t=>{var e;return(e=ip())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,o)=>{n?this.reject(n):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,o))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},o=e||"demo-project",a=t.iat||0,u=t.sub||t.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ou(JSON.stringify(n)),Ou(JSON.stringify(d)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function Jb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eE(){const t=jt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tE(){try{return typeof indexedDB=="object"}catch{return!1}}function rE(){return new Promise((t,e)=>{try{let n=!0;const o="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(o);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(o),t(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var u;e(((u=a.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="FirebaseError";class Rn extends Error{constructor(e,n,o){super(n),this.code=e,this.customData=o,this.name=nE,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$a.prototype.create)}}class $a{constructor(e,n,o){this.service=e,this.serviceName=n,this.errors=o}create(e,...n){const o=n[0]||{},a=`${this.service}/${e}`,u=this.errors[e],d=u?iE(u,o):"Error",p=`${this.serviceName}: ${d} (${a}).`;return new Rn(a,p,o)}}function iE(t,e){return t.replace(oE,(n,o)=>{const a=e[o];return a!=null?String(a):`<${o}?>`})}const oE=/\{\$([^}]+)}/g;function sE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function eo(t,e){if(t===e)return!0;const n=Object.keys(t),o=Object.keys(e);for(const a of n){if(!o.includes(a))return!1;const u=t[a],d=e[a];if(Cm(u)&&Cm(d)){if(!eo(u,d))return!1}else if(u!==d)return!1}for(const a of o)if(!n.includes(a))return!1;return!0}function Cm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t){const e=[];for(const[n,o]of Object.entries(t))Array.isArray(o)?o.forEach(a=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function Sa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[a,u]=o.split("=");e[decodeURIComponent(a)]=decodeURIComponent(u)}}),e}function ba(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function aE(t,e){const n=new lE(t,e);return n.subscribe.bind(n)}class lE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,o){let a;if(e===void 0&&n===void 0&&o===void 0)throw new Error("Missing Observer.");uE(e,["next","error","complete"])?a=e:a={next:e,error:n,complete:o},a.next===void 0&&(a.next=tf),a.error===void 0&&(a.error=tf),a.complete===void 0&&(a.complete=tf);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function uE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t){return t&&t._delegate?t._delegate:t}class to{constructor(e,n,o){this.name=e,this.instanceFactory=n,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cE=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const o=new Kb;if(this.instancesDeferred.set(n,o),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&o.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(u){if(a)return null;throw u}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fE(e))try{this.getOrInitializeService({instanceIdentifier:Ki})}catch{}for(const[n,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:a});o.resolve(u)}catch{}}}}clearInstance(e=Ki){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ki){return this.instances.has(e)}getOptions(e=Ki){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:o,options:n});for(const[u,d]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);o===p&&d.resolve(a)}return a}onInit(e,n){var o;const a=this.normalizeInstanceIdentifier(n),u=(o=this.onInitCallbacks.get(a))!==null&&o!==void 0?o:new Set;u.add(e),this.onInitCallbacks.set(a,u);const d=this.instances.get(a);return d&&e(d,a),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const o=this.onInitCallbacks.get(n);if(o)for(const a of o)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:dE(e),options:n}),this.instances.set(e,o),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=Ki){return this.component?this.component.multipleInstances?e:Ki:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function dE(t){return t===Ki?void 0:t}function fE(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new cE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ze||(ze={}));const hE={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},gE=ze.INFO,mE={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},vE=(t,e,...n)=>{if(e<t.logLevel)return;const o=new Date().toISOString(),a=mE[e];if(a)console[a](`[${o}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class op{constructor(e){this.name=e,this._logLevel=gE,this._logHandler=vE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const yE=(t,e)=>e.some(n=>t instanceof n);let _m,Tm;function wE(){return _m||(_m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SE(){return Tm||(Tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $y=new WeakMap,Of=new WeakMap,zy=new WeakMap,rf=new WeakMap,sp=new WeakMap;function bE(t){const e=new Promise((n,o)=>{const a=()=>{t.removeEventListener("success",u),t.removeEventListener("error",d)},u=()=>{n(fi(t.result)),a()},d=()=>{o(t.error),a()};t.addEventListener("success",u),t.addEventListener("error",d)});return e.then(n=>{n instanceof IDBCursor&&$y.set(n,t)}).catch(()=>{}),sp.set(e,t),e}function EE(t){if(Of.has(t))return;const e=new Promise((n,o)=>{const a=()=>{t.removeEventListener("complete",u),t.removeEventListener("error",d),t.removeEventListener("abort",d)},u=()=>{n(),a()},d=()=>{o(t.error||new DOMException("AbortError","AbortError")),a()};t.addEventListener("complete",u),t.addEventListener("error",d),t.addEventListener("abort",d)});Of.set(t,e)}let Nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Of.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fi(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IE(t){Nf=t(Nf)}function xE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const o=t.call(nf(this),e,...n);return zy.set(o,e.sort?e.sort():[e]),fi(o)}:SE().includes(t)?function(...e){return t.apply(nf(this),e),fi($y.get(this))}:function(...e){return fi(t.apply(nf(this),e))}}function CE(t){return typeof t=="function"?xE(t):(t instanceof IDBTransaction&&EE(t),yE(t,wE())?new Proxy(t,Nf):t)}function fi(t){if(t instanceof IDBRequest)return bE(t);if(rf.has(t))return rf.get(t);const e=CE(t);return e!==t&&(rf.set(t,e),sp.set(e,t)),e}const nf=t=>sp.get(t);function _E(t,e,{blocked:n,upgrade:o,blocking:a,terminated:u}={}){const d=indexedDB.open(t,e),p=fi(d);return o&&d.addEventListener("upgradeneeded",m=>{o(fi(d.result),m.oldVersion,m.newVersion,fi(d.transaction),m)}),n&&d.addEventListener("blocked",m=>n(m.oldVersion,m.newVersion,m)),p.then(m=>{u&&m.addEventListener("close",()=>u()),a&&m.addEventListener("versionchange",y=>a(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const TE=["get","getKey","getAll","getAllKeys","count"],PE=["put","add","delete","clear"],of=new Map;function Pm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(of.get(e))return of.get(e);const n=e.replace(/FromIndex$/,""),o=e!==n,a=PE.includes(n);if(!(n in(o?IDBIndex:IDBObjectStore).prototype)||!(a||TE.includes(n)))return;const u=async function(d,...p){const m=this.transaction(d,a?"readwrite":"readonly");let y=m.store;return o&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),a&&m.done]))[0]};return of.set(e,u),u}IE(t=>({...t,get:(e,n,o)=>Pm(e,n)||t.get(e,n,o),has:(e,n)=>!!Pm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(DE(n)){const o=n.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(n=>n).join(" ")}}function DE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lf="@firebase/app",km="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new op("@firebase/app"),AE="@firebase/app-compat",RE="@firebase/analytics-compat",OE="@firebase/analytics",NE="@firebase/app-check-compat",LE="@firebase/app-check",ME="@firebase/auth",BE="@firebase/auth-compat",jE="@firebase/database",FE="@firebase/data-connect",UE="@firebase/database-compat",$E="@firebase/functions",zE="@firebase/functions-compat",HE="@firebase/installations",WE="@firebase/installations-compat",VE="@firebase/messaging",GE="@firebase/messaging-compat",qE="@firebase/performance",KE="@firebase/performance-compat",YE="@firebase/remote-config",XE="@firebase/remote-config-compat",JE="@firebase/storage",QE="@firebase/storage-compat",ZE="@firebase/firestore",eI="@firebase/vertexai",tI="@firebase/firestore-compat",rI="firebase",nI="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="[DEFAULT]",iI={[Lf]:"fire-core",[AE]:"fire-core-compat",[OE]:"fire-analytics",[RE]:"fire-analytics-compat",[LE]:"fire-app-check",[NE]:"fire-app-check-compat",[ME]:"fire-auth",[BE]:"fire-auth-compat",[jE]:"fire-rtdb",[FE]:"fire-data-connect",[UE]:"fire-rtdb-compat",[$E]:"fire-fn",[zE]:"fire-fn-compat",[HE]:"fire-iid",[WE]:"fire-iid-compat",[VE]:"fire-fcm",[GE]:"fire-fcm-compat",[qE]:"fire-perf",[KE]:"fire-perf-compat",[YE]:"fire-rc",[XE]:"fire-rc-compat",[JE]:"fire-gcs",[QE]:"fire-gcs-compat",[ZE]:"fire-fst",[tI]:"fire-fst-compat",[eI]:"fire-vertex","fire-js":"fire-js",[rI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu=new Map,oI=new Map,Bf=new Map;function Dm(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(Bf.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;Bf.set(e,t);for(const n of Nu.values())Dm(n,t);for(const n of oI.values())Dm(n,t);return!0}function ap(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function br(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new $a("app","Firebase",sI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,n,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new to("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=nI;function Hy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const o=Object.assign({name:Mf,automaticDataCollectionEnabled:!1},e),a=o.name;if(typeof a!="string"||!a)throw pi.create("bad-app-name",{appName:String(a)});if(n||(n=Fy()),!n)throw pi.create("no-options");const u=Nu.get(a);if(u){if(eo(n,u.options)&&eo(o,u.config))return u;throw pi.create("duplicate-app",{appName:a})}const d=new pE(a);for(const m of Bf.values())d.addComponent(m);const p=new aI(n,o,d);return Nu.set(a,p),p}function Wy(t=Mf){const e=Nu.get(t);if(!e&&t===Mf&&Fy())return Hy();if(!e)throw pi.create("no-app",{appName:t});return e}function hi(t,e,n){var o;let a=(o=iI[t])!==null&&o!==void 0?o:t;n&&(a+=`-${n}`);const u=a.match(/\s|\//),d=e.match(/\s|\//);if(u||d){const p=[`Unable to register library "${a}" with version "${e}":`];u&&p.push(`library name "${a}" contains illegal characters (whitespace or "/")`),u&&d&&p.push("and"),d&&p.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(p.join(" "));return}ls(new to(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI="firebase-heartbeat-database",uI=1,Ra="firebase-heartbeat-store";let sf=null;function Vy(){return sf||(sf=_E(lI,uI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ra)}catch(n){console.warn(n)}}}}).catch(t=>{throw pi.create("idb-open",{originalErrorMessage:t.message})})),sf}async function cI(t){try{const n=(await Vy()).transaction(Ra),o=await n.objectStore(Ra).get(Gy(t));return await n.done,o}catch(e){if(e instanceof Rn)Dn.warn(e.message);else{const n=pi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function Am(t,e){try{const o=(await Vy()).transaction(Ra,"readwrite");await o.objectStore(Ra).put(e,Gy(t)),await o.done}catch(n){if(n instanceof Rn)Dn.warn(n.message);else{const o=pi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(o.message)}}}function Gy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=1024,fI=30;class pI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new gI(n),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Rm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(d=>d.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats.length>fI){const d=mI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(d,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){Dn.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rm(),{heartbeatsToSend:o,unsentEntries:a}=hI(this._heartbeatsCache.heartbeats),u=Ou(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Dn.warn(n),""}}}function Rm(){return new Date().toISOString().substring(0,10)}function hI(t,e=dI){const n=[];let o=t.slice();for(const a of t){const u=n.find(d=>d.agent===a.agent);if(u){if(u.dates.push(a.date),Om(n)>e){u.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Om(n)>e){n.pop();break}o=o.slice(1)}return{heartbeatsToSend:n,unsentEntries:o}}class gI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tE()?rE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Am(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Om(t){return Ou(JSON.stringify({version:2,heartbeats:t})).length}function mI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let o=1;o<t.length;o++)t[o].date<n&&(n=t[o].date,e=o);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vI(t){ls(new to("platform-logger",e=>new kE(e),"PRIVATE")),ls(new to("heartbeat",e=>new pI(e),"PRIVATE")),hi(Lf,km,t),hi(Lf,km,"esm2017"),hi("fire-js","")}vI("");function qy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yI=qy,Ky=new $a("auth","Firebase",qy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new op("@firebase/auth");function wI(t,...e){Lu.logLevel<=ze.WARN&&Lu.warn(`Auth (${gs}): ${t}`,...e)}function Iu(t,...e){Lu.logLevel<=ze.ERROR&&Lu.error(`Auth (${gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,...e){throw lp(t,...e)}function rn(t,...e){return lp(t,...e)}function Yy(t,e,n){const o=Object.assign(Object.assign({},yI()),{[e]:n});return new $a("auth","Firebase",o).create(e,{appName:t.name})}function kn(t){return Yy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lp(t,...e){if(typeof t!="string"){const n=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=t.name),t._errorFactory.create(n,...o)}return Ky.create(t,...e)}function be(t,e,...n){if(!t)throw lp(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Iu(e),new Error(e)}function An(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SI(){return Nm()==="http:"||Nm()==="https:"}function Nm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SI()||Qb()||"connection"in navigator)?navigator.onLine:!0}function EI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=Xb()||Zb()}get(){return bI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{static initialize(e,n,o){this.fetchImpl=e,n&&(this.headersImpl=n),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],CI=new Ha(3e4,6e4);function wi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Si(t,e,n,o,a={}){return Jy(t,a,async()=>{let u={},d={};o&&(e==="GET"?d=o:u={body:JSON.stringify(o)});const p=za(Object.assign({key:t.config.apiKey},d)).slice(1),m=await t._getAdditionalHeaders();m["Content-Type"]="application/json",t.languageCode&&(m["X-Firebase-Locale"]=t.languageCode);const y=Object.assign({method:e,headers:m},u);return Jb()||(y.referrerPolicy="no-referrer"),Xy.fetch()(await Qy(t,t.config.apiHost,n,p),y)})}async function Jy(t,e,n){t._canInitEmulator=!1;const o=Object.assign(Object.assign({},II),e);try{const a=new TI(t),u=await Promise.race([n(),a.promise]);a.clearNetworkTimeout();const d=await u.json();if("needConfirmation"in d)throw fu(t,"account-exists-with-different-credential",d);if(u.ok&&!("errorMessage"in d))return d;{const p=u.ok?d.errorMessage:d.error.message,[m,y]=p.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw fu(t,"credential-already-in-use",d);if(m==="EMAIL_EXISTS")throw fu(t,"email-already-in-use",d);if(m==="USER_DISABLED")throw fu(t,"user-disabled",d);const b=o[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Yy(t,b,y);Wr(t,b)}}catch(a){if(a instanceof Rn)throw a;Wr(t,"network-request-failed",{message:String(a)})}}async function Wa(t,e,n,o,a={}){const u=await Si(t,e,n,o,a);return"mfaPendingCredential"in u&&Wr(t,"multi-factor-auth-required",{_serverResponse:u}),u}async function Qy(t,e,n,o){const a=`${e}${n}?${o}`,u=t,d=u.config.emulator?up(t.config,a):`${t.config.apiScheme}://${a}`;return xI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(d).toString():d}function _I(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class TI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,o)=>{this.timer=setTimeout(()=>o(rn(this.auth,"network-request-failed")),CI.get())})}}function fu(t,e,n){const o={appName:t.name};n.email&&(o.email=n.email),n.phoneNumber&&(o.phoneNumber=n.phoneNumber);const a=rn(t,e,o);return a.customData._tokenResponse=n,a}function Lm(t){return t!==void 0&&t.enterprise!==void 0}class PI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _I(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function kI(t,e){return Si(t,"GET","/v2/recaptchaConfig",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e){return Si(t,"POST","/v1/accounts:delete",e)}async function Mu(t,e){return Si(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function AI(t,e=!1){const n=On(t),o=await n.getIdToken(e),a=cp(o);be(a&&a.exp&&a.auth_time&&a.iat,n.auth,"internal-error");const u=typeof a.firebase=="object"?a.firebase:void 0,d=u==null?void 0:u.sign_in_provider;return{claims:a,token:o,authTime:Ia(af(a.auth_time)),issuedAtTime:Ia(af(a.iat)),expirationTime:Ia(af(a.exp)),signInProvider:d||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function af(t){return Number(t)*1e3}function cp(t){const[e,n,o]=t.split(".");if(e===void 0||n===void 0||o===void 0)return Iu("JWT malformed, contained fewer than 3 sections"),null;try{const a=By(n);return a?JSON.parse(a):(Iu("Failed to decode base64 JWT payload"),null)}catch(a){return Iu("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function Mm(t){const e=cp(t);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oa(t,e,n=!1){if(n)return e;try{return await e}catch(o){throw o instanceof Rn&&RI(o)&&t.auth.currentUser===t&&await t.auth.signOut(),o}}function RI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const a=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ia(this.lastLoginAt),this.creationTime=Ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bu(t){var e;const n=t.auth,o=await t.getIdToken(),a=await Oa(t,Mu(n,{idToken:o}));be(a==null?void 0:a.users.length,n,"internal-error");const u=a.users[0];t._notifyReloadListener(u);const d=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?Zy(u.providerUserInfo):[],p=LI(t.providerData,d),m=t.isAnonymous,y=!(t.email&&u.passwordHash)&&!(p!=null&&p.length),b=m?y:!1,w={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new Ff(u.createdAt,u.lastLoginAt),isAnonymous:b};Object.assign(t,w)}async function NI(t){const e=On(t);await Bu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LI(t,e){return[...t.filter(o=>!e.some(a=>a.providerId===o.providerId)),...e]}function Zy(t){return t.map(e=>{var{providerId:n}=e,o=Jf(e,["providerId"]);return{providerId:n,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(t,e){const n=await Jy(t,{},async()=>{const o=za({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:u}=t.config,d=await Qy(t,a,"/v1/token",`key=${u}`),p=await t._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Xy.fetch()(d,{method:"POST",headers:p,body:o})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function BI(t,e){return Si(t,"POST","/v2/accounts:revokeToken",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){be(e.length!==0,"internal-error");const n=Mm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:o,refreshToken:a,expiresIn:u}=await MI(e,n);this.updateTokensAndExpiration(o,a,Number(u))}updateTokensAndExpiration(e,n,o){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,n){const{refreshToken:o,accessToken:a,expirationTime:u}=n,d=new ts;return o&&(be(typeof o=="string","internal-error",{appName:e}),d.refreshToken=o),a&&(be(typeof a=="string","internal-error",{appName:e}),d.accessToken=a),u&&(be(typeof u=="number","internal-error",{appName:e}),d.expirationTime=u),d}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){be(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ur{constructor(e){var{uid:n,auth:o,stsTokenManager:a}=e,u=Jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new OI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=o,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Ff(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const n=await Oa(this,this.stsTokenManager.getToken(this.auth,e));return be(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return AI(this,e)}reload(){return NI(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),n&&await Bu(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(br(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await Oa(this,DI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var o,a,u,d,p,m,y,b;const w=(o=n.displayName)!==null&&o!==void 0?o:void 0,S=(a=n.email)!==null&&a!==void 0?a:void 0,I=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,T=(d=n.photoURL)!==null&&d!==void 0?d:void 0,N=(p=n.tenantId)!==null&&p!==void 0?p:void 0,j=(m=n._redirectEventId)!==null&&m!==void 0?m:void 0,z=(y=n.createdAt)!==null&&y!==void 0?y:void 0,W=(b=n.lastLoginAt)!==null&&b!==void 0?b:void 0,{uid:G,emailVerified:K,isAnonymous:V,providerData:J,stsTokenManager:k}=n;be(G&&k,e,"internal-error");const _=ts.fromJSON(this.name,k);be(typeof G=="string",e,"internal-error"),oi(w,e.name),oi(S,e.name),be(typeof K=="boolean",e,"internal-error"),be(typeof V=="boolean",e,"internal-error"),oi(I,e.name),oi(T,e.name),oi(N,e.name),oi(j,e.name),oi(z,e.name),oi(W,e.name);const P=new Ur({uid:G,auth:e,email:S,emailVerified:K,displayName:w,isAnonymous:V,photoURL:T,phoneNumber:I,tenantId:N,stsTokenManager:_,createdAt:z,lastLoginAt:W});return J&&Array.isArray(J)&&(P.providerData=J.map(A=>Object.assign({},A))),j&&(P._redirectEventId=j),P}static async _fromIdTokenResponse(e,n,o=!1){const a=new ts;a.updateFromServerResponse(n);const u=new Ur({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:o});return await Bu(u),u}static async _fromGetAccountInfoResponse(e,n,o){const a=n.users[0];be(a.localId!==void 0,"internal-error");const u=a.providerUserInfo!==void 0?Zy(a.providerUserInfo):[],d=!(a.email&&a.passwordHash)&&!(u!=null&&u.length),p=new ts;p.updateFromIdToken(o);const m=new Ur({uid:a.localId,auth:e,stsTokenManager:p,isAnonymous:d}),y={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:u,metadata:new Ff(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(u!=null&&u.length)};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Map;function Tn(t){An(t instanceof Function,"Expected a class definition");let e=Bm.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Bm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}e0.type="NONE";const jm=e0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xu(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,o){this.persistence=e,this.auth=n,this.userKey=o;const{config:a,name:u}=this.auth;this.fullUserKey=xu(this.userKey,a.apiKey,u),this.fullPersistenceKey=xu("persistence",a.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Mu(this.auth,{idToken:e}).catch(()=>{});return n?Ur._fromGetAccountInfoResponse(this.auth,n,e):null}return Ur._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,o="authUser"){if(!n.length)return new rs(Tn(jm),e,o);const a=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=a[0]||Tn(jm);const d=xu(o,e.config.apiKey,e.name);let p=null;for(const y of n)try{const b=await y._get(d);if(b){let w;if(typeof b=="string"){const S=await Mu(e,{idToken:b}).catch(()=>{});if(!S)break;w=await Ur._fromGetAccountInfoResponse(e,S,b)}else w=Ur._fromJSON(e,b);y!==u&&(p=w),u=y;break}}catch{}const m=a.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!m.length?new rs(u,e,o):(u=m[0],p&&await u._set(d,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(d)}catch{}})),new rs(u,e,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(t0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(s0(e))return"Blackberry";if(a0(e))return"Webos";if(r0(e))return"Safari";if((e.includes("chrome/")||n0(e))&&!e.includes("edge/"))return"Chrome";if(o0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=t.match(n);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function t0(t=jt()){return/firefox\//i.test(t)}function r0(t=jt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function n0(t=jt()){return/crios\//i.test(t)}function i0(t=jt()){return/iemobile/i.test(t)}function o0(t=jt()){return/android/i.test(t)}function s0(t=jt()){return/blackberry/i.test(t)}function a0(t=jt()){return/webos/i.test(t)}function dp(t=jt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jI(t=jt()){var e;return dp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FI(){return eE()&&document.documentMode===10}function l0(t=jt()){return dp(t)||o0(t)||a0(t)||s0(t)||/windows phone/i.test(t)||i0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(t,e=[]){let n;switch(t){case"Browser":n=Fm(jt());break;case"Worker":n=`${Fm(jt())}-${t}`;break;default:n=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${o}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const o=u=>new Promise((d,p)=>{try{const m=e(u);d(m)}catch(m){p(m)}});o.onAbort=n,this.queue.push(o);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const o of this.queue)await o(e),o.onAbort&&n.push(o.onAbort)}catch(o){n.reverse();for(const a of n)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t,e={}){return Si(t,"GET","/v2/passwordPolicy",wi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=6;class HI{constructor(e){var n,o,a,u;const d=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=d.minPasswordLength)!==null&&n!==void 0?n:zI,d.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=d.maxPasswordLength),d.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=d.containsLowercaseCharacter),d.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=d.containsUppercaseCharacter),d.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=d.containsNumericCharacter),d.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=d.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(o=e.allowedNonAlphanumericCharacters)===null||o===void 0?void 0:o.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,o,a,u,d,p;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(n=m.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(o=m.meetsMaxPasswordLength)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(u=m.containsUppercaseLetter)!==null&&u!==void 0?u:!0),m.isValid&&(m.isValid=(d=m.containsNumericCharacter)!==null&&d!==void 0?d:!0),m.isValid&&(m.isValid=(p=m.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),m}validatePasswordLengthOptions(e,n){const o=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;o&&(n.meetsMinPasswordLength=e.length>=o),a&&(n.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let o;for(let a=0;a<e.length;a++)o=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(n,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,n,o,a,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(e,n,o,a){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=o,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Um(this),this.idTokenSubscription=new Um(this),this.beforeStateQueue=new UI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ky,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Tn(n)),this._initializationPromise=this.queue(async()=>{var o,a,u;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),(o=this._resolvePersistenceManagerAvailable)===null||o===void 0||o.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Mu(this,{idToken:e}),o=await Ur._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(o)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(br(this.app)){const d=this.app.settings.authIdToken;return d?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(d).then(p,p))}):this.directlySetCurrentUser(null)}const o=await this.assertedPersistence.getCurrentUser();let a=o,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const d=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,p=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!d||d===p)&&(m!=null&&m.user)&&(a=m.user,u=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(a)}catch(d){a=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(d))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=EI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(br(this.app))return Promise.reject(kn(this));const n=e?On(e):null;return n&&be(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return br(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return br(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Tn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $I(this),n=new HI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $a("auth","Firebase",e())}onAuthStateChanged(e,n,o){return this.registerStateListener(this.authStateSubscription,e,n,o)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,o){return this.registerStateListener(this.idTokenSubscription,e,n,o)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(o.tenantId=this.tenantId),await BI(this,o)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const o=await this.getOrInitRedirectPersistenceManager(n);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Tn(e)||this._popupRedirectResolver;be(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[Tn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,o;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,o,a){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let d=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(p,this,"internal-error"),p.then(()=>{d||u(this.currentUser)}),typeof n=="function"){const m=e.addObserver(n,o,a);return()=>{d=!0,m()}}else{const m=e.addObserver(n);return()=>{d=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const o=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());o&&(n["X-Firebase-Client"]=o);const a=await this._getAppCheckToken();return a&&(n["X-Firebase-AppCheck"]=a),n}async _getAppCheckToken(){var e;if(br(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oo(t){return On(t)}class Um{constructor(e){this.auth=e,this.observer=null,this.addObserver=aE(n=>this.observer=n)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function VI(t){ic=t}function c0(t){return ic.loadJS(t)}function GI(){return ic.recaptchaEnterpriseScript}function qI(){return ic.gapiScript}function KI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class YI{constructor(){this.enterprise=new XI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const JI="recaptcha-enterprise",d0="NO_RECAPTCHA";class QI{constructor(e){this.type=JI,this.auth=oo(e)}async verify(e="verify",n=!1){async function o(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(d,p)=>{kI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new PI(m);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,d(y.siteKey)}}).catch(m=>{p(m)})})}function a(u,d,p){const m=window.grecaptcha;Lm(m)?m.enterprise.ready(()=>{m.enterprise.execute(u,{action:e}).then(y=>{d(y)}).catch(()=>{d(d0)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new YI().execute("siteKey",{action:"verify"}):new Promise((u,d)=>{o(this.auth).then(p=>{if(!n&&Lm(window.grecaptcha))a(p,u,d);else{if(typeof window>"u"){d(new Error("RecaptchaVerifier is only supported in browser"));return}let m=GI();m.length!==0&&(m+=p),c0(m).then(()=>{a(p,u,d)}).catch(y=>{d(y)})}}).catch(p=>{d(p)})})}}async function $m(t,e,n,o=!1,a=!1){const u=new QI(t);let d;if(a)d=d0;else try{d=await u.verify(n)}catch{d=await u.verify(n,!0)}const p=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const m=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:y,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const m=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:d,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return o?Object.assign(p,{captchaResp:d}):Object.assign(p,{captchaResponse:d}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Uf(t,e,n,o,a){var u;if(!((u=t._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const d=await $m(t,e,n,n==="getOobCode");return o(t,d)}else return o(t,e).catch(async d=>{if(d.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await $m(t,e,n,n==="getOobCode");return o(t,p)}else return Promise.reject(d)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){const n=ap(t,"auth");if(n.isInitialized()){const a=n.getImmediate(),u=n.getOptions();if(eo(u,e??{}))return a;Wr(a,"already-initialized")}return n.initialize({options:e})}function ex(t,e){const n=(e==null?void 0:e.persistence)||[],o=(Array.isArray(n)?n:[n]).map(Tn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(o,e==null?void 0:e.popupRedirectResolver)}function tx(t,e,n){const o=oo(t);be(/^https?:\/\//.test(e),o,"invalid-emulator-scheme");const a=!1,u=f0(e),{host:d,port:p}=rx(e),m=p===null?"":`:${p}`,y={url:`${u}//${d}${m}/`},b=Object.freeze({host:d,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!o._canInitEmulator){be(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),be(eo(y,o.config.emulator)&&eo(b,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=y,o.emulatorConfig=b,o.settings.appVerificationDisabledForTesting=!0,nx()}function f0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rx(t){const e=f0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const o=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(o);if(a){const u=a[1];return{host:u,port:zm(o.substr(u.length+1))}}else{const[u,d]=o.split(":");return{host:u,port:zm(d)}}}function zm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function ix(t,e){return Si(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ox(t,e){return Wa(t,"POST","/v1/accounts:signInWithPassword",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sx(t,e){return Wa(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}async function ax(t,e){return Wa(t,"POST","/v1/accounts:signInWithEmailLink",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na extends fp{constructor(e,n,o,a=null){super("password",o),this._email=e,this._password=n,this._tenantId=a}static _fromEmailAndPassword(e,n){return new Na(e,n,"password")}static _fromEmailAndCode(e,n,o=null){return new Na(e,n,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uf(e,n,"signInWithPassword",ox);case"emailLink":return sx(e,{email:this._email,oobCode:this._password});default:Wr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const o={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uf(e,o,"signUpPassword",ix);case"emailLink":return ax(e,{idToken:n,email:this._email,oobCode:this._password});default:Wr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return Wa(t,"POST","/v1/accounts:signInWithIdp",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="http://localhost";class ro extends fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ro(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:a}=n,u=Jf(n,["providerId","signInMethod"]);if(!o||!a)return null;const d=new ro(o,a);return d.idToken=u.idToken||void 0,d.accessToken=u.accessToken||void 0,d.secret=u.secret,d.nonce=u.nonce,d.pendingToken=u.pendingToken||null,d}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const o=this.buildRequest();return o.idToken=n,ns(e,o)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:lx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=za(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cx(t){const e=Sa(ba(t)).link,n=e?Sa(ba(e)).deep_link_id:null,o=Sa(ba(t)).deep_link_id;return(o?Sa(ba(o)).link:null)||o||n||e||t}class pp{constructor(e){var n,o,a,u,d,p;const m=Sa(ba(e)),y=(n=m.apiKey)!==null&&n!==void 0?n:null,b=(o=m.oobCode)!==null&&o!==void 0?o:null,w=ux((a=m.mode)!==null&&a!==void 0?a:null);be(y&&b&&w,"argument-error"),this.apiKey=y,this.operation=w,this.code=b,this.continueUrl=(u=m.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(d=m.lang)!==null&&d!==void 0?d:null,this.tenantId=(p=m.tenantId)!==null&&p!==void 0?p:null}static parseLink(e){const n=cx(e);try{return new pp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.providerId=ms.PROVIDER_ID}static credential(e,n){return Na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const o=pp.parseLink(n);return be(o,"argument-error"),Na._fromEmailAndCode(e,o.code,o.tenantId)}}ms.PROVIDER_ID="password";ms.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ms.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends p0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends Va{constructor(){super("facebook.com")}static credential(e){return ro._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends Va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ro._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:o}=e;if(!n&&!o)return null;try{return li.credential(n,o)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends Va{constructor(){super("github.com")}static credential(e){return ro._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends Va{constructor(){super("twitter.com")}static credential(e,n){return ro._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:o}=e;if(!n||!o)return null;try{return ci.credential(n,o)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dx(t,e){return Wa(t,"POST","/v1/accounts:signUp",wi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,o,a=!1){const u=await Ur._fromIdTokenResponse(e,o,a),d=Hm(o);return new no({user:u,providerId:d,_tokenResponse:o,operationType:n})}static async _forOperation(e,n,o){await e._updateTokensIfNecessary(o,!0);const a=Hm(o);return new no({user:e,providerId:a,_tokenResponse:o,operationType:n})}}function Hm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju extends Rn{constructor(e,n,o,a){var u;super(n.code,n.message),this.operationType=o,this.user=a,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(e,n,o,a){return new ju(e,n,o,a)}}function h0(t,e,n,o){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(t,u,e,o):u})}async function fx(t,e,n=!1){const o=await Oa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return no._forOperation(t,"link",o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function px(t,e,n=!1){const{auth:o}=t;if(br(o.app))return Promise.reject(kn(o));const a="reauthenticate";try{const u=await Oa(t,h0(o,a,e,t),n);be(u.idToken,o,"internal-error");const d=cp(u.idToken);be(d,o,"internal-error");const{sub:p}=d;return be(t.uid===p,o,"user-mismatch"),no._forOperation(t,a,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Wr(o,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e,n=!1){if(br(t.app))return Promise.reject(kn(t));const o="signIn",a=await h0(t,o,e),u=await no._fromIdTokenResponse(t,o,a);return n||await t._updateCurrentUser(u.user),u}async function hx(t,e){return g0(oo(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t){const e=oo(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gx(t,e,n){if(br(t.app))return Promise.reject(kn(t));const o=oo(t),d=await Uf(o,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",dx).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&m0(t),m}),p=await no._fromIdTokenResponse(o,"signIn",d);return await o._updateCurrentUser(p.user),p}function mx(t,e,n){return br(t.app)?Promise.reject(kn(t)):hx(On(t),ms.credential(e,n)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&m0(t),o})}function vx(t,e,n,o){return On(t).onIdTokenChanged(e,n,o)}function yx(t,e,n){return On(t).beforeAuthStateChanged(e,n)}function wx(t,e,n,o){return On(t).onAuthStateChanged(e,n,o)}function Sx(t){return On(t).signOut()}const Fu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fu,"1"),this.storage.removeItem(Fu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=1e3,Ex=10;class y0 extends v0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=l0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const o=this.storage.getItem(n),a=this.localCache[n];o!==a&&e(n,a,o)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((d,p,m)=>{this.notifyListeners(d,m)});return}const o=e.key;n?this.detachListener():this.stopPolling();const a=()=>{const d=this.storage.getItem(o);!n&&this.localCache[o]===d||this.notifyListeners(o,d)},u=this.storage.getItem(o);FI()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,Ex):a()}notifyListeners(e,n){this.localCache[e]=n;const o=this.listeners[e];if(o)for(const a of Array.from(o))a(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:o}),!0)})},bx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}y0.type="LOCAL";const Ix=y0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0 extends v0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}w0.type="SESSION";const S0=w0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(a=>a.isListeningto(e));if(n)return n;const o=new oc(e);return this.receivers.push(o),o}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:o,eventType:a,data:u}=n.data,d=this.handlersMap[a];if(!(d!=null&&d.size))return;n.ports[0].postMessage({status:"ack",eventId:o,eventType:a});const p=Array.from(d).map(async y=>y(n.origin,u)),m=await xx(p);n.ports[0].postMessage({status:"done",eventId:o,eventType:a,response:m})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t="",e=10){let n="";for(let o=0;o<e;o++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,o=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let u,d;return new Promise((p,m)=>{const y=hp("",20);a.port1.start();const b=setTimeout(()=>{m(new Error("unsupported_event"))},o);d={messageChannel:a,onMessage(w){const S=w;if(S.data.eventId===y)switch(S.data.status){case"ack":clearTimeout(b),u=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(S.data.response);break;default:clearTimeout(b),clearTimeout(u),m(new Error("invalid_response"));break}}},this.handlers.add(d),a.port1.addEventListener("message",d.onMessage),this.target.postMessage({eventType:e,eventId:y,data:n},[a.port2])}).finally(()=>{d&&this.removeMessageHandler(d)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(){return window}function _x(t){nn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function Tx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Px(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kx(){return b0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="firebaseLocalStorageDb",Dx=1,Uu="firebaseLocalStorage",I0="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function Ax(){const t=indexedDB.deleteDatabase(E0);return new Ga(t).toPromise()}function $f(){const t=indexedDB.open(E0,Dx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const o=t.result;try{o.createObjectStore(Uu,{keyPath:I0})}catch(a){n(a)}}),t.addEventListener("success",async()=>{const o=t.result;o.objectStoreNames.contains(Uu)?e(o):(o.close(),await Ax(),e(await $f()))})})}async function Wm(t,e,n){const o=sc(t,!0).put({[I0]:e,value:n});return new Ga(o).toPromise()}async function Rx(t,e){const n=sc(t,!1).get(e),o=await new Ga(n).toPromise();return o===void 0?null:o.value}function Vm(t,e){const n=sc(t,!0).delete(e);return new Ga(n).toPromise()}const Ox=800,Nx=3;class x0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $f(),this.db)}async _withRetries(e){let n=0;for(;;)try{const o=await this._openDb();return await e(o)}catch(o){if(n++>Nx)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return b0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(kx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Tx(),!this.activeServiceWorker)return;this.sender=new Cx(this.activeServiceWorker);const o=await this.sender._send("ping",{},800);o&&!((e=o[0])===null||e===void 0)&&e.fulfilled&&!((n=o[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Px()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $f();return await Wm(e,Fu,"1"),await Vm(e,Fu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(o=>Wm(o,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(o=>Rx(o,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const u=sc(a,!1).getAll();return new Ga(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],o=new Set;if(e.length!==0)for(const{fbase_key:a,value:u}of e)o.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(u)&&(this.notifyListeners(a,u),n.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!o.has(a)&&(this.notifyListeners(a,null),n.push(a));return n}notifyListeners(e,n){this.localCache[e]=n;const o=this.listeners[e];if(o)for(const a of Array.from(o))a(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}x0.type="LOCAL";const Lx=x0;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t,e){return e?Tn(e):(be(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp extends fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Bx(t){return g0(t.auth,new gp(t),t.bypassAuthState)}function jx(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),px(n,new gp(t),t.bypassAuthState)}async function Fx(t){const{auth:e,user:n}=t;return be(n,e,"internal-error"),fx(n,new gp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,o,a,u=!1){this.auth=e,this.resolver=o,this.user=a,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:o,postBody:a,tenantId:u,error:d,type:p}=e;if(d){this.reject(d);return}const m={auth:this.auth,requestUri:n,sessionId:o,tenantId:u||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Bx;case"linkViaPopup":case"linkViaRedirect":return Fx;case"reauthViaPopup":case"reauthViaRedirect":return jx;default:Wr(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new Ha(2e3,1e4);class es extends C0{constructor(e,n,o,a,u){super(e,n,a,u),this.provider=o,this.authWindow=null,this.pollId=null,es.currentPopupAction&&es.currentPopupAction.cancel(),es.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,es.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,o;if(!((o=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||o===void 0)&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ux.get())};e()}}es.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $x="pendingRedirect",Cu=new Map;class zx extends C0{constructor(e,n,o=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,o),this.eventId=null}async execute(){let e=Cu.get(this.auth._key());if(!e){try{const o=await Hx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(o)}catch(n){e=()=>Promise.reject(n)}Cu.set(this.auth._key(),e)}return this.bypassAuthState||Cu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Hx(t,e){const n=Gx(e),o=Vx(t);if(!await o._isAvailable())return!1;const a=await o._get(n)==="true";return await o._remove(n),a}function Wx(t,e){Cu.set(t._key(),e)}function Vx(t){return Tn(t._redirectPersistence)}function Gx(t){return xu($x,t.config.apiKey,t.name)}async function qx(t,e,n=!1){if(br(t.app))return Promise.reject(kn(t));const o=oo(t),a=Mx(o,e),d=await new zx(o,a,n).execute();return d&&!n&&(delete d.user._redirectEventId,await o._persistUserIfCurrent(d.user),await o._setRedirectUser(null,e)),d}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=10*60*1e3;class Yx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(e,o)&&(n=!0,this.sendToConsumer(e,o),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var o;if(e.error&&!_0(e)){const a=((o=e.error.code)===null||o===void 0?void 0:o.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,a))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const o=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&o}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gm(e))}saveEventToCache(e){this.cachedEventUids.add(Gm(e)),this.lastProcessedEventTime=Date.now()}}function Gm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jx(t,e={}){return Si(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zx=/^https?/;async function eC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Jx(t);for(const n of e)try{if(tC(n))return}catch{}Wr(t,"unauthorized-domain")}function tC(t){const e=jf(),{protocol:n,hostname:o}=new URL(e);if(t.startsWith("chrome-extension://")){const d=new URL(t);return d.hostname===""&&o===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&d.hostname===o}if(!Zx.test(n))return!1;if(Qx.test(t))return o===t;const a=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(o)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=new Ha(3e4,6e4);function qm(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nC(t){return new Promise((e,n)=>{var o,a,u;function d(){qm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qm(),n(rn(t,"network-request-failed"))},timeout:rC.get()})}if(!((a=(o=nn().gapi)===null||o===void 0?void 0:o.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((u=nn().gapi)===null||u===void 0)&&u.load)d();else{const p=KI("iframefcb");return nn()[p]=()=>{gapi.load?d():n(rn(t,"network-request-failed"))},c0(`${qI()}?onload=${p}`).catch(m=>n(m))}}).catch(e=>{throw _u=null,e})}let _u=null;function iC(t){return _u=_u||nC(t),_u}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=new Ha(5e3,15e3),sC="__/auth/iframe",aC="emulator/auth/iframe",lC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cC(t){const e=t.config;be(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?up(e,aC):`https://${t.config.authDomain}/${sC}`,o={apiKey:e.apiKey,appName:t.name,v:gs},a=uC.get(t.config.apiHost);a&&(o.eid=a);const u=t._getFrameworks();return u.length&&(o.fw=u.join(",")),`${n}?${za(o).slice(1)}`}async function dC(t){const e=await iC(t),n=nn().gapi;return be(n,t,"internal-error"),e.open({where:document.body,url:cC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lC,dontclear:!0},o=>new Promise(async(a,u)=>{await o.restyle({setHideOnLeave:!1});const d=rn(t,"network-request-failed"),p=nn().setTimeout(()=>{u(d)},oC.get());function m(){nn().clearTimeout(p),a(o)}o.ping(m).then(m,()=>{u(d)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},pC=500,hC=600,gC="_blank",mC="http://localhost";class Km{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vC(t,e,n,o=pC,a=hC){const u=Math.max((window.screen.availHeight-a)/2,0).toString(),d=Math.max((window.screen.availWidth-o)/2,0).toString();let p="";const m=Object.assign(Object.assign({},fC),{width:o.toString(),height:a.toString(),top:u,left:d}),y=jt().toLowerCase();n&&(p=n0(y)?gC:n),t0(y)&&(e=e||mC,m.scrollbars="yes");const b=Object.entries(m).reduce((S,[I,T])=>`${S}${I}=${T},`,"");if(jI(y)&&p!=="_self")return yC(e||"",p),new Km(null);const w=window.open(e||"",p,b);be(w,t,"popup-blocked");try{w.focus()}catch{}return new Km(w)}function yC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC="__/auth/handler",SC="emulator/auth/handler",bC=encodeURIComponent("fac");async function Ym(t,e,n,o,a,u){be(t.config.authDomain,t,"auth-domain-config-required"),be(t.config.apiKey,t,"invalid-api-key");const d={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:o,v:gs,eventId:a};if(e instanceof p0){e.setDefaultLanguage(t.languageCode),d.providerId=e.providerId||"",sE(e.getCustomParameters())||(d.customParameters=JSON.stringify(e.getCustomParameters()));for(const[b,w]of Object.entries({}))d[b]=w}if(e instanceof Va){const b=e.getScopes().filter(w=>w!=="");b.length>0&&(d.scopes=b.join(","))}t.tenantId&&(d.tid=t.tenantId);const p=d;for(const b of Object.keys(p))p[b]===void 0&&delete p[b];const m=await t._getAppCheckToken(),y=m?`#${bC}=${encodeURIComponent(m)}`:"";return`${EC(t)}?${za(p).slice(1)}${y}`}function EC({config:t}){return t.emulator?up(t,SC):`https://${t.authDomain}/${wC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf="webStorageSupport";class IC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=S0,this._completeRedirectFn=qx,this._overrideRedirectResult=Wx}async _openPopup(e,n,o,a){var u;An((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const d=await Ym(e,n,o,jf(),a);return vC(e,d,hp())}async _openRedirect(e,n,o,a){await this._originValidation(e);const u=await Ym(e,n,o,jf(),a);return _x(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:a,promise:u}=this.eventManagers[n];return a?Promise.resolve(a):(An(u,"If manager is not set, promise should be"),u)}const o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch(()=>{delete this.eventManagers[n]}),o}async initAndGetManager(e){const n=await dC(e),o=new Yx(e);return n.register("authEvent",a=>(be(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:o.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:o},this.iframes[e._key()]=n,o}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(lf,{type:lf},a=>{var u;const d=(u=a==null?void 0:a[0])===null||u===void 0?void 0:u[lf];d!==void 0&&n(!!d),Wr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return l0()||r0()||dp()}}const xC=IC;var Xm="@firebase/auth",Jm="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(o=>{e((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TC(t){ls(new to("auth",(e,{options:n})=>{const o=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:d,authDomain:p}=o.options;be(d&&!d.includes(":"),"invalid-api-key",{appName:o.name});const m={apiKey:d,authDomain:p,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u0(t)},y=new WI(o,a,u,m);return ex(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,o)=>{e.getProvider("auth-internal").initialize()})),ls(new to("auth-internal",e=>{const n=oo(e.getProvider("auth").getImmediate());return(o=>new CC(o))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hi(Xm,Jm,_C(t)),hi(Xm,Jm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC=5*60,kC=Uy("authIdTokenMaxAge")||PC;let Qm=null;const DC=t=>async e=>{const n=e&&await e.getIdTokenResult(),o=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(o&&o>kC)return;const a=n==null?void 0:n.token;Qm!==a&&(Qm=a,await fetch(t,{method:a?"POST":"DELETE",headers:a?{Authorization:`Bearer ${a}`}:{}}))};function AC(t=Wy()){const e=ap(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ZI(t,{popupRedirectResolver:xC,persistence:[Lx,Ix,S0]}),o=Uy("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(o,location.origin);if(location.origin===u.origin){const d=DC(u.toString());yx(n,d,()=>d(n.currentUser)),vx(n,p=>d(p))}}const a=jy("auth");return a&&tx(n,`http://${a}`),n}function RC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}VI({loadJS(t){return new Promise((e,n)=>{const o=document.createElement("script");o.setAttribute("src",t),o.onload=e,o.onerror=a=>{const u=rn("internal-error");u.customData=a,n(u)},o.type="text/javascript",o.charset="UTF-8",RC().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TC("Browser");var OC="firebase",NC="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi(OC,NC,"app");var Zm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var T0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(k,_){function P(){}P.prototype=_.prototype,k.D=_.prototype,k.prototype=new P,k.prototype.constructor=k,k.C=function(A,R,B){for(var C=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)C[Se-2]=arguments[Se];return _.prototype[R].apply(A,C)}}function n(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,n),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(k,_,P){P||(P=0);var A=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)A[R]=_.charCodeAt(P++)|_.charCodeAt(P++)<<8|_.charCodeAt(P++)<<16|_.charCodeAt(P++)<<24;else for(R=0;16>R;++R)A[R]=_[P++]|_[P++]<<8|_[P++]<<16|_[P++]<<24;_=k.g[0],P=k.g[1],R=k.g[2];var B=k.g[3],C=_+(B^P&(R^B))+A[0]+3614090360&4294967295;_=P+(C<<7&4294967295|C>>>25),C=B+(R^_&(P^R))+A[1]+3905402710&4294967295,B=_+(C<<12&4294967295|C>>>20),C=R+(P^B&(_^P))+A[2]+606105819&4294967295,R=B+(C<<17&4294967295|C>>>15),C=P+(_^R&(B^_))+A[3]+3250441966&4294967295,P=R+(C<<22&4294967295|C>>>10),C=_+(B^P&(R^B))+A[4]+4118548399&4294967295,_=P+(C<<7&4294967295|C>>>25),C=B+(R^_&(P^R))+A[5]+1200080426&4294967295,B=_+(C<<12&4294967295|C>>>20),C=R+(P^B&(_^P))+A[6]+2821735955&4294967295,R=B+(C<<17&4294967295|C>>>15),C=P+(_^R&(B^_))+A[7]+4249261313&4294967295,P=R+(C<<22&4294967295|C>>>10),C=_+(B^P&(R^B))+A[8]+1770035416&4294967295,_=P+(C<<7&4294967295|C>>>25),C=B+(R^_&(P^R))+A[9]+2336552879&4294967295,B=_+(C<<12&4294967295|C>>>20),C=R+(P^B&(_^P))+A[10]+4294925233&4294967295,R=B+(C<<17&4294967295|C>>>15),C=P+(_^R&(B^_))+A[11]+2304563134&4294967295,P=R+(C<<22&4294967295|C>>>10),C=_+(B^P&(R^B))+A[12]+1804603682&4294967295,_=P+(C<<7&4294967295|C>>>25),C=B+(R^_&(P^R))+A[13]+4254626195&4294967295,B=_+(C<<12&4294967295|C>>>20),C=R+(P^B&(_^P))+A[14]+2792965006&4294967295,R=B+(C<<17&4294967295|C>>>15),C=P+(_^R&(B^_))+A[15]+1236535329&4294967295,P=R+(C<<22&4294967295|C>>>10),C=_+(R^B&(P^R))+A[1]+4129170786&4294967295,_=P+(C<<5&4294967295|C>>>27),C=B+(P^R&(_^P))+A[6]+3225465664&4294967295,B=_+(C<<9&4294967295|C>>>23),C=R+(_^P&(B^_))+A[11]+643717713&4294967295,R=B+(C<<14&4294967295|C>>>18),C=P+(B^_&(R^B))+A[0]+3921069994&4294967295,P=R+(C<<20&4294967295|C>>>12),C=_+(R^B&(P^R))+A[5]+3593408605&4294967295,_=P+(C<<5&4294967295|C>>>27),C=B+(P^R&(_^P))+A[10]+38016083&4294967295,B=_+(C<<9&4294967295|C>>>23),C=R+(_^P&(B^_))+A[15]+3634488961&4294967295,R=B+(C<<14&4294967295|C>>>18),C=P+(B^_&(R^B))+A[4]+3889429448&4294967295,P=R+(C<<20&4294967295|C>>>12),C=_+(R^B&(P^R))+A[9]+568446438&4294967295,_=P+(C<<5&4294967295|C>>>27),C=B+(P^R&(_^P))+A[14]+3275163606&4294967295,B=_+(C<<9&4294967295|C>>>23),C=R+(_^P&(B^_))+A[3]+4107603335&4294967295,R=B+(C<<14&4294967295|C>>>18),C=P+(B^_&(R^B))+A[8]+1163531501&4294967295,P=R+(C<<20&4294967295|C>>>12),C=_+(R^B&(P^R))+A[13]+2850285829&4294967295,_=P+(C<<5&4294967295|C>>>27),C=B+(P^R&(_^P))+A[2]+4243563512&4294967295,B=_+(C<<9&4294967295|C>>>23),C=R+(_^P&(B^_))+A[7]+1735328473&4294967295,R=B+(C<<14&4294967295|C>>>18),C=P+(B^_&(R^B))+A[12]+2368359562&4294967295,P=R+(C<<20&4294967295|C>>>12),C=_+(P^R^B)+A[5]+4294588738&4294967295,_=P+(C<<4&4294967295|C>>>28),C=B+(_^P^R)+A[8]+2272392833&4294967295,B=_+(C<<11&4294967295|C>>>21),C=R+(B^_^P)+A[11]+1839030562&4294967295,R=B+(C<<16&4294967295|C>>>16),C=P+(R^B^_)+A[14]+4259657740&4294967295,P=R+(C<<23&4294967295|C>>>9),C=_+(P^R^B)+A[1]+2763975236&4294967295,_=P+(C<<4&4294967295|C>>>28),C=B+(_^P^R)+A[4]+1272893353&4294967295,B=_+(C<<11&4294967295|C>>>21),C=R+(B^_^P)+A[7]+4139469664&4294967295,R=B+(C<<16&4294967295|C>>>16),C=P+(R^B^_)+A[10]+3200236656&4294967295,P=R+(C<<23&4294967295|C>>>9),C=_+(P^R^B)+A[13]+681279174&4294967295,_=P+(C<<4&4294967295|C>>>28),C=B+(_^P^R)+A[0]+3936430074&4294967295,B=_+(C<<11&4294967295|C>>>21),C=R+(B^_^P)+A[3]+3572445317&4294967295,R=B+(C<<16&4294967295|C>>>16),C=P+(R^B^_)+A[6]+76029189&4294967295,P=R+(C<<23&4294967295|C>>>9),C=_+(P^R^B)+A[9]+3654602809&4294967295,_=P+(C<<4&4294967295|C>>>28),C=B+(_^P^R)+A[12]+3873151461&4294967295,B=_+(C<<11&4294967295|C>>>21),C=R+(B^_^P)+A[15]+530742520&4294967295,R=B+(C<<16&4294967295|C>>>16),C=P+(R^B^_)+A[2]+3299628645&4294967295,P=R+(C<<23&4294967295|C>>>9),C=_+(R^(P|~B))+A[0]+4096336452&4294967295,_=P+(C<<6&4294967295|C>>>26),C=B+(P^(_|~R))+A[7]+1126891415&4294967295,B=_+(C<<10&4294967295|C>>>22),C=R+(_^(B|~P))+A[14]+2878612391&4294967295,R=B+(C<<15&4294967295|C>>>17),C=P+(B^(R|~_))+A[5]+4237533241&4294967295,P=R+(C<<21&4294967295|C>>>11),C=_+(R^(P|~B))+A[12]+1700485571&4294967295,_=P+(C<<6&4294967295|C>>>26),C=B+(P^(_|~R))+A[3]+2399980690&4294967295,B=_+(C<<10&4294967295|C>>>22),C=R+(_^(B|~P))+A[10]+4293915773&4294967295,R=B+(C<<15&4294967295|C>>>17),C=P+(B^(R|~_))+A[1]+2240044497&4294967295,P=R+(C<<21&4294967295|C>>>11),C=_+(R^(P|~B))+A[8]+1873313359&4294967295,_=P+(C<<6&4294967295|C>>>26),C=B+(P^(_|~R))+A[15]+4264355552&4294967295,B=_+(C<<10&4294967295|C>>>22),C=R+(_^(B|~P))+A[6]+2734768916&4294967295,R=B+(C<<15&4294967295|C>>>17),C=P+(B^(R|~_))+A[13]+1309151649&4294967295,P=R+(C<<21&4294967295|C>>>11),C=_+(R^(P|~B))+A[4]+4149444226&4294967295,_=P+(C<<6&4294967295|C>>>26),C=B+(P^(_|~R))+A[11]+3174756917&4294967295,B=_+(C<<10&4294967295|C>>>22),C=R+(_^(B|~P))+A[2]+718787259&4294967295,R=B+(C<<15&4294967295|C>>>17),C=P+(B^(R|~_))+A[9]+3951481745&4294967295,k.g[0]=k.g[0]+_&4294967295,k.g[1]=k.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,k.g[2]=k.g[2]+R&4294967295,k.g[3]=k.g[3]+B&4294967295}o.prototype.u=function(k,_){_===void 0&&(_=k.length);for(var P=_-this.blockSize,A=this.B,R=this.h,B=0;B<_;){if(R==0)for(;B<=P;)a(this,k,B),B+=this.blockSize;if(typeof k=="string"){for(;B<_;)if(A[R++]=k.charCodeAt(B++),R==this.blockSize){a(this,A),R=0;break}}else for(;B<_;)if(A[R++]=k[B++],R==this.blockSize){a(this,A),R=0;break}}this.h=R,this.o+=_},o.prototype.v=function(){var k=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);k[0]=128;for(var _=1;_<k.length-8;++_)k[_]=0;var P=8*this.o;for(_=k.length-8;_<k.length;++_)k[_]=P&255,P/=256;for(this.u(k),k=Array(16),_=P=0;4>_;++_)for(var A=0;32>A;A+=8)k[P++]=this.g[_]>>>A&255;return k};function u(k,_){var P=p;return Object.prototype.hasOwnProperty.call(P,k)?P[k]:P[k]=_(k)}function d(k,_){this.h=_;for(var P=[],A=!0,R=k.length-1;0<=R;R--){var B=k[R]|0;A&&B==_||(P[R]=B,A=!1)}this.g=P}var p={};function m(k){return-128<=k&&128>k?u(k,function(_){return new d([_|0],0>_?-1:0)}):new d([k|0],0>k?-1:0)}function y(k){if(isNaN(k)||!isFinite(k))return w;if(0>k)return j(y(-k));for(var _=[],P=1,A=0;k>=P;A++)_[A]=k/P|0,P*=4294967296;return new d(_,0)}function b(k,_){if(k.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(k.charAt(0)=="-")return j(b(k.substring(1),_));if(0<=k.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=y(Math.pow(_,8)),A=w,R=0;R<k.length;R+=8){var B=Math.min(8,k.length-R),C=parseInt(k.substring(R,R+B),_);8>B?(B=y(Math.pow(_,B)),A=A.j(B).add(y(C))):(A=A.j(P),A=A.add(y(C)))}return A}var w=m(0),S=m(1),I=m(16777216);t=d.prototype,t.m=function(){if(N(this))return-j(this).m();for(var k=0,_=1,P=0;P<this.g.length;P++){var A=this.i(P);k+=(0<=A?A:4294967296+A)*_,_*=4294967296}return k},t.toString=function(k){if(k=k||10,2>k||36<k)throw Error("radix out of range: "+k);if(T(this))return"0";if(N(this))return"-"+j(this).toString(k);for(var _=y(Math.pow(k,6)),P=this,A="";;){var R=K(P,_).g;P=z(P,R.j(_));var B=((0<P.g.length?P.g[0]:P.h)>>>0).toString(k);if(P=R,T(P))return B+A;for(;6>B.length;)B="0"+B;A=B+A}},t.i=function(k){return 0>k?0:k<this.g.length?this.g[k]:this.h};function T(k){if(k.h!=0)return!1;for(var _=0;_<k.g.length;_++)if(k.g[_]!=0)return!1;return!0}function N(k){return k.h==-1}t.l=function(k){return k=z(this,k),N(k)?-1:T(k)?0:1};function j(k){for(var _=k.g.length,P=[],A=0;A<_;A++)P[A]=~k.g[A];return new d(P,~k.h).add(S)}t.abs=function(){return N(this)?j(this):this},t.add=function(k){for(var _=Math.max(this.g.length,k.g.length),P=[],A=0,R=0;R<=_;R++){var B=A+(this.i(R)&65535)+(k.i(R)&65535),C=(B>>>16)+(this.i(R)>>>16)+(k.i(R)>>>16);A=C>>>16,B&=65535,C&=65535,P[R]=C<<16|B}return new d(P,P[P.length-1]&-2147483648?-1:0)};function z(k,_){return k.add(j(_))}t.j=function(k){if(T(this)||T(k))return w;if(N(this))return N(k)?j(this).j(j(k)):j(j(this).j(k));if(N(k))return j(this.j(j(k)));if(0>this.l(I)&&0>k.l(I))return y(this.m()*k.m());for(var _=this.g.length+k.g.length,P=[],A=0;A<2*_;A++)P[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<k.g.length;R++){var B=this.i(A)>>>16,C=this.i(A)&65535,Se=k.i(R)>>>16,je=k.i(R)&65535;P[2*A+2*R]+=C*je,W(P,2*A+2*R),P[2*A+2*R+1]+=B*je,W(P,2*A+2*R+1),P[2*A+2*R+1]+=C*Se,W(P,2*A+2*R+1),P[2*A+2*R+2]+=B*Se,W(P,2*A+2*R+2)}for(A=0;A<_;A++)P[A]=P[2*A+1]<<16|P[2*A];for(A=_;A<2*_;A++)P[A]=0;return new d(P,0)};function W(k,_){for(;(k[_]&65535)!=k[_];)k[_+1]+=k[_]>>>16,k[_]&=65535,_++}function G(k,_){this.g=k,this.h=_}function K(k,_){if(T(_))throw Error("division by zero");if(T(k))return new G(w,w);if(N(k))return _=K(j(k),_),new G(j(_.g),j(_.h));if(N(_))return _=K(k,j(_)),new G(j(_.g),_.h);if(30<k.g.length){if(N(k)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var P=S,A=_;0>=A.l(k);)P=V(P),A=V(A);var R=J(P,1),B=J(A,1);for(A=J(A,2),P=J(P,2);!T(A);){var C=B.add(A);0>=C.l(k)&&(R=R.add(P),B=C),A=J(A,1),P=J(P,1)}return _=z(k,R.j(_)),new G(R,_)}for(R=w;0<=k.l(_);){for(P=Math.max(1,Math.floor(k.m()/_.m())),A=Math.ceil(Math.log(P)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),B=y(P),C=B.j(_);N(C)||0<C.l(k);)P-=A,B=y(P),C=B.j(_);T(B)&&(B=S),R=R.add(B),k=z(k,C)}return new G(R,k)}t.A=function(k){return K(this,k).h},t.and=function(k){for(var _=Math.max(this.g.length,k.g.length),P=[],A=0;A<_;A++)P[A]=this.i(A)&k.i(A);return new d(P,this.h&k.h)},t.or=function(k){for(var _=Math.max(this.g.length,k.g.length),P=[],A=0;A<_;A++)P[A]=this.i(A)|k.i(A);return new d(P,this.h|k.h)},t.xor=function(k){for(var _=Math.max(this.g.length,k.g.length),P=[],A=0;A<_;A++)P[A]=this.i(A)^k.i(A);return new d(P,this.h^k.h)};function V(k){for(var _=k.g.length+1,P=[],A=0;A<_;A++)P[A]=k.i(A)<<1|k.i(A-1)>>>31;return new d(P,k.h)}function J(k,_){var P=_>>5;_%=32;for(var A=k.g.length-P,R=[],B=0;B<A;B++)R[B]=0<_?k.i(B+P)>>>_|k.i(B+P+1)<<32-_:k.i(B+P);return new d(R,k.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=y,d.fromString=b,T0=d}).apply(typeof Zm<"u"?Zm:typeof self<"u"?self:typeof window<"u"?window:{});var pu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,v){return l==Array.prototype||l==Object.prototype||(l[h]=v.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof pu=="object"&&pu];for(var h=0;h<l.length;++h){var v=l[h];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var o=n(this);function a(l,h){if(h)e:{var v=o;l=l.split(".");for(var x=0;x<l.length-1;x++){var U=l[x];if(!(U in v))break e;v=v[U]}l=l[l.length-1],x=v[l],h=h(x),h!=x&&h!=null&&e(v,l,{configurable:!0,writable:!0,value:h})}}function u(l,h){l instanceof String&&(l+="");var v=0,x=!1,U={next:function(){if(!x&&v<l.length){var Y=v++;return{value:h(Y,l[Y]),done:!1}}return x=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(l){return l||function(){return u(this,function(h,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},p=this||self;function m(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function y(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function b(l,h,v){return l.call.apply(l.bind,arguments)}function w(l,h,v){if(!l)throw Error();if(2<arguments.length){var x=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,x),l.apply(h,U)}}return function(){return l.apply(h,arguments)}}function S(l,h,v){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b:w,S.apply(null,arguments)}function I(l,h){var v=Array.prototype.slice.call(arguments,1);return function(){var x=v.slice();return x.push.apply(x,arguments),l.apply(this,x)}}function T(l,h){function v(){}v.prototype=h.prototype,l.aa=h.prototype,l.prototype=new v,l.prototype.constructor=l,l.Qb=function(x,U,Y){for(var ae=Array(arguments.length-2),We=2;We<arguments.length;We++)ae[We-2]=arguments[We];return h.prototype[U].apply(x,ae)}}function N(l){const h=l.length;if(0<h){const v=Array(h);for(let x=0;x<h;x++)v[x]=l[x];return v}return[]}function j(l,h){for(let v=1;v<arguments.length;v++){const x=arguments[v];if(m(x)){const U=l.length||0,Y=x.length||0;l.length=U+Y;for(let ae=0;ae<Y;ae++)l[U+ae]=x[ae]}else l.push(x)}}class z{constructor(h,v){this.i=h,this.j=v,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function W(l){return/^[\s\xa0]*$/.test(l)}function G(){var l=p.navigator;return l&&(l=l.userAgent)?l:""}function K(l){return K[" "](l),l}K[" "]=function(){};var V=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function J(l,h,v){for(const x in l)h.call(v,l[x],x,l)}function k(l,h){for(const v in l)h.call(void 0,l[v],v,l)}function _(l){const h={};for(const v in l)h[v]=l[v];return h}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,h){let v,x;for(let U=1;U<arguments.length;U++){x=arguments[U];for(v in x)l[v]=x[v];for(let Y=0;Y<P.length;Y++)v=P[Y],Object.prototype.hasOwnProperty.call(x,v)&&(l[v]=x[v])}}function R(l){var h=1;l=l.split(":");const v=[];for(;0<h&&l.length;)v.push(l.shift()),h--;return l.length&&v.push(l.join(":")),v}function B(l){p.setTimeout(()=>{throw l},0)}function C(){var l=le;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class Se{constructor(){this.h=this.g=null}add(h,v){const x=je.get();x.set(h,v),this.h?this.h.next=x:this.g=x,this.h=x}}var je=new z(()=>new Fe,l=>l.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(h,v){this.h=h,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,ne=!1,le=new Se,oe=()=>{const l=p.Promise.resolve(void 0);Pe=()=>{l.then(M)}};var M=()=>{for(var l;l=C();){try{l.h.call(l.g)}catch(v){B(v)}var h=je;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}ne=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Ee=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const v=()=>{};p.addEventListener("test",v,h),p.removeEventListener("test",v,h)}catch{}return l}();function me(l,h){if(de.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var v=this.type=l.type,x=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(V){e:{try{K(h.nodeName);var U=!0;break e}catch{}U=!1}U||(h=null)}}else v=="mouseover"?h=l.fromElement:v=="mouseout"&&(h=l.toElement);this.relatedTarget=h,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:xe[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&me.aa.h.call(this)}}T(me,de);var xe={2:"touch",3:"pen",4:"mouse"};me.prototype.h=function(){me.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var _e="closure_listenable_"+(1e6*Math.random()|0),Ce=0;function ke(l,h,v,x,U){this.listener=l,this.proxy=null,this.src=h,this.type=v,this.capture=!!x,this.ha=U,this.key=++Ce,this.da=this.fa=!1}function He(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ft(l){this.src=l,this.g={},this.h=0}ft.prototype.add=function(l,h,v,x,U){var Y=l.toString();l=this.g[Y],l||(l=this.g[Y]=[],this.h++);var ae=lr(l,h,x,U);return-1<ae?(h=l[ae],v||(h.fa=!1)):(h=new ke(h,this.src,Y,!!x,U),h.fa=v,l.push(h)),h};function pt(l,h){var v=h.type;if(v in l.g){var x=l.g[v],U=Array.prototype.indexOf.call(x,h,void 0),Y;(Y=0<=U)&&Array.prototype.splice.call(x,U,1),Y&&(He(h),l.g[v].length==0&&(delete l.g[v],l.h--))}}function lr(l,h,v,x){for(var U=0;U<l.length;++U){var Y=l[U];if(!Y.da&&Y.listener==h&&Y.capture==!!v&&Y.ha==x)return U}return-1}var ur="closure_lm_"+(1e6*Math.random()|0),on={};function sn(l,h,v,x,U){if(Array.isArray(h)){for(var Y=0;Y<h.length;Y++)sn(l,h[Y],v,x,U);return null}return v=bs(v),l&&l[_e]?l.K(h,v,y(x)?!!x.capture:!1,U):an(l,h,v,!1,x,U)}function an(l,h,v,x,U,Y){if(!h)throw Error("Invalid event type");var ae=y(U)?!!U.capture:!!U,We=ao(l);if(We||(l[ur]=We=new ft(l)),v=We.add(h,v,x,ae,Y),v.proxy)return v;if(x=so(),v.proxy=x,x.src=l,x.listener=v,l.addEventListener)Ee||(U=ae),U===void 0&&(U=!1),l.addEventListener(h.toString(),x,U);else if(l.attachEvent)l.attachEvent(ln(h.toString()),x);else if(l.addListener&&l.removeListener)l.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return v}function so(){function l(v){return h.call(l.src,l.listener,v)}const h=Ss;return l}function cr(l,h,v,x,U){if(Array.isArray(h))for(var Y=0;Y<h.length;Y++)cr(l,h[Y],v,x,U);else x=y(x)?!!x.capture:!!x,v=bs(v),l&&l[_e]?(l=l.i,h=String(h).toString(),h in l.g&&(Y=l.g[h],v=lr(Y,v,x,U),-1<v&&(He(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete l.g[h],l.h--)))):l&&(l=ao(l))&&(h=l.g[h.toString()],l=-1,h&&(l=lr(h,v,x,U)),(v=-1<l?h[l]:null)&&Jt(v))}function Jt(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[_e])pt(h.i,l);else{var v=l.type,x=l.proxy;h.removeEventListener?h.removeEventListener(v,x,l.capture):h.detachEvent?h.detachEvent(ln(v),x):h.addListener&&h.removeListener&&h.removeListener(x),(v=ao(h))?(pt(v,l),v.h==0&&(v.src=null,h[ur]=null)):He(l)}}}function ln(l){return l in on?on[l]:on[l]="on"+l}function Ss(l,h){if(l.da)l=!0;else{h=new me(h,this);var v=l.listener,x=l.ha||l.src;l.fa&&Jt(l),l=v.call(x,h)}return l}function ao(l){return l=l[ur],l instanceof ft?l:null}var lo="__closure_events_fn_"+(1e9*Math.random()>>>0);function bs(l){return typeof l=="function"?l:(l[lo]||(l[lo]=function(h){return l.handleEvent(h)}),l[lo])}function at(){X.call(this),this.i=new ft(this),this.M=this,this.F=null}T(at,X),at.prototype[_e]=!0,at.prototype.removeEventListener=function(l,h,v,x){cr(this,l,h,v,x)};function lt(l,h){var v,x=l.F;if(x)for(v=[];x;x=x.F)v.push(x);if(l=l.M,x=h.type||h,typeof h=="string")h=new de(h,l);else if(h instanceof de)h.target=h.target||l;else{var U=h;h=new de(x,l),A(h,U)}if(U=!0,v)for(var Y=v.length-1;0<=Y;Y--){var ae=h.g=v[Y];U=un(ae,x,!0,h)&&U}if(ae=h.g=l,U=un(ae,x,!0,h)&&U,U=un(ae,x,!1,h)&&U,v)for(Y=0;Y<v.length;Y++)ae=h.g=v[Y],U=un(ae,x,!1,h)&&U}at.prototype.N=function(){if(at.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var v=l.g[h],x=0;x<v.length;x++)He(v[x]);delete l.g[h],l.h--}}this.F=null},at.prototype.K=function(l,h,v,x){return this.i.add(String(l),h,!1,v,x)},at.prototype.L=function(l,h,v,x){return this.i.add(String(l),h,!0,v,x)};function un(l,h,v,x){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var U=!0,Y=0;Y<h.length;++Y){var ae=h[Y];if(ae&&!ae.da&&ae.capture==v){var We=ae.listener,ut=ae.ha||ae.src;ae.fa&&pt(l.i,ae),U=We.call(ut,x)!==!1&&U}}return U&&!x.defaultPrevented}function Es(l,h,v){if(typeof l=="function")v&&(l=S(l,v));else if(l&&typeof l.handleEvent=="function")l=S(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:p.setTimeout(l,h||0)}function Nn(l){l.g=Es(()=>{l.g=null,l.i&&(l.i=!1,Nn(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class Ei extends X{constructor(h,v){super(),this.m=h,this.l=v,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Nn(this)}N(){super.N(),this.g&&(p.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ii(l){X.call(this),this.h=l,this.g={}}T(Ii,X);var Is=[];function xs(l){J(l.g,function(h,v){this.g.hasOwnProperty(v)&&Jt(h)},l),l.g={}}Ii.prototype.N=function(){Ii.aa.N.call(this),xs(this)},Ii.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Cs=p.JSON.stringify,_s=p.JSON.parse,Ts=class{stringify(l){return p.JSON.stringify(l,void 0)}parse(l){return p.JSON.parse(l,void 0)}};function xi(){}xi.prototype.h=null;function uo(l){return l.h||(l.h=l.i())}function Ps(){}var dr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vr(){de.call(this,"d")}T(Vr,de);function co(){de.call(this,"c")}T(co,de);var cn={},ks=null;function fo(){return ks=ks||new at}cn.La="serverreachability";function Ds(l){de.call(this,cn.La,l)}T(Ds,de);function dn(l){const h=fo();lt(h,new Ds(h))}cn.STAT_EVENT="statevent";function As(l,h){de.call(this,cn.STAT_EVENT,l),this.stat=h}T(As,de);function nt(l){const h=fo();lt(h,new As(h,l))}cn.Ma="timingevent";function po(l,h){de.call(this,cn.Ma,l),this.size=h}T(po,de);function Cr(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return p.setTimeout(function(){l()},h)}function Ci(){this.g=!0}Ci.prototype.xa=function(){this.g=!1};function _i(l,h,v,x,U,Y){l.info(function(){if(l.g)if(Y)for(var ae="",We=Y.split("&"),ut=0;ut<We.length;ut++){var Oe=We[ut].split("=");if(1<Oe.length){var ht=Oe[0];Oe=Oe[1];var gt=ht.split("_");ae=2<=gt.length&&gt[1]=="type"?ae+(ht+"="+Oe+"&"):ae+(ht+"=redacted&")}}else ae=null;else ae=Y;return"XMLHTTP REQ ("+x+") [attempt "+U+"]: "+h+`
`+v+`
`+ae})}function ho(l,h,v,x,U,Y,ae){l.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+U+"]: "+h+`
`+v+`
`+Y+" "+ae})}function _r(l,h,v,x){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+hc(l,v)+(x?" "+x:"")})}function Rs(l,h){l.info(function(){return"TIMEOUT: "+h})}Ci.prototype.info=function(){};function hc(l,h){if(!l.g)return h;if(!h)return null;try{var v=JSON.parse(h);if(v){for(l=0;l<v.length;l++)if(Array.isArray(v[l])){var x=v[l];if(!(2>x.length)){var U=x[1];if(Array.isArray(U)&&!(1>U.length)){var Y=U[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var ae=1;ae<U.length;ae++)U[ae]=""}}}}return Cs(v)}catch{return h}}var Os={NO_ERROR:0,TIMEOUT:8},gc={},Tr;function Ti(){}T(Ti,xi),Ti.prototype.g=function(){return new XMLHttpRequest},Ti.prototype.i=function(){return{}},Tr=new Ti;function Pr(l,h,v,x){this.j=l,this.i=h,this.l=v,this.R=x||1,this.U=new Ii(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Xa}function Xa(){this.i=null,this.g="",this.h=!1}var Ns={},go={};function mo(l,h,v){l.L=1,l.v=Fn(Zt(h)),l.m=v,l.P=!0,Ls(l,null)}function Ls(l,h){l.F=Date.now(),qe(l),l.A=Zt(l.v);var v=l.A,x=l.R;Array.isArray(x)||(x=[String(x)]),$n(v.i,"t",x),l.C=0,v=l.j.J,l.h=new Xa,l.g=hl(l.j,v?h:null,!l.m),0<l.O&&(l.M=new Ei(S(l.Y,l,l.g),l.O)),h=l.U,v=l.g,x=l.ca;var U="readystatechange";Array.isArray(U)||(U&&(Is[0]=U.toString()),U=Is);for(var Y=0;Y<U.length;Y++){var ae=sn(v,U[Y],x||h.handleEvent,!1,h.h||h);if(!ae)break;h.g[ae.key]=ae}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),dn(),_i(l.i,l.u,l.A,l.l,l.R,l.m)}Pr.prototype.ca=function(l){l=l.target;const h=this.M;h&&Ut(l)==3?h.j():this.Y(l)},Pr.prototype.Y=function(l){try{if(l==this.g)e:{const gt=Ut(this.g);var h=this.g.Ba();const Xr=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||$s(this.g)))){this.J||gt!=4||h==7||(h==8||0>=Xr?dn(3):dn(2)),Pi(this);var v=this.g.Z();this.X=v;t:if(Ja(this)){var x=$s(this.g);l="";var U=x.length,Y=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),Ln(this);var ae="";break t}this.h.i=new p.TextDecoder}for(h=0;h<U;h++)this.h.h=!0,l+=this.h.i.decode(x[h],{stream:!(Y&&h==U-1)});x.length=0,this.h.g+=l,this.C=0,ae=this.h.g}else ae=this.g.oa();if(this.o=v==200,ho(this.i,this.u,this.A,this.l,this.R,gt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var We,ut=this.g;if((We=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(We)){var Oe=We;break t}}Oe=null}if(v=Oe)_r(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ms(this,v);else{this.o=!1,this.s=3,nt(12),fr(this),Ln(this);break e}}if(this.P){v=!0;let Ct;for(;!this.J&&this.C<ae.length;)if(Ct=mc(this,ae),Ct==go){gt==4&&(this.s=4,nt(14),v=!1),_r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Ns){this.s=4,nt(15),_r(this.i,this.l,ae,"[Invalid Chunk]"),v=!1;break}else _r(this.i,this.l,Ct,null),Ms(this,Ct);if(Ja(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||ae.length!=0||this.h.h||(this.s=1,nt(16),v=!1),this.o=this.o&&v,!v)_r(this.i,this.l,ae,"[Invalid Chunked Response]"),fr(this),Ln(this);else if(0<ae.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+ae.length),Hs(ht),ht.M=!0,nt(11))}}else _r(this.i,this.l,ae,null),Ms(this,ae);gt==4&&fr(this),this.o&&!this.J&&(gt==4?To(this.j,this):(this.o=!1,qe(this)))}else Eo(this.g),v==400&&0<ae.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),fr(this),Ln(this)}}}catch{}finally{}};function Ja(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function mc(l,h){var v=l.C,x=h.indexOf(`
`,v);return x==-1?go:(v=Number(h.substring(v,x)),isNaN(v)?Ns:(x+=1,x+v>h.length?go:(h=h.slice(x,x+v),l.C=x+v,h)))}Pr.prototype.cancel=function(){this.J=!0,fr(this)};function qe(l){l.S=Date.now()+l.I,Qa(l,l.I)}function Qa(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Cr(S(l.ba,l),h)}function Pi(l){l.B&&(p.clearTimeout(l.B),l.B=null)}Pr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(Rs(this.i,this.A),this.L!=2&&(dn(),nt(17)),fr(this),this.s=2,Ln(this)):Qa(this,this.S-l)};function Ln(l){l.j.G==0||l.J||To(l.j,l)}function fr(l){Pi(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,xs(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Ms(l,h){try{var v=l.j;if(v.G!=0&&(v.g==l||Ot(v.h,l))){if(!l.K&&Ot(v.h,l)&&v.G==3){try{var x=v.Da.g.parse(h)}catch{x=null}if(Array.isArray(x)&&x.length==3){var U=x;if(U[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<l.F)_o(v),Or(v);else break e;Co(v),nt(18)}}else v.za=U[1],0<v.za-v.T&&37500>U[2]&&v.F&&v.v==0&&!v.C&&(v.C=Cr(S(v.Za,v),6e3));if(1>=el(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else mn(v,11)}else if((l.K||v.g==l)&&_o(v),!W(h))for(U=v.Da.g.parse(h),h=0;h<U.length;h++){let Oe=U[h];if(v.T=Oe[0],Oe=Oe[1],v.G==2)if(Oe[0]=="c"){v.K=Oe[1],v.ia=Oe[2];const ht=Oe[3];ht!=null&&(v.la=ht,v.j.info("VER="+v.la));const gt=Oe[4];gt!=null&&(v.Aa=gt,v.j.info("SVER="+v.Aa));const Xr=Oe[5];Xr!=null&&typeof Xr=="number"&&0<Xr&&(x=1.5*Xr,v.L=x,v.j.info("backChannelRequestTimeoutMs_="+x)),x=v;const Ct=l.g;if(Ct){const Po=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Po){var Y=x.h;Y.g||Po.indexOf("spdy")==-1&&Po.indexOf("quic")==-1&&Po.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Bs(Y,Y.h),Y.h=null))}if(x.D){const ko=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;ko&&(x.ya=ko,Ge(x.I,x.D,ko))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-l.F,v.j.info("Handshake RTT: "+v.R+"ms")),x=v;var ae=l;if(x.qa=pl(x,x.J?x.ia:null,x.W),ae.K){tl(x.h,ae);var We=ae,ut=x.L;ut&&(We.I=ut),We.B&&(Pi(We),qe(We)),x.g=ae}else Ni(x);0<v.i.length&&Yr(v)}else Oe[0]!="stop"&&Oe[0]!="close"||mn(v,7);else v.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?mn(v,7):xt(v):Oe[0]!="noop"&&v.l&&v.l.ta(Oe),v.v=0)}}dn(4)}catch{}}var Za=class{constructor(l,h){this.g=l,this.map=h}};function ki(l){this.l=l||10,p.PerformanceNavigationTiming?(l=p.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(p.chrome&&p.chrome.loadTimes&&p.chrome.loadTimes()&&p.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qt(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function el(l){return l.h?1:l.g?l.g.size:0}function Ot(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function Bs(l,h){l.g?l.g.add(h):l.h=h}function tl(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}ki.prototype.cancel=function(){if(this.i=rl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function rl(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const v of l.g.values())h=h.concat(v.D);return h}return N(l.i)}function vo(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(m(l)){for(var h=[],v=l.length,x=0;x<v;x++)h.push(l[x]);return h}h=[],v=0;for(x in l)h[v++]=l[x];return h}function yo(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(m(l)||typeof l=="string"){var h=[];l=l.length;for(var v=0;v<l;v++)h.push(v);return h}h=[],v=0;for(const x in l)h[v++]=x;return h}}}function Mn(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(m(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var v=yo(l),x=vo(l),U=x.length,Y=0;Y<U;Y++)h.call(void 0,x[Y],v&&v[Y],l)}var Di=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function vc(l,h){if(l){l=l.split("&");for(var v=0;v<l.length;v++){var x=l[v].indexOf("="),U=null;if(0<=x){var Y=l[v].substring(0,x);U=l[v].substring(x+1)}else Y=l[v];h(Y,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function fn(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof fn){this.h=l.h,Ai(this,l.j),this.o=l.o,this.g=l.g,Bn(this,l.s),this.l=l.l;var h=l.i,v=new Gr;v.i=h.i,h.g&&(v.g=new Map(h.g),v.h=h.h),jn(this,v),this.m=l.m}else l&&(h=String(l).match(Di))?(this.h=!1,Ai(this,h[1]||"",!0),this.o=Re(h[2]||""),this.g=Re(h[3]||"",!0),Bn(this,h[4]),this.l=Re(h[5]||"",!0),jn(this,h[6]||"",!0),this.m=Re(h[7]||"")):(this.h=!1,this.i=new Gr(null,this.h))}fn.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Un(h,wo,!0),":");var v=this.g;return(v||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Un(h,wo,!0),"@"),l.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&l.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&l.push("/"),l.push(Un(v,v.charAt(0)=="/"?ol:il,!0))),(v=this.i.toString())&&l.push("?",v),(v=this.m)&&l.push("#",Un(v,js)),l.join("")};function Zt(l){return new fn(l)}function Ai(l,h,v){l.j=v?Re(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Bn(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function jn(l,h,v){h instanceof Gr?(l.i=h,qr(l.i,l.h)):(v||(h=Un(h,sl)),l.i=new Gr(h,l.h))}function Ge(l,h,v){l.i.set(h,v)}function Fn(l){return Ge(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Re(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Un(l,h,v){return typeof l=="string"?(l=encodeURI(l).replace(h,nl),v&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function nl(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var wo=/[#\/\?@]/g,il=/[#\?:]/g,ol=/[#\?]/g,sl=/[#\?@]/g,js=/#/g;function Gr(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function It(l){l.g||(l.g=new Map,l.h=0,l.i&&vc(l.i,function(h,v){l.add(decodeURIComponent(h.replace(/\+/g," ")),v)}))}t=Gr.prototype,t.add=function(l,h){It(this),this.i=null,l=pr(this,l);var v=this.g.get(l);return v||this.g.set(l,v=[]),v.push(h),this.h+=1,this};function kr(l,h){It(l),h=pr(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Dr(l,h){return It(l),h=pr(l,h),l.g.has(h)}t.forEach=function(l,h){It(this),this.g.forEach(function(v,x){v.forEach(function(U){l.call(h,U,x,this)},this)},this)},t.na=function(){It(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),v=[];for(let x=0;x<h.length;x++){const U=l[x];for(let Y=0;Y<U.length;Y++)v.push(h[x])}return v},t.V=function(l){It(this);let h=[];if(typeof l=="string")Dr(this,l)&&(h=h.concat(this.g.get(pr(this,l))));else{l=Array.from(this.g.values());for(let v=0;v<l.length;v++)h=h.concat(l[v])}return h},t.set=function(l,h){return It(this),this.i=null,l=pr(this,l),Dr(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function $n(l,h,v){kr(l,h),0<v.length&&(l.i=null,l.g.set(pr(l,h),N(v)),l.h+=v.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var v=0;v<h.length;v++){var x=h[v];const Y=encodeURIComponent(String(x)),ae=this.V(x);for(x=0;x<ae.length;x++){var U=Y;ae[x]!==""&&(U+="="+encodeURIComponent(String(ae[x]))),l.push(U)}}return this.i=l.join("&")};function pr(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function qr(l,h){h&&!l.j&&(It(l),l.i=null,l.g.forEach(function(v,x){var U=x.toLowerCase();x!=U&&(kr(this,x),$n(this,U,v))},l)),l.j=h}function yc(l,h){const v=new Ci;if(p.Image){const x=new Image;x.onload=I(Ft,v,"TestLoadImage: loaded",!0,h,x),x.onerror=I(Ft,v,"TestLoadImage: error",!1,h,x),x.onabort=I(Ft,v,"TestLoadImage: abort",!1,h,x),x.ontimeout=I(Ft,v,"TestLoadImage: timeout",!1,h,x),p.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=l}else h(!1)}function al(l,h){const v=new Ci,x=new AbortController,U=setTimeout(()=>{x.abort(),Ft(v,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:x.signal}).then(Y=>{clearTimeout(U),Y.ok?Ft(v,"TestPingServer: ok",!0,h):Ft(v,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(U),Ft(v,"TestPingServer: error",!1,h)})}function Ft(l,h,v,x,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),x(v)}catch{}}function wc(){this.g=new Ts}function ll(l,h,v){const x=v||"";try{Mn(l,function(U,Y){let ae=U;y(U)&&(ae=Cs(U)),h.push(x+Y+"="+encodeURIComponent(ae))})}catch(U){throw h.push(x+"type="+encodeURIComponent("_badmap")),U}}function pn(l){this.l=l.Ub||null,this.j=l.eb||!1}T(pn,xi),pn.prototype.g=function(){return new Ri(this.l,this.j)},pn.prototype.i=function(l){return function(){return l}}({});function Ri(l,h){at.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(Ri,at),t=Ri.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,Rr(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||p).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ar(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof p.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ul(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ul(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Ar(this):Rr(this),this.readyState==3&&ul(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Ar(this))},t.Qa=function(l){this.g&&(this.response=l,Ar(this))},t.ga=function(){this.g&&Ar(this)};function Ar(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Rr(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var v=h.next();!v.done;)v=v.value,l.push(v[0]+": "+v[1]),v=h.next();return l.join(`\r
`)};function Rr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ri.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function hn(l){let h="";return J(l,function(v,x){h+=x,h+=":",h+=v,h+=`\r
`}),h}function zn(l,h,v){e:{for(x in v){var x=!1;break e}x=!0}x||(v=hn(v),typeof l=="string"?v!=null&&encodeURIComponent(String(v)):Ge(l,h,v))}function Ze(l){at.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ze,at);var Sc=/^https?$/i,Fs=["POST","PUT"];t=Ze.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,v,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Tr.g(),this.v=this.o?uo(this.o):uo(Tr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(Y){Oi(this,Y);return}if(l=v||"",v=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var U in x)v.set(U,x[U]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const Y of x.keys())v.set(Y,x.get(Y));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),U=p.FormData&&l instanceof p.FormData,!(0<=Array.prototype.indexOf.call(Fs,h,void 0))||x||U||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,ae]of v)this.g.setRequestHeader(Y,ae);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bo(this),this.u=!0,this.g.send(l),this.u=!1}catch(Y){Oi(this,Y)}};function Oi(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,So(l),er(l)}function So(l){l.A||(l.A=!0,lt(l,"complete"),lt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,lt(this,"complete"),lt(this,"abort"),er(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),er(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Us(this):this.bb())},t.bb=function(){Us(this)};function Us(l){if(l.h&&typeof d<"u"&&(!l.v[1]||Ut(l)!=4||l.Z()!=2)){if(l.u&&Ut(l)==4)Es(l.Ea,0,l);else if(lt(l,"readystatechange"),Ut(l)==4){l.h=!1;try{const ae=l.Z();e:switch(ae){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var v;if(!(v=h)){var x;if(x=ae===0){var U=String(l.D).match(Di)[1]||null;!U&&p.self&&p.self.location&&(U=p.self.location.protocol.slice(0,-1)),x=!Sc.test(U?U.toLowerCase():"")}v=x}if(v)lt(l,"complete"),lt(l,"success");else{l.m=6;try{var Y=2<Ut(l)?l.g.statusText:""}catch{Y=""}l.l=Y+" ["+l.Z()+"]",So(l)}}finally{er(l)}}}}function er(l,h){if(l.g){bo(l);const v=l.g,x=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||lt(l,"ready");try{v.onreadystatechange=x}catch{}}}function bo(l){l.I&&(p.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Ut(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),_s(h)}};function $s(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Eo(l){const h={};l=(l.g&&2<=Ut(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<l.length;x++){if(W(l[x]))continue;var v=R(l[x]);const U=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=h[U]||[];h[U]=Y,Y.push(v)}k(h,function(x){return x.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kr(l,h,v){return v&&v.internalChannelParams&&v.internalChannelParams[l]||h}function zs(l){this.Aa=0,this.i=[],this.j=new Ci,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kr("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kr("baseRetryDelayMs",5e3,l),this.cb=Kr("retryDelaySeedMs",1e4,l),this.Wa=Kr("forwardChannelMaxRetries",2,l),this.wa=Kr("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new ki(l&&l.concurrentRequestLimit),this.Da=new wc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zs.prototype,t.la=8,t.G=1,t.connect=function(l,h,v,x){nt(0),this.W=l,this.H=h||{},v&&x!==void 0&&(this.H.OSID=v,this.H.OAID=x),this.F=this.X,this.I=pl(this,null,this.W),Yr(this)};function xt(l){if(Io(l),l.G==3){var h=l.U++,v=Zt(l.I);if(Ge(v,"SID",l.K),Ge(v,"RID",h),Ge(v,"TYPE","terminate"),gn(l,v),h=new Pr(l,l.j,h),h.L=2,h.v=Fn(Zt(v)),v=!1,p.navigator&&p.navigator.sendBeacon)try{v=p.navigator.sendBeacon(h.v.toString(),"")}catch{}!v&&p.Image&&(new Image().src=h.v,v=!0),v||(h.g=hl(h.j,null),h.g.ea(h.v)),h.F=Date.now(),qe(h)}fl(l)}function Or(l){l.g&&(Hs(l),l.g.cancel(),l.g=null)}function Io(l){Or(l),l.u&&(p.clearTimeout(l.u),l.u=null),_o(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&p.clearTimeout(l.s),l.s=null)}function Yr(l){if(!Qt(l.h)&&!l.s){l.s=!0;var h=l.Ga;Pe||oe(),ne||(Pe(),ne=!0),le.add(h,l),l.B=0}}function bc(l,h){return el(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Cr(S(l.Ga,l,h),dl(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const U=new Pr(this,this.j,l);let Y=this.o;if(this.S&&(Y?(Y=_(Y),A(Y,this.S)):Y=this.S),this.m!==null||this.O||(U.H=Y,Y=null),this.P)e:{for(var h=0,v=0;v<this.i.length;v++){t:{var x=this.i[v];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(h+=x,4096<h){h=v;break e}if(h===4096||v===this.i.length-1){h=v+1;break e}}h=1e3}else h=1e3;h=Hn(this,U,h),v=Zt(this.I),Ge(v,"RID",l),Ge(v,"CVER",22),this.D&&Ge(v,"X-HTTP-Session-Id",this.D),gn(this,v),Y&&(this.O?h="headers="+encodeURIComponent(String(hn(Y)))+"&"+h:this.m&&zn(v,this.m,Y)),Bs(this.h,U),this.Ua&&Ge(v,"TYPE","init"),this.P?(Ge(v,"$req",h),Ge(v,"SID","null"),U.T=!0,mo(U,v,null)):mo(U,v,h),this.G=2}}else this.G==3&&(l?xo(this,l):this.i.length==0||Qt(this.h)||xo(this))};function xo(l,h){var v;h?v=h.l:v=l.U++;const x=Zt(l.I);Ge(x,"SID",l.K),Ge(x,"RID",v),Ge(x,"AID",l.T),gn(l,x),l.m&&l.o&&zn(x,l.m,l.o),v=new Pr(l,l.j,v,l.B+1),l.m===null&&(v.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Hn(l,v,1e3),v.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Bs(l.h,v),mo(v,x,h)}function gn(l,h){l.H&&J(l.H,function(v,x){Ge(h,x,v)}),l.l&&Mn({},function(v,x){Ge(h,x,v)})}function Hn(l,h,v){v=Math.min(l.i.length,v);var x=l.l?S(l.l.Na,l.l,l):null;e:{var U=l.i;let Y=-1;for(;;){const ae=["count="+v];Y==-1?0<v?(Y=U[0].g,ae.push("ofs="+Y)):Y=0:ae.push("ofs="+Y);let We=!0;for(let ut=0;ut<v;ut++){let Oe=U[ut].g;const ht=U[ut].map;if(Oe-=Y,0>Oe)Y=Math.max(0,U[ut].g-100),We=!1;else try{ll(ht,ae,"req"+Oe+"_")}catch{x&&x(ht)}}if(We){x=ae.join("&");break e}}}return l=l.i.splice(0,v),h.D=l,x}function Ni(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;Pe||oe(),ne||(Pe(),ne=!0),le.add(h,l),l.v=0}}function Co(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Cr(S(l.Fa,l),dl(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,cl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Cr(S(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Or(this),cl(this))};function Hs(l){l.A!=null&&(p.clearTimeout(l.A),l.A=null)}function cl(l){l.g=new Pr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=Zt(l.qa);Ge(h,"RID","rpc"),Ge(h,"SID",l.K),Ge(h,"AID",l.T),Ge(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ge(h,"TO",l.ja),Ge(h,"TYPE","xmlhttp"),gn(l,h),l.m&&l.o&&zn(h,l.m,l.o),l.L&&(l.g.I=l.L);var v=l.g;l=l.ia,v.L=1,v.v=Fn(Zt(h)),v.m=null,v.P=!0,Ls(v,l)}t.Za=function(){this.C!=null&&(this.C=null,Or(this),Co(this),nt(19))};function _o(l){l.C!=null&&(p.clearTimeout(l.C),l.C=null)}function To(l,h){var v=null;if(l.g==h){_o(l),Hs(l),l.g=null;var x=2}else if(Ot(l.h,h))v=h.D,tl(l.h,h),x=1;else return;if(l.G!=0){if(h.o)if(x==1){v=h.m?h.m.length:0,h=Date.now()-h.F;var U=l.B;x=fo(),lt(x,new po(x,v)),Yr(l)}else Ni(l);else if(U=h.s,U==3||U==0&&0<h.X||!(x==1&&bc(l,h)||x==2&&Co(l)))switch(v&&0<v.length&&(h=l.h,h.i=h.i.concat(v)),U){case 1:mn(l,5);break;case 4:mn(l,10);break;case 3:mn(l,6);break;default:mn(l,2)}}}function dl(l,h){let v=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(v*=2),v*h}function mn(l,h){if(l.j.info("Error code "+h),h==2){var v=S(l.fb,l),x=l.Xa;const U=!x;x=new fn(x||"//www.google.com/images/cleardot.gif"),p.location&&p.location.protocol=="http"||Ai(x,"https"),Fn(x),U?yc(x.toString(),v):al(x.toString(),v)}else nt(2);l.G=0,l.l&&l.l.sa(h),fl(l),Io(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function fl(l){if(l.G=0,l.ka=[],l.l){const h=rl(l.h);(h.length!=0||l.i.length!=0)&&(j(l.ka,h),j(l.ka,l.i),l.h.i.length=0,N(l.i),l.i.length=0),l.l.ra()}}function pl(l,h,v){var x=v instanceof fn?Zt(v):new fn(v);if(x.g!="")h&&(x.g=h+"."+x.g),Bn(x,x.s);else{var U=p.location;x=U.protocol,h=h?h+"."+U.hostname:U.hostname,U=+U.port;var Y=new fn(null);x&&Ai(Y,x),h&&(Y.g=h),U&&Bn(Y,U),v&&(Y.l=v),x=Y}return v=l.D,h=l.ya,v&&h&&Ge(x,v,h),Ge(x,"VER",l.la),gn(l,x),x}function hl(l,h,v){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Ze(new pn({eb:v})):new Ze(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ws(){}t=Ws.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $t(l,h){at.call(this),this.g=new zs(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!W(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!W(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Wn(this)}T($t,at),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){xt(this.g)},$t.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var v={};v.__data__=l,l=v}else this.u&&(v={},v.__data__=Cs(l),l=v);h.i.push(new Za(h.Ya++,l)),h.G==3&&Yr(h)},$t.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,$t.aa.N.call(this)};function gl(l){Vr.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const v in h){l=v;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}T(gl,Vr);function ml(){co.call(this),this.status=1}T(ml,co);function Wn(l){this.g=l}T(Wn,Ws),Wn.prototype.ua=function(){lt(this.g,"a")},Wn.prototype.ta=function(l){lt(this.g,new gl(l))},Wn.prototype.sa=function(l){lt(this.g,new ml)},Wn.prototype.ra=function(){lt(this.g,"b")},$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Os.NO_ERROR=0,Os.TIMEOUT=8,Os.HTTP_ERROR=6,gc.COMPLETE="complete",Ps.EventType=dr,dr.OPEN="a",dr.CLOSE="b",dr.ERROR="c",dr.MESSAGE="d",at.prototype.listen=at.prototype.K,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha}).apply(typeof pu<"u"?pu:typeof self<"u"?self:typeof window<"u"?window:{});const ev="@firebase/firestore",tv="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Bt.UNAUTHENTICATED=new Bt(null),Bt.GOOGLE_CREDENTIALS=new Bt("google-credentials-uid"),Bt.FIRST_PARTY=new Bt("first-party-uid"),Bt.MOCK_USER=new Bt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new op("@firebase/firestore");function $r(t,...e){if(us.logLevel<=ze.DEBUG){const n=e.map(mp);us.debug(`Firestore (${qa}): ${t}`,...n)}}function P0(t,...e){if(us.logLevel<=ze.ERROR){const n=e.map(mp);us.error(`Firestore (${qa}): ${t}`,...n)}}function LC(t,...e){if(us.logLevel<=ze.WARN){const n=e.map(mp);us.warn(`Firestore (${qa}): ${t}`,...n)}}function mp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t,e,n){let o="Unexpected state";typeof e=="string"?o=e:n=e,D0(t,o,n)}function D0(t,e,n){let o=`FIRESTORE (${qa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{o+=" CONTEXT: "+JSON.stringify(n)}catch{o+=" CONTEXT: "+n}throw P0(o),new Error(o)}function xa(t,e,n,o){let a="Unexpected state";typeof n=="string"?a=n:o=n,t||D0(e,a,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class Xt extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Bt.UNAUTHENTICATED))}shutdown(){}}class BC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class jC{constructor(e){this.t=e,this.currentUser=Bt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xa(this.o===void 0,42304);let o=this.i;const a=m=>this.i!==o?(o=this.i,n(m)):Promise.resolve();let u=new Ca;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Ca,e.enqueueRetryable(()=>a(this.currentUser))};const d=()=>{const m=u;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},p=m=>{$r("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(m=>p(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?p(m):($r("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Ca)}},0),d()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(o=>this.i!==e?($r("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(xa(typeof o.accessToken=="string",31837,{l:o}),new A0(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xa(e===null||typeof e=="string",2055,{h:e}),new Bt(e)}}class FC{constructor(e,n,o){this.P=e,this.T=n,this.I=o,this.type="FirstParty",this.user=Bt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class UC{constructor(e,n,o){this.P=e,this.T=n,this.I=o}getToken(){return Promise.resolve(new FC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Bt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rv{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $C{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,br(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){xa(this.o===void 0,3512);const o=u=>{u.error!=null&&$r("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const d=u.token!==this.m;return this.m=u.token,$r("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>o(u))};const a=u=>{$r("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>a(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?a(u):$r("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new rv(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xa(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new rv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function zC(t){return t.name==="IndexedDbTransactionError"}const zf="(default)";class $u{constructor(e,n){this.projectId=e,this.database=n||zf}static empty(){return new $u("","")}get isDefaultDatabase(){return this.database===zf}isEqual(e){return e instanceof $u&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nv,Ne;(Ne=nv||(nv={}))[Ne.OK=0]="OK",Ne[Ne.CANCELLED=1]="CANCELLED",Ne[Ne.UNKNOWN=2]="UNKNOWN",Ne[Ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ne[Ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ne[Ne.NOT_FOUND=5]="NOT_FOUND",Ne[Ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ne[Ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ne[Ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ne[Ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ne[Ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ne[Ne.ABORTED=10]="ABORTED",Ne[Ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ne[Ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ne[Ne.INTERNAL=13]="INTERNAL",Ne[Ne.UNAVAILABLE=14]="UNAVAILABLE",Ne[Ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new T0([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=1048576;function uf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e,n,o=1e3,a=1.5,u=6e4){this.bi=e,this.timerId=n,this.u_=o,this.c_=a,this.l_=u,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),o=Math.max(0,Date.now()-this.T_),a=Math.max(0,n-o);a>0&&$r("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${o} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,a,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,n,o,a,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=o,this.op=a,this.removalCallback=u,this.deferred=new Ca,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,o,a,u){const d=Date.now()+o,p=new vp(e,n,d,a,u);return p.start(o),p}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Xt(Yt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var iv,ov;(ov=iv||(iv={})).ya="default",ov.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=new Map;function qC(t,e,n,o){if(e===!0&&o===!0)throw new Xt(Yt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function KC(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":k0(12329,{type:typeof t})}function YC(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Xt(Yt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=KC(t);throw new Xt(Yt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="firestore.googleapis.com",av=!0;class lv{constructor(e){var n,o;if(e.host===void 0){if(e.ssl!==void 0)throw new Xt(Yt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=R0,this.ssl=av}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:av;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=HC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<WC)throw new Xt(Yt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=GC((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new Xt(Yt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new Xt(Yt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new Xt(Yt.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,a){return o.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class O0{constructor(e,n,o,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=o,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Xt(Yt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Xt(Yt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new MC;switch(o.type){case"firstParty":return new UC(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new Xt(Yt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const o=sv.get(n);o&&($r("ComponentProvider","Removing Datastore"),sv.delete(n),o.terminate())}(this),Promise.resolve()}}function XC(t,e,n,o={}){var a;const u=(t=YC(t,O0))._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:t._getEmulatorOptions()}),p=`${e}:${n}`;u.host!==R0&&u.host!==p&&LC("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:p,ssl:!1,emulatorOptions:o});if(!eo(m,d)&&(t._setSettings(m),o.mockUserToken)){let y,b;if(typeof o.mockUserToken=="string")y=o.mockUserToken,b=Bt.MOCK_USER;else{y=Yb(o.mockUserToken,(a=t._app)===null||a===void 0?void 0:a.options.projectId);const w=o.mockUserToken.sub||o.mockUserToken.user_id;if(!w)throw new Xt(Yt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Bt(w)}t._authCredentials=new BC(new A0(y,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="AsyncQueue";class cv{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new VC(this,"async_queue_retry"),this.ju=()=>{const o=uf();o&&$r(uv,"Visibility state changed to "+o.visibilityState),this.y_.A_()},this.Hu=e;const n=uf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=uf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new Ca;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!zC(e))throw e;$r(uv,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(o=>{throw this.Ku=o,this.Wu=!1,P0("INTERNAL UNHANDLED ERROR: ",dv(o)),o}).then(o=>(this.Wu=!1,o))));return this.Hu=n,n}enqueueAfterDelay(e,n,o){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const a=vp.createAndSchedule(this,e,n,o,u=>this.Xu(u));return this.Uu.push(a),a}Ju(){this.Ku&&k0(47125,{ec:dv(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,o)=>n.targetTimeMs-o.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function dv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class JC extends O0{constructor(e,n,o,a){super(e,n,o,a),this.type="firestore",this._queue=new cv,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new cv(e),this._firestoreClient=void 0,await e}}}function QC(t,e){const n=typeof t=="object"?t:Wy(),o=typeof t=="string"?t:zf,a=ap(n,"firestore").getImmediate({identifier:o});if(!a._initialized){const u=qb("firestore");u&&XC(a,...u)}return a}(function(e,n=!0){(function(a){qa=a})(gs),ls(new to("firestore",(o,{instanceIdentifier:a,options:u})=>{const d=o.getProvider("app").getImmediate(),p=new JC(new jC(o.getProvider("auth-internal")),new $C(d,o.getProvider("app-check-internal")),function(y,b){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new Xt(Yt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $u(y.options.projectId,b)}(d,a),d);return u=Object.assign({useFetchStreams:n},u),p._setSettings(u),p},"PUBLIC").setMultipleInstances(!0)),hi(ev,tv,e),hi(ev,tv,"esm2017")})();const ZC={apiKey:"AIzaSyBbXsS-nxFtF5lSbOz99jdQ8bl_wqjVsms",authDomain:"projectm-3780c.firebaseapp.com",projectId:"projectm-3780c",storageBucket:"projectm-3780c.firebasestorage.app",messagingSenderId:"315745607112",appId:"1:315745607112:web:7201bd42b124720d5e74fd"},N0=Hy(ZC),Tu=AC(N0);QC(N0);const e_=[{id:1,name:"Calendar",icon:"icon/calendar_icon.svg",ariaLabel:"Open calendar"},{id:2,name:"Messages question",icon:"icon/message-question_icon.svg",ariaLabel:"Check messages or questions"},{id:3,name:"Notifications",icon:"icon/notification_icon.svg",ariaLabel:"View notifications"}],t_=[{id:1,userName:"Lee Song",country:"United States",avatar:"image/avatar-1.jpeg"}],r_=()=>{const[t,e]=re.useState(!1),{setIsLoggedIn:n,loggedUser:o,setShowLoginForm:a}=re.useContext(hs),u=()=>{e(p=>!p)},d=()=>{Sx(Tu).then(()=>{n(!1),a(!1),console.log("LogOut:")}).catch(p=>console.log(p))};return console.log("User:",o),F.jsxs(Ib,{role:"region","aria-label":"User menu block",children:[F.jsx(xb,{"aria-label":"User menu navigation",children:e_.map(({id:p,icon:m,ariaLabel:y})=>F.jsx(Cb,{"aria-label":y,"aria-haspopup":"true",children:F.jsx(Em,{src:m,alt:""})},p))}),F.jsxs(_b,{role:"group","aria-label":"User information",children:[t_.map(({id:p,userName:m,country:y,avatar:b})=>F.jsxs(bm,{role:"group","aria-label":"User information",children:[F.jsxs(Eb,{"aria-labelledby":`user-name-${p} user-country-${p}`,children:[F.jsx(Tb,{id:`user-name-${p}`,children:m}),F.jsx(Pb,{id:`user-country-${p}`,children:y})]}),F.jsx(kb,{src:b,alt:m,role:"presentation"})]},p)),F.jsx(Db,{onClick:u,"aria-haspopup":"true","aria-label":"Open user menu",children:F.jsx(Em,{src:"icon/arrow-down_icon.svg",alt:"User"})})]}),t&&F.jsx(bm,{children:F.jsx(Ab,{"aria-label":"User menu popup",children:F.jsx(Lb,{onClick:d,children:"Log out"})})})]})},yp=re.forwardRef(({onToggleSidebar:t,isSidebarOpen:e},n)=>{const{isLoggedIn:o}=re.useContext(hs);return F.jsxs(pb,{ref:n,children:[F.jsxs(lb,{children:[F.jsxs(db,{children:[F.jsx("img",{src:"logo.svg",alt:"Logo"}),F.jsx("span",{children:"Project M."})]}),o?F.jsx(fb,{className:"sidebar-toggle",onClick:t,$isSidebarOpen:e,children:F.jsx("img",{src:"icon/arrow_left.svg",alt:"Sidebar opener"})}):""]}),o?F.jsxs(hb,{children:[F.jsx(bb,{}),F.jsx(r_,{})]}):""]})});yp.displayName="Header";yp.propTypes={onToggleSidebar:Pn.func.isRequired,isSidebarOpen:Pn.bool.isRequired};const n_=ee.div``,i_={tasks:{"task-1":{id:"task-1",content:"Brainstorming",description:"Brainstorming brings team members' diverse experience into play.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:""},"task-2":{id:"task-2",content:"Research",description:"User research helps you to create an optimal product for users.",level:"medium",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:""},"task-3":{id:"task-3",content:"Wireframes",description:"Low fidelity wireframes include the most basic content and visuals.",level:"high",levelColor:"#5030E5",levelBackgroundColor:"rgba(80, 48, 229, 0.2)",image:""},"task-4":{id:"task-4",content:"Onboarding illustrations",description:"Help users understand how to use your service.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:"image/onboarding-illustration.png"},"task-5":{id:"task-5",content:"Moodboard",description:"The first impression is a crucial moment.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:"image/moodboard-1.png"},"task-6":{id:"task-6",content:"Mobile App Design",description:"Make sure your mobile app looks great on all devices.",level:"completed",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:"image/mobile-app-design.png"},"task-7":{id:"task-7",content:"Design system",description:"Create a robust pattern library and reusable components.",level:"completed",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:""}},columns:{"column-1":{id:"column-1",title:"To Do",taskIds:["task-1","task-2","task-3"],lineColor:"#5030E5"},"column-2":{id:"column-2",title:"In Progress",taskIds:["task-4","task-5"],lineColor:"#FFA500"},"column-3":{id:"column-3",title:"Done",taskIds:["task-6","task-7"],lineColor:"#8BC48A"}},columnOrder:["column-1","column-2","column-3"]},o_=ee.div``,s_=ee.main`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:t})=>t.headerSize.desktopHeight};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: ${({theme:t})=>t.headerSize.mobileHeight};
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: ${({theme:t})=>t.headerSize.tabletHeight};
  }
`,a_=ee.div`
  margin-left: ${({$isSidebarOpen:t})=>t?"16rem":"0"};
  transition: all 0.3s ease-in-out;
  padding: 2rem;
  height: 100vh;
  overflow-y: auto;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    padding: 0.5rem;
    margin-left: ${({$isSidebarOpen:t})=>"0"};
    transition: filter 0.3s ease-in-out;
    filter: ${({$isSidebarOpen:t})=>t?"blur(5px)":"none"};
  }
`,l_=ee.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1rem;

  @media (max-width: ${({theme:t})=>t.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(1fr));
  }
`,u_=ee.div`
  padding: 1.5rem;
  width: 23rem;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    width: 20rem;
    padding: 1rem;
  }
`,c_=ee.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;

  &::after {
    display: block;
    position: absolute;
    bottom: -1.5rem;
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${({$lineColor:t})=>t};
  }
`,d_=ee.h2`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 500;
  text-align: left;

  &::before {
    display: inline-block;
    margin-right: 0.5rem;
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({$lineColor:t})=>t};
  }
`,f_=ee.p`
  text-align: center;
  line-height: 1.5rem;
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  background-color: ${({theme:t})=>t.colors.secondaryDarkBackground};
  border-radius: 50%;
  margin-left: 0.8rem;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 0.8rem;
  font-weight: 500;
`,p_=ee.button`
  /* display: flex;
  justify-content: center;
  align-items: center;
  color: #5030e5;
  background-color: #b9aef6;
  border-radius: 8px;
  line-height: 100%;
  font-size: 1.5rem;
  width: 1.5rem; */
`,h_=ee.img``,g_=ee.div`
  height: 100%;
`,m_=ee.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 16px;

  background: ${({theme:t})=>t.colors.primaryLightBackground};
`,v_=ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,y_=ee.div`
  padding: 0 0.4rem;
  line-height: 1.5rem;
  border-radius: 4px;
  color: ${({$levelColor:t})=>t};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;

  background: ${({$levelBg:t})=>t};
`,w_=ee.button`
  background-color: transparent;
`,S_=ee.img``,b_=ee.div``,E_=ee.h3`
  margin-bottom: 0.5rem;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
`,I_=ee.p`
  margin-bottom: 1.5rem;
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.87rem;
  font-weight: 400;
  text-align: left;
`,x_=ee.img`
  border-radius: 8px;
`,C_=ee.div`
  display: flex;
  justify-content: space-between;
`,__=ee.div`
  width: 63px;
  height: 24px;
`,T_=ee.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,P_=ee.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  margin-right: 1rem;
`,k_=ee.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
`,D_=ee.div`
  height: 100%;
`;function Hf(t,e){return Hf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},Hf(t,e)}function L0(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Hf(t,e)}function we(){return we=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)({}).hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},we.apply(null,arguments)}function La(t){"@babel/helpers - typeof";return La=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},La(t)}function A_(t,e){if(La(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var o=n.call(t,e);if(La(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function R_(t){var e=A_(t,"string");return La(e)=="symbol"?e:e+""}function O_(t,e,n){return(e=R_(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,o)}return n}function pv(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fv(Object(n),!0).forEach(function(o){O_(t,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fv(Object(n)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(n,o))})}return t}function Kt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var hv=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),gv=function(){return Math.random().toString(36).substring(7).split("").join(".")},mv={INIT:"@@redux/INIT"+gv(),REPLACE:"@@redux/REPLACE"+gv()};function N_(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function M0(t,e,n){var o;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(Kt(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(Kt(1));return n(M0)(t,e)}if(typeof t!="function")throw new Error(Kt(2));var a=t,u=e,d=[],p=d,m=!1;function y(){p===d&&(p=d.slice())}function b(){if(m)throw new Error(Kt(3));return u}function w(N){if(typeof N!="function")throw new Error(Kt(4));if(m)throw new Error(Kt(5));var j=!0;return y(),p.push(N),function(){if(j){if(m)throw new Error(Kt(6));j=!1,y();var W=p.indexOf(N);p.splice(W,1),d=null}}}function S(N){if(!N_(N))throw new Error(Kt(7));if(typeof N.type>"u")throw new Error(Kt(8));if(m)throw new Error(Kt(9));try{m=!0,u=a(u,N)}finally{m=!1}for(var j=d=p,z=0;z<j.length;z++){var W=j[z];W()}return N}function I(N){if(typeof N!="function")throw new Error(Kt(10));a=N,S({type:mv.REPLACE})}function T(){var N,j=w;return N={subscribe:function(W){if(typeof W!="object"||W===null)throw new Error(Kt(11));function G(){W.next&&W.next(b())}G();var K=j(G);return{unsubscribe:K}}},N[hv]=function(){return this},N}return S({type:mv.INIT}),o={dispatch:S,subscribe:w,getState:b,replaceReducer:I},o[hv]=T,o}function vv(t,e){return function(){return e(t.apply(this,arguments))}}function yv(t,e){if(typeof t=="function")return vv(t,e);if(typeof t!="object"||t===null)throw new Error(Kt(16));var n={};for(var o in t){var a=t[o];typeof a=="function"&&(n[o]=vv(a,e))}return n}function B0(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(o){return o}:e.length===1?e[0]:e.reduce(function(o,a){return function(){return o(a.apply(void 0,arguments))}})}function L_(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(o){return function(){var a=o.apply(void 0,arguments),u=function(){throw new Error(Kt(15))},d={getState:a.getState,dispatch:function(){return u.apply(void 0,arguments)}},p=e.map(function(m){return m(d)});return u=B0.apply(void 0,p)(a.dispatch),pv(pv({},a),{},{dispatch:u})}}}var j0=Ae.createContext(null);function M_(t){t()}var F0=M_,B_=function(e){return F0=e},j_=function(){return F0};function F_(){var t=j_(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var a=e;a;)a.callback(),a=a.next})},get:function(){for(var a=[],u=e;u;)a.push(u),u=u.next;return a},subscribe:function(a){var u=!0,d=n={callback:a,next:null,prev:n};return d.prev?d.prev.next=d:e=d,function(){!u||e===null||(u=!1,d.next?d.next.prev=d.prev:n=d.prev,d.prev?d.prev.next=d.next:e=d.next)}}}}var wv={notify:function(){},get:function(){return[]}};function U0(t,e){var n,o=wv;function a(w){return m(),o.subscribe(w)}function u(){o.notify()}function d(){b.onStateChange&&b.onStateChange()}function p(){return!!n}function m(){n||(n=e?e.addNestedSub(d):t.subscribe(d),o=F_())}function y(){n&&(n(),n=void 0,o.clear(),o=wv)}var b={addNestedSub:a,notifyNestedSubs:u,handleChangeWrapper:d,isSubscribed:p,trySubscribe:m,tryUnsubscribe:y,getListeners:function(){return o}};return b}var $0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?re.useLayoutEffect:re.useEffect;function U_(t){var e=t.store,n=t.context,o=t.children,a=re.useMemo(function(){var p=U0(e);return{store:e,subscription:p}},[e]),u=re.useMemo(function(){return e.getState()},[e]);$0(function(){var p=a.subscription;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),u!==e.getState()&&p.notifyNestedSubs(),function(){p.tryUnsubscribe(),p.onStateChange=null}},[a,u]);var d=n||j0;return Ae.createElement(d.Provider,{value:a},o)}function zu(t,e){if(t==null)return{};var n={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)!==-1)continue;n[o]=t[o]}return n}var cf={exports:{}},Ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function $_(){if(Sv)return Ue;Sv=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,a=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,d=t?Symbol.for("react.provider"):60109,p=t?Symbol.for("react.context"):60110,m=t?Symbol.for("react.async_mode"):60111,y=t?Symbol.for("react.concurrent_mode"):60111,b=t?Symbol.for("react.forward_ref"):60112,w=t?Symbol.for("react.suspense"):60113,S=t?Symbol.for("react.suspense_list"):60120,I=t?Symbol.for("react.memo"):60115,T=t?Symbol.for("react.lazy"):60116,N=t?Symbol.for("react.block"):60121,j=t?Symbol.for("react.fundamental"):60117,z=t?Symbol.for("react.responder"):60118,W=t?Symbol.for("react.scope"):60119;function G(V){if(typeof V=="object"&&V!==null){var J=V.$$typeof;switch(J){case e:switch(V=V.type,V){case m:case y:case o:case u:case a:case w:return V;default:switch(V=V&&V.$$typeof,V){case p:case b:case T:case I:case d:return V;default:return J}}case n:return J}}}function K(V){return G(V)===y}return Ue.AsyncMode=m,Ue.ConcurrentMode=y,Ue.ContextConsumer=p,Ue.ContextProvider=d,Ue.Element=e,Ue.ForwardRef=b,Ue.Fragment=o,Ue.Lazy=T,Ue.Memo=I,Ue.Portal=n,Ue.Profiler=u,Ue.StrictMode=a,Ue.Suspense=w,Ue.isAsyncMode=function(V){return K(V)||G(V)===m},Ue.isConcurrentMode=K,Ue.isContextConsumer=function(V){return G(V)===p},Ue.isContextProvider=function(V){return G(V)===d},Ue.isElement=function(V){return typeof V=="object"&&V!==null&&V.$$typeof===e},Ue.isForwardRef=function(V){return G(V)===b},Ue.isFragment=function(V){return G(V)===o},Ue.isLazy=function(V){return G(V)===T},Ue.isMemo=function(V){return G(V)===I},Ue.isPortal=function(V){return G(V)===n},Ue.isProfiler=function(V){return G(V)===u},Ue.isStrictMode=function(V){return G(V)===a},Ue.isSuspense=function(V){return G(V)===w},Ue.isValidElementType=function(V){return typeof V=="string"||typeof V=="function"||V===o||V===y||V===u||V===a||V===w||V===S||typeof V=="object"&&V!==null&&(V.$$typeof===T||V.$$typeof===I||V.$$typeof===d||V.$$typeof===p||V.$$typeof===b||V.$$typeof===j||V.$$typeof===z||V.$$typeof===W||V.$$typeof===N)},Ue.typeOf=G,Ue}var bv;function z_(){return bv||(bv=1,cf.exports=$_()),cf.exports}var df,Ev;function H_(){if(Ev)return df;Ev=1;var t=z_(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[t.ForwardRef]=o,u[t.Memo]=a;function d(T){return t.isMemo(T)?a:u[T.$$typeof]||e}var p=Object.defineProperty,m=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,b=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,S=Object.prototype;function I(T,N,j){if(typeof N!="string"){if(S){var z=w(N);z&&z!==S&&I(T,z,j)}var W=m(N);y&&(W=W.concat(y(N)));for(var G=d(T),K=d(N),V=0;V<W.length;++V){var J=W[V];if(!n[J]&&!(j&&j[J])&&!(K&&K[J])&&!(G&&G[J])){var k=b(N,J);try{p(T,J,k)}catch{}}}}return T}return df=I,df}var W_=H_();const Iv=Ju(W_);var ff={exports:{}},Ve={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function V_(){if(xv)return Ve;xv=1;var t=60103,e=60106,n=60107,o=60108,a=60114,u=60109,d=60110,p=60112,m=60113,y=60120,b=60115,w=60116,S=60121,I=60122,T=60117,N=60129,j=60131;if(typeof Symbol=="function"&&Symbol.for){var z=Symbol.for;t=z("react.element"),e=z("react.portal"),n=z("react.fragment"),o=z("react.strict_mode"),a=z("react.profiler"),u=z("react.provider"),d=z("react.context"),p=z("react.forward_ref"),m=z("react.suspense"),y=z("react.suspense_list"),b=z("react.memo"),w=z("react.lazy"),S=z("react.block"),I=z("react.server.block"),T=z("react.fundamental"),N=z("react.debug_trace_mode"),j=z("react.legacy_hidden")}function W(C){if(typeof C=="object"&&C!==null){var Se=C.$$typeof;switch(Se){case t:switch(C=C.type,C){case n:case a:case o:case m:case y:return C;default:switch(C=C&&C.$$typeof,C){case d:case p:case w:case b:case u:return C;default:return Se}}case e:return Se}}}var G=u,K=t,V=p,J=n,k=w,_=b,P=e,A=a,R=o,B=m;return Ve.ContextConsumer=d,Ve.ContextProvider=G,Ve.Element=K,Ve.ForwardRef=V,Ve.Fragment=J,Ve.Lazy=k,Ve.Memo=_,Ve.Portal=P,Ve.Profiler=A,Ve.StrictMode=R,Ve.Suspense=B,Ve.isAsyncMode=function(){return!1},Ve.isConcurrentMode=function(){return!1},Ve.isContextConsumer=function(C){return W(C)===d},Ve.isContextProvider=function(C){return W(C)===u},Ve.isElement=function(C){return typeof C=="object"&&C!==null&&C.$$typeof===t},Ve.isForwardRef=function(C){return W(C)===p},Ve.isFragment=function(C){return W(C)===n},Ve.isLazy=function(C){return W(C)===w},Ve.isMemo=function(C){return W(C)===b},Ve.isPortal=function(C){return W(C)===e},Ve.isProfiler=function(C){return W(C)===a},Ve.isStrictMode=function(C){return W(C)===o},Ve.isSuspense=function(C){return W(C)===m},Ve.isValidElementType=function(C){return typeof C=="string"||typeof C=="function"||C===n||C===a||C===N||C===o||C===m||C===y||C===j||typeof C=="object"&&C!==null&&(C.$$typeof===w||C.$$typeof===b||C.$$typeof===u||C.$$typeof===d||C.$$typeof===p||C.$$typeof===T||C.$$typeof===S||C[0]===I)},Ve.typeOf=W,Ve}var Cv;function G_(){return Cv||(Cv=1,ff.exports=V_()),ff.exports}var q_=G_(),K_=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],Y_=["reactReduxForwardedRef"],X_=[],J_=[null,null];function Q_(t,e){var n=t[1];return[e.payload,n+1]}function _v(t,e,n){$0(function(){return t.apply(void 0,e)},n)}function Z_(t,e,n,o,a,u,d){t.current=o,e.current=a,n.current=!1,u.current&&(u.current=null,d())}function eT(t,e,n,o,a,u,d,p,m,y){if(t){var b=!1,w=null,S=function(){if(!b){var N=e.getState(),j,z;try{j=o(N,a.current)}catch(W){z=W,w=W}z||(w=null),j===u.current?d.current||m():(u.current=j,p.current=j,d.current=!0,y({type:"STORE_UPDATED",payload:{error:z}}))}};n.onStateChange=S,n.trySubscribe(),S();var I=function(){if(b=!0,n.tryUnsubscribe(),n.onStateChange=null,w)throw w};return I}}var tT=function(){return[null,0]};function rT(t,e){e===void 0&&(e={});var n=e,o=n.getDisplayName,a=o===void 0?function(G){return"ConnectAdvanced("+G+")"}:o,u=n.methodName,d=u===void 0?"connectAdvanced":u,p=n.renderCountProp,m=p===void 0?void 0:p,y=n.shouldHandleStateChanges,b=y===void 0?!0:y,w=n.storeKey,S=w===void 0?"store":w;n.withRef;var I=n.forwardRef,T=I===void 0?!1:I,N=n.context,j=N===void 0?j0:N,z=zu(n,K_),W=j;return function(K){var V=K.displayName||K.name||"Component",J=a(V),k=we({},z,{getDisplayName:a,methodName:d,renderCountProp:m,shouldHandleStateChanges:b,storeKey:S,displayName:J,wrappedComponentName:V,WrappedComponent:K}),_=z.pure;function P(Se){return t(Se.dispatch,k)}var A=_?re.useMemo:function(Se){return Se()};function R(Se){var je=re.useMemo(function(){var cr=Se.reactReduxForwardedRef,Jt=zu(Se,Y_);return[Se.context,cr,Jt]},[Se]),Fe=je[0],Pe=je[1],ne=je[2],le=re.useMemo(function(){return Fe&&Fe.Consumer&&q_.isContextConsumer(Ae.createElement(Fe.Consumer,null))?Fe:W},[Fe,W]),oe=re.useContext(le),M=!!Se.store&&!!Se.store.getState&&!!Se.store.dispatch;oe&&oe.store;var X=M?Se.store:oe.store,de=re.useMemo(function(){return P(X)},[X]),Ee=re.useMemo(function(){if(!b)return J_;var cr=U0(X,M?null:oe.subscription),Jt=cr.notifyNestedSubs.bind(cr);return[cr,Jt]},[X,M,oe]),me=Ee[0],xe=Ee[1],_e=re.useMemo(function(){return M?oe:we({},oe,{subscription:me})},[M,oe,me]),Ce=re.useReducer(Q_,X_,tT),ke=Ce[0],He=ke[0],ft=Ce[1];if(He&&He.error)throw He.error;var pt=re.useRef(),lr=re.useRef(ne),ur=re.useRef(),on=re.useRef(!1),sn=A(function(){return ur.current&&ne===lr.current?ur.current:de(X.getState(),ne)},[X,He,ne]);_v(Z_,[lr,pt,on,ne,sn,ur,xe]),_v(eT,[b,X,me,de,lr,pt,on,ur,xe,ft],[X,me,de]);var an=re.useMemo(function(){return Ae.createElement(K,we({},sn,{ref:Pe}))},[Pe,K,sn]),so=re.useMemo(function(){return b?Ae.createElement(le.Provider,{value:_e},an):an},[le,an,_e]);return so}var B=_?Ae.memo(R):R;if(B.WrappedComponent=K,B.displayName=R.displayName=J,T){var C=Ae.forwardRef(function(je,Fe){return Ae.createElement(B,we({},je,{reactReduxForwardedRef:Fe}))});return C.displayName=J,C.WrappedComponent=K,Iv(C,K)}return Iv(B,K)}}function Tv(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function pf(t,e){if(Tv(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(var a=0;a<n.length;a++)if(!Object.prototype.hasOwnProperty.call(e,n[a])||!Tv(t[n[a]],e[n[a]]))return!1;return!0}function nT(t,e){var n={},o=function(d){var p=t[d];typeof p=="function"&&(n[d]=function(){return e(p.apply(void 0,arguments))})};for(var a in t)o(a);return n}function wp(t){return function(n,o){var a=t(n,o);function u(){return a}return u.dependsOnOwnProps=!1,u}}function Pv(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function z0(t,e){return function(o,a){a.displayName;var u=function(p,m){return u.dependsOnOwnProps?u.mapToProps(p,m):u.mapToProps(p)};return u.dependsOnOwnProps=!0,u.mapToProps=function(p,m){u.mapToProps=t,u.dependsOnOwnProps=Pv(t);var y=u(p,m);return typeof y=="function"&&(u.mapToProps=y,u.dependsOnOwnProps=Pv(y),y=u(p,m)),y},u}}function iT(t){return typeof t=="function"?z0(t):void 0}function oT(t){return t?void 0:wp(function(e){return{dispatch:e}})}function sT(t){return t&&typeof t=="object"?wp(function(e){return nT(t,e)}):void 0}const aT=[iT,oT,sT];function lT(t){return typeof t=="function"?z0(t):void 0}function uT(t){return t?void 0:wp(function(){return{}})}const cT=[lT,uT];function dT(t,e,n){return we({},n,t,e)}function fT(t){return function(n,o){o.displayName;var a=o.pure,u=o.areMergedPropsEqual,d=!1,p;return function(y,b,w){var S=t(y,b,w);return d?(!a||!u(S,p))&&(p=S):(d=!0,p=S),p}}}function pT(t){return typeof t=="function"?fT(t):void 0}function hT(t){return t?void 0:function(){return dT}}const gT=[pT,hT];var mT=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function vT(t,e,n,o){return function(u,d){return n(t(u,d),e(o,d),d)}}function yT(t,e,n,o,a){var u=a.areStatesEqual,d=a.areOwnPropsEqual,p=a.areStatePropsEqual,m=!1,y,b,w,S,I;function T(G,K){return y=G,b=K,w=t(y,b),S=e(o,b),I=n(w,S,b),m=!0,I}function N(){return w=t(y,b),e.dependsOnOwnProps&&(S=e(o,b)),I=n(w,S,b),I}function j(){return t.dependsOnOwnProps&&(w=t(y,b)),e.dependsOnOwnProps&&(S=e(o,b)),I=n(w,S,b),I}function z(){var G=t(y,b),K=!p(G,w);return w=G,K&&(I=n(w,S,b)),I}function W(G,K){var V=!d(K,b),J=!u(G,y,K,b);return y=G,b=K,V&&J?N():V?j():J?z():I}return function(K,V){return m?W(K,V):T(K,V)}}function wT(t,e){var n=e.initMapStateToProps,o=e.initMapDispatchToProps,a=e.initMergeProps,u=zu(e,mT),d=n(t,u),p=o(t,u),m=a(t,u),y=u.pure?yT:vT;return y(d,p,m,t,u)}var ST=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function hf(t,e,n){for(var o=e.length-1;o>=0;o--){var a=e[o](t);if(a)return a}return function(u,d){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+d.wrappedComponentName+".")}}function bT(t,e){return t===e}function ET(t){var e=t===void 0?{}:t,n=e.connectHOC,o=n===void 0?rT:n,a=e.mapStateToPropsFactories,u=a===void 0?cT:a,d=e.mapDispatchToPropsFactories,p=d===void 0?aT:d,m=e.mergePropsFactories,y=m===void 0?gT:m,b=e.selectorFactory,w=b===void 0?wT:b;return function(I,T,N,j){j===void 0&&(j={});var z=j,W=z.pure,G=W===void 0?!0:W,K=z.areStatesEqual,V=K===void 0?bT:K,J=z.areOwnPropsEqual,k=J===void 0?pf:J,_=z.areStatePropsEqual,P=_===void 0?pf:_,A=z.areMergedPropsEqual,R=A===void 0?pf:A,B=zu(z,ST),C=hf(I,u,"mapStateToProps"),Se=hf(T,p,"mapDispatchToProps"),je=hf(N,y,"mergeProps");return o(w,we({methodName:"connect",getDisplayName:function(Pe){return"Connect("+Pe+")"},shouldHandleStateChanges:!!I,initMapStateToProps:C,initMapDispatchToProps:Se,initMergeProps:je,pure:G,areStatesEqual:V,areOwnPropsEqual:k,areStatePropsEqual:P,areMergedPropsEqual:R},B))}}const H0=ET();var W0=ay();const IT=Ju(W0);B_(W0.unstable_batchedUpdates);function xT(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function V0(t,e){var n=re.useState(function(){return{inputs:e,result:t()}})[0],o=re.useRef(!0),a=re.useRef(n),u=o.current||!!(e&&a.current.inputs&&xT(e,a.current.inputs)),d=u?a.current:{inputs:e,result:t()};return re.useEffect(function(){o.current=!1,a.current=d},[d]),d.result}function CT(t,e){return V0(function(){return t},e)}var Me=V0,ge=CT,_T="Invariant failed";function TT(t,e){throw new Error(_T)}var zr=function(e){var n=e.top,o=e.right,a=e.bottom,u=e.left,d=o-u,p=a-n,m={top:n,right:o,bottom:a,left:u,width:d,height:p,x:u,y:n,center:{x:(o+u)/2,y:(a+n)/2}};return m},Sp=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},kv=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},PT=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},gf={top:0,right:0,bottom:0,left:0},bp=function(e){var n=e.borderBox,o=e.margin,a=o===void 0?gf:o,u=e.border,d=u===void 0?gf:u,p=e.padding,m=p===void 0?gf:p,y=zr(Sp(n,a)),b=zr(kv(n,d)),w=zr(kv(b,m));return{marginBox:y,borderBox:zr(n),paddingBox:b,contentBox:w,margin:a,border:d,padding:m}},Sr=function(e){var n=e.slice(0,-2),o=e.slice(-2);if(o!=="px")return 0;var a=Number(n);return isNaN(a)&&TT(),a},kT=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Hu=function(e,n){var o=e.borderBox,a=e.border,u=e.margin,d=e.padding,p=PT(o,n);return bp({borderBox:p,border:a,margin:u,padding:d})},Wu=function(e,n){return n===void 0&&(n=kT()),Hu(e,n)},G0=function(e,n){var o={top:Sr(n.marginTop),right:Sr(n.marginRight),bottom:Sr(n.marginBottom),left:Sr(n.marginLeft)},a={top:Sr(n.paddingTop),right:Sr(n.paddingRight),bottom:Sr(n.paddingBottom),left:Sr(n.paddingLeft)},u={top:Sr(n.borderTopWidth),right:Sr(n.borderRightWidth),bottom:Sr(n.borderBottomWidth),left:Sr(n.borderLeftWidth)};return bp({borderBox:e,margin:o,padding:a,border:u})},q0=function(e){var n=e.getBoundingClientRect(),o=window.getComputedStyle(e);return G0(n,o)},Dv=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function DT(t,e){return!!(t===e||Dv(t)&&Dv(e))}function AT(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!DT(t[n],e[n]))return!1;return!0}function bt(t,e){e===void 0&&(e=AT);var n,o=[],a,u=!1;function d(){for(var p=[],m=0;m<arguments.length;m++)p[m]=arguments[m];return u&&n===this&&e(p,o)||(a=t.apply(this,p),u=!0,n=this,o=p),a}return d}var Ma=function(e){var n=[],o=null,a=function(){for(var d=arguments.length,p=new Array(d),m=0;m<d;m++)p[m]=arguments[m];n=p,!o&&(o=requestAnimationFrame(function(){o=null,e.apply(void 0,n)}))};return a.cancel=function(){o&&(cancelAnimationFrame(o),o=null)},a};function K0(t,e){}K0.bind(null,"warn");K0.bind(null,"error");function gi(){}function RT(t,e){return we({},t,{},e)}function Er(t,e,n){var o=e.map(function(a){var u=RT(n,a.options);return t.addEventListener(a.eventName,a.fn,u),function(){t.removeEventListener(a.eventName,a.fn,u)}});return function(){o.forEach(function(u){u()})}}var OT="Invariant failed";function Vu(t){this.message=t}Vu.prototype.toString=function(){return this.message};function se(t,e){throw new Vu(OT)}var NT=function(t){L0(e,t);function e(){for(var o,a=arguments.length,u=new Array(a),d=0;d<a;d++)u[d]=arguments[d];return o=t.call.apply(t,[this].concat(u))||this,o.callbacks=null,o.unbind=gi,o.onWindowError=function(p){var m=o.getCallbacks();m.isDragging()&&m.tryAbort();var y=p.error;y instanceof Vu&&p.preventDefault()},o.getCallbacks=function(){if(!o.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return o.callbacks},o.setCallbacks=function(p){o.callbacks=p},o}var n=e.prototype;return n.componentDidMount=function(){this.unbind=Er(window,[{eventName:"error",fn:this.onWindowError}])},n.componentDidCatch=function(a){if(a instanceof Vu){this.setState({});return}throw a},n.componentWillUnmount=function(){this.unbind()},n.render=function(){return this.props.children(this.setCallbacks)},e}(Ae.Component),LT=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Gu=function(e){return e+1},MT=function(e){return`
  You have lifted an item in position `+Gu(e.source.index)+`
`},Y0=function(e,n){var o=e.droppableId===n.droppableId,a=Gu(e.index),u=Gu(n.index);return o?`
      You have moved the item from position `+a+`
      to position `+u+`
    `:`
    You have moved the item from position `+a+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+u+`
  `},X0=function(e,n,o){var a=n.droppableId===o.droppableId;return a?`
      The item `+e+`
      has been combined with `+o.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+o.draggableId+`
      in list `+o.droppableId+`
    `},BT=function(e){var n=e.destination;if(n)return Y0(e.source,n);var o=e.combine;return o?X0(e.draggableId,e.source,o):"You are over an area that cannot be dropped on"},Av=function(e){return`
  The item has returned to its starting position
  of `+Gu(e.index)+`
`},jT=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+Av(e.source)+`
    `;var n=e.destination,o=e.combine;return n?`
      You have dropped the item.
      `+Y0(e.source,n)+`
    `:o?`
      You have dropped the item.
      `+X0(e.draggableId,e.source,o)+`
    `:`
    The item has been dropped while not over a drop area.
    `+Av(e.source)+`
  `},Pu={dragHandleUsageInstructions:LT,onDragStart:MT,onDragUpdate:BT,onDragEnd:jT},Et={x:0,y:0},Pt=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},or=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},mi=function(e,n){return e.x===n.x&&e.y===n.y},vs=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},io=function(e,n,o){var a;return o===void 0&&(o=0),a={},a[e]=n,a[e==="x"?"y":"x"]=o,a},Ba=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},Rv=function(e,n){return Math.min.apply(Math,n.map(function(o){return Ba(e,o)}))},J0=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},FT=function(t,e){var n=zr({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},Ka=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},Ov=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},UT={top:0,right:0,bottom:0,left:0},$T=function(e,n){return n?Ka(e,n.scroll.diff.displacement):e},zT=function(e,n,o){if(o&&o.increasedBy){var a;return we({},e,(a={},a[n.end]=e[n.end]+o.increasedBy[n.line],a))}return e},HT=function(e,n){return n&&n.shouldClipSubject?FT(n.pageMarginBox,e):zr(e)},cs=function(t){var e=t.page,n=t.withPlaceholder,o=t.axis,a=t.frame,u=$T(e.marginBox,a),d=zT(u,o,n),p=HT(d,a);return{page:e,withPlaceholder:n,active:p}},Ep=function(t,e){t.frame||se();var n=t.frame,o=or(e,n.scroll.initial),a=vs(o),u=we({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:o,displacement:a},max:n.scroll.max}}),d=cs({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:u}),p=we({},t,{frame:u,subject:d});return p};function qu(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function Ip(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function bi(t,e){if(t.find)return t.find(e);var n=Ip(t,e);if(n!==-1)return t[n]}function Q0(t){return Array.prototype.slice.call(t)}var Z0=bt(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),ew=bt(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),ac=bt(function(t){return qu(t)}),WT=bt(function(t){return qu(t)}),ys=bt(function(t,e){var n=WT(e).filter(function(o){return t===o.descriptor.droppableId}).sort(function(o,a){return o.descriptor.index-a.descriptor.index});return n});function xp(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function lc(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var uc=bt(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),VT=function(t){var e=t.isMovingForward,n=t.draggable,o=t.destination,a=t.insideDestination,u=t.previousImpact;if(!o.isCombineEnabled)return null;var d=xp(u);if(!d)return null;function p(N){var j={type:"COMBINE",combine:{draggableId:N,droppableId:o.descriptor.id}};return we({},u,{at:j})}var m=u.displaced.all,y=m.length?m[0]:null;if(e)return y?p(y):null;var b=uc(n,a);if(!y){if(!b.length)return null;var w=b[b.length-1];return p(w.descriptor.id)}var S=Ip(b,function(N){return N.descriptor.id===y});S===-1&&se();var I=S-1;if(I<0)return null;var T=b[I];return p(T.descriptor.id)},ws=function(t,e){return t.descriptor.droppableId===e.descriptor.id},tw={point:Et,value:0},ja={invisible:{},visible:{},all:[]},GT={displaced:ja,displacedBy:tw,at:null},Ir=function(t,e){return function(n){return t<=n&&n<=e}},rw=function(t){var e=Ir(t.top,t.bottom),n=Ir(t.left,t.right);return function(o){var a=e(o.top)&&e(o.bottom)&&n(o.left)&&n(o.right);if(a)return!0;var u=e(o.top)||e(o.bottom),d=n(o.left)||n(o.right),p=u&&d;if(p)return!0;var m=o.top<t.top&&o.bottom>t.bottom,y=o.left<t.left&&o.right>t.right,b=m&&y;if(b)return!0;var w=m&&d||y&&u;return w}},qT=function(t){var e=Ir(t.top,t.bottom),n=Ir(t.left,t.right);return function(o){var a=e(o.top)&&e(o.bottom)&&n(o.left)&&n(o.right);return a}},Cp={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},nw={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},KT=function(t){return function(e){var n=Ir(e.top,e.bottom),o=Ir(e.left,e.right);return function(a){return t===Cp?n(a.top)&&n(a.bottom):o(a.left)&&o(a.right)}}},YT=function(e,n){var o=n.frame?n.frame.scroll.diff.displacement:Et;return Ka(e,o)},XT=function(e,n,o){return n.subject.active?o(n.subject.active)(e):!1},JT=function(e,n,o){return o(n)(e)},_p=function(e){var n=e.target,o=e.destination,a=e.viewport,u=e.withDroppableDisplacement,d=e.isVisibleThroughFrameFn,p=u?YT(n,o):n;return XT(p,o,d)&&JT(p,a,d)},QT=function(e){return _p(we({},e,{isVisibleThroughFrameFn:rw}))},iw=function(e){return _p(we({},e,{isVisibleThroughFrameFn:qT}))},ZT=function(e){return _p(we({},e,{isVisibleThroughFrameFn:KT(e.destination.axis)}))},eP=function(e,n,o){if(typeof o=="boolean")return o;if(!n)return!0;var a=n.invisible,u=n.visible;if(a[e])return!1;var d=u[e];return d?d.shouldAnimate:!0};function tP(t,e){var n=t.page.marginBox,o={top:e.point.y,right:0,bottom:0,left:e.point.x};return zr(Sp(n,o))}function Fa(t){var e=t.afterDragging,n=t.destination,o=t.displacedBy,a=t.viewport,u=t.forceShouldAnimate,d=t.last;return e.reduce(function(m,y){var b=tP(y,o),w=y.descriptor.id;m.all.push(w);var S=QT({target:b,destination:n,viewport:a,withDroppableDisplacement:!0});if(!S)return m.invisible[y.descriptor.id]=!0,m;var I=eP(w,d,u),T={draggableId:w,shouldAnimate:I};return m.visible[w]=T,m},{all:[],visible:{},invisible:{}})}function rP(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function Nv(t){var e=t.insideDestination,n=t.inHomeList,o=t.displacedBy,a=t.destination,u=rP(e,{inHomeList:n});return{displaced:ja,displacedBy:o,at:{type:"REORDER",destination:{droppableId:a.descriptor.id,index:u}}}}function Ku(t){var e=t.draggable,n=t.insideDestination,o=t.destination,a=t.viewport,u=t.displacedBy,d=t.last,p=t.index,m=t.forceShouldAnimate,y=ws(e,o);if(p==null)return Nv({insideDestination:n,inHomeList:y,displacedBy:u,destination:o});var b=bi(n,function(N){return N.descriptor.index===p});if(!b)return Nv({insideDestination:n,inHomeList:y,displacedBy:u,destination:o});var w=uc(e,n),S=n.indexOf(b),I=w.slice(S),T=Fa({afterDragging:I,destination:o,displacedBy:u,last:d,viewport:a.frame,forceShouldAnimate:m});return{displaced:T,displacedBy:u,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:p}}}}function yi(t,e){return!!e.effected[t]}var nP=function(t){var e=t.isMovingForward,n=t.destination,o=t.draggables,a=t.combine,u=t.afterCritical;if(!n.isCombineEnabled)return null;var d=a.draggableId,p=o[d],m=p.descriptor.index,y=yi(d,u);return y?e?m:m-1:e?m+1:m},iP=function(t){var e=t.isMovingForward,n=t.isInHomeList,o=t.insideDestination,a=t.location;if(!o.length)return null;var u=a.index,d=e?u+1:u-1,p=o[0].descriptor.index,m=o[o.length-1].descriptor.index,y=n?m:m+1;return d<p||d>y?null:d},oP=function(t){var e=t.isMovingForward,n=t.isInHomeList,o=t.draggable,a=t.draggables,u=t.destination,d=t.insideDestination,p=t.previousImpact,m=t.viewport,y=t.afterCritical,b=p.at;if(b||se(),b.type==="REORDER"){var w=iP({isMovingForward:e,isInHomeList:n,location:b.destination,insideDestination:d});return w==null?null:Ku({draggable:o,insideDestination:d,destination:u,viewport:m,last:p.displaced,displacedBy:p.displacedBy,index:w})}var S=nP({isMovingForward:e,destination:u,displaced:p.displaced,draggables:a,combine:b.combine,afterCritical:y});return S==null?null:Ku({draggable:o,insideDestination:d,destination:u,viewport:m,last:p.displaced,displacedBy:p.displacedBy,index:S})},sP=function(t){var e=t.displaced,n=t.afterCritical,o=t.combineWith,a=t.displacedBy,u=!!(e.visible[o]||e.invisible[o]);return yi(o,n)?u?Et:vs(a.point):u?a.point:Et},aP=function(t){var e=t.afterCritical,n=t.impact,o=t.draggables,a=lc(n);a||se();var u=a.draggableId,d=o[u].page.borderBox.center,p=sP({displaced:n.displaced,afterCritical:e,combineWith:u,displacedBy:n.displacedBy});return Pt(d,p)},ow=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},lP=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},Tp=function(e,n,o){return n[e.crossAxisStart]+o.margin[e.crossAxisStart]+o.borderBox[e.crossAxisSize]/2},Lv=function(e){var n=e.axis,o=e.moveRelativeTo,a=e.isMoving;return io(n.line,o.marginBox[n.end]+ow(n,a),Tp(n,o.marginBox,a))},Mv=function(e){var n=e.axis,o=e.moveRelativeTo,a=e.isMoving;return io(n.line,o.marginBox[n.start]-lP(n,a),Tp(n,o.marginBox,a))},uP=function(e){var n=e.axis,o=e.moveInto,a=e.isMoving;return io(n.line,o.contentBox[n.start]+ow(n,a),Tp(n,o.contentBox,a))},cP=function(t){var e=t.impact,n=t.draggable,o=t.draggables,a=t.droppable,u=t.afterCritical,d=ys(a.descriptor.id,o),p=n.page,m=a.axis;if(!d.length)return uP({axis:m,moveInto:a.page,isMoving:p});var y=e.displaced,b=e.displacedBy,w=y.all[0];if(w){var S=o[w];if(yi(w,u))return Mv({axis:m,moveRelativeTo:S.page,isMoving:p});var I=Hu(S.page,b.point);return Mv({axis:m,moveRelativeTo:I,isMoving:p})}var T=d[d.length-1];if(T.descriptor.id===n.descriptor.id)return p.borderBox.center;if(yi(T.descriptor.id,u)){var N=Hu(T.page,vs(u.displacedBy.point));return Lv({axis:m,moveRelativeTo:N,isMoving:p})}return Lv({axis:m,moveRelativeTo:T.page,isMoving:p})},Wf=function(t,e){var n=t.frame;return n?Pt(e,n.scroll.diff.displacement):e},dP=function(e){var n=e.impact,o=e.draggable,a=e.droppable,u=e.draggables,d=e.afterCritical,p=o.page.borderBox.center,m=n.at;return!a||!m?p:m.type==="REORDER"?cP({impact:n,draggable:o,draggables:u,droppable:a,afterCritical:d}):aP({impact:n,draggables:u,afterCritical:d})},cc=function(t){var e=dP(t),n=t.droppable,o=n?Wf(n,e):e;return o},sw=function(t,e){var n=or(e,t.scroll.initial),o=vs(n),a=zr({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),u={frame:a,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:o}}};return u};function Bv(t,e){return t.map(function(n){return e[n]})}function fP(t,e){for(var n=0;n<e.length;n++){var o=e[n].visible[t];if(o)return o}return null}var pP=function(t){var e=t.impact,n=t.viewport,o=t.destination,a=t.draggables,u=t.maxScrollChange,d=sw(n,Pt(n.scroll.current,u)),p=o.frame?Ep(o,Pt(o.frame.scroll.current,u)):o,m=e.displaced,y=Fa({afterDragging:Bv(m.all,a),destination:o,displacedBy:e.displacedBy,viewport:d.frame,last:m,forceShouldAnimate:!1}),b=Fa({afterDragging:Bv(m.all,a),destination:p,displacedBy:e.displacedBy,viewport:n.frame,last:m,forceShouldAnimate:!1}),w={},S={},I=[m,y,b];m.all.forEach(function(N){var j=fP(N,I);if(j){S[N]=j;return}w[N]=!0});var T=we({},e,{displaced:{all:m.all,invisible:w,visible:S}});return T},hP=function(t,e){return Pt(t.scroll.diff.displacement,e)},Pp=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,o=t.viewport,a=hP(o,e),u=or(a,n.page.borderBox.center);return Pt(n.client.borderBox.center,u)},aw=function(t){var e=t.draggable,n=t.destination,o=t.newPageBorderBoxCenter,a=t.viewport,u=t.withDroppableDisplacement,d=t.onlyOnMainAxis,p=d===void 0?!1:d,m=or(o,e.page.borderBox.center),y=Ka(e.page.borderBox,m),b={target:y,destination:n,withDroppableDisplacement:u,viewport:a};return p?ZT(b):iw(b)},gP=function(t){var e=t.isMovingForward,n=t.draggable,o=t.destination,a=t.draggables,u=t.previousImpact,d=t.viewport,p=t.previousPageBorderBoxCenter,m=t.previousClientSelection,y=t.afterCritical;if(!o.isEnabled)return null;var b=ys(o.descriptor.id,a),w=ws(n,o),S=VT({isMovingForward:e,draggable:n,destination:o,insideDestination:b,previousImpact:u})||oP({isMovingForward:e,isInHomeList:w,draggable:n,draggables:a,destination:o,insideDestination:b,previousImpact:u,viewport:d,afterCritical:y});if(!S)return null;var I=cc({impact:S,draggable:n,droppable:o,draggables:a,afterCritical:y}),T=aw({draggable:n,destination:o,newPageBorderBoxCenter:I,viewport:d.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(T){var N=Pp({pageBorderBoxCenter:I,draggable:n,viewport:d});return{clientSelection:N,impact:S,scrollJumpRequest:null}}var j=or(I,p),z=pP({impact:S,viewport:d,destination:o,draggables:a,maxScrollChange:j});return{clientSelection:m,impact:z,scrollJumpRequest:j}},Mt=function(e){var n=e.subject.active;return n||se(),n},mP=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,o=t.source,a=t.droppables,u=t.viewport,d=o.subject.active;if(!d)return null;var p=o.axis,m=Ir(d[p.start],d[p.end]),y=ac(a).filter(function(w){return w!==o}).filter(function(w){return w.isEnabled}).filter(function(w){return!!w.subject.active}).filter(function(w){return rw(u.frame)(Mt(w))}).filter(function(w){var S=Mt(w);return e?d[p.crossAxisEnd]<S[p.crossAxisEnd]:S[p.crossAxisStart]<d[p.crossAxisStart]}).filter(function(w){var S=Mt(w),I=Ir(S[p.start],S[p.end]);return m(S[p.start])||m(S[p.end])||I(d[p.start])||I(d[p.end])}).sort(function(w,S){var I=Mt(w)[p.crossAxisStart],T=Mt(S)[p.crossAxisStart];return e?I-T:T-I}).filter(function(w,S,I){return Mt(w)[p.crossAxisStart]===Mt(I[0])[p.crossAxisStart]});if(!y.length)return null;if(y.length===1)return y[0];var b=y.filter(function(w){var S=Ir(Mt(w)[p.start],Mt(w)[p.end]);return S(n[p.line])});return b.length===1?b[0]:b.length>1?b.sort(function(w,S){return Mt(w)[p.start]-Mt(S)[p.start]})[0]:y.sort(function(w,S){var I=Rv(n,Ov(Mt(w))),T=Rv(n,Ov(Mt(S)));return I!==T?I-T:Mt(w)[p.start]-Mt(S)[p.start]})[0]},jv=function(e,n){var o=e.page.borderBox.center;return yi(e.descriptor.id,n)?or(o,n.displacedBy.point):o},vP=function(e,n){var o=e.page.borderBox;return yi(e.descriptor.id,n)?Ka(o,vs(n.displacedBy.point)):o},yP=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,o=t.destination,a=t.insideDestination,u=t.afterCritical,d=a.filter(function(p){return iw({target:vP(p,u),destination:o,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(p,m){var y=Ba(e,Wf(o,jv(p,u))),b=Ba(e,Wf(o,jv(m,u)));return y<b?-1:b<y?1:p.descriptor.index-m.descriptor.index});return d[0]||null},Ya=bt(function(e,n){var o=n[e.line];return{value:o,point:io(e.line,o)}}),wP=function(e,n,o){var a=e.axis;if(e.descriptor.mode==="virtual")return io(a.line,n[a.line]);var u=e.subject.page.contentBox[a.size],d=ys(e.descriptor.id,o),p=d.reduce(function(b,w){return b+w.client.marginBox[a.size]},0),m=p+n[a.line],y=m-u;return y<=0?null:io(a.line,y)},lw=function(e,n){return we({},e,{scroll:we({},e.scroll,{max:n})})},uw=function(e,n,o){var a=e.frame;ws(n,e)&&se(),e.subject.withPlaceholder&&se();var u=Ya(e.axis,n.displaceBy).point,d=wP(e,u,o),p={placeholderSize:u,increasedBy:d,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!a){var m=cs({page:e.subject.page,withPlaceholder:p,axis:e.axis,frame:e.frame});return we({},e,{subject:m})}var y=d?Pt(a.scroll.max,d):a.scroll.max,b=lw(a,y),w=cs({page:e.subject.page,withPlaceholder:p,axis:e.axis,frame:b});return we({},e,{subject:w,frame:b})},SP=function(e){var n=e.subject.withPlaceholder;n||se();var o=e.frame;if(!o){var a=cs({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return we({},e,{subject:a})}var u=n.oldFrameMaxScroll;u||se();var d=lw(o,u),p=cs({page:e.subject.page,axis:e.axis,frame:d,withPlaceholder:null});return we({},e,{subject:p,frame:d})},bP=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,o=t.insideDestination,a=t.draggable,u=t.draggables,d=t.destination,p=t.viewport,m=t.afterCritical;if(!n){if(o.length)return null;var y={displaced:ja,displacedBy:tw,at:{type:"REORDER",destination:{droppableId:d.descriptor.id,index:0}}},b=cc({impact:y,draggable:a,droppable:d,draggables:u,afterCritical:m}),w=ws(a,d)?d:uw(d,a,u),S=aw({draggable:a,destination:w,newPageBorderBoxCenter:b,viewport:p.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return S?y:null}var I=e[d.axis.line]<=n.page.borderBox.center[d.axis.line],T=function(){var j=n.descriptor.index;return n.descriptor.id===a.descriptor.id||I?j:j+1}(),N=Ya(d.axis,a.displaceBy);return Ku({draggable:a,insideDestination:o,destination:d,viewport:p,displacedBy:N,last:ja,index:T})},EP=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,o=t.draggable,a=t.isOver,u=t.draggables,d=t.droppables,p=t.viewport,m=t.afterCritical,y=mP({isMovingForward:e,pageBorderBoxCenter:n,source:a,droppables:d,viewport:p});if(!y)return null;var b=ys(y.descriptor.id,u),w=yP({pageBorderBoxCenter:n,viewport:p,destination:y,insideDestination:b,afterCritical:m}),S=bP({previousPageBorderBoxCenter:n,destination:y,draggable:o,draggables:u,moveRelativeTo:w,insideDestination:b,viewport:p,afterCritical:m});if(!S)return null;var I=cc({impact:S,draggable:o,droppable:y,draggables:u,afterCritical:m}),T=Pp({pageBorderBoxCenter:I,draggable:o,viewport:p});return{clientSelection:T,impact:S,scrollJumpRequest:null}},sr=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},IP=function(e,n){var o=sr(e);return o?n[o]:null},xP=function(t){var e=t.state,n=t.type,o=IP(e.impact,e.dimensions.droppables),a=!!o,u=e.dimensions.droppables[e.critical.droppable.id],d=o||u,p=d.axis.direction,m=p==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||p==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(m&&!a)return null;var y=n==="MOVE_DOWN"||n==="MOVE_RIGHT",b=e.dimensions.draggables[e.critical.draggable.id],w=e.current.page.borderBoxCenter,S=e.dimensions,I=S.draggables,T=S.droppables;return m?gP({isMovingForward:y,previousPageBorderBoxCenter:w,draggable:b,destination:d,draggables:I,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):EP({isMovingForward:y,previousPageBorderBoxCenter:w,draggable:b,isOver:d,draggables:I,droppables:T,viewport:e.viewport,afterCritical:e.afterCritical})};function Yi(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function cw(t){var e=Ir(t.top,t.bottom),n=Ir(t.left,t.right);return function(a){return e(a.y)&&n(a.x)}}function CP(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function _P(t){var e=t.pageBorderBox,n=t.draggable,o=t.candidates,a=n.page.borderBox.center,u=o.map(function(d){var p=d.axis,m=io(d.axis.line,e.center[p.line],d.page.borderBox.center[p.crossAxisLine]);return{id:d.descriptor.id,distance:Ba(a,m)}}).sort(function(d,p){return p.distance-d.distance});return u[0]?u[0].id:null}function TP(t){var e=t.pageBorderBox,n=t.draggable,o=t.droppables,a=ac(o).filter(function(u){if(!u.isEnabled)return!1;var d=u.subject.active;if(!d||!CP(e,d))return!1;if(cw(d)(e.center))return!0;var p=u.axis,m=d.center[p.crossAxisLine],y=e[p.crossAxisStart],b=e[p.crossAxisEnd],w=Ir(d[p.crossAxisStart],d[p.crossAxisEnd]),S=w(y),I=w(b);return!S&&!I?!0:S?y<m:b>m});return a.length?a.length===1?a[0].descriptor.id:_P({pageBorderBox:e,draggable:n,candidates:a}):null}var dw=function(e,n){return zr(Ka(e,n))},PP=function(t,e){var n=t.frame;return n?dw(e,n.scroll.diff.value):e};function fw(t){var e=t.displaced,n=t.id;return!!(e.visible[n]||e.invisible[n])}function kP(t){var e=t.draggable,n=t.closest,o=t.inHomeList;return n?o&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var DP=function(t){var e=t.pageBorderBoxWithDroppableScroll,n=t.draggable,o=t.destination,a=t.insideDestination,u=t.last,d=t.viewport,p=t.afterCritical,m=o.axis,y=Ya(o.axis,n.displaceBy),b=y.value,w=e[m.start],S=e[m.end],I=uc(n,a),T=bi(I,function(j){var z=j.descriptor.id,W=j.page.borderBox.center[m.line],G=yi(z,p),K=fw({displaced:u,id:z});return G?K?S<=W:w<W-b:K?S<=W+b:w<W}),N=kP({draggable:n,closest:T,inHomeList:ws(n,o)});return Ku({draggable:n,insideDestination:a,destination:o,viewport:d,last:u,displacedBy:y,index:N})},AP=4,RP=function(t){var e=t.draggable,n=t.pageBorderBoxWithDroppableScroll,o=t.previousImpact,a=t.destination,u=t.insideDestination,d=t.afterCritical;if(!a.isCombineEnabled)return null;var p=a.axis,m=Ya(a.axis,e.displaceBy),y=m.value,b=n[p.start],w=n[p.end],S=uc(e,u),I=bi(S,function(N){var j=N.descriptor.id,z=N.page.borderBox,W=z[p.size],G=W/AP,K=yi(j,d),V=fw({displaced:o.displaced,id:j});return K?V?w>z[p.start]+G&&w<z[p.end]-G:b>z[p.start]-y+G&&b<z[p.end]-y-G:V?w>z[p.start]+y+G&&w<z[p.end]+y-G:b>z[p.start]+G&&b<z[p.end]-G});if(!I)return null;var T={displacedBy:m,displaced:o.displaced,at:{type:"COMBINE",combine:{draggableId:I.descriptor.id,droppableId:a.descriptor.id}}};return T},pw=function(t){var e=t.pageOffset,n=t.draggable,o=t.draggables,a=t.droppables,u=t.previousImpact,d=t.viewport,p=t.afterCritical,m=dw(n.page.borderBox,e),y=TP({pageBorderBox:m,draggable:n,droppables:a});if(!y)return GT;var b=a[y],w=ys(b.descriptor.id,o),S=PP(b,m);return RP({pageBorderBoxWithDroppableScroll:S,draggable:n,previousImpact:u,destination:b,insideDestination:w,afterCritical:p})||DP({pageBorderBoxWithDroppableScroll:S,draggable:n,destination:b,insideDestination:w,last:u.displaced,viewport:d,afterCritical:p})},kp=function(t,e){var n;return we({},t,(n={},n[e.descriptor.id]=e,n))},OP=function(e){var n=e.previousImpact,o=e.impact,a=e.droppables,u=sr(n),d=sr(o);if(!u||u===d)return a;var p=a[u];if(!p.subject.withPlaceholder)return a;var m=SP(p);return kp(a,m)},NP=function(t){var e=t.draggable,n=t.draggables,o=t.droppables,a=t.previousImpact,u=t.impact,d=OP({previousImpact:a,impact:u,droppables:o}),p=sr(u);if(!p)return d;var m=o[p];if(ws(e,m)||m.subject.withPlaceholder)return d;var y=uw(m,e,n);return kp(d,y)},_a=function(t){var e=t.state,n=t.clientSelection,o=t.dimensions,a=t.viewport,u=t.impact,d=t.scrollJumpRequest,p=a||e.viewport,m=o||e.dimensions,y=n||e.current.client.selection,b=or(y,e.initial.client.selection),w={offset:b,selection:y,borderBoxCenter:Pt(e.initial.client.borderBoxCenter,b)},S={selection:Pt(w.selection,p.scroll.current),borderBoxCenter:Pt(w.borderBoxCenter,p.scroll.current),offset:Pt(w.offset,p.scroll.diff.value)},I={client:w,page:S};if(e.phase==="COLLECTING")return we({phase:"COLLECTING"},e,{dimensions:m,viewport:p,current:I});var T=m.draggables[e.critical.draggable.id],N=u||pw({pageOffset:S.offset,draggable:T,draggables:m.draggables,droppables:m.droppables,previousImpact:e.impact,viewport:p,afterCritical:e.afterCritical}),j=NP({draggable:T,impact:N,previousImpact:e.impact,draggables:m.draggables,droppables:m.droppables}),z=we({},e,{current:I,dimensions:{draggables:m.draggables,droppables:j},impact:N,viewport:p,scrollJumpRequest:d||null,forceShouldAnimate:d?!1:null});return z};function LP(t,e){return t.map(function(n){return e[n]})}var hw=function(t){var e=t.impact,n=t.viewport,o=t.draggables,a=t.destination,u=t.forceShouldAnimate,d=e.displaced,p=LP(d.all,o),m=Fa({afterDragging:p,destination:a,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:u,last:d});return we({},e,{displaced:m})},gw=function(t){var e=t.impact,n=t.draggable,o=t.droppable,a=t.draggables,u=t.viewport,d=t.afterCritical,p=cc({impact:e,draggable:n,draggables:a,droppable:o,afterCritical:d});return Pp({pageBorderBoxCenter:p,draggable:n,viewport:u})},mw=function(t){var e=t.state,n=t.dimensions,o=t.viewport;e.movementMode!=="SNAP"&&se();var a=e.impact,u=o||e.viewport,d=n||e.dimensions,p=d.draggables,m=d.droppables,y=p[e.critical.draggable.id],b=sr(a);b||se();var w=m[b],S=hw({impact:a,viewport:u,destination:w,draggables:p}),I=gw({impact:S,draggable:y,droppable:w,draggables:p,viewport:u,afterCritical:e.afterCritical});return _a({impact:S,clientSelection:I,state:e,dimensions:d,viewport:u})},MP=function(t){return{index:t.index,droppableId:t.droppableId}},vw=function(t){var e=t.draggable,n=t.home,o=t.draggables,a=t.viewport,u=Ya(n.axis,e.displaceBy),d=ys(n.descriptor.id,o),p=d.indexOf(e);p===-1&&se();var m=d.slice(p+1),y=m.reduce(function(I,T){return I[T.descriptor.id]=!0,I},{}),b={inVirtualList:n.descriptor.mode==="virtual",displacedBy:u,effected:y},w=Fa({afterDragging:m,destination:n,displacedBy:u,last:null,viewport:a.frame,forceShouldAnimate:!1}),S={displaced:w,displacedBy:u,at:{type:"REORDER",destination:MP(e.descriptor)}};return{impact:S,afterCritical:b}},BP=function(t,e){return{draggables:t.draggables,droppables:kp(t.droppables,e)}},jP=function(t){var e=t.draggable,n=t.offset,o=t.initialWindowScroll,a=Hu(e.client,n),u=Wu(a,o),d=we({},e,{placeholder:we({},e.placeholder,{client:a}),client:a,page:u});return d},FP=function(t){var e=t.frame;return e||se(),e},UP=function(t){var e=t.additions,n=t.updatedDroppables,o=t.viewport,a=o.scroll.diff.value;return e.map(function(u){var d=u.descriptor.droppableId,p=n[d],m=FP(p),y=m.scroll.diff.value,b=Pt(a,y),w=jP({draggable:u,offset:b,initialWindowScroll:o.scroll.initial});return w})},$P=function(t){var e=t.state,n=t.published,o=n.modified.map(function(G){var K=e.dimensions.droppables[G.droppableId],V=Ep(K,G.scroll);return V}),a=we({},e.dimensions.droppables,{},Z0(o)),u=ew(UP({additions:n.additions,updatedDroppables:a,viewport:e.viewport})),d=we({},e.dimensions.draggables,{},u);n.removals.forEach(function(G){delete d[G]});var p={droppables:a,draggables:d},m=sr(e.impact),y=m?p.droppables[m]:null,b=p.draggables[e.critical.draggable.id],w=p.droppables[e.critical.droppable.id],S=vw({draggable:b,home:w,draggables:d,viewport:e.viewport}),I=S.impact,T=S.afterCritical,N=y&&y.isCombineEnabled?e.impact:I,j=pw({pageOffset:e.current.page.offset,draggable:p.draggables[e.critical.draggable.id],draggables:p.draggables,droppables:p.droppables,previousImpact:N,viewport:e.viewport,afterCritical:T}),z=we({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:j,onLiftImpact:I,dimensions:p,afterCritical:T,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return z;var W=we({phase:"DROP_PENDING"},z,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return W},Vf=function(e){return e.movementMode==="SNAP"},mf=function(e,n,o){var a=BP(e.dimensions,n);return!Vf(e)||o?_a({state:e,dimensions:a}):mw({state:e,dimensions:a})};function vf(t){return t.isDragging&&t.movementMode==="SNAP"?we({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var Fv={phase:"IDLE",completed:null,shouldFlush:!1},zP=function(t,e){if(t===void 0&&(t=Fv),e.type==="FLUSH")return we({},Fv,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&se();var n=e.payload,o=n.critical,a=n.clientSelection,u=n.viewport,d=n.dimensions,p=n.movementMode,m=d.draggables[o.draggable.id],y=d.droppables[o.droppable.id],b={selection:a,borderBoxCenter:m.client.borderBox.center,offset:Et},w={client:b,page:{selection:Pt(b.selection,u.scroll.initial),borderBoxCenter:Pt(b.selection,u.scroll.initial),offset:Pt(b.selection,u.scroll.diff.value)}},S=ac(d.droppables).every(function(ft){return!ft.isFixedOnPage}),I=vw({draggable:m,home:y,draggables:d.draggables,viewport:u}),T=I.impact,N=I.afterCritical,j={phase:"DRAGGING",isDragging:!0,critical:o,movementMode:p,dimensions:d,initial:w,current:w,isWindowScrollAllowed:S,impact:T,afterCritical:N,onLiftImpact:T,viewport:u,scrollJumpRequest:null,forceShouldAnimate:null};return j}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&se();var z=we({phase:"COLLECTING"},t,{phase:"COLLECTING"});return z}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||se(),$P({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Yi(t)||se();var W=e.payload.client;return mi(W,t.current.client.selection)?t:_a({state:t,clientSelection:W,impact:Vf(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return vf(t);Yi(t)||se();var G=e.payload,K=G.id,V=G.newScroll,J=t.dimensions.droppables[K];if(!J)return t;var k=Ep(J,V);return mf(t,k,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Yi(t)||se();var _=e.payload,P=_.id,A=_.isEnabled,R=t.dimensions.droppables[P];R||se(),R.isEnabled===A&&se();var B=we({},R,{isEnabled:A});return mf(t,B,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Yi(t)||se();var C=e.payload,Se=C.id,je=C.isCombineEnabled,Fe=t.dimensions.droppables[Se];Fe||se(),Fe.isCombineEnabled===je&&se();var Pe=we({},Fe,{isCombineEnabled:je});return mf(t,Pe,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Yi(t)||se(),t.isWindowScrollAllowed||se();var ne=e.payload.newScroll;if(mi(t.viewport.scroll.current,ne))return vf(t);var le=sw(t.viewport,ne);return Vf(t)?mw({state:t,viewport:le}):_a({state:t,viewport:le})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Yi(t))return t;var oe=e.payload.maxScroll;if(mi(oe,t.viewport.scroll.max))return t;var M=we({},t.viewport,{scroll:we({},t.viewport.scroll,{max:oe})});return we({phase:"DRAGGING"},t,{viewport:M})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&se();var X=xP({state:t,type:e.type});return X?_a({state:t,impact:X.impact,clientSelection:X.clientSelection,scrollJumpRequest:X.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var de=e.payload.reason;t.phase!=="COLLECTING"&&se();var Ee=we({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:de});return Ee}if(e.type==="DROP_ANIMATE"){var me=e.payload,xe=me.completed,_e=me.dropDuration,Ce=me.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||se();var ke={phase:"DROP_ANIMATING",completed:xe,dropDuration:_e,newHomeClientOffset:Ce,dimensions:t.dimensions};return ke}if(e.type==="DROP_COMPLETE"){var He=e.payload.completed;return{phase:"IDLE",completed:He,shouldFlush:!1}}return t},HP=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},WP=function(e){return{type:"LIFT",payload:e}},VP=function(e){return{type:"INITIAL_PUBLISH",payload:e}},GP=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},qP=function(){return{type:"COLLECTION_STARTING",payload:null}},KP=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},YP=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},XP=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},yw=function(e){return{type:"MOVE",payload:e}},JP=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},QP=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},ZP=function(){return{type:"MOVE_UP",payload:null}},ek=function(){return{type:"MOVE_DOWN",payload:null}},tk=function(){return{type:"MOVE_RIGHT",payload:null}},rk=function(){return{type:"MOVE_LEFT",payload:null}},Dp=function(){return{type:"FLUSH",payload:null}},nk=function(e){return{type:"DROP_ANIMATE",payload:e}},Ap=function(e){return{type:"DROP_COMPLETE",payload:e}},ww=function(e){return{type:"DROP",payload:e}},ik=function(e){return{type:"DROP_PENDING",payload:e}},Sw=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},ok=function(t){return function(e){var n=e.getState,o=e.dispatch;return function(a){return function(u){if(u.type!=="LIFT"){a(u);return}var d=u.payload,p=d.id,m=d.clientSelection,y=d.movementMode,b=n();b.phase==="DROP_ANIMATING"&&o(Ap({completed:b.completed})),n().phase!=="IDLE"&&se(),o(Dp()),o(HP({draggableId:p,movementMode:y}));var w={shouldPublishImmediately:y==="SNAP"},S={draggableId:p,scrollOptions:w},I=t.startPublishing(S),T=I.critical,N=I.dimensions,j=I.viewport;o(VP({critical:T,dimensions:N,clientSelection:m,movementMode:y,viewport:j}))}}}},sk=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},Rp={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Ua={opacity:{drop:0,combining:.7},scale:{drop:.75}},Op={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},qi=Op.outOfTheWay+"s "+Rp.outOfTheWay,Ta={fluid:"opacity "+qi,snap:"transform "+qi+", opacity "+qi,drop:function(e){var n=e+"s "+Rp.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+qi,placeholder:"height "+qi+", width "+qi+", margin "+qi},Uv=function(e){return mi(e,Et)?null:"translate("+e.x+"px, "+e.y+"px)"},Gf={moveTo:Uv,drop:function(e,n){var o=Uv(e);return o?n?o+" scale("+Ua.scale.drop+")":o:null}},qf=Op.minDropTime,bw=Op.maxDropTime,ak=bw-qf,$v=1500,lk=.6,uk=function(t){var e=t.current,n=t.destination,o=t.reason,a=Ba(e,n);if(a<=0)return qf;if(a>=$v)return bw;var u=a/$v,d=qf+ak*u,p=o==="CANCEL"?d*lk:d;return Number(p.toFixed(2))},ck=function(t){var e=t.impact,n=t.draggable,o=t.dimensions,a=t.viewport,u=t.afterCritical,d=o.draggables,p=o.droppables,m=sr(e),y=m?p[m]:null,b=p[n.descriptor.droppableId],w=gw({impact:e,draggable:n,draggables:d,afterCritical:u,droppable:y||b,viewport:a}),S=or(w,n.client.borderBox.center);return S},dk=function(t){var e=t.draggables,n=t.reason,o=t.lastImpact,a=t.home,u=t.viewport,d=t.onLiftImpact;if(!o.at||n!=="DROP"){var p=hw({draggables:e,impact:d,destination:a,viewport:u,forceShouldAnimate:!0});return{impact:p,didDropInsideDroppable:!1}}if(o.at.type==="REORDER")return{impact:o,didDropInsideDroppable:!0};var m=we({},o,{displaced:ja});return{impact:m,didDropInsideDroppable:!0}},fk=function(t){var e=t.getState,n=t.dispatch;return function(o){return function(a){if(a.type!=="DROP"){o(a);return}var u=e(),d=a.payload.reason;if(u.phase==="COLLECTING"){n(ik({reason:d}));return}if(u.phase!=="IDLE"){var p=u.phase==="DROP_PENDING"&&u.isWaiting;p&&se(),u.phase==="DRAGGING"||u.phase==="DROP_PENDING"||se();var m=u.critical,y=u.dimensions,b=y.draggables[u.critical.draggable.id],w=dk({reason:d,lastImpact:u.impact,afterCritical:u.afterCritical,onLiftImpact:u.onLiftImpact,home:u.dimensions.droppables[u.critical.droppable.id],viewport:u.viewport,draggables:u.dimensions.draggables}),S=w.impact,I=w.didDropInsideDroppable,T=I?xp(S):null,N=I?lc(S):null,j={index:m.draggable.index,droppableId:m.droppable.id},z={draggableId:b.descriptor.id,type:b.descriptor.type,source:j,reason:d,mode:u.movementMode,destination:T,combine:N},W=ck({impact:S,draggable:b,dimensions:y,viewport:u.viewport,afterCritical:u.afterCritical}),G={critical:u.critical,afterCritical:u.afterCritical,result:z,impact:S},K=!mi(u.current.client.offset,W)||!!z.combine;if(!K){n(Ap({completed:G}));return}var V=uk({current:u.current.client.offset,destination:W,reason:d}),J={newHomeClientOffset:W,dropDuration:V,completed:G};n(nk(J))}}}},Ew=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function pk(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function hk(t){var e=t.onWindowScroll;function n(){e(Ew())}var o=Ma(n),a=pk(o),u=gi;function d(){return u!==gi}function p(){d()&&se(),u=Er(window,[a])}function m(){d()||se(),o.cancel(),u(),u=gi}return{start:p,stop:m,isActive:d}}var gk=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},mk=function(t){var e=hk({onWindowScroll:function(o){t.dispatch(JP({newScroll:o}))}});return function(n){return function(o){!e.isActive()&&o.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&gk(o)&&e.stop(),n(o)}}},vk=function(t){var e=!1,n=!1,o=setTimeout(function(){n=!0}),a=function(d){e||n||(e=!0,t(d),clearTimeout(o))};return a.wasCalled=function(){return e},a},yk=function(){var t=[],e=function(u){var d=Ip(t,function(y){return y.timerId===u});d===-1&&se();var p=t.splice(d,1),m=p[0];m.callback()},n=function(u){var d=setTimeout(function(){return e(d)}),p={timerId:d,callback:u};t.push(p)},o=function(){if(t.length){var u=[].concat(t);t.length=0,u.forEach(function(d){clearTimeout(d.timerId),d.callback()})}};return{add:n,flush:o}},wk=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},Sk=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},bk=function(e,n){if(e===n)return!0;var o=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,a=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return o&&a},ga=function(e,n){n()},hu=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},yf=function(e,n,o,a){if(!e){o(a(n));return}var u=vk(o),d={announce:u};e(n,d),u.wasCalled()||o(a(n))},Ek=function(t,e){var n=yk(),o=null,a=function(S,I){o&&se(),ga("onBeforeCapture",function(){var T=t().onBeforeCapture;if(T){var N={draggableId:S,mode:I};T(N)}})},u=function(S,I){o&&se(),ga("onBeforeDragStart",function(){var T=t().onBeforeDragStart;T&&T(hu(S,I))})},d=function(S,I){o&&se();var T=hu(S,I);o={mode:I,lastCritical:S,lastLocation:T.source,lastCombine:null},n.add(function(){ga("onDragStart",function(){return yf(t().onDragStart,T,e,Pu.onDragStart)})})},p=function(S,I){var T=xp(I),N=lc(I);o||se();var j=!bk(S,o.lastCritical);j&&(o.lastCritical=S);var z=!wk(o.lastLocation,T);z&&(o.lastLocation=T);var W=!Sk(o.lastCombine,N);if(W&&(o.lastCombine=N),!(!j&&!z&&!W)){var G=we({},hu(S,o.mode),{combine:N,destination:T});n.add(function(){ga("onDragUpdate",function(){return yf(t().onDragUpdate,G,e,Pu.onDragUpdate)})})}},m=function(){o||se(),n.flush()},y=function(S){o||se(),o=null,ga("onDragEnd",function(){return yf(t().onDragEnd,S,e,Pu.onDragEnd)})},b=function(){if(o){var S=we({},hu(o.lastCritical,o.mode),{combine:null,destination:null,reason:"CANCEL"});y(S)}};return{beforeCapture:a,beforeStart:u,start:d,update:p,flush:m,drop:y,abort:b}},Ik=function(t,e){var n=Ek(t,e);return function(o){return function(a){return function(u){if(u.type==="BEFORE_INITIAL_CAPTURE"){n.beforeCapture(u.payload.draggableId,u.payload.movementMode);return}if(u.type==="INITIAL_PUBLISH"){var d=u.payload.critical;n.beforeStart(d,u.payload.movementMode),a(u),n.start(d,u.payload.movementMode);return}if(u.type==="DROP_COMPLETE"){var p=u.payload.completed.result;n.flush(),a(u),n.drop(p);return}if(a(u),u.type==="FLUSH"){n.abort();return}var m=o.getState();m.phase==="DRAGGING"&&n.update(m.critical,m.impact)}}}},xk=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var o=t.getState();o.phase!=="DROP_ANIMATING"&&se(),t.dispatch(Ap({completed:o.completed}))}}},Ck=function(t){var e=null,n=null;function o(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(a){return function(u){if((u.type==="FLUSH"||u.type==="DROP_COMPLETE"||u.type==="DROP_ANIMATION_FINISHED")&&o(),a(u),u.type==="DROP_ANIMATE"){var d={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var m=t.getState();m.phase==="DROP_ANIMATING"&&t.dispatch(Sw())}};n=requestAnimationFrame(function(){n=null,e=Er(window,[d])})}}}},_k=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},Tk=function(t){var e=!1;return function(){return function(n){return function(o){if(o.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(o.payload.critical.draggable.id),n(o),t.tryRestoreFocusRecorded();return}if(n(o),!!e){if(o.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(o.type==="DROP_COMPLETE"){e=!1;var a=o.payload.completed.result;a.combine&&t.tryShiftRecord(a.draggableId,a.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},Pk=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},kk=function(t){return function(e){return function(n){return function(o){if(Pk(o)){t.stop(),n(o);return}if(o.type==="INITIAL_PUBLISH"){n(o);var a=e.getState();a.phase!=="DRAGGING"&&se(),t.start(a);return}n(o),t.scroll(e.getState())}}}},Dk=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var o=t.getState();o.phase==="DROP_PENDING"&&(o.isWaiting||t.dispatch(ww({reason:o.reason})))}}}},Ak=B0,Rk=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,o=t.styleMarshal,a=t.getResponders,u=t.announce,d=t.autoScroller;return M0(zP,Ak(L_(sk(o),_k(e),ok(e),fk,xk,Ck,Dk,kk(d),mk,Tk(n),Ik(a,u))))},wf=function(){return{additions:{},removals:{},modified:{}}};function Ok(t){var e=t.registry,n=t.callbacks,o=wf(),a=null,u=function(){a||(n.collectionStarting(),a=requestAnimationFrame(function(){a=null;var b=o,w=b.additions,S=b.removals,I=b.modified,T=Object.keys(w).map(function(z){return e.draggable.getById(z).getDimension(Et)}).sort(function(z,W){return z.descriptor.index-W.descriptor.index}),N=Object.keys(I).map(function(z){var W=e.droppable.getById(z),G=W.callbacks.getScrollWhileDragging();return{droppableId:z,scroll:G}}),j={additions:T,removals:Object.keys(S),modified:N};o=wf(),n.publish(j)}))},d=function(b){var w=b.descriptor.id;o.additions[w]=b,o.modified[b.descriptor.droppableId]=!0,o.removals[w]&&delete o.removals[w],u()},p=function(b){var w=b.descriptor;o.removals[w.id]=!0,o.modified[w.droppableId]=!0,o.additions[w.id]&&delete o.additions[w.id],u()},m=function(){a&&(cancelAnimationFrame(a),a=null,o=wf())};return{add:d,remove:p,stop:m}}var Iw=function(t){var e=t.scrollHeight,n=t.scrollWidth,o=t.height,a=t.width,u=or({x:n,y:e},{x:a,y:o}),d={x:Math.max(0,u.x),y:Math.max(0,u.y)};return d},xw=function(){var t=document.documentElement;return t||se(),t},Cw=function(){var t=xw(),e=Iw({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},Nk=function(){var t=Ew(),e=Cw(),n=t.y,o=t.x,a=xw(),u=a.clientWidth,d=a.clientHeight,p=o+u,m=n+d,y=zr({top:n,left:o,right:p,bottom:m}),b={frame:y,scroll:{initial:t,current:t,max:e,diff:{value:Et,displacement:Et}}};return b},Lk=function(t){var e=t.critical,n=t.scrollOptions,o=t.registry,a=Nk(),u=a.scroll.current,d=e.droppable,p=o.droppable.getAllByType(d.type).map(function(w){return w.callbacks.getDimensionAndWatchScroll(u,n)}),m=o.draggable.getAllByType(e.draggable.type).map(function(w){return w.getDimension(u)}),y={draggables:ew(m),droppables:Z0(p)},b={dimensions:y,critical:e,viewport:a};return b};function zv(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var o=t.droppable.getById(n.descriptor.droppableId);return o.descriptor.mode==="virtual"}var Mk=function(t,e){var n=null,o=Ok({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),a=function(I,T){t.droppable.exists(I)||se(),n&&e.updateDroppableIsEnabled({id:I,isEnabled:T})},u=function(I,T){n&&(t.droppable.exists(I)||se(),e.updateDroppableIsCombineEnabled({id:I,isCombineEnabled:T}))},d=function(I,T){n&&(t.droppable.exists(I)||se(),e.updateDroppableScroll({id:I,newScroll:T}))},p=function(I,T){n&&t.droppable.getById(I).callbacks.scroll(T)},m=function(){if(n){o.stop();var I=n.critical.droppable;t.droppable.getAllByType(I.type).forEach(function(T){return T.callbacks.dragStopped()}),n.unsubscribe(),n=null}},y=function(I){n||se();var T=n.critical.draggable;I.type==="ADDITION"&&zv(t,T,I.value)&&o.add(I.value),I.type==="REMOVAL"&&zv(t,T,I.value)&&o.remove(I.value)},b=function(I){n&&se();var T=t.draggable.getById(I.draggableId),N=t.droppable.getById(T.descriptor.droppableId),j={draggable:T.descriptor,droppable:N.descriptor},z=t.subscribe(y);return n={critical:j,unsubscribe:z},Lk({critical:j,registry:t,scrollOptions:I.scrollOptions})},w={updateDroppableIsEnabled:a,updateDroppableIsCombineEnabled:u,scrollDroppable:p,updateDroppableScroll:d,startPublishing:b,stopPublishing:m};return w},_w=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},Bk=function(t){window.scrollBy(t.x,t.y)},jk=bt(function(t){return ac(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),Fk=function(e,n){var o=bi(jk(n),function(a){return a.frame||se(),cw(a.frame.pageMarginBox)(e)});return o},Uk=function(t){var e=t.center,n=t.destination,o=t.droppables;if(n){var a=o[n];return a.frame?a:null}var u=Fk(e,o);return u},vi={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},$k=function(t,e){var n=t[e.size]*vi.startFromPercentage,o=t[e.size]*vi.maxScrollAtPercentage,a={startScrollingFrom:n,maxScrollValueAt:o};return a},Tw=function(t){var e=t.startOfRange,n=t.endOfRange,o=t.current,a=n-e;if(a===0)return 0;var u=o-e,d=u/a;return d},Np=1,zk=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return vi.maxPixelScroll;if(t===e.startScrollingFrom)return Np;var n=Tw({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),o=1-n,a=vi.maxPixelScroll*vi.ease(o);return Math.ceil(a)},Hv=vi.durationDampening.accelerateAt,Wv=vi.durationDampening.stopDampeningAt,Hk=function(t,e){var n=e,o=Wv,a=Date.now(),u=a-n;if(u>=Wv)return t;if(u<Hv)return Np;var d=Tw({startOfRange:Hv,endOfRange:o,current:u}),p=t*vi.ease(d);return Math.ceil(p)},Vv=function(t){var e=t.distanceToEdge,n=t.thresholds,o=t.dragStartTime,a=t.shouldUseTimeDampening,u=zk(e,n);return u===0?0:a?Math.max(Hk(u,o),Np):u},Gv=function(t){var e=t.container,n=t.distanceToEdges,o=t.dragStartTime,a=t.axis,u=t.shouldUseTimeDampening,d=$k(e,a),p=n[a.end]<n[a.start];return p?Vv({distanceToEdge:n[a.end],thresholds:d,dragStartTime:o,shouldUseTimeDampening:u}):-1*Vv({distanceToEdge:n[a.start],thresholds:d,dragStartTime:o,shouldUseTimeDampening:u})},Wk=function(t){var e=t.container,n=t.subject,o=t.proposedScroll,a=n.height>e.height,u=n.width>e.width;return!u&&!a?o:u&&a?null:{x:u?0:o.x,y:a?0:o.y}},Vk=J0(function(t){return t===0?0:t}),Pw=function(t){var e=t.dragStartTime,n=t.container,o=t.subject,a=t.center,u=t.shouldUseTimeDampening,d={top:a.y-n.top,right:n.right-a.x,bottom:n.bottom-a.y,left:a.x-n.left},p=Gv({container:n,distanceToEdges:d,dragStartTime:e,axis:Cp,shouldUseTimeDampening:u}),m=Gv({container:n,distanceToEdges:d,dragStartTime:e,axis:nw,shouldUseTimeDampening:u}),y=Vk({x:m,y:p});if(mi(y,Et))return null;var b=Wk({container:n,subject:o,proposedScroll:y});return b?mi(b,Et)?null:b:null},Gk=J0(function(t){return t===0?0:t>0?1:-1}),Lp=function(){var t=function(n,o){return n<0?n:n>o?n-o:0};return function(e){var n=e.current,o=e.max,a=e.change,u=Pt(n,a),d={x:t(u.x,o.x),y:t(u.y,o.y)};return mi(d,Et)?null:d}}(),kw=function(e){var n=e.max,o=e.current,a=e.change,u={x:Math.max(o.x,n.x),y:Math.max(o.y,n.y)},d=Gk(a),p=Lp({max:u,current:o,change:d});return!p||d.x!==0&&p.x===0||d.y!==0&&p.y===0},Mp=function(e,n){return kw({current:e.scroll.current,max:e.scroll.max,change:n})},qk=function(e,n){if(!Mp(e,n))return null;var o=e.scroll.max,a=e.scroll.current;return Lp({current:a,max:o,change:n})},Bp=function(e,n){var o=e.frame;return o?kw({current:o.scroll.current,max:o.scroll.max,change:n}):!1},Kk=function(e,n){var o=e.frame;return!o||!Bp(e,n)?null:Lp({current:o.scroll.current,max:o.scroll.max,change:n})},Yk=function(t){var e=t.viewport,n=t.subject,o=t.center,a=t.dragStartTime,u=t.shouldUseTimeDampening,d=Pw({dragStartTime:a,container:e.frame,subject:n,center:o,shouldUseTimeDampening:u});return d&&Mp(e,d)?d:null},Xk=function(t){var e=t.droppable,n=t.subject,o=t.center,a=t.dragStartTime,u=t.shouldUseTimeDampening,d=e.frame;if(!d)return null;var p=Pw({dragStartTime:a,container:d.pageMarginBox,subject:n,center:o,shouldUseTimeDampening:u});return p&&Bp(e,p)?p:null},qv=function(t){var e=t.state,n=t.dragStartTime,o=t.shouldUseTimeDampening,a=t.scrollWindow,u=t.scrollDroppable,d=e.current.page.borderBoxCenter,p=e.dimensions.draggables[e.critical.draggable.id],m=p.page.marginBox;if(e.isWindowScrollAllowed){var y=e.viewport,b=Yk({dragStartTime:n,viewport:y,subject:m,center:d,shouldUseTimeDampening:o});if(b){a(b);return}}var w=Uk({center:d,destination:sr(e.impact),droppables:e.dimensions.droppables});if(w){var S=Xk({dragStartTime:n,droppable:w,subject:m,center:d,shouldUseTimeDampening:o});S&&u(w.descriptor.id,S)}},Jk=function(t){var e=t.scrollWindow,n=t.scrollDroppable,o=Ma(e),a=Ma(n),u=null,d=function(b){u||se();var w=u,S=w.shouldUseTimeDampening,I=w.dragStartTime;qv({state:b,scrollWindow:o,scrollDroppable:a,dragStartTime:I,shouldUseTimeDampening:S})},p=function(b){u&&se();var w=Date.now(),S=!1,I=function(){S=!0};qv({state:b,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:I,scrollDroppable:I}),u={dragStartTime:w,shouldUseTimeDampening:S},S&&d(b)},m=function(){u&&(o.cancel(),a.cancel(),u=null)};return{start:p,stop:m,scroll:d}},Qk=function(t){var e=t.move,n=t.scrollDroppable,o=t.scrollWindow,a=function(y,b){var w=Pt(y.current.client.selection,b);e({client:w})},u=function(y,b){if(!Bp(y,b))return b;var w=Kk(y,b);if(!w)return n(y.descriptor.id,b),null;var S=or(b,w);n(y.descriptor.id,S);var I=or(b,S);return I},d=function(y,b,w){if(!y||!Mp(b,w))return w;var S=qk(b,w);if(!S)return o(w),null;var I=or(w,S);o(I);var T=or(w,I);return T},p=function(y){var b=y.scrollJumpRequest;if(b){var w=sr(y.impact);w||se();var S=u(y.dimensions.droppables[w],b);if(S){var I=y.viewport,T=d(y.isWindowScrollAllowed,I,S);T&&a(y,T)}}};return p},Zk=function(t){var e=t.scrollDroppable,n=t.scrollWindow,o=t.move,a=Jk({scrollWindow:n,scrollDroppable:e}),u=Qk({move:o,scrollWindow:n,scrollDroppable:e}),d=function(y){if(y.phase==="DRAGGING"){if(y.movementMode==="FLUID"){a.scroll(y);return}y.scrollJumpRequest&&u(y)}},p={scroll:d,start:a.start,stop:a.stop};return p},ds="data-rbd",fs=function(){var t=ds+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),Kf=function(){var t=ds+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),eD=function(){var t=ds+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),Kv={contextId:ds+"-scroll-container-context-id"},tD=function(e){return function(n){return"["+n+'="'+e+'"]'}},ma=function(e,n){return e.map(function(o){var a=o.styles[n];return a?o.selector+" { "+a+" }":""}).join(" ")},rD="pointer-events: none;",nD=function(t){var e=tD(t),n=function(){var p=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(fs.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:p,dragging:rD,dropAnimating:p}}}(),o=function(){var p=`
      transition: `+Ta.outOfTheWay+`;
    `;return{selector:e(Kf.contextId),styles:{dragging:p,dropAnimating:p,userCancel:p}}}(),a={selector:e(eD.contextId),styles:{always:"overflow-anchor: none;"}},u={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},d=[o,n,a,u];return{always:ma(d,"always"),resting:ma(d,"resting"),dragging:ma(d,"dragging"),dropAnimating:ma(d,"dropAnimating"),userCancel:ma(d,"userCancel")}},ar=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?re.useLayoutEffect:re.useEffect,Sf=function(){var e=document.querySelector("head");return e||se(),e},Yv=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function iD(t,e){var n=Me(function(){return nD(t)},[t]),o=re.useRef(null),a=re.useRef(null),u=ge(bt(function(w){var S=a.current;S||se(),S.textContent=w}),[]),d=ge(function(w){var S=o.current;S||se(),S.textContent=w},[]);ar(function(){!o.current&&!a.current||se();var w=Yv(e),S=Yv(e);return o.current=w,a.current=S,w.setAttribute(ds+"-always",t),S.setAttribute(ds+"-dynamic",t),Sf().appendChild(w),Sf().appendChild(S),d(n.always),u(n.resting),function(){var I=function(N){var j=N.current;j||se(),Sf().removeChild(j),N.current=null};I(o),I(a)}},[e,d,u,n.always,n.resting,t]);var p=ge(function(){return u(n.dragging)},[u,n.dragging]),m=ge(function(w){if(w==="DROP"){u(n.dropAnimating);return}u(n.userCancel)},[u,n.dropAnimating,n.userCancel]),y=ge(function(){a.current&&u(n.resting)},[u,n.resting]),b=Me(function(){return{dragging:p,dropping:m,resting:y}},[p,m,y]);return b}var Dw=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function dc(t){return t instanceof Dw(t).HTMLElement}function oD(t,e){var n="["+fs.contextId+'="'+t+'"]',o=Q0(document.querySelectorAll(n));if(!o.length)return null;var a=bi(o,function(u){return u.getAttribute(fs.draggableId)===e});return!a||!dc(a)?null:a}function sD(t){var e=re.useRef({}),n=re.useRef(null),o=re.useRef(null),a=re.useRef(!1),u=ge(function(S,I){var T={id:S,focus:I};return e.current[S]=T,function(){var j=e.current,z=j[S];z!==T&&delete j[S]}},[]),d=ge(function(S){var I=oD(t,S);I&&I!==document.activeElement&&I.focus()},[t]),p=ge(function(S,I){n.current===S&&(n.current=I)},[]),m=ge(function(){o.current||a.current&&(o.current=requestAnimationFrame(function(){o.current=null;var S=n.current;S&&d(S)}))},[d]),y=ge(function(S){n.current=null;var I=document.activeElement;I&&I.getAttribute(fs.draggableId)===S&&(n.current=S)},[]);ar(function(){return a.current=!0,function(){a.current=!1;var S=o.current;S&&cancelAnimationFrame(S)}},[]);var b=Me(function(){return{register:u,tryRecordFocus:y,tryRestoreFocusRecorded:m,tryShiftRecord:p}},[u,y,m,p]);return b}function aD(){var t={draggables:{},droppables:{}},e=[];function n(w){return e.push(w),function(){var I=e.indexOf(w);I!==-1&&e.splice(I,1)}}function o(w){e.length&&e.forEach(function(S){return S(w)})}function a(w){return t.draggables[w]||null}function u(w){var S=a(w);return S||se(),S}var d={register:function(S){t.draggables[S.descriptor.id]=S,o({type:"ADDITION",value:S})},update:function(S,I){var T=t.draggables[I.descriptor.id];T&&T.uniqueId===S.uniqueId&&(delete t.draggables[I.descriptor.id],t.draggables[S.descriptor.id]=S)},unregister:function(S){var I=S.descriptor.id,T=a(I);T&&S.uniqueId===T.uniqueId&&(delete t.draggables[I],o({type:"REMOVAL",value:S}))},getById:u,findById:a,exists:function(S){return!!a(S)},getAllByType:function(S){return qu(t.draggables).filter(function(I){return I.descriptor.type===S})}};function p(w){return t.droppables[w]||null}function m(w){var S=p(w);return S||se(),S}var y={register:function(S){t.droppables[S.descriptor.id]=S},unregister:function(S){var I=p(S.descriptor.id);I&&S.uniqueId===I.uniqueId&&delete t.droppables[S.descriptor.id]},getById:m,findById:p,exists:function(S){return!!p(S)},getAllByType:function(S){return qu(t.droppables).filter(function(I){return I.descriptor.type===S})}};function b(){t.draggables={},t.droppables={},e.length=0}return{draggable:d,droppable:y,subscribe:n,clean:b}}function lD(){var t=Me(aD,[]);return re.useEffect(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var jp=Ae.createContext(null),Yu=function(){var t=document.body;return t||se(),t},uD={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},cD=function(e){return"rbd-announcement-"+e};function dD(t){var e=Me(function(){return cD(t)},[t]),n=re.useRef(null);re.useEffect(function(){var u=document.createElement("div");return n.current=u,u.id=e,u.setAttribute("aria-live","assertive"),u.setAttribute("aria-atomic","true"),we(u.style,uD),Yu().appendChild(u),function(){setTimeout(function(){var m=Yu();m.contains(u)&&m.removeChild(u),u===n.current&&(n.current=null)})}},[e]);var o=ge(function(a){var u=n.current;if(u){u.textContent=a;return}},[]);return o}var fD=0,pD={separator:"::"};function Fp(t,e){return e===void 0&&(e=pD),Me(function(){return""+t+e.separator+fD++},[e.separator,t])}function hD(t){var e=t.contextId,n=t.uniqueId;return"rbd-hidden-text-"+e+"-"+n}function gD(t){var e=t.contextId,n=t.text,o=Fp("hidden-text",{separator:"-"}),a=Me(function(){return hD({contextId:e,uniqueId:o})},[o,e]);return re.useEffect(function(){var d=document.createElement("div");return d.id=a,d.textContent=n,d.style.display="none",Yu().appendChild(d),function(){var m=Yu();m.contains(d)&&m.removeChild(d)}},[a,n]),a}var fc=Ae.createContext(null);function Aw(t){var e=re.useRef(t);return re.useEffect(function(){e.current=t}),e}function mD(){var t=null;function e(){return!!t}function n(d){return d===t}function o(d){t&&se();var p={abandon:d};return t=p,p}function a(){t||se(),t=null}function u(){t&&(t.abandon(),a())}return{isClaimed:e,isActive:n,claim:o,release:a,tryAbandon:u}}var vD=9,yD=13,Up=27,Rw=32,wD=33,SD=34,bD=35,ED=36,ID=37,xD=38,CD=39,_D=40,gu,TD=(gu={},gu[yD]=!0,gu[vD]=!0,gu),Ow=function(t){TD[t.keyCode]&&t.preventDefault()},pc=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=bi(e,function(o){return"on"+o in document});return n||t}(),Nw=0,Xv=5;function PD(t,e){return Math.abs(e.x-t.x)>=Xv||Math.abs(e.y-t.y)>=Xv}var Jv={type:"IDLE"};function kD(t){var e=t.cancel,n=t.completed,o=t.getPhase,a=t.setPhase;return[{eventName:"mousemove",fn:function(d){var p=d.button,m=d.clientX,y=d.clientY;if(p===Nw){var b={x:m,y},w=o();if(w.type==="DRAGGING"){d.preventDefault(),w.actions.move(b);return}w.type!=="PENDING"&&se();var S=w.point;if(PD(S,b)){d.preventDefault();var I=w.actions.fluidLift(b);a({type:"DRAGGING",actions:I})}}}},{eventName:"mouseup",fn:function(d){var p=o();if(p.type!=="DRAGGING"){e();return}d.preventDefault(),p.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(d){o().type==="DRAGGING"&&d.preventDefault(),e()}},{eventName:"keydown",fn:function(d){var p=o();if(p.type==="PENDING"){e();return}if(d.keyCode===Up){d.preventDefault(),e();return}Ow(d)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){o().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(d){var p=o();if(p.type==="IDLE"&&se(),p.actions.shouldRespectForcePress()){e();return}d.preventDefault()}},{eventName:pc,fn:e}]}function DD(t){var e=re.useRef(Jv),n=re.useRef(gi),o=Me(function(){return{eventName:"mousedown",fn:function(w){if(!w.defaultPrevented&&w.button===Nw&&!(w.ctrlKey||w.metaKey||w.shiftKey||w.altKey)){var S=t.findClosestDraggableId(w);if(S){var I=t.tryGetLock(S,d,{sourceEvent:w});if(I){w.preventDefault();var T={x:w.clientX,y:w.clientY};n.current(),y(I,T)}}}}}},[t]),a=Me(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(w){if(!w.defaultPrevented){var S=t.findClosestDraggableId(w);if(S){var I=t.findOptionsForDraggable(S);I&&(I.shouldRespectForcePress||t.canGetLock(S)&&w.preventDefault())}}}}},[t]),u=ge(function(){var w={passive:!1,capture:!0};n.current=Er(window,[a,o],w)},[a,o]),d=ge(function(){var b=e.current;b.type!=="IDLE"&&(e.current=Jv,n.current(),u())},[u]),p=ge(function(){var b=e.current;d(),b.type==="DRAGGING"&&b.actions.cancel({shouldBlockNextClick:!0}),b.type==="PENDING"&&b.actions.abort()},[d]),m=ge(function(){var w={capture:!0,passive:!1},S=kD({cancel:p,completed:d,getPhase:function(){return e.current},setPhase:function(T){e.current=T}});n.current=Er(window,S,w)},[p,d]),y=ge(function(w,S){e.current.type!=="IDLE"&&se(),e.current={type:"PENDING",point:S,actions:w},m()},[m]);ar(function(){return u(),function(){n.current()}},[u])}var Jo;function AD(){}var RD=(Jo={},Jo[SD]=!0,Jo[wD]=!0,Jo[ED]=!0,Jo[bD]=!0,Jo);function OD(t,e){function n(){e(),t.cancel()}function o(){e(),t.drop()}return[{eventName:"keydown",fn:function(u){if(u.keyCode===Up){u.preventDefault(),n();return}if(u.keyCode===Rw){u.preventDefault(),o();return}if(u.keyCode===_D){u.preventDefault(),t.moveDown();return}if(u.keyCode===xD){u.preventDefault(),t.moveUp();return}if(u.keyCode===CD){u.preventDefault(),t.moveRight();return}if(u.keyCode===ID){u.preventDefault(),t.moveLeft();return}if(RD[u.keyCode]){u.preventDefault();return}Ow(u)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:pc,fn:n}]}function ND(t){var e=re.useRef(AD),n=Me(function(){return{eventName:"keydown",fn:function(u){if(u.defaultPrevented||u.keyCode!==Rw)return;var d=t.findClosestDraggableId(u);if(!d)return;var p=t.tryGetLock(d,b,{sourceEvent:u});if(!p)return;u.preventDefault();var m=!0,y=p.snapLift();e.current();function b(){m||se(),m=!1,e.current(),o()}e.current=Er(window,OD(y,b),{capture:!0,passive:!1})}}},[t]),o=ge(function(){var u={passive:!1,capture:!0};e.current=Er(window,[n],u)},[n]);ar(function(){return o(),function(){e.current()}},[o])}var bf={type:"IDLE"},LD=120,MD=.15;function BD(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(a){a.preventDefault()}},{eventName:"keydown",fn:function(a){if(n().type!=="DRAGGING"){e();return}a.keyCode===Up&&a.preventDefault(),e()}},{eventName:pc,fn:e}]}function jD(t){var e=t.cancel,n=t.completed,o=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(u){var d=o();if(d.type!=="DRAGGING"){e();return}d.hasMoved=!0;var p=u.touches[0],m=p.clientX,y=p.clientY,b={x:m,y};u.preventDefault(),d.actions.move(b)}},{eventName:"touchend",fn:function(u){var d=o();if(d.type!=="DRAGGING"){e();return}u.preventDefault(),d.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(u){if(o().type!=="DRAGGING"){e();return}u.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(u){var d=o();d.type==="IDLE"&&se();var p=u.touches[0];if(p){var m=p.force>=MD;if(m){var y=d.actions.shouldRespectForcePress();if(d.type==="PENDING"){y&&e();return}if(y){if(d.hasMoved){u.preventDefault();return}e();return}u.preventDefault()}}}},{eventName:pc,fn:e}]}function FD(t){var e=re.useRef(bf),n=re.useRef(gi),o=ge(function(){return e.current},[]),a=ge(function(I){e.current=I},[]),u=Me(function(){return{eventName:"touchstart",fn:function(I){if(!I.defaultPrevented){var T=t.findClosestDraggableId(I);if(T){var N=t.tryGetLock(T,p,{sourceEvent:I});if(N){var j=I.touches[0],z=j.clientX,W=j.clientY,G={x:z,y:W};n.current(),w(N,G)}}}}}},[t]),d=ge(function(){var I={capture:!0,passive:!1};n.current=Er(window,[u],I)},[u]),p=ge(function(){var S=e.current;S.type!=="IDLE"&&(S.type==="PENDING"&&clearTimeout(S.longPressTimerId),a(bf),n.current(),d())},[d,a]),m=ge(function(){var S=e.current;p(),S.type==="DRAGGING"&&S.actions.cancel({shouldBlockNextClick:!0}),S.type==="PENDING"&&S.actions.abort()},[p]),y=ge(function(){var I={capture:!0,passive:!1},T={cancel:m,completed:p,getPhase:o},N=Er(window,jD(T),I),j=Er(window,BD(T),I);n.current=function(){N(),j()}},[m,o,p]),b=ge(function(){var I=o();I.type!=="PENDING"&&se();var T=I.actions.fluidLift(I.point);a({type:"DRAGGING",actions:T,hasMoved:!1})},[o,a]),w=ge(function(I,T){o().type!=="IDLE"&&se();var N=setTimeout(b,LD);a({type:"PENDING",point:T,actions:I,longPressTimerId:N}),y()},[y,o,a,b]);ar(function(){return d(),function(){n.current();var T=o();T.type==="PENDING"&&(clearTimeout(T.longPressTimerId),a(bf))}},[o,d,a]),ar(function(){var I=Er(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return I},[])}var UD={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function Lw(t,e){if(e==null)return!1;var n=!!UD[e.tagName.toLowerCase()];if(n)return!0;var o=e.getAttribute("contenteditable");return o==="true"||o===""?!0:e===t?!1:Lw(t,e.parentElement)}function $D(t,e){var n=e.target;return dc(n)?Lw(t,n):!1}var zD=function(t){return zr(t.getBoundingClientRect()).center};function HD(t){return t instanceof Dw(t).Element}var WD=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=bi(e,function(o){return o in Element.prototype});return n||t}();function Mw(t,e){return t==null?null:t[WD](e)?t:Mw(t.parentElement,e)}function VD(t,e){return t.closest?t.closest(e):Mw(t,e)}function GD(t){return"["+fs.contextId+'="'+t+'"]'}function qD(t,e){var n=e.target;if(!HD(n))return null;var o=GD(t),a=VD(n,o);return!a||!dc(a)?null:a}function KD(t,e){var n=qD(t,e);return n?n.getAttribute(fs.draggableId):null}function YD(t,e){var n="["+Kf.contextId+'="'+t+'"]',o=Q0(document.querySelectorAll(n)),a=bi(o,function(u){return u.getAttribute(Kf.id)===e});return!a||!dc(a)?null:a}function XD(t){t.preventDefault()}function mu(t){var e=t.expected,n=t.phase,o=t.isLockActive;return t.shouldWarn,!(!o()||e!==n)}function Bw(t){var e=t.lockAPI,n=t.store,o=t.registry,a=t.draggableId;if(e.isClaimed())return!1;var u=o.draggable.findById(a);return!(!u||!u.options.isEnabled||!_w(n.getState(),a))}function JD(t){var e=t.lockAPI,n=t.contextId,o=t.store,a=t.registry,u=t.draggableId,d=t.forceSensorStop,p=t.sourceEvent,m=Bw({lockAPI:e,store:o,registry:a,draggableId:u});if(!m)return null;var y=a.draggable.getById(u),b=YD(n,y.descriptor.id);if(!b||p&&!y.options.canDragInteractiveElements&&$D(b,p))return null;var w=e.claim(d||gi),S="PRE_DRAG";function I(){return y.options.shouldRespectForcePress}function T(){return e.isActive(w)}function N(J,k){mu({expected:J,phase:S,isLockActive:T,shouldWarn:!0})&&o.dispatch(k())}var j=N.bind(null,"DRAGGING");function z(J){function k(){e.release(),S="COMPLETED"}S!=="PRE_DRAG"&&(k(),S!=="PRE_DRAG"&&se()),o.dispatch(WP(J.liftActionArgs)),S="DRAGGING";function _(P,A){if(A===void 0&&(A={shouldBlockNextClick:!1}),J.cleanup(),A.shouldBlockNextClick){var R=Er(window,[{eventName:"click",fn:XD,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(R)}k(),o.dispatch(ww({reason:P}))}return we({isActive:function(){return mu({expected:"DRAGGING",phase:S,isLockActive:T,shouldWarn:!1})},shouldRespectForcePress:I,drop:function(A){return _("DROP",A)},cancel:function(A){return _("CANCEL",A)}},J.actions)}function W(J){var k=Ma(function(P){j(function(){return yw({client:P})})}),_=z({liftActionArgs:{id:u,clientSelection:J,movementMode:"FLUID"},cleanup:function(){return k.cancel()},actions:{move:k}});return we({},_,{move:k})}function G(){var J={moveUp:function(){return j(ZP)},moveRight:function(){return j(tk)},moveDown:function(){return j(ek)},moveLeft:function(){return j(rk)}};return z({liftActionArgs:{id:u,clientSelection:zD(b),movementMode:"SNAP"},cleanup:gi,actions:J})}function K(){var J=mu({expected:"PRE_DRAG",phase:S,isLockActive:T,shouldWarn:!0});J&&e.release()}var V={isActive:function(){return mu({expected:"PRE_DRAG",phase:S,isLockActive:T,shouldWarn:!1})},shouldRespectForcePress:I,fluidLift:W,snapLift:G,abort:K};return V}var QD=[DD,ND,FD];function ZD(t){var e=t.contextId,n=t.store,o=t.registry,a=t.customSensors,u=t.enableDefaultSensors,d=[].concat(u?QD:[],a||[]),p=re.useState(function(){return mD()})[0],m=ge(function(W,G){W.isDragging&&!G.isDragging&&p.tryAbandon()},[p]);ar(function(){var W=n.getState(),G=n.subscribe(function(){var K=n.getState();m(W,K),W=K});return G},[p,n,m]),ar(function(){return p.tryAbandon},[p.tryAbandon]);for(var y=ge(function(z){return Bw({lockAPI:p,registry:o,store:n,draggableId:z})},[p,o,n]),b=ge(function(z,W,G){return JD({lockAPI:p,registry:o,contextId:e,store:n,draggableId:z,forceSensorStop:W,sourceEvent:G&&G.sourceEvent?G.sourceEvent:null})},[e,p,o,n]),w=ge(function(z){return KD(e,z)},[e]),S=ge(function(z){var W=o.draggable.findById(z);return W?W.options:null},[o.draggable]),I=ge(function(){p.isClaimed()&&(p.tryAbandon(),n.getState().phase!=="IDLE"&&n.dispatch(Dp()))},[p,n]),T=ge(p.isClaimed,[p]),N=Me(function(){return{canGetLock:y,tryGetLock:b,findClosestDraggableId:w,findOptionsForDraggable:S,tryReleaseLock:I,isLockClaimed:T}},[y,b,w,S,I,T]),j=0;j<d.length;j++)d[j](N)}var eA=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function va(t){return t.current||se(),t.current}function tA(t){var e=t.contextId,n=t.setCallbacks,o=t.sensors,a=t.nonce,u=t.dragHandleUsageInstructions,d=re.useRef(null),p=Aw(t),m=ge(function(){return eA(p.current)},[p]),y=dD(e),b=gD({contextId:e,text:u}),w=iD(e,a),S=ge(function(P){va(d).dispatch(P)},[]),I=Me(function(){return yv({publishWhileDragging:GP,updateDroppableScroll:KP,updateDroppableIsEnabled:YP,updateDroppableIsCombineEnabled:XP,collectionStarting:qP},S)},[S]),T=lD(),N=Me(function(){return Mk(T,I)},[T,I]),j=Me(function(){return Zk(we({scrollWindow:Bk,scrollDroppable:N.scrollDroppable},yv({move:yw},S)))},[N.scrollDroppable,S]),z=sD(e),W=Me(function(){return Rk({announce:y,autoScroller:j,dimensionMarshal:N,focusMarshal:z,getResponders:m,styleMarshal:w})},[y,j,N,z,m,w]);d.current=W;var G=ge(function(){var P=va(d),A=P.getState();A.phase!=="IDLE"&&P.dispatch(Dp())},[]),K=ge(function(){var P=va(d).getState();return P.isDragging||P.phase==="DROP_ANIMATING"},[]),V=Me(function(){return{isDragging:K,tryAbort:G}},[K,G]);n(V);var J=ge(function(P){return _w(va(d).getState(),P)},[]),k=ge(function(){return Yi(va(d).getState())},[]),_=Me(function(){return{marshal:N,focus:z,contextId:e,canLift:J,isMovementAllowed:k,dragHandleUsageInstructionsId:b,registry:T}},[e,N,b,z,J,k,T]);return ZD({contextId:e,store:W,registry:T,customSensors:o,enableDefaultSensors:t.enableDefaultSensors!==!1}),re.useEffect(function(){return G},[G]),Ae.createElement(fc.Provider,{value:_},Ae.createElement(U_,{context:jp,store:W},t.children))}var rA=0;function nA(){return Me(function(){return""+rA++},[])}function iA(t){var e=nA(),n=t.dragHandleUsageInstructions||Pu.dragHandleUsageInstructions;return Ae.createElement(NT,null,function(o){return Ae.createElement(tA,{nonce:t.nonce,contextId:e,setCallbacks:o,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var jw=function(e){return function(n){return e===n}},oA=jw("scroll"),sA=jw("auto"),Qv=function(e,n){return n(e.overflowX)||n(e.overflowY)},aA=function(e){var n=window.getComputedStyle(e),o={overflowX:n.overflowX,overflowY:n.overflowY};return Qv(o,oA)||Qv(o,sA)},lA=function(){return!1},uA=function t(e){return e==null?null:e===document.body?lA()?e:null:e===document.documentElement?null:aA(e)?e:t(e.parentElement)},Yf=function(t){return{x:t.scrollLeft,y:t.scrollTop}},cA=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},dA=function(t){var e=uA(t),n=cA(t);return{closestScrollable:e,isFixedOnPage:n}},fA=function(t){var e=t.descriptor,n=t.isEnabled,o=t.isCombineEnabled,a=t.isFixedOnPage,u=t.direction,d=t.client,p=t.page,m=t.closest,y=function(){if(!m)return null;var I=m.scrollSize,T=m.client,N=Iw({scrollHeight:I.scrollHeight,scrollWidth:I.scrollWidth,height:T.paddingBox.height,width:T.paddingBox.width});return{pageMarginBox:m.page.marginBox,frameClient:T,scrollSize:I,shouldClipSubject:m.shouldClipSubject,scroll:{initial:m.scroll,current:m.scroll,max:N,diff:{value:Et,displacement:Et}}}}(),b=u==="vertical"?Cp:nw,w=cs({page:p,withPlaceholder:null,axis:b,frame:y}),S={descriptor:e,isCombineEnabled:o,isFixedOnPage:a,axis:b,isEnabled:n,client:d,page:p,frame:y,subject:w};return S},pA=function(e,n){var o=q0(e);if(!n||e!==n)return o;var a=o.paddingBox.top-n.scrollTop,u=o.paddingBox.left-n.scrollLeft,d=a+n.scrollHeight,p=u+n.scrollWidth,m={top:a,right:p,bottom:d,left:u},y=Sp(m,o.border),b=bp({borderBox:y,margin:o.margin,border:o.border,padding:o.padding});return b},hA=function(t){var e=t.ref,n=t.descriptor,o=t.env,a=t.windowScroll,u=t.direction,d=t.isDropDisabled,p=t.isCombineEnabled,m=t.shouldClipSubject,y=o.closestScrollable,b=pA(e,y),w=Wu(b,a),S=function(){if(!y)return null;var T=q0(y),N={scrollHeight:y.scrollHeight,scrollWidth:y.scrollWidth};return{client:T,page:Wu(T,a),scroll:Yf(y),scrollSize:N,shouldClipSubject:m}}(),I=fA({descriptor:n,isEnabled:!d,isCombineEnabled:p,isFixedOnPage:o.isFixedOnPage,direction:u,client:b,page:w,closest:S});return I},gA={passive:!1},mA={passive:!0},Zv=function(t){return t.shouldPublishImmediately?gA:mA};function Xu(t){var e=re.useContext(t);return e||se(),e}var vu=function(e){return e&&e.env.closestScrollable||null};function vA(t){var e=re.useRef(null),n=Xu(fc),o=Fp("droppable"),a=n.registry,u=n.marshal,d=Aw(t),p=Me(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),m=re.useRef(p),y=Me(function(){return bt(function(K,V){e.current||se();var J={x:K,y:V};u.updateDroppableScroll(p.id,J)})},[p.id,u]),b=ge(function(){var K=e.current;return!K||!K.env.closestScrollable?Et:Yf(K.env.closestScrollable)},[]),w=ge(function(){var K=b();y(K.x,K.y)},[b,y]),S=Me(function(){return Ma(w)},[w]),I=ge(function(){var K=e.current,V=vu(K);K&&V||se();var J=K.scrollOptions;if(J.shouldPublishImmediately){w();return}S()},[S,w]),T=ge(function(K,V){e.current&&se();var J=d.current,k=J.getDroppableRef();k||se();var _=dA(k),P={ref:k,descriptor:p,env:_,scrollOptions:V};e.current=P;var A=hA({ref:k,descriptor:p,env:_,windowScroll:K,direction:J.direction,isDropDisabled:J.isDropDisabled,isCombineEnabled:J.isCombineEnabled,shouldClipSubject:!J.ignoreContainerClipping}),R=_.closestScrollable;return R&&(R.setAttribute(Kv.contextId,n.contextId),R.addEventListener("scroll",I,Zv(P.scrollOptions))),A},[n.contextId,p,I,d]),N=ge(function(){var K=e.current,V=vu(K);return K&&V||se(),Yf(V)},[]),j=ge(function(){var K=e.current;K||se();var V=vu(K);e.current=null,V&&(S.cancel(),V.removeAttribute(Kv.contextId),V.removeEventListener("scroll",I,Zv(K.scrollOptions)))},[I,S]),z=ge(function(K){var V=e.current;V||se();var J=vu(V);J||se(),J.scrollTop+=K.y,J.scrollLeft+=K.x},[]),W=Me(function(){return{getDimensionAndWatchScroll:T,getScrollWhileDragging:N,dragStopped:j,scroll:z}},[j,T,N,z]),G=Me(function(){return{uniqueId:o,descriptor:p,callbacks:W}},[W,p,o]);ar(function(){return m.current=G.descriptor,a.droppable.register(G),function(){e.current&&j(),a.droppable.unregister(G)}},[W,p,j,G,u,a.droppable]),ar(function(){e.current&&u.updateDroppableIsEnabled(m.current.id,!t.isDropDisabled)},[t.isDropDisabled,u]),ar(function(){e.current&&u.updateDroppableIsCombineEnabled(m.current.id,t.isCombineEnabled)},[t.isCombineEnabled,u])}function Ef(){}var ey={width:0,height:0,margin:UT},yA=function(e){var n=e.isAnimatingOpenOnMount,o=e.placeholder,a=e.animate;return n||a==="close"?ey:{height:o.client.borderBox.height,width:o.client.borderBox.width,margin:o.client.margin}},wA=function(e){var n=e.isAnimatingOpenOnMount,o=e.placeholder,a=e.animate,u=yA({isAnimatingOpenOnMount:n,placeholder:o,animate:a});return{display:o.display,boxSizing:"border-box",width:u.width,height:u.height,marginTop:u.margin.top,marginRight:u.margin.right,marginBottom:u.margin.bottom,marginLeft:u.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:a!=="none"?Ta.placeholder:null}};function SA(t){var e=re.useRef(null),n=ge(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),o=t.animate,a=t.onTransitionEnd,u=t.onClose,d=t.contextId,p=re.useState(t.animate==="open"),m=p[0],y=p[1];re.useEffect(function(){return m?o!=="open"?(n(),y(!1),Ef):e.current?Ef:(e.current=setTimeout(function(){e.current=null,y(!1)}),n):Ef},[o,m,n]);var b=ge(function(S){S.propertyName==="height"&&(a(),o==="close"&&u())},[o,u,a]),w=wA({isAnimatingOpenOnMount:m,animate:t.animate,placeholder:t.placeholder});return Ae.createElement(t.placeholder.tagName,{style:w,"data-rbd-placeholder-context-id":d,onTransitionEnd:b,ref:t.innerRef})}var bA=Ae.memo(SA),$p=Ae.createContext(null),EA=function(t){L0(e,t);function e(){for(var o,a=arguments.length,u=new Array(a),d=0;d<a;d++)u[d]=arguments[d];return o=t.call.apply(t,[this].concat(u))||this,o.state={isVisible:!!o.props.on,data:o.props.on,animate:o.props.shouldAnimate&&o.props.on?"open":"none"},o.onClose=function(){o.state.animate==="close"&&o.setState({isVisible:!1})},o}e.getDerivedStateFromProps=function(a,u){return a.shouldAnimate?a.on?{isVisible:!0,data:a.on,animate:"open"}:u.isVisible?{isVisible:!0,data:u.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!a.on,data:a.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var a={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(a)},e}(Ae.PureComponent),ty={dragging:5e3,dropAnimating:4500},IA=function(e,n){return n?Ta.drop(n.duration):e?Ta.snap:Ta.fluid},xA=function(e,n){return e?n?Ua.opacity.drop:Ua.opacity.combining:null},CA=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function _A(t){var e=t.dimension,n=e.client,o=t.offset,a=t.combineWith,u=t.dropping,d=!!a,p=CA(t),m=!!u,y=m?Gf.drop(o,d):Gf.moveTo(o),b={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:IA(p,u),transform:y,opacity:xA(d,m),zIndex:m?ty.dropAnimating:ty.dragging,pointerEvents:"none"};return b}function TA(t){return{transform:Gf.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function PA(t){return t.type==="DRAGGING"?_A(t):TA(t)}function kA(t,e,n){n===void 0&&(n=Et);var o=window.getComputedStyle(e),a=e.getBoundingClientRect(),u=G0(a,o),d=Wu(u,n),p={client:u,tagName:e.tagName.toLowerCase(),display:o.display},m={x:u.marginBox.width,y:u.marginBox.height},y={descriptor:t,placeholder:p,displaceBy:m,client:u,page:d};return y}function DA(t){var e=Fp("draggable"),n=t.descriptor,o=t.registry,a=t.getDraggableRef,u=t.canDragInteractiveElements,d=t.shouldRespectForcePress,p=t.isEnabled,m=Me(function(){return{canDragInteractiveElements:u,shouldRespectForcePress:d,isEnabled:p}},[u,p,d]),y=ge(function(I){var T=a();return T||se(),kA(n,T,I)},[n,a]),b=Me(function(){return{uniqueId:e,descriptor:n,options:m,getDimension:y}},[n,y,m,e]),w=re.useRef(b),S=re.useRef(!0);ar(function(){return o.draggable.register(w.current),function(){return o.draggable.unregister(w.current)}},[o.draggable]),ar(function(){if(S.current){S.current=!1;return}var I=w.current;w.current=b,o.draggable.update(b,I)},[b,o.draggable])}function AA(t){t.preventDefault()}function RA(t){var e=re.useRef(null),n=ge(function(P){e.current=P},[]),o=ge(function(){return e.current},[]),a=Xu(fc),u=a.contextId,d=a.dragHandleUsageInstructionsId,p=a.registry,m=Xu($p),y=m.type,b=m.droppableId,w=Me(function(){return{id:t.draggableId,index:t.index,type:y,droppableId:b}},[t.draggableId,t.index,y,b]),S=t.children,I=t.draggableId,T=t.isEnabled,N=t.shouldRespectForcePress,j=t.canDragInteractiveElements,z=t.isClone,W=t.mapped,G=t.dropAnimationFinished;if(!z){var K=Me(function(){return{descriptor:w,registry:p,getDraggableRef:o,canDragInteractiveElements:j,shouldRespectForcePress:N,isEnabled:T}},[w,p,o,j,N,T]);DA(K)}var V=Me(function(){return T?{tabIndex:0,role:"button","aria-describedby":d,"data-rbd-drag-handle-draggable-id":I,"data-rbd-drag-handle-context-id":u,draggable:!1,onDragStart:AA}:null},[u,d,I,T]),J=ge(function(P){W.type==="DRAGGING"&&W.dropping&&P.propertyName==="transform"&&G()},[G,W]),k=Me(function(){var P=PA(W),A=W.type==="DRAGGING"&&W.dropping?J:null,R={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":u,"data-rbd-draggable-id":I,style:P,onTransitionEnd:A},dragHandleProps:V};return R},[u,V,I,W,J,n]),_=Me(function(){return{draggableId:w.id,type:w.type,source:{index:w.index,droppableId:w.droppableId}}},[w.droppableId,w.id,w.index,w.type]);return S(k,W.snapshot,_)}var Fw=function(t,e){return t===e},Uw=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},OA=function(e){return e.combine?e.combine.draggableId:null},NA=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function LA(){var t=bt(function(a,u){return{x:a,y:u}}),e=bt(function(a,u,d,p,m){return{isDragging:!0,isClone:u,isDropAnimating:!!m,dropAnimation:m,mode:a,draggingOver:d,combineWith:p,combineTargetFor:null}}),n=bt(function(a,u,d,p,m,y,b){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:m,combineWith:y,mode:u,offset:a,dimension:d,forceShouldAnimate:b,snapshot:e(u,p,m,y,null)}}}),o=function(u,d){if(u.isDragging){if(u.critical.draggable.id!==d.draggableId)return null;var p=u.current.client.offset,m=u.dimensions.draggables[d.draggableId],y=sr(u.impact),b=NA(u.impact),w=u.forceShouldAnimate;return n(t(p.x,p.y),u.movementMode,m,d.isClone,y,b,w)}if(u.phase==="DROP_ANIMATING"){var S=u.completed;if(S.result.draggableId!==d.draggableId)return null;var I=d.isClone,T=u.dimensions.draggables[d.draggableId],N=S.result,j=N.mode,z=Uw(N),W=OA(N),G=u.dropDuration,K={duration:G,curve:Rp.drop,moveTo:u.newHomeClientOffset,opacity:W?Ua.opacity.drop:null,scale:W?Ua.scale.drop:null};return{mapped:{type:"DRAGGING",offset:u.newHomeClientOffset,dimension:T,dropping:K,draggingOver:z,combineWith:W,mode:j,forceShouldAnimate:null,snapshot:e(j,I,z,W,K)}}}return null};return o}function $w(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var MA={mapped:{type:"SECONDARY",offset:Et,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:$w(null)}};function BA(){var t=bt(function(d,p){return{x:d,y:p}}),e=bt($w),n=bt(function(d,p,m){return p===void 0&&(p=null),{mapped:{type:"SECONDARY",offset:d,combineTargetFor:p,shouldAnimateDisplacement:m,snapshot:e(p)}}}),o=function(p){return p?n(Et,p,!0):null},a=function(p,m,y,b){var w=y.displaced.visible[p],S=!!(b.inVirtualList&&b.effected[p]),I=lc(y),T=I&&I.draggableId===p?m:null;if(!w){if(!S)return o(T);if(y.displaced.invisible[p])return null;var N=vs(b.displacedBy.point),j=t(N.x,N.y);return n(j,T,!0)}if(S)return o(T);var z=y.displacedBy.point,W=t(z.x,z.y);return n(W,T,w.shouldAnimate)},u=function(p,m){if(p.isDragging)return p.critical.draggable.id===m.draggableId?null:a(m.draggableId,p.critical.draggable.id,p.impact,p.afterCritical);if(p.phase==="DROP_ANIMATING"){var y=p.completed;return y.result.draggableId===m.draggableId?null:a(m.draggableId,y.result.draggableId,y.impact,y.afterCritical)}return null};return u}var jA=function(){var e=LA(),n=BA(),o=function(u,d){return e(u,d)||n(u,d)||MA};return o},FA={dropAnimationFinished:Sw},UA=H0(jA,FA,null,{context:jp,pure:!0,areStatePropsEqual:Fw})(RA);function zw(t){var e=Xu($p),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:Ae.createElement(UA,t)}function $A(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,o=!!t.shouldRespectForcePress;return Ae.createElement(zw,we({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:o}))}function zA(t){var e=re.useContext(fc);e||se();var n=e.contextId,o=e.isMovementAllowed,a=re.useRef(null),u=re.useRef(null),d=t.children,p=t.droppableId,m=t.type,y=t.mode,b=t.direction,w=t.ignoreContainerClipping,S=t.isDropDisabled,I=t.isCombineEnabled,T=t.snapshot,N=t.useClone,j=t.updateViewportMaxScroll,z=t.getContainerForClone,W=ge(function(){return a.current},[]),G=ge(function(R){a.current=R},[]);ge(function(){return u.current},[]);var K=ge(function(R){u.current=R},[]),V=ge(function(){o()&&j({maxScroll:Cw()})},[o,j]);vA({droppableId:p,type:m,mode:y,direction:b,isDropDisabled:S,isCombineEnabled:I,ignoreContainerClipping:w,getDroppableRef:W});var J=Ae.createElement(EA,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(R){var B=R.onClose,C=R.data,Se=R.animate;return Ae.createElement(bA,{placeholder:C,onClose:B,innerRef:K,animate:Se,contextId:n,onTransitionEnd:V})}),k=Me(function(){return{innerRef:G,placeholder:J,droppableProps:{"data-rbd-droppable-id":p,"data-rbd-droppable-context-id":n}}},[n,p,J,G]),_=N?N.dragging.draggableId:null,P=Me(function(){return{droppableId:p,type:m,isUsingCloneFor:_}},[p,_,m]);function A(){if(!N)return null;var R=N.dragging,B=N.render,C=Ae.createElement(zw,{draggableId:R.draggableId,index:R.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(Se,je){return B(Se,je,R)});return IT.createPortal(C,z())}return Ae.createElement($p.Provider,{value:P},d(k,T),A())}var If=function(e,n){return e===n.droppable.type},ry=function(e,n){return n.draggables[e.draggable.id]},HA=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=we({},e,{shouldAnimatePlaceholder:!1}),o=bt(function(d){return{draggableId:d.id,type:d.type,source:{index:d.index,droppableId:d.droppableId}}}),a=bt(function(d,p,m,y,b,w){var S=b.descriptor.id,I=b.descriptor.droppableId===d;if(I){var T=w?{render:w,dragging:o(b.descriptor)}:null,N={isDraggingOver:m,draggingOverWith:m?S:null,draggingFromThisWith:S,isUsingPlaceholder:!0};return{placeholder:b.placeholder,shouldAnimatePlaceholder:!1,snapshot:N,useClone:T}}if(!p)return n;if(!y)return e;var j={isDraggingOver:m,draggingOverWith:S,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:b.placeholder,shouldAnimatePlaceholder:!0,snapshot:j,useClone:null}}),u=function(p,m){var y=m.droppableId,b=m.type,w=!m.isDropDisabled,S=m.renderClone;if(p.isDragging){var I=p.critical;if(!If(b,I))return n;var T=ry(I,p.dimensions),N=sr(p.impact)===y;return a(y,w,N,N,T,S)}if(p.phase==="DROP_ANIMATING"){var j=p.completed;if(!If(b,j.critical))return n;var z=ry(j.critical,p.dimensions);return a(y,w,Uw(j.result)===y,sr(j.impact)===y,z,S)}if(p.phase==="IDLE"&&p.completed&&!p.shouldFlush){var W=p.completed;if(!If(b,W.critical))return n;var G=sr(W.impact)===y,K=!!(W.impact.at&&W.impact.at.type==="COMBINE"),V=W.critical.droppable.id===y;return G?K?e:n:V?e:n}return n};return u},WA={updateViewportMaxScroll:QP};function VA(){return document.body||se(),document.body}var GA={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:VA},Hw=H0(HA,WA,null,{context:jp,pure:!0,areStatePropsEqual:Fw})(zA);Hw.defaultProps=GA;const qA=ee.div``,ny=ee.div`
  width: 100%;
`,KA=ee.div`
  display: flex;
  position: absolute;
  gap: 32px;
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
  flex-wrap: wrap;
  z-index: 999;
`,YA=ee.h1`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: 600;
`,XA=ee.form`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 100%;
  max-width: 500px;
`,ya=ee.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`,iy=ee.input`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 14px;
  &:focus {
    border-color: #7b61ff;
    outline: none;
  }
`,JA=ee.textarea`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
  font-size: 14px;
  min-height: 80px;
  margin-bottom: 16px;
  &:focus {
    border-color: #3769f1;
    outline: none;
  }
`,oy=ee.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`,QA=ee.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`,Qo=ee.option``,ZA=ee.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 14px;
  background: none;
  outline: none;
  cursor: pointer;

  span {
    margin-right: 30px;
  }

  &:hover {
    background: #f0f0f0;
    border-color: #aaa;
  }

  &:focus {
    border-color: #7b61ff;
    outline: none;
  }
`,eR=ee.button`
  width: 100%;
  background: #3769f1;
  color: #fff;
  font-weight: 600;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;
  &:hover {
    background: #3769f1;
  }
`,tR=()=>{const[t,e]=re.useState(""),[n,o]=re.useState(""),[a,u]=re.useState("Low"),[d,p]=re.useState("To Do");return F.jsx(KA,{children:F.jsxs(XA,{children:[F.jsx(YA,{children:"Add Task to Proiect"}),F.jsx(ya,{children:"Task Title"}),F.jsx(iy,{value:t,type:"text",placeholder:"e.g. Brainstorming Session",onChange:m=>e(m.target.value)}),F.jsx(ya,{children:"Description"}),F.jsx(JA,{value:n,type:"textarea",placeholder:"What needs to be done?",onChange:m=>o(m.target.value)}),F.jsxs(QA,{children:[F.jsxs(ny,{children:[F.jsx(ya,{children:"Priority"}),F.jsxs(oy,{value:a,onChange:m=>u(m.target.value),children:[F.jsx(Qo,{children:"Low"}),F.jsx(Qo,{children:"Medium"}),F.jsx(Qo,{children:"Hight"})]})]}),F.jsxs(ny,{children:[F.jsx(ya,{children:"Status"}),F.jsxs(oy,{value:d,onChange:m=>p(m.target.value),children:[F.jsx(Qo,{children:"To Do"}),F.jsx(Qo,{children:"In Progress"}),F.jsx(Qo,{children:"Done"})]})]})]}),F.jsx(ya,{htmlFor:"fileUpload",children:F.jsxs(ZA,{children:[F.jsx("span",{children:"📎"})," Attach Files"]})}),F.jsx(iy,{id:"fileUpload",type:"file",multiple:!0,style:{display:"none"}}),F.jsx(eR,{children:"Add Task"})]})})},rR=()=>{const[t,e]=re.useState(i_),[n,o]=re.useState(!1),a=()=>{o(p=>!p)},u=(p,m,y,b,w)=>{const S=Array.from(p.taskIds);S.splice(y,1);const I=Array.from(m.taskIds||[]);return I.splice(b,0,w),console.log("destinationTaskIds",I),{updatedStartColumn:{...p,taskIds:S},updatedFinishColumn:{...m,taskIds:I}}},d=p=>{const{source:m,destination:y,draggableId:b}=p;if(!y||m.droppableId===y.droppableId&&m.index===y.index)return;const w=t.columns[m.droppableId],S=t.columns[y.droppableId];if(w===S){const I=Array.from(w.taskIds);I.splice(m.index,1),I.splice(y.index,0,b);const T={...w,taskIds:I};e(N=>({...N,columns:{...N.columns,[T.id]:T}}))}else{const{updatedStartColumn:I,updatedFinishColumn:T}=u(w,S,m.index,y.index,b);e(N=>({...N,columns:{...N.columns,[I.id]:I,[T.id]:T}}))}};return F.jsx(qA,{children:F.jsxs(l_,{children:[n&&F.jsx(tR,{}),F.jsx(iA,{onDragEnd:d,children:t.columnOrder.map(p=>{const m=t.columns[p],y=m.taskIds.map(b=>t.tasks[b]);return F.jsxs(u_,{$column:m,$tasks:y,children:[F.jsxs(c_,{$lineColor:m.lineColor,children:[F.jsxs(d_,{$lineColor:m.lineColor,children:[m.title,F.jsx(f_,{"aria-label":"State Project",children:m.taskIds.length})]}),m.id==="column-1"&&F.jsx(p_,{"aria-haspopup":"dialog","aria-controls":"new-project-popup","aria-label":"Create new project",children:F.jsx(h_,{onClick:a,src:"icon/add-square_icon.svg","aria-hidden":"true"})})]}),F.jsx(Hw,{droppableId:m.id,children:b=>F.jsxs(g_,{ref:b.innerRef,...b.droppableProps,children:[y.map((w,S)=>F.jsx($A,{draggableId:w.id,index:S,children:I=>F.jsxs(m_,{...I.draggableProps,...I.dragHandleProps,ref:I.innerRef,children:[F.jsxs(v_,{children:[F.jsx(y_,{"aria-label":"Project level",$levelColor:w.levelColor,$levelBg:w.levelBackgroundColor,children:w.level}),F.jsx(w_,{role:"button",children:F.jsx(S_,{src:"icon/dots_icon.svg",alt:"Menu"})})]}),F.jsxs(b_,{children:[F.jsx(E_,{children:w.content}),w!=null&&w.image?F.jsx(o_,{children:F.jsx(x_,{src:w.image,alt:w.content||"Project image"})}):F.jsx(I_,{children:w.description||"No Description Available"})]}),F.jsxs(C_,{children:[F.jsx(__,{children:F.jsx("img",{src:"image/Group 633.png",alt:"Persons"})}),F.jsxs(T_,{children:[F.jsxs(P_,{children:[F.jsx("img",{src:"icon/comments_icon.svg",alt:"Comments"}),"10 comments"]}),F.jsxs(k_,{children:[F.jsx("img",{src:"icon/folder_icon.svg",alt:"Folder"}),"3 files"]})]})]})]})},w.id)),b.placeholder,m.taskIds.length===0&&F.jsx(D_,{style:{textAlign:"center",color:"#aaa"},children:"Drop tasks here"})]})})]},m.id)})})]})})},nR=()=>F.jsx(n_,{children:F.jsx(rR,{})}),Ww=({isSidebarOpen:t})=>F.jsx(s_,{children:F.jsx(sb,{children:F.jsx(a_,{$isSidebarOpen:t,children:F.jsx(nR,{})})})});Ww.propTypes={isSidebarOpen:Pn.bool.isRequired,sidebarRef:Pn.any};const iR=t=>{const[e,n]=re.useState(!1),o=re.useCallback(()=>{n(window.innerWidth<=t)},[t]);return re.useEffect(()=>{if(typeof window>"u")return;let a;const u=()=>{clearTimeout(a),a=setTimeout(o,0)};return window.addEventListener("resize",u),o(),()=>{window.removeEventListener("resize",u)}},[o]),e},oR=(t=!1)=>{const e=iR(700),[n,o]=re.useState(e?!1:t),a=()=>o(u=>!u);return re.useEffect(()=>{o(!e)},[e]),[n,a,e]};function sR(t){const[e,n]=re.useState(!1);return re.useEffect(()=>{function o(a){const u=t.every(d=>d.current&&!d.current.contains(a.target));n(u)}return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[t]),e}const aR=ee.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`,sy=ee.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: ${Aa.colors.lightText};
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`,Vw=({onClick:t})=>F.jsxs(aR,{type:"button",onClick:t,children:[F.jsx(sy,{}),F.jsx(sy,{})]});Vw.propTypes={onClick:Pn.func.isRequired};const lR=()=>{const{setIsLoggedIn:t,mode:e,setMode:n,setShowLoginForm:o,setLoggedUser:a}=re.useContext(hs),[u,d]=re.useState({email:"",password:"",confirmPassword:""}),[p,m]=re.useState("");re.useEffect(()=>{const I=wx(Tu,T=>{T?(a(T),t(!0)):(a(null),t(!1)),console.log("User:",T)});return()=>I()},[]);const y=()=>{n(I=>I==="login"?"register":"login")},b=()=>{o(!1)},w=I=>{if(I.preventDefault(),e==="register"&&u.password!==u.confirmPassword){m("Passwords do not match"),setTimeout(()=>m(""),5e3);return}switch(e){case"login":mx(Tu,u.email,u.password).then(()=>{t(!0),o(!1)}).catch(T=>{console.log(T),t(!1),m("User not defined")}).finally(()=>{setTimeout(()=>m(""),5e3)});break;case"register":gx(Tu,u.email,u.password).then(()=>{t(!0),o(!1)}).catch(T=>m(T));break}},S=I=>{const{name:T,value:N}=I.target;d(j=>({...j,[T]:N}))};return F.jsx(Rb,{children:F.jsxs(Ob,{onSubmit:w,children:[F.jsx(jb,{children:F.jsx(Vw,{onClick:b})}),F.jsx(Nb,{children:e==="login"?"Login":"Register"}),F.jsxs(Im,{children:["To log in, use the email: ",F.jsx("br",{})," ",F.jsx("span",{children:"projectm@example.com"})," ",F.jsx("br",{})," and password: ",F.jsx("br",{}),F.jsx("span",{children:"123456"})]}),p&&F.jsx(Im,{children:p}),F.jsx(Zd,{children:F.jsx(ef,{type:"email",name:"email",placeholder:"Email",value:u.email,onChange:S,required:!0})}),F.jsx(Zd,{children:F.jsx(ef,{type:"password",name:"password",placeholder:"Password",value:u.password,onChange:S,required:!0})}),e==="register"&&F.jsx(Zd,{children:F.jsx(ef,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:u.confirmPassword,onChange:S,required:!0})}),F.jsx(np,{type:"submit",children:e==="login"?"Sign in":"Sign up"}),F.jsxs(Mb,{children:[e==="login"?"Don't have an account? ":"Already have an account? ",F.jsx(Bb,{onClick:y,children:e==="login"?"Sign up":"Sign in"})]})]})})},uR=ee.main`
  display: flex;
  justify-content: center;
  margin-top: 5.5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 3rem;

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: 4rem;
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: 3rem;
  }
`,cR=ee.section`
  display: flex;
  max-width: 1280px;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    display: block;
    text-align: center;
  }
`,dR=ee.div`
  margin-right: 2rem;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`,fR=ee.h1`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 1.1;
`,pR=ee.p`
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.5;
`,hR=ee(np)`
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 150px;
  background-color: #000000;
`,gR=ee.div`
`,mR=ee.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`,vR=()=>{const{showLoginForm:t,setShowLoginForm:e}=re.useContext(hs),n=()=>{e(o=>!o)};return F.jsxs(uR,{children:[t&&F.jsx(lR,{}),F.jsxs(cR,{children:[F.jsxs(dR,{children:[F.jsx(fR,{children:"Manage your projects with ease"}),F.jsx(pR,{children:"Functional components to easily create modern UI. Enable date tracking to get an overview of project timelines."}),F.jsx(hR,{onClick:n,"aria-label":"Button for open login form",role:"Open login form",children:"Get Started"})]}),F.jsx(gR,{children:F.jsx(mR,{src:"image/Hero_img.png",alt:"Hero image"})})]})]})},yR=ee.div`
  padding: 0 0 2rem 1rem;
  border-bottom: ${({theme:t})=>t.colors.borderLineColor};
`,wR=ee.ul`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`,SR=ee.li`
  cursor: pointer;
  list-style: none;
  img {
    margin-right: 1rem;
  }
`,bR=[{id:1,name:"Home",icon:"icon/home_icon.svg"},{id:2,name:"Massages",icon:"icon/message_icon.svg"},{id:3,name:"Tasks",icon:"icon/task_icon.svg"},{id:4,name:"Members",icon:"icon/members_icon.svg"},{id:5,name:"Settings",icon:"icon/settings_icon.svg"}];function ER(){return F.jsx(yR,{children:F.jsx(wR,{children:bR.map(t=>F.jsxs(SR,{children:[F.jsx("img",{src:t.icon,alt:t.name}),F.jsx("a",{href:"#",children:F.jsx("span",{children:t.name})})]},t.id))})})}const IR=ee.div`
  position: relative;
  display: block;
  padding: 2rem 1.2rem 1.2rem;
  border-radius: 16px;
  margin: 0 0.7rem 10rem;

  background: ${({theme:t})=>t.colors.secondaryLightBackground};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    filter: blur(13px);
    background: rgba(252, 214, 74, 0.7);
    background-repeat: no-repeat;
    background-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    background-image: url(icon/lamp_icon.svg);
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4.4rem;
    height: 4.4rem;
  }
`,xR=ee.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`,CR=ee.h3`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
`,_R=ee.p`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`,TR=ee.input`
  width: 10rem;
  height: 3rem;
  border-radius: 16px;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`,PR=()=>F.jsxs(IR,{children:[F.jsx(xR,{}),F.jsx(CR,{children:"Thoughts Time"}),F.jsx(_R,{children:"We don’t have any notice for you, till then you can share your thoughts with your peers."}),F.jsx(TR,{type:"text",placeholder:"Write a message"})]}),kR=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 1rem;

  h2 {
    color: ${({theme:t})=>t.colors.lightText};
    font-family: ${({theme:t})=>t.fonts.primaryFont};
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .add-project {
    display: flex;
    img {
      width: 1rem;
      height: 1rem;
      object-fit: contain;
    }
  }
`,DR=ee.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5.5rem;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    list-style: none;
  }

  .project-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h3 {
      color: ${({theme:t})=>t.colors.lightText};
      font-family: ${({theme:t})=>t.fonts.primaryFont};
      font-size: 16px;
      font-weight: 500;
      line-height: 19px;
      text-align: left;
    }

    img {
      justify-self: end;
      width: 1rem;
      height: 1rem;
      object-fit: contain;
    }
  }

  .project-status {
    display: block;
    background-color: green;
    border-radius: 8px;
    width: 0.5rem;
    height: 0.5rem;
  }
`,AR=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  &:hover {
    border-radius: 6px;
    background-color: ${({theme:t})=>t.colors.hoverBackground};
    transition: background-color 0.3s ease-in-out;
    cursor: pointer;
  }

  &:hover h3 {
    color: ${({theme:t})=>t.colors.darkText};
  }
`,RR=ee.div`
  display: none;
`,OR=[{id:1,name:"Mobile App",description:"Description for Mobile App",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:2,name:"Website Redesign",description:"Description for Website Redesign",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:3,name:"Design System",description:"Description for Design System",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:4,name:"Wireframes",description:"Description for Wireframes",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"}],NR=()=>F.jsxs(DR,{children:[F.jsxs(kR,{children:[F.jsx("h2",{children:"My projects"}),F.jsx("button",{className:"add-project",children:F.jsx("img",{src:"icon/plus_icon.svg",alt:"Add Project"})})]}),F.jsx("ul",{children:OR.map(t=>F.jsxs("li",{children:[F.jsxs(AR,{children:[F.jsxs("a",{href:"#","aria-label":"Go to project",className:"project-item",children:[F.jsx("div",{className:"project-status","aria-hidden":"true"}),F.jsx("h3",{children:t.name})]}),F.jsx("button",{children:F.jsx("img",{src:"icon/dots_icon.svg",alt:"Submenu icon"})})]}),F.jsxs(RR,{children:[F.jsx("p",{children:t.description}),F.jsx("p",{children:t.createdAt}),F.jsx("p",{children:t.updatedAt}),F.jsx("p",{children:t.status})]})]},t.id))})]}),zp=re.forwardRef(({isSidebarOpen:t},e)=>F.jsx(ub,{ref:e,$isSidebarOpen:t,children:F.jsxs(cb,{children:[F.jsx(ER,{}),F.jsx(NR,{}),F.jsx(PR,{})]})}));zp.displayName="Sidebar";zp.propTypes={isSidebarOpen:Pn.bool.isRequired,onToggleSidebar:Pn.func,sidebarRef:Pn.any};const LR=()=>{const[t,e,n]=oR(),o=re.useRef(null),a=re.useRef(null);sR([o,a])&&t&&n&&e();const{isLoggedIn:d}=re.useContext(hs);return F.jsxs(rb,{theme:Aa,children:[F.jsx(ab,{$isSidebarOpen:t}),F.jsx(yp,{ref:o,onToggleSidebar:e,isSidebarOpen:t}),d?F.jsxs(F.Fragment,{children:[F.jsx(zp,{isSidebarOpen:t,ref:a}),F.jsx(Ww,{isSidebarOpen:t,sidebarRef:a})]}):F.jsx(vR,{})]})},Gw=({children:t})=>{const[e,n]=re.useState(!1),[o,a]=re.useState(!1),[u,d]=re.useState("login"),[p,m]=re.useState(null);return F.jsx(hs.Provider,{value:{isLoggedIn:e,setIsLoggedIn:n,showLoginForm:o,setShowLoginForm:a,mode:u,setMode:d,loggedUser:p,setLoggedUser:m},children:t})};Gw.propTypes={children:Pn.node.isRequired};n1.createRoot(document.getElementById("root")).render(F.jsx(Gw,{children:F.jsx(LR,{})}));
