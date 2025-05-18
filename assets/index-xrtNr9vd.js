(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();function qd(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jf={exports:{}},Cl={},Zf={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yy;function iC(){if(Yy)return Be;Yy=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),_=Symbol.iterator;function w(V){return V===null||typeof V!="object"?null:(V=_&&V[_]||V["@@iterator"],typeof V=="function"?V:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,k={};function D(V,Y,pe){this.props=V,this.context=Y,this.refs=k,this.updater=pe||I}D.prototype.isReactComponent={},D.prototype.setState=function(V,Y){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,Y,"setState")},D.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function F(){}F.prototype=D.prototype;function U(V,Y,pe){this.props=V,this.context=Y,this.refs=k,this.updater=pe||I}var W=U.prototype=new F;W.constructor=U,b(W,D.prototype),W.isPureReactComponent=!0;var q=Array.isArray,G=Object.prototype.hasOwnProperty,X={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function A(V,Y,pe){var Pe,we={},xe=null,Oe=null;if(Y!=null)for(Pe in Y.ref!==void 0&&(Oe=Y.ref),Y.key!==void 0&&(xe=""+Y.key),Y)G.call(Y,Pe)&&!R.hasOwnProperty(Pe)&&(we[Pe]=Y[Pe]);var Ne=arguments.length-2;if(Ne===1)we.children=pe;else if(1<Ne){for(var Fe=Array(Ne),et=0;et<Ne;et++)Fe[et]=arguments[et+2];we.children=Fe}if(V&&V.defaultProps)for(Pe in Ne=V.defaultProps,Ne)we[Pe]===void 0&&(we[Pe]=Ne[Pe]);return{$$typeof:t,type:V,key:xe,ref:Oe,props:we,_owner:X.current}}function P(V,Y){return{$$typeof:t,type:V.type,key:Y,ref:V.ref,props:V.props,_owner:V._owner}}function N(V){return typeof V=="object"&&V!==null&&V.$$typeof===t}function O(V){var Y={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(pe){return Y[pe]})}var B=/\/+/g;function C(V,Y){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):Y.toString(36)}function be(V,Y,pe,Pe,we){var xe=typeof V;(xe==="undefined"||xe==="boolean")&&(V=null);var Oe=!1;if(V===null)Oe=!0;else switch(xe){case"string":case"number":Oe=!0;break;case"object":switch(V.$$typeof){case t:case e:Oe=!0}}if(Oe)return Oe=V,we=we(Oe),V=Pe===""?"."+C(Oe,0):Pe,q(we)?(pe="",V!=null&&(pe=V.replace(B,"$&/")+"/"),be(we,Y,pe,"",function(et){return et})):we!=null&&(N(we)&&(we=P(we,pe+(!we.key||Oe&&Oe.key===we.key?"":(""+we.key).replace(B,"$&/")+"/")+V)),Y.push(we)),1;if(Oe=0,Pe=Pe===""?".":Pe+":",q(V))for(var Ne=0;Ne<V.length;Ne++){xe=V[Ne];var Fe=Pe+C(xe,Ne);Oe+=be(xe,Y,pe,Fe,we)}else if(Fe=w(V),typeof Fe=="function")for(V=Fe.call(V),Ne=0;!(xe=V.next()).done;)xe=xe.value,Fe=Pe+C(xe,Ne++),Oe+=be(xe,Y,pe,Fe,we);else if(xe==="object")throw Y=String(V),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return Oe}function Qe(V,Y,pe){if(V==null)return V;var Pe=[],we=0;return be(V,Pe,"","",function(xe){return Y.call(pe,xe,we++)}),Pe}function Ye(V){if(V._status===-1){var Y=V._result;Y=Y(),Y.then(function(pe){(V._status===0||V._status===-1)&&(V._status=1,V._result=pe)},function(pe){(V._status===0||V._status===-1)&&(V._status=2,V._result=pe)}),V._status===-1&&(V._status=0,V._result=Y)}if(V._status===1)return V._result.default;throw V._result}var Me={current:null},ie={transition:null},ce={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ie,ReactCurrentOwner:X};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Be.Children={map:Qe,forEach:function(V,Y,pe){Qe(V,function(){Y.apply(this,arguments)},pe)},count:function(V){var Y=0;return Qe(V,function(){Y++}),Y},toArray:function(V){return Qe(V,function(Y){return Y})||[]},only:function(V){if(!N(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Be.Component=D,Be.Fragment=r,Be.Profiler=s,Be.PureComponent=U,Be.StrictMode=n,Be.Suspense=f,Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Be.act=ae,Be.cloneElement=function(V,Y,pe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Pe=b({},V.props),we=V.key,xe=V.ref,Oe=V._owner;if(Y!=null){if(Y.ref!==void 0&&(xe=Y.ref,Oe=X.current),Y.key!==void 0&&(we=""+Y.key),V.type&&V.type.defaultProps)var Ne=V.type.defaultProps;for(Fe in Y)G.call(Y,Fe)&&!R.hasOwnProperty(Fe)&&(Pe[Fe]=Y[Fe]===void 0&&Ne!==void 0?Ne[Fe]:Y[Fe])}var Fe=arguments.length-2;if(Fe===1)Pe.children=pe;else if(1<Fe){Ne=Array(Fe);for(var et=0;et<Fe;et++)Ne[et]=arguments[et+2];Pe.children=Ne}return{$$typeof:t,type:V.type,key:we,ref:xe,props:Pe,_owner:Oe}},Be.createContext=function(V){return V={$$typeof:u,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Be.createElement=A,Be.createFactory=function(V){var Y=A.bind(null,V);return Y.type=V,Y},Be.createRef=function(){return{current:null}},Be.forwardRef=function(V){return{$$typeof:d,render:V}},Be.isValidElement=N,Be.lazy=function(V){return{$$typeof:y,_payload:{_status:-1,_result:V},_init:Ye}},Be.memo=function(V,Y){return{$$typeof:g,type:V,compare:Y===void 0?null:Y}},Be.startTransition=function(V){var Y=ie.transition;ie.transition={};try{V()}finally{ie.transition=Y}},Be.unstable_act=ae,Be.useCallback=function(V,Y){return Me.current.useCallback(V,Y)},Be.useContext=function(V){return Me.current.useContext(V)},Be.useDebugValue=function(){},Be.useDeferredValue=function(V){return Me.current.useDeferredValue(V)},Be.useEffect=function(V,Y){return Me.current.useEffect(V,Y)},Be.useId=function(){return Me.current.useId()},Be.useImperativeHandle=function(V,Y,pe){return Me.current.useImperativeHandle(V,Y,pe)},Be.useInsertionEffect=function(V,Y){return Me.current.useInsertionEffect(V,Y)},Be.useLayoutEffect=function(V,Y){return Me.current.useLayoutEffect(V,Y)},Be.useMemo=function(V,Y){return Me.current.useMemo(V,Y)},Be.useReducer=function(V,Y,pe){return Me.current.useReducer(V,Y,pe)},Be.useRef=function(V){return Me.current.useRef(V)},Be.useState=function(V){return Me.current.useState(V)},Be.useSyncExternalStore=function(V,Y,pe){return Me.current.useSyncExternalStore(V,Y,pe)},Be.useTransition=function(){return Me.current.useTransition()},Be.version="18.3.1",Be}var Xy;function Tg(){return Xy||(Xy=1,Zf.exports=iC()),Zf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jy;function oC(){if(Jy)return Cl;Jy=1;var t=Tg(),e=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,g){var y,_={},w=null,I=null;g!==void 0&&(w=""+g),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(I=f.ref);for(y in f)n.call(f,y)&&!a.hasOwnProperty(y)&&(_[y]=f[y]);if(d&&d.defaultProps)for(y in f=d.defaultProps,f)_[y]===void 0&&(_[y]=f[y]);return{$$typeof:e,type:d,key:w,ref:I,props:_,_owner:s.current}}return Cl.Fragment=r,Cl.jsx=u,Cl.jsxs=u,Cl}var Zy;function sC(){return Zy||(Zy=1,Jf.exports=oC()),Jf.exports}var j=sC(),Mc={},ep={exports:{}},mr={},tp={exports:{}},rp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function aC(){return e_||(e_=1,function(t){function e(ie,ce){var ae=ie.length;ie.push(ce);e:for(;0<ae;){var V=ae-1>>>1,Y=ie[V];if(0<s(Y,ce))ie[V]=ce,ie[ae]=Y,ae=V;else break e}}function r(ie){return ie.length===0?null:ie[0]}function n(ie){if(ie.length===0)return null;var ce=ie[0],ae=ie.pop();if(ae!==ce){ie[0]=ae;e:for(var V=0,Y=ie.length,pe=Y>>>1;V<pe;){var Pe=2*(V+1)-1,we=ie[Pe],xe=Pe+1,Oe=ie[xe];if(0>s(we,ae))xe<Y&&0>s(Oe,we)?(ie[V]=Oe,ie[xe]=ae,V=xe):(ie[V]=we,ie[Pe]=ae,V=Pe);else if(xe<Y&&0>s(Oe,ae))ie[V]=Oe,ie[xe]=ae,V=xe;else break e}}return ce}function s(ie,ce){var ae=ie.sortIndex-ce.sortIndex;return ae!==0?ae:ie.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();t.unstable_now=function(){return u.now()-d}}var f=[],g=[],y=1,_=null,w=3,I=!1,b=!1,k=!1,D=typeof setTimeout=="function"?setTimeout:null,F=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(ie){for(var ce=r(g);ce!==null;){if(ce.callback===null)n(g);else if(ce.startTime<=ie)n(g),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=r(g)}}function q(ie){if(k=!1,W(ie),!b)if(r(f)!==null)b=!0,Ye(G);else{var ce=r(g);ce!==null&&Me(q,ce.startTime-ie)}}function G(ie,ce){b=!1,k&&(k=!1,F(A),A=-1),I=!0;var ae=w;try{for(W(ce),_=r(f);_!==null&&(!(_.expirationTime>ce)||ie&&!O());){var V=_.callback;if(typeof V=="function"){_.callback=null,w=_.priorityLevel;var Y=V(_.expirationTime<=ce);ce=t.unstable_now(),typeof Y=="function"?_.callback=Y:_===r(f)&&n(f),W(ce)}else n(f);_=r(f)}if(_!==null)var pe=!0;else{var Pe=r(g);Pe!==null&&Me(q,Pe.startTime-ce),pe=!1}return pe}finally{_=null,w=ae,I=!1}}var X=!1,R=null,A=-1,P=5,N=-1;function O(){return!(t.unstable_now()-N<P)}function B(){if(R!==null){var ie=t.unstable_now();N=ie;var ce=!0;try{ce=R(!0,ie)}finally{ce?C():(X=!1,R=null)}}else X=!1}var C;if(typeof U=="function")C=function(){U(B)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Qe=be.port2;be.port1.onmessage=B,C=function(){Qe.postMessage(null)}}else C=function(){D(B,0)};function Ye(ie){R=ie,X||(X=!0,C())}function Me(ie,ce){A=D(function(){ie(t.unstable_now())},ce)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(ie){ie.callback=null},t.unstable_continueExecution=function(){b||I||(b=!0,Ye(G))},t.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<ie?Math.floor(1e3/ie):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return r(f)},t.unstable_next=function(ie){switch(w){case 1:case 2:case 3:var ce=3;break;default:ce=w}var ae=w;w=ce;try{return ie()}finally{w=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(ie,ce){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var ae=w;w=ie;try{return ce()}finally{w=ae}},t.unstable_scheduleCallback=function(ie,ce,ae){var V=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?V+ae:V):ae=V,ie){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ae+Y,ie={id:y++,callback:ce,priorityLevel:ie,startTime:ae,expirationTime:Y,sortIndex:-1},ae>V?(ie.sortIndex=ae,e(g,ie),r(f)===null&&ie===r(g)&&(k?(F(A),A=-1):k=!0,Me(q,ae-V))):(ie.sortIndex=Y,e(f,ie),b||I||(b=!0,Ye(G))),ie},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(ie){var ce=w;return function(){var ae=w;w=ce;try{return ie.apply(this,arguments)}finally{w=ae}}}}(rp)),rp}var t_;function lC(){return t_||(t_=1,tp.exports=aC()),tp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function uC(){if(r_)return mr;r_=1;var t=Tg(),e=lC();function r(i){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var n=new Set,s={};function a(i,o){u(i,o),u(i+"Capture",o)}function u(i,o){for(s[i]=o,i=0;i<o.length;i++)n.add(o[i])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},_={};function w(i){return f.call(_,i)?!0:f.call(y,i)?!1:g.test(i)?_[i]=!0:(y[i]=!0,!1)}function I(i,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function b(i,o,l,h){if(o===null||typeof o>"u"||I(i,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function k(i,o,l,h,p,v,S){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=o,this.sanitizeURL=v,this.removeEmptyString=S}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){D[i]=new k(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var o=i[0];D[o]=new k(o,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){D[i]=new k(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){D[i]=new k(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){D[i]=new k(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){D[i]=new k(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){D[i]=new k(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){D[i]=new k(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){D[i]=new k(i,5,!1,i.toLowerCase(),null,!1,!1)});var F=/[\-:]([a-z])/g;function U(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var o=i.replace(F,U);D[o]=new k(o,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var o=i.replace(F,U);D[o]=new k(o,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var o=i.replace(F,U);D[o]=new k(o,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){D[i]=new k(i,1,!1,i.toLowerCase(),null,!1,!1)}),D.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){D[i]=new k(i,1,!1,i.toLowerCase(),null,!0,!0)});function W(i,o,l,h){var p=D.hasOwnProperty(o)?D[o]:null;(p!==null?p.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(b(o,l,p,h)&&(l=null),h||p===null?w(o)&&(l===null?i.removeAttribute(o):i.setAttribute(o,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(o=p.attributeName,h=p.attributeNamespace,l===null?i.removeAttribute(o):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,h?i.setAttributeNS(h,o,l):i.setAttribute(o,l))))}var q=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),X=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),O=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Qe=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),ie=Symbol.iterator;function ce(i){return i===null||typeof i!="object"?null:(i=ie&&i[ie]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,V;function Y(i){if(V===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+i}var pe=!1;function Pe(i,o){if(!i||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(K){var h=K}Reflect.construct(i,[],o)}else{try{o.call()}catch(K){h=K}i.call(o.prototype)}else{try{throw Error()}catch(K){h=K}i()}}catch(K){if(K&&h&&typeof K.stack=="string"){for(var p=K.stack.split(`
`),v=h.stack.split(`
`),S=p.length-1,x=v.length-1;1<=S&&0<=x&&p[S]!==v[x];)x--;for(;1<=S&&0<=x;S--,x--)if(p[S]!==v[x]){if(S!==1||x!==1)do if(S--,x--,0>x||p[S]!==v[x]){var L=`
`+p[S].replace(" at new "," at ");return i.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",i.displayName)),L}while(1<=S&&0<=x);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Y(i):""}function we(i){switch(i.tag){case 5:return Y(i.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return i=Pe(i.type,!1),i;case 11:return i=Pe(i.type.render,!1),i;case 1:return i=Pe(i.type,!0),i;default:return""}}function xe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case R:return"Fragment";case X:return"Portal";case P:return"Profiler";case A:return"StrictMode";case C:return"Suspense";case be:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case O:return(i.displayName||"Context")+".Consumer";case N:return(i._context.displayName||"Context")+".Provider";case B:var o=i.render;return i=i.displayName,i||(i=o.displayName||o.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Qe:return o=i.displayName||null,o!==null?o:xe(i.type)||"Memo";case Ye:o=i._payload,i=i._init;try{return xe(i(o))}catch{}}return null}function Oe(i){var o=i.type;switch(i.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=o.render,i=i.displayName||i.name||"",o.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(o);case 8:return o===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ne(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Fe(i){var o=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function et(i){var o=Fe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,o),h=""+i[o];if(!i.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(i,o,{configurable:!0,get:function(){return p.call(this)},set:function(S){h=""+S,v.call(this,S)}}),Object.defineProperty(i,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(S){h=""+S},stopTracking:function(){i._valueTracker=null,delete i[o]}}}}function kt(i){i._valueTracker||(i._valueTracker=et(i))}function Dt(i){if(!i)return!1;var o=i._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return i&&(h=Fe(i)?i.checked?"true":"false":i.value),i=h,i!==l?(o.setValue(i),!0):!1}function Dr(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function Nr(i,o){var l=o.checked;return ae({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Fn(i,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Ne(o.value!=null?o.value:l),i._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Bn(i,o){o=o.checked,o!=null&&W(i,"checked",o,!1)}function Un(i,o){Bn(i,o);var l=Ne(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(h==="submit"||h==="reset"){i.removeAttribute("value");return}o.hasOwnProperty("value")?Or(i,o.type,l):o.hasOwnProperty("defaultValue")&&Or(i,o.type,Ne(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(i.defaultChecked=!!o.defaultChecked)}function os(i,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+i._wrapperState.initialValue,l||o===i.value||(i.value=o),i.defaultValue=o}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Or(i,o,l){(o!=="number"||Dr(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var wr=Array.isArray;function jn(i,o,l,h){if(i=i.options,o){o={};for(var p=0;p<l.length;p++)o["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=o.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&h&&(i[l].defaultSelected=!0)}else{for(l=""+Ne(l),o=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,h&&(i[p].defaultSelected=!0);return}o!==null||i[p].disabled||(o=i[p])}o!==null&&(o.selected=!0)}}function Oa(i,o){if(o.dangerouslySetInnerHTML!=null)throw Error(r(91));return ae({},o,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function ss(i,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(r(92));if(wr(l)){if(1<l.length)throw Error(r(93));l=l[0]}o=l}o==null&&(o=""),l=o}i._wrapperState={initialValue:Ne(l)}}function as(i,o){var l=Ne(o.value),h=Ne(o.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),o.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),h!=null&&(i.defaultValue=""+h)}function La(i){var o=i.textContent;o===i._wrapperState.initialValue&&o!==""&&o!==null&&(i.value=o)}function St(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tt(i,o){return i==null||i==="http://www.w3.org/1999/xhtml"?St(o):i==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var $n,Ma=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,p){MSApp.execUnsafeLocalFunction(function(){return i(o,l,h,p)})}:i}(function(i,o){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=o;else{for($n=$n||document.createElement("div"),$n.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=$n.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;o.firstChild;)i.appendChild(o.firstChild)}});function pi(i,o){if(o){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=o;return}}i.textContent=o}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fo=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(i){fo.forEach(function(o){o=o+i.charAt(0).toUpperCase()+i.substring(1),ho[o]=ho[i]})});function Va(i,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ho.hasOwnProperty(i)&&ho[i]?(""+o).trim():o+"px"}function Fa(i,o){i=i.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,p=Va(l,o[l],h);l==="float"&&(l="cssFloat"),h?i.setProperty(l,p):i[l]=p}}var Ba=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ua(i,o){if(o){if(Ba[i]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(r(137,i));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(r(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(r(61))}if(o.style!=null&&typeof o.style!="object")throw Error(r(62))}}function ja(i,o){if(i.indexOf("-")===-1)return typeof o.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var po=null;function ls(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var us=null,Lr=null,_n=null;function cs(i){if(i=dl(i)){if(typeof us!="function")throw Error(r(280));var o=i.stateNode;o&&(o=Xu(o),us(i.stateNode,i.type,o))}}function wn(i){Lr?_n?_n.push(i):_n=[i]:Lr=i}function $a(){if(Lr){var i=Lr,o=_n;if(_n=Lr=null,cs(i),o)for(i=0;i<o.length;i++)cs(o[i])}}function go(i,o){return i(o)}function za(){}var zn=!1;function Wa(i,o,l){if(zn)return i(o,l);zn=!0;try{return go(i,o,l)}finally{zn=!1,(Lr!==null||_n!==null)&&(za(),$a())}}function mt(i,o){var l=i.stateNode;if(l===null)return null;var h=Xu(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(i=i.type,h=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!h;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(r(231,o,typeof l));return l}var ds=!1;if(d)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){ds=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{ds=!1}function mo(i,o,l,h,p,v,S,x,L){var K=Array.prototype.slice.call(arguments,3);try{o.apply(l,K)}catch(ee){this.onError(ee)}}var vo=!1,hs=null,Jr=!1,Ga=null,bh={onError:function(i){vo=!0,hs=i}};function fs(i,o,l,h,p,v,S,x,L){vo=!1,hs=null,mo.apply(bh,arguments)}function Iu(i,o,l,h,p,v,S,x,L){if(fs.apply(this,arguments),vo){if(vo){var K=hs;vo=!1,hs=null}else throw Error(r(198));Jr||(Jr=!0,Ga=K)}}function Zr(i){var o=i,l=i;if(i.alternate)for(;o.return;)o=o.return;else{i=o;do o=i,(o.flags&4098)!==0&&(l=o.return),i=o.return;while(i)}return o.tag===3?l:null}function yo(i){if(i.tag===13){var o=i.memoizedState;if(o===null&&(i=i.alternate,i!==null&&(o=i.memoizedState)),o!==null)return o.dehydrated}return null}function en(i){if(Zr(i)!==i)throw Error(r(188))}function Su(i){var o=i.alternate;if(!o){if(o=Zr(i),o===null)throw Error(r(188));return o!==i?null:i}for(var l=i,h=o;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(h=p.return,h!==null){l=h;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return en(p),i;if(v===h)return en(p),o;v=v.sibling}throw Error(r(188))}if(l.return!==h.return)l=p,h=v;else{for(var S=!1,x=p.child;x;){if(x===l){S=!0,l=p,h=v;break}if(x===h){S=!0,h=p,l=v;break}x=x.sibling}if(!S){for(x=v.child;x;){if(x===l){S=!0,l=v,h=p;break}if(x===h){S=!0,h=v,l=p;break}x=x.sibling}if(!S)throw Error(r(189))}}if(l.alternate!==h)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?i:o}function Ha(i){return i=Su(i),i!==null?ps(i):null}function ps(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var o=ps(i);if(o!==null)return o;i=i.sibling}return null}var gs=e.unstable_scheduleCallback,qa=e.unstable_cancelCallback,Tu=e.unstable_shouldYield,Ch=e.unstable_requestPaint,it=e.unstable_now,bu=e.unstable_getCurrentPriorityLevel,_o=e.unstable_ImmediatePriority,gi=e.unstable_UserBlockingPriority,Mr=e.unstable_NormalPriority,Ka=e.unstable_LowPriority,Cu=e.unstable_IdlePriority,wo=null,Er=null;function Au(i){if(Er&&typeof Er.onCommitFiberRoot=="function")try{Er.onCommitFiberRoot(wo,i,void 0,(i.current.flags&128)===128)}catch{}}var ir=Math.clz32?Math.clz32:Ru,Qa=Math.log,Pu=Math.LN2;function Ru(i){return i>>>=0,i===0?32:31-(Qa(i)/Pu|0)|0}var ms=64,vs=4194304;function mi(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Eo(i,o){var l=i.pendingLanes;if(l===0)return 0;var h=0,p=i.suspendedLanes,v=i.pingedLanes,S=l&268435455;if(S!==0){var x=S&~p;x!==0?h=mi(x):(v&=S,v!==0&&(h=mi(v)))}else S=l&~p,S!==0?h=mi(S):v!==0&&(h=mi(v));if(h===0)return 0;if(o!==0&&o!==h&&(o&p)===0&&(p=h&-h,v=o&-o,p>=v||p===16&&(v&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=i.entangledLanes,o!==0)for(i=i.entanglements,o&=h;0<o;)l=31-ir(o),p=1<<l,h|=i[l],o&=~p;return h}function Ah(i,o){switch(i){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wn(i,o){for(var l=i.suspendedLanes,h=i.pingedLanes,p=i.expirationTimes,v=i.pendingLanes;0<v;){var S=31-ir(v),x=1<<S,L=p[S];L===-1?((x&l)===0||(x&h)!==0)&&(p[S]=Ah(x,o)):L<=o&&(i.expiredLanes|=x),v&=~x}}function Ir(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Io(){var i=ms;return ms<<=1,(ms&4194240)===0&&(ms=64),i}function vi(i){for(var o=[],l=0;31>l;l++)o.push(i);return o}function yi(i,o,l){i.pendingLanes|=o,o!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,o=31-ir(o),i[o]=l}function nt(i,o){var l=i.pendingLanes&~o;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=o,i.mutableReadLanes&=o,i.entangledLanes&=o,o=i.entanglements;var h=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-ir(l),v=1<<p;o[p]=0,h[p]=-1,i[p]=-1,l&=~v}}function _i(i,o){var l=i.entangledLanes|=o;for(i=i.entanglements;l;){var h=31-ir(l),p=1<<h;p&o|i[h]&o&&(i[h]|=o),l&=~p}}var ze=0;function wi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var xu,ys,ku,Du,Nu,Ya=!1,En=[],$t=null,tn=null,rn=null,Ei=new Map,Vr=new Map,In=[],Ph="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ou(i,o){switch(i){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":tn=null;break;case"mouseover":case"mouseout":rn=null;break;case"pointerover":case"pointerout":Ei.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(o.pointerId)}}function ur(i,o,l,h,p,v){return i===null||i.nativeEvent!==v?(i={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:v,targetContainers:[p]},o!==null&&(o=dl(o),o!==null&&ys(o)),i):(i.eventSystemFlags|=h,o=i.targetContainers,p!==null&&o.indexOf(p)===-1&&o.push(p),i)}function Rh(i,o,l,h,p){switch(o){case"focusin":return $t=ur($t,i,o,l,h,p),!0;case"dragenter":return tn=ur(tn,i,o,l,h,p),!0;case"mouseover":return rn=ur(rn,i,o,l,h,p),!0;case"pointerover":var v=p.pointerId;return Ei.set(v,ur(Ei.get(v)||null,i,o,l,h,p)),!0;case"gotpointercapture":return v=p.pointerId,Vr.set(v,ur(Vr.get(v)||null,i,o,l,h,p)),!0}return!1}function Lu(i){var o=Ao(i.target);if(o!==null){var l=Zr(o);if(l!==null){if(o=l.tag,o===13){if(o=yo(l),o!==null){i.blockedOn=o,Nu(i.priority,function(){ku(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Gn(i){if(i.blockedOn!==null)return!1;for(var o=i.targetContainers;0<o.length;){var l=_s(i.domEventName,i.eventSystemFlags,o[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var h=new l.constructor(l.type,l);po=h,l.target.dispatchEvent(h),po=null}else return o=dl(l),o!==null&&ys(o),i.blockedOn=l,!1;o.shift()}return!0}function So(i,o,l){Gn(i)&&l.delete(o)}function Mu(){Ya=!1,$t!==null&&Gn($t)&&($t=null),tn!==null&&Gn(tn)&&(tn=null),rn!==null&&Gn(rn)&&(rn=null),Ei.forEach(So),Vr.forEach(So)}function nn(i,o){i.blockedOn===o&&(i.blockedOn=null,Ya||(Ya=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Mu)))}function on(i){function o(p){return nn(p,i)}if(0<En.length){nn(En[0],i);for(var l=1;l<En.length;l++){var h=En[l];h.blockedOn===i&&(h.blockedOn=null)}}for($t!==null&&nn($t,i),tn!==null&&nn(tn,i),rn!==null&&nn(rn,i),Ei.forEach(o),Vr.forEach(o),l=0;l<In.length;l++)h=In[l],h.blockedOn===i&&(h.blockedOn=null);for(;0<In.length&&(l=In[0],l.blockedOn===null);)Lu(l),l.blockedOn===null&&In.shift()}var Hn=q.ReactCurrentBatchConfig,Ii=!0;function ut(i,o,l,h){var p=ze,v=Hn.transition;Hn.transition=null;try{ze=1,Xa(i,o,l,h)}finally{ze=p,Hn.transition=v}}function xh(i,o,l,h){var p=ze,v=Hn.transition;Hn.transition=null;try{ze=4,Xa(i,o,l,h)}finally{ze=p,Hn.transition=v}}function Xa(i,o,l,h){if(Ii){var p=_s(i,o,l,h);if(p===null)jh(i,o,h,To,l),Ou(i,h);else if(Rh(p,i,o,l,h))h.stopPropagation();else if(Ou(i,h),o&4&&-1<Ph.indexOf(i)){for(;p!==null;){var v=dl(p);if(v!==null&&xu(v),v=_s(i,o,l,h),v===null&&jh(i,o,h,To,l),v===p)break;p=v}p!==null&&h.stopPropagation()}else jh(i,o,h,null,l)}}var To=null;function _s(i,o,l,h){if(To=null,i=ls(h),i=Ao(i),i!==null)if(o=Zr(i),o===null)i=null;else if(l=o.tag,l===13){if(i=yo(o),i!==null)return i;i=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null);return To=i,null}function Ja(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bu()){case _o:return 1;case gi:return 4;case Mr:case Ka:return 16;case Cu:return 536870912;default:return 16}default:return 16}}var Sr=null,ws=null,cr=null;function Za(){if(cr)return cr;var i,o=ws,l=o.length,h,p="value"in Sr?Sr.value:Sr.textContent,v=p.length;for(i=0;i<l&&o[i]===p[i];i++);var S=l-i;for(h=1;h<=S&&o[l-h]===p[v-h];h++);return cr=p.slice(i,1<h?1-h:void 0)}function Es(i){var o=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&o===13&&(i=13)):i=o,i===10&&(i=13),32<=i||i===13?i:0}function Sn(){return!0}function el(){return!1}function zt(i){function o(l,h,p,v,S){this._reactName=l,this._targetInst=p,this.type=h,this.nativeEvent=v,this.target=S,this.currentTarget=null;for(var x in i)i.hasOwnProperty(x)&&(l=i[x],this[x]=l?l(v):v[x]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Sn:el,this.isPropagationStopped=el,this}return ae(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Sn)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Sn)},persist:function(){},isPersistent:Sn}),o}var sn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Is=zt(sn),Tn=ae({},sn,{view:0,detail:0}),kh=zt(Tn),Ss,qn,Si,bo=ae({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bn,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Si&&(Si&&i.type==="mousemove"?(Ss=i.screenX-Si.screenX,qn=i.screenY-Si.screenY):qn=Ss=0,Si=i),Ss)},movementY:function(i){return"movementY"in i?i.movementY:qn}}),Ts=zt(bo),tl=ae({},bo,{dataTransfer:0}),Vu=zt(tl),bs=ae({},Tn,{relatedTarget:0}),Cs=zt(bs),Fu=ae({},sn,{animationName:0,elapsedTime:0,pseudoElement:0}),Kn=zt(Fu),Bu=ae({},sn,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Uu=zt(Bu),ju=ae({},sn,{data:0}),rl=zt(ju),As={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},or={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$u={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zu(i){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(i):(i=$u[i])?!!o[i]:!1}function bn(){return zu}var c=ae({},Tn,{key:function(i){if(i.key){var o=As[i.key]||i.key;if(o!=="Unidentified")return o}return i.type==="keypress"?(i=Es(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?or[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bn,charCode:function(i){return i.type==="keypress"?Es(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Es(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),m=zt(c),E=ae({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),T=zt(E),$=ae({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bn}),Q=zt($),ue=ae({},sn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tt=zt(ue),bt=ae({},bo,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),We=zt(bt),Nt=[9,13,27,32],_t=d&&"CompositionEvent"in window,Fr=null;d&&"documentMode"in document&&(Fr=document.documentMode);var Tr=d&&"TextEvent"in window&&!Fr,Co=d&&(!_t||Fr&&8<Fr&&11>=Fr),Ps=" ",Wm=!1;function Gm(i,o){switch(i){case"keyup":return Nt.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Rs=!1;function tb(i,o){switch(i){case"compositionend":return Hm(o);case"keypress":return o.which!==32?null:(Wm=!0,Ps);case"textInput":return i=o.data,i===Ps&&Wm?null:i;default:return null}}function rb(i,o){if(Rs)return i==="compositionend"||!_t&&Gm(i,o)?(i=Za(),cr=ws=Sr=null,Rs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Co&&o.locale!=="ko"?null:o.data;default:return null}}var nb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qm(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o==="input"?!!nb[i.type]:o==="textarea"}function Km(i,o,l,h){wn(h),o=Ku(o,"onChange"),0<o.length&&(l=new Is("onChange","change",null,l,h),i.push({event:l,listeners:o}))}var nl=null,il=null;function ib(i){hv(i,0)}function Wu(i){var o=Os(i);if(Dt(o))return i}function ob(i,o){if(i==="change")return o}var Qm=!1;if(d){var Dh;if(d){var Nh="oninput"in document;if(!Nh){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),Nh=typeof Ym.oninput=="function"}Dh=Nh}else Dh=!1;Qm=Dh&&(!document.documentMode||9<document.documentMode)}function Xm(){nl&&(nl.detachEvent("onpropertychange",Jm),il=nl=null)}function Jm(i){if(i.propertyName==="value"&&Wu(il)){var o=[];Km(o,il,i,ls(i)),Wa(ib,o)}}function sb(i,o,l){i==="focusin"?(Xm(),nl=o,il=l,nl.attachEvent("onpropertychange",Jm)):i==="focusout"&&Xm()}function ab(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Wu(il)}function lb(i,o){if(i==="click")return Wu(o)}function ub(i,o){if(i==="input"||i==="change")return Wu(o)}function cb(i,o){return i===o&&(i!==0||1/i===1/o)||i!==i&&o!==o}var an=typeof Object.is=="function"?Object.is:cb;function ol(i,o){if(an(i,o))return!0;if(typeof i!="object"||i===null||typeof o!="object"||o===null)return!1;var l=Object.keys(i),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var p=l[h];if(!f.call(o,p)||!an(i[p],o[p]))return!1}return!0}function Zm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function ev(i,o){var l=Zm(i);i=0;for(var h;l;){if(l.nodeType===3){if(h=i+l.textContent.length,i<=o&&h>=o)return{node:l,offset:o-i};i=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Zm(l)}}function tv(i,o){return i&&o?i===o?!0:i&&i.nodeType===3?!1:o&&o.nodeType===3?tv(i,o.parentNode):"contains"in i?i.contains(o):i.compareDocumentPosition?!!(i.compareDocumentPosition(o)&16):!1:!1}function rv(){for(var i=window,o=Dr();o instanceof i.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)i=o.contentWindow;else break;o=Dr(i.document)}return o}function Oh(i){var o=i&&i.nodeName&&i.nodeName.toLowerCase();return o&&(o==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||o==="textarea"||i.contentEditable==="true")}function db(i){var o=rv(),l=i.focusedElem,h=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&tv(l.ownerDocument.documentElement,l)){if(h!==null&&Oh(l)){if(o=h.start,i=h.end,i===void 0&&(i=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(i,l.value.length);else if(i=(o=l.ownerDocument||document)&&o.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,v=Math.min(h.start,p);h=h.end===void 0?v:Math.min(h.end,p),!i.extend&&v>h&&(p=h,h=v,v=p),p=ev(l,v);var S=ev(l,h);p&&S&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==S.node||i.focusOffset!==S.offset)&&(o=o.createRange(),o.setStart(p.node,p.offset),i.removeAllRanges(),v>h?(i.addRange(o),i.extend(S.node,S.offset)):(o.setEnd(S.node,S.offset),i.addRange(o)))}}for(o=[],i=l;i=i.parentNode;)i.nodeType===1&&o.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)i=o[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var hb=d&&"documentMode"in document&&11>=document.documentMode,xs=null,Lh=null,sl=null,Mh=!1;function nv(i,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Mh||xs==null||xs!==Dr(h)||(h=xs,"selectionStart"in h&&Oh(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),sl&&ol(sl,h)||(sl=h,h=Ku(Lh,"onSelect"),0<h.length&&(o=new Is("onSelect","select",null,o,l),i.push({event:o,listeners:h}),o.target=xs)))}function Gu(i,o){var l={};return l[i.toLowerCase()]=o.toLowerCase(),l["Webkit"+i]="webkit"+o,l["Moz"+i]="moz"+o,l}var ks={animationend:Gu("Animation","AnimationEnd"),animationiteration:Gu("Animation","AnimationIteration"),animationstart:Gu("Animation","AnimationStart"),transitionend:Gu("Transition","TransitionEnd")},Vh={},iv={};d&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete ks.animationend.animation,delete ks.animationiteration.animation,delete ks.animationstart.animation),"TransitionEvent"in window||delete ks.transitionend.transition);function Hu(i){if(Vh[i])return Vh[i];if(!ks[i])return i;var o=ks[i],l;for(l in o)if(o.hasOwnProperty(l)&&l in iv)return Vh[i]=o[l];return i}var ov=Hu("animationend"),sv=Hu("animationiteration"),av=Hu("animationstart"),lv=Hu("transitionend"),uv=new Map,cv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ti(i,o){uv.set(i,o),a(o,[i])}for(var Fh=0;Fh<cv.length;Fh++){var Bh=cv[Fh],fb=Bh.toLowerCase(),pb=Bh[0].toUpperCase()+Bh.slice(1);Ti(fb,"on"+pb)}Ti(ov,"onAnimationEnd"),Ti(sv,"onAnimationIteration"),Ti(av,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(lv,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var al="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gb=new Set("cancel close invalid load scroll toggle".split(" ").concat(al));function dv(i,o,l){var h=i.type||"unknown-event";i.currentTarget=l,Iu(h,o,void 0,i),i.currentTarget=null}function hv(i,o){o=(o&4)!==0;for(var l=0;l<i.length;l++){var h=i[l],p=h.event;h=h.listeners;e:{var v=void 0;if(o)for(var S=h.length-1;0<=S;S--){var x=h[S],L=x.instance,K=x.currentTarget;if(x=x.listener,L!==v&&p.isPropagationStopped())break e;dv(p,x,K),v=L}else for(S=0;S<h.length;S++){if(x=h[S],L=x.instance,K=x.currentTarget,x=x.listener,L!==v&&p.isPropagationStopped())break e;dv(p,x,K),v=L}}}if(Jr)throw i=Ga,Jr=!1,Ga=null,i}function st(i,o){var l=o[qh];l===void 0&&(l=o[qh]=new Set);var h=i+"__bubble";l.has(h)||(fv(o,i,2,!1),l.add(h))}function Uh(i,o,l){var h=0;o&&(h|=4),fv(l,i,h,o)}var qu="_reactListening"+Math.random().toString(36).slice(2);function ll(i){if(!i[qu]){i[qu]=!0,n.forEach(function(l){l!=="selectionchange"&&(gb.has(l)||Uh(l,!1,i),Uh(l,!0,i))});var o=i.nodeType===9?i:i.ownerDocument;o===null||o[qu]||(o[qu]=!0,Uh("selectionchange",!1,o))}}function fv(i,o,l,h){switch(Ja(o)){case 1:var p=ut;break;case 4:p=xh;break;default:p=Xa}l=p.bind(null,o,l,i),p=void 0,!ds||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(p=!0),h?p!==void 0?i.addEventListener(o,l,{capture:!0,passive:p}):i.addEventListener(o,l,!0):p!==void 0?i.addEventListener(o,l,{passive:p}):i.addEventListener(o,l,!1)}function jh(i,o,l,h,p){var v=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var S=h.tag;if(S===3||S===4){var x=h.stateNode.containerInfo;if(x===p||x.nodeType===8&&x.parentNode===p)break;if(S===4)for(S=h.return;S!==null;){var L=S.tag;if((L===3||L===4)&&(L=S.stateNode.containerInfo,L===p||L.nodeType===8&&L.parentNode===p))return;S=S.return}for(;x!==null;){if(S=Ao(x),S===null)return;if(L=S.tag,L===5||L===6){h=v=S;continue e}x=x.parentNode}}h=h.return}Wa(function(){var K=v,ee=ls(l),ne=[];e:{var Z=uv.get(i);if(Z!==void 0){var de=Is,ge=i;switch(i){case"keypress":if(Es(l)===0)break e;case"keydown":case"keyup":de=m;break;case"focusin":ge="focus",de=Cs;break;case"focusout":ge="blur",de=Cs;break;case"beforeblur":case"afterblur":de=Cs;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":de=Ts;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":de=Vu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":de=Q;break;case ov:case sv:case av:de=Kn;break;case lv:de=tt;break;case"scroll":de=kh;break;case"wheel":de=We;break;case"copy":case"cut":case"paste":de=Uu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":de=T}var me=(o&4)!==0,vt=!me&&i==="scroll",z=me?Z!==null?Z+"Capture":null:Z;me=[];for(var M=K,H;M!==null;){H=M;var se=H.stateNode;if(H.tag===5&&se!==null&&(H=se,z!==null&&(se=mt(M,z),se!=null&&me.push(ul(M,se,H)))),vt)break;M=M.return}0<me.length&&(Z=new de(Z,ge,null,l,ee),ne.push({event:Z,listeners:me}))}}if((o&7)===0){e:{if(Z=i==="mouseover"||i==="pointerover",de=i==="mouseout"||i==="pointerout",Z&&l!==po&&(ge=l.relatedTarget||l.fromElement)&&(Ao(ge)||ge[Qn]))break e;if((de||Z)&&(Z=ee.window===ee?ee:(Z=ee.ownerDocument)?Z.defaultView||Z.parentWindow:window,de?(ge=l.relatedTarget||l.toElement,de=K,ge=ge?Ao(ge):null,ge!==null&&(vt=Zr(ge),ge!==vt||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(de=null,ge=K),de!==ge)){if(me=Ts,se="onMouseLeave",z="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(me=T,se="onPointerLeave",z="onPointerEnter",M="pointer"),vt=de==null?Z:Os(de),H=ge==null?Z:Os(ge),Z=new me(se,M+"leave",de,l,ee),Z.target=vt,Z.relatedTarget=H,se=null,Ao(ee)===K&&(me=new me(z,M+"enter",ge,l,ee),me.target=H,me.relatedTarget=vt,se=me),vt=se,de&&ge)t:{for(me=de,z=ge,M=0,H=me;H;H=Ds(H))M++;for(H=0,se=z;se;se=Ds(se))H++;for(;0<M-H;)me=Ds(me),M--;for(;0<H-M;)z=Ds(z),H--;for(;M--;){if(me===z||z!==null&&me===z.alternate)break t;me=Ds(me),z=Ds(z)}me=null}else me=null;de!==null&&pv(ne,Z,de,me,!1),ge!==null&&vt!==null&&pv(ne,vt,ge,me,!0)}}e:{if(Z=K?Os(K):window,de=Z.nodeName&&Z.nodeName.toLowerCase(),de==="select"||de==="input"&&Z.type==="file")var ve=ob;else if(qm(Z))if(Qm)ve=ub;else{ve=ab;var Ee=sb}else(de=Z.nodeName)&&de.toLowerCase()==="input"&&(Z.type==="checkbox"||Z.type==="radio")&&(ve=lb);if(ve&&(ve=ve(i,K))){Km(ne,ve,l,ee);break e}Ee&&Ee(i,Z,K),i==="focusout"&&(Ee=Z._wrapperState)&&Ee.controlled&&Z.type==="number"&&Or(Z,"number",Z.value)}switch(Ee=K?Os(K):window,i){case"focusin":(qm(Ee)||Ee.contentEditable==="true")&&(xs=Ee,Lh=K,sl=null);break;case"focusout":sl=Lh=xs=null;break;case"mousedown":Mh=!0;break;case"contextmenu":case"mouseup":case"dragend":Mh=!1,nv(ne,l,ee);break;case"selectionchange":if(hb)break;case"keydown":case"keyup":nv(ne,l,ee)}var Ie;if(_t)e:{switch(i){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Rs?Gm(i,l)&&(Re="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&(Co&&l.locale!=="ko"&&(Rs||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Rs&&(Ie=Za()):(Sr=ee,ws="value"in Sr?Sr.value:Sr.textContent,Rs=!0)),Ee=Ku(K,Re),0<Ee.length&&(Re=new rl(Re,i,null,l,ee),ne.push({event:Re,listeners:Ee}),Ie?Re.data=Ie:(Ie=Hm(l),Ie!==null&&(Re.data=Ie)))),(Ie=Tr?tb(i,l):rb(i,l))&&(K=Ku(K,"onBeforeInput"),0<K.length&&(ee=new rl("onBeforeInput","beforeinput",null,l,ee),ne.push({event:ee,listeners:K}),ee.data=Ie))}hv(ne,o)})}function ul(i,o,l){return{instance:i,listener:o,currentTarget:l}}function Ku(i,o){for(var l=o+"Capture",h=[];i!==null;){var p=i,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=mt(i,l),v!=null&&h.unshift(ul(i,v,p)),v=mt(i,o),v!=null&&h.push(ul(i,v,p))),i=i.return}return h}function Ds(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function pv(i,o,l,h,p){for(var v=o._reactName,S=[];l!==null&&l!==h;){var x=l,L=x.alternate,K=x.stateNode;if(L!==null&&L===h)break;x.tag===5&&K!==null&&(x=K,p?(L=mt(l,v),L!=null&&S.unshift(ul(l,L,x))):p||(L=mt(l,v),L!=null&&S.push(ul(l,L,x)))),l=l.return}S.length!==0&&i.push({event:o,listeners:S})}var mb=/\r\n?/g,vb=/\u0000|\uFFFD/g;function gv(i){return(typeof i=="string"?i:""+i).replace(mb,`
`).replace(vb,"")}function Qu(i,o,l){if(o=gv(o),gv(i)!==o&&l)throw Error(r(425))}function Yu(){}var $h=null,zh=null;function Wh(i,o){return i==="textarea"||i==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Gh=typeof setTimeout=="function"?setTimeout:void 0,yb=typeof clearTimeout=="function"?clearTimeout:void 0,mv=typeof Promise=="function"?Promise:void 0,_b=typeof queueMicrotask=="function"?queueMicrotask:typeof mv<"u"?function(i){return mv.resolve(null).then(i).catch(wb)}:Gh;function wb(i){setTimeout(function(){throw i})}function Hh(i,o){var l=o,h=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(h===0){i.removeChild(p),on(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=p}while(l);on(o)}function bi(i){for(;i!=null;i=i.nextSibling){var o=i.nodeType;if(o===1||o===3)break;if(o===8){if(o=i.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return i}function vv(i){i=i.previousSibling;for(var o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return i;o--}else l==="/$"&&o++}i=i.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Ns,cl="__reactProps$"+Ns,Qn="__reactContainer$"+Ns,qh="__reactEvents$"+Ns,Eb="__reactListeners$"+Ns,Ib="__reactHandles$"+Ns;function Ao(i){var o=i[Cn];if(o)return o;for(var l=i.parentNode;l;){if(o=l[Qn]||l[Cn]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(i=vv(i);i!==null;){if(l=i[Cn])return l;i=vv(i)}return o}i=l,l=i.parentNode}return null}function dl(i){return i=i[Cn]||i[Qn],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Os(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(r(33))}function Xu(i){return i[cl]||null}var Kh=[],Ls=-1;function Ci(i){return{current:i}}function at(i){0>Ls||(i.current=Kh[Ls],Kh[Ls]=null,Ls--)}function ot(i,o){Ls++,Kh[Ls]=i.current,i.current=o}var Ai={},Yt=Ci(Ai),dr=Ci(!1),Po=Ai;function Ms(i,o){var l=i.type.contextTypes;if(!l)return Ai;var h=i.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=o[v];return h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=o,i.__reactInternalMemoizedMaskedChildContext=p),p}function hr(i){return i=i.childContextTypes,i!=null}function Ju(){at(dr),at(Yt)}function yv(i,o,l){if(Yt.current!==Ai)throw Error(r(168));ot(Yt,o),ot(dr,l)}function _v(i,o,l){var h=i.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var p in h)if(!(p in o))throw Error(r(108,Oe(i)||"Unknown",p));return ae({},l,h)}function Zu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ai,Po=Yt.current,ot(Yt,i),ot(dr,dr.current),!0}function wv(i,o,l){var h=i.stateNode;if(!h)throw Error(r(169));l?(i=_v(i,o,Po),h.__reactInternalMemoizedMergedChildContext=i,at(dr),at(Yt),ot(Yt,i)):at(dr),ot(dr,l)}var Yn=null,ec=!1,Qh=!1;function Ev(i){Yn===null?Yn=[i]:Yn.push(i)}function Sb(i){ec=!0,Ev(i)}function Pi(){if(!Qh&&Yn!==null){Qh=!0;var i=0,o=ze;try{var l=Yn;for(ze=1;i<l.length;i++){var h=l[i];do h=h(!0);while(h!==null)}Yn=null,ec=!1}catch(p){throw Yn!==null&&(Yn=Yn.slice(i+1)),gs(_o,Pi),p}finally{ze=o,Qh=!1}}return null}var Vs=[],Fs=0,tc=null,rc=0,Br=[],Ur=0,Ro=null,Xn=1,Jn="";function xo(i,o){Vs[Fs++]=rc,Vs[Fs++]=tc,tc=i,rc=o}function Iv(i,o,l){Br[Ur++]=Xn,Br[Ur++]=Jn,Br[Ur++]=Ro,Ro=i;var h=Xn;i=Jn;var p=32-ir(h)-1;h&=~(1<<p),l+=1;var v=32-ir(o)+p;if(30<v){var S=p-p%5;v=(h&(1<<S)-1).toString(32),h>>=S,p-=S,Xn=1<<32-ir(o)+p|l<<p|h,Jn=v+i}else Xn=1<<v|l<<p|h,Jn=i}function Yh(i){i.return!==null&&(xo(i,1),Iv(i,1,0))}function Xh(i){for(;i===tc;)tc=Vs[--Fs],Vs[Fs]=null,rc=Vs[--Fs],Vs[Fs]=null;for(;i===Ro;)Ro=Br[--Ur],Br[Ur]=null,Jn=Br[--Ur],Br[Ur]=null,Xn=Br[--Ur],Br[Ur]=null}var br=null,Cr=null,ct=!1,ln=null;function Sv(i,o){var l=Wr(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=i,o=i.deletions,o===null?(i.deletions=[l],i.flags|=16):o.push(l)}function Tv(i,o){switch(i.tag){case 5:var l=i.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(i.stateNode=o,br=i,Cr=bi(o.firstChild),!0):!1;case 6:return o=i.pendingProps===""||o.nodeType!==3?null:o,o!==null?(i.stateNode=o,br=i,Cr=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Ro!==null?{id:Xn,overflow:Jn}:null,i.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Wr(18,null,null,0),l.stateNode=o,l.return=i,i.child=l,br=i,Cr=null,!0):!1;default:return!1}}function Jh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Zh(i){if(ct){var o=Cr;if(o){var l=o;if(!Tv(i,o)){if(Jh(i))throw Error(r(418));o=bi(l.nextSibling);var h=br;o&&Tv(i,o)?Sv(h,l):(i.flags=i.flags&-4097|2,ct=!1,br=i)}}else{if(Jh(i))throw Error(r(418));i.flags=i.flags&-4097|2,ct=!1,br=i}}}function bv(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;br=i}function nc(i){if(i!==br)return!1;if(!ct)return bv(i),ct=!0,!1;var o;if((o=i.tag!==3)&&!(o=i.tag!==5)&&(o=i.type,o=o!=="head"&&o!=="body"&&!Wh(i.type,i.memoizedProps)),o&&(o=Cr)){if(Jh(i))throw Cv(),Error(r(418));for(;o;)Sv(i,o),o=bi(o.nextSibling)}if(bv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(r(317));e:{for(i=i.nextSibling,o=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(o===0){Cr=bi(i.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}i=i.nextSibling}Cr=null}}else Cr=br?bi(i.stateNode.nextSibling):null;return!0}function Cv(){for(var i=Cr;i;)i=bi(i.nextSibling)}function Bs(){Cr=br=null,ct=!1}function ef(i){ln===null?ln=[i]:ln.push(i)}var Tb=q.ReactCurrentBatchConfig;function hl(i,o,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(r(309));var h=l.stateNode}if(!h)throw Error(r(147,i));var p=h,v=""+i;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===v?o.ref:(o=function(S){var x=p.refs;S===null?delete x[v]:x[v]=S},o._stringRef=v,o)}if(typeof i!="string")throw Error(r(284));if(!l._owner)throw Error(r(290,i))}return i}function ic(i,o){throw i=Object.prototype.toString.call(o),Error(r(31,i==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":i))}function Av(i){var o=i._init;return o(i._payload)}function Pv(i){function o(z,M){if(i){var H=z.deletions;H===null?(z.deletions=[M],z.flags|=16):H.push(M)}}function l(z,M){if(!i)return null;for(;M!==null;)o(z,M),M=M.sibling;return null}function h(z,M){for(z=new Map;M!==null;)M.key!==null?z.set(M.key,M):z.set(M.index,M),M=M.sibling;return z}function p(z,M){return z=Mi(z,M),z.index=0,z.sibling=null,z}function v(z,M,H){return z.index=H,i?(H=z.alternate,H!==null?(H=H.index,H<M?(z.flags|=2,M):H):(z.flags|=2,M)):(z.flags|=1048576,M)}function S(z){return i&&z.alternate===null&&(z.flags|=2),z}function x(z,M,H,se){return M===null||M.tag!==6?(M=Hf(H,z.mode,se),M.return=z,M):(M=p(M,H),M.return=z,M)}function L(z,M,H,se){var ve=H.type;return ve===R?ee(z,M,H.props.children,se,H.key):M!==null&&(M.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Ye&&Av(ve)===M.type)?(se=p(M,H.props),se.ref=hl(z,M,H),se.return=z,se):(se=Pc(H.type,H.key,H.props,null,z.mode,se),se.ref=hl(z,M,H),se.return=z,se)}function K(z,M,H,se){return M===null||M.tag!==4||M.stateNode.containerInfo!==H.containerInfo||M.stateNode.implementation!==H.implementation?(M=qf(H,z.mode,se),M.return=z,M):(M=p(M,H.children||[]),M.return=z,M)}function ee(z,M,H,se,ve){return M===null||M.tag!==7?(M=Fo(H,z.mode,se,ve),M.return=z,M):(M=p(M,H),M.return=z,M)}function ne(z,M,H){if(typeof M=="string"&&M!==""||typeof M=="number")return M=Hf(""+M,z.mode,H),M.return=z,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case G:return H=Pc(M.type,M.key,M.props,null,z.mode,H),H.ref=hl(z,null,M),H.return=z,H;case X:return M=qf(M,z.mode,H),M.return=z,M;case Ye:var se=M._init;return ne(z,se(M._payload),H)}if(wr(M)||ce(M))return M=Fo(M,z.mode,H,null),M.return=z,M;ic(z,M)}return null}function Z(z,M,H,se){var ve=M!==null?M.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return ve!==null?null:x(z,M,""+H,se);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case G:return H.key===ve?L(z,M,H,se):null;case X:return H.key===ve?K(z,M,H,se):null;case Ye:return ve=H._init,Z(z,M,ve(H._payload),se)}if(wr(H)||ce(H))return ve!==null?null:ee(z,M,H,se,null);ic(z,H)}return null}function de(z,M,H,se,ve){if(typeof se=="string"&&se!==""||typeof se=="number")return z=z.get(H)||null,x(M,z,""+se,ve);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case G:return z=z.get(se.key===null?H:se.key)||null,L(M,z,se,ve);case X:return z=z.get(se.key===null?H:se.key)||null,K(M,z,se,ve);case Ye:var Ee=se._init;return de(z,M,H,Ee(se._payload),ve)}if(wr(se)||ce(se))return z=z.get(H)||null,ee(M,z,se,ve,null);ic(M,se)}return null}function ge(z,M,H,se){for(var ve=null,Ee=null,Ie=M,Re=M=0,Mt=null;Ie!==null&&Re<H.length;Re++){Ie.index>Re?(Mt=Ie,Ie=null):Mt=Ie.sibling;var Ke=Z(z,Ie,H[Re],se);if(Ke===null){Ie===null&&(Ie=Mt);break}i&&Ie&&Ke.alternate===null&&o(z,Ie),M=v(Ke,M,Re),Ee===null?ve=Ke:Ee.sibling=Ke,Ee=Ke,Ie=Mt}if(Re===H.length)return l(z,Ie),ct&&xo(z,Re),ve;if(Ie===null){for(;Re<H.length;Re++)Ie=ne(z,H[Re],se),Ie!==null&&(M=v(Ie,M,Re),Ee===null?ve=Ie:Ee.sibling=Ie,Ee=Ie);return ct&&xo(z,Re),ve}for(Ie=h(z,Ie);Re<H.length;Re++)Mt=de(Ie,z,Re,H[Re],se),Mt!==null&&(i&&Mt.alternate!==null&&Ie.delete(Mt.key===null?Re:Mt.key),M=v(Mt,M,Re),Ee===null?ve=Mt:Ee.sibling=Mt,Ee=Mt);return i&&Ie.forEach(function(Vi){return o(z,Vi)}),ct&&xo(z,Re),ve}function me(z,M,H,se){var ve=ce(H);if(typeof ve!="function")throw Error(r(150));if(H=ve.call(H),H==null)throw Error(r(151));for(var Ee=ve=null,Ie=M,Re=M=0,Mt=null,Ke=H.next();Ie!==null&&!Ke.done;Re++,Ke=H.next()){Ie.index>Re?(Mt=Ie,Ie=null):Mt=Ie.sibling;var Vi=Z(z,Ie,Ke.value,se);if(Vi===null){Ie===null&&(Ie=Mt);break}i&&Ie&&Vi.alternate===null&&o(z,Ie),M=v(Vi,M,Re),Ee===null?ve=Vi:Ee.sibling=Vi,Ee=Vi,Ie=Mt}if(Ke.done)return l(z,Ie),ct&&xo(z,Re),ve;if(Ie===null){for(;!Ke.done;Re++,Ke=H.next())Ke=ne(z,Ke.value,se),Ke!==null&&(M=v(Ke,M,Re),Ee===null?ve=Ke:Ee.sibling=Ke,Ee=Ke);return ct&&xo(z,Re),ve}for(Ie=h(z,Ie);!Ke.done;Re++,Ke=H.next())Ke=de(Ie,z,Re,Ke.value,se),Ke!==null&&(i&&Ke.alternate!==null&&Ie.delete(Ke.key===null?Re:Ke.key),M=v(Ke,M,Re),Ee===null?ve=Ke:Ee.sibling=Ke,Ee=Ke);return i&&Ie.forEach(function(nC){return o(z,nC)}),ct&&xo(z,Re),ve}function vt(z,M,H,se){if(typeof H=="object"&&H!==null&&H.type===R&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case G:e:{for(var ve=H.key,Ee=M;Ee!==null;){if(Ee.key===ve){if(ve=H.type,ve===R){if(Ee.tag===7){l(z,Ee.sibling),M=p(Ee,H.props.children),M.return=z,z=M;break e}}else if(Ee.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Ye&&Av(ve)===Ee.type){l(z,Ee.sibling),M=p(Ee,H.props),M.ref=hl(z,Ee,H),M.return=z,z=M;break e}l(z,Ee);break}else o(z,Ee);Ee=Ee.sibling}H.type===R?(M=Fo(H.props.children,z.mode,se,H.key),M.return=z,z=M):(se=Pc(H.type,H.key,H.props,null,z.mode,se),se.ref=hl(z,M,H),se.return=z,z=se)}return S(z);case X:e:{for(Ee=H.key;M!==null;){if(M.key===Ee)if(M.tag===4&&M.stateNode.containerInfo===H.containerInfo&&M.stateNode.implementation===H.implementation){l(z,M.sibling),M=p(M,H.children||[]),M.return=z,z=M;break e}else{l(z,M);break}else o(z,M);M=M.sibling}M=qf(H,z.mode,se),M.return=z,z=M}return S(z);case Ye:return Ee=H._init,vt(z,M,Ee(H._payload),se)}if(wr(H))return ge(z,M,H,se);if(ce(H))return me(z,M,H,se);ic(z,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,M!==null&&M.tag===6?(l(z,M.sibling),M=p(M,H),M.return=z,z=M):(l(z,M),M=Hf(H,z.mode,se),M.return=z,z=M),S(z)):l(z,M)}return vt}var Us=Pv(!0),Rv=Pv(!1),oc=Ci(null),sc=null,js=null,tf=null;function rf(){tf=js=sc=null}function nf(i){var o=oc.current;at(oc),i._currentValue=o}function of(i,o,l){for(;i!==null;){var h=i.alternate;if((i.childLanes&o)!==o?(i.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),i===l)break;i=i.return}}function $s(i,o){sc=i,tf=js=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&o)!==0&&(fr=!0),i.firstContext=null)}function jr(i){var o=i._currentValue;if(tf!==i)if(i={context:i,memoizedValue:o,next:null},js===null){if(sc===null)throw Error(r(308));js=i,sc.dependencies={lanes:0,firstContext:i}}else js=js.next=i;return o}var ko=null;function sf(i){ko===null?ko=[i]:ko.push(i)}function xv(i,o,l,h){var p=o.interleaved;return p===null?(l.next=l,sf(o)):(l.next=p.next,p.next=l),o.interleaved=l,Zn(i,h)}function Zn(i,o){i.lanes|=o;var l=i.alternate;for(l!==null&&(l.lanes|=o),l=i,i=i.return;i!==null;)i.childLanes|=o,l=i.alternate,l!==null&&(l.childLanes|=o),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ri=!1;function af(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kv(i,o){i=i.updateQueue,o.updateQueue===i&&(o.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ei(i,o){return{eventTime:i,lane:o,tag:0,payload:null,callback:null,next:null}}function xi(i,o,l){var h=i.updateQueue;if(h===null)return null;if(h=h.shared,(He&2)!==0){var p=h.pending;return p===null?o.next=o:(o.next=p.next,p.next=o),h.pending=o,Zn(i,l)}return p=h.interleaved,p===null?(o.next=o,sf(h)):(o.next=p.next,p.next=o),h.interleaved=o,Zn(i,l)}function ac(i,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,_i(i,l)}}function Dv(i,o){var l=i.updateQueue,h=i.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var S={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=S:v=v.next=S,l=l.next}while(l!==null);v===null?p=v=o:v=v.next=o}else p=v=o;l={baseState:h.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:h.shared,effects:h.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=o:i.next=o,l.lastBaseUpdate=o}function lc(i,o,l,h){var p=i.updateQueue;Ri=!1;var v=p.firstBaseUpdate,S=p.lastBaseUpdate,x=p.shared.pending;if(x!==null){p.shared.pending=null;var L=x,K=L.next;L.next=null,S===null?v=K:S.next=K,S=L;var ee=i.alternate;ee!==null&&(ee=ee.updateQueue,x=ee.lastBaseUpdate,x!==S&&(x===null?ee.firstBaseUpdate=K:x.next=K,ee.lastBaseUpdate=L))}if(v!==null){var ne=p.baseState;S=0,ee=K=L=null,x=v;do{var Z=x.lane,de=x.eventTime;if((h&Z)===Z){ee!==null&&(ee=ee.next={eventTime:de,lane:0,tag:x.tag,payload:x.payload,callback:x.callback,next:null});e:{var ge=i,me=x;switch(Z=o,de=l,me.tag){case 1:if(ge=me.payload,typeof ge=="function"){ne=ge.call(de,ne,Z);break e}ne=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=me.payload,Z=typeof ge=="function"?ge.call(de,ne,Z):ge,Z==null)break e;ne=ae({},ne,Z);break e;case 2:Ri=!0}}x.callback!==null&&x.lane!==0&&(i.flags|=64,Z=p.effects,Z===null?p.effects=[x]:Z.push(x))}else de={eventTime:de,lane:Z,tag:x.tag,payload:x.payload,callback:x.callback,next:null},ee===null?(K=ee=de,L=ne):ee=ee.next=de,S|=Z;if(x=x.next,x===null){if(x=p.shared.pending,x===null)break;Z=x,x=Z.next,Z.next=null,p.lastBaseUpdate=Z,p.shared.pending=null}}while(!0);if(ee===null&&(L=ne),p.baseState=L,p.firstBaseUpdate=K,p.lastBaseUpdate=ee,o=p.shared.interleaved,o!==null){p=o;do S|=p.lane,p=p.next;while(p!==o)}else v===null&&(p.shared.lanes=0);Oo|=S,i.lanes=S,i.memoizedState=ne}}function Nv(i,o,l){if(i=o.effects,o.effects=null,i!==null)for(o=0;o<i.length;o++){var h=i[o],p=h.callback;if(p!==null){if(h.callback=null,h=l,typeof p!="function")throw Error(r(191,p));p.call(h)}}}var fl={},An=Ci(fl),pl=Ci(fl),gl=Ci(fl);function Do(i){if(i===fl)throw Error(r(174));return i}function lf(i,o){switch(ot(gl,o),ot(pl,i),ot(An,fl),i=o.nodeType,i){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Tt(null,"");break;default:i=i===8?o.parentNode:o,o=i.namespaceURI||null,i=i.tagName,o=Tt(o,i)}at(An),ot(An,o)}function zs(){at(An),at(pl),at(gl)}function Ov(i){Do(gl.current);var o=Do(An.current),l=Tt(o,i.type);o!==l&&(ot(pl,i),ot(An,l))}function uf(i){pl.current===i&&(at(An),at(pl))}var ht=Ci(0);function uc(i){for(var o=i;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var cf=[];function df(){for(var i=0;i<cf.length;i++)cf[i]._workInProgressVersionPrimary=null;cf.length=0}var cc=q.ReactCurrentDispatcher,hf=q.ReactCurrentBatchConfig,No=0,ft=null,Ct=null,Ot=null,dc=!1,ml=!1,vl=0,bb=0;function Xt(){throw Error(r(321))}function ff(i,o){if(o===null)return!1;for(var l=0;l<o.length&&l<i.length;l++)if(!an(i[l],o[l]))return!1;return!0}function pf(i,o,l,h,p,v){if(No=v,ft=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,cc.current=i===null||i.memoizedState===null?Rb:xb,i=l(h,p),ml){v=0;do{if(ml=!1,vl=0,25<=v)throw Error(r(301));v+=1,Ot=Ct=null,o.updateQueue=null,cc.current=kb,i=l(h,p)}while(ml)}if(cc.current=pc,o=Ct!==null&&Ct.next!==null,No=0,Ot=Ct=ft=null,dc=!1,o)throw Error(r(300));return i}function gf(){var i=vl!==0;return vl=0,i}function Pn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?ft.memoizedState=Ot=i:Ot=Ot.next=i,Ot}function $r(){if(Ct===null){var i=ft.alternate;i=i!==null?i.memoizedState:null}else i=Ct.next;var o=Ot===null?ft.memoizedState:Ot.next;if(o!==null)Ot=o,Ct=i;else{if(i===null)throw Error(r(310));Ct=i,i={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ot===null?ft.memoizedState=Ot=i:Ot=Ot.next=i}return Ot}function yl(i,o){return typeof o=="function"?o(i):o}function mf(i){var o=$r(),l=o.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var h=Ct,p=h.baseQueue,v=l.pending;if(v!==null){if(p!==null){var S=p.next;p.next=v.next,v.next=S}h.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,h=h.baseState;var x=S=null,L=null,K=v;do{var ee=K.lane;if((No&ee)===ee)L!==null&&(L=L.next={lane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),h=K.hasEagerState?K.eagerState:i(h,K.action);else{var ne={lane:ee,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null};L===null?(x=L=ne,S=h):L=L.next=ne,ft.lanes|=ee,Oo|=ee}K=K.next}while(K!==null&&K!==v);L===null?S=h:L.next=x,an(h,o.memoizedState)||(fr=!0),o.memoizedState=h,o.baseState=S,o.baseQueue=L,l.lastRenderedState=h}if(i=l.interleaved,i!==null){p=i;do v=p.lane,ft.lanes|=v,Oo|=v,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function vf(i){var o=$r(),l=o.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=i;var h=l.dispatch,p=l.pending,v=o.memoizedState;if(p!==null){l.pending=null;var S=p=p.next;do v=i(v,S.action),S=S.next;while(S!==p);an(v,o.memoizedState)||(fr=!0),o.memoizedState=v,o.baseQueue===null&&(o.baseState=v),l.lastRenderedState=v}return[v,h]}function Lv(){}function Mv(i,o){var l=ft,h=$r(),p=o(),v=!an(h.memoizedState,p);if(v&&(h.memoizedState=p,fr=!0),h=h.queue,yf(Bv.bind(null,l,h,i),[i]),h.getSnapshot!==o||v||Ot!==null&&Ot.memoizedState.tag&1){if(l.flags|=2048,_l(9,Fv.bind(null,l,h,p,o),void 0,null),Lt===null)throw Error(r(349));(No&30)!==0||Vv(l,o,p)}return p}function Vv(i,o,l){i.flags|=16384,i={getSnapshot:o,value:l},o=ft.updateQueue,o===null?(o={lastEffect:null,stores:null},ft.updateQueue=o,o.stores=[i]):(l=o.stores,l===null?o.stores=[i]:l.push(i))}function Fv(i,o,l,h){o.value=l,o.getSnapshot=h,Uv(o)&&jv(i)}function Bv(i,o,l){return l(function(){Uv(o)&&jv(i)})}function Uv(i){var o=i.getSnapshot;i=i.value;try{var l=o();return!an(i,l)}catch{return!0}}function jv(i){var o=Zn(i,1);o!==null&&hn(o,i,1,-1)}function $v(i){var o=Pn();return typeof i=="function"&&(i=i()),o.memoizedState=o.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yl,lastRenderedState:i},o.queue=i,i=i.dispatch=Pb.bind(null,ft,i),[o.memoizedState,i]}function _l(i,o,l,h){return i={tag:i,create:o,destroy:l,deps:h,next:null},o=ft.updateQueue,o===null?(o={lastEffect:null,stores:null},ft.updateQueue=o,o.lastEffect=i.next=i):(l=o.lastEffect,l===null?o.lastEffect=i.next=i:(h=l.next,l.next=i,i.next=h,o.lastEffect=i)),i}function zv(){return $r().memoizedState}function hc(i,o,l,h){var p=Pn();ft.flags|=i,p.memoizedState=_l(1|o,l,void 0,h===void 0?null:h)}function fc(i,o,l,h){var p=$r();h=h===void 0?null:h;var v=void 0;if(Ct!==null){var S=Ct.memoizedState;if(v=S.destroy,h!==null&&ff(h,S.deps)){p.memoizedState=_l(o,l,v,h);return}}ft.flags|=i,p.memoizedState=_l(1|o,l,v,h)}function Wv(i,o){return hc(8390656,8,i,o)}function yf(i,o){return fc(2048,8,i,o)}function Gv(i,o){return fc(4,2,i,o)}function Hv(i,o){return fc(4,4,i,o)}function qv(i,o){if(typeof o=="function")return i=i(),o(i),function(){o(null)};if(o!=null)return i=i(),o.current=i,function(){o.current=null}}function Kv(i,o,l){return l=l!=null?l.concat([i]):null,fc(4,4,qv.bind(null,o,i),l)}function _f(){}function Qv(i,o){var l=$r();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ff(o,h[1])?h[0]:(l.memoizedState=[i,o],i)}function Yv(i,o){var l=$r();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&ff(o,h[1])?h[0]:(i=i(),l.memoizedState=[i,o],i)}function Xv(i,o,l){return(No&21)===0?(i.baseState&&(i.baseState=!1,fr=!0),i.memoizedState=l):(an(l,o)||(l=Io(),ft.lanes|=l,Oo|=l,i.baseState=!0),o)}function Cb(i,o){var l=ze;ze=l!==0&&4>l?l:4,i(!0);var h=hf.transition;hf.transition={};try{i(!1),o()}finally{ze=l,hf.transition=h}}function Jv(){return $r().memoizedState}function Ab(i,o,l){var h=Oi(i);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Zv(i))ey(o,l);else if(l=xv(i,o,l,h),l!==null){var p=ar();hn(l,i,h,p),ty(l,o,h)}}function Pb(i,o,l){var h=Oi(i),p={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Zv(i))ey(o,p);else{var v=i.alternate;if(i.lanes===0&&(v===null||v.lanes===0)&&(v=o.lastRenderedReducer,v!==null))try{var S=o.lastRenderedState,x=v(S,l);if(p.hasEagerState=!0,p.eagerState=x,an(x,S)){var L=o.interleaved;L===null?(p.next=p,sf(o)):(p.next=L.next,L.next=p),o.interleaved=p;return}}catch{}finally{}l=xv(i,o,p,h),l!==null&&(p=ar(),hn(l,i,h,p),ty(l,o,h))}}function Zv(i){var o=i.alternate;return i===ft||o!==null&&o===ft}function ey(i,o){ml=dc=!0;var l=i.pending;l===null?o.next=o:(o.next=l.next,l.next=o),i.pending=o}function ty(i,o,l){if((l&4194240)!==0){var h=o.lanes;h&=i.pendingLanes,l|=h,o.lanes=l,_i(i,l)}}var pc={readContext:jr,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},Rb={readContext:jr,useCallback:function(i,o){return Pn().memoizedState=[i,o===void 0?null:o],i},useContext:jr,useEffect:Wv,useImperativeHandle:function(i,o,l){return l=l!=null?l.concat([i]):null,hc(4194308,4,qv.bind(null,o,i),l)},useLayoutEffect:function(i,o){return hc(4194308,4,i,o)},useInsertionEffect:function(i,o){return hc(4,2,i,o)},useMemo:function(i,o){var l=Pn();return o=o===void 0?null:o,i=i(),l.memoizedState=[i,o],i},useReducer:function(i,o,l){var h=Pn();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:o},h.queue=i,i=i.dispatch=Ab.bind(null,ft,i),[h.memoizedState,i]},useRef:function(i){var o=Pn();return i={current:i},o.memoizedState=i},useState:$v,useDebugValue:_f,useDeferredValue:function(i){return Pn().memoizedState=i},useTransition:function(){var i=$v(!1),o=i[0];return i=Cb.bind(null,i[1]),Pn().memoizedState=i,[o,i]},useMutableSource:function(){},useSyncExternalStore:function(i,o,l){var h=ft,p=Pn();if(ct){if(l===void 0)throw Error(r(407));l=l()}else{if(l=o(),Lt===null)throw Error(r(349));(No&30)!==0||Vv(h,o,l)}p.memoizedState=l;var v={value:l,getSnapshot:o};return p.queue=v,Wv(Bv.bind(null,h,v,i),[i]),h.flags|=2048,_l(9,Fv.bind(null,h,v,l,o),void 0,null),l},useId:function(){var i=Pn(),o=Lt.identifierPrefix;if(ct){var l=Jn,h=Xn;l=(h&~(1<<32-ir(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=vl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=bb++,o=":"+o+"r"+l.toString(32)+":";return i.memoizedState=o},unstable_isNewReconciler:!1},xb={readContext:jr,useCallback:Qv,useContext:jr,useEffect:yf,useImperativeHandle:Kv,useInsertionEffect:Gv,useLayoutEffect:Hv,useMemo:Yv,useReducer:mf,useRef:zv,useState:function(){return mf(yl)},useDebugValue:_f,useDeferredValue:function(i){var o=$r();return Xv(o,Ct.memoizedState,i)},useTransition:function(){var i=mf(yl)[0],o=$r().memoizedState;return[i,o]},useMutableSource:Lv,useSyncExternalStore:Mv,useId:Jv,unstable_isNewReconciler:!1},kb={readContext:jr,useCallback:Qv,useContext:jr,useEffect:yf,useImperativeHandle:Kv,useInsertionEffect:Gv,useLayoutEffect:Hv,useMemo:Yv,useReducer:vf,useRef:zv,useState:function(){return vf(yl)},useDebugValue:_f,useDeferredValue:function(i){var o=$r();return Ct===null?o.memoizedState=i:Xv(o,Ct.memoizedState,i)},useTransition:function(){var i=vf(yl)[0],o=$r().memoizedState;return[i,o]},useMutableSource:Lv,useSyncExternalStore:Mv,useId:Jv,unstable_isNewReconciler:!1};function un(i,o){if(i&&i.defaultProps){o=ae({},o),i=i.defaultProps;for(var l in i)o[l]===void 0&&(o[l]=i[l]);return o}return o}function wf(i,o,l,h){o=i.memoizedState,l=l(h,o),l=l==null?o:ae({},o,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var gc={isMounted:function(i){return(i=i._reactInternals)?Zr(i)===i:!1},enqueueSetState:function(i,o,l){i=i._reactInternals;var h=ar(),p=Oi(i),v=ei(h,p);v.payload=o,l!=null&&(v.callback=l),o=xi(i,v,p),o!==null&&(hn(o,i,p,h),ac(o,i,p))},enqueueReplaceState:function(i,o,l){i=i._reactInternals;var h=ar(),p=Oi(i),v=ei(h,p);v.tag=1,v.payload=o,l!=null&&(v.callback=l),o=xi(i,v,p),o!==null&&(hn(o,i,p,h),ac(o,i,p))},enqueueForceUpdate:function(i,o){i=i._reactInternals;var l=ar(),h=Oi(i),p=ei(l,h);p.tag=2,o!=null&&(p.callback=o),o=xi(i,p,h),o!==null&&(hn(o,i,h,l),ac(o,i,h))}};function ry(i,o,l,h,p,v,S){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(h,v,S):o.prototype&&o.prototype.isPureReactComponent?!ol(l,h)||!ol(p,v):!0}function ny(i,o,l){var h=!1,p=Ai,v=o.contextType;return typeof v=="object"&&v!==null?v=jr(v):(p=hr(o)?Po:Yt.current,h=o.contextTypes,v=(h=h!=null)?Ms(i,p):Ai),o=new o(l,v),i.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=gc,i.stateNode=o,o._reactInternals=i,h&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=v),o}function iy(i,o,l,h){i=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==i&&gc.enqueueReplaceState(o,o.state,null)}function Ef(i,o,l,h){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},af(i);var v=o.contextType;typeof v=="object"&&v!==null?p.context=jr(v):(v=hr(o)?Po:Yt.current,p.context=Ms(i,v)),p.state=i.memoizedState,v=o.getDerivedStateFromProps,typeof v=="function"&&(wf(i,o,v,l),p.state=i.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(o=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),o!==p.state&&gc.enqueueReplaceState(p,p.state,null),lc(i,l,p,h),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ws(i,o){try{var l="",h=o;do l+=we(h),h=h.return;while(h);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:i,source:o,stack:p,digest:null}}function If(i,o,l){return{value:i,source:null,stack:l??null,digest:o??null}}function Sf(i,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var Db=typeof WeakMap=="function"?WeakMap:Map;function oy(i,o,l){l=ei(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){Ic||(Ic=!0,Ff=h),Sf(i,o)},l}function sy(i,o,l){l=ei(-1,l),l.tag=3;var h=i.type.getDerivedStateFromError;if(typeof h=="function"){var p=o.value;l.payload=function(){return h(p)},l.callback=function(){Sf(i,o)}}var v=i.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Sf(i,o),typeof h!="function"&&(Di===null?Di=new Set([this]):Di.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})}),l}function ay(i,o,l){var h=i.pingCache;if(h===null){h=i.pingCache=new Db;var p=new Set;h.set(o,p)}else p=h.get(o),p===void 0&&(p=new Set,h.set(o,p));p.has(l)||(p.add(l),i=Hb.bind(null,i,o,l),o.then(i,i))}function ly(i){do{var o;if((o=i.tag===13)&&(o=i.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return i;i=i.return}while(i!==null);return null}function uy(i,o,l,h,p){return(i.mode&1)===0?(i===o?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=ei(-1,1),o.tag=2,xi(l,o,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var Nb=q.ReactCurrentOwner,fr=!1;function sr(i,o,l,h){o.child=i===null?Rv(o,null,l,h):Us(o,i.child,l,h)}function cy(i,o,l,h,p){l=l.render;var v=o.ref;return $s(o,p),h=pf(i,o,l,h,v,p),l=gf(),i!==null&&!fr?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ti(i,o,p)):(ct&&l&&Yh(o),o.flags|=1,sr(i,o,h,p),o.child)}function dy(i,o,l,h,p){if(i===null){var v=l.type;return typeof v=="function"&&!Gf(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=v,hy(i,o,v,h,p)):(i=Pc(l.type,null,h,o,o.mode,p),i.ref=o.ref,i.return=o,o.child=i)}if(v=i.child,(i.lanes&p)===0){var S=v.memoizedProps;if(l=l.compare,l=l!==null?l:ol,l(S,h)&&i.ref===o.ref)return ti(i,o,p)}return o.flags|=1,i=Mi(v,h),i.ref=o.ref,i.return=o,o.child=i}function hy(i,o,l,h,p){if(i!==null){var v=i.memoizedProps;if(ol(v,h)&&i.ref===o.ref)if(fr=!1,o.pendingProps=h=v,(i.lanes&p)!==0)(i.flags&131072)!==0&&(fr=!0);else return o.lanes=i.lanes,ti(i,o,p)}return Tf(i,o,l,h,p)}function fy(i,o,l){var h=o.pendingProps,p=h.children,v=i!==null?i.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Hs,Ar),Ar|=l;else{if((l&1073741824)===0)return i=v!==null?v.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:i,cachePool:null,transitions:null},o.updateQueue=null,ot(Hs,Ar),Ar|=i,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=v!==null?v.baseLanes:l,ot(Hs,Ar),Ar|=h}else v!==null?(h=v.baseLanes|l,o.memoizedState=null):h=l,ot(Hs,Ar),Ar|=h;return sr(i,o,p,l),o.child}function py(i,o){var l=o.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function Tf(i,o,l,h,p){var v=hr(l)?Po:Yt.current;return v=Ms(o,v),$s(o,p),l=pf(i,o,l,h,v,p),h=gf(),i!==null&&!fr?(o.updateQueue=i.updateQueue,o.flags&=-2053,i.lanes&=~p,ti(i,o,p)):(ct&&h&&Yh(o),o.flags|=1,sr(i,o,l,p),o.child)}function gy(i,o,l,h,p){if(hr(l)){var v=!0;Zu(o)}else v=!1;if($s(o,p),o.stateNode===null)vc(i,o),ny(o,l,h),Ef(o,l,h,p),h=!0;else if(i===null){var S=o.stateNode,x=o.memoizedProps;S.props=x;var L=S.context,K=l.contextType;typeof K=="object"&&K!==null?K=jr(K):(K=hr(l)?Po:Yt.current,K=Ms(o,K));var ee=l.getDerivedStateFromProps,ne=typeof ee=="function"||typeof S.getSnapshotBeforeUpdate=="function";ne||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(x!==h||L!==K)&&iy(o,S,h,K),Ri=!1;var Z=o.memoizedState;S.state=Z,lc(o,h,S,p),L=o.memoizedState,x!==h||Z!==L||dr.current||Ri?(typeof ee=="function"&&(wf(o,l,ee,h),L=o.memoizedState),(x=Ri||ry(o,l,x,h,Z,L,K))?(ne||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(o.flags|=4194308)):(typeof S.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=L),S.props=h,S.state=L,S.context=K,h=x):(typeof S.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{S=o.stateNode,kv(i,o),x=o.memoizedProps,K=o.type===o.elementType?x:un(o.type,x),S.props=K,ne=o.pendingProps,Z=S.context,L=l.contextType,typeof L=="object"&&L!==null?L=jr(L):(L=hr(l)?Po:Yt.current,L=Ms(o,L));var de=l.getDerivedStateFromProps;(ee=typeof de=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(x!==ne||Z!==L)&&iy(o,S,h,L),Ri=!1,Z=o.memoizedState,S.state=Z,lc(o,h,S,p);var ge=o.memoizedState;x!==ne||Z!==ge||dr.current||Ri?(typeof de=="function"&&(wf(o,l,de,h),ge=o.memoizedState),(K=Ri||ry(o,l,K,h,Z,ge,L)||!1)?(ee||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(h,ge,L),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(h,ge,L)),typeof S.componentDidUpdate=="function"&&(o.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof S.componentDidUpdate!="function"||x===i.memoizedProps&&Z===i.memoizedState||(o.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||x===i.memoizedProps&&Z===i.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ge),S.props=h,S.state=ge,S.context=L,h=K):(typeof S.componentDidUpdate!="function"||x===i.memoizedProps&&Z===i.memoizedState||(o.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||x===i.memoizedProps&&Z===i.memoizedState||(o.flags|=1024),h=!1)}return bf(i,o,l,h,v,p)}function bf(i,o,l,h,p,v){py(i,o);var S=(o.flags&128)!==0;if(!h&&!S)return p&&wv(o,l,!1),ti(i,o,v);h=o.stateNode,Nb.current=o;var x=S&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,i!==null&&S?(o.child=Us(o,i.child,null,v),o.child=Us(o,null,x,v)):sr(i,o,x,v),o.memoizedState=h.state,p&&wv(o,l,!0),o.child}function my(i){var o=i.stateNode;o.pendingContext?yv(i,o.pendingContext,o.pendingContext!==o.context):o.context&&yv(i,o.context,!1),lf(i,o.containerInfo)}function vy(i,o,l,h,p){return Bs(),ef(p),o.flags|=256,sr(i,o,l,h),o.child}var Cf={dehydrated:null,treeContext:null,retryLane:0};function Af(i){return{baseLanes:i,cachePool:null,transitions:null}}function yy(i,o,l){var h=o.pendingProps,p=ht.current,v=!1,S=(o.flags&128)!==0,x;if((x=S)||(x=i!==null&&i.memoizedState===null?!1:(p&2)!==0),x?(v=!0,o.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),ot(ht,p&1),i===null)return Zh(o),i=o.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((o.mode&1)===0?o.lanes=1:i.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(S=h.children,i=h.fallback,v?(h=o.mode,v=o.child,S={mode:"hidden",children:S},(h&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=S):v=Rc(S,h,0,null),i=Fo(i,h,l,null),v.return=o,i.return=o,v.sibling=i,o.child=v,o.child.memoizedState=Af(l),o.memoizedState=Cf,i):Pf(o,S));if(p=i.memoizedState,p!==null&&(x=p.dehydrated,x!==null))return Ob(i,o,S,h,x,p,l);if(v){v=h.fallback,S=o.mode,p=i.child,x=p.sibling;var L={mode:"hidden",children:h.children};return(S&1)===0&&o.child!==p?(h=o.child,h.childLanes=0,h.pendingProps=L,o.deletions=null):(h=Mi(p,L),h.subtreeFlags=p.subtreeFlags&14680064),x!==null?v=Mi(x,v):(v=Fo(v,S,l,null),v.flags|=2),v.return=o,h.return=o,h.sibling=v,o.child=h,h=v,v=o.child,S=i.child.memoizedState,S=S===null?Af(l):{baseLanes:S.baseLanes|l,cachePool:null,transitions:S.transitions},v.memoizedState=S,v.childLanes=i.childLanes&~l,o.memoizedState=Cf,h}return v=i.child,i=v.sibling,h=Mi(v,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,i!==null&&(l=o.deletions,l===null?(o.deletions=[i],o.flags|=16):l.push(i)),o.child=h,o.memoizedState=null,h}function Pf(i,o){return o=Rc({mode:"visible",children:o},i.mode,0,null),o.return=i,i.child=o}function mc(i,o,l,h){return h!==null&&ef(h),Us(o,i.child,null,l),i=Pf(o,o.pendingProps.children),i.flags|=2,o.memoizedState=null,i}function Ob(i,o,l,h,p,v,S){if(l)return o.flags&256?(o.flags&=-257,h=If(Error(r(422))),mc(i,o,S,h)):o.memoizedState!==null?(o.child=i.child,o.flags|=128,null):(v=h.fallback,p=o.mode,h=Rc({mode:"visible",children:h.children},p,0,null),v=Fo(v,p,S,null),v.flags|=2,h.return=o,v.return=o,h.sibling=v,o.child=h,(o.mode&1)!==0&&Us(o,i.child,null,S),o.child.memoizedState=Af(S),o.memoizedState=Cf,v);if((o.mode&1)===0)return mc(i,o,S,null);if(p.data==="$!"){if(h=p.nextSibling&&p.nextSibling.dataset,h)var x=h.dgst;return h=x,v=Error(r(419)),h=If(v,h,void 0),mc(i,o,S,h)}if(x=(S&i.childLanes)!==0,fr||x){if(h=Lt,h!==null){switch(S&-S){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(h.suspendedLanes|S))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Zn(i,p),hn(h,i,p,-1))}return Wf(),h=If(Error(r(421))),mc(i,o,S,h)}return p.data==="$?"?(o.flags|=128,o.child=i.child,o=qb.bind(null,i),p._reactRetry=o,null):(i=v.treeContext,Cr=bi(p.nextSibling),br=o,ct=!0,ln=null,i!==null&&(Br[Ur++]=Xn,Br[Ur++]=Jn,Br[Ur++]=Ro,Xn=i.id,Jn=i.overflow,Ro=o),o=Pf(o,h.children),o.flags|=4096,o)}function _y(i,o,l){i.lanes|=o;var h=i.alternate;h!==null&&(h.lanes|=o),of(i.return,o,l)}function Rf(i,o,l,h,p){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:p}:(v.isBackwards=o,v.rendering=null,v.renderingStartTime=0,v.last=h,v.tail=l,v.tailMode=p)}function wy(i,o,l){var h=o.pendingProps,p=h.revealOrder,v=h.tail;if(sr(i,o,h.children,l),h=ht.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=o.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&_y(i,l,o);else if(i.tag===19)_y(i,l,o);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===o)break e;for(;i.sibling===null;){if(i.return===null||i.return===o)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}h&=1}if(ot(ht,h),(o.mode&1)===0)o.memoizedState=null;else switch(p){case"forwards":for(l=o.child,p=null;l!==null;)i=l.alternate,i!==null&&uc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=o.child,o.child=null):(p=l.sibling,l.sibling=null),Rf(o,!1,p,l,v);break;case"backwards":for(l=null,p=o.child,o.child=null;p!==null;){if(i=p.alternate,i!==null&&uc(i)===null){o.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Rf(o,!0,l,null,v);break;case"together":Rf(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function vc(i,o){(o.mode&1)===0&&i!==null&&(i.alternate=null,o.alternate=null,o.flags|=2)}function ti(i,o,l){if(i!==null&&(o.dependencies=i.dependencies),Oo|=o.lanes,(l&o.childLanes)===0)return null;if(i!==null&&o.child!==i.child)throw Error(r(153));if(o.child!==null){for(i=o.child,l=Mi(i,i.pendingProps),o.child=l,l.return=o;i.sibling!==null;)i=i.sibling,l=l.sibling=Mi(i,i.pendingProps),l.return=o;l.sibling=null}return o.child}function Lb(i,o,l){switch(o.tag){case 3:my(o),Bs();break;case 5:Ov(o);break;case 1:hr(o.type)&&Zu(o);break;case 4:lf(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,p=o.memoizedProps.value;ot(oc,h._currentValue),h._currentValue=p;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(ot(ht,ht.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?yy(i,o,l):(ot(ht,ht.current&1),i=ti(i,o,l),i!==null?i.sibling:null);ot(ht,ht.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(i.flags&128)!==0){if(h)return wy(i,o,l);o.flags|=128}if(p=o.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ot(ht,ht.current),h)break;return null;case 22:case 23:return o.lanes=0,fy(i,o,l)}return ti(i,o,l)}var Ey,xf,Iy,Sy;Ey=function(i,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},xf=function(){},Iy=function(i,o,l,h){var p=i.memoizedProps;if(p!==h){i=o.stateNode,Do(An.current);var v=null;switch(l){case"input":p=Nr(i,p),h=Nr(i,h),v=[];break;case"select":p=ae({},p,{value:void 0}),h=ae({},h,{value:void 0}),v=[];break;case"textarea":p=Oa(i,p),h=Oa(i,h),v=[];break;default:typeof p.onClick!="function"&&typeof h.onClick=="function"&&(i.onclick=Yu)}Ua(l,h);var S;l=null;for(K in p)if(!h.hasOwnProperty(K)&&p.hasOwnProperty(K)&&p[K]!=null)if(K==="style"){var x=p[K];for(S in x)x.hasOwnProperty(S)&&(l||(l={}),l[S]="")}else K!=="dangerouslySetInnerHTML"&&K!=="children"&&K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&K!=="autoFocus"&&(s.hasOwnProperty(K)?v||(v=[]):(v=v||[]).push(K,null));for(K in h){var L=h[K];if(x=p!=null?p[K]:void 0,h.hasOwnProperty(K)&&L!==x&&(L!=null||x!=null))if(K==="style")if(x){for(S in x)!x.hasOwnProperty(S)||L&&L.hasOwnProperty(S)||(l||(l={}),l[S]="");for(S in L)L.hasOwnProperty(S)&&x[S]!==L[S]&&(l||(l={}),l[S]=L[S])}else l||(v||(v=[]),v.push(K,l)),l=L;else K==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,x=x?x.__html:void 0,L!=null&&x!==L&&(v=v||[]).push(K,L)):K==="children"?typeof L!="string"&&typeof L!="number"||(v=v||[]).push(K,""+L):K!=="suppressContentEditableWarning"&&K!=="suppressHydrationWarning"&&(s.hasOwnProperty(K)?(L!=null&&K==="onScroll"&&st("scroll",i),v||x===L||(v=[])):(v=v||[]).push(K,L))}l&&(v=v||[]).push("style",l);var K=v;(o.updateQueue=K)&&(o.flags|=4)}},Sy=function(i,o,l,h){l!==h&&(o.flags|=4)};function wl(i,o){if(!ct)switch(i.tailMode){case"hidden":o=i.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||i.tail===null?i.tail=null:i.tail.sibling=null:h.sibling=null}}function Jt(i){var o=i.alternate!==null&&i.alternate.child===i.child,l=0,h=0;if(o)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags&14680064,h|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,h|=p.subtreeFlags,h|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=h,i.childLanes=l,o}function Mb(i,o,l){var h=o.pendingProps;switch(Xh(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(o),null;case 1:return hr(o.type)&&Ju(),Jt(o),null;case 3:return h=o.stateNode,zs(),at(dr),at(Yt),df(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(i===null||i.child===null)&&(nc(o)?o.flags|=4:i===null||i.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ln!==null&&(jf(ln),ln=null))),xf(i,o),Jt(o),null;case 5:uf(o);var p=Do(gl.current);if(l=o.type,i!==null&&o.stateNode!=null)Iy(i,o,l,h,p),i.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(r(166));return Jt(o),null}if(i=Do(An.current),nc(o)){h=o.stateNode,l=o.type;var v=o.memoizedProps;switch(h[Cn]=o,h[cl]=v,i=(o.mode&1)!==0,l){case"dialog":st("cancel",h),st("close",h);break;case"iframe":case"object":case"embed":st("load",h);break;case"video":case"audio":for(p=0;p<al.length;p++)st(al[p],h);break;case"source":st("error",h);break;case"img":case"image":case"link":st("error",h),st("load",h);break;case"details":st("toggle",h);break;case"input":Fn(h,v),st("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!v.multiple},st("invalid",h);break;case"textarea":ss(h,v),st("invalid",h)}Ua(l,v),p=null;for(var S in v)if(v.hasOwnProperty(S)){var x=v[S];S==="children"?typeof x=="string"?h.textContent!==x&&(v.suppressHydrationWarning!==!0&&Qu(h.textContent,x,i),p=["children",x]):typeof x=="number"&&h.textContent!==""+x&&(v.suppressHydrationWarning!==!0&&Qu(h.textContent,x,i),p=["children",""+x]):s.hasOwnProperty(S)&&x!=null&&S==="onScroll"&&st("scroll",h)}switch(l){case"input":kt(h),os(h,v,!0);break;case"textarea":kt(h),La(h);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(h.onclick=Yu)}h=p,o.updateQueue=h,h!==null&&(o.flags|=4)}else{S=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=St(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=S.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof h.is=="string"?i=S.createElement(l,{is:h.is}):(i=S.createElement(l),l==="select"&&(S=i,h.multiple?S.multiple=!0:h.size&&(S.size=h.size))):i=S.createElementNS(i,l),i[Cn]=o,i[cl]=h,Ey(i,o,!1,!1),o.stateNode=i;e:{switch(S=ja(l,h),l){case"dialog":st("cancel",i),st("close",i),p=h;break;case"iframe":case"object":case"embed":st("load",i),p=h;break;case"video":case"audio":for(p=0;p<al.length;p++)st(al[p],i);p=h;break;case"source":st("error",i),p=h;break;case"img":case"image":case"link":st("error",i),st("load",i),p=h;break;case"details":st("toggle",i),p=h;break;case"input":Fn(i,h),p=Nr(i,h),st("invalid",i);break;case"option":p=h;break;case"select":i._wrapperState={wasMultiple:!!h.multiple},p=ae({},h,{value:void 0}),st("invalid",i);break;case"textarea":ss(i,h),p=Oa(i,h),st("invalid",i);break;default:p=h}Ua(l,p),x=p;for(v in x)if(x.hasOwnProperty(v)){var L=x[v];v==="style"?Fa(i,L):v==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&Ma(i,L)):v==="children"?typeof L=="string"?(l!=="textarea"||L!=="")&&pi(i,L):typeof L=="number"&&pi(i,""+L):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?L!=null&&v==="onScroll"&&st("scroll",i):L!=null&&W(i,v,L,S))}switch(l){case"input":kt(i),os(i,h,!1);break;case"textarea":kt(i),La(i);break;case"option":h.value!=null&&i.setAttribute("value",""+Ne(h.value));break;case"select":i.multiple=!!h.multiple,v=h.value,v!=null?jn(i,!!h.multiple,v,!1):h.defaultValue!=null&&jn(i,!!h.multiple,h.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=Yu)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return Jt(o),null;case 6:if(i&&o.stateNode!=null)Sy(i,o,i.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(r(166));if(l=Do(gl.current),Do(An.current),nc(o)){if(h=o.stateNode,l=o.memoizedProps,h[Cn]=o,(v=h.nodeValue!==l)&&(i=br,i!==null))switch(i.tag){case 3:Qu(h.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Qu(h.nodeValue,l,(i.mode&1)!==0)}v&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Cn]=o,o.stateNode=h}return Jt(o),null;case 13:if(at(ht),h=o.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(ct&&Cr!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Cv(),Bs(),o.flags|=98560,v=!1;else if(v=nc(o),h!==null&&h.dehydrated!==null){if(i===null){if(!v)throw Error(r(318));if(v=o.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(r(317));v[Cn]=o}else Bs(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;Jt(o),v=!1}else ln!==null&&(jf(ln),ln=null),v=!0;if(!v)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(i!==null&&i.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(i===null||(ht.current&1)!==0?At===0&&(At=3):Wf())),o.updateQueue!==null&&(o.flags|=4),Jt(o),null);case 4:return zs(),xf(i,o),i===null&&ll(o.stateNode.containerInfo),Jt(o),null;case 10:return nf(o.type._context),Jt(o),null;case 17:return hr(o.type)&&Ju(),Jt(o),null;case 19:if(at(ht),v=o.memoizedState,v===null)return Jt(o),null;if(h=(o.flags&128)!==0,S=v.rendering,S===null)if(h)wl(v,!1);else{if(At!==0||i!==null&&(i.flags&128)!==0)for(i=o.child;i!==null;){if(S=uc(i),S!==null){for(o.flags|=128,wl(v,!1),h=S.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)v=l,i=h,v.flags&=14680066,S=v.alternate,S===null?(v.childLanes=0,v.lanes=i,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=S.childLanes,v.lanes=S.lanes,v.child=S.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=S.memoizedProps,v.memoizedState=S.memoizedState,v.updateQueue=S.updateQueue,v.type=S.type,i=S.dependencies,v.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return ot(ht,ht.current&1|2),o.child}i=i.sibling}v.tail!==null&&it()>qs&&(o.flags|=128,h=!0,wl(v,!1),o.lanes=4194304)}else{if(!h)if(i=uc(S),i!==null){if(o.flags|=128,h=!0,l=i.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),wl(v,!0),v.tail===null&&v.tailMode==="hidden"&&!S.alternate&&!ct)return Jt(o),null}else 2*it()-v.renderingStartTime>qs&&l!==1073741824&&(o.flags|=128,h=!0,wl(v,!1),o.lanes=4194304);v.isBackwards?(S.sibling=o.child,o.child=S):(l=v.last,l!==null?l.sibling=S:o.child=S,v.last=S)}return v.tail!==null?(o=v.tail,v.rendering=o,v.tail=o.sibling,v.renderingStartTime=it(),o.sibling=null,l=ht.current,ot(ht,h?l&1|2:l&1),o):(Jt(o),null);case 22:case 23:return zf(),h=o.memoizedState!==null,i!==null&&i.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Ar&1073741824)!==0&&(Jt(o),o.subtreeFlags&6&&(o.flags|=8192)):Jt(o),null;case 24:return null;case 25:return null}throw Error(r(156,o.tag))}function Vb(i,o){switch(Xh(o),o.tag){case 1:return hr(o.type)&&Ju(),i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 3:return zs(),at(dr),at(Yt),df(),i=o.flags,(i&65536)!==0&&(i&128)===0?(o.flags=i&-65537|128,o):null;case 5:return uf(o),null;case 13:if(at(ht),i=o.memoizedState,i!==null&&i.dehydrated!==null){if(o.alternate===null)throw Error(r(340));Bs()}return i=o.flags,i&65536?(o.flags=i&-65537|128,o):null;case 19:return at(ht),null;case 4:return zs(),null;case 10:return nf(o.type._context),null;case 22:case 23:return zf(),null;case 24:return null;default:return null}}var yc=!1,Zt=!1,Fb=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Gs(i,o){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){gt(i,o,h)}else l.current=null}function kf(i,o,l){try{l()}catch(h){gt(i,o,h)}}var Ty=!1;function Bb(i,o){if($h=Ii,i=rv(),Oh(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var p=h.anchorOffset,v=h.focusNode;h=h.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var S=0,x=-1,L=-1,K=0,ee=0,ne=i,Z=null;t:for(;;){for(var de;ne!==l||p!==0&&ne.nodeType!==3||(x=S+p),ne!==v||h!==0&&ne.nodeType!==3||(L=S+h),ne.nodeType===3&&(S+=ne.nodeValue.length),(de=ne.firstChild)!==null;)Z=ne,ne=de;for(;;){if(ne===i)break t;if(Z===l&&++K===p&&(x=S),Z===v&&++ee===h&&(L=S),(de=ne.nextSibling)!==null)break;ne=Z,Z=ne.parentNode}ne=de}l=x===-1||L===-1?null:{start:x,end:L}}else l=null}l=l||{start:0,end:0}}else l=null;for(zh={focusedElem:i,selectionRange:l},Ii=!1,fe=o;fe!==null;)if(o=fe,i=o.child,(o.subtreeFlags&1028)!==0&&i!==null)i.return=o,fe=i;else for(;fe!==null;){o=fe;try{var ge=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var me=ge.memoizedProps,vt=ge.memoizedState,z=o.stateNode,M=z.getSnapshotBeforeUpdate(o.elementType===o.type?me:un(o.type,me),vt);z.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var H=o.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(se){gt(o,o.return,se)}if(i=o.sibling,i!==null){i.return=o.return,fe=i;break}fe=o.return}return ge=Ty,Ty=!1,ge}function El(i,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var p=h=h.next;do{if((p.tag&i)===i){var v=p.destroy;p.destroy=void 0,v!==void 0&&kf(o,l,v)}p=p.next}while(p!==h)}}function _c(i,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&i)===i){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Df(i){var o=i.ref;if(o!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof o=="function"?o(i):o.current=i}}function by(i){var o=i.alternate;o!==null&&(i.alternate=null,by(o)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(o=i.stateNode,o!==null&&(delete o[Cn],delete o[cl],delete o[qh],delete o[Eb],delete o[Ib])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function Cy(i){return i.tag===5||i.tag===3||i.tag===4}function Ay(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||Cy(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Nf(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(i,o):l.insertBefore(i,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(i,l)):(o=l,o.appendChild(i)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=Yu));else if(h!==4&&(i=i.child,i!==null))for(Nf(i,o,l),i=i.sibling;i!==null;)Nf(i,o,l),i=i.sibling}function Of(i,o,l){var h=i.tag;if(h===5||h===6)i=i.stateNode,o?l.insertBefore(i,o):l.appendChild(i);else if(h!==4&&(i=i.child,i!==null))for(Of(i,o,l),i=i.sibling;i!==null;)Of(i,o,l),i=i.sibling}var Wt=null,cn=!1;function ki(i,o,l){for(l=l.child;l!==null;)Py(i,o,l),l=l.sibling}function Py(i,o,l){if(Er&&typeof Er.onCommitFiberUnmount=="function")try{Er.onCommitFiberUnmount(wo,l)}catch{}switch(l.tag){case 5:Zt||Gs(l,o);case 6:var h=Wt,p=cn;Wt=null,ki(i,o,l),Wt=h,cn=p,Wt!==null&&(cn?(i=Wt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Wt.removeChild(l.stateNode));break;case 18:Wt!==null&&(cn?(i=Wt,l=l.stateNode,i.nodeType===8?Hh(i.parentNode,l):i.nodeType===1&&Hh(i,l),on(i)):Hh(Wt,l.stateNode));break;case 4:h=Wt,p=cn,Wt=l.stateNode.containerInfo,cn=!0,ki(i,o,l),Wt=h,cn=p;break;case 0:case 11:case 14:case 15:if(!Zt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){p=h=h.next;do{var v=p,S=v.destroy;v=v.tag,S!==void 0&&((v&2)!==0||(v&4)!==0)&&kf(l,o,S),p=p.next}while(p!==h)}ki(i,o,l);break;case 1:if(!Zt&&(Gs(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(x){gt(l,o,x)}ki(i,o,l);break;case 21:ki(i,o,l);break;case 22:l.mode&1?(Zt=(h=Zt)||l.memoizedState!==null,ki(i,o,l),Zt=h):ki(i,o,l);break;default:ki(i,o,l)}}function Ry(i){var o=i.updateQueue;if(o!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new Fb),o.forEach(function(h){var p=Kb.bind(null,i,h);l.has(h)||(l.add(h),h.then(p,p))})}}function dn(i,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var p=l[h];try{var v=i,S=o,x=S;e:for(;x!==null;){switch(x.tag){case 5:Wt=x.stateNode,cn=!1;break e;case 3:Wt=x.stateNode.containerInfo,cn=!0;break e;case 4:Wt=x.stateNode.containerInfo,cn=!0;break e}x=x.return}if(Wt===null)throw Error(r(160));Py(v,S,p),Wt=null,cn=!1;var L=p.alternate;L!==null&&(L.return=null),p.return=null}catch(K){gt(p,o,K)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)xy(o,i),o=o.sibling}function xy(i,o){var l=i.alternate,h=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(dn(o,i),Rn(i),h&4){try{El(3,i,i.return),_c(3,i)}catch(me){gt(i,i.return,me)}try{El(5,i,i.return)}catch(me){gt(i,i.return,me)}}break;case 1:dn(o,i),Rn(i),h&512&&l!==null&&Gs(l,l.return);break;case 5:if(dn(o,i),Rn(i),h&512&&l!==null&&Gs(l,l.return),i.flags&32){var p=i.stateNode;try{pi(p,"")}catch(me){gt(i,i.return,me)}}if(h&4&&(p=i.stateNode,p!=null)){var v=i.memoizedProps,S=l!==null?l.memoizedProps:v,x=i.type,L=i.updateQueue;if(i.updateQueue=null,L!==null)try{x==="input"&&v.type==="radio"&&v.name!=null&&Bn(p,v),ja(x,S);var K=ja(x,v);for(S=0;S<L.length;S+=2){var ee=L[S],ne=L[S+1];ee==="style"?Fa(p,ne):ee==="dangerouslySetInnerHTML"?Ma(p,ne):ee==="children"?pi(p,ne):W(p,ee,ne,K)}switch(x){case"input":Un(p,v);break;case"textarea":as(p,v);break;case"select":var Z=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var de=v.value;de!=null?jn(p,!!v.multiple,de,!1):Z!==!!v.multiple&&(v.defaultValue!=null?jn(p,!!v.multiple,v.defaultValue,!0):jn(p,!!v.multiple,v.multiple?[]:"",!1))}p[cl]=v}catch(me){gt(i,i.return,me)}}break;case 6:if(dn(o,i),Rn(i),h&4){if(i.stateNode===null)throw Error(r(162));p=i.stateNode,v=i.memoizedProps;try{p.nodeValue=v}catch(me){gt(i,i.return,me)}}break;case 3:if(dn(o,i),Rn(i),h&4&&l!==null&&l.memoizedState.isDehydrated)try{on(o.containerInfo)}catch(me){gt(i,i.return,me)}break;case 4:dn(o,i),Rn(i);break;case 13:dn(o,i),Rn(i),p=i.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Vf=it())),h&4&&Ry(i);break;case 22:if(ee=l!==null&&l.memoizedState!==null,i.mode&1?(Zt=(K=Zt)||ee,dn(o,i),Zt=K):dn(o,i),Rn(i),h&8192){if(K=i.memoizedState!==null,(i.stateNode.isHidden=K)&&!ee&&(i.mode&1)!==0)for(fe=i,ee=i.child;ee!==null;){for(ne=fe=ee;fe!==null;){switch(Z=fe,de=Z.child,Z.tag){case 0:case 11:case 14:case 15:El(4,Z,Z.return);break;case 1:Gs(Z,Z.return);var ge=Z.stateNode;if(typeof ge.componentWillUnmount=="function"){h=Z,l=Z.return;try{o=h,ge.props=o.memoizedProps,ge.state=o.memoizedState,ge.componentWillUnmount()}catch(me){gt(h,l,me)}}break;case 5:Gs(Z,Z.return);break;case 22:if(Z.memoizedState!==null){Ny(ne);continue}}de!==null?(de.return=Z,fe=de):Ny(ne)}ee=ee.sibling}e:for(ee=null,ne=i;;){if(ne.tag===5){if(ee===null){ee=ne;try{p=ne.stateNode,K?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(x=ne.stateNode,L=ne.memoizedProps.style,S=L!=null&&L.hasOwnProperty("display")?L.display:null,x.style.display=Va("display",S))}catch(me){gt(i,i.return,me)}}}else if(ne.tag===6){if(ee===null)try{ne.stateNode.nodeValue=K?"":ne.memoizedProps}catch(me){gt(i,i.return,me)}}else if((ne.tag!==22&&ne.tag!==23||ne.memoizedState===null||ne===i)&&ne.child!==null){ne.child.return=ne,ne=ne.child;continue}if(ne===i)break e;for(;ne.sibling===null;){if(ne.return===null||ne.return===i)break e;ee===ne&&(ee=null),ne=ne.return}ee===ne&&(ee=null),ne.sibling.return=ne.return,ne=ne.sibling}}break;case 19:dn(o,i),Rn(i),h&4&&Ry(i);break;case 21:break;default:dn(o,i),Rn(i)}}function Rn(i){var o=i.flags;if(o&2){try{e:{for(var l=i.return;l!==null;){if(Cy(l)){var h=l;break e}l=l.return}throw Error(r(160))}switch(h.tag){case 5:var p=h.stateNode;h.flags&32&&(pi(p,""),h.flags&=-33);var v=Ay(i);Of(i,v,p);break;case 3:case 4:var S=h.stateNode.containerInfo,x=Ay(i);Nf(i,x,S);break;default:throw Error(r(161))}}catch(L){gt(i,i.return,L)}i.flags&=-3}o&4096&&(i.flags&=-4097)}function Ub(i,o,l){fe=i,ky(i)}function ky(i,o,l){for(var h=(i.mode&1)!==0;fe!==null;){var p=fe,v=p.child;if(p.tag===22&&h){var S=p.memoizedState!==null||yc;if(!S){var x=p.alternate,L=x!==null&&x.memoizedState!==null||Zt;x=yc;var K=Zt;if(yc=S,(Zt=L)&&!K)for(fe=p;fe!==null;)S=fe,L=S.child,S.tag===22&&S.memoizedState!==null?Oy(p):L!==null?(L.return=S,fe=L):Oy(p);for(;v!==null;)fe=v,ky(v),v=v.sibling;fe=p,yc=x,Zt=K}Dy(i)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,fe=v):Dy(i)}}function Dy(i){for(;fe!==null;){var o=fe;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:Zt||_c(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!Zt)if(l===null)h.componentDidMount();else{var p=o.elementType===o.type?l.memoizedProps:un(o.type,l.memoizedProps);h.componentDidUpdate(p,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var v=o.updateQueue;v!==null&&Nv(o,v,h);break;case 3:var S=o.updateQueue;if(S!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Nv(o,S,l)}break;case 5:var x=o.stateNode;if(l===null&&o.flags&4){l=x;var L=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&l.focus();break;case"img":L.src&&(l.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var K=o.alternate;if(K!==null){var ee=K.memoizedState;if(ee!==null){var ne=ee.dehydrated;ne!==null&&on(ne)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}Zt||o.flags&512&&Df(o)}catch(Z){gt(o,o.return,Z)}}if(o===i){fe=null;break}if(l=o.sibling,l!==null){l.return=o.return,fe=l;break}fe=o.return}}function Ny(i){for(;fe!==null;){var o=fe;if(o===i){fe=null;break}var l=o.sibling;if(l!==null){l.return=o.return,fe=l;break}fe=o.return}}function Oy(i){for(;fe!==null;){var o=fe;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{_c(4,o)}catch(L){gt(o,l,L)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var p=o.return;try{h.componentDidMount()}catch(L){gt(o,p,L)}}var v=o.return;try{Df(o)}catch(L){gt(o,v,L)}break;case 5:var S=o.return;try{Df(o)}catch(L){gt(o,S,L)}}}catch(L){gt(o,o.return,L)}if(o===i){fe=null;break}var x=o.sibling;if(x!==null){x.return=o.return,fe=x;break}fe=o.return}}var jb=Math.ceil,wc=q.ReactCurrentDispatcher,Lf=q.ReactCurrentOwner,zr=q.ReactCurrentBatchConfig,He=0,Lt=null,wt=null,Gt=0,Ar=0,Hs=Ci(0),At=0,Il=null,Oo=0,Ec=0,Mf=0,Sl=null,pr=null,Vf=0,qs=1/0,ri=null,Ic=!1,Ff=null,Di=null,Sc=!1,Ni=null,Tc=0,Tl=0,Bf=null,bc=-1,Cc=0;function ar(){return(He&6)!==0?it():bc!==-1?bc:bc=it()}function Oi(i){return(i.mode&1)===0?1:(He&2)!==0&&Gt!==0?Gt&-Gt:Tb.transition!==null?(Cc===0&&(Cc=Io()),Cc):(i=ze,i!==0||(i=window.event,i=i===void 0?16:Ja(i.type)),i)}function hn(i,o,l,h){if(50<Tl)throw Tl=0,Bf=null,Error(r(185));yi(i,l,h),((He&2)===0||i!==Lt)&&(i===Lt&&((He&2)===0&&(Ec|=l),At===4&&Li(i,Gt)),gr(i,h),l===1&&He===0&&(o.mode&1)===0&&(qs=it()+500,ec&&Pi()))}function gr(i,o){var l=i.callbackNode;Wn(i,o);var h=Eo(i,i===Lt?Gt:0);if(h===0)l!==null&&qa(l),i.callbackNode=null,i.callbackPriority=0;else if(o=h&-h,i.callbackPriority!==o){if(l!=null&&qa(l),o===1)i.tag===0?Sb(My.bind(null,i)):Ev(My.bind(null,i)),_b(function(){(He&6)===0&&Pi()}),l=null;else{switch(wi(h)){case 1:l=_o;break;case 4:l=gi;break;case 16:l=Mr;break;case 536870912:l=Cu;break;default:l=Mr}l=Wy(l,Ly.bind(null,i))}i.callbackPriority=o,i.callbackNode=l}}function Ly(i,o){if(bc=-1,Cc=0,(He&6)!==0)throw Error(r(327));var l=i.callbackNode;if(Ks()&&i.callbackNode!==l)return null;var h=Eo(i,i===Lt?Gt:0);if(h===0)return null;if((h&30)!==0||(h&i.expiredLanes)!==0||o)o=Ac(i,h);else{o=h;var p=He;He|=2;var v=Fy();(Lt!==i||Gt!==o)&&(ri=null,qs=it()+500,Mo(i,o));do try{Wb();break}catch(x){Vy(i,x)}while(!0);rf(),wc.current=v,He=p,wt!==null?o=0:(Lt=null,Gt=0,o=At)}if(o!==0){if(o===2&&(p=Ir(i),p!==0&&(h=p,o=Uf(i,p))),o===1)throw l=Il,Mo(i,0),Li(i,h),gr(i,it()),l;if(o===6)Li(i,h);else{if(p=i.current.alternate,(h&30)===0&&!$b(p)&&(o=Ac(i,h),o===2&&(v=Ir(i),v!==0&&(h=v,o=Uf(i,v))),o===1))throw l=Il,Mo(i,0),Li(i,h),gr(i,it()),l;switch(i.finishedWork=p,i.finishedLanes=h,o){case 0:case 1:throw Error(r(345));case 2:Vo(i,pr,ri);break;case 3:if(Li(i,h),(h&130023424)===h&&(o=Vf+500-it(),10<o)){if(Eo(i,0)!==0)break;if(p=i.suspendedLanes,(p&h)!==h){ar(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Gh(Vo.bind(null,i,pr,ri),o);break}Vo(i,pr,ri);break;case 4:if(Li(i,h),(h&4194240)===h)break;for(o=i.eventTimes,p=-1;0<h;){var S=31-ir(h);v=1<<S,S=o[S],S>p&&(p=S),h&=~v}if(h=p,h=it()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*jb(h/1960))-h,10<h){i.timeoutHandle=Gh(Vo.bind(null,i,pr,ri),h);break}Vo(i,pr,ri);break;case 5:Vo(i,pr,ri);break;default:throw Error(r(329))}}}return gr(i,it()),i.callbackNode===l?Ly.bind(null,i):null}function Uf(i,o){var l=Sl;return i.current.memoizedState.isDehydrated&&(Mo(i,o).flags|=256),i=Ac(i,o),i!==2&&(o=pr,pr=l,o!==null&&jf(o)),i}function jf(i){pr===null?pr=i:pr.push.apply(pr,i)}function $b(i){for(var o=i;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var p=l[h],v=p.getSnapshot;p=p.value;try{if(!an(v(),p))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Li(i,o){for(o&=~Mf,o&=~Ec,i.suspendedLanes|=o,i.pingedLanes&=~o,i=i.expirationTimes;0<o;){var l=31-ir(o),h=1<<l;i[l]=-1,o&=~h}}function My(i){if((He&6)!==0)throw Error(r(327));Ks();var o=Eo(i,0);if((o&1)===0)return gr(i,it()),null;var l=Ac(i,o);if(i.tag!==0&&l===2){var h=Ir(i);h!==0&&(o=h,l=Uf(i,h))}if(l===1)throw l=Il,Mo(i,0),Li(i,o),gr(i,it()),l;if(l===6)throw Error(r(345));return i.finishedWork=i.current.alternate,i.finishedLanes=o,Vo(i,pr,ri),gr(i,it()),null}function $f(i,o){var l=He;He|=1;try{return i(o)}finally{He=l,He===0&&(qs=it()+500,ec&&Pi())}}function Lo(i){Ni!==null&&Ni.tag===0&&(He&6)===0&&Ks();var o=He;He|=1;var l=zr.transition,h=ze;try{if(zr.transition=null,ze=1,i)return i()}finally{ze=h,zr.transition=l,He=o,(He&6)===0&&Pi()}}function zf(){Ar=Hs.current,at(Hs)}function Mo(i,o){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,yb(l)),wt!==null)for(l=wt.return;l!==null;){var h=l;switch(Xh(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Ju();break;case 3:zs(),at(dr),at(Yt),df();break;case 5:uf(h);break;case 4:zs();break;case 13:at(ht);break;case 19:at(ht);break;case 10:nf(h.type._context);break;case 22:case 23:zf()}l=l.return}if(Lt=i,wt=i=Mi(i.current,null),Gt=Ar=o,At=0,Il=null,Mf=Ec=Oo=0,pr=Sl=null,ko!==null){for(o=0;o<ko.length;o++)if(l=ko[o],h=l.interleaved,h!==null){l.interleaved=null;var p=h.next,v=l.pending;if(v!==null){var S=v.next;v.next=p,h.next=S}l.pending=h}ko=null}return i}function Vy(i,o){do{var l=wt;try{if(rf(),cc.current=pc,dc){for(var h=ft.memoizedState;h!==null;){var p=h.queue;p!==null&&(p.pending=null),h=h.next}dc=!1}if(No=0,Ot=Ct=ft=null,ml=!1,vl=0,Lf.current=null,l===null||l.return===null){At=1,Il=o,wt=null;break}e:{var v=i,S=l.return,x=l,L=o;if(o=Gt,x.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var K=L,ee=x,ne=ee.tag;if((ee.mode&1)===0&&(ne===0||ne===11||ne===15)){var Z=ee.alternate;Z?(ee.updateQueue=Z.updateQueue,ee.memoizedState=Z.memoizedState,ee.lanes=Z.lanes):(ee.updateQueue=null,ee.memoizedState=null)}var de=ly(S);if(de!==null){de.flags&=-257,uy(de,S,x,v,o),de.mode&1&&ay(v,K,o),o=de,L=K;var ge=o.updateQueue;if(ge===null){var me=new Set;me.add(L),o.updateQueue=me}else ge.add(L);break e}else{if((o&1)===0){ay(v,K,o),Wf();break e}L=Error(r(426))}}else if(ct&&x.mode&1){var vt=ly(S);if(vt!==null){(vt.flags&65536)===0&&(vt.flags|=256),uy(vt,S,x,v,o),ef(Ws(L,x));break e}}v=L=Ws(L,x),At!==4&&(At=2),Sl===null?Sl=[v]:Sl.push(v),v=S;do{switch(v.tag){case 3:v.flags|=65536,o&=-o,v.lanes|=o;var z=oy(v,L,o);Dv(v,z);break e;case 1:x=L;var M=v.type,H=v.stateNode;if((v.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(Di===null||!Di.has(H)))){v.flags|=65536,o&=-o,v.lanes|=o;var se=sy(v,x,o);Dv(v,se);break e}}v=v.return}while(v!==null)}Uy(l)}catch(ve){o=ve,wt===l&&l!==null&&(wt=l=l.return);continue}break}while(!0)}function Fy(){var i=wc.current;return wc.current=pc,i===null?pc:i}function Wf(){(At===0||At===3||At===2)&&(At=4),Lt===null||(Oo&268435455)===0&&(Ec&268435455)===0||Li(Lt,Gt)}function Ac(i,o){var l=He;He|=2;var h=Fy();(Lt!==i||Gt!==o)&&(ri=null,Mo(i,o));do try{zb();break}catch(p){Vy(i,p)}while(!0);if(rf(),He=l,wc.current=h,wt!==null)throw Error(r(261));return Lt=null,Gt=0,At}function zb(){for(;wt!==null;)By(wt)}function Wb(){for(;wt!==null&&!Tu();)By(wt)}function By(i){var o=zy(i.alternate,i,Ar);i.memoizedProps=i.pendingProps,o===null?Uy(i):wt=o,Lf.current=null}function Uy(i){var o=i;do{var l=o.alternate;if(i=o.return,(o.flags&32768)===0){if(l=Mb(l,o,Ar),l!==null){wt=l;return}}else{if(l=Vb(l,o),l!==null){l.flags&=32767,wt=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{At=6,wt=null;return}}if(o=o.sibling,o!==null){wt=o;return}wt=o=i}while(o!==null);At===0&&(At=5)}function Vo(i,o,l){var h=ze,p=zr.transition;try{zr.transition=null,ze=1,Gb(i,o,l,h)}finally{zr.transition=p,ze=h}return null}function Gb(i,o,l,h){do Ks();while(Ni!==null);if((He&6)!==0)throw Error(r(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(r(177));i.callbackNode=null,i.callbackPriority=0;var v=l.lanes|l.childLanes;if(nt(i,v),i===Lt&&(wt=Lt=null,Gt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Sc||(Sc=!0,Wy(Mr,function(){return Ks(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=zr.transition,zr.transition=null;var S=ze;ze=1;var x=He;He|=4,Lf.current=null,Bb(i,l),xy(l,i),db(zh),Ii=!!$h,zh=$h=null,i.current=l,Ub(l),Ch(),He=x,ze=S,zr.transition=v}else i.current=l;if(Sc&&(Sc=!1,Ni=i,Tc=p),v=i.pendingLanes,v===0&&(Di=null),Au(l.stateNode),gr(i,it()),o!==null)for(h=i.onRecoverableError,l=0;l<o.length;l++)p=o[l],h(p.value,{componentStack:p.stack,digest:p.digest});if(Ic)throw Ic=!1,i=Ff,Ff=null,i;return(Tc&1)!==0&&i.tag!==0&&Ks(),v=i.pendingLanes,(v&1)!==0?i===Bf?Tl++:(Tl=0,Bf=i):Tl=0,Pi(),null}function Ks(){if(Ni!==null){var i=wi(Tc),o=zr.transition,l=ze;try{if(zr.transition=null,ze=16>i?16:i,Ni===null)var h=!1;else{if(i=Ni,Ni=null,Tc=0,(He&6)!==0)throw Error(r(331));var p=He;for(He|=4,fe=i.current;fe!==null;){var v=fe,S=v.child;if((fe.flags&16)!==0){var x=v.deletions;if(x!==null){for(var L=0;L<x.length;L++){var K=x[L];for(fe=K;fe!==null;){var ee=fe;switch(ee.tag){case 0:case 11:case 15:El(8,ee,v)}var ne=ee.child;if(ne!==null)ne.return=ee,fe=ne;else for(;fe!==null;){ee=fe;var Z=ee.sibling,de=ee.return;if(by(ee),ee===K){fe=null;break}if(Z!==null){Z.return=de,fe=Z;break}fe=de}}}var ge=v.alternate;if(ge!==null){var me=ge.child;if(me!==null){ge.child=null;do{var vt=me.sibling;me.sibling=null,me=vt}while(me!==null)}}fe=v}}if((v.subtreeFlags&2064)!==0&&S!==null)S.return=v,fe=S;else e:for(;fe!==null;){if(v=fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:El(9,v,v.return)}var z=v.sibling;if(z!==null){z.return=v.return,fe=z;break e}fe=v.return}}var M=i.current;for(fe=M;fe!==null;){S=fe;var H=S.child;if((S.subtreeFlags&2064)!==0&&H!==null)H.return=S,fe=H;else e:for(S=M;fe!==null;){if(x=fe,(x.flags&2048)!==0)try{switch(x.tag){case 0:case 11:case 15:_c(9,x)}}catch(ve){gt(x,x.return,ve)}if(x===S){fe=null;break e}var se=x.sibling;if(se!==null){se.return=x.return,fe=se;break e}fe=x.return}}if(He=p,Pi(),Er&&typeof Er.onPostCommitFiberRoot=="function")try{Er.onPostCommitFiberRoot(wo,i)}catch{}h=!0}return h}finally{ze=l,zr.transition=o}}return!1}function jy(i,o,l){o=Ws(l,o),o=oy(i,o,1),i=xi(i,o,1),o=ar(),i!==null&&(yi(i,1,o),gr(i,o))}function gt(i,o,l){if(i.tag===3)jy(i,i,l);else for(;o!==null;){if(o.tag===3){jy(o,i,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Di===null||!Di.has(h))){i=Ws(l,i),i=sy(o,i,1),o=xi(o,i,1),i=ar(),o!==null&&(yi(o,1,i),gr(o,i));break}}o=o.return}}function Hb(i,o,l){var h=i.pingCache;h!==null&&h.delete(o),o=ar(),i.pingedLanes|=i.suspendedLanes&l,Lt===i&&(Gt&l)===l&&(At===4||At===3&&(Gt&130023424)===Gt&&500>it()-Vf?Mo(i,0):Mf|=l),gr(i,o)}function $y(i,o){o===0&&((i.mode&1)===0?o=1:(o=vs,vs<<=1,(vs&130023424)===0&&(vs=4194304)));var l=ar();i=Zn(i,o),i!==null&&(yi(i,o,l),gr(i,l))}function qb(i){var o=i.memoizedState,l=0;o!==null&&(l=o.retryLane),$y(i,l)}function Kb(i,o){var l=0;switch(i.tag){case 13:var h=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:h=i.stateNode;break;default:throw Error(r(314))}h!==null&&h.delete(o),$y(i,l)}var zy;zy=function(i,o,l){if(i!==null)if(i.memoizedProps!==o.pendingProps||dr.current)fr=!0;else{if((i.lanes&l)===0&&(o.flags&128)===0)return fr=!1,Lb(i,o,l);fr=(i.flags&131072)!==0}else fr=!1,ct&&(o.flags&1048576)!==0&&Iv(o,rc,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;vc(i,o),i=o.pendingProps;var p=Ms(o,Yt.current);$s(o,l),p=pf(null,o,h,i,p,l);var v=gf();return o.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,hr(h)?(v=!0,Zu(o)):v=!1,o.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,af(o),p.updater=gc,o.stateNode=p,p._reactInternals=o,Ef(o,h,i,l),o=bf(null,o,h,!0,v,l)):(o.tag=0,ct&&v&&Yh(o),sr(null,o,p,l),o=o.child),o;case 16:h=o.elementType;e:{switch(vc(i,o),i=o.pendingProps,p=h._init,h=p(h._payload),o.type=h,p=o.tag=Yb(h),i=un(h,i),p){case 0:o=Tf(null,o,h,i,l);break e;case 1:o=gy(null,o,h,i,l);break e;case 11:o=cy(null,o,h,i,l);break e;case 14:o=dy(null,o,h,un(h.type,i),l);break e}throw Error(r(306,h,""))}return o;case 0:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:un(h,p),Tf(i,o,h,p,l);case 1:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:un(h,p),gy(i,o,h,p,l);case 3:e:{if(my(o),i===null)throw Error(r(387));h=o.pendingProps,v=o.memoizedState,p=v.element,kv(i,o),lc(o,h,null,l);var S=o.memoizedState;if(h=S.element,v.isDehydrated)if(v={element:h,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},o.updateQueue.baseState=v,o.memoizedState=v,o.flags&256){p=Ws(Error(r(423)),o),o=vy(i,o,h,l,p);break e}else if(h!==p){p=Ws(Error(r(424)),o),o=vy(i,o,h,l,p);break e}else for(Cr=bi(o.stateNode.containerInfo.firstChild),br=o,ct=!0,ln=null,l=Rv(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Bs(),h===p){o=ti(i,o,l);break e}sr(i,o,h,l)}o=o.child}return o;case 5:return Ov(o),i===null&&Zh(o),h=o.type,p=o.pendingProps,v=i!==null?i.memoizedProps:null,S=p.children,Wh(h,p)?S=null:v!==null&&Wh(h,v)&&(o.flags|=32),py(i,o),sr(i,o,S,l),o.child;case 6:return i===null&&Zh(o),null;case 13:return yy(i,o,l);case 4:return lf(o,o.stateNode.containerInfo),h=o.pendingProps,i===null?o.child=Us(o,null,h,l):sr(i,o,h,l),o.child;case 11:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:un(h,p),cy(i,o,h,p,l);case 7:return sr(i,o,o.pendingProps,l),o.child;case 8:return sr(i,o,o.pendingProps.children,l),o.child;case 12:return sr(i,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,p=o.pendingProps,v=o.memoizedProps,S=p.value,ot(oc,h._currentValue),h._currentValue=S,v!==null)if(an(v.value,S)){if(v.children===p.children&&!dr.current){o=ti(i,o,l);break e}}else for(v=o.child,v!==null&&(v.return=o);v!==null;){var x=v.dependencies;if(x!==null){S=v.child;for(var L=x.firstContext;L!==null;){if(L.context===h){if(v.tag===1){L=ei(-1,l&-l),L.tag=2;var K=v.updateQueue;if(K!==null){K=K.shared;var ee=K.pending;ee===null?L.next=L:(L.next=ee.next,ee.next=L),K.pending=L}}v.lanes|=l,L=v.alternate,L!==null&&(L.lanes|=l),of(v.return,l,o),x.lanes|=l;break}L=L.next}}else if(v.tag===10)S=v.type===o.type?null:v.child;else if(v.tag===18){if(S=v.return,S===null)throw Error(r(341));S.lanes|=l,x=S.alternate,x!==null&&(x.lanes|=l),of(S,l,o),S=v.sibling}else S=v.child;if(S!==null)S.return=v;else for(S=v;S!==null;){if(S===o){S=null;break}if(v=S.sibling,v!==null){v.return=S.return,S=v;break}S=S.return}v=S}sr(i,o,p.children,l),o=o.child}return o;case 9:return p=o.type,h=o.pendingProps.children,$s(o,l),p=jr(p),h=h(p),o.flags|=1,sr(i,o,h,l),o.child;case 14:return h=o.type,p=un(h,o.pendingProps),p=un(h.type,p),dy(i,o,h,p,l);case 15:return hy(i,o,o.type,o.pendingProps,l);case 17:return h=o.type,p=o.pendingProps,p=o.elementType===h?p:un(h,p),vc(i,o),o.tag=1,hr(h)?(i=!0,Zu(o)):i=!1,$s(o,l),ny(o,h,p),Ef(o,h,p,l),bf(null,o,h,!0,i,l);case 19:return wy(i,o,l);case 22:return fy(i,o,l)}throw Error(r(156,o.tag))};function Wy(i,o){return gs(i,o)}function Qb(i,o,l,h){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wr(i,o,l,h){return new Qb(i,o,l,h)}function Gf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Yb(i){if(typeof i=="function")return Gf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===B)return 11;if(i===Qe)return 14}return 2}function Mi(i,o){var l=i.alternate;return l===null?(l=Wr(i.tag,o,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=o,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,o=i.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Pc(i,o,l,h,p,v){var S=2;if(h=i,typeof i=="function")Gf(i)&&(S=1);else if(typeof i=="string")S=5;else e:switch(i){case R:return Fo(l.children,p,v,o);case A:S=8,p|=8;break;case P:return i=Wr(12,l,o,p|2),i.elementType=P,i.lanes=v,i;case C:return i=Wr(13,l,o,p),i.elementType=C,i.lanes=v,i;case be:return i=Wr(19,l,o,p),i.elementType=be,i.lanes=v,i;case Me:return Rc(l,p,v,o);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case N:S=10;break e;case O:S=9;break e;case B:S=11;break e;case Qe:S=14;break e;case Ye:S=16,h=null;break e}throw Error(r(130,i==null?i:typeof i,""))}return o=Wr(S,l,o,p),o.elementType=i,o.type=h,o.lanes=v,o}function Fo(i,o,l,h){return i=Wr(7,i,h,o),i.lanes=l,i}function Rc(i,o,l,h){return i=Wr(22,i,h,o),i.elementType=Me,i.lanes=l,i.stateNode={isHidden:!1},i}function Hf(i,o,l){return i=Wr(6,i,null,o),i.lanes=l,i}function qf(i,o,l){return o=Wr(4,i.children!==null?i.children:[],i.key,o),o.lanes=l,o.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},o}function Xb(i,o,l,h,p){this.tag=o,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=h,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Kf(i,o,l,h,p,v,S,x,L){return i=new Xb(i,o,l,x,L),o===1?(o=1,v===!0&&(o|=8)):o=0,v=Wr(3,null,null,o),i.current=v,v.stateNode=i,v.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},af(v),i}function Jb(i,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:h==null?null:""+h,children:i,containerInfo:o,implementation:l}}function Gy(i){if(!i)return Ai;i=i._reactInternals;e:{if(Zr(i)!==i||i.tag!==1)throw Error(r(170));var o=i;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(hr(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(r(171))}if(i.tag===1){var l=i.type;if(hr(l))return _v(i,l,o)}return o}function Hy(i,o,l,h,p,v,S,x,L){return i=Kf(l,h,!0,i,p,v,S,x,L),i.context=Gy(null),l=i.current,h=ar(),p=Oi(l),v=ei(h,p),v.callback=o??null,xi(l,v,p),i.current.lanes=p,yi(i,p,h),gr(i,h),i}function xc(i,o,l,h){var p=o.current,v=ar(),S=Oi(p);return l=Gy(l),o.context===null?o.context=l:o.pendingContext=l,o=ei(v,S),o.payload={element:i},h=h===void 0?null:h,h!==null&&(o.callback=h),i=xi(p,o,S),i!==null&&(hn(i,p,S,v),ac(i,p,S)),S}function kc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function qy(i,o){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<o?l:o}}function Qf(i,o){qy(i,o),(i=i.alternate)&&qy(i,o)}function Zb(){return null}var Ky=typeof reportError=="function"?reportError:function(i){console.error(i)};function Yf(i){this._internalRoot=i}Dc.prototype.render=Yf.prototype.render=function(i){var o=this._internalRoot;if(o===null)throw Error(r(409));xc(i,o,null,null)},Dc.prototype.unmount=Yf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var o=i.containerInfo;Lo(function(){xc(null,i,null,null)}),o[Qn]=null}};function Dc(i){this._internalRoot=i}Dc.prototype.unstable_scheduleHydration=function(i){if(i){var o=Du();i={blockedOn:null,target:i,priority:o};for(var l=0;l<In.length&&o!==0&&o<In[l].priority;l++);In.splice(l,0,i),l===0&&Lu(i)}};function Xf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Nc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Qy(){}function eC(i,o,l,h,p){if(p){if(typeof h=="function"){var v=h;h=function(){var K=kc(S);v.call(K)}}var S=Hy(o,h,i,0,null,!1,!1,"",Qy);return i._reactRootContainer=S,i[Qn]=S.current,ll(i.nodeType===8?i.parentNode:i),Lo(),S}for(;p=i.lastChild;)i.removeChild(p);if(typeof h=="function"){var x=h;h=function(){var K=kc(L);x.call(K)}}var L=Kf(i,0,!1,null,null,!1,!1,"",Qy);return i._reactRootContainer=L,i[Qn]=L.current,ll(i.nodeType===8?i.parentNode:i),Lo(function(){xc(o,L,l,h)}),L}function Oc(i,o,l,h,p){var v=l._reactRootContainer;if(v){var S=v;if(typeof p=="function"){var x=p;p=function(){var L=kc(S);x.call(L)}}xc(o,S,i,p)}else S=eC(l,o,i,p,h);return kc(S)}xu=function(i){switch(i.tag){case 3:var o=i.stateNode;if(o.current.memoizedState.isDehydrated){var l=mi(o.pendingLanes);l!==0&&(_i(o,l|1),gr(o,it()),(He&6)===0&&(qs=it()+500,Pi()))}break;case 13:Lo(function(){var h=Zn(i,1);if(h!==null){var p=ar();hn(h,i,1,p)}}),Qf(i,1)}},ys=function(i){if(i.tag===13){var o=Zn(i,134217728);if(o!==null){var l=ar();hn(o,i,134217728,l)}Qf(i,134217728)}},ku=function(i){if(i.tag===13){var o=Oi(i),l=Zn(i,o);if(l!==null){var h=ar();hn(l,i,o,h)}Qf(i,o)}},Du=function(){return ze},Nu=function(i,o){var l=ze;try{return ze=i,o()}finally{ze=l}},us=function(i,o,l){switch(o){case"input":if(Un(i,l),o=l.name,l.type==="radio"&&o!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==i&&h.form===i.form){var p=Xu(h);if(!p)throw Error(r(90));Dt(h),Un(h,p)}}}break;case"textarea":as(i,l);break;case"select":o=l.value,o!=null&&jn(i,!!l.multiple,o,!1)}},go=$f,za=Lo;var tC={usingClientEntryPoint:!1,Events:[dl,Os,Xu,wn,$a,$f]},bl={findFiberByHostInstance:Ao,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rC={bundleType:bl.bundleType,version:bl.version,rendererPackageName:bl.rendererPackageName,rendererConfig:bl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:q.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Ha(i),i===null?null:i.stateNode},findFiberByHostInstance:bl.findFiberByHostInstance||Zb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lc.isDisabled&&Lc.supportsFiber)try{wo=Lc.inject(rC),Er=Lc}catch{}}return mr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tC,mr.createPortal=function(i,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(o))throw Error(r(200));return Jb(i,o,null,l)},mr.createRoot=function(i,o){if(!Xf(i))throw Error(r(299));var l=!1,h="",p=Ky;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(p=o.onRecoverableError)),o=Kf(i,1,!1,null,null,l,!1,h,p),i[Qn]=o.current,ll(i.nodeType===8?i.parentNode:i),new Yf(o)},mr.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var o=i._reactInternals;if(o===void 0)throw typeof i.render=="function"?Error(r(188)):(i=Object.keys(i).join(","),Error(r(268,i)));return i=Ha(o),i=i===null?null:i.stateNode,i},mr.flushSync=function(i){return Lo(i)},mr.hydrate=function(i,o,l){if(!Nc(o))throw Error(r(200));return Oc(null,i,o,!0,l)},mr.hydrateRoot=function(i,o,l){if(!Xf(i))throw Error(r(405));var h=l!=null&&l.hydratedSources||null,p=!1,v="",S=Ky;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(S=l.onRecoverableError)),o=Hy(o,null,i,1,l??null,p,!1,v,S),i[Qn]=o.current,ll(i),h)for(i=0;i<h.length;i++)l=h[i],p=l._getVersion,p=p(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,p]:o.mutableSourceEagerHydrationData.push(l,p);return new Dc(o)},mr.render=function(i,o,l){if(!Nc(o))throw Error(r(200));return Oc(null,i,o,!1,l)},mr.unmountComponentAtNode=function(i){if(!Nc(i))throw Error(r(40));return i._reactRootContainer?(Lo(function(){Oc(null,null,i,!1,function(){i._reactRootContainer=null,i[Qn]=null})}),!0):!1},mr.unstable_batchedUpdates=$f,mr.unstable_renderSubtreeIntoContainer=function(i,o,l,h){if(!Nc(l))throw Error(r(200));if(i==null||i._reactInternals===void 0)throw Error(r(38));return Oc(i,o,l,!1,h)},mr.version="18.3.1-next-f1338f8080-20240426",mr}var n_;function G0(){if(n_)return ep.exports;n_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),ep.exports=uC(),ep.exports}var i_;function cC(){if(i_)return Mc;i_=1;var t=G0();return Mc.createRoot=t.createRoot,Mc.hydrateRoot=t.hydrateRoot,Mc}var dC=cC(),Bt=function(){return Bt=Object.assign||function(e){for(var r,n=1,s=arguments.length;n<s;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Bt.apply(this,arguments)};function bg(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r}function Gl(t,e,r){if(r||arguments.length===2)for(var n=0,s=e.length,a;n<s;n++)(a||!(n in e))&&(a||(a=Array.prototype.slice.call(e,0,n)),a[n]=e[n]);return t.concat(a||Array.prototype.slice.call(e))}var oe=Tg();const je=qd(oe);var lt="-ms-",Vl="-moz-",Je="-webkit-",H0="comm",Kd="rule",Cg="decl",hC="@import",q0="@keyframes",fC="@layer",K0=Math.abs,Ag=String.fromCharCode,Vp=Object.assign;function pC(t,e){return Ft(t,0)^45?(((e<<2^Ft(t,0))<<2^Ft(t,1))<<2^Ft(t,2))<<2^Ft(t,3):0}function Q0(t){return t.trim()}function ni(t,e){return(t=e.exec(t))?t[0]:t}function Le(t,e,r){return t.replace(e,r)}function Yc(t,e,r){return t.indexOf(e,r)}function Ft(t,e){return t.charCodeAt(e)|0}function la(t,e,r){return t.slice(e,r)}function kn(t){return t.length}function Y0(t){return t.length}function kl(t,e){return e.push(t),t}function gC(t,e){return t.map(e).join("")}function o_(t,e){return t.filter(function(r){return!ni(r,e)})}var Qd=1,ua=1,X0=0,Yr=0,It=0,Sa="";function Yd(t,e,r,n,s,a,u,d){return{value:t,root:e,parent:r,type:n,props:s,children:a,line:Qd,column:ua,length:u,return:"",siblings:d}}function Bi(t,e){return Vp(Yd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Qs(t){for(;t.root;)t=Bi(t.root,{children:[t]});kl(t,t.siblings)}function mC(){return It}function vC(){return It=Yr>0?Ft(Sa,--Yr):0,ua--,It===10&&(ua=1,Qd--),It}function mn(){return It=Yr<X0?Ft(Sa,Yr++):0,ua++,It===10&&(ua=1,Qd++),It}function Wo(){return Ft(Sa,Yr)}function Xc(){return Yr}function Xd(t,e){return la(Sa,t,e)}function Fp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function yC(t){return Qd=ua=1,X0=kn(Sa=t),Yr=0,[]}function _C(t){return Sa="",t}function np(t){return Q0(Xd(Yr-1,Bp(t===91?t+2:t===40?t+1:t)))}function wC(t){for(;(It=Wo())&&It<33;)mn();return Fp(t)>2||Fp(It)>3?"":" "}function EC(t,e){for(;--e&&mn()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return Xd(t,Xc()+(e<6&&Wo()==32&&mn()==32))}function Bp(t){for(;mn();)switch(It){case t:return Yr;case 34:case 39:t!==34&&t!==39&&Bp(It);break;case 40:t===41&&Bp(t);break;case 92:mn();break}return Yr}function IC(t,e){for(;mn()&&t+It!==57;)if(t+It===84&&Wo()===47)break;return"/*"+Xd(e,Yr-1)+"*"+Ag(t===47?t:mn())}function SC(t){for(;!Fp(Wo());)mn();return Xd(t,Yr)}function TC(t){return _C(Jc("",null,null,null,[""],t=yC(t),0,[0],t))}function Jc(t,e,r,n,s,a,u,d,f){for(var g=0,y=0,_=u,w=0,I=0,b=0,k=1,D=1,F=1,U=0,W="",q=s,G=a,X=n,R=W;D;)switch(b=U,U=mn()){case 40:if(b!=108&&Ft(R,_-1)==58){Yc(R+=Le(np(U),"&","&\f"),"&\f",K0(g?d[g-1]:0))!=-1&&(F=-1);break}case 34:case 39:case 91:R+=np(U);break;case 9:case 10:case 13:case 32:R+=wC(b);break;case 92:R+=EC(Xc()-1,7);continue;case 47:switch(Wo()){case 42:case 47:kl(bC(IC(mn(),Xc()),e,r,f),f);break;default:R+="/"}break;case 123*k:d[g++]=kn(R)*F;case 125*k:case 59:case 0:switch(U){case 0:case 125:D=0;case 59+y:F==-1&&(R=Le(R,/\f/g,"")),I>0&&kn(R)-_&&kl(I>32?a_(R+";",n,r,_-1,f):a_(Le(R," ","")+";",n,r,_-2,f),f);break;case 59:R+=";";default:if(kl(X=s_(R,e,r,g,y,s,d,W,q=[],G=[],_,a),a),U===123)if(y===0)Jc(R,e,X,X,q,a,_,d,G);else switch(w===99&&Ft(R,3)===110?100:w){case 100:case 108:case 109:case 115:Jc(t,X,X,n&&kl(s_(t,X,X,0,0,s,d,W,s,q=[],_,G),G),s,G,_,d,n?q:G);break;default:Jc(R,X,X,X,[""],G,0,d,G)}}g=y=I=0,k=F=1,W=R="",_=u;break;case 58:_=1+kn(R),I=b;default:if(k<1){if(U==123)--k;else if(U==125&&k++==0&&vC()==125)continue}switch(R+=Ag(U),U*k){case 38:F=y>0?1:(R+="\f",-1);break;case 44:d[g++]=(kn(R)-1)*F,F=1;break;case 64:Wo()===45&&(R+=np(mn())),w=Wo(),y=_=kn(W=R+=SC(Xc())),U++;break;case 45:b===45&&kn(R)==2&&(k=0)}}return a}function s_(t,e,r,n,s,a,u,d,f,g,y,_){for(var w=s-1,I=s===0?a:[""],b=Y0(I),k=0,D=0,F=0;k<n;++k)for(var U=0,W=la(t,w+1,w=K0(D=u[k])),q=t;U<b;++U)(q=Q0(D>0?I[U]+" "+W:Le(W,/&\f/g,I[U])))&&(f[F++]=q);return Yd(t,e,r,s===0?Kd:d,f,g,y,_)}function bC(t,e,r,n){return Yd(t,e,r,H0,Ag(mC()),la(t,2,-2),0,n)}function a_(t,e,r,n,s){return Yd(t,e,r,Cg,la(t,0,n),la(t,n+1,-1),n,s)}function J0(t,e,r){switch(pC(t,e)){case 5103:return Je+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Je+t+t;case 4789:return Vl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Je+t+Vl+t+lt+t+t;case 5936:switch(Ft(t,e+11)){case 114:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Je+t+lt+Le(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return Je+t+lt+t+t;case 6165:return Je+t+lt+"flex-"+t+t;case 5187:return Je+t+Le(t,/(\w+).+(:[^]+)/,Je+"box-$1$2"+lt+"flex-$1$2")+t;case 5443:return Je+t+lt+"flex-item-"+Le(t,/flex-|-self/g,"")+(ni(t,/flex-|baseline/)?"":lt+"grid-row-"+Le(t,/flex-|-self/g,""))+t;case 4675:return Je+t+lt+"flex-line-pack"+Le(t,/align-content|flex-|-self/g,"")+t;case 5548:return Je+t+lt+Le(t,"shrink","negative")+t;case 5292:return Je+t+lt+Le(t,"basis","preferred-size")+t;case 6060:return Je+"box-"+Le(t,"-grow","")+Je+t+lt+Le(t,"grow","positive")+t;case 4554:return Je+Le(t,/([^-])(transform)/g,"$1"+Je+"$2")+t;case 6187:return Le(Le(Le(t,/(zoom-|grab)/,Je+"$1"),/(image-set)/,Je+"$1"),t,"")+t;case 5495:case 3959:return Le(t,/(image-set\([^]*)/,Je+"$1$`$1");case 4968:return Le(Le(t,/(.+:)(flex-)?(.*)/,Je+"box-pack:$3"+lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Je+t+t;case 4200:if(!ni(t,/flex-|baseline/))return lt+"grid-column-align"+la(t,e)+t;break;case 2592:case 3360:return lt+Le(t,"template-","")+t;case 4384:case 3616:return r&&r.some(function(n,s){return e=s,ni(n.props,/grid-\w+-end/)})?~Yc(t+(r=r[e].value),"span",0)?t:lt+Le(t,"-start","")+t+lt+"grid-row-span:"+(~Yc(r,"span",0)?ni(r,/\d+/):+ni(r,/\d+/)-+ni(t,/\d+/))+";":lt+Le(t,"-start","")+t;case 4896:case 4128:return r&&r.some(function(n){return ni(n.props,/grid-\w+-start/)})?t:lt+Le(Le(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return Le(t,/(.+)-inline(.+)/,Je+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kn(t)-1-e>6)switch(Ft(t,e+1)){case 109:if(Ft(t,e+4)!==45)break;case 102:return Le(t,/(.+:)(.+)-([^]+)/,"$1"+Je+"$2-$3$1"+Vl+(Ft(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Yc(t,"stretch",0)?J0(Le(t,"stretch","fill-available"),e,r)+t:t}break;case 5152:case 5920:return Le(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,s,a,u,d,f,g){return lt+s+":"+a+g+(u?lt+s+"-span:"+(d?f:+f-+a)+g:"")+t});case 4949:if(Ft(t,e+6)===121)return Le(t,":",":"+Je)+t;break;case 6444:switch(Ft(t,Ft(t,14)===45?18:11)){case 120:return Le(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Je+(Ft(t,14)===45?"inline-":"")+"box$3$1"+Je+"$2$3$1"+lt+"$2box$3")+t;case 100:return Le(t,":",":"+lt)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Le(t,"scroll-","scroll-snap-")+t}return t}function fd(t,e){for(var r="",n=0;n<t.length;n++)r+=e(t[n],n,t,e)||"";return r}function CC(t,e,r,n){switch(t.type){case fC:if(t.children.length)break;case hC:case Cg:return t.return=t.return||t.value;case H0:return"";case q0:return t.return=t.value+"{"+fd(t.children,n)+"}";case Kd:if(!kn(t.value=t.props.join(",")))return""}return kn(r=fd(t.children,n))?t.return=t.value+"{"+r+"}":""}function AC(t){var e=Y0(t);return function(r,n,s,a){for(var u="",d=0;d<e;d++)u+=t[d](r,n,s,a)||"";return u}}function PC(t){return function(e){e.root||(e=e.return)&&t(e)}}function RC(t,e,r,n){if(t.length>-1&&!t.return)switch(t.type){case Cg:t.return=J0(t.value,t.length,r);return;case q0:return fd([Bi(t,{value:Le(t.value,"@","@"+Je)})],n);case Kd:if(t.length)return gC(r=t.props,function(s){switch(ni(s,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Qs(Bi(t,{props:[Le(s,/:(read-\w+)/,":"+Vl+"$1")]})),Qs(Bi(t,{props:[s]})),Vp(t,{props:o_(r,n)});break;case"::placeholder":Qs(Bi(t,{props:[Le(s,/:(plac\w+)/,":"+Je+"input-$1")]})),Qs(Bi(t,{props:[Le(s,/:(plac\w+)/,":"+Vl+"$1")]})),Qs(Bi(t,{props:[Le(s,/:(plac\w+)/,lt+"input-$1")]})),Qs(Bi(t,{props:[s]})),Vp(t,{props:o_(r,n)});break}return""})}}var xC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Pr={},ca=typeof process<"u"&&Pr!==void 0&&(Pr.REACT_APP_SC_ATTR||Pr.SC_ATTR)||"data-styled",Z0="active",eE="data-styled-version",Jd="6.1.13",Pg=`/*!sc*/
`,pd=typeof window<"u"&&"HTMLElement"in window,kC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Pr!==void 0&&Pr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Pr.REACT_APP_SC_DISABLE_SPEEDY!==""?Pr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Pr.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Pr!==void 0&&Pr.SC_DISABLE_SPEEDY!==void 0&&Pr.SC_DISABLE_SPEEDY!==""&&Pr.SC_DISABLE_SPEEDY!=="false"&&Pr.SC_DISABLE_SPEEDY),DC={},Zd=Object.freeze([]),da=Object.freeze({});function tE(t,e,r){return r===void 0&&(r=da),t.theme!==r.theme&&t.theme||e||r.theme}var rE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),NC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OC=/(^-|-$)/g;function l_(t){return t.replace(NC,"-").replace(OC,"")}var LC=/(a)(d)/gi,Vc=52,u_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Up(t){var e,r="";for(e=Math.abs(t);e>Vc;e=e/Vc|0)r=u_(e%Vc)+r;return(u_(e%Vc)+r).replace(LC,"$1-$2")}var ip,nE=5381,ra=function(t,e){for(var r=e.length;r;)t=33*t^e.charCodeAt(--r);return t},iE=function(t){return ra(nE,t)};function oE(t){return Up(iE(t)>>>0)}function MC(t){return t.displayName||t.name||"Component"}function op(t){return typeof t=="string"&&!0}var sE=typeof Symbol=="function"&&Symbol.for,aE=sE?Symbol.for("react.memo"):60115,VC=sE?Symbol.for("react.forward_ref"):60112,FC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},BC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},lE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},UC=((ip={})[VC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ip[aE]=lE,ip);function c_(t){return("type"in(e=t)&&e.type.$$typeof)===aE?lE:"$$typeof"in t?UC[t.$$typeof]:FC;var e}var jC=Object.defineProperty,$C=Object.getOwnPropertyNames,d_=Object.getOwnPropertySymbols,zC=Object.getOwnPropertyDescriptor,WC=Object.getPrototypeOf,h_=Object.prototype;function uE(t,e,r){if(typeof e!="string"){if(h_){var n=WC(e);n&&n!==h_&&uE(t,n,r)}var s=$C(e);d_&&(s=s.concat(d_(e)));for(var a=c_(t),u=c_(e),d=0;d<s.length;++d){var f=s[d];if(!(f in BC||r&&r[f]||u&&f in u||a&&f in a)){var g=zC(e,f);try{jC(t,f,g)}catch{}}}}return t}function Go(t){return typeof t=="function"}function Rg(t){return typeof t=="object"&&"styledComponentId"in t}function $o(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function jp(t,e){if(t.length===0)return"";for(var r=t[0],n=1;n<t.length;n++)r+=t[n];return r}function Hl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function $p(t,e,r){if(r===void 0&&(r=!1),!r&&!Hl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var n=0;n<e.length;n++)t[n]=$p(t[n],e[n]);else if(Hl(e))for(var n in e)t[n]=$p(t[n],e[n]);return t}function xg(t,e){Object.defineProperty(t,"toString",{value:e})}function Ho(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var GC=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var r=0,n=0;n<e;n++)r+=this.groupSizes[n];return r},t.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var n=this.groupSizes,s=n.length,a=s;e>=a;)if((a<<=1)<0)throw Ho(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var u=s;u<a;u++)this.groupSizes[u]=0}for(var d=this.indexOfGroup(e+1),f=(u=0,r.length);u<f;u++)this.tag.insertRule(d,r[u])&&(this.groupSizes[e]++,d++)},t.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;this.groupSizes[e]=0;for(var a=n;a<s;a++)this.tag.deleteRule(n)}},t.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var n=this.groupSizes[e],s=this.indexOfGroup(e),a=s+n,u=s;u<a;u++)r+="".concat(this.tag.getRule(u)).concat(Pg);return r},t}(),Zc=new Map,gd=new Map,ed=1,Fc=function(t){if(Zc.has(t))return Zc.get(t);for(;gd.has(ed);)ed++;var e=ed++;return Zc.set(t,e),gd.set(e,t),e},HC=function(t,e){ed=e+1,Zc.set(t,e),gd.set(e,t)},qC="style[".concat(ca,"][").concat(eE,'="').concat(Jd,'"]'),KC=new RegExp("^".concat(ca,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),QC=function(t,e,r){for(var n,s=r.split(","),a=0,u=s.length;a<u;a++)(n=s[a])&&t.registerName(e,n)},YC=function(t,e){for(var r,n=((r=e.textContent)!==null&&r!==void 0?r:"").split(Pg),s=[],a=0,u=n.length;a<u;a++){var d=n[a].trim();if(d){var f=d.match(KC);if(f){var g=0|parseInt(f[1],10),y=f[2];g!==0&&(HC(y,g),QC(t,y,f[3]),t.getTag().insertRules(g,s)),s.length=0}else s.push(d)}}},f_=function(t){for(var e=document.querySelectorAll(qC),r=0,n=e.length;r<n;r++){var s=e[r];s&&s.getAttribute(ca)!==Z0&&(YC(t,s),s.parentNode&&s.parentNode.removeChild(s))}};function XC(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var cE=function(t){var e=document.head,r=t||e,n=document.createElement("style"),s=function(d){var f=Array.from(d.querySelectorAll("style[".concat(ca,"]")));return f[f.length-1]}(r),a=s!==void 0?s.nextSibling:null;n.setAttribute(ca,Z0),n.setAttribute(eE,Jd);var u=XC();return u&&n.setAttribute("nonce",u),r.insertBefore(n,a),n},JC=function(){function t(e){this.element=cE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var n=document.styleSheets,s=0,a=n.length;s<a;s++){var u=n[s];if(u.ownerNode===r)return u}throw Ho(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},t}(),ZC=function(){function t(e){this.element=cE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var n=document.createTextNode(r);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),eA=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),p_=pd,tA={isServer:!pd,useCSSOMInjection:!kC},md=function(){function t(e,r,n){e===void 0&&(e=da),r===void 0&&(r={});var s=this;this.options=Bt(Bt({},tA),e),this.gs=r,this.names=new Map(n),this.server=!!e.isServer,!this.server&&pd&&p_&&(p_=!1,f_(this)),xg(this,function(){return function(a){for(var u=a.getTag(),d=u.length,f="",g=function(_){var w=function(F){return gd.get(F)}(_);if(w===void 0)return"continue";var I=a.names.get(w),b=u.getGroup(_);if(I===void 0||!I.size||b.length===0)return"continue";var k="".concat(ca,".g").concat(_,'[id="').concat(w,'"]'),D="";I!==void 0&&I.forEach(function(F){F.length>0&&(D+="".concat(F,","))}),f+="".concat(b).concat(k,'{content:"').concat(D,'"}').concat(Pg)},y=0;y<d;y++)g(y);return f}(s)})}return t.registerId=function(e){return Fc(e)},t.prototype.rehydrate=function(){!this.server&&pd&&f_(this)},t.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new t(Bt(Bt({},this.options),e),this.gs,r&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var n=r.useCSSOMInjection,s=r.target;return r.isServer?new eA(s):n?new JC(s):new ZC(s)}(this.options),new GC(e)));var e},t.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},t.prototype.registerName=function(e,r){if(Fc(e),this.names.has(e))this.names.get(e).add(r);else{var n=new Set;n.add(r),this.names.set(e,n)}},t.prototype.insertRules=function(e,r,n){this.registerName(e,r),this.getTag().insertRules(Fc(e),n)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Fc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),rA=/&/g,nA=/^\s*\/\/.*$/gm;function dE(t,e){return t.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(n){return"".concat(e," ").concat(n)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=dE(r.children,e)),r})}function iA(t){var e,r,n,s=da,a=s.options,u=a===void 0?da:a,d=s.plugins,f=d===void 0?Zd:d,g=function(w,I,b){return b.startsWith(r)&&b.endsWith(r)&&b.replaceAll(r,"").length>0?".".concat(e):w},y=f.slice();y.push(function(w){w.type===Kd&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(rA,r).replace(n,g))}),u.prefix&&y.push(RC),y.push(CC);var _=function(w,I,b,k){I===void 0&&(I=""),b===void 0&&(b=""),k===void 0&&(k="&"),e=k,r=I,n=new RegExp("\\".concat(r,"\\b"),"g");var D=w.replace(nA,""),F=TC(b||I?"".concat(b," ").concat(I," { ").concat(D," }"):D);u.namespace&&(F=dE(F,u.namespace));var U=[];return fd(F,AC(y.concat(PC(function(W){return U.push(W)})))),U};return _.hash=f.length?f.reduce(function(w,I){return I.name||Ho(15),ra(w,I.name)},nE).toString():"",_}var oA=new md,zp=iA(),hE=je.createContext({shouldForwardProp:void 0,styleSheet:oA,stylis:zp});hE.Consumer;je.createContext(void 0);function Wp(){return oe.useContext(hE)}var sA=function(){function t(e,r){var n=this;this.inject=function(s,a){a===void 0&&(a=zp);var u=n.name+a.hash;s.hasNameForId(n.id,u)||s.insertRules(n.id,u,a(n.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,xg(this,function(){throw Ho(12,String(n.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=zp),this.name+e.hash},t}(),aA=function(t){return t>="A"&&t<="Z"};function g_(t){for(var e="",r=0;r<t.length;r++){var n=t[r];if(r===1&&n==="-"&&t[0]==="-")return t;aA(n)?e+="-"+n.toLowerCase():e+=n}return e.startsWith("ms-")?"-"+e:e}var fE=function(t){return t==null||t===!1||t===""},pE=function(t){var e,r,n=[];for(var s in t){var a=t[s];t.hasOwnProperty(s)&&!fE(a)&&(Array.isArray(a)&&a.isCss||Go(a)?n.push("".concat(g_(s),":"),a,";"):Hl(a)?n.push.apply(n,Gl(Gl(["".concat(s," {")],pE(a),!1),["}"],!1)):n.push("".concat(g_(s),": ").concat((e=s,(r=a)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in xC||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Gi(t,e,r,n){if(fE(t))return[];if(Rg(t))return[".".concat(t.styledComponentId)];if(Go(t)){if(!Go(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var s=t(e);return Gi(s,e,r,n)}var a;return t instanceof sA?r?(t.inject(r,n),[t.getName(n)]):[t]:Hl(t)?pE(t):Array.isArray(t)?Array.prototype.concat.apply(Zd,t.map(function(u){return Gi(u,e,r,n)})):[t.toString()]}function gE(t){for(var e=0;e<t.length;e+=1){var r=t[e];if(Go(r)&&!Rg(r))return!1}return!0}var lA=iE(Jd),uA=function(){function t(e,r,n){this.rules=e,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&gE(e),this.componentId=r,this.baseHash=ra(lA,r),this.baseStyle=n,md.registerId(r)}return t.prototype.generateAndInjectStyles=function(e,r,n){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))s=$o(s,this.staticRulesId);else{var a=jp(Gi(this.rules,e,r,n)),u=Up(ra(this.baseHash,a)>>>0);if(!r.hasNameForId(this.componentId,u)){var d=n(a,".".concat(u),void 0,this.componentId);r.insertRules(this.componentId,u,d)}s=$o(s,u),this.staticRulesId=u}else{for(var f=ra(this.baseHash,n.hash),g="",y=0;y<this.rules.length;y++){var _=this.rules[y];if(typeof _=="string")g+=_;else if(_){var w=jp(Gi(_,e,r,n));f=ra(f,w+y),g+=w}}if(g){var I=Up(f>>>0);r.hasNameForId(this.componentId,I)||r.insertRules(this.componentId,I,n(g,".".concat(I),void 0,this.componentId)),s=$o(s,I)}}return s},t}(),ql=je.createContext(void 0);ql.Consumer;function cA(t){var e=je.useContext(ql),r=oe.useMemo(function(){return function(n,s){if(!n)throw Ho(14);if(Go(n)){var a=n(s);return a}if(Array.isArray(n)||typeof n!="object")throw Ho(8);return s?Bt(Bt({},s),n):n}(t.theme,e)},[t.theme,e]);return t.children?je.createElement(ql.Provider,{value:r},t.children):null}var sp={};function dA(t,e,r){var n=Rg(t),s=t,a=!op(t),u=e.attrs,d=u===void 0?Zd:u,f=e.componentId,g=f===void 0?function(q,G){var X=typeof q!="string"?"sc":l_(q);sp[X]=(sp[X]||0)+1;var R="".concat(X,"-").concat(oE(Jd+X+sp[X]));return G?"".concat(G,"-").concat(R):R}(e.displayName,e.parentComponentId):f,y=e.displayName,_=y===void 0?function(q){return op(q)?"styled.".concat(q):"Styled(".concat(MC(q),")")}(t):y,w=e.displayName&&e.componentId?"".concat(l_(e.displayName),"-").concat(e.componentId):e.componentId||g,I=n&&s.attrs?s.attrs.concat(d).filter(Boolean):d,b=e.shouldForwardProp;if(n&&s.shouldForwardProp){var k=s.shouldForwardProp;if(e.shouldForwardProp){var D=e.shouldForwardProp;b=function(q,G){return k(q,G)&&D(q,G)}}else b=k}var F=new uA(r,w,n?s.componentStyle:void 0);function U(q,G){return function(X,R,A){var P=X.attrs,N=X.componentStyle,O=X.defaultProps,B=X.foldedComponentIds,C=X.styledComponentId,be=X.target,Qe=je.useContext(ql),Ye=Wp(),Me=X.shouldForwardProp||Ye.shouldForwardProp,ie=tE(R,Qe,O)||da,ce=function(we,xe,Oe){for(var Ne,Fe=Bt(Bt({},xe),{className:void 0,theme:Oe}),et=0;et<we.length;et+=1){var kt=Go(Ne=we[et])?Ne(Fe):Ne;for(var Dt in kt)Fe[Dt]=Dt==="className"?$o(Fe[Dt],kt[Dt]):Dt==="style"?Bt(Bt({},Fe[Dt]),kt[Dt]):kt[Dt]}return xe.className&&(Fe.className=$o(Fe.className,xe.className)),Fe}(P,R,ie),ae=ce.as||be,V={};for(var Y in ce)ce[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&ce.theme===ie||(Y==="forwardedAs"?V.as=ce.forwardedAs:Me&&!Me(Y,ae)||(V[Y]=ce[Y]));var pe=function(we,xe){var Oe=Wp(),Ne=we.generateAndInjectStyles(xe,Oe.styleSheet,Oe.stylis);return Ne}(N,ce),Pe=$o(B,C);return pe&&(Pe+=" "+pe),ce.className&&(Pe+=" "+ce.className),V[op(ae)&&!rE.has(ae)?"class":"className"]=Pe,V.ref=A,oe.createElement(ae,V)}(W,q,G)}U.displayName=_;var W=je.forwardRef(U);return W.attrs=I,W.componentStyle=F,W.displayName=_,W.shouldForwardProp=b,W.foldedComponentIds=n?$o(s.foldedComponentIds,s.styledComponentId):"",W.styledComponentId=w,W.target=n?s.target:t,Object.defineProperty(W,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(q){this._foldedDefaultProps=n?function(G){for(var X=[],R=1;R<arguments.length;R++)X[R-1]=arguments[R];for(var A=0,P=X;A<P.length;A++)$p(G,P[A],!0);return G}({},s.defaultProps,q):q}}),xg(W,function(){return".".concat(W.styledComponentId)}),a&&uE(W,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),W}function m_(t,e){for(var r=[t[0]],n=0,s=e.length;n<s;n+=1)r.push(e[n],t[n+1]);return r}var v_=function(t){return Object.assign(t,{isCss:!0})};function mE(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Go(t)||Hl(t))return v_(Gi(m_(Zd,Gl([t],e,!0))));var n=t;return e.length===0&&n.length===1&&typeof n[0]=="string"?Gi(n):v_(Gi(m_(n,e)))}function Gp(t,e,r){if(r===void 0&&(r=da),!e)throw Ho(1,e);var n=function(s){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return t(e,r,mE.apply(void 0,Gl([s],a,!1)))};return n.attrs=function(s){return Gp(t,e,Bt(Bt({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)}))},n.withConfig=function(s){return Gp(t,e,Bt(Bt({},r),s))},n}var vE=function(t){return Gp(dA,t)},te=vE;rE.forEach(function(t){te[t]=vE(t)});var hA=function(){function t(e,r){this.rules=e,this.componentId=r,this.isStatic=gE(e),md.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,r,n,s){var a=s(jp(Gi(this.rules,r,n,s)),""),u=this.componentId+e;n.insertRules(u,u,a)},t.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,r,n,s){e>2&&md.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,r,n,s)},t}();function fA(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=mE.apply(void 0,Gl([t],e,!1)),s="sc-global-".concat(oE(JSON.stringify(n))),a=new hA(n,s),u=function(f){var g=Wp(),y=je.useContext(ql),_=je.useRef(g.styleSheet.allocateGSInstance(s)).current;return g.styleSheet.server&&d(_,f,g.styleSheet,y,g.stylis),je.useLayoutEffect(function(){if(!g.styleSheet.server)return d(_,f,g.styleSheet,y,g.stylis),function(){return a.removeStyles(_,g.styleSheet)}},[_,f,g.styleSheet,y,g.stylis]),null};function d(f,g,y,_,w){if(a.isStatic)a.renderStyles(f,DC,y,w);else{var I=Bt(Bt({},g),{theme:tE(g,_,u.defaultProps)});a.renderStyles(f,I,y,w)}}return je.memo(u)}const pA=te.div`
  width: 1500px;
`,gA=fA`
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
`,mA=te.div`
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
`,vA=te.div`
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
`,yA=te.aside`
  display: flex;
  flex-direction: column;
`,_A=te.div`
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
`,wA=te.button`
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
`,EA=te.header`
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
`,IA=te.div`
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
`;var ap={exports:{}},lp,y_;function SA(){if(y_)return lp;y_=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return lp=t,lp}var up,__;function TA(){if(__)return up;__=1;var t=SA();function e(){}function r(){}return r.resetWarningCache=e,up=function(){function n(u,d,f,g,y,_){if(_!==t){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}n.isRequired=n;function s(){return n}var a={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:s,element:n,elementType:n,instanceOf:s,node:n,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:e};return a.PropTypes=a,a},up}var w_;function bA(){return w_||(w_=1,ap.exports=TA()()),ap.exports}var CA=bA();const si=qd(CA),yE=te.div`
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
`,AA=te.input`
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
`,PA=te.img`
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
`,RA=()=>j.jsxs(yE,{children:[j.jsx(PA,{src:"icon/search_icon.svg","aria-hidden":"true",alt:""}),j.jsx(AA,{"aria-label":"Search on your page",type:"text",placeholder:"Search for anything..."})]}),E_=te.div`
  display: flex;
`,xA=te.div`
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
`,kA=te.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,DA=te.div`
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
`,NA=te.button`
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
`,I_=te.img``,OA=te.div`
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
`,LA=te.span`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,MA=te.span`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,VA=te.img`
  margin-right: 0.8rem;
  object-fit: cover;
  object-position: top;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`,FA=te.button`
  cursor: pointer;
  background-color: transparent;
`;te.img`
  width: 1.5rem;
  height: 1.5rem;
`;const BA=te.div`
  position: absolute;
  top: 100%;
  right: 3%;
  width: 10rem;
  height: 10rem;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`;te(yE)`
  margin: 0;
  border-radius: 0;
  padding: 0;
  display: block;
`;const Kl={mobile:"425px",mobileL:"600px",tablet:"768px",desktop:"1024px",headerSize:{mobileHeight:"3rem",tabletHeight:"4rem",desktopHeight:"5.5rem"},fonts:{primaryFont:"'Inter', sans-serif"},colors:{primaryLightBackground:"#fff",secondaryLightBackground:"#f5f5f5",primaryDarkBackground:"#0D062D",secondaryDarkBackground:"#E0E0E0",hoverBackground:"rgba(80, 48, 229, 0.08)",borderLineColor:"1px solid rgb(219, 219, 219)",darkBlue:" #5030E5",lightBlue:"rgb(34, 1, 179)",darkText:"#0D062D",lightText:"#625F6D"}},UA=te.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`,jA=te.form`
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 300px;

  @media (max-width: ${Kl.mobileL}) {
    padding: 1.5rem;
  }
  @media (max-width: ${Kl.mobile}) {
    padding: 1rem;
  }
`,$A=te.h2`
  color: ${({theme:t})=>t.colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`,cp=te.div`
  margin-bottom: 1.2rem;
`,dp=te.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${Kl.colors.lightBlue};
  }
`,kg=te.button`
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
`,zA=te(kg)``,WA=te.p`
  text-align: center;
  margin-top: 1rem;
  color: ${({theme:t})=>t.colors.lightText};
`,GA=te.span`
  color: ${({theme:t})=>t.colors.darkBlue};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,S_=te.div`
  font-weight: 500;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 3000ms;

  span {
    color: #ff0000b5;
  }
`,HA=te.div`
  display: flex;
  justify-content: end;
  width: 100%;
`,Ta=oe.createContext({isLoggedIn:!1,setIsLoggedIn:()=>{},showLoginForm:!1,setShowLoginForm:()=>{},mode:"login",setMode:()=>{},loggedUser:null,setLoggedUser:()=>{}}),qA=()=>{};var T_={};/**
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
 */const _E=function(t){const e=[];let r=0;for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);s<128?e[r++]=s:s<2048?(e[r++]=s>>6|192,e[r++]=s&63|128):(s&64512)===55296&&n+1<t.length&&(t.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++n)&1023),e[r++]=s>>18|240,e[r++]=s>>12&63|128,e[r++]=s>>6&63|128,e[r++]=s&63|128):(e[r++]=s>>12|224,e[r++]=s>>6&63|128,e[r++]=s&63|128)}return e},KA=function(t){const e=[];let r=0,n=0;for(;r<t.length;){const s=t[r++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[r++];e[n++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[r++],u=t[r++],d=t[r++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|d&63)-65536;e[n++]=String.fromCharCode(55296+(f>>10)),e[n++]=String.fromCharCode(56320+(f&1023))}else{const a=t[r++],u=t[r++];e[n++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},wE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<t.length;s+=3){const a=t[s],u=s+1<t.length,d=u?t[s+1]:0,f=s+2<t.length,g=f?t[s+2]:0,y=a>>2,_=(a&3)<<4|d>>4;let w=(d&15)<<2|g>>6,I=g&63;f||(I=64,u||(w=64)),n.push(r[y],r[_],r[w],r[I])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_E(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<t.length;){const a=r[t.charAt(s++)],d=s<t.length?r[t.charAt(s)]:0;++s;const g=s<t.length?r[t.charAt(s)]:64;++s;const _=s<t.length?r[t.charAt(s)]:64;if(++s,a==null||d==null||g==null||_==null)throw new QA;const w=a<<2|d>>4;if(n.push(w),g!==64){const I=d<<4&240|g>>2;if(n.push(I),_!==64){const b=g<<6&192|_;n.push(b)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class QA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YA=function(t){const e=_E(t);return wE.encodeByteArray(e,!0)},vd=function(t){return YA(t).replace(/\./g,"")},EE=function(t){try{return wE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JA=()=>XA().__FIREBASE_DEFAULTS__,ZA=()=>{if(typeof process>"u"||typeof T_>"u")return;const t=T_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&EE(t[1]);return e&&JSON.parse(e)},eh=()=>{try{return qA()||JA()||ZA()||eP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},IE=t=>{var e,r;return(r=(e=eh())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[t]},tP=t=>{const e=IE(t);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),n]:[e.substring(0,r),n]},SE=()=>{var t;return(t=eh())===null||t===void 0?void 0:t.config},TE=t=>{var e;return(e=eh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class rP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,n))}}}/**
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
 */function nP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},n=e||"demo-project",s=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vd(JSON.stringify(r)),vd(JSON.stringify(u)),""].join(".")}/**
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
 */function nr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function iP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nr())}function oP(){var t;const e=(t=eh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function sP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uP(){const t=nr();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cP(){return!oP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dP(){try{return typeof indexedDB=="object"}catch{return!1}}function hP(){return new Promise((t,e)=>{try{let r=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),r||self.indexedDB.deleteDatabase(n),t(!0)},s.onupgradeneeded=()=>{r=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(r){e(r)}})}/**
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
 */const fP="FirebaseError";class fi extends Error{constructor(e,r,n){super(r),this.code=e,this.customData=n,this.name=fP,Object.setPrototypeOf(this,fi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cu.prototype.create)}}class cu{constructor(e,r,n){this.service=e,this.serviceName=r,this.errors=n}create(e,...r){const n=r[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?pP(a,n):"Error",d=`${this.serviceName}: ${u} (${s}).`;return new fi(s,d,n)}}function pP(t,e){return t.replace(gP,(r,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const gP=/\{\$([^}]+)}/g;function mP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qo(t,e){if(t===e)return!0;const r=Object.keys(t),n=Object.keys(e);for(const s of r){if(!n.includes(s))return!1;const a=t[s],u=e[s];if(b_(a)&&b_(u)){if(!qo(a,u))return!1}else if(a!==u)return!1}for(const s of n)if(!r.includes(s))return!1;return!0}function b_(t){return t!==null&&typeof t=="object"}/**
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
 */function du(t){const e=[];for(const[r,n]of Object.entries(t))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Dl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,a]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(a)}}),e}function Nl(t){const e=t.indexOf("?");if(!e)return"";const r=t.indexOf("#",e);return t.substring(e,r>0?r:void 0)}function vP(t,e){const r=new yP(t,e);return r.subscribe.bind(r)}class yP{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,n){let s;if(e===void 0&&r===void 0&&n===void 0)throw new Error("Missing Observer.");_P(e,["next","error","complete"])?s=e:s={next:e,error:r,complete:n},s.next===void 0&&(s.next=hp),s.error===void 0&&(s.error=hp),s.complete===void 0&&(s.complete=hp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _P(t,e){if(typeof t!="object"||t===null)return!1;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}function hp(){}/**
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
 */function _r(t){return t&&t._delegate?t._delegate:t}class Ko{constructor(e,r,n){this.name=e,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */let wP=class{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const n=new rP;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:r});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(r=e==null?void 0:e.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IP(e))try{this.getOrInitializeService({instanceIdentifier:Uo})}catch{}for(const[r,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(r);try{const a=this.getOrInitializeService({instanceIdentifier:s});n.resolve(a)}catch{}}}}clearInstance(e=Uo){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Uo){return this.instances.has(e)}getOptions(e=Uo){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:r});for(const[a,u]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(a);n===d&&u.resolve(s)}return s}onInit(e,r){var n;const s=this.normalizeInstanceIdentifier(r),a=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,r){const n=this.onInitCallbacks.get(r);if(n)for(const s of n)try{s(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:EP(e),options:r}),this.instances.set(e,n),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Uo){return this.component?this.component.multipleInstances?e:Uo:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function EP(t){return t===Uo?void 0:t}function IP(t){return t.instantiationMode==="EAGER"}/**
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
 */class SP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new wP(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ue||(Ue={}));const TP={debug:Ue.DEBUG,verbose:Ue.VERBOSE,info:Ue.INFO,warn:Ue.WARN,error:Ue.ERROR,silent:Ue.SILENT},bP=Ue.INFO,CP={[Ue.DEBUG]:"log",[Ue.VERBOSE]:"log",[Ue.INFO]:"info",[Ue.WARN]:"warn",[Ue.ERROR]:"error"},AP=(t,e,...r)=>{if(e<t.logLevel)return;const n=new Date().toISOString(),s=CP[e];if(s)console[s](`[${n}]  ${t.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dg{constructor(e){this.name=e,this._logLevel=bP,this._logHandler=AP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ue.DEBUG,...e),this._logHandler(this,Ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ue.VERBOSE,...e),this._logHandler(this,Ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ue.INFO,...e),this._logHandler(this,Ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ue.WARN,...e),this._logHandler(this,Ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ue.ERROR,...e),this._logHandler(this,Ue.ERROR,...e)}}const PP=(t,e)=>e.some(r=>t instanceof r);let C_,A_;function RP(){return C_||(C_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xP(){return A_||(A_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bE=new WeakMap,Hp=new WeakMap,CE=new WeakMap,fp=new WeakMap,Ng=new WeakMap;function kP(t){const e=new Promise((r,n)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",u)},a=()=>{r(Hi(t.result)),s()},u=()=>{n(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",u)});return e.then(r=>{r instanceof IDBCursor&&bE.set(r,t)}).catch(()=>{}),Ng.set(e,t),e}function DP(t){if(Hp.has(t))return;const e=new Promise((r,n)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",u),t.removeEventListener("abort",u)},a=()=>{r(),s()},u=()=>{n(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",u),t.addEventListener("abort",u)});Hp.set(t,e)}let qp={get(t,e,r){if(t instanceof IDBTransaction){if(e==="done")return Hp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||CE.get(t);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Hi(t[e])},set(t,e,r){return t[e]=r,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NP(t){qp=t(qp)}function OP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const n=t.call(pp(this),e,...r);return CE.set(n,e.sort?e.sort():[e]),Hi(n)}:xP().includes(t)?function(...e){return t.apply(pp(this),e),Hi(bE.get(this))}:function(...e){return Hi(t.apply(pp(this),e))}}function LP(t){return typeof t=="function"?OP(t):(t instanceof IDBTransaction&&DP(t),PP(t,RP())?new Proxy(t,qp):t)}function Hi(t){if(t instanceof IDBRequest)return kP(t);if(fp.has(t))return fp.get(t);const e=LP(t);return e!==t&&(fp.set(t,e),Ng.set(e,t)),e}const pp=t=>Ng.get(t);function MP(t,e,{blocked:r,upgrade:n,blocking:s,terminated:a}={}){const u=indexedDB.open(t,e),d=Hi(u);return n&&u.addEventListener("upgradeneeded",f=>{n(Hi(u.result),f.oldVersion,f.newVersion,Hi(u.transaction),f)}),r&&u.addEventListener("blocked",f=>r(f.oldVersion,f.newVersion,f)),d.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const VP=["get","getKey","getAll","getAllKeys","count"],FP=["put","add","delete","clear"],gp=new Map;function P_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gp.get(e))return gp.get(e);const r=e.replace(/FromIndex$/,""),n=e!==r,s=FP.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(s||VP.includes(r)))return;const a=async function(u,...d){const f=this.transaction(u,s?"readwrite":"readonly");let g=f.store;return n&&(g=g.index(d.shift())),(await Promise.all([g[r](...d),s&&f.done]))[0]};return gp.set(e,a),a}NP(t=>({...t,get:(e,r,n)=>P_(e,r)||t.get(e,r,n),has:(e,r)=>!!P_(e,r)||t.has(e,r)}));/**
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
 */class BP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(UP(r)){const n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}}function UP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kp="@firebase/app",R_="0.11.5";/**
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
 */const ui=new Dg("@firebase/app"),jP="@firebase/app-compat",$P="@firebase/analytics-compat",zP="@firebase/analytics",WP="@firebase/app-check-compat",GP="@firebase/app-check",HP="@firebase/auth",qP="@firebase/auth-compat",KP="@firebase/database",QP="@firebase/data-connect",YP="@firebase/database-compat",XP="@firebase/functions",JP="@firebase/functions-compat",ZP="@firebase/installations",e1="@firebase/installations-compat",t1="@firebase/messaging",r1="@firebase/messaging-compat",n1="@firebase/performance",i1="@firebase/performance-compat",o1="@firebase/remote-config",s1="@firebase/remote-config-compat",a1="@firebase/storage",l1="@firebase/storage-compat",u1="@firebase/firestore",c1="@firebase/vertexai",d1="@firebase/firestore-compat",h1="firebase",f1="11.6.1";/**
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
 */const Qp="[DEFAULT]",p1={[Kp]:"fire-core",[jP]:"fire-core-compat",[zP]:"fire-analytics",[$P]:"fire-analytics-compat",[GP]:"fire-app-check",[WP]:"fire-app-check-compat",[HP]:"fire-auth",[qP]:"fire-auth-compat",[KP]:"fire-rtdb",[QP]:"fire-data-connect",[YP]:"fire-rtdb-compat",[XP]:"fire-fn",[JP]:"fire-fn-compat",[ZP]:"fire-iid",[e1]:"fire-iid-compat",[t1]:"fire-fcm",[r1]:"fire-fcm-compat",[n1]:"fire-perf",[i1]:"fire-perf-compat",[o1]:"fire-rc",[s1]:"fire-rc-compat",[a1]:"fire-gcs",[l1]:"fire-gcs-compat",[u1]:"fire-fst",[d1]:"fire-fst-compat",[c1]:"fire-vertex","fire-js":"fire-js",[h1]:"fire-js-all"};/**
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
 */const yd=new Map,g1=new Map,Yp=new Map;function x_(t,e){try{t.container.addComponent(e)}catch(r){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,r)}}function ha(t){const e=t.name;if(Yp.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;Yp.set(e,t);for(const r of yd.values())x_(r,t);for(const r of g1.values())x_(r,t);return!0}function Og(t,e){const r=t.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),t.container.getProvider(e)}function Hr(t){return t==null?!1:t.settings!==void 0}/**
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
 */const m1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qi=new cu("app","Firebase",m1);/**
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
 */class v1{constructor(e,r,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ko("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qi.create("app-deleted",{appName:this._name})}}/**
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
 */const ba=f1;function AE(t,e={}){let r=t;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Qp,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw qi.create("bad-app-name",{appName:String(s)});if(r||(r=SE()),!r)throw qi.create("no-options");const a=yd.get(s);if(a){if(qo(r,a.options)&&qo(n,a.config))return a;throw qi.create("duplicate-app",{appName:s})}const u=new SP(s);for(const f of Yp.values())u.addComponent(f);const d=new v1(r,n,u);return yd.set(s,d),d}function PE(t=Qp){const e=yd.get(t);if(!e&&t===Qp&&SE())return AE();if(!e)throw qi.create("no-app",{appName:t});return e}function Ki(t,e,r){var n;let s=(n=p1[t])!==null&&n!==void 0?n:t;r&&(s+=`-${r}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const d=[`Unable to register library "${s}" with version "${e}":`];a&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&d.push("and"),u&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(d.join(" "));return}ha(new Ko(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const y1="firebase-heartbeat-database",_1=1,Ql="firebase-heartbeat-store";let mp=null;function RE(){return mp||(mp=MP(y1,_1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ql)}catch(r){console.warn(r)}}}}).catch(t=>{throw qi.create("idb-open",{originalErrorMessage:t.message})})),mp}async function w1(t){try{const r=(await RE()).transaction(Ql),n=await r.objectStore(Ql).get(xE(t));return await r.done,n}catch(e){if(e instanceof fi)ui.warn(e.message);else{const r=qi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ui.warn(r.message)}}}async function k_(t,e){try{const n=(await RE()).transaction(Ql,"readwrite");await n.objectStore(Ql).put(e,xE(t)),await n.done}catch(r){if(r instanceof fi)ui.warn(r.message);else{const n=qi.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});ui.warn(n.message)}}}function xE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const E1=1024,I1=30;class S1{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new b1(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,r;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=D_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats.length>I1){const u=C1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ui.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=D_(),{heartbeatsToSend:n,unsentEntries:s}=T1(this._heartbeatsCache.heartbeats),a=vd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=r,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(r){return ui.warn(r),""}}}function D_(){return new Date().toISOString().substring(0,10)}function T1(t,e=E1){const r=[];let n=t.slice();for(const s of t){const a=r.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),N_(r)>e){a.dates.pop();break}}else if(r.push({agent:s.agent,dates:[s.date]}),N_(r)>e){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}class b1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dP()?hP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await w1(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return k_(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return k_(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function N_(t){return vd(JSON.stringify({version:2,heartbeats:t})).length}function C1(t){if(t.length===0)return-1;let e=0,r=t[0].date;for(let n=1;n<t.length;n++)t[n].date<r&&(r=t[n].date,e=n);return e}/**
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
 */function A1(t){ha(new Ko("platform-logger",e=>new BP(e),"PRIVATE")),ha(new Ko("heartbeat",e=>new S1(e),"PRIVATE")),Ki(Kp,R_,t),Ki(Kp,R_,"esm2017"),Ki("fire-js","")}A1("");function kE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const P1=kE,DE=new cu("auth","Firebase",kE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new Dg("@firebase/auth");function R1(t,...e){_d.logLevel<=Ue.WARN&&_d.warn(`Auth (${ba}): ${t}`,...e)}function td(t,...e){_d.logLevel<=Ue.ERROR&&_d.error(`Auth (${ba}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,...e){throw Lg(t,...e)}function Dn(t,...e){return Lg(t,...e)}function NE(t,e,r){const n=Object.assign(Object.assign({},P1()),{[e]:r});return new cu("auth","Firebase",n).create(e,{appName:t.name})}function ai(t){return NE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lg(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return DE.create(t,...e)}function Ce(t,e,...r){if(!t)throw Lg(e,...r)}function ii(t){const e="INTERNAL ASSERTION FAILED: "+t;throw td(e),new Error(e)}function ci(t,e){t||ii(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function x1(){return O_()==="http:"||O_()==="https:"}function O_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x1()||aP()||"connection"in navigator)?navigator.onLine:!0}function D1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,r){this.shortDelay=e,this.longDelay=r,ci(r>e,"Short delay should be less than long delay!"),this.isMobile=iP()||lP()}get(){return k1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mg(t,e){ci(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ii("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ii("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ii("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],L1=new hu(3e4,6e4);function lo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function uo(t,e,r,n,s={}){return LE(t,s,async()=>{let a={},u={};n&&(e==="GET"?u=n:a={body:JSON.stringify(n)});const d=du(Object.assign({key:t.config.apiKey},u)).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const g=Object.assign({method:e,headers:f},a);return sP()||(g.referrerPolicy="no-referrer"),OE.fetch()(await ME(t,t.config.apiHost,r,d),g)})}async function LE(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},N1),e);try{const s=new V1(t),a=await Promise.race([r(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Bc(t,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const d=a.ok?u.errorMessage:u.error.message,[f,g]=d.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bc(t,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Bc(t,"email-already-in-use",u);if(f==="USER_DISABLED")throw Bc(t,"user-disabled",u);const y=n[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw NE(t,y,g);yn(t,y)}}catch(s){if(s instanceof fi)throw s;yn(t,"network-request-failed",{message:String(s)})}}async function fu(t,e,r,n,s={}){const a=await uo(t,e,r,n,s);return"mfaPendingCredential"in a&&yn(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function ME(t,e,r,n){const s=`${e}${r}?${n}`,a=t,u=a.config.emulator?Mg(t.config,s):`${t.config.apiScheme}://${s}`;return O1.includes(r)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function M1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class V1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(Dn(this.auth,"network-request-failed")),L1.get())})}}function Bc(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const s=Dn(t,e,n);return s.customData._tokenResponse=r,s}function L_(t){return t!==void 0&&t.enterprise!==void 0}class F1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===e)return M1(r.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function B1(t,e){return uo(t,"GET","/v2/recaptchaConfig",lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U1(t,e){return uo(t,"POST","/v1/accounts:delete",e)}async function wd(t,e){return uo(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j1(t,e=!1){const r=_r(t),n=await r.getIdToken(e),s=Vg(n);Ce(s&&s.exp&&s.auth_time&&s.iat,r.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:n,authTime:Fl(vp(s.auth_time)),issuedAtTime:Fl(vp(s.iat)),expirationTime:Fl(vp(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function vp(t){return Number(t)*1e3}function Vg(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return td("JWT malformed, contained fewer than 3 sections"),null;try{const s=EE(r);return s?JSON.parse(s):(td("Failed to decode base64 JWT payload"),null)}catch(s){return td("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function M_(t){const e=Vg(t);return Ce(e,"internal-error"),Ce(typeof e.exp<"u","internal-error"),Ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yl(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof fi&&$1(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function $1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fl(this.lastLoginAt),this.creationTime=Fl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ed(t){var e;const r=t.auth,n=await t.getIdToken(),s=await Yl(t,wd(r,{idToken:n}));Ce(s==null?void 0:s.users.length,r,"internal-error");const a=s.users[0];t._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?VE(a.providerUserInfo):[],d=G1(t.providerData,u),f=t.isAnonymous,g=!(t.email&&a.passwordHash)&&!(d!=null&&d.length),y=f?g:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:d,metadata:new Jp(a.createdAt,a.lastLoginAt),isAnonymous:y};Object.assign(t,_)}async function W1(t){const e=_r(t);await Ed(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function G1(t,e){return[...t.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function VE(t){return t.map(e=>{var{providerId:r}=e,n=bg(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e){const r=await LE(t,{},async()=>{const n=du({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=t.config,u=await ME(t,s,"/v1/token",`key=${a}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",OE.fetch()(u,{method:"POST",headers:d,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function q1(t,e){return uo(t,"POST","/v2/accounts:revokeToken",lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ce(e.idToken,"internal-error"),Ce(typeof e.idToken<"u","internal-error"),Ce(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):M_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}updateFromIdToken(e){Ce(e.length!==0,"internal-error");const r=M_(e);this.updateTokensAndExpiration(e,null,r)}async getToken(e,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(Ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:s,expiresIn:a}=await H1(e,r);this.updateTokensAndExpiration(n,s,Number(a))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:s,expirationTime:a}=r,u=new ia;return n&&(Ce(typeof n=="string","internal-error",{appName:e}),u.refreshToken=n),s&&(Ce(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(Ce(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ia,this.toJSON())}_performRefresh(){return ii("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t,e){Ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:r,auth:n,stsTokenManager:s}=e,a=bg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Jp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const r=await Yl(this,this.stsTokenManager.getToken(this.auth,e));return Ce(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return j1(this,e)}reload(){return W1(this)}_assign(e){this!==e&&(Ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){Ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await Ed(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Hr(this.auth.app))return Promise.reject(ai(this.auth));const e=await this.getIdToken();return await Yl(this,U1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,s,a,u,d,f,g,y;const _=(n=r.displayName)!==null&&n!==void 0?n:void 0,w=(s=r.email)!==null&&s!==void 0?s:void 0,I=(a=r.phoneNumber)!==null&&a!==void 0?a:void 0,b=(u=r.photoURL)!==null&&u!==void 0?u:void 0,k=(d=r.tenantId)!==null&&d!==void 0?d:void 0,D=(f=r._redirectEventId)!==null&&f!==void 0?f:void 0,F=(g=r.createdAt)!==null&&g!==void 0?g:void 0,U=(y=r.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:W,emailVerified:q,isAnonymous:G,providerData:X,stsTokenManager:R}=r;Ce(W&&R,e,"internal-error");const A=ia.fromJSON(this.name,R);Ce(typeof W=="string",e,"internal-error"),Fi(_,e.name),Fi(w,e.name),Ce(typeof q=="boolean",e,"internal-error"),Ce(typeof G=="boolean",e,"internal-error"),Fi(I,e.name),Fi(b,e.name),Fi(k,e.name),Fi(D,e.name),Fi(F,e.name),Fi(U,e.name);const P=new fn({uid:W,auth:e,email:w,emailVerified:q,displayName:_,isAnonymous:G,photoURL:b,phoneNumber:I,tenantId:k,stsTokenManager:A,createdAt:F,lastLoginAt:U});return X&&Array.isArray(X)&&(P.providerData=X.map(N=>Object.assign({},N))),D&&(P._redirectEventId=D),P}static async _fromIdTokenResponse(e,r,n=!1){const s=new ia;s.updateFromServerResponse(r);const a=new fn({uid:r.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Ed(a),a}static async _fromGetAccountInfoResponse(e,r,n){const s=r.users[0];Ce(s.localId!==void 0,"internal-error");const a=s.providerUserInfo!==void 0?VE(s.providerUserInfo):[],u=!(s.email&&s.passwordHash)&&!(a!=null&&a.length),d=new ia;d.updateFromIdToken(n);const f=new fn({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:u}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Jp(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,g),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_=new Map;function oi(t){ci(t instanceof Function,"Expected a class definition");let e=V_.get(t);return e?(ci(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,V_.set(t,e),e)}/**
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
 */class FE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}FE.type="NONE";const F_=FE;/**
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
 */function rd(t,e,r){return`firebase:${t}:${e}:${r}`}class oa{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:s,name:a}=this.auth;this.fullUserKey=rd(this.userKey,s.apiKey,a),this.fullPersistenceKey=rd("persistence",s.apiKey,a),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const r=await wd(this.auth,{idToken:e}).catch(()=>{});return r?fn._fromGetAccountInfoResponse(this.auth,r,e):null}return fn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new oa(oi(F_),e,n);const s=(await Promise.all(r.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=s[0]||oi(F_);const u=rd(n,e.config.apiKey,e.name);let d=null;for(const g of r)try{const y=await g._get(u);if(y){let _;if(typeof y=="string"){const w=await wd(e,{idToken:y}).catch(()=>{});if(!w)break;_=await fn._fromGetAccountInfoResponse(e,w,y)}else _=fn._fromJSON(e,y);g!==a&&(d=_),a=g;break}}catch{}const f=s.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new oa(a,e,n):(a=f[0],d&&await a._set(u,d.toJSON()),await Promise.all(r.map(async g=>{if(g!==a)try{await g._remove(u)}catch{}})),new oa(a,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($E(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(BE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(WE(e))return"Blackberry";if(GE(e))return"Webos";if(UE(e))return"Safari";if((e.includes("chrome/")||jE(e))&&!e.includes("edge/"))return"Chrome";if(zE(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function BE(t=nr()){return/firefox\//i.test(t)}function UE(t=nr()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jE(t=nr()){return/crios\//i.test(t)}function $E(t=nr()){return/iemobile/i.test(t)}function zE(t=nr()){return/android/i.test(t)}function WE(t=nr()){return/blackberry/i.test(t)}function GE(t=nr()){return/webos/i.test(t)}function Fg(t=nr()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function K1(t=nr()){var e;return Fg(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Q1(){return uP()&&document.documentMode===10}function HE(t=nr()){return Fg(t)||zE(t)||GE(t)||WE(t)||/windows phone/i.test(t)||$E(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t,e=[]){let r;switch(t){case"Browser":r=B_(nr());break;case"Worker":r=`${B_(nr())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${ba}/${n}`}/**
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
 */class Y1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=a=>new Promise((u,d)=>{try{const f=e(a);u(f)}catch(f){d(f)}});n.onAbort=r,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function X1(t,e={}){return uo(t,"GET","/v2/passwordPolicy",lo(t,e))}/**
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
 */const J1=6;class Z1{constructor(e){var r,n,s,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=u.minPasswordLength)!==null&&r!==void 0?r:J1,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,n,s,a,u,d;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(r=f.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(n=f.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(s=f.containsLowercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(d=f.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),f}validatePasswordLengthOptions(e,r){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(r.meetsMinPasswordLength=e.length>=n),s&&(r.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(r,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,r,n,s,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,r,n,s){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new U_(this),this.idTokenSubscription=new U_(this),this.beforeStateQueue=new Y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=DE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=oi(r)),this._initializationPromise=this.queue(async()=>{var n,s,a;if(!this._deleted&&(this.persistenceManager=await oa.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const r=await wd(this,{idToken:e}),n=await fn._fromGetAccountInfoResponse(this,r,e);await this.directlySetCurrentUser(n)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Hr(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(d,d))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,d=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===d)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await Ed(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=D1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Hr(this.app))return Promise.reject(ai(this));const r=e?_r(e):null;return r&&Ce(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&Ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Hr(this.app)?Promise.reject(ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Hr(this.app)?Promise.reject(ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(oi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await X1(this),r=new Z1(e);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cu("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},r)}})}async revokeAccessToken(e){if(this.currentUser){const r=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:r};this.tenantId!=null&&(n.tenantId=this.tenantId),await q1(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&oi(e)||this._popupRedirectResolver;Ce(r,this,"argument-error"),this.redirectPersistenceManager=await oa.create(this,[oi(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,s){if(this._deleted)return()=>{};const a=typeof r=="function"?r:r.next.bind(r);let u=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ce(d,this,"internal-error"),d.then(()=>{u||a(this.currentUser)}),typeof r=="function"){const f=e.addObserver(r,n,s);return()=>{u=!0,f()}}else{const f=e.addObserver(r);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(r["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(r["X-Firebase-AppCheck"]=s),r}async _getAppCheckToken(){var e;if(Hr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r!=null&&r.error&&R1(`Error while retrieving App Check token: ${r.error}`),r==null?void 0:r.token}}function es(t){return _r(t)}class U_{constructor(e){this.auth=e,this.observer=null,this.addObserver=vP(r=>this.observer=r)}get next(){return Ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let th={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tR(t){th=t}function KE(t){return th.loadJS(t)}function rR(){return th.recaptchaEnterpriseScript}function nR(){return th.gapiScript}function iR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class oR{constructor(){this.enterprise=new sR}ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}class sR{ready(e){e()}execute(e,r){return Promise.resolve("token")}render(e,r){return""}}const aR="recaptcha-enterprise",QE="NO_RECAPTCHA";class lR{constructor(e){this.type=aR,this.auth=es(e)}async verify(e="verify",r=!1){async function n(a){if(!r){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,d)=>{B1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new F1(f);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,u(g.siteKey)}}).catch(f=>{d(f)})})}function s(a,u,d){const f=window.grecaptcha;L_(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(g=>{u(g)}).catch(()=>{u(QE)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new oR().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{n(this.auth).then(d=>{if(!r&&L_(window.grecaptcha))s(d,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=rR();f.length!==0&&(f+=d),KE(f).then(()=>{s(d,a,u)}).catch(g=>{u(g)})}}).catch(d=>{u(d)})})}}async function j_(t,e,r,n=!1,s=!1){const a=new lR(t);let u;if(s)u=QE;else try{u=await a.verify(r)}catch{u=await a.verify(r,!0)}const d=Object.assign({},e);if(r==="mfaSmsEnrollment"||r==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const f=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:g,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const f=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return n?Object.assign(d,{captchaResp:u}):Object.assign(d,{captchaResponse:u}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Zp(t,e,r,n,s){var a;if(!((a=t._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await j_(t,e,r,r==="getOobCode");return n(t,u)}else return n(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await j_(t,e,r,r==="getOobCode");return n(t,d)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t,e){const r=Og(t,"auth");if(r.isInitialized()){const s=r.getImmediate(),a=r.getOptions();if(qo(a,e??{}))return s;yn(s,"already-initialized")}return r.initialize({options:e})}function cR(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(oi);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function dR(t,e,r){const n=es(t);Ce(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,a=YE(e),{host:u,port:d}=hR(e),f=d===null?"":`:${d}`,g={url:`${a}//${u}${f}/`},y=Object.freeze({host:u,port:d,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){Ce(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),Ce(qo(g,n.config.emulator)&&qo(y,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=g,n.emulatorConfig=y,n.settings.appVerificationDisabledForTesting=!0,fR()}function YE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hR(t){const e=YE(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const a=s[1];return{host:a,port:$_(n.substr(a.length+1))}}else{const[a,u]=n.split(":");return{host:a,port:$_(u)}}}function $_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fR(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return ii("not implemented")}_getIdTokenResponse(e){return ii("not implemented")}_linkToIdToken(e,r){return ii("not implemented")}_getReauthenticationResolver(e){return ii("not implemented")}}async function pR(t,e){return uo(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gR(t,e){return fu(t,"POST","/v1/accounts:signInWithPassword",lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e){return fu(t,"POST","/v1/accounts:signInWithEmailLink",lo(t,e))}async function vR(t,e){return fu(t,"POST","/v1/accounts:signInWithEmailLink",lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Bg{constructor(e,r,n,s=null){super("password",n),this._email=e,this._password=r,this._tenantId=s}static _fromEmailAndPassword(e,r){return new Xl(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new Xl(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zp(e,r,"signInWithPassword",gR);case"emailLink":return mR(e,{email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":const n={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Zp(e,n,"signUpPassword",pR);case"emailLink":return vR(e,{idToken:r,email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e){return fu(t,"POST","/v1/accounts:signInWithIdp",lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="http://localhost";class Qo extends Bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Qo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):yn("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=r,a=bg(r,["providerId","signInMethod"]);if(!n||!s)return null;const u=new Qo(n,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const r=this.buildRequest();return sa(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,sa(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,sa(e,r)}buildRequest(){const e={requestUri:yR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=du(r)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function wR(t){const e=Dl(Nl(t)).link,r=e?Dl(Nl(e)).deep_link_id:null,n=Dl(Nl(t)).deep_link_id;return(n?Dl(Nl(n)).link:null)||n||r||e||t}class Ug{constructor(e){var r,n,s,a,u,d;const f=Dl(Nl(e)),g=(r=f.apiKey)!==null&&r!==void 0?r:null,y=(n=f.oobCode)!==null&&n!==void 0?n:null,_=_R((s=f.mode)!==null&&s!==void 0?s:null);Ce(g&&y&&_,"argument-error"),this.apiKey=g,this.operation=_,this.code=y,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(d=f.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const r=wR(e);try{return new Ug(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(){this.providerId=Ca.PROVIDER_ID}static credential(e,r){return Xl._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=Ug.parseLink(r);return Ce(n,"argument-error"),Xl._fromEmailAndCode(e,n.code,n.tenantId)}}Ca.PROVIDER_ID="password";Ca.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ca.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pu extends XE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends pu{constructor(){super("facebook.com")}static credential(e){return Qo._fromParams({providerId:Ui.PROVIDER_ID,signInMethod:Ui.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ui.credentialFromTaggedObject(e)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ui.credential(e.oauthAccessToken)}catch{return null}}}Ui.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ui.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends pu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Qo._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return ji.credential(r,n)}catch{return null}}}ji.GOOGLE_SIGN_IN_METHOD="google.com";ji.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends pu{constructor(){super("github.com")}static credential(e){return Qo._fromParams({providerId:$i.PROVIDER_ID,signInMethod:$i.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $i.credentialFromTaggedObject(e)}static credentialFromError(e){return $i.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $i.credential(e.oauthAccessToken)}catch{return null}}}$i.GITHUB_SIGN_IN_METHOD="github.com";$i.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends pu{constructor(){super("twitter.com")}static credential(e,r){return Qo._fromParams({providerId:zi.PROVIDER_ID,signInMethod:zi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return zi.credentialFromTaggedObject(e)}static credentialFromError(e){return zi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return zi.credential(r,n)}catch{return null}}}zi.TWITTER_SIGN_IN_METHOD="twitter.com";zi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){return fu(t,"POST","/v1/accounts:signUp",lo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,s=!1){const a=await fn._fromIdTokenResponse(e,n,s),u=z_(n);return new Yo({user:a,providerId:u,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const s=z_(n);return new Yo({user:e,providerId:s,_tokenResponse:n,operationType:r})}}function z_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends fi{constructor(e,r,n,s){var a;super(r.code,r.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Id.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,s){return new Id(e,r,n,s)}}function JE(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Id._fromErrorAndOperation(t,a,e,n):a})}async function IR(t,e,r=!1){const n=await Yl(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return Yo._forOperation(t,"link",n)}/**
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
 */async function SR(t,e,r=!1){const{auth:n}=t;if(Hr(n.app))return Promise.reject(ai(n));const s="reauthenticate";try{const a=await Yl(t,JE(n,s,e,t),r);Ce(a.idToken,n,"internal-error");const u=Vg(a.idToken);Ce(u,n,"internal-error");const{sub:d}=u;return Ce(t.uid===d,n,"user-mismatch"),Yo._forOperation(t,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&yn(n,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e,r=!1){if(Hr(t.app))return Promise.reject(ai(t));const n="signIn",s=await JE(t,n,e),a=await Yo._fromIdTokenResponse(t,n,s);return r||await t._updateCurrentUser(a.user),a}async function TR(t,e){return ZE(es(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eI(t){const e=es(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bR(t,e,r){if(Hr(t.app))return Promise.reject(ai(t));const n=es(t),u=await Zp(n,{returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ER).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&eI(t),f}),d=await Yo._fromIdTokenResponse(n,"signIn",u);return await n._updateCurrentUser(d.user),d}function CR(t,e,r){return Hr(t.app)?Promise.reject(ai(t)):TR(_r(t),Ca.credential(e,r)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&eI(t),n})}function AR(t,e,r,n){return _r(t).onIdTokenChanged(e,r,n)}function PR(t,e,r){return _r(t).beforeAuthStateChanged(e,r)}function RR(t,e,r,n){return _r(t).onAuthStateChanged(e,r,n)}function xR(t){return _r(t).signOut()}const Sd="__sak";/**
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
 */class tI{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Sd,"1"),this.storage.removeItem(Sd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=1e3,DR=10;class rI extends tI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=HE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),s=this.localCache[r];n!==s&&e(r,s,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((u,d,f)=>{this.notifyListeners(u,f)});return}const n=e.key;r?this.detachListener():this.stopPolling();const s=()=>{const u=this.storage.getItem(n);!r&&this.localCache[n]===u||this.notifyListeners(n,u)},a=this.storage.getItem(n);Q1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,DR):s()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},kR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}rI.type="LOCAL";const NR=rI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI extends tI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}nI.type="SESSION";const iI=nI;/**
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
 */function OR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class rh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(s=>s.isListeningto(e));if(r)return r;const n=new rh(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:s,data:a}=r.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const d=Array.from(u).map(async g=>g(r.origin,a)),f=await OR(d);r.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:f})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class LR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((d,f)=>{const g=jg("",20);s.port1.start();const y=setTimeout(()=>{f(new Error("unsupported_event"))},n);u={messageChannel:s,onMessage(_){const w=_;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(y),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),d(w.data.response);break;default:clearTimeout(y),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:g,data:r},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){return window}function MR(t){Nn().location.href=t}/**
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
 */function oI(){return typeof Nn().WorkerGlobalScope<"u"&&typeof Nn().importScripts=="function"}async function VR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function BR(){return oI()?self:null}/**
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
 */const sI="firebaseLocalStorageDb",UR=1,Td="firebaseLocalStorage",aI="fbase_key";class gu{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function nh(t,e){return t.transaction([Td],e?"readwrite":"readonly").objectStore(Td)}function jR(){const t=indexedDB.deleteDatabase(sI);return new gu(t).toPromise()}function eg(){const t=indexedDB.open(sI,UR);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(Td,{keyPath:aI})}catch(s){r(s)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(Td)?e(n):(n.close(),await jR(),e(await eg()))})})}async function W_(t,e,r){const n=nh(t,!0).put({[aI]:e,value:r});return new gu(n).toPromise()}async function $R(t,e){const r=nh(t,!1).get(e),n=await new gu(r).toPromise();return n===void 0?null:n.value}function G_(t,e){const r=nh(t,!0).delete(e);return new gu(r).toPromise()}const zR=800,WR=3;class lI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eg(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>WR)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return oI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rh._getInstance(BR()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await VR(),!this.activeServiceWorker)return;this.sender=new LR(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eg();return await W_(e,Sd,"1"),await G_(e,Sd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>W_(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>$R(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>G_(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=nh(s,!1).getAll();return new gu(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:a}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),r.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),r.push(s));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lI.type="LOCAL";const GR=lI;new hu(3e4,6e4);/**
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
 */function HR(t,e){return e?oi(e):(Ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $g extends Bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return sa(e,this._buildIdpRequest())}_linkToIdToken(e,r){return sa(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return sa(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function qR(t){return ZE(t.auth,new $g(t),t.bypassAuthState)}function KR(t){const{auth:e,user:r}=t;return Ce(r,e,"internal-error"),SR(r,new $g(t),t.bypassAuthState)}async function QR(t){const{auth:e,user:r}=t;return Ce(r,e,"internal-error"),IR(r,new $g(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,r,n,s,a=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:s,tenantId:a,error:u,type:d}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:r,sessionId:n,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(f))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qR;case"linkViaPopup":case"linkViaRedirect":return QR;case"reauthViaPopup":case"reauthViaRedirect":return KR;default:yn(this.auth,"internal-error")}}resolve(e){ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ci(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new hu(2e3,1e4);class na extends uI{constructor(e,r,n,s,a){super(e,r,s,a),this.provider=n,this.authWindow=null,this.pollId=null,na.currentPopupAction&&na.currentPopupAction.cancel(),na.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ce(e,this.auth,"internal-error"),e}async onExecution(){ci(this.filter.length===1,"Popup operations only handle one event");const e=jg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(Dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,na.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,YR.get())};e()}}na.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="pendingRedirect",nd=new Map;class JR extends uI{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=nd.get(this.auth._key());if(!e){try{const n=await ZR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}nd.set(this.auth._key(),e)}return this.bypassAuthState||nd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ZR(t,e){const r=rx(e),n=tx(t);if(!await n._isAvailable())return!1;const s=await n._get(r)==="true";return await n._remove(r),s}function ex(t,e){nd.set(t._key(),e)}function tx(t){return oi(t._redirectPersistence)}function rx(t){return rd(XR,t.config.apiKey,t.name)}async function nx(t,e,r=!1){if(Hr(t.app))return Promise.reject(ai(t));const n=es(t),s=HR(n,e),u=await new JR(n,s,r).execute();return u&&!r&&(delete u.user._redirectEventId,await n._persistUserIfCurrent(u.user),await n._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=10*60*1e3;class ox{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!sx(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!cI(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(Dn(this.auth,s))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ix&&this.cachedEventUids.clear(),this.cachedEventUids.has(H_(e))}saveEventToCache(e){this.cachedEventUids.add(H_(e)),this.lastProcessedEventTime=Date.now()}}function H_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function sx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ax(t,e={}){return uo(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ux=/^https?/;async function cx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ax(t);for(const r of e)try{if(dx(r))return}catch{}yn(t,"unauthorized-domain")}function dx(t){const e=Xp(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&u.hostname===n}if(!ux.test(r))return!1;if(lx.test(t))return n===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const hx=new hu(3e4,6e4);function q_(){const t=Nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function fx(t){return new Promise((e,r)=>{var n,s,a;function u(){q_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{q_(),r(Dn(t,"network-request-failed"))},timeout:hx.get()})}if(!((s=(n=Nn().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Nn().gapi)===null||a===void 0)&&a.load)u();else{const d=iR("iframefcb");return Nn()[d]=()=>{gapi.load?u():r(Dn(t,"network-request-failed"))},KE(`${nR()}?onload=${d}`).catch(f=>r(f))}}).catch(e=>{throw id=null,e})}let id=null;function px(t){return id=id||fx(t),id}/**
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
 */const gx=new hu(5e3,15e3),mx="__/auth/iframe",vx="emulator/auth/iframe",yx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_x=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wx(t){const e=t.config;Ce(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Mg(e,vx):`https://${t.config.authDomain}/${mx}`,n={apiKey:e.apiKey,appName:t.name,v:ba},s=_x.get(t.config.apiHost);s&&(n.eid=s);const a=t._getFrameworks();return a.length&&(n.fw=a.join(",")),`${r}?${du(n).slice(1)}`}async function Ex(t){const e=await px(t),r=Nn().gapi;return Ce(r,t,"internal-error"),e.open({where:document.body,url:wx(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yx,dontclear:!0},n=>new Promise(async(s,a)=>{await n.restyle({setHideOnLeave:!1});const u=Dn(t,"network-request-failed"),d=Nn().setTimeout(()=>{a(u)},gx.get());function f(){Nn().clearTimeout(d),s(n)}n.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const Ix={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sx=500,Tx=600,bx="_blank",Cx="http://localhost";class K_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ax(t,e,r,n=Sx,s=Tx){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-n)/2,0).toString();let d="";const f=Object.assign(Object.assign({},Ix),{width:n.toString(),height:s.toString(),top:a,left:u}),g=nr().toLowerCase();r&&(d=jE(g)?bx:r),BE(g)&&(e=e||Cx,f.scrollbars="yes");const y=Object.entries(f).reduce((w,[I,b])=>`${w}${I}=${b},`,"");if(K1(g)&&d!=="_self")return Px(e||"",d),new K_(null);const _=window.open(e||"",d,y);Ce(_,t,"popup-blocked");try{_.focus()}catch{}return new K_(_)}function Px(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const Rx="__/auth/handler",xx="emulator/auth/handler",kx=encodeURIComponent("fac");async function Q_(t,e,r,n,s,a){Ce(t.config.authDomain,t,"auth-domain-config-required"),Ce(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:ba,eventId:s};if(e instanceof XE){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",mP(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,_]of Object.entries({}))u[y]=_}if(e instanceof pu){const y=e.getScopes().filter(_=>_!=="");y.length>0&&(u.scopes=y.join(","))}t.tenantId&&(u.tid=t.tenantId);const d=u;for(const y of Object.keys(d))d[y]===void 0&&delete d[y];const f=await t._getAppCheckToken(),g=f?`#${kx}=${encodeURIComponent(f)}`:"";return`${Dx(t)}?${du(d).slice(1)}${g}`}function Dx({config:t}){return t.emulator?Mg(t,xx):`https://${t.authDomain}/${Rx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp="webStorageSupport";class Nx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=iI,this._completeRedirectFn=nx,this._overrideRedirectResult=ex}async _openPopup(e,r,n,s){var a;ci((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Q_(e,r,n,Xp(),s);return Ax(e,u,jg())}async _openRedirect(e,r,n,s){await this._originValidation(e);const a=await Q_(e,r,n,Xp(),s);return MR(a),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:s,promise:a}=this.eventManagers[r];return s?Promise.resolve(s):(ci(a,"If manager is not set, promise should be"),a)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await Ex(e),n=new ox(e);return r.register("authEvent",s=>(Ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(yp,{type:yp},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[yp];u!==void 0&&r(!!u),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=cx(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return HE()||UE()||Fg()}}const Ox=Nx;var Y_="@firebase/auth",X_="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){Ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vx(t){ha(new Ko("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:d}=n.options;Ce(u&&!u.includes(":"),"invalid-api-key",{appName:n.name});const f={apiKey:u,authDomain:d,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qE(t)},g=new eR(n,s,a,f);return cR(g,r),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),ha(new Ko("auth-internal",e=>{const r=es(e.getProvider("auth").getImmediate());return(n=>new Lx(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ki(Y_,X_,Mx(t)),Ki(Y_,X_,"esm2017")}/**
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
 */const Fx=5*60,Bx=TE("authIdTokenMaxAge")||Fx;let J_=null;const Ux=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Bx)return;const s=r==null?void 0:r.token;J_!==s&&(J_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jx(t=PE()){const e=Og(t,"auth");if(e.isInitialized())return e.getImmediate();const r=uR(t,{popupRedirectResolver:Ox,persistence:[GR,NR,iI]}),n=TE("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(n,location.origin);if(location.origin===a.origin){const u=Ux(a.toString());PR(r,u,()=>u(r.currentUser)),AR(r,d=>u(d))}}const s=IE("auth");return s&&dR(r,`http://${s}`),r}function $x(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tR({loadJS(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=s=>{const a=Dn("internal-error");a.customData=s,r(a)},n.type="text/javascript",n.charset="UTF-8",$x().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vx("Browser");var zx="firebase",Wx="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ki(zx,Wx,"app");var Z_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qi,dI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,A){function P(){}P.prototype=A.prototype,R.D=A.prototype,R.prototype=new P,R.prototype.constructor=R,R.C=function(N,O,B){for(var C=Array(arguments.length-2),be=2;be<arguments.length;be++)C[be-2]=arguments[be];return A.prototype[O].apply(N,C)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,r),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(R,A,P){P||(P=0);var N=Array(16);if(typeof A=="string")for(var O=0;16>O;++O)N[O]=A.charCodeAt(P++)|A.charCodeAt(P++)<<8|A.charCodeAt(P++)<<16|A.charCodeAt(P++)<<24;else for(O=0;16>O;++O)N[O]=A[P++]|A[P++]<<8|A[P++]<<16|A[P++]<<24;A=R.g[0],P=R.g[1],O=R.g[2];var B=R.g[3],C=A+(B^P&(O^B))+N[0]+3614090360&4294967295;A=P+(C<<7&4294967295|C>>>25),C=B+(O^A&(P^O))+N[1]+3905402710&4294967295,B=A+(C<<12&4294967295|C>>>20),C=O+(P^B&(A^P))+N[2]+606105819&4294967295,O=B+(C<<17&4294967295|C>>>15),C=P+(A^O&(B^A))+N[3]+3250441966&4294967295,P=O+(C<<22&4294967295|C>>>10),C=A+(B^P&(O^B))+N[4]+4118548399&4294967295,A=P+(C<<7&4294967295|C>>>25),C=B+(O^A&(P^O))+N[5]+1200080426&4294967295,B=A+(C<<12&4294967295|C>>>20),C=O+(P^B&(A^P))+N[6]+2821735955&4294967295,O=B+(C<<17&4294967295|C>>>15),C=P+(A^O&(B^A))+N[7]+4249261313&4294967295,P=O+(C<<22&4294967295|C>>>10),C=A+(B^P&(O^B))+N[8]+1770035416&4294967295,A=P+(C<<7&4294967295|C>>>25),C=B+(O^A&(P^O))+N[9]+2336552879&4294967295,B=A+(C<<12&4294967295|C>>>20),C=O+(P^B&(A^P))+N[10]+4294925233&4294967295,O=B+(C<<17&4294967295|C>>>15),C=P+(A^O&(B^A))+N[11]+2304563134&4294967295,P=O+(C<<22&4294967295|C>>>10),C=A+(B^P&(O^B))+N[12]+1804603682&4294967295,A=P+(C<<7&4294967295|C>>>25),C=B+(O^A&(P^O))+N[13]+4254626195&4294967295,B=A+(C<<12&4294967295|C>>>20),C=O+(P^B&(A^P))+N[14]+2792965006&4294967295,O=B+(C<<17&4294967295|C>>>15),C=P+(A^O&(B^A))+N[15]+1236535329&4294967295,P=O+(C<<22&4294967295|C>>>10),C=A+(O^B&(P^O))+N[1]+4129170786&4294967295,A=P+(C<<5&4294967295|C>>>27),C=B+(P^O&(A^P))+N[6]+3225465664&4294967295,B=A+(C<<9&4294967295|C>>>23),C=O+(A^P&(B^A))+N[11]+643717713&4294967295,O=B+(C<<14&4294967295|C>>>18),C=P+(B^A&(O^B))+N[0]+3921069994&4294967295,P=O+(C<<20&4294967295|C>>>12),C=A+(O^B&(P^O))+N[5]+3593408605&4294967295,A=P+(C<<5&4294967295|C>>>27),C=B+(P^O&(A^P))+N[10]+38016083&4294967295,B=A+(C<<9&4294967295|C>>>23),C=O+(A^P&(B^A))+N[15]+3634488961&4294967295,O=B+(C<<14&4294967295|C>>>18),C=P+(B^A&(O^B))+N[4]+3889429448&4294967295,P=O+(C<<20&4294967295|C>>>12),C=A+(O^B&(P^O))+N[9]+568446438&4294967295,A=P+(C<<5&4294967295|C>>>27),C=B+(P^O&(A^P))+N[14]+3275163606&4294967295,B=A+(C<<9&4294967295|C>>>23),C=O+(A^P&(B^A))+N[3]+4107603335&4294967295,O=B+(C<<14&4294967295|C>>>18),C=P+(B^A&(O^B))+N[8]+1163531501&4294967295,P=O+(C<<20&4294967295|C>>>12),C=A+(O^B&(P^O))+N[13]+2850285829&4294967295,A=P+(C<<5&4294967295|C>>>27),C=B+(P^O&(A^P))+N[2]+4243563512&4294967295,B=A+(C<<9&4294967295|C>>>23),C=O+(A^P&(B^A))+N[7]+1735328473&4294967295,O=B+(C<<14&4294967295|C>>>18),C=P+(B^A&(O^B))+N[12]+2368359562&4294967295,P=O+(C<<20&4294967295|C>>>12),C=A+(P^O^B)+N[5]+4294588738&4294967295,A=P+(C<<4&4294967295|C>>>28),C=B+(A^P^O)+N[8]+2272392833&4294967295,B=A+(C<<11&4294967295|C>>>21),C=O+(B^A^P)+N[11]+1839030562&4294967295,O=B+(C<<16&4294967295|C>>>16),C=P+(O^B^A)+N[14]+4259657740&4294967295,P=O+(C<<23&4294967295|C>>>9),C=A+(P^O^B)+N[1]+2763975236&4294967295,A=P+(C<<4&4294967295|C>>>28),C=B+(A^P^O)+N[4]+1272893353&4294967295,B=A+(C<<11&4294967295|C>>>21),C=O+(B^A^P)+N[7]+4139469664&4294967295,O=B+(C<<16&4294967295|C>>>16),C=P+(O^B^A)+N[10]+3200236656&4294967295,P=O+(C<<23&4294967295|C>>>9),C=A+(P^O^B)+N[13]+681279174&4294967295,A=P+(C<<4&4294967295|C>>>28),C=B+(A^P^O)+N[0]+3936430074&4294967295,B=A+(C<<11&4294967295|C>>>21),C=O+(B^A^P)+N[3]+3572445317&4294967295,O=B+(C<<16&4294967295|C>>>16),C=P+(O^B^A)+N[6]+76029189&4294967295,P=O+(C<<23&4294967295|C>>>9),C=A+(P^O^B)+N[9]+3654602809&4294967295,A=P+(C<<4&4294967295|C>>>28),C=B+(A^P^O)+N[12]+3873151461&4294967295,B=A+(C<<11&4294967295|C>>>21),C=O+(B^A^P)+N[15]+530742520&4294967295,O=B+(C<<16&4294967295|C>>>16),C=P+(O^B^A)+N[2]+3299628645&4294967295,P=O+(C<<23&4294967295|C>>>9),C=A+(O^(P|~B))+N[0]+4096336452&4294967295,A=P+(C<<6&4294967295|C>>>26),C=B+(P^(A|~O))+N[7]+1126891415&4294967295,B=A+(C<<10&4294967295|C>>>22),C=O+(A^(B|~P))+N[14]+2878612391&4294967295,O=B+(C<<15&4294967295|C>>>17),C=P+(B^(O|~A))+N[5]+4237533241&4294967295,P=O+(C<<21&4294967295|C>>>11),C=A+(O^(P|~B))+N[12]+1700485571&4294967295,A=P+(C<<6&4294967295|C>>>26),C=B+(P^(A|~O))+N[3]+2399980690&4294967295,B=A+(C<<10&4294967295|C>>>22),C=O+(A^(B|~P))+N[10]+4293915773&4294967295,O=B+(C<<15&4294967295|C>>>17),C=P+(B^(O|~A))+N[1]+2240044497&4294967295,P=O+(C<<21&4294967295|C>>>11),C=A+(O^(P|~B))+N[8]+1873313359&4294967295,A=P+(C<<6&4294967295|C>>>26),C=B+(P^(A|~O))+N[15]+4264355552&4294967295,B=A+(C<<10&4294967295|C>>>22),C=O+(A^(B|~P))+N[6]+2734768916&4294967295,O=B+(C<<15&4294967295|C>>>17),C=P+(B^(O|~A))+N[13]+1309151649&4294967295,P=O+(C<<21&4294967295|C>>>11),C=A+(O^(P|~B))+N[4]+4149444226&4294967295,A=P+(C<<6&4294967295|C>>>26),C=B+(P^(A|~O))+N[11]+3174756917&4294967295,B=A+(C<<10&4294967295|C>>>22),C=O+(A^(B|~P))+N[2]+718787259&4294967295,O=B+(C<<15&4294967295|C>>>17),C=P+(B^(O|~A))+N[9]+3951481745&4294967295,R.g[0]=R.g[0]+A&4294967295,R.g[1]=R.g[1]+(O+(C<<21&4294967295|C>>>11))&4294967295,R.g[2]=R.g[2]+O&4294967295,R.g[3]=R.g[3]+B&4294967295}n.prototype.u=function(R,A){A===void 0&&(A=R.length);for(var P=A-this.blockSize,N=this.B,O=this.h,B=0;B<A;){if(O==0)for(;B<=P;)s(this,R,B),B+=this.blockSize;if(typeof R=="string"){for(;B<A;)if(N[O++]=R.charCodeAt(B++),O==this.blockSize){s(this,N),O=0;break}}else for(;B<A;)if(N[O++]=R[B++],O==this.blockSize){s(this,N),O=0;break}}this.h=O,this.o+=A},n.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var A=1;A<R.length-8;++A)R[A]=0;var P=8*this.o;for(A=R.length-8;A<R.length;++A)R[A]=P&255,P/=256;for(this.u(R),R=Array(16),A=P=0;4>A;++A)for(var N=0;32>N;N+=8)R[P++]=this.g[A]>>>N&255;return R};function a(R,A){var P=d;return Object.prototype.hasOwnProperty.call(P,R)?P[R]:P[R]=A(R)}function u(R,A){this.h=A;for(var P=[],N=!0,O=R.length-1;0<=O;O--){var B=R[O]|0;N&&B==A||(P[O]=B,N=!1)}this.g=P}var d={};function f(R){return-128<=R&&128>R?a(R,function(A){return new u([A|0],0>A?-1:0)}):new u([R|0],0>R?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return _;if(0>R)return D(g(-R));for(var A=[],P=1,N=0;R>=P;N++)A[N]=R/P|0,P*=4294967296;return new u(A,0)}function y(R,A){if(R.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R.charAt(0)=="-")return D(y(R.substring(1),A));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var P=g(Math.pow(A,8)),N=_,O=0;O<R.length;O+=8){var B=Math.min(8,R.length-O),C=parseInt(R.substring(O,O+B),A);8>B?(B=g(Math.pow(A,B)),N=N.j(B).add(g(C))):(N=N.j(P),N=N.add(g(C)))}return N}var _=f(0),w=f(1),I=f(16777216);t=u.prototype,t.m=function(){if(k(this))return-D(this).m();for(var R=0,A=1,P=0;P<this.g.length;P++){var N=this.i(P);R+=(0<=N?N:4294967296+N)*A,A*=4294967296}return R},t.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(b(this))return"0";if(k(this))return"-"+D(this).toString(R);for(var A=g(Math.pow(R,6)),P=this,N="";;){var O=q(P,A).g;P=F(P,O.j(A));var B=((0<P.g.length?P.g[0]:P.h)>>>0).toString(R);if(P=O,b(P))return B+N;for(;6>B.length;)B="0"+B;N=B+N}},t.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function b(R){if(R.h!=0)return!1;for(var A=0;A<R.g.length;A++)if(R.g[A]!=0)return!1;return!0}function k(R){return R.h==-1}t.l=function(R){return R=F(this,R),k(R)?-1:b(R)?0:1};function D(R){for(var A=R.g.length,P=[],N=0;N<A;N++)P[N]=~R.g[N];return new u(P,~R.h).add(w)}t.abs=function(){return k(this)?D(this):this},t.add=function(R){for(var A=Math.max(this.g.length,R.g.length),P=[],N=0,O=0;O<=A;O++){var B=N+(this.i(O)&65535)+(R.i(O)&65535),C=(B>>>16)+(this.i(O)>>>16)+(R.i(O)>>>16);N=C>>>16,B&=65535,C&=65535,P[O]=C<<16|B}return new u(P,P[P.length-1]&-2147483648?-1:0)};function F(R,A){return R.add(D(A))}t.j=function(R){if(b(this)||b(R))return _;if(k(this))return k(R)?D(this).j(D(R)):D(D(this).j(R));if(k(R))return D(this.j(D(R)));if(0>this.l(I)&&0>R.l(I))return g(this.m()*R.m());for(var A=this.g.length+R.g.length,P=[],N=0;N<2*A;N++)P[N]=0;for(N=0;N<this.g.length;N++)for(var O=0;O<R.g.length;O++){var B=this.i(N)>>>16,C=this.i(N)&65535,be=R.i(O)>>>16,Qe=R.i(O)&65535;P[2*N+2*O]+=C*Qe,U(P,2*N+2*O),P[2*N+2*O+1]+=B*Qe,U(P,2*N+2*O+1),P[2*N+2*O+1]+=C*be,U(P,2*N+2*O+1),P[2*N+2*O+2]+=B*be,U(P,2*N+2*O+2)}for(N=0;N<A;N++)P[N]=P[2*N+1]<<16|P[2*N];for(N=A;N<2*A;N++)P[N]=0;return new u(P,0)};function U(R,A){for(;(R[A]&65535)!=R[A];)R[A+1]+=R[A]>>>16,R[A]&=65535,A++}function W(R,A){this.g=R,this.h=A}function q(R,A){if(b(A))throw Error("division by zero");if(b(R))return new W(_,_);if(k(R))return A=q(D(R),A),new W(D(A.g),D(A.h));if(k(A))return A=q(R,D(A)),new W(D(A.g),A.h);if(30<R.g.length){if(k(R)||k(A))throw Error("slowDivide_ only works with positive integers.");for(var P=w,N=A;0>=N.l(R);)P=G(P),N=G(N);var O=X(P,1),B=X(N,1);for(N=X(N,2),P=X(P,2);!b(N);){var C=B.add(N);0>=C.l(R)&&(O=O.add(P),B=C),N=X(N,1),P=X(P,1)}return A=F(R,O.j(A)),new W(O,A)}for(O=_;0<=R.l(A);){for(P=Math.max(1,Math.floor(R.m()/A.m())),N=Math.ceil(Math.log(P)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),B=g(P),C=B.j(A);k(C)||0<C.l(R);)P-=N,B=g(P),C=B.j(A);b(B)&&(B=w),O=O.add(B),R=F(R,C)}return new W(O,R)}t.A=function(R){return q(this,R).h},t.and=function(R){for(var A=Math.max(this.g.length,R.g.length),P=[],N=0;N<A;N++)P[N]=this.i(N)&R.i(N);return new u(P,this.h&R.h)},t.or=function(R){for(var A=Math.max(this.g.length,R.g.length),P=[],N=0;N<A;N++)P[N]=this.i(N)|R.i(N);return new u(P,this.h|R.h)},t.xor=function(R){for(var A=Math.max(this.g.length,R.g.length),P=[],N=0;N<A;N++)P[N]=this.i(N)^R.i(N);return new u(P,this.h^R.h)};function G(R){for(var A=R.g.length+1,P=[],N=0;N<A;N++)P[N]=R.i(N)<<1|R.i(N-1)>>>31;return new u(P,R.h)}function X(R,A){var P=A>>5;A%=32;for(var N=R.g.length-P,O=[],B=0;B<N;B++)O[B]=0<A?R.i(B+P)>>>A|R.i(B+P+1)<<32-A:R.i(B+P);return new u(O,R.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,dI=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=g,u.fromString=y,Qi=u}).apply(typeof Z_<"u"?Z_:typeof self<"u"?self:typeof window<"u"?window:{});var Uc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hI,Ol,fI,od,tg,pI,gI,mI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,E){return c==Array.prototype||c==Object.prototype||(c[m]=E.value),c};function r(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Uc=="object"&&Uc];for(var m=0;m<c.length;++m){var E=c[m];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=r(this);function s(c,m){if(m)e:{var E=n;c=c.split(".");for(var T=0;T<c.length-1;T++){var $=c[T];if(!($ in E))break e;E=E[$]}c=c[c.length-1],T=E[c],m=m(T),m!=T&&m!=null&&e(E,c,{configurable:!0,writable:!0,value:m})}}function a(c,m){c instanceof String&&(c+="");var E=0,T=!1,$={next:function(){if(!T&&E<c.length){var Q=E++;return{value:m(Q,c[Q]),done:!1}}return T=!0,{done:!0,value:void 0}}};return $[Symbol.iterator]=function(){return $},$}s("Array.prototype.values",function(c){return c||function(){return a(this,function(m,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},d=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function y(c,m,E){return c.call.apply(c.bind,arguments)}function _(c,m,E){if(!c)throw Error();if(2<arguments.length){var T=Array.prototype.slice.call(arguments,2);return function(){var $=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply($,T),c.apply(m,$)}}return function(){return c.apply(m,arguments)}}function w(c,m,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:_,w.apply(null,arguments)}function I(c,m){var E=Array.prototype.slice.call(arguments,1);return function(){var T=E.slice();return T.push.apply(T,arguments),c.apply(this,T)}}function b(c,m){function E(){}E.prototype=m.prototype,c.aa=m.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(T,$,Q){for(var ue=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)ue[tt-2]=arguments[tt];return m.prototype[$].apply(T,ue)}}function k(c){const m=c.length;if(0<m){const E=Array(m);for(let T=0;T<m;T++)E[T]=c[T];return E}return[]}function D(c,m){for(let E=1;E<arguments.length;E++){const T=arguments[E];if(f(T)){const $=c.length||0,Q=T.length||0;c.length=$+Q;for(let ue=0;ue<Q;ue++)c[$+ue]=T[ue]}else c.push(T)}}class F{constructor(m,E){this.i=m,this.j=E,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function U(c){return/^[\s\xa0]*$/.test(c)}function W(){var c=d.navigator;return c&&(c=c.userAgent)?c:""}function q(c){return q[" "](c),c}q[" "]=function(){};var G=W().indexOf("Gecko")!=-1&&!(W().toLowerCase().indexOf("webkit")!=-1&&W().indexOf("Edge")==-1)&&!(W().indexOf("Trident")!=-1||W().indexOf("MSIE")!=-1)&&W().indexOf("Edge")==-1;function X(c,m,E){for(const T in c)m.call(E,c[T],T,c)}function R(c,m){for(const E in c)m.call(void 0,c[E],E,c)}function A(c){const m={};for(const E in c)m[E]=c[E];return m}const P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let E,T;for(let $=1;$<arguments.length;$++){T=arguments[$];for(E in T)c[E]=T[E];for(let Q=0;Q<P.length;Q++)E=P[Q],Object.prototype.hasOwnProperty.call(T,E)&&(c[E]=T[E])}}function O(c){var m=1;c=c.split(":");const E=[];for(;0<m&&c.length;)E.push(c.shift()),m--;return c.length&&E.push(c.join(":")),E}function B(c){d.setTimeout(()=>{throw c},0)}function C(){var c=ce;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class be{constructor(){this.h=this.g=null}add(m,E){const T=Qe.get();T.set(m,E),this.h?this.h.next=T:this.g=T,this.h=T}}var Qe=new F(()=>new Ye,c=>c.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(m,E){this.h=m,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,ie=!1,ce=new be,ae=()=>{const c=d.Promise.resolve(void 0);Me=()=>{c.then(V)}};var V=()=>{for(var c;c=C();){try{c.h.call(c.g)}catch(E){B(E)}var m=Qe;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}ie=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Pe=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};d.addEventListener("test",E,m),d.removeEventListener("test",E,m)}catch{}return c}();function we(c,m){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,T=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(G){e:{try{q(m.nodeName);var $=!0;break e}catch{}$=!1}$||(m=null)}}else E=="mouseover"?m=c.fromElement:E=="mouseout"&&(m=c.toElement);this.relatedTarget=m,T?(this.clientX=T.clientX!==void 0?T.clientX:T.pageX,this.clientY=T.clientY!==void 0?T.clientY:T.pageY,this.screenX=T.screenX||0,this.screenY=T.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:xe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&we.aa.h.call(this)}}b(we,pe);var xe={2:"touch",3:"pen",4:"mouse"};we.prototype.h=function(){we.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Oe="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Fe(c,m,E,T,$){this.listener=c,this.proxy=null,this.src=m,this.type=E,this.capture=!!T,this.ha=$,this.key=++Ne,this.da=this.fa=!1}function et(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function kt(c){this.src=c,this.g={},this.h=0}kt.prototype.add=function(c,m,E,T,$){var Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);var ue=Dr(c,m,T,$);return-1<ue?(m=c[ue],E||(m.fa=!1)):(m=new Fe(m,this.src,Q,!!T,$),m.fa=E,c.push(m)),m};function Dt(c,m){var E=m.type;if(E in c.g){var T=c.g[E],$=Array.prototype.indexOf.call(T,m,void 0),Q;(Q=0<=$)&&Array.prototype.splice.call(T,$,1),Q&&(et(m),c.g[E].length==0&&(delete c.g[E],c.h--))}}function Dr(c,m,E,T){for(var $=0;$<c.length;++$){var Q=c[$];if(!Q.da&&Q.listener==m&&Q.capture==!!E&&Q.ha==T)return $}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),Fn={};function Bn(c,m,E,T,$){if(Array.isArray(m)){for(var Q=0;Q<m.length;Q++)Bn(c,m[Q],E,T,$);return null}return E=La(E),c&&c[Oe]?c.K(m,E,g(T)?!!T.capture:!1,$):Un(c,m,E,!1,T,$)}function Un(c,m,E,T,$,Q){if(!m)throw Error("Invalid event type");var ue=g($)?!!$.capture:!!$,tt=ss(c);if(tt||(c[Nr]=tt=new kt(c)),E=tt.add(m,E,T,ue,Q),E.proxy)return E;if(T=os(),E.proxy=T,T.src=c,T.listener=E,c.addEventListener)Pe||($=ue),$===void 0&&($=!1),c.addEventListener(m.toString(),T,$);else if(c.attachEvent)c.attachEvent(jn(m.toString()),T);else if(c.addListener&&c.removeListener)c.addListener(T);else throw Error("addEventListener and attachEvent are unavailable.");return E}function os(){function c(E){return m.call(c.src,c.listener,E)}const m=Oa;return c}function Or(c,m,E,T,$){if(Array.isArray(m))for(var Q=0;Q<m.length;Q++)Or(c,m[Q],E,T,$);else T=g(T)?!!T.capture:!!T,E=La(E),c&&c[Oe]?(c=c.i,m=String(m).toString(),m in c.g&&(Q=c.g[m],E=Dr(Q,E,T,$),-1<E&&(et(Q[E]),Array.prototype.splice.call(Q,E,1),Q.length==0&&(delete c.g[m],c.h--)))):c&&(c=ss(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Dr(m,E,T,$)),(E=-1<c?m[c]:null)&&wr(E))}function wr(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Oe])Dt(m.i,c);else{var E=c.type,T=c.proxy;m.removeEventListener?m.removeEventListener(E,T,c.capture):m.detachEvent?m.detachEvent(jn(E),T):m.addListener&&m.removeListener&&m.removeListener(T),(E=ss(m))?(Dt(E,c),E.h==0&&(E.src=null,m[Nr]=null)):et(c)}}}function jn(c){return c in Fn?Fn[c]:Fn[c]="on"+c}function Oa(c,m){if(c.da)c=!0;else{m=new we(m,this);var E=c.listener,T=c.ha||c.src;c.fa&&wr(c),c=E.call(T,m)}return c}function ss(c){return c=c[Nr],c instanceof kt?c:null}var as="__closure_events_fn_"+(1e9*Math.random()>>>0);function La(c){return typeof c=="function"?c:(c[as]||(c[as]=function(m){return c.handleEvent(m)}),c[as])}function St(){Y.call(this),this.i=new kt(this),this.M=this,this.F=null}b(St,Y),St.prototype[Oe]=!0,St.prototype.removeEventListener=function(c,m,E,T){Or(this,c,m,E,T)};function Tt(c,m){var E,T=c.F;if(T)for(E=[];T;T=T.F)E.push(T);if(c=c.M,T=m.type||m,typeof m=="string")m=new pe(m,c);else if(m instanceof pe)m.target=m.target||c;else{var $=m;m=new pe(T,c),N(m,$)}if($=!0,E)for(var Q=E.length-1;0<=Q;Q--){var ue=m.g=E[Q];$=$n(ue,T,!0,m)&&$}if(ue=m.g=c,$=$n(ue,T,!0,m)&&$,$=$n(ue,T,!1,m)&&$,E)for(Q=0;Q<E.length;Q++)ue=m.g=E[Q],$=$n(ue,T,!1,m)&&$}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var E=c.g[m],T=0;T<E.length;T++)et(E[T]);delete c.g[m],c.h--}}this.F=null},St.prototype.K=function(c,m,E,T){return this.i.add(String(c),m,!1,E,T)},St.prototype.L=function(c,m,E,T){return this.i.add(String(c),m,!0,E,T)};function $n(c,m,E,T){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var $=!0,Q=0;Q<m.length;++Q){var ue=m[Q];if(ue&&!ue.da&&ue.capture==E){var tt=ue.listener,bt=ue.ha||ue.src;ue.fa&&Dt(c.i,ue),$=tt.call(bt,T)!==!1&&$}}return $&&!T.defaultPrevented}function Ma(c,m,E){if(typeof c=="function")E&&(c=w(c,E));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:d.setTimeout(c,m||0)}function pi(c){c.g=Ma(()=>{c.g=null,c.i&&(c.i=!1,pi(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class ho extends Y{constructor(m,E){super(),this.m=m,this.l=E,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:pi(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fo(c){Y.call(this),this.h=c,this.g={}}b(fo,Y);var Va=[];function Fa(c){X(c.g,function(m,E){this.g.hasOwnProperty(E)&&wr(m)},c),c.g={}}fo.prototype.N=function(){fo.aa.N.call(this),Fa(this)},fo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ba=d.JSON.stringify,Ua=d.JSON.parse,ja=class{stringify(c){return d.JSON.stringify(c,void 0)}parse(c){return d.JSON.parse(c,void 0)}};function po(){}po.prototype.h=null;function ls(c){return c.h||(c.h=c.i())}function us(){}var Lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _n(){pe.call(this,"d")}b(_n,pe);function cs(){pe.call(this,"c")}b(cs,pe);var wn={},$a=null;function go(){return $a=$a||new St}wn.La="serverreachability";function za(c){pe.call(this,wn.La,c)}b(za,pe);function zn(c){const m=go();Tt(m,new za(m))}wn.STAT_EVENT="statevent";function Wa(c,m){pe.call(this,wn.STAT_EVENT,c),this.stat=m}b(Wa,pe);function mt(c){const m=go();Tt(m,new Wa(m,c))}wn.Ma="timingevent";function ds(c,m){pe.call(this,wn.Ma,c),this.size=m}b(ds,pe);function Xr(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){c()},m)}function mo(){this.g=!0}mo.prototype.xa=function(){this.g=!1};function vo(c,m,E,T,$,Q){c.info(function(){if(c.g)if(Q)for(var ue="",tt=Q.split("&"),bt=0;bt<tt.length;bt++){var We=tt[bt].split("=");if(1<We.length){var Nt=We[0];We=We[1];var _t=Nt.split("_");ue=2<=_t.length&&_t[1]=="type"?ue+(Nt+"="+We+"&"):ue+(Nt+"=redacted&")}}else ue=null;else ue=Q;return"XMLHTTP REQ ("+T+") [attempt "+$+"]: "+m+`
`+E+`
`+ue})}function hs(c,m,E,T,$,Q,ue){c.info(function(){return"XMLHTTP RESP ("+T+") [ attempt "+$+"]: "+m+`
`+E+`
`+Q+" "+ue})}function Jr(c,m,E,T){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+bh(c,E)+(T?" "+T:"")})}function Ga(c,m){c.info(function(){return"TIMEOUT: "+m})}mo.prototype.info=function(){};function bh(c,m){if(!c.g)return m;if(!m)return null;try{var E=JSON.parse(m);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var T=E[c];if(!(2>T.length)){var $=T[1];if(Array.isArray($)&&!(1>$.length)){var Q=$[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ue=1;ue<$.length;ue++)$[ue]=""}}}}return Ba(E)}catch{return m}}var fs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zr;function yo(){}b(yo,po),yo.prototype.g=function(){return new XMLHttpRequest},yo.prototype.i=function(){return{}},Zr=new yo;function en(c,m,E,T){this.j=c,this.i=m,this.l=E,this.R=T||1,this.U=new fo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Su}function Su(){this.i=null,this.g="",this.h=!1}var Ha={},ps={};function gs(c,m,E){c.L=1,c.v=_i(Ir(m)),c.m=E,c.P=!0,qa(c,null)}function qa(c,m){c.F=Date.now(),it(c),c.A=Ir(c.v);var E=c.A,T=c.R;Array.isArray(T)||(T=[String(T)]),Ei(E.i,"t",T),c.C=0,E=c.j.J,c.h=new Su,c.g=ju(c.j,E?m:null,!c.m),0<c.O&&(c.M=new ho(w(c.Y,c,c.g),c.O)),m=c.U,E=c.g,T=c.ca;var $="readystatechange";Array.isArray($)||($&&(Va[0]=$.toString()),$=Va);for(var Q=0;Q<$.length;Q++){var ue=Bn(E,$[Q],T||m.handleEvent,!1,m.h||m);if(!ue)break;m.g[ue.key]=ue}m=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),zn(),vo(c.i,c.u,c.A,c.l,c.R,c.m)}en.prototype.ca=function(c){c=c.target;const m=this.M;m&&cr(c)==3?m.j():this.Y(c)},en.prototype.Y=function(c){try{if(c==this.g)e:{const _t=cr(this.g);var m=this.g.Ba();const Fr=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Za(this.g)))){this.J||_t!=4||m==7||(m==8||0>=Fr?zn(3):zn(2)),_o(this);var E=this.g.Z();this.X=E;t:if(Tu(this)){var T=Za(this.g);c="";var $=T.length,Q=cr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),gi(this);var ue="";break t}this.h.i=new d.TextDecoder}for(m=0;m<$;m++)this.h.h=!0,c+=this.h.i.decode(T[m],{stream:!(Q&&m==$-1)});T.length=0,this.h.g+=c,this.C=0,ue=this.h.g}else ue=this.g.oa();if(this.o=E==200,hs(this.i,this.u,this.A,this.l,this.R,_t,E),this.o){if(this.T&&!this.K){t:{if(this.g){var tt,bt=this.g;if((tt=bt.g?bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(tt)){var We=tt;break t}}We=null}if(E=We)Jr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ka(this,E);else{this.o=!1,this.s=3,mt(12),Mr(this),gi(this);break e}}if(this.P){E=!0;let Tr;for(;!this.J&&this.C<ue.length;)if(Tr=Ch(this,ue),Tr==ps){_t==4&&(this.s=4,mt(14),E=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Tr==Ha){this.s=4,mt(15),Jr(this.i,this.l,ue,"[Invalid Chunk]"),E=!1;break}else Jr(this.i,this.l,Tr,null),Ka(this,Tr);if(Tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||ue.length!=0||this.h.h||(this.s=1,mt(16),E=!1),this.o=this.o&&E,!E)Jr(this.i,this.l,ue,"[Invalid Chunked Response]"),Mr(this),gi(this);else if(0<ue.length&&!this.W){this.W=!0;var Nt=this.j;Nt.g==this&&Nt.ba&&!Nt.M&&(Nt.j.info("Great, no buffering proxy detected. Bytes received: "+ue.length),tl(Nt),Nt.M=!0,mt(11))}}else Jr(this.i,this.l,ue,null),Ka(this,ue);_t==4&&Mr(this),this.o&&!this.J&&(_t==4?Cs(this.j,this):(this.o=!1,it(this)))}else Es(this.g),E==400&&0<ue.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Mr(this),gi(this)}}}catch{}finally{}};function Tu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ch(c,m){var E=c.C,T=m.indexOf(`
`,E);return T==-1?ps:(E=Number(m.substring(E,T)),isNaN(E)?Ha:(T+=1,T+E>m.length?ps:(m=m.slice(T,T+E),c.C=T+E,m)))}en.prototype.cancel=function(){this.J=!0,Mr(this)};function it(c){c.S=Date.now()+c.I,bu(c,c.I)}function bu(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Xr(w(c.ba,c),m)}function _o(c){c.B&&(d.clearTimeout(c.B),c.B=null)}en.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ga(this.i,this.A),this.L!=2&&(zn(),mt(17)),Mr(this),this.s=2,gi(this)):bu(this,this.S-c)};function gi(c){c.j.G==0||c.J||Cs(c.j,c)}function Mr(c){_o(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,Fa(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function Ka(c,m){try{var E=c.j;if(E.G!=0&&(E.g==c||ir(E.h,c))){if(!c.K&&ir(E.h,c)&&E.G==3){try{var T=E.Da.g.parse(m)}catch{T=null}if(Array.isArray(T)&&T.length==3){var $=T;if($[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)bs(E),sn(E);else break e;Ts(E),mt(18)}}else E.za=$[1],0<E.za-E.T&&37500>$[2]&&E.F&&E.v==0&&!E.C&&(E.C=Xr(w(E.Za,E),6e3));if(1>=Au(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Kn(E,11)}else if((c.K||E.g==c)&&bs(E),!U(m))for($=E.Da.g.parse(m),m=0;m<$.length;m++){let We=$[m];if(E.T=We[0],We=We[1],E.G==2)if(We[0]=="c"){E.K=We[1],E.ia=We[2];const Nt=We[3];Nt!=null&&(E.la=Nt,E.j.info("VER="+E.la));const _t=We[4];_t!=null&&(E.Aa=_t,E.j.info("SVER="+E.Aa));const Fr=We[5];Fr!=null&&typeof Fr=="number"&&0<Fr&&(T=1.5*Fr,E.L=T,E.j.info("backChannelRequestTimeoutMs_="+T)),T=E;const Tr=c.g;if(Tr){const Co=Tr.g?Tr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Co){var Q=T.h;Q.g||Co.indexOf("spdy")==-1&&Co.indexOf("quic")==-1&&Co.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(Qa(Q,Q.h),Q.h=null))}if(T.D){const Ps=Tr.g?Tr.g.getResponseHeader("X-HTTP-Session-Id"):null;Ps&&(T.ya=Ps,nt(T.I,T.D,Ps))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),T=E;var ue=c;if(T.qa=Uu(T,T.J?T.ia:null,T.W),ue.K){Pu(T.h,ue);var tt=ue,bt=T.L;bt&&(tt.I=bt),tt.B&&(_o(tt),it(tt)),T.g=ue}else bo(T);0<E.i.length&&Tn(E)}else We[0]!="stop"&&We[0]!="close"||Kn(E,7);else E.G==3&&(We[0]=="stop"||We[0]=="close"?We[0]=="stop"?Kn(E,7):zt(E):We[0]!="noop"&&E.l&&E.l.ta(We),E.v=0)}}zn(4)}catch{}}var Cu=class{constructor(c,m){this.g=c,this.map=m}};function wo(c){this.l=c||10,d.PerformanceNavigationTiming?(c=d.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Er(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Au(c){return c.h?1:c.g?c.g.size:0}function ir(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Qa(c,m){c.g?c.g.add(m):c.h=m}function Pu(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}wo.prototype.cancel=function(){if(this.i=Ru(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ru(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const E of c.g.values())m=m.concat(E.D);return m}return k(c.i)}function ms(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],E=c.length,T=0;T<E;T++)m.push(c[T]);return m}m=[],E=0;for(T in c)m[E++]=c[T];return m}function vs(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var E=0;E<c;E++)m.push(E);return m}m=[],E=0;for(const T in c)m[E++]=T;return m}}}function mi(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var E=vs(c),T=ms(c),$=T.length,Q=0;Q<$;Q++)m.call(void 0,T[Q],E&&E[Q],c)}var Eo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ah(c,m){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var T=c[E].indexOf("="),$=null;if(0<=T){var Q=c[E].substring(0,T);$=c[E].substring(T+1)}else Q=c[E];m(Q,$?decodeURIComponent($.replace(/\+/g," ")):"")}}}function Wn(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Wn){this.h=c.h,Io(this,c.j),this.o=c.o,this.g=c.g,vi(this,c.s),this.l=c.l;var m=c.i,E=new En;E.i=m.i,m.g&&(E.g=new Map(m.g),E.h=m.h),yi(this,E),this.m=c.m}else c&&(m=String(c).match(Eo))?(this.h=!1,Io(this,m[1]||"",!0),this.o=ze(m[2]||""),this.g=ze(m[3]||"",!0),vi(this,m[4]),this.l=ze(m[5]||"",!0),yi(this,m[6]||"",!0),this.m=ze(m[7]||"")):(this.h=!1,this.i=new En(null,this.h))}Wn.prototype.toString=function(){var c=[],m=this.j;m&&c.push(wi(m,ys,!0),":");var E=this.g;return(E||m=="file")&&(c.push("//"),(m=this.o)&&c.push(wi(m,ys,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(wi(E,E.charAt(0)=="/"?Du:ku,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",wi(E,Ya)),c.join("")};function Ir(c){return new Wn(c)}function Io(c,m,E){c.j=E?ze(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function vi(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function yi(c,m,E){m instanceof En?(c.i=m,In(c.i,c.h)):(E||(m=wi(m,Nu)),c.i=new En(m,c.h))}function nt(c,m,E){c.i.set(m,E)}function _i(c){return nt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ze(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function wi(c,m,E){return typeof c=="string"?(c=encodeURI(c).replace(m,xu),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function xu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ys=/[#\/\?@]/g,ku=/[#\?:]/g,Du=/[#\?]/g,Nu=/[#\?@]/g,Ya=/#/g;function En(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function $t(c){c.g||(c.g=new Map,c.h=0,c.i&&Ah(c.i,function(m,E){c.add(decodeURIComponent(m.replace(/\+/g," ")),E)}))}t=En.prototype,t.add=function(c,m){$t(this),this.i=null,c=Vr(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(m),this.h+=1,this};function tn(c,m){$t(c),m=Vr(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function rn(c,m){return $t(c),m=Vr(c,m),c.g.has(m)}t.forEach=function(c,m){$t(this),this.g.forEach(function(E,T){E.forEach(function($){c.call(m,$,T,this)},this)},this)},t.na=function(){$t(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),E=[];for(let T=0;T<m.length;T++){const $=c[T];for(let Q=0;Q<$.length;Q++)E.push(m[T])}return E},t.V=function(c){$t(this);let m=[];if(typeof c=="string")rn(this,c)&&(m=m.concat(this.g.get(Vr(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)m=m.concat(c[E])}return m},t.set=function(c,m){return $t(this),this.i=null,c=Vr(this,c),rn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},t.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Ei(c,m,E){tn(c,m),0<E.length&&(c.i=null,c.g.set(Vr(c,m),k(E)),c.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var E=0;E<m.length;E++){var T=m[E];const Q=encodeURIComponent(String(T)),ue=this.V(T);for(T=0;T<ue.length;T++){var $=Q;ue[T]!==""&&($+="="+encodeURIComponent(String(ue[T]))),c.push($)}}return this.i=c.join("&")};function Vr(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function In(c,m){m&&!c.j&&($t(c),c.i=null,c.g.forEach(function(E,T){var $=T.toLowerCase();T!=$&&(tn(this,T),Ei(this,$,E))},c)),c.j=m}function Ph(c,m){const E=new mo;if(d.Image){const T=new Image;T.onload=I(ur,E,"TestLoadImage: loaded",!0,m,T),T.onerror=I(ur,E,"TestLoadImage: error",!1,m,T),T.onabort=I(ur,E,"TestLoadImage: abort",!1,m,T),T.ontimeout=I(ur,E,"TestLoadImage: timeout",!1,m,T),d.setTimeout(function(){T.ontimeout&&T.ontimeout()},1e4),T.src=c}else m(!1)}function Ou(c,m){const E=new mo,T=new AbortController,$=setTimeout(()=>{T.abort(),ur(E,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:T.signal}).then(Q=>{clearTimeout($),Q.ok?ur(E,"TestPingServer: ok",!0,m):ur(E,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout($),ur(E,"TestPingServer: error",!1,m)})}function ur(c,m,E,T,$){try{$&&($.onload=null,$.onerror=null,$.onabort=null,$.ontimeout=null),T(E)}catch{}}function Rh(){this.g=new ja}function Lu(c,m,E){const T=E||"";try{mi(c,function($,Q){let ue=$;g($)&&(ue=Ba($)),m.push(T+Q+"="+encodeURIComponent(ue))})}catch($){throw m.push(T+"type="+encodeURIComponent("_badmap")),$}}function Gn(c){this.l=c.Ub||null,this.j=c.eb||!1}b(Gn,po),Gn.prototype.g=function(){return new So(this.l,this.j)},Gn.prototype.i=function(c){return function(){return c}}({});function So(c,m){St.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(So,St),t=So.prototype,t.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,on(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||d).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nn(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,on(this)),this.g&&(this.readyState=3,on(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?nn(this):on(this),this.readyState==3&&Mu(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,nn(this))},t.Qa=function(c){this.g&&(this.response=c,nn(this))},t.ga=function(){this.g&&nn(this)};function nn(c){c.readyState=4,c.l=null,c.j=null,c.v=null,on(c)}t.setRequestHeader=function(c,m){this.u.append(c,m)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var E=m.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=m.next();return c.join(`\r
`)};function on(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(So.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Hn(c){let m="";return X(c,function(E,T){m+=T,m+=":",m+=E,m+=`\r
`}),m}function Ii(c,m,E){e:{for(T in E){var T=!1;break e}T=!0}T||(E=Hn(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):nt(c,m,E))}function ut(c){St.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ut,St);var xh=/^https?$/i,Xa=["POST","PUT"];t=ut.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,m,E,T){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zr.g(),this.v=this.o?ls(this.o):ls(Zr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(Q){To(this,Q);return}if(c=E||"",E=new Map(this.headers),T)if(Object.getPrototypeOf(T)===Object.prototype)for(var $ in T)E.set($,T[$]);else if(typeof T.keys=="function"&&typeof T.get=="function")for(const Q of T.keys())E.set(Q,T.get(Q));else throw Error("Unknown input type for opt_headers: "+String(T));T=Array.from(E.keys()).find(Q=>Q.toLowerCase()=="content-type"),$=d.FormData&&c instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Xa,m,void 0))||T||$||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ue]of E)this.g.setRequestHeader(Q,ue);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ws(this),this.u=!0,this.g.send(c),this.u=!1}catch(Q){To(this,Q)}};function To(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,_s(c),Sr(c)}function _s(c){c.A||(c.A=!0,Tt(c,"complete"),Tt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Tt(this,"complete"),Tt(this,"abort"),Sr(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Sr(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ja(this):this.bb())},t.bb=function(){Ja(this)};function Ja(c){if(c.h&&typeof u<"u"&&(!c.v[1]||cr(c)!=4||c.Z()!=2)){if(c.u&&cr(c)==4)Ma(c.Ea,0,c);else if(Tt(c,"readystatechange"),cr(c)==4){c.h=!1;try{const ue=c.Z();e:switch(ue){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var E;if(!(E=m)){var T;if(T=ue===0){var $=String(c.D).match(Eo)[1]||null;!$&&d.self&&d.self.location&&($=d.self.location.protocol.slice(0,-1)),T=!xh.test($?$.toLowerCase():"")}E=T}if(E)Tt(c,"complete"),Tt(c,"success");else{c.m=6;try{var Q=2<cr(c)?c.g.statusText:""}catch{Q=""}c.l=Q+" ["+c.Z()+"]",_s(c)}}finally{Sr(c)}}}}function Sr(c,m){if(c.g){ws(c);const E=c.g,T=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Tt(c,"ready");try{E.onreadystatechange=T}catch{}}}function ws(c){c.I&&(d.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function cr(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<cr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Ua(m)}};function Za(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Es(c){const m={};c=(c.g&&2<=cr(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let T=0;T<c.length;T++){if(U(c[T]))continue;var E=O(c[T]);const $=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Q=m[$]||[];m[$]=Q,Q.push(E)}R(m,function(T){return T.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Sn(c,m,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||m}function el(c){this.Aa=0,this.i=[],this.j=new mo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Sn("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Sn("baseRetryDelayMs",5e3,c),this.cb=Sn("retryDelaySeedMs",1e4,c),this.Wa=Sn("forwardChannelMaxRetries",2,c),this.wa=Sn("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new wo(c&&c.concurrentRequestLimit),this.Da=new Rh,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=el.prototype,t.la=8,t.G=1,t.connect=function(c,m,E,T){mt(0),this.W=c,this.H=m||{},E&&T!==void 0&&(this.H.OSID=E,this.H.OAID=T),this.F=this.X,this.I=Uu(this,null,this.W),Tn(this)};function zt(c){if(Is(c),c.G==3){var m=c.U++,E=Ir(c.I);if(nt(E,"SID",c.K),nt(E,"RID",m),nt(E,"TYPE","terminate"),qn(c,E),m=new en(c,c.j,m),m.L=2,m.v=_i(Ir(E)),E=!1,d.navigator&&d.navigator.sendBeacon)try{E=d.navigator.sendBeacon(m.v.toString(),"")}catch{}!E&&d.Image&&(new Image().src=m.v,E=!0),E||(m.g=ju(m.j,null),m.g.ea(m.v)),m.F=Date.now(),it(m)}Bu(c)}function sn(c){c.g&&(tl(c),c.g.cancel(),c.g=null)}function Is(c){sn(c),c.u&&(d.clearTimeout(c.u),c.u=null),bs(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&d.clearTimeout(c.s),c.s=null)}function Tn(c){if(!Er(c.h)&&!c.s){c.s=!0;var m=c.Ga;Me||ae(),ie||(Me(),ie=!0),ce.add(m,c),c.B=0}}function kh(c,m){return Au(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Xr(w(c.Ga,c,m),Fu(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const $=new en(this,this.j,c);let Q=this.o;if(this.S&&(Q?(Q=A(Q),N(Q,this.S)):Q=this.S),this.m!==null||this.O||($.H=Q,Q=null),this.P)e:{for(var m=0,E=0;E<this.i.length;E++){t:{var T=this.i[E];if("__data__"in T.map&&(T=T.map.__data__,typeof T=="string")){T=T.length;break t}T=void 0}if(T===void 0)break;if(m+=T,4096<m){m=E;break e}if(m===4096||E===this.i.length-1){m=E+1;break e}}m=1e3}else m=1e3;m=Si(this,$,m),E=Ir(this.I),nt(E,"RID",c),nt(E,"CVER",22),this.D&&nt(E,"X-HTTP-Session-Id",this.D),qn(this,E),Q&&(this.O?m="headers="+encodeURIComponent(String(Hn(Q)))+"&"+m:this.m&&Ii(E,this.m,Q)),Qa(this.h,$),this.Ua&&nt(E,"TYPE","init"),this.P?(nt(E,"$req",m),nt(E,"SID","null"),$.T=!0,gs($,E,null)):gs($,E,m),this.G=2}}else this.G==3&&(c?Ss(this,c):this.i.length==0||Er(this.h)||Ss(this))};function Ss(c,m){var E;m?E=m.l:E=c.U++;const T=Ir(c.I);nt(T,"SID",c.K),nt(T,"RID",E),nt(T,"AID",c.T),qn(c,T),c.m&&c.o&&Ii(T,c.m,c.o),E=new en(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Si(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Qa(c.h,E),gs(E,T,m)}function qn(c,m){c.H&&X(c.H,function(E,T){nt(m,T,E)}),c.l&&mi({},function(E,T){nt(m,T,E)})}function Si(c,m,E){E=Math.min(c.i.length,E);var T=c.l?w(c.l.Na,c.l,c):null;e:{var $=c.i;let Q=-1;for(;;){const ue=["count="+E];Q==-1?0<E?(Q=$[0].g,ue.push("ofs="+Q)):Q=0:ue.push("ofs="+Q);let tt=!0;for(let bt=0;bt<E;bt++){let We=$[bt].g;const Nt=$[bt].map;if(We-=Q,0>We)Q=Math.max(0,$[bt].g-100),tt=!1;else try{Lu(Nt,ue,"req"+We+"_")}catch{T&&T(Nt)}}if(tt){T=ue.join("&");break e}}}return c=c.i.splice(0,E),m.D=c,T}function bo(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;Me||ae(),ie||(Me(),ie=!0),ce.add(m,c),c.v=0}}function Ts(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Xr(w(c.Fa,c),Fu(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Xr(w(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),sn(this),Vu(this))};function tl(c){c.A!=null&&(d.clearTimeout(c.A),c.A=null)}function Vu(c){c.g=new en(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=Ir(c.qa);nt(m,"RID","rpc"),nt(m,"SID",c.K),nt(m,"AID",c.T),nt(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&nt(m,"TO",c.ja),nt(m,"TYPE","xmlhttp"),qn(c,m),c.m&&c.o&&Ii(m,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=_i(Ir(m)),E.m=null,E.P=!0,qa(E,c)}t.Za=function(){this.C!=null&&(this.C=null,sn(this),Ts(this),mt(19))};function bs(c){c.C!=null&&(d.clearTimeout(c.C),c.C=null)}function Cs(c,m){var E=null;if(c.g==m){bs(c),tl(c),c.g=null;var T=2}else if(ir(c.h,m))E=m.D,Pu(c.h,m),T=1;else return;if(c.G!=0){if(m.o)if(T==1){E=m.m?m.m.length:0,m=Date.now()-m.F;var $=c.B;T=go(),Tt(T,new ds(T,E)),Tn(c)}else bo(c);else if($=m.s,$==3||$==0&&0<m.X||!(T==1&&kh(c,m)||T==2&&Ts(c)))switch(E&&0<E.length&&(m=c.h,m.i=m.i.concat(E)),$){case 1:Kn(c,5);break;case 4:Kn(c,10);break;case 3:Kn(c,6);break;default:Kn(c,2)}}}function Fu(c,m){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*m}function Kn(c,m){if(c.j.info("Error code "+m),m==2){var E=w(c.fb,c),T=c.Xa;const $=!T;T=new Wn(T||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Io(T,"https"),_i(T),$?Ph(T.toString(),E):Ou(T.toString(),E)}else mt(2);c.G=0,c.l&&c.l.sa(m),Bu(c),Is(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Bu(c){if(c.G=0,c.ka=[],c.l){const m=Ru(c.h);(m.length!=0||c.i.length!=0)&&(D(c.ka,m),D(c.ka,c.i),c.h.i.length=0,k(c.i),c.i.length=0),c.l.ra()}}function Uu(c,m,E){var T=E instanceof Wn?Ir(E):new Wn(E);if(T.g!="")m&&(T.g=m+"."+T.g),vi(T,T.s);else{var $=d.location;T=$.protocol,m=m?m+"."+$.hostname:$.hostname,$=+$.port;var Q=new Wn(null);T&&Io(Q,T),m&&(Q.g=m),$&&vi(Q,$),E&&(Q.l=E),T=Q}return E=c.D,m=c.ya,E&&m&&nt(T,E,m),nt(T,"VER",c.la),qn(c,T),T}function ju(c,m,E){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new ut(new Gn({eb:E})):new ut(c.pa),m.Ha(c.J),m}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rl(){}t=rl.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function As(){}As.prototype.g=function(c,m){return new or(c,m)};function or(c,m){St.call(this),this.g=new el(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!U(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!U(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new bn(this)}b(or,St),or.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},or.prototype.close=function(){zt(this.g)},or.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=Ba(c),c=E);m.i.push(new Cu(m.Ya++,c)),m.G==3&&Tn(m)},or.prototype.N=function(){this.g.l=null,delete this.j,zt(this.g),delete this.g,or.aa.N.call(this)};function $u(c){_n.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const E in m){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}b($u,_n);function zu(){cs.call(this),this.status=1}b(zu,cs);function bn(c){this.g=c}b(bn,rl),bn.prototype.ua=function(){Tt(this.g,"a")},bn.prototype.ta=function(c){Tt(this.g,new $u(c))},bn.prototype.sa=function(c){Tt(this.g,new zu)},bn.prototype.ra=function(){Tt(this.g,"b")},As.prototype.createWebChannel=As.prototype.g,or.prototype.send=or.prototype.o,or.prototype.open=or.prototype.m,or.prototype.close=or.prototype.close,mI=function(){return new As},gI=function(){return go()},pI=wn,tg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},fs.NO_ERROR=0,fs.TIMEOUT=8,fs.HTTP_ERROR=6,od=fs,Iu.COMPLETE="complete",fI=Iu,us.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",St.prototype.listen=St.prototype.K,Ol=us,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,hI=ut}).apply(typeof Uc<"u"?Uc:typeof self<"u"?self:typeof window<"u"?window:{});const ew="@firebase/firestore",tw="4.7.11";/**
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
 */const Xo=new Dg("@firebase/firestore");function Js(){return Xo.logLevel}function he(t,...e){if(Xo.logLevel<=Ue.DEBUG){const r=e.map(zg);Xo.debug(`Firestore (${Aa}): ${t}`,...r)}}function di(t,...e){if(Xo.logLevel<=Ue.ERROR){const r=e.map(zg);Xo.error(`Firestore (${Aa}): ${t}`,...r)}}function fa(t,...e){if(Xo.logLevel<=Ue.WARN){const r=e.map(zg);Xo.warn(`Firestore (${Aa}): ${t}`,...r)}}function zg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Ae(t,e,r){let n="Unexpected state";typeof e=="string"?n=e:r=e,vI(t,n,r)}function vI(t,e,r){let n=`FIRESTORE (${Aa}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(r!==void 0)try{n+=" CONTEXT: "+JSON.stringify(r)}catch{n+=" CONTEXT: "+r}throw di(n),new Error(n)}function Ze(t,e,r,n){let s="Unexpected state";typeof r=="string"?s=r:n=r,t||vI(e,s,n)}function De(t,e){return t}/**
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
 */const re={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends fi{constructor(e,r){super(e,r),this.code=e,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yI{constructor(e,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,r){e.enqueueRetryable(()=>r(tr.UNAUTHENTICATED))}shutdown(){}}class Hx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,r){this.changeListener=r,e.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}}class qx{constructor(e){this.t=e,this.currentUser=tr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,r){Ze(this.o===void 0,42304);let n=this.i;const s=f=>this.i!==n?(n=this.i,r(f)):Promise.resolve();let a=new Yi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Yi,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},d=f=>{he("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>d(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?d(f):(he("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Yi)}},0),u()}getToken(){const e=this.i,r=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(r).then(n=>this.i!==e?(he("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ze(typeof n.accessToken=="string",31837,{l:n}),new yI(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new tr(e)}}class Kx{constructor(e,r,n){this.P=e,this.T=r,this.I=n,this.type="FirstParty",this.user=tr.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Qx{constructor(e,r,n){this.P=e,this.T=r,this.I=n}getToken(){return Promise.resolve(new Kx(this.P,this.T,this.I))}start(e,r){e.enqueueRetryable(()=>r(tr.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rw{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yx{constructor(e,r){this.V=r,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Hr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,r){Ze(this.o===void 0,3512);const n=a=>{a.error!=null&&he("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,he("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?r(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>n(a))};const s=a=>{he("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?s(a):he("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new rw(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(r=>r?(Ze(typeof r.token=="string",44558,{tokenResult:r}),this.m=r.token,new rw(r.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(r);else for(let n=0;n<t;n++)r[n]=Math.floor(256*Math.random());return r}/**
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
 */function _I(){return new TextEncoder}/**
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
 */class wI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Xx(40);for(let a=0;a<s.length;++a)n.length<20&&s[a]<r&&(n+=e.charAt(s[a]%62))}return n}}function Ve(t,e){return t<e?-1:t>e?1:0}function rg(t,e){let r=0;for(;r<t.length&&r<e.length;){const n=t.codePointAt(r),s=e.codePointAt(r);if(n!==s){if(n<128&&s<128)return Ve(n,s);{const a=_I(),u=Jx(a.encode(nw(t,r)),a.encode(nw(e,r)));return u!==0?u:Ve(n,s)}}r+=n>65535?2:1}return Ve(t.length,e.length)}function nw(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Jx(t,e){for(let r=0;r<t.length&&r<e.length;++r)if(t[r]!==e[r])return Ve(t[r],e[r]);return Ve(t.length,e.length)}function pa(t,e,r){return t.length===e.length&&t.every((n,s)=>r(n,e[s]))}/**
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
 */const iw=-62135596800,ow=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const r=Math.floor(e/1e3),n=Math.floor((e-1e3*r)*ow);return new Rt(r,n)}constructor(e,r){if(this.seconds=e,this.nanoseconds=r,r<0)throw new _e(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new _e(re.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(e<iw)throw new _e(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(re.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ow}_compareTo(e){return this.seconds===e.seconds?Ve(this.nanoseconds,e.nanoseconds):Ve(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-iw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */const sw="__name__";class xn{constructor(e,r,n){r===void 0?r=0:r>e.length&&Ae(637,{offset:r,range:e.length}),n===void 0?n=e.length-r:n>e.length-r&&Ae(1746,{length:n,range:e.length-r}),this.segments=e,this.offset=r,this.len=n}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const r=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach(n=>{r.push(n)}):r.push(e),this.construct(r)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==e.get(r))return!1;return!0}forEach(e){for(let r=this.offset,n=this.limit();r<n;r++)e(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,r){const n=Math.min(e.length,r.length);for(let s=0;s<n;s++){const a=xn.compareSegments(e.get(s),r.get(s));if(a!==0)return a}return Ve(e.length,r.length)}static compareSegments(e,r){const n=xn.isNumericId(e),s=xn.isNumericId(r);return n&&!s?-1:!n&&s?1:n&&s?xn.extractNumericId(e).compare(xn.extractNumericId(r)):rg(e,r)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qi.fromString(e.substring(4,e.length-2))}}class dt extends xn{construct(e,r,n){return new dt(e,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const r=[];for(const n of e){if(n.indexOf("//")>=0)throw new _e(re.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(s=>s.length>0))}return new dt(r)}static emptyPath(){return new dt([])}}const Zx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qt extends xn{construct(e,r,n){return new qt(e,r,n)}static isValidIdentifier(e){return Zx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===sw}static keyField(){return new qt([sw])}static fromServerFormat(e){const r=[];let n="",s=0;const a=()=>{if(n.length===0)throw new _e(re.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""};let u=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new _e(re.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new _e(re.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=f,s+=2}else d==="`"?(u=!u,s++):d!=="."||u?(n+=d,s++):(a(),s++)}if(a(),u)throw new _e(re.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qt(r)}static emptyPath(){return new qt([])}}/**
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
 */class Se{constructor(e){this.path=e}static fromPath(e){return new Se(dt.fromString(e))}static fromName(e){return new Se(dt.fromString(e).popFirst(5))}static empty(){return new Se(dt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&dt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,r){return dt.comparator(e.path,r.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Se(new dt(e.slice()))}}/**
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
 */const Jl=-1;function ek(t,e){const r=t.toTimestamp().seconds,n=t.toTimestamp().nanoseconds+1,s=ke.fromTimestamp(n===1e9?new Rt(r+1,0):new Rt(r,n));return new to(s,Se.empty(),e)}function tk(t){return new to(t.readTime,t.key,Jl)}class to{constructor(e,r,n){this.readTime=e,this.documentKey=r,this.largestBatchId=n}static min(){return new to(ke.min(),Se.empty(),Jl)}static max(){return new to(ke.max(),Se.empty(),Jl)}}function rk(t,e){let r=t.readTime.compareTo(e.readTime);return r!==0?r:(r=Se.comparator(t.documentKey,e.documentKey),r!==0?r:Ve(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ik{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pa(t){if(t.code!==re.FAILED_PRECONDITION||t.message!==nk)throw t;he("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(r=>{this.isDone=!0,this.result=r,this.nextCallback&&this.nextCallback(r)},r=>{this.isDone=!0,this.error=r,this.catchCallback&&this.catchCallback(r)})}catch(e){return this.next(void 0,e)}next(e,r){return this.callbackAttached&&Ae(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(r,this.error):this.wrapSuccess(e,this.result):new J((n,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(n,s)},this.catchCallback=a=>{this.wrapFailure(r,a).next(n,s)}})}toPromise(){return new Promise((e,r)=>{this.next(e,r)})}wrapUserFunction(e){try{const r=e();return r instanceof J?r:J.resolve(r)}catch(r){return J.reject(r)}}wrapSuccess(e,r){return e?this.wrapUserFunction(()=>e(r)):J.resolve(r)}wrapFailure(e,r){return e?this.wrapUserFunction(()=>e(r)):J.reject(r)}static resolve(e){return new J((r,n)=>{r(e)})}static reject(e){return new J((r,n)=>{n(e)})}static waitFor(e){return new J((r,n)=>{let s=0,a=0,u=!1;e.forEach(d=>{++s,d.next(()=>{++a,u&&a===s&&r()},f=>n(f))}),u=!0,a===s&&r()})}static or(e){let r=J.resolve(!1);for(const n of e)r=r.next(s=>s?J.resolve(s):n());return r}static forEach(e,r){const n=[];return e.forEach((s,a)=>{n.push(r.call(this,s,a))}),this.waitFor(n)}static mapArray(e,r){return new J((n,s)=>{const a=e.length,u=new Array(a);let d=0;for(let f=0;f<a;f++){const g=f;r(e[g]).next(y=>{u[g]=y,++d,d===a&&n(u)},y=>s(y))}})}static doWhile(e,r){return new J((n,s)=>{const a=()=>{e()===!0?r().next(()=>{a()},s):n()};a()})}}function ok(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}function Ra(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class ih{constructor(e,r){this.previousValue=e,r&&(r.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>r.writeSequenceNumber(n))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ih.le=-1;/**
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
 */const Wg=-1;function oh(t){return t==null}function bd(t){return t===0&&1/t==-1/0}function sk(t){return typeof t=="number"&&Number.isInteger(t)&&!bd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const EI="";function ak(t){let e="";for(let r=0;r<t.length;r++)e.length>0&&(e=aw(e)),e=lk(t.get(r),e);return aw(e)}function lk(t,e){let r=e;const n=t.length;for(let s=0;s<n;s++){const a=t.charAt(s);switch(a){case"\0":r+="";break;case EI:r+="";break;default:r+=a}}return r}function aw(t){return t+EI+""}/**
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
 */function lw(t){let e=0;for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e++;return e}function ts(t,e){for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&e(r,t[r])}function II(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class pt{constructor(e,r){this.comparator=e,this.root=r||Ht.EMPTY}insert(e,r){return new pt(this.comparator,this.root.insert(e,r,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(e){let r=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return r+n.left.size;s<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((r,n)=>(e(r,n),!1))}toString(){const e=[];return this.inorderTraversal((r,n)=>(e.push(`${r}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jc(this.root,e,this.comparator,!1)}getReverseIterator(){return new jc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jc(this.root,e,this.comparator,!0)}}class jc{constructor(e,r,n,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=r?n(e.key,r):1,r&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const r={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,r,n,s,a){this.key=e,this.value=r,this.color=n??Ht.RED,this.left=s??Ht.EMPTY,this.right=a??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,r,n,s,a){return new Ht(e??this.key,r??this.value,n??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,r,n){let s=this;const a=n(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,r,n),null):a===0?s.copy(null,r,null,null,null):s.copy(null,null,null,null,s.right.insert(e,r,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,r){let n,s=this;if(r(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,r),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),r(e,s.key)===0){if(s.right.isEmpty())return Ht.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,r))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,r)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ae(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ae(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ae(27949);return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae(57766)}get value(){throw Ae(16141)}get color(){throw Ae(16727)}get left(){throw Ae(29726)}get right(){throw Ae(36894)}copy(e,r,n,s,a){return this}insert(e,r,n){return new Ht(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((r,n)=>(e(r),!1))}forEachInRange(e,r){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;r(s.key)}}forEachWhile(e,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const r=this.data.getIteratorFrom(e);return r.hasNext()?r.getNext().key:null}getIterator(){return new uw(this.data.getIterator())}getIteratorFrom(e){return new uw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let r=this;return r.size<e.size&&(r=e,e=this),e.forEach(n=>{r=r.add(n)}),r}isEqual(e){if(!(e instanceof xt)||this.size!==e.size)return!1;const r=this.data.getIterator(),n=e.data.getIterator();for(;r.hasNext();){const s=r.getNext().key,a=n.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(r=>{e.push(r)}),e}toString(){const e=[];return this.forEach(r=>e.push(r)),"SortedSet("+e.toString()+")"}copy(e){const r=new xt(this.comparator);return r.data=e,r}}class uw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(qt.comparator)}static empty(){return new pn([])}unionWith(e){let r=new xt(qt.comparator);for(const n of this.fields)r=r.add(n);for(const n of e)r=r.add(n);return new pn(r.toArray())}covers(e){for(const r of this.fields)if(r.isPrefixOf(e))return!0;return!1}isEqual(e){return pa(this.fields,e.fields,(r,n)=>r.isEqual(n))}}/**
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
 */class SI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e){this.binaryString=e}static fromBase64String(e){const r=function(s){try{return atob(s)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new SI("Invalid base64 string: "+a):a}}(e);return new Qt(r)}static fromUint8Array(e){const r=function(s){let a="";for(let u=0;u<s.length;++u)a+=String.fromCharCode(s[u]);return a}(e);return new Qt(r)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){const n=new Uint8Array(r.length);for(let s=0;s<r.length;s++)n[s]=r.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ve(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const uk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ro(t){if(Ze(!!t,39018),typeof t=="string"){let e=0;const r=uk.exec(t);if(Ze(!!r,46558,{timestamp:t}),r[1]){let s=r[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(t);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function no(t){return typeof t=="string"?Qt.fromBase64String(t):Qt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="server_timestamp",bI="__type__",CI="__previous_value__",AI="__local_write_time__";function Gg(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[bI])===null||r===void 0?void 0:r.stringValue)===TI}function sh(t){const e=t.mapValue.fields[CI];return Gg(e)?sh(e):e}function Zl(t){const e=ro(t.mapValue.fields[AI].timestampValue);return new Rt(e.seconds,e.nanos)}/**
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
 */class ck{constructor(e,r,n,s,a,u,d,f,g){this.databaseId=e,this.appId=r,this.persistenceKey=n,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=d,this.longPollingOptions=f,this.useFetchStreams=g}}const Cd="(default)";class eu{constructor(e,r){this.projectId=e,this.database=r||Cd}static empty(){return new eu("","")}get isDefaultDatabase(){return this.database===Cd}isEqual(e){return e instanceof eu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="__type__",dk="__max__",$c={mapValue:{}},RI="__vector__",Ad="value";function io(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gg(t)?4:fk(t)?9007199254740991:hk(t)?10:11:Ae(28295,{value:t})}function Mn(t,e){if(t===e)return!0;const r=io(t);if(r!==io(e))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zl(t).isEqual(Zl(e));case 3:return function(s,a){if(typeof s.timestampValue=="string"&&typeof a.timestampValue=="string"&&s.timestampValue.length===a.timestampValue.length)return s.timestampValue===a.timestampValue;const u=ro(s.timestampValue),d=ro(a.timestampValue);return u.seconds===d.seconds&&u.nanos===d.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,a){return no(s.bytesValue).isEqual(no(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,a){return yt(s.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(s.geoPointValue.longitude)===yt(a.geoPointValue.longitude)}(t,e);case 2:return function(s,a){if("integerValue"in s&&"integerValue"in a)return yt(s.integerValue)===yt(a.integerValue);if("doubleValue"in s&&"doubleValue"in a){const u=yt(s.doubleValue),d=yt(a.doubleValue);return u===d?bd(u)===bd(d):isNaN(u)&&isNaN(d)}return!1}(t,e);case 9:return pa(t.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:case 11:return function(s,a){const u=s.mapValue.fields||{},d=a.mapValue.fields||{};if(lw(u)!==lw(d))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(d[f]===void 0||!Mn(u[f],d[f])))return!1;return!0}(t,e);default:return Ae(52216,{left:t})}}function tu(t,e){return(t.values||[]).find(r=>Mn(r,e))!==void 0}function ga(t,e){if(t===e)return 0;const r=io(t),n=io(e);if(r!==n)return Ve(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return Ve(t.booleanValue,e.booleanValue);case 2:return function(a,u){const d=yt(a.integerValue||a.doubleValue),f=yt(u.integerValue||u.doubleValue);return d<f?-1:d>f?1:d===f?0:isNaN(d)?isNaN(f)?0:-1:1}(t,e);case 3:return cw(t.timestampValue,e.timestampValue);case 4:return cw(Zl(t),Zl(e));case 5:return rg(t.stringValue,e.stringValue);case 6:return function(a,u){const d=no(a),f=no(u);return d.compareTo(f)}(t.bytesValue,e.bytesValue);case 7:return function(a,u){const d=a.split("/"),f=u.split("/");for(let g=0;g<d.length&&g<f.length;g++){const y=Ve(d[g],f[g]);if(y!==0)return y}return Ve(d.length,f.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,u){const d=Ve(yt(a.latitude),yt(u.latitude));return d!==0?d:Ve(yt(a.longitude),yt(u.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return dw(t.arrayValue,e.arrayValue);case 10:return function(a,u){var d,f,g,y;const _=a.fields||{},w=u.fields||{},I=(d=_[Ad])===null||d===void 0?void 0:d.arrayValue,b=(f=w[Ad])===null||f===void 0?void 0:f.arrayValue,k=Ve(((g=I==null?void 0:I.values)===null||g===void 0?void 0:g.length)||0,((y=b==null?void 0:b.values)===null||y===void 0?void 0:y.length)||0);return k!==0?k:dw(I,b)}(t.mapValue,e.mapValue);case 11:return function(a,u){if(a===$c.mapValue&&u===$c.mapValue)return 0;if(a===$c.mapValue)return 1;if(u===$c.mapValue)return-1;const d=a.fields||{},f=Object.keys(d),g=u.fields||{},y=Object.keys(g);f.sort(),y.sort();for(let _=0;_<f.length&&_<y.length;++_){const w=rg(f[_],y[_]);if(w!==0)return w;const I=ga(d[f[_]],g[y[_]]);if(I!==0)return I}return Ve(f.length,y.length)}(t.mapValue,e.mapValue);default:throw Ae(23264,{Pe:r})}}function cw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ve(t,e);const r=ro(t),n=ro(e),s=Ve(r.seconds,n.seconds);return s!==0?s:Ve(r.nanos,n.nanos)}function dw(t,e){const r=t.values||[],n=e.values||[];for(let s=0;s<r.length&&s<n.length;++s){const a=ga(r[s],n[s]);if(a)return a}return Ve(r.length,n.length)}function ma(t){return ng(t)}function ng(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const n=ro(r);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(r){return no(r).toBase64()}(t.bytesValue):"referenceValue"in t?function(r){return Se.fromName(r).toString()}(t.referenceValue):"geoPointValue"in t?function(r){return`geo(${r.latitude},${r.longitude})`}(t.geoPointValue):"arrayValue"in t?function(r){let n="[",s=!0;for(const a of r.values||[])s?s=!1:n+=",",n+=ng(a);return n+"]"}(t.arrayValue):"mapValue"in t?function(r){const n=Object.keys(r.fields||{}).sort();let s="{",a=!0;for(const u of n)a?a=!1:s+=",",s+=`${u}:${ng(r.fields[u])}`;return s+"}"}(t.mapValue):Ae(61005,{value:t})}function sd(t){switch(io(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=sh(t);return e?16+sd(e):16;case 5:return 2*t.stringValue.length;case 6:return no(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,a)=>s+sd(a),0)}(t.arrayValue);case 10:case 11:return function(n){let s=0;return ts(n.fields,(a,u)=>{s+=a.length+sd(u)}),s}(t.mapValue);default:throw Ae(13486,{value:t})}}function ig(t){return!!t&&"integerValue"in t}function Hg(t){return!!t&&"arrayValue"in t}function hw(t){return!!t&&"nullValue"in t}function fw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ad(t){return!!t&&"mapValue"in t}function hk(t){var e,r;return((r=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[PI])===null||r===void 0?void 0:r.stringValue)===RI}function Bl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(r,n)=>e.mapValue.fields[r]=Bl(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let r=0;r<(t.arrayValue.values||[]).length;++r)e.arrayValue.values[r]=Bl(t.arrayValue.values[r]);return e}return Object.assign({},t)}function fk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===dk}/**
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
 */class qr{constructor(e){this.value=e}static empty(){return new qr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let r=this.value;for(let n=0;n<e.length-1;++n)if(r=(r.mapValue.fields||{})[e.get(n)],!ad(r))return null;return r=(r.mapValue.fields||{})[e.lastSegment()],r||null}}set(e,r){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bl(r)}setAll(e){let r=qt.emptyPath(),n={},s=[];e.forEach((u,d)=>{if(!r.isImmediateParentOf(d)){const f=this.getFieldsMap(r);this.applyChanges(f,n,s),n={},s=[],r=d.popLast()}u?n[d.lastSegment()]=Bl(u):s.push(d.lastSegment())});const a=this.getFieldsMap(r);this.applyChanges(a,n,s)}delete(e){const r=this.field(e.popLast());ad(r)&&r.mapValue.fields&&delete r.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=r.mapValue.fields[e.get(n)];ad(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},r.mapValue.fields[e.get(n)]=s),r=s}return r.mapValue.fields}applyChanges(e,r,n){ts(r,(s,a)=>e[s]=a);for(const s of n)delete e[s]}clone(){return new qr(Bl(this.value))}}function xI(t){const e=[];return ts(t.fields,(r,n)=>{const s=new qt([r]);if(ad(n)){const a=xI(n.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new pn(e)}/**
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
 */class rr{constructor(e,r,n,s,a,u,d){this.key=e,this.documentType=r,this.version=n,this.readTime=s,this.createTime=a,this.data=u,this.documentState=d}static newInvalidDocument(e){return new rr(e,0,ke.min(),ke.min(),ke.min(),qr.empty(),0)}static newFoundDocument(e,r,n,s){return new rr(e,1,r,ke.min(),n,s,0)}static newNoDocument(e,r){return new rr(e,2,r,ke.min(),ke.min(),qr.empty(),0)}static newUnknownDocument(e,r){return new rr(e,3,r,ke.min(),ke.min(),qr.empty(),2)}convertToFoundDocument(e,r){return!this.createTime.isEqual(ke.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ke.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Pd{constructor(e,r){this.position=e,this.inclusive=r}}function pw(t,e,r){let n=0;for(let s=0;s<t.position.length;s++){const a=e[s],u=t.position[s];if(a.field.isKeyField()?n=Se.comparator(Se.fromName(u.referenceValue),r.key):n=ga(u,r.data.field(a.field)),a.dir==="desc"&&(n*=-1),n!==0)break}return n}function gw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let r=0;r<t.position.length;r++)if(!Mn(t.position[r],e.position[r]))return!1;return!0}/**
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
 */class Rd{constructor(e,r="asc"){this.field=e,this.dir=r}}function pk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class kI{}class Pt extends kI{constructor(e,r,n){super(),this.field=e,this.op=r,this.value=n}static create(e,r,n){return e.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(e,r,n):new mk(e,r,n):r==="array-contains"?new _k(e,n):r==="in"?new wk(e,n):r==="not-in"?new Ek(e,n):r==="array-contains-any"?new Ik(e,n):new Pt(e,r,n)}static createKeyFieldInFilter(e,r,n){return r==="in"?new vk(e,n):new yk(e,n)}matches(e){const r=e.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(ga(r,this.value)):r!==null&&io(this.value)===io(r)&&this.matchesComparison(ga(r,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vn extends kI{constructor(e,r){super(),this.filters=e,this.op=r,this.Te=null}static create(e,r){return new Vn(e,r)}matches(e){return DI(this)?this.filters.find(r=>!r.matches(e))===void 0:this.filters.find(r=>r.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,r)=>e.concat(r.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function DI(t){return t.op==="and"}function NI(t){return gk(t)&&DI(t)}function gk(t){for(const e of t.filters)if(e instanceof Vn)return!1;return!0}function og(t){if(t instanceof Pt)return t.field.canonicalString()+t.op.toString()+ma(t.value);if(NI(t))return t.filters.map(e=>og(e)).join(",");{const e=t.filters.map(r=>og(r)).join(",");return`${t.op}(${e})`}}function OI(t,e){return t instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.field.isEqual(s.field)&&Mn(n.value,s.value)}(t,e):t instanceof Vn?function(n,s){return s instanceof Vn&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((a,u,d)=>a&&OI(u,s.filters[d]),!0):!1}(t,e):void Ae(19439)}function LI(t){return t instanceof Pt?function(r){return`${r.field.canonicalString()} ${r.op} ${ma(r.value)}`}(t):t instanceof Vn?function(r){return r.op.toString()+" {"+r.getFilters().map(LI).join(" ,")+"}"}(t):"Filter"}class mk extends Pt{constructor(e,r,n){super(e,r,n),this.key=Se.fromName(n.referenceValue)}matches(e){const r=Se.comparator(e.key,this.key);return this.matchesComparison(r)}}class vk extends Pt{constructor(e,r){super(e,"in",r),this.keys=MI("in",r)}matches(e){return this.keys.some(r=>r.isEqual(e.key))}}class yk extends Pt{constructor(e,r){super(e,"not-in",r),this.keys=MI("not-in",r)}matches(e){return!this.keys.some(r=>r.isEqual(e.key))}}function MI(t,e){var r;return(((r=e.arrayValue)===null||r===void 0?void 0:r.values)||[]).map(n=>Se.fromName(n.referenceValue))}class _k extends Pt{constructor(e,r){super(e,"array-contains",r)}matches(e){const r=e.data.field(this.field);return Hg(r)&&tu(r.arrayValue,this.value)}}class wk extends Pt{constructor(e,r){super(e,"in",r)}matches(e){const r=e.data.field(this.field);return r!==null&&tu(this.value.arrayValue,r)}}class Ek extends Pt{constructor(e,r){super(e,"not-in",r)}matches(e){if(tu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const r=e.data.field(this.field);return r!==null&&r.nullValue===void 0&&!tu(this.value.arrayValue,r)}}class Ik extends Pt{constructor(e,r){super(e,"array-contains-any",r)}matches(e){const r=e.data.field(this.field);return!(!Hg(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>tu(this.value.arrayValue,n))}}/**
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
 */class Sk{constructor(e,r=null,n=[],s=[],a=null,u=null,d=null){this.path=e,this.collectionGroup=r,this.orderBy=n,this.filters=s,this.limit=a,this.startAt=u,this.endAt=d,this.Ie=null}}function mw(t,e=null,r=[],n=[],s=null,a=null,u=null){return new Sk(t,e,r,n,s,a,u)}function qg(t){const e=De(t);if(e.Ie===null){let r=e.path.canonicalString();e.collectionGroup!==null&&(r+="|cg:"+e.collectionGroup),r+="|f:",r+=e.filters.map(n=>og(n)).join(","),r+="|ob:",r+=e.orderBy.map(n=>function(a){return a.field.canonicalString()+a.dir}(n)).join(","),oh(e.limit)||(r+="|l:",r+=e.limit),e.startAt&&(r+="|lb:",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(n=>ma(n)).join(",")),e.endAt&&(r+="|ub:",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(n=>ma(n)).join(",")),e.Ie=r}return e.Ie}function Kg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let r=0;r<t.orderBy.length;r++)if(!pk(t.orderBy[r],e.orderBy[r]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let r=0;r<t.filters.length;r++)if(!OI(t.filters[r],e.filters[r]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gw(t.startAt,e.startAt)&&gw(t.endAt,e.endAt)}function sg(t){return Se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ah{constructor(e,r=null,n=[],s=[],a=null,u="F",d=null,f=null){this.path=e,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=s,this.limit=a,this.limitType=u,this.startAt=d,this.endAt=f,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Tk(t,e,r,n,s,a,u,d){return new ah(t,e,r,n,s,a,u,d)}function VI(t){return new ah(t)}function vw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bk(t){return t.collectionGroup!==null}function Ul(t){const e=De(t);if(e.Ee===null){e.Ee=[];const r=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),r.add(a.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let d=new xt(qt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(a=>{r.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new Rd(a,n))}),r.has(qt.keyField().canonicalString())||e.Ee.push(new Rd(qt.keyField(),n))}return e.Ee}function On(t){const e=De(t);return e.de||(e.de=Ck(e,Ul(t))),e.de}function Ck(t,e){if(t.limitType==="F")return mw(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const a=s.dir==="desc"?"asc":"desc";return new Rd(s.field,a)});const r=t.endAt?new Pd(t.endAt.position,t.endAt.inclusive):null,n=t.startAt?new Pd(t.startAt.position,t.startAt.inclusive):null;return mw(t.path,t.collectionGroup,e,t.filters,t.limit,r,n)}}function ag(t,e,r){return new ah(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,r,t.startAt,t.endAt)}function lh(t,e){return Kg(On(t),On(e))&&t.limitType===e.limitType}function FI(t){return`${qg(On(t))}|lt:${t.limitType}`}function Zs(t){return`Query(target=${function(r){let n=r.path.canonicalString();return r.collectionGroup!==null&&(n+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(n+=`, filters: [${r.filters.map(s=>LI(s)).join(", ")}]`),oh(r.limit)||(n+=", limit: "+r.limit),r.orderBy.length>0&&(n+=`, orderBy: [${r.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),r.startAt&&(n+=", startAt: ",n+=r.startAt.inclusive?"b:":"a:",n+=r.startAt.position.map(s=>ma(s)).join(",")),r.endAt&&(n+=", endAt: ",n+=r.endAt.inclusive?"a:":"b:",n+=r.endAt.position.map(s=>ma(s)).join(",")),`Target(${n})`}(On(t))}; limitType=${t.limitType})`}function uh(t,e){return e.isFoundDocument()&&function(n,s){const a=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(a):Se.isDocumentKey(n.path)?n.path.isEqual(a):n.path.isImmediateParentOf(a)}(t,e)&&function(n,s){for(const a of Ul(n))if(!a.field.isKeyField()&&s.data.field(a.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const a of n.filters)if(!a.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(u,d,f){const g=pw(u,d,f);return u.inclusive?g<=0:g<0}(n.startAt,Ul(n),s)||n.endAt&&!function(u,d,f){const g=pw(u,d,f);return u.inclusive?g>=0:g>0}(n.endAt,Ul(n),s))}(t,e)}function Ak(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function BI(t){return(e,r)=>{let n=!1;for(const s of Ul(t)){const a=Pk(s,e,r);if(a!==0)return a;n=n||s.field.isKeyField()}return 0}}function Pk(t,e,r){const n=t.field.isKeyField()?Se.comparator(e.key,r.key):function(a,u,d){const f=u.data.field(a),g=d.data.field(a);return f!==null&&g!==null?ga(f,g):Ae(42886)}(t.field,e,r);switch(t.dir){case"asc":return n;case"desc":return-1*n;default:return Ae(19790,{direction:t.dir})}}/**
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
 */class rs{constructor(e,r){this.mapKeyFn=e,this.equalsFn=r,this.inner={},this.innerSize=0}get(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n!==void 0){for(const[s,a]of n)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,r){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,r]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,r]);s.push([e,r]),this.innerSize++}delete(e){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[r]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(r,n)=>{for(const[s,a]of n)e(s,a)})}isEmpty(){return II(this.inner)}size(){return this.innerSize}}/**
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
 */const Rk=new pt(Se.comparator);function hi(){return Rk}const UI=new pt(Se.comparator);function Ll(...t){let e=UI;for(const r of t)e=e.insert(r.key,r);return e}function jI(t){let e=UI;return t.forEach((r,n)=>e=e.insert(r,n.overlayedDocument)),e}function zo(){return jl()}function $I(){return jl()}function jl(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const xk=new pt(Se.comparator),kk=new xt(Se.comparator);function $e(...t){let e=kk;for(const r of t)e=e.add(r);return e}const Dk=new xt(Ve);function Nk(){return Dk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bd(e)?"-0":e}}function zI(t){return{integerValue:""+t}}function Ok(t,e){return sk(e)?zI(e):Qg(t,e)}/**
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
 */class ch{constructor(){this._=void 0}}function Lk(t,e,r){return t instanceof xd?function(s,a){const u={fields:{[bI]:{stringValue:TI},[AI]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return a&&Gg(a)&&(a=sh(a)),a&&(u.fields[CI]=a),{mapValue:u}}(r,e):t instanceof ru?GI(t,e):t instanceof nu?HI(t,e):function(s,a){const u=WI(s,a),d=yw(u)+yw(s.Re);return ig(u)&&ig(s.Re)?zI(d):Qg(s.serializer,d)}(t,e)}function Mk(t,e,r){return t instanceof ru?GI(t,e):t instanceof nu?HI(t,e):r}function WI(t,e){return t instanceof kd?function(n){return ig(n)||function(a){return!!a&&"doubleValue"in a}(n)}(e)?e:{integerValue:0}:null}class xd extends ch{}class ru extends ch{constructor(e){super(),this.elements=e}}function GI(t,e){const r=qI(e);for(const n of t.elements)r.some(s=>Mn(s,n))||r.push(n);return{arrayValue:{values:r}}}class nu extends ch{constructor(e){super(),this.elements=e}}function HI(t,e){let r=qI(e);for(const n of t.elements)r=r.filter(s=>!Mn(s,n));return{arrayValue:{values:r}}}class kd extends ch{constructor(e,r){super(),this.serializer=e,this.Re=r}}function yw(t){return yt(t.integerValue||t.doubleValue)}function qI(t){return Hg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Vk(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof ru&&s instanceof ru||n instanceof nu&&s instanceof nu?pa(n.elements,s.elements,Mn):n instanceof kd&&s instanceof kd?Mn(n.Re,s.Re):n instanceof xd&&s instanceof xd}(t.transform,e.transform)}class Fk{constructor(e,r){this.version=e,this.transformResults=r}}class li{constructor(e,r){this.updateTime=e,this.exists=r}static none(){return new li}static exists(e){return new li(void 0,e)}static updateTime(e){return new li(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ld(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dh{}function KI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new YI(t.key,li.none()):new mu(t.key,t.data,li.none());{const r=t.data,n=qr.empty();let s=new xt(qt.comparator);for(let a of e.fields)if(!s.has(a)){let u=r.field(a);u===null&&a.length>1&&(a=a.popLast(),u=r.field(a)),u===null?n.delete(a):n.set(a,u),s=s.add(a)}return new ns(t.key,n,new pn(s.toArray()),li.none())}}function Bk(t,e,r){t instanceof mu?function(s,a,u){const d=s.value.clone(),f=ww(s.fieldTransforms,a,u.transformResults);d.setAll(f),a.convertToFoundDocument(u.version,d).setHasCommittedMutations()}(t,e,r):t instanceof ns?function(s,a,u){if(!ld(s.precondition,a))return void a.convertToUnknownDocument(u.version);const d=ww(s.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(QI(s)),f.setAll(d),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(t,e,r):function(s,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,r)}function $l(t,e,r,n){return t instanceof mu?function(a,u,d,f){if(!ld(a.precondition,u))return d;const g=a.value.clone(),y=Ew(a.fieldTransforms,f,u);return g.setAll(y),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),null}(t,e,r,n):t instanceof ns?function(a,u,d,f){if(!ld(a.precondition,u))return d;const g=Ew(a.fieldTransforms,f,u),y=u.data;return y.setAll(QI(a)),y.setAll(g),u.convertToFoundDocument(u.version,y).setHasLocalMutations(),d===null?null:d.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(_=>_.field))}(t,e,r,n):function(a,u,d){return ld(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):d}(t,e,r)}function Uk(t,e){let r=null;for(const n of t.fieldTransforms){const s=e.data.field(n.field),a=WI(n.transform,s||null);a!=null&&(r===null&&(r=qr.empty()),r.set(n.field,a))}return r||null}function _w(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&pa(n,s,(a,u)=>Vk(a,u))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mu extends dh{constructor(e,r,n,s=[]){super(),this.key=e,this.value=r,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ns extends dh{constructor(e,r,n,s,a=[]){super(),this.key=e,this.data=r,this.fieldMask=n,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function QI(t){const e=new Map;return t.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){const n=t.data.field(r);e.set(r,n)}}),e}function ww(t,e,r){const n=new Map;Ze(t.length===r.length,32656,{Ve:r.length,me:t.length});for(let s=0;s<r.length;s++){const a=t[s],u=a.transform,d=e.data.field(a.field);n.set(a.field,Mk(u,d,r[s]))}return n}function Ew(t,e,r){const n=new Map;for(const s of t){const a=s.transform,u=r.data.field(s.field);n.set(s.field,Lk(a,u,e))}return n}class YI extends dh{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jk extends dh{constructor(e,r){super(),this.key=e,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $k{constructor(e,r,n,s){this.batchId=e,this.localWriteTime=r,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,r){const n=r.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&Bk(a,e,n[s])}}applyToLocalView(e,r){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(r=$l(n,e,r,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(r=$l(n,e,r,this.localWriteTime));return r}applyToLocalDocumentSet(e,r){const n=$I();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let d=this.applyToLocalView(u,a.mutatedFields);d=r.has(s.key)?null:d;const f=KI(u,d);f!==null&&n.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(ke.min())}),n}keys(){return this.mutations.reduce((e,r)=>e.add(r.key),$e())}isEqual(e){return this.batchId===e.batchId&&pa(this.mutations,e.mutations,(r,n)=>_w(r,n))&&pa(this.baseMutations,e.baseMutations,(r,n)=>_w(r,n))}}class Yg{constructor(e,r,n,s){this.batch=e,this.commitVersion=r,this.mutationResults=n,this.docVersions=s}static from(e,r,n){Ze(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let s=function(){return xk}();const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,n[u].version);return new Yg(e,r,n,s)}}/**
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
 */class zk{constructor(e,r){this.largestBatchId=e,this.mutation=r}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Wk{constructor(e,r){this.count=e,this.unchangedNames=r}}/**
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
 */var Et,Ge;function Gk(t){switch(t){case re.OK:return Ae(64938);case re.CANCELLED:case re.UNKNOWN:case re.DEADLINE_EXCEEDED:case re.RESOURCE_EXHAUSTED:case re.INTERNAL:case re.UNAVAILABLE:case re.UNAUTHENTICATED:return!1;case re.INVALID_ARGUMENT:case re.NOT_FOUND:case re.ALREADY_EXISTS:case re.PERMISSION_DENIED:case re.FAILED_PRECONDITION:case re.ABORTED:case re.OUT_OF_RANGE:case re.UNIMPLEMENTED:case re.DATA_LOSS:return!0;default:return Ae(15467,{code:t})}}function XI(t){if(t===void 0)return di("GRPC error has no .code"),re.UNKNOWN;switch(t){case Et.OK:return re.OK;case Et.CANCELLED:return re.CANCELLED;case Et.UNKNOWN:return re.UNKNOWN;case Et.DEADLINE_EXCEEDED:return re.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return re.RESOURCE_EXHAUSTED;case Et.INTERNAL:return re.INTERNAL;case Et.UNAVAILABLE:return re.UNAVAILABLE;case Et.UNAUTHENTICATED:return re.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return re.INVALID_ARGUMENT;case Et.NOT_FOUND:return re.NOT_FOUND;case Et.ALREADY_EXISTS:return re.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return re.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return re.FAILED_PRECONDITION;case Et.ABORTED:return re.ABORTED;case Et.OUT_OF_RANGE:return re.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return re.UNIMPLEMENTED;case Et.DATA_LOSS:return re.DATA_LOSS;default:return Ae(39323,{code:t})}}(Ge=Et||(Et={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Hk=new Qi([4294967295,4294967295],0);function Iw(t){const e=_I().encode(t),r=new dI;return r.update(e),new Uint8Array(r.digest())}function Sw(t){const e=new DataView(t.buffer),r=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Qi([r,n],0),new Qi([s,a],0)]}class Xg{constructor(e,r,n){if(this.bitmap=e,this.padding=r,this.hashCount=n,r<0||r>=8)throw new Ml(`Invalid padding: ${r}`);if(n<0)throw new Ml(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Ml(`Invalid hash count: ${n}`);if(e.length===0&&r!==0)throw new Ml(`Invalid padding when bitmap length is 0: ${r}`);this.pe=8*e.length-r,this.ye=Qi.fromNumber(this.pe)}we(e,r,n){let s=e.add(r.multiply(Qi.fromNumber(n)));return s.compare(Hk)===1&&(s=new Qi([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const r=Iw(e),[n,s]=Sw(r);for(let a=0;a<this.hashCount;a++){const u=this.we(n,s,a);if(!this.be(u))return!1}return!0}static create(e,r,n){const s=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Xg(a,s,r);return n.forEach(d=>u.insert(d)),u}insert(e){if(this.pe===0)return;const r=Iw(e),[n,s]=Sw(r);for(let a=0;a<this.hashCount;a++){const u=this.we(n,s,a);this.Se(u)}}Se(e){const r=Math.floor(e/8),n=e%8;this.bitmap[r]|=1<<n}}class Ml extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class hh{constructor(e,r,n,s,a){this.snapshotVersion=e,this.targetChanges=r,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,r,n){const s=new Map;return s.set(e,vu.createSynthesizedTargetChangeForCurrentChange(e,r,n)),new hh(ke.min(),s,new pt(Ve),hi(),$e())}}class vu{constructor(e,r,n,s,a){this.resumeToken=e,this.current=r,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,r,n){return new vu(n,r,$e(),$e(),$e())}}/**
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
 */class ud{constructor(e,r,n,s){this.De=e,this.removedTargetIds=r,this.key=n,this.ve=s}}class JI{constructor(e,r){this.targetId=e,this.Ce=r}}class ZI{constructor(e,r,n=Qt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=r,this.resumeToken=n,this.cause=s}}class Tw{constructor(){this.Fe=0,this.Me=bw(),this.xe=Qt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=$e(),r=$e(),n=$e();return this.Me.forEach((s,a)=>{switch(a){case 0:e=e.add(s);break;case 2:r=r.add(s);break;case 1:n=n.add(s);break;default:Ae(38017,{changeType:a})}}),new vu(this.xe,this.Oe,e,r,n)}Qe(){this.Ne=!1,this.Me=bw()}$e(e,r){this.Ne=!0,this.Me=this.Me.insert(e,r)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ze(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class qk{constructor(e){this.ze=e,this.je=new Map,this.He=hi(),this.Je=zc(),this.Ye=zc(),this.Ze=new pt(Ve)}Xe(e){for(const r of e.De)e.ve&&e.ve.isFoundDocument()?this.et(r,e.ve):this.tt(r,e.key,e.ve);for(const r of e.removedTargetIds)this.tt(r,e.key,e.ve)}nt(e){this.forEachTarget(e,r=>{const n=this.rt(r);switch(e.state){case 0:this.it(r)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(r);break;case 3:this.it(r)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(r)&&(this.st(r),n.ke(e.resumeToken));break;default:Ae(56790,{state:e.state})}})}forEachTarget(e,r){e.targetIds.length>0?e.targetIds.forEach(r):this.je.forEach((n,s)=>{this.it(s)&&r(s)})}ot(e){const r=e.targetId,n=e.Ce.count,s=this._t(r);if(s){const a=s.target;if(sg(a))if(n===0){const u=new Se(a.path);this.tt(r,u,rr.newNoDocument(u,ke.min()))}else Ze(n===1,20013,{expectedCount:n});else{const u=this.ut(r);if(u!==n){const d=this.ct(e),f=d?this.lt(d,e,u):1;if(f!==0){this.st(r);const g=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(r,g)}}}}}ct(e){const r=e.Ce.unchangedNames;if(!r||!r.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:a=0}=r;let u,d;try{u=no(n).toUint8Array()}catch(f){if(f instanceof SI)return fa("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{d=new Xg(u,s,a)}catch(f){return fa(f instanceof Ml?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return d.pe===0?null:d}lt(e,r,n){return r.Ce.count===n-this.Tt(e,r.targetId)?0:2}Tt(e,r){const n=this.ze.getRemoteKeysForTarget(r);let s=0;return n.forEach(a=>{const u=this.ze.Pt(),d=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(d)||(this.tt(r,a,null),s++)}),s}It(e){const r=new Map;this.je.forEach((a,u)=>{const d=this._t(u);if(d){if(a.current&&sg(d.target)){const f=new Se(d.target.path);this.Et(f).has(u)||this.dt(u,f)||this.tt(u,f,rr.newNoDocument(f,e))}a.Le&&(r.set(u,a.qe()),a.Qe())}});let n=$e();this.Ye.forEach((a,u)=>{let d=!0;u.forEachWhile(f=>{const g=this._t(f);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(n=n.add(a))}),this.He.forEach((a,u)=>u.setReadTime(e));const s=new hh(e,r,this.Ze,this.He,n);return this.He=hi(),this.Je=zc(),this.Ye=zc(),this.Ze=new pt(Ve),s}et(e,r){if(!this.it(e))return;const n=this.dt(e,r.key)?2:0;this.rt(e).$e(r.key,n),this.He=this.He.insert(r.key,r),this.Je=this.Je.insert(r.key,this.Et(r.key).add(e)),this.Ye=this.Ye.insert(r.key,this.At(r.key).add(e))}tt(e,r,n){if(!this.it(e))return;const s=this.rt(e);this.dt(e,r)?s.$e(r,1):s.Ue(r),this.Ye=this.Ye.insert(r,this.At(r).delete(e)),this.Ye=this.Ye.insert(r,this.At(r).add(e)),n&&(this.He=this.He.insert(r,n))}removeTarget(e){this.je.delete(e)}ut(e){const r=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+r.addedDocuments.size-r.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let r=this.je.get(e);return r||(r=new Tw,this.je.set(e,r)),r}At(e){let r=this.Ye.get(e);return r||(r=new xt(Ve),this.Ye=this.Ye.insert(e,r)),r}Et(e){let r=this.Je.get(e);return r||(r=new xt(Ve),this.Je=this.Je.insert(e,r)),r}it(e){const r=this._t(e)!==null;return r||he("WatchChangeAggregator","Detected inactive target",e),r}_t(e){const r=this.je.get(e);return r&&r.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Tw),this.ze.getRemoteKeysForTarget(e).forEach(r=>{this.tt(e,r,null)})}dt(e,r){return this.ze.getRemoteKeysForTarget(e).has(r)}}function zc(){return new pt(Se.comparator)}function bw(){return new pt(Se.comparator)}const Kk={asc:"ASCENDING",desc:"DESCENDING"},Qk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Yk={and:"AND",or:"OR"};class Xk{constructor(e,r){this.databaseId=e,this.useProto3Json=r}}function lg(t,e){return t.useProto3Json||oh(e)?e:{value:e}}function Dd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function eS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Jk(t,e){return Dd(t,e.toTimestamp())}function Ln(t){return Ze(!!t,49232),ke.fromTimestamp(function(r){const n=ro(r);return new Rt(n.seconds,n.nanos)}(t))}function Jg(t,e){return ug(t,e).canonicalString()}function ug(t,e){const r=function(s){return new dt(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?r:r.child(e)}function tS(t){const e=dt.fromString(t);return Ze(sS(e),10190,{key:e.toString()}),e}function cg(t,e){return Jg(t.databaseId,e.path)}function _p(t,e){const r=tS(e);if(r.get(1)!==t.databaseId.projectId)throw new _e(re.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+t.databaseId.projectId);if(r.get(3)!==t.databaseId.database)throw new _e(re.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+t.databaseId.database);return new Se(nS(r))}function rS(t,e){return Jg(t.databaseId,e)}function Zk(t){const e=tS(t);return e.length===4?dt.emptyPath():nS(e)}function dg(t){return new dt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nS(t){return Ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Cw(t,e,r){return{name:cg(t,e),fields:r.value.mapValue.fields}}function eD(t,e){let r;if("targetChange"in e){e.targetChange;const n=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae(39313,{state:g})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],a=function(g,y){return g.useProto3Json?(Ze(y===void 0||typeof y=="string",58123),Qt.fromBase64String(y||"")):(Ze(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),Qt.fromUint8Array(y||new Uint8Array))}(t,e.targetChange.resumeToken),u=e.targetChange.cause,d=u&&function(g){const y=g.code===void 0?re.UNKNOWN:XI(g.code);return new _e(y,g.message||"")}(u);r=new ZI(n,s,a,d||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=_p(t,n.document.name),a=Ln(n.document.updateTime),u=n.document.createTime?Ln(n.document.createTime):ke.min(),d=new qr({mapValue:{fields:n.document.fields}}),f=rr.newFoundDocument(s,a,u,d),g=n.targetIds||[],y=n.removedTargetIds||[];r=new ud(g,y,f.key,f)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=_p(t,n.document),a=n.readTime?Ln(n.readTime):ke.min(),u=rr.newNoDocument(s,a),d=n.removedTargetIds||[];r=new ud([],d,u.key,u)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=_p(t,n.document),a=n.removedTargetIds||[];r=new ud([],a,s,null)}else{if(!("filter"in e))return Ae(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:a}=n,u=new Wk(s,a),d=n.targetId;r=new JI(d,u)}}return r}function tD(t,e){let r;if(e instanceof mu)r={update:Cw(t,e.key,e.value)};else if(e instanceof YI)r={delete:cg(t,e.key)};else if(e instanceof ns)r={update:Cw(t,e.key,e.data),updateMask:cD(e.fieldMask)};else{if(!(e instanceof jk))return Ae(16599,{ft:e.type});r={verify:cg(t,e.key)}}return e.fieldTransforms.length>0&&(r.updateTransforms=e.fieldTransforms.map(n=>function(a,u){const d=u.transform;if(d instanceof xd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof ru)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof nu)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof kd)return{fieldPath:u.field.canonicalString(),increment:d.Re};throw Ae(20930,{transform:u.transform})}(0,n))),e.precondition.isNone||(r.currentDocument=function(s,a){return a.updateTime!==void 0?{updateTime:Jk(s,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Ae(27497)}(t,e.precondition)),r}function rD(t,e){return t&&t.length>0?(Ze(e!==void 0,14353),t.map(r=>function(s,a){let u=s.updateTime?Ln(s.updateTime):Ln(a);return u.isEqual(ke.min())&&(u=Ln(a)),new Fk(u,s.transformResults||[])}(r,e))):[]}function nD(t,e){return{documents:[rS(t,e.path)]}}function iD(t,e){const r={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,r.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=rS(t,s);const a=function(g){if(g.length!==0)return oS(Vn.create(g,"and"))}(e.filters);a&&(r.structuredQuery.where=a);const u=function(g){if(g.length!==0)return g.map(y=>function(w){return{field:ea(w.field),direction:aD(w.dir)}}(y))}(e.orderBy);u&&(r.structuredQuery.orderBy=u);const d=lg(t,e.limit);return d!==null&&(r.structuredQuery.limit=d),e.startAt&&(r.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(r.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{gt:r,parent:s}}function oD(t){let e=Zk(t.parent);const r=t.structuredQuery,n=r.from?r.from.length:0;let s=null;if(n>0){Ze(n===1,65062);const y=r.from[0];y.allDescendants?s=y.collectionId:e=e.child(y.collectionId)}let a=[];r.where&&(a=function(_){const w=iS(_);return w instanceof Vn&&NI(w)?w.getFilters():[w]}(r.where));let u=[];r.orderBy&&(u=function(_){return _.map(w=>function(b){return new Rd(ta(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(r.orderBy));let d=null;r.limit&&(d=function(_){let w;return w=typeof _=="object"?_.value:_,oh(w)?null:w}(r.limit));let f=null;r.startAt&&(f=function(_){const w=!!_.before,I=_.values||[];return new Pd(I,w)}(r.startAt));let g=null;return r.endAt&&(g=function(_){const w=!_.before,I=_.values||[];return new Pd(I,w)}(r.endAt)),Tk(e,s,u,a,d,"F",f,g)}function sD(t,e){const r=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae(28987,{purpose:s})}}(e.purpose);return r==null?null:{"goog-listen-tags":r}}function iS(t){return t.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const n=ta(r.unaryFilter.field);return Pt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ta(r.unaryFilter.field);return Pt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ta(r.unaryFilter.field);return Pt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=ta(r.unaryFilter.field);return Pt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ae(61313);default:return Ae(60726)}}(t):t.fieldFilter!==void 0?function(r){return Pt.create(ta(r.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ae(58110);default:return Ae(50506)}}(r.fieldFilter.op),r.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(r){return Vn.create(r.compositeFilter.filters.map(n=>iS(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ae(1026)}}(r.compositeFilter.op))}(t):Ae(30097,{filter:t})}function aD(t){return Kk[t]}function lD(t){return Qk[t]}function uD(t){return Yk[t]}function ea(t){return{fieldPath:t.canonicalString()}}function ta(t){return qt.fromServerFormat(t.fieldPath)}function oS(t){return t instanceof Pt?function(r){if(r.op==="=="){if(fw(r.value))return{unaryFilter:{field:ea(r.field),op:"IS_NAN"}};if(hw(r.value))return{unaryFilter:{field:ea(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(fw(r.value))return{unaryFilter:{field:ea(r.field),op:"IS_NOT_NAN"}};if(hw(r.value))return{unaryFilter:{field:ea(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ea(r.field),op:lD(r.op),value:r.value}}}(t):t instanceof Vn?function(r){const n=r.getFilters().map(s=>oS(s));return n.length===1?n[0]:{compositeFilter:{op:uD(r.op),filters:n}}}(t):Ae(54877,{filter:t})}function cD(t){const e=[];return t.fields.forEach(r=>e.push(r.canonicalString())),{fieldPaths:e}}function sS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class dD{constructor(e){this.wt=e}}function hD(t){const e=oD({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ag(e,e.limit,"L"):e}/**
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
 */class fD{constructor(){this.yn=new pD}addToCollectionParentIndex(e,r){return this.yn.add(r),J.resolve()}getCollectionParents(e,r){return J.resolve(this.yn.getEntries(r))}addFieldIndex(e,r){return J.resolve()}deleteFieldIndex(e,r){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,r){return J.resolve()}getDocumentsMatchingTarget(e,r){return J.resolve(null)}getIndexType(e,r){return J.resolve(0)}getFieldIndexes(e,r){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,r){return J.resolve(to.min())}getMinOffsetFromCollectionGroup(e,r){return J.resolve(to.min())}updateCollectionGroup(e,r,n){return J.resolve()}updateIndexEntries(e,r){return J.resolve()}}class pD{constructor(){this.index={}}add(e){const r=e.lastSegment(),n=e.popLast(),s=this.index[r]||new xt(dt.comparator),a=!s.has(n);return this.index[r]=s.add(n),a}has(e){const r=e.lastSegment(),n=e.popLast(),s=this.index[r];return s&&s.has(n)}getEntries(e){return(this.index[e]||new xt(dt.comparator)).toArray()}}/**
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
 */const Aw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},aS=41943040;class yr{static withCacheSize(e){return new yr(e,yr.DEFAULT_COLLECTION_PERCENTILE,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,r,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=n}}/**
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
 */yr.DEFAULT_COLLECTION_PERCENTILE=10,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yr.DEFAULT=new yr(aS,yr.DEFAULT_COLLECTION_PERCENTILE,yr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yr.DISABLED=new yr(-1,0,0);/**
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
 */const Pw="LruGarbageCollector",gD=1048576;function Rw([t,e],[r,n]){const s=Ve(t,r);return s===0?Ve(e,n):s}class mD{constructor(e){this.cr=e,this.buffer=new xt(Rw),this.lr=0}hr(){return++this.lr}Pr(e){const r=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(r);else{const n=this.buffer.last();Rw(r,n)<0&&(this.buffer=this.buffer.delete(n).add(r))}}get maxValue(){return this.buffer.last()[0]}}class vD{constructor(e,r,n){this.garbageCollector=e,this.asyncQueue=r,this.localStore=n,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){he(Pw,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(r){Ra(r)?he(Pw,"Ignoring IndexedDB error during garbage collection: ",r):await Pa(r)}await this.Ir(3e5)})}}class yD{constructor(e,r){this.Er=e,this.params=r}calculateTargetCount(e,r){return this.Er.dr(e).next(n=>Math.floor(r/100*n))}nthSequenceNumber(e,r){if(r===0)return J.resolve(ih.le);const n=new mD(r);return this.Er.forEachTarget(e,s=>n.Pr(s.sequenceNumber)).next(()=>this.Er.Ar(e,s=>n.Pr(s))).next(()=>n.maxValue)}removeTargets(e,r,n){return this.Er.removeTargets(e,r,n)}removeOrphanedDocuments(e,r){return this.Er.removeOrphanedDocuments(e,r)}collect(e,r){return this.params.cacheSizeCollectionThreshold===-1?(he("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(Aw)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(he("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Aw):this.Rr(e,r))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,r){let n,s,a,u,d,f,g;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(he("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,u=Date.now(),this.nthSequenceNumber(e,s))).next(_=>(n=_,d=Date.now(),this.removeTargets(e,n,r))).next(_=>(a=_,f=Date.now(),this.removeOrphanedDocuments(e,n))).next(_=>(g=Date.now(),Js()<=Ue.DEBUG&&he("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-y}ms
	Determined least recently used ${s} in `+(d-u)+`ms
	Removed ${a} targets in `+(f-d)+`ms
	Removed ${_} documents in `+(g-f)+`ms
Total Duration: ${g-y}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:a,documentsRemoved:_})))}}function _D(t,e){return new yD(t,e)}/**
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
 */class wD{constructor(){this.changes=new rs(e=>e.toString(),(e,r)=>e.isEqual(r)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,r){this.assertNotApplied(),this.changes.set(e,rr.newInvalidDocument(e).setReadTime(r))}getEntry(e,r){this.assertNotApplied();const n=this.changes.get(r);return n!==void 0?J.resolve(n):this.getFromCache(e,r)}getEntries(e,r){return this.getAllFromCache(e,r)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ED{constructor(e,r){this.overlayedDocument=e,this.mutatedFields=r}}/**
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
 */class ID{constructor(e,r,n,s){this.remoteDocumentCache=e,this.mutationQueue=r,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,r){let n=null;return this.documentOverlayCache.getOverlay(e,r).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,r))).next(s=>(n!==null&&$l(n.mutation,s,pn.empty(),Rt.now()),s))}getDocuments(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.getLocalViewOfDocuments(e,n,$e()).next(()=>n))}getLocalViewOfDocuments(e,r,n=$e()){const s=zo();return this.populateOverlays(e,s,r).next(()=>this.computeViews(e,r,s,n).next(a=>{let u=Ll();return a.forEach((d,f)=>{u=u.insert(d,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,r){const n=zo();return this.populateOverlays(e,n,r).next(()=>this.computeViews(e,r,n,$e()))}populateOverlays(e,r,n){const s=[];return n.forEach(a=>{r.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,d)=>{r.set(u,d)})})}computeViews(e,r,n,s){let a=hi();const u=jl(),d=function(){return jl()}();return r.forEach((f,g)=>{const y=n.get(g.key);s.has(g.key)&&(y===void 0||y.mutation instanceof ns)?a=a.insert(g.key,g):y!==void 0?(u.set(g.key,y.mutation.getFieldMask()),$l(y.mutation,g,y.mutation.getFieldMask(),Rt.now())):u.set(g.key,pn.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((g,y)=>u.set(g,y)),r.forEach((g,y)=>{var _;return d.set(g,new ED(y,(_=u.get(g))!==null&&_!==void 0?_:null))}),d))}recalculateAndSaveOverlays(e,r){const n=jl();let s=new pt((u,d)=>u-d),a=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,r).next(u=>{for(const d of u)d.keys().forEach(f=>{const g=r.get(f);if(g===null)return;let y=n.get(f)||pn.empty();y=d.applyToLocalView(g,y),n.set(f,y);const _=(s.get(d.batchId)||$e()).add(f);s=s.insert(d.batchId,_)})}).next(()=>{const u=[],d=s.getReverseIterator();for(;d.hasNext();){const f=d.getNext(),g=f.key,y=f.value,_=$I();y.forEach(w=>{if(!a.has(w)){const I=KI(r.get(w),n.get(w));I!==null&&_.set(w,I),a=a.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,g,_))}return J.waitFor(u)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,r){return this.remoteDocumentCache.getEntries(e,r).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,r,n,s){return function(u){return Se.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(r)?this.getDocumentsMatchingDocumentQuery(e,r.path):bk(r)?this.getDocumentsMatchingCollectionGroupQuery(e,r,n,s):this.getDocumentsMatchingCollectionQuery(e,r,n,s)}getNextDocuments(e,r,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,r,n,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,r,n.largestBatchId,s-a.size):J.resolve(zo());let d=Jl,f=a;return u.next(g=>J.forEach(g,(y,_)=>(d<_.largestBatchId&&(d=_.largestBatchId),a.get(y)?J.resolve():this.remoteDocumentCache.getEntry(e,y).next(w=>{f=f.insert(y,w)}))).next(()=>this.populateOverlays(e,g,a)).next(()=>this.computeViews(e,f,g,$e())).next(y=>({batchId:d,changes:jI(y)})))})}getDocumentsMatchingDocumentQuery(e,r){return this.getDocument(e,new Se(r)).next(n=>{let s=Ll();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,r,n,s){const a=r.collectionGroup;let u=Ll();return this.indexManager.getCollectionParents(e,a).next(d=>J.forEach(d,f=>{const g=function(_,w){return new ah(w,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(r,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,n,s).next(y=>{y.forEach((_,w)=>{u=u.insert(_,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,r,n,s){let a;return this.documentOverlayCache.getOverlaysForCollection(e,r.path,n.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,r,n,a,s))).next(u=>{a.forEach((f,g)=>{const y=g.getKey();u.get(y)===null&&(u=u.insert(y,rr.newInvalidDocument(y)))});let d=Ll();return u.forEach((f,g)=>{const y=a.get(f);y!==void 0&&$l(y.mutation,g,pn.empty(),Rt.now()),uh(r,g)&&(d=d.insert(f,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,r){return J.resolve(this.Fr.get(r))}saveBundleMetadata(e,r){return this.Fr.set(r.id,function(s){return{id:s.id,version:s.version,createTime:Ln(s.createTime)}}(r)),J.resolve()}getNamedQuery(e,r){return J.resolve(this.Mr.get(r))}saveNamedQuery(e,r){return this.Mr.set(r.name,function(s){return{name:s.name,query:hD(s.bundledQuery),readTime:Ln(s.readTime)}}(r)),J.resolve()}}/**
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
 */class TD{constructor(){this.overlays=new pt(Se.comparator),this.Or=new Map}getOverlay(e,r){return J.resolve(this.overlays.get(r))}getOverlays(e,r){const n=zo();return J.forEach(r,s=>this.getOverlay(e,s).next(a=>{a!==null&&n.set(s,a)})).next(()=>n)}saveOverlays(e,r,n){return n.forEach((s,a)=>{this.St(e,r,a)}),J.resolve()}removeOverlaysForBatchId(e,r,n){const s=this.Or.get(n);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.Or.delete(n)),J.resolve()}getOverlaysForCollection(e,r,n){const s=zo(),a=r.length+1,u=new Se(r.child("")),d=this.overlays.getIteratorFrom(u);for(;d.hasNext();){const f=d.getNext().value,g=f.getKey();if(!r.isPrefixOf(g.path))break;g.path.length===a&&f.largestBatchId>n&&s.set(f.getKey(),f)}return J.resolve(s)}getOverlaysForCollectionGroup(e,r,n,s){let a=new pt((g,y)=>g-y);const u=this.overlays.getIterator();for(;u.hasNext();){const g=u.getNext().value;if(g.getKey().getCollectionGroup()===r&&g.largestBatchId>n){let y=a.get(g.largestBatchId);y===null&&(y=zo(),a=a.insert(g.largestBatchId,y)),y.set(g.getKey(),g)}}const d=zo(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((g,y)=>d.set(g,y)),!(d.size()>=s)););return J.resolve(d)}St(e,r,n){const s=this.overlays.get(n.key);if(s!==null){const u=this.Or.get(s.largestBatchId).delete(n.key);this.Or.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new zk(r,n));let a=this.Or.get(r);a===void 0&&(a=$e(),this.Or.set(r,a)),this.Or.set(r,a.add(n.key))}}/**
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
 */class bD{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,r){return this.sessionToken=r,J.resolve()}}/**
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
 */class Zg{constructor(){this.Nr=new xt(Vt.Br),this.Lr=new xt(Vt.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,r){const n=new Vt(e,r);this.Nr=this.Nr.add(n),this.Lr=this.Lr.add(n)}qr(e,r){e.forEach(n=>this.addReference(n,r))}removeReference(e,r){this.Qr(new Vt(e,r))}$r(e,r){e.forEach(n=>this.removeReference(n,r))}Ur(e){const r=new Se(new dt([])),n=new Vt(r,e),s=new Vt(r,e+1),a=[];return this.Lr.forEachInRange([n,s],u=>{this.Qr(u),a.push(u.key)}),a}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const r=new Se(new dt([])),n=new Vt(r,e),s=new Vt(r,e+1);let a=$e();return this.Lr.forEachInRange([n,s],u=>{a=a.add(u.key)}),a}containsKey(e){const r=new Vt(e,0),n=this.Nr.firstAfterOrEqual(r);return n!==null&&e.isEqual(n.key)}}class Vt{constructor(e,r){this.key=e,this.Gr=r}static Br(e,r){return Se.comparator(e.key,r.key)||Ve(e.Gr,r.Gr)}static kr(e,r){return Ve(e.Gr,r.Gr)||Se.comparator(e.key,r.key)}}/**
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
 */class CD{constructor(e,r){this.indexManager=e,this.referenceDelegate=r,this.mutationQueue=[],this.Jn=1,this.zr=new xt(Vt.Br)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,r,n,s){const a=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new $k(a,r,n,s);this.mutationQueue.push(u);for(const d of s)this.zr=this.zr.add(new Vt(d.key,a)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(u)}lookupMutationBatch(e,r){return J.resolve(this.jr(r))}getNextMutationBatchAfterBatchId(e,r){const n=r+1,s=this.Hr(n),a=s<0?0:s;return J.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?Wg:this.Jn-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,r){const n=new Vt(r,0),s=new Vt(r,Number.POSITIVE_INFINITY),a=[];return this.zr.forEachInRange([n,s],u=>{const d=this.jr(u.Gr);a.push(d)}),J.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,r){let n=new xt(Ve);return r.forEach(s=>{const a=new Vt(s,0),u=new Vt(s,Number.POSITIVE_INFINITY);this.zr.forEachInRange([a,u],d=>{n=n.add(d.Gr)})}),J.resolve(this.Jr(n))}getAllMutationBatchesAffectingQuery(e,r){const n=r.path,s=n.length+1;let a=n;Se.isDocumentKey(a)||(a=a.child(""));const u=new Vt(new Se(a),0);let d=new xt(Ve);return this.zr.forEachWhile(f=>{const g=f.key.path;return!!n.isPrefixOf(g)&&(g.length===s&&(d=d.add(f.Gr)),!0)},u),J.resolve(this.Jr(d))}Jr(e){const r=[];return e.forEach(n=>{const s=this.jr(n);s!==null&&r.push(s)}),r}removeMutationBatch(e,r){Ze(this.Yr(r.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.zr;return J.forEach(r.mutations,s=>{const a=new Vt(s.key,r.batchId);return n=n.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.zr=n})}Xn(e){}containsKey(e,r){const n=new Vt(r,0),s=this.zr.firstAfterOrEqual(n);return J.resolve(r.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Yr(e,r){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const r=this.Hr(e);return r<0||r>=this.mutationQueue.length?null:this.mutationQueue[r]}}/**
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
 */class AD{constructor(e){this.Zr=e,this.docs=function(){return new pt(Se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,r){const n=r.key,s=this.docs.get(n),a=s?s.size:0,u=this.Zr(r);return this.docs=this.docs.insert(n,{document:r.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const r=this.docs.get(e);r&&(this.docs=this.docs.remove(e),this.size-=r.size)}getEntry(e,r){const n=this.docs.get(r);return J.resolve(n?n.document.mutableCopy():rr.newInvalidDocument(r))}getEntries(e,r){let n=hi();return r.forEach(s=>{const a=this.docs.get(s);n=n.insert(s,a?a.document.mutableCopy():rr.newInvalidDocument(s))}),J.resolve(n)}getDocumentsMatchingQuery(e,r,n,s){let a=hi();const u=r.path,d=new Se(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(d);for(;f.hasNext();){const{key:g,value:{document:y}}=f.getNext();if(!u.isPrefixOf(g.path))break;g.path.length>u.length+1||rk(tk(y),n)<=0||(s.has(y.key)||uh(r,y))&&(a=a.insert(y.key,y.mutableCopy()))}return J.resolve(a)}getAllFromCollectionGroup(e,r,n,s){Ae(9500)}Xr(e,r){return J.forEach(this.docs,n=>r(n))}newChangeBuffer(e){return new PD(this)}getSize(e){return J.resolve(this.size)}}class PD extends wD{constructor(e){super(),this.vr=e}applyChanges(e){const r=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?r.push(this.vr.addEntry(e,s)):this.vr.removeEntry(n)}),J.waitFor(r)}getFromCache(e,r){return this.vr.getEntry(e,r)}getAllFromCache(e,r){return this.vr.getEntries(e,r)}}/**
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
 */class RD{constructor(e){this.persistence=e,this.ei=new rs(r=>qg(r),Kg),this.lastRemoteSnapshotVersion=ke.min(),this.highestTargetId=0,this.ti=0,this.ni=new Zg,this.targetCount=0,this.ri=va.rr()}forEachTarget(e,r){return this.ei.forEach((n,s)=>r(s)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,r,n){return n&&(this.lastRemoteSnapshotVersion=n),r>this.ti&&(this.ti=r),J.resolve()}ar(e){this.ei.set(e.target,e);const r=e.targetId;r>this.highestTargetId&&(this.ri=new va(r),this.highestTargetId=r),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,r){return this.ar(r),this.targetCount+=1,J.resolve()}updateTargetData(e,r){return this.ar(r),J.resolve()}removeTargetData(e,r){return this.ei.delete(r.target),this.ni.Ur(r.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,r,n){let s=0;const a=[];return this.ei.forEach((u,d)=>{d.sequenceNumber<=r&&n.get(d.targetId)===null&&(this.ei.delete(u),a.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),J.waitFor(a).next(()=>s)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,r){const n=this.ei.get(r)||null;return J.resolve(n)}addMatchingKeys(e,r,n){return this.ni.qr(r,n),J.resolve()}removeMatchingKeys(e,r,n){this.ni.$r(r,n);const s=this.persistence.referenceDelegate,a=[];return s&&r.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),J.waitFor(a)}removeMatchingKeysForTargetId(e,r){return this.ni.Ur(r),J.resolve()}getMatchingKeysForTargetId(e,r){const n=this.ni.Wr(r);return J.resolve(n)}containsKey(e,r){return J.resolve(this.ni.containsKey(r))}}/**
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
 */class lS{constructor(e,r){this.ii={},this.overlays={},this.si=new ih(0),this.oi=!1,this.oi=!0,this._i=new bD,this.referenceDelegate=e(this),this.ai=new RD(this),this.indexManager=new fD,this.remoteDocumentCache=function(s){return new AD(s)}(n=>this.referenceDelegate.ui(n)),this.serializer=new dD(r),this.ci=new SD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let r=this.overlays[e.toKey()];return r||(r=new TD,this.overlays[e.toKey()]=r),r}getMutationQueue(e,r){let n=this.ii[e.toKey()];return n||(n=new CD(r,this.referenceDelegate),this.ii[e.toKey()]=n),n}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,r,n){he("MemoryPersistence","Starting transaction:",e);const s=new xD(this.si.next());return this.referenceDelegate.li(),n(s).next(a=>this.referenceDelegate.hi(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Pi(e,r){return J.or(Object.values(this.ii).map(n=>()=>n.containsKey(e,r)))}}class xD extends ik{constructor(e){super(),this.currentSequenceNumber=e}}class em{constructor(e){this.persistence=e,this.Ti=new Zg,this.Ii=null}static Ei(e){return new em(e)}get di(){if(this.Ii)return this.Ii;throw Ae(60996)}addReference(e,r,n){return this.Ti.addReference(n,r),this.di.delete(n.toString()),J.resolve()}removeReference(e,r,n){return this.Ti.removeReference(n,r),this.di.add(n.toString()),J.resolve()}markPotentiallyOrphaned(e,r){return this.di.add(r.toString()),J.resolve()}removeTarget(e,r){this.Ti.Ur(r.targetId).forEach(s=>this.di.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,r.targetId).next(s=>{s.forEach(a=>this.di.add(a.toString()))}).next(()=>n.removeTargetData(e,r))}li(){this.Ii=new Set}hi(e){const r=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,n=>{const s=Se.fromPath(n);return this.Ai(e,s).next(a=>{a||r.removeEntry(s,ke.min())})}).next(()=>(this.Ii=null,r.apply(e)))}updateLimboDocument(e,r){return this.Ai(e,r).next(n=>{n?this.di.delete(r.toString()):this.di.add(r.toString())})}ui(e){return 0}Ai(e,r){return J.or([()=>J.resolve(this.Ti.containsKey(r)),()=>this.persistence.getTargetCache().containsKey(e,r),()=>this.persistence.Pi(e,r)])}}class Nd{constructor(e,r){this.persistence=e,this.Ri=new rs(n=>ak(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=_D(this,r)}static Ei(e,r){return new Nd(e,r)}li(){}hi(e){return J.resolve()}forEachTarget(e,r){return this.persistence.getTargetCache().forEachTarget(e,r)}dr(e){const r=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>r.next(s=>n+s))}Vr(e){let r=0;return this.Ar(e,n=>{r++}).next(()=>r)}Ar(e,r){return J.forEach(this.Ri,(n,s)=>this.gr(e,n,s).next(a=>a?J.resolve():r(s)))}removeTargets(e,r,n){return this.persistence.getTargetCache().removeTargets(e,r,n)}removeOrphanedDocuments(e,r){let n=0;const s=this.persistence.getRemoteDocumentCache(),a=s.newChangeBuffer();return s.Xr(e,u=>this.gr(e,u,r).next(d=>{d||(n++,a.removeEntry(u,ke.min()))})).next(()=>a.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,r){return this.Ri.set(r,e.currentSequenceNumber),J.resolve()}removeTarget(e,r){const n=r.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,r,n){return this.Ri.set(n,e.currentSequenceNumber),J.resolve()}removeReference(e,r,n){return this.Ri.set(n,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,r){return this.Ri.set(r,e.currentSequenceNumber),J.resolve()}ui(e){let r=e.key.toString().length;return e.isFoundDocument()&&(r+=sd(e.data.value)),r}gr(e,r,n){return J.or([()=>this.persistence.Pi(e,r),()=>this.persistence.getTargetCache().containsKey(e,r),()=>{const s=this.Ri.get(r);return J.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tm{constructor(e,r,n,s){this.targetId=e,this.fromCache=r,this.ls=n,this.hs=s}static Ps(e,r){let n=$e(),s=$e();for(const a of r.docChanges)switch(a.type){case 0:n=n.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new tm(e,r.fromCache,n,s)}}/**
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
 */class kD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DD{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return cP()?8:ok(nr())>0?6:4}()}initialize(e,r){this.As=e,this.indexManager=r,this.Ts=!0}getDocumentsMatchingQuery(e,r,n,s){const a={result:null};return this.Rs(e,r).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.Vs(e,r,s,n).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new kD;return this.fs(e,r,u).next(d=>{if(a.result=d,this.Is)return this.gs(e,r,u,d.size)})}).next(()=>a.result)}gs(e,r,n,s){return n.documentReadCount<this.Es?(Js()<=Ue.DEBUG&&he("QueryEngine","SDK will not create cache indexes for query:",Zs(r),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),J.resolve()):(Js()<=Ue.DEBUG&&he("QueryEngine","Query:",Zs(r),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Js()<=Ue.DEBUG&&he("QueryEngine","The SDK decides to create cache indexes for query:",Zs(r),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(r))):J.resolve())}Rs(e,r){if(vw(r))return J.resolve(null);let n=On(r);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(r.limit!==null&&s===1&&(r=ag(r,null,"F"),n=On(r)),this.indexManager.getDocumentsMatchingTarget(e,n).next(a=>{const u=$e(...a);return this.As.getDocuments(e,u).next(d=>this.indexManager.getMinOffset(e,n).next(f=>{const g=this.ps(r,d);return this.ys(r,g,u,f.readTime)?this.Rs(e,ag(r,null,"F")):this.ws(e,g,r,f)}))})))}Vs(e,r,n,s){return vw(r)||s.isEqual(ke.min())?J.resolve(null):this.As.getDocuments(e,n).next(a=>{const u=this.ps(r,a);return this.ys(r,u,n,s)?J.resolve(null):(Js()<=Ue.DEBUG&&he("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zs(r)),this.ws(e,u,r,ek(s,Jl)).next(d=>d))})}ps(e,r){let n=new xt(BI(e));return r.forEach((s,a)=>{uh(e,a)&&(n=n.add(a))}),n}ys(e,r,n,s){if(e.limit===null)return!1;if(n.size!==r.size)return!0;const a=e.limitType==="F"?r.last():r.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}fs(e,r,n){return Js()<=Ue.DEBUG&&he("QueryEngine","Using full collection scan to execute query:",Zs(r)),this.As.getDocumentsMatchingQuery(e,r,to.min(),n)}ws(e,r,n,s){return this.As.getDocumentsMatchingQuery(e,n,s).next(a=>(r.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="LocalStore",ND=3e8;class OD{constructor(e,r,n,s){this.persistence=e,this.bs=r,this.serializer=s,this.Ss=new pt(Ve),this.Ds=new rs(a=>qg(a),Kg),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(n)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ID(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",r=>e.collect(r,this.Ss))}}function LD(t,e,r,n){return new OD(t,e,r,n)}async function uS(t,e){const r=De(t);return await r.persistence.runTransaction("Handle user change","readonly",n=>{let s;return r.mutationQueue.getAllMutationBatches(n).next(a=>(s=a,r.Fs(e),r.mutationQueue.getAllMutationBatches(n))).next(a=>{const u=[],d=[];let f=$e();for(const g of s){u.push(g.batchId);for(const y of g.mutations)f=f.add(y.key)}for(const g of a){d.push(g.batchId);for(const y of g.mutations)f=f.add(y.key)}return r.localDocuments.getDocuments(n,f).next(g=>({Ms:g,removedBatchIds:u,addedBatchIds:d}))})})}function MD(t,e){const r=De(t);return r.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),a=r.Cs.newChangeBuffer({trackRemovals:!0});return function(d,f,g,y){const _=g.batch,w=_.keys();let I=J.resolve();return w.forEach(b=>{I=I.next(()=>y.getEntry(f,b)).next(k=>{const D=g.docVersions.get(b);Ze(D!==null,48541),k.version.compareTo(D)<0&&(_.applyToRemoteDocument(k,g),k.isValidDocument()&&(k.setReadTime(g.commitVersion),y.addEntry(k)))})}),I.next(()=>d.mutationQueue.removeMutationBatch(f,_))}(r,n,e,a).next(()=>a.apply(n)).next(()=>r.mutationQueue.performConsistencyCheck(n)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(d){let f=$e();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(f=f.add(d.batch.mutations[g].key));return f}(e))).next(()=>r.localDocuments.getDocuments(n,s))})}function cS(t){const e=De(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",r=>e.ai.getLastRemoteSnapshotVersion(r))}function VD(t,e){const r=De(t),n=e.snapshotVersion;let s=r.Ss;return r.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=r.Cs.newChangeBuffer({trackRemovals:!0});s=r.Ss;const d=[];e.targetChanges.forEach((y,_)=>{const w=s.get(_);if(!w)return;d.push(r.ai.removeMatchingKeys(a,y.removedDocuments,_).next(()=>r.ai.addMatchingKeys(a,y.addedDocuments,_)));let I=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(_)!==null?I=I.withResumeToken(Qt.EMPTY_BYTE_STRING,ke.min()).withLastLimboFreeSnapshotVersion(ke.min()):y.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(y.resumeToken,n)),s=s.insert(_,I),function(k,D,F){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=ND?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(w,I,y)&&d.push(r.ai.updateTargetData(a,I))});let f=hi(),g=$e();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&d.push(r.persistence.referenceDelegate.updateLimboDocument(a,y))}),d.push(FD(a,u,e.documentUpdates).next(y=>{f=y.xs,g=y.Os})),!n.isEqual(ke.min())){const y=r.ai.getLastRemoteSnapshotVersion(a).next(_=>r.ai.setTargetsMetadata(a,a.currentSequenceNumber,n));d.push(y)}return J.waitFor(d).next(()=>u.apply(a)).next(()=>r.localDocuments.getLocalViewOfDocuments(a,f,g)).next(()=>f)}).then(a=>(r.Ss=s,a))}function FD(t,e,r){let n=$e(),s=$e();return r.forEach(a=>n=n.add(a)),e.getEntries(t,n).next(a=>{let u=hi();return r.forEach((d,f)=>{const g=a.get(d);f.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),f.isNoDocument()&&f.version.isEqual(ke.min())?(e.removeEntry(d,f.readTime),u=u.insert(d,f)):!g.isValidDocument()||f.version.compareTo(g.version)>0||f.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(f),u=u.insert(d,f)):he(rm,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",f.version)}),{xs:u,Os:s}})}function BD(t,e){const r=De(t);return r.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Wg),r.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function UD(t,e){const r=De(t);return r.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return r.ai.getTargetData(n,e).next(a=>a?(s=a,J.resolve(s)):r.ai.allocateTargetId(n).next(u=>(s=new Wi(e,u,"TargetPurposeListen",n.currentSequenceNumber),r.ai.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=r.Ss.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(r.Ss=r.Ss.insert(n.targetId,n),r.Ds.set(e,n.targetId)),n})}async function hg(t,e,r){const n=De(t),s=n.Ss.get(e),a=r?"readwrite":"readwrite-primary";try{r||await n.persistence.runTransaction("Release target",a,u=>n.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!Ra(u))throw u;he(rm,`Failed to update sequence numbers for target ${e}: ${u}`)}n.Ss=n.Ss.remove(e),n.Ds.delete(s.target)}function xw(t,e,r){const n=De(t);let s=ke.min(),a=$e();return n.persistence.runTransaction("Execute query","readwrite",u=>function(f,g,y){const _=De(f),w=_.Ds.get(y);return w!==void 0?J.resolve(_.Ss.get(w)):_.ai.getTargetData(g,y)}(n,u,On(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,n.ai.getMatchingKeysForTargetId(u,d.targetId).next(f=>{a=f})}).next(()=>n.bs.getDocumentsMatchingQuery(u,e,r?s:ke.min(),r?a:$e())).next(d=>(jD(n,Ak(e),d),{documents:d,Ns:a})))}function jD(t,e,r){let n=t.vs.get(e)||ke.min();r.forEach((s,a)=>{a.readTime.compareTo(n)>0&&(n=a.readTime)}),t.vs.set(e,n)}class kw{constructor(){this.activeTargetIds=Nk()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $D{constructor(){this.So=new kw,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,r,n){}addLocalQueryTarget(e,r=!0){return r&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,r,n){this.Do[e]=r}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new kw,Promise.resolve()}handleUserChange(e,r,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zD{vo(e){}shutdown(){}}/**
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
 */const Dw="ConnectivityMonitor";class Nw{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){he(Dw,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){he(Dw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Wc=null;function fg(){return Wc===null?Wc=function(){return 268435456+Math.round(2147483648*Math.random())}():Wc++,"0x"+Wc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp="RestConnection",WD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class GD{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Lo=r+"://"+e.host,this.ko=`projects/${n}/databases/${s}`,this.qo=this.databaseId.database===Cd?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Qo(e,r,n,s,a){const u=fg(),d=this.$o(e,r.toUriEncodedString());he(wp,`Sending RPC '${e}' ${u}:`,d,n);const f={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(f,s,a),this.Ko(e,d,f,n).then(g=>(he(wp,`Received RPC '${e}' ${u}: `,g),g),g=>{throw fa(wp,`RPC '${e}' ${u} failed with error: `,g,"url: ",d,"request:",n),g})}Wo(e,r,n,s,a,u){return this.Qo(e,r,n,s,a)}Uo(e,r,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Aa}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>e[a]=s),n&&n.headers.forEach((s,a)=>e[a]=s)}$o(e,r){const n=WD[e];return`${this.Lo}/v1/${r}:${n}`}terminate(){}}/**
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
 */class HD{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const er="WebChannelConnection";class qD extends GD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,r,n,s){const a=fg();return new Promise((u,d)=>{const f=new hI;f.setWithCredentials(!0),f.listenOnce(fI.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case od.NO_ERROR:const y=f.getResponseJson();he(er,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case od.TIMEOUT:he(er,`RPC '${e}' ${a} timed out`),d(new _e(re.DEADLINE_EXCEEDED,"Request time out"));break;case od.HTTP_ERROR:const _=f.getStatus();if(he(er,`RPC '${e}' ${a} failed with status:`,_,"response text:",f.getResponseText()),_>0){let w=f.getResponseJson();Array.isArray(w)&&(w=w[0]);const I=w==null?void 0:w.error;if(I&&I.status&&I.message){const b=function(D){const F=D.toLowerCase().replace(/_/g,"-");return Object.values(re).indexOf(F)>=0?F:re.UNKNOWN}(I.status);d(new _e(b,I.message))}else d(new _e(re.UNKNOWN,"Server responded with status "+f.getStatus()))}else d(new _e(re.UNAVAILABLE,"Connection failed."));break;default:Ae(9055,{s_:e,streamId:a,o_:f.getLastErrorCode(),__:f.getLastError()})}}finally{he(er,`RPC '${e}' ${a} completed.`)}});const g=JSON.stringify(s);he(er,`RPC '${e}' ${a} sending request:`,s),f.send(r,"POST",g,n,15)})}a_(e,r,n){const s=fg(),a=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=mI(),d=gI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Uo(f.initMessageHeaders,r,n),f.encodeInitMessageHeaders=!0;const y=a.join("");he(er,`Creating RPC '${e}' stream ${s}: ${y}`,f);const _=u.createWebChannel(y,f);let w=!1,I=!1;const b=new HD({Go:D=>{I?he(er,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(w||(he(er,`Opening RPC '${e}' stream ${s} transport.`),_.open(),w=!0),he(er,`RPC '${e}' stream ${s} sending:`,D),_.send(D))},zo:()=>_.close()}),k=(D,F,U)=>{D.listen(F,W=>{try{U(W)}catch(q){setTimeout(()=>{throw q},0)}})};return k(_,Ol.EventType.OPEN,()=>{I||(he(er,`RPC '${e}' stream ${s} transport opened.`),b.t_())}),k(_,Ol.EventType.CLOSE,()=>{I||(I=!0,he(er,`RPC '${e}' stream ${s} transport closed`),b.r_())}),k(_,Ol.EventType.ERROR,D=>{I||(I=!0,fa(er,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),b.r_(new _e(re.UNAVAILABLE,"The operation could not be completed")))}),k(_,Ol.EventType.MESSAGE,D=>{var F;if(!I){const U=D.data[0];Ze(!!U,16349);const W=U,q=(W==null?void 0:W.error)||((F=W[0])===null||F===void 0?void 0:F.error);if(q){he(er,`RPC '${e}' stream ${s} received error:`,q);const G=q.status;let X=function(P){const N=Et[P];if(N!==void 0)return XI(N)}(G),R=q.message;X===void 0&&(X=re.INTERNAL,R="Unknown error status: "+G+" with message "+q.message),I=!0,b.r_(new _e(X,R)),_.close()}else he(er,`RPC '${e}' stream ${s} received:`,U),b.i_(U)}}),k(d,pI.STAT_EVENT,D=>{D.stat===tg.PROXY?he(er,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===tg.NOPROXY&&he(er,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.n_()},0),b}}function Ep(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){return new Xk(t,!0)}/**
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
 */class dS{constructor(e,r,n=1e3,s=1.5,a=6e4){this.bi=e,this.timerId=r,this.u_=n,this.c_=s,this.l_=a,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const r=Math.floor(this.h_+this.d_()),n=Math.max(0,Date.now()-this.T_),s=Math.max(0,r-n);s>0&&he("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.h_} ms, delay with jitter: ${r} ms, last attempt: ${n} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,s,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Ow="PersistentStream";class hS{constructor(e,r,n,s,a,u,d,f){this.bi=e,this.R_=n,this.V_=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=d,this.listener=f,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new dS(e,r)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,r){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():r&&r.code===re.RESOURCE_EXHAUSTED?(di(r.toString()),di("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):r&&r.code===re.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(r)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),r=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.m_===r&&this.B_(n,s)},n=>{e(()=>{const s=new _e(re.UNKNOWN,"Fetching auth token failed: "+n.message);return this.L_(s)})})}B_(e,r){const n=this.N_(this.m_);this.stream=this.k_(e,r),this.stream.jo(()=>{n(()=>this.listener.jo())}),this.stream.Jo(()=>{n(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(s=>{n(()=>this.L_(s))}),this.stream.onMessage(s=>{n(()=>++this.p_==1?this.q_(s):this.onNext(s))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return he(Ow,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return r=>{this.bi.enqueueAndForget(()=>this.m_===e?r():(he(Ow,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class KD extends hS{constructor(e,r,n,s,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",r,n,s,u),this.serializer=a}k_(e,r){return this.connection.a_("Listen",e,r)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const r=eD(this.serializer,e),n=function(a){if(!("targetChange"in a))return ke.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?ke.min():u.readTime?Ln(u.readTime):ke.min()}(e);return this.listener.Q_(r,n)}U_(e){const r={};r.database=dg(this.serializer),r.addTarget=function(a,u){let d;const f=u.target;if(d=sg(f)?{documents:nD(a,f)}:{query:iD(a,f).gt},d.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){d.resumeToken=eS(a,u.resumeToken);const g=lg(a,u.expectedCount);g!==null&&(d.expectedCount=g)}else if(u.snapshotVersion.compareTo(ke.min())>0){d.readTime=Dd(a,u.snapshotVersion.toTimestamp());const g=lg(a,u.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const n=sD(this.serializer,e);n&&(r.labels=n),this.F_(r)}K_(e){const r={};r.database=dg(this.serializer),r.removeTarget=e,this.F_(r)}}class QD extends hS{constructor(e,r,n,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",r,n,s,u),this.serializer=a}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,r){return this.connection.a_("Write",e,r)}q_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const r=rD(e.writeResults,e.commitTime),n=Ln(e.commitTime);return this.listener.j_(n,r)}H_(){const e={};e.database=dg(this.serializer),this.F_(e)}G_(e){const r={streamToken:this.lastStreamToken,writes:e.map(n=>tD(this.serializer,n))};this.F_(r)}}/**
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
 */class YD{}class XD extends YD{constructor(e,r,n,s){super(),this.authCredentials=e,this.appCheckCredentials=r,this.connection=n,this.serializer=s,this.J_=!1}Y_(){if(this.J_)throw new _e(re.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,r,n,s){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Qo(e,ug(r,n),s,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new _e(re.UNKNOWN,a.toString())})}Wo(e,r,n,s,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,d])=>this.connection.Wo(e,ug(r,n),s,u,d,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===re.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new _e(re.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class JD{constructor(e,r){this.asyncQueue=e,this.onlineStateHandler=r,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const r=`Could not reach Cloud Firestore backend. ${e}
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
 */const Jo="RemoteStore";class ZD{constructor(e,r,n,s,a){this.localStore=e,this.datastore=r,this.asyncQueue=n,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=a,this.ca.vo(u=>{n.enqueueAndForget(async()=>{is(this)&&(he(Jo,"Restarting streams for network reachability change."),await async function(f){const g=De(f);g.aa.add(4),await yu(g),g.la.set("Unknown"),g.aa.delete(4),await ph(g)}(this))})}),this.la=new JD(n,s)}}async function ph(t){if(is(t))for(const e of t.ua)await e(!0)}async function yu(t){for(const e of t.ua)await e(!1)}function fS(t,e){const r=De(t);r._a.has(e.targetId)||(r._a.set(e.targetId,e),sm(r)?om(r):xa(r).b_()&&im(r,e))}function nm(t,e){const r=De(t),n=xa(r);r._a.delete(e),n.b_()&&pS(r,e),r._a.size===0&&(n.b_()?n.v_():is(r)&&r.la.set("Unknown"))}function im(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ke.min())>0){const r=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(r)}xa(t).U_(e)}function pS(t,e){t.ha.Ke(e),xa(t).K_(e)}function om(t){t.ha=new qk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),xa(t).start(),t.la.ta()}function sm(t){return is(t)&&!xa(t).w_()&&t._a.size>0}function is(t){return De(t).aa.size===0}function gS(t){t.ha=void 0}async function eN(t){t.la.set("Online")}async function tN(t){t._a.forEach((e,r)=>{im(t,e)})}async function rN(t,e){gS(t),sm(t)?(t.la.ia(e),om(t)):t.la.set("Unknown")}async function nN(t,e,r){if(t.la.set("Online"),e instanceof ZI&&e.state===2&&e.cause)try{await async function(s,a){const u=a.cause;for(const d of a.targetIds)s._a.has(d)&&(await s.remoteSyncer.rejectListen(d,u),s._a.delete(d),s.ha.removeTarget(d))}(t,e)}catch(n){he(Jo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Od(t,n)}else if(e instanceof ud?t.ha.Xe(e):e instanceof JI?t.ha.ot(e):t.ha.nt(e),!r.isEqual(ke.min()))try{const n=await cS(t.localStore);r.compareTo(n)>=0&&await function(a,u){const d=a.ha.It(u);return d.targetChanges.forEach((f,g)=>{if(f.resumeToken.approximateByteSize()>0){const y=a._a.get(g);y&&a._a.set(g,y.withResumeToken(f.resumeToken,u))}}),d.targetMismatches.forEach((f,g)=>{const y=a._a.get(f);if(!y)return;a._a.set(f,y.withResumeToken(Qt.EMPTY_BYTE_STRING,y.snapshotVersion)),pS(a,f);const _=new Wi(y.target,f,g,y.sequenceNumber);im(a,_)}),a.remoteSyncer.applyRemoteEvent(d)}(t,r)}catch(n){he(Jo,"Failed to raise snapshot:",n),await Od(t,n)}}async function Od(t,e,r){if(!Ra(e))throw e;t.aa.add(1),await yu(t),t.la.set("Offline"),r||(r=()=>cS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{he(Jo,"Retrying IndexedDB access"),await r(),t.aa.delete(1),await ph(t)})}function mS(t,e){return e().catch(r=>Od(t,r,e))}async function gh(t){const e=De(t),r=oo(e);let n=e.oa.length>0?e.oa[e.oa.length-1].batchId:Wg;for(;iN(e);)try{const s=await BD(e.localStore,n);if(s===null){e.oa.length===0&&r.v_();break}n=s.batchId,oN(e,s)}catch(s){await Od(e,s)}vS(e)&&yS(e)}function iN(t){return is(t)&&t.oa.length<10}function oN(t,e){t.oa.push(e);const r=oo(t);r.b_()&&r.W_&&r.G_(e.mutations)}function vS(t){return is(t)&&!oo(t).w_()&&t.oa.length>0}function yS(t){oo(t).start()}async function sN(t){oo(t).H_()}async function aN(t){const e=oo(t);for(const r of t.oa)e.G_(r.mutations)}async function lN(t,e,r){const n=t.oa.shift(),s=Yg.from(n,e,r);await mS(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await gh(t)}async function uN(t,e){e&&oo(t).W_&&await async function(n,s){if(function(u){return Gk(u)&&u!==re.ABORTED}(s.code)){const a=n.oa.shift();oo(n).D_(),await mS(n,()=>n.remoteSyncer.rejectFailedWrite(a.batchId,s)),await gh(n)}}(t,e),vS(t)&&yS(t)}async function Lw(t,e){const r=De(t);r.asyncQueue.verifyOperationInProgress(),he(Jo,"RemoteStore received new credentials");const n=is(r);r.aa.add(3),await yu(r),n&&r.la.set("Unknown"),await r.remoteSyncer.handleCredentialChange(e),r.aa.delete(3),await ph(r)}async function cN(t,e){const r=De(t);e?(r.aa.delete(2),await ph(r)):e||(r.aa.add(2),await yu(r),r.la.set("Unknown"))}function xa(t){return t.Pa||(t.Pa=function(r,n,s){const a=De(r);return a.Y_(),new KD(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(t.datastore,t.asyncQueue,{jo:eN.bind(null,t),Jo:tN.bind(null,t),Zo:rN.bind(null,t),Q_:nN.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),sm(t)?om(t):t.la.set("Unknown")):(await t.Pa.stop(),gS(t))})),t.Pa}function oo(t){return t.Ta||(t.Ta=function(r,n,s){const a=De(r);return a.Y_(),new QD(n,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,s)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:sN.bind(null,t),Zo:uN.bind(null,t),z_:aN.bind(null,t),j_:lN.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await gh(t)):(await t.Ta.stop(),t.oa.length>0&&(he(Jo,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class am{constructor(e,r,n,s,a){this.asyncQueue=e,this.timerId=r,this.targetTimeMs=n,this.op=s,this.removalCallback=a,this.deferred=new Yi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,r,n,s,a){const u=Date.now()+n,d=new am(e,r,u,s,a);return d.start(n),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(re.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lm(t,e){if(di("AsyncQueue",`${e}: ${t}`),Ra(t))return new _e(re.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class aa{static emptySet(e){return new aa(e.comparator)}constructor(e){this.comparator=e?(r,n)=>e(r,n)||Se.comparator(r.key,n.key):(r,n)=>Se.comparator(r.key,n.key),this.keyedMap=Ll(),this.sortedSet=new pt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const r=this.keyedMap.get(e);return r?this.sortedSet.indexOf(r):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((r,n)=>(e(r),!1))}add(e){const r=this.delete(e.key);return r.copy(r.keyedMap.insert(e.key,e),r.sortedSet.insert(e,null))}delete(e){const r=this.get(e);return r?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(r)):this}isEqual(e){if(!(e instanceof aa)||this.size!==e.size)return!1;const r=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;r.hasNext();){const s=r.getNext().key,a=n.getNext().key;if(!s.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(r=>{e.push(r.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,r){const n=new aa;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=r,n}}/**
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
 */class Mw{constructor(){this.Ia=new pt(Se.comparator)}track(e){const r=e.doc.key,n=this.Ia.get(r);n?e.type!==0&&n.type===3?this.Ia=this.Ia.insert(r,e):e.type===3&&n.type!==1?this.Ia=this.Ia.insert(r,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.Ia=this.Ia.insert(r,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.Ia=this.Ia.insert(r,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.Ia=this.Ia.remove(r):e.type===1&&n.type===2?this.Ia=this.Ia.insert(r,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.Ia=this.Ia.insert(r,{type:2,doc:e.doc}):Ae(63341,{Vt:e,Ea:n}):this.Ia=this.Ia.insert(r,e)}da(){const e=[];return this.Ia.inorderTraversal((r,n)=>{e.push(n)}),e}}class ya{constructor(e,r,n,s,a,u,d,f,g){this.query=e,this.docs=r,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=d,this.excludesMetadataChanges=f,this.hasCachedResults=g}static fromInitialDocuments(e,r,n,s,a){const u=[];return r.forEach(d=>{u.push({type:0,doc:d})}),new ya(e,r,aa.emptySet(r),u,n,s,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const r=this.docChanges,n=e.docChanges;if(r.length!==n.length)return!1;for(let s=0;s<r.length;s++)if(r[s].type!==n[s].type||!r[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class dN{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class hN{constructor(){this.queries=Vw(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(r,n){const s=De(r),a=s.queries;s.queries=Vw(),a.forEach((u,d)=>{for(const f of d.Ra)f.onError(n)})})(this,new _e(re.ABORTED,"Firestore shutting down"))}}function Vw(){return new rs(t=>FI(t),lh)}async function fN(t,e){const r=De(t);let n=3;const s=e.query;let a=r.queries.get(s);a?!a.Va()&&e.ma()&&(n=2):(a=new dN,n=e.ma()?0:1);try{switch(n){case 0:a.Aa=await r.onListen(s,!0);break;case 1:a.Aa=await r.onListen(s,!1);break;case 2:await r.onFirstRemoteStoreListen(s)}}catch(u){const d=lm(u,`Initialization of query '${Zs(e.query)}' failed`);return void e.onError(d)}r.queries.set(s,a),a.Ra.push(e),e.ga(r.onlineState),a.Aa&&e.pa(a.Aa)&&um(r)}async function pN(t,e){const r=De(t),n=e.query;let s=3;const a=r.queries.get(n);if(a){const u=a.Ra.indexOf(e);u>=0&&(a.Ra.splice(u,1),a.Ra.length===0?s=e.ma()?0:1:!a.Va()&&e.ma()&&(s=2))}switch(s){case 0:return r.queries.delete(n),r.onUnlisten(n,!0);case 1:return r.queries.delete(n),r.onUnlisten(n,!1);case 2:return r.onLastRemoteStoreUnlisten(n);default:return}}function gN(t,e){const r=De(t);let n=!1;for(const s of e){const a=s.query,u=r.queries.get(a);if(u){for(const d of u.Ra)d.pa(s)&&(n=!0);u.Aa=s}}n&&um(r)}function mN(t,e,r){const n=De(t),s=n.queries.get(e);if(s)for(const a of s.Ra)a.onError(r);n.queries.delete(e)}function um(t){t.fa.forEach(e=>{e.next()})}var pg,Fw;(Fw=pg||(pg={})).ya="default",Fw.Cache="cache";class vN{constructor(e,r,n){this.query=e,this.wa=r,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=n||{}}pa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new ya(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let r=!1;return this.ba?this.Da(e)&&(this.wa.next(e),r=!0):this.va(e,this.onlineState)&&(this.Ca(e),r=!0),this.Sa=e,r}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let r=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),r=!0),r}va(e,r){if(!e.fromCache||!this.ma())return!0;const n=r!=="Offline";return(!this.options.Fa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||r==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const r=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!r)&&this.options.includeMetadataChanges===!0}Ca(e){e=ya.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==pg.Cache}}/**
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
 */class _S{constructor(e){this.key=e}}class wS{constructor(e){this.key=e}}class yN{constructor(e,r){this.query=e,this.qa=r,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=$e(),this.mutatedKeys=$e(),this.Ua=BI(e),this.Ka=new aa(this.Ua)}get Wa(){return this.qa}Ga(e,r){const n=r?r.za:new Mw,s=r?r.Ka:this.Ka;let a=r?r.mutatedKeys:this.mutatedKeys,u=s,d=!1;const f=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((y,_)=>{const w=s.get(y),I=uh(this.query,_)?_:null,b=!!w&&this.mutatedKeys.has(w.key),k=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let D=!1;w&&I?w.data.isEqual(I.data)?b!==k&&(n.track({type:3,doc:I}),D=!0):this.ja(w,I)||(n.track({type:2,doc:I}),D=!0,(f&&this.Ua(I,f)>0||g&&this.Ua(I,g)<0)&&(d=!0)):!w&&I?(n.track({type:0,doc:I}),D=!0):w&&!I&&(n.track({type:1,doc:w}),D=!0,(f||g)&&(d=!0)),D&&(I?(u=u.add(I),a=k?a.add(y):a.delete(y)):(u=u.delete(y),a=a.delete(y)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const y=this.query.limitType==="F"?u.last():u.first();u=u.delete(y.key),a=a.delete(y.key),n.track({type:1,doc:y})}return{Ka:u,za:n,ys:d,mutatedKeys:a}}ja(e,r){return e.hasLocalMutations&&r.hasCommittedMutations&&!r.hasLocalMutations}applyChanges(e,r,n,s){const a=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const u=e.za.da();u.sort((y,_)=>function(I,b){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae(20277,{Vt:D})}};return k(I)-k(b)}(y.type,_.type)||this.Ua(y.doc,_.doc)),this.Ha(n),s=s!=null&&s;const d=r&&!s?this.Ja():[],f=this.$a.size===0&&this.current&&!s?1:0,g=f!==this.Qa;return this.Qa=f,u.length!==0||g?{snapshot:new ya(this.query,e.Ka,a,u,e.mutatedKeys,f===0,g,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ya:d}:{Ya:d}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new Mw,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(r=>this.qa=this.qa.add(r)),e.modifiedDocuments.forEach(r=>{}),e.removedDocuments.forEach(r=>this.qa=this.qa.delete(r)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=$e(),this.Ka.forEach(n=>{this.Za(n.key)&&(this.$a=this.$a.add(n.key))});const r=[];return e.forEach(n=>{this.$a.has(n)||r.push(new wS(n))}),this.$a.forEach(n=>{e.has(n)||r.push(new _S(n))}),r}Xa(e){this.qa=e.Ns,this.$a=$e();const r=this.Ga(e.documents);return this.applyChanges(r,!0)}eu(){return ya.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const cm="SyncEngine";class _N{constructor(e,r,n){this.query=e,this.targetId=r,this.view=n}}class wN{constructor(e){this.key=e,this.tu=!1}}class EN{constructor(e,r,n,s,a,u){this.localStore=e,this.remoteStore=r,this.eventManager=n,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new rs(d=>FI(d),lh),this.iu=new Map,this.su=new Set,this.ou=new pt(Se.comparator),this._u=new Map,this.au=new Zg,this.uu={},this.cu=new Map,this.lu=va.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function IN(t,e,r=!0){const n=CS(t);let s;const a=n.ru.get(e);return a?(n.sharedClientState.addLocalQueryTarget(a.targetId),s=a.view.eu()):s=await ES(n,e,r,!0),s}async function SN(t,e){const r=CS(t);await ES(r,e,!0,!1)}async function ES(t,e,r,n){const s=await UD(t.localStore,On(e)),a=s.targetId,u=t.sharedClientState.addLocalQueryTarget(a,r);let d;return n&&(d=await TN(t,e,a,u==="current",s.resumeToken)),t.isPrimaryClient&&r&&fS(t.remoteStore,s),d}async function TN(t,e,r,n,s){t.Pu=(_,w,I)=>async function(k,D,F,U){let W=D.view.Ga(F);W.ys&&(W=await xw(k.localStore,D.query,!1).then(({documents:R})=>D.view.Ga(R,W)));const q=U&&U.targetChanges.get(D.targetId),G=U&&U.targetMismatches.get(D.targetId)!=null,X=D.view.applyChanges(W,k.isPrimaryClient,q,G);return Uw(k,D.targetId,X.Ya),X.snapshot}(t,_,w,I);const a=await xw(t.localStore,e,!0),u=new yN(e,a.Ns),d=u.Ga(a.documents),f=vu.createSynthesizedTargetChangeForCurrentChange(r,n&&t.onlineState!=="Offline",s),g=u.applyChanges(d,t.isPrimaryClient,f);Uw(t,r,g.Ya);const y=new _N(e,r,u);return t.ru.set(e,y),t.iu.has(r)?t.iu.get(r).push(e):t.iu.set(r,[e]),g.snapshot}async function bN(t,e,r){const n=De(t),s=n.ru.get(e),a=n.iu.get(s.targetId);if(a.length>1)return n.iu.set(s.targetId,a.filter(u=>!lh(u,e))),void n.ru.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await hg(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),r&&nm(n.remoteStore,s.targetId),gg(n,s.targetId)}).catch(Pa)):(gg(n,s.targetId),await hg(n.localStore,s.targetId,!0))}async function CN(t,e){const r=De(t),n=r.ru.get(e),s=r.iu.get(n.targetId);r.isPrimaryClient&&s.length===1&&(r.sharedClientState.removeLocalQueryTarget(n.targetId),nm(r.remoteStore,n.targetId))}async function AN(t,e,r){const n=ON(t);try{const s=await function(u,d){const f=De(u),g=Rt.now(),y=d.reduce((I,b)=>I.add(b.key),$e());let _,w;return f.persistence.runTransaction("Locally write mutations","readwrite",I=>{let b=hi(),k=$e();return f.Cs.getEntries(I,y).next(D=>{b=D,b.forEach((F,U)=>{U.isValidDocument()||(k=k.add(F))})}).next(()=>f.localDocuments.getOverlayedDocuments(I,b)).next(D=>{_=D;const F=[];for(const U of d){const W=Uk(U,_.get(U.key).overlayedDocument);W!=null&&F.push(new ns(U.key,W,xI(W.value.mapValue),li.exists(!0)))}return f.mutationQueue.addMutationBatch(I,g,F,d)}).next(D=>{w=D;const F=D.applyToLocalDocumentSet(_,k);return f.documentOverlayCache.saveOverlays(I,D.batchId,F)})}).then(()=>({batchId:w.batchId,changes:jI(_)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(u,d,f){let g=u.uu[u.currentUser.toKey()];g||(g=new pt(Ve)),g=g.insert(d,f),u.uu[u.currentUser.toKey()]=g}(n,s.batchId,r),await _u(n,s.changes),await gh(n.remoteStore)}catch(s){const a=lm(s,"Failed to persist write");r.reject(a)}}async function IS(t,e){const r=De(t);try{const n=await VD(r.localStore,e);e.targetChanges.forEach((s,a)=>{const u=r._u.get(a);u&&(Ze(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?u.tu=!0:s.modifiedDocuments.size>0?Ze(u.tu,14607):s.removedDocuments.size>0&&(Ze(u.tu,42227),u.tu=!1))}),await _u(r,n,e)}catch(n){await Pa(n)}}function Bw(t,e,r){const n=De(t);if(n.isPrimaryClient&&r===0||!n.isPrimaryClient&&r===1){const s=[];n.ru.forEach((a,u)=>{const d=u.view.ga(e);d.snapshot&&s.push(d.snapshot)}),function(u,d){const f=De(u);f.onlineState=d;let g=!1;f.queries.forEach((y,_)=>{for(const w of _.Ra)w.ga(d)&&(g=!0)}),g&&um(f)}(n.eventManager,e),s.length&&n.nu.Q_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function PN(t,e,r){const n=De(t);n.sharedClientState.updateQueryState(e,"rejected",r);const s=n._u.get(e),a=s&&s.key;if(a){let u=new pt(Se.comparator);u=u.insert(a,rr.newNoDocument(a,ke.min()));const d=$e().add(a),f=new hh(ke.min(),new Map,new pt(Ve),u,d);await IS(n,f),n.ou=n.ou.remove(a),n._u.delete(e),dm(n)}else await hg(n.localStore,e,!1).then(()=>gg(n,e,r)).catch(Pa)}async function RN(t,e){const r=De(t),n=e.batch.batchId;try{const s=await MD(r.localStore,e);TS(r,n,null),SS(r,n),r.sharedClientState.updateMutationState(n,"acknowledged"),await _u(r,s)}catch(s){await Pa(s)}}async function xN(t,e,r){const n=De(t);try{const s=await function(u,d){const f=De(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let y;return f.mutationQueue.lookupMutationBatch(g,d).next(_=>(Ze(_!==null,37113),y=_.keys(),f.mutationQueue.removeMutationBatch(g,_))).next(()=>f.mutationQueue.performConsistencyCheck(g)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(g,y,d)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,y)).next(()=>f.localDocuments.getDocuments(g,y))})}(n.localStore,e);TS(n,e,r),SS(n,e),n.sharedClientState.updateMutationState(e,"rejected",r),await _u(n,s)}catch(s){await Pa(s)}}function SS(t,e){(t.cu.get(e)||[]).forEach(r=>{r.resolve()}),t.cu.delete(e)}function TS(t,e,r){const n=De(t);let s=n.uu[n.currentUser.toKey()];if(s){const a=s.get(e);a&&(r?a.reject(r):a.resolve(),s=s.remove(e)),n.uu[n.currentUser.toKey()]=s}}function gg(t,e,r=null){t.sharedClientState.removeLocalQueryTarget(e);for(const n of t.iu.get(e))t.ru.delete(n),r&&t.nu.Tu(n,r);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(n=>{t.au.containsKey(n)||bS(t,n)})}function bS(t,e){t.su.delete(e.path.canonicalString());const r=t.ou.get(e);r!==null&&(nm(t.remoteStore,r),t.ou=t.ou.remove(e),t._u.delete(r),dm(t))}function Uw(t,e,r){for(const n of r)n instanceof _S?(t.au.addReference(n.key,e),kN(t,n)):n instanceof wS?(he(cm,"Document no longer in limbo: "+n.key),t.au.removeReference(n.key,e),t.au.containsKey(n.key)||bS(t,n.key)):Ae(19791,{Iu:n})}function kN(t,e){const r=e.key,n=r.path.canonicalString();t.ou.get(r)||t.su.has(n)||(he(cm,"New document in limbo: "+r),t.su.add(n),dm(t))}function dm(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const r=new Se(dt.fromString(e)),n=t.lu.next();t._u.set(n,new wN(r)),t.ou=t.ou.insert(r,n),fS(t.remoteStore,new Wi(On(VI(r.path)),n,"TargetPurposeLimboResolution",ih.le))}}async function _u(t,e,r){const n=De(t),s=[],a=[],u=[];n.ru.isEmpty()||(n.ru.forEach((d,f)=>{u.push(n.Pu(f,e,r).then(g=>{var y;if((g||r)&&n.isPrimaryClient){const _=g?!g.fromCache:(y=r==null?void 0:r.targetChanges.get(f.targetId))===null||y===void 0?void 0:y.current;n.sharedClientState.updateQueryState(f.targetId,_?"current":"not-current")}if(g){s.push(g);const _=tm.Ps(f.targetId,g);a.push(_)}}))}),await Promise.all(u),n.nu.Q_(s),await async function(f,g){const y=De(f);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>J.forEach(g,w=>J.forEach(w.ls,I=>y.persistence.referenceDelegate.addReference(_,w.targetId,I)).next(()=>J.forEach(w.hs,I=>y.persistence.referenceDelegate.removeReference(_,w.targetId,I)))))}catch(_){if(!Ra(_))throw _;he(rm,"Failed to update sequence numbers: "+_)}for(const _ of g){const w=_.targetId;if(!_.fromCache){const I=y.Ss.get(w),b=I.snapshotVersion,k=I.withLastLimboFreeSnapshotVersion(b);y.Ss=y.Ss.insert(w,k)}}}(n.localStore,a))}async function DN(t,e){const r=De(t);if(!r.currentUser.isEqual(e)){he(cm,"User change. New user:",e.toKey());const n=await uS(r.localStore,e);r.currentUser=e,function(a,u){a.cu.forEach(d=>{d.forEach(f=>{f.reject(new _e(re.CANCELLED,u))})}),a.cu.clear()}(r,"'waitForPendingWrites' promise is rejected due to a user change."),r.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await _u(r,n.Ms)}}function NN(t,e){const r=De(t),n=r._u.get(e);if(n&&n.tu)return $e().add(n.key);{let s=$e();const a=r.iu.get(e);if(!a)return s;for(const u of a){const d=r.ru.get(u);s=s.unionWith(d.view.Wa)}return s}}function CS(t){const e=De(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PN.bind(null,e),e.nu.Q_=gN.bind(null,e.eventManager),e.nu.Tu=mN.bind(null,e.eventManager),e}function ON(t){const e=De(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xN.bind(null,e),e}class Ld{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fh(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,r){return null}fu(e,r){return null}Vu(e){return LD(this.persistence,new DD,e.initialUser,this.serializer)}Ru(e){return new lS(em.Ei,this.serializer)}Au(e){return new $D}async terminate(){var e,r;(e=this.gcScheduler)===null||e===void 0||e.stop(),(r=this.indexBackfillerScheduler)===null||r===void 0||r.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ld.provider={build:()=>new Ld};class LN extends Ld{constructor(e){super(),this.cacheSizeBytes=e}mu(e,r){Ze(this.persistence.referenceDelegate instanceof Nd,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new vD(n,e.asyncQueue,r)}Ru(e){const r=this.cacheSizeBytes!==void 0?yr.withCacheSize(this.cacheSizeBytes):yr.DEFAULT;return new lS(n=>Nd.Ei(n,r),this.serializer)}}class mg{async initialize(e,r){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(r),this.remoteStore=this.createRemoteStore(r),this.eventManager=this.createEventManager(r),this.syncEngine=this.createSyncEngine(r,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Bw(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=DN.bind(null,this.syncEngine),await cN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new hN}()}createDatastore(e){const r=fh(e.databaseInfo.databaseId),n=function(a){return new qD(a)}(e.databaseInfo);return function(a,u,d,f){return new XD(a,u,d,f)}(e.authCredentials,e.appCheckCredentials,n,r)}createRemoteStore(e){return function(n,s,a,u,d){return new ZD(n,s,a,u,d)}(this.localStore,this.datastore,e.asyncQueue,r=>Bw(this.syncEngine,r,0),function(){return Nw.C()?new Nw:new zD}())}createSyncEngine(e,r){return function(s,a,u,d,f,g,y){const _=new EN(s,a,u,d,f,g);return y&&(_.hu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,r)}async terminate(){var e,r;await async function(s){const a=De(s);he(Jo,"RemoteStore shutting down."),a.aa.add(5),await yu(a),a.ca.shutdown(),a.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(r=this.eventManager)===null||r===void 0||r.terminate()}}mg.provider={build:()=>new mg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class MN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):di("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,r){setTimeout(()=>{this.muted||e(r)},0)}}/**
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
 */const so="FirestoreClient";class VN{constructor(e,r,n,s,a){this.authCredentials=e,this.appCheckCredentials=r,this.asyncQueue=n,this.databaseInfo=s,this.user=tr.UNAUTHENTICATED,this.clientId=wI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(n,async u=>{he(so,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(n,u=>(he(so,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){const n=lm(r,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ip(t,e){t.asyncQueue.verifyOperationInProgress(),he(so,"Initializing OfflineComponentProvider");const r=t.configuration;await e.initialize(r);let n=r.initialUser;t.setCredentialChangeListener(async s=>{n.isEqual(s)||(await uS(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jw(t,e){t.asyncQueue.verifyOperationInProgress();const r=await FN(t);he(so,"Initializing OnlineComponentProvider"),await e.initialize(r,t.configuration),t.setCredentialChangeListener(n=>Lw(e.remoteStore,n)),t.setAppCheckTokenChangeListener((n,s)=>Lw(e.remoteStore,s)),t._onlineComponents=e}async function FN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){he(so,"Using user provided OfflineComponentProvider");try{await Ip(t,t._uninitializedComponentsProvider._offline)}catch(e){const r=e;if(!function(s){return s.name==="FirebaseError"?s.code===re.FAILED_PRECONDITION||s.code===re.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(r))throw r;fa("Error using user provided cache. Falling back to memory cache: "+r),await Ip(t,new Ld)}}else he(so,"Using default OfflineComponentProvider"),await Ip(t,new LN(void 0));return t._offlineComponents}async function AS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(he(so,"Using user provided OnlineComponentProvider"),await jw(t,t._uninitializedComponentsProvider._online)):(he(so,"Using default OnlineComponentProvider"),await jw(t,new mg))),t._onlineComponents}function BN(t){return AS(t).then(e=>e.syncEngine)}async function UN(t){const e=await AS(t),r=e.eventManager;return r.onListen=IN.bind(null,e.syncEngine),r.onUnlisten=bN.bind(null,e.syncEngine),r.onFirstRemoteStoreListen=SN.bind(null,e.syncEngine),r.onLastRemoteStoreUnlisten=CN.bind(null,e.syncEngine),r}function jN(t,e,r={}){const n=new Yi;return t.asyncQueue.enqueueAndForget(async()=>function(a,u,d,f,g){const y=new MN({next:w=>{y.yu(),u.enqueueAndForget(()=>pN(a,_)),w.fromCache&&f.source==="server"?g.reject(new _e(re.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(w)},error:w=>g.reject(w)}),_=new vN(d,y,{includeMetadataChanges:!0,Fa:!0});return fN(a,_)}(await UN(t),t.asyncQueue,e,r,n)),n.promise}/**
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
 */function PS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=new Map;/**
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
 */function RS(t,e,r){if(!r)throw new _e(re.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $N(t,e,r,n){if(e===!0&&n===!0)throw new _e(re.INVALID_ARGUMENT,`${t} and ${r} cannot be used together.`)}function zw(t){if(!Se.isDocumentKey(t))throw new _e(re.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ww(t){if(Se.isDocumentKey(t))throw new _e(re.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ae(12329,{type:typeof t})}function Md(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new _e(re.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const r=hm(t);throw new _e(re.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${r}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="firestore.googleapis.com",Gw=!0;class Hw{constructor(e){var r,n;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(re.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=xS,this.ssl=Gw}else this.host=e.host,this.ssl=(r=e.ssl)!==null&&r!==void 0?r:Gw;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=aS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gD)throw new _e(re.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$N("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=PS((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new _e(re.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new _e(re.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new _e(re.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mh{constructor(e,r,n,s){this._authCredentials=e,this._appCheckCredentials=r,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(re.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(re.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Gx;switch(n.type){case"firstParty":return new Qx(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new _e(re.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const n=$w.get(r);n&&(he("ComponentProvider","Removing Datastore"),$w.delete(r),n.terminate())}(this),Promise.resolve()}}function zN(t,e,r,n={}){var s;const a=(t=Md(t,mh))._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),d=`${e}:${r}`;a.host!==xS&&a.host!==d&&fa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:d,ssl:!1,emulatorOptions:n});if(!qo(f,u)&&(t._setSettings(f),n.mockUserToken)){let g,y;if(typeof n.mockUserToken=="string")g=n.mockUserToken,y=tr.MOCK_USER;else{g=nP(n.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const _=n.mockUserToken.sub||n.mockUserToken.user_id;if(!_)throw new _e(re.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");y=new tr(_)}t._authCredentials=new Hx(new yI(g,y))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(e,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new vh(this.firestore,e,this._query)}}class vn{constructor(e,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vn(this.firestore,e,this._key)}}class Xi extends vh{constructor(e,r,n){super(e,r,VI(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vn(this.firestore,null,new Se(e))}withConverter(e){return new Xi(this.firestore,e,this._path)}}function kS(t,e,...r){if(t=_r(t),RS("collection","path",e),t instanceof mh){const n=dt.fromString(e,...r);return Ww(n),new Xi(t,null,n)}{if(!(t instanceof vn||t instanceof Xi))throw new _e(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(dt.fromString(e,...r));return Ww(n),new Xi(t.firestore,null,n)}}function WN(t,e,...r){if(t=_r(t),arguments.length===1&&(e=wI.newId()),RS("doc","path",e),t instanceof mh){const n=dt.fromString(e,...r);return zw(n),new vn(t,null,new Se(n))}{if(!(t instanceof vn||t instanceof Xi))throw new _e(re.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=t._path.child(dt.fromString(e,...r));return zw(n),new vn(t.firestore,t instanceof Xi?t.converter:null,new Se(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="AsyncQueue";class Kw{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new dS(this,"async_queue_retry"),this.ju=()=>{const n=Ep();n&&he(qw,"Visibility state changed to "+n.visibilityState),this.y_.A_()},this.Hu=e;const r=Ep();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const r=Ep();r&&typeof r.removeEventListener=="function"&&r.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const r=new Yi;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(r.resolve,r.reject),r.promise)).then(()=>r.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ra(e))throw e;he(qw,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const r=this.Hu.then(()=>(this.Wu=!0,e().catch(n=>{throw this.Ku=n,this.Wu=!1,di("INTERNAL UNHANDLED ERROR: ",Qw(n)),n}).then(n=>(this.Wu=!1,n))));return this.Hu=r,r}enqueueAfterDelay(e,r,n){this.Ju(),this.zu.indexOf(e)>-1&&(r=0);const s=am.createAndSchedule(this,e,r,n,a=>this.Xu(a));return this.Uu.push(s),s}Ju(){this.Ku&&Ae(47125,{ec:Qw(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const r of this.Uu)if(r.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((r,n)=>r.targetTimeMs-n.targetTimeMs);for(const r of this.Uu)if(r.skipDelay(),e!=="all"&&r.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const r=this.Uu.indexOf(e);this.Uu.splice(r,1)}}function Qw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class fm extends mh{constructor(e,r,n,s){super(e,r,n,s),this.type="firestore",this._queue=new Kw,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kw(e),this._firestoreClient=void 0,await e}}}function GN(t,e){const r=typeof t=="object"?t:PE(),n=typeof t=="string"?t:Cd,s=Og(r,"firestore").getImmediate({identifier:n});if(!s._initialized){const a=tP("firestore");a&&zN(s,...a)}return s}function DS(t){if(t._terminated)throw new _e(re.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HN(t),t._firestoreClient}function HN(t){var e,r,n;const s=t._freezeSettings(),a=function(d,f,g,y){return new ck(d,f,g,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,PS(y.experimentalLongPollingOptions),y.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((r=s.localCache)===null||r===void 0)&&r._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new VN(t._authCredentials,t._appCheckCredentials,t._queue,a,t._componentsProvider&&function(d){const f=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(f),_online:f}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _a(Qt.fromBase64String(e))}catch(r){throw new _e(re.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e){return new _a(Qt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(...e){for(let r=0;r<e.length;++r)if(e[r].length===0)throw new _e(re.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this._methodName=e}}/**
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
 */class gm{constructor(e,r){if(!isFinite(e)||e<-90||e>90)throw new _e(re.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(r)||r<-180||r>180)throw new _e(re.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=e,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ve(this._lat,e._lat)||Ve(this._long,e._long)}}/**
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
 */class mm{constructor(e){this._values=(e||[]).map(r=>r)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let a=0;a<n.length;++a)if(n[a]!==s[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const qN=/^__.*__$/;class KN{constructor(e,r,n){this.data=e,this.fieldMask=r,this.fieldTransforms=n}toMutation(e,r){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,r,this.fieldTransforms):new mu(e,this.data,r,this.fieldTransforms)}}function OS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae(40011,{oc:t})}}class vm{constructor(e,r,n,s,a,u){this.settings=e,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=s,a===void 0&&this._c(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new vm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),s=this.ac({path:n,cc:!1});return s.lc(e),s}hc(e){var r;const n=(r=this.path)===null||r===void 0?void 0:r.child(e),s=this.ac({path:n,cc:!1});return s._c(),s}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return Vd(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(r=>e.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>e.isPrefixOf(r.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(OS(this.oc)&&qN.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class QN{constructor(e,r,n){this.databaseId=e,this.ignoreUndefinedProperties=r,this.serializer=n||fh(e)}dc(e,r,n,s=!1){return new vm({oc:e,methodName:r,Ec:n,path:qt.emptyPath(),cc:!1,Ic:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function YN(t){const e=t._freezeSettings(),r=fh(t._databaseId);return new QN(t._databaseId,!!e.ignoreUndefinedProperties,r)}function XN(t,e,r,n,s,a={}){const u=t.dc(a.merge||a.mergeFields?2:0,e,r,s);FS("Data must be an object, but it was:",u,n);const d=MS(n,u);let f,g;if(a.merge)f=new pn(u.fieldMask),g=u.fieldTransforms;else if(a.mergeFields){const y=[];for(const _ of a.mergeFields){const w=JN(e,_,r);if(!u.contains(w))throw new _e(re.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);eO(y,w)||y.push(w)}f=new pn(y),g=u.fieldTransforms.filter(_=>f.covers(_.field))}else f=null,g=u.fieldTransforms;return new KN(new qr(d),f,g)}function LS(t,e){if(VS(t=_r(t)))return FS("Unsupported field value:",e,t),MS(t,e);if(t instanceof NS)return function(n,s){if(!OS(s.oc))throw s.Tc(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Tc(`${n._methodName}() is not currently supported inside arrays`);const a=n._toFieldTransform(s);a&&s.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(n,s){const a=[];let u=0;for(const d of n){let f=LS(d,s.Pc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(t,e)}return function(n,s){if((n=_r(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Ok(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const a=Rt.fromDate(n);return{timestampValue:Dd(s.serializer,a)}}if(n instanceof Rt){const a=new Rt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Dd(s.serializer,a)}}if(n instanceof gm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _a)return{bytesValue:eS(s.serializer,n._byteString)};if(n instanceof vn){const a=s.databaseId,u=n.firestore._databaseId;if(!u.isEqual(a))throw s.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Jg(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof mm)return function(u,d){return{mapValue:{fields:{[PI]:{stringValue:RI},[Ad]:{arrayValue:{values:u.toArray().map(g=>{if(typeof g!="number")throw d.Tc("VectorValues must only contain numeric values.");return Qg(d.serializer,g)})}}}}}}(n,s);throw s.Tc(`Unsupported field value: ${hm(n)}`)}(t,e)}function MS(t,e){const r={};return II(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(n,s)=>{const a=LS(s,e.uc(n));a!=null&&(r[n]=a)}),{mapValue:{fields:r}}}function VS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Rt||t instanceof gm||t instanceof _a||t instanceof vn||t instanceof NS||t instanceof mm)}function FS(t,e,r){if(!VS(r)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(r)){const n=hm(r);throw n==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+n)}}function JN(t,e,r){if((e=_r(e))instanceof pm)return e._internalPath;if(typeof e=="string")return BS(t,e);throw Vd("Field path arguments must be of type string or ",t,!1,void 0,r)}const ZN=new RegExp("[~\\*/\\[\\]]");function BS(t,e,r){if(e.search(ZN)>=0)throw Vd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,r);try{return new pm(...e.split("."))._internalPath}catch{throw Vd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,r)}}function Vd(t,e,r,n,s){const a=n&&!n.isEmpty(),u=s!==void 0;let d=`Function ${e}() called with invalid data`;r&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${n}`),u&&(f+=` in document ${s}`),f+=")"),new _e(re.INVALID_ARGUMENT,d+t+f)}function eO(t,e){return t.some(r=>r.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,r,n,s,a){this._firestore=e,this._userDataWriter=r,this._key=n,this._document=s,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new vn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const r=this._document.data.field(jS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r)}}}class tO extends US{data(){return super.data()}}function jS(t,e){return typeof e=="string"?BS(t,e):e instanceof pm?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new _e(re.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class nO{convertValue(e,r="none"){switch(io(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,r);case 5:return e.stringValue;case 6:return this.convertBytes(no(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,r);case 11:return this.convertObject(e.mapValue,r);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae(62114,{value:e})}}convertObject(e,r){return this.convertObjectMap(e.fields,r)}convertObjectMap(e,r="none"){const n={};return ts(e,(s,a)=>{n[s]=this.convertValue(a,r)}),n}convertVectorValue(e){var r,n,s;const a=(s=(n=(r=e.fields)===null||r===void 0?void 0:r[Ad].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(u=>yt(u.doubleValue));return new mm(a)}convertGeoPoint(e){return new gm(yt(e.latitude),yt(e.longitude))}convertArray(e,r){return(e.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(e,r){switch(r){case"previous":const n=sh(e);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(Zl(e));default:return null}}convertTimestamp(e){const r=ro(e);return new Rt(r.seconds,r.nanos)}convertDocumentKey(e,r){const n=dt.fromString(e);Ze(sS(n),9688,{name:e});const s=new eu(n.get(1),n.get(3)),a=new Se(n.popFirst(5));return s.isEqual(r)||di(`Document ${a} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t,e,r){let n;return n=t?t.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,r){this.hasPendingWrites=e,this.fromCache=r}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oO extends US{constructor(e,r,n,s,a,u){super(e,r,n,s,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const r=new cd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(r,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,r={}){if(this._document){const n=this._document.data.field(jS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,r.serverTimestamps)}}}class cd extends oO{data(e={}){return super.data(e)}}class sO{constructor(e,r,n,s){this._firestore=e,this._userDataWriter=r,this._snapshot=s,this.metadata=new Gc(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(r=>e.push(r)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,r){this._snapshot.docs.forEach(n=>{e.call(r,new cd(this._firestore,this._userDataWriter,n.key,n,new Gc(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const r=!!e.includeMetadataChanges;if(r&&this._snapshot.excludesMetadataChanges)throw new _e(re.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===r||(this._cachedChanges=function(s,a){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(d=>{const f=new cd(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Gc(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>a||d.type!==3).map(d=>{const f=new cd(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Gc(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,y=-1;return d.type!==0&&(g=u.indexOf(d.doc.key),u=u.delete(d.doc.key)),d.type!==1&&(u=u.add(d.doc),y=u.indexOf(d.doc.key)),{type:aO(d.type),doc:f,oldIndex:g,newIndex:y}})}}(this,r),this._cachedChangesIncludeMetadataChanges=r),this._cachedChanges}}function aO(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae(61501,{type:t})}}class lO extends nO{constructor(e){super(),this.firestore=e}convertBytes(e){return new _a(e)}convertReference(e){const r=this.convertDocumentKey(e,this.firestore._databaseId);return new vn(this.firestore,null,r)}}function uO(t){t=Md(t,vh);const e=Md(t.firestore,fm),r=DS(e),n=new lO(e);return rO(t._query),jN(r,t._query).then(s=>new sO(e,n,t,s))}function cO(t,e){const r=Md(t.firestore,fm),n=WN(t),s=iO(t.converter,e);return dO(r,[XN(YN(t.firestore),"addDoc",n._key,s,t.converter!==null,{}).toMutation(n._key,li.exists(!1))]).then(()=>n)}function dO(t,e){return function(n,s){const a=new Yi;return n.asyncQueue.enqueueAndForget(async()=>AN(await BN(n),s,a)),a.promise}(DS(t),e)}(function(e,r=!0){(function(s){Aa=s})(ba),ha(new Ko("firestore",(n,{instanceIdentifier:s,options:a})=>{const u=n.getProvider("app").getImmediate(),d=new fm(new qx(n.getProvider("auth-internal")),new Yx(u,n.getProvider("app-check-internal")),function(g,y){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new _e(re.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new eu(g.options.projectId,y)}(u,s),u);return a=Object.assign({useFetchStreams:r},a),d._setSettings(a),d},"PUBLIC").setMultipleInstances(!0)),Ki(ew,tw,e),Ki(ew,tw,"esm2017")})();const hO={apiKey:"AIzaSyBbXsS-nxFtF5lSbOz99jdQ8bl_wqjVsms",authDomain:"projectm-3780c.firebaseapp.com",projectId:"projectm-3780c",storageBucket:"projectm-3780c.firebasestorage.app",messagingSenderId:"315745607112",appId:"1:315745607112:web:7201bd42b124720d5e74fd"},$S=AE(hO),dd=jx($S),zS=GN($S),fO=[{id:1,name:"Calendar",icon:"icon/calendar_icon.svg",ariaLabel:"Open calendar"},{id:2,name:"Messages question",icon:"icon/message-question_icon.svg",ariaLabel:"Check messages or questions"},{id:3,name:"Notifications",icon:"icon/notification_icon.svg",ariaLabel:"View notifications"}],pO=[{id:1,userName:"Lee Song",country:"United States",avatar:"image/avatar-1.jpeg"}],gO=()=>{const[t,e]=oe.useState(!1),{setIsLoggedIn:r,loggedUser:n,setShowLoginForm:s}=oe.useContext(Ta),a=()=>{e(d=>!d)},u=()=>{xR(dd).then(()=>{r(!1),s(!1),console.log("LogOut:")}).catch(d=>console.log(d))};return console.log("User:",n),j.jsxs(kA,{role:"region","aria-label":"User menu block",children:[j.jsx(DA,{"aria-label":"User menu navigation",children:fO.map(({id:d,icon:f,ariaLabel:g})=>j.jsx(NA,{"aria-label":g,"aria-haspopup":"true",children:j.jsx(I_,{src:f,alt:""})},d))}),j.jsxs(OA,{role:"group","aria-label":"User information",children:[pO.map(({id:d,userName:f,country:g,avatar:y})=>j.jsxs(E_,{role:"group","aria-label":"User information",children:[j.jsxs(xA,{"aria-labelledby":`user-name-${d} user-country-${d}`,children:[j.jsx(LA,{id:`user-name-${d}`,children:f}),j.jsx(MA,{id:`user-country-${d}`,children:g})]}),j.jsx(VA,{src:y,alt:f,role:"presentation"})]},d)),j.jsx(FA,{onClick:a,"aria-haspopup":"true","aria-label":"Open user menu",children:j.jsx(I_,{src:"icon/arrow-down_icon.svg",alt:"User"})})]}),t&&j.jsx(E_,{children:j.jsx(BA,{"aria-label":"User menu popup",children:j.jsx(zA,{onClick:u,children:"Log out"})})})]})},ym=oe.forwardRef(({onToggleSidebar:t,isSidebarOpen:e},r)=>{const{isLoggedIn:n}=oe.useContext(Ta);return j.jsxs(EA,{ref:r,children:[j.jsxs(mA,{children:[j.jsxs(_A,{children:[j.jsx("img",{src:"logo.svg",alt:"Logo"}),j.jsx("span",{children:"Project M."})]}),n?j.jsx(wA,{className:"sidebar-toggle",onClick:t,$isSidebarOpen:e,children:j.jsx("img",{src:"icon/arrow_left.svg",alt:"Sidebar opener"})}):""]}),n?j.jsxs(IA,{children:[j.jsx(RA,{}),j.jsx(gO,{})]}):""]})});ym.displayName="Header";ym.propTypes={onToggleSidebar:si.func.isRequired,isSidebarOpen:si.bool.isRequired};const mO=te.div``,vO={tasks:{"task-1":{id:"task-1",content:"Brainstorming",description:"Brainstorming brings team members' diverse experience into play.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:""},"task-2":{id:"task-2",content:"Research",description:"User research helps you to create an optimal product for users.",level:"medium",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:""},"task-3":{id:"task-3",content:"Wireframes",description:"Low fidelity wireframes include the most basic content and visuals.",level:"high",levelColor:"#5030E5",levelBackgroundColor:"rgba(80, 48, 229, 0.2)",image:""},"task-4":{id:"task-4",content:"Onboarding illustrations",description:"Help users understand how to use your service.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:"image/onboarding-illustration.png"},"task-5":{id:"task-5",content:"Moodboard",description:"The first impression is a crucial moment.",level:"low",levelColor:"#D58D49",levelBackgroundColor:"rgba(223, 168, 116, 0.2)",image:"image/moodboard-1.png"},"task-6":{id:"task-6",content:"Mobile App Design",description:"Make sure your mobile app looks great on all devices.",level:"completed",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:"image/mobile-app-design.png"},"task-7":{id:"task-7",content:"Design system",description:"Create a robust pattern library and reusable components.",level:"completed",levelColor:"#8BC48A",levelBackgroundColor:"rgba(139, 196, 138, 0.2)",image:""}},columns:{"column-1":{id:"column-1",title:"To Do",taskIds:["task-1","task-2","task-3"],lineColor:"#5030E5"},"column-2":{id:"column-2",title:"In Progress",taskIds:["task-4","task-5"],lineColor:"#FFA500"},"column-3":{id:"column-3",title:"Done",taskIds:["task-6","task-7"],lineColor:"#8BC48A"}},columnOrder:["column-1","column-2","column-3"]},yO=te.div``,_O=te.main`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:t})=>t.headerSize.desktopHeight};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: ${({theme:t})=>t.headerSize.mobileHeight};
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: ${({theme:t})=>t.headerSize.tabletHeight};
  }
`,wO=te.div`
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
`,EO=te.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1rem;

  @media (max-width: ${({theme:t})=>t.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(1fr));
  }
`,IO=te.div`
  padding: 1.5rem;
  width: 23rem;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    width: 20rem;
    padding: 1rem;
  }
`,SO=te.div`
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
`,TO=te.h2`
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
`,bO=te.p`
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
`,CO=te.button`
  /* display: flex;
  justify-content: center;
  align-items: center;
  color: #5030e5;
  background-color: #b9aef6;
  border-radius: 8px;
  line-height: 100%;
  font-size: 1.5rem;
  width: 1.5rem; */
`,AO=te.img``,PO=te.div`
  height: 100%;
`,RO=te.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 16px;

  background: ${({theme:t})=>t.colors.primaryLightBackground};
`,xO=te.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,kO=te.div`
  padding: 0 0.4rem;
  line-height: 1.5rem;
  border-radius: 4px;
  color: ${({$levelColor:t})=>t};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;

  background: ${({$levelBg:t})=>t};
`,DO=te.button`
  background-color: transparent;
`,NO=te.img``,OO=te.div``,LO=te.h3`
  margin-bottom: 0.5rem;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
`,MO=te.p`
  margin-bottom: 1.5rem;
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.87rem;
  font-weight: 400;
  text-align: left;
`,VO=te.img`
  border-radius: 8px;
`,FO=te.div`
  display: flex;
  justify-content: space-between;
`,BO=te.div`
  width: 63px;
  height: 24px;
`,UO=te.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,jO=te.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  margin-right: 1rem;
`,$O=te.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
`,zO=te.div`
  height: 100%;
`;function vg(t,e){return vg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},vg(t,e)}function WS(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,vg(t,e)}function Te(){return Te=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)({}).hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},Te.apply(null,arguments)}function iu(t){"@babel/helpers - typeof";return iu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},iu(t)}function WO(t,e){if(iu(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(iu(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function GO(t){var e=WO(t,"string");return iu(e)=="symbol"?e:e+""}function HO(t,e,r){return(e=GO(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Yw(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function Xw(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Yw(Object(r),!0).forEach(function(n){HO(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Yw(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function vr(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Jw=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Zw=function(){return Math.random().toString(36).substring(7).split("").join(".")},e0={INIT:"@@redux/INIT"+Zw(),REPLACE:"@@redux/REPLACE"+Zw()};function qO(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function GS(t,e,r){var n;if(typeof e=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(vr(0));if(typeof e=="function"&&typeof r>"u"&&(r=e,e=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(vr(1));return r(GS)(t,e)}if(typeof t!="function")throw new Error(vr(2));var s=t,a=e,u=[],d=u,f=!1;function g(){d===u&&(d=u.slice())}function y(){if(f)throw new Error(vr(3));return a}function _(k){if(typeof k!="function")throw new Error(vr(4));if(f)throw new Error(vr(5));var D=!0;return g(),d.push(k),function(){if(D){if(f)throw new Error(vr(6));D=!1,g();var U=d.indexOf(k);d.splice(U,1),u=null}}}function w(k){if(!qO(k))throw new Error(vr(7));if(typeof k.type>"u")throw new Error(vr(8));if(f)throw new Error(vr(9));try{f=!0,a=s(a,k)}finally{f=!1}for(var D=u=d,F=0;F<D.length;F++){var U=D[F];U()}return k}function I(k){if(typeof k!="function")throw new Error(vr(10));s=k,w({type:e0.REPLACE})}function b(){var k,D=_;return k={subscribe:function(U){if(typeof U!="object"||U===null)throw new Error(vr(11));function W(){U.next&&U.next(y())}W();var q=D(W);return{unsubscribe:q}}},k[Jw]=function(){return this},k}return w({type:e0.INIT}),n={dispatch:w,subscribe:_,getState:y,replaceReducer:I},n[Jw]=b,n}function t0(t,e){return function(){return e(t.apply(this,arguments))}}function r0(t,e){if(typeof t=="function")return t0(t,e);if(typeof t!="object"||t===null)throw new Error(vr(16));var r={};for(var n in t){var s=t[n];typeof s=="function"&&(r[n]=t0(s,e))}return r}function HS(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.length===0?function(n){return n}:e.length===1?e[0]:e.reduce(function(n,s){return function(){return n(s.apply(void 0,arguments))}})}function KO(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(n){return function(){var s=n.apply(void 0,arguments),a=function(){throw new Error(vr(15))},u={getState:s.getState,dispatch:function(){return a.apply(void 0,arguments)}},d=e.map(function(f){return f(u)});return a=HS.apply(void 0,d)(s.dispatch),Xw(Xw({},s),{},{dispatch:a})}}}var qS=je.createContext(null);function QO(t){t()}var KS=QO,YO=function(e){return KS=e},XO=function(){return KS};function JO(){var t=XO(),e=null,r=null;return{clear:function(){e=null,r=null},notify:function(){t(function(){for(var s=e;s;)s.callback(),s=s.next})},get:function(){for(var s=[],a=e;a;)s.push(a),a=a.next;return s},subscribe:function(s){var a=!0,u=r={callback:s,next:null,prev:r};return u.prev?u.prev.next=u:e=u,function(){!a||e===null||(a=!1,u.next?u.next.prev=u.prev:r=u.prev,u.prev?u.prev.next=u.next:e=u.next)}}}}var n0={notify:function(){},get:function(){return[]}};function QS(t,e){var r,n=n0;function s(_){return f(),n.subscribe(_)}function a(){n.notify()}function u(){y.onStateChange&&y.onStateChange()}function d(){return!!r}function f(){r||(r=e?e.addNestedSub(u):t.subscribe(u),n=JO())}function g(){r&&(r(),r=void 0,n.clear(),n=n0)}var y={addNestedSub:s,notifyNestedSubs:a,handleChangeWrapper:u,isSubscribed:d,trySubscribe:f,tryUnsubscribe:g,getListeners:function(){return n}};return y}var YS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?oe.useLayoutEffect:oe.useEffect;function ZO(t){var e=t.store,r=t.context,n=t.children,s=oe.useMemo(function(){var d=QS(e);return{store:e,subscription:d}},[e]),a=oe.useMemo(function(){return e.getState()},[e]);YS(function(){var d=s.subscription;return d.onStateChange=d.notifyNestedSubs,d.trySubscribe(),a!==e.getState()&&d.notifyNestedSubs(),function(){d.tryUnsubscribe(),d.onStateChange=null}},[s,a]);var u=r||qS;return je.createElement(u.Provider,{value:s},n)}function Fd(t,e){if(t==null)return{};var r={};for(var n in t)if({}.hasOwnProperty.call(t,n)){if(e.indexOf(n)!==-1)continue;r[n]=t[n]}return r}var Sp={exports:{}},Xe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function eL(){if(i0)return Xe;i0=1;var t=typeof Symbol=="function"&&Symbol.for,e=t?Symbol.for("react.element"):60103,r=t?Symbol.for("react.portal"):60106,n=t?Symbol.for("react.fragment"):60107,s=t?Symbol.for("react.strict_mode"):60108,a=t?Symbol.for("react.profiler"):60114,u=t?Symbol.for("react.provider"):60109,d=t?Symbol.for("react.context"):60110,f=t?Symbol.for("react.async_mode"):60111,g=t?Symbol.for("react.concurrent_mode"):60111,y=t?Symbol.for("react.forward_ref"):60112,_=t?Symbol.for("react.suspense"):60113,w=t?Symbol.for("react.suspense_list"):60120,I=t?Symbol.for("react.memo"):60115,b=t?Symbol.for("react.lazy"):60116,k=t?Symbol.for("react.block"):60121,D=t?Symbol.for("react.fundamental"):60117,F=t?Symbol.for("react.responder"):60118,U=t?Symbol.for("react.scope"):60119;function W(G){if(typeof G=="object"&&G!==null){var X=G.$$typeof;switch(X){case e:switch(G=G.type,G){case f:case g:case n:case a:case s:case _:return G;default:switch(G=G&&G.$$typeof,G){case d:case y:case b:case I:case u:return G;default:return X}}case r:return X}}}function q(G){return W(G)===g}return Xe.AsyncMode=f,Xe.ConcurrentMode=g,Xe.ContextConsumer=d,Xe.ContextProvider=u,Xe.Element=e,Xe.ForwardRef=y,Xe.Fragment=n,Xe.Lazy=b,Xe.Memo=I,Xe.Portal=r,Xe.Profiler=a,Xe.StrictMode=s,Xe.Suspense=_,Xe.isAsyncMode=function(G){return q(G)||W(G)===f},Xe.isConcurrentMode=q,Xe.isContextConsumer=function(G){return W(G)===d},Xe.isContextProvider=function(G){return W(G)===u},Xe.isElement=function(G){return typeof G=="object"&&G!==null&&G.$$typeof===e},Xe.isForwardRef=function(G){return W(G)===y},Xe.isFragment=function(G){return W(G)===n},Xe.isLazy=function(G){return W(G)===b},Xe.isMemo=function(G){return W(G)===I},Xe.isPortal=function(G){return W(G)===r},Xe.isProfiler=function(G){return W(G)===a},Xe.isStrictMode=function(G){return W(G)===s},Xe.isSuspense=function(G){return W(G)===_},Xe.isValidElementType=function(G){return typeof G=="string"||typeof G=="function"||G===n||G===g||G===a||G===s||G===_||G===w||typeof G=="object"&&G!==null&&(G.$$typeof===b||G.$$typeof===I||G.$$typeof===u||G.$$typeof===d||G.$$typeof===y||G.$$typeof===D||G.$$typeof===F||G.$$typeof===U||G.$$typeof===k)},Xe.typeOf=W,Xe}var o0;function tL(){return o0||(o0=1,Sp.exports=eL()),Sp.exports}var Tp,s0;function rL(){if(s0)return Tp;s0=1;var t=tL(),e={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};a[t.ForwardRef]=n,a[t.Memo]=s;function u(b){return t.isMemo(b)?s:a[b.$$typeof]||e}var d=Object.defineProperty,f=Object.getOwnPropertyNames,g=Object.getOwnPropertySymbols,y=Object.getOwnPropertyDescriptor,_=Object.getPrototypeOf,w=Object.prototype;function I(b,k,D){if(typeof k!="string"){if(w){var F=_(k);F&&F!==w&&I(b,F,D)}var U=f(k);g&&(U=U.concat(g(k)));for(var W=u(b),q=u(k),G=0;G<U.length;++G){var X=U[G];if(!r[X]&&!(D&&D[X])&&!(q&&q[X])&&!(W&&W[X])){var R=y(k,X);try{d(b,X,R)}catch{}}}}return b}return Tp=I,Tp}var nL=rL();const a0=qd(nL);var bp={exports:{}},rt={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0;function iL(){if(l0)return rt;l0=1;var t=60103,e=60106,r=60107,n=60108,s=60114,a=60109,u=60110,d=60112,f=60113,g=60120,y=60115,_=60116,w=60121,I=60122,b=60117,k=60129,D=60131;if(typeof Symbol=="function"&&Symbol.for){var F=Symbol.for;t=F("react.element"),e=F("react.portal"),r=F("react.fragment"),n=F("react.strict_mode"),s=F("react.profiler"),a=F("react.provider"),u=F("react.context"),d=F("react.forward_ref"),f=F("react.suspense"),g=F("react.suspense_list"),y=F("react.memo"),_=F("react.lazy"),w=F("react.block"),I=F("react.server.block"),b=F("react.fundamental"),k=F("react.debug_trace_mode"),D=F("react.legacy_hidden")}function U(C){if(typeof C=="object"&&C!==null){var be=C.$$typeof;switch(be){case t:switch(C=C.type,C){case r:case s:case n:case f:case g:return C;default:switch(C=C&&C.$$typeof,C){case u:case d:case _:case y:case a:return C;default:return be}}case e:return be}}}var W=a,q=t,G=d,X=r,R=_,A=y,P=e,N=s,O=n,B=f;return rt.ContextConsumer=u,rt.ContextProvider=W,rt.Element=q,rt.ForwardRef=G,rt.Fragment=X,rt.Lazy=R,rt.Memo=A,rt.Portal=P,rt.Profiler=N,rt.StrictMode=O,rt.Suspense=B,rt.isAsyncMode=function(){return!1},rt.isConcurrentMode=function(){return!1},rt.isContextConsumer=function(C){return U(C)===u},rt.isContextProvider=function(C){return U(C)===a},rt.isElement=function(C){return typeof C=="object"&&C!==null&&C.$$typeof===t},rt.isForwardRef=function(C){return U(C)===d},rt.isFragment=function(C){return U(C)===r},rt.isLazy=function(C){return U(C)===_},rt.isMemo=function(C){return U(C)===y},rt.isPortal=function(C){return U(C)===e},rt.isProfiler=function(C){return U(C)===s},rt.isStrictMode=function(C){return U(C)===n},rt.isSuspense=function(C){return U(C)===f},rt.isValidElementType=function(C){return typeof C=="string"||typeof C=="function"||C===r||C===s||C===k||C===n||C===f||C===g||C===D||typeof C=="object"&&C!==null&&(C.$$typeof===_||C.$$typeof===y||C.$$typeof===a||C.$$typeof===u||C.$$typeof===d||C.$$typeof===b||C.$$typeof===w||C[0]===I)},rt.typeOf=U,rt}var u0;function oL(){return u0||(u0=1,bp.exports=iL()),bp.exports}var sL=oL(),aL=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],lL=["reactReduxForwardedRef"],uL=[],cL=[null,null];function dL(t,e){var r=t[1];return[e.payload,r+1]}function c0(t,e,r){YS(function(){return t.apply(void 0,e)},r)}function hL(t,e,r,n,s,a,u){t.current=n,e.current=s,r.current=!1,a.current&&(a.current=null,u())}function fL(t,e,r,n,s,a,u,d,f,g){if(t){var y=!1,_=null,w=function(){if(!y){var k=e.getState(),D,F;try{D=n(k,s.current)}catch(U){F=U,_=U}F||(_=null),D===a.current?u.current||f():(a.current=D,d.current=D,u.current=!0,g({type:"STORE_UPDATED",payload:{error:F}}))}};r.onStateChange=w,r.trySubscribe(),w();var I=function(){if(y=!0,r.tryUnsubscribe(),r.onStateChange=null,_)throw _};return I}}var pL=function(){return[null,0]};function gL(t,e){e===void 0&&(e={});var r=e,n=r.getDisplayName,s=n===void 0?function(W){return"ConnectAdvanced("+W+")"}:n,a=r.methodName,u=a===void 0?"connectAdvanced":a,d=r.renderCountProp,f=d===void 0?void 0:d,g=r.shouldHandleStateChanges,y=g===void 0?!0:g,_=r.storeKey,w=_===void 0?"store":_;r.withRef;var I=r.forwardRef,b=I===void 0?!1:I,k=r.context,D=k===void 0?qS:k,F=Fd(r,aL),U=D;return function(q){var G=q.displayName||q.name||"Component",X=s(G),R=Te({},F,{getDisplayName:s,methodName:u,renderCountProp:f,shouldHandleStateChanges:y,storeKey:w,displayName:X,wrappedComponentName:G,WrappedComponent:q}),A=F.pure;function P(be){return t(be.dispatch,R)}var N=A?oe.useMemo:function(be){return be()};function O(be){var Qe=oe.useMemo(function(){var Or=be.reactReduxForwardedRef,wr=Fd(be,lL);return[be.context,Or,wr]},[be]),Ye=Qe[0],Me=Qe[1],ie=Qe[2],ce=oe.useMemo(function(){return Ye&&Ye.Consumer&&sL.isContextConsumer(je.createElement(Ye.Consumer,null))?Ye:U},[Ye,U]),ae=oe.useContext(ce),V=!!be.store&&!!be.store.getState&&!!be.store.dispatch;ae&&ae.store;var Y=V?be.store:ae.store,pe=oe.useMemo(function(){return P(Y)},[Y]),Pe=oe.useMemo(function(){if(!y)return cL;var Or=QS(Y,V?null:ae.subscription),wr=Or.notifyNestedSubs.bind(Or);return[Or,wr]},[Y,V,ae]),we=Pe[0],xe=Pe[1],Oe=oe.useMemo(function(){return V?ae:Te({},ae,{subscription:we})},[V,ae,we]),Ne=oe.useReducer(dL,uL,pL),Fe=Ne[0],et=Fe[0],kt=Ne[1];if(et&&et.error)throw et.error;var Dt=oe.useRef(),Dr=oe.useRef(ie),Nr=oe.useRef(),Fn=oe.useRef(!1),Bn=N(function(){return Nr.current&&ie===Dr.current?Nr.current:pe(Y.getState(),ie)},[Y,et,ie]);c0(hL,[Dr,Dt,Fn,ie,Bn,Nr,xe]),c0(fL,[y,Y,we,pe,Dr,Dt,Fn,Nr,xe,kt],[Y,we,pe]);var Un=oe.useMemo(function(){return je.createElement(q,Te({},Bn,{ref:Me}))},[Me,q,Bn]),os=oe.useMemo(function(){return y?je.createElement(ce.Provider,{value:Oe},Un):Un},[ce,Un,Oe]);return os}var B=A?je.memo(O):O;if(B.WrappedComponent=q,B.displayName=O.displayName=X,b){var C=je.forwardRef(function(Qe,Ye){return je.createElement(B,Te({},Qe,{reactReduxForwardedRef:Ye}))});return C.displayName=X,C.WrappedComponent=q,a0(C,q)}return a0(B,q)}}function d0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Cp(t,e){if(d0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(var s=0;s<r.length;s++)if(!Object.prototype.hasOwnProperty.call(e,r[s])||!d0(t[r[s]],e[r[s]]))return!1;return!0}function mL(t,e){var r={},n=function(u){var d=t[u];typeof d=="function"&&(r[u]=function(){return e(d.apply(void 0,arguments))})};for(var s in t)n(s);return r}function _m(t){return function(r,n){var s=t(r,n);function a(){return s}return a.dependsOnOwnProps=!1,a}}function h0(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?!!t.dependsOnOwnProps:t.length!==1}function XS(t,e){return function(n,s){s.displayName;var a=function(d,f){return a.dependsOnOwnProps?a.mapToProps(d,f):a.mapToProps(d)};return a.dependsOnOwnProps=!0,a.mapToProps=function(d,f){a.mapToProps=t,a.dependsOnOwnProps=h0(t);var g=a(d,f);return typeof g=="function"&&(a.mapToProps=g,a.dependsOnOwnProps=h0(g),g=a(d,f)),g},a}}function vL(t){return typeof t=="function"?XS(t):void 0}function yL(t){return t?void 0:_m(function(e){return{dispatch:e}})}function _L(t){return t&&typeof t=="object"?_m(function(e){return mL(t,e)}):void 0}const wL=[vL,yL,_L];function EL(t){return typeof t=="function"?XS(t):void 0}function IL(t){return t?void 0:_m(function(){return{}})}const SL=[EL,IL];function TL(t,e,r){return Te({},r,t,e)}function bL(t){return function(r,n){n.displayName;var s=n.pure,a=n.areMergedPropsEqual,u=!1,d;return function(g,y,_){var w=t(g,y,_);return u?(!s||!a(w,d))&&(d=w):(u=!0,d=w),d}}}function CL(t){return typeof t=="function"?bL(t):void 0}function AL(t){return t?void 0:function(){return TL}}const PL=[CL,AL];var RL=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function xL(t,e,r,n){return function(a,u){return r(t(a,u),e(n,u),u)}}function kL(t,e,r,n,s){var a=s.areStatesEqual,u=s.areOwnPropsEqual,d=s.areStatePropsEqual,f=!1,g,y,_,w,I;function b(W,q){return g=W,y=q,_=t(g,y),w=e(n,y),I=r(_,w,y),f=!0,I}function k(){return _=t(g,y),e.dependsOnOwnProps&&(w=e(n,y)),I=r(_,w,y),I}function D(){return t.dependsOnOwnProps&&(_=t(g,y)),e.dependsOnOwnProps&&(w=e(n,y)),I=r(_,w,y),I}function F(){var W=t(g,y),q=!d(W,_);return _=W,q&&(I=r(_,w,y)),I}function U(W,q){var G=!u(q,y),X=!a(W,g,q,y);return g=W,y=q,G&&X?k():G?D():X?F():I}return function(q,G){return f?U(q,G):b(q,G)}}function DL(t,e){var r=e.initMapStateToProps,n=e.initMapDispatchToProps,s=e.initMergeProps,a=Fd(e,RL),u=r(t,a),d=n(t,a),f=s(t,a),g=a.pure?kL:xL;return g(u,d,f,t,a)}var NL=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Ap(t,e,r){for(var n=e.length-1;n>=0;n--){var s=e[n](t);if(s)return s}return function(a,u){throw new Error("Invalid value of type "+typeof t+" for "+r+" argument when connecting component "+u.wrappedComponentName+".")}}function OL(t,e){return t===e}function LL(t){var e=t===void 0?{}:t,r=e.connectHOC,n=r===void 0?gL:r,s=e.mapStateToPropsFactories,a=s===void 0?SL:s,u=e.mapDispatchToPropsFactories,d=u===void 0?wL:u,f=e.mergePropsFactories,g=f===void 0?PL:f,y=e.selectorFactory,_=y===void 0?DL:y;return function(I,b,k,D){D===void 0&&(D={});var F=D,U=F.pure,W=U===void 0?!0:U,q=F.areStatesEqual,G=q===void 0?OL:q,X=F.areOwnPropsEqual,R=X===void 0?Cp:X,A=F.areStatePropsEqual,P=A===void 0?Cp:A,N=F.areMergedPropsEqual,O=N===void 0?Cp:N,B=Fd(F,NL),C=Ap(I,a,"mapStateToProps"),be=Ap(b,d,"mapDispatchToProps"),Qe=Ap(k,g,"mergeProps");return n(_,Te({methodName:"connect",getDisplayName:function(Me){return"Connect("+Me+")"},shouldHandleStateChanges:!!I,initMapStateToProps:C,initMapDispatchToProps:be,initMergeProps:Qe,pure:W,areStatesEqual:G,areOwnPropsEqual:R,areStatePropsEqual:P,areMergedPropsEqual:O},B))}}const JS=LL();var ZS=G0();const ML=qd(ZS);YO(ZS.unstable_batchedUpdates);function VL(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(t[r]!==e[r])return!1;return!0}function eT(t,e){var r=oe.useState(function(){return{inputs:e,result:t()}})[0],n=oe.useRef(!0),s=oe.useRef(r),a=n.current||!!(e&&s.current.inputs&&VL(e,s.current.inputs)),u=a?s.current:{inputs:e,result:t()};return oe.useEffect(function(){n.current=!1,s.current=u},[u]),u.result}function FL(t,e){return eT(function(){return t},e)}var qe=eT,ye=FL,BL="Invariant failed";function UL(t,e){throw new Error(BL)}var gn=function(e){var r=e.top,n=e.right,s=e.bottom,a=e.left,u=n-a,d=s-r,f={top:r,right:n,bottom:s,left:a,width:u,height:d,x:a,y:r,center:{x:(n+a)/2,y:(s+r)/2}};return f},wm=function(e,r){return{top:e.top-r.top,left:e.left-r.left,bottom:e.bottom+r.bottom,right:e.right+r.right}},f0=function(e,r){return{top:e.top+r.top,left:e.left+r.left,bottom:e.bottom-r.bottom,right:e.right-r.right}},jL=function(e,r){return{top:e.top+r.y,left:e.left+r.x,bottom:e.bottom+r.y,right:e.right+r.x}},Pp={top:0,right:0,bottom:0,left:0},Em=function(e){var r=e.borderBox,n=e.margin,s=n===void 0?Pp:n,a=e.border,u=a===void 0?Pp:a,d=e.padding,f=d===void 0?Pp:d,g=gn(wm(r,s)),y=gn(f0(r,u)),_=gn(f0(y,f));return{marginBox:g,borderBox:gn(r),paddingBox:y,contentBox:_,margin:s,border:u,padding:f}},Gr=function(e){var r=e.slice(0,-2),n=e.slice(-2);if(n!=="px")return 0;var s=Number(r);return isNaN(s)&&UL(),s},$L=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Bd=function(e,r){var n=e.borderBox,s=e.border,a=e.margin,u=e.padding,d=jL(n,r);return Em({borderBox:d,border:s,margin:a,padding:u})},Ud=function(e,r){return r===void 0&&(r=$L()),Bd(e,r)},tT=function(e,r){var n={top:Gr(r.marginTop),right:Gr(r.marginRight),bottom:Gr(r.marginBottom),left:Gr(r.marginLeft)},s={top:Gr(r.paddingTop),right:Gr(r.paddingRight),bottom:Gr(r.paddingBottom),left:Gr(r.paddingLeft)},a={top:Gr(r.borderTopWidth),right:Gr(r.borderRightWidth),bottom:Gr(r.borderBottomWidth),left:Gr(r.borderLeftWidth)};return Em({borderBox:e,margin:n,padding:s,border:a})},rT=function(e){var r=e.getBoundingClientRect(),n=window.getComputedStyle(e);return tT(r,n)},p0=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function zL(t,e){return!!(t===e||p0(t)&&p0(e))}function WL(t,e){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r++)if(!zL(t[r],e[r]))return!1;return!0}function Ut(t,e){e===void 0&&(e=WL);var r,n=[],s,a=!1;function u(){for(var d=[],f=0;f<arguments.length;f++)d[f]=arguments[f];return a&&r===this&&e(d,n)||(s=t.apply(this,d),a=!0,r=this,n=d),s}return u}var ou=function(e){var r=[],n=null,s=function(){for(var u=arguments.length,d=new Array(u),f=0;f<u;f++)d[f]=arguments[f];r=d,!n&&(n=requestAnimationFrame(function(){n=null,e.apply(void 0,r)}))};return s.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},s};function nT(t,e){}nT.bind(null,"warn");nT.bind(null,"error");function Ji(){}function GL(t,e){return Te({},t,{},e)}function Kr(t,e,r){var n=e.map(function(s){var a=GL(r,s.options);return t.addEventListener(s.eventName,s.fn,a),function(){t.removeEventListener(s.eventName,s.fn,a)}});return function(){n.forEach(function(a){a()})}}var HL="Invariant failed";function jd(t){this.message=t}jd.prototype.toString=function(){return this.message};function le(t,e){throw new jd(HL)}var qL=function(t){WS(e,t);function e(){for(var n,s=arguments.length,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u];return n=t.call.apply(t,[this].concat(a))||this,n.callbacks=null,n.unbind=Ji,n.onWindowError=function(d){var f=n.getCallbacks();f.isDragging()&&f.tryAbort();var g=d.error;g instanceof jd&&d.preventDefault()},n.getCallbacks=function(){if(!n.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return n.callbacks},n.setCallbacks=function(d){n.callbacks=d},n}var r=e.prototype;return r.componentDidMount=function(){this.unbind=Kr(window,[{eventName:"error",fn:this.onWindowError}])},r.componentDidCatch=function(s){if(s instanceof jd){this.setState({});return}throw s},r.componentWillUnmount=function(){this.unbind()},r.render=function(){return this.props.children(this.setCallbacks)},e}(je.Component),KL=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,$d=function(e){return e+1},QL=function(e){return`
  You have lifted an item in position `+$d(e.source.index)+`
`},iT=function(e,r){var n=e.droppableId===r.droppableId,s=$d(e.index),a=$d(r.index);return n?`
      You have moved the item from position `+s+`
      to position `+a+`
    `:`
    You have moved the item from position `+s+`
    in list `+e.droppableId+`
    to list `+r.droppableId+`
    in position `+a+`
  `},oT=function(e,r,n){var s=r.droppableId===n.droppableId;return s?`
      The item `+e+`
      has been combined with `+n.draggableId:`
      The item `+e+`
      in list `+r.droppableId+`
      has been combined with `+n.draggableId+`
      in list `+n.droppableId+`
    `},YL=function(e){var r=e.destination;if(r)return iT(e.source,r);var n=e.combine;return n?oT(e.draggableId,e.source,n):"You are over an area that cannot be dropped on"},g0=function(e){return`
  The item has returned to its starting position
  of `+$d(e.index)+`
`},XL=function(e){if(e.reason==="CANCEL")return`
      Movement cancelled.
      `+g0(e.source)+`
    `;var r=e.destination,n=e.combine;return r?`
      You have dropped the item.
      `+iT(e.source,r)+`
    `:n?`
      You have dropped the item.
      `+oT(e.draggableId,e.source,n)+`
    `:`
    The item has been dropped while not over a drop area.
    `+g0(e.source)+`
  `},hd={dragHandleUsageInstructions:KL,onDragStart:QL,onDragUpdate:YL,onDragEnd:XL},jt={x:0,y:0},Kt=function(e,r){return{x:e.x+r.x,y:e.y+r.y}},Rr=function(e,r){return{x:e.x-r.x,y:e.y-r.y}},Zi=function(e,r){return e.x===r.x&&e.y===r.y},ka=function(e){return{x:e.x!==0?-e.x:0,y:e.y!==0?-e.y:0}},Zo=function(e,r,n){var s;return n===void 0&&(n=0),s={},s[e]=r,s[e==="x"?"y":"x"]=n,s},su=function(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))},m0=function(e,r){return Math.min.apply(Math,r.map(function(n){return su(e,n)}))},sT=function(e){return function(r){return{x:e(r.x),y:e(r.y)}}},JL=function(t,e){var r=gn({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return r.width<=0||r.height<=0?null:r},wu=function(e,r){return{top:e.top+r.y,left:e.left+r.x,bottom:e.bottom+r.y,right:e.right+r.x}},v0=function(e){return[{x:e.left,y:e.top},{x:e.right,y:e.top},{x:e.left,y:e.bottom},{x:e.right,y:e.bottom}]},ZL={top:0,right:0,bottom:0,left:0},e2=function(e,r){return r?wu(e,r.scroll.diff.displacement):e},t2=function(e,r,n){if(n&&n.increasedBy){var s;return Te({},e,(s={},s[r.end]=e[r.end]+n.increasedBy[r.line],s))}return e},r2=function(e,r){return r&&r.shouldClipSubject?JL(r.pageMarginBox,e):gn(e)},wa=function(t){var e=t.page,r=t.withPlaceholder,n=t.axis,s=t.frame,a=e2(e.marginBox,s),u=t2(a,n,r),d=r2(u,s);return{page:e,withPlaceholder:r,active:d}},Im=function(t,e){t.frame||le();var r=t.frame,n=Rr(e,r.scroll.initial),s=ka(n),a=Te({},r,{scroll:{initial:r.scroll.initial,current:e,diff:{value:n,displacement:s},max:r.scroll.max}}),u=wa({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:a}),d=Te({},t,{frame:a,subject:u});return d};function zd(t){return Object.values?Object.values(t):Object.keys(t).map(function(e){return t[e]})}function Sm(t,e){if(t.findIndex)return t.findIndex(e);for(var r=0;r<t.length;r++)if(e(t[r]))return r;return-1}function co(t,e){if(t.find)return t.find(e);var r=Sm(t,e);if(r!==-1)return t[r]}function aT(t){return Array.prototype.slice.call(t)}var lT=Ut(function(t){return t.reduce(function(e,r){return e[r.descriptor.id]=r,e},{})}),uT=Ut(function(t){return t.reduce(function(e,r){return e[r.descriptor.id]=r,e},{})}),yh=Ut(function(t){return zd(t)}),n2=Ut(function(t){return zd(t)}),Da=Ut(function(t,e){var r=n2(e).filter(function(n){return t===n.descriptor.droppableId}).sort(function(n,s){return n.descriptor.index-s.descriptor.index});return r});function Tm(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function _h(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var wh=Ut(function(t,e){return e.filter(function(r){return r.descriptor.id!==t.descriptor.id})}),i2=function(t){var e=t.isMovingForward,r=t.draggable,n=t.destination,s=t.insideDestination,a=t.previousImpact;if(!n.isCombineEnabled)return null;var u=Tm(a);if(!u)return null;function d(k){var D={type:"COMBINE",combine:{draggableId:k,droppableId:n.descriptor.id}};return Te({},a,{at:D})}var f=a.displaced.all,g=f.length?f[0]:null;if(e)return g?d(g):null;var y=wh(r,s);if(!g){if(!y.length)return null;var _=y[y.length-1];return d(_.descriptor.id)}var w=Sm(y,function(k){return k.descriptor.id===g});w===-1&&le();var I=w-1;if(I<0)return null;var b=y[I];return d(b.descriptor.id)},Na=function(t,e){return t.descriptor.droppableId===e.descriptor.id},cT={point:jt,value:0},au={invisible:{},visible:{},all:[]},o2={displaced:au,displacedBy:cT,at:null},Qr=function(t,e){return function(r){return t<=r&&r<=e}},dT=function(t){var e=Qr(t.top,t.bottom),r=Qr(t.left,t.right);return function(n){var s=e(n.top)&&e(n.bottom)&&r(n.left)&&r(n.right);if(s)return!0;var a=e(n.top)||e(n.bottom),u=r(n.left)||r(n.right),d=a&&u;if(d)return!0;var f=n.top<t.top&&n.bottom>t.bottom,g=n.left<t.left&&n.right>t.right,y=f&&g;if(y)return!0;var _=f&&u||g&&a;return _}},s2=function(t){var e=Qr(t.top,t.bottom),r=Qr(t.left,t.right);return function(n){var s=e(n.top)&&e(n.bottom)&&r(n.left)&&r(n.right);return s}},bm={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},hT={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},a2=function(t){return function(e){var r=Qr(e.top,e.bottom),n=Qr(e.left,e.right);return function(s){return t===bm?r(s.top)&&r(s.bottom):n(s.left)&&n(s.right)}}},l2=function(e,r){var n=r.frame?r.frame.scroll.diff.displacement:jt;return wu(e,n)},u2=function(e,r,n){return r.subject.active?n(r.subject.active)(e):!1},c2=function(e,r,n){return n(r)(e)},Cm=function(e){var r=e.target,n=e.destination,s=e.viewport,a=e.withDroppableDisplacement,u=e.isVisibleThroughFrameFn,d=a?l2(r,n):r;return u2(d,n,u)&&c2(d,s,u)},d2=function(e){return Cm(Te({},e,{isVisibleThroughFrameFn:dT}))},fT=function(e){return Cm(Te({},e,{isVisibleThroughFrameFn:s2}))},h2=function(e){return Cm(Te({},e,{isVisibleThroughFrameFn:a2(e.destination.axis)}))},f2=function(e,r,n){if(typeof n=="boolean")return n;if(!r)return!0;var s=r.invisible,a=r.visible;if(s[e])return!1;var u=a[e];return u?u.shouldAnimate:!0};function p2(t,e){var r=t.page.marginBox,n={top:e.point.y,right:0,bottom:0,left:e.point.x};return gn(wm(r,n))}function lu(t){var e=t.afterDragging,r=t.destination,n=t.displacedBy,s=t.viewport,a=t.forceShouldAnimate,u=t.last;return e.reduce(function(f,g){var y=p2(g,n),_=g.descriptor.id;f.all.push(_);var w=d2({target:y,destination:r,viewport:s,withDroppableDisplacement:!0});if(!w)return f.invisible[g.descriptor.id]=!0,f;var I=f2(_,u,a),b={draggableId:_,shouldAnimate:I};return f.visible[_]=b,f},{all:[],visible:{},invisible:{}})}function g2(t,e){if(!t.length)return 0;var r=t[t.length-1].descriptor.index;return e.inHomeList?r:r+1}function y0(t){var e=t.insideDestination,r=t.inHomeList,n=t.displacedBy,s=t.destination,a=g2(e,{inHomeList:r});return{displaced:au,displacedBy:n,at:{type:"REORDER",destination:{droppableId:s.descriptor.id,index:a}}}}function Wd(t){var e=t.draggable,r=t.insideDestination,n=t.destination,s=t.viewport,a=t.displacedBy,u=t.last,d=t.index,f=t.forceShouldAnimate,g=Na(e,n);if(d==null)return y0({insideDestination:r,inHomeList:g,displacedBy:a,destination:n});var y=co(r,function(k){return k.descriptor.index===d});if(!y)return y0({insideDestination:r,inHomeList:g,displacedBy:a,destination:n});var _=wh(e,r),w=r.indexOf(y),I=_.slice(w),b=lu({afterDragging:I,destination:n,displacedBy:a,last:u,viewport:s.frame,forceShouldAnimate:f});return{displaced:b,displacedBy:a,at:{type:"REORDER",destination:{droppableId:n.descriptor.id,index:d}}}}function ao(t,e){return!!e.effected[t]}var m2=function(t){var e=t.isMovingForward,r=t.destination,n=t.draggables,s=t.combine,a=t.afterCritical;if(!r.isCombineEnabled)return null;var u=s.draggableId,d=n[u],f=d.descriptor.index,g=ao(u,a);return g?e?f:f-1:e?f+1:f},v2=function(t){var e=t.isMovingForward,r=t.isInHomeList,n=t.insideDestination,s=t.location;if(!n.length)return null;var a=s.index,u=e?a+1:a-1,d=n[0].descriptor.index,f=n[n.length-1].descriptor.index,g=r?f:f+1;return u<d||u>g?null:u},y2=function(t){var e=t.isMovingForward,r=t.isInHomeList,n=t.draggable,s=t.draggables,a=t.destination,u=t.insideDestination,d=t.previousImpact,f=t.viewport,g=t.afterCritical,y=d.at;if(y||le(),y.type==="REORDER"){var _=v2({isMovingForward:e,isInHomeList:r,location:y.destination,insideDestination:u});return _==null?null:Wd({draggable:n,insideDestination:u,destination:a,viewport:f,last:d.displaced,displacedBy:d.displacedBy,index:_})}var w=m2({isMovingForward:e,destination:a,displaced:d.displaced,draggables:s,combine:y.combine,afterCritical:g});return w==null?null:Wd({draggable:n,insideDestination:u,destination:a,viewport:f,last:d.displaced,displacedBy:d.displacedBy,index:w})},_2=function(t){var e=t.displaced,r=t.afterCritical,n=t.combineWith,s=t.displacedBy,a=!!(e.visible[n]||e.invisible[n]);return ao(n,r)?a?jt:ka(s.point):a?s.point:jt},w2=function(t){var e=t.afterCritical,r=t.impact,n=t.draggables,s=_h(r);s||le();var a=s.draggableId,u=n[a].page.borderBox.center,d=_2({displaced:r.displaced,afterCritical:e,combineWith:a,displacedBy:r.displacedBy});return Kt(u,d)},pT=function(e,r){return r.margin[e.start]+r.borderBox[e.size]/2},E2=function(e,r){return r.margin[e.end]+r.borderBox[e.size]/2},Am=function(e,r,n){return r[e.crossAxisStart]+n.margin[e.crossAxisStart]+n.borderBox[e.crossAxisSize]/2},_0=function(e){var r=e.axis,n=e.moveRelativeTo,s=e.isMoving;return Zo(r.line,n.marginBox[r.end]+pT(r,s),Am(r,n.marginBox,s))},w0=function(e){var r=e.axis,n=e.moveRelativeTo,s=e.isMoving;return Zo(r.line,n.marginBox[r.start]-E2(r,s),Am(r,n.marginBox,s))},I2=function(e){var r=e.axis,n=e.moveInto,s=e.isMoving;return Zo(r.line,n.contentBox[r.start]+pT(r,s),Am(r,n.contentBox,s))},S2=function(t){var e=t.impact,r=t.draggable,n=t.draggables,s=t.droppable,a=t.afterCritical,u=Da(s.descriptor.id,n),d=r.page,f=s.axis;if(!u.length)return I2({axis:f,moveInto:s.page,isMoving:d});var g=e.displaced,y=e.displacedBy,_=g.all[0];if(_){var w=n[_];if(ao(_,a))return w0({axis:f,moveRelativeTo:w.page,isMoving:d});var I=Bd(w.page,y.point);return w0({axis:f,moveRelativeTo:I,isMoving:d})}var b=u[u.length-1];if(b.descriptor.id===r.descriptor.id)return d.borderBox.center;if(ao(b.descriptor.id,a)){var k=Bd(b.page,ka(a.displacedBy.point));return _0({axis:f,moveRelativeTo:k,isMoving:d})}return _0({axis:f,moveRelativeTo:b.page,isMoving:d})},yg=function(t,e){var r=t.frame;return r?Kt(e,r.scroll.diff.displacement):e},T2=function(e){var r=e.impact,n=e.draggable,s=e.droppable,a=e.draggables,u=e.afterCritical,d=n.page.borderBox.center,f=r.at;return!s||!f?d:f.type==="REORDER"?S2({impact:r,draggable:n,draggables:a,droppable:s,afterCritical:u}):w2({impact:r,draggables:a,afterCritical:u})},Eh=function(t){var e=T2(t),r=t.droppable,n=r?yg(r,e):e;return n},gT=function(t,e){var r=Rr(e,t.scroll.initial),n=ka(r),s=gn({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),a={frame:s,scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:r,displacement:n}}};return a};function E0(t,e){return t.map(function(r){return e[r]})}function b2(t,e){for(var r=0;r<e.length;r++){var n=e[r].visible[t];if(n)return n}return null}var C2=function(t){var e=t.impact,r=t.viewport,n=t.destination,s=t.draggables,a=t.maxScrollChange,u=gT(r,Kt(r.scroll.current,a)),d=n.frame?Im(n,Kt(n.frame.scroll.current,a)):n,f=e.displaced,g=lu({afterDragging:E0(f.all,s),destination:n,displacedBy:e.displacedBy,viewport:u.frame,last:f,forceShouldAnimate:!1}),y=lu({afterDragging:E0(f.all,s),destination:d,displacedBy:e.displacedBy,viewport:r.frame,last:f,forceShouldAnimate:!1}),_={},w={},I=[f,g,y];f.all.forEach(function(k){var D=b2(k,I);if(D){w[k]=D;return}_[k]=!0});var b=Te({},e,{displaced:{all:f.all,invisible:_,visible:w}});return b},A2=function(t,e){return Kt(t.scroll.diff.displacement,e)},Pm=function(t){var e=t.pageBorderBoxCenter,r=t.draggable,n=t.viewport,s=A2(n,e),a=Rr(s,r.page.borderBox.center);return Kt(r.client.borderBox.center,a)},mT=function(t){var e=t.draggable,r=t.destination,n=t.newPageBorderBoxCenter,s=t.viewport,a=t.withDroppableDisplacement,u=t.onlyOnMainAxis,d=u===void 0?!1:u,f=Rr(n,e.page.borderBox.center),g=wu(e.page.borderBox,f),y={target:g,destination:r,withDroppableDisplacement:a,viewport:s};return d?h2(y):fT(y)},P2=function(t){var e=t.isMovingForward,r=t.draggable,n=t.destination,s=t.draggables,a=t.previousImpact,u=t.viewport,d=t.previousPageBorderBoxCenter,f=t.previousClientSelection,g=t.afterCritical;if(!n.isEnabled)return null;var y=Da(n.descriptor.id,s),_=Na(r,n),w=i2({isMovingForward:e,draggable:r,destination:n,insideDestination:y,previousImpact:a})||y2({isMovingForward:e,isInHomeList:_,draggable:r,draggables:s,destination:n,insideDestination:y,previousImpact:a,viewport:u,afterCritical:g});if(!w)return null;var I=Eh({impact:w,draggable:r,droppable:n,draggables:s,afterCritical:g}),b=mT({draggable:r,destination:n,newPageBorderBoxCenter:I,viewport:u.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(b){var k=Pm({pageBorderBoxCenter:I,draggable:r,viewport:u});return{clientSelection:k,impact:w,scrollJumpRequest:null}}var D=Rr(I,d),F=C2({impact:w,viewport:u,destination:n,draggables:s,maxScrollChange:D});return{clientSelection:f,impact:F,scrollJumpRequest:D}},lr=function(e){var r=e.subject.active;return r||le(),r},R2=function(t){var e=t.isMovingForward,r=t.pageBorderBoxCenter,n=t.source,s=t.droppables,a=t.viewport,u=n.subject.active;if(!u)return null;var d=n.axis,f=Qr(u[d.start],u[d.end]),g=yh(s).filter(function(_){return _!==n}).filter(function(_){return _.isEnabled}).filter(function(_){return!!_.subject.active}).filter(function(_){return dT(a.frame)(lr(_))}).filter(function(_){var w=lr(_);return e?u[d.crossAxisEnd]<w[d.crossAxisEnd]:w[d.crossAxisStart]<u[d.crossAxisStart]}).filter(function(_){var w=lr(_),I=Qr(w[d.start],w[d.end]);return f(w[d.start])||f(w[d.end])||I(u[d.start])||I(u[d.end])}).sort(function(_,w){var I=lr(_)[d.crossAxisStart],b=lr(w)[d.crossAxisStart];return e?I-b:b-I}).filter(function(_,w,I){return lr(_)[d.crossAxisStart]===lr(I[0])[d.crossAxisStart]});if(!g.length)return null;if(g.length===1)return g[0];var y=g.filter(function(_){var w=Qr(lr(_)[d.start],lr(_)[d.end]);return w(r[d.line])});return y.length===1?y[0]:y.length>1?y.sort(function(_,w){return lr(_)[d.start]-lr(w)[d.start]})[0]:g.sort(function(_,w){var I=m0(r,v0(lr(_))),b=m0(r,v0(lr(w)));return I!==b?I-b:lr(_)[d.start]-lr(w)[d.start]})[0]},I0=function(e,r){var n=e.page.borderBox.center;return ao(e.descriptor.id,r)?Rr(n,r.displacedBy.point):n},x2=function(e,r){var n=e.page.borderBox;return ao(e.descriptor.id,r)?wu(n,ka(r.displacedBy.point)):n},k2=function(t){var e=t.pageBorderBoxCenter,r=t.viewport,n=t.destination,s=t.insideDestination,a=t.afterCritical,u=s.filter(function(d){return fT({target:x2(d,a),destination:n,viewport:r.frame,withDroppableDisplacement:!0})}).sort(function(d,f){var g=su(e,yg(n,I0(d,a))),y=su(e,yg(n,I0(f,a)));return g<y?-1:y<g?1:d.descriptor.index-f.descriptor.index});return u[0]||null},Eu=Ut(function(e,r){var n=r[e.line];return{value:n,point:Zo(e.line,n)}}),D2=function(e,r,n){var s=e.axis;if(e.descriptor.mode==="virtual")return Zo(s.line,r[s.line]);var a=e.subject.page.contentBox[s.size],u=Da(e.descriptor.id,n),d=u.reduce(function(y,_){return y+_.client.marginBox[s.size]},0),f=d+r[s.line],g=f-a;return g<=0?null:Zo(s.line,g)},vT=function(e,r){return Te({},e,{scroll:Te({},e.scroll,{max:r})})},yT=function(e,r,n){var s=e.frame;Na(r,e)&&le(),e.subject.withPlaceholder&&le();var a=Eu(e.axis,r.displaceBy).point,u=D2(e,a,n),d={placeholderSize:a,increasedBy:u,oldFrameMaxScroll:e.frame?e.frame.scroll.max:null};if(!s){var f=wa({page:e.subject.page,withPlaceholder:d,axis:e.axis,frame:e.frame});return Te({},e,{subject:f})}var g=u?Kt(s.scroll.max,u):s.scroll.max,y=vT(s,g),_=wa({page:e.subject.page,withPlaceholder:d,axis:e.axis,frame:y});return Te({},e,{subject:_,frame:y})},N2=function(e){var r=e.subject.withPlaceholder;r||le();var n=e.frame;if(!n){var s=wa({page:e.subject.page,axis:e.axis,frame:null,withPlaceholder:null});return Te({},e,{subject:s})}var a=r.oldFrameMaxScroll;a||le();var u=vT(n,a),d=wa({page:e.subject.page,axis:e.axis,frame:u,withPlaceholder:null});return Te({},e,{subject:d,frame:u})},O2=function(t){var e=t.previousPageBorderBoxCenter,r=t.moveRelativeTo,n=t.insideDestination,s=t.draggable,a=t.draggables,u=t.destination,d=t.viewport,f=t.afterCritical;if(!r){if(n.length)return null;var g={displaced:au,displacedBy:cT,at:{type:"REORDER",destination:{droppableId:u.descriptor.id,index:0}}},y=Eh({impact:g,draggable:s,droppable:u,draggables:a,afterCritical:f}),_=Na(s,u)?u:yT(u,s,a),w=mT({draggable:s,destination:_,newPageBorderBoxCenter:y,viewport:d.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return w?g:null}var I=e[u.axis.line]<=r.page.borderBox.center[u.axis.line],b=function(){var D=r.descriptor.index;return r.descriptor.id===s.descriptor.id||I?D:D+1}(),k=Eu(u.axis,s.displaceBy);return Wd({draggable:s,insideDestination:n,destination:u,viewport:d,displacedBy:k,last:au,index:b})},L2=function(t){var e=t.isMovingForward,r=t.previousPageBorderBoxCenter,n=t.draggable,s=t.isOver,a=t.draggables,u=t.droppables,d=t.viewport,f=t.afterCritical,g=R2({isMovingForward:e,pageBorderBoxCenter:r,source:s,droppables:u,viewport:d});if(!g)return null;var y=Da(g.descriptor.id,a),_=k2({pageBorderBoxCenter:r,viewport:d,destination:g,insideDestination:y,afterCritical:f}),w=O2({previousPageBorderBoxCenter:r,destination:g,draggable:n,draggables:a,moveRelativeTo:_,insideDestination:y,viewport:d,afterCritical:f});if(!w)return null;var I=Eh({impact:w,draggable:n,droppable:g,draggables:a,afterCritical:f}),b=Pm({pageBorderBoxCenter:I,draggable:n,viewport:d});return{clientSelection:b,impact:w,scrollJumpRequest:null}},xr=function(t){var e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null},M2=function(e,r){var n=xr(e);return n?r[n]:null},V2=function(t){var e=t.state,r=t.type,n=M2(e.impact,e.dimensions.droppables),s=!!n,a=e.dimensions.droppables[e.critical.droppable.id],u=n||a,d=u.axis.direction,f=d==="vertical"&&(r==="MOVE_UP"||r==="MOVE_DOWN")||d==="horizontal"&&(r==="MOVE_LEFT"||r==="MOVE_RIGHT");if(f&&!s)return null;var g=r==="MOVE_DOWN"||r==="MOVE_RIGHT",y=e.dimensions.draggables[e.critical.draggable.id],_=e.current.page.borderBoxCenter,w=e.dimensions,I=w.draggables,b=w.droppables;return f?P2({isMovingForward:g,previousPageBorderBoxCenter:_,draggable:y,destination:u,draggables:I,viewport:e.viewport,previousClientSelection:e.current.client.selection,previousImpact:e.impact,afterCritical:e.afterCritical}):L2({isMovingForward:g,previousPageBorderBoxCenter:_,draggable:y,isOver:u,draggables:I,droppables:b,viewport:e.viewport,afterCritical:e.afterCritical})};function jo(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function _T(t){var e=Qr(t.top,t.bottom),r=Qr(t.left,t.right);return function(s){return e(s.y)&&r(s.x)}}function F2(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function B2(t){var e=t.pageBorderBox,r=t.draggable,n=t.candidates,s=r.page.borderBox.center,a=n.map(function(u){var d=u.axis,f=Zo(u.axis.line,e.center[d.line],u.page.borderBox.center[d.crossAxisLine]);return{id:u.descriptor.id,distance:su(s,f)}}).sort(function(u,d){return d.distance-u.distance});return a[0]?a[0].id:null}function U2(t){var e=t.pageBorderBox,r=t.draggable,n=t.droppables,s=yh(n).filter(function(a){if(!a.isEnabled)return!1;var u=a.subject.active;if(!u||!F2(e,u))return!1;if(_T(u)(e.center))return!0;var d=a.axis,f=u.center[d.crossAxisLine],g=e[d.crossAxisStart],y=e[d.crossAxisEnd],_=Qr(u[d.crossAxisStart],u[d.crossAxisEnd]),w=_(g),I=_(y);return!w&&!I?!0:w?g<f:y>f});return s.length?s.length===1?s[0].descriptor.id:B2({pageBorderBox:e,draggable:r,candidates:s}):null}var wT=function(e,r){return gn(wu(e,r))},j2=function(t,e){var r=t.frame;return r?wT(e,r.scroll.diff.value):e};function ET(t){var e=t.displaced,r=t.id;return!!(e.visible[r]||e.invisible[r])}function $2(t){var e=t.draggable,r=t.closest,n=t.inHomeList;return r?n&&r.descriptor.index>e.descriptor.index?r.descriptor.index-1:r.descriptor.index:null}var z2=function(t){var e=t.pageBorderBoxWithDroppableScroll,r=t.draggable,n=t.destination,s=t.insideDestination,a=t.last,u=t.viewport,d=t.afterCritical,f=n.axis,g=Eu(n.axis,r.displaceBy),y=g.value,_=e[f.start],w=e[f.end],I=wh(r,s),b=co(I,function(D){var F=D.descriptor.id,U=D.page.borderBox.center[f.line],W=ao(F,d),q=ET({displaced:a,id:F});return W?q?w<=U:_<U-y:q?w<=U+y:_<U}),k=$2({draggable:r,closest:b,inHomeList:Na(r,n)});return Wd({draggable:r,insideDestination:s,destination:n,viewport:u,last:a,displacedBy:g,index:k})},W2=4,G2=function(t){var e=t.draggable,r=t.pageBorderBoxWithDroppableScroll,n=t.previousImpact,s=t.destination,a=t.insideDestination,u=t.afterCritical;if(!s.isCombineEnabled)return null;var d=s.axis,f=Eu(s.axis,e.displaceBy),g=f.value,y=r[d.start],_=r[d.end],w=wh(e,a),I=co(w,function(k){var D=k.descriptor.id,F=k.page.borderBox,U=F[d.size],W=U/W2,q=ao(D,u),G=ET({displaced:n.displaced,id:D});return q?G?_>F[d.start]+W&&_<F[d.end]-W:y>F[d.start]-g+W&&y<F[d.end]-g-W:G?_>F[d.start]+g+W&&_<F[d.end]+g-W:y>F[d.start]+W&&y<F[d.end]-W});if(!I)return null;var b={displacedBy:f,displaced:n.displaced,at:{type:"COMBINE",combine:{draggableId:I.descriptor.id,droppableId:s.descriptor.id}}};return b},IT=function(t){var e=t.pageOffset,r=t.draggable,n=t.draggables,s=t.droppables,a=t.previousImpact,u=t.viewport,d=t.afterCritical,f=wT(r.page.borderBox,e),g=U2({pageBorderBox:f,draggable:r,droppables:s});if(!g)return o2;var y=s[g],_=Da(y.descriptor.id,n),w=j2(y,f);return G2({pageBorderBoxWithDroppableScroll:w,draggable:r,previousImpact:a,destination:y,insideDestination:_,afterCritical:d})||z2({pageBorderBoxWithDroppableScroll:w,draggable:r,destination:y,insideDestination:_,last:a.displaced,viewport:u,afterCritical:d})},Rm=function(t,e){var r;return Te({},t,(r={},r[e.descriptor.id]=e,r))},H2=function(e){var r=e.previousImpact,n=e.impact,s=e.droppables,a=xr(r),u=xr(n);if(!a||a===u)return s;var d=s[a];if(!d.subject.withPlaceholder)return s;var f=N2(d);return Rm(s,f)},q2=function(t){var e=t.draggable,r=t.draggables,n=t.droppables,s=t.previousImpact,a=t.impact,u=H2({previousImpact:s,impact:a,droppables:n}),d=xr(a);if(!d)return u;var f=n[d];if(Na(e,f)||f.subject.withPlaceholder)return u;var g=yT(f,e,r);return Rm(u,g)},zl=function(t){var e=t.state,r=t.clientSelection,n=t.dimensions,s=t.viewport,a=t.impact,u=t.scrollJumpRequest,d=s||e.viewport,f=n||e.dimensions,g=r||e.current.client.selection,y=Rr(g,e.initial.client.selection),_={offset:y,selection:g,borderBoxCenter:Kt(e.initial.client.borderBoxCenter,y)},w={selection:Kt(_.selection,d.scroll.current),borderBoxCenter:Kt(_.borderBoxCenter,d.scroll.current),offset:Kt(_.offset,d.scroll.diff.value)},I={client:_,page:w};if(e.phase==="COLLECTING")return Te({phase:"COLLECTING"},e,{dimensions:f,viewport:d,current:I});var b=f.draggables[e.critical.draggable.id],k=a||IT({pageOffset:w.offset,draggable:b,draggables:f.draggables,droppables:f.droppables,previousImpact:e.impact,viewport:d,afterCritical:e.afterCritical}),D=q2({draggable:b,impact:k,previousImpact:e.impact,draggables:f.draggables,droppables:f.droppables}),F=Te({},e,{current:I,dimensions:{draggables:f.draggables,droppables:D},impact:k,viewport:d,scrollJumpRequest:u||null,forceShouldAnimate:u?!1:null});return F};function K2(t,e){return t.map(function(r){return e[r]})}var ST=function(t){var e=t.impact,r=t.viewport,n=t.draggables,s=t.destination,a=t.forceShouldAnimate,u=e.displaced,d=K2(u.all,n),f=lu({afterDragging:d,destination:s,displacedBy:e.displacedBy,viewport:r.frame,forceShouldAnimate:a,last:u});return Te({},e,{displaced:f})},TT=function(t){var e=t.impact,r=t.draggable,n=t.droppable,s=t.draggables,a=t.viewport,u=t.afterCritical,d=Eh({impact:e,draggable:r,draggables:s,droppable:n,afterCritical:u});return Pm({pageBorderBoxCenter:d,draggable:r,viewport:a})},bT=function(t){var e=t.state,r=t.dimensions,n=t.viewport;e.movementMode!=="SNAP"&&le();var s=e.impact,a=n||e.viewport,u=r||e.dimensions,d=u.draggables,f=u.droppables,g=d[e.critical.draggable.id],y=xr(s);y||le();var _=f[y],w=ST({impact:s,viewport:a,destination:_,draggables:d}),I=TT({impact:w,draggable:g,droppable:_,draggables:d,viewport:a,afterCritical:e.afterCritical});return zl({impact:w,clientSelection:I,state:e,dimensions:u,viewport:a})},Q2=function(t){return{index:t.index,droppableId:t.droppableId}},CT=function(t){var e=t.draggable,r=t.home,n=t.draggables,s=t.viewport,a=Eu(r.axis,e.displaceBy),u=Da(r.descriptor.id,n),d=u.indexOf(e);d===-1&&le();var f=u.slice(d+1),g=f.reduce(function(I,b){return I[b.descriptor.id]=!0,I},{}),y={inVirtualList:r.descriptor.mode==="virtual",displacedBy:a,effected:g},_=lu({afterDragging:f,destination:r,displacedBy:a,last:null,viewport:s.frame,forceShouldAnimate:!1}),w={displaced:_,displacedBy:a,at:{type:"REORDER",destination:Q2(e.descriptor)}};return{impact:w,afterCritical:y}},Y2=function(t,e){return{draggables:t.draggables,droppables:Rm(t.droppables,e)}},X2=function(t){var e=t.draggable,r=t.offset,n=t.initialWindowScroll,s=Bd(e.client,r),a=Ud(s,n),u=Te({},e,{placeholder:Te({},e.placeholder,{client:s}),client:s,page:a});return u},J2=function(t){var e=t.frame;return e||le(),e},Z2=function(t){var e=t.additions,r=t.updatedDroppables,n=t.viewport,s=n.scroll.diff.value;return e.map(function(a){var u=a.descriptor.droppableId,d=r[u],f=J2(d),g=f.scroll.diff.value,y=Kt(s,g),_=X2({draggable:a,offset:y,initialWindowScroll:n.scroll.initial});return _})},eM=function(t){var e=t.state,r=t.published,n=r.modified.map(function(W){var q=e.dimensions.droppables[W.droppableId],G=Im(q,W.scroll);return G}),s=Te({},e.dimensions.droppables,{},lT(n)),a=uT(Z2({additions:r.additions,updatedDroppables:s,viewport:e.viewport})),u=Te({},e.dimensions.draggables,{},a);r.removals.forEach(function(W){delete u[W]});var d={droppables:s,draggables:u},f=xr(e.impact),g=f?d.droppables[f]:null,y=d.draggables[e.critical.draggable.id],_=d.droppables[e.critical.droppable.id],w=CT({draggable:y,home:_,draggables:u,viewport:e.viewport}),I=w.impact,b=w.afterCritical,k=g&&g.isCombineEnabled?e.impact:I,D=IT({pageOffset:e.current.page.offset,draggable:d.draggables[e.critical.draggable.id],draggables:d.draggables,droppables:d.droppables,previousImpact:k,viewport:e.viewport,afterCritical:b}),F=Te({phase:"DRAGGING"},e,{phase:"DRAGGING",impact:D,onLiftImpact:I,dimensions:d,afterCritical:b,forceShouldAnimate:!1});if(e.phase==="COLLECTING")return F;var U=Te({phase:"DROP_PENDING"},F,{phase:"DROP_PENDING",reason:e.reason,isWaiting:!1});return U},_g=function(e){return e.movementMode==="SNAP"},Rp=function(e,r,n){var s=Y2(e.dimensions,r);return!_g(e)||n?zl({state:e,dimensions:s}):bT({state:e,dimensions:s})};function xp(t){return t.isDragging&&t.movementMode==="SNAP"?Te({phase:"DRAGGING"},t,{scrollJumpRequest:null}):t}var S0={phase:"IDLE",completed:null,shouldFlush:!1},tM=function(t,e){if(t===void 0&&(t=S0),e.type==="FLUSH")return Te({},S0,{shouldFlush:!0});if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&le();var r=e.payload,n=r.critical,s=r.clientSelection,a=r.viewport,u=r.dimensions,d=r.movementMode,f=u.draggables[n.draggable.id],g=u.droppables[n.droppable.id],y={selection:s,borderBoxCenter:f.client.borderBox.center,offset:jt},_={client:y,page:{selection:Kt(y.selection,a.scroll.initial),borderBoxCenter:Kt(y.selection,a.scroll.initial),offset:Kt(y.selection,a.scroll.diff.value)}},w=yh(u.droppables).every(function(kt){return!kt.isFixedOnPage}),I=CT({draggable:f,home:g,draggables:u.draggables,viewport:a}),b=I.impact,k=I.afterCritical,D={phase:"DRAGGING",isDragging:!0,critical:n,movementMode:d,dimensions:u,initial:_,current:_,isWindowScrollAllowed:w,impact:b,afterCritical:k,onLiftImpact:b,viewport:a,scrollJumpRequest:null,forceShouldAnimate:null};return D}if(e.type==="COLLECTION_STARTING"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&le();var F=Te({phase:"COLLECTING"},t,{phase:"COLLECTING"});return F}if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||le(),eM({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;jo(t)||le();var U=e.payload.client;return Zi(U,t.current.client.selection)?t:zl({state:t,clientSelection:U,impact:_g(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return xp(t);jo(t)||le();var W=e.payload,q=W.id,G=W.newScroll,X=t.dimensions.droppables[q];if(!X)return t;var R=Im(X,G);return Rp(t,R,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;jo(t)||le();var A=e.payload,P=A.id,N=A.isEnabled,O=t.dimensions.droppables[P];O||le(),O.isEnabled===N&&le();var B=Te({},O,{isEnabled:N});return Rp(t,B,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;jo(t)||le();var C=e.payload,be=C.id,Qe=C.isCombineEnabled,Ye=t.dimensions.droppables[be];Ye||le(),Ye.isCombineEnabled===Qe&&le();var Me=Te({},Ye,{isCombineEnabled:Qe});return Rp(t,Me,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;jo(t)||le(),t.isWindowScrollAllowed||le();var ie=e.payload.newScroll;if(Zi(t.viewport.scroll.current,ie))return xp(t);var ce=gT(t.viewport,ie);return _g(t)?bT({state:t,viewport:ce}):zl({state:t,viewport:ce})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!jo(t))return t;var ae=e.payload.maxScroll;if(Zi(ae,t.viewport.scroll.max))return t;var V=Te({},t.viewport,{scroll:Te({},t.viewport.scroll,{max:ae})});return Te({phase:"DRAGGING"},t,{viewport:V})}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&le();var Y=V2({state:t,type:e.type});return Y?zl({state:t,impact:Y.impact,clientSelection:Y.clientSelection,scrollJumpRequest:Y.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){var pe=e.payload.reason;t.phase!=="COLLECTING"&&le();var Pe=Te({phase:"DROP_PENDING"},t,{phase:"DROP_PENDING",isWaiting:!0,reason:pe});return Pe}if(e.type==="DROP_ANIMATE"){var we=e.payload,xe=we.completed,Oe=we.dropDuration,Ne=we.newHomeClientOffset;t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||le();var Fe={phase:"DROP_ANIMATING",completed:xe,dropDuration:Oe,newHomeClientOffset:Ne,dimensions:t.dimensions};return Fe}if(e.type==="DROP_COMPLETE"){var et=e.payload.completed;return{phase:"IDLE",completed:et,shouldFlush:!1}}return t},rM=function(e){return{type:"BEFORE_INITIAL_CAPTURE",payload:e}},nM=function(e){return{type:"LIFT",payload:e}},iM=function(e){return{type:"INITIAL_PUBLISH",payload:e}},oM=function(e){return{type:"PUBLISH_WHILE_DRAGGING",payload:e}},sM=function(){return{type:"COLLECTION_STARTING",payload:null}},aM=function(e){return{type:"UPDATE_DROPPABLE_SCROLL",payload:e}},lM=function(e){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:e}},uM=function(e){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:e}},AT=function(e){return{type:"MOVE",payload:e}},cM=function(e){return{type:"MOVE_BY_WINDOW_SCROLL",payload:e}},dM=function(e){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:e}},hM=function(){return{type:"MOVE_UP",payload:null}},fM=function(){return{type:"MOVE_DOWN",payload:null}},pM=function(){return{type:"MOVE_RIGHT",payload:null}},gM=function(){return{type:"MOVE_LEFT",payload:null}},xm=function(){return{type:"FLUSH",payload:null}},mM=function(e){return{type:"DROP_ANIMATE",payload:e}},km=function(e){return{type:"DROP_COMPLETE",payload:e}},PT=function(e){return{type:"DROP",payload:e}},vM=function(e){return{type:"DROP_PENDING",payload:e}},RT=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},yM=function(t){return function(e){var r=e.getState,n=e.dispatch;return function(s){return function(a){if(a.type!=="LIFT"){s(a);return}var u=a.payload,d=u.id,f=u.clientSelection,g=u.movementMode,y=r();y.phase==="DROP_ANIMATING"&&n(km({completed:y.completed})),r().phase!=="IDLE"&&le(),n(xm()),n(rM({draggableId:d,movementMode:g}));var _={shouldPublishImmediately:g==="SNAP"},w={draggableId:d,scrollOptions:_},I=t.startPublishing(w),b=I.critical,k=I.dimensions,D=I.viewport;n(iM({critical:b,dimensions:k,clientSelection:f,movementMode:g,viewport:D}))}}}},_M=function(t){return function(){return function(e){return function(r){r.type==="INITIAL_PUBLISH"&&t.dragging(),r.type==="DROP_ANIMATE"&&t.dropping(r.payload.completed.result.reason),(r.type==="FLUSH"||r.type==="DROP_COMPLETE")&&t.resting(),e(r)}}}},Dm={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},uu={opacity:{drop:0,combining:.7},scale:{drop:.75}},Nm={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},Bo=Nm.outOfTheWay+"s "+Dm.outOfTheWay,Wl={fluid:"opacity "+Bo,snap:"transform "+Bo+", opacity "+Bo,drop:function(e){var r=e+"s "+Dm.drop;return"transform "+r+", opacity "+r},outOfTheWay:"transform "+Bo,placeholder:"height "+Bo+", width "+Bo+", margin "+Bo},T0=function(e){return Zi(e,jt)?null:"translate("+e.x+"px, "+e.y+"px)"},wg={moveTo:T0,drop:function(e,r){var n=T0(e);return n?r?n+" scale("+uu.scale.drop+")":n:null}},Eg=Nm.minDropTime,xT=Nm.maxDropTime,wM=xT-Eg,b0=1500,EM=.6,IM=function(t){var e=t.current,r=t.destination,n=t.reason,s=su(e,r);if(s<=0)return Eg;if(s>=b0)return xT;var a=s/b0,u=Eg+wM*a,d=n==="CANCEL"?u*EM:u;return Number(d.toFixed(2))},SM=function(t){var e=t.impact,r=t.draggable,n=t.dimensions,s=t.viewport,a=t.afterCritical,u=n.draggables,d=n.droppables,f=xr(e),g=f?d[f]:null,y=d[r.descriptor.droppableId],_=TT({impact:e,draggable:r,draggables:u,afterCritical:a,droppable:g||y,viewport:s}),w=Rr(_,r.client.borderBox.center);return w},TM=function(t){var e=t.draggables,r=t.reason,n=t.lastImpact,s=t.home,a=t.viewport,u=t.onLiftImpact;if(!n.at||r!=="DROP"){var d=ST({draggables:e,impact:u,destination:s,viewport:a,forceShouldAnimate:!0});return{impact:d,didDropInsideDroppable:!1}}if(n.at.type==="REORDER")return{impact:n,didDropInsideDroppable:!0};var f=Te({},n,{displaced:au});return{impact:f,didDropInsideDroppable:!0}},bM=function(t){var e=t.getState,r=t.dispatch;return function(n){return function(s){if(s.type!=="DROP"){n(s);return}var a=e(),u=s.payload.reason;if(a.phase==="COLLECTING"){r(vM({reason:u}));return}if(a.phase!=="IDLE"){var d=a.phase==="DROP_PENDING"&&a.isWaiting;d&&le(),a.phase==="DRAGGING"||a.phase==="DROP_PENDING"||le();var f=a.critical,g=a.dimensions,y=g.draggables[a.critical.draggable.id],_=TM({reason:u,lastImpact:a.impact,afterCritical:a.afterCritical,onLiftImpact:a.onLiftImpact,home:a.dimensions.droppables[a.critical.droppable.id],viewport:a.viewport,draggables:a.dimensions.draggables}),w=_.impact,I=_.didDropInsideDroppable,b=I?Tm(w):null,k=I?_h(w):null,D={index:f.draggable.index,droppableId:f.droppable.id},F={draggableId:y.descriptor.id,type:y.descriptor.type,source:D,reason:u,mode:a.movementMode,destination:b,combine:k},U=SM({impact:w,draggable:y,dimensions:g,viewport:a.viewport,afterCritical:a.afterCritical}),W={critical:a.critical,afterCritical:a.afterCritical,result:F,impact:w},q=!Zi(a.current.client.offset,U)||!!F.combine;if(!q){r(km({completed:W}));return}var G=IM({current:a.current.client.offset,destination:U,reason:u}),X={newHomeClientOffset:U,dropDuration:G,completed:W};r(mM(X))}}}},kT=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function CM(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(r){r.target!==window&&r.target!==window.document||t()}}}function AM(t){var e=t.onWindowScroll;function r(){e(kT())}var n=ou(r),s=CM(n),a=Ji;function u(){return a!==Ji}function d(){u()&&le(),a=Kr(window,[s])}function f(){u()||le(),n.cancel(),a(),a=Ji}return{start:d,stop:f,isActive:u}}var PM=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},RM=function(t){var e=AM({onWindowScroll:function(n){t.dispatch(cM({newScroll:n}))}});return function(r){return function(n){!e.isActive()&&n.type==="INITIAL_PUBLISH"&&e.start(),e.isActive()&&PM(n)&&e.stop(),r(n)}}},xM=function(t){var e=!1,r=!1,n=setTimeout(function(){r=!0}),s=function(u){e||r||(e=!0,t(u),clearTimeout(n))};return s.wasCalled=function(){return e},s},kM=function(){var t=[],e=function(a){var u=Sm(t,function(g){return g.timerId===a});u===-1&&le();var d=t.splice(u,1),f=d[0];f.callback()},r=function(a){var u=setTimeout(function(){return e(u)}),d={timerId:u,callback:a};t.push(d)},n=function(){if(t.length){var a=[].concat(t);t.length=0,a.forEach(function(u){clearTimeout(u.timerId),u.callback()})}};return{add:r,flush:n}},DM=function(e,r){return e==null&&r==null?!0:e==null||r==null?!1:e.droppableId===r.droppableId&&e.index===r.index},NM=function(e,r){return e==null&&r==null?!0:e==null||r==null?!1:e.draggableId===r.draggableId&&e.droppableId===r.droppableId},OM=function(e,r){if(e===r)return!0;var n=e.draggable.id===r.draggable.id&&e.draggable.droppableId===r.draggable.droppableId&&e.draggable.type===r.draggable.type&&e.draggable.index===r.draggable.index,s=e.droppable.id===r.droppable.id&&e.droppable.type===r.droppable.type;return n&&s},Al=function(e,r){r()},Hc=function(e,r){return{draggableId:e.draggable.id,type:e.droppable.type,source:{droppableId:e.droppable.id,index:e.draggable.index},mode:r}},kp=function(e,r,n,s){if(!e){n(s(r));return}var a=xM(n),u={announce:a};e(r,u),a.wasCalled()||n(s(r))},LM=function(t,e){var r=kM(),n=null,s=function(w,I){n&&le(),Al("onBeforeCapture",function(){var b=t().onBeforeCapture;if(b){var k={draggableId:w,mode:I};b(k)}})},a=function(w,I){n&&le(),Al("onBeforeDragStart",function(){var b=t().onBeforeDragStart;b&&b(Hc(w,I))})},u=function(w,I){n&&le();var b=Hc(w,I);n={mode:I,lastCritical:w,lastLocation:b.source,lastCombine:null},r.add(function(){Al("onDragStart",function(){return kp(t().onDragStart,b,e,hd.onDragStart)})})},d=function(w,I){var b=Tm(I),k=_h(I);n||le();var D=!OM(w,n.lastCritical);D&&(n.lastCritical=w);var F=!DM(n.lastLocation,b);F&&(n.lastLocation=b);var U=!NM(n.lastCombine,k);if(U&&(n.lastCombine=k),!(!D&&!F&&!U)){var W=Te({},Hc(w,n.mode),{combine:k,destination:b});r.add(function(){Al("onDragUpdate",function(){return kp(t().onDragUpdate,W,e,hd.onDragUpdate)})})}},f=function(){n||le(),r.flush()},g=function(w){n||le(),n=null,Al("onDragEnd",function(){return kp(t().onDragEnd,w,e,hd.onDragEnd)})},y=function(){if(n){var w=Te({},Hc(n.lastCritical,n.mode),{combine:null,destination:null,reason:"CANCEL"});g(w)}};return{beforeCapture:s,beforeStart:a,start:u,update:d,flush:f,drop:g,abort:y}},MM=function(t,e){var r=LM(t,e);return function(n){return function(s){return function(a){if(a.type==="BEFORE_INITIAL_CAPTURE"){r.beforeCapture(a.payload.draggableId,a.payload.movementMode);return}if(a.type==="INITIAL_PUBLISH"){var u=a.payload.critical;r.beforeStart(u,a.payload.movementMode),s(a),r.start(u,a.payload.movementMode);return}if(a.type==="DROP_COMPLETE"){var d=a.payload.completed.result;r.flush(),s(a),r.drop(d);return}if(s(a),a.type==="FLUSH"){r.abort();return}var f=n.getState();f.phase==="DRAGGING"&&r.update(f.critical,f.impact)}}}},VM=function(t){return function(e){return function(r){if(r.type!=="DROP_ANIMATION_FINISHED"){e(r);return}var n=t.getState();n.phase!=="DROP_ANIMATING"&&le(),t.dispatch(km({completed:n.completed}))}}},FM=function(t){var e=null,r=null;function n(){r&&(cancelAnimationFrame(r),r=null),e&&(e(),e=null)}return function(s){return function(a){if((a.type==="FLUSH"||a.type==="DROP_COMPLETE"||a.type==="DROP_ANIMATION_FINISHED")&&n(),s(a),a.type==="DROP_ANIMATE"){var u={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var f=t.getState();f.phase==="DROP_ANIMATING"&&t.dispatch(RT())}};r=requestAnimationFrame(function(){r=null,e=Kr(window,[u])})}}}},BM=function(t){return function(){return function(e){return function(r){(r.type==="DROP_COMPLETE"||r.type==="FLUSH"||r.type==="DROP_ANIMATE")&&t.stopPublishing(),e(r)}}}},UM=function(t){var e=!1;return function(){return function(r){return function(n){if(n.type==="INITIAL_PUBLISH"){e=!0,t.tryRecordFocus(n.payload.critical.draggable.id),r(n),t.tryRestoreFocusRecorded();return}if(r(n),!!e){if(n.type==="FLUSH"){e=!1,t.tryRestoreFocusRecorded();return}if(n.type==="DROP_COMPLETE"){e=!1;var s=n.payload.completed.result;s.combine&&t.tryShiftRecord(s.draggableId,s.combine.draggableId),t.tryRestoreFocusRecorded()}}}}}},jM=function(e){return e.type==="DROP_COMPLETE"||e.type==="DROP_ANIMATE"||e.type==="FLUSH"},$M=function(t){return function(e){return function(r){return function(n){if(jM(n)){t.stop(),r(n);return}if(n.type==="INITIAL_PUBLISH"){r(n);var s=e.getState();s.phase!=="DRAGGING"&&le(),t.start(s);return}r(n),t.scroll(e.getState())}}}},zM=function(t){return function(e){return function(r){if(e(r),r.type==="PUBLISH_WHILE_DRAGGING"){var n=t.getState();n.phase==="DROP_PENDING"&&(n.isWaiting||t.dispatch(PT({reason:n.reason})))}}}},WM=HS,GM=function(t){var e=t.dimensionMarshal,r=t.focusMarshal,n=t.styleMarshal,s=t.getResponders,a=t.announce,u=t.autoScroller;return GS(tM,WM(KO(_M(n),BM(e),yM(e),bM,VM,FM,zM,$M(u),RM,UM(r),MM(s,a))))},Dp=function(){return{additions:{},removals:{},modified:{}}};function HM(t){var e=t.registry,r=t.callbacks,n=Dp(),s=null,a=function(){s||(r.collectionStarting(),s=requestAnimationFrame(function(){s=null;var y=n,_=y.additions,w=y.removals,I=y.modified,b=Object.keys(_).map(function(F){return e.draggable.getById(F).getDimension(jt)}).sort(function(F,U){return F.descriptor.index-U.descriptor.index}),k=Object.keys(I).map(function(F){var U=e.droppable.getById(F),W=U.callbacks.getScrollWhileDragging();return{droppableId:F,scroll:W}}),D={additions:b,removals:Object.keys(w),modified:k};n=Dp(),r.publish(D)}))},u=function(y){var _=y.descriptor.id;n.additions[_]=y,n.modified[y.descriptor.droppableId]=!0,n.removals[_]&&delete n.removals[_],a()},d=function(y){var _=y.descriptor;n.removals[_.id]=!0,n.modified[_.droppableId]=!0,n.additions[_.id]&&delete n.additions[_.id],a()},f=function(){s&&(cancelAnimationFrame(s),s=null,n=Dp())};return{add:u,remove:d,stop:f}}var DT=function(t){var e=t.scrollHeight,r=t.scrollWidth,n=t.height,s=t.width,a=Rr({x:r,y:e},{x:s,y:n}),u={x:Math.max(0,a.x),y:Math.max(0,a.y)};return u},NT=function(){var t=document.documentElement;return t||le(),t},OT=function(){var t=NT(),e=DT({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight});return e},qM=function(){var t=kT(),e=OT(),r=t.y,n=t.x,s=NT(),a=s.clientWidth,u=s.clientHeight,d=n+a,f=r+u,g=gn({top:r,left:n,right:d,bottom:f}),y={frame:g,scroll:{initial:t,current:t,max:e,diff:{value:jt,displacement:jt}}};return y},KM=function(t){var e=t.critical,r=t.scrollOptions,n=t.registry,s=qM(),a=s.scroll.current,u=e.droppable,d=n.droppable.getAllByType(u.type).map(function(_){return _.callbacks.getDimensionAndWatchScroll(a,r)}),f=n.draggable.getAllByType(e.draggable.type).map(function(_){return _.getDimension(a)}),g={draggables:uT(f),droppables:lT(d)},y={dimensions:g,critical:e,viewport:s};return y};function C0(t,e,r){if(r.descriptor.id===e.id||r.descriptor.type!==e.type)return!1;var n=t.droppable.getById(r.descriptor.droppableId);return n.descriptor.mode==="virtual"}var QM=function(t,e){var r=null,n=HM({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),s=function(I,b){t.droppable.exists(I)||le(),r&&e.updateDroppableIsEnabled({id:I,isEnabled:b})},a=function(I,b){r&&(t.droppable.exists(I)||le(),e.updateDroppableIsCombineEnabled({id:I,isCombineEnabled:b}))},u=function(I,b){r&&(t.droppable.exists(I)||le(),e.updateDroppableScroll({id:I,newScroll:b}))},d=function(I,b){r&&t.droppable.getById(I).callbacks.scroll(b)},f=function(){if(r){n.stop();var I=r.critical.droppable;t.droppable.getAllByType(I.type).forEach(function(b){return b.callbacks.dragStopped()}),r.unsubscribe(),r=null}},g=function(I){r||le();var b=r.critical.draggable;I.type==="ADDITION"&&C0(t,b,I.value)&&n.add(I.value),I.type==="REMOVAL"&&C0(t,b,I.value)&&n.remove(I.value)},y=function(I){r&&le();var b=t.draggable.getById(I.draggableId),k=t.droppable.getById(b.descriptor.droppableId),D={draggable:b.descriptor,droppable:k.descriptor},F=t.subscribe(g);return r={critical:D,unsubscribe:F},KM({critical:D,registry:t,scrollOptions:I.scrollOptions})},_={updateDroppableIsEnabled:s,updateDroppableIsCombineEnabled:a,scrollDroppable:d,updateDroppableScroll:u,startPublishing:y,stopPublishing:f};return _},LT=function(t,e){return t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP"},YM=function(t){window.scrollBy(t.x,t.y)},XM=Ut(function(t){return yh(t).filter(function(e){return!(!e.isEnabled||!e.frame)})}),JM=function(e,r){var n=co(XM(r),function(s){return s.frame||le(),_T(s.frame.pageMarginBox)(e)});return n},ZM=function(t){var e=t.center,r=t.destination,n=t.droppables;if(r){var s=n[r];return s.frame?s:null}var a=JM(e,n);return a},eo={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(e){return Math.pow(e,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},eV=function(t,e){var r=t[e.size]*eo.startFromPercentage,n=t[e.size]*eo.maxScrollAtPercentage,s={startScrollingFrom:r,maxScrollValueAt:n};return s},MT=function(t){var e=t.startOfRange,r=t.endOfRange,n=t.current,s=r-e;if(s===0)return 0;var a=n-e,u=a/s;return u},Om=1,tV=function(t,e){if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return eo.maxPixelScroll;if(t===e.startScrollingFrom)return Om;var r=MT({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),n=1-r,s=eo.maxPixelScroll*eo.ease(n);return Math.ceil(s)},A0=eo.durationDampening.accelerateAt,P0=eo.durationDampening.stopDampeningAt,rV=function(t,e){var r=e,n=P0,s=Date.now(),a=s-r;if(a>=P0)return t;if(a<A0)return Om;var u=MT({startOfRange:A0,endOfRange:n,current:a}),d=t*eo.ease(u);return Math.ceil(d)},R0=function(t){var e=t.distanceToEdge,r=t.thresholds,n=t.dragStartTime,s=t.shouldUseTimeDampening,a=tV(e,r);return a===0?0:s?Math.max(rV(a,n),Om):a},x0=function(t){var e=t.container,r=t.distanceToEdges,n=t.dragStartTime,s=t.axis,a=t.shouldUseTimeDampening,u=eV(e,s),d=r[s.end]<r[s.start];return d?R0({distanceToEdge:r[s.end],thresholds:u,dragStartTime:n,shouldUseTimeDampening:a}):-1*R0({distanceToEdge:r[s.start],thresholds:u,dragStartTime:n,shouldUseTimeDampening:a})},nV=function(t){var e=t.container,r=t.subject,n=t.proposedScroll,s=r.height>e.height,a=r.width>e.width;return!a&&!s?n:a&&s?null:{x:a?0:n.x,y:s?0:n.y}},iV=sT(function(t){return t===0?0:t}),VT=function(t){var e=t.dragStartTime,r=t.container,n=t.subject,s=t.center,a=t.shouldUseTimeDampening,u={top:s.y-r.top,right:r.right-s.x,bottom:r.bottom-s.y,left:s.x-r.left},d=x0({container:r,distanceToEdges:u,dragStartTime:e,axis:bm,shouldUseTimeDampening:a}),f=x0({container:r,distanceToEdges:u,dragStartTime:e,axis:hT,shouldUseTimeDampening:a}),g=iV({x:f,y:d});if(Zi(g,jt))return null;var y=nV({container:r,subject:n,proposedScroll:g});return y?Zi(y,jt)?null:y:null},oV=sT(function(t){return t===0?0:t>0?1:-1}),Lm=function(){var t=function(r,n){return r<0?r:r>n?r-n:0};return function(e){var r=e.current,n=e.max,s=e.change,a=Kt(r,s),u={x:t(a.x,n.x),y:t(a.y,n.y)};return Zi(u,jt)?null:u}}(),FT=function(e){var r=e.max,n=e.current,s=e.change,a={x:Math.max(n.x,r.x),y:Math.max(n.y,r.y)},u=oV(s),d=Lm({max:a,current:n,change:u});return!d||u.x!==0&&d.x===0||u.y!==0&&d.y===0},Mm=function(e,r){return FT({current:e.scroll.current,max:e.scroll.max,change:r})},sV=function(e,r){if(!Mm(e,r))return null;var n=e.scroll.max,s=e.scroll.current;return Lm({current:s,max:n,change:r})},Vm=function(e,r){var n=e.frame;return n?FT({current:n.scroll.current,max:n.scroll.max,change:r}):!1},aV=function(e,r){var n=e.frame;return!n||!Vm(e,r)?null:Lm({current:n.scroll.current,max:n.scroll.max,change:r})},lV=function(t){var e=t.viewport,r=t.subject,n=t.center,s=t.dragStartTime,a=t.shouldUseTimeDampening,u=VT({dragStartTime:s,container:e.frame,subject:r,center:n,shouldUseTimeDampening:a});return u&&Mm(e,u)?u:null},uV=function(t){var e=t.droppable,r=t.subject,n=t.center,s=t.dragStartTime,a=t.shouldUseTimeDampening,u=e.frame;if(!u)return null;var d=VT({dragStartTime:s,container:u.pageMarginBox,subject:r,center:n,shouldUseTimeDampening:a});return d&&Vm(e,d)?d:null},k0=function(t){var e=t.state,r=t.dragStartTime,n=t.shouldUseTimeDampening,s=t.scrollWindow,a=t.scrollDroppable,u=e.current.page.borderBoxCenter,d=e.dimensions.draggables[e.critical.draggable.id],f=d.page.marginBox;if(e.isWindowScrollAllowed){var g=e.viewport,y=lV({dragStartTime:r,viewport:g,subject:f,center:u,shouldUseTimeDampening:n});if(y){s(y);return}}var _=ZM({center:u,destination:xr(e.impact),droppables:e.dimensions.droppables});if(_){var w=uV({dragStartTime:r,droppable:_,subject:f,center:u,shouldUseTimeDampening:n});w&&a(_.descriptor.id,w)}},cV=function(t){var e=t.scrollWindow,r=t.scrollDroppable,n=ou(e),s=ou(r),a=null,u=function(y){a||le();var _=a,w=_.shouldUseTimeDampening,I=_.dragStartTime;k0({state:y,scrollWindow:n,scrollDroppable:s,dragStartTime:I,shouldUseTimeDampening:w})},d=function(y){a&&le();var _=Date.now(),w=!1,I=function(){w=!0};k0({state:y,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:I,scrollDroppable:I}),a={dragStartTime:_,shouldUseTimeDampening:w},w&&u(y)},f=function(){a&&(n.cancel(),s.cancel(),a=null)};return{start:d,stop:f,scroll:u}},dV=function(t){var e=t.move,r=t.scrollDroppable,n=t.scrollWindow,s=function(g,y){var _=Kt(g.current.client.selection,y);e({client:_})},a=function(g,y){if(!Vm(g,y))return y;var _=aV(g,y);if(!_)return r(g.descriptor.id,y),null;var w=Rr(y,_);r(g.descriptor.id,w);var I=Rr(y,w);return I},u=function(g,y,_){if(!g||!Mm(y,_))return _;var w=sV(y,_);if(!w)return n(_),null;var I=Rr(_,w);n(I);var b=Rr(_,I);return b},d=function(g){var y=g.scrollJumpRequest;if(y){var _=xr(g.impact);_||le();var w=a(g.dimensions.droppables[_],y);if(w){var I=g.viewport,b=u(g.isWindowScrollAllowed,I,w);b&&s(g,b)}}};return d},hV=function(t){var e=t.scrollDroppable,r=t.scrollWindow,n=t.move,s=cV({scrollWindow:r,scrollDroppable:e}),a=dV({move:n,scrollWindow:r,scrollDroppable:e}),u=function(g){if(g.phase==="DRAGGING"){if(g.movementMode==="FLUID"){s.scroll(g);return}g.scrollJumpRequest&&a(g)}},d={scroll:u,start:s.start,stop:s.stop};return d},Ea="data-rbd",Ia=function(){var t=Ea+"-drag-handle";return{base:t,draggableId:t+"-draggable-id",contextId:t+"-context-id"}}(),Ig=function(){var t=Ea+"-draggable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),fV=function(){var t=Ea+"-droppable";return{base:t,contextId:t+"-context-id",id:t+"-id"}}(),D0={contextId:Ea+"-scroll-container-context-id"},pV=function(e){return function(r){return"["+r+'="'+e+'"]'}},Pl=function(e,r){return e.map(function(n){var s=n.styles[r];return s?n.selector+" { "+s+" }":""}).join(" ")},gV="pointer-events: none;",mV=function(t){var e=pV(t),r=function(){var d=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(Ia.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:d,dragging:gV,dropAnimating:d}}}(),n=function(){var d=`
      transition: `+Wl.outOfTheWay+`;
    `;return{selector:e(Ig.contextId),styles:{dragging:d,dropAnimating:d,userCancel:d}}}(),s={selector:e(fV.contextId),styles:{always:"overflow-anchor: none;"}},a={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},u=[n,r,s,a];return{always:Pl(u,"always"),resting:Pl(u,"resting"),dragging:Pl(u,"dragging"),dropAnimating:Pl(u,"dropAnimating"),userCancel:Pl(u,"userCancel")}},kr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?oe.useLayoutEffect:oe.useEffect,Np=function(){var e=document.querySelector("head");return e||le(),e},N0=function(e){var r=document.createElement("style");return e&&r.setAttribute("nonce",e),r.type="text/css",r};function vV(t,e){var r=qe(function(){return mV(t)},[t]),n=oe.useRef(null),s=oe.useRef(null),a=ye(Ut(function(_){var w=s.current;w||le(),w.textContent=_}),[]),u=ye(function(_){var w=n.current;w||le(),w.textContent=_},[]);kr(function(){!n.current&&!s.current||le();var _=N0(e),w=N0(e);return n.current=_,s.current=w,_.setAttribute(Ea+"-always",t),w.setAttribute(Ea+"-dynamic",t),Np().appendChild(_),Np().appendChild(w),u(r.always),a(r.resting),function(){var I=function(k){var D=k.current;D||le(),Np().removeChild(D),k.current=null};I(n),I(s)}},[e,u,a,r.always,r.resting,t]);var d=ye(function(){return a(r.dragging)},[a,r.dragging]),f=ye(function(_){if(_==="DROP"){a(r.dropAnimating);return}a(r.userCancel)},[a,r.dropAnimating,r.userCancel]),g=ye(function(){s.current&&a(r.resting)},[a,r.resting]),y=qe(function(){return{dragging:d,dropping:f,resting:g}},[d,f,g]);return y}var BT=function(t){return t&&t.ownerDocument?t.ownerDocument.defaultView:window};function Ih(t){return t instanceof BT(t).HTMLElement}function yV(t,e){var r="["+Ia.contextId+'="'+t+'"]',n=aT(document.querySelectorAll(r));if(!n.length)return null;var s=co(n,function(a){return a.getAttribute(Ia.draggableId)===e});return!s||!Ih(s)?null:s}function _V(t){var e=oe.useRef({}),r=oe.useRef(null),n=oe.useRef(null),s=oe.useRef(!1),a=ye(function(w,I){var b={id:w,focus:I};return e.current[w]=b,function(){var D=e.current,F=D[w];F!==b&&delete D[w]}},[]),u=ye(function(w){var I=yV(t,w);I&&I!==document.activeElement&&I.focus()},[t]),d=ye(function(w,I){r.current===w&&(r.current=I)},[]),f=ye(function(){n.current||s.current&&(n.current=requestAnimationFrame(function(){n.current=null;var w=r.current;w&&u(w)}))},[u]),g=ye(function(w){r.current=null;var I=document.activeElement;I&&I.getAttribute(Ia.draggableId)===w&&(r.current=w)},[]);kr(function(){return s.current=!0,function(){s.current=!1;var w=n.current;w&&cancelAnimationFrame(w)}},[]);var y=qe(function(){return{register:a,tryRecordFocus:g,tryRestoreFocusRecorded:f,tryShiftRecord:d}},[a,g,f,d]);return y}function wV(){var t={draggables:{},droppables:{}},e=[];function r(_){return e.push(_),function(){var I=e.indexOf(_);I!==-1&&e.splice(I,1)}}function n(_){e.length&&e.forEach(function(w){return w(_)})}function s(_){return t.draggables[_]||null}function a(_){var w=s(_);return w||le(),w}var u={register:function(w){t.draggables[w.descriptor.id]=w,n({type:"ADDITION",value:w})},update:function(w,I){var b=t.draggables[I.descriptor.id];b&&b.uniqueId===w.uniqueId&&(delete t.draggables[I.descriptor.id],t.draggables[w.descriptor.id]=w)},unregister:function(w){var I=w.descriptor.id,b=s(I);b&&w.uniqueId===b.uniqueId&&(delete t.draggables[I],n({type:"REMOVAL",value:w}))},getById:a,findById:s,exists:function(w){return!!s(w)},getAllByType:function(w){return zd(t.draggables).filter(function(I){return I.descriptor.type===w})}};function d(_){return t.droppables[_]||null}function f(_){var w=d(_);return w||le(),w}var g={register:function(w){t.droppables[w.descriptor.id]=w},unregister:function(w){var I=d(w.descriptor.id);I&&w.uniqueId===I.uniqueId&&delete t.droppables[w.descriptor.id]},getById:f,findById:d,exists:function(w){return!!d(w)},getAllByType:function(w){return zd(t.droppables).filter(function(I){return I.descriptor.type===w})}};function y(){t.draggables={},t.droppables={},e.length=0}return{draggable:u,droppable:g,subscribe:r,clean:y}}function EV(){var t=qe(wV,[]);return oe.useEffect(function(){return function(){requestAnimationFrame(t.clean)}},[t]),t}var Fm=je.createContext(null),Gd=function(){var t=document.body;return t||le(),t},IV={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},SV=function(e){return"rbd-announcement-"+e};function TV(t){var e=qe(function(){return SV(t)},[t]),r=oe.useRef(null);oe.useEffect(function(){var a=document.createElement("div");return r.current=a,a.id=e,a.setAttribute("aria-live","assertive"),a.setAttribute("aria-atomic","true"),Te(a.style,IV),Gd().appendChild(a),function(){setTimeout(function(){var f=Gd();f.contains(a)&&f.removeChild(a),a===r.current&&(r.current=null)})}},[e]);var n=ye(function(s){var a=r.current;if(a){a.textContent=s;return}},[]);return n}var bV=0,CV={separator:"::"};function Bm(t,e){return e===void 0&&(e=CV),qe(function(){return""+t+e.separator+bV++},[e.separator,t])}function AV(t){var e=t.contextId,r=t.uniqueId;return"rbd-hidden-text-"+e+"-"+r}function PV(t){var e=t.contextId,r=t.text,n=Bm("hidden-text",{separator:"-"}),s=qe(function(){return AV({contextId:e,uniqueId:n})},[n,e]);return oe.useEffect(function(){var u=document.createElement("div");return u.id=s,u.textContent=r,u.style.display="none",Gd().appendChild(u),function(){var f=Gd();f.contains(u)&&f.removeChild(u)}},[s,r]),s}var Sh=je.createContext(null);function UT(t){var e=oe.useRef(t);return oe.useEffect(function(){e.current=t}),e}function RV(){var t=null;function e(){return!!t}function r(u){return u===t}function n(u){t&&le();var d={abandon:u};return t=d,d}function s(){t||le(),t=null}function a(){t&&(t.abandon(),s())}return{isClaimed:e,isActive:r,claim:n,release:s,tryAbandon:a}}var xV=9,kV=13,Um=27,jT=32,DV=33,NV=34,OV=35,LV=36,MV=37,VV=38,FV=39,BV=40,qc,UV=(qc={},qc[kV]=!0,qc[xV]=!0,qc),$T=function(t){UV[t.keyCode]&&t.preventDefault()},Th=function(){var t="visibilitychange";if(typeof document>"u")return t;var e=[t,"ms"+t,"webkit"+t,"moz"+t,"o"+t],r=co(e,function(n){return"on"+n in document});return r||t}(),zT=0,O0=5;function jV(t,e){return Math.abs(e.x-t.x)>=O0||Math.abs(e.y-t.y)>=O0}var L0={type:"IDLE"};function $V(t){var e=t.cancel,r=t.completed,n=t.getPhase,s=t.setPhase;return[{eventName:"mousemove",fn:function(u){var d=u.button,f=u.clientX,g=u.clientY;if(d===zT){var y={x:f,y:g},_=n();if(_.type==="DRAGGING"){u.preventDefault(),_.actions.move(y);return}_.type!=="PENDING"&&le();var w=_.point;if(jV(w,y)){u.preventDefault();var I=_.actions.fluidLift(y);s({type:"DRAGGING",actions:I})}}}},{eventName:"mouseup",fn:function(u){var d=n();if(d.type!=="DRAGGING"){e();return}u.preventDefault(),d.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"mousedown",fn:function(u){n().type==="DRAGGING"&&u.preventDefault(),e()}},{eventName:"keydown",fn:function(u){var d=n();if(d.type==="PENDING"){e();return}if(u.keyCode===Um){u.preventDefault(),e();return}$T(u)}},{eventName:"resize",fn:e},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){n().type==="PENDING"&&e()}},{eventName:"webkitmouseforcedown",fn:function(u){var d=n();if(d.type==="IDLE"&&le(),d.actions.shouldRespectForcePress()){e();return}u.preventDefault()}},{eventName:Th,fn:e}]}function zV(t){var e=oe.useRef(L0),r=oe.useRef(Ji),n=qe(function(){return{eventName:"mousedown",fn:function(_){if(!_.defaultPrevented&&_.button===zT&&!(_.ctrlKey||_.metaKey||_.shiftKey||_.altKey)){var w=t.findClosestDraggableId(_);if(w){var I=t.tryGetLock(w,u,{sourceEvent:_});if(I){_.preventDefault();var b={x:_.clientX,y:_.clientY};r.current(),g(I,b)}}}}}},[t]),s=qe(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(_){if(!_.defaultPrevented){var w=t.findClosestDraggableId(_);if(w){var I=t.findOptionsForDraggable(w);I&&(I.shouldRespectForcePress||t.canGetLock(w)&&_.preventDefault())}}}}},[t]),a=ye(function(){var _={passive:!1,capture:!0};r.current=Kr(window,[s,n],_)},[s,n]),u=ye(function(){var y=e.current;y.type!=="IDLE"&&(e.current=L0,r.current(),a())},[a]),d=ye(function(){var y=e.current;u(),y.type==="DRAGGING"&&y.actions.cancel({shouldBlockNextClick:!0}),y.type==="PENDING"&&y.actions.abort()},[u]),f=ye(function(){var _={capture:!0,passive:!1},w=$V({cancel:d,completed:u,getPhase:function(){return e.current},setPhase:function(b){e.current=b}});r.current=Kr(window,w,_)},[d,u]),g=ye(function(_,w){e.current.type!=="IDLE"&&le(),e.current={type:"PENDING",point:w,actions:_},f()},[f]);kr(function(){return a(),function(){r.current()}},[a])}var Ys;function WV(){}var GV=(Ys={},Ys[NV]=!0,Ys[DV]=!0,Ys[LV]=!0,Ys[OV]=!0,Ys);function HV(t,e){function r(){e(),t.cancel()}function n(){e(),t.drop()}return[{eventName:"keydown",fn:function(a){if(a.keyCode===Um){a.preventDefault(),r();return}if(a.keyCode===jT){a.preventDefault(),n();return}if(a.keyCode===BV){a.preventDefault(),t.moveDown();return}if(a.keyCode===VV){a.preventDefault(),t.moveUp();return}if(a.keyCode===FV){a.preventDefault(),t.moveRight();return}if(a.keyCode===MV){a.preventDefault(),t.moveLeft();return}if(GV[a.keyCode]){a.preventDefault();return}$T(a)}},{eventName:"mousedown",fn:r},{eventName:"mouseup",fn:r},{eventName:"click",fn:r},{eventName:"touchstart",fn:r},{eventName:"resize",fn:r},{eventName:"wheel",fn:r,options:{passive:!0}},{eventName:Th,fn:r}]}function qV(t){var e=oe.useRef(WV),r=qe(function(){return{eventName:"keydown",fn:function(a){if(a.defaultPrevented||a.keyCode!==jT)return;var u=t.findClosestDraggableId(a);if(!u)return;var d=t.tryGetLock(u,y,{sourceEvent:a});if(!d)return;a.preventDefault();var f=!0,g=d.snapLift();e.current();function y(){f||le(),f=!1,e.current(),n()}e.current=Kr(window,HV(g,y),{capture:!0,passive:!1})}}},[t]),n=ye(function(){var a={passive:!1,capture:!0};e.current=Kr(window,[r],a)},[r]);kr(function(){return n(),function(){e.current()}},[n])}var Op={type:"IDLE"},KV=120,QV=.15;function YV(t){var e=t.cancel,r=t.getPhase;return[{eventName:"orientationchange",fn:e},{eventName:"resize",fn:e},{eventName:"contextmenu",fn:function(s){s.preventDefault()}},{eventName:"keydown",fn:function(s){if(r().type!=="DRAGGING"){e();return}s.keyCode===Um&&s.preventDefault(),e()}},{eventName:Th,fn:e}]}function XV(t){var e=t.cancel,r=t.completed,n=t.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(a){var u=n();if(u.type!=="DRAGGING"){e();return}u.hasMoved=!0;var d=a.touches[0],f=d.clientX,g=d.clientY,y={x:f,y:g};a.preventDefault(),u.actions.move(y)}},{eventName:"touchend",fn:function(a){var u=n();if(u.type!=="DRAGGING"){e();return}a.preventDefault(),u.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"touchcancel",fn:function(a){if(n().type!=="DRAGGING"){e();return}a.preventDefault(),e()}},{eventName:"touchforcechange",fn:function(a){var u=n();u.type==="IDLE"&&le();var d=a.touches[0];if(d){var f=d.force>=QV;if(f){var g=u.actions.shouldRespectForcePress();if(u.type==="PENDING"){g&&e();return}if(g){if(u.hasMoved){a.preventDefault();return}e();return}a.preventDefault()}}}},{eventName:Th,fn:e}]}function JV(t){var e=oe.useRef(Op),r=oe.useRef(Ji),n=ye(function(){return e.current},[]),s=ye(function(I){e.current=I},[]),a=qe(function(){return{eventName:"touchstart",fn:function(I){if(!I.defaultPrevented){var b=t.findClosestDraggableId(I);if(b){var k=t.tryGetLock(b,d,{sourceEvent:I});if(k){var D=I.touches[0],F=D.clientX,U=D.clientY,W={x:F,y:U};r.current(),_(k,W)}}}}}},[t]),u=ye(function(){var I={capture:!0,passive:!1};r.current=Kr(window,[a],I)},[a]),d=ye(function(){var w=e.current;w.type!=="IDLE"&&(w.type==="PENDING"&&clearTimeout(w.longPressTimerId),s(Op),r.current(),u())},[u,s]),f=ye(function(){var w=e.current;d(),w.type==="DRAGGING"&&w.actions.cancel({shouldBlockNextClick:!0}),w.type==="PENDING"&&w.actions.abort()},[d]),g=ye(function(){var I={capture:!0,passive:!1},b={cancel:f,completed:d,getPhase:n},k=Kr(window,XV(b),I),D=Kr(window,YV(b),I);r.current=function(){k(),D()}},[f,n,d]),y=ye(function(){var I=n();I.type!=="PENDING"&&le();var b=I.actions.fluidLift(I.point);s({type:"DRAGGING",actions:b,hasMoved:!1})},[n,s]),_=ye(function(I,b){n().type!=="IDLE"&&le();var k=setTimeout(y,KV);s({type:"PENDING",point:b,actions:I,longPressTimerId:k}),g()},[g,n,s,y]);kr(function(){return u(),function(){r.current();var b=n();b.type==="PENDING"&&(clearTimeout(b.longPressTimerId),s(Op))}},[n,u,s]),kr(function(){var I=Kr(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return I},[])}var ZV={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function WT(t,e){if(e==null)return!1;var r=!!ZV[e.tagName.toLowerCase()];if(r)return!0;var n=e.getAttribute("contenteditable");return n==="true"||n===""?!0:e===t?!1:WT(t,e.parentElement)}function eF(t,e){var r=e.target;return Ih(r)?WT(t,r):!1}var tF=function(t){return gn(t.getBoundingClientRect()).center};function rF(t){return t instanceof BT(t).Element}var nF=function(){var t="matches";if(typeof document>"u")return t;var e=[t,"msMatchesSelector","webkitMatchesSelector"],r=co(e,function(n){return n in Element.prototype});return r||t}();function GT(t,e){return t==null?null:t[nF](e)?t:GT(t.parentElement,e)}function iF(t,e){return t.closest?t.closest(e):GT(t,e)}function oF(t){return"["+Ia.contextId+'="'+t+'"]'}function sF(t,e){var r=e.target;if(!rF(r))return null;var n=oF(t),s=iF(r,n);return!s||!Ih(s)?null:s}function aF(t,e){var r=sF(t,e);return r?r.getAttribute(Ia.draggableId):null}function lF(t,e){var r="["+Ig.contextId+'="'+t+'"]',n=aT(document.querySelectorAll(r)),s=co(n,function(a){return a.getAttribute(Ig.id)===e});return!s||!Ih(s)?null:s}function uF(t){t.preventDefault()}function Kc(t){var e=t.expected,r=t.phase,n=t.isLockActive;return t.shouldWarn,!(!n()||e!==r)}function HT(t){var e=t.lockAPI,r=t.store,n=t.registry,s=t.draggableId;if(e.isClaimed())return!1;var a=n.draggable.findById(s);return!(!a||!a.options.isEnabled||!LT(r.getState(),s))}function cF(t){var e=t.lockAPI,r=t.contextId,n=t.store,s=t.registry,a=t.draggableId,u=t.forceSensorStop,d=t.sourceEvent,f=HT({lockAPI:e,store:n,registry:s,draggableId:a});if(!f)return null;var g=s.draggable.getById(a),y=lF(r,g.descriptor.id);if(!y||d&&!g.options.canDragInteractiveElements&&eF(y,d))return null;var _=e.claim(u||Ji),w="PRE_DRAG";function I(){return g.options.shouldRespectForcePress}function b(){return e.isActive(_)}function k(X,R){Kc({expected:X,phase:w,isLockActive:b,shouldWarn:!0})&&n.dispatch(R())}var D=k.bind(null,"DRAGGING");function F(X){function R(){e.release(),w="COMPLETED"}w!=="PRE_DRAG"&&(R(),w!=="PRE_DRAG"&&le()),n.dispatch(nM(X.liftActionArgs)),w="DRAGGING";function A(P,N){if(N===void 0&&(N={shouldBlockNextClick:!1}),X.cleanup(),N.shouldBlockNextClick){var O=Kr(window,[{eventName:"click",fn:uF,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(O)}R(),n.dispatch(PT({reason:P}))}return Te({isActive:function(){return Kc({expected:"DRAGGING",phase:w,isLockActive:b,shouldWarn:!1})},shouldRespectForcePress:I,drop:function(N){return A("DROP",N)},cancel:function(N){return A("CANCEL",N)}},X.actions)}function U(X){var R=ou(function(P){D(function(){return AT({client:P})})}),A=F({liftActionArgs:{id:a,clientSelection:X,movementMode:"FLUID"},cleanup:function(){return R.cancel()},actions:{move:R}});return Te({},A,{move:R})}function W(){var X={moveUp:function(){return D(hM)},moveRight:function(){return D(pM)},moveDown:function(){return D(fM)},moveLeft:function(){return D(gM)}};return F({liftActionArgs:{id:a,clientSelection:tF(y),movementMode:"SNAP"},cleanup:Ji,actions:X})}function q(){var X=Kc({expected:"PRE_DRAG",phase:w,isLockActive:b,shouldWarn:!0});X&&e.release()}var G={isActive:function(){return Kc({expected:"PRE_DRAG",phase:w,isLockActive:b,shouldWarn:!1})},shouldRespectForcePress:I,fluidLift:U,snapLift:W,abort:q};return G}var dF=[zV,qV,JV];function hF(t){var e=t.contextId,r=t.store,n=t.registry,s=t.customSensors,a=t.enableDefaultSensors,u=[].concat(a?dF:[],s||[]),d=oe.useState(function(){return RV()})[0],f=ye(function(U,W){U.isDragging&&!W.isDragging&&d.tryAbandon()},[d]);kr(function(){var U=r.getState(),W=r.subscribe(function(){var q=r.getState();f(U,q),U=q});return W},[d,r,f]),kr(function(){return d.tryAbandon},[d.tryAbandon]);for(var g=ye(function(F){return HT({lockAPI:d,registry:n,store:r,draggableId:F})},[d,n,r]),y=ye(function(F,U,W){return cF({lockAPI:d,registry:n,contextId:e,store:r,draggableId:F,forceSensorStop:U,sourceEvent:W&&W.sourceEvent?W.sourceEvent:null})},[e,d,n,r]),_=ye(function(F){return aF(e,F)},[e]),w=ye(function(F){var U=n.draggable.findById(F);return U?U.options:null},[n.draggable]),I=ye(function(){d.isClaimed()&&(d.tryAbandon(),r.getState().phase!=="IDLE"&&r.dispatch(xm()))},[d,r]),b=ye(d.isClaimed,[d]),k=qe(function(){return{canGetLock:g,tryGetLock:y,findClosestDraggableId:_,findOptionsForDraggable:w,tryReleaseLock:I,isLockClaimed:b}},[g,y,_,w,I,b]),D=0;D<u.length;D++)u[D](k)}var fF=function(e){return{onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragEnd:e.onDragEnd,onDragUpdate:e.onDragUpdate}};function Rl(t){return t.current||le(),t.current}function pF(t){var e=t.contextId,r=t.setCallbacks,n=t.sensors,s=t.nonce,a=t.dragHandleUsageInstructions,u=oe.useRef(null),d=UT(t),f=ye(function(){return fF(d.current)},[d]),g=TV(e),y=PV({contextId:e,text:a}),_=vV(e,s),w=ye(function(P){Rl(u).dispatch(P)},[]),I=qe(function(){return r0({publishWhileDragging:oM,updateDroppableScroll:aM,updateDroppableIsEnabled:lM,updateDroppableIsCombineEnabled:uM,collectionStarting:sM},w)},[w]),b=EV(),k=qe(function(){return QM(b,I)},[b,I]),D=qe(function(){return hV(Te({scrollWindow:YM,scrollDroppable:k.scrollDroppable},r0({move:AT},w)))},[k.scrollDroppable,w]),F=_V(e),U=qe(function(){return GM({announce:g,autoScroller:D,dimensionMarshal:k,focusMarshal:F,getResponders:f,styleMarshal:_})},[g,D,k,F,f,_]);u.current=U;var W=ye(function(){var P=Rl(u),N=P.getState();N.phase!=="IDLE"&&P.dispatch(xm())},[]),q=ye(function(){var P=Rl(u).getState();return P.isDragging||P.phase==="DROP_ANIMATING"},[]),G=qe(function(){return{isDragging:q,tryAbort:W}},[q,W]);r(G);var X=ye(function(P){return LT(Rl(u).getState(),P)},[]),R=ye(function(){return jo(Rl(u).getState())},[]),A=qe(function(){return{marshal:k,focus:F,contextId:e,canLift:X,isMovementAllowed:R,dragHandleUsageInstructionsId:y,registry:b}},[e,k,y,F,X,R,b]);return hF({contextId:e,store:U,registry:b,customSensors:n,enableDefaultSensors:t.enableDefaultSensors!==!1}),oe.useEffect(function(){return W},[W]),je.createElement(Sh.Provider,{value:A},je.createElement(ZO,{context:Fm,store:U},t.children))}var gF=0;function mF(){return qe(function(){return""+gF++},[])}function vF(t){var e=mF(),r=t.dragHandleUsageInstructions||hd.dragHandleUsageInstructions;return je.createElement(qL,null,function(n){return je.createElement(pF,{nonce:t.nonce,contextId:e,setCallbacks:n,dragHandleUsageInstructions:r,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd},t.children)})}var qT=function(e){return function(r){return e===r}},yF=qT("scroll"),_F=qT("auto"),M0=function(e,r){return r(e.overflowX)||r(e.overflowY)},wF=function(e){var r=window.getComputedStyle(e),n={overflowX:r.overflowX,overflowY:r.overflowY};return M0(n,yF)||M0(n,_F)},EF=function(){return!1},IF=function t(e){return e==null?null:e===document.body?EF()?e:null:e===document.documentElement?null:wF(e)?e:t(e.parentElement)},Sg=function(t){return{x:t.scrollLeft,y:t.scrollTop}},SF=function t(e){if(!e)return!1;var r=window.getComputedStyle(e);return r.position==="fixed"?!0:t(e.parentElement)},TF=function(t){var e=IF(t),r=SF(t);return{closestScrollable:e,isFixedOnPage:r}},bF=function(t){var e=t.descriptor,r=t.isEnabled,n=t.isCombineEnabled,s=t.isFixedOnPage,a=t.direction,u=t.client,d=t.page,f=t.closest,g=function(){if(!f)return null;var I=f.scrollSize,b=f.client,k=DT({scrollHeight:I.scrollHeight,scrollWidth:I.scrollWidth,height:b.paddingBox.height,width:b.paddingBox.width});return{pageMarginBox:f.page.marginBox,frameClient:b,scrollSize:I,shouldClipSubject:f.shouldClipSubject,scroll:{initial:f.scroll,current:f.scroll,max:k,diff:{value:jt,displacement:jt}}}}(),y=a==="vertical"?bm:hT,_=wa({page:d,withPlaceholder:null,axis:y,frame:g}),w={descriptor:e,isCombineEnabled:n,isFixedOnPage:s,axis:y,isEnabled:r,client:u,page:d,frame:g,subject:_};return w},CF=function(e,r){var n=rT(e);if(!r||e!==r)return n;var s=n.paddingBox.top-r.scrollTop,a=n.paddingBox.left-r.scrollLeft,u=s+r.scrollHeight,d=a+r.scrollWidth,f={top:s,right:d,bottom:u,left:a},g=wm(f,n.border),y=Em({borderBox:g,margin:n.margin,border:n.border,padding:n.padding});return y},AF=function(t){var e=t.ref,r=t.descriptor,n=t.env,s=t.windowScroll,a=t.direction,u=t.isDropDisabled,d=t.isCombineEnabled,f=t.shouldClipSubject,g=n.closestScrollable,y=CF(e,g),_=Ud(y,s),w=function(){if(!g)return null;var b=rT(g),k={scrollHeight:g.scrollHeight,scrollWidth:g.scrollWidth};return{client:b,page:Ud(b,s),scroll:Sg(g),scrollSize:k,shouldClipSubject:f}}(),I=bF({descriptor:r,isEnabled:!u,isCombineEnabled:d,isFixedOnPage:n.isFixedOnPage,direction:a,client:y,page:_,closest:w});return I},PF={passive:!1},RF={passive:!0},V0=function(t){return t.shouldPublishImmediately?PF:RF};function Hd(t){var e=oe.useContext(t);return e||le(),e}var Qc=function(e){return e&&e.env.closestScrollable||null};function xF(t){var e=oe.useRef(null),r=Hd(Sh),n=Bm("droppable"),s=r.registry,a=r.marshal,u=UT(t),d=qe(function(){return{id:t.droppableId,type:t.type,mode:t.mode}},[t.droppableId,t.mode,t.type]),f=oe.useRef(d),g=qe(function(){return Ut(function(q,G){e.current||le();var X={x:q,y:G};a.updateDroppableScroll(d.id,X)})},[d.id,a]),y=ye(function(){var q=e.current;return!q||!q.env.closestScrollable?jt:Sg(q.env.closestScrollable)},[]),_=ye(function(){var q=y();g(q.x,q.y)},[y,g]),w=qe(function(){return ou(_)},[_]),I=ye(function(){var q=e.current,G=Qc(q);q&&G||le();var X=q.scrollOptions;if(X.shouldPublishImmediately){_();return}w()},[w,_]),b=ye(function(q,G){e.current&&le();var X=u.current,R=X.getDroppableRef();R||le();var A=TF(R),P={ref:R,descriptor:d,env:A,scrollOptions:G};e.current=P;var N=AF({ref:R,descriptor:d,env:A,windowScroll:q,direction:X.direction,isDropDisabled:X.isDropDisabled,isCombineEnabled:X.isCombineEnabled,shouldClipSubject:!X.ignoreContainerClipping}),O=A.closestScrollable;return O&&(O.setAttribute(D0.contextId,r.contextId),O.addEventListener("scroll",I,V0(P.scrollOptions))),N},[r.contextId,d,I,u]),k=ye(function(){var q=e.current,G=Qc(q);return q&&G||le(),Sg(G)},[]),D=ye(function(){var q=e.current;q||le();var G=Qc(q);e.current=null,G&&(w.cancel(),G.removeAttribute(D0.contextId),G.removeEventListener("scroll",I,V0(q.scrollOptions)))},[I,w]),F=ye(function(q){var G=e.current;G||le();var X=Qc(G);X||le(),X.scrollTop+=q.y,X.scrollLeft+=q.x},[]),U=qe(function(){return{getDimensionAndWatchScroll:b,getScrollWhileDragging:k,dragStopped:D,scroll:F}},[D,b,k,F]),W=qe(function(){return{uniqueId:n,descriptor:d,callbacks:U}},[U,d,n]);kr(function(){return f.current=W.descriptor,s.droppable.register(W),function(){e.current&&D(),s.droppable.unregister(W)}},[U,d,D,W,a,s.droppable]),kr(function(){e.current&&a.updateDroppableIsEnabled(f.current.id,!t.isDropDisabled)},[t.isDropDisabled,a]),kr(function(){e.current&&a.updateDroppableIsCombineEnabled(f.current.id,t.isCombineEnabled)},[t.isCombineEnabled,a])}function Lp(){}var F0={width:0,height:0,margin:ZL},kF=function(e){var r=e.isAnimatingOpenOnMount,n=e.placeholder,s=e.animate;return r||s==="close"?F0:{height:n.client.borderBox.height,width:n.client.borderBox.width,margin:n.client.margin}},DF=function(e){var r=e.isAnimatingOpenOnMount,n=e.placeholder,s=e.animate,a=kF({isAnimatingOpenOnMount:r,placeholder:n,animate:s});return{display:n.display,boxSizing:"border-box",width:a.width,height:a.height,marginTop:a.margin.top,marginRight:a.margin.right,marginBottom:a.margin.bottom,marginLeft:a.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:s!=="none"?Wl.placeholder:null}};function NF(t){var e=oe.useRef(null),r=ye(function(){e.current&&(clearTimeout(e.current),e.current=null)},[]),n=t.animate,s=t.onTransitionEnd,a=t.onClose,u=t.contextId,d=oe.useState(t.animate==="open"),f=d[0],g=d[1];oe.useEffect(function(){return f?n!=="open"?(r(),g(!1),Lp):e.current?Lp:(e.current=setTimeout(function(){e.current=null,g(!1)}),r):Lp},[n,f,r]);var y=ye(function(w){w.propertyName==="height"&&(s(),n==="close"&&a())},[n,a,s]),_=DF({isAnimatingOpenOnMount:f,animate:t.animate,placeholder:t.placeholder});return je.createElement(t.placeholder.tagName,{style:_,"data-rbd-placeholder-context-id":u,onTransitionEnd:y,ref:t.innerRef})}var OF=je.memo(NF),jm=je.createContext(null),LF=function(t){WS(e,t);function e(){for(var n,s=arguments.length,a=new Array(s),u=0;u<s;u++)a[u]=arguments[u];return n=t.call.apply(t,[this].concat(a))||this,n.state={isVisible:!!n.props.on,data:n.props.on,animate:n.props.shouldAnimate&&n.props.on?"open":"none"},n.onClose=function(){n.state.animate==="close"&&n.setState({isVisible:!1})},n}e.getDerivedStateFromProps=function(s,a){return s.shouldAnimate?s.on?{isVisible:!0,data:s.on,animate:"open"}:a.isVisible?{isVisible:!0,data:a.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!s.on,data:s.on,animate:"none"}};var r=e.prototype;return r.render=function(){if(!this.state.isVisible)return null;var s={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(s)},e}(je.PureComponent),B0={dragging:5e3,dropAnimating:4500},MF=function(e,r){return r?Wl.drop(r.duration):e?Wl.snap:Wl.fluid},VF=function(e,r){return e?r?uu.opacity.drop:uu.opacity.combining:null},FF=function(e){return e.forceShouldAnimate!=null?e.forceShouldAnimate:e.mode==="SNAP"};function BF(t){var e=t.dimension,r=e.client,n=t.offset,s=t.combineWith,a=t.dropping,u=!!s,d=FF(t),f=!!a,g=f?wg.drop(n,u):wg.moveTo(n),y={position:"fixed",top:r.marginBox.top,left:r.marginBox.left,boxSizing:"border-box",width:r.borderBox.width,height:r.borderBox.height,transition:MF(d,a),transform:g,opacity:VF(u,f),zIndex:f?B0.dropAnimating:B0.dragging,pointerEvents:"none"};return y}function UF(t){return{transform:wg.moveTo(t.offset),transition:t.shouldAnimateDisplacement?null:"none"}}function jF(t){return t.type==="DRAGGING"?BF(t):UF(t)}function $F(t,e,r){r===void 0&&(r=jt);var n=window.getComputedStyle(e),s=e.getBoundingClientRect(),a=tT(s,n),u=Ud(a,r),d={client:a,tagName:e.tagName.toLowerCase(),display:n.display},f={x:a.marginBox.width,y:a.marginBox.height},g={descriptor:t,placeholder:d,displaceBy:f,client:a,page:u};return g}function zF(t){var e=Bm("draggable"),r=t.descriptor,n=t.registry,s=t.getDraggableRef,a=t.canDragInteractiveElements,u=t.shouldRespectForcePress,d=t.isEnabled,f=qe(function(){return{canDragInteractiveElements:a,shouldRespectForcePress:u,isEnabled:d}},[a,d,u]),g=ye(function(I){var b=s();return b||le(),$F(r,b,I)},[r,s]),y=qe(function(){return{uniqueId:e,descriptor:r,options:f,getDimension:g}},[r,g,f,e]),_=oe.useRef(y),w=oe.useRef(!0);kr(function(){return n.draggable.register(_.current),function(){return n.draggable.unregister(_.current)}},[n.draggable]),kr(function(){if(w.current){w.current=!1;return}var I=_.current;_.current=y,n.draggable.update(y,I)},[y,n.draggable])}function WF(t){t.preventDefault()}function GF(t){var e=oe.useRef(null),r=ye(function(P){e.current=P},[]),n=ye(function(){return e.current},[]),s=Hd(Sh),a=s.contextId,u=s.dragHandleUsageInstructionsId,d=s.registry,f=Hd(jm),g=f.type,y=f.droppableId,_=qe(function(){return{id:t.draggableId,index:t.index,type:g,droppableId:y}},[t.draggableId,t.index,g,y]),w=t.children,I=t.draggableId,b=t.isEnabled,k=t.shouldRespectForcePress,D=t.canDragInteractiveElements,F=t.isClone,U=t.mapped,W=t.dropAnimationFinished;if(!F){var q=qe(function(){return{descriptor:_,registry:d,getDraggableRef:n,canDragInteractiveElements:D,shouldRespectForcePress:k,isEnabled:b}},[_,d,n,D,k,b]);zF(q)}var G=qe(function(){return b?{tabIndex:0,role:"button","aria-describedby":u,"data-rbd-drag-handle-draggable-id":I,"data-rbd-drag-handle-context-id":a,draggable:!1,onDragStart:WF}:null},[a,u,I,b]),X=ye(function(P){U.type==="DRAGGING"&&U.dropping&&P.propertyName==="transform"&&W()},[W,U]),R=qe(function(){var P=jF(U),N=U.type==="DRAGGING"&&U.dropping?X:null,O={innerRef:r,draggableProps:{"data-rbd-draggable-context-id":a,"data-rbd-draggable-id":I,style:P,onTransitionEnd:N},dragHandleProps:G};return O},[a,G,I,U,X,r]),A=qe(function(){return{draggableId:_.id,type:_.type,source:{index:_.index,droppableId:_.droppableId}}},[_.droppableId,_.id,_.index,_.type]);return w(R,U.snapshot,A)}var KT=function(t,e){return t===e},QT=function(t){var e=t.combine,r=t.destination;return r?r.droppableId:e?e.droppableId:null},HF=function(e){return e.combine?e.combine.draggableId:null},qF=function(e){return e.at&&e.at.type==="COMBINE"?e.at.combine.draggableId:null};function KF(){var t=Ut(function(s,a){return{x:s,y:a}}),e=Ut(function(s,a,u,d,f){return{isDragging:!0,isClone:a,isDropAnimating:!!f,dropAnimation:f,mode:s,draggingOver:u,combineWith:d,combineTargetFor:null}}),r=Ut(function(s,a,u,d,f,g,y){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:f,combineWith:g,mode:a,offset:s,dimension:u,forceShouldAnimate:y,snapshot:e(a,d,f,g,null)}}}),n=function(a,u){if(a.isDragging){if(a.critical.draggable.id!==u.draggableId)return null;var d=a.current.client.offset,f=a.dimensions.draggables[u.draggableId],g=xr(a.impact),y=qF(a.impact),_=a.forceShouldAnimate;return r(t(d.x,d.y),a.movementMode,f,u.isClone,g,y,_)}if(a.phase==="DROP_ANIMATING"){var w=a.completed;if(w.result.draggableId!==u.draggableId)return null;var I=u.isClone,b=a.dimensions.draggables[u.draggableId],k=w.result,D=k.mode,F=QT(k),U=HF(k),W=a.dropDuration,q={duration:W,curve:Dm.drop,moveTo:a.newHomeClientOffset,opacity:U?uu.opacity.drop:null,scale:U?uu.scale.drop:null};return{mapped:{type:"DRAGGING",offset:a.newHomeClientOffset,dimension:b,dropping:q,draggingOver:F,combineWith:U,mode:D,forceShouldAnimate:null,snapshot:e(D,I,F,U,q)}}}return null};return n}function YT(t){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}var QF={mapped:{type:"SECONDARY",offset:jt,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:YT(null)}};function YF(){var t=Ut(function(u,d){return{x:u,y:d}}),e=Ut(YT),r=Ut(function(u,d,f){return d===void 0&&(d=null),{mapped:{type:"SECONDARY",offset:u,combineTargetFor:d,shouldAnimateDisplacement:f,snapshot:e(d)}}}),n=function(d){return d?r(jt,d,!0):null},s=function(d,f,g,y){var _=g.displaced.visible[d],w=!!(y.inVirtualList&&y.effected[d]),I=_h(g),b=I&&I.draggableId===d?f:null;if(!_){if(!w)return n(b);if(g.displaced.invisible[d])return null;var k=ka(y.displacedBy.point),D=t(k.x,k.y);return r(D,b,!0)}if(w)return n(b);var F=g.displacedBy.point,U=t(F.x,F.y);return r(U,b,_.shouldAnimate)},a=function(d,f){if(d.isDragging)return d.critical.draggable.id===f.draggableId?null:s(f.draggableId,d.critical.draggable.id,d.impact,d.afterCritical);if(d.phase==="DROP_ANIMATING"){var g=d.completed;return g.result.draggableId===f.draggableId?null:s(f.draggableId,g.result.draggableId,g.impact,g.afterCritical)}return null};return a}var XF=function(){var e=KF(),r=YF(),n=function(a,u){return e(a,u)||r(a,u)||QF};return n},JF={dropAnimationFinished:RT},ZF=JS(XF,JF,null,{context:Fm,pure:!0,areStatePropsEqual:KT})(GF);function XT(t){var e=Hd(jm),r=e.isUsingCloneFor;return r===t.draggableId&&!t.isClone?null:je.createElement(ZF,t)}function e4(t){var e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,r=!!t.disableInteractiveElementBlocking,n=!!t.shouldRespectForcePress;return je.createElement(XT,Te({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:r,shouldRespectForcePress:n}))}function t4(t){var e=oe.useContext(Sh);e||le();var r=e.contextId,n=e.isMovementAllowed,s=oe.useRef(null),a=oe.useRef(null),u=t.children,d=t.droppableId,f=t.type,g=t.mode,y=t.direction,_=t.ignoreContainerClipping,w=t.isDropDisabled,I=t.isCombineEnabled,b=t.snapshot,k=t.useClone,D=t.updateViewportMaxScroll,F=t.getContainerForClone,U=ye(function(){return s.current},[]),W=ye(function(O){s.current=O},[]);ye(function(){return a.current},[]);var q=ye(function(O){a.current=O},[]),G=ye(function(){n()&&D({maxScroll:OT()})},[n,D]);xF({droppableId:d,type:f,mode:g,direction:y,isDropDisabled:w,isCombineEnabled:I,ignoreContainerClipping:_,getDroppableRef:U});var X=je.createElement(LF,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},function(O){var B=O.onClose,C=O.data,be=O.animate;return je.createElement(OF,{placeholder:C,onClose:B,innerRef:q,animate:be,contextId:r,onTransitionEnd:G})}),R=qe(function(){return{innerRef:W,placeholder:X,droppableProps:{"data-rbd-droppable-id":d,"data-rbd-droppable-context-id":r}}},[r,d,X,W]),A=k?k.dragging.draggableId:null,P=qe(function(){return{droppableId:d,type:f,isUsingCloneFor:A}},[d,A,f]);function N(){if(!k)return null;var O=k.dragging,B=k.render,C=je.createElement(XT,{draggableId:O.draggableId,index:O.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(be,Qe){return B(be,Qe,O)});return ML.createPortal(C,F())}return je.createElement(jm.Provider,{value:P},u(R,b),N())}var Mp=function(e,r){return e===r.droppable.type},U0=function(e,r){return r.draggables[e.draggable.id]},r4=function(){var e={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},r=Te({},e,{shouldAnimatePlaceholder:!1}),n=Ut(function(u){return{draggableId:u.id,type:u.type,source:{index:u.index,droppableId:u.droppableId}}}),s=Ut(function(u,d,f,g,y,_){var w=y.descriptor.id,I=y.descriptor.droppableId===u;if(I){var b=_?{render:_,dragging:n(y.descriptor)}:null,k={isDraggingOver:f,draggingOverWith:f?w:null,draggingFromThisWith:w,isUsingPlaceholder:!0};return{placeholder:y.placeholder,shouldAnimatePlaceholder:!1,snapshot:k,useClone:b}}if(!d)return r;if(!g)return e;var D={isDraggingOver:f,draggingOverWith:w,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:y.placeholder,shouldAnimatePlaceholder:!0,snapshot:D,useClone:null}}),a=function(d,f){var g=f.droppableId,y=f.type,_=!f.isDropDisabled,w=f.renderClone;if(d.isDragging){var I=d.critical;if(!Mp(y,I))return r;var b=U0(I,d.dimensions),k=xr(d.impact)===g;return s(g,_,k,k,b,w)}if(d.phase==="DROP_ANIMATING"){var D=d.completed;if(!Mp(y,D.critical))return r;var F=U0(D.critical,d.dimensions);return s(g,_,QT(D.result)===g,xr(D.impact)===g,F,w)}if(d.phase==="IDLE"&&d.completed&&!d.shouldFlush){var U=d.completed;if(!Mp(y,U.critical))return r;var W=xr(U.impact)===g,q=!!(U.impact.at&&U.impact.at.type==="COMBINE"),G=U.critical.droppable.id===g;return W?q?e:r:G?e:r}return r};return a},n4={updateViewportMaxScroll:dM};function i4(){return document.body||le(),document.body}var o4={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:i4},JT=JS(r4,n4,null,{context:Fm,pure:!0,areStatePropsEqual:KT})(t4);JT.defaultProps=o4;const s4=te.div``,j0=te.div`
  width: 100%;
`,a4=te.div`
  position: absolute;
  width: 400px;
  z-index: 999;
`,l4=te.h1`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: 600;
`,u4=te.form`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 100%;
  max-width: 500px;
`,xl=te.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`,$0=te.input`
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
`,c4=te.textarea`
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
`,z0=te.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`,d4=te.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`,Xs=te.option``,h4=te.button`
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
`,f4=te.button`
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
`,p4=te.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`,W0=te.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: ${Kl.colors.lightText};
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`,$m=({onClick:t})=>j.jsxs(p4,{type:"button",onClick:t,"aria-label":"Close",children:[j.jsx(W0,{}),j.jsx(W0,{})]});$m.propTypes={onClick:si.func.isRequired};const g4=({setNewTaskIsOpen:t,onSubmit:e,newProjectFormData:{formTitle:r,taskTitle:n,description:s,priority:a,status:u,attachFiles:d,addTask:f}})=>{const[g,y]=oe.useState({title:"",description:"",priority:"",status:""}),_=w=>{w.preventDefault(),e(g)};return j.jsx(a4,{children:j.jsxs(u4,{onSubmit:_,children:[j.jsx($m,{onClick:()=>t(!1)}),j.jsx(l4,{children:r}),j.jsx(xl,{children:n}),j.jsx($0,{value:g.title,type:"text",placeholder:"e.g. Brainstorming Session",onChange:w=>y(I=>({...I,title:w.target.value}))}),j.jsx(xl,{children:s}),j.jsx(c4,{value:g.description,placeholder:"What needs to be done?",onChange:w=>y(I=>({...I,description:w.target.value}))}),j.jsxs(d4,{children:[j.jsxs(j0,{children:[j.jsx(xl,{children:a}),j.jsxs(z0,{value:g.priority,onChange:w=>y(I=>({...I,priority:w.target.value})),children:[j.jsx(Xs,{children:"Low"}),j.jsx(Xs,{children:"Medium"}),j.jsx(Xs,{children:"Hight"})]})]}),j.jsxs(j0,{children:[j.jsx(xl,{children:u}),j.jsxs(z0,{value:g.status,onChange:w=>y(I=>({...I,status:w.target.value})),children:[j.jsx(Xs,{children:"To Do"}),j.jsx(Xs,{children:"In Progress"}),j.jsx(Xs,{children:"Done"})]})]})]}),j.jsxs(xl,{htmlFor:"fileUpload",children:[d," "]}),j.jsxs(h4,{children:[j.jsx("span",{children:"📎"})," Attach Files"]}),j.jsx($0,{id:"fileUpload",type:"file",multiple:!0,style:{display:"none"}}),j.jsx(f4,{type:"submit",children:f})]})})},m4=async()=>{try{return(await uO(kS(zS,"tasks"))).docs.map(r=>({id:r.id,...r.data()}))}catch(t){return console.error("Error fetching tasks: ",t),[]}},v4=()=>{const[t,e]=oe.useState([]);return oe.useEffect(()=>{(async()=>{const n=await m4();e(n)})()},[t]),j.jsx("ul",{children:t.map(r=>j.jsxs("li",{children:[j.jsx("strong",{children:r.title})," - ",r.status]},r.id))})},y4=()=>{const[t,e]=oe.useState(vO),[r,n]=oe.useState(!1),s={formTitle:"Add Task to Project",taskTitle:"Task Title",description:"Description",priority:"Priority",status:"Status",attachFiles:"Attach Files",addTask:"Add Task"},a=async f=>{try{const g=await cO(kS(zS,"tasks"),f);console.log("Документ створено з ID:",g.id)}catch(g){console.error("Помилка при додаванні документа:",g)}console.log(f)},u=(f,g,y,_,w)=>{const I=Array.from(f.taskIds);I.splice(y,1);const b=Array.from(g.taskIds||[]);return b.splice(_,0,w),console.log("destinationTaskIds",b),{updatedStartColumn:{...f,taskIds:I},updatedFinishColumn:{...g,taskIds:b}}},d=f=>{const{source:g,destination:y,draggableId:_}=f;if(!y||g.droppableId===y.droppableId&&g.index===y.index)return;const w=t.columns[g.droppableId],I=t.columns[y.droppableId];if(w===I){const b=Array.from(w.taskIds);b.splice(g.index,1),b.splice(y.index,0,_);const k={...w,taskIds:b};e(D=>({...D,columns:{...D.columns,[k.id]:k}}))}else{const{updatedStartColumn:b,updatedFinishColumn:k}=u(w,I,g.index,y.index,_);e(D=>({...D,columns:{...D.columns,[b.id]:b,[k.id]:k}}))}};return j.jsxs(s4,{children:[j.jsx(v4,{}),j.jsxs(EO,{children:[r&&j.jsx(g4,{newProjectFormData:s,setNewTaskIsOpen:n,onSubmit:a}),j.jsx(vF,{onDragEnd:d,children:t.columnOrder.map(f=>{const g=t.columns[f],y=g.taskIds.map(_=>t.tasks[_]);return j.jsxs(IO,{$column:g,$tasks:y,children:[j.jsxs(SO,{$lineColor:g.lineColor,children:[j.jsxs(TO,{$lineColor:g.lineColor,children:[g.title,j.jsx(bO,{"aria-label":"State Project",children:g.taskIds.length})]}),g.id==="column-1"&&j.jsx(CO,{"aria-haspopup":"dialog","aria-controls":"new-project-popup","aria-label":"Create new project",children:j.jsx(AO,{onClick:()=>n(!0),src:"icon/add-square_icon.svg","aria-hidden":"true"})})]}),j.jsx(JT,{droppableId:g.id,children:_=>j.jsxs(PO,{ref:_.innerRef,..._.droppableProps,children:[y.map((w,I)=>j.jsx(e4,{draggableId:w.id,index:I,children:b=>j.jsxs(RO,{...b.draggableProps,...b.dragHandleProps,ref:b.innerRef,children:[j.jsxs(xO,{children:[j.jsx(kO,{"aria-label":"Project level",$levelColor:w.levelColor,$levelBg:w.levelBackgroundColor,children:w.level}),j.jsx(DO,{role:"button",children:j.jsx(NO,{src:"icon/dots_icon.svg",alt:"Menu"})})]}),j.jsxs(OO,{children:[j.jsx(LO,{children:w.content}),w!=null&&w.image?j.jsx(yO,{children:j.jsx(VO,{src:w.image,alt:w.content||"Project image"})}):j.jsx(MO,{children:w.description||"No Description Available"})]}),j.jsxs(FO,{children:[j.jsx(BO,{children:j.jsx("img",{src:"image/Group 633.png",alt:"Persons"})}),j.jsxs(UO,{children:[j.jsxs(jO,{children:[j.jsx("img",{src:"icon/comments_icon.svg",alt:"Comments"}),"10 comments"]}),j.jsxs($O,{children:[j.jsx("img",{src:"icon/folder_icon.svg",alt:"Folder"}),"3 files"]})]})]})]})},w.id)),_.placeholder,g.taskIds.length===0&&j.jsx(zO,{style:{textAlign:"center",color:"#aaa"},children:"Drop tasks here"})]})})]},g.id)})})]})]})},_4=()=>j.jsx(mO,{children:j.jsx(y4,{})}),ZT=({isSidebarOpen:t})=>j.jsx(_O,{children:j.jsx(pA,{children:j.jsx(wO,{$isSidebarOpen:t,children:j.jsx(_4,{})})})});ZT.propTypes={isSidebarOpen:si.bool.isRequired,sidebarRef:si.any};const w4=t=>{const[e,r]=oe.useState(!1),n=oe.useCallback(()=>{r(window.innerWidth<=t)},[t]);return oe.useEffect(()=>{if(typeof window>"u")return;let s;const a=()=>{clearTimeout(s),s=setTimeout(n,0)};return window.addEventListener("resize",a),n(),()=>{window.removeEventListener("resize",a)}},[n]),e},E4=(t=!1)=>{const e=w4(700),[r,n]=oe.useState(e?!1:t),s=()=>n(a=>!a);return oe.useEffect(()=>{n(!e)},[e]),[r,s,e]};function I4(t){const[e,r]=oe.useState(!1);return oe.useEffect(()=>{function n(s){const a=t.every(u=>u.current&&!u.current.contains(s.target));r(a)}return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[t]),e}const S4=()=>{const{setIsLoggedIn:t,mode:e,setMode:r,setShowLoginForm:n,setLoggedUser:s}=oe.useContext(Ta),[a,u]=oe.useState({email:"",password:"",confirmPassword:""}),[d,f]=oe.useState("");oe.useEffect(()=>{const w=RR(dd,I=>{I?(s(I),t(!0)):(s(null),t(!1)),console.log("User:",I)});return()=>w()},[]);const g=()=>{r(w=>w==="login"?"register":"login")},y=w=>{if(w.preventDefault(),e==="register"&&a.password!==a.confirmPassword){f("Passwords do not match"),setTimeout(()=>f(""),5e3);return}switch(e){case"login":CR(dd,a.email,a.password).then(()=>{t(!0),n(!1)}).catch(I=>{console.log(I),t(!1),f("User not defined")}).finally(()=>{setTimeout(()=>f(""),5e3)});break;case"register":bR(dd,a.email,a.password).then(()=>{t(!0),n(!1)}).catch(I=>f(I));break}},_=w=>{const{name:I,value:b}=w.target;u(k=>({...k,[I]:b}))};return j.jsx(UA,{children:j.jsxs(jA,{onSubmit:y,children:[j.jsx(HA,{children:j.jsx($m,{onClick:()=>n(!1)})}),j.jsx($A,{children:e==="login"?"Login":"Register"}),j.jsxs(S_,{children:["To log in, use the email: ",j.jsx("br",{})," ",j.jsx("span",{children:"projectm@example.com"})," ",j.jsx("br",{})," and password: ",j.jsx("br",{}),j.jsx("span",{children:"123456"})]}),d&&j.jsx(S_,{children:d}),j.jsx(cp,{children:j.jsx(dp,{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:_,required:!0})}),j.jsx(cp,{children:j.jsx(dp,{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:_,required:!0})}),e==="register"&&j.jsx(cp,{children:j.jsx(dp,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:a.confirmPassword,onChange:_,required:!0})}),j.jsx(kg,{type:"submit",children:e==="login"?"Sign in":"Sign up"}),j.jsxs(WA,{children:[e==="login"?"Don't have an account? ":"Already have an account? ",j.jsx(GA,{onClick:g,children:e==="login"?"Sign up":"Sign in"})]})]})})},T4=te.main`
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
`,b4=te.section`
  display: flex;
  max-width: 1280px;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    display: block;
    text-align: center;
  }
`,C4=te.div`
  margin-right: 2rem;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`,A4=te.h1`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 1.1;
`,P4=te.p`
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.5;
`,R4=te(kg)`
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 150px;
  background-color: #000000;
`,x4=te.div`
`,k4=te.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`,D4=()=>{const{showLoginForm:t,setShowLoginForm:e}=oe.useContext(Ta),r=()=>{e(n=>!n)};return j.jsxs(T4,{children:[t&&j.jsx(S4,{}),j.jsxs(b4,{children:[j.jsxs(C4,{children:[j.jsx(A4,{children:"Manage your projects with ease"}),j.jsx(P4,{children:"Functional components to easily create modern UI. Enable date tracking to get an overview of project timelines."}),j.jsx(R4,{onClick:r,"aria-label":"Button for open login form",role:"Open login form",children:"Get Started"})]}),j.jsx(x4,{children:j.jsx(k4,{src:"image/Hero_img.png",alt:"Hero image"})})]})]})},N4=te.div`
  padding: 0 0 2rem 1rem;
  border-bottom: ${({theme:t})=>t.colors.borderLineColor};
`,O4=te.ul`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`,L4=te.li`
  cursor: pointer;
  list-style: none;
  img {
    margin-right: 1rem;
  }
`,M4=[{id:1,name:"Home",icon:"icon/home_icon.svg"},{id:2,name:"Massages",icon:"icon/message_icon.svg"},{id:3,name:"Tasks",icon:"icon/task_icon.svg"},{id:4,name:"Members",icon:"icon/members_icon.svg"},{id:5,name:"Settings",icon:"icon/settings_icon.svg"}];function V4(){return j.jsx(N4,{children:j.jsx(O4,{children:M4.map(t=>j.jsxs(L4,{children:[j.jsx("img",{src:t.icon,alt:t.name}),j.jsx("a",{href:"#",children:j.jsx("span",{children:t.name})})]},t.id))})})}const F4=te.div`
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
`,B4=te.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`,U4=te.h3`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
`,j4=te.p`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`,$4=te.input`
  width: 10rem;
  height: 3rem;
  border-radius: 16px;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`,z4=()=>j.jsxs(F4,{children:[j.jsx(B4,{}),j.jsx(U4,{children:"Thoughts Time"}),j.jsx(j4,{children:"We don’t have any notice for you, till then you can share your thoughts with your peers."}),j.jsx($4,{type:"text",placeholder:"Write a message"})]}),W4=te.div`
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
`,G4=te.div`
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
`,H4=te.div`
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
`,q4=te.div`
  display: none;
`,K4=[{id:1,name:"Mobile App",description:"Description for Mobile App",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:2,name:"Website Redesign",description:"Description for Website Redesign",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:3,name:"Design System",description:"Description for Design System",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:4,name:"Wireframes",description:"Description for Wireframes",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"}],Q4=()=>j.jsxs(G4,{children:[j.jsxs(W4,{children:[j.jsx("h2",{children:"My projects"}),j.jsx("button",{className:"add-project",children:j.jsx("img",{src:"icon/plus_icon.svg",alt:"Add Project"})})]}),j.jsx("ul",{children:K4.map(t=>j.jsxs("li",{children:[j.jsxs(H4,{children:[j.jsxs("a",{href:"#","aria-label":"Go to project",className:"project-item",children:[j.jsx("div",{className:"project-status","aria-hidden":"true"}),j.jsx("h3",{children:t.name})]}),j.jsx("button",{children:j.jsx("img",{src:"icon/dots_icon.svg",alt:"Submenu icon"})})]}),j.jsxs(q4,{children:[j.jsx("p",{children:t.description}),j.jsx("p",{children:t.createdAt}),j.jsx("p",{children:t.updatedAt}),j.jsx("p",{children:t.status})]})]},t.id))})]}),zm=oe.forwardRef(({isSidebarOpen:t},e)=>j.jsx(vA,{ref:e,$isSidebarOpen:t,children:j.jsxs(yA,{children:[j.jsx(V4,{}),j.jsx(Q4,{}),j.jsx(z4,{})]})}));zm.displayName="Sidebar";zm.propTypes={isSidebarOpen:si.bool.isRequired,onToggleSidebar:si.func,sidebarRef:si.any};const Y4=()=>{const[t,e,r]=E4(),n=oe.useRef(null),s=oe.useRef(null);I4([n,s])&&t&&r&&e();const{isLoggedIn:u}=oe.useContext(Ta);return j.jsxs(cA,{theme:Kl,children:[j.jsx(gA,{$isSidebarOpen:t}),j.jsx(ym,{ref:n,onToggleSidebar:e,isSidebarOpen:t}),u?j.jsxs(j.Fragment,{children:[j.jsx(zm,{isSidebarOpen:t,ref:s}),j.jsx(ZT,{isSidebarOpen:t,sidebarRef:s})]}):j.jsx(D4,{})]})},eb=({children:t})=>{const[e,r]=oe.useState(!1),[n,s]=oe.useState(!1),[a,u]=oe.useState("login"),[d,f]=oe.useState(null);return j.jsx(Ta.Provider,{value:{isLoggedIn:e,setIsLoggedIn:r,showLoginForm:n,setShowLoginForm:s,mode:a,setMode:u,loggedUser:d,setLoggedUser:f},children:t})};eb.propTypes={children:si.node.isRequired};dC.createRoot(document.getElementById("root")).render(j.jsx(eb,{children:j.jsx(Y4,{})}));
