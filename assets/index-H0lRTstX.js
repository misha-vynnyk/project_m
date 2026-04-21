(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function rh(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dp={exports:{}},Dl={},hp={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function E1(){if(m_)return Be;m_=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function w(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,D={};function x(U,X,pe){this.props=U,this.context=X,this.refs=D,this.updater=pe||I}x.prototype.isReactComponent={},x.prototype.setState=function(U,X){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,X,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function O(){}O.prototype=x.prototype;function V(U,X,pe){this.props=U,this.context=X,this.refs=D,this.updater=pe||I}var B=V.prototype=new O;B.constructor=V,b(B,x.prototype),B.isPureReactComponent=!0;var $=Array.isArray,W=Object.prototype.hasOwnProperty,Q={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function A(U,X,pe){var Pe,we={},xe=null,Oe=null;if(X!=null)for(Pe in X.ref!==void 0&&(Oe=X.ref),X.key!==void 0&&(xe=""+X.key),X)W.call(X,Pe)&&!P.hasOwnProperty(Pe)&&(we[Pe]=X[Pe]);var Ne=arguments.length-2;if(Ne===1)we.children=pe;else if(1<Ne){for(var Fe=Array(Ne),et=0;et<Ne;et++)Fe[et]=arguments[et+2];we.children=Fe}if(U&&U.defaultProps)for(Pe in Ne=U.defaultProps,Ne)we[Pe]===void 0&&(we[Pe]=Ne[Pe]);return{$$typeof:t,type:U,key:xe,ref:Oe,props:we,_owner:Q.current}}function R(U,X){return{$$typeof:t,type:U.type,key:X,ref:U.ref,props:U.props,_owner:U._owner}}function N(U){return typeof U=="object"&&U!==null&&U.$$typeof===t}function L(U){var X={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(pe){return X[pe]})}var j=/\/+/g;function C(U,X){return typeof U=="object"&&U!==null&&U.key!=null?L(""+U.key):X.toString(36)}function be(U,X,pe,Pe,we){var xe=typeof U;(xe==="undefined"||xe==="boolean")&&(U=null);var Oe=!1;if(U===null)Oe=!0;else switch(xe){case"string":case"number":Oe=!0;break;case"object":switch(U.$$typeof){case t:case e:Oe=!0}}if(Oe)return Oe=U,we=we(Oe),U=Pe===""?"."+C(Oe,0):Pe,$(we)?(pe="",U!=null&&(pe=U.replace(j,"$&/")+"/"),be(we,X,pe,"",function(et){return et})):we!=null&&(N(we)&&(we=R(we,pe+(!we.key||Oe&&Oe.key===we.key?"":(""+we.key).replace(j,"$&/")+"/")+U)),X.push(we)),1;if(Oe=0,Pe=Pe===""?".":Pe+":",$(U))for(var Ne=0;Ne<U.length;Ne++){xe=U[Ne];var Fe=Pe+C(xe,Ne);Oe+=be(xe,X,pe,Fe,we)}else if(Fe=w(U),typeof Fe=="function")for(U=Fe.call(U),Ne=0;!(xe=U.next()).done;)xe=xe.value,Fe=Pe+C(xe,Ne++),Oe+=be(xe,X,pe,Fe,we);else if(xe==="object")throw X=String(U),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return Oe}function Qe(U,X,pe){if(U==null)return U;var Pe=[],we=0;return be(U,Pe,"","",function(xe){return X.call(pe,xe,we++)}),Pe}function Ye(U){if(U._status===-1){var X=U._result;X=X(),X.then(function(pe){(U._status===0||U._status===-1)&&(U._status=1,U._result=pe)},function(pe){(U._status===0||U._status===-1)&&(U._status=2,U._result=pe)}),U._status===-1&&(U._status=0,U._result=X)}if(U._status===1)return U._result.default;throw U._result}var Me={current:null},ie={transition:null},ce={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Q};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:Qe,forEach:function(U,X,pe){Qe(U,function(){X.apply(this,arguments)},pe)},count:function(U){var X=0;return Qe(U,function(){X++}),X},toArray:function(U){return Qe(U,function(X){return X})||[]},only:function(U){if(!N(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Be.Component=x,Be.Fragment=n,Be.Profiler=o,Be.PureComponent=V,Be.StrictMode=r,Be.Suspense=f,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Be.act=ae,Be.cloneElement=function(U,X,pe){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Pe=b({},U.props),we=U.key,xe=U.ref,Oe=U._owner;if(X!=null){if(X.ref!==void 0&&(xe=X.ref,Oe=Q.current),X.key!==void 0&&(we=""+X.key),U.type&&U.type.defaultProps)var Ne=U.type.defaultProps;for(Fe in X)W.call(X,Fe)&&!P.hasOwnProperty(Fe)&&(Pe[Fe]=X[Fe]===void 0&&Ne!==void 0?Ne[Fe]:X[Fe])}var Fe=arguments.length-2;if(Fe===1)Pe.children=pe;else if(1<Fe){Ne=Array(Fe);for(var et=0;et<Fe;et++)Ne[et]=arguments[et+2];Pe.children=Ne}return{$$typeof:t,type:U.type,key:we,ref:xe,props:Pe,_owner:Oe}},Be.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},Be.createElement=A,Be.createFactory=function(U){var X=A.bind(null,U);return X.type=U,X},Be.createRef=function(){return{current:null}},Be.forwardRef=function(U){return{$$typeof:d,render:U}},Be.isValidElement=N,Be.lazy=function(U){return{$$typeof:y,_payload:{_status:-1,_result:U},_init:Ye}},Be.memo=function(U,X){return{$$typeof:m,type:U,compare:X===void 0?null:X}},Be.startTransition=function(U){var X=ie.transition;ie.transition={};try{U()}finally{ie.transition=X}},Be.unstable_act=ae,Be.useCallback=function(U,X){return Me.current.useCallback(U,X)},Be.useContext=function(U){return Me.current.useContext(U)},Be.useDebugValue=function(){},Be.useDeferredValue=function(U){return Me.current.useDeferredValue(U)},Be.useEffect=function(U,X){return Me.current.useEffect(U,X)},Be.useId=function(){return Me.current.useId()},Be.useImperativeHandle=function(U,X,pe){return Me.current.useImperativeHandle(U,X,pe)},Be.useInsertionEffect=function(U,X){return Me.current.useInsertionEffect(U,X)},Be.useLayoutEffect=function(U,X){return Me.current.useLayoutEffect(U,X)},Be.useMemo=function(U,X){return Me.current.useMemo(U,X)},Be.useReducer=function(U,X,pe){return Me.current.useReducer(U,X,pe)},Be.useRef=function(U){return Me.current.useRef(U)},Be.useState=function(U){return Me.current.useState(U)},Be.useSyncExternalStore=function(U,X,pe){return Me.current.useSyncExternalStore(U,X,pe)},Be.useTransition=function(){return Me.current.useTransition()},Be.version="18.3.1",Be}var g_;function Bm(){return g_||(g_=1,hp.exports=E1()),hp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v_;function I1(){if(v_)return Dl;v_=1;var t=Bm(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,m){var y,_={},w=null,I=null;m!==void 0&&(w=""+m),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(I=f.ref);for(y in f)r.call(f,y)&&!a.hasOwnProperty(y)&&(_[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)_[y]===void 0&&(_[y]=f[y]);return{$$typeof:e,type:d,key:w,ref:I,props:_,_owner:o.current}}return Dl.Fragment=n,Dl.jsx=u,Dl.jsxs=u,Dl}var y_;function S1(){return y_||(y_=1,dp.exports=I1()),dp.exports}var z=S1(),Kc={},fp={exports:{}},wn={},pp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function T1(){return __||(__=1,function(t){function e(ie,ce){var ae=ie.length;ie.push(ce);e:for(;0<ae;){var U=ae-1>>>1,X=ie[U];if(0<o(X,ce))ie[U]=ce,ie[ae]=X,ae=U;else break e}}function n(ie){return ie.length===0?null:ie[0]}function r(ie){if(ie.length===0)return null;var ce=ie[0],ae=ie.pop();if(ae!==ce){ie[0]=ae;e:for(var U=0,X=ie.length,pe=X>>>1;U<pe;){var Pe=2*(U+1)-1,we=ie[Pe],xe=Pe+1,Oe=ie[xe];if(0>o(we,ae))xe<X&&0>o(Oe,we)?(ie[U]=Oe,ie[xe]=ae,U=xe):(ie[U]=we,ie[Pe]=ae,U=Pe);else if(xe<X&&0>o(Oe,ae))ie[U]=Oe,ie[xe]=ae,U=xe;else break e}}return ce}function o(ie,ce){var ae=ie.sortIndex-ce.sortIndex;return ae!==0?ae:ie.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();t.unstable_now=function(){return u.now()-d}}var f=[],m=[],y=1,_=null,w=3,I=!1,b=!1,D=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function B(ie){for(var ce=n(m);ce!==null;){if(ce.callback===null)r(m);else if(ce.startTime<=ie)r(m),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=n(m)}}function $(ie){if(D=!1,B(ie),!b)if(n(f)!==null)b=!0,Ye(W);else{var ce=n(m);ce!==null&&Me($,ce.startTime-ie)}}function W(ie,ce){b=!1,D&&(D=!1,O(A),A=-1),I=!0;var ae=w;try{for(B(ce),_=n(f);_!==null&&(!(_.expirationTime>ce)||ie&&!L());){var U=_.callback;if(typeof U=="function"){_.callback=null,w=_.priorityLevel;var X=U(_.expirationTime<=ce);ce=t.unstable_now(),typeof X=="function"?_.callback=X:_===n(f)&&r(f),B(ce)}else r(f);_=n(f)}if(_!==null)var pe=!0;else{var Pe=n(m);Pe!==null&&Me($,Pe.startTime-ce),pe=!1}return pe}finally{_=null,w=ae,I=!1}}var Q=!1,P=null,A=-1,R=5,N=-1;function L(){return!(t.unstable_now()-N<R)}function j(){if(P!==null){var ie=t.unstable_now();N=ie;var ce=!0;try{ce=P(!0,ie)}finally{ce?C():(Q=!1,P=null)}}else Q=!1}var C;if(typeof V=="function")C=function(){V(j)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Qe=be.port2;be.port1.onmessage=j,C=function(){Qe.postMessage(null)}}else C=function(){x(j,0)};function Ye(ie){P=ie,Q||(Q=!0,C())}function Me(ie,ce){A=x(function(){ie(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ie){ie.callback=null},t.unstable_continueExecution=function(){b||I||(b=!0,Ye(W))},t.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ie?Math.floor(1e3/ie):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(ie){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var ae=w;w=ce;try{return ie()}finally{w=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ie,ce){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=w;w=ie;try{return ce()}finally{w=ae}},t.unstable_scheduleCallback=function(ie,ce,ae){var U=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?U+ae:U):ae=U,ie){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=ae+X,ie={id:y++,callback:ce,priorityLevel:ie,startTime:ae,expirationTime:X,sortIndex:-1},ae>U?(ie.sortIndex=ae,e(m,ie),n(f)===null&&ie===n(m)&&(D?(O(A),A=-1):D=!0,Me($,ae-U))):(ie.sortIndex=X,e(f,ie),b||I||(b=!0,Ye(W))),ie},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(ie){var ce=w;return function(){var ae=w;w=ce;try{return ie.apply(this,arguments)}finally{w=ae}}}}(mp)),mp}var w_;function b1(){return w_||(w_=1,pp.exports=T1()),pp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function C1(){if(E_)return wn;E_=1;var t=Bm(),e=b1();function n(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function w(i){return f.call(_,i)?!0:f.call(y,i)?!1:m.test(i)?_[i]=!0:(y[i]=!0,!1)}function I(i,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,s,l,h){if(s===null||typeof s>"u"||I(i,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function D(i,s,l,h,p,v,S){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=v,this.removeEmptyString=S}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new D(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new D(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new D(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new D(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new D(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new D(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new D(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new D(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new D(i,5,!1,i.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function V(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(O,V);x[s]=new D(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(O,V);x[s]=new D(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(O,V);x[s]=new D(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new D(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new D(i,1,!1,i.toLowerCase(),null,!0,!0)});function B(i,s,l,h){var p=x.hasOwnProperty(s)?x[s]:null;(p!==null?p.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,l,p,h)&&(l=null),h||p===null?w(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,s,l):i.setAttribute(s,l))))}var $=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),Q=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),L=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Qe=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,U;function X(i){if(U===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);U=s&&s[1]||""}return`
`+U+i}var pe=!1;function Pe(i,s){if(!i||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(K){var h=K}Reflect.construct(i,[],s)}else{try{s.call()}catch(K){h=K}i.call(s.prototype)}else{try{throw Error()}catch(K){h=K}i()}}catch(K){if(K&&h&&typeof K.stack=="string"){for(var p=K.stack.split(`
`),v=h.stack.split(`
`),S=p.length-1,k=v.length-1;1<=S&&0<=k&&p[S]!==v[k];)k--;for(;1<=S&&0<=k;S--,k--)if(p[S]!==v[k]){if(S!==1||k!==1)do if(S--,k--,0>k||p[S]!==v[k]){var M=`
`+p[S].replace(" at new "," at ");return i.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",i.displayName)),M}while(1<=S&&0<=k);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?X(i):""}function we(i){switch(i.tag){case 5:return X(i.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return i=Pe(i.type,!1),i;case 11:return i=Pe(i.type.render,!1),i;case 1:return i=Pe(i.type,!0),i;default:return""}}function xe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case P:return"Fragment";case Q:return"Portal";case R:return"Profiler";case A:return"StrictMode";case C:return"Suspense";case be:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case L:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case j:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Qe:return s=i.displayName||null,s!==null?s:xe(i.type)||"Memo";case Ye:s=i._payload,i=i._init;try{return xe(i(s))}catch{}}return null}function Oe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ne(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Fe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(i){var s=Fe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),h=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(S){h=""+S,v.call(this,S)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(S){h=""+S},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Dt(i){i._valueTracker||(i._valueTracker=et(i))}function Nt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return i&&(h=Fe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(s.setValue(i),!0):!1}function Mn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Vn(i,s){var l=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function zr(i,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=Ne(s.value!=null?s.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Wr(i,s){s=s.checked,s!=null&&B(i,"checked",s,!1)}function Hr(i,s){Wr(i,s);var l=Ne(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Fn(i,s.type,l):s.hasOwnProperty("defaultValue")&&Fn(i,s.type,Ne(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function hs(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Fn(i,s,l){(s!=="number"||Mn(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Sn=Array.isArray;function Gr(i,s,l,h){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ne(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Ua(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function fs(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(n(92));if(Sn(l)){if(1<l.length)throw Error(n(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ne(l)}}function ps(i,s){var l=Ne(s.value),h=Ne(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function ja(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function bt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ct(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?bt(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var qr,$a=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,h,p)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(qr=qr||document.createElement("div"),qr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=qr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function _i(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wo=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(i){wo.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),_o[s]=_o[i]})});function za(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||_o.hasOwnProperty(i)&&_o[i]?(""+s).trim():s+"px"}function Wa(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=za(l,s[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Ha=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ga(i,s){if(s){if(Ha[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function qa(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eo=null;function ms(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var gs=null,Bn=null,Ir=null;function vs(i){if(i=vl(i)){if(typeof gs!="function")throw Error(n(280));var s=i.stateNode;s&&(s=uc(s),gs(i.stateNode,i.type,s))}}function Sr(i){Bn?Ir?Ir.push(i):Ir=[i]:Bn=i}function Ka(){if(Bn){var i=Bn,s=Ir;if(Ir=Bn=null,vs(i),s)for(i=0;i<s.length;i++)vs(s[i])}}function Io(i,s){return i(s)}function Qa(){}var Kr=!1;function Ya(i,s,l){if(Kr)return i(s,l);Kr=!0;try{return Io(i,s,l)}finally{Kr=!1,(Bn!==null||Ir!==null)&&(Qa(),Ka())}}function vt(i,s){var l=i.stateNode;if(l===null)return null;var h=uc(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(n(231,s,typeof l));return l}var ys=!1;if(d)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){ys=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{ys=!1}function So(i,s,l,h,p,v,S,k,M){var K=Array.prototype.slice.call(arguments,3);try{s.apply(l,K)}catch(te){this.onError(te)}}var To=!1,_s=null,rr=!1,Xa=null,Fh={onError:function(i){To=!0,_s=i}};function ws(i,s,l,h,p,v,S,k,M){To=!1,_s=null,So.apply(Fh,arguments)}function Ou(i,s,l,h,p,v,S,k,M){if(ws.apply(this,arguments),To){if(To){var K=_s;To=!1,_s=null}else throw Error(n(198));rr||(rr=!0,Xa=K)}}function ir(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function bo(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function or(i){if(ir(i)!==i)throw Error(n(188))}function Lu(i){var s=i.alternate;if(!s){if(s=ir(i),s===null)throw Error(n(188));return s!==i?null:i}for(var l=i,h=s;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return or(p),i;if(v===h)return or(p),s;v=v.sibling}throw Error(n(188))}if(l.return!==h.return)l=p,h=v;else{for(var S=!1,k=p.child;k;){if(k===l){S=!0,l=p,h=v;break}if(k===h){S=!0,h=p,l=v;break}k=k.sibling}if(!S){for(k=v.child;k;){if(k===l){S=!0,l=v,h=p;break}if(k===h){S=!0,h=v,l=p;break}k=k.sibling}if(!S)throw Error(n(189))}}if(l.alternate!==h)throw Error(n(190))}if(l.tag!==3)throw Error(n(188));return l.stateNode.current===l?i:s}function Ja(i){return i=Lu(i),i!==null?Es(i):null}function Es(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Es(i);if(s!==null)return s;i=i.sibling}return null}var Is=e.unstable_scheduleCallback,Za=e.unstable_cancelCallback,Mu=e.unstable_shouldYield,Bh=e.unstable_requestPaint,it=e.unstable_now,Vu=e.unstable_getCurrentPriorityLevel,Co=e.unstable_ImmediatePriority,wi=e.unstable_UserBlockingPriority,Un=e.unstable_NormalPriority,el=e.unstable_LowPriority,Fu=e.unstable_IdlePriority,Ao=null,Tn=null;function Bu(i){if(Tn&&typeof Tn.onCommitFiberRoot=="function")try{Tn.onCommitFiberRoot(Ao,i,void 0,(i.current.flags&128)===128)}catch{}}var ln=Math.clz32?Math.clz32:ju,tl=Math.log,Uu=Math.LN2;function ju(i){return i>>>=0,i===0?32:31-(tl(i)/Uu|0)|0}var Ss=64,Ts=4194304;function Ei(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Po(i,s){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,v=i.pingedLanes,S=l&268435455;if(S!==0){var k=S&~p;k!==0?h=Ei(k):(v&=S,v!==0&&(h=Ei(v)))}else S=l&~p,S!==0?h=Ei(S):v!==0&&(h=Ei(v));if(h===0)return 0;if(s!==0&&s!==h&&(s&p)===0&&(p=h&-h,v=s&-s,p>=v||p===16&&(v&4194240)!==0))return s;if((h&4)!==0&&(h|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=h;0<s;)l=31-ln(s),p=1<<l,h|=i[l],s&=~p;return h}function Uh(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qr(i,s){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,v=i.pendingLanes;0<v;){var S=31-ln(v),k=1<<S,M=p[S];M===-1?((k&l)===0||(k&h)!==0)&&(p[S]=Uh(k,s)):M<=s&&(i.expiredLanes|=k),v&=~k}}function bn(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Ro(){var i=Ss;return Ss<<=1,(Ss&4194240)===0&&(Ss=64),i}function Ii(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Si(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-ln(s),i[s]=l}function rt(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ln(l),v=1<<p;s[p]=0,h[p]=-1,i[p]=-1,l&=~v}}function Ti(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var h=31-ln(l),p=1<<h;p&s|i[h]&s&&(i[h]|=s),l&=~p}}var ze=0;function bi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var $u,bs,zu,Wu,Hu,nl=!1,Tr=[],Wt=null,sr=null,ar=null,Ci=new Map,jn=new Map,br=[],jh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gu(i,s){switch(i){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":Ci.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":jn.delete(s.pointerId)}}function fn(i,s,l,h,p,v){return i===null||i.nativeEvent!==v?(i={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},s!==null&&(s=vl(s),s!==null&&bs(s)),i):(i.eventSystemFlags|=h,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function $h(i,s,l,h,p){switch(s){case"focusin":return Wt=fn(Wt,i,s,l,h,p),!0;case"dragenter":return sr=fn(sr,i,s,l,h,p),!0;case"mouseover":return ar=fn(ar,i,s,l,h,p),!0;case"pointerover":var v=p.pointerId;return Ci.set(v,fn(Ci.get(v)||null,i,s,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,jn.set(v,fn(jn.get(v)||null,i,s,l,h,p)),!0}return!1}function qu(i){var s=Oo(i.target);if(s!==null){var l=ir(s);if(l!==null){if(s=l.tag,s===13){if(s=bo(l),s!==null){i.blockedOn=s,Hu(i.priority,function(){zu(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Yr(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Cs(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);Eo=h,l.target.dispatchEvent(h),Eo=null}else return s=vl(l),s!==null&&bs(s),i.blockedOn=l,!1;s.shift()}return!0}function xo(i,s,l){Yr(i)&&l.delete(s)}function Ku(){nl=!1,Wt!==null&&Yr(Wt)&&(Wt=null),sr!==null&&Yr(sr)&&(sr=null),ar!==null&&Yr(ar)&&(ar=null),Ci.forEach(xo),jn.forEach(xo)}function lr(i,s){i.blockedOn===s&&(i.blockedOn=null,nl||(nl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ku)))}function ur(i){function s(p){return lr(p,i)}if(0<Tr.length){lr(Tr[0],i);for(var l=1;l<Tr.length;l++){var h=Tr[l];h.blockedOn===i&&(h.blockedOn=null)}}for(Wt!==null&&lr(Wt,i),sr!==null&&lr(sr,i),ar!==null&&lr(ar,i),Ci.forEach(s),jn.forEach(s),l=0;l<br.length;l++)h=br[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<br.length&&(l=br[0],l.blockedOn===null);)qu(l),l.blockedOn===null&&br.shift()}var Xr=$.ReactCurrentBatchConfig,Ai=!0;function ct(i,s,l,h){var p=ze,v=Xr.transition;Xr.transition=null;try{ze=1,rl(i,s,l,h)}finally{ze=p,Xr.transition=v}}function zh(i,s,l,h){var p=ze,v=Xr.transition;Xr.transition=null;try{ze=4,rl(i,s,l,h)}finally{ze=p,Xr.transition=v}}function rl(i,s,l,h){if(Ai){var p=Cs(i,s,l,h);if(p===null)ef(i,s,h,ko,l),Gu(i,h);else if($h(p,i,s,l,h))h.stopPropagation();else if(Gu(i,h),s&4&&-1<jh.indexOf(i)){for(;p!==null;){var v=vl(p);if(v!==null&&$u(v),v=Cs(i,s,l,h),v===null&&ef(i,s,h,ko,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else ef(i,s,h,null,l)}}var ko=null;function Cs(i,s,l,h){if(ko=null,i=ms(h),i=Oo(i),i!==null)if(s=ir(i),s===null)i=null;else if(l=s.tag,l===13){if(i=bo(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ko=i,null}function il(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vu()){case Co:return 1;case wi:return 4;case Un:case el:return 16;case Fu:return 536870912;default:return 16}default:return 16}}var Cn=null,As=null,pn=null;function ol(){if(pn)return pn;var i,s=As,l=s.length,h,p="value"in Cn?Cn.value:Cn.textContent,v=p.length;for(i=0;i<l&&s[i]===p[i];i++);var S=l-i;for(h=1;h<=S&&s[l-h]===p[v-h];h++);return pn=p.slice(i,1<h?1-h:void 0)}function Ps(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Cr(){return!0}function sl(){return!1}function Ht(i){function s(l,h,p,v,S){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=S,this.currentTarget=null;for(var k in i)i.hasOwnProperty(k)&&(l=i[k],this[k]=l?l(v):v[k]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Cr:sl,this.isPropagationStopped=sl,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),s}var cr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rs=Ht(cr),Ar=ae({},cr,{view:0,detail:0}),Wh=Ht(Ar),xs,Jr,Pi,Do=ae({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Pi&&(Pi&&i.type==="mousemove"?(xs=i.screenX-Pi.screenX,Jr=i.screenY-Pi.screenY):Jr=xs=0,Pi=i),xs)},movementY:function(i){return"movementY"in i?i.movementY:Jr}}),ks=Ht(Do),al=ae({},Do,{dataTransfer:0}),Qu=Ht(al),Ds=ae({},Ar,{relatedTarget:0}),Ns=Ht(Ds),Yu=ae({},cr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zr=Ht(Yu),Xu=ae({},cr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Ju=Ht(Xu),Zu=ae({},cr,{data:0}),ll=Ht(Zu),Os={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},un={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ec={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tc(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=ec[i])?!!s[i]:!1}function Pr(){return tc}var c=ae({},Ar,{key:function(i){if(i.key){var s=Os[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Ps(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?un[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pr,charCode:function(i){return i.type==="keypress"?Ps(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Ps(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=Ht(c),E=ae({},Do,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=Ht(E),H=ae({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pr}),Y=Ht(H),ue=ae({},cr,{propertyName:0,elapsedTime:0,pseudoElement:0}),tt=Ht(ue),At=ae({},Do,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),We=Ht(At),Ot=[9,13,27,32],wt=d&&"CompositionEvent"in window,$n=null;d&&"documentMode"in document&&($n=document.documentMode);var An=d&&"TextEvent"in window&&!$n,No=d&&(!wt||$n&&8<$n&&11>=$n),Ls=" ",uv=!1;function cv(i,s){switch(i){case"keyup":return Ot.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dv(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ms=!1;function yb(i,s){switch(i){case"compositionend":return dv(s);case"keypress":return s.which!==32?null:(uv=!0,Ls);case"textInput":return i=s.data,i===Ls&&uv?null:i;default:return null}}function _b(i,s){if(Ms)return i==="compositionend"||!wt&&cv(i,s)?(i=ol(),pn=As=Cn=null,Ms=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return No&&s.locale!=="ko"?null:s.data;default:return null}}var wb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hv(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!wb[i.type]:s==="textarea"}function fv(i,s,l,h){Sr(h),s=sc(s,"onChange"),0<s.length&&(l=new Rs("onChange","change",null,l,h),i.push({event:l,listeners:s}))}var ul=null,cl=null;function Eb(i){kv(i,0)}function nc(i){var s=js(i);if(Nt(s))return i}function Ib(i,s){if(i==="change")return s}var pv=!1;if(d){var Hh;if(d){var Gh="oninput"in document;if(!Gh){var mv=document.createElement("div");mv.setAttribute("oninput","return;"),Gh=typeof mv.oninput=="function"}Hh=Gh}else Hh=!1;pv=Hh&&(!document.documentMode||9<document.documentMode)}function gv(){ul&&(ul.detachEvent("onpropertychange",vv),cl=ul=null)}function vv(i){if(i.propertyName==="value"&&nc(cl)){var s=[];fv(s,cl,i,ms(i)),Ya(Eb,s)}}function Sb(i,s,l){i==="focusin"?(gv(),ul=s,cl=l,ul.attachEvent("onpropertychange",vv)):i==="focusout"&&gv()}function Tb(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return nc(cl)}function bb(i,s){if(i==="click")return nc(s)}function Cb(i,s){if(i==="input"||i==="change")return nc(s)}function Ab(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var dr=typeof Object.is=="function"?Object.is:Ab;function dl(i,s){if(dr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(s,p)||!dr(i[p],s[p]))return!1}return!0}function yv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function _v(i,s){var l=yv(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=s&&h>=s)return{node:l,offset:s-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=yv(l)}}function wv(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?wv(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Ev(){for(var i=window,s=Mn();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=Mn(i.document)}return s}function qh(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function Pb(i){var s=Ev(),l=i.focusedElem,h=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&wv(l.ownerDocument.documentElement,l)){if(h!==null&&qh(l)){if(s=h.start,i=h.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!i.extend&&v>h&&(p=h,h=v,v=p),p=_v(l,v);var S=_v(l,h);p&&S&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==S.node||i.focusOffset!==S.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),v>h?(i.addRange(s),i.extend(S.node,S.offset)):(s.setEnd(S.node,S.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var Rb=d&&"documentMode"in document&&11>=document.documentMode,Vs=null,Kh=null,hl=null,Qh=!1;function Iv(i,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qh||Vs==null||Vs!==Mn(h)||(h=Vs,"selectionStart"in h&&qh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),hl&&dl(hl,h)||(hl=h,h=sc(Kh,"onSelect"),0<h.length&&(s=new Rs("onSelect","select",null,s,l),i.push({event:s,listeners:h}),s.target=Vs)))}function rc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Fs={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Yh={},Sv={};d&&(Sv=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function ic(i){if(Yh[i])return Yh[i];if(!Fs[i])return i;var s=Fs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Sv)return Yh[i]=s[l];return i}var Tv=ic("animationend"),bv=ic("animationiteration"),Cv=ic("animationstart"),Av=ic("transitionend"),Pv=new Map,Rv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ri(i,s){Pv.set(i,s),a(s,[i])}for(var Xh=0;Xh<Rv.length;Xh++){var Jh=Rv[Xh],xb=Jh.toLowerCase(),kb=Jh[0].toUpperCase()+Jh.slice(1);Ri(xb,"on"+kb)}Ri(Tv,"onAnimationEnd"),Ri(bv,"onAnimationIteration"),Ri(Cv,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Av,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Db=new Set("cancel close invalid load scroll toggle".split(" ").concat(fl));function xv(i,s,l){var h=i.type||"unknown-event";i.currentTarget=l,Ou(h,s,void 0,i),i.currentTarget=null}function kv(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var v=void 0;if(s)for(var S=h.length-1;0<=S;S--){var k=h[S],M=k.instance,K=k.currentTarget;if(k=k.listener,M!==v&&p.isPropagationStopped())break e;xv(p,k,K),v=M}else for(S=0;S<h.length;S++){if(k=h[S],M=k.instance,K=k.currentTarget,k=k.listener,M!==v&&p.isPropagationStopped())break e;xv(p,k,K),v=M}}}if(rr)throw i=Xa,rr=!1,Xa=null,i}function st(i,s){var l=s[af];l===void 0&&(l=s[af]=new Set);var h=i+"__bubble";l.has(h)||(Dv(s,i,2,!1),l.add(h))}function Zh(i,s,l){var h=0;s&&(h|=4),Dv(l,i,h,s)}var oc="_reactListening"+Math.random().toString(36).slice(2);function pl(i){if(!i[oc]){i[oc]=!0,r.forEach(function(l){l!=="selectionchange"&&(Db.has(l)||Zh(l,!1,i),Zh(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[oc]||(s[oc]=!0,Zh("selectionchange",!1,s))}}function Dv(i,s,l,h){switch(il(s)){case 1:var p=ct;break;case 4:p=zh;break;default:p=rl}l=p.bind(null,s,l,i),p=void 0,!ys||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function ef(i,s,l,h,p){var v=h;if((s&1)===0&&(s&2)===0&&h!==null)e:for(;;){if(h===null)return;var S=h.tag;if(S===3||S===4){var k=h.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(S===4)for(S=h.return;S!==null;){var M=S.tag;if((M===3||M===4)&&(M=S.stateNode.containerInfo,M===p||M.nodeType===8&&M.parentNode===p))return;S=S.return}for(;k!==null;){if(S=Oo(k),S===null)return;if(M=S.tag,M===5||M===6){h=v=S;continue e}k=k.parentNode}}h=h.return}Ya(function(){var K=v,te=ms(l),re=[];e:{var Z=Pv.get(i);if(Z!==void 0){var de=Rs,me=i;switch(i){case"keypress":if(Ps(l)===0)break e;case"keydown":case"keyup":de=g;break;case"focusin":me="focus",de=Ns;break;case"focusout":me="blur",de=Ns;break;case"beforeblur":case"afterblur":de=Ns;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=ks;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Qu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Y;break;case Tv:case bv:case Cv:de=Zr;break;case Av:de=tt;break;case"scroll":de=Wh;break;case"wheel":de=We;break;case"copy":case"cut":case"paste":de=Ju;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=T}var ge=(s&4)!==0,yt=!ge&&i==="scroll",G=ge?Z!==null?Z+"Capture":null:Z;ge=[];for(var F=K,q;F!==null;){q=F;var se=q.stateNode;if(q.tag===5&&se!==null&&(q=se,G!==null&&(se=vt(F,G),se!=null&&ge.push(ml(F,se,q)))),yt)break;F=F.return}0<ge.length&&(Z=new de(Z,me,null,l,te),re.push({event:Z,listeners:ge}))}}if((s&7)===0){e:{if(Z=i==="mouseover"||i==="pointerover",de=i==="mouseout"||i==="pointerout",Z&&l!==Eo&&(me=l.relatedTarget||l.fromElement)&&(Oo(me)||me[ei]))break e;if((de||Z)&&(Z=te.window===te?te:(Z=te.ownerDocument)?Z.defaultView||Z.parentWindow:window,de?(me=l.relatedTarget||l.toElement,de=K,me=me?Oo(me):null,me!==null&&(yt=ir(me),me!==yt||me.tag!==5&&me.tag!==6)&&(me=null)):(de=null,me=K),de!==me)){if(ge=ks,se="onMouseLeave",G="onMouseEnter",F="mouse",(i==="pointerout"||i==="pointerover")&&(ge=T,se="onPointerLeave",G="onPointerEnter",F="pointer"),yt=de==null?Z:js(de),q=me==null?Z:js(me),Z=new ge(se,F+"leave",de,l,te),Z.target=yt,Z.relatedTarget=q,se=null,Oo(te)===K&&(ge=new ge(G,F+"enter",me,l,te),ge.target=q,ge.relatedTarget=yt,se=ge),yt=se,de&&me)t:{for(ge=de,G=me,F=0,q=ge;q;q=Bs(q))F++;for(q=0,se=G;se;se=Bs(se))q++;for(;0<F-q;)ge=Bs(ge),F--;for(;0<q-F;)G=Bs(G),q--;for(;F--;){if(ge===G||G!==null&&ge===G.alternate)break t;ge=Bs(ge),G=Bs(G)}ge=null}else ge=null;de!==null&&Nv(re,Z,de,ge,!1),me!==null&&yt!==null&&Nv(re,yt,me,ge,!0)}}e:{if(Z=K?js(K):window,de=Z.nodeName&&Z.nodeName.toLowerCase(),de==="select"||de==="input"&&Z.type==="file")var ve=Ib;else if(hv(Z))if(pv)ve=Cb;else{ve=Tb;var Ee=Sb}else(de=Z.nodeName)&&de.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(ve=bb);if(ve&&(ve=ve(i,K))){fv(re,ve,l,te);break e}Ee&&Ee(i,Z,K),i==="focusout"&&(Ee=Z._wrapperState)&&Ee.controlled&&Z.type==="number"&&Fn(Z,"number",Z.value)}switch(Ee=K?js(K):window,i){case"focusin":(hv(Ee)||Ee.contentEditable==="true")&&(Vs=Ee,Kh=K,hl=null);break;case"focusout":hl=Kh=Vs=null;break;case"mousedown":Qh=!0;break;case"contextmenu":case"mouseup":case"dragend":Qh=!1,Iv(re,l,te);break;case"selectionchange":if(Rb)break;case"keydown":case"keyup":Iv(re,l,te)}var Ie;if(wt)e:{switch(i){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Ms?cv(i,l)&&(Re="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(No&&l.locale!=="ko"&&(Ms||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ms&&(Ie=ol()):(Cn=te,As="value"in Cn?Cn.value:Cn.textContent,Ms=!0)),Ee=sc(K,Re),0<Ee.length&&(Re=new ll(Re,i,null,l,te),re.push({event:Re,listeners:Ee}),Ie?Re.data=Ie:(Ie=dv(l),Ie!==null&&(Re.data=Ie)))),(Ie=An?yb(i,l):_b(i,l))&&(K=sc(K,"onBeforeInput"),0<K.length&&(te=new ll("onBeforeInput","beforeinput",null,l,te),re.push({event:te,listeners:K}),te.data=Ie))}kv(re,s)})}function ml(i,s,l){return{instance:i,listener:s,currentTarget:l}}function sc(i,s){for(var l=s+"Capture",h=[];i!==null;){var p=i,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=vt(i,l),v!=null&&h.unshift(ml(i,v,p)),v=vt(i,s),v!=null&&h.push(ml(i,v,p))),i=i.return}return h}function Bs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Nv(i,s,l,h,p){for(var v=s._reactName,S=[];l!==null&&l!==h;){var k=l,M=k.alternate,K=k.stateNode;if(M!==null&&M===h)break;k.tag===5&&K!==null&&(k=K,p?(M=vt(l,v),M!=null&&S.unshift(ml(l,M,k))):p||(M=vt(l,v),M!=null&&S.push(ml(l,M,k)))),l=l.return}S.length!==0&&i.push({event:s,listeners:S})}var Nb=/\r\n?/g,Ob=/\u0000|\uFFFD/g;function Ov(i){return(typeof i=="string"?i:""+i).replace(Nb,`
`).replace(Ob,"")}function ac(i,s,l){if(s=Ov(s),Ov(i)!==s&&l)throw Error(n(425))}function lc(){}var tf=null,nf=null;function rf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,Lb=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,Mb=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(i){return Lv.resolve(null).then(i).catch(Vb)}:of;function Vb(i){setTimeout(function(){throw i})}function sf(i,s){var l=s,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),ur(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);ur(s)}function xi(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Mv(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Rr="__reactFiber$"+Us,gl="__reactProps$"+Us,ei="__reactContainer$"+Us,af="__reactEvents$"+Us,Fb="__reactListeners$"+Us,Bb="__reactHandles$"+Us;function Oo(i){var s=i[Rr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ei]||l[Rr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Mv(i);i!==null;){if(l=i[Rr])return l;i=Mv(i)}return s}i=l,l=i.parentNode}return null}function vl(i){return i=i[Rr]||i[ei],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function js(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function uc(i){return i[gl]||null}var lf=[],$s=-1;function ki(i){return{current:i}}function at(i){0>$s||(i.current=lf[$s],lf[$s]=null,$s--)}function ot(i,s){$s++,lf[$s]=i.current,i.current=s}var Di={},Jt=ki(Di),mn=ki(!1),Lo=Di;function zs(i,s){var l=i.type.contextTypes;if(!l)return Di;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=s[v];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function gn(i){return i=i.childContextTypes,i!=null}function cc(){at(mn),at(Jt)}function Vv(i,s,l){if(Jt.current!==Di)throw Error(n(168));ot(Jt,s),ot(mn,l)}function Fv(i,s,l){var h=i.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in s))throw Error(n(108,Oe(i)||"Unknown",p));return ae({},l,h)}function dc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Di,Lo=Jt.current,ot(Jt,i),ot(mn,mn.current),!0}function Bv(i,s,l){var h=i.stateNode;if(!h)throw Error(n(169));l?(i=Fv(i,s,Lo),h.__reactInternalMemoizedMergedChildContext=i,at(mn),at(Jt),ot(Jt,i)):at(mn),ot(mn,l)}var ti=null,hc=!1,uf=!1;function Uv(i){ti===null?ti=[i]:ti.push(i)}function Ub(i){hc=!0,Uv(i)}function Ni(){if(!uf&&ti!==null){uf=!0;var i=0,s=ze;try{var l=ti;for(ze=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}ti=null,hc=!1}catch(p){throw ti!==null&&(ti=ti.slice(i+1)),Is(Co,Ni),p}finally{ze=s,uf=!1}}return null}var Ws=[],Hs=0,fc=null,pc=0,zn=[],Wn=0,Mo=null,ni=1,ri="";function Vo(i,s){Ws[Hs++]=pc,Ws[Hs++]=fc,fc=i,pc=s}function jv(i,s,l){zn[Wn++]=ni,zn[Wn++]=ri,zn[Wn++]=Mo,Mo=i;var h=ni;i=ri;var p=32-ln(h)-1;h&=~(1<<p),l+=1;var v=32-ln(s)+p;if(30<v){var S=p-p%5;v=(h&(1<<S)-1).toString(32),h>>=S,p-=S,ni=1<<32-ln(s)+p|l<<p|h,ri=v+i}else ni=1<<v|l<<p|h,ri=i}function cf(i){i.return!==null&&(Vo(i,1),jv(i,1,0))}function df(i){for(;i===fc;)fc=Ws[--Hs],Ws[Hs]=null,pc=Ws[--Hs],Ws[Hs]=null;for(;i===Mo;)Mo=zn[--Wn],zn[Wn]=null,ri=zn[--Wn],zn[Wn]=null,ni=zn[--Wn],zn[Wn]=null}var Pn=null,Rn=null,dt=!1,hr=null;function $v(i,s){var l=Kn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function zv(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Pn=i,Rn=xi(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Pn=i,Rn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Mo!==null?{id:ni,overflow:ri}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Kn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Pn=i,Rn=null,!0):!1;default:return!1}}function hf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ff(i){if(dt){var s=Rn;if(s){var l=s;if(!zv(i,s)){if(hf(i))throw Error(n(418));s=xi(l.nextSibling);var h=Pn;s&&zv(i,s)?$v(h,l):(i.flags=i.flags&-4097|2,dt=!1,Pn=i)}}else{if(hf(i))throw Error(n(418));i.flags=i.flags&-4097|2,dt=!1,Pn=i}}}function Wv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Pn=i}function mc(i){if(i!==Pn)return!1;if(!dt)return Wv(i),dt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!rf(i.type,i.memoizedProps)),s&&(s=Rn)){if(hf(i))throw Hv(),Error(n(418));for(;s;)$v(i,s),s=xi(s.nextSibling)}if(Wv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Rn=xi(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Rn=null}}else Rn=Pn?xi(i.stateNode.nextSibling):null;return!0}function Hv(){for(var i=Rn;i;)i=xi(i.nextSibling)}function Gs(){Rn=Pn=null,dt=!1}function pf(i){hr===null?hr=[i]:hr.push(i)}var jb=$.ReactCurrentBatchConfig;function yl(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(n(309));var h=l.stateNode}if(!h)throw Error(n(147,i));var p=h,v=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===v?s.ref:(s=function(S){var k=p.refs;S===null?delete k[v]:k[v]=S},s._stringRef=v,s)}if(typeof i!="string")throw Error(n(284));if(!l._owner)throw Error(n(290,i))}return i}function gc(i,s){throw i=Object.prototype.toString.call(s),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Gv(i){var s=i._init;return s(i._payload)}function qv(i){function s(G,F){if(i){var q=G.deletions;q===null?(G.deletions=[F],G.flags|=16):q.push(F)}}function l(G,F){if(!i)return null;for(;F!==null;)s(G,F),F=F.sibling;return null}function h(G,F){for(G=new Map;F!==null;)F.key!==null?G.set(F.key,F):G.set(F.index,F),F=F.sibling;return G}function p(G,F){return G=ji(G,F),G.index=0,G.sibling=null,G}function v(G,F,q){return G.index=q,i?(q=G.alternate,q!==null?(q=q.index,q<F?(G.flags|=2,F):q):(G.flags|=2,F)):(G.flags|=1048576,F)}function S(G){return i&&G.alternate===null&&(G.flags|=2),G}function k(G,F,q,se){return F===null||F.tag!==6?(F=op(q,G.mode,se),F.return=G,F):(F=p(F,q),F.return=G,F)}function M(G,F,q,se){var ve=q.type;return ve===P?te(G,F,q.props.children,se,q.key):F!==null&&(F.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Ye&&Gv(ve)===F.type)?(se=p(F,q.props),se.ref=yl(G,F,q),se.return=G,se):(se=Uc(q.type,q.key,q.props,null,G.mode,se),se.ref=yl(G,F,q),se.return=G,se)}function K(G,F,q,se){return F===null||F.tag!==4||F.stateNode.containerInfo!==q.containerInfo||F.stateNode.implementation!==q.implementation?(F=sp(q,G.mode,se),F.return=G,F):(F=p(F,q.children||[]),F.return=G,F)}function te(G,F,q,se,ve){return F===null||F.tag!==7?(F=Ho(q,G.mode,se,ve),F.return=G,F):(F=p(F,q),F.return=G,F)}function re(G,F,q){if(typeof F=="string"&&F!==""||typeof F=="number")return F=op(""+F,G.mode,q),F.return=G,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case W:return q=Uc(F.type,F.key,F.props,null,G.mode,q),q.ref=yl(G,null,F),q.return=G,q;case Q:return F=sp(F,G.mode,q),F.return=G,F;case Ye:var se=F._init;return re(G,se(F._payload),q)}if(Sn(F)||ce(F))return F=Ho(F,G.mode,q,null),F.return=G,F;gc(G,F)}return null}function Z(G,F,q,se){var ve=F!==null?F.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return ve!==null?null:k(G,F,""+q,se);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case W:return q.key===ve?M(G,F,q,se):null;case Q:return q.key===ve?K(G,F,q,se):null;case Ye:return ve=q._init,Z(G,F,ve(q._payload),se)}if(Sn(q)||ce(q))return ve!==null?null:te(G,F,q,se,null);gc(G,q)}return null}function de(G,F,q,se,ve){if(typeof se=="string"&&se!==""||typeof se=="number")return G=G.get(q)||null,k(F,G,""+se,ve);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case W:return G=G.get(se.key===null?q:se.key)||null,M(F,G,se,ve);case Q:return G=G.get(se.key===null?q:se.key)||null,K(F,G,se,ve);case Ye:var Ee=se._init;return de(G,F,q,Ee(se._payload),ve)}if(Sn(se)||ce(se))return G=G.get(q)||null,te(F,G,se,ve,null);gc(F,se)}return null}function me(G,F,q,se){for(var ve=null,Ee=null,Ie=F,Re=F=0,Vt=null;Ie!==null&&Re<q.length;Re++){Ie.index>Re?(Vt=Ie,Ie=null):Vt=Ie.sibling;var Ke=Z(G,Ie,q[Re],se);if(Ke===null){Ie===null&&(Ie=Vt);break}i&&Ie&&Ke.alternate===null&&s(G,Ie),F=v(Ke,F,Re),Ee===null?ve=Ke:Ee.sibling=Ke,Ee=Ke,Ie=Vt}if(Re===q.length)return l(G,Ie),dt&&Vo(G,Re),ve;if(Ie===null){for(;Re<q.length;Re++)Ie=re(G,q[Re],se),Ie!==null&&(F=v(Ie,F,Re),Ee===null?ve=Ie:Ee.sibling=Ie,Ee=Ie);return dt&&Vo(G,Re),ve}for(Ie=h(G,Ie);Re<q.length;Re++)Vt=de(Ie,G,Re,q[Re],se),Vt!==null&&(i&&Vt.alternate!==null&&Ie.delete(Vt.key===null?Re:Vt.key),F=v(Vt,F,Re),Ee===null?ve=Vt:Ee.sibling=Vt,Ee=Vt);return i&&Ie.forEach(function($i){return s(G,$i)}),dt&&Vo(G,Re),ve}function ge(G,F,q,se){var ve=ce(q);if(typeof ve!="function")throw Error(n(150));if(q=ve.call(q),q==null)throw Error(n(151));for(var Ee=ve=null,Ie=F,Re=F=0,Vt=null,Ke=q.next();Ie!==null&&!Ke.done;Re++,Ke=q.next()){Ie.index>Re?(Vt=Ie,Ie=null):Vt=Ie.sibling;var $i=Z(G,Ie,Ke.value,se);if($i===null){Ie===null&&(Ie=Vt);break}i&&Ie&&$i.alternate===null&&s(G,Ie),F=v($i,F,Re),Ee===null?ve=$i:Ee.sibling=$i,Ee=$i,Ie=Vt}if(Ke.done)return l(G,Ie),dt&&Vo(G,Re),ve;if(Ie===null){for(;!Ke.done;Re++,Ke=q.next())Ke=re(G,Ke.value,se),Ke!==null&&(F=v(Ke,F,Re),Ee===null?ve=Ke:Ee.sibling=Ke,Ee=Ke);return dt&&Vo(G,Re),ve}for(Ie=h(G,Ie);!Ke.done;Re++,Ke=q.next())Ke=de(Ie,G,Re,Ke.value,se),Ke!==null&&(i&&Ke.alternate!==null&&Ie.delete(Ke.key===null?Re:Ke.key),F=v(Ke,F,Re),Ee===null?ve=Ke:Ee.sibling=Ke,Ee=Ke);return i&&Ie.forEach(function(w1){return s(G,w1)}),dt&&Vo(G,Re),ve}function yt(G,F,q,se){if(typeof q=="object"&&q!==null&&q.type===P&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case W:e:{for(var ve=q.key,Ee=F;Ee!==null;){if(Ee.key===ve){if(ve=q.type,ve===P){if(Ee.tag===7){l(G,Ee.sibling),F=p(Ee,q.props.children),F.return=G,G=F;break e}}else if(Ee.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Ye&&Gv(ve)===Ee.type){l(G,Ee.sibling),F=p(Ee,q.props),F.ref=yl(G,Ee,q),F.return=G,G=F;break e}l(G,Ee);break}else s(G,Ee);Ee=Ee.sibling}q.type===P?(F=Ho(q.props.children,G.mode,se,q.key),F.return=G,G=F):(se=Uc(q.type,q.key,q.props,null,G.mode,se),se.ref=yl(G,F,q),se.return=G,G=se)}return S(G);case Q:e:{for(Ee=q.key;F!==null;){if(F.key===Ee)if(F.tag===4&&F.stateNode.containerInfo===q.containerInfo&&F.stateNode.implementation===q.implementation){l(G,F.sibling),F=p(F,q.children||[]),F.return=G,G=F;break e}else{l(G,F);break}else s(G,F);F=F.sibling}F=sp(q,G.mode,se),F.return=G,G=F}return S(G);case Ye:return Ee=q._init,yt(G,F,Ee(q._payload),se)}if(Sn(q))return me(G,F,q,se);if(ce(q))return ge(G,F,q,se);gc(G,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,F!==null&&F.tag===6?(l(G,F.sibling),F=p(F,q),F.return=G,G=F):(l(G,F),F=op(q,G.mode,se),F.return=G,G=F),S(G)):l(G,F)}return yt}var qs=qv(!0),Kv=qv(!1),vc=ki(null),yc=null,Ks=null,mf=null;function gf(){mf=Ks=yc=null}function vf(i){var s=vc.current;at(vc),i._currentValue=s}function yf(i,s,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),i===l)break;i=i.return}}function Qs(i,s){yc=i,mf=Ks=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(vn=!0),i.firstContext=null)}function Hn(i){var s=i._currentValue;if(mf!==i)if(i={context:i,memoizedValue:s,next:null},Ks===null){if(yc===null)throw Error(n(308));Ks=i,yc.dependencies={lanes:0,firstContext:i}}else Ks=Ks.next=i;return s}var Fo=null;function _f(i){Fo===null?Fo=[i]:Fo.push(i)}function Qv(i,s,l,h){var p=s.interleaved;return p===null?(l.next=l,_f(s)):(l.next=p.next,p.next=l),s.interleaved=l,ii(i,h)}function ii(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Oi=!1;function wf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yv(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function oi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Li(i,s,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(Ge&2)!==0){var p=h.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),h.pending=s,ii(i,l)}return p=h.interleaved,p===null?(s.next=s,_f(h)):(s.next=p.next,p.next=s),h.interleaved=s,ii(i,l)}function _c(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Ti(i,l)}}function Xv(i,s){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var S={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=S:v=v.next=S,l=l.next}while(l!==null);v===null?p=v=s:v=v.next=s}else p=v=s;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function wc(i,s,l,h){var p=i.updateQueue;Oi=!1;var v=p.firstBaseUpdate,S=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var M=k,K=M.next;M.next=null,S===null?v=K:S.next=K,S=M;var te=i.alternate;te!==null&&(te=te.updateQueue,k=te.lastBaseUpdate,k!==S&&(k===null?te.firstBaseUpdate=K:k.next=K,te.lastBaseUpdate=M))}if(v!==null){var re=p.baseState;S=0,te=K=M=null,k=v;do{var Z=k.lane,de=k.eventTime;if((h&Z)===Z){te!==null&&(te=te.next={eventTime:de,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var me=i,ge=k;switch(Z=s,de=l,ge.tag){case 1:if(me=ge.payload,typeof me=="function"){re=me.call(de,re,Z);break e}re=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ge.payload,Z=typeof me=="function"?me.call(de,re,Z):me,Z==null)break e;re=ae({},re,Z);break e;case 2:Oi=!0}}k.callback!==null&&k.lane!==0&&(i.flags|=64,Z=p.effects,Z===null?p.effects=[k]:Z.push(k))}else de={eventTime:de,lane:Z,tag:k.tag,payload:k.payload,callback:k.callback,next:null},te===null?(K=te=de,M=re):te=te.next=de,S|=Z;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;Z=k,k=Z.next,Z.next=null,p.lastBaseUpdate=Z,p.shared.pending=null}}while(!0);if(te===null&&(M=re),p.baseState=M,p.firstBaseUpdate=K,p.lastBaseUpdate=te,s=p.shared.interleaved,s!==null){p=s;do S|=p.lane,p=p.next;while(p!==s)}else v===null&&(p.shared.lanes=0);jo|=S,i.lanes=S,i.memoizedState=re}}function Jv(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var h=i[s],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(n(191,p));p.call(h)}}}var _l={},xr=ki(_l),wl=ki(_l),El=ki(_l);function Bo(i){if(i===_l)throw Error(n(174));return i}function Ef(i,s){switch(ot(El,s),ot(wl,i),ot(xr,_l),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Ct(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Ct(s,i)}at(xr),ot(xr,s)}function Ys(){at(xr),at(wl),at(El)}function Zv(i){Bo(El.current);var s=Bo(xr.current),l=Ct(s,i.type);s!==l&&(ot(wl,i),ot(xr,l))}function If(i){wl.current===i&&(at(xr),at(wl))}var ht=ki(0);function Ec(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Sf=[];function Tf(){for(var i=0;i<Sf.length;i++)Sf[i]._workInProgressVersionPrimary=null;Sf.length=0}var Ic=$.ReactCurrentDispatcher,bf=$.ReactCurrentBatchConfig,Uo=0,ft=null,Pt=null,Lt=null,Sc=!1,Il=!1,Sl=0,$b=0;function Zt(){throw Error(n(321))}function Cf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!dr(i[l],s[l]))return!1;return!0}function Af(i,s,l,h,p,v){if(Uo=v,ft=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ic.current=i===null||i.memoizedState===null?Gb:qb,i=l(h,p),Il){v=0;do{if(Il=!1,Sl=0,25<=v)throw Error(n(301));v+=1,Lt=Pt=null,s.updateQueue=null,Ic.current=Kb,i=l(h,p)}while(Il)}if(Ic.current=Cc,s=Pt!==null&&Pt.next!==null,Uo=0,Lt=Pt=ft=null,Sc=!1,s)throw Error(n(300));return i}function Pf(){var i=Sl!==0;return Sl=0,i}function kr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?ft.memoizedState=Lt=i:Lt=Lt.next=i,Lt}function Gn(){if(Pt===null){var i=ft.alternate;i=i!==null?i.memoizedState:null}else i=Pt.next;var s=Lt===null?ft.memoizedState:Lt.next;if(s!==null)Lt=s,Pt=i;else{if(i===null)throw Error(n(310));Pt=i,i={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Lt===null?ft.memoizedState=Lt=i:Lt=Lt.next=i}return Lt}function Tl(i,s){return typeof s=="function"?s(i):s}function Rf(i){var s=Gn(),l=s.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=i;var h=Pt,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var S=p.next;p.next=v.next,v.next=S}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var k=S=null,M=null,K=v;do{var te=K.lane;if((Uo&te)===te)M!==null&&(M=M.next={lane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),h=K.hasEagerState?K.eagerState:i(h,K.action);else{var re={lane:te,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null};M===null?(k=M=re,S=h):M=M.next=re,ft.lanes|=te,jo|=te}K=K.next}while(K!==null&&K!==v);M===null?S=h:M.next=k,dr(h,s.memoizedState)||(vn=!0),s.memoizedState=h,s.baseState=S,s.baseQueue=M,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do v=p.lane,ft.lanes|=v,jo|=v,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function xf(i){var s=Gn(),l=s.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,v=s.memoizedState;if(p!==null){l.pending=null;var S=p=p.next;do v=i(v,S.action),S=S.next;while(S!==p);dr(v,s.memoizedState)||(vn=!0),s.memoizedState=v,s.baseQueue===null&&(s.baseState=v),l.lastRenderedState=v}return[v,h]}function ey(){}function ty(i,s){var l=ft,h=Gn(),p=s(),v=!dr(h.memoizedState,p);if(v&&(h.memoizedState=p,vn=!0),h=h.queue,kf(iy.bind(null,l,h,i),[i]),h.getSnapshot!==s||v||Lt!==null&&Lt.memoizedState.tag&1){if(l.flags|=2048,bl(9,ry.bind(null,l,h,p,s),void 0,null),Mt===null)throw Error(n(349));(Uo&30)!==0||ny(l,s,p)}return p}function ny(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=ft.updateQueue,s===null?(s={lastEffect:null,stores:null},ft.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function ry(i,s,l,h){s.value=l,s.getSnapshot=h,oy(s)&&sy(i)}function iy(i,s,l){return l(function(){oy(s)&&sy(i)})}function oy(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!dr(i,l)}catch{return!0}}function sy(i){var s=ii(i,1);s!==null&&gr(s,i,1,-1)}function ay(i){var s=kr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tl,lastRenderedState:i},s.queue=i,i=i.dispatch=Hb.bind(null,ft,i),[s.memoizedState,i]}function bl(i,s,l,h){return i={tag:i,create:s,destroy:l,deps:h,next:null},s=ft.updateQueue,s===null?(s={lastEffect:null,stores:null},ft.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,s.lastEffect=i)),i}function ly(){return Gn().memoizedState}function Tc(i,s,l,h){var p=kr();ft.flags|=i,p.memoizedState=bl(1|s,l,void 0,h===void 0?null:h)}function bc(i,s,l,h){var p=Gn();h=h===void 0?null:h;var v=void 0;if(Pt!==null){var S=Pt.memoizedState;if(v=S.destroy,h!==null&&Cf(h,S.deps)){p.memoizedState=bl(s,l,v,h);return}}ft.flags|=i,p.memoizedState=bl(1|s,l,v,h)}function uy(i,s){return Tc(8390656,8,i,s)}function kf(i,s){return bc(2048,8,i,s)}function cy(i,s){return bc(4,2,i,s)}function dy(i,s){return bc(4,4,i,s)}function hy(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function fy(i,s,l){return l=l!=null?l.concat([i]):null,bc(4,4,hy.bind(null,s,i),l)}function Df(){}function py(i,s){var l=Gn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Cf(s,h[1])?h[0]:(l.memoizedState=[i,s],i)}function my(i,s){var l=Gn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Cf(s,h[1])?h[0]:(i=i(),l.memoizedState=[i,s],i)}function gy(i,s,l){return(Uo&21)===0?(i.baseState&&(i.baseState=!1,vn=!0),i.memoizedState=l):(dr(l,s)||(l=Ro(),ft.lanes|=l,jo|=l,i.baseState=!0),s)}function zb(i,s){var l=ze;ze=l!==0&&4>l?l:4,i(!0);var h=bf.transition;bf.transition={};try{i(!1),s()}finally{ze=l,bf.transition=h}}function vy(){return Gn().memoizedState}function Wb(i,s,l){var h=Bi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},yy(i))_y(s,l);else if(l=Qv(i,s,l,h),l!==null){var p=dn();gr(l,i,h,p),wy(l,s,h)}}function Hb(i,s,l){var h=Bi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(yy(i))_y(s,p);else{var v=i.alternate;if(i.lanes===0&&(v===null||v.lanes===0)&&(v=s.lastRenderedReducer,v!==null))try{var S=s.lastRenderedState,k=v(S,l);if(p.hasEagerState=!0,p.eagerState=k,dr(k,S)){var M=s.interleaved;M===null?(p.next=p,_f(s)):(p.next=M.next,M.next=p),s.interleaved=p;return}}catch{}finally{}l=Qv(i,s,p,h),l!==null&&(p=dn(),gr(l,i,h,p),wy(l,s,h))}}function yy(i){var s=i.alternate;return i===ft||s!==null&&s===ft}function _y(i,s){Il=Sc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function wy(i,s,l){if((l&4194240)!==0){var h=s.lanes;h&=i.pendingLanes,l|=h,s.lanes=l,Ti(i,l)}}var Cc={readContext:Hn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},Gb={readContext:Hn,useCallback:function(i,s){return kr().memoizedState=[i,s===void 0?null:s],i},useContext:Hn,useEffect:uy,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Tc(4194308,4,hy.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Tc(4194308,4,i,s)},useInsertionEffect:function(i,s){return Tc(4,2,i,s)},useMemo:function(i,s){var l=kr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var h=kr();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},h.queue=i,i=i.dispatch=Wb.bind(null,ft,i),[h.memoizedState,i]},useRef:function(i){var s=kr();return i={current:i},s.memoizedState=i},useState:ay,useDebugValue:Df,useDeferredValue:function(i){return kr().memoizedState=i},useTransition:function(){var i=ay(!1),s=i[0];return i=zb.bind(null,i[1]),kr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var h=ft,p=kr();if(dt){if(l===void 0)throw Error(n(407));l=l()}else{if(l=s(),Mt===null)throw Error(n(349));(Uo&30)!==0||ny(h,s,l)}p.memoizedState=l;var v={value:l,getSnapshot:s};return p.queue=v,uy(iy.bind(null,h,v,i),[i]),h.flags|=2048,bl(9,ry.bind(null,h,v,l,s),void 0,null),l},useId:function(){var i=kr(),s=Mt.identifierPrefix;if(dt){var l=ri,h=ni;l=(h&~(1<<32-ln(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=Sl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=$b++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},qb={readContext:Hn,useCallback:py,useContext:Hn,useEffect:kf,useImperativeHandle:fy,useInsertionEffect:cy,useLayoutEffect:dy,useMemo:my,useReducer:Rf,useRef:ly,useState:function(){return Rf(Tl)},useDebugValue:Df,useDeferredValue:function(i){var s=Gn();return gy(s,Pt.memoizedState,i)},useTransition:function(){var i=Rf(Tl)[0],s=Gn().memoizedState;return[i,s]},useMutableSource:ey,useSyncExternalStore:ty,useId:vy,unstable_isNewReconciler:!1},Kb={readContext:Hn,useCallback:py,useContext:Hn,useEffect:kf,useImperativeHandle:fy,useInsertionEffect:cy,useLayoutEffect:dy,useMemo:my,useReducer:xf,useRef:ly,useState:function(){return xf(Tl)},useDebugValue:Df,useDeferredValue:function(i){var s=Gn();return Pt===null?s.memoizedState=i:gy(s,Pt.memoizedState,i)},useTransition:function(){var i=xf(Tl)[0],s=Gn().memoizedState;return[i,s]},useMutableSource:ey,useSyncExternalStore:ty,useId:vy,unstable_isNewReconciler:!1};function fr(i,s){if(i&&i.defaultProps){s=ae({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Nf(i,s,l,h){s=i.memoizedState,l=l(h,s),l=l==null?s:ae({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Ac={isMounted:function(i){return(i=i._reactInternals)?ir(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var h=dn(),p=Bi(i),v=oi(h,p);v.payload=s,l!=null&&(v.callback=l),s=Li(i,v,p),s!==null&&(gr(s,i,p,h),_c(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var h=dn(),p=Bi(i),v=oi(h,p);v.tag=1,v.payload=s,l!=null&&(v.callback=l),s=Li(i,v,p),s!==null&&(gr(s,i,p,h),_c(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=dn(),h=Bi(i),p=oi(l,h);p.tag=2,s!=null&&(p.callback=s),s=Li(i,p,h),s!==null&&(gr(s,i,h,l),_c(s,i,h))}};function Ey(i,s,l,h,p,v,S){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,v,S):s.prototype&&s.prototype.isPureReactComponent?!dl(l,h)||!dl(p,v):!0}function Iy(i,s,l){var h=!1,p=Di,v=s.contextType;return typeof v=="object"&&v!==null?v=Hn(v):(p=gn(s)?Lo:Jt.current,h=s.contextTypes,v=(h=h!=null)?zs(i,p):Di),s=new s(l,v),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ac,i.stateNode=s,s._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=v),s}function Sy(i,s,l,h){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==i&&Ac.enqueueReplaceState(s,s.state,null)}function Of(i,s,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},wf(i);var v=s.contextType;typeof v=="object"&&v!==null?p.context=Hn(v):(v=gn(s)?Lo:Jt.current,p.context=zs(i,v)),p.state=i.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(Nf(i,s,v,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ac.enqueueReplaceState(p,p.state,null),wc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Xs(i,s){try{var l="",h=s;do l+=we(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:i,source:s,stack:p,digest:null}}function Lf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Mf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var Qb=typeof WeakMap=="function"?WeakMap:Map;function Ty(i,s,l){l=oi(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Oc||(Oc=!0,Xf=h),Mf(i,s)},l}function by(i,s,l){l=oi(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=s.value;l.payload=function(){return h(p)},l.callback=function(){Mf(i,s)}}var v=i.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Mf(i,s),typeof h!="function"&&(Vi===null?Vi=new Set([this]):Vi.add(this));var S=s.stack;this.componentDidCatch(s.value,{componentStack:S!==null?S:""})}),l}function Cy(i,s,l){var h=i.pingCache;if(h===null){h=i.pingCache=new Qb;var p=new Set;h.set(s,p)}else p=h.get(s),p===void 0&&(p=new Set,h.set(s,p));p.has(l)||(p.add(l),i=u1.bind(null,i,s,l),s.then(i,i))}function Ay(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function Py(i,s,l,h,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=oi(-1,1),s.tag=2,Li(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var Yb=$.ReactCurrentOwner,vn=!1;function cn(i,s,l,h){s.child=i===null?Kv(s,null,l,h):qs(s,i.child,l,h)}function Ry(i,s,l,h,p){l=l.render;var v=s.ref;return Qs(s,p),h=Af(i,s,l,h,v,p),l=Pf(),i!==null&&!vn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,si(i,s,p)):(dt&&l&&cf(s),s.flags|=1,cn(i,s,h,p),s.child)}function xy(i,s,l,h,p){if(i===null){var v=l.type;return typeof v=="function"&&!ip(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=v,ky(i,s,v,h,p)):(i=Uc(l.type,null,h,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(v=i.child,(i.lanes&p)===0){var S=v.memoizedProps;if(l=l.compare,l=l!==null?l:dl,l(S,h)&&i.ref===s.ref)return si(i,s,p)}return s.flags|=1,i=ji(v,h),i.ref=s.ref,i.return=s,s.child=i}function ky(i,s,l,h,p){if(i!==null){var v=i.memoizedProps;if(dl(v,h)&&i.ref===s.ref)if(vn=!1,s.pendingProps=h=v,(i.lanes&p)!==0)(i.flags&131072)!==0&&(vn=!0);else return s.lanes=i.lanes,si(i,s,p)}return Vf(i,s,l,h,p)}function Dy(i,s,l){var h=s.pendingProps,p=h.children,v=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Zs,xn),xn|=l;else{if((l&1073741824)===0)return i=v!==null?v.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,ot(Zs,xn),xn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,ot(Zs,xn),xn|=h}else v!==null?(h=v.baseLanes|l,s.memoizedState=null):h=l,ot(Zs,xn),xn|=h;return cn(i,s,p,l),s.child}function Ny(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Vf(i,s,l,h,p){var v=gn(l)?Lo:Jt.current;return v=zs(s,v),Qs(s,p),l=Af(i,s,l,h,v,p),h=Pf(),i!==null&&!vn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,si(i,s,p)):(dt&&h&&cf(s),s.flags|=1,cn(i,s,l,p),s.child)}function Oy(i,s,l,h,p){if(gn(l)){var v=!0;dc(s)}else v=!1;if(Qs(s,p),s.stateNode===null)Rc(i,s),Iy(s,l,h),Of(s,l,h,p),h=!0;else if(i===null){var S=s.stateNode,k=s.memoizedProps;S.props=k;var M=S.context,K=l.contextType;typeof K=="object"&&K!==null?K=Hn(K):(K=gn(l)?Lo:Jt.current,K=zs(s,K));var te=l.getDerivedStateFromProps,re=typeof te=="function"||typeof S.getSnapshotBeforeUpdate=="function";re||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(k!==h||M!==K)&&Sy(s,S,h,K),Oi=!1;var Z=s.memoizedState;S.state=Z,wc(s,h,S,p),M=s.memoizedState,k!==h||Z!==M||mn.current||Oi?(typeof te=="function"&&(Nf(s,l,te,h),M=s.memoizedState),(k=Oi||Ey(s,l,k,h,Z,M,K))?(re||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(s.flags|=4194308)):(typeof S.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=M),S.props=h,S.state=M,S.context=K,h=k):(typeof S.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{S=s.stateNode,Yv(i,s),k=s.memoizedProps,K=s.type===s.elementType?k:fr(s.type,k),S.props=K,re=s.pendingProps,Z=S.context,M=l.contextType,typeof M=="object"&&M!==null?M=Hn(M):(M=gn(l)?Lo:Jt.current,M=zs(s,M));var de=l.getDerivedStateFromProps;(te=typeof de=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(k!==re||Z!==M)&&Sy(s,S,h,M),Oi=!1,Z=s.memoizedState,S.state=Z,wc(s,h,S,p);var me=s.memoizedState;k!==re||Z!==me||mn.current||Oi?(typeof de=="function"&&(Nf(s,l,de,h),me=s.memoizedState),(K=Oi||Ey(s,l,K,h,Z,me,M)||!1)?(te||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(h,me,M),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(h,me,M)),typeof S.componentDidUpdate=="function"&&(s.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof S.componentDidUpdate!="function"||k===i.memoizedProps&&Z===i.memoizedState||(s.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&Z===i.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=me),S.props=h,S.state=me,S.context=M,h=K):(typeof S.componentDidUpdate!="function"||k===i.memoizedProps&&Z===i.memoizedState||(s.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&Z===i.memoizedState||(s.flags|=1024),h=!1)}return Ff(i,s,l,h,v,p)}function Ff(i,s,l,h,p,v){Ny(i,s);var S=(s.flags&128)!==0;if(!h&&!S)return p&&Bv(s,l,!1),si(i,s,v);h=s.stateNode,Yb.current=s;var k=S&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,i!==null&&S?(s.child=qs(s,i.child,null,v),s.child=qs(s,null,k,v)):cn(i,s,k,v),s.memoizedState=h.state,p&&Bv(s,l,!0),s.child}function Ly(i){var s=i.stateNode;s.pendingContext?Vv(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Vv(i,s.context,!1),Ef(i,s.containerInfo)}function My(i,s,l,h,p){return Gs(),pf(p),s.flags|=256,cn(i,s,l,h),s.child}var Bf={dehydrated:null,treeContext:null,retryLane:0};function Uf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Vy(i,s,l){var h=s.pendingProps,p=ht.current,v=!1,S=(s.flags&128)!==0,k;if((k=S)||(k=i!==null&&i.memoizedState===null?!1:(p&2)!==0),k?(v=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ot(ht,p&1),i===null)return ff(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(S=h.children,i=h.fallback,v?(h=s.mode,v=s.child,S={mode:"hidden",children:S},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=S):v=jc(S,h,0,null),i=Ho(i,h,l,null),v.return=s,i.return=s,v.sibling=i,s.child=v,s.child.memoizedState=Uf(l),s.memoizedState=Bf,i):jf(s,S));if(p=i.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return Xb(i,s,S,h,k,p,l);if(v){v=h.fallback,S=s.mode,p=i.child,k=p.sibling;var M={mode:"hidden",children:h.children};return(S&1)===0&&s.child!==p?(h=s.child,h.childLanes=0,h.pendingProps=M,s.deletions=null):(h=ji(p,M),h.subtreeFlags=p.subtreeFlags&14680064),k!==null?v=ji(k,v):(v=Ho(v,S,l,null),v.flags|=2),v.return=s,h.return=s,h.sibling=v,s.child=h,h=v,v=s.child,S=i.child.memoizedState,S=S===null?Uf(l):{baseLanes:S.baseLanes|l,cachePool:null,transitions:S.transitions},v.memoizedState=S,v.childLanes=i.childLanes&~l,s.memoizedState=Bf,h}return v=i.child,i=v.sibling,h=ji(v,{mode:"visible",children:h.children}),(s.mode&1)===0&&(h.lanes=l),h.return=s,h.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=h,s.memoizedState=null,h}function jf(i,s){return s=jc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Pc(i,s,l,h){return h!==null&&pf(h),qs(s,i.child,null,l),i=jf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function Xb(i,s,l,h,p,v,S){if(l)return s.flags&256?(s.flags&=-257,h=Lf(Error(n(422))),Pc(i,s,S,h)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(v=h.fallback,p=s.mode,h=jc({mode:"visible",children:h.children},p,0,null),v=Ho(v,p,S,null),v.flags|=2,h.return=s,v.return=s,h.sibling=v,s.child=h,(s.mode&1)!==0&&qs(s,i.child,null,S),s.child.memoizedState=Uf(S),s.memoizedState=Bf,v);if((s.mode&1)===0)return Pc(i,s,S,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var k=h.dgst;return h=k,v=Error(n(419)),h=Lf(v,h,void 0),Pc(i,s,S,h)}if(k=(S&i.childLanes)!==0,vn||k){if(h=Mt,h!==null){switch(S&-S){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|S))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,ii(i,p),gr(h,i,p,-1))}return rp(),h=Lf(Error(n(421))),Pc(i,s,S,h)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=c1.bind(null,i),p._reactRetry=s,null):(i=v.treeContext,Rn=xi(p.nextSibling),Pn=s,dt=!0,hr=null,i!==null&&(zn[Wn++]=ni,zn[Wn++]=ri,zn[Wn++]=Mo,ni=i.id,ri=i.overflow,Mo=s),s=jf(s,h.children),s.flags|=4096,s)}function Fy(i,s,l){i.lanes|=s;var h=i.alternate;h!==null&&(h.lanes|=s),yf(i.return,s,l)}function $f(i,s,l,h,p){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function By(i,s,l){var h=s.pendingProps,p=h.revealOrder,v=h.tail;if(cn(i,s,h.children,l),h=ht.current,(h&2)!==0)h=h&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Fy(i,l,s);else if(i.tag===19)Fy(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(ot(ht,h),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&Ec(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),$f(s,!1,p,l,v);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Ec(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}$f(s,!0,l,null,v);break;case"together":$f(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Rc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function si(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),jo|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(n(153));if(s.child!==null){for(i=s.child,l=ji(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=ji(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function Jb(i,s,l){switch(s.tag){case 3:Ly(s),Gs();break;case 5:Zv(s);break;case 1:gn(s.type)&&dc(s);break;case 4:Ef(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,p=s.memoizedProps.value;ot(vc,h._currentValue),h._currentValue=p;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(ot(ht,ht.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Vy(i,s,l):(ot(ht,ht.current&1),i=si(i,s,l),i!==null?i.sibling:null);ot(ht,ht.current&1);break;case 19:if(h=(l&s.childLanes)!==0,(i.flags&128)!==0){if(h)return By(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ot(ht,ht.current),h)break;return null;case 22:case 23:return s.lanes=0,Dy(i,s,l)}return si(i,s,l)}var Uy,zf,jy,$y;Uy=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},zf=function(){},jy=function(i,s,l,h){var p=i.memoizedProps;if(p!==h){i=s.stateNode,Bo(xr.current);var v=null;switch(l){case"input":p=Vn(i,p),h=Vn(i,h),v=[];break;case"select":p=ae({},p,{value:void 0}),h=ae({},h,{value:void 0}),v=[];break;case"textarea":p=Ua(i,p),h=Ua(i,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=lc)}Ga(l,h);var S;l=null;for(K in p)if(!h.hasOwnProperty(K)&&p.hasOwnProperty(K)&&p[K]!=null)if(K==="style"){var k=p[K];for(S in k)k.hasOwnProperty(S)&&(l||(l={}),l[S]="")}else K!=="dangerouslySetInnerHTML"&&K!=="children"&&K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&K!=="autoFocus"&&(o.hasOwnProperty(K)?v||(v=[]):(v=v||[]).push(K,null));for(K in h){var M=h[K];if(k=p!=null?p[K]:void 0,h.hasOwnProperty(K)&&M!==k&&(M!=null||k!=null))if(K==="style")if(k){for(S in k)!k.hasOwnProperty(S)||M&&M.hasOwnProperty(S)||(l||(l={}),l[S]="");for(S in M)M.hasOwnProperty(S)&&k[S]!==M[S]&&(l||(l={}),l[S]=M[S])}else l||(v||(v=[]),v.push(K,l)),l=M;else K==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,k=k?k.__html:void 0,M!=null&&k!==M&&(v=v||[]).push(K,M)):K==="children"?typeof M!="string"&&typeof M!="number"||(v=v||[]).push(K,""+M):K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&(o.hasOwnProperty(K)?(M!=null&&K==="onScroll"&&st("scroll",i),v||k===M||(v=[])):(v=v||[]).push(K,M))}l&&(v=v||[]).push("style",l);var K=v;(s.updateQueue=K)&&(s.flags|=4)}},$y=function(i,s,l,h){l!==h&&(s.flags|=4)};function Cl(i,s){if(!dt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function en(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,s}function Zb(i,s,l){var h=s.pendingProps;switch(df(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(s),null;case 1:return gn(s.type)&&cc(),en(s),null;case 3:return h=s.stateNode,Ys(),at(mn),at(Jt),Tf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(mc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,hr!==null&&(ep(hr),hr=null))),zf(i,s),en(s),null;case 5:If(s);var p=Bo(El.current);if(l=s.type,i!==null&&s.stateNode!=null)jy(i,s,l,h,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(n(166));return en(s),null}if(i=Bo(xr.current),mc(s)){h=s.stateNode,l=s.type;var v=s.memoizedProps;switch(h[Rr]=s,h[gl]=v,i=(s.mode&1)!==0,l){case"dialog":st("cancel",h),st("close",h);break;case"iframe":case"object":case"embed":st("load",h);break;case"video":case"audio":for(p=0;p<fl.length;p++)st(fl[p],h);break;case"source":st("error",h);break;case"img":case"image":case"link":st("error",h),st("load",h);break;case"details":st("toggle",h);break;case"input":zr(h,v),st("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},st("invalid",h);break;case"textarea":fs(h,v),st("invalid",h)}Ga(l,v),p=null;for(var S in v)if(v.hasOwnProperty(S)){var k=v[S];S==="children"?typeof k=="string"?h.textContent!==k&&(v.suppressHydrationWarning!==!0&&ac(h.textContent,k,i),p=["children",k]):typeof k=="number"&&h.textContent!==""+k&&(v.suppressHydrationWarning!==!0&&ac(h.textContent,k,i),p=["children",""+k]):o.hasOwnProperty(S)&&k!=null&&S==="onScroll"&&st("scroll",h)}switch(l){case"input":Dt(h),hs(h,v,!0);break;case"textarea":Dt(h),ja(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=lc)}h=p,s.updateQueue=h,h!==null&&(s.flags|=4)}else{S=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=bt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=S.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=S.createElement(l,{is:h.is}):(i=S.createElement(l),l==="select"&&(S=i,h.multiple?S.multiple=!0:h.size&&(S.size=h.size))):i=S.createElementNS(i,l),i[Rr]=s,i[gl]=h,Uy(i,s,!1,!1),s.stateNode=i;e:{switch(S=qa(l,h),l){case"dialog":st("cancel",i),st("close",i),p=h;break;case"iframe":case"object":case"embed":st("load",i),p=h;break;case"video":case"audio":for(p=0;p<fl.length;p++)st(fl[p],i);p=h;break;case"source":st("error",i),p=h;break;case"img":case"image":case"link":st("error",i),st("load",i),p=h;break;case"details":st("toggle",i),p=h;break;case"input":zr(i,h),p=Vn(i,h),st("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ae({},h,{value:void 0}),st("invalid",i);break;case"textarea":fs(i,h),p=Ua(i,h),st("invalid",i);break;default:p=h}Ga(l,p),k=p;for(v in k)if(k.hasOwnProperty(v)){var M=k[v];v==="style"?Wa(i,M):v==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&$a(i,M)):v==="children"?typeof M=="string"?(l!=="textarea"||M!=="")&&_i(i,M):typeof M=="number"&&_i(i,""+M):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?M!=null&&v==="onScroll"&&st("scroll",i):M!=null&&B(i,v,M,S))}switch(l){case"input":Dt(i),hs(i,h,!1);break;case"textarea":Dt(i),ja(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ne(h.value));break;case"select":i.multiple=!!h.multiple,v=h.value,v!=null?Gr(i,!!h.multiple,v,!1):h.defaultValue!=null&&Gr(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=lc)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return en(s),null;case 6:if(i&&s.stateNode!=null)$y(i,s,i.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(n(166));if(l=Bo(El.current),Bo(xr.current),mc(s)){if(h=s.stateNode,l=s.memoizedProps,h[Rr]=s,(v=h.nodeValue!==l)&&(i=Pn,i!==null))switch(i.tag){case 3:ac(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&ac(h.nodeValue,l,(i.mode&1)!==0)}v&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Rr]=s,s.stateNode=h}return en(s),null;case 13:if(at(ht),h=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(dt&&Rn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Hv(),Gs(),s.flags|=98560,v=!1;else if(v=mc(s),h!==null&&h.dehydrated!==null){if(i===null){if(!v)throw Error(n(318));if(v=s.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(n(317));v[Rr]=s}else Gs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;en(s),v=!1}else hr!==null&&(ep(hr),hr=null),v=!0;if(!v)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(ht.current&1)!==0?Rt===0&&(Rt=3):rp())),s.updateQueue!==null&&(s.flags|=4),en(s),null);case 4:return Ys(),zf(i,s),i===null&&pl(s.stateNode.containerInfo),en(s),null;case 10:return vf(s.type._context),en(s),null;case 17:return gn(s.type)&&cc(),en(s),null;case 19:if(at(ht),v=s.memoizedState,v===null)return en(s),null;if(h=(s.flags&128)!==0,S=v.rendering,S===null)if(h)Cl(v,!1);else{if(Rt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(S=Ec(i),S!==null){for(s.flags|=128,Cl(v,!1),h=S.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)v=l,i=h,v.flags&=14680066,S=v.alternate,S===null?(v.childLanes=0,v.lanes=i,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=S.childLanes,v.lanes=S.lanes,v.child=S.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=S.memoizedProps,v.memoizedState=S.memoizedState,v.updateQueue=S.updateQueue,v.type=S.type,i=S.dependencies,v.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ot(ht,ht.current&1|2),s.child}i=i.sibling}v.tail!==null&&it()>ea&&(s.flags|=128,h=!0,Cl(v,!1),s.lanes=4194304)}else{if(!h)if(i=Ec(S),i!==null){if(s.flags|=128,h=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Cl(v,!0),v.tail===null&&v.tailMode==="hidden"&&!S.alternate&&!dt)return en(s),null}else 2*it()-v.renderingStartTime>ea&&l!==1073741824&&(s.flags|=128,h=!0,Cl(v,!1),s.lanes=4194304);v.isBackwards?(S.sibling=s.child,s.child=S):(l=v.last,l!==null?l.sibling=S:s.child=S,v.last=S)}return v.tail!==null?(s=v.tail,v.rendering=s,v.tail=s.sibling,v.renderingStartTime=it(),s.sibling=null,l=ht.current,ot(ht,h?l&1|2:l&1),s):(en(s),null);case 22:case 23:return np(),h=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(s.flags|=8192),h&&(s.mode&1)!==0?(xn&1073741824)!==0&&(en(s),s.subtreeFlags&6&&(s.flags|=8192)):en(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function e1(i,s){switch(df(s),s.tag){case 1:return gn(s.type)&&cc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Ys(),at(mn),at(Jt),Tf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return If(s),null;case 13:if(at(ht),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(n(340));Gs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return at(ht),null;case 4:return Ys(),null;case 10:return vf(s.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var xc=!1,tn=!1,t1=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Js(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){gt(i,s,h)}else l.current=null}function Wf(i,s,l){try{l()}catch(h){gt(i,s,h)}}var zy=!1;function n1(i,s){if(tf=Ai,i=Ev(),qh(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var S=0,k=-1,M=-1,K=0,te=0,re=i,Z=null;t:for(;;){for(var de;re!==l||p!==0&&re.nodeType!==3||(k=S+p),re!==v||h!==0&&re.nodeType!==3||(M=S+h),re.nodeType===3&&(S+=re.nodeValue.length),(de=re.firstChild)!==null;)Z=re,re=de;for(;;){if(re===i)break t;if(Z===l&&++K===p&&(k=S),Z===v&&++te===h&&(M=S),(de=re.nextSibling)!==null)break;re=Z,Z=re.parentNode}re=de}l=k===-1||M===-1?null:{start:k,end:M}}else l=null}l=l||{start:0,end:0}}else l=null;for(nf={focusedElem:i,selectionRange:l},Ai=!1,fe=s;fe!==null;)if(s=fe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,fe=i;else for(;fe!==null;){s=fe;try{var me=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ge=me.memoizedProps,yt=me.memoizedState,G=s.stateNode,F=G.getSnapshotBeforeUpdate(s.elementType===s.type?ge:fr(s.type,ge),yt);G.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var q=s.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(se){gt(s,s.return,se)}if(i=s.sibling,i!==null){i.return=s.return,fe=i;break}fe=s.return}return me=zy,zy=!1,me}function Al(i,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var v=p.destroy;p.destroy=void 0,v!==void 0&&Wf(s,l,v)}p=p.next}while(p!==h)}}function kc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function Hf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Wy(i){var s=i.alternate;s!==null&&(i.alternate=null,Wy(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Rr],delete s[gl],delete s[af],delete s[Fb],delete s[Bb])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Hy(i){return i.tag===5||i.tag===3||i.tag===4}function Gy(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Hy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Gf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=lc));else if(h!==4&&(i=i.child,i!==null))for(Gf(i,s,l),i=i.sibling;i!==null;)Gf(i,s,l),i=i.sibling}function qf(i,s,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(qf(i,s,l),i=i.sibling;i!==null;)qf(i,s,l),i=i.sibling}var Gt=null,pr=!1;function Mi(i,s,l){for(l=l.child;l!==null;)qy(i,s,l),l=l.sibling}function qy(i,s,l){if(Tn&&typeof Tn.onCommitFiberUnmount=="function")try{Tn.onCommitFiberUnmount(Ao,l)}catch{}switch(l.tag){case 5:tn||Js(l,s);case 6:var h=Gt,p=pr;Gt=null,Mi(i,s,l),Gt=h,pr=p,Gt!==null&&(pr?(i=Gt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Gt.removeChild(l.stateNode));break;case 18:Gt!==null&&(pr?(i=Gt,l=l.stateNode,i.nodeType===8?sf(i.parentNode,l):i.nodeType===1&&sf(i,l),ur(i)):sf(Gt,l.stateNode));break;case 4:h=Gt,p=pr,Gt=l.stateNode.containerInfo,pr=!0,Mi(i,s,l),Gt=h,pr=p;break;case 0:case 11:case 14:case 15:if(!tn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,S=v.destroy;v=v.tag,S!==void 0&&((v&2)!==0||(v&4)!==0)&&Wf(l,s,S),p=p.next}while(p!==h)}Mi(i,s,l);break;case 1:if(!tn&&(Js(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(k){gt(l,s,k)}Mi(i,s,l);break;case 21:Mi(i,s,l);break;case 22:l.mode&1?(tn=(h=tn)||l.memoizedState!==null,Mi(i,s,l),tn=h):Mi(i,s,l);break;default:Mi(i,s,l)}}function Ky(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new t1),s.forEach(function(h){var p=d1.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function mr(i,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=i,S=s,k=S;e:for(;k!==null;){switch(k.tag){case 5:Gt=k.stateNode,pr=!1;break e;case 3:Gt=k.stateNode.containerInfo,pr=!0;break e;case 4:Gt=k.stateNode.containerInfo,pr=!0;break e}k=k.return}if(Gt===null)throw Error(n(160));qy(v,S,p),Gt=null,pr=!1;var M=p.alternate;M!==null&&(M.return=null),p.return=null}catch(K){gt(p,s,K)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Qy(s,i),s=s.sibling}function Qy(i,s){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(mr(s,i),Dr(i),h&4){try{Al(3,i,i.return),kc(3,i)}catch(ge){gt(i,i.return,ge)}try{Al(5,i,i.return)}catch(ge){gt(i,i.return,ge)}}break;case 1:mr(s,i),Dr(i),h&512&&l!==null&&Js(l,l.return);break;case 5:if(mr(s,i),Dr(i),h&512&&l!==null&&Js(l,l.return),i.flags&32){var p=i.stateNode;try{_i(p,"")}catch(ge){gt(i,i.return,ge)}}if(h&4&&(p=i.stateNode,p!=null)){var v=i.memoizedProps,S=l!==null?l.memoizedProps:v,k=i.type,M=i.updateQueue;if(i.updateQueue=null,M!==null)try{k==="input"&&v.type==="radio"&&v.name!=null&&Wr(p,v),qa(k,S);var K=qa(k,v);for(S=0;S<M.length;S+=2){var te=M[S],re=M[S+1];te==="style"?Wa(p,re):te==="dangerouslySetInnerHTML"?$a(p,re):te==="children"?_i(p,re):B(p,te,re,K)}switch(k){case"input":Hr(p,v);break;case"textarea":ps(p,v);break;case"select":var Z=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var de=v.value;de!=null?Gr(p,!!v.multiple,de,!1):Z!==!!v.multiple&&(v.defaultValue!=null?Gr(p,!!v.multiple,v.defaultValue,!0):Gr(p,!!v.multiple,v.multiple?[]:"",!1))}p[gl]=v}catch(ge){gt(i,i.return,ge)}}break;case 6:if(mr(s,i),Dr(i),h&4){if(i.stateNode===null)throw Error(n(162));p=i.stateNode,v=i.memoizedProps;try{p.nodeValue=v}catch(ge){gt(i,i.return,ge)}}break;case 3:if(mr(s,i),Dr(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{ur(s.containerInfo)}catch(ge){gt(i,i.return,ge)}break;case 4:mr(s,i),Dr(i);break;case 13:mr(s,i),Dr(i),p=i.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Yf=it())),h&4&&Ky(i);break;case 22:if(te=l!==null&&l.memoizedState!==null,i.mode&1?(tn=(K=tn)||te,mr(s,i),tn=K):mr(s,i),Dr(i),h&8192){if(K=i.memoizedState!==null,(i.stateNode.isHidden=K)&&!te&&(i.mode&1)!==0)for(fe=i,te=i.child;te!==null;){for(re=fe=te;fe!==null;){switch(Z=fe,de=Z.child,Z.tag){case 0:case 11:case 14:case 15:Al(4,Z,Z.return);break;case 1:Js(Z,Z.return);var me=Z.stateNode;if(typeof me.componentWillUnmount=="function"){h=Z,l=Z.return;try{s=h,me.props=s.memoizedProps,me.state=s.memoizedState,me.componentWillUnmount()}catch(ge){gt(h,l,ge)}}break;case 5:Js(Z,Z.return);break;case 22:if(Z.memoizedState!==null){Jy(re);continue}}de!==null?(de.return=Z,fe=de):Jy(re)}te=te.sibling}e:for(te=null,re=i;;){if(re.tag===5){if(te===null){te=re;try{p=re.stateNode,K?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(k=re.stateNode,M=re.memoizedProps.style,S=M!=null&&M.hasOwnProperty("display")?M.display:null,k.style.display=za("display",S))}catch(ge){gt(i,i.return,ge)}}}else if(re.tag===6){if(te===null)try{re.stateNode.nodeValue=K?"":re.memoizedProps}catch(ge){gt(i,i.return,ge)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===i)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===i)break e;for(;re.sibling===null;){if(re.return===null||re.return===i)break e;te===re&&(te=null),re=re.return}te===re&&(te=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:mr(s,i),Dr(i),h&4&&Ky(i);break;case 21:break;default:mr(s,i),Dr(i)}}function Dr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(Hy(l)){var h=l;break e}l=l.return}throw Error(n(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(_i(p,""),h.flags&=-33);var v=Gy(i);qf(i,v,p);break;case 3:case 4:var S=h.stateNode.containerInfo,k=Gy(i);Gf(i,k,S);break;default:throw Error(n(161))}}catch(M){gt(i,i.return,M)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function r1(i,s,l){fe=i,Yy(i)}function Yy(i,s,l){for(var h=(i.mode&1)!==0;fe!==null;){var p=fe,v=p.child;if(p.tag===22&&h){var S=p.memoizedState!==null||xc;if(!S){var k=p.alternate,M=k!==null&&k.memoizedState!==null||tn;k=xc;var K=tn;if(xc=S,(tn=M)&&!K)for(fe=p;fe!==null;)S=fe,M=S.child,S.tag===22&&S.memoizedState!==null?Zy(p):M!==null?(M.return=S,fe=M):Zy(p);for(;v!==null;)fe=v,Yy(v),v=v.sibling;fe=p,xc=k,tn=K}Xy(i)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,fe=v):Xy(i)}}function Xy(i){for(;fe!==null;){var s=fe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:tn||kc(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!tn)if(l===null)h.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:fr(s.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=s.updateQueue;v!==null&&Jv(s,v,h);break;case 3:var S=s.updateQueue;if(S!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Jv(s,S,l)}break;case 5:var k=s.stateNode;if(l===null&&s.flags&4){l=k;var M=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&l.focus();break;case"img":M.src&&(l.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var K=s.alternate;if(K!==null){var te=K.memoizedState;if(te!==null){var re=te.dehydrated;re!==null&&ur(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}tn||s.flags&512&&Hf(s)}catch(Z){gt(s,s.return,Z)}}if(s===i){fe=null;break}if(l=s.sibling,l!==null){l.return=s.return,fe=l;break}fe=s.return}}function Jy(i){for(;fe!==null;){var s=fe;if(s===i){fe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,fe=l;break}fe=s.return}}function Zy(i){for(;fe!==null;){var s=fe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{kc(4,s)}catch(M){gt(s,l,M)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var p=s.return;try{h.componentDidMount()}catch(M){gt(s,p,M)}}var v=s.return;try{Hf(s)}catch(M){gt(s,v,M)}break;case 5:var S=s.return;try{Hf(s)}catch(M){gt(s,S,M)}}}catch(M){gt(s,s.return,M)}if(s===i){fe=null;break}var k=s.sibling;if(k!==null){k.return=s.return,fe=k;break}fe=s.return}}var i1=Math.ceil,Dc=$.ReactCurrentDispatcher,Kf=$.ReactCurrentOwner,qn=$.ReactCurrentBatchConfig,Ge=0,Mt=null,Et=null,qt=0,xn=0,Zs=ki(0),Rt=0,Pl=null,jo=0,Nc=0,Qf=0,Rl=null,yn=null,Yf=0,ea=1/0,ai=null,Oc=!1,Xf=null,Vi=null,Lc=!1,Fi=null,Mc=0,xl=0,Jf=null,Vc=-1,Fc=0;function dn(){return(Ge&6)!==0?it():Vc!==-1?Vc:Vc=it()}function Bi(i){return(i.mode&1)===0?1:(Ge&2)!==0&&qt!==0?qt&-qt:jb.transition!==null?(Fc===0&&(Fc=Ro()),Fc):(i=ze,i!==0||(i=window.event,i=i===void 0?16:il(i.type)),i)}function gr(i,s,l,h){if(50<xl)throw xl=0,Jf=null,Error(n(185));Si(i,l,h),((Ge&2)===0||i!==Mt)&&(i===Mt&&((Ge&2)===0&&(Nc|=l),Rt===4&&Ui(i,qt)),_n(i,h),l===1&&Ge===0&&(s.mode&1)===0&&(ea=it()+500,hc&&Ni()))}function _n(i,s){var l=i.callbackNode;Qr(i,s);var h=Po(i,i===Mt?qt:0);if(h===0)l!==null&&Za(l),i.callbackNode=null,i.callbackPriority=0;else if(s=h&-h,i.callbackPriority!==s){if(l!=null&&Za(l),s===1)i.tag===0?Ub(t_.bind(null,i)):Uv(t_.bind(null,i)),Mb(function(){(Ge&6)===0&&Ni()}),l=null;else{switch(bi(h)){case 1:l=Co;break;case 4:l=wi;break;case 16:l=Un;break;case 536870912:l=Fu;break;default:l=Un}l=u_(l,e_.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function e_(i,s){if(Vc=-1,Fc=0,(Ge&6)!==0)throw Error(n(327));var l=i.callbackNode;if(ta()&&i.callbackNode!==l)return null;var h=Po(i,i===Mt?qt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||s)s=Bc(i,h);else{s=h;var p=Ge;Ge|=2;var v=r_();(Mt!==i||qt!==s)&&(ai=null,ea=it()+500,zo(i,s));do try{a1();break}catch(k){n_(i,k)}while(!0);gf(),Dc.current=v,Ge=p,Et!==null?s=0:(Mt=null,qt=0,s=Rt)}if(s!==0){if(s===2&&(p=bn(i),p!==0&&(h=p,s=Zf(i,p))),s===1)throw l=Pl,zo(i,0),Ui(i,h),_n(i,it()),l;if(s===6)Ui(i,h);else{if(p=i.current.alternate,(h&30)===0&&!o1(p)&&(s=Bc(i,h),s===2&&(v=bn(i),v!==0&&(h=v,s=Zf(i,v))),s===1))throw l=Pl,zo(i,0),Ui(i,h),_n(i,it()),l;switch(i.finishedWork=p,i.finishedLanes=h,s){case 0:case 1:throw Error(n(345));case 2:Wo(i,yn,ai);break;case 3:if(Ui(i,h),(h&130023424)===h&&(s=Yf+500-it(),10<s)){if(Po(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){dn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=of(Wo.bind(null,i,yn,ai),s);break}Wo(i,yn,ai);break;case 4:if(Ui(i,h),(h&4194240)===h)break;for(s=i.eventTimes,p=-1;0<h;){var S=31-ln(h);v=1<<S,S=s[S],S>p&&(p=S),h&=~v}if(h=p,h=it()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*i1(h/1960))-h,10<h){i.timeoutHandle=of(Wo.bind(null,i,yn,ai),h);break}Wo(i,yn,ai);break;case 5:Wo(i,yn,ai);break;default:throw Error(n(329))}}}return _n(i,it()),i.callbackNode===l?e_.bind(null,i):null}function Zf(i,s){var l=Rl;return i.current.memoizedState.isDehydrated&&(zo(i,s).flags|=256),i=Bc(i,s),i!==2&&(s=yn,yn=l,s!==null&&ep(s)),i}function ep(i){yn===null?yn=i:yn.push.apply(yn,i)}function o1(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!dr(v(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ui(i,s){for(s&=~Qf,s&=~Nc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-ln(s),h=1<<l;i[l]=-1,s&=~h}}function t_(i){if((Ge&6)!==0)throw Error(n(327));ta();var s=Po(i,0);if((s&1)===0)return _n(i,it()),null;var l=Bc(i,s);if(i.tag!==0&&l===2){var h=bn(i);h!==0&&(s=h,l=Zf(i,h))}if(l===1)throw l=Pl,zo(i,0),Ui(i,s),_n(i,it()),l;if(l===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Wo(i,yn,ai),_n(i,it()),null}function tp(i,s){var l=Ge;Ge|=1;try{return i(s)}finally{Ge=l,Ge===0&&(ea=it()+500,hc&&Ni())}}function $o(i){Fi!==null&&Fi.tag===0&&(Ge&6)===0&&ta();var s=Ge;Ge|=1;var l=qn.transition,h=ze;try{if(qn.transition=null,ze=1,i)return i()}finally{ze=h,qn.transition=l,Ge=s,(Ge&6)===0&&Ni()}}function np(){xn=Zs.current,at(Zs)}function zo(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Lb(l)),Et!==null)for(l=Et.return;l!==null;){var h=l;switch(df(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&cc();break;case 3:Ys(),at(mn),at(Jt),Tf();break;case 5:If(h);break;case 4:Ys();break;case 13:at(ht);break;case 19:at(ht);break;case 10:vf(h.type._context);break;case 22:case 23:np()}l=l.return}if(Mt=i,Et=i=ji(i.current,null),qt=xn=s,Rt=0,Pl=null,Qf=Nc=jo=0,yn=Rl=null,Fo!==null){for(s=0;s<Fo.length;s++)if(l=Fo[s],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var S=v.next;v.next=p,h.next=S}l.pending=h}Fo=null}return i}function n_(i,s){do{var l=Et;try{if(gf(),Ic.current=Cc,Sc){for(var h=ft.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}Sc=!1}if(Uo=0,Lt=Pt=ft=null,Il=!1,Sl=0,Kf.current=null,l===null||l.return===null){Rt=1,Pl=s,Et=null;break}e:{var v=i,S=l.return,k=l,M=s;if(s=qt,k.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var K=M,te=k,re=te.tag;if((te.mode&1)===0&&(re===0||re===11||re===15)){var Z=te.alternate;Z?(te.updateQueue=Z.updateQueue,te.memoizedState=Z.memoizedState,te.lanes=Z.lanes):(te.updateQueue=null,te.memoizedState=null)}var de=Ay(S);if(de!==null){de.flags&=-257,Py(de,S,k,v,s),de.mode&1&&Cy(v,K,s),s=de,M=K;var me=s.updateQueue;if(me===null){var ge=new Set;ge.add(M),s.updateQueue=ge}else me.add(M);break e}else{if((s&1)===0){Cy(v,K,s),rp();break e}M=Error(n(426))}}else if(dt&&k.mode&1){var yt=Ay(S);if(yt!==null){(yt.flags&65536)===0&&(yt.flags|=256),Py(yt,S,k,v,s),pf(Xs(M,k));break e}}v=M=Xs(M,k),Rt!==4&&(Rt=2),Rl===null?Rl=[v]:Rl.push(v),v=S;do{switch(v.tag){case 3:v.flags|=65536,s&=-s,v.lanes|=s;var G=Ty(v,M,s);Xv(v,G);break e;case 1:k=M;var F=v.type,q=v.stateNode;if((v.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Vi===null||!Vi.has(q)))){v.flags|=65536,s&=-s,v.lanes|=s;var se=by(v,k,s);Xv(v,se);break e}}v=v.return}while(v!==null)}o_(l)}catch(ve){s=ve,Et===l&&l!==null&&(Et=l=l.return);continue}break}while(!0)}function r_(){var i=Dc.current;return Dc.current=Cc,i===null?Cc:i}function rp(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Mt===null||(jo&268435455)===0&&(Nc&268435455)===0||Ui(Mt,qt)}function Bc(i,s){var l=Ge;Ge|=2;var h=r_();(Mt!==i||qt!==s)&&(ai=null,zo(i,s));do try{s1();break}catch(p){n_(i,p)}while(!0);if(gf(),Ge=l,Dc.current=h,Et!==null)throw Error(n(261));return Mt=null,qt=0,Rt}function s1(){for(;Et!==null;)i_(Et)}function a1(){for(;Et!==null&&!Mu();)i_(Et)}function i_(i){var s=l_(i.alternate,i,xn);i.memoizedProps=i.pendingProps,s===null?o_(i):Et=s,Kf.current=null}function o_(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=Zb(l,s,xn),l!==null){Et=l;return}}else{if(l=e1(l,s),l!==null){l.flags&=32767,Et=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Rt=6,Et=null;return}}if(s=s.sibling,s!==null){Et=s;return}Et=s=i}while(s!==null);Rt===0&&(Rt=5)}function Wo(i,s,l){var h=ze,p=qn.transition;try{qn.transition=null,ze=1,l1(i,s,l,h)}finally{qn.transition=p,ze=h}return null}function l1(i,s,l,h){do ta();while(Fi!==null);if((Ge&6)!==0)throw Error(n(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var v=l.lanes|l.childLanes;if(rt(i,v),i===Mt&&(Et=Mt=null,qt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Lc||(Lc=!0,u_(Un,function(){return ta(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=qn.transition,qn.transition=null;var S=ze;ze=1;var k=Ge;Ge|=4,Kf.current=null,n1(i,l),Qy(l,i),Pb(nf),Ai=!!tf,nf=tf=null,i.current=l,r1(l),Bh(),Ge=k,ze=S,qn.transition=v}else i.current=l;if(Lc&&(Lc=!1,Fi=i,Mc=p),v=i.pendingLanes,v===0&&(Vi=null),Bu(l.stateNode),_n(i,it()),s!==null)for(h=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Oc)throw Oc=!1,i=Xf,Xf=null,i;return(Mc&1)!==0&&i.tag!==0&&ta(),v=i.pendingLanes,(v&1)!==0?i===Jf?xl++:(xl=0,Jf=i):xl=0,Ni(),null}function ta(){if(Fi!==null){var i=bi(Mc),s=qn.transition,l=ze;try{if(qn.transition=null,ze=16>i?16:i,Fi===null)var h=!1;else{if(i=Fi,Fi=null,Mc=0,(Ge&6)!==0)throw Error(n(331));var p=Ge;for(Ge|=4,fe=i.current;fe!==null;){var v=fe,S=v.child;if((fe.flags&16)!==0){var k=v.deletions;if(k!==null){for(var M=0;M<k.length;M++){var K=k[M];for(fe=K;fe!==null;){var te=fe;switch(te.tag){case 0:case 11:case 15:Al(8,te,v)}var re=te.child;if(re!==null)re.return=te,fe=re;else for(;fe!==null;){te=fe;var Z=te.sibling,de=te.return;if(Wy(te),te===K){fe=null;break}if(Z!==null){Z.return=de,fe=Z;break}fe=de}}}var me=v.alternate;if(me!==null){var ge=me.child;if(ge!==null){me.child=null;do{var yt=ge.sibling;ge.sibling=null,ge=yt}while(ge!==null)}}fe=v}}if((v.subtreeFlags&2064)!==0&&S!==null)S.return=v,fe=S;else e:for(;fe!==null;){if(v=fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Al(9,v,v.return)}var G=v.sibling;if(G!==null){G.return=v.return,fe=G;break e}fe=v.return}}var F=i.current;for(fe=F;fe!==null;){S=fe;var q=S.child;if((S.subtreeFlags&2064)!==0&&q!==null)q.return=S,fe=q;else e:for(S=F;fe!==null;){if(k=fe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:kc(9,k)}}catch(ve){gt(k,k.return,ve)}if(k===S){fe=null;break e}var se=k.sibling;if(se!==null){se.return=k.return,fe=se;break e}fe=k.return}}if(Ge=p,Ni(),Tn&&typeof Tn.onPostCommitFiberRoot=="function")try{Tn.onPostCommitFiberRoot(Ao,i)}catch{}h=!0}return h}finally{ze=l,qn.transition=s}}return!1}function s_(i,s,l){s=Xs(l,s),s=Ty(i,s,1),i=Li(i,s,1),s=dn(),i!==null&&(Si(i,1,s),_n(i,s))}function gt(i,s,l){if(i.tag===3)s_(i,i,l);else for(;s!==null;){if(s.tag===3){s_(s,i,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Vi===null||!Vi.has(h))){i=Xs(l,i),i=by(s,i,1),s=Li(s,i,1),i=dn(),s!==null&&(Si(s,1,i),_n(s,i));break}}s=s.return}}function u1(i,s,l){var h=i.pingCache;h!==null&&h.delete(s),s=dn(),i.pingedLanes|=i.suspendedLanes&l,Mt===i&&(qt&l)===l&&(Rt===4||Rt===3&&(qt&130023424)===qt&&500>it()-Yf?zo(i,0):Qf|=l),_n(i,s)}function a_(i,s){s===0&&((i.mode&1)===0?s=1:(s=Ts,Ts<<=1,(Ts&130023424)===0&&(Ts=4194304)));var l=dn();i=ii(i,s),i!==null&&(Si(i,s,l),_n(i,l))}function c1(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),a_(i,l)}function d1(i,s){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(n(314))}h!==null&&h.delete(s),a_(i,l)}var l_;l_=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||mn.current)vn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return vn=!1,Jb(i,s,l);vn=(i.flags&131072)!==0}else vn=!1,dt&&(s.flags&1048576)!==0&&jv(s,pc,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Rc(i,s),i=s.pendingProps;var p=zs(s,Jt.current);Qs(s,l),p=Af(null,s,h,i,p,l);var v=Pf();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,gn(h)?(v=!0,dc(s)):v=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,wf(s),p.updater=Ac,s.stateNode=p,p._reactInternals=s,Of(s,h,i,l),s=Ff(null,s,h,!0,v,l)):(s.tag=0,dt&&v&&cf(s),cn(null,s,p,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Rc(i,s),i=s.pendingProps,p=h._init,h=p(h._payload),s.type=h,p=s.tag=f1(h),i=fr(h,i),p){case 0:s=Vf(null,s,h,i,l);break e;case 1:s=Oy(null,s,h,i,l);break e;case 11:s=Ry(null,s,h,i,l);break e;case 14:s=xy(null,s,h,fr(h.type,i),l);break e}throw Error(n(306,h,""))}return s;case 0:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:fr(h,p),Vf(i,s,h,p,l);case 1:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:fr(h,p),Oy(i,s,h,p,l);case 3:e:{if(Ly(s),i===null)throw Error(n(387));h=s.pendingProps,v=s.memoizedState,p=v.element,Yv(i,s),wc(s,h,null,l);var S=s.memoizedState;if(h=S.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},s.updateQueue.baseState=v,s.memoizedState=v,s.flags&256){p=Xs(Error(n(423)),s),s=My(i,s,h,l,p);break e}else if(h!==p){p=Xs(Error(n(424)),s),s=My(i,s,h,l,p);break e}else for(Rn=xi(s.stateNode.containerInfo.firstChild),Pn=s,dt=!0,hr=null,l=Kv(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Gs(),h===p){s=si(i,s,l);break e}cn(i,s,h,l)}s=s.child}return s;case 5:return Zv(s),i===null&&ff(s),h=s.type,p=s.pendingProps,v=i!==null?i.memoizedProps:null,S=p.children,rf(h,p)?S=null:v!==null&&rf(h,v)&&(s.flags|=32),Ny(i,s),cn(i,s,S,l),s.child;case 6:return i===null&&ff(s),null;case 13:return Vy(i,s,l);case 4:return Ef(s,s.stateNode.containerInfo),h=s.pendingProps,i===null?s.child=qs(s,null,h,l):cn(i,s,h,l),s.child;case 11:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:fr(h,p),Ry(i,s,h,p,l);case 7:return cn(i,s,s.pendingProps,l),s.child;case 8:return cn(i,s,s.pendingProps.children,l),s.child;case 12:return cn(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,p=s.pendingProps,v=s.memoizedProps,S=p.value,ot(vc,h._currentValue),h._currentValue=S,v!==null)if(dr(v.value,S)){if(v.children===p.children&&!mn.current){s=si(i,s,l);break e}}else for(v=s.child,v!==null&&(v.return=s);v!==null;){var k=v.dependencies;if(k!==null){S=v.child;for(var M=k.firstContext;M!==null;){if(M.context===h){if(v.tag===1){M=oi(-1,l&-l),M.tag=2;var K=v.updateQueue;if(K!==null){K=K.shared;var te=K.pending;te===null?M.next=M:(M.next=te.next,te.next=M),K.pending=M}}v.lanes|=l,M=v.alternate,M!==null&&(M.lanes|=l),yf(v.return,l,s),k.lanes|=l;break}M=M.next}}else if(v.tag===10)S=v.type===s.type?null:v.child;else if(v.tag===18){if(S=v.return,S===null)throw Error(n(341));S.lanes|=l,k=S.alternate,k!==null&&(k.lanes|=l),yf(S,l,s),S=v.sibling}else S=v.child;if(S!==null)S.return=v;else for(S=v;S!==null;){if(S===s){S=null;break}if(v=S.sibling,v!==null){v.return=S.return,S=v;break}S=S.return}v=S}cn(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,h=s.pendingProps.children,Qs(s,l),p=Hn(p),h=h(p),s.flags|=1,cn(i,s,h,l),s.child;case 14:return h=s.type,p=fr(h,s.pendingProps),p=fr(h.type,p),xy(i,s,h,p,l);case 15:return ky(i,s,s.type,s.pendingProps,l);case 17:return h=s.type,p=s.pendingProps,p=s.elementType===h?p:fr(h,p),Rc(i,s),s.tag=1,gn(h)?(i=!0,dc(s)):i=!1,Qs(s,l),Iy(s,h,p),Of(s,h,p,l),Ff(null,s,h,!0,i,l);case 19:return By(i,s,l);case 22:return Dy(i,s,l)}throw Error(n(156,s.tag))};function u_(i,s){return Is(i,s)}function h1(i,s,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(i,s,l,h){return new h1(i,s,l,h)}function ip(i){return i=i.prototype,!(!i||!i.isReactComponent)}function f1(i){if(typeof i=="function")return ip(i)?1:0;if(i!=null){if(i=i.$$typeof,i===j)return 11;if(i===Qe)return 14}return 2}function ji(i,s){var l=i.alternate;return l===null?(l=Kn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Uc(i,s,l,h,p,v){var S=2;if(h=i,typeof i=="function")ip(i)&&(S=1);else if(typeof i=="string")S=5;else e:switch(i){case P:return Ho(l.children,p,v,s);case A:S=8,p|=8;break;case R:return i=Kn(12,l,s,p|2),i.elementType=R,i.lanes=v,i;case C:return i=Kn(13,l,s,p),i.elementType=C,i.lanes=v,i;case be:return i=Kn(19,l,s,p),i.elementType=be,i.lanes=v,i;case Me:return jc(l,p,v,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:S=10;break e;case L:S=9;break e;case j:S=11;break e;case Qe:S=14;break e;case Ye:S=16,h=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return s=Kn(S,l,s,p),s.elementType=i,s.type=h,s.lanes=v,s}function Ho(i,s,l,h){return i=Kn(7,i,h,s),i.lanes=l,i}function jc(i,s,l,h){return i=Kn(22,i,h,s),i.elementType=Me,i.lanes=l,i.stateNode={isHidden:!1},i}function op(i,s,l){return i=Kn(6,i,null,s),i.lanes=l,i}function sp(i,s,l){return s=Kn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function p1(i,s,l,h,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ap(i,s,l,h,p,v,S,k,M){return i=new p1(i,s,l,k,M),s===1?(s=1,v===!0&&(s|=8)):s=0,v=Kn(3,null,null,s),i.current=v,v.stateNode=i,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},wf(v),i}function m1(i,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:h==null?null:""+h,children:i,containerInfo:s,implementation:l}}function c_(i){if(!i)return Di;i=i._reactInternals;e:{if(ir(i)!==i||i.tag!==1)throw Error(n(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(gn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(i.tag===1){var l=i.type;if(gn(l))return Fv(i,l,s)}return s}function d_(i,s,l,h,p,v,S,k,M){return i=ap(l,h,!0,i,p,v,S,k,M),i.context=c_(null),l=i.current,h=dn(),p=Bi(l),v=oi(h,p),v.callback=s??null,Li(l,v,p),i.current.lanes=p,Si(i,p,h),_n(i,h),i}function $c(i,s,l,h){var p=s.current,v=dn(),S=Bi(p);return l=c_(l),s.context===null?s.context=l:s.pendingContext=l,s=oi(v,S),s.payload={element:i},h=h===void 0?null:h,h!==null&&(s.callback=h),i=Li(p,s,S),i!==null&&(gr(i,p,S,v),_c(i,p,S)),S}function zc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function h_(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function lp(i,s){h_(i,s),(i=i.alternate)&&h_(i,s)}function g1(){return null}var f_=typeof reportError=="function"?reportError:function(i){console.error(i)};function up(i){this._internalRoot=i}Wc.prototype.render=up.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(n(409));$c(i,s,null,null)},Wc.prototype.unmount=up.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;$o(function(){$c(null,i,null,null)}),s[ei]=null}};function Wc(i){this._internalRoot=i}Wc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Wu();i={blockedOn:null,target:i,priority:s};for(var l=0;l<br.length&&s!==0&&s<br[l].priority;l++);br.splice(l,0,i),l===0&&qu(i)}};function cp(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Hc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function p_(){}function v1(i,s,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var K=zc(S);v.call(K)}}var S=d_(s,h,i,0,null,!1,!1,"",p_);return i._reactRootContainer=S,i[ei]=S.current,pl(i.nodeType===8?i.parentNode:i),$o(),S}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var k=h;h=function(){var K=zc(M);k.call(K)}}var M=ap(i,0,!1,null,null,!1,!1,"",p_);return i._reactRootContainer=M,i[ei]=M.current,pl(i.nodeType===8?i.parentNode:i),$o(function(){$c(s,M,l,h)}),M}function Gc(i,s,l,h,p){var v=l._reactRootContainer;if(v){var S=v;if(typeof p=="function"){var k=p;p=function(){var M=zc(S);k.call(M)}}$c(s,S,i,p)}else S=v1(l,s,i,p,h);return zc(S)}$u=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ei(s.pendingLanes);l!==0&&(Ti(s,l|1),_n(s,it()),(Ge&6)===0&&(ea=it()+500,Ni()))}break;case 13:$o(function(){var h=ii(i,1);if(h!==null){var p=dn();gr(h,i,1,p)}}),lp(i,1)}},bs=function(i){if(i.tag===13){var s=ii(i,134217728);if(s!==null){var l=dn();gr(s,i,134217728,l)}lp(i,134217728)}},zu=function(i){if(i.tag===13){var s=Bi(i),l=ii(i,s);if(l!==null){var h=dn();gr(l,i,s,h)}lp(i,s)}},Wu=function(){return ze},Hu=function(i,s){var l=ze;try{return ze=i,s()}finally{ze=l}},gs=function(i,s,l){switch(s){case"input":if(Hr(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==i&&h.form===i.form){var p=uc(h);if(!p)throw Error(n(90));Nt(h),Hr(h,p)}}}break;case"textarea":ps(i,l);break;case"select":s=l.value,s!=null&&Gr(i,!!l.multiple,s,!1)}},Io=tp,Qa=$o;var y1={usingClientEntryPoint:!1,Events:[vl,js,uc,Sr,Ka,tp]},kl={findFiberByHostInstance:Oo,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_1={bundleType:kl.bundleType,version:kl.version,rendererPackageName:kl.rendererPackageName,rendererConfig:kl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Ja(i),i===null?null:i.stateNode},findFiberByHostInstance:kl.findFiberByHostInstance||g1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qc.isDisabled&&qc.supportsFiber)try{Ao=qc.inject(_1),Tn=qc}catch{}}return wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1,wn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cp(s))throw Error(n(200));return m1(i,s,null,l)},wn.createRoot=function(i,s){if(!cp(i))throw Error(n(299));var l=!1,h="",p=f_;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=ap(i,1,!1,null,null,l,!1,h,p),i[ei]=s.current,pl(i.nodeType===8?i.parentNode:i),new up(s)},wn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=Ja(s),i=i===null?null:i.stateNode,i},wn.flushSync=function(i){return $o(i)},wn.hydrate=function(i,s,l){if(!Hc(s))throw Error(n(200));return Gc(null,i,s,!0,l)},wn.hydrateRoot=function(i,s,l){if(!cp(i))throw Error(n(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",S=f_;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(S=l.onRecoverableError)),s=d_(s,null,i,1,l??null,p,!1,v,S),i[ei]=s.current,pl(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Wc(s)},wn.render=function(i,s,l){if(!Hc(s))throw Error(n(200));return Gc(null,i,s,!1,l)},wn.unmountComponentAtNode=function(i){if(!Hc(i))throw Error(n(40));return i._reactRootContainer?($o(function(){Gc(null,null,i,!1,function(){i._reactRootContainer=null,i[ei]=null})}),!0):!1},wn.unstable_batchedUpdates=tp,wn.unstable_renderSubtreeIntoContainer=function(i,s,l,h){if(!Hc(l))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return Gc(i,s,l,!1,h)},wn.version="18.3.1-next-f1338f8080-20240426",wn}var I_;function fE(){if(I_)return fp.exports;I_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),fp.exports=C1(),fp.exports}var S_;function A1(){if(S_)return Kc;S_=1;var t=fE();return Kc.createRoot=t.createRoot,Kc.hydrateRoot=t.hydrateRoot,Kc}var P1=A1(),Ut=function(){return Ut=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ut.apply(this,arguments)};function Um(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function tu(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,a;r<o;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}var oe=Bm();const je=rh(oe);var lt="-ms-",Hl="-moz-",Je="-webkit-",pE="comm",ih="rule",jm="decl",R1="@import",mE="@keyframes",x1="@layer",gE=Math.abs,$m=String.fromCharCode,Jp=Object.assign;function k1(t,e){return Bt(t,0)^45?(((e<<2^Bt(t,0))<<2^Bt(t,1))<<2^Bt(t,2))<<2^Bt(t,3):0}function vE(t){return t.trim()}function li(t,e){return(t=e.exec(t))?t[0]:t}function Le(t,e,n){return t.replace(e,n)}function ad(t,e,n){return t.indexOf(e,n)}function Bt(t,e){return t.charCodeAt(e)|0}function ma(t,e,n){return t.slice(e,n)}function Or(t){return t.length}function yE(t){return t.length}function Fl(t,e){return e.push(t),t}function D1(t,e){return t.map(e).join("")}function T_(t,e){return t.filter(function(n){return!li(n,e)})}var oh=1,ga=1,_E=0,tr=0,St=0,Pa="";function sh(t,e,n,r,o,a,u,d){return{value:t,root:e,parent:n,type:r,props:o,children:a,line:oh,column:ga,length:u,return:"",siblings:d}}function Hi(t,e){return Jp(sh("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function na(t){for(;t.root;)t=Hi(t.root,{children:[t]});Fl(t,t.siblings)}function N1(){return St}function O1(){return St=tr>0?Bt(Pa,--tr):0,ga--,St===10&&(ga=1,oh--),St}function wr(){return St=tr<_E?Bt(Pa,tr++):0,ga++,St===10&&(ga=1,oh++),St}function Xo(){return Bt(Pa,tr)}function ld(){return tr}function ah(t,e){return ma(Pa,t,e)}function Zp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L1(t){return oh=ga=1,_E=Or(Pa=t),tr=0,[]}function M1(t){return Pa="",t}function gp(t){return vE(ah(tr-1,em(t===91?t+2:t===40?t+1:t)))}function V1(t){for(;(St=Xo())&&St<33;)wr();return Zp(t)>2||Zp(St)>3?"":" "}function F1(t,e){for(;--e&&wr()&&!(St<48||St>102||St>57&&St<65||St>70&&St<97););return ah(t,ld()+(e<6&&Xo()==32&&wr()==32))}function em(t){for(;wr();)switch(St){case t:return tr;case 34:case 39:t!==34&&t!==39&&em(St);break;case 40:t===41&&em(t);break;case 92:wr();break}return tr}function B1(t,e){for(;wr()&&t+St!==57;)if(t+St===84&&Xo()===47)break;return"/*"+ah(e,tr-1)+"*"+$m(t===47?t:wr())}function U1(t){for(;!Zp(Xo());)wr();return ah(t,tr)}function j1(t){return M1(ud("",null,null,null,[""],t=L1(t),0,[0],t))}function ud(t,e,n,r,o,a,u,d,f){for(var m=0,y=0,_=u,w=0,I=0,b=0,D=1,x=1,O=1,V=0,B="",$=o,W=a,Q=r,P=B;x;)switch(b=V,V=wr()){case 40:if(b!=108&&Bt(P,_-1)==58){ad(P+=Le(gp(V),"&","&\f"),"&\f",gE(m?d[m-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:P+=gp(V);break;case 9:case 10:case 13:case 32:P+=V1(b);break;case 92:P+=F1(ld()-1,7);continue;case 47:switch(Xo()){case 42:case 47:Fl($1(B1(wr(),ld()),e,n,f),f);break;default:P+="/"}break;case 123*D:d[m++]=Or(P)*O;case 125*D:case 59:case 0:switch(V){case 0:case 125:x=0;case 59+y:O==-1&&(P=Le(P,/\f/g,"")),I>0&&Or(P)-_&&Fl(I>32?C_(P+";",r,n,_-1,f):C_(Le(P," ","")+";",r,n,_-2,f),f);break;case 59:P+=";";default:if(Fl(Q=b_(P,e,n,m,y,o,d,B,$=[],W=[],_,a),a),V===123)if(y===0)ud(P,e,Q,Q,$,a,_,d,W);else switch(w===99&&Bt(P,3)===110?100:w){case 100:case 108:case 109:case 115:ud(t,Q,Q,r&&Fl(b_(t,Q,Q,0,0,o,d,B,o,$=[],_,W),W),o,W,_,d,r?$:W);break;default:ud(P,Q,Q,Q,[""],W,0,d,W)}}m=y=I=0,D=O=1,B=P="",_=u;break;case 58:_=1+Or(P),I=b;default:if(D<1){if(V==123)--D;else if(V==125&&D++==0&&O1()==125)continue}switch(P+=$m(V),V*D){case 38:O=y>0?1:(P+="\f",-1);break;case 44:d[m++]=(Or(P)-1)*O,O=1;break;case 64:Xo()===45&&(P+=gp(wr())),w=Xo(),y=_=Or(B=P+=U1(ld())),V++;break;case 45:b===45&&Or(P)==2&&(D=0)}}return a}function b_(t,e,n,r,o,a,u,d,f,m,y,_){for(var w=o-1,I=o===0?a:[""],b=yE(I),D=0,x=0,O=0;D<r;++D)for(var V=0,B=ma(t,w+1,w=gE(x=u[D])),$=t;V<b;++V)($=vE(x>0?I[V]+" "+B:Le(B,/&\f/g,I[V])))&&(f[O++]=$);return sh(t,e,n,o===0?ih:d,f,m,y,_)}function $1(t,e,n,r){return sh(t,e,n,pE,$m(N1()),ma(t,2,-2),0,r)}function C_(t,e,n,r,o){return sh(t,e,n,jm,ma(t,0,r),ma(t,r+1,-1),r,o)}function wE(t,e,n){switch(k1(t,e)){case 5103:return Je+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Je+t+t;case 4789:return Hl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Je+t+Hl+t+lt+t+t;case 5936:switch(Bt(t,e+11)){case 114:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Je+t+lt+t+t;case 6165:return Je+t+lt+"flex-"+t+t;case 5187:return Je+t+Le(t,/(\w+).+(:[^]+)/,Je+"box-$1$2"+lt+"flex-$1$2")+t;case 5443:return Je+t+lt+"flex-item-"+Le(t,/flex-|-self/g,"")+(li(t,/flex-|baseline/)?"":lt+"grid-row-"+Le(t,/flex-|-self/g,""))+t;case 4675:return Je+t+lt+"flex-line-pack"+Le(t,/align-content|flex-|-self/g,"")+t;case 5548:return Je+t+lt+Le(t,"shrink","negative")+t;case 5292:return Je+t+lt+Le(t,"basis","preferred-size")+t;case 6060:return Je+"box-"+Le(t,"-grow","")+Je+t+lt+Le(t,"grow","positive")+t;case 4554:return Je+Le(t,/([^-])(transform)/g,"$1"+Je+"$2")+t;case 6187:return Le(Le(Le(t,/(zoom-|grab)/,Je+"$1"),/(image-set)/,Je+"$1"),t,"")+t;case 5495:case 3959:return Le(t,/(image-set\([^]*)/,Je+"$1$`$1");case 4968:return Le(Le(t,/(.+:)(flex-)?(.*)/,Je+"box-pack:$3"+lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Je+t+t;case 4200:if(!li(t,/flex-|baseline/))return lt+"grid-column-align"+ma(t,e)+t;break;case 2592:case 3360:return lt+Le(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,o){return e=o,li(r.props,/grid-\w+-end/)})?~ad(t+(n=n[e].value),"span",0)?t:lt+Le(t,"-start","")+t+lt+"grid-row-span:"+(~ad(n,"span",0)?li(n,/\d+/):+li(n,/\d+/)-+li(t,/\d+/))+";":lt+Le(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return li(r.props,/grid-\w+-start/)})?t:lt+Le(Le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Le(t,/(.+)-inline(.+)/,Je+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Or(t)-1-e>6)switch(Bt(t,e+1)){case 109:if(Bt(t,e+4)!==45)break;case 102:return Le(t,/(.+:)(.+)-([^]+)/,"$1"+Je+"$2-$3$1"+Hl+(Bt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~ad(t,"stretch",0)?wE(Le(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return Le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,u,d,f,m){return lt+o+":"+a+m+(u?lt+o+"-span:"+(d?f:+f-+a)+m:"")+t});case 4949:if(Bt(t,e+6)===121)return Le(t,":",":"+Je)+t;break;case 6444:switch(Bt(t,Bt(t,14)===45?18:11)){case 120:return Le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Je+(Bt(t,14)===45?"inline-":"")+"box$3$1"+Je+"$2$3$1"+lt+"$2box$3")+t;case 100:return Le(t,":",":"+lt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(t,"scroll-","scroll-snap-")+t}return t}function Td(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function z1(t,e,n,r){switch(t.type){case x1:if(t.children.length)break;case R1:case jm:return t.return=t.return||t.value;case pE:return"";case mE:return t.return=t.value+"{"+Td(t.children,r)+"}";case ih:if(!Or(t.value=t.props.join(",")))return""}return Or(n=Td(t.children,r))?t.return=t.value+"{"+n+"}":""}function W1(t){var e=yE(t);return function(n,r,o,a){for(var u="",d=0;d<e;d++)u+=t[d](n,r,o,a)||"";return u}}function H1(t){return function(e){e.root||(e=e.return)&&t(e)}}function G1(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case jm:t.return=wE(t.value,t.length,n);return;case mE:return Td([Hi(t,{value:Le(t.value,"@","@"+Je)})],r);case ih:if(t.length)return D1(n=t.props,function(o){switch(li(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":na(Hi(t,{props:[Le(o,/:(read-\w+)/,":"+Hl+"$1")]})),na(Hi(t,{props:[o]})),Jp(t,{props:T_(n,r)});break;case"::placeholder":na(Hi(t,{props:[Le(o,/:(plac\w+)/,":"+Je+"input-$1")]})),na(Hi(t,{props:[Le(o,/:(plac\w+)/,":"+Hl+"$1")]})),na(Hi(t,{props:[Le(o,/:(plac\w+)/,lt+"input-$1")]})),na(Hi(t,{props:[o]})),Jp(t,{props:T_(n,r)});break}return""})}}var q1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},kn={},va=typeof process<"u"&&kn!==void 0&&(kn.REACT_APP_SC_ATTR||kn.SC_ATTR)||"data-styled",EE="active",IE="data-styled-version",lh="6.1.13",zm=`/*!sc*/
`,bd=typeof window<"u"&&"HTMLElement"in window,K1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&kn.REACT_APP_SC_DISABLE_SPEEDY!==""?kn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&kn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&kn!==void 0&&kn.SC_DISABLE_SPEEDY!==void 0&&kn.SC_DISABLE_SPEEDY!==""&&kn.SC_DISABLE_SPEEDY!=="false"&&kn.SC_DISABLE_SPEEDY),Q1={},uh=Object.freeze([]),ya=Object.freeze({});function SE(t,e,n){return n===void 0&&(n=ya),t.theme!==n.theme&&t.theme||e||n.theme}var TE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Y1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,X1=/(^-|-$)/g;function A_(t){return t.replace(Y1,"-").replace(X1,"")}var J1=/(a)(d)/gi,Qc=52,P_=function(t){return String.fromCharCode(t+(t>25?39:97))};function tm(t){var e,n="";for(e=Math.abs(t);e>Qc;e=e/Qc|0)n=P_(e%Qc)+n;return(P_(e%Qc)+n).replace(J1,"$1-$2")}var vp,bE=5381,ua=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},CE=function(t){return ua(bE,t)};function AE(t){return tm(CE(t)>>>0)}function Z1(t){return t.displayName||t.name||"Component"}function yp(t){return typeof t=="string"&&!0}var PE=typeof Symbol=="function"&&Symbol.for,RE=PE?Symbol.for("react.memo"):60115,eC=PE?Symbol.for("react.forward_ref"):60112,tC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},nC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},xE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},rC=((vp={})[eC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},vp[RE]=xE,vp);function R_(t){return("type"in(e=t)&&e.type.$$typeof)===RE?xE:"$$typeof"in t?rC[t.$$typeof]:tC;var e}var iC=Object.defineProperty,oC=Object.getOwnPropertyNames,x_=Object.getOwnPropertySymbols,sC=Object.getOwnPropertyDescriptor,aC=Object.getPrototypeOf,k_=Object.prototype;function kE(t,e,n){if(typeof e!="string"){if(k_){var r=aC(e);r&&r!==k_&&kE(t,r,n)}var o=oC(e);x_&&(o=o.concat(x_(e)));for(var a=R_(t),u=R_(e),d=0;d<o.length;++d){var f=o[d];if(!(f in nC||n&&n[f]||u&&f in u||a&&f in a)){var m=sC(e,f);try{iC(t,f,m)}catch{}}}}return t}function Zo(t){return typeof t=="function"}function Wm(t){return typeof t=="object"&&"styledComponentId"in t}function Qo(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function nm(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function nu(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function rm(t,e,n){if(n===void 0&&(n=!1),!n&&!nu(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=rm(t[r],e[r]);else if(nu(e))for(var r in e)t[r]=rm(t[r],e[r]);return t}function Hm(t,e){Object.defineProperty(t,"toString",{value:e})}function es(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var lC=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;e>=a;)if((a<<=1)<0)throw es(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var u=o;u<a;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),f=(u=0,n.length);u<f;u++)this.tag.insertRule(d,n[u])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;this.groupSizes[e]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),a=o+r,u=o;u<a;u++)n+="".concat(this.tag.getRule(u)).concat(zm);return n},t}(),cd=new Map,Cd=new Map,dd=1,Yc=function(t){if(cd.has(t))return cd.get(t);for(;Cd.has(dd);)dd++;var e=dd++;return cd.set(t,e),Cd.set(e,t),e},uC=function(t,e){dd=e+1,cd.set(t,e),Cd.set(e,t)},cC="style[".concat(va,"][").concat(IE,'="').concat(lh,'"]'),dC=new RegExp("^".concat(va,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hC=function(t,e,n){for(var r,o=n.split(","),a=0,u=o.length;a<u;a++)(r=o[a])&&t.registerName(e,r)},fC=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(zm),o=[],a=0,u=r.length;a<u;a++){var d=r[a].trim();if(d){var f=d.match(dC);if(f){var m=0|parseInt(f[1],10),y=f[2];m!==0&&(uC(y,m),hC(t,y,f[3]),t.getTag().insertRules(m,o)),o.length=0}else o.push(d)}}},D_=function(t){for(var e=document.querySelectorAll(cC),n=0,r=e.length;n<r;n++){var o=e[n];o&&o.getAttribute(va)!==EE&&(fC(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function pC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var DE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),o=function(d){var f=Array.from(d.querySelectorAll("style[".concat(va,"]")));return f[f.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(va,EE),r.setAttribute(IE,lh);var u=pC();return u&&r.setAttribute("nonce",u),n.insertBefore(r,a),r},mC=function(){function t(e){this.element=DE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var u=r[o];if(u.ownerNode===n)return u}throw es(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),gC=function(){function t(e){this.element=DE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),vC=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),N_=bd,yC={isServer:!bd,useCSSOMInjection:!K1},Ad=function(){function t(e,n,r){e===void 0&&(e=ya),n===void 0&&(n={});var o=this;this.options=Ut(Ut({},yC),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&bd&&N_&&(N_=!1,D_(this)),Hm(this,function(){return function(a){for(var u=a.getTag(),d=u.length,f="",m=function(_){var w=function(O){return Cd.get(O)}(_);if(w===void 0)return"continue";var I=a.names.get(w),b=u.getGroup(_);if(I===void 0||!I.size||b.length===0)return"continue";var D="".concat(va,".g").concat(_,'[id="').concat(w,'"]'),x="";I!==void 0&&I.forEach(function(O){O.length>0&&(x+="".concat(O,","))}),f+="".concat(b).concat(D,'{content:"').concat(x,'"}').concat(zm)},y=0;y<d;y++)m(y);return f}(o)})}return t.registerId=function(e){return Yc(e)},t.prototype.rehydrate=function(){!this.server&&bd&&D_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ut(Ut({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new vC(o):r?new mC(o):new gC(o)}(this.options),new lC(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Yc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Yc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Yc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),_C=/&/g,wC=/^\s*\/\/.*$/gm;function NE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=NE(n.children,e)),n})}function EC(t){var e,n,r,o=ya,a=o.options,u=a===void 0?ya:a,d=o.plugins,f=d===void 0?uh:d,m=function(w,I,b){return b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(e):w},y=f.slice();y.push(function(w){w.type===ih&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(_C,n).replace(r,m))}),u.prefix&&y.push(G1),y.push(z1);var _=function(w,I,b,D){I===void 0&&(I=""),b===void 0&&(b=""),D===void 0&&(D="&"),e=D,n=I,r=new RegExp("\\".concat(n,"\\b"),"g");var x=w.replace(wC,""),O=j1(b||I?"".concat(b," ").concat(I," { ").concat(x," }"):x);u.namespace&&(O=NE(O,u.namespace));var V=[];return Td(O,W1(y.concat(H1(function(B){return V.push(B)})))),V};return _.hash=f.length?f.reduce(function(w,I){return I.name||es(15),ua(w,I.name)},bE).toString():"",_}var IC=new Ad,im=EC(),OE=je.createContext({shouldForwardProp:void 0,styleSheet:IC,stylis:im});OE.Consumer;je.createContext(void 0);function om(){return oe.useContext(OE)}var SC=function(){function t(e,n){var r=this;this.inject=function(o,a){a===void 0&&(a=im);var u=r.name+a.hash;o.hasNameForId(r.id,u)||o.insertRules(r.id,u,a(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Hm(this,function(){throw es(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=im),this.name+e.hash},t}(),TC=function(t){return t>="A"&&t<="Z"};function O_(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;TC(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var LE=function(t){return t==null||t===!1||t===""},ME=function(t){var e,n,r=[];for(var o in t){var a=t[o];t.hasOwnProperty(o)&&!LE(a)&&(Array.isArray(a)&&a.isCss||Zo(a)?r.push("".concat(O_(o),":"),a,";"):nu(a)?r.push.apply(r,tu(tu(["".concat(o," {")],ME(a),!1),["}"],!1)):r.push("".concat(O_(o),": ").concat((e=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in q1||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Xi(t,e,n,r){if(LE(t))return[];if(Wm(t))return[".".concat(t.styledComponentId)];if(Zo(t)){if(!Zo(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var o=t(e);return Xi(o,e,n,r)}var a;return t instanceof SC?n?(t.inject(n,r),[t.getName(r)]):[t]:nu(t)?ME(t):Array.isArray(t)?Array.prototype.concat.apply(uh,t.map(function(u){return Xi(u,e,n,r)})):[t.toString()]}function VE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Zo(n)&&!Wm(n))return!1}return!0}var bC=CE(lh),CC=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&VE(e),this.componentId=n,this.baseHash=ua(bC,n),this.baseStyle=r,Ad.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Qo(o,this.staticRulesId);else{var a=nm(Xi(this.rules,e,n,r)),u=tm(ua(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,u)){var d=r(a,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,d)}o=Qo(o,u),this.staticRulesId=u}else{for(var f=ua(this.baseHash,r.hash),m="",y=0;y<this.rules.length;y++){var _=this.rules[y];if(typeof _=="string")m+=_;else if(_){var w=nm(Xi(_,e,n,r));f=ua(f,w+y),m+=w}}if(m){var I=tm(f>>>0);n.hasNameForId(this.componentId,I)||n.insertRules(this.componentId,I,r(m,".".concat(I),void 0,this.componentId)),o=Qo(o,I)}}return o},t}(),ru=je.createContext(void 0);ru.Consumer;function AC(t){var e=je.useContext(ru),n=oe.useMemo(function(){return function(r,o){if(!r)throw es(14);if(Zo(r)){var a=r(o);return a}if(Array.isArray(r)||typeof r!="object")throw es(8);return o?Ut(Ut({},o),r):r}(t.theme,e)},[t.theme,e]);return t.children?je.createElement(ru.Provider,{value:n},t.children):null}var _p={};function PC(t,e,n){var r=Wm(t),o=t,a=!yp(t),u=e.attrs,d=u===void 0?uh:u,f=e.componentId,m=f===void 0?function($,W){var Q=typeof $!="string"?"sc":A_($);_p[Q]=(_p[Q]||0)+1;var P="".concat(Q,"-").concat(AE(lh+Q+_p[Q]));return W?"".concat(W,"-").concat(P):P}(e.displayName,e.parentComponentId):f,y=e.displayName,_=y===void 0?function($){return yp($)?"styled.".concat($):"Styled(".concat(Z1($),")")}(t):y,w=e.displayName&&e.componentId?"".concat(A_(e.displayName),"-").concat(e.componentId):e.componentId||m,I=r&&o.attrs?o.attrs.concat(d).filter(Boolean):d,b=e.shouldForwardProp;if(r&&o.shouldForwardProp){var D=o.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;b=function($,W){return D($,W)&&x($,W)}}else b=D}var O=new CC(n,w,r?o.componentStyle:void 0);function V($,W){return function(Q,P,A){var R=Q.attrs,N=Q.componentStyle,L=Q.defaultProps,j=Q.foldedComponentIds,C=Q.styledComponentId,be=Q.target,Qe=je.useContext(ru),Ye=om(),Me=Q.shouldForwardProp||Ye.shouldForwardProp,ie=SE(P,Qe,L)||ya,ce=function(we,xe,Oe){for(var Ne,Fe=Ut(Ut({},xe),{className:void 0,theme:Oe}),et=0;et<we.length;et+=1){var Dt=Zo(Ne=we[et])?Ne(Fe):Ne;for(var Nt in Dt)Fe[Nt]=Nt==="className"?Qo(Fe[Nt],Dt[Nt]):Nt==="style"?Ut(Ut({},Fe[Nt]),Dt[Nt]):Dt[Nt]}return xe.className&&(Fe.className=Qo(Fe.className,xe.className)),Fe}(R,P,ie),ae=ce.as||be,U={};for(var X in ce)ce[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ce.theme===ie||(X==="forwardedAs"?U.as=ce.forwardedAs:Me&&!Me(X,ae)||(U[X]=ce[X]));var pe=function(we,xe){var Oe=om(),Ne=we.generateAndInjectStyles(xe,Oe.styleSheet,Oe.stylis);return Ne}(N,ce),Pe=Qo(j,C);return pe&&(Pe+=" "+pe),ce.className&&(Pe+=" "+ce.className),U[yp(ae)&&!TE.has(ae)?"class":"className"]=Pe,U.ref=A,oe.createElement(ae,U)}(B,$,W)}V.displayName=_;var B=je.forwardRef(V);return B.attrs=I,B.componentStyle=O,B.displayName=_,B.shouldForwardProp=b,B.foldedComponentIds=r?Qo(o.foldedComponentIds,o.styledComponentId):"",B.styledComponentId=w,B.target=r?o.target:t,Object.defineProperty(B,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=r?function(W){for(var Q=[],P=1;P<arguments.length;P++)Q[P-1]=arguments[P];for(var A=0,R=Q;A<R.length;A++)rm(W,R[A],!0);return W}({},o.defaultProps,$):$}}),Hm(B,function(){return".".concat(B.styledComponentId)}),a&&kE(B,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),B}function L_(t,e){for(var n=[t[0]],r=0,o=e.length;r<o;r+=1)n.push(e[r],t[r+1]);return n}var M_=function(t){return Object.assign(t,{isCss:!0})};function FE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Zo(t)||nu(t))return M_(Xi(L_(uh,tu([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Xi(r):M_(Xi(L_(r,e)))}function sm(t,e,n){if(n===void 0&&(n=ya),!e)throw es(1,e);var r=function(o){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return t(e,n,FE.apply(void 0,tu([o],a,!1)))};return r.attrs=function(o){return sm(t,e,Ut(Ut({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return sm(t,e,Ut(Ut({},n),o))},r}var BE=function(t){return sm(PC,t)},ee=BE;TE.forEach(function(t){ee[t]=BE(t)});var RC=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=VE(e),Ad.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,o){var a=o(nm(Xi(this.rules,n,r,o)),""),u=this.componentId+e;r.insertRules(u,u,a)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,o){e>2&&Ad.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,o)},t}();function xC(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=FE.apply(void 0,tu([t],e,!1)),o="sc-global-".concat(AE(JSON.stringify(r))),a=new RC(r,o),u=function(f){var m=om(),y=je.useContext(ru),_=je.useRef(m.styleSheet.allocateGSInstance(o)).current;return m.styleSheet.server&&d(_,f,m.styleSheet,y,m.stylis),je.useLayoutEffect(function(){if(!m.styleSheet.server)return d(_,f,m.styleSheet,y,m.stylis),function(){return a.removeStyles(_,m.styleSheet)}},[_,f,m.styleSheet,y,m.stylis]),null};function d(f,m,y,_,w){if(a.isStatic)a.renderStyles(f,Q1,y,w);else{var I=Ut(Ut({},m),{theme:SE(m,_,u.defaultProps)});a.renderStyles(f,I,y,w)}}return je.memo(u)}const kC=ee.div`
  width: 1500px;
`,DC=xC`
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
`,NC=ee.div`
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
`,OC=ee.div`
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
`,LC=ee.aside`
  display: flex;
  flex-direction: column;
`,MC=ee.div`
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
`,VC=ee.button`
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
`,FC=ee.header`
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
`,BC=ee.div`
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
`;var wp={exports:{}},Ep,V_;function UC(){if(V_)return Ep;V_=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ep=t,Ep}var Ip,F_;function jC(){if(F_)return Ip;F_=1;var t=UC();function e(){}function n(){}return n.resetWarningCache=e,Ip=function(){function r(u,d,f,m,y,_){if(_!==t){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}r.isRequired=r;function o(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:e};return a.PropTypes=a,a},Ip}var B_;function $C(){return B_||(B_=1,wp.exports=jC()()),wp.exports}var zC=$C();const di=rh(zC),UE=ee.div`
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
`,WC=ee.input`
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
`,HC=ee.img`
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
`,GC=()=>z.jsxs(UE,{children:[z.jsx(HC,{src:"icon/search_icon.svg","aria-hidden":"true",alt:""}),z.jsx(WC,{"aria-label":"Search on your page",type:"text",placeholder:"Search for anything..."})]}),U_=ee.div`
  display: flex;
`,qC=ee.div`
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
`,KC=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,QC=ee.div`
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
`,YC=ee.button`
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
`,j_=ee.img``,XC=ee.div`
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
`,JC=ee.span`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,ZC=ee.span`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,eA=ee.img`
  margin-right: 0.8rem;
  object-fit: cover;
  object-position: top;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`,tA=ee.button`
  cursor: pointer;
  background-color: transparent;
`;ee.img`
  width: 1.5rem;
  height: 1.5rem;
`;const nA=ee.div`
  position: absolute;
  top: 100%;
  right: 3%;
  width: 10rem;
  height: 10rem;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`;ee(UE)`
  margin: 0;
  border-radius: 0;
  padding: 0;
  display: block;
`;const Zn={mobile:"425px",mobileL:"600px",tablet:"768px",desktop:"1024px",headerSize:{mobileHeight:"3rem",tabletHeight:"4rem",desktopHeight:"5.5rem"},fonts:{primaryFont:"'Inter', sans-serif"},colors:{primaryLightBackground:"#fff",secondaryLightBackground:"#f5f5f5",primaryDarkBackground:"#0D062D",secondaryDarkBackground:"#E0E0E0",hoverBackground:"rgba(80, 48, 229, 0.08)",activeColorBackground:"#ffd5d5",borderLineColor:"1px solid rgb(219, 219, 219)",darkBlue:" #5030E5",lightBlue:"rgb(34, 1, 179)",darkText:"#0D062D",lightText:"#625F6D"}},zi={levelBackgroundColorOrange:"rgba(223, 168, 116, 0.2)",levelBackgroundColorGreen:"rgba(139, 196, 138, 0.2)",levelBackgroundColorBlue:"rgba(80, 48, 229, 0.2)",levelBackgroundColorRed:"rgba(234, 88, 88, 0.2)",levelColorOrange:"#D58D49",levelColorGreen:"#8BC48A",levelColorBlue:"#5030E5",levelColorRed:"#d54747"},rA=ee.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`,iA=ee.form`
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 300px;

  @media (max-width: ${Zn.mobileL}) {
    padding: 1.5rem;
  }
  @media (max-width: ${Zn.mobile}) {
    padding: 1rem;
  }
`,oA=ee.h2`
  color: ${({theme:t})=>t.colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`,Sp=ee.div`
  margin-bottom: 1.2rem;
`,Tp=ee.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${Zn.colors.lightBlue};
  }
`,Gm=ee.button`
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
`,sA=ee(Gm)``,aA=ee.p`
  text-align: center;
  margin-top: 1rem;
  color: ${({theme:t})=>t.colors.lightText};
`,lA=ee.span`
  color: ${({theme:t})=>t.colors.darkBlue};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,$_=ee.div`
  font-weight: 500;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 3000ms;

  span {
    color: #ff0000b5;
  }
`,uA=ee.div`
  display: flex;
  justify-content: end;
  width: 100%;
`,Ra=oe.createContext({isLoggedIn:!1,setIsLoggedIn:()=>{},showLoginForm:!1,setShowLoginForm:()=>{},mode:"login",setMode:()=>{},loggedUser:null,setLoggedUser:()=>{}}),cA=()=>{};var z_={};/**
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
 */const jE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},dA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=t[n++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=t[n++],u=t[n++],d=t[n++],f=((o&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=t[n++],u=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},$E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const a=t[o],u=o+1<t.length,d=u?t[o+1]:0,f=o+2<t.length,m=f?t[o+2]:0,y=a>>2,_=(a&3)<<4|d>>4;let w=(d&15)<<2|m>>6,I=m&63;f||(I=64,u||(w=64)),r.push(n[y],n[_],n[w],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(jE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const a=n[t.charAt(o++)],d=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const _=o<t.length?n[t.charAt(o)]:64;if(++o,a==null||d==null||m==null||_==null)throw new hA;const w=a<<2|d>>4;if(r.push(w),m!==64){const I=d<<4&240|m>>2;if(r.push(I),_!==64){const b=m<<6&192|_;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fA=function(t){const e=jE(t);return $E.encodeByteArray(e,!0)},Pd=function(t){return fA(t).replace(/\./g,"")},zE=function(t){try{return $E.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const mA=()=>pA().__FIREBASE_DEFAULTS__,gA=()=>{if(typeof process>"u"||typeof z_>"u")return;const t=z_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zE(t[1]);return e&&JSON.parse(e)},ch=()=>{try{return cA()||mA()||gA()||vA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},WE=t=>{var e,n;return(n=(e=ch())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},yA=t=>{const e=WE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},HE=()=>{var t;return(t=ch())===null||t===void 0?void 0:t.config},GE=t=>{var e;return(e=ch())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class _A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function xa(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function qE(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function wA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Pd(JSON.stringify(n)),Pd(JSON.stringify(u)),""].join(".")}const Gl={};function EA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Gl))Gl[e]?t.emulator.push(e):t.prod.push(e);return t}function IA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let W_=!1;function KE(t,e){if(typeof window>"u"||typeof document>"u"||!xa(window.location.host)||Gl[t]===e||Gl[t]||W_)return;Gl[t]=e;function n(w){return`__firebase__banner__${w}`}const r="__firebase__banner",a=EA().prod.length>0;function u(){const w=document.getElementById(r);w&&w.remove()}function d(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function f(w,I){w.setAttribute("width","24"),w.setAttribute("id",I),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function m(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{W_=!0,u()},w}function y(w,I){w.setAttribute("id",I),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function _(){const w=IA(r),I=n("text"),b=document.getElementById(I)||document.createElement("span"),D=n("learnmore"),x=document.getElementById(D)||document.createElement("a"),O=n("preprendIcon"),V=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const B=w.element;d(B),y(x,D);const $=m();f(V,O),B.append(V,b,x,$),document.body.appendChild(B)}a?(b.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function sn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(sn())}function TA(){var t;const e=(t=ch())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function bA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function AA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PA(){const t=sn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RA(){return!TA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xA(){try{return typeof indexedDB=="object"}catch{return!1}}function kA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const DA="FirebaseError";class yi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=DA,Object.setPrototypeOf(this,yi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eu.prototype.create)}}class Eu{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?NA(a,r):"Error",d=`${this.serviceName}: ${u} (${o}).`;return new yi(o,d,r)}}function NA(t,e){return t.replace(OA,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const OA=/\{\$([^}]+)}/g;function LA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ts(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const a=t[o],u=e[o];if(H_(a)&&H_(u)){if(!ts(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function H_(t){return t!==null&&typeof t=="object"}/**
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
 */function Iu(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Ul(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function MA(t,e){const n=new VA(t,e);return n.subscribe.bind(n)}class VA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FA(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=bp),o.error===void 0&&(o.error=bp),o.complete===void 0&&(o.complete=bp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bp(){}/**
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
 */function an(t){return t&&t._delegate?t._delegate:t}class ns{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qo="[DEFAULT]";/**
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
 */let BA=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new _A;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jA(e))try{this.getOrInitializeService({instanceIdentifier:qo})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=qo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qo){return this.instances.has(e)}getOptions(e=qo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);r===d&&u.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:UA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qo){return this.component?this.component.multipleInstances?e:qo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function UA(t){return t===qo?void 0:t}function jA(t){return t.instantiationMode==="EAGER"}/**
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
 */class $A{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ue||(Ue={}));const zA={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},WA=Ue.INFO,HA={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},GA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=HA[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class qm{constructor(e){this.name=e,this._logLevel=WA,this._logHandler=GA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const qA=(t,e)=>e.some(n=>t instanceof n);let G_,q_;function KA(){return G_||(G_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function QA(){return q_||(q_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QE=new WeakMap,am=new WeakMap,YE=new WeakMap,Cp=new WeakMap,Km=new WeakMap;function YA(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",a),t.removeEventListener("error",u)},a=()=>{n(Ji(t.result)),o()},u=()=>{r(t.error),o()};t.addEventListener("success",a),t.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&QE.set(n,t)}).catch(()=>{}),Km.set(e,t),e}function XA(t){if(am.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",u),t.removeEventListener("abort",u)},a=()=>{n(),o()},u=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",a),t.addEventListener("error",u),t.addEventListener("abort",u)});am.set(t,e)}let lm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return am.get(t);if(e==="objectStoreNames")return t.objectStoreNames||YE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ji(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function JA(t){lm=t(lm)}function ZA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ap(this),e,...n);return YE.set(r,e.sort?e.sort():[e]),Ji(r)}:QA().includes(t)?function(...e){return t.apply(Ap(this),e),Ji(QE.get(this))}:function(...e){return Ji(t.apply(Ap(this),e))}}function eP(t){return typeof t=="function"?ZA(t):(t instanceof IDBTransaction&&XA(t),qA(t,KA())?new Proxy(t,lm):t)}function Ji(t){if(t instanceof IDBRequest)return YA(t);if(Cp.has(t))return Cp.get(t);const e=eP(t);return e!==t&&(Cp.set(t,e),Km.set(e,t)),e}const Ap=t=>Km.get(t);function tP(t,e,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(t,e),d=Ji(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Ji(u.result),f.oldVersion,f.newVersion,Ji(u.transaction),f)}),n&&u.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),d}const nP=["get","getKey","getAll","getAllKeys","count"],rP=["put","add","delete","clear"],Pp=new Map;function K_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pp.get(e))return Pp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=rP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||nP.includes(n)))return;const a=async function(u,...d){const f=this.transaction(u,o?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(d.shift())),(await Promise.all([m[n](...d),o&&f.done]))[0]};return Pp.set(e,a),a}JA(t=>({...t,get:(e,n,r)=>K_(e,n)||t.get(e,n,r),has:(e,n)=>!!K_(e,n)||t.has(e,n)}));/**
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
 */class iP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const um="@firebase/app",Q_="0.13.2";/**
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
 */const pi=new qm("@firebase/app"),sP="@firebase/app-compat",aP="@firebase/analytics-compat",lP="@firebase/analytics",uP="@firebase/app-check-compat",cP="@firebase/app-check",dP="@firebase/auth",hP="@firebase/auth-compat",fP="@firebase/database",pP="@firebase/data-connect",mP="@firebase/database-compat",gP="@firebase/functions",vP="@firebase/functions-compat",yP="@firebase/installations",_P="@firebase/installations-compat",wP="@firebase/messaging",EP="@firebase/messaging-compat",IP="@firebase/performance",SP="@firebase/performance-compat",TP="@firebase/remote-config",bP="@firebase/remote-config-compat",CP="@firebase/storage",AP="@firebase/storage-compat",PP="@firebase/firestore",RP="@firebase/ai",xP="@firebase/firestore-compat",kP="firebase",DP="11.10.0";/**
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
 */const cm="[DEFAULT]",NP={[um]:"fire-core",[sP]:"fire-core-compat",[lP]:"fire-analytics",[aP]:"fire-analytics-compat",[cP]:"fire-app-check",[uP]:"fire-app-check-compat",[dP]:"fire-auth",[hP]:"fire-auth-compat",[fP]:"fire-rtdb",[pP]:"fire-data-connect",[mP]:"fire-rtdb-compat",[gP]:"fire-fn",[vP]:"fire-fn-compat",[yP]:"fire-iid",[_P]:"fire-iid-compat",[wP]:"fire-fcm",[EP]:"fire-fcm-compat",[IP]:"fire-perf",[SP]:"fire-perf-compat",[TP]:"fire-rc",[bP]:"fire-rc-compat",[CP]:"fire-gcs",[AP]:"fire-gcs-compat",[PP]:"fire-fst",[xP]:"fire-fst-compat",[RP]:"fire-vertex","fire-js":"fire-js",[kP]:"fire-js-all"};/**
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
 */const Rd=new Map,OP=new Map,dm=new Map;function Y_(t,e){try{t.container.addComponent(e)}catch(n){pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _a(t){const e=t.name;if(dm.has(e))return pi.debug(`There were multiple attempts to register component ${e}.`),!1;dm.set(e,t);for(const n of Rd.values())Y_(n,t);for(const n of OP.values())Y_(n,t);return!0}function Qm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Yn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const LP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zi=new Eu("app","Firebase",LP);/**
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
 */class MP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zi.create("app-deleted",{appName:this._name})}}/**
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
 */const ka=DP;function XE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cm,automaticDataCollectionEnabled:!0},e),o=r.name;if(typeof o!="string"||!o)throw Zi.create("bad-app-name",{appName:String(o)});if(n||(n=HE()),!n)throw Zi.create("no-options");const a=Rd.get(o);if(a){if(ts(n,a.options)&&ts(r,a.config))return a;throw Zi.create("duplicate-app",{appName:o})}const u=new $A(o);for(const f of dm.values())u.addComponent(f);const d=new MP(n,r,u);return Rd.set(o,d),d}function JE(t=cm){const e=Rd.get(t);if(!e&&t===cm&&HE())return XE();if(!e)throw Zi.create("no-app",{appName:t});return e}function eo(t,e,n){var r;let o=(r=NP[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${o}" with version "${e}":`];a&&d.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pi.warn(d.join(" "));return}_a(new ns(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const VP="firebase-heartbeat-database",FP=1,iu="firebase-heartbeat-store";let Rp=null;function ZE(){return Rp||(Rp=tP(VP,FP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(iu)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zi.create("idb-open",{originalErrorMessage:t.message})})),Rp}async function BP(t){try{const n=(await ZE()).transaction(iu),r=await n.objectStore(iu).get(eI(t));return await n.done,r}catch(e){if(e instanceof yi)pi.warn(e.message);else{const n=Zi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pi.warn(n.message)}}}async function X_(t,e){try{const r=(await ZE()).transaction(iu,"readwrite");await r.objectStore(iu).put(e,eI(t)),await r.done}catch(n){if(n instanceof yi)pi.warn(n.message);else{const r=Zi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pi.warn(r.message)}}}function eI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UP=1024,jP=30;class $P{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=J_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>jP){const u=HP(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pi.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=J_(),{heartbeatsToSend:r,unsentEntries:o}=zP(this._heartbeatsCache.heartbeats),a=Pd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return pi.warn(n),""}}}function J_(){return new Date().toISOString().substring(0,10)}function zP(t,e=UP){const n=[];let r=t.slice();for(const o of t){const a=n.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),Z_(n)>e){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xA()?kA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return X_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Z_(t){return Pd(JSON.stringify({version:2,heartbeats:t})).length}function HP(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function GP(t){_a(new ns("platform-logger",e=>new iP(e),"PRIVATE")),_a(new ns("heartbeat",e=>new $P(e),"PRIVATE")),eo(um,Q_,t),eo(um,Q_,"esm2017"),eo("fire-js","")}GP("");function tI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qP=tI,nI=new Eu("auth","Firebase",tI());/**
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
 */const xd=new qm("@firebase/auth");function KP(t,...e){xd.logLevel<=Ue.WARN&&xd.warn(`Auth (${ka}): ${t}`,...e)}function hd(t,...e){xd.logLevel<=Ue.ERROR&&xd.error(`Auth (${ka}): ${t}`,...e)}/**
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
 */function Er(t,...e){throw Ym(t,...e)}function Lr(t,...e){return Ym(t,...e)}function rI(t,e,n){const r=Object.assign(Object.assign({},qP()),{[e]:n});return new Eu("auth","Firebase",r).create(e,{appName:t.name})}function hi(t){return rI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ym(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nI.create(t,...e)}function Ce(t,e,...n){if(!t)throw Ym(e,...n)}function ui(t){const e="INTERNAL ASSERTION FAILED: "+t;throw hd(e),new Error(e)}function mi(t,e){t||ui(e)}/**
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
 */function hm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function QP(){return ew()==="http:"||ew()==="https:"}function ew(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function YP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QP()||CA()||"connection"in navigator)?navigator.onLine:!0}function XP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Su{constructor(e,n){this.shortDelay=e,this.longDelay=n,mi(n>e,"Short delay should be less than long delay!"),this.isMobile=SA()||AA()}get(){return YP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Xm(t,e){mi(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ui("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ui("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ui("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eR=new Su(3e4,6e4);function mo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function go(t,e,n,r,o={}){return oI(t,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const d=Iu(Object.assign({key:t.config.apiKey},u)).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const m=Object.assign({method:e,headers:f},a);return bA()||(m.referrerPolicy="no-referrer"),t.emulatorConfig&&xa(t.emulatorConfig.host)&&(m.credentials="include"),iI.fetch()(await sI(t,t.config.apiHost,n,d),m)})}async function oI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JP),e);try{const o=new nR(t),a=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Xc(t,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,m]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xc(t,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Xc(t,"email-already-in-use",u);if(f==="USER_DISABLED")throw Xc(t,"user-disabled",u);const y=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw rI(t,y,m);Er(t,y)}}catch(o){if(o instanceof yi)throw o;Er(t,"network-request-failed",{message:String(o)})}}async function Tu(t,e,n,r,o={}){const a=await go(t,e,n,r,o);return"mfaPendingCredential"in a&&Er(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function sI(t,e,n,r){const o=`${e}${n}?${r}`,a=t,u=a.config.emulator?Xm(t.config,o):`${t.config.apiScheme}://${o}`;return ZP.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function tR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Lr(this.auth,"network-request-failed")),eR.get())})}}function Xc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Lr(t,e,r);return o.customData._tokenResponse=n,o}function tw(t){return t!==void 0&&t.enterprise!==void 0}class rR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function iR(t,e){return go(t,"GET","/v2/recaptchaConfig",mo(t,e))}/**
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
 */async function oR(t,e){return go(t,"POST","/v1/accounts:delete",e)}async function kd(t,e){return go(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ql(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sR(t,e=!1){const n=an(t),r=await n.getIdToken(e),o=Jm(r);Ce(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:ql(xp(o.auth_time)),issuedAtTime:ql(xp(o.iat)),expirationTime:ql(xp(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function xp(t){return Number(t)*1e3}function Jm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return hd("JWT malformed, contained fewer than 3 sections"),null;try{const o=zE(n);return o?JSON.parse(o):(hd("Failed to decode base64 JWT payload"),null)}catch(o){return hd("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function nw(t){const e=Jm(t);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ou(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yi&&aR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class fm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ql(this.lastLoginAt),this.creationTime=ql(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dd(t){var e;const n=t.auth,r=await t.getIdToken(),o=await ou(t,kd(n,{idToken:r}));Ce(o==null?void 0:o.users.length,n,"internal-error");const a=o.users[0];t._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?aI(a.providerUserInfo):[],d=cR(t.providerData,u),f=t.isAnonymous,m=!(t.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?m:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new fm(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(t,_)}async function uR(t){const e=an(t);await Dd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cR(t,e){return[...t.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function aI(t){return t.map(e=>{var{providerId:n}=e,r=Um(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dR(t,e){const n=await oI(t,{},async()=>{const r=Iu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=t.config,u=await sI(t,o,"/v1/token",`key=${a}`),d=await t._getAdditionalHeaders();d["Content-Type"]="application/x-www-form-urlencoded";const f={method:"POST",headers:d,body:r};return t.emulatorConfig&&xa(t.emulatorConfig.host)&&(f.credentials="include"),iI.fetch()(u,f)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hR(t,e){return go(t,"POST","/v2/accounts:revokeToken",mo(t,e))}/**
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
 */class da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const n=nw(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:a}=await dR(e,n);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:a}=n,u=new da;return r&&(Ce(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Ce(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Ce(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new da,this.toJSON())}_performRefresh(){return ui("not implemented")}}/**
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
 */function Wi(t,e){Ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vr{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,a=Um(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new fm(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await ou(this,this.stsTokenManager.getToken(this.auth,e));return Ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sR(this,e)}reload(){return uR(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dd(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Yn(this.auth.app))return Promise.reject(hi(this.auth));const e=await this.getIdToken();return await ou(this,oR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,a,u,d,f,m,y;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(o=n.email)!==null&&o!==void 0?o:void 0,I=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,b=(u=n.photoURL)!==null&&u!==void 0?u:void 0,D=(d=n.tenantId)!==null&&d!==void 0?d:void 0,x=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,O=(m=n.createdAt)!==null&&m!==void 0?m:void 0,V=(y=n.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:B,emailVerified:$,isAnonymous:W,providerData:Q,stsTokenManager:P}=n;Ce(B&&P,e,"internal-error");const A=da.fromJSON(this.name,P);Ce(typeof B=="string",e,"internal-error"),Wi(_,e.name),Wi(w,e.name),Ce(typeof $=="boolean",e,"internal-error"),Ce(typeof W=="boolean",e,"internal-error"),Wi(I,e.name),Wi(b,e.name),Wi(D,e.name),Wi(x,e.name),Wi(O,e.name),Wi(V,e.name);const R=new vr({uid:B,auth:e,email:w,emailVerified:$,displayName:_,isAnonymous:W,photoURL:b,phoneNumber:I,tenantId:D,stsTokenManager:A,createdAt:O,lastLoginAt:V});return Q&&Array.isArray(Q)&&(R.providerData=Q.map(N=>Object.assign({},N))),x&&(R._redirectEventId=x),R}static async _fromIdTokenResponse(e,n,r=!1){const o=new da;o.updateFromServerResponse(n);const a=new vr({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await Dd(a),a}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];Ce(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?aI(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),d=new da;d.updateFromIdToken(r);const f=new vr({uid:o.localId,auth:e,stsTokenManager:d,isAnonymous:u}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new fm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
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
 */const rw=new Map;function ci(t){mi(t instanceof Function,"Expected a class definition");let e=rw.get(t);return e?(mi(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rw.set(t,e),e)}/**
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
 */class lI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lI.type="NONE";const iw=lI;/**
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
 */function fd(t,e,n){return`firebase:${t}:${e}:${n}`}class ha{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=fd(this.userKey,o.apiKey,a),this.fullPersistenceKey=fd("persistence",o.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await kd(this.auth,{idToken:e}).catch(()=>{});return n?vr._fromGetAccountInfoResponse(this.auth,n,e):null}return vr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ha(ci(iw),e,r);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||ci(iw);const u=fd(r,e.config.apiKey,e.name);let d=null;for(const m of n)try{const y=await m._get(u);if(y){let _;if(typeof y=="string"){const w=await kd(e,{idToken:y}).catch(()=>{});if(!w)break;_=await vr._fromGetAccountInfoResponse(e,w,y)}else _=vr._fromJSON(e,y);m!==a&&(d=_),a=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ha(a,e,r):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(n.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new ha(a,e,r))}}/**
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
 */function ow(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(hI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pI(e))return"Blackberry";if(mI(e))return"Webos";if(cI(e))return"Safari";if((e.includes("chrome/")||dI(e))&&!e.includes("edge/"))return"Chrome";if(fI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uI(t=sn()){return/firefox\//i.test(t)}function cI(t=sn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function dI(t=sn()){return/crios\//i.test(t)}function hI(t=sn()){return/iemobile/i.test(t)}function fI(t=sn()){return/android/i.test(t)}function pI(t=sn()){return/blackberry/i.test(t)}function mI(t=sn()){return/webos/i.test(t)}function Zm(t=sn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fR(t=sn()){var e;return Zm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pR(){return PA()&&document.documentMode===10}function gI(t=sn()){return Zm(t)||fI(t)||mI(t)||pI(t)||/windows phone/i.test(t)||hI(t)}/**
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
 */function vI(t,e=[]){let n;switch(t){case"Browser":n=ow(sn());break;case"Worker":n=`${ow(sn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ka}/${r}`}/**
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
 */class mR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gR(t,e={}){return go(t,"GET","/v2/passwordPolicy",mo(t,e))}/**
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
 */const vR=6;class yR{constructor(e){var n,r,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:vR,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(n=f.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class _R{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sw(this),this.idTokenSubscription=new sw(this),this.beforeStateQueue=new mR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ci(n)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await ha.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await kd(this,{idToken:e}),r=await vr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Yn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,d=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Dd(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=XP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Yn(this.app))return Promise.reject(hi(this));const n=e?an(e):null;return n&&Ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Yn(this.app)?Promise.reject(hi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Yn(this.app)?Promise.reject(hi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ci(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gR(this),n=new yR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eu("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ci(e)||this._popupRedirectResolver;Ce(n,this,"argument-error"),this.redirectPersistenceManager=await ha.create(this,[ci(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,r,o);return()=>{u=!0,f()}}else{const f=e.addObserver(n);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(Yn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ls(t){return an(t)}class sw{constructor(e){this.auth=e,this.observer=null,this.addObserver=MA(n=>this.observer=n)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let dh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wR(t){dh=t}function yI(t){return dh.loadJS(t)}function ER(){return dh.recaptchaEnterpriseScript}function IR(){return dh.gapiScript}function SR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class TR{constructor(){this.enterprise=new bR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class bR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const CR="recaptcha-enterprise",_I="NO_RECAPTCHA";class AR{constructor(e){this.type=CR,this.auth=ls(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{iR(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const m=new rR(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{d(f)})})}function o(a,u,d){const f=window.grecaptcha;tw(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(_I)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new TR().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(d=>{if(!n&&tw(window.grecaptcha))o(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=ER();f.length!==0&&(f+=d),yI(f).then(()=>{o(d,a,u)}).catch(m=>{u(m)})}}).catch(d=>{u(d)})})}}async function aw(t,e,n,r=!1,o=!1){const a=new AR(t);let u;if(o)u=_I;else try{u=await a.verify(n)}catch{u=await a.verify(n,!0)}const d=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,m=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return r?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function pm(t,e,n,r,o){var a;if(!((a=t._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await aw(t,e,n,n==="getOobCode");return r(t,u)}else return r(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await aw(t,e,n,n==="getOobCode");return r(t,d)}else return Promise.reject(u)})}/**
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
 */function PR(t,e){const n=Qm(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),a=n.getOptions();if(ts(a,e??{}))return o;Er(o,"already-initialized")}return n.initialize({options:e})}function RR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ci);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xR(t,e,n){const r=ls(t);Ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=wI(e),{host:u,port:d}=kR(e),f=d===null?"":`:${d}`,m={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ce(ts(m,r.config.emulator)&&ts(y,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=y,r.settings.appVerificationDisabledForTesting=!0,xa(u)?(qE(`${a}//${u}${f}`),KE("Auth",!0)):DR()}function wI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kR(t){const e=wI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:lw(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:lw(u)}}}function lw(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function DR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class eg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ui("not implemented")}_getIdTokenResponse(e){return ui("not implemented")}_linkToIdToken(e,n){return ui("not implemented")}_getReauthenticationResolver(e){return ui("not implemented")}}async function NR(t,e){return go(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OR(t,e){return Tu(t,"POST","/v1/accounts:signInWithPassword",mo(t,e))}/**
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
 */async function LR(t,e){return Tu(t,"POST","/v1/accounts:signInWithEmailLink",mo(t,e))}async function MR(t,e){return Tu(t,"POST","/v1/accounts:signInWithEmailLink",mo(t,e))}/**
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
 */class su extends eg{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new su(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new su(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pm(e,n,"signInWithPassword",OR);case"emailLink":return LR(e,{email:this._email,oobCode:this._password});default:Er(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pm(e,r,"signUpPassword",NR);case"emailLink":return MR(e,{idToken:n,email:this._email,oobCode:this._password});default:Er(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fa(t,e){return Tu(t,"POST","/v1/accounts:signInWithIdp",mo(t,e))}/**
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
 */const VR="http://localhost";class rs extends eg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new rs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Er("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,a=Um(n,["providerId","signInMethod"]);if(!r||!o)return null;const u=new rs(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return fa(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fa(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fa(e,n)}buildRequest(){const e={requestUri:VR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Iu(n)}return e}}/**
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
 */function FR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BR(t){const e=Bl(Ul(t)).link,n=e?Bl(Ul(e)).deep_link_id:null,r=Bl(Ul(t)).deep_link_id;return(r?Bl(Ul(r)).link:null)||r||n||e||t}class tg{constructor(e){var n,r,o,a,u,d;const f=Bl(Ul(e)),m=(n=f.apiKey)!==null&&n!==void 0?n:null,y=(r=f.oobCode)!==null&&r!==void 0?r:null,_=FR((o=f.mode)!==null&&o!==void 0?o:null);Ce(m&&y&&_,"argument-error"),this.apiKey=m,this.operation=_,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const n=BR(e);try{return new tg(n)}catch{return null}}}/**
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
 */class Da{constructor(){this.providerId=Da.PROVIDER_ID}static credential(e,n){return su._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tg.parseLink(n);return Ce(r,"argument-error"),su._fromEmailAndCode(e,r.code,r.tenantId)}}Da.PROVIDER_ID="password";Da.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Da.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class EI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bu extends EI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Gi extends bu{constructor(){super("facebook.com")}static credential(e){return rs._fromParams({providerId:Gi.PROVIDER_ID,signInMethod:Gi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gi.credentialFromTaggedObject(e)}static credentialFromError(e){return Gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gi.credential(e.oauthAccessToken)}catch{return null}}}Gi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gi.PROVIDER_ID="facebook.com";/**
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
 */class qi extends bu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return rs._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qi.credential(n,r)}catch{return null}}}qi.GOOGLE_SIGN_IN_METHOD="google.com";qi.PROVIDER_ID="google.com";/**
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
 */class Ki extends bu{constructor(){super("github.com")}static credential(e){return rs._fromParams({providerId:Ki.PROVIDER_ID,signInMethod:Ki.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ki.credentialFromTaggedObject(e)}static credentialFromError(e){return Ki.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ki.credential(e.oauthAccessToken)}catch{return null}}}Ki.GITHUB_SIGN_IN_METHOD="github.com";Ki.PROVIDER_ID="github.com";/**
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
 */class Qi extends bu{constructor(){super("twitter.com")}static credential(e,n){return rs._fromParams({providerId:Qi.PROVIDER_ID,signInMethod:Qi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qi.credentialFromTaggedObject(e)}static credentialFromError(e){return Qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qi.credential(n,r)}catch{return null}}}Qi.TWITTER_SIGN_IN_METHOD="twitter.com";Qi.PROVIDER_ID="twitter.com";/**
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
 */async function UR(t,e){return Tu(t,"POST","/v1/accounts:signUp",mo(t,e))}/**
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
 */class is{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const a=await vr._fromIdTokenResponse(e,r,o),u=uw(r);return new is({user:a,providerId:u,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=uw(r);return new is({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function uw(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Nd extends yi{constructor(e,n,r,o){var a;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,Nd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new Nd(e,n,r,o)}}function II(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Nd._fromErrorAndOperation(t,a,e,r):a})}async function jR(t,e,n=!1){const r=await ou(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return is._forOperation(t,"link",r)}/**
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
 */async function $R(t,e,n=!1){const{auth:r}=t;if(Yn(r.app))return Promise.reject(hi(r));const o="reauthenticate";try{const a=await ou(t,II(r,o,e,t),n);Ce(a.idToken,r,"internal-error");const u=Jm(a.idToken);Ce(u,r,"internal-error");const{sub:d}=u;return Ce(t.uid===d,r,"user-mismatch"),is._forOperation(t,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Er(r,"user-mismatch"),a}}/**
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
 */async function SI(t,e,n=!1){if(Yn(t.app))return Promise.reject(hi(t));const r="signIn",o=await II(t,r,e),a=await is._fromIdTokenResponse(t,r,o);return n||await t._updateCurrentUser(a.user),a}async function zR(t,e){return SI(ls(t),e)}/**
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
 */async function TI(t){const e=ls(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WR(t,e,n){if(Yn(t.app))return Promise.reject(hi(t));const r=ls(t),u=await pm(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",UR).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&TI(t),f}),d=await is._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(d.user),d}function HR(t,e,n){return Yn(t.app)?Promise.reject(hi(t)):zR(an(t),Da.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&TI(t),r})}function GR(t,e,n,r){return an(t).onIdTokenChanged(e,n,r)}function qR(t,e,n){return an(t).beforeAuthStateChanged(e,n)}function KR(t,e,n,r){return an(t).onAuthStateChanged(e,n,r)}function QR(t){return an(t).signOut()}const Od="__sak";/**
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
 */class bI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Od,"1"),this.storage.removeItem(Od),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const YR=1e3,XR=10;class CI extends bI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!n&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);pR()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,XR):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}CI.type="LOCAL";const JR=CI;/**
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
 */class AI extends bI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}AI.type="SESSION";const PI=AI;/**
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
 */function ZR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class hh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new hh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:a}=n.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const d=Array.from(u).map(async m=>m(n.origin,a)),f=await ZR(d);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hh.receivers=[];/**
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
 */function ng(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class ex{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const m=ng("",20);o.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(_){const w=_;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(w.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Mr(){return window}function tx(t){Mr().location.href=t}/**
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
 */function RI(){return typeof Mr().WorkerGlobalScope<"u"&&typeof Mr().importScripts=="function"}async function nx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ix(){return RI()?self:null}/**
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
 */const xI="firebaseLocalStorageDb",ox=1,Ld="firebaseLocalStorage",kI="fbase_key";class Cu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fh(t,e){return t.transaction([Ld],e?"readwrite":"readonly").objectStore(Ld)}function sx(){const t=indexedDB.deleteDatabase(xI);return new Cu(t).toPromise()}function mm(){const t=indexedDB.open(xI,ox);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ld,{keyPath:kI})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ld)?e(r):(r.close(),await sx(),e(await mm()))})})}async function cw(t,e,n){const r=fh(t,!0).put({[kI]:e,value:n});return new Cu(r).toPromise()}async function ax(t,e){const n=fh(t,!1).get(e),r=await new Cu(n).toPromise();return r===void 0?null:r.value}function dw(t,e){const n=fh(t,!0).delete(e);return new Cu(n).toPromise()}const lx=800,ux=3;class DI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ux)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return RI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hh._getInstance(ix()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nx(),!this.activeServiceWorker)return;this.sender=new ex(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mm();return await cw(e,Od,"1"),await dw(e,Od),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>cw(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ax(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=fh(o,!1).getAll();return new Cu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}DI.type="LOCAL";const cx=DI;new Su(3e4,6e4);/**
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
 */function dx(t,e){return e?ci(e):(Ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class rg extends eg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fa(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fa(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fa(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hx(t){return SI(t.auth,new rg(t),t.bypassAuthState)}function fx(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),$R(n,new rg(t),t.bypassAuthState)}async function px(t){const{auth:e,user:n}=t;return Ce(n,e,"internal-error"),jR(n,new rg(t),t.bypassAuthState)}/**
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
 */class NI{constructor(e,n,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hx;case"linkViaPopup":case"linkViaRedirect":return px;case"reauthViaPopup":case"reauthViaRedirect":return fx;default:Er(this.auth,"internal-error")}}resolve(e){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){mi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const mx=new Su(2e3,1e4);class ca extends NI{constructor(e,n,r,o,a){super(e,n,o,a),this.provider=r,this.authWindow=null,this.pollId=null,ca.currentPopupAction&&ca.currentPopupAction.cancel(),ca.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){mi(this.filter.length===1,"Popup operations only handle one event");const e=ng();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Lr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ca.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mx.get())};e()}}ca.currentPopupAction=null;/**
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
 */const gx="pendingRedirect",pd=new Map;class vx extends NI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=pd.get(this.auth._key());if(!e){try{const r=await yx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}pd.set(this.auth._key(),e)}return this.bypassAuthState||pd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yx(t,e){const n=Ex(e),r=wx(t);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function _x(t,e){pd.set(t._key(),e)}function wx(t){return ci(t._redirectPersistence)}function Ex(t){return fd(gx,t.config.apiKey,t.name)}async function Ix(t,e,n=!1){if(Yn(t.app))return Promise.reject(hi(t));const r=ls(t),o=dx(r,e),u=await new vx(r,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const Sx=10*60*1e3;class Tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!OI(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Lr(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(hw(e))}saveEventToCache(e){this.cachedEventUids.add(hw(e)),this.lastProcessedEventTime=Date.now()}}function hw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function OI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return OI(t);default:return!1}}/**
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
 */async function Cx(t,e={}){return go(t,"GET","/v1/projects",e)}/**
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
 */const Ax=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Px=/^https?/;async function Rx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cx(t);for(const n of e)try{if(xx(n))return}catch{}Er(t,"unauthorized-domain")}function xx(t){const e=hm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===r}if(!Px.test(n))return!1;if(Ax.test(t))return r===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const kx=new Su(3e4,6e4);function fw(){const t=Mr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dx(t){return new Promise((e,n)=>{var r,o,a;function u(){fw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{fw(),n(Lr(t,"network-request-failed"))},timeout:kx.get()})}if(!((o=(r=Mr().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Mr().gapi)===null||a===void 0)&&a.load)u();else{const d=SR("iframefcb");return Mr()[d]=()=>{gapi.load?u():n(Lr(t,"network-request-failed"))},yI(`${IR()}?onload=${d}`).catch(f=>n(f))}}).catch(e=>{throw md=null,e})}let md=null;function Nx(t){return md=md||Dx(t),md}/**
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
 */const Ox=new Su(5e3,15e3),Lx="__/auth/iframe",Mx="emulator/auth/iframe",Vx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bx(t){const e=t.config;Ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xm(e,Mx):`https://${t.config.authDomain}/${Lx}`,r={apiKey:e.apiKey,appName:t.name,v:ka},o=Fx.get(t.config.apiHost);o&&(r.eid=o);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Iu(r).slice(1)}`}async function Ux(t){const e=await Nx(t),n=Mr().gapi;return Ce(n,t,"internal-error"),e.open({where:document.body,url:Bx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Vx,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Lr(t,"network-request-failed"),d=Mr().setTimeout(()=>{a(u)},Ox.get());function f(){Mr().clearTimeout(d),o(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const jx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$x=500,zx=600,Wx="_blank",Hx="http://localhost";class pw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Gx(t,e,n,r=$x,o=zx){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let d="";const f=Object.assign(Object.assign({},jx),{width:r.toString(),height:o.toString(),top:a,left:u}),m=sn().toLowerCase();n&&(d=dI(m)?Wx:n),uI(m)&&(e=e||Hx,f.scrollbars="yes");const y=Object.entries(f).reduce((w,[I,b])=>`${w}${I}=${b},`,"");if(fR(m)&&d!=="_self")return qx(e||"",d),new pw(null);const _=window.open(e||"",d,y);Ce(_,t,"popup-blocked");try{_.focus()}catch{}return new pw(_)}function qx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Kx="__/auth/handler",Qx="emulator/auth/handler",Yx=encodeURIComponent("fac");async function mw(t,e,n,r,o,a){Ce(t.config.authDomain,t,"auth-domain-config-required"),Ce(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ka,eventId:o};if(e instanceof EI){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",LA(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))u[y]=_}if(e instanceof bu){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(u.scopes=y.join(","))}t.tenantId&&(u.tid=t.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await t._getAppCheckToken(),m=f?`#${Yx}=${encodeURIComponent(f)}`:"";return`${Xx(t)}?${Iu(d).slice(1)}${m}`}function Xx({config:t}){return t.emulator?Xm(t,Qx):`https://${t.authDomain}/${Kx}`}/**
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
 */const kp="webStorageSupport";class Jx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=PI,this._completeRedirectFn=Ix,this._overrideRedirectResult=_x}async _openPopup(e,n,r,o){var a;mi((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await mw(e,n,r,hm(),o);return Gx(e,u,ng())}async _openRedirect(e,n,r,o){await this._originValidation(e);const a=await mw(e,n,r,hm(),o);return tx(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:a}=this.eventManagers[n];return o?Promise.resolve(o):(mi(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ux(e),r=new Tx(e);return n.register("authEvent",o=>(Ce(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(kp,{type:kp},o=>{var a;const u=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[kp];u!==void 0&&n(!!u),Er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gI()||cI()||Zm()}}const Zx=Jx;var gw="@firebase/auth",vw="1.10.8";/**
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
 */class ek{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function tk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nk(t){_a(new ns("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=r.options;Ce(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vI(t)},m=new _R(r,o,a,f);return RR(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_a(new ns("auth-internal",e=>{const n=ls(e.getProvider("auth").getImmediate());return(r=>new ek(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),eo(gw,vw,tk(t)),eo(gw,vw,"esm2017")}/**
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
 */const rk=5*60,ik=GE("authIdTokenMaxAge")||rk;let yw=null;const ok=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ik)return;const o=n==null?void 0:n.token;yw!==o&&(yw=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function sk(t=JE()){const e=Qm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=PR(t,{popupRedirectResolver:Zx,persistence:[cx,JR,PI]}),r=GE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=ok(a.toString());qR(n,u,()=>u(n.currentUser)),GR(n,d=>u(d))}}const o=WE("auth");return o&&xR(n,`http://${o}`),n}function ak(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=o=>{const a=Lr("internal-error");a.customData=o,n(a)},r.type="text/javascript",r.charset="UTF-8",ak().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nk("Browser");var lk="firebase",uk="11.10.0";/**
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
 */eo(lk,uk,"app");var _w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var to,LI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,A){function R(){}R.prototype=A.prototype,P.D=A.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(N,L,j){for(var C=Array(arguments.length-2),be=2;be<arguments.length;be++)C[be-2]=arguments[be];return A.prototype[L].apply(N,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(P,A,R){R||(R=0);var N=Array(16);if(typeof A=="string")for(var L=0;16>L;++L)N[L]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(L=0;16>L;++L)N[L]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=P.g[0],R=P.g[1],L=P.g[2];var j=P.g[3],C=A+(j^R&(L^j))+N[0]+3614090360&4294967295;A=R+(C<<7&4294967295|C>>>25),C=j+(L^A&(R^L))+N[1]+3905402710&4294967295,j=A+(C<<12&4294967295|C>>>20),C=L+(R^j&(A^R))+N[2]+606105819&4294967295,L=j+(C<<17&4294967295|C>>>15),C=R+(A^L&(j^A))+N[3]+3250441966&4294967295,R=L+(C<<22&4294967295|C>>>10),C=A+(j^R&(L^j))+N[4]+4118548399&4294967295,A=R+(C<<7&4294967295|C>>>25),C=j+(L^A&(R^L))+N[5]+1200080426&4294967295,j=A+(C<<12&4294967295|C>>>20),C=L+(R^j&(A^R))+N[6]+2821735955&4294967295,L=j+(C<<17&4294967295|C>>>15),C=R+(A^L&(j^A))+N[7]+4249261313&4294967295,R=L+(C<<22&4294967295|C>>>10),C=A+(j^R&(L^j))+N[8]+1770035416&4294967295,A=R+(C<<7&4294967295|C>>>25),C=j+(L^A&(R^L))+N[9]+2336552879&4294967295,j=A+(C<<12&4294967295|C>>>20),C=L+(R^j&(A^R))+N[10]+4294925233&4294967295,L=j+(C<<17&4294967295|C>>>15),C=R+(A^L&(j^A))+N[11]+2304563134&4294967295,R=L+(C<<22&4294967295|C>>>10),C=A+(j^R&(L^j))+N[12]+1804603682&4294967295,A=R+(C<<7&4294967295|C>>>25),C=j+(L^A&(R^L))+N[13]+4254626195&4294967295,j=A+(C<<12&4294967295|C>>>20),C=L+(R^j&(A^R))+N[14]+2792965006&4294967295,L=j+(C<<17&4294967295|C>>>15),C=R+(A^L&(j^A))+N[15]+1236535329&4294967295,R=L+(C<<22&4294967295|C>>>10),C=A+(L^j&(R^L))+N[1]+4129170786&4294967295,A=R+(C<<5&4294967295|C>>>27),C=j+(R^L&(A^R))+N[6]+3225465664&4294967295,j=A+(C<<9&4294967295|C>>>23),C=L+(A^R&(j^A))+N[11]+643717713&4294967295,L=j+(C<<14&4294967295|C>>>18),C=R+(j^A&(L^j))+N[0]+3921069994&4294967295,R=L+(C<<20&4294967295|C>>>12),C=A+(L^j&(R^L))+N[5]+3593408605&4294967295,A=R+(C<<5&4294967295|C>>>27),C=j+(R^L&(A^R))+N[10]+38016083&4294967295,j=A+(C<<9&4294967295|C>>>23),C=L+(A^R&(j^A))+N[15]+3634488961&4294967295,L=j+(C<<14&4294967295|C>>>18),C=R+(j^A&(L^j))+N[4]+3889429448&4294967295,R=L+(C<<20&4294967295|C>>>12),C=A+(L^j&(R^L))+N[9]+568446438&4294967295,A=R+(C<<5&4294967295|C>>>27),C=j+(R^L&(A^R))+N[14]+3275163606&4294967295,j=A+(C<<9&4294967295|C>>>23),C=L+(A^R&(j^A))+N[3]+4107603335&4294967295,L=j+(C<<14&4294967295|C>>>18),C=R+(j^A&(L^j))+N[8]+1163531501&4294967295,R=L+(C<<20&4294967295|C>>>12),C=A+(L^j&(R^L))+N[13]+2850285829&4294967295,A=R+(C<<5&4294967295|C>>>27),C=j+(R^L&(A^R))+N[2]+4243563512&4294967295,j=A+(C<<9&4294967295|C>>>23),C=L+(A^R&(j^A))+N[7]+1735328473&4294967295,L=j+(C<<14&4294967295|C>>>18),C=R+(j^A&(L^j))+N[12]+2368359562&4294967295,R=L+(C<<20&4294967295|C>>>12),C=A+(R^L^j)+N[5]+4294588738&4294967295,A=R+(C<<4&4294967295|C>>>28),C=j+(A^R^L)+N[8]+2272392833&4294967295,j=A+(C<<11&4294967295|C>>>21),C=L+(j^A^R)+N[11]+1839030562&4294967295,L=j+(C<<16&4294967295|C>>>16),C=R+(L^j^A)+N[14]+4259657740&4294967295,R=L+(C<<23&4294967295|C>>>9),C=A+(R^L^j)+N[1]+2763975236&4294967295,A=R+(C<<4&4294967295|C>>>28),C=j+(A^R^L)+N[4]+1272893353&4294967295,j=A+(C<<11&4294967295|C>>>21),C=L+(j^A^R)+N[7]+4139469664&4294967295,L=j+(C<<16&4294967295|C>>>16),C=R+(L^j^A)+N[10]+3200236656&4294967295,R=L+(C<<23&4294967295|C>>>9),C=A+(R^L^j)+N[13]+681279174&4294967295,A=R+(C<<4&4294967295|C>>>28),C=j+(A^R^L)+N[0]+3936430074&4294967295,j=A+(C<<11&4294967295|C>>>21),C=L+(j^A^R)+N[3]+3572445317&4294967295,L=j+(C<<16&4294967295|C>>>16),C=R+(L^j^A)+N[6]+76029189&4294967295,R=L+(C<<23&4294967295|C>>>9),C=A+(R^L^j)+N[9]+3654602809&4294967295,A=R+(C<<4&4294967295|C>>>28),C=j+(A^R^L)+N[12]+3873151461&4294967295,j=A+(C<<11&4294967295|C>>>21),C=L+(j^A^R)+N[15]+530742520&4294967295,L=j+(C<<16&4294967295|C>>>16),C=R+(L^j^A)+N[2]+3299628645&4294967295,R=L+(C<<23&4294967295|C>>>9),C=A+(L^(R|~j))+N[0]+4096336452&4294967295,A=R+(C<<6&4294967295|C>>>26),C=j+(R^(A|~L))+N[7]+1126891415&4294967295,j=A+(C<<10&4294967295|C>>>22),C=L+(A^(j|~R))+N[14]+2878612391&4294967295,L=j+(C<<15&4294967295|C>>>17),C=R+(j^(L|~A))+N[5]+4237533241&4294967295,R=L+(C<<21&4294967295|C>>>11),C=A+(L^(R|~j))+N[12]+1700485571&4294967295,A=R+(C<<6&4294967295|C>>>26),C=j+(R^(A|~L))+N[3]+2399980690&4294967295,j=A+(C<<10&4294967295|C>>>22),C=L+(A^(j|~R))+N[10]+4293915773&4294967295,L=j+(C<<15&4294967295|C>>>17),C=R+(j^(L|~A))+N[1]+2240044497&4294967295,R=L+(C<<21&4294967295|C>>>11),C=A+(L^(R|~j))+N[8]+1873313359&4294967295,A=R+(C<<6&4294967295|C>>>26),C=j+(R^(A|~L))+N[15]+4264355552&4294967295,j=A+(C<<10&4294967295|C>>>22),C=L+(A^(j|~R))+N[6]+2734768916&4294967295,L=j+(C<<15&4294967295|C>>>17),C=R+(j^(L|~A))+N[13]+1309151649&4294967295,R=L+(C<<21&4294967295|C>>>11),C=A+(L^(R|~j))+N[4]+4149444226&4294967295,A=R+(C<<6&4294967295|C>>>26),C=j+(R^(A|~L))+N[11]+3174756917&4294967295,j=A+(C<<10&4294967295|C>>>22),C=L+(A^(j|~R))+N[2]+718787259&4294967295,L=j+(C<<15&4294967295|C>>>17),C=R+(j^(L|~A))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+A&4294967295,P.g[1]=P.g[1]+(L+(C<<21&4294967295|C>>>11))&4294967295,P.g[2]=P.g[2]+L&4294967295,P.g[3]=P.g[3]+j&4294967295}r.prototype.u=function(P,A){A===void 0&&(A=P.length);for(var R=A-this.blockSize,N=this.B,L=this.h,j=0;j<A;){if(L==0)for(;j<=R;)o(this,P,j),j+=this.blockSize;if(typeof P=="string"){for(;j<A;)if(N[L++]=P.charCodeAt(j++),L==this.blockSize){o(this,N),L=0;break}}else for(;j<A;)if(N[L++]=P[j++],L==this.blockSize){o(this,N),L=0;break}}this.h=L,this.o+=A},r.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var A=1;A<P.length-8;++A)P[A]=0;var R=8*this.o;for(A=P.length-8;A<P.length;++A)P[A]=R&255,R/=256;for(this.u(P),P=Array(16),A=R=0;4>A;++A)for(var N=0;32>N;N+=8)P[R++]=this.g[A]>>>N&255;return P};function a(P,A){var R=d;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=A(P)}function u(P,A){this.h=A;for(var R=[],N=!0,L=P.length-1;0<=L;L--){var j=P[L]|0;N&&j==A||(R[L]=j,N=!1)}this.g=R}var d={};function f(P){return-128<=P&&128>P?a(P,function(A){return new u([A|0],0>A?-1:0)}):new u([P|0],0>P?-1:0)}function m(P){if(isNaN(P)||!isFinite(P))return _;if(0>P)return x(m(-P));for(var A=[],R=1,N=0;P>=R;N++)A[N]=P/R|0,R*=4294967296;return new u(A,0)}function y(P,A){if(P.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P.charAt(0)=="-")return x(y(P.substring(1),A));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=m(Math.pow(A,8)),N=_,L=0;L<P.length;L+=8){var j=Math.min(8,P.length-L),C=parseInt(P.substring(L,L+j),A);8>j?(j=m(Math.pow(A,j)),N=N.j(j).add(m(C))):(N=N.j(R),N=N.add(m(C)))}return N}var _=f(0),w=f(1),I=f(16777216);t=u.prototype,t.m=function(){if(D(this))return-x(this).m();for(var P=0,A=1,R=0;R<this.g.length;R++){var N=this.i(R);P+=(0<=N?N:4294967296+N)*A,A*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(b(this))return"0";if(D(this))return"-"+x(this).toString(P);for(var A=m(Math.pow(P,6)),R=this,N="";;){var L=$(R,A).g;R=O(R,L.j(A));var j=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=L,b(R))return j+N;for(;6>j.length;)j="0"+j;N=j+N}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function b(P){if(P.h!=0)return!1;for(var A=0;A<P.g.length;A++)if(P.g[A]!=0)return!1;return!0}function D(P){return P.h==-1}t.l=function(P){return P=O(this,P),D(P)?-1:b(P)?0:1};function x(P){for(var A=P.g.length,R=[],N=0;N<A;N++)R[N]=~P.g[N];return new u(R,~P.h).add(w)}t.abs=function(){return D(this)?x(this):this},t.add=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],N=0,L=0;L<=A;L++){var j=N+(this.i(L)&65535)+(P.i(L)&65535),C=(j>>>16)+(this.i(L)>>>16)+(P.i(L)>>>16);N=C>>>16,j&=65535,C&=65535,R[L]=C<<16|j}return new u(R,R[R.length-1]&-2147483648?-1:0)};function O(P,A){return P.add(x(A))}t.j=function(P){if(b(this)||b(P))return _;if(D(this))return D(P)?x(this).j(x(P)):x(x(this).j(P));if(D(P))return x(this.j(x(P)));if(0>this.l(I)&&0>P.l(I))return m(this.m()*P.m());for(var A=this.g.length+P.g.length,R=[],N=0;N<2*A;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var L=0;L<P.g.length;L++){var j=this.i(N)>>>16,C=this.i(N)&65535,be=P.i(L)>>>16,Qe=P.i(L)&65535;R[2*N+2*L]+=C*Qe,V(R,2*N+2*L),R[2*N+2*L+1]+=j*Qe,V(R,2*N+2*L+1),R[2*N+2*L+1]+=C*be,V(R,2*N+2*L+1),R[2*N+2*L+2]+=j*be,V(R,2*N+2*L+2)}for(N=0;N<A;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=A;N<2*A;N++)R[N]=0;return new u(R,0)};function V(P,A){for(;(P[A]&65535)!=P[A];)P[A+1]+=P[A]>>>16,P[A]&=65535,A++}function B(P,A){this.g=P,this.h=A}function $(P,A){if(b(A))throw Error("division by zero");if(b(P))return new B(_,_);if(D(P))return A=$(x(P),A),new B(x(A.g),x(A.h));if(D(A))return A=$(P,x(A)),new B(x(A.g),A.h);if(30<P.g.length){if(D(P)||D(A))throw Error("slowDivide_ only works with positive integers.");for(var R=w,N=A;0>=N.l(P);)R=W(R),N=W(N);var L=Q(R,1),j=Q(N,1);for(N=Q(N,2),R=Q(R,2);!b(N);){var C=j.add(N);0>=C.l(P)&&(L=L.add(R),j=C),N=Q(N,1),R=Q(R,1)}return A=O(P,L.j(A)),new B(L,A)}for(L=_;0<=P.l(A);){for(R=Math.max(1,Math.floor(P.m()/A.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),j=m(R),C=j.j(A);D(C)||0<C.l(P);)R-=N,j=m(R),C=j.j(A);b(j)&&(j=w),L=L.add(j),P=O(P,C)}return new B(L,P)}t.A=function(P){return $(this,P).h},t.and=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)&P.i(N);return new u(R,this.h&P.h)},t.or=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)|P.i(N);return new u(R,this.h|P.h)},t.xor=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)^P.i(N);return new u(R,this.h^P.h)};function W(P){for(var A=P.g.length+1,R=[],N=0;N<A;N++)R[N]=P.i(N)<<1|P.i(N-1)>>>31;return new u(R,P.h)}function Q(P,A){var R=A>>5;A%=32;for(var N=P.g.length-R,L=[],j=0;j<N;j++)L[j]=0<A?P.i(j+R)>>>A|P.i(j+R+1)<<32-A:P.i(j+R);return new u(L,P.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,LI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=y,to=u}).apply(typeof _w<"u"?_w:typeof self<"u"?self:typeof window<"u"?window:{});var Jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var MI,jl,VI,gd,gm,FI,BI,UI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,E){return c==Array.prototype||c==Object.prototype||(c[g]=E.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Jc=="object"&&Jc];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=n(this);function o(c,g){if(g)e:{var E=r;c=c.split(".");for(var T=0;T<c.length-1;T++){var H=c[T];if(!(H in E))break e;E=E[H]}c=c[c.length-1],T=E[c],g=g(T),g!=T&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var E=0,T=!1,H={next:function(){if(!T&&E<c.length){var Y=E++;return{value:g(Y,c[Y]),done:!1}}return T=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}o("Array.prototype.values",function(c){return c||function(){return a(this,function(g,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function y(c,g,E){return c.call.apply(c.bind,arguments)}function _(c,g,E){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var H=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(H,T),c.apply(g,H)}}return function(){return c.apply(g,arguments)}}function w(c,g,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:_,w.apply(null,arguments)}function I(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var T=E.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function b(c,g){function E(){}E.prototype=g.prototype,c.aa=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(T,H,Y){for(var ue=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)ue[tt-2]=arguments[tt];return g.prototype[H].apply(T,ue)}}function D(c){const g=c.length;if(0<g){const E=Array(g);for(let T=0;T<g;T++)E[T]=c[T];return E}return[]}function x(c,g){for(let E=1;E<arguments.length;E++){const T=arguments[E];if(f(T)){const H=c.length||0,Y=T.length||0;c.length=H+Y;for(let ue=0;ue<Y;ue++)c[H+ue]=T[ue]}else c.push(T)}}class O{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function V(c){return/^[\s\xa0]*$/.test(c)}function B(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function $(c){return $[" "](c),c}$[" "]=function(){};var W=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function Q(c,g,E){for(const T in c)g.call(E,c[T],T,c)}function P(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function A(c){const g={};for(const E in c)g[E]=c[E];return g}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let E,T;for(let H=1;H<arguments.length;H++){T=arguments[H];for(E in T)c[E]=T[E];for(let Y=0;Y<R.length;Y++)E=R[Y],Object.prototype.hasOwnProperty.call(T,E)&&(c[E]=T[E])}}function L(c){var g=1;c=c.split(":");const E=[];for(;0<g&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function j(c){d.setTimeout(()=>{throw c},0)}function C(){var c=ce;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class be{constructor(){this.h=this.g=null}add(g,E){const T=Qe.get();T.set(g,E),this.h?this.h.next=T:this.g=T,this.h=T}}var Qe=new O(()=>new Ye,c=>c.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,ie=!1,ce=new be,ae=()=>{const c=d.Promise.resolve(void 0);Me=()=>{c.then(U)}};var U=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(E){j(E)}var g=Qe;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ie=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Pe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};d.addEventListener("test",E,g),d.removeEventListener("test",E,g)}catch{}return c}();function we(c,g){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(W){e:{try{$(g.nodeName);var H=!0;break e}catch{}H=!1}H||(g=null)}}else E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement);this.relatedTarget=g,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:xe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&we.aa.h.call(this)}}b(we,pe);var xe={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Fe(c,g,E,T,H){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!T,this.ha=H,this.key=++Ne,this.da=this.fa=!1}function et(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Dt(c){this.src=c,this.g={},this.h=0}Dt.prototype.add=function(c,g,E,T,H){var Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);var ue=Mn(c,g,T,H);return-1<ue?(g=c[ue],E||(g.fa=!1)):(g=new Fe(g,this.src,Y,!!T,H),g.fa=E,c.push(g)),g};function Nt(c,g){var E=g.type;if(E in c.g){var T=c.g[E],H=Array.prototype.indexOf.call(T,g,void 0),Y;(Y=0<=H)&&Array.prototype.splice.call(T,H,1),Y&&(et(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Mn(c,g,E,T){for(var H=0;H<c.length;++H){var Y=c[H];if(!Y.da&&Y.listener==g&&Y.capture==!!E&&Y.ha==T)return H}return-1}var Vn="closure_lm_"+(1e6*Math.random()|0),zr={};function Wr(c,g,E,T,H){if(Array.isArray(g)){for(var Y=0;Y<g.length;Y++)Wr(c,g[Y],E,T,H);return null}return E=ja(E),c&&c[Oe]?c.K(g,E,m(T)?!!T.capture:!1,H):Hr(c,g,E,!1,T,H)}function Hr(c,g,E,T,H,Y){if(!g)throw Error("Invalid event type");var ue=m(H)?!!H.capture:!!H,tt=fs(c);if(tt||(c[Vn]=tt=new Dt(c)),E=tt.add(g,E,T,ue,Y),E.proxy)return E;if(T=hs(),E.proxy=T,T.src=c,T.listener=E,c.addEventListener)Pe||(H=ue),H===void 0&&(H=!1),c.addEventListener(g.toString(),T,H);else if(c.attachEvent)c.attachEvent(Gr(g.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return E}function hs(){function c(E){return g.call(c.src,c.listener,E)}const g=Ua;return c}function Fn(c,g,E,T,H){if(Array.isArray(g))for(var Y=0;Y<g.length;Y++)Fn(c,g[Y],E,T,H);else T=m(T)?!!T.capture:!!T,E=ja(E),c&&c[Oe]?(c=c.i,g=String(g).toString(),g in c.g&&(Y=c.g[g],E=Mn(Y,E,T,H),-1<E&&(et(Y[E]),Array.prototype.splice.call(Y,E,1),Y.length==0&&(delete c.g[g],c.h--)))):c&&(c=fs(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Mn(g,E,T,H)),(E=-1<c?g[c]:null)&&Sn(E))}function Sn(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Oe])Nt(g.i,c);else{var E=c.type,T=c.proxy;g.removeEventListener?g.removeEventListener(E,T,c.capture):g.detachEvent?g.detachEvent(Gr(E),T):g.addListener&&g.removeListener&&g.removeListener(T),(E=fs(g))?(Nt(E,c),E.h==0&&(E.src=null,g[Vn]=null)):et(c)}}}function Gr(c){return c in zr?zr[c]:zr[c]="on"+c}function Ua(c,g){if(c.da)c=!0;else{g=new we(g,this);var E=c.listener,T=c.ha||c.src;c.fa&&Sn(c),c=E.call(T,g)}return c}function fs(c){return c=c[Vn],c instanceof Dt?c:null}var ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function ja(c){return typeof c=="function"?c:(c[ps]||(c[ps]=function(g){return c.handleEvent(g)}),c[ps])}function bt(){X.call(this),this.i=new Dt(this),this.M=this,this.F=null}b(bt,X),bt.prototype[Oe]=!0,bt.prototype.removeEventListener=function(c,g,E,T){Fn(this,c,g,E,T)};function Ct(c,g){var E,T=c.F;if(T)for(E=[];T;T=T.F)E.push(T);if(c=c.M,T=g.type||g,typeof g=="string")g=new pe(g,c);else if(g instanceof pe)g.target=g.target||c;else{var H=g;g=new pe(T,c),N(g,H)}if(H=!0,E)for(var Y=E.length-1;0<=Y;Y--){var ue=g.g=E[Y];H=qr(ue,T,!0,g)&&H}if(ue=g.g=c,H=qr(ue,T,!0,g)&&H,H=qr(ue,T,!1,g)&&H,E)for(Y=0;Y<E.length;Y++)ue=g.g=E[Y],H=qr(ue,T,!1,g)&&H}bt.prototype.N=function(){if(bt.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var E=c.g[g],T=0;T<E.length;T++)et(E[T]);delete c.g[g],c.h--}}this.F=null},bt.prototype.K=function(c,g,E,T){return this.i.add(String(c),g,!1,E,T)},bt.prototype.L=function(c,g,E,T){return this.i.add(String(c),g,!0,E,T)};function qr(c,g,E,T){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var H=!0,Y=0;Y<g.length;++Y){var ue=g[Y];if(ue&&!ue.da&&ue.capture==E){var tt=ue.listener,At=ue.ha||ue.src;ue.fa&&Nt(c.i,ue),H=tt.call(At,T)!==!1&&H}}return H&&!T.defaultPrevented}function $a(c,g,E){if(typeof c=="function")E&&(c=w(c,E));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:d.setTimeout(c,g||0)}function _i(c){c.g=$a(()=>{c.g=null,c.i&&(c.i=!1,_i(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class _o extends X{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:_i(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wo(c){X.call(this),this.h=c,this.g={}}b(wo,X);var za=[];function Wa(c){Q(c.g,function(g,E){this.g.hasOwnProperty(E)&&Sn(g)},c),c.g={}}wo.prototype.N=function(){wo.aa.N.call(this),Wa(this)},wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ha=d.JSON.stringify,Ga=d.JSON.parse,qa=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function Eo(){}Eo.prototype.h=null;function ms(c){return c.h||(c.h=c.i())}function gs(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ir(){pe.call(this,"d")}b(Ir,pe);function vs(){pe.call(this,"c")}b(vs,pe);var Sr={},Ka=null;function Io(){return Ka=Ka||new bt}Sr.La="serverreachability";function Qa(c){pe.call(this,Sr.La,c)}b(Qa,pe);function Kr(c){const g=Io();Ct(g,new Qa(g))}Sr.STAT_EVENT="statevent";function Ya(c,g){pe.call(this,Sr.STAT_EVENT,c),this.stat=g}b(Ya,pe);function vt(c){const g=Io();Ct(g,new Ya(g,c))}Sr.Ma="timingevent";function ys(c,g){pe.call(this,Sr.Ma,c),this.size=g}b(ys,pe);function nr(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},g)}function So(){this.g=!0}So.prototype.xa=function(){this.g=!1};function To(c,g,E,T,H,Y){c.info(function(){if(c.g)if(Y)for(var ue="",tt=Y.split("&"),At=0;At<tt.length;At++){var We=tt[At].split("=");if(1<We.length){var Ot=We[0];We=We[1];var wt=Ot.split("_");ue=2<=wt.length&&wt[1]=="type"?ue+(Ot+"="+We+"&"):ue+(Ot+"=redacted&")}}else ue=null;else ue=Y;return"XMLHTTP REQ ("+T+") [attempt "+H+"]: "+g+`
`+E+`
`+ue})}function _s(c,g,E,T,H,Y,ue){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+H+"]: "+g+`
`+E+`
`+Y+" "+ue})}function rr(c,g,E,T){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Fh(c,E)+(T?" "+T:"")})}function Xa(c,g){c.info(function(){return"TIMEOUT: "+g})}So.prototype.info=function(){};function Fh(c,g){if(!c.g)return g;if(!g)return null;try{var E=JSON.parse(g);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var T=E[c];if(!(2>T.length)){var H=T[1];if(Array.isArray(H)&&!(1>H.length)){var Y=H[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var ue=1;ue<H.length;ue++)H[ue]=""}}}}return Ha(E)}catch{return g}}var ws={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ou={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ir;function bo(){}b(bo,Eo),bo.prototype.g=function(){return new XMLHttpRequest},bo.prototype.i=function(){return{}},ir=new bo;function or(c,g,E,T){this.j=c,this.i=g,this.l=E,this.R=T||1,this.U=new wo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Lu}function Lu(){this.i=null,this.g="",this.h=!1}var Ja={},Es={};function Is(c,g,E){c.L=1,c.v=Ti(bn(g)),c.m=E,c.P=!0,Za(c,null)}function Za(c,g){c.F=Date.now(),it(c),c.A=bn(c.v);var E=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Ci(E.i,"t",T),c.C=0,E=c.j.J,c.h=new Lu,c.g=Zu(c.j,E?g:null,!c.m),0<c.O&&(c.M=new _o(w(c.Y,c,c.g),c.O)),g=c.U,E=c.g,T=c.ca;var H="readystatechange";Array.isArray(H)||(H&&(za[0]=H.toString()),H=za);for(var Y=0;Y<H.length;Y++){var ue=Wr(E,H[Y],T||g.handleEvent,!1,g.h||g);if(!ue)break;g.g[ue.key]=ue}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Kr(),To(c.i,c.u,c.A,c.l,c.R,c.m)}or.prototype.ca=function(c){c=c.target;const g=this.M;g&&pn(c)==3?g.j():this.Y(c)},or.prototype.Y=function(c){try{if(c==this.g)e:{const wt=pn(this.g);var g=this.g.Ba();const $n=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||ol(this.g)))){this.J||wt!=4||g==7||(g==8||0>=$n?Kr(3):Kr(2)),Co(this);var E=this.g.Z();this.X=E;t:if(Mu(this)){var T=ol(this.g);c="";var H=T.length,Y=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),wi(this);var ue="";break t}this.h.i=new d.TextDecoder}for(g=0;g<H;g++)this.h.h=!0,c+=this.h.i.decode(T[g],{stream:!(Y&&g==H-1)});T.length=0,this.h.g+=c,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,_s(this.i,this.u,this.A,this.l,this.R,wt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var tt,At=this.g;if((tt=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(tt)){var We=tt;break t}}We=null}if(E=We)rr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,el(this,E);else{this.o=!1,this.s=3,vt(12),Un(this),wi(this);break e}}if(this.P){E=!0;let An;for(;!this.J&&this.C<ue.length;)if(An=Bh(this,ue),An==Es){wt==4&&(this.s=4,vt(14),E=!1),rr(this.i,this.l,null,"[Incomplete Response]");break}else if(An==Ja){this.s=4,vt(15),rr(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else rr(this.i,this.l,An,null),el(this,An);if(Mu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||ue.length!=0||this.h.h||(this.s=1,vt(16),E=!1),this.o=this.o&&E,!E)rr(this.i,this.l,ue,"[Invalid Chunked Response]"),Un(this),wi(this);else if(0<ue.length&&!this.W){this.W=!0;var Ot=this.j;Ot.g==this&&Ot.ba&&!Ot.M&&(Ot.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),al(Ot),Ot.M=!0,vt(11))}}else rr(this.i,this.l,ue,null),el(this,ue);wt==4&&Un(this),this.o&&!this.J&&(wt==4?Ns(this.j,this):(this.o=!1,it(this)))}else Ps(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Un(this),wi(this)}}}catch{}finally{}};function Mu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Bh(c,g){var E=c.C,T=g.indexOf(`
`,E);return T==-1?Es:(E=Number(g.substring(E,T)),isNaN(E)?Ja:(T+=1,T+E>g.length?Es:(g=g.slice(T,T+E),c.C=T+E,g)))}or.prototype.cancel=function(){this.J=!0,Un(this)};function it(c){c.S=Date.now()+c.I,Vu(c,c.I)}function Vu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=nr(w(c.ba,c),g)}function Co(c){c.B&&(d.clearTimeout(c.B),c.B=null)}or.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Xa(this.i,this.A),this.L!=2&&(Kr(),vt(17)),Un(this),this.s=2,wi(this)):Vu(this,this.S-c)};function wi(c){c.j.G==0||c.J||Ns(c.j,c)}function Un(c){Co(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Wa(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function el(c,g){try{var E=c.j;if(E.G!=0&&(E.g==c||ln(E.h,c))){if(!c.K&&ln(E.h,c)&&E.G==3){try{var T=E.Da.g.parse(g)}catch{T=null}if(Array.isArray(T)&&T.length==3){var H=T;if(H[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)Ds(E),cr(E);else break e;ks(E),vt(18)}}else E.za=H[1],0<E.za-E.T&&37500>H[2]&&E.F&&E.v==0&&!E.C&&(E.C=nr(w(E.Za,E),6e3));if(1>=Bu(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Zr(E,11)}else if((c.K||E.g==c)&&Ds(E),!V(g))for(H=E.Da.g.parse(g),g=0;g<H.length;g++){let We=H[g];if(E.T=We[0],We=We[1],E.G==2)if(We[0]=="c"){E.K=We[1],E.ia=We[2];const Ot=We[3];Ot!=null&&(E.la=Ot,E.j.info("VER="+E.la));const wt=We[4];wt!=null&&(E.Aa=wt,E.j.info("SVER="+E.Aa));const $n=We[5];$n!=null&&typeof $n=="number"&&0<$n&&(T=1.5*$n,E.L=T,E.j.info("backChannelRequestTimeoutMs_="+T)),T=E;const An=c.g;if(An){const No=An.g?An.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(No){var Y=T.h;Y.g||No.indexOf("spdy")==-1&&No.indexOf("quic")==-1&&No.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(tl(Y,Y.h),Y.h=null))}if(T.D){const Ls=An.g?An.g.getResponseHeader("X-HTTP-Session-Id"):null;Ls&&(T.ya=Ls,rt(T.I,T.D,Ls))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),T=E;var ue=c;if(T.qa=Ju(T,T.J?T.ia:null,T.W),ue.K){Uu(T.h,ue);var tt=ue,At=T.L;At&&(tt.I=At),tt.B&&(Co(tt),it(tt)),T.g=ue}else Do(T);0<E.i.length&&Ar(E)}else We[0]!="stop"&&We[0]!="close"||Zr(E,7);else E.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?Zr(E,7):Ht(E):We[0]!="noop"&&E.l&&E.l.ta(We),E.v=0)}}Kr(4)}catch{}}var Fu=class{constructor(c,g){this.g=c,this.map=g}};function Ao(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Bu(c){return c.h?1:c.g?c.g.size:0}function ln(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function tl(c,g){c.g?c.g.add(g):c.h=g}function Uu(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Ao.prototype.cancel=function(){if(this.i=ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ju(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.D);return g}return D(c.i)}function Ss(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],E=c.length,T=0;T<E;T++)g.push(c[T]);return g}g=[],E=0;for(T in c)g[E++]=c[T];return g}function Ts(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var E=0;E<c;E++)g.push(E);return g}g=[],E=0;for(const T in c)g[E++]=T;return g}}}function Ei(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var E=Ts(c),T=Ss(c),H=T.length,Y=0;Y<H;Y++)g.call(void 0,T[Y],E&&E[Y],c)}var Po=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uh(c,g){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var T=c[E].indexOf("="),H=null;if(0<=T){var Y=c[E].substring(0,T);H=c[E].substring(T+1)}else Y=c[E];g(Y,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function Qr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Qr){this.h=c.h,Ro(this,c.j),this.o=c.o,this.g=c.g,Ii(this,c.s),this.l=c.l;var g=c.i,E=new Tr;E.i=g.i,g.g&&(E.g=new Map(g.g),E.h=g.h),Si(this,E),this.m=c.m}else c&&(g=String(c).match(Po))?(this.h=!1,Ro(this,g[1]||"",!0),this.o=ze(g[2]||""),this.g=ze(g[3]||"",!0),Ii(this,g[4]),this.l=ze(g[5]||"",!0),Si(this,g[6]||"",!0),this.m=ze(g[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}Qr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(bi(g,bs,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(bi(g,bs,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(bi(E,E.charAt(0)=="/"?Wu:zu,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",bi(E,nl)),c.join("")};function bn(c){return new Qr(c)}function Ro(c,g,E){c.j=E?ze(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function Ii(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function Si(c,g,E){g instanceof Tr?(c.i=g,br(c.i,c.h)):(E||(g=bi(g,Hu)),c.i=new Tr(g,c.h))}function rt(c,g,E){c.i.set(g,E)}function Ti(c){return rt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ze(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function bi(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,$u),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function $u(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var bs=/[#\/\?@]/g,zu=/[#\?:]/g,Wu=/[#\?]/g,Hu=/[#\?@]/g,nl=/#/g;function Tr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Wt(c){c.g||(c.g=new Map,c.h=0,c.i&&Uh(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}t=Tr.prototype,t.add=function(c,g){Wt(this),this.i=null,c=jn(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function sr(c,g){Wt(c),g=jn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function ar(c,g){return Wt(c),g=jn(c,g),c.g.has(g)}t.forEach=function(c,g){Wt(this),this.g.forEach(function(E,T){E.forEach(function(H){c.call(g,H,T,this)},this)},this)},t.na=function(){Wt(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),E=[];for(let T=0;T<g.length;T++){const H=c[T];for(let Y=0;Y<H.length;Y++)E.push(g[T])}return E},t.V=function(c){Wt(this);let g=[];if(typeof c=="string")ar(this,c)&&(g=g.concat(this.g.get(jn(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)g=g.concat(c[E])}return g},t.set=function(c,g){return Wt(this),this.i=null,c=jn(this,c),ar(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},t.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function Ci(c,g,E){sr(c,g),0<E.length&&(c.i=null,c.g.set(jn(c,g),D(E)),c.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var E=0;E<g.length;E++){var T=g[E];const Y=encodeURIComponent(String(T)),ue=this.V(T);for(T=0;T<ue.length;T++){var H=Y;ue[T]!==""&&(H+="="+encodeURIComponent(String(ue[T]))),c.push(H)}}return this.i=c.join("&")};function jn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function br(c,g){g&&!c.j&&(Wt(c),c.i=null,c.g.forEach(function(E,T){var H=T.toLowerCase();T!=H&&(sr(this,T),Ci(this,H,E))},c)),c.j=g}function jh(c,g){const E=new So;if(d.Image){const T=new Image;T.onload=I(fn,E,"TestLoadImage: loaded",!0,g,T),T.onerror=I(fn,E,"TestLoadImage: error",!1,g,T),T.onabort=I(fn,E,"TestLoadImage: abort",!1,g,T),T.ontimeout=I(fn,E,"TestLoadImage: timeout",!1,g,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else g(!1)}function Gu(c,g){const E=new So,T=new AbortController,H=setTimeout(()=>{T.abort(),fn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:T.signal}).then(Y=>{clearTimeout(H),Y.ok?fn(E,"TestPingServer: ok",!0,g):fn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(H),fn(E,"TestPingServer: error",!1,g)})}function fn(c,g,E,T,H){try{H&&(H.onload=null,H.onerror=null,H.onabort=null,H.ontimeout=null),T(E)}catch{}}function $h(){this.g=new qa}function qu(c,g,E){const T=E||"";try{Ei(c,function(H,Y){let ue=H;m(H)&&(ue=Ha(H)),g.push(T+Y+"="+encodeURIComponent(ue))})}catch(H){throw g.push(T+"type="+encodeURIComponent("_badmap")),H}}function Yr(c){this.l=c.Ub||null,this.j=c.eb||!1}b(Yr,Eo),Yr.prototype.g=function(){return new xo(this.l,this.j)},Yr.prototype.i=function(c){return function(){return c}}({});function xo(c,g){bt.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(xo,bt),t=xo.prototype,t.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ur(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||d).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ur(this)),this.g&&(this.readyState=3,ur(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ku(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ku(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?lr(this):ur(this),this.readyState==3&&Ku(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,lr(this))},t.Qa=function(c){this.g&&(this.response=c,lr(this))},t.ga=function(){this.g&&lr(this)};function lr(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ur(c)}t.setRequestHeader=function(c,g){this.u.append(c,g)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function ur(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(xo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Xr(c){let g="";return Q(c,function(E,T){g+=T,g+=":",g+=E,g+=`\r
`}),g}function Ai(c,g,E){e:{for(T in E){var T=!1;break e}T=!0}T||(E=Xr(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):rt(c,g,E))}function ct(c){bt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ct,bt);var zh=/^https?$/i,rl=["POST","PUT"];t=ct.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,g,E,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ir.g(),this.v=this.o?ms(this.o):ms(ir),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(Y){ko(this,Y);return}if(c=E||"",E=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var H in T)E.set(H,T[H]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Y of T.keys())E.set(Y,T.get(Y));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(E.keys()).find(Y=>Y.toLowerCase()=="content-type"),H=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(rl,g,void 0))||T||H||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,ue]of E)this.g.setRequestHeader(Y,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{As(this),this.u=!0,this.g.send(c),this.u=!1}catch(Y){ko(this,Y)}};function ko(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,Cs(c),Cn(c)}function Cs(c){c.A||(c.A=!0,Ct(c,"complete"),Ct(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ct(this,"complete"),Ct(this,"abort"),Cn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Cn(this,!0)),ct.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?il(this):this.bb())},t.bb=function(){il(this)};function il(c){if(c.h&&typeof u<"u"&&(!c.v[1]||pn(c)!=4||c.Z()!=2)){if(c.u&&pn(c)==4)$a(c.Ea,0,c);else if(Ct(c,"readystatechange"),pn(c)==4){c.h=!1;try{const ue=c.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var T;if(T=ue===0){var H=String(c.D).match(Po)[1]||null;!H&&d.self&&d.self.location&&(H=d.self.location.protocol.slice(0,-1)),T=!zh.test(H?H.toLowerCase():"")}E=T}if(E)Ct(c,"complete"),Ct(c,"success");else{c.m=6;try{var Y=2<pn(c)?c.g.statusText:""}catch{Y=""}c.l=Y+" ["+c.Z()+"]",Cs(c)}}finally{Cn(c)}}}}function Cn(c,g){if(c.g){As(c);const E=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ct(c,"ready");try{E.onreadystatechange=T}catch{}}}function As(c){c.I&&(d.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function pn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Ga(g)}};function ol(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ps(c){const g={};c=(c.g&&2<=pn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(V(c[T]))continue;var E=L(c[T]);const H=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Y=g[H]||[];g[H]=Y,Y.push(E)}P(g,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Cr(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function sl(c){this.Aa=0,this.i=[],this.j=new So,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Cr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Cr("baseRetryDelayMs",5e3,c),this.cb=Cr("retryDelaySeedMs",1e4,c),this.Wa=Cr("forwardChannelMaxRetries",2,c),this.wa=Cr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Ao(c&&c.concurrentRequestLimit),this.Da=new $h,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=sl.prototype,t.la=8,t.G=1,t.connect=function(c,g,E,T){vt(0),this.W=c,this.H=g||{},E&&T!==void 0&&(this.H.OSID=E,this.H.OAID=T),this.F=this.X,this.I=Ju(this,null,this.W),Ar(this)};function Ht(c){if(Rs(c),c.G==3){var g=c.U++,E=bn(c.I);if(rt(E,"SID",c.K),rt(E,"RID",g),rt(E,"TYPE","terminate"),Jr(c,E),g=new or(c,c.j,g),g.L=2,g.v=Ti(bn(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(g.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=g.v,E=!0),E||(g.g=Zu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),it(g)}Xu(c)}function cr(c){c.g&&(al(c),c.g.cancel(),c.g=null)}function Rs(c){cr(c),c.u&&(d.clearTimeout(c.u),c.u=null),Ds(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Ar(c){if(!Tn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Me||ae(),ie||(Me(),ie=!0),ce.add(g,c),c.B=0}}function Wh(c,g){return Bu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=nr(w(c.Ga,c,g),Yu(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const H=new or(this,this.j,c);let Y=this.o;if(this.S&&(Y?(Y=A(Y),N(Y,this.S)):Y=this.S),this.m!==null||this.O||(H.H=Y,Y=null),this.P)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var T=this.i[E];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(g+=T,4096<g){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=Pi(this,H,g),E=bn(this.I),rt(E,"RID",c),rt(E,"CVER",22),this.D&&rt(E,"X-HTTP-Session-Id",this.D),Jr(this,E),Y&&(this.O?g="headers="+encodeURIComponent(String(Xr(Y)))+"&"+g:this.m&&Ai(E,this.m,Y)),tl(this.h,H),this.Ua&&rt(E,"TYPE","init"),this.P?(rt(E,"$req",g),rt(E,"SID","null"),H.T=!0,Is(H,E,null)):Is(H,E,g),this.G=2}}else this.G==3&&(c?xs(this,c):this.i.length==0||Tn(this.h)||xs(this))};function xs(c,g){var E;g?E=g.l:E=c.U++;const T=bn(c.I);rt(T,"SID",c.K),rt(T,"RID",E),rt(T,"AID",c.T),Jr(c,T),c.m&&c.o&&Ai(T,c.m,c.o),E=new or(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),g&&(c.i=g.D.concat(c.i)),g=Pi(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),tl(c.h,E),Is(E,T,g)}function Jr(c,g){c.H&&Q(c.H,function(E,T){rt(g,T,E)}),c.l&&Ei({},function(E,T){rt(g,T,E)})}function Pi(c,g,E){E=Math.min(c.i.length,E);var T=c.l?w(c.l.Na,c.l,c):null;e:{var H=c.i;let Y=-1;for(;;){const ue=["count="+E];Y==-1?0<E?(Y=H[0].g,ue.push("ofs="+Y)):Y=0:ue.push("ofs="+Y);let tt=!0;for(let At=0;At<E;At++){let We=H[At].g;const Ot=H[At].map;if(We-=Y,0>We)Y=Math.max(0,H[At].g-100),tt=!1;else try{qu(Ot,ue,"req"+We+"_")}catch{T&&T(Ot)}}if(tt){T=ue.join("&");break e}}}return c=c.i.splice(0,E),g.D=c,T}function Do(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Me||ae(),ie||(Me(),ie=!0),ce.add(g,c),c.v=0}}function ks(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=nr(w(c.Fa,c),Yu(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Qu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=nr(w(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),cr(this),Qu(this))};function al(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Qu(c){c.g=new or(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=bn(c.qa);rt(g,"RID","rpc"),rt(g,"SID",c.K),rt(g,"AID",c.T),rt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&rt(g,"TO",c.ja),rt(g,"TYPE","xmlhttp"),Jr(c,g),c.m&&c.o&&Ai(g,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=Ti(bn(g)),E.m=null,E.P=!0,Za(E,c)}t.Za=function(){this.C!=null&&(this.C=null,cr(this),ks(this),vt(19))};function Ds(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Ns(c,g){var E=null;if(c.g==g){Ds(c),al(c),c.g=null;var T=2}else if(ln(c.h,g))E=g.D,Uu(c.h,g),T=1;else return;if(c.G!=0){if(g.o)if(T==1){E=g.m?g.m.length:0,g=Date.now()-g.F;var H=c.B;T=Io(),Ct(T,new ys(T,E)),Ar(c)}else Do(c);else if(H=g.s,H==3||H==0&&0<g.X||!(T==1&&Wh(c,g)||T==2&&ks(c)))switch(E&&0<E.length&&(g=c.h,g.i=g.i.concat(E)),H){case 1:Zr(c,5);break;case 4:Zr(c,10);break;case 3:Zr(c,6);break;default:Zr(c,2)}}}function Yu(c,g){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*g}function Zr(c,g){if(c.j.info("Error code "+g),g==2){var E=w(c.fb,c),T=c.Xa;const H=!T;T=new Qr(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ro(T,"https"),Ti(T),H?jh(T.toString(),E):Gu(T.toString(),E)}else vt(2);c.G=0,c.l&&c.l.sa(g),Xu(c),Rs(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Xu(c){if(c.G=0,c.ka=[],c.l){const g=ju(c.h);(g.length!=0||c.i.length!=0)&&(x(c.ka,g),x(c.ka,c.i),c.h.i.length=0,D(c.i),c.i.length=0),c.l.ra()}}function Ju(c,g,E){var T=E instanceof Qr?bn(E):new Qr(E);if(T.g!="")g&&(T.g=g+"."+T.g),Ii(T,T.s);else{var H=d.location;T=H.protocol,g=g?g+"."+H.hostname:H.hostname,H=+H.port;var Y=new Qr(null);T&&Ro(Y,T),g&&(Y.g=g),H&&Ii(Y,H),E&&(Y.l=E),T=Y}return E=c.D,g=c.ya,E&&g&&rt(T,E,g),rt(T,"VER",c.la),Jr(c,T),T}function Zu(c,g,E){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new ct(new Yr({eb:E})):new ct(c.pa),g.Ha(c.J),g}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ll(){}t=ll.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Os(){}Os.prototype.g=function(c,g){return new un(c,g)};function un(c,g){bt.call(this),this.g=new sl(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!V(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!V(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new Pr(this)}b(un,bt),un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},un.prototype.close=function(){Ht(this.g)},un.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=Ha(c),c=E);g.i.push(new Fu(g.Ya++,c)),g.G==3&&Ar(g)},un.prototype.N=function(){this.g.l=null,delete this.j,Ht(this.g),delete this.g,un.aa.N.call(this)};function ec(c){Ir.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}b(ec,Ir);function tc(){vs.call(this),this.status=1}b(tc,vs);function Pr(c){this.g=c}b(Pr,ll),Pr.prototype.ua=function(){Ct(this.g,"a")},Pr.prototype.ta=function(c){Ct(this.g,new ec(c))},Pr.prototype.sa=function(c){Ct(this.g,new tc)},Pr.prototype.ra=function(){Ct(this.g,"b")},Os.prototype.createWebChannel=Os.prototype.g,un.prototype.send=un.prototype.o,un.prototype.open=un.prototype.m,un.prototype.close=un.prototype.close,UI=function(){return new Os},BI=function(){return Io()},FI=Sr,gm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ws.NO_ERROR=0,ws.TIMEOUT=8,ws.HTTP_ERROR=6,gd=ws,Ou.COMPLETE="complete",VI=Ou,gs.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",bt.prototype.listen=bt.prototype.K,jl=gs,ct.prototype.listenOnce=ct.prototype.L,ct.prototype.getLastError=ct.prototype.Ka,ct.prototype.getLastErrorCode=ct.prototype.Ba,ct.prototype.getStatus=ct.prototype.Z,ct.prototype.getResponseJson=ct.prototype.Oa,ct.prototype.getResponseText=ct.prototype.oa,ct.prototype.send=ct.prototype.ea,ct.prototype.setWithCredentials=ct.prototype.Ha,MI=ct}).apply(typeof Jc<"u"?Jc:typeof self<"u"?self:typeof window<"u"?window:{});const ww="@firebase/firestore",Ew="4.8.0";/**
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
 */class rn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rn.UNAUTHENTICATED=new rn(null),rn.GOOGLE_CREDENTIALS=new rn("google-credentials-uid"),rn.FIRST_PARTY=new rn("first-party-uid"),rn.MOCK_USER=new rn("mock-user");/**
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
 */let Na="11.10.0";/**
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
 */const os=new qm("@firebase/firestore");function oa(){return os.logLevel}function he(t,...e){if(os.logLevel<=Ue.DEBUG){const n=e.map(ig);os.debug(`Firestore (${Na}): ${t}`,...n)}}function gi(t,...e){if(os.logLevel<=Ue.ERROR){const n=e.map(ig);os.error(`Firestore (${Na}): ${t}`,...n)}}function so(t,...e){if(os.logLevel<=Ue.WARN){const n=e.map(ig);os.warn(`Firestore (${Na}): ${t}`,...n)}}function ig(t){if(typeof t=="string")return t;try{/**
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
 */function Ae(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,jI(t,r,n)}function jI(t,e,n){let r=`FIRESTORE (${Na}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw gi(r),new Error(r)}function Ze(t,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,t||jI(e,o,r)}function De(t,e){return t}/**
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
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ye extends yi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class no{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $I{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ck{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rn.UNAUTHENTICATED))}shutdown(){}}class dk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hk{constructor(e){this.t=e,this.currentUser=rn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ze(this.o===void 0,42304);let r=this.i;const o=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let a=new no;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new no,e.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await o(this.currentUser)})},d=f=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new no)}},0),u()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ze(typeof r.accessToken=="string",31837,{l:r}),new $I(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new rn(e)}}class fk{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=rn.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pk{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new fk(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(rn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Iw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mk{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Yn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ze(this.o===void 0,3512);const r=a=>{a.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,he("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const o=a=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Iw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Iw(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function gk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function zI(){return new TextEncoder}/**
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
 */class og{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=gk(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<n&&(r+=e.charAt(o[a]%62))}return r}}function Ve(t,e){return t<e?-1:t>e?1:0}function vm(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),o=e.codePointAt(n);if(r!==o){if(r<128&&o<128)return Ve(r,o);{const a=zI(),u=vk(a.encode(Sw(t,n)),a.encode(Sw(e,n)));return u!==0?u:Ve(r,o)}}n+=r>65535?2:1}return Ve(t.length,e.length)}function Sw(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function vk(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ve(t[n],e[n]);return Ve(t.length,e.length)}function wa(t,e,n){return t.length===e.length&&t.every((r,o)=>n(r,e[o]))}/**
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
 */const Tw="__name__";class Nr{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ae(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Ae(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Nr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Nr?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const a=Nr.compareSegments(e.get(o),n.get(o));if(a!==0)return a}return Ve(e.length,n.length)}static compareSegments(e,n){const r=Nr.isNumericId(e),o=Nr.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?Nr.extractNumericId(e).compare(Nr.extractNumericId(n)):vm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return to.fromString(e.substring(4,e.length-2))}}class pt extends Nr{construct(e,n,r){return new pt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ye(ne.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new pt(n)}static emptyPath(){return new pt([])}}const yk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qt extends Nr{construct(e,n,r){return new Qt(e,n,r)}static isValidIdentifier(e){return yk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Tw}static keyField(){return new Qt([Tw])}static fromServerFormat(e){const n=[];let r="",o=0;const a=()=>{if(r.length===0)throw new ye(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let u=!1;for(;o<e.length;){const d=e[o];if(d==="\\"){if(o+1===e.length)throw new ye(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ye(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,o+=2}else d==="`"?(u=!u,o++):d!=="."||u?(r+=d,o++):(a(),o++)}if(a(),u)throw new ye(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qt(n)}static emptyPath(){return new Qt([])}}/**
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
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(pt.fromString(e))}static fromName(e){return new Se(pt.fromString(e).popFirst(5))}static empty(){return new Se(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return pt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new pt(e.slice()))}}/**
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
 */function _k(t,e,n){if(!n)throw new ye(ne.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wk(t,e,n,r){if(e===!0&&r===!0)throw new ye(ne.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function bw(t){if(!Se.isDocumentKey(t))throw new ye(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function WI(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function sg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae(12329,{type:typeof t})}function au(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ye(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sg(t);throw new ye(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Au(t,e){if(!WI(t))throw new ye(ne.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const o=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const u=t[r];if(o&&typeof u!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(a!==void 0&&u!==a.value){n=`Expected '${r}' field to equal '${a.value}'`;break}}if(n)throw new ye(ne.INVALID_ARGUMENT,n);return!0}/**
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
 */const Cw=-62135596800,Aw=1e6;class ut{static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Aw);return new ut(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ye(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ye(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Cw)throw new ye(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ye(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Aw}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ut._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Au(e,ut._jsonSchema))return new ut(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Cw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ut._jsonSchemaVersion="firestore/timestamp/1.0",ut._jsonSchema={type:Tt("string",ut._jsonSchemaVersion),seconds:Tt("number"),nanoseconds:Tt("number")};/**
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
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new ut(0,0))}static max(){return new ke(new ut(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const lu=-1;function Ek(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,o=ke.fromTimestamp(r===1e9?new ut(n+1,0):new ut(n,r));return new ao(o,Se.empty(),e)}function Ik(t){return new ao(t.readTime,t.key,lu)}class ao{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ao(ke.min(),Se.empty(),lu)}static max(){return new ao(ke.max(),Se.empty(),lu)}}function Sk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Se.comparator(t.documentKey,e.documentKey),n!==0?n:Ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const Tk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Oa(t){if(t.code!==ne.FAILED_PRECONDITION||t.message!==Tk)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):J.reject(n)}static resolve(e){return new J((n,r)=>{n(e)})}static reject(e){return new J((n,r)=>{r(e)})}static waitFor(e){return new J((n,r)=>{let o=0,a=0,u=!1;e.forEach(d=>{++o,d.next(()=>{++a,u&&a===o&&n()},f=>r(f))}),u=!0,a===o&&n()})}static or(e){let n=J.resolve(!1);for(const r of e)n=n.next(o=>o?J.resolve(o):r());return n}static forEach(e,n){const r=[];return e.forEach((o,a)=>{r.push(n.call(this,o,a))}),this.waitFor(r)}static mapArray(e,n){return new J((r,o)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const m=f;n(e[m]).next(y=>{u[m]=y,++d,d===a&&r(u)},y=>o(y))}})}static doWhile(e,n){return new J((r,o)=>{const a=()=>{e()===!0?n().next(()=>{a()},o):r()};a()})}}function Ck(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function La(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ph{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ph.ue=-1;/**
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
 */const ag=-1;function mh(t){return t==null}function Md(t){return t===0&&1/t==-1/0}function Ak(t){return typeof t=="number"&&Number.isInteger(t)&&!Md(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const HI="";function Pk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pw(e)),e=Rk(t.get(n),e);return Pw(e)}function Rk(t,e){let n=e;const r=t.length;for(let o=0;o<r;o++){const a=t.charAt(o);switch(a){case"\0":n+="";break;case HI:n+="";break;default:n+=a}}return n}function Pw(t){return t+HI+""}/**
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
 */function Rw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function GI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class mt{constructor(e,n){this.comparator=e,this.root=n||Kt.EMPTY}insert(e,n){return new mt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new mt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Zc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Zc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Zc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Zc(this.root,e,this.comparator,!0)}}class Zc{constructor(e,n,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?r(e.key,n):1,n&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,n,r,o,a){this.key=e,this.value=n,this.color=r??Kt.RED,this.left=o??Kt.EMPTY,this.right=a??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,o,a){return new Kt(e??this.key,n??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,n,r),null):a===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return Kt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,n,r,o,a){return this}insert(e,n,r){return new Kt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new mt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new xw(this.data.getIterator())}getIteratorFrom(e){return new xw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new kt(this.comparator);return n.data=e,n}}class xw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yr{constructor(e){this.fields=e,e.sort(Qt.comparator)}static empty(){return new yr([])}unionWith(e){let n=new kt(Qt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new qI("Invalid base64 string: "+a):a}}(e);return new Xt(n)}static fromUint8Array(e){const n=function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a}(e);return new Xt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const xk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lo(t){if(Ze(!!t,39018),typeof t=="string"){let e=0;const n=xk.exec(t);if(Ze(!!n,46558,{timestamp:t}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(t.seconds),nanos:_t(t.nanos)}}function _t(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function uo(t){return typeof t=="string"?Xt.fromBase64String(t):Xt.fromUint8Array(t)}/**
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
 */const KI="server_timestamp",QI="__type__",YI="__previous_value__",XI="__local_write_time__";function lg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[QI])===null||n===void 0?void 0:n.stringValue)===KI}function gh(t){const e=t.mapValue.fields[YI];return lg(e)?gh(e):e}function uu(t){const e=lo(t.mapValue.fields[XI].timestampValue);return new ut(e.seconds,e.nanos)}/**
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
 */class kk{constructor(e,n,r,o,a,u,d,f,m,y){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=m,this.isUsingEmulator=y}}const Vd="(default)";class cu{constructor(e,n){this.projectId=e,this.database=n||Vd}static empty(){return new cu("","")}get isDefaultDatabase(){return this.database===Vd}isEqual(e){return e instanceof cu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const JI="__type__",Dk="__max__",ed={mapValue:{}},ZI="__vector__",Fd="value";function co(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?lg(t)?4:Ok(t)?9007199254740991:Nk(t)?10:11:Ae(28295,{value:t})}function jr(t,e){if(t===e)return!0;const n=co(t);if(n!==co(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return uu(t).isEqual(uu(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=lo(o.timestampValue),d=lo(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(o,a){return uo(o.bytesValue).isEqual(uo(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(o,a){return _t(o.geoPointValue.latitude)===_t(a.geoPointValue.latitude)&&_t(o.geoPointValue.longitude)===_t(a.geoPointValue.longitude)}(t,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return _t(o.integerValue)===_t(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=_t(o.doubleValue),d=_t(a.doubleValue);return u===d?Md(u)===Md(d):isNaN(u)&&isNaN(d)}return!1}(t,e);case 9:return wa(t.arrayValue.values||[],e.arrayValue.values||[],jr);case 10:case 11:return function(o,a){const u=o.mapValue.fields||{},d=a.mapValue.fields||{};if(Rw(u)!==Rw(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!jr(u[f],d[f])))return!1;return!0}(t,e);default:return Ae(52216,{left:t})}}function du(t,e){return(t.values||[]).find(n=>jr(n,e))!==void 0}function Ea(t,e){if(t===e)return 0;const n=co(t),r=co(e);if(n!==r)return Ve(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return function(a,u){const d=_t(a.integerValue||a.doubleValue),f=_t(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(t,e);case 3:return kw(t.timestampValue,e.timestampValue);case 4:return kw(uu(t),uu(e));case 5:return vm(t.stringValue,e.stringValue);case 6:return function(a,u){const d=uo(a),f=uo(u);return d.compareTo(f)}(t.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let m=0;m<d.length&&m<f.length;m++){const y=Ve(d[m],f[m]);if(y!==0)return y}return Ve(d.length,f.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,u){const d=Ve(_t(a.latitude),_t(u.latitude));return d!==0?d:Ve(_t(a.longitude),_t(u.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dw(t.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,m,y;const _=a.fields||{},w=u.fields||{},I=(d=_[Fd])===null||d===void 0?void 0:d.arrayValue,b=(f=w[Fd])===null||f===void 0?void 0:f.arrayValue,D=Ve(((m=I==null?void 0:I.values)===null||m===void 0?void 0:m.length)||0,((y=b==null?void 0:b.values)===null||y===void 0?void 0:y.length)||0);return D!==0?D:Dw(I,b)}(t.mapValue,e.mapValue);case 11:return function(a,u){if(a===ed.mapValue&&u===ed.mapValue)return 0;if(a===ed.mapValue)return 1;if(u===ed.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),m=u.fields||{},y=Object.keys(m);f.sort(),y.sort();for(let _=0;_<f.length&&_<y.length;++_){const w=vm(f[_],y[_]);if(w!==0)return w;const I=Ea(d[f[_]],m[y[_]]);if(I!==0)return I}return Ve(f.length,y.length)}(t.mapValue,e.mapValue);default:throw Ae(23264,{le:n})}}function kw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const n=lo(t),r=lo(e),o=Ve(n.seconds,r.seconds);return o!==0?o:Ve(n.nanos,r.nanos)}function Dw(t,e){const n=t.values||[],r=e.values||[];for(let o=0;o<n.length&&o<r.length;++o){const a=Ea(n[o],r[o]);if(a)return a}return Ve(n.length,r.length)}function Ia(t){return ym(t)}function ym(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lo(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return uo(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",o=!0;for(const a of n.values||[])o?o=!1:r+=",",r+=ym(a);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${ym(n.fields[u])}`;return o+"}"}(t.mapValue):Ae(61005,{value:t})}function vd(t){switch(co(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gh(t);return e?16+vd(e):16;case 5:return 2*t.stringValue.length;case 6:return uo(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((o,a)=>o+vd(a),0)}(t.arrayValue);case 10:case 11:return function(r){let o=0;return vo(r.fields,(a,u)=>{o+=a.length+vd(u)}),o}(t.mapValue);default:throw Ae(13486,{value:t})}}function _m(t){return!!t&&"integerValue"in t}function ug(t){return!!t&&"arrayValue"in t}function Nw(t){return!!t&&"nullValue"in t}function Ow(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yd(t){return!!t&&"mapValue"in t}function Nk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[JI])===null||n===void 0?void 0:n.stringValue)===ZI}function Kl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Kl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Kl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ok(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Dk}/**
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
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kl(n)}setAll(e){let n=Qt.emptyPath(),r={},o=[];e.forEach((u,d)=>{if(!n.isImmediateParentOf(d)){const f=this.getFieldsMap(n);this.applyChanges(f,r,o),r={},o=[],n=d.popLast()}u?r[d.lastSegment()]=Kl(u):o.push(d.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,o)}delete(e){const n=this.field(e.popLast());yd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=n.mapValue.fields[e.get(r)];yd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,r){vo(n,(o,a)=>e[o]=a);for(const o of r)delete e[o]}clone(){return new Dn(Kl(this.value))}}function eS(t){const e=[];return vo(t.fields,(n,r)=>{const o=new Qt([n]);if(yd(r)){const a=eS(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)}),new yr(e)}/**
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
 */class on{constructor(e,n,r,o,a,u,d){this.key=e,this.documentType=n,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new on(e,0,ke.min(),ke.min(),ke.min(),Dn.empty(),0)}static newFoundDocument(e,n,r,o){return new on(e,1,n,ke.min(),r,o,0)}static newNoDocument(e,n){return new on(e,2,n,ke.min(),ke.min(),Dn.empty(),0)}static newUnknownDocument(e,n){return new on(e,3,n,ke.min(),ke.min(),Dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof on&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new on(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bd{constructor(e,n){this.position=e,this.inclusive=n}}function Lw(t,e,n){let r=0;for(let o=0;o<t.position.length;o++){const a=e[o],u=t.position[o];if(a.field.isKeyField()?r=Se.comparator(Se.fromName(u.referenceValue),n.key):r=Ea(u,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Mw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ud{constructor(e,n="asc"){this.field=e,this.dir=n}}function Lk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class tS{}class xt extends tS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Vk(e,n,r):n==="array-contains"?new Uk(e,r):n==="in"?new jk(e,r):n==="not-in"?new $k(e,r):n==="array-contains-any"?new zk(e,r):new xt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Fk(e,r):new Bk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ea(n,this.value)):n!==null&&co(this.value)===co(n)&&this.matchesComparison(Ea(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class $r extends tS{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new $r(e,n)}matches(e){return nS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function nS(t){return t.op==="and"}function rS(t){return Mk(t)&&nS(t)}function Mk(t){for(const e of t.filters)if(e instanceof $r)return!1;return!0}function wm(t){if(t instanceof xt)return t.field.canonicalString()+t.op.toString()+Ia(t.value);if(rS(t))return t.filters.map(e=>wm(e)).join(",");{const e=t.filters.map(n=>wm(n)).join(",");return`${t.op}(${e})`}}function iS(t,e){return t instanceof xt?function(r,o){return o instanceof xt&&r.op===o.op&&r.field.isEqual(o.field)&&jr(r.value,o.value)}(t,e):t instanceof $r?function(r,o){return o instanceof $r&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((a,u,d)=>a&&iS(u,o.filters[d]),!0):!1}(t,e):void Ae(19439)}function oS(t){return t instanceof xt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ia(n.value)}`}(t):t instanceof $r?function(n){return n.op.toString()+" {"+n.getFilters().map(oS).join(" ,")+"}"}(t):"Filter"}class Vk extends xt{constructor(e,n,r){super(e,n,r),this.key=Se.fromName(r.referenceValue)}matches(e){const n=Se.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fk extends xt{constructor(e,n){super(e,"in",n),this.keys=sS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Bk extends xt{constructor(e,n){super(e,"not-in",n),this.keys=sS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Se.fromName(r.referenceValue))}class Uk extends xt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ug(n)&&du(n.arrayValue,this.value)}}class jk extends xt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&du(this.value.arrayValue,n)}}class $k extends xt{constructor(e,n){super(e,"not-in",n)}matches(e){if(du(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!du(this.value.arrayValue,n)}}class zk extends xt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ug(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>du(this.value.arrayValue,r))}}/**
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
 */class Wk{constructor(e,n=null,r=[],o=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=d,this.Pe=null}}function Vw(t,e=null,n=[],r=[],o=null,a=null,u=null){return new Wk(t,e,n,r,o,a,u)}function cg(t){const e=De(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ia(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ia(r)).join(",")),e.Pe=n}return e.Pe}function dg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Lk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Mw(t.startAt,e.startAt)&&Mw(t.endAt,e.endAt)}function Em(t){return Se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vh{constructor(e,n=null,r=[],o=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Hk(t,e,n,r,o,a,u,d){return new vh(t,e,n,r,o,a,u,d)}function hg(t){return new vh(t)}function Fw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Gk(t){return t.collectionGroup!==null}function Ql(t){const e=De(t);if(e.Te===null){e.Te=[];const n=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),n.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new kt(Qt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(d=d.add(m.field))})}),d})(e).forEach(a=>{n.has(a.canonicalString())||a.isKeyField()||e.Te.push(new Ud(a,r))}),n.has(Qt.keyField().canonicalString())||e.Te.push(new Ud(Qt.keyField(),r))}return e.Te}function Vr(t){const e=De(t);return e.Ie||(e.Ie=qk(e,Ql(t))),e.Ie}function qk(t,e){if(t.limitType==="F")return Vw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new Ud(o.field,a)});const n=t.endAt?new Bd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bd(t.startAt.position,t.startAt.inclusive):null;return Vw(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Im(t,e,n){return new vh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yh(t,e){return dg(Vr(t),Vr(e))&&t.limitType===e.limitType}function aS(t){return`${cg(Vr(t))}|lt:${t.limitType}`}function sa(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(o=>oS(o)).join(", ")}]`),mh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(o=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(o)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(o=>Ia(o)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(o=>Ia(o)).join(",")),`Target(${r})`}(Vr(t))}; limitType=${t.limitType})`}function _h(t,e){return e.isFoundDocument()&&function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Se.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(t,e)&&function(r,o){for(const a of Ql(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(t,e)&&function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0}(t,e)&&function(r,o){return!(r.startAt&&!function(u,d,f){const m=Lw(u,d,f);return u.inclusive?m<=0:m<0}(r.startAt,Ql(r),o)||r.endAt&&!function(u,d,f){const m=Lw(u,d,f);return u.inclusive?m>=0:m>0}(r.endAt,Ql(r),o))}(t,e)}function Kk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function lS(t){return(e,n)=>{let r=!1;for(const o of Ql(t)){const a=Qk(o,e,n);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function Qk(t,e,n){const r=t.field.isKeyField()?Se.comparator(e.key,n.key):function(a,u,d){const f=u.data.field(a),m=d.data.field(a);return f!==null&&m!==null?Ea(f,m):Ae(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ae(19790,{direction:t.dir})}}/**
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
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){vo(this.inner,(n,r)=>{for(const[o,a]of r)e(o,a)})}isEmpty(){return GI(this.inner)}size(){return this.innerSize}}/**
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
 */const Yk=new mt(Se.comparator);function vi(){return Yk}const uS=new mt(Se.comparator);function $l(...t){let e=uS;for(const n of t)e=e.insert(n.key,n);return e}function cS(t){let e=uS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yo(){return Yl()}function dS(){return Yl()}function Yl(){return new us(t=>t.toString(),(t,e)=>t.isEqual(e))}const Xk=new mt(Se.comparator),Jk=new kt(Se.comparator);function $e(...t){let e=Jk;for(const n of t)e=e.add(n);return e}const Zk=new kt(Ve);function eD(){return Zk}/**
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
 */function fg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Md(e)?"-0":e}}function hS(t){return{integerValue:""+t}}function tD(t,e){return Ak(e)?hS(e):fg(t,e)}/**
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
 */class wh{constructor(){this._=void 0}}function nD(t,e,n){return t instanceof jd?function(o,a){const u={fields:{[QI]:{stringValue:KI},[XI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&lg(a)&&(a=gh(a)),a&&(u.fields[YI]=a),{mapValue:u}}(n,e):t instanceof hu?pS(t,e):t instanceof fu?mS(t,e):function(o,a){const u=fS(o,a),d=Bw(u)+Bw(o.Ee);return _m(u)&&_m(o.Ee)?hS(d):fg(o.serializer,d)}(t,e)}function rD(t,e,n){return t instanceof hu?pS(t,e):t instanceof fu?mS(t,e):n}function fS(t,e){return t instanceof $d?function(r){return _m(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class jd extends wh{}class hu extends wh{constructor(e){super(),this.elements=e}}function pS(t,e){const n=gS(e);for(const r of t.elements)n.some(o=>jr(o,r))||n.push(r);return{arrayValue:{values:n}}}class fu extends wh{constructor(e){super(),this.elements=e}}function mS(t,e){let n=gS(e);for(const r of t.elements)n=n.filter(o=>!jr(o,r));return{arrayValue:{values:n}}}class $d extends wh{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Bw(t){return _t(t.integerValue||t.doubleValue)}function gS(t){return ug(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iD(t,e){return t.field.isEqual(e.field)&&function(r,o){return r instanceof hu&&o instanceof hu||r instanceof fu&&o instanceof fu?wa(r.elements,o.elements,jr):r instanceof $d&&o instanceof $d?jr(r.Ee,o.Ee):r instanceof jd&&o instanceof jd}(t.transform,e.transform)}class oD{constructor(e,n){this.version=e,this.transformResults=n}}class fi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new fi}static exists(e){return new fi(void 0,e)}static updateTime(e){return new fi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _d(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Eh{}function vS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _S(t.key,fi.none()):new Ih(t.key,t.data,fi.none());{const n=t.data,r=Dn.empty();let o=new kt(Qt.comparator);for(let a of e.fields)if(!o.has(a)){let u=n.field(a);u===null&&a.length>1&&(a=a.popLast(),u=n.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new cs(t.key,r,new yr(o.toArray()),fi.none())}}function sD(t,e,n){t instanceof Ih?function(o,a,u){const d=o.value.clone(),f=jw(o.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(t,e,n):t instanceof cs?function(o,a,u){if(!_d(o.precondition,a))return void a.convertToUnknownDocument(u.version);const d=jw(o.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(yS(o)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(t,e,n):function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,n)}function Xl(t,e,n,r){return t instanceof Ih?function(a,u,d,f){if(!_d(a.precondition,u))return d;const m=a.value.clone(),y=$w(a.fieldTransforms,f,u);return m.setAll(y),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(t,e,n,r):t instanceof cs?function(a,u,d,f){if(!_d(a.precondition,u))return d;const m=$w(a.fieldTransforms,f,u),y=u.data;return y.setAll(yS(a)),y.setAll(m),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(_=>_.field))}(t,e,n,r):function(a,u,d){return _d(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(t,e,n)}function aD(t,e){let n=null;for(const r of t.fieldTransforms){const o=e.data.field(r.field),a=fS(r.transform,o||null);a!=null&&(n===null&&(n=Dn.empty()),n.set(r.field,a))}return n||null}function Uw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&wa(r,o,(a,u)=>iD(a,u))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ih extends Eh{constructor(e,n,r,o=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class cs extends Eh{constructor(e,n,r,o,a=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function yS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jw(t,e,n){const r=new Map;Ze(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let o=0;o<n.length;o++){const a=t[o],u=a.transform,d=e.data.field(a.field);r.set(a.field,rD(u,d,n[o]))}return r}function $w(t,e,n){const r=new Map;for(const o of t){const a=o.transform,u=n.data.field(o.field);r.set(o.field,nD(a,u,e))}return r}class _S extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lD extends Eh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uD{constructor(e,n,r,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&sD(a,e,r[o])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Xl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Xl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=dS();return this.mutations.forEach(o=>{const a=e.get(o.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=n.has(o.key)?null:d;const f=vS(u,d);f!==null&&r.set(o.key,f),u.isValidDocument()||u.convertToNoDocument(ke.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),$e())}isEqual(e){return this.batchId===e.batchId&&wa(this.mutations,e.mutations,(n,r)=>Uw(n,r))&&wa(this.baseMutations,e.baseMutations,(n,r)=>Uw(n,r))}}class pg{constructor(e,n,r,o){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(e,n,r){Ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let o=function(){return Xk}();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new pg(e,n,r,o)}}/**
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
 */class cD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class dD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var It,He;function hD(t){switch(t){case ne.OK:return Ae(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Ae(15467,{code:t})}}function wS(t){if(t===void 0)return gi("GRPC error has no .code"),ne.UNKNOWN;switch(t){case It.OK:return ne.OK;case It.CANCELLED:return ne.CANCELLED;case It.UNKNOWN:return ne.UNKNOWN;case It.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case It.INTERNAL:return ne.INTERNAL;case It.UNAVAILABLE:return ne.UNAVAILABLE;case It.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case It.NOT_FOUND:return ne.NOT_FOUND;case It.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case It.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case It.ABORTED:return ne.ABORTED;case It.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case It.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case It.DATA_LOSS:return ne.DATA_LOSS;default:return Ae(39323,{code:t})}}(He=It||(It={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const fD=new to([4294967295,4294967295],0);function zw(t){const e=zI().encode(t),n=new LI;return n.update(e),new Uint8Array(n.digest())}function Ww(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new to([n,r],0),new to([o,a],0)]}class mg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zl(`Invalid padding: ${n}`);if(r<0)throw new zl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zl(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=to.fromNumber(this.fe)}pe(e,n,r){let o=e.add(n.multiply(to.fromNumber(r)));return o.compare(fD)===1&&(o=new to([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=zw(e),[r,o]=Ww(n);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);if(!this.ye(u))return!1}return!0}static create(e,n,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new mg(a,o,n);return r.forEach(d=>u.insert(d)),u}insert(e){if(this.fe===0)return;const n=zw(e),[r,o]=Ww(n);for(let a=0;a<this.hashCount;a++){const u=this.pe(r,o,a);this.we(u)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sh{constructor(e,n,r,o,a){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const o=new Map;return o.set(e,Pu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sh(ke.min(),o,new mt(Ve),vi(),$e())}}class Pu{constructor(e,n,r,o,a){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pu(r,n,$e(),$e(),$e())}}/**
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
 */class wd{constructor(e,n,r,o){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=o}}class ES{constructor(e,n){this.targetId=e,this.De=n}}class IS{constructor(e,n,r=Xt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=o}}class Hw{constructor(){this.ve=0,this.Ce=Gw(),this.Fe=Xt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=$e(),n=$e(),r=$e();return this.Ce.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:Ae(38017,{changeType:a})}}),new Pu(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Gw()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class pD{constructor(e){this.We=e,this.Ge=new Map,this.ze=vi(),this.je=td(),this.Je=td(),this.He=new mt(Ve)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:Ae(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,o)=>{this.nt(o)&&n(o)})}it(e){const n=e.targetId,r=e.De.count,o=this.st(n);if(o){const a=o.target;if(Em(a))if(r===0){const u=new Se(a.path);this.Xe(n,u,on.newNoDocument(u,ke.min()))}else Ze(r===1,20013,{expectedCount:r});else{const u=this.ot(n);if(u!==r){const d=this._t(e),f=d?this.ut(d,e,u):1;if(f!==0){this.rt(n);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,m)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=n;let u,d;try{u=uo(r).toUint8Array()}catch(f){if(f instanceof qI)return so("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new mg(u,o,a)}catch(f){return so(f instanceof zl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.fe===0?null:d}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let o=0;return r.forEach(a=>{const u=this.We.lt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.Xe(n,a,null),o++)}),o}Pt(e){const n=new Map;this.Ge.forEach((a,u)=>{const d=this.st(u);if(d){if(a.current&&Em(d.target)){const f=new Se(d.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,on.newNoDocument(f,e))}a.Ne&&(n.set(u,a.Le()),a.ke())}});let r=$e();this.Je.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const m=this.st(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(r=r.add(a))}),this.ze.forEach((a,u)=>u.setReadTime(e));const o=new Sh(e,n,this.He,this.ze,r);return this.ze=vi(),this.je=td(),this.Je=td(),this.He=new mt(Ve),o}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const o=this.tt(e);this.It(e,n)?o.qe(n,1):o.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Hw,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new kt(Ve),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new kt(Ve),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||he("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Hw),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function td(){return new mt(Se.comparator)}function Gw(){return new mt(Se.comparator)}const mD={asc:"ASCENDING",desc:"DESCENDING"},gD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vD={and:"AND",or:"OR"};class yD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sm(t,e){return t.useProto3Json||mh(e)?e:{value:e}}function zd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _D(t,e){return zd(t,e.toTimestamp())}function Fr(t){return Ze(!!t,49232),ke.fromTimestamp(function(n){const r=lo(n);return new ut(r.seconds,r.nanos)}(t))}function gg(t,e){return Tm(t,e).canonicalString()}function Tm(t,e){const n=function(o){return new pt(["projects",o.projectId,"databases",o.database])}(t).child("documents");return e===void 0?n:n.child(e)}function TS(t){const e=pt.fromString(t);return Ze(RS(e),10190,{key:e.toString()}),e}function bm(t,e){return gg(t.databaseId,e.path)}function Dp(t,e){const n=TS(e);if(n.get(1)!==t.databaseId.projectId)throw new ye(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ye(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Se(CS(n))}function bS(t,e){return gg(t.databaseId,e)}function wD(t){const e=TS(t);return e.length===4?pt.emptyPath():CS(e)}function Cm(t){return new pt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function CS(t){return Ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function qw(t,e,n){return{name:bm(t,e),fields:n.value.mapValue.fields}}function ED(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Ae(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(m,y){return m.useProto3Json?(Ze(y===void 0||typeof y=="string",58123),Xt.fromBase64String(y||"")):(Ze(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Xt.fromUint8Array(y||new Uint8Array))}(t,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(m){const y=m.code===void 0?ne.UNKNOWN:wS(m.code);return new ye(y,m.message||"")}(u);n=new IS(r,o,a,d||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=Dp(t,r.document.name),a=Fr(r.document.updateTime),u=r.document.createTime?Fr(r.document.createTime):ke.min(),d=new Dn({mapValue:{fields:r.document.fields}}),f=on.newFoundDocument(o,a,u,d),m=r.targetIds||[],y=r.removedTargetIds||[];n=new wd(m,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=Dp(t,r.document),a=r.readTime?Fr(r.readTime):ke.min(),u=on.newNoDocument(o,a),d=r.removedTargetIds||[];n=new wd([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=Dp(t,r.document),a=r.removedTargetIds||[];n=new wd([],a,o,null)}else{if(!("filter"in e))return Ae(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new dD(o,a),d=r.targetId;n=new ES(d,u)}}return n}function ID(t,e){let n;if(e instanceof Ih)n={update:qw(t,e.key,e.value)};else if(e instanceof _S)n={delete:bm(t,e.key)};else if(e instanceof cs)n={update:qw(t,e.key,e.data),updateMask:kD(e.fieldMask)};else{if(!(e instanceof lD))return Ae(16599,{Rt:e.type});n={verify:bm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(a,u){const d=u.transform;if(d instanceof jd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof hu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof fu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof $d)return{fieldPath:u.field.canonicalString(),increment:d.Ee};throw Ae(20930,{transform:u.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:_D(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)}(t,e.precondition)),n}function SD(t,e){return t&&t.length>0?(Ze(e!==void 0,14353),t.map(n=>function(o,a){let u=o.updateTime?Fr(o.updateTime):Fr(a);return u.isEqual(ke.min())&&(u=Fr(a)),new oD(u,o.transformResults||[])}(n,e))):[]}function TD(t,e){return{documents:[bS(t,e.path)]}}function bD(t,e){const n={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=bS(t,o);const a=function(m){if(m.length!==0)return PS($r.create(m,"and"))}(e.filters);a&&(n.structuredQuery.where=a);const u=function(m){if(m.length!==0)return m.map(y=>function(w){return{field:aa(w.field),direction:PD(w.dir)}}(y))}(e.orderBy);u&&(n.structuredQuery.orderBy=u);const d=Sm(t,e.limit);return d!==null&&(n.structuredQuery.limit=d),e.startAt&&(n.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{Vt:n,parent:o}}function CD(t){let e=wD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){Ze(r===1,65062);const y=n.from[0];y.allDescendants?o=y.collectionId:e=e.child(y.collectionId)}let a=[];n.where&&(a=function(_){const w=AS(_);return w instanceof $r&&rS(w)?w.getFilters():[w]}(n.where));let u=[];n.orderBy&&(u=function(_){return _.map(w=>function(b){return new Ud(la(b.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(n.orderBy));let d=null;n.limit&&(d=function(_){let w;return w=typeof _=="object"?_.value:_,mh(w)?null:w}(n.limit));let f=null;n.startAt&&(f=function(_){const w=!!_.before,I=_.values||[];return new Bd(I,w)}(n.startAt));let m=null;return n.endAt&&(m=function(_){const w=!_.before,I=_.values||[];return new Bd(I,w)}(n.endAt)),Hk(e,o,u,a,d,"F",f,m)}function AD(t,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function AS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=la(n.unaryFilter.field);return xt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=la(n.unaryFilter.field);return xt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=la(n.unaryFilter.field);return xt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=la(n.unaryFilter.field);return xt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}}(t):t.fieldFilter!==void 0?function(n){return xt.create(la(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return $r.create(n.compositeFilter.filters.map(r=>AS(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}}(n.compositeFilter.op))}(t):Ae(30097,{filter:t})}function PD(t){return mD[t]}function RD(t){return gD[t]}function xD(t){return vD[t]}function aa(t){return{fieldPath:t.canonicalString()}}function la(t){return Qt.fromServerFormat(t.fieldPath)}function PS(t){return t instanceof xt?function(n){if(n.op==="=="){if(Ow(n.value))return{unaryFilter:{field:aa(n.field),op:"IS_NAN"}};if(Nw(n.value))return{unaryFilter:{field:aa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ow(n.value))return{unaryFilter:{field:aa(n.field),op:"IS_NOT_NAN"}};if(Nw(n.value))return{unaryFilter:{field:aa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:aa(n.field),op:RD(n.op),value:n.value}}}(t):t instanceof $r?function(n){const r=n.getFilters().map(o=>PS(o));return r.length===1?r[0]:{compositeFilter:{op:xD(n.op),filters:r}}}(t):Ae(54877,{filter:t})}function kD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Yi{constructor(e,n,r,o,a=ke.min(),u=ke.min(),d=Xt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DD{constructor(e){this.gt=e}}function ND(t){const e=CD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Im(e,e.limit,"L"):e}/**
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
 */class OD{constructor(){this.Dn=new LD}addToCollectionParentIndex(e,n){return this.Dn.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(ao.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(ao.min())}updateCollectionGroup(e,n,r){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class LD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n]||new kt(pt.comparator),a=!o.has(r);return this.index[n]=o.add(r),a}has(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(e){return(this.index[e]||new kt(pt.comparator)).toArray()}}/**
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
 */const Kw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},xS=41943040;class In{static withCacheSize(e){return new In(e,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */In.DEFAULT_COLLECTION_PERCENTILE=10,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,In.DEFAULT=new In(xS,In.DEFAULT_COLLECTION_PERCENTILE,In.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),In.DISABLED=new In(-1,0,0);/**
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
 */class Sa{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Sa(0)}static ur(){return new Sa(-1)}}/**
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
 */const Qw="LruGarbageCollector",MD=1048576;function Yw([t,e],[n,r]){const o=Ve(t,n);return o===0?Ve(e,r):o}class VD{constructor(e){this.Tr=e,this.buffer=new kt(Yw),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class FD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){he(Qw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){La(n)?he(Qw,"Ignoring IndexedDB error during garbage collection: ",n):await Oa(n)}await this.Rr(3e5)})}}class BD{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return J.resolve(ph.ue);const r=new VD(n);return this.Vr.forEachTarget(e,o=>r.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>r.Er(o))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Kw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Kw):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,o,a,u,d,f,m;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),o=this.params.maximumSequenceNumbersToCollect):o=_,u=Date.now(),this.nthSequenceNumber(e,o))).next(_=>(r=_,d=Date.now(),this.removeTargets(e,r,n))).next(_=>(a=_,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(m=Date.now(),oa()<=Ue.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${o} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${_} documents in `+(m-f)+`ms
Total Duration: ${m-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:_})))}}function UD(t,e){return new BD(t,e)}/**
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
 */class jD{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,on.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?J.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class $D{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class zD{constructor(e,n,r,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(r!==null&&Xl(r.mutation,o,yr.empty(),ut.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,$e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=$e()){const o=Yo();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,r).next(a=>{let u=$l();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,n){const r=Yo();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,$e()))}populateOverlays(e,n,r){const o=[];return r.forEach(a=>{n.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((u,d)=>{n.set(u,d)})})}computeViews(e,n,r,o){let a=vi();const u=Yl(),d=function(){return Yl()}();return n.forEach((f,m)=>{const y=r.get(m.key);o.has(m.key)&&(y===void 0||y.mutation instanceof cs)?a=a.insert(m.key,m):y!==void 0?(u.set(m.key,y.mutation.getFieldMask()),Xl(y.mutation,m,y.mutation.getFieldMask(),ut.now())):u.set(m.key,yr.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,y)=>u.set(m,y)),n.forEach((m,y)=>{var _;return d.set(m,new $D(y,(_=u.get(m))!==null&&_!==void 0?_:null))}),d))}recalculateAndSaveOverlays(e,n){const r=Yl();let o=new mt((u,d)=>u-d),a=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(u=>{for(const d of u)d.keys().forEach(f=>{const m=n.get(f);if(m===null)return;let y=r.get(f)||yr.empty();y=d.applyToLocalView(m,y),r.set(f,y);const _=(o.get(d.batchId)||$e()).add(f);o=o.insert(d.batchId,_)})}).next(()=>{const u=[],d=o.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),m=f.key,y=f.value,_=dS();y.forEach(w=>{if(!a.has(w)){const I=vS(n.get(w),r.get(w));I!==null&&_.set(w,I),a=a.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,_))}return J.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,o){return function(u){return Se.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Gk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,o):this.getDocumentsMatchingCollectionQuery(e,n,r,o)}getNextDocuments(e,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,o).next(a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,o-a.size):J.resolve(Yo());let d=lu,f=a;return u.next(m=>J.forEach(m,(y,_)=>(d<_.largestBatchId&&(d=_.largestBatchId),a.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{f=f.insert(y,w)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,$e())).next(y=>({batchId:d,changes:cS(y)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Se(n)).next(r=>{let o=$l();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,r,o){const a=n.collectionGroup;let u=$l();return this.indexManager.getCollectionParents(e,a).next(d=>J.forEach(d,f=>{const m=function(_,w){return new vh(w,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(n,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,o).next(y=>{y.forEach((_,w)=>{u=u.insert(_,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,n,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,a,o))).next(u=>{a.forEach((f,m)=>{const y=m.getKey();u.get(y)===null&&(u=u.insert(y,on.newInvalidDocument(y)))});let d=$l();return u.forEach((f,m)=>{const y=a.get(f);y!==void 0&&Xl(y.mutation,m,yr.empty(),ut.now()),_h(n,m)&&(d=d.insert(f,m))}),d})}}/**
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
 */class WD{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return J.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(o){return{id:o.id,version:o.version,createTime:Fr(o.createTime)}}(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(o){return{name:o.name,query:ND(o.bundledQuery),readTime:Fr(o.readTime)}}(n)),J.resolve()}}/**
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
 */class HD{constructor(){this.overlays=new mt(Se.comparator),this.kr=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yo();return J.forEach(n,o=>this.getOverlay(e,o).next(a=>{a!==null&&r.set(o,a)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((o,a)=>{this.wt(e,n,a)}),J.resolve()}removeOverlaysForBatchId(e,n,r){const o=this.kr.get(r);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.kr.delete(r)),J.resolve()}getOverlaysForCollection(e,n,r){const o=Yo(),a=n.length+1,u=new Se(n.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,m=f.getKey();if(!n.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&o.set(f.getKey(),f)}return J.resolve(o)}getOverlaysForCollectionGroup(e,n,r,o){let a=new mt((m,y)=>m-y);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===n&&m.largestBatchId>r){let y=a.get(m.largestBatchId);y===null&&(y=Yo(),a=a.insert(m.largestBatchId,y)),y.set(m.getKey(),m)}}const d=Yo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,y)=>d.set(m,y)),!(d.size()>=o)););return J.resolve(d)}wt(e,n,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.kr.get(o.largestBatchId).delete(r.key);this.kr.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new cD(n,r));let a=this.kr.get(n);a===void 0&&(a=$e(),this.kr.set(n,a)),this.kr.set(n,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class GD{constructor(){this.sessionToken=Xt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
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
 */class vg{constructor(){this.qr=new kt(Ft.Qr),this.$r=new kt(Ft.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ft(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ft(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new Se(new pt([])),r=new Ft(n,e),o=new Ft(n,e+1),a=[];return this.$r.forEachInRange([r,o],u=>{this.Wr(u),a.push(u.key)}),a}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new Se(new pt([])),r=new Ft(n,e),o=new Ft(n,e+1);let a=$e();return this.$r.forEachInRange([r,o],u=>{a=a.add(u.key)}),a}containsKey(e){const n=new Ft(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ft{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return Se.comparator(e.key,n.key)||Ve(e.Hr,n.Hr)}static Ur(e,n){return Ve(e.Hr,n.Hr)||Se.comparator(e.key,n.key)}}/**
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
 */class qD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new kt(Ft.Qr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,o){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new uD(a,n,r,o);this.mutationQueue.push(u);for(const d of o)this.Yr=this.Yr.add(new Ft(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(u)}lookupMutationBatch(e,n){return J.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,o=this.Xr(r),a=o<0?0:o;return J.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?ag:this.er-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ft(n,0),o=new Ft(n,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,o],u=>{const d=this.Zr(u.Hr);a.push(d)}),J.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new kt(Ve);return n.forEach(o=>{const a=new Ft(o,0),u=new Ft(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,u],d=>{r=r.add(d.Hr)})}),J.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,o=r.length+1;let a=r;Se.isDocumentKey(a)||(a=a.child(""));const u=new Ft(new Se(a),0);let d=new kt(Ve);return this.Yr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===o&&(d=d.add(f.Hr)),!0)},u),J.resolve(this.ei(d))}ei(e){const n=[];return e.forEach(r=>{const o=this.Zr(r);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Ze(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return J.forEach(n.mutations,o=>{const a=new Ft(o.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Ft(n,0),o=this.Yr.firstAfterOrEqual(r);return J.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class KD{constructor(e){this.ni=e,this.docs=function(){return new mt(Se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,o=this.docs.get(r),a=o?o.size:0,u=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return J.resolve(r?r.document.mutableCopy():on.newInvalidDocument(n))}getEntries(e,n){let r=vi();return n.forEach(o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():on.newInvalidDocument(o))}),J.resolve(r)}getDocumentsMatchingQuery(e,n,r,o){let a=vi();const u=n.path,d=new Se(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:m,value:{document:y}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||Sk(Ik(y),r)<=0||(o.has(y.key)||_h(n,y))&&(a=a.insert(y.key,y.mutableCopy()))}return J.resolve(a)}getAllFromCollectionGroup(e,n,r,o){Ae(9500)}ri(e,n){return J.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QD(this)}getSize(e){return J.resolve(this.size)}}class QD extends jD{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?n.push(this.Or.addEntry(e,o)):this.Or.removeEntry(r)}),J.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class YD{constructor(e){this.persistence=e,this.ii=new us(n=>cg(n),dg),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.si=0,this.oi=new vg,this.targetCount=0,this._i=Sa.ar()}forEachTarget(e,n){return this.ii.forEach((r,o)=>n(o)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),J.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Sa(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.hr(n),J.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,r){let o=0;const a=[];return this.ii.forEach((u,d)=>{d.sequenceNumber<=n&&r.get(d.targetId)===null&&(this.ii.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),o++)}),J.waitFor(a).next(()=>o)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return J.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),J.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const o=this.persistence.referenceDelegate,a=[];return o&&n.forEach(u=>{a.push(o.markPotentiallyOrphaned(e,u))}),J.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),J.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return J.resolve(r)}containsKey(e,n){return J.resolve(this.oi.containsKey(n))}}/**
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
 */class kS{constructor(e,n){this.ai={},this.overlays={},this.ui=new ph(0),this.ci=!1,this.ci=!0,this.li=new GD,this.referenceDelegate=e(this),this.hi=new YD(this),this.indexManager=new OD,this.remoteDocumentCache=function(o){return new KD(o)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new DD(n),this.Ti=new WD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new qD(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){he("MemoryPersistence","Starting transaction:",e);const o=new XD(this.ui.next());return this.referenceDelegate.Ii(),r(o).next(a=>this.referenceDelegate.di(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Ei(e,n){return J.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class XD extends bk{constructor(e){super(),this.currentSequenceNumber=e}}class yg{constructor(e){this.persistence=e,this.Ai=new vg,this.Ri=null}static Vi(e){return new yg(e)}get mi(){if(this.Ri)return this.Ri;throw Ae(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),J.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),J.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(o=>this.mi.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(a=>this.mi.add(a.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.mi,r=>{const o=Se.fromPath(r);return this.fi(e,o).next(a=>{a||n.removeEntry(o,ke.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return J.or([()=>J.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Wd{constructor(e,n){this.persistence=e,this.gi=new us(r=>Pk(r.path),(r,o)=>r.isEqual(o)),this.garbageCollector=UD(this,n)}static Vi(e,n){return new Wd(e,n)}Ii(){}di(e){return J.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(o=>r+o))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return J.forEach(this.gi,(r,o)=>this.Sr(e,r,o).next(a=>a?J.resolve():n(o)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.ri(e,u=>this.Sr(e,u,n).next(d=>{d||(r++,a.removeEntry(u,ke.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),J.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),J.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),J.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=vd(e.data.value)),n}Sr(e,n,r){return J.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.gi.get(n);return J.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class _g{constructor(e,n,r,o){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=o}static Es(e,n){let r=$e(),o=$e();for(const a of n.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new _g(e,n.fromCache,r,o)}}/**
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
 */class JD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZD{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return RA()?8:Ck(sn())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,o){const a={result:null};return this.ps(e,n).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.ys(e,n,o,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new JD;return this.ws(e,n,u).next(d=>{if(a.result=d,this.Rs)return this.Ss(e,n,u,d.size)})}).next(()=>a.result)}Ss(e,n,r,o){return r.documentReadCount<this.Vs?(oa()<=Ue.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",sa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),J.resolve()):(oa()<=Ue.DEBUG&&he("QueryEngine","Query:",sa(n),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.fs*o?(oa()<=Ue.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",sa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vr(n))):J.resolve())}ps(e,n){if(Fw(n))return J.resolve(null);let r=Vr(n);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=Im(n,null,"F"),r=Vr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=$e(...a);return this.gs.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.bs(n,d);return this.Ds(n,m,u,f.readTime)?this.ps(e,Im(n,null,"F")):this.vs(e,m,n,f)}))})))}ys(e,n,r,o){return Fw(n)||o.isEqual(ke.min())?J.resolve(null):this.gs.getDocuments(e,r).next(a=>{const u=this.bs(n,a);return this.Ds(n,u,r,o)?J.resolve(null):(oa()<=Ue.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),sa(n)),this.vs(e,u,n,Ek(o,lu)).next(d=>d))})}bs(e,n){let r=new kt(lS(e));return n.forEach((o,a)=>{_h(e,a)&&(r=r.add(a))}),r}Ds(e,n,r,o){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}ws(e,n,r){return oa()<=Ue.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",sa(n)),this.gs.getDocumentsMatchingQuery(e,n,ao.min(),r)}vs(e,n,r,o){return this.gs.getDocumentsMatchingQuery(e,r,o).next(a=>(n.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */const wg="LocalStore",eN=3e8;class tN{constructor(e,n,r,o){this.persistence=e,this.Cs=n,this.serializer=o,this.Fs=new mt(Ve),this.Ms=new us(a=>cg(a),dg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zD(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function nN(t,e,n,r){return new tN(t,e,n,r)}async function DS(t,e){const n=De(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next(a=>(o=a,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],d=[];let f=$e();for(const m of o){u.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}for(const m of a){d.push(m.batchId);for(const y of m.mutations)f=f.add(y.key)}return n.localDocuments.getDocuments(r,f).next(m=>({Bs:m,removedBatchIds:u,addedBatchIds:d}))})})}function rN(t,e){const n=De(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),a=n.Os.newChangeBuffer({trackRemovals:!0});return function(d,f,m,y){const _=m.batch,w=_.keys();let I=J.resolve();return w.forEach(b=>{I=I.next(()=>y.getEntry(f,b)).next(D=>{const x=m.docVersions.get(b);Ze(x!==null,48541),D.version.compareTo(x)<0&&(_.applyToRemoteDocument(D,m),D.isValidDocument()&&(D.setReadTime(m.commitVersion),y.addEntry(D)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(f,_))}(n,r,e,a).next(()=>a.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(d){let f=$e();for(let m=0;m<d.mutationResults.length;++m)d.mutationResults[m].transformResults.length>0&&(f=f.add(d.batch.mutations[m].key));return f}(e))).next(()=>n.localDocuments.getDocuments(r,o))})}function NS(t){const e=De(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function iN(t,e){const n=De(t),r=e.snapshotVersion;let o=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=n.Os.newChangeBuffer({trackRemovals:!0});o=n.Fs;const d=[];e.targetChanges.forEach((y,_)=>{const w=o.get(_);if(!w)return;d.push(n.hi.removeMatchingKeys(a,y.removedDocuments,_).next(()=>n.hi.addMatchingKeys(a,y.addedDocuments,_)));let I=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(_)!==null?I=I.withResumeToken(Xt.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):y.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(y.resumeToken,r)),o=o.insert(_,I),function(D,x,O){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=eN?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(w,I,y)&&d.push(n.hi.updateTargetData(a,I))});let f=vi(),m=$e();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(n.persistence.referenceDelegate.updateLimboDocument(a,y))}),d.push(oN(a,u,e.documentUpdates).next(y=>{f=y.Ls,m=y.ks})),!r.isEqual(ke.min())){const y=n.hi.getLastRemoteSnapshotVersion(a).next(_=>n.hi.setTargetsMetadata(a,a.currentSequenceNumber,r));d.push(y)}return J.waitFor(d).next(()=>u.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(n.Fs=o,a))}function oN(t,e,n){let r=$e(),o=$e();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let u=vi();return n.forEach((d,f)=>{const m=a.get(d);f.isFoundDocument()!==m.isFoundDocument()&&(o=o.add(d)),f.isNoDocument()&&f.version.isEqual(ke.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):he(wg,"Ignoring outdated watch update for ",d,". Current version:",m.version," Watch version:",f.version)}),{Ls:u,ks:o}})}function sN(t,e){const n=De(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ag),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aN(t,e){const n=De(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return n.hi.getTargetData(r,e).next(a=>a?(o=a,J.resolve(o)):n.hi.allocateTargetId(r).next(u=>(o=new Yi(e,u,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=n.Fs.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Am(t,e,n){const r=De(t),o=r.Fs.get(e),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,o))}catch(u){if(!La(u))throw u;he(wg,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(o.target)}function Xw(t,e,n){const r=De(t);let o=ke.min(),a=$e();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,m,y){const _=De(f),w=_.Ms.get(y);return w!==void 0?J.resolve(_.Fs.get(w)):_.hi.getTargetData(m,y)}(r,u,Vr(e)).next(d=>{if(d)return o=d.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>r.Cs.getDocumentsMatchingQuery(u,e,n?o:ke.min(),n?a:$e())).next(d=>(lN(r,Kk(e),d),{documents:d,qs:a})))}function lN(t,e,n){let r=t.xs.get(e)||ke.min();n.forEach((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),t.xs.set(e,r)}class Jw{constructor(){this.activeTargetIds=eD()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uN{constructor(){this.Fo=new Jw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Jw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class cN{xo(e){}shutdown(){}}/**
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
 */const Zw="ConnectivityMonitor";class e0{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){he(Zw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){he(Zw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nd=null;function Pm(){return nd===null?nd=function(){return 268435456+Math.round(2147483648*Math.random())}():nd++,"0x"+nd.toString(16)}/**
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
 */const Np="RestConnection",dN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hN{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${o}`,this.Ko=this.databaseId.database===Vd?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Wo(e,n,r,o,a){const u=Pm(),d=this.Go(e,n.toUriEncodedString());he(Np,`Sending RPC '${e}' ${u}:`,d,r);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,o,a);const{host:m}=new URL(d),y=xa(m);return this.jo(e,d,f,r,y).then(_=>(he(Np,`Received RPC '${e}' ${u}: `,_),_),_=>{throw so(Np,`RPC '${e}' ${u} failed with error: `,_,"url: ",d,"request:",r),_})}Jo(e,n,r,o,a,u){return this.Wo(e,n,r,o,a)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Na}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),r&&r.headers.forEach((o,a)=>e[a]=o)}Go(e,n){const r=dN[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class fN{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const nn="WebChannelConnection";class pN extends hN{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,o,a){const u=Pm();return new Promise((d,f)=>{const m=new MI;m.setWithCredentials(!0),m.listenOnce(VI.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case gd.NO_ERROR:const _=m.getResponseJson();he(nn,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(_)),d(_);break;case gd.TIMEOUT:he(nn,`RPC '${e}' ${u} timed out`),f(new ye(ne.DEADLINE_EXCEEDED,"Request time out"));break;case gd.HTTP_ERROR:const w=m.getStatus();if(he(nn,`RPC '${e}' ${u} failed with status:`,w,"response text:",m.getResponseText()),w>0){let I=m.getResponseJson();Array.isArray(I)&&(I=I[0]);const b=I==null?void 0:I.error;if(b&&b.status&&b.message){const D=function(O){const V=O.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(V)>=0?V:ne.UNKNOWN}(b.status);f(new ye(D,b.message))}else f(new ye(ne.UNKNOWN,"Server responded with status "+m.getStatus()))}else f(new ye(ne.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{c_:e,streamId:u,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{he(nn,`RPC '${e}' ${u} completed.`)}});const y=JSON.stringify(o);he(nn,`RPC '${e}' ${u} sending request:`,o),m.send(n,"POST",y,r,15)})}P_(e,n,r){const o=Pm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=UI(),d=BI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,n,r),f.encodeInitMessageHeaders=!0;const y=a.join("");he(nn,`Creating RPC '${e}' stream ${o}: ${y}`,f);const _=u.createWebChannel(y,f);this.T_(_);let w=!1,I=!1;const b=new fN({Ho:x=>{I?he(nn,`Not sending because RPC '${e}' stream ${o} is closed:`,x):(w||(he(nn,`Opening RPC '${e}' stream ${o} transport.`),_.open(),w=!0),he(nn,`RPC '${e}' stream ${o} sending:`,x),_.send(x))},Yo:()=>_.close()}),D=(x,O,V)=>{x.listen(O,B=>{try{V(B)}catch($){setTimeout(()=>{throw $},0)}})};return D(_,jl.EventType.OPEN,()=>{I||(he(nn,`RPC '${e}' stream ${o} transport opened.`),b.s_())}),D(_,jl.EventType.CLOSE,()=>{I||(I=!0,he(nn,`RPC '${e}' stream ${o} transport closed`),b.__(),this.I_(_))}),D(_,jl.EventType.ERROR,x=>{I||(I=!0,so(nn,`RPC '${e}' stream ${o} transport errored. Name:`,x.name,"Message:",x.message),b.__(new ye(ne.UNAVAILABLE,"The operation could not be completed")))}),D(_,jl.EventType.MESSAGE,x=>{var O;if(!I){const V=x.data[0];Ze(!!V,16349);const B=V,$=(B==null?void 0:B.error)||((O=B[0])===null||O===void 0?void 0:O.error);if($){he(nn,`RPC '${e}' stream ${o} received error:`,$);const W=$.status;let Q=function(R){const N=It[R];if(N!==void 0)return wS(N)}(W),P=$.message;Q===void 0&&(Q=ne.INTERNAL,P="Unknown error status: "+W+" with message "+$.message),I=!0,b.__(new ye(Q,P)),_.close()}else he(nn,`RPC '${e}' stream ${o} received:`,V),b.a_(V)}}),D(d,FI.STAT_EVENT,x=>{x.stat===gm.PROXY?he(nn,`RPC '${e}' stream ${o} detected buffering proxy`):x.stat===gm.NOPROXY&&he(nn,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{b.o_()},0),b}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function Op(){return typeof document<"u"?document:null}/**
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
 */function Th(t){return new yD(t,!0)}/**
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
 */class OS{constructor(e,n,r=1e3,o=1.5,a=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=o,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),o=Math.max(0,n-r);o>0&&he("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const t0="PersistentStream";class LS{constructor(e,n,r,o,a,u,d,f){this.Fi=e,this.w_=r,this.S_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new OS(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===ne.RESOURCE_EXHAUSTED?(gi(n.toString()),gi("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.b_===n&&this.W_(r,o)},r=>{e(()=>{const o=new ye(ne.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(o)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{r(()=>this.G_(o))}),this.stream.onMessage(o=>{r(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return he(t0,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(he(t0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mN extends LS{constructor(e,n,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,u),this.serializer=a}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=ED(this.serializer,e),r=function(a){if(!("targetChange"in a))return ke.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ke.min():u.readTime?Fr(u.readTime):ke.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Cm(this.serializer),n.addTarget=function(a,u){let d;const f=u.target;if(d=Em(f)?{documents:TD(a,f)}:{query:bD(a,f).Vt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=SS(a,u.resumeToken);const m=Sm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}else if(u.snapshotVersion.compareTo(ke.min())>0){d.readTime=zd(a,u.snapshotVersion.toTimestamp());const m=Sm(a,u.expectedCount);m!==null&&(d.expectedCount=m)}return d}(this.serializer,e);const r=AD(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Cm(this.serializer),n.removeTarget=e,this.k_(n)}}class gN extends LS{constructor(e,n,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,u),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=SD(e.writeResults,e.commitTime),r=Fr(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Cm(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>ID(this.serializer,r))};this.k_(n)}}/**
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
 */class vN{}class yN extends vN{constructor(e,n,r,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new ye(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Wo(e,Tm(n,r),o,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ye(ne.UNKNOWN,a.toString())})}Jo(e,n,r,o,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Jo(e,Tm(n,r),o,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ye(ne.UNKNOWN,u.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class _N{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(gi(n),this._a=!1):he("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const ss="RemoteStore";class wN{constructor(e,n,r,o,a){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo(u=>{r.enqueueAndForget(async()=>{ds(this)&&(he(ss,"Restarting streams for network reachability change."),await async function(f){const m=De(f);m.Ia.add(4),await Ru(m),m.Aa.set("Unknown"),m.Ia.delete(4),await bh(m)}(this))})}),this.Aa=new _N(r,o)}}async function bh(t){if(ds(t))for(const e of t.da)await e(!0)}async function Ru(t){for(const e of t.da)await e(!1)}function MS(t,e){const n=De(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Tg(n)?Sg(n):Ma(n).x_()&&Ig(n,e))}function Eg(t,e){const n=De(t),r=Ma(n);n.Ta.delete(e),r.x_()&&VS(n,e),n.Ta.size===0&&(r.x_()?r.B_():ds(n)&&n.Aa.set("Unknown"))}function Ig(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ma(t).H_(e)}function VS(t,e){t.Ra.$e(e),Ma(t).Y_(e)}function Sg(t){t.Ra=new pD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ma(t).start(),t.Aa.aa()}function Tg(t){return ds(t)&&!Ma(t).M_()&&t.Ta.size>0}function ds(t){return De(t).Ia.size===0}function FS(t){t.Ra=void 0}async function EN(t){t.Aa.set("Online")}async function IN(t){t.Ta.forEach((e,n)=>{Ig(t,e)})}async function SN(t,e){FS(t),Tg(t)?(t.Aa.la(e),Sg(t)):t.Aa.set("Unknown")}async function TN(t,e,n){if(t.Aa.set("Online"),e instanceof IS&&e.state===2&&e.cause)try{await async function(o,a){const u=a.cause;for(const d of a.targetIds)o.Ta.has(d)&&(await o.remoteSyncer.rejectListen(d,u),o.Ta.delete(d),o.Ra.removeTarget(d))}(t,e)}catch(r){he(ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hd(t,r)}else if(e instanceof wd?t.Ra.Ye(e):e instanceof ES?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ke.min()))try{const r=await NS(t.localStore);n.compareTo(r)>=0&&await function(a,u){const d=a.Ra.Pt(u);return d.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const y=a.Ta.get(m);y&&a.Ta.set(m,y.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,m)=>{const y=a.Ta.get(f);if(!y)return;a.Ta.set(f,y.withResumeToken(Xt.EMPTY_BYTE_STRING,y.snapshotVersion)),VS(a,f);const _=new Yi(y.target,f,m,y.sequenceNumber);Ig(a,_)}),a.remoteSyncer.applyRemoteEvent(d)}(t,n)}catch(r){he(ss,"Failed to raise snapshot:",r),await Hd(t,r)}}async function Hd(t,e,n){if(!La(e))throw e;t.Ia.add(1),await Ru(t),t.Aa.set("Offline"),n||(n=()=>NS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{he(ss,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await bh(t)})}function BS(t,e){return e().catch(n=>Hd(t,n,e))}async function Ch(t){const e=De(t),n=ho(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:ag;for(;bN(e);)try{const o=await sN(e.localStore,r);if(o===null){e.Pa.length===0&&n.B_();break}r=o.batchId,CN(e,o)}catch(o){await Hd(e,o)}US(e)&&jS(e)}function bN(t){return ds(t)&&t.Pa.length<10}function CN(t,e){t.Pa.push(e);const n=ho(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function US(t){return ds(t)&&!ho(t).M_()&&t.Pa.length>0}function jS(t){ho(t).start()}async function AN(t){ho(t).na()}async function PN(t){const e=ho(t);for(const n of t.Pa)e.X_(n.mutations)}async function RN(t,e,n){const r=t.Pa.shift(),o=pg.from(r,e,n);await BS(t,()=>t.remoteSyncer.applySuccessfulWrite(o)),await Ch(t)}async function xN(t,e){e&&ho(t).Z_&&await async function(r,o){if(function(u){return hD(u)&&u!==ne.ABORTED}(o.code)){const a=r.Pa.shift();ho(r).N_(),await BS(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o)),await Ch(r)}}(t,e),US(t)&&jS(t)}async function n0(t,e){const n=De(t);n.asyncQueue.verifyOperationInProgress(),he(ss,"RemoteStore received new credentials");const r=ds(n);n.Ia.add(3),await Ru(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await bh(n)}async function kN(t,e){const n=De(t);e?(n.Ia.delete(2),await bh(n)):e||(n.Ia.add(2),await Ru(n),n.Aa.set("Unknown"))}function Ma(t){return t.Va||(t.Va=function(n,r,o){const a=De(n);return a.ia(),new mN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(t.datastore,t.asyncQueue,{Zo:EN.bind(null,t),e_:IN.bind(null,t),n_:SN.bind(null,t),J_:TN.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),Tg(t)?Sg(t):t.Aa.set("Unknown")):(await t.Va.stop(),FS(t))})),t.Va}function ho(t){return t.ma||(t.ma=function(n,r,o){const a=De(n);return a.ia(),new gN(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:AN.bind(null,t),n_:xN.bind(null,t),ea:PN.bind(null,t),ta:RN.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await Ch(t)):(await t.ma.stop(),t.Pa.length>0&&(he(ss,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class bg{constructor(e,n,r,o,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new no,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,a){const u=Date.now()+r,d=new bg(e,n,u,o,a);return d.start(r),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ye(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cg(t,e){if(gi("AsyncQueue",`${e}: ${t}`),La(t))return new ye(ne.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class pa{static emptySet(e){return new pa(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Se.comparator(n.key,r.key):(n,r)=>Se.comparator(n.key,r.key),this.keyedMap=$l(),this.sortedSet=new mt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pa)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new pa;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class r0{constructor(){this.fa=new mt(Se.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):Ae(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ta{constructor(e,n,r,o,a,u,d,f,m){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,n,r,o,a){const u=[];return n.forEach(d=>{u.push({type:0,doc:d})}),new Ta(e,n,pa.emptySet(n),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class DN{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class NN{constructor(){this.queries=i0(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const o=De(n),a=o.queries;o.queries=i0(),a.forEach((u,d)=>{for(const f of d.wa)f.onError(r)})})(this,new ye(ne.ABORTED,"Firestore shutting down"))}}function i0(){return new us(t=>aS(t),yh)}async function ON(t,e){const n=De(t);let r=3;const o=e.query;let a=n.queries.get(o);a?!a.Sa()&&e.ba()&&(r=2):(a=new DN,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await n.onListen(o,!0);break;case 1:a.ya=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(u){const d=Cg(u,`Initialization of query '${sa(e.query)}' failed`);return void e.onError(d)}n.queries.set(o,a),a.wa.push(e),e.va(n.onlineState),a.ya&&e.Ca(a.ya)&&Ag(n)}async function LN(t,e){const n=De(t),r=e.query;let o=3;const a=n.queries.get(r);if(a){const u=a.wa.indexOf(e);u>=0&&(a.wa.splice(u,1),a.wa.length===0?o=e.ba()?0:1:!a.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MN(t,e){const n=De(t);let r=!1;for(const o of e){const a=o.query,u=n.queries.get(a);if(u){for(const d of u.wa)d.Ca(o)&&(r=!0);u.ya=o}}r&&Ag(n)}function VN(t,e,n){const r=De(t),o=r.queries.get(e);if(o)for(const a of o.wa)a.onError(n);r.queries.delete(e)}function Ag(t){t.Da.forEach(e=>{e.next()})}var Rm,o0;(o0=Rm||(Rm={})).Fa="default",o0.Cache="cache";class FN{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new Ta(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ta.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Rm.Cache}}/**
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
 */class $S{constructor(e){this.key=e}}class zS{constructor(e){this.key=e}}class BN{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=$e(),this.mutatedKeys=$e(),this.Xa=lS(e),this.eu=new pa(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new r0,o=n?n.eu:this.eu;let a=n?n.mutatedKeys:this.mutatedKeys,u=o,d=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,m=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((y,_)=>{const w=o.get(y),I=_h(this.query,_)?_:null,b=!!w&&this.mutatedKeys.has(w.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;w&&I?w.data.isEqual(I.data)?b!==D&&(r.track({type:3,doc:I}),x=!0):this.iu(w,I)||(r.track({type:2,doc:I}),x=!0,(f&&this.Xa(I,f)>0||m&&this.Xa(I,m)<0)&&(d=!0)):!w&&I?(r.track({type:0,doc:I}),x=!0):w&&!I&&(r.track({type:1,doc:w}),x=!0,(f||m)&&(d=!0)),x&&(I?(u=u.add(I),a=D?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),r.track({type:1,doc:y})}return{eu:u,ru:r,Ds:d,mutatedKeys:a}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,o){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const u=e.ru.pa();u.sort((y,_)=>function(I,b){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{At:x})}};return D(I)-D(b)}(y.type,_.type)||this.Xa(y.doc,_.doc)),this.su(r),o=o!=null&&o;const d=n&&!o?this.ou():[],f=this.Za.size===0&&this.current&&!o?1:0,m=f!==this.Ya;return this.Ya=f,u.length!==0||m?{snapshot:new Ta(this.query,e.eu,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:d}:{_u:d}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new r0,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=$e(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new zS(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new $S(r))}),n}uu(e){this.Ha=e.qs,this.Za=$e();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ta.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Pg="SyncEngine";class UN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class jN{constructor(e){this.key=e,this.lu=!1}}class $N{constructor(e,n,r,o,a,u){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new us(d=>aS(d),yh),this.Tu=new Map,this.Iu=new Set,this.du=new mt(Se.comparator),this.Eu=new Map,this.Au=new vg,this.Ru={},this.Vu=new Map,this.mu=Sa.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function zN(t,e,n=!0){const r=QS(t);let o;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.cu()):o=await WS(r,e,n,!0),o}async function WN(t,e){const n=QS(t);await WS(n,e,!0,!1)}async function WS(t,e,n,r){const o=await aN(t.localStore,Vr(e)),a=o.targetId,u=t.sharedClientState.addLocalQueryTarget(a,n);let d;return r&&(d=await HN(t,e,a,u==="current",o.resumeToken)),t.isPrimaryClient&&n&&MS(t.remoteStore,o),d}async function HN(t,e,n,r,o){t.gu=(_,w,I)=>async function(D,x,O,V){let B=x.view.nu(O);B.Ds&&(B=await Xw(D.localStore,x.query,!1).then(({documents:P})=>x.view.nu(P,B)));const $=V&&V.targetChanges.get(x.targetId),W=V&&V.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(B,D.isPrimaryClient,$,W);return a0(D,x.targetId,Q._u),Q.snapshot}(t,_,w,I);const a=await Xw(t.localStore,e,!0),u=new BN(e,a.qs),d=u.nu(a.documents),f=Pu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",o),m=u.applyChanges(d,t.isPrimaryClient,f);a0(t,n,m._u);const y=new UN(e,n,u);return t.Pu.set(e,y),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),m.snapshot}async function GN(t,e,n){const r=De(t),o=r.Pu.get(e),a=r.Tu.get(o.targetId);if(a.length>1)return r.Tu.set(o.targetId,a.filter(u=>!yh(u,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Am(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),n&&Eg(r.remoteStore,o.targetId),xm(r,o.targetId)}).catch(Oa)):(xm(r,o.targetId),await Am(r.localStore,o.targetId,!0))}async function qN(t,e){const n=De(t),r=n.Pu.get(e),o=n.Tu.get(r.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Eg(n.remoteStore,r.targetId))}async function KN(t,e,n){const r=tO(t);try{const o=await function(u,d){const f=De(u),m=ut.now(),y=d.reduce((I,b)=>I.add(b.key),$e());let _,w;return f.persistence.runTransaction("Locally write mutations","readwrite",I=>{let b=vi(),D=$e();return f.Os.getEntries(I,y).next(x=>{b=x,b.forEach((O,V)=>{V.isValidDocument()||(D=D.add(O))})}).next(()=>f.localDocuments.getOverlayedDocuments(I,b)).next(x=>{_=x;const O=[];for(const V of d){const B=aD(V,_.get(V.key).overlayedDocument);B!=null&&O.push(new cs(V.key,B,eS(B.value.mapValue),fi.exists(!0)))}return f.mutationQueue.addMutationBatch(I,m,O,d)}).next(x=>{w=x;const O=x.applyToLocalDocumentSet(_,D);return f.documentOverlayCache.saveOverlays(I,x.batchId,O)})}).then(()=>({batchId:w.batchId,changes:cS(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(u,d,f){let m=u.Ru[u.currentUser.toKey()];m||(m=new mt(Ve)),m=m.insert(d,f),u.Ru[u.currentUser.toKey()]=m}(r,o.batchId,n),await xu(r,o.changes),await Ch(r.remoteStore)}catch(o){const a=Cg(o,"Failed to persist write");n.reject(a)}}async function HS(t,e){const n=De(t);try{const r=await iN(n.localStore,e);e.targetChanges.forEach((o,a)=>{const u=n.Eu.get(a);u&&(Ze(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.lu=!0:o.modifiedDocuments.size>0?Ze(u.lu,14607):o.removedDocuments.size>0&&(Ze(u.lu,42227),u.lu=!1))}),await xu(n,r,e)}catch(r){await Oa(r)}}function s0(t,e,n){const r=De(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.Pu.forEach((a,u)=>{const d=u.view.va(e);d.snapshot&&o.push(d.snapshot)}),function(u,d){const f=De(u);f.onlineState=d;let m=!1;f.queries.forEach((y,_)=>{for(const w of _.wa)w.va(d)&&(m=!0)}),m&&Ag(f)}(r.eventManager,e),o.length&&r.hu.J_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QN(t,e,n){const r=De(t);r.sharedClientState.updateQueryState(e,"rejected",n);const o=r.Eu.get(e),a=o&&o.key;if(a){let u=new mt(Se.comparator);u=u.insert(a,on.newNoDocument(a,ke.min()));const d=$e().add(a),f=new Sh(ke.min(),new Map,new mt(Ve),u,d);await HS(r,f),r.du=r.du.remove(a),r.Eu.delete(e),Rg(r)}else await Am(r.localStore,e,!1).then(()=>xm(r,e,n)).catch(Oa)}async function YN(t,e){const n=De(t),r=e.batch.batchId;try{const o=await rN(n.localStore,e);qS(n,r,null),GS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xu(n,o)}catch(o){await Oa(o)}}async function XN(t,e,n){const r=De(t);try{const o=await function(u,d){const f=De(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let y;return f.mutationQueue.lookupMutationBatch(m,d).next(_=>(Ze(_!==null,37113),y=_.keys(),f.mutationQueue.removeMutationBatch(m,_))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,y,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,y)).next(()=>f.localDocuments.getDocuments(m,y))})}(r.localStore,e);qS(r,e,n),GS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xu(r,o)}catch(o){await Oa(o)}}function GS(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function qS(t,e,n){const r=De(t);let o=r.Ru[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(n?a.reject(n):a.resolve(),o=o.remove(e)),r.Ru[r.currentUser.toKey()]=o}}function xm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||KS(t,r)})}function KS(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Eg(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Rg(t))}function a0(t,e,n){for(const r of n)r instanceof $S?(t.Au.addReference(r.key,e),JN(t,r)):r instanceof zS?(he(Pg,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||KS(t,r.key)):Ae(19791,{yu:r})}function JN(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(he(Pg,"New document in limbo: "+n),t.Iu.add(r),Rg(t))}function Rg(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new Se(pt.fromString(e)),r=t.mu.next();t.Eu.set(r,new jN(n)),t.du=t.du.insert(n,r),MS(t.remoteStore,new Yi(Vr(hg(n.path)),r,"TargetPurposeLimboResolution",ph.ue))}}async function xu(t,e,n){const r=De(t),o=[],a=[],u=[];r.Pu.isEmpty()||(r.Pu.forEach((d,f)=>{u.push(r.gu(f,e,n).then(m=>{var y;if((m||n)&&r.isPrimaryClient){const _=m?!m.fromCache:(y=n==null?void 0:n.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;r.sharedClientState.updateQueryState(f.targetId,_?"current":"not-current")}if(m){o.push(m);const _=_g.Es(f.targetId,m);a.push(_)}}))}),await Promise.all(u),r.hu.J_(o),await async function(f,m){const y=De(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>J.forEach(m,w=>J.forEach(w.Is,I=>y.persistence.referenceDelegate.addReference(_,w.targetId,I)).next(()=>J.forEach(w.ds,I=>y.persistence.referenceDelegate.removeReference(_,w.targetId,I)))))}catch(_){if(!La(_))throw _;he(wg,"Failed to update sequence numbers: "+_)}for(const _ of m){const w=_.targetId;if(!_.fromCache){const I=y.Fs.get(w),b=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(b);y.Fs=y.Fs.insert(w,D)}}}(r.localStore,a))}async function ZN(t,e){const n=De(t);if(!n.currentUser.isEqual(e)){he(Pg,"User change. New user:",e.toKey());const r=await DS(n.localStore,e);n.currentUser=e,function(a,u){a.Vu.forEach(d=>{d.forEach(f=>{f.reject(new ye(ne.CANCELLED,u))})}),a.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xu(n,r.Bs)}}function eO(t,e){const n=De(t),r=n.Eu.get(e);if(r&&r.lu)return $e().add(r.key);{let o=$e();const a=n.Tu.get(e);if(!a)return o;for(const u of a){const d=n.Pu.get(u);o=o.unionWith(d.view.tu)}return o}}function QS(t){const e=De(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=HS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QN.bind(null,e),e.hu.J_=MN.bind(null,e.eventManager),e.hu.pu=VN.bind(null,e.eventManager),e}function tO(t){const e=De(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XN.bind(null,e),e}class Gd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Th(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return nN(this.persistence,new ZD,e.initialUser,this.serializer)}Du(e){return new kS(yg.Vi,this.serializer)}bu(e){return new uN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Gd.provider={build:()=>new Gd};class nO extends Gd{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ze(this.persistence.referenceDelegate instanceof Wd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new FD(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?In.withCacheSize(this.cacheSizeBytes):In.DEFAULT;return new kS(r=>Wd.Vi(r,n),this.serializer)}}class km{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>s0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZN.bind(null,this.syncEngine),await kN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NN}()}createDatastore(e){const n=Th(e.databaseInfo.databaseId),r=function(a){return new pN(a)}(e.databaseInfo);return function(a,u,d,f){return new yN(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,o,a,u,d){return new wN(r,o,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,n=>s0(this.syncEngine,n,0),function(){return e0.C()?new e0:new cN}())}createSyncEngine(e,n){return function(o,a,u,d,f,m,y){const _=new $N(o,a,u,d,f,m);return y&&(_.fu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const a=De(o);he(ss,"RemoteStore shutting down."),a.Ia.add(5),await Ru(a),a.Ea.shutdown(),a.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}km.provider={build:()=>new km};/**
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
 *//**
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
 */class rO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):gi("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const fo="FirestoreClient";class iO{constructor(e,n,r,o,a){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=rn.UNAUTHENTICATED,this.clientId=og.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{he(fo,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(he(fo,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new no;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Cg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lp(t,e){t.asyncQueue.verifyOperationInProgress(),he(fo,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async o=>{r.isEqual(o)||(await DS(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>{so("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{he("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{so("Terminating Firestore due to IndexedDb database deletion failed",o)})}),t._offlineComponents=e}async function l0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oO(t);he(fo,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>n0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,o)=>n0(e.remoteStore,o)),t._onlineComponents=e}async function oO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he(fo,"Using user provided OfflineComponentProvider");try{await Lp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ne.FAILED_PRECONDITION||o.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;so("Error using user provided cache. Falling back to memory cache: "+n),await Lp(t,new Gd)}}else he(fo,"Using default OfflineComponentProvider"),await Lp(t,new nO(void 0));return t._offlineComponents}async function YS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he(fo,"Using user provided OnlineComponentProvider"),await l0(t,t._uninitializedComponentsProvider._online)):(he(fo,"Using default OnlineComponentProvider"),await l0(t,new km))),t._onlineComponents}function sO(t){return YS(t).then(e=>e.syncEngine)}async function aO(t){const e=await YS(t),n=e.eventManager;return n.onListen=zN.bind(null,e.syncEngine),n.onUnlisten=GN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=qN.bind(null,e.syncEngine),n}function lO(t,e,n={}){const r=new no;return t.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,m){const y=new rO({next:w=>{y.Ou(),u.enqueueAndForget(()=>LN(a,_));const I=w.docs.has(d);!I&&w.fromCache?m.reject(new ye(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&w.fromCache&&f&&f.source==="server"?m.reject(new ye(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),_=new FN(hg(d.path),y,{includeMetadataChanges:!0,ka:!0});return ON(a,_)}(await aO(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function XS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const u0=new Map;/**
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
 */const JS="firestore.googleapis.com",c0=!0;class d0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ye(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=JS,this.ssl=c0}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:c0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=xS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MD)throw new ye(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=XS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new ye(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new ye(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new ye(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xg{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ye(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ye(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ck;switch(r.type){case"firstParty":return new pk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ye(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=u0.get(n);r&&(he("ComponentProvider","Removing Datastore"),u0.delete(n),r.terminate())}(this),Promise.resolve()}}function uO(t,e,n,r={}){var o;t=au(t,xg);const a=xa(e),u=t._getSettings(),d=Object.assign(Object.assign({},u),{emulatorOptions:t._getEmulatorOptions()}),f=`${e}:${n}`;a&&(qE(`https://${f}`),KE("Firestore",!0)),u.host!==JS&&u.host!==f&&so("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},u),{host:f,ssl:a,emulatorOptions:r});if(!ts(m,d)&&(t._setSettings(m),r.mockUserToken)){let y,_;if(typeof r.mockUserToken=="string")y=r.mockUserToken,_=rn.MOCK_USER;else{y=wA(r.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new ye(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new rn(w)}t._authCredentials=new dk(new $I(y,_))}}/**
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
 */class kg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new kg(this.firestore,e,this._query)}}class jt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new jt(this.firestore,e,this._key)}toJSON(){return{type:jt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Au(n,jt._jsonSchema))return new jt(e,r||null,new Se(pt.fromString(n.referencePath)))}}jt._jsonSchemaVersion="firestore/documentReference/1.0",jt._jsonSchema={type:Tt("string",jt._jsonSchemaVersion),referencePath:Tt("string")};class pu extends kg{constructor(e,n,r){super(e,n,hg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new jt(this.firestore,null,new Se(e))}withConverter(e){return new pu(this.firestore,e,this._path)}}function Ah(t,e,...n){if(t=an(t),arguments.length===1&&(e=og.newId()),_k("doc","path",e),t instanceof xg){const r=pt.fromString(e,...n);return bw(r),new jt(t,null,new Se(r))}{if(!(t instanceof jt||t instanceof pu))throw new ye(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pt.fromString(e,...n));return bw(r),new jt(t.firestore,t instanceof pu?t.converter:null,new Se(r))}}/**
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
 */const h0="AsyncQueue";class f0{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new OS(this,"async_queue_retry"),this.oc=()=>{const r=Op();r&&he(h0,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Op();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Op();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new no;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!La(e))throw e;he(h0,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,gi("INTERNAL UNHANDLED ERROR: ",p0(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const o=bg.createAndSchedule(this,e,n,r,a=>this.lc(a));return this.ec.push(o),o}ac(){this.tc&&Ae(47125,{hc:p0(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function p0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Dg extends xg{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new f0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new f0(e),this._firestoreClient=void 0,await e}}}function cO(t,e){const n=typeof t=="object"?t:JE(),r=typeof t=="string"?t:Vd,o=Qm(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=yA("firestore");a&&uO(o,...a)}return o}function ZS(t){if(t._terminated)throw new ye(ne.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dO(t),t._firestoreClient}function dO(t){var e,n,r;const o=t._freezeSettings(),a=function(d,f,m,y){return new kk(d,f,m,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,XS(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,o);t._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),t._firestoreClient=new iO(t._authCredentials,t._appCheckCredentials,t._queue,a,t._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(t._componentsProvider))}/**
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
 */class Xn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Xn(Xt.fromBase64String(e))}catch(n){throw new ye(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Xn(Xt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Xn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Au(e,Xn._jsonSchema))return Xn.fromBase64String(e.bytes)}}Xn._jsonSchemaVersion="firestore/bytes/1.0",Xn._jsonSchema={type:Tt("string",Xn._jsonSchemaVersion),bytes:Tt("string")};/**
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
 */class Ph{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ye(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ng{constructor(e){this._methodName=e}}/**
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
 */class Br{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ye(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ye(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Br._jsonSchemaVersion}}static fromJSON(e){if(Au(e,Br._jsonSchema))return new Br(e.latitude,e.longitude)}}Br._jsonSchemaVersion="firestore/geoPoint/1.0",Br._jsonSchema={type:Tt("string",Br._jsonSchemaVersion),latitude:Tt("number"),longitude:Tt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ur{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Ur._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Au(e,Ur._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Ur(e.vectorValues);throw new ye(ne.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ur._jsonSchemaVersion="firestore/vectorValue/1.0",Ur._jsonSchema={type:Tt("string",Ur._jsonSchemaVersion),vectorValues:Tt("object")};/**
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
 */const hO=/^__.*__$/;class eT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{Ec:t})}}class Og{constructor(e,n,r,o,a,u){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Og(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Rc({path:r,mc:!1});return o.fc(e),o}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.Rc({path:r,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return qd(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(tT(this.Ec)&&hO.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class fO{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Th(e)}Dc(e,n,r,o=!1){return new Og({Ec:e,methodName:n,bc:r,path:Qt.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pO(t){const e=t._freezeSettings(),n=Th(t._databaseId);return new fO(t._databaseId,!!e.ignoreUndefinedProperties,n)}class ku extends Ng{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ku}}function mO(t,e,n,r){const o=t.Dc(1,e,n);rT("Data must be an object, but it was:",o,r);const a=[],u=Dn.empty();vo(r,(f,m)=>{const y=Lg(e,f,n);m=an(m);const _=o.gc(y);if(m instanceof ku)a.push(y);else{const w=Rh(m,_);w!=null&&(a.push(y),u.set(y,w))}});const d=new yr(a);return new eT(u,d,o.fieldTransforms)}function gO(t,e,n,r,o,a){const u=t.Dc(1,e,n),d=[m0(e,r,n)],f=[o];if(a.length%2!=0)throw new ye(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<a.length;w+=2)d.push(m0(e,a[w])),f.push(a[w+1]);const m=[],y=Dn.empty();for(let w=d.length-1;w>=0;--w)if(!_O(m,d[w])){const I=d[w];let b=f[w];b=an(b);const D=u.gc(I);if(b instanceof ku)m.push(I);else{const x=Rh(b,D);x!=null&&(m.push(I),y.set(I,x))}}const _=new yr(m);return new eT(y,_,u.fieldTransforms)}function Rh(t,e){if(nT(t=an(t)))return rT("Unsupported field value:",e,t),vO(t,e);if(t instanceof Ng)return function(r,o){if(!tT(o.Ec))throw o.wc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,o){const a=[];let u=0;for(const d of r){let f=Rh(d,o.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(t,e)}return function(r,o){if((r=an(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tD(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=ut.fromDate(r);return{timestampValue:zd(o.serializer,a)}}if(r instanceof ut){const a=new ut(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zd(o.serializer,a)}}if(r instanceof Br)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Xn)return{bytesValue:SS(o.serializer,r._byteString)};if(r instanceof jt){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:gg(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Ur)return function(u,d){return{mapValue:{fields:{[JI]:{stringValue:ZI},[Fd]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw d.wc("VectorValues must only contain numeric values.");return fg(d.serializer,m)})}}}}}}(r,o);throw o.wc(`Unsupported field value: ${sg(r)}`)}(t,e)}function vO(t,e){const n={};return GI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vo(t,(r,o)=>{const a=Rh(o,e.Vc(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function nT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof Br||t instanceof Xn||t instanceof jt||t instanceof Ng||t instanceof Ur)}function rT(t,e,n){if(!nT(n)||!WI(n)){const r=sg(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function m0(t,e,n){if((e=an(e))instanceof Ph)return e._internalPath;if(typeof e=="string")return Lg(t,e);throw qd("Field path arguments must be of type string or ",t,!1,void 0,n)}const yO=new RegExp("[~\\*/\\[\\]]");function Lg(t,e,n){if(e.search(yO)>=0)throw qd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ph(...e.split("."))._internalPath}catch{throw qd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qd(t,e,n,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let d=`Function ${e}() called with invalid data`;n&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${o}`),f+=")"),new ye(ne.INVALID_ARGUMENT,d+t+f)}function _O(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class iT{constructor(e,n,r,o,a){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(oT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wO extends iT{data(){return super.data()}}function oT(t,e){return typeof e=="string"?Lg(t,e):e instanceof Ph?e._internalPath:e._delegate._internalPath}class EO{convertValue(e,n="none"){switch(co(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(uo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vo(e,(o,a)=>{r[o]=this.convertValue(a,n)}),r}convertVectorValue(e){var n,r,o;const a=(o=(r=(n=e.fields)===null||n===void 0?void 0:n[Fd].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(u=>_t(u.doubleValue));return new Ur(a)}convertGeoPoint(e){return new Br(_t(e.latitude),_t(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(uu(e));default:return null}}convertTimestamp(e){const n=lo(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=pt.fromString(e);Ze(RS(r),9688,{name:e});const o=new cu(r.get(1),r.get(3)),a=new Se(r.popFirst(5));return o.isEqual(n)||gi(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}class Wl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Jo extends iT{constructor(e,n,r,o,a,u){super(e,n,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ed(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(oT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(ne.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Jo._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Jo._jsonSchemaVersion="firestore/documentSnapshot/1.0",Jo._jsonSchema={type:Tt("string",Jo._jsonSchemaVersion),bundleSource:Tt("string","DocumentSnapshot"),bundleName:Tt("string"),bundle:Tt("string")};class Ed extends Jo{data(e={}){return super.data(e)}}class Jl{constructor(e,n,r,o){this._firestore=e,this._userDataWriter=n,this._snapshot=o,this.metadata=new Wl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ed(this._firestore,this._userDataWriter,r.key,r,new Wl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ye(ne.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,a){if(o._snapshot.oldDocs.isEmpty()){let u=0;return o._snapshot.docChanges.map(d=>{const f=new Ed(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Wl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new Ed(o._firestore,o._userDataWriter,d.doc.key,d.doc,new Wl(o._snapshot.mutatedKeys.has(d.doc.key),o._snapshot.fromCache),o.query.converter);let m=-1,y=-1;return d.type!==0&&(m=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:IO(d.type),doc:f,oldIndex:m,newIndex:y}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ye(ne.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Jl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=og.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach(a=>{a._document!==null&&(n.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),o.push(a.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function IO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:t})}}/**
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
 */function SO(t){t=au(t,jt);const e=au(t.firestore,Dg);return lO(ZS(e),t._key).then(n=>CO(e,t,n))}Jl._jsonSchemaVersion="firestore/querySnapshot/1.0",Jl._jsonSchema={type:Tt("string",Jl._jsonSchemaVersion),bundleSource:Tt("string","QuerySnapshot"),bundleName:Tt("string"),bundle:Tt("string")};class TO extends EO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Xn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new jt(this.firestore,null,n)}}function Mg(t,e,n,...r){t=au(t,jt);const o=au(t.firestore,Dg),a=pO(o);let u;return u=typeof(e=an(e))=="string"||e instanceof Ph?gO(a,"updateDoc",t._key,e,n,r):mO(a,"updateDoc",t._key,e),bO(o,[u.toMutation(t._key,fi.exists(!0))])}function bO(t,e){return function(r,o){const a=new no;return r.asyncQueue.enqueueAndForget(async()=>KN(await sO(r),o,a)),a.promise}(ZS(t),e)}function CO(t,e,n){const r=n.docs.get(e._key),o=new TO(t);return new Jo(t,o,e._key,r,new Wl(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function AO(){return new ku("deleteField")}(function(e,n=!0){(function(o){Na=o})(ka),_a(new ns("firestore",(r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),d=new Dg(new hk(r.getProvider("auth-internal")),new mk(u,r.getProvider("app-check-internal")),function(m,y){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new ye(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new cu(m.options.projectId,y)}(u,o),u);return a=Object.assign({useFetchStreams:n},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),eo(ww,Ew,e),eo(ww,Ew,"esm2017")})();const PO={apiKey:"AIzaSyBbXsS-nxFtF5lSbOz99jdQ8bl_wqjVsms",authDomain:"projectm-3780c.firebaseapp.com",projectId:"projectm-3780c",storageBucket:"projectm-3780c.firebasestorage.app",messagingSenderId:"315745607112",appId:"1:315745607112:web:7201bd42b124720d5e74fd"},sT=XE(PO),Id=sk(sT),xh=cO(sT),RO=[{id:1,name:"Calendar",icon:"icon/calendar_icon.svg",ariaLabel:"Open calendar"},{id:2,name:"Messages question",icon:"icon/message-question_icon.svg",ariaLabel:"Check messages or questions"},{id:3,name:"Notifications",icon:"icon/notification_icon.svg",ariaLabel:"View notifications"}],xO=[{id:1,userName:"Lee Song",country:"United States",avatar:"image/avatar-1.jpeg"}],kO=()=>{const[t,e]=oe.useState(!1),{setIsLoggedIn:n,loggedUser:r,setShowLoginForm:o}=oe.useContext(Ra),a=()=>{e(d=>!d)},u=()=>{QR(Id).then(()=>{n(!1),o(!1),console.log("LogOut:")}).catch(d=>console.log(d))};return console.log("User:",r),z.jsxs(KC,{role:"region","aria-label":"User menu block",children:[z.jsx(QC,{"aria-label":"User menu navigation",children:RO.map(({id:d,icon:f,ariaLabel:m})=>z.jsx(YC,{"aria-label":m,"aria-haspopup":"true",children:z.jsx(j_,{src:f,alt:""})},d))}),z.jsxs(XC,{role:"group","aria-label":"User information",children:[xO.map(({id:d,userName:f,country:m,avatar:y})=>z.jsxs(U_,{role:"group","aria-label":"User information",children:[z.jsxs(qC,{"aria-labelledby":`user-name-${d} user-country-${d}`,children:[z.jsx(JC,{id:`user-name-${d}`,children:f}),z.jsx(ZC,{id:`user-country-${d}`,children:m})]}),z.jsx(eA,{src:y,alt:f,role:"presentation"})]},d)),z.jsx(tA,{onClick:a,"aria-haspopup":"true","aria-label":"Open user menu",children:z.jsx(j_,{src:"icon/arrow-down_icon.svg",alt:"User"})})]}),t&&z.jsx(U_,{children:z.jsx(nA,{"aria-label":"User menu popup",children:z.jsx(sA,{onClick:u,children:"Log out"})})})]})},Vg=oe.forwardRef(({onToggleSidebar:t,isSidebarOpen:e},n)=>{const{isLoggedIn:r}=oe.useContext(Ra);return z.jsxs(FC,{ref:n,children:[z.jsxs(NC,{children:[z.jsxs(MC,{children:[z.jsx("img",{src:"logo.svg",alt:"Logo"}),z.jsx("span",{children:"Project M."})]}),r?z.jsx(VC,{className:"sidebar-toggle",onClick:t,$isSidebarOpen:e,children:z.jsx("img",{src:"icon/arrow_left.svg",alt:"Sidebar opener"})}):""]}),r?z.jsxs(BC,{children:[z.jsx(GC,{}),z.jsx(kO,{})]}):""]})});Vg.displayName="Header";Vg.propTypes={onToggleSidebar:di.func.isRequired,isSidebarOpen:di.bool.isRequired};const DO=ee.div``,NO=ee.div``,OO=ee.div`
  @media (max-width: ${Zn.mobileL}) {
    display: none;
  }
`,LO=ee.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1rem;

  @media (max-width: ${({theme:t})=>t.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(1fr));
  }
`,MO=ee.div`
  padding: 1.5rem;
  width: 23rem;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    width: 20rem;
    padding: 1rem;
  }
`,VO=ee.div`
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
`,FO=ee.h2`
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
`,BO=ee.p`
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
`,UO=ee.button``,jO=ee.img``,$O=ee.div`
  height: 100%;
`,zO=ee.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 16px;

  background: ${({theme:t})=>t.colors.primaryLightBackground};

  @media (max-width: ${Zn.mobile}) {
    padding: 0.8rem;
  }
`,WO=ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,HO=ee.div`
  padding: 0 0.4rem;
  line-height: 1.5rem;
  border-radius: 4px;
  color: ${({$levelColor:t})=>t};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;

  background: ${({$levelBg:t})=>t};
`,GO=ee.div`
  cursor: pointer;
  padding: 6px;
  border-radius: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`,qO=ee.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 3rem;
  right: 0;
  z-index: 10;
  margin-top: 8px;
  padding: 0.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  display: ${({$taskMenuIsOpen:t,$taskId:e})=>t===e?"flex":"none"};
`,Mp=ee.button`
  all: unset;
  padding: 0.8rem 0.8rem;
  font-size: 1rem;
  color: ${Zn.colors.darkText};
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${Zn.colors.hoverBackground};
  }

  &:active {
    background-color: ${Zn.colors.activeColorBackground};
  }
  cursor: pointer;
`,KO=ee.img`
  user-select: none;
`,Vp=ee.img`
  margin-right: 1rem;
  width: 20px;
  height: 20px;
`,QO=ee.div``,YO=ee.h3`
  margin-bottom: 0.5rem;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
`,XO=ee.p`
  margin-bottom: 1.5rem;
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.87rem;
  font-weight: 400;
  text-align: left;

  @media (max-width: ${Zn.mobileL}) {
    margin-bottom: 0.2rem;
  }
`,JO=ee.img`
  border-radius: 8px;
`,ZO=ee.div`
  display: flex;
  justify-content: space-between;
`,e2=ee.div`
  width: 63px;
  height: 24px;

  @media (max-width: ${Zn.mobileL}) {
    display: none;
  }
`,t2=ee.div`
  display: flex;
  align-items: center;
`,n2=ee.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  margin-right: 1rem;
`,r2=ee.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
`,i2=ee.div`
  height: 100%;
`;function Dm(t,e){return Dm=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Dm(t,e)}function aT(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Dm(t,e)}function Te(){return Te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Te.apply(null,arguments)}function mu(t){"@babel/helpers - typeof";return mu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mu(t)}function o2(t,e){if(mu(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(mu(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function s2(t){var e=o2(t,"string");return mu(e)=="symbol"?e:e+""}function a2(t,e,n){return(e=s2(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,r)}return n}function v0(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?g0(Object(n),!0).forEach(function(r){a2(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function En(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var y0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),_0=function(){return Math.random().toString(36).substring(7).split("").join(".")},w0={INIT:"@@redux/INIT"+_0(),REPLACE:"@@redux/REPLACE"+_0()};function l2(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function lT(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(En(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(En(1));return n(lT)(t,e)}if(typeof t!="function")throw new Error(En(2));var o=t,a=e,u=[],d=u,f=!1;function m(){d===u&&(d=u.slice())}function y(){if(f)throw new Error(En(3));return a}function _(D){if(typeof D!="function")throw new Error(En(4));if(f)throw new Error(En(5));var x=!0;return m(),d.push(D),function(){if(x){if(f)throw new Error(En(6));x=!1,m();var V=d.indexOf(D);d.splice(V,1),u=null}}}function w(D){if(!l2(D))throw new Error(En(7));if(typeof D.type>"u")throw new Error(En(8));if(f)throw new Error(En(9));try{f=!0,a=o(a,D)}finally{f=!1}for(var x=u=d,O=0;O<x.length;O++){var V=x[O];V()}return D}function I(D){if(typeof D!="function")throw new Error(En(10));o=D,w({type:w0.REPLACE})}function b(){var D,x=_;return D={subscribe:function(V){if(typeof V!="object"||V===null)throw new Error(En(11));function B(){V.next&&V.next(y())}B();var $=x(B);return{unsubscribe:$}}},D[y0]=function(){return this},D}return w({type:w0.INIT}),r={dispatch:w,subscribe:_,getState:y,replaceReducer:I},r[y0]=b,r}function E0(t,e){return function(){return e(t.apply(this,arguments))}}function I0(t,e){if(typeof t=="function")return E0(t,e);if(typeof t!="object"||t===null)throw new Error(En(16));var n={};for(var r in t){var o=t[r];typeof o=="function"&&(n[r]=E0(o,e))}return n}function uT(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function u2(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),a=function(){throw new Error(En(15))},u={getState:o.getState,dispatch:function(){return a.apply(void 0,arguments)}},d=e.map(function(f){return f(u)});return a=uT.apply(void 0,d)(o.dispatch),v0(v0({},o),{},{dispatch:a})}}}var cT=je.createContext(null);function c2(t){t()}var dT=c2,d2=function(e){return dT=e},h2=function(){return dT};function f2(){var t=h2(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var o=e;o;)o.callback(),o=o.next})},get:function(){for(var o=[],a=e;a;)o.push(a),a=a.next;return o},subscribe:function(o){var a=!0,u=n={callback:o,next:null,prev:n};return u.prev?u.prev.next=u:e=u,function(){!a||e===null||(a=!1,u.next?u.next.prev=u.prev:n=u.prev,u.prev?u.prev.next=u.next:e=u.next)}}}}var S0={notify:function(){},get:function(){return[]}};function hT(t,e){var n,r=S0;function o(_){return f(),r.subscribe(_)}function a(){r.notify()}function u(){y.onStateChange&&y.onStateChange()}function d(){return!!n}function f(){n||(n=e?e.addNestedSub(u):t.subscribe(u),r=f2())}function m(){n&&(n(),n=void 0,r.clear(),r=S0)}var y={addNestedSub:o,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:d,trySubscribe:f,tryUnsubscribe:m,getListeners:function(){return r}};return y}var fT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?oe.useLayoutEffect:oe.useEffect;function p2(t){var e=t.store,n=t.context,r=t.children,o=oe.useMemo(function(){var d=hT(e);return{store:e,subscription:d}},[e]),a=oe.useMemo(function(){return e.getState()},[e]);fT(function(){var d=o.subscription;return d.onStateChange=d.notifyNestedSubs,d.trySubscribe(),a!==e.getState()&&d.notifyNestedSubs(),function(){d.tryUnsubscribe(),d.onStateChange=null}},[o,a]);var u=n||cT;return je.createElement(u.Provider,{value:o},r)}function Kd(t,e){if(t==null)return{};var n={};for(var r in t)if({}.hasOwnProperty.call(t,r)){if(e.indexOf(r)!==-1)continue;n[r]=t[r]}return n}var Fp={exports:{}},Xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T0;function m2(){if(T0)return Xe;T0=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,n=t?Symbol.for("react.portal"):60106,r=t?Symbol.for("react.fragment"):60107,o=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,m=t?Symbol.for("react.concurrent_mode"):60111,y=t?Symbol.for("react.forward_ref"):60112,_=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,I=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,D=t?Symbol.for("react.block"):60121,x=t?Symbol.for("react.fundamental"):60117,O=t?Symbol.for("react.responder"):60118,V=t?Symbol.for("react.scope"):60119;function B(W){if(typeof W=="object"&&W!==null){var Q=W.$$typeof;switch(Q){case e:switch(W=W.type,W){case f:case m:case r:case a:case o:case _:return W;default:switch(W=W&&W.$$typeof,W){case d:case y:case b:case I:case u:return W;default:return Q}}case n:return Q}}}function $(W){return B(W)===m}return Xe.AsyncMode=f,Xe.ConcurrentMode=m,Xe.ContextConsumer=d,Xe.ContextProvider=u,Xe.Element=e,Xe.ForwardRef=y,Xe.Fragment=r,Xe.Lazy=b,Xe.Memo=I,Xe.Portal=n,Xe.Profiler=a,Xe.StrictMode=o,Xe.Suspense=_,Xe.isAsyncMode=function(W){return $(W)||B(W)===f},Xe.isConcurrentMode=$,Xe.isContextConsumer=function(W){return B(W)===d},Xe.isContextProvider=function(W){return B(W)===u},Xe.isElement=function(W){return typeof W=="object"&&W!==null&&W.$$typeof===e},Xe.isForwardRef=function(W){return B(W)===y},Xe.isFragment=function(W){return B(W)===r},Xe.isLazy=function(W){return B(W)===b},Xe.isMemo=function(W){return B(W)===I},Xe.isPortal=function(W){return B(W)===n},Xe.isProfiler=function(W){return B(W)===a},Xe.isStrictMode=function(W){return B(W)===o},Xe.isSuspense=function(W){return B(W)===_},Xe.isValidElementType=function(W){return typeof W=="string"||typeof W=="function"||W===r||W===m||W===a||W===o||W===_||W===w||typeof W=="object"&&W!==null&&(W.$$typeof===b||W.$$typeof===I||W.$$typeof===u||W.$$typeof===d||W.$$typeof===y||W.$$typeof===x||W.$$typeof===O||W.$$typeof===V||W.$$typeof===D)},Xe.typeOf=B,Xe}var b0;function g2(){return b0||(b0=1,Fp.exports=m2()),Fp.exports}var Bp,C0;function v2(){if(C0)return Bp;C0=1;var t=g2(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[t.ForwardRef]=r,a[t.Memo]=o;function u(b){return t.isMemo(b)?o:a[b.$$typeof]||e}var d=Object.defineProperty,f=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,w=Object.prototype;function I(b,D,x){if(typeof D!="string"){if(w){var O=_(D);O&&O!==w&&I(b,O,x)}var V=f(D);m&&(V=V.concat(m(D)));for(var B=u(b),$=u(D),W=0;W<V.length;++W){var Q=V[W];if(!n[Q]&&!(x&&x[Q])&&!($&&$[Q])&&!(B&&B[Q])){var P=y(D,Q);try{d(b,Q,P)}catch{}}}}return b}return Bp=I,Bp}var y2=v2();const A0=rh(y2);var Up={exports:{}},nt={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0;function _2(){if(P0)return nt;P0=1;var t=60103,e=60106,n=60107,r=60108,o=60114,a=60109,u=60110,d=60112,f=60113,m=60120,y=60115,_=60116,w=60121,I=60122,b=60117,D=60129,x=60131;if(typeof Symbol=="function"&&Symbol.for){var O=Symbol.for;t=O("react.element"),e=O("react.portal"),n=O("react.fragment"),r=O("react.strict_mode"),o=O("react.profiler"),a=O("react.provider"),u=O("react.context"),d=O("react.forward_ref"),f=O("react.suspense"),m=O("react.suspense_list"),y=O("react.memo"),_=O("react.lazy"),w=O("react.block"),I=O("react.server.block"),b=O("react.fundamental"),D=O("react.debug_trace_mode"),x=O("react.legacy_hidden")}function V(C){if(typeof C=="object"&&C!==null){var be=C.$$typeof;switch(be){case t:switch(C=C.type,C){case n:case o:case r:case f:case m:return C;default:switch(C=C&&C.$$typeof,C){case u:case d:case _:case y:case a:return C;default:return be}}case e:return be}}}var B=a,$=t,W=d,Q=n,P=_,A=y,R=e,N=o,L=r,j=f;return nt.ContextConsumer=u,nt.ContextProvider=B,nt.Element=$,nt.ForwardRef=W,nt.Fragment=Q,nt.Lazy=P,nt.Memo=A,nt.Portal=R,nt.Profiler=N,nt.StrictMode=L,nt.Suspense=j,nt.isAsyncMode=function(){return!1},nt.isConcurrentMode=function(){return!1},nt.isContextConsumer=function(C){return V(C)===u},nt.isContextProvider=function(C){return V(C)===a},nt.isElement=function(C){return typeof C=="object"&&C!==null&&C.$$typeof===t},nt.isForwardRef=function(C){return V(C)===d},nt.isFragment=function(C){return V(C)===n},nt.isLazy=function(C){return V(C)===_},nt.isMemo=function(C){return V(C)===y},nt.isPortal=function(C){return V(C)===e},nt.isProfiler=function(C){return V(C)===o},nt.isStrictMode=function(C){return V(C)===r},nt.isSuspense=function(C){return V(C)===f},nt.isValidElementType=function(C){return typeof C=="string"||typeof C=="function"||C===n||C===o||C===D||C===r||C===f||C===m||C===x||typeof C=="object"&&C!==null&&(C.$$typeof===_||C.$$typeof===y||C.$$typeof===a||C.$$typeof===u||C.$$typeof===d||C.$$typeof===b||C.$$typeof===w||C[0]===I)},nt.typeOf=V,nt}var R0;function w2(){return R0||(R0=1,Up.exports=_2()),Up.exports}var E2=w2(),I2=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],S2=["reactReduxForwardedRef"],T2=[],b2=[null,null];function C2(t,e){var n=t[1];return[e.payload,n+1]}function x0(t,e,n){fT(function(){return t.apply(void 0,e)},n)}function A2(t,e,n,r,o,a,u){t.current=r,e.current=o,n.current=!1,a.current&&(a.current=null,u())}function P2(t,e,n,r,o,a,u,d,f,m){if(t){var y=!1,_=null,w=function(){if(!y){var D=e.getState(),x,O;try{x=r(D,o.current)}catch(V){O=V,_=V}O||(_=null),x===a.current?u.current||f():(a.current=x,d.current=x,u.current=!0,m({type:"STORE_UPDATED",payload:{error:O}}))}};n.onStateChange=w,n.trySubscribe(),w();var I=function(){if(y=!0,n.tryUnsubscribe(),n.onStateChange=null,_)throw _};return I}}var R2=function(){return[null,0]};function x2(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,o=r===void 0?function(B){return"ConnectAdvanced("+B+")"}:r,a=n.methodName,u=a===void 0?"connectAdvanced":a,d=n.renderCountProp,f=d===void 0?void 0:d,m=n.shouldHandleStateChanges,y=m===void 0?!0:m,_=n.storeKey,w=_===void 0?"store":_;n.withRef;var I=n.forwardRef,b=I===void 0?!1:I,D=n.context,x=D===void 0?cT:D,O=Kd(n,I2),V=x;return function($){var W=$.displayName||$.name||"Component",Q=o(W),P=Te({},O,{getDisplayName:o,methodName:u,renderCountProp:f,shouldHandleStateChanges:y,storeKey:w,displayName:Q,wrappedComponentName:W,WrappedComponent:$}),A=O.pure;function R(be){return t(be.dispatch,P)}var N=A?oe.useMemo:function(be){return be()};function L(be){var Qe=oe.useMemo(function(){var Fn=be.reactReduxForwardedRef,Sn=Kd(be,S2);return[be.context,Fn,Sn]},[be]),Ye=Qe[0],Me=Qe[1],ie=Qe[2],ce=oe.useMemo(function(){return Ye&&Ye.Consumer&&E2.isContextConsumer(je.createElement(Ye.Consumer,null))?Ye:V},[Ye,V]),ae=oe.useContext(ce),U=!!be.store&&!!be.store.getState&&!!be.store.dispatch;ae&&ae.store;var X=U?be.store:ae.store,pe=oe.useMemo(function(){return R(X)},[X]),Pe=oe.useMemo(function(){if(!y)return b2;var Fn=hT(X,U?null:ae.subscription),Sn=Fn.notifyNestedSubs.bind(Fn);return[Fn,Sn]},[X,U,ae]),we=Pe[0],xe=Pe[1],Oe=oe.useMemo(function(){return U?ae:Te({},ae,{subscription:we})},[U,ae,we]),Ne=oe.useReducer(C2,T2,R2),Fe=Ne[0],et=Fe[0],Dt=Ne[1];if(et&&et.error)throw et.error;var Nt=oe.useRef(),Mn=oe.useRef(ie),Vn=oe.useRef(),zr=oe.useRef(!1),Wr=N(function(){return Vn.current&&ie===Mn.current?Vn.current:pe(X.getState(),ie)},[X,et,ie]);x0(A2,[Mn,Nt,zr,ie,Wr,Vn,xe]),x0(P2,[y,X,we,pe,Mn,Nt,zr,Vn,xe,Dt],[X,we,pe]);var Hr=oe.useMemo(function(){return je.createElement($,Te({},Wr,{ref:Me}))},[Me,$,Wr]),hs=oe.useMemo(function(){return y?je.createElement(ce.Provider,{value:Oe},Hr):Hr},[ce,Hr,Oe]);return hs}var j=A?je.memo(L):L;if(j.WrappedComponent=$,j.displayName=L.displayName=Q,b){var C=je.forwardRef(function(Qe,Ye){return je.createElement(j,Te({},Qe,{reactReduxForwardedRef:Ye}))});return C.displayName=Q,C.WrappedComponent=$,A0(C,$)}return A0(j,$)}}function k0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function jp(t,e){if(k0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(e,n[o])||!k0(t[n[o]],e[n[o]]))return!1;return!0}function k2(t,e){var n={},r=function(u){var d=t[u];typeof d=="function"&&(n[u]=function(){return e(d.apply(void 0,arguments))})};for(var o in t)r(o);return n}function Fg(t){return function(n,r){var o=t(n,r);function a(){return o}return a.dependsOnOwnProps=!1,a}}function D0(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function pT(t,e){return function(r,o){o.displayName;var a=function(d,f){return a.dependsOnOwnProps?a.mapToProps(d,f):a.mapToProps(d)};return a.dependsOnOwnProps=!0,a.mapToProps=function(d,f){a.mapToProps=t,a.dependsOnOwnProps=D0(t);var m=a(d,f);return typeof m=="function"&&(a.mapToProps=m,a.dependsOnOwnProps=D0(m),m=a(d,f)),m},a}}function D2(t){return typeof t=="function"?pT(t):void 0}function N2(t){return t?void 0:Fg(function(e){return{dispatch:e}})}function O2(t){return t&&typeof t=="object"?Fg(function(e){return k2(t,e)}):void 0}const L2=[D2,N2,O2];function M2(t){return typeof t=="function"?pT(t):void 0}function V2(t){return t?void 0:Fg(function(){return{}})}const F2=[M2,V2];function B2(t,e,n){return Te({},n,t,e)}function U2(t){return function(n,r){r.displayName;var o=r.pure,a=r.areMergedPropsEqual,u=!1,d;return function(m,y,_){var w=t(m,y,_);return u?(!o||!a(w,d))&&(d=w):(u=!0,d=w),d}}}function j2(t){return typeof t=="function"?U2(t):void 0}function $2(t){return t?void 0:function(){return B2}}const z2=[j2,$2];var W2=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function H2(t,e,n,r){return function(a,u){return n(t(a,u),e(r,u),u)}}function G2(t,e,n,r,o){var a=o.areStatesEqual,u=o.areOwnPropsEqual,d=o.areStatePropsEqual,f=!1,m,y,_,w,I;function b(B,$){return m=B,y=$,_=t(m,y),w=e(r,y),I=n(_,w,y),f=!0,I}function D(){return _=t(m,y),e.dependsOnOwnProps&&(w=e(r,y)),I=n(_,w,y),I}function x(){return t.dependsOnOwnProps&&(_=t(m,y)),e.dependsOnOwnProps&&(w=e(r,y)),I=n(_,w,y),I}function O(){var B=t(m,y),$=!d(B,_);return _=B,$&&(I=n(_,w,y)),I}function V(B,$){var W=!u($,y),Q=!a(B,m,$,y);return m=B,y=$,W&&Q?D():W?x():Q?O():I}return function($,W){return f?V($,W):b($,W)}}function q2(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,o=e.initMergeProps,a=Kd(e,W2),u=n(t,a),d=r(t,a),f=o(t,a),m=a.pure?G2:H2;return m(u,d,f,t,a)}var K2=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function $p(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(a,u){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+u.wrappedComponentName+".")}}function Q2(t,e){return t===e}function Y2(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?x2:n,o=e.mapStateToPropsFactories,a=o===void 0?F2:o,u=e.mapDispatchToPropsFactories,d=u===void 0?L2:u,f=e.mergePropsFactories,m=f===void 0?z2:f,y=e.selectorFactory,_=y===void 0?q2:y;return function(I,b,D,x){x===void 0&&(x={});var O=x,V=O.pure,B=V===void 0?!0:V,$=O.areStatesEqual,W=$===void 0?Q2:$,Q=O.areOwnPropsEqual,P=Q===void 0?jp:Q,A=O.areStatePropsEqual,R=A===void 0?jp:A,N=O.areMergedPropsEqual,L=N===void 0?jp:N,j=Kd(O,K2),C=$p(I,a,"mapStateToProps"),be=$p(b,d,"mapDispatchToProps"),Qe=$p(D,m,"mergeProps");return r(_,Te({methodName:"connect",getDisplayName:function(Me){return"Connect("+Me+")"},shouldHandleStateChanges:!!I,initMapStateToProps:C,initMapDispatchToProps:be,initMergeProps:Qe,pure:B,areStatesEqual:W,areOwnPropsEqual:P,areStatePropsEqual:R,areMergedPropsEqual:L},j))}}const mT=Y2();var gT=fE();const X2=rh(gT);d2(gT.unstable_batchedUpdates);function J2(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function vT(t,e){var n=oe.useState(function(){return{inputs:e,result:t()}})[0],r=oe.useRef(!0),o=oe.useRef(n),a=r.current||!!(e&&o.current.inputs&&J2(e,o.current.inputs)),u=a?o.current:{inputs:e,result:t()};return oe.useEffect(function(){r.current=!1,o.current=u},[u]),u.result}function Z2(t,e){return vT(function(){return t},e)}var qe=vT,_e=Z2,eL="Invariant failed";function tL(t,e){throw new Error(eL)}var _r=function(e){var n=e.top,r=e.right,o=e.bottom,a=e.left,u=r-a,d=o-n,f={top:n,right:r,bottom:o,left:a,width:u,height:d,x:a,y:n,center:{x:(r+a)/2,y:(o+n)/2}};return f},Bg=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},N0=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},nL=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},zp={top:0,right:0,bottom:0,left:0},Ug=function(e){var n=e.borderBox,r=e.margin,o=r===void 0?zp:r,a=e.border,u=a===void 0?zp:a,d=e.padding,f=d===void 0?zp:d,m=_r(Bg(n,o)),y=_r(N0(n,u)),_=_r(N0(y,f));return{marginBox:m,borderBox:_r(n),paddingBox:y,contentBox:_,margin:o,border:u,padding:f}},Qn=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var o=Number(n);return isNaN(o)&&tL(),o},rL=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Qd=function(e,n){var r=e.borderBox,o=e.border,a=e.margin,u=e.padding,d=nL(r,n);return Ug({borderBox:d,border:o,margin:a,padding:u})},Yd=function(e,n){return n===void 0&&(n=rL()),Qd(e,n)},yT=function(e,n){var r={top:Qn(n.marginTop),right:Qn(n.marginRight),bottom:Qn(n.marginBottom),left:Qn(n.marginLeft)},o={top:Qn(n.paddingTop),right:Qn(n.paddingRight),bottom:Qn(n.paddingBottom),left:Qn(n.paddingLeft)},a={top:Qn(n.borderTopWidth),right:Qn(n.borderRightWidth),bottom:Qn(n.borderBottomWidth),left:Qn(n.borderLeftWidth)};return Ug({borderBox:e,margin:r,padding:o,border:a})},_T=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return yT(n,r)},O0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function iL(t,e){return!!(t===e||O0(t)&&O0(e))}function oL(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!iL(t[n],e[n]))return!1;return!0}function $t(t,e){e===void 0&&(e=oL);var n,r=[],o,a=!1;function u(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];return a&&n===this&&e(d,r)||(o=t.apply(this,d),a=!0,n=this,r=d),o}return u}var gu=function(e){var n=[],r=null,o=function(){for(var u=arguments.length,d=new Array(u),f=0;f<u;f++)d[f]=arguments[f];n=d,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return o.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},o};function wT(t,e){}wT.bind(null,"warn");wT.bind(null,"error");function ro(){}function sL(t,e){return Te({},t,{},e)}function Jn(t,e,n){var r=e.map(function(o){var a=sL(n,o.options);return t.addEventListener(o.eventName,o.fn,a),function(){t.removeEventListener(o.eventName,o.fn,a)}});return function(){r.forEach(function(a){a()})}}var aL="Invariant failed";function Xd(t){this.message=t}Xd.prototype.toString=function(){return this.message};function le(t,e){throw new Xd(aL)}var lL=function(t){aT(e,t);function e(){for(var r,o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return r=t.call.apply(t,[this].concat(a))||this,r.callbacks=null,r.unbind=ro,r.onWindowError=function(d){var f=r.getCallbacks();f.isDragging()&&f.tryAbort();var m=d.error;m instanceof Xd&&d.preventDefault()},r.getCallbacks=function(){if(!r.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return r.callbacks},r.setCallbacks=function(d){r.callbacks=d},r}var n=e.prototype;return n.componentDidMount=function(){this.unbind=Jn(window,[{eventName:"error",fn:this.onWindowError}])},n.componentDidCatch=function(o){if(o instanceof Xd){this.setState({});return}throw o},n.componentWillUnmount=function(){this.unbind()},n.render=function(){return this.props.children(this.setCallbacks)},e}(je.Component),uL=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Jd=function(e){return e+1},cL=function(e){return`
  You have lifted an item in position `+Jd(e.source.index)+`
`},ET=function(e,n){var r=e.droppableId===n.droppableId,o=Jd(e.index),a=Jd(n.index);return r?`
      You have moved the item from position `+o+`
      to position `+a+`
    `:`
    You have moved the item from position `+o+`
    in list `+e.droppableId+`
    to list `+n.droppableId+`
    in position `+a+`
  `},IT=function(e,n,r){var o=n.droppableId===r.droppableId;return o?`
      The item `+e+`
      has been combined with `+r.draggableId:`
      The item `+e+`
      in list `+n.droppableId+`
      has been combined with `+r.draggableId+`
      in list `+r.droppableId+`
    `},dL=function(e){var n=e.destination;if(n)return ET(e.source,n);var r=e.combine;return r?IT(e.draggableId,e.source,r):"You are over an area that cannot be dropped on"},L0=function(e){return`
  The item has returned to its starting position
  of `+Jd(e.index)+`
`},hL=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+L0(e.source)+`
    `;var n=e.destination,r=e.combine;return n?`
      You have dropped the item.
      `+ET(e.source,n)+`
    `:r?`
      You have dropped the item.
      `+IT(e.draggableId,e.source,r)+`
    `:`
    The item has been dropped while not over a drop area.
    `+L0(e.source)+`
  `},Sd={dragHandleUsageInstructions:uL,onDragStart:cL,onDragUpdate:dL,onDragEnd:hL},zt={x:0,y:0},Yt=function(e,n){return{x:e.x+n.x,y:e.y+n.y}},Nn=function(e,n){return{x:e.x-n.x,y:e.y-n.y}},io=function(e,n){return e.x===n.x&&e.y===n.y},Va=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},as=function(e,n,r){var o;return r===void 0&&(r=0),o={},o[e]=n,o[e==="x"?"y":"x"]=r,o},vu=function(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))},M0=function(e,n){return Math.min.apply(Math,n.map(function(r){return vu(e,r)}))},ST=function(e){return function(n){return{x:e(n.x),y:e(n.y)}}},fL=function(t,e){var n=_r({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n},Du=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},V0=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},pL={top:0,right:0,bottom:0,left:0},mL=function(e,n){return n?Du(e,n.scroll.diff.displacement):e},gL=function(e,n,r){if(r&&r.increasedBy){var o;return Te({},e,(o={},o[n.end]=e[n.end]+r.increasedBy[n.line],o))}return e},vL=function(e,n){return n&&n.shouldClipSubject?fL(n.pageMarginBox,e):_r(e)},ba=function(t){var e=t.page,n=t.withPlaceholder,r=t.axis,o=t.frame,a=mL(e.marginBox,o),u=gL(a,r,n),d=vL(u,o);return{page:e,withPlaceholder:n,active:d}},jg=function(t,e){t.frame||le();var n=t.frame,r=Nn(e,n.scroll.initial),o=Va(r),a=Te({},n,{scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:o},max:n.scroll.max}}),u=ba({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:a}),d=Te({},t,{frame:a,subject:u});return d};function Zd(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function $g(t,e){if(t.findIndex)return t.findIndex(e);for(var n=0;n<t.length;n++)if(e(t[n]))return n;return-1}function yo(t,e){if(t.find)return t.find(e);var n=$g(t,e);if(n!==-1)return t[n]}function TT(t){return Array.prototype.slice.call(t)}var bT=$t(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),CT=$t(function(t){return t.reduce(function(e,n){return e[n.descriptor.id]=n,e},{})}),kh=$t(function(t){return Zd(t)}),yL=$t(function(t){return Zd(t)}),Fa=$t(function(t,e){var n=yL(e).filter(function(r){return t===r.descriptor.droppableId}).sort(function(r,o){return r.descriptor.index-o.descriptor.index});return n});function zg(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function Dh(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var Nh=$t(function(t,e){return e.filter(function(n){return n.descriptor.id!==t.descriptor.id})}),_L=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,o=t.insideDestination,a=t.previousImpact;if(!r.isCombineEnabled)return null;var u=zg(a);if(!u)return null;function d(D){var x={type:"COMBINE",combine:{draggableId:D,droppableId:r.descriptor.id}};return Te({},a,{at:x})}var f=a.displaced.all,m=f.length?f[0]:null;if(e)return m?d(m):null;var y=Nh(n,o);if(!m){if(!y.length)return null;var _=y[y.length-1];return d(_.descriptor.id)}var w=$g(y,function(D){return D.descriptor.id===m});w===-1&&le();var I=w-1;if(I<0)return null;var b=y[I];return d(b.descriptor.id)},Ba=function(t,e){return t.descriptor.droppableId===e.descriptor.id},AT={point:zt,value:0},yu={invisible:{},visible:{},all:[]},wL={displaced:yu,displacedBy:AT,at:null},er=function(t,e){return function(n){return t<=n&&n<=e}},PT=function(t){var e=er(t.top,t.bottom),n=er(t.left,t.right);return function(r){var o=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);if(o)return!0;var a=e(r.top)||e(r.bottom),u=n(r.left)||n(r.right),d=a&&u;if(d)return!0;var f=r.top<t.top&&r.bottom>t.bottom,m=r.left<t.left&&r.right>t.right,y=f&&m;if(y)return!0;var _=f&&u||m&&a;return _}},EL=function(t){var e=er(t.top,t.bottom),n=er(t.left,t.right);return function(r){var o=e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right);return o}},Wg={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},RT={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},IL=function(t){return function(e){var n=er(e.top,e.bottom),r=er(e.left,e.right);return function(o){return t===Wg?n(o.top)&&n(o.bottom):r(o.left)&&r(o.right)}}},SL=function(e,n){var r=n.frame?n.frame.scroll.diff.displacement:zt;return Du(e,r)},TL=function(e,n,r){return n.subject.active?r(n.subject.active)(e):!1},bL=function(e,n,r){return r(n)(e)},Hg=function(e){var n=e.target,r=e.destination,o=e.viewport,a=e.withDroppableDisplacement,u=e.isVisibleThroughFrameFn,d=a?SL(n,r):n;return TL(d,r,u)&&bL(d,o,u)},CL=function(e){return Hg(Te({},e,{isVisibleThroughFrameFn:PT}))},xT=function(e){return Hg(Te({},e,{isVisibleThroughFrameFn:EL}))},AL=function(e){return Hg(Te({},e,{isVisibleThroughFrameFn:IL(e.destination.axis)}))},PL=function(e,n,r){if(typeof r=="boolean")return r;if(!n)return!0;var o=n.invisible,a=n.visible;if(o[e])return!1;var u=a[e];return u?u.shouldAnimate:!0};function RL(t,e){var n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return _r(Bg(n,r))}function _u(t){var e=t.afterDragging,n=t.destination,r=t.displacedBy,o=t.viewport,a=t.forceShouldAnimate,u=t.last;return e.reduce(function(f,m){var y=RL(m,r),_=m.descriptor.id;f.all.push(_);var w=CL({target:y,destination:n,viewport:o,withDroppableDisplacement:!0});if(!w)return f.invisible[m.descriptor.id]=!0,f;var I=PL(_,u,a),b={draggableId:_,shouldAnimate:I};return f.visible[_]=b,f},{all:[],visible:{},invisible:{}})}function xL(t,e){if(!t.length)return 0;var n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function F0(t){var e=t.insideDestination,n=t.inHomeList,r=t.displacedBy,o=t.destination,a=xL(e,{inHomeList:n});return{displaced:yu,displacedBy:r,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:a}}}}function eh(t){var e=t.draggable,n=t.insideDestination,r=t.destination,o=t.viewport,a=t.displacedBy,u=t.last,d=t.index,f=t.forceShouldAnimate,m=Ba(e,r);if(d==null)return F0({insideDestination:n,inHomeList:m,displacedBy:a,destination:r});var y=yo(n,function(D){return D.descriptor.index===d});if(!y)return F0({insideDestination:n,inHomeList:m,displacedBy:a,destination:r});var _=Nh(e,n),w=n.indexOf(y),I=_.slice(w),b=_u({afterDragging:I,destination:r,displacedBy:a,last:u,viewport:o.frame,forceShouldAnimate:f});return{displaced:b,displacedBy:a,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:d}}}}function po(t,e){return!!e.effected[t]}var kL=function(t){var e=t.isMovingForward,n=t.destination,r=t.draggables,o=t.combine,a=t.afterCritical;if(!n.isCombineEnabled)return null;var u=o.draggableId,d=r[u],f=d.descriptor.index,m=po(u,a);return m?e?f:f-1:e?f+1:f},DL=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.insideDestination,o=t.location;if(!r.length)return null;var a=o.index,u=e?a+1:a-1,d=r[0].descriptor.index,f=r[r.length-1].descriptor.index,m=n?f:f+1;return u<d||u>m?null:u},NL=function(t){var e=t.isMovingForward,n=t.isInHomeList,r=t.draggable,o=t.draggables,a=t.destination,u=t.insideDestination,d=t.previousImpact,f=t.viewport,m=t.afterCritical,y=d.at;if(y||le(),y.type==="REORDER"){var _=DL({isMovingForward:e,isInHomeList:n,location:y.destination,insideDestination:u});return _==null?null:eh({draggable:r,insideDestination:u,destination:a,viewport:f,last:d.displaced,displacedBy:d.displacedBy,index:_})}var w=kL({isMovingForward:e,destination:a,displaced:d.displaced,draggables:o,combine:y.combine,afterCritical:m});return w==null?null:eh({draggable:r,insideDestination:u,destination:a,viewport:f,last:d.displaced,displacedBy:d.displacedBy,index:w})},OL=function(t){var e=t.displaced,n=t.afterCritical,r=t.combineWith,o=t.displacedBy,a=!!(e.visible[r]||e.invisible[r]);return po(r,n)?a?zt:Va(o.point):a?o.point:zt},LL=function(t){var e=t.afterCritical,n=t.impact,r=t.draggables,o=Dh(n);o||le();var a=o.draggableId,u=r[a].page.borderBox.center,d=OL({displaced:n.displaced,afterCritical:e,combineWith:a,displacedBy:n.displacedBy});return Yt(u,d)},kT=function(e,n){return n.margin[e.start]+n.borderBox[e.size]/2},ML=function(e,n){return n.margin[e.end]+n.borderBox[e.size]/2},Gg=function(e,n,r){return n[e.crossAxisStart]+r.margin[e.crossAxisStart]+r.borderBox[e.crossAxisSize]/2},B0=function(e){var n=e.axis,r=e.moveRelativeTo,o=e.isMoving;return as(n.line,r.marginBox[n.end]+kT(n,o),Gg(n,r.marginBox,o))},U0=function(e){var n=e.axis,r=e.moveRelativeTo,o=e.isMoving;return as(n.line,r.marginBox[n.start]-ML(n,o),Gg(n,r.marginBox,o))},VL=function(e){var n=e.axis,r=e.moveInto,o=e.isMoving;return as(n.line,r.contentBox[n.start]+kT(n,o),Gg(n,r.contentBox,o))},FL=function(t){var e=t.impact,n=t.draggable,r=t.draggables,o=t.droppable,a=t.afterCritical,u=Fa(o.descriptor.id,r),d=n.page,f=o.axis;if(!u.length)return VL({axis:f,moveInto:o.page,isMoving:d});var m=e.displaced,y=e.displacedBy,_=m.all[0];if(_){var w=r[_];if(po(_,a))return U0({axis:f,moveRelativeTo:w.page,isMoving:d});var I=Qd(w.page,y.point);return U0({axis:f,moveRelativeTo:I,isMoving:d})}var b=u[u.length-1];if(b.descriptor.id===n.descriptor.id)return d.borderBox.center;if(po(b.descriptor.id,a)){var D=Qd(b.page,Va(a.displacedBy.point));return B0({axis:f,moveRelativeTo:D,isMoving:d})}return B0({axis:f,moveRelativeTo:b.page,isMoving:d})},Nm=function(t,e){var n=t.frame;return n?Yt(e,n.scroll.diff.displacement):e},BL=function(e){var n=e.impact,r=e.draggable,o=e.droppable,a=e.draggables,u=e.afterCritical,d=r.page.borderBox.center,f=n.at;return!o||!f?d:f.type==="REORDER"?FL({impact:n,draggable:r,draggables:a,droppable:o,afterCritical:u}):LL({impact:n,draggables:a,afterCritical:u})},Oh=function(t){var e=BL(t),n=t.droppable,r=n?Nm(n,e):e;return r},DT=function(t,e){var n=Nn(e,t.scroll.initial),r=Va(n),o=_r({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),a={frame:o,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}};return a};function j0(t,e){return t.map(function(n){return e[n]})}function UL(t,e){for(var n=0;n<e.length;n++){var r=e[n].visible[t];if(r)return r}return null}var jL=function(t){var e=t.impact,n=t.viewport,r=t.destination,o=t.draggables,a=t.maxScrollChange,u=DT(n,Yt(n.scroll.current,a)),d=r.frame?jg(r,Yt(r.frame.scroll.current,a)):r,f=e.displaced,m=_u({afterDragging:j0(f.all,o),destination:r,displacedBy:e.displacedBy,viewport:u.frame,last:f,forceShouldAnimate:!1}),y=_u({afterDragging:j0(f.all,o),destination:d,displacedBy:e.displacedBy,viewport:n.frame,last:f,forceShouldAnimate:!1}),_={},w={},I=[f,m,y];f.all.forEach(function(D){var x=UL(D,I);if(x){w[D]=x;return}_[D]=!0});var b=Te({},e,{displaced:{all:f.all,invisible:_,visible:w}});return b},$L=function(t,e){return Yt(t.scroll.diff.displacement,e)},qg=function(t){var e=t.pageBorderBoxCenter,n=t.draggable,r=t.viewport,o=$L(r,e),a=Nn(o,n.page.borderBox.center);return Yt(n.client.borderBox.center,a)},NT=function(t){var e=t.draggable,n=t.destination,r=t.newPageBorderBoxCenter,o=t.viewport,a=t.withDroppableDisplacement,u=t.onlyOnMainAxis,d=u===void 0?!1:u,f=Nn(r,e.page.borderBox.center),m=Du(e.page.borderBox,f),y={target:m,destination:n,withDroppableDisplacement:a,viewport:o};return d?AL(y):xT(y)},zL=function(t){var e=t.isMovingForward,n=t.draggable,r=t.destination,o=t.draggables,a=t.previousImpact,u=t.viewport,d=t.previousPageBorderBoxCenter,f=t.previousClientSelection,m=t.afterCritical;if(!r.isEnabled)return null;var y=Fa(r.descriptor.id,o),_=Ba(n,r),w=_L({isMovingForward:e,draggable:n,destination:r,insideDestination:y,previousImpact:a})||NL({isMovingForward:e,isInHomeList:_,draggable:n,draggables:o,destination:r,insideDestination:y,previousImpact:a,viewport:u,afterCritical:m});if(!w)return null;var I=Oh({impact:w,draggable:n,droppable:r,draggables:o,afterCritical:m}),b=NT({draggable:n,destination:r,newPageBorderBoxCenter:I,viewport:u.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(b){var D=qg({pageBorderBoxCenter:I,draggable:n,viewport:u});return{clientSelection:D,impact:w,scrollJumpRequest:null}}var x=Nn(I,d),O=jL({impact:w,viewport:u,destination:r,draggables:o,maxScrollChange:x});return{clientSelection:f,impact:O,scrollJumpRequest:x}},hn=function(e){var n=e.subject.active;return n||le(),n},WL=function(t){var e=t.isMovingForward,n=t.pageBorderBoxCenter,r=t.source,o=t.droppables,a=t.viewport,u=r.subject.active;if(!u)return null;var d=r.axis,f=er(u[d.start],u[d.end]),m=kh(o).filter(function(_){return _!==r}).filter(function(_){return _.isEnabled}).filter(function(_){return!!_.subject.active}).filter(function(_){return PT(a.frame)(hn(_))}).filter(function(_){var w=hn(_);return e?u[d.crossAxisEnd]<w[d.crossAxisEnd]:w[d.crossAxisStart]<u[d.crossAxisStart]}).filter(function(_){var w=hn(_),I=er(w[d.start],w[d.end]);return f(w[d.start])||f(w[d.end])||I(u[d.start])||I(u[d.end])}).sort(function(_,w){var I=hn(_)[d.crossAxisStart],b=hn(w)[d.crossAxisStart];return e?I-b:b-I}).filter(function(_,w,I){return hn(_)[d.crossAxisStart]===hn(I[0])[d.crossAxisStart]});if(!m.length)return null;if(m.length===1)return m[0];var y=m.filter(function(_){var w=er(hn(_)[d.start],hn(_)[d.end]);return w(n[d.line])});return y.length===1?y[0]:y.length>1?y.sort(function(_,w){return hn(_)[d.start]-hn(w)[d.start]})[0]:m.sort(function(_,w){var I=M0(n,V0(hn(_))),b=M0(n,V0(hn(w)));return I!==b?I-b:hn(_)[d.start]-hn(w)[d.start]})[0]},$0=function(e,n){var r=e.page.borderBox.center;return po(e.descriptor.id,n)?Nn(r,n.displacedBy.point):r},HL=function(e,n){var r=e.page.borderBox;return po(e.descriptor.id,n)?Du(r,Va(n.displacedBy.point)):r},GL=function(t){var e=t.pageBorderBoxCenter,n=t.viewport,r=t.destination,o=t.insideDestination,a=t.afterCritical,u=o.filter(function(d){return xT({target:HL(d,a),destination:r,viewport:n.frame,withDroppableDisplacement:!0})}).sort(function(d,f){var m=vu(e,Nm(r,$0(d,a))),y=vu(e,Nm(r,$0(f,a)));return m<y?-1:y<m?1:d.descriptor.index-f.descriptor.index});return u[0]||null},Nu=$t(function(e,n){var r=n[e.line];return{value:r,point:as(e.line,r)}}),qL=function(e,n,r){var o=e.axis;if(e.descriptor.mode==="virtual")return as(o.line,n[o.line]);var a=e.subject.page.contentBox[o.size],u=Fa(e.descriptor.id,r),d=u.reduce(function(y,_){return y+_.client.marginBox[o.size]},0),f=d+n[o.line],m=f-a;return m<=0?null:as(o.line,m)},OT=function(e,n){return Te({},e,{scroll:Te({},e.scroll,{max:n})})},LT=function(e,n,r){var o=e.frame;Ba(n,e)&&le(),e.subject.withPlaceholder&&le();var a=Nu(e.axis,n.displaceBy).point,u=qL(e,a,r),d={placeholderSize:a,increasedBy:u,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!o){var f=ba({page:e.subject.page,withPlaceholder:d,axis:e.axis,frame:e.frame});return Te({},e,{subject:f})}var m=u?Yt(o.scroll.max,u):o.scroll.max,y=OT(o,m),_=ba({page:e.subject.page,withPlaceholder:d,axis:e.axis,frame:y});return Te({},e,{subject:_,frame:y})},KL=function(e){var n=e.subject.withPlaceholder;n||le();var r=e.frame;if(!r){var o=ba({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return Te({},e,{subject:o})}var a=n.oldFrameMaxScroll;a||le();var u=OT(r,a),d=ba({page:e.subject.page,axis:e.axis,frame:u,withPlaceholder:null});return Te({},e,{subject:d,frame:u})},QL=function(t){var e=t.previousPageBorderBoxCenter,n=t.moveRelativeTo,r=t.insideDestination,o=t.draggable,a=t.draggables,u=t.destination,d=t.viewport,f=t.afterCritical;if(!n){if(r.length)return null;var m={displaced:yu,displacedBy:AT,at:{type:"REORDER",destination:{droppableId:u.descriptor.id,index:0}}},y=Oh({impact:m,draggable:o,droppable:u,draggables:a,afterCritical:f}),_=Ba(o,u)?u:LT(u,o,a),w=NT({draggable:o,destination:_,newPageBorderBoxCenter:y,viewport:d.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return w?m:null}var I=e[u.axis.line]<=n.page.borderBox.center[u.axis.line],b=function(){var x=n.descriptor.index;return n.descriptor.id===o.descriptor.id||I?x:x+1}(),D=Nu(u.axis,o.displaceBy);return eh({draggable:o,insideDestination:r,destination:u,viewport:d,displacedBy:D,last:yu,index:b})},YL=function(t){var e=t.isMovingForward,n=t.previousPageBorderBoxCenter,r=t.draggable,o=t.isOver,a=t.draggables,u=t.droppables,d=t.viewport,f=t.afterCritical,m=WL({isMovingForward:e,pageBorderBoxCenter:n,source:o,droppables:u,viewport:d});if(!m)return null;var y=Fa(m.descriptor.id,a),_=GL({pageBorderBoxCenter:n,viewport:d,destination:m,insideDestination:y,afterCritical:f}),w=QL({previousPageBorderBoxCenter:n,destination:m,draggable:r,draggables:a,moveRelativeTo:_,insideDestination:y,viewport:d,afterCritical:f});if(!w)return null;var I=Oh({impact:w,draggable:r,droppable:m,draggables:a,afterCritical:f}),b=qg({pageBorderBoxCenter:I,draggable:r,viewport:d});return{clientSelection:b,impact:w,scrollJumpRequest:null}},On=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},XL=function(e,n){var r=On(e);return r?n[r]:null},JL=function(t){var e=t.state,n=t.type,r=XL(e.impact,e.dimensions.droppables),o=!!r,a=e.dimensions.droppables[e.critical.droppable.id],u=r||a,d=u.axis.direction,f=d==="vertical"&&(n==="MOVE_UP"||n==="MOVE_DOWN")||d==="horizontal"&&(n==="MOVE_LEFT"||n==="MOVE_RIGHT");if(f&&!o)return null;var m=n==="MOVE_DOWN"||n==="MOVE_RIGHT",y=e.dimensions.draggables[e.critical.draggable.id],_=e.current.page.borderBoxCenter,w=e.dimensions,I=w.draggables,b=w.droppables;return f?zL({isMovingForward:m,previousPageBorderBoxCenter:_,draggable:y,destination:u,draggables:I,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):YL({isMovingForward:m,previousPageBorderBoxCenter:_,draggable:y,isOver:u,draggables:I,droppables:b,viewport:e.viewport,afterCritical:e.afterCritical})};function Ko(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function MT(t){var e=er(t.top,t.bottom),n=er(t.left,t.right);return function(o){return e(o.y)&&n(o.x)}}function ZL(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function eM(t){var e=t.pageBorderBox,n=t.draggable,r=t.candidates,o=n.page.borderBox.center,a=r.map(function(u){var d=u.axis,f=as(u.axis.line,e.center[d.line],u.page.borderBox.center[d.crossAxisLine]);return{id:u.descriptor.id,distance:vu(o,f)}}).sort(function(u,d){return d.distance-u.distance});return a[0]?a[0].id:null}function tM(t){var e=t.pageBorderBox,n=t.draggable,r=t.droppables,o=kh(r).filter(function(a){if(!a.isEnabled)return!1;var u=a.subject.active;if(!u||!ZL(e,u))return!1;if(MT(u)(e.center))return!0;var d=a.axis,f=u.center[d.crossAxisLine],m=e[d.crossAxisStart],y=e[d.crossAxisEnd],_=er(u[d.crossAxisStart],u[d.crossAxisEnd]),w=_(m),I=_(y);return!w&&!I?!0:w?m<f:y>f});return o.length?o.length===1?o[0].descriptor.id:eM({pageBorderBox:e,draggable:n,candidates:o}):null}var VT=function(e,n){return _r(Du(e,n))},nM=function(t,e){var n=t.frame;return n?VT(e,n.scroll.diff.value):e};function FT(t){var e=t.displaced,n=t.id;return!!(e.visible[n]||e.invisible[n])}function rM(t){var e=t.draggable,n=t.closest,r=t.inHomeList;return n?r&&n.descriptor.index>e.descriptor.index?n.descriptor.index-1:n.descriptor.index:null}var iM=function(t){var e=t.pageBorderBoxWithDroppableScroll,n=t.draggable,r=t.destination,o=t.insideDestination,a=t.last,u=t.viewport,d=t.afterCritical,f=r.axis,m=Nu(r.axis,n.displaceBy),y=m.value,_=e[f.start],w=e[f.end],I=Nh(n,o),b=yo(I,function(x){var O=x.descriptor.id,V=x.page.borderBox.center[f.line],B=po(O,d),$=FT({displaced:a,id:O});return B?$?w<=V:_<V-y:$?w<=V+y:_<V}),D=rM({draggable:n,closest:b,inHomeList:Ba(n,r)});return eh({draggable:n,insideDestination:o,destination:r,viewport:u,last:a,displacedBy:m,index:D})},oM=4,sM=function(t){var e=t.draggable,n=t.pageBorderBoxWithDroppableScroll,r=t.previousImpact,o=t.destination,a=t.insideDestination,u=t.afterCritical;if(!o.isCombineEnabled)return null;var d=o.axis,f=Nu(o.axis,e.displaceBy),m=f.value,y=n[d.start],_=n[d.end],w=Nh(e,a),I=yo(w,function(D){var x=D.descriptor.id,O=D.page.borderBox,V=O[d.size],B=V/oM,$=po(x,u),W=FT({displaced:r.displaced,id:x});return $?W?_>O[d.start]+B&&_<O[d.end]-B:y>O[d.start]-m+B&&y<O[d.end]-m-B:W?_>O[d.start]+m+B&&_<O[d.end]+m-B:y>O[d.start]+B&&y<O[d.end]-B});if(!I)return null;var b={displacedBy:f,displaced:r.displaced,at:{type:"COMBINE",combine:{draggableId:I.descriptor.id,droppableId:o.descriptor.id}}};return b},BT=function(t){var e=t.pageOffset,n=t.draggable,r=t.draggables,o=t.droppables,a=t.previousImpact,u=t.viewport,d=t.afterCritical,f=VT(n.page.borderBox,e),m=tM({pageBorderBox:f,draggable:n,droppables:o});if(!m)return wL;var y=o[m],_=Fa(y.descriptor.id,r),w=nM(y,f);return sM({pageBorderBoxWithDroppableScroll:w,draggable:n,previousImpact:a,destination:y,insideDestination:_,afterCritical:d})||iM({pageBorderBoxWithDroppableScroll:w,draggable:n,destination:y,insideDestination:_,last:a.displaced,viewport:u,afterCritical:d})},Kg=function(t,e){var n;return Te({},t,(n={},n[e.descriptor.id]=e,n))},aM=function(e){var n=e.previousImpact,r=e.impact,o=e.droppables,a=On(n),u=On(r);if(!a||a===u)return o;var d=o[a];if(!d.subject.withPlaceholder)return o;var f=KL(d);return Kg(o,f)},lM=function(t){var e=t.draggable,n=t.draggables,r=t.droppables,o=t.previousImpact,a=t.impact,u=aM({previousImpact:o,impact:a,droppables:r}),d=On(a);if(!d)return u;var f=r[d];if(Ba(e,f)||f.subject.withPlaceholder)return u;var m=LT(f,e,n);return Kg(u,m)},Zl=function(t){var e=t.state,n=t.clientSelection,r=t.dimensions,o=t.viewport,a=t.impact,u=t.scrollJumpRequest,d=o||e.viewport,f=r||e.dimensions,m=n||e.current.client.selection,y=Nn(m,e.initial.client.selection),_={offset:y,selection:m,borderBoxCenter:Yt(e.initial.client.borderBoxCenter,y)},w={selection:Yt(_.selection,d.scroll.current),borderBoxCenter:Yt(_.borderBoxCenter,d.scroll.current),offset:Yt(_.offset,d.scroll.diff.value)},I={client:_,page:w};if(e.phase==="COLLECTING")return Te({phase:"COLLECTING"},e,{dimensions:f,viewport:d,current:I});var b=f.draggables[e.critical.draggable.id],D=a||BT({pageOffset:w.offset,draggable:b,draggables:f.draggables,droppables:f.droppables,previousImpact:e.impact,viewport:d,afterCritical:e.afterCritical}),x=lM({draggable:b,impact:D,previousImpact:e.impact,draggables:f.draggables,droppables:f.droppables}),O=Te({},e,{current:I,dimensions:{draggables:f.draggables,droppables:x},impact:D,viewport:d,scrollJumpRequest:u||null,forceShouldAnimate:u?!1:null});return O};function uM(t,e){return t.map(function(n){return e[n]})}var UT=function(t){var e=t.impact,n=t.viewport,r=t.draggables,o=t.destination,a=t.forceShouldAnimate,u=e.displaced,d=uM(u.all,r),f=_u({afterDragging:d,destination:o,displacedBy:e.displacedBy,viewport:n.frame,forceShouldAnimate:a,last:u});return Te({},e,{displaced:f})},jT=function(t){var e=t.impact,n=t.draggable,r=t.droppable,o=t.draggables,a=t.viewport,u=t.afterCritical,d=Oh({impact:e,draggable:n,draggables:o,droppable:r,afterCritical:u});return qg({pageBorderBoxCenter:d,draggable:n,viewport:a})},$T=function(t){var e=t.state,n=t.dimensions,r=t.viewport;e.movementMode!=="SNAP"&&le();var o=e.impact,a=r||e.viewport,u=n||e.dimensions,d=u.draggables,f=u.droppables,m=d[e.critical.draggable.id],y=On(o);y||le();var _=f[y],w=UT({impact:o,viewport:a,destination:_,draggables:d}),I=jT({impact:w,draggable:m,droppable:_,draggables:d,viewport:a,afterCritical:e.afterCritical});return Zl({impact:w,clientSelection:I,state:e,dimensions:u,viewport:a})},cM=function(t){return{index:t.index,droppableId:t.droppableId}},zT=function(t){var e=t.draggable,n=t.home,r=t.draggables,o=t.viewport,a=Nu(n.axis,e.displaceBy),u=Fa(n.descriptor.id,r),d=u.indexOf(e);d===-1&&le();var f=u.slice(d+1),m=f.reduce(function(I,b){return I[b.descriptor.id]=!0,I},{}),y={inVirtualList:n.descriptor.mode==="virtual",displacedBy:a,effected:m},_=_u({afterDragging:f,destination:n,displacedBy:a,last:null,viewport:o.frame,forceShouldAnimate:!1}),w={displaced:_,displacedBy:a,at:{type:"REORDER",destination:cM(e.descriptor)}};return{impact:w,afterCritical:y}},dM=function(t,e){return{draggables:t.draggables,droppables:Kg(t.droppables,e)}},hM=function(t){var e=t.draggable,n=t.offset,r=t.initialWindowScroll,o=Qd(e.client,n),a=Yd(o,r),u=Te({},e,{placeholder:Te({},e.placeholder,{client:o}),client:o,page:a});return u},fM=function(t){var e=t.frame;return e||le(),e},pM=function(t){var e=t.additions,n=t.updatedDroppables,r=t.viewport,o=r.scroll.diff.value;return e.map(function(a){var u=a.descriptor.droppableId,d=n[u],f=fM(d),m=f.scroll.diff.value,y=Yt(o,m),_=hM({draggable:a,offset:y,initialWindowScroll:r.scroll.initial});return _})},mM=function(t){var e=t.state,n=t.published,r=n.modified.map(function(B){var $=e.dimensions.droppables[B.droppableId],W=jg($,B.scroll);return W}),o=Te({},e.dimensions.droppables,{},bT(r)),a=CT(pM({additions:n.additions,updatedDroppables:o,viewport:e.viewport})),u=Te({},e.dimensions.draggables,{},a);n.removals.forEach(function(B){delete u[B]});var d={droppables:o,draggables:u},f=On(e.impact),m=f?d.droppables[f]:null,y=d.draggables[e.critical.draggable.id],_=d.droppables[e.critical.droppable.id],w=zT({draggable:y,home:_,draggables:u,viewport:e.viewport}),I=w.impact,b=w.afterCritical,D=m&&m.isCombineEnabled?e.impact:I,x=BT({pageOffset:e.current.page.offset,draggable:d.draggables[e.critical.draggable.id],draggables:d.draggables,droppables:d.droppables,previousImpact:D,viewport:e.viewport,afterCritical:b}),O=Te({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:x,onLiftImpact:I,dimensions:d,afterCritical:b,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return O;var V=Te({phase:"DROP_PENDING"},O,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return V},Om=function(e){return e.movementMode==="SNAP"},Wp=function(e,n,r){var o=dM(e.dimensions,n);return!Om(e)||r?Zl({state:e,dimensions:o}):$T({state:e,dimensions:o})};function Hp(t){return t.isDragging&&t.movementMode==="SNAP"?Te({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var z0={phase:"IDLE",completed:null,shouldFlush:!1},gM=function(t,e){if(t===void 0&&(t=z0),e.type==="FLUSH")return Te({},z0,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&le();var n=e.payload,r=n.critical,o=n.clientSelection,a=n.viewport,u=n.dimensions,d=n.movementMode,f=u.draggables[r.draggable.id],m=u.droppables[r.droppable.id],y={selection:o,borderBoxCenter:f.client.borderBox.center,offset:zt},_={client:y,page:{selection:Yt(y.selection,a.scroll.initial),borderBoxCenter:Yt(y.selection,a.scroll.initial),offset:Yt(y.selection,a.scroll.diff.value)}},w=kh(u.droppables).every(function(Dt){return!Dt.isFixedOnPage}),I=zT({draggable:f,home:m,draggables:u.draggables,viewport:a}),b=I.impact,D=I.afterCritical,x={phase:"DRAGGING",isDragging:!0,critical:r,movementMode:d,dimensions:u,initial:_,current:_,isWindowScrollAllowed:w,impact:b,afterCritical:D,onLiftImpact:b,viewport:a,scrollJumpRequest:null,forceShouldAnimate:null};return x}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&le();var O=Te({phase:"COLLECTING"},t,{phase:"COLLECTING"});return O}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||le(),mM({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Ko(t)||le();var V=e.payload.client;return io(V,t.current.client.selection)?t:Zl({state:t,clientSelection:V,impact:Om(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return Hp(t);Ko(t)||le();var B=e.payload,$=B.id,W=B.newScroll,Q=t.dimensions.droppables[$];if(!Q)return t;var P=jg(Q,W);return Wp(t,P,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Ko(t)||le();var A=e.payload,R=A.id,N=A.isEnabled,L=t.dimensions.droppables[R];L||le(),L.isEnabled===N&&le();var j=Te({},L,{isEnabled:N});return Wp(t,j,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Ko(t)||le();var C=e.payload,be=C.id,Qe=C.isCombineEnabled,Ye=t.dimensions.droppables[be];Ye||le(),Ye.isCombineEnabled===Qe&&le();var Me=Te({},Ye,{isCombineEnabled:Qe});return Wp(t,Me,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Ko(t)||le(),t.isWindowScrollAllowed||le();var ie=e.payload.newScroll;if(io(t.viewport.scroll.current,ie))return Hp(t);var ce=DT(t.viewport,ie);return Om(t)?$T({state:t,viewport:ce}):Zl({state:t,viewport:ce})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Ko(t))return t;var ae=e.payload.maxScroll;if(io(ae,t.viewport.scroll.max))return t;var U=Te({},t.viewport,{scroll:Te({},t.viewport.scroll,{max:ae})});return Te({phase:"DRAGGING"},t,{viewport:U})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&le();var X=JL({state:t,type:e.type});return X?Zl({state:t,impact:X.impact,clientSelection:X.clientSelection,scrollJumpRequest:X.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var pe=e.payload.reason;t.phase!=="COLLECTING"&&le();var Pe=Te({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:pe});return Pe}if(e.type==="DROP_ANIMATE"){var we=e.payload,xe=we.completed,Oe=we.dropDuration,Ne=we.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||le();var Fe={phase:"DROP_ANIMATING",completed:xe,dropDuration:Oe,newHomeClientOffset:Ne,dimensions:t.dimensions};return Fe}if(e.type==="DROP_COMPLETE"){var et=e.payload.completed;return{phase:"IDLE",completed:et,shouldFlush:!1}}return t},vM=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},yM=function(e){return{type:"LIFT",payload:e}},_M=function(e){return{type:"INITIAL_PUBLISH",payload:e}},wM=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},EM=function(){return{type:"COLLECTION_STARTING",payload:null}},IM=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},SM=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},TM=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},WT=function(e){return{type:"MOVE",payload:e}},bM=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},CM=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},AM=function(){return{type:"MOVE_UP",payload:null}},PM=function(){return{type:"MOVE_DOWN",payload:null}},RM=function(){return{type:"MOVE_RIGHT",payload:null}},xM=function(){return{type:"MOVE_LEFT",payload:null}},Qg=function(){return{type:"FLUSH",payload:null}},kM=function(e){return{type:"DROP_ANIMATE",payload:e}},Yg=function(e){return{type:"DROP_COMPLETE",payload:e}},HT=function(e){return{type:"DROP",payload:e}},DM=function(e){return{type:"DROP_PENDING",payload:e}},GT=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},NM=function(t){return function(e){var n=e.getState,r=e.dispatch;return function(o){return function(a){if(a.type!=="LIFT"){o(a);return}var u=a.payload,d=u.id,f=u.clientSelection,m=u.movementMode,y=n();y.phase==="DROP_ANIMATING"&&r(Yg({completed:y.completed})),n().phase!=="IDLE"&&le(),r(Qg()),r(vM({draggableId:d,movementMode:m}));var _={shouldPublishImmediately:m==="SNAP"},w={draggableId:d,scrollOptions:_},I=t.startPublishing(w),b=I.critical,D=I.dimensions,x=I.viewport;r(_M({critical:b,dimensions:D,clientSelection:f,movementMode:m,viewport:x}))}}}},OM=function(t){return function(){return function(e){return function(n){n.type==="INITIAL_PUBLISH"&&t.dragging(),n.type==="DROP_ANIMATE"&&t.dropping(n.payload.completed.result.reason),(n.type==="FLUSH"||n.type==="DROP_COMPLETE")&&t.resting(),e(n)}}}},Xg={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},wu={opacity:{drop:0,combining:.7},scale:{drop:.75}},Jg={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Go=Jg.outOfTheWay+"s "+Xg.outOfTheWay,eu={fluid:"opacity "+Go,snap:"transform "+Go+", opacity "+Go,drop:function(e){var n=e+"s "+Xg.drop;return"transform "+n+", opacity "+n},outOfTheWay:"transform "+Go,placeholder:"height "+Go+", width "+Go+", margin "+Go},W0=function(e){return io(e,zt)?null:"translate("+e.x+"px, "+e.y+"px)"},Lm={moveTo:W0,drop:function(e,n){var r=W0(e);return r?n?r+" scale("+wu.scale.drop+")":r:null}},Mm=Jg.minDropTime,qT=Jg.maxDropTime,LM=qT-Mm,H0=1500,MM=.6,VM=function(t){var e=t.current,n=t.destination,r=t.reason,o=vu(e,n);if(o<=0)return Mm;if(o>=H0)return qT;var a=o/H0,u=Mm+LM*a,d=r==="CANCEL"?u*MM:u;return Number(d.toFixed(2))},FM=function(t){var e=t.impact,n=t.draggable,r=t.dimensions,o=t.viewport,a=t.afterCritical,u=r.draggables,d=r.droppables,f=On(e),m=f?d[f]:null,y=d[n.descriptor.droppableId],_=jT({impact:e,draggable:n,draggables:u,afterCritical:a,droppable:m||y,viewport:o}),w=Nn(_,n.client.borderBox.center);return w},BM=function(t){var e=t.draggables,n=t.reason,r=t.lastImpact,o=t.home,a=t.viewport,u=t.onLiftImpact;if(!r.at||n!=="DROP"){var d=UT({draggables:e,impact:u,destination:o,viewport:a,forceShouldAnimate:!0});return{impact:d,didDropInsideDroppable:!1}}if(r.at.type==="REORDER")return{impact:r,didDropInsideDroppable:!0};var f=Te({},r,{displaced:yu});return{impact:f,didDropInsideDroppable:!0}},UM=function(t){var e=t.getState,n=t.dispatch;return function(r){return function(o){if(o.type!=="DROP"){r(o);return}var a=e(),u=o.payload.reason;if(a.phase==="COLLECTING"){n(DM({reason:u}));return}if(a.phase!=="IDLE"){var d=a.phase==="DROP_PENDING"&&a.isWaiting;d&&le(),a.phase==="DRAGGING"||a.phase==="DROP_PENDING"||le();var f=a.critical,m=a.dimensions,y=m.draggables[a.critical.draggable.id],_=BM({reason:u,lastImpact:a.impact,afterCritical:a.afterCritical,onLiftImpact:a.onLiftImpact,home:a.dimensions.droppables[a.critical.droppable.id],viewport:a.viewport,draggables:a.dimensions.draggables}),w=_.impact,I=_.didDropInsideDroppable,b=I?zg(w):null,D=I?Dh(w):null,x={index:f.draggable.index,droppableId:f.droppable.id},O={draggableId:y.descriptor.id,type:y.descriptor.type,source:x,reason:u,mode:a.movementMode,destination:b,combine:D},V=FM({impact:w,draggable:y,dimensions:m,viewport:a.viewport,afterCritical:a.afterCritical}),B={critical:a.critical,afterCritical:a.afterCritical,result:O,impact:w},$=!io(a.current.client.offset,V)||!!O.combine;if(!$){n(Yg({completed:B}));return}var W=VM({current:a.current.client.offset,destination:V,reason:u}),Q={newHomeClientOffset:V,dropDuration:W,completed:B};n(kM(Q))}}}},KT=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function jM(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(n){n.target!==window&&n.target!==window.document||t()}}}function $M(t){var e=t.onWindowScroll;function n(){e(KT())}var r=gu(n),o=jM(r),a=ro;function u(){return a!==ro}function d(){u()&&le(),a=Jn(window,[o])}function f(){u()||le(),r.cancel(),a(),a=ro}return{start:d,stop:f,isActive:u}}var zM=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},WM=function(t){var e=$M({onWindowScroll:function(r){t.dispatch(bM({newScroll:r}))}});return function(n){return function(r){!e.isActive()&&r.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&zM(r)&&e.stop(),n(r)}}},HM=function(t){var e=!1,n=!1,r=setTimeout(function(){n=!0}),o=function(u){e||n||(e=!0,t(u),clearTimeout(r))};return o.wasCalled=function(){return e},o},GM=function(){var t=[],e=function(a){var u=$g(t,function(m){return m.timerId===a});u===-1&&le();var d=t.splice(u,1),f=d[0];f.callback()},n=function(a){var u=setTimeout(function(){return e(u)}),d={timerId:u,callback:a};t.push(d)},r=function(){if(t.length){var a=[].concat(t);t.length=0,a.forEach(function(u){clearTimeout(u.timerId),u.callback()})}};return{add:n,flush:r}},qM=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.droppableId===n.droppableId&&e.index===n.index},KM=function(e,n){return e==null&&n==null?!0:e==null||n==null?!1:e.draggableId===n.draggableId&&e.droppableId===n.droppableId},QM=function(e,n){if(e===n)return!0;var r=e.draggable.id===n.draggable.id&&e.draggable.droppableId===n.draggable.droppableId&&e.draggable.type===n.draggable.type&&e.draggable.index===n.draggable.index,o=e.droppable.id===n.droppable.id&&e.droppable.type===n.droppable.type;return r&&o},Nl=function(e,n){n()},rd=function(e,n){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:n}},Gp=function(e,n,r,o){if(!e){r(o(n));return}var a=HM(r),u={announce:a};e(n,u),a.wasCalled()||r(o(n))},YM=function(t,e){var n=GM(),r=null,o=function(w,I){r&&le(),Nl("onBeforeCapture",function(){var b=t().onBeforeCapture;if(b){var D={draggableId:w,mode:I};b(D)}})},a=function(w,I){r&&le(),Nl("onBeforeDragStart",function(){var b=t().onBeforeDragStart;b&&b(rd(w,I))})},u=function(w,I){r&&le();var b=rd(w,I);r={mode:I,lastCritical:w,lastLocation:b.source,lastCombine:null},n.add(function(){Nl("onDragStart",function(){return Gp(t().onDragStart,b,e,Sd.onDragStart)})})},d=function(w,I){var b=zg(I),D=Dh(I);r||le();var x=!QM(w,r.lastCritical);x&&(r.lastCritical=w);var O=!qM(r.lastLocation,b);O&&(r.lastLocation=b);var V=!KM(r.lastCombine,D);if(V&&(r.lastCombine=D),!(!x&&!O&&!V)){var B=Te({},rd(w,r.mode),{combine:D,destination:b});n.add(function(){Nl("onDragUpdate",function(){return Gp(t().onDragUpdate,B,e,Sd.onDragUpdate)})})}},f=function(){r||le(),n.flush()},m=function(w){r||le(),r=null,Nl("onDragEnd",function(){return Gp(t().onDragEnd,w,e,Sd.onDragEnd)})},y=function(){if(r){var w=Te({},rd(r.lastCritical,r.mode),{combine:null,destination:null,reason:"CANCEL"});m(w)}};return{beforeCapture:o,beforeStart:a,start:u,update:d,flush:f,drop:m,abort:y}},XM=function(t,e){var n=YM(t,e);return function(r){return function(o){return function(a){if(a.type==="BEFORE_INITIAL_CAPTURE"){n.beforeCapture(a.payload.draggableId,a.payload.movementMode);return}if(a.type==="INITIAL_PUBLISH"){var u=a.payload.critical;n.beforeStart(u,a.payload.movementMode),o(a),n.start(u,a.payload.movementMode);return}if(a.type==="DROP_COMPLETE"){var d=a.payload.completed.result;n.flush(),o(a),n.drop(d);return}if(o(a),a.type==="FLUSH"){n.abort();return}var f=r.getState();f.phase==="DRAGGING"&&n.update(f.critical,f.impact)}}}},JM=function(t){return function(e){return function(n){if(n.type!=="DROP_ANIMATION_FINISHED"){e(n);return}var r=t.getState();r.phase!=="DROP_ANIMATING"&&le(),t.dispatch(Yg({completed:r.completed}))}}},ZM=function(t){var e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return function(o){return function(a){if((a.type==="FLUSH"||a.type==="DROP_COMPLETE"||a.type==="DROP_ANIMATION_FINISHED")&&r(),o(a),a.type==="DROP_ANIMATE"){var u={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var f=t.getState();f.phase==="DROP_ANIMATING"&&t.dispatch(GT())}};n=requestAnimationFrame(function(){n=null,e=Jn(window,[u])})}}}},eV=function(t){return function(){return function(e){return function(n){(n.type==="DROP_COMPLETE"||n.type==="FLUSH"||n.type==="DROP_ANIMATE")&&t.stopPublishing(),e(n)}}}},tV=function(t){var e=!1;return function(){return function(n){return function(r){if(r.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(r.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(r.type==="DROP_COMPLETE"){e=!1;var o=r.payload.completed.result;o.combine&&t.tryShiftRecord(o.draggableId,o.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},nV=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},rV=function(t){return function(e){return function(n){return function(r){if(nV(r)){t.stop(),n(r);return}if(r.type==="INITIAL_PUBLISH"){n(r);var o=e.getState();o.phase!=="DRAGGING"&&le(),t.start(o);return}n(r),t.scroll(e.getState())}}}},iV=function(t){return function(e){return function(n){if(e(n),n.type==="PUBLISH_WHILE_DRAGGING"){var r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(HT({reason:r.reason})))}}}},oV=uT,sV=function(t){var e=t.dimensionMarshal,n=t.focusMarshal,r=t.styleMarshal,o=t.getResponders,a=t.announce,u=t.autoScroller;return lT(gM,oV(u2(OM(r),eV(e),NM(e),UM,JM,ZM,iV,rV(u),WM,tV(n),XM(o,a))))},qp=function(){return{additions:{},removals:{},modified:{}}};function aV(t){var e=t.registry,n=t.callbacks,r=qp(),o=null,a=function(){o||(n.collectionStarting(),o=requestAnimationFrame(function(){o=null;var y=r,_=y.additions,w=y.removals,I=y.modified,b=Object.keys(_).map(function(O){return e.draggable.getById(O).getDimension(zt)}).sort(function(O,V){return O.descriptor.index-V.descriptor.index}),D=Object.keys(I).map(function(O){var V=e.droppable.getById(O),B=V.callbacks.getScrollWhileDragging();return{droppableId:O,scroll:B}}),x={additions:b,removals:Object.keys(w),modified:D};r=qp(),n.publish(x)}))},u=function(y){var _=y.descriptor.id;r.additions[_]=y,r.modified[y.descriptor.droppableId]=!0,r.removals[_]&&delete r.removals[_],a()},d=function(y){var _=y.descriptor;r.removals[_.id]=!0,r.modified[_.droppableId]=!0,r.additions[_.id]&&delete r.additions[_.id],a()},f=function(){o&&(cancelAnimationFrame(o),o=null,r=qp())};return{add:u,remove:d,stop:f}}var QT=function(t){var e=t.scrollHeight,n=t.scrollWidth,r=t.height,o=t.width,a=Nn({x:n,y:e},{x:o,y:r}),u={x:Math.max(0,a.x),y:Math.max(0,a.y)};return u},YT=function(){var t=document.documentElement;return t||le(),t},XT=function(){var t=YT(),e=QT({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},lV=function(){var t=KT(),e=XT(),n=t.y,r=t.x,o=YT(),a=o.clientWidth,u=o.clientHeight,d=r+a,f=n+u,m=_r({top:n,left:r,right:d,bottom:f}),y={frame:m,scroll:{initial:t,current:t,max:e,diff:{value:zt,displacement:zt}}};return y},uV=function(t){var e=t.critical,n=t.scrollOptions,r=t.registry,o=lV(),a=o.scroll.current,u=e.droppable,d=r.droppable.getAllByType(u.type).map(function(_){return _.callbacks.getDimensionAndWatchScroll(a,n)}),f=r.draggable.getAllByType(e.draggable.type).map(function(_){return _.getDimension(a)}),m={draggables:CT(f),droppables:bT(d)},y={dimensions:m,critical:e,viewport:o};return y};function G0(t,e,n){if(n.descriptor.id===e.id||n.descriptor.type!==e.type)return!1;var r=t.droppable.getById(n.descriptor.droppableId);return r.descriptor.mode==="virtual"}var cV=function(t,e){var n=null,r=aV({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),o=function(I,b){t.droppable.exists(I)||le(),n&&e.updateDroppableIsEnabled({id:I,isEnabled:b})},a=function(I,b){n&&(t.droppable.exists(I)||le(),e.updateDroppableIsCombineEnabled({id:I,isCombineEnabled:b}))},u=function(I,b){n&&(t.droppable.exists(I)||le(),e.updateDroppableScroll({id:I,newScroll:b}))},d=function(I,b){n&&t.droppable.getById(I).callbacks.scroll(b)},f=function(){if(n){r.stop();var I=n.critical.droppable;t.droppable.getAllByType(I.type).forEach(function(b){return b.callbacks.dragStopped()}),n.unsubscribe(),n=null}},m=function(I){n||le();var b=n.critical.draggable;I.type==="ADDITION"&&G0(t,b,I.value)&&r.add(I.value),I.type==="REMOVAL"&&G0(t,b,I.value)&&r.remove(I.value)},y=function(I){n&&le();var b=t.draggable.getById(I.draggableId),D=t.droppable.getById(b.descriptor.droppableId),x={draggable:b.descriptor,droppable:D.descriptor},O=t.subscribe(m);return n={critical:x,unsubscribe:O},uV({critical:x,registry:t,scrollOptions:I.scrollOptions})},_={updateDroppableIsEnabled:o,updateDroppableIsCombineEnabled:a,scrollDroppable:d,updateDroppableScroll:u,startPublishing:y,stopPublishing:f};return _},JT=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},dV=function(t){window.scrollBy(t.x,t.y)},hV=$t(function(t){return kh(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),fV=function(e,n){var r=yo(hV(n),function(o){return o.frame||le(),MT(o.frame.pageMarginBox)(e)});return r},pV=function(t){var e=t.center,n=t.destination,r=t.droppables;if(n){var o=r[n];return o.frame?o:null}var a=fV(e,r);return a},oo={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},mV=function(t,e){var n=t[e.size]*oo.startFromPercentage,r=t[e.size]*oo.maxScrollAtPercentage,o={startScrollingFrom:n,maxScrollValueAt:r};return o},ZT=function(t){var e=t.startOfRange,n=t.endOfRange,r=t.current,o=n-e;if(o===0)return 0;var a=r-e,u=a/o;return u},Zg=1,gV=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return oo.maxPixelScroll;if(t===e.startScrollingFrom)return Zg;var n=ZT({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),r=1-n,o=oo.maxPixelScroll*oo.ease(r);return Math.ceil(o)},q0=oo.durationDampening.accelerateAt,K0=oo.durationDampening.stopDampeningAt,vV=function(t,e){var n=e,r=K0,o=Date.now(),a=o-n;if(a>=K0)return t;if(a<q0)return Zg;var u=ZT({startOfRange:q0,endOfRange:r,current:a}),d=t*oo.ease(u);return Math.ceil(d)},Q0=function(t){var e=t.distanceToEdge,n=t.thresholds,r=t.dragStartTime,o=t.shouldUseTimeDampening,a=gV(e,n);return a===0?0:o?Math.max(vV(a,r),Zg):a},Y0=function(t){var e=t.container,n=t.distanceToEdges,r=t.dragStartTime,o=t.axis,a=t.shouldUseTimeDampening,u=mV(e,o),d=n[o.end]<n[o.start];return d?Q0({distanceToEdge:n[o.end],thresholds:u,dragStartTime:r,shouldUseTimeDampening:a}):-1*Q0({distanceToEdge:n[o.start],thresholds:u,dragStartTime:r,shouldUseTimeDampening:a})},yV=function(t){var e=t.container,n=t.subject,r=t.proposedScroll,o=n.height>e.height,a=n.width>e.width;return!a&&!o?r:a&&o?null:{x:a?0:r.x,y:o?0:r.y}},_V=ST(function(t){return t===0?0:t}),eb=function(t){var e=t.dragStartTime,n=t.container,r=t.subject,o=t.center,a=t.shouldUseTimeDampening,u={top:o.y-n.top,right:n.right-o.x,bottom:n.bottom-o.y,left:o.x-n.left},d=Y0({container:n,distanceToEdges:u,dragStartTime:e,axis:Wg,shouldUseTimeDampening:a}),f=Y0({container:n,distanceToEdges:u,dragStartTime:e,axis:RT,shouldUseTimeDampening:a}),m=_V({x:f,y:d});if(io(m,zt))return null;var y=yV({container:n,subject:r,proposedScroll:m});return y?io(y,zt)?null:y:null},wV=ST(function(t){return t===0?0:t>0?1:-1}),ev=function(){var t=function(n,r){return n<0?n:n>r?n-r:0};return function(e){var n=e.current,r=e.max,o=e.change,a=Yt(n,o),u={x:t(a.x,r.x),y:t(a.y,r.y)};return io(u,zt)?null:u}}(),tb=function(e){var n=e.max,r=e.current,o=e.change,a={x:Math.max(r.x,n.x),y:Math.max(r.y,n.y)},u=wV(o),d=ev({max:a,current:r,change:u});return!d||u.x!==0&&d.x===0||u.y!==0&&d.y===0},tv=function(e,n){return tb({current:e.scroll.current,max:e.scroll.max,change:n})},EV=function(e,n){if(!tv(e,n))return null;var r=e.scroll.max,o=e.scroll.current;return ev({current:o,max:r,change:n})},nv=function(e,n){var r=e.frame;return r?tb({current:r.scroll.current,max:r.scroll.max,change:n}):!1},IV=function(e,n){var r=e.frame;return!r||!nv(e,n)?null:ev({current:r.scroll.current,max:r.scroll.max,change:n})},SV=function(t){var e=t.viewport,n=t.subject,r=t.center,o=t.dragStartTime,a=t.shouldUseTimeDampening,u=eb({dragStartTime:o,container:e.frame,subject:n,center:r,shouldUseTimeDampening:a});return u&&tv(e,u)?u:null},TV=function(t){var e=t.droppable,n=t.subject,r=t.center,o=t.dragStartTime,a=t.shouldUseTimeDampening,u=e.frame;if(!u)return null;var d=eb({dragStartTime:o,container:u.pageMarginBox,subject:n,center:r,shouldUseTimeDampening:a});return d&&nv(e,d)?d:null},X0=function(t){var e=t.state,n=t.dragStartTime,r=t.shouldUseTimeDampening,o=t.scrollWindow,a=t.scrollDroppable,u=e.current.page.borderBoxCenter,d=e.dimensions.draggables[e.critical.draggable.id],f=d.page.marginBox;if(e.isWindowScrollAllowed){var m=e.viewport,y=SV({dragStartTime:n,viewport:m,subject:f,center:u,shouldUseTimeDampening:r});if(y){o(y);return}}var _=pV({center:u,destination:On(e.impact),droppables:e.dimensions.droppables});if(_){var w=TV({dragStartTime:n,droppable:_,subject:f,center:u,shouldUseTimeDampening:r});w&&a(_.descriptor.id,w)}},bV=function(t){var e=t.scrollWindow,n=t.scrollDroppable,r=gu(e),o=gu(n),a=null,u=function(y){a||le();var _=a,w=_.shouldUseTimeDampening,I=_.dragStartTime;X0({state:y,scrollWindow:r,scrollDroppable:o,dragStartTime:I,shouldUseTimeDampening:w})},d=function(y){a&&le();var _=Date.now(),w=!1,I=function(){w=!0};X0({state:y,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:I,scrollDroppable:I}),a={dragStartTime:_,shouldUseTimeDampening:w},w&&u(y)},f=function(){a&&(r.cancel(),o.cancel(),a=null)};return{start:d,stop:f,scroll:u}},CV=function(t){var e=t.move,n=t.scrollDroppable,r=t.scrollWindow,o=function(m,y){var _=Yt(m.current.client.selection,y);e({client:_})},a=function(m,y){if(!nv(m,y))return y;var _=IV(m,y);if(!_)return n(m.descriptor.id,y),null;var w=Nn(y,_);n(m.descriptor.id,w);var I=Nn(y,w);return I},u=function(m,y,_){if(!m||!tv(y,_))return _;var w=EV(y,_);if(!w)return r(_),null;var I=Nn(_,w);r(I);var b=Nn(_,I);return b},d=function(m){var y=m.scrollJumpRequest;if(y){var _=On(m.impact);_||le();var w=a(m.dimensions.droppables[_],y);if(w){var I=m.viewport,b=u(m.isWindowScrollAllowed,I,w);b&&o(m,b)}}};return d},AV=function(t){var e=t.scrollDroppable,n=t.scrollWindow,r=t.move,o=bV({scrollWindow:n,scrollDroppable:e}),a=CV({move:r,scrollWindow:n,scrollDroppable:e}),u=function(m){if(m.phase==="DRAGGING"){if(m.movementMode==="FLUID"){o.scroll(m);return}m.scrollJumpRequest&&a(m)}},d={scroll:u,start:o.start,stop:o.stop};return d},Ca="data-rbd",Aa=function(){var t=Ca+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),Vm=function(){var t=Ca+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),PV=function(){var t=Ca+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),J0={contextId:Ca+"-scroll-container-context-id"},RV=function(e){return function(n){return"["+n+'="'+e+'"]'}},Ol=function(e,n){return e.map(function(r){var o=r.styles[n];return o?r.selector+" { "+o+" }":""}).join(" ")},xV="pointer-events: none;",kV=function(t){var e=RV(t),n=function(){var d=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(Aa.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:d,dragging:xV,dropAnimating:d}}}(),r=function(){var d=`
      transition: `+eu.outOfTheWay+`;
    `;return{selector:e(Vm.contextId),styles:{dragging:d,dropAnimating:d,userCancel:d}}}(),o={selector:e(PV.contextId),styles:{always:"overflow-anchor: none;"}},a={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},u=[r,n,o,a];return{always:Ol(u,"always"),resting:Ol(u,"resting"),dragging:Ol(u,"dragging"),dropAnimating:Ol(u,"dropAnimating"),userCancel:Ol(u,"userCancel")}},Ln=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?oe.useLayoutEffect:oe.useEffect,Kp=function(){var e=document.querySelector("head");return e||le(),e},Z0=function(e){var n=document.createElement("style");return e&&n.setAttribute("nonce",e),n.type="text/css",n};function DV(t,e){var n=qe(function(){return kV(t)},[t]),r=oe.useRef(null),o=oe.useRef(null),a=_e($t(function(_){var w=o.current;w||le(),w.textContent=_}),[]),u=_e(function(_){var w=r.current;w||le(),w.textContent=_},[]);Ln(function(){!r.current&&!o.current||le();var _=Z0(e),w=Z0(e);return r.current=_,o.current=w,_.setAttribute(Ca+"-always",t),w.setAttribute(Ca+"-dynamic",t),Kp().appendChild(_),Kp().appendChild(w),u(n.always),a(n.resting),function(){var I=function(D){var x=D.current;x||le(),Kp().removeChild(x),D.current=null};I(r),I(o)}},[e,u,a,n.always,n.resting,t]);var d=_e(function(){return a(n.dragging)},[a,n.dragging]),f=_e(function(_){if(_==="DROP"){a(n.dropAnimating);return}a(n.userCancel)},[a,n.dropAnimating,n.userCancel]),m=_e(function(){o.current&&a(n.resting)},[a,n.resting]),y=qe(function(){return{dragging:d,dropping:f,resting:m}},[d,f,m]);return y}var nb=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function Lh(t){return t instanceof nb(t).HTMLElement}function NV(t,e){var n="["+Aa.contextId+'="'+t+'"]',r=TT(document.querySelectorAll(n));if(!r.length)return null;var o=yo(r,function(a){return a.getAttribute(Aa.draggableId)===e});return!o||!Lh(o)?null:o}function OV(t){var e=oe.useRef({}),n=oe.useRef(null),r=oe.useRef(null),o=oe.useRef(!1),a=_e(function(w,I){var b={id:w,focus:I};return e.current[w]=b,function(){var x=e.current,O=x[w];O!==b&&delete x[w]}},[]),u=_e(function(w){var I=NV(t,w);I&&I!==document.activeElement&&I.focus()},[t]),d=_e(function(w,I){n.current===w&&(n.current=I)},[]),f=_e(function(){r.current||o.current&&(r.current=requestAnimationFrame(function(){r.current=null;var w=n.current;w&&u(w)}))},[u]),m=_e(function(w){n.current=null;var I=document.activeElement;I&&I.getAttribute(Aa.draggableId)===w&&(n.current=w)},[]);Ln(function(){return o.current=!0,function(){o.current=!1;var w=r.current;w&&cancelAnimationFrame(w)}},[]);var y=qe(function(){return{register:a,tryRecordFocus:m,tryRestoreFocusRecorded:f,tryShiftRecord:d}},[a,m,f,d]);return y}function LV(){var t={draggables:{},droppables:{}},e=[];function n(_){return e.push(_),function(){var I=e.indexOf(_);I!==-1&&e.splice(I,1)}}function r(_){e.length&&e.forEach(function(w){return w(_)})}function o(_){return t.draggables[_]||null}function a(_){var w=o(_);return w||le(),w}var u={register:function(w){t.draggables[w.descriptor.id]=w,r({type:"ADDITION",value:w})},update:function(w,I){var b=t.draggables[I.descriptor.id];b&&b.uniqueId===w.uniqueId&&(delete t.draggables[I.descriptor.id],t.draggables[w.descriptor.id]=w)},unregister:function(w){var I=w.descriptor.id,b=o(I);b&&w.uniqueId===b.uniqueId&&(delete t.draggables[I],r({type:"REMOVAL",value:w}))},getById:a,findById:o,exists:function(w){return!!o(w)},getAllByType:function(w){return Zd(t.draggables).filter(function(I){return I.descriptor.type===w})}};function d(_){return t.droppables[_]||null}function f(_){var w=d(_);return w||le(),w}var m={register:function(w){t.droppables[w.descriptor.id]=w},unregister:function(w){var I=d(w.descriptor.id);I&&w.uniqueId===I.uniqueId&&delete t.droppables[w.descriptor.id]},getById:f,findById:d,exists:function(w){return!!d(w)},getAllByType:function(w){return Zd(t.droppables).filter(function(I){return I.descriptor.type===w})}};function y(){t.draggables={},t.droppables={},e.length=0}return{draggable:u,droppable:m,subscribe:n,clean:y}}function MV(){var t=qe(LV,[]);return oe.useEffect(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var rv=je.createContext(null),th=function(){var t=document.body;return t||le(),t},VV={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},FV=function(e){return"rbd-announcement-"+e};function BV(t){var e=qe(function(){return FV(t)},[t]),n=oe.useRef(null);oe.useEffect(function(){var a=document.createElement("div");return n.current=a,a.id=e,a.setAttribute("aria-live","assertive"),a.setAttribute("aria-atomic","true"),Te(a.style,VV),th().appendChild(a),function(){setTimeout(function(){var f=th();f.contains(a)&&f.removeChild(a),a===n.current&&(n.current=null)})}},[e]);var r=_e(function(o){var a=n.current;if(a){a.textContent=o;return}},[]);return r}var UV=0,jV={separator:"::"};function iv(t,e){return e===void 0&&(e=jV),qe(function(){return""+t+e.separator+UV++},[e.separator,t])}function $V(t){var e=t.contextId,n=t.uniqueId;return"rbd-hidden-text-"+e+"-"+n}function zV(t){var e=t.contextId,n=t.text,r=iv("hidden-text",{separator:"-"}),o=qe(function(){return $V({contextId:e,uniqueId:r})},[r,e]);return oe.useEffect(function(){var u=document.createElement("div");return u.id=o,u.textContent=n,u.style.display="none",th().appendChild(u),function(){var f=th();f.contains(u)&&f.removeChild(u)}},[o,n]),o}var Mh=je.createContext(null);function rb(t){var e=oe.useRef(t);return oe.useEffect(function(){e.current=t}),e}function WV(){var t=null;function e(){return!!t}function n(u){return u===t}function r(u){t&&le();var d={abandon:u};return t=d,d}function o(){t||le(),t=null}function a(){t&&(t.abandon(),o())}return{isClaimed:e,isActive:n,claim:r,release:o,tryAbandon:a}}var HV=9,GV=13,ov=27,ib=32,qV=33,KV=34,QV=35,YV=36,XV=37,JV=38,ZV=39,e4=40,id,t4=(id={},id[GV]=!0,id[HV]=!0,id),ob=function(t){t4[t.keyCode]&&t.preventDefault()},Vh=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],n=yo(e,function(r){return"on"+r in document});return n||t}(),sb=0,eE=5;function n4(t,e){return Math.abs(e.x-t.x)>=eE||Math.abs(e.y-t.y)>=eE}var tE={type:"IDLE"};function r4(t){var e=t.cancel,n=t.completed,r=t.getPhase,o=t.setPhase;return[{eventName:"mousemove",fn:function(u){var d=u.button,f=u.clientX,m=u.clientY;if(d===sb){var y={x:f,y:m},_=r();if(_.type==="DRAGGING"){u.preventDefault(),_.actions.move(y);return}_.type!=="PENDING"&&le();var w=_.point;if(n4(w,y)){u.preventDefault();var I=_.actions.fluidLift(y);o({type:"DRAGGING",actions:I})}}}},{eventName:"mouseup",fn:function(u){var d=r();if(d.type!=="DRAGGING"){e();return}u.preventDefault(),d.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"mousedown",fn:function(u){r().type==="DRAGGING"&&u.preventDefault(),e()}},{eventName:"keydown",fn:function(u){var d=r();if(d.type==="PENDING"){e();return}if(u.keyCode===ov){u.preventDefault(),e();return}ob(u)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){r().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(u){var d=r();if(d.type==="IDLE"&&le(),d.actions.shouldRespectForcePress()){e();return}u.preventDefault()}},{eventName:Vh,fn:e}]}function i4(t){var e=oe.useRef(tE),n=oe.useRef(ro),r=qe(function(){return{eventName:"mousedown",fn:function(_){if(!_.defaultPrevented&&_.button===sb&&!(_.ctrlKey||_.metaKey||_.shiftKey||_.altKey)){var w=t.findClosestDraggableId(_);if(w){var I=t.tryGetLock(w,u,{sourceEvent:_});if(I){_.preventDefault();var b={x:_.clientX,y:_.clientY};n.current(),m(I,b)}}}}}},[t]),o=qe(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(_){if(!_.defaultPrevented){var w=t.findClosestDraggableId(_);if(w){var I=t.findOptionsForDraggable(w);I&&(I.shouldRespectForcePress||t.canGetLock(w)&&_.preventDefault())}}}}},[t]),a=_e(function(){var _={passive:!1,capture:!0};n.current=Jn(window,[o,r],_)},[o,r]),u=_e(function(){var y=e.current;y.type!=="IDLE"&&(e.current=tE,n.current(),a())},[a]),d=_e(function(){var y=e.current;u(),y.type==="DRAGGING"&&y.actions.cancel({shouldBlockNextClick:!0}),y.type==="PENDING"&&y.actions.abort()},[u]),f=_e(function(){var _={capture:!0,passive:!1},w=r4({cancel:d,completed:u,getPhase:function(){return e.current},setPhase:function(b){e.current=b}});n.current=Jn(window,w,_)},[d,u]),m=_e(function(_,w){e.current.type!=="IDLE"&&le(),e.current={type:"PENDING",point:w,actions:_},f()},[f]);Ln(function(){return a(),function(){n.current()}},[a])}var ra;function o4(){}var s4=(ra={},ra[KV]=!0,ra[qV]=!0,ra[YV]=!0,ra[QV]=!0,ra);function a4(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:function(a){if(a.keyCode===ov){a.preventDefault(),n();return}if(a.keyCode===ib){a.preventDefault(),r();return}if(a.keyCode===e4){a.preventDefault(),t.moveDown();return}if(a.keyCode===JV){a.preventDefault(),t.moveUp();return}if(a.keyCode===ZV){a.preventDefault(),t.moveRight();return}if(a.keyCode===XV){a.preventDefault(),t.moveLeft();return}if(s4[a.keyCode]){a.preventDefault();return}ob(a)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:Vh,fn:n}]}function l4(t){var e=oe.useRef(o4),n=qe(function(){return{eventName:"keydown",fn:function(a){if(a.defaultPrevented||a.keyCode!==ib)return;var u=t.findClosestDraggableId(a);if(!u)return;var d=t.tryGetLock(u,y,{sourceEvent:a});if(!d)return;a.preventDefault();var f=!0,m=d.snapLift();e.current();function y(){f||le(),f=!1,e.current(),r()}e.current=Jn(window,a4(m,y),{capture:!0,passive:!1})}}},[t]),r=_e(function(){var a={passive:!1,capture:!0};e.current=Jn(window,[n],a)},[n]);Ln(function(){return r(),function(){e.current()}},[r])}var Qp={type:"IDLE"},u4=120,c4=.15;function d4(t){var e=t.cancel,n=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(o){o.preventDefault()}},{eventName:"keydown",fn:function(o){if(n().type!=="DRAGGING"){e();return}o.keyCode===ov&&o.preventDefault(),e()}},{eventName:Vh,fn:e}]}function h4(t){var e=t.cancel,n=t.completed,r=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(a){var u=r();if(u.type!=="DRAGGING"){e();return}u.hasMoved=!0;var d=a.touches[0],f=d.clientX,m=d.clientY,y={x:f,y:m};a.preventDefault(),u.actions.move(y)}},{eventName:"touchend",fn:function(a){var u=r();if(u.type!=="DRAGGING"){e();return}a.preventDefault(),u.actions.drop({shouldBlockNextClick:!0}),n()}},{eventName:"touchcancel",fn:function(a){if(r().type!=="DRAGGING"){e();return}a.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(a){var u=r();u.type==="IDLE"&&le();var d=a.touches[0];if(d){var f=d.force>=c4;if(f){var m=u.actions.shouldRespectForcePress();if(u.type==="PENDING"){m&&e();return}if(m){if(u.hasMoved){a.preventDefault();return}e();return}a.preventDefault()}}}},{eventName:Vh,fn:e}]}function f4(t){var e=oe.useRef(Qp),n=oe.useRef(ro),r=_e(function(){return e.current},[]),o=_e(function(I){e.current=I},[]),a=qe(function(){return{eventName:"touchstart",fn:function(I){if(!I.defaultPrevented){var b=t.findClosestDraggableId(I);if(b){var D=t.tryGetLock(b,d,{sourceEvent:I});if(D){var x=I.touches[0],O=x.clientX,V=x.clientY,B={x:O,y:V};n.current(),_(D,B)}}}}}},[t]),u=_e(function(){var I={capture:!0,passive:!1};n.current=Jn(window,[a],I)},[a]),d=_e(function(){var w=e.current;w.type!=="IDLE"&&(w.type==="PENDING"&&clearTimeout(w.longPressTimerId),o(Qp),n.current(),u())},[u,o]),f=_e(function(){var w=e.current;d(),w.type==="DRAGGING"&&w.actions.cancel({shouldBlockNextClick:!0}),w.type==="PENDING"&&w.actions.abort()},[d]),m=_e(function(){var I={capture:!0,passive:!1},b={cancel:f,completed:d,getPhase:r},D=Jn(window,h4(b),I),x=Jn(window,d4(b),I);n.current=function(){D(),x()}},[f,r,d]),y=_e(function(){var I=r();I.type!=="PENDING"&&le();var b=I.actions.fluidLift(I.point);o({type:"DRAGGING",actions:b,hasMoved:!1})},[r,o]),_=_e(function(I,b){r().type!=="IDLE"&&le();var D=setTimeout(y,u4);o({type:"PENDING",point:b,actions:I,longPressTimerId:D}),m()},[m,r,o,y]);Ln(function(){return u(),function(){n.current();var b=r();b.type==="PENDING"&&(clearTimeout(b.longPressTimerId),o(Qp))}},[r,u,o]),Ln(function(){var I=Jn(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return I},[])}var p4={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function ab(t,e){if(e==null)return!1;var n=!!p4[e.tagName.toLowerCase()];if(n)return!0;var r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:ab(t,e.parentElement)}function m4(t,e){var n=e.target;return Lh(n)?ab(t,n):!1}var g4=function(t){return _r(t.getBoundingClientRect()).center};function v4(t){return t instanceof nb(t).Element}var y4=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],n=yo(e,function(r){return r in Element.prototype});return n||t}();function lb(t,e){return t==null?null:t[y4](e)?t:lb(t.parentElement,e)}function _4(t,e){return t.closest?t.closest(e):lb(t,e)}function w4(t){return"["+Aa.contextId+'="'+t+'"]'}function E4(t,e){var n=e.target;if(!v4(n))return null;var r=w4(t),o=_4(n,r);return!o||!Lh(o)?null:o}function I4(t,e){var n=E4(t,e);return n?n.getAttribute(Aa.draggableId):null}function S4(t,e){var n="["+Vm.contextId+'="'+t+'"]',r=TT(document.querySelectorAll(n)),o=yo(r,function(a){return a.getAttribute(Vm.id)===e});return!o||!Lh(o)?null:o}function T4(t){t.preventDefault()}function od(t){var e=t.expected,n=t.phase,r=t.isLockActive;return t.shouldWarn,!(!r()||e!==n)}function ub(t){var e=t.lockAPI,n=t.store,r=t.registry,o=t.draggableId;if(e.isClaimed())return!1;var a=r.draggable.findById(o);return!(!a||!a.options.isEnabled||!JT(n.getState(),o))}function b4(t){var e=t.lockAPI,n=t.contextId,r=t.store,o=t.registry,a=t.draggableId,u=t.forceSensorStop,d=t.sourceEvent,f=ub({lockAPI:e,store:r,registry:o,draggableId:a});if(!f)return null;var m=o.draggable.getById(a),y=S4(n,m.descriptor.id);if(!y||d&&!m.options.canDragInteractiveElements&&m4(y,d))return null;var _=e.claim(u||ro),w="PRE_DRAG";function I(){return m.options.shouldRespectForcePress}function b(){return e.isActive(_)}function D(Q,P){od({expected:Q,phase:w,isLockActive:b,shouldWarn:!0})&&r.dispatch(P())}var x=D.bind(null,"DRAGGING");function O(Q){function P(){e.release(),w="COMPLETED"}w!=="PRE_DRAG"&&(P(),w!=="PRE_DRAG"&&le()),r.dispatch(yM(Q.liftActionArgs)),w="DRAGGING";function A(R,N){if(N===void 0&&(N={shouldBlockNextClick:!1}),Q.cleanup(),N.shouldBlockNextClick){var L=Jn(window,[{eventName:"click",fn:T4,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(L)}P(),r.dispatch(HT({reason:R}))}return Te({isActive:function(){return od({expected:"DRAGGING",phase:w,isLockActive:b,shouldWarn:!1})},shouldRespectForcePress:I,drop:function(N){return A("DROP",N)},cancel:function(N){return A("CANCEL",N)}},Q.actions)}function V(Q){var P=gu(function(R){x(function(){return WT({client:R})})}),A=O({liftActionArgs:{id:a,clientSelection:Q,movementMode:"FLUID"},cleanup:function(){return P.cancel()},actions:{move:P}});return Te({},A,{move:P})}function B(){var Q={moveUp:function(){return x(AM)},moveRight:function(){return x(RM)},moveDown:function(){return x(PM)},moveLeft:function(){return x(xM)}};return O({liftActionArgs:{id:a,clientSelection:g4(y),movementMode:"SNAP"},cleanup:ro,actions:Q})}function $(){var Q=od({expected:"PRE_DRAG",phase:w,isLockActive:b,shouldWarn:!0});Q&&e.release()}var W={isActive:function(){return od({expected:"PRE_DRAG",phase:w,isLockActive:b,shouldWarn:!1})},shouldRespectForcePress:I,fluidLift:V,snapLift:B,abort:$};return W}var C4=[i4,l4,f4];function A4(t){var e=t.contextId,n=t.store,r=t.registry,o=t.customSensors,a=t.enableDefaultSensors,u=[].concat(a?C4:[],o||[]),d=oe.useState(function(){return WV()})[0],f=_e(function(V,B){V.isDragging&&!B.isDragging&&d.tryAbandon()},[d]);Ln(function(){var V=n.getState(),B=n.subscribe(function(){var $=n.getState();f(V,$),V=$});return B},[d,n,f]),Ln(function(){return d.tryAbandon},[d.tryAbandon]);for(var m=_e(function(O){return ub({lockAPI:d,registry:r,store:n,draggableId:O})},[d,r,n]),y=_e(function(O,V,B){return b4({lockAPI:d,registry:r,contextId:e,store:n,draggableId:O,forceSensorStop:V,sourceEvent:B&&B.sourceEvent?B.sourceEvent:null})},[e,d,r,n]),_=_e(function(O){return I4(e,O)},[e]),w=_e(function(O){var V=r.draggable.findById(O);return V?V.options:null},[r.draggable]),I=_e(function(){d.isClaimed()&&(d.tryAbandon(),n.getState().phase!=="IDLE"&&n.dispatch(Qg()))},[d,n]),b=_e(d.isClaimed,[d]),D=qe(function(){return{canGetLock:m,tryGetLock:y,findClosestDraggableId:_,findOptionsForDraggable:w,tryReleaseLock:I,isLockClaimed:b}},[m,y,_,w,I,b]),x=0;x<u.length;x++)u[x](D)}var P4=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function Ll(t){return t.current||le(),t.current}function R4(t){var e=t.contextId,n=t.setCallbacks,r=t.sensors,o=t.nonce,a=t.dragHandleUsageInstructions,u=oe.useRef(null),d=rb(t),f=_e(function(){return P4(d.current)},[d]),m=BV(e),y=zV({contextId:e,text:a}),_=DV(e,o),w=_e(function(R){Ll(u).dispatch(R)},[]),I=qe(function(){return I0({publishWhileDragging:wM,updateDroppableScroll:IM,updateDroppableIsEnabled:SM,updateDroppableIsCombineEnabled:TM,collectionStarting:EM},w)},[w]),b=MV(),D=qe(function(){return cV(b,I)},[b,I]),x=qe(function(){return AV(Te({scrollWindow:dV,scrollDroppable:D.scrollDroppable},I0({move:WT},w)))},[D.scrollDroppable,w]),O=OV(e),V=qe(function(){return sV({announce:m,autoScroller:x,dimensionMarshal:D,focusMarshal:O,getResponders:f,styleMarshal:_})},[m,x,D,O,f,_]);u.current=V;var B=_e(function(){var R=Ll(u),N=R.getState();N.phase!=="IDLE"&&R.dispatch(Qg())},[]),$=_e(function(){var R=Ll(u).getState();return R.isDragging||R.phase==="DROP_ANIMATING"},[]),W=qe(function(){return{isDragging:$,tryAbort:B}},[$,B]);n(W);var Q=_e(function(R){return JT(Ll(u).getState(),R)},[]),P=_e(function(){return Ko(Ll(u).getState())},[]),A=qe(function(){return{marshal:D,focus:O,contextId:e,canLift:Q,isMovementAllowed:P,dragHandleUsageInstructionsId:y,registry:b}},[e,D,y,O,Q,P,b]);return A4({contextId:e,store:V,registry:b,customSensors:r,enableDefaultSensors:t.enableDefaultSensors!==!1}),oe.useEffect(function(){return B},[B]),je.createElement(Mh.Provider,{value:A},je.createElement(p2,{context:rv,store:V},t.children))}var x4=0;function k4(){return qe(function(){return""+x4++},[])}function D4(t){var e=k4(),n=t.dragHandleUsageInstructions||Sd.dragHandleUsageInstructions;return je.createElement(lL,null,function(r){return je.createElement(R4,{nonce:t.nonce,contextId:e,setCallbacks:r,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var cb=function(e){return function(n){return e===n}},N4=cb("scroll"),O4=cb("auto"),nE=function(e,n){return n(e.overflowX)||n(e.overflowY)},L4=function(e){var n=window.getComputedStyle(e),r={overflowX:n.overflowX,overflowY:n.overflowY};return nE(r,N4)||nE(r,O4)},M4=function(){return!1},V4=function t(e){return e==null?null:e===document.body?M4()?e:null:e===document.documentElement?null:L4(e)?e:t(e.parentElement)},Fm=function(t){return{x:t.scrollLeft,y:t.scrollTop}},F4=function t(e){if(!e)return!1;var n=window.getComputedStyle(e);return n.position==="fixed"?!0:t(e.parentElement)},B4=function(t){var e=V4(t),n=F4(t);return{closestScrollable:e,isFixedOnPage:n}},U4=function(t){var e=t.descriptor,n=t.isEnabled,r=t.isCombineEnabled,o=t.isFixedOnPage,a=t.direction,u=t.client,d=t.page,f=t.closest,m=function(){if(!f)return null;var I=f.scrollSize,b=f.client,D=QT({scrollHeight:I.scrollHeight,scrollWidth:I.scrollWidth,height:b.paddingBox.height,width:b.paddingBox.width});return{pageMarginBox:f.page.marginBox,frameClient:b,scrollSize:I,shouldClipSubject:f.shouldClipSubject,scroll:{initial:f.scroll,current:f.scroll,max:D,diff:{value:zt,displacement:zt}}}}(),y=a==="vertical"?Wg:RT,_=ba({page:d,withPlaceholder:null,axis:y,frame:m}),w={descriptor:e,isCombineEnabled:r,isFixedOnPage:o,axis:y,isEnabled:n,client:u,page:d,frame:m,subject:_};return w},j4=function(e,n){var r=_T(e);if(!n||e!==n)return r;var o=r.paddingBox.top-n.scrollTop,a=r.paddingBox.left-n.scrollLeft,u=o+n.scrollHeight,d=a+n.scrollWidth,f={top:o,right:d,bottom:u,left:a},m=Bg(f,r.border),y=Ug({borderBox:m,margin:r.margin,border:r.border,padding:r.padding});return y},$4=function(t){var e=t.ref,n=t.descriptor,r=t.env,o=t.windowScroll,a=t.direction,u=t.isDropDisabled,d=t.isCombineEnabled,f=t.shouldClipSubject,m=r.closestScrollable,y=j4(e,m),_=Yd(y,o),w=function(){if(!m)return null;var b=_T(m),D={scrollHeight:m.scrollHeight,scrollWidth:m.scrollWidth};return{client:b,page:Yd(b,o),scroll:Fm(m),scrollSize:D,shouldClipSubject:f}}(),I=U4({descriptor:n,isEnabled:!u,isCombineEnabled:d,isFixedOnPage:r.isFixedOnPage,direction:a,client:y,page:_,closest:w});return I},z4={passive:!1},W4={passive:!0},rE=function(t){return t.shouldPublishImmediately?z4:W4};function nh(t){var e=oe.useContext(t);return e||le(),e}var sd=function(e){return e&&e.env.closestScrollable||null};function H4(t){var e=oe.useRef(null),n=nh(Mh),r=iv("droppable"),o=n.registry,a=n.marshal,u=rb(t),d=qe(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),f=oe.useRef(d),m=qe(function(){return $t(function($,W){e.current||le();var Q={x:$,y:W};a.updateDroppableScroll(d.id,Q)})},[d.id,a]),y=_e(function(){var $=e.current;return!$||!$.env.closestScrollable?zt:Fm($.env.closestScrollable)},[]),_=_e(function(){var $=y();m($.x,$.y)},[y,m]),w=qe(function(){return gu(_)},[_]),I=_e(function(){var $=e.current,W=sd($);$&&W||le();var Q=$.scrollOptions;if(Q.shouldPublishImmediately){_();return}w()},[w,_]),b=_e(function($,W){e.current&&le();var Q=u.current,P=Q.getDroppableRef();P||le();var A=B4(P),R={ref:P,descriptor:d,env:A,scrollOptions:W};e.current=R;var N=$4({ref:P,descriptor:d,env:A,windowScroll:$,direction:Q.direction,isDropDisabled:Q.isDropDisabled,isCombineEnabled:Q.isCombineEnabled,shouldClipSubject:!Q.ignoreContainerClipping}),L=A.closestScrollable;return L&&(L.setAttribute(J0.contextId,n.contextId),L.addEventListener("scroll",I,rE(R.scrollOptions))),N},[n.contextId,d,I,u]),D=_e(function(){var $=e.current,W=sd($);return $&&W||le(),Fm(W)},[]),x=_e(function(){var $=e.current;$||le();var W=sd($);e.current=null,W&&(w.cancel(),W.removeAttribute(J0.contextId),W.removeEventListener("scroll",I,rE($.scrollOptions)))},[I,w]),O=_e(function($){var W=e.current;W||le();var Q=sd(W);Q||le(),Q.scrollTop+=$.y,Q.scrollLeft+=$.x},[]),V=qe(function(){return{getDimensionAndWatchScroll:b,getScrollWhileDragging:D,dragStopped:x,scroll:O}},[x,b,D,O]),B=qe(function(){return{uniqueId:r,descriptor:d,callbacks:V}},[V,d,r]);Ln(function(){return f.current=B.descriptor,o.droppable.register(B),function(){e.current&&x(),o.droppable.unregister(B)}},[V,d,x,B,a,o.droppable]),Ln(function(){e.current&&a.updateDroppableIsEnabled(f.current.id,!t.isDropDisabled)},[t.isDropDisabled,a]),Ln(function(){e.current&&a.updateDroppableIsCombineEnabled(f.current.id,t.isCombineEnabled)},[t.isCombineEnabled,a])}function Yp(){}var iE={width:0,height:0,margin:pL},G4=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,o=e.animate;return n||o==="close"?iE:{height:r.client.borderBox.height,width:r.client.borderBox.width,margin:r.client.margin}},q4=function(e){var n=e.isAnimatingOpenOnMount,r=e.placeholder,o=e.animate,a=G4({isAnimatingOpenOnMount:n,placeholder:r,animate:o});return{display:r.display,boxSizing:"border-box",width:a.width,height:a.height,marginTop:a.margin.top,marginRight:a.margin.right,marginBottom:a.margin.bottom,marginLeft:a.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:o!=="none"?eu.placeholder:null}};function K4(t){var e=oe.useRef(null),n=_e(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),r=t.animate,o=t.onTransitionEnd,a=t.onClose,u=t.contextId,d=oe.useState(t.animate==="open"),f=d[0],m=d[1];oe.useEffect(function(){return f?r!=="open"?(n(),m(!1),Yp):e.current?Yp:(e.current=setTimeout(function(){e.current=null,m(!1)}),n):Yp},[r,f,n]);var y=_e(function(w){w.propertyName==="height"&&(o(),r==="close"&&a())},[r,a,o]),_=q4({isAnimatingOpenOnMount:f,animate:t.animate,placeholder:t.placeholder});return je.createElement(t.placeholder.tagName,{style:_,"data-rbd-placeholder-context-id":u,onTransitionEnd:y,ref:t.innerRef})}var Q4=je.memo(K4),sv=je.createContext(null),Y4=function(t){aT(e,t);function e(){for(var r,o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];return r=t.call.apply(t,[this].concat(a))||this,r.state={isVisible:!!r.props.on,data:r.props.on,animate:r.props.shouldAnimate&&r.props.on?"open":"none"},r.onClose=function(){r.state.animate==="close"&&r.setState({isVisible:!1})},r}e.getDerivedStateFromProps=function(o,a){return o.shouldAnimate?o.on?{isVisible:!0,data:o.on,animate:"open"}:a.isVisible?{isVisible:!0,data:a.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!o.on,data:o.on,animate:"none"}};var n=e.prototype;return n.render=function(){if(!this.state.isVisible)return null;var o={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(o)},e}(je.PureComponent),oE={dragging:5e3,dropAnimating:4500},X4=function(e,n){return n?eu.drop(n.duration):e?eu.snap:eu.fluid},J4=function(e,n){return e?n?wu.opacity.drop:wu.opacity.combining:null},Z4=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function eF(t){var e=t.dimension,n=e.client,r=t.offset,o=t.combineWith,a=t.dropping,u=!!o,d=Z4(t),f=!!a,m=f?Lm.drop(r,u):Lm.moveTo(r),y={position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:X4(d,a),transform:m,opacity:J4(u,f),zIndex:f?oE.dropAnimating:oE.dragging,pointerEvents:"none"};return y}function tF(t){return{transform:Lm.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function nF(t){return t.type==="DRAGGING"?eF(t):tF(t)}function rF(t,e,n){n===void 0&&(n=zt);var r=window.getComputedStyle(e),o=e.getBoundingClientRect(),a=yT(o,r),u=Yd(a,n),d={client:a,tagName:e.tagName.toLowerCase(),display:r.display},f={x:a.marginBox.width,y:a.marginBox.height},m={descriptor:t,placeholder:d,displaceBy:f,client:a,page:u};return m}function iF(t){var e=iv("draggable"),n=t.descriptor,r=t.registry,o=t.getDraggableRef,a=t.canDragInteractiveElements,u=t.shouldRespectForcePress,d=t.isEnabled,f=qe(function(){return{canDragInteractiveElements:a,shouldRespectForcePress:u,isEnabled:d}},[a,d,u]),m=_e(function(I){var b=o();return b||le(),rF(n,b,I)},[n,o]),y=qe(function(){return{uniqueId:e,descriptor:n,options:f,getDimension:m}},[n,m,f,e]),_=oe.useRef(y),w=oe.useRef(!0);Ln(function(){return r.draggable.register(_.current),function(){return r.draggable.unregister(_.current)}},[r.draggable]),Ln(function(){if(w.current){w.current=!1;return}var I=_.current;_.current=y,r.draggable.update(y,I)},[y,r.draggable])}function oF(t){t.preventDefault()}function sF(t){var e=oe.useRef(null),n=_e(function(R){e.current=R},[]),r=_e(function(){return e.current},[]),o=nh(Mh),a=o.contextId,u=o.dragHandleUsageInstructionsId,d=o.registry,f=nh(sv),m=f.type,y=f.droppableId,_=qe(function(){return{id:t.draggableId,index:t.index,type:m,droppableId:y}},[t.draggableId,t.index,m,y]),w=t.children,I=t.draggableId,b=t.isEnabled,D=t.shouldRespectForcePress,x=t.canDragInteractiveElements,O=t.isClone,V=t.mapped,B=t.dropAnimationFinished;if(!O){var $=qe(function(){return{descriptor:_,registry:d,getDraggableRef:r,canDragInteractiveElements:x,shouldRespectForcePress:D,isEnabled:b}},[_,d,r,x,D,b]);iF($)}var W=qe(function(){return b?{tabIndex:0,role:"button","aria-describedby":u,"data-rbd-drag-handle-draggable-id":I,"data-rbd-drag-handle-context-id":a,draggable:!1,onDragStart:oF}:null},[a,u,I,b]),Q=_e(function(R){V.type==="DRAGGING"&&V.dropping&&R.propertyName==="transform"&&B()},[B,V]),P=qe(function(){var R=nF(V),N=V.type==="DRAGGING"&&V.dropping?Q:null,L={innerRef:n,draggableProps:{"data-rbd-draggable-context-id":a,"data-rbd-draggable-id":I,style:R,onTransitionEnd:N},dragHandleProps:W};return L},[a,W,I,V,Q,n]),A=qe(function(){return{draggableId:_.id,type:_.type,source:{index:_.index,droppableId:_.droppableId}}},[_.droppableId,_.id,_.index,_.type]);return w(P,V.snapshot,A)}var db=function(t,e){return t===e},hb=function(t){var e=t.combine,n=t.destination;return n?n.droppableId:e?e.droppableId:null},aF=function(e){return e.combine?e.combine.draggableId:null},lF=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function uF(){var t=$t(function(o,a){return{x:o,y:a}}),e=$t(function(o,a,u,d,f){return{isDragging:!0,isClone:a,isDropAnimating:!!f,dropAnimation:f,mode:o,draggingOver:u,combineWith:d,combineTargetFor:null}}),n=$t(function(o,a,u,d,f,m,y){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:f,combineWith:m,mode:a,offset:o,dimension:u,forceShouldAnimate:y,snapshot:e(a,d,f,m,null)}}}),r=function(a,u){if(a.isDragging){if(a.critical.draggable.id!==u.draggableId)return null;var d=a.current.client.offset,f=a.dimensions.draggables[u.draggableId],m=On(a.impact),y=lF(a.impact),_=a.forceShouldAnimate;return n(t(d.x,d.y),a.movementMode,f,u.isClone,m,y,_)}if(a.phase==="DROP_ANIMATING"){var w=a.completed;if(w.result.draggableId!==u.draggableId)return null;var I=u.isClone,b=a.dimensions.draggables[u.draggableId],D=w.result,x=D.mode,O=hb(D),V=aF(D),B=a.dropDuration,$={duration:B,curve:Xg.drop,moveTo:a.newHomeClientOffset,opacity:V?wu.opacity.drop:null,scale:V?wu.scale.drop:null};return{mapped:{type:"DRAGGING",offset:a.newHomeClientOffset,dimension:b,dropping:$,draggingOver:O,combineWith:V,mode:x,forceShouldAnimate:null,snapshot:e(x,I,O,V,$)}}}return null};return r}function fb(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var cF={mapped:{type:"SECONDARY",offset:zt,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:fb(null)}};function dF(){var t=$t(function(u,d){return{x:u,y:d}}),e=$t(fb),n=$t(function(u,d,f){return d===void 0&&(d=null),{mapped:{type:"SECONDARY",offset:u,combineTargetFor:d,shouldAnimateDisplacement:f,snapshot:e(d)}}}),r=function(d){return d?n(zt,d,!0):null},o=function(d,f,m,y){var _=m.displaced.visible[d],w=!!(y.inVirtualList&&y.effected[d]),I=Dh(m),b=I&&I.draggableId===d?f:null;if(!_){if(!w)return r(b);if(m.displaced.invisible[d])return null;var D=Va(y.displacedBy.point),x=t(D.x,D.y);return n(x,b,!0)}if(w)return r(b);var O=m.displacedBy.point,V=t(O.x,O.y);return n(V,b,_.shouldAnimate)},a=function(d,f){if(d.isDragging)return d.critical.draggable.id===f.draggableId?null:o(f.draggableId,d.critical.draggable.id,d.impact,d.afterCritical);if(d.phase==="DROP_ANIMATING"){var m=d.completed;return m.result.draggableId===f.draggableId?null:o(f.draggableId,m.result.draggableId,m.impact,m.afterCritical)}return null};return a}var hF=function(){var e=uF(),n=dF(),r=function(a,u){return e(a,u)||n(a,u)||cF};return r},fF={dropAnimationFinished:GT},pF=mT(hF,fF,null,{context:rv,pure:!0,areStatePropsEqual:db})(sF);function pb(t){var e=nh(sv),n=e.isUsingCloneFor;return n===t.draggableId&&!t.isClone?null:je.createElement(pF,t)}function mF(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;return je.createElement(pb,Te({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}))}function gF(t){var e=oe.useContext(Mh);e||le();var n=e.contextId,r=e.isMovementAllowed,o=oe.useRef(null),a=oe.useRef(null),u=t.children,d=t.droppableId,f=t.type,m=t.mode,y=t.direction,_=t.ignoreContainerClipping,w=t.isDropDisabled,I=t.isCombineEnabled,b=t.snapshot,D=t.useClone,x=t.updateViewportMaxScroll,O=t.getContainerForClone,V=_e(function(){return o.current},[]),B=_e(function(L){o.current=L},[]);_e(function(){return a.current},[]);var $=_e(function(L){a.current=L},[]),W=_e(function(){r()&&x({maxScroll:XT()})},[r,x]);H4({droppableId:d,type:f,mode:m,direction:y,isDropDisabled:w,isCombineEnabled:I,ignoreContainerClipping:_,getDroppableRef:V});var Q=je.createElement(Y4,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(L){var j=L.onClose,C=L.data,be=L.animate;return je.createElement(Q4,{placeholder:C,onClose:j,innerRef:$,animate:be,contextId:n,onTransitionEnd:W})}),P=qe(function(){return{innerRef:B,placeholder:Q,droppableProps:{"data-rbd-droppable-id":d,"data-rbd-droppable-context-id":n}}},[n,d,Q,B]),A=D?D.dragging.draggableId:null,R=qe(function(){return{droppableId:d,type:f,isUsingCloneFor:A}},[d,A,f]);function N(){if(!D)return null;var L=D.dragging,j=D.render,C=je.createElement(pb,{draggableId:L.draggableId,index:L.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(be,Qe){return j(be,Qe,L)});return X2.createPortal(C,O())}return je.createElement(sv.Provider,{value:R},u(P,b),N())}var Xp=function(e,n){return e===n.droppable.type},sE=function(e,n){return n.draggables[e.draggable.id]},vF=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},n=Te({},e,{shouldAnimatePlaceholder:!1}),r=$t(function(u){return{draggableId:u.id,type:u.type,source:{index:u.index,droppableId:u.droppableId}}}),o=$t(function(u,d,f,m,y,_){var w=y.descriptor.id,I=y.descriptor.droppableId===u;if(I){var b=_?{render:_,dragging:r(y.descriptor)}:null,D={isDraggingOver:f,draggingOverWith:f?w:null,draggingFromThisWith:w,isUsingPlaceholder:!0};return{placeholder:y.placeholder,shouldAnimatePlaceholder:!1,snapshot:D,useClone:b}}if(!d)return n;if(!m)return e;var x={isDraggingOver:f,draggingOverWith:w,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:y.placeholder,shouldAnimatePlaceholder:!0,snapshot:x,useClone:null}}),a=function(d,f){var m=f.droppableId,y=f.type,_=!f.isDropDisabled,w=f.renderClone;if(d.isDragging){var I=d.critical;if(!Xp(y,I))return n;var b=sE(I,d.dimensions),D=On(d.impact)===m;return o(m,_,D,D,b,w)}if(d.phase==="DROP_ANIMATING"){var x=d.completed;if(!Xp(y,x.critical))return n;var O=sE(x.critical,d.dimensions);return o(m,_,hb(x.result)===m,On(x.impact)===m,O,w)}if(d.phase==="IDLE"&&d.completed&&!d.shouldFlush){var V=d.completed;if(!Xp(y,V.critical))return n;var B=On(V.impact)===m,$=!!(V.impact.at&&V.impact.at.type==="COMBINE"),W=V.critical.droppable.id===m;return B?$?e:n:W?e:n}return n};return a},yF={updateViewportMaxScroll:CM};function _F(){return document.body||le(),document.body}var wF={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:_F},mb=mT(vF,yF,null,{context:rv,pure:!0,areStatePropsEqual:db})(gF);mb.defaultProps=wF;const aE=ee.div`
  width: 100%;
`,EF=ee.div`
  position: absolute;
  width: 400px;
  z-index: 999;
`,IF=ee.h1`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: 600;
`,SF=ee.form`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 100%;
  max-width: 500px;
`,Ml=ee.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`,lE=ee.input`
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
`,TF=ee.textarea`
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
`,uE=ee.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`,bF=ee.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`,ia=ee.option``,CF=ee.button`
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
`,AF=ee.button`
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
`,PF=ee.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`,cE=ee.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: ${Zn.colors.lightText};
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`,av=({onClick:t})=>z.jsxs(PF,{type:"button",onClick:t,"aria-label":"Close",children:[z.jsx(cE,{}),z.jsx(cE,{})]});av.propTypes={onClick:di.func.isRequired};const RF=({setNewTaskIsOpen:t,onSubmit:e,newProjectFormData:{formTitle:n,taskTitle:r,description:o,level:a,status:u,attachFiles:d,addTask:f}})=>{const[m,y]=oe.useState({content:"",description:"",level:"",status:""}),_=w=>{w.preventDefault(),e(m)};return z.jsx(EF,{children:z.jsxs(SF,{onSubmit:_,children:[z.jsx(av,{onClick:()=>t(!1)}),z.jsx(IF,{children:n}),z.jsx(Ml,{children:r}),z.jsx(lE,{value:m.content,type:"text",placeholder:"e.g. Brainstorming Session",onChange:w=>y(I=>({...I,content:w.target.value}))}),z.jsx(Ml,{children:o}),z.jsx(TF,{value:m.description,placeholder:"What needs to be done?",onChange:w=>y(I=>({...I,description:w.target.value}))}),z.jsxs(bF,{children:[z.jsxs(aE,{children:[z.jsx(Ml,{children:a}),z.jsxs(uE,{value:m.level,onChange:w=>y(I=>({...I,level:w.target.value})),children:[z.jsx(ia,{children:"Low"}),z.jsx(ia,{children:"Medium"}),z.jsx(ia,{children:"Hight"})]})]}),z.jsxs(aE,{children:[z.jsx(Ml,{children:u}),z.jsxs(uE,{value:m.status,onChange:w=>y(I=>({...I,status:w.target.value})),children:[z.jsx(ia,{children:"To Do"}),z.jsx(ia,{children:"In Progress"}),z.jsx(ia,{children:"Done"})]})]})]}),z.jsxs(Ml,{htmlFor:"fileUpload",children:[d," "]}),z.jsxs(CF,{children:[z.jsx("span",{children:"📎"})," Attach Files"]}),z.jsx(lE,{id:"fileUpload",type:"file",multiple:!0,style:{display:"none"}}),z.jsx(AF,{type:"submit",children:f})]})})},xF=async({collectionName:t,docId:e,updatedData:n})=>{try{const r=Ah(xh,t,e);await Mg(r,n),console.log(`✅ Документ у '${t}' оновлено (ID: ${e})`)}catch(r){console.error("❌ Помилка при оновленні документа:",r)}},dE=async({projectId:t,updatedStartColumn:e,updatedFinishColumn:n})=>{try{const r=Ah(xh,"projects",t);await Mg(r,{[`columns.${e.id}.taskIds`]:e.taskIds,[`columns.${n.id}.taskIds`]:n.taskIds}),console.log("✅ Task order updated in Firestore")}catch(r){console.error("❌ Error updating task order:",r)}},kF=async({collectionName:t,docId:e})=>{try{const n=Ah(xh,t,e),r=await SO(n);return r.exists()?(console.log(`📦 Документ з '${t}' отримано (ID: ${e})`),r.data()):(console.warn(`⚠️ Документ не знайдено в '${t}' (ID: ${e})`),null)}catch(n){return console.error("❌ Помилка при отриманні документа:",n),null}},DF=()=>({deleteData:async({projectId:e,taskId:n,columnId:r,currentTaskIds:o})=>{try{const a=Ah(xh,"projects",e),u=o.filter(d=>d!==n);return await Mg(a,{[`tasks.${n}`]:AO(),[`columns.${r}.taskIds`]:u}),console.log(`✅ Таска ${n} видалена з проєкту ${e}`),u}catch(a){throw console.error("❌ Помилка при видаленні таски:",a),a}}}),hE="projects",Vl="project-5",NF=()=>{const[t,e]=oe.useState(null),[n,r]=oe.useState(!1),[o,a]=oe.useState(null),{deleteData:u}=DF(),d={formTitle:"Add Task to Project",taskTitle:"Task Title",description:"Description",level:"Priority",status:"Status",attachFiles:"Attach Files",addTask:"Add Task"},f=async()=>{const x=await kF({collectionName:hE,docId:Vl});e(x),console.log("initialArray:",x)};oe.useEffect(()=>{f()},[]);const m=async x=>{const O=`task-${Object.keys(t.tasks).length+1}`,V="column-1",B={id:O,...x};e($=>({...$,tasks:{...$.tasks,[O]:B},colums:{...$.colums,[V]:{...$.columns[V],taskIds:[...$.columns[V].taskIds]}}})),await xF({collectionName:hE,docId:Vl,updatedData:{[`tasks.${O}`]:B,[`columns.${V}.taskIds`]:[...t.columns[V].taskIds,O]}}).finally(f())},y=async(x,O)=>{console.log("taskId:",x,"columnId:",O);try{const V=await u({projectId:Vl,taskId:x,columnId:O,currentTaskIds:t.columns[O].taskIds});e(B=>{const{[x]:$,...W}=B.tasks;return{...B,tasks:W,columns:{...B.columns,[O]:{...B.columns[O],taskIds:V}}}})}catch(V){console.error("Не вдалося видалити таску:",V)}},_=x=>{m(x)},w=(x,O)=>{y(x,O)},I=x=>{a(o===null?x:null)},b=(x,O,V,B,$)=>{const W=Array.from(x.taskIds);W.splice(V,1);const Q=Array.from(O.taskIds||[]);return Q.splice(B,0,$),{updatedStartColumn:{...x,taskIds:W},updatedFinishColumn:{...O,taskIds:Q}}},D=async x=>{const{source:O,destination:V,draggableId:B}=x;if(!V||O.droppableId===V.droppableId&&O.index===V.index)return;const $=t.columns[O.droppableId],W=t.columns[V.droppableId];if($===W){const Q=Array.from($.taskIds);Q.splice(O.index,1),Q.splice(V.index,0,B);const P={...$,taskIds:Q};e(A=>({...A,columns:{...A.columns,[P.id]:P}})),await dE({projectId:Vl,updatedStartColumn:P,updatedFinishColumn:P})}else{const{updatedStartColumn:Q,updatedFinishColumn:P}=b($,W,O.index,V.index,B);e(A=>({...A,columns:{...A.columns,[Q.id]:Q,[P.id]:P}})),await dE({projectId:Vl,updatedStartColumn:Q,updatedFinishColumn:P})}};return z.jsx(NO,{children:z.jsxs(LO,{children:[n&&z.jsx(RF,{newProjectFormData:d,setNewTaskIsOpen:r,onSubmit:_}),z.jsx(D4,{onDragEnd:D,children:t&&t.columnOrder.map(x=>{const O=t.columns[x],V=O.taskIds.map(B=>t.tasks[B]);return z.jsxs(MO,{$column:O,$tasks:V,children:[z.jsxs(VO,{$lineColor:O.lineColor,children:[z.jsxs(FO,{$lineColor:O.lineColor,children:[O.title,z.jsx(BO,{"aria-label":"State Project",children:O.taskIds.length})]}),O.id==="column-1"&&z.jsx(UO,{"aria-haspopup":"dialog","aria-controls":"new-project-popup","aria-label":"Create new project",children:z.jsx(jO,{onClick:()=>r(!0),src:"icon/add-square_icon.svg","aria-hidden":"true"})})]}),z.jsx(mb,{droppableId:O.id,children:B=>z.jsxs($O,{ref:B.innerRef,...B.droppableProps,children:[V.filter($=>!!$).map(($,W)=>{const Q={low:{color:zi.levelColorRed,background:zi.levelBackgroundColorRed},medium:{color:zi.levelColorOrange,background:zi.levelBackgroundColorOrange},high:{color:zi.levelColorBlue,background:zi.levelBackgroundColorBlue},completed:{color:zi.levelColorGreen,background:zi.levelBackgroundColorGreen}},{color:P="",background:A=""}=Q[$.level]||{};return z.jsx(mF,{draggableId:$.id,index:W,children:R=>z.jsxs(zO,{...R.draggableProps,...R.dragHandleProps,ref:R.innerRef,children:[z.jsxs(WO,{children:[z.jsx(HO,{"aria-label":"Project level",$levelColor:P,$levelBg:A,children:$.level}),z.jsx(GO,{role:"button",onClick:()=>I($.id),children:z.jsx(KO,{src:"icon/dots_icon.svg",alt:"Menu"})}),z.jsxs(qO,{$taskMenuIsOpen:o,$taskId:$.id,children:[z.jsxs(Mp,{children:[z.jsx(Vp,{src:"icon/pen_icon.png"}),"Edit Task"]}),z.jsxs(Mp,{onClick:()=>w($.id,x),children:[z.jsx(Vp,{src:"icon/delete_icon.png"}),"Delete Task"]}),z.jsxs(Mp,{children:[z.jsx(Vp,{src:"icon/right-arrow_icon.png"}),"Move to Column"]})]})]}),z.jsxs(QO,{children:[z.jsx(YO,{children:$.content}),$!=null&&$.image?z.jsx(OO,{children:z.jsx(JO,{src:$.image,alt:$.content||"Project image"})}):z.jsx(XO,{children:$.description||"No Description Available"})]}),z.jsxs(ZO,{children:[z.jsx(e2,{children:z.jsx("img",{src:"image/Group 633.png",alt:"Persons"})}),z.jsxs(t2,{children:[z.jsxs(n2,{children:[z.jsx("img",{src:"icon/comments_icon.svg",alt:"Comments"}),"10 comments"]}),z.jsxs(r2,{children:[z.jsx("img",{src:"icon/folder_icon.svg",alt:"Folder"}),"3 files"]})]})]})]})},$.id)}),B.placeholder,O.taskIds.length===0&&z.jsx(i2,{style:{textAlign:"center",color:"#aaa"},children:"Drop tasks here"})]})})]},O.id)})})]})})},OF=()=>z.jsx(DO,{children:z.jsx(NF,{})}),LF=ee.main`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:t})=>t.headerSize.desktopHeight};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: ${({theme:t})=>t.headerSize.mobileHeight};
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: ${({theme:t})=>t.headerSize.tabletHeight};
  }
`,MF=ee.div`
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
`,gb=({isSidebarOpen:t})=>z.jsx(LF,{children:z.jsx(kC,{children:z.jsx(MF,{$isSidebarOpen:t,children:z.jsx(OF,{})})})});gb.propTypes={isSidebarOpen:di.bool.isRequired,sidebarRef:di.any};const VF=t=>{const[e,n]=oe.useState(!1),r=oe.useCallback(()=>{n(window.innerWidth<=t)},[t]);return oe.useEffect(()=>{if(typeof window>"u")return;let o;const a=()=>{clearTimeout(o),o=setTimeout(r,0)};return window.addEventListener("resize",a),r(),()=>{window.removeEventListener("resize",a)}},[r]),e},FF=(t=!1)=>{const e=VF(700),[n,r]=oe.useState(e?!1:t),o=()=>r(a=>!a);return oe.useEffect(()=>{r(!e)},[e]),[n,o,e]};function BF(t){const[e,n]=oe.useState(!1);return oe.useEffect(()=>{function r(o){const a=t.every(u=>u.current&&!u.current.contains(o.target));n(a)}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[t]),e}const UF=()=>{const{setIsLoggedIn:t,mode:e,setMode:n,setShowLoginForm:r,setLoggedUser:o}=oe.useContext(Ra),[a,u]=oe.useState({email:"",password:"",confirmPassword:""}),[d,f]=oe.useState("");oe.useEffect(()=>{const w=KR(Id,I=>{I?(o(I),t(!0)):(o(null),t(!1)),console.log("User:",I)});return()=>w()},[]);const m=()=>{n(w=>w==="login"?"register":"login")},y=w=>{if(w.preventDefault(),e==="register"&&a.password!==a.confirmPassword){f("Passwords do not match"),setTimeout(()=>f(""),5e3);return}switch(e){case"login":HR(Id,a.email,a.password).then(()=>{t(!0),r(!1)}).catch(I=>{console.log(I),t(!1),f("User not defined")}).finally(()=>{setTimeout(()=>f(""),5e3)});break;case"register":WR(Id,a.email,a.password).then(()=>{t(!0),r(!1)}).catch(I=>f(I));break}},_=w=>{const{name:I,value:b}=w.target;u(D=>({...D,[I]:b}))};return z.jsx(rA,{children:z.jsxs(iA,{onSubmit:y,children:[z.jsx(uA,{children:z.jsx(av,{onClick:()=>r(!1)})}),z.jsx(oA,{children:e==="login"?"Login":"Register"}),z.jsxs($_,{children:["To log in, use the email: ",z.jsx("br",{})," ",z.jsx("span",{children:"projectm@example.com"})," ",z.jsx("br",{})," and password: ",z.jsx("br",{}),z.jsx("span",{children:"123456"})]}),d&&z.jsx($_,{children:d}),z.jsx(Sp,{children:z.jsx(Tp,{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:_,required:!0})}),z.jsx(Sp,{children:z.jsx(Tp,{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:_,required:!0})}),e==="register"&&z.jsx(Sp,{children:z.jsx(Tp,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:a.confirmPassword,onChange:_,required:!0})}),z.jsx(Gm,{type:"submit",children:e==="login"?"Sign in":"Sign up"}),z.jsxs(aA,{children:[e==="login"?"Don't have an account? ":"Already have an account? ",z.jsx(lA,{onClick:m,children:e==="login"?"Sign up":"Sign in"})]})]})})},jF=ee.main`
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
`,$F=ee.section`
  display: flex;
  max-width: 1280px;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    display: block;
    text-align: center;
  }
`,zF=ee.div`
  margin-right: 2rem;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`,WF=ee.h1`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 1.1;
`,HF=ee.p`
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.5;
`,GF=ee(Gm)`
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 150px;
  background-color: #000000;
`,qF=ee.div`
`,KF=ee.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`,QF=()=>{const{showLoginForm:t,setShowLoginForm:e}=oe.useContext(Ra),n=()=>{e(r=>!r)};return z.jsxs(jF,{children:[t&&z.jsx(UF,{}),z.jsxs($F,{children:[z.jsxs(zF,{children:[z.jsx(WF,{children:"Manage your projects with ease"}),z.jsx(HF,{children:"Functional components to easily create modern UI. Enable date tracking to get an overview of project timelines."}),z.jsx(GF,{onClick:n,"aria-label":"Button for open login form",role:"Open login form",children:"Get Started"})]}),z.jsx(qF,{children:z.jsx(KF,{src:"image/Hero_img.png",alt:"Hero image"})})]})]})},YF=ee.div`
  padding: 0 0 2rem 1rem;
  border-bottom: ${({theme:t})=>t.colors.borderLineColor};
`,XF=ee.ul`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`,JF=ee.li`
  cursor: pointer;
  list-style: none;
  img {
    margin-right: 1rem;
  }
`,ZF=[{id:1,name:"Home",icon:"icon/home_icon.svg"},{id:2,name:"Massages",icon:"icon/message_icon.svg"},{id:3,name:"Tasks",icon:"icon/task_icon.svg"},{id:4,name:"Members",icon:"icon/members_icon.svg"},{id:5,name:"Settings",icon:"icon/settings_icon.svg"}];function e3(){return z.jsx(YF,{children:z.jsx(XF,{children:ZF.map(t=>z.jsxs(JF,{children:[z.jsx("img",{src:t.icon,alt:t.name}),z.jsx("a",{href:"#",children:z.jsx("span",{children:t.name})})]},t.id))})})}const t3=ee.div`
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
`,n3=ee.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`,r3=ee.h3`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
`,i3=ee.p`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`,o3=ee.input`
  width: 10rem;
  height: 3rem;
  border-radius: 16px;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`,s3=()=>z.jsxs(t3,{children:[z.jsx(n3,{}),z.jsx(r3,{children:"Thoughts Time"}),z.jsx(i3,{children:"We don’t have any notice for you, till then you can share your thoughts with your peers."}),z.jsx(o3,{type:"text",placeholder:"Write a message"})]}),a3=ee.div`
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
`,l3=ee.div`
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
`,u3=ee.div`
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
`,c3=ee.div`
  display: none;
`,d3=[{id:1,name:"Mobile App",description:"Description for Mobile App",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:2,name:"Website Redesign",description:"Description for Website Redesign",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:3,name:"Design System",description:"Description for Design System",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:4,name:"Wireframes",description:"Description for Wireframes",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"}],h3=()=>z.jsxs(l3,{children:[z.jsxs(a3,{children:[z.jsx("h2",{children:"My projects"}),z.jsx("button",{className:"add-project",children:z.jsx("img",{src:"icon/plus_icon.svg",alt:"Add Project"})})]}),z.jsx("ul",{children:d3.map(t=>z.jsxs("li",{children:[z.jsxs(u3,{children:[z.jsxs("a",{href:"#","aria-label":"Go to project",className:"project-item",children:[z.jsx("div",{className:"project-status","aria-hidden":"true"}),z.jsx("h3",{children:t.name})]}),z.jsx("button",{children:z.jsx("img",{src:"icon/dots_icon.svg",alt:"Submenu icon"})})]}),z.jsxs(c3,{children:[z.jsx("p",{children:t.description}),z.jsx("p",{children:t.createdAt}),z.jsx("p",{children:t.updatedAt}),z.jsx("p",{children:t.status})]})]},t.id))})]}),lv=oe.forwardRef(({isSidebarOpen:t},e)=>z.jsx(OC,{ref:e,$isSidebarOpen:t,children:z.jsxs(LC,{children:[z.jsx(e3,{}),z.jsx(h3,{}),z.jsx(s3,{})]})}));lv.displayName="Sidebar";lv.propTypes={isSidebarOpen:di.bool.isRequired,onToggleSidebar:di.func,sidebarRef:di.any};const f3=()=>{const[t,e,n]=FF(),r=oe.useRef(null),o=oe.useRef(null);BF([r,o])&&t&&n&&e();const{isLoggedIn:u}=oe.useContext(Ra);return z.jsxs(AC,{theme:Zn,children:[z.jsx(DC,{$isSidebarOpen:t}),z.jsx(Vg,{ref:r,onToggleSidebar:e,isSidebarOpen:t}),u?z.jsxs(z.Fragment,{children:[z.jsx(lv,{isSidebarOpen:t,ref:o}),z.jsx(gb,{isSidebarOpen:t,sidebarRef:o})]}):z.jsx(QF,{})]})},vb=({children:t})=>{const[e,n]=oe.useState(!1),[r,o]=oe.useState(!1),[a,u]=oe.useState("login"),[d,f]=oe.useState(null);return z.jsx(Ra.Provider,{value:{isLoggedIn:e,setIsLoggedIn:n,showLoginForm:r,setShowLoginForm:o,mode:a,setMode:u,loggedUser:d,setLoggedUser:f},children:t})};vb.propTypes={children:di.node.isRequired};P1.createRoot(document.getElementById("root")).render(z.jsx(vb,{children:z.jsx(f3,{})}));
