(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(s){if(s.ep)return;s.ep=!0;const u=i(s);fetch(s.href,u)}})();function Ws(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qu={exports:{}},mo={},Ju={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function lS(){if(Mh)return we;Mh=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),m=Symbol.iterator;function y(x){return x===null||typeof x!="object"?null:(x=m&&x[m]||x["@@iterator"],typeof x=="function"?x:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,P={};function k(x,B,ue){this.props=x,this.context=B,this.refs=P,this.updater=ue||S}k.prototype.isReactComponent={},k.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},k.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function T(){}T.prototype=k.prototype;function O(x,B,ue){this.props=x,this.context=B,this.refs=P,this.updater=ue||S}var L=O.prototype=new T;L.constructor=O,I(L,k.prototype),L.isPureReactComponent=!0;var M=Array.isArray,R=Object.prototype.hasOwnProperty,F={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function le(x,B,ue){var de,fe={},pe=null,Se=null;if(B!=null)for(de in B.ref!==void 0&&(Se=B.ref),B.key!==void 0&&(pe=""+B.key),B)R.call(B,de)&&!z.hasOwnProperty(de)&&(fe[de]=B[de]);var ge=arguments.length-2;if(ge===1)fe.children=ue;else if(1<ge){for(var be=Array(ge),je=0;je<ge;je++)be[je]=arguments[je+2];fe.children=be}if(x&&x.defaultProps)for(de in ge=x.defaultProps,ge)fe[de]===void 0&&(fe[de]=ge[de]);return{$$typeof:t,type:x,key:pe,ref:Se,props:fe,_owner:F.current}}function ne(x,B){return{$$typeof:t,type:x.type,key:B,ref:x.ref,props:x.props,_owner:x._owner}}function ve(x){return typeof x=="object"&&x!==null&&x.$$typeof===t}function he(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ue){return B[ue]})}var Ae=/\/+/g;function V(x,B){return typeof x=="object"&&x!==null&&x.key!=null?he(""+x.key):B.toString(36)}function ye(x,B,ue,de,fe){var pe=typeof x;(pe==="undefined"||pe==="boolean")&&(x=null);var Se=!1;if(x===null)Se=!0;else switch(pe){case"string":case"number":Se=!0;break;case"object":switch(x.$$typeof){case t:case e:Se=!0}}if(Se)return Se=x,fe=fe(Se),x=de===""?"."+V(Se,0):de,M(fe)?(ue="",x!=null&&(ue=x.replace(Ae,"$&/")+"/"),ye(fe,B,ue,"",function(je){return je})):fe!=null&&(ve(fe)&&(fe=ne(fe,ue+(!fe.key||Se&&Se.key===fe.key?"":(""+fe.key).replace(Ae,"$&/")+"/")+x)),B.push(fe)),1;if(Se=0,de=de===""?".":de+":",M(x))for(var ge=0;ge<x.length;ge++){pe=x[ge];var be=de+V(pe,ge);Se+=ye(pe,B,ue,be,fe)}else if(be=y(x),typeof be=="function")for(x=be.call(x),ge=0;!(pe=x.next()).done;)pe=pe.value,be=de+V(pe,ge++),Se+=ye(pe,B,ue,be,fe);else if(pe==="object")throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return Se}function Le(x,B,ue){if(x==null)return x;var de=[],fe=0;return ye(x,de,"","",function(pe){return B.call(ue,pe,fe++)}),de}function De(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(ue){(x._status===0||x._status===-1)&&(x._status=1,x._result=ue)},function(ue){(x._status===0||x._status===-1)&&(x._status=2,x._result=ue)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var Ee={current:null},G={transition:null},J={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:G,ReactCurrentOwner:F};function Y(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:Le,forEach:function(x,B,ue){Le(x,function(){B.apply(this,arguments)},ue)},count:function(x){var B=0;return Le(x,function(){B++}),B},toArray:function(x){return Le(x,function(B){return B})||[]},only:function(x){if(!ve(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},we.Component=k,we.Fragment=i,we.Profiler=s,we.PureComponent=O,we.StrictMode=o,we.Suspense=h,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,we.act=Y,we.cloneElement=function(x,B,ue){if(x==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+x+".");var de=I({},x.props),fe=x.key,pe=x.ref,Se=x._owner;if(B!=null){if(B.ref!==void 0&&(pe=B.ref,Se=F.current),B.key!==void 0&&(fe=""+B.key),x.type&&x.type.defaultProps)var ge=x.type.defaultProps;for(be in B)R.call(B,be)&&!z.hasOwnProperty(be)&&(de[be]=B[be]===void 0&&ge!==void 0?ge[be]:B[be])}var be=arguments.length-2;if(be===1)de.children=ue;else if(1<be){ge=Array(be);for(var je=0;je<be;je++)ge[je]=arguments[je+2];de.children=ge}return{$$typeof:t,type:x.type,key:fe,ref:pe,props:de,_owner:Se}},we.createContext=function(x){return x={$$typeof:c,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},x.Provider={$$typeof:u,_context:x},x.Consumer=x},we.createElement=le,we.createFactory=function(x){var B=le.bind(null,x);return B.type=x,B},we.createRef=function(){return{current:null}},we.forwardRef=function(x){return{$$typeof:f,render:x}},we.isValidElement=ve,we.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:De}},we.memo=function(x,B){return{$$typeof:g,type:x,compare:B===void 0?null:B}},we.startTransition=function(x){var B=G.transition;G.transition={};try{x()}finally{G.transition=B}},we.unstable_act=Y,we.useCallback=function(x,B){return Ee.current.useCallback(x,B)},we.useContext=function(x){return Ee.current.useContext(x)},we.useDebugValue=function(){},we.useDeferredValue=function(x){return Ee.current.useDeferredValue(x)},we.useEffect=function(x,B){return Ee.current.useEffect(x,B)},we.useId=function(){return Ee.current.useId()},we.useImperativeHandle=function(x,B,ue){return Ee.current.useImperativeHandle(x,B,ue)},we.useInsertionEffect=function(x,B){return Ee.current.useInsertionEffect(x,B)},we.useLayoutEffect=function(x,B){return Ee.current.useLayoutEffect(x,B)},we.useMemo=function(x,B){return Ee.current.useMemo(x,B)},we.useReducer=function(x,B,ue){return Ee.current.useReducer(x,B,ue)},we.useRef=function(x){return Ee.current.useRef(x)},we.useState=function(x){return Ee.current.useState(x)},we.useSyncExternalStore=function(x,B,ue){return Ee.current.useSyncExternalStore(x,B,ue)},we.useTransition=function(){return Ee.current.useTransition()},we.version="18.3.1",we}var Bh;function rd(){return Bh||(Bh=1,Ju.exports=lS()),Ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function uS(){if(Fh)return mo;Fh=1;var t=rd(),e=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,g){var w,m={},y=null,S=null;g!==void 0&&(y=""+g),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(S=h.ref);for(w in h)o.call(h,w)&&!u.hasOwnProperty(w)&&(m[w]=h[w]);if(f&&f.defaultProps)for(w in h=f.defaultProps,h)m[w]===void 0&&(m[w]=h[w]);return{$$typeof:e,type:f,key:y,ref:S,props:m,_owner:s.current}}return mo.Fragment=i,mo.jsx=c,mo.jsxs=c,mo}var jh;function cS(){return jh||(jh=1,Qu.exports=uS()),Qu.exports}var N=cS(),is={},Xu={exports:{}},St={},Zu={exports:{}},ec={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Uh;function dS(){return Uh||(Uh=1,function(t){function e(G,J){var Y=G.length;G.push(J);e:for(;0<Y;){var x=Y-1>>>1,B=G[x];if(0<s(B,J))G[x]=J,G[Y]=B,Y=x;else break e}}function i(G){return G.length===0?null:G[0]}function o(G){if(G.length===0)return null;var J=G[0],Y=G.pop();if(Y!==J){G[0]=Y;e:for(var x=0,B=G.length,ue=B>>>1;x<ue;){var de=2*(x+1)-1,fe=G[de],pe=de+1,Se=G[pe];if(0>s(fe,Y))pe<B&&0>s(Se,fe)?(G[x]=Se,G[pe]=Y,x=pe):(G[x]=fe,G[de]=Y,x=de);else if(pe<B&&0>s(Se,Y))G[x]=Se,G[pe]=Y,x=pe;else break e}}return J}function s(G,J){var Y=G.sortIndex-J.sortIndex;return Y!==0?Y:G.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;t.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();t.unstable_now=function(){return c.now()-f}}var h=[],g=[],w=1,m=null,y=3,S=!1,I=!1,P=!1,k=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(G){for(var J=i(g);J!==null;){if(J.callback===null)o(g);else if(J.startTime<=G)o(g),J.sortIndex=J.expirationTime,e(h,J);else break;J=i(g)}}function M(G){if(P=!1,L(G),!I)if(i(h)!==null)I=!0,De(R);else{var J=i(g);J!==null&&Ee(M,J.startTime-G)}}function R(G,J){I=!1,P&&(P=!1,T(le),le=-1),S=!0;var Y=y;try{for(L(J),m=i(h);m!==null&&(!(m.expirationTime>J)||G&&!he());){var x=m.callback;if(typeof x=="function"){m.callback=null,y=m.priorityLevel;var B=x(m.expirationTime<=J);J=t.unstable_now(),typeof B=="function"?m.callback=B:m===i(h)&&o(h),L(J)}else o(h);m=i(h)}if(m!==null)var ue=!0;else{var de=i(g);de!==null&&Ee(M,de.startTime-J),ue=!1}return ue}finally{m=null,y=Y,S=!1}}var F=!1,z=null,le=-1,ne=5,ve=-1;function he(){return!(t.unstable_now()-ve<ne)}function Ae(){if(z!==null){var G=t.unstable_now();ve=G;var J=!0;try{J=z(!0,G)}finally{J?V():(F=!1,z=null)}}else F=!1}var V;if(typeof O=="function")V=function(){O(Ae)};else if(typeof MessageChannel<"u"){var ye=new MessageChannel,Le=ye.port2;ye.port1.onmessage=Ae,V=function(){Le.postMessage(null)}}else V=function(){k(Ae,0)};function De(G){z=G,F||(F=!0,V())}function Ee(G,J){le=k(function(){G(t.unstable_now())},J)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){I||S||(I=!0,De(R))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return i(h)},t.unstable_next=function(G){switch(y){case 1:case 2:case 3:var J=3;break;default:J=y}var Y=y;y=J;try{return G()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,J){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var Y=y;y=G;try{return J()}finally{y=Y}},t.unstable_scheduleCallback=function(G,J,Y){var x=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?x+Y:x):Y=x,G){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=Y+B,G={id:w++,callback:J,priorityLevel:G,startTime:Y,expirationTime:B,sortIndex:-1},Y>x?(G.sortIndex=Y,e(g,G),i(h)===null&&G===i(g)&&(P?(T(le),le=-1):P=!0,Ee(M,Y-x))):(G.sortIndex=B,e(h,G),I||S||(I=!0,De(R))),G},t.unstable_shouldYield=he,t.unstable_wrapCallback=function(G){var J=y;return function(){var Y=y;y=J;try{return G.apply(this,arguments)}finally{y=Y}}}}(ec)),ec}var $h;function fS(){return $h||($h=1,Zu.exports=dS()),Zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function pS(){if(zh)return St;zh=1;var t=rd(),e=fS();function i(r){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,s={};function u(r,n){c(r,n),c(r+"Capture",n)}function c(r,n){for(s[r]=n,r=0;r<n.length;r++)o.add(n[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,w={},m={};function y(r){return h.call(m,r)?!0:h.call(w,r)?!1:g.test(r)?m[r]=!0:(w[r]=!0,!1)}function S(r,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function I(r,n,a,l){if(n===null||typeof n>"u"||S(r,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function P(r,n,a,l,d,p,v){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=n,this.sanitizeURL=p,this.removeEmptyString=v}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){k[r]=new P(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var n=r[0];k[n]=new P(n,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){k[r]=new P(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){k[r]=new P(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){k[r]=new P(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){k[r]=new P(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){k[r]=new P(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){k[r]=new P(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){k[r]=new P(r,5,!1,r.toLowerCase(),null,!1,!1)});var T=/[\-:]([a-z])/g;function O(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var n=r.replace(T,O);k[n]=new P(n,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var n=r.replace(T,O);k[n]=new P(n,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var n=r.replace(T,O);k[n]=new P(n,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){k[r]=new P(r,1,!1,r.toLowerCase(),null,!1,!1)}),k.xlinkHref=new P("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){k[r]=new P(r,1,!1,r.toLowerCase(),null,!0,!0)});function L(r,n,a,l){var d=k.hasOwnProperty(n)?k[n]:null;(d!==null?d.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(I(n,a,d,l)&&(a=null),l||d===null?y(n)&&(a===null?r.removeAttribute(n):r.setAttribute(n,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(n=d.attributeName,l=d.attributeNamespace,a===null?r.removeAttribute(n):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,l?r.setAttributeNS(l,n,a):r.setAttribute(n,a))))}var M=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),F=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),ne=Symbol.for("react.profiler"),ve=Symbol.for("react.provider"),he=Symbol.for("react.context"),Ae=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),ye=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),G=Symbol.iterator;function J(r){return r===null||typeof r!="object"?null:(r=G&&r[G]||r["@@iterator"],typeof r=="function"?r:null)}var Y=Object.assign,x;function B(r){if(x===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);x=n&&n[1]||""}return`
`+x+r}var ue=!1;function de(r,n){if(!r||ue)return"";ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(A){var l=A}Reflect.construct(r,[],n)}else{try{n.call()}catch(A){l=A}r.call(n.prototype)}else{try{throw Error()}catch(A){l=A}r()}}catch(A){if(A&&l&&typeof A.stack=="string"){for(var d=A.stack.split(`
`),p=l.stack.split(`
`),v=d.length-1,b=p.length-1;1<=v&&0<=b&&d[v]!==p[b];)b--;for(;1<=v&&0<=b;v--,b--)if(d[v]!==p[b]){if(v!==1||b!==1)do if(v--,b--,0>b||d[v]!==p[b]){var E=`
`+d[v].replace(" at new "," at ");return r.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",r.displayName)),E}while(1<=v&&0<=b);break}}}finally{ue=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?B(r):""}function fe(r){switch(r.tag){case 5:return B(r.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return r=de(r.type,!1),r;case 11:return r=de(r.type.render,!1),r;case 1:return r=de(r.type,!0),r;default:return""}}function pe(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case z:return"Fragment";case F:return"Portal";case ne:return"Profiler";case le:return"StrictMode";case V:return"Suspense";case ye:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case he:return(r.displayName||"Context")+".Consumer";case ve:return(r._context.displayName||"Context")+".Provider";case Ae:var n=r.render;return r=r.displayName,r||(r=n.displayName||n.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Le:return n=r.displayName||null,n!==null?n:pe(r.type)||"Memo";case De:n=r._payload,r=r._init;try{return pe(r(n))}catch{}}return null}function Se(r){var n=r.type;switch(r.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=n.render,r=r.displayName||r.name||"",n.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pe(n);case 8:return n===le?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ge(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function be(r){var n=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function je(r){var n=be(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,n),l=""+r[n];if(!r.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,p=a.set;return Object.defineProperty(r,n,{configurable:!0,get:function(){return d.call(this)},set:function(v){l=""+v,p.call(this,v)}}),Object.defineProperty(r,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){r._valueTracker=null,delete r[n]}}}}function It(r){r._valueTracker||(r._valueTracker=je(r))}function ht(r){if(!r)return!1;var n=r._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return r&&(l=be(r)?r.checked?"true":"false":r.value),r=l,r!==a?(n.setValue(r),!0):!1}function xr(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Pr(r,n){var a=n.checked;return Y({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Ti(r,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=ge(n.value!=null?n.value:a),r._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ln(r,n){n=n.checked,n!=null&&L(r,"checked",n,!1)}function cn(r,n){Ln(r,n);var a=ge(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(l==="submit"||l==="reset"){r.removeAttribute("value");return}n.hasOwnProperty("value")?sr(r,n.type,a):n.hasOwnProperty("defaultValue")&&sr(r,n.type,ge(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(r.defaultChecked=!!n.defaultChecked)}function Yo(r,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+r._wrapperState.initialValue,a||n===r.value||(r.value=n),r.defaultValue=n}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function sr(r,n,a){(n!=="number"||xr(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var lr=Array.isArray;function Mn(r,n,a,l){if(r=r.options,n){n={};for(var d=0;d<a.length;d++)n["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=n.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&l&&(r[a].defaultSelected=!0)}else{for(a=""+ge(a),n=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,l&&(r[d].defaultSelected=!0);return}n!==null||r[d].disabled||(n=r[d])}n!==null&&(n.selected=!0)}}function al(r,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return Y({},n,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Vd(r,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(i(92));if(lr(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),a=n}r._wrapperState={initialValue:ge(a)}}function Gd(r,n){var a=ge(n.value),l=ge(n.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),n.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),l!=null&&(r.defaultValue=""+l)}function qd(r){var n=r.textContent;n===r._wrapperState.initialValue&&n!==""&&n!==null&&(r.value=n)}function Kd(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sl(r,n){return r==null||r==="http://www.w3.org/1999/xhtml"?Kd(n):r==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Qo,Yd=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,d){MSApp.execUnsafeLocalFunction(function(){return r(n,a,l,d)})}:r}(function(r,n){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=n;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Qo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;n.firstChild;)r.appendChild(n.firstChild)}});function Ri(r,n){if(n){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=n;return}}r.textContent=n}var Ai={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(Ai).forEach(function(r){f0.forEach(function(n){n=n+r.charAt(0).toUpperCase()+r.substring(1),Ai[n]=Ai[r]})});function Qd(r,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||Ai.hasOwnProperty(r)&&Ai[r]?(""+n).trim():n+"px"}function Jd(r,n){r=r.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,d=Qd(a,n[a],l);a==="float"&&(a="cssFloat"),l?r.setProperty(a,d):r[a]=d}}var p0=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ll(r,n){if(n){if(p0[r]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,r));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ul(r,n){if(r.indexOf("-")===-1)return typeof n.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cl=null;function dl(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var fl=null,Bn=null,Fn=null;function Xd(r){if(r=eo(r)){if(typeof fl!="function")throw Error(i(280));var n=r.stateNode;n&&(n=wa(n),fl(r.stateNode,r.type,n))}}function Zd(r){Bn?Fn?Fn.push(r):Fn=[r]:Bn=r}function ef(){if(Bn){var r=Bn,n=Fn;if(Fn=Bn=null,Xd(r),n)for(r=0;r<n.length;r++)Xd(n[r])}}function tf(r,n){return r(n)}function rf(){}var pl=!1;function nf(r,n,a){if(pl)return r(n,a);pl=!0;try{return tf(r,n,a)}finally{pl=!1,(Bn!==null||Fn!==null)&&(rf(),ef())}}function Oi(r,n){var a=r.stateNode;if(a===null)return null;var l=wa(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var hl=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){hl=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{hl=!1}function h0(r,n,a,l,d,p,v,b,E){var A=Array.prototype.slice.call(arguments,3);try{n.apply(a,A)}catch(U){this.onError(U)}}var Li=!1,Jo=null,Xo=!1,gl=null,g0={onError:function(r){Li=!0,Jo=r}};function m0(r,n,a,l,d,p,v,b,E){Li=!1,Jo=null,h0.apply(g0,arguments)}function v0(r,n,a,l,d,p,v,b,E){if(m0.apply(this,arguments),Li){if(Li){var A=Jo;Li=!1,Jo=null}else throw Error(i(198));Xo||(Xo=!0,gl=A)}}function dn(r){var n=r,a=r;if(r.alternate)for(;n.return;)n=n.return;else{r=n;do n=r,(n.flags&4098)!==0&&(a=n.return),r=n.return;while(r)}return n.tag===3?a:null}function of(r){if(r.tag===13){var n=r.memoizedState;if(n===null&&(r=r.alternate,r!==null&&(n=r.memoizedState)),n!==null)return n.dehydrated}return null}function af(r){if(dn(r)!==r)throw Error(i(188))}function y0(r){var n=r.alternate;if(!n){if(n=dn(r),n===null)throw Error(i(188));return n!==r?null:r}for(var a=r,l=n;;){var d=a.return;if(d===null)break;var p=d.alternate;if(p===null){if(l=d.return,l!==null){a=l;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===a)return af(d),r;if(p===l)return af(d),n;p=p.sibling}throw Error(i(188))}if(a.return!==l.return)a=d,l=p;else{for(var v=!1,b=d.child;b;){if(b===a){v=!0,a=d,l=p;break}if(b===l){v=!0,l=d,a=p;break}b=b.sibling}if(!v){for(b=p.child;b;){if(b===a){v=!0,a=p,l=d;break}if(b===l){v=!0,l=p,a=d;break}b=b.sibling}if(!v)throw Error(i(189))}}if(a.alternate!==l)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:n}function sf(r){return r=y0(r),r!==null?lf(r):null}function lf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var n=lf(r);if(n!==null)return n;r=r.sibling}return null}var uf=e.unstable_scheduleCallback,cf=e.unstable_cancelCallback,w0=e.unstable_shouldYield,S0=e.unstable_requestPaint,He=e.unstable_now,b0=e.unstable_getCurrentPriorityLevel,ml=e.unstable_ImmediatePriority,df=e.unstable_UserBlockingPriority,Zo=e.unstable_NormalPriority,I0=e.unstable_LowPriority,ff=e.unstable_IdlePriority,ea=null,Zt=null;function E0(r){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(ea,r,void 0,(r.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:P0,C0=Math.log,x0=Math.LN2;function P0(r){return r>>>=0,r===0?32:31-(C0(r)/x0|0)|0}var ta=64,ra=4194304;function Mi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function na(r,n){var a=r.pendingLanes;if(a===0)return 0;var l=0,d=r.suspendedLanes,p=r.pingedLanes,v=a&268435455;if(v!==0){var b=v&~d;b!==0?l=Mi(b):(p&=v,p!==0&&(l=Mi(p)))}else v=a&~d,v!==0?l=Mi(v):p!==0&&(l=Mi(p));if(l===0)return 0;if(n!==0&&n!==l&&(n&d)===0&&(d=l&-l,p=n&-n,d>=p||d===16&&(p&4194240)!==0))return n;if((l&4)!==0&&(l|=a&16),n=r.entangledLanes,n!==0)for(r=r.entanglements,n&=l;0<n;)a=31-$t(n),d=1<<a,l|=r[a],n&=~d;return l}function _0(r,n){switch(r){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k0(r,n){for(var a=r.suspendedLanes,l=r.pingedLanes,d=r.expirationTimes,p=r.pendingLanes;0<p;){var v=31-$t(p),b=1<<v,E=d[v];E===-1?((b&a)===0||(b&l)!==0)&&(d[v]=_0(b,n)):E<=n&&(r.expiredLanes|=b),p&=~b}}function vl(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function pf(){var r=ta;return ta<<=1,(ta&4194240)===0&&(ta=64),r}function yl(r){for(var n=[],a=0;31>a;a++)n.push(r);return n}function Bi(r,n,a){r.pendingLanes|=n,n!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,n=31-$t(n),r[n]=a}function D0(r,n){var a=r.pendingLanes&~n;r.pendingLanes=n,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=n,r.mutableReadLanes&=n,r.entangledLanes&=n,n=r.entanglements;var l=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-$t(a),p=1<<d;n[d]=0,l[d]=-1,r[d]=-1,a&=~p}}function wl(r,n){var a=r.entangledLanes|=n;for(r=r.entanglements;a;){var l=31-$t(a),d=1<<l;d&n|r[l]&n&&(r[l]|=n),a&=~d}}var Te=0;function hf(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var gf,Sl,mf,vf,yf,bl=!1,ia=[],_r=null,kr=null,Dr=null,Fi=new Map,ji=new Map,Tr=[],T0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wf(r,n){switch(r){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Fi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ji.delete(n.pointerId)}}function Ui(r,n,a,l,d,p){return r===null||r.nativeEvent!==p?(r={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[d]},n!==null&&(n=eo(n),n!==null&&Sl(n)),r):(r.eventSystemFlags|=l,n=r.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),r)}function R0(r,n,a,l,d){switch(n){case"focusin":return _r=Ui(_r,r,n,a,l,d),!0;case"dragenter":return kr=Ui(kr,r,n,a,l,d),!0;case"mouseover":return Dr=Ui(Dr,r,n,a,l,d),!0;case"pointerover":var p=d.pointerId;return Fi.set(p,Ui(Fi.get(p)||null,r,n,a,l,d)),!0;case"gotpointercapture":return p=d.pointerId,ji.set(p,Ui(ji.get(p)||null,r,n,a,l,d)),!0}return!1}function Sf(r){var n=fn(r.target);if(n!==null){var a=dn(n);if(a!==null){if(n=a.tag,n===13){if(n=of(a),n!==null){r.blockedOn=n,yf(r.priority,function(){mf(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function oa(r){if(r.blockedOn!==null)return!1;for(var n=r.targetContainers;0<n.length;){var a=El(r.domEventName,r.eventSystemFlags,n[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var l=new a.constructor(a.type,a);cl=l,a.target.dispatchEvent(l),cl=null}else return n=eo(a),n!==null&&Sl(n),r.blockedOn=a,!1;n.shift()}return!0}function bf(r,n,a){oa(r)&&a.delete(n)}function A0(){bl=!1,_r!==null&&oa(_r)&&(_r=null),kr!==null&&oa(kr)&&(kr=null),Dr!==null&&oa(Dr)&&(Dr=null),Fi.forEach(bf),ji.forEach(bf)}function $i(r,n){r.blockedOn===n&&(r.blockedOn=null,bl||(bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,A0)))}function zi(r){function n(d){return $i(d,r)}if(0<ia.length){$i(ia[0],r);for(var a=1;a<ia.length;a++){var l=ia[a];l.blockedOn===r&&(l.blockedOn=null)}}for(_r!==null&&$i(_r,r),kr!==null&&$i(kr,r),Dr!==null&&$i(Dr,r),Fi.forEach(n),ji.forEach(n),a=0;a<Tr.length;a++)l=Tr[a],l.blockedOn===r&&(l.blockedOn=null);for(;0<Tr.length&&(a=Tr[0],a.blockedOn===null);)Sf(a),a.blockedOn===null&&Tr.shift()}var jn=M.ReactCurrentBatchConfig,aa=!0;function O0(r,n,a,l){var d=Te,p=jn.transition;jn.transition=null;try{Te=1,Il(r,n,a,l)}finally{Te=d,jn.transition=p}}function N0(r,n,a,l){var d=Te,p=jn.transition;jn.transition=null;try{Te=4,Il(r,n,a,l)}finally{Te=d,jn.transition=p}}function Il(r,n,a,l){if(aa){var d=El(r,n,a,l);if(d===null)Ul(r,n,l,sa,a),wf(r,l);else if(R0(d,r,n,a,l))l.stopPropagation();else if(wf(r,l),n&4&&-1<T0.indexOf(r)){for(;d!==null;){var p=eo(d);if(p!==null&&gf(p),p=El(r,n,a,l),p===null&&Ul(r,n,l,sa,a),p===d)break;d=p}d!==null&&l.stopPropagation()}else Ul(r,n,l,null,a)}}var sa=null;function El(r,n,a,l){if(sa=null,r=dl(l),r=fn(r),r!==null)if(n=dn(r),n===null)r=null;else if(a=n.tag,a===13){if(r=of(n),r!==null)return r;r=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;r=null}else n!==r&&(r=null);return sa=r,null}function If(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b0()){case ml:return 1;case df:return 4;case Zo:case I0:return 16;case ff:return 536870912;default:return 16}default:return 16}}var Rr=null,Cl=null,la=null;function Ef(){if(la)return la;var r,n=Cl,a=n.length,l,d="value"in Rr?Rr.value:Rr.textContent,p=d.length;for(r=0;r<a&&n[r]===d[r];r++);var v=a-r;for(l=1;l<=v&&n[a-l]===d[p-l];l++);return la=d.slice(r,1<l?1-l:void 0)}function ua(r){var n=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&n===13&&(r=13)):r=n,r===10&&(r=13),32<=r||r===13?r:0}function ca(){return!0}function Cf(){return!1}function Et(r){function n(a,l,d,p,v){this._reactName=a,this._targetInst=d,this.type=l,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var b in r)r.hasOwnProperty(b)&&(a=r[b],this[b]=a?a(p):p[b]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ca:Cf,this.isPropagationStopped=Cf,this}return Y(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),n}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Et(Un),Wi=Y({},Un,{view:0,detail:0}),L0=Et(Wi),Pl,_l,Hi,da=Y({},Wi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dl,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Hi&&(Hi&&r.type==="mousemove"?(Pl=r.screenX-Hi.screenX,_l=r.screenY-Hi.screenY):_l=Pl=0,Hi=r),Pl)},movementY:function(r){return"movementY"in r?r.movementY:_l}}),xf=Et(da),M0=Y({},da,{dataTransfer:0}),B0=Et(M0),F0=Y({},Wi,{relatedTarget:0}),kl=Et(F0),j0=Y({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),U0=Et(j0),$0=Y({},Un,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),z0=Et($0),W0=Y({},Un,{data:0}),Pf=Et(W0),H0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q0(r){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(r):(r=G0[r])?!!n[r]:!1}function Dl(){return q0}var K0=Y({},Wi,{key:function(r){if(r.key){var n=H0[r.key]||r.key;if(n!=="Unidentified")return n}return r.type==="keypress"?(r=ua(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?V0[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dl,charCode:function(r){return r.type==="keypress"?ua(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?ua(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Y0=Et(K0),Q0=Y({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_f=Et(Q0),J0=Y({},Wi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dl}),X0=Et(J0),Z0=Y({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),ew=Et(Z0),tw=Y({},da,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=Et(tw),nw=[9,13,27,32],Tl=f&&"CompositionEvent"in window,Vi=null;f&&"documentMode"in document&&(Vi=document.documentMode);var iw=f&&"TextEvent"in window&&!Vi,kf=f&&(!Tl||Vi&&8<Vi&&11>=Vi),Df=" ",Tf=!1;function Rf(r,n){switch(r){case"keyup":return nw.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var $n=!1;function ow(r,n){switch(r){case"compositionend":return Af(n);case"keypress":return n.which!==32?null:(Tf=!0,Df);case"textInput":return r=n.data,r===Df&&Tf?null:r;default:return null}}function aw(r,n){if($n)return r==="compositionend"||!Tl&&Rf(r,n)?(r=Ef(),la=Cl=Rr=null,$n=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return kf&&n.locale!=="ko"?null:n.data;default:return null}}var sw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Of(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n==="input"?!!sw[r.type]:n==="textarea"}function Nf(r,n,a,l){Zd(l),n=ma(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,l),r.push({event:a,listeners:n}))}var Gi=null,qi=null;function lw(r){Xf(r,0)}function fa(r){var n=Gn(r);if(ht(n))return r}function uw(r,n){if(r==="change")return n}var Lf=!1;if(f){var Rl;if(f){var Al="oninput"in document;if(!Al){var Mf=document.createElement("div");Mf.setAttribute("oninput","return;"),Al=typeof Mf.oninput=="function"}Rl=Al}else Rl=!1;Lf=Rl&&(!document.documentMode||9<document.documentMode)}function Bf(){Gi&&(Gi.detachEvent("onpropertychange",Ff),qi=Gi=null)}function Ff(r){if(r.propertyName==="value"&&fa(qi)){var n=[];Nf(n,qi,r,dl(r)),nf(lw,n)}}function cw(r,n,a){r==="focusin"?(Bf(),Gi=n,qi=a,Gi.attachEvent("onpropertychange",Ff)):r==="focusout"&&Bf()}function dw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return fa(qi)}function fw(r,n){if(r==="click")return fa(n)}function pw(r,n){if(r==="input"||r==="change")return fa(n)}function hw(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var zt=typeof Object.is=="function"?Object.is:hw;function Ki(r,n){if(zt(r,n))return!0;if(typeof r!="object"||r===null||typeof n!="object"||n===null)return!1;var a=Object.keys(r),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var d=a[l];if(!h.call(n,d)||!zt(r[d],n[d]))return!1}return!0}function jf(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Uf(r,n){var a=jf(r);r=0;for(var l;a;){if(a.nodeType===3){if(l=r+a.textContent.length,r<=n&&l>=n)return{node:a,offset:n-r};r=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jf(a)}}function $f(r,n){return r&&n?r===n?!0:r&&r.nodeType===3?!1:n&&n.nodeType===3?$f(r,n.parentNode):"contains"in r?r.contains(n):r.compareDocumentPosition?!!(r.compareDocumentPosition(n)&16):!1:!1}function zf(){for(var r=window,n=xr();n instanceof r.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)r=n.contentWindow;else break;n=xr(r.document)}return n}function Ol(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n&&(n==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||n==="textarea"||r.contentEditable==="true")}function gw(r){var n=zf(),a=r.focusedElem,l=r.selectionRange;if(n!==a&&a&&a.ownerDocument&&$f(a.ownerDocument.documentElement,a)){if(l!==null&&Ol(a)){if(n=l.start,r=l.end,r===void 0&&(r=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(r,a.value.length);else if(r=(n=a.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,p=Math.min(l.start,d);l=l.end===void 0?p:Math.min(l.end,d),!r.extend&&p>l&&(d=l,l=p,p=d),d=Uf(a,p);var v=Uf(a,l);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),r.removeAllRanges(),p>l?(r.addRange(n),r.extend(v.node,v.offset)):(n.setEnd(v.node,v.offset),r.addRange(n)))}}for(n=[],r=a;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)r=n[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var mw=f&&"documentMode"in document&&11>=document.documentMode,zn=null,Nl=null,Yi=null,Ll=!1;function Wf(r,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ll||zn==null||zn!==xr(l)||(l=zn,"selectionStart"in l&&Ol(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Yi&&Ki(Yi,l)||(Yi=l,l=ma(Nl,"onSelect"),0<l.length&&(n=new xl("onSelect","select",null,n,a),r.push({event:n,listeners:l}),n.target=zn)))}function pa(r,n){var a={};return a[r.toLowerCase()]=n.toLowerCase(),a["Webkit"+r]="webkit"+n,a["Moz"+r]="moz"+n,a}var Wn={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionend:pa("Transition","TransitionEnd")},Ml={},Hf={};f&&(Hf=document.createElement("div").style,"AnimationEvent"in window||(delete Wn.animationend.animation,delete Wn.animationiteration.animation,delete Wn.animationstart.animation),"TransitionEvent"in window||delete Wn.transitionend.transition);function ha(r){if(Ml[r])return Ml[r];if(!Wn[r])return r;var n=Wn[r],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hf)return Ml[r]=n[a];return r}var Vf=ha("animationend"),Gf=ha("animationiteration"),qf=ha("animationstart"),Kf=ha("transitionend"),Yf=new Map,Qf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(r,n){Yf.set(r,n),u(n,[r])}for(var Bl=0;Bl<Qf.length;Bl++){var Fl=Qf[Bl],vw=Fl.toLowerCase(),yw=Fl[0].toUpperCase()+Fl.slice(1);Ar(vw,"on"+yw)}Ar(Vf,"onAnimationEnd"),Ar(Gf,"onAnimationIteration"),Ar(qf,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Kf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ww=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function Jf(r,n,a){var l=r.type||"unknown-event";r.currentTarget=a,v0(l,n,void 0,r),r.currentTarget=null}function Xf(r,n){n=(n&4)!==0;for(var a=0;a<r.length;a++){var l=r[a],d=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var v=l.length-1;0<=v;v--){var b=l[v],E=b.instance,A=b.currentTarget;if(b=b.listener,E!==p&&d.isPropagationStopped())break e;Jf(d,b,A),p=E}else for(v=0;v<l.length;v++){if(b=l[v],E=b.instance,A=b.currentTarget,b=b.listener,E!==p&&d.isPropagationStopped())break e;Jf(d,b,A),p=E}}}if(Xo)throw r=gl,Xo=!1,gl=null,r}function Me(r,n){var a=n[Gl];a===void 0&&(a=n[Gl]=new Set);var l=r+"__bubble";a.has(l)||(Zf(n,r,2,!1),a.add(l))}function jl(r,n,a){var l=0;n&&(l|=4),Zf(a,r,l,n)}var ga="_reactListening"+Math.random().toString(36).slice(2);function Ji(r){if(!r[ga]){r[ga]=!0,o.forEach(function(a){a!=="selectionchange"&&(ww.has(a)||jl(a,!1,r),jl(a,!0,r))});var n=r.nodeType===9?r:r.ownerDocument;n===null||n[ga]||(n[ga]=!0,jl("selectionchange",!1,n))}}function Zf(r,n,a,l){switch(If(n)){case 1:var d=O0;break;case 4:d=N0;break;default:d=Il}a=d.bind(null,n,a,r),d=void 0,!hl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),l?d!==void 0?r.addEventListener(n,a,{capture:!0,passive:d}):r.addEventListener(n,a,!0):d!==void 0?r.addEventListener(n,a,{passive:d}):r.addEventListener(n,a,!1)}function Ul(r,n,a,l,d){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var b=l.stateNode.containerInfo;if(b===d||b.nodeType===8&&b.parentNode===d)break;if(v===4)for(v=l.return;v!==null;){var E=v.tag;if((E===3||E===4)&&(E=v.stateNode.containerInfo,E===d||E.nodeType===8&&E.parentNode===d))return;v=v.return}for(;b!==null;){if(v=fn(b),v===null)return;if(E=v.tag,E===5||E===6){l=p=v;continue e}b=b.parentNode}}l=l.return}nf(function(){var A=p,U=dl(a),$=[];e:{var j=Yf.get(r);if(j!==void 0){var Q=xl,Z=r;switch(r){case"keypress":if(ua(a)===0)break e;case"keydown":case"keyup":Q=Y0;break;case"focusin":Z="focus",Q=kl;break;case"focusout":Z="blur",Q=kl;break;case"beforeblur":case"afterblur":Q=kl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=B0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=X0;break;case Vf:case Gf:case qf:Q=U0;break;case Kf:Q=ew;break;case"scroll":Q=L0;break;case"wheel":Q=rw;break;case"copy":case"cut":case"paste":Q=z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=_f}var ee=(n&4)!==0,Ve=!ee&&r==="scroll",_=ee?j!==null?j+"Capture":null:j;ee=[];for(var C=A,D;C!==null;){D=C;var W=D.stateNode;if(D.tag===5&&W!==null&&(D=W,_!==null&&(W=Oi(C,_),W!=null&&ee.push(Xi(C,W,D)))),Ve)break;C=C.return}0<ee.length&&(j=new Q(j,Z,null,a,U),$.push({event:j,listeners:ee}))}}if((n&7)===0){e:{if(j=r==="mouseover"||r==="pointerover",Q=r==="mouseout"||r==="pointerout",j&&a!==cl&&(Z=a.relatedTarget||a.fromElement)&&(fn(Z)||Z[ur]))break e;if((Q||j)&&(j=U.window===U?U:(j=U.ownerDocument)?j.defaultView||j.parentWindow:window,Q?(Z=a.relatedTarget||a.toElement,Q=A,Z=Z?fn(Z):null,Z!==null&&(Ve=dn(Z),Z!==Ve||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(Q=null,Z=A),Q!==Z)){if(ee=xf,W="onMouseLeave",_="onMouseEnter",C="mouse",(r==="pointerout"||r==="pointerover")&&(ee=_f,W="onPointerLeave",_="onPointerEnter",C="pointer"),Ve=Q==null?j:Gn(Q),D=Z==null?j:Gn(Z),j=new ee(W,C+"leave",Q,a,U),j.target=Ve,j.relatedTarget=D,W=null,fn(U)===A&&(ee=new ee(_,C+"enter",Z,a,U),ee.target=D,ee.relatedTarget=Ve,W=ee),Ve=W,Q&&Z)t:{for(ee=Q,_=Z,C=0,D=ee;D;D=Hn(D))C++;for(D=0,W=_;W;W=Hn(W))D++;for(;0<C-D;)ee=Hn(ee),C--;for(;0<D-C;)_=Hn(_),D--;for(;C--;){if(ee===_||_!==null&&ee===_.alternate)break t;ee=Hn(ee),_=Hn(_)}ee=null}else ee=null;Q!==null&&ep($,j,Q,ee,!1),Z!==null&&Ve!==null&&ep($,Ve,Z,ee,!0)}}e:{if(j=A?Gn(A):window,Q=j.nodeName&&j.nodeName.toLowerCase(),Q==="select"||Q==="input"&&j.type==="file")var te=uw;else if(Of(j))if(Lf)te=pw;else{te=dw;var ie=cw}else(Q=j.nodeName)&&Q.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(te=fw);if(te&&(te=te(r,A))){Nf($,te,a,U);break e}ie&&ie(r,j,A),r==="focusout"&&(ie=j._wrapperState)&&ie.controlled&&j.type==="number"&&sr(j,"number",j.value)}switch(ie=A?Gn(A):window,r){case"focusin":(Of(ie)||ie.contentEditable==="true")&&(zn=ie,Nl=A,Yi=null);break;case"focusout":Yi=Nl=zn=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Wf($,a,U);break;case"selectionchange":if(mw)break;case"keydown":case"keyup":Wf($,a,U)}var oe;if(Tl)e:{switch(r){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else $n?Rf(r,a)&&(ce="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(kf&&a.locale!=="ko"&&($n||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&$n&&(oe=Ef()):(Rr=U,Cl="value"in Rr?Rr.value:Rr.textContent,$n=!0)),ie=ma(A,ce),0<ie.length&&(ce=new Pf(ce,r,null,a,U),$.push({event:ce,listeners:ie}),oe?ce.data=oe:(oe=Af(a),oe!==null&&(ce.data=oe)))),(oe=iw?ow(r,a):aw(r,a))&&(A=ma(A,"onBeforeInput"),0<A.length&&(U=new Pf("onBeforeInput","beforeinput",null,a,U),$.push({event:U,listeners:A}),U.data=oe))}Xf($,n)})}function Xi(r,n,a){return{instance:r,listener:n,currentTarget:a}}function ma(r,n){for(var a=n+"Capture",l=[];r!==null;){var d=r,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=Oi(r,a),p!=null&&l.unshift(Xi(r,p,d)),p=Oi(r,n),p!=null&&l.push(Xi(r,p,d))),r=r.return}return l}function Hn(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function ep(r,n,a,l,d){for(var p=n._reactName,v=[];a!==null&&a!==l;){var b=a,E=b.alternate,A=b.stateNode;if(E!==null&&E===l)break;b.tag===5&&A!==null&&(b=A,d?(E=Oi(a,p),E!=null&&v.unshift(Xi(a,E,b))):d||(E=Oi(a,p),E!=null&&v.push(Xi(a,E,b)))),a=a.return}v.length!==0&&r.push({event:n,listeners:v})}var Sw=/\r\n?/g,bw=/\u0000|\uFFFD/g;function tp(r){return(typeof r=="string"?r:""+r).replace(Sw,`
`).replace(bw,"")}function va(r,n,a){if(n=tp(n),tp(r)!==n&&a)throw Error(i(425))}function ya(){}var $l=null,zl=null;function Wl(r,n){return r==="textarea"||r==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Hl=typeof setTimeout=="function"?setTimeout:void 0,Iw=typeof clearTimeout=="function"?clearTimeout:void 0,rp=typeof Promise=="function"?Promise:void 0,Ew=typeof queueMicrotask=="function"?queueMicrotask:typeof rp<"u"?function(r){return rp.resolve(null).then(r).catch(Cw)}:Hl;function Cw(r){setTimeout(function(){throw r})}function Vl(r,n){var a=n,l=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(l===0){r.removeChild(d),zi(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=d}while(a);zi(n)}function Or(r){for(;r!=null;r=r.nextSibling){var n=r.nodeType;if(n===1||n===3)break;if(n===8){if(n=r.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return r}function np(r){r=r.previousSibling;for(var n=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return r;n--}else a==="/$"&&n++}r=r.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),er="__reactFiber$"+Vn,Zi="__reactProps$"+Vn,ur="__reactContainer$"+Vn,Gl="__reactEvents$"+Vn,xw="__reactListeners$"+Vn,Pw="__reactHandles$"+Vn;function fn(r){var n=r[er];if(n)return n;for(var a=r.parentNode;a;){if(n=a[ur]||a[er]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(r=np(r);r!==null;){if(a=r[er])return a;r=np(r)}return n}r=a,a=r.parentNode}return null}function eo(r){return r=r[er]||r[ur],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Gn(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(i(33))}function wa(r){return r[Zi]||null}var ql=[],qn=-1;function Nr(r){return{current:r}}function Be(r){0>qn||(r.current=ql[qn],ql[qn]=null,qn--)}function Ne(r,n){qn++,ql[qn]=r.current,r.current=n}var Lr={},at=Nr(Lr),gt=Nr(!1),pn=Lr;function Kn(r,n){var a=r.type.contextTypes;if(!a)return Lr;var l=r.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in a)d[p]=n[p];return l&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=d),d}function mt(r){return r=r.childContextTypes,r!=null}function Sa(){Be(gt),Be(at)}function ip(r,n,a){if(at.current!==Lr)throw Error(i(168));Ne(at,n),Ne(gt,a)}function op(r,n,a){var l=r.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var d in l)if(!(d in n))throw Error(i(108,Se(r)||"Unknown",d));return Y({},a,l)}function ba(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Lr,pn=at.current,Ne(at,r),Ne(gt,gt.current),!0}function ap(r,n,a){var l=r.stateNode;if(!l)throw Error(i(169));a?(r=op(r,n,pn),l.__reactInternalMemoizedMergedChildContext=r,Be(gt),Be(at),Ne(at,r)):Be(gt),Ne(gt,a)}var cr=null,Ia=!1,Kl=!1;function sp(r){cr===null?cr=[r]:cr.push(r)}function _w(r){Ia=!0,sp(r)}function Mr(){if(!Kl&&cr!==null){Kl=!0;var r=0,n=Te;try{var a=cr;for(Te=1;r<a.length;r++){var l=a[r];do l=l(!0);while(l!==null)}cr=null,Ia=!1}catch(d){throw cr!==null&&(cr=cr.slice(r+1)),uf(ml,Mr),d}finally{Te=n,Kl=!1}}return null}var Yn=[],Qn=0,Ea=null,Ca=0,Rt=[],At=0,hn=null,dr=1,fr="";function gn(r,n){Yn[Qn++]=Ca,Yn[Qn++]=Ea,Ea=r,Ca=n}function lp(r,n,a){Rt[At++]=dr,Rt[At++]=fr,Rt[At++]=hn,hn=r;var l=dr;r=fr;var d=32-$t(l)-1;l&=~(1<<d),a+=1;var p=32-$t(n)+d;if(30<p){var v=d-d%5;p=(l&(1<<v)-1).toString(32),l>>=v,d-=v,dr=1<<32-$t(n)+d|a<<d|l,fr=p+r}else dr=1<<p|a<<d|l,fr=r}function Yl(r){r.return!==null&&(gn(r,1),lp(r,1,0))}function Ql(r){for(;r===Ea;)Ea=Yn[--Qn],Yn[Qn]=null,Ca=Yn[--Qn],Yn[Qn]=null;for(;r===hn;)hn=Rt[--At],Rt[At]=null,fr=Rt[--At],Rt[At]=null,dr=Rt[--At],Rt[At]=null}var Ct=null,xt=null,Ue=!1,Wt=null;function up(r,n){var a=Mt(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=r,n=r.deletions,n===null?(r.deletions=[a],r.flags|=16):n.push(a)}function cp(r,n){switch(r.tag){case 5:var a=r.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(r.stateNode=n,Ct=r,xt=Or(n.firstChild),!0):!1;case 6:return n=r.pendingProps===""||n.nodeType!==3?null:n,n!==null?(r.stateNode=n,Ct=r,xt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=hn!==null?{id:dr,overflow:fr}:null,r.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=Mt(18,null,null,0),a.stateNode=n,a.return=r,r.child=a,Ct=r,xt=null,!0):!1;default:return!1}}function Jl(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Xl(r){if(Ue){var n=xt;if(n){var a=n;if(!cp(r,n)){if(Jl(r))throw Error(i(418));n=Or(a.nextSibling);var l=Ct;n&&cp(r,n)?up(l,a):(r.flags=r.flags&-4097|2,Ue=!1,Ct=r)}}else{if(Jl(r))throw Error(i(418));r.flags=r.flags&-4097|2,Ue=!1,Ct=r}}}function dp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Ct=r}function xa(r){if(r!==Ct)return!1;if(!Ue)return dp(r),Ue=!0,!1;var n;if((n=r.tag!==3)&&!(n=r.tag!==5)&&(n=r.type,n=n!=="head"&&n!=="body"&&!Wl(r.type,r.memoizedProps)),n&&(n=xt)){if(Jl(r))throw fp(),Error(i(418));for(;n;)up(r,n),n=Or(n.nextSibling)}if(dp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,n=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(n===0){xt=Or(r.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}r=r.nextSibling}xt=null}}else xt=Ct?Or(r.stateNode.nextSibling):null;return!0}function fp(){for(var r=xt;r;)r=Or(r.nextSibling)}function Jn(){xt=Ct=null,Ue=!1}function Zl(r){Wt===null?Wt=[r]:Wt.push(r)}var kw=M.ReactCurrentBatchConfig;function to(r,n,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var l=a.stateNode}if(!l)throw Error(i(147,r));var d=l,p=""+r;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===p?n.ref:(n=function(v){var b=d.refs;v===null?delete b[p]:b[p]=v},n._stringRef=p,n)}if(typeof r!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,r))}return r}function Pa(r,n){throw r=Object.prototype.toString.call(n),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r))}function pp(r){var n=r._init;return n(r._payload)}function hp(r){function n(_,C){if(r){var D=_.deletions;D===null?(_.deletions=[C],_.flags|=16):D.push(C)}}function a(_,C){if(!r)return null;for(;C!==null;)n(_,C),C=C.sibling;return null}function l(_,C){for(_=new Map;C!==null;)C.key!==null?_.set(C.key,C):_.set(C.index,C),C=C.sibling;return _}function d(_,C){return _=Hr(_,C),_.index=0,_.sibling=null,_}function p(_,C,D){return _.index=D,r?(D=_.alternate,D!==null?(D=D.index,D<C?(_.flags|=2,C):D):(_.flags|=2,C)):(_.flags|=1048576,C)}function v(_){return r&&_.alternate===null&&(_.flags|=2),_}function b(_,C,D,W){return C===null||C.tag!==6?(C=Hu(D,_.mode,W),C.return=_,C):(C=d(C,D),C.return=_,C)}function E(_,C,D,W){var te=D.type;return te===z?U(_,C,D.props.children,W,D.key):C!==null&&(C.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===De&&pp(te)===C.type)?(W=d(C,D.props),W.ref=to(_,C,D),W.return=_,W):(W=Qa(D.type,D.key,D.props,null,_.mode,W),W.ref=to(_,C,D),W.return=_,W)}function A(_,C,D,W){return C===null||C.tag!==4||C.stateNode.containerInfo!==D.containerInfo||C.stateNode.implementation!==D.implementation?(C=Vu(D,_.mode,W),C.return=_,C):(C=d(C,D.children||[]),C.return=_,C)}function U(_,C,D,W,te){return C===null||C.tag!==7?(C=En(D,_.mode,W,te),C.return=_,C):(C=d(C,D),C.return=_,C)}function $(_,C,D){if(typeof C=="string"&&C!==""||typeof C=="number")return C=Hu(""+C,_.mode,D),C.return=_,C;if(typeof C=="object"&&C!==null){switch(C.$$typeof){case R:return D=Qa(C.type,C.key,C.props,null,_.mode,D),D.ref=to(_,null,C),D.return=_,D;case F:return C=Vu(C,_.mode,D),C.return=_,C;case De:var W=C._init;return $(_,W(C._payload),D)}if(lr(C)||J(C))return C=En(C,_.mode,D,null),C.return=_,C;Pa(_,C)}return null}function j(_,C,D,W){var te=C!==null?C.key:null;if(typeof D=="string"&&D!==""||typeof D=="number")return te!==null?null:b(_,C,""+D,W);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case R:return D.key===te?E(_,C,D,W):null;case F:return D.key===te?A(_,C,D,W):null;case De:return te=D._init,j(_,C,te(D._payload),W)}if(lr(D)||J(D))return te!==null?null:U(_,C,D,W,null);Pa(_,D)}return null}function Q(_,C,D,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return _=_.get(D)||null,b(C,_,""+W,te);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case R:return _=_.get(W.key===null?D:W.key)||null,E(C,_,W,te);case F:return _=_.get(W.key===null?D:W.key)||null,A(C,_,W,te);case De:var ie=W._init;return Q(_,C,D,ie(W._payload),te)}if(lr(W)||J(W))return _=_.get(D)||null,U(C,_,W,te,null);Pa(C,W)}return null}function Z(_,C,D,W){for(var te=null,ie=null,oe=C,ce=C=0,Xe=null;oe!==null&&ce<D.length;ce++){oe.index>ce?(Xe=oe,oe=null):Xe=oe.sibling;var Pe=j(_,oe,D[ce],W);if(Pe===null){oe===null&&(oe=Xe);break}r&&oe&&Pe.alternate===null&&n(_,oe),C=p(Pe,C,ce),ie===null?te=Pe:ie.sibling=Pe,ie=Pe,oe=Xe}if(ce===D.length)return a(_,oe),Ue&&gn(_,ce),te;if(oe===null){for(;ce<D.length;ce++)oe=$(_,D[ce],W),oe!==null&&(C=p(oe,C,ce),ie===null?te=oe:ie.sibling=oe,ie=oe);return Ue&&gn(_,ce),te}for(oe=l(_,oe);ce<D.length;ce++)Xe=Q(oe,_,ce,D[ce],W),Xe!==null&&(r&&Xe.alternate!==null&&oe.delete(Xe.key===null?ce:Xe.key),C=p(Xe,C,ce),ie===null?te=Xe:ie.sibling=Xe,ie=Xe);return r&&oe.forEach(function(Vr){return n(_,Vr)}),Ue&&gn(_,ce),te}function ee(_,C,D,W){var te=J(D);if(typeof te!="function")throw Error(i(150));if(D=te.call(D),D==null)throw Error(i(151));for(var ie=te=null,oe=C,ce=C=0,Xe=null,Pe=D.next();oe!==null&&!Pe.done;ce++,Pe=D.next()){oe.index>ce?(Xe=oe,oe=null):Xe=oe.sibling;var Vr=j(_,oe,Pe.value,W);if(Vr===null){oe===null&&(oe=Xe);break}r&&oe&&Vr.alternate===null&&n(_,oe),C=p(Vr,C,ce),ie===null?te=Vr:ie.sibling=Vr,ie=Vr,oe=Xe}if(Pe.done)return a(_,oe),Ue&&gn(_,ce),te;if(oe===null){for(;!Pe.done;ce++,Pe=D.next())Pe=$(_,Pe.value,W),Pe!==null&&(C=p(Pe,C,ce),ie===null?te=Pe:ie.sibling=Pe,ie=Pe);return Ue&&gn(_,ce),te}for(oe=l(_,oe);!Pe.done;ce++,Pe=D.next())Pe=Q(oe,_,ce,Pe.value,W),Pe!==null&&(r&&Pe.alternate!==null&&oe.delete(Pe.key===null?ce:Pe.key),C=p(Pe,C,ce),ie===null?te=Pe:ie.sibling=Pe,ie=Pe);return r&&oe.forEach(function(sS){return n(_,sS)}),Ue&&gn(_,ce),te}function Ve(_,C,D,W){if(typeof D=="object"&&D!==null&&D.type===z&&D.key===null&&(D=D.props.children),typeof D=="object"&&D!==null){switch(D.$$typeof){case R:e:{for(var te=D.key,ie=C;ie!==null;){if(ie.key===te){if(te=D.type,te===z){if(ie.tag===7){a(_,ie.sibling),C=d(ie,D.props.children),C.return=_,_=C;break e}}else if(ie.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===De&&pp(te)===ie.type){a(_,ie.sibling),C=d(ie,D.props),C.ref=to(_,ie,D),C.return=_,_=C;break e}a(_,ie);break}else n(_,ie);ie=ie.sibling}D.type===z?(C=En(D.props.children,_.mode,W,D.key),C.return=_,_=C):(W=Qa(D.type,D.key,D.props,null,_.mode,W),W.ref=to(_,C,D),W.return=_,_=W)}return v(_);case F:e:{for(ie=D.key;C!==null;){if(C.key===ie)if(C.tag===4&&C.stateNode.containerInfo===D.containerInfo&&C.stateNode.implementation===D.implementation){a(_,C.sibling),C=d(C,D.children||[]),C.return=_,_=C;break e}else{a(_,C);break}else n(_,C);C=C.sibling}C=Vu(D,_.mode,W),C.return=_,_=C}return v(_);case De:return ie=D._init,Ve(_,C,ie(D._payload),W)}if(lr(D))return Z(_,C,D,W);if(J(D))return ee(_,C,D,W);Pa(_,D)}return typeof D=="string"&&D!==""||typeof D=="number"?(D=""+D,C!==null&&C.tag===6?(a(_,C.sibling),C=d(C,D),C.return=_,_=C):(a(_,C),C=Hu(D,_.mode,W),C.return=_,_=C),v(_)):a(_,C)}return Ve}var Xn=hp(!0),gp=hp(!1),_a=Nr(null),ka=null,Zn=null,eu=null;function tu(){eu=Zn=ka=null}function ru(r){var n=_a.current;Be(_a),r._currentValue=n}function nu(r,n,a){for(;r!==null;){var l=r.alternate;if((r.childLanes&n)!==n?(r.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),r===a)break;r=r.return}}function ei(r,n){ka=r,eu=Zn=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&n)!==0&&(vt=!0),r.firstContext=null)}function Ot(r){var n=r._currentValue;if(eu!==r)if(r={context:r,memoizedValue:n,next:null},Zn===null){if(ka===null)throw Error(i(308));Zn=r,ka.dependencies={lanes:0,firstContext:r}}else Zn=Zn.next=r;return n}var mn=null;function iu(r){mn===null?mn=[r]:mn.push(r)}function mp(r,n,a,l){var d=n.interleaved;return d===null?(a.next=a,iu(n)):(a.next=d.next,d.next=a),n.interleaved=a,pr(r,l)}function pr(r,n){r.lanes|=n;var a=r.alternate;for(a!==null&&(a.lanes|=n),a=r,r=r.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),a=r,r=r.return;return a.tag===3?a.stateNode:null}var Br=!1;function ou(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vp(r,n){r=r.updateQueue,n.updateQueue===r&&(n.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function hr(r,n){return{eventTime:r,lane:n,tag:0,payload:null,callback:null,next:null}}function Fr(r,n,a){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,(Ce&2)!==0){var d=l.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),l.pending=n,pr(r,a)}return d=l.interleaved,d===null?(n.next=n,iu(l)):(n.next=d.next,d.next=n),l.interleaved=n,pr(r,a)}function Da(r,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=r.pendingLanes,a|=l,n.lanes=a,wl(r,a)}}function yp(r,n){var a=r.updateQueue,l=r.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var d=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?d=p=v:p=p.next=v,a=a.next}while(a!==null);p===null?d=p=n:p=p.next=n}else d=p=n;a={baseState:l.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:l.shared,effects:l.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=n:r.next=n,a.lastBaseUpdate=n}function Ta(r,n,a,l){var d=r.updateQueue;Br=!1;var p=d.firstBaseUpdate,v=d.lastBaseUpdate,b=d.shared.pending;if(b!==null){d.shared.pending=null;var E=b,A=E.next;E.next=null,v===null?p=A:v.next=A,v=E;var U=r.alternate;U!==null&&(U=U.updateQueue,b=U.lastBaseUpdate,b!==v&&(b===null?U.firstBaseUpdate=A:b.next=A,U.lastBaseUpdate=E))}if(p!==null){var $=d.baseState;v=0,U=A=E=null,b=p;do{var j=b.lane,Q=b.eventTime;if((l&j)===j){U!==null&&(U=U.next={eventTime:Q,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var Z=r,ee=b;switch(j=n,Q=a,ee.tag){case 1:if(Z=ee.payload,typeof Z=="function"){$=Z.call(Q,$,j);break e}$=Z;break e;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=ee.payload,j=typeof Z=="function"?Z.call(Q,$,j):Z,j==null)break e;$=Y({},$,j);break e;case 2:Br=!0}}b.callback!==null&&b.lane!==0&&(r.flags|=64,j=d.effects,j===null?d.effects=[b]:j.push(b))}else Q={eventTime:Q,lane:j,tag:b.tag,payload:b.payload,callback:b.callback,next:null},U===null?(A=U=Q,E=$):U=U.next=Q,v|=j;if(b=b.next,b===null){if(b=d.shared.pending,b===null)break;j=b,b=j.next,j.next=null,d.lastBaseUpdate=j,d.shared.pending=null}}while(!0);if(U===null&&(E=$),d.baseState=E,d.firstBaseUpdate=A,d.lastBaseUpdate=U,n=d.shared.interleaved,n!==null){d=n;do v|=d.lane,d=d.next;while(d!==n)}else p===null&&(d.shared.lanes=0);wn|=v,r.lanes=v,r.memoizedState=$}}function wp(r,n,a){if(r=n.effects,n.effects=null,r!==null)for(n=0;n<r.length;n++){var l=r[n],d=l.callback;if(d!==null){if(l.callback=null,l=a,typeof d!="function")throw Error(i(191,d));d.call(l)}}}var ro={},tr=Nr(ro),no=Nr(ro),io=Nr(ro);function vn(r){if(r===ro)throw Error(i(174));return r}function au(r,n){switch(Ne(io,n),Ne(no,r),Ne(tr,ro),r=n.nodeType,r){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:sl(null,"");break;default:r=r===8?n.parentNode:n,n=r.namespaceURI||null,r=r.tagName,n=sl(n,r)}Be(tr),Ne(tr,n)}function ti(){Be(tr),Be(no),Be(io)}function Sp(r){vn(io.current);var n=vn(tr.current),a=sl(n,r.type);n!==a&&(Ne(no,r),Ne(tr,a))}function su(r){no.current===r&&(Be(tr),Be(no))}var $e=Nr(0);function Ra(r){for(var n=r;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var lu=[];function uu(){for(var r=0;r<lu.length;r++)lu[r]._workInProgressVersionPrimary=null;lu.length=0}var Aa=M.ReactCurrentDispatcher,cu=M.ReactCurrentBatchConfig,yn=0,ze=null,Ke=null,Qe=null,Oa=!1,oo=!1,ao=0,Dw=0;function st(){throw Error(i(321))}function du(r,n){if(n===null)return!1;for(var a=0;a<n.length&&a<r.length;a++)if(!zt(r[a],n[a]))return!1;return!0}function fu(r,n,a,l,d,p){if(yn=p,ze=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Aa.current=r===null||r.memoizedState===null?Ow:Nw,r=a(l,d),oo){p=0;do{if(oo=!1,ao=0,25<=p)throw Error(i(301));p+=1,Qe=Ke=null,n.updateQueue=null,Aa.current=Lw,r=a(l,d)}while(oo)}if(Aa.current=Ma,n=Ke!==null&&Ke.next!==null,yn=0,Qe=Ke=ze=null,Oa=!1,n)throw Error(i(300));return r}function pu(){var r=ao!==0;return ao=0,r}function rr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ze.memoizedState=Qe=r:Qe=Qe.next=r,Qe}function Nt(){if(Ke===null){var r=ze.alternate;r=r!==null?r.memoizedState:null}else r=Ke.next;var n=Qe===null?ze.memoizedState:Qe.next;if(n!==null)Qe=n,Ke=r;else{if(r===null)throw Error(i(310));Ke=r,r={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},Qe===null?ze.memoizedState=Qe=r:Qe=Qe.next=r}return Qe}function so(r,n){return typeof n=="function"?n(r):n}function hu(r){var n=Nt(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var l=Ke,d=l.baseQueue,p=a.pending;if(p!==null){if(d!==null){var v=d.next;d.next=p.next,p.next=v}l.baseQueue=d=p,a.pending=null}if(d!==null){p=d.next,l=l.baseState;var b=v=null,E=null,A=p;do{var U=A.lane;if((yn&U)===U)E!==null&&(E=E.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),l=A.hasEagerState?A.eagerState:r(l,A.action);else{var $={lane:U,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};E===null?(b=E=$,v=l):E=E.next=$,ze.lanes|=U,wn|=U}A=A.next}while(A!==null&&A!==p);E===null?v=l:E.next=b,zt(l,n.memoizedState)||(vt=!0),n.memoizedState=l,n.baseState=v,n.baseQueue=E,a.lastRenderedState=l}if(r=a.interleaved,r!==null){d=r;do p=d.lane,ze.lanes|=p,wn|=p,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function gu(r){var n=Nt(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var l=a.dispatch,d=a.pending,p=n.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do p=r(p,v.action),v=v.next;while(v!==d);zt(p,n.memoizedState)||(vt=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),a.lastRenderedState=p}return[p,l]}function bp(){}function Ip(r,n){var a=ze,l=Nt(),d=n(),p=!zt(l.memoizedState,d);if(p&&(l.memoizedState=d,vt=!0),l=l.queue,mu(xp.bind(null,a,l,r),[r]),l.getSnapshot!==n||p||Qe!==null&&Qe.memoizedState.tag&1){if(a.flags|=2048,lo(9,Cp.bind(null,a,l,d,n),void 0,null),Je===null)throw Error(i(349));(yn&30)!==0||Ep(a,n,d)}return d}function Ep(r,n,a){r.flags|=16384,r={getSnapshot:n,value:a},n=ze.updateQueue,n===null?(n={lastEffect:null,stores:null},ze.updateQueue=n,n.stores=[r]):(a=n.stores,a===null?n.stores=[r]:a.push(r))}function Cp(r,n,a,l){n.value=a,n.getSnapshot=l,Pp(n)&&_p(r)}function xp(r,n,a){return a(function(){Pp(n)&&_p(r)})}function Pp(r){var n=r.getSnapshot;r=r.value;try{var a=n();return!zt(r,a)}catch{return!0}}function _p(r){var n=pr(r,1);n!==null&&qt(n,r,1,-1)}function kp(r){var n=rr();return typeof r=="function"&&(r=r()),n.memoizedState=n.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:r},n.queue=r,r=r.dispatch=Aw.bind(null,ze,r),[n.memoizedState,r]}function lo(r,n,a,l){return r={tag:r,create:n,destroy:a,deps:l,next:null},n=ze.updateQueue,n===null?(n={lastEffect:null,stores:null},ze.updateQueue=n,n.lastEffect=r.next=r):(a=n.lastEffect,a===null?n.lastEffect=r.next=r:(l=a.next,a.next=r,r.next=l,n.lastEffect=r)),r}function Dp(){return Nt().memoizedState}function Na(r,n,a,l){var d=rr();ze.flags|=r,d.memoizedState=lo(1|n,a,void 0,l===void 0?null:l)}function La(r,n,a,l){var d=Nt();l=l===void 0?null:l;var p=void 0;if(Ke!==null){var v=Ke.memoizedState;if(p=v.destroy,l!==null&&du(l,v.deps)){d.memoizedState=lo(n,a,p,l);return}}ze.flags|=r,d.memoizedState=lo(1|n,a,p,l)}function Tp(r,n){return Na(8390656,8,r,n)}function mu(r,n){return La(2048,8,r,n)}function Rp(r,n){return La(4,2,r,n)}function Ap(r,n){return La(4,4,r,n)}function Op(r,n){if(typeof n=="function")return r=r(),n(r),function(){n(null)};if(n!=null)return r=r(),n.current=r,function(){n.current=null}}function Np(r,n,a){return a=a!=null?a.concat([r]):null,La(4,4,Op.bind(null,n,r),a)}function vu(){}function Lp(r,n){var a=Nt();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&du(n,l[1])?l[0]:(a.memoizedState=[r,n],r)}function Mp(r,n){var a=Nt();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&du(n,l[1])?l[0]:(r=r(),a.memoizedState=[r,n],r)}function Bp(r,n,a){return(yn&21)===0?(r.baseState&&(r.baseState=!1,vt=!0),r.memoizedState=a):(zt(a,n)||(a=pf(),ze.lanes|=a,wn|=a,r.baseState=!0),n)}function Tw(r,n){var a=Te;Te=a!==0&&4>a?a:4,r(!0);var l=cu.transition;cu.transition={};try{r(!1),n()}finally{Te=a,cu.transition=l}}function Fp(){return Nt().memoizedState}function Rw(r,n,a){var l=zr(r);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},jp(r))Up(n,a);else if(a=mp(r,n,a,l),a!==null){var d=dt();qt(a,r,l,d),$p(a,n,l)}}function Aw(r,n,a){var l=zr(r),d={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(jp(r))Up(n,d);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var v=n.lastRenderedState,b=p(v,a);if(d.hasEagerState=!0,d.eagerState=b,zt(b,v)){var E=n.interleaved;E===null?(d.next=d,iu(n)):(d.next=E.next,E.next=d),n.interleaved=d;return}}catch{}finally{}a=mp(r,n,d,l),a!==null&&(d=dt(),qt(a,r,l,d),$p(a,n,l))}}function jp(r){var n=r.alternate;return r===ze||n!==null&&n===ze}function Up(r,n){oo=Oa=!0;var a=r.pending;a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n}function $p(r,n,a){if((a&4194240)!==0){var l=n.lanes;l&=r.pendingLanes,a|=l,n.lanes=a,wl(r,a)}}var Ma={readContext:Ot,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Ow={readContext:Ot,useCallback:function(r,n){return rr().memoizedState=[r,n===void 0?null:n],r},useContext:Ot,useEffect:Tp,useImperativeHandle:function(r,n,a){return a=a!=null?a.concat([r]):null,Na(4194308,4,Op.bind(null,n,r),a)},useLayoutEffect:function(r,n){return Na(4194308,4,r,n)},useInsertionEffect:function(r,n){return Na(4,2,r,n)},useMemo:function(r,n){var a=rr();return n=n===void 0?null:n,r=r(),a.memoizedState=[r,n],r},useReducer:function(r,n,a){var l=rr();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},l.queue=r,r=r.dispatch=Rw.bind(null,ze,r),[l.memoizedState,r]},useRef:function(r){var n=rr();return r={current:r},n.memoizedState=r},useState:kp,useDebugValue:vu,useDeferredValue:function(r){return rr().memoizedState=r},useTransition:function(){var r=kp(!1),n=r[0];return r=Tw.bind(null,r[1]),rr().memoizedState=r,[n,r]},useMutableSource:function(){},useSyncExternalStore:function(r,n,a){var l=ze,d=rr();if(Ue){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),Je===null)throw Error(i(349));(yn&30)!==0||Ep(l,n,a)}d.memoizedState=a;var p={value:a,getSnapshot:n};return d.queue=p,Tp(xp.bind(null,l,p,r),[r]),l.flags|=2048,lo(9,Cp.bind(null,l,p,a,n),void 0,null),a},useId:function(){var r=rr(),n=Je.identifierPrefix;if(Ue){var a=fr,l=dr;a=(l&~(1<<32-$t(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=ao++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=Dw++,n=":"+n+"r"+a.toString(32)+":";return r.memoizedState=n},unstable_isNewReconciler:!1},Nw={readContext:Ot,useCallback:Lp,useContext:Ot,useEffect:mu,useImperativeHandle:Np,useInsertionEffect:Rp,useLayoutEffect:Ap,useMemo:Mp,useReducer:hu,useRef:Dp,useState:function(){return hu(so)},useDebugValue:vu,useDeferredValue:function(r){var n=Nt();return Bp(n,Ke.memoizedState,r)},useTransition:function(){var r=hu(so)[0],n=Nt().memoizedState;return[r,n]},useMutableSource:bp,useSyncExternalStore:Ip,useId:Fp,unstable_isNewReconciler:!1},Lw={readContext:Ot,useCallback:Lp,useContext:Ot,useEffect:mu,useImperativeHandle:Np,useInsertionEffect:Rp,useLayoutEffect:Ap,useMemo:Mp,useReducer:gu,useRef:Dp,useState:function(){return gu(so)},useDebugValue:vu,useDeferredValue:function(r){var n=Nt();return Ke===null?n.memoizedState=r:Bp(n,Ke.memoizedState,r)},useTransition:function(){var r=gu(so)[0],n=Nt().memoizedState;return[r,n]},useMutableSource:bp,useSyncExternalStore:Ip,useId:Fp,unstable_isNewReconciler:!1};function Ht(r,n){if(r&&r.defaultProps){n=Y({},n),r=r.defaultProps;for(var a in r)n[a]===void 0&&(n[a]=r[a]);return n}return n}function yu(r,n,a,l){n=r.memoizedState,a=a(l,n),a=a==null?n:Y({},n,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Ba={isMounted:function(r){return(r=r._reactInternals)?dn(r)===r:!1},enqueueSetState:function(r,n,a){r=r._reactInternals;var l=dt(),d=zr(r),p=hr(l,d);p.payload=n,a!=null&&(p.callback=a),n=Fr(r,p,d),n!==null&&(qt(n,r,d,l),Da(n,r,d))},enqueueReplaceState:function(r,n,a){r=r._reactInternals;var l=dt(),d=zr(r),p=hr(l,d);p.tag=1,p.payload=n,a!=null&&(p.callback=a),n=Fr(r,p,d),n!==null&&(qt(n,r,d,l),Da(n,r,d))},enqueueForceUpdate:function(r,n){r=r._reactInternals;var a=dt(),l=zr(r),d=hr(a,l);d.tag=2,n!=null&&(d.callback=n),n=Fr(r,d,l),n!==null&&(qt(n,r,l,a),Da(n,r,l))}};function zp(r,n,a,l,d,p,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(l,p,v):n.prototype&&n.prototype.isPureReactComponent?!Ki(a,l)||!Ki(d,p):!0}function Wp(r,n,a){var l=!1,d=Lr,p=n.contextType;return typeof p=="object"&&p!==null?p=Ot(p):(d=mt(n)?pn:at.current,l=n.contextTypes,p=(l=l!=null)?Kn(r,d):Lr),n=new n(a,p),r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ba,r.stateNode=n,n._reactInternals=r,l&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=p),n}function Hp(r,n,a,l){r=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==r&&Ba.enqueueReplaceState(n,n.state,null)}function wu(r,n,a,l){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},ou(r);var p=n.contextType;typeof p=="object"&&p!==null?d.context=Ot(p):(p=mt(n)?pn:at.current,d.context=Kn(r,p)),d.state=r.memoizedState,p=n.getDerivedStateFromProps,typeof p=="function"&&(yu(r,n,p,a),d.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&Ba.enqueueReplaceState(d,d.state,null),Ta(r,a,d,l),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function ri(r,n){try{var a="",l=n;do a+=fe(l),l=l.return;while(l);var d=a}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:r,source:n,stack:d,digest:null}}function Su(r,n,a){return{value:r,source:null,stack:a??null,digest:n??null}}function bu(r,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Mw=typeof WeakMap=="function"?WeakMap:Map;function Vp(r,n,a){a=hr(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){Ha||(Ha=!0,Mu=l),bu(r,n)},a}function Gp(r,n,a){a=hr(-1,a),a.tag=3;var l=r.type.getDerivedStateFromError;if(typeof l=="function"){var d=n.value;a.payload=function(){return l(d)},a.callback=function(){bu(r,n)}}var p=r.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){bu(r,n),typeof l!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var v=n.stack;this.componentDidCatch(n.value,{componentStack:v!==null?v:""})}),a}function qp(r,n,a){var l=r.pingCache;if(l===null){l=r.pingCache=new Mw;var d=new Set;l.set(n,d)}else d=l.get(n),d===void 0&&(d=new Set,l.set(n,d));d.has(a)||(d.add(a),r=Qw.bind(null,r,n,a),n.then(r,r))}function Kp(r){do{var n;if((n=r.tag===13)&&(n=r.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return r;r=r.return}while(r!==null);return null}function Yp(r,n,a,l,d){return(r.mode&1)===0?(r===n?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=hr(-1,1),n.tag=2,Fr(a,n,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var Bw=M.ReactCurrentOwner,vt=!1;function ct(r,n,a,l){n.child=r===null?gp(n,null,a,l):Xn(n,r.child,a,l)}function Qp(r,n,a,l,d){a=a.render;var p=n.ref;return ei(n,d),l=fu(r,n,a,l,p,d),a=pu(),r!==null&&!vt?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~d,gr(r,n,d)):(Ue&&a&&Yl(n),n.flags|=1,ct(r,n,l,d),n.child)}function Jp(r,n,a,l,d){if(r===null){var p=a.type;return typeof p=="function"&&!Wu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=p,Xp(r,n,p,l,d)):(r=Qa(a.type,null,l,n,n.mode,d),r.ref=n.ref,r.return=n,n.child=r)}if(p=r.child,(r.lanes&d)===0){var v=p.memoizedProps;if(a=a.compare,a=a!==null?a:Ki,a(v,l)&&r.ref===n.ref)return gr(r,n,d)}return n.flags|=1,r=Hr(p,l),r.ref=n.ref,r.return=n,n.child=r}function Xp(r,n,a,l,d){if(r!==null){var p=r.memoizedProps;if(Ki(p,l)&&r.ref===n.ref)if(vt=!1,n.pendingProps=l=p,(r.lanes&d)!==0)(r.flags&131072)!==0&&(vt=!0);else return n.lanes=r.lanes,gr(r,n,d)}return Iu(r,n,a,l,d)}function Zp(r,n,a){var l=n.pendingProps,d=l.children,p=r!==null?r.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(ii,Pt),Pt|=a;else{if((a&1073741824)===0)return r=p!==null?p.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:r,cachePool:null,transitions:null},n.updateQueue=null,Ne(ii,Pt),Pt|=r,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Ne(ii,Pt),Pt|=l}else p!==null?(l=p.baseLanes|a,n.memoizedState=null):l=a,Ne(ii,Pt),Pt|=l;return ct(r,n,d,a),n.child}function eh(r,n){var a=n.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function Iu(r,n,a,l,d){var p=mt(a)?pn:at.current;return p=Kn(n,p),ei(n,d),a=fu(r,n,a,l,p,d),l=pu(),r!==null&&!vt?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~d,gr(r,n,d)):(Ue&&l&&Yl(n),n.flags|=1,ct(r,n,a,d),n.child)}function th(r,n,a,l,d){if(mt(a)){var p=!0;ba(n)}else p=!1;if(ei(n,d),n.stateNode===null)ja(r,n),Wp(n,a,l),wu(n,a,l,d),l=!0;else if(r===null){var v=n.stateNode,b=n.memoizedProps;v.props=b;var E=v.context,A=a.contextType;typeof A=="object"&&A!==null?A=Ot(A):(A=mt(a)?pn:at.current,A=Kn(n,A));var U=a.getDerivedStateFromProps,$=typeof U=="function"||typeof v.getSnapshotBeforeUpdate=="function";$||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(b!==l||E!==A)&&Hp(n,v,l,A),Br=!1;var j=n.memoizedState;v.state=j,Ta(n,l,v,d),E=n.memoizedState,b!==l||j!==E||gt.current||Br?(typeof U=="function"&&(yu(n,a,U,l),E=n.memoizedState),(b=Br||zp(n,a,b,l,j,E,A))?($||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(n.flags|=4194308)):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=E),v.props=l,v.state=E,v.context=A,l=b):(typeof v.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{v=n.stateNode,vp(r,n),b=n.memoizedProps,A=n.type===n.elementType?b:Ht(n.type,b),v.props=A,$=n.pendingProps,j=v.context,E=a.contextType,typeof E=="object"&&E!==null?E=Ot(E):(E=mt(a)?pn:at.current,E=Kn(n,E));var Q=a.getDerivedStateFromProps;(U=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(b!==$||j!==E)&&Hp(n,v,l,E),Br=!1,j=n.memoizedState,v.state=j,Ta(n,l,v,d);var Z=n.memoizedState;b!==$||j!==Z||gt.current||Br?(typeof Q=="function"&&(yu(n,a,Q,l),Z=n.memoizedState),(A=Br||zp(n,a,A,l,j,Z,E)||!1)?(U||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(l,Z,E),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(l,Z,E)),typeof v.componentDidUpdate=="function"&&(n.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof v.componentDidUpdate!="function"||b===r.memoizedProps&&j===r.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&j===r.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Z),v.props=l,v.state=Z,v.context=E,l=A):(typeof v.componentDidUpdate!="function"||b===r.memoizedProps&&j===r.memoizedState||(n.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||b===r.memoizedProps&&j===r.memoizedState||(n.flags|=1024),l=!1)}return Eu(r,n,a,l,p,d)}function Eu(r,n,a,l,d,p){eh(r,n);var v=(n.flags&128)!==0;if(!l&&!v)return d&&ap(n,a,!1),gr(r,n,p);l=n.stateNode,Bw.current=n;var b=v&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,r!==null&&v?(n.child=Xn(n,r.child,null,p),n.child=Xn(n,null,b,p)):ct(r,n,b,p),n.memoizedState=l.state,d&&ap(n,a,!0),n.child}function rh(r){var n=r.stateNode;n.pendingContext?ip(r,n.pendingContext,n.pendingContext!==n.context):n.context&&ip(r,n.context,!1),au(r,n.containerInfo)}function nh(r,n,a,l,d){return Jn(),Zl(d),n.flags|=256,ct(r,n,a,l),n.child}var Cu={dehydrated:null,treeContext:null,retryLane:0};function xu(r){return{baseLanes:r,cachePool:null,transitions:null}}function ih(r,n,a){var l=n.pendingProps,d=$e.current,p=!1,v=(n.flags&128)!==0,b;if((b=v)||(b=r!==null&&r.memoizedState===null?!1:(d&2)!==0),b?(p=!0,n.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Ne($e,d&1),r===null)return Xl(n),r=n.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((n.mode&1)===0?n.lanes=1:r.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(v=l.children,r=l.fallback,p?(l=n.mode,p=n.child,v={mode:"hidden",children:v},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=Ja(v,l,0,null),r=En(r,l,a,null),p.return=n,r.return=n,p.sibling=r,n.child=p,n.child.memoizedState=xu(a),n.memoizedState=Cu,r):Pu(n,v));if(d=r.memoizedState,d!==null&&(b=d.dehydrated,b!==null))return Fw(r,n,v,l,b,d,a);if(p){p=l.fallback,v=n.mode,d=r.child,b=d.sibling;var E={mode:"hidden",children:l.children};return(v&1)===0&&n.child!==d?(l=n.child,l.childLanes=0,l.pendingProps=E,n.deletions=null):(l=Hr(d,E),l.subtreeFlags=d.subtreeFlags&14680064),b!==null?p=Hr(b,p):(p=En(p,v,a,null),p.flags|=2),p.return=n,l.return=n,l.sibling=p,n.child=l,l=p,p=n.child,v=r.child.memoizedState,v=v===null?xu(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=r.childLanes&~a,n.memoizedState=Cu,l}return p=r.child,r=p.sibling,l=Hr(p,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=a),l.return=n,l.sibling=null,r!==null&&(a=n.deletions,a===null?(n.deletions=[r],n.flags|=16):a.push(r)),n.child=l,n.memoizedState=null,l}function Pu(r,n){return n=Ja({mode:"visible",children:n},r.mode,0,null),n.return=r,r.child=n}function Fa(r,n,a,l){return l!==null&&Zl(l),Xn(n,r.child,null,a),r=Pu(n,n.pendingProps.children),r.flags|=2,n.memoizedState=null,r}function Fw(r,n,a,l,d,p,v){if(a)return n.flags&256?(n.flags&=-257,l=Su(Error(i(422))),Fa(r,n,v,l)):n.memoizedState!==null?(n.child=r.child,n.flags|=128,null):(p=l.fallback,d=n.mode,l=Ja({mode:"visible",children:l.children},d,0,null),p=En(p,d,v,null),p.flags|=2,l.return=n,p.return=n,l.sibling=p,n.child=l,(n.mode&1)!==0&&Xn(n,r.child,null,v),n.child.memoizedState=xu(v),n.memoizedState=Cu,p);if((n.mode&1)===0)return Fa(r,n,v,null);if(d.data==="$!"){if(l=d.nextSibling&&d.nextSibling.dataset,l)var b=l.dgst;return l=b,p=Error(i(419)),l=Su(p,l,void 0),Fa(r,n,v,l)}if(b=(v&r.childLanes)!==0,vt||b){if(l=Je,l!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(l.suspendedLanes|v))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,pr(r,d),qt(l,r,d,-1))}return zu(),l=Su(Error(i(421))),Fa(r,n,v,l)}return d.data==="$?"?(n.flags|=128,n.child=r.child,n=Jw.bind(null,r),d._reactRetry=n,null):(r=p.treeContext,xt=Or(d.nextSibling),Ct=n,Ue=!0,Wt=null,r!==null&&(Rt[At++]=dr,Rt[At++]=fr,Rt[At++]=hn,dr=r.id,fr=r.overflow,hn=n),n=Pu(n,l.children),n.flags|=4096,n)}function oh(r,n,a){r.lanes|=n;var l=r.alternate;l!==null&&(l.lanes|=n),nu(r.return,n,a)}function _u(r,n,a,l,d){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:d}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=d)}function ah(r,n,a){var l=n.pendingProps,d=l.revealOrder,p=l.tail;if(ct(r,n,l.children,a),l=$e.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=n.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&oh(r,a,n);else if(r.tag===19)oh(r,a,n);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}l&=1}if(Ne($e,l),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(a=n.child,d=null;a!==null;)r=a.alternate,r!==null&&Ra(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=n.child,n.child=null):(d=a.sibling,a.sibling=null),_u(n,!1,d,a,p);break;case"backwards":for(a=null,d=n.child,n.child=null;d!==null;){if(r=d.alternate,r!==null&&Ra(r)===null){n.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}_u(n,!0,a,null,p);break;case"together":_u(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ja(r,n){(n.mode&1)===0&&r!==null&&(r.alternate=null,n.alternate=null,n.flags|=2)}function gr(r,n,a){if(r!==null&&(n.dependencies=r.dependencies),wn|=n.lanes,(a&n.childLanes)===0)return null;if(r!==null&&n.child!==r.child)throw Error(i(153));if(n.child!==null){for(r=n.child,a=Hr(r,r.pendingProps),n.child=a,a.return=n;r.sibling!==null;)r=r.sibling,a=a.sibling=Hr(r,r.pendingProps),a.return=n;a.sibling=null}return n.child}function jw(r,n,a){switch(n.tag){case 3:rh(n),Jn();break;case 5:Sp(n);break;case 1:mt(n.type)&&ba(n);break;case 4:au(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,d=n.memoizedProps.value;Ne(_a,l._currentValue),l._currentValue=d;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Ne($e,$e.current&1),n.flags|=128,null):(a&n.child.childLanes)!==0?ih(r,n,a):(Ne($e,$e.current&1),r=gr(r,n,a),r!==null?r.sibling:null);Ne($e,$e.current&1);break;case 19:if(l=(a&n.childLanes)!==0,(r.flags&128)!==0){if(l)return ah(r,n,a);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ne($e,$e.current),l)break;return null;case 22:case 23:return n.lanes=0,Zp(r,n,a)}return gr(r,n,a)}var sh,ku,lh,uh;sh=function(r,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ku=function(){},lh=function(r,n,a,l){var d=r.memoizedProps;if(d!==l){r=n.stateNode,vn(tr.current);var p=null;switch(a){case"input":d=Pr(r,d),l=Pr(r,l),p=[];break;case"select":d=Y({},d,{value:void 0}),l=Y({},l,{value:void 0}),p=[];break;case"textarea":d=al(r,d),l=al(r,l),p=[];break;default:typeof d.onClick!="function"&&typeof l.onClick=="function"&&(r.onclick=ya)}ll(a,l);var v;a=null;for(A in d)if(!l.hasOwnProperty(A)&&d.hasOwnProperty(A)&&d[A]!=null)if(A==="style"){var b=d[A];for(v in b)b.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(s.hasOwnProperty(A)?p||(p=[]):(p=p||[]).push(A,null));for(A in l){var E=l[A];if(b=d!=null?d[A]:void 0,l.hasOwnProperty(A)&&E!==b&&(E!=null||b!=null))if(A==="style")if(b){for(v in b)!b.hasOwnProperty(v)||E&&E.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in E)E.hasOwnProperty(v)&&b[v]!==E[v]&&(a||(a={}),a[v]=E[v])}else a||(p||(p=[]),p.push(A,a)),a=E;else A==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,b=b?b.__html:void 0,E!=null&&b!==E&&(p=p||[]).push(A,E)):A==="children"?typeof E!="string"&&typeof E!="number"||(p=p||[]).push(A,""+E):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(s.hasOwnProperty(A)?(E!=null&&A==="onScroll"&&Me("scroll",r),p||b===E||(p=[])):(p=p||[]).push(A,E))}a&&(p=p||[]).push("style",a);var A=p;(n.updateQueue=A)&&(n.flags|=4)}},uh=function(r,n,a,l){a!==l&&(n.flags|=4)};function uo(r,n){if(!Ue)switch(r.tailMode){case"hidden":n=r.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function lt(r){var n=r.alternate!==null&&r.alternate.child===r.child,a=0,l=0;if(n)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags&14680064,l|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,l|=d.subtreeFlags,l|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=l,r.childLanes=a,n}function Uw(r,n,a){var l=n.pendingProps;switch(Ql(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(n),null;case 1:return mt(n.type)&&Sa(),lt(n),null;case 3:return l=n.stateNode,ti(),Be(gt),Be(at),uu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(r===null||r.child===null)&&(xa(n)?n.flags|=4:r===null||r.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wt!==null&&(ju(Wt),Wt=null))),ku(r,n),lt(n),null;case 5:su(n);var d=vn(io.current);if(a=n.type,r!==null&&n.stateNode!=null)lh(r,n,a,l,d),r.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return lt(n),null}if(r=vn(tr.current),xa(n)){l=n.stateNode,a=n.type;var p=n.memoizedProps;switch(l[er]=n,l[Zi]=p,r=(n.mode&1)!==0,a){case"dialog":Me("cancel",l),Me("close",l);break;case"iframe":case"object":case"embed":Me("load",l);break;case"video":case"audio":for(d=0;d<Qi.length;d++)Me(Qi[d],l);break;case"source":Me("error",l);break;case"img":case"image":case"link":Me("error",l),Me("load",l);break;case"details":Me("toggle",l);break;case"input":Ti(l,p),Me("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Me("invalid",l);break;case"textarea":Vd(l,p),Me("invalid",l)}ll(a,p),d=null;for(var v in p)if(p.hasOwnProperty(v)){var b=p[v];v==="children"?typeof b=="string"?l.textContent!==b&&(p.suppressHydrationWarning!==!0&&va(l.textContent,b,r),d=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(p.suppressHydrationWarning!==!0&&va(l.textContent,b,r),d=["children",""+b]):s.hasOwnProperty(v)&&b!=null&&v==="onScroll"&&Me("scroll",l)}switch(a){case"input":It(l),Yo(l,p,!0);break;case"textarea":It(l),qd(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=ya)}l=d,n.updateQueue=l,l!==null&&(n.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Kd(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof l.is=="string"?r=v.createElement(a,{is:l.is}):(r=v.createElement(a),a==="select"&&(v=r,l.multiple?v.multiple=!0:l.size&&(v.size=l.size))):r=v.createElementNS(r,a),r[er]=n,r[Zi]=l,sh(r,n,!1,!1),n.stateNode=r;e:{switch(v=ul(a,l),a){case"dialog":Me("cancel",r),Me("close",r),d=l;break;case"iframe":case"object":case"embed":Me("load",r),d=l;break;case"video":case"audio":for(d=0;d<Qi.length;d++)Me(Qi[d],r);d=l;break;case"source":Me("error",r),d=l;break;case"img":case"image":case"link":Me("error",r),Me("load",r),d=l;break;case"details":Me("toggle",r),d=l;break;case"input":Ti(r,l),d=Pr(r,l),Me("invalid",r);break;case"option":d=l;break;case"select":r._wrapperState={wasMultiple:!!l.multiple},d=Y({},l,{value:void 0}),Me("invalid",r);break;case"textarea":Vd(r,l),d=al(r,l),Me("invalid",r);break;default:d=l}ll(a,d),b=d;for(p in b)if(b.hasOwnProperty(p)){var E=b[p];p==="style"?Jd(r,E):p==="dangerouslySetInnerHTML"?(E=E?E.__html:void 0,E!=null&&Yd(r,E)):p==="children"?typeof E=="string"?(a!=="textarea"||E!=="")&&Ri(r,E):typeof E=="number"&&Ri(r,""+E):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(s.hasOwnProperty(p)?E!=null&&p==="onScroll"&&Me("scroll",r):E!=null&&L(r,p,E,v))}switch(a){case"input":It(r),Yo(r,l,!1);break;case"textarea":It(r),qd(r);break;case"option":l.value!=null&&r.setAttribute("value",""+ge(l.value));break;case"select":r.multiple=!!l.multiple,p=l.value,p!=null?Mn(r,!!l.multiple,p,!1):l.defaultValue!=null&&Mn(r,!!l.multiple,l.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ya)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return lt(n),null;case 6:if(r&&n.stateNode!=null)uh(r,n,r.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(a=vn(io.current),vn(tr.current),xa(n)){if(l=n.stateNode,a=n.memoizedProps,l[er]=n,(p=l.nodeValue!==a)&&(r=Ct,r!==null))switch(r.tag){case 3:va(l.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&va(l.nodeValue,a,(r.mode&1)!==0)}p&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[er]=n,n.stateNode=l}return lt(n),null;case 13:if(Be($e),l=n.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ue&&xt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)fp(),Jn(),n.flags|=98560,p=!1;else if(p=xa(n),l!==null&&l.dehydrated!==null){if(r===null){if(!p)throw Error(i(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[er]=n}else Jn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;lt(n),p=!1}else Wt!==null&&(ju(Wt),Wt=null),p=!0;if(!p)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=a,n):(l=l!==null,l!==(r!==null&&r.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(r===null||($e.current&1)!==0?Ye===0&&(Ye=3):zu())),n.updateQueue!==null&&(n.flags|=4),lt(n),null);case 4:return ti(),ku(r,n),r===null&&Ji(n.stateNode.containerInfo),lt(n),null;case 10:return ru(n.type._context),lt(n),null;case 17:return mt(n.type)&&Sa(),lt(n),null;case 19:if(Be($e),p=n.memoizedState,p===null)return lt(n),null;if(l=(n.flags&128)!==0,v=p.rendering,v===null)if(l)uo(p,!1);else{if(Ye!==0||r!==null&&(r.flags&128)!==0)for(r=n.child;r!==null;){if(v=Ra(r),v!==null){for(n.flags|=128,uo(p,!1),l=v.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)p=a,r=l,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=r,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,r=v.dependencies,p.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Ne($e,$e.current&1|2),n.child}r=r.sibling}p.tail!==null&&He()>oi&&(n.flags|=128,l=!0,uo(p,!1),n.lanes=4194304)}else{if(!l)if(r=Ra(v),r!==null){if(n.flags|=128,l=!0,a=r.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),uo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Ue)return lt(n),null}else 2*He()-p.renderingStartTime>oi&&a!==1073741824&&(n.flags|=128,l=!0,uo(p,!1),n.lanes=4194304);p.isBackwards?(v.sibling=n.child,n.child=v):(a=p.last,a!==null?a.sibling=v:n.child=v,p.last=v)}return p.tail!==null?(n=p.tail,p.rendering=n,p.tail=n.sibling,p.renderingStartTime=He(),n.sibling=null,a=$e.current,Ne($e,l?a&1|2:a&1),n):(lt(n),null);case 22:case 23:return $u(),l=n.memoizedState!==null,r!==null&&r.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(Pt&1073741824)!==0&&(lt(n),n.subtreeFlags&6&&(n.flags|=8192)):lt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function $w(r,n){switch(Ql(n),n.tag){case 1:return mt(n.type)&&Sa(),r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 3:return ti(),Be(gt),Be(at),uu(),r=n.flags,(r&65536)!==0&&(r&128)===0?(n.flags=r&-65537|128,n):null;case 5:return su(n),null;case 13:if(Be($e),r=n.memoizedState,r!==null&&r.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Jn()}return r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 19:return Be($e),null;case 4:return ti(),null;case 10:return ru(n.type._context),null;case 22:case 23:return $u(),null;case 24:return null;default:return null}}var Ua=!1,ut=!1,zw=typeof WeakSet=="function"?WeakSet:Set,X=null;function ni(r,n){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){We(r,n,l)}else a.current=null}function Du(r,n,a){try{a()}catch(l){We(r,n,l)}}var ch=!1;function Ww(r,n){if($l=aa,r=zf(),Ol(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var d=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var v=0,b=-1,E=-1,A=0,U=0,$=r,j=null;t:for(;;){for(var Q;$!==a||d!==0&&$.nodeType!==3||(b=v+d),$!==p||l!==0&&$.nodeType!==3||(E=v+l),$.nodeType===3&&(v+=$.nodeValue.length),(Q=$.firstChild)!==null;)j=$,$=Q;for(;;){if($===r)break t;if(j===a&&++A===d&&(b=v),j===p&&++U===l&&(E=v),(Q=$.nextSibling)!==null)break;$=j,j=$.parentNode}$=Q}a=b===-1||E===-1?null:{start:b,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(zl={focusedElem:r,selectionRange:a},aa=!1,X=n;X!==null;)if(n=X,r=n.child,(n.subtreeFlags&1028)!==0&&r!==null)r.return=n,X=r;else for(;X!==null;){n=X;try{var Z=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var ee=Z.memoizedProps,Ve=Z.memoizedState,_=n.stateNode,C=_.getSnapshotBeforeUpdate(n.elementType===n.type?ee:Ht(n.type,ee),Ve);_.__reactInternalSnapshotBeforeUpdate=C}break;case 3:var D=n.stateNode.containerInfo;D.nodeType===1?D.textContent="":D.nodeType===9&&D.documentElement&&D.removeChild(D.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(W){We(n,n.return,W)}if(r=n.sibling,r!==null){r.return=n.return,X=r;break}X=n.return}return Z=ch,ch=!1,Z}function co(r,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var d=l=l.next;do{if((d.tag&r)===r){var p=d.destroy;d.destroy=void 0,p!==void 0&&Du(n,a,p)}d=d.next}while(d!==l)}}function $a(r,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&r)===r){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function Tu(r){var n=r.ref;if(n!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof n=="function"?n(r):n.current=r}}function dh(r){var n=r.alternate;n!==null&&(r.alternate=null,dh(n)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(n=r.stateNode,n!==null&&(delete n[er],delete n[Zi],delete n[Gl],delete n[xw],delete n[Pw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function fh(r){return r.tag===5||r.tag===3||r.tag===4}function ph(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||fh(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Ru(r,n,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(r,n):a.insertBefore(r,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(r,a)):(n=a,n.appendChild(r)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ya));else if(l!==4&&(r=r.child,r!==null))for(Ru(r,n,a),r=r.sibling;r!==null;)Ru(r,n,a),r=r.sibling}function Au(r,n,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,n?a.insertBefore(r,n):a.appendChild(r);else if(l!==4&&(r=r.child,r!==null))for(Au(r,n,a),r=r.sibling;r!==null;)Au(r,n,a),r=r.sibling}var nt=null,Vt=!1;function jr(r,n,a){for(a=a.child;a!==null;)hh(r,n,a),a=a.sibling}function hh(r,n,a){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(ea,a)}catch{}switch(a.tag){case 5:ut||ni(a,n);case 6:var l=nt,d=Vt;nt=null,jr(r,n,a),nt=l,Vt=d,nt!==null&&(Vt?(r=nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):nt.removeChild(a.stateNode));break;case 18:nt!==null&&(Vt?(r=nt,a=a.stateNode,r.nodeType===8?Vl(r.parentNode,a):r.nodeType===1&&Vl(r,a),zi(r)):Vl(nt,a.stateNode));break;case 4:l=nt,d=Vt,nt=a.stateNode.containerInfo,Vt=!0,jr(r,n,a),nt=l,Vt=d;break;case 0:case 11:case 14:case 15:if(!ut&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){d=l=l.next;do{var p=d,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Du(a,n,v),d=d.next}while(d!==l)}jr(r,n,a);break;case 1:if(!ut&&(ni(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(b){We(a,n,b)}jr(r,n,a);break;case 21:jr(r,n,a);break;case 22:a.mode&1?(ut=(l=ut)||a.memoizedState!==null,jr(r,n,a),ut=l):jr(r,n,a);break;default:jr(r,n,a)}}function gh(r){var n=r.updateQueue;if(n!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new zw),n.forEach(function(l){var d=Xw.bind(null,r,l);a.has(l)||(a.add(l),l.then(d,d))})}}function Gt(r,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var d=a[l];try{var p=r,v=n,b=v;e:for(;b!==null;){switch(b.tag){case 5:nt=b.stateNode,Vt=!1;break e;case 3:nt=b.stateNode.containerInfo,Vt=!0;break e;case 4:nt=b.stateNode.containerInfo,Vt=!0;break e}b=b.return}if(nt===null)throw Error(i(160));hh(p,v,d),nt=null,Vt=!1;var E=d.alternate;E!==null&&(E.return=null),d.return=null}catch(A){We(d,n,A)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mh(n,r),n=n.sibling}function mh(r,n){var a=r.alternate,l=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Gt(n,r),nr(r),l&4){try{co(3,r,r.return),$a(3,r)}catch(ee){We(r,r.return,ee)}try{co(5,r,r.return)}catch(ee){We(r,r.return,ee)}}break;case 1:Gt(n,r),nr(r),l&512&&a!==null&&ni(a,a.return);break;case 5:if(Gt(n,r),nr(r),l&512&&a!==null&&ni(a,a.return),r.flags&32){var d=r.stateNode;try{Ri(d,"")}catch(ee){We(r,r.return,ee)}}if(l&4&&(d=r.stateNode,d!=null)){var p=r.memoizedProps,v=a!==null?a.memoizedProps:p,b=r.type,E=r.updateQueue;if(r.updateQueue=null,E!==null)try{b==="input"&&p.type==="radio"&&p.name!=null&&Ln(d,p),ul(b,v);var A=ul(b,p);for(v=0;v<E.length;v+=2){var U=E[v],$=E[v+1];U==="style"?Jd(d,$):U==="dangerouslySetInnerHTML"?Yd(d,$):U==="children"?Ri(d,$):L(d,U,$,A)}switch(b){case"input":cn(d,p);break;case"textarea":Gd(d,p);break;case"select":var j=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Q=p.value;Q!=null?Mn(d,!!p.multiple,Q,!1):j!==!!p.multiple&&(p.defaultValue!=null?Mn(d,!!p.multiple,p.defaultValue,!0):Mn(d,!!p.multiple,p.multiple?[]:"",!1))}d[Zi]=p}catch(ee){We(r,r.return,ee)}}break;case 6:if(Gt(n,r),nr(r),l&4){if(r.stateNode===null)throw Error(i(162));d=r.stateNode,p=r.memoizedProps;try{d.nodeValue=p}catch(ee){We(r,r.return,ee)}}break;case 3:if(Gt(n,r),nr(r),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zi(n.containerInfo)}catch(ee){We(r,r.return,ee)}break;case 4:Gt(n,r),nr(r);break;case 13:Gt(n,r),nr(r),d=r.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Lu=He())),l&4&&gh(r);break;case 22:if(U=a!==null&&a.memoizedState!==null,r.mode&1?(ut=(A=ut)||U,Gt(n,r),ut=A):Gt(n,r),nr(r),l&8192){if(A=r.memoizedState!==null,(r.stateNode.isHidden=A)&&!U&&(r.mode&1)!==0)for(X=r,U=r.child;U!==null;){for($=X=U;X!==null;){switch(j=X,Q=j.child,j.tag){case 0:case 11:case 14:case 15:co(4,j,j.return);break;case 1:ni(j,j.return);var Z=j.stateNode;if(typeof Z.componentWillUnmount=="function"){l=j,a=j.return;try{n=l,Z.props=n.memoizedProps,Z.state=n.memoizedState,Z.componentWillUnmount()}catch(ee){We(l,a,ee)}}break;case 5:ni(j,j.return);break;case 22:if(j.memoizedState!==null){wh($);continue}}Q!==null?(Q.return=j,X=Q):wh($)}U=U.sibling}e:for(U=null,$=r;;){if($.tag===5){if(U===null){U=$;try{d=$.stateNode,A?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(b=$.stateNode,E=$.memoizedProps.style,v=E!=null&&E.hasOwnProperty("display")?E.display:null,b.style.display=Qd("display",v))}catch(ee){We(r,r.return,ee)}}}else if($.tag===6){if(U===null)try{$.stateNode.nodeValue=A?"":$.memoizedProps}catch(ee){We(r,r.return,ee)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===r)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===r)break e;for(;$.sibling===null;){if($.return===null||$.return===r)break e;U===$&&(U=null),$=$.return}U===$&&(U=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:Gt(n,r),nr(r),l&4&&gh(r);break;case 21:break;default:Gt(n,r),nr(r)}}function nr(r){var n=r.flags;if(n&2){try{e:{for(var a=r.return;a!==null;){if(fh(a)){var l=a;break e}a=a.return}throw Error(i(160))}switch(l.tag){case 5:var d=l.stateNode;l.flags&32&&(Ri(d,""),l.flags&=-33);var p=ph(r);Au(r,p,d);break;case 3:case 4:var v=l.stateNode.containerInfo,b=ph(r);Ru(r,b,v);break;default:throw Error(i(161))}}catch(E){We(r,r.return,E)}r.flags&=-3}n&4096&&(r.flags&=-4097)}function Hw(r,n,a){X=r,vh(r)}function vh(r,n,a){for(var l=(r.mode&1)!==0;X!==null;){var d=X,p=d.child;if(d.tag===22&&l){var v=d.memoizedState!==null||Ua;if(!v){var b=d.alternate,E=b!==null&&b.memoizedState!==null||ut;b=Ua;var A=ut;if(Ua=v,(ut=E)&&!A)for(X=d;X!==null;)v=X,E=v.child,v.tag===22&&v.memoizedState!==null?Sh(d):E!==null?(E.return=v,X=E):Sh(d);for(;p!==null;)X=p,vh(p),p=p.sibling;X=d,Ua=b,ut=A}yh(r)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,X=p):yh(r)}}function yh(r){for(;X!==null;){var n=X;if((n.flags&8772)!==0){var a=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:ut||$a(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!ut)if(a===null)l.componentDidMount();else{var d=n.elementType===n.type?a.memoizedProps:Ht(n.type,a.memoizedProps);l.componentDidUpdate(d,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=n.updateQueue;p!==null&&wp(n,p,l);break;case 3:var v=n.updateQueue;if(v!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}wp(n,v,a)}break;case 5:var b=n.stateNode;if(a===null&&n.flags&4){a=b;var E=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":E.autoFocus&&a.focus();break;case"img":E.src&&(a.src=E.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var A=n.alternate;if(A!==null){var U=A.memoizedState;if(U!==null){var $=U.dehydrated;$!==null&&zi($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}ut||n.flags&512&&Tu(n)}catch(j){We(n,n.return,j)}}if(n===r){X=null;break}if(a=n.sibling,a!==null){a.return=n.return,X=a;break}X=n.return}}function wh(r){for(;X!==null;){var n=X;if(n===r){X=null;break}var a=n.sibling;if(a!==null){a.return=n.return,X=a;break}X=n.return}}function Sh(r){for(;X!==null;){var n=X;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{$a(4,n)}catch(E){We(n,a,E)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var d=n.return;try{l.componentDidMount()}catch(E){We(n,d,E)}}var p=n.return;try{Tu(n)}catch(E){We(n,p,E)}break;case 5:var v=n.return;try{Tu(n)}catch(E){We(n,v,E)}}}catch(E){We(n,n.return,E)}if(n===r){X=null;break}var b=n.sibling;if(b!==null){b.return=n.return,X=b;break}X=n.return}}var Vw=Math.ceil,za=M.ReactCurrentDispatcher,Ou=M.ReactCurrentOwner,Lt=M.ReactCurrentBatchConfig,Ce=0,Je=null,Ge=null,it=0,Pt=0,ii=Nr(0),Ye=0,fo=null,wn=0,Wa=0,Nu=0,po=null,yt=null,Lu=0,oi=1/0,mr=null,Ha=!1,Mu=null,Ur=null,Va=!1,$r=null,Ga=0,ho=0,Bu=null,qa=-1,Ka=0;function dt(){return(Ce&6)!==0?He():qa!==-1?qa:qa=He()}function zr(r){return(r.mode&1)===0?1:(Ce&2)!==0&&it!==0?it&-it:kw.transition!==null?(Ka===0&&(Ka=pf()),Ka):(r=Te,r!==0||(r=window.event,r=r===void 0?16:If(r.type)),r)}function qt(r,n,a,l){if(50<ho)throw ho=0,Bu=null,Error(i(185));Bi(r,a,l),((Ce&2)===0||r!==Je)&&(r===Je&&((Ce&2)===0&&(Wa|=a),Ye===4&&Wr(r,it)),wt(r,l),a===1&&Ce===0&&(n.mode&1)===0&&(oi=He()+500,Ia&&Mr()))}function wt(r,n){var a=r.callbackNode;k0(r,n);var l=na(r,r===Je?it:0);if(l===0)a!==null&&cf(a),r.callbackNode=null,r.callbackPriority=0;else if(n=l&-l,r.callbackPriority!==n){if(a!=null&&cf(a),n===1)r.tag===0?_w(Ih.bind(null,r)):sp(Ih.bind(null,r)),Ew(function(){(Ce&6)===0&&Mr()}),a=null;else{switch(hf(l)){case 1:a=ml;break;case 4:a=df;break;case 16:a=Zo;break;case 536870912:a=ff;break;default:a=Zo}a=Th(a,bh.bind(null,r))}r.callbackPriority=n,r.callbackNode=a}}function bh(r,n){if(qa=-1,Ka=0,(Ce&6)!==0)throw Error(i(327));var a=r.callbackNode;if(ai()&&r.callbackNode!==a)return null;var l=na(r,r===Je?it:0);if(l===0)return null;if((l&30)!==0||(l&r.expiredLanes)!==0||n)n=Ya(r,l);else{n=l;var d=Ce;Ce|=2;var p=Ch();(Je!==r||it!==n)&&(mr=null,oi=He()+500,bn(r,n));do try{Kw();break}catch(b){Eh(r,b)}while(!0);tu(),za.current=p,Ce=d,Ge!==null?n=0:(Je=null,it=0,n=Ye)}if(n!==0){if(n===2&&(d=vl(r),d!==0&&(l=d,n=Fu(r,d))),n===1)throw a=fo,bn(r,0),Wr(r,l),wt(r,He()),a;if(n===6)Wr(r,l);else{if(d=r.current.alternate,(l&30)===0&&!Gw(d)&&(n=Ya(r,l),n===2&&(p=vl(r),p!==0&&(l=p,n=Fu(r,p))),n===1))throw a=fo,bn(r,0),Wr(r,l),wt(r,He()),a;switch(r.finishedWork=d,r.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:In(r,yt,mr);break;case 3:if(Wr(r,l),(l&130023424)===l&&(n=Lu+500-He(),10<n)){if(na(r,0)!==0)break;if(d=r.suspendedLanes,(d&l)!==l){dt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Hl(In.bind(null,r,yt,mr),n);break}In(r,yt,mr);break;case 4:if(Wr(r,l),(l&4194240)===l)break;for(n=r.eventTimes,d=-1;0<l;){var v=31-$t(l);p=1<<v,v=n[v],v>d&&(d=v),l&=~p}if(l=d,l=He()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*Vw(l/1960))-l,10<l){r.timeoutHandle=Hl(In.bind(null,r,yt,mr),l);break}In(r,yt,mr);break;case 5:In(r,yt,mr);break;default:throw Error(i(329))}}}return wt(r,He()),r.callbackNode===a?bh.bind(null,r):null}function Fu(r,n){var a=po;return r.current.memoizedState.isDehydrated&&(bn(r,n).flags|=256),r=Ya(r,n),r!==2&&(n=yt,yt=a,n!==null&&ju(n)),r}function ju(r){yt===null?yt=r:yt.push.apply(yt,r)}function Gw(r){for(var n=r;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var d=a[l],p=d.getSnapshot;d=d.value;try{if(!zt(p(),d))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wr(r,n){for(n&=~Nu,n&=~Wa,r.suspendedLanes|=n,r.pingedLanes&=~n,r=r.expirationTimes;0<n;){var a=31-$t(n),l=1<<a;r[a]=-1,n&=~l}}function Ih(r){if((Ce&6)!==0)throw Error(i(327));ai();var n=na(r,0);if((n&1)===0)return wt(r,He()),null;var a=Ya(r,n);if(r.tag!==0&&a===2){var l=vl(r);l!==0&&(n=l,a=Fu(r,l))}if(a===1)throw a=fo,bn(r,0),Wr(r,n),wt(r,He()),a;if(a===6)throw Error(i(345));return r.finishedWork=r.current.alternate,r.finishedLanes=n,In(r,yt,mr),wt(r,He()),null}function Uu(r,n){var a=Ce;Ce|=1;try{return r(n)}finally{Ce=a,Ce===0&&(oi=He()+500,Ia&&Mr())}}function Sn(r){$r!==null&&$r.tag===0&&(Ce&6)===0&&ai();var n=Ce;Ce|=1;var a=Lt.transition,l=Te;try{if(Lt.transition=null,Te=1,r)return r()}finally{Te=l,Lt.transition=a,Ce=n,(Ce&6)===0&&Mr()}}function $u(){Pt=ii.current,Be(ii)}function bn(r,n){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Iw(a)),Ge!==null)for(a=Ge.return;a!==null;){var l=a;switch(Ql(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Sa();break;case 3:ti(),Be(gt),Be(at),uu();break;case 5:su(l);break;case 4:ti();break;case 13:Be($e);break;case 19:Be($e);break;case 10:ru(l.type._context);break;case 22:case 23:$u()}a=a.return}if(Je=r,Ge=r=Hr(r.current,null),it=Pt=n,Ye=0,fo=null,Nu=Wa=wn=0,yt=po=null,mn!==null){for(n=0;n<mn.length;n++)if(a=mn[n],l=a.interleaved,l!==null){a.interleaved=null;var d=l.next,p=a.pending;if(p!==null){var v=p.next;p.next=d,l.next=v}a.pending=l}mn=null}return r}function Eh(r,n){do{var a=Ge;try{if(tu(),Aa.current=Ma,Oa){for(var l=ze.memoizedState;l!==null;){var d=l.queue;d!==null&&(d.pending=null),l=l.next}Oa=!1}if(yn=0,Qe=Ke=ze=null,oo=!1,ao=0,Ou.current=null,a===null||a.return===null){Ye=1,fo=n,Ge=null;break}e:{var p=r,v=a.return,b=a,E=n;if(n=it,b.flags|=32768,E!==null&&typeof E=="object"&&typeof E.then=="function"){var A=E,U=b,$=U.tag;if((U.mode&1)===0&&($===0||$===11||$===15)){var j=U.alternate;j?(U.updateQueue=j.updateQueue,U.memoizedState=j.memoizedState,U.lanes=j.lanes):(U.updateQueue=null,U.memoizedState=null)}var Q=Kp(v);if(Q!==null){Q.flags&=-257,Yp(Q,v,b,p,n),Q.mode&1&&qp(p,A,n),n=Q,E=A;var Z=n.updateQueue;if(Z===null){var ee=new Set;ee.add(E),n.updateQueue=ee}else Z.add(E);break e}else{if((n&1)===0){qp(p,A,n),zu();break e}E=Error(i(426))}}else if(Ue&&b.mode&1){var Ve=Kp(v);if(Ve!==null){(Ve.flags&65536)===0&&(Ve.flags|=256),Yp(Ve,v,b,p,n),Zl(ri(E,b));break e}}p=E=ri(E,b),Ye!==4&&(Ye=2),po===null?po=[p]:po.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,n&=-n,p.lanes|=n;var _=Vp(p,E,n);yp(p,_);break e;case 1:b=E;var C=p.type,D=p.stateNode;if((p.flags&128)===0&&(typeof C.getDerivedStateFromError=="function"||D!==null&&typeof D.componentDidCatch=="function"&&(Ur===null||!Ur.has(D)))){p.flags|=65536,n&=-n,p.lanes|=n;var W=Gp(p,b,n);yp(p,W);break e}}p=p.return}while(p!==null)}Ph(a)}catch(te){n=te,Ge===a&&a!==null&&(Ge=a=a.return);continue}break}while(!0)}function Ch(){var r=za.current;return za.current=Ma,r===null?Ma:r}function zu(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Je===null||(wn&268435455)===0&&(Wa&268435455)===0||Wr(Je,it)}function Ya(r,n){var a=Ce;Ce|=2;var l=Ch();(Je!==r||it!==n)&&(mr=null,bn(r,n));do try{qw();break}catch(d){Eh(r,d)}while(!0);if(tu(),Ce=a,za.current=l,Ge!==null)throw Error(i(261));return Je=null,it=0,Ye}function qw(){for(;Ge!==null;)xh(Ge)}function Kw(){for(;Ge!==null&&!w0();)xh(Ge)}function xh(r){var n=Dh(r.alternate,r,Pt);r.memoizedProps=r.pendingProps,n===null?Ph(r):Ge=n,Ou.current=null}function Ph(r){var n=r;do{var a=n.alternate;if(r=n.return,(n.flags&32768)===0){if(a=Uw(a,n,Pt),a!==null){Ge=a;return}}else{if(a=$w(a,n),a!==null){a.flags&=32767,Ge=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Ye=6,Ge=null;return}}if(n=n.sibling,n!==null){Ge=n;return}Ge=n=r}while(n!==null);Ye===0&&(Ye=5)}function In(r,n,a){var l=Te,d=Lt.transition;try{Lt.transition=null,Te=1,Yw(r,n,a,l)}finally{Lt.transition=d,Te=l}return null}function Yw(r,n,a,l){do ai();while($r!==null);if((Ce&6)!==0)throw Error(i(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(i(177));r.callbackNode=null,r.callbackPriority=0;var p=a.lanes|a.childLanes;if(D0(r,p),r===Je&&(Ge=Je=null,it=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Va||(Va=!0,Th(Zo,function(){return ai(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Lt.transition,Lt.transition=null;var v=Te;Te=1;var b=Ce;Ce|=4,Ou.current=null,Ww(r,a),mh(a,r),gw(zl),aa=!!$l,zl=$l=null,r.current=a,Hw(a),S0(),Ce=b,Te=v,Lt.transition=p}else r.current=a;if(Va&&(Va=!1,$r=r,Ga=d),p=r.pendingLanes,p===0&&(Ur=null),E0(a.stateNode),wt(r,He()),n!==null)for(l=r.onRecoverableError,a=0;a<n.length;a++)d=n[a],l(d.value,{componentStack:d.stack,digest:d.digest});if(Ha)throw Ha=!1,r=Mu,Mu=null,r;return(Ga&1)!==0&&r.tag!==0&&ai(),p=r.pendingLanes,(p&1)!==0?r===Bu?ho++:(ho=0,Bu=r):ho=0,Mr(),null}function ai(){if($r!==null){var r=hf(Ga),n=Lt.transition,a=Te;try{if(Lt.transition=null,Te=16>r?16:r,$r===null)var l=!1;else{if(r=$r,$r=null,Ga=0,(Ce&6)!==0)throw Error(i(331));var d=Ce;for(Ce|=4,X=r.current;X!==null;){var p=X,v=p.child;if((X.flags&16)!==0){var b=p.deletions;if(b!==null){for(var E=0;E<b.length;E++){var A=b[E];for(X=A;X!==null;){var U=X;switch(U.tag){case 0:case 11:case 15:co(8,U,p)}var $=U.child;if($!==null)$.return=U,X=$;else for(;X!==null;){U=X;var j=U.sibling,Q=U.return;if(dh(U),U===A){X=null;break}if(j!==null){j.return=Q,X=j;break}X=Q}}}var Z=p.alternate;if(Z!==null){var ee=Z.child;if(ee!==null){Z.child=null;do{var Ve=ee.sibling;ee.sibling=null,ee=Ve}while(ee!==null)}}X=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,X=v;else e:for(;X!==null;){if(p=X,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:co(9,p,p.return)}var _=p.sibling;if(_!==null){_.return=p.return,X=_;break e}X=p.return}}var C=r.current;for(X=C;X!==null;){v=X;var D=v.child;if((v.subtreeFlags&2064)!==0&&D!==null)D.return=v,X=D;else e:for(v=C;X!==null;){if(b=X,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:$a(9,b)}}catch(te){We(b,b.return,te)}if(b===v){X=null;break e}var W=b.sibling;if(W!==null){W.return=b.return,X=W;break e}X=b.return}}if(Ce=d,Mr(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(ea,r)}catch{}l=!0}return l}finally{Te=a,Lt.transition=n}}return!1}function _h(r,n,a){n=ri(a,n),n=Vp(r,n,1),r=Fr(r,n,1),n=dt(),r!==null&&(Bi(r,1,n),wt(r,n))}function We(r,n,a){if(r.tag===3)_h(r,r,a);else for(;n!==null;){if(n.tag===3){_h(n,r,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ur===null||!Ur.has(l))){r=ri(a,r),r=Gp(n,r,1),n=Fr(n,r,1),r=dt(),n!==null&&(Bi(n,1,r),wt(n,r));break}}n=n.return}}function Qw(r,n,a){var l=r.pingCache;l!==null&&l.delete(n),n=dt(),r.pingedLanes|=r.suspendedLanes&a,Je===r&&(it&a)===a&&(Ye===4||Ye===3&&(it&130023424)===it&&500>He()-Lu?bn(r,0):Nu|=a),wt(r,n)}function kh(r,n){n===0&&((r.mode&1)===0?n=1:(n=ra,ra<<=1,(ra&130023424)===0&&(ra=4194304)));var a=dt();r=pr(r,n),r!==null&&(Bi(r,n,a),wt(r,a))}function Jw(r){var n=r.memoizedState,a=0;n!==null&&(a=n.retryLane),kh(r,a)}function Xw(r,n){var a=0;switch(r.tag){case 13:var l=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:l=r.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),kh(r,a)}var Dh;Dh=function(r,n,a){if(r!==null)if(r.memoizedProps!==n.pendingProps||gt.current)vt=!0;else{if((r.lanes&a)===0&&(n.flags&128)===0)return vt=!1,jw(r,n,a);vt=(r.flags&131072)!==0}else vt=!1,Ue&&(n.flags&1048576)!==0&&lp(n,Ca,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;ja(r,n),r=n.pendingProps;var d=Kn(n,at.current);ei(n,a),d=fu(null,n,l,r,d,a);var p=pu();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,mt(l)?(p=!0,ba(n)):p=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ou(n),d.updater=Ba,n.stateNode=d,d._reactInternals=n,wu(n,l,r,a),n=Eu(null,n,l,!0,p,a)):(n.tag=0,Ue&&p&&Yl(n),ct(null,n,d,a),n=n.child),n;case 16:l=n.elementType;e:{switch(ja(r,n),r=n.pendingProps,d=l._init,l=d(l._payload),n.type=l,d=n.tag=eS(l),r=Ht(l,r),d){case 0:n=Iu(null,n,l,r,a);break e;case 1:n=th(null,n,l,r,a);break e;case 11:n=Qp(null,n,l,r,a);break e;case 14:n=Jp(null,n,l,Ht(l.type,r),a);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Ht(l,d),Iu(r,n,l,d,a);case 1:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Ht(l,d),th(r,n,l,d,a);case 3:e:{if(rh(n),r===null)throw Error(i(387));l=n.pendingProps,p=n.memoizedState,d=p.element,vp(r,n),Ta(n,l,null,a);var v=n.memoizedState;if(l=v.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){d=ri(Error(i(423)),n),n=nh(r,n,l,a,d);break e}else if(l!==d){d=ri(Error(i(424)),n),n=nh(r,n,l,a,d);break e}else for(xt=Or(n.stateNode.containerInfo.firstChild),Ct=n,Ue=!0,Wt=null,a=gp(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Jn(),l===d){n=gr(r,n,a);break e}ct(r,n,l,a)}n=n.child}return n;case 5:return Sp(n),r===null&&Xl(n),l=n.type,d=n.pendingProps,p=r!==null?r.memoizedProps:null,v=d.children,Wl(l,d)?v=null:p!==null&&Wl(l,p)&&(n.flags|=32),eh(r,n),ct(r,n,v,a),n.child;case 6:return r===null&&Xl(n),null;case 13:return ih(r,n,a);case 4:return au(n,n.stateNode.containerInfo),l=n.pendingProps,r===null?n.child=Xn(n,null,l,a):ct(r,n,l,a),n.child;case 11:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Ht(l,d),Qp(r,n,l,d,a);case 7:return ct(r,n,n.pendingProps,a),n.child;case 8:return ct(r,n,n.pendingProps.children,a),n.child;case 12:return ct(r,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,d=n.pendingProps,p=n.memoizedProps,v=d.value,Ne(_a,l._currentValue),l._currentValue=v,p!==null)if(zt(p.value,v)){if(p.children===d.children&&!gt.current){n=gr(r,n,a);break e}}else for(p=n.child,p!==null&&(p.return=n);p!==null;){var b=p.dependencies;if(b!==null){v=p.child;for(var E=b.firstContext;E!==null;){if(E.context===l){if(p.tag===1){E=hr(-1,a&-a),E.tag=2;var A=p.updateQueue;if(A!==null){A=A.shared;var U=A.pending;U===null?E.next=E:(E.next=U.next,U.next=E),A.pending=E}}p.lanes|=a,E=p.alternate,E!==null&&(E.lanes|=a),nu(p.return,a,n),b.lanes|=a;break}E=E.next}}else if(p.tag===10)v=p.type===n.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(i(341));v.lanes|=a,b=v.alternate,b!==null&&(b.lanes|=a),nu(v,a,n),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===n){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}ct(r,n,d.children,a),n=n.child}return n;case 9:return d=n.type,l=n.pendingProps.children,ei(n,a),d=Ot(d),l=l(d),n.flags|=1,ct(r,n,l,a),n.child;case 14:return l=n.type,d=Ht(l,n.pendingProps),d=Ht(l.type,d),Jp(r,n,l,d,a);case 15:return Xp(r,n,n.type,n.pendingProps,a);case 17:return l=n.type,d=n.pendingProps,d=n.elementType===l?d:Ht(l,d),ja(r,n),n.tag=1,mt(l)?(r=!0,ba(n)):r=!1,ei(n,a),Wp(n,l,d),wu(n,l,d,a),Eu(null,n,l,!0,r,a);case 19:return ah(r,n,a);case 22:return Zp(r,n,a)}throw Error(i(156,n.tag))};function Th(r,n){return uf(r,n)}function Zw(r,n,a,l){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(r,n,a,l){return new Zw(r,n,a,l)}function Wu(r){return r=r.prototype,!(!r||!r.isReactComponent)}function eS(r){if(typeof r=="function")return Wu(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Ae)return 11;if(r===Le)return 14}return 2}function Hr(r,n){var a=r.alternate;return a===null?(a=Mt(r.tag,n,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=n,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,n=r.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Qa(r,n,a,l,d,p){var v=2;if(l=r,typeof r=="function")Wu(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case z:return En(a.children,d,p,n);case le:v=8,d|=8;break;case ne:return r=Mt(12,a,n,d|2),r.elementType=ne,r.lanes=p,r;case V:return r=Mt(13,a,n,d),r.elementType=V,r.lanes=p,r;case ye:return r=Mt(19,a,n,d),r.elementType=ye,r.lanes=p,r;case Ee:return Ja(a,d,p,n);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ve:v=10;break e;case he:v=9;break e;case Ae:v=11;break e;case Le:v=14;break e;case De:v=16,l=null;break e}throw Error(i(130,r==null?r:typeof r,""))}return n=Mt(v,a,n,d),n.elementType=r,n.type=l,n.lanes=p,n}function En(r,n,a,l){return r=Mt(7,r,l,n),r.lanes=a,r}function Ja(r,n,a,l){return r=Mt(22,r,l,n),r.elementType=Ee,r.lanes=a,r.stateNode={isHidden:!1},r}function Hu(r,n,a){return r=Mt(6,r,null,n),r.lanes=a,r}function Vu(r,n,a){return n=Mt(4,r.children!==null?r.children:[],r.key,n),n.lanes=a,n.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},n}function tS(r,n,a,l,d){this.tag=n,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=l,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Gu(r,n,a,l,d,p,v,b,E){return r=new tS(r,n,a,b,E),n===1?(n=1,p===!0&&(n|=8)):n=0,p=Mt(3,null,null,n),r.current=p,p.stateNode=r,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(p),r}function rS(r,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:r,containerInfo:n,implementation:a}}function Rh(r){if(!r)return Lr;r=r._reactInternals;e:{if(dn(r)!==r||r.tag!==1)throw Error(i(170));var n=r;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(mt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(r.tag===1){var a=r.type;if(mt(a))return op(r,a,n)}return n}function Ah(r,n,a,l,d,p,v,b,E){return r=Gu(a,l,!0,r,d,p,v,b,E),r.context=Rh(null),a=r.current,l=dt(),d=zr(a),p=hr(l,d),p.callback=n??null,Fr(a,p,d),r.current.lanes=d,Bi(r,d,l),wt(r,l),r}function Xa(r,n,a,l){var d=n.current,p=dt(),v=zr(d);return a=Rh(a),n.context===null?n.context=a:n.pendingContext=a,n=hr(p,v),n.payload={element:r},l=l===void 0?null:l,l!==null&&(n.callback=l),r=Fr(d,n,v),r!==null&&(qt(r,d,v,p),Da(r,d,v)),v}function Za(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Oh(r,n){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<n?a:n}}function qu(r,n){Oh(r,n),(r=r.alternate)&&Oh(r,n)}function nS(){return null}var Nh=typeof reportError=="function"?reportError:function(r){console.error(r)};function Ku(r){this._internalRoot=r}es.prototype.render=Ku.prototype.render=function(r){var n=this._internalRoot;if(n===null)throw Error(i(409));Xa(r,n,null,null)},es.prototype.unmount=Ku.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var n=r.containerInfo;Sn(function(){Xa(null,r,null,null)}),n[ur]=null}};function es(r){this._internalRoot=r}es.prototype.unstable_scheduleHydration=function(r){if(r){var n=vf();r={blockedOn:null,target:r,priority:n};for(var a=0;a<Tr.length&&n!==0&&n<Tr[a].priority;a++);Tr.splice(a,0,r),a===0&&Sf(r)}};function Yu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function ts(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Lh(){}function iS(r,n,a,l,d){if(d){if(typeof l=="function"){var p=l;l=function(){var A=Za(v);p.call(A)}}var v=Ah(n,l,r,0,null,!1,!1,"",Lh);return r._reactRootContainer=v,r[ur]=v.current,Ji(r.nodeType===8?r.parentNode:r),Sn(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof l=="function"){var b=l;l=function(){var A=Za(E);b.call(A)}}var E=Gu(r,0,!1,null,null,!1,!1,"",Lh);return r._reactRootContainer=E,r[ur]=E.current,Ji(r.nodeType===8?r.parentNode:r),Sn(function(){Xa(n,E,a,l)}),E}function rs(r,n,a,l,d){var p=a._reactRootContainer;if(p){var v=p;if(typeof d=="function"){var b=d;d=function(){var E=Za(v);b.call(E)}}Xa(n,v,r,d)}else v=iS(a,n,r,d,l);return Za(v)}gf=function(r){switch(r.tag){case 3:var n=r.stateNode;if(n.current.memoizedState.isDehydrated){var a=Mi(n.pendingLanes);a!==0&&(wl(n,a|1),wt(n,He()),(Ce&6)===0&&(oi=He()+500,Mr()))}break;case 13:Sn(function(){var l=pr(r,1);if(l!==null){var d=dt();qt(l,r,1,d)}}),qu(r,1)}},Sl=function(r){if(r.tag===13){var n=pr(r,134217728);if(n!==null){var a=dt();qt(n,r,134217728,a)}qu(r,134217728)}},mf=function(r){if(r.tag===13){var n=zr(r),a=pr(r,n);if(a!==null){var l=dt();qt(a,r,n,l)}qu(r,n)}},vf=function(){return Te},yf=function(r,n){var a=Te;try{return Te=r,n()}finally{Te=a}},fl=function(r,n,a){switch(n){case"input":if(cn(r,a),n=a.name,a.type==="radio"&&n!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==r&&l.form===r.form){var d=wa(l);if(!d)throw Error(i(90));ht(l),cn(l,d)}}}break;case"textarea":Gd(r,a);break;case"select":n=a.value,n!=null&&Mn(r,!!a.multiple,n,!1)}},tf=Uu,rf=Sn;var oS={usingClientEntryPoint:!1,Events:[eo,Gn,wa,Zd,ef,Uu]},go={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},aS={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:M.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=sf(r),r===null?null:r.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||nS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{ea=ns.inject(aS),Zt=ns}catch{}}return St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS,St.createPortal=function(r,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(n))throw Error(i(200));return rS(r,n,null,a)},St.createRoot=function(r,n){if(!Yu(r))throw Error(i(299));var a=!1,l="",d=Nh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=Gu(r,1,!1,null,null,a,!1,l,d),r[ur]=n.current,Ji(r.nodeType===8?r.parentNode:r),new Ku(n)},St.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var n=r._reactInternals;if(n===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=sf(n),r=r===null?null:r.stateNode,r},St.flushSync=function(r){return Sn(r)},St.hydrate=function(r,n,a){if(!ts(n))throw Error(i(200));return rs(null,r,n,!0,a)},St.hydrateRoot=function(r,n,a){if(!Yu(r))throw Error(i(405));var l=a!=null&&a.hydratedSources||null,d=!1,p="",v=Nh;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),n=Ah(n,null,r,1,a??null,d,!1,p,v),r[ur]=n.current,Ji(r),l)for(r=0;r<l.length;r++)a=l[r],d=a._getVersion,d=d(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,d]:n.mutableSourceEagerHydrationData.push(a,d);return new es(n)},St.render=function(r,n,a){if(!ts(n))throw Error(i(200));return rs(null,r,n,!1,a)},St.unmountComponentAtNode=function(r){if(!ts(r))throw Error(i(40));return r._reactRootContainer?(Sn(function(){rs(null,null,r,!1,function(){r._reactRootContainer=null,r[ur]=null})}),!0):!1},St.unstable_batchedUpdates=Uu,St.unstable_renderSubtreeIntoContainer=function(r,n,a,l){if(!ts(a))throw Error(i(200));if(r==null||r._reactInternals===void 0)throw Error(i(38));return rs(r,n,a,!1,l)},St.version="18.3.1-next-f1338f8080-20240426",St}var Wh;function Rm(){if(Wh)return Xu.exports;Wh=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Xu.exports=pS(),Xu.exports}var Hh;function hS(){if(Hh)return is;Hh=1;var t=Rm();return is.createRoot=t.createRoot,is.hydrateRoot=t.hydrateRoot,is}var gS=hS(),et=function(){return et=Object.assign||function(e){for(var i,o=1,s=arguments.length;o<s;o++){i=arguments[o];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u])}return e},et.apply(this,arguments)};function nd(t,e){var i={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(i[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(t);s<o.length;s++)e.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(t,o[s])&&(i[o[s]]=t[o[s]]);return i}function _o(t,e,i){if(i||arguments.length===2)for(var o=0,s=e.length,u;o<s;o++)(u||!(o in e))&&(u||(u=Array.prototype.slice.call(e,0,o)),u[o]=e[o]);return t.concat(u||Array.prototype.slice.call(e))}var H=rd();const Ie=Ws(H);var Fe="-ms-",Eo="-moz-",ke="-webkit-",Am="comm",Hs="rule",id="decl",mS="@import",Om="@keyframes",vS="@layer",Nm=Math.abs,od=String.fromCharCode,Rc=Object.assign;function yS(t,e){return Ze(t,0)^45?(((e<<2^Ze(t,0))<<2^Ze(t,1))<<2^Ze(t,2))<<2^Ze(t,3):0}function Lm(t){return t.trim()}function vr(t,e){return(t=e.exec(t))?t[0]:t}function me(t,e,i){return t.replace(e,i)}function fs(t,e,i){return t.indexOf(e,i)}function Ze(t,e){return t.charCodeAt(e)|0}function gi(t,e,i){return t.slice(e,i)}function ir(t){return t.length}function Mm(t){return t.length}function So(t,e){return e.push(t),t}function wS(t,e){return t.map(e).join("")}function Vh(t,e){return t.filter(function(i){return!vr(i,e)})}var Vs=1,mi=1,Bm=0,Ut=0,qe=0,Ci="";function Gs(t,e,i,o,s,u,c,f){return{value:t,root:e,parent:i,type:o,props:s,children:u,line:Vs,column:mi,length:c,return:"",siblings:f}}function qr(t,e){return Rc(Gs("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function si(t){for(;t.root;)t=qr(t.root,{children:[t]});So(t,t.siblings)}function SS(){return qe}function bS(){return qe=Ut>0?Ze(Ci,--Ut):0,mi--,qe===10&&(mi=1,Vs--),qe}function Jt(){return qe=Ut<Bm?Ze(Ci,Ut++):0,mi++,qe===10&&(mi=1,Vs++),qe}function kn(){return Ze(Ci,Ut)}function ps(){return Ut}function qs(t,e){return gi(Ci,t,e)}function Ac(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function IS(t){return Vs=mi=1,Bm=ir(Ci=t),Ut=0,[]}function ES(t){return Ci="",t}function tc(t){return Lm(qs(Ut-1,Oc(t===91?t+2:t===40?t+1:t)))}function CS(t){for(;(qe=kn())&&qe<33;)Jt();return Ac(t)>2||Ac(qe)>3?"":" "}function xS(t,e){for(;--e&&Jt()&&!(qe<48||qe>102||qe>57&&qe<65||qe>70&&qe<97););return qs(t,ps()+(e<6&&kn()==32&&Jt()==32))}function Oc(t){for(;Jt();)switch(qe){case t:return Ut;case 34:case 39:t!==34&&t!==39&&Oc(qe);break;case 40:t===41&&Oc(t);break;case 92:Jt();break}return Ut}function PS(t,e){for(;Jt()&&t+qe!==57;)if(t+qe===84&&kn()===47)break;return"/*"+qs(e,Ut-1)+"*"+od(t===47?t:Jt())}function _S(t){for(;!Ac(kn());)Jt();return qs(t,Ut)}function kS(t){return ES(hs("",null,null,null,[""],t=IS(t),0,[0],t))}function hs(t,e,i,o,s,u,c,f,h){for(var g=0,w=0,m=c,y=0,S=0,I=0,P=1,k=1,T=1,O=0,L="",M=s,R=u,F=o,z=L;k;)switch(I=O,O=Jt()){case 40:if(I!=108&&Ze(z,m-1)==58){fs(z+=me(tc(O),"&","&\f"),"&\f",Nm(g?f[g-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:z+=tc(O);break;case 9:case 10:case 13:case 32:z+=CS(I);break;case 92:z+=xS(ps()-1,7);continue;case 47:switch(kn()){case 42:case 47:So(DS(PS(Jt(),ps()),e,i,h),h);break;default:z+="/"}break;case 123*P:f[g++]=ir(z)*T;case 125*P:case 59:case 0:switch(O){case 0:case 125:k=0;case 59+w:T==-1&&(z=me(z,/\f/g,"")),S>0&&ir(z)-m&&So(S>32?qh(z+";",o,i,m-1,h):qh(me(z," ","")+";",o,i,m-2,h),h);break;case 59:z+=";";default:if(So(F=Gh(z,e,i,g,w,s,f,L,M=[],R=[],m,u),u),O===123)if(w===0)hs(z,e,F,F,M,u,m,f,R);else switch(y===99&&Ze(z,3)===110?100:y){case 100:case 108:case 109:case 115:hs(t,F,F,o&&So(Gh(t,F,F,0,0,s,f,L,s,M=[],m,R),R),s,R,m,f,o?M:R);break;default:hs(z,F,F,F,[""],R,0,f,R)}}g=w=S=0,P=T=1,L=z="",m=c;break;case 58:m=1+ir(z),S=I;default:if(P<1){if(O==123)--P;else if(O==125&&P++==0&&bS()==125)continue}switch(z+=od(O),O*P){case 38:T=w>0?1:(z+="\f",-1);break;case 44:f[g++]=(ir(z)-1)*T,T=1;break;case 64:kn()===45&&(z+=tc(Jt())),y=kn(),w=m=ir(L=z+=_S(ps())),O++;break;case 45:I===45&&ir(z)==2&&(P=0)}}return u}function Gh(t,e,i,o,s,u,c,f,h,g,w,m){for(var y=s-1,S=s===0?u:[""],I=Mm(S),P=0,k=0,T=0;P<o;++P)for(var O=0,L=gi(t,y+1,y=Nm(k=c[P])),M=t;O<I;++O)(M=Lm(k>0?S[O]+" "+L:me(L,/&\f/g,S[O])))&&(h[T++]=M);return Gs(t,e,i,s===0?Hs:f,h,g,w,m)}function DS(t,e,i,o){return Gs(t,e,i,Am,od(SS()),gi(t,2,-2),0,o)}function qh(t,e,i,o,s){return Gs(t,e,i,id,gi(t,0,o),gi(t,o+1,-1),o,s)}function Fm(t,e,i){switch(yS(t,e)){case 5103:return ke+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ke+t+t;case 4789:return Eo+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ke+t+Eo+t+Fe+t+t;case 5936:switch(Ze(t,e+11)){case 114:return ke+t+Fe+me(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ke+t+Fe+me(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ke+t+Fe+me(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return ke+t+Fe+t+t;case 6165:return ke+t+Fe+"flex-"+t+t;case 5187:return ke+t+me(t,/(\w+).+(:[^]+)/,ke+"box-$1$2"+Fe+"flex-$1$2")+t;case 5443:return ke+t+Fe+"flex-item-"+me(t,/flex-|-self/g,"")+(vr(t,/flex-|baseline/)?"":Fe+"grid-row-"+me(t,/flex-|-self/g,""))+t;case 4675:return ke+t+Fe+"flex-line-pack"+me(t,/align-content|flex-|-self/g,"")+t;case 5548:return ke+t+Fe+me(t,"shrink","negative")+t;case 5292:return ke+t+Fe+me(t,"basis","preferred-size")+t;case 6060:return ke+"box-"+me(t,"-grow","")+ke+t+Fe+me(t,"grow","positive")+t;case 4554:return ke+me(t,/([^-])(transform)/g,"$1"+ke+"$2")+t;case 6187:return me(me(me(t,/(zoom-|grab)/,ke+"$1"),/(image-set)/,ke+"$1"),t,"")+t;case 5495:case 3959:return me(t,/(image-set\([^]*)/,ke+"$1$`$1");case 4968:return me(me(t,/(.+:)(flex-)?(.*)/,ke+"box-pack:$3"+Fe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ke+t+t;case 4200:if(!vr(t,/flex-|baseline/))return Fe+"grid-column-align"+gi(t,e)+t;break;case 2592:case 3360:return Fe+me(t,"template-","")+t;case 4384:case 3616:return i&&i.some(function(o,s){return e=s,vr(o.props,/grid-\w+-end/)})?~fs(t+(i=i[e].value),"span",0)?t:Fe+me(t,"-start","")+t+Fe+"grid-row-span:"+(~fs(i,"span",0)?vr(i,/\d+/):+vr(i,/\d+/)-+vr(t,/\d+/))+";":Fe+me(t,"-start","")+t;case 4896:case 4128:return i&&i.some(function(o){return vr(o.props,/grid-\w+-start/)})?t:Fe+me(me(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return me(t,/(.+)-inline(.+)/,ke+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ir(t)-1-e>6)switch(Ze(t,e+1)){case 109:if(Ze(t,e+4)!==45)break;case 102:return me(t,/(.+:)(.+)-([^]+)/,"$1"+ke+"$2-$3$1"+Eo+(Ze(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~fs(t,"stretch",0)?Fm(me(t,"stretch","fill-available"),e,i)+t:t}break;case 5152:case 5920:return me(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,u,c,f,h,g){return Fe+s+":"+u+g+(c?Fe+s+"-span:"+(f?h:+h-+u)+g:"")+t});case 4949:if(Ze(t,e+6)===121)return me(t,":",":"+ke)+t;break;case 6444:switch(Ze(t,Ze(t,14)===45?18:11)){case 120:return me(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ke+(Ze(t,14)===45?"inline-":"")+"box$3$1"+ke+"$2$3$1"+Fe+"$2box$3")+t;case 100:return me(t,":",":"+Fe)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return me(t,"scroll-","scroll-snap-")+t}return t}function Es(t,e){for(var i="",o=0;o<t.length;o++)i+=e(t[o],o,t,e)||"";return i}function TS(t,e,i,o){switch(t.type){case vS:if(t.children.length)break;case mS:case id:return t.return=t.return||t.value;case Am:return"";case Om:return t.return=t.value+"{"+Es(t.children,o)+"}";case Hs:if(!ir(t.value=t.props.join(",")))return""}return ir(i=Es(t.children,o))?t.return=t.value+"{"+i+"}":""}function RS(t){var e=Mm(t);return function(i,o,s,u){for(var c="",f=0;f<e;f++)c+=t[f](i,o,s,u)||"";return c}}function AS(t){return function(e){e.root||(e=e.return)&&t(e)}}function OS(t,e,i,o){if(t.length>-1&&!t.return)switch(t.type){case id:t.return=Fm(t.value,t.length,i);return;case Om:return Es([qr(t,{value:me(t.value,"@","@"+ke)})],o);case Hs:if(t.length)return wS(i=t.props,function(s){switch(vr(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":si(qr(t,{props:[me(s,/:(read-\w+)/,":"+Eo+"$1")]})),si(qr(t,{props:[s]})),Rc(t,{props:Vh(i,o)});break;case"::placeholder":si(qr(t,{props:[me(s,/:(plac\w+)/,":"+ke+"input-$1")]})),si(qr(t,{props:[me(s,/:(plac\w+)/,":"+Eo+"$1")]})),si(qr(t,{props:[me(s,/:(plac\w+)/,Fe+"input-$1")]})),si(qr(t,{props:[s]})),Rc(t,{props:Vh(i,o)});break}return""})}}var NS={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},_t={},vi=typeof process<"u"&&_t!==void 0&&(_t.REACT_APP_SC_ATTR||_t.SC_ATTR)||"data-styled",jm="active",Um="data-styled-version",Ks="6.1.13",ad=`/*!sc*/
`,Cs=typeof window<"u"&&"HTMLElement"in window,LS=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&_t.REACT_APP_SC_DISABLE_SPEEDY!==""?_t.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&_t.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&_t!==void 0&&_t.SC_DISABLE_SPEEDY!==void 0&&_t.SC_DISABLE_SPEEDY!==""&&_t.SC_DISABLE_SPEEDY!=="false"&&_t.SC_DISABLE_SPEEDY),MS={},Ys=Object.freeze([]),yi=Object.freeze({});function $m(t,e,i){return i===void 0&&(i=yi),t.theme!==i.theme&&t.theme||e||i.theme}var zm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),BS=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,FS=/(^-|-$)/g;function Kh(t){return t.replace(BS,"-").replace(FS,"")}var jS=/(a)(d)/gi,os=52,Yh=function(t){return String.fromCharCode(t+(t>25?39:97))};function Nc(t){var e,i="";for(e=Math.abs(t);e>os;e=e/os|0)i=Yh(e%os)+i;return(Yh(e%os)+i).replace(jS,"$1-$2")}var rc,Wm=5381,ui=function(t,e){for(var i=e.length;i;)t=33*t^e.charCodeAt(--i);return t},Hm=function(t){return ui(Wm,t)};function Vm(t){return Nc(Hm(t)>>>0)}function US(t){return t.displayName||t.name||"Component"}function nc(t){return typeof t=="string"&&!0}var Gm=typeof Symbol=="function"&&Symbol.for,qm=Gm?Symbol.for("react.memo"):60115,$S=Gm?Symbol.for("react.forward_ref"):60112,zS={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},WS={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Km={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},HS=((rc={})[$S]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},rc[qm]=Km,rc);function Qh(t){return("type"in(e=t)&&e.type.$$typeof)===qm?Km:"$$typeof"in t?HS[t.$$typeof]:zS;var e}var VS=Object.defineProperty,GS=Object.getOwnPropertyNames,Jh=Object.getOwnPropertySymbols,qS=Object.getOwnPropertyDescriptor,KS=Object.getPrototypeOf,Xh=Object.prototype;function Ym(t,e,i){if(typeof e!="string"){if(Xh){var o=KS(e);o&&o!==Xh&&Ym(t,o,i)}var s=GS(e);Jh&&(s=s.concat(Jh(e)));for(var u=Qh(t),c=Qh(e),f=0;f<s.length;++f){var h=s[f];if(!(h in WS||i&&i[h]||c&&h in c||u&&h in u)){var g=qS(e,h);try{VS(t,h,g)}catch{}}}}return t}function Dn(t){return typeof t=="function"}function sd(t){return typeof t=="object"&&"styledComponentId"in t}function _n(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Lc(t,e){if(t.length===0)return"";for(var i=t[0],o=1;o<t.length;o++)i+=t[o];return i}function ko(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Mc(t,e,i){if(i===void 0&&(i=!1),!i&&!ko(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var o=0;o<e.length;o++)t[o]=Mc(t[o],e[o]);else if(ko(e))for(var o in e)t[o]=Mc(t[o],e[o]);return t}function ld(t,e){Object.defineProperty(t,"toString",{value:e})}function Tn(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var YS=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var i=0,o=0;o<e;o++)i+=this.groupSizes[o];return i},t.prototype.insertRules=function(e,i){if(e>=this.groupSizes.length){for(var o=this.groupSizes,s=o.length,u=s;e>=u;)if((u<<=1)<0)throw Tn(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(o),this.length=u;for(var c=s;c<u;c++)this.groupSizes[c]=0}for(var f=this.indexOfGroup(e+1),h=(c=0,i.length);c<h;c++)this.tag.insertRule(f,i[c])&&(this.groupSizes[e]++,f++)},t.prototype.clearGroup=function(e){if(e<this.length){var i=this.groupSizes[e],o=this.indexOfGroup(e),s=o+i;this.groupSizes[e]=0;for(var u=o;u<s;u++)this.tag.deleteRule(o)}},t.prototype.getGroup=function(e){var i="";if(e>=this.length||this.groupSizes[e]===0)return i;for(var o=this.groupSizes[e],s=this.indexOfGroup(e),u=s+o,c=s;c<u;c++)i+="".concat(this.tag.getRule(c)).concat(ad);return i},t}(),gs=new Map,xs=new Map,ms=1,as=function(t){if(gs.has(t))return gs.get(t);for(;xs.has(ms);)ms++;var e=ms++;return gs.set(t,e),xs.set(e,t),e},QS=function(t,e){ms=e+1,gs.set(t,e),xs.set(e,t)},JS="style[".concat(vi,"][").concat(Um,'="').concat(Ks,'"]'),XS=new RegExp("^".concat(vi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ZS=function(t,e,i){for(var o,s=i.split(","),u=0,c=s.length;u<c;u++)(o=s[u])&&t.registerName(e,o)},eb=function(t,e){for(var i,o=((i=e.textContent)!==null&&i!==void 0?i:"").split(ad),s=[],u=0,c=o.length;u<c;u++){var f=o[u].trim();if(f){var h=f.match(XS);if(h){var g=0|parseInt(h[1],10),w=h[2];g!==0&&(QS(w,g),ZS(t,w,h[3]),t.getTag().insertRules(g,s)),s.length=0}else s.push(f)}}},Zh=function(t){for(var e=document.querySelectorAll(JS),i=0,o=e.length;i<o;i++){var s=e[i];s&&s.getAttribute(vi)!==jm&&(eb(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function tb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Qm=function(t){var e=document.head,i=t||e,o=document.createElement("style"),s=function(f){var h=Array.from(f.querySelectorAll("style[".concat(vi,"]")));return h[h.length-1]}(i),u=s!==void 0?s.nextSibling:null;o.setAttribute(vi,jm),o.setAttribute(Um,Ks);var c=tb();return c&&o.setAttribute("nonce",c),i.insertBefore(o,u),o},rb=function(){function t(e){this.element=Qm(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,s=0,u=o.length;s<u;s++){var c=o[s];if(c.ownerNode===i)return c}throw Tn(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""},t}(),nb=function(){function t(e){this.element=Qm(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,i){if(e<=this.length&&e>=0){var o=document.createTextNode(i);return this.element.insertBefore(o,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),ib=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,i){return e<=this.length&&(this.rules.splice(e,0,i),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),eg=Cs,ob={isServer:!Cs,useCSSOMInjection:!LS},Ps=function(){function t(e,i,o){e===void 0&&(e=yi),i===void 0&&(i={});var s=this;this.options=et(et({},ob),e),this.gs=i,this.names=new Map(o),this.server=!!e.isServer,!this.server&&Cs&&eg&&(eg=!1,Zh(this)),ld(this,function(){return function(u){for(var c=u.getTag(),f=c.length,h="",g=function(m){var y=function(T){return xs.get(T)}(m);if(y===void 0)return"continue";var S=u.names.get(y),I=c.getGroup(m);if(S===void 0||!S.size||I.length===0)return"continue";var P="".concat(vi,".g").concat(m,'[id="').concat(y,'"]'),k="";S!==void 0&&S.forEach(function(T){T.length>0&&(k+="".concat(T,","))}),h+="".concat(I).concat(P,'{content:"').concat(k,'"}').concat(ad)},w=0;w<f;w++)g(w);return h}(s)})}return t.registerId=function(e){return as(e)},t.prototype.rehydrate=function(){!this.server&&Cs&&Zh(this)},t.prototype.reconstructWithOptions=function(e,i){return i===void 0&&(i=!0),new t(et(et({},this.options),e),this.gs,i&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(i){var o=i.useCSSOMInjection,s=i.target;return i.isServer?new ib(s):o?new rb(s):new nb(s)}(this.options),new YS(e)));var e},t.prototype.hasNameForId=function(e,i){return this.names.has(e)&&this.names.get(e).has(i)},t.prototype.registerName=function(e,i){if(as(e),this.names.has(e))this.names.get(e).add(i);else{var o=new Set;o.add(i),this.names.set(e,o)}},t.prototype.insertRules=function(e,i,o){this.registerName(e,i),this.getTag().insertRules(as(e),o)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(as(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),ab=/&/g,sb=/^\s*\/\/.*$/gm;function Jm(t,e){return t.map(function(i){return i.type==="rule"&&(i.value="".concat(e," ").concat(i.value),i.value=i.value.replaceAll(",",",".concat(e," ")),i.props=i.props.map(function(o){return"".concat(e," ").concat(o)})),Array.isArray(i.children)&&i.type!=="@keyframes"&&(i.children=Jm(i.children,e)),i})}function lb(t){var e,i,o,s=yi,u=s.options,c=u===void 0?yi:u,f=s.plugins,h=f===void 0?Ys:f,g=function(y,S,I){return I.startsWith(i)&&I.endsWith(i)&&I.replaceAll(i,"").length>0?".".concat(e):y},w=h.slice();w.push(function(y){y.type===Hs&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(ab,i).replace(o,g))}),c.prefix&&w.push(OS),w.push(TS);var m=function(y,S,I,P){S===void 0&&(S=""),I===void 0&&(I=""),P===void 0&&(P="&"),e=P,i=S,o=new RegExp("\\".concat(i,"\\b"),"g");var k=y.replace(sb,""),T=kS(I||S?"".concat(I," ").concat(S," { ").concat(k," }"):k);c.namespace&&(T=Jm(T,c.namespace));var O=[];return Es(T,RS(w.concat(AS(function(L){return O.push(L)})))),O};return m.hash=h.length?h.reduce(function(y,S){return S.name||Tn(15),ui(y,S.name)},Wm).toString():"",m}var ub=new Ps,Bc=lb(),Xm=Ie.createContext({shouldForwardProp:void 0,styleSheet:ub,stylis:Bc});Xm.Consumer;Ie.createContext(void 0);function Fc(){return H.useContext(Xm)}var cb=function(){function t(e,i){var o=this;this.inject=function(s,u){u===void 0&&(u=Bc);var c=o.name+u.hash;s.hasNameForId(o.id,c)||s.insertRules(o.id,c,u(o.rules,c,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=i,ld(this,function(){throw Tn(12,String(o.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Bc),this.name+e.hash},t}(),db=function(t){return t>="A"&&t<="Z"};function tg(t){for(var e="",i=0;i<t.length;i++){var o=t[i];if(i===1&&o==="-"&&t[0]==="-")return t;db(o)?e+="-"+o.toLowerCase():e+=o}return e.startsWith("ms-")?"-"+e:e}var Zm=function(t){return t==null||t===!1||t===""},ev=function(t){var e,i,o=[];for(var s in t){var u=t[s];t.hasOwnProperty(s)&&!Zm(u)&&(Array.isArray(u)&&u.isCss||Dn(u)?o.push("".concat(tg(s),":"),u,";"):ko(u)?o.push.apply(o,_o(_o(["".concat(s," {")],ev(u),!1),["}"],!1)):o.push("".concat(tg(s),": ").concat((e=s,(i=u)==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in NS||e.startsWith("--")?String(i).trim():"".concat(i,"px")),";")))}return o};function Xr(t,e,i,o){if(Zm(t))return[];if(sd(t))return[".".concat(t.styledComponentId)];if(Dn(t)){if(!Dn(u=t)||u.prototype&&u.prototype.isReactComponent||!e)return[t];var s=t(e);return Xr(s,e,i,o)}var u;return t instanceof cb?i?(t.inject(i,o),[t.getName(o)]):[t]:ko(t)?ev(t):Array.isArray(t)?Array.prototype.concat.apply(Ys,t.map(function(c){return Xr(c,e,i,o)})):[t.toString()]}function tv(t){for(var e=0;e<t.length;e+=1){var i=t[e];if(Dn(i)&&!sd(i))return!1}return!0}var fb=Hm(Ks),pb=function(){function t(e,i,o){this.rules=e,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&tv(e),this.componentId=i,this.baseHash=ui(fb,i),this.baseStyle=o,Ps.registerId(i)}return t.prototype.generateAndInjectStyles=function(e,i,o){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,i,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&i.hasNameForId(this.componentId,this.staticRulesId))s=_n(s,this.staticRulesId);else{var u=Lc(Xr(this.rules,e,i,o)),c=Nc(ui(this.baseHash,u)>>>0);if(!i.hasNameForId(this.componentId,c)){var f=o(u,".".concat(c),void 0,this.componentId);i.insertRules(this.componentId,c,f)}s=_n(s,c),this.staticRulesId=c}else{for(var h=ui(this.baseHash,o.hash),g="",w=0;w<this.rules.length;w++){var m=this.rules[w];if(typeof m=="string")g+=m;else if(m){var y=Lc(Xr(m,e,i,o));h=ui(h,y+w),g+=y}}if(g){var S=Nc(h>>>0);i.hasNameForId(this.componentId,S)||i.insertRules(this.componentId,S,o(g,".".concat(S),void 0,this.componentId)),s=_n(s,S)}}return s},t}(),Do=Ie.createContext(void 0);Do.Consumer;function hb(t){var e=Ie.useContext(Do),i=H.useMemo(function(){return function(o,s){if(!o)throw Tn(14);if(Dn(o)){var u=o(s);return u}if(Array.isArray(o)||typeof o!="object")throw Tn(8);return s?et(et({},s),o):o}(t.theme,e)},[t.theme,e]);return t.children?Ie.createElement(Do.Provider,{value:i},t.children):null}var ic={};function gb(t,e,i){var o=sd(t),s=t,u=!nc(t),c=e.attrs,f=c===void 0?Ys:c,h=e.componentId,g=h===void 0?function(M,R){var F=typeof M!="string"?"sc":Kh(M);ic[F]=(ic[F]||0)+1;var z="".concat(F,"-").concat(Vm(Ks+F+ic[F]));return R?"".concat(R,"-").concat(z):z}(e.displayName,e.parentComponentId):h,w=e.displayName,m=w===void 0?function(M){return nc(M)?"styled.".concat(M):"Styled(".concat(US(M),")")}(t):w,y=e.displayName&&e.componentId?"".concat(Kh(e.displayName),"-").concat(e.componentId):e.componentId||g,S=o&&s.attrs?s.attrs.concat(f).filter(Boolean):f,I=e.shouldForwardProp;if(o&&s.shouldForwardProp){var P=s.shouldForwardProp;if(e.shouldForwardProp){var k=e.shouldForwardProp;I=function(M,R){return P(M,R)&&k(M,R)}}else I=P}var T=new pb(i,y,o?s.componentStyle:void 0);function O(M,R){return function(F,z,le){var ne=F.attrs,ve=F.componentStyle,he=F.defaultProps,Ae=F.foldedComponentIds,V=F.styledComponentId,ye=F.target,Le=Ie.useContext(Do),De=Fc(),Ee=F.shouldForwardProp||De.shouldForwardProp,G=$m(z,Le,he)||yi,J=function(fe,pe,Se){for(var ge,be=et(et({},pe),{className:void 0,theme:Se}),je=0;je<fe.length;je+=1){var It=Dn(ge=fe[je])?ge(be):ge;for(var ht in It)be[ht]=ht==="className"?_n(be[ht],It[ht]):ht==="style"?et(et({},be[ht]),It[ht]):It[ht]}return pe.className&&(be.className=_n(be.className,pe.className)),be}(ne,z,G),Y=J.as||ye,x={};for(var B in J)J[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&J.theme===G||(B==="forwardedAs"?x.as=J.forwardedAs:Ee&&!Ee(B,Y)||(x[B]=J[B]));var ue=function(fe,pe){var Se=Fc(),ge=fe.generateAndInjectStyles(pe,Se.styleSheet,Se.stylis);return ge}(ve,J),de=_n(Ae,V);return ue&&(de+=" "+ue),J.className&&(de+=" "+J.className),x[nc(Y)&&!zm.has(Y)?"class":"className"]=de,x.ref=le,H.createElement(Y,x)}(L,M,R)}O.displayName=m;var L=Ie.forwardRef(O);return L.attrs=S,L.componentStyle=T,L.displayName=m,L.shouldForwardProp=I,L.foldedComponentIds=o?_n(s.foldedComponentIds,s.styledComponentId):"",L.styledComponentId=y,L.target=o?s.target:t,Object.defineProperty(L,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(M){this._foldedDefaultProps=o?function(R){for(var F=[],z=1;z<arguments.length;z++)F[z-1]=arguments[z];for(var le=0,ne=F;le<ne.length;le++)Mc(R,ne[le],!0);return R}({},s.defaultProps,M):M}}),ld(L,function(){return".".concat(L.styledComponentId)}),u&&Ym(L,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),L}function rg(t,e){for(var i=[t[0]],o=0,s=e.length;o<s;o+=1)i.push(e[o],t[o+1]);return i}var ng=function(t){return Object.assign(t,{isCss:!0})};function rv(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(Dn(t)||ko(t))return ng(Xr(rg(Ys,_o([t],e,!0))));var o=t;return e.length===0&&o.length===1&&typeof o[0]=="string"?Xr(o):ng(Xr(rg(o,e)))}function jc(t,e,i){if(i===void 0&&(i=yi),!e)throw Tn(1,e);var o=function(s){for(var u=[],c=1;c<arguments.length;c++)u[c-1]=arguments[c];return t(e,i,rv.apply(void 0,_o([s],u,!1)))};return o.attrs=function(s){return jc(t,e,et(et({},i),{attrs:Array.prototype.concat(i.attrs,s).filter(Boolean)}))},o.withConfig=function(s){return jc(t,e,et(et({},i),s))},o}var nv=function(t){return jc(gb,t)},K=nv;zm.forEach(function(t){K[t]=nv(t)});var mb=function(){function t(e,i){this.rules=e,this.componentId=i,this.isStatic=tv(e),Ps.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,i,o,s){var u=s(Lc(Xr(this.rules,i,o,s)),""),c=this.componentId+e;o.insertRules(c,c,u)},t.prototype.removeStyles=function(e,i){i.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,i,o,s){e>2&&Ps.registerId(this.componentId+e),this.removeStyles(e,o),this.createStyles(e,i,o,s)},t}();function vb(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];var o=rv.apply(void 0,_o([t],e,!1)),s="sc-global-".concat(Vm(JSON.stringify(o))),u=new mb(o,s),c=function(h){var g=Fc(),w=Ie.useContext(Do),m=Ie.useRef(g.styleSheet.allocateGSInstance(s)).current;return g.styleSheet.server&&f(m,h,g.styleSheet,w,g.stylis),Ie.useLayoutEffect(function(){if(!g.styleSheet.server)return f(m,h,g.styleSheet,w,g.stylis),function(){return u.removeStyles(m,g.styleSheet)}},[m,h,g.styleSheet,w,g.stylis]),null};function f(h,g,w,m,y){if(u.isStatic)u.renderStyles(h,MS,w,y);else{var S=et(et({},g),{theme:$m(g,m,c.defaultProps)});u.renderStyles(h,S,w,y)}}return Ie.memo(c)}const iv=K.div`
  /* overflow-y: auto; */
  width: 1500px;
`,yb=vb`
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
`,wb=K.div`
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
`,Sb=K.div`
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
`,bb=K.aside`
  display: flex;
  flex-direction: column;
`,Ib=K.div`
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
`,Eb=K.button`
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
`,Cb=K.header`
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
`,xb=K.div`
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
`;var oc={exports:{}},ac,ig;function Pb(){if(ig)return ac;ig=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ac=t,ac}var sc,og;function _b(){if(og)return sc;og=1;var t=Pb();function e(){}function i(){}return i.resetWarningCache=e,sc=function(){function o(c,f,h,g,w,m){if(m!==t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}o.isRequired=o;function s(){return o}var u={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:s,element:o,elementType:o,instanceOf:s,node:o,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:i,resetWarningCache:e};return u.PropTypes=u,u},sc}var ag;function kb(){return ag||(ag=1,oc.exports=_b()()),oc.exports}var Db=kb();const Sr=Ws(Db),ov=K.div`
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
`,Tb=K.input`
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
`,Rb=K.img`
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
`,Ab=()=>N.jsxs(ov,{children:[N.jsx(Rb,{src:"icon/search_icon.svg","aria-hidden":"true",alt:""}),N.jsx(Tb,{"aria-label":"Search on your page",type:"text",placeholder:"Search for anything..."})]}),sg=K.div`
  display: flex;
`,Ob=K.div`
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
`,Nb=K.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Lb=K.div`
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
`,Mb=K.button`
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
`,lg=K.img``,Bb=K.div`
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
`,Fb=K.span`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,jb=K.span`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,Ub=K.img`
  margin-right: 0.8rem;
  object-fit: cover;
  object-position: top;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`,$b=K.button`
  cursor: pointer;
  background-color: transparent;
`;K.img`
  width: 1.5rem;
  height: 1.5rem;
`;const zb=K.div`
  position: absolute;
  top: 100%;
  right: 3%;
  width: 10rem;
  height: 10rem;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`;K(ov)`
  margin: 0;
  border-radius: 0;
  padding: 0;
  display: block;
`;const Wb=K.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`,Hb=K.form`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 300px;
  transition: 3000ms;
`,Vb=K.h2`
  text-align: center;
  color: ${({theme:t})=>t.colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`,lc=K.div`
  margin-bottom: 1.2rem;
`,uc=K.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({theme:t})=>t.colors.secondaryLightBackground};
  }
`,ud=K.button`
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
`,Gb=K(ud)``,qb=K.p`
  text-align: center;
  margin-top: 1rem;
  color: ${({theme:t})=>t.colors.lightText};
`,Kb=K.span`
  color: ${({theme:t})=>t.colors.darkBlue};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,ug=K.div`
  font-weight: 500;
  color: #ff0000b5;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 3000ms;
`,xi=H.createContext({isLoggedIn:!1,setIsLoggedIn:()=>{},showLoginForm:!1,setShowLoginForm:()=>{},mode:"login",setMode:()=>{},loggedUser:null,setLoggedUser:()=>{}}),Yb=()=>{};var cg={};/**
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
 */const av=function(t){const e=[];let i=0;for(let o=0;o<t.length;o++){let s=t.charCodeAt(o);s<128?e[i++]=s:s<2048?(e[i++]=s>>6|192,e[i++]=s&63|128):(s&64512)===55296&&o+1<t.length&&(t.charCodeAt(o+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++o)&1023),e[i++]=s>>18|240,e[i++]=s>>12&63|128,e[i++]=s>>6&63|128,e[i++]=s&63|128):(e[i++]=s>>12|224,e[i++]=s>>6&63|128,e[i++]=s&63|128)}return e},Qb=function(t){const e=[];let i=0,o=0;for(;i<t.length;){const s=t[i++];if(s<128)e[o++]=String.fromCharCode(s);else if(s>191&&s<224){const u=t[i++];e[o++]=String.fromCharCode((s&31)<<6|u&63)}else if(s>239&&s<365){const u=t[i++],c=t[i++],f=t[i++],h=((s&7)<<18|(u&63)<<12|(c&63)<<6|f&63)-65536;e[o++]=String.fromCharCode(55296+(h>>10)),e[o++]=String.fromCharCode(56320+(h&1023))}else{const u=t[i++],c=t[i++];e[o++]=String.fromCharCode((s&15)<<12|(u&63)<<6|c&63)}}return e.join("")},sv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let s=0;s<t.length;s+=3){const u=t[s],c=s+1<t.length,f=c?t[s+1]:0,h=s+2<t.length,g=h?t[s+2]:0,w=u>>2,m=(u&3)<<4|f>>4;let y=(f&15)<<2|g>>6,S=g&63;h||(S=64,c||(y=64)),o.push(i[w],i[m],i[y],i[S])}return o.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(av(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Qb(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let s=0;s<t.length;){const u=i[t.charAt(s++)],f=s<t.length?i[t.charAt(s)]:0;++s;const g=s<t.length?i[t.charAt(s)]:64;++s;const m=s<t.length?i[t.charAt(s)]:64;if(++s,u==null||f==null||g==null||m==null)throw new Jb;const y=u<<2|f>>4;if(o.push(y),g!==64){const S=f<<4&240|g>>2;if(o.push(S),m!==64){const I=g<<6&192|m;o.push(I)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Jb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xb=function(t){const e=av(t);return sv.encodeByteArray(e,!0)},lv=function(t){return Xb(t).replace(/\./g,"")},uv=function(t){try{return sv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Zb(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eI=()=>Zb().__FIREBASE_DEFAULTS__,tI=()=>{if(typeof process>"u"||typeof cg>"u")return;const t=cg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uv(t[1]);return e&&JSON.parse(e)},cd=()=>{try{return Yb()||eI()||tI()||rI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nI=t=>{var e,i;return(i=(e=cd())===null||e===void 0?void 0:e.emulatorHosts)===null||i===void 0?void 0:i[t]},cv=()=>{var t;return(t=cd())===null||t===void 0?void 0:t.config},dv=t=>{var e;return(e=cd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class iI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,i)=>{this.resolve=e,this.reject=i})}wrapCallback(e){return(i,o)=>{i?this.reject(i):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(i):e(i,o))}}}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function aI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function sI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uI(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cI(){try{return typeof indexedDB=="object"}catch{return!1}}function dI(){return new Promise((t,e)=>{try{let i=!0;const o="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(o);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(o),t(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var u;e(((u=s.error)===null||u===void 0?void 0:u.message)||"")}}catch(i){e(i)}})}/**
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
 */const fI="FirebaseError";class an extends Error{constructor(e,i,o){super(i),this.code=e,this.customData=o,this.name=fI,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(e,i,o){this.service=e,this.serviceName=i,this.errors=o}create(e,...i){const o=i[0]||{},s=`${this.service}/${e}`,u=this.errors[e],c=u?pI(u,o):"Error",f=`${this.serviceName}: ${c} (${s}).`;return new an(s,f,o)}}function pI(t,e){return t.replace(hI,(i,o)=>{const s=e[o];return s!=null?String(s):`<${o}?>`})}const hI=/\{\$([^}]+)}/g;function gI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wi(t,e){if(t===e)return!0;const i=Object.keys(t),o=Object.keys(e);for(const s of i){if(!o.includes(s))return!1;const u=t[s],c=e[s];if(dg(u)&&dg(c)){if(!wi(u,c))return!1}else if(u!==c)return!1}for(const s of o)if(!i.includes(s))return!1;return!0}function dg(t){return t!==null&&typeof t=="object"}/**
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
 */function $o(t){const e=[];for(const[i,o]of Object.entries(t))Array.isArray(o)?o.forEach(s=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(i)+"="+encodeURIComponent(o));return e.length?"&"+e.join("&"):""}function bo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[s,u]=o.split("=");e[decodeURIComponent(s)]=decodeURIComponent(u)}}),e}function Io(t){const e=t.indexOf("?");if(!e)return"";const i=t.indexOf("#",e);return t.substring(e,i>0?i:void 0)}function mI(t,e){const i=new vI(t,e);return i.subscribe.bind(i)}class vI{constructor(e,i){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=i,this.task.then(()=>{e(this)}).catch(o=>{this.error(o)})}next(e){this.forEachObserver(i=>{i.next(e)})}error(e){this.forEachObserver(i=>{i.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,i,o){let s;if(e===void 0&&i===void 0&&o===void 0)throw new Error("Missing Observer.");yI(e,["next","error","complete"])?s=e:s={next:e,error:i,complete:o},s.next===void 0&&(s.next=cc),s.error===void 0&&(s.error=cc),s.complete===void 0&&(s.complete=cc);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let i=0;i<this.observers.length;i++)this.sendOne(i,e)}sendOne(e,i){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{i(this.observers[e])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yI(t,e){if(typeof t!="object"||t===null)return!1;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}function cc(){}/**
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
 */function Cr(t){return t&&t._delegate?t._delegate:t}class Si{constructor(e,i,o){this.name=e,this.instanceFactory=i,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const xn="[DEFAULT]";/**
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
 */let wI=class{constructor(e,i){this.name=e,this.container=i,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const i=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(i)){const o=new iI;if(this.instancesDeferred.set(i,o),this.isInitialized(i)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:i});s&&o.resolve(s)}catch{}}return this.instancesDeferred.get(i).promise}getImmediate(e){var i;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(i=e==null?void 0:e.optional)!==null&&i!==void 0?i:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(u){if(s)return null;throw u}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bI(e))try{this.getOrInitializeService({instanceIdentifier:xn})}catch{}for(const[i,o]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(i);try{const u=this.getOrInitializeService({instanceIdentifier:s});o.resolve(u)}catch{}}}}clearInstance(e=xn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...e.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=xn){return this.instances.has(e)}getOptions(e=xn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:i={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:o,options:i});for(const[u,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(u);o===f&&c.resolve(s)}return s}onInit(e,i){var o;const s=this.normalizeInstanceIdentifier(i),u=(o=this.onInitCallbacks.get(s))!==null&&o!==void 0?o:new Set;u.add(e),this.onInitCallbacks.set(s,u);const c=this.instances.get(s);return c&&e(c,s),()=>{u.delete(e)}}invokeOnInitCallbacks(e,i){const o=this.onInitCallbacks.get(i);if(o)for(const s of o)try{s(e,i)}catch{}}getOrInitializeService({instanceIdentifier:e,options:i={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:SI(e),options:i}),this.instances.set(e,o),this.instancesOptions.set(e,i),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=xn){return this.component?this.component.multipleInstances?e:xn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function SI(t){return t===xn?void 0:t}function bI(t){return t.instantiationMode==="EAGER"}/**
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
 */class II{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const i=this.getProvider(e.name);if(i.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);i.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const i=new wI(e,this);return this.providers.set(e,i),i}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Oe||(Oe={}));const EI={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},CI=Oe.INFO,xI={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},PI=(t,e,...i)=>{if(e<t.logLevel)return;const o=new Date().toISOString(),s=xI[e];if(s)console[s](`[${o}]  ${t.name}:`,...i);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fv{constructor(e){this.name=e,this._logLevel=CI,this._logHandler=PI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const _I=(t,e)=>e.some(i=>t instanceof i);let fg,pg;function kI(){return fg||(fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DI(){return pg||(pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pv=new WeakMap,Uc=new WeakMap,hv=new WeakMap,dc=new WeakMap,dd=new WeakMap;function TI(t){const e=new Promise((i,o)=>{const s=()=>{t.removeEventListener("success",u),t.removeEventListener("error",c)},u=()=>{i(Zr(t.result)),s()},c=()=>{o(t.error),s()};t.addEventListener("success",u),t.addEventListener("error",c)});return e.then(i=>{i instanceof IDBCursor&&pv.set(i,t)}).catch(()=>{}),dd.set(e,t),e}function RI(t){if(Uc.has(t))return;const e=new Promise((i,o)=>{const s=()=>{t.removeEventListener("complete",u),t.removeEventListener("error",c),t.removeEventListener("abort",c)},u=()=>{i(),s()},c=()=>{o(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",u),t.addEventListener("error",c),t.addEventListener("abort",c)});Uc.set(t,e)}let $c={get(t,e,i){if(t instanceof IDBTransaction){if(e==="done")return Uc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hv.get(t);if(e==="store")return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return Zr(t[e])},set(t,e,i){return t[e]=i,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function AI(t){$c=t($c)}function OI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...i){const o=t.call(fc(this),e,...i);return hv.set(o,e.sort?e.sort():[e]),Zr(o)}:DI().includes(t)?function(...e){return t.apply(fc(this),e),Zr(pv.get(this))}:function(...e){return Zr(t.apply(fc(this),e))}}function NI(t){return typeof t=="function"?OI(t):(t instanceof IDBTransaction&&RI(t),_I(t,kI())?new Proxy(t,$c):t)}function Zr(t){if(t instanceof IDBRequest)return TI(t);if(dc.has(t))return dc.get(t);const e=NI(t);return e!==t&&(dc.set(t,e),dd.set(e,t)),e}const fc=t=>dd.get(t);function LI(t,e,{blocked:i,upgrade:o,blocking:s,terminated:u}={}){const c=indexedDB.open(t,e),f=Zr(c);return o&&c.addEventListener("upgradeneeded",h=>{o(Zr(c.result),h.oldVersion,h.newVersion,Zr(c.transaction),h)}),i&&c.addEventListener("blocked",h=>i(h.oldVersion,h.newVersion,h)),f.then(h=>{u&&h.addEventListener("close",()=>u()),s&&h.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const MI=["get","getKey","getAll","getAllKeys","count"],BI=["put","add","delete","clear"],pc=new Map;function hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const i=e.replace(/FromIndex$/,""),o=e!==i,s=BI.includes(i);if(!(i in(o?IDBIndex:IDBObjectStore).prototype)||!(s||MI.includes(i)))return;const u=async function(c,...f){const h=this.transaction(c,s?"readwrite":"readonly");let g=h.store;return o&&(g=g.index(f.shift())),(await Promise.all([g[i](...f),s&&h.done]))[0]};return pc.set(e,u),u}AI(t=>({...t,get:(e,i,o)=>hg(e,i)||t.get(e,i,o),has:(e,i)=>!!hg(e,i)||t.has(e,i)}));/**
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
 */class FI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(i=>{if(jI(i)){const o=i.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(i=>i).join(" ")}}function jI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zc="@firebase/app",gg="0.11.4";/**
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
 */const Ir=new fv("@firebase/app"),UI="@firebase/app-compat",$I="@firebase/analytics-compat",zI="@firebase/analytics",WI="@firebase/app-check-compat",HI="@firebase/app-check",VI="@firebase/auth",GI="@firebase/auth-compat",qI="@firebase/database",KI="@firebase/data-connect",YI="@firebase/database-compat",QI="@firebase/functions",JI="@firebase/functions-compat",XI="@firebase/installations",ZI="@firebase/installations-compat",eE="@firebase/messaging",tE="@firebase/messaging-compat",rE="@firebase/performance",nE="@firebase/performance-compat",iE="@firebase/remote-config",oE="@firebase/remote-config-compat",aE="@firebase/storage",sE="@firebase/storage-compat",lE="@firebase/firestore",uE="@firebase/vertexai",cE="@firebase/firestore-compat",dE="firebase",fE="11.6.0";/**
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
 */const Wc="[DEFAULT]",pE={[zc]:"fire-core",[UI]:"fire-core-compat",[zI]:"fire-analytics",[$I]:"fire-analytics-compat",[HI]:"fire-app-check",[WI]:"fire-app-check-compat",[VI]:"fire-auth",[GI]:"fire-auth-compat",[qI]:"fire-rtdb",[KI]:"fire-data-connect",[YI]:"fire-rtdb-compat",[QI]:"fire-fn",[JI]:"fire-fn-compat",[XI]:"fire-iid",[ZI]:"fire-iid-compat",[eE]:"fire-fcm",[tE]:"fire-fcm-compat",[rE]:"fire-perf",[nE]:"fire-perf-compat",[iE]:"fire-rc",[oE]:"fire-rc-compat",[aE]:"fire-gcs",[sE]:"fire-gcs-compat",[lE]:"fire-fst",[cE]:"fire-fst-compat",[uE]:"fire-vertex","fire-js":"fire-js",[dE]:"fire-js-all"};/**
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
 */const _s=new Map,hE=new Map,Hc=new Map;function mg(t,e){try{t.container.addComponent(e)}catch(i){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function To(t){const e=t.name;if(Hc.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Hc.set(e,t);for(const i of _s.values())mg(i,t);for(const i of hE.values())mg(i,t);return!0}function gv(t,e){const i=t.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),t.container.getProvider(e)}function Kt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const gE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},en=new Uo("app","Firebase",gE);/**
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
 */class mE{constructor(e,i,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},i),this._name=i.name,this._automaticDataCollectionEnabled=i.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new Si("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw en.create("app-deleted",{appName:this._name})}}/**
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
 */const zo=fE;function mv(t,e={}){let i=t;typeof e!="object"&&(e={name:e});const o=Object.assign({name:Wc,automaticDataCollectionEnabled:!1},e),s=o.name;if(typeof s!="string"||!s)throw en.create("bad-app-name",{appName:String(s)});if(i||(i=cv()),!i)throw en.create("no-options");const u=_s.get(s);if(u){if(wi(i,u.options)&&wi(o,u.config))return u;throw en.create("duplicate-app",{appName:s})}const c=new II(s);for(const h of Hc.values())c.addComponent(h);const f=new mE(i,o,c);return _s.set(s,f),f}function vE(t=Wc){const e=_s.get(t);if(!e&&t===Wc&&cv())return mv();if(!e)throw en.create("no-app",{appName:t});return e}function di(t,e,i){var o;let s=(o=pE[t])!==null&&o!==void 0?o:t;i&&(s+=`-${i}`);const u=s.match(/\s|\//),c=e.match(/\s|\//);if(u||c){const f=[`Unable to register library "${s}" with version "${e}":`];u&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),u&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(f.join(" "));return}To(new Si(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yE="firebase-heartbeat-database",wE=1,Ro="firebase-heartbeat-store";let hc=null;function vv(){return hc||(hc=LI(yE,wE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ro)}catch(i){console.warn(i)}}}}).catch(t=>{throw en.create("idb-open",{originalErrorMessage:t.message})})),hc}async function SE(t){try{const i=(await vv()).transaction(Ro),o=await i.objectStore(Ro).get(yv(t));return await i.done,o}catch(e){if(e instanceof an)Ir.warn(e.message);else{const i=en.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(i.message)}}}async function vg(t,e){try{const o=(await vv()).transaction(Ro,"readwrite");await o.objectStore(Ro).put(e,yv(t)),await o.done}catch(i){if(i instanceof an)Ir.warn(i.message);else{const o=en.create("idb-set",{originalErrorMessage:i==null?void 0:i.message});Ir.warn(o.message)}}}function yv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bE=1024,IE=30;class EE{constructor(e){this.container=e,this._heartbeatsCache=null;const i=this.container.getProvider("app").getImmediate();this._storage=new xE(i),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,i;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=yg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((i=this._heartbeatsCache)===null||i===void 0?void 0:i.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(c=>c.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:s}),this._heartbeatsCache.heartbeats.length>IE){const c=PE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){Ir.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const i=yg(),{heartbeatsToSend:o,unsentEntries:s}=CE(this._heartbeatsCache.heartbeats),u=lv(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=i,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(i){return Ir.warn(i),""}}}function yg(){return new Date().toISOString().substring(0,10)}function CE(t,e=bE){const i=[];let o=t.slice();for(const s of t){const u=i.find(c=>c.agent===s.agent);if(u){if(u.dates.push(s.date),wg(i)>e){u.dates.pop();break}}else if(i.push({agent:s.agent,dates:[s.date]}),wg(i)>e){i.pop();break}o=o.slice(1)}return{heartbeatsToSend:i,unsentEntries:o}}class xE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cI()?dI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const i=await SE(this.app);return i!=null&&i.heartbeats?i:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var i;if(await this._canUseIndexedDBPromise){const s=await this.read();return vg(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var i;if(await this._canUseIndexedDBPromise){const s=await this.read();return vg(this.app,{lastSentHeartbeatDate:(i=e.lastSentHeartbeatDate)!==null&&i!==void 0?i:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wg(t){return lv(JSON.stringify({version:2,heartbeats:t})).length}function PE(t){if(t.length===0)return-1;let e=0,i=t[0].date;for(let o=1;o<t.length;o++)t[o].date<i&&(i=t[o].date,e=o);return e}/**
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
 */function _E(t){To(new Si("platform-logger",e=>new FI(e),"PRIVATE")),To(new Si("heartbeat",e=>new EE(e),"PRIVATE")),di(zc,gg,t),di(zc,gg,"esm2017"),di("fire-js","")}_E("");function wv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kE=wv,Sv=new Uo("auth","Firebase",wv());/**
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
 */const ks=new fv("@firebase/auth");function DE(t,...e){ks.logLevel<=Oe.WARN&&ks.warn(`Auth (${zo}): ${t}`,...e)}function vs(t,...e){ks.logLevel<=Oe.ERROR&&ks.error(`Auth (${zo}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw fd(t,...e)}function or(t,...e){return fd(t,...e)}function bv(t,e,i){const o=Object.assign(Object.assign({},kE()),{[e]:i});return new Uo("auth","Firebase",o).create(e,{appName:t.name})}function br(t){return bv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fd(t,...e){if(typeof t!="string"){const i=e[0],o=[...e.slice(1)];return o[0]&&(o[0].appName=t.name),t._errorFactory.create(i,...o)}return Sv.create(t,...e)}function se(t,e,...i){if(!t)throw fd(e,...i)}function yr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vs(e),new Error(e)}function Er(t,e){t||yr(e)}/**
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
 */function Vc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TE(){return Sg()==="http:"||Sg()==="https:"}function Sg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function RE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TE()||sI()||"connection"in navigator)?navigator.onLine:!0}function AE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wo{constructor(e,i){this.shortDelay=e,this.longDelay=i,Er(i>e,"Short delay should be less than long delay!"),this.isMobile=oI()||lI()}get(){return RE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pd(t,e){Er(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}/**
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
 */class Iv{static initialize(e,i,o){this.fetchImpl=e,i&&(this.headersImpl=i),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const OE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LE=new Wo(3e4,6e4);function sn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ln(t,e,i,o,s={}){return Ev(t,s,async()=>{let u={},c={};o&&(e==="GET"?c=o:u={body:JSON.stringify(o)});const f=$o(Object.assign({key:t.config.apiKey},c)).slice(1),h=await t._getAdditionalHeaders();h["Content-Type"]="application/json",t.languageCode&&(h["X-Firebase-Locale"]=t.languageCode);const g=Object.assign({method:e,headers:h},u);return aI()||(g.referrerPolicy="no-referrer"),Iv.fetch()(await Cv(t,t.config.apiHost,i,f),g)})}async function Ev(t,e,i){t._canInitEmulator=!1;const o=Object.assign(Object.assign({},OE),e);try{const s=new BE(t),u=await Promise.race([i(),s.promise]);s.clearNetworkTimeout();const c=await u.json();if("needConfirmation"in c)throw ss(t,"account-exists-with-different-credential",c);if(u.ok&&!("errorMessage"in c))return c;{const f=u.ok?c.errorMessage:c.error.message,[h,g]=f.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ss(t,"credential-already-in-use",c);if(h==="EMAIL_EXISTS")throw ss(t,"email-already-in-use",c);if(h==="USER_DISABLED")throw ss(t,"user-disabled",c);const w=o[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw bv(t,w,g);Xt(t,w)}}catch(s){if(s instanceof an)throw s;Xt(t,"network-request-failed",{message:String(s)})}}async function Ho(t,e,i,o,s={}){const u=await ln(t,e,i,o,s);return"mfaPendingCredential"in u&&Xt(t,"multi-factor-auth-required",{_serverResponse:u}),u}async function Cv(t,e,i,o){const s=`${e}${i}?${o}`,u=t,c=u.config.emulator?pd(t.config,s):`${t.config.apiScheme}://${s}`;return NE.includes(i)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(c).toString():c}function ME(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((i,o)=>{this.timer=setTimeout(()=>o(or(this.auth,"network-request-failed")),LE.get())})}}function ss(t,e,i){const o={appName:t.name};i.email&&(o.email=i.email),i.phoneNumber&&(o.phoneNumber=i.phoneNumber);const s=or(t,e,o);return s.customData._tokenResponse=i,s}function bg(t){return t!==void 0&&t.enterprise!==void 0}class FE{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const i of this.recaptchaEnforcementState)if(i.provider&&i.provider===e)return ME(i.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function jE(t,e){return ln(t,"GET","/v2/recaptchaConfig",sn(t,e))}/**
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
 */async function UE(t,e){return ln(t,"POST","/v1/accounts:delete",e)}async function Ds(t,e){return ln(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Co(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $E(t,e=!1){const i=Cr(t),o=await i.getIdToken(e),s=hd(o);se(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");const u=typeof s.firebase=="object"?s.firebase:void 0,c=u==null?void 0:u.sign_in_provider;return{claims:s,token:o,authTime:Co(gc(s.auth_time)),issuedAtTime:Co(gc(s.iat)),expirationTime:Co(gc(s.exp)),signInProvider:c||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function gc(t){return Number(t)*1e3}function hd(t){const[e,i,o]=t.split(".");if(e===void 0||i===void 0||o===void 0)return vs("JWT malformed, contained fewer than 3 sections"),null;try{const s=uv(i);return s?JSON.parse(s):(vs("Failed to decode base64 JWT payload"),null)}catch(s){return vs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ig(t){const e=hd(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ao(t,e,i=!1){if(i)return e;try{return await e}catch(o){throw o instanceof an&&zE(o)&&t.auth.currentUser===t&&await t.auth.signOut(),o}}function zE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class WE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var i;if(e){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const s=((i=this.user.stsTokenManager.expirationTime)!==null&&i!==void 0?i:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const i=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},i)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gc{constructor(e,i){this.createdAt=e,this.lastLoginAt=i,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ts(t){var e;const i=t.auth,o=await t.getIdToken(),s=await Ao(t,Ds(i,{idToken:o}));se(s==null?void 0:s.users.length,i,"internal-error");const u=s.users[0];t._notifyReloadListener(u);const c=!((e=u.providerUserInfo)===null||e===void 0)&&e.length?xv(u.providerUserInfo):[],f=VE(t.providerData,c),h=t.isAnonymous,g=!(t.email&&u.passwordHash)&&!(f!=null&&f.length),w=h?g:!1,m={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:f,metadata:new Gc(u.createdAt,u.lastLoginAt),isAnonymous:w};Object.assign(t,m)}async function HE(t){const e=Cr(t);await Ts(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VE(t,e){return[...t.filter(o=>!e.some(s=>s.providerId===o.providerId)),...e]}function xv(t){return t.map(e=>{var{providerId:i}=e,o=nd(e,["providerId"]);return{providerId:i,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
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
 */async function GE(t,e){const i=await Ev(t,{},async()=>{const o=$o({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:u}=t.config,c=await Cv(t,s,"/v1/token",`key=${u}`),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",Iv.fetch()(c,{method:"POST",headers:f,body:o})});return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}async function qE(t,e){return ln(t,"POST","/v2/accounts:revokeToken",sn(t,e))}/**
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
 */class fi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const i="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,i)}updateFromIdToken(e){se(e.length!==0,"internal-error");const i=Ig(e);this.updateTokensAndExpiration(e,null,i)}async getToken(e,i=!1){return!i&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,i){const{accessToken:o,refreshToken:s,expiresIn:u}=await GE(e,i);this.updateTokensAndExpiration(o,s,Number(u))}updateTokensAndExpiration(e,i,o){this.refreshToken=i||null,this.accessToken=e||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(e,i){const{refreshToken:o,accessToken:s,expirationTime:u}=i,c=new fi;return o&&(se(typeof o=="string","internal-error",{appName:e}),c.refreshToken=o),s&&(se(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),u&&(se(typeof u=="number","internal-error",{appName:e}),c.expirationTime=u),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fi,this.toJSON())}_performRefresh(){return yr("not implemented")}}/**
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
 */function Gr(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:i,auth:o,stsTokenManager:s}=e,u=nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new WE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=i,this.auth=o,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new Gc(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(e){const i=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return se(i,this.auth,"internal-error"),this.accessToken!==i&&(this.accessToken=i,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),i}getIdTokenResult(e){return $E(this,e)}reload(){return HE(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(i=>Object.assign({},i)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const i=new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return i.metadata._copy(this.metadata),i}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,i=!1){let o=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),o=!0),i&&await Ts(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kt(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await Ao(this,UE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,i){var o,s,u,c,f,h,g,w;const m=(o=i.displayName)!==null&&o!==void 0?o:void 0,y=(s=i.email)!==null&&s!==void 0?s:void 0,S=(u=i.phoneNumber)!==null&&u!==void 0?u:void 0,I=(c=i.photoURL)!==null&&c!==void 0?c:void 0,P=(f=i.tenantId)!==null&&f!==void 0?f:void 0,k=(h=i._redirectEventId)!==null&&h!==void 0?h:void 0,T=(g=i.createdAt)!==null&&g!==void 0?g:void 0,O=(w=i.lastLoginAt)!==null&&w!==void 0?w:void 0,{uid:L,emailVerified:M,isAnonymous:R,providerData:F,stsTokenManager:z}=i;se(L&&z,e,"internal-error");const le=fi.fromJSON(this.name,z);se(typeof L=="string",e,"internal-error"),Gr(m,e.name),Gr(y,e.name),se(typeof M=="boolean",e,"internal-error"),se(typeof R=="boolean",e,"internal-error"),Gr(S,e.name),Gr(I,e.name),Gr(P,e.name),Gr(k,e.name),Gr(T,e.name),Gr(O,e.name);const ne=new Yt({uid:L,auth:e,email:y,emailVerified:M,displayName:m,isAnonymous:R,photoURL:I,phoneNumber:S,tenantId:P,stsTokenManager:le,createdAt:T,lastLoginAt:O});return F&&Array.isArray(F)&&(ne.providerData=F.map(ve=>Object.assign({},ve))),k&&(ne._redirectEventId=k),ne}static async _fromIdTokenResponse(e,i,o=!1){const s=new fi;s.updateFromServerResponse(i);const u=new Yt({uid:i.localId,auth:e,stsTokenManager:s,isAnonymous:o});return await Ts(u),u}static async _fromGetAccountInfoResponse(e,i,o){const s=i.users[0];se(s.localId!==void 0,"internal-error");const u=s.providerUserInfo!==void 0?xv(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(u!=null&&u.length),f=new fi;f.updateFromIdToken(o);const h=new Yt({uid:s.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Gc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(u!=null&&u.length)};return Object.assign(h,g),h}}/**
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
 */const Eg=new Map;function wr(t){Er(t instanceof Function,"Expected a class definition");let e=Eg.get(t);return e?(Er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Eg.set(t,e),e)}/**
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
 */class Pv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,i){this.storage[e]=i}async _get(e){const i=this.storage[e];return i===void 0?null:i}async _remove(e){delete this.storage[e]}_addListener(e,i){}_removeListener(e,i){}}Pv.type="NONE";const Cg=Pv;/**
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
 */function ys(t,e,i){return`firebase:${t}:${e}:${i}`}class pi{constructor(e,i,o){this.persistence=e,this.auth=i,this.userKey=o;const{config:s,name:u}=this.auth;this.fullUserKey=ys(this.userKey,s.apiKey,u),this.fullPersistenceKey=ys("persistence",s.apiKey,u),this.boundEventHandler=i._onStorageEvent.bind(i),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const i=await Ds(this.auth,{idToken:e}).catch(()=>{});return i?Yt._fromGetAccountInfoResponse(this.auth,i,e):null}return Yt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const i=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,i)return this.setCurrentUser(i)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,i,o="authUser"){if(!i.length)return new pi(wr(Cg),e,o);const s=(await Promise.all(i.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=s[0]||wr(Cg);const c=ys(o,e.config.apiKey,e.name);let f=null;for(const g of i)try{const w=await g._get(c);if(w){let m;if(typeof w=="string"){const y=await Ds(e,{idToken:w}).catch(()=>{});if(!y)break;m=await Yt._fromGetAccountInfoResponse(e,y,w)}else m=Yt._fromJSON(e,w);g!==u&&(f=m),u=g;break}}catch{}const h=s.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!h.length?new pi(u,e,o):(u=h[0],f&&await u._set(c,f.toJSON()),await Promise.all(i.map(async g=>{if(g!==u)try{await g._remove(c)}catch{}})),new pi(u,e,o))}}/**
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
 */function xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_v(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Av(e))return"Blackberry";if(Ov(e))return"Webos";if(kv(e))return"Safari";if((e.includes("chrome/")||Dv(e))&&!e.includes("edge/"))return"Chrome";if(Rv(e))return"Android";{const i=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=t.match(i);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function _v(t=pt()){return/firefox\//i.test(t)}function kv(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Dv(t=pt()){return/crios\//i.test(t)}function Tv(t=pt()){return/iemobile/i.test(t)}function Rv(t=pt()){return/android/i.test(t)}function Av(t=pt()){return/blackberry/i.test(t)}function Ov(t=pt()){return/webos/i.test(t)}function gd(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KE(t=pt()){var e;return gd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YE(){return uI()&&document.documentMode===10}function Nv(t=pt()){return gd(t)||Rv(t)||Ov(t)||Av(t)||/windows phone/i.test(t)||Tv(t)}/**
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
 */function Lv(t,e=[]){let i;switch(t){case"Browser":i=xg(pt());break;case"Worker":i=`${xg(pt())}-${t}`;break;default:i=t}const o=e.length?e.join(","):"FirebaseCore-web";return`${i}/JsCore/${zo}/${o}`}/**
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
 */class QE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,i){const o=u=>new Promise((c,f)=>{try{const h=e(u);c(h)}catch(h){f(h)}});o.onAbort=i,this.queue.push(o);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const i=[];try{for(const o of this.queue)await o(e),o.onAbort&&i.push(o.onAbort)}catch(o){i.reverse();for(const s of i)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o==null?void 0:o.message})}}}/**
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
 */async function JE(t,e={}){return ln(t,"GET","/v2/passwordPolicy",sn(t,e))}/**
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
 */const XE=6;class ZE{constructor(e){var i,o,s,u;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(i=c.minPasswordLength)!==null&&i!==void 0?i:XE,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(o=e.allowedNonAlphanumericCharacters)===null||o===void 0?void 0:o.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(u=e.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var i,o,s,u,c,f;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,h),this.validatePasswordCharacterOptions(e,h),h.isValid&&(h.isValid=(i=h.meetsMinPasswordLength)!==null&&i!==void 0?i:!0),h.isValid&&(h.isValid=(o=h.meetsMaxPasswordLength)!==null&&o!==void 0?o:!0),h.isValid&&(h.isValid=(s=h.containsLowercaseLetter)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(u=h.containsUppercaseLetter)!==null&&u!==void 0?u:!0),h.isValid&&(h.isValid=(c=h.containsNumericCharacter)!==null&&c!==void 0?c:!0),h.isValid&&(h.isValid=(f=h.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),h}validatePasswordLengthOptions(e,i){const o=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;o&&(i.meetsMinPasswordLength=e.length>=o),s&&(i.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,i){this.updatePasswordCharacterOptionsStatuses(i,!1,!1,!1,!1);let o;for(let s=0;s<e.length;s++)o=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(i,o>="a"&&o<="z",o>="A"&&o<="Z",o>="0"&&o<="9",this.allowedNonAlphanumericCharacters.includes(o))}updatePasswordCharacterOptionsStatuses(e,i,o,s,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=i)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=o)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class e1{constructor(e,i,o,s){this.app=e,this.heartbeatServiceProvider=i,this.appCheckServiceProvider=o,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pg(this),this.idTokenSubscription=new Pg(this),this.beforeStateQueue=new QE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,i){return i&&(this._popupRedirectResolver=wr(i)),this._initializationPromise=this.queue(async()=>{var o,s,u;if(!this._deleted&&(this.persistenceManager=await pi.create(this,e),(o=this._resolvePersistenceManagerAvailable)===null||o===void 0||o.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(i),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const i=await Ds(this,{idToken:e}),o=await Yt._fromGetAccountInfoResponse(this,i,e);await this.directlySetCurrentUser(o)}catch(i){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",i),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Kt(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const o=await this.assertedPersistence.getCurrentUser();let s=o,u=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId,f=s==null?void 0:s._redirectEventId,h=await this.tryRedirectSignIn(e);(!c||c===f)&&(h!=null&&h.user)&&(s=h.user,u=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let i=null;try{i=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return i}async reloadAndSetCurrentUserOrClear(e){try{await Ts(e)}catch(i){if((i==null?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kt(this.app))return Promise.reject(br(this));const i=e?Cr(e):null;return i&&se(i.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(i&&i._clone(this))}async _updateCurrentUser(e,i=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),i||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kt(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kt(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const i=this._getPasswordPolicyInternal();return i.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):i.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JE(this),i=new ZE(e);this.tenantId===null?this._projectPasswordPolicy=i:this._tenantPasswordPolicies[this.tenantId]=i}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Uo("auth","Firebase",e())}onAuthStateChanged(e,i,o){return this.registerStateListener(this.authStateSubscription,e,i,o)}beforeAuthStateChanged(e,i){return this.beforeStateQueue.pushCallback(e,i)}onIdTokenChanged(e,i,o){return this.registerStateListener(this.idTokenSubscription,e,i,o)}authStateReady(){return new Promise((e,i)=>{if(this.currentUser)e();else{const o=this.onAuthStateChanged(()=>{o(),e()},i)}})}async revokeAccessToken(e){if(this.currentUser){const i=await this.currentUser.getIdToken(),o={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:i};this.tenantId!=null&&(o.tenantId=this.tenantId),await qE(this,o)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,i){const o=await this.getOrInitRedirectPersistenceManager(i);return e===null?o.removeCurrentUser():o.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const i=e&&wr(e)||this._popupRedirectResolver;se(i,this,"argument-error"),this.redirectPersistenceManager=await pi.create(this,[wr(i._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var i,o;return this._isInitialized&&await this.queue(async()=>{}),((i=this._currentUser)===null||i===void 0?void 0:i._redirectEventId)===e?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,i;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(i=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&i!==void 0?i:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,i,o,s){if(this._deleted)return()=>{};const u=typeof i=="function"?i:i.next.bind(i);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(f,this,"internal-error"),f.then(()=>{c||u(this.currentUser)}),typeof i=="function"){const h=e.addObserver(i,o,s);return()=>{c=!0,h()}}else{const h=e.addObserver(i);return()=>{c=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const i={"X-Client-Version":this.clientVersion};this.app.options.appId&&(i["X-Firebase-gmpid"]=this.app.options.appId);const o=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());o&&(i["X-Firebase-Client"]=o);const s=await this._getAppCheckToken();return s&&(i["X-Firebase-AppCheck"]=s),i}async _getAppCheckToken(){var e;if(Kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const i=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return i!=null&&i.error&&DE(`Error while retrieving App Check token: ${i.error}`),i==null?void 0:i.token}}function Nn(t){return Cr(t)}class Pg{constructor(e){this.auth=e,this.observer=null,this.addObserver=mI(i=>this.observer=i)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function t1(t){Qs=t}function Mv(t){return Qs.loadJS(t)}function r1(){return Qs.recaptchaEnterpriseScript}function n1(){return Qs.gapiScript}function i1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class o1{constructor(){this.enterprise=new a1}ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}class a1{ready(e){e()}execute(e,i){return Promise.resolve("token")}render(e,i){return""}}const s1="recaptcha-enterprise",Bv="NO_RECAPTCHA";class l1{constructor(e){this.type=s1,this.auth=Nn(e)}async verify(e="verify",i=!1){async function o(u){if(!i){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(c,f)=>{jE(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new FE(h);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,c(g.siteKey)}}).catch(h=>{f(h)})})}function s(u,c,f){const h=window.grecaptcha;bg(h)?h.enterprise.ready(()=>{h.enterprise.execute(u,{action:e}).then(g=>{c(g)}).catch(()=>{c(Bv)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new o1().execute("siteKey",{action:"verify"}):new Promise((u,c)=>{o(this.auth).then(f=>{if(!i&&bg(window.grecaptcha))s(f,u,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let h=r1();h.length!==0&&(h+=f),Mv(h).then(()=>{s(f,u,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function _g(t,e,i,o=!1,s=!1){const u=new l1(t);let c;if(s)c=Bv;else try{c=await u.verify(i)}catch{c=await u.verify(i,!0)}const f=Object.assign({},e);if(i==="mfaSmsEnrollment"||i==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const h=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const h=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return o?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function qc(t,e,i,o,s){var u;if(!((u=t._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await _g(t,e,i,i==="getOobCode");return o(t,c)}else return o(t,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${i} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await _g(t,e,i,i==="getOobCode");return o(t,f)}else return Promise.reject(c)})}/**
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
 */function u1(t,e){const i=gv(t,"auth");if(i.isInitialized()){const s=i.getImmediate(),u=i.getOptions();if(wi(u,e??{}))return s;Xt(s,"already-initialized")}return i.initialize({options:e})}function c1(t,e){const i=(e==null?void 0:e.persistence)||[],o=(Array.isArray(i)?i:[i]).map(wr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(o,e==null?void 0:e.popupRedirectResolver)}function d1(t,e,i){const o=Nn(t);se(/^https?:\/\//.test(e),o,"invalid-emulator-scheme");const s=!1,u=Fv(e),{host:c,port:f}=f1(e),h=f===null?"":`:${f}`,g={url:`${u}//${c}${h}/`},w=Object.freeze({host:c,port:f,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!o._canInitEmulator){se(o.config.emulator&&o.emulatorConfig,o,"emulator-config-failed"),se(wi(g,o.config.emulator)&&wi(w,o.emulatorConfig),o,"emulator-config-failed");return}o.config.emulator=g,o.emulatorConfig=w,o.settings.appVerificationDisabledForTesting=!0,p1()}function Fv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function f1(t){const e=Fv(t),i=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!i)return{host:"",port:null};const o=i[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(o);if(s){const u=s[1];return{host:u,port:kg(o.substr(u.length+1))}}else{const[u,c]=o.split(":");return{host:u,port:kg(c)}}}function kg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function p1(){function t(){const e=document.createElement("p"),i=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",i.position="fixed",i.width="100%",i.backgroundColor="#ffffff",i.border=".1em solid #000000",i.color="#b50000",i.bottom="0px",i.left="0px",i.margin="0px",i.zIndex="10000",i.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class md{constructor(e,i){this.providerId=e,this.signInMethod=i}toJSON(){return yr("not implemented")}_getIdTokenResponse(e){return yr("not implemented")}_linkToIdToken(e,i){return yr("not implemented")}_getReauthenticationResolver(e){return yr("not implemented")}}async function h1(t,e){return ln(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function g1(t,e){return Ho(t,"POST","/v1/accounts:signInWithPassword",sn(t,e))}/**
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
 */async function m1(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",sn(t,e))}async function v1(t,e){return Ho(t,"POST","/v1/accounts:signInWithEmailLink",sn(t,e))}/**
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
 */class Oo extends md{constructor(e,i,o,s=null){super("password",o),this._email=e,this._password=i,this._tenantId=s}static _fromEmailAndPassword(e,i){return new Oo(e,i,"password")}static _fromEmailAndCode(e,i,o=null){return new Oo(e,i,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e;if(i!=null&&i.email&&(i!=null&&i.password)){if(i.signInMethod==="password")return this._fromEmailAndPassword(i.email,i.password);if(i.signInMethod==="emailLink")return this._fromEmailAndCode(i.email,i.password,i.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qc(e,i,"signInWithPassword",g1);case"emailLink":return m1(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,i){switch(this.signInMethod){case"password":const o={idToken:i,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qc(e,o,"signUpPassword",h1);case"emailLink":return v1(e,{idToken:i,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hi(t,e){return Ho(t,"POST","/v1/accounts:signInWithIdp",sn(t,e))}/**
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
 */const y1="http://localhost";class Rn extends md{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const i=new Rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(i.idToken=e.idToken),e.accessToken&&(i.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(i.nonce=e.nonce),e.pendingToken&&(i.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(i.accessToken=e.oauthToken,i.secret=e.oauthTokenSecret):Xt("argument-error"),i}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const i=typeof e=="string"?JSON.parse(e):e,{providerId:o,signInMethod:s}=i,u=nd(i,["providerId","signInMethod"]);if(!o||!s)return null;const c=new Rn(o,s);return c.idToken=u.idToken||void 0,c.accessToken=u.accessToken||void 0,c.secret=u.secret,c.nonce=u.nonce,c.pendingToken=u.pendingToken||null,c}_getIdTokenResponse(e){const i=this.buildRequest();return hi(e,i)}_linkToIdToken(e,i){const o=this.buildRequest();return o.idToken=i,hi(e,o)}_getReauthenticationResolver(e){const i=this.buildRequest();return i.autoCreate=!1,hi(e,i)}buildRequest(){const e={requestUri:y1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const i={};this.idToken&&(i.id_token=this.idToken),this.accessToken&&(i.access_token=this.accessToken),this.secret&&(i.oauth_token_secret=this.secret),i.providerId=this.providerId,this.nonce&&!this.pendingToken&&(i.nonce=this.nonce),e.postBody=$o(i)}return e}}/**
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
 */function w1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function S1(t){const e=bo(Io(t)).link,i=e?bo(Io(e)).deep_link_id:null,o=bo(Io(t)).deep_link_id;return(o?bo(Io(o)).link:null)||o||i||e||t}class vd{constructor(e){var i,o,s,u,c,f;const h=bo(Io(e)),g=(i=h.apiKey)!==null&&i!==void 0?i:null,w=(o=h.oobCode)!==null&&o!==void 0?o:null,m=w1((s=h.mode)!==null&&s!==void 0?s:null);se(g&&w&&m,"argument-error"),this.apiKey=g,this.operation=m,this.code=w,this.continueUrl=(u=h.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(c=h.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=h.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const i=S1(e);try{return new vd(i)}catch{return null}}}/**
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
 */class Pi{constructor(){this.providerId=Pi.PROVIDER_ID}static credential(e,i){return Oo._fromEmailAndPassword(e,i)}static credentialWithLink(e,i){const o=vd.parseLink(i);return se(o,"argument-error"),Oo._fromEmailAndCode(e,o.code,o.tenantId)}}Pi.PROVIDER_ID="password";Pi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Vo extends jv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends Vo{constructor(){super("facebook.com")}static credential(e){return Rn._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class Yr extends Vo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,i){return Rn._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:i})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:i,oauthAccessToken:o}=e;if(!i&&!o)return null;try{return Yr.credential(i,o)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
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
 */class Qr extends Vo{constructor(){super("github.com")}static credential(e){return Rn._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.GITHUB_SIGN_IN_METHOD="github.com";Qr.PROVIDER_ID="github.com";/**
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
 */class Jr extends Vo{constructor(){super("twitter.com")}static credential(e,i){return Rn._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:i})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:i,oauthTokenSecret:o}=e;if(!i||!o)return null;try{return Jr.credential(i,o)}catch{return null}}}Jr.TWITTER_SIGN_IN_METHOD="twitter.com";Jr.PROVIDER_ID="twitter.com";/**
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
 */async function b1(t,e){return Ho(t,"POST","/v1/accounts:signUp",sn(t,e))}/**
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
 */class An{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,i,o,s=!1){const u=await Yt._fromIdTokenResponse(e,o,s),c=Dg(o);return new An({user:u,providerId:c,_tokenResponse:o,operationType:i})}static async _forOperation(e,i,o){await e._updateTokensIfNecessary(o,!0);const s=Dg(o);return new An({user:e,providerId:s,_tokenResponse:o,operationType:i})}}function Dg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rs extends an{constructor(e,i,o,s){var u;super(i.code,i.message),this.operationType=o,this.user=s,Object.setPrototypeOf(this,Rs.prototype),this.customData={appName:e.name,tenantId:(u=e.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:i.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(e,i,o,s){return new Rs(e,i,o,s)}}function Uv(t,e,i,o){return(e==="reauthenticate"?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Rs._fromErrorAndOperation(t,u,e,o):u})}async function I1(t,e,i=!1){const o=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return An._forOperation(t,"link",o)}/**
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
 */async function E1(t,e,i=!1){const{auth:o}=t;if(Kt(o.app))return Promise.reject(br(o));const s="reauthenticate";try{const u=await Ao(t,Uv(o,s,e,t),i);se(u.idToken,o,"internal-error");const c=hd(u.idToken);se(c,o,"internal-error");const{sub:f}=c;return se(t.uid===f,o,"user-mismatch"),An._forOperation(t,s,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Xt(o,"user-mismatch"),u}}/**
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
 */async function $v(t,e,i=!1){if(Kt(t.app))return Promise.reject(br(t));const o="signIn",s=await Uv(t,o,e),u=await An._fromIdTokenResponse(t,o,s);return i||await t._updateCurrentUser(u.user),u}async function C1(t,e){return $v(Nn(t),e)}/**
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
 */async function zv(t){const e=Nn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function x1(t,e,i){if(Kt(t.app))return Promise.reject(br(t));const o=Nn(t),c=await qc(o,{returnSecureToken:!0,email:e,password:i,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",b1).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&zv(t),h}),f=await An._fromIdTokenResponse(o,"signIn",c);return await o._updateCurrentUser(f.user),f}function P1(t,e,i){return Kt(t.app)?Promise.reject(br(t)):C1(Cr(t),Pi.credential(e,i)).catch(async o=>{throw o.code==="auth/password-does-not-meet-requirements"&&zv(t),o})}function _1(t,e,i,o){return Cr(t).onIdTokenChanged(e,i,o)}function k1(t,e,i){return Cr(t).beforeAuthStateChanged(e,i)}function D1(t,e,i,o){return Cr(t).onAuthStateChanged(e,i,o)}function T1(t){return Cr(t).signOut()}const As="__sak";/**
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
 */class Wv{constructor(e,i){this.storageRetriever=e,this.type=i}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,i){return this.storage.setItem(e,JSON.stringify(i)),Promise.resolve()}_get(e){const i=this.storage.getItem(e);return Promise.resolve(i?JSON.parse(i):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const R1=1e3,A1=10;class Hv extends Wv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,i)=>this.onStorageEvent(e,i),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Nv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const i of Object.keys(this.listeners)){const o=this.storage.getItem(i),s=this.localCache[i];o!==s&&e(i,s,o)}}onStorageEvent(e,i=!1){if(!e.key){this.forAllChangedKeys((c,f,h)=>{this.notifyListeners(c,h)});return}const o=e.key;i?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(o);!i&&this.localCache[o]===c||this.notifyListeners(o,c)},u=this.storage.getItem(o);YE()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,A1):s()}notifyListeners(e,i){this.localCache[e]=i;const o=this.listeners[e];if(o)for(const s of Array.from(o))s(i&&JSON.parse(i))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,i,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:i,newValue:o}),!0)})},R1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,i){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,i){await super._set(e,i),this.localCache[e]=JSON.stringify(i)}async _get(e){const i=await super._get(e);return this.localCache[e]=JSON.stringify(i),i}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hv.type="LOCAL";const O1=Hv;/**
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
 */class Vv extends Wv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,i){}_removeListener(e,i){}}Vv.type="SESSION";const Gv=Vv;/**
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
 */function N1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(i){return{fulfilled:!1,reason:i}}}))}/**
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
 */class Js{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const i=this.receivers.find(s=>s.isListeningto(e));if(i)return i;const o=new Js(e);return this.receivers.push(o),o}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const i=e,{eventId:o,eventType:s,data:u}=i.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;i.ports[0].postMessage({status:"ack",eventId:o,eventType:s});const f=Array.from(c).map(async g=>g(i.origin,u)),h=await N1(f);i.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:h})}_subscribe(e,i){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(i)}_unsubscribe(e,i){this.handlersMap[e]&&i&&this.handlersMap[e].delete(i),(!i||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Js.receivers=[];/**
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
 */function yd(t="",e=10){let i="";for(let o=0;o<e;o++)i+=Math.floor(Math.random()*10);return t+i}/**
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
 */class L1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,i,o=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let u,c;return new Promise((f,h)=>{const g=yd("",20);s.port1.start();const w=setTimeout(()=>{h(new Error("unsupported_event"))},o);c={messageChannel:s,onMessage(m){const y=m;if(y.data.eventId===g)switch(y.data.status){case"ack":clearTimeout(w),u=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),f(y.data.response);break;default:clearTimeout(w),clearTimeout(u),h(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:i},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function ar(){return window}function M1(t){ar().location.href=t}/**
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
 */function qv(){return typeof ar().WorkerGlobalScope<"u"&&typeof ar().importScripts=="function"}async function B1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function F1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function j1(){return qv()?self:null}/**
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
 */const Kv="firebaseLocalStorageDb",U1=1,Os="firebaseLocalStorage",Yv="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,i)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{i(this.request.error)})})}}function Xs(t,e){return t.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function $1(){const t=indexedDB.deleteDatabase(Kv);return new Go(t).toPromise()}function Kc(){const t=indexedDB.open(Kv,U1);return new Promise((e,i)=>{t.addEventListener("error",()=>{i(t.error)}),t.addEventListener("upgradeneeded",()=>{const o=t.result;try{o.createObjectStore(Os,{keyPath:Yv})}catch(s){i(s)}}),t.addEventListener("success",async()=>{const o=t.result;o.objectStoreNames.contains(Os)?e(o):(o.close(),await $1(),e(await Kc()))})})}async function Tg(t,e,i){const o=Xs(t,!0).put({[Yv]:e,value:i});return new Go(o).toPromise()}async function z1(t,e){const i=Xs(t,!1).get(e),o=await new Go(i).toPromise();return o===void 0?null:o.value}function Rg(t,e){const i=Xs(t,!0).delete(e);return new Go(i).toPromise()}const W1=800,H1=3;class Qv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kc(),this.db)}async _withRetries(e){let i=0;for(;;)try{const o=await this._openDb();return await e(o)}catch(o){if(i++>H1)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Js._getInstance(j1()),this.receiver._subscribe("keyChanged",async(e,i)=>({keyProcessed:(await this._poll()).includes(i.key)})),this.receiver._subscribe("ping",async(e,i)=>["keyChanged"])}async initializeSender(){var e,i;if(this.activeServiceWorker=await B1(),!this.activeServiceWorker)return;this.sender=new L1(this.activeServiceWorker);const o=await this.sender._send("ping",{},800);o&&!((e=o[0])===null||e===void 0)&&e.fulfilled&&!((i=o[0])===null||i===void 0)&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||F1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kc();return await Tg(e,As,"1"),await Rg(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,i){return this._withPendingWrite(async()=>(await this._withRetries(o=>Tg(o,e,i)),this.localCache[e]=i,this.notifyServiceWorker(e)))}async _get(e){const i=await this._withRetries(o=>z1(o,e));return this.localCache[e]=i,i}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(i=>Rg(i,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const u=Xs(s,!1).getAll();return new Go(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const i=[],o=new Set;if(e.length!==0)for(const{fbase_key:s,value:u}of e)o.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(u)&&(this.notifyListeners(s,u),i.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!o.has(s)&&(this.notifyListeners(s,null),i.push(s));return i}notifyListeners(e,i){this.localCache[e]=i;const o=this.listeners[e];if(o)for(const s of Array.from(o))s(i)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),W1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,i){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(i)}_removeListener(e,i){this.listeners[e]&&(this.listeners[e].delete(i),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qv.type="LOCAL";const V1=Qv;new Wo(3e4,6e4);/**
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
 */function G1(t,e){return e?wr(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wd extends md{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,i){return hi(e,this._buildIdpRequest(i))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const i={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(i.idToken=e),i}}function q1(t){return $v(t.auth,new wd(t),t.bypassAuthState)}function K1(t){const{auth:e,user:i}=t;return se(i,e,"internal-error"),E1(i,new wd(t),t.bypassAuthState)}async function Y1(t){const{auth:e,user:i}=t;return se(i,e,"internal-error"),I1(i,new wd(t),t.bypassAuthState)}/**
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
 */class Jv{constructor(e,i,o,s,u=!1){this.auth=e,this.resolver=o,this.user=s,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(i)?i:[i]}execute(){return new Promise(async(e,i)=>{this.pendingPromise={resolve:e,reject:i};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(e){const{urlResponse:i,sessionId:o,postBody:s,tenantId:u,error:c,type:f}=e;if(c){this.reject(c);return}const h={auth:this.auth,requestUri:i,sessionId:o,tenantId:u||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(h))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q1;case"linkViaPopup":case"linkViaRedirect":return Y1;case"reauthViaPopup":case"reauthViaRedirect":return K1;default:Xt(this.auth,"internal-error")}}resolve(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Q1=new Wo(2e3,1e4);class ci extends Jv{constructor(e,i,o,s,u){super(e,i,s,u),this.provider=o,this.authWindow=null,this.pollId=null,ci.currentPopupAction&&ci.currentPopupAction.cancel(),ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Er(this.filter.length===1,"Popup operations only handle one event");const e=yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(or(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(or(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var i,o;if(!((o=(i=this.authWindow)===null||i===void 0?void 0:i.window)===null||o===void 0)&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(or(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Q1.get())};e()}}ci.currentPopupAction=null;/**
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
 */const J1="pendingRedirect",ws=new Map;class X1 extends Jv{constructor(e,i,o=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o),this.eventId=null}async execute(){let e=ws.get(this.auth._key());if(!e){try{const o=await Z1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(o)}catch(i){e=()=>Promise.reject(i)}ws.set(this.auth._key(),e)}return this.bypassAuthState||ws.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const i=await this.auth._redirectUserForId(e.eventId);if(i)return this.user=i,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Z1(t,e){const i=rC(e),o=tC(t);if(!await o._isAvailable())return!1;const s=await o._get(i)==="true";return await o._remove(i),s}function eC(t,e){ws.set(t._key(),e)}function tC(t){return wr(t._redirectPersistence)}function rC(t){return ys(J1,t.config.apiKey,t.name)}async function nC(t,e,i=!1){if(Kt(t.app))return Promise.reject(br(t));const o=Nn(t),s=G1(o,e),c=await new X1(o,s,i).execute();return c&&!i&&(delete c.user._redirectEventId,await o._persistUserIfCurrent(c.user),await o._setRedirectUser(null,e)),c}/**
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
 */const iC=10*60*1e3;class oC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let i=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(e,o)&&(i=!0,this.sendToConsumer(e,o),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!aC(e)||(this.hasHandledPotentialRedirect=!0,i||(this.queuedRedirectEvent=e,i=!0)),i}sendToConsumer(e,i){var o;if(e.error&&!Xv(e)){const s=((o=e.error.code)===null||o===void 0?void 0:o.split("auth/")[1])||"internal-error";i.onError(or(this.auth,s))}else i.onAuthEvent(e)}isEventForConsumer(e,i){const o=i.eventId===null||!!e.eventId&&e.eventId===i.eventId;return i.filter.includes(e.type)&&o}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=iC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ag(e))}saveEventToCache(e){this.cachedEventUids.add(Ag(e)),this.lastProcessedEventTime=Date.now()}}function Ag(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function aC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xv(t);default:return!1}}/**
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
 */async function sC(t,e={}){return ln(t,"GET","/v1/projects",e)}/**
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
 */const lC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uC=/^https?/;async function cC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sC(t);for(const i of e)try{if(dC(i))return}catch{}Xt(t,"unauthorized-domain")}function dC(t){const e=Vc(),{protocol:i,hostname:o}=new URL(e);if(t.startsWith("chrome-extension://")){const c=new URL(t);return c.hostname===""&&o===""?i==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):i==="chrome-extension:"&&c.hostname===o}if(!uC.test(i))return!1;if(lC.test(t))return o===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(o)}/**
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
 */const fC=new Wo(3e4,6e4);function Og(){const t=ar().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let i=0;i<t.CP.length;i++)t.CP[i]=null}}function pC(t){return new Promise((e,i)=>{var o,s,u;function c(){Og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Og(),i(or(t,"network-request-failed"))},timeout:fC.get()})}if(!((s=(o=ar().gapi)===null||o===void 0?void 0:o.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((u=ar().gapi)===null||u===void 0)&&u.load)c();else{const f=i1("iframefcb");return ar()[f]=()=>{gapi.load?c():i(or(t,"network-request-failed"))},Mv(`${n1()}?onload=${f}`).catch(h=>i(h))}}).catch(e=>{throw Ss=null,e})}let Ss=null;function hC(t){return Ss=Ss||pC(t),Ss}/**
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
 */const gC=new Wo(5e3,15e3),mC="__/auth/iframe",vC="emulator/auth/iframe",yC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function SC(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?pd(e,vC):`https://${t.config.authDomain}/${mC}`,o={apiKey:e.apiKey,appName:t.name,v:zo},s=wC.get(t.config.apiHost);s&&(o.eid=s);const u=t._getFrameworks();return u.length&&(o.fw=u.join(",")),`${i}?${$o(o).slice(1)}`}async function bC(t){const e=await hC(t),i=ar().gapi;return se(i,t,"internal-error"),e.open({where:document.body,url:SC(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yC,dontclear:!0},o=>new Promise(async(s,u)=>{await o.restyle({setHideOnLeave:!1});const c=or(t,"network-request-failed"),f=ar().setTimeout(()=>{u(c)},gC.get());function h(){ar().clearTimeout(f),s(o)}o.ping(h).then(h,()=>{u(c)})}))}/**
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
 */const IC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},EC=500,CC=600,xC="_blank",PC="http://localhost";class Ng{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _C(t,e,i,o=EC,s=CC){const u=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-o)/2,0).toString();let f="";const h=Object.assign(Object.assign({},IC),{width:o.toString(),height:s.toString(),top:u,left:c}),g=pt().toLowerCase();i&&(f=Dv(g)?xC:i),_v(g)&&(e=e||PC,h.scrollbars="yes");const w=Object.entries(h).reduce((y,[S,I])=>`${y}${S}=${I},`,"");if(KE(g)&&f!=="_self")return kC(e||"",f),new Ng(null);const m=window.open(e||"",f,w);se(m,t,"popup-blocked");try{m.focus()}catch{}return new Ng(m)}function kC(t,e){const i=document.createElement("a");i.href=t,i.target=e;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(o)}/**
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
 */const DC="__/auth/handler",TC="emulator/auth/handler",RC=encodeURIComponent("fac");async function Lg(t,e,i,o,s,u){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:o,v:zo,eventId:s};if(e instanceof jv){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",gI(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[w,m]of Object.entries({}))c[w]=m}if(e instanceof Vo){const w=e.getScopes().filter(m=>m!=="");w.length>0&&(c.scopes=w.join(","))}t.tenantId&&(c.tid=t.tenantId);const f=c;for(const w of Object.keys(f))f[w]===void 0&&delete f[w];const h=await t._getAppCheckToken(),g=h?`#${RC}=${encodeURIComponent(h)}`:"";return`${AC(t)}?${$o(f).slice(1)}${g}`}function AC({config:t}){return t.emulator?pd(t,TC):`https://${t.authDomain}/${DC}`}/**
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
 */const mc="webStorageSupport";class OC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gv,this._completeRedirectFn=nC,this._overrideRedirectResult=eC}async _openPopup(e,i,o,s){var u;Er((u=this.eventManagers[e._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const c=await Lg(e,i,o,Vc(),s);return _C(e,c,yd())}async _openRedirect(e,i,o,s){await this._originValidation(e);const u=await Lg(e,i,o,Vc(),s);return M1(u),new Promise(()=>{})}_initialize(e){const i=e._key();if(this.eventManagers[i]){const{manager:s,promise:u}=this.eventManagers[i];return s?Promise.resolve(s):(Er(u,"If manager is not set, promise should be"),u)}const o=this.initAndGetManager(e);return this.eventManagers[i]={promise:o},o.catch(()=>{delete this.eventManagers[i]}),o}async initAndGetManager(e){const i=await bC(e),o=new oC(e);return i.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:o.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:o},this.iframes[e._key()]=i,o}_isIframeWebStorageSupported(e,i){this.iframes[e._key()].send(mc,{type:mc},s=>{var u;const c=(u=s==null?void 0:s[0])===null||u===void 0?void 0:u[mc];c!==void 0&&i(!!c),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const i=e._key();return this.originValidationPromises[i]||(this.originValidationPromises[i]=cC(e)),this.originValidationPromises[i]}get _shouldInitProactively(){return Nv()||kv()||gd()}}const NC=OC;var Mg="@firebase/auth",Bg="1.10.0";/**
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
 */class LC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const i=this.auth.onIdTokenChanged(o=>{e((o==null?void 0:o.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,i),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const i=this.internalListeners.get(e);i&&(this.internalListeners.delete(e),i(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function MC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BC(t){To(new Si("auth",(e,{options:i})=>{const o=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=o.options;se(c&&!c.includes(":"),"invalid-api-key",{appName:o.name});const h={apiKey:c,authDomain:f,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lv(t)},g=new e1(o,s,u,h);return c1(g,i),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,i,o)=>{e.getProvider("auth-internal").initialize()})),To(new Si("auth-internal",e=>{const i=Nn(e.getProvider("auth").getImmediate());return(o=>new LC(o))(i)},"PRIVATE").setInstantiationMode("EXPLICIT")),di(Mg,Bg,MC(t)),di(Mg,Bg,"esm2017")}/**
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
 */const FC=5*60,jC=dv("authIdTokenMaxAge")||FC;let Fg=null;const UC=t=>async e=>{const i=e&&await e.getIdTokenResult(),o=i&&(new Date().getTime()-Date.parse(i.issuedAtTime))/1e3;if(o&&o>jC)return;const s=i==null?void 0:i.token;Fg!==s&&(Fg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $C(t=vE()){const e=gv(t,"auth");if(e.isInitialized())return e.getImmediate();const i=u1(t,{popupRedirectResolver:NC,persistence:[V1,O1,Gv]}),o=dv("authTokenSyncURL");if(o&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(o,location.origin);if(location.origin===u.origin){const c=UC(u.toString());k1(i,c,()=>c(i.currentUser)),_1(i,f=>c(f))}}const s=nI("auth");return s&&d1(i,`http://${s}`),i}function zC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}t1({loadJS(t){return new Promise((e,i)=>{const o=document.createElement("script");o.setAttribute("src",t),o.onload=e,o.onerror=s=>{const u=or("internal-error");u.customData=s,i(u)},o.type="text/javascript",o.charset="UTF-8",zC().appendChild(o)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BC("Browser");var WC="firebase",HC="11.6.0";/**
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
 */di(WC,HC,"app");const VC={apiKey:"AIzaSyBbXsS-nxFtF5lSbOz99jdQ8bl_wqjVsms",authDomain:"projectm-3780c.firebaseapp.com",projectId:"projectm-3780c",storageBucket:"projectm-3780c.firebasestorage.app",messagingSenderId:"315745607112",appId:"1:315745607112:web:7201bd42b124720d5e74fd"},GC=mv(VC),bs=$C(GC),qC=[{id:1,name:"Calendar",icon:"icon/calendar_icon.svg",ariaLabel:"Open calendar"},{id:2,name:"Messages question",icon:"icon/message-question_icon.svg",ariaLabel:"Check messages or questions"},{id:3,name:"Notifications",icon:"icon/notification_icon.svg",ariaLabel:"View notifications"}],KC=[{id:1,userName:"Lee Song",country:"United States",avatar:"image/avatar-1.jpeg"}],YC=()=>{const[t,e]=H.useState(!1),{setIsLoggedIn:i,loggedUser:o,setShowLoginForm:s}=H.useContext(xi),u=()=>{e(f=>!f)},c=()=>{T1(bs).then(()=>{i(!1),s(!1),console.log("LogOut:")}).catch(f=>console.log(f))};return console.log("User:",o),N.jsxs(Nb,{role:"region","aria-label":"User menu block",children:[N.jsx(Lb,{"aria-label":"User menu navigation",children:qC.map(({id:f,icon:h,ariaLabel:g})=>N.jsx(Mb,{"aria-label":g,"aria-haspopup":"true",children:N.jsx(lg,{src:h,alt:""})},f))}),N.jsxs(Bb,{role:"group","aria-label":"User information",children:[KC.map(({id:f,userName:h,country:g,avatar:w})=>N.jsxs(sg,{role:"group","aria-label":"User information",children:[N.jsxs(Ob,{"aria-labelledby":`user-name-${f} user-country-${f}`,children:[N.jsx(Fb,{id:`user-name-${f}`,children:h}),N.jsx(jb,{id:`user-country-${f}`,children:g})]}),N.jsx(Ub,{src:w,alt:h,role:"presentation"})]},f)),N.jsx($b,{onClick:u,"aria-haspopup":"true","aria-label":"Open user menu",children:N.jsx(lg,{src:"icon/arrow-down_icon.svg",alt:"User"})})]}),t&&N.jsx(sg,{children:N.jsx(zb,{"aria-label":"User menu popup",children:N.jsx(Gb,{onClick:c,children:"Log out"})})})]})},Sd=H.forwardRef(({onToggleSidebar:t,isSidebarOpen:e},i)=>{const{isLoggedIn:o}=H.useContext(xi);return N.jsxs(Cb,{ref:i,children:[N.jsxs(wb,{children:[N.jsxs(Ib,{children:[N.jsx("img",{src:"logo.svg",alt:"Logo"}),N.jsx("span",{children:"Project M."})]}),o?N.jsx(Eb,{className:"sidebar-toggle",onClick:t,$isSidebarOpen:e,children:N.jsx("img",{src:"icon/arrow_left.svg",alt:"Sidebar opener"})}):""]}),o?N.jsxs(xb,{children:[N.jsx(Ab,{}),N.jsx(YC,{})]}):""]})});Sd.displayName="Header";Sd.propTypes={onToggleSidebar:Sr.func.isRequired,isSidebarOpen:Sr.bool.isRequired};function Yc(t,e){return Yc=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,o){return i.__proto__=o,i},Yc(t,e)}function Zv(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Yc(t,e)}function ae(){return ae=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)({}).hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},ae.apply(null,arguments)}function No(t){"@babel/helpers - typeof";return No=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},No(t)}function QC(t,e){if(No(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var o=i.call(t,e);if(No(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function JC(t){var e=QC(t,"string");return No(e)=="symbol"?e:e+""}function XC(t,e,i){return(e=JC(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function jg(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),i.push.apply(i,o)}return i}function Ug(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?jg(Object(i),!0).forEach(function(o){XC(t,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):jg(Object(i)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(i,o))})}return t}function bt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var $g=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),zg=function(){return Math.random().toString(36).substring(7).split("").join(".")},Wg={INIT:"@@redux/INIT"+zg(),REPLACE:"@@redux/REPLACE"+zg()};function ZC(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ey(t,e,i){var o;if(typeof e=="function"&&typeof i=="function"||typeof i=="function"&&typeof arguments[3]=="function")throw new Error(bt(0));if(typeof e=="function"&&typeof i>"u"&&(i=e,e=void 0),typeof i<"u"){if(typeof i!="function")throw new Error(bt(1));return i(ey)(t,e)}if(typeof t!="function")throw new Error(bt(2));var s=t,u=e,c=[],f=c,h=!1;function g(){f===c&&(f=c.slice())}function w(){if(h)throw new Error(bt(3));return u}function m(P){if(typeof P!="function")throw new Error(bt(4));if(h)throw new Error(bt(5));var k=!0;return g(),f.push(P),function(){if(k){if(h)throw new Error(bt(6));k=!1,g();var O=f.indexOf(P);f.splice(O,1),c=null}}}function y(P){if(!ZC(P))throw new Error(bt(7));if(typeof P.type>"u")throw new Error(bt(8));if(h)throw new Error(bt(9));try{h=!0,u=s(u,P)}finally{h=!1}for(var k=c=f,T=0;T<k.length;T++){var O=k[T];O()}return P}function S(P){if(typeof P!="function")throw new Error(bt(10));s=P,y({type:Wg.REPLACE})}function I(){var P,k=m;return P={subscribe:function(O){if(typeof O!="object"||O===null)throw new Error(bt(11));function L(){O.next&&O.next(w())}L();var M=k(L);return{unsubscribe:M}}},P[$g]=function(){return this},P}return y({type:Wg.INIT}),o={dispatch:y,subscribe:m,getState:w,replaceReducer:S},o[$g]=I,o}function Hg(t,e){return function(){return e(t.apply(this,arguments))}}function Vg(t,e){if(typeof t=="function")return Hg(t,e);if(typeof t!="object"||t===null)throw new Error(bt(16));var i={};for(var o in t){var s=t[o];typeof s=="function"&&(i[o]=Hg(s,e))}return i}function ty(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.length===0?function(o){return o}:e.length===1?e[0]:e.reduce(function(o,s){return function(){return o(s.apply(void 0,arguments))}})}function ex(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(o){return function(){var s=o.apply(void 0,arguments),u=function(){throw new Error(bt(15))},c={getState:s.getState,dispatch:function(){return u.apply(void 0,arguments)}},f=e.map(function(h){return h(c)});return u=ty.apply(void 0,f)(s.dispatch),Ug(Ug({},s),{},{dispatch:u})}}}var ry=Ie.createContext(null);function tx(t){t()}var ny=tx,rx=function(e){return ny=e},nx=function(){return ny};function ix(){var t=nx(),e=null,i=null;return{clear:function(){e=null,i=null},notify:function(){t(function(){for(var s=e;s;)s.callback(),s=s.next})},get:function(){for(var s=[],u=e;u;)s.push(u),u=u.next;return s},subscribe:function(s){var u=!0,c=i={callback:s,next:null,prev:i};return c.prev?c.prev.next=c:e=c,function(){!u||e===null||(u=!1,c.next?c.next.prev=c.prev:i=c.prev,c.prev?c.prev.next=c.next:e=c.next)}}}}var Gg={notify:function(){},get:function(){return[]}};function iy(t,e){var i,o=Gg;function s(m){return h(),o.subscribe(m)}function u(){o.notify()}function c(){w.onStateChange&&w.onStateChange()}function f(){return!!i}function h(){i||(i=e?e.addNestedSub(c):t.subscribe(c),o=ix())}function g(){i&&(i(),i=void 0,o.clear(),o=Gg)}var w={addNestedSub:s,notifyNestedSubs:u,handleChangeWrapper:c,isSubscribed:f,trySubscribe:h,tryUnsubscribe:g,getListeners:function(){return o}};return w}var oy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?H.useLayoutEffect:H.useEffect;function ox(t){var e=t.store,i=t.context,o=t.children,s=H.useMemo(function(){var f=iy(e);return{store:e,subscription:f}},[e]),u=H.useMemo(function(){return e.getState()},[e]);oy(function(){var f=s.subscription;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),u!==e.getState()&&f.notifyNestedSubs(),function(){f.tryUnsubscribe(),f.onStateChange=null}},[s,u]);var c=i||ry;return Ie.createElement(c.Provider,{value:s},o)}function Ns(t,e){if(t==null)return{};var i={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)!==-1)continue;i[o]=t[o]}return i}var vc={exports:{}},_e={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function ax(){if(qg)return _e;qg=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,i=t?Symbol.for("react.portal"):60106,o=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,u=t?Symbol.for("react.profiler"):60114,c=t?Symbol.for("react.provider"):60109,f=t?Symbol.for("react.context"):60110,h=t?Symbol.for("react.async_mode"):60111,g=t?Symbol.for("react.concurrent_mode"):60111,w=t?Symbol.for("react.forward_ref"):60112,m=t?Symbol.for("react.suspense"):60113,y=t?Symbol.for("react.suspense_list"):60120,S=t?Symbol.for("react.memo"):60115,I=t?Symbol.for("react.lazy"):60116,P=t?Symbol.for("react.block"):60121,k=t?Symbol.for("react.fundamental"):60117,T=t?Symbol.for("react.responder"):60118,O=t?Symbol.for("react.scope"):60119;function L(R){if(typeof R=="object"&&R!==null){var F=R.$$typeof;switch(F){case e:switch(R=R.type,R){case h:case g:case o:case u:case s:case m:return R;default:switch(R=R&&R.$$typeof,R){case f:case w:case I:case S:case c:return R;default:return F}}case i:return F}}}function M(R){return L(R)===g}return _e.AsyncMode=h,_e.ConcurrentMode=g,_e.ContextConsumer=f,_e.ContextProvider=c,_e.Element=e,_e.ForwardRef=w,_e.Fragment=o,_e.Lazy=I,_e.Memo=S,_e.Portal=i,_e.Profiler=u,_e.StrictMode=s,_e.Suspense=m,_e.isAsyncMode=function(R){return M(R)||L(R)===h},_e.isConcurrentMode=M,_e.isContextConsumer=function(R){return L(R)===f},_e.isContextProvider=function(R){return L(R)===c},_e.isElement=function(R){return typeof R=="object"&&R!==null&&R.$$typeof===e},_e.isForwardRef=function(R){return L(R)===w},_e.isFragment=function(R){return L(R)===o},_e.isLazy=function(R){return L(R)===I},_e.isMemo=function(R){return L(R)===S},_e.isPortal=function(R){return L(R)===i},_e.isProfiler=function(R){return L(R)===u},_e.isStrictMode=function(R){return L(R)===s},_e.isSuspense=function(R){return L(R)===m},_e.isValidElementType=function(R){return typeof R=="string"||typeof R=="function"||R===o||R===g||R===u||R===s||R===m||R===y||typeof R=="object"&&R!==null&&(R.$$typeof===I||R.$$typeof===S||R.$$typeof===c||R.$$typeof===f||R.$$typeof===w||R.$$typeof===k||R.$$typeof===T||R.$$typeof===O||R.$$typeof===P)},_e.typeOf=L,_e}var Kg;function sx(){return Kg||(Kg=1,vc.exports=ax()),vc.exports}var yc,Yg;function lx(){if(Yg)return yc;Yg=1;var t=sx(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};u[t.ForwardRef]=o,u[t.Memo]=s;function c(I){return t.isMemo(I)?s:u[I.$$typeof]||e}var f=Object.defineProperty,h=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,w=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,y=Object.prototype;function S(I,P,k){if(typeof P!="string"){if(y){var T=m(P);T&&T!==y&&S(I,T,k)}var O=h(P);g&&(O=O.concat(g(P)));for(var L=c(I),M=c(P),R=0;R<O.length;++R){var F=O[R];if(!i[F]&&!(k&&k[F])&&!(M&&M[F])&&!(L&&L[F])){var z=w(P,F);try{f(I,F,z)}catch{}}}}return I}return yc=S,yc}var ux=lx();const Qg=Ws(ux);var wc={exports:{}},Re={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jg;function cx(){if(Jg)return Re;Jg=1;var t=60103,e=60106,i=60107,o=60108,s=60114,u=60109,c=60110,f=60112,h=60113,g=60120,w=60115,m=60116,y=60121,S=60122,I=60117,P=60129,k=60131;if(typeof Symbol=="function"&&Symbol.for){var T=Symbol.for;t=T("react.element"),e=T("react.portal"),i=T("react.fragment"),o=T("react.strict_mode"),s=T("react.profiler"),u=T("react.provider"),c=T("react.context"),f=T("react.forward_ref"),h=T("react.suspense"),g=T("react.suspense_list"),w=T("react.memo"),m=T("react.lazy"),y=T("react.block"),S=T("react.server.block"),I=T("react.fundamental"),P=T("react.debug_trace_mode"),k=T("react.legacy_hidden")}function O(V){if(typeof V=="object"&&V!==null){var ye=V.$$typeof;switch(ye){case t:switch(V=V.type,V){case i:case s:case o:case h:case g:return V;default:switch(V=V&&V.$$typeof,V){case c:case f:case m:case w:case u:return V;default:return ye}}case e:return ye}}}var L=u,M=t,R=f,F=i,z=m,le=w,ne=e,ve=s,he=o,Ae=h;return Re.ContextConsumer=c,Re.ContextProvider=L,Re.Element=M,Re.ForwardRef=R,Re.Fragment=F,Re.Lazy=z,Re.Memo=le,Re.Portal=ne,Re.Profiler=ve,Re.StrictMode=he,Re.Suspense=Ae,Re.isAsyncMode=function(){return!1},Re.isConcurrentMode=function(){return!1},Re.isContextConsumer=function(V){return O(V)===c},Re.isContextProvider=function(V){return O(V)===u},Re.isElement=function(V){return typeof V=="object"&&V!==null&&V.$$typeof===t},Re.isForwardRef=function(V){return O(V)===f},Re.isFragment=function(V){return O(V)===i},Re.isLazy=function(V){return O(V)===m},Re.isMemo=function(V){return O(V)===w},Re.isPortal=function(V){return O(V)===e},Re.isProfiler=function(V){return O(V)===s},Re.isStrictMode=function(V){return O(V)===o},Re.isSuspense=function(V){return O(V)===h},Re.isValidElementType=function(V){return typeof V=="string"||typeof V=="function"||V===i||V===s||V===P||V===o||V===h||V===g||V===k||typeof V=="object"&&V!==null&&(V.$$typeof===m||V.$$typeof===w||V.$$typeof===u||V.$$typeof===c||V.$$typeof===f||V.$$typeof===I||V.$$typeof===y||V[0]===S)},Re.typeOf=O,Re}var Xg;function dx(){return Xg||(Xg=1,wc.exports=cx()),wc.exports}var fx=dx(),px=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],hx=["reactReduxForwardedRef"],gx=[],mx=[null,null];function vx(t,e){var i=t[1];return[e.payload,i+1]}function Zg(t,e,i){oy(function(){return t.apply(void 0,e)},i)}function yx(t,e,i,o,s,u,c){t.current=o,e.current=s,i.current=!1,u.current&&(u.current=null,c())}function wx(t,e,i,o,s,u,c,f,h,g){if(t){var w=!1,m=null,y=function(){if(!w){var P=e.getState(),k,T;try{k=o(P,s.current)}catch(O){T=O,m=O}T||(m=null),k===u.current?c.current||h():(u.current=k,f.current=k,c.current=!0,g({type:"STORE_UPDATED",payload:{error:T}}))}};i.onStateChange=y,i.trySubscribe(),y();var S=function(){if(w=!0,i.tryUnsubscribe(),i.onStateChange=null,m)throw m};return S}}var Sx=function(){return[null,0]};function bx(t,e){e===void 0&&(e={});var i=e,o=i.getDisplayName,s=o===void 0?function(L){return"ConnectAdvanced("+L+")"}:o,u=i.methodName,c=u===void 0?"connectAdvanced":u,f=i.renderCountProp,h=f===void 0?void 0:f,g=i.shouldHandleStateChanges,w=g===void 0?!0:g,m=i.storeKey,y=m===void 0?"store":m;i.withRef;var S=i.forwardRef,I=S===void 0?!1:S,P=i.context,k=P===void 0?ry:P,T=Ns(i,px),O=k;return function(M){var R=M.displayName||M.name||"Component",F=s(R),z=ae({},T,{getDisplayName:s,methodName:c,renderCountProp:h,shouldHandleStateChanges:w,storeKey:y,displayName:F,wrappedComponentName:R,WrappedComponent:M}),le=T.pure;function ne(ye){return t(ye.dispatch,z)}var ve=le?H.useMemo:function(ye){return ye()};function he(ye){var Le=H.useMemo(function(){var sr=ye.reactReduxForwardedRef,lr=Ns(ye,hx);return[ye.context,sr,lr]},[ye]),De=Le[0],Ee=Le[1],G=Le[2],J=H.useMemo(function(){return De&&De.Consumer&&fx.isContextConsumer(Ie.createElement(De.Consumer,null))?De:O},[De,O]),Y=H.useContext(J),x=!!ye.store&&!!ye.store.getState&&!!ye.store.dispatch;Y&&Y.store;var B=x?ye.store:Y.store,ue=H.useMemo(function(){return ne(B)},[B]),de=H.useMemo(function(){if(!w)return mx;var sr=iy(B,x?null:Y.subscription),lr=sr.notifyNestedSubs.bind(sr);return[sr,lr]},[B,x,Y]),fe=de[0],pe=de[1],Se=H.useMemo(function(){return x?Y:ae({},Y,{subscription:fe})},[x,Y,fe]),ge=H.useReducer(vx,gx,Sx),be=ge[0],je=be[0],It=ge[1];if(je&&je.error)throw je.error;var ht=H.useRef(),xr=H.useRef(G),Pr=H.useRef(),Ti=H.useRef(!1),Ln=ve(function(){return Pr.current&&G===xr.current?Pr.current:ue(B.getState(),G)},[B,je,G]);Zg(yx,[xr,ht,Ti,G,Ln,Pr,pe]),Zg(wx,[w,B,fe,ue,xr,ht,Ti,Pr,pe,It],[B,fe,ue]);var cn=H.useMemo(function(){return Ie.createElement(M,ae({},Ln,{ref:Ee}))},[Ee,M,Ln]),Yo=H.useMemo(function(){return w?Ie.createElement(J.Provider,{value:Se},cn):cn},[J,cn,Se]);return Yo}var Ae=le?Ie.memo(he):he;if(Ae.WrappedComponent=M,Ae.displayName=he.displayName=F,I){var V=Ie.forwardRef(function(Le,De){return Ie.createElement(Ae,ae({},Le,{reactReduxForwardedRef:De}))});return V.displayName=F,V.WrappedComponent=M,Qg(V,M)}return Qg(Ae,M)}}function em(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Sc(t,e){if(em(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var i=Object.keys(t),o=Object.keys(e);if(i.length!==o.length)return!1;for(var s=0;s<i.length;s++)if(!Object.prototype.hasOwnProperty.call(e,i[s])||!em(t[i[s]],e[i[s]]))return!1;return!0}function Ix(t,e){var i={},o=function(c){var f=t[c];typeof f=="function"&&(i[c]=function(){return e(f.apply(void 0,arguments))})};for(var s in t)o(s);return i}function bd(t){return function(i,o){var s=t(i,o);function u(){return s}return u.dependsOnOwnProps=!1,u}}function tm(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function ay(t,e){return function(o,s){s.displayName;var u=function(f,h){return u.dependsOnOwnProps?u.mapToProps(f,h):u.mapToProps(f)};return u.dependsOnOwnProps=!0,u.mapToProps=function(f,h){u.mapToProps=t,u.dependsOnOwnProps=tm(t);var g=u(f,h);return typeof g=="function"&&(u.mapToProps=g,u.dependsOnOwnProps=tm(g),g=u(f,h)),g},u}}function Ex(t){return typeof t=="function"?ay(t):void 0}function Cx(t){return t?void 0:bd(function(e){return{dispatch:e}})}function xx(t){return t&&typeof t=="object"?bd(function(e){return Ix(t,e)}):void 0}const Px=[Ex,Cx,xx];function _x(t){return typeof t=="function"?ay(t):void 0}function kx(t){return t?void 0:bd(function(){return{}})}const Dx=[_x,kx];function Tx(t,e,i){return ae({},i,t,e)}function Rx(t){return function(i,o){o.displayName;var s=o.pure,u=o.areMergedPropsEqual,c=!1,f;return function(g,w,m){var y=t(g,w,m);return c?(!s||!u(y,f))&&(f=y):(c=!0,f=y),f}}}function Ax(t){return typeof t=="function"?Rx(t):void 0}function Ox(t){return t?void 0:function(){return Tx}}const Nx=[Ax,Ox];var Lx=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Mx(t,e,i,o){return function(u,c){return i(t(u,c),e(o,c),c)}}function Bx(t,e,i,o,s){var u=s.areStatesEqual,c=s.areOwnPropsEqual,f=s.areStatePropsEqual,h=!1,g,w,m,y,S;function I(L,M){return g=L,w=M,m=t(g,w),y=e(o,w),S=i(m,y,w),h=!0,S}function P(){return m=t(g,w),e.dependsOnOwnProps&&(y=e(o,w)),S=i(m,y,w),S}function k(){return t.dependsOnOwnProps&&(m=t(g,w)),e.dependsOnOwnProps&&(y=e(o,w)),S=i(m,y,w),S}function T(){var L=t(g,w),M=!f(L,m);return m=L,M&&(S=i(m,y,w)),S}function O(L,M){var R=!c(M,w),F=!u(L,g,M,w);return g=L,w=M,R&&F?P():R?k():F?T():S}return function(M,R){return h?O(M,R):I(M,R)}}function Fx(t,e){var i=e.initMapStateToProps,o=e.initMapDispatchToProps,s=e.initMergeProps,u=Ns(e,Lx),c=i(t,u),f=o(t,u),h=s(t,u),g=u.pure?Bx:Mx;return g(c,f,h,t,u)}var jx=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function bc(t,e,i){for(var o=e.length-1;o>=0;o--){var s=e[o](t);if(s)return s}return function(u,c){throw new Error("Invalid value of type "+typeof t+" for "+i+" argument when connecting component "+c.wrappedComponentName+".")}}function Ux(t,e){return t===e}function $x(t){var e=t===void 0?{}:t,i=e.connectHOC,o=i===void 0?bx:i,s=e.mapStateToPropsFactories,u=s===void 0?Dx:s,c=e.mapDispatchToPropsFactories,f=c===void 0?Px:c,h=e.mergePropsFactories,g=h===void 0?Nx:h,w=e.selectorFactory,m=w===void 0?Fx:w;return function(S,I,P,k){k===void 0&&(k={});var T=k,O=T.pure,L=O===void 0?!0:O,M=T.areStatesEqual,R=M===void 0?Ux:M,F=T.areOwnPropsEqual,z=F===void 0?Sc:F,le=T.areStatePropsEqual,ne=le===void 0?Sc:le,ve=T.areMergedPropsEqual,he=ve===void 0?Sc:ve,Ae=Ns(T,jx),V=bc(S,u,"mapStateToProps"),ye=bc(I,f,"mapDispatchToProps"),Le=bc(P,g,"mergeProps");return o(m,ae({methodName:"connect",getDisplayName:function(Ee){return"Connect("+Ee+")"},shouldHandleStateChanges:!!S,initMapStateToProps:V,initMapDispatchToProps:ye,initMergeProps:Le,pure:L,areStatesEqual:R,areOwnPropsEqual:z,areStatePropsEqual:ne,areMergedPropsEqual:he},Ae))}}const sy=$x();var ly=Rm();const zx=Ws(ly);rx(ly.unstable_batchedUpdates);function Wx(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0}function uy(t,e){var i=H.useState(function(){return{inputs:e,result:t()}})[0],o=H.useRef(!0),s=H.useRef(i),u=o.current||!!(e&&s.current.inputs&&Wx(e,s.current.inputs)),c=u?s.current:{inputs:e,result:t()};return H.useEffect(function(){o.current=!1,s.current=c},[c]),c.result}function Hx(t,e){return uy(function(){return t},e)}var xe=uy,re=Hx,Vx="Invariant failed";function Gx(t,e){throw new Error(Vx)}var Qt=function(e){var i=e.top,o=e.right,s=e.bottom,u=e.left,c=o-u,f=s-i,h={top:i,right:o,bottom:s,left:u,width:c,height:f,x:u,y:i,center:{x:(o+u)/2,y:(s+i)/2}};return h},Id=function(e,i){return{top:e.top-i.top,left:e.left-i.left,bottom:e.bottom+i.bottom,right:e.right+i.right}},rm=function(e,i){return{top:e.top+i.top,left:e.left+i.left,bottom:e.bottom-i.bottom,right:e.right-i.right}},qx=function(e,i){return{top:e.top+i.y,left:e.left+i.x,bottom:e.bottom+i.y,right:e.right+i.x}},Ic={top:0,right:0,bottom:0,left:0},Ed=function(e){var i=e.borderBox,o=e.margin,s=o===void 0?Ic:o,u=e.border,c=u===void 0?Ic:u,f=e.padding,h=f===void 0?Ic:f,g=Qt(Id(i,s)),w=Qt(rm(i,c)),m=Qt(rm(w,h));return{marginBox:g,borderBox:Qt(i),paddingBox:w,contentBox:m,margin:s,border:c,padding:h}},Bt=function(e){var i=e.slice(0,-2),o=e.slice(-2);if(o!=="px")return 0;var s=Number(i);return isNaN(s)&&Gx(),s},Kx=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Ls=function(e,i){var o=e.borderBox,s=e.border,u=e.margin,c=e.padding,f=qx(o,i);return Ed({borderBox:f,border:s,margin:u,padding:c})},Ms=function(e,i){return i===void 0&&(i=Kx()),Ls(e,i)},cy=function(e,i){var o={top:Bt(i.marginTop),right:Bt(i.marginRight),bottom:Bt(i.marginBottom),left:Bt(i.marginLeft)},s={top:Bt(i.paddingTop),right:Bt(i.paddingRight),bottom:Bt(i.paddingBottom),left:Bt(i.paddingLeft)},u={top:Bt(i.borderTopWidth),right:Bt(i.borderRightWidth),bottom:Bt(i.borderBottomWidth),left:Bt(i.borderLeftWidth)};return Ed({borderBox:e,margin:o,padding:s,border:u})},dy=function(e){var i=e.getBoundingClientRect(),o=window.getComputedStyle(e);return cy(i,o)},nm=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function Yx(t,e){return!!(t===e||nm(t)&&nm(e))}function Qx(t,e){if(t.length!==e.length)return!1;for(var i=0;i<t.length;i++)if(!Yx(t[i],e[i]))return!1;return!0}function tt(t,e){e===void 0&&(e=Qx);var i,o=[],s,u=!1;function c(){for(var f=[],h=0;h<arguments.length;h++)f[h]=arguments[h];return u&&i===this&&e(f,o)||(s=t.apply(this,f),u=!0,i=this,o=f),s}return c}var Lo=function(e){var i=[],o=null,s=function(){for(var c=arguments.length,f=new Array(c),h=0;h<c;h++)f[h]=arguments[h];i=f,!o&&(o=requestAnimationFrame(function(){o=null,e.apply(void 0,i)}))};return s.cancel=function(){o&&(cancelAnimationFrame(o),o=null)},s};function fy(t,e){}fy.bind(null,"warn");fy.bind(null,"error");function tn(){}function Jx(t,e){return ae({},t,{},e)}function Ft(t,e,i){var o=e.map(function(s){var u=Jx(i,s.options);return t.addEventListener(s.eventName,s.fn,u),function(){t.removeEventListener(s.eventName,s.fn,u)}});return function(){o.forEach(function(u){u()})}}var Xx="Invariant failed";function Bs(t){this.message=t}Bs.prototype.toString=function(){return this.message};function q(t,e){throw new Bs(Xx)}var Zx=function(t){Zv(e,t);function e(){for(var o,s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return o=t.call.apply(t,[this].concat(u))||this,o.callbacks=null,o.unbind=tn,o.onWindowError=function(f){var h=o.getCallbacks();h.isDragging()&&h.tryAbort();var g=f.error;g instanceof Bs&&f.preventDefault()},o.getCallbacks=function(){if(!o.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return o.callbacks},o.setCallbacks=function(f){o.callbacks=f},o}var i=e.prototype;return i.componentDidMount=function(){this.unbind=Ft(window,[{eventName:"error",fn:this.onWindowError}])},i.componentDidCatch=function(s){if(s instanceof Bs){this.setState({});return}throw s},i.componentWillUnmount=function(){this.unbind()},i.render=function(){return this.props.children(this.setCallbacks)},e}(Ie.Component),eP=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Fs=function(e){return e+1},tP=function(e){return`
  You have lifted an item in position `+Fs(e.source.index)+`
`},py=function(e,i){var o=e.droppableId===i.droppableId,s=Fs(e.index),u=Fs(i.index);return o?`
      You have moved the item from position `+s+`
      to position `+u+`
    `:`
    You have moved the item from position `+s+`
    in list `+e.droppableId+`
    to list `+i.droppableId+`
    in position `+u+`
  `},hy=function(e,i,o){var s=i.droppableId===o.droppableId;return s?`
      The item `+e+`
      has been combined with `+o.draggableId:`
      The item `+e+`
      in list `+i.droppableId+`
      has been combined with `+o.draggableId+`
      in list `+o.droppableId+`
    `},rP=function(e){var i=e.destination;if(i)return py(e.source,i);var o=e.combine;return o?hy(e.draggableId,e.source,o):"You are over an area that cannot be dropped on"},im=function(e){return`
  The item has returned to its starting position
  of `+Fs(e.index)+`
`},nP=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+im(e.source)+`
    `;var i=e.destination,o=e.combine;return i?`
      You have dropped the item.
      `+py(e.source,i)+`
    `:o?`
      You have dropped the item.
      `+hy(e.draggableId,e.source,o)+`
    `:`
    The item has been dropped while not over a drop area.
    `+im(e.source)+`
  `},Is={dragHandleUsageInstructions:eP,onDragStart:tP,onDragUpdate:rP,onDragEnd:nP},rt={x:0,y:0},ot=function(e,i){return{x:e.x+i.x,y:e.y+i.y}},kt=function(e,i){return{x:e.x-i.x,y:e.y-i.y}},rn=function(e,i){return e.x===i.x&&e.y===i.y},_i=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},On=function(e,i,o){var s;return o===void 0&&(o=0),s={},s[e]=i,s[e==="x"?"y":"x"]=o,s},Mo=function(e,i){return Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2))},om=function(e,i){return Math.min.apply(Math,i.map(function(o){return Mo(e,o)}))},gy=function(e){return function(i){return{x:e(i.x),y:e(i.y)}}},iP=function(t,e){var i=Qt({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return i.width<=0||i.height<=0?null:i},qo=function(e,i){return{top:e.top+i.y,left:e.left+i.x,bottom:e.bottom+i.y,right:e.right+i.x}},am=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},oP={top:0,right:0,bottom:0,left:0},aP=function(e,i){return i?qo(e,i.scroll.diff.displacement):e},sP=function(e,i,o){if(o&&o.increasedBy){var s;return ae({},e,(s={},s[i.end]=e[i.end]+o.increasedBy[i.line],s))}return e},lP=function(e,i){return i&&i.shouldClipSubject?iP(i.pageMarginBox,e):Qt(e)},bi=function(t){var e=t.page,i=t.withPlaceholder,o=t.axis,s=t.frame,u=aP(e.marginBox,s),c=sP(u,o,i),f=lP(c,s);return{page:e,withPlaceholder:i,active:f}},Cd=function(t,e){t.frame||q();var i=t.frame,o=kt(e,i.scroll.initial),s=_i(o),u=ae({},i,{scroll:{initial:i.scroll.initial,current:e,diff:{value:o,displacement:s},max:i.scroll.max}}),c=bi({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:u}),f=ae({},t,{frame:u,subject:c});return f};function js(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function xd(t,e){if(t.findIndex)return t.findIndex(e);for(var i=0;i<t.length;i++)if(e(t[i]))return i;return-1}function un(t,e){if(t.find)return t.find(e);var i=xd(t,e);if(i!==-1)return t[i]}function my(t){return Array.prototype.slice.call(t)}var vy=tt(function(t){return t.reduce(function(e,i){return e[i.descriptor.id]=i,e},{})}),yy=tt(function(t){return t.reduce(function(e,i){return e[i.descriptor.id]=i,e},{})}),Zs=tt(function(t){return js(t)}),uP=tt(function(t){return js(t)}),ki=tt(function(t,e){var i=uP(e).filter(function(o){return t===o.descriptor.droppableId}).sort(function(o,s){return o.descriptor.index-s.descriptor.index});return i});function Pd(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function el(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var tl=tt(function(t,e){return e.filter(function(i){return i.descriptor.id!==t.descriptor.id})}),cP=function(t){var e=t.isMovingForward,i=t.draggable,o=t.destination,s=t.insideDestination,u=t.previousImpact;if(!o.isCombineEnabled)return null;var c=Pd(u);if(!c)return null;function f(P){var k={type:"COMBINE",combine:{draggableId:P,droppableId:o.descriptor.id}};return ae({},u,{at:k})}var h=u.displaced.all,g=h.length?h[0]:null;if(e)return g?f(g):null;var w=tl(i,s);if(!g){if(!w.length)return null;var m=w[w.length-1];return f(m.descriptor.id)}var y=xd(w,function(P){return P.descriptor.id===g});y===-1&&q();var S=y-1;if(S<0)return null;var I=w[S];return f(I.descriptor.id)},Di=function(t,e){return t.descriptor.droppableId===e.descriptor.id},wy={point:rt,value:0},Bo={invisible:{},visible:{},all:[]},dP={displaced:Bo,displacedBy:wy,at:null},jt=function(t,e){return function(i){return t<=i&&i<=e}},Sy=function(t){var e=jt(t.top,t.bottom),i=jt(t.left,t.right);return function(o){var s=e(o.top)&&e(o.bottom)&&i(o.left)&&i(o.right);if(s)return!0;var u=e(o.top)||e(o.bottom),c=i(o.left)||i(o.right),f=u&&c;if(f)return!0;var h=o.top<t.top&&o.bottom>t.bottom,g=o.left<t.left&&o.right>t.right,w=h&&g;if(w)return!0;var m=h&&c||g&&u;return m}},fP=function(t){var e=jt(t.top,t.bottom),i=jt(t.left,t.right);return function(o){var s=e(o.top)&&e(o.bottom)&&i(o.left)&&i(o.right);return s}},_d={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},by={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},pP=function(t){return function(e){var i=jt(e.top,e.bottom),o=jt(e.left,e.right);return function(s){return t===_d?i(s.top)&&i(s.bottom):o(s.left)&&o(s.right)}}},hP=function(e,i){var o=i.frame?i.frame.scroll.diff.displacement:rt;return qo(e,o)},gP=function(e,i,o){return i.subject.active?o(i.subject.active)(e):!1},mP=function(e,i,o){return o(i)(e)},kd=function(e){var i=e.target,o=e.destination,s=e.viewport,u=e.withDroppableDisplacement,c=e.isVisibleThroughFrameFn,f=u?hP(i,o):i;return gP(f,o,c)&&mP(f,s,c)},vP=function(e){return kd(ae({},e,{isVisibleThroughFrameFn:Sy}))},Iy=function(e){return kd(ae({},e,{isVisibleThroughFrameFn:fP}))},yP=function(e){return kd(ae({},e,{isVisibleThroughFrameFn:pP(e.destination.axis)}))},wP=function(e,i,o){if(typeof o=="boolean")return o;if(!i)return!0;var s=i.invisible,u=i.visible;if(s[e])return!1;var c=u[e];return c?c.shouldAnimate:!0};function SP(t,e){var i=t.page.marginBox,o={top:e.point.y,right:0,bottom:0,left:e.point.x};return Qt(Id(i,o))}function Fo(t){var e=t.afterDragging,i=t.destination,o=t.displacedBy,s=t.viewport,u=t.forceShouldAnimate,c=t.last;return e.reduce(function(h,g){var w=SP(g,o),m=g.descriptor.id;h.all.push(m);var y=vP({target:w,destination:i,viewport:s,withDroppableDisplacement:!0});if(!y)return h.invisible[g.descriptor.id]=!0,h;var S=wP(m,c,u),I={draggableId:m,shouldAnimate:S};return h.visible[m]=I,h},{all:[],visible:{},invisible:{}})}function bP(t,e){if(!t.length)return 0;var i=t[t.length-1].descriptor.index;return e.inHomeList?i:i+1}function sm(t){var e=t.insideDestination,i=t.inHomeList,o=t.displacedBy,s=t.destination,u=bP(e,{inHomeList:i});return{displaced:Bo,displacedBy:o,at:{type:"REORDER",destination:{droppableId:s.descriptor.id,index:u}}}}function Us(t){var e=t.draggable,i=t.insideDestination,o=t.destination,s=t.viewport,u=t.displacedBy,c=t.last,f=t.index,h=t.forceShouldAnimate,g=Di(e,o);if(f==null)return sm({insideDestination:i,inHomeList:g,displacedBy:u,destination:o});var w=un(i,function(P){return P.descriptor.index===f});if(!w)return sm({insideDestination:i,inHomeList:g,displacedBy:u,destination:o});var m=tl(e,i),y=i.indexOf(w),S=m.slice(y),I=Fo({afterDragging:S,destination:o,displacedBy:u,last:c,viewport:s.frame,forceShouldAnimate:h});return{displaced:I,displacedBy:u,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:f}}}}function on(t,e){return!!e.effected[t]}var IP=function(t){var e=t.isMovingForward,i=t.destination,o=t.draggables,s=t.combine,u=t.afterCritical;if(!i.isCombineEnabled)return null;var c=s.draggableId,f=o[c],h=f.descriptor.index,g=on(c,u);return g?e?h:h-1:e?h+1:h},EP=function(t){var e=t.isMovingForward,i=t.isInHomeList,o=t.insideDestination,s=t.location;if(!o.length)return null;var u=s.index,c=e?u+1:u-1,f=o[0].descriptor.index,h=o[o.length-1].descriptor.index,g=i?h:h+1;return c<f||c>g?null:c},CP=function(t){var e=t.isMovingForward,i=t.isInHomeList,o=t.draggable,s=t.draggables,u=t.destination,c=t.insideDestination,f=t.previousImpact,h=t.viewport,g=t.afterCritical,w=f.at;if(w||q(),w.type==="REORDER"){var m=EP({isMovingForward:e,isInHomeList:i,location:w.destination,insideDestination:c});return m==null?null:Us({draggable:o,insideDestination:c,destination:u,viewport:h,last:f.displaced,displacedBy:f.displacedBy,index:m})}var y=IP({isMovingForward:e,destination:u,displaced:f.displaced,draggables:s,combine:w.combine,afterCritical:g});return y==null?null:Us({draggable:o,insideDestination:c,destination:u,viewport:h,last:f.displaced,displacedBy:f.displacedBy,index:y})},xP=function(t){var e=t.displaced,i=t.afterCritical,o=t.combineWith,s=t.displacedBy,u=!!(e.visible[o]||e.invisible[o]);return on(o,i)?u?rt:_i(s.point):u?s.point:rt},PP=function(t){var e=t.afterCritical,i=t.impact,o=t.draggables,s=el(i);s||q();var u=s.draggableId,c=o[u].page.borderBox.center,f=xP({displaced:i.displaced,afterCritical:e,combineWith:u,displacedBy:i.displacedBy});return ot(c,f)},Ey=function(e,i){return i.margin[e.start]+i.borderBox[e.size]/2},_P=function(e,i){return i.margin[e.end]+i.borderBox[e.size]/2},Dd=function(e,i,o){return i[e.crossAxisStart]+o.margin[e.crossAxisStart]+o.borderBox[e.crossAxisSize]/2},lm=function(e){var i=e.axis,o=e.moveRelativeTo,s=e.isMoving;return On(i.line,o.marginBox[i.end]+Ey(i,s),Dd(i,o.marginBox,s))},um=function(e){var i=e.axis,o=e.moveRelativeTo,s=e.isMoving;return On(i.line,o.marginBox[i.start]-_P(i,s),Dd(i,o.marginBox,s))},kP=function(e){var i=e.axis,o=e.moveInto,s=e.isMoving;return On(i.line,o.contentBox[i.start]+Ey(i,s),Dd(i,o.contentBox,s))},DP=function(t){var e=t.impact,i=t.draggable,o=t.draggables,s=t.droppable,u=t.afterCritical,c=ki(s.descriptor.id,o),f=i.page,h=s.axis;if(!c.length)return kP({axis:h,moveInto:s.page,isMoving:f});var g=e.displaced,w=e.displacedBy,m=g.all[0];if(m){var y=o[m];if(on(m,u))return um({axis:h,moveRelativeTo:y.page,isMoving:f});var S=Ls(y.page,w.point);return um({axis:h,moveRelativeTo:S,isMoving:f})}var I=c[c.length-1];if(I.descriptor.id===i.descriptor.id)return f.borderBox.center;if(on(I.descriptor.id,u)){var P=Ls(I.page,_i(u.displacedBy.point));return lm({axis:h,moveRelativeTo:P,isMoving:f})}return lm({axis:h,moveRelativeTo:I.page,isMoving:f})},Qc=function(t,e){var i=t.frame;return i?ot(e,i.scroll.diff.displacement):e},TP=function(e){var i=e.impact,o=e.draggable,s=e.droppable,u=e.draggables,c=e.afterCritical,f=o.page.borderBox.center,h=i.at;return!s||!h?f:h.type==="REORDER"?DP({impact:i,draggable:o,draggables:u,droppable:s,afterCritical:c}):PP({impact:i,draggables:u,afterCritical:c})},rl=function(t){var e=TP(t),i=t.droppable,o=i?Qc(i,e):e;return o},Cy=function(t,e){var i=kt(e,t.scroll.initial),o=_i(i),s=Qt({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),u={frame:s,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:i,displacement:o}}};return u};function cm(t,e){return t.map(function(i){return e[i]})}function RP(t,e){for(var i=0;i<e.length;i++){var o=e[i].visible[t];if(o)return o}return null}var AP=function(t){var e=t.impact,i=t.viewport,o=t.destination,s=t.draggables,u=t.maxScrollChange,c=Cy(i,ot(i.scroll.current,u)),f=o.frame?Cd(o,ot(o.frame.scroll.current,u)):o,h=e.displaced,g=Fo({afterDragging:cm(h.all,s),destination:o,displacedBy:e.displacedBy,viewport:c.frame,last:h,forceShouldAnimate:!1}),w=Fo({afterDragging:cm(h.all,s),destination:f,displacedBy:e.displacedBy,viewport:i.frame,last:h,forceShouldAnimate:!1}),m={},y={},S=[h,g,w];h.all.forEach(function(P){var k=RP(P,S);if(k){y[P]=k;return}m[P]=!0});var I=ae({},e,{displaced:{all:h.all,invisible:m,visible:y}});return I},OP=function(t,e){return ot(t.scroll.diff.displacement,e)},Td=function(t){var e=t.pageBorderBoxCenter,i=t.draggable,o=t.viewport,s=OP(o,e),u=kt(s,i.page.borderBox.center);return ot(i.client.borderBox.center,u)},xy=function(t){var e=t.draggable,i=t.destination,o=t.newPageBorderBoxCenter,s=t.viewport,u=t.withDroppableDisplacement,c=t.onlyOnMainAxis,f=c===void 0?!1:c,h=kt(o,e.page.borderBox.center),g=qo(e.page.borderBox,h),w={target:g,destination:i,withDroppableDisplacement:u,viewport:s};return f?yP(w):Iy(w)},NP=function(t){var e=t.isMovingForward,i=t.draggable,o=t.destination,s=t.draggables,u=t.previousImpact,c=t.viewport,f=t.previousPageBorderBoxCenter,h=t.previousClientSelection,g=t.afterCritical;if(!o.isEnabled)return null;var w=ki(o.descriptor.id,s),m=Di(i,o),y=cP({isMovingForward:e,draggable:i,destination:o,insideDestination:w,previousImpact:u})||CP({isMovingForward:e,isInHomeList:m,draggable:i,draggables:s,destination:o,insideDestination:w,previousImpact:u,viewport:c,afterCritical:g});if(!y)return null;var S=rl({impact:y,draggable:i,droppable:o,draggables:s,afterCritical:g}),I=xy({draggable:i,destination:o,newPageBorderBoxCenter:S,viewport:c.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(I){var P=Td({pageBorderBoxCenter:S,draggable:i,viewport:c});return{clientSelection:P,impact:y,scrollJumpRequest:null}}var k=kt(S,f),T=AP({impact:y,viewport:c,destination:o,draggables:s,maxScrollChange:k});return{clientSelection:h,impact:T,scrollJumpRequest:k}},ft=function(e){var i=e.subject.active;return i||q(),i},LP=function(t){var e=t.isMovingForward,i=t.pageBorderBoxCenter,o=t.source,s=t.droppables,u=t.viewport,c=o.subject.active;if(!c)return null;var f=o.axis,h=jt(c[f.start],c[f.end]),g=Zs(s).filter(function(m){return m!==o}).filter(function(m){return m.isEnabled}).filter(function(m){return!!m.subject.active}).filter(function(m){return Sy(u.frame)(ft(m))}).filter(function(m){var y=ft(m);return e?c[f.crossAxisEnd]<y[f.crossAxisEnd]:y[f.crossAxisStart]<c[f.crossAxisStart]}).filter(function(m){var y=ft(m),S=jt(y[f.start],y[f.end]);return h(y[f.start])||h(y[f.end])||S(c[f.start])||S(c[f.end])}).sort(function(m,y){var S=ft(m)[f.crossAxisStart],I=ft(y)[f.crossAxisStart];return e?S-I:I-S}).filter(function(m,y,S){return ft(m)[f.crossAxisStart]===ft(S[0])[f.crossAxisStart]});if(!g.length)return null;if(g.length===1)return g[0];var w=g.filter(function(m){var y=jt(ft(m)[f.start],ft(m)[f.end]);return y(i[f.line])});return w.length===1?w[0]:w.length>1?w.sort(function(m,y){return ft(m)[f.start]-ft(y)[f.start]})[0]:g.sort(function(m,y){var S=om(i,am(ft(m))),I=om(i,am(ft(y)));return S!==I?S-I:ft(m)[f.start]-ft(y)[f.start]})[0]},dm=function(e,i){var o=e.page.borderBox.center;return on(e.descriptor.id,i)?kt(o,i.displacedBy.point):o},MP=function(e,i){var o=e.page.borderBox;return on(e.descriptor.id,i)?qo(o,_i(i.displacedBy.point)):o},BP=function(t){var e=t.pageBorderBoxCenter,i=t.viewport,o=t.destination,s=t.insideDestination,u=t.afterCritical,c=s.filter(function(f){return Iy({target:MP(f,u),destination:o,viewport:i.frame,withDroppableDisplacement:!0})}).sort(function(f,h){var g=Mo(e,Qc(o,dm(f,u))),w=Mo(e,Qc(o,dm(h,u)));return g<w?-1:w<g?1:f.descriptor.index-h.descriptor.index});return c[0]||null},Ko=tt(function(e,i){var o=i[e.line];return{value:o,point:On(e.line,o)}}),FP=function(e,i,o){var s=e.axis;if(e.descriptor.mode==="virtual")return On(s.line,i[s.line]);var u=e.subject.page.contentBox[s.size],c=ki(e.descriptor.id,o),f=c.reduce(function(w,m){return w+m.client.marginBox[s.size]},0),h=f+i[s.line],g=h-u;return g<=0?null:On(s.line,g)},Py=function(e,i){return ae({},e,{scroll:ae({},e.scroll,{max:i})})},_y=function(e,i,o){var s=e.frame;Di(i,e)&&q(),e.subject.withPlaceholder&&q();var u=Ko(e.axis,i.displaceBy).point,c=FP(e,u,o),f={placeholderSize:u,increasedBy:c,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!s){var h=bi({page:e.subject.page,withPlaceholder:f,axis:e.axis,frame:e.frame});return ae({},e,{subject:h})}var g=c?ot(s.scroll.max,c):s.scroll.max,w=Py(s,g),m=bi({page:e.subject.page,withPlaceholder:f,axis:e.axis,frame:w});return ae({},e,{subject:m,frame:w})},jP=function(e){var i=e.subject.withPlaceholder;i||q();var o=e.frame;if(!o){var s=bi({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return ae({},e,{subject:s})}var u=i.oldFrameMaxScroll;u||q();var c=Py(o,u),f=bi({page:e.subject.page,axis:e.axis,frame:c,withPlaceholder:null});return ae({},e,{subject:f,frame:c})},UP=function(t){var e=t.previousPageBorderBoxCenter,i=t.moveRelativeTo,o=t.insideDestination,s=t.draggable,u=t.draggables,c=t.destination,f=t.viewport,h=t.afterCritical;if(!i){if(o.length)return null;var g={displaced:Bo,displacedBy:wy,at:{type:"REORDER",destination:{droppableId:c.descriptor.id,index:0}}},w=rl({impact:g,draggable:s,droppable:c,draggables:u,afterCritical:h}),m=Di(s,c)?c:_y(c,s,u),y=xy({draggable:s,destination:m,newPageBorderBoxCenter:w,viewport:f.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return y?g:null}var S=e[c.axis.line]<=i.page.borderBox.center[c.axis.line],I=function(){var k=i.descriptor.index;return i.descriptor.id===s.descriptor.id||S?k:k+1}(),P=Ko(c.axis,s.displaceBy);return Us({draggable:s,insideDestination:o,destination:c,viewport:f,displacedBy:P,last:Bo,index:I})},$P=function(t){var e=t.isMovingForward,i=t.previousPageBorderBoxCenter,o=t.draggable,s=t.isOver,u=t.draggables,c=t.droppables,f=t.viewport,h=t.afterCritical,g=LP({isMovingForward:e,pageBorderBoxCenter:i,source:s,droppables:c,viewport:f});if(!g)return null;var w=ki(g.descriptor.id,u),m=BP({pageBorderBoxCenter:i,viewport:f,destination:g,insideDestination:w,afterCritical:h}),y=UP({previousPageBorderBoxCenter:i,destination:g,draggable:o,draggables:u,moveRelativeTo:m,insideDestination:w,viewport:f,afterCritical:h});if(!y)return null;var S=rl({impact:y,draggable:o,droppable:g,draggables:u,afterCritical:h}),I=Td({pageBorderBoxCenter:S,draggable:o,viewport:f});return{clientSelection:I,impact:y,scrollJumpRequest:null}},Dt=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},zP=function(e,i){var o=Dt(e);return o?i[o]:null},WP=function(t){var e=t.state,i=t.type,o=zP(e.impact,e.dimensions.droppables),s=!!o,u=e.dimensions.droppables[e.critical.droppable.id],c=o||u,f=c.axis.direction,h=f==="vertical"&&(i==="MOVE_UP"||i==="MOVE_DOWN")||f==="horizontal"&&(i==="MOVE_LEFT"||i==="MOVE_RIGHT");if(h&&!s)return null;var g=i==="MOVE_DOWN"||i==="MOVE_RIGHT",w=e.dimensions.draggables[e.critical.draggable.id],m=e.current.page.borderBoxCenter,y=e.dimensions,S=y.draggables,I=y.droppables;return h?NP({isMovingForward:g,previousPageBorderBoxCenter:m,draggable:w,destination:c,draggables:S,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):$P({isMovingForward:g,previousPageBorderBoxCenter:m,draggable:w,isOver:c,draggables:S,droppables:I,viewport:e.viewport,afterCritical:e.afterCritical})};function Pn(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function ky(t){var e=jt(t.top,t.bottom),i=jt(t.left,t.right);return function(s){return e(s.y)&&i(s.x)}}function HP(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function VP(t){var e=t.pageBorderBox,i=t.draggable,o=t.candidates,s=i.page.borderBox.center,u=o.map(function(c){var f=c.axis,h=On(c.axis.line,e.center[f.line],c.page.borderBox.center[f.crossAxisLine]);return{id:c.descriptor.id,distance:Mo(s,h)}}).sort(function(c,f){return f.distance-c.distance});return u[0]?u[0].id:null}function GP(t){var e=t.pageBorderBox,i=t.draggable,o=t.droppables,s=Zs(o).filter(function(u){if(!u.isEnabled)return!1;var c=u.subject.active;if(!c||!HP(e,c))return!1;if(ky(c)(e.center))return!0;var f=u.axis,h=c.center[f.crossAxisLine],g=e[f.crossAxisStart],w=e[f.crossAxisEnd],m=jt(c[f.crossAxisStart],c[f.crossAxisEnd]),y=m(g),S=m(w);return!y&&!S?!0:y?g<h:w>h});return s.length?s.length===1?s[0].descriptor.id:VP({pageBorderBox:e,draggable:i,candidates:s}):null}var Dy=function(e,i){return Qt(qo(e,i))},qP=function(t,e){var i=t.frame;return i?Dy(e,i.scroll.diff.value):e};function Ty(t){var e=t.displaced,i=t.id;return!!(e.visible[i]||e.invisible[i])}function KP(t){var e=t.draggable,i=t.closest,o=t.inHomeList;return i?o&&i.descriptor.index>e.descriptor.index?i.descriptor.index-1:i.descriptor.index:null}var YP=function(t){var e=t.pageBorderBoxWithDroppableScroll,i=t.draggable,o=t.destination,s=t.insideDestination,u=t.last,c=t.viewport,f=t.afterCritical,h=o.axis,g=Ko(o.axis,i.displaceBy),w=g.value,m=e[h.start],y=e[h.end],S=tl(i,s),I=un(S,function(k){var T=k.descriptor.id,O=k.page.borderBox.center[h.line],L=on(T,f),M=Ty({displaced:u,id:T});return L?M?y<=O:m<O-w:M?y<=O+w:m<O}),P=KP({draggable:i,closest:I,inHomeList:Di(i,o)});return Us({draggable:i,insideDestination:s,destination:o,viewport:c,last:u,displacedBy:g,index:P})},QP=4,JP=function(t){var e=t.draggable,i=t.pageBorderBoxWithDroppableScroll,o=t.previousImpact,s=t.destination,u=t.insideDestination,c=t.afterCritical;if(!s.isCombineEnabled)return null;var f=s.axis,h=Ko(s.axis,e.displaceBy),g=h.value,w=i[f.start],m=i[f.end],y=tl(e,u),S=un(y,function(P){var k=P.descriptor.id,T=P.page.borderBox,O=T[f.size],L=O/QP,M=on(k,c),R=Ty({displaced:o.displaced,id:k});return M?R?m>T[f.start]+L&&m<T[f.end]-L:w>T[f.start]-g+L&&w<T[f.end]-g-L:R?m>T[f.start]+g+L&&m<T[f.end]+g-L:w>T[f.start]+L&&w<T[f.end]-L});if(!S)return null;var I={displacedBy:h,displaced:o.displaced,at:{type:"COMBINE",combine:{draggableId:S.descriptor.id,droppableId:s.descriptor.id}}};return I},Ry=function(t){var e=t.pageOffset,i=t.draggable,o=t.draggables,s=t.droppables,u=t.previousImpact,c=t.viewport,f=t.afterCritical,h=Dy(i.page.borderBox,e),g=GP({pageBorderBox:h,draggable:i,droppables:s});if(!g)return dP;var w=s[g],m=ki(w.descriptor.id,o),y=qP(w,h);return JP({pageBorderBoxWithDroppableScroll:y,draggable:i,previousImpact:u,destination:w,insideDestination:m,afterCritical:f})||YP({pageBorderBoxWithDroppableScroll:y,draggable:i,destination:w,insideDestination:m,last:u.displaced,viewport:c,afterCritical:f})},Rd=function(t,e){var i;return ae({},t,(i={},i[e.descriptor.id]=e,i))},XP=function(e){var i=e.previousImpact,o=e.impact,s=e.droppables,u=Dt(i),c=Dt(o);if(!u||u===c)return s;var f=s[u];if(!f.subject.withPlaceholder)return s;var h=jP(f);return Rd(s,h)},ZP=function(t){var e=t.draggable,i=t.draggables,o=t.droppables,s=t.previousImpact,u=t.impact,c=XP({previousImpact:s,impact:u,droppables:o}),f=Dt(u);if(!f)return c;var h=o[f];if(Di(e,h)||h.subject.withPlaceholder)return c;var g=_y(h,e,i);return Rd(c,g)},xo=function(t){var e=t.state,i=t.clientSelection,o=t.dimensions,s=t.viewport,u=t.impact,c=t.scrollJumpRequest,f=s||e.viewport,h=o||e.dimensions,g=i||e.current.client.selection,w=kt(g,e.initial.client.selection),m={offset:w,selection:g,borderBoxCenter:ot(e.initial.client.borderBoxCenter,w)},y={selection:ot(m.selection,f.scroll.current),borderBoxCenter:ot(m.borderBoxCenter,f.scroll.current),offset:ot(m.offset,f.scroll.diff.value)},S={client:m,page:y};if(e.phase==="COLLECTING")return ae({phase:"COLLECTING"},e,{dimensions:h,viewport:f,current:S});var I=h.draggables[e.critical.draggable.id],P=u||Ry({pageOffset:y.offset,draggable:I,draggables:h.draggables,droppables:h.droppables,previousImpact:e.impact,viewport:f,afterCritical:e.afterCritical}),k=ZP({draggable:I,impact:P,previousImpact:e.impact,draggables:h.draggables,droppables:h.droppables}),T=ae({},e,{current:S,dimensions:{draggables:h.draggables,droppables:k},impact:P,viewport:f,scrollJumpRequest:c||null,forceShouldAnimate:c?!1:null});return T};function e_(t,e){return t.map(function(i){return e[i]})}var Ay=function(t){var e=t.impact,i=t.viewport,o=t.draggables,s=t.destination,u=t.forceShouldAnimate,c=e.displaced,f=e_(c.all,o),h=Fo({afterDragging:f,destination:s,displacedBy:e.displacedBy,viewport:i.frame,forceShouldAnimate:u,last:c});return ae({},e,{displaced:h})},Oy=function(t){var e=t.impact,i=t.draggable,o=t.droppable,s=t.draggables,u=t.viewport,c=t.afterCritical,f=rl({impact:e,draggable:i,draggables:s,droppable:o,afterCritical:c});return Td({pageBorderBoxCenter:f,draggable:i,viewport:u})},Ny=function(t){var e=t.state,i=t.dimensions,o=t.viewport;e.movementMode!=="SNAP"&&q();var s=e.impact,u=o||e.viewport,c=i||e.dimensions,f=c.draggables,h=c.droppables,g=f[e.critical.draggable.id],w=Dt(s);w||q();var m=h[w],y=Ay({impact:s,viewport:u,destination:m,draggables:f}),S=Oy({impact:y,draggable:g,droppable:m,draggables:f,viewport:u,afterCritical:e.afterCritical});return xo({impact:y,clientSelection:S,state:e,dimensions:c,viewport:u})},t_=function(t){return{index:t.index,droppableId:t.droppableId}},Ly=function(t){var e=t.draggable,i=t.home,o=t.draggables,s=t.viewport,u=Ko(i.axis,e.displaceBy),c=ki(i.descriptor.id,o),f=c.indexOf(e);f===-1&&q();var h=c.slice(f+1),g=h.reduce(function(S,I){return S[I.descriptor.id]=!0,S},{}),w={inVirtualList:i.descriptor.mode==="virtual",displacedBy:u,effected:g},m=Fo({afterDragging:h,destination:i,displacedBy:u,last:null,viewport:s.frame,forceShouldAnimate:!1}),y={displaced:m,displacedBy:u,at:{type:"REORDER",destination:t_(e.descriptor)}};return{impact:y,afterCritical:w}},r_=function(t,e){return{draggables:t.draggables,droppables:Rd(t.droppables,e)}},n_=function(t){var e=t.draggable,i=t.offset,o=t.initialWindowScroll,s=Ls(e.client,i),u=Ms(s,o),c=ae({},e,{placeholder:ae({},e.placeholder,{client:s}),client:s,page:u});return c},i_=function(t){var e=t.frame;return e||q(),e},o_=function(t){var e=t.additions,i=t.updatedDroppables,o=t.viewport,s=o.scroll.diff.value;return e.map(function(u){var c=u.descriptor.droppableId,f=i[c],h=i_(f),g=h.scroll.diff.value,w=ot(s,g),m=n_({draggable:u,offset:w,initialWindowScroll:o.scroll.initial});return m})},a_=function(t){var e=t.state,i=t.published,o=i.modified.map(function(L){var M=e.dimensions.droppables[L.droppableId],R=Cd(M,L.scroll);return R}),s=ae({},e.dimensions.droppables,{},vy(o)),u=yy(o_({additions:i.additions,updatedDroppables:s,viewport:e.viewport})),c=ae({},e.dimensions.draggables,{},u);i.removals.forEach(function(L){delete c[L]});var f={droppables:s,draggables:c},h=Dt(e.impact),g=h?f.droppables[h]:null,w=f.draggables[e.critical.draggable.id],m=f.droppables[e.critical.droppable.id],y=Ly({draggable:w,home:m,draggables:c,viewport:e.viewport}),S=y.impact,I=y.afterCritical,P=g&&g.isCombineEnabled?e.impact:S,k=Ry({pageOffset:e.current.page.offset,draggable:f.draggables[e.critical.draggable.id],draggables:f.draggables,droppables:f.droppables,previousImpact:P,viewport:e.viewport,afterCritical:I}),T=ae({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:k,onLiftImpact:S,dimensions:f,afterCritical:I,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return T;var O=ae({phase:"DROP_PENDING"},T,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return O},Jc=function(e){return e.movementMode==="SNAP"},Ec=function(e,i,o){var s=r_(e.dimensions,i);return!Jc(e)||o?xo({state:e,dimensions:s}):Ny({state:e,dimensions:s})};function Cc(t){return t.isDragging&&t.movementMode==="SNAP"?ae({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var fm={phase:"IDLE",completed:null,shouldFlush:!1},s_=function(t,e){if(t===void 0&&(t=fm),e.type==="FLUSH")return ae({},fm,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&q();var i=e.payload,o=i.critical,s=i.clientSelection,u=i.viewport,c=i.dimensions,f=i.movementMode,h=c.draggables[o.draggable.id],g=c.droppables[o.droppable.id],w={selection:s,borderBoxCenter:h.client.borderBox.center,offset:rt},m={client:w,page:{selection:ot(w.selection,u.scroll.initial),borderBoxCenter:ot(w.selection,u.scroll.initial),offset:ot(w.selection,u.scroll.diff.value)}},y=Zs(c.droppables).every(function(It){return!It.isFixedOnPage}),S=Ly({draggable:h,home:g,draggables:c.draggables,viewport:u}),I=S.impact,P=S.afterCritical,k={phase:"DRAGGING",isDragging:!0,critical:o,movementMode:f,dimensions:c,initial:m,current:m,isWindowScrollAllowed:y,impact:I,afterCritical:P,onLiftImpact:I,viewport:u,scrollJumpRequest:null,forceShouldAnimate:null};return k}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&q();var T=ae({phase:"COLLECTING"},t,{phase:"COLLECTING"});return T}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||q(),a_({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Pn(t)||q();var O=e.payload.client;return rn(O,t.current.client.selection)?t:xo({state:t,clientSelection:O,impact:Jc(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return Cc(t);Pn(t)||q();var L=e.payload,M=L.id,R=L.newScroll,F=t.dimensions.droppables[M];if(!F)return t;var z=Cd(F,R);return Ec(t,z,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Pn(t)||q();var le=e.payload,ne=le.id,ve=le.isEnabled,he=t.dimensions.droppables[ne];he||q(),he.isEnabled===ve&&q();var Ae=ae({},he,{isEnabled:ve});return Ec(t,Ae,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Pn(t)||q();var V=e.payload,ye=V.id,Le=V.isCombineEnabled,De=t.dimensions.droppables[ye];De||q(),De.isCombineEnabled===Le&&q();var Ee=ae({},De,{isCombineEnabled:Le});return Ec(t,Ee,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Pn(t)||q(),t.isWindowScrollAllowed||q();var G=e.payload.newScroll;if(rn(t.viewport.scroll.current,G))return Cc(t);var J=Cy(t.viewport,G);return Jc(t)?Ny({state:t,viewport:J}):xo({state:t,viewport:J})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Pn(t))return t;var Y=e.payload.maxScroll;if(rn(Y,t.viewport.scroll.max))return t;var x=ae({},t.viewport,{scroll:ae({},t.viewport.scroll,{max:Y})});return ae({phase:"DRAGGING"},t,{viewport:x})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&q();var B=WP({state:t,type:e.type});return B?xo({state:t,impact:B.impact,clientSelection:B.clientSelection,scrollJumpRequest:B.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var ue=e.payload.reason;t.phase!=="COLLECTING"&&q();var de=ae({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:ue});return de}if(e.type==="DROP_ANIMATE"){var fe=e.payload,pe=fe.completed,Se=fe.dropDuration,ge=fe.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||q();var be={phase:"DROP_ANIMATING",completed:pe,dropDuration:Se,newHomeClientOffset:ge,dimensions:t.dimensions};return be}if(e.type==="DROP_COMPLETE"){var je=e.payload.completed;return{phase:"IDLE",completed:je,shouldFlush:!1}}return t},l_=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},u_=function(e){return{type:"LIFT",payload:e}},c_=function(e){return{type:"INITIAL_PUBLISH",payload:e}},d_=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},f_=function(){return{type:"COLLECTION_STARTING",payload:null}},p_=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},h_=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},g_=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},My=function(e){return{type:"MOVE",payload:e}},m_=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},v_=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},y_=function(){return{type:"MOVE_UP",payload:null}},w_=function(){return{type:"MOVE_DOWN",payload:null}},S_=function(){return{type:"MOVE_RIGHT",payload:null}},b_=function(){return{type:"MOVE_LEFT",payload:null}},Ad=function(){return{type:"FLUSH",payload:null}},I_=function(e){return{type:"DROP_ANIMATE",payload:e}},Od=function(e){return{type:"DROP_COMPLETE",payload:e}},By=function(e){return{type:"DROP",payload:e}},E_=function(e){return{type:"DROP_PENDING",payload:e}},Fy=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},C_=function(t){return function(e){var i=e.getState,o=e.dispatch;return function(s){return function(u){if(u.type!=="LIFT"){s(u);return}var c=u.payload,f=c.id,h=c.clientSelection,g=c.movementMode,w=i();w.phase==="DROP_ANIMATING"&&o(Od({completed:w.completed})),i().phase!=="IDLE"&&q(),o(Ad()),o(l_({draggableId:f,movementMode:g}));var m={shouldPublishImmediately:g==="SNAP"},y={draggableId:f,scrollOptions:m},S=t.startPublishing(y),I=S.critical,P=S.dimensions,k=S.viewport;o(c_({critical:I,dimensions:P,clientSelection:h,movementMode:g,viewport:k}))}}}},x_=function(t){return function(){return function(e){return function(i){i.type==="INITIAL_PUBLISH"&&t.dragging(),i.type==="DROP_ANIMATE"&&t.dropping(i.payload.completed.result.reason),(i.type==="FLUSH"||i.type==="DROP_COMPLETE")&&t.resting(),e(i)}}}},Nd={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},jo={opacity:{drop:0,combining:.7},scale:{drop:.75}},Ld={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Cn=Ld.outOfTheWay+"s "+Nd.outOfTheWay,Po={fluid:"opacity "+Cn,snap:"transform "+Cn+", opacity "+Cn,drop:function(e){var i=e+"s "+Nd.drop;return"transform "+i+", opacity "+i},outOfTheWay:"transform "+Cn,placeholder:"height "+Cn+", width "+Cn+", margin "+Cn},pm=function(e){return rn(e,rt)?null:"translate("+e.x+"px, "+e.y+"px)"},Xc={moveTo:pm,drop:function(e,i){var o=pm(e);return o?i?o+" scale("+jo.scale.drop+")":o:null}},Zc=Ld.minDropTime,jy=Ld.maxDropTime,P_=jy-Zc,hm=1500,__=.6,k_=function(t){var e=t.current,i=t.destination,o=t.reason,s=Mo(e,i);if(s<=0)return Zc;if(s>=hm)return jy;var u=s/hm,c=Zc+P_*u,f=o==="CANCEL"?c*__:c;return Number(f.toFixed(2))},D_=function(t){var e=t.impact,i=t.draggable,o=t.dimensions,s=t.viewport,u=t.afterCritical,c=o.draggables,f=o.droppables,h=Dt(e),g=h?f[h]:null,w=f[i.descriptor.droppableId],m=Oy({impact:e,draggable:i,draggables:c,afterCritical:u,droppable:g||w,viewport:s}),y=kt(m,i.client.borderBox.center);return y},T_=function(t){var e=t.draggables,i=t.reason,o=t.lastImpact,s=t.home,u=t.viewport,c=t.onLiftImpact;if(!o.at||i!=="DROP"){var f=Ay({draggables:e,impact:c,destination:s,viewport:u,forceShouldAnimate:!0});return{impact:f,didDropInsideDroppable:!1}}if(o.at.type==="REORDER")return{impact:o,didDropInsideDroppable:!0};var h=ae({},o,{displaced:Bo});return{impact:h,didDropInsideDroppable:!0}},R_=function(t){var e=t.getState,i=t.dispatch;return function(o){return function(s){if(s.type!=="DROP"){o(s);return}var u=e(),c=s.payload.reason;if(u.phase==="COLLECTING"){i(E_({reason:c}));return}if(u.phase!=="IDLE"){var f=u.phase==="DROP_PENDING"&&u.isWaiting;f&&q(),u.phase==="DRAGGING"||u.phase==="DROP_PENDING"||q();var h=u.critical,g=u.dimensions,w=g.draggables[u.critical.draggable.id],m=T_({reason:c,lastImpact:u.impact,afterCritical:u.afterCritical,onLiftImpact:u.onLiftImpact,home:u.dimensions.droppables[u.critical.droppable.id],viewport:u.viewport,draggables:u.dimensions.draggables}),y=m.impact,S=m.didDropInsideDroppable,I=S?Pd(y):null,P=S?el(y):null,k={index:h.draggable.index,droppableId:h.droppable.id},T={draggableId:w.descriptor.id,type:w.descriptor.type,source:k,reason:c,mode:u.movementMode,destination:I,combine:P},O=D_({impact:y,draggable:w,dimensions:g,viewport:u.viewport,afterCritical:u.afterCritical}),L={critical:u.critical,afterCritical:u.afterCritical,result:T,impact:y},M=!rn(u.current.client.offset,O)||!!T.combine;if(!M){i(Od({completed:L}));return}var R=k_({current:u.current.client.offset,destination:O,reason:c}),F={newHomeClientOffset:O,dropDuration:R,completed:L};i(I_(F))}}}},Uy=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function A_(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(i){i.target!==window&&i.target!==window.document||t()}}}function O_(t){var e=t.onWindowScroll;function i(){e(Uy())}var o=Lo(i),s=A_(o),u=tn;function c(){return u!==tn}function f(){c()&&q(),u=Ft(window,[s])}function h(){c()||q(),o.cancel(),u(),u=tn}return{start:f,stop:h,isActive:c}}var N_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},L_=function(t){var e=O_({onWindowScroll:function(o){t.dispatch(m_({newScroll:o}))}});return function(i){return function(o){!e.isActive()&&o.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&N_(o)&&e.stop(),i(o)}}},M_=function(t){var e=!1,i=!1,o=setTimeout(function(){i=!0}),s=function(c){e||i||(e=!0,t(c),clearTimeout(o))};return s.wasCalled=function(){return e},s},B_=function(){var t=[],e=function(u){var c=xd(t,function(g){return g.timerId===u});c===-1&&q();var f=t.splice(c,1),h=f[0];h.callback()},i=function(u){var c=setTimeout(function(){return e(c)}),f={timerId:c,callback:u};t.push(f)},o=function(){if(t.length){var u=[].concat(t);t.length=0,u.forEach(function(c){clearTimeout(c.timerId),c.callback()})}};return{add:i,flush:o}},F_=function(e,i){return e==null&&i==null?!0:e==null||i==null?!1:e.droppableId===i.droppableId&&e.index===i.index},j_=function(e,i){return e==null&&i==null?!0:e==null||i==null?!1:e.draggableId===i.draggableId&&e.droppableId===i.droppableId},U_=function(e,i){if(e===i)return!0;var o=e.draggable.id===i.draggable.id&&e.draggable.droppableId===i.draggable.droppableId&&e.draggable.type===i.draggable.type&&e.draggable.index===i.draggable.index,s=e.droppable.id===i.droppable.id&&e.droppable.type===i.droppable.type;return o&&s},vo=function(e,i){i()},ls=function(e,i){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:i}},xc=function(e,i,o,s){if(!e){o(s(i));return}var u=M_(o),c={announce:u};e(i,c),u.wasCalled()||o(s(i))},$_=function(t,e){var i=B_(),o=null,s=function(y,S){o&&q(),vo("onBeforeCapture",function(){var I=t().onBeforeCapture;if(I){var P={draggableId:y,mode:S};I(P)}})},u=function(y,S){o&&q(),vo("onBeforeDragStart",function(){var I=t().onBeforeDragStart;I&&I(ls(y,S))})},c=function(y,S){o&&q();var I=ls(y,S);o={mode:S,lastCritical:y,lastLocation:I.source,lastCombine:null},i.add(function(){vo("onDragStart",function(){return xc(t().onDragStart,I,e,Is.onDragStart)})})},f=function(y,S){var I=Pd(S),P=el(S);o||q();var k=!U_(y,o.lastCritical);k&&(o.lastCritical=y);var T=!F_(o.lastLocation,I);T&&(o.lastLocation=I);var O=!j_(o.lastCombine,P);if(O&&(o.lastCombine=P),!(!k&&!T&&!O)){var L=ae({},ls(y,o.mode),{combine:P,destination:I});i.add(function(){vo("onDragUpdate",function(){return xc(t().onDragUpdate,L,e,Is.onDragUpdate)})})}},h=function(){o||q(),i.flush()},g=function(y){o||q(),o=null,vo("onDragEnd",function(){return xc(t().onDragEnd,y,e,Is.onDragEnd)})},w=function(){if(o){var y=ae({},ls(o.lastCritical,o.mode),{combine:null,destination:null,reason:"CANCEL"});g(y)}};return{beforeCapture:s,beforeStart:u,start:c,update:f,flush:h,drop:g,abort:w}},z_=function(t,e){var i=$_(t,e);return function(o){return function(s){return function(u){if(u.type==="BEFORE_INITIAL_CAPTURE"){i.beforeCapture(u.payload.draggableId,u.payload.movementMode);return}if(u.type==="INITIAL_PUBLISH"){var c=u.payload.critical;i.beforeStart(c,u.payload.movementMode),s(u),i.start(c,u.payload.movementMode);return}if(u.type==="DROP_COMPLETE"){var f=u.payload.completed.result;i.flush(),s(u),i.drop(f);return}if(s(u),u.type==="FLUSH"){i.abort();return}var h=o.getState();h.phase==="DRAGGING"&&i.update(h.critical,h.impact)}}}},W_=function(t){return function(e){return function(i){if(i.type!=="DROP_ANIMATION_FINISHED"){e(i);return}var o=t.getState();o.phase!=="DROP_ANIMATING"&&q(),t.dispatch(Od({completed:o.completed}))}}},H_=function(t){var e=null,i=null;function o(){i&&(cancelAnimationFrame(i),i=null),e&&(e(),e=null)}return function(s){return function(u){if((u.type==="FLUSH"||u.type==="DROP_COMPLETE"||u.type==="DROP_ANIMATION_FINISHED")&&o(),s(u),u.type==="DROP_ANIMATE"){var c={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var h=t.getState();h.phase==="DROP_ANIMATING"&&t.dispatch(Fy())}};i=requestAnimationFrame(function(){i=null,e=Ft(window,[c])})}}}},V_=function(t){return function(){return function(e){return function(i){(i.type==="DROP_COMPLETE"||i.type==="FLUSH"||i.type==="DROP_ANIMATE")&&t.stopPublishing(),e(i)}}}},G_=function(t){var e=!1;return function(){return function(i){return function(o){if(o.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(o.payload.critical.draggable.id),i(o),t.tryRestoreFocusRecorded();return}if(i(o),!!e){if(o.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(o.type==="DROP_COMPLETE"){e=!1;var s=o.payload.completed.result;s.combine&&t.tryShiftRecord(s.draggableId,s.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},q_=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},K_=function(t){return function(e){return function(i){return function(o){if(q_(o)){t.stop(),i(o);return}if(o.type==="INITIAL_PUBLISH"){i(o);var s=e.getState();s.phase!=="DRAGGING"&&q(),t.start(s);return}i(o),t.scroll(e.getState())}}}},Y_=function(t){return function(e){return function(i){if(e(i),i.type==="PUBLISH_WHILE_DRAGGING"){var o=t.getState();o.phase==="DROP_PENDING"&&(o.isWaiting||t.dispatch(By({reason:o.reason})))}}}},Q_=ty,J_=function(t){var e=t.dimensionMarshal,i=t.focusMarshal,o=t.styleMarshal,s=t.getResponders,u=t.announce,c=t.autoScroller;return ey(s_,Q_(ex(x_(o),V_(e),C_(e),R_,W_,H_,Y_,K_(c),L_,G_(i),z_(s,u))))},Pc=function(){return{additions:{},removals:{},modified:{}}};function X_(t){var e=t.registry,i=t.callbacks,o=Pc(),s=null,u=function(){s||(i.collectionStarting(),s=requestAnimationFrame(function(){s=null;var w=o,m=w.additions,y=w.removals,S=w.modified,I=Object.keys(m).map(function(T){return e.draggable.getById(T).getDimension(rt)}).sort(function(T,O){return T.descriptor.index-O.descriptor.index}),P=Object.keys(S).map(function(T){var O=e.droppable.getById(T),L=O.callbacks.getScrollWhileDragging();return{droppableId:T,scroll:L}}),k={additions:I,removals:Object.keys(y),modified:P};o=Pc(),i.publish(k)}))},c=function(w){var m=w.descriptor.id;o.additions[m]=w,o.modified[w.descriptor.droppableId]=!0,o.removals[m]&&delete o.removals[m],u()},f=function(w){var m=w.descriptor;o.removals[m.id]=!0,o.modified[m.droppableId]=!0,o.additions[m.id]&&delete o.additions[m.id],u()},h=function(){s&&(cancelAnimationFrame(s),s=null,o=Pc())};return{add:c,remove:f,stop:h}}var $y=function(t){var e=t.scrollHeight,i=t.scrollWidth,o=t.height,s=t.width,u=kt({x:i,y:e},{x:s,y:o}),c={x:Math.max(0,u.x),y:Math.max(0,u.y)};return c},zy=function(){var t=document.documentElement;return t||q(),t},Wy=function(){var t=zy(),e=$y({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},Z_=function(){var t=Uy(),e=Wy(),i=t.y,o=t.x,s=zy(),u=s.clientWidth,c=s.clientHeight,f=o+u,h=i+c,g=Qt({top:i,left:o,right:f,bottom:h}),w={frame:g,scroll:{initial:t,current:t,max:e,diff:{value:rt,displacement:rt}}};return w},ek=function(t){var e=t.critical,i=t.scrollOptions,o=t.registry,s=Z_(),u=s.scroll.current,c=e.droppable,f=o.droppable.getAllByType(c.type).map(function(m){return m.callbacks.getDimensionAndWatchScroll(u,i)}),h=o.draggable.getAllByType(e.draggable.type).map(function(m){return m.getDimension(u)}),g={draggables:yy(h),droppables:vy(f)},w={dimensions:g,critical:e,viewport:s};return w};function gm(t,e,i){if(i.descriptor.id===e.id||i.descriptor.type!==e.type)return!1;var o=t.droppable.getById(i.descriptor.droppableId);return o.descriptor.mode==="virtual"}var tk=function(t,e){var i=null,o=X_({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),s=function(S,I){t.droppable.exists(S)||q(),i&&e.updateDroppableIsEnabled({id:S,isEnabled:I})},u=function(S,I){i&&(t.droppable.exists(S)||q(),e.updateDroppableIsCombineEnabled({id:S,isCombineEnabled:I}))},c=function(S,I){i&&(t.droppable.exists(S)||q(),e.updateDroppableScroll({id:S,newScroll:I}))},f=function(S,I){i&&t.droppable.getById(S).callbacks.scroll(I)},h=function(){if(i){o.stop();var S=i.critical.droppable;t.droppable.getAllByType(S.type).forEach(function(I){return I.callbacks.dragStopped()}),i.unsubscribe(),i=null}},g=function(S){i||q();var I=i.critical.draggable;S.type==="ADDITION"&&gm(t,I,S.value)&&o.add(S.value),S.type==="REMOVAL"&&gm(t,I,S.value)&&o.remove(S.value)},w=function(S){i&&q();var I=t.draggable.getById(S.draggableId),P=t.droppable.getById(I.descriptor.droppableId),k={draggable:I.descriptor,droppable:P.descriptor},T=t.subscribe(g);return i={critical:k,unsubscribe:T},ek({critical:k,registry:t,scrollOptions:S.scrollOptions})},m={updateDroppableIsEnabled:s,updateDroppableIsCombineEnabled:u,scrollDroppable:f,updateDroppableScroll:c,startPublishing:w,stopPublishing:h};return m},Hy=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},rk=function(t){window.scrollBy(t.x,t.y)},nk=tt(function(t){return Zs(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),ik=function(e,i){var o=un(nk(i),function(s){return s.frame||q(),ky(s.frame.pageMarginBox)(e)});return o},ok=function(t){var e=t.center,i=t.destination,o=t.droppables;if(i){var s=o[i];return s.frame?s:null}var u=ik(e,o);return u},nn={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},ak=function(t,e){var i=t[e.size]*nn.startFromPercentage,o=t[e.size]*nn.maxScrollAtPercentage,s={startScrollingFrom:i,maxScrollValueAt:o};return s},Vy=function(t){var e=t.startOfRange,i=t.endOfRange,o=t.current,s=i-e;if(s===0)return 0;var u=o-e,c=u/s;return c},Md=1,sk=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return nn.maxPixelScroll;if(t===e.startScrollingFrom)return Md;var i=Vy({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),o=1-i,s=nn.maxPixelScroll*nn.ease(o);return Math.ceil(s)},mm=nn.durationDampening.accelerateAt,vm=nn.durationDampening.stopDampeningAt,lk=function(t,e){var i=e,o=vm,s=Date.now(),u=s-i;if(u>=vm)return t;if(u<mm)return Md;var c=Vy({startOfRange:mm,endOfRange:o,current:u}),f=t*nn.ease(c);return Math.ceil(f)},ym=function(t){var e=t.distanceToEdge,i=t.thresholds,o=t.dragStartTime,s=t.shouldUseTimeDampening,u=sk(e,i);return u===0?0:s?Math.max(lk(u,o),Md):u},wm=function(t){var e=t.container,i=t.distanceToEdges,o=t.dragStartTime,s=t.axis,u=t.shouldUseTimeDampening,c=ak(e,s),f=i[s.end]<i[s.start];return f?ym({distanceToEdge:i[s.end],thresholds:c,dragStartTime:o,shouldUseTimeDampening:u}):-1*ym({distanceToEdge:i[s.start],thresholds:c,dragStartTime:o,shouldUseTimeDampening:u})},uk=function(t){var e=t.container,i=t.subject,o=t.proposedScroll,s=i.height>e.height,u=i.width>e.width;return!u&&!s?o:u&&s?null:{x:u?0:o.x,y:s?0:o.y}},ck=gy(function(t){return t===0?0:t}),Gy=function(t){var e=t.dragStartTime,i=t.container,o=t.subject,s=t.center,u=t.shouldUseTimeDampening,c={top:s.y-i.top,right:i.right-s.x,bottom:i.bottom-s.y,left:s.x-i.left},f=wm({container:i,distanceToEdges:c,dragStartTime:e,axis:_d,shouldUseTimeDampening:u}),h=wm({container:i,distanceToEdges:c,dragStartTime:e,axis:by,shouldUseTimeDampening:u}),g=ck({x:h,y:f});if(rn(g,rt))return null;var w=uk({container:i,subject:o,proposedScroll:g});return w?rn(w,rt)?null:w:null},dk=gy(function(t){return t===0?0:t>0?1:-1}),Bd=function(){var t=function(i,o){return i<0?i:i>o?i-o:0};return function(e){var i=e.current,o=e.max,s=e.change,u=ot(i,s),c={x:t(u.x,o.x),y:t(u.y,o.y)};return rn(c,rt)?null:c}}(),qy=function(e){var i=e.max,o=e.current,s=e.change,u={x:Math.max(o.x,i.x),y:Math.max(o.y,i.y)},c=dk(s),f=Bd({max:u,current:o,change:c});return!f||c.x!==0&&f.x===0||c.y!==0&&f.y===0},Fd=function(e,i){return qy({current:e.scroll.current,max:e.scroll.max,change:i})},fk=function(e,i){if(!Fd(e,i))return null;var o=e.scroll.max,s=e.scroll.current;return Bd({current:s,max:o,change:i})},jd=function(e,i){var o=e.frame;return o?qy({current:o.scroll.current,max:o.scroll.max,change:i}):!1},pk=function(e,i){var o=e.frame;return!o||!jd(e,i)?null:Bd({current:o.scroll.current,max:o.scroll.max,change:i})},hk=function(t){var e=t.viewport,i=t.subject,o=t.center,s=t.dragStartTime,u=t.shouldUseTimeDampening,c=Gy({dragStartTime:s,container:e.frame,subject:i,center:o,shouldUseTimeDampening:u});return c&&Fd(e,c)?c:null},gk=function(t){var e=t.droppable,i=t.subject,o=t.center,s=t.dragStartTime,u=t.shouldUseTimeDampening,c=e.frame;if(!c)return null;var f=Gy({dragStartTime:s,container:c.pageMarginBox,subject:i,center:o,shouldUseTimeDampening:u});return f&&jd(e,f)?f:null},Sm=function(t){var e=t.state,i=t.dragStartTime,o=t.shouldUseTimeDampening,s=t.scrollWindow,u=t.scrollDroppable,c=e.current.page.borderBoxCenter,f=e.dimensions.draggables[e.critical.draggable.id],h=f.page.marginBox;if(e.isWindowScrollAllowed){var g=e.viewport,w=hk({dragStartTime:i,viewport:g,subject:h,center:c,shouldUseTimeDampening:o});if(w){s(w);return}}var m=ok({center:c,destination:Dt(e.impact),droppables:e.dimensions.droppables});if(m){var y=gk({dragStartTime:i,droppable:m,subject:h,center:c,shouldUseTimeDampening:o});y&&u(m.descriptor.id,y)}},mk=function(t){var e=t.scrollWindow,i=t.scrollDroppable,o=Lo(e),s=Lo(i),u=null,c=function(w){u||q();var m=u,y=m.shouldUseTimeDampening,S=m.dragStartTime;Sm({state:w,scrollWindow:o,scrollDroppable:s,dragStartTime:S,shouldUseTimeDampening:y})},f=function(w){u&&q();var m=Date.now(),y=!1,S=function(){y=!0};Sm({state:w,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:S,scrollDroppable:S}),u={dragStartTime:m,shouldUseTimeDampening:y},y&&c(w)},h=function(){u&&(o.cancel(),s.cancel(),u=null)};return{start:f,stop:h,scroll:c}},vk=function(t){var e=t.move,i=t.scrollDroppable,o=t.scrollWindow,s=function(g,w){var m=ot(g.current.client.selection,w);e({client:m})},u=function(g,w){if(!jd(g,w))return w;var m=pk(g,w);if(!m)return i(g.descriptor.id,w),null;var y=kt(w,m);i(g.descriptor.id,y);var S=kt(w,y);return S},c=function(g,w,m){if(!g||!Fd(w,m))return m;var y=fk(w,m);if(!y)return o(m),null;var S=kt(m,y);o(S);var I=kt(m,S);return I},f=function(g){var w=g.scrollJumpRequest;if(w){var m=Dt(g.impact);m||q();var y=u(g.dimensions.droppables[m],w);if(y){var S=g.viewport,I=c(g.isWindowScrollAllowed,S,y);I&&s(g,I)}}};return f},yk=function(t){var e=t.scrollDroppable,i=t.scrollWindow,o=t.move,s=mk({scrollWindow:i,scrollDroppable:e}),u=vk({move:o,scrollWindow:i,scrollDroppable:e}),c=function(g){if(g.phase==="DRAGGING"){if(g.movementMode==="FLUID"){s.scroll(g);return}g.scrollJumpRequest&&u(g)}},f={scroll:c,start:s.start,stop:s.stop};return f},Ii="data-rbd",Ei=function(){var t=Ii+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),ed=function(){var t=Ii+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),wk=function(){var t=Ii+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),bm={contextId:Ii+"-scroll-container-context-id"},Sk=function(e){return function(i){return"["+i+'="'+e+'"]'}},yo=function(e,i){return e.map(function(o){var s=o.styles[i];return s?o.selector+" { "+s+" }":""}).join(" ")},bk="pointer-events: none;",Ik=function(t){var e=Sk(t),i=function(){var f=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(Ei.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:f,dragging:bk,dropAnimating:f}}}(),o=function(){var f=`
      transition: `+Po.outOfTheWay+`;
    `;return{selector:e(ed.contextId),styles:{dragging:f,dropAnimating:f,userCancel:f}}}(),s={selector:e(wk.contextId),styles:{always:"overflow-anchor: none;"}},u={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},c=[o,i,s,u];return{always:yo(c,"always"),resting:yo(c,"resting"),dragging:yo(c,"dragging"),dropAnimating:yo(c,"dropAnimating"),userCancel:yo(c,"userCancel")}},Tt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?H.useLayoutEffect:H.useEffect,_c=function(){var e=document.querySelector("head");return e||q(),e},Im=function(e){var i=document.createElement("style");return e&&i.setAttribute("nonce",e),i.type="text/css",i};function Ek(t,e){var i=xe(function(){return Ik(t)},[t]),o=H.useRef(null),s=H.useRef(null),u=re(tt(function(m){var y=s.current;y||q(),y.textContent=m}),[]),c=re(function(m){var y=o.current;y||q(),y.textContent=m},[]);Tt(function(){!o.current&&!s.current||q();var m=Im(e),y=Im(e);return o.current=m,s.current=y,m.setAttribute(Ii+"-always",t),y.setAttribute(Ii+"-dynamic",t),_c().appendChild(m),_c().appendChild(y),c(i.always),u(i.resting),function(){var S=function(P){var k=P.current;k||q(),_c().removeChild(k),P.current=null};S(o),S(s)}},[e,c,u,i.always,i.resting,t]);var f=re(function(){return u(i.dragging)},[u,i.dragging]),h=re(function(m){if(m==="DROP"){u(i.dropAnimating);return}u(i.userCancel)},[u,i.dropAnimating,i.userCancel]),g=re(function(){s.current&&u(i.resting)},[u,i.resting]),w=xe(function(){return{dragging:f,dropping:h,resting:g}},[f,h,g]);return w}var Ky=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function nl(t){return t instanceof Ky(t).HTMLElement}function Ck(t,e){var i="["+Ei.contextId+'="'+t+'"]',o=my(document.querySelectorAll(i));if(!o.length)return null;var s=un(o,function(u){return u.getAttribute(Ei.draggableId)===e});return!s||!nl(s)?null:s}function xk(t){var e=H.useRef({}),i=H.useRef(null),o=H.useRef(null),s=H.useRef(!1),u=re(function(y,S){var I={id:y,focus:S};return e.current[y]=I,function(){var k=e.current,T=k[y];T!==I&&delete k[y]}},[]),c=re(function(y){var S=Ck(t,y);S&&S!==document.activeElement&&S.focus()},[t]),f=re(function(y,S){i.current===y&&(i.current=S)},[]),h=re(function(){o.current||s.current&&(o.current=requestAnimationFrame(function(){o.current=null;var y=i.current;y&&c(y)}))},[c]),g=re(function(y){i.current=null;var S=document.activeElement;S&&S.getAttribute(Ei.draggableId)===y&&(i.current=y)},[]);Tt(function(){return s.current=!0,function(){s.current=!1;var y=o.current;y&&cancelAnimationFrame(y)}},[]);var w=xe(function(){return{register:u,tryRecordFocus:g,tryRestoreFocusRecorded:h,tryShiftRecord:f}},[u,g,h,f]);return w}function Pk(){var t={draggables:{},droppables:{}},e=[];function i(m){return e.push(m),function(){var S=e.indexOf(m);S!==-1&&e.splice(S,1)}}function o(m){e.length&&e.forEach(function(y){return y(m)})}function s(m){return t.draggables[m]||null}function u(m){var y=s(m);return y||q(),y}var c={register:function(y){t.draggables[y.descriptor.id]=y,o({type:"ADDITION",value:y})},update:function(y,S){var I=t.draggables[S.descriptor.id];I&&I.uniqueId===y.uniqueId&&(delete t.draggables[S.descriptor.id],t.draggables[y.descriptor.id]=y)},unregister:function(y){var S=y.descriptor.id,I=s(S);I&&y.uniqueId===I.uniqueId&&(delete t.draggables[S],o({type:"REMOVAL",value:y}))},getById:u,findById:s,exists:function(y){return!!s(y)},getAllByType:function(y){return js(t.draggables).filter(function(S){return S.descriptor.type===y})}};function f(m){return t.droppables[m]||null}function h(m){var y=f(m);return y||q(),y}var g={register:function(y){t.droppables[y.descriptor.id]=y},unregister:function(y){var S=f(y.descriptor.id);S&&y.uniqueId===S.uniqueId&&delete t.droppables[y.descriptor.id]},getById:h,findById:f,exists:function(y){return!!f(y)},getAllByType:function(y){return js(t.droppables).filter(function(S){return S.descriptor.type===y})}};function w(){t.draggables={},t.droppables={},e.length=0}return{draggable:c,droppable:g,subscribe:i,clean:w}}function _k(){var t=xe(Pk,[]);return H.useEffect(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var Ud=Ie.createContext(null),$s=function(){var t=document.body;return t||q(),t},kk={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},Dk=function(e){return"rbd-announcement-"+e};function Tk(t){var e=xe(function(){return Dk(t)},[t]),i=H.useRef(null);H.useEffect(function(){var u=document.createElement("div");return i.current=u,u.id=e,u.setAttribute("aria-live","assertive"),u.setAttribute("aria-atomic","true"),ae(u.style,kk),$s().appendChild(u),function(){setTimeout(function(){var h=$s();h.contains(u)&&h.removeChild(u),u===i.current&&(i.current=null)})}},[e]);var o=re(function(s){var u=i.current;if(u){u.textContent=s;return}},[]);return o}var Rk=0,Ak={separator:"::"};function $d(t,e){return e===void 0&&(e=Ak),xe(function(){return""+t+e.separator+Rk++},[e.separator,t])}function Ok(t){var e=t.contextId,i=t.uniqueId;return"rbd-hidden-text-"+e+"-"+i}function Nk(t){var e=t.contextId,i=t.text,o=$d("hidden-text",{separator:"-"}),s=xe(function(){return Ok({contextId:e,uniqueId:o})},[o,e]);return H.useEffect(function(){var c=document.createElement("div");return c.id=s,c.textContent=i,c.style.display="none",$s().appendChild(c),function(){var h=$s();h.contains(c)&&h.removeChild(c)}},[s,i]),s}var il=Ie.createContext(null);function Yy(t){var e=H.useRef(t);return H.useEffect(function(){e.current=t}),e}function Lk(){var t=null;function e(){return!!t}function i(c){return c===t}function o(c){t&&q();var f={abandon:c};return t=f,f}function s(){t||q(),t=null}function u(){t&&(t.abandon(),s())}return{isClaimed:e,isActive:i,claim:o,release:s,tryAbandon:u}}var Mk=9,Bk=13,zd=27,Qy=32,Fk=33,jk=34,Uk=35,$k=36,zk=37,Wk=38,Hk=39,Vk=40,us,Gk=(us={},us[Bk]=!0,us[Mk]=!0,us),Jy=function(t){Gk[t.keyCode]&&t.preventDefault()},ol=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],i=un(e,function(o){return"on"+o in document});return i||t}(),Xy=0,Em=5;function qk(t,e){return Math.abs(e.x-t.x)>=Em||Math.abs(e.y-t.y)>=Em}var Cm={type:"IDLE"};function Kk(t){var e=t.cancel,i=t.completed,o=t.getPhase,s=t.setPhase;return[{eventName:"mousemove",fn:function(c){var f=c.button,h=c.clientX,g=c.clientY;if(f===Xy){var w={x:h,y:g},m=o();if(m.type==="DRAGGING"){c.preventDefault(),m.actions.move(w);return}m.type!=="PENDING"&&q();var y=m.point;if(qk(y,w)){c.preventDefault();var S=m.actions.fluidLift(w);s({type:"DRAGGING",actions:S})}}}},{eventName:"mouseup",fn:function(c){var f=o();if(f.type!=="DRAGGING"){e();return}c.preventDefault(),f.actions.drop({shouldBlockNextClick:!0}),i()}},{eventName:"mousedown",fn:function(c){o().type==="DRAGGING"&&c.preventDefault(),e()}},{eventName:"keydown",fn:function(c){var f=o();if(f.type==="PENDING"){e();return}if(c.keyCode===zd){c.preventDefault(),e();return}Jy(c)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){o().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(c){var f=o();if(f.type==="IDLE"&&q(),f.actions.shouldRespectForcePress()){e();return}c.preventDefault()}},{eventName:ol,fn:e}]}function Yk(t){var e=H.useRef(Cm),i=H.useRef(tn),o=xe(function(){return{eventName:"mousedown",fn:function(m){if(!m.defaultPrevented&&m.button===Xy&&!(m.ctrlKey||m.metaKey||m.shiftKey||m.altKey)){var y=t.findClosestDraggableId(m);if(y){var S=t.tryGetLock(y,c,{sourceEvent:m});if(S){m.preventDefault();var I={x:m.clientX,y:m.clientY};i.current(),g(S,I)}}}}}},[t]),s=xe(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(m){if(!m.defaultPrevented){var y=t.findClosestDraggableId(m);if(y){var S=t.findOptionsForDraggable(y);S&&(S.shouldRespectForcePress||t.canGetLock(y)&&m.preventDefault())}}}}},[t]),u=re(function(){var m={passive:!1,capture:!0};i.current=Ft(window,[s,o],m)},[s,o]),c=re(function(){var w=e.current;w.type!=="IDLE"&&(e.current=Cm,i.current(),u())},[u]),f=re(function(){var w=e.current;c(),w.type==="DRAGGING"&&w.actions.cancel({shouldBlockNextClick:!0}),w.type==="PENDING"&&w.actions.abort()},[c]),h=re(function(){var m={capture:!0,passive:!1},y=Kk({cancel:f,completed:c,getPhase:function(){return e.current},setPhase:function(I){e.current=I}});i.current=Ft(window,y,m)},[f,c]),g=re(function(m,y){e.current.type!=="IDLE"&&q(),e.current={type:"PENDING",point:y,actions:m},h()},[h]);Tt(function(){return u(),function(){i.current()}},[u])}var li;function Qk(){}var Jk=(li={},li[jk]=!0,li[Fk]=!0,li[$k]=!0,li[Uk]=!0,li);function Xk(t,e){function i(){e(),t.cancel()}function o(){e(),t.drop()}return[{eventName:"keydown",fn:function(u){if(u.keyCode===zd){u.preventDefault(),i();return}if(u.keyCode===Qy){u.preventDefault(),o();return}if(u.keyCode===Vk){u.preventDefault(),t.moveDown();return}if(u.keyCode===Wk){u.preventDefault(),t.moveUp();return}if(u.keyCode===Hk){u.preventDefault(),t.moveRight();return}if(u.keyCode===zk){u.preventDefault(),t.moveLeft();return}if(Jk[u.keyCode]){u.preventDefault();return}Jy(u)}},{eventName:"mousedown",fn:i},{eventName:"mouseup",fn:i},{eventName:"click",fn:i},{eventName:"touchstart",fn:i},{eventName:"resize",fn:i},{eventName:"wheel",fn:i,options:{passive:!0}},{eventName:ol,fn:i}]}function Zk(t){var e=H.useRef(Qk),i=xe(function(){return{eventName:"keydown",fn:function(u){if(u.defaultPrevented||u.keyCode!==Qy)return;var c=t.findClosestDraggableId(u);if(!c)return;var f=t.tryGetLock(c,w,{sourceEvent:u});if(!f)return;u.preventDefault();var h=!0,g=f.snapLift();e.current();function w(){h||q(),h=!1,e.current(),o()}e.current=Ft(window,Xk(g,w),{capture:!0,passive:!1})}}},[t]),o=re(function(){var u={passive:!1,capture:!0};e.current=Ft(window,[i],u)},[i]);Tt(function(){return o(),function(){e.current()}},[o])}var kc={type:"IDLE"},eD=120,tD=.15;function rD(t){var e=t.cancel,i=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(s){s.preventDefault()}},{eventName:"keydown",fn:function(s){if(i().type!=="DRAGGING"){e();return}s.keyCode===zd&&s.preventDefault(),e()}},{eventName:ol,fn:e}]}function nD(t){var e=t.cancel,i=t.completed,o=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(u){var c=o();if(c.type!=="DRAGGING"){e();return}c.hasMoved=!0;var f=u.touches[0],h=f.clientX,g=f.clientY,w={x:h,y:g};u.preventDefault(),c.actions.move(w)}},{eventName:"touchend",fn:function(u){var c=o();if(c.type!=="DRAGGING"){e();return}u.preventDefault(),c.actions.drop({shouldBlockNextClick:!0}),i()}},{eventName:"touchcancel",fn:function(u){if(o().type!=="DRAGGING"){e();return}u.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(u){var c=o();c.type==="IDLE"&&q();var f=u.touches[0];if(f){var h=f.force>=tD;if(h){var g=c.actions.shouldRespectForcePress();if(c.type==="PENDING"){g&&e();return}if(g){if(c.hasMoved){u.preventDefault();return}e();return}u.preventDefault()}}}},{eventName:ol,fn:e}]}function iD(t){var e=H.useRef(kc),i=H.useRef(tn),o=re(function(){return e.current},[]),s=re(function(S){e.current=S},[]),u=xe(function(){return{eventName:"touchstart",fn:function(S){if(!S.defaultPrevented){var I=t.findClosestDraggableId(S);if(I){var P=t.tryGetLock(I,f,{sourceEvent:S});if(P){var k=S.touches[0],T=k.clientX,O=k.clientY,L={x:T,y:O};i.current(),m(P,L)}}}}}},[t]),c=re(function(){var S={capture:!0,passive:!1};i.current=Ft(window,[u],S)},[u]),f=re(function(){var y=e.current;y.type!=="IDLE"&&(y.type==="PENDING"&&clearTimeout(y.longPressTimerId),s(kc),i.current(),c())},[c,s]),h=re(function(){var y=e.current;f(),y.type==="DRAGGING"&&y.actions.cancel({shouldBlockNextClick:!0}),y.type==="PENDING"&&y.actions.abort()},[f]),g=re(function(){var S={capture:!0,passive:!1},I={cancel:h,completed:f,getPhase:o},P=Ft(window,nD(I),S),k=Ft(window,rD(I),S);i.current=function(){P(),k()}},[h,o,f]),w=re(function(){var S=o();S.type!=="PENDING"&&q();var I=S.actions.fluidLift(S.point);s({type:"DRAGGING",actions:I,hasMoved:!1})},[o,s]),m=re(function(S,I){o().type!=="IDLE"&&q();var P=setTimeout(w,eD);s({type:"PENDING",point:I,actions:S,longPressTimerId:P}),g()},[g,o,s,w]);Tt(function(){return c(),function(){i.current();var I=o();I.type==="PENDING"&&(clearTimeout(I.longPressTimerId),s(kc))}},[o,c,s]),Tt(function(){var S=Ft(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return S},[])}var oD={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function Zy(t,e){if(e==null)return!1;var i=!!oD[e.tagName.toLowerCase()];if(i)return!0;var o=e.getAttribute("contenteditable");return o==="true"||o===""?!0:e===t?!1:Zy(t,e.parentElement)}function aD(t,e){var i=e.target;return nl(i)?Zy(t,i):!1}var sD=function(t){return Qt(t.getBoundingClientRect()).center};function lD(t){return t instanceof Ky(t).Element}var uD=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],i=un(e,function(o){return o in Element.prototype});return i||t}();function e0(t,e){return t==null?null:t[uD](e)?t:e0(t.parentElement,e)}function cD(t,e){return t.closest?t.closest(e):e0(t,e)}function dD(t){return"["+Ei.contextId+'="'+t+'"]'}function fD(t,e){var i=e.target;if(!lD(i))return null;var o=dD(t),s=cD(i,o);return!s||!nl(s)?null:s}function pD(t,e){var i=fD(t,e);return i?i.getAttribute(Ei.draggableId):null}function hD(t,e){var i="["+ed.contextId+'="'+t+'"]',o=my(document.querySelectorAll(i)),s=un(o,function(u){return u.getAttribute(ed.id)===e});return!s||!nl(s)?null:s}function gD(t){t.preventDefault()}function cs(t){var e=t.expected,i=t.phase,o=t.isLockActive;return t.shouldWarn,!(!o()||e!==i)}function t0(t){var e=t.lockAPI,i=t.store,o=t.registry,s=t.draggableId;if(e.isClaimed())return!1;var u=o.draggable.findById(s);return!(!u||!u.options.isEnabled||!Hy(i.getState(),s))}function mD(t){var e=t.lockAPI,i=t.contextId,o=t.store,s=t.registry,u=t.draggableId,c=t.forceSensorStop,f=t.sourceEvent,h=t0({lockAPI:e,store:o,registry:s,draggableId:u});if(!h)return null;var g=s.draggable.getById(u),w=hD(i,g.descriptor.id);if(!w||f&&!g.options.canDragInteractiveElements&&aD(w,f))return null;var m=e.claim(c||tn),y="PRE_DRAG";function S(){return g.options.shouldRespectForcePress}function I(){return e.isActive(m)}function P(F,z){cs({expected:F,phase:y,isLockActive:I,shouldWarn:!0})&&o.dispatch(z())}var k=P.bind(null,"DRAGGING");function T(F){function z(){e.release(),y="COMPLETED"}y!=="PRE_DRAG"&&(z(),y!=="PRE_DRAG"&&q()),o.dispatch(u_(F.liftActionArgs)),y="DRAGGING";function le(ne,ve){if(ve===void 0&&(ve={shouldBlockNextClick:!1}),F.cleanup(),ve.shouldBlockNextClick){var he=Ft(window,[{eventName:"click",fn:gD,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(he)}z(),o.dispatch(By({reason:ne}))}return ae({isActive:function(){return cs({expected:"DRAGGING",phase:y,isLockActive:I,shouldWarn:!1})},shouldRespectForcePress:S,drop:function(ve){return le("DROP",ve)},cancel:function(ve){return le("CANCEL",ve)}},F.actions)}function O(F){var z=Lo(function(ne){k(function(){return My({client:ne})})}),le=T({liftActionArgs:{id:u,clientSelection:F,movementMode:"FLUID"},cleanup:function(){return z.cancel()},actions:{move:z}});return ae({},le,{move:z})}function L(){var F={moveUp:function(){return k(y_)},moveRight:function(){return k(S_)},moveDown:function(){return k(w_)},moveLeft:function(){return k(b_)}};return T({liftActionArgs:{id:u,clientSelection:sD(w),movementMode:"SNAP"},cleanup:tn,actions:F})}function M(){var F=cs({expected:"PRE_DRAG",phase:y,isLockActive:I,shouldWarn:!0});F&&e.release()}var R={isActive:function(){return cs({expected:"PRE_DRAG",phase:y,isLockActive:I,shouldWarn:!1})},shouldRespectForcePress:S,fluidLift:O,snapLift:L,abort:M};return R}var vD=[Yk,Zk,iD];function yD(t){var e=t.contextId,i=t.store,o=t.registry,s=t.customSensors,u=t.enableDefaultSensors,c=[].concat(u?vD:[],s||[]),f=H.useState(function(){return Lk()})[0],h=re(function(O,L){O.isDragging&&!L.isDragging&&f.tryAbandon()},[f]);Tt(function(){var O=i.getState(),L=i.subscribe(function(){var M=i.getState();h(O,M),O=M});return L},[f,i,h]),Tt(function(){return f.tryAbandon},[f.tryAbandon]);for(var g=re(function(T){return t0({lockAPI:f,registry:o,store:i,draggableId:T})},[f,o,i]),w=re(function(T,O,L){return mD({lockAPI:f,registry:o,contextId:e,store:i,draggableId:T,forceSensorStop:O,sourceEvent:L&&L.sourceEvent?L.sourceEvent:null})},[e,f,o,i]),m=re(function(T){return pD(e,T)},[e]),y=re(function(T){var O=o.draggable.findById(T);return O?O.options:null},[o.draggable]),S=re(function(){f.isClaimed()&&(f.tryAbandon(),i.getState().phase!=="IDLE"&&i.dispatch(Ad()))},[f,i]),I=re(f.isClaimed,[f]),P=xe(function(){return{canGetLock:g,tryGetLock:w,findClosestDraggableId:m,findOptionsForDraggable:y,tryReleaseLock:S,isLockClaimed:I}},[g,w,m,y,S,I]),k=0;k<c.length;k++)c[k](P)}var wD=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function wo(t){return t.current||q(),t.current}function SD(t){var e=t.contextId,i=t.setCallbacks,o=t.sensors,s=t.nonce,u=t.dragHandleUsageInstructions,c=H.useRef(null),f=Yy(t),h=re(function(){return wD(f.current)},[f]),g=Tk(e),w=Nk({contextId:e,text:u}),m=Ek(e,s),y=re(function(ne){wo(c).dispatch(ne)},[]),S=xe(function(){return Vg({publishWhileDragging:d_,updateDroppableScroll:p_,updateDroppableIsEnabled:h_,updateDroppableIsCombineEnabled:g_,collectionStarting:f_},y)},[y]),I=_k(),P=xe(function(){return tk(I,S)},[I,S]),k=xe(function(){return yk(ae({scrollWindow:rk,scrollDroppable:P.scrollDroppable},Vg({move:My},y)))},[P.scrollDroppable,y]),T=xk(e),O=xe(function(){return J_({announce:g,autoScroller:k,dimensionMarshal:P,focusMarshal:T,getResponders:h,styleMarshal:m})},[g,k,P,T,h,m]);c.current=O;var L=re(function(){var ne=wo(c),ve=ne.getState();ve.phase!=="IDLE"&&ne.dispatch(Ad())},[]),M=re(function(){var ne=wo(c).getState();return ne.isDragging||ne.phase==="DROP_ANIMATING"},[]),R=xe(function(){return{isDragging:M,tryAbort:L}},[M,L]);i(R);var F=re(function(ne){return Hy(wo(c).getState(),ne)},[]),z=re(function(){return Pn(wo(c).getState())},[]),le=xe(function(){return{marshal:P,focus:T,contextId:e,canLift:F,isMovementAllowed:z,dragHandleUsageInstructionsId:w,registry:I}},[e,P,w,T,F,z,I]);return yD({contextId:e,store:O,registry:I,customSensors:o,enableDefaultSensors:t.enableDefaultSensors!==!1}),H.useEffect(function(){return L},[L]),Ie.createElement(il.Provider,{value:le},Ie.createElement(ox,{context:Ud,store:O},t.children))}var bD=0;function ID(){return xe(function(){return""+bD++},[])}function ED(t){var e=ID(),i=t.dragHandleUsageInstructions||Is.dragHandleUsageInstructions;return Ie.createElement(Zx,null,function(o){return Ie.createElement(SD,{nonce:t.nonce,contextId:e,setCallbacks:o,dragHandleUsageInstructions:i,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var r0=function(e){return function(i){return e===i}},CD=r0("scroll"),xD=r0("auto"),xm=function(e,i){return i(e.overflowX)||i(e.overflowY)},PD=function(e){var i=window.getComputedStyle(e),o={overflowX:i.overflowX,overflowY:i.overflowY};return xm(o,CD)||xm(o,xD)},_D=function(){return!1},kD=function t(e){return e==null?null:e===document.body?_D()?e:null:e===document.documentElement?null:PD(e)?e:t(e.parentElement)},td=function(t){return{x:t.scrollLeft,y:t.scrollTop}},DD=function t(e){if(!e)return!1;var i=window.getComputedStyle(e);return i.position==="fixed"?!0:t(e.parentElement)},TD=function(t){var e=kD(t),i=DD(t);return{closestScrollable:e,isFixedOnPage:i}},RD=function(t){var e=t.descriptor,i=t.isEnabled,o=t.isCombineEnabled,s=t.isFixedOnPage,u=t.direction,c=t.client,f=t.page,h=t.closest,g=function(){if(!h)return null;var S=h.scrollSize,I=h.client,P=$y({scrollHeight:S.scrollHeight,scrollWidth:S.scrollWidth,height:I.paddingBox.height,width:I.paddingBox.width});return{pageMarginBox:h.page.marginBox,frameClient:I,scrollSize:S,shouldClipSubject:h.shouldClipSubject,scroll:{initial:h.scroll,current:h.scroll,max:P,diff:{value:rt,displacement:rt}}}}(),w=u==="vertical"?_d:by,m=bi({page:f,withPlaceholder:null,axis:w,frame:g}),y={descriptor:e,isCombineEnabled:o,isFixedOnPage:s,axis:w,isEnabled:i,client:c,page:f,frame:g,subject:m};return y},AD=function(e,i){var o=dy(e);if(!i||e!==i)return o;var s=o.paddingBox.top-i.scrollTop,u=o.paddingBox.left-i.scrollLeft,c=s+i.scrollHeight,f=u+i.scrollWidth,h={top:s,right:f,bottom:c,left:u},g=Id(h,o.border),w=Ed({borderBox:g,margin:o.margin,border:o.border,padding:o.padding});return w},OD=function(t){var e=t.ref,i=t.descriptor,o=t.env,s=t.windowScroll,u=t.direction,c=t.isDropDisabled,f=t.isCombineEnabled,h=t.shouldClipSubject,g=o.closestScrollable,w=AD(e,g),m=Ms(w,s),y=function(){if(!g)return null;var I=dy(g),P={scrollHeight:g.scrollHeight,scrollWidth:g.scrollWidth};return{client:I,page:Ms(I,s),scroll:td(g),scrollSize:P,shouldClipSubject:h}}(),S=RD({descriptor:i,isEnabled:!c,isCombineEnabled:f,isFixedOnPage:o.isFixedOnPage,direction:u,client:w,page:m,closest:y});return S},ND={passive:!1},LD={passive:!0},Pm=function(t){return t.shouldPublishImmediately?ND:LD};function zs(t){var e=H.useContext(t);return e||q(),e}var ds=function(e){return e&&e.env.closestScrollable||null};function MD(t){var e=H.useRef(null),i=zs(il),o=$d("droppable"),s=i.registry,u=i.marshal,c=Yy(t),f=xe(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),h=H.useRef(f),g=xe(function(){return tt(function(M,R){e.current||q();var F={x:M,y:R};u.updateDroppableScroll(f.id,F)})},[f.id,u]),w=re(function(){var M=e.current;return!M||!M.env.closestScrollable?rt:td(M.env.closestScrollable)},[]),m=re(function(){var M=w();g(M.x,M.y)},[w,g]),y=xe(function(){return Lo(m)},[m]),S=re(function(){var M=e.current,R=ds(M);M&&R||q();var F=M.scrollOptions;if(F.shouldPublishImmediately){m();return}y()},[y,m]),I=re(function(M,R){e.current&&q();var F=c.current,z=F.getDroppableRef();z||q();var le=TD(z),ne={ref:z,descriptor:f,env:le,scrollOptions:R};e.current=ne;var ve=OD({ref:z,descriptor:f,env:le,windowScroll:M,direction:F.direction,isDropDisabled:F.isDropDisabled,isCombineEnabled:F.isCombineEnabled,shouldClipSubject:!F.ignoreContainerClipping}),he=le.closestScrollable;return he&&(he.setAttribute(bm.contextId,i.contextId),he.addEventListener("scroll",S,Pm(ne.scrollOptions))),ve},[i.contextId,f,S,c]),P=re(function(){var M=e.current,R=ds(M);return M&&R||q(),td(R)},[]),k=re(function(){var M=e.current;M||q();var R=ds(M);e.current=null,R&&(y.cancel(),R.removeAttribute(bm.contextId),R.removeEventListener("scroll",S,Pm(M.scrollOptions)))},[S,y]),T=re(function(M){var R=e.current;R||q();var F=ds(R);F||q(),F.scrollTop+=M.y,F.scrollLeft+=M.x},[]),O=xe(function(){return{getDimensionAndWatchScroll:I,getScrollWhileDragging:P,dragStopped:k,scroll:T}},[k,I,P,T]),L=xe(function(){return{uniqueId:o,descriptor:f,callbacks:O}},[O,f,o]);Tt(function(){return h.current=L.descriptor,s.droppable.register(L),function(){e.current&&k(),s.droppable.unregister(L)}},[O,f,k,L,u,s.droppable]),Tt(function(){e.current&&u.updateDroppableIsEnabled(h.current.id,!t.isDropDisabled)},[t.isDropDisabled,u]),Tt(function(){e.current&&u.updateDroppableIsCombineEnabled(h.current.id,t.isCombineEnabled)},[t.isCombineEnabled,u])}function Dc(){}var _m={width:0,height:0,margin:oP},BD=function(e){var i=e.isAnimatingOpenOnMount,o=e.placeholder,s=e.animate;return i||s==="close"?_m:{height:o.client.borderBox.height,width:o.client.borderBox.width,margin:o.client.margin}},FD=function(e){var i=e.isAnimatingOpenOnMount,o=e.placeholder,s=e.animate,u=BD({isAnimatingOpenOnMount:i,placeholder:o,animate:s});return{display:o.display,boxSizing:"border-box",width:u.width,height:u.height,marginTop:u.margin.top,marginRight:u.margin.right,marginBottom:u.margin.bottom,marginLeft:u.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:s!=="none"?Po.placeholder:null}};function jD(t){var e=H.useRef(null),i=re(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),o=t.animate,s=t.onTransitionEnd,u=t.onClose,c=t.contextId,f=H.useState(t.animate==="open"),h=f[0],g=f[1];H.useEffect(function(){return h?o!=="open"?(i(),g(!1),Dc):e.current?Dc:(e.current=setTimeout(function(){e.current=null,g(!1)}),i):Dc},[o,h,i]);var w=re(function(y){y.propertyName==="height"&&(s(),o==="close"&&u())},[o,u,s]),m=FD({isAnimatingOpenOnMount:h,animate:t.animate,placeholder:t.placeholder});return Ie.createElement(t.placeholder.tagName,{style:m,"data-rbd-placeholder-context-id":c,onTransitionEnd:w,ref:t.innerRef})}var UD=Ie.memo(jD),Wd=Ie.createContext(null),$D=function(t){Zv(e,t);function e(){for(var o,s=arguments.length,u=new Array(s),c=0;c<s;c++)u[c]=arguments[c];return o=t.call.apply(t,[this].concat(u))||this,o.state={isVisible:!!o.props.on,data:o.props.on,animate:o.props.shouldAnimate&&o.props.on?"open":"none"},o.onClose=function(){o.state.animate==="close"&&o.setState({isVisible:!1})},o}e.getDerivedStateFromProps=function(s,u){return s.shouldAnimate?s.on?{isVisible:!0,data:s.on,animate:"open"}:u.isVisible?{isVisible:!0,data:u.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!s.on,data:s.on,animate:"none"}};var i=e.prototype;return i.render=function(){if(!this.state.isVisible)return null;var s={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(s)},e}(Ie.PureComponent),km={dragging:5e3,dropAnimating:4500},zD=function(e,i){return i?Po.drop(i.duration):e?Po.snap:Po.fluid},WD=function(e,i){return e?i?jo.opacity.drop:jo.opacity.combining:null},HD=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function VD(t){var e=t.dimension,i=e.client,o=t.offset,s=t.combineWith,u=t.dropping,c=!!s,f=HD(t),h=!!u,g=h?Xc.drop(o,c):Xc.moveTo(o),w={position:"fixed",top:i.marginBox.top,left:i.marginBox.left,boxSizing:"border-box",width:i.borderBox.width,height:i.borderBox.height,transition:zD(f,u),transform:g,opacity:WD(c,h),zIndex:h?km.dropAnimating:km.dragging,pointerEvents:"none"};return w}function GD(t){return{transform:Xc.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function qD(t){return t.type==="DRAGGING"?VD(t):GD(t)}function KD(t,e,i){i===void 0&&(i=rt);var o=window.getComputedStyle(e),s=e.getBoundingClientRect(),u=cy(s,o),c=Ms(u,i),f={client:u,tagName:e.tagName.toLowerCase(),display:o.display},h={x:u.marginBox.width,y:u.marginBox.height},g={descriptor:t,placeholder:f,displaceBy:h,client:u,page:c};return g}function YD(t){var e=$d("draggable"),i=t.descriptor,o=t.registry,s=t.getDraggableRef,u=t.canDragInteractiveElements,c=t.shouldRespectForcePress,f=t.isEnabled,h=xe(function(){return{canDragInteractiveElements:u,shouldRespectForcePress:c,isEnabled:f}},[u,f,c]),g=re(function(S){var I=s();return I||q(),KD(i,I,S)},[i,s]),w=xe(function(){return{uniqueId:e,descriptor:i,options:h,getDimension:g}},[i,g,h,e]),m=H.useRef(w),y=H.useRef(!0);Tt(function(){return o.draggable.register(m.current),function(){return o.draggable.unregister(m.current)}},[o.draggable]),Tt(function(){if(y.current){y.current=!1;return}var S=m.current;m.current=w,o.draggable.update(w,S)},[w,o.draggable])}function QD(t){t.preventDefault()}function JD(t){var e=H.useRef(null),i=re(function(ne){e.current=ne},[]),o=re(function(){return e.current},[]),s=zs(il),u=s.contextId,c=s.dragHandleUsageInstructionsId,f=s.registry,h=zs(Wd),g=h.type,w=h.droppableId,m=xe(function(){return{id:t.draggableId,index:t.index,type:g,droppableId:w}},[t.draggableId,t.index,g,w]),y=t.children,S=t.draggableId,I=t.isEnabled,P=t.shouldRespectForcePress,k=t.canDragInteractiveElements,T=t.isClone,O=t.mapped,L=t.dropAnimationFinished;if(!T){var M=xe(function(){return{descriptor:m,registry:f,getDraggableRef:o,canDragInteractiveElements:k,shouldRespectForcePress:P,isEnabled:I}},[m,f,o,k,P,I]);YD(M)}var R=xe(function(){return I?{tabIndex:0,role:"button","aria-describedby":c,"data-rbd-drag-handle-draggable-id":S,"data-rbd-drag-handle-context-id":u,draggable:!1,onDragStart:QD}:null},[u,c,S,I]),F=re(function(ne){O.type==="DRAGGING"&&O.dropping&&ne.propertyName==="transform"&&L()},[L,O]),z=xe(function(){var ne=qD(O),ve=O.type==="DRAGGING"&&O.dropping?F:null,he={innerRef:i,draggableProps:{"data-rbd-draggable-context-id":u,"data-rbd-draggable-id":S,style:ne,onTransitionEnd:ve},dragHandleProps:R};return he},[u,R,S,O,F,i]),le=xe(function(){return{draggableId:m.id,type:m.type,source:{index:m.index,droppableId:m.droppableId}}},[m.droppableId,m.id,m.index,m.type]);return y(z,O.snapshot,le)}var n0=function(t,e){return t===e},i0=function(t){var e=t.combine,i=t.destination;return i?i.droppableId:e?e.droppableId:null},XD=function(e){return e.combine?e.combine.draggableId:null},ZD=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function eT(){var t=tt(function(s,u){return{x:s,y:u}}),e=tt(function(s,u,c,f,h){return{isDragging:!0,isClone:u,isDropAnimating:!!h,dropAnimation:h,mode:s,draggingOver:c,combineWith:f,combineTargetFor:null}}),i=tt(function(s,u,c,f,h,g,w){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:h,combineWith:g,mode:u,offset:s,dimension:c,forceShouldAnimate:w,snapshot:e(u,f,h,g,null)}}}),o=function(u,c){if(u.isDragging){if(u.critical.draggable.id!==c.draggableId)return null;var f=u.current.client.offset,h=u.dimensions.draggables[c.draggableId],g=Dt(u.impact),w=ZD(u.impact),m=u.forceShouldAnimate;return i(t(f.x,f.y),u.movementMode,h,c.isClone,g,w,m)}if(u.phase==="DROP_ANIMATING"){var y=u.completed;if(y.result.draggableId!==c.draggableId)return null;var S=c.isClone,I=u.dimensions.draggables[c.draggableId],P=y.result,k=P.mode,T=i0(P),O=XD(P),L=u.dropDuration,M={duration:L,curve:Nd.drop,moveTo:u.newHomeClientOffset,opacity:O?jo.opacity.drop:null,scale:O?jo.scale.drop:null};return{mapped:{type:"DRAGGING",offset:u.newHomeClientOffset,dimension:I,dropping:M,draggingOver:T,combineWith:O,mode:k,forceShouldAnimate:null,snapshot:e(k,S,T,O,M)}}}return null};return o}function o0(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var tT={mapped:{type:"SECONDARY",offset:rt,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:o0(null)}};function rT(){var t=tt(function(c,f){return{x:c,y:f}}),e=tt(o0),i=tt(function(c,f,h){return f===void 0&&(f=null),{mapped:{type:"SECONDARY",offset:c,combineTargetFor:f,shouldAnimateDisplacement:h,snapshot:e(f)}}}),o=function(f){return f?i(rt,f,!0):null},s=function(f,h,g,w){var m=g.displaced.visible[f],y=!!(w.inVirtualList&&w.effected[f]),S=el(g),I=S&&S.draggableId===f?h:null;if(!m){if(!y)return o(I);if(g.displaced.invisible[f])return null;var P=_i(w.displacedBy.point),k=t(P.x,P.y);return i(k,I,!0)}if(y)return o(I);var T=g.displacedBy.point,O=t(T.x,T.y);return i(O,I,m.shouldAnimate)},u=function(f,h){if(f.isDragging)return f.critical.draggable.id===h.draggableId?null:s(h.draggableId,f.critical.draggable.id,f.impact,f.afterCritical);if(f.phase==="DROP_ANIMATING"){var g=f.completed;return g.result.draggableId===h.draggableId?null:s(h.draggableId,g.result.draggableId,g.impact,g.afterCritical)}return null};return u}var nT=function(){var e=eT(),i=rT(),o=function(u,c){return e(u,c)||i(u,c)||tT};return o},iT={dropAnimationFinished:Fy},oT=sy(nT,iT,null,{context:Ud,pure:!0,areStatePropsEqual:n0})(JD);function a0(t){var e=zs(Wd),i=e.isUsingCloneFor;return i===t.draggableId&&!t.isClone?null:Ie.createElement(oT,t)}function aT(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,i=!!t.disableInteractiveElementBlocking,o=!!t.shouldRespectForcePress;return Ie.createElement(a0,ae({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:i,shouldRespectForcePress:o}))}function sT(t){var e=H.useContext(il);e||q();var i=e.contextId,o=e.isMovementAllowed,s=H.useRef(null),u=H.useRef(null),c=t.children,f=t.droppableId,h=t.type,g=t.mode,w=t.direction,m=t.ignoreContainerClipping,y=t.isDropDisabled,S=t.isCombineEnabled,I=t.snapshot,P=t.useClone,k=t.updateViewportMaxScroll,T=t.getContainerForClone,O=re(function(){return s.current},[]),L=re(function(he){s.current=he},[]);re(function(){return u.current},[]);var M=re(function(he){u.current=he},[]),R=re(function(){o()&&k({maxScroll:Wy()})},[o,k]);MD({droppableId:f,type:h,mode:g,direction:w,isDropDisabled:y,isCombineEnabled:S,ignoreContainerClipping:m,getDroppableRef:O});var F=Ie.createElement($D,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(he){var Ae=he.onClose,V=he.data,ye=he.animate;return Ie.createElement(UD,{placeholder:V,onClose:Ae,innerRef:M,animate:ye,contextId:i,onTransitionEnd:R})}),z=xe(function(){return{innerRef:L,placeholder:F,droppableProps:{"data-rbd-droppable-id":f,"data-rbd-droppable-context-id":i}}},[i,f,F,L]),le=P?P.dragging.draggableId:null,ne=xe(function(){return{droppableId:f,type:h,isUsingCloneFor:le}},[f,le,h]);function ve(){if(!P)return null;var he=P.dragging,Ae=P.render,V=Ie.createElement(a0,{draggableId:he.draggableId,index:he.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(ye,Le){return Ae(ye,Le,he)});return zx.createPortal(V,T())}return Ie.createElement(Wd.Provider,{value:ne},c(z,I),ve())}var Tc=function(e,i){return e===i.droppable.type},Dm=function(e,i){return i.draggables[e.draggable.id]},lT=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},i=ae({},e,{shouldAnimatePlaceholder:!1}),o=tt(function(c){return{draggableId:c.id,type:c.type,source:{index:c.index,droppableId:c.droppableId}}}),s=tt(function(c,f,h,g,w,m){var y=w.descriptor.id,S=w.descriptor.droppableId===c;if(S){var I=m?{render:m,dragging:o(w.descriptor)}:null,P={isDraggingOver:h,draggingOverWith:h?y:null,draggingFromThisWith:y,isUsingPlaceholder:!0};return{placeholder:w.placeholder,shouldAnimatePlaceholder:!1,snapshot:P,useClone:I}}if(!f)return i;if(!g)return e;var k={isDraggingOver:h,draggingOverWith:y,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:w.placeholder,shouldAnimatePlaceholder:!0,snapshot:k,useClone:null}}),u=function(f,h){var g=h.droppableId,w=h.type,m=!h.isDropDisabled,y=h.renderClone;if(f.isDragging){var S=f.critical;if(!Tc(w,S))return i;var I=Dm(S,f.dimensions),P=Dt(f.impact)===g;return s(g,m,P,P,I,y)}if(f.phase==="DROP_ANIMATING"){var k=f.completed;if(!Tc(w,k.critical))return i;var T=Dm(k.critical,f.dimensions);return s(g,m,i0(k.result)===g,Dt(k.impact)===g,T,y)}if(f.phase==="IDLE"&&f.completed&&!f.shouldFlush){var O=f.completed;if(!Tc(w,O.critical))return i;var L=Dt(O.impact)===g,M=!!(O.impact.at&&O.impact.at.type==="COMBINE"),R=O.critical.droppable.id===g;return L?M?e:i:R?e:i}return i};return u},uT={updateViewportMaxScroll:v_};function cT(){return document.body||q(),document.body}var dT={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:cT},s0=sy(lT,uT,null,{context:Ud,pure:!0,areStatePropsEqual:n0})(sT);s0.defaultProps=dT;const fT={tasks:{"task-1":{id:"task-1",content:"Brainstorming",description:"Brainstorming brings team members' diverse experience into play.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:""},"task-2":{id:"task-2",content:"Research",description:"User research helps you to create an optimal product for users.",level:"medium",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:""},"task-3":{id:"task-3",content:"Wireframes",description:"Low fidelity wireframes include the most basic content and visuals.",level:"high",levelColor:"#5030E5",levelBackgroundColor:"rgba(80, 48, 229, 0.2)",image:""},"task-4":{id:"task-4",content:"Onboarding illustrations",description:"Help users understand how to use your service.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:"image/onboarding-illustration.png"},"task-5":{id:"task-5",content:"Moodboard",description:"The first impression is a crucial moment.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:"image/moodboard-1.png"},"task-6":{id:"task-6",content:"Mobile App Design",description:"Make sure your mobile app looks great on all devices.",level:"completed",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:"image/mobile-app-design.png"},"task-7":{id:"task-7",content:"Design system",description:"Create a robust pattern library and reusable components.",level:"completed",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:""}},columns:{"column-1":{id:"column-1",title:"To Do",taskIds:["task-1","task-2","task-3"],lineColor:"#5030E5"},"column-2":{id:"column-2",title:"In Progress",taskIds:["task-4","task-5"],lineColor:"#FFA500"},"column-3":{id:"column-3",title:"Done",taskIds:["task-6","task-7"],lineColor:"#8BC48A"}},columnOrder:["column-1","column-2","column-3"]},pT=K.div``,hT=K.main`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:t})=>t.headerSize.desktopHeight};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: ${({theme:t})=>t.headerSize.mobileHeight};
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: ${({theme:t})=>t.headerSize.tabletHeight};
  }
`,gT=K.div`
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
`,mT=K.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1rem;

  @media (max-width: ${({theme:t})=>t.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(1fr));
  }
`,vT=K.div`
  padding: 1.5rem;
  width: 23rem;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    width: 20rem;
    padding: 1rem;
  }
`,yT=K.div`
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
`,wT=K.h2`
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
`,ST=K.p`
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
`,bT=K.button`
  width: 1.5rem;
  height: 1.5rem;
`,IT=K.img``,ET=K.div`
  height: 100%;
`,CT=K.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 16px;

  background: ${({theme:t})=>t.colors.primaryLightBackground};
`,xT=K.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,PT=K.div`
  padding: 0 0.4rem;
  line-height: 1.5rem;
  border-radius: 4px;
  color: ${({$levelColor:t})=>t};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;

  background: ${({$levelBg:t})=>t};
`,_T=K.button`
  background-color: transparent;
`,kT=K.img``,DT=K.div``,TT=K.h3`
  margin-bottom: 0.5rem;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
`,RT=K.p`
  margin-bottom: 1.5rem;
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.87rem;
  font-weight: 400;
  text-align: left;
`,AT=K.img`
  border-radius: 8px;
`,OT=K.div`
  display: flex;
  justify-content: space-between;
`,NT=K.div`
  width: 63px;
  height: 24px;
`,LT=K.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,MT=K.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  margin-right: 1rem;
`,BT=K.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
`,FT=K.div`
  height: 100%;
`,l0=({isSidebarOpen:t})=>{const[e,i]=H.useState(fT),o=(u,c,f,h,g)=>{const w=Array.from(u.taskIds);w.splice(f,1);const m=Array.from(c.taskIds||[]);return m.splice(h,0,g),console.log("destinationTaskIds",m),{updatedStartColumn:{...u,taskIds:w},updatedFinishColumn:{...c,taskIds:m}}},s=u=>{const{source:c,destination:f,draggableId:h}=u;if(!f||c.droppableId===f.droppableId&&c.index===f.index)return;const g=e.columns[c.droppableId],w=e.columns[f.droppableId];if(g===w){const m=Array.from(g.taskIds);m.splice(c.index,1),m.splice(f.index,0,h);const y={...g,taskIds:m};i(S=>({...S,columns:{...S.columns,[y.id]:y}}))}else{const{updatedStartColumn:m,updatedFinishColumn:y}=o(g,w,c.index,f.index,h);i(S=>({...S,columns:{...S.columns,[m.id]:m,[y.id]:y}}))}};return N.jsx(hT,{children:N.jsx(iv,{children:N.jsx(gT,{$isSidebarOpen:t,children:N.jsx(mT,{children:N.jsx(ED,{onDragEnd:s,children:e.columnOrder.map(u=>{const c=e.columns[u],f=c.taskIds.map(h=>e.tasks[h]);return N.jsxs(vT,{$column:c,$tasks:f,children:[N.jsxs(yT,{$lineColor:c.lineColor,children:[N.jsxs(wT,{$lineColor:c.lineColor,children:[c.title,N.jsx(ST,{"aria-label":"State Project",children:c.taskIds.length})]}),c.id==="column-1"&&N.jsx(bT,{"aria-haspopup":"dialog","aria-controls":"new-project-popup","aria-label":"Create new project",children:N.jsx(IT,{src:"icon/add-square_icon.svg","aria-hidden":"true"})})]}),N.jsx(s0,{droppableId:c.id,children:h=>N.jsxs(ET,{ref:h.innerRef,...h.droppableProps,children:[f.map((g,w)=>N.jsx(aT,{draggableId:g.id,index:w,children:m=>N.jsxs(CT,{...m.draggableProps,...m.dragHandleProps,ref:m.innerRef,children:[N.jsxs(xT,{children:[N.jsx(PT,{"aria-label":"Project level",$levelColor:g.levelColor,$levelBg:g.levelBackgroundColor,children:g.level}),N.jsx(_T,{role:"button",children:N.jsx(kT,{src:"icon/dots_icon.svg",alt:"Menu"})})]}),N.jsxs(DT,{children:[N.jsx(TT,{children:g.content}),g!=null&&g.image?N.jsx(pT,{children:N.jsx(AT,{src:g.image,alt:g.content||"Project image"})}):N.jsx(RT,{children:g.description||"No Description Available"})]}),N.jsxs(OT,{children:[N.jsx(NT,{children:N.jsx("img",{src:"image/Group 633.png",alt:"Persons"})}),N.jsxs(LT,{children:[N.jsxs(MT,{children:[N.jsx("img",{src:"icon/comments_icon.svg",alt:"Comments"}),"10 comments"]}),N.jsxs(BT,{children:[N.jsx("img",{src:"icon/folder_icon.svg",alt:"Folder"}),"3 files"]})]})]})]})},g.id)),h.placeholder,c.taskIds.length===0&&N.jsx(FT,{style:{textAlign:"center",color:"#aaa"},children:"Drop tasks here"})]})})]},c.id)})})})})})})};l0.propTypes={isSidebarOpen:Sr.bool.isRequired,sidebarRef:Sr.any};const jT=t=>{const[e,i]=H.useState(!1),o=H.useCallback(()=>{i(window.innerWidth<=t)},[t]);return H.useEffect(()=>{if(typeof window>"u")return;let s;const u=()=>{clearTimeout(s),s=setTimeout(o,0)};return window.addEventListener("resize",u),o(),()=>{window.removeEventListener("resize",u)}},[o]),e},UT=(t=!1)=>{const e=jT(700),[i,o]=H.useState(e?!1:t),s=()=>o(u=>!u);return H.useEffect(()=>{o(!e)},[e]),[i,s,e]},u0={mobile:"425px",mobileL:"600px",tablet:"768px",desktop:"1024px",headerSize:{mobileHeight:"3rem",tabletHeight:"4rem",desktopHeight:"5.5rem"},fonts:{primaryFont:"'Inter', sans-serif"},colors:{primaryLightBackground:"#FFFFFF",secondaryLightBackground:"#F5F5F5",primaryDarkBackground:"#0D062D",secondaryDarkBackground:"#E0E0E0",hoverBackground:"rgba(80, 48, 229, 0.08)",borderLineColor:"1px solid rgb(219, 219, 219)",darkBlue:" #5030E5",lightBlue:"rgb(34, 1, 179)",darkText:"#0D062D",lightText:"#625F6D"}};function $T(t){const[e,i]=H.useState(!1);return H.useEffect(()=>{function o(s){const u=t.every(c=>c.current&&!c.current.contains(s.target));i(u)}return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[t]),e}const zT=K.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`,Tm=K.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: ${u0.colors.lightText};
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`,c0=({onClick:t})=>N.jsxs(zT,{type:"button",onClick:t,children:[N.jsx(Tm,{}),N.jsx(Tm,{})]});c0.propTypes={onClick:Sr.func.isRequired};const WT=()=>{const{setIsLoggedIn:t,mode:e,setMode:i,setShowLoginForm:o,setLoggedUser:s}=H.useContext(xi),[u,c]=H.useState({email:"",password:"",confirmPassword:""}),[f,h]=H.useState("");H.useEffect(()=>{const S=D1(bs,I=>{I?(s(I),t(!0)):(s(null),t(!1)),console.log("User:",I)});return()=>S()},[]);const g=()=>{i(S=>S==="login"?"register":"login")},w=()=>{o(S=>!S)},m=S=>{if(S.preventDefault(),e==="register"&&u.password!==u.confirmPassword){h("Passwords do not match"),setTimeout(()=>h(""),5e3);return}switch(e){case"login":P1(bs,u.email,u.password).then(()=>{t(!0),o(!1)}).catch(I=>{console.log(I),t(!1),h("User not defined")}).finally(()=>{setTimeout(()=>h(""),5e3)});break;case"register":x1(bs,u.email,u.password).then(()=>{t(!0),o(!1)}).catch(I=>h(I));break}},y=S=>{const{name:I,value:P}=S.target;c(k=>({...k,[I]:P}))};return N.jsx(Wb,{children:N.jsxs(Hb,{onSubmit:m,children:[N.jsx(c0,{onClick:w}),N.jsx(Vb,{children:e==="login"?"Login":"Register"}),N.jsxs(ug,{children:["To log in, use the email: ",N.jsx("br",{})," projectm@example.com ",N.jsx("br",{})," and"," ",N.jsx("br",{}),"password: 123456"]}),f&&N.jsx(ug,{children:f}),N.jsx(lc,{children:N.jsx(uc,{type:"email",name:"email",placeholder:"Email",value:u.email,onChange:y,required:!0})}),N.jsx(lc,{children:N.jsx(uc,{type:"password",name:"password",placeholder:"Password",value:u.password,onChange:y,required:!0})}),e==="register"&&N.jsx(lc,{children:N.jsx(uc,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:u.confirmPassword,onChange:y,required:!0})}),N.jsx(ud,{type:"submit",children:e==="login"?"Sign in":"Sign up"}),N.jsxs(qb,{children:[e==="login"?"Don't have an account? ":"Already have an account? ",N.jsx(Kb,{onClick:g,children:e==="login"?"Sign up":"Sign in"})]})]})})},HT=K.main`
  display: flex;
  justify-content: center;
  margin-top: 5.5rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 50px;

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: 4rem;
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: 3rem;
  }
`,VT=K.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    display: block;
    text-align: center;
  }
`,GT=K.section`
  max-width: 540px;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-bottom: 30px;
  }
`,qT=K.h1`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 1.1;
`,KT=K.p`
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.5;
`,YT=K(ud)`
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 150px;
  background-color: #000000;
`,QT=K.section`
  right: 0;
`,JT=K.img`
  width: 700px;
  height: 400px;
  border-radius: 0.5rem;
`,XT=()=>{const{showLoginForm:t,setShowLoginForm:e}=H.useContext(xi),i=()=>{e(o=>!o)};return N.jsx(HT,{children:N.jsxs(iv,{children:[t&&N.jsx(WT,{}),N.jsxs(VT,{children:[N.jsxs(GT,{children:[N.jsx(qT,{children:"Manage your projects with ease"}),N.jsx(KT,{children:"Functional components to easily create modern UI. Enable date tracking to get an overview of project timelines."}),N.jsx(YT,{onClick:i,"aria-label":"Button for open login form",role:"Open login form",children:"Get Started"})]}),N.jsx(QT,{children:N.jsx(JT,{src:"image/Hero_img.png",alt:"Hero image"})})]})]})})},ZT=K.div`
  padding: 0 0 2rem 1rem;
  border-bottom: ${({theme:t})=>t.colors.borderLineColor};
`,eR=K.ul`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`,tR=K.li`
  cursor: pointer;
  list-style: none;
  img {
    margin-right: 1rem;
  }
`,rR=[{id:1,name:"Home",icon:"icon/home_icon.svg"},{id:2,name:"Massages",icon:"icon/message_icon.svg"},{id:3,name:"Tasks",icon:"icon/task_icon.svg"},{id:4,name:"Members",icon:"icon/members_icon.svg"},{id:5,name:"Settings",icon:"icon/settings_icon.svg"}];function nR(){return N.jsx(ZT,{children:N.jsx(eR,{children:rR.map(t=>N.jsxs(tR,{children:[N.jsx("img",{src:t.icon,alt:t.name}),N.jsx("a",{href:"#",children:N.jsx("span",{children:t.name})})]},t.id))})})}const iR=K.div`
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
`,oR=K.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`,aR=K.h3`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
`,sR=K.p`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`,lR=K.input`
  width: 10rem;
  height: 3rem;
  border-radius: 16px;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`,uR=()=>N.jsxs(iR,{children:[N.jsx(oR,{}),N.jsx(aR,{children:"Thoughts Time"}),N.jsx(sR,{children:"We don’t have any notice for you, till then you can share your thoughts with your peers."}),N.jsx(lR,{type:"text",placeholder:"Write a message"})]}),cR=K.div`
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
`,dR=K.div`
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
`,fR=K.div`
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
`,pR=K.div`
  display: none;
`,hR=[{id:1,name:"Mobile App",description:"Description for Mobile App",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:2,name:"Website Redesign",description:"Description for Website Redesign",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:3,name:"Design System",description:"Description for Design System",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:4,name:"Wireframes",description:"Description for Wireframes",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"}],gR=()=>N.jsxs(dR,{children:[N.jsxs(cR,{children:[N.jsx("h2",{children:"My projects"}),N.jsx("button",{className:"add-project",children:N.jsx("img",{src:"icon/plus_icon.svg",alt:"Add Project"})})]}),N.jsx("ul",{children:hR.map(t=>N.jsxs("li",{children:[N.jsxs(fR,{children:[N.jsxs("a",{href:"#","aria-label":"Go to project",className:"project-item",children:[N.jsx("div",{className:"project-status","aria-hidden":"true"}),N.jsx("h3",{children:t.name})]}),N.jsx("button",{children:N.jsx("img",{src:"icon/dots_icon.svg",alt:"Submenu icon"})})]}),N.jsxs(pR,{children:[N.jsx("p",{children:t.description}),N.jsx("p",{children:t.createdAt}),N.jsx("p",{children:t.updatedAt}),N.jsx("p",{children:t.status})]})]},t.id))})]}),Hd=H.forwardRef(({isSidebarOpen:t},e)=>N.jsx(Sb,{ref:e,$isSidebarOpen:t,children:N.jsxs(bb,{children:[N.jsx(nR,{}),N.jsx(gR,{}),N.jsx(uR,{})]})}));Hd.displayName="Sidebar";Hd.propTypes={isSidebarOpen:Sr.bool.isRequired,onToggleSidebar:Sr.func,sidebarRef:Sr.any};const mR=()=>{const[t,e,i]=UT(),o=H.useRef(null),s=H.useRef(null);$T([o,s])&&t&&i&&e();const{isLoggedIn:c}=H.useContext(xi);return N.jsxs(hb,{theme:u0,children:[N.jsx(yb,{$isSidebarOpen:t}),N.jsx(Sd,{ref:o,onToggleSidebar:e,isSidebarOpen:t}),c?N.jsxs(N.Fragment,{children:[N.jsx(Hd,{isSidebarOpen:t,ref:s}),N.jsx(l0,{isSidebarOpen:t,sidebarRef:s})]}):N.jsx(XT,{})]})},d0=({children:t})=>{const[e,i]=H.useState(!1),[o,s]=H.useState(!1),[u,c]=H.useState("login"),[f,h]=H.useState(null);return N.jsx(xi.Provider,{value:{isLoggedIn:e,setIsLoggedIn:i,showLoginForm:o,setShowLoginForm:s,mode:u,setMode:c,loggedUser:f,setLoggedUser:h},children:t})};d0.propTypes={children:Sr.node.isRequired};gS.createRoot(document.getElementById("root")).render(N.jsx(d0,{children:N.jsx(mR,{})}));
