(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function Gd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Zf={exports:{}},Cl={},ep={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function aC(){if(i_)return Be;i_=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function w(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function x(B,X,pe){this.props=B,this.context=X,this.refs=D,this.updater=pe||I}x.prototype.isReactComponent={},x.prototype.setState=function(B,X){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,X,"setState")},x.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function O(){}O.prototype=x.prototype;function V(B,X,pe){this.props=B,this.context=X,this.refs=D,this.updater=pe||I}var j=V.prototype=new O;j.constructor=V,C(j,x.prototype),j.isPureReactComponent=!0;var $=Array.isArray,W=Object.prototype.hasOwnProperty,Q={current:null},P={key:!0,ref:!0,__self:!0,__source:!0};function A(B,X,pe){var Ae,_e={},xe=null,Oe=null;if(X!=null)for(Ae in X.ref!==void 0&&(Oe=X.ref),X.key!==void 0&&(xe=""+X.key),X)W.call(X,Ae)&&!P.hasOwnProperty(Ae)&&(_e[Ae]=X[Ae]);var Ne=arguments.length-2;if(Ne===1)_e.children=pe;else if(1<Ne){for(var Fe=Array(Ne),et=0;et<Ne;et++)Fe[et]=arguments[et+2];_e.children=Fe}if(B&&B.defaultProps)for(Ae in Ne=B.defaultProps,Ne)_e[Ae]===void 0&&(_e[Ae]=Ne[Ae]);return{$$typeof:t,type:B,key:xe,ref:Oe,props:_e,_owner:Q.current}}function R(B,X){return{$$typeof:t,type:B.type,key:X,ref:B.ref,props:B.props,_owner:B._owner}}function N(B){return typeof B=="object"&&B!==null&&B.$$typeof===t}function L(B){var X={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(pe){return X[pe]})}var U=/\/+/g;function b(B,X){return typeof B=="object"&&B!==null&&B.key!=null?L(""+B.key):X.toString(36)}function be(B,X,pe,Ae,_e){var xe=typeof B;(xe==="undefined"||xe==="boolean")&&(B=null);var Oe=!1;if(B===null)Oe=!0;else switch(xe){case"string":case"number":Oe=!0;break;case"object":switch(B.$$typeof){case t:case e:Oe=!0}}if(Oe)return Oe=B,_e=_e(Oe),B=Ae===""?"."+b(Oe,0):Ae,$(_e)?(pe="",B!=null&&(pe=B.replace(U,"$&/")+"/"),be(_e,X,pe,"",function(et){return et})):_e!=null&&(N(_e)&&(_e=R(_e,pe+(!_e.key||Oe&&Oe.key===_e.key?"":(""+_e.key).replace(U,"$&/")+"/")+B)),X.push(_e)),1;if(Oe=0,Ae=Ae===""?".":Ae+":",$(B))for(var Ne=0;Ne<B.length;Ne++){xe=B[Ne];var Fe=Ae+b(xe,Ne);Oe+=be(xe,X,pe,Fe,_e)}else if(Fe=w(B),typeof Fe=="function")for(B=Fe.call(B),Ne=0;!(xe=B.next()).done;)xe=xe.value,Fe=Ae+b(xe,Ne++),Oe+=be(xe,X,pe,Fe,_e);else if(xe==="object")throw X=String(B),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return Oe}function Qe(B,X,pe){if(B==null)return B;var Ae=[],_e=0;return be(B,Ae,"","",function(xe){return X.call(pe,xe,_e++)}),Ae}function Ye(B){if(B._status===-1){var X=B._result;X=X(),X.then(function(pe){(B._status===0||B._status===-1)&&(B._status=1,B._result=pe)},function(pe){(B._status===0||B._status===-1)&&(B._status=2,B._result=pe)}),B._status===-1&&(B._status=0,B._result=X)}if(B._status===1)return B._result.default;throw B._result}var Me={current:null},ie={transition:null},ce={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ie,ReactCurrentOwner:Q};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:Qe,forEach:function(B,X,pe){Qe(B,function(){X.apply(this,arguments)},pe)},count:function(B){var X=0;return Qe(B,function(){X++}),X},toArray:function(B){return Qe(B,function(X){return X})||[]},only:function(B){if(!N(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Be.Component=x,Be.Fragment=r,Be.Profiler=s,Be.PureComponent=V,Be.StrictMode=n,Be.Suspense=f,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Be.act=ae,Be.cloneElement=function(B,X,pe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Ae=C({},B.props),_e=B.key,xe=B.ref,Oe=B._owner;if(X!=null){if(X.ref!==void 0&&(xe=X.ref,Oe=Q.current),X.key!==void 0&&(_e=""+X.key),B.type&&B.type.defaultProps)var Ne=B.type.defaultProps;for(Fe in X)W.call(X,Fe)&&!P.hasOwnProperty(Fe)&&(Ae[Fe]=X[Fe]===void 0&&Ne!==void 0?Ne[Fe]:X[Fe])}var Fe=arguments.length-2;if(Fe===1)Ae.children=pe;else if(1<Fe){Ne=Array(Fe);for(var et=0;et<Fe;et++)Ne[et]=arguments[et+2];Ae.children=Ne}return{$$typeof:t,type:B.type,key:_e,ref:xe,props:Ae,_owner:Oe}},Be.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:a,_context:B},B.Consumer=B},Be.createElement=A,Be.createFactory=function(B){var X=A.bind(null,B);return X.type=B,X},Be.createRef=function(){return{current:null}},Be.forwardRef=function(B){return{$$typeof:d,render:B}},Be.isValidElement=N,Be.lazy=function(B){return{$$typeof:y,_payload:{_status:-1,_result:B},_init:Ye}},Be.memo=function(B,X){return{$$typeof:g,type:B,compare:X===void 0?null:X}},Be.startTransition=function(B){var X=ie.transition;ie.transition={};try{B()}finally{ie.transition=X}},Be.unstable_act=ae,Be.useCallback=function(B,X){return Me.current.useCallback(B,X)},Be.useContext=function(B){return Me.current.useContext(B)},Be.useDebugValue=function(){},Be.useDeferredValue=function(B){return Me.current.useDeferredValue(B)},Be.useEffect=function(B,X){return Me.current.useEffect(B,X)},Be.useId=function(){return Me.current.useId()},Be.useImperativeHandle=function(B,X,pe){return Me.current.useImperativeHandle(B,X,pe)},Be.useInsertionEffect=function(B,X){return Me.current.useInsertionEffect(B,X)},Be.useLayoutEffect=function(B,X){return Me.current.useLayoutEffect(B,X)},Be.useMemo=function(B,X){return Me.current.useMemo(B,X)},Be.useReducer=function(B,X,pe){return Me.current.useReducer(B,X,pe)},Be.useRef=function(B){return Me.current.useRef(B)},Be.useState=function(B){return Me.current.useState(B)},Be.useSyncExternalStore=function(B,X,pe){return Me.current.useSyncExternalStore(B,X,pe)},Be.useTransition=function(){return Me.current.useTransition()},Be.version="18.3.1",Be}var o_;function Ag(){return o_||(o_=1,ep.exports=aC()),ep.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s_;function lC(){if(s_)return Cl;s_=1;var t=Ag(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,g){var y,_={},w=null,I=null;g!==void 0&&(w=""+g),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(I=f.ref);for(y in f)n.call(f,y)&&!a.hasOwnProperty(y)&&(_[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)_[y]===void 0&&(_[y]=f[y]);return{$$typeof:e,type:d,key:w,ref:I,props:_,_owner:s.current}}return Cl.Fragment=r,Cl.jsx=u,Cl.jsxs=u,Cl}var a_;function uC(){return a_||(a_=1,Zf.exports=lC()),Zf.exports}var z=uC(),Vc={},tp={exports:{}},vr={},rp={exports:{}},np={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l_;function cC(){return l_||(l_=1,function(t){function e(ie,ce){var ae=ie.length;ie.push(ce);e:for(;0<ae;){var B=ae-1>>>1,X=ie[B];if(0<s(X,ce))ie[B]=ce,ie[ae]=X,ae=B;else break e}}function r(ie){return ie.length===0?null:ie[0]}function n(ie){if(ie.length===0)return null;var ce=ie[0],ae=ie.pop();if(ae!==ce){ie[0]=ae;e:for(var B=0,X=ie.length,pe=X>>>1;B<pe;){var Ae=2*(B+1)-1,_e=ie[Ae],xe=Ae+1,Oe=ie[xe];if(0>s(_e,ae))xe<X&&0>s(Oe,_e)?(ie[B]=Oe,ie[xe]=ae,B=xe):(ie[B]=_e,ie[Ae]=ae,B=Ae);else if(xe<X&&0>s(Oe,ae))ie[B]=Oe,ie[xe]=ae,B=xe;else break e}}return ce}function s(ie,ce){var ae=ie.sortIndex-ce.sortIndex;return ae!==0?ae:ie.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();t.unstable_now=function(){return u.now()-d}}var f=[],g=[],y=1,_=null,w=3,I=!1,C=!1,D=!1,x=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function j(ie){for(var ce=r(g);ce!==null;){if(ce.callback===null)n(g);else if(ce.startTime<=ie)n(g),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=r(g)}}function $(ie){if(D=!1,j(ie),!C)if(r(f)!==null)C=!0,Ye(W);else{var ce=r(g);ce!==null&&Me($,ce.startTime-ie)}}function W(ie,ce){C=!1,D&&(D=!1,O(A),A=-1),I=!0;var ae=w;try{for(j(ce),_=r(f);_!==null&&(!(_.expirationTime>ce)||ie&&!L());){var B=_.callback;if(typeof B=="function"){_.callback=null,w=_.priorityLevel;var X=B(_.expirationTime<=ce);ce=t.unstable_now(),typeof X=="function"?_.callback=X:_===r(f)&&n(f),j(ce)}else n(f);_=r(f)}if(_!==null)var pe=!0;else{var Ae=r(g);Ae!==null&&Me($,Ae.startTime-ce),pe=!1}return pe}finally{_=null,w=ae,I=!1}}var Q=!1,P=null,A=-1,R=5,N=-1;function L(){return!(t.unstable_now()-N<R)}function U(){if(P!==null){var ie=t.unstable_now();N=ie;var ce=!0;try{ce=P(!0,ie)}finally{ce?b():(Q=!1,P=null)}}else Q=!1}var b;if(typeof V=="function")b=function(){V(U)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Qe=be.port2;be.port1.onmessage=U,b=function(){Qe.postMessage(null)}}else b=function(){x(U,0)};function Ye(ie){P=ie,Q||(Q=!0,b())}function Me(ie,ce){A=x(function(){ie(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ie){ie.callback=null},t.unstable_continueExecution=function(){C||I||(C=!0,Ye(W))},t.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<ie?Math.floor(1e3/ie):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return r(f)},t.unstable_next=function(ie){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var ae=w;w=ce;try{return ie()}finally{w=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ie,ce){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=w;w=ie;try{return ce()}finally{w=ae}},t.unstable_scheduleCallback=function(ie,ce,ae){var B=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?B+ae:B):ae=B,ie){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=ae+X,ie={id:y++,callback:ce,priorityLevel:ie,startTime:ae,expirationTime:X,sortIndex:-1},ae>B?(ie.sortIndex=ae,e(g,ie),r(f)===null&&ie===r(g)&&(D?(O(A),A=-1):D=!0,Me($,ae-B))):(ie.sortIndex=X,e(f,ie),C||I||(C=!0,Ye(W))),ie},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(ie){var ce=w;return function(){var ae=w;w=ce;try{return ie.apply(this,arguments)}finally{w=ae}}}}(np)),np}var u_;function dC(){return u_||(u_=1,rp.exports=cC()),rp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c_;function hC(){if(c_)return vr;c_=1;var t=Ag(),e=dC();function r(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function w(i){return f.call(_,i)?!0:f.call(y,i)?!1:g.test(i)?_[i]=!0:(y[i]=!0,!1)}function I(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function C(i,o,l,h){if(o===null||typeof o>"u"||I(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function D(i,o,l,h,p,v,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=v,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new D(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];x[o]=new D(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new D(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new D(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new D(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new D(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new D(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new D(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new D(i,5,!1,i.toLowerCase(),null,!1,!1)});var O=/[\-:]([a-z])/g;function V(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(O,V);x[o]=new D(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(O,V);x[o]=new D(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(O,V);x[o]=new D(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new D(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new D(i,1,!1,i.toLowerCase(),null,!0,!0)});function j(i,o,l,h){var p=x.hasOwnProperty(o)?x[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(C(o,l,p,h)&&(l=null),h||p===null?w(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var $=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),Q=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),L=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Qe=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,B;function X(i){if(B===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);B=o&&o[1]||""}return`
`+B+i}var pe=!1;function Ae(i,o){if(!i||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(K){var h=K}Reflect.construct(i,[],o)}else{try{o.call()}catch(K){h=K}i.call(o.prototype)}else{try{throw Error()}catch(K){h=K}i()}}catch(K){if(K&&h&&typeof K.stack=="string"){for(var p=K.stack.split(`
`),v=h.stack.split(`
`),T=p.length-1,k=v.length-1;1<=T&&0<=k&&p[T]!==v[k];)k--;for(;1<=T&&0<=k;T--,k--)if(p[T]!==v[k]){if(T!==1||k!==1)do if(T--,k--,0>k||p[T]!==v[k]){var M=`
`+p[T].replace(" at new "," at ");return i.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",i.displayName)),M}while(1<=T&&0<=k);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?X(i):""}function _e(i){switch(i.tag){case 5:return X(i.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return i=Ae(i.type,!1),i;case 11:return i=Ae(i.type.render,!1),i;case 1:return i=Ae(i.type,!0),i;default:return""}}function xe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case P:return"Fragment";case Q:return"Portal";case R:return"Profiler";case A:return"StrictMode";case b:return"Suspense";case be:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case L:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case U:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Qe:return o=i.displayName||null,o!==null?o:xe(i.type)||"Memo";case Ye:o=i._payload,i=i._init;try{return xe(i(o))}catch{}}return null}function Oe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(o);case 8:return o===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ne(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Fe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function et(i){var o=Fe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(T){h=""+T,v.call(this,T)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function kt(i){i._valueTracker||(i._valueTracker=et(i))}function Dt(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Fe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Nr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Or(i,o){var l=o.checked;return ae({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Fn(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Ne(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Bn(i,o){o=o.checked,o!=null&&j(i,"checked",o,!1)}function Un(i,o){Bn(i,o);var l=Ne(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Lr(i,o.type,l):o.hasOwnProperty("defaultValue")&&Lr(i,o.type,Ne(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function is(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Lr(i,o,l){(o!=="number"||Nr(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var wr=Array.isArray;function jn(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ne(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Oa(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(r(91));return ae({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function os(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(r(92));if(wr(l)){if(1<l.length)throw Error(r(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Ne(l)}}function ss(i,o){var l=Ne(o.value),h=Ne(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function La(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function Tt(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function St(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?Tt(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var $n,Ma=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for($n=$n||document.createElement("div"),$n.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=$n.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function pi(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fo=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(i){fo.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ho[o]=ho[i]})});function Va(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ho.hasOwnProperty(i)&&ho[i]?(""+o).trim():o+"px"}function Fa(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Va(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Ba=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(i,o){if(o){if(Ba[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(r(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(r(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(r(61))}if(o.style!=null&&typeof o.style!="object")throw Error(r(62))}}function ja(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=null;function as(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ls=null,Mr=null,_n=null;function us(i){if(i=dl(i)){if(typeof ls!="function")throw Error(r(280));var o=i.stateNode;o&&(o=Ju(o),ls(i.stateNode,i.type,o))}}function wn(i){Mr?_n?_n.push(i):_n=[i]:Mr=i}function $a(){if(Mr){var i=Mr,o=_n;if(_n=Mr=null,us(i),o)for(i=0;i<o.length;i++)us(o[i])}}function go(i,o){return i(o)}function za(){}var zn=!1;function Wa(i,o,l){if(zn)return i(o,l);zn=!0;try{return go(i,o,l)}finally{zn=!1,(Mr!==null||_n!==null)&&(za(),$a())}}function mt(i,o){var l=i.stateNode;if(l===null)return null;var h=Ju(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,o,typeof l));return l}var cs=!1;if(d)try{var Jr={};Object.defineProperty(Jr,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Jr,Jr),window.removeEventListener("test",Jr,Jr)}catch{cs=!1}function mo(i,o,l,h,p,v,T,k,M){var K=Array.prototype.slice.call(arguments,3);try{o.apply(l,K)}catch(te){this.onError(te)}}var vo=!1,ds=null,Zr=!1,Ga=null,Ch={onError:function(i){vo=!0,ds=i}};function hs(i,o,l,h,p,v,T,k,M){vo=!1,ds=null,mo.apply(Ch,arguments)}function Tu(i,o,l,h,p,v,T,k,M){if(hs.apply(this,arguments),vo){if(vo){var K=ds;vo=!1,ds=null}else throw Error(r(198));Zr||(Zr=!0,Ga=K)}}function en(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function yo(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function tn(i){if(en(i)!==i)throw Error(r(188))}function Su(i){var o=i.alternate;if(!o){if(o=en(i),o===null)throw Error(r(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return tn(p),i;if(v===h)return tn(p),o;v=v.sibling}throw Error(r(188))}if(l.return!==h.return)l=p,h=v;else{for(var T=!1,k=p.child;k;){if(k===l){T=!0,l=p,h=v;break}if(k===h){T=!0,h=p,l=v;break}k=k.sibling}if(!T){for(k=v.child;k;){if(k===l){T=!0,l=v,h=p;break}if(k===h){T=!0,h=v,l=p;break}k=k.sibling}if(!T)throw Error(r(189))}}if(l.alternate!==h)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:o}function Ha(i){return i=Su(i),i!==null?fs(i):null}function fs(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=fs(i);if(o!==null)return o;i=i.sibling}return null}var ps=e.unstable_scheduleCallback,qa=e.unstable_cancelCallback,bu=e.unstable_shouldYield,Ah=e.unstable_requestPaint,it=e.unstable_now,Cu=e.unstable_getCurrentPriorityLevel,_o=e.unstable_ImmediatePriority,gi=e.unstable_UserBlockingPriority,Vr=e.unstable_NormalPriority,Ka=e.unstable_LowPriority,Au=e.unstable_IdlePriority,wo=null,Er=null;function Pu(i){if(Er&&typeof Er.onCommitFiberRoot=="function")try{Er.onCommitFiberRoot(wo,i,void 0,(i.current.flags&128)===128)}catch{}}var or=Math.clz32?Math.clz32:xu,Qa=Math.log,Ru=Math.LN2;function xu(i){return i>>>=0,i===0?32:31-(Qa(i)/Ru|0)|0}var gs=64,ms=4194304;function mi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Eo(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,v=i.pingedLanes,T=l&268435455;if(T!==0){var k=T&~p;k!==0?h=mi(k):(v&=T,v!==0&&(h=mi(v)))}else T=l&~p,T!==0?h=mi(T):v!==0&&(h=mi(v));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,v=o&-o,p>=v||p===16&&(v&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-or(o),p=1<<l,h|=i[l],o&=~p;return h}function Ph(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wn(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,v=i.pendingLanes;0<v;){var T=31-or(v),k=1<<T,M=p[T];M===-1?((k&l)===0||(k&h)!==0)&&(p[T]=Ph(k,o)):M<=o&&(i.expiredLanes|=k),v&=~k}}function Ir(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Io(){var i=gs;return gs<<=1,(gs&4194240)===0&&(gs=64),i}function vi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function yi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-or(o),i[o]=l}function nt(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-or(l),v=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~v}}function _i(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-or(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var ze=0;function wi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var ku,vs,Du,Nu,Ou,Ya=!1,En=[],$t=null,rn=null,nn=null,Ei=new Map,Fr=new Map,In=[],Rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lu(i,o){switch(i){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":rn=null;break;case"mouseover":case"mouseout":nn=null;break;case"pointerover":case"pointerout":Ei.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fr.delete(o.pointerId)}}function cr(i,o,l,h,p,v){return i===null||i.nativeEvent!==v?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},o!==null&&(o=dl(o),o!==null&&vs(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function xh(i,o,l,h,p){switch(o){case"focusin":return $t=cr($t,i,o,l,h,p),!0;case"dragenter":return rn=cr(rn,i,o,l,h,p),!0;case"mouseover":return nn=cr(nn,i,o,l,h,p),!0;case"pointerover":var v=p.pointerId;return Ei.set(v,cr(Ei.get(v)||null,i,o,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,Fr.set(v,cr(Fr.get(v)||null,i,o,l,h,p)),!0}return!1}function Mu(i){var o=Ao(i.target);if(o!==null){var l=en(o);if(l!==null){if(o=l.tag,o===13){if(o=yo(l),o!==null){i.blockedOn=o,Ou(i.priority,function(){Du(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Gn(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=ys(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);po=h,l.target.dispatchEvent(h),po=null}else return o=dl(l),o!==null&&vs(o),i.blockedOn=l,!1;o.shift()}return!0}function To(i,o,l){Gn(i)&&l.delete(o)}function Vu(){Ya=!1,$t!==null&&Gn($t)&&($t=null),rn!==null&&Gn(rn)&&(rn=null),nn!==null&&Gn(nn)&&(nn=null),Ei.forEach(To),Fr.forEach(To)}function on(i,o){i.blockedOn===o&&(i.blockedOn=null,Ya||(Ya=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Vu)))}function sn(i){function o(p){return on(p,i)}if(0<En.length){on(En[0],i);for(var l=1;l<En.length;l++){var h=En[l];h.blockedOn===i&&(h.blockedOn=null)}}for($t!==null&&on($t,i),rn!==null&&on(rn,i),nn!==null&&on(nn,i),Ei.forEach(o),Fr.forEach(o),l=0;l<In.length;l++)h=In[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<In.length&&(l=In[0],l.blockedOn===null);)Mu(l),l.blockedOn===null&&In.shift()}var Hn=$.ReactCurrentBatchConfig,Ii=!0;function ut(i,o,l,h){var p=ze,v=Hn.transition;Hn.transition=null;try{ze=1,Xa(i,o,l,h)}finally{ze=p,Hn.transition=v}}function kh(i,o,l,h){var p=ze,v=Hn.transition;Hn.transition=null;try{ze=4,Xa(i,o,l,h)}finally{ze=p,Hn.transition=v}}function Xa(i,o,l,h){if(Ii){var p=ys(i,o,l,h);if(p===null)$h(i,o,h,So,l),Lu(i,h);else if(xh(p,i,o,l,h))h.stopPropagation();else if(Lu(i,h),o&4&&-1<Rh.indexOf(i)){for(;p!==null;){var v=dl(p);if(v!==null&&ku(v),v=ys(i,o,l,h),v===null&&$h(i,o,h,So,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else $h(i,o,h,null,l)}}var So=null;function ys(i,o,l,h){if(So=null,i=as(h),i=Ao(i),i!==null)if(o=en(i),o===null)i=null;else if(l=o.tag,l===13){if(i=yo(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return So=i,null}function Ja(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cu()){case _o:return 1;case gi:return 4;case Vr:case Ka:return 16;case Au:return 536870912;default:return 16}default:return 16}}var Tr=null,_s=null,dr=null;function Za(){if(dr)return dr;var i,o=_s,l=o.length,h,p="value"in Tr?Tr.value:Tr.textContent,v=p.length;for(i=0;i<l&&o[i]===p[i];i++);var T=l-i;for(h=1;h<=T&&o[l-h]===p[v-h];h++);return dr=p.slice(i,1<h?1-h:void 0)}function ws(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Tn(){return!0}function el(){return!1}function zt(i){function o(l,h,p,v,T){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var k in i)i.hasOwnProperty(k)&&(l=i[k],this[k]=l?l(v):v[k]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Tn:el,this.isPropagationStopped=el,this}return ae(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),o}var an={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Es=zt(an),Sn=ae({},an,{view:0,detail:0}),Dh=zt(Sn),Is,qn,Ti,bo=ae({},Sn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bn,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ti&&(Ti&&i.type==="mousemove"?(Is=i.screenX-Ti.screenX,qn=i.screenY-Ti.screenY):qn=Is=0,Ti=i),Is)},movementY:function(i){return"movementY"in i?i.movementY:qn}}),Ts=zt(bo),tl=ae({},bo,{dataTransfer:0}),Fu=zt(tl),Ss=ae({},Sn,{relatedTarget:0}),bs=zt(Ss),Bu=ae({},an,{animationName:0,elapsedTime:0,pseudoElement:0}),Kn=zt(Bu),Uu=ae({},an,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),ju=zt(Uu),$u=ae({},an,{data:0}),rl=zt($u),Cs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wu(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=zu[i])?!!o[i]:!1}function bn(){return Wu}var c=ae({},Sn,{key:function(i){if(i.key){var o=Cs[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=ws(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?sr[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bn,charCode:function(i){return i.type==="keypress"?ws(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ws(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=zt(c),E=ae({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=zt(E),G=ae({},Sn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bn}),Y=zt(G),ue=ae({},an,{propertyName:0,elapsedTime:0,pseudoElement:0}),tt=zt(ue),bt=ae({},bo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),We=zt(bt),Nt=[9,13,27,32],_t=d&&"CompositionEvent"in window,Br=null;d&&"documentMode"in document&&(Br=document.documentMode);var Sr=d&&"TextEvent"in window&&!Br,Co=d&&(!_t||Br&&8<Br&&11>=Br),As=" ",Jm=!1;function Zm(i,o){switch(i){case"keyup":return Nt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ev(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ps=!1;function ib(i,o){switch(i){case"compositionend":return ev(o);case"keypress":return o.which!==32?null:(Jm=!0,As);case"textInput":return i=o.data,i===As&&Jm?null:i;default:return null}}function ob(i,o){if(Ps)return i==="compositionend"||!_t&&Zm(i,o)?(i=Za(),dr=_s=Tr=null,Ps=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Co&&o.locale!=="ko"?null:o.data;default:return null}}var sb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tv(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!sb[i.type]:o==="textarea"}function rv(i,o,l,h){wn(h),o=Qu(o,"onChange"),0<o.length&&(l=new Es("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var nl=null,il=null;function ab(i){wv(i,0)}function Gu(i){var o=Ns(i);if(Dt(o))return i}function lb(i,o){if(i==="change")return o}var nv=!1;if(d){var Nh;if(d){var Oh="oninput"in document;if(!Oh){var iv=document.createElement("div");iv.setAttribute("oninput","return;"),Oh=typeof iv.oninput=="function"}Nh=Oh}else Nh=!1;nv=Nh&&(!document.documentMode||9<document.documentMode)}function ov(){nl&&(nl.detachEvent("onpropertychange",sv),il=nl=null)}function sv(i){if(i.propertyName==="value"&&Gu(il)){var o=[];rv(o,il,i,as(i)),Wa(ab,o)}}function ub(i,o,l){i==="focusin"?(ov(),nl=o,il=l,nl.attachEvent("onpropertychange",sv)):i==="focusout"&&ov()}function cb(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Gu(il)}function db(i,o){if(i==="click")return Gu(o)}function hb(i,o){if(i==="input"||i==="change")return Gu(o)}function fb(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var ln=typeof Object.is=="function"?Object.is:fb;function ol(i,o){if(ln(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!ln(i[p],o[p]))return!1}return!0}function av(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function lv(i,o){var l=av(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=av(l)}}function uv(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?uv(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function cv(){for(var i=window,o=Nr();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Nr(i.document)}return o}function Lh(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function pb(i){var o=cv(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&uv(l.ownerDocument.documentElement,l)){if(h!==null&&Lh(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!i.extend&&v>h&&(p=h,h=v,v=p),p=lv(l,v);var T=lv(l,h);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),v>h?(i.addRange(o),i.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var gb=d&&"documentMode"in document&&11>=document.documentMode,Rs=null,Mh=null,sl=null,Vh=!1;function dv(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vh||Rs==null||Rs!==Nr(h)||(h=Rs,"selectionStart"in h&&Lh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),sl&&ol(sl,h)||(sl=h,h=Qu(Mh,"onSelect"),0<h.length&&(o=new Es("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=Rs)))}function Hu(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var xs={animationend:Hu("Animation","AnimationEnd"),animationiteration:Hu("Animation","AnimationIteration"),animationstart:Hu("Animation","AnimationStart"),transitionend:Hu("Transition","TransitionEnd")},Fh={},hv={};d&&(hv=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function qu(i){if(Fh[i])return Fh[i];if(!xs[i])return i;var o=xs[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in hv)return Fh[i]=o[l];return i}var fv=qu("animationend"),pv=qu("animationiteration"),gv=qu("animationstart"),mv=qu("transitionend"),vv=new Map,yv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Si(i,o){vv.set(i,o),a(o,[i])}for(var Bh=0;Bh<yv.length;Bh++){var Uh=yv[Bh],mb=Uh.toLowerCase(),vb=Uh[0].toUpperCase()+Uh.slice(1);Si(mb,"on"+vb)}Si(fv,"onAnimationEnd"),Si(pv,"onAnimationIteration"),Si(gv,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(mv,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yb=new Set("cancel close invalid load scroll toggle".split(" ").concat(al));function _v(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,Tu(h,o,void 0,i),i.currentTarget=null}function wv(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var v=void 0;if(o)for(var T=h.length-1;0<=T;T--){var k=h[T],M=k.instance,K=k.currentTarget;if(k=k.listener,M!==v&&p.isPropagationStopped())break e;_v(p,k,K),v=M}else for(T=0;T<h.length;T++){if(k=h[T],M=k.instance,K=k.currentTarget,k=k.listener,M!==v&&p.isPropagationStopped())break e;_v(p,k,K),v=M}}}if(Zr)throw i=Ga,Zr=!1,Ga=null,i}function st(i,o){var l=o[Kh];l===void 0&&(l=o[Kh]=new Set);var h=i+"__bubble";l.has(h)||(Ev(o,i,2,!1),l.add(h))}function jh(i,o,l){var h=0;o&&(h|=4),Ev(l,i,h,o)}var Ku="_reactListening"+Math.random().toString(36).slice(2);function ll(i){if(!i[Ku]){i[Ku]=!0,n.forEach(function(l){l!=="selectionchange"&&(yb.has(l)||jh(l,!1,i),jh(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[Ku]||(o[Ku]=!0,jh("selectionchange",!1,o))}}function Ev(i,o,l,h){switch(Ja(o)){case 1:var p=ut;break;case 4:p=kh;break;default:p=Xa}l=p.bind(null,o,l,i),p=void 0,!cs||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function $h(i,o,l,h,p){var v=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var k=h.stateNode.containerInfo;if(k===p||k.nodeType===8&&k.parentNode===p)break;if(T===4)for(T=h.return;T!==null;){var M=T.tag;if((M===3||M===4)&&(M=T.stateNode.containerInfo,M===p||M.nodeType===8&&M.parentNode===p))return;T=T.return}for(;k!==null;){if(T=Ao(k),T===null)return;if(M=T.tag,M===5||M===6){h=v=T;continue e}k=k.parentNode}}h=h.return}Wa(function(){var K=v,te=as(l),re=[];e:{var Z=vv.get(i);if(Z!==void 0){var de=Es,ge=i;switch(i){case"keypress":if(ws(l)===0)break e;case"keydown":case"keyup":de=m;break;case"focusin":ge="focus",de=bs;break;case"focusout":ge="blur",de=bs;break;case"beforeblur":case"afterblur":de=bs;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Fu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Y;break;case fv:case pv:case gv:de=Kn;break;case mv:de=tt;break;case"scroll":de=Dh;break;case"wheel":de=We;break;case"copy":case"cut":case"paste":de=ju;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=S}var me=(o&4)!==0,vt=!me&&i==="scroll",H=me?Z!==null?Z+"Capture":null:Z;me=[];for(var F=K,q;F!==null;){q=F;var se=q.stateNode;if(q.tag===5&&se!==null&&(q=se,H!==null&&(se=mt(F,H),se!=null&&me.push(ul(F,se,q)))),vt)break;F=F.return}0<me.length&&(Z=new de(Z,ge,null,l,te),re.push({event:Z,listeners:me}))}}if((o&7)===0){e:{if(Z=i==="mouseover"||i==="pointerover",de=i==="mouseout"||i==="pointerout",Z&&l!==po&&(ge=l.relatedTarget||l.fromElement)&&(Ao(ge)||ge[Qn]))break e;if((de||Z)&&(Z=te.window===te?te:(Z=te.ownerDocument)?Z.defaultView||Z.parentWindow:window,de?(ge=l.relatedTarget||l.toElement,de=K,ge=ge?Ao(ge):null,ge!==null&&(vt=en(ge),ge!==vt||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(de=null,ge=K),de!==ge)){if(me=Ts,se="onMouseLeave",H="onMouseEnter",F="mouse",(i==="pointerout"||i==="pointerover")&&(me=S,se="onPointerLeave",H="onPointerEnter",F="pointer"),vt=de==null?Z:Ns(de),q=ge==null?Z:Ns(ge),Z=new me(se,F+"leave",de,l,te),Z.target=vt,Z.relatedTarget=q,se=null,Ao(te)===K&&(me=new me(H,F+"enter",ge,l,te),me.target=q,me.relatedTarget=vt,se=me),vt=se,de&&ge)t:{for(me=de,H=ge,F=0,q=me;q;q=ks(q))F++;for(q=0,se=H;se;se=ks(se))q++;for(;0<F-q;)me=ks(me),F--;for(;0<q-F;)H=ks(H),q--;for(;F--;){if(me===H||H!==null&&me===H.alternate)break t;me=ks(me),H=ks(H)}me=null}else me=null;de!==null&&Iv(re,Z,de,me,!1),ge!==null&&vt!==null&&Iv(re,vt,ge,me,!0)}}e:{if(Z=K?Ns(K):window,de=Z.nodeName&&Z.nodeName.toLowerCase(),de==="select"||de==="input"&&Z.type==="file")var ve=lb;else if(tv(Z))if(nv)ve=hb;else{ve=cb;var we=ub}else(de=Z.nodeName)&&de.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(ve=db);if(ve&&(ve=ve(i,K))){rv(re,ve,l,te);break e}we&&we(i,Z,K),i==="focusout"&&(we=Z._wrapperState)&&we.controlled&&Z.type==="number"&&Lr(Z,"number",Z.value)}switch(we=K?Ns(K):window,i){case"focusin":(tv(we)||we.contentEditable==="true")&&(Rs=we,Mh=K,sl=null);break;case"focusout":sl=Mh=Rs=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,dv(re,l,te);break;case"selectionchange":if(gb)break;case"keydown":case"keyup":dv(re,l,te)}var Ee;if(_t)e:{switch(i){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Ps?Zm(i,l)&&(Re="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(Co&&l.locale!=="ko"&&(Ps||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Ps&&(Ee=Za()):(Tr=te,_s="value"in Tr?Tr.value:Tr.textContent,Ps=!0)),we=Qu(K,Re),0<we.length&&(Re=new rl(Re,i,null,l,te),re.push({event:Re,listeners:we}),Ee?Re.data=Ee:(Ee=ev(l),Ee!==null&&(Re.data=Ee)))),(Ee=Sr?ib(i,l):ob(i,l))&&(K=Qu(K,"onBeforeInput"),0<K.length&&(te=new rl("onBeforeInput","beforeinput",null,l,te),re.push({event:te,listeners:K}),te.data=Ee))}wv(re,o)})}function ul(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Qu(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=mt(i,l),v!=null&&h.unshift(ul(i,v,p)),v=mt(i,o),v!=null&&h.push(ul(i,v,p))),i=i.return}return h}function ks(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function Iv(i,o,l,h,p){for(var v=o._reactName,T=[];l!==null&&l!==h;){var k=l,M=k.alternate,K=k.stateNode;if(M!==null&&M===h)break;k.tag===5&&K!==null&&(k=K,p?(M=mt(l,v),M!=null&&T.unshift(ul(l,M,k))):p||(M=mt(l,v),M!=null&&T.push(ul(l,M,k)))),l=l.return}T.length!==0&&i.push({event:o,listeners:T})}var _b=/\r\n?/g,wb=/\u0000|\uFFFD/g;function Tv(i){return(typeof i=="string"?i:""+i).replace(_b,`
`).replace(wb,"")}function Yu(i,o,l){if(o=Tv(o),Tv(i)!==o&&l)throw Error(r(425))}function Xu(){}var zh=null,Wh=null;function Gh(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Hh=typeof setTimeout=="function"?setTimeout:void 0,Eb=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,Ib=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(i){return Sv.resolve(null).then(i).catch(Tb)}:Hh;function Tb(i){setTimeout(function(){throw i})}function qh(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),sn(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);sn(o)}function bi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function bv(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Ds,cl="__reactProps$"+Ds,Qn="__reactContainer$"+Ds,Kh="__reactEvents$"+Ds,Sb="__reactListeners$"+Ds,bb="__reactHandles$"+Ds;function Ao(i){var o=i[Cn];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Qn]||l[Cn]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=bv(i);i!==null;){if(l=i[Cn])return l;i=bv(i)}return o}i=l,l=i.parentNode}return null}function dl(i){return i=i[Cn]||i[Qn],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Ns(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(r(33))}function Ju(i){return i[cl]||null}var Qh=[],Os=-1;function Ci(i){return{current:i}}function at(i){0>Os||(i.current=Qh[Os],Qh[Os]=null,Os--)}function ot(i,o){Os++,Qh[Os]=i.current,i.current=o}var Ai={},Yt=Ci(Ai),hr=Ci(!1),Po=Ai;function Ls(i,o){var l=i.type.contextTypes;if(!l)return Ai;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=o[v];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function fr(i){return i=i.childContextTypes,i!=null}function Zu(){at(hr),at(Yt)}function Cv(i,o,l){if(Yt.current!==Ai)throw Error(r(168));ot(Yt,o),ot(hr,l)}function Av(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(r(108,Oe(i)||"Unknown",p));return ae({},l,h)}function ec(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ai,Po=Yt.current,ot(Yt,i),ot(hr,hr.current),!0}function Pv(i,o,l){var h=i.stateNode;if(!h)throw Error(r(169));l?(i=Av(i,o,Po),h.__reactInternalMemoizedMergedChildContext=i,at(hr),at(Yt),ot(Yt,i)):at(hr),ot(hr,l)}var Yn=null,tc=!1,Yh=!1;function Rv(i){Yn===null?Yn=[i]:Yn.push(i)}function Cb(i){tc=!0,Rv(i)}function Pi(){if(!Yh&&Yn!==null){Yh=!0;var i=0,o=ze;try{var l=Yn;for(ze=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Yn=null,tc=!1}catch(p){throw Yn!==null&&(Yn=Yn.slice(i+1)),ps(_o,Pi),p}finally{ze=o,Yh=!1}}return null}var Ms=[],Vs=0,rc=null,nc=0,Ur=[],jr=0,Ro=null,Xn=1,Jn="";function xo(i,o){Ms[Vs++]=nc,Ms[Vs++]=rc,rc=i,nc=o}function xv(i,o,l){Ur[jr++]=Xn,Ur[jr++]=Jn,Ur[jr++]=Ro,Ro=i;var h=Xn;i=Jn;var p=32-or(h)-1;h&=~(1<<p),l+=1;var v=32-or(o)+p;if(30<v){var T=p-p%5;v=(h&(1<<T)-1).toString(32),h>>=T,p-=T,Xn=1<<32-or(o)+p|l<<p|h,Jn=v+i}else Xn=1<<v|l<<p|h,Jn=i}function Xh(i){i.return!==null&&(xo(i,1),xv(i,1,0))}function Jh(i){for(;i===rc;)rc=Ms[--Vs],Ms[Vs]=null,nc=Ms[--Vs],Ms[Vs]=null;for(;i===Ro;)Ro=Ur[--jr],Ur[jr]=null,Jn=Ur[--jr],Ur[jr]=null,Xn=Ur[--jr],Ur[jr]=null}var br=null,Cr=null,ct=!1,un=null;function kv(i,o){var l=Gr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Dv(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,br=i,Cr=bi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,br=i,Cr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Ro!==null?{id:Xn,overflow:Jn}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Gr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,br=i,Cr=null,!0):!1;default:return!1}}function Zh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function ef(i){if(ct){var o=Cr;if(o){var l=o;if(!Dv(i,o)){if(Zh(i))throw Error(r(418));o=bi(l.nextSibling);var h=br;o&&Dv(i,o)?kv(h,l):(i.flags=i.flags&-4097|2,ct=!1,br=i)}}else{if(Zh(i))throw Error(r(418));i.flags=i.flags&-4097|2,ct=!1,br=i}}}function Nv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;br=i}function ic(i){if(i!==br)return!1;if(!ct)return Nv(i),ct=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Gh(i.type,i.memoizedProps)),o&&(o=Cr)){if(Zh(i))throw Ov(),Error(r(418));for(;o;)kv(i,o),o=bi(o.nextSibling)}if(Nv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Cr=bi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Cr=null}}else Cr=br?bi(i.stateNode.nextSibling):null;return!0}function Ov(){for(var i=Cr;i;)i=bi(i.nextSibling)}function Fs(){Cr=br=null,ct=!1}function tf(i){un===null?un=[i]:un.push(i)}var Ab=$.ReactCurrentBatchConfig;function hl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(r(309));var h=l.stateNode}if(!h)throw Error(r(147,i));var p=h,v=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===v?o.ref:(o=function(T){var k=p.refs;T===null?delete k[v]:k[v]=T},o._stringRef=v,o)}if(typeof i!="string")throw Error(r(284));if(!l._owner)throw Error(r(290,i))}return i}function oc(i,o){throw i=Object.prototype.toString.call(o),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Lv(i){var o=i._init;return o(i._payload)}function Mv(i){function o(H,F){if(i){var q=H.deletions;q===null?(H.deletions=[F],H.flags|=16):q.push(F)}}function l(H,F){if(!i)return null;for(;F!==null;)o(H,F),F=F.sibling;return null}function h(H,F){for(H=new Map;F!==null;)F.key!==null?H.set(F.key,F):H.set(F.index,F),F=F.sibling;return H}function p(H,F){return H=Mi(H,F),H.index=0,H.sibling=null,H}function v(H,F,q){return H.index=q,i?(q=H.alternate,q!==null?(q=q.index,q<F?(H.flags|=2,F):q):(H.flags|=2,F)):(H.flags|=1048576,F)}function T(H){return i&&H.alternate===null&&(H.flags|=2),H}function k(H,F,q,se){return F===null||F.tag!==6?(F=qf(q,H.mode,se),F.return=H,F):(F=p(F,q),F.return=H,F)}function M(H,F,q,se){var ve=q.type;return ve===P?te(H,F,q.props.children,se,q.key):F!==null&&(F.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Ye&&Lv(ve)===F.type)?(se=p(F,q.props),se.ref=hl(H,F,q),se.return=H,se):(se=Rc(q.type,q.key,q.props,null,H.mode,se),se.ref=hl(H,F,q),se.return=H,se)}function K(H,F,q,se){return F===null||F.tag!==4||F.stateNode.containerInfo!==q.containerInfo||F.stateNode.implementation!==q.implementation?(F=Kf(q,H.mode,se),F.return=H,F):(F=p(F,q.children||[]),F.return=H,F)}function te(H,F,q,se,ve){return F===null||F.tag!==7?(F=Fo(q,H.mode,se,ve),F.return=H,F):(F=p(F,q),F.return=H,F)}function re(H,F,q){if(typeof F=="string"&&F!==""||typeof F=="number")return F=qf(""+F,H.mode,q),F.return=H,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case W:return q=Rc(F.type,F.key,F.props,null,H.mode,q),q.ref=hl(H,null,F),q.return=H,q;case Q:return F=Kf(F,H.mode,q),F.return=H,F;case Ye:var se=F._init;return re(H,se(F._payload),q)}if(wr(F)||ce(F))return F=Fo(F,H.mode,q,null),F.return=H,F;oc(H,F)}return null}function Z(H,F,q,se){var ve=F!==null?F.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return ve!==null?null:k(H,F,""+q,se);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case W:return q.key===ve?M(H,F,q,se):null;case Q:return q.key===ve?K(H,F,q,se):null;case Ye:return ve=q._init,Z(H,F,ve(q._payload),se)}if(wr(q)||ce(q))return ve!==null?null:te(H,F,q,se,null);oc(H,q)}return null}function de(H,F,q,se,ve){if(typeof se=="string"&&se!==""||typeof se=="number")return H=H.get(q)||null,k(F,H,""+se,ve);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case W:return H=H.get(se.key===null?q:se.key)||null,M(F,H,se,ve);case Q:return H=H.get(se.key===null?q:se.key)||null,K(F,H,se,ve);case Ye:var we=se._init;return de(H,F,q,we(se._payload),ve)}if(wr(se)||ce(se))return H=H.get(q)||null,te(F,H,se,ve,null);oc(F,se)}return null}function ge(H,F,q,se){for(var ve=null,we=null,Ee=F,Re=F=0,Mt=null;Ee!==null&&Re<q.length;Re++){Ee.index>Re?(Mt=Ee,Ee=null):Mt=Ee.sibling;var Ke=Z(H,Ee,q[Re],se);if(Ke===null){Ee===null&&(Ee=Mt);break}i&&Ee&&Ke.alternate===null&&o(H,Ee),F=v(Ke,F,Re),we===null?ve=Ke:we.sibling=Ke,we=Ke,Ee=Mt}if(Re===q.length)return l(H,Ee),ct&&xo(H,Re),ve;if(Ee===null){for(;Re<q.length;Re++)Ee=re(H,q[Re],se),Ee!==null&&(F=v(Ee,F,Re),we===null?ve=Ee:we.sibling=Ee,we=Ee);return ct&&xo(H,Re),ve}for(Ee=h(H,Ee);Re<q.length;Re++)Mt=de(Ee,H,Re,q[Re],se),Mt!==null&&(i&&Mt.alternate!==null&&Ee.delete(Mt.key===null?Re:Mt.key),F=v(Mt,F,Re),we===null?ve=Mt:we.sibling=Mt,we=Mt);return i&&Ee.forEach(function(Vi){return o(H,Vi)}),ct&&xo(H,Re),ve}function me(H,F,q,se){var ve=ce(q);if(typeof ve!="function")throw Error(r(150));if(q=ve.call(q),q==null)throw Error(r(151));for(var we=ve=null,Ee=F,Re=F=0,Mt=null,Ke=q.next();Ee!==null&&!Ke.done;Re++,Ke=q.next()){Ee.index>Re?(Mt=Ee,Ee=null):Mt=Ee.sibling;var Vi=Z(H,Ee,Ke.value,se);if(Vi===null){Ee===null&&(Ee=Mt);break}i&&Ee&&Vi.alternate===null&&o(H,Ee),F=v(Vi,F,Re),we===null?ve=Vi:we.sibling=Vi,we=Vi,Ee=Mt}if(Ke.done)return l(H,Ee),ct&&xo(H,Re),ve;if(Ee===null){for(;!Ke.done;Re++,Ke=q.next())Ke=re(H,Ke.value,se),Ke!==null&&(F=v(Ke,F,Re),we===null?ve=Ke:we.sibling=Ke,we=Ke);return ct&&xo(H,Re),ve}for(Ee=h(H,Ee);!Ke.done;Re++,Ke=q.next())Ke=de(Ee,H,Re,Ke.value,se),Ke!==null&&(i&&Ke.alternate!==null&&Ee.delete(Ke.key===null?Re:Ke.key),F=v(Ke,F,Re),we===null?ve=Ke:we.sibling=Ke,we=Ke);return i&&Ee.forEach(function(sC){return o(H,sC)}),ct&&xo(H,Re),ve}function vt(H,F,q,se){if(typeof q=="object"&&q!==null&&q.type===P&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case W:e:{for(var ve=q.key,we=F;we!==null;){if(we.key===ve){if(ve=q.type,ve===P){if(we.tag===7){l(H,we.sibling),F=p(we,q.props.children),F.return=H,H=F;break e}}else if(we.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Ye&&Lv(ve)===we.type){l(H,we.sibling),F=p(we,q.props),F.ref=hl(H,we,q),F.return=H,H=F;break e}l(H,we);break}else o(H,we);we=we.sibling}q.type===P?(F=Fo(q.props.children,H.mode,se,q.key),F.return=H,H=F):(se=Rc(q.type,q.key,q.props,null,H.mode,se),se.ref=hl(H,F,q),se.return=H,H=se)}return T(H);case Q:e:{for(we=q.key;F!==null;){if(F.key===we)if(F.tag===4&&F.stateNode.containerInfo===q.containerInfo&&F.stateNode.implementation===q.implementation){l(H,F.sibling),F=p(F,q.children||[]),F.return=H,H=F;break e}else{l(H,F);break}else o(H,F);F=F.sibling}F=Kf(q,H.mode,se),F.return=H,H=F}return T(H);case Ye:return we=q._init,vt(H,F,we(q._payload),se)}if(wr(q))return ge(H,F,q,se);if(ce(q))return me(H,F,q,se);oc(H,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,F!==null&&F.tag===6?(l(H,F.sibling),F=p(F,q),F.return=H,H=F):(l(H,F),F=qf(q,H.mode,se),F.return=H,H=F),T(H)):l(H,F)}return vt}var Bs=Mv(!0),Vv=Mv(!1),sc=Ci(null),ac=null,Us=null,rf=null;function nf(){rf=Us=ac=null}function of(i){var o=sc.current;at(sc),i._currentValue=o}function sf(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function js(i,o){ac=i,rf=Us=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(pr=!0),i.firstContext=null)}function $r(i){var o=i._currentValue;if(rf!==i)if(i={context:i,memoizedValue:o,next:null},Us===null){if(ac===null)throw Error(r(308));Us=i,ac.dependencies={lanes:0,firstContext:i}}else Us=Us.next=i;return o}var ko=null;function af(i){ko===null?ko=[i]:ko.push(i)}function Fv(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,af(o)):(l.next=p.next,p.next=l),o.interleaved=l,Zn(i,h)}function Zn(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ri=!1;function lf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bv(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ei(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function xi(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(He&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Zn(i,l)}return p=h.interleaved,p===null?(o.next=o,af(h)):(o.next=p.next,p.next=o),h.interleaved=o,Zn(i,l)}function lc(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,_i(i,l)}}function Uv(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=o:v=v.next=o}else p=v=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function uc(i,o,l,h){var p=i.updateQueue;Ri=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,k=p.shared.pending;if(k!==null){p.shared.pending=null;var M=k,K=M.next;M.next=null,T===null?v=K:T.next=K,T=M;var te=i.alternate;te!==null&&(te=te.updateQueue,k=te.lastBaseUpdate,k!==T&&(k===null?te.firstBaseUpdate=K:k.next=K,te.lastBaseUpdate=M))}if(v!==null){var re=p.baseState;T=0,te=K=M=null,k=v;do{var Z=k.lane,de=k.eventTime;if((h&Z)===Z){te!==null&&(te=te.next={eventTime:de,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var ge=i,me=k;switch(Z=o,de=l,me.tag){case 1:if(ge=me.payload,typeof ge=="function"){re=ge.call(de,re,Z);break e}re=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=me.payload,Z=typeof ge=="function"?ge.call(de,re,Z):ge,Z==null)break e;re=ae({},re,Z);break e;case 2:Ri=!0}}k.callback!==null&&k.lane!==0&&(i.flags|=64,Z=p.effects,Z===null?p.effects=[k]:Z.push(k))}else de={eventTime:de,lane:Z,tag:k.tag,payload:k.payload,callback:k.callback,next:null},te===null?(K=te=de,M=re):te=te.next=de,T|=Z;if(k=k.next,k===null){if(k=p.shared.pending,k===null)break;Z=k,k=Z.next,Z.next=null,p.lastBaseUpdate=Z,p.shared.pending=null}}while(!0);if(te===null&&(M=re),p.baseState=M,p.firstBaseUpdate=K,p.lastBaseUpdate=te,o=p.shared.interleaved,o!==null){p=o;do T|=p.lane,p=p.next;while(p!==o)}else v===null&&(p.shared.lanes=0);Oo|=T,i.lanes=T,i.memoizedState=re}}function jv(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(r(191,p));p.call(h)}}}var fl={},An=Ci(fl),pl=Ci(fl),gl=Ci(fl);function Do(i){if(i===fl)throw Error(r(174));return i}function uf(i,o){switch(ot(gl,o),ot(pl,i),ot(An,fl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:St(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=St(o,i)}at(An),ot(An,o)}function $s(){at(An),at(pl),at(gl)}function $v(i){Do(gl.current);var o=Do(An.current),l=St(o,i.type);o!==l&&(ot(pl,i),ot(An,l))}function cf(i){pl.current===i&&(at(An),at(pl))}var dt=Ci(0);function cc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var df=[];function hf(){for(var i=0;i<df.length;i++)df[i]._workInProgressVersionPrimary=null;df.length=0}var dc=$.ReactCurrentDispatcher,ff=$.ReactCurrentBatchConfig,No=0,ht=null,Ct=null,Ot=null,hc=!1,ml=!1,vl=0,Pb=0;function Xt(){throw Error(r(321))}function pf(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!ln(i[l],o[l]))return!1;return!0}function gf(i,o,l,h,p,v){if(No=v,ht=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,dc.current=i===null||i.memoizedState===null?Db:Nb,i=l(h,p),ml){v=0;do{if(ml=!1,vl=0,25<=v)throw Error(r(301));v+=1,Ot=Ct=null,o.updateQueue=null,dc.current=Ob,i=l(h,p)}while(ml)}if(dc.current=gc,o=Ct!==null&&Ct.next!==null,No=0,Ot=Ct=ht=null,hc=!1,o)throw Error(r(300));return i}function mf(){var i=vl!==0;return vl=0,i}function Pn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?ht.memoizedState=Ot=i:Ot=Ot.next=i,Ot}function zr(){if(Ct===null){var i=ht.alternate;i=i!==null?i.memoizedState:null}else i=Ct.next;var o=Ot===null?ht.memoizedState:Ot.next;if(o!==null)Ot=o,Ct=i;else{if(i===null)throw Error(r(310));Ct=i,i={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ot===null?ht.memoizedState=Ot=i:Ot=Ot.next=i}return Ot}function yl(i,o){return typeof o=="function"?o(i):o}function vf(i){var o=zr(),l=o.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var h=Ct,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var k=T=null,M=null,K=v;do{var te=K.lane;if((No&te)===te)M!==null&&(M=M.next={lane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),h=K.hasEagerState?K.eagerState:i(h,K.action);else{var re={lane:te,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null};M===null?(k=M=re,T=h):M=M.next=re,ht.lanes|=te,Oo|=te}K=K.next}while(K!==null&&K!==v);M===null?T=h:M.next=k,ln(h,o.memoizedState)||(pr=!0),o.memoizedState=h,o.baseState=T,o.baseQueue=M,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do v=p.lane,ht.lanes|=v,Oo|=v,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function yf(i){var o=zr(),l=o.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,v=o.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=i(v,T.action),T=T.next;while(T!==p);ln(v,o.memoizedState)||(pr=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),l.lastRenderedState=v}return[v,h]}function zv(){}function Wv(i,o){var l=ht,h=zr(),p=o(),v=!ln(h.memoizedState,p);if(v&&(h.memoizedState=p,pr=!0),h=h.queue,_f(qv.bind(null,l,h,i),[i]),h.getSnapshot!==o||v||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,_l(9,Hv.bind(null,l,h,p,o),void 0,null),Lt===null)throw Error(r(349));(No&30)!==0||Gv(l,o,p)}return p}function Gv(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=ht.updateQueue,o===null?(o={lastEffect:null,stores:null},ht.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Hv(i,o,l,h){o.value=l,o.getSnapshot=h,Kv(o)&&Qv(i)}function qv(i,o,l){return l(function(){Kv(o)&&Qv(i)})}function Kv(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!ln(i,l)}catch{return!0}}function Qv(i){var o=Zn(i,1);o!==null&&fn(o,i,1,-1)}function Yv(i){var o=Pn();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:i},o.queue=i,i=i.dispatch=kb.bind(null,ht,i),[o.memoizedState,i]}function _l(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=ht.updateQueue,o===null?(o={lastEffect:null,stores:null},ht.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function Xv(){return zr().memoizedState}function fc(i,o,l,h){var p=Pn();ht.flags|=i,p.memoizedState=_l(1|o,l,void 0,h===void 0?null:h)}function pc(i,o,l,h){var p=zr();h=h===void 0?null:h;var v=void 0;if(Ct!==null){var T=Ct.memoizedState;if(v=T.destroy,h!==null&&pf(h,T.deps)){p.memoizedState=_l(o,l,v,h);return}}ht.flags|=i,p.memoizedState=_l(1|o,l,v,h)}function Jv(i,o){return fc(8390656,8,i,o)}function _f(i,o){return pc(2048,8,i,o)}function Zv(i,o){return pc(4,2,i,o)}function ey(i,o){return pc(4,4,i,o)}function ty(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function ry(i,o,l){return l=l!=null?l.concat([i]):null,pc(4,4,ty.bind(null,o,i),l)}function wf(){}function ny(i,o){var l=zr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&pf(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function iy(i,o){var l=zr();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&pf(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function oy(i,o,l){return(No&21)===0?(i.baseState&&(i.baseState=!1,pr=!0),i.memoizedState=l):(ln(l,o)||(l=Io(),ht.lanes|=l,Oo|=l,i.baseState=!0),o)}function Rb(i,o){var l=ze;ze=l!==0&&4>l?l:4,i(!0);var h=ff.transition;ff.transition={};try{i(!1),o()}finally{ze=l,ff.transition=h}}function sy(){return zr().memoizedState}function xb(i,o,l){var h=Oi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},ay(i))ly(o,l);else if(l=Fv(i,o,l,h),l!==null){var p=lr();fn(l,i,h,p),uy(l,o,h)}}function kb(i,o,l){var h=Oi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(ay(i))ly(o,p);else{var v=i.alternate;if(i.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null))try{var T=o.lastRenderedState,k=v(T,l);if(p.hasEagerState=!0,p.eagerState=k,ln(k,T)){var M=o.interleaved;M===null?(p.next=p,af(o)):(p.next=M.next,M.next=p),o.interleaved=p;return}}catch{}finally{}l=Fv(i,o,p,h),l!==null&&(p=lr(),fn(l,i,h,p),uy(l,o,h))}}function ay(i){var o=i.alternate;return i===ht||o!==null&&o===ht}function ly(i,o){ml=hc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function uy(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,_i(i,l)}}var gc={readContext:$r,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},Db={readContext:$r,useCallback:function(i,o){return Pn().memoizedState=[i,o===void 0?null:o],i},useContext:$r,useEffect:Jv,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,fc(4194308,4,ty.bind(null,o,i),l)},useLayoutEffect:function(i,o){return fc(4194308,4,i,o)},useInsertionEffect:function(i,o){return fc(4,2,i,o)},useMemo:function(i,o){var l=Pn();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Pn();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=xb.bind(null,ht,i),[h.memoizedState,i]},useRef:function(i){var o=Pn();return i={current:i},o.memoizedState=i},useState:Yv,useDebugValue:wf,useDeferredValue:function(i){return Pn().memoizedState=i},useTransition:function(){var i=Yv(!1),o=i[0];return i=Rb.bind(null,i[1]),Pn().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=ht,p=Pn();if(ct){if(l===void 0)throw Error(r(407));l=l()}else{if(l=o(),Lt===null)throw Error(r(349));(No&30)!==0||Gv(h,o,l)}p.memoizedState=l;var v={value:l,getSnapshot:o};return p.queue=v,Jv(qv.bind(null,h,v,i),[i]),h.flags|=2048,_l(9,Hv.bind(null,h,v,l,o),void 0,null),l},useId:function(){var i=Pn(),o=Lt.identifierPrefix;if(ct){var l=Jn,h=Xn;l=(h&~(1<<32-or(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=vl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=Pb++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},Nb={readContext:$r,useCallback:ny,useContext:$r,useEffect:_f,useImperativeHandle:ry,useInsertionEffect:Zv,useLayoutEffect:ey,useMemo:iy,useReducer:vf,useRef:Xv,useState:function(){return vf(yl)},useDebugValue:wf,useDeferredValue:function(i){var o=zr();return oy(o,Ct.memoizedState,i)},useTransition:function(){var i=vf(yl)[0],o=zr().memoizedState;return[i,o]},useMutableSource:zv,useSyncExternalStore:Wv,useId:sy,unstable_isNewReconciler:!1},Ob={readContext:$r,useCallback:ny,useContext:$r,useEffect:_f,useImperativeHandle:ry,useInsertionEffect:Zv,useLayoutEffect:ey,useMemo:iy,useReducer:yf,useRef:Xv,useState:function(){return yf(yl)},useDebugValue:wf,useDeferredValue:function(i){var o=zr();return Ct===null?o.memoizedState=i:oy(o,Ct.memoizedState,i)},useTransition:function(){var i=yf(yl)[0],o=zr().memoizedState;return[i,o]},useMutableSource:zv,useSyncExternalStore:Wv,useId:sy,unstable_isNewReconciler:!1};function cn(i,o){if(i&&i.defaultProps){o=ae({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function Ef(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ae({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var mc={isMounted:function(i){return(i=i._reactInternals)?en(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=lr(),p=Oi(i),v=ei(h,p);v.payload=o,l!=null&&(v.callback=l),o=xi(i,v,p),o!==null&&(fn(o,i,p,h),lc(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=lr(),p=Oi(i),v=ei(h,p);v.tag=1,v.payload=o,l!=null&&(v.callback=l),o=xi(i,v,p),o!==null&&(fn(o,i,p,h),lc(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=lr(),h=Oi(i),p=ei(l,h);p.tag=2,o!=null&&(p.callback=o),o=xi(i,p,h),o!==null&&(fn(o,i,h,l),lc(o,i,h))}};function cy(i,o,l,h,p,v,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,v,T):o.prototype&&o.prototype.isPureReactComponent?!ol(l,h)||!ol(p,v):!0}function dy(i,o,l){var h=!1,p=Ai,v=o.contextType;return typeof v=="object"&&v!==null?v=$r(v):(p=fr(o)?Po:Yt.current,h=o.contextTypes,v=(h=h!=null)?Ls(i,p):Ai),o=new o(l,v),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=mc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=v),o}function hy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&mc.enqueueReplaceState(o,o.state,null)}function If(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},lf(i);var v=o.contextType;typeof v=="object"&&v!==null?p.context=$r(v):(v=fr(o)?Po:Yt.current,p.context=Ls(i,v)),p.state=i.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(Ef(i,o,v,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&mc.enqueueReplaceState(p,p.state,null),uc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function zs(i,o){try{var l="",h=o;do l+=_e(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:i,source:o,stack:p,digest:null}}function Tf(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function Sf(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var Lb=typeof WeakMap=="function"?WeakMap:Map;function fy(i,o,l){l=ei(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){Tc||(Tc=!0,Bf=h),Sf(i,o)},l}function py(i,o,l){l=ei(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){Sf(i,o)}}var v=i.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Sf(i,o),typeof h!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),l}function gy(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new Lb;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=Qb.bind(null,i,o,l),o.then(i,i))}function my(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function vy(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=ei(-1,1),o.tag=2,xi(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var Mb=$.ReactCurrentOwner,pr=!1;function ar(i,o,l,h){o.child=i===null?Vv(o,null,l,h):Bs(o,i.child,l,h)}function yy(i,o,l,h,p){l=l.render;var v=o.ref;return js(o,p),h=gf(i,o,l,h,v,p),l=mf(),i!==null&&!pr?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ti(i,o,p)):(ct&&l&&Xh(o),o.flags|=1,ar(i,o,h,p),o.child)}function _y(i,o,l,h,p){if(i===null){var v=l.type;return typeof v=="function"&&!Hf(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=v,wy(i,o,v,h,p)):(i=Rc(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(v=i.child,(i.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:ol,l(T,h)&&i.ref===o.ref)return ti(i,o,p)}return o.flags|=1,i=Mi(v,h),i.ref=o.ref,i.return=o,o.child=i}function wy(i,o,l,h,p){if(i!==null){var v=i.memoizedProps;if(ol(v,h)&&i.ref===o.ref)if(pr=!1,o.pendingProps=h=v,(i.lanes&p)!==0)(i.flags&131072)!==0&&(pr=!0);else return o.lanes=i.lanes,ti(i,o,p)}return bf(i,o,l,h,p)}function Ey(i,o,l){var h=o.pendingProps,p=h.children,v=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Gs,Ar),Ar|=l;else{if((l&1073741824)===0)return i=v!==null?v.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,ot(Gs,Ar),Ar|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,ot(Gs,Ar),Ar|=h}else v!==null?(h=v.baseLanes|l,o.memoizedState=null):h=l,ot(Gs,Ar),Ar|=h;return ar(i,o,p,l),o.child}function Iy(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function bf(i,o,l,h,p){var v=fr(l)?Po:Yt.current;return v=Ls(o,v),js(o,p),l=gf(i,o,l,h,v,p),h=mf(),i!==null&&!pr?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ti(i,o,p)):(ct&&h&&Xh(o),o.flags|=1,ar(i,o,l,p),o.child)}function Ty(i,o,l,h,p){if(fr(l)){var v=!0;ec(o)}else v=!1;if(js(o,p),o.stateNode===null)yc(i,o),dy(o,l,h),If(o,l,h,p),h=!0;else if(i===null){var T=o.stateNode,k=o.memoizedProps;T.props=k;var M=T.context,K=l.contextType;typeof K=="object"&&K!==null?K=$r(K):(K=fr(l)?Po:Yt.current,K=Ls(o,K));var te=l.getDerivedStateFromProps,re=typeof te=="function"||typeof T.getSnapshotBeforeUpdate=="function";re||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==h||M!==K)&&hy(o,T,h,K),Ri=!1;var Z=o.memoizedState;T.state=Z,uc(o,h,T,p),M=o.memoizedState,k!==h||Z!==M||hr.current||Ri?(typeof te=="function"&&(Ef(o,l,te,h),M=o.memoizedState),(k=Ri||cy(o,l,k,h,Z,M,K))?(re||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=M),T.props=h,T.state=M,T.context=K,h=k):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{T=o.stateNode,Bv(i,o),k=o.memoizedProps,K=o.type===o.elementType?k:cn(o.type,k),T.props=K,re=o.pendingProps,Z=T.context,M=l.contextType,typeof M=="object"&&M!==null?M=$r(M):(M=fr(l)?Po:Yt.current,M=Ls(o,M));var de=l.getDerivedStateFromProps;(te=typeof de=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(k!==re||Z!==M)&&hy(o,T,h,M),Ri=!1,Z=o.memoizedState,T.state=Z,uc(o,h,T,p);var ge=o.memoizedState;k!==re||Z!==ge||hr.current||Ri?(typeof de=="function"&&(Ef(o,l,de,h),ge=o.memoizedState),(K=Ri||cy(o,l,K,h,Z,ge,M)||!1)?(te||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,ge,M),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,ge,M)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||k===i.memoizedProps&&Z===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&Z===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ge),T.props=h,T.state=ge,T.context=M,h=K):(typeof T.componentDidUpdate!="function"||k===i.memoizedProps&&Z===i.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||k===i.memoizedProps&&Z===i.memoizedState||(o.flags|=1024),h=!1)}return Cf(i,o,l,h,v,p)}function Cf(i,o,l,h,p,v){Iy(i,o);var T=(o.flags&128)!==0;if(!h&&!T)return p&&Pv(o,l,!1),ti(i,o,v);h=o.stateNode,Mb.current=o;var k=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&T?(o.child=Bs(o,i.child,null,v),o.child=Bs(o,null,k,v)):ar(i,o,k,v),o.memoizedState=h.state,p&&Pv(o,l,!0),o.child}function Sy(i){var o=i.stateNode;o.pendingContext?Cv(i,o.pendingContext,o.pendingContext!==o.context):o.context&&Cv(i,o.context,!1),uf(i,o.containerInfo)}function by(i,o,l,h,p){return Fs(),tf(p),o.flags|=256,ar(i,o,l,h),o.child}var Af={dehydrated:null,treeContext:null,retryLane:0};function Pf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Cy(i,o,l){var h=o.pendingProps,p=dt.current,v=!1,T=(o.flags&128)!==0,k;if((k=T)||(k=i!==null&&i.memoizedState===null?!1:(p&2)!==0),k?(v=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ot(dt,p&1),i===null)return ef(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=h.children,i=h.fallback,v?(h=o.mode,v=o.child,T={mode:"hidden",children:T},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=xc(T,h,0,null),i=Fo(i,h,l,null),v.return=o,i.return=o,v.sibling=i,o.child=v,o.child.memoizedState=Pf(l),o.memoizedState=Af,i):Rf(o,T));if(p=i.memoizedState,p!==null&&(k=p.dehydrated,k!==null))return Vb(i,o,T,h,k,p,l);if(v){v=h.fallback,T=o.mode,p=i.child,k=p.sibling;var M={mode:"hidden",children:h.children};return(T&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=M,o.deletions=null):(h=Mi(p,M),h.subtreeFlags=p.subtreeFlags&14680064),k!==null?v=Mi(k,v):(v=Fo(v,T,l,null),v.flags|=2),v.return=o,h.return=o,h.sibling=v,o.child=h,h=v,v=o.child,T=i.child.memoizedState,T=T===null?Pf(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=i.childLanes&~l,o.memoizedState=Af,h}return v=i.child,i=v.sibling,h=Mi(v,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function Rf(i,o){return o=xc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function vc(i,o,l,h){return h!==null&&tf(h),Bs(o,i.child,null,l),i=Rf(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function Vb(i,o,l,h,p,v,T){if(l)return o.flags&256?(o.flags&=-257,h=Tf(Error(r(422))),vc(i,o,T,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(v=h.fallback,p=o.mode,h=xc({mode:"visible",children:h.children},p,0,null),v=Fo(v,p,T,null),v.flags|=2,h.return=o,v.return=o,h.sibling=v,o.child=h,(o.mode&1)!==0&&Bs(o,i.child,null,T),o.child.memoizedState=Pf(T),o.memoizedState=Af,v);if((o.mode&1)===0)return vc(i,o,T,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var k=h.dgst;return h=k,v=Error(r(419)),h=Tf(v,h,void 0),vc(i,o,T,h)}if(k=(T&i.childLanes)!==0,pr||k){if(h=Lt,h!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Zn(i,p),fn(h,i,p,-1))}return Gf(),h=Tf(Error(r(421))),vc(i,o,T,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=Yb.bind(null,i),p._reactRetry=o,null):(i=v.treeContext,Cr=bi(p.nextSibling),br=o,ct=!0,un=null,i!==null&&(Ur[jr++]=Xn,Ur[jr++]=Jn,Ur[jr++]=Ro,Xn=i.id,Jn=i.overflow,Ro=o),o=Rf(o,h.children),o.flags|=4096,o)}function Ay(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),sf(i.return,o,l)}function xf(i,o,l,h,p){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=o,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function Py(i,o,l){var h=o.pendingProps,p=h.revealOrder,v=h.tail;if(ar(i,o,h.children,l),h=dt.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Ay(i,l,o);else if(i.tag===19)Ay(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(ot(dt,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&cc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),xf(o,!1,p,l,v);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&cc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}xf(o,!0,l,null,v);break;case"together":xf(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function yc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ti(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Oo|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(r(153));if(o.child!==null){for(i=o.child,l=Mi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Mi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function Fb(i,o,l){switch(o.tag){case 3:Sy(o),Fs();break;case 5:$v(o);break;case 1:fr(o.type)&&ec(o);break;case 4:uf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;ot(sc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(ot(dt,dt.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?Cy(i,o,l):(ot(dt,dt.current&1),i=ti(i,o,l),i!==null?i.sibling:null);ot(dt,dt.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return Py(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ot(dt,dt.current),h)break;return null;case 22:case 23:return o.lanes=0,Ey(i,o,l)}return ti(i,o,l)}var Ry,kf,xy,ky;Ry=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},kf=function(){},xy=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,Do(An.current);var v=null;switch(l){case"input":p=Or(i,p),h=Or(i,h),v=[];break;case"select":p=ae({},p,{value:void 0}),h=ae({},h,{value:void 0}),v=[];break;case"textarea":p=Oa(i,p),h=Oa(i,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Xu)}Ua(l,h);var T;l=null;for(K in p)if(!h.hasOwnProperty(K)&&p.hasOwnProperty(K)&&p[K]!=null)if(K==="style"){var k=p[K];for(T in k)k.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else K!=="dangerouslySetInnerHTML"&&K!=="children"&&K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&K!=="autoFocus"&&(s.hasOwnProperty(K)?v||(v=[]):(v=v||[]).push(K,null));for(K in h){var M=h[K];if(k=p!=null?p[K]:void 0,h.hasOwnProperty(K)&&M!==k&&(M!=null||k!=null))if(K==="style")if(k){for(T in k)!k.hasOwnProperty(T)||M&&M.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in M)M.hasOwnProperty(T)&&k[T]!==M[T]&&(l||(l={}),l[T]=M[T])}else l||(v||(v=[]),v.push(K,l)),l=M;else K==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,k=k?k.__html:void 0,M!=null&&k!==M&&(v=v||[]).push(K,M)):K==="children"?typeof M!="string"&&typeof M!="number"||(v=v||[]).push(K,""+M):K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&(s.hasOwnProperty(K)?(M!=null&&K==="onScroll"&&st("scroll",i),v||k===M||(v=[])):(v=v||[]).push(K,M))}l&&(v=v||[]).push("style",l);var K=v;(o.updateQueue=K)&&(o.flags|=4)}},ky=function(i,o,l,h){l!==h&&(o.flags|=4)};function wl(i,o){if(!ct)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Jt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function Bb(i,o,l){var h=o.pendingProps;switch(Jh(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(o),null;case 1:return fr(o.type)&&Zu(),Jt(o),null;case 3:return h=o.stateNode,$s(),at(hr),at(Yt),hf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(ic(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,un!==null&&($f(un),un=null))),kf(i,o),Jt(o),null;case 5:cf(o);var p=Do(gl.current);if(l=o.type,i!==null&&o.stateNode!=null)xy(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(r(166));return Jt(o),null}if(i=Do(An.current),ic(o)){h=o.stateNode,l=o.type;var v=o.memoizedProps;switch(h[Cn]=o,h[cl]=v,i=(o.mode&1)!==0,l){case"dialog":st("cancel",h),st("close",h);break;case"iframe":case"object":case"embed":st("load",h);break;case"video":case"audio":for(p=0;p<al.length;p++)st(al[p],h);break;case"source":st("error",h);break;case"img":case"image":case"link":st("error",h),st("load",h);break;case"details":st("toggle",h);break;case"input":Fn(h,v),st("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},st("invalid",h);break;case"textarea":os(h,v),st("invalid",h)}Ua(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var k=v[T];T==="children"?typeof k=="string"?h.textContent!==k&&(v.suppressHydrationWarning!==!0&&Yu(h.textContent,k,i),p=["children",k]):typeof k=="number"&&h.textContent!==""+k&&(v.suppressHydrationWarning!==!0&&Yu(h.textContent,k,i),p=["children",""+k]):s.hasOwnProperty(T)&&k!=null&&T==="onScroll"&&st("scroll",h)}switch(l){case"input":kt(h),is(h,v,!0);break;case"textarea":kt(h),La(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=Xu)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=Tt(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=T.createElement(l,{is:h.is}):(i=T.createElement(l),l==="select"&&(T=i,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):i=T.createElementNS(i,l),i[Cn]=o,i[cl]=h,Ry(i,o,!1,!1),o.stateNode=i;e:{switch(T=ja(l,h),l){case"dialog":st("cancel",i),st("close",i),p=h;break;case"iframe":case"object":case"embed":st("load",i),p=h;break;case"video":case"audio":for(p=0;p<al.length;p++)st(al[p],i);p=h;break;case"source":st("error",i),p=h;break;case"img":case"image":case"link":st("error",i),st("load",i),p=h;break;case"details":st("toggle",i),p=h;break;case"input":Fn(i,h),p=Or(i,h),st("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ae({},h,{value:void 0}),st("invalid",i);break;case"textarea":os(i,h),p=Oa(i,h),st("invalid",i);break;default:p=h}Ua(l,p),k=p;for(v in k)if(k.hasOwnProperty(v)){var M=k[v];v==="style"?Fa(i,M):v==="dangerouslySetInnerHTML"?(M=M?M.__html:void 0,M!=null&&Ma(i,M)):v==="children"?typeof M=="string"?(l!=="textarea"||M!=="")&&pi(i,M):typeof M=="number"&&pi(i,""+M):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?M!=null&&v==="onScroll"&&st("scroll",i):M!=null&&j(i,v,M,T))}switch(l){case"input":kt(i),is(i,h,!1);break;case"textarea":kt(i),La(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ne(h.value));break;case"select":i.multiple=!!h.multiple,v=h.value,v!=null?jn(i,!!h.multiple,v,!1):h.defaultValue!=null&&jn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Xu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Jt(o),null;case 6:if(i&&o.stateNode!=null)ky(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(r(166));if(l=Do(gl.current),Do(An.current),ic(o)){if(h=o.stateNode,l=o.memoizedProps,h[Cn]=o,(v=h.nodeValue!==l)&&(i=br,i!==null))switch(i.tag){case 3:Yu(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Yu(h.nodeValue,l,(i.mode&1)!==0)}v&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Cn]=o,o.stateNode=h}return Jt(o),null;case 13:if(at(dt),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ct&&Cr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Ov(),Fs(),o.flags|=98560,v=!1;else if(v=ic(o),h!==null&&h.dehydrated!==null){if(i===null){if(!v)throw Error(r(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(r(317));v[Cn]=o}else Fs(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Jt(o),v=!1}else un!==null&&($f(un),un=null),v=!0;if(!v)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(dt.current&1)!==0?At===0&&(At=3):Gf())),o.updateQueue!==null&&(o.flags|=4),Jt(o),null);case 4:return $s(),kf(i,o),i===null&&ll(o.stateNode.containerInfo),Jt(o),null;case 10:return of(o.type._context),Jt(o),null;case 17:return fr(o.type)&&Zu(),Jt(o),null;case 19:if(at(dt),v=o.memoizedState,v===null)return Jt(o),null;if(h=(o.flags&128)!==0,T=v.rendering,T===null)if(h)wl(v,!1);else{if(At!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(T=cc(i),T!==null){for(o.flags|=128,wl(v,!1),h=T.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)v=l,i=h,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=i,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,i=T.dependencies,v.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ot(dt,dt.current&1|2),o.child}i=i.sibling}v.tail!==null&&it()>Hs&&(o.flags|=128,h=!0,wl(v,!1),o.lanes=4194304)}else{if(!h)if(i=cc(T),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),wl(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!ct)return Jt(o),null}else 2*it()-v.renderingStartTime>Hs&&l!==1073741824&&(o.flags|=128,h=!0,wl(v,!1),o.lanes=4194304);v.isBackwards?(T.sibling=o.child,o.child=T):(l=v.last,l!==null?l.sibling=T:o.child=T,v.last=T)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=it(),o.sibling=null,l=dt.current,ot(dt,h?l&1|2:l&1),o):(Jt(o),null);case 22:case 23:return Wf(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Ar&1073741824)!==0&&(Jt(o),o.subtreeFlags&6&&(o.flags|=8192)):Jt(o),null;case 24:return null;case 25:return null}throw Error(r(156,o.tag))}function Ub(i,o){switch(Jh(o),o.tag){case 1:return fr(o.type)&&Zu(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return $s(),at(hr),at(Yt),hf(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return cf(o),null;case 13:if(at(dt),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(r(340));Fs()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return at(dt),null;case 4:return $s(),null;case 10:return of(o.type._context),null;case 22:case 23:return Wf(),null;case 24:return null;default:return null}}var _c=!1,Zt=!1,jb=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Ws(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){pt(i,o,h)}else l.current=null}function Df(i,o,l){try{l()}catch(h){pt(i,o,h)}}var Dy=!1;function $b(i,o){if(zh=Ii,i=cv(),Lh(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,k=-1,M=-1,K=0,te=0,re=i,Z=null;t:for(;;){for(var de;re!==l||p!==0&&re.nodeType!==3||(k=T+p),re!==v||h!==0&&re.nodeType!==3||(M=T+h),re.nodeType===3&&(T+=re.nodeValue.length),(de=re.firstChild)!==null;)Z=re,re=de;for(;;){if(re===i)break t;if(Z===l&&++K===p&&(k=T),Z===v&&++te===h&&(M=T),(de=re.nextSibling)!==null)break;re=Z,Z=re.parentNode}re=de}l=k===-1||M===-1?null:{start:k,end:M}}else l=null}l=l||{start:0,end:0}}else l=null;for(Wh={focusedElem:i,selectionRange:l},Ii=!1,fe=o;fe!==null;)if(o=fe,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,fe=i;else for(;fe!==null;){o=fe;try{var ge=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var me=ge.memoizedProps,vt=ge.memoizedState,H=o.stateNode,F=H.getSnapshotBeforeUpdate(o.elementType===o.type?me:cn(o.type,me),vt);H.__reactInternalSnapshotBeforeUpdate=F}break;case 3:var q=o.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(se){pt(o,o.return,se)}if(i=o.sibling,i!==null){i.return=o.return,fe=i;break}fe=o.return}return ge=Dy,Dy=!1,ge}function El(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var v=p.destroy;p.destroy=void 0,v!==void 0&&Df(o,l,v)}p=p.next}while(p!==h)}}function wc(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Nf(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function Ny(i){var o=i.alternate;o!==null&&(i.alternate=null,Ny(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Cn],delete o[cl],delete o[Kh],delete o[Sb],delete o[bb])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Oy(i){return i.tag===5||i.tag===3||i.tag===4}function Ly(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Oy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Of(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Xu));else if(h!==4&&(i=i.child,i!==null))for(Of(i,o,l),i=i.sibling;i!==null;)Of(i,o,l),i=i.sibling}function Lf(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Lf(i,o,l),i=i.sibling;i!==null;)Lf(i,o,l),i=i.sibling}var Wt=null,dn=!1;function ki(i,o,l){for(l=l.child;l!==null;)My(i,o,l),l=l.sibling}function My(i,o,l){if(Er&&typeof Er.onCommitFiberUnmount=="function")try{Er.onCommitFiberUnmount(wo,l)}catch{}switch(l.tag){case 5:Zt||Ws(l,o);case 6:var h=Wt,p=dn;Wt=null,ki(i,o,l),Wt=h,dn=p,Wt!==null&&(dn?(i=Wt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Wt.removeChild(l.stateNode));break;case 18:Wt!==null&&(dn?(i=Wt,l=l.stateNode,i.nodeType===8?qh(i.parentNode,l):i.nodeType===1&&qh(i,l),sn(i)):qh(Wt,l.stateNode));break;case 4:h=Wt,p=dn,Wt=l.stateNode.containerInfo,dn=!0,ki(i,o,l),Wt=h,dn=p;break;case 0:case 11:case 14:case 15:if(!Zt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Df(l,o,T),p=p.next}while(p!==h)}ki(i,o,l);break;case 1:if(!Zt&&(Ws(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(k){pt(l,o,k)}ki(i,o,l);break;case 21:ki(i,o,l);break;case 22:l.mode&1?(Zt=(h=Zt)||l.memoizedState!==null,ki(i,o,l),Zt=h):ki(i,o,l);break;default:ki(i,o,l)}}function Vy(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new jb),o.forEach(function(h){var p=Xb.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function hn(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=i,T=o,k=T;e:for(;k!==null;){switch(k.tag){case 5:Wt=k.stateNode,dn=!1;break e;case 3:Wt=k.stateNode.containerInfo,dn=!0;break e;case 4:Wt=k.stateNode.containerInfo,dn=!0;break e}k=k.return}if(Wt===null)throw Error(r(160));My(v,T,p),Wt=null,dn=!1;var M=p.alternate;M!==null&&(M.return=null),p.return=null}catch(K){pt(p,o,K)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Fy(o,i),o=o.sibling}function Fy(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(hn(o,i),Rn(i),h&4){try{El(3,i,i.return),wc(3,i)}catch(me){pt(i,i.return,me)}try{El(5,i,i.return)}catch(me){pt(i,i.return,me)}}break;case 1:hn(o,i),Rn(i),h&512&&l!==null&&Ws(l,l.return);break;case 5:if(hn(o,i),Rn(i),h&512&&l!==null&&Ws(l,l.return),i.flags&32){var p=i.stateNode;try{pi(p,"")}catch(me){pt(i,i.return,me)}}if(h&4&&(p=i.stateNode,p!=null)){var v=i.memoizedProps,T=l!==null?l.memoizedProps:v,k=i.type,M=i.updateQueue;if(i.updateQueue=null,M!==null)try{k==="input"&&v.type==="radio"&&v.name!=null&&Bn(p,v),ja(k,T);var K=ja(k,v);for(T=0;T<M.length;T+=2){var te=M[T],re=M[T+1];te==="style"?Fa(p,re):te==="dangerouslySetInnerHTML"?Ma(p,re):te==="children"?pi(p,re):j(p,te,re,K)}switch(k){case"input":Un(p,v);break;case"textarea":ss(p,v);break;case"select":var Z=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var de=v.value;de!=null?jn(p,!!v.multiple,de,!1):Z!==!!v.multiple&&(v.defaultValue!=null?jn(p,!!v.multiple,v.defaultValue,!0):jn(p,!!v.multiple,v.multiple?[]:"",!1))}p[cl]=v}catch(me){pt(i,i.return,me)}}break;case 6:if(hn(o,i),Rn(i),h&4){if(i.stateNode===null)throw Error(r(162));p=i.stateNode,v=i.memoizedProps;try{p.nodeValue=v}catch(me){pt(i,i.return,me)}}break;case 3:if(hn(o,i),Rn(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{sn(o.containerInfo)}catch(me){pt(i,i.return,me)}break;case 4:hn(o,i),Rn(i);break;case 13:hn(o,i),Rn(i),p=i.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Ff=it())),h&4&&Vy(i);break;case 22:if(te=l!==null&&l.memoizedState!==null,i.mode&1?(Zt=(K=Zt)||te,hn(o,i),Zt=K):hn(o,i),Rn(i),h&8192){if(K=i.memoizedState!==null,(i.stateNode.isHidden=K)&&!te&&(i.mode&1)!==0)for(fe=i,te=i.child;te!==null;){for(re=fe=te;fe!==null;){switch(Z=fe,de=Z.child,Z.tag){case 0:case 11:case 14:case 15:El(4,Z,Z.return);break;case 1:Ws(Z,Z.return);var ge=Z.stateNode;if(typeof ge.componentWillUnmount=="function"){h=Z,l=Z.return;try{o=h,ge.props=o.memoizedProps,ge.state=o.memoizedState,ge.componentWillUnmount()}catch(me){pt(h,l,me)}}break;case 5:Ws(Z,Z.return);break;case 22:if(Z.memoizedState!==null){jy(re);continue}}de!==null?(de.return=Z,fe=de):jy(re)}te=te.sibling}e:for(te=null,re=i;;){if(re.tag===5){if(te===null){te=re;try{p=re.stateNode,K?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(k=re.stateNode,M=re.memoizedProps.style,T=M!=null&&M.hasOwnProperty("display")?M.display:null,k.style.display=Va("display",T))}catch(me){pt(i,i.return,me)}}}else if(re.tag===6){if(te===null)try{re.stateNode.nodeValue=K?"":re.memoizedProps}catch(me){pt(i,i.return,me)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===i)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===i)break e;for(;re.sibling===null;){if(re.return===null||re.return===i)break e;te===re&&(te=null),re=re.return}te===re&&(te=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:hn(o,i),Rn(i),h&4&&Vy(i);break;case 21:break;default:hn(o,i),Rn(i)}}function Rn(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Oy(l)){var h=l;break e}l=l.return}throw Error(r(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(pi(p,""),h.flags&=-33);var v=Ly(i);Lf(i,v,p);break;case 3:case 4:var T=h.stateNode.containerInfo,k=Ly(i);Of(i,k,T);break;default:throw Error(r(161))}}catch(M){pt(i,i.return,M)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function zb(i,o,l){fe=i,By(i)}function By(i,o,l){for(var h=(i.mode&1)!==0;fe!==null;){var p=fe,v=p.child;if(p.tag===22&&h){var T=p.memoizedState!==null||_c;if(!T){var k=p.alternate,M=k!==null&&k.memoizedState!==null||Zt;k=_c;var K=Zt;if(_c=T,(Zt=M)&&!K)for(fe=p;fe!==null;)T=fe,M=T.child,T.tag===22&&T.memoizedState!==null?$y(p):M!==null?(M.return=T,fe=M):$y(p);for(;v!==null;)fe=v,By(v),v=v.sibling;fe=p,_c=k,Zt=K}Uy(i)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,fe=v):Uy(i)}}function Uy(i){for(;fe!==null;){var o=fe;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Zt||wc(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Zt)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:cn(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=o.updateQueue;v!==null&&jv(o,v,h);break;case 3:var T=o.updateQueue;if(T!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}jv(o,T,l)}break;case 5:var k=o.stateNode;if(l===null&&o.flags&4){l=k;var M=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":M.autoFocus&&l.focus();break;case"img":M.src&&(l.src=M.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var K=o.alternate;if(K!==null){var te=K.memoizedState;if(te!==null){var re=te.dehydrated;re!==null&&sn(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Zt||o.flags&512&&Nf(o)}catch(Z){pt(o,o.return,Z)}}if(o===i){fe=null;break}if(l=o.sibling,l!==null){l.return=o.return,fe=l;break}fe=o.return}}function jy(i){for(;fe!==null;){var o=fe;if(o===i){fe=null;break}var l=o.sibling;if(l!==null){l.return=o.return,fe=l;break}fe=o.return}}function $y(i){for(;fe!==null;){var o=fe;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{wc(4,o)}catch(M){pt(o,l,M)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(M){pt(o,p,M)}}var v=o.return;try{Nf(o)}catch(M){pt(o,v,M)}break;case 5:var T=o.return;try{Nf(o)}catch(M){pt(o,T,M)}}}catch(M){pt(o,o.return,M)}if(o===i){fe=null;break}var k=o.sibling;if(k!==null){k.return=o.return,fe=k;break}fe=o.return}}var Wb=Math.ceil,Ec=$.ReactCurrentDispatcher,Mf=$.ReactCurrentOwner,Wr=$.ReactCurrentBatchConfig,He=0,Lt=null,wt=null,Gt=0,Ar=0,Gs=Ci(0),At=0,Il=null,Oo=0,Ic=0,Vf=0,Tl=null,gr=null,Ff=0,Hs=1/0,ri=null,Tc=!1,Bf=null,Di=null,Sc=!1,Ni=null,bc=0,Sl=0,Uf=null,Cc=-1,Ac=0;function lr(){return(He&6)!==0?it():Cc!==-1?Cc:Cc=it()}function Oi(i){return(i.mode&1)===0?1:(He&2)!==0&&Gt!==0?Gt&-Gt:Ab.transition!==null?(Ac===0&&(Ac=Io()),Ac):(i=ze,i!==0||(i=window.event,i=i===void 0?16:Ja(i.type)),i)}function fn(i,o,l,h){if(50<Sl)throw Sl=0,Uf=null,Error(r(185));yi(i,l,h),((He&2)===0||i!==Lt)&&(i===Lt&&((He&2)===0&&(Ic|=l),At===4&&Li(i,Gt)),mr(i,h),l===1&&He===0&&(o.mode&1)===0&&(Hs=it()+500,tc&&Pi()))}function mr(i,o){var l=i.callbackNode;Wn(i,o);var h=Eo(i,i===Lt?Gt:0);if(h===0)l!==null&&qa(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&qa(l),o===1)i.tag===0?Cb(Wy.bind(null,i)):Rv(Wy.bind(null,i)),Ib(function(){(He&6)===0&&Pi()}),l=null;else{switch(wi(h)){case 1:l=_o;break;case 4:l=gi;break;case 16:l=Vr;break;case 536870912:l=Au;break;default:l=Vr}l=Jy(l,zy.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function zy(i,o){if(Cc=-1,Ac=0,(He&6)!==0)throw Error(r(327));var l=i.callbackNode;if(qs()&&i.callbackNode!==l)return null;var h=Eo(i,i===Lt?Gt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=Pc(i,h);else{o=h;var p=He;He|=2;var v=Hy();(Lt!==i||Gt!==o)&&(ri=null,Hs=it()+500,Mo(i,o));do try{qb();break}catch(k){Gy(i,k)}while(!0);nf(),Ec.current=v,He=p,wt!==null?o=0:(Lt=null,Gt=0,o=At)}if(o!==0){if(o===2&&(p=Ir(i),p!==0&&(h=p,o=jf(i,p))),o===1)throw l=Il,Mo(i,0),Li(i,h),mr(i,it()),l;if(o===6)Li(i,h);else{if(p=i.current.alternate,(h&30)===0&&!Gb(p)&&(o=Pc(i,h),o===2&&(v=Ir(i),v!==0&&(h=v,o=jf(i,v))),o===1))throw l=Il,Mo(i,0),Li(i,h),mr(i,it()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(r(345));case 2:Vo(i,gr,ri);break;case 3:if(Li(i,h),(h&130023424)===h&&(o=Ff+500-it(),10<o)){if(Eo(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){lr(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Hh(Vo.bind(null,i,gr,ri),o);break}Vo(i,gr,ri);break;case 4:if(Li(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var T=31-or(h);v=1<<T,T=o[T],T>p&&(p=T),h&=~v}if(h=p,h=it()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*Wb(h/1960))-h,10<h){i.timeoutHandle=Hh(Vo.bind(null,i,gr,ri),h);break}Vo(i,gr,ri);break;case 5:Vo(i,gr,ri);break;default:throw Error(r(329))}}}return mr(i,it()),i.callbackNode===l?zy.bind(null,i):null}function jf(i,o){var l=Tl;return i.current.memoizedState.isDehydrated&&(Mo(i,o).flags|=256),i=Pc(i,o),i!==2&&(o=gr,gr=l,o!==null&&$f(o)),i}function $f(i){gr===null?gr=i:gr.push.apply(gr,i)}function Gb(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!ln(v(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Li(i,o){for(o&=~Vf,o&=~Ic,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-or(o),h=1<<l;i[l]=-1,o&=~h}}function Wy(i){if((He&6)!==0)throw Error(r(327));qs();var o=Eo(i,0);if((o&1)===0)return mr(i,it()),null;var l=Pc(i,o);if(i.tag!==0&&l===2){var h=Ir(i);h!==0&&(o=h,l=jf(i,h))}if(l===1)throw l=Il,Mo(i,0),Li(i,o),mr(i,it()),l;if(l===6)throw Error(r(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Vo(i,gr,ri),mr(i,it()),null}function zf(i,o){var l=He;He|=1;try{return i(o)}finally{He=l,He===0&&(Hs=it()+500,tc&&Pi())}}function Lo(i){Ni!==null&&Ni.tag===0&&(He&6)===0&&qs();var o=He;He|=1;var l=Wr.transition,h=ze;try{if(Wr.transition=null,ze=1,i)return i()}finally{ze=h,Wr.transition=l,He=o,(He&6)===0&&Pi()}}function Wf(){Ar=Gs.current,at(Gs)}function Mo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,Eb(l)),wt!==null)for(l=wt.return;l!==null;){var h=l;switch(Jh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Zu();break;case 3:$s(),at(hr),at(Yt),hf();break;case 5:cf(h);break;case 4:$s();break;case 13:at(dt);break;case 19:at(dt);break;case 10:of(h.type._context);break;case 22:case 23:Wf()}l=l.return}if(Lt=i,wt=i=Mi(i.current,null),Gt=Ar=o,At=0,Il=null,Vf=Ic=Oo=0,gr=Tl=null,ko!==null){for(o=0;o<ko.length;o++)if(l=ko[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,h.next=T}l.pending=h}ko=null}return i}function Gy(i,o){do{var l=wt;try{if(nf(),dc.current=gc,hc){for(var h=ht.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}hc=!1}if(No=0,Ot=Ct=ht=null,ml=!1,vl=0,Mf.current=null,l===null||l.return===null){At=1,Il=o,wt=null;break}e:{var v=i,T=l.return,k=l,M=o;if(o=Gt,k.flags|=32768,M!==null&&typeof M=="object"&&typeof M.then=="function"){var K=M,te=k,re=te.tag;if((te.mode&1)===0&&(re===0||re===11||re===15)){var Z=te.alternate;Z?(te.updateQueue=Z.updateQueue,te.memoizedState=Z.memoizedState,te.lanes=Z.lanes):(te.updateQueue=null,te.memoizedState=null)}var de=my(T);if(de!==null){de.flags&=-257,vy(de,T,k,v,o),de.mode&1&&gy(v,K,o),o=de,M=K;var ge=o.updateQueue;if(ge===null){var me=new Set;me.add(M),o.updateQueue=me}else ge.add(M);break e}else{if((o&1)===0){gy(v,K,o),Gf();break e}M=Error(r(426))}}else if(ct&&k.mode&1){var vt=my(T);if(vt!==null){(vt.flags&65536)===0&&(vt.flags|=256),vy(vt,T,k,v,o),tf(zs(M,k));break e}}v=M=zs(M,k),At!==4&&(At=2),Tl===null?Tl=[v]:Tl.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,o&=-o,v.lanes|=o;var H=fy(v,M,o);Uv(v,H);break e;case 1:k=M;var F=v.type,q=v.stateNode;if((v.flags&128)===0&&(typeof F.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(Di===null||!Di.has(q)))){v.flags|=65536,o&=-o,v.lanes|=o;var se=py(v,k,o);Uv(v,se);break e}}v=v.return}while(v!==null)}Ky(l)}catch(ve){o=ve,wt===l&&l!==null&&(wt=l=l.return);continue}break}while(!0)}function Hy(){var i=Ec.current;return Ec.current=gc,i===null?gc:i}function Gf(){(At===0||At===3||At===2)&&(At=4),Lt===null||(Oo&268435455)===0&&(Ic&268435455)===0||Li(Lt,Gt)}function Pc(i,o){var l=He;He|=2;var h=Hy();(Lt!==i||Gt!==o)&&(ri=null,Mo(i,o));do try{Hb();break}catch(p){Gy(i,p)}while(!0);if(nf(),He=l,Ec.current=h,wt!==null)throw Error(r(261));return Lt=null,Gt=0,At}function Hb(){for(;wt!==null;)qy(wt)}function qb(){for(;wt!==null&&!bu();)qy(wt)}function qy(i){var o=Xy(i.alternate,i,Ar);i.memoizedProps=i.pendingProps,o===null?Ky(i):wt=o,Mf.current=null}function Ky(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=Bb(l,o,Ar),l!==null){wt=l;return}}else{if(l=Ub(l,o),l!==null){l.flags&=32767,wt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{At=6,wt=null;return}}if(o=o.sibling,o!==null){wt=o;return}wt=o=i}while(o!==null);At===0&&(At=5)}function Vo(i,o,l){var h=ze,p=Wr.transition;try{Wr.transition=null,ze=1,Kb(i,o,l,h)}finally{Wr.transition=p,ze=h}return null}function Kb(i,o,l,h){do qs();while(Ni!==null);if((He&6)!==0)throw Error(r(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0;var v=l.lanes|l.childLanes;if(nt(i,v),i===Lt&&(wt=Lt=null,Gt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Sc||(Sc=!0,Jy(Vr,function(){return qs(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=Wr.transition,Wr.transition=null;var T=ze;ze=1;var k=He;He|=4,Mf.current=null,$b(i,l),Fy(l,i),pb(Wh),Ii=!!zh,Wh=zh=null,i.current=l,zb(l),Ah(),He=k,ze=T,Wr.transition=v}else i.current=l;if(Sc&&(Sc=!1,Ni=i,bc=p),v=i.pendingLanes,v===0&&(Di=null),Pu(l.stateNode),mr(i,it()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Tc)throw Tc=!1,i=Bf,Bf=null,i;return(bc&1)!==0&&i.tag!==0&&qs(),v=i.pendingLanes,(v&1)!==0?i===Uf?Sl++:(Sl=0,Uf=i):Sl=0,Pi(),null}function qs(){if(Ni!==null){var i=wi(bc),o=Wr.transition,l=ze;try{if(Wr.transition=null,ze=16>i?16:i,Ni===null)var h=!1;else{if(i=Ni,Ni=null,bc=0,(He&6)!==0)throw Error(r(331));var p=He;for(He|=4,fe=i.current;fe!==null;){var v=fe,T=v.child;if((fe.flags&16)!==0){var k=v.deletions;if(k!==null){for(var M=0;M<k.length;M++){var K=k[M];for(fe=K;fe!==null;){var te=fe;switch(te.tag){case 0:case 11:case 15:El(8,te,v)}var re=te.child;if(re!==null)re.return=te,fe=re;else for(;fe!==null;){te=fe;var Z=te.sibling,de=te.return;if(Ny(te),te===K){fe=null;break}if(Z!==null){Z.return=de,fe=Z;break}fe=de}}}var ge=v.alternate;if(ge!==null){var me=ge.child;if(me!==null){ge.child=null;do{var vt=me.sibling;me.sibling=null,me=vt}while(me!==null)}}fe=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,fe=T;else e:for(;fe!==null;){if(v=fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:El(9,v,v.return)}var H=v.sibling;if(H!==null){H.return=v.return,fe=H;break e}fe=v.return}}var F=i.current;for(fe=F;fe!==null;){T=fe;var q=T.child;if((T.subtreeFlags&2064)!==0&&q!==null)q.return=T,fe=q;else e:for(T=F;fe!==null;){if(k=fe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:wc(9,k)}}catch(ve){pt(k,k.return,ve)}if(k===T){fe=null;break e}var se=k.sibling;if(se!==null){se.return=k.return,fe=se;break e}fe=k.return}}if(He=p,Pi(),Er&&typeof Er.onPostCommitFiberRoot=="function")try{Er.onPostCommitFiberRoot(wo,i)}catch{}h=!0}return h}finally{ze=l,Wr.transition=o}}return!1}function Qy(i,o,l){o=zs(l,o),o=fy(i,o,1),i=xi(i,o,1),o=lr(),i!==null&&(yi(i,1,o),mr(i,o))}function pt(i,o,l){if(i.tag===3)Qy(i,i,l);else for(;o!==null;){if(o.tag===3){Qy(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Di===null||!Di.has(h))){i=zs(l,i),i=py(o,i,1),o=xi(o,i,1),i=lr(),o!==null&&(yi(o,1,i),mr(o,i));break}}o=o.return}}function Qb(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=lr(),i.pingedLanes|=i.suspendedLanes&l,Lt===i&&(Gt&l)===l&&(At===4||At===3&&(Gt&130023424)===Gt&&500>it()-Ff?Mo(i,0):Vf|=l),mr(i,o)}function Yy(i,o){o===0&&((i.mode&1)===0?o=1:(o=ms,ms<<=1,(ms&130023424)===0&&(ms=4194304)));var l=lr();i=Zn(i,o),i!==null&&(yi(i,o,l),mr(i,l))}function Yb(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),Yy(i,l)}function Xb(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(r(314))}h!==null&&h.delete(o),Yy(i,l)}var Xy;Xy=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||hr.current)pr=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return pr=!1,Fb(i,o,l);pr=(i.flags&131072)!==0}else pr=!1,ct&&(o.flags&1048576)!==0&&xv(o,nc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;yc(i,o),i=o.pendingProps;var p=Ls(o,Yt.current);js(o,l),p=gf(null,o,h,i,p,l);var v=mf();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,fr(h)?(v=!0,ec(o)):v=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,lf(o),p.updater=mc,o.stateNode=p,p._reactInternals=o,If(o,h,i,l),o=Cf(null,o,h,!0,v,l)):(o.tag=0,ct&&v&&Xh(o),ar(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(yc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=Zb(h),i=cn(h,i),p){case 0:o=bf(null,o,h,i,l);break e;case 1:o=Ty(null,o,h,i,l);break e;case 11:o=yy(null,o,h,i,l);break e;case 14:o=_y(null,o,h,cn(h.type,i),l);break e}throw Error(r(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:cn(h,p),bf(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:cn(h,p),Ty(i,o,h,p,l);case 3:e:{if(Sy(o),i===null)throw Error(r(387));h=o.pendingProps,v=o.memoizedState,p=v.element,Bv(i,o),uc(o,h,null,l);var T=o.memoizedState;if(h=T.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){p=zs(Error(r(423)),o),o=by(i,o,h,l,p);break e}else if(h!==p){p=zs(Error(r(424)),o),o=by(i,o,h,l,p);break e}else for(Cr=bi(o.stateNode.containerInfo.firstChild),br=o,ct=!0,un=null,l=Vv(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Fs(),h===p){o=ti(i,o,l);break e}ar(i,o,h,l)}o=o.child}return o;case 5:return $v(o),i===null&&ef(o),h=o.type,p=o.pendingProps,v=i!==null?i.memoizedProps:null,T=p.children,Gh(h,p)?T=null:v!==null&&Gh(h,v)&&(o.flags|=32),Iy(i,o),ar(i,o,T,l),o.child;case 6:return i===null&&ef(o),null;case 13:return Cy(i,o,l);case 4:return uf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Bs(o,null,h,l):ar(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:cn(h,p),yy(i,o,h,p,l);case 7:return ar(i,o,o.pendingProps,l),o.child;case 8:return ar(i,o,o.pendingProps.children,l),o.child;case 12:return ar(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,v=o.memoizedProps,T=p.value,ot(sc,h._currentValue),h._currentValue=T,v!==null)if(ln(v.value,T)){if(v.children===p.children&&!hr.current){o=ti(i,o,l);break e}}else for(v=o.child,v!==null&&(v.return=o);v!==null;){var k=v.dependencies;if(k!==null){T=v.child;for(var M=k.firstContext;M!==null;){if(M.context===h){if(v.tag===1){M=ei(-1,l&-l),M.tag=2;var K=v.updateQueue;if(K!==null){K=K.shared;var te=K.pending;te===null?M.next=M:(M.next=te.next,te.next=M),K.pending=M}}v.lanes|=l,M=v.alternate,M!==null&&(M.lanes|=l),sf(v.return,l,o),k.lanes|=l;break}M=M.next}}else if(v.tag===10)T=v.type===o.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(r(341));T.lanes|=l,k=T.alternate,k!==null&&(k.lanes|=l),sf(T,l,o),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===o){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}ar(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,js(o,l),p=$r(p),h=h(p),o.flags|=1,ar(i,o,h,l),o.child;case 14:return h=o.type,p=cn(h,o.pendingProps),p=cn(h.type,p),_y(i,o,h,p,l);case 15:return wy(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:cn(h,p),yc(i,o),o.tag=1,fr(h)?(i=!0,ec(o)):i=!1,js(o,l),dy(o,h,p),If(o,h,p,l),Cf(null,o,h,!0,i,l);case 19:return Py(i,o,l);case 22:return Ey(i,o,l)}throw Error(r(156,o.tag))};function Jy(i,o){return ps(i,o)}function Jb(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gr(i,o,l,h){return new Jb(i,o,l,h)}function Hf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Zb(i){if(typeof i=="function")return Hf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===U)return 11;if(i===Qe)return 14}return 2}function Mi(i,o){var l=i.alternate;return l===null?(l=Gr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Rc(i,o,l,h,p,v){var T=2;if(h=i,typeof i=="function")Hf(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case P:return Fo(l.children,p,v,o);case A:T=8,p|=8;break;case R:return i=Gr(12,l,o,p|2),i.elementType=R,i.lanes=v,i;case b:return i=Gr(13,l,o,p),i.elementType=b,i.lanes=v,i;case be:return i=Gr(19,l,o,p),i.elementType=be,i.lanes=v,i;case Me:return xc(l,p,v,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:T=10;break e;case L:T=9;break e;case U:T=11;break e;case Qe:T=14;break e;case Ye:T=16,h=null;break e}throw Error(r(130,i==null?i:typeof i,""))}return o=Gr(T,l,o,p),o.elementType=i,o.type=h,o.lanes=v,o}function Fo(i,o,l,h){return i=Gr(7,i,h,o),i.lanes=l,i}function xc(i,o,l,h){return i=Gr(22,i,h,o),i.elementType=Me,i.lanes=l,i.stateNode={isHidden:!1},i}function qf(i,o,l){return i=Gr(6,i,null,o),i.lanes=l,i}function Kf(i,o,l){return o=Gr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function eC(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Qf(i,o,l,h,p,v,T,k,M){return i=new eC(i,o,l,k,M),o===1?(o=1,v===!0&&(o|=8)):o=0,v=Gr(3,null,null,o),i.current=v,v.stateNode=i,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},lf(v),i}function tC(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Zy(i){if(!i)return Ai;i=i._reactInternals;e:{if(en(i)!==i||i.tag!==1)throw Error(r(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(fr(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(r(171))}if(i.tag===1){var l=i.type;if(fr(l))return Av(i,l,o)}return o}function e_(i,o,l,h,p,v,T,k,M){return i=Qf(l,h,!0,i,p,v,T,k,M),i.context=Zy(null),l=i.current,h=lr(),p=Oi(l),v=ei(h,p),v.callback=o??null,xi(l,v,p),i.current.lanes=p,yi(i,p,h),mr(i,h),i}function kc(i,o,l,h){var p=o.current,v=lr(),T=Oi(p);return l=Zy(l),o.context===null?o.context=l:o.pendingContext=l,o=ei(v,T),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=xi(p,o,T),i!==null&&(fn(i,p,T,v),lc(i,p,T)),T}function Dc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function t_(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Yf(i,o){t_(i,o),(i=i.alternate)&&t_(i,o)}function rC(){return null}var r_=typeof reportError=="function"?reportError:function(i){console.error(i)};function Xf(i){this._internalRoot=i}Nc.prototype.render=Xf.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(r(409));kc(i,o,null,null)},Nc.prototype.unmount=Xf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Lo(function(){kc(null,i,null,null)}),o[Qn]=null}};function Nc(i){this._internalRoot=i}Nc.prototype.unstable_scheduleHydration=function(i){if(i){var o=Nu();i={blockedOn:null,target:i,priority:o};for(var l=0;l<In.length&&o!==0&&o<In[l].priority;l++);In.splice(l,0,i),l===0&&Mu(i)}};function Jf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Oc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function n_(){}function nC(i,o,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var K=Dc(T);v.call(K)}}var T=e_(o,h,i,0,null,!1,!1,"",n_);return i._reactRootContainer=T,i[Qn]=T.current,ll(i.nodeType===8?i.parentNode:i),Lo(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var k=h;h=function(){var K=Dc(M);k.call(K)}}var M=Qf(i,0,!1,null,null,!1,!1,"",n_);return i._reactRootContainer=M,i[Qn]=M.current,ll(i.nodeType===8?i.parentNode:i),Lo(function(){kc(o,M,l,h)}),M}function Lc(i,o,l,h,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var k=p;p=function(){var M=Dc(T);k.call(M)}}kc(o,T,i,p)}else T=nC(l,o,i,p,h);return Dc(T)}ku=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=mi(o.pendingLanes);l!==0&&(_i(o,l|1),mr(o,it()),(He&6)===0&&(Hs=it()+500,Pi()))}break;case 13:Lo(function(){var h=Zn(i,1);if(h!==null){var p=lr();fn(h,i,1,p)}}),Yf(i,1)}},vs=function(i){if(i.tag===13){var o=Zn(i,134217728);if(o!==null){var l=lr();fn(o,i,134217728,l)}Yf(i,134217728)}},Du=function(i){if(i.tag===13){var o=Oi(i),l=Zn(i,o);if(l!==null){var h=lr();fn(l,i,o,h)}Yf(i,o)}},Nu=function(){return ze},Ou=function(i,o){var l=ze;try{return ze=i,o()}finally{ze=l}},ls=function(i,o,l){switch(o){case"input":if(Un(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Ju(h);if(!p)throw Error(r(90));Dt(h),Un(h,p)}}}break;case"textarea":ss(i,l);break;case"select":o=l.value,o!=null&&jn(i,!!l.multiple,o,!1)}},go=zf,za=Lo;var iC={usingClientEntryPoint:!1,Events:[dl,Ns,Ju,wn,$a,zf]},bl={findFiberByHostInstance:Ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oC={bundleType:bl.bundleType,version:bl.version,rendererPackageName:bl.rendererPackageName,rendererConfig:bl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Ha(i),i===null?null:i.stateNode},findFiberByHostInstance:bl.findFiberByHostInstance||rC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{wo=Mc.inject(oC),Er=Mc}catch{}}return vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iC,vr.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jf(o))throw Error(r(200));return tC(i,o,null,l)},vr.createRoot=function(i,o){if(!Jf(i))throw Error(r(299));var l=!1,h="",p=r_;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Qf(i,1,!1,null,null,l,!1,h,p),i[Qn]=o.current,ll(i.nodeType===8?i.parentNode:i),new Xf(o)},vr.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=Ha(o),i=i===null?null:i.stateNode,i},vr.flushSync=function(i){return Lo(i)},vr.hydrate=function(i,o,l){if(!Oc(o))throw Error(r(200));return Lc(null,i,o,!0,l)},vr.hydrateRoot=function(i,o,l){if(!Jf(i))throw Error(r(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",T=r_;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),o=e_(o,null,i,1,l??null,p,!1,v,T),i[Qn]=o.current,ll(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Nc(o)},vr.render=function(i,o,l){if(!Oc(o))throw Error(r(200));return Lc(null,i,o,!1,l)},vr.unmountComponentAtNode=function(i){if(!Oc(i))throw Error(r(40));return i._reactRootContainer?(Lo(function(){Lc(null,null,i,!1,function(){i._reactRootContainer=null,i[Qn]=null})}),!0):!1},vr.unstable_batchedUpdates=zf,vr.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Oc(l))throw Error(r(200));if(i==null||i._reactInternals===void 0)throw Error(r(38));return Lc(i,o,l,!1,h)},vr.version="18.3.1-next-f1338f8080-20240426",vr}var d_;function eE(){if(d_)return tp.exports;d_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),tp.exports=hC(),tp.exports}var h_;function fC(){if(h_)return Vc;h_=1;var t=eE();return Vc.createRoot=t.createRoot,Vc.hydrateRoot=t.hydrateRoot,Vc}var pC=fC(),Bt=function(){return Bt=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Bt.apply(this,arguments)};function Pg(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r}function Gl(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,a;n<s;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))}var oe=Ag();const je=Gd(oe);var lt="-ms-",Vl="-moz-",Je="-webkit-",tE="comm",Hd="rule",Rg="decl",gC="@import",rE="@keyframes",mC="@layer",nE=Math.abs,xg=String.fromCharCode,Up=Object.assign;function vC(t,e){return Ft(t,0)^45?(((e<<2^Ft(t,0))<<2^Ft(t,1))<<2^Ft(t,2))<<2^Ft(t,3):0}function iE(t){return t.trim()}function ni(t,e){return(t=e.exec(t))?t[0]:t}function Le(t,e,r){return t.replace(e,r)}function Yc(t,e,r){return t.indexOf(e,r)}function Ft(t,e){return t.charCodeAt(e)|0}function aa(t,e,r){return t.slice(e,r)}function kn(t){return t.length}function oE(t){return t.length}function kl(t,e){return e.push(t),t}function yC(t,e){return t.map(e).join("")}function f_(t,e){return t.filter(function(r){return!ni(r,e)})}var qd=1,la=1,sE=0,Xr=0,It=0,Ta="";function Kd(t,e,r,n,s,a,u,d){return{value:t,root:e,parent:r,type:n,props:s,children:a,line:qd,column:la,length:u,return:"",siblings:d}}function Bi(t,e){return Up(Kd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Ks(t){for(;t.root;)t=Bi(t.root,{children:[t]});kl(t,t.siblings)}function _C(){return It}function wC(){return It=Xr>0?Ft(Ta,--Xr):0,la--,It===10&&(la=1,qd--),It}function vn(){return It=Xr<sE?Ft(Ta,Xr++):0,la++,It===10&&(la=1,qd++),It}function Wo(){return Ft(Ta,Xr)}function Xc(){return Xr}function Qd(t,e){return aa(Ta,t,e)}function jp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function EC(t){return qd=la=1,sE=kn(Ta=t),Xr=0,[]}function IC(t){return Ta="",t}function ip(t){return iE(Qd(Xr-1,$p(t===91?t+2:t===40?t+1:t)))}function TC(t){for(;(It=Wo())&&It<33;)vn();return jp(t)>2||jp(It)>3?"":" "}function SC(t,e){for(;--e&&vn()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return Qd(t,Xc()+(e<6&&Wo()==32&&vn()==32))}function $p(t){for(;vn();)switch(It){case t:return Xr;case 34:case 39:t!==34&&t!==39&&$p(It);break;case 40:t===41&&$p(t);break;case 92:vn();break}return Xr}function bC(t,e){for(;vn()&&t+It!==57;)if(t+It===84&&Wo()===47)break;return"/*"+Qd(e,Xr-1)+"*"+xg(t===47?t:vn())}function CC(t){for(;!jp(Wo());)vn();return Qd(t,Xr)}function AC(t){return IC(Jc("",null,null,null,[""],t=EC(t),0,[0],t))}function Jc(t,e,r,n,s,a,u,d,f){for(var g=0,y=0,_=u,w=0,I=0,C=0,D=1,x=1,O=1,V=0,j="",$=s,W=a,Q=n,P=j;x;)switch(C=V,V=vn()){case 40:if(C!=108&&Ft(P,_-1)==58){Yc(P+=Le(ip(V),"&","&\f"),"&\f",nE(g?d[g-1]:0))!=-1&&(O=-1);break}case 34:case 39:case 91:P+=ip(V);break;case 9:case 10:case 13:case 32:P+=TC(C);break;case 92:P+=SC(Xc()-1,7);continue;case 47:switch(Wo()){case 42:case 47:kl(PC(bC(vn(),Xc()),e,r,f),f);break;default:P+="/"}break;case 123*D:d[g++]=kn(P)*O;case 125*D:case 59:case 0:switch(V){case 0:case 125:x=0;case 59+y:O==-1&&(P=Le(P,/\f/g,"")),I>0&&kn(P)-_&&kl(I>32?g_(P+";",n,r,_-1,f):g_(Le(P," ","")+";",n,r,_-2,f),f);break;case 59:P+=";";default:if(kl(Q=p_(P,e,r,g,y,s,d,j,$=[],W=[],_,a),a),V===123)if(y===0)Jc(P,e,Q,Q,$,a,_,d,W);else switch(w===99&&Ft(P,3)===110?100:w){case 100:case 108:case 109:case 115:Jc(t,Q,Q,n&&kl(p_(t,Q,Q,0,0,s,d,j,s,$=[],_,W),W),s,W,_,d,n?$:W);break;default:Jc(P,Q,Q,Q,[""],W,0,d,W)}}g=y=I=0,D=O=1,j=P="",_=u;break;case 58:_=1+kn(P),I=C;default:if(D<1){if(V==123)--D;else if(V==125&&D++==0&&wC()==125)continue}switch(P+=xg(V),V*D){case 38:O=y>0?1:(P+="\f",-1);break;case 44:d[g++]=(kn(P)-1)*O,O=1;break;case 64:Wo()===45&&(P+=ip(vn())),w=Wo(),y=_=kn(j=P+=CC(Xc())),V++;break;case 45:C===45&&kn(P)==2&&(D=0)}}return a}function p_(t,e,r,n,s,a,u,d,f,g,y,_){for(var w=s-1,I=s===0?a:[""],C=oE(I),D=0,x=0,O=0;D<n;++D)for(var V=0,j=aa(t,w+1,w=nE(x=u[D])),$=t;V<C;++V)($=iE(x>0?I[V]+" "+j:Le(j,/&\f/g,I[V])))&&(f[O++]=$);return Kd(t,e,r,s===0?Hd:d,f,g,y,_)}function PC(t,e,r,n){return Kd(t,e,r,tE,xg(_C()),aa(t,2,-2),0,n)}function g_(t,e,r,n,s){return Kd(t,e,r,Rg,aa(t,0,n),aa(t,n+1,-1),n,s)}function aE(t,e,r){switch(vC(t,e)){case 5103:return Je+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Je+t+t;case 4789:return Vl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Je+t+Vl+t+lt+t+t;case 5936:switch(Ft(t,e+11)){case 114:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Je+t+lt+t+t;case 6165:return Je+t+lt+"flex-"+t+t;case 5187:return Je+t+Le(t,/(\w+).+(:[^]+)/,Je+"box-$1$2"+lt+"flex-$1$2")+t;case 5443:return Je+t+lt+"flex-item-"+Le(t,/flex-|-self/g,"")+(ni(t,/flex-|baseline/)?"":lt+"grid-row-"+Le(t,/flex-|-self/g,""))+t;case 4675:return Je+t+lt+"flex-line-pack"+Le(t,/align-content|flex-|-self/g,"")+t;case 5548:return Je+t+lt+Le(t,"shrink","negative")+t;case 5292:return Je+t+lt+Le(t,"basis","preferred-size")+t;case 6060:return Je+"box-"+Le(t,"-grow","")+Je+t+lt+Le(t,"grow","positive")+t;case 4554:return Je+Le(t,/([^-])(transform)/g,"$1"+Je+"$2")+t;case 6187:return Le(Le(Le(t,/(zoom-|grab)/,Je+"$1"),/(image-set)/,Je+"$1"),t,"")+t;case 5495:case 3959:return Le(t,/(image-set\([^]*)/,Je+"$1$`$1");case 4968:return Le(Le(t,/(.+:)(flex-)?(.*)/,Je+"box-pack:$3"+lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Je+t+t;case 4200:if(!ni(t,/flex-|baseline/))return lt+"grid-column-align"+aa(t,e)+t;break;case 2592:case 3360:return lt+Le(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,ni(n.props,/grid-\w+-end/)})?~Yc(t+(r=r[e].value),"span",0)?t:lt+Le(t,"-start","")+t+lt+"grid-row-span:"+(~Yc(r,"span",0)?ni(r,/\d+/):+ni(r,/\d+/)-+ni(t,/\d+/))+";":lt+Le(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return ni(n.props,/grid-\w+-start/)})?t:lt+Le(Le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Le(t,/(.+)-inline(.+)/,Je+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kn(t)-1-e>6)switch(Ft(t,e+1)){case 109:if(Ft(t,e+4)!==45)break;case 102:return Le(t,/(.+:)(.+)-([^]+)/,"$1"+Je+"$2-$3$1"+Vl+(Ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Yc(t,"stretch",0)?aE(Le(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return Le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,a,u,d,f,g){return lt+s+":"+a+g+(u?lt+s+"-span:"+(d?f:+f-+a)+g:"")+t});case 4949:if(Ft(t,e+6)===121)return Le(t,":",":"+Je)+t;break;case 6444:switch(Ft(t,Ft(t,14)===45?18:11)){case 120:return Le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Je+(Ft(t,14)===45?"inline-":"")+"box$3$1"+Je+"$2$3$1"+lt+"$2box$3")+t;case 100:return Le(t,":",":"+lt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(t,"scroll-","scroll-snap-")+t}return t}function hd(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function RC(t,e,r,n){switch(t.type){case mC:if(t.children.length)break;case gC:case Rg:return t.return=t.return||t.value;case tE:return"";case rE:return t.return=t.value+"{"+hd(t.children,n)+"}";case Hd:if(!kn(t.value=t.props.join(",")))return""}return kn(r=hd(t.children,n))?t.return=t.value+"{"+r+"}":""}function xC(t){var e=oE(t);return function(r,n,s,a){for(var u="",d=0;d<e;d++)u+=t[d](r,n,s,a)||"";return u}}function kC(t){return function(e){e.root||(e=e.return)&&t(e)}}function DC(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Rg:t.return=aE(t.value,t.length,r);return;case rE:return hd([Bi(t,{value:Le(t.value,"@","@"+Je)})],n);case Hd:if(t.length)return yC(r=t.props,function(s){switch(ni(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ks(Bi(t,{props:[Le(s,/:(read-\w+)/,":"+Vl+"$1")]})),Ks(Bi(t,{props:[s]})),Up(t,{props:f_(r,n)});break;case"::placeholder":Ks(Bi(t,{props:[Le(s,/:(plac\w+)/,":"+Je+"input-$1")]})),Ks(Bi(t,{props:[Le(s,/:(plac\w+)/,":"+Vl+"$1")]})),Ks(Bi(t,{props:[Le(s,/:(plac\w+)/,lt+"input-$1")]})),Ks(Bi(t,{props:[s]})),Up(t,{props:f_(r,n)});break}return""})}}var NC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pr={},ua=typeof process<"u"&&Pr!==void 0&&(Pr.REACT_APP_SC_ATTR||Pr.SC_ATTR)||"data-styled",lE="active",uE="data-styled-version",Yd="6.1.13",kg=`/*!sc*/
`,fd=typeof window<"u"&&"HTMLElement"in window,OC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pr!==void 0&&Pr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pr.REACT_APP_SC_DISABLE_SPEEDY!==""?Pr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pr!==void 0&&Pr.SC_DISABLE_SPEEDY!==void 0&&Pr.SC_DISABLE_SPEEDY!==""&&Pr.SC_DISABLE_SPEEDY!=="false"&&Pr.SC_DISABLE_SPEEDY),LC={},Xd=Object.freeze([]),ca=Object.freeze({});function cE(t,e,r){return r===void 0&&(r=ca),t.theme!==r.theme&&t.theme||e||r.theme}var dE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),MC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,VC=/(^-|-$)/g;function m_(t){return t.replace(MC,"-").replace(VC,"")}var FC=/(a)(d)/gi,Fc=52,v_=function(t){return String.fromCharCode(t+(t>25?39:97))};function zp(t){var e,r="";for(e=Math.abs(t);e>Fc;e=e/Fc|0)r=v_(e%Fc)+r;return(v_(e%Fc)+r).replace(FC,"$1-$2")}var op,hE=5381,ta=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},fE=function(t){return ta(hE,t)};function pE(t){return zp(fE(t)>>>0)}function BC(t){return t.displayName||t.name||"Component"}function sp(t){return typeof t=="string"&&!0}var gE=typeof Symbol=="function"&&Symbol.for,mE=gE?Symbol.for("react.memo"):60115,UC=gE?Symbol.for("react.forward_ref"):60112,jC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$C={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zC=((op={})[UC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},op[mE]=vE,op);function y_(t){return("type"in(e=t)&&e.type.$$typeof)===mE?vE:"$$typeof"in t?zC[t.$$typeof]:jC;var e}var WC=Object.defineProperty,GC=Object.getOwnPropertyNames,__=Object.getOwnPropertySymbols,HC=Object.getOwnPropertyDescriptor,qC=Object.getPrototypeOf,w_=Object.prototype;function yE(t,e,r){if(typeof e!="string"){if(w_){var n=qC(e);n&&n!==w_&&yE(t,n,r)}var s=GC(e);__&&(s=s.concat(__(e)));for(var a=y_(t),u=y_(e),d=0;d<s.length;++d){var f=s[d];if(!(f in $C||r&&r[f]||u&&f in u||a&&f in a)){var g=HC(e,f);try{WC(t,f,g)}catch{}}}}return t}function Go(t){return typeof t=="function"}function Dg(t){return typeof t=="object"&&"styledComponentId"in t}function $o(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Wp(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function Hl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function Gp(t,e,r){if(r===void 0&&(r=!1),!r&&!Hl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=Gp(t[n],e[n]);else if(Hl(e))for(var n in e)t[n]=Gp(t[n],e[n]);return t}function Ng(t,e){Object.defineProperty(t,"toString",{value:e})}function Ho(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var KC=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,a=s;e>=a;)if((a<<=1)<0)throw Ho(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var u=s;u<a;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),f=(u=0,r.length);u<f;u++)this.tag.insertRule(d,r[u])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var a=n;a<s;a++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),a=s+n,u=s;u<a;u++)r+="".concat(this.tag.getRule(u)).concat(kg);return r},t}(),Zc=new Map,pd=new Map,ed=1,Bc=function(t){if(Zc.has(t))return Zc.get(t);for(;pd.has(ed);)ed++;var e=ed++;return Zc.set(t,e),pd.set(e,t),e},QC=function(t,e){ed=e+1,Zc.set(t,e),pd.set(e,t)},YC="style[".concat(ua,"][").concat(uE,'="').concat(Yd,'"]'),XC=new RegExp("^".concat(ua,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),JC=function(t,e,r){for(var n,s=r.split(","),a=0,u=s.length;a<u;a++)(n=s[a])&&t.registerName(e,n)},ZC=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(kg),s=[],a=0,u=n.length;a<u;a++){var d=n[a].trim();if(d){var f=d.match(XC);if(f){var g=0|parseInt(f[1],10),y=f[2];g!==0&&(QC(y,g),JC(t,y,f[3]),t.getTag().insertRules(g,s)),s.length=0}else s.push(d)}}},E_=function(t){for(var e=document.querySelectorAll(YC),r=0,n=e.length;r<n;r++){var s=e[r];s&&s.getAttribute(ua)!==lE&&(ZC(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function eA(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var _E=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(d){var f=Array.from(d.querySelectorAll("style[".concat(ua,"]")));return f[f.length-1]}(r),a=s!==void 0?s.nextSibling:null;n.setAttribute(ua,lE),n.setAttribute(uE,Yd);var u=eA();return u&&n.setAttribute("nonce",u),r.insertBefore(n,a),n},tA=function(){function t(e){this.element=_E(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,a=n.length;s<a;s++){var u=n[s];if(u.ownerNode===r)return u}throw Ho(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),rA=function(){function t(e){this.element=_E(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),nA=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),I_=fd,iA={isServer:!fd,useCSSOMInjection:!OC},gd=function(){function t(e,r,n){e===void 0&&(e=ca),r===void 0&&(r={});var s=this;this.options=Bt(Bt({},iA),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&fd&&I_&&(I_=!1,E_(this)),Ng(this,function(){return function(a){for(var u=a.getTag(),d=u.length,f="",g=function(_){var w=function(O){return pd.get(O)}(_);if(w===void 0)return"continue";var I=a.names.get(w),C=u.getGroup(_);if(I===void 0||!I.size||C.length===0)return"continue";var D="".concat(ua,".g").concat(_,'[id="').concat(w,'"]'),x="";I!==void 0&&I.forEach(function(O){O.length>0&&(x+="".concat(O,","))}),f+="".concat(C).concat(D,'{content:"').concat(x,'"}').concat(kg)},y=0;y<d;y++)g(y);return f}(s)})}return t.registerId=function(e){return Bc(e)},t.prototype.rehydrate=function(){!this.server&&fd&&E_(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(Bt(Bt({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new nA(s):n?new tA(s):new rA(s)}(this.options),new KC(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(Bc(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(Bc(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Bc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),oA=/&/g,sA=/^\s*\/\/.*$/gm;function wE(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=wE(r.children,e)),r})}function aA(t){var e,r,n,s=ca,a=s.options,u=a===void 0?ca:a,d=s.plugins,f=d===void 0?Xd:d,g=function(w,I,C){return C.startsWith(r)&&C.endsWith(r)&&C.replaceAll(r,"").length>0?".".concat(e):w},y=f.slice();y.push(function(w){w.type===Hd&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(oA,r).replace(n,g))}),u.prefix&&y.push(DC),y.push(RC);var _=function(w,I,C,D){I===void 0&&(I=""),C===void 0&&(C=""),D===void 0&&(D="&"),e=D,r=I,n=new RegExp("\\".concat(r,"\\b"),"g");var x=w.replace(sA,""),O=AC(C||I?"".concat(C," ").concat(I," { ").concat(x," }"):x);u.namespace&&(O=wE(O,u.namespace));var V=[];return hd(O,xC(y.concat(kC(function(j){return V.push(j)})))),V};return _.hash=f.length?f.reduce(function(w,I){return I.name||Ho(15),ta(w,I.name)},hE).toString():"",_}var lA=new gd,Hp=aA(),EE=je.createContext({shouldForwardProp:void 0,styleSheet:lA,stylis:Hp});EE.Consumer;je.createContext(void 0);function qp(){return oe.useContext(EE)}var uA=function(){function t(e,r){var n=this;this.inject=function(s,a){a===void 0&&(a=Hp);var u=n.name+a.hash;s.hasNameForId(n.id,u)||s.insertRules(n.id,u,a(n.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,Ng(this,function(){throw Ho(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Hp),this.name+e.hash},t}(),cA=function(t){return t>="A"&&t<="Z"};function T_(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;cA(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var IE=function(t){return t==null||t===!1||t===""},TE=function(t){var e,r,n=[];for(var s in t){var a=t[s];t.hasOwnProperty(s)&&!IE(a)&&(Array.isArray(a)&&a.isCss||Go(a)?n.push("".concat(T_(s),":"),a,";"):Hl(a)?n.push.apply(n,Gl(Gl(["".concat(s," {")],TE(a),!1),["}"],!1)):n.push("".concat(T_(s),": ").concat((e=s,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in NC||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Gi(t,e,r,n){if(IE(t))return[];if(Dg(t))return[".".concat(t.styledComponentId)];if(Go(t)){if(!Go(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var s=t(e);return Gi(s,e,r,n)}var a;return t instanceof uA?r?(t.inject(r,n),[t.getName(n)]):[t]:Hl(t)?TE(t):Array.isArray(t)?Array.prototype.concat.apply(Xd,t.map(function(u){return Gi(u,e,r,n)})):[t.toString()]}function SE(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(Go(r)&&!Dg(r))return!1}return!0}var dA=fE(Yd),hA=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&SE(e),this.componentId=r,this.baseHash=ta(dA,r),this.baseStyle=n,gd.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=$o(s,this.staticRulesId);else{var a=Wp(Gi(this.rules,e,r,n)),u=zp(ta(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,u)){var d=n(a,".".concat(u),void 0,this.componentId);r.insertRules(this.componentId,u,d)}s=$o(s,u),this.staticRulesId=u}else{for(var f=ta(this.baseHash,n.hash),g="",y=0;y<this.rules.length;y++){var _=this.rules[y];if(typeof _=="string")g+=_;else if(_){var w=Wp(Gi(_,e,r,n));f=ta(f,w+y),g+=w}}if(g){var I=zp(f>>>0);r.hasNameForId(this.componentId,I)||r.insertRules(this.componentId,I,n(g,".".concat(I),void 0,this.componentId)),s=$o(s,I)}}return s},t}(),ql=je.createContext(void 0);ql.Consumer;function fA(t){var e=je.useContext(ql),r=oe.useMemo(function(){return function(n,s){if(!n)throw Ho(14);if(Go(n)){var a=n(s);return a}if(Array.isArray(n)||typeof n!="object")throw Ho(8);return s?Bt(Bt({},s),n):n}(t.theme,e)},[t.theme,e]);return t.children?je.createElement(ql.Provider,{value:r},t.children):null}var ap={};function pA(t,e,r){var n=Dg(t),s=t,a=!sp(t),u=e.attrs,d=u===void 0?Xd:u,f=e.componentId,g=f===void 0?function($,W){var Q=typeof $!="string"?"sc":m_($);ap[Q]=(ap[Q]||0)+1;var P="".concat(Q,"-").concat(pE(Yd+Q+ap[Q]));return W?"".concat(W,"-").concat(P):P}(e.displayName,e.parentComponentId):f,y=e.displayName,_=y===void 0?function($){return sp($)?"styled.".concat($):"Styled(".concat(BC($),")")}(t):y,w=e.displayName&&e.componentId?"".concat(m_(e.displayName),"-").concat(e.componentId):e.componentId||g,I=n&&s.attrs?s.attrs.concat(d).filter(Boolean):d,C=e.shouldForwardProp;if(n&&s.shouldForwardProp){var D=s.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;C=function($,W){return D($,W)&&x($,W)}}else C=D}var O=new hA(r,w,n?s.componentStyle:void 0);function V($,W){return function(Q,P,A){var R=Q.attrs,N=Q.componentStyle,L=Q.defaultProps,U=Q.foldedComponentIds,b=Q.styledComponentId,be=Q.target,Qe=je.useContext(ql),Ye=qp(),Me=Q.shouldForwardProp||Ye.shouldForwardProp,ie=cE(P,Qe,L)||ca,ce=function(_e,xe,Oe){for(var Ne,Fe=Bt(Bt({},xe),{className:void 0,theme:Oe}),et=0;et<_e.length;et+=1){var kt=Go(Ne=_e[et])?Ne(Fe):Ne;for(var Dt in kt)Fe[Dt]=Dt==="className"?$o(Fe[Dt],kt[Dt]):Dt==="style"?Bt(Bt({},Fe[Dt]),kt[Dt]):kt[Dt]}return xe.className&&(Fe.className=$o(Fe.className,xe.className)),Fe}(R,P,ie),ae=ce.as||be,B={};for(var X in ce)ce[X]===void 0||X[0]==="$"||X==="as"||X==="theme"&&ce.theme===ie||(X==="forwardedAs"?B.as=ce.forwardedAs:Me&&!Me(X,ae)||(B[X]=ce[X]));var pe=function(_e,xe){var Oe=qp(),Ne=_e.generateAndInjectStyles(xe,Oe.styleSheet,Oe.stylis);return Ne}(N,ce),Ae=$o(U,b);return pe&&(Ae+=" "+pe),ce.className&&(Ae+=" "+ce.className),B[sp(ae)&&!dE.has(ae)?"class":"className"]=Ae,B.ref=A,oe.createElement(ae,B)}(j,$,W)}V.displayName=_;var j=je.forwardRef(V);return j.attrs=I,j.componentStyle=O,j.displayName=_,j.shouldForwardProp=C,j.foldedComponentIds=n?$o(s.foldedComponentIds,s.styledComponentId):"",j.styledComponentId=w,j.target=n?s.target:t,Object.defineProperty(j,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function($){this._foldedDefaultProps=n?function(W){for(var Q=[],P=1;P<arguments.length;P++)Q[P-1]=arguments[P];for(var A=0,R=Q;A<R.length;A++)Gp(W,R[A],!0);return W}({},s.defaultProps,$):$}}),Ng(j,function(){return".".concat(j.styledComponentId)}),a&&yE(j,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}function S_(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var b_=function(t){return Object.assign(t,{isCss:!0})};function bE(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Go(t)||Hl(t))return b_(Gi(S_(Xd,Gl([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?Gi(n):b_(Gi(S_(n,e)))}function Kp(t,e,r){if(r===void 0&&(r=ca),!e)throw Ho(1,e);var n=function(s){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return t(e,r,bE.apply(void 0,Gl([s],a,!1)))};return n.attrs=function(s){return Kp(t,e,Bt(Bt({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Kp(t,e,Bt(Bt({},r),s))},n}var CE=function(t){return Kp(pA,t)},ee=CE;dE.forEach(function(t){ee[t]=CE(t)});var gA=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=SE(e),gd.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,s){var a=s(Wp(Gi(this.rules,r,n,s)),""),u=this.componentId+e;n.insertRules(u,u,a)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,s){e>2&&gd.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,s)},t}();function mA(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=bE.apply(void 0,Gl([t],e,!1)),s="sc-global-".concat(pE(JSON.stringify(n))),a=new gA(n,s),u=function(f){var g=qp(),y=je.useContext(ql),_=je.useRef(g.styleSheet.allocateGSInstance(s)).current;return g.styleSheet.server&&d(_,f,g.styleSheet,y,g.stylis),je.useLayoutEffect(function(){if(!g.styleSheet.server)return d(_,f,g.styleSheet,y,g.stylis),function(){return a.removeStyles(_,g.styleSheet)}},[_,f,g.styleSheet,y,g.stylis]),null};function d(f,g,y,_,w){if(a.isStatic)a.renderStyles(f,LC,y,w);else{var I=Bt(Bt({},g),{theme:cE(g,_,u.defaultProps)});a.renderStyles(f,I,y,w)}}return je.memo(u)}const vA=ee.div`
  width: 1500px;
`,yA=mA`
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
`,_A=ee.div`
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
`,wA=ee.div`
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
`,EA=ee.aside`
  display: flex;
  flex-direction: column;
`,IA=ee.div`
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
`,TA=ee.button`
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
`,SA=ee.header`
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
`,bA=ee.div`
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
`;var lp={exports:{}},up,C_;function CA(){if(C_)return up;C_=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return up=t,up}var cp,A_;function AA(){if(A_)return cp;A_=1;var t=CA();function e(){}function r(){}return r.resetWarningCache=e,cp=function(){function n(u,d,f,g,y,_){if(_!==t){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}n.isRequired=n;function s(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:s,element:n,elementType:n,instanceOf:s,node:n,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:e};return a.PropTypes=a,a},cp}var P_;function PA(){return P_||(P_=1,lp.exports=AA()()),lp.exports}var RA=PA();const si=Gd(RA),AE=ee.div`
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
`,xA=ee.input`
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
`,kA=ee.img`
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
`,DA=()=>z.jsxs(AE,{children:[z.jsx(kA,{src:"icon/search_icon.svg","aria-hidden":"true",alt:""}),z.jsx(xA,{"aria-label":"Search on your page",type:"text",placeholder:"Search for anything..."})]}),R_=ee.div`
  display: flex;
`,NA=ee.div`
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
`,OA=ee.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,LA=ee.div`
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
`,MA=ee.button`
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
`,x_=ee.img``,VA=ee.div`
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
`,FA=ee.span`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,BA=ee.span`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,UA=ee.img`
  margin-right: 0.8rem;
  object-fit: cover;
  object-position: top;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`,jA=ee.button`
  cursor: pointer;
  background-color: transparent;
`;ee.img`
  width: 1.5rem;
  height: 1.5rem;
`;const $A=ee.div`
  position: absolute;
  top: 100%;
  right: 3%;
  width: 10rem;
  height: 10rem;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`;ee(AE)`
  margin: 0;
  border-radius: 0;
  padding: 0;
  display: block;
`;const da={mobile:"425px",mobileL:"600px",tablet:"768px",desktop:"1024px",headerSize:{mobileHeight:"3rem",tabletHeight:"4rem",desktopHeight:"5.5rem"},fonts:{primaryFont:"'Inter', sans-serif"},colors:{primaryLightBackground:"#fff",secondaryLightBackground:"#f5f5f5",primaryDarkBackground:"#0D062D",secondaryDarkBackground:"#E0E0E0",hoverBackground:"rgba(80, 48, 229, 0.08)",borderLineColor:"1px solid rgb(219, 219, 219)",darkBlue:" #5030E5",lightBlue:"rgb(34, 1, 179)",darkText:"#0D062D",lightText:"#625F6D"}},zA=ee.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`,WA=ee.form`
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 300px;

  @media (max-width: ${da.mobileL}) {
    padding: 1.5rem;
  }
  @media (max-width: ${da.mobile}) {
    padding: 1rem;
  }
`,GA=ee.h2`
  color: ${({theme:t})=>t.colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`,dp=ee.div`
  margin-bottom: 1.2rem;
`,hp=ee.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${da.colors.lightBlue};
  }
`,Og=ee.button`
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
`,HA=ee(Og)``,qA=ee.p`
  text-align: center;
  margin-top: 1rem;
  color: ${({theme:t})=>t.colors.lightText};
`,KA=ee.span`
  color: ${({theme:t})=>t.colors.darkBlue};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,k_=ee.div`
  font-weight: 500;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 3000ms;

  span {
    color: #ff0000b5;
  }
`,QA=ee.div`
  display: flex;
  justify-content: end;
  width: 100%;
`,Sa=oe.createContext({isLoggedIn:!1,setIsLoggedIn:()=>{},showLoginForm:!1,setShowLoginForm:()=>{},mode:"login",setMode:()=>{},loggedUser:null,setLoggedUser:()=>{}}),YA=()=>{};var D_={};/**
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
 */const PE=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);s<128?e[r++]=s:s<2048?(e[r++]=s>>6|192,e[r++]=s&63|128):(s&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=s>>18|240,e[r++]=s>>12&63|128,e[r++]=s>>6&63|128,e[r++]=s&63|128):(e[r++]=s>>12|224,e[r++]=s>>6&63|128,e[r++]=s&63|128)}return e},XA=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const s=t[r++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[r++];e[n++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[r++],u=t[r++],d=t[r++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[n++]=String.fromCharCode(55296+(f>>10)),e[n++]=String.fromCharCode(56320+(f&1023))}else{const a=t[r++],u=t[r++];e[n++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},RE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<t.length;s+=3){const a=t[s],u=s+1<t.length,d=u?t[s+1]:0,f=s+2<t.length,g=f?t[s+2]:0,y=a>>2,_=(a&3)<<4|d>>4;let w=(d&15)<<2|g>>6,I=g&63;f||(I=64,u||(w=64)),n.push(r[y],r[_],r[w],r[I])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(PE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<t.length;){const a=r[t.charAt(s++)],d=s<t.length?r[t.charAt(s)]:0;++s;const g=s<t.length?r[t.charAt(s)]:64;++s;const _=s<t.length?r[t.charAt(s)]:64;if(++s,a==null||d==null||g==null||_==null)throw new JA;const w=a<<2|d>>4;if(n.push(w),g!==64){const I=d<<4&240|g>>2;if(n.push(I),_!==64){const C=g<<6&192|_;n.push(C)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZA=function(t){const e=PE(t);return RE.encodeByteArray(e,!0)},md=function(t){return ZA(t).replace(/\./g,"")},xE=function(t){try{return RE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tP=()=>eP().__FIREBASE_DEFAULTS__,rP=()=>{if(typeof process>"u"||typeof D_>"u")return;const t=D_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&xE(t[1]);return e&&JSON.parse(e)},Jd=()=>{try{return YA()||tP()||rP()||nP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},kE=t=>{var e,r;return(r=(e=Jd())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},iP=t=>{const e=kE(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},DE=()=>{var t;return(t=Jd())===null||t===void 0?void 0:t.config},NE=t=>{var e;return(e=Jd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class oP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function sP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",s=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[md(JSON.stringify(r)),md(JSON.stringify(u)),""].join(".")}/**
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
 */function nr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nr())}function lP(){var t;const e=(t=Jd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hP(){const t=nr();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fP(){return!lP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function pP(){try{return typeof indexedDB=="object"}catch{return!1}}function gP(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const mP="FirebaseError";class fi extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=mP,Object.setPrototypeOf(this,fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,du.prototype.create)}}class du{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?vP(a,n):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new fi(s,d,n)}}function vP(t,e){return t.replace(yP,(r,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const yP=/\{\$([^}]+)}/g;function _P(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const s of r){if(!n.includes(s))return!1;const a=t[s],u=e[s];if(N_(a)&&N_(u)){if(!qo(a,u))return!1}else if(a!==u)return!1}for(const s of n)if(!r.includes(s))return!1;return!0}function N_(t){return t!==null&&typeof t=="object"}/**
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
 */function hu(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Dl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,a]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Nl(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function wP(t,e){const r=new EP(t,e);return r.subscribe.bind(r)}class EP{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let s;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");IP(e,["next","error","complete"])?s=e:s={next:e,error:r,complete:n},s.next===void 0&&(s.next=fp),s.error===void 0&&(s.error=fp),s.complete===void 0&&(s.complete=fp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IP(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function fp(){}/**
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
 */function ir(t){return t&&t._delegate?t._delegate:t}class Ko{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Uo="[DEFAULT]";/**
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
 */let TP=class{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new oP;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:r});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bP(e))try{this.getOrInitializeService({instanceIdentifier:Uo})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:s});n.resolve(a)}catch{}}}}clearInstance(e=Uo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Uo){return this.instances.has(e)}getOptions(e=Uo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);n===d&&u.resolve(s)}return s}onInit(e,r){var n;const s=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const s of n)try{s(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:SP(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Uo){return this.component?this.component.multipleInstances?e:Uo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function SP(t){return t===Uo?void 0:t}function bP(t){return t.instantiationMode==="EAGER"}/**
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
 */class CP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new TP(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ue||(Ue={}));const AP={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},PP=Ue.INFO,RP={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},xP=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),s=RP[e];if(s)console[s](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lg{constructor(e){this.name=e,this._logLevel=PP,this._logHandler=xP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const kP=(t,e)=>e.some(r=>t instanceof r);let O_,L_;function DP(){return O_||(O_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NP(){return L_||(L_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OE=new WeakMap,Qp=new WeakMap,LE=new WeakMap,pp=new WeakMap,Mg=new WeakMap;function OP(t){const e=new Promise((r,n)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",u)},a=()=>{r(Hi(t.result)),s()},u=()=>{n(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",u)});return e.then(r=>{r instanceof IDBCursor&&OE.set(r,t)}).catch(()=>{}),Mg.set(e,t),e}function LP(t){if(Qp.has(t))return;const e=new Promise((r,n)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",u),t.removeEventListener("abort",u)},a=()=>{r(),s()},u=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",u),t.addEventListener("abort",u)});Qp.set(t,e)}let Yp={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||LE.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Hi(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function MP(t){Yp=t(Yp)}function VP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(gp(this),e,...r);return LE.set(n,e.sort?e.sort():[e]),Hi(n)}:NP().includes(t)?function(...e){return t.apply(gp(this),e),Hi(OE.get(this))}:function(...e){return Hi(t.apply(gp(this),e))}}function FP(t){return typeof t=="function"?VP(t):(t instanceof IDBTransaction&&LP(t),kP(t,DP())?new Proxy(t,Yp):t)}function Hi(t){if(t instanceof IDBRequest)return OP(t);if(pp.has(t))return pp.get(t);const e=FP(t);return e!==t&&(pp.set(t,e),Mg.set(e,t)),e}const gp=t=>Mg.get(t);function BP(t,e,{blocked:r,upgrade:n,blocking:s,terminated:a}={}){const u=indexedDB.open(t,e),d=Hi(u);return n&&u.addEventListener("upgradeneeded",f=>{n(Hi(u.result),f.oldVersion,f.newVersion,Hi(u.transaction),f)}),r&&u.addEventListener("blocked",f=>r(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const UP=["get","getKey","getAll","getAllKeys","count"],jP=["put","add","delete","clear"],mp=new Map;function M_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mp.get(e))return mp.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,s=jP.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(s||UP.includes(r)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return n&&(g=g.index(d.shift())),(await Promise.all([g[r](...d),s&&f.done]))[0]};return mp.set(e,a),a}MP(t=>({...t,get:(e,r,n)=>M_(e,r)||t.get(e,r,n),has:(e,r)=>!!M_(e,r)||t.has(e,r)}));/**
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
 */class $P{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(zP(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function zP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xp="@firebase/app",V_="0.11.5";/**
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
 */const ui=new Lg("@firebase/app"),WP="@firebase/app-compat",GP="@firebase/analytics-compat",HP="@firebase/analytics",qP="@firebase/app-check-compat",KP="@firebase/app-check",QP="@firebase/auth",YP="@firebase/auth-compat",XP="@firebase/database",JP="@firebase/data-connect",ZP="@firebase/database-compat",e1="@firebase/functions",t1="@firebase/functions-compat",r1="@firebase/installations",n1="@firebase/installations-compat",i1="@firebase/messaging",o1="@firebase/messaging-compat",s1="@firebase/performance",a1="@firebase/performance-compat",l1="@firebase/remote-config",u1="@firebase/remote-config-compat",c1="@firebase/storage",d1="@firebase/storage-compat",h1="@firebase/firestore",f1="@firebase/vertexai",p1="@firebase/firestore-compat",g1="firebase",m1="11.6.1";/**
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
 */const Jp="[DEFAULT]",v1={[Xp]:"fire-core",[WP]:"fire-core-compat",[HP]:"fire-analytics",[GP]:"fire-analytics-compat",[KP]:"fire-app-check",[qP]:"fire-app-check-compat",[QP]:"fire-auth",[YP]:"fire-auth-compat",[XP]:"fire-rtdb",[JP]:"fire-data-connect",[ZP]:"fire-rtdb-compat",[e1]:"fire-fn",[t1]:"fire-fn-compat",[r1]:"fire-iid",[n1]:"fire-iid-compat",[i1]:"fire-fcm",[o1]:"fire-fcm-compat",[s1]:"fire-perf",[a1]:"fire-perf-compat",[l1]:"fire-rc",[u1]:"fire-rc-compat",[c1]:"fire-gcs",[d1]:"fire-gcs-compat",[h1]:"fire-fst",[p1]:"fire-fst-compat",[f1]:"fire-vertex","fire-js":"fire-js",[g1]:"fire-js-all"};/**
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
 */const vd=new Map,y1=new Map,Zp=new Map;function F_(t,e){try{t.container.addComponent(e)}catch(r){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function ha(t){const e=t.name;if(Zp.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;Zp.set(e,t);for(const r of vd.values())F_(r,t);for(const r of y1.values())F_(r,t);return!0}function Vg(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function qr(t){return t==null?!1:t.settings!==void 0}/**
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
 */const _1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qi=new du("app","Firebase",_1);/**
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
 */class w1{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ko("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
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
 */const ba=m1;function ME(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Jp,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw qi.create("bad-app-name",{appName:String(s)});if(r||(r=DE()),!r)throw qi.create("no-options");const a=vd.get(s);if(a){if(qo(r,a.options)&&qo(n,a.config))return a;throw qi.create("duplicate-app",{appName:s})}const u=new CP(s);for(const f of Zp.values())u.addComponent(f);const d=new w1(r,n,u);return vd.set(s,d),d}function VE(t=Jp){const e=vd.get(t);if(!e&&t===Jp&&DE())return ME();if(!e)throw qi.create("no-app",{appName:t});return e}function Ki(t,e,r){var n;let s=(n=v1[t])!==null&&n!==void 0?n:t;r&&(s+=`-${r}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(d.join(" "));return}ha(new Ko(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const E1="firebase-heartbeat-database",I1=1,Kl="firebase-heartbeat-store";let vp=null;function FE(){return vp||(vp=BP(E1,I1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Kl)}catch(r){console.warn(r)}}}}).catch(t=>{throw qi.create("idb-open",{originalErrorMessage:t.message})})),vp}async function T1(t){try{const r=(await FE()).transaction(Kl),n=await r.objectStore(Kl).get(BE(t));return await r.done,n}catch(e){if(e instanceof fi)ui.warn(e.message);else{const r=qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ui.warn(r.message)}}}async function B_(t,e){try{const n=(await FE()).transaction(Kl,"readwrite");await n.objectStore(Kl).put(e,BE(t)),await n.done}catch(r){if(r instanceof fi)ui.warn(r.message);else{const n=qi.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});ui.warn(n.message)}}}function BE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const S1=1024,b1=30;class C1{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new P1(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=U_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>b1){const u=R1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ui.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=U_(),{heartbeatsToSend:n,unsentEntries:s}=A1(this._heartbeatsCache.heartbeats),a=md(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(r){return ui.warn(r),""}}}function U_(){return new Date().toISOString().substring(0,10)}function A1(t,e=S1){const r=[];let n=t.slice();for(const s of t){const a=r.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),j_(r)>e){a.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),j_(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class P1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return pP()?gP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await T1(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return B_(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return B_(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function j_(t){return md(JSON.stringify({version:2,heartbeats:t})).length}function R1(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let n=1;n<t.length;n++)t[n].date<r&&(r=t[n].date,e=n);return e}/**
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
 */function x1(t){ha(new Ko("platform-logger",e=>new $P(e),"PRIVATE")),ha(new Ko("heartbeat",e=>new C1(e),"PRIVATE")),Ki(Xp,V_,t),Ki(Xp,V_,"esm2017"),Ki("fire-js","")}x1("");function UE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k1=UE,jE=new du("auth","Firebase",UE());/**
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
 */const yd=new Lg("@firebase/auth");function D1(t,...e){yd.logLevel<=Ue.WARN&&yd.warn(`Auth (${ba}): ${t}`,...e)}function td(t,...e){yd.logLevel<=Ue.ERROR&&yd.error(`Auth (${ba}): ${t}`,...e)}/**
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
 */function yn(t,...e){throw Fg(t,...e)}function Dn(t,...e){return Fg(t,...e)}function $E(t,e,r){const n=Object.assign(Object.assign({},k1()),{[e]:r});return new du("auth","Firebase",n).create(e,{appName:t.name})}function ai(t){return $E(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fg(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return jE.create(t,...e)}function Ce(t,e,...r){if(!t)throw Fg(e,...r)}function ii(t){const e="INTERNAL ASSERTION FAILED: "+t;throw td(e),new Error(e)}function ci(t,e){t||ii(e)}/**
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
 */function eg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function N1(){return $_()==="http:"||$_()==="https:"}function $_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function O1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(N1()||cP()||"connection"in navigator)?navigator.onLine:!0}function L1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class fu{constructor(e,r){this.shortDelay=e,this.longDelay=r,ci(r>e,"Short delay should be less than long delay!"),this.isMobile=aP()||dP()}get(){return O1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bg(t,e){ci(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class zE{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const M1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const V1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],F1=new fu(3e4,6e4);function ao(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function lo(t,e,r,n,s={}){return WE(t,s,async()=>{let a={},u={};n&&(e==="GET"?u=n:a={body:JSON.stringify(n)});const d=hu(Object.assign({key:t.config.apiKey},u)).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const g=Object.assign({method:e,headers:f},a);return uP()||(g.referrerPolicy="no-referrer"),zE.fetch()(await GE(t,t.config.apiHost,r,d),g)})}async function WE(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},M1),e);try{const s=new U1(t),a=await Promise.race([r(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Uc(t,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uc(t,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Uc(t,"email-already-in-use",u);if(f==="USER_DISABLED")throw Uc(t,"user-disabled",u);const y=n[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw $E(t,y,g);yn(t,y)}}catch(s){if(s instanceof fi)throw s;yn(t,"network-request-failed",{message:String(s)})}}async function pu(t,e,r,n,s={}){const a=await lo(t,e,r,n,s);return"mfaPendingCredential"in a&&yn(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function GE(t,e,r,n){const s=`${e}${r}?${n}`,a=t,u=a.config.emulator?Bg(t.config,s):`${t.config.apiScheme}://${s}`;return V1.includes(r)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function B1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class U1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Dn(this.auth,"network-request-failed")),F1.get())})}}function Uc(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const s=Dn(t,e,n);return s.customData._tokenResponse=r,s}function z_(t){return t!==void 0&&t.enterprise!==void 0}class j1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return B1(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $1(t,e){return lo(t,"GET","/v2/recaptchaConfig",ao(t,e))}/**
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
 */async function z1(t,e){return lo(t,"POST","/v1/accounts:delete",e)}async function _d(t,e){return lo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function W1(t,e=!1){const r=ir(t),n=await r.getIdToken(e),s=Ug(n);Ce(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:n,authTime:Fl(yp(s.auth_time)),issuedAtTime:Fl(yp(s.iat)),expirationTime:Fl(yp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function yp(t){return Number(t)*1e3}function Ug(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return td("JWT malformed, contained fewer than 3 sections"),null;try{const s=xE(r);return s?JSON.parse(s):(td("Failed to decode base64 JWT payload"),null)}catch(s){return td("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function W_(t){const e=Ug(t);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ql(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof fi&&G1(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function G1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class H1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class tg{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fl(this.lastLoginAt),this.creationTime=Fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wd(t){var e;const r=t.auth,n=await t.getIdToken(),s=await Ql(t,_d(r,{idToken:n}));Ce(s==null?void 0:s.users.length,r,"internal-error");const a=s.users[0];t._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?HE(a.providerUserInfo):[],d=K1(t.providerData,u),f=t.isAnonymous,g=!(t.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?g:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new tg(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(t,_)}async function q1(t){const e=ir(t);await wd(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function K1(t,e){return[...t.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function HE(t){return t.map(e=>{var{providerId:r}=e,n=Pg(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function Q1(t,e){const r=await WE(t,{},async()=>{const n=hu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=t.config,u=await GE(t,s,"/v1/token",`key=${a}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",zE.fetch()(u,{method:"POST",headers:d,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function Y1(t,e){return lo(t,"POST","/v2/accounts:revokeToken",ao(t,e))}/**
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
 */class na{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):W_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const r=W_(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:s,expiresIn:a}=await Q1(e,r);this.updateTokensAndExpiration(n,s,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:s,expirationTime:a}=r,u=new na;return n&&(Ce(typeof n=="string","internal-error",{appName:e}),u.refreshToken=n),s&&(Ce(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ce(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new na,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
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
 */function Fi(t,e){Ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:r,auth:n,stsTokenManager:s}=e,a=Pg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new H1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new tg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await Ql(this,this.stsTokenManager.getToken(this.auth,e));return Ce(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return W1(this,e)}reload(){return q1(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await wd(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(qr(this.auth.app))return Promise.reject(ai(this.auth));const e=await this.getIdToken();return await Ql(this,z1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,s,a,u,d,f,g,y;const _=(n=r.displayName)!==null&&n!==void 0?n:void 0,w=(s=r.email)!==null&&s!==void 0?s:void 0,I=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,C=(u=r.photoURL)!==null&&u!==void 0?u:void 0,D=(d=r.tenantId)!==null&&d!==void 0?d:void 0,x=(f=r._redirectEventId)!==null&&f!==void 0?f:void 0,O=(g=r.createdAt)!==null&&g!==void 0?g:void 0,V=(y=r.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:j,emailVerified:$,isAnonymous:W,providerData:Q,stsTokenManager:P}=r;Ce(j&&P,e,"internal-error");const A=na.fromJSON(this.name,P);Ce(typeof j=="string",e,"internal-error"),Fi(_,e.name),Fi(w,e.name),Ce(typeof $=="boolean",e,"internal-error"),Ce(typeof W=="boolean",e,"internal-error"),Fi(I,e.name),Fi(C,e.name),Fi(D,e.name),Fi(x,e.name),Fi(O,e.name),Fi(V,e.name);const R=new pn({uid:j,auth:e,email:w,emailVerified:$,displayName:_,isAnonymous:W,photoURL:C,phoneNumber:I,tenantId:D,stsTokenManager:A,createdAt:O,lastLoginAt:V});return Q&&Array.isArray(Q)&&(R.providerData=Q.map(N=>Object.assign({},N))),x&&(R._redirectEventId=x),R}static async _fromIdTokenResponse(e,r,n=!1){const s=new na;s.updateFromServerResponse(r);const a=new pn({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await wd(a),a}static async _fromGetAccountInfoResponse(e,r,n){const s=r.users[0];Ce(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?HE(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new na;d.updateFromIdToken(n);const f=new pn({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new tg(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,g),f}}/**
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
 */const G_=new Map;function oi(t){ci(t instanceof Function,"Expected a class definition");let e=G_.get(t);return e?(ci(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,G_.set(t,e),e)}/**
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
 */class qE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}qE.type="NONE";const H_=qE;/**
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
 */function rd(t,e,r){return`firebase:${t}:${e}:${r}`}class ia{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:s,name:a}=this.auth;this.fullUserKey=rd(this.userKey,s.apiKey,a),this.fullPersistenceKey=rd("persistence",s.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await _d(this.auth,{idToken:e}).catch(()=>{});return r?pn._fromGetAccountInfoResponse(this.auth,r,e):null}return pn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new ia(oi(H_),e,n);const s=(await Promise.all(r.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||oi(H_);const u=rd(n,e.config.apiKey,e.name);let d=null;for(const g of r)try{const y=await g._get(u);if(y){let _;if(typeof y=="string"){const w=await _d(e,{idToken:y}).catch(()=>{});if(!w)break;_=await pn._fromGetAccountInfoResponse(e,w,y)}else _=pn._fromJSON(e,y);g!==a&&(d=_),a=g;break}}catch{}const f=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ia(a,e,n):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(r.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new ia(a,e,n))}}/**
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
 */function q_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(XE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(KE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ZE(e))return"Blackberry";if(eI(e))return"Webos";if(QE(e))return"Safari";if((e.includes("chrome/")||YE(e))&&!e.includes("edge/"))return"Chrome";if(JE(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function KE(t=nr()){return/firefox\//i.test(t)}function QE(t=nr()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function YE(t=nr()){return/crios\//i.test(t)}function XE(t=nr()){return/iemobile/i.test(t)}function JE(t=nr()){return/android/i.test(t)}function ZE(t=nr()){return/blackberry/i.test(t)}function eI(t=nr()){return/webos/i.test(t)}function jg(t=nr()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function X1(t=nr()){var e;return jg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function J1(){return hP()&&document.documentMode===10}function tI(t=nr()){return jg(t)||JE(t)||eI(t)||ZE(t)||/windows phone/i.test(t)||XE(t)}/**
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
 */function rI(t,e=[]){let r;switch(t){case"Browser":r=q_(nr());break;case"Worker":r=`${q_(nr())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${ba}/${n}`}/**
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
 */class Z1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});n.onAbort=r,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function eR(t,e={}){return lo(t,"GET","/v2/passwordPolicy",ao(t,e))}/**
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
 */const tR=6;class rR{constructor(e){var r,n,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=u.minPasswordLength)!==null&&r!==void 0?r:tR,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(r=f.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(n=f.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),s&&(r.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class nR{constructor(e,r,n,s){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new K_(this),this.idTokenSubscription=new K_(this),this.beforeStateQueue=new Z1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=oi(r)),this._initializationPromise=this.queue(async()=>{var n,s,a;if(!this._deleted&&(this.persistenceManager=await ia.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await _d(this,{idToken:e}),n=await pn._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(qr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await wd(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=L1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(qr(this.app))return Promise.reject(ai(this));const r=e?ir(e):null;return r&&Ce(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return qr(this.app)?Promise.reject(ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return qr(this.app)?Promise.reject(ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(oi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eR(this),r=new rR(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new du("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await Y1(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&oi(e)||this._popupRedirectResolver;Ce(r,this,"argument-error"),this.redirectPersistenceManager=await ia.create(this,[oi(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,s){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof r=="function"){const f=e.addObserver(r,n,s);return()=>{u=!0,f()}}else{const f=e.addObserver(r);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(r["X-Firebase-AppCheck"]=s),r}async _getAppCheckToken(){var e;if(qr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&D1(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function es(t){return ir(t)}class K_{constructor(e){this.auth=e,this.observer=null,this.addObserver=wP(r=>this.observer=r)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Zd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iR(t){Zd=t}function nI(t){return Zd.loadJS(t)}function oR(){return Zd.recaptchaEnterpriseScript}function sR(){return Zd.gapiScript}function aR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class lR{constructor(){this.enterprise=new uR}ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}class uR{ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}const cR="recaptcha-enterprise",iI="NO_RECAPTCHA";class dR{constructor(e){this.type=cR,this.auth=es(e)}async verify(e="verify",r=!1){async function n(a){if(!r){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{$1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new j1(f);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;z_(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(g=>{u(g)}).catch(()=>{u(iI)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lR().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{n(this.auth).then(d=>{if(!r&&z_(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=oR();f.length!==0&&(f+=d),nI(f).then(()=>{s(d,a,u)}).catch(g=>{u(g)})}}).catch(d=>{u(d)})})}}async function Q_(t,e,r,n=!1,s=!1){const a=new dR(t);let u;if(s)u=iI;else try{u=await a.verify(r)}catch{u=await a.verify(r,!0)}const d=Object.assign({},e);if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return n?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function rg(t,e,r,n,s){var a;if(!((a=t._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await Q_(t,e,r,r==="getOobCode");return n(t,u)}else return n(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await Q_(t,e,r,r==="getOobCode");return n(t,d)}else return Promise.reject(u)})}/**
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
 */function hR(t,e){const r=Vg(t,"auth");if(r.isInitialized()){const s=r.getImmediate(),a=r.getOptions();if(qo(a,e??{}))return s;yn(s,"already-initialized")}return r.initialize({options:e})}function fR(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(oi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function pR(t,e,r){const n=es(t);Ce(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,a=oI(e),{host:u,port:d}=gR(e),f=d===null?"":`:${d}`,g={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){Ce(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),Ce(qo(g,n.config.emulator)&&qo(y,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=g,n.emulatorConfig=y,n.settings.appVerificationDisabledForTesting=!0,mR()}function oI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gR(t){const e=oI(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const a=s[1];return{host:a,port:Y_(n.substr(a.length+1))}}else{const[a,u]=n.split(":");return{host:a,port:Y_(u)}}}function Y_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mR(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class $g{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,r){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}async function vR(t,e){return lo(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yR(t,e){return pu(t,"POST","/v1/accounts:signInWithPassword",ao(t,e))}/**
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
 */async function _R(t,e){return pu(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}async function wR(t,e){return pu(t,"POST","/v1/accounts:signInWithEmailLink",ao(t,e))}/**
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
 */class Yl extends $g{constructor(e,r,n,s=null){super("password",n),this._email=e,this._password=r,this._tenantId=s}static _fromEmailAndPassword(e,r){return new Yl(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new Yl(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rg(e,r,"signInWithPassword",yR);case"emailLink":return _R(e,{email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return rg(e,n,"signUpPassword",vR);case"emailLink":return wR(e,{idToken:r,email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function oa(t,e){return pu(t,"POST","/v1/accounts:signInWithIdp",ao(t,e))}/**
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
 */const ER="http://localhost";class Qo extends $g{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Qo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):yn("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=r,a=Pg(r,["providerId","signInMethod"]);if(!n||!s)return null;const u=new Qo(n,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const r=this.buildRequest();return oa(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,oa(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,oa(e,r)}buildRequest(){const e={requestUri:ER,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=hu(r)}return e}}/**
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
 */function IR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TR(t){const e=Dl(Nl(t)).link,r=e?Dl(Nl(e)).deep_link_id:null,n=Dl(Nl(t)).deep_link_id;return(n?Dl(Nl(n)).link:null)||n||r||e||t}class zg{constructor(e){var r,n,s,a,u,d;const f=Dl(Nl(e)),g=(r=f.apiKey)!==null&&r!==void 0?r:null,y=(n=f.oobCode)!==null&&n!==void 0?n:null,_=IR((s=f.mode)!==null&&s!==void 0?s:null);Ce(g&&y&&_,"argument-error"),this.apiKey=g,this.operation=_,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const r=TR(e);try{return new zg(r)}catch{return null}}}/**
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
 */class Ca{constructor(){this.providerId=Ca.PROVIDER_ID}static credential(e,r){return Yl._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=zg.parseLink(r);return Ce(n,"argument-error"),Yl._fromEmailAndCode(e,n.code,n.tenantId)}}Ca.PROVIDER_ID="password";Ca.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ca.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class gu extends sI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ui extends gu{constructor(){super("facebook.com")}static credential(e){return Qo._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ui.credential(e.oauthAccessToken)}catch{return null}}}Ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ui.PROVIDER_ID="facebook.com";/**
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
 */class ji extends gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Qo._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return ji.credential(r,n)}catch{return null}}}ji.GOOGLE_SIGN_IN_METHOD="google.com";ji.PROVIDER_ID="google.com";/**
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
 */class $i extends gu{constructor(){super("github.com")}static credential(e){return Qo._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $i.credential(e.oauthAccessToken)}catch{return null}}}$i.GITHUB_SIGN_IN_METHOD="github.com";$i.PROVIDER_ID="github.com";/**
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
 */class zi extends gu{constructor(){super("twitter.com")}static credential(e,r){return Qo._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return zi.credential(r,n)}catch{return null}}}zi.TWITTER_SIGN_IN_METHOD="twitter.com";zi.PROVIDER_ID="twitter.com";/**
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
 */async function SR(t,e){return pu(t,"POST","/v1/accounts:signUp",ao(t,e))}/**
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
 */class Yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,s=!1){const a=await pn._fromIdTokenResponse(e,n,s),u=X_(n);return new Yo({user:a,providerId:u,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const s=X_(n);return new Yo({user:e,providerId:s,_tokenResponse:n,operationType:r})}}function X_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ed extends fi{constructor(e,r,n,s){var a;super(r.code,r.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Ed.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,s){return new Ed(e,r,n,s)}}function aI(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Ed._fromErrorAndOperation(t,a,e,n):a})}async function bR(t,e,r=!1){const n=await Ql(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Yo._forOperation(t,"link",n)}/**
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
 */async function CR(t,e,r=!1){const{auth:n}=t;if(qr(n.app))return Promise.reject(ai(n));const s="reauthenticate";try{const a=await Ql(t,aI(n,s,e,t),r);Ce(a.idToken,n,"internal-error");const u=Ug(a.idToken);Ce(u,n,"internal-error");const{sub:d}=u;return Ce(t.uid===d,n,"user-mismatch"),Yo._forOperation(t,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&yn(n,"user-mismatch"),a}}/**
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
 */async function lI(t,e,r=!1){if(qr(t.app))return Promise.reject(ai(t));const n="signIn",s=await aI(t,n,e),a=await Yo._fromIdTokenResponse(t,n,s);return r||await t._updateCurrentUser(a.user),a}async function AR(t,e){return lI(es(t),e)}/**
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
 */async function uI(t){const e=es(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PR(t,e,r){if(qr(t.app))return Promise.reject(ai(t));const n=es(t),u=await rg(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SR).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&uI(t),f}),d=await Yo._fromIdTokenResponse(n,"signIn",u);return await n._updateCurrentUser(d.user),d}function RR(t,e,r){return qr(t.app)?Promise.reject(ai(t)):AR(ir(t),Ca.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&uI(t),n})}function xR(t,e,r,n){return ir(t).onIdTokenChanged(e,r,n)}function kR(t,e,r){return ir(t).beforeAuthStateChanged(e,r)}function DR(t,e,r,n){return ir(t).onAuthStateChanged(e,r,n)}function NR(t){return ir(t).signOut()}const Id="__sak";/**
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
 */class cI{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Id,"1"),this.storage.removeItem(Id),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const OR=1e3,LR=10;class dI extends cI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),s=this.localCache[r];n!==s&&e(r,s,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const n=e.key;r?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(n);!r&&this.localCache[n]===u||this.notifyListeners(n,u)},a=this.storage.getItem(n);J1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,LR):s()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},OR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}dI.type="LOCAL";const MR=dI;/**
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
 */class hI extends cI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}hI.type="SESSION";const fI=hI;/**
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
 */function VR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(s=>s.isListeningto(e));if(r)return r;const n=new eh(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:s,data:a}=r.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const d=Array.from(u).map(async g=>g(r.origin,a)),f=await VR(d);r.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:f})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}eh.receivers=[];/**
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
 */function Wg(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class FR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const g=Wg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},n);u={messageChannel:s,onMessage(_){const w=_;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(w.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:r},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Nn(){return window}function BR(t){Nn().location.href=t}/**
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
 */function pI(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function UR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $R(){return pI()?self:null}/**
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
 */const gI="firebaseLocalStorageDb",zR=1,Td="firebaseLocalStorage",mI="fbase_key";class mu{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function th(t,e){return t.transaction([Td],e?"readwrite":"readonly").objectStore(Td)}function WR(){const t=indexedDB.deleteDatabase(gI);return new mu(t).toPromise()}function ng(){const t=indexedDB.open(gI,zR);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Td,{keyPath:mI})}catch(s){r(s)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Td)?e(n):(n.close(),await WR(),e(await ng()))})})}async function J_(t,e,r){const n=th(t,!0).put({[mI]:e,value:r});return new mu(n).toPromise()}async function GR(t,e){const r=th(t,!1).get(e),n=await new mu(r).toPromise();return n===void 0?null:n.value}function Z_(t,e){const r=th(t,!0).delete(e);return new mu(r).toPromise()}const HR=800,qR=3;class vI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ng(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>qR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=eh._getInstance($R()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await UR(),!this.activeServiceWorker)return;this.sender=new FR(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ng();return await J_(e,Id,"1"),await Z_(e,Id),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>J_(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>GR(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Z_(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=th(s,!1).getAll();return new mu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),r.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),r.push(s));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),HR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vI.type="LOCAL";const KR=vI;new fu(3e4,6e4);/**
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
 */function QR(t,e){return e?oi(e):(Ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gg extends $g{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oa(e,this._buildIdpRequest())}_linkToIdToken(e,r){return oa(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return oa(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function YR(t){return lI(t.auth,new Gg(t),t.bypassAuthState)}function XR(t){const{auth:e,user:r}=t;return Ce(r,e,"internal-error"),CR(r,new Gg(t),t.bypassAuthState)}async function JR(t){const{auth:e,user:r}=t;return Ce(r,e,"internal-error"),bR(r,new Gg(t),t.bypassAuthState)}/**
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
 */class yI{constructor(e,r,n,s,a=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YR;case"linkViaPopup":case"linkViaRedirect":return JR;case"reauthViaPopup":case"reauthViaRedirect":return XR;default:yn(this.auth,"internal-error")}}resolve(e){ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ZR=new fu(2e3,1e4);class ra extends yI{constructor(e,r,n,s,a){super(e,r,s,a),this.provider=n,this.authWindow=null,this.pollId=null,ra.currentPopupAction&&ra.currentPopupAction.cancel(),ra.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){ci(this.filter.length===1,"Popup operations only handle one event");const e=Wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ra.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZR.get())};e()}}ra.currentPopupAction=null;/**
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
 */const ex="pendingRedirect",nd=new Map;class tx extends yI{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=nd.get(this.auth._key());if(!e){try{const n=await rx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}nd.set(this.auth._key(),e)}return this.bypassAuthState||nd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rx(t,e){const r=ox(e),n=ix(t);if(!await n._isAvailable())return!1;const s=await n._get(r)==="true";return await n._remove(r),s}function nx(t,e){nd.set(t._key(),e)}function ix(t){return oi(t._redirectPersistence)}function ox(t){return rd(ex,t.config.apiKey,t.name)}async function sx(t,e,r=!1){if(qr(t.app))return Promise.reject(ai(t));const n=es(t),s=QR(n,e),u=await new tx(n,s,r).execute();return u&&!r&&(delete u.user._redirectEventId,await n._persistUserIfCurrent(u.user),await n._setRedirectUser(null,e)),u}/**
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
 */const ax=10*60*1e3;class lx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ux(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!_I(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Dn(this.auth,s))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ax&&this.cachedEventUids.clear(),this.cachedEventUids.has(ew(e))}saveEventToCache(e){this.cachedEventUids.add(ew(e)),this.lastProcessedEventTime=Date.now()}}function ew(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _I({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ux(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _I(t);default:return!1}}/**
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
 */async function cx(t,e={}){return lo(t,"GET","/v1/projects",e)}/**
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
 */const dx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hx=/^https?/;async function fx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cx(t);for(const r of e)try{if(px(r))return}catch{}yn(t,"unauthorized-domain")}function px(t){const e=eg(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&u.hostname===n}if(!hx.test(r))return!1;if(dx.test(t))return n===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const gx=new fu(3e4,6e4);function tw(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function mx(t){return new Promise((e,r)=>{var n,s,a;function u(){tw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tw(),r(Dn(t,"network-request-failed"))},timeout:gx.get()})}if(!((s=(n=Nn().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Nn().gapi)===null||a===void 0)&&a.load)u();else{const d=aR("iframefcb");return Nn()[d]=()=>{gapi.load?u():r(Dn(t,"network-request-failed"))},nI(`${sR()}?onload=${d}`).catch(f=>r(f))}}).catch(e=>{throw id=null,e})}let id=null;function vx(t){return id=id||mx(t),id}/**
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
 */const yx=new fu(5e3,15e3),_x="__/auth/iframe",wx="emulator/auth/iframe",Ex={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ix=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tx(t){const e=t.config;Ce(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Bg(e,wx):`https://${t.config.authDomain}/${_x}`,n={apiKey:e.apiKey,appName:t.name,v:ba},s=Ix.get(t.config.apiHost);s&&(n.eid=s);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${hu(n).slice(1)}`}async function Sx(t){const e=await vx(t),r=Nn().gapi;return Ce(r,t,"internal-error"),e.open({where:document.body,url:Tx(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ex,dontclear:!0},n=>new Promise(async(s,a)=>{await n.restyle({setHideOnLeave:!1});const u=Dn(t,"network-request-failed"),d=Nn().setTimeout(()=>{a(u)},yx.get());function f(){Nn().clearTimeout(d),s(n)}n.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const bx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cx=500,Ax=600,Px="_blank",Rx="http://localhost";class rw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xx(t,e,r,n=Cx,s=Ax){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-n)/2,0).toString();let d="";const f=Object.assign(Object.assign({},bx),{width:n.toString(),height:s.toString(),top:a,left:u}),g=nr().toLowerCase();r&&(d=YE(g)?Px:r),KE(g)&&(e=e||Rx,f.scrollbars="yes");const y=Object.entries(f).reduce((w,[I,C])=>`${w}${I}=${C},`,"");if(X1(g)&&d!=="_self")return kx(e||"",d),new rw(null);const _=window.open(e||"",d,y);Ce(_,t,"popup-blocked");try{_.focus()}catch{}return new rw(_)}function kx(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const Dx="__/auth/handler",Nx="emulator/auth/handler",Ox=encodeURIComponent("fac");async function nw(t,e,r,n,s,a){Ce(t.config.authDomain,t,"auth-domain-config-required"),Ce(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:ba,eventId:s};if(e instanceof sI){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",_P(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))u[y]=_}if(e instanceof gu){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(u.scopes=y.join(","))}t.tenantId&&(u.tid=t.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await t._getAppCheckToken(),g=f?`#${Ox}=${encodeURIComponent(f)}`:"";return`${Lx(t)}?${hu(d).slice(1)}${g}`}function Lx({config:t}){return t.emulator?Bg(t,Nx):`https://${t.authDomain}/${Dx}`}/**
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
 */const _p="webStorageSupport";class Mx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fI,this._completeRedirectFn=sx,this._overrideRedirectResult=nx}async _openPopup(e,r,n,s){var a;ci((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await nw(e,r,n,eg(),s);return xx(e,u,Wg())}async _openRedirect(e,r,n,s){await this._originValidation(e);const a=await nw(e,r,n,eg(),s);return BR(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:s,promise:a}=this.eventManagers[r];return s?Promise.resolve(s):(ci(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await Sx(e),n=new lx(e);return r.register("authEvent",s=>(Ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(_p,{type:_p},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[_p];u!==void 0&&r(!!u),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=fx(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return tI()||QE()||jg()}}const Vx=Mx;var iw="@firebase/auth",ow="1.10.1";/**
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
 */class Fx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ux(t){ha(new Ko("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=n.options;Ce(u&&!u.includes(":"),"invalid-api-key",{appName:n.name});const f={apiKey:u,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rI(t)},g=new nR(n,s,a,f);return fR(g,r),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),ha(new Ko("auth-internal",e=>{const r=es(e.getProvider("auth").getImmediate());return(n=>new Fx(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ki(iw,ow,Bx(t)),Ki(iw,ow,"esm2017")}/**
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
 */const jx=5*60,$x=NE("authIdTokenMaxAge")||jx;let sw=null;const zx=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>$x)return;const s=r==null?void 0:r.token;sw!==s&&(sw=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Wx(t=VE()){const e=Vg(t,"auth");if(e.isInitialized())return e.getImmediate();const r=hR(t,{popupRedirectResolver:Vx,persistence:[KR,MR,fI]}),n=NE("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const u=zx(a.toString());kR(r,u,()=>u(r.currentUser)),xR(r,d=>u(d))}}const s=kE("auth");return s&&pR(r,`http://${s}`),r}function Gx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iR({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=s=>{const a=Dn("internal-error");a.customData=s,r(a)},n.type="text/javascript",n.charset="UTF-8",Gx().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ux("Browser");var Hx="firebase",qx="11.6.1";/**
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
 */Ki(Hx,qx,"app");var aw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qi,wI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(P,A){function R(){}R.prototype=A.prototype,P.D=A.prototype,P.prototype=new R,P.prototype.constructor=P,P.C=function(N,L,U){for(var b=Array(arguments.length-2),be=2;be<arguments.length;be++)b[be-2]=arguments[be];return A.prototype[L].apply(N,b)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,r),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(P,A,R){R||(R=0);var N=Array(16);if(typeof A=="string")for(var L=0;16>L;++L)N[L]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(L=0;16>L;++L)N[L]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=P.g[0],R=P.g[1],L=P.g[2];var U=P.g[3],b=A+(U^R&(L^U))+N[0]+3614090360&4294967295;A=R+(b<<7&4294967295|b>>>25),b=U+(L^A&(R^L))+N[1]+3905402710&4294967295,U=A+(b<<12&4294967295|b>>>20),b=L+(R^U&(A^R))+N[2]+606105819&4294967295,L=U+(b<<17&4294967295|b>>>15),b=R+(A^L&(U^A))+N[3]+3250441966&4294967295,R=L+(b<<22&4294967295|b>>>10),b=A+(U^R&(L^U))+N[4]+4118548399&4294967295,A=R+(b<<7&4294967295|b>>>25),b=U+(L^A&(R^L))+N[5]+1200080426&4294967295,U=A+(b<<12&4294967295|b>>>20),b=L+(R^U&(A^R))+N[6]+2821735955&4294967295,L=U+(b<<17&4294967295|b>>>15),b=R+(A^L&(U^A))+N[7]+4249261313&4294967295,R=L+(b<<22&4294967295|b>>>10),b=A+(U^R&(L^U))+N[8]+1770035416&4294967295,A=R+(b<<7&4294967295|b>>>25),b=U+(L^A&(R^L))+N[9]+2336552879&4294967295,U=A+(b<<12&4294967295|b>>>20),b=L+(R^U&(A^R))+N[10]+4294925233&4294967295,L=U+(b<<17&4294967295|b>>>15),b=R+(A^L&(U^A))+N[11]+2304563134&4294967295,R=L+(b<<22&4294967295|b>>>10),b=A+(U^R&(L^U))+N[12]+1804603682&4294967295,A=R+(b<<7&4294967295|b>>>25),b=U+(L^A&(R^L))+N[13]+4254626195&4294967295,U=A+(b<<12&4294967295|b>>>20),b=L+(R^U&(A^R))+N[14]+2792965006&4294967295,L=U+(b<<17&4294967295|b>>>15),b=R+(A^L&(U^A))+N[15]+1236535329&4294967295,R=L+(b<<22&4294967295|b>>>10),b=A+(L^U&(R^L))+N[1]+4129170786&4294967295,A=R+(b<<5&4294967295|b>>>27),b=U+(R^L&(A^R))+N[6]+3225465664&4294967295,U=A+(b<<9&4294967295|b>>>23),b=L+(A^R&(U^A))+N[11]+643717713&4294967295,L=U+(b<<14&4294967295|b>>>18),b=R+(U^A&(L^U))+N[0]+3921069994&4294967295,R=L+(b<<20&4294967295|b>>>12),b=A+(L^U&(R^L))+N[5]+3593408605&4294967295,A=R+(b<<5&4294967295|b>>>27),b=U+(R^L&(A^R))+N[10]+38016083&4294967295,U=A+(b<<9&4294967295|b>>>23),b=L+(A^R&(U^A))+N[15]+3634488961&4294967295,L=U+(b<<14&4294967295|b>>>18),b=R+(U^A&(L^U))+N[4]+3889429448&4294967295,R=L+(b<<20&4294967295|b>>>12),b=A+(L^U&(R^L))+N[9]+568446438&4294967295,A=R+(b<<5&4294967295|b>>>27),b=U+(R^L&(A^R))+N[14]+3275163606&4294967295,U=A+(b<<9&4294967295|b>>>23),b=L+(A^R&(U^A))+N[3]+4107603335&4294967295,L=U+(b<<14&4294967295|b>>>18),b=R+(U^A&(L^U))+N[8]+1163531501&4294967295,R=L+(b<<20&4294967295|b>>>12),b=A+(L^U&(R^L))+N[13]+2850285829&4294967295,A=R+(b<<5&4294967295|b>>>27),b=U+(R^L&(A^R))+N[2]+4243563512&4294967295,U=A+(b<<9&4294967295|b>>>23),b=L+(A^R&(U^A))+N[7]+1735328473&4294967295,L=U+(b<<14&4294967295|b>>>18),b=R+(U^A&(L^U))+N[12]+2368359562&4294967295,R=L+(b<<20&4294967295|b>>>12),b=A+(R^L^U)+N[5]+4294588738&4294967295,A=R+(b<<4&4294967295|b>>>28),b=U+(A^R^L)+N[8]+2272392833&4294967295,U=A+(b<<11&4294967295|b>>>21),b=L+(U^A^R)+N[11]+1839030562&4294967295,L=U+(b<<16&4294967295|b>>>16),b=R+(L^U^A)+N[14]+4259657740&4294967295,R=L+(b<<23&4294967295|b>>>9),b=A+(R^L^U)+N[1]+2763975236&4294967295,A=R+(b<<4&4294967295|b>>>28),b=U+(A^R^L)+N[4]+1272893353&4294967295,U=A+(b<<11&4294967295|b>>>21),b=L+(U^A^R)+N[7]+4139469664&4294967295,L=U+(b<<16&4294967295|b>>>16),b=R+(L^U^A)+N[10]+3200236656&4294967295,R=L+(b<<23&4294967295|b>>>9),b=A+(R^L^U)+N[13]+681279174&4294967295,A=R+(b<<4&4294967295|b>>>28),b=U+(A^R^L)+N[0]+3936430074&4294967295,U=A+(b<<11&4294967295|b>>>21),b=L+(U^A^R)+N[3]+3572445317&4294967295,L=U+(b<<16&4294967295|b>>>16),b=R+(L^U^A)+N[6]+76029189&4294967295,R=L+(b<<23&4294967295|b>>>9),b=A+(R^L^U)+N[9]+3654602809&4294967295,A=R+(b<<4&4294967295|b>>>28),b=U+(A^R^L)+N[12]+3873151461&4294967295,U=A+(b<<11&4294967295|b>>>21),b=L+(U^A^R)+N[15]+530742520&4294967295,L=U+(b<<16&4294967295|b>>>16),b=R+(L^U^A)+N[2]+3299628645&4294967295,R=L+(b<<23&4294967295|b>>>9),b=A+(L^(R|~U))+N[0]+4096336452&4294967295,A=R+(b<<6&4294967295|b>>>26),b=U+(R^(A|~L))+N[7]+1126891415&4294967295,U=A+(b<<10&4294967295|b>>>22),b=L+(A^(U|~R))+N[14]+2878612391&4294967295,L=U+(b<<15&4294967295|b>>>17),b=R+(U^(L|~A))+N[5]+4237533241&4294967295,R=L+(b<<21&4294967295|b>>>11),b=A+(L^(R|~U))+N[12]+1700485571&4294967295,A=R+(b<<6&4294967295|b>>>26),b=U+(R^(A|~L))+N[3]+2399980690&4294967295,U=A+(b<<10&4294967295|b>>>22),b=L+(A^(U|~R))+N[10]+4293915773&4294967295,L=U+(b<<15&4294967295|b>>>17),b=R+(U^(L|~A))+N[1]+2240044497&4294967295,R=L+(b<<21&4294967295|b>>>11),b=A+(L^(R|~U))+N[8]+1873313359&4294967295,A=R+(b<<6&4294967295|b>>>26),b=U+(R^(A|~L))+N[15]+4264355552&4294967295,U=A+(b<<10&4294967295|b>>>22),b=L+(A^(U|~R))+N[6]+2734768916&4294967295,L=U+(b<<15&4294967295|b>>>17),b=R+(U^(L|~A))+N[13]+1309151649&4294967295,R=L+(b<<21&4294967295|b>>>11),b=A+(L^(R|~U))+N[4]+4149444226&4294967295,A=R+(b<<6&4294967295|b>>>26),b=U+(R^(A|~L))+N[11]+3174756917&4294967295,U=A+(b<<10&4294967295|b>>>22),b=L+(A^(U|~R))+N[2]+718787259&4294967295,L=U+(b<<15&4294967295|b>>>17),b=R+(U^(L|~A))+N[9]+3951481745&4294967295,P.g[0]=P.g[0]+A&4294967295,P.g[1]=P.g[1]+(L+(b<<21&4294967295|b>>>11))&4294967295,P.g[2]=P.g[2]+L&4294967295,P.g[3]=P.g[3]+U&4294967295}n.prototype.u=function(P,A){A===void 0&&(A=P.length);for(var R=A-this.blockSize,N=this.B,L=this.h,U=0;U<A;){if(L==0)for(;U<=R;)s(this,P,U),U+=this.blockSize;if(typeof P=="string"){for(;U<A;)if(N[L++]=P.charCodeAt(U++),L==this.blockSize){s(this,N),L=0;break}}else for(;U<A;)if(N[L++]=P[U++],L==this.blockSize){s(this,N),L=0;break}}this.h=L,this.o+=A},n.prototype.v=function(){var P=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);P[0]=128;for(var A=1;A<P.length-8;++A)P[A]=0;var R=8*this.o;for(A=P.length-8;A<P.length;++A)P[A]=R&255,R/=256;for(this.u(P),P=Array(16),A=R=0;4>A;++A)for(var N=0;32>N;N+=8)P[R++]=this.g[A]>>>N&255;return P};function a(P,A){var R=d;return Object.prototype.hasOwnProperty.call(R,P)?R[P]:R[P]=A(P)}function u(P,A){this.h=A;for(var R=[],N=!0,L=P.length-1;0<=L;L--){var U=P[L]|0;N&&U==A||(R[L]=U,N=!1)}this.g=R}var d={};function f(P){return-128<=P&&128>P?a(P,function(A){return new u([A|0],0>A?-1:0)}):new u([P|0],0>P?-1:0)}function g(P){if(isNaN(P)||!isFinite(P))return _;if(0>P)return x(g(-P));for(var A=[],R=1,N=0;P>=R;N++)A[N]=P/R|0,R*=4294967296;return new u(A,0)}function y(P,A){if(P.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P.charAt(0)=="-")return x(y(P.substring(1),A));if(0<=P.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(A,8)),N=_,L=0;L<P.length;L+=8){var U=Math.min(8,P.length-L),b=parseInt(P.substring(L,L+U),A);8>U?(U=g(Math.pow(A,U)),N=N.j(U).add(g(b))):(N=N.j(R),N=N.add(g(b)))}return N}var _=f(0),w=f(1),I=f(16777216);t=u.prototype,t.m=function(){if(D(this))return-x(this).m();for(var P=0,A=1,R=0;R<this.g.length;R++){var N=this.i(R);P+=(0<=N?N:4294967296+N)*A,A*=4294967296}return P},t.toString=function(P){if(P=P||10,2>P||36<P)throw Error("radix out of range: "+P);if(C(this))return"0";if(D(this))return"-"+x(this).toString(P);for(var A=g(Math.pow(P,6)),R=this,N="";;){var L=$(R,A).g;R=O(R,L.j(A));var U=((0<R.g.length?R.g[0]:R.h)>>>0).toString(P);if(R=L,C(R))return U+N;for(;6>U.length;)U="0"+U;N=U+N}},t.i=function(P){return 0>P?0:P<this.g.length?this.g[P]:this.h};function C(P){if(P.h!=0)return!1;for(var A=0;A<P.g.length;A++)if(P.g[A]!=0)return!1;return!0}function D(P){return P.h==-1}t.l=function(P){return P=O(this,P),D(P)?-1:C(P)?0:1};function x(P){for(var A=P.g.length,R=[],N=0;N<A;N++)R[N]=~P.g[N];return new u(R,~P.h).add(w)}t.abs=function(){return D(this)?x(this):this},t.add=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],N=0,L=0;L<=A;L++){var U=N+(this.i(L)&65535)+(P.i(L)&65535),b=(U>>>16)+(this.i(L)>>>16)+(P.i(L)>>>16);N=b>>>16,U&=65535,b&=65535,R[L]=b<<16|U}return new u(R,R[R.length-1]&-2147483648?-1:0)};function O(P,A){return P.add(x(A))}t.j=function(P){if(C(this)||C(P))return _;if(D(this))return D(P)?x(this).j(x(P)):x(x(this).j(P));if(D(P))return x(this.j(x(P)));if(0>this.l(I)&&0>P.l(I))return g(this.m()*P.m());for(var A=this.g.length+P.g.length,R=[],N=0;N<2*A;N++)R[N]=0;for(N=0;N<this.g.length;N++)for(var L=0;L<P.g.length;L++){var U=this.i(N)>>>16,b=this.i(N)&65535,be=P.i(L)>>>16,Qe=P.i(L)&65535;R[2*N+2*L]+=b*Qe,V(R,2*N+2*L),R[2*N+2*L+1]+=U*Qe,V(R,2*N+2*L+1),R[2*N+2*L+1]+=b*be,V(R,2*N+2*L+1),R[2*N+2*L+2]+=U*be,V(R,2*N+2*L+2)}for(N=0;N<A;N++)R[N]=R[2*N+1]<<16|R[2*N];for(N=A;N<2*A;N++)R[N]=0;return new u(R,0)};function V(P,A){for(;(P[A]&65535)!=P[A];)P[A+1]+=P[A]>>>16,P[A]&=65535,A++}function j(P,A){this.g=P,this.h=A}function $(P,A){if(C(A))throw Error("division by zero");if(C(P))return new j(_,_);if(D(P))return A=$(x(P),A),new j(x(A.g),x(A.h));if(D(A))return A=$(P,x(A)),new j(x(A.g),A.h);if(30<P.g.length){if(D(P)||D(A))throw Error("slowDivide_ only works with positive integers.");for(var R=w,N=A;0>=N.l(P);)R=W(R),N=W(N);var L=Q(R,1),U=Q(N,1);for(N=Q(N,2),R=Q(R,2);!C(N);){var b=U.add(N);0>=b.l(P)&&(L=L.add(R),U=b),N=Q(N,1),R=Q(R,1)}return A=O(P,L.j(A)),new j(L,A)}for(L=_;0<=P.l(A);){for(R=Math.max(1,Math.floor(P.m()/A.m())),N=Math.ceil(Math.log(R)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),U=g(R),b=U.j(A);D(b)||0<b.l(P);)R-=N,U=g(R),b=U.j(A);C(U)&&(U=w),L=L.add(U),P=O(P,b)}return new j(L,P)}t.A=function(P){return $(this,P).h},t.and=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)&P.i(N);return new u(R,this.h&P.h)},t.or=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)|P.i(N);return new u(R,this.h|P.h)},t.xor=function(P){for(var A=Math.max(this.g.length,P.g.length),R=[],N=0;N<A;N++)R[N]=this.i(N)^P.i(N);return new u(R,this.h^P.h)};function W(P){for(var A=P.g.length+1,R=[],N=0;N<A;N++)R[N]=P.i(N)<<1|P.i(N-1)>>>31;return new u(R,P.h)}function Q(P,A){var R=A>>5;A%=32;for(var N=P.g.length-R,L=[],U=0;U<N;U++)L[U]=0<A?P.i(U+R)>>>A|P.i(U+R+1)<<32-A:P.i(U+R);return new u(L,P.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,wI=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,Qi=u}).apply(typeof aw<"u"?aw:typeof self<"u"?self:typeof window<"u"?window:{});var jc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var EI,Ol,II,od,ig,TI,SI,bI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,E){return c==Array.prototype||c==Object.prototype||(c[m]=E.value),c};function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof jc=="object"&&jc];for(var m=0;m<c.length;++m){var E=c[m];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=r(this);function s(c,m){if(m)e:{var E=n;c=c.split(".");for(var S=0;S<c.length-1;S++){var G=c[S];if(!(G in E))break e;E=E[G]}c=c[c.length-1],S=E[c],m=m(S),m!=S&&m!=null&&e(E,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var E=0,S=!1,G={next:function(){if(!S&&E<c.length){var Y=E++;return{value:m(Y,c[Y]),done:!1}}return S=!0,{done:!0,value:void 0}}};return G[Symbol.iterator]=function(){return G},G}s("Array.prototype.values",function(c){return c||function(){return a(this,function(m,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function y(c,m,E){return c.call.apply(c.bind,arguments)}function _(c,m,E){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var G=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(G,S),c.apply(m,G)}}return function(){return c.apply(m,arguments)}}function w(c,m,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:_,w.apply(null,arguments)}function I(c,m){var E=Array.prototype.slice.call(arguments,1);return function(){var S=E.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function C(c,m){function E(){}E.prototype=m.prototype,c.aa=m.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(S,G,Y){for(var ue=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)ue[tt-2]=arguments[tt];return m.prototype[G].apply(S,ue)}}function D(c){const m=c.length;if(0<m){const E=Array(m);for(let S=0;S<m;S++)E[S]=c[S];return E}return[]}function x(c,m){for(let E=1;E<arguments.length;E++){const S=arguments[E];if(f(S)){const G=c.length||0,Y=S.length||0;c.length=G+Y;for(let ue=0;ue<Y;ue++)c[G+ue]=S[ue]}else c.push(S)}}class O{constructor(m,E){this.i=m,this.j=E,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function V(c){return/^[\s\xa0]*$/.test(c)}function j(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function $(c){return $[" "](c),c}$[" "]=function(){};var W=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Q(c,m,E){for(const S in c)m.call(E,c[S],S,c)}function P(c,m){for(const E in c)m.call(void 0,c[E],E,c)}function A(c){const m={};for(const E in c)m[E]=c[E];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let E,S;for(let G=1;G<arguments.length;G++){S=arguments[G];for(E in S)c[E]=S[E];for(let Y=0;Y<R.length;Y++)E=R[Y],Object.prototype.hasOwnProperty.call(S,E)&&(c[E]=S[E])}}function L(c){var m=1;c=c.split(":");const E=[];for(;0<m&&c.length;)E.push(c.shift()),m--;return c.length&&E.push(c.join(":")),E}function U(c){d.setTimeout(()=>{throw c},0)}function b(){var c=ce;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class be{constructor(){this.h=this.g=null}add(m,E){const S=Qe.get();S.set(m,E),this.h?this.h.next=S:this.g=S,this.h=S}}var Qe=new O(()=>new Ye,c=>c.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(m,E){this.h=m,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,ie=!1,ce=new be,ae=()=>{const c=d.Promise.resolve(void 0);Me=()=>{c.then(B)}};var B=()=>{for(var c;c=b();){try{c.h.call(c.g)}catch(E){U(E)}var m=Qe;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}ie=!1};function X(){this.s=this.s,this.C=this.C}X.prototype.s=!1,X.prototype.ma=function(){this.s||(this.s=!0,this.N())},X.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};d.addEventListener("test",E,m),d.removeEventListener("test",E,m)}catch{}return c}();function _e(c,m){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(W){e:{try{$(m.nodeName);var G=!0;break e}catch{}G=!1}G||(m=null)}}else E=="mouseover"?m=c.fromElement:E=="mouseout"&&(m=c.toElement);this.relatedTarget=m,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:xe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&_e.aa.h.call(this)}}C(_e,pe);var xe={2:"touch",3:"pen",4:"mouse"};_e.prototype.h=function(){_e.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Fe(c,m,E,S,G){this.listener=c,this.proxy=null,this.src=m,this.type=E,this.capture=!!S,this.ha=G,this.key=++Ne,this.da=this.fa=!1}function et(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function kt(c){this.src=c,this.g={},this.h=0}kt.prototype.add=function(c,m,E,S,G){var Y=c.toString();c=this.g[Y],c||(c=this.g[Y]=[],this.h++);var ue=Nr(c,m,S,G);return-1<ue?(m=c[ue],E||(m.fa=!1)):(m=new Fe(m,this.src,Y,!!S,G),m.fa=E,c.push(m)),m};function Dt(c,m){var E=m.type;if(E in c.g){var S=c.g[E],G=Array.prototype.indexOf.call(S,m,void 0),Y;(Y=0<=G)&&Array.prototype.splice.call(S,G,1),Y&&(et(m),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Nr(c,m,E,S){for(var G=0;G<c.length;++G){var Y=c[G];if(!Y.da&&Y.listener==m&&Y.capture==!!E&&Y.ha==S)return G}return-1}var Or="closure_lm_"+(1e6*Math.random()|0),Fn={};function Bn(c,m,E,S,G){if(Array.isArray(m)){for(var Y=0;Y<m.length;Y++)Bn(c,m[Y],E,S,G);return null}return E=La(E),c&&c[Oe]?c.K(m,E,g(S)?!!S.capture:!1,G):Un(c,m,E,!1,S,G)}function Un(c,m,E,S,G,Y){if(!m)throw Error("Invalid event type");var ue=g(G)?!!G.capture:!!G,tt=os(c);if(tt||(c[Or]=tt=new kt(c)),E=tt.add(m,E,S,ue,Y),E.proxy)return E;if(S=is(),E.proxy=S,S.src=c,S.listener=E,c.addEventListener)Ae||(G=ue),G===void 0&&(G=!1),c.addEventListener(m.toString(),S,G);else if(c.attachEvent)c.attachEvent(jn(m.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return E}function is(){function c(E){return m.call(c.src,c.listener,E)}const m=Oa;return c}function Lr(c,m,E,S,G){if(Array.isArray(m))for(var Y=0;Y<m.length;Y++)Lr(c,m[Y],E,S,G);else S=g(S)?!!S.capture:!!S,E=La(E),c&&c[Oe]?(c=c.i,m=String(m).toString(),m in c.g&&(Y=c.g[m],E=Nr(Y,E,S,G),-1<E&&(et(Y[E]),Array.prototype.splice.call(Y,E,1),Y.length==0&&(delete c.g[m],c.h--)))):c&&(c=os(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Nr(m,E,S,G)),(E=-1<c?m[c]:null)&&wr(E))}function wr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Oe])Dt(m.i,c);else{var E=c.type,S=c.proxy;m.removeEventListener?m.removeEventListener(E,S,c.capture):m.detachEvent?m.detachEvent(jn(E),S):m.addListener&&m.removeListener&&m.removeListener(S),(E=os(m))?(Dt(E,c),E.h==0&&(E.src=null,m[Or]=null)):et(c)}}}function jn(c){return c in Fn?Fn[c]:Fn[c]="on"+c}function Oa(c,m){if(c.da)c=!0;else{m=new _e(m,this);var E=c.listener,S=c.ha||c.src;c.fa&&wr(c),c=E.call(S,m)}return c}function os(c){return c=c[Or],c instanceof kt?c:null}var ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function La(c){return typeof c=="function"?c:(c[ss]||(c[ss]=function(m){return c.handleEvent(m)}),c[ss])}function Tt(){X.call(this),this.i=new kt(this),this.M=this,this.F=null}C(Tt,X),Tt.prototype[Oe]=!0,Tt.prototype.removeEventListener=function(c,m,E,S){Lr(this,c,m,E,S)};function St(c,m){var E,S=c.F;if(S)for(E=[];S;S=S.F)E.push(S);if(c=c.M,S=m.type||m,typeof m=="string")m=new pe(m,c);else if(m instanceof pe)m.target=m.target||c;else{var G=m;m=new pe(S,c),N(m,G)}if(G=!0,E)for(var Y=E.length-1;0<=Y;Y--){var ue=m.g=E[Y];G=$n(ue,S,!0,m)&&G}if(ue=m.g=c,G=$n(ue,S,!0,m)&&G,G=$n(ue,S,!1,m)&&G,E)for(Y=0;Y<E.length;Y++)ue=m.g=E[Y],G=$n(ue,S,!1,m)&&G}Tt.prototype.N=function(){if(Tt.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var E=c.g[m],S=0;S<E.length;S++)et(E[S]);delete c.g[m],c.h--}}this.F=null},Tt.prototype.K=function(c,m,E,S){return this.i.add(String(c),m,!1,E,S)},Tt.prototype.L=function(c,m,E,S){return this.i.add(String(c),m,!0,E,S)};function $n(c,m,E,S){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var G=!0,Y=0;Y<m.length;++Y){var ue=m[Y];if(ue&&!ue.da&&ue.capture==E){var tt=ue.listener,bt=ue.ha||ue.src;ue.fa&&Dt(c.i,ue),G=tt.call(bt,S)!==!1&&G}}return G&&!S.defaultPrevented}function Ma(c,m,E){if(typeof c=="function")E&&(c=w(c,E));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function pi(c){c.g=Ma(()=>{c.g=null,c.i&&(c.i=!1,pi(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class ho extends X{constructor(m,E){super(),this.m=m,this.l=E,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:pi(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(c){X.call(this),this.h=c,this.g={}}C(fo,X);var Va=[];function Fa(c){Q(c.g,function(m,E){this.g.hasOwnProperty(E)&&wr(m)},c),c.g={}}fo.prototype.N=function(){fo.aa.N.call(this),Fa(this)},fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ba=d.JSON.stringify,Ua=d.JSON.parse,ja=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function po(){}po.prototype.h=null;function as(c){return c.h||(c.h=c.i())}function ls(){}var Mr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _n(){pe.call(this,"d")}C(_n,pe);function us(){pe.call(this,"c")}C(us,pe);var wn={},$a=null;function go(){return $a=$a||new Tt}wn.La="serverreachability";function za(c){pe.call(this,wn.La,c)}C(za,pe);function zn(c){const m=go();St(m,new za(m))}wn.STAT_EVENT="statevent";function Wa(c,m){pe.call(this,wn.STAT_EVENT,c),this.stat=m}C(Wa,pe);function mt(c){const m=go();St(m,new Wa(m,c))}wn.Ma="timingevent";function cs(c,m){pe.call(this,wn.Ma,c),this.size=m}C(cs,pe);function Jr(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function mo(){this.g=!0}mo.prototype.xa=function(){this.g=!1};function vo(c,m,E,S,G,Y){c.info(function(){if(c.g)if(Y)for(var ue="",tt=Y.split("&"),bt=0;bt<tt.length;bt++){var We=tt[bt].split("=");if(1<We.length){var Nt=We[0];We=We[1];var _t=Nt.split("_");ue=2<=_t.length&&_t[1]=="type"?ue+(Nt+"="+We+"&"):ue+(Nt+"=redacted&")}}else ue=null;else ue=Y;return"XMLHTTP REQ ("+S+") [attempt "+G+"]: "+m+`
`+E+`
`+ue})}function ds(c,m,E,S,G,Y,ue){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+G+"]: "+m+`
`+E+`
`+Y+" "+ue})}function Zr(c,m,E,S){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Ch(c,E)+(S?" "+S:"")})}function Ga(c,m){c.info(function(){return"TIMEOUT: "+m})}mo.prototype.info=function(){};function Ch(c,m){if(!c.g)return m;if(!m)return null;try{var E=JSON.parse(m);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var S=E[c];if(!(2>S.length)){var G=S[1];if(Array.isArray(G)&&!(1>G.length)){var Y=G[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var ue=1;ue<G.length;ue++)G[ue]=""}}}}return Ba(E)}catch{return m}}var hs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},en;function yo(){}C(yo,po),yo.prototype.g=function(){return new XMLHttpRequest},yo.prototype.i=function(){return{}},en=new yo;function tn(c,m,E,S){this.j=c,this.i=m,this.l=E,this.R=S||1,this.U=new fo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Su}function Su(){this.i=null,this.g="",this.h=!1}var Ha={},fs={};function ps(c,m,E){c.L=1,c.v=_i(Ir(m)),c.m=E,c.P=!0,qa(c,null)}function qa(c,m){c.F=Date.now(),it(c),c.A=Ir(c.v);var E=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Ei(E.i,"t",S),c.C=0,E=c.j.J,c.h=new Su,c.g=$u(c.j,E?m:null,!c.m),0<c.O&&(c.M=new ho(w(c.Y,c,c.g),c.O)),m=c.U,E=c.g,S=c.ca;var G="readystatechange";Array.isArray(G)||(G&&(Va[0]=G.toString()),G=Va);for(var Y=0;Y<G.length;Y++){var ue=Bn(E,G[Y],S||m.handleEvent,!1,m.h||m);if(!ue)break;m.g[ue.key]=ue}m=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),zn(),vo(c.i,c.u,c.A,c.l,c.R,c.m)}tn.prototype.ca=function(c){c=c.target;const m=this.M;m&&dr(c)==3?m.j():this.Y(c)},tn.prototype.Y=function(c){try{if(c==this.g)e:{const _t=dr(this.g);var m=this.g.Ba();const Br=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Za(this.g)))){this.J||_t!=4||m==7||(m==8||0>=Br?zn(3):zn(2)),_o(this);var E=this.g.Z();this.X=E;t:if(bu(this)){var S=Za(this.g);c="";var G=S.length,Y=dr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Vr(this),gi(this);var ue="";break t}this.h.i=new d.TextDecoder}for(m=0;m<G;m++)this.h.h=!0,c+=this.h.i.decode(S[m],{stream:!(Y&&m==G-1)});S.length=0,this.h.g+=c,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,ds(this.i,this.u,this.A,this.l,this.R,_t,E),this.o){if(this.T&&!this.K){t:{if(this.g){var tt,bt=this.g;if((tt=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(tt)){var We=tt;break t}}We=null}if(E=We)Zr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ka(this,E);else{this.o=!1,this.s=3,mt(12),Vr(this),gi(this);break e}}if(this.P){E=!0;let Sr;for(;!this.J&&this.C<ue.length;)if(Sr=Ah(this,ue),Sr==fs){_t==4&&(this.s=4,mt(14),E=!1),Zr(this.i,this.l,null,"[Incomplete Response]");break}else if(Sr==Ha){this.s=4,mt(15),Zr(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else Zr(this.i,this.l,Sr,null),Ka(this,Sr);if(bu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||ue.length!=0||this.h.h||(this.s=1,mt(16),E=!1),this.o=this.o&&E,!E)Zr(this.i,this.l,ue,"[Invalid Chunked Response]"),Vr(this),gi(this);else if(0<ue.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),tl(Nt),Nt.M=!0,mt(11))}}else Zr(this.i,this.l,ue,null),Ka(this,ue);_t==4&&Vr(this),this.o&&!this.J&&(_t==4?bs(this.j,this):(this.o=!1,it(this)))}else ws(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Vr(this),gi(this)}}}catch{}finally{}};function bu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ah(c,m){var E=c.C,S=m.indexOf(`
`,E);return S==-1?fs:(E=Number(m.substring(E,S)),isNaN(E)?Ha:(S+=1,S+E>m.length?fs:(m=m.slice(S,S+E),c.C=S+E,m)))}tn.prototype.cancel=function(){this.J=!0,Vr(this)};function it(c){c.S=Date.now()+c.I,Cu(c,c.I)}function Cu(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Jr(w(c.ba,c),m)}function _o(c){c.B&&(d.clearTimeout(c.B),c.B=null)}tn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ga(this.i,this.A),this.L!=2&&(zn(),mt(17)),Vr(this),this.s=2,gi(this)):Cu(this,this.S-c)};function gi(c){c.j.G==0||c.J||bs(c.j,c)}function Vr(c){_o(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Fa(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Ka(c,m){try{var E=c.j;if(E.G!=0&&(E.g==c||or(E.h,c))){if(!c.K&&or(E.h,c)&&E.G==3){try{var S=E.Da.g.parse(m)}catch{S=null}if(Array.isArray(S)&&S.length==3){var G=S;if(G[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)Ss(E),an(E);else break e;Ts(E),mt(18)}}else E.za=G[1],0<E.za-E.T&&37500>G[2]&&E.F&&E.v==0&&!E.C&&(E.C=Jr(w(E.Za,E),6e3));if(1>=Pu(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Kn(E,11)}else if((c.K||E.g==c)&&Ss(E),!V(m))for(G=E.Da.g.parse(m),m=0;m<G.length;m++){let We=G[m];if(E.T=We[0],We=We[1],E.G==2)if(We[0]=="c"){E.K=We[1],E.ia=We[2];const Nt=We[3];Nt!=null&&(E.la=Nt,E.j.info("VER="+E.la));const _t=We[4];_t!=null&&(E.Aa=_t,E.j.info("SVER="+E.Aa));const Br=We[5];Br!=null&&typeof Br=="number"&&0<Br&&(S=1.5*Br,E.L=S,E.j.info("backChannelRequestTimeoutMs_="+S)),S=E;const Sr=c.g;if(Sr){const Co=Sr.g?Sr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var Y=S.h;Y.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Qa(Y,Y.h),Y.h=null))}if(S.D){const As=Sr.g?Sr.g.getResponseHeader("X-HTTP-Session-Id"):null;As&&(S.ya=As,nt(S.I,S.D,As))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),S=E;var ue=c;if(S.qa=ju(S,S.J?S.ia:null,S.W),ue.K){Ru(S.h,ue);var tt=ue,bt=S.L;bt&&(tt.I=bt),tt.B&&(_o(tt),it(tt)),S.g=ue}else bo(S);0<E.i.length&&Sn(E)}else We[0]!="stop"&&We[0]!="close"||Kn(E,7);else E.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?Kn(E,7):zt(E):We[0]!="noop"&&E.l&&E.l.ta(We),E.v=0)}}zn(4)}catch{}}var Au=class{constructor(c,m){this.g=c,this.map=m}};function wo(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Er(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Pu(c){return c.h?1:c.g?c.g.size:0}function or(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Qa(c,m){c.g?c.g.add(m):c.h=m}function Ru(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}wo.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function xu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const E of c.g.values())m=m.concat(E.D);return m}return D(c.i)}function gs(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],E=c.length,S=0;S<E;S++)m.push(c[S]);return m}m=[],E=0;for(S in c)m[E++]=c[S];return m}function ms(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var E=0;E<c;E++)m.push(E);return m}m=[],E=0;for(const S in c)m[E++]=S;return m}}}function mi(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var E=ms(c),S=gs(c),G=S.length,Y=0;Y<G;Y++)m.call(void 0,S[Y],E&&E[Y],c)}var Eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ph(c,m){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var S=c[E].indexOf("="),G=null;if(0<=S){var Y=c[E].substring(0,S);G=c[E].substring(S+1)}else Y=c[E];m(Y,G?decodeURIComponent(G.replace(/\+/g," ")):"")}}}function Wn(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Wn){this.h=c.h,Io(this,c.j),this.o=c.o,this.g=c.g,vi(this,c.s),this.l=c.l;var m=c.i,E=new En;E.i=m.i,m.g&&(E.g=new Map(m.g),E.h=m.h),yi(this,E),this.m=c.m}else c&&(m=String(c).match(Eo))?(this.h=!1,Io(this,m[1]||"",!0),this.o=ze(m[2]||""),this.g=ze(m[3]||"",!0),vi(this,m[4]),this.l=ze(m[5]||"",!0),yi(this,m[6]||"",!0),this.m=ze(m[7]||"")):(this.h=!1,this.i=new En(null,this.h))}Wn.prototype.toString=function(){var c=[],m=this.j;m&&c.push(wi(m,vs,!0),":");var E=this.g;return(E||m=="file")&&(c.push("//"),(m=this.o)&&c.push(wi(m,vs,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(wi(E,E.charAt(0)=="/"?Nu:Du,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",wi(E,Ya)),c.join("")};function Ir(c){return new Wn(c)}function Io(c,m,E){c.j=E?ze(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function vi(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function yi(c,m,E){m instanceof En?(c.i=m,In(c.i,c.h)):(E||(m=wi(m,Ou)),c.i=new En(m,c.h))}function nt(c,m,E){c.i.set(m,E)}function _i(c){return nt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ze(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function wi(c,m,E){return typeof c=="string"?(c=encodeURI(c).replace(m,ku),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ku(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var vs=/[#\/\?@]/g,Du=/[#\?:]/g,Nu=/[#\?]/g,Ou=/[#\?@]/g,Ya=/#/g;function En(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function $t(c){c.g||(c.g=new Map,c.h=0,c.i&&Ph(c.i,function(m,E){c.add(decodeURIComponent(m.replace(/\+/g," ")),E)}))}t=En.prototype,t.add=function(c,m){$t(this),this.i=null,c=Fr(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(m),this.h+=1,this};function rn(c,m){$t(c),m=Fr(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function nn(c,m){return $t(c),m=Fr(c,m),c.g.has(m)}t.forEach=function(c,m){$t(this),this.g.forEach(function(E,S){E.forEach(function(G){c.call(m,G,S,this)},this)},this)},t.na=function(){$t(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),E=[];for(let S=0;S<m.length;S++){const G=c[S];for(let Y=0;Y<G.length;Y++)E.push(m[S])}return E},t.V=function(c){$t(this);let m=[];if(typeof c=="string")nn(this,c)&&(m=m.concat(this.g.get(Fr(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)m=m.concat(c[E])}return m},t.set=function(c,m){return $t(this),this.i=null,c=Fr(this,c),nn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},t.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Ei(c,m,E){rn(c,m),0<E.length&&(c.i=null,c.g.set(Fr(c,m),D(E)),c.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var E=0;E<m.length;E++){var S=m[E];const Y=encodeURIComponent(String(S)),ue=this.V(S);for(S=0;S<ue.length;S++){var G=Y;ue[S]!==""&&(G+="="+encodeURIComponent(String(ue[S]))),c.push(G)}}return this.i=c.join("&")};function Fr(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function In(c,m){m&&!c.j&&($t(c),c.i=null,c.g.forEach(function(E,S){var G=S.toLowerCase();S!=G&&(rn(this,S),Ei(this,G,E))},c)),c.j=m}function Rh(c,m){const E=new mo;if(d.Image){const S=new Image;S.onload=I(cr,E,"TestLoadImage: loaded",!0,m,S),S.onerror=I(cr,E,"TestLoadImage: error",!1,m,S),S.onabort=I(cr,E,"TestLoadImage: abort",!1,m,S),S.ontimeout=I(cr,E,"TestLoadImage: timeout",!1,m,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else m(!1)}function Lu(c,m){const E=new mo,S=new AbortController,G=setTimeout(()=>{S.abort(),cr(E,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:S.signal}).then(Y=>{clearTimeout(G),Y.ok?cr(E,"TestPingServer: ok",!0,m):cr(E,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(G),cr(E,"TestPingServer: error",!1,m)})}function cr(c,m,E,S,G){try{G&&(G.onload=null,G.onerror=null,G.onabort=null,G.ontimeout=null),S(E)}catch{}}function xh(){this.g=new ja}function Mu(c,m,E){const S=E||"";try{mi(c,function(G,Y){let ue=G;g(G)&&(ue=Ba(G)),m.push(S+Y+"="+encodeURIComponent(ue))})}catch(G){throw m.push(S+"type="+encodeURIComponent("_badmap")),G}}function Gn(c){this.l=c.Ub||null,this.j=c.eb||!1}C(Gn,po),Gn.prototype.g=function(){return new To(this.l,this.j)},Gn.prototype.i=function(c){return function(){return c}}({});function To(c,m){Tt.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(To,Tt),t=To.prototype,t.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,sn(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,on(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,sn(this)),this.g&&(this.readyState=3,sn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Vu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Vu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?on(this):sn(this),this.readyState==3&&Vu(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,on(this))},t.Qa=function(c){this.g&&(this.response=c,on(this))},t.ga=function(){this.g&&on(this)};function on(c){c.readyState=4,c.l=null,c.j=null,c.v=null,sn(c)}t.setRequestHeader=function(c,m){this.u.append(c,m)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var E=m.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=m.next();return c.join(`\r
`)};function sn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(To.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Hn(c){let m="";return Q(c,function(E,S){m+=S,m+=":",m+=E,m+=`\r
`}),m}function Ii(c,m,E){e:{for(S in E){var S=!1;break e}S=!0}S||(E=Hn(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):nt(c,m,E))}function ut(c){Tt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ut,Tt);var kh=/^https?$/i,Xa=["POST","PUT"];t=ut.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,m,E,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():en.g(),this.v=this.o?as(this.o):as(en),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(Y){So(this,Y);return}if(c=E||"",E=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var G in S)E.set(G,S[G]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const Y of S.keys())E.set(Y,S.get(Y));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(E.keys()).find(Y=>Y.toLowerCase()=="content-type"),G=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Xa,m,void 0))||S||G||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,ue]of E)this.g.setRequestHeader(Y,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_s(this),this.u=!0,this.g.send(c),this.u=!1}catch(Y){So(this,Y)}};function So(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,ys(c),Tr(c)}function ys(c){c.A||(c.A=!0,St(c,"complete"),St(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,St(this,"complete"),St(this,"abort"),Tr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ja(this):this.bb())},t.bb=function(){Ja(this)};function Ja(c){if(c.h&&typeof u<"u"&&(!c.v[1]||dr(c)!=4||c.Z()!=2)){if(c.u&&dr(c)==4)Ma(c.Ea,0,c);else if(St(c,"readystatechange"),dr(c)==4){c.h=!1;try{const ue=c.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var E;if(!(E=m)){var S;if(S=ue===0){var G=String(c.D).match(Eo)[1]||null;!G&&d.self&&d.self.location&&(G=d.self.location.protocol.slice(0,-1)),S=!kh.test(G?G.toLowerCase():"")}E=S}if(E)St(c,"complete"),St(c,"success");else{c.m=6;try{var Y=2<dr(c)?c.g.statusText:""}catch{Y=""}c.l=Y+" ["+c.Z()+"]",ys(c)}}finally{Tr(c)}}}}function Tr(c,m){if(c.g){_s(c);const E=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||St(c,"ready");try{E.onreadystatechange=S}catch{}}}function _s(c){c.I&&(d.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function dr(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<dr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Ua(m)}};function Za(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ws(c){const m={};c=(c.g&&2<=dr(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(V(c[S]))continue;var E=L(c[S]);const G=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Y=m[G]||[];m[G]=Y,Y.push(E)}P(m,function(S){return S.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Tn(c,m,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||m}function el(c){this.Aa=0,this.i=[],this.j=new mo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Tn("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Tn("baseRetryDelayMs",5e3,c),this.cb=Tn("retryDelaySeedMs",1e4,c),this.Wa=Tn("forwardChannelMaxRetries",2,c),this.wa=Tn("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new wo(c&&c.concurrentRequestLimit),this.Da=new xh,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=el.prototype,t.la=8,t.G=1,t.connect=function(c,m,E,S){mt(0),this.W=c,this.H=m||{},E&&S!==void 0&&(this.H.OSID=E,this.H.OAID=S),this.F=this.X,this.I=ju(this,null,this.W),Sn(this)};function zt(c){if(Es(c),c.G==3){var m=c.U++,E=Ir(c.I);if(nt(E,"SID",c.K),nt(E,"RID",m),nt(E,"TYPE","terminate"),qn(c,E),m=new tn(c,c.j,m),m.L=2,m.v=_i(Ir(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=m.v,E=!0),E||(m.g=$u(m.j,null),m.g.ea(m.v)),m.F=Date.now(),it(m)}Uu(c)}function an(c){c.g&&(tl(c),c.g.cancel(),c.g=null)}function Es(c){an(c),c.u&&(d.clearTimeout(c.u),c.u=null),Ss(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Sn(c){if(!Er(c.h)&&!c.s){c.s=!0;var m=c.Ga;Me||ae(),ie||(Me(),ie=!0),ce.add(m,c),c.B=0}}function Dh(c,m){return Pu(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Jr(w(c.Ga,c,m),Bu(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const G=new tn(this,this.j,c);let Y=this.o;if(this.S&&(Y?(Y=A(Y),N(Y,this.S)):Y=this.S),this.m!==null||this.O||(G.H=Y,Y=null),this.P)e:{for(var m=0,E=0;E<this.i.length;E++){t:{var S=this.i[E];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(m+=S,4096<m){m=E;break e}if(m===4096||E===this.i.length-1){m=E+1;break e}}m=1e3}else m=1e3;m=Ti(this,G,m),E=Ir(this.I),nt(E,"RID",c),nt(E,"CVER",22),this.D&&nt(E,"X-HTTP-Session-Id",this.D),qn(this,E),Y&&(this.O?m="headers="+encodeURIComponent(String(Hn(Y)))+"&"+m:this.m&&Ii(E,this.m,Y)),Qa(this.h,G),this.Ua&&nt(E,"TYPE","init"),this.P?(nt(E,"$req",m),nt(E,"SID","null"),G.T=!0,ps(G,E,null)):ps(G,E,m),this.G=2}}else this.G==3&&(c?Is(this,c):this.i.length==0||Er(this.h)||Is(this))};function Is(c,m){var E;m?E=m.l:E=c.U++;const S=Ir(c.I);nt(S,"SID",c.K),nt(S,"RID",E),nt(S,"AID",c.T),qn(c,S),c.m&&c.o&&Ii(S,c.m,c.o),E=new tn(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Ti(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Qa(c.h,E),ps(E,S,m)}function qn(c,m){c.H&&Q(c.H,function(E,S){nt(m,S,E)}),c.l&&mi({},function(E,S){nt(m,S,E)})}function Ti(c,m,E){E=Math.min(c.i.length,E);var S=c.l?w(c.l.Na,c.l,c):null;e:{var G=c.i;let Y=-1;for(;;){const ue=["count="+E];Y==-1?0<E?(Y=G[0].g,ue.push("ofs="+Y)):Y=0:ue.push("ofs="+Y);let tt=!0;for(let bt=0;bt<E;bt++){let We=G[bt].g;const Nt=G[bt].map;if(We-=Y,0>We)Y=Math.max(0,G[bt].g-100),tt=!1;else try{Mu(Nt,ue,"req"+We+"_")}catch{S&&S(Nt)}}if(tt){S=ue.join("&");break e}}}return c=c.i.splice(0,E),m.D=c,S}function bo(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Me||ae(),ie||(Me(),ie=!0),ce.add(m,c),c.v=0}}function Ts(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Jr(w(c.Fa,c),Bu(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Fu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Jr(w(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),an(this),Fu(this))};function tl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Fu(c){c.g=new tn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=Ir(c.qa);nt(m,"RID","rpc"),nt(m,"SID",c.K),nt(m,"AID",c.T),nt(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&nt(m,"TO",c.ja),nt(m,"TYPE","xmlhttp"),qn(c,m),c.m&&c.o&&Ii(m,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=_i(Ir(m)),E.m=null,E.P=!0,qa(E,c)}t.Za=function(){this.C!=null&&(this.C=null,an(this),Ts(this),mt(19))};function Ss(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function bs(c,m){var E=null;if(c.g==m){Ss(c),tl(c),c.g=null;var S=2}else if(or(c.h,m))E=m.D,Ru(c.h,m),S=1;else return;if(c.G!=0){if(m.o)if(S==1){E=m.m?m.m.length:0,m=Date.now()-m.F;var G=c.B;S=go(),St(S,new cs(S,E)),Sn(c)}else bo(c);else if(G=m.s,G==3||G==0&&0<m.X||!(S==1&&Dh(c,m)||S==2&&Ts(c)))switch(E&&0<E.length&&(m=c.h,m.i=m.i.concat(E)),G){case 1:Kn(c,5);break;case 4:Kn(c,10);break;case 3:Kn(c,6);break;default:Kn(c,2)}}}function Bu(c,m){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*m}function Kn(c,m){if(c.j.info("Error code "+m),m==2){var E=w(c.fb,c),S=c.Xa;const G=!S;S=new Wn(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Io(S,"https"),_i(S),G?Rh(S.toString(),E):Lu(S.toString(),E)}else mt(2);c.G=0,c.l&&c.l.sa(m),Uu(c),Es(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Uu(c){if(c.G=0,c.ka=[],c.l){const m=xu(c.h);(m.length!=0||c.i.length!=0)&&(x(c.ka,m),x(c.ka,c.i),c.h.i.length=0,D(c.i),c.i.length=0),c.l.ra()}}function ju(c,m,E){var S=E instanceof Wn?Ir(E):new Wn(E);if(S.g!="")m&&(S.g=m+"."+S.g),vi(S,S.s);else{var G=d.location;S=G.protocol,m=m?m+"."+G.hostname:G.hostname,G=+G.port;var Y=new Wn(null);S&&Io(Y,S),m&&(Y.g=m),G&&vi(Y,G),E&&(Y.l=E),S=Y}return E=c.D,m=c.ya,E&&m&&nt(S,E,m),nt(S,"VER",c.la),qn(c,S),S}function $u(c,m,E){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new ut(new Gn({eb:E})):new ut(c.pa),m.Ha(c.J),m}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rl(){}t=rl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Cs(){}Cs.prototype.g=function(c,m){return new sr(c,m)};function sr(c,m){Tt.call(this),this.g=new el(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!V(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!V(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new bn(this)}C(sr,Tt),sr.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sr.prototype.close=function(){zt(this.g)},sr.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=Ba(c),c=E);m.i.push(new Au(m.Ya++,c)),m.G==3&&Sn(m)},sr.prototype.N=function(){this.g.l=null,delete this.j,zt(this.g),delete this.g,sr.aa.N.call(this)};function zu(c){_n.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const E in m){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}C(zu,_n);function Wu(){us.call(this),this.status=1}C(Wu,us);function bn(c){this.g=c}C(bn,rl),bn.prototype.ua=function(){St(this.g,"a")},bn.prototype.ta=function(c){St(this.g,new zu(c))},bn.prototype.sa=function(c){St(this.g,new Wu)},bn.prototype.ra=function(){St(this.g,"b")},Cs.prototype.createWebChannel=Cs.prototype.g,sr.prototype.send=sr.prototype.o,sr.prototype.open=sr.prototype.m,sr.prototype.close=sr.prototype.close,bI=function(){return new Cs},SI=function(){return go()},TI=wn,ig={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hs.NO_ERROR=0,hs.TIMEOUT=8,hs.HTTP_ERROR=6,od=hs,Tu.COMPLETE="complete",II=Tu,ls.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Tt.prototype.listen=Tt.prototype.K,Ol=ls,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,EI=ut}).apply(typeof jc<"u"?jc:typeof self<"u"?self:typeof window<"u"?window:{});const lw="@firebase/firestore",uw="4.7.11";/**
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
 */class tr{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tr.UNAUTHENTICATED=new tr(null),tr.GOOGLE_CREDENTIALS=new tr("google-credentials-uid"),tr.FIRST_PARTY=new tr("first-party-uid"),tr.MOCK_USER=new tr("mock-user");/**
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
 */let Aa="11.6.1";/**
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
 */const Xo=new Lg("@firebase/firestore");function Xs(){return Xo.logLevel}function he(t,...e){if(Xo.logLevel<=Ue.DEBUG){const r=e.map(Hg);Xo.debug(`Firestore (${Aa}): ${t}`,...r)}}function di(t,...e){if(Xo.logLevel<=Ue.ERROR){const r=e.map(Hg);Xo.error(`Firestore (${Aa}): ${t}`,...r)}}function fa(t,...e){if(Xo.logLevel<=Ue.WARN){const r=e.map(Hg);Xo.warn(`Firestore (${Aa}): ${t}`,...r)}}function Hg(t){if(typeof t=="string")return t;try{/**
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
*/return function(r){return JSON.stringify(r)}(t)}catch{return t}}/**
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
 */function Pe(t,e,r){let n="Unexpected state";typeof e=="string"?n=e:r=e,CI(t,n,r)}function CI(t,e,r){let n=`FIRESTORE (${Aa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(r!==void 0)try{n+=" CONTEXT: "+JSON.stringify(r)}catch{n+=" CONTEXT: "+r}throw di(n),new Error(n)}function Ze(t,e,r,n){let s="Unexpected state";typeof r=="string"?s=r:n=r,t||CI(e,s,n)}function De(t,e){return t}/**
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
 */const ne={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Te extends fi{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yi{constructor(){this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}}/**
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
 */class AI{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Kx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(tr.UNAUTHENTICATED))}shutdown(){}}class Qx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class Yx{constructor(e){this.t=e,this.currentUser=tr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){Ze(this.o===void 0,42304);let n=this.i;const s=f=>this.i!==n?(n=this.i,r(f)):Promise.resolve();let a=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Yi,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},d=f=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Yi)}},0),u()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ze(typeof n.accessToken=="string",31837,{l:n}),new AI(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new tr(e)}}class Xx{constructor(e,r,n){this.P=e,this.T=r,this.I=n,this.type="FirstParty",this.user=tr.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Jx{constructor(e,r,n){this.P=e,this.T=r,this.I=n}getToken(){return Promise.resolve(new Xx(this.P,this.T,this.I))}start(e,r){e.enqueueRetryable(()=>r(tr.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zx{constructor(e,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,qr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,r){Ze(this.o===void 0,3512);const n=a=>{a.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,he("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?r(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>n(a))};const s=a=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(Ze(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new cw(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function ek(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
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
 */function PI(){return new TextEncoder}/**
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
 */class RI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=ek(40);for(let a=0;a<s.length;++a)n.length<20&&s[a]<r&&(n+=e.charAt(s[a]%62))}return n}}function Ve(t,e){return t<e?-1:t>e?1:0}function og(t,e){let r=0;for(;r<t.length&&r<e.length;){const n=t.codePointAt(r),s=e.codePointAt(r);if(n!==s){if(n<128&&s<128)return Ve(n,s);{const a=PI(),u=tk(a.encode(dw(t,r)),a.encode(dw(e,r)));return u!==0?u:Ve(n,s)}}r+=n>65535?2:1}return Ve(t.length,e.length)}function dw(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function tk(t,e){for(let r=0;r<t.length&&r<e.length;++r)if(t[r]!==e[r])return Ve(t[r],e[r]);return Ve(t.length,e.length)}function pa(t,e,r){return t.length===e.length&&t.every((n,s)=>r(n,e[s]))}/**
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
 */const hw=-62135596800,fw=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor((e-1e3*r)*fw);return new Rt(r,n)}constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new Te(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new Te(ne.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<hw)throw new Te(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Te(ne.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fw}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-hw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ke{static fromTimestamp(e){return new ke(e)}static min(){return new ke(new Rt(0,0))}static max(){return new ke(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pw="__name__";class xn{constructor(e,r,n){r===void 0?r=0:r>e.length&&Pe(637,{offset:r,range:e.length}),n===void 0?n=e.length-r:n>e.length-r&&Pe(1746,{length:n,range:e.length-r}),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let s=0;s<n;s++){const a=xn.compareSegments(e.get(s),r.get(s));if(a!==0)return a}return Ve(e.length,r.length)}static compareSegments(e,r){const n=xn.isNumericId(e),s=xn.isNumericId(r);return n&&!s?-1:!n&&s?1:n&&s?xn.extractNumericId(e).compare(xn.extractNumericId(r)):og(e,r)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qi.fromString(e.substring(4,e.length-2))}}class gt extends xn{construct(e,r,n){return new gt(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new Te(ne.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(s=>s.length>0))}return new gt(r)}static emptyPath(){return new gt([])}}const rk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends xn{construct(e,r,n){return new qt(e,r,n)}static isValidIdentifier(e){return rk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pw}static keyField(){return new qt([pw])}static fromServerFormat(e){const r=[];let n="",s=0;const a=()=>{if(n.length===0)throw new Te(ne.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new Te(ne.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new Te(ne.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(n+=d,s++):(a(),s++)}if(a(),u)throw new Te(ne.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(r)}static emptyPath(){return new qt([])}}/**
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
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(gt.fromString(e))}static fromName(e){return new Se(gt.fromString(e).popFirst(5))}static empty(){return new Se(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&gt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return gt.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new gt(e.slice()))}}/**
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
 */const Xl=-1;function nk(t,e){const r=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,s=ke.fromTimestamp(n===1e9?new Rt(r+1,0):new Rt(r,n));return new eo(s,Se.empty(),e)}function ik(t){return new eo(t.readTime,t.key,Xl)}class eo{constructor(e,r,n){this.readTime=e,this.documentKey=r,this.largestBatchId=n}static min(){return new eo(ke.min(),Se.empty(),Xl)}static max(){return new eo(ke.max(),Se.empty(),Xl)}}function ok(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=Se.comparator(t.documentKey,e.documentKey),r!==0?r:Ve(t.largestBatchId,e.largestBatchId))}/**
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
 */const sk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ak{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pa(t){if(t.code!==ne.FAILED_PRECONDITION||t.message!==sk)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&Pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new J((n,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,s)},this.catchCallback=a=>{this.wrapFailure(r,a).next(n,s)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof J?r:J.resolve(r)}catch(r){return J.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):J.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):J.reject(r)}static resolve(e){return new J((r,n)=>{r(e)})}static reject(e){return new J((r,n)=>{n(e)})}static waitFor(e){return new J((r,n)=>{let s=0,a=0,u=!1;e.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&r()},f=>n(f))}),u=!0,a===s&&r()})}static or(e){let r=J.resolve(!1);for(const n of e)r=r.next(s=>s?J.resolve(s):n());return r}static forEach(e,r){const n=[];return e.forEach((s,a)=>{n.push(r.call(this,s,a))}),this.waitFor(n)}static mapArray(e,r){return new J((n,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;r(e[g]).next(y=>{u[g]=y,++d,d===a&&n(u)},y=>s(y))}})}static doWhile(e,r){return new J((n,s)=>{const a=()=>{e()===!0?r().next(()=>{a()},s):n()};a()})}}function lk(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function Ra(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rh{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>r.writeSequenceNumber(n))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}rh.le=-1;/**
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
 */const qg=-1;function nh(t){return t==null}function Sd(t){return t===0&&1/t==-1/0}function uk(t){return typeof t=="number"&&Number.isInteger(t)&&!Sd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const xI="";function ck(t){let e="";for(let r=0;r<t.length;r++)e.length>0&&(e=gw(e)),e=dk(t.get(r),e);return gw(e)}function dk(t,e){let r=e;const n=t.length;for(let s=0;s<n;s++){const a=t.charAt(s);switch(a){case"\0":r+="";break;case xI:r+="";break;default:r+=a}}return r}function gw(t){return t+xI+""}/**
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
 */function mw(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function uo(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function kI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ft{constructor(e,r){this.comparator=e,this.root=r||Ht.EMPTY}insert(e,r){return new ft(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new ft(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return r+n.left.size;s<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $c(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $c(this.root,e,this.comparator,!1)}getReverseIterator(){return new $c(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $c(this.root,e,this.comparator,!0)}}class $c{constructor(e,r,n,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=r?n(e.key,r):1,r&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,r,n,s,a){this.key=e,this.value=r,this.color=n??Ht.RED,this.left=s??Ht.EMPTY,this.right=a??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,s,a){return new Ht(e??this.key,r??this.value,n??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let s=this;const a=n(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,r,n),null):a===0?s.copy(null,r,null,null,null):s.copy(null,null,null,null,s.right.insert(e,r,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,s=this;if(r(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,r),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),r(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,r))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Pe(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Pe(57766)}get value(){throw Pe(16141)}get color(){throw Pe(16727)}get left(){throw Pe(29726)}get right(){throw Pe(36894)}copy(e,r,n,s,a){return this}insert(e,r,n){return new Ht(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new ft(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;r(s.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new vw(this.data.getIterator())}getIteratorFrom(e){return new vw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const s=r.getNext().key,a=n.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new xt(this.comparator);return r.data=e,r}}class vw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class gn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new gn([])}unionWith(e){let r=new xt(qt.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new gn(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return pa(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */class DI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new DI("Invalid base64 string: "+a):a}}(e);return new Qt(r)}static fromUint8Array(e){const r=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new Qt(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const hk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function to(t){if(Ze(!!t,39018),typeof t=="string"){let e=0;const r=hk.exec(t);if(Ze(!!r,46558,{timestamp:t}),r[1]){let s=r[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ro(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
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
 */const NI="server_timestamp",OI="__type__",LI="__previous_value__",MI="__local_write_time__";function Kg(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[OI])===null||r===void 0?void 0:r.stringValue)===NI}function ih(t){const e=t.mapValue.fields[LI];return Kg(e)?ih(e):e}function Jl(t){const e=to(t.mapValue.fields[MI].timestampValue);return new Rt(e.seconds,e.nanos)}/**
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
 */class fk{constructor(e,r,n,s,a,u,d,f,g){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g}}const bd="(default)";class Zl{constructor(e,r){this.projectId=e,this.database=r||bd}static empty(){return new Zl("","")}get isDefaultDatabase(){return this.database===bd}isEqual(e){return e instanceof Zl&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const VI="__type__",pk="__max__",zc={mapValue:{}},FI="__vector__",Cd="value";function no(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Kg(t)?4:mk(t)?9007199254740991:gk(t)?10:11:Pe(28295,{value:t})}function Mn(t,e){if(t===e)return!0;const r=no(t);if(r!==no(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jl(t).isEqual(Jl(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=to(s.timestampValue),d=to(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,a){return ro(s.bytesValue).isEqual(ro(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,a){return yt(s.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(a.geoPointValue.longitude)}(t,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return yt(s.integerValue)===yt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=yt(s.doubleValue),d=yt(a.doubleValue);return u===d?Sd(u)===Sd(d):isNaN(u)&&isNaN(d)}return!1}(t,e);case 9:return pa(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(mw(u)!==mw(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Mn(u[f],d[f])))return!1;return!0}(t,e);default:return Pe(52216,{left:t})}}function eu(t,e){return(t.values||[]).find(r=>Mn(r,e))!==void 0}function ga(t,e){if(t===e)return 0;const r=no(t),n=no(e);if(r!==n)return Ve(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return function(a,u){const d=yt(a.integerValue||a.doubleValue),f=yt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(t,e);case 3:return yw(t.timestampValue,e.timestampValue);case 4:return yw(Jl(t),Jl(e));case 5:return og(t.stringValue,e.stringValue);case 6:return function(a,u){const d=ro(a),f=ro(u);return d.compareTo(f)}(t.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let g=0;g<d.length&&g<f.length;g++){const y=Ve(d[g],f[g]);if(y!==0)return y}return Ve(d.length,f.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,u){const d=Ve(yt(a.latitude),yt(u.latitude));return d!==0?d:Ve(yt(a.longitude),yt(u.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _w(t.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,g,y;const _=a.fields||{},w=u.fields||{},I=(d=_[Cd])===null||d===void 0?void 0:d.arrayValue,C=(f=w[Cd])===null||f===void 0?void 0:f.arrayValue,D=Ve(((g=I==null?void 0:I.values)===null||g===void 0?void 0:g.length)||0,((y=C==null?void 0:C.values)===null||y===void 0?void 0:y.length)||0);return D!==0?D:_w(I,C)}(t.mapValue,e.mapValue);case 11:return function(a,u){if(a===zc.mapValue&&u===zc.mapValue)return 0;if(a===zc.mapValue)return 1;if(u===zc.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=u.fields||{},y=Object.keys(g);f.sort(),y.sort();for(let _=0;_<f.length&&_<y.length;++_){const w=og(f[_],y[_]);if(w!==0)return w;const I=ga(d[f[_]],g[y[_]]);if(I!==0)return I}return Ve(f.length,y.length)}(t.mapValue,e.mapValue);default:throw Pe(23264,{Pe:r})}}function yw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const r=to(t),n=to(e),s=Ve(r.seconds,n.seconds);return s!==0?s:Ve(r.nanos,n.nanos)}function _w(t,e){const r=t.values||[],n=e.values||[];for(let s=0;s<r.length&&s<n.length;++s){const a=ga(r[s],n[s]);if(a)return a}return Ve(r.length,n.length)}function ma(t){return sg(t)}function sg(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const n=to(r);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(r){return ro(r).toBase64()}(t.bytesValue):"referenceValue"in t?function(r){return Se.fromName(r).toString()}(t.referenceValue):"geoPointValue"in t?function(r){return`geo(${r.latitude},${r.longitude})`}(t.geoPointValue):"arrayValue"in t?function(r){let n="[",s=!0;for(const a of r.values||[])s?s=!1:n+=",",n+=sg(a);return n+"]"}(t.arrayValue):"mapValue"in t?function(r){const n=Object.keys(r.fields||{}).sort();let s="{",a=!0;for(const u of n)a?a=!1:s+=",",s+=`${u}:${sg(r.fields[u])}`;return s+"}"}(t.mapValue):Pe(61005,{value:t})}function sd(t){switch(no(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ih(t);return e?16+sd(e):16;case 5:return 2*t.stringValue.length;case 6:return ro(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,a)=>s+sd(a),0)}(t.arrayValue);case 10:case 11:return function(n){let s=0;return uo(n.fields,(a,u)=>{s+=a.length+sd(u)}),s}(t.mapValue);default:throw Pe(13486,{value:t})}}function ag(t){return!!t&&"integerValue"in t}function Qg(t){return!!t&&"arrayValue"in t}function ww(t){return!!t&&"nullValue"in t}function Ew(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ad(t){return!!t&&"mapValue"in t}function gk(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[VI])===null||r===void 0?void 0:r.stringValue)===FI}function Bl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return uo(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=Bl(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=Bl(t.arrayValue.values[r]);return e}return Object.assign({},t)}function mk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===pk}/**
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
 */class Rr{constructor(e){this.value=e}static empty(){return new Rr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!ad(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bl(r)}setAll(e){let r=qt.emptyPath(),n={},s=[];e.forEach((u,d)=>{if(!r.isImmediateParentOf(d)){const f=this.getFieldsMap(r);this.applyChanges(f,n,s),n={},s=[],r=d.popLast()}u?n[d.lastSegment()]=Bl(u):s.push(d.lastSegment())});const a=this.getFieldsMap(r);this.applyChanges(a,n,s)}delete(e){const r=this.field(e.popLast());ad(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=r.mapValue.fields[e.get(n)];ad(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=s),r=s}return r.mapValue.fields}applyChanges(e,r,n){uo(r,(s,a)=>e[s]=a);for(const s of n)delete e[s]}clone(){return new Rr(Bl(this.value))}}function BI(t){const e=[];return uo(t.fields,(r,n)=>{const s=new qt([r]);if(ad(n)){const a=BI(n.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new gn(e)}/**
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
 */class rr{constructor(e,r,n,s,a,u,d){this.key=e,this.documentType=r,this.version=n,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new rr(e,0,ke.min(),ke.min(),ke.min(),Rr.empty(),0)}static newFoundDocument(e,r,n,s){return new rr(e,1,r,ke.min(),n,s,0)}static newNoDocument(e,r){return new rr(e,2,r,ke.min(),ke.min(),Rr.empty(),0)}static newUnknownDocument(e,r){return new rr(e,3,r,ke.min(),ke.min(),Rr.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ad{constructor(e,r){this.position=e,this.inclusive=r}}function Iw(t,e,r){let n=0;for(let s=0;s<t.position.length;s++){const a=e[s],u=t.position[s];if(a.field.isKeyField()?n=Se.comparator(Se.fromName(u.referenceValue),r.key):n=ga(u,r.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function Tw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!Mn(t.position[r],e.position[r]))return!1;return!0}/**
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
 */class Pd{constructor(e,r="asc"){this.field=e,this.dir=r}}function vk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class UI{}class Pt extends UI{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,n):new _k(e,r,n):r==="array-contains"?new Ik(e,n):r==="in"?new Tk(e,n):r==="not-in"?new Sk(e,n):r==="array-contains-any"?new bk(e,n):new Pt(e,r,n)}static createKeyFieldInFilter(e,r,n){return r==="in"?new wk(e,n):new Ek(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(ga(r,this.value)):r!==null&&no(this.value)===no(r)&&this.matchesComparison(ga(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends UI{constructor(e,r){super(),this.filters=e,this.op=r,this.Te=null}static create(e,r){return new Vn(e,r)}matches(e){return jI(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function jI(t){return t.op==="and"}function $I(t){return yk(t)&&jI(t)}function yk(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function lg(t){if(t instanceof Pt)return t.field.canonicalString()+t.op.toString()+ma(t.value);if($I(t))return t.filters.map(e=>lg(e)).join(",");{const e=t.filters.map(r=>lg(r)).join(",");return`${t.op}(${e})`}}function zI(t,e){return t instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.field.isEqual(s.field)&&Mn(n.value,s.value)}(t,e):t instanceof Vn?function(n,s){return s instanceof Vn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((a,u,d)=>a&&zI(u,s.filters[d]),!0):!1}(t,e):void Pe(19439)}function WI(t){return t instanceof Pt?function(r){return`${r.field.canonicalString()} ${r.op} ${ma(r.value)}`}(t):t instanceof Vn?function(r){return r.op.toString()+" {"+r.getFilters().map(WI).join(" ,")+"}"}(t):"Filter"}class _k extends Pt{constructor(e,r,n){super(e,r,n),this.key=Se.fromName(n.referenceValue)}matches(e){const r=Se.comparator(e.key,this.key);return this.matchesComparison(r)}}class wk extends Pt{constructor(e,r){super(e,"in",r),this.keys=GI("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class Ek extends Pt{constructor(e,r){super(e,"not-in",r),this.keys=GI("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function GI(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>Se.fromName(n.referenceValue))}class Ik extends Pt{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return Qg(r)&&eu(r.arrayValue,this.value)}}class Tk extends Pt{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&eu(this.value.arrayValue,r)}}class Sk extends Pt{constructor(e,r){super(e,"not-in",r)}matches(e){if(eu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&r.nullValue===void 0&&!eu(this.value.arrayValue,r)}}class bk extends Pt{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!Qg(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>eu(this.value.arrayValue,n))}}/**
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
 */class Ck{constructor(e,r=null,n=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Ie=null}}function Sw(t,e=null,r=[],n=[],s=null,a=null,u=null){return new Ck(t,e,r,n,s,a,u)}function Yg(t){const e=De(t);if(e.Ie===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>lg(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(a){return a.field.canonicalString()+a.dir}(n)).join(","),nh(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>ma(n)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>ma(n)).join(",")),e.Ie=r}return e.Ie}function Xg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!vk(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!zI(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tw(t.startAt,e.startAt)&&Tw(t.endAt,e.endAt)}function ug(t){return Se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class oh{constructor(e,r=null,n=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Ak(t,e,r,n,s,a,u,d){return new oh(t,e,r,n,s,a,u,d)}function Jg(t){return new oh(t)}function bw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Pk(t){return t.collectionGroup!==null}function Ul(t){const e=De(t);if(e.Ee===null){e.Ee=[];const r=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),r.add(a.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new xt(qt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(a=>{r.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new Pd(a,n))}),r.has(qt.keyField().canonicalString())||e.Ee.push(new Pd(qt.keyField(),n))}return e.Ee}function On(t){const e=De(t);return e.de||(e.de=Rk(e,Ul(t))),e.de}function Rk(t,e){if(t.limitType==="F")return Sw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Pd(s.field,a)});const r=t.endAt?new Ad(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new Ad(t.startAt.position,t.startAt.inclusive):null;return Sw(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}function cg(t,e,r){return new oh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function sh(t,e){return Xg(On(t),On(e))&&t.limitType===e.limitType}function HI(t){return`${Yg(On(t))}|lt:${t.limitType}`}function Js(t){return`Query(target=${function(r){let n=r.path.canonicalString();return r.collectionGroup!==null&&(n+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(n+=`, filters: [${r.filters.map(s=>WI(s)).join(", ")}]`),nh(r.limit)||(n+=", limit: "+r.limit),r.orderBy.length>0&&(n+=`, orderBy: [${r.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),r.startAt&&(n+=", startAt: ",n+=r.startAt.inclusive?"b:":"a:",n+=r.startAt.position.map(s=>ma(s)).join(",")),r.endAt&&(n+=", endAt: ",n+=r.endAt.inclusive?"a:":"b:",n+=r.endAt.position.map(s=>ma(s)).join(",")),`Target(${n})`}(On(t))}; limitType=${t.limitType})`}function ah(t,e){return e.isFoundDocument()&&function(n,s){const a=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(a):Se.isDocumentKey(n.path)?n.path.isEqual(a):n.path.isImmediateParentOf(a)}(t,e)&&function(n,s){for(const a of Ul(n))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const a of n.filters)if(!a.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(u,d,f){const g=Iw(u,d,f);return u.inclusive?g<=0:g<0}(n.startAt,Ul(n),s)||n.endAt&&!function(u,d,f){const g=Iw(u,d,f);return u.inclusive?g>=0:g>0}(n.endAt,Ul(n),s))}(t,e)}function xk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qI(t){return(e,r)=>{let n=!1;for(const s of Ul(t)){const a=kk(s,e,r);if(a!==0)return a;n=n||s.field.isKeyField()}return 0}}function kk(t,e,r){const n=t.field.isKeyField()?Se.comparator(e.key,r.key):function(a,u,d){const f=u.data.field(a),g=d.data.field(a);return f!==null&&g!==null?ga(f,g):Pe(42886)}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return Pe(19790,{direction:t.dir})}}/**
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
 */class ts{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[s,a]of n)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,r]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,r]);s.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[r]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){uo(this.inner,(r,n)=>{for(const[s,a]of n)e(s,a)})}isEmpty(){return kI(this.inner)}size(){return this.innerSize}}/**
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
 */const Dk=new ft(Se.comparator);function hi(){return Dk}const KI=new ft(Se.comparator);function Ll(...t){let e=KI;for(const r of t)e=e.insert(r.key,r);return e}function QI(t){let e=KI;return t.forEach((r,n)=>e=e.insert(r,n.overlayedDocument)),e}function zo(){return jl()}function YI(){return jl()}function jl(){return new ts(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nk=new ft(Se.comparator),Ok=new xt(Se.comparator);function $e(...t){let e=Ok;for(const r of t)e=e.add(r);return e}const Lk=new xt(Ve);function Mk(){return Lk}/**
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
 */function Zg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sd(e)?"-0":e}}function XI(t){return{integerValue:""+t}}function Vk(t,e){return uk(e)?XI(e):Zg(t,e)}/**
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
 */class lh{constructor(){this._=void 0}}function Fk(t,e,r){return t instanceof Rd?function(s,a){const u={fields:{[OI]:{stringValue:NI},[MI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Kg(a)&&(a=ih(a)),a&&(u.fields[LI]=a),{mapValue:u}}(r,e):t instanceof tu?ZI(t,e):t instanceof ru?eT(t,e):function(s,a){const u=JI(s,a),d=Cw(u)+Cw(s.Re);return ag(u)&&ag(s.Re)?XI(d):Zg(s.serializer,d)}(t,e)}function Bk(t,e,r){return t instanceof tu?ZI(t,e):t instanceof ru?eT(t,e):r}function JI(t,e){return t instanceof xd?function(n){return ag(n)||function(a){return!!a&&"doubleValue"in a}(n)}(e)?e:{integerValue:0}:null}class Rd extends lh{}class tu extends lh{constructor(e){super(),this.elements=e}}function ZI(t,e){const r=tT(e);for(const n of t.elements)r.some(s=>Mn(s,n))||r.push(n);return{arrayValue:{values:r}}}class ru extends lh{constructor(e){super(),this.elements=e}}function eT(t,e){let r=tT(e);for(const n of t.elements)r=r.filter(s=>!Mn(s,n));return{arrayValue:{values:r}}}class xd extends lh{constructor(e,r){super(),this.serializer=e,this.Re=r}}function Cw(t){return yt(t.integerValue||t.doubleValue)}function tT(t){return Qg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Uk(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof tu&&s instanceof tu||n instanceof ru&&s instanceof ru?pa(n.elements,s.elements,Mn):n instanceof xd&&s instanceof xd?Mn(n.Re,s.Re):n instanceof Rd&&s instanceof Rd}(t.transform,e.transform)}class jk{constructor(e,r){this.version=e,this.transformResults=r}}class li{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new li}static exists(e){return new li(void 0,e)}static updateTime(e){return new li(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ld(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uh{}function rT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new iT(t.key,li.none()):new ch(t.key,t.data,li.none());{const r=t.data,n=Rr.empty();let s=new xt(qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=r.field(a);u===null&&a.length>1&&(a=a.popLast(),u=r.field(a)),u===null?n.delete(a):n.set(a,u),s=s.add(a)}return new rs(t.key,n,new gn(s.toArray()),li.none())}}function $k(t,e,r){t instanceof ch?function(s,a,u){const d=s.value.clone(),f=Pw(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(t,e,r):t instanceof rs?function(s,a,u){if(!ld(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=Pw(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(nT(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(t,e,r):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,r)}function $l(t,e,r,n){return t instanceof ch?function(a,u,d,f){if(!ld(a.precondition,u))return d;const g=a.value.clone(),y=Rw(a.fieldTransforms,f,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(t,e,r,n):t instanceof rs?function(a,u,d,f){if(!ld(a.precondition,u))return d;const g=Rw(a.fieldTransforms,f,u),y=u.data;return y.setAll(nT(a)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(_=>_.field))}(t,e,r,n):function(a,u,d){return ld(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(t,e,r)}function zk(t,e){let r=null;for(const n of t.fieldTransforms){const s=e.data.field(n.field),a=JI(n.transform,s||null);a!=null&&(r===null&&(r=Rr.empty()),r.set(n.field,a))}return r||null}function Aw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pa(n,s,(a,u)=>Uk(a,u))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ch extends uh{constructor(e,r,n,s=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class rs extends uh{constructor(e,r,n,s,a=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function nT(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function Pw(t,e,r){const n=new Map;Ze(t.length===r.length,32656,{Ve:r.length,me:t.length});for(let s=0;s<r.length;s++){const a=t[s],u=a.transform,d=e.data.field(a.field);n.set(a.field,Bk(u,d,r[s]))}return n}function Rw(t,e,r){const n=new Map;for(const s of t){const a=s.transform,u=r.data.field(s.field);n.set(s.field,Fk(a,u,e))}return n}class iT extends uh{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wk extends uh{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Gk{constructor(e,r,n,s){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&$k(a,e,n[s])}}applyToLocalView(e,r){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(r=$l(n,e,r,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(r=$l(n,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const n=YI();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=r.has(s.key)?null:d;const f=rT(u,d);f!==null&&n.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(ke.min())}),n}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),$e())}isEqual(e){return this.batchId===e.batchId&&pa(this.mutations,e.mutations,(r,n)=>Aw(r,n))&&pa(this.baseMutations,e.baseMutations,(r,n)=>Aw(r,n))}}class em{constructor(e,r,n,s){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=s}static from(e,r,n){Ze(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let s=function(){return Nk}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,n[u].version);return new em(e,r,n,s)}}/**
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
 */class Hk{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qk{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
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
 */var Et,Ge;function Kk(t){switch(t){case ne.OK:return Pe(64938);case ne.CANCELLED:case ne.UNKNOWN:case ne.DEADLINE_EXCEEDED:case ne.RESOURCE_EXHAUSTED:case ne.INTERNAL:case ne.UNAVAILABLE:case ne.UNAUTHENTICATED:return!1;case ne.INVALID_ARGUMENT:case ne.NOT_FOUND:case ne.ALREADY_EXISTS:case ne.PERMISSION_DENIED:case ne.FAILED_PRECONDITION:case ne.ABORTED:case ne.OUT_OF_RANGE:case ne.UNIMPLEMENTED:case ne.DATA_LOSS:return!0;default:return Pe(15467,{code:t})}}function oT(t){if(t===void 0)return di("GRPC error has no .code"),ne.UNKNOWN;switch(t){case Et.OK:return ne.OK;case Et.CANCELLED:return ne.CANCELLED;case Et.UNKNOWN:return ne.UNKNOWN;case Et.DEADLINE_EXCEEDED:return ne.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return ne.RESOURCE_EXHAUSTED;case Et.INTERNAL:return ne.INTERNAL;case Et.UNAVAILABLE:return ne.UNAVAILABLE;case Et.UNAUTHENTICATED:return ne.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return ne.INVALID_ARGUMENT;case Et.NOT_FOUND:return ne.NOT_FOUND;case Et.ALREADY_EXISTS:return ne.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return ne.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return ne.FAILED_PRECONDITION;case Et.ABORTED:return ne.ABORTED;case Et.OUT_OF_RANGE:return ne.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return ne.UNIMPLEMENTED;case Et.DATA_LOSS:return ne.DATA_LOSS;default:return Pe(39323,{code:t})}}(Ge=Et||(Et={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Qk=new Qi([4294967295,4294967295],0);function xw(t){const e=PI().encode(t),r=new wI;return r.update(e),new Uint8Array(r.digest())}function kw(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Qi([r,n],0),new Qi([s,a],0)]}class tm{constructor(e,r,n){if(this.bitmap=e,this.padding=r,this.hashCount=n,r<0||r>=8)throw new Ml(`Invalid padding: ${r}`);if(n<0)throw new Ml(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ml(`Invalid hash count: ${n}`);if(e.length===0&&r!==0)throw new Ml(`Invalid padding when bitmap length is 0: ${r}`);this.pe=8*e.length-r,this.ye=Qi.fromNumber(this.pe)}we(e,r,n){let s=e.add(r.multiply(Qi.fromNumber(n)));return s.compare(Qk)===1&&(s=new Qi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const r=xw(e),[n,s]=kw(r);for(let a=0;a<this.hashCount;a++){const u=this.we(n,s,a);if(!this.be(u))return!1}return!0}static create(e,r,n){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new tm(a,s,r);return n.forEach(d=>u.insert(d)),u}insert(e){if(this.pe===0)return;const r=xw(e),[n,s]=kw(r);for(let a=0;a<this.hashCount;a++){const u=this.we(n,s,a);this.Se(u)}}Se(e){const r=Math.floor(e/8),n=e%8;this.bitmap[r]|=1<<n}}class Ml extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class dh{constructor(e,r,n,s,a){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,r,n){const s=new Map;return s.set(e,vu.createSynthesizedTargetChangeForCurrentChange(e,r,n)),new dh(ke.min(),s,new ft(Ve),hi(),$e())}}class vu{constructor(e,r,n,s,a){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,r,n){return new vu(n,r,$e(),$e(),$e())}}/**
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
 */class ud{constructor(e,r,n,s){this.De=e,this.removedTargetIds=r,this.key=n,this.ve=s}}class sT{constructor(e,r){this.targetId=e,this.Ce=r}}class aT{constructor(e,r,n=Qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=s}}class Dw{constructor(){this.Fe=0,this.Me=Nw(),this.xe=Qt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=$e(),r=$e(),n=$e();return this.Me.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:r=r.add(s);break;case 1:n=n.add(s);break;default:Pe(38017,{changeType:a})}}),new vu(this.xe,this.Oe,e,r,n)}Qe(){this.Ne=!1,this.Me=Nw()}$e(e,r){this.Ne=!0,this.Me=this.Me.insert(e,r)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ze(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Yk{constructor(e){this.ze=e,this.je=new Map,this.He=hi(),this.Je=Wc(),this.Ye=Wc(),this.Ze=new ft(Ve)}Xe(e){for(const r of e.De)e.ve&&e.ve.isFoundDocument()?this.et(r,e.ve):this.tt(r,e.key,e.ve);for(const r of e.removedTargetIds)this.tt(r,e.key,e.ve)}nt(e){this.forEachTarget(e,r=>{const n=this.rt(r);switch(e.state){case 0:this.it(r)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(r);break;case 3:this.it(r)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(r)&&(this.st(r),n.ke(e.resumeToken));break;default:Pe(56790,{state:e.state})}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.je.forEach((n,s)=>{this.it(s)&&r(s)})}ot(e){const r=e.targetId,n=e.Ce.count,s=this._t(r);if(s){const a=s.target;if(ug(a))if(n===0){const u=new Se(a.path);this.tt(r,u,rr.newNoDocument(u,ke.min()))}else Ze(n===1,20013,{expectedCount:n});else{const u=this.ut(r);if(u!==n){const d=this.ct(e),f=d?this.lt(d,e,u):1;if(f!==0){this.st(r);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(r,g)}}}}}ct(e){const r=e.Ce.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:a=0}=r;let u,d;try{u=ro(n).toUint8Array()}catch(f){if(f instanceof DI)return fa("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new tm(u,s,a)}catch(f){return fa(f instanceof Ml?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.pe===0?null:d}lt(e,r,n){return r.Ce.count===n-this.Tt(e,r.targetId)?0:2}Tt(e,r){const n=this.ze.getRemoteKeysForTarget(r);let s=0;return n.forEach(a=>{const u=this.ze.Pt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.tt(r,a,null),s++)}),s}It(e){const r=new Map;this.je.forEach((a,u)=>{const d=this._t(u);if(d){if(a.current&&ug(d.target)){const f=new Se(d.target.path);this.Et(f).has(u)||this.dt(u,f)||this.tt(u,f,rr.newNoDocument(f,e))}a.Le&&(r.set(u,a.qe()),a.Qe())}});let n=$e();this.Ye.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const g=this._t(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(n=n.add(a))}),this.He.forEach((a,u)=>u.setReadTime(e));const s=new dh(e,r,this.Ze,this.He,n);return this.He=hi(),this.Je=Wc(),this.Ye=Wc(),this.Ze=new ft(Ve),s}et(e,r){if(!this.it(e))return;const n=this.dt(e,r.key)?2:0;this.rt(e).$e(r.key,n),this.He=this.He.insert(r.key,r),this.Je=this.Je.insert(r.key,this.Et(r.key).add(e)),this.Ye=this.Ye.insert(r.key,this.At(r.key).add(e))}tt(e,r,n){if(!this.it(e))return;const s=this.rt(e);this.dt(e,r)?s.$e(r,1):s.Ue(r),this.Ye=this.Ye.insert(r,this.At(r).delete(e)),this.Ye=this.Ye.insert(r,this.At(r).add(e)),n&&(this.He=this.He.insert(r,n))}removeTarget(e){this.je.delete(e)}ut(e){const r=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let r=this.je.get(e);return r||(r=new Dw,this.je.set(e,r)),r}At(e){let r=this.Ye.get(e);return r||(r=new xt(Ve),this.Ye=this.Ye.insert(e,r)),r}Et(e){let r=this.Je.get(e);return r||(r=new xt(Ve),this.Je=this.Je.insert(e,r)),r}it(e){const r=this._t(e)!==null;return r||he("WatchChangeAggregator","Detected inactive target",e),r}_t(e){const r=this.je.get(e);return r&&r.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Dw),this.ze.getRemoteKeysForTarget(e).forEach(r=>{this.tt(e,r,null)})}dt(e,r){return this.ze.getRemoteKeysForTarget(e).has(r)}}function Wc(){return new ft(Se.comparator)}function Nw(){return new ft(Se.comparator)}const Xk={asc:"ASCENDING",desc:"DESCENDING"},Jk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zk={and:"AND",or:"OR"};class eD{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function dg(t,e){return t.useProto3Json||nh(e)?e:{value:e}}function kd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function lT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tD(t,e){return kd(t,e.toTimestamp())}function Ln(t){return Ze(!!t,49232),ke.fromTimestamp(function(r){const n=to(r);return new Rt(n.seconds,n.nanos)}(t))}function rm(t,e){return hg(t,e).canonicalString()}function hg(t,e){const r=function(s){return new gt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?r:r.child(e)}function uT(t){const e=gt.fromString(t);return Ze(pT(e),10190,{key:e.toString()}),e}function fg(t,e){return rm(t.databaseId,e.path)}function wp(t,e){const r=uT(e);if(r.get(1)!==t.databaseId.projectId)throw new Te(ne.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new Te(ne.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new Se(dT(r))}function cT(t,e){return rm(t.databaseId,e)}function rD(t){const e=uT(t);return e.length===4?gt.emptyPath():dT(e)}function pg(t){return new gt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dT(t){return Ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Ow(t,e,r){return{name:fg(t,e),fields:r.value.mapValue.fields}}function nD(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Pe(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(g,y){return g.useProto3Json?(Ze(y===void 0||typeof y=="string",58123),Qt.fromBase64String(y||"")):(Ze(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Qt.fromUint8Array(y||new Uint8Array))}(t,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(g){const y=g.code===void 0?ne.UNKNOWN:oT(g.code);return new Te(y,g.message||"")}(u);r=new aT(n,s,a,d||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=wp(t,n.document.name),a=Ln(n.document.updateTime),u=n.document.createTime?Ln(n.document.createTime):ke.min(),d=new Rr({mapValue:{fields:n.document.fields}}),f=rr.newFoundDocument(s,a,u,d),g=n.targetIds||[],y=n.removedTargetIds||[];r=new ud(g,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=wp(t,n.document),a=n.readTime?Ln(n.readTime):ke.min(),u=rr.newNoDocument(s,a),d=n.removedTargetIds||[];r=new ud([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=wp(t,n.document),a=n.removedTargetIds||[];r=new ud([],a,s,null)}else{if(!("filter"in e))return Pe(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:a}=n,u=new qk(s,a),d=n.targetId;r=new sT(d,u)}}return r}function iD(t,e){let r;if(e instanceof ch)r={update:Ow(t,e.key,e.value)};else if(e instanceof iT)r={delete:fg(t,e.key)};else if(e instanceof rs)r={update:Ow(t,e.key,e.data),updateMask:fD(e.fieldMask)};else{if(!(e instanceof Wk))return Pe(16599,{ft:e.type});r={verify:fg(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(a,u){const d=u.transform;if(d instanceof Rd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof tu)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof ru)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof xd)return{fieldPath:u.field.canonicalString(),increment:d.Re};throw Pe(20930,{transform:u.transform})}(0,n))),e.precondition.isNone||(r.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:tD(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Pe(27497)}(t,e.precondition)),r}function oD(t,e){return t&&t.length>0?(Ze(e!==void 0,14353),t.map(r=>function(s,a){let u=s.updateTime?Ln(s.updateTime):Ln(a);return u.isEqual(ke.min())&&(u=Ln(a)),new jk(u,s.transformResults||[])}(r,e))):[]}function sD(t,e){return{documents:[cT(t,e.path)]}}function aD(t,e){const r={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=cT(t,s);const a=function(g){if(g.length!==0)return fT(Vn.create(g,"and"))}(e.filters);a&&(r.structuredQuery.where=a);const u=function(g){if(g.length!==0)return g.map(y=>function(w){return{field:Zs(w.field),direction:cD(w.dir)}}(y))}(e.orderBy);u&&(r.structuredQuery.orderBy=u);const d=dg(t,e.limit);return d!==null&&(r.structuredQuery.limit=d),e.startAt&&(r.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(r.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:r,parent:s}}function lD(t){let e=rD(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let s=null;if(n>0){Ze(n===1,65062);const y=r.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];r.where&&(a=function(_){const w=hT(_);return w instanceof Vn&&$I(w)?w.getFilters():[w]}(r.where));let u=[];r.orderBy&&(u=function(_){return _.map(w=>function(C){return new Pd(ea(C.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(w))}(r.orderBy));let d=null;r.limit&&(d=function(_){let w;return w=typeof _=="object"?_.value:_,nh(w)?null:w}(r.limit));let f=null;r.startAt&&(f=function(_){const w=!!_.before,I=_.values||[];return new Ad(I,w)}(r.startAt));let g=null;return r.endAt&&(g=function(_){const w=!_.before,I=_.values||[];return new Ad(I,w)}(r.endAt)),Ak(e,s,u,a,d,"F",f,g)}function uD(t,e){const r=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Pe(28987,{purpose:s})}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function hT(t){return t.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const n=ea(r.unaryFilter.field);return Pt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ea(r.unaryFilter.field);return Pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ea(r.unaryFilter.field);return Pt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ea(r.unaryFilter.field);return Pt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Pe(61313);default:return Pe(60726)}}(t):t.fieldFilter!==void 0?function(r){return Pt.create(ea(r.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Pe(58110);default:return Pe(50506)}}(r.fieldFilter.op),r.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(r){return Vn.create(r.compositeFilter.filters.map(n=>hT(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Pe(1026)}}(r.compositeFilter.op))}(t):Pe(30097,{filter:t})}function cD(t){return Xk[t]}function dD(t){return Jk[t]}function hD(t){return Zk[t]}function Zs(t){return{fieldPath:t.canonicalString()}}function ea(t){return qt.fromServerFormat(t.fieldPath)}function fT(t){return t instanceof Pt?function(r){if(r.op==="=="){if(Ew(r.value))return{unaryFilter:{field:Zs(r.field),op:"IS_NAN"}};if(ww(r.value))return{unaryFilter:{field:Zs(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(Ew(r.value))return{unaryFilter:{field:Zs(r.field),op:"IS_NOT_NAN"}};if(ww(r.value))return{unaryFilter:{field:Zs(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zs(r.field),op:dD(r.op),value:r.value}}}(t):t instanceof Vn?function(r){const n=r.getFilters().map(s=>fT(s));return n.length===1?n[0]:{compositeFilter:{op:hD(r.op),filters:n}}}(t):Pe(54877,{filter:t})}function fD(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function pT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wi{constructor(e,r,n,s,a=ke.min(),u=ke.min(),d=Qt.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=r,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=d,this.expectedCount=f}withSequenceNumber(e){return new Wi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,r){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,r,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pD{constructor(e){this.wt=e}}function gD(t){const e=lD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cg(e,e.limit,"L"):e}/**
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
 */class mD{constructor(){this.yn=new vD}addToCollectionParentIndex(e,r){return this.yn.add(r),J.resolve()}getCollectionParents(e,r){return J.resolve(this.yn.getEntries(r))}addFieldIndex(e,r){return J.resolve()}deleteFieldIndex(e,r){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,r){return J.resolve()}getDocumentsMatchingTarget(e,r){return J.resolve(null)}getIndexType(e,r){return J.resolve(0)}getFieldIndexes(e,r){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,r){return J.resolve(eo.min())}getMinOffsetFromCollectionGroup(e,r){return J.resolve(eo.min())}updateCollectionGroup(e,r,n){return J.resolve()}updateIndexEntries(e,r){return J.resolve()}}class vD{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),s=this.index[r]||new xt(gt.comparator),a=!s.has(n);return this.index[r]=s.add(n),a}has(e){const r=e.lastSegment(),n=e.popLast(),s=this.index[r];return s&&s.has(n)}getEntries(e){return(this.index[e]||new xt(gt.comparator)).toArray()}}/**
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
 */const Lw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},gT=41943040;class _r{static withCacheSize(e){return new _r(e,_r.DEFAULT_COLLECTION_PERCENTILE,_r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,r,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=n}}/**
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
 */_r.DEFAULT_COLLECTION_PERCENTILE=10,_r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_r.DEFAULT=new _r(gT,_r.DEFAULT_COLLECTION_PERCENTILE,_r.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_r.DISABLED=new _r(-1,0,0);/**
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
 */class va{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new va(0)}static ir(){return new va(-1)}}/**
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
 */const Mw="LruGarbageCollector",yD=1048576;function Vw([t,e],[r,n]){const s=Ve(t,r);return s===0?Ve(e,n):s}class _D{constructor(e){this.cr=e,this.buffer=new xt(Vw),this.lr=0}hr(){return++this.lr}Pr(e){const r=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(r);else{const n=this.buffer.last();Vw(r,n)<0&&(this.buffer=this.buffer.delete(n).add(r))}}get maxValue(){return this.buffer.last()[0]}}class wD{constructor(e,r,n){this.garbageCollector=e,this.asyncQueue=r,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){he(Mw,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(r){Ra(r)?he(Mw,"Ignoring IndexedDB error during garbage collection: ",r):await Pa(r)}await this.Ir(3e5)})}}class ED{constructor(e,r){this.Er=e,this.params=r}calculateTargetCount(e,r){return this.Er.dr(e).next(n=>Math.floor(r/100*n))}nthSequenceNumber(e,r){if(r===0)return J.resolve(rh.le);const n=new _D(r);return this.Er.forEachTarget(e,s=>n.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>n.Pr(s))).next(()=>n.maxValue)}removeTargets(e,r,n){return this.Er.removeTargets(e,r,n)}removeOrphanedDocuments(e,r){return this.Er.removeOrphanedDocuments(e,r)}collect(e,r){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Lw)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Lw):this.Rr(e,r))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,r){let n,s,a,u,d,f,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,u=Date.now(),this.nthSequenceNumber(e,s))).next(_=>(n=_,d=Date.now(),this.removeTargets(e,n,r))).next(_=>(a=_,f=Date.now(),this.removeOrphanedDocuments(e,n))).next(_=>(g=Date.now(),Xs()<=Ue.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${_} documents in `+(g-f)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:_})))}}function ID(t,e){return new ED(t,e)}/**
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
 */class TD{constructor(){this.changes=new ts(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,rr.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?J.resolve(n):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class SD{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
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
 */class bD{constructor(e,r,n,s){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,r){let n=null;return this.documentOverlayCache.getOverlay(e,r).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,r))).next(s=>(n!==null&&$l(n.mutation,s,gn.empty(),Rt.now()),s))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.getLocalViewOfDocuments(e,n,$e()).next(()=>n))}getLocalViewOfDocuments(e,r,n=$e()){const s=zo();return this.populateOverlays(e,s,r).next(()=>this.computeViews(e,r,s,n).next(a=>{let u=Ll();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,r){const n=zo();return this.populateOverlays(e,n,r).next(()=>this.computeViews(e,r,n,$e()))}populateOverlays(e,r,n){const s=[];return n.forEach(a=>{r.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,d)=>{r.set(u,d)})})}computeViews(e,r,n,s){let a=hi();const u=jl(),d=function(){return jl()}();return r.forEach((f,g)=>{const y=n.get(g.key);s.has(g.key)&&(y===void 0||y.mutation instanceof rs)?a=a.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),$l(y.mutation,g,y.mutation.getFieldMask(),Rt.now())):u.set(g.key,gn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((g,y)=>u.set(g,y)),r.forEach((g,y)=>{var _;return d.set(g,new SD(y,(_=u.get(g))!==null&&_!==void 0?_:null))}),d))}recalculateAndSaveOverlays(e,r){const n=jl();let s=new ft((u,d)=>u-d),a=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(u=>{for(const d of u)d.keys().forEach(f=>{const g=r.get(f);if(g===null)return;let y=n.get(f)||gn.empty();y=d.applyToLocalView(g,y),n.set(f,y);const _=(s.get(d.batchId)||$e()).add(f);s=s.insert(d.batchId,_)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,y=f.value,_=YI();y.forEach(w=>{if(!a.has(w)){const I=rT(r.get(w),n.get(w));I!==null&&_.set(w,I),a=a.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,g,_))}return J.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,r,n,s){return function(u){return Se.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):Pk(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,n,s):this.getDocumentsMatchingCollectionQuery(e,r,n,s)}getNextDocuments(e,r,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,n,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,n.largestBatchId,s-a.size):J.resolve(zo());let d=Xl,f=a;return u.next(g=>J.forEach(g,(y,_)=>(d<_.largestBatchId&&(d=_.largestBatchId),a.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{f=f.insert(y,w)}))).next(()=>this.populateOverlays(e,g,a)).next(()=>this.computeViews(e,f,g,$e())).next(y=>({batchId:d,changes:QI(y)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new Se(r)).next(n=>{let s=Ll();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,r,n,s){const a=r.collectionGroup;let u=Ll();return this.indexManager.getCollectionParents(e,a).next(d=>J.forEach(d,f=>{const g=function(_,w){return new oh(w,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(r,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,n,s).next(y=>{y.forEach((_,w)=>{u=u.insert(_,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,r,n,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,n.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,n,a,s))).next(u=>{a.forEach((f,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,rr.newInvalidDocument(y)))});let d=Ll();return u.forEach((f,g)=>{const y=a.get(f);y!==void 0&&$l(y.mutation,g,gn.empty(),Rt.now()),ah(r,g)&&(d=d.insert(f,g))}),d})}}/**
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
 */class CD{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,r){return J.resolve(this.Fr.get(r))}saveBundleMetadata(e,r){return this.Fr.set(r.id,function(s){return{id:s.id,version:s.version,createTime:Ln(s.createTime)}}(r)),J.resolve()}getNamedQuery(e,r){return J.resolve(this.Mr.get(r))}saveNamedQuery(e,r){return this.Mr.set(r.name,function(s){return{name:s.name,query:gD(s.bundledQuery),readTime:Ln(s.readTime)}}(r)),J.resolve()}}/**
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
 */class AD{constructor(){this.overlays=new ft(Se.comparator),this.Or=new Map}getOverlay(e,r){return J.resolve(this.overlays.get(r))}getOverlays(e,r){const n=zo();return J.forEach(r,s=>this.getOverlay(e,s).next(a=>{a!==null&&n.set(s,a)})).next(()=>n)}saveOverlays(e,r,n){return n.forEach((s,a)=>{this.St(e,r,a)}),J.resolve()}removeOverlaysForBatchId(e,r,n){const s=this.Or.get(n);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Or.delete(n)),J.resolve()}getOverlaysForCollection(e,r,n){const s=zo(),a=r.length+1,u=new Se(r.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!r.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>n&&s.set(f.getKey(),f)}return J.resolve(s)}getOverlaysForCollectionGroup(e,r,n,s){let a=new ft((g,y)=>g-y);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===r&&g.largestBatchId>n){let y=a.get(g.largestBatchId);y===null&&(y=zo(),a=a.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=zo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=s)););return J.resolve(d)}St(e,r,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Or.get(s.largestBatchId).delete(n.key);this.Or.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new Hk(r,n));let a=this.Or.get(r);a===void 0&&(a=$e(),this.Or.set(r,a)),this.Or.set(r,a.add(n.key))}}/**
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
 */class PD{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,J.resolve()}}/**
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
 */class nm{constructor(){this.Nr=new xt(Vt.Br),this.Lr=new xt(Vt.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,r){const n=new Vt(e,r);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.Qr(new Vt(e,r))}$r(e,r){e.forEach(n=>this.removeReference(n,r))}Ur(e){const r=new Se(new gt([])),n=new Vt(r,e),s=new Vt(r,e+1),a=[];return this.Lr.forEachInRange([n,s],u=>{this.Qr(u),a.push(u.key)}),a}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const r=new Se(new gt([])),n=new Vt(r,e),s=new Vt(r,e+1);let a=$e();return this.Lr.forEachInRange([n,s],u=>{a=a.add(u.key)}),a}containsKey(e){const r=new Vt(e,0),n=this.Nr.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class Vt{constructor(e,r){this.key=e,this.Gr=r}static Br(e,r){return Se.comparator(e.key,r.key)||Ve(e.Gr,r.Gr)}static kr(e,r){return Ve(e.Gr,r.Gr)||Se.comparator(e.key,r.key)}}/**
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
 */class RD{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.Jn=1,this.zr=new xt(Vt.Br)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,n,s){const a=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Gk(a,r,n,s);this.mutationQueue.push(u);for(const d of s)this.zr=this.zr.add(new Vt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(u)}lookupMutationBatch(e,r){return J.resolve(this.jr(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,s=this.Hr(n),a=s<0?0:s;return J.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?qg:this.Jn-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new Vt(r,0),s=new Vt(r,Number.POSITIVE_INFINITY),a=[];return this.zr.forEachInRange([n,s],u=>{const d=this.jr(u.Gr);a.push(d)}),J.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new xt(Ve);return r.forEach(s=>{const a=new Vt(s,0),u=new Vt(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([a,u],d=>{n=n.add(d.Gr)})}),J.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,s=n.length+1;let a=n;Se.isDocumentKey(a)||(a=a.child(""));const u=new Vt(new Se(a),0);let d=new xt(Ve);return this.zr.forEachWhile(f=>{const g=f.key.path;return!!n.isPrefixOf(g)&&(g.length===s&&(d=d.add(f.Gr)),!0)},u),J.resolve(this.Jr(d))}Jr(e){const r=[];return e.forEach(n=>{const s=this.jr(n);s!==null&&r.push(s)}),r}removeMutationBatch(e,r){Ze(this.Yr(r.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return J.forEach(r.mutations,s=>{const a=new Vt(s.key,r.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=n})}Xn(e){}containsKey(e,r){const n=new Vt(r,0),s=this.zr.firstAfterOrEqual(n);return J.resolve(r.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Yr(e,r){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const r=this.Hr(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class xD{constructor(e){this.Zr=e,this.docs=function(){return new ft(Se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const n=r.key,s=this.docs.get(n),a=s?s.size:0,u=this.Zr(r);return this.docs=this.docs.insert(n,{document:r.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return J.resolve(n?n.document.mutableCopy():rr.newInvalidDocument(r))}getEntries(e,r){let n=hi();return r.forEach(s=>{const a=this.docs.get(s);n=n.insert(s,a?a.document.mutableCopy():rr.newInvalidDocument(s))}),J.resolve(n)}getDocumentsMatchingQuery(e,r,n,s){let a=hi();const u=r.path,d=new Se(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:y}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||ok(ik(y),n)<=0||(s.has(y.key)||ah(r,y))&&(a=a.insert(y.key,y.mutableCopy()))}return J.resolve(a)}getAllFromCollectionGroup(e,r,n,s){Pe(9500)}Xr(e,r){return J.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new kD(this)}getSize(e){return J.resolve(this.size)}}class kD extends TD{constructor(e){super(),this.vr=e}applyChanges(e){const r=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?r.push(this.vr.addEntry(e,s)):this.vr.removeEntry(n)}),J.waitFor(r)}getFromCache(e,r){return this.vr.getEntry(e,r)}getAllFromCache(e,r){return this.vr.getEntries(e,r)}}/**
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
 */class DD{constructor(e){this.persistence=e,this.ei=new ts(r=>Yg(r),Xg),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.ti=0,this.ni=new nm,this.targetCount=0,this.ri=va.rr()}forEachTarget(e,r){return this.ei.forEach((n,s)=>r(s)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.ti&&(this.ti=r),J.resolve()}ar(e){this.ei.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.ri=new va(r),this.highestTargetId=r),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,r){return this.ar(r),this.targetCount+=1,J.resolve()}updateTargetData(e,r){return this.ar(r),J.resolve()}removeTargetData(e,r){return this.ei.delete(r.target),this.ni.Ur(r.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,r,n){let s=0;const a=[];return this.ei.forEach((u,d)=>{d.sequenceNumber<=r&&n.get(d.targetId)===null&&(this.ei.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),J.waitFor(a).next(()=>s)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,r){const n=this.ei.get(r)||null;return J.resolve(n)}addMatchingKeys(e,r,n){return this.ni.qr(r,n),J.resolve()}removeMatchingKeys(e,r,n){this.ni.$r(r,n);const s=this.persistence.referenceDelegate,a=[];return s&&r.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),J.waitFor(a)}removeMatchingKeysForTargetId(e,r){return this.ni.Ur(r),J.resolve()}getMatchingKeysForTargetId(e,r){const n=this.ni.Wr(r);return J.resolve(n)}containsKey(e,r){return J.resolve(this.ni.containsKey(r))}}/**
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
 */class mT{constructor(e,r){this.ii={},this.overlays={},this.si=new rh(0),this.oi=!1,this.oi=!0,this._i=new PD,this.referenceDelegate=e(this),this.ai=new DD(this),this.indexManager=new mD,this.remoteDocumentCache=function(s){return new xD(s)}(n=>this.referenceDelegate.ui(n)),this.serializer=new pD(r),this.ci=new CD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new AD,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let n=this.ii[e.toKey()];return n||(n=new RD(r,this.referenceDelegate),this.ii[e.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,r,n){he("MemoryPersistence","Starting transaction:",e);const s=new ND(this.si.next());return this.referenceDelegate.li(),n(s).next(a=>this.referenceDelegate.hi(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Pi(e,r){return J.or(Object.values(this.ii).map(n=>()=>n.containsKey(e,r)))}}class ND extends ak{constructor(e){super(),this.currentSequenceNumber=e}}class im{constructor(e){this.persistence=e,this.Ti=new nm,this.Ii=null}static Ei(e){return new im(e)}get di(){if(this.Ii)return this.Ii;throw Pe(60996)}addReference(e,r,n){return this.Ti.addReference(n,r),this.di.delete(n.toString()),J.resolve()}removeReference(e,r,n){return this.Ti.removeReference(n,r),this.di.add(n.toString()),J.resolve()}markPotentiallyOrphaned(e,r){return this.di.add(r.toString()),J.resolve()}removeTarget(e,r){this.Ti.Ur(r.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(s=>{s.forEach(a=>this.di.add(a.toString()))}).next(()=>n.removeTargetData(e,r))}li(){this.Ii=new Set}hi(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,n=>{const s=Se.fromPath(n);return this.Ai(e,s).next(a=>{a||r.removeEntry(s,ke.min())})}).next(()=>(this.Ii=null,r.apply(e)))}updateLimboDocument(e,r){return this.Ai(e,r).next(n=>{n?this.di.delete(r.toString()):this.di.add(r.toString())})}ui(e){return 0}Ai(e,r){return J.or([()=>J.resolve(this.Ti.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Pi(e,r)])}}class Dd{constructor(e,r){this.persistence=e,this.Ri=new ts(n=>ck(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=ID(this,r)}static Ei(e,r){return new Dd(e,r)}li(){}hi(e){return J.resolve()}forEachTarget(e,r){return this.persistence.getTargetCache().forEachTarget(e,r)}dr(e){const r=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>r.next(s=>n+s))}Vr(e){let r=0;return this.Ar(e,n=>{r++}).next(()=>r)}Ar(e,r){return J.forEach(this.Ri,(n,s)=>this.gr(e,n,s).next(a=>a?J.resolve():r(s)))}removeTargets(e,r,n){return this.persistence.getTargetCache().removeTargets(e,r,n)}removeOrphanedDocuments(e,r){let n=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Xr(e,u=>this.gr(e,u,r).next(d=>{d||(n++,a.removeEntry(u,ke.min()))})).next(()=>a.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,r){return this.Ri.set(r,e.currentSequenceNumber),J.resolve()}removeTarget(e,r){const n=r.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,r,n){return this.Ri.set(n,e.currentSequenceNumber),J.resolve()}removeReference(e,r,n){return this.Ri.set(n,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,r){return this.Ri.set(r,e.currentSequenceNumber),J.resolve()}ui(e){let r=e.key.toString().length;return e.isFoundDocument()&&(r+=sd(e.data.value)),r}gr(e,r,n){return J.or([()=>this.persistence.Pi(e,r),()=>this.persistence.getTargetCache().containsKey(e,r),()=>{const s=this.Ri.get(r);return J.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class om{constructor(e,r,n,s){this.targetId=e,this.fromCache=r,this.ls=n,this.hs=s}static Ps(e,r){let n=$e(),s=$e();for(const a of r.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new om(e,r.fromCache,n,s)}}/**
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
 */class OD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LD{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return fP()?8:lk(nr())>0?6:4}()}initialize(e,r){this.As=e,this.indexManager=r,this.Ts=!0}getDocumentsMatchingQuery(e,r,n,s){const a={result:null};return this.Rs(e,r).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.Vs(e,r,s,n).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new OD;return this.fs(e,r,u).next(d=>{if(a.result=d,this.Is)return this.gs(e,r,u,d.size)})}).next(()=>a.result)}gs(e,r,n,s){return n.documentReadCount<this.Es?(Xs()<=Ue.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Js(r),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),J.resolve()):(Xs()<=Ue.DEBUG&&he("QueryEngine","Query:",Js(r),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Xs()<=Ue.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Js(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(r))):J.resolve())}Rs(e,r){if(bw(r))return J.resolve(null);let n=On(r);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(r.limit!==null&&s===1&&(r=cg(r,null,"F"),n=On(r)),this.indexManager.getDocumentsMatchingTarget(e,n).next(a=>{const u=$e(...a);return this.As.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,n).next(f=>{const g=this.ps(r,d);return this.ys(r,g,u,f.readTime)?this.Rs(e,cg(r,null,"F")):this.ws(e,g,r,f)}))})))}Vs(e,r,n,s){return bw(r)||s.isEqual(ke.min())?J.resolve(null):this.As.getDocuments(e,n).next(a=>{const u=this.ps(r,a);return this.ys(r,u,n,s)?J.resolve(null):(Xs()<=Ue.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Js(r)),this.ws(e,u,r,nk(s,Xl)).next(d=>d))})}ps(e,r){let n=new xt(qI(e));return r.forEach((s,a)=>{ah(e,a)&&(n=n.add(a))}),n}ys(e,r,n,s){if(e.limit===null)return!1;if(n.size!==r.size)return!0;const a=e.limitType==="F"?r.last():r.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}fs(e,r,n){return Xs()<=Ue.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Js(r)),this.As.getDocumentsMatchingQuery(e,r,eo.min(),n)}ws(e,r,n,s){return this.As.getDocumentsMatchingQuery(e,n,s).next(a=>(r.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */const sm="LocalStore",MD=3e8;class VD{constructor(e,r,n,s){this.persistence=e,this.bs=r,this.serializer=s,this.Ss=new ft(Ve),this.Ds=new ts(a=>Yg(a),Xg),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(n)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bD(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.Ss))}}function FD(t,e,r,n){return new VD(t,e,r,n)}async function vT(t,e){const r=De(t);return await r.persistence.runTransaction("Handle user change","readonly",n=>{let s;return r.mutationQueue.getAllMutationBatches(n).next(a=>(s=a,r.Fs(e),r.mutationQueue.getAllMutationBatches(n))).next(a=>{const u=[],d=[];let f=$e();for(const g of s){u.push(g.batchId);for(const y of g.mutations)f=f.add(y.key)}for(const g of a){d.push(g.batchId);for(const y of g.mutations)f=f.add(y.key)}return r.localDocuments.getDocuments(n,f).next(g=>({Ms:g,removedBatchIds:u,addedBatchIds:d}))})})}function BD(t,e){const r=De(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),a=r.Cs.newChangeBuffer({trackRemovals:!0});return function(d,f,g,y){const _=g.batch,w=_.keys();let I=J.resolve();return w.forEach(C=>{I=I.next(()=>y.getEntry(f,C)).next(D=>{const x=g.docVersions.get(C);Ze(x!==null,48541),D.version.compareTo(x)<0&&(_.applyToRemoteDocument(D,g),D.isValidDocument()&&(D.setReadTime(g.commitVersion),y.addEntry(D)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(f,_))}(r,n,e,a).next(()=>a.apply(n)).next(()=>r.mutationQueue.performConsistencyCheck(n)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(d){let f=$e();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f}(e))).next(()=>r.localDocuments.getDocuments(n,s))})}function yT(t){const e=De(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.ai.getLastRemoteSnapshotVersion(r))}function UD(t,e){const r=De(t),n=e.snapshotVersion;let s=r.Ss;return r.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=r.Cs.newChangeBuffer({trackRemovals:!0});s=r.Ss;const d=[];e.targetChanges.forEach((y,_)=>{const w=s.get(_);if(!w)return;d.push(r.ai.removeMatchingKeys(a,y.removedDocuments,_).next(()=>r.ai.addMatchingKeys(a,y.addedDocuments,_)));let I=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(_)!==null?I=I.withResumeToken(Qt.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):y.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(y.resumeToken,n)),s=s.insert(_,I),function(D,x,O){return D.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=MD?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(w,I,y)&&d.push(r.ai.updateTargetData(a,I))});let f=hi(),g=$e();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(r.persistence.referenceDelegate.updateLimboDocument(a,y))}),d.push(jD(a,u,e.documentUpdates).next(y=>{f=y.xs,g=y.Os})),!n.isEqual(ke.min())){const y=r.ai.getLastRemoteSnapshotVersion(a).next(_=>r.ai.setTargetsMetadata(a,a.currentSequenceNumber,n));d.push(y)}return J.waitFor(d).next(()=>u.apply(a)).next(()=>r.localDocuments.getLocalViewOfDocuments(a,f,g)).next(()=>f)}).then(a=>(r.Ss=s,a))}function jD(t,e,r){let n=$e(),s=$e();return r.forEach(a=>n=n.add(a)),e.getEntries(t,n).next(a=>{let u=hi();return r.forEach((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(ke.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):he(sm,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)}),{xs:u,Os:s}})}function $D(t,e){const r=De(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=qg),r.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function zD(t,e){const r=De(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return r.ai.getTargetData(n,e).next(a=>a?(s=a,J.resolve(s)):r.ai.allocateTargetId(n).next(u=>(s=new Wi(e,u,"TargetPurposeListen",n.currentSequenceNumber),r.ai.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=r.Ss.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(r.Ss=r.Ss.insert(n.targetId,n),r.Ds.set(e,n.targetId)),n})}async function gg(t,e,r){const n=De(t),s=n.Ss.get(e),a=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",a,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!Ra(u))throw u;he(sm,`Failed to update sequence numbers for target ${e}: ${u}`)}n.Ss=n.Ss.remove(e),n.Ds.delete(s.target)}function Fw(t,e,r){const n=De(t);let s=ke.min(),a=$e();return n.persistence.runTransaction("Execute query","readwrite",u=>function(f,g,y){const _=De(f),w=_.Ds.get(y);return w!==void 0?J.resolve(_.Ss.get(w)):_.ai.getTargetData(g,y)}(n,u,On(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>n.bs.getDocumentsMatchingQuery(u,e,r?s:ke.min(),r?a:$e())).next(d=>(WD(n,xk(e),d),{documents:d,Ns:a})))}function WD(t,e,r){let n=t.vs.get(e)||ke.min();r.forEach((s,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)}),t.vs.set(e,n)}class Bw{constructor(){this.activeTargetIds=Mk()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GD{constructor(){this.So=new Bw,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e,r=!0){return r&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,r,n){this.Do[e]=r}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Bw,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HD{vo(e){}shutdown(){}}/**
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
 */const Uw="ConnectivityMonitor";class jw{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){he(Uw,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){he(Uw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gc=null;function mg(){return Gc===null?Gc=function(){return 268435456+Math.round(2147483648*Math.random())}():Gc++,"0x"+Gc.toString(16)}/**
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
 */const Ep="RestConnection",qD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class KD{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=r+"://"+e.host,this.ko=`projects/${n}/databases/${s}`,this.qo=this.databaseId.database===bd?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Qo(e,r,n,s,a){const u=mg(),d=this.$o(e,r.toUriEncodedString());he(Ep,`Sending RPC '${e}' ${u}:`,d,n);const f={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(f,s,a),this.Ko(e,d,f,n).then(g=>(he(Ep,`Received RPC '${e}' ${u}: `,g),g),g=>{throw fa(Ep,`RPC '${e}' ${u} failed with error: `,g,"url: ",d,"request:",n),g})}Wo(e,r,n,s,a,u){return this.Qo(e,r,n,s,a)}Uo(e,r,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Aa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>e[a]=s),n&&n.headers.forEach((s,a)=>e[a]=s)}$o(e,r){const n=qD[e];return`${this.Lo}/v1/${r}:${n}`}terminate(){}}/**
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
 */class QD{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const er="WebChannelConnection";class YD extends KD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,r,n,s){const a=mg();return new Promise((u,d)=>{const f=new EI;f.setWithCredentials(!0),f.listenOnce(II.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case od.NO_ERROR:const y=f.getResponseJson();he(er,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case od.TIMEOUT:he(er,`RPC '${e}' ${a} timed out`),d(new Te(ne.DEADLINE_EXCEEDED,"Request time out"));break;case od.HTTP_ERROR:const _=f.getStatus();if(he(er,`RPC '${e}' ${a} failed with status:`,_,"response text:",f.getResponseText()),_>0){let w=f.getResponseJson();Array.isArray(w)&&(w=w[0]);const I=w==null?void 0:w.error;if(I&&I.status&&I.message){const C=function(x){const O=x.toLowerCase().replace(/_/g,"-");return Object.values(ne).indexOf(O)>=0?O:ne.UNKNOWN}(I.status);d(new Te(C,I.message))}else d(new Te(ne.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new Te(ne.UNAVAILABLE,"Connection failed."));break;default:Pe(9055,{s_:e,streamId:a,o_:f.getLastErrorCode(),__:f.getLastError()})}}finally{he(er,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(s);he(er,`RPC '${e}' ${a} sending request:`,s),f.send(r,"POST",g,n,15)})}a_(e,r,n){const s=mg(),a=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=bI(),d=SI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Uo(f.initMessageHeaders,r,n),f.encodeInitMessageHeaders=!0;const y=a.join("");he(er,`Creating RPC '${e}' stream ${s}: ${y}`,f);const _=u.createWebChannel(y,f);let w=!1,I=!1;const C=new QD({Go:x=>{I?he(er,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(w||(he(er,`Opening RPC '${e}' stream ${s} transport.`),_.open(),w=!0),he(er,`RPC '${e}' stream ${s} sending:`,x),_.send(x))},zo:()=>_.close()}),D=(x,O,V)=>{x.listen(O,j=>{try{V(j)}catch($){setTimeout(()=>{throw $},0)}})};return D(_,Ol.EventType.OPEN,()=>{I||(he(er,`RPC '${e}' stream ${s} transport opened.`),C.t_())}),D(_,Ol.EventType.CLOSE,()=>{I||(I=!0,he(er,`RPC '${e}' stream ${s} transport closed`),C.r_())}),D(_,Ol.EventType.ERROR,x=>{I||(I=!0,fa(er,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),C.r_(new Te(ne.UNAVAILABLE,"The operation could not be completed")))}),D(_,Ol.EventType.MESSAGE,x=>{var O;if(!I){const V=x.data[0];Ze(!!V,16349);const j=V,$=(j==null?void 0:j.error)||((O=j[0])===null||O===void 0?void 0:O.error);if($){he(er,`RPC '${e}' stream ${s} received error:`,$);const W=$.status;let Q=function(R){const N=Et[R];if(N!==void 0)return oT(N)}(W),P=$.message;Q===void 0&&(Q=ne.INTERNAL,P="Unknown error status: "+W+" with message "+$.message),I=!0,C.r_(new Te(Q,P)),_.close()}else he(er,`RPC '${e}' stream ${s} received:`,V),C.i_(V)}}),D(d,TI.STAT_EVENT,x=>{x.stat===ig.PROXY?he(er,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===ig.NOPROXY&&he(er,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.n_()},0),C}}function Ip(){return typeof document<"u"?document:null}/**
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
 */function hh(t){return new eD(t,!0)}/**
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
 */class _T{constructor(e,r,n=1e3,s=1.5,a=6e4){this.bi=e,this.timerId=r,this.u_=n,this.c_=s,this.l_=a,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const r=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),s=Math.max(0,r-n);s>0&&he("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const $w="PersistentStream";class wT{constructor(e,r,n,s,a,u,d,f){this.bi=e,this.R_=n,this.V_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new _T(e,r)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,r){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():r&&r.code===ne.RESOURCE_EXHAUSTED?(di(r.toString()),di("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):r&&r.code===ne.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(r)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),r=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.m_===r&&this.B_(n,s)},n=>{e(()=>{const s=new Te(ne.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(s)})})}B_(e,r){const n=this.N_(this.m_);this.stream=this.k_(e,r),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{n(()=>this.L_(s))}),this.stream.onMessage(s=>{n(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return he($w,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return r=>{this.bi.enqueueAndForget(()=>this.m_===e?r():(he($w,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XD extends wT{constructor(e,r,n,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,s,u),this.serializer=a}k_(e,r){return this.connection.a_("Listen",e,r)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const r=nD(this.serializer,e),n=function(a){if(!("targetChange"in a))return ke.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ke.min():u.readTime?Ln(u.readTime):ke.min()}(e);return this.listener.Q_(r,n)}U_(e){const r={};r.database=pg(this.serializer),r.addTarget=function(a,u){let d;const f=u.target;if(d=ug(f)?{documents:sD(a,f)}:{query:aD(a,f).gt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=lT(a,u.resumeToken);const g=dg(a,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(ke.min())>0){d.readTime=kd(a,u.snapshotVersion.toTimestamp());const g=dg(a,u.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const n=uD(this.serializer,e);n&&(r.labels=n),this.F_(r)}K_(e){const r={};r.database=pg(this.serializer),r.removeTarget=e,this.F_(r)}}class JD extends wT{constructor(e,r,n,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,s,u),this.serializer=a}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,r){return this.connection.a_("Write",e,r)}q_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const r=oD(e.writeResults,e.commitTime),n=Ln(e.commitTime);return this.listener.j_(n,r)}H_(){const e={};e.database=pg(this.serializer),this.F_(e)}G_(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>iD(this.serializer,n))};this.F_(r)}}/**
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
 */class ZD{}class eN extends ZD{constructor(e,r,n,s){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new Te(ne.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,r,n,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Qo(e,hg(r,n),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Te(ne.UNKNOWN,a.toString())})}Wo(e,r,n,s,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Wo(e,hg(r,n),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ne.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Te(ne.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class tN{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const r=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(di(r),this.ea=!1):he("OnlineStateTracker",r)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const Jo="RemoteStore";class rN{constructor(e,r,n,s,a){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=a,this.ca.vo(u=>{n.enqueueAndForget(async()=>{ns(this)&&(he(Jo,"Restarting streams for network reachability change."),await async function(f){const g=De(f);g.aa.add(4),await yu(g),g.la.set("Unknown"),g.aa.delete(4),await fh(g)}(this))})}),this.la=new tN(n,s)}}async function fh(t){if(ns(t))for(const e of t.ua)await e(!0)}async function yu(t){for(const e of t.ua)await e(!1)}function ET(t,e){const r=De(t);r._a.has(e.targetId)||(r._a.set(e.targetId,e),cm(r)?um(r):xa(r).b_()&&lm(r,e))}function am(t,e){const r=De(t),n=xa(r);r._a.delete(e),n.b_()&&IT(r,e),r._a.size===0&&(n.b_()?n.v_():ns(r)&&r.la.set("Unknown"))}function lm(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}xa(t).U_(e)}function IT(t,e){t.ha.Ke(e),xa(t).K_(e)}function um(t){t.ha=new Yk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),xa(t).start(),t.la.ta()}function cm(t){return ns(t)&&!xa(t).w_()&&t._a.size>0}function ns(t){return De(t).aa.size===0}function TT(t){t.ha=void 0}async function nN(t){t.la.set("Online")}async function iN(t){t._a.forEach((e,r)=>{lm(t,e)})}async function oN(t,e){TT(t),cm(t)?(t.la.ia(e),um(t)):t.la.set("Unknown")}async function sN(t,e,r){if(t.la.set("Online"),e instanceof aT&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds)s._a.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s._a.delete(d),s.ha.removeTarget(d))}(t,e)}catch(n){he(Jo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Nd(t,n)}else if(e instanceof ud?t.ha.Xe(e):e instanceof sT?t.ha.ot(e):t.ha.nt(e),!r.isEqual(ke.min()))try{const n=await yT(t.localStore);r.compareTo(n)>=0&&await function(a,u){const d=a.ha.It(u);return d.targetChanges.forEach((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const y=a._a.get(g);y&&a._a.set(g,y.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,g)=>{const y=a._a.get(f);if(!y)return;a._a.set(f,y.withResumeToken(Qt.EMPTY_BYTE_STRING,y.snapshotVersion)),IT(a,f);const _=new Wi(y.target,f,g,y.sequenceNumber);lm(a,_)}),a.remoteSyncer.applyRemoteEvent(d)}(t,r)}catch(n){he(Jo,"Failed to raise snapshot:",n),await Nd(t,n)}}async function Nd(t,e,r){if(!Ra(e))throw e;t.aa.add(1),await yu(t),t.la.set("Offline"),r||(r=()=>yT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{he(Jo,"Retrying IndexedDB access"),await r(),t.aa.delete(1),await fh(t)})}function ST(t,e){return e().catch(r=>Nd(t,r,e))}async function ph(t){const e=De(t),r=io(e);let n=e.oa.length>0?e.oa[e.oa.length-1].batchId:qg;for(;aN(e);)try{const s=await $D(e.localStore,n);if(s===null){e.oa.length===0&&r.v_();break}n=s.batchId,lN(e,s)}catch(s){await Nd(e,s)}bT(e)&&CT(e)}function aN(t){return ns(t)&&t.oa.length<10}function lN(t,e){t.oa.push(e);const r=io(t);r.b_()&&r.W_&&r.G_(e.mutations)}function bT(t){return ns(t)&&!io(t).w_()&&t.oa.length>0}function CT(t){io(t).start()}async function uN(t){io(t).H_()}async function cN(t){const e=io(t);for(const r of t.oa)e.G_(r.mutations)}async function dN(t,e,r){const n=t.oa.shift(),s=em.from(n,e,r);await ST(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ph(t)}async function hN(t,e){e&&io(t).W_&&await async function(n,s){if(function(u){return Kk(u)&&u!==ne.ABORTED}(s.code)){const a=n.oa.shift();io(n).D_(),await ST(n,()=>n.remoteSyncer.rejectFailedWrite(a.batchId,s)),await ph(n)}}(t,e),bT(t)&&CT(t)}async function zw(t,e){const r=De(t);r.asyncQueue.verifyOperationInProgress(),he(Jo,"RemoteStore received new credentials");const n=ns(r);r.aa.add(3),await yu(r),n&&r.la.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.aa.delete(3),await fh(r)}async function fN(t,e){const r=De(t);e?(r.aa.delete(2),await fh(r)):e||(r.aa.add(2),await yu(r),r.la.set("Unknown"))}function xa(t){return t.Pa||(t.Pa=function(r,n,s){const a=De(r);return a.Y_(),new XD(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(t.datastore,t.asyncQueue,{jo:nN.bind(null,t),Jo:iN.bind(null,t),Zo:oN.bind(null,t),Q_:sN.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),cm(t)?um(t):t.la.set("Unknown")):(await t.Pa.stop(),TT(t))})),t.Pa}function io(t){return t.Ta||(t.Ta=function(r,n,s){const a=De(r);return a.Y_(),new JD(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:uN.bind(null,t),Zo:hN.bind(null,t),z_:cN.bind(null,t),j_:dN.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await ph(t)):(await t.Ta.stop(),t.oa.length>0&&(he(Jo,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class dm{constructor(e,r,n,s,a){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=s,this.removalCallback=a,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,n,s,a){const u=Date.now()+n,d=new dm(e,r,u,s,a);return d.start(n),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Te(ne.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function hm(t,e){if(di("AsyncQueue",`${e}: ${t}`),Ra(t))return new Te(ne.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class sa{static emptySet(e){return new sa(e.comparator)}constructor(e){this.comparator=e?(r,n)=>e(r,n)||Se.comparator(r.key,n.key):(r,n)=>Se.comparator(r.key,n.key),this.keyedMap=Ll(),this.sortedSet=new ft(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof sa)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const s=r.getNext().key,a=n.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new sa;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
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
 */class Ww{constructor(){this.Ia=new ft(Se.comparator)}track(e){const r=e.doc.key,n=this.Ia.get(r);n?e.type!==0&&n.type===3?this.Ia=this.Ia.insert(r,e):e.type===3&&n.type!==1?this.Ia=this.Ia.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Ia=this.Ia.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Ia=this.Ia.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Ia=this.Ia.remove(r):e.type===1&&n.type===2?this.Ia=this.Ia.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Ia=this.Ia.insert(r,{type:2,doc:e.doc}):Pe(63341,{Vt:e,Ea:n}):this.Ia=this.Ia.insert(r,e)}da(){const e=[];return this.Ia.inorderTraversal((r,n)=>{e.push(n)}),e}}class ya{constructor(e,r,n,s,a,u,d,f,g){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,r,n,s,a){const u=[];return r.forEach(d=>{u.push({type:0,doc:d})}),new ya(e,r,sa.emptySet(r),u,n,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let s=0;s<r.length;s++)if(r[s].type!==n[s].type||!r[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class pN{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class gN{constructor(){this.queries=Gw(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(r,n){const s=De(r),a=s.queries;s.queries=Gw(),a.forEach((u,d)=>{for(const f of d.Ra)f.onError(n)})})(this,new Te(ne.ABORTED,"Firestore shutting down"))}}function Gw(){return new ts(t=>HI(t),sh)}async function mN(t,e){const r=De(t);let n=3;const s=e.query;let a=r.queries.get(s);a?!a.Va()&&e.ma()&&(n=2):(a=new pN,n=e.ma()?0:1);try{switch(n){case 0:a.Aa=await r.onListen(s,!0);break;case 1:a.Aa=await r.onListen(s,!1);break;case 2:await r.onFirstRemoteStoreListen(s)}}catch(u){const d=hm(u,`Initialization of query '${Js(e.query)}' failed`);return void e.onError(d)}r.queries.set(s,a),a.Ra.push(e),e.ga(r.onlineState),a.Aa&&e.pa(a.Aa)&&fm(r)}async function vN(t,e){const r=De(t),n=e.query;let s=3;const a=r.queries.get(n);if(a){const u=a.Ra.indexOf(e);u>=0&&(a.Ra.splice(u,1),a.Ra.length===0?s=e.ma()?0:1:!a.Va()&&e.ma()&&(s=2))}switch(s){case 0:return r.queries.delete(n),r.onUnlisten(n,!0);case 1:return r.queries.delete(n),r.onUnlisten(n,!1);case 2:return r.onLastRemoteStoreUnlisten(n);default:return}}function yN(t,e){const r=De(t);let n=!1;for(const s of e){const a=s.query,u=r.queries.get(a);if(u){for(const d of u.Ra)d.pa(s)&&(n=!0);u.Aa=s}}n&&fm(r)}function _N(t,e,r){const n=De(t),s=n.queries.get(e);if(s)for(const a of s.Ra)a.onError(r);n.queries.delete(e)}function fm(t){t.fa.forEach(e=>{e.next()})}var vg,Hw;(Hw=vg||(vg={})).ya="default",Hw.Cache="cache";class wN{constructor(e,r,n){this.query=e,this.wa=r,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new ya(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.ba?this.Da(e)&&(this.wa.next(e),r=!0):this.va(e,this.onlineState)&&(this.Ca(e),r=!0),this.Sa=e,r}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let r=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),r=!0),r}va(e,r){if(!e.fromCache||!this.ma())return!0;const n=r!=="Offline";return(!this.options.Fa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const r=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}Ca(e){e=ya.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==vg.Cache}}/**
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
 */class AT{constructor(e){this.key=e}}class PT{constructor(e){this.key=e}}class EN{constructor(e,r){this.query=e,this.qa=r,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=$e(),this.mutatedKeys=$e(),this.Ua=qI(e),this.Ka=new sa(this.Ua)}get Wa(){return this.qa}Ga(e,r){const n=r?r.za:new Ww,s=r?r.Ka:this.Ka;let a=r?r.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((y,_)=>{const w=s.get(y),I=ah(this.query,_)?_:null,C=!!w&&this.mutatedKeys.has(w.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let x=!1;w&&I?w.data.isEqual(I.data)?C!==D&&(n.track({type:3,doc:I}),x=!0):this.ja(w,I)||(n.track({type:2,doc:I}),x=!0,(f&&this.Ua(I,f)>0||g&&this.Ua(I,g)<0)&&(d=!0)):!w&&I?(n.track({type:0,doc:I}),x=!0):w&&!I&&(n.track({type:1,doc:w}),x=!0,(f||g)&&(d=!0)),x&&(I?(u=u.add(I),a=D?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),n.track({type:1,doc:y})}return{Ka:u,za:n,ys:d,mutatedKeys:a}}ja(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n,s){const a=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const u=e.za.da();u.sort((y,_)=>function(I,C){const D=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Pe(20277,{Vt:x})}};return D(I)-D(C)}(y.type,_.type)||this.Ua(y.doc,_.doc)),this.Ha(n),s=s!=null&&s;const d=r&&!s?this.Ja():[],f=this.$a.size===0&&this.current&&!s?1:0,g=f!==this.Qa;return this.Qa=f,u.length!==0||g?{snapshot:new ya(this.query,e.Ka,a,u,e.mutatedKeys,f===0,g,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:d}:{Ya:d}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Ww,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(r=>this.qa=this.qa.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.qa=this.qa.delete(r)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=$e(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const r=[];return e.forEach(n=>{this.$a.has(n)||r.push(new PT(n))}),this.$a.forEach(n=>{e.has(n)||r.push(new AT(n))}),r}Xa(e){this.qa=e.Ns,this.$a=$e();const r=this.Ga(e.documents);return this.applyChanges(r,!0)}eu(){return ya.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const pm="SyncEngine";class IN{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class TN{constructor(e){this.key=e,this.tu=!1}}class SN{constructor(e,r,n,s,a,u){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new ts(d=>HI(d),sh),this.iu=new Map,this.su=new Set,this.ou=new ft(Se.comparator),this._u=new Map,this.au=new nm,this.uu={},this.cu=new Map,this.lu=va.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function bN(t,e,r=!0){const n=OT(t);let s;const a=n.ru.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.eu()):s=await RT(n,e,r,!0),s}async function CN(t,e){const r=OT(t);await RT(r,e,!0,!1)}async function RT(t,e,r,n){const s=await zD(t.localStore,On(e)),a=s.targetId,u=t.sharedClientState.addLocalQueryTarget(a,r);let d;return n&&(d=await AN(t,e,a,u==="current",s.resumeToken)),t.isPrimaryClient&&r&&ET(t.remoteStore,s),d}async function AN(t,e,r,n,s){t.Pu=(_,w,I)=>async function(D,x,O,V){let j=x.view.Ga(O);j.ys&&(j=await Fw(D.localStore,x.query,!1).then(({documents:P})=>x.view.Ga(P,j)));const $=V&&V.targetChanges.get(x.targetId),W=V&&V.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(j,D.isPrimaryClient,$,W);return Kw(D,x.targetId,Q.Ya),Q.snapshot}(t,_,w,I);const a=await Fw(t.localStore,e,!0),u=new EN(e,a.Ns),d=u.Ga(a.documents),f=vu.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline",s),g=u.applyChanges(d,t.isPrimaryClient,f);Kw(t,r,g.Ya);const y=new IN(e,r,u);return t.ru.set(e,y),t.iu.has(r)?t.iu.get(r).push(e):t.iu.set(r,[e]),g.snapshot}async function PN(t,e,r){const n=De(t),s=n.ru.get(e),a=n.iu.get(s.targetId);if(a.length>1)return n.iu.set(s.targetId,a.filter(u=>!sh(u,e))),void n.ru.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gg(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),r&&am(n.remoteStore,s.targetId),yg(n,s.targetId)}).catch(Pa)):(yg(n,s.targetId),await gg(n.localStore,s.targetId,!0))}async function RN(t,e){const r=De(t),n=r.ru.get(e),s=r.iu.get(n.targetId);r.isPrimaryClient&&s.length===1&&(r.sharedClientState.removeLocalQueryTarget(n.targetId),am(r.remoteStore,n.targetId))}async function xN(t,e,r){const n=VN(t);try{const s=await function(u,d){const f=De(u),g=Rt.now(),y=d.reduce((I,C)=>I.add(C.key),$e());let _,w;return f.persistence.runTransaction("Locally write mutations","readwrite",I=>{let C=hi(),D=$e();return f.Cs.getEntries(I,y).next(x=>{C=x,C.forEach((O,V)=>{V.isValidDocument()||(D=D.add(O))})}).next(()=>f.localDocuments.getOverlayedDocuments(I,C)).next(x=>{_=x;const O=[];for(const V of d){const j=zk(V,_.get(V.key).overlayedDocument);j!=null&&O.push(new rs(V.key,j,BI(j.value.mapValue),li.exists(!0)))}return f.mutationQueue.addMutationBatch(I,g,O,d)}).next(x=>{w=x;const O=x.applyToLocalDocumentSet(_,D);return f.documentOverlayCache.saveOverlays(I,x.batchId,O)})}).then(()=>({batchId:w.batchId,changes:QI(_)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(u,d,f){let g=u.uu[u.currentUser.toKey()];g||(g=new ft(Ve)),g=g.insert(d,f),u.uu[u.currentUser.toKey()]=g}(n,s.batchId,r),await _u(n,s.changes),await ph(n.remoteStore)}catch(s){const a=hm(s,"Failed to persist write");r.reject(a)}}async function xT(t,e){const r=De(t);try{const n=await UD(r.localStore,e);e.targetChanges.forEach((s,a)=>{const u=r._u.get(a);u&&(Ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.tu=!0:s.modifiedDocuments.size>0?Ze(u.tu,14607):s.removedDocuments.size>0&&(Ze(u.tu,42227),u.tu=!1))}),await _u(r,n,e)}catch(n){await Pa(n)}}function qw(t,e,r){const n=De(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const s=[];n.ru.forEach((a,u)=>{const d=u.view.ga(e);d.snapshot&&s.push(d.snapshot)}),function(u,d){const f=De(u);f.onlineState=d;let g=!1;f.queries.forEach((y,_)=>{for(const w of _.Ra)w.ga(d)&&(g=!0)}),g&&fm(f)}(n.eventManager,e),s.length&&n.nu.Q_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function kN(t,e,r){const n=De(t);n.sharedClientState.updateQueryState(e,"rejected",r);const s=n._u.get(e),a=s&&s.key;if(a){let u=new ft(Se.comparator);u=u.insert(a,rr.newNoDocument(a,ke.min()));const d=$e().add(a),f=new dh(ke.min(),new Map,new ft(Ve),u,d);await xT(n,f),n.ou=n.ou.remove(a),n._u.delete(e),gm(n)}else await gg(n.localStore,e,!1).then(()=>yg(n,e,r)).catch(Pa)}async function DN(t,e){const r=De(t),n=e.batch.batchId;try{const s=await BD(r.localStore,e);DT(r,n,null),kT(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await _u(r,s)}catch(s){await Pa(s)}}async function NN(t,e,r){const n=De(t);try{const s=await function(u,d){const f=De(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return f.mutationQueue.lookupMutationBatch(g,d).next(_=>(Ze(_!==null,37113),y=_.keys(),f.mutationQueue.removeMutationBatch(g,_))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>f.localDocuments.getDocuments(g,y))})}(n.localStore,e);DT(n,e,r),kT(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await _u(n,s)}catch(s){await Pa(s)}}function kT(t,e){(t.cu.get(e)||[]).forEach(r=>{r.resolve()}),t.cu.delete(e)}function DT(t,e,r){const n=De(t);let s=n.uu[n.currentUser.toKey()];if(s){const a=s.get(e);a&&(r?a.reject(r):a.resolve(),s=s.remove(e)),n.uu[n.currentUser.toKey()]=s}}function yg(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.iu.get(e))t.ru.delete(n),r&&t.nu.Tu(n,r);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(n=>{t.au.containsKey(n)||NT(t,n)})}function NT(t,e){t.su.delete(e.path.canonicalString());const r=t.ou.get(e);r!==null&&(am(t.remoteStore,r),t.ou=t.ou.remove(e),t._u.delete(r),gm(t))}function Kw(t,e,r){for(const n of r)n instanceof AT?(t.au.addReference(n.key,e),ON(t,n)):n instanceof PT?(he(pm,"Document no longer in limbo: "+n.key),t.au.removeReference(n.key,e),t.au.containsKey(n.key)||NT(t,n.key)):Pe(19791,{Iu:n})}function ON(t,e){const r=e.key,n=r.path.canonicalString();t.ou.get(r)||t.su.has(n)||(he(pm,"New document in limbo: "+r),t.su.add(n),gm(t))}function gm(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const r=new Se(gt.fromString(e)),n=t.lu.next();t._u.set(n,new TN(r)),t.ou=t.ou.insert(r,n),ET(t.remoteStore,new Wi(On(Jg(r.path)),n,"TargetPurposeLimboResolution",rh.le))}}async function _u(t,e,r){const n=De(t),s=[],a=[],u=[];n.ru.isEmpty()||(n.ru.forEach((d,f)=>{u.push(n.Pu(f,e,r).then(g=>{var y;if((g||r)&&n.isPrimaryClient){const _=g?!g.fromCache:(y=r==null?void 0:r.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;n.sharedClientState.updateQueryState(f.targetId,_?"current":"not-current")}if(g){s.push(g);const _=om.Ps(f.targetId,g);a.push(_)}}))}),await Promise.all(u),n.nu.Q_(s),await async function(f,g){const y=De(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>J.forEach(g,w=>J.forEach(w.ls,I=>y.persistence.referenceDelegate.addReference(_,w.targetId,I)).next(()=>J.forEach(w.hs,I=>y.persistence.referenceDelegate.removeReference(_,w.targetId,I)))))}catch(_){if(!Ra(_))throw _;he(sm,"Failed to update sequence numbers: "+_)}for(const _ of g){const w=_.targetId;if(!_.fromCache){const I=y.Ss.get(w),C=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(C);y.Ss=y.Ss.insert(w,D)}}}(n.localStore,a))}async function LN(t,e){const r=De(t);if(!r.currentUser.isEqual(e)){he(pm,"User change. New user:",e.toKey());const n=await vT(r.localStore,e);r.currentUser=e,function(a,u){a.cu.forEach(d=>{d.forEach(f=>{f.reject(new Te(ne.CANCELLED,u))})}),a.cu.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await _u(r,n.Ms)}}function MN(t,e){const r=De(t),n=r._u.get(e);if(n&&n.tu)return $e().add(n.key);{let s=$e();const a=r.iu.get(e);if(!a)return s;for(const u of a){const d=r.ru.get(u);s=s.unionWith(d.view.Wa)}return s}}function OT(t){const e=De(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=MN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kN.bind(null,e),e.nu.Q_=yN.bind(null,e.eventManager),e.nu.Tu=_N.bind(null,e.eventManager),e}function VN(t){const e=De(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=DN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NN.bind(null,e),e}class Od{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hh(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,r){return null}fu(e,r){return null}Vu(e){return FD(this.persistence,new LD,e.initialUser,this.serializer)}Ru(e){return new mT(im.Ei,this.serializer)}Au(e){return new GD}async terminate(){var e,r;(e=this.gcScheduler)===null||e===void 0||e.stop(),(r=this.indexBackfillerScheduler)===null||r===void 0||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Od.provider={build:()=>new Od};class FN extends Od{constructor(e){super(),this.cacheSizeBytes=e}mu(e,r){Ze(this.persistence.referenceDelegate instanceof Dd,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new wD(n,e.asyncQueue,r)}Ru(e){const r=this.cacheSizeBytes!==void 0?_r.withCacheSize(this.cacheSizeBytes):_r.DEFAULT;return new mT(n=>Dd.Ei(n,r),this.serializer)}}class _g{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>qw(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=LN.bind(null,this.syncEngine),await fN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new gN}()}createDatastore(e){const r=hh(e.databaseInfo.databaseId),n=function(a){return new YD(a)}(e.databaseInfo);return function(a,u,d,f){return new eN(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return function(n,s,a,u,d){return new rN(n,s,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,r=>qw(this.syncEngine,r,0),function(){return jw.C()?new jw:new HD}())}createSyncEngine(e,r){return function(s,a,u,d,f,g,y){const _=new SN(s,a,u,d,f,g);return y&&(_.hu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){var e,r;await async function(s){const a=De(s);he(Jo,"RemoteStore shutting down."),a.aa.add(5),await yu(a),a.ca.shutdown(),a.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(r=this.eventManager)===null||r===void 0||r.terminate()}}_g.provider={build:()=>new _g};/**
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
 */class BN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):di("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,r){setTimeout(()=>{this.muted||e(r)},0)}}/**
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
 */const oo="FirestoreClient";class UN{constructor(e,r,n,s,a){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=s,this.user=tr.UNAUTHENTICATED,this.clientId=RI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,async u=>{he(oo,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(he(oo,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=hm(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Tp(t,e){t.asyncQueue.verifyOperationInProgress(),he(oo,"Initializing OfflineComponentProvider");const r=t.configuration;await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async s=>{n.isEqual(s)||(await vT(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qw(t,e){t.asyncQueue.verifyOperationInProgress();const r=await jN(t);he(oo,"Initializing OnlineComponentProvider"),await e.initialize(r,t.configuration),t.setCredentialChangeListener(n=>zw(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,s)=>zw(e.remoteStore,s)),t._onlineComponents=e}async function jN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he(oo,"Using user provided OfflineComponentProvider");try{await Tp(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(s){return s.name==="FirebaseError"?s.code===ne.FAILED_PRECONDITION||s.code===ne.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(r))throw r;fa("Error using user provided cache. Falling back to memory cache: "+r),await Tp(t,new Od)}}else he(oo,"Using default OfflineComponentProvider"),await Tp(t,new FN(void 0));return t._offlineComponents}async function LT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he(oo,"Using user provided OnlineComponentProvider"),await Qw(t,t._uninitializedComponentsProvider._online)):(he(oo,"Using default OnlineComponentProvider"),await Qw(t,new _g))),t._onlineComponents}function $N(t){return LT(t).then(e=>e.syncEngine)}async function zN(t){const e=await LT(t),r=e.eventManager;return r.onListen=bN.bind(null,e.syncEngine),r.onUnlisten=PN.bind(null,e.syncEngine),r.onFirstRemoteStoreListen=CN.bind(null,e.syncEngine),r.onLastRemoteStoreUnlisten=RN.bind(null,e.syncEngine),r}function WN(t,e,r={}){const n=new Yi;return t.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,g){const y=new BN({next:w=>{y.yu(),u.enqueueAndForget(()=>vN(a,_));const I=w.docs.has(d);!I&&w.fromCache?g.reject(new Te(ne.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&w.fromCache&&f&&f.source==="server"?g.reject(new Te(ne.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),_=new wN(Jg(d.path),y,{includeMetadataChanges:!0,Fa:!0});return mN(a,_)}(await zN(t),t.asyncQueue,e,r,n)),n.promise}/**
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
 */function MT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Yw=new Map;/**
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
 */function GN(t,e,r){if(!r)throw new Te(ne.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function HN(t,e,r,n){if(e===!0&&n===!0)throw new Te(ne.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function Xw(t){if(!Se.isDocumentKey(t))throw new Te(ne.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Pe(12329,{type:typeof t})}function nu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Te(ne.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=mm(t);throw new Te(ne.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
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
 */const VT="firestore.googleapis.com",Jw=!0;class Zw{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new Te(ne.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=VT,this.ssl=Jw}else this.host=e.host,this.ssl=(r=e.ssl)!==null&&r!==void 0?r:Jw;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=gT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yD)throw new Te(ne.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}HN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MT((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Te(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Te(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Te(ne.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vm{constructor(e,r,n,s){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Te(ne.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Te(ne.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Kx;switch(n.type){case"firstParty":return new Jx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Te(ne.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const n=Yw.get(r);n&&(he("ComponentProvider","Removing Datastore"),Yw.delete(r),n.terminate())}(this),Promise.resolve()}}function qN(t,e,r,n={}){var s;const a=(t=nu(t,vm))._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),d=`${e}:${r}`;a.host!==VT&&a.host!==d&&fa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:d,ssl:!1,emulatorOptions:n});if(!qo(f,u)&&(t._setSettings(f),n.mockUserToken)){let g,y;if(typeof n.mockUserToken=="string")g=n.mockUserToken,y=tr.MOCK_USER;else{g=sP(n.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new Te(ne.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new tr(_)}t._authCredentials=new Qx(new AI(g,y))}}/**
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
 */class ym{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ym(this.firestore,e,this._query)}}class Qr{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Qr(this.firestore,e,this._key)}}class iu extends ym{constructor(e,r,n){super(e,r,Jg(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Qr(this.firestore,null,new Se(e))}withConverter(e){return new iu(this.firestore,e,this._path)}}function gh(t,e,...r){if(t=ir(t),arguments.length===1&&(e=RI.newId()),GN("doc","path",e),t instanceof vm){const n=gt.fromString(e,...r);return Xw(n),new Qr(t,null,new Se(n))}{if(!(t instanceof Qr||t instanceof iu))throw new Te(ne.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(gt.fromString(e,...r));return Xw(n),new Qr(t.firestore,t instanceof iu?t.converter:null,new Se(n))}}/**
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
 */const e0="AsyncQueue";class t0{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new _T(this,"async_queue_retry"),this.ju=()=>{const n=Ip();n&&he(e0,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=e;const r=Ip();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const r=Ip();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const r=new Yi;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ra(e))throw e;he(e0,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const r=this.Hu.then(()=>(this.Wu=!0,e().catch(n=>{throw this.Ku=n,this.Wu=!1,di("INTERNAL UNHANDLED ERROR: ",r0(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=r,r}enqueueAfterDelay(e,r,n){this.Ju(),this.zu.indexOf(e)>-1&&(r=0);const s=dm.createAndSchedule(this,e,r,n,a=>this.Xu(a));return this.Uu.push(s),s}Ju(){this.Ku&&Pe(47125,{ec:r0(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const r of this.Uu)if(r.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.Uu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const r=this.Uu.indexOf(e);this.Uu.splice(r,1)}}function r0(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class _m extends vm{constructor(e,r,n,s){super(e,r,n,s),this.type="firestore",this._queue=new t0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new t0(e),this._firestoreClient=void 0,await e}}}function KN(t,e){const r=typeof t=="object"?t:VE(),n=typeof t=="string"?t:bd,s=Vg(r,"firestore").getImmediate({identifier:n});if(!s._initialized){const a=iP("firestore");a&&qN(s,...a)}return s}function FT(t){if(t._terminated)throw new Te(ne.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||QN(t),t._firestoreClient}function QN(t){var e,r,n;const s=t._freezeSettings(),a=function(d,f,g,y){return new fk(d,f,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,MT(y.experimentalLongPollingOptions),y.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((r=s.localCache)===null||r===void 0)&&r._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new UN(t._authCredentials,t._appCheckCredentials,t._queue,a,t._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(t._componentsProvider))}/**
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
 */class _a{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _a(Qt.fromBase64String(e))}catch(r){throw new Te(ne.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new _a(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class mh{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new Te(ne.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class wm{constructor(e){this._methodName=e}}/**
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
 */class Em{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new Te(ne.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new Te(ne.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
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
 */class Im{constructor(e){this._values=(e||[]).map(r=>r)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let a=0;a<n.length;++a)if(n[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const YN=/^__.*__$/;class BT{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return new rs(e,this.data,this.fieldMask,r,this.fieldTransforms)}}function UT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Pe(40011,{oc:t})}}class Tm{constructor(e,r,n,s,a,u){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=s,a===void 0&&this._c(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new Tm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),s=this.ac({path:n,cc:!1});return s.lc(e),s}hc(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),s=this.ac({path:n,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Ld(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(UT(this.oc)&&YN.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class XN{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||hh(e)}dc(e,r,n,s=!1){return new Tm({oc:e,methodName:r,Ec:n,path:qt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function JN(t){const e=t._freezeSettings(),r=hh(t._databaseId);return new XN(t._databaseId,!!e.ignoreUndefinedProperties,r)}class wu extends wm{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wu}}function ZN(t,e,r,n){const s=t.dc(1,e,r);$T("Data must be an object, but it was:",s,n);const a=[],u=Rr.empty();uo(n,(f,g)=>{const y=Sm(e,f,r);g=ir(g);const _=s.hc(y);if(g instanceof wu)a.push(y);else{const w=vh(g,_);w!=null&&(a.push(y),u.set(y,w))}});const d=new gn(a);return new BT(u,d,s.fieldTransforms)}function eO(t,e,r,n,s,a){const u=t.dc(1,e,r),d=[n0(e,n,r)],f=[s];if(a.length%2!=0)throw new Te(ne.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<a.length;w+=2)d.push(n0(e,a[w])),f.push(a[w+1]);const g=[],y=Rr.empty();for(let w=d.length-1;w>=0;--w)if(!nO(g,d[w])){const I=d[w];let C=f[w];C=ir(C);const D=u.hc(I);if(C instanceof wu)g.push(I);else{const x=vh(C,D);x!=null&&(g.push(I),y.set(I,x))}}const _=new gn(g);return new BT(y,_,u.fieldTransforms)}function vh(t,e){if(jT(t=ir(t)))return $T("Unsupported field value:",e,t),tO(t,e);if(t instanceof wm)return function(n,s){if(!UT(s.oc))throw s.Tc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${n._methodName}() is not currently supported inside arrays`);const a=n._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(n,s){const a=[];let u=0;for(const d of n){let f=vh(d,s.Pc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(t,e)}return function(n,s){if((n=ir(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Vk(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const a=Rt.fromDate(n);return{timestampValue:kd(s.serializer,a)}}if(n instanceof Rt){const a=new Rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:kd(s.serializer,a)}}if(n instanceof Em)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _a)return{bytesValue:lT(s.serializer,n._byteString)};if(n instanceof Qr){const a=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(a))throw s.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:rm(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Im)return function(u,d){return{mapValue:{fields:{[VI]:{stringValue:FI},[Cd]:{arrayValue:{values:u.toArray().map(g=>{if(typeof g!="number")throw d.Tc("VectorValues must only contain numeric values.");return Zg(d.serializer,g)})}}}}}}(n,s);throw s.Tc(`Unsupported field value: ${mm(n)}`)}(t,e)}function tO(t,e){const r={};return kI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):uo(t,(n,s)=>{const a=vh(s,e.uc(n));a!=null&&(r[n]=a)}),{mapValue:{fields:r}}}function jT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Rt||t instanceof Em||t instanceof _a||t instanceof Qr||t instanceof wm||t instanceof Im)}function $T(t,e,r){if(!jT(r)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(r)){const n=mm(r);throw n==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+n)}}function n0(t,e,r){if((e=ir(e))instanceof mh)return e._internalPath;if(typeof e=="string")return Sm(t,e);throw Ld("Field path arguments must be of type string or ",t,!1,void 0,r)}const rO=new RegExp("[~\\*/\\[\\]]");function Sm(t,e,r){if(e.search(rO)>=0)throw Ld(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new mh(...e.split("."))._internalPath}catch{throw Ld(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function Ld(t,e,r,n,s){const a=n&&!n.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;r&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${n}`),u&&(f+=` in document ${s}`),f+=")"),new Te(ne.INVALID_ARGUMENT,d+t+f)}function nO(t,e){return t.some(r=>r.isEqual(e))}/**
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
 */class zT{constructor(e,r,n,s,a){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Qr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new iO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(WT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class iO extends zT{data(){return super.data()}}function WT(t,e){return typeof e=="string"?Sm(t,e):e instanceof mh?e._internalPath:e._delegate._internalPath}class oO{convertValue(e,r="none"){switch(no(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(ro(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw Pe(62114,{value:e})}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const n={};return uo(e,(s,a)=>{n[s]=this.convertValue(a,r)}),n}convertVectorValue(e){var r,n,s;const a=(s=(n=(r=e.fields)===null||r===void 0?void 0:r[Cd].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>yt(u.doubleValue));return new Im(a)}convertGeoPoint(e){return new Em(yt(e.latitude),yt(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=ih(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(Jl(e));default:return null}}convertTimestamp(e){const r=to(e);return new Rt(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=gt.fromString(e);Ze(pT(n),9688,{name:e});const s=new Zl(n.get(1),n.get(3)),a=new Se(n.popFirst(5));return s.isEqual(r)||di(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),a}}/**
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
 */class sO{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class GT extends zT{constructor(e,r,n,s,a,u){super(e,r,n,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new aO(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(WT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class aO extends GT{data(e={}){return super.data(e)}}/**
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
 */function lO(t){t=nu(t,Qr);const e=nu(t.firestore,_m);return WN(FT(e),t._key).then(r=>dO(e,t,r))}class uO extends oO{constructor(e){super(),this.firestore=e}convertBytes(e){return new _a(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new Qr(this.firestore,null,r)}}function bm(t,e,r,...n){t=nu(t,Qr);const s=nu(t.firestore,_m),a=JN(s);let u;return u=typeof(e=ir(e))=="string"||e instanceof mh?eO(a,"updateDoc",t._key,e,r,n):ZN(a,"updateDoc",t._key,e),cO(s,[u.toMutation(t._key,li.exists(!0))])}function cO(t,e){return function(n,s){const a=new Yi;return n.asyncQueue.enqueueAndForget(async()=>xN(await $N(n),s,a)),a.promise}(FT(t),e)}function dO(t,e,r){const n=r.docs.get(e._key),s=new uO(t);return new GT(t,s,e._key,n,new sO(r.hasPendingWrites,r.fromCache),e.converter)}/**
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
 */function hO(){return new wu("deleteField")}(function(e,r=!0){(function(s){Aa=s})(ba),ha(new Ko("firestore",(n,{instanceIdentifier:s,options:a})=>{const u=n.getProvider("app").getImmediate(),d=new _m(new Yx(n.getProvider("auth-internal")),new Zx(u,n.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new Te(ne.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zl(g.options.projectId,y)}(u,s),u);return a=Object.assign({useFetchStreams:r},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),Ki(lw,uw,e),Ki(lw,uw,"esm2017")})();const fO={apiKey:"AIzaSyBbXsS-nxFtF5lSbOz99jdQ8bl_wqjVsms",authDomain:"projectm-3780c.firebaseapp.com",projectId:"projectm-3780c",storageBucket:"projectm-3780c.firebasestorage.app",messagingSenderId:"315745607112",appId:"1:315745607112:web:7201bd42b124720d5e74fd"},HT=ME(fO),cd=Wx(HT),yh=KN(HT),pO=[{id:1,name:"Calendar",icon:"icon/calendar_icon.svg",ariaLabel:"Open calendar"},{id:2,name:"Messages question",icon:"icon/message-question_icon.svg",ariaLabel:"Check messages or questions"},{id:3,name:"Notifications",icon:"icon/notification_icon.svg",ariaLabel:"View notifications"}],gO=[{id:1,userName:"Lee Song",country:"United States",avatar:"image/avatar-1.jpeg"}],mO=()=>{const[t,e]=oe.useState(!1),{setIsLoggedIn:r,loggedUser:n,setShowLoginForm:s}=oe.useContext(Sa),a=()=>{e(d=>!d)},u=()=>{NR(cd).then(()=>{r(!1),s(!1),console.log("LogOut:")}).catch(d=>console.log(d))};return console.log("User:",n),z.jsxs(OA,{role:"region","aria-label":"User menu block",children:[z.jsx(LA,{"aria-label":"User menu navigation",children:pO.map(({id:d,icon:f,ariaLabel:g})=>z.jsx(MA,{"aria-label":g,"aria-haspopup":"true",children:z.jsx(x_,{src:f,alt:""})},d))}),z.jsxs(VA,{role:"group","aria-label":"User information",children:[gO.map(({id:d,userName:f,country:g,avatar:y})=>z.jsxs(R_,{role:"group","aria-label":"User information",children:[z.jsxs(NA,{"aria-labelledby":`user-name-${d} user-country-${d}`,children:[z.jsx(FA,{id:`user-name-${d}`,children:f}),z.jsx(BA,{id:`user-country-${d}`,children:g})]}),z.jsx(UA,{src:y,alt:f,role:"presentation"})]},d)),z.jsx(jA,{onClick:a,"aria-haspopup":"true","aria-label":"Open user menu",children:z.jsx(x_,{src:"icon/arrow-down_icon.svg",alt:"User"})})]}),t&&z.jsx(R_,{children:z.jsx($A,{"aria-label":"User menu popup",children:z.jsx(HA,{onClick:u,children:"Log out"})})})]})},Cm=oe.forwardRef(({onToggleSidebar:t,isSidebarOpen:e},r)=>{const{isLoggedIn:n}=oe.useContext(Sa);return z.jsxs(SA,{ref:r,children:[z.jsxs(_A,{children:[z.jsxs(IA,{children:[z.jsx("img",{src:"logo.svg",alt:"Logo"}),z.jsx("span",{children:"Project M."})]}),n?z.jsx(TA,{className:"sidebar-toggle",onClick:t,$isSidebarOpen:e,children:z.jsx("img",{src:"icon/arrow_left.svg",alt:"Sidebar opener"})}):""]}),n?z.jsxs(bA,{children:[z.jsx(DA,{}),z.jsx(mO,{})]}):""]})});Cm.displayName="Header";Cm.propTypes={onToggleSidebar:si.func.isRequired,isSidebarOpen:si.bool.isRequired};const vO=ee.div``,yO=ee.div``,_O=ee.div``,wO=ee.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1rem;

  @media (max-width: ${({theme:t})=>t.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(1fr));
  }
`,EO=ee.div`
  padding: 1.5rem;
  width: 23rem;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    width: 20rem;
    padding: 1rem;
  }
`,IO=ee.div`
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
`,TO=ee.h2`
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
`,SO=ee.p`
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
`,bO=ee.button``,CO=ee.img``,AO=ee.div`
  height: 100%;
`,PO=ee.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 16px;

  background: ${({theme:t})=>t.colors.primaryLightBackground};
`,RO=ee.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,xO=ee.div`
  padding: 0 0.4rem;
  line-height: 1.5rem;
  border-radius: 4px;
  color: ${({$levelColor:t})=>t};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;

  background: ${({$levelBg:t})=>t};
`,kO=ee.div`
  cursor: pointer;
  padding: 6px;
  border-radius: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`,DO=ee.div`
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
`,Sp=ee.button`
  all: unset;
  padding: 0.8rem 0.8rem;
  font-size: 1rem;
  color: ${da.colors.darkText};
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ffeaea;
  }

  &:active {
    background-color: #ffd5d5;
  }
  cursor: pointer;
`,NO=ee.img`
  user-select: none;
`,bp=ee.img`
  margin-right: 1rem;
  width: 20px;
  height: 20px;
`,OO=ee.div``,LO=ee.h3`
  margin-bottom: 0.5rem;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
`,MO=ee.p`
  margin-bottom: 1.5rem;
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.87rem;
  font-weight: 400;
  text-align: left;
`,VO=ee.img`
  border-radius: 8px;
`,FO=ee.div`
  display: flex;
  justify-content: space-between;
`,BO=ee.div`
  width: 63px;
  height: 24px;
`,UO=ee.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,jO=ee.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  margin-right: 1rem;
`,$O=ee.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
`,zO=ee.div`
  height: 100%;
`;function wg(t,e){return wg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},wg(t,e)}function qT(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,wg(t,e)}function Ie(){return Ie=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Ie.apply(null,arguments)}function ou(t){"@babel/helpers - typeof";return ou=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ou(t)}function WO(t,e){if(ou(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(ou(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function GO(t){var e=WO(t,"string");return ou(e)=="symbol"?e:e+""}function HO(t,e,r){return(e=GO(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i0(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function o0(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?i0(Object(r),!0).forEach(function(n){HO(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i0(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function yr(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var s0=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),a0=function(){return Math.random().toString(36).substring(7).split("").join(".")},l0={INIT:"@@redux/INIT"+a0(),REPLACE:"@@redux/REPLACE"+a0()};function qO(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function KT(t,e,r){var n;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(yr(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(yr(1));return r(KT)(t,e)}if(typeof t!="function")throw new Error(yr(2));var s=t,a=e,u=[],d=u,f=!1;function g(){d===u&&(d=u.slice())}function y(){if(f)throw new Error(yr(3));return a}function _(D){if(typeof D!="function")throw new Error(yr(4));if(f)throw new Error(yr(5));var x=!0;return g(),d.push(D),function(){if(x){if(f)throw new Error(yr(6));x=!1,g();var V=d.indexOf(D);d.splice(V,1),u=null}}}function w(D){if(!qO(D))throw new Error(yr(7));if(typeof D.type>"u")throw new Error(yr(8));if(f)throw new Error(yr(9));try{f=!0,a=s(a,D)}finally{f=!1}for(var x=u=d,O=0;O<x.length;O++){var V=x[O];V()}return D}function I(D){if(typeof D!="function")throw new Error(yr(10));s=D,w({type:l0.REPLACE})}function C(){var D,x=_;return D={subscribe:function(V){if(typeof V!="object"||V===null)throw new Error(yr(11));function j(){V.next&&V.next(y())}j();var $=x(j);return{unsubscribe:$}}},D[s0]=function(){return this},D}return w({type:l0.INIT}),n={dispatch:w,subscribe:_,getState:y,replaceReducer:I},n[s0]=C,n}function u0(t,e){return function(){return e(t.apply(this,arguments))}}function c0(t,e){if(typeof t=="function")return u0(t,e);if(typeof t!="object"||t===null)throw new Error(yr(16));var r={};for(var n in t){var s=t[n];typeof s=="function"&&(r[n]=u0(s,e))}return r}function QT(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(n){return n}:e.length===1?e[0]:e.reduce(function(n,s){return function(){return n(s.apply(void 0,arguments))}})}function KO(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(n){return function(){var s=n.apply(void 0,arguments),a=function(){throw new Error(yr(15))},u={getState:s.getState,dispatch:function(){return a.apply(void 0,arguments)}},d=e.map(function(f){return f(u)});return a=QT.apply(void 0,d)(s.dispatch),o0(o0({},s),{},{dispatch:a})}}}var YT=je.createContext(null);function QO(t){t()}var XT=QO,YO=function(e){return XT=e},XO=function(){return XT};function JO(){var t=XO(),e=null,r=null;return{clear:function(){e=null,r=null},notify:function(){t(function(){for(var s=e;s;)s.callback(),s=s.next})},get:function(){for(var s=[],a=e;a;)s.push(a),a=a.next;return s},subscribe:function(s){var a=!0,u=r={callback:s,next:null,prev:r};return u.prev?u.prev.next=u:e=u,function(){!a||e===null||(a=!1,u.next?u.next.prev=u.prev:r=u.prev,u.prev?u.prev.next=u.next:e=u.next)}}}}var d0={notify:function(){},get:function(){return[]}};function JT(t,e){var r,n=d0;function s(_){return f(),n.subscribe(_)}function a(){n.notify()}function u(){y.onStateChange&&y.onStateChange()}function d(){return!!r}function f(){r||(r=e?e.addNestedSub(u):t.subscribe(u),n=JO())}function g(){r&&(r(),r=void 0,n.clear(),n=d0)}var y={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:d,trySubscribe:f,tryUnsubscribe:g,getListeners:function(){return n}};return y}var ZT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?oe.useLayoutEffect:oe.useEffect;function ZO(t){var e=t.store,r=t.context,n=t.children,s=oe.useMemo(function(){var d=JT(e);return{store:e,subscription:d}},[e]),a=oe.useMemo(function(){return e.getState()},[e]);ZT(function(){var d=s.subscription;return d.onStateChange=d.notifyNestedSubs,d.trySubscribe(),a!==e.getState()&&d.notifyNestedSubs(),function(){d.tryUnsubscribe(),d.onStateChange=null}},[s,a]);var u=r||YT;return je.createElement(u.Provider,{value:s},n)}function Md(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}var Cp={exports:{}},Xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h0;function eL(){if(h0)return Xe;h0=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,n=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,g=t?Symbol.for("react.concurrent_mode"):60111,y=t?Symbol.for("react.forward_ref"):60112,_=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,I=t?Symbol.for("react.memo"):60115,C=t?Symbol.for("react.lazy"):60116,D=t?Symbol.for("react.block"):60121,x=t?Symbol.for("react.fundamental"):60117,O=t?Symbol.for("react.responder"):60118,V=t?Symbol.for("react.scope"):60119;function j(W){if(typeof W=="object"&&W!==null){var Q=W.$$typeof;switch(Q){case e:switch(W=W.type,W){case f:case g:case n:case a:case s:case _:return W;default:switch(W=W&&W.$$typeof,W){case d:case y:case C:case I:case u:return W;default:return Q}}case r:return Q}}}function $(W){return j(W)===g}return Xe.AsyncMode=f,Xe.ConcurrentMode=g,Xe.ContextConsumer=d,Xe.ContextProvider=u,Xe.Element=e,Xe.ForwardRef=y,Xe.Fragment=n,Xe.Lazy=C,Xe.Memo=I,Xe.Portal=r,Xe.Profiler=a,Xe.StrictMode=s,Xe.Suspense=_,Xe.isAsyncMode=function(W){return $(W)||j(W)===f},Xe.isConcurrentMode=$,Xe.isContextConsumer=function(W){return j(W)===d},Xe.isContextProvider=function(W){return j(W)===u},Xe.isElement=function(W){return typeof W=="object"&&W!==null&&W.$$typeof===e},Xe.isForwardRef=function(W){return j(W)===y},Xe.isFragment=function(W){return j(W)===n},Xe.isLazy=function(W){return j(W)===C},Xe.isMemo=function(W){return j(W)===I},Xe.isPortal=function(W){return j(W)===r},Xe.isProfiler=function(W){return j(W)===a},Xe.isStrictMode=function(W){return j(W)===s},Xe.isSuspense=function(W){return j(W)===_},Xe.isValidElementType=function(W){return typeof W=="string"||typeof W=="function"||W===n||W===g||W===a||W===s||W===_||W===w||typeof W=="object"&&W!==null&&(W.$$typeof===C||W.$$typeof===I||W.$$typeof===u||W.$$typeof===d||W.$$typeof===y||W.$$typeof===x||W.$$typeof===O||W.$$typeof===V||W.$$typeof===D)},Xe.typeOf=j,Xe}var f0;function tL(){return f0||(f0=1,Cp.exports=eL()),Cp.exports}var Ap,p0;function rL(){if(p0)return Ap;p0=1;var t=tL(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[t.ForwardRef]=n,a[t.Memo]=s;function u(C){return t.isMemo(C)?s:a[C.$$typeof]||e}var d=Object.defineProperty,f=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,w=Object.prototype;function I(C,D,x){if(typeof D!="string"){if(w){var O=_(D);O&&O!==w&&I(C,O,x)}var V=f(D);g&&(V=V.concat(g(D)));for(var j=u(C),$=u(D),W=0;W<V.length;++W){var Q=V[W];if(!r[Q]&&!(x&&x[Q])&&!($&&$[Q])&&!(j&&j[Q])){var P=y(D,Q);try{d(C,Q,P)}catch{}}}}return C}return Ap=I,Ap}var nL=rL();const g0=Gd(nL);var Pp={exports:{}},rt={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function iL(){if(m0)return rt;m0=1;var t=60103,e=60106,r=60107,n=60108,s=60114,a=60109,u=60110,d=60112,f=60113,g=60120,y=60115,_=60116,w=60121,I=60122,C=60117,D=60129,x=60131;if(typeof Symbol=="function"&&Symbol.for){var O=Symbol.for;t=O("react.element"),e=O("react.portal"),r=O("react.fragment"),n=O("react.strict_mode"),s=O("react.profiler"),a=O("react.provider"),u=O("react.context"),d=O("react.forward_ref"),f=O("react.suspense"),g=O("react.suspense_list"),y=O("react.memo"),_=O("react.lazy"),w=O("react.block"),I=O("react.server.block"),C=O("react.fundamental"),D=O("react.debug_trace_mode"),x=O("react.legacy_hidden")}function V(b){if(typeof b=="object"&&b!==null){var be=b.$$typeof;switch(be){case t:switch(b=b.type,b){case r:case s:case n:case f:case g:return b;default:switch(b=b&&b.$$typeof,b){case u:case d:case _:case y:case a:return b;default:return be}}case e:return be}}}var j=a,$=t,W=d,Q=r,P=_,A=y,R=e,N=s,L=n,U=f;return rt.ContextConsumer=u,rt.ContextProvider=j,rt.Element=$,rt.ForwardRef=W,rt.Fragment=Q,rt.Lazy=P,rt.Memo=A,rt.Portal=R,rt.Profiler=N,rt.StrictMode=L,rt.Suspense=U,rt.isAsyncMode=function(){return!1},rt.isConcurrentMode=function(){return!1},rt.isContextConsumer=function(b){return V(b)===u},rt.isContextProvider=function(b){return V(b)===a},rt.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===t},rt.isForwardRef=function(b){return V(b)===d},rt.isFragment=function(b){return V(b)===r},rt.isLazy=function(b){return V(b)===_},rt.isMemo=function(b){return V(b)===y},rt.isPortal=function(b){return V(b)===e},rt.isProfiler=function(b){return V(b)===s},rt.isStrictMode=function(b){return V(b)===n},rt.isSuspense=function(b){return V(b)===f},rt.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===r||b===s||b===D||b===n||b===f||b===g||b===x||typeof b=="object"&&b!==null&&(b.$$typeof===_||b.$$typeof===y||b.$$typeof===a||b.$$typeof===u||b.$$typeof===d||b.$$typeof===C||b.$$typeof===w||b[0]===I)},rt.typeOf=V,rt}var v0;function oL(){return v0||(v0=1,Pp.exports=iL()),Pp.exports}var sL=oL(),aL=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],lL=["reactReduxForwardedRef"],uL=[],cL=[null,null];function dL(t,e){var r=t[1];return[e.payload,r+1]}function y0(t,e,r){ZT(function(){return t.apply(void 0,e)},r)}function hL(t,e,r,n,s,a,u){t.current=n,e.current=s,r.current=!1,a.current&&(a.current=null,u())}function fL(t,e,r,n,s,a,u,d,f,g){if(t){var y=!1,_=null,w=function(){if(!y){var D=e.getState(),x,O;try{x=n(D,s.current)}catch(V){O=V,_=V}O||(_=null),x===a.current?u.current||f():(a.current=x,d.current=x,u.current=!0,g({type:"STORE_UPDATED",payload:{error:O}}))}};r.onStateChange=w,r.trySubscribe(),w();var I=function(){if(y=!0,r.tryUnsubscribe(),r.onStateChange=null,_)throw _};return I}}var pL=function(){return[null,0]};function gL(t,e){e===void 0&&(e={});var r=e,n=r.getDisplayName,s=n===void 0?function(j){return"ConnectAdvanced("+j+")"}:n,a=r.methodName,u=a===void 0?"connectAdvanced":a,d=r.renderCountProp,f=d===void 0?void 0:d,g=r.shouldHandleStateChanges,y=g===void 0?!0:g,_=r.storeKey,w=_===void 0?"store":_;r.withRef;var I=r.forwardRef,C=I===void 0?!1:I,D=r.context,x=D===void 0?YT:D,O=Md(r,aL),V=x;return function($){var W=$.displayName||$.name||"Component",Q=s(W),P=Ie({},O,{getDisplayName:s,methodName:u,renderCountProp:f,shouldHandleStateChanges:y,storeKey:w,displayName:Q,wrappedComponentName:W,WrappedComponent:$}),A=O.pure;function R(be){return t(be.dispatch,P)}var N=A?oe.useMemo:function(be){return be()};function L(be){var Qe=oe.useMemo(function(){var Lr=be.reactReduxForwardedRef,wr=Md(be,lL);return[be.context,Lr,wr]},[be]),Ye=Qe[0],Me=Qe[1],ie=Qe[2],ce=oe.useMemo(function(){return Ye&&Ye.Consumer&&sL.isContextConsumer(je.createElement(Ye.Consumer,null))?Ye:V},[Ye,V]),ae=oe.useContext(ce),B=!!be.store&&!!be.store.getState&&!!be.store.dispatch;ae&&ae.store;var X=B?be.store:ae.store,pe=oe.useMemo(function(){return R(X)},[X]),Ae=oe.useMemo(function(){if(!y)return cL;var Lr=JT(X,B?null:ae.subscription),wr=Lr.notifyNestedSubs.bind(Lr);return[Lr,wr]},[X,B,ae]),_e=Ae[0],xe=Ae[1],Oe=oe.useMemo(function(){return B?ae:Ie({},ae,{subscription:_e})},[B,ae,_e]),Ne=oe.useReducer(dL,uL,pL),Fe=Ne[0],et=Fe[0],kt=Ne[1];if(et&&et.error)throw et.error;var Dt=oe.useRef(),Nr=oe.useRef(ie),Or=oe.useRef(),Fn=oe.useRef(!1),Bn=N(function(){return Or.current&&ie===Nr.current?Or.current:pe(X.getState(),ie)},[X,et,ie]);y0(hL,[Nr,Dt,Fn,ie,Bn,Or,xe]),y0(fL,[y,X,_e,pe,Nr,Dt,Fn,Or,xe,kt],[X,_e,pe]);var Un=oe.useMemo(function(){return je.createElement($,Ie({},Bn,{ref:Me}))},[Me,$,Bn]),is=oe.useMemo(function(){return y?je.createElement(ce.Provider,{value:Oe},Un):Un},[ce,Un,Oe]);return is}var U=A?je.memo(L):L;if(U.WrappedComponent=$,U.displayName=L.displayName=Q,C){var b=je.forwardRef(function(Qe,Ye){return je.createElement(U,Ie({},Qe,{reactReduxForwardedRef:Ye}))});return b.displayName=Q,b.WrappedComponent=$,g0(b,$)}return g0(U,$)}}function _0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Rp(t,e){if(_0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var s=0;s<r.length;s++)if(!Object.prototype.hasOwnProperty.call(e,r[s])||!_0(t[r[s]],e[r[s]]))return!1;return!0}function mL(t,e){var r={},n=function(u){var d=t[u];typeof d=="function"&&(r[u]=function(){return e(d.apply(void 0,arguments))})};for(var s in t)n(s);return r}function Am(t){return function(r,n){var s=t(r,n);function a(){return s}return a.dependsOnOwnProps=!1,a}}function w0(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function eS(t,e){return function(n,s){s.displayName;var a=function(d,f){return a.dependsOnOwnProps?a.mapToProps(d,f):a.mapToProps(d)};return a.dependsOnOwnProps=!0,a.mapToProps=function(d,f){a.mapToProps=t,a.dependsOnOwnProps=w0(t);var g=a(d,f);return typeof g=="function"&&(a.mapToProps=g,a.dependsOnOwnProps=w0(g),g=a(d,f)),g},a}}function vL(t){return typeof t=="function"?eS(t):void 0}function yL(t){return t?void 0:Am(function(e){return{dispatch:e}})}function _L(t){return t&&typeof t=="object"?Am(function(e){return mL(t,e)}):void 0}const wL=[vL,yL,_L];function EL(t){return typeof t=="function"?eS(t):void 0}function IL(t){return t?void 0:Am(function(){return{}})}const TL=[EL,IL];function SL(t,e,r){return Ie({},r,t,e)}function bL(t){return function(r,n){n.displayName;var s=n.pure,a=n.areMergedPropsEqual,u=!1,d;return function(g,y,_){var w=t(g,y,_);return u?(!s||!a(w,d))&&(d=w):(u=!0,d=w),d}}}function CL(t){return typeof t=="function"?bL(t):void 0}function AL(t){return t?void 0:function(){return SL}}const PL=[CL,AL];var RL=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function xL(t,e,r,n){return function(a,u){return r(t(a,u),e(n,u),u)}}function kL(t,e,r,n,s){var a=s.areStatesEqual,u=s.areOwnPropsEqual,d=s.areStatePropsEqual,f=!1,g,y,_,w,I;function C(j,$){return g=j,y=$,_=t(g,y),w=e(n,y),I=r(_,w,y),f=!0,I}function D(){return _=t(g,y),e.dependsOnOwnProps&&(w=e(n,y)),I=r(_,w,y),I}function x(){return t.dependsOnOwnProps&&(_=t(g,y)),e.dependsOnOwnProps&&(w=e(n,y)),I=r(_,w,y),I}function O(){var j=t(g,y),$=!d(j,_);return _=j,$&&(I=r(_,w,y)),I}function V(j,$){var W=!u($,y),Q=!a(j,g,$,y);return g=j,y=$,W&&Q?D():W?x():Q?O():I}return function($,W){return f?V($,W):C($,W)}}function DL(t,e){var r=e.initMapStateToProps,n=e.initMapDispatchToProps,s=e.initMergeProps,a=Md(e,RL),u=r(t,a),d=n(t,a),f=s(t,a),g=a.pure?kL:xL;return g(u,d,f,t,a)}var NL=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function xp(t,e,r){for(var n=e.length-1;n>=0;n--){var s=e[n](t);if(s)return s}return function(a,u){throw new Error("Invalid value of type "+typeof t+" for "+r+" argument when connecting component "+u.wrappedComponentName+".")}}function OL(t,e){return t===e}function LL(t){var e=t===void 0?{}:t,r=e.connectHOC,n=r===void 0?gL:r,s=e.mapStateToPropsFactories,a=s===void 0?TL:s,u=e.mapDispatchToPropsFactories,d=u===void 0?wL:u,f=e.mergePropsFactories,g=f===void 0?PL:f,y=e.selectorFactory,_=y===void 0?DL:y;return function(I,C,D,x){x===void 0&&(x={});var O=x,V=O.pure,j=V===void 0?!0:V,$=O.areStatesEqual,W=$===void 0?OL:$,Q=O.areOwnPropsEqual,P=Q===void 0?Rp:Q,A=O.areStatePropsEqual,R=A===void 0?Rp:A,N=O.areMergedPropsEqual,L=N===void 0?Rp:N,U=Md(O,NL),b=xp(I,a,"mapStateToProps"),be=xp(C,d,"mapDispatchToProps"),Qe=xp(D,g,"mergeProps");return n(_,Ie({methodName:"connect",getDisplayName:function(Me){return"Connect("+Me+")"},shouldHandleStateChanges:!!I,initMapStateToProps:b,initMapDispatchToProps:be,initMergeProps:Qe,pure:j,areStatesEqual:W,areOwnPropsEqual:P,areStatePropsEqual:R,areMergedPropsEqual:L},U))}}const tS=LL();var rS=eE();const ML=Gd(rS);YO(rS.unstable_batchedUpdates);function VL(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function nS(t,e){var r=oe.useState(function(){return{inputs:e,result:t()}})[0],n=oe.useRef(!0),s=oe.useRef(r),a=n.current||!!(e&&s.current.inputs&&VL(e,s.current.inputs)),u=a?s.current:{inputs:e,result:t()};return oe.useEffect(function(){n.current=!1,s.current=u},[u]),u.result}function FL(t,e){return nS(function(){return t},e)}var qe=nS,ye=FL,BL="Invariant failed";function UL(t,e){throw new Error(BL)}var mn=function(e){var r=e.top,n=e.right,s=e.bottom,a=e.left,u=n-a,d=s-r,f={top:r,right:n,bottom:s,left:a,width:u,height:d,x:a,y:r,center:{x:(n+a)/2,y:(s+r)/2}};return f},Pm=function(e,r){return{top:e.top-r.top,left:e.left-r.left,bottom:e.bottom+r.bottom,right:e.right+r.right}},E0=function(e,r){return{top:e.top+r.top,left:e.left+r.left,bottom:e.bottom-r.bottom,right:e.right-r.right}},jL=function(e,r){return{top:e.top+r.y,left:e.left+r.x,bottom:e.bottom+r.y,right:e.right+r.x}},kp={top:0,right:0,bottom:0,left:0},Rm=function(e){var r=e.borderBox,n=e.margin,s=n===void 0?kp:n,a=e.border,u=a===void 0?kp:a,d=e.padding,f=d===void 0?kp:d,g=mn(Pm(r,s)),y=mn(E0(r,u)),_=mn(E0(y,f));return{marginBox:g,borderBox:mn(r),paddingBox:y,contentBox:_,margin:s,border:u,padding:f}},Hr=function(e){var r=e.slice(0,-2),n=e.slice(-2);if(n!=="px")return 0;var s=Number(r);return isNaN(s)&&UL(),s},$L=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Vd=function(e,r){var n=e.borderBox,s=e.border,a=e.margin,u=e.padding,d=jL(n,r);return Rm({borderBox:d,border:s,margin:a,padding:u})},Fd=function(e,r){return r===void 0&&(r=$L()),Vd(e,r)},iS=function(e,r){var n={top:Hr(r.marginTop),right:Hr(r.marginRight),bottom:Hr(r.marginBottom),left:Hr(r.marginLeft)},s={top:Hr(r.paddingTop),right:Hr(r.paddingRight),bottom:Hr(r.paddingBottom),left:Hr(r.paddingLeft)},a={top:Hr(r.borderTopWidth),right:Hr(r.borderRightWidth),bottom:Hr(r.borderBottomWidth),left:Hr(r.borderLeftWidth)};return Rm({borderBox:e,margin:n,padding:s,border:a})},oS=function(e){var r=e.getBoundingClientRect(),n=window.getComputedStyle(e);return iS(r,n)},I0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function zL(t,e){return!!(t===e||I0(t)&&I0(e))}function WL(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!zL(t[r],e[r]))return!1;return!0}function Ut(t,e){e===void 0&&(e=WL);var r,n=[],s,a=!1;function u(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];return a&&r===this&&e(d,n)||(s=t.apply(this,d),a=!0,r=this,n=d),s}return u}var su=function(e){var r=[],n=null,s=function(){for(var u=arguments.length,d=new Array(u),f=0;f<u;f++)d[f]=arguments[f];r=d,!n&&(n=requestAnimationFrame(function(){n=null,e.apply(void 0,r)}))};return s.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},s};function sS(t,e){}sS.bind(null,"warn");sS.bind(null,"error");function Xi(){}function GL(t,e){return Ie({},t,{},e)}function Kr(t,e,r){var n=e.map(function(s){var a=GL(r,s.options);return t.addEventListener(s.eventName,s.fn,a),function(){t.removeEventListener(s.eventName,s.fn,a)}});return function(){n.forEach(function(a){a()})}}var HL="Invariant failed";function Bd(t){this.message=t}Bd.prototype.toString=function(){return this.message};function le(t,e){throw new Bd(HL)}var qL=function(t){qT(e,t);function e(){for(var n,s=arguments.length,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u];return n=t.call.apply(t,[this].concat(a))||this,n.callbacks=null,n.unbind=Xi,n.onWindowError=function(d){var f=n.getCallbacks();f.isDragging()&&f.tryAbort();var g=d.error;g instanceof Bd&&d.preventDefault()},n.getCallbacks=function(){if(!n.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return n.callbacks},n.setCallbacks=function(d){n.callbacks=d},n}var r=e.prototype;return r.componentDidMount=function(){this.unbind=Kr(window,[{eventName:"error",fn:this.onWindowError}])},r.componentDidCatch=function(s){if(s instanceof Bd){this.setState({});return}throw s},r.componentWillUnmount=function(){this.unbind()},r.render=function(){return this.props.children(this.setCallbacks)},e}(je.Component),KL=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Ud=function(e){return e+1},QL=function(e){return`
  You have lifted an item in position `+Ud(e.source.index)+`
`},aS=function(e,r){var n=e.droppableId===r.droppableId,s=Ud(e.index),a=Ud(r.index);return n?`
      You have moved the item from position `+s+`
      to position `+a+`
    `:`
    You have moved the item from position `+s+`
    in list `+e.droppableId+`
    to list `+r.droppableId+`
    in position `+a+`
  `},lS=function(e,r,n){var s=r.droppableId===n.droppableId;return s?`
      The item `+e+`
      has been combined with `+n.draggableId:`
      The item `+e+`
      in list `+r.droppableId+`
      has been combined with `+n.draggableId+`
      in list `+n.droppableId+`
    `},YL=function(e){var r=e.destination;if(r)return aS(e.source,r);var n=e.combine;return n?lS(e.draggableId,e.source,n):"You are over an area that cannot be dropped on"},T0=function(e){return`
  The item has returned to its starting position
  of `+Ud(e.index)+`
`},XL=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+T0(e.source)+`
    `;var r=e.destination,n=e.combine;return r?`
      You have dropped the item.
      `+aS(e.source,r)+`
    `:n?`
      You have dropped the item.
      `+lS(e.draggableId,e.source,n)+`
    `:`
    The item has been dropped while not over a drop area.
    `+T0(e.source)+`
  `},dd={dragHandleUsageInstructions:KL,onDragStart:QL,onDragUpdate:YL,onDragEnd:XL},jt={x:0,y:0},Kt=function(e,r){return{x:e.x+r.x,y:e.y+r.y}},xr=function(e,r){return{x:e.x-r.x,y:e.y-r.y}},Ji=function(e,r){return e.x===r.x&&e.y===r.y},ka=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},Zo=function(e,r,n){var s;return n===void 0&&(n=0),s={},s[e]=r,s[e==="x"?"y":"x"]=n,s},au=function(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))},S0=function(e,r){return Math.min.apply(Math,r.map(function(n){return au(e,n)}))},uS=function(e){return function(r){return{x:e(r.x),y:e(r.y)}}},JL=function(t,e){var r=mn({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return r.width<=0||r.height<=0?null:r},Eu=function(e,r){return{top:e.top+r.y,left:e.left+r.x,bottom:e.bottom+r.y,right:e.right+r.x}},b0=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},ZL={top:0,right:0,bottom:0,left:0},e2=function(e,r){return r?Eu(e,r.scroll.diff.displacement):e},t2=function(e,r,n){if(n&&n.increasedBy){var s;return Ie({},e,(s={},s[r.end]=e[r.end]+n.increasedBy[r.line],s))}return e},r2=function(e,r){return r&&r.shouldClipSubject?JL(r.pageMarginBox,e):mn(e)},wa=function(t){var e=t.page,r=t.withPlaceholder,n=t.axis,s=t.frame,a=e2(e.marginBox,s),u=t2(a,n,r),d=r2(u,s);return{page:e,withPlaceholder:r,active:d}},xm=function(t,e){t.frame||le();var r=t.frame,n=xr(e,r.scroll.initial),s=ka(n),a=Ie({},r,{scroll:{initial:r.scroll.initial,current:e,diff:{value:n,displacement:s},max:r.scroll.max}}),u=wa({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:a}),d=Ie({},t,{frame:a,subject:u});return d};function jd(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function km(t,e){if(t.findIndex)return t.findIndex(e);for(var r=0;r<t.length;r++)if(e(t[r]))return r;return-1}function co(t,e){if(t.find)return t.find(e);var r=km(t,e);if(r!==-1)return t[r]}function cS(t){return Array.prototype.slice.call(t)}var dS=Ut(function(t){return t.reduce(function(e,r){return e[r.descriptor.id]=r,e},{})}),hS=Ut(function(t){return t.reduce(function(e,r){return e[r.descriptor.id]=r,e},{})}),_h=Ut(function(t){return jd(t)}),n2=Ut(function(t){return jd(t)}),Da=Ut(function(t,e){var r=n2(e).filter(function(n){return t===n.descriptor.droppableId}).sort(function(n,s){return n.descriptor.index-s.descriptor.index});return r});function Dm(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function wh(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var Eh=Ut(function(t,e){return e.filter(function(r){return r.descriptor.id!==t.descriptor.id})}),i2=function(t){var e=t.isMovingForward,r=t.draggable,n=t.destination,s=t.insideDestination,a=t.previousImpact;if(!n.isCombineEnabled)return null;var u=Dm(a);if(!u)return null;function d(D){var x={type:"COMBINE",combine:{draggableId:D,droppableId:n.descriptor.id}};return Ie({},a,{at:x})}var f=a.displaced.all,g=f.length?f[0]:null;if(e)return g?d(g):null;var y=Eh(r,s);if(!g){if(!y.length)return null;var _=y[y.length-1];return d(_.descriptor.id)}var w=km(y,function(D){return D.descriptor.id===g});w===-1&&le();var I=w-1;if(I<0)return null;var C=y[I];return d(C.descriptor.id)},Na=function(t,e){return t.descriptor.droppableId===e.descriptor.id},fS={point:jt,value:0},lu={invisible:{},visible:{},all:[]},o2={displaced:lu,displacedBy:fS,at:null},Yr=function(t,e){return function(r){return t<=r&&r<=e}},pS=function(t){var e=Yr(t.top,t.bottom),r=Yr(t.left,t.right);return function(n){var s=e(n.top)&&e(n.bottom)&&r(n.left)&&r(n.right);if(s)return!0;var a=e(n.top)||e(n.bottom),u=r(n.left)||r(n.right),d=a&&u;if(d)return!0;var f=n.top<t.top&&n.bottom>t.bottom,g=n.left<t.left&&n.right>t.right,y=f&&g;if(y)return!0;var _=f&&u||g&&a;return _}},s2=function(t){var e=Yr(t.top,t.bottom),r=Yr(t.left,t.right);return function(n){var s=e(n.top)&&e(n.bottom)&&r(n.left)&&r(n.right);return s}},Nm={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},gS={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},a2=function(t){return function(e){var r=Yr(e.top,e.bottom),n=Yr(e.left,e.right);return function(s){return t===Nm?r(s.top)&&r(s.bottom):n(s.left)&&n(s.right)}}},l2=function(e,r){var n=r.frame?r.frame.scroll.diff.displacement:jt;return Eu(e,n)},u2=function(e,r,n){return r.subject.active?n(r.subject.active)(e):!1},c2=function(e,r,n){return n(r)(e)},Om=function(e){var r=e.target,n=e.destination,s=e.viewport,a=e.withDroppableDisplacement,u=e.isVisibleThroughFrameFn,d=a?l2(r,n):r;return u2(d,n,u)&&c2(d,s,u)},d2=function(e){return Om(Ie({},e,{isVisibleThroughFrameFn:pS}))},mS=function(e){return Om(Ie({},e,{isVisibleThroughFrameFn:s2}))},h2=function(e){return Om(Ie({},e,{isVisibleThroughFrameFn:a2(e.destination.axis)}))},f2=function(e,r,n){if(typeof n=="boolean")return n;if(!r)return!0;var s=r.invisible,a=r.visible;if(s[e])return!1;var u=a[e];return u?u.shouldAnimate:!0};function p2(t,e){var r=t.page.marginBox,n={top:e.point.y,right:0,bottom:0,left:e.point.x};return mn(Pm(r,n))}function uu(t){var e=t.afterDragging,r=t.destination,n=t.displacedBy,s=t.viewport,a=t.forceShouldAnimate,u=t.last;return e.reduce(function(f,g){var y=p2(g,n),_=g.descriptor.id;f.all.push(_);var w=d2({target:y,destination:r,viewport:s,withDroppableDisplacement:!0});if(!w)return f.invisible[g.descriptor.id]=!0,f;var I=f2(_,u,a),C={draggableId:_,shouldAnimate:I};return f.visible[_]=C,f},{all:[],visible:{},invisible:{}})}function g2(t,e){if(!t.length)return 0;var r=t[t.length-1].descriptor.index;return e.inHomeList?r:r+1}function C0(t){var e=t.insideDestination,r=t.inHomeList,n=t.displacedBy,s=t.destination,a=g2(e,{inHomeList:r});return{displaced:lu,displacedBy:n,at:{type:"REORDER",destination:{droppableId:s.descriptor.id,index:a}}}}function $d(t){var e=t.draggable,r=t.insideDestination,n=t.destination,s=t.viewport,a=t.displacedBy,u=t.last,d=t.index,f=t.forceShouldAnimate,g=Na(e,n);if(d==null)return C0({insideDestination:r,inHomeList:g,displacedBy:a,destination:n});var y=co(r,function(D){return D.descriptor.index===d});if(!y)return C0({insideDestination:r,inHomeList:g,displacedBy:a,destination:n});var _=Eh(e,r),w=r.indexOf(y),I=_.slice(w),C=uu({afterDragging:I,destination:n,displacedBy:a,last:u,viewport:s.frame,forceShouldAnimate:f});return{displaced:C,displacedBy:a,at:{type:"REORDER",destination:{droppableId:n.descriptor.id,index:d}}}}function so(t,e){return!!e.effected[t]}var m2=function(t){var e=t.isMovingForward,r=t.destination,n=t.draggables,s=t.combine,a=t.afterCritical;if(!r.isCombineEnabled)return null;var u=s.draggableId,d=n[u],f=d.descriptor.index,g=so(u,a);return g?e?f:f-1:e?f+1:f},v2=function(t){var e=t.isMovingForward,r=t.isInHomeList,n=t.insideDestination,s=t.location;if(!n.length)return null;var a=s.index,u=e?a+1:a-1,d=n[0].descriptor.index,f=n[n.length-1].descriptor.index,g=r?f:f+1;return u<d||u>g?null:u},y2=function(t){var e=t.isMovingForward,r=t.isInHomeList,n=t.draggable,s=t.draggables,a=t.destination,u=t.insideDestination,d=t.previousImpact,f=t.viewport,g=t.afterCritical,y=d.at;if(y||le(),y.type==="REORDER"){var _=v2({isMovingForward:e,isInHomeList:r,location:y.destination,insideDestination:u});return _==null?null:$d({draggable:n,insideDestination:u,destination:a,viewport:f,last:d.displaced,displacedBy:d.displacedBy,index:_})}var w=m2({isMovingForward:e,destination:a,displaced:d.displaced,draggables:s,combine:y.combine,afterCritical:g});return w==null?null:$d({draggable:n,insideDestination:u,destination:a,viewport:f,last:d.displaced,displacedBy:d.displacedBy,index:w})},_2=function(t){var e=t.displaced,r=t.afterCritical,n=t.combineWith,s=t.displacedBy,a=!!(e.visible[n]||e.invisible[n]);return so(n,r)?a?jt:ka(s.point):a?s.point:jt},w2=function(t){var e=t.afterCritical,r=t.impact,n=t.draggables,s=wh(r);s||le();var a=s.draggableId,u=n[a].page.borderBox.center,d=_2({displaced:r.displaced,afterCritical:e,combineWith:a,displacedBy:r.displacedBy});return Kt(u,d)},vS=function(e,r){return r.margin[e.start]+r.borderBox[e.size]/2},E2=function(e,r){return r.margin[e.end]+r.borderBox[e.size]/2},Lm=function(e,r,n){return r[e.crossAxisStart]+n.margin[e.crossAxisStart]+n.borderBox[e.crossAxisSize]/2},A0=function(e){var r=e.axis,n=e.moveRelativeTo,s=e.isMoving;return Zo(r.line,n.marginBox[r.end]+vS(r,s),Lm(r,n.marginBox,s))},P0=function(e){var r=e.axis,n=e.moveRelativeTo,s=e.isMoving;return Zo(r.line,n.marginBox[r.start]-E2(r,s),Lm(r,n.marginBox,s))},I2=function(e){var r=e.axis,n=e.moveInto,s=e.isMoving;return Zo(r.line,n.contentBox[r.start]+vS(r,s),Lm(r,n.contentBox,s))},T2=function(t){var e=t.impact,r=t.draggable,n=t.draggables,s=t.droppable,a=t.afterCritical,u=Da(s.descriptor.id,n),d=r.page,f=s.axis;if(!u.length)return I2({axis:f,moveInto:s.page,isMoving:d});var g=e.displaced,y=e.displacedBy,_=g.all[0];if(_){var w=n[_];if(so(_,a))return P0({axis:f,moveRelativeTo:w.page,isMoving:d});var I=Vd(w.page,y.point);return P0({axis:f,moveRelativeTo:I,isMoving:d})}var C=u[u.length-1];if(C.descriptor.id===r.descriptor.id)return d.borderBox.center;if(so(C.descriptor.id,a)){var D=Vd(C.page,ka(a.displacedBy.point));return A0({axis:f,moveRelativeTo:D,isMoving:d})}return A0({axis:f,moveRelativeTo:C.page,isMoving:d})},Eg=function(t,e){var r=t.frame;return r?Kt(e,r.scroll.diff.displacement):e},S2=function(e){var r=e.impact,n=e.draggable,s=e.droppable,a=e.draggables,u=e.afterCritical,d=n.page.borderBox.center,f=r.at;return!s||!f?d:f.type==="REORDER"?T2({impact:r,draggable:n,draggables:a,droppable:s,afterCritical:u}):w2({impact:r,draggables:a,afterCritical:u})},Ih=function(t){var e=S2(t),r=t.droppable,n=r?Eg(r,e):e;return n},yS=function(t,e){var r=xr(e,t.scroll.initial),n=ka(r),s=mn({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),a={frame:s,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:r,displacement:n}}};return a};function R0(t,e){return t.map(function(r){return e[r]})}function b2(t,e){for(var r=0;r<e.length;r++){var n=e[r].visible[t];if(n)return n}return null}var C2=function(t){var e=t.impact,r=t.viewport,n=t.destination,s=t.draggables,a=t.maxScrollChange,u=yS(r,Kt(r.scroll.current,a)),d=n.frame?xm(n,Kt(n.frame.scroll.current,a)):n,f=e.displaced,g=uu({afterDragging:R0(f.all,s),destination:n,displacedBy:e.displacedBy,viewport:u.frame,last:f,forceShouldAnimate:!1}),y=uu({afterDragging:R0(f.all,s),destination:d,displacedBy:e.displacedBy,viewport:r.frame,last:f,forceShouldAnimate:!1}),_={},w={},I=[f,g,y];f.all.forEach(function(D){var x=b2(D,I);if(x){w[D]=x;return}_[D]=!0});var C=Ie({},e,{displaced:{all:f.all,invisible:_,visible:w}});return C},A2=function(t,e){return Kt(t.scroll.diff.displacement,e)},Mm=function(t){var e=t.pageBorderBoxCenter,r=t.draggable,n=t.viewport,s=A2(n,e),a=xr(s,r.page.borderBox.center);return Kt(r.client.borderBox.center,a)},_S=function(t){var e=t.draggable,r=t.destination,n=t.newPageBorderBoxCenter,s=t.viewport,a=t.withDroppableDisplacement,u=t.onlyOnMainAxis,d=u===void 0?!1:u,f=xr(n,e.page.borderBox.center),g=Eu(e.page.borderBox,f),y={target:g,destination:r,withDroppableDisplacement:a,viewport:s};return d?h2(y):mS(y)},P2=function(t){var e=t.isMovingForward,r=t.draggable,n=t.destination,s=t.draggables,a=t.previousImpact,u=t.viewport,d=t.previousPageBorderBoxCenter,f=t.previousClientSelection,g=t.afterCritical;if(!n.isEnabled)return null;var y=Da(n.descriptor.id,s),_=Na(r,n),w=i2({isMovingForward:e,draggable:r,destination:n,insideDestination:y,previousImpact:a})||y2({isMovingForward:e,isInHomeList:_,draggable:r,draggables:s,destination:n,insideDestination:y,previousImpact:a,viewport:u,afterCritical:g});if(!w)return null;var I=Ih({impact:w,draggable:r,droppable:n,draggables:s,afterCritical:g}),C=_S({draggable:r,destination:n,newPageBorderBoxCenter:I,viewport:u.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(C){var D=Mm({pageBorderBoxCenter:I,draggable:r,viewport:u});return{clientSelection:D,impact:w,scrollJumpRequest:null}}var x=xr(I,d),O=C2({impact:w,viewport:u,destination:n,draggables:s,maxScrollChange:x});return{clientSelection:f,impact:O,scrollJumpRequest:x}},ur=function(e){var r=e.subject.active;return r||le(),r},R2=function(t){var e=t.isMovingForward,r=t.pageBorderBoxCenter,n=t.source,s=t.droppables,a=t.viewport,u=n.subject.active;if(!u)return null;var d=n.axis,f=Yr(u[d.start],u[d.end]),g=_h(s).filter(function(_){return _!==n}).filter(function(_){return _.isEnabled}).filter(function(_){return!!_.subject.active}).filter(function(_){return pS(a.frame)(ur(_))}).filter(function(_){var w=ur(_);return e?u[d.crossAxisEnd]<w[d.crossAxisEnd]:w[d.crossAxisStart]<u[d.crossAxisStart]}).filter(function(_){var w=ur(_),I=Yr(w[d.start],w[d.end]);return f(w[d.start])||f(w[d.end])||I(u[d.start])||I(u[d.end])}).sort(function(_,w){var I=ur(_)[d.crossAxisStart],C=ur(w)[d.crossAxisStart];return e?I-C:C-I}).filter(function(_,w,I){return ur(_)[d.crossAxisStart]===ur(I[0])[d.crossAxisStart]});if(!g.length)return null;if(g.length===1)return g[0];var y=g.filter(function(_){var w=Yr(ur(_)[d.start],ur(_)[d.end]);return w(r[d.line])});return y.length===1?y[0]:y.length>1?y.sort(function(_,w){return ur(_)[d.start]-ur(w)[d.start]})[0]:g.sort(function(_,w){var I=S0(r,b0(ur(_))),C=S0(r,b0(ur(w)));return I!==C?I-C:ur(_)[d.start]-ur(w)[d.start]})[0]},x0=function(e,r){var n=e.page.borderBox.center;return so(e.descriptor.id,r)?xr(n,r.displacedBy.point):n},x2=function(e,r){var n=e.page.borderBox;return so(e.descriptor.id,r)?Eu(n,ka(r.displacedBy.point)):n},k2=function(t){var e=t.pageBorderBoxCenter,r=t.viewport,n=t.destination,s=t.insideDestination,a=t.afterCritical,u=s.filter(function(d){return mS({target:x2(d,a),destination:n,viewport:r.frame,withDroppableDisplacement:!0})}).sort(function(d,f){var g=au(e,Eg(n,x0(d,a))),y=au(e,Eg(n,x0(f,a)));return g<y?-1:y<g?1:d.descriptor.index-f.descriptor.index});return u[0]||null},Iu=Ut(function(e,r){var n=r[e.line];return{value:n,point:Zo(e.line,n)}}),D2=function(e,r,n){var s=e.axis;if(e.descriptor.mode==="virtual")return Zo(s.line,r[s.line]);var a=e.subject.page.contentBox[s.size],u=Da(e.descriptor.id,n),d=u.reduce(function(y,_){return y+_.client.marginBox[s.size]},0),f=d+r[s.line],g=f-a;return g<=0?null:Zo(s.line,g)},wS=function(e,r){return Ie({},e,{scroll:Ie({},e.scroll,{max:r})})},ES=function(e,r,n){var s=e.frame;Na(r,e)&&le(),e.subject.withPlaceholder&&le();var a=Iu(e.axis,r.displaceBy).point,u=D2(e,a,n),d={placeholderSize:a,increasedBy:u,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!s){var f=wa({page:e.subject.page,withPlaceholder:d,axis:e.axis,frame:e.frame});return Ie({},e,{subject:f})}var g=u?Kt(s.scroll.max,u):s.scroll.max,y=wS(s,g),_=wa({page:e.subject.page,withPlaceholder:d,axis:e.axis,frame:y});return Ie({},e,{subject:_,frame:y})},N2=function(e){var r=e.subject.withPlaceholder;r||le();var n=e.frame;if(!n){var s=wa({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return Ie({},e,{subject:s})}var a=r.oldFrameMaxScroll;a||le();var u=wS(n,a),d=wa({page:e.subject.page,axis:e.axis,frame:u,withPlaceholder:null});return Ie({},e,{subject:d,frame:u})},O2=function(t){var e=t.previousPageBorderBoxCenter,r=t.moveRelativeTo,n=t.insideDestination,s=t.draggable,a=t.draggables,u=t.destination,d=t.viewport,f=t.afterCritical;if(!r){if(n.length)return null;var g={displaced:lu,displacedBy:fS,at:{type:"REORDER",destination:{droppableId:u.descriptor.id,index:0}}},y=Ih({impact:g,draggable:s,droppable:u,draggables:a,afterCritical:f}),_=Na(s,u)?u:ES(u,s,a),w=_S({draggable:s,destination:_,newPageBorderBoxCenter:y,viewport:d.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return w?g:null}var I=e[u.axis.line]<=r.page.borderBox.center[u.axis.line],C=function(){var x=r.descriptor.index;return r.descriptor.id===s.descriptor.id||I?x:x+1}(),D=Iu(u.axis,s.displaceBy);return $d({draggable:s,insideDestination:n,destination:u,viewport:d,displacedBy:D,last:lu,index:C})},L2=function(t){var e=t.isMovingForward,r=t.previousPageBorderBoxCenter,n=t.draggable,s=t.isOver,a=t.draggables,u=t.droppables,d=t.viewport,f=t.afterCritical,g=R2({isMovingForward:e,pageBorderBoxCenter:r,source:s,droppables:u,viewport:d});if(!g)return null;var y=Da(g.descriptor.id,a),_=k2({pageBorderBoxCenter:r,viewport:d,destination:g,insideDestination:y,afterCritical:f}),w=O2({previousPageBorderBoxCenter:r,destination:g,draggable:n,draggables:a,moveRelativeTo:_,insideDestination:y,viewport:d,afterCritical:f});if(!w)return null;var I=Ih({impact:w,draggable:n,droppable:g,draggables:a,afterCritical:f}),C=Mm({pageBorderBoxCenter:I,draggable:n,viewport:d});return{clientSelection:C,impact:w,scrollJumpRequest:null}},kr=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},M2=function(e,r){var n=kr(e);return n?r[n]:null},V2=function(t){var e=t.state,r=t.type,n=M2(e.impact,e.dimensions.droppables),s=!!n,a=e.dimensions.droppables[e.critical.droppable.id],u=n||a,d=u.axis.direction,f=d==="vertical"&&(r==="MOVE_UP"||r==="MOVE_DOWN")||d==="horizontal"&&(r==="MOVE_LEFT"||r==="MOVE_RIGHT");if(f&&!s)return null;var g=r==="MOVE_DOWN"||r==="MOVE_RIGHT",y=e.dimensions.draggables[e.critical.draggable.id],_=e.current.page.borderBoxCenter,w=e.dimensions,I=w.draggables,C=w.droppables;return f?P2({isMovingForward:g,previousPageBorderBoxCenter:_,draggable:y,destination:u,draggables:I,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):L2({isMovingForward:g,previousPageBorderBoxCenter:_,draggable:y,isOver:u,draggables:I,droppables:C,viewport:e.viewport,afterCritical:e.afterCritical})};function jo(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function IS(t){var e=Yr(t.top,t.bottom),r=Yr(t.left,t.right);return function(s){return e(s.y)&&r(s.x)}}function F2(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function B2(t){var e=t.pageBorderBox,r=t.draggable,n=t.candidates,s=r.page.borderBox.center,a=n.map(function(u){var d=u.axis,f=Zo(u.axis.line,e.center[d.line],u.page.borderBox.center[d.crossAxisLine]);return{id:u.descriptor.id,distance:au(s,f)}}).sort(function(u,d){return d.distance-u.distance});return a[0]?a[0].id:null}function U2(t){var e=t.pageBorderBox,r=t.draggable,n=t.droppables,s=_h(n).filter(function(a){if(!a.isEnabled)return!1;var u=a.subject.active;if(!u||!F2(e,u))return!1;if(IS(u)(e.center))return!0;var d=a.axis,f=u.center[d.crossAxisLine],g=e[d.crossAxisStart],y=e[d.crossAxisEnd],_=Yr(u[d.crossAxisStart],u[d.crossAxisEnd]),w=_(g),I=_(y);return!w&&!I?!0:w?g<f:y>f});return s.length?s.length===1?s[0].descriptor.id:B2({pageBorderBox:e,draggable:r,candidates:s}):null}var TS=function(e,r){return mn(Eu(e,r))},j2=function(t,e){var r=t.frame;return r?TS(e,r.scroll.diff.value):e};function SS(t){var e=t.displaced,r=t.id;return!!(e.visible[r]||e.invisible[r])}function $2(t){var e=t.draggable,r=t.closest,n=t.inHomeList;return r?n&&r.descriptor.index>e.descriptor.index?r.descriptor.index-1:r.descriptor.index:null}var z2=function(t){var e=t.pageBorderBoxWithDroppableScroll,r=t.draggable,n=t.destination,s=t.insideDestination,a=t.last,u=t.viewport,d=t.afterCritical,f=n.axis,g=Iu(n.axis,r.displaceBy),y=g.value,_=e[f.start],w=e[f.end],I=Eh(r,s),C=co(I,function(x){var O=x.descriptor.id,V=x.page.borderBox.center[f.line],j=so(O,d),$=SS({displaced:a,id:O});return j?$?w<=V:_<V-y:$?w<=V+y:_<V}),D=$2({draggable:r,closest:C,inHomeList:Na(r,n)});return $d({draggable:r,insideDestination:s,destination:n,viewport:u,last:a,displacedBy:g,index:D})},W2=4,G2=function(t){var e=t.draggable,r=t.pageBorderBoxWithDroppableScroll,n=t.previousImpact,s=t.destination,a=t.insideDestination,u=t.afterCritical;if(!s.isCombineEnabled)return null;var d=s.axis,f=Iu(s.axis,e.displaceBy),g=f.value,y=r[d.start],_=r[d.end],w=Eh(e,a),I=co(w,function(D){var x=D.descriptor.id,O=D.page.borderBox,V=O[d.size],j=V/W2,$=so(x,u),W=SS({displaced:n.displaced,id:x});return $?W?_>O[d.start]+j&&_<O[d.end]-j:y>O[d.start]-g+j&&y<O[d.end]-g-j:W?_>O[d.start]+g+j&&_<O[d.end]+g-j:y>O[d.start]+j&&y<O[d.end]-j});if(!I)return null;var C={displacedBy:f,displaced:n.displaced,at:{type:"COMBINE",combine:{draggableId:I.descriptor.id,droppableId:s.descriptor.id}}};return C},bS=function(t){var e=t.pageOffset,r=t.draggable,n=t.draggables,s=t.droppables,a=t.previousImpact,u=t.viewport,d=t.afterCritical,f=TS(r.page.borderBox,e),g=U2({pageBorderBox:f,draggable:r,droppables:s});if(!g)return o2;var y=s[g],_=Da(y.descriptor.id,n),w=j2(y,f);return G2({pageBorderBoxWithDroppableScroll:w,draggable:r,previousImpact:a,destination:y,insideDestination:_,afterCritical:d})||z2({pageBorderBoxWithDroppableScroll:w,draggable:r,destination:y,insideDestination:_,last:a.displaced,viewport:u,afterCritical:d})},Vm=function(t,e){var r;return Ie({},t,(r={},r[e.descriptor.id]=e,r))},H2=function(e){var r=e.previousImpact,n=e.impact,s=e.droppables,a=kr(r),u=kr(n);if(!a||a===u)return s;var d=s[a];if(!d.subject.withPlaceholder)return s;var f=N2(d);return Vm(s,f)},q2=function(t){var e=t.draggable,r=t.draggables,n=t.droppables,s=t.previousImpact,a=t.impact,u=H2({previousImpact:s,impact:a,droppables:n}),d=kr(a);if(!d)return u;var f=n[d];if(Na(e,f)||f.subject.withPlaceholder)return u;var g=ES(f,e,r);return Vm(u,g)},zl=function(t){var e=t.state,r=t.clientSelection,n=t.dimensions,s=t.viewport,a=t.impact,u=t.scrollJumpRequest,d=s||e.viewport,f=n||e.dimensions,g=r||e.current.client.selection,y=xr(g,e.initial.client.selection),_={offset:y,selection:g,borderBoxCenter:Kt(e.initial.client.borderBoxCenter,y)},w={selection:Kt(_.selection,d.scroll.current),borderBoxCenter:Kt(_.borderBoxCenter,d.scroll.current),offset:Kt(_.offset,d.scroll.diff.value)},I={client:_,page:w};if(e.phase==="COLLECTING")return Ie({phase:"COLLECTING"},e,{dimensions:f,viewport:d,current:I});var C=f.draggables[e.critical.draggable.id],D=a||bS({pageOffset:w.offset,draggable:C,draggables:f.draggables,droppables:f.droppables,previousImpact:e.impact,viewport:d,afterCritical:e.afterCritical}),x=q2({draggable:C,impact:D,previousImpact:e.impact,draggables:f.draggables,droppables:f.droppables}),O=Ie({},e,{current:I,dimensions:{draggables:f.draggables,droppables:x},impact:D,viewport:d,scrollJumpRequest:u||null,forceShouldAnimate:u?!1:null});return O};function K2(t,e){return t.map(function(r){return e[r]})}var CS=function(t){var e=t.impact,r=t.viewport,n=t.draggables,s=t.destination,a=t.forceShouldAnimate,u=e.displaced,d=K2(u.all,n),f=uu({afterDragging:d,destination:s,displacedBy:e.displacedBy,viewport:r.frame,forceShouldAnimate:a,last:u});return Ie({},e,{displaced:f})},AS=function(t){var e=t.impact,r=t.draggable,n=t.droppable,s=t.draggables,a=t.viewport,u=t.afterCritical,d=Ih({impact:e,draggable:r,draggables:s,droppable:n,afterCritical:u});return Mm({pageBorderBoxCenter:d,draggable:r,viewport:a})},PS=function(t){var e=t.state,r=t.dimensions,n=t.viewport;e.movementMode!=="SNAP"&&le();var s=e.impact,a=n||e.viewport,u=r||e.dimensions,d=u.draggables,f=u.droppables,g=d[e.critical.draggable.id],y=kr(s);y||le();var _=f[y],w=CS({impact:s,viewport:a,destination:_,draggables:d}),I=AS({impact:w,draggable:g,droppable:_,draggables:d,viewport:a,afterCritical:e.afterCritical});return zl({impact:w,clientSelection:I,state:e,dimensions:u,viewport:a})},Q2=function(t){return{index:t.index,droppableId:t.droppableId}},RS=function(t){var e=t.draggable,r=t.home,n=t.draggables,s=t.viewport,a=Iu(r.axis,e.displaceBy),u=Da(r.descriptor.id,n),d=u.indexOf(e);d===-1&&le();var f=u.slice(d+1),g=f.reduce(function(I,C){return I[C.descriptor.id]=!0,I},{}),y={inVirtualList:r.descriptor.mode==="virtual",displacedBy:a,effected:g},_=uu({afterDragging:f,destination:r,displacedBy:a,last:null,viewport:s.frame,forceShouldAnimate:!1}),w={displaced:_,displacedBy:a,at:{type:"REORDER",destination:Q2(e.descriptor)}};return{impact:w,afterCritical:y}},Y2=function(t,e){return{draggables:t.draggables,droppables:Vm(t.droppables,e)}},X2=function(t){var e=t.draggable,r=t.offset,n=t.initialWindowScroll,s=Vd(e.client,r),a=Fd(s,n),u=Ie({},e,{placeholder:Ie({},e.placeholder,{client:s}),client:s,page:a});return u},J2=function(t){var e=t.frame;return e||le(),e},Z2=function(t){var e=t.additions,r=t.updatedDroppables,n=t.viewport,s=n.scroll.diff.value;return e.map(function(a){var u=a.descriptor.droppableId,d=r[u],f=J2(d),g=f.scroll.diff.value,y=Kt(s,g),_=X2({draggable:a,offset:y,initialWindowScroll:n.scroll.initial});return _})},eM=function(t){var e=t.state,r=t.published,n=r.modified.map(function(j){var $=e.dimensions.droppables[j.droppableId],W=xm($,j.scroll);return W}),s=Ie({},e.dimensions.droppables,{},dS(n)),a=hS(Z2({additions:r.additions,updatedDroppables:s,viewport:e.viewport})),u=Ie({},e.dimensions.draggables,{},a);r.removals.forEach(function(j){delete u[j]});var d={droppables:s,draggables:u},f=kr(e.impact),g=f?d.droppables[f]:null,y=d.draggables[e.critical.draggable.id],_=d.droppables[e.critical.droppable.id],w=RS({draggable:y,home:_,draggables:u,viewport:e.viewport}),I=w.impact,C=w.afterCritical,D=g&&g.isCombineEnabled?e.impact:I,x=bS({pageOffset:e.current.page.offset,draggable:d.draggables[e.critical.draggable.id],draggables:d.draggables,droppables:d.droppables,previousImpact:D,viewport:e.viewport,afterCritical:C}),O=Ie({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:x,onLiftImpact:I,dimensions:d,afterCritical:C,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return O;var V=Ie({phase:"DROP_PENDING"},O,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return V},Ig=function(e){return e.movementMode==="SNAP"},Dp=function(e,r,n){var s=Y2(e.dimensions,r);return!Ig(e)||n?zl({state:e,dimensions:s}):PS({state:e,dimensions:s})};function Np(t){return t.isDragging&&t.movementMode==="SNAP"?Ie({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var k0={phase:"IDLE",completed:null,shouldFlush:!1},tM=function(t,e){if(t===void 0&&(t=k0),e.type==="FLUSH")return Ie({},k0,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&le();var r=e.payload,n=r.critical,s=r.clientSelection,a=r.viewport,u=r.dimensions,d=r.movementMode,f=u.draggables[n.draggable.id],g=u.droppables[n.droppable.id],y={selection:s,borderBoxCenter:f.client.borderBox.center,offset:jt},_={client:y,page:{selection:Kt(y.selection,a.scroll.initial),borderBoxCenter:Kt(y.selection,a.scroll.initial),offset:Kt(y.selection,a.scroll.diff.value)}},w=_h(u.droppables).every(function(kt){return!kt.isFixedOnPage}),I=RS({draggable:f,home:g,draggables:u.draggables,viewport:a}),C=I.impact,D=I.afterCritical,x={phase:"DRAGGING",isDragging:!0,critical:n,movementMode:d,dimensions:u,initial:_,current:_,isWindowScrollAllowed:w,impact:C,afterCritical:D,onLiftImpact:C,viewport:a,scrollJumpRequest:null,forceShouldAnimate:null};return x}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&le();var O=Ie({phase:"COLLECTING"},t,{phase:"COLLECTING"});return O}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||le(),eM({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;jo(t)||le();var V=e.payload.client;return Ji(V,t.current.client.selection)?t:zl({state:t,clientSelection:V,impact:Ig(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return Np(t);jo(t)||le();var j=e.payload,$=j.id,W=j.newScroll,Q=t.dimensions.droppables[$];if(!Q)return t;var P=xm(Q,W);return Dp(t,P,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;jo(t)||le();var A=e.payload,R=A.id,N=A.isEnabled,L=t.dimensions.droppables[R];L||le(),L.isEnabled===N&&le();var U=Ie({},L,{isEnabled:N});return Dp(t,U,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;jo(t)||le();var b=e.payload,be=b.id,Qe=b.isCombineEnabled,Ye=t.dimensions.droppables[be];Ye||le(),Ye.isCombineEnabled===Qe&&le();var Me=Ie({},Ye,{isCombineEnabled:Qe});return Dp(t,Me,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;jo(t)||le(),t.isWindowScrollAllowed||le();var ie=e.payload.newScroll;if(Ji(t.viewport.scroll.current,ie))return Np(t);var ce=yS(t.viewport,ie);return Ig(t)?PS({state:t,viewport:ce}):zl({state:t,viewport:ce})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!jo(t))return t;var ae=e.payload.maxScroll;if(Ji(ae,t.viewport.scroll.max))return t;var B=Ie({},t.viewport,{scroll:Ie({},t.viewport.scroll,{max:ae})});return Ie({phase:"DRAGGING"},t,{viewport:B})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&le();var X=V2({state:t,type:e.type});return X?zl({state:t,impact:X.impact,clientSelection:X.clientSelection,scrollJumpRequest:X.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var pe=e.payload.reason;t.phase!=="COLLECTING"&&le();var Ae=Ie({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:pe});return Ae}if(e.type==="DROP_ANIMATE"){var _e=e.payload,xe=_e.completed,Oe=_e.dropDuration,Ne=_e.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||le();var Fe={phase:"DROP_ANIMATING",completed:xe,dropDuration:Oe,newHomeClientOffset:Ne,dimensions:t.dimensions};return Fe}if(e.type==="DROP_COMPLETE"){var et=e.payload.completed;return{phase:"IDLE",completed:et,shouldFlush:!1}}return t},rM=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},nM=function(e){return{type:"LIFT",payload:e}},iM=function(e){return{type:"INITIAL_PUBLISH",payload:e}},oM=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},sM=function(){return{type:"COLLECTION_STARTING",payload:null}},aM=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},lM=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},uM=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},xS=function(e){return{type:"MOVE",payload:e}},cM=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},dM=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},hM=function(){return{type:"MOVE_UP",payload:null}},fM=function(){return{type:"MOVE_DOWN",payload:null}},pM=function(){return{type:"MOVE_RIGHT",payload:null}},gM=function(){return{type:"MOVE_LEFT",payload:null}},Fm=function(){return{type:"FLUSH",payload:null}},mM=function(e){return{type:"DROP_ANIMATE",payload:e}},Bm=function(e){return{type:"DROP_COMPLETE",payload:e}},kS=function(e){return{type:"DROP",payload:e}},vM=function(e){return{type:"DROP_PENDING",payload:e}},DS=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},yM=function(t){return function(e){var r=e.getState,n=e.dispatch;return function(s){return function(a){if(a.type!=="LIFT"){s(a);return}var u=a.payload,d=u.id,f=u.clientSelection,g=u.movementMode,y=r();y.phase==="DROP_ANIMATING"&&n(Bm({completed:y.completed})),r().phase!=="IDLE"&&le(),n(Fm()),n(rM({draggableId:d,movementMode:g}));var _={shouldPublishImmediately:g==="SNAP"},w={draggableId:d,scrollOptions:_},I=t.startPublishing(w),C=I.critical,D=I.dimensions,x=I.viewport;n(iM({critical:C,dimensions:D,clientSelection:f,movementMode:g,viewport:x}))}}}},_M=function(t){return function(){return function(e){return function(r){r.type==="INITIAL_PUBLISH"&&t.dragging(),r.type==="DROP_ANIMATE"&&t.dropping(r.payload.completed.result.reason),(r.type==="FLUSH"||r.type==="DROP_COMPLETE")&&t.resting(),e(r)}}}},Um={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},cu={opacity:{drop:0,combining:.7},scale:{drop:.75}},jm={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Bo=jm.outOfTheWay+"s "+Um.outOfTheWay,Wl={fluid:"opacity "+Bo,snap:"transform "+Bo+", opacity "+Bo,drop:function(e){var r=e+"s "+Um.drop;return"transform "+r+", opacity "+r},outOfTheWay:"transform "+Bo,placeholder:"height "+Bo+", width "+Bo+", margin "+Bo},D0=function(e){return Ji(e,jt)?null:"translate("+e.x+"px, "+e.y+"px)"},Tg={moveTo:D0,drop:function(e,r){var n=D0(e);return n?r?n+" scale("+cu.scale.drop+")":n:null}},Sg=jm.minDropTime,NS=jm.maxDropTime,wM=NS-Sg,N0=1500,EM=.6,IM=function(t){var e=t.current,r=t.destination,n=t.reason,s=au(e,r);if(s<=0)return Sg;if(s>=N0)return NS;var a=s/N0,u=Sg+wM*a,d=n==="CANCEL"?u*EM:u;return Number(d.toFixed(2))},TM=function(t){var e=t.impact,r=t.draggable,n=t.dimensions,s=t.viewport,a=t.afterCritical,u=n.draggables,d=n.droppables,f=kr(e),g=f?d[f]:null,y=d[r.descriptor.droppableId],_=AS({impact:e,draggable:r,draggables:u,afterCritical:a,droppable:g||y,viewport:s}),w=xr(_,r.client.borderBox.center);return w},SM=function(t){var e=t.draggables,r=t.reason,n=t.lastImpact,s=t.home,a=t.viewport,u=t.onLiftImpact;if(!n.at||r!=="DROP"){var d=CS({draggables:e,impact:u,destination:s,viewport:a,forceShouldAnimate:!0});return{impact:d,didDropInsideDroppable:!1}}if(n.at.type==="REORDER")return{impact:n,didDropInsideDroppable:!0};var f=Ie({},n,{displaced:lu});return{impact:f,didDropInsideDroppable:!0}},bM=function(t){var e=t.getState,r=t.dispatch;return function(n){return function(s){if(s.type!=="DROP"){n(s);return}var a=e(),u=s.payload.reason;if(a.phase==="COLLECTING"){r(vM({reason:u}));return}if(a.phase!=="IDLE"){var d=a.phase==="DROP_PENDING"&&a.isWaiting;d&&le(),a.phase==="DRAGGING"||a.phase==="DROP_PENDING"||le();var f=a.critical,g=a.dimensions,y=g.draggables[a.critical.draggable.id],_=SM({reason:u,lastImpact:a.impact,afterCritical:a.afterCritical,onLiftImpact:a.onLiftImpact,home:a.dimensions.droppables[a.critical.droppable.id],viewport:a.viewport,draggables:a.dimensions.draggables}),w=_.impact,I=_.didDropInsideDroppable,C=I?Dm(w):null,D=I?wh(w):null,x={index:f.draggable.index,droppableId:f.droppable.id},O={draggableId:y.descriptor.id,type:y.descriptor.type,source:x,reason:u,mode:a.movementMode,destination:C,combine:D},V=TM({impact:w,draggable:y,dimensions:g,viewport:a.viewport,afterCritical:a.afterCritical}),j={critical:a.critical,afterCritical:a.afterCritical,result:O,impact:w},$=!Ji(a.current.client.offset,V)||!!O.combine;if(!$){r(Bm({completed:j}));return}var W=IM({current:a.current.client.offset,destination:V,reason:u}),Q={newHomeClientOffset:V,dropDuration:W,completed:j};r(mM(Q))}}}},OS=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function CM(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(r){r.target!==window&&r.target!==window.document||t()}}}function AM(t){var e=t.onWindowScroll;function r(){e(OS())}var n=su(r),s=CM(n),a=Xi;function u(){return a!==Xi}function d(){u()&&le(),a=Kr(window,[s])}function f(){u()||le(),n.cancel(),a(),a=Xi}return{start:d,stop:f,isActive:u}}var PM=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},RM=function(t){var e=AM({onWindowScroll:function(n){t.dispatch(cM({newScroll:n}))}});return function(r){return function(n){!e.isActive()&&n.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&PM(n)&&e.stop(),r(n)}}},xM=function(t){var e=!1,r=!1,n=setTimeout(function(){r=!0}),s=function(u){e||r||(e=!0,t(u),clearTimeout(n))};return s.wasCalled=function(){return e},s},kM=function(){var t=[],e=function(a){var u=km(t,function(g){return g.timerId===a});u===-1&&le();var d=t.splice(u,1),f=d[0];f.callback()},r=function(a){var u=setTimeout(function(){return e(u)}),d={timerId:u,callback:a};t.push(d)},n=function(){if(t.length){var a=[].concat(t);t.length=0,a.forEach(function(u){clearTimeout(u.timerId),u.callback()})}};return{add:r,flush:n}},DM=function(e,r){return e==null&&r==null?!0:e==null||r==null?!1:e.droppableId===r.droppableId&&e.index===r.index},NM=function(e,r){return e==null&&r==null?!0:e==null||r==null?!1:e.draggableId===r.draggableId&&e.droppableId===r.droppableId},OM=function(e,r){if(e===r)return!0;var n=e.draggable.id===r.draggable.id&&e.draggable.droppableId===r.draggable.droppableId&&e.draggable.type===r.draggable.type&&e.draggable.index===r.draggable.index,s=e.droppable.id===r.droppable.id&&e.droppable.type===r.droppable.type;return n&&s},Al=function(e,r){r()},Hc=function(e,r){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:r}},Op=function(e,r,n,s){if(!e){n(s(r));return}var a=xM(n),u={announce:a};e(r,u),a.wasCalled()||n(s(r))},LM=function(t,e){var r=kM(),n=null,s=function(w,I){n&&le(),Al("onBeforeCapture",function(){var C=t().onBeforeCapture;if(C){var D={draggableId:w,mode:I};C(D)}})},a=function(w,I){n&&le(),Al("onBeforeDragStart",function(){var C=t().onBeforeDragStart;C&&C(Hc(w,I))})},u=function(w,I){n&&le();var C=Hc(w,I);n={mode:I,lastCritical:w,lastLocation:C.source,lastCombine:null},r.add(function(){Al("onDragStart",function(){return Op(t().onDragStart,C,e,dd.onDragStart)})})},d=function(w,I){var C=Dm(I),D=wh(I);n||le();var x=!OM(w,n.lastCritical);x&&(n.lastCritical=w);var O=!DM(n.lastLocation,C);O&&(n.lastLocation=C);var V=!NM(n.lastCombine,D);if(V&&(n.lastCombine=D),!(!x&&!O&&!V)){var j=Ie({},Hc(w,n.mode),{combine:D,destination:C});r.add(function(){Al("onDragUpdate",function(){return Op(t().onDragUpdate,j,e,dd.onDragUpdate)})})}},f=function(){n||le(),r.flush()},g=function(w){n||le(),n=null,Al("onDragEnd",function(){return Op(t().onDragEnd,w,e,dd.onDragEnd)})},y=function(){if(n){var w=Ie({},Hc(n.lastCritical,n.mode),{combine:null,destination:null,reason:"CANCEL"});g(w)}};return{beforeCapture:s,beforeStart:a,start:u,update:d,flush:f,drop:g,abort:y}},MM=function(t,e){var r=LM(t,e);return function(n){return function(s){return function(a){if(a.type==="BEFORE_INITIAL_CAPTURE"){r.beforeCapture(a.payload.draggableId,a.payload.movementMode);return}if(a.type==="INITIAL_PUBLISH"){var u=a.payload.critical;r.beforeStart(u,a.payload.movementMode),s(a),r.start(u,a.payload.movementMode);return}if(a.type==="DROP_COMPLETE"){var d=a.payload.completed.result;r.flush(),s(a),r.drop(d);return}if(s(a),a.type==="FLUSH"){r.abort();return}var f=n.getState();f.phase==="DRAGGING"&&r.update(f.critical,f.impact)}}}},VM=function(t){return function(e){return function(r){if(r.type!=="DROP_ANIMATION_FINISHED"){e(r);return}var n=t.getState();n.phase!=="DROP_ANIMATING"&&le(),t.dispatch(Bm({completed:n.completed}))}}},FM=function(t){var e=null,r=null;function n(){r&&(cancelAnimationFrame(r),r=null),e&&(e(),e=null)}return function(s){return function(a){if((a.type==="FLUSH"||a.type==="DROP_COMPLETE"||a.type==="DROP_ANIMATION_FINISHED")&&n(),s(a),a.type==="DROP_ANIMATE"){var u={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var f=t.getState();f.phase==="DROP_ANIMATING"&&t.dispatch(DS())}};r=requestAnimationFrame(function(){r=null,e=Kr(window,[u])})}}}},BM=function(t){return function(){return function(e){return function(r){(r.type==="DROP_COMPLETE"||r.type==="FLUSH"||r.type==="DROP_ANIMATE")&&t.stopPublishing(),e(r)}}}},UM=function(t){var e=!1;return function(){return function(r){return function(n){if(n.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(n.payload.critical.draggable.id),r(n),t.tryRestoreFocusRecorded();return}if(r(n),!!e){if(n.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(n.type==="DROP_COMPLETE"){e=!1;var s=n.payload.completed.result;s.combine&&t.tryShiftRecord(s.draggableId,s.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},jM=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},$M=function(t){return function(e){return function(r){return function(n){if(jM(n)){t.stop(),r(n);return}if(n.type==="INITIAL_PUBLISH"){r(n);var s=e.getState();s.phase!=="DRAGGING"&&le(),t.start(s);return}r(n),t.scroll(e.getState())}}}},zM=function(t){return function(e){return function(r){if(e(r),r.type==="PUBLISH_WHILE_DRAGGING"){var n=t.getState();n.phase==="DROP_PENDING"&&(n.isWaiting||t.dispatch(kS({reason:n.reason})))}}}},WM=QT,GM=function(t){var e=t.dimensionMarshal,r=t.focusMarshal,n=t.styleMarshal,s=t.getResponders,a=t.announce,u=t.autoScroller;return KT(tM,WM(KO(_M(n),BM(e),yM(e),bM,VM,FM,zM,$M(u),RM,UM(r),MM(s,a))))},Lp=function(){return{additions:{},removals:{},modified:{}}};function HM(t){var e=t.registry,r=t.callbacks,n=Lp(),s=null,a=function(){s||(r.collectionStarting(),s=requestAnimationFrame(function(){s=null;var y=n,_=y.additions,w=y.removals,I=y.modified,C=Object.keys(_).map(function(O){return e.draggable.getById(O).getDimension(jt)}).sort(function(O,V){return O.descriptor.index-V.descriptor.index}),D=Object.keys(I).map(function(O){var V=e.droppable.getById(O),j=V.callbacks.getScrollWhileDragging();return{droppableId:O,scroll:j}}),x={additions:C,removals:Object.keys(w),modified:D};n=Lp(),r.publish(x)}))},u=function(y){var _=y.descriptor.id;n.additions[_]=y,n.modified[y.descriptor.droppableId]=!0,n.removals[_]&&delete n.removals[_],a()},d=function(y){var _=y.descriptor;n.removals[_.id]=!0,n.modified[_.droppableId]=!0,n.additions[_.id]&&delete n.additions[_.id],a()},f=function(){s&&(cancelAnimationFrame(s),s=null,n=Lp())};return{add:u,remove:d,stop:f}}var LS=function(t){var e=t.scrollHeight,r=t.scrollWidth,n=t.height,s=t.width,a=xr({x:r,y:e},{x:s,y:n}),u={x:Math.max(0,a.x),y:Math.max(0,a.y)};return u},MS=function(){var t=document.documentElement;return t||le(),t},VS=function(){var t=MS(),e=LS({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},qM=function(){var t=OS(),e=VS(),r=t.y,n=t.x,s=MS(),a=s.clientWidth,u=s.clientHeight,d=n+a,f=r+u,g=mn({top:r,left:n,right:d,bottom:f}),y={frame:g,scroll:{initial:t,current:t,max:e,diff:{value:jt,displacement:jt}}};return y},KM=function(t){var e=t.critical,r=t.scrollOptions,n=t.registry,s=qM(),a=s.scroll.current,u=e.droppable,d=n.droppable.getAllByType(u.type).map(function(_){return _.callbacks.getDimensionAndWatchScroll(a,r)}),f=n.draggable.getAllByType(e.draggable.type).map(function(_){return _.getDimension(a)}),g={draggables:hS(f),droppables:dS(d)},y={dimensions:g,critical:e,viewport:s};return y};function O0(t,e,r){if(r.descriptor.id===e.id||r.descriptor.type!==e.type)return!1;var n=t.droppable.getById(r.descriptor.droppableId);return n.descriptor.mode==="virtual"}var QM=function(t,e){var r=null,n=HM({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),s=function(I,C){t.droppable.exists(I)||le(),r&&e.updateDroppableIsEnabled({id:I,isEnabled:C})},a=function(I,C){r&&(t.droppable.exists(I)||le(),e.updateDroppableIsCombineEnabled({id:I,isCombineEnabled:C}))},u=function(I,C){r&&(t.droppable.exists(I)||le(),e.updateDroppableScroll({id:I,newScroll:C}))},d=function(I,C){r&&t.droppable.getById(I).callbacks.scroll(C)},f=function(){if(r){n.stop();var I=r.critical.droppable;t.droppable.getAllByType(I.type).forEach(function(C){return C.callbacks.dragStopped()}),r.unsubscribe(),r=null}},g=function(I){r||le();var C=r.critical.draggable;I.type==="ADDITION"&&O0(t,C,I.value)&&n.add(I.value),I.type==="REMOVAL"&&O0(t,C,I.value)&&n.remove(I.value)},y=function(I){r&&le();var C=t.draggable.getById(I.draggableId),D=t.droppable.getById(C.descriptor.droppableId),x={draggable:C.descriptor,droppable:D.descriptor},O=t.subscribe(g);return r={critical:x,unsubscribe:O},KM({critical:x,registry:t,scrollOptions:I.scrollOptions})},_={updateDroppableIsEnabled:s,updateDroppableIsCombineEnabled:a,scrollDroppable:d,updateDroppableScroll:u,startPublishing:y,stopPublishing:f};return _},FS=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},YM=function(t){window.scrollBy(t.x,t.y)},XM=Ut(function(t){return _h(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),JM=function(e,r){var n=co(XM(r),function(s){return s.frame||le(),IS(s.frame.pageMarginBox)(e)});return n},ZM=function(t){var e=t.center,r=t.destination,n=t.droppables;if(r){var s=n[r];return s.frame?s:null}var a=JM(e,n);return a},Zi={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},eV=function(t,e){var r=t[e.size]*Zi.startFromPercentage,n=t[e.size]*Zi.maxScrollAtPercentage,s={startScrollingFrom:r,maxScrollValueAt:n};return s},BS=function(t){var e=t.startOfRange,r=t.endOfRange,n=t.current,s=r-e;if(s===0)return 0;var a=n-e,u=a/s;return u},$m=1,tV=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return Zi.maxPixelScroll;if(t===e.startScrollingFrom)return $m;var r=BS({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),n=1-r,s=Zi.maxPixelScroll*Zi.ease(n);return Math.ceil(s)},L0=Zi.durationDampening.accelerateAt,M0=Zi.durationDampening.stopDampeningAt,rV=function(t,e){var r=e,n=M0,s=Date.now(),a=s-r;if(a>=M0)return t;if(a<L0)return $m;var u=BS({startOfRange:L0,endOfRange:n,current:a}),d=t*Zi.ease(u);return Math.ceil(d)},V0=function(t){var e=t.distanceToEdge,r=t.thresholds,n=t.dragStartTime,s=t.shouldUseTimeDampening,a=tV(e,r);return a===0?0:s?Math.max(rV(a,n),$m):a},F0=function(t){var e=t.container,r=t.distanceToEdges,n=t.dragStartTime,s=t.axis,a=t.shouldUseTimeDampening,u=eV(e,s),d=r[s.end]<r[s.start];return d?V0({distanceToEdge:r[s.end],thresholds:u,dragStartTime:n,shouldUseTimeDampening:a}):-1*V0({distanceToEdge:r[s.start],thresholds:u,dragStartTime:n,shouldUseTimeDampening:a})},nV=function(t){var e=t.container,r=t.subject,n=t.proposedScroll,s=r.height>e.height,a=r.width>e.width;return!a&&!s?n:a&&s?null:{x:a?0:n.x,y:s?0:n.y}},iV=uS(function(t){return t===0?0:t}),US=function(t){var e=t.dragStartTime,r=t.container,n=t.subject,s=t.center,a=t.shouldUseTimeDampening,u={top:s.y-r.top,right:r.right-s.x,bottom:r.bottom-s.y,left:s.x-r.left},d=F0({container:r,distanceToEdges:u,dragStartTime:e,axis:Nm,shouldUseTimeDampening:a}),f=F0({container:r,distanceToEdges:u,dragStartTime:e,axis:gS,shouldUseTimeDampening:a}),g=iV({x:f,y:d});if(Ji(g,jt))return null;var y=nV({container:r,subject:n,proposedScroll:g});return y?Ji(y,jt)?null:y:null},oV=uS(function(t){return t===0?0:t>0?1:-1}),zm=function(){var t=function(r,n){return r<0?r:r>n?r-n:0};return function(e){var r=e.current,n=e.max,s=e.change,a=Kt(r,s),u={x:t(a.x,n.x),y:t(a.y,n.y)};return Ji(u,jt)?null:u}}(),jS=function(e){var r=e.max,n=e.current,s=e.change,a={x:Math.max(n.x,r.x),y:Math.max(n.y,r.y)},u=oV(s),d=zm({max:a,current:n,change:u});return!d||u.x!==0&&d.x===0||u.y!==0&&d.y===0},Wm=function(e,r){return jS({current:e.scroll.current,max:e.scroll.max,change:r})},sV=function(e,r){if(!Wm(e,r))return null;var n=e.scroll.max,s=e.scroll.current;return zm({current:s,max:n,change:r})},Gm=function(e,r){var n=e.frame;return n?jS({current:n.scroll.current,max:n.scroll.max,change:r}):!1},aV=function(e,r){var n=e.frame;return!n||!Gm(e,r)?null:zm({current:n.scroll.current,max:n.scroll.max,change:r})},lV=function(t){var e=t.viewport,r=t.subject,n=t.center,s=t.dragStartTime,a=t.shouldUseTimeDampening,u=US({dragStartTime:s,container:e.frame,subject:r,center:n,shouldUseTimeDampening:a});return u&&Wm(e,u)?u:null},uV=function(t){var e=t.droppable,r=t.subject,n=t.center,s=t.dragStartTime,a=t.shouldUseTimeDampening,u=e.frame;if(!u)return null;var d=US({dragStartTime:s,container:u.pageMarginBox,subject:r,center:n,shouldUseTimeDampening:a});return d&&Gm(e,d)?d:null},B0=function(t){var e=t.state,r=t.dragStartTime,n=t.shouldUseTimeDampening,s=t.scrollWindow,a=t.scrollDroppable,u=e.current.page.borderBoxCenter,d=e.dimensions.draggables[e.critical.draggable.id],f=d.page.marginBox;if(e.isWindowScrollAllowed){var g=e.viewport,y=lV({dragStartTime:r,viewport:g,subject:f,center:u,shouldUseTimeDampening:n});if(y){s(y);return}}var _=ZM({center:u,destination:kr(e.impact),droppables:e.dimensions.droppables});if(_){var w=uV({dragStartTime:r,droppable:_,subject:f,center:u,shouldUseTimeDampening:n});w&&a(_.descriptor.id,w)}},cV=function(t){var e=t.scrollWindow,r=t.scrollDroppable,n=su(e),s=su(r),a=null,u=function(y){a||le();var _=a,w=_.shouldUseTimeDampening,I=_.dragStartTime;B0({state:y,scrollWindow:n,scrollDroppable:s,dragStartTime:I,shouldUseTimeDampening:w})},d=function(y){a&&le();var _=Date.now(),w=!1,I=function(){w=!0};B0({state:y,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:I,scrollDroppable:I}),a={dragStartTime:_,shouldUseTimeDampening:w},w&&u(y)},f=function(){a&&(n.cancel(),s.cancel(),a=null)};return{start:d,stop:f,scroll:u}},dV=function(t){var e=t.move,r=t.scrollDroppable,n=t.scrollWindow,s=function(g,y){var _=Kt(g.current.client.selection,y);e({client:_})},a=function(g,y){if(!Gm(g,y))return y;var _=aV(g,y);if(!_)return r(g.descriptor.id,y),null;var w=xr(y,_);r(g.descriptor.id,w);var I=xr(y,w);return I},u=function(g,y,_){if(!g||!Wm(y,_))return _;var w=sV(y,_);if(!w)return n(_),null;var I=xr(_,w);n(I);var C=xr(_,I);return C},d=function(g){var y=g.scrollJumpRequest;if(y){var _=kr(g.impact);_||le();var w=a(g.dimensions.droppables[_],y);if(w){var I=g.viewport,C=u(g.isWindowScrollAllowed,I,w);C&&s(g,C)}}};return d},hV=function(t){var e=t.scrollDroppable,r=t.scrollWindow,n=t.move,s=cV({scrollWindow:r,scrollDroppable:e}),a=dV({move:n,scrollWindow:r,scrollDroppable:e}),u=function(g){if(g.phase==="DRAGGING"){if(g.movementMode==="FLUID"){s.scroll(g);return}g.scrollJumpRequest&&a(g)}},d={scroll:u,start:s.start,stop:s.stop};return d},Ea="data-rbd",Ia=function(){var t=Ea+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),bg=function(){var t=Ea+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),fV=function(){var t=Ea+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),U0={contextId:Ea+"-scroll-container-context-id"},pV=function(e){return function(r){return"["+r+'="'+e+'"]'}},Pl=function(e,r){return e.map(function(n){var s=n.styles[r];return s?n.selector+" { "+s+" }":""}).join(" ")},gV="pointer-events: none;",mV=function(t){var e=pV(t),r=function(){var d=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(Ia.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:d,dragging:gV,dropAnimating:d}}}(),n=function(){var d=`
      transition: `+Wl.outOfTheWay+`;
    `;return{selector:e(bg.contextId),styles:{dragging:d,dropAnimating:d,userCancel:d}}}(),s={selector:e(fV.contextId),styles:{always:"overflow-anchor: none;"}},a={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},u=[n,r,s,a];return{always:Pl(u,"always"),resting:Pl(u,"resting"),dragging:Pl(u,"dragging"),dropAnimating:Pl(u,"dropAnimating"),userCancel:Pl(u,"userCancel")}},Dr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?oe.useLayoutEffect:oe.useEffect,Mp=function(){var e=document.querySelector("head");return e||le(),e},j0=function(e){var r=document.createElement("style");return e&&r.setAttribute("nonce",e),r.type="text/css",r};function vV(t,e){var r=qe(function(){return mV(t)},[t]),n=oe.useRef(null),s=oe.useRef(null),a=ye(Ut(function(_){var w=s.current;w||le(),w.textContent=_}),[]),u=ye(function(_){var w=n.current;w||le(),w.textContent=_},[]);Dr(function(){!n.current&&!s.current||le();var _=j0(e),w=j0(e);return n.current=_,s.current=w,_.setAttribute(Ea+"-always",t),w.setAttribute(Ea+"-dynamic",t),Mp().appendChild(_),Mp().appendChild(w),u(r.always),a(r.resting),function(){var I=function(D){var x=D.current;x||le(),Mp().removeChild(x),D.current=null};I(n),I(s)}},[e,u,a,r.always,r.resting,t]);var d=ye(function(){return a(r.dragging)},[a,r.dragging]),f=ye(function(_){if(_==="DROP"){a(r.dropAnimating);return}a(r.userCancel)},[a,r.dropAnimating,r.userCancel]),g=ye(function(){s.current&&a(r.resting)},[a,r.resting]),y=qe(function(){return{dragging:d,dropping:f,resting:g}},[d,f,g]);return y}var $S=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function Th(t){return t instanceof $S(t).HTMLElement}function yV(t,e){var r="["+Ia.contextId+'="'+t+'"]',n=cS(document.querySelectorAll(r));if(!n.length)return null;var s=co(n,function(a){return a.getAttribute(Ia.draggableId)===e});return!s||!Th(s)?null:s}function _V(t){var e=oe.useRef({}),r=oe.useRef(null),n=oe.useRef(null),s=oe.useRef(!1),a=ye(function(w,I){var C={id:w,focus:I};return e.current[w]=C,function(){var x=e.current,O=x[w];O!==C&&delete x[w]}},[]),u=ye(function(w){var I=yV(t,w);I&&I!==document.activeElement&&I.focus()},[t]),d=ye(function(w,I){r.current===w&&(r.current=I)},[]),f=ye(function(){n.current||s.current&&(n.current=requestAnimationFrame(function(){n.current=null;var w=r.current;w&&u(w)}))},[u]),g=ye(function(w){r.current=null;var I=document.activeElement;I&&I.getAttribute(Ia.draggableId)===w&&(r.current=w)},[]);Dr(function(){return s.current=!0,function(){s.current=!1;var w=n.current;w&&cancelAnimationFrame(w)}},[]);var y=qe(function(){return{register:a,tryRecordFocus:g,tryRestoreFocusRecorded:f,tryShiftRecord:d}},[a,g,f,d]);return y}function wV(){var t={draggables:{},droppables:{}},e=[];function r(_){return e.push(_),function(){var I=e.indexOf(_);I!==-1&&e.splice(I,1)}}function n(_){e.length&&e.forEach(function(w){return w(_)})}function s(_){return t.draggables[_]||null}function a(_){var w=s(_);return w||le(),w}var u={register:function(w){t.draggables[w.descriptor.id]=w,n({type:"ADDITION",value:w})},update:function(w,I){var C=t.draggables[I.descriptor.id];C&&C.uniqueId===w.uniqueId&&(delete t.draggables[I.descriptor.id],t.draggables[w.descriptor.id]=w)},unregister:function(w){var I=w.descriptor.id,C=s(I);C&&w.uniqueId===C.uniqueId&&(delete t.draggables[I],n({type:"REMOVAL",value:w}))},getById:a,findById:s,exists:function(w){return!!s(w)},getAllByType:function(w){return jd(t.draggables).filter(function(I){return I.descriptor.type===w})}};function d(_){return t.droppables[_]||null}function f(_){var w=d(_);return w||le(),w}var g={register:function(w){t.droppables[w.descriptor.id]=w},unregister:function(w){var I=d(w.descriptor.id);I&&w.uniqueId===I.uniqueId&&delete t.droppables[w.descriptor.id]},getById:f,findById:d,exists:function(w){return!!d(w)},getAllByType:function(w){return jd(t.droppables).filter(function(I){return I.descriptor.type===w})}};function y(){t.draggables={},t.droppables={},e.length=0}return{draggable:u,droppable:g,subscribe:r,clean:y}}function EV(){var t=qe(wV,[]);return oe.useEffect(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var Hm=je.createContext(null),zd=function(){var t=document.body;return t||le(),t},IV={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},TV=function(e){return"rbd-announcement-"+e};function SV(t){var e=qe(function(){return TV(t)},[t]),r=oe.useRef(null);oe.useEffect(function(){var a=document.createElement("div");return r.current=a,a.id=e,a.setAttribute("aria-live","assertive"),a.setAttribute("aria-atomic","true"),Ie(a.style,IV),zd().appendChild(a),function(){setTimeout(function(){var f=zd();f.contains(a)&&f.removeChild(a),a===r.current&&(r.current=null)})}},[e]);var n=ye(function(s){var a=r.current;if(a){a.textContent=s;return}},[]);return n}var bV=0,CV={separator:"::"};function qm(t,e){return e===void 0&&(e=CV),qe(function(){return""+t+e.separator+bV++},[e.separator,t])}function AV(t){var e=t.contextId,r=t.uniqueId;return"rbd-hidden-text-"+e+"-"+r}function PV(t){var e=t.contextId,r=t.text,n=qm("hidden-text",{separator:"-"}),s=qe(function(){return AV({contextId:e,uniqueId:n})},[n,e]);return oe.useEffect(function(){var u=document.createElement("div");return u.id=s,u.textContent=r,u.style.display="none",zd().appendChild(u),function(){var f=zd();f.contains(u)&&f.removeChild(u)}},[s,r]),s}var Sh=je.createContext(null);function zS(t){var e=oe.useRef(t);return oe.useEffect(function(){e.current=t}),e}function RV(){var t=null;function e(){return!!t}function r(u){return u===t}function n(u){t&&le();var d={abandon:u};return t=d,d}function s(){t||le(),t=null}function a(){t&&(t.abandon(),s())}return{isClaimed:e,isActive:r,claim:n,release:s,tryAbandon:a}}var xV=9,kV=13,Km=27,WS=32,DV=33,NV=34,OV=35,LV=36,MV=37,VV=38,FV=39,BV=40,qc,UV=(qc={},qc[kV]=!0,qc[xV]=!0,qc),GS=function(t){UV[t.keyCode]&&t.preventDefault()},bh=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],r=co(e,function(n){return"on"+n in document});return r||t}(),HS=0,$0=5;function jV(t,e){return Math.abs(e.x-t.x)>=$0||Math.abs(e.y-t.y)>=$0}var z0={type:"IDLE"};function $V(t){var e=t.cancel,r=t.completed,n=t.getPhase,s=t.setPhase;return[{eventName:"mousemove",fn:function(u){var d=u.button,f=u.clientX,g=u.clientY;if(d===HS){var y={x:f,y:g},_=n();if(_.type==="DRAGGING"){u.preventDefault(),_.actions.move(y);return}_.type!=="PENDING"&&le();var w=_.point;if(jV(w,y)){u.preventDefault();var I=_.actions.fluidLift(y);s({type:"DRAGGING",actions:I})}}}},{eventName:"mouseup",fn:function(u){var d=n();if(d.type!=="DRAGGING"){e();return}u.preventDefault(),d.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"mousedown",fn:function(u){n().type==="DRAGGING"&&u.preventDefault(),e()}},{eventName:"keydown",fn:function(u){var d=n();if(d.type==="PENDING"){e();return}if(u.keyCode===Km){u.preventDefault(),e();return}GS(u)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){n().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(u){var d=n();if(d.type==="IDLE"&&le(),d.actions.shouldRespectForcePress()){e();return}u.preventDefault()}},{eventName:bh,fn:e}]}function zV(t){var e=oe.useRef(z0),r=oe.useRef(Xi),n=qe(function(){return{eventName:"mousedown",fn:function(_){if(!_.defaultPrevented&&_.button===HS&&!(_.ctrlKey||_.metaKey||_.shiftKey||_.altKey)){var w=t.findClosestDraggableId(_);if(w){var I=t.tryGetLock(w,u,{sourceEvent:_});if(I){_.preventDefault();var C={x:_.clientX,y:_.clientY};r.current(),g(I,C)}}}}}},[t]),s=qe(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(_){if(!_.defaultPrevented){var w=t.findClosestDraggableId(_);if(w){var I=t.findOptionsForDraggable(w);I&&(I.shouldRespectForcePress||t.canGetLock(w)&&_.preventDefault())}}}}},[t]),a=ye(function(){var _={passive:!1,capture:!0};r.current=Kr(window,[s,n],_)},[s,n]),u=ye(function(){var y=e.current;y.type!=="IDLE"&&(e.current=z0,r.current(),a())},[a]),d=ye(function(){var y=e.current;u(),y.type==="DRAGGING"&&y.actions.cancel({shouldBlockNextClick:!0}),y.type==="PENDING"&&y.actions.abort()},[u]),f=ye(function(){var _={capture:!0,passive:!1},w=$V({cancel:d,completed:u,getPhase:function(){return e.current},setPhase:function(C){e.current=C}});r.current=Kr(window,w,_)},[d,u]),g=ye(function(_,w){e.current.type!=="IDLE"&&le(),e.current={type:"PENDING",point:w,actions:_},f()},[f]);Dr(function(){return a(),function(){r.current()}},[a])}var Qs;function WV(){}var GV=(Qs={},Qs[NV]=!0,Qs[DV]=!0,Qs[LV]=!0,Qs[OV]=!0,Qs);function HV(t,e){function r(){e(),t.cancel()}function n(){e(),t.drop()}return[{eventName:"keydown",fn:function(a){if(a.keyCode===Km){a.preventDefault(),r();return}if(a.keyCode===WS){a.preventDefault(),n();return}if(a.keyCode===BV){a.preventDefault(),t.moveDown();return}if(a.keyCode===VV){a.preventDefault(),t.moveUp();return}if(a.keyCode===FV){a.preventDefault(),t.moveRight();return}if(a.keyCode===MV){a.preventDefault(),t.moveLeft();return}if(GV[a.keyCode]){a.preventDefault();return}GS(a)}},{eventName:"mousedown",fn:r},{eventName:"mouseup",fn:r},{eventName:"click",fn:r},{eventName:"touchstart",fn:r},{eventName:"resize",fn:r},{eventName:"wheel",fn:r,options:{passive:!0}},{eventName:bh,fn:r}]}function qV(t){var e=oe.useRef(WV),r=qe(function(){return{eventName:"keydown",fn:function(a){if(a.defaultPrevented||a.keyCode!==WS)return;var u=t.findClosestDraggableId(a);if(!u)return;var d=t.tryGetLock(u,y,{sourceEvent:a});if(!d)return;a.preventDefault();var f=!0,g=d.snapLift();e.current();function y(){f||le(),f=!1,e.current(),n()}e.current=Kr(window,HV(g,y),{capture:!0,passive:!1})}}},[t]),n=ye(function(){var a={passive:!1,capture:!0};e.current=Kr(window,[r],a)},[r]);Dr(function(){return n(),function(){e.current()}},[n])}var Vp={type:"IDLE"},KV=120,QV=.15;function YV(t){var e=t.cancel,r=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(s){s.preventDefault()}},{eventName:"keydown",fn:function(s){if(r().type!=="DRAGGING"){e();return}s.keyCode===Km&&s.preventDefault(),e()}},{eventName:bh,fn:e}]}function XV(t){var e=t.cancel,r=t.completed,n=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(a){var u=n();if(u.type!=="DRAGGING"){e();return}u.hasMoved=!0;var d=a.touches[0],f=d.clientX,g=d.clientY,y={x:f,y:g};a.preventDefault(),u.actions.move(y)}},{eventName:"touchend",fn:function(a){var u=n();if(u.type!=="DRAGGING"){e();return}a.preventDefault(),u.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"touchcancel",fn:function(a){if(n().type!=="DRAGGING"){e();return}a.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(a){var u=n();u.type==="IDLE"&&le();var d=a.touches[0];if(d){var f=d.force>=QV;if(f){var g=u.actions.shouldRespectForcePress();if(u.type==="PENDING"){g&&e();return}if(g){if(u.hasMoved){a.preventDefault();return}e();return}a.preventDefault()}}}},{eventName:bh,fn:e}]}function JV(t){var e=oe.useRef(Vp),r=oe.useRef(Xi),n=ye(function(){return e.current},[]),s=ye(function(I){e.current=I},[]),a=qe(function(){return{eventName:"touchstart",fn:function(I){if(!I.defaultPrevented){var C=t.findClosestDraggableId(I);if(C){var D=t.tryGetLock(C,d,{sourceEvent:I});if(D){var x=I.touches[0],O=x.clientX,V=x.clientY,j={x:O,y:V};r.current(),_(D,j)}}}}}},[t]),u=ye(function(){var I={capture:!0,passive:!1};r.current=Kr(window,[a],I)},[a]),d=ye(function(){var w=e.current;w.type!=="IDLE"&&(w.type==="PENDING"&&clearTimeout(w.longPressTimerId),s(Vp),r.current(),u())},[u,s]),f=ye(function(){var w=e.current;d(),w.type==="DRAGGING"&&w.actions.cancel({shouldBlockNextClick:!0}),w.type==="PENDING"&&w.actions.abort()},[d]),g=ye(function(){var I={capture:!0,passive:!1},C={cancel:f,completed:d,getPhase:n},D=Kr(window,XV(C),I),x=Kr(window,YV(C),I);r.current=function(){D(),x()}},[f,n,d]),y=ye(function(){var I=n();I.type!=="PENDING"&&le();var C=I.actions.fluidLift(I.point);s({type:"DRAGGING",actions:C,hasMoved:!1})},[n,s]),_=ye(function(I,C){n().type!=="IDLE"&&le();var D=setTimeout(y,KV);s({type:"PENDING",point:C,actions:I,longPressTimerId:D}),g()},[g,n,s,y]);Dr(function(){return u(),function(){r.current();var C=n();C.type==="PENDING"&&(clearTimeout(C.longPressTimerId),s(Vp))}},[n,u,s]),Dr(function(){var I=Kr(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return I},[])}var ZV={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function qS(t,e){if(e==null)return!1;var r=!!ZV[e.tagName.toLowerCase()];if(r)return!0;var n=e.getAttribute("contenteditable");return n==="true"||n===""?!0:e===t?!1:qS(t,e.parentElement)}function eF(t,e){var r=e.target;return Th(r)?qS(t,r):!1}var tF=function(t){return mn(t.getBoundingClientRect()).center};function rF(t){return t instanceof $S(t).Element}var nF=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],r=co(e,function(n){return n in Element.prototype});return r||t}();function KS(t,e){return t==null?null:t[nF](e)?t:KS(t.parentElement,e)}function iF(t,e){return t.closest?t.closest(e):KS(t,e)}function oF(t){return"["+Ia.contextId+'="'+t+'"]'}function sF(t,e){var r=e.target;if(!rF(r))return null;var n=oF(t),s=iF(r,n);return!s||!Th(s)?null:s}function aF(t,e){var r=sF(t,e);return r?r.getAttribute(Ia.draggableId):null}function lF(t,e){var r="["+bg.contextId+'="'+t+'"]',n=cS(document.querySelectorAll(r)),s=co(n,function(a){return a.getAttribute(bg.id)===e});return!s||!Th(s)?null:s}function uF(t){t.preventDefault()}function Kc(t){var e=t.expected,r=t.phase,n=t.isLockActive;return t.shouldWarn,!(!n()||e!==r)}function QS(t){var e=t.lockAPI,r=t.store,n=t.registry,s=t.draggableId;if(e.isClaimed())return!1;var a=n.draggable.findById(s);return!(!a||!a.options.isEnabled||!FS(r.getState(),s))}function cF(t){var e=t.lockAPI,r=t.contextId,n=t.store,s=t.registry,a=t.draggableId,u=t.forceSensorStop,d=t.sourceEvent,f=QS({lockAPI:e,store:n,registry:s,draggableId:a});if(!f)return null;var g=s.draggable.getById(a),y=lF(r,g.descriptor.id);if(!y||d&&!g.options.canDragInteractiveElements&&eF(y,d))return null;var _=e.claim(u||Xi),w="PRE_DRAG";function I(){return g.options.shouldRespectForcePress}function C(){return e.isActive(_)}function D(Q,P){Kc({expected:Q,phase:w,isLockActive:C,shouldWarn:!0})&&n.dispatch(P())}var x=D.bind(null,"DRAGGING");function O(Q){function P(){e.release(),w="COMPLETED"}w!=="PRE_DRAG"&&(P(),w!=="PRE_DRAG"&&le()),n.dispatch(nM(Q.liftActionArgs)),w="DRAGGING";function A(R,N){if(N===void 0&&(N={shouldBlockNextClick:!1}),Q.cleanup(),N.shouldBlockNextClick){var L=Kr(window,[{eventName:"click",fn:uF,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(L)}P(),n.dispatch(kS({reason:R}))}return Ie({isActive:function(){return Kc({expected:"DRAGGING",phase:w,isLockActive:C,shouldWarn:!1})},shouldRespectForcePress:I,drop:function(N){return A("DROP",N)},cancel:function(N){return A("CANCEL",N)}},Q.actions)}function V(Q){var P=su(function(R){x(function(){return xS({client:R})})}),A=O({liftActionArgs:{id:a,clientSelection:Q,movementMode:"FLUID"},cleanup:function(){return P.cancel()},actions:{move:P}});return Ie({},A,{move:P})}function j(){var Q={moveUp:function(){return x(hM)},moveRight:function(){return x(pM)},moveDown:function(){return x(fM)},moveLeft:function(){return x(gM)}};return O({liftActionArgs:{id:a,clientSelection:tF(y),movementMode:"SNAP"},cleanup:Xi,actions:Q})}function $(){var Q=Kc({expected:"PRE_DRAG",phase:w,isLockActive:C,shouldWarn:!0});Q&&e.release()}var W={isActive:function(){return Kc({expected:"PRE_DRAG",phase:w,isLockActive:C,shouldWarn:!1})},shouldRespectForcePress:I,fluidLift:V,snapLift:j,abort:$};return W}var dF=[zV,qV,JV];function hF(t){var e=t.contextId,r=t.store,n=t.registry,s=t.customSensors,a=t.enableDefaultSensors,u=[].concat(a?dF:[],s||[]),d=oe.useState(function(){return RV()})[0],f=ye(function(V,j){V.isDragging&&!j.isDragging&&d.tryAbandon()},[d]);Dr(function(){var V=r.getState(),j=r.subscribe(function(){var $=r.getState();f(V,$),V=$});return j},[d,r,f]),Dr(function(){return d.tryAbandon},[d.tryAbandon]);for(var g=ye(function(O){return QS({lockAPI:d,registry:n,store:r,draggableId:O})},[d,n,r]),y=ye(function(O,V,j){return cF({lockAPI:d,registry:n,contextId:e,store:r,draggableId:O,forceSensorStop:V,sourceEvent:j&&j.sourceEvent?j.sourceEvent:null})},[e,d,n,r]),_=ye(function(O){return aF(e,O)},[e]),w=ye(function(O){var V=n.draggable.findById(O);return V?V.options:null},[n.draggable]),I=ye(function(){d.isClaimed()&&(d.tryAbandon(),r.getState().phase!=="IDLE"&&r.dispatch(Fm()))},[d,r]),C=ye(d.isClaimed,[d]),D=qe(function(){return{canGetLock:g,tryGetLock:y,findClosestDraggableId:_,findOptionsForDraggable:w,tryReleaseLock:I,isLockClaimed:C}},[g,y,_,w,I,C]),x=0;x<u.length;x++)u[x](D)}var fF=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function Rl(t){return t.current||le(),t.current}function pF(t){var e=t.contextId,r=t.setCallbacks,n=t.sensors,s=t.nonce,a=t.dragHandleUsageInstructions,u=oe.useRef(null),d=zS(t),f=ye(function(){return fF(d.current)},[d]),g=SV(e),y=PV({contextId:e,text:a}),_=vV(e,s),w=ye(function(R){Rl(u).dispatch(R)},[]),I=qe(function(){return c0({publishWhileDragging:oM,updateDroppableScroll:aM,updateDroppableIsEnabled:lM,updateDroppableIsCombineEnabled:uM,collectionStarting:sM},w)},[w]),C=EV(),D=qe(function(){return QM(C,I)},[C,I]),x=qe(function(){return hV(Ie({scrollWindow:YM,scrollDroppable:D.scrollDroppable},c0({move:xS},w)))},[D.scrollDroppable,w]),O=_V(e),V=qe(function(){return GM({announce:g,autoScroller:x,dimensionMarshal:D,focusMarshal:O,getResponders:f,styleMarshal:_})},[g,x,D,O,f,_]);u.current=V;var j=ye(function(){var R=Rl(u),N=R.getState();N.phase!=="IDLE"&&R.dispatch(Fm())},[]),$=ye(function(){var R=Rl(u).getState();return R.isDragging||R.phase==="DROP_ANIMATING"},[]),W=qe(function(){return{isDragging:$,tryAbort:j}},[$,j]);r(W);var Q=ye(function(R){return FS(Rl(u).getState(),R)},[]),P=ye(function(){return jo(Rl(u).getState())},[]),A=qe(function(){return{marshal:D,focus:O,contextId:e,canLift:Q,isMovementAllowed:P,dragHandleUsageInstructionsId:y,registry:C}},[e,D,y,O,Q,P,C]);return hF({contextId:e,store:V,registry:C,customSensors:n,enableDefaultSensors:t.enableDefaultSensors!==!1}),oe.useEffect(function(){return j},[j]),je.createElement(Sh.Provider,{value:A},je.createElement(ZO,{context:Hm,store:V},t.children))}var gF=0;function mF(){return qe(function(){return""+gF++},[])}function vF(t){var e=mF(),r=t.dragHandleUsageInstructions||dd.dragHandleUsageInstructions;return je.createElement(qL,null,function(n){return je.createElement(pF,{nonce:t.nonce,contextId:e,setCallbacks:n,dragHandleUsageInstructions:r,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var YS=function(e){return function(r){return e===r}},yF=YS("scroll"),_F=YS("auto"),W0=function(e,r){return r(e.overflowX)||r(e.overflowY)},wF=function(e){var r=window.getComputedStyle(e),n={overflowX:r.overflowX,overflowY:r.overflowY};return W0(n,yF)||W0(n,_F)},EF=function(){return!1},IF=function t(e){return e==null?null:e===document.body?EF()?e:null:e===document.documentElement?null:wF(e)?e:t(e.parentElement)},Cg=function(t){return{x:t.scrollLeft,y:t.scrollTop}},TF=function t(e){if(!e)return!1;var r=window.getComputedStyle(e);return r.position==="fixed"?!0:t(e.parentElement)},SF=function(t){var e=IF(t),r=TF(t);return{closestScrollable:e,isFixedOnPage:r}},bF=function(t){var e=t.descriptor,r=t.isEnabled,n=t.isCombineEnabled,s=t.isFixedOnPage,a=t.direction,u=t.client,d=t.page,f=t.closest,g=function(){if(!f)return null;var I=f.scrollSize,C=f.client,D=LS({scrollHeight:I.scrollHeight,scrollWidth:I.scrollWidth,height:C.paddingBox.height,width:C.paddingBox.width});return{pageMarginBox:f.page.marginBox,frameClient:C,scrollSize:I,shouldClipSubject:f.shouldClipSubject,scroll:{initial:f.scroll,current:f.scroll,max:D,diff:{value:jt,displacement:jt}}}}(),y=a==="vertical"?Nm:gS,_=wa({page:d,withPlaceholder:null,axis:y,frame:g}),w={descriptor:e,isCombineEnabled:n,isFixedOnPage:s,axis:y,isEnabled:r,client:u,page:d,frame:g,subject:_};return w},CF=function(e,r){var n=oS(e);if(!r||e!==r)return n;var s=n.paddingBox.top-r.scrollTop,a=n.paddingBox.left-r.scrollLeft,u=s+r.scrollHeight,d=a+r.scrollWidth,f={top:s,right:d,bottom:u,left:a},g=Pm(f,n.border),y=Rm({borderBox:g,margin:n.margin,border:n.border,padding:n.padding});return y},AF=function(t){var e=t.ref,r=t.descriptor,n=t.env,s=t.windowScroll,a=t.direction,u=t.isDropDisabled,d=t.isCombineEnabled,f=t.shouldClipSubject,g=n.closestScrollable,y=CF(e,g),_=Fd(y,s),w=function(){if(!g)return null;var C=oS(g),D={scrollHeight:g.scrollHeight,scrollWidth:g.scrollWidth};return{client:C,page:Fd(C,s),scroll:Cg(g),scrollSize:D,shouldClipSubject:f}}(),I=bF({descriptor:r,isEnabled:!u,isCombineEnabled:d,isFixedOnPage:n.isFixedOnPage,direction:a,client:y,page:_,closest:w});return I},PF={passive:!1},RF={passive:!0},G0=function(t){return t.shouldPublishImmediately?PF:RF};function Wd(t){var e=oe.useContext(t);return e||le(),e}var Qc=function(e){return e&&e.env.closestScrollable||null};function xF(t){var e=oe.useRef(null),r=Wd(Sh),n=qm("droppable"),s=r.registry,a=r.marshal,u=zS(t),d=qe(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),f=oe.useRef(d),g=qe(function(){return Ut(function($,W){e.current||le();var Q={x:$,y:W};a.updateDroppableScroll(d.id,Q)})},[d.id,a]),y=ye(function(){var $=e.current;return!$||!$.env.closestScrollable?jt:Cg($.env.closestScrollable)},[]),_=ye(function(){var $=y();g($.x,$.y)},[y,g]),w=qe(function(){return su(_)},[_]),I=ye(function(){var $=e.current,W=Qc($);$&&W||le();var Q=$.scrollOptions;if(Q.shouldPublishImmediately){_();return}w()},[w,_]),C=ye(function($,W){e.current&&le();var Q=u.current,P=Q.getDroppableRef();P||le();var A=SF(P),R={ref:P,descriptor:d,env:A,scrollOptions:W};e.current=R;var N=AF({ref:P,descriptor:d,env:A,windowScroll:$,direction:Q.direction,isDropDisabled:Q.isDropDisabled,isCombineEnabled:Q.isCombineEnabled,shouldClipSubject:!Q.ignoreContainerClipping}),L=A.closestScrollable;return L&&(L.setAttribute(U0.contextId,r.contextId),L.addEventListener("scroll",I,G0(R.scrollOptions))),N},[r.contextId,d,I,u]),D=ye(function(){var $=e.current,W=Qc($);return $&&W||le(),Cg(W)},[]),x=ye(function(){var $=e.current;$||le();var W=Qc($);e.current=null,W&&(w.cancel(),W.removeAttribute(U0.contextId),W.removeEventListener("scroll",I,G0($.scrollOptions)))},[I,w]),O=ye(function($){var W=e.current;W||le();var Q=Qc(W);Q||le(),Q.scrollTop+=$.y,Q.scrollLeft+=$.x},[]),V=qe(function(){return{getDimensionAndWatchScroll:C,getScrollWhileDragging:D,dragStopped:x,scroll:O}},[x,C,D,O]),j=qe(function(){return{uniqueId:n,descriptor:d,callbacks:V}},[V,d,n]);Dr(function(){return f.current=j.descriptor,s.droppable.register(j),function(){e.current&&x(),s.droppable.unregister(j)}},[V,d,x,j,a,s.droppable]),Dr(function(){e.current&&a.updateDroppableIsEnabled(f.current.id,!t.isDropDisabled)},[t.isDropDisabled,a]),Dr(function(){e.current&&a.updateDroppableIsCombineEnabled(f.current.id,t.isCombineEnabled)},[t.isCombineEnabled,a])}function Fp(){}var H0={width:0,height:0,margin:ZL},kF=function(e){var r=e.isAnimatingOpenOnMount,n=e.placeholder,s=e.animate;return r||s==="close"?H0:{height:n.client.borderBox.height,width:n.client.borderBox.width,margin:n.client.margin}},DF=function(e){var r=e.isAnimatingOpenOnMount,n=e.placeholder,s=e.animate,a=kF({isAnimatingOpenOnMount:r,placeholder:n,animate:s});return{display:n.display,boxSizing:"border-box",width:a.width,height:a.height,marginTop:a.margin.top,marginRight:a.margin.right,marginBottom:a.margin.bottom,marginLeft:a.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:s!=="none"?Wl.placeholder:null}};function NF(t){var e=oe.useRef(null),r=ye(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),n=t.animate,s=t.onTransitionEnd,a=t.onClose,u=t.contextId,d=oe.useState(t.animate==="open"),f=d[0],g=d[1];oe.useEffect(function(){return f?n!=="open"?(r(),g(!1),Fp):e.current?Fp:(e.current=setTimeout(function(){e.current=null,g(!1)}),r):Fp},[n,f,r]);var y=ye(function(w){w.propertyName==="height"&&(s(),n==="close"&&a())},[n,a,s]),_=DF({isAnimatingOpenOnMount:f,animate:t.animate,placeholder:t.placeholder});return je.createElement(t.placeholder.tagName,{style:_,"data-rbd-placeholder-context-id":u,onTransitionEnd:y,ref:t.innerRef})}var OF=je.memo(NF),Qm=je.createContext(null),LF=function(t){qT(e,t);function e(){for(var n,s=arguments.length,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u];return n=t.call.apply(t,[this].concat(a))||this,n.state={isVisible:!!n.props.on,data:n.props.on,animate:n.props.shouldAnimate&&n.props.on?"open":"none"},n.onClose=function(){n.state.animate==="close"&&n.setState({isVisible:!1})},n}e.getDerivedStateFromProps=function(s,a){return s.shouldAnimate?s.on?{isVisible:!0,data:s.on,animate:"open"}:a.isVisible?{isVisible:!0,data:a.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!s.on,data:s.on,animate:"none"}};var r=e.prototype;return r.render=function(){if(!this.state.isVisible)return null;var s={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(s)},e}(je.PureComponent),q0={dragging:5e3,dropAnimating:4500},MF=function(e,r){return r?Wl.drop(r.duration):e?Wl.snap:Wl.fluid},VF=function(e,r){return e?r?cu.opacity.drop:cu.opacity.combining:null},FF=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function BF(t){var e=t.dimension,r=e.client,n=t.offset,s=t.combineWith,a=t.dropping,u=!!s,d=FF(t),f=!!a,g=f?Tg.drop(n,u):Tg.moveTo(n),y={position:"fixed",top:r.marginBox.top,left:r.marginBox.left,boxSizing:"border-box",width:r.borderBox.width,height:r.borderBox.height,transition:MF(d,a),transform:g,opacity:VF(u,f),zIndex:f?q0.dropAnimating:q0.dragging,pointerEvents:"none"};return y}function UF(t){return{transform:Tg.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function jF(t){return t.type==="DRAGGING"?BF(t):UF(t)}function $F(t,e,r){r===void 0&&(r=jt);var n=window.getComputedStyle(e),s=e.getBoundingClientRect(),a=iS(s,n),u=Fd(a,r),d={client:a,tagName:e.tagName.toLowerCase(),display:n.display},f={x:a.marginBox.width,y:a.marginBox.height},g={descriptor:t,placeholder:d,displaceBy:f,client:a,page:u};return g}function zF(t){var e=qm("draggable"),r=t.descriptor,n=t.registry,s=t.getDraggableRef,a=t.canDragInteractiveElements,u=t.shouldRespectForcePress,d=t.isEnabled,f=qe(function(){return{canDragInteractiveElements:a,shouldRespectForcePress:u,isEnabled:d}},[a,d,u]),g=ye(function(I){var C=s();return C||le(),$F(r,C,I)},[r,s]),y=qe(function(){return{uniqueId:e,descriptor:r,options:f,getDimension:g}},[r,g,f,e]),_=oe.useRef(y),w=oe.useRef(!0);Dr(function(){return n.draggable.register(_.current),function(){return n.draggable.unregister(_.current)}},[n.draggable]),Dr(function(){if(w.current){w.current=!1;return}var I=_.current;_.current=y,n.draggable.update(y,I)},[y,n.draggable])}function WF(t){t.preventDefault()}function GF(t){var e=oe.useRef(null),r=ye(function(R){e.current=R},[]),n=ye(function(){return e.current},[]),s=Wd(Sh),a=s.contextId,u=s.dragHandleUsageInstructionsId,d=s.registry,f=Wd(Qm),g=f.type,y=f.droppableId,_=qe(function(){return{id:t.draggableId,index:t.index,type:g,droppableId:y}},[t.draggableId,t.index,g,y]),w=t.children,I=t.draggableId,C=t.isEnabled,D=t.shouldRespectForcePress,x=t.canDragInteractiveElements,O=t.isClone,V=t.mapped,j=t.dropAnimationFinished;if(!O){var $=qe(function(){return{descriptor:_,registry:d,getDraggableRef:n,canDragInteractiveElements:x,shouldRespectForcePress:D,isEnabled:C}},[_,d,n,x,D,C]);zF($)}var W=qe(function(){return C?{tabIndex:0,role:"button","aria-describedby":u,"data-rbd-drag-handle-draggable-id":I,"data-rbd-drag-handle-context-id":a,draggable:!1,onDragStart:WF}:null},[a,u,I,C]),Q=ye(function(R){V.type==="DRAGGING"&&V.dropping&&R.propertyName==="transform"&&j()},[j,V]),P=qe(function(){var R=jF(V),N=V.type==="DRAGGING"&&V.dropping?Q:null,L={innerRef:r,draggableProps:{"data-rbd-draggable-context-id":a,"data-rbd-draggable-id":I,style:R,onTransitionEnd:N},dragHandleProps:W};return L},[a,W,I,V,Q,r]),A=qe(function(){return{draggableId:_.id,type:_.type,source:{index:_.index,droppableId:_.droppableId}}},[_.droppableId,_.id,_.index,_.type]);return w(P,V.snapshot,A)}var XS=function(t,e){return t===e},JS=function(t){var e=t.combine,r=t.destination;return r?r.droppableId:e?e.droppableId:null},HF=function(e){return e.combine?e.combine.draggableId:null},qF=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function KF(){var t=Ut(function(s,a){return{x:s,y:a}}),e=Ut(function(s,a,u,d,f){return{isDragging:!0,isClone:a,isDropAnimating:!!f,dropAnimation:f,mode:s,draggingOver:u,combineWith:d,combineTargetFor:null}}),r=Ut(function(s,a,u,d,f,g,y){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:f,combineWith:g,mode:a,offset:s,dimension:u,forceShouldAnimate:y,snapshot:e(a,d,f,g,null)}}}),n=function(a,u){if(a.isDragging){if(a.critical.draggable.id!==u.draggableId)return null;var d=a.current.client.offset,f=a.dimensions.draggables[u.draggableId],g=kr(a.impact),y=qF(a.impact),_=a.forceShouldAnimate;return r(t(d.x,d.y),a.movementMode,f,u.isClone,g,y,_)}if(a.phase==="DROP_ANIMATING"){var w=a.completed;if(w.result.draggableId!==u.draggableId)return null;var I=u.isClone,C=a.dimensions.draggables[u.draggableId],D=w.result,x=D.mode,O=JS(D),V=HF(D),j=a.dropDuration,$={duration:j,curve:Um.drop,moveTo:a.newHomeClientOffset,opacity:V?cu.opacity.drop:null,scale:V?cu.scale.drop:null};return{mapped:{type:"DRAGGING",offset:a.newHomeClientOffset,dimension:C,dropping:$,draggingOver:O,combineWith:V,mode:x,forceShouldAnimate:null,snapshot:e(x,I,O,V,$)}}}return null};return n}function ZS(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var QF={mapped:{type:"SECONDARY",offset:jt,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:ZS(null)}};function YF(){var t=Ut(function(u,d){return{x:u,y:d}}),e=Ut(ZS),r=Ut(function(u,d,f){return d===void 0&&(d=null),{mapped:{type:"SECONDARY",offset:u,combineTargetFor:d,shouldAnimateDisplacement:f,snapshot:e(d)}}}),n=function(d){return d?r(jt,d,!0):null},s=function(d,f,g,y){var _=g.displaced.visible[d],w=!!(y.inVirtualList&&y.effected[d]),I=wh(g),C=I&&I.draggableId===d?f:null;if(!_){if(!w)return n(C);if(g.displaced.invisible[d])return null;var D=ka(y.displacedBy.point),x=t(D.x,D.y);return r(x,C,!0)}if(w)return n(C);var O=g.displacedBy.point,V=t(O.x,O.y);return r(V,C,_.shouldAnimate)},a=function(d,f){if(d.isDragging)return d.critical.draggable.id===f.draggableId?null:s(f.draggableId,d.critical.draggable.id,d.impact,d.afterCritical);if(d.phase==="DROP_ANIMATING"){var g=d.completed;return g.result.draggableId===f.draggableId?null:s(f.draggableId,g.result.draggableId,g.impact,g.afterCritical)}return null};return a}var XF=function(){var e=KF(),r=YF(),n=function(a,u){return e(a,u)||r(a,u)||QF};return n},JF={dropAnimationFinished:DS},ZF=tS(XF,JF,null,{context:Hm,pure:!0,areStatePropsEqual:XS})(GF);function eb(t){var e=Wd(Qm),r=e.isUsingCloneFor;return r===t.draggableId&&!t.isClone?null:je.createElement(ZF,t)}function e4(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,r=!!t.disableInteractiveElementBlocking,n=!!t.shouldRespectForcePress;return je.createElement(eb,Ie({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:r,shouldRespectForcePress:n}))}function t4(t){var e=oe.useContext(Sh);e||le();var r=e.contextId,n=e.isMovementAllowed,s=oe.useRef(null),a=oe.useRef(null),u=t.children,d=t.droppableId,f=t.type,g=t.mode,y=t.direction,_=t.ignoreContainerClipping,w=t.isDropDisabled,I=t.isCombineEnabled,C=t.snapshot,D=t.useClone,x=t.updateViewportMaxScroll,O=t.getContainerForClone,V=ye(function(){return s.current},[]),j=ye(function(L){s.current=L},[]);ye(function(){return a.current},[]);var $=ye(function(L){a.current=L},[]),W=ye(function(){n()&&x({maxScroll:VS()})},[n,x]);xF({droppableId:d,type:f,mode:g,direction:y,isDropDisabled:w,isCombineEnabled:I,ignoreContainerClipping:_,getDroppableRef:V});var Q=je.createElement(LF,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(L){var U=L.onClose,b=L.data,be=L.animate;return je.createElement(OF,{placeholder:b,onClose:U,innerRef:$,animate:be,contextId:r,onTransitionEnd:W})}),P=qe(function(){return{innerRef:j,placeholder:Q,droppableProps:{"data-rbd-droppable-id":d,"data-rbd-droppable-context-id":r}}},[r,d,Q,j]),A=D?D.dragging.draggableId:null,R=qe(function(){return{droppableId:d,type:f,isUsingCloneFor:A}},[d,A,f]);function N(){if(!D)return null;var L=D.dragging,U=D.render,b=je.createElement(eb,{draggableId:L.draggableId,index:L.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(be,Qe){return U(be,Qe,L)});return ML.createPortal(b,O())}return je.createElement(Qm.Provider,{value:R},u(P,C),N())}var Bp=function(e,r){return e===r.droppable.type},K0=function(e,r){return r.draggables[e.draggable.id]},r4=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},r=Ie({},e,{shouldAnimatePlaceholder:!1}),n=Ut(function(u){return{draggableId:u.id,type:u.type,source:{index:u.index,droppableId:u.droppableId}}}),s=Ut(function(u,d,f,g,y,_){var w=y.descriptor.id,I=y.descriptor.droppableId===u;if(I){var C=_?{render:_,dragging:n(y.descriptor)}:null,D={isDraggingOver:f,draggingOverWith:f?w:null,draggingFromThisWith:w,isUsingPlaceholder:!0};return{placeholder:y.placeholder,shouldAnimatePlaceholder:!1,snapshot:D,useClone:C}}if(!d)return r;if(!g)return e;var x={isDraggingOver:f,draggingOverWith:w,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:y.placeholder,shouldAnimatePlaceholder:!0,snapshot:x,useClone:null}}),a=function(d,f){var g=f.droppableId,y=f.type,_=!f.isDropDisabled,w=f.renderClone;if(d.isDragging){var I=d.critical;if(!Bp(y,I))return r;var C=K0(I,d.dimensions),D=kr(d.impact)===g;return s(g,_,D,D,C,w)}if(d.phase==="DROP_ANIMATING"){var x=d.completed;if(!Bp(y,x.critical))return r;var O=K0(x.critical,d.dimensions);return s(g,_,JS(x.result)===g,kr(x.impact)===g,O,w)}if(d.phase==="IDLE"&&d.completed&&!d.shouldFlush){var V=d.completed;if(!Bp(y,V.critical))return r;var j=kr(V.impact)===g,$=!!(V.impact.at&&V.impact.at.type==="COMBINE"),W=V.critical.droppable.id===g;return j?$?e:r:W?e:r}return r};return a},n4={updateViewportMaxScroll:dM};function i4(){return document.body||le(),document.body}var o4={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:i4},tb=tS(r4,n4,null,{context:Hm,pure:!0,areStatePropsEqual:XS})(t4);tb.defaultProps=o4;const Q0=ee.div`
  width: 100%;
`,s4=ee.div`
  position: absolute;
  width: 400px;
  z-index: 999;
`,a4=ee.h1`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: 600;
`,l4=ee.form`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 100%;
  max-width: 500px;
`,xl=ee.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`,Y0=ee.input`
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
`,u4=ee.textarea`
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
`,X0=ee.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`,c4=ee.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`,Ys=ee.option``,d4=ee.button`
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
`,h4=ee.button`
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
`,f4=ee.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`,J0=ee.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: ${da.colors.lightText};
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`,Ym=({onClick:t})=>z.jsxs(f4,{type:"button",onClick:t,"aria-label":"Close",children:[z.jsx(J0,{}),z.jsx(J0,{})]});Ym.propTypes={onClick:si.func.isRequired};const p4=({setNewTaskIsOpen:t,onSubmit:e,newProjectFormData:{formTitle:r,taskTitle:n,description:s,level:a,status:u,attachFiles:d,addTask:f}})=>{const[g,y]=oe.useState({content:"",description:"",level:"",status:""}),_=w=>{w.preventDefault(),e(g)};return z.jsx(s4,{children:z.jsxs(l4,{onSubmit:_,children:[z.jsx(Ym,{onClick:()=>t(!1)}),z.jsx(a4,{children:r}),z.jsx(xl,{children:n}),z.jsx(Y0,{value:g.content,type:"text",placeholder:"e.g. Brainstorming Session",onChange:w=>y(I=>({...I,content:w.target.value}))}),z.jsx(xl,{children:s}),z.jsx(u4,{value:g.description,placeholder:"What needs to be done?",onChange:w=>y(I=>({...I,description:w.target.value}))}),z.jsxs(c4,{children:[z.jsxs(Q0,{children:[z.jsx(xl,{children:a}),z.jsxs(X0,{value:g.level,onChange:w=>y(I=>({...I,level:w.target.value})),children:[z.jsx(Ys,{children:"Low"}),z.jsx(Ys,{children:"Medium"}),z.jsx(Ys,{children:"Hight"})]})]}),z.jsxs(Q0,{children:[z.jsx(xl,{children:u}),z.jsxs(X0,{value:g.status,onChange:w=>y(I=>({...I,status:w.target.value})),children:[z.jsx(Ys,{children:"To Do"}),z.jsx(Ys,{children:"In Progress"}),z.jsx(Ys,{children:"Done"})]})]})]}),z.jsxs(xl,{htmlFor:"fileUpload",children:[d," "]}),z.jsxs(d4,{children:[z.jsx("span",{children:"📎"})," Attach Files"]}),z.jsx(Y0,{id:"fileUpload",type:"file",multiple:!0,style:{display:"none"}}),z.jsx(h4,{type:"submit",children:f})]})})},g4=async({collectionName:t,docId:e,updatedData:r})=>{try{const n=gh(yh,t,e);await bm(n,r),console.log(`✅ Документ у '${t}' оновлено (ID: ${e})`)}catch(n){console.error("❌ Помилка при оновленні документа:",n)}},Z0=async({projectId:t,updatedStartColumn:e,updatedFinishColumn:r})=>{try{const n=gh(yh,"projects",t);await bm(n,{[`columns.${e.id}.taskIds`]:e.taskIds,[`columns.${r.id}.taskIds`]:r.taskIds}),console.log("✅ Task order updated in Firestore")}catch(n){console.error("❌ Error updating task order:",n)}},m4=async({collectionName:t,docId:e})=>{try{const r=gh(yh,t,e),n=await lO(r);return n.exists()?(console.log(`📦 Документ з '${t}' отримано (ID: ${e})`),n.data()):(console.warn(`⚠️ Документ не знайдено в '${t}' (ID: ${e})`),null)}catch(r){return console.error("❌ Помилка при отриманні документа:",r),null}},v4=()=>({deleteData:async({projectId:e,taskId:r,columnId:n,currentTaskIds:s})=>{try{const a=gh(yh,"projects",e),u=s.filter(d=>d!==r);return await bm(a,{[`tasks.${r}`]:hO(),[`columns.${n}.taskIds`]:u}),console.log(`✅ Таска ${r} видалена з проєкту ${e}`),u}catch(a){throw console.error("❌ Помилка при видаленні таски:",a),a}}}),y4=()=>{const[t,e]=oe.useState(null),[r,n]=oe.useState(!1),[s,a]=oe.useState(null),{deleteData:u}=v4(),d={formTitle:"Add Task to Project",taskTitle:"Task Title",description:"Description",level:"Priority",status:"Status",attachFiles:"Attach Files",addTask:"Add Task"},f=async()=>{const x=await m4({collectionName:"projects",docId:"project-1"});e(x),console.log("initialArray:",x)};oe.useEffect(()=>{f()},[]);const g=async x=>{const O=`task-${Object.keys(t.tasks).length+1}`,V="column-1",j={id:O,...x};e($=>({...$,tasks:{...$.tasks,[O]:j},colums:{...$.colums,[V]:{...$.columns[V],taskIds:[...$.columns[V].taskIds]}}})),await g4({collectionName:"projects",docId:"project-1",updatedData:{[`tasks.${O}`]:j,[`columns.${V}.taskIds`]:[...t.columns[V].taskIds,O]}}).finally(f())},y=async(x,O)=>{console.log("taskId:",x,"columnId:",O);try{const V=await u({projectId:"project-1",taskId:x,columnId:O,currentTaskIds:t.columns[O].taskIds});e(j=>{const{[x]:$,...W}=j.tasks;return{...j,tasks:W,columns:{...j.columns,[O]:{...j.columns[O],taskIds:V}}}})}catch(V){console.error("Не вдалося видалити таску:",V)}},_=x=>{g(x)},w=(x,O)=>{y(x,O)},I=x=>{a(s===null?x:null)},C=(x,O,V,j,$)=>{const W=Array.from(x.taskIds);W.splice(V,1);const Q=Array.from(O.taskIds||[]);return Q.splice(j,0,$),{updatedStartColumn:{...x,taskIds:W},updatedFinishColumn:{...O,taskIds:Q}}},D=async x=>{const{source:O,destination:V,draggableId:j}=x;if(!V||O.droppableId===V.droppableId&&O.index===V.index)return;const $=t.columns[O.droppableId],W=t.columns[V.droppableId];if($===W){const Q=Array.from($.taskIds);Q.splice(O.index,1),Q.splice(V.index,0,j);const P={...$,taskIds:Q};e(A=>({...A,columns:{...A.columns,[P.id]:P}})),await Z0({projectId:"project-1",updatedStartColumn:P,updatedFinishColumn:P})}else{const{updatedStartColumn:Q,updatedFinishColumn:P}=C($,W,O.index,V.index,j);e(A=>({...A,columns:{...A.columns,[Q.id]:Q,[P.id]:P}})),await Z0({projectId:"project-1",updatedStartColumn:Q,updatedFinishColumn:P})}};return z.jsx(yO,{children:z.jsxs(wO,{children:[r&&z.jsx(p4,{newProjectFormData:d,setNewTaskIsOpen:n,onSubmit:_}),z.jsx(vF,{onDragEnd:D,children:t&&t.columnOrder.map(x=>{const O=t.columns[x],V=O.taskIds.map(j=>t.tasks[j]);return z.jsxs(EO,{$column:O,$tasks:V,children:[z.jsxs(IO,{$lineColor:O.lineColor,children:[z.jsxs(TO,{$lineColor:O.lineColor,children:[O.title,z.jsx(SO,{"aria-label":"State Project",children:O.taskIds.length})]}),O.id==="column-1"&&z.jsx(bO,{"aria-haspopup":"dialog","aria-controls":"new-project-popup","aria-label":"Create new project",children:z.jsx(CO,{onClick:()=>n(!0),src:"icon/add-square_icon.svg","aria-hidden":"true"})})]}),z.jsx(tb,{droppableId:O.id,children:j=>z.jsxs(AO,{ref:j.innerRef,...j.droppableProps,children:[V.map(($,W)=>z.jsx(e4,{draggableId:$.id,index:W,children:Q=>z.jsxs(PO,{...Q.draggableProps,...Q.dragHandleProps,ref:Q.innerRef,children:[z.jsxs(RO,{children:[z.jsx(xO,{"aria-label":"Project level",$levelColor:$.levelColor,$levelBg:$.levelBackgroundColor,children:$.level}),z.jsx(kO,{role:"button",onClick:()=>I($.id),children:z.jsx(NO,{src:"icon/dots_icon.svg",alt:"Menu"})}),z.jsxs(DO,{$taskMenuIsOpen:s,$taskId:$.id,children:[z.jsxs(Sp,{children:[z.jsx(bp,{src:"icon/pen_icon.png"}),"Edit Task"]}),z.jsxs(Sp,{onClick:()=>w($.id,x),children:[z.jsx(bp,{src:"icon/delete_icon.png"}),"Delete Task"]}),z.jsxs(Sp,{children:[z.jsx(bp,{src:"icon/right-arrow_icon.png"}),"Move to Column"]})]})]}),z.jsxs(OO,{children:[z.jsx(LO,{children:$.content}),$!=null&&$.image?z.jsx(_O,{children:z.jsx(VO,{src:$.image,alt:$.content||"Project image"})}):z.jsx(MO,{children:$.description||"No Description Available"})]}),z.jsxs(FO,{children:[z.jsx(BO,{children:z.jsx("img",{src:"image/Group 633.png",alt:"Persons"})}),z.jsxs(UO,{children:[z.jsxs(jO,{children:[z.jsx("img",{src:"icon/comments_icon.svg",alt:"Comments"}),"10 comments"]}),z.jsxs($O,{children:[z.jsx("img",{src:"icon/folder_icon.svg",alt:"Folder"}),"3 files"]})]})]})]})},$.id)),j.placeholder,O.taskIds.length===0&&z.jsx(zO,{style:{textAlign:"center",color:"#aaa"},children:"Drop tasks here"})]})})]},O.id)})})]})})},_4=()=>z.jsx(vO,{children:z.jsx(y4,{})}),w4=ee.main`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:t})=>t.headerSize.desktopHeight};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: ${({theme:t})=>t.headerSize.mobileHeight};
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: ${({theme:t})=>t.headerSize.tabletHeight};
  }
`,E4=ee.div`
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
`,rb=({isSidebarOpen:t})=>z.jsx(w4,{children:z.jsx(vA,{children:z.jsx(E4,{$isSidebarOpen:t,children:z.jsx(_4,{})})})});rb.propTypes={isSidebarOpen:si.bool.isRequired,sidebarRef:si.any};const I4=t=>{const[e,r]=oe.useState(!1),n=oe.useCallback(()=>{r(window.innerWidth<=t)},[t]);return oe.useEffect(()=>{if(typeof window>"u")return;let s;const a=()=>{clearTimeout(s),s=setTimeout(n,0)};return window.addEventListener("resize",a),n(),()=>{window.removeEventListener("resize",a)}},[n]),e},T4=(t=!1)=>{const e=I4(700),[r,n]=oe.useState(e?!1:t),s=()=>n(a=>!a);return oe.useEffect(()=>{n(!e)},[e]),[r,s,e]};function S4(t){const[e,r]=oe.useState(!1);return oe.useEffect(()=>{function n(s){const a=t.every(u=>u.current&&!u.current.contains(s.target));r(a)}return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[t]),e}const b4=()=>{const{setIsLoggedIn:t,mode:e,setMode:r,setShowLoginForm:n,setLoggedUser:s}=oe.useContext(Sa),[a,u]=oe.useState({email:"",password:"",confirmPassword:""}),[d,f]=oe.useState("");oe.useEffect(()=>{const w=DR(cd,I=>{I?(s(I),t(!0)):(s(null),t(!1)),console.log("User:",I)});return()=>w()},[]);const g=()=>{r(w=>w==="login"?"register":"login")},y=w=>{if(w.preventDefault(),e==="register"&&a.password!==a.confirmPassword){f("Passwords do not match"),setTimeout(()=>f(""),5e3);return}switch(e){case"login":RR(cd,a.email,a.password).then(()=>{t(!0),n(!1)}).catch(I=>{console.log(I),t(!1),f("User not defined")}).finally(()=>{setTimeout(()=>f(""),5e3)});break;case"register":PR(cd,a.email,a.password).then(()=>{t(!0),n(!1)}).catch(I=>f(I));break}},_=w=>{const{name:I,value:C}=w.target;u(D=>({...D,[I]:C}))};return z.jsx(zA,{children:z.jsxs(WA,{onSubmit:y,children:[z.jsx(QA,{children:z.jsx(Ym,{onClick:()=>n(!1)})}),z.jsx(GA,{children:e==="login"?"Login":"Register"}),z.jsxs(k_,{children:["To log in, use the email: ",z.jsx("br",{})," ",z.jsx("span",{children:"projectm@example.com"})," ",z.jsx("br",{})," and password: ",z.jsx("br",{}),z.jsx("span",{children:"123456"})]}),d&&z.jsx(k_,{children:d}),z.jsx(dp,{children:z.jsx(hp,{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:_,required:!0})}),z.jsx(dp,{children:z.jsx(hp,{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:_,required:!0})}),e==="register"&&z.jsx(dp,{children:z.jsx(hp,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:a.confirmPassword,onChange:_,required:!0})}),z.jsx(Og,{type:"submit",children:e==="login"?"Sign in":"Sign up"}),z.jsxs(qA,{children:[e==="login"?"Don't have an account? ":"Already have an account? ",z.jsx(KA,{onClick:g,children:e==="login"?"Sign up":"Sign in"})]})]})})},C4=ee.main`
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
`,A4=ee.section`
  display: flex;
  max-width: 1280px;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    display: block;
    text-align: center;
  }
`,P4=ee.div`
  margin-right: 2rem;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`,R4=ee.h1`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 1.1;
`,x4=ee.p`
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.5;
`,k4=ee(Og)`
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 150px;
  background-color: #000000;
`,D4=ee.div`
`,N4=ee.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`,O4=()=>{const{showLoginForm:t,setShowLoginForm:e}=oe.useContext(Sa),r=()=>{e(n=>!n)};return z.jsxs(C4,{children:[t&&z.jsx(b4,{}),z.jsxs(A4,{children:[z.jsxs(P4,{children:[z.jsx(R4,{children:"Manage your projects with ease"}),z.jsx(x4,{children:"Functional components to easily create modern UI. Enable date tracking to get an overview of project timelines."}),z.jsx(k4,{onClick:r,"aria-label":"Button for open login form",role:"Open login form",children:"Get Started"})]}),z.jsx(D4,{children:z.jsx(N4,{src:"image/Hero_img.png",alt:"Hero image"})})]})]})},L4=ee.div`
  padding: 0 0 2rem 1rem;
  border-bottom: ${({theme:t})=>t.colors.borderLineColor};
`,M4=ee.ul`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`,V4=ee.li`
  cursor: pointer;
  list-style: none;
  img {
    margin-right: 1rem;
  }
`,F4=[{id:1,name:"Home",icon:"icon/home_icon.svg"},{id:2,name:"Massages",icon:"icon/message_icon.svg"},{id:3,name:"Tasks",icon:"icon/task_icon.svg"},{id:4,name:"Members",icon:"icon/members_icon.svg"},{id:5,name:"Settings",icon:"icon/settings_icon.svg"}];function B4(){return z.jsx(L4,{children:z.jsx(M4,{children:F4.map(t=>z.jsxs(V4,{children:[z.jsx("img",{src:t.icon,alt:t.name}),z.jsx("a",{href:"#",children:z.jsx("span",{children:t.name})})]},t.id))})})}const U4=ee.div`
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
`,j4=ee.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`,$4=ee.h3`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
`,z4=ee.p`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`,W4=ee.input`
  width: 10rem;
  height: 3rem;
  border-radius: 16px;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`,G4=()=>z.jsxs(U4,{children:[z.jsx(j4,{}),z.jsx($4,{children:"Thoughts Time"}),z.jsx(z4,{children:"We don’t have any notice for you, till then you can share your thoughts with your peers."}),z.jsx(W4,{type:"text",placeholder:"Write a message"})]}),H4=ee.div`
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
`,q4=ee.div`
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
`,K4=ee.div`
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
`,Q4=ee.div`
  display: none;
`,Y4=[{id:1,name:"Mobile App",description:"Description for Mobile App",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:2,name:"Website Redesign",description:"Description for Website Redesign",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:3,name:"Design System",description:"Description for Design System",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:4,name:"Wireframes",description:"Description for Wireframes",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"}],X4=()=>z.jsxs(q4,{children:[z.jsxs(H4,{children:[z.jsx("h2",{children:"My projects"}),z.jsx("button",{className:"add-project",children:z.jsx("img",{src:"icon/plus_icon.svg",alt:"Add Project"})})]}),z.jsx("ul",{children:Y4.map(t=>z.jsxs("li",{children:[z.jsxs(K4,{children:[z.jsxs("a",{href:"#","aria-label":"Go to project",className:"project-item",children:[z.jsx("div",{className:"project-status","aria-hidden":"true"}),z.jsx("h3",{children:t.name})]}),z.jsx("button",{children:z.jsx("img",{src:"icon/dots_icon.svg",alt:"Submenu icon"})})]}),z.jsxs(Q4,{children:[z.jsx("p",{children:t.description}),z.jsx("p",{children:t.createdAt}),z.jsx("p",{children:t.updatedAt}),z.jsx("p",{children:t.status})]})]},t.id))})]}),Xm=oe.forwardRef(({isSidebarOpen:t},e)=>z.jsx(wA,{ref:e,$isSidebarOpen:t,children:z.jsxs(EA,{children:[z.jsx(B4,{}),z.jsx(X4,{}),z.jsx(G4,{})]})}));Xm.displayName="Sidebar";Xm.propTypes={isSidebarOpen:si.bool.isRequired,onToggleSidebar:si.func,sidebarRef:si.any};const J4=()=>{const[t,e,r]=T4(),n=oe.useRef(null),s=oe.useRef(null);S4([n,s])&&t&&r&&e();const{isLoggedIn:u}=oe.useContext(Sa);return z.jsxs(fA,{theme:da,children:[z.jsx(yA,{$isSidebarOpen:t}),z.jsx(Cm,{ref:n,onToggleSidebar:e,isSidebarOpen:t}),u?z.jsxs(z.Fragment,{children:[z.jsx(Xm,{isSidebarOpen:t,ref:s}),z.jsx(rb,{isSidebarOpen:t,sidebarRef:s})]}):z.jsx(O4,{})]})},nb=({children:t})=>{const[e,r]=oe.useState(!1),[n,s]=oe.useState(!1),[a,u]=oe.useState("login"),[d,f]=oe.useState(null);return z.jsx(Sa.Provider,{value:{isLoggedIn:e,setIsLoggedIn:r,showLoginForm:n,setShowLoginForm:s,mode:a,setMode:u,loggedUser:d,setLoggedUser:f},children:t})};nb.propTypes={children:si.node.isRequired};pC.createRoot(document.getElementById("root")).render(z.jsx(nb,{children:z.jsx(J4,{})}));
