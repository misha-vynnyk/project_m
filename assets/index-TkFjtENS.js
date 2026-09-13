(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function Tm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kf={exports:{}},wl={},Qf={exports:{}},Me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function JA(){if(e_)return Me;e_=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function w(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,L={};function x(F,Y,pe){this.props=F,this.context=Y,this.refs=L,this.updater=pe||T}x.prototype.isReactComponent={},x.prototype.setState=function(F,Y){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Y,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function K(){}K.prototype=x.prototype;function q(F,Y,pe){this.props=F,this.context=Y,this.refs=L,this.updater=pe||T}var G=q.prototype=new K;G.constructor=q,D(G,x.prototype),G.isPureReactComponent=!0;var z=Array.isArray,X=Object.prototype.hasOwnProperty,Q={current:null},b={key:!0,ref:!0,__self:!0,__source:!0};function A(F,Y,pe){var Ce,Ae={},Pe=null,De=null;if(Y!=null)for(Ce in Y.ref!==void 0&&(De=Y.ref),Y.key!==void 0&&(Pe=""+Y.key),Y)X.call(Y,Ce)&&!b.hasOwnProperty(Ce)&&(Ae[Ce]=Y[Ce]);var Ne=arguments.length-2;if(Ne===1)Ae.children=pe;else if(1<Ne){for(var Oe=Array(Ne),tt=0;tt<Ne;tt++)Oe[tt]=arguments[tt+2];Ae.children=Oe}if(F&&F.defaultProps)for(Ce in Ne=F.defaultProps,Ne)Ae[Ce]===void 0&&(Ae[Ce]=Ne[Ce]);return{$$typeof:t,type:F,key:Pe,ref:De,props:Ae,_owner:Q.current}}function C(F,Y){return{$$typeof:t,type:F.type,key:Y,ref:F.ref,props:F.props,_owner:F._owner}}function k(F){return typeof F=="object"&&F!==null&&F.$$typeof===t}function N(F){var Y={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(pe){return Y[pe]})}var V=/\/+/g;function P(F,Y){return typeof F=="object"&&F!==null&&F.key!=null?N(""+F.key):Y.toString(36)}function Ze(F,Y,pe,Ce,Ae){var Pe=typeof F;(Pe==="undefined"||Pe==="boolean")&&(F=null);var De=!1;if(F===null)De=!0;else switch(Pe){case"string":case"number":De=!0;break;case"object":switch(F.$$typeof){case t:case e:De=!0}}if(De)return De=F,Ae=Ae(De),F=Ce===""?"."+P(De,0):Ce,z(Ae)?(pe="",F!=null&&(pe=F.replace(V,"$&/")+"/"),Ze(Ae,Y,pe,"",function(tt){return tt})):Ae!=null&&(k(Ae)&&(Ae=C(Ae,pe+(!Ae.key||De&&De.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+F)),Y.push(Ae)),1;if(De=0,Ce=Ce===""?".":Ce+":",z(F))for(var Ne=0;Ne<F.length;Ne++){Pe=F[Ne];var Oe=Ce+P(Pe,Ne);De+=Ze(Pe,Y,pe,Oe,Ae)}else if(Oe=w(F),typeof Oe=="function")for(F=Oe.call(F),Ne=0;!(Pe=F.next()).done;)Pe=Pe.value,Oe=Ce+P(Pe,Ne++),De+=Ze(Pe,Y,pe,Oe,Ae);else if(Pe==="object")throw Y=String(F),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return De}function Ye(F,Y,pe){if(F==null)return F;var Ce=[],Ae=0;return Ze(F,Ce,"","",function(Pe){return Y.call(pe,Pe,Ae++)}),Ce}function pt(F){if(F._status===-1){var Y=F._result;Y=Y(),Y.then(function(pe){(F._status===0||F._status===-1)&&(F._status=1,F._result=pe)},function(pe){(F._status===0||F._status===-1)&&(F._status=2,F._result=pe)}),F._status===-1&&(F._status=0,F._result=Y)}if(F._status===1)return F._result.default;throw F._result}var Ve={current:null},oe={transition:null},he={ReactCurrentDispatcher:Ve,ReactCurrentBatchConfig:oe,ReactCurrentOwner:Q};function ue(){throw Error("act(...) is not supported in production builds of React.")}return Me.Children={map:Ye,forEach:function(F,Y,pe){Ye(F,function(){Y.apply(this,arguments)},pe)},count:function(F){var Y=0;return Ye(F,function(){Y++}),Y},toArray:function(F){return Ye(F,function(Y){return Y})||[]},only:function(F){if(!k(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Me.Component=x,Me.Fragment=n,Me.Profiler=o,Me.PureComponent=q,Me.StrictMode=r,Me.Suspense=f,Me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Me.act=ue,Me.cloneElement=function(F,Y,pe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Ce=D({},F.props),Ae=F.key,Pe=F.ref,De=F._owner;if(Y!=null){if(Y.ref!==void 0&&(Pe=Y.ref,De=Q.current),Y.key!==void 0&&(Ae=""+Y.key),F.type&&F.type.defaultProps)var Ne=F.type.defaultProps;for(Oe in Y)X.call(Y,Oe)&&!b.hasOwnProperty(Oe)&&(Ce[Oe]=Y[Oe]===void 0&&Ne!==void 0?Ne[Oe]:Y[Oe])}var Oe=arguments.length-2;if(Oe===1)Ce.children=pe;else if(1<Oe){Ne=Array(Oe);for(var tt=0;tt<Oe;tt++)Ne[tt]=arguments[tt+2];Ce.children=Ne}return{$$typeof:t,type:F.type,key:Ae,ref:Pe,props:Ce,_owner:De}},Me.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},Me.createElement=A,Me.createFactory=function(F){var Y=A.bind(null,F);return Y.type=F,Y},Me.createRef=function(){return{current:null}},Me.forwardRef=function(F){return{$$typeof:h,render:F}},Me.isValidElement=k,Me.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:pt}},Me.memo=function(F,Y){return{$$typeof:m,type:F,compare:Y===void 0?null:Y}},Me.startTransition=function(F){var Y=oe.transition;oe.transition={};try{F()}finally{oe.transition=Y}},Me.unstable_act=ue,Me.useCallback=function(F,Y){return Ve.current.useCallback(F,Y)},Me.useContext=function(F){return Ve.current.useContext(F)},Me.useDebugValue=function(){},Me.useDeferredValue=function(F){return Ve.current.useDeferredValue(F)},Me.useEffect=function(F,Y){return Ve.current.useEffect(F,Y)},Me.useId=function(){return Ve.current.useId()},Me.useImperativeHandle=function(F,Y,pe){return Ve.current.useImperativeHandle(F,Y,pe)},Me.useInsertionEffect=function(F,Y){return Ve.current.useInsertionEffect(F,Y)},Me.useLayoutEffect=function(F,Y){return Ve.current.useLayoutEffect(F,Y)},Me.useMemo=function(F,Y){return Ve.current.useMemo(F,Y)},Me.useReducer=function(F,Y,pe){return Ve.current.useReducer(F,Y,pe)},Me.useRef=function(F){return Ve.current.useRef(F)},Me.useState=function(F){return Ve.current.useState(F)},Me.useSyncExternalStore=function(F,Y,pe){return Ve.current.useSyncExternalStore(F,Y,pe)},Me.useTransition=function(){return Ve.current.useTransition()},Me.version="18.3.1",Me}var t_;function jd(){return t_||(t_=1,Qf.exports=JA()),Qf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n_;function ZA(){if(n_)return wl;n_=1;var t=jd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(h,f,m){var v,_={},w=null,T=null;m!==void 0&&(w=""+m),f.key!==void 0&&(w=""+f.key),f.ref!==void 0&&(T=f.ref);for(v in f)r.call(f,v)&&!a.hasOwnProperty(v)&&(_[v]=f[v]);if(h&&h.defaultProps)for(v in f=h.defaultProps,f)_[v]===void 0&&(_[v]=f[v]);return{$$typeof:e,type:h,key:w,ref:T,props:_,_owner:o.current}}return wl.Fragment=n,wl.jsx=u,wl.jsxs=u,wl}var r_;function eb(){return r_||(r_=1,Kf.exports=ZA()),Kf.exports}var U=eb(),Nc={},Yf={exports:{}},vn={},Xf={exports:{}},Jf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function tb(){return i_||(i_=1,function(t){function e(oe,he){var ue=oe.length;oe.push(he);e:for(;0<ue;){var F=ue-1>>>1,Y=oe[F];if(0<o(Y,he))oe[F]=he,oe[ue]=Y,ue=F;else break e}}function n(oe){return oe.length===0?null:oe[0]}function r(oe){if(oe.length===0)return null;var he=oe[0],ue=oe.pop();if(ue!==he){oe[0]=ue;e:for(var F=0,Y=oe.length,pe=Y>>>1;F<pe;){var Ce=2*(F+1)-1,Ae=oe[Ce],Pe=Ce+1,De=oe[Pe];if(0>o(Ae,ue))Pe<Y&&0>o(De,Ae)?(oe[F]=De,oe[Pe]=ue,F=Pe):(oe[F]=Ae,oe[Ce]=ue,F=Ce);else if(Pe<Y&&0>o(De,ue))oe[F]=De,oe[Pe]=ue,F=Pe;else break e}}return he}function o(oe,he){var ue=oe.sortIndex-he.sortIndex;return ue!==0?ue:oe.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var u=Date,h=u.now();t.unstable_now=function(){return u.now()-h}}var f=[],m=[],v=1,_=null,w=3,T=!1,D=!1,L=!1,x=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(oe){for(var he=n(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=oe)r(m),he.sortIndex=he.expirationTime,e(f,he);else break;he=n(m)}}function z(oe){if(L=!1,G(oe),!D)if(n(f)!==null)D=!0,pt(X);else{var he=n(m);he!==null&&Ve(z,he.startTime-oe)}}function X(oe,he){D=!1,L&&(L=!1,K(A),A=-1),T=!0;var ue=w;try{for(G(he),_=n(f);_!==null&&(!(_.expirationTime>he)||oe&&!N());){var F=_.callback;if(typeof F=="function"){_.callback=null,w=_.priorityLevel;var Y=F(_.expirationTime<=he);he=t.unstable_now(),typeof Y=="function"?_.callback=Y:_===n(f)&&r(f),G(he)}else r(f);_=n(f)}if(_!==null)var pe=!0;else{var Ce=n(m);Ce!==null&&Ve(z,Ce.startTime-he),pe=!1}return pe}finally{_=null,w=ue,T=!1}}var Q=!1,b=null,A=-1,C=5,k=-1;function N(){return!(t.unstable_now()-k<C)}function V(){if(b!==null){var oe=t.unstable_now();k=oe;var he=!0;try{he=b(!0,oe)}finally{he?P():(Q=!1,b=null)}}else Q=!1}var P;if(typeof q=="function")P=function(){q(V)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Ye=Ze.port2;Ze.port1.onmessage=V,P=function(){Ye.postMessage(null)}}else P=function(){x(V,0)};function pt(oe){b=oe,Q||(Q=!0,P())}function Ve(oe,he){A=x(function(){oe(t.unstable_now())},he)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(oe){oe.callback=null},t.unstable_continueExecution=function(){D||T||(D=!0,pt(X))},t.unstable_forceFrameRate=function(oe){0>oe||125<oe?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<oe?Math.floor(1e3/oe):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(oe){switch(w){case 1:case 2:case 3:var he=3;break;default:he=w}var ue=w;w=he;try{return oe()}finally{w=ue}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(oe,he){switch(oe){case 1:case 2:case 3:case 4:case 5:break;default:oe=3}var ue=w;w=oe;try{return he()}finally{w=ue}},t.unstable_scheduleCallback=function(oe,he,ue){var F=t.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?F+ue:F):ue=F,oe){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ue+Y,oe={id:v++,callback:he,priorityLevel:oe,startTime:ue,expirationTime:Y,sortIndex:-1},ue>F?(oe.sortIndex=ue,e(m,oe),n(f)===null&&oe===n(m)&&(L?(K(A),A=-1):L=!0,Ve(z,ue-F))):(oe.sortIndex=Y,e(f,oe),D||T||(D=!0,pt(X))),oe},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(oe){var he=w;return function(){var ue=w;w=he;try{return oe.apply(this,arguments)}finally{w=ue}}}}(Jf)),Jf}var s_;function nb(){return s_||(s_=1,Xf.exports=tb()),Xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o_;function rb(){if(o_)return vn;o_=1;var t=jd(),e=nb();function n(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function w(i){return f.call(_,i)?!0:f.call(v,i)?!1:m.test(i)?_[i]=!0:(v[i]=!0,!1)}function T(i,s,l,d){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function D(i,s,l,d){if(s===null||typeof s>"u"||T(i,s,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function L(i,s,l,d,p,y,I){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=d,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=y,this.removeEmptyString=I}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){x[i]=new L(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];x[s]=new L(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){x[i]=new L(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){x[i]=new L(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){x[i]=new L(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){x[i]=new L(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){x[i]=new L(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){x[i]=new L(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){x[i]=new L(i,5,!1,i.toLowerCase(),null,!1,!1)});var K=/[\-:]([a-z])/g;function q(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(K,q);x[s]=new L(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(K,q);x[s]=new L(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(K,q);x[s]=new L(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){x[i]=new L(i,1,!1,i.toLowerCase(),null,!1,!1)}),x.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){x[i]=new L(i,1,!1,i.toLowerCase(),null,!0,!0)});function G(i,s,l,d){var p=x.hasOwnProperty(s)?x[s]:null;(p!==null?p.type!==0:d||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(D(s,l,p,d)&&(l=null),d||p===null?w(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):p.mustUseProperty?i[p.propertyName]=l===null?p.type===3?!1:"":l:(s=p.attributeName,d=p.attributeNamespace,l===null?i.removeAttribute(s):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,d?i.setAttributeNS(d,s,l):i.setAttribute(s,l))))}var z=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),Q=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),N=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Ye=Symbol.for("react.memo"),pt=Symbol.for("react.lazy"),Ve=Symbol.for("react.offscreen"),oe=Symbol.iterator;function he(i){return i===null||typeof i!="object"?null:(i=oe&&i[oe]||i["@@iterator"],typeof i=="function"?i:null)}var ue=Object.assign,F;function Y(i){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var pe=!1;function Ce(i,s){if(!i||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(W){var d=W}Reflect.construct(i,[],s)}else{try{s.call()}catch(W){d=W}i.call(s.prototype)}else{try{throw Error()}catch(W){d=W}i()}}catch(W){if(W&&d&&typeof W.stack=="string"){for(var p=W.stack.split(`
`),y=d.stack.split(`
`),I=p.length-1,R=y.length-1;1<=I&&0<=R&&p[I]!==y[R];)R--;for(;1<=I&&0<=R;I--,R--)if(p[I]!==y[R]){if(I!==1||R!==1)do if(I--,R--,0>R||p[I]!==y[R]){var O=`
`+p[I].replace(" at new "," at ");return i.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",i.displayName)),O}while(1<=I&&0<=R);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Y(i):""}function Ae(i){switch(i.tag){case 5:return Y(i.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return i=Ce(i.type,!1),i;case 11:return i=Ce(i.type.render,!1),i;case 1:return i=Ce(i.type,!0),i;default:return""}}function Pe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case b:return"Fragment";case Q:return"Portal";case C:return"Profiler";case A:return"StrictMode";case P:return"Suspense";case Ze:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case N:return(i.displayName||"Context")+".Consumer";case k:return(i._context.displayName||"Context")+".Provider";case V:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case Ye:return s=i.displayName||null,s!==null?s:Pe(i.type)||"Memo";case pt:s=i._payload,i=i._init;try{return Pe(i(s))}catch{}}return null}function De(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pe(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ne(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Oe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function tt(i){var s=Oe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),d=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,y=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(I){d=""+I,y.call(this,I)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(I){d=""+I},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function nn(i){i._valueTracker||(i._valueTracker=tt(i))}function Je(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),d="";return i&&(d=Oe(i)?i.checked?"true":"false":i.value),i=d,i!==l?(s.setValue(i),!0):!1}function cn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function ns(i,s){var l=s.checked;return ue({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Qs(i,s){var l=s.defaultValue==null?"":s.defaultValue,d=s.checked!=null?s.checked:s.defaultChecked;l=Ne(s.value!=null?s.value:l),i._wrapperState={initialChecked:d,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ba(i,s){s=s.checked,s!=null&&G(i,"checked",s,!1)}function Ca(i,s){ba(i,s);var l=Ne(s.value),d=s.type;if(l!=null)d==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(d==="submit"||d==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Ys(i,s.type,l):s.hasOwnProperty("defaultValue")&&Ys(i,s.type,Ne(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function vu(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var d=s.type;if(!(d!=="submit"&&d!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Ys(i,s,l){(s!=="number"||cn(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var Nr=Array.isArray;function Or(i,s,l,d){if(i=i.options,s){s={};for(var p=0;p<l.length;p++)s["$"+l[p]]=!0;for(l=0;l<i.length;l++)p=s.hasOwnProperty("$"+i[l].value),i[l].selected!==p&&(i[l].selected=p),p&&d&&(i[l].defaultSelected=!0)}else{for(l=""+Ne(l),s=null,p=0;p<i.length;p++){if(i[p].value===l){i[p].selected=!0,d&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function Ra(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return ue({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function Xs(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(n(92));if(Nr(l)){if(1<l.length)throw Error(n(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:Ne(l)}}function Js(i,s){var l=Ne(s.value),d=Ne(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),d!=null&&(i.defaultValue=""+d)}function Pa(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function It(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tt(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?It(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var Lr,xa=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,d,p){MSApp.execUnsafeLocalFunction(function(){return i(s,l,d,p)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Lr.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ai(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},is=["Webkit","ms","Moz","O"];Object.keys(rs).forEach(function(i){is.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),rs[s]=rs[i]})});function ka(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||rs.hasOwnProperty(i)&&rs[i]?(""+s).trim():s+"px"}function Da(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var d=l.indexOf("--")===0,p=ka(l,s[l],d);l==="float"&&(l="cssFloat"),d?i.setProperty(l,p):i[l]=p}}var Na=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oa(i,s){if(s){if(Na[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function La(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ss=null;function Zs(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var eo=null,Dn=null,pr=null;function to(i){if(i=sl(i)){if(typeof eo!="function")throw Error(n(280));var s=i.stateNode;s&&(s=Ku(s),eo(i.stateNode,i.type,s))}}function mr(i){Dn?pr?pr.push(i):pr=[i]:Dn=i}function Ma(){if(Dn){var i=Dn,s=pr;if(pr=Dn=null,to(i),s)for(i=0;i<s.length;i++)to(s[i])}}function os(i,s){return i(s)}function Va(){}var Mr=!1;function Fa(i,s,l){if(Mr)return i(s,l);Mr=!0;try{return os(i,s,l)}finally{Mr=!1,(Dn!==null||pr!==null)&&(Va(),Ma())}}function mt(i,s){var l=i.stateNode;if(l===null)return null;var d=Ku(l);if(d===null)return null;l=d[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(i=i.type,d=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!d;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(n(231,s,typeof l));return l}var no=!1;if(h)try{var Kn={};Object.defineProperty(Kn,"passive",{get:function(){no=!0}}),window.addEventListener("test",Kn,Kn),window.removeEventListener("test",Kn,Kn)}catch{no=!1}function as(i,s,l,d,p,y,I,R,O){var W=Array.prototype.slice.call(arguments,3);try{s.apply(l,W)}catch(ne){this.onError(ne)}}var ls=!1,ro=null,Qn=!1,Ua=null,Eh={onError:function(i){ls=!0,ro=i}};function io(i,s,l,d,p,y,I,R,O){ls=!1,ro=null,as.apply(Eh,arguments)}function _u(i,s,l,d,p,y,I,R,O){if(io.apply(this,arguments),ls){if(ls){var W=ro;ls=!1,ro=null}else throw Error(n(198));Qn||(Qn=!0,Ua=W)}}function Yn(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function us(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Xn(i){if(Yn(i)!==i)throw Error(n(188))}function wu(i){var s=i.alternate;if(!s){if(s=Yn(i),s===null)throw Error(n(188));return s!==i?null:i}for(var l=i,d=s;;){var p=l.return;if(p===null)break;var y=p.alternate;if(y===null){if(d=p.return,d!==null){l=d;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===l)return Xn(p),i;if(y===d)return Xn(p),s;y=y.sibling}throw Error(n(188))}if(l.return!==d.return)l=p,d=y;else{for(var I=!1,R=p.child;R;){if(R===l){I=!0,l=p,d=y;break}if(R===d){I=!0,d=p,l=y;break}R=R.sibling}if(!I){for(R=y.child;R;){if(R===l){I=!0,l=y,d=p;break}if(R===d){I=!0,d=y,l=p;break}R=R.sibling}if(!I)throw Error(n(189))}}if(l.alternate!==d)throw Error(n(190))}if(l.tag!==3)throw Error(n(188));return l.stateNode.current===l?i:s}function ja(i){return i=wu(i),i!==null?so(i):null}function so(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=so(i);if(s!==null)return s;i=i.sibling}return null}var oo=e.unstable_scheduleCallback,Ba=e.unstable_cancelCallback,Eu=e.unstable_shouldYield,Ih=e.unstable_requestPaint,nt=e.unstable_now,Iu=e.unstable_getCurrentPriorityLevel,cs=e.unstable_ImmediatePriority,li=e.unstable_UserBlockingPriority,Nn=e.unstable_NormalPriority,$a=e.unstable_LowPriority,Tu=e.unstable_IdlePriority,ds=null,wn=null;function Su(i){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(ds,i,void 0,(i.current.flags&128)===128)}catch{}}var rn=Math.clz32?Math.clz32:bu,za=Math.log,Au=Math.LN2;function bu(i){return i>>>=0,i===0?32:31-(za(i)/Au|0)|0}var ao=64,lo=4194304;function ui(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function hs(i,s){var l=i.pendingLanes;if(l===0)return 0;var d=0,p=i.suspendedLanes,y=i.pingedLanes,I=l&268435455;if(I!==0){var R=I&~p;R!==0?d=ui(R):(y&=I,y!==0&&(d=ui(y)))}else I=l&~p,I!==0?d=ui(I):y!==0&&(d=ui(y));if(d===0)return 0;if(s!==0&&s!==d&&(s&p)===0&&(p=d&-d,y=s&-s,p>=y||p===16&&(y&4194240)!==0))return s;if((d&4)!==0&&(d|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=d;0<s;)l=31-rn(s),p=1<<l,d|=i[l],s&=~p;return d}function Th(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vr(i,s){for(var l=i.suspendedLanes,d=i.pingedLanes,p=i.expirationTimes,y=i.pendingLanes;0<y;){var I=31-rn(y),R=1<<I,O=p[I];O===-1?((R&l)===0||(R&d)!==0)&&(p[I]=Th(R,s)):O<=s&&(i.expiredLanes|=R),y&=~R}}function En(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function fs(){var i=ao;return ao<<=1,(ao&4194240)===0&&(ao=64),i}function ci(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function di(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-rn(s),i[s]=l}function et(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var d=i.eventTimes;for(i=i.expirationTimes;0<l;){var p=31-rn(l),y=1<<p;s[p]=0,d[p]=-1,i[p]=-1,l&=~y}}function hi(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var d=31-rn(l),p=1<<d;p&s|i[d]&s&&(i[d]|=s),l&=~p}}var je=0;function fi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Cu,uo,Ru,Pu,xu,Wa=!1,gr=[],Ut=null,Jn=null,Zn=null,pi=new Map,On=new Map,yr=[],Sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(i,s){switch(i){case"focusin":case"focusout":Ut=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":pi.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":On.delete(s.pointerId)}}function dn(i,s,l,d,p,y){return i===null||i.nativeEvent!==y?(i={blockedOn:s,domEventName:l,eventSystemFlags:d,nativeEvent:y,targetContainers:[p]},s!==null&&(s=sl(s),s!==null&&uo(s)),i):(i.eventSystemFlags|=d,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function Ah(i,s,l,d,p){switch(s){case"focusin":return Ut=dn(Ut,i,s,l,d,p),!0;case"dragenter":return Jn=dn(Jn,i,s,l,d,p),!0;case"mouseover":return Zn=dn(Zn,i,s,l,d,p),!0;case"pointerover":var y=p.pointerId;return pi.set(y,dn(pi.get(y)||null,i,s,l,d,p)),!0;case"gotpointercapture":return y=p.pointerId,On.set(y,dn(On.get(y)||null,i,s,l,d,p)),!0}return!1}function Du(i){var s=vs(i.target);if(s!==null){var l=Yn(s);if(l!==null){if(s=l.tag,s===13){if(s=us(l),s!==null){i.blockedOn=s,xu(i.priority,function(){Ru(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Fr(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=co(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var d=new l.constructor(l.type,l);ss=d,l.target.dispatchEvent(d),ss=null}else return s=sl(l),s!==null&&uo(s),i.blockedOn=l,!1;s.shift()}return!0}function ps(i,s,l){Fr(i)&&l.delete(s)}function Nu(){Wa=!1,Ut!==null&&Fr(Ut)&&(Ut=null),Jn!==null&&Fr(Jn)&&(Jn=null),Zn!==null&&Fr(Zn)&&(Zn=null),pi.forEach(ps),On.forEach(ps)}function er(i,s){i.blockedOn===s&&(i.blockedOn=null,Wa||(Wa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Nu)))}function tr(i){function s(p){return er(p,i)}if(0<gr.length){er(gr[0],i);for(var l=1;l<gr.length;l++){var d=gr[l];d.blockedOn===i&&(d.blockedOn=null)}}for(Ut!==null&&er(Ut,i),Jn!==null&&er(Jn,i),Zn!==null&&er(Zn,i),pi.forEach(s),On.forEach(s),l=0;l<yr.length;l++)d=yr[l],d.blockedOn===i&&(d.blockedOn=null);for(;0<yr.length&&(l=yr[0],l.blockedOn===null);)Du(l),l.blockedOn===null&&yr.shift()}var Ur=z.ReactCurrentBatchConfig,mi=!0;function at(i,s,l,d){var p=je,y=Ur.transition;Ur.transition=null;try{je=1,Ga(i,s,l,d)}finally{je=p,Ur.transition=y}}function bh(i,s,l,d){var p=je,y=Ur.transition;Ur.transition=null;try{je=4,Ga(i,s,l,d)}finally{je=p,Ur.transition=y}}function Ga(i,s,l,d){if(mi){var p=co(i,s,l,d);if(p===null)Vh(i,s,d,ms,l),ku(i,d);else if(Ah(p,i,s,l,d))d.stopPropagation();else if(ku(i,d),s&4&&-1<Sh.indexOf(i)){for(;p!==null;){var y=sl(p);if(y!==null&&Cu(y),y=co(i,s,l,d),y===null&&Vh(i,s,d,ms,l),y===p)break;p=y}p!==null&&d.stopPropagation()}else Vh(i,s,d,null,l)}}var ms=null;function co(i,s,l,d){if(ms=null,i=Zs(d),i=vs(i),i!==null)if(s=Yn(i),s===null)i=null;else if(l=s.tag,l===13){if(i=us(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return ms=i,null}function Ha(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Iu()){case cs:return 1;case li:return 4;case Nn:case $a:return 16;case Tu:return 536870912;default:return 16}default:return 16}}var In=null,ho=null,hn=null;function qa(){if(hn)return hn;var i,s=ho,l=s.length,d,p="value"in In?In.value:In.textContent,y=p.length;for(i=0;i<l&&s[i]===p[i];i++);var I=l-i;for(d=1;d<=I&&s[l-d]===p[y-d];d++);return hn=p.slice(i,1<d?1-d:void 0)}function fo(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function vr(){return!0}function Ka(){return!1}function jt(i){function s(l,d,p,y,I){this._reactName=l,this._targetInst=p,this.type=d,this.nativeEvent=y,this.target=I,this.currentTarget=null;for(var R in i)i.hasOwnProperty(R)&&(l=i[R],this[R]=l?l(y):y[R]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?vr:Ka,this.isPropagationStopped=Ka,this}return ue(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=vr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=vr)},persist:function(){},isPersistent:vr}),s}var nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},po=jt(nr),_r=ue({},nr,{view:0,detail:0}),Ch=jt(_r),mo,jr,gi,gs=ue({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wr,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==gi&&(gi&&i.type==="mousemove"?(mo=i.screenX-gi.screenX,jr=i.screenY-gi.screenY):jr=mo=0,gi=i),mo)},movementY:function(i){return"movementY"in i?i.movementY:jr}}),go=jt(gs),Qa=ue({},gs,{dataTransfer:0}),Ou=jt(Qa),yo=ue({},_r,{relatedTarget:0}),vo=jt(yo),Lu=ue({},nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Br=jt(Lu),Mu=ue({},nr,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Vu=jt(Mu),Fu=ue({},nr,{data:0}),Ya=jt(Fu),_o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ju(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Uu[i])?!!s[i]:!1}function wr(){return ju}var c=ue({},_r,{key:function(i){if(i.key){var s=_o[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=fo(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?sn[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wr,charCode:function(i){return i.type==="keypress"?fo(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?fo(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),g=jt(c),E=ue({},gs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S=jt(E),j=ue({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wr}),H=jt(j),le=ue({},nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xe=jt(le),St=ue({},gs,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Be=jt(St),xt=[9,13,27,32],vt=h&&"CompositionEvent"in window,Ln=null;h&&"documentMode"in document&&(Ln=document.documentMode);var Tn=h&&"TextEvent"in window&&!Ln,ys=h&&(!vt||Ln&&8<Ln&&11>=Ln),wo=" ",Kg=!1;function Qg(i,s){switch(i){case"keyup":return xt.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yg(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Eo=!1;function QS(i,s){switch(i){case"compositionend":return Yg(s);case"keypress":return s.which!==32?null:(Kg=!0,wo);case"textInput":return i=s.data,i===wo&&Kg?null:i;default:return null}}function YS(i,s){if(Eo)return i==="compositionend"||!vt&&Qg(i,s)?(i=qa(),hn=ho=In=null,Eo=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ys&&s.locale!=="ko"?null:s.data;default:return null}}var XS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xg(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!XS[i.type]:s==="textarea"}function Jg(i,s,l,d){mr(d),s=Gu(s,"onChange"),0<s.length&&(l=new po("onChange","change",null,l,d),i.push({event:l,listeners:s}))}var Xa=null,Ja=null;function JS(i){gy(i,0)}function Bu(i){var s=bo(i);if(Je(s))return i}function ZS(i,s){if(i==="change")return s}var Zg=!1;if(h){var Rh;if(h){var Ph="oninput"in document;if(!Ph){var ey=document.createElement("div");ey.setAttribute("oninput","return;"),Ph=typeof ey.oninput=="function"}Rh=Ph}else Rh=!1;Zg=Rh&&(!document.documentMode||9<document.documentMode)}function ty(){Xa&&(Xa.detachEvent("onpropertychange",ny),Ja=Xa=null)}function ny(i){if(i.propertyName==="value"&&Bu(Ja)){var s=[];Jg(s,Ja,i,Zs(i)),Fa(JS,s)}}function eA(i,s,l){i==="focusin"?(ty(),Xa=s,Ja=l,Xa.attachEvent("onpropertychange",ny)):i==="focusout"&&ty()}function tA(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Bu(Ja)}function nA(i,s){if(i==="click")return Bu(s)}function rA(i,s){if(i==="input"||i==="change")return Bu(s)}function iA(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var rr=typeof Object.is=="function"?Object.is:iA;function Za(i,s){if(rr(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),d=Object.keys(s);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var p=l[d];if(!f.call(s,p)||!rr(i[p],s[p]))return!1}return!0}function ry(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function iy(i,s){var l=ry(i);i=0;for(var d;l;){if(l.nodeType===3){if(d=i+l.textContent.length,i<=s&&d>=s)return{node:l,offset:s-i};i=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ry(l)}}function sy(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?sy(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function oy(){for(var i=window,s=cn();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=cn(i.document)}return s}function xh(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function sA(i){var s=oy(),l=i.focusedElem,d=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&sy(l.ownerDocument.documentElement,l)){if(d!==null&&xh(l)){if(s=d.start,i=d.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=l.textContent.length,y=Math.min(d.start,p);d=d.end===void 0?y:Math.min(d.end,p),!i.extend&&y>d&&(p=d,d=y,y=p),p=iy(l,y);var I=iy(l,d);p&&I&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==I.node||i.focusOffset!==I.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),y>d?(i.addRange(s),i.extend(I.node,I.offset)):(s.setEnd(I.node,I.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var oA=h&&"documentMode"in document&&11>=document.documentMode,Io=null,kh=null,el=null,Dh=!1;function ay(i,s,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Dh||Io==null||Io!==cn(d)||(d=Io,"selectionStart"in d&&xh(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),el&&Za(el,d)||(el=d,d=Gu(kh,"onSelect"),0<d.length&&(s=new po("onSelect","select",null,s,l),i.push({event:s,listeners:d}),s.target=Io)))}function $u(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var To={animationend:$u("Animation","AnimationEnd"),animationiteration:$u("Animation","AnimationIteration"),animationstart:$u("Animation","AnimationStart"),transitionend:$u("Transition","TransitionEnd")},Nh={},ly={};h&&(ly=document.createElement("div").style,"AnimationEvent"in window||(delete To.animationend.animation,delete To.animationiteration.animation,delete To.animationstart.animation),"TransitionEvent"in window||delete To.transitionend.transition);function zu(i){if(Nh[i])return Nh[i];if(!To[i])return i;var s=To[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in ly)return Nh[i]=s[l];return i}var uy=zu("animationend"),cy=zu("animationiteration"),dy=zu("animationstart"),hy=zu("transitionend"),fy=new Map,py="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(i,s){fy.set(i,s),a(s,[i])}for(var Oh=0;Oh<py.length;Oh++){var Lh=py[Oh],aA=Lh.toLowerCase(),lA=Lh[0].toUpperCase()+Lh.slice(1);yi(aA,"on"+lA)}yi(uy,"onAnimationEnd"),yi(cy,"onAnimationIteration"),yi(dy,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(hy,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var tl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uA=new Set("cancel close invalid load scroll toggle".split(" ").concat(tl));function my(i,s,l){var d=i.type||"unknown-event";i.currentTarget=l,_u(d,s,void 0,i),i.currentTarget=null}function gy(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var d=i[l],p=d.event;d=d.listeners;e:{var y=void 0;if(s)for(var I=d.length-1;0<=I;I--){var R=d[I],O=R.instance,W=R.currentTarget;if(R=R.listener,O!==y&&p.isPropagationStopped())break e;my(p,R,W),y=O}else for(I=0;I<d.length;I++){if(R=d[I],O=R.instance,W=R.currentTarget,R=R.listener,O!==y&&p.isPropagationStopped())break e;my(p,R,W),y=O}}}if(Qn)throw i=Ua,Qn=!1,Ua=null,i}function it(i,s){var l=s[zh];l===void 0&&(l=s[zh]=new Set);var d=i+"__bubble";l.has(d)||(yy(s,i,2,!1),l.add(d))}function Mh(i,s,l){var d=0;s&&(d|=4),yy(l,i,d,s)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function nl(i){if(!i[Wu]){i[Wu]=!0,r.forEach(function(l){l!=="selectionchange"&&(uA.has(l)||Mh(l,!1,i),Mh(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Wu]||(s[Wu]=!0,Mh("selectionchange",!1,s))}}function yy(i,s,l,d){switch(Ha(s)){case 1:var p=at;break;case 4:p=bh;break;default:p=Ga}l=p.bind(null,s,l,i),p=void 0,!no||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),d?p!==void 0?i.addEventListener(s,l,{capture:!0,passive:p}):i.addEventListener(s,l,!0):p!==void 0?i.addEventListener(s,l,{passive:p}):i.addEventListener(s,l,!1)}function Vh(i,s,l,d,p){var y=d;if((s&1)===0&&(s&2)===0&&d!==null)e:for(;;){if(d===null)return;var I=d.tag;if(I===3||I===4){var R=d.stateNode.containerInfo;if(R===p||R.nodeType===8&&R.parentNode===p)break;if(I===4)for(I=d.return;I!==null;){var O=I.tag;if((O===3||O===4)&&(O=I.stateNode.containerInfo,O===p||O.nodeType===8&&O.parentNode===p))return;I=I.return}for(;R!==null;){if(I=vs(R),I===null)return;if(O=I.tag,O===5||O===6){d=y=I;continue e}R=R.parentNode}}d=d.return}Fa(function(){var W=y,ne=Zs(l),re=[];e:{var ee=fy.get(i);if(ee!==void 0){var ce=po,me=i;switch(i){case"keypress":if(fo(l)===0)break e;case"keydown":case"keyup":ce=g;break;case"focusin":me="focus",ce=vo;break;case"focusout":me="blur",ce=vo;break;case"beforeblur":case"afterblur":ce=vo;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=Ou;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=H;break;case uy:case cy:case dy:ce=Br;break;case hy:ce=Xe;break;case"scroll":ce=Ch;break;case"wheel":ce=Be;break;case"copy":case"cut":case"paste":ce=Vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=S}var ge=(s&4)!==0,gt=!ge&&i==="scroll",B=ge?ee!==null?ee+"Capture":null:ee;ge=[];for(var M=W,$;M!==null;){$=M;var se=$.stateNode;if($.tag===5&&se!==null&&($=se,B!==null&&(se=mt(M,B),se!=null&&ge.push(rl(M,se,$)))),gt)break;M=M.return}0<ge.length&&(ee=new ce(ee,me,null,l,ne),re.push({event:ee,listeners:ge}))}}if((s&7)===0){e:{if(ee=i==="mouseover"||i==="pointerover",ce=i==="mouseout"||i==="pointerout",ee&&l!==ss&&(me=l.relatedTarget||l.fromElement)&&(vs(me)||me[$r]))break e;if((ce||ee)&&(ee=ne.window===ne?ne:(ee=ne.ownerDocument)?ee.defaultView||ee.parentWindow:window,ce?(me=l.relatedTarget||l.toElement,ce=W,me=me?vs(me):null,me!==null&&(gt=Yn(me),me!==gt||me.tag!==5&&me.tag!==6)&&(me=null)):(ce=null,me=W),ce!==me)){if(ge=go,se="onMouseLeave",B="onMouseEnter",M="mouse",(i==="pointerout"||i==="pointerover")&&(ge=S,se="onPointerLeave",B="onPointerEnter",M="pointer"),gt=ce==null?ee:bo(ce),$=me==null?ee:bo(me),ee=new ge(se,M+"leave",ce,l,ne),ee.target=gt,ee.relatedTarget=$,se=null,vs(ne)===W&&(ge=new ge(B,M+"enter",me,l,ne),ge.target=$,ge.relatedTarget=gt,se=ge),gt=se,ce&&me)t:{for(ge=ce,B=me,M=0,$=ge;$;$=So($))M++;for($=0,se=B;se;se=So(se))$++;for(;0<M-$;)ge=So(ge),M--;for(;0<$-M;)B=So(B),$--;for(;M--;){if(ge===B||B!==null&&ge===B.alternate)break t;ge=So(ge),B=So(B)}ge=null}else ge=null;ce!==null&&vy(re,ee,ce,ge,!1),me!==null&&gt!==null&&vy(re,gt,me,ge,!0)}}e:{if(ee=W?bo(W):window,ce=ee.nodeName&&ee.nodeName.toLowerCase(),ce==="select"||ce==="input"&&ee.type==="file")var ye=ZS;else if(Xg(ee))if(Zg)ye=rA;else{ye=tA;var _e=eA}else(ce=ee.nodeName)&&ce.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(ye=nA);if(ye&&(ye=ye(i,W))){Jg(re,ye,l,ne);break e}_e&&_e(i,ee,W),i==="focusout"&&(_e=ee._wrapperState)&&_e.controlled&&ee.type==="number"&&Ys(ee,"number",ee.value)}switch(_e=W?bo(W):window,i){case"focusin":(Xg(_e)||_e.contentEditable==="true")&&(Io=_e,kh=W,el=null);break;case"focusout":el=kh=Io=null;break;case"mousedown":Dh=!0;break;case"contextmenu":case"mouseup":case"dragend":Dh=!1,ay(re,l,ne);break;case"selectionchange":if(oA)break;case"keydown":case"keyup":ay(re,l,ne)}var we;if(vt)e:{switch(i){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Eo?Qg(i,l)&&(be="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(be="onCompositionStart");be&&(ys&&l.locale!=="ko"&&(Eo||be!=="onCompositionStart"?be==="onCompositionEnd"&&Eo&&(we=qa()):(In=ne,ho="value"in In?In.value:In.textContent,Eo=!0)),_e=Gu(W,be),0<_e.length&&(be=new Ya(be,i,null,l,ne),re.push({event:be,listeners:_e}),we?be.data=we:(we=Yg(l),we!==null&&(be.data=we)))),(we=Tn?QS(i,l):YS(i,l))&&(W=Gu(W,"onBeforeInput"),0<W.length&&(ne=new Ya("onBeforeInput","beforeinput",null,l,ne),re.push({event:ne,listeners:W}),ne.data=we))}gy(re,s)})}function rl(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Gu(i,s){for(var l=s+"Capture",d=[];i!==null;){var p=i,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=mt(i,l),y!=null&&d.unshift(rl(i,y,p)),y=mt(i,s),y!=null&&d.push(rl(i,y,p))),i=i.return}return d}function So(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function vy(i,s,l,d,p){for(var y=s._reactName,I=[];l!==null&&l!==d;){var R=l,O=R.alternate,W=R.stateNode;if(O!==null&&O===d)break;R.tag===5&&W!==null&&(R=W,p?(O=mt(l,y),O!=null&&I.unshift(rl(l,O,R))):p||(O=mt(l,y),O!=null&&I.push(rl(l,O,R)))),l=l.return}I.length!==0&&i.push({event:s,listeners:I})}var cA=/\r\n?/g,dA=/\u0000|\uFFFD/g;function _y(i){return(typeof i=="string"?i:""+i).replace(cA,`
`).replace(dA,"")}function Hu(i,s,l){if(s=_y(s),_y(i)!==s&&l)throw Error(n(425))}function qu(){}var Fh=null,Uh=null;function jh(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Bh=typeof setTimeout=="function"?setTimeout:void 0,hA=typeof clearTimeout=="function"?clearTimeout:void 0,wy=typeof Promise=="function"?Promise:void 0,fA=typeof queueMicrotask=="function"?queueMicrotask:typeof wy<"u"?function(i){return wy.resolve(null).then(i).catch(pA)}:Bh;function pA(i){setTimeout(function(){throw i})}function $h(i,s){var l=s,d=0;do{var p=l.nextSibling;if(i.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(d===0){i.removeChild(p),tr(s);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=p}while(l);tr(s)}function vi(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Ey(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),Er="__reactFiber$"+Ao,il="__reactProps$"+Ao,$r="__reactContainer$"+Ao,zh="__reactEvents$"+Ao,mA="__reactListeners$"+Ao,gA="__reactHandles$"+Ao;function vs(i){var s=i[Er];if(s)return s;for(var l=i.parentNode;l;){if(s=l[$r]||l[Er]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Ey(i);i!==null;){if(l=i[Er])return l;i=Ey(i)}return s}i=l,l=i.parentNode}return null}function sl(i){return i=i[Er]||i[$r],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function bo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(n(33))}function Ku(i){return i[il]||null}var Wh=[],Co=-1;function _i(i){return{current:i}}function st(i){0>Co||(i.current=Wh[Co],Wh[Co]=null,Co--)}function rt(i,s){Co++,Wh[Co]=i.current,i.current=s}var wi={},qt=_i(wi),fn=_i(!1),_s=wi;function Ro(i,s){var l=i.type.contextTypes;if(!l)return wi;var d=i.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===s)return d.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in l)p[y]=s[y];return d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function pn(i){return i=i.childContextTypes,i!=null}function Qu(){st(fn),st(qt)}function Iy(i,s,l){if(qt.current!==wi)throw Error(n(168));rt(qt,s),rt(fn,l)}function Ty(i,s,l){var d=i.stateNode;if(s=s.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var p in d)if(!(p in s))throw Error(n(108,De(i)||"Unknown",p));return ue({},l,d)}function Yu(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||wi,_s=qt.current,rt(qt,i),rt(fn,fn.current),!0}function Sy(i,s,l){var d=i.stateNode;if(!d)throw Error(n(169));l?(i=Ty(i,s,_s),d.__reactInternalMemoizedMergedChildContext=i,st(fn),st(qt),rt(qt,i)):st(fn),rt(fn,l)}var zr=null,Xu=!1,Gh=!1;function Ay(i){zr===null?zr=[i]:zr.push(i)}function yA(i){Xu=!0,Ay(i)}function Ei(){if(!Gh&&zr!==null){Gh=!0;var i=0,s=je;try{var l=zr;for(je=1;i<l.length;i++){var d=l[i];do d=d(!0);while(d!==null)}zr=null,Xu=!1}catch(p){throw zr!==null&&(zr=zr.slice(i+1)),oo(cs,Ei),p}finally{je=s,Gh=!1}}return null}var Po=[],xo=0,Ju=null,Zu=0,Mn=[],Vn=0,ws=null,Wr=1,Gr="";function Es(i,s){Po[xo++]=Zu,Po[xo++]=Ju,Ju=i,Zu=s}function by(i,s,l){Mn[Vn++]=Wr,Mn[Vn++]=Gr,Mn[Vn++]=ws,ws=i;var d=Wr;i=Gr;var p=32-rn(d)-1;d&=~(1<<p),l+=1;var y=32-rn(s)+p;if(30<y){var I=p-p%5;y=(d&(1<<I)-1).toString(32),d>>=I,p-=I,Wr=1<<32-rn(s)+p|l<<p|d,Gr=y+i}else Wr=1<<y|l<<p|d,Gr=i}function Hh(i){i.return!==null&&(Es(i,1),by(i,1,0))}function qh(i){for(;i===Ju;)Ju=Po[--xo],Po[xo]=null,Zu=Po[--xo],Po[xo]=null;for(;i===ws;)ws=Mn[--Vn],Mn[Vn]=null,Gr=Mn[--Vn],Mn[Vn]=null,Wr=Mn[--Vn],Mn[Vn]=null}var Sn=null,An=null,lt=!1,ir=null;function Cy(i,s){var l=Bn(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Ry(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Sn=i,An=vi(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Sn=i,An=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ws!==null?{id:Wr,overflow:Gr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Bn(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Sn=i,An=null,!0):!1;default:return!1}}function Kh(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Qh(i){if(lt){var s=An;if(s){var l=s;if(!Ry(i,s)){if(Kh(i))throw Error(n(418));s=vi(l.nextSibling);var d=Sn;s&&Ry(i,s)?Cy(d,l):(i.flags=i.flags&-4097|2,lt=!1,Sn=i)}}else{if(Kh(i))throw Error(n(418));i.flags=i.flags&-4097|2,lt=!1,Sn=i}}}function Py(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Sn=i}function ec(i){if(i!==Sn)return!1;if(!lt)return Py(i),lt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!jh(i.type,i.memoizedProps)),s&&(s=An)){if(Kh(i))throw xy(),Error(n(418));for(;s;)Cy(i,s),s=vi(s.nextSibling)}if(Py(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(n(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){An=vi(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}An=null}}else An=Sn?vi(i.stateNode.nextSibling):null;return!0}function xy(){for(var i=An;i;)i=vi(i.nextSibling)}function ko(){An=Sn=null,lt=!1}function Yh(i){ir===null?ir=[i]:ir.push(i)}var vA=z.ReactCurrentBatchConfig;function ol(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(n(309));var d=l.stateNode}if(!d)throw Error(n(147,i));var p=d,y=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===y?s.ref:(s=function(I){var R=p.refs;I===null?delete R[y]:R[y]=I},s._stringRef=y,s)}if(typeof i!="string")throw Error(n(284));if(!l._owner)throw Error(n(290,i))}return i}function tc(i,s){throw i=Object.prototype.toString.call(s),Error(n(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function ky(i){var s=i._init;return s(i._payload)}function Dy(i){function s(B,M){if(i){var $=B.deletions;$===null?(B.deletions=[M],B.flags|=16):$.push(M)}}function l(B,M){if(!i)return null;for(;M!==null;)s(B,M),M=M.sibling;return null}function d(B,M){for(B=new Map;M!==null;)M.key!==null?B.set(M.key,M):B.set(M.index,M),M=M.sibling;return B}function p(B,M){return B=Pi(B,M),B.index=0,B.sibling=null,B}function y(B,M,$){return B.index=$,i?($=B.alternate,$!==null?($=$.index,$<M?(B.flags|=2,M):$):(B.flags|=2,M)):(B.flags|=1048576,M)}function I(B){return i&&B.alternate===null&&(B.flags|=2),B}function R(B,M,$,se){return M===null||M.tag!==6?(M=$f($,B.mode,se),M.return=B,M):(M=p(M,$),M.return=B,M)}function O(B,M,$,se){var ye=$.type;return ye===b?ne(B,M,$.props.children,se,$.key):M!==null&&(M.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===pt&&ky(ye)===M.type)?(se=p(M,$.props),se.ref=ol(B,M,$),se.return=B,se):(se=Ac($.type,$.key,$.props,null,B.mode,se),se.ref=ol(B,M,$),se.return=B,se)}function W(B,M,$,se){return M===null||M.tag!==4||M.stateNode.containerInfo!==$.containerInfo||M.stateNode.implementation!==$.implementation?(M=zf($,B.mode,se),M.return=B,M):(M=p(M,$.children||[]),M.return=B,M)}function ne(B,M,$,se,ye){return M===null||M.tag!==7?(M=Ps($,B.mode,se,ye),M.return=B,M):(M=p(M,$),M.return=B,M)}function re(B,M,$){if(typeof M=="string"&&M!==""||typeof M=="number")return M=$f(""+M,B.mode,$),M.return=B,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case X:return $=Ac(M.type,M.key,M.props,null,B.mode,$),$.ref=ol(B,null,M),$.return=B,$;case Q:return M=zf(M,B.mode,$),M.return=B,M;case pt:var se=M._init;return re(B,se(M._payload),$)}if(Nr(M)||he(M))return M=Ps(M,B.mode,$,null),M.return=B,M;tc(B,M)}return null}function ee(B,M,$,se){var ye=M!==null?M.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return ye!==null?null:R(B,M,""+$,se);if(typeof $=="object"&&$!==null){switch($.$$typeof){case X:return $.key===ye?O(B,M,$,se):null;case Q:return $.key===ye?W(B,M,$,se):null;case pt:return ye=$._init,ee(B,M,ye($._payload),se)}if(Nr($)||he($))return ye!==null?null:ne(B,M,$,se,null);tc(B,$)}return null}function ce(B,M,$,se,ye){if(typeof se=="string"&&se!==""||typeof se=="number")return B=B.get($)||null,R(M,B,""+se,ye);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case X:return B=B.get(se.key===null?$:se.key)||null,O(M,B,se,ye);case Q:return B=B.get(se.key===null?$:se.key)||null,W(M,B,se,ye);case pt:var _e=se._init;return ce(B,M,$,_e(se._payload),ye)}if(Nr(se)||he(se))return B=B.get($)||null,ne(M,B,se,ye,null);tc(M,se)}return null}function me(B,M,$,se){for(var ye=null,_e=null,we=M,be=M=0,Nt=null;we!==null&&be<$.length;be++){we.index>be?(Nt=we,we=null):Nt=we.sibling;var Ge=ee(B,we,$[be],se);if(Ge===null){we===null&&(we=Nt);break}i&&we&&Ge.alternate===null&&s(B,we),M=y(Ge,M,be),_e===null?ye=Ge:_e.sibling=Ge,_e=Ge,we=Nt}if(be===$.length)return l(B,we),lt&&Es(B,be),ye;if(we===null){for(;be<$.length;be++)we=re(B,$[be],se),we!==null&&(M=y(we,M,be),_e===null?ye=we:_e.sibling=we,_e=we);return lt&&Es(B,be),ye}for(we=d(B,we);be<$.length;be++)Nt=ce(we,B,be,$[be],se),Nt!==null&&(i&&Nt.alternate!==null&&we.delete(Nt.key===null?be:Nt.key),M=y(Nt,M,be),_e===null?ye=Nt:_e.sibling=Nt,_e=Nt);return i&&we.forEach(function(xi){return s(B,xi)}),lt&&Es(B,be),ye}function ge(B,M,$,se){var ye=he($);if(typeof ye!="function")throw Error(n(150));if($=ye.call($),$==null)throw Error(n(151));for(var _e=ye=null,we=M,be=M=0,Nt=null,Ge=$.next();we!==null&&!Ge.done;be++,Ge=$.next()){we.index>be?(Nt=we,we=null):Nt=we.sibling;var xi=ee(B,we,Ge.value,se);if(xi===null){we===null&&(we=Nt);break}i&&we&&xi.alternate===null&&s(B,we),M=y(xi,M,be),_e===null?ye=xi:_e.sibling=xi,_e=xi,we=Nt}if(Ge.done)return l(B,we),lt&&Es(B,be),ye;if(we===null){for(;!Ge.done;be++,Ge=$.next())Ge=re(B,Ge.value,se),Ge!==null&&(M=y(Ge,M,be),_e===null?ye=Ge:_e.sibling=Ge,_e=Ge);return lt&&Es(B,be),ye}for(we=d(B,we);!Ge.done;be++,Ge=$.next())Ge=ce(we,B,be,Ge.value,se),Ge!==null&&(i&&Ge.alternate!==null&&we.delete(Ge.key===null?be:Ge.key),M=y(Ge,M,be),_e===null?ye=Ge:_e.sibling=Ge,_e=Ge);return i&&we.forEach(function(XA){return s(B,XA)}),lt&&Es(B,be),ye}function gt(B,M,$,se){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case X:e:{for(var ye=$.key,_e=M;_e!==null;){if(_e.key===ye){if(ye=$.type,ye===b){if(_e.tag===7){l(B,_e.sibling),M=p(_e,$.props.children),M.return=B,B=M;break e}}else if(_e.elementType===ye||typeof ye=="object"&&ye!==null&&ye.$$typeof===pt&&ky(ye)===_e.type){l(B,_e.sibling),M=p(_e,$.props),M.ref=ol(B,_e,$),M.return=B,B=M;break e}l(B,_e);break}else s(B,_e);_e=_e.sibling}$.type===b?(M=Ps($.props.children,B.mode,se,$.key),M.return=B,B=M):(se=Ac($.type,$.key,$.props,null,B.mode,se),se.ref=ol(B,M,$),se.return=B,B=se)}return I(B);case Q:e:{for(_e=$.key;M!==null;){if(M.key===_e)if(M.tag===4&&M.stateNode.containerInfo===$.containerInfo&&M.stateNode.implementation===$.implementation){l(B,M.sibling),M=p(M,$.children||[]),M.return=B,B=M;break e}else{l(B,M);break}else s(B,M);M=M.sibling}M=zf($,B.mode,se),M.return=B,B=M}return I(B);case pt:return _e=$._init,gt(B,M,_e($._payload),se)}if(Nr($))return me(B,M,$,se);if(he($))return ge(B,M,$,se);tc(B,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,M!==null&&M.tag===6?(l(B,M.sibling),M=p(M,$),M.return=B,B=M):(l(B,M),M=$f($,B.mode,se),M.return=B,B=M),I(B)):l(B,M)}return gt}var Do=Dy(!0),Ny=Dy(!1),nc=_i(null),rc=null,No=null,Xh=null;function Jh(){Xh=No=rc=null}function Zh(i){var s=nc.current;st(nc),i._currentValue=s}function ef(i,s,l){for(;i!==null;){var d=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,d!==null&&(d.childLanes|=s)):d!==null&&(d.childLanes&s)!==s&&(d.childLanes|=s),i===l)break;i=i.return}}function Oo(i,s){rc=i,Xh=No=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(mn=!0),i.firstContext=null)}function Fn(i){var s=i._currentValue;if(Xh!==i)if(i={context:i,memoizedValue:s,next:null},No===null){if(rc===null)throw Error(n(308));No=i,rc.dependencies={lanes:0,firstContext:i}}else No=No.next=i;return s}var Is=null;function tf(i){Is===null?Is=[i]:Is.push(i)}function Oy(i,s,l,d){var p=s.interleaved;return p===null?(l.next=l,tf(s)):(l.next=p.next,p.next=l),s.interleaved=l,Hr(i,d)}function Hr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Ii=!1;function nf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ly(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function qr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Ti(i,s,l){var d=i.updateQueue;if(d===null)return null;if(d=d.shared,(We&2)!==0){var p=d.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),d.pending=s,Hr(i,l)}return p=d.interleaved,p===null?(s.next=s,tf(d)):(s.next=p.next,p.next=s),d.interleaved=s,Hr(i,l)}function ic(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,hi(i,l)}}function My(i,s){var l=i.updateQueue,d=i.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var p=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var I={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?p=y=I:y=y.next=I,l=l.next}while(l!==null);y===null?p=y=s:y=y.next=s}else p=y=s;l={baseState:d.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:d.shared,effects:d.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function sc(i,s,l,d){var p=i.updateQueue;Ii=!1;var y=p.firstBaseUpdate,I=p.lastBaseUpdate,R=p.shared.pending;if(R!==null){p.shared.pending=null;var O=R,W=O.next;O.next=null,I===null?y=W:I.next=W,I=O;var ne=i.alternate;ne!==null&&(ne=ne.updateQueue,R=ne.lastBaseUpdate,R!==I&&(R===null?ne.firstBaseUpdate=W:R.next=W,ne.lastBaseUpdate=O))}if(y!==null){var re=p.baseState;I=0,ne=W=O=null,R=y;do{var ee=R.lane,ce=R.eventTime;if((d&ee)===ee){ne!==null&&(ne=ne.next={eventTime:ce,lane:0,tag:R.tag,payload:R.payload,callback:R.callback,next:null});e:{var me=i,ge=R;switch(ee=s,ce=l,ge.tag){case 1:if(me=ge.payload,typeof me=="function"){re=me.call(ce,re,ee);break e}re=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=ge.payload,ee=typeof me=="function"?me.call(ce,re,ee):me,ee==null)break e;re=ue({},re,ee);break e;case 2:Ii=!0}}R.callback!==null&&R.lane!==0&&(i.flags|=64,ee=p.effects,ee===null?p.effects=[R]:ee.push(R))}else ce={eventTime:ce,lane:ee,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ne===null?(W=ne=ce,O=re):ne=ne.next=ce,I|=ee;if(R=R.next,R===null){if(R=p.shared.pending,R===null)break;ee=R,R=ee.next,ee.next=null,p.lastBaseUpdate=ee,p.shared.pending=null}}while(!0);if(ne===null&&(O=re),p.baseState=O,p.firstBaseUpdate=W,p.lastBaseUpdate=ne,s=p.shared.interleaved,s!==null){p=s;do I|=p.lane,p=p.next;while(p!==s)}else y===null&&(p.shared.lanes=0);As|=I,i.lanes=I,i.memoizedState=re}}function Vy(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var d=i[s],p=d.callback;if(p!==null){if(d.callback=null,d=l,typeof p!="function")throw Error(n(191,p));p.call(d)}}}var al={},Ir=_i(al),ll=_i(al),ul=_i(al);function Ts(i){if(i===al)throw Error(n(174));return i}function rf(i,s){switch(rt(ul,s),rt(ll,i),rt(Ir,al),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Tt(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Tt(s,i)}st(Ir),rt(Ir,s)}function Lo(){st(Ir),st(ll),st(ul)}function Fy(i){Ts(ul.current);var s=Ts(Ir.current),l=Tt(s,i.type);s!==l&&(rt(ll,i),rt(Ir,l))}function sf(i){ll.current===i&&(st(Ir),st(ll))}var ut=_i(0);function oc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var of=[];function af(){for(var i=0;i<of.length;i++)of[i]._workInProgressVersionPrimary=null;of.length=0}var ac=z.ReactCurrentDispatcher,lf=z.ReactCurrentBatchConfig,Ss=0,ct=null,At=null,kt=null,lc=!1,cl=!1,dl=0,_A=0;function Kt(){throw Error(n(321))}function uf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!rr(i[l],s[l]))return!1;return!0}function cf(i,s,l,d,p,y){if(Ss=y,ct=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,ac.current=i===null||i.memoizedState===null?TA:SA,i=l(d,p),cl){y=0;do{if(cl=!1,dl=0,25<=y)throw Error(n(301));y+=1,kt=At=null,s.updateQueue=null,ac.current=AA,i=l(d,p)}while(cl)}if(ac.current=dc,s=At!==null&&At.next!==null,Ss=0,kt=At=ct=null,lc=!1,s)throw Error(n(300));return i}function df(){var i=dl!==0;return dl=0,i}function Tr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?ct.memoizedState=kt=i:kt=kt.next=i,kt}function Un(){if(At===null){var i=ct.alternate;i=i!==null?i.memoizedState:null}else i=At.next;var s=kt===null?ct.memoizedState:kt.next;if(s!==null)kt=s,At=i;else{if(i===null)throw Error(n(310));At=i,i={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},kt===null?ct.memoizedState=kt=i:kt=kt.next=i}return kt}function hl(i,s){return typeof s=="function"?s(i):s}function hf(i){var s=Un(),l=s.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=i;var d=At,p=d.baseQueue,y=l.pending;if(y!==null){if(p!==null){var I=p.next;p.next=y.next,y.next=I}d.baseQueue=p=y,l.pending=null}if(p!==null){y=p.next,d=d.baseState;var R=I=null,O=null,W=y;do{var ne=W.lane;if((Ss&ne)===ne)O!==null&&(O=O.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),d=W.hasEagerState?W.eagerState:i(d,W.action);else{var re={lane:ne,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};O===null?(R=O=re,I=d):O=O.next=re,ct.lanes|=ne,As|=ne}W=W.next}while(W!==null&&W!==y);O===null?I=d:O.next=R,rr(d,s.memoizedState)||(mn=!0),s.memoizedState=d,s.baseState=I,s.baseQueue=O,l.lastRenderedState=d}if(i=l.interleaved,i!==null){p=i;do y=p.lane,ct.lanes|=y,As|=y,p=p.next;while(p!==i)}else p===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function ff(i){var s=Un(),l=s.queue;if(l===null)throw Error(n(311));l.lastRenderedReducer=i;var d=l.dispatch,p=l.pending,y=s.memoizedState;if(p!==null){l.pending=null;var I=p=p.next;do y=i(y,I.action),I=I.next;while(I!==p);rr(y,s.memoizedState)||(mn=!0),s.memoizedState=y,s.baseQueue===null&&(s.baseState=y),l.lastRenderedState=y}return[y,d]}function Uy(){}function jy(i,s){var l=ct,d=Un(),p=s(),y=!rr(d.memoizedState,p);if(y&&(d.memoizedState=p,mn=!0),d=d.queue,pf(zy.bind(null,l,d,i),[i]),d.getSnapshot!==s||y||kt!==null&&kt.memoizedState.tag&1){if(l.flags|=2048,fl(9,$y.bind(null,l,d,p,s),void 0,null),Dt===null)throw Error(n(349));(Ss&30)!==0||By(l,s,p)}return p}function By(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=ct.updateQueue,s===null?(s={lastEffect:null,stores:null},ct.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function $y(i,s,l,d){s.value=l,s.getSnapshot=d,Wy(s)&&Gy(i)}function zy(i,s,l){return l(function(){Wy(s)&&Gy(i)})}function Wy(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!rr(i,l)}catch{return!0}}function Gy(i){var s=Hr(i,1);s!==null&&lr(s,i,1,-1)}function Hy(i){var s=Tr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:i},s.queue=i,i=i.dispatch=IA.bind(null,ct,i),[s.memoizedState,i]}function fl(i,s,l,d){return i={tag:i,create:s,destroy:l,deps:d,next:null},s=ct.updateQueue,s===null?(s={lastEffect:null,stores:null},ct.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(d=l.next,l.next=i,i.next=d,s.lastEffect=i)),i}function qy(){return Un().memoizedState}function uc(i,s,l,d){var p=Tr();ct.flags|=i,p.memoizedState=fl(1|s,l,void 0,d===void 0?null:d)}function cc(i,s,l,d){var p=Un();d=d===void 0?null:d;var y=void 0;if(At!==null){var I=At.memoizedState;if(y=I.destroy,d!==null&&uf(d,I.deps)){p.memoizedState=fl(s,l,y,d);return}}ct.flags|=i,p.memoizedState=fl(1|s,l,y,d)}function Ky(i,s){return uc(8390656,8,i,s)}function pf(i,s){return cc(2048,8,i,s)}function Qy(i,s){return cc(4,2,i,s)}function Yy(i,s){return cc(4,4,i,s)}function Xy(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Jy(i,s,l){return l=l!=null?l.concat([i]):null,cc(4,4,Xy.bind(null,s,i),l)}function mf(){}function Zy(i,s){var l=Un();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&uf(s,d[1])?d[0]:(l.memoizedState=[i,s],i)}function ev(i,s){var l=Un();s=s===void 0?null:s;var d=l.memoizedState;return d!==null&&s!==null&&uf(s,d[1])?d[0]:(i=i(),l.memoizedState=[i,s],i)}function tv(i,s,l){return(Ss&21)===0?(i.baseState&&(i.baseState=!1,mn=!0),i.memoizedState=l):(rr(l,s)||(l=fs(),ct.lanes|=l,As|=l,i.baseState=!0),s)}function wA(i,s){var l=je;je=l!==0&&4>l?l:4,i(!0);var d=lf.transition;lf.transition={};try{i(!1),s()}finally{je=l,lf.transition=d}}function nv(){return Un().memoizedState}function EA(i,s,l){var d=Ci(i);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},rv(i))iv(s,l);else if(l=Oy(i,s,l,d),l!==null){var p=an();lr(l,i,d,p),sv(l,s,d)}}function IA(i,s,l){var d=Ci(i),p={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(rv(i))iv(s,p);else{var y=i.alternate;if(i.lanes===0&&(y===null||y.lanes===0)&&(y=s.lastRenderedReducer,y!==null))try{var I=s.lastRenderedState,R=y(I,l);if(p.hasEagerState=!0,p.eagerState=R,rr(R,I)){var O=s.interleaved;O===null?(p.next=p,tf(s)):(p.next=O.next,O.next=p),s.interleaved=p;return}}catch{}finally{}l=Oy(i,s,p,d),l!==null&&(p=an(),lr(l,i,d,p),sv(l,s,d))}}function rv(i){var s=i.alternate;return i===ct||s!==null&&s===ct}function iv(i,s){cl=lc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function sv(i,s,l){if((l&4194240)!==0){var d=s.lanes;d&=i.pendingLanes,l|=d,s.lanes=l,hi(i,l)}}var dc={readContext:Fn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},TA={readContext:Fn,useCallback:function(i,s){return Tr().memoizedState=[i,s===void 0?null:s],i},useContext:Fn,useEffect:Ky,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,uc(4194308,4,Xy.bind(null,s,i),l)},useLayoutEffect:function(i,s){return uc(4194308,4,i,s)},useInsertionEffect:function(i,s){return uc(4,2,i,s)},useMemo:function(i,s){var l=Tr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var d=Tr();return s=l!==void 0?l(s):s,d.memoizedState=d.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},d.queue=i,i=i.dispatch=EA.bind(null,ct,i),[d.memoizedState,i]},useRef:function(i){var s=Tr();return i={current:i},s.memoizedState=i},useState:Hy,useDebugValue:mf,useDeferredValue:function(i){return Tr().memoizedState=i},useTransition:function(){var i=Hy(!1),s=i[0];return i=wA.bind(null,i[1]),Tr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var d=ct,p=Tr();if(lt){if(l===void 0)throw Error(n(407));l=l()}else{if(l=s(),Dt===null)throw Error(n(349));(Ss&30)!==0||By(d,s,l)}p.memoizedState=l;var y={value:l,getSnapshot:s};return p.queue=y,Ky(zy.bind(null,d,y,i),[i]),d.flags|=2048,fl(9,$y.bind(null,d,y,l,s),void 0,null),l},useId:function(){var i=Tr(),s=Dt.identifierPrefix;if(lt){var l=Gr,d=Wr;l=(d&~(1<<32-rn(d)-1)).toString(32)+l,s=":"+s+"R"+l,l=dl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=_A++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},SA={readContext:Fn,useCallback:Zy,useContext:Fn,useEffect:pf,useImperativeHandle:Jy,useInsertionEffect:Qy,useLayoutEffect:Yy,useMemo:ev,useReducer:hf,useRef:qy,useState:function(){return hf(hl)},useDebugValue:mf,useDeferredValue:function(i){var s=Un();return tv(s,At.memoizedState,i)},useTransition:function(){var i=hf(hl)[0],s=Un().memoizedState;return[i,s]},useMutableSource:Uy,useSyncExternalStore:jy,useId:nv,unstable_isNewReconciler:!1},AA={readContext:Fn,useCallback:Zy,useContext:Fn,useEffect:pf,useImperativeHandle:Jy,useInsertionEffect:Qy,useLayoutEffect:Yy,useMemo:ev,useReducer:ff,useRef:qy,useState:function(){return ff(hl)},useDebugValue:mf,useDeferredValue:function(i){var s=Un();return At===null?s.memoizedState=i:tv(s,At.memoizedState,i)},useTransition:function(){var i=ff(hl)[0],s=Un().memoizedState;return[i,s]},useMutableSource:Uy,useSyncExternalStore:jy,useId:nv,unstable_isNewReconciler:!1};function sr(i,s){if(i&&i.defaultProps){s=ue({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function gf(i,s,l,d){s=i.memoizedState,l=l(d,s),l=l==null?s:ue({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var hc={isMounted:function(i){return(i=i._reactInternals)?Yn(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var d=an(),p=Ci(i),y=qr(d,p);y.payload=s,l!=null&&(y.callback=l),s=Ti(i,y,p),s!==null&&(lr(s,i,p,d),ic(s,i,p))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var d=an(),p=Ci(i),y=qr(d,p);y.tag=1,y.payload=s,l!=null&&(y.callback=l),s=Ti(i,y,p),s!==null&&(lr(s,i,p,d),ic(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=an(),d=Ci(i),p=qr(l,d);p.tag=2,s!=null&&(p.callback=s),s=Ti(i,p,d),s!==null&&(lr(s,i,d,l),ic(s,i,d))}};function ov(i,s,l,d,p,y,I){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(d,y,I):s.prototype&&s.prototype.isPureReactComponent?!Za(l,d)||!Za(p,y):!0}function av(i,s,l){var d=!1,p=wi,y=s.contextType;return typeof y=="object"&&y!==null?y=Fn(y):(p=pn(s)?_s:qt.current,d=s.contextTypes,y=(d=d!=null)?Ro(i,p):wi),s=new s(l,y),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=hc,i.stateNode=s,s._reactInternals=i,d&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=y),s}function lv(i,s,l,d){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,d),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,d),s.state!==i&&hc.enqueueReplaceState(s,s.state,null)}function yf(i,s,l,d){var p=i.stateNode;p.props=l,p.state=i.memoizedState,p.refs={},nf(i);var y=s.contextType;typeof y=="object"&&y!==null?p.context=Fn(y):(y=pn(s)?_s:qt.current,p.context=Ro(i,y)),p.state=i.memoizedState,y=s.getDerivedStateFromProps,typeof y=="function"&&(gf(i,s,y,l),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&hc.enqueueReplaceState(p,p.state,null),sc(i,l,p,d),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Mo(i,s){try{var l="",d=s;do l+=Ae(d),d=d.return;while(d);var p=l}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:i,source:s,stack:p,digest:null}}function vf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function _f(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var bA=typeof WeakMap=="function"?WeakMap:Map;function uv(i,s,l){l=qr(-1,l),l.tag=3,l.payload={element:null};var d=s.value;return l.callback=function(){_c||(_c=!0,Of=d),_f(i,s)},l}function cv(i,s,l){l=qr(-1,l),l.tag=3;var d=i.type.getDerivedStateFromError;if(typeof d=="function"){var p=s.value;l.payload=function(){return d(p)},l.callback=function(){_f(i,s)}}var y=i.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){_f(i,s),typeof d!="function"&&(Ai===null?Ai=new Set([this]):Ai.add(this));var I=s.stack;this.componentDidCatch(s.value,{componentStack:I!==null?I:""})}),l}function dv(i,s,l){var d=i.pingCache;if(d===null){d=i.pingCache=new bA;var p=new Set;d.set(s,p)}else p=d.get(s),p===void 0&&(p=new Set,d.set(s,p));p.has(l)||(p.add(l),i=jA.bind(null,i,s,l),s.then(i,i))}function hv(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function fv(i,s,l,d,p){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=qr(-1,1),s.tag=2,Ti(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=p,i)}var CA=z.ReactCurrentOwner,mn=!1;function on(i,s,l,d){s.child=i===null?Ny(s,null,l,d):Do(s,i.child,l,d)}function pv(i,s,l,d,p){l=l.render;var y=s.ref;return Oo(s,p),d=cf(i,s,l,d,y,p),l=df(),i!==null&&!mn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Kr(i,s,p)):(lt&&l&&Hh(s),s.flags|=1,on(i,s,d,p),s.child)}function mv(i,s,l,d,p){if(i===null){var y=l.type;return typeof y=="function"&&!Bf(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=y,gv(i,s,y,d,p)):(i=Ac(l.type,null,d,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(y=i.child,(i.lanes&p)===0){var I=y.memoizedProps;if(l=l.compare,l=l!==null?l:Za,l(I,d)&&i.ref===s.ref)return Kr(i,s,p)}return s.flags|=1,i=Pi(y,d),i.ref=s.ref,i.return=s,s.child=i}function gv(i,s,l,d,p){if(i!==null){var y=i.memoizedProps;if(Za(y,d)&&i.ref===s.ref)if(mn=!1,s.pendingProps=d=y,(i.lanes&p)!==0)(i.flags&131072)!==0&&(mn=!0);else return s.lanes=i.lanes,Kr(i,s,p)}return wf(i,s,l,d,p)}function yv(i,s,l){var d=s.pendingProps,p=d.children,y=i!==null?i.memoizedState:null;if(d.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(Fo,bn),bn|=l;else{if((l&1073741824)===0)return i=y!==null?y.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,rt(Fo,bn),bn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=y!==null?y.baseLanes:l,rt(Fo,bn),bn|=d}else y!==null?(d=y.baseLanes|l,s.memoizedState=null):d=l,rt(Fo,bn),bn|=d;return on(i,s,p,l),s.child}function vv(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function wf(i,s,l,d,p){var y=pn(l)?_s:qt.current;return y=Ro(s,y),Oo(s,p),l=cf(i,s,l,d,y,p),d=df(),i!==null&&!mn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Kr(i,s,p)):(lt&&d&&Hh(s),s.flags|=1,on(i,s,l,p),s.child)}function _v(i,s,l,d,p){if(pn(l)){var y=!0;Yu(s)}else y=!1;if(Oo(s,p),s.stateNode===null)pc(i,s),av(s,l,d),yf(s,l,d,p),d=!0;else if(i===null){var I=s.stateNode,R=s.memoizedProps;I.props=R;var O=I.context,W=l.contextType;typeof W=="object"&&W!==null?W=Fn(W):(W=pn(l)?_s:qt.current,W=Ro(s,W));var ne=l.getDerivedStateFromProps,re=typeof ne=="function"||typeof I.getSnapshotBeforeUpdate=="function";re||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(R!==d||O!==W)&&lv(s,I,d,W),Ii=!1;var ee=s.memoizedState;I.state=ee,sc(s,d,I,p),O=s.memoizedState,R!==d||ee!==O||fn.current||Ii?(typeof ne=="function"&&(gf(s,l,ne,d),O=s.memoizedState),(R=Ii||ov(s,l,R,d,ee,O,W))?(re||typeof I.UNSAFE_componentWillMount!="function"&&typeof I.componentWillMount!="function"||(typeof I.componentWillMount=="function"&&I.componentWillMount(),typeof I.UNSAFE_componentWillMount=="function"&&I.UNSAFE_componentWillMount()),typeof I.componentDidMount=="function"&&(s.flags|=4194308)):(typeof I.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=d,s.memoizedState=O),I.props=d,I.state=O,I.context=W,d=R):(typeof I.componentDidMount=="function"&&(s.flags|=4194308),d=!1)}else{I=s.stateNode,Ly(i,s),R=s.memoizedProps,W=s.type===s.elementType?R:sr(s.type,R),I.props=W,re=s.pendingProps,ee=I.context,O=l.contextType,typeof O=="object"&&O!==null?O=Fn(O):(O=pn(l)?_s:qt.current,O=Ro(s,O));var ce=l.getDerivedStateFromProps;(ne=typeof ce=="function"||typeof I.getSnapshotBeforeUpdate=="function")||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(R!==re||ee!==O)&&lv(s,I,d,O),Ii=!1,ee=s.memoizedState,I.state=ee,sc(s,d,I,p);var me=s.memoizedState;R!==re||ee!==me||fn.current||Ii?(typeof ce=="function"&&(gf(s,l,ce,d),me=s.memoizedState),(W=Ii||ov(s,l,W,d,ee,me,O)||!1)?(ne||typeof I.UNSAFE_componentWillUpdate!="function"&&typeof I.componentWillUpdate!="function"||(typeof I.componentWillUpdate=="function"&&I.componentWillUpdate(d,me,O),typeof I.UNSAFE_componentWillUpdate=="function"&&I.UNSAFE_componentWillUpdate(d,me,O)),typeof I.componentDidUpdate=="function"&&(s.flags|=4),typeof I.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof I.componentDidUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(s.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(s.flags|=1024),s.memoizedProps=d,s.memoizedState=me),I.props=d,I.state=me,I.context=O,d=W):(typeof I.componentDidUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(s.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||R===i.memoizedProps&&ee===i.memoizedState||(s.flags|=1024),d=!1)}return Ef(i,s,l,d,y,p)}function Ef(i,s,l,d,p,y){vv(i,s);var I=(s.flags&128)!==0;if(!d&&!I)return p&&Sy(s,l,!1),Kr(i,s,y);d=s.stateNode,CA.current=s;var R=I&&typeof l.getDerivedStateFromError!="function"?null:d.render();return s.flags|=1,i!==null&&I?(s.child=Do(s,i.child,null,y),s.child=Do(s,null,R,y)):on(i,s,R,y),s.memoizedState=d.state,p&&Sy(s,l,!0),s.child}function wv(i){var s=i.stateNode;s.pendingContext?Iy(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Iy(i,s.context,!1),rf(i,s.containerInfo)}function Ev(i,s,l,d,p){return ko(),Yh(p),s.flags|=256,on(i,s,l,d),s.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Tf(i){return{baseLanes:i,cachePool:null,transitions:null}}function Iv(i,s,l){var d=s.pendingProps,p=ut.current,y=!1,I=(s.flags&128)!==0,R;if((R=I)||(R=i!==null&&i.memoizedState===null?!1:(p&2)!==0),R?(y=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),rt(ut,p&1),i===null)return Qh(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(I=d.children,i=d.fallback,y?(d=s.mode,y=s.child,I={mode:"hidden",children:I},(d&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=I):y=bc(I,d,0,null),i=Ps(i,d,l,null),y.return=s,i.return=s,y.sibling=i,s.child=y,s.child.memoizedState=Tf(l),s.memoizedState=If,i):Sf(s,I));if(p=i.memoizedState,p!==null&&(R=p.dehydrated,R!==null))return RA(i,s,I,d,R,p,l);if(y){y=d.fallback,I=s.mode,p=i.child,R=p.sibling;var O={mode:"hidden",children:d.children};return(I&1)===0&&s.child!==p?(d=s.child,d.childLanes=0,d.pendingProps=O,s.deletions=null):(d=Pi(p,O),d.subtreeFlags=p.subtreeFlags&14680064),R!==null?y=Pi(R,y):(y=Ps(y,I,l,null),y.flags|=2),y.return=s,d.return=s,d.sibling=y,s.child=d,d=y,y=s.child,I=i.child.memoizedState,I=I===null?Tf(l):{baseLanes:I.baseLanes|l,cachePool:null,transitions:I.transitions},y.memoizedState=I,y.childLanes=i.childLanes&~l,s.memoizedState=If,d}return y=i.child,i=y.sibling,d=Pi(y,{mode:"visible",children:d.children}),(s.mode&1)===0&&(d.lanes=l),d.return=s,d.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=d,s.memoizedState=null,d}function Sf(i,s){return s=bc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function fc(i,s,l,d){return d!==null&&Yh(d),Do(s,i.child,null,l),i=Sf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function RA(i,s,l,d,p,y,I){if(l)return s.flags&256?(s.flags&=-257,d=vf(Error(n(422))),fc(i,s,I,d)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(y=d.fallback,p=s.mode,d=bc({mode:"visible",children:d.children},p,0,null),y=Ps(y,p,I,null),y.flags|=2,d.return=s,y.return=s,d.sibling=y,s.child=d,(s.mode&1)!==0&&Do(s,i.child,null,I),s.child.memoizedState=Tf(I),s.memoizedState=If,y);if((s.mode&1)===0)return fc(i,s,I,null);if(p.data==="$!"){if(d=p.nextSibling&&p.nextSibling.dataset,d)var R=d.dgst;return d=R,y=Error(n(419)),d=vf(y,d,void 0),fc(i,s,I,d)}if(R=(I&i.childLanes)!==0,mn||R){if(d=Dt,d!==null){switch(I&-I){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(d.suspendedLanes|I))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,Hr(i,p),lr(d,i,p,-1))}return jf(),d=vf(Error(n(421))),fc(i,s,I,d)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=BA.bind(null,i),p._reactRetry=s,null):(i=y.treeContext,An=vi(p.nextSibling),Sn=s,lt=!0,ir=null,i!==null&&(Mn[Vn++]=Wr,Mn[Vn++]=Gr,Mn[Vn++]=ws,Wr=i.id,Gr=i.overflow,ws=s),s=Sf(s,d.children),s.flags|=4096,s)}function Tv(i,s,l){i.lanes|=s;var d=i.alternate;d!==null&&(d.lanes|=s),ef(i.return,s,l)}function Af(i,s,l,d,p){var y=i.memoizedState;y===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:p}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=d,y.tail=l,y.tailMode=p)}function Sv(i,s,l){var d=s.pendingProps,p=d.revealOrder,y=d.tail;if(on(i,s,d.children,l),d=ut.current,(d&2)!==0)d=d&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&Tv(i,l,s);else if(i.tag===19)Tv(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}d&=1}if(rt(ut,d),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(l=s.child,p=null;l!==null;)i=l.alternate,i!==null&&oc(i)===null&&(p=l),l=l.sibling;l=p,l===null?(p=s.child,s.child=null):(p=l.sibling,l.sibling=null),Af(s,!1,p,l,y);break;case"backwards":for(l=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&oc(i)===null){s.child=p;break}i=p.sibling,p.sibling=l,l=p,p=i}Af(s,!0,l,null,y);break;case"together":Af(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function pc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Kr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),As|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(n(153));if(s.child!==null){for(i=s.child,l=Pi(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Pi(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function PA(i,s,l){switch(s.tag){case 3:wv(s),ko();break;case 5:Fy(s);break;case 1:pn(s.type)&&Yu(s);break;case 4:rf(s,s.stateNode.containerInfo);break;case 10:var d=s.type._context,p=s.memoizedProps.value;rt(nc,d._currentValue),d._currentValue=p;break;case 13:if(d=s.memoizedState,d!==null)return d.dehydrated!==null?(rt(ut,ut.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?Iv(i,s,l):(rt(ut,ut.current&1),i=Kr(i,s,l),i!==null?i.sibling:null);rt(ut,ut.current&1);break;case 19:if(d=(l&s.childLanes)!==0,(i.flags&128)!==0){if(d)return Sv(i,s,l);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),rt(ut,ut.current),d)break;return null;case 22:case 23:return s.lanes=0,yv(i,s,l)}return Kr(i,s,l)}var Av,bf,bv,Cv;Av=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},bf=function(){},bv=function(i,s,l,d){var p=i.memoizedProps;if(p!==d){i=s.stateNode,Ts(Ir.current);var y=null;switch(l){case"input":p=ns(i,p),d=ns(i,d),y=[];break;case"select":p=ue({},p,{value:void 0}),d=ue({},d,{value:void 0}),y=[];break;case"textarea":p=Ra(i,p),d=Ra(i,d),y=[];break;default:typeof p.onClick!="function"&&typeof d.onClick=="function"&&(i.onclick=qu)}Oa(l,d);var I;l=null;for(W in p)if(!d.hasOwnProperty(W)&&p.hasOwnProperty(W)&&p[W]!=null)if(W==="style"){var R=p[W];for(I in R)R.hasOwnProperty(I)&&(l||(l={}),l[I]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(o.hasOwnProperty(W)?y||(y=[]):(y=y||[]).push(W,null));for(W in d){var O=d[W];if(R=p!=null?p[W]:void 0,d.hasOwnProperty(W)&&O!==R&&(O!=null||R!=null))if(W==="style")if(R){for(I in R)!R.hasOwnProperty(I)||O&&O.hasOwnProperty(I)||(l||(l={}),l[I]="");for(I in O)O.hasOwnProperty(I)&&R[I]!==O[I]&&(l||(l={}),l[I]=O[I])}else l||(y||(y=[]),y.push(W,l)),l=O;else W==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,R=R?R.__html:void 0,O!=null&&R!==O&&(y=y||[]).push(W,O)):W==="children"?typeof O!="string"&&typeof O!="number"||(y=y||[]).push(W,""+O):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(o.hasOwnProperty(W)?(O!=null&&W==="onScroll"&&it("scroll",i),y||R===O||(y=[])):(y=y||[]).push(W,O))}l&&(y=y||[]).push("style",l);var W=y;(s.updateQueue=W)&&(s.flags|=4)}},Cv=function(i,s,l,d){l!==d&&(s.flags|=4)};function pl(i,s){if(!lt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:d.sibling=null}}function Qt(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,d=0;if(s)for(var p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags&14680064,d|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)l|=p.lanes|p.childLanes,d|=p.subtreeFlags,d|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=d,i.childLanes=l,s}function xA(i,s,l){var d=s.pendingProps;switch(qh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(s),null;case 1:return pn(s.type)&&Qu(),Qt(s),null;case 3:return d=s.stateNode,Lo(),st(fn),st(qt),af(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(i===null||i.child===null)&&(ec(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,ir!==null&&(Vf(ir),ir=null))),bf(i,s),Qt(s),null;case 5:sf(s);var p=Ts(ul.current);if(l=s.type,i!==null&&s.stateNode!=null)bv(i,s,l,d,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!d){if(s.stateNode===null)throw Error(n(166));return Qt(s),null}if(i=Ts(Ir.current),ec(s)){d=s.stateNode,l=s.type;var y=s.memoizedProps;switch(d[Er]=s,d[il]=y,i=(s.mode&1)!==0,l){case"dialog":it("cancel",d),it("close",d);break;case"iframe":case"object":case"embed":it("load",d);break;case"video":case"audio":for(p=0;p<tl.length;p++)it(tl[p],d);break;case"source":it("error",d);break;case"img":case"image":case"link":it("error",d),it("load",d);break;case"details":it("toggle",d);break;case"input":Qs(d,y),it("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!y.multiple},it("invalid",d);break;case"textarea":Xs(d,y),it("invalid",d)}Oa(l,y),p=null;for(var I in y)if(y.hasOwnProperty(I)){var R=y[I];I==="children"?typeof R=="string"?d.textContent!==R&&(y.suppressHydrationWarning!==!0&&Hu(d.textContent,R,i),p=["children",R]):typeof R=="number"&&d.textContent!==""+R&&(y.suppressHydrationWarning!==!0&&Hu(d.textContent,R,i),p=["children",""+R]):o.hasOwnProperty(I)&&R!=null&&I==="onScroll"&&it("scroll",d)}switch(l){case"input":nn(d),vu(d,y,!0);break;case"textarea":nn(d),Pa(d);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(d.onclick=qu)}d=p,s.updateQueue=d,d!==null&&(s.flags|=4)}else{I=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=It(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=I.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof d.is=="string"?i=I.createElement(l,{is:d.is}):(i=I.createElement(l),l==="select"&&(I=i,d.multiple?I.multiple=!0:d.size&&(I.size=d.size))):i=I.createElementNS(i,l),i[Er]=s,i[il]=d,Av(i,s,!1,!1),s.stateNode=i;e:{switch(I=La(l,d),l){case"dialog":it("cancel",i),it("close",i),p=d;break;case"iframe":case"object":case"embed":it("load",i),p=d;break;case"video":case"audio":for(p=0;p<tl.length;p++)it(tl[p],i);p=d;break;case"source":it("error",i),p=d;break;case"img":case"image":case"link":it("error",i),it("load",i),p=d;break;case"details":it("toggle",i),p=d;break;case"input":Qs(i,d),p=ns(i,d),it("invalid",i);break;case"option":p=d;break;case"select":i._wrapperState={wasMultiple:!!d.multiple},p=ue({},d,{value:void 0}),it("invalid",i);break;case"textarea":Xs(i,d),p=Ra(i,d),it("invalid",i);break;default:p=d}Oa(l,p),R=p;for(y in R)if(R.hasOwnProperty(y)){var O=R[y];y==="style"?Da(i,O):y==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&xa(i,O)):y==="children"?typeof O=="string"?(l!=="textarea"||O!=="")&&ai(i,O):typeof O=="number"&&ai(i,""+O):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?O!=null&&y==="onScroll"&&it("scroll",i):O!=null&&G(i,y,O,I))}switch(l){case"input":nn(i),vu(i,d,!1);break;case"textarea":nn(i),Pa(i);break;case"option":d.value!=null&&i.setAttribute("value",""+Ne(d.value));break;case"select":i.multiple=!!d.multiple,y=d.value,y!=null?Or(i,!!d.multiple,y,!1):d.defaultValue!=null&&Or(i,!!d.multiple,d.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=qu)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Qt(s),null;case 6:if(i&&s.stateNode!=null)Cv(i,s,i.memoizedProps,d);else{if(typeof d!="string"&&s.stateNode===null)throw Error(n(166));if(l=Ts(ul.current),Ts(Ir.current),ec(s)){if(d=s.stateNode,l=s.memoizedProps,d[Er]=s,(y=d.nodeValue!==l)&&(i=Sn,i!==null))switch(i.tag){case 3:Hu(d.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Hu(d.nodeValue,l,(i.mode&1)!==0)}y&&(s.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Er]=s,s.stateNode=d}return Qt(s),null;case 13:if(st(ut),d=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(lt&&An!==null&&(s.mode&1)!==0&&(s.flags&128)===0)xy(),ko(),s.flags|=98560,y=!1;else if(y=ec(s),d!==null&&d.dehydrated!==null){if(i===null){if(!y)throw Error(n(318));if(y=s.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(n(317));y[Er]=s}else ko(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Qt(s),y=!1}else ir!==null&&(Vf(ir),ir=null),y=!0;if(!y)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(d=d!==null,d!==(i!==null&&i.memoizedState!==null)&&d&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(ut.current&1)!==0?bt===0&&(bt=3):jf())),s.updateQueue!==null&&(s.flags|=4),Qt(s),null);case 4:return Lo(),bf(i,s),i===null&&nl(s.stateNode.containerInfo),Qt(s),null;case 10:return Zh(s.type._context),Qt(s),null;case 17:return pn(s.type)&&Qu(),Qt(s),null;case 19:if(st(ut),y=s.memoizedState,y===null)return Qt(s),null;if(d=(s.flags&128)!==0,I=y.rendering,I===null)if(d)pl(y,!1);else{if(bt!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(I=oc(i),I!==null){for(s.flags|=128,pl(y,!1),d=I.updateQueue,d!==null&&(s.updateQueue=d,s.flags|=4),s.subtreeFlags=0,d=l,l=s.child;l!==null;)y=l,i=d,y.flags&=14680066,I=y.alternate,I===null?(y.childLanes=0,y.lanes=i,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=I.childLanes,y.lanes=I.lanes,y.child=I.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=I.memoizedProps,y.memoizedState=I.memoizedState,y.updateQueue=I.updateQueue,y.type=I.type,i=I.dependencies,y.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return rt(ut,ut.current&1|2),s.child}i=i.sibling}y.tail!==null&&nt()>Uo&&(s.flags|=128,d=!0,pl(y,!1),s.lanes=4194304)}else{if(!d)if(i=oc(I),i!==null){if(s.flags|=128,d=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),pl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!I.alternate&&!lt)return Qt(s),null}else 2*nt()-y.renderingStartTime>Uo&&l!==1073741824&&(s.flags|=128,d=!0,pl(y,!1),s.lanes=4194304);y.isBackwards?(I.sibling=s.child,s.child=I):(l=y.last,l!==null?l.sibling=I:s.child=I,y.last=I)}return y.tail!==null?(s=y.tail,y.rendering=s,y.tail=s.sibling,y.renderingStartTime=nt(),s.sibling=null,l=ut.current,rt(ut,d?l&1|2:l&1),s):(Qt(s),null);case 22:case 23:return Uf(),d=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==d&&(s.flags|=8192),d&&(s.mode&1)!==0?(bn&1073741824)!==0&&(Qt(s),s.subtreeFlags&6&&(s.flags|=8192)):Qt(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function kA(i,s){switch(qh(s),s.tag){case 1:return pn(s.type)&&Qu(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Lo(),st(fn),st(qt),af(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return sf(s),null;case 13:if(st(ut),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(n(340));ko()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return st(ut),null;case 4:return Lo(),null;case 10:return Zh(s.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var mc=!1,Yt=!1,DA=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Vo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){ht(i,s,d)}else l.current=null}function Cf(i,s,l){try{l()}catch(d){ht(i,s,d)}}var Rv=!1;function NA(i,s){if(Fh=mi,i=oy(),xh(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var p=d.anchorOffset,y=d.focusNode;d=d.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var I=0,R=-1,O=-1,W=0,ne=0,re=i,ee=null;t:for(;;){for(var ce;re!==l||p!==0&&re.nodeType!==3||(R=I+p),re!==y||d!==0&&re.nodeType!==3||(O=I+d),re.nodeType===3&&(I+=re.nodeValue.length),(ce=re.firstChild)!==null;)ee=re,re=ce;for(;;){if(re===i)break t;if(ee===l&&++W===p&&(R=I),ee===y&&++ne===d&&(O=I),(ce=re.nextSibling)!==null)break;re=ee,ee=re.parentNode}re=ce}l=R===-1||O===-1?null:{start:R,end:O}}else l=null}l=l||{start:0,end:0}}else l=null;for(Uh={focusedElem:i,selectionRange:l},mi=!1,fe=s;fe!==null;)if(s=fe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,fe=i;else for(;fe!==null;){s=fe;try{var me=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(me!==null){var ge=me.memoizedProps,gt=me.memoizedState,B=s.stateNode,M=B.getSnapshotBeforeUpdate(s.elementType===s.type?ge:sr(s.type,ge),gt);B.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var $=s.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(se){ht(s,s.return,se)}if(i=s.sibling,i!==null){i.return=s.return,fe=i;break}fe=s.return}return me=Rv,Rv=!1,me}function ml(i,s,l){var d=s.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var p=d=d.next;do{if((p.tag&i)===i){var y=p.destroy;p.destroy=void 0,y!==void 0&&Cf(s,l,y)}p=p.next}while(p!==d)}}function gc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var d=l.create;l.destroy=d()}l=l.next}while(l!==s)}}function Rf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function Pv(i){var s=i.alternate;s!==null&&(i.alternate=null,Pv(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Er],delete s[il],delete s[zh],delete s[mA],delete s[gA])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function xv(i){return i.tag===5||i.tag===3||i.tag===4}function kv(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||xv(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Pf(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=qu));else if(d!==4&&(i=i.child,i!==null))for(Pf(i,s,l),i=i.sibling;i!==null;)Pf(i,s,l),i=i.sibling}function xf(i,s,l){var d=i.tag;if(d===5||d===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(d!==4&&(i=i.child,i!==null))for(xf(i,s,l),i=i.sibling;i!==null;)xf(i,s,l),i=i.sibling}var Bt=null,or=!1;function Si(i,s,l){for(l=l.child;l!==null;)Dv(i,s,l),l=l.sibling}function Dv(i,s,l){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(ds,l)}catch{}switch(l.tag){case 5:Yt||Vo(l,s);case 6:var d=Bt,p=or;Bt=null,Si(i,s,l),Bt=d,or=p,Bt!==null&&(or?(i=Bt,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Bt.removeChild(l.stateNode));break;case 18:Bt!==null&&(or?(i=Bt,l=l.stateNode,i.nodeType===8?$h(i.parentNode,l):i.nodeType===1&&$h(i,l),tr(i)):$h(Bt,l.stateNode));break;case 4:d=Bt,p=or,Bt=l.stateNode.containerInfo,or=!0,Si(i,s,l),Bt=d,or=p;break;case 0:case 11:case 14:case 15:if(!Yt&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){p=d=d.next;do{var y=p,I=y.destroy;y=y.tag,I!==void 0&&((y&2)!==0||(y&4)!==0)&&Cf(l,s,I),p=p.next}while(p!==d)}Si(i,s,l);break;case 1:if(!Yt&&(Vo(l,s),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(R){ht(l,s,R)}Si(i,s,l);break;case 21:Si(i,s,l);break;case 22:l.mode&1?(Yt=(d=Yt)||l.memoizedState!==null,Si(i,s,l),Yt=d):Si(i,s,l);break;default:Si(i,s,l)}}function Nv(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new DA),s.forEach(function(d){var p=$A.bind(null,i,d);l.has(d)||(l.add(d),d.then(p,p))})}}function ar(i,s){var l=s.deletions;if(l!==null)for(var d=0;d<l.length;d++){var p=l[d];try{var y=i,I=s,R=I;e:for(;R!==null;){switch(R.tag){case 5:Bt=R.stateNode,or=!1;break e;case 3:Bt=R.stateNode.containerInfo,or=!0;break e;case 4:Bt=R.stateNode.containerInfo,or=!0;break e}R=R.return}if(Bt===null)throw Error(n(160));Dv(y,I,p),Bt=null,or=!1;var O=p.alternate;O!==null&&(O.return=null),p.return=null}catch(W){ht(p,s,W)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ov(s,i),s=s.sibling}function Ov(i,s){var l=i.alternate,d=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(ar(s,i),Sr(i),d&4){try{ml(3,i,i.return),gc(3,i)}catch(ge){ht(i,i.return,ge)}try{ml(5,i,i.return)}catch(ge){ht(i,i.return,ge)}}break;case 1:ar(s,i),Sr(i),d&512&&l!==null&&Vo(l,l.return);break;case 5:if(ar(s,i),Sr(i),d&512&&l!==null&&Vo(l,l.return),i.flags&32){var p=i.stateNode;try{ai(p,"")}catch(ge){ht(i,i.return,ge)}}if(d&4&&(p=i.stateNode,p!=null)){var y=i.memoizedProps,I=l!==null?l.memoizedProps:y,R=i.type,O=i.updateQueue;if(i.updateQueue=null,O!==null)try{R==="input"&&y.type==="radio"&&y.name!=null&&ba(p,y),La(R,I);var W=La(R,y);for(I=0;I<O.length;I+=2){var ne=O[I],re=O[I+1];ne==="style"?Da(p,re):ne==="dangerouslySetInnerHTML"?xa(p,re):ne==="children"?ai(p,re):G(p,ne,re,W)}switch(R){case"input":Ca(p,y);break;case"textarea":Js(p,y);break;case"select":var ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var ce=y.value;ce!=null?Or(p,!!y.multiple,ce,!1):ee!==!!y.multiple&&(y.defaultValue!=null?Or(p,!!y.multiple,y.defaultValue,!0):Or(p,!!y.multiple,y.multiple?[]:"",!1))}p[il]=y}catch(ge){ht(i,i.return,ge)}}break;case 6:if(ar(s,i),Sr(i),d&4){if(i.stateNode===null)throw Error(n(162));p=i.stateNode,y=i.memoizedProps;try{p.nodeValue=y}catch(ge){ht(i,i.return,ge)}}break;case 3:if(ar(s,i),Sr(i),d&4&&l!==null&&l.memoizedState.isDehydrated)try{tr(s.containerInfo)}catch(ge){ht(i,i.return,ge)}break;case 4:ar(s,i),Sr(i);break;case 13:ar(s,i),Sr(i),p=i.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(Nf=nt())),d&4&&Nv(i);break;case 22:if(ne=l!==null&&l.memoizedState!==null,i.mode&1?(Yt=(W=Yt)||ne,ar(s,i),Yt=W):ar(s,i),Sr(i),d&8192){if(W=i.memoizedState!==null,(i.stateNode.isHidden=W)&&!ne&&(i.mode&1)!==0)for(fe=i,ne=i.child;ne!==null;){for(re=fe=ne;fe!==null;){switch(ee=fe,ce=ee.child,ee.tag){case 0:case 11:case 14:case 15:ml(4,ee,ee.return);break;case 1:Vo(ee,ee.return);var me=ee.stateNode;if(typeof me.componentWillUnmount=="function"){d=ee,l=ee.return;try{s=d,me.props=s.memoizedProps,me.state=s.memoizedState,me.componentWillUnmount()}catch(ge){ht(d,l,ge)}}break;case 5:Vo(ee,ee.return);break;case 22:if(ee.memoizedState!==null){Vv(re);continue}}ce!==null?(ce.return=ee,fe=ce):Vv(re)}ne=ne.sibling}e:for(ne=null,re=i;;){if(re.tag===5){if(ne===null){ne=re;try{p=re.stateNode,W?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(R=re.stateNode,O=re.memoizedProps.style,I=O!=null&&O.hasOwnProperty("display")?O.display:null,R.style.display=ka("display",I))}catch(ge){ht(i,i.return,ge)}}}else if(re.tag===6){if(ne===null)try{re.stateNode.nodeValue=W?"":re.memoizedProps}catch(ge){ht(i,i.return,ge)}}else if((re.tag!==22&&re.tag!==23||re.memoizedState===null||re===i)&&re.child!==null){re.child.return=re,re=re.child;continue}if(re===i)break e;for(;re.sibling===null;){if(re.return===null||re.return===i)break e;ne===re&&(ne=null),re=re.return}ne===re&&(ne=null),re.sibling.return=re.return,re=re.sibling}}break;case 19:ar(s,i),Sr(i),d&4&&Nv(i);break;case 21:break;default:ar(s,i),Sr(i)}}function Sr(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(xv(l)){var d=l;break e}l=l.return}throw Error(n(160))}switch(d.tag){case 5:var p=d.stateNode;d.flags&32&&(ai(p,""),d.flags&=-33);var y=kv(i);xf(i,y,p);break;case 3:case 4:var I=d.stateNode.containerInfo,R=kv(i);Pf(i,R,I);break;default:throw Error(n(161))}}catch(O){ht(i,i.return,O)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function OA(i,s,l){fe=i,Lv(i)}function Lv(i,s,l){for(var d=(i.mode&1)!==0;fe!==null;){var p=fe,y=p.child;if(p.tag===22&&d){var I=p.memoizedState!==null||mc;if(!I){var R=p.alternate,O=R!==null&&R.memoizedState!==null||Yt;R=mc;var W=Yt;if(mc=I,(Yt=O)&&!W)for(fe=p;fe!==null;)I=fe,O=I.child,I.tag===22&&I.memoizedState!==null?Fv(p):O!==null?(O.return=I,fe=O):Fv(p);for(;y!==null;)fe=y,Lv(y),y=y.sibling;fe=p,mc=R,Yt=W}Mv(i)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,fe=y):Mv(i)}}function Mv(i){for(;fe!==null;){var s=fe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Yt||gc(5,s);break;case 1:var d=s.stateNode;if(s.flags&4&&!Yt)if(l===null)d.componentDidMount();else{var p=s.elementType===s.type?l.memoizedProps:sr(s.type,l.memoizedProps);d.componentDidUpdate(p,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var y=s.updateQueue;y!==null&&Vy(s,y,d);break;case 3:var I=s.updateQueue;if(I!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Vy(s,I,l)}break;case 5:var R=s.stateNode;if(l===null&&s.flags&4){l=R;var O=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&l.focus();break;case"img":O.src&&(l.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var W=s.alternate;if(W!==null){var ne=W.memoizedState;if(ne!==null){var re=ne.dehydrated;re!==null&&tr(re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Yt||s.flags&512&&Rf(s)}catch(ee){ht(s,s.return,ee)}}if(s===i){fe=null;break}if(l=s.sibling,l!==null){l.return=s.return,fe=l;break}fe=s.return}}function Vv(i){for(;fe!==null;){var s=fe;if(s===i){fe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,fe=l;break}fe=s.return}}function Fv(i){for(;fe!==null;){var s=fe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{gc(4,s)}catch(O){ht(s,l,O)}break;case 1:var d=s.stateNode;if(typeof d.componentDidMount=="function"){var p=s.return;try{d.componentDidMount()}catch(O){ht(s,p,O)}}var y=s.return;try{Rf(s)}catch(O){ht(s,y,O)}break;case 5:var I=s.return;try{Rf(s)}catch(O){ht(s,I,O)}}}catch(O){ht(s,s.return,O)}if(s===i){fe=null;break}var R=s.sibling;if(R!==null){R.return=s.return,fe=R;break}fe=s.return}}var LA=Math.ceil,yc=z.ReactCurrentDispatcher,kf=z.ReactCurrentOwner,jn=z.ReactCurrentBatchConfig,We=0,Dt=null,_t=null,$t=0,bn=0,Fo=_i(0),bt=0,gl=null,As=0,vc=0,Df=0,yl=null,gn=null,Nf=0,Uo=1/0,Qr=null,_c=!1,Of=null,Ai=null,wc=!1,bi=null,Ec=0,vl=0,Lf=null,Ic=-1,Tc=0;function an(){return(We&6)!==0?nt():Ic!==-1?Ic:Ic=nt()}function Ci(i){return(i.mode&1)===0?1:(We&2)!==0&&$t!==0?$t&-$t:vA.transition!==null?(Tc===0&&(Tc=fs()),Tc):(i=je,i!==0||(i=window.event,i=i===void 0?16:Ha(i.type)),i)}function lr(i,s,l,d){if(50<vl)throw vl=0,Lf=null,Error(n(185));di(i,l,d),((We&2)===0||i!==Dt)&&(i===Dt&&((We&2)===0&&(vc|=l),bt===4&&Ri(i,$t)),yn(i,d),l===1&&We===0&&(s.mode&1)===0&&(Uo=nt()+500,Xu&&Ei()))}function yn(i,s){var l=i.callbackNode;Vr(i,s);var d=hs(i,i===Dt?$t:0);if(d===0)l!==null&&Ba(l),i.callbackNode=null,i.callbackPriority=0;else if(s=d&-d,i.callbackPriority!==s){if(l!=null&&Ba(l),s===1)i.tag===0?yA(jv.bind(null,i)):Ay(jv.bind(null,i)),fA(function(){(We&6)===0&&Ei()}),l=null;else{switch(fi(d)){case 1:l=cs;break;case 4:l=li;break;case 16:l=Nn;break;case 536870912:l=Tu;break;default:l=Nn}l=Kv(l,Uv.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function Uv(i,s){if(Ic=-1,Tc=0,(We&6)!==0)throw Error(n(327));var l=i.callbackNode;if(jo()&&i.callbackNode!==l)return null;var d=hs(i,i===Dt?$t:0);if(d===0)return null;if((d&30)!==0||(d&i.expiredLanes)!==0||s)s=Sc(i,d);else{s=d;var p=We;We|=2;var y=$v();(Dt!==i||$t!==s)&&(Qr=null,Uo=nt()+500,Cs(i,s));do try{FA();break}catch(R){Bv(i,R)}while(!0);Jh(),yc.current=y,We=p,_t!==null?s=0:(Dt=null,$t=0,s=bt)}if(s!==0){if(s===2&&(p=En(i),p!==0&&(d=p,s=Mf(i,p))),s===1)throw l=gl,Cs(i,0),Ri(i,d),yn(i,nt()),l;if(s===6)Ri(i,d);else{if(p=i.current.alternate,(d&30)===0&&!MA(p)&&(s=Sc(i,d),s===2&&(y=En(i),y!==0&&(d=y,s=Mf(i,y))),s===1))throw l=gl,Cs(i,0),Ri(i,d),yn(i,nt()),l;switch(i.finishedWork=p,i.finishedLanes=d,s){case 0:case 1:throw Error(n(345));case 2:Rs(i,gn,Qr);break;case 3:if(Ri(i,d),(d&130023424)===d&&(s=Nf+500-nt(),10<s)){if(hs(i,0)!==0)break;if(p=i.suspendedLanes,(p&d)!==d){an(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Bh(Rs.bind(null,i,gn,Qr),s);break}Rs(i,gn,Qr);break;case 4:if(Ri(i,d),(d&4194240)===d)break;for(s=i.eventTimes,p=-1;0<d;){var I=31-rn(d);y=1<<I,I=s[I],I>p&&(p=I),d&=~y}if(d=p,d=nt()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*LA(d/1960))-d,10<d){i.timeoutHandle=Bh(Rs.bind(null,i,gn,Qr),d);break}Rs(i,gn,Qr);break;case 5:Rs(i,gn,Qr);break;default:throw Error(n(329))}}}return yn(i,nt()),i.callbackNode===l?Uv.bind(null,i):null}function Mf(i,s){var l=yl;return i.current.memoizedState.isDehydrated&&(Cs(i,s).flags|=256),i=Sc(i,s),i!==2&&(s=gn,gn=l,s!==null&&Vf(s)),i}function Vf(i){gn===null?gn=i:gn.push.apply(gn,i)}function MA(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var p=l[d],y=p.getSnapshot;p=p.value;try{if(!rr(y(),p))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ri(i,s){for(s&=~Df,s&=~vc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-rn(s),d=1<<l;i[l]=-1,s&=~d}}function jv(i){if((We&6)!==0)throw Error(n(327));jo();var s=hs(i,0);if((s&1)===0)return yn(i,nt()),null;var l=Sc(i,s);if(i.tag!==0&&l===2){var d=En(i);d!==0&&(s=d,l=Mf(i,d))}if(l===1)throw l=gl,Cs(i,0),Ri(i,s),yn(i,nt()),l;if(l===6)throw Error(n(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Rs(i,gn,Qr),yn(i,nt()),null}function Ff(i,s){var l=We;We|=1;try{return i(s)}finally{We=l,We===0&&(Uo=nt()+500,Xu&&Ei())}}function bs(i){bi!==null&&bi.tag===0&&(We&6)===0&&jo();var s=We;We|=1;var l=jn.transition,d=je;try{if(jn.transition=null,je=1,i)return i()}finally{je=d,jn.transition=l,We=s,(We&6)===0&&Ei()}}function Uf(){bn=Fo.current,st(Fo)}function Cs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,hA(l)),_t!==null)for(l=_t.return;l!==null;){var d=l;switch(qh(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&Qu();break;case 3:Lo(),st(fn),st(qt),af();break;case 5:sf(d);break;case 4:Lo();break;case 13:st(ut);break;case 19:st(ut);break;case 10:Zh(d.type._context);break;case 22:case 23:Uf()}l=l.return}if(Dt=i,_t=i=Pi(i.current,null),$t=bn=s,bt=0,gl=null,Df=vc=As=0,gn=yl=null,Is!==null){for(s=0;s<Is.length;s++)if(l=Is[s],d=l.interleaved,d!==null){l.interleaved=null;var p=d.next,y=l.pending;if(y!==null){var I=y.next;y.next=p,d.next=I}l.pending=d}Is=null}return i}function Bv(i,s){do{var l=_t;try{if(Jh(),ac.current=dc,lc){for(var d=ct.memoizedState;d!==null;){var p=d.queue;p!==null&&(p.pending=null),d=d.next}lc=!1}if(Ss=0,kt=At=ct=null,cl=!1,dl=0,kf.current=null,l===null||l.return===null){bt=1,gl=s,_t=null;break}e:{var y=i,I=l.return,R=l,O=s;if(s=$t,R.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var W=O,ne=R,re=ne.tag;if((ne.mode&1)===0&&(re===0||re===11||re===15)){var ee=ne.alternate;ee?(ne.updateQueue=ee.updateQueue,ne.memoizedState=ee.memoizedState,ne.lanes=ee.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var ce=hv(I);if(ce!==null){ce.flags&=-257,fv(ce,I,R,y,s),ce.mode&1&&dv(y,W,s),s=ce,O=W;var me=s.updateQueue;if(me===null){var ge=new Set;ge.add(O),s.updateQueue=ge}else me.add(O);break e}else{if((s&1)===0){dv(y,W,s),jf();break e}O=Error(n(426))}}else if(lt&&R.mode&1){var gt=hv(I);if(gt!==null){(gt.flags&65536)===0&&(gt.flags|=256),fv(gt,I,R,y,s),Yh(Mo(O,R));break e}}y=O=Mo(O,R),bt!==4&&(bt=2),yl===null?yl=[y]:yl.push(y),y=I;do{switch(y.tag){case 3:y.flags|=65536,s&=-s,y.lanes|=s;var B=uv(y,O,s);My(y,B);break e;case 1:R=O;var M=y.type,$=y.stateNode;if((y.flags&128)===0&&(typeof M.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Ai===null||!Ai.has($)))){y.flags|=65536,s&=-s,y.lanes|=s;var se=cv(y,R,s);My(y,se);break e}}y=y.return}while(y!==null)}Wv(l)}catch(ye){s=ye,_t===l&&l!==null&&(_t=l=l.return);continue}break}while(!0)}function $v(){var i=yc.current;return yc.current=dc,i===null?dc:i}function jf(){(bt===0||bt===3||bt===2)&&(bt=4),Dt===null||(As&268435455)===0&&(vc&268435455)===0||Ri(Dt,$t)}function Sc(i,s){var l=We;We|=2;var d=$v();(Dt!==i||$t!==s)&&(Qr=null,Cs(i,s));do try{VA();break}catch(p){Bv(i,p)}while(!0);if(Jh(),We=l,yc.current=d,_t!==null)throw Error(n(261));return Dt=null,$t=0,bt}function VA(){for(;_t!==null;)zv(_t)}function FA(){for(;_t!==null&&!Eu();)zv(_t)}function zv(i){var s=qv(i.alternate,i,bn);i.memoizedProps=i.pendingProps,s===null?Wv(i):_t=s,kf.current=null}function Wv(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=xA(l,s,bn),l!==null){_t=l;return}}else{if(l=kA(l,s),l!==null){l.flags&=32767,_t=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{bt=6,_t=null;return}}if(s=s.sibling,s!==null){_t=s;return}_t=s=i}while(s!==null);bt===0&&(bt=5)}function Rs(i,s,l){var d=je,p=jn.transition;try{jn.transition=null,je=1,UA(i,s,l,d)}finally{jn.transition=p,je=d}return null}function UA(i,s,l,d){do jo();while(bi!==null);if((We&6)!==0)throw Error(n(327));l=i.finishedWork;var p=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(n(177));i.callbackNode=null,i.callbackPriority=0;var y=l.lanes|l.childLanes;if(et(i,y),i===Dt&&(_t=Dt=null,$t=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||wc||(wc=!0,Kv(Nn,function(){return jo(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=jn.transition,jn.transition=null;var I=je;je=1;var R=We;We|=4,kf.current=null,NA(i,l),Ov(l,i),sA(Uh),mi=!!Fh,Uh=Fh=null,i.current=l,OA(l),Ih(),We=R,je=I,jn.transition=y}else i.current=l;if(wc&&(wc=!1,bi=i,Ec=p),y=i.pendingLanes,y===0&&(Ai=null),Su(l.stateNode),yn(i,nt()),s!==null)for(d=i.onRecoverableError,l=0;l<s.length;l++)p=s[l],d(p.value,{componentStack:p.stack,digest:p.digest});if(_c)throw _c=!1,i=Of,Of=null,i;return(Ec&1)!==0&&i.tag!==0&&jo(),y=i.pendingLanes,(y&1)!==0?i===Lf?vl++:(vl=0,Lf=i):vl=0,Ei(),null}function jo(){if(bi!==null){var i=fi(Ec),s=jn.transition,l=je;try{if(jn.transition=null,je=16>i?16:i,bi===null)var d=!1;else{if(i=bi,bi=null,Ec=0,(We&6)!==0)throw Error(n(331));var p=We;for(We|=4,fe=i.current;fe!==null;){var y=fe,I=y.child;if((fe.flags&16)!==0){var R=y.deletions;if(R!==null){for(var O=0;O<R.length;O++){var W=R[O];for(fe=W;fe!==null;){var ne=fe;switch(ne.tag){case 0:case 11:case 15:ml(8,ne,y)}var re=ne.child;if(re!==null)re.return=ne,fe=re;else for(;fe!==null;){ne=fe;var ee=ne.sibling,ce=ne.return;if(Pv(ne),ne===W){fe=null;break}if(ee!==null){ee.return=ce,fe=ee;break}fe=ce}}}var me=y.alternate;if(me!==null){var ge=me.child;if(ge!==null){me.child=null;do{var gt=ge.sibling;ge.sibling=null,ge=gt}while(ge!==null)}}fe=y}}if((y.subtreeFlags&2064)!==0&&I!==null)I.return=y,fe=I;else e:for(;fe!==null;){if(y=fe,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:ml(9,y,y.return)}var B=y.sibling;if(B!==null){B.return=y.return,fe=B;break e}fe=y.return}}var M=i.current;for(fe=M;fe!==null;){I=fe;var $=I.child;if((I.subtreeFlags&2064)!==0&&$!==null)$.return=I,fe=$;else e:for(I=M;fe!==null;){if(R=fe,(R.flags&2048)!==0)try{switch(R.tag){case 0:case 11:case 15:gc(9,R)}}catch(ye){ht(R,R.return,ye)}if(R===I){fe=null;break e}var se=R.sibling;if(se!==null){se.return=R.return,fe=se;break e}fe=R.return}}if(We=p,Ei(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(ds,i)}catch{}d=!0}return d}finally{je=l,jn.transition=s}}return!1}function Gv(i,s,l){s=Mo(l,s),s=uv(i,s,1),i=Ti(i,s,1),s=an(),i!==null&&(di(i,1,s),yn(i,s))}function ht(i,s,l){if(i.tag===3)Gv(i,i,l);else for(;s!==null;){if(s.tag===3){Gv(s,i,l);break}else if(s.tag===1){var d=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Ai===null||!Ai.has(d))){i=Mo(l,i),i=cv(s,i,1),s=Ti(s,i,1),i=an(),s!==null&&(di(s,1,i),yn(s,i));break}}s=s.return}}function jA(i,s,l){var d=i.pingCache;d!==null&&d.delete(s),s=an(),i.pingedLanes|=i.suspendedLanes&l,Dt===i&&($t&l)===l&&(bt===4||bt===3&&($t&130023424)===$t&&500>nt()-Nf?Cs(i,0):Df|=l),yn(i,s)}function Hv(i,s){s===0&&((i.mode&1)===0?s=1:(s=lo,lo<<=1,(lo&130023424)===0&&(lo=4194304)));var l=an();i=Hr(i,s),i!==null&&(di(i,s,l),yn(i,l))}function BA(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),Hv(i,l)}function $A(i,s){var l=0;switch(i.tag){case 13:var d=i.stateNode,p=i.memoizedState;p!==null&&(l=p.retryLane);break;case 19:d=i.stateNode;break;default:throw Error(n(314))}d!==null&&d.delete(s),Hv(i,l)}var qv;qv=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||fn.current)mn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return mn=!1,PA(i,s,l);mn=(i.flags&131072)!==0}else mn=!1,lt&&(s.flags&1048576)!==0&&by(s,Zu,s.index);switch(s.lanes=0,s.tag){case 2:var d=s.type;pc(i,s),i=s.pendingProps;var p=Ro(s,qt.current);Oo(s,l),p=cf(null,s,d,i,p,l);var y=df();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,pn(d)?(y=!0,Yu(s)):y=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,nf(s),p.updater=hc,s.stateNode=p,p._reactInternals=s,yf(s,d,i,l),s=Ef(null,s,d,!0,y,l)):(s.tag=0,lt&&y&&Hh(s),on(null,s,p,l),s=s.child),s;case 16:d=s.elementType;e:{switch(pc(i,s),i=s.pendingProps,p=d._init,d=p(d._payload),s.type=d,p=s.tag=WA(d),i=sr(d,i),p){case 0:s=wf(null,s,d,i,l);break e;case 1:s=_v(null,s,d,i,l);break e;case 11:s=pv(null,s,d,i,l);break e;case 14:s=mv(null,s,d,sr(d.type,i),l);break e}throw Error(n(306,d,""))}return s;case 0:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:sr(d,p),wf(i,s,d,p,l);case 1:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:sr(d,p),_v(i,s,d,p,l);case 3:e:{if(wv(s),i===null)throw Error(n(387));d=s.pendingProps,y=s.memoizedState,p=y.element,Ly(i,s),sc(s,d,null,l);var I=s.memoizedState;if(d=I.element,y.isDehydrated)if(y={element:d,isDehydrated:!1,cache:I.cache,pendingSuspenseBoundaries:I.pendingSuspenseBoundaries,transitions:I.transitions},s.updateQueue.baseState=y,s.memoizedState=y,s.flags&256){p=Mo(Error(n(423)),s),s=Ev(i,s,d,l,p);break e}else if(d!==p){p=Mo(Error(n(424)),s),s=Ev(i,s,d,l,p);break e}else for(An=vi(s.stateNode.containerInfo.firstChild),Sn=s,lt=!0,ir=null,l=Ny(s,null,d,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ko(),d===p){s=Kr(i,s,l);break e}on(i,s,d,l)}s=s.child}return s;case 5:return Fy(s),i===null&&Qh(s),d=s.type,p=s.pendingProps,y=i!==null?i.memoizedProps:null,I=p.children,jh(d,p)?I=null:y!==null&&jh(d,y)&&(s.flags|=32),vv(i,s),on(i,s,I,l),s.child;case 6:return i===null&&Qh(s),null;case 13:return Iv(i,s,l);case 4:return rf(s,s.stateNode.containerInfo),d=s.pendingProps,i===null?s.child=Do(s,null,d,l):on(i,s,d,l),s.child;case 11:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:sr(d,p),pv(i,s,d,p,l);case 7:return on(i,s,s.pendingProps,l),s.child;case 8:return on(i,s,s.pendingProps.children,l),s.child;case 12:return on(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(d=s.type._context,p=s.pendingProps,y=s.memoizedProps,I=p.value,rt(nc,d._currentValue),d._currentValue=I,y!==null)if(rr(y.value,I)){if(y.children===p.children&&!fn.current){s=Kr(i,s,l);break e}}else for(y=s.child,y!==null&&(y.return=s);y!==null;){var R=y.dependencies;if(R!==null){I=y.child;for(var O=R.firstContext;O!==null;){if(O.context===d){if(y.tag===1){O=qr(-1,l&-l),O.tag=2;var W=y.updateQueue;if(W!==null){W=W.shared;var ne=W.pending;ne===null?O.next=O:(O.next=ne.next,ne.next=O),W.pending=O}}y.lanes|=l,O=y.alternate,O!==null&&(O.lanes|=l),ef(y.return,l,s),R.lanes|=l;break}O=O.next}}else if(y.tag===10)I=y.type===s.type?null:y.child;else if(y.tag===18){if(I=y.return,I===null)throw Error(n(341));I.lanes|=l,R=I.alternate,R!==null&&(R.lanes|=l),ef(I,l,s),I=y.sibling}else I=y.child;if(I!==null)I.return=y;else for(I=y;I!==null;){if(I===s){I=null;break}if(y=I.sibling,y!==null){y.return=I.return,I=y;break}I=I.return}y=I}on(i,s,p.children,l),s=s.child}return s;case 9:return p=s.type,d=s.pendingProps.children,Oo(s,l),p=Fn(p),d=d(p),s.flags|=1,on(i,s,d,l),s.child;case 14:return d=s.type,p=sr(d,s.pendingProps),p=sr(d.type,p),mv(i,s,d,p,l);case 15:return gv(i,s,s.type,s.pendingProps,l);case 17:return d=s.type,p=s.pendingProps,p=s.elementType===d?p:sr(d,p),pc(i,s),s.tag=1,pn(d)?(i=!0,Yu(s)):i=!1,Oo(s,l),av(s,d,p),yf(s,d,p,l),Ef(null,s,d,!0,i,l);case 19:return Sv(i,s,l);case 22:return yv(i,s,l)}throw Error(n(156,s.tag))};function Kv(i,s){return oo(i,s)}function zA(i,s,l,d){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(i,s,l,d){return new zA(i,s,l,d)}function Bf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function WA(i){if(typeof i=="function")return Bf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===V)return 11;if(i===Ye)return 14}return 2}function Pi(i,s){var l=i.alternate;return l===null?(l=Bn(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function Ac(i,s,l,d,p,y){var I=2;if(d=i,typeof i=="function")Bf(i)&&(I=1);else if(typeof i=="string")I=5;else e:switch(i){case b:return Ps(l.children,p,y,s);case A:I=8,p|=8;break;case C:return i=Bn(12,l,s,p|2),i.elementType=C,i.lanes=y,i;case P:return i=Bn(13,l,s,p),i.elementType=P,i.lanes=y,i;case Ze:return i=Bn(19,l,s,p),i.elementType=Ze,i.lanes=y,i;case Ve:return bc(l,p,y,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case k:I=10;break e;case N:I=9;break e;case V:I=11;break e;case Ye:I=14;break e;case pt:I=16,d=null;break e}throw Error(n(130,i==null?i:typeof i,""))}return s=Bn(I,l,s,p),s.elementType=i,s.type=d,s.lanes=y,s}function Ps(i,s,l,d){return i=Bn(7,i,d,s),i.lanes=l,i}function bc(i,s,l,d){return i=Bn(22,i,d,s),i.elementType=Ve,i.lanes=l,i.stateNode={isHidden:!1},i}function $f(i,s,l){return i=Bn(6,i,null,s),i.lanes=l,i}function zf(i,s,l){return s=Bn(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function GA(i,s,l,d,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ci(0),this.expirationTimes=ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ci(0),this.identifierPrefix=d,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Wf(i,s,l,d,p,y,I,R,O){return i=new GA(i,s,l,R,O),s===1?(s=1,y===!0&&(s|=8)):s=0,y=Bn(3,null,null,s),i.current=y,y.stateNode=i,y.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},nf(y),i}function HA(i,s,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Q,key:d==null?null:""+d,children:i,containerInfo:s,implementation:l}}function Qv(i){if(!i)return wi;i=i._reactInternals;e:{if(Yn(i)!==i||i.tag!==1)throw Error(n(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(pn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(i.tag===1){var l=i.type;if(pn(l))return Ty(i,l,s)}return s}function Yv(i,s,l,d,p,y,I,R,O){return i=Wf(l,d,!0,i,p,y,I,R,O),i.context=Qv(null),l=i.current,d=an(),p=Ci(l),y=qr(d,p),y.callback=s??null,Ti(l,y,p),i.current.lanes=p,di(i,p,d),yn(i,d),i}function Cc(i,s,l,d){var p=s.current,y=an(),I=Ci(p);return l=Qv(l),s.context===null?s.context=l:s.pendingContext=l,s=qr(y,I),s.payload={element:i},d=d===void 0?null:d,d!==null&&(s.callback=d),i=Ti(p,s,I),i!==null&&(lr(i,p,I,y),ic(i,p,I)),I}function Rc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Xv(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Gf(i,s){Xv(i,s),(i=i.alternate)&&Xv(i,s)}function qA(){return null}var Jv=typeof reportError=="function"?reportError:function(i){console.error(i)};function Hf(i){this._internalRoot=i}Pc.prototype.render=Hf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(n(409));Cc(i,s,null,null)},Pc.prototype.unmount=Hf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;bs(function(){Cc(null,i,null,null)}),s[$r]=null}};function Pc(i){this._internalRoot=i}Pc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Pu();i={blockedOn:null,target:i,priority:s};for(var l=0;l<yr.length&&s!==0&&s<yr[l].priority;l++);yr.splice(l,0,i),l===0&&Du(i)}};function qf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function xc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Zv(){}function KA(i,s,l,d,p){if(p){if(typeof d=="function"){var y=d;d=function(){var W=Rc(I);y.call(W)}}var I=Yv(s,d,i,0,null,!1,!1,"",Zv);return i._reactRootContainer=I,i[$r]=I.current,nl(i.nodeType===8?i.parentNode:i),bs(),I}for(;p=i.lastChild;)i.removeChild(p);if(typeof d=="function"){var R=d;d=function(){var W=Rc(O);R.call(W)}}var O=Wf(i,0,!1,null,null,!1,!1,"",Zv);return i._reactRootContainer=O,i[$r]=O.current,nl(i.nodeType===8?i.parentNode:i),bs(function(){Cc(s,O,l,d)}),O}function kc(i,s,l,d,p){var y=l._reactRootContainer;if(y){var I=y;if(typeof p=="function"){var R=p;p=function(){var O=Rc(I);R.call(O)}}Cc(s,I,i,p)}else I=KA(l,s,i,p,d);return Rc(I)}Cu=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=ui(s.pendingLanes);l!==0&&(hi(s,l|1),yn(s,nt()),(We&6)===0&&(Uo=nt()+500,Ei()))}break;case 13:bs(function(){var d=Hr(i,1);if(d!==null){var p=an();lr(d,i,1,p)}}),Gf(i,1)}},uo=function(i){if(i.tag===13){var s=Hr(i,134217728);if(s!==null){var l=an();lr(s,i,134217728,l)}Gf(i,134217728)}},Ru=function(i){if(i.tag===13){var s=Ci(i),l=Hr(i,s);if(l!==null){var d=an();lr(l,i,s,d)}Gf(i,s)}},Pu=function(){return je},xu=function(i,s){var l=je;try{return je=i,s()}finally{je=l}},eo=function(i,s,l){switch(s){case"input":if(Ca(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var d=l[s];if(d!==i&&d.form===i.form){var p=Ku(d);if(!p)throw Error(n(90));Je(d),Ca(d,p)}}}break;case"textarea":Js(i,l);break;case"select":s=l.value,s!=null&&Or(i,!!l.multiple,s,!1)}},os=Ff,Va=bs;var QA={usingClientEntryPoint:!1,Events:[sl,bo,Ku,mr,Ma,Ff]},_l={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},YA={bundleType:_l.bundleType,version:_l.version,rendererPackageName:_l.rendererPackageName,rendererConfig:_l.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ja(i),i===null?null:i.stateNode},findFiberByHostInstance:_l.findFiberByHostInstance||qA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{ds=Dc.inject(YA),wn=Dc}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QA,vn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qf(s))throw Error(n(200));return HA(i,s,null,l)},vn.createRoot=function(i,s){if(!qf(i))throw Error(n(299));var l=!1,d="",p=Jv;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(d=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Wf(i,1,!1,null,null,l,!1,d,p),i[$r]=s.current,nl(i.nodeType===8?i.parentNode:i),new Hf(s)},vn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(n(188)):(i=Object.keys(i).join(","),Error(n(268,i)));return i=ja(s),i=i===null?null:i.stateNode,i},vn.flushSync=function(i){return bs(i)},vn.hydrate=function(i,s,l){if(!xc(s))throw Error(n(200));return kc(null,i,s,!0,l)},vn.hydrateRoot=function(i,s,l){if(!qf(i))throw Error(n(405));var d=l!=null&&l.hydratedSources||null,p=!1,y="",I=Jv;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(I=l.onRecoverableError)),s=Yv(s,null,i,1,l??null,p,!1,y,I),i[$r]=s.current,nl(i),d)for(i=0;i<d.length;i++)l=d[i],p=l._getVersion,p=p(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,p]:s.mutableSourceEagerHydrationData.push(l,p);return new Pc(s)},vn.render=function(i,s,l){if(!xc(s))throw Error(n(200));return kc(null,i,s,!1,l)},vn.unmountComponentAtNode=function(i){if(!xc(i))throw Error(n(40));return i._reactRootContainer?(bs(function(){kc(null,null,i,!1,function(){i._reactRootContainer=null,i[$r]=null})}),!0):!1},vn.unstable_batchedUpdates=Ff,vn.unstable_renderSubtreeIntoContainer=function(i,s,l,d){if(!xc(l))throw Error(n(200));if(i==null||i._reactInternals===void 0)throw Error(n(38));return kc(i,s,l,!1,d)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var a_;function W0(){if(a_)return Yf.exports;a_=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Yf.exports=rb(),Yf.exports}var l_;function ib(){if(l_)return Nc;l_=1;var t=W0();return Nc.createRoot=t.createRoot,Nc.hydrateRoot=t.hydrateRoot,Nc}var sb=ib(),Mt=function(){return Mt=Object.assign||function(e){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Mt.apply(this,arguments)};function Sm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]]);return n}function Ul(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,a;r<o;r++)(a||!(r in e))&&(a||(a=Array.prototype.slice.call(e,0,r)),a[r]=e[r]);return t.concat(a||Array.prototype.slice.call(e))}var Z=jd();const He=Tm(Z);var ot="-ms-",kl="-moz-",qe="-webkit-",G0="comm",Bd="rule",Am="decl",ob="@import",H0="@keyframes",ab="@layer",q0=Math.abs,bm=String.fromCharCode,Lp=Object.assign;function lb(t,e){return Lt(t,0)^45?(((e<<2^Lt(t,0))<<2^Lt(t,1))<<2^Lt(t,2))<<2^Lt(t,3):0}function K0(t){return t.trim()}function Yr(t,e){return(t=e.exec(t))?t[0]:t}function ke(t,e,n){return t.replace(e,n)}function Gc(t,e,n){return t.indexOf(e,n)}function Lt(t,e){return t.charCodeAt(e)|0}function Zo(t,e,n){return t.slice(e,n)}function br(t){return t.length}function Q0(t){return t.length}function Al(t,e){return e.push(t),t}function ub(t,e){return t.map(e).join("")}function u_(t,e){return t.filter(function(n){return!Yr(n,e)})}var $d=1,ea=1,Y0=0,qn=0,Et=0,ma="";function zd(t,e,n,r,o,a,u,h){return{value:t,root:e,parent:n,type:r,props:o,children:a,line:$d,column:ea,length:u,return:"",siblings:h}}function Di(t,e){return Lp(zd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function Bo(t){for(;t.root;)t=Di(t.root,{children:[t]});Al(t,t.siblings)}function cb(){return Et}function db(){return Et=qn>0?Lt(ma,--qn):0,ea--,Et===10&&(ea=1,$d--),Et}function hr(){return Et=qn<Y0?Lt(ma,qn++):0,ea++,Et===10&&(ea=1,$d++),Et}function Ls(){return Lt(ma,qn)}function Hc(){return qn}function Wd(t,e){return Zo(ma,t,e)}function Mp(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function hb(t){return $d=ea=1,Y0=br(ma=t),qn=0,[]}function fb(t){return ma="",t}function Zf(t){return K0(Wd(qn-1,Vp(t===91?t+2:t===40?t+1:t)))}function pb(t){for(;(Et=Ls())&&Et<33;)hr();return Mp(t)>2||Mp(Et)>3?"":" "}function mb(t,e){for(;--e&&hr()&&!(Et<48||Et>102||Et>57&&Et<65||Et>70&&Et<97););return Wd(t,Hc()+(e<6&&Ls()==32&&hr()==32))}function Vp(t){for(;hr();)switch(Et){case t:return qn;case 34:case 39:t!==34&&t!==39&&Vp(Et);break;case 40:t===41&&Vp(t);break;case 92:hr();break}return qn}function gb(t,e){for(;hr()&&t+Et!==57;)if(t+Et===84&&Ls()===47)break;return"/*"+Wd(e,qn-1)+"*"+bm(t===47?t:hr())}function yb(t){for(;!Mp(Ls());)hr();return Wd(t,qn)}function vb(t){return fb(qc("",null,null,null,[""],t=hb(t),0,[0],t))}function qc(t,e,n,r,o,a,u,h,f){for(var m=0,v=0,_=u,w=0,T=0,D=0,L=1,x=1,K=1,q=0,G="",z=o,X=a,Q=r,b=G;x;)switch(D=q,q=hr()){case 40:if(D!=108&&Lt(b,_-1)==58){Gc(b+=ke(Zf(q),"&","&\f"),"&\f",q0(m?h[m-1]:0))!=-1&&(K=-1);break}case 34:case 39:case 91:b+=Zf(q);break;case 9:case 10:case 13:case 32:b+=pb(D);break;case 92:b+=mb(Hc()-1,7);continue;case 47:switch(Ls()){case 42:case 47:Al(_b(gb(hr(),Hc()),e,n,f),f);break;default:b+="/"}break;case 123*L:h[m++]=br(b)*K;case 125*L:case 59:case 0:switch(q){case 0:case 125:x=0;case 59+v:K==-1&&(b=ke(b,/\f/g,"")),T>0&&br(b)-_&&Al(T>32?d_(b+";",r,n,_-1,f):d_(ke(b," ","")+";",r,n,_-2,f),f);break;case 59:b+=";";default:if(Al(Q=c_(b,e,n,m,v,o,h,G,z=[],X=[],_,a),a),q===123)if(v===0)qc(b,e,Q,Q,z,a,_,h,X);else switch(w===99&&Lt(b,3)===110?100:w){case 100:case 108:case 109:case 115:qc(t,Q,Q,r&&Al(c_(t,Q,Q,0,0,o,h,G,o,z=[],_,X),X),o,X,_,h,r?z:X);break;default:qc(b,Q,Q,Q,[""],X,0,h,X)}}m=v=T=0,L=K=1,G=b="",_=u;break;case 58:_=1+br(b),T=D;default:if(L<1){if(q==123)--L;else if(q==125&&L++==0&&db()==125)continue}switch(b+=bm(q),q*L){case 38:K=v>0?1:(b+="\f",-1);break;case 44:h[m++]=(br(b)-1)*K,K=1;break;case 64:Ls()===45&&(b+=Zf(hr())),w=Ls(),v=_=br(G=b+=yb(Hc())),q++;break;case 45:D===45&&br(b)==2&&(L=0)}}return a}function c_(t,e,n,r,o,a,u,h,f,m,v,_){for(var w=o-1,T=o===0?a:[""],D=Q0(T),L=0,x=0,K=0;L<r;++L)for(var q=0,G=Zo(t,w+1,w=q0(x=u[L])),z=t;q<D;++q)(z=K0(x>0?T[q]+" "+G:ke(G,/&\f/g,T[q])))&&(f[K++]=z);return zd(t,e,n,o===0?Bd:h,f,m,v,_)}function _b(t,e,n,r){return zd(t,e,n,G0,bm(cb()),Zo(t,2,-2),0,r)}function d_(t,e,n,r,o){return zd(t,e,n,Am,Zo(t,0,r),Zo(t,r+1,-1),r,o)}function X0(t,e,n){switch(lb(t,e)){case 5103:return qe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return qe+t+t;case 4789:return kl+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return qe+t+kl+t+ot+t+t;case 5936:switch(Lt(t,e+11)){case 114:return qe+t+ot+ke(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return qe+t+ot+ke(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return qe+t+ot+ke(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return qe+t+ot+t+t;case 6165:return qe+t+ot+"flex-"+t+t;case 5187:return qe+t+ke(t,/(\w+).+(:[^]+)/,qe+"box-$1$2"+ot+"flex-$1$2")+t;case 5443:return qe+t+ot+"flex-item-"+ke(t,/flex-|-self/g,"")+(Yr(t,/flex-|baseline/)?"":ot+"grid-row-"+ke(t,/flex-|-self/g,""))+t;case 4675:return qe+t+ot+"flex-line-pack"+ke(t,/align-content|flex-|-self/g,"")+t;case 5548:return qe+t+ot+ke(t,"shrink","negative")+t;case 5292:return qe+t+ot+ke(t,"basis","preferred-size")+t;case 6060:return qe+"box-"+ke(t,"-grow","")+qe+t+ot+ke(t,"grow","positive")+t;case 4554:return qe+ke(t,/([^-])(transform)/g,"$1"+qe+"$2")+t;case 6187:return ke(ke(ke(t,/(zoom-|grab)/,qe+"$1"),/(image-set)/,qe+"$1"),t,"")+t;case 5495:case 3959:return ke(t,/(image-set\([^]*)/,qe+"$1$`$1");case 4968:return ke(ke(t,/(.+:)(flex-)?(.*)/,qe+"box-pack:$3"+ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+qe+t+t;case 4200:if(!Yr(t,/flex-|baseline/))return ot+"grid-column-align"+Zo(t,e)+t;break;case 2592:case 3360:return ot+ke(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,o){return e=o,Yr(r.props,/grid-\w+-end/)})?~Gc(t+(n=n[e].value),"span",0)?t:ot+ke(t,"-start","")+t+ot+"grid-row-span:"+(~Gc(n,"span",0)?Yr(n,/\d+/):+Yr(n,/\d+/)-+Yr(t,/\d+/))+";":ot+ke(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return Yr(r.props,/grid-\w+-start/)})?t:ot+ke(ke(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ke(t,/(.+)-inline(.+)/,qe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(br(t)-1-e>6)switch(Lt(t,e+1)){case 109:if(Lt(t,e+4)!==45)break;case 102:return ke(t,/(.+:)(.+)-([^]+)/,"$1"+qe+"$2-$3$1"+kl+(Lt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Gc(t,"stretch",0)?X0(ke(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ke(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,a,u,h,f,m){return ot+o+":"+a+m+(u?ot+o+"-span:"+(h?f:+f-+a)+m:"")+t});case 4949:if(Lt(t,e+6)===121)return ke(t,":",":"+qe)+t;break;case 6444:switch(Lt(t,Lt(t,14)===45?18:11)){case 120:return ke(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+qe+(Lt(t,14)===45?"inline-":"")+"box$3$1"+qe+"$2$3$1"+ot+"$2box$3")+t;case 100:return ke(t,":",":"+ot)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ke(t,"scroll-","scroll-snap-")+t}return t}function ad(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function wb(t,e,n,r){switch(t.type){case ab:if(t.children.length)break;case ob:case Am:return t.return=t.return||t.value;case G0:return"";case H0:return t.return=t.value+"{"+ad(t.children,r)+"}";case Bd:if(!br(t.value=t.props.join(",")))return""}return br(n=ad(t.children,r))?t.return=t.value+"{"+n+"}":""}function Eb(t){var e=Q0(t);return function(n,r,o,a){for(var u="",h=0;h<e;h++)u+=t[h](n,r,o,a)||"";return u}}function Ib(t){return function(e){e.root||(e=e.return)&&t(e)}}function Tb(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case Am:t.return=X0(t.value,t.length,n);return;case H0:return ad([Di(t,{value:ke(t.value,"@","@"+qe)})],r);case Bd:if(t.length)return ub(n=t.props,function(o){switch(Yr(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Bo(Di(t,{props:[ke(o,/:(read-\w+)/,":"+kl+"$1")]})),Bo(Di(t,{props:[o]})),Lp(t,{props:u_(n,r)});break;case"::placeholder":Bo(Di(t,{props:[ke(o,/:(plac\w+)/,":"+qe+"input-$1")]})),Bo(Di(t,{props:[ke(o,/:(plac\w+)/,":"+kl+"$1")]})),Bo(Di(t,{props:[ke(o,/:(plac\w+)/,ot+"input-$1")]})),Bo(Di(t,{props:[o]})),Lp(t,{props:u_(n,r)});break}return""})}}var Sb={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Cn={},ta=typeof process<"u"&&Cn!==void 0&&(Cn.REACT_APP_SC_ATTR||Cn.SC_ATTR)||"data-styled",J0="active",Z0="data-styled-version",Gd="6.1.13",Cm=`/*!sc*/
`,ld=typeof window<"u"&&"HTMLElement"in window,Ab=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Cn.REACT_APP_SC_DISABLE_SPEEDY!==""?Cn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Cn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Cn!==void 0&&Cn.SC_DISABLE_SPEEDY!==void 0&&Cn.SC_DISABLE_SPEEDY!==""&&Cn.SC_DISABLE_SPEEDY!=="false"&&Cn.SC_DISABLE_SPEEDY),bb={},Hd=Object.freeze([]),na=Object.freeze({});function eE(t,e,n){return n===void 0&&(n=na),t.theme!==n.theme&&t.theme||e||n.theme}var tE=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cb=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Rb=/(^-|-$)/g;function h_(t){return t.replace(Cb,"-").replace(Rb,"")}var Pb=/(a)(d)/gi,Oc=52,f_=function(t){return String.fromCharCode(t+(t>25?39:97))};function Fp(t){var e,n="";for(e=Math.abs(t);e>Oc;e=e/Oc|0)n=f_(e%Oc)+n;return(f_(e%Oc)+n).replace(Pb,"$1-$2")}var ep,nE=5381,qo=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},rE=function(t){return qo(nE,t)};function iE(t){return Fp(rE(t)>>>0)}function xb(t){return t.displayName||t.name||"Component"}function tp(t){return typeof t=="string"&&!0}var sE=typeof Symbol=="function"&&Symbol.for,oE=sE?Symbol.for("react.memo"):60115,kb=sE?Symbol.for("react.forward_ref"):60112,Db={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Nb={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},aE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ob=((ep={})[kb]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ep[oE]=aE,ep);function p_(t){return("type"in(e=t)&&e.type.$$typeof)===oE?aE:"$$typeof"in t?Ob[t.$$typeof]:Db;var e}var Lb=Object.defineProperty,Mb=Object.getOwnPropertyNames,m_=Object.getOwnPropertySymbols,Vb=Object.getOwnPropertyDescriptor,Fb=Object.getPrototypeOf,g_=Object.prototype;function lE(t,e,n){if(typeof e!="string"){if(g_){var r=Fb(e);r&&r!==g_&&lE(t,r,n)}var o=Mb(e);m_&&(o=o.concat(m_(e)));for(var a=p_(t),u=p_(e),h=0;h<o.length;++h){var f=o[h];if(!(f in Nb||n&&n[f]||u&&f in u||a&&f in a)){var m=Vb(e,f);try{Lb(t,f,m)}catch{}}}}return t}function Ms(t){return typeof t=="function"}function Rm(t){return typeof t=="object"&&"styledComponentId"in t}function Ns(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Up(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=t[r];return n}function jl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function jp(t,e,n){if(n===void 0&&(n=!1),!n&&!jl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=jp(t[r],e[r]);else if(jl(e))for(var r in e)t[r]=jp(t[r],e[r]);return t}function Pm(t,e){Object.defineProperty(t,"toString",{value:e})}function Vs(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Ub=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,a=o;e>=a;)if((a<<=1)<0)throw Vs(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(r),this.length=a;for(var u=o;u<a;u++)this.groupSizes[u]=0}for(var h=this.indexOfGroup(e+1),f=(u=0,n.length);u<f;u++)this.tag.insertRule(h,n[u])&&(this.groupSizes[e]++,h++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n;this.groupSizes[e]=0;for(var a=r;a<o;a++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],o=this.indexOfGroup(e),a=o+r,u=o;u<a;u++)n+="".concat(this.tag.getRule(u)).concat(Cm);return n},t}(),Kc=new Map,ud=new Map,Qc=1,Lc=function(t){if(Kc.has(t))return Kc.get(t);for(;ud.has(Qc);)Qc++;var e=Qc++;return Kc.set(t,e),ud.set(e,t),e},jb=function(t,e){Qc=e+1,Kc.set(t,e),ud.set(e,t)},Bb="style[".concat(ta,"][").concat(Z0,'="').concat(Gd,'"]'),$b=new RegExp("^".concat(ta,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),zb=function(t,e,n){for(var r,o=n.split(","),a=0,u=o.length;a<u;a++)(r=o[a])&&t.registerName(e,r)},Wb=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(Cm),o=[],a=0,u=r.length;a<u;a++){var h=r[a].trim();if(h){var f=h.match($b);if(f){var m=0|parseInt(f[1],10),v=f[2];m!==0&&(jb(v,m),zb(t,v,f[3]),t.getTag().insertRules(m,o)),o.length=0}else o.push(h)}}},y_=function(t){for(var e=document.querySelectorAll(Bb),n=0,r=e.length;n<r;n++){var o=e[n];o&&o.getAttribute(ta)!==J0&&(Wb(t,o),o.parentNode&&o.parentNode.removeChild(o))}};function Gb(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var uE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),o=function(h){var f=Array.from(h.querySelectorAll("style[".concat(ta,"]")));return f[f.length-1]}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(ta,J0),r.setAttribute(Z0,Gd);var u=Gb();return u&&r.setAttribute("nonce",u),n.insertBefore(r,a),r},Hb=function(){function t(e){this.element=uE(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,a=r.length;o<a;o++){var u=r[o];if(u.ownerNode===n)return u}throw Vs(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),qb=function(){function t(e){this.element=uE(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),Kb=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),v_=ld,Qb={isServer:!ld,useCSSOMInjection:!Ab},cd=function(){function t(e,n,r){e===void 0&&(e=na),n===void 0&&(n={});var o=this;this.options=Mt(Mt({},Qb),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&ld&&v_&&(v_=!1,y_(this)),Pm(this,function(){return function(a){for(var u=a.getTag(),h=u.length,f="",m=function(_){var w=function(K){return ud.get(K)}(_);if(w===void 0)return"continue";var T=a.names.get(w),D=u.getGroup(_);if(T===void 0||!T.size||D.length===0)return"continue";var L="".concat(ta,".g").concat(_,'[id="').concat(w,'"]'),x="";T!==void 0&&T.forEach(function(K){K.length>0&&(x+="".concat(K,","))}),f+="".concat(D).concat(L,'{content:"').concat(x,'"}').concat(Cm)},v=0;v<h;v++)m(v);return f}(o)})}return t.registerId=function(e){return Lc(e)},t.prototype.rehydrate=function(){!this.server&&ld&&y_(this)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Mt(Mt({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Kb(o):r?new Hb(o):new qb(o)}(this.options),new Ub(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Lc(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Lc(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Lc(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),Yb=/&/g,Xb=/^\s*\/\/.*$/gm;function cE(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=cE(n.children,e)),n})}function Jb(t){var e,n,r,o=na,a=o.options,u=a===void 0?na:a,h=o.plugins,f=h===void 0?Hd:h,m=function(w,T,D){return D.startsWith(n)&&D.endsWith(n)&&D.replaceAll(n,"").length>0?".".concat(e):w},v=f.slice();v.push(function(w){w.type===Bd&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Yb,n).replace(r,m))}),u.prefix&&v.push(Tb),v.push(wb);var _=function(w,T,D,L){T===void 0&&(T=""),D===void 0&&(D=""),L===void 0&&(L="&"),e=L,n=T,r=new RegExp("\\".concat(n,"\\b"),"g");var x=w.replace(Xb,""),K=vb(D||T?"".concat(D," ").concat(T," { ").concat(x," }"):x);u.namespace&&(K=cE(K,u.namespace));var q=[];return ad(K,Eb(v.concat(Ib(function(G){return q.push(G)})))),q};return _.hash=f.length?f.reduce(function(w,T){return T.name||Vs(15),qo(w,T.name)},nE).toString():"",_}var Zb=new cd,Bp=Jb(),dE=He.createContext({shouldForwardProp:void 0,styleSheet:Zb,stylis:Bp});dE.Consumer;He.createContext(void 0);function $p(){return Z.useContext(dE)}var eC=function(){function t(e,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Bp);var u=r.name+a.hash;o.hasNameForId(r.id,u)||o.insertRules(r.id,u,a(r.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,Pm(this,function(){throw Vs(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Bp),this.name+e.hash},t}(),tC=function(t){return t>="A"&&t<="Z"};function __(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;tC(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var hE=function(t){return t==null||t===!1||t===""},fE=function(t){var e,n,r=[];for(var o in t){var a=t[o];t.hasOwnProperty(o)&&!hE(a)&&(Array.isArray(a)&&a.isCss||Ms(a)?r.push("".concat(__(o),":"),a,";"):jl(a)?r.push.apply(r,Ul(Ul(["".concat(o," {")],fE(a),!1),["}"],!1)):r.push("".concat(__(o),": ").concat((e=o,(n=a)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in Sb||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Fi(t,e,n,r){if(hE(t))return[];if(Rm(t))return[".".concat(t.styledComponentId)];if(Ms(t)){if(!Ms(a=t)||a.prototype&&a.prototype.isReactComponent||!e)return[t];var o=t(e);return Fi(o,e,n,r)}var a;return t instanceof eC?n?(t.inject(n,r),[t.getName(r)]):[t]:jl(t)?fE(t):Array.isArray(t)?Array.prototype.concat.apply(Hd,t.map(function(u){return Fi(u,e,n,r)})):[t.toString()]}function pE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Ms(n)&&!Rm(n))return!1}return!0}var nC=rE(Gd),rC=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&pE(e),this.componentId=n,this.baseHash=qo(nC,n),this.baseStyle=r,cd.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Ns(o,this.staticRulesId);else{var a=Up(Fi(this.rules,e,n,r)),u=Fp(qo(this.baseHash,a)>>>0);if(!n.hasNameForId(this.componentId,u)){var h=r(a,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,h)}o=Ns(o,u),this.staticRulesId=u}else{for(var f=qo(this.baseHash,r.hash),m="",v=0;v<this.rules.length;v++){var _=this.rules[v];if(typeof _=="string")m+=_;else if(_){var w=Up(Fi(_,e,n,r));f=qo(f,w+v),m+=w}}if(m){var T=Fp(f>>>0);n.hasNameForId(this.componentId,T)||n.insertRules(this.componentId,T,r(m,".".concat(T),void 0,this.componentId)),o=Ns(o,T)}}return o},t}(),Bl=He.createContext(void 0);Bl.Consumer;function iC(t){var e=He.useContext(Bl),n=Z.useMemo(function(){return function(r,o){if(!r)throw Vs(14);if(Ms(r)){var a=r(o);return a}if(Array.isArray(r)||typeof r!="object")throw Vs(8);return o?Mt(Mt({},o),r):r}(t.theme,e)},[t.theme,e]);return t.children?He.createElement(Bl.Provider,{value:n},t.children):null}var np={};function sC(t,e,n){var r=Rm(t),o=t,a=!tp(t),u=e.attrs,h=u===void 0?Hd:u,f=e.componentId,m=f===void 0?function(z,X){var Q=typeof z!="string"?"sc":h_(z);np[Q]=(np[Q]||0)+1;var b="".concat(Q,"-").concat(iE(Gd+Q+np[Q]));return X?"".concat(X,"-").concat(b):b}(e.displayName,e.parentComponentId):f,v=e.displayName,_=v===void 0?function(z){return tp(z)?"styled.".concat(z):"Styled(".concat(xb(z),")")}(t):v,w=e.displayName&&e.componentId?"".concat(h_(e.displayName),"-").concat(e.componentId):e.componentId||m,T=r&&o.attrs?o.attrs.concat(h).filter(Boolean):h,D=e.shouldForwardProp;if(r&&o.shouldForwardProp){var L=o.shouldForwardProp;if(e.shouldForwardProp){var x=e.shouldForwardProp;D=function(z,X){return L(z,X)&&x(z,X)}}else D=L}var K=new rC(n,w,r?o.componentStyle:void 0);function q(z,X){return function(Q,b,A){var C=Q.attrs,k=Q.componentStyle,N=Q.defaultProps,V=Q.foldedComponentIds,P=Q.styledComponentId,Ze=Q.target,Ye=He.useContext(Bl),pt=$p(),Ve=Q.shouldForwardProp||pt.shouldForwardProp,oe=eE(b,Ye,N)||na,he=function(Ae,Pe,De){for(var Ne,Oe=Mt(Mt({},Pe),{className:void 0,theme:De}),tt=0;tt<Ae.length;tt+=1){var nn=Ms(Ne=Ae[tt])?Ne(Oe):Ne;for(var Je in nn)Oe[Je]=Je==="className"?Ns(Oe[Je],nn[Je]):Je==="style"?Mt(Mt({},Oe[Je]),nn[Je]):nn[Je]}return Pe.className&&(Oe.className=Ns(Oe.className,Pe.className)),Oe}(C,b,oe),ue=he.as||Ze,F={};for(var Y in he)he[Y]===void 0||Y[0]==="$"||Y==="as"||Y==="theme"&&he.theme===oe||(Y==="forwardedAs"?F.as=he.forwardedAs:Ve&&!Ve(Y,ue)||(F[Y]=he[Y]));var pe=function(Ae,Pe){var De=$p(),Ne=Ae.generateAndInjectStyles(Pe,De.styleSheet,De.stylis);return Ne}(k,he),Ce=Ns(V,P);return pe&&(Ce+=" "+pe),he.className&&(Ce+=" "+he.className),F[tp(ue)&&!tE.has(ue)?"class":"className"]=Ce,F.ref=A,Z.createElement(ue,F)}(G,z,X)}q.displayName=_;var G=He.forwardRef(q);return G.attrs=T,G.componentStyle=K,G.displayName=_,G.shouldForwardProp=D,G.foldedComponentIds=r?Ns(o.foldedComponentIds,o.styledComponentId):"",G.styledComponentId=w,G.target=r?o.target:t,Object.defineProperty(G,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=r?function(X){for(var Q=[],b=1;b<arguments.length;b++)Q[b-1]=arguments[b];for(var A=0,C=Q;A<C.length;A++)jp(X,C[A],!0);return X}({},o.defaultProps,z):z}}),Pm(G,function(){return".".concat(G.styledComponentId)}),a&&lE(G,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),G}function w_(t,e){for(var n=[t[0]],r=0,o=e.length;r<o;r+=1)n.push(e[r],t[r+1]);return n}var E_=function(t){return Object.assign(t,{isCss:!0})};function mE(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Ms(t)||jl(t))return E_(Fi(w_(Hd,Ul([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?Fi(r):E_(Fi(w_(r,e)))}function zp(t,e,n){if(n===void 0&&(n=na),!e)throw Vs(1,e);var r=function(o){for(var a=[],u=1;u<arguments.length;u++)a[u-1]=arguments[u];return t(e,n,mE.apply(void 0,Ul([o],a,!1)))};return r.attrs=function(o){return zp(t,e,Mt(Mt({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return zp(t,e,Mt(Mt({},n),o))},r}var gE=function(t){return zp(sC,t)},te=gE;tE.forEach(function(t){te[t]=gE(t)});var oC=function(){function t(e,n){this.rules=e,this.componentId=n,this.isStatic=pE(e),cd.registerId(this.componentId+1)}return t.prototype.createStyles=function(e,n,r,o){var a=o(Up(Fi(this.rules,n,r,o)),""),u=this.componentId+e;r.insertRules(u,u,a)},t.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},t.prototype.renderStyles=function(e,n,r,o){e>2&&cd.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,n,r,o)},t}();function aC(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=mE.apply(void 0,Ul([t],e,!1)),o="sc-global-".concat(iE(JSON.stringify(r))),a=new oC(r,o),u=function(f){var m=$p(),v=He.useContext(Bl),_=He.useRef(m.styleSheet.allocateGSInstance(o)).current;return m.styleSheet.server&&h(_,f,m.styleSheet,v,m.stylis),He.useLayoutEffect(function(){if(!m.styleSheet.server)return h(_,f,m.styleSheet,v,m.stylis),function(){return a.removeStyles(_,m.styleSheet)}},[_,f,m.styleSheet,v,m.stylis]),null};function h(f,m,v,_,w){if(a.isStatic)a.renderStyles(f,bb,v,w);else{var T=Mt(Mt({},m),{theme:eE(m,_,u.defaultProps)});a.renderStyles(f,T,v,w)}}return He.memo(u)}const lC=te.div`
  width: 1500px;
`,uC=aC`
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
`,cC=te.div`
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
`,dC=te.div`
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
`,hC=te.aside`
  display: flex;
  flex-direction: column;
`,fC=te.div`
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
`,pC=te.button`
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
`,mC=te.header`
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
`,gC=te.div`
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
`;var rp={exports:{}},ip,I_;function yC(){if(I_)return ip;I_=1;var t="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return ip=t,ip}var sp,T_;function vC(){if(T_)return sp;T_=1;var t=yC();function e(){}function n(){}return n.resetWarningCache=e,sp=function(){function r(u,h,f,m,v,_){if(_!==t){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}r.isRequired=r;function o(){return r}var a={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:o,element:r,elementType:r,instanceOf:o,node:r,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:n,resetWarningCache:e};return a.PropTypes=a,a},sp}var S_;function _C(){return S_||(S_=1,rp.exports=vC()()),rp.exports}var wC=_C();const Zr=Tm(wC),yE=te.div`
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
`,EC=te.input`
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
`,IC=te.img`
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
`,TC=()=>U.jsxs(yE,{children:[U.jsx(IC,{src:"icon/search_icon.svg","aria-hidden":"true",alt:""}),U.jsx(EC,{"aria-label":"Search on your page",type:"text",placeholder:"Search for anything..."})]}),A_=te.div`
  display: flex;
`,SC=te.div`
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
`,AC=te.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,bC=te.div`
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
`,CC=te.button`
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
`,b_=te.img``,RC=te.div`
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
`,PC=te.span`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,xC=te.span`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: right;

  @media (max-width: ${({theme:t})=>t.mobileL}) {
    font-size: 0.8rem;
  }
`,kC=te.img`
  margin-right: 0.8rem;
  object-fit: cover;
  object-position: top;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`,DC=te.button`
  cursor: pointer;
  background-color: transparent;
`;te.img`
  width: 1.5rem;
  height: 1.5rem;
`;const NC=te.div`
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
`;const ra={mobile:"425px",mobileL:"600px",tablet:"768px",desktop:"1024px",headerSize:{mobileHeight:"3rem",tabletHeight:"4rem",desktopHeight:"5.5rem"},fonts:{primaryFont:"'Inter', sans-serif"},colors:{primaryLightBackground:"#fff",secondaryLightBackground:"#f5f5f5",primaryDarkBackground:"#0D062D",secondaryDarkBackground:"#E0E0E0",hoverBackground:"rgba(80, 48, 229, 0.08)",borderLineColor:"1px solid rgb(219, 219, 219)",darkBlue:" #5030E5",lightBlue:"rgb(34, 1, 179)",darkText:"#0D062D",lightText:"#625F6D"}},OC=te.div`
  position: absolute;
  transform: translateX(-50%);
  top: 50%;
  left: 50%;
`,LC=te.form`
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  min-width: 300px;

  @media (max-width: ${ra.mobileL}) {
    padding: 1.5rem;
  }
  @media (max-width: ${ra.mobile}) {
    padding: 1rem;
  }
`,MC=te.h2`
  color: ${({theme:t})=>t.colors.lightText};
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`,op=te.div`
  margin-bottom: 1.2rem;
`,ap=te.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${ra.colors.lightBlue};
  }
`,xm=te.button`
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
`,VC=te(xm)``,FC=te.p`
  text-align: center;
  margin-top: 1rem;
  color: ${({theme:t})=>t.colors.lightText};
`,UC=te.span`
  color: ${({theme:t})=>t.colors.darkBlue};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`,C_=te.div`
  font-weight: 500;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: all 3000ms;

  span {
    color: #ff0000b5;
  }
`,jC=te.div`
  display: flex;
  justify-content: end;
  width: 100%;
`,ga=Z.createContext({isLoggedIn:!1,setIsLoggedIn:()=>{},showLoginForm:!1,setShowLoginForm:()=>{},mode:"login",setMode:()=>{},loggedUser:null,setLoggedUser:()=>{}}),BC=()=>{};var R_={};/**
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
 */const vE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},$C=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=t[n++];e[r++]=String.fromCharCode((o&31)<<6|a&63)}else if(o>239&&o<365){const a=t[n++],u=t[n++],h=t[n++],f=((o&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=t[n++],u=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(a&63)<<6|u&63)}}return e.join("")},_E={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const a=t[o],u=o+1<t.length,h=u?t[o+1]:0,f=o+2<t.length,m=f?t[o+2]:0,v=a>>2,_=(a&3)<<4|h>>4;let w=(h&15)<<2|m>>6,T=m&63;f||(T=64,u||(w=64)),r.push(n[v],n[_],n[w],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$C(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const a=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const _=o<t.length?n[t.charAt(o)]:64;if(++o,a==null||h==null||m==null||_==null)throw new zC;const w=a<<2|h>>4;if(r.push(w),m!==64){const T=h<<4&240|m>>2;if(r.push(T),_!==64){const D=m<<6&192|_;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WC=function(t){const e=vE(t);return _E.encodeByteArray(e,!0)},dd=function(t){return WC(t).replace(/\./g,"")},wE=function(t){try{return _E.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HC=()=>GC().__FIREBASE_DEFAULTS__,qC=()=>{if(typeof process>"u"||typeof R_>"u")return;const t=R_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wE(t[1]);return e&&JSON.parse(e)},qd=()=>{try{return BC()||HC()||qC()||KC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},EE=t=>{var e,n;return(n=(e=qd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},QC=t=>{const e=EE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},IE=()=>{var t;return(t=qd())===null||t===void 0?void 0:t.config},TE=t=>{var e;return(e=qd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class YC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function XC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",o=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dd(JSON.stringify(n)),dd(JSON.stringify(u)),""].join(".")}/**
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
 */function en(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function JC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(en())}function ZC(){var t;const e=(t=qd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eR(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rR(){const t=en();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function iR(){return!ZC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sR(){try{return typeof indexedDB=="object"}catch{return!1}}function oR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var a;e(((a=o.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const aR="FirebaseError";class oi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aR,Object.setPrototypeOf(this,oi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ou.prototype.create)}}class ou{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,a=this.errors[e],u=a?lR(a,r):"Error",h=`${this.serviceName}: ${u} (${o}).`;return new oi(o,h,r)}}function lR(t,e){return t.replace(uR,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const uR=/\{\$([^}]+)}/g;function cR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const a=t[o],u=e[o];if(P_(a)&&P_(u)){if(!Fs(a,u))return!1}else if(a!==u)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function P_(t){return t!==null&&typeof t=="object"}/**
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
 */function au(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bl(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[o,a]=r.split("=");e[decodeURIComponent(o)]=decodeURIComponent(a)}}),e}function Cl(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dR(t,e){const n=new hR(t,e);return n.subscribe.bind(n)}class hR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let o;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fR(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:r},o.next===void 0&&(o.next=lp),o.error===void 0&&(o.error=lp),o.complete===void 0&&(o.complete=lp);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lp(){}/**
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
 */function tn(t){return t&&t._delegate?t._delegate:t}class Us{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ks="[DEFAULT]";/**
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
 */let pR=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new YC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gR(e))try{this.getOrInitializeService({instanceIdentifier:ks})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:o});r.resolve(a)}catch{}}}}clearInstance(e=ks){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ks){return this.instances.has(e)}getOptions(e=ks){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&u.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(o,a);const u=this.instances.get(o);return u&&e(u,o),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ks){return this.component?this.component.multipleInstances?e:ks:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function mR(t){return t===ks?void 0:t}function gR(t){return t.instantiationMode==="EAGER"}/**
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
 */class yR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Fe||(Fe={}));const vR={debug:Fe.DEBUG,verbose:Fe.VERBOSE,info:Fe.INFO,warn:Fe.WARN,error:Fe.ERROR,silent:Fe.SILENT},_R=Fe.INFO,wR={[Fe.DEBUG]:"log",[Fe.VERBOSE]:"log",[Fe.INFO]:"info",[Fe.WARN]:"warn",[Fe.ERROR]:"error"},ER=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=wR[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class km{constructor(e){this.name=e,this._logLevel=_R,this._logHandler=ER,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Fe.DEBUG,...e),this._logHandler(this,Fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Fe.VERBOSE,...e),this._logHandler(this,Fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Fe.INFO,...e),this._logHandler(this,Fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Fe.WARN,...e),this._logHandler(this,Fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Fe.ERROR,...e),this._logHandler(this,Fe.ERROR,...e)}}const IR=(t,e)=>e.some(n=>t instanceof n);let x_,k_;function TR(){return x_||(x_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SR(){return k_||(k_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SE=new WeakMap,Wp=new WeakMap,AE=new WeakMap,up=new WeakMap,Dm=new WeakMap;function AR(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",a),t.removeEventListener("error",u)},a=()=>{n(Ui(t.result)),o()},u=()=>{r(t.error),o()};t.addEventListener("success",a),t.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&SE.set(n,t)}).catch(()=>{}),Dm.set(e,t),e}function bR(t){if(Wp.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",u),t.removeEventListener("abort",u)},a=()=>{n(),o()},u=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",a),t.addEventListener("error",u),t.addEventListener("abort",u)});Wp.set(t,e)}let Gp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||AE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ui(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function CR(t){Gp=t(Gp)}function RR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cp(this),e,...n);return AE.set(r,e.sort?e.sort():[e]),Ui(r)}:SR().includes(t)?function(...e){return t.apply(cp(this),e),Ui(SE.get(this))}:function(...e){return Ui(t.apply(cp(this),e))}}function PR(t){return typeof t=="function"?RR(t):(t instanceof IDBTransaction&&bR(t),IR(t,TR())?new Proxy(t,Gp):t)}function Ui(t){if(t instanceof IDBRequest)return AR(t);if(up.has(t))return up.get(t);const e=PR(t);return e!==t&&(up.set(t,e),Dm.set(e,t)),e}const cp=t=>Dm.get(t);function xR(t,e,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const u=indexedDB.open(t,e),h=Ui(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Ui(u.result),f.oldVersion,f.newVersion,Ui(u.transaction),f)}),n&&u.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),o&&f.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const kR=["get","getKey","getAll","getAllKeys","count"],DR=["put","add","delete","clear"],dp=new Map;function D_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dp.get(e))return dp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=DR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||kR.includes(n)))return;const a=async function(u,...h){const f=this.transaction(u,o?"readwrite":"readonly");let m=f.store;return r&&(m=m.index(h.shift())),(await Promise.all([m[n](...h),o&&f.done]))[0]};return dp.set(e,a),a}CR(t=>({...t,get:(e,n,r)=>D_(e,n)||t.get(e,n,r),has:(e,n)=>!!D_(e,n)||t.has(e,n)}));/**
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
 */class NR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(OR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function OR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hp="@firebase/app",N_="0.11.5";/**
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
 */const ni=new km("@firebase/app"),LR="@firebase/app-compat",MR="@firebase/analytics-compat",VR="@firebase/analytics",FR="@firebase/app-check-compat",UR="@firebase/app-check",jR="@firebase/auth",BR="@firebase/auth-compat",$R="@firebase/database",zR="@firebase/data-connect",WR="@firebase/database-compat",GR="@firebase/functions",HR="@firebase/functions-compat",qR="@firebase/installations",KR="@firebase/installations-compat",QR="@firebase/messaging",YR="@firebase/messaging-compat",XR="@firebase/performance",JR="@firebase/performance-compat",ZR="@firebase/remote-config",e1="@firebase/remote-config-compat",t1="@firebase/storage",n1="@firebase/storage-compat",r1="@firebase/firestore",i1="@firebase/vertexai",s1="@firebase/firestore-compat",o1="firebase",a1="11.6.1";/**
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
 */const qp="[DEFAULT]",l1={[Hp]:"fire-core",[LR]:"fire-core-compat",[VR]:"fire-analytics",[MR]:"fire-analytics-compat",[UR]:"fire-app-check",[FR]:"fire-app-check-compat",[jR]:"fire-auth",[BR]:"fire-auth-compat",[$R]:"fire-rtdb",[zR]:"fire-data-connect",[WR]:"fire-rtdb-compat",[GR]:"fire-fn",[HR]:"fire-fn-compat",[qR]:"fire-iid",[KR]:"fire-iid-compat",[QR]:"fire-fcm",[YR]:"fire-fcm-compat",[XR]:"fire-perf",[JR]:"fire-perf-compat",[ZR]:"fire-rc",[e1]:"fire-rc-compat",[t1]:"fire-gcs",[n1]:"fire-gcs-compat",[r1]:"fire-fst",[s1]:"fire-fst-compat",[i1]:"fire-vertex","fire-js":"fire-js",[o1]:"fire-js-all"};/**
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
 */const hd=new Map,u1=new Map,Kp=new Map;function O_(t,e){try{t.container.addComponent(e)}catch(n){ni.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ia(t){const e=t.name;if(Kp.has(e))return ni.debug(`There were multiple attempts to register component ${e}.`),!1;Kp.set(e,t);for(const n of hd.values())O_(n,t);for(const n of u1.values())O_(n,t);return!0}function Nm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const c1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ji=new ou("app","Firebase",c1);/**
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
 */class d1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ji.create("app-deleted",{appName:this._name})}}/**
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
 */const ya=a1;function bE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:qp,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw ji.create("bad-app-name",{appName:String(o)});if(n||(n=IE()),!n)throw ji.create("no-options");const a=hd.get(o);if(a){if(Fs(n,a.options)&&Fs(r,a.config))return a;throw ji.create("duplicate-app",{appName:o})}const u=new yR(o);for(const f of Kp.values())u.addComponent(f);const h=new d1(n,r,u);return hd.set(o,h),h}function CE(t=qp){const e=hd.get(t);if(!e&&t===qp&&IE())return bE();if(!e)throw ji.create("no-app",{appName:t});return e}function Bi(t,e,n){var r;let o=(r=l1[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const a=o.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${o}" with version "${e}":`];a&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ni.warn(h.join(" "));return}ia(new Us(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const h1="firebase-heartbeat-database",f1=1,$l="firebase-heartbeat-store";let hp=null;function RE(){return hp||(hp=xR(h1,f1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($l)}catch(n){console.warn(n)}}}}).catch(t=>{throw ji.create("idb-open",{originalErrorMessage:t.message})})),hp}async function p1(t){try{const n=(await RE()).transaction($l),r=await n.objectStore($l).get(PE(t));return await n.done,r}catch(e){if(e instanceof oi)ni.warn(e.message);else{const n=ji.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ni.warn(n.message)}}}async function L_(t,e){try{const r=(await RE()).transaction($l,"readwrite");await r.objectStore($l).put(e,PE(t)),await r.done}catch(n){if(n instanceof oi)ni.warn(n.message);else{const r=ji.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ni.warn(r.message)}}}function PE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const m1=1024,g1=30;class y1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=M_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(u=>u.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:o}),this._heartbeatsCache.heartbeats.length>g1){const u=w1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ni.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=M_(),{heartbeatsToSend:r,unsentEntries:o}=v1(this._heartbeatsCache.heartbeats),a=dd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(n){return ni.warn(n),""}}}function M_(){return new Date().toISOString().substring(0,10)}function v1(t,e=m1){const n=[];let r=t.slice();for(const o of t){const a=n.find(u=>u.agent===o.agent);if(a){if(a.dates.push(o.date),V_(n)>e){a.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),V_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sR()?oR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await p1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return L_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return L_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function V_(t){return dd(JSON.stringify({version:2,heartbeats:t})).length}function w1(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function E1(t){ia(new Us("platform-logger",e=>new NR(e),"PRIVATE")),ia(new Us("heartbeat",e=>new y1(e),"PRIVATE")),Bi(Hp,N_,t),Bi(Hp,N_,"esm2017"),Bi("fire-js","")}E1("");function xE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const I1=xE,kE=new ou("auth","Firebase",xE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new km("@firebase/auth");function T1(t,...e){fd.logLevel<=Fe.WARN&&fd.warn(`Auth (${ya}): ${t}`,...e)}function Yc(t,...e){fd.logLevel<=Fe.ERROR&&fd.error(`Auth (${ya}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(t,...e){throw Om(t,...e)}function Cr(t,...e){return Om(t,...e)}function DE(t,e,n){const r=Object.assign(Object.assign({},I1()),{[e]:n});return new ou("auth","Firebase",r).create(e,{appName:t.name})}function ei(t){return DE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Om(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kE.create(t,...e)}function Te(t,e,...n){if(!t)throw Om(e,...n)}function Xr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Yc(e),new Error(e)}function ri(t,e){t||Xr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function S1(){return F_()==="http:"||F_()==="https:"}function F_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(S1()||tR()||"connection"in navigator)?navigator.onLine:!0}function b1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.shortDelay=e,this.longDelay=n,ri(n>e,"Short delay should be less than long delay!"),this.isMobile=JC()||nR()}get(){return A1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(t,e){ri(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],P1=new lu(3e4,6e4);function Zi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function es(t,e,n,r,o={}){return OE(t,o,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const h=au(Object.assign({key:t.config.apiKey},u)).slice(1),f=await t._getAdditionalHeaders();f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode);const m=Object.assign({method:e,headers:f},a);return eR()||(m.referrerPolicy="no-referrer"),NE.fetch()(await LE(t,t.config.apiHost,n,h),m)})}async function OE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},C1),e);try{const o=new k1(t),a=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw Mc(t,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[f,m]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mc(t,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw Mc(t,"email-already-in-use",u);if(f==="USER_DISABLED")throw Mc(t,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw DE(t,v,m);fr(t,v)}}catch(o){if(o instanceof oi)throw o;fr(t,"network-request-failed",{message:String(o)})}}async function uu(t,e,n,r,o={}){const a=await es(t,e,n,r,o);return"mfaPendingCredential"in a&&fr(t,"multi-factor-auth-required",{_serverResponse:a}),a}async function LE(t,e,n,r){const o=`${e}${n}?${r}`,a=t,u=a.config.emulator?Lm(t.config,o):`${t.config.apiScheme}://${o}`;return R1.includes(n)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(u).toString():u}function x1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class k1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Cr(this.auth,"network-request-failed")),P1.get())})}}function Mc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Cr(t,e,r);return o.customData._tokenResponse=n,o}function U_(t){return t!==void 0&&t.enterprise!==void 0}class D1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return x1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function N1(t,e){return es(t,"GET","/v2/recaptchaConfig",Zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e){return es(t,"POST","/v1/accounts:delete",e)}async function pd(t,e){return es(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L1(t,e=!1){const n=tn(t),r=await n.getIdToken(e),o=Mm(r);Te(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:o,token:r,authTime:Dl(fp(o.auth_time)),issuedAtTime:Dl(fp(o.iat)),expirationTime:Dl(fp(o.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function fp(t){return Number(t)*1e3}function Mm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Yc("JWT malformed, contained fewer than 3 sections"),null;try{const o=wE(n);return o?JSON.parse(o):(Yc("Failed to decode base64 JWT payload"),null)}catch(o){return Yc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function j_(t){const e=Mm(t);return Te(e,"internal-error"),Te(typeof e.exp<"u","internal-error"),Te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof oi&&M1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function M1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dl(this.lastLoginAt),this.creationTime=Dl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function md(t){var e;const n=t.auth,r=await t.getIdToken(),o=await zl(t,pd(n,{idToken:r}));Te(o==null?void 0:o.users.length,n,"internal-error");const a=o.users[0];t._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?ME(a.providerUserInfo):[],h=U1(t.providerData,u),f=t.isAnonymous,m=!(t.email&&a.passwordHash)&&!(h!=null&&h.length),v=f?m:!1,_={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new Yp(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(t,_)}async function F1(t){const e=tn(t);await md(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U1(t,e){return[...t.filter(r=>!e.some(o=>o.providerId===r.providerId)),...e]}function ME(t){return t.map(e=>{var{providerId:n}=e,r=Sm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(t,e){const n=await OE(t,{},async()=>{const r=au({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:a}=t.config,u=await LE(t,o,"/v1/token",`key=${a}`),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",NE.fetch()(u,{method:"POST",headers:h,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function B1(t,e){return es(t,"POST","/v2/accounts:revokeToken",Zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Te(e.idToken,"internal-error"),Te(typeof e.idToken<"u","internal-error"),Te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):j_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Te(e.length!==0,"internal-error");const n=j_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:o,expiresIn:a}=await j1(e,n);this.updateTokensAndExpiration(r,o,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:o,expirationTime:a}=n,u=new Qo;return r&&(Te(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),o&&(Te(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),a&&(Te(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qo,this.toJSON())}_performRefresh(){return Xr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t,e){Te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:o}=e,a=Sm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new V1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Yp(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await zl(this,this.stsTokenManager.getToken(this.auth,e));return Te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return L1(this,e)}reload(){return F1(this)}_assign(e){this!==e&&(Te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await md(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zn(this.auth.app))return Promise.reject(ei(this.auth));const e=await this.getIdToken();return await zl(this,O1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,o,a,u,h,f,m,v;const _=(r=n.displayName)!==null&&r!==void 0?r:void 0,w=(o=n.email)!==null&&o!==void 0?o:void 0,T=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,D=(u=n.photoURL)!==null&&u!==void 0?u:void 0,L=(h=n.tenantId)!==null&&h!==void 0?h:void 0,x=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,K=(m=n.createdAt)!==null&&m!==void 0?m:void 0,q=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:G,emailVerified:z,isAnonymous:X,providerData:Q,stsTokenManager:b}=n;Te(G&&b,e,"internal-error");const A=Qo.fromJSON(this.name,b);Te(typeof G=="string",e,"internal-error"),ki(_,e.name),ki(w,e.name),Te(typeof z=="boolean",e,"internal-error"),Te(typeof X=="boolean",e,"internal-error"),ki(T,e.name),ki(D,e.name),ki(L,e.name),ki(x,e.name),ki(K,e.name),ki(q,e.name);const C=new ur({uid:G,auth:e,email:w,emailVerified:z,displayName:_,isAnonymous:X,photoURL:D,phoneNumber:T,tenantId:L,stsTokenManager:A,createdAt:K,lastLoginAt:q});return Q&&Array.isArray(Q)&&(C.providerData=Q.map(k=>Object.assign({},k))),x&&(C._redirectEventId=x),C}static async _fromIdTokenResponse(e,n,r=!1){const o=new Qo;o.updateFromServerResponse(n);const a=new ur({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r});return await md(a),a}static async _fromGetAccountInfoResponse(e,n,r){const o=n.users[0];Te(o.localId!==void 0,"internal-error");const a=o.providerUserInfo!==void 0?ME(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!(a!=null&&a.length),h=new Qo;h.updateFromIdToken(r);const f=new ur({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:u}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Yp(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(a!=null&&a.length)};return Object.assign(f,m),f}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new Map;function Jr(t){ri(t instanceof Function,"Expected a class definition");let e=B_.get(t);return e?(ri(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,B_.set(t,e),e)}/**
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
 */class VE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VE.type="NONE";const $_=VE;/**
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
 */function Xc(t,e,n){return`firebase:${t}:${e}:${n}`}class Yo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:o,name:a}=this.auth;this.fullUserKey=Xc(this.userKey,o.apiKey,a),this.fullPersistenceKey=Xc("persistence",o.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await pd(this.auth,{idToken:e}).catch(()=>{});return n?ur._fromGetAccountInfoResponse(this.auth,n,e):null}return ur._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yo(Jr($_),e,r);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=o[0]||Jr($_);const u=Xc(r,e.config.apiKey,e.name);let h=null;for(const m of n)try{const v=await m._get(u);if(v){let _;if(typeof v=="string"){const w=await pd(e,{idToken:v}).catch(()=>{});if(!w)break;_=await ur._fromGetAccountInfoResponse(e,w,v)}else _=ur._fromJSON(e,v);m!==a&&(h=_),a=m;break}}catch{}const f=o.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new Yo(a,e,r):(a=f[0],h&&await a._set(u,h.toJSON()),await Promise.all(n.map(async m=>{if(m!==a)try{await m._remove(u)}catch{}})),new Yo(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(FE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zE(e))return"Blackberry";if(WE(e))return"Webos";if(UE(e))return"Safari";if((e.includes("chrome/")||jE(e))&&!e.includes("edge/"))return"Chrome";if($E(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function FE(t=en()){return/firefox\//i.test(t)}function UE(t=en()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jE(t=en()){return/crios\//i.test(t)}function BE(t=en()){return/iemobile/i.test(t)}function $E(t=en()){return/android/i.test(t)}function zE(t=en()){return/blackberry/i.test(t)}function WE(t=en()){return/webos/i.test(t)}function Vm(t=en()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $1(t=en()){var e;return Vm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z1(){return rR()&&document.documentMode===10}function GE(t=en()){return Vm(t)||$E(t)||WE(t)||zE(t)||/windows phone/i.test(t)||BE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t,e=[]){let n;switch(t){case"Browser":n=z_(en());break;case"Worker":n=`${z_(en())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ya}/${r}`}/**
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
 */class W1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((u,h)=>{try{const f=e(a);u(f)}catch(f){h(f)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function G1(t,e={}){return es(t,"GET","/v2/passwordPolicy",Zi(t,e))}/**
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
 */const H1=6;class q1{constructor(e){var n,r,o,a;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:H1,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,o,a,u,h;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(n=f.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(o=f.containsLowercaseLetter)!==null&&o!==void 0?o:!0),f.isValid&&(f.isValid=(a=f.containsUppercaseLetter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNumericCharacter)!==null&&u!==void 0?u:!0),f.isValid&&(f.isValid=(h=f.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),f}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<e.length;o++)r=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,o,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K1{constructor(e,n,r,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new W_(this),this.idTokenSubscription=new W_(this),this.beforeStateQueue=new W1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jr(n)),this._initializationPromise=this.queue(async()=>{var r,o,a;if(!this._deleted&&(this.persistenceManager=await Yo.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await pd(this,{idToken:e}),r=await ur._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zn(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let o=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=o==null?void 0:o._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&(f!=null&&f.user)&&(o=f.user,a=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return Te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await md(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zn(this.app))return Promise.reject(ei(this));const n=e?tn(e):null;return n&&Te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zn(this.app)?Promise.reject(ei(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zn(this.app)?Promise.reject(ei(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G1(this),n=new q1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ou("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await B1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jr(e)||this._popupRedirectResolver;Te(n,this,"argument-error"),this.redirectPersistenceManager=await Yo.create(this,[Jr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,o){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(Te(h,this,"internal-error"),h.then(()=>{u||a(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,r,o);return()=>{u=!0,f()}}else{const f=e.addObserver(n);return()=>{u=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=HE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&T1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gs(t){return tn(t)}class W_{constructor(e){this.auth=e,this.observer=null,this.addObserver=dR(n=>this.observer=n)}get next(){return Te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Q1(t){Kd=t}function qE(t){return Kd.loadJS(t)}function Y1(){return Kd.recaptchaEnterpriseScript}function X1(){return Kd.gapiScript}function J1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Z1{constructor(){this.enterprise=new eP}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class eP{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const tP="recaptcha-enterprise",KE="NO_RECAPTCHA";class nP{constructor(e){this.type=tP,this.auth=Gs(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,h)=>{N1(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new D1(f);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,u(m.siteKey)}}).catch(f=>{h(f)})})}function o(a,u,h){const f=window.grecaptcha;U_(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(m=>{u(m)}).catch(()=>{u(KE)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Z1().execute("siteKey",{action:"verify"}):new Promise((a,u)=>{r(this.auth).then(h=>{if(!n&&U_(window.grecaptcha))o(h,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let f=Y1();f.length!==0&&(f+=h),qE(f).then(()=>{o(h,a,u)}).catch(m=>{u(m)})}}).catch(h=>{u(h)})})}}async function G_(t,e,n,r=!1,o=!1){const a=new nP(t);let u;if(o)u=KE;else try{u=await a.verify(n)}catch{u=await a.verify(n,!0)}const h=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const f=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:f,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const f=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:f,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return r?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Xp(t,e,n,r,o){var a;if(!((a=t._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await G_(t,e,n,n==="getOobCode");return r(t,u)}else return r(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await G_(t,e,n,n==="getOobCode");return r(t,h)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(t,e){const n=Nm(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),a=n.getOptions();if(Fs(a,e??{}))return o;fr(o,"already-initialized")}return n.initialize({options:e})}function iP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sP(t,e,n){const r=Gs(t);Te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const o=!1,a=QE(e),{host:u,port:h}=oP(e),f=h===null?"":`:${h}`,m={url:`${a}//${u}${f}/`},v=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){Te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Te(Fs(m,r.config.emulator)&&Fs(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,aP()}function QE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oP(t){const e=QE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const a=o[1];return{host:a,port:H_(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:H_(u)}}}function H_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xr("not implemented")}_getIdTokenResponse(e){return Xr("not implemented")}_linkToIdToken(e,n){return Xr("not implemented")}_getReauthenticationResolver(e){return Xr("not implemented")}}async function lP(t,e){return es(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e){return uu(t,"POST","/v1/accounts:signInWithPassword",Zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cP(t,e){return uu(t,"POST","/v1/accounts:signInWithEmailLink",Zi(t,e))}async function dP(t,e){return uu(t,"POST","/v1/accounts:signInWithEmailLink",Zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Fm{constructor(e,n,r,o=null){super("password",r),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new Wl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xp(e,n,"signInWithPassword",uP);case"emailLink":return cP(e,{email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xp(e,r,"signUpPassword",lP);case"emailLink":return dP(e,{idToken:n,email:this._email,oobCode:this._password});default:fr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e){return uu(t,"POST","/v1/accounts:signInWithIdp",Zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP="http://localhost";class js extends Fm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:o}=n,a=Sm(n,["providerId","signInMethod"]);if(!r||!o)return null;const u=new js(r,o);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return Xo(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xo(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xo(e,n)}buildRequest(){const e={requestUri:hP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=au(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pP(t){const e=bl(Cl(t)).link,n=e?bl(Cl(e)).deep_link_id:null,r=bl(Cl(t)).deep_link_id;return(r?bl(Cl(r)).link:null)||r||n||e||t}class Um{constructor(e){var n,r,o,a,u,h;const f=bl(Cl(e)),m=(n=f.apiKey)!==null&&n!==void 0?n:null,v=(r=f.oobCode)!==null&&r!==void 0?r:null,_=fP((o=f.mode)!==null&&o!==void 0?o:null);Te(m&&v&&_,"argument-error"),this.apiKey=m,this.operation=_,this.code=v,this.continueUrl=(a=f.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(u=f.lang)!==null&&u!==void 0?u:null,this.tenantId=(h=f.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const n=pP(e);try{return new Um(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(){this.providerId=va.PROVIDER_ID}static credential(e,n){return Wl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Um.parseLink(n);return Te(r,"argument-error"),Wl._fromEmailAndCode(e,r.code,r.tenantId)}}va.PROVIDER_ID="password";va.EMAIL_PASSWORD_SIGN_IN_METHOD="password";va.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class cu extends YE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends cu{constructor(){super("facebook.com")}static credential(e){return js._fromParams({providerId:Ni.PROVIDER_ID,signInMethod:Ni.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ni.credentialFromTaggedObject(e)}static credentialFromError(e){return Ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ni.credential(e.oauthAccessToken)}catch{return null}}}Ni.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ni.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends cu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return js._fromParams({providerId:Oi.PROVIDER_ID,signInMethod:Oi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Oi.credentialFromTaggedObject(e)}static credentialFromError(e){return Oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Oi.credential(n,r)}catch{return null}}}Oi.GOOGLE_SIGN_IN_METHOD="google.com";Oi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li extends cu{constructor(){super("github.com")}static credential(e){return js._fromParams({providerId:Li.PROVIDER_ID,signInMethod:Li.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Li.credentialFromTaggedObject(e)}static credentialFromError(e){return Li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Li.credential(e.oauthAccessToken)}catch{return null}}}Li.GITHUB_SIGN_IN_METHOD="github.com";Li.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends cu{constructor(){super("twitter.com")}static credential(e,n){return js._fromParams({providerId:Mi.PROVIDER_ID,signInMethod:Mi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mi.credentialFromTaggedObject(e)}static credentialFromError(e){return Mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mi.credential(n,r)}catch{return null}}}Mi.TWITTER_SIGN_IN_METHOD="twitter.com";Mi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mP(t,e){return uu(t,"POST","/v1/accounts:signUp",Zi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,o=!1){const a=await ur._fromIdTokenResponse(e,r,o),u=q_(r);return new Bs({user:a,providerId:u,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const o=q_(r);return new Bs({user:e,providerId:o,_tokenResponse:r,operationType:n})}}function q_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd extends oi{constructor(e,n,r,o){var a;super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,gd.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,o){return new gd(e,n,r,o)}}function XE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?gd._fromErrorAndOperation(t,a,e,r):a})}async function gP(t,e,n=!1){const r=await zl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Bs._forOperation(t,"link",r)}/**
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
 */async function yP(t,e,n=!1){const{auth:r}=t;if(zn(r.app))return Promise.reject(ei(r));const o="reauthenticate";try{const a=await zl(t,XE(r,o,e,t),n);Te(a.idToken,r,"internal-error");const u=Mm(a.idToken);Te(u,r,"internal-error");const{sub:h}=u;return Te(t.uid===h,r,"user-mismatch"),Bs._forOperation(t,o,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&fr(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JE(t,e,n=!1){if(zn(t.app))return Promise.reject(ei(t));const r="signIn",o=await XE(t,r,e),a=await Bs._fromIdTokenResponse(t,r,o);return n||await t._updateCurrentUser(a.user),a}async function vP(t,e){return JE(Gs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t){const e=Gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function _P(t,e,n){if(zn(t.app))return Promise.reject(ei(t));const r=Gs(t),u=await Xp(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",mP).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&ZE(t),f}),h=await Bs._fromIdTokenResponse(r,"signIn",u);return await r._updateCurrentUser(h.user),h}function wP(t,e,n){return zn(t.app)?Promise.reject(ei(t)):vP(tn(t),va.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ZE(t),r})}function EP(t,e,n,r){return tn(t).onIdTokenChanged(e,n,r)}function IP(t,e,n){return tn(t).beforeAuthStateChanged(e,n)}function TP(t,e,n,r){return tn(t).onAuthStateChanged(e,n,r)}function SP(t){return tn(t).signOut()}const yd="__sak";/**
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
 */class eI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(yd,"1"),this.storage.removeItem(yd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=1e3,bP=10;class tI extends eI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=GE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&e(n,o,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,h,f)=>{this.notifyListeners(u,f)});return}const r=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(r);!n&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);z1()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,bP):o()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tI.type="LOCAL";const CP=tI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI extends eI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nI.type="SESSION";const rI=nI;/**
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
 */function RP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const r=new Qd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:o,data:a}=n.data,u=this.handlersMap[o];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const h=Array.from(u).map(async m=>m(n.origin,a)),f=await RP(h);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class PP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let a,u;return new Promise((h,f)=>{const m=jm("",20);o.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:o,onMessage(_){const w=_;if(w.data.eventId===m)switch(w.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(w.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(){return window}function xP(t){Rr().location.href=t}/**
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
 */function iI(){return typeof Rr().WorkerGlobalScope<"u"&&typeof Rr().importScripts=="function"}async function kP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NP(){return iI()?self:null}/**
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
 */const sI="firebaseLocalStorageDb",OP=1,vd="firebaseLocalStorage",oI="fbase_key";class du{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yd(t,e){return t.transaction([vd],e?"readwrite":"readonly").objectStore(vd)}function LP(){const t=indexedDB.deleteDatabase(sI);return new du(t).toPromise()}function Jp(){const t=indexedDB.open(sI,OP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(vd,{keyPath:oI})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(vd)?e(r):(r.close(),await LP(),e(await Jp()))})})}async function K_(t,e,n){const r=Yd(t,!0).put({[oI]:e,value:n});return new du(r).toPromise()}async function MP(t,e){const n=Yd(t,!1).get(e),r=await new du(n).toPromise();return r===void 0?null:r.value}function Q_(t,e){const n=Yd(t,!0).delete(e);return new du(n).toPromise()}const VP=800,FP=3;class aI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qd._getInstance(NP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kP(),!this.activeServiceWorker)return;this.sender=new PP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jp();return await K_(e,yd,"1"),await Q_(e,yd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>K_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>MP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Q_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const a=Yd(o,!1).getAll();return new du(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:o,value:a}of e)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(a)&&(this.notifyListeners(o,a),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),VP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}aI.type="LOCAL";const UP=aI;new lu(3e4,6e4);/**
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
 */function jP(t,e){return e?Jr(e):(Te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bm extends Fm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xo(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xo(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xo(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BP(t){return JE(t.auth,new Bm(t),t.bypassAuthState)}function $P(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),yP(n,new Bm(t),t.bypassAuthState)}async function zP(t){const{auth:e,user:n}=t;return Te(n,e,"internal-error"),gP(n,new Bm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,n,r,o,a=!1){this.auth=e,this.resolver=r,this.user=o,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:o,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BP;case"linkViaPopup":case"linkViaRedirect":return zP;case"reauthViaPopup":case"reauthViaRedirect":return $P;default:fr(this.auth,"internal-error")}}resolve(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP=new lu(2e3,1e4);class Ko extends lI{constructor(e,n,r,o,a){super(e,n,o,a),this.provider=r,this.authWindow=null,this.pollId=null,Ko.currentPopupAction&&Ko.currentPopupAction.cancel(),Ko.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Te(e,this.auth,"internal-error"),e}async onExecution(){ri(this.filter.length===1,"Popup operations only handle one event");const e=jm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Cr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Cr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ko.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Cr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WP.get())};e()}}Ko.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP="pendingRedirect",Jc=new Map;class HP extends lI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jc.get(this.auth._key());if(!e){try{const r=await qP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jc.set(this.auth._key(),e)}return this.bypassAuthState||Jc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qP(t,e){const n=YP(e),r=QP(t);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function KP(t,e){Jc.set(t._key(),e)}function QP(t){return Jr(t._redirectPersistence)}function YP(t){return Xc(GP,t.config.apiKey,t.name)}async function XP(t,e,n=!1){if(zn(t.app))return Promise.reject(ei(t));const r=Gs(t),o=jP(r,e),u=await new HP(r,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=10*60*1e3;class ZP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ex(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uI(e)){const o=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Cr(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Y_(e))}saveEventToCache(e){this.cachedEventUids.add(Y_(e)),this.lastProcessedEventTime=Date.now()}}function Y_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ex(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tx(t,e={}){return es(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rx=/^https?/;async function ix(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tx(t);for(const n of e)try{if(sx(n))return}catch{}fr(t,"unauthorized-domain")}function sx(t){const e=Qp(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===r}if(!rx.test(n))return!1;if(nx.test(t))return r===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
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
 */const ox=new lu(3e4,6e4);function X_(){const t=Rr().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ax(t){return new Promise((e,n)=>{var r,o,a;function u(){X_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{X_(),n(Cr(t,"network-request-failed"))},timeout:ox.get()})}if(!((o=(r=Rr().gapi)===null||r===void 0?void 0:r.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((a=Rr().gapi)===null||a===void 0)&&a.load)u();else{const h=J1("iframefcb");return Rr()[h]=()=>{gapi.load?u():n(Cr(t,"network-request-failed"))},qE(`${X1()}?onload=${h}`).catch(f=>n(f))}}).catch(e=>{throw Zc=null,e})}let Zc=null;function lx(t){return Zc=Zc||ax(t),Zc}/**
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
 */const ux=new lu(5e3,15e3),cx="__/auth/iframe",dx="emulator/auth/iframe",hx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function px(t){const e=t.config;Te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lm(e,dx):`https://${t.config.authDomain}/${cx}`,r={apiKey:e.apiKey,appName:t.name,v:ya},o=fx.get(t.config.apiHost);o&&(r.eid=o);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${au(r).slice(1)}`}async function mx(t){const e=await lx(t),n=Rr().gapi;return Te(n,t,"internal-error"),e.open({where:document.body,url:px(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hx,dontclear:!0},r=>new Promise(async(o,a)=>{await r.restyle({setHideOnLeave:!1});const u=Cr(t,"network-request-failed"),h=Rr().setTimeout(()=>{a(u)},ux.get());function f(){Rr().clearTimeout(h),o(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
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
 */const gx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yx=500,vx=600,_x="_blank",wx="http://localhost";class J_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ex(t,e,n,r=yx,o=vx){const a=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},gx),{width:r.toString(),height:o.toString(),top:a,left:u}),m=en().toLowerCase();n&&(h=jE(m)?_x:n),FE(m)&&(e=e||wx,f.scrollbars="yes");const v=Object.entries(f).reduce((w,[T,D])=>`${w}${T}=${D},`,"");if($1(m)&&h!=="_self")return Ix(e||"",h),new J_(null);const _=window.open(e||"",h,v);Te(_,t,"popup-blocked");try{_.focus()}catch{}return new J_(_)}function Ix(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Tx="__/auth/handler",Sx="emulator/auth/handler",Ax=encodeURIComponent("fac");async function Z_(t,e,n,r,o,a){Te(t.config.authDomain,t,"auth-domain-config-required"),Te(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ya,eventId:o};if(e instanceof YE){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",cR(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,_]of Object.entries({}))u[v]=_}if(e instanceof cu){const v=e.getScopes().filter(_=>_!=="");v.length>0&&(u.scopes=v.join(","))}t.tenantId&&(u.tid=t.tenantId);const h=u;for(const v of Object.keys(h))h[v]===void 0&&delete h[v];const f=await t._getAppCheckToken(),m=f?`#${Ax}=${encodeURIComponent(f)}`:"";return`${bx(t)}?${au(h).slice(1)}${m}`}function bx({config:t}){return t.emulator?Lm(t,Sx):`https://${t.authDomain}/${Tx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="webStorageSupport";class Cx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rI,this._completeRedirectFn=XP,this._overrideRedirectResult=KP}async _openPopup(e,n,r,o){var a;ri((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Z_(e,n,r,Qp(),o);return Ex(e,u,jm())}async _openRedirect(e,n,r,o){await this._originValidation(e);const a=await Z_(e,n,r,Qp(),o);return xP(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:a}=this.eventManagers[n];return o?Promise.resolve(o):(ri(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mx(e),r=new ZP(e);return n.register("authEvent",o=>(Te(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pp,{type:pp},o=>{var a;const u=(a=o==null?void 0:o[0])===null||a===void 0?void 0:a[pp];u!==void 0&&n(!!u),fr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ix(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return GE()||UE()||Vm()}}const Rx=Cx;var ew="@firebase/auth",tw="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function kx(t){ia(new Us("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;Te(u&&!u.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:u,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:HE(t)},m=new K1(r,o,a,f);return iP(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ia(new Us("auth-internal",e=>{const n=Gs(e.getProvider("auth").getImmediate());return(r=>new Px(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bi(ew,tw,xx(t)),Bi(ew,tw,"esm2017")}/**
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
 */const Dx=5*60,Nx=TE("authIdTokenMaxAge")||Dx;let nw=null;const Ox=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Nx)return;const o=n==null?void 0:n.token;nw!==o&&(nw=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Lx(t=CE()){const e=Nm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rP(t,{popupRedirectResolver:Rx,persistence:[UP,CP,rI]}),r=TE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const u=Ox(a.toString());IP(n,u,()=>u(n.currentUser)),EP(n,h=>u(h))}}const o=EE("auth");return o&&sP(n,`http://${o}`),n}function Mx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Q1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=o=>{const a=Cr("internal-error");a.customData=o,n(a)},r.type="text/javascript",r.charset="UTF-8",Mx().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});kx("Browser");var Vx="firebase",Fx="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bi(Vx,Fx,"app");var rw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $i,cI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,A){function C(){}C.prototype=A.prototype,b.D=A.prototype,b.prototype=new C,b.prototype.constructor=b,b.C=function(k,N,V){for(var P=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)P[Ze-2]=arguments[Ze];return A.prototype[N].apply(k,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(b,A,C){C||(C=0);var k=Array(16);if(typeof A=="string")for(var N=0;16>N;++N)k[N]=A.charCodeAt(C++)|A.charCodeAt(C++)<<8|A.charCodeAt(C++)<<16|A.charCodeAt(C++)<<24;else for(N=0;16>N;++N)k[N]=A[C++]|A[C++]<<8|A[C++]<<16|A[C++]<<24;A=b.g[0],C=b.g[1],N=b.g[2];var V=b.g[3],P=A+(V^C&(N^V))+k[0]+3614090360&4294967295;A=C+(P<<7&4294967295|P>>>25),P=V+(N^A&(C^N))+k[1]+3905402710&4294967295,V=A+(P<<12&4294967295|P>>>20),P=N+(C^V&(A^C))+k[2]+606105819&4294967295,N=V+(P<<17&4294967295|P>>>15),P=C+(A^N&(V^A))+k[3]+3250441966&4294967295,C=N+(P<<22&4294967295|P>>>10),P=A+(V^C&(N^V))+k[4]+4118548399&4294967295,A=C+(P<<7&4294967295|P>>>25),P=V+(N^A&(C^N))+k[5]+1200080426&4294967295,V=A+(P<<12&4294967295|P>>>20),P=N+(C^V&(A^C))+k[6]+2821735955&4294967295,N=V+(P<<17&4294967295|P>>>15),P=C+(A^N&(V^A))+k[7]+4249261313&4294967295,C=N+(P<<22&4294967295|P>>>10),P=A+(V^C&(N^V))+k[8]+1770035416&4294967295,A=C+(P<<7&4294967295|P>>>25),P=V+(N^A&(C^N))+k[9]+2336552879&4294967295,V=A+(P<<12&4294967295|P>>>20),P=N+(C^V&(A^C))+k[10]+4294925233&4294967295,N=V+(P<<17&4294967295|P>>>15),P=C+(A^N&(V^A))+k[11]+2304563134&4294967295,C=N+(P<<22&4294967295|P>>>10),P=A+(V^C&(N^V))+k[12]+1804603682&4294967295,A=C+(P<<7&4294967295|P>>>25),P=V+(N^A&(C^N))+k[13]+4254626195&4294967295,V=A+(P<<12&4294967295|P>>>20),P=N+(C^V&(A^C))+k[14]+2792965006&4294967295,N=V+(P<<17&4294967295|P>>>15),P=C+(A^N&(V^A))+k[15]+1236535329&4294967295,C=N+(P<<22&4294967295|P>>>10),P=A+(N^V&(C^N))+k[1]+4129170786&4294967295,A=C+(P<<5&4294967295|P>>>27),P=V+(C^N&(A^C))+k[6]+3225465664&4294967295,V=A+(P<<9&4294967295|P>>>23),P=N+(A^C&(V^A))+k[11]+643717713&4294967295,N=V+(P<<14&4294967295|P>>>18),P=C+(V^A&(N^V))+k[0]+3921069994&4294967295,C=N+(P<<20&4294967295|P>>>12),P=A+(N^V&(C^N))+k[5]+3593408605&4294967295,A=C+(P<<5&4294967295|P>>>27),P=V+(C^N&(A^C))+k[10]+38016083&4294967295,V=A+(P<<9&4294967295|P>>>23),P=N+(A^C&(V^A))+k[15]+3634488961&4294967295,N=V+(P<<14&4294967295|P>>>18),P=C+(V^A&(N^V))+k[4]+3889429448&4294967295,C=N+(P<<20&4294967295|P>>>12),P=A+(N^V&(C^N))+k[9]+568446438&4294967295,A=C+(P<<5&4294967295|P>>>27),P=V+(C^N&(A^C))+k[14]+3275163606&4294967295,V=A+(P<<9&4294967295|P>>>23),P=N+(A^C&(V^A))+k[3]+4107603335&4294967295,N=V+(P<<14&4294967295|P>>>18),P=C+(V^A&(N^V))+k[8]+1163531501&4294967295,C=N+(P<<20&4294967295|P>>>12),P=A+(N^V&(C^N))+k[13]+2850285829&4294967295,A=C+(P<<5&4294967295|P>>>27),P=V+(C^N&(A^C))+k[2]+4243563512&4294967295,V=A+(P<<9&4294967295|P>>>23),P=N+(A^C&(V^A))+k[7]+1735328473&4294967295,N=V+(P<<14&4294967295|P>>>18),P=C+(V^A&(N^V))+k[12]+2368359562&4294967295,C=N+(P<<20&4294967295|P>>>12),P=A+(C^N^V)+k[5]+4294588738&4294967295,A=C+(P<<4&4294967295|P>>>28),P=V+(A^C^N)+k[8]+2272392833&4294967295,V=A+(P<<11&4294967295|P>>>21),P=N+(V^A^C)+k[11]+1839030562&4294967295,N=V+(P<<16&4294967295|P>>>16),P=C+(N^V^A)+k[14]+4259657740&4294967295,C=N+(P<<23&4294967295|P>>>9),P=A+(C^N^V)+k[1]+2763975236&4294967295,A=C+(P<<4&4294967295|P>>>28),P=V+(A^C^N)+k[4]+1272893353&4294967295,V=A+(P<<11&4294967295|P>>>21),P=N+(V^A^C)+k[7]+4139469664&4294967295,N=V+(P<<16&4294967295|P>>>16),P=C+(N^V^A)+k[10]+3200236656&4294967295,C=N+(P<<23&4294967295|P>>>9),P=A+(C^N^V)+k[13]+681279174&4294967295,A=C+(P<<4&4294967295|P>>>28),P=V+(A^C^N)+k[0]+3936430074&4294967295,V=A+(P<<11&4294967295|P>>>21),P=N+(V^A^C)+k[3]+3572445317&4294967295,N=V+(P<<16&4294967295|P>>>16),P=C+(N^V^A)+k[6]+76029189&4294967295,C=N+(P<<23&4294967295|P>>>9),P=A+(C^N^V)+k[9]+3654602809&4294967295,A=C+(P<<4&4294967295|P>>>28),P=V+(A^C^N)+k[12]+3873151461&4294967295,V=A+(P<<11&4294967295|P>>>21),P=N+(V^A^C)+k[15]+530742520&4294967295,N=V+(P<<16&4294967295|P>>>16),P=C+(N^V^A)+k[2]+3299628645&4294967295,C=N+(P<<23&4294967295|P>>>9),P=A+(N^(C|~V))+k[0]+4096336452&4294967295,A=C+(P<<6&4294967295|P>>>26),P=V+(C^(A|~N))+k[7]+1126891415&4294967295,V=A+(P<<10&4294967295|P>>>22),P=N+(A^(V|~C))+k[14]+2878612391&4294967295,N=V+(P<<15&4294967295|P>>>17),P=C+(V^(N|~A))+k[5]+4237533241&4294967295,C=N+(P<<21&4294967295|P>>>11),P=A+(N^(C|~V))+k[12]+1700485571&4294967295,A=C+(P<<6&4294967295|P>>>26),P=V+(C^(A|~N))+k[3]+2399980690&4294967295,V=A+(P<<10&4294967295|P>>>22),P=N+(A^(V|~C))+k[10]+4293915773&4294967295,N=V+(P<<15&4294967295|P>>>17),P=C+(V^(N|~A))+k[1]+2240044497&4294967295,C=N+(P<<21&4294967295|P>>>11),P=A+(N^(C|~V))+k[8]+1873313359&4294967295,A=C+(P<<6&4294967295|P>>>26),P=V+(C^(A|~N))+k[15]+4264355552&4294967295,V=A+(P<<10&4294967295|P>>>22),P=N+(A^(V|~C))+k[6]+2734768916&4294967295,N=V+(P<<15&4294967295|P>>>17),P=C+(V^(N|~A))+k[13]+1309151649&4294967295,C=N+(P<<21&4294967295|P>>>11),P=A+(N^(C|~V))+k[4]+4149444226&4294967295,A=C+(P<<6&4294967295|P>>>26),P=V+(C^(A|~N))+k[11]+3174756917&4294967295,V=A+(P<<10&4294967295|P>>>22),P=N+(A^(V|~C))+k[2]+718787259&4294967295,N=V+(P<<15&4294967295|P>>>17),P=C+(V^(N|~A))+k[9]+3951481745&4294967295,b.g[0]=b.g[0]+A&4294967295,b.g[1]=b.g[1]+(N+(P<<21&4294967295|P>>>11))&4294967295,b.g[2]=b.g[2]+N&4294967295,b.g[3]=b.g[3]+V&4294967295}r.prototype.u=function(b,A){A===void 0&&(A=b.length);for(var C=A-this.blockSize,k=this.B,N=this.h,V=0;V<A;){if(N==0)for(;V<=C;)o(this,b,V),V+=this.blockSize;if(typeof b=="string"){for(;V<A;)if(k[N++]=b.charCodeAt(V++),N==this.blockSize){o(this,k),N=0;break}}else for(;V<A;)if(k[N++]=b[V++],N==this.blockSize){o(this,k),N=0;break}}this.h=N,this.o+=A},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var A=1;A<b.length-8;++A)b[A]=0;var C=8*this.o;for(A=b.length-8;A<b.length;++A)b[A]=C&255,C/=256;for(this.u(b),b=Array(16),A=C=0;4>A;++A)for(var k=0;32>k;k+=8)b[C++]=this.g[A]>>>k&255;return b};function a(b,A){var C=h;return Object.prototype.hasOwnProperty.call(C,b)?C[b]:C[b]=A(b)}function u(b,A){this.h=A;for(var C=[],k=!0,N=b.length-1;0<=N;N--){var V=b[N]|0;k&&V==A||(C[N]=V,k=!1)}this.g=C}var h={};function f(b){return-128<=b&&128>b?a(b,function(A){return new u([A|0],0>A?-1:0)}):new u([b|0],0>b?-1:0)}function m(b){if(isNaN(b)||!isFinite(b))return _;if(0>b)return x(m(-b));for(var A=[],C=1,k=0;b>=C;k++)A[k]=b/C|0,C*=4294967296;return new u(A,0)}function v(b,A){if(b.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b.charAt(0)=="-")return x(v(b.substring(1),A));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=m(Math.pow(A,8)),k=_,N=0;N<b.length;N+=8){var V=Math.min(8,b.length-N),P=parseInt(b.substring(N,N+V),A);8>V?(V=m(Math.pow(A,V)),k=k.j(V).add(m(P))):(k=k.j(C),k=k.add(m(P)))}return k}var _=f(0),w=f(1),T=f(16777216);t=u.prototype,t.m=function(){if(L(this))return-x(this).m();for(var b=0,A=1,C=0;C<this.g.length;C++){var k=this.i(C);b+=(0<=k?k:4294967296+k)*A,A*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(L(this))return"-"+x(this).toString(b);for(var A=m(Math.pow(b,6)),C=this,k="";;){var N=z(C,A).g;C=K(C,N.j(A));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(b);if(C=N,D(C))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(var A=0;A<b.g.length;A++)if(b.g[A]!=0)return!1;return!0}function L(b){return b.h==-1}t.l=function(b){return b=K(this,b),L(b)?-1:D(b)?0:1};function x(b){for(var A=b.g.length,C=[],k=0;k<A;k++)C[k]=~b.g[k];return new u(C,~b.h).add(w)}t.abs=function(){return L(this)?x(this):this},t.add=function(b){for(var A=Math.max(this.g.length,b.g.length),C=[],k=0,N=0;N<=A;N++){var V=k+(this.i(N)&65535)+(b.i(N)&65535),P=(V>>>16)+(this.i(N)>>>16)+(b.i(N)>>>16);k=P>>>16,V&=65535,P&=65535,C[N]=P<<16|V}return new u(C,C[C.length-1]&-2147483648?-1:0)};function K(b,A){return b.add(x(A))}t.j=function(b){if(D(this)||D(b))return _;if(L(this))return L(b)?x(this).j(x(b)):x(x(this).j(b));if(L(b))return x(this.j(x(b)));if(0>this.l(T)&&0>b.l(T))return m(this.m()*b.m());for(var A=this.g.length+b.g.length,C=[],k=0;k<2*A;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var N=0;N<b.g.length;N++){var V=this.i(k)>>>16,P=this.i(k)&65535,Ze=b.i(N)>>>16,Ye=b.i(N)&65535;C[2*k+2*N]+=P*Ye,q(C,2*k+2*N),C[2*k+2*N+1]+=V*Ye,q(C,2*k+2*N+1),C[2*k+2*N+1]+=P*Ze,q(C,2*k+2*N+1),C[2*k+2*N+2]+=V*Ze,q(C,2*k+2*N+2)}for(k=0;k<A;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=A;k<2*A;k++)C[k]=0;return new u(C,0)};function q(b,A){for(;(b[A]&65535)!=b[A];)b[A+1]+=b[A]>>>16,b[A]&=65535,A++}function G(b,A){this.g=b,this.h=A}function z(b,A){if(D(A))throw Error("division by zero");if(D(b))return new G(_,_);if(L(b))return A=z(x(b),A),new G(x(A.g),x(A.h));if(L(A))return A=z(b,x(A)),new G(x(A.g),A.h);if(30<b.g.length){if(L(b)||L(A))throw Error("slowDivide_ only works with positive integers.");for(var C=w,k=A;0>=k.l(b);)C=X(C),k=X(k);var N=Q(C,1),V=Q(k,1);for(k=Q(k,2),C=Q(C,2);!D(k);){var P=V.add(k);0>=P.l(b)&&(N=N.add(C),V=P),k=Q(k,1),C=Q(C,1)}return A=K(b,N.j(A)),new G(N,A)}for(N=_;0<=b.l(A);){for(C=Math.max(1,Math.floor(b.m()/A.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=m(C),P=V.j(A);L(P)||0<P.l(b);)C-=k,V=m(C),P=V.j(A);D(V)&&(V=w),N=N.add(V),b=K(b,P)}return new G(N,b)}t.A=function(b){return z(this,b).h},t.and=function(b){for(var A=Math.max(this.g.length,b.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)&b.i(k);return new u(C,this.h&b.h)},t.or=function(b){for(var A=Math.max(this.g.length,b.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)|b.i(k);return new u(C,this.h|b.h)},t.xor=function(b){for(var A=Math.max(this.g.length,b.g.length),C=[],k=0;k<A;k++)C[k]=this.i(k)^b.i(k);return new u(C,this.h^b.h)};function X(b){for(var A=b.g.length+1,C=[],k=0;k<A;k++)C[k]=b.i(k)<<1|b.i(k-1)>>>31;return new u(C,b.h)}function Q(b,A){var C=A>>5;A%=32;for(var k=b.g.length-C,N=[],V=0;V<k;V++)N[V]=0<A?b.i(V+C)>>>A|b.i(V+C+1)<<32-A:b.i(V+C);return new u(N,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cI=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=m,u.fromString=v,$i=u}).apply(typeof rw<"u"?rw:typeof self<"u"?self:typeof window<"u"?window:{});var Vc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dI,Rl,hI,ed,Zp,fI,pI,mI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,E){return c==Array.prototype||c==Object.prototype||(c[g]=E.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vc=="object"&&Vc];for(var g=0;g<c.length;++g){var E=c[g];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var r=n(this);function o(c,g){if(g)e:{var E=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var j=c[S];if(!(j in E))break e;E=E[j]}c=c[c.length-1],S=E[c],g=g(S),g!=S&&g!=null&&e(E,c,{configurable:!0,writable:!0,value:g})}}function a(c,g){c instanceof String&&(c+="");var E=0,S=!1,j={next:function(){if(!S&&E<c.length){var H=E++;return{value:g(H,c[H]),done:!1}}return S=!0,{done:!0,value:void 0}}};return j[Symbol.iterator]=function(){return j},j}o("Array.prototype.values",function(c){return c||function(){return a(this,function(g,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},h=this||self;function f(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function m(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function v(c,g,E){return c.call.apply(c.bind,arguments)}function _(c,g,E){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var j=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(j,S),c.apply(g,j)}}return function(){return c.apply(g,arguments)}}function w(c,g,E){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:_,w.apply(null,arguments)}function T(c,g){var E=Array.prototype.slice.call(arguments,1);return function(){var S=E.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function D(c,g){function E(){}E.prototype=g.prototype,c.aa=g.prototype,c.prototype=new E,c.prototype.constructor=c,c.Qb=function(S,j,H){for(var le=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)le[Xe-2]=arguments[Xe];return g.prototype[j].apply(S,le)}}function L(c){const g=c.length;if(0<g){const E=Array(g);for(let S=0;S<g;S++)E[S]=c[S];return E}return[]}function x(c,g){for(let E=1;E<arguments.length;E++){const S=arguments[E];if(f(S)){const j=c.length||0,H=S.length||0;c.length=j+H;for(let le=0;le<H;le++)c[j+le]=S[le]}else c.push(S)}}class K{constructor(g,E){this.i=g,this.j=E,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function q(c){return/^[\s\xa0]*$/.test(c)}function G(){var c=h.navigator;return c&&(c=c.userAgent)?c:""}function z(c){return z[" "](c),c}z[" "]=function(){};var X=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function Q(c,g,E){for(const S in c)g.call(E,c[S],S,c)}function b(c,g){for(const E in c)g.call(void 0,c[E],E,c)}function A(c){const g={};for(const E in c)g[E]=c[E];return g}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(c,g){let E,S;for(let j=1;j<arguments.length;j++){S=arguments[j];for(E in S)c[E]=S[E];for(let H=0;H<C.length;H++)E=C[H],Object.prototype.hasOwnProperty.call(S,E)&&(c[E]=S[E])}}function N(c){var g=1;c=c.split(":");const E=[];for(;0<g&&c.length;)E.push(c.shift()),g--;return c.length&&E.push(c.join(":")),E}function V(c){h.setTimeout(()=>{throw c},0)}function P(){var c=he;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Ze{constructor(){this.h=this.g=null}add(g,E){const S=Ye.get();S.set(g,E),this.h?this.h.next=S:this.g=S,this.h=S}}var Ye=new K(()=>new pt,c=>c.reset());class pt{constructor(){this.next=this.g=this.h=null}set(g,E){this.h=g,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let Ve,oe=!1,he=new Ze,ue=()=>{const c=h.Promise.resolve(void 0);Ve=()=>{c.then(F)}};var F=()=>{for(var c;c=P();){try{c.h.call(c.g)}catch(E){V(E)}var g=Ye;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}oe=!1};function Y(){this.s=this.s,this.C=this.C}Y.prototype.s=!1,Y.prototype.ma=function(){this.s||(this.s=!0,this.N())},Y.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ce=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const E=()=>{};h.addEventListener("test",E,g),h.removeEventListener("test",E,g)}catch{}return c}();function Ae(c,g){if(pe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var E=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(X){e:{try{z(g.nodeName);var j=!0;break e}catch{}j=!1}j||(g=null)}}else E=="mouseover"?g=c.fromElement:E=="mouseout"&&(g=c.toElement);this.relatedTarget=g,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Pe[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Ae.aa.h.call(this)}}D(Ae,pe);var Pe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Ne=0;function Oe(c,g,E,S,j){this.listener=c,this.proxy=null,this.src=g,this.type=E,this.capture=!!S,this.ha=j,this.key=++Ne,this.da=this.fa=!1}function tt(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function nn(c){this.src=c,this.g={},this.h=0}nn.prototype.add=function(c,g,E,S,j){var H=c.toString();c=this.g[H],c||(c=this.g[H]=[],this.h++);var le=cn(c,g,S,j);return-1<le?(g=c[le],E||(g.fa=!1)):(g=new Oe(g,this.src,H,!!S,j),g.fa=E,c.push(g)),g};function Je(c,g){var E=g.type;if(E in c.g){var S=c.g[E],j=Array.prototype.indexOf.call(S,g,void 0),H;(H=0<=j)&&Array.prototype.splice.call(S,j,1),H&&(tt(g),c.g[E].length==0&&(delete c.g[E],c.h--))}}function cn(c,g,E,S){for(var j=0;j<c.length;++j){var H=c[j];if(!H.da&&H.listener==g&&H.capture==!!E&&H.ha==S)return j}return-1}var ns="closure_lm_"+(1e6*Math.random()|0),Qs={};function ba(c,g,E,S,j){if(Array.isArray(g)){for(var H=0;H<g.length;H++)ba(c,g[H],E,S,j);return null}return E=Pa(E),c&&c[De]?c.K(g,E,m(S)?!!S.capture:!1,j):Ca(c,g,E,!1,S,j)}function Ca(c,g,E,S,j,H){if(!g)throw Error("Invalid event type");var le=m(j)?!!j.capture:!!j,Xe=Xs(c);if(Xe||(c[ns]=Xe=new nn(c)),E=Xe.add(g,E,S,le,H),E.proxy)return E;if(S=vu(),E.proxy=S,S.src=c,S.listener=E,c.addEventListener)Ce||(j=le),j===void 0&&(j=!1),c.addEventListener(g.toString(),S,j);else if(c.attachEvent)c.attachEvent(Or(g.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return E}function vu(){function c(E){return g.call(c.src,c.listener,E)}const g=Ra;return c}function Ys(c,g,E,S,j){if(Array.isArray(g))for(var H=0;H<g.length;H++)Ys(c,g[H],E,S,j);else S=m(S)?!!S.capture:!!S,E=Pa(E),c&&c[De]?(c=c.i,g=String(g).toString(),g in c.g&&(H=c.g[g],E=cn(H,E,S,j),-1<E&&(tt(H[E]),Array.prototype.splice.call(H,E,1),H.length==0&&(delete c.g[g],c.h--)))):c&&(c=Xs(c))&&(g=c.g[g.toString()],c=-1,g&&(c=cn(g,E,S,j)),(E=-1<c?g[c]:null)&&Nr(E))}function Nr(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[De])Je(g.i,c);else{var E=c.type,S=c.proxy;g.removeEventListener?g.removeEventListener(E,S,c.capture):g.detachEvent?g.detachEvent(Or(E),S):g.addListener&&g.removeListener&&g.removeListener(S),(E=Xs(g))?(Je(E,c),E.h==0&&(E.src=null,g[ns]=null)):tt(c)}}}function Or(c){return c in Qs?Qs[c]:Qs[c]="on"+c}function Ra(c,g){if(c.da)c=!0;else{g=new Ae(g,this);var E=c.listener,S=c.ha||c.src;c.fa&&Nr(c),c=E.call(S,g)}return c}function Xs(c){return c=c[ns],c instanceof nn?c:null}var Js="__closure_events_fn_"+(1e9*Math.random()>>>0);function Pa(c){return typeof c=="function"?c:(c[Js]||(c[Js]=function(g){return c.handleEvent(g)}),c[Js])}function It(){Y.call(this),this.i=new nn(this),this.M=this,this.F=null}D(It,Y),It.prototype[De]=!0,It.prototype.removeEventListener=function(c,g,E,S){Ys(this,c,g,E,S)};function Tt(c,g){var E,S=c.F;if(S)for(E=[];S;S=S.F)E.push(S);if(c=c.M,S=g.type||g,typeof g=="string")g=new pe(g,c);else if(g instanceof pe)g.target=g.target||c;else{var j=g;g=new pe(S,c),k(g,j)}if(j=!0,E)for(var H=E.length-1;0<=H;H--){var le=g.g=E[H];j=Lr(le,S,!0,g)&&j}if(le=g.g=c,j=Lr(le,S,!0,g)&&j,j=Lr(le,S,!1,g)&&j,E)for(H=0;H<E.length;H++)le=g.g=E[H],j=Lr(le,S,!1,g)&&j}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var E=c.g[g],S=0;S<E.length;S++)tt(E[S]);delete c.g[g],c.h--}}this.F=null},It.prototype.K=function(c,g,E,S){return this.i.add(String(c),g,!1,E,S)},It.prototype.L=function(c,g,E,S){return this.i.add(String(c),g,!0,E,S)};function Lr(c,g,E,S){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var j=!0,H=0;H<g.length;++H){var le=g[H];if(le&&!le.da&&le.capture==E){var Xe=le.listener,St=le.ha||le.src;le.fa&&Je(c.i,le),j=Xe.call(St,S)!==!1&&j}}return j&&!S.defaultPrevented}function xa(c,g,E){if(typeof c=="function")E&&(c=w(c,E));else if(c&&typeof c.handleEvent=="function")c=w(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:h.setTimeout(c,g||0)}function ai(c){c.g=xa(()=>{c.g=null,c.i&&(c.i=!1,ai(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class rs extends Y{constructor(g,E){super(),this.m=g,this.l=E,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:ai(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function is(c){Y.call(this),this.h=c,this.g={}}D(is,Y);var ka=[];function Da(c){Q(c.g,function(g,E){this.g.hasOwnProperty(E)&&Nr(g)},c),c.g={}}is.prototype.N=function(){is.aa.N.call(this),Da(this)},is.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Na=h.JSON.stringify,Oa=h.JSON.parse,La=class{stringify(c){return h.JSON.stringify(c,void 0)}parse(c){return h.JSON.parse(c,void 0)}};function ss(){}ss.prototype.h=null;function Zs(c){return c.h||(c.h=c.i())}function eo(){}var Dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){pe.call(this,"d")}D(pr,pe);function to(){pe.call(this,"c")}D(to,pe);var mr={},Ma=null;function os(){return Ma=Ma||new It}mr.La="serverreachability";function Va(c){pe.call(this,mr.La,c)}D(Va,pe);function Mr(c){const g=os();Tt(g,new Va(g))}mr.STAT_EVENT="statevent";function Fa(c,g){pe.call(this,mr.STAT_EVENT,c),this.stat=g}D(Fa,pe);function mt(c){const g=os();Tt(g,new Fa(g,c))}mr.Ma="timingevent";function no(c,g){pe.call(this,mr.Ma,c),this.size=g}D(no,pe);function Kn(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return h.setTimeout(function(){c()},g)}function as(){this.g=!0}as.prototype.xa=function(){this.g=!1};function ls(c,g,E,S,j,H){c.info(function(){if(c.g)if(H)for(var le="",Xe=H.split("&"),St=0;St<Xe.length;St++){var Be=Xe[St].split("=");if(1<Be.length){var xt=Be[0];Be=Be[1];var vt=xt.split("_");le=2<=vt.length&&vt[1]=="type"?le+(xt+"="+Be+"&"):le+(xt+"=redacted&")}}else le=null;else le=H;return"XMLHTTP REQ ("+S+") [attempt "+j+"]: "+g+`
`+E+`
`+le})}function ro(c,g,E,S,j,H,le){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+j+"]: "+g+`
`+E+`
`+H+" "+le})}function Qn(c,g,E,S){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+Eh(c,E)+(S?" "+S:"")})}function Ua(c,g){c.info(function(){return"TIMEOUT: "+g})}as.prototype.info=function(){};function Eh(c,g){if(!c.g)return g;if(!g)return null;try{var E=JSON.parse(g);if(E){for(c=0;c<E.length;c++)if(Array.isArray(E[c])){var S=E[c];if(!(2>S.length)){var j=S[1];if(Array.isArray(j)&&!(1>j.length)){var H=j[0];if(H!="noop"&&H!="stop"&&H!="close")for(var le=1;le<j.length;le++)j[le]=""}}}}return Na(E)}catch{return g}}var io={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_u={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yn;function us(){}D(us,ss),us.prototype.g=function(){return new XMLHttpRequest},us.prototype.i=function(){return{}},Yn=new us;function Xn(c,g,E,S){this.j=c,this.i=g,this.l=E,this.R=S||1,this.U=new is(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wu}function wu(){this.i=null,this.g="",this.h=!1}var ja={},so={};function oo(c,g,E){c.L=1,c.v=hi(En(g)),c.m=E,c.P=!0,Ba(c,null)}function Ba(c,g){c.F=Date.now(),nt(c),c.A=En(c.v);var E=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),pi(E.i,"t",S),c.C=0,E=c.j.J,c.h=new wu,c.g=Fu(c.j,E?g:null,!c.m),0<c.O&&(c.M=new rs(w(c.Y,c,c.g),c.O)),g=c.U,E=c.g,S=c.ca;var j="readystatechange";Array.isArray(j)||(j&&(ka[0]=j.toString()),j=ka);for(var H=0;H<j.length;H++){var le=ba(E,j[H],S||g.handleEvent,!1,g.h||g);if(!le)break;g.g[le.key]=le}g=c.H?A(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Mr(),ls(c.i,c.u,c.A,c.l,c.R,c.m)}Xn.prototype.ca=function(c){c=c.target;const g=this.M;g&&hn(c)==3?g.j():this.Y(c)},Xn.prototype.Y=function(c){try{if(c==this.g)e:{const vt=hn(this.g);var g=this.g.Ba();const Ln=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||qa(this.g)))){this.J||vt!=4||g==7||(g==8||0>=Ln?Mr(3):Mr(2)),cs(this);var E=this.g.Z();this.X=E;t:if(Eu(this)){var S=qa(this.g);c="";var j=S.length,H=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nn(this),li(this);var le="";break t}this.h.i=new h.TextDecoder}for(g=0;g<j;g++)this.h.h=!0,c+=this.h.i.decode(S[g],{stream:!(H&&g==j-1)});S.length=0,this.h.g+=c,this.C=0,le=this.h.g}else le=this.g.oa();if(this.o=E==200,ro(this.i,this.u,this.A,this.l,this.R,vt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Xe,St=this.g;if((Xe=St.g?St.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(Xe)){var Be=Xe;break t}}Be=null}if(E=Be)Qn(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$a(this,E);else{this.o=!1,this.s=3,mt(12),Nn(this),li(this);break e}}if(this.P){E=!0;let Tn;for(;!this.J&&this.C<le.length;)if(Tn=Ih(this,le),Tn==so){vt==4&&(this.s=4,mt(14),E=!1),Qn(this.i,this.l,null,"[Incomplete Response]");break}else if(Tn==ja){this.s=4,mt(15),Qn(this.i,this.l,le,"[Invalid Chunk]"),E=!1;break}else Qn(this.i,this.l,Tn,null),$a(this,Tn);if(Eu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||le.length!=0||this.h.h||(this.s=1,mt(16),E=!1),this.o=this.o&&E,!E)Qn(this.i,this.l,le,"[Invalid Chunked Response]"),Nn(this),li(this);else if(0<le.length&&!this.W){this.W=!0;var xt=this.j;xt.g==this&&xt.ba&&!xt.M&&(xt.j.info("Great, no buffering proxy detected. Bytes received: "+le.length),Qa(xt),xt.M=!0,mt(11))}}else Qn(this.i,this.l,le,null),$a(this,le);vt==4&&Nn(this),this.o&&!this.J&&(vt==4?vo(this.j,this):(this.o=!1,nt(this)))}else fo(this.g),E==400&&0<le.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Nn(this),li(this)}}}catch{}finally{}};function Eu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function Ih(c,g){var E=c.C,S=g.indexOf(`
`,E);return S==-1?so:(E=Number(g.substring(E,S)),isNaN(E)?ja:(S+=1,S+E>g.length?so:(g=g.slice(S,S+E),c.C=S+E,g)))}Xn.prototype.cancel=function(){this.J=!0,Nn(this)};function nt(c){c.S=Date.now()+c.I,Iu(c,c.I)}function Iu(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Kn(w(c.ba,c),g)}function cs(c){c.B&&(h.clearTimeout(c.B),c.B=null)}Xn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ua(this.i,this.A),this.L!=2&&(Mr(),mt(17)),Nn(this),this.s=2,li(this)):Iu(this,this.S-c)};function li(c){c.j.G==0||c.J||vo(c.j,c)}function Nn(c){cs(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,Da(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function $a(c,g){try{var E=c.j;if(E.G!=0&&(E.g==c||rn(E.h,c))){if(!c.K&&rn(E.h,c)&&E.G==3){try{var S=E.Da.g.parse(g)}catch{S=null}if(Array.isArray(S)&&S.length==3){var j=S;if(j[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<c.F)yo(E),nr(E);else break e;go(E),mt(18)}}else E.za=j[1],0<E.za-E.T&&37500>j[2]&&E.F&&E.v==0&&!E.C&&(E.C=Kn(w(E.Za,E),6e3));if(1>=Su(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else Br(E,11)}else if((c.K||E.g==c)&&yo(E),!q(g))for(j=E.Da.g.parse(g),g=0;g<j.length;g++){let Be=j[g];if(E.T=Be[0],Be=Be[1],E.G==2)if(Be[0]=="c"){E.K=Be[1],E.ia=Be[2];const xt=Be[3];xt!=null&&(E.la=xt,E.j.info("VER="+E.la));const vt=Be[4];vt!=null&&(E.Aa=vt,E.j.info("SVER="+E.Aa));const Ln=Be[5];Ln!=null&&typeof Ln=="number"&&0<Ln&&(S=1.5*Ln,E.L=S,E.j.info("backChannelRequestTimeoutMs_="+S)),S=E;const Tn=c.g;if(Tn){const ys=Tn.g?Tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ys){var H=S.h;H.g||ys.indexOf("spdy")==-1&&ys.indexOf("quic")==-1&&ys.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(za(H,H.h),H.h=null))}if(S.D){const wo=Tn.g?Tn.g.getResponseHeader("X-HTTP-Session-Id"):null;wo&&(S.ya=wo,et(S.I,S.D,wo))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-c.F,E.j.info("Handshake RTT: "+E.R+"ms")),S=E;var le=c;if(S.qa=Vu(S,S.J?S.ia:null,S.W),le.K){Au(S.h,le);var Xe=le,St=S.L;St&&(Xe.I=St),Xe.B&&(cs(Xe),nt(Xe)),S.g=le}else gs(S);0<E.i.length&&_r(E)}else Be[0]!="stop"&&Be[0]!="close"||Br(E,7);else E.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?Br(E,7):jt(E):Be[0]!="noop"&&E.l&&E.l.ta(Be),E.v=0)}}Mr(4)}catch{}}var Tu=class{constructor(c,g){this.g=c,this.map=g}};function ds(c){this.l=c||10,h.PerformanceNavigationTiming?(c=h.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(h.chrome&&h.chrome.loadTimes&&h.chrome.loadTimes()&&h.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wn(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Su(c){return c.h?1:c.g?c.g.size:0}function rn(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function za(c,g){c.g?c.g.add(g):c.h=g}function Au(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}ds.prototype.cancel=function(){if(this.i=bu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function bu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const E of c.g.values())g=g.concat(E.D);return g}return L(c.i)}function ao(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var g=[],E=c.length,S=0;S<E;S++)g.push(c[S]);return g}g=[],E=0;for(S in c)g[E++]=c[S];return g}function lo(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var g=[];c=c.length;for(var E=0;E<c;E++)g.push(E);return g}g=[],E=0;for(const S in c)g[E++]=S;return g}}}function ui(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var E=lo(c),S=ao(c),j=S.length,H=0;H<j;H++)g.call(void 0,S[H],E&&E[H],c)}var hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Th(c,g){if(c){c=c.split("&");for(var E=0;E<c.length;E++){var S=c[E].indexOf("="),j=null;if(0<=S){var H=c[E].substring(0,S);j=c[E].substring(S+1)}else H=c[E];g(H,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Vr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Vr){this.h=c.h,fs(this,c.j),this.o=c.o,this.g=c.g,ci(this,c.s),this.l=c.l;var g=c.i,E=new gr;E.i=g.i,g.g&&(E.g=new Map(g.g),E.h=g.h),di(this,E),this.m=c.m}else c&&(g=String(c).match(hs))?(this.h=!1,fs(this,g[1]||"",!0),this.o=je(g[2]||""),this.g=je(g[3]||"",!0),ci(this,g[4]),this.l=je(g[5]||"",!0),di(this,g[6]||"",!0),this.m=je(g[7]||"")):(this.h=!1,this.i=new gr(null,this.h))}Vr.prototype.toString=function(){var c=[],g=this.j;g&&c.push(fi(g,uo,!0),":");var E=this.g;return(E||g=="file")&&(c.push("//"),(g=this.o)&&c.push(fi(g,uo,!0),"@"),c.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&c.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&c.push("/"),c.push(fi(E,E.charAt(0)=="/"?Pu:Ru,!0))),(E=this.i.toString())&&c.push("?",E),(E=this.m)&&c.push("#",fi(E,Wa)),c.join("")};function En(c){return new Vr(c)}function fs(c,g,E){c.j=E?je(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function ci(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function di(c,g,E){g instanceof gr?(c.i=g,yr(c.i,c.h)):(E||(g=fi(g,xu)),c.i=new gr(g,c.h))}function et(c,g,E){c.i.set(g,E)}function hi(c){return et(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function je(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function fi(c,g,E){return typeof c=="string"?(c=encodeURI(c).replace(g,Cu),E&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function Cu(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var uo=/[#\/\?@]/g,Ru=/[#\?:]/g,Pu=/[#\?]/g,xu=/[#\?@]/g,Wa=/#/g;function gr(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function Ut(c){c.g||(c.g=new Map,c.h=0,c.i&&Th(c.i,function(g,E){c.add(decodeURIComponent(g.replace(/\+/g," ")),E)}))}t=gr.prototype,t.add=function(c,g){Ut(this),this.i=null,c=On(this,c);var E=this.g.get(c);return E||this.g.set(c,E=[]),E.push(g),this.h+=1,this};function Jn(c,g){Ut(c),g=On(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Zn(c,g){return Ut(c),g=On(c,g),c.g.has(g)}t.forEach=function(c,g){Ut(this),this.g.forEach(function(E,S){E.forEach(function(j){c.call(g,j,S,this)},this)},this)},t.na=function(){Ut(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),E=[];for(let S=0;S<g.length;S++){const j=c[S];for(let H=0;H<j.length;H++)E.push(g[S])}return E},t.V=function(c){Ut(this);let g=[];if(typeof c=="string")Zn(this,c)&&(g=g.concat(this.g.get(On(this,c))));else{c=Array.from(this.g.values());for(let E=0;E<c.length;E++)g=g.concat(c[E])}return g},t.set=function(c,g){return Ut(this),this.i=null,c=On(this,c),Zn(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},t.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function pi(c,g,E){Jn(c,g),0<E.length&&(c.i=null,c.g.set(On(c,g),L(E)),c.h+=E.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var E=0;E<g.length;E++){var S=g[E];const H=encodeURIComponent(String(S)),le=this.V(S);for(S=0;S<le.length;S++){var j=H;le[S]!==""&&(j+="="+encodeURIComponent(String(le[S]))),c.push(j)}}return this.i=c.join("&")};function On(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function yr(c,g){g&&!c.j&&(Ut(c),c.i=null,c.g.forEach(function(E,S){var j=S.toLowerCase();S!=j&&(Jn(this,S),pi(this,j,E))},c)),c.j=g}function Sh(c,g){const E=new as;if(h.Image){const S=new Image;S.onload=T(dn,E,"TestLoadImage: loaded",!0,g,S),S.onerror=T(dn,E,"TestLoadImage: error",!1,g,S),S.onabort=T(dn,E,"TestLoadImage: abort",!1,g,S),S.ontimeout=T(dn,E,"TestLoadImage: timeout",!1,g,S),h.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else g(!1)}function ku(c,g){const E=new as,S=new AbortController,j=setTimeout(()=>{S.abort(),dn(E,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:S.signal}).then(H=>{clearTimeout(j),H.ok?dn(E,"TestPingServer: ok",!0,g):dn(E,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(j),dn(E,"TestPingServer: error",!1,g)})}function dn(c,g,E,S,j){try{j&&(j.onload=null,j.onerror=null,j.onabort=null,j.ontimeout=null),S(E)}catch{}}function Ah(){this.g=new La}function Du(c,g,E){const S=E||"";try{ui(c,function(j,H){let le=j;m(j)&&(le=Na(j)),g.push(S+H+"="+encodeURIComponent(le))})}catch(j){throw g.push(S+"type="+encodeURIComponent("_badmap")),j}}function Fr(c){this.l=c.Ub||null,this.j=c.eb||!1}D(Fr,ss),Fr.prototype.g=function(){return new ps(this.l,this.j)},Fr.prototype.i=function(c){return function(){return c}}({});function ps(c,g){It.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ps,It),t=ps.prototype,t.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,tr(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||h).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,tr(this)),this.g&&(this.readyState=3,tr(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof h.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nu(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Nu(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?er(this):tr(this),this.readyState==3&&Nu(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,er(this))},t.Qa=function(c){this.g&&(this.response=c,er(this))},t.ga=function(){this.g&&er(this)};function er(c){c.readyState=4,c.l=null,c.j=null,c.v=null,tr(c)}t.setRequestHeader=function(c,g){this.u.append(c,g)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var E=g.next();!E.done;)E=E.value,c.push(E[0]+": "+E[1]),E=g.next();return c.join(`\r
`)};function tr(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ur(c){let g="";return Q(c,function(E,S){g+=S,g+=":",g+=E,g+=`\r
`}),g}function mi(c,g,E){e:{for(S in E){var S=!1;break e}S=!0}S||(E=Ur(E),typeof c=="string"?E!=null&&encodeURIComponent(String(E)):et(c,g,E))}function at(c){It.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(at,It);var bh=/^https?$/i,Ga=["POST","PUT"];t=at.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,g,E,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yn.g(),this.v=this.o?Zs(this.o):Zs(Yn),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(H){ms(this,H);return}if(c=E||"",E=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var j in S)E.set(j,S[j]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const H of S.keys())E.set(H,S.get(H));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(E.keys()).find(H=>H.toLowerCase()=="content-type"),j=h.FormData&&c instanceof h.FormData,!(0<=Array.prototype.indexOf.call(Ga,g,void 0))||S||j||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,le]of E)this.g.setRequestHeader(H,le);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ho(this),this.u=!0,this.g.send(c),this.u=!1}catch(H){ms(this,H)}};function ms(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,co(c),In(c)}function co(c){c.A||(c.A=!0,Tt(c,"complete"),Tt(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Tt(this,"complete"),Tt(this,"abort"),In(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),In(this,!0)),at.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ha(this):this.bb())},t.bb=function(){Ha(this)};function Ha(c){if(c.h&&typeof u<"u"&&(!c.v[1]||hn(c)!=4||c.Z()!=2)){if(c.u&&hn(c)==4)xa(c.Ea,0,c);else if(Tt(c,"readystatechange"),hn(c)==4){c.h=!1;try{const le=c.Z();e:switch(le){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break e;default:g=!1}var E;if(!(E=g)){var S;if(S=le===0){var j=String(c.D).match(hs)[1]||null;!j&&h.self&&h.self.location&&(j=h.self.location.protocol.slice(0,-1)),S=!bh.test(j?j.toLowerCase():"")}E=S}if(E)Tt(c,"complete"),Tt(c,"success");else{c.m=6;try{var H=2<hn(c)?c.g.statusText:""}catch{H=""}c.l=H+" ["+c.Z()+"]",co(c)}}finally{In(c)}}}}function In(c,g){if(c.g){ho(c);const E=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Tt(c,"ready");try{E.onreadystatechange=S}catch{}}}function ho(c){c.I&&(h.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function hn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Oa(g)}};function qa(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function fo(c){const g={};c=(c.g&&2<=hn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(q(c[S]))continue;var E=N(c[S]);const j=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const H=g[j]||[];g[j]=H,H.push(E)}b(g,function(S){return S.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vr(c,g,E){return E&&E.internalChannelParams&&E.internalChannelParams[c]||g}function Ka(c){this.Aa=0,this.i=[],this.j=new as,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vr("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vr("baseRetryDelayMs",5e3,c),this.cb=vr("retryDelaySeedMs",1e4,c),this.Wa=vr("forwardChannelMaxRetries",2,c),this.wa=vr("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new ds(c&&c.concurrentRequestLimit),this.Da=new Ah,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ka.prototype,t.la=8,t.G=1,t.connect=function(c,g,E,S){mt(0),this.W=c,this.H=g||{},E&&S!==void 0&&(this.H.OSID=E,this.H.OAID=S),this.F=this.X,this.I=Vu(this,null,this.W),_r(this)};function jt(c){if(po(c),c.G==3){var g=c.U++,E=En(c.I);if(et(E,"SID",c.K),et(E,"RID",g),et(E,"TYPE","terminate"),jr(c,E),g=new Xn(c,c.j,g),g.L=2,g.v=hi(En(E)),E=!1,h.navigator&&h.navigator.sendBeacon)try{E=h.navigator.sendBeacon(g.v.toString(),"")}catch{}!E&&h.Image&&(new Image().src=g.v,E=!0),E||(g.g=Fu(g.j,null),g.g.ea(g.v)),g.F=Date.now(),nt(g)}Mu(c)}function nr(c){c.g&&(Qa(c),c.g.cancel(),c.g=null)}function po(c){nr(c),c.u&&(h.clearTimeout(c.u),c.u=null),yo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&h.clearTimeout(c.s),c.s=null)}function _r(c){if(!wn(c.h)&&!c.s){c.s=!0;var g=c.Ga;Ve||ue(),oe||(Ve(),oe=!0),he.add(g,c),c.B=0}}function Ch(c,g){return Su(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Kn(w(c.Ga,c,g),Lu(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const j=new Xn(this,this.j,c);let H=this.o;if(this.S&&(H?(H=A(H),k(H,this.S)):H=this.S),this.m!==null||this.O||(j.H=H,H=null),this.P)e:{for(var g=0,E=0;E<this.i.length;E++){t:{var S=this.i[E];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(g+=S,4096<g){g=E;break e}if(g===4096||E===this.i.length-1){g=E+1;break e}}g=1e3}else g=1e3;g=gi(this,j,g),E=En(this.I),et(E,"RID",c),et(E,"CVER",22),this.D&&et(E,"X-HTTP-Session-Id",this.D),jr(this,E),H&&(this.O?g="headers="+encodeURIComponent(String(Ur(H)))+"&"+g:this.m&&mi(E,this.m,H)),za(this.h,j),this.Ua&&et(E,"TYPE","init"),this.P?(et(E,"$req",g),et(E,"SID","null"),j.T=!0,oo(j,E,null)):oo(j,E,g),this.G=2}}else this.G==3&&(c?mo(this,c):this.i.length==0||wn(this.h)||mo(this))};function mo(c,g){var E;g?E=g.l:E=c.U++;const S=En(c.I);et(S,"SID",c.K),et(S,"RID",E),et(S,"AID",c.T),jr(c,S),c.m&&c.o&&mi(S,c.m,c.o),E=new Xn(c,c.j,E,c.B+1),c.m===null&&(E.H=c.o),g&&(c.i=g.D.concat(c.i)),g=gi(c,E,1e3),E.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),za(c.h,E),oo(E,S,g)}function jr(c,g){c.H&&Q(c.H,function(E,S){et(g,S,E)}),c.l&&ui({},function(E,S){et(g,S,E)})}function gi(c,g,E){E=Math.min(c.i.length,E);var S=c.l?w(c.l.Na,c.l,c):null;e:{var j=c.i;let H=-1;for(;;){const le=["count="+E];H==-1?0<E?(H=j[0].g,le.push("ofs="+H)):H=0:le.push("ofs="+H);let Xe=!0;for(let St=0;St<E;St++){let Be=j[St].g;const xt=j[St].map;if(Be-=H,0>Be)H=Math.max(0,j[St].g-100),Xe=!1;else try{Du(xt,le,"req"+Be+"_")}catch{S&&S(xt)}}if(Xe){S=le.join("&");break e}}}return c=c.i.splice(0,E),g.D=c,S}function gs(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;Ve||ue(),oe||(Ve(),oe=!0),he.add(g,c),c.v=0}}function go(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Kn(w(c.Fa,c),Lu(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Ou(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Kn(w(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),nr(this),Ou(this))};function Qa(c){c.A!=null&&(h.clearTimeout(c.A),c.A=null)}function Ou(c){c.g=new Xn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=En(c.qa);et(g,"RID","rpc"),et(g,"SID",c.K),et(g,"AID",c.T),et(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&et(g,"TO",c.ja),et(g,"TYPE","xmlhttp"),jr(c,g),c.m&&c.o&&mi(g,c.m,c.o),c.L&&(c.g.I=c.L);var E=c.g;c=c.ia,E.L=1,E.v=hi(En(g)),E.m=null,E.P=!0,Ba(E,c)}t.Za=function(){this.C!=null&&(this.C=null,nr(this),go(this),mt(19))};function yo(c){c.C!=null&&(h.clearTimeout(c.C),c.C=null)}function vo(c,g){var E=null;if(c.g==g){yo(c),Qa(c),c.g=null;var S=2}else if(rn(c.h,g))E=g.D,Au(c.h,g),S=1;else return;if(c.G!=0){if(g.o)if(S==1){E=g.m?g.m.length:0,g=Date.now()-g.F;var j=c.B;S=os(),Tt(S,new no(S,E)),_r(c)}else gs(c);else if(j=g.s,j==3||j==0&&0<g.X||!(S==1&&Ch(c,g)||S==2&&go(c)))switch(E&&0<E.length&&(g=c.h,g.i=g.i.concat(E)),j){case 1:Br(c,5);break;case 4:Br(c,10);break;case 3:Br(c,6);break;default:Br(c,2)}}}function Lu(c,g){let E=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(E*=2),E*g}function Br(c,g){if(c.j.info("Error code "+g),g==2){var E=w(c.fb,c),S=c.Xa;const j=!S;S=new Vr(S||"//www.google.com/images/cleardot.gif"),h.location&&h.location.protocol=="http"||fs(S,"https"),hi(S),j?Sh(S.toString(),E):ku(S.toString(),E)}else mt(2);c.G=0,c.l&&c.l.sa(g),Mu(c),po(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Mu(c){if(c.G=0,c.ka=[],c.l){const g=bu(c.h);(g.length!=0||c.i.length!=0)&&(x(c.ka,g),x(c.ka,c.i),c.h.i.length=0,L(c.i),c.i.length=0),c.l.ra()}}function Vu(c,g,E){var S=E instanceof Vr?En(E):new Vr(E);if(S.g!="")g&&(S.g=g+"."+S.g),ci(S,S.s);else{var j=h.location;S=j.protocol,g=g?g+"."+j.hostname:j.hostname,j=+j.port;var H=new Vr(null);S&&fs(H,S),g&&(H.g=g),j&&ci(H,j),E&&(H.l=E),S=H}return E=c.D,g=c.ya,E&&g&&et(S,E,g),et(S,"VER",c.la),jr(c,S),S}function Fu(c,g,E){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new at(new Fr({eb:E})):new at(c.pa),g.Ha(c.J),g}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ya(){}t=Ya.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function _o(){}_o.prototype.g=function(c,g){return new sn(c,g)};function sn(c,g){It.call(this),this.g=new Ka(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!q(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!q(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new wr(this)}D(sn,It),sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},sn.prototype.close=function(){jt(this.g)},sn.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var E={};E.__data__=c,c=E}else this.u&&(E={},E.__data__=Na(c),c=E);g.i.push(new Tu(g.Ya++,c)),g.G==3&&_r(g)},sn.prototype.N=function(){this.g.l=null,delete this.j,jt(this.g),delete this.g,sn.aa.N.call(this)};function Uu(c){pr.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){e:{for(const E in g){c=E;break e}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}D(Uu,pr);function ju(){to.call(this),this.status=1}D(ju,to);function wr(c){this.g=c}D(wr,Ya),wr.prototype.ua=function(){Tt(this.g,"a")},wr.prototype.ta=function(c){Tt(this.g,new Uu(c))},wr.prototype.sa=function(c){Tt(this.g,new ju)},wr.prototype.ra=function(){Tt(this.g,"b")},_o.prototype.createWebChannel=_o.prototype.g,sn.prototype.send=sn.prototype.o,sn.prototype.open=sn.prototype.m,sn.prototype.close=sn.prototype.close,mI=function(){return new _o},pI=function(){return os()},fI=mr,Zp={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},io.NO_ERROR=0,io.TIMEOUT=8,io.HTTP_ERROR=6,ed=io,_u.COMPLETE="complete",hI=_u,eo.EventType=Dn,Dn.OPEN="a",Dn.CLOSE="b",Dn.ERROR="c",Dn.MESSAGE="d",It.prototype.listen=It.prototype.K,Rl=eo,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,dI=at}).apply(typeof Vc<"u"?Vc:typeof self<"u"?self:typeof window<"u"?window:{});const iw="@firebase/firestore",sw="4.7.11";/**
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
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
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
 */let _a="11.6.1";/**
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
 */const $s=new km("@firebase/firestore");function zo(){return $s.logLevel}function de(t,...e){if($s.logLevel<=Fe.DEBUG){const n=e.map($m);$s.debug(`Firestore (${_a}): ${t}`,...n)}}function ii(t,...e){if($s.logLevel<=Fe.ERROR){const n=e.map($m);$s.error(`Firestore (${_a}): ${t}`,...n)}}function sa(t,...e){if($s.logLevel<=Fe.WARN){const n=e.map($m);$s.warn(`Firestore (${_a}): ${t}`,...n)}}function $m(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,gI(t,r,n)}function gI(t,e,n){let r=`FIRESTORE (${_a}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw ii(r),new Error(r)}function Qe(t,e,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,t||gI(e,o,r)}function xe(t,e){return t}/**
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
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ee extends oi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class yI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ux{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Jt.UNAUTHENTICATED))}shutdown(){}}class jx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Bx{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Qe(this.o===void 0,42304);let r=this.i;const o=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let a=new zi;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new zi,e.enqueueRetryable(()=>o(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await o(this.currentUser)})},h=f=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new zi)}},0),u()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Qe(typeof r.accessToken=="string",31837,{l:r}),new yI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Qe(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class $x{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class zx{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new $x(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ow{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Wx{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Qe(this.o===void 0,3512);const r=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const o=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(a=>o(a)),setTimeout(()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?o(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ow(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ow(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function vI(){return new TextEncoder}/**
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
 */class _I{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=Gx(40);for(let a=0;a<o.length;++a)r.length<20&&o[a]<n&&(r+=e.charAt(o[a]%62))}return r}}function Le(t,e){return t<e?-1:t>e?1:0}function em(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),o=e.codePointAt(n);if(r!==o){if(r<128&&o<128)return Le(r,o);{const a=vI(),u=Hx(a.encode(aw(t,n)),a.encode(aw(e,n)));return u!==0?u:Le(r,o)}}n+=r>65535?2:1}return Le(t.length,e.length)}function aw(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Hx(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Le(t[n],e[n]);return Le(t.length,e.length)}function oa(t,e,n){return t.length===e.length&&t.every((r,o)=>n(r,e[o]))}/**
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
 */const lw=-62135596800,uw=1e6;class Rt{static now(){return Rt.fromMillis(Date.now())}static fromDate(e){return Rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*uw);return new Rt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Ee(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ee(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<lw)throw new Ee(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ee(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uw}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-lw;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new Rt(0,0))}static max(){return new Re(new Rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const cw="__name__";class Ar{constructor(e,n,r){n===void 0?n=0:n>e.length&&Se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ar.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ar?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let o=0;o<r;o++){const a=Ar.compareSegments(e.get(o),n.get(o));if(a!==0)return a}return Le(e.length,n.length)}static compareSegments(e,n){const r=Ar.isNumericId(e),o=Ar.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?Ar.extractNumericId(e).compare(Ar.extractNumericId(n)):em(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $i.fromString(e.substring(4,e.length-2))}}class ft extends Ar{construct(e,n,r){return new ft(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Ee(ie.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(o=>o.length>0))}return new ft(n)}static emptyPath(){return new ft([])}}const qx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends Ar{construct(e,n,r){return new Wt(e,n,r)}static isValidIdentifier(e){return qx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cw}static keyField(){return new Wt([cw])}static fromServerFormat(e){const n=[];let r="",o=0;const a=()=>{if(r.length===0)throw new Ee(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let u=!1;for(;o<e.length;){const h=e[o];if(h==="\\"){if(o+1===e.length)throw new Ee(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[o+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new Ee(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,o+=2}else h==="`"?(u=!u,o++):h!=="."||u?(r+=h,o++):(a(),o++)}if(a(),u)throw new Ee(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Wt(n)}static emptyPath(){return new Wt([])}}/**
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
 */class Ie{constructor(e){this.path=e}static fromPath(e){return new Ie(ft.fromString(e))}static fromName(e){return new Ie(ft.fromString(e).popFirst(5))}static empty(){return new Ie(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ft.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ie(new ft(e.slice()))}}/**
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
 */const Gl=-1;function Kx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,o=Re.fromTimestamp(r===1e9?new Rt(n+1,0):new Rt(n,r));return new Hi(o,Ie.empty(),e)}function Qx(t){return new Hi(t.readTime,t.key,Gl)}class Hi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hi(Re.min(),Ie.empty(),Gl)}static max(){return new Hi(Re.max(),Ie.empty(),Gl)}}function Yx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ie.comparator(t.documentKey,e.documentKey),n!==0?n:Le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function wa(t){if(t.code!==ie.FAILED_PRECONDITION||t.message!==Xx)throw t;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new J((r,o)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,o)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,o)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof J?n:J.resolve(n)}catch(n){return J.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):J.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):J.reject(n)}static resolve(e){return new J((n,r)=>{n(e)})}static reject(e){return new J((n,r)=>{r(e)})}static waitFor(e){return new J((n,r)=>{let o=0,a=0,u=!1;e.forEach(h=>{++o,h.next(()=>{++a,u&&a===o&&n()},f=>r(f))}),u=!0,a===o&&n()})}static or(e){let n=J.resolve(!1);for(const r of e)n=n.next(o=>o?J.resolve(o):r());return n}static forEach(e,n){const r=[];return e.forEach((o,a)=>{r.push(n.call(this,o,a))}),this.waitFor(r)}static mapArray(e,n){return new J((r,o)=>{const a=e.length,u=new Array(a);let h=0;for(let f=0;f<a;f++){const m=f;n(e[m]).next(v=>{u[m]=v,++h,h===a&&r(u)},v=>o(v))}})}static doWhile(e,n){return new J((r,o)=>{const a=()=>{e()===!0?n().next(()=>{a()},o):r()};a()})}}function Zx(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ea(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Xd{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Xd.le=-1;/**
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
 */const zm=-1;function Jd(t){return t==null}function _d(t){return t===0&&1/t==-1/0}function ek(t){return typeof t=="number"&&Number.isInteger(t)&&!_d(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const wI="";function tk(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=dw(e)),e=nk(t.get(n),e);return dw(e)}function nk(t,e){let n=e;const r=t.length;for(let o=0;o<r;o++){const a=t.charAt(o);switch(a){case"\0":n+="";break;case wI:n+="";break;default:n+=a}}return n}function dw(t){return t+wI+""}/**
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
 */function hw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class dt{constructor(e,n){this.comparator=e,this.root=n||zt.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,zt.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,zt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(e,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fc(this.root,e,this.comparator,!0)}}class Fc{constructor(e,n,r,o){this.isReverse=o,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?r(e.key,n):1,n&&o&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class zt{constructor(e,n,r,o,a){this.key=e,this.value=n,this.color=r??zt.RED,this.left=o??zt.EMPTY,this.right=a??zt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,o,a){return new zt(e??this.key,n??this.value,r??this.color,o??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let o=this;const a=r(e,o.key);return o=a<0?o.copy(null,null,null,o.left.insert(e,n,r),null):a===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(e,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return zt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,o=this;if(n(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(e,o.key)===0){if(o.right.isEmpty())return zt.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,zt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,zt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}}zt.EMPTY=null,zt.RED=!0,zt.BLACK=!1;zt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,n,r,o,a){return this}insert(e,n,r){return new zt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pt{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,e[1])>=0)return;n(o.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fw(this.data.getIterator())}getIteratorFrom(e){return new fw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,a=r.getNext().key;if(this.comparator(o,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pt(this.comparator);return n.data=e,n}}class fw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this.fields=e,e.sort(Wt.comparator)}static empty(){return new cr([])}unionWith(e){let n=new Pt(Wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new cr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oa(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class II extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(o){try{return atob(o)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new II("Invalid base64 string: "+a):a}}(e);return new Ht(n)}static fromUint8Array(e){const n=function(o){let a="";for(let u=0;u<o.length;++u)a+=String.fromCharCode(o[u]);return a}(e);return new Ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ht.EMPTY_BYTE_STRING=new Ht("");const rk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qi(t){if(Qe(!!t,39018),typeof t=="string"){let e=0;const n=rk.exec(t);if(Qe(!!n,46558,{timestamp:t}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),e=Number(o)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:yt(t.seconds),nanos:yt(t.nanos)}}function yt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ki(t){return typeof t=="string"?Ht.fromBase64String(t):Ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="server_timestamp",SI="__type__",AI="__previous_value__",bI="__local_write_time__";function Wm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[SI])===null||n===void 0?void 0:n.stringValue)===TI}function Zd(t){const e=t.mapValue.fields[AI];return Wm(e)?Zd(e):e}function Hl(t){const e=qi(t.mapValue.fields[bI].timestampValue);return new Rt(e.seconds,e.nanos)}/**
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
 */class ik{constructor(e,n,r,o,a,u,h,f,m){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.longPollingOptions=f,this.useFetchStreams=m}}const wd="(default)";class ql{constructor(e,n){this.projectId=e,this.database=n||wd}static empty(){return new ql("","")}get isDefaultDatabase(){return this.database===wd}isEqual(e){return e instanceof ql&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI="__type__",sk="__max__",Uc={mapValue:{}},RI="__vector__",Ed="value";function Qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wm(t)?4:ak(t)?9007199254740991:ok(t)?10:11:Se(28295,{value:t})}function kr(t,e){if(t===e)return!0;const n=Qi(t);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hl(t).isEqual(Hl(e));case 3:return function(o,a){if(typeof o.timestampValue=="string"&&typeof a.timestampValue=="string"&&o.timestampValue.length===a.timestampValue.length)return o.timestampValue===a.timestampValue;const u=qi(o.timestampValue),h=qi(a.timestampValue);return u.seconds===h.seconds&&u.nanos===h.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(o,a){return Ki(o.bytesValue).isEqual(Ki(a.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(o,a){return yt(o.geoPointValue.latitude)===yt(a.geoPointValue.latitude)&&yt(o.geoPointValue.longitude)===yt(a.geoPointValue.longitude)}(t,e);case 2:return function(o,a){if("integerValue"in o&&"integerValue"in a)return yt(o.integerValue)===yt(a.integerValue);if("doubleValue"in o&&"doubleValue"in a){const u=yt(o.doubleValue),h=yt(a.doubleValue);return u===h?_d(u)===_d(h):isNaN(u)&&isNaN(h)}return!1}(t,e);case 9:return oa(t.arrayValue.values||[],e.arrayValue.values||[],kr);case 10:case 11:return function(o,a){const u=o.mapValue.fields||{},h=a.mapValue.fields||{};if(hw(u)!==hw(h))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(h[f]===void 0||!kr(u[f],h[f])))return!1;return!0}(t,e);default:return Se(52216,{left:t})}}function Kl(t,e){return(t.values||[]).find(n=>kr(n,e))!==void 0}function aa(t,e){if(t===e)return 0;const n=Qi(t),r=Qi(e);if(n!==r)return Le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Le(t.booleanValue,e.booleanValue);case 2:return function(a,u){const h=yt(a.integerValue||a.doubleValue),f=yt(u.integerValue||u.doubleValue);return h<f?-1:h>f?1:h===f?0:isNaN(h)?isNaN(f)?0:-1:1}(t,e);case 3:return pw(t.timestampValue,e.timestampValue);case 4:return pw(Hl(t),Hl(e));case 5:return em(t.stringValue,e.stringValue);case 6:return function(a,u){const h=Ki(a),f=Ki(u);return h.compareTo(f)}(t.bytesValue,e.bytesValue);case 7:return function(a,u){const h=a.split("/"),f=u.split("/");for(let m=0;m<h.length&&m<f.length;m++){const v=Le(h[m],f[m]);if(v!==0)return v}return Le(h.length,f.length)}(t.referenceValue,e.referenceValue);case 8:return function(a,u){const h=Le(yt(a.latitude),yt(u.latitude));return h!==0?h:Le(yt(a.longitude),yt(u.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return mw(t.arrayValue,e.arrayValue);case 10:return function(a,u){var h,f,m,v;const _=a.fields||{},w=u.fields||{},T=(h=_[Ed])===null||h===void 0?void 0:h.arrayValue,D=(f=w[Ed])===null||f===void 0?void 0:f.arrayValue,L=Le(((m=T==null?void 0:T.values)===null||m===void 0?void 0:m.length)||0,((v=D==null?void 0:D.values)===null||v===void 0?void 0:v.length)||0);return L!==0?L:mw(T,D)}(t.mapValue,e.mapValue);case 11:return function(a,u){if(a===Uc.mapValue&&u===Uc.mapValue)return 0;if(a===Uc.mapValue)return 1;if(u===Uc.mapValue)return-1;const h=a.fields||{},f=Object.keys(h),m=u.fields||{},v=Object.keys(m);f.sort(),v.sort();for(let _=0;_<f.length&&_<v.length;++_){const w=em(f[_],v[_]);if(w!==0)return w;const T=aa(h[f[_]],m[v[_]]);if(T!==0)return T}return Le(f.length,v.length)}(t.mapValue,e.mapValue);default:throw Se(23264,{Pe:n})}}function pw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Le(t,e);const n=qi(t),r=qi(e),o=Le(n.seconds,r.seconds);return o!==0?o:Le(n.nanos,r.nanos)}function mw(t,e){const n=t.values||[],r=e.values||[];for(let o=0;o<n.length&&o<r.length;++o){const a=aa(n[o],r[o]);if(a)return a}return Le(n.length,r.length)}function la(t){return tm(t)}function tm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=qi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ki(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Ie.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",o=!0;for(const a of n.values||[])o?o=!1:r+=",",r+=tm(a);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let o="{",a=!0;for(const u of r)a?a=!1:o+=",",o+=`${u}:${tm(n.fields[u])}`;return o+"}"}(t.mapValue):Se(61005,{value:t})}function td(t){switch(Qi(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zd(t);return e?16+td(e):16;case 5:return 2*t.stringValue.length;case 6:return Ki(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((o,a)=>o+td(a),0)}(t.arrayValue);case 10:case 11:return function(r){let o=0;return ts(r.fields,(a,u)=>{o+=a.length+td(u)}),o}(t.mapValue);default:throw Se(13486,{value:t})}}function nm(t){return!!t&&"integerValue"in t}function Gm(t){return!!t&&"arrayValue"in t}function gw(t){return!!t&&"nullValue"in t}function yw(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function nd(t){return!!t&&"mapValue"in t}function ok(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[CI])===null||n===void 0?void 0:n.stringValue)===RI}function Nl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Nl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Nl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ak(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===sk}/**
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
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!nd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Nl(n)}setAll(e){let n=Wt.emptyPath(),r={},o=[];e.forEach((u,h)=>{if(!n.isImmediateParentOf(h)){const f=this.getFieldsMap(n);this.applyChanges(f,r,o),r={},o=[],n=h.popLast()}u?r[h.lastSegment()]=Nl(u):o.push(h.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,o)}delete(e){const n=this.field(e.popLast());nd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let o=n.mapValue.fields[e.get(r)];nd(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(o,a)=>e[o]=a);for(const o of r)delete e[o]}clone(){return new Rn(Nl(this.value))}}function PI(t){const e=[];return ts(t.fields,(n,r)=>{const o=new Wt([n]);if(nd(r)){const a=PI(r.mapValue).fields;if(a.length===0)e.push(o);else for(const u of a)e.push(o.child(u))}else e.push(o)}),new cr(e)}/**
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
 */class Zt{constructor(e,n,r,o,a,u,h){this.key=e,this.documentType=n,this.version=r,this.readTime=o,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(e){return new Zt(e,0,Re.min(),Re.min(),Re.min(),Rn.empty(),0)}static newFoundDocument(e,n,r,o){return new Zt(e,1,n,Re.min(),r,o,0)}static newNoDocument(e,n){return new Zt(e,2,n,Re.min(),Re.min(),Rn.empty(),0)}static newUnknownDocument(e,n){return new Zt(e,3,n,Re.min(),Re.min(),Rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Zt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Id{constructor(e,n){this.position=e,this.inclusive=n}}function vw(t,e,n){let r=0;for(let o=0;o<t.position.length;o++){const a=e[o],u=t.position[o];if(a.field.isKeyField()?r=Ie.comparator(Ie.fromName(u.referenceValue),n.key):r=aa(u,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function _w(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Td{constructor(e,n="asc"){this.field=e,this.dir=n}}function lk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class xI{}class Ct extends xI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ck(e,n,r):n==="array-contains"?new fk(e,r):n==="in"?new pk(e,r):n==="not-in"?new mk(e,r):n==="array-contains-any"?new gk(e,r):new Ct(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dk(e,r):new hk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(aa(n,this.value)):n!==null&&Qi(this.value)===Qi(n)&&this.matchesComparison(aa(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dr extends xI{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Dr(e,n)}matches(e){return kI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function kI(t){return t.op==="and"}function DI(t){return uk(t)&&kI(t)}function uk(t){for(const e of t.filters)if(e instanceof Dr)return!1;return!0}function rm(t){if(t instanceof Ct)return t.field.canonicalString()+t.op.toString()+la(t.value);if(DI(t))return t.filters.map(e=>rm(e)).join(",");{const e=t.filters.map(n=>rm(n)).join(",");return`${t.op}(${e})`}}function NI(t,e){return t instanceof Ct?function(r,o){return o instanceof Ct&&r.op===o.op&&r.field.isEqual(o.field)&&kr(r.value,o.value)}(t,e):t instanceof Dr?function(r,o){return o instanceof Dr&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce((a,u,h)=>a&&NI(u,o.filters[h]),!0):!1}(t,e):void Se(19439)}function OI(t){return t instanceof Ct?function(n){return`${n.field.canonicalString()} ${n.op} ${la(n.value)}`}(t):t instanceof Dr?function(n){return n.op.toString()+" {"+n.getFilters().map(OI).join(" ,")+"}"}(t):"Filter"}class ck extends Ct{constructor(e,n,r){super(e,n,r),this.key=Ie.fromName(r.referenceValue)}matches(e){const n=Ie.comparator(e.key,this.key);return this.matchesComparison(n)}}class dk extends Ct{constructor(e,n){super(e,"in",n),this.keys=LI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hk extends Ct{constructor(e,n){super(e,"not-in",n),this.keys=LI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function LI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ie.fromName(r.referenceValue))}class fk extends Ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gm(n)&&Kl(n.arrayValue,this.value)}}class pk extends Ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kl(this.value.arrayValue,n)}}class mk extends Ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Kl(this.value.arrayValue,n)}}class gk extends Ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kl(this.value.arrayValue,r))}}/**
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
 */class yk{constructor(e,n=null,r=[],o=[],a=null,u=null,h=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=a,this.startAt=u,this.endAt=h,this.Ie=null}}function ww(t,e=null,n=[],r=[],o=null,a=null,u=null){return new yk(t,e,n,r,o,a,u)}function Hm(t){const e=xe(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(a){return a.field.canonicalString()+a.dir}(r)).join(","),Jd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>la(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>la(r)).join(",")),e.Ie=n}return e.Ie}function qm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!NI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_w(t.startAt,e.startAt)&&_w(t.endAt,e.endAt)}function im(t){return Ie.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class eh{constructor(e,n=null,r=[],o=[],a=null,u="F",h=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=f,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function vk(t,e,n,r,o,a,u,h){return new eh(t,e,n,r,o,a,u,h)}function Km(t){return new eh(t)}function Ew(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _k(t){return t.collectionGroup!==null}function Ol(t){const e=xe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const a of e.explicitOrderBy)e.Ee.push(a),n.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(u){let h=new Pt(Wt.comparator);return u.filters.forEach(f=>{f.getFlattenedFilters().forEach(m=>{m.isInequality()&&(h=h.add(m.field))})}),h})(e).forEach(a=>{n.has(a.canonicalString())||a.isKeyField()||e.Ee.push(new Td(a,r))}),n.has(Wt.keyField().canonicalString())||e.Ee.push(new Td(Wt.keyField(),r))}return e.Ee}function Pr(t){const e=xe(t);return e.de||(e.de=wk(e,Ol(t))),e.de}function wk(t,e){if(t.limitType==="F")return ww(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(o=>{const a=o.dir==="desc"?"asc":"desc";return new Td(o.field,a)});const n=t.endAt?new Id(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Id(t.startAt.position,t.startAt.inclusive):null;return ww(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sm(t,e,n){return new eh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function th(t,e){return qm(Pr(t),Pr(e))&&t.limitType===e.limitType}function MI(t){return`${Hm(Pr(t))}|lt:${t.limitType}`}function Wo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(o=>OI(o)).join(", ")}]`),Jd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(o=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(o)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(o=>la(o)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(o=>la(o)).join(",")),`Target(${r})`}(Pr(t))}; limitType=${t.limitType})`}function nh(t,e){return e.isFoundDocument()&&function(r,o){const a=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ie.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)}(t,e)&&function(r,o){for(const a of Ol(r))if(!a.field.isKeyField()&&o.data.field(a.field)===null)return!1;return!0}(t,e)&&function(r,o){for(const a of r.filters)if(!a.matches(o))return!1;return!0}(t,e)&&function(r,o){return!(r.startAt&&!function(u,h,f){const m=vw(u,h,f);return u.inclusive?m<=0:m<0}(r.startAt,Ol(r),o)||r.endAt&&!function(u,h,f){const m=vw(u,h,f);return u.inclusive?m>=0:m>0}(r.endAt,Ol(r),o))}(t,e)}function Ek(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function VI(t){return(e,n)=>{let r=!1;for(const o of Ol(t)){const a=Ik(o,e,n);if(a!==0)return a;r=r||o.field.isKeyField()}return 0}}function Ik(t,e,n){const r=t.field.isKeyField()?Ie.comparator(e.key,n.key):function(a,u,h){const f=u.data.field(a),m=h.data.field(a);return f!==null&&m!==null?aa(f,m):Se(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Se(19790,{direction:t.dir})}}/**
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
 */class Hs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[o,a]of r)if(this.equalsFn(o,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),o=this.inner[r];if(o===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let a=0;a<o.length;a++)if(this.equalsFn(o[a][0],e))return void(o[a]=[e,n]);o.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],e))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[o,a]of r)e(o,a)})}isEmpty(){return EI(this.inner)}size(){return this.innerSize}}/**
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
 */const Tk=new dt(Ie.comparator);function si(){return Tk}const FI=new dt(Ie.comparator);function Pl(...t){let e=FI;for(const n of t)e=e.insert(n.key,n);return e}function UI(t){let e=FI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Os(){return Ll()}function jI(){return Ll()}function Ll(){return new Hs(t=>t.toString(),(t,e)=>t.isEqual(e))}const Sk=new dt(Ie.comparator),Ak=new Pt(Ie.comparator);function Ue(...t){let e=Ak;for(const n of t)e=e.add(n);return e}const bk=new Pt(Le);function Ck(){return bk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:_d(e)?"-0":e}}function BI(t){return{integerValue:""+t}}function Rk(t,e){return ek(e)?BI(e):Qm(t,e)}/**
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
 */class rh{constructor(){this._=void 0}}function Pk(t,e,n){return t instanceof Sd?function(o,a){const u={fields:{[SI]:{stringValue:TI},[bI]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return a&&Wm(a)&&(a=Zd(a)),a&&(u.fields[AI]=a),{mapValue:u}}(n,e):t instanceof Ql?zI(t,e):t instanceof Yl?WI(t,e):function(o,a){const u=$I(o,a),h=Iw(u)+Iw(o.Re);return nm(u)&&nm(o.Re)?BI(h):Qm(o.serializer,h)}(t,e)}function xk(t,e,n){return t instanceof Ql?zI(t,e):t instanceof Yl?WI(t,e):n}function $I(t,e){return t instanceof Ad?function(r){return nm(r)||function(a){return!!a&&"doubleValue"in a}(r)}(e)?e:{integerValue:0}:null}class Sd extends rh{}class Ql extends rh{constructor(e){super(),this.elements=e}}function zI(t,e){const n=GI(e);for(const r of t.elements)n.some(o=>kr(o,r))||n.push(r);return{arrayValue:{values:n}}}class Yl extends rh{constructor(e){super(),this.elements=e}}function WI(t,e){let n=GI(e);for(const r of t.elements)n=n.filter(o=>!kr(o,r));return{arrayValue:{values:n}}}class Ad extends rh{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Iw(t){return yt(t.integerValue||t.doubleValue)}function GI(t){return Gm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function kk(t,e){return t.field.isEqual(e.field)&&function(r,o){return r instanceof Ql&&o instanceof Ql||r instanceof Yl&&o instanceof Yl?oa(r.elements,o.elements,kr):r instanceof Ad&&o instanceof Ad?kr(r.Re,o.Re):r instanceof Sd&&o instanceof Sd}(t.transform,e.transform)}class Dk{constructor(e,n){this.version=e,this.transformResults=n}}class ti{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ti}static exists(e){return new ti(void 0,e)}static updateTime(e){return new ti(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rd(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ih{}function HI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new KI(t.key,ti.none()):new sh(t.key,t.data,ti.none());{const n=t.data,r=Rn.empty();let o=new Pt(Wt.comparator);for(let a of e.fields)if(!o.has(a)){let u=n.field(a);u===null&&a.length>1&&(a=a.popLast(),u=n.field(a)),u===null?r.delete(a):r.set(a,u),o=o.add(a)}return new qs(t.key,r,new cr(o.toArray()),ti.none())}}function Nk(t,e,n){t instanceof sh?function(o,a,u){const h=o.value.clone(),f=Sw(o.fieldTransforms,a,u.transformResults);h.setAll(f),a.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(t,e,n):t instanceof qs?function(o,a,u){if(!rd(o.precondition,a))return void a.convertToUnknownDocument(u.version);const h=Sw(o.fieldTransforms,a,u.transformResults),f=a.data;f.setAll(qI(o)),f.setAll(h),a.convertToFoundDocument(u.version,f).setHasCommittedMutations()}(t,e,n):function(o,a,u){a.convertToNoDocument(u.version).setHasCommittedMutations()}(0,e,n)}function Ml(t,e,n,r){return t instanceof sh?function(a,u,h,f){if(!rd(a.precondition,u))return h;const m=a.value.clone(),v=Aw(a.fieldTransforms,f,u);return m.setAll(v),u.convertToFoundDocument(u.version,m).setHasLocalMutations(),null}(t,e,n,r):t instanceof qs?function(a,u,h,f){if(!rd(a.precondition,u))return h;const m=Aw(a.fieldTransforms,f,u),v=u.data;return v.setAll(qI(a)),v.setAll(m),u.convertToFoundDocument(u.version,v).setHasLocalMutations(),h===null?null:h.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map(_=>_.field))}(t,e,n,r):function(a,u,h){return rd(a.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):h}(t,e,n)}function Ok(t,e){let n=null;for(const r of t.fieldTransforms){const o=e.data.field(r.field),a=$I(r.transform,o||null);a!=null&&(n===null&&(n=Rn.empty()),n.set(r.field,a))}return n||null}function Tw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&oa(r,o,(a,u)=>kk(a,u))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sh extends ih{constructor(e,n,r,o=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class qs extends ih{constructor(e,n,r,o,a=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function qI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sw(t,e,n){const r=new Map;Qe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let o=0;o<n.length;o++){const a=t[o],u=a.transform,h=e.data.field(a.field);r.set(a.field,xk(u,h,n[o]))}return r}function Aw(t,e,n){const r=new Map;for(const o of t){const a=o.transform,u=n.data.field(o.field);r.set(o.field,Pk(a,u,e))}return r}class KI extends ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lk extends ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Mk{constructor(e,n,r,o){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const a=this.mutations[o];a.key.isEqual(e.key)&&Nk(a,e,r[o])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ml(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ml(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=jI();return this.mutations.forEach(o=>{const a=e.get(o.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=n.has(o.key)?null:h;const f=HI(u,h);f!==null&&r.set(o.key,f),u.isValidDocument()||u.convertToNoDocument(Re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ue())}isEqual(e){return this.batchId===e.batchId&&oa(this.mutations,e.mutations,(n,r)=>Tw(n,r))&&oa(this.baseMutations,e.baseMutations,(n,r)=>Tw(n,r))}}class Ym{constructor(e,n,r,o){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(e,n,r){Qe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let o=function(){return Sk}();const a=e.mutations;for(let u=0;u<a.length;u++)o=o.insert(a[u].key,r[u].version);return new Ym(e,n,r,o)}}/**
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
 */class Vk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Fk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var wt,$e;function Uk(t){switch(t){case ie.OK:return Se(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return Se(15467,{code:t})}}function QI(t){if(t===void 0)return ii("GRPC error has no .code"),ie.UNKNOWN;switch(t){case wt.OK:return ie.OK;case wt.CANCELLED:return ie.CANCELLED;case wt.UNKNOWN:return ie.UNKNOWN;case wt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case wt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case wt.INTERNAL:return ie.INTERNAL;case wt.UNAVAILABLE:return ie.UNAVAILABLE;case wt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case wt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case wt.NOT_FOUND:return ie.NOT_FOUND;case wt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case wt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case wt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case wt.ABORTED:return ie.ABORTED;case wt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case wt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case wt.DATA_LOSS:return ie.DATA_LOSS;default:return Se(39323,{code:t})}}($e=wt||(wt={}))[$e.OK=0]="OK",$e[$e.CANCELLED=1]="CANCELLED",$e[$e.UNKNOWN=2]="UNKNOWN",$e[$e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$e[$e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$e[$e.NOT_FOUND=5]="NOT_FOUND",$e[$e.ALREADY_EXISTS=6]="ALREADY_EXISTS",$e[$e.PERMISSION_DENIED=7]="PERMISSION_DENIED",$e[$e.UNAUTHENTICATED=16]="UNAUTHENTICATED",$e[$e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$e[$e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$e[$e.ABORTED=10]="ABORTED",$e[$e.OUT_OF_RANGE=11]="OUT_OF_RANGE",$e[$e.UNIMPLEMENTED=12]="UNIMPLEMENTED",$e[$e.INTERNAL=13]="INTERNAL",$e[$e.UNAVAILABLE=14]="UNAVAILABLE",$e[$e.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const jk=new $i([4294967295,4294967295],0);function bw(t){const e=vI().encode(t),n=new cI;return n.update(e),new Uint8Array(n.digest())}function Cw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),o=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new $i([n,r],0),new $i([o,a],0)]}class Xm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xl(`Invalid padding: ${n}`);if(r<0)throw new xl(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new xl(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new xl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=$i.fromNumber(this.pe)}we(e,n,r){let o=e.add(n.multiply($i.fromNumber(r)));return o.compare(jk)===1&&(o=new $i([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=bw(e),[r,o]=Cw(n);for(let a=0;a<this.hashCount;a++){const u=this.we(r,o,a);if(!this.be(u))return!1}return!0}static create(e,n,r){const o=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),u=new Xm(a,o,n);return r.forEach(h=>u.insert(h)),u}insert(e){if(this.pe===0)return;const n=bw(e),[r,o]=Cw(n);for(let a=0;a<this.hashCount;a++){const u=this.we(r,o,a);this.Se(u)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class xl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class oh{constructor(e,n,r,o,a){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const o=new Map;return o.set(e,hu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oh(Re.min(),o,new dt(Le),si(),Ue())}}class hu{constructor(e,n,r,o,a){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new hu(r,n,Ue(),Ue(),Ue())}}/**
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
 */class id{constructor(e,n,r,o){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=o}}class YI{constructor(e,n){this.targetId=e,this.Ce=n}}class XI{constructor(e,n,r=Ht.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=o}}class Rw{constructor(){this.Fe=0,this.Me=Pw(),this.xe=Ht.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Ue(),n=Ue(),r=Ue();return this.Me.forEach((o,a)=>{switch(a){case 0:e=e.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:Se(38017,{changeType:a})}}),new hu(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Pw()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Qe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Bk{constructor(e){this.ze=e,this.je=new Map,this.He=si(),this.Je=jc(),this.Ye=jc(),this.Ze=new dt(Le)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:Se(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,o)=>{this.it(o)&&n(o)})}ot(e){const n=e.targetId,r=e.Ce.count,o=this._t(n);if(o){const a=o.target;if(im(a))if(r===0){const u=new Ie(a.path);this.tt(n,u,Zt.newNoDocument(u,Re.min()))}else Qe(r===1,20013,{expectedCount:r});else{const u=this.ut(n);if(u!==r){const h=this.ct(e),f=h?this.lt(h,e,u):1;if(f!==0){this.st(n);const m=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,m)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:a=0}=n;let u,h;try{u=Ki(r).toUint8Array()}catch(f){if(f instanceof II)return sa("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{h=new Xm(u,o,a)}catch(f){return sa(f instanceof xl?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return h.pe===0?null:h}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let o=0;return r.forEach(a=>{const u=this.ze.Pt(),h=`projects/${u.projectId}/databases/${u.database}/documents/${a.path.canonicalString()}`;e.mightContain(h)||(this.tt(n,a,null),o++)}),o}It(e){const n=new Map;this.je.forEach((a,u)=>{const h=this._t(u);if(h){if(a.current&&im(h.target)){const f=new Ie(h.target.path);this.Et(f).has(u)||this.dt(u,f)||this.tt(u,f,Zt.newNoDocument(f,e))}a.Le&&(n.set(u,a.qe()),a.Qe())}});let r=Ue();this.Ye.forEach((a,u)=>{let h=!0;u.forEachWhile(f=>{const m=this._t(f);return!m||m.purpose==="TargetPurposeLimboResolution"||(h=!1,!1)}),h&&(r=r.add(a))}),this.He.forEach((a,u)=>u.setReadTime(e));const o=new oh(e,n,this.Ze,this.He,r);return this.He=si(),this.Je=jc(),this.Ye=jc(),this.Ze=new dt(Le),o}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const o=this.rt(e);this.dt(e,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Rw,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new Pt(Le),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Pt(Le),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||de("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Rw),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function jc(){return new dt(Ie.comparator)}function Pw(){return new dt(Ie.comparator)}const $k={asc:"ASCENDING",desc:"DESCENDING"},zk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wk={and:"AND",or:"OR"};class Gk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function om(t,e){return t.useProto3Json||Jd(e)?e:{value:e}}function bd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Hk(t,e){return bd(t,e.toTimestamp())}function xr(t){return Qe(!!t,49232),Re.fromTimestamp(function(n){const r=qi(n);return new Rt(r.seconds,r.nanos)}(t))}function Jm(t,e){return am(t,e).canonicalString()}function am(t,e){const n=function(o){return new ft(["projects",o.projectId,"databases",o.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ZI(t){const e=ft.fromString(t);return Qe(iT(e),10190,{key:e.toString()}),e}function lm(t,e){return Jm(t.databaseId,e.path)}function mp(t,e){const n=ZI(e);if(n.get(1)!==t.databaseId.projectId)throw new Ee(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ee(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ie(tT(n))}function eT(t,e){return Jm(t.databaseId,e)}function qk(t){const e=ZI(t);return e.length===4?ft.emptyPath():tT(e)}function um(t){return new ft(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function tT(t){return Qe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function xw(t,e,n){return{name:lm(t,e),fields:n.value.mapValue.fields}}function Kk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Se(39313,{state:m})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],a=function(m,v){return m.useProto3Json?(Qe(v===void 0||typeof v=="string",58123),Ht.fromBase64String(v||"")):(Qe(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Ht.fromUint8Array(v||new Uint8Array))}(t,e.targetChange.resumeToken),u=e.targetChange.cause,h=u&&function(m){const v=m.code===void 0?ie.UNKNOWN:QI(m.code);return new Ee(v,m.message||"")}(u);n=new XI(r,o,a,h||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const o=mp(t,r.document.name),a=xr(r.document.updateTime),u=r.document.createTime?xr(r.document.createTime):Re.min(),h=new Rn({mapValue:{fields:r.document.fields}}),f=Zt.newFoundDocument(o,a,u,h),m=r.targetIds||[],v=r.removedTargetIds||[];n=new id(m,v,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const o=mp(t,r.document),a=r.readTime?xr(r.readTime):Re.min(),u=Zt.newNoDocument(o,a),h=r.removedTargetIds||[];n=new id([],h,u.key,u)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const o=mp(t,r.document),a=r.removedTargetIds||[];n=new id([],a,o,null)}else{if(!("filter"in e))return Se(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:o=0,unchangedNames:a}=r,u=new Fk(o,a),h=r.targetId;n=new YI(h,u)}}return n}function Qk(t,e){let n;if(e instanceof sh)n={update:xw(t,e.key,e.value)};else if(e instanceof KI)n={delete:lm(t,e.key)};else if(e instanceof qs)n={update:xw(t,e.key,e.data),updateMask:iD(e.fieldMask)};else{if(!(e instanceof Lk))return Se(16599,{ft:e.type});n={verify:lm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(a,u){const h=u.transform;if(h instanceof Sd)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(h instanceof Ql)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:h.elements}};if(h instanceof Yl)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:h.elements}};if(h instanceof Ad)return{fieldPath:u.field.canonicalString(),increment:h.Re};throw Se(20930,{transform:u.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(o,a){return a.updateTime!==void 0?{updateTime:Hk(o,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se(27497)}(t,e.precondition)),n}function Yk(t,e){return t&&t.length>0?(Qe(e!==void 0,14353),t.map(n=>function(o,a){let u=o.updateTime?xr(o.updateTime):xr(a);return u.isEqual(Re.min())&&(u=xr(a)),new Dk(u,o.transformResults||[])}(n,e))):[]}function Xk(t,e){return{documents:[eT(t,e.path)]}}function Jk(t,e){const n={structuredQuery:{}},r=e.path;let o;e.collectionGroup!==null?(o=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=eT(t,o);const a=function(m){if(m.length!==0)return rT(Dr.create(m,"and"))}(e.filters);a&&(n.structuredQuery.where=a);const u=function(m){if(m.length!==0)return m.map(v=>function(w){return{field:Go(w.field),direction:tD(w.dir)}}(v))}(e.orderBy);u&&(n.structuredQuery.orderBy=u);const h=om(t,e.limit);return h!==null&&(n.structuredQuery.limit=h),e.startAt&&(n.structuredQuery.startAt=function(m){return{before:m.inclusive,values:m.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(m){return{before:!m.inclusive,values:m.position}}(e.endAt)),{gt:n,parent:o}}function Zk(t){let e=qk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){Qe(r===1,65062);const v=n.from[0];v.allDescendants?o=v.collectionId:e=e.child(v.collectionId)}let a=[];n.where&&(a=function(_){const w=nT(_);return w instanceof Dr&&DI(w)?w.getFilters():[w]}(n.where));let u=[];n.orderBy&&(u=function(_){return _.map(w=>function(D){return new Td(Ho(D.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(n.orderBy));let h=null;n.limit&&(h=function(_){let w;return w=typeof _=="object"?_.value:_,Jd(w)?null:w}(n.limit));let f=null;n.startAt&&(f=function(_){const w=!!_.before,T=_.values||[];return new Id(T,w)}(n.startAt));let m=null;return n.endAt&&(m=function(_){const w=!_.before,T=_.values||[];return new Id(T,w)}(n.endAt)),vk(e,o,u,a,h,"F",f,m)}function eD(t,e){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:o})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function nT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ho(n.unaryFilter.field);return Ct.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Ho(n.unaryFilter.field);return Ct.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ho(n.unaryFilter.field);return Ct.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ho(n.unaryFilter.field);return Ct.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ct.create(Ho(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dr.create(n.compositeFilter.filters.map(r=>nT(r)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Se(1026)}}(n.compositeFilter.op))}(t):Se(30097,{filter:t})}function tD(t){return $k[t]}function nD(t){return zk[t]}function rD(t){return Wk[t]}function Go(t){return{fieldPath:t.canonicalString()}}function Ho(t){return Wt.fromServerFormat(t.fieldPath)}function rT(t){return t instanceof Ct?function(n){if(n.op==="=="){if(yw(n.value))return{unaryFilter:{field:Go(n.field),op:"IS_NAN"}};if(gw(n.value))return{unaryFilter:{field:Go(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yw(n.value))return{unaryFilter:{field:Go(n.field),op:"IS_NOT_NAN"}};if(gw(n.value))return{unaryFilter:{field:Go(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Go(n.field),op:nD(n.op),value:n.value}}}(t):t instanceof Dr?function(n){const r=n.getFilters().map(o=>rT(o));return r.length===1?r[0]:{compositeFilter:{op:rD(n.op),filters:r}}}(t):Se(54877,{filter:t})}function iD(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Vi{constructor(e,n,r,o,a=Re.min(),u=Re.min(),h=Ht.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=h,this.expectedCount=f}withSequenceNumber(e){return new Vi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Vi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class sD{constructor(e){this.wt=e}}function oD(t){const e=Zk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sm(e,e.limit,"L"):e}/**
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
 */class aD{constructor(){this.yn=new lD}addToCollectionParentIndex(e,n){return this.yn.add(n),J.resolve()}getCollectionParents(e,n){return J.resolve(this.yn.getEntries(n))}addFieldIndex(e,n){return J.resolve()}deleteFieldIndex(e,n){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,n){return J.resolve()}getDocumentsMatchingTarget(e,n){return J.resolve(null)}getIndexType(e,n){return J.resolve(0)}getFieldIndexes(e,n){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,n){return J.resolve(Hi.min())}getMinOffsetFromCollectionGroup(e,n){return J.resolve(Hi.min())}updateCollectionGroup(e,n,r){return J.resolve()}updateIndexEntries(e,n){return J.resolve()}}class lD{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n]||new Pt(ft.comparator),a=!o.has(r);return this.index[n]=o.add(r),a}has(e){const n=e.lastSegment(),r=e.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(e){return(this.index[e]||new Pt(ft.comparator)).toArray()}}/**
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
 */const kw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sT=41943040;class _n{static withCacheSize(e){return new _n(e,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */_n.DEFAULT_COLLECTION_PERCENTILE=10,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_n.DEFAULT=new _n(sT,_n.DEFAULT_COLLECTION_PERCENTILE,_n.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_n.DISABLED=new _n(-1,0,0);/**
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
 */class ua{constructor(e){this.nr=e}next(){return this.nr+=2,this.nr}static rr(){return new ua(0)}static ir(){return new ua(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="LruGarbageCollector",uD=1048576;function Nw([t,e],[n,r]){const o=Le(t,n);return o===0?Le(e,r):o}class cD{constructor(e){this.cr=e,this.buffer=new Pt(Nw),this.lr=0}hr(){return++this.lr}Pr(e){const n=[e,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Nw(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class dD{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(e){de(Dw,`Garbage collection scheduled in ${e}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ea(n)?de(Dw,"Ignoring IndexedDB error during garbage collection: ",n):await wa(n)}await this.Ir(3e5)})}}class hD{constructor(e,n){this.Er=e,this.params=n}calculateTargetCount(e,n){return this.Er.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return J.resolve(Xd.le);const r=new cD(n);return this.Er.forEachTarget(e,o=>r.Pr(o.sequenceNumber)).next(()=>this.Er.Ar(e,o=>r.Pr(o))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Er.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Er.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(kw)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),kw):this.Rr(e,n))}getCacheSize(e){return this.Er.getCacheSize(e)}Rr(e,n){let r,o,a,u,h,f,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),o=this.params.maximumSequenceNumbersToCollect):o=_,u=Date.now(),this.nthSequenceNumber(e,o))).next(_=>(r=_,h=Date.now(),this.removeTargets(e,r,n))).next(_=>(a=_,f=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(m=Date.now(),zo()<=Fe.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-v}ms
	Determined least recently used ${o} in `+(h-u)+`ms
	Removed ${a} targets in `+(f-h)+`ms
	Removed ${_} documents in `+(m-f)+`ms
Total Duration: ${m-v}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:a,documentsRemoved:_})))}}function fD(t,e){return new hD(t,e)}/**
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
 */class pD{constructor(){this.changes=new Hs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Zt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?J.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class mD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class gD{constructor(e,n,r,o){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(o=>(r=o,this.remoteDocumentCache.getEntry(e,n))).next(o=>(r!==null&&Ml(r.mutation,o,cr.empty(),Rt.now()),o))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ue()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ue()){const o=Os();return this.populateOverlays(e,o,n).next(()=>this.computeViews(e,n,o,r).next(a=>{let u=Pl();return a.forEach((h,f)=>{u=u.insert(h,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,n){const r=Os();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ue()))}populateOverlays(e,n,r){const o=[];return r.forEach(a=>{n.has(a)||o.push(a)}),this.documentOverlayCache.getOverlays(e,o).next(a=>{a.forEach((u,h)=>{n.set(u,h)})})}computeViews(e,n,r,o){let a=si();const u=Ll(),h=function(){return Ll()}();return n.forEach((f,m)=>{const v=r.get(m.key);o.has(m.key)&&(v===void 0||v.mutation instanceof qs)?a=a.insert(m.key,m):v!==void 0?(u.set(m.key,v.mutation.getFieldMask()),Ml(v.mutation,m,v.mutation.getFieldMask(),Rt.now())):u.set(m.key,cr.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((m,v)=>u.set(m,v)),n.forEach((m,v)=>{var _;return h.set(m,new mD(v,(_=u.get(m))!==null&&_!==void 0?_:null))}),h))}recalculateAndSaveOverlays(e,n){const r=Ll();let o=new dt((u,h)=>u-h),a=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(u=>{for(const h of u)h.keys().forEach(f=>{const m=n.get(f);if(m===null)return;let v=r.get(f)||cr.empty();v=h.applyToLocalView(m,v),r.set(f,v);const _=(o.get(h.batchId)||Ue()).add(f);o=o.insert(h.batchId,_)})}).next(()=>{const u=[],h=o.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),m=f.key,v=f.value,_=jI();v.forEach(w=>{if(!a.has(w)){const T=HI(n.get(w),r.get(w));T!==null&&_.set(w,T),a=a.add(w)}}),u.push(this.documentOverlayCache.saveOverlays(e,m,_))}return J.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,o){return function(u){return Ie.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_k(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,o):this.getDocumentsMatchingCollectionQuery(e,n,r,o)}getNextDocuments(e,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,o).next(a=>{const u=o-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,o-a.size):J.resolve(Os());let h=Gl,f=a;return u.next(m=>J.forEach(m,(v,_)=>(h<_.largestBatchId&&(h=_.largestBatchId),a.get(v)?J.resolve():this.remoteDocumentCache.getEntry(e,v).next(w=>{f=f.insert(v,w)}))).next(()=>this.populateOverlays(e,m,a)).next(()=>this.computeViews(e,f,m,Ue())).next(v=>({batchId:h,changes:UI(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ie(n)).next(r=>{let o=Pl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o})}getDocumentsMatchingCollectionGroupQuery(e,n,r,o){const a=n.collectionGroup;let u=Pl();return this.indexManager.getCollectionParents(e,a).next(h=>J.forEach(h,f=>{const m=function(_,w){return new eh(w,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(n,f.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,o).next(v=>{v.forEach((_,w)=>{u=u.insert(_,w)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,n,r,o){let a;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(u=>(a=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,a,o))).next(u=>{a.forEach((f,m)=>{const v=m.getKey();u.get(v)===null&&(u=u.insert(v,Zt.newInvalidDocument(v)))});let h=Pl();return u.forEach((f,m)=>{const v=a.get(f);v!==void 0&&Ml(v.mutation,m,cr.empty(),Rt.now()),nh(n,m)&&(h=h.insert(f,m))}),h})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{constructor(e){this.serializer=e,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(e,n){return J.resolve(this.Fr.get(n))}saveBundleMetadata(e,n){return this.Fr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:xr(o.createTime)}}(n)),J.resolve()}getNamedQuery(e,n){return J.resolve(this.Mr.get(n))}saveNamedQuery(e,n){return this.Mr.set(n.name,function(o){return{name:o.name,query:oD(o.bundledQuery),readTime:xr(o.readTime)}}(n)),J.resolve()}}/**
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
 */class vD{constructor(){this.overlays=new dt(Ie.comparator),this.Or=new Map}getOverlay(e,n){return J.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Os();return J.forEach(n,o=>this.getOverlay(e,o).next(a=>{a!==null&&r.set(o,a)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((o,a)=>{this.St(e,n,a)}),J.resolve()}removeOverlaysForBatchId(e,n,r){const o=this.Or.get(r);return o!==void 0&&(o.forEach(a=>this.overlays=this.overlays.remove(a)),this.Or.delete(r)),J.resolve()}getOverlaysForCollection(e,n,r){const o=Os(),a=n.length+1,u=new Ie(n.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,m=f.getKey();if(!n.isPrefixOf(m.path))break;m.path.length===a&&f.largestBatchId>r&&o.set(f.getKey(),f)}return J.resolve(o)}getOverlaysForCollectionGroup(e,n,r,o){let a=new dt((m,v)=>m-v);const u=this.overlays.getIterator();for(;u.hasNext();){const m=u.getNext().value;if(m.getKey().getCollectionGroup()===n&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=Os(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const h=Os(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((m,v)=>h.set(m,v)),!(h.size()>=o)););return J.resolve(h)}St(e,n,r){const o=this.overlays.get(r.key);if(o!==null){const u=this.Or.get(o.largestBatchId).delete(r.key);this.Or.set(o.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new Vk(n,r));let a=this.Or.get(n);a===void 0&&(a=Ue(),this.Or.set(n,a)),this.Or.set(n,a.add(r.key))}}/**
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
 */class _D{constructor(){this.sessionToken=Ht.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,J.resolve()}}/**
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
 */class Zm{constructor(){this.Nr=new Pt(Ot.Br),this.Lr=new Pt(Ot.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(e,n){const r=new Ot(e,n);this.Nr=this.Nr.add(r),this.Lr=this.Lr.add(r)}qr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Qr(new Ot(e,n))}$r(e,n){e.forEach(r=>this.removeReference(r,n))}Ur(e){const n=new Ie(new ft([])),r=new Ot(n,e),o=new Ot(n,e+1),a=[];return this.Lr.forEachInRange([r,o],u=>{this.Qr(u),a.push(u.key)}),a}Kr(){this.Nr.forEach(e=>this.Qr(e))}Qr(e){this.Nr=this.Nr.delete(e),this.Lr=this.Lr.delete(e)}Wr(e){const n=new Ie(new ft([])),r=new Ot(n,e),o=new Ot(n,e+1);let a=Ue();return this.Lr.forEachInRange([r,o],u=>{a=a.add(u.key)}),a}containsKey(e){const n=new Ot(e,0),r=this.Nr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ot{constructor(e,n){this.key=e,this.Gr=n}static Br(e,n){return Ie.comparator(e.key,n.key)||Le(e.Gr,n.Gr)}static kr(e,n){return Le(e.Gr,n.Gr)||Ie.comparator(e.key,n.key)}}/**
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
 */class wD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new Pt(Ot.Br)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,o){const a=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Mk(a,n,r,o);this.mutationQueue.push(u);for(const h of o)this.zr=this.zr.add(new Ot(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return J.resolve(u)}lookupMutationBatch(e,n){return J.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,o=this.Hr(r),a=o<0?0:o;return J.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?zm:this.Jn-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ot(n,0),o=new Ot(n,Number.POSITIVE_INFINITY),a=[];return this.zr.forEachInRange([r,o],u=>{const h=this.jr(u.Gr);a.push(h)}),J.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pt(Le);return n.forEach(o=>{const a=new Ot(o,0),u=new Ot(o,Number.POSITIVE_INFINITY);this.zr.forEachInRange([a,u],h=>{r=r.add(h.Gr)})}),J.resolve(this.Jr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,o=r.length+1;let a=r;Ie.isDocumentKey(a)||(a=a.child(""));const u=new Ot(new Ie(a),0);let h=new Pt(Le);return this.zr.forEachWhile(f=>{const m=f.key.path;return!!r.isPrefixOf(m)&&(m.length===o&&(h=h.add(f.Gr)),!0)},u),J.resolve(this.Jr(h))}Jr(e){const n=[];return e.forEach(r=>{const o=this.jr(r);o!==null&&n.push(o)}),n}removeMutationBatch(e,n){Qe(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.zr;return J.forEach(n.mutations,o=>{const a=new Ot(o.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.zr=r})}Xn(e){}containsKey(e,n){const r=new Ot(n,0),o=this.zr.firstAfterOrEqual(r);return J.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Yr(e,n){return this.Hr(e)}Hr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}jr(e){const n=this.Hr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ED{constructor(e){this.Zr=e,this.docs=function(){return new dt(Ie.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,o=this.docs.get(r),a=o?o.size:0,u=this.Zr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return J.resolve(r?r.document.mutableCopy():Zt.newInvalidDocument(n))}getEntries(e,n){let r=si();return n.forEach(o=>{const a=this.docs.get(o);r=r.insert(o,a?a.document.mutableCopy():Zt.newInvalidDocument(o))}),J.resolve(r)}getDocumentsMatchingQuery(e,n,r,o){let a=si();const u=n.path,h=new Ie(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:m,value:{document:v}}=f.getNext();if(!u.isPrefixOf(m.path))break;m.path.length>u.length+1||Yx(Qx(v),r)<=0||(o.has(v.key)||nh(n,v))&&(a=a.insert(v.key,v.mutableCopy()))}return J.resolve(a)}getAllFromCollectionGroup(e,n,r,o){Se(9500)}Xr(e,n){return J.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ID(this)}getSize(e){return J.resolve(this.size)}}class ID extends pD{constructor(e){super(),this.vr=e}applyChanges(e){const n=[];return this.changes.forEach((r,o)=>{o.isValidDocument()?n.push(this.vr.addEntry(e,o)):this.vr.removeEntry(r)}),J.waitFor(n)}getFromCache(e,n){return this.vr.getEntry(e,n)}getAllFromCache(e,n){return this.vr.getEntries(e,n)}}/**
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
 */class TD{constructor(e){this.persistence=e,this.ei=new Hs(n=>Hm(n),qm),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.ti=0,this.ni=new Zm,this.targetCount=0,this.ri=ua.rr()}forEachTarget(e,n){return this.ei.forEach((r,o)=>n(o)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.ti)}allocateTargetId(e){return this.highestTargetId=this.ri.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ti&&(this.ti=n),J.resolve()}ar(e){this.ei.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ri=new ua(n),this.highestTargetId=n),e.sequenceNumber>this.ti&&(this.ti=e.sequenceNumber)}addTargetData(e,n){return this.ar(n),this.targetCount+=1,J.resolve()}updateTargetData(e,n){return this.ar(n),J.resolve()}removeTargetData(e,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,n,r){let o=0;const a=[];return this.ei.forEach((u,h)=>{h.sequenceNumber<=n&&r.get(h.targetId)===null&&(this.ei.delete(u),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),o++)}),J.waitFor(a).next(()=>o)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,n){const r=this.ei.get(n)||null;return J.resolve(r)}addMatchingKeys(e,n,r){return this.ni.qr(n,r),J.resolve()}removeMatchingKeys(e,n,r){this.ni.$r(n,r);const o=this.persistence.referenceDelegate,a=[];return o&&n.forEach(u=>{a.push(o.markPotentiallyOrphaned(e,u))}),J.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.ni.Ur(n),J.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ni.Wr(n);return J.resolve(r)}containsKey(e,n){return J.resolve(this.ni.containsKey(n))}}/**
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
 */class oT{constructor(e,n){this.ii={},this.overlays={},this.si=new Xd(0),this.oi=!1,this.oi=!0,this._i=new _D,this.referenceDelegate=e(this),this.ai=new TD(this),this.indexManager=new aD,this.remoteDocumentCache=function(o){return new ED(o)}(r=>this.referenceDelegate.ui(r)),this.serializer=new sD(n),this.ci=new yD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new vD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ii[e.toKey()];return r||(r=new wD(n,this.referenceDelegate),this.ii[e.toKey()]=r),r}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(e,n,r){de("MemoryPersistence","Starting transaction:",e);const o=new SD(this.si.next());return this.referenceDelegate.li(),r(o).next(a=>this.referenceDelegate.hi(o).next(()=>a)).toPromise().then(a=>(o.raiseOnCommittedEvent(),a))}Pi(e,n){return J.or(Object.values(this.ii).map(r=>()=>r.containsKey(e,n)))}}class SD extends Jx{constructor(e){super(),this.currentSequenceNumber=e}}class eg{constructor(e){this.persistence=e,this.Ti=new Zm,this.Ii=null}static Ei(e){return new eg(e)}get di(){if(this.Ii)return this.Ii;throw Se(60996)}addReference(e,n,r){return this.Ti.addReference(r,n),this.di.delete(r.toString()),J.resolve()}removeReference(e,n,r){return this.Ti.removeReference(r,n),this.di.add(r.toString()),J.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),J.resolve()}removeTarget(e,n){this.Ti.Ur(n.targetId).forEach(o=>this.di.add(o.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(o=>{o.forEach(a=>this.di.add(a.toString()))}).next(()=>r.removeTargetData(e,n))}li(){this.Ii=new Set}hi(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.di,r=>{const o=Ie.fromPath(r);return this.Ai(e,o).next(a=>{a||n.removeEntry(o,Re.min())})}).next(()=>(this.Ii=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ai(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(e){return 0}Ai(e,n){return J.or([()=>J.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Pi(e,n)])}}class Cd{constructor(e,n){this.persistence=e,this.Ri=new Hs(r=>tk(r.path),(r,o)=>r.isEqual(o)),this.garbageCollector=fD(this,n)}static Ei(e,n){return new Cd(e,n)}li(){}hi(e){return J.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.Vr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(o=>r+o))}Vr(e){let n=0;return this.Ar(e,r=>{n++}).next(()=>n)}Ar(e,n){return J.forEach(this.Ri,(r,o)=>this.gr(e,r,o).next(a=>a?J.resolve():n(o)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const o=this.persistence.getRemoteDocumentCache(),a=o.newChangeBuffer();return o.Xr(e,u=>this.gr(e,u,n).next(h=>{h||(r++,a.removeEntry(u,Re.min()))})).next(()=>a.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.Ri.set(n,e.currentSequenceNumber),J.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),J.resolve()}removeReference(e,n,r){return this.Ri.set(r,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,n){return this.Ri.set(n,e.currentSequenceNumber),J.resolve()}ui(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=td(e.data.value)),n}gr(e,n,r){return J.or([()=>this.persistence.Pi(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const o=this.Ri.get(n);return J.resolve(o!==void 0&&o>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tg{constructor(e,n,r,o){this.targetId=e,this.fromCache=n,this.ls=r,this.hs=o}static Ps(e,n){let r=Ue(),o=Ue();for(const a of n.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:o=o.add(a.doc.key)}return new tg(e,n.fromCache,r,o)}}/**
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
 */class AD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class bD{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return iR()?8:Zx(en())>0?6:4}()}initialize(e,n){this.As=e,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(e,n,r,o){const a={result:null};return this.Rs(e,n).next(u=>{a.result=u}).next(()=>{if(!a.result)return this.Vs(e,n,o,r).next(u=>{a.result=u})}).next(()=>{if(a.result)return;const u=new AD;return this.fs(e,n,u).next(h=>{if(a.result=h,this.Is)return this.gs(e,n,u,h.size)})}).next(()=>a.result)}gs(e,n,r,o){return r.documentReadCount<this.Es?(zo()<=Fe.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Wo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),J.resolve()):(zo()<=Fe.DEBUG&&de("QueryEngine","Query:",Wo(n),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.ds*o?(zo()<=Fe.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Wo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Pr(n))):J.resolve())}Rs(e,n){if(Ew(n))return J.resolve(null);let r=Pr(n);return this.indexManager.getIndexType(e,r).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=sm(n,null,"F"),r=Pr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=Ue(...a);return this.As.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const m=this.ps(n,h);return this.ys(n,m,u,f.readTime)?this.Rs(e,sm(n,null,"F")):this.ws(e,m,n,f)}))})))}Vs(e,n,r,o){return Ew(n)||o.isEqual(Re.min())?J.resolve(null):this.As.getDocuments(e,r).next(a=>{const u=this.ps(n,a);return this.ys(n,u,r,o)?J.resolve(null):(zo()<=Fe.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Wo(n)),this.ws(e,u,n,Kx(o,Gl)).next(h=>h))})}ps(e,n){let r=new Pt(VI(e));return n.forEach((o,a)=>{nh(e,a)&&(r=r.add(a))}),r}ys(e,n,r,o){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(o)>0)}fs(e,n,r){return zo()<=Fe.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Wo(n)),this.As.getDocumentsMatchingQuery(e,n,Hi.min(),r)}ws(e,n,r,o){return this.As.getDocumentsMatchingQuery(e,r,o).next(a=>(n.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="LocalStore",CD=3e8;class RD{constructor(e,n,r,o){this.persistence=e,this.bs=n,this.serializer=o,this.Ss=new dt(Le),this.Ds=new Hs(a=>Hm(a),qm),this.vs=new Map,this.Cs=e.getRemoteDocumentCache(),this.ai=e.getTargetCache(),this.ci=e.getBundleCache(),this.Fs(r)}Fs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gD(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ss))}}function PD(t,e,n,r){return new RD(t,e,n,r)}async function aT(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next(a=>(o=a,n.Fs(e),n.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],h=[];let f=Ue();for(const m of o){u.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}for(const m of a){h.push(m.batchId);for(const v of m.mutations)f=f.add(v.key)}return n.localDocuments.getDocuments(r,f).next(m=>({Ms:m,removedBatchIds:u,addedBatchIds:h}))})})}function xD(t,e){const n=xe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const o=e.batch.keys(),a=n.Cs.newChangeBuffer({trackRemovals:!0});return function(h,f,m,v){const _=m.batch,w=_.keys();let T=J.resolve();return w.forEach(D=>{T=T.next(()=>v.getEntry(f,D)).next(L=>{const x=m.docVersions.get(D);Qe(x!==null,48541),L.version.compareTo(x)<0&&(_.applyToRemoteDocument(L,m),L.isValidDocument()&&(L.setReadTime(m.commitVersion),v.addEntry(L)))})}),T.next(()=>h.mutationQueue.removeMutationBatch(f,_))}(n,r,e,a).next(()=>a.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(h){let f=Ue();for(let m=0;m<h.mutationResults.length;++m)h.mutationResults[m].transformResults.length>0&&(f=f.add(h.batch.mutations[m].key));return f}(e))).next(()=>n.localDocuments.getDocuments(r,o))})}function lT(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.ai.getLastRemoteSnapshotVersion(n))}function kD(t,e){const n=xe(t),r=e.snapshotVersion;let o=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",a=>{const u=n.Cs.newChangeBuffer({trackRemovals:!0});o=n.Ss;const h=[];e.targetChanges.forEach((v,_)=>{const w=o.get(_);if(!w)return;h.push(n.ai.removeMatchingKeys(a,v.removedDocuments,_).next(()=>n.ai.addMatchingKeys(a,v.addedDocuments,_)));let T=w.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(_)!==null?T=T.withResumeToken(Ht.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):v.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(v.resumeToken,r)),o=o.insert(_,T),function(L,x,K){return L.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=CD?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(w,T,v)&&h.push(n.ai.updateTargetData(a,T))});let f=si(),m=Ue();if(e.documentUpdates.forEach(v=>{e.resolvedLimboDocuments.has(v)&&h.push(n.persistence.referenceDelegate.updateLimboDocument(a,v))}),h.push(DD(a,u,e.documentUpdates).next(v=>{f=v.xs,m=v.Os})),!r.isEqual(Re.min())){const v=n.ai.getLastRemoteSnapshotVersion(a).next(_=>n.ai.setTargetsMetadata(a,a.currentSequenceNumber,r));h.push(v)}return J.waitFor(h).next(()=>u.apply(a)).next(()=>n.localDocuments.getLocalViewOfDocuments(a,f,m)).next(()=>f)}).then(a=>(n.Ss=o,a))}function DD(t,e,n){let r=Ue(),o=Ue();return n.forEach(a=>r=r.add(a)),e.getEntries(t,r).next(a=>{let u=si();return n.forEach((h,f)=>{const m=a.get(h);f.isFoundDocument()!==m.isFoundDocument()&&(o=o.add(h)),f.isNoDocument()&&f.version.isEqual(Re.min())?(e.removeEntry(h,f.readTime),u=u.insert(h,f)):!m.isValidDocument()||f.version.compareTo(m.version)>0||f.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(f),u=u.insert(h,f)):de(ng,"Ignoring outdated watch update for ",h,". Current version:",m.version," Watch version:",f.version)}),{xs:u,Os:o}})}function ND(t,e){const n=xe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=zm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function OD(t,e){const n=xe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let o;return n.ai.getTargetData(r,e).next(a=>a?(o=a,J.resolve(o)):n.ai.allocateTargetId(r).next(u=>(o=new Vi(e,u,"TargetPurposeListen",r.currentSequenceNumber),n.ai.addTargetData(r,o).next(()=>o))))}).then(r=>{const o=n.Ss.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(r.targetId,r),n.Ds.set(e,r.targetId)),r})}async function cm(t,e,n){const r=xe(t),o=r.Ss.get(e),a=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",a,u=>r.persistence.referenceDelegate.removeTarget(u,o))}catch(u){if(!Ea(u))throw u;de(ng,`Failed to update sequence numbers for target ${e}: ${u}`)}r.Ss=r.Ss.remove(e),r.Ds.delete(o.target)}function Ow(t,e,n){const r=xe(t);let o=Re.min(),a=Ue();return r.persistence.runTransaction("Execute query","readwrite",u=>function(f,m,v){const _=xe(f),w=_.Ds.get(v);return w!==void 0?J.resolve(_.Ss.get(w)):_.ai.getTargetData(m,v)}(r,u,Pr(e)).next(h=>{if(h)return o=h.lastLimboFreeSnapshotVersion,r.ai.getMatchingKeysForTargetId(u,h.targetId).next(f=>{a=f})}).next(()=>r.bs.getDocumentsMatchingQuery(u,e,n?o:Re.min(),n?a:Ue())).next(h=>(LD(r,Ek(e),h),{documents:h,Ns:a})))}function LD(t,e,n){let r=t.vs.get(e)||Re.min();n.forEach((o,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)}),t.vs.set(e,r)}class Lw{constructor(){this.activeTargetIds=Ck()}$s(e){this.activeTargetIds=this.activeTargetIds.add(e)}Us(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Qs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class MD{constructor(){this.So=new Lw,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.So.$s(e),this.Do[e]||"not-current"}updateQueryState(e,n,r){this.Do[e]=n}removeLocalQueryTarget(e){this.So.Us(e)}isLocalQueryTarget(e){return this.So.activeTargetIds.has(e)}clearQueryState(e){delete this.Do[e]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(e){return this.So.activeTargetIds.has(e)}start(){return this.So=new Lw,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VD{vo(e){}shutdown(){}}/**
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
 */const Mw="ConnectivityMonitor";class Vw{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(e){this.Oo.push(e)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){de(Mw,"Network connectivity changed: AVAILABLE");for(const e of this.Oo)e(0)}xo(){de(Mw,"Network connectivity changed: UNAVAILABLE");for(const e of this.Oo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bc=null;function dm(){return Bc===null?Bc=function(){return 268435456+Math.round(2147483648*Math.random())}():Bc++,"0x"+Bc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp="RestConnection",FD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UD{get Bo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+e.host,this.ko=`projects/${r}/databases/${o}`,this.qo=this.databaseId.database===wd?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Qo(e,n,r,o,a){const u=dm(),h=this.$o(e,n.toUriEncodedString());de(gp,`Sending RPC '${e}' ${u}:`,h,r);const f={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(f,o,a),this.Ko(e,h,f,r).then(m=>(de(gp,`Received RPC '${e}' ${u}: `,m),m),m=>{throw sa(gp,`RPC '${e}' ${u} failed with error: `,m,"url: ",h,"request:",r),m})}Wo(e,n,r,o,a,u){return this.Qo(e,n,r,o,a)}Uo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_a}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,a)=>e[a]=o),r&&r.headers.forEach((o,a)=>e[a]=o)}$o(e,n){const r=FD[e];return`${this.Lo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class jD{constructor(e){this.Go=e.Go,this.zo=e.zo}jo(e){this.Ho=e}Jo(e){this.Yo=e}Zo(e){this.Xo=e}onMessage(e){this.e_=e}close(){this.zo()}send(e){this.Go(e)}t_(){this.Ho()}n_(){this.Yo()}r_(e){this.Xo(e)}i_(e){this.e_(e)}}/**
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
 */const Xt="WebChannelConnection";class BD extends UD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ko(e,n,r,o){const a=dm();return new Promise((u,h)=>{const f=new dI;f.setWithCredentials(!0),f.listenOnce(hI.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ed.NO_ERROR:const v=f.getResponseJson();de(Xt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case ed.TIMEOUT:de(Xt,`RPC '${e}' ${a} timed out`),h(new Ee(ie.DEADLINE_EXCEEDED,"Request time out"));break;case ed.HTTP_ERROR:const _=f.getStatus();if(de(Xt,`RPC '${e}' ${a} failed with status:`,_,"response text:",f.getResponseText()),_>0){let w=f.getResponseJson();Array.isArray(w)&&(w=w[0]);const T=w==null?void 0:w.error;if(T&&T.status&&T.message){const D=function(x){const K=x.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(K)>=0?K:ie.UNKNOWN}(T.status);h(new Ee(D,T.message))}else h(new Ee(ie.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new Ee(ie.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{s_:e,streamId:a,o_:f.getLastErrorCode(),__:f.getLastError()})}}finally{de(Xt,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(o);de(Xt,`RPC '${e}' ${a} sending request:`,o),f.send(n,"POST",m,r,15)})}a_(e,n,r){const o=dm(),a=[this.Lo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=mI(),h=pI(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(f.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(f.useFetchStreams=!0),this.Uo(f.initMessageHeaders,n,r),f.encodeInitMessageHeaders=!0;const v=a.join("");de(Xt,`Creating RPC '${e}' stream ${o}: ${v}`,f);const _=u.createWebChannel(v,f);let w=!1,T=!1;const D=new jD({Go:x=>{T?de(Xt,`Not sending because RPC '${e}' stream ${o} is closed:`,x):(w||(de(Xt,`Opening RPC '${e}' stream ${o} transport.`),_.open(),w=!0),de(Xt,`RPC '${e}' stream ${o} sending:`,x),_.send(x))},zo:()=>_.close()}),L=(x,K,q)=>{x.listen(K,G=>{try{q(G)}catch(z){setTimeout(()=>{throw z},0)}})};return L(_,Rl.EventType.OPEN,()=>{T||(de(Xt,`RPC '${e}' stream ${o} transport opened.`),D.t_())}),L(_,Rl.EventType.CLOSE,()=>{T||(T=!0,de(Xt,`RPC '${e}' stream ${o} transport closed`),D.r_())}),L(_,Rl.EventType.ERROR,x=>{T||(T=!0,sa(Xt,`RPC '${e}' stream ${o} transport errored. Name:`,x.name,"Message:",x.message),D.r_(new Ee(ie.UNAVAILABLE,"The operation could not be completed")))}),L(_,Rl.EventType.MESSAGE,x=>{var K;if(!T){const q=x.data[0];Qe(!!q,16349);const G=q,z=(G==null?void 0:G.error)||((K=G[0])===null||K===void 0?void 0:K.error);if(z){de(Xt,`RPC '${e}' stream ${o} received error:`,z);const X=z.status;let Q=function(C){const k=wt[C];if(k!==void 0)return QI(k)}(X),b=z.message;Q===void 0&&(Q=ie.INTERNAL,b="Unknown error status: "+X+" with message "+z.message),T=!0,D.r_(new Ee(Q,b)),_.close()}else de(Xt,`RPC '${e}' stream ${o} received:`,q),D.i_(q)}}),L(h,fI.STAT_EVENT,x=>{x.stat===Zp.PROXY?de(Xt,`RPC '${e}' stream ${o} detected buffering proxy`):x.stat===Zp.NOPROXY&&de(Xt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{D.n_()},0),D}}function yp(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t){return new Gk(t,!0)}/**
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
 */class uT{constructor(e,n,r=1e3,o=1.5,a=6e4){this.bi=e,this.timerId=n,this.u_=r,this.c_=o,this.l_=a,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(e){this.cancel();const n=Math.floor(this.h_+this.d_()),r=Math.max(0,Date.now()-this.T_),o=Math.max(0,n-r);o>0&&de("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,o,()=>(this.T_=Date.now(),e())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
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
 */const Fw="PersistentStream";class cT{constructor(e,n,r,o,a,u,h,f){this.bi=e,this.R_=r,this.V_=o,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new uT(e,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(e){this.M_(),this.stream.send(e)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(e,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,e!==4?this.y_.reset():n&&n.code===ie.RESOURCE_EXHAUSTED?(ii(n.toString()),ii("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const e=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,o])=>{this.m_===n&&this.B_(r,o)},r=>{e(()=>{const o=new Ee(ie.UNKNOWN,"Fetching auth token failed: "+r.message);return this.L_(o)})})}B_(e,n){const r=this.N_(this.m_);this.stream=this.k_(e,n),this.stream.jo(()=>{r(()=>this.listener.jo())}),this.stream.Jo(()=>{r(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(o=>{r(()=>this.L_(o))}),this.stream.onMessage(o=>{r(()=>++this.p_==1?this.q_(o):this.onNext(o))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(e){return de(Fw,`close with error: ${e}`),this.stream=null,this.close(4,e)}N_(e){return n=>{this.bi.enqueueAndForget(()=>this.m_===e?n():(de(Fw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $D extends cT{constructor(e,n,r,o,a,u){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,u),this.serializer=a}k_(e,n){return this.connection.a_("Listen",e,n)}q_(e){return this.onNext(e)}onNext(e){this.y_.reset();const n=Kk(this.serializer,e),r=function(a){if(!("targetChange"in a))return Re.min();const u=a.targetChange;return u.targetIds&&u.targetIds.length?Re.min():u.readTime?xr(u.readTime):Re.min()}(e);return this.listener.Q_(n,r)}U_(e){const n={};n.database=um(this.serializer),n.addTarget=function(a,u){let h;const f=u.target;if(h=im(f)?{documents:Xk(a,f)}:{query:Jk(a,f).gt},h.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){h.resumeToken=JI(a,u.resumeToken);const m=om(a,u.expectedCount);m!==null&&(h.expectedCount=m)}else if(u.snapshotVersion.compareTo(Re.min())>0){h.readTime=bd(a,u.snapshotVersion.toTimestamp());const m=om(a,u.expectedCount);m!==null&&(h.expectedCount=m)}return h}(this.serializer,e);const r=eD(this.serializer,e);r&&(n.labels=r),this.F_(n)}K_(e){const n={};n.database=um(this.serializer),n.removeTarget=e,this.F_(n)}}class zD extends cT{constructor(e,n,r,o,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,u),this.serializer=a}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(e,n){return this.connection.a_("Write",e,n)}q_(e){return Qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.z_()}onNext(e){Qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.y_.reset();const n=Yk(e.writeResults,e.commitTime),r=xr(e.commitTime);return this.listener.j_(r,n)}H_(){const e={};e.database=um(this.serializer),this.F_(e)}G_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Qk(this.serializer,r))};this.F_(n)}}/**
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
 */class WD{}class GD extends WD{constructor(e,n,r,o){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.J_=!1}Y_(){if(this.J_)throw new Ee(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(e,n,r,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Qo(e,am(n,r),o,a,u)).catch(a=>{throw a.name==="FirebaseError"?(a.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Ee(ie.UNKNOWN,a.toString())})}Wo(e,n,r,o,a){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.Wo(e,am(n,r),o,u,h,a)).catch(u=>{throw u.name==="FirebaseError"?(u.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new Ee(ie.UNKNOWN,u.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class HD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(e){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.na("Offline")))}set(e){this.sa(),this.Z_=0,e==="Online"&&(this.ea=!1),this.na(e)}na(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ra(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(ii(n),this.ea=!1):de("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
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
 */const zs="RemoteStore";class qD{constructor(e,n,r,o,a){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=a,this.ca.vo(u=>{r.enqueueAndForget(async()=>{Ks(this)&&(de(zs,"Restarting streams for network reachability change."),await async function(f){const m=xe(f);m.aa.add(4),await fu(m),m.la.set("Unknown"),m.aa.delete(4),await lh(m)}(this))})}),this.la=new HD(r,o)}}async function lh(t){if(Ks(t))for(const e of t.ua)await e(!0)}async function fu(t){for(const e of t.ua)await e(!1)}function dT(t,e){const n=xe(t);n._a.has(e.targetId)||(n._a.set(e.targetId,e),og(n)?sg(n):Ia(n).b_()&&ig(n,e))}function rg(t,e){const n=xe(t),r=Ia(n);n._a.delete(e),r.b_()&&hT(n,e),n._a.size===0&&(r.b_()?r.v_():Ks(n)&&n.la.set("Unknown"))}function ig(t,e){if(t.ha.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ia(t).U_(e)}function hT(t,e){t.ha.Ke(e),Ia(t).K_(e)}function sg(t){t.ha=new Bk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t._a.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Ia(t).start(),t.la.ta()}function og(t){return Ks(t)&&!Ia(t).w_()&&t._a.size>0}function Ks(t){return xe(t).aa.size===0}function fT(t){t.ha=void 0}async function KD(t){t.la.set("Online")}async function QD(t){t._a.forEach((e,n)=>{ig(t,e)})}async function YD(t,e){fT(t),og(t)?(t.la.ia(e),sg(t)):t.la.set("Unknown")}async function XD(t,e,n){if(t.la.set("Online"),e instanceof XI&&e.state===2&&e.cause)try{await async function(o,a){const u=a.cause;for(const h of a.targetIds)o._a.has(h)&&(await o.remoteSyncer.rejectListen(h,u),o._a.delete(h),o.ha.removeTarget(h))}(t,e)}catch(r){de(zs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Rd(t,r)}else if(e instanceof id?t.ha.Xe(e):e instanceof YI?t.ha.ot(e):t.ha.nt(e),!n.isEqual(Re.min()))try{const r=await lT(t.localStore);n.compareTo(r)>=0&&await function(a,u){const h=a.ha.It(u);return h.targetChanges.forEach((f,m)=>{if(f.resumeToken.approximateByteSize()>0){const v=a._a.get(m);v&&a._a.set(m,v.withResumeToken(f.resumeToken,u))}}),h.targetMismatches.forEach((f,m)=>{const v=a._a.get(f);if(!v)return;a._a.set(f,v.withResumeToken(Ht.EMPTY_BYTE_STRING,v.snapshotVersion)),hT(a,f);const _=new Vi(v.target,f,m,v.sequenceNumber);ig(a,_)}),a.remoteSyncer.applyRemoteEvent(h)}(t,n)}catch(r){de(zs,"Failed to raise snapshot:",r),await Rd(t,r)}}async function Rd(t,e,n){if(!Ea(e))throw e;t.aa.add(1),await fu(t),t.la.set("Offline"),n||(n=()=>lT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{de(zs,"Retrying IndexedDB access"),await n(),t.aa.delete(1),await lh(t)})}function pT(t,e){return e().catch(n=>Rd(t,n,e))}async function uh(t){const e=xe(t),n=Yi(e);let r=e.oa.length>0?e.oa[e.oa.length-1].batchId:zm;for(;JD(e);)try{const o=await ND(e.localStore,r);if(o===null){e.oa.length===0&&n.v_();break}r=o.batchId,ZD(e,o)}catch(o){await Rd(e,o)}mT(e)&&gT(e)}function JD(t){return Ks(t)&&t.oa.length<10}function ZD(t,e){t.oa.push(e);const n=Yi(t);n.b_()&&n.W_&&n.G_(e.mutations)}function mT(t){return Ks(t)&&!Yi(t).w_()&&t.oa.length>0}function gT(t){Yi(t).start()}async function eN(t){Yi(t).H_()}async function tN(t){const e=Yi(t);for(const n of t.oa)e.G_(n.mutations)}async function nN(t,e,n){const r=t.oa.shift(),o=Ym.from(r,e,n);await pT(t,()=>t.remoteSyncer.applySuccessfulWrite(o)),await uh(t)}async function rN(t,e){e&&Yi(t).W_&&await async function(r,o){if(function(u){return Uk(u)&&u!==ie.ABORTED}(o.code)){const a=r.oa.shift();Yi(r).D_(),await pT(r,()=>r.remoteSyncer.rejectFailedWrite(a.batchId,o)),await uh(r)}}(t,e),mT(t)&&gT(t)}async function Uw(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),de(zs,"RemoteStore received new credentials");const r=Ks(n);n.aa.add(3),await fu(n),r&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.aa.delete(3),await lh(n)}async function iN(t,e){const n=xe(t);e?(n.aa.delete(2),await lh(n)):e||(n.aa.add(2),await fu(n),n.la.set("Unknown"))}function Ia(t){return t.Pa||(t.Pa=function(n,r,o){const a=xe(n);return a.Y_(),new $D(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(t.datastore,t.asyncQueue,{jo:KD.bind(null,t),Jo:QD.bind(null,t),Zo:YD.bind(null,t),Q_:XD.bind(null,t)}),t.ua.push(async e=>{e?(t.Pa.D_(),og(t)?sg(t):t.la.set("Unknown")):(await t.Pa.stop(),fT(t))})),t.Pa}function Yi(t){return t.Ta||(t.Ta=function(n,r,o){const a=xe(n);return a.Y_(),new zD(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,o)}(t.datastore,t.asyncQueue,{jo:()=>Promise.resolve(),Jo:eN.bind(null,t),Zo:rN.bind(null,t),z_:tN.bind(null,t),j_:nN.bind(null,t)}),t.ua.push(async e=>{e?(t.Ta.D_(),await uh(t)):(await t.Ta.stop(),t.oa.length>0&&(de(zs,`Stopping write stream with ${t.oa.length} pending writes`),t.oa=[]))})),t.Ta}/**
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
 */class ag{constructor(e,n,r,o,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=a,this.deferred=new zi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,o,a){const u=Date.now()+r,h=new ag(e,n,u,o,a);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ee(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lg(t,e){if(ii("AsyncQueue",`${e}: ${t}`),Ea(t))return new Ee(ie.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Jo{static emptySet(e){return new Jo(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Ie.comparator(n.key,r.key):(n,r)=>Ie.comparator(n.key,r.key),this.keyedMap=Pl(),this.sortedSet=new dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Jo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,a=r.getNext().key;if(!o.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Jo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class jw{constructor(){this.Ia=new dt(Ie.comparator)}track(e){const n=e.doc.key,r=this.Ia.get(n);r?e.type!==0&&r.type===3?this.Ia=this.Ia.insert(n,e):e.type===3&&r.type!==1?this.Ia=this.Ia.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Ia=this.Ia.remove(n):e.type===1&&r.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:e.doc}):Se(63341,{Vt:e,Ea:r}):this.Ia=this.Ia.insert(n,e)}da(){const e=[];return this.Ia.inorderTraversal((n,r)=>{e.push(r)}),e}}class ca{constructor(e,n,r,o,a,u,h,f,m){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=a,this.fromCache=u,this.syncStateChanged=h,this.excludesMetadataChanges=f,this.hasCachedResults=m}static fromInitialDocuments(e,n,r,o,a){const u=[];return n.forEach(h=>{u.push({type:0,doc:h})}),new ca(e,n,Jo.emptySet(n),u,r,o,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&th(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
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
 */class sN{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(e=>e.ma())}}class oN{constructor(){this.queries=Bw(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,r){const o=xe(n),a=o.queries;o.queries=Bw(),a.forEach((u,h)=>{for(const f of h.Ra)f.onError(r)})})(this,new Ee(ie.ABORTED,"Firestore shutting down"))}}function Bw(){return new Hs(t=>MI(t),th)}async function aN(t,e){const n=xe(t);let r=3;const o=e.query;let a=n.queries.get(o);a?!a.Va()&&e.ma()&&(r=2):(a=new sN,r=e.ma()?0:1);try{switch(r){case 0:a.Aa=await n.onListen(o,!0);break;case 1:a.Aa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(u){const h=lg(u,`Initialization of query '${Wo(e.query)}' failed`);return void e.onError(h)}n.queries.set(o,a),a.Ra.push(e),e.ga(n.onlineState),a.Aa&&e.pa(a.Aa)&&ug(n)}async function lN(t,e){const n=xe(t),r=e.query;let o=3;const a=n.queries.get(r);if(a){const u=a.Ra.indexOf(e);u>=0&&(a.Ra.splice(u,1),a.Ra.length===0?o=e.ma()?0:1:!a.Va()&&e.ma()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uN(t,e){const n=xe(t);let r=!1;for(const o of e){const a=o.query,u=n.queries.get(a);if(u){for(const h of u.Ra)h.pa(o)&&(r=!0);u.Aa=o}}r&&ug(n)}function cN(t,e,n){const r=xe(t),o=r.queries.get(e);if(o)for(const a of o.Ra)a.onError(n);r.queries.delete(e)}function ug(t){t.fa.forEach(e=>{e.next()})}var hm,$w;($w=hm||(hm={})).ya="default",$w.Cache="cache";class dN{constructor(e,n,r){this.query=e,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=r||{}}pa(e){if(!this.options.includeMetadataChanges){const r=[];for(const o of e.docChanges)o.type!==3&&r.push(o);e=new ca(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ba?this.Da(e)&&(this.wa.next(e),n=!0):this.va(e,this.onlineState)&&(this.Ca(e),n=!0),this.Sa=e,n}onError(e){this.wa.error(e)}ga(e){this.onlineState=e;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,e)&&(this.Ca(this.Sa),n=!0),n}va(e,n){if(!e.fromCache||!this.ma())return!0;const r=n!=="Offline";return(!this.options.Fa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Da(e){if(e.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(e){e=ca.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ba=!0,this.wa.next(e)}ma(){return this.options.source!==hm.Cache}}/**
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
 */class yT{constructor(e){this.key=e}}class vT{constructor(e){this.key=e}}class hN{constructor(e,n){this.query=e,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Ue(),this.mutatedKeys=Ue(),this.Ua=VI(e),this.Ka=new Jo(this.Ua)}get Wa(){return this.qa}Ga(e,n){const r=n?n.za:new jw,o=n?n.Ka:this.Ka;let a=n?n.mutatedKeys:this.mutatedKeys,u=o,h=!1;const f=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,m=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((v,_)=>{const w=o.get(v),T=nh(this.query,_)?_:null,D=!!w&&this.mutatedKeys.has(w.key),L=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let x=!1;w&&T?w.data.isEqual(T.data)?D!==L&&(r.track({type:3,doc:T}),x=!0):this.ja(w,T)||(r.track({type:2,doc:T}),x=!0,(f&&this.Ua(T,f)>0||m&&this.Ua(T,m)<0)&&(h=!0)):!w&&T?(r.track({type:0,doc:T}),x=!0):w&&!T&&(r.track({type:1,doc:w}),x=!0,(f||m)&&(h=!0)),x&&(T?(u=u.add(T),a=L?a.add(v):a.delete(v)):(u=u.delete(v),a=a.delete(v)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const v=this.query.limitType==="F"?u.last():u.first();u=u.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{Ka:u,za:r,ys:h,mutatedKeys:a}}ja(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,o){const a=this.Ka;this.Ka=e.Ka,this.mutatedKeys=e.mutatedKeys;const u=e.za.da();u.sort((v,_)=>function(T,D){const L=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{Vt:x})}};return L(T)-L(D)}(v.type,_.type)||this.Ua(v.doc,_.doc)),this.Ha(r),o=o!=null&&o;const h=n&&!o?this.Ja():[],f=this.$a.size===0&&this.current&&!o?1:0,m=f!==this.Qa;return this.Qa=f,u.length!==0||m?{snapshot:new ca(this.query,e.Ka,a,u,e.mutatedKeys,f===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ya:h}:{Ya:h}}ga(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new jw,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(e){return!this.qa.has(e)&&!!this.Ka.has(e)&&!this.Ka.get(e).hasLocalMutations}Ha(e){e&&(e.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=e.current)}Ja(){if(!this.current)return[];const e=this.$a;this.$a=Ue(),this.Ka.forEach(r=>{this.Za(r.key)&&(this.$a=this.$a.add(r.key))});const n=[];return e.forEach(r=>{this.$a.has(r)||n.push(new vT(r))}),this.$a.forEach(r=>{e.has(r)||n.push(new yT(r))}),n}Xa(e){this.qa=e.Ns,this.$a=Ue();const n=this.Ga(e.documents);return this.applyChanges(n,!0)}eu(){return ca.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const cg="SyncEngine";class fN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pN{constructor(e){this.key=e,this.tu=!1}}class mN{constructor(e,n,r,o,a,u){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.nu={},this.ru=new Hs(h=>MI(h),th),this.iu=new Map,this.su=new Set,this.ou=new dt(Ie.comparator),this._u=new Map,this.au=new Zm,this.uu={},this.cu=new Map,this.lu=ua.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function gN(t,e,n=!0){const r=ST(t);let o;const a=r.ru.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),o=a.view.eu()):o=await _T(r,e,n,!0),o}async function yN(t,e){const n=ST(t);await _T(n,e,!0,!1)}async function _T(t,e,n,r){const o=await OD(t.localStore,Pr(e)),a=o.targetId,u=t.sharedClientState.addLocalQueryTarget(a,n);let h;return r&&(h=await vN(t,e,a,u==="current",o.resumeToken)),t.isPrimaryClient&&n&&dT(t.remoteStore,o),h}async function vN(t,e,n,r,o){t.Pu=(_,w,T)=>async function(L,x,K,q){let G=x.view.Ga(K);G.ys&&(G=await Ow(L.localStore,x.query,!1).then(({documents:b})=>x.view.Ga(b,G)));const z=q&&q.targetChanges.get(x.targetId),X=q&&q.targetMismatches.get(x.targetId)!=null,Q=x.view.applyChanges(G,L.isPrimaryClient,z,X);return Ww(L,x.targetId,Q.Ya),Q.snapshot}(t,_,w,T);const a=await Ow(t.localStore,e,!0),u=new hN(e,a.Ns),h=u.Ga(a.documents),f=hu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",o),m=u.applyChanges(h,t.isPrimaryClient,f);Ww(t,n,m.Ya);const v=new fN(e,n,u);return t.ru.set(e,v),t.iu.has(n)?t.iu.get(n).push(e):t.iu.set(n,[e]),m.snapshot}async function _N(t,e,n){const r=xe(t),o=r.ru.get(e),a=r.iu.get(o.targetId);if(a.length>1)return r.iu.set(o.targetId,a.filter(u=>!th(u,e))),void r.ru.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await cm(r.localStore,o.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(o.targetId),n&&rg(r.remoteStore,o.targetId),fm(r,o.targetId)}).catch(wa)):(fm(r,o.targetId),await cm(r.localStore,o.targetId,!0))}async function wN(t,e){const n=xe(t),r=n.ru.get(e),o=n.iu.get(r.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rg(n.remoteStore,r.targetId))}async function EN(t,e,n){const r=RN(t);try{const o=await function(u,h){const f=xe(u),m=Rt.now(),v=h.reduce((T,D)=>T.add(D.key),Ue());let _,w;return f.persistence.runTransaction("Locally write mutations","readwrite",T=>{let D=si(),L=Ue();return f.Cs.getEntries(T,v).next(x=>{D=x,D.forEach((K,q)=>{q.isValidDocument()||(L=L.add(K))})}).next(()=>f.localDocuments.getOverlayedDocuments(T,D)).next(x=>{_=x;const K=[];for(const q of h){const G=Ok(q,_.get(q.key).overlayedDocument);G!=null&&K.push(new qs(q.key,G,PI(G.value.mapValue),ti.exists(!0)))}return f.mutationQueue.addMutationBatch(T,m,K,h)}).next(x=>{w=x;const K=x.applyToLocalDocumentSet(_,L);return f.documentOverlayCache.saveOverlays(T,x.batchId,K)})}).then(()=>({batchId:w.batchId,changes:UI(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(o.batchId),function(u,h,f){let m=u.uu[u.currentUser.toKey()];m||(m=new dt(Le)),m=m.insert(h,f),u.uu[u.currentUser.toKey()]=m}(r,o.batchId,n),await pu(r,o.changes),await uh(r.remoteStore)}catch(o){const a=lg(o,"Failed to persist write");n.reject(a)}}async function wT(t,e){const n=xe(t);try{const r=await kD(n.localStore,e);e.targetChanges.forEach((o,a)=>{const u=n._u.get(a);u&&(Qe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?u.tu=!0:o.modifiedDocuments.size>0?Qe(u.tu,14607):o.removedDocuments.size>0&&(Qe(u.tu,42227),u.tu=!1))}),await pu(n,r,e)}catch(r){await wa(r)}}function zw(t,e,n){const r=xe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.ru.forEach((a,u)=>{const h=u.view.ga(e);h.snapshot&&o.push(h.snapshot)}),function(u,h){const f=xe(u);f.onlineState=h;let m=!1;f.queries.forEach((v,_)=>{for(const w of _.Ra)w.ga(h)&&(m=!0)}),m&&ug(f)}(r.eventManager,e),o.length&&r.nu.Q_(o),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IN(t,e,n){const r=xe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const o=r._u.get(e),a=o&&o.key;if(a){let u=new dt(Ie.comparator);u=u.insert(a,Zt.newNoDocument(a,Re.min()));const h=Ue().add(a),f=new oh(Re.min(),new Map,new dt(Le),u,h);await wT(r,f),r.ou=r.ou.remove(a),r._u.delete(e),dg(r)}else await cm(r.localStore,e,!1).then(()=>fm(r,e,n)).catch(wa)}async function TN(t,e){const n=xe(t),r=e.batch.batchId;try{const o=await xD(n.localStore,e);IT(n,r,null),ET(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pu(n,o)}catch(o){await wa(o)}}async function SN(t,e,n){const r=xe(t);try{const o=await function(u,h){const f=xe(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",m=>{let v;return f.mutationQueue.lookupMutationBatch(m,h).next(_=>(Qe(_!==null,37113),v=_.keys(),f.mutationQueue.removeMutationBatch(m,_))).next(()=>f.mutationQueue.performConsistencyCheck(m)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(m,v,h)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v)).next(()=>f.localDocuments.getDocuments(m,v))})}(r.localStore,e);IT(r,e,n),ET(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pu(r,o)}catch(o){await wa(o)}}function ET(t,e){(t.cu.get(e)||[]).forEach(n=>{n.resolve()}),t.cu.delete(e)}function IT(t,e,n){const r=xe(t);let o=r.uu[r.currentUser.toKey()];if(o){const a=o.get(e);a&&(n?a.reject(n):a.resolve(),o=o.remove(e)),r.uu[r.currentUser.toKey()]=o}}function fm(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.iu.get(e))t.ru.delete(r),n&&t.nu.Tu(r,n);t.iu.delete(e),t.isPrimaryClient&&t.au.Ur(e).forEach(r=>{t.au.containsKey(r)||TT(t,r)})}function TT(t,e){t.su.delete(e.path.canonicalString());const n=t.ou.get(e);n!==null&&(rg(t.remoteStore,n),t.ou=t.ou.remove(e),t._u.delete(n),dg(t))}function Ww(t,e,n){for(const r of n)r instanceof yT?(t.au.addReference(r.key,e),AN(t,r)):r instanceof vT?(de(cg,"Document no longer in limbo: "+r.key),t.au.removeReference(r.key,e),t.au.containsKey(r.key)||TT(t,r.key)):Se(19791,{Iu:r})}function AN(t,e){const n=e.key,r=n.path.canonicalString();t.ou.get(n)||t.su.has(r)||(de(cg,"New document in limbo: "+n),t.su.add(r),dg(t))}function dg(t){for(;t.su.size>0&&t.ou.size<t.maxConcurrentLimboResolutions;){const e=t.su.values().next().value;t.su.delete(e);const n=new Ie(ft.fromString(e)),r=t.lu.next();t._u.set(r,new pN(n)),t.ou=t.ou.insert(n,r),dT(t.remoteStore,new Vi(Pr(Km(n.path)),r,"TargetPurposeLimboResolution",Xd.le))}}async function pu(t,e,n){const r=xe(t),o=[],a=[],u=[];r.ru.isEmpty()||(r.ru.forEach((h,f)=>{u.push(r.Pu(f,e,n).then(m=>{var v;if((m||n)&&r.isPrimaryClient){const _=m?!m.fromCache:(v=n==null?void 0:n.targetChanges.get(f.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(f.targetId,_?"current":"not-current")}if(m){o.push(m);const _=tg.Ps(f.targetId,m);a.push(_)}}))}),await Promise.all(u),r.nu.Q_(o),await async function(f,m){const v=xe(f);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>J.forEach(m,w=>J.forEach(w.ls,T=>v.persistence.referenceDelegate.addReference(_,w.targetId,T)).next(()=>J.forEach(w.hs,T=>v.persistence.referenceDelegate.removeReference(_,w.targetId,T)))))}catch(_){if(!Ea(_))throw _;de(ng,"Failed to update sequence numbers: "+_)}for(const _ of m){const w=_.targetId;if(!_.fromCache){const T=v.Ss.get(w),D=T.snapshotVersion,L=T.withLastLimboFreeSnapshotVersion(D);v.Ss=v.Ss.insert(w,L)}}}(r.localStore,a))}async function bN(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){de(cg,"User change. New user:",e.toKey());const r=await aT(n.localStore,e);n.currentUser=e,function(a,u){a.cu.forEach(h=>{h.forEach(f=>{f.reject(new Ee(ie.CANCELLED,u))})}),a.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pu(n,r.Ms)}}function CN(t,e){const n=xe(t),r=n._u.get(e);if(r&&r.tu)return Ue().add(r.key);{let o=Ue();const a=n.iu.get(e);if(!a)return o;for(const u of a){const h=n.ru.get(u);o=o.unionWith(h.view.Wa)}return o}}function ST(t){const e=xe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=CN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IN.bind(null,e),e.nu.Q_=uN.bind(null,e.eventManager),e.nu.Tu=cN.bind(null,e.eventManager),e}function RN(t){const e=xe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SN.bind(null,e),e}class Pd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ah(e.databaseInfo.databaseId),this.sharedClientState=this.Au(e),this.persistence=this.Ru(e),await this.persistence.start(),this.localStore=this.Vu(e),this.gcScheduler=this.mu(e,this.localStore),this.indexBackfillerScheduler=this.fu(e,this.localStore)}mu(e,n){return null}fu(e,n){return null}Vu(e){return PD(this.persistence,new bD,e.initialUser,this.serializer)}Ru(e){return new oT(eg.Ei,this.serializer)}Au(e){return new MD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Pd.provider={build:()=>new Pd};class PN extends Pd{constructor(e){super(),this.cacheSizeBytes=e}mu(e,n){Qe(this.persistence.referenceDelegate instanceof Cd,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new dD(r,e.asyncQueue,n)}Ru(e){const n=this.cacheSizeBytes!==void 0?_n.withCacheSize(this.cacheSizeBytes):_n.DEFAULT;return new oT(r=>Cd.Ei(r,n),this.serializer)}}class pm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bN.bind(null,this.syncEngine),await iN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new oN}()}createDatastore(e){const n=ah(e.databaseInfo.databaseId),r=function(a){return new BD(a)}(e.databaseInfo);return function(a,u,h,f){return new GD(a,u,h,f)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,o,a,u,h){return new qD(r,o,a,u,h)}(this.localStore,this.datastore,e.asyncQueue,n=>zw(this.syncEngine,n,0),function(){return Vw.C()?new Vw:new VD}())}createSyncEngine(e,n){return function(o,a,u,h,f,m,v){const _=new mN(o,a,u,h,f,m);return v&&(_.hu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(o){const a=xe(o);de(zs,"RemoteStore shutting down."),a.aa.add(5),await fu(a),a.ca.shutdown(),a.la.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pm.provider={build:()=>new pm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class xN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.pu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.pu(this.observer.error,e):ii("Uncaught Error in snapshot listener:",e.toString()))}yu(){this.muted=!0}pu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Xi="FirestoreClient";class kN{constructor(e,n,r,o,a){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=Jt.UNAUTHENTICATED,this.clientId=_I.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,async u=>{de(Xi,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(de(Xi,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vp(t,e){t.asyncQueue.verifyOperationInProgress(),de(Xi,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async o=>{r.isEqual(o)||(await aT(e.localStore,o),r=o)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gw(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DN(t);de(Xi,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Uw(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,o)=>Uw(e.remoteStore,o)),t._onlineComponents=e}async function DN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){de(Xi,"Using user provided OfflineComponentProvider");try{await vp(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(o){return o.name==="FirebaseError"?o.code===ie.FAILED_PRECONDITION||o.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;sa("Error using user provided cache. Falling back to memory cache: "+n),await vp(t,new Pd)}}else de(Xi,"Using default OfflineComponentProvider"),await vp(t,new PN(void 0));return t._offlineComponents}async function AT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(de(Xi,"Using user provided OnlineComponentProvider"),await Gw(t,t._uninitializedComponentsProvider._online)):(de(Xi,"Using default OnlineComponentProvider"),await Gw(t,new pm))),t._onlineComponents}function NN(t){return AT(t).then(e=>e.syncEngine)}async function ON(t){const e=await AT(t),n=e.eventManager;return n.onListen=gN.bind(null,e.syncEngine),n.onUnlisten=_N.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yN.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=wN.bind(null,e.syncEngine),n}function LN(t,e,n={}){const r=new zi;return t.asyncQueue.enqueueAndForget(async()=>function(a,u,h,f,m){const v=new xN({next:w=>{v.yu(),u.enqueueAndForget(()=>lN(a,_));const T=w.docs.has(h);!T&&w.fromCache?m.reject(new Ee(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&w.fromCache&&f&&f.source==="server"?m.reject(new Ee(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):m.resolve(w)},error:w=>m.reject(w)}),_=new dN(Km(h.path),v,{includeMetadataChanges:!0,Fa:!0});return aN(a,_)}(await ON(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function bT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw=new Map;/**
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
 */function MN(t,e,n){if(!n)throw new Ee(ie.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VN(t,e,n,r){if(e===!0&&r===!0)throw new Ee(ie.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qw(t){if(!Ie.isDocumentKey(t))throw new Ee(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function hg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Se(12329,{type:typeof t})}function Xl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ee(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hg(t);throw new Ee(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="firestore.googleapis.com",Kw=!0;class Qw{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Ee(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=CT,this.ssl=Kw}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Kw;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sT;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uD)throw new Ee(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new Ee(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new Ee(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new Ee(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,o){return r.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fg{constructor(e,n,r,o){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ee(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Ee(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ux;switch(r.type){case"firstParty":return new zx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ee(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Hw.get(n);r&&(de("ComponentProvider","Removing Datastore"),Hw.delete(n),r.terminate())}(this),Promise.resolve()}}function FN(t,e,n,r={}){var o;const a=(t=Xl(t,fg))._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),h=`${e}:${n}`;a.host!==CT&&a.host!==h&&sa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const f=Object.assign(Object.assign({},a),{host:h,ssl:!1,emulatorOptions:r});if(!Fs(f,u)&&(t._setSettings(f),r.mockUserToken)){let m,v;if(typeof r.mockUserToken=="string")m=r.mockUserToken,v=Jt.MOCK_USER;else{m=XC(r.mockUserToken,(o=t._app)===null||o===void 0?void 0:o.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new Ee(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new Jt(_)}t._authCredentials=new jx(new yI(m,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pg(this.firestore,e,this._query)}}class Gn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Gn(this.firestore,e,this._key)}}class Jl extends pg{constructor(e,n,r){super(e,n,Km(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Gn(this.firestore,null,new Ie(e))}withConverter(e){return new Jl(this.firestore,e,this._path)}}function ch(t,e,...n){if(t=tn(t),arguments.length===1&&(e=_I.newId()),MN("doc","path",e),t instanceof fg){const r=ft.fromString(e,...n);return qw(r),new Gn(t,null,new Ie(r))}{if(!(t instanceof Gn||t instanceof Jl))throw new Ee(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ft.fromString(e,...n));return qw(r),new Gn(t.firestore,t instanceof Jl?t.converter:null,new Ie(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw="AsyncQueue";class Xw{constructor(e=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new uT(this,"async_queue_retry"),this.ju=()=>{const r=yp();r&&de(Yw,"Visibility state changed to "+r.visibilityState),this.y_.A_()},this.Hu=e;const n=yp();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ju(),this.Yu(e)}enterRestrictedMode(e){if(!this.$u){this.$u=!0,this.Gu=e||!1;const n=yp();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(e){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new zi;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qu.push(e),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(e){if(!Ea(e))throw e;de(Yw,"Operation failed with retryable error: "+e)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(e){const n=this.Hu.then(()=>(this.Wu=!0,e().catch(r=>{throw this.Ku=r,this.Wu=!1,ii("INTERNAL UNHANDLED ERROR: ",Jw(r)),r}).then(r=>(this.Wu=!1,r))));return this.Hu=n,n}enqueueAfterDelay(e,n,r){this.Ju(),this.zu.indexOf(e)>-1&&(n=0);const o=ag.createAndSchedule(this,e,n,r,a=>this.Xu(a));return this.Uu.push(o),o}Ju(){this.Ku&&Se(47125,{ec:Jw(this.Ku)})}verifyOperationInProgress(){}async tc(){let e;do e=this.Hu,await e;while(e!==this.Hu)}nc(e){for(const n of this.Uu)if(n.timerId===e)return!0;return!1}rc(e){return this.tc().then(()=>{this.Uu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.tc()})}sc(e){this.zu.push(e)}Xu(e){const n=this.Uu.indexOf(e);this.Uu.splice(n,1)}}function Jw(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class mg extends fg{constructor(e,n,r,o){super(e,n,r,o),this.type="firestore",this._queue=new Xw,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Xw(e),this._firestoreClient=void 0,await e}}}function UN(t,e){const n=typeof t=="object"?t:CE(),r=typeof t=="string"?t:wd,o=Nm(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const a=QC("firestore");a&&FN(o,...a)}return o}function RT(t){if(t._terminated)throw new Ee(ie.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jN(t),t._firestoreClient}function jN(t){var e,n,r;const o=t._freezeSettings(),a=function(h,f,m,v){return new ik(h,f,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,bT(v.experimentalLongPollingOptions),v.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,o);t._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=o.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),t._firestoreClient=new kN(t._authCredentials,t._appCheckCredentials,t._queue,a,t._componentsProvider&&function(h){const f=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(f),_online:f}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this._byteString=e}static fromBase64String(e){try{return new da(Ht.fromBase64String(e))}catch(n){throw new Ee(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new da(Ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Ee(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this._methodName=e}}/**
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
 */class yg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Ee(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Ee(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
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
 */class vg{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,o){if(r.length!==o.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==o[a])return!1;return!0}(this._values,e._values)}}/**
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
 */const BN=/^__.*__$/;class PT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new qs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{oc:t})}}class _g{constructor(e,n,r,o,a,u){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,a===void 0&&this._c(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(e){return new _g(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ac({path:r,cc:!1});return o.lc(e),o}hc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),o=this.ac({path:r,cc:!1});return o._c(),o}Pc(e){return this.ac({path:void 0,cc:!0})}Tc(e){return xd(e,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let e=0;e<this.path.length;e++)this.lc(this.path.get(e))}lc(e){if(e.length===0)throw this.Tc("Document fields must not be empty");if(xT(this.oc)&&BN.test(e))throw this.Tc('Document fields cannot begin and end with "__"')}}class $N{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ah(e)}dc(e,n,r,o=!1){return new _g({oc:e,methodName:n,Ec:r,path:Wt.emptyPath(),cc:!1,Ic:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zN(t){const e=t._freezeSettings(),n=ah(t._databaseId);return new $N(t._databaseId,!!e.ignoreUndefinedProperties,n)}class mu extends gg{_toFieldTransform(e){if(e.oc!==2)throw e.oc===1?e.Tc(`${this._methodName}() can only appear at the top level of your update data`):e.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mu}}function WN(t,e,n,r){const o=t.dc(1,e,n);DT("Data must be an object, but it was:",o,r);const a=[],u=Rn.empty();ts(r,(f,m)=>{const v=wg(e,f,n);m=tn(m);const _=o.hc(v);if(m instanceof mu)a.push(v);else{const w=hh(m,_);w!=null&&(a.push(v),u.set(v,w))}});const h=new cr(a);return new PT(u,h,o.fieldTransforms)}function GN(t,e,n,r,o,a){const u=t.dc(1,e,n),h=[Zw(e,r,n)],f=[o];if(a.length%2!=0)throw new Ee(ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<a.length;w+=2)h.push(Zw(e,a[w])),f.push(a[w+1]);const m=[],v=Rn.empty();for(let w=h.length-1;w>=0;--w)if(!KN(m,h[w])){const T=h[w];let D=f[w];D=tn(D);const L=u.hc(T);if(D instanceof mu)m.push(T);else{const x=hh(D,L);x!=null&&(m.push(T),v.set(T,x))}}const _=new cr(m);return new PT(v,_,u.fieldTransforms)}function hh(t,e){if(kT(t=tn(t)))return DT("Unsupported field value:",e,t),HN(t,e);if(t instanceof gg)return function(r,o){if(!xT(o.oc))throw o.Tc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Tc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(o);a&&o.fieldTransforms.push(a)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.cc&&e.oc!==4)throw e.Tc("Nested arrays are not supported");return function(r,o){const a=[];let u=0;for(const h of r){let f=hh(h,o.Pc(u));f==null&&(f={nullValue:"NULL_VALUE"}),a.push(f),u++}return{arrayValue:{values:a}}}(t,e)}return function(r,o){if((r=tn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Rk(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Rt.fromDate(r);return{timestampValue:bd(o.serializer,a)}}if(r instanceof Rt){const a=new Rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bd(o.serializer,a)}}if(r instanceof yg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof da)return{bytesValue:JI(o.serializer,r._byteString)};if(r instanceof Gn){const a=o.databaseId,u=r.firestore._databaseId;if(!u.isEqual(a))throw o.Tc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Jm(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof vg)return function(u,h){return{mapValue:{fields:{[CI]:{stringValue:RI},[Ed]:{arrayValue:{values:u.toArray().map(m=>{if(typeof m!="number")throw h.Tc("VectorValues must only contain numeric values.");return Qm(h.serializer,m)})}}}}}}(r,o);throw o.Tc(`Unsupported field value: ${hg(r)}`)}(t,e)}function HN(t,e){const n={};return EI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,o)=>{const a=hh(o,e.uc(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function kT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Rt||t instanceof yg||t instanceof da||t instanceof Gn||t instanceof gg||t instanceof vg)}function DT(t,e,n){if(!kT(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const r=hg(n);throw r==="an object"?e.Tc(t+" a custom object"):e.Tc(t+" "+r)}}function Zw(t,e,n){if((e=tn(e))instanceof dh)return e._internalPath;if(typeof e=="string")return wg(t,e);throw xd("Field path arguments must be of type string or ",t,!1,void 0,n)}const qN=new RegExp("[~\\*/\\[\\]]");function wg(t,e,n){if(e.search(qN)>=0)throw xd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dh(...e.split("."))._internalPath}catch{throw xd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xd(t,e,n,r,o){const a=r&&!r.isEmpty(),u=o!==void 0;let h=`Function ${e}() called with invalid data`;n&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${o}`),f+=")"),new Ee(ie.INVALID_ARGUMENT,h+t+f)}function KN(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n,r,o,a){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=o,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Gn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(OT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class QN extends NT{data(){return super.data()}}function OT(t,e){return typeof e=="string"?wg(t,e):e instanceof dh?e._internalPath:e._delegate._internalPath}class YN{convertValue(e,n="none"){switch(Qi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ki(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ts(e,(o,a)=>{r[o]=this.convertValue(a,n)}),r}convertVectorValue(e){var n,r,o;const a=(o=(r=(n=e.fields)===null||n===void 0?void 0:n[Ed].arrayValue)===null||r===void 0?void 0:r.values)===null||o===void 0?void 0:o.map(u=>yt(u.doubleValue));return new vg(a)}convertGeoPoint(e){return new yg(yt(e.latitude),yt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Zd(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const n=qi(e);return new Rt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ft.fromString(e);Qe(iT(r),9688,{name:e});const o=new ql(r.get(1),r.get(3)),a=new Ie(r.popFirst(5));return o.isEqual(n)||ii(`Document ${a} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class LT extends NT{constructor(e,n,r,o,a,u){super(e,n,r,o,u),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new JN(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(OT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class JN extends LT{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){t=Xl(t,Gn);const e=Xl(t.firestore,mg);return LN(RT(e),t._key).then(n=>nO(e,t,n))}class eO extends YN{constructor(e){super(),this.firestore=e}convertBytes(e){return new da(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Gn(this.firestore,null,n)}}function Eg(t,e,n,...r){t=Xl(t,Gn);const o=Xl(t.firestore,mg),a=zN(o);let u;return u=typeof(e=tn(e))=="string"||e instanceof dh?GN(a,"updateDoc",t._key,e,n,r):WN(a,"updateDoc",t._key,e),tO(o,[u.toMutation(t._key,ti.exists(!0))])}function tO(t,e){return function(r,o){const a=new zi;return r.asyncQueue.enqueueAndForget(async()=>EN(await NN(r),o,a)),a.promise}(RT(t),e)}function nO(t,e,n){const r=n.docs.get(e._key),o=new eO(t);return new LT(t,o,e._key,r,new XN(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(){return new mu("deleteField")}(function(e,n=!0){(function(o){_a=o})(ya),ia(new Us("firestore",(r,{instanceIdentifier:o,options:a})=>{const u=r.getProvider("app").getImmediate(),h=new mg(new Bx(r.getProvider("auth-internal")),new Wx(u,r.getProvider("app-check-internal")),function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new Ee(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ql(m.options.projectId,v)}(u,o),u);return a=Object.assign({useFetchStreams:n},a),h._setSettings(a),h},"PUBLIC").setMultipleInstances(!0)),Bi(iw,sw,e),Bi(iw,sw,"esm2017")})();const iO={apiKey:"AIzaSyBbXsS-nxFtF5lSbOz99jdQ8bl_wqjVsms",authDomain:"projectm-3780c.firebaseapp.com",projectId:"projectm-3780c",storageBucket:"projectm-3780c.firebasestorage.app",messagingSenderId:"315745607112",appId:"1:315745607112:web:7201bd42b124720d5e74fd"},MT=bE(iO),sd=Lx(MT),fh=UN(MT),sO=[{id:1,name:"Calendar",icon:"icon/calendar_icon.svg",ariaLabel:"Open calendar"},{id:2,name:"Messages question",icon:"icon/message-question_icon.svg",ariaLabel:"Check messages or questions"},{id:3,name:"Notifications",icon:"icon/notification_icon.svg",ariaLabel:"View notifications"}],oO=[{id:1,userName:"Lee Song",country:"United States",avatar:"image/avatar-1.jpeg"}],aO=()=>{const[t,e]=Z.useState(!1),{setIsLoggedIn:n,setShowLoginForm:r}=Z.useContext(ga),o=()=>{e(u=>!u)},a=()=>{SP(sd).then(()=>{n(!1),r(!1),console.log("LogOut:")}).catch(u=>console.log(u))};return U.jsxs(AC,{role:"region","aria-label":"User menu block",children:[U.jsx(bC,{"aria-label":"User menu navigation",children:sO.map(({id:u,icon:h,ariaLabel:f})=>U.jsx(CC,{"aria-label":f,"aria-haspopup":"true",children:U.jsx(b_,{src:h,alt:""})},u))}),U.jsxs(RC,{role:"group","aria-label":"User information",children:[oO.map(({id:u,userName:h,country:f,avatar:m})=>U.jsxs(A_,{role:"group","aria-label":"User information",children:[U.jsxs(SC,{"aria-labelledby":`user-name-${u} user-country-${u}`,children:[U.jsx(PC,{id:`user-name-${u}`,children:h}),U.jsx(xC,{id:`user-country-${u}`,children:f})]}),U.jsx(kC,{src:m,alt:h,role:"presentation"})]},u)),U.jsx(DC,{onClick:o,"aria-haspopup":"true","aria-label":"Open user menu",children:U.jsx(b_,{src:"icon/arrow-down_icon.svg",alt:"User"})})]}),t&&U.jsx(A_,{children:U.jsx(NC,{"aria-label":"User menu popup",children:U.jsx(VC,{onClick:a,children:"Log out"})})})]})},Ig=Z.forwardRef(({onToggleSidebar:t,isSidebarOpen:e},n)=>{const{isLoggedIn:r}=Z.useContext(ga);return U.jsxs(mC,{ref:n,children:[U.jsxs(cC,{children:[U.jsxs(fC,{children:[U.jsx("img",{src:"logo.svg",alt:"Logo"}),U.jsx("span",{children:"Project M."})]}),r?U.jsx(pC,{className:"sidebar-toggle",onClick:t,$isSidebarOpen:e,children:U.jsx("img",{src:"icon/arrow_left.svg",alt:"Sidebar opener"})}):""]}),r?U.jsxs(gC,{children:[U.jsx(TC,{}),U.jsx(aO,{})]}):""]})});Ig.displayName="Header";Ig.propTypes={onToggleSidebar:Zr.func.isRequired,isSidebarOpen:Zr.bool.isRequired};const lO=te.div``,uO=te.div``,cO=te.div``,dO=te.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  gap: 1rem;

  @media (max-width: ${({theme:t})=>t.mobile}) {
    grid-template-columns: repeat(auto-fit, minmax(1fr));
  }
`,hO=te.div`
  padding: 1.5rem;
  width: 23rem;
  border-radius: 16px 16px 0px 0px;
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    width: 20rem;
    padding: 1rem;
  }
`,fO=te.div`
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
`,pO=te.h2`
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
`,mO=te.p`
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
`,gO=te.button``,yO=te.img``,vO=te.div`
  height: 100%;
`,_O=te.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;
  border-radius: 16px;

  background: ${({theme:t})=>t.colors.primaryLightBackground};
`,wO=te.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,EO=te.div`
  padding: 0 0.4rem;
  line-height: 1.5rem;
  border-radius: 4px;
  color: ${({$levelColor:t})=>t};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.75rem;
  font-weight: 300;
  text-align: center;

  background: ${({$levelBg:t})=>t};
`,IO=te.div`
  cursor: pointer;
  padding: 6px;
  border-radius: 10px;

  &:hover {
    background-color: #f0f0f0;
  }
`,TO=te.div`
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
`,_p=te.button`
  all: unset;
  padding: 0.8rem 0.8rem;
  font-size: 1rem;
  color: ${ra.colors.darkText};
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ffeaea;
  }

  &:active {
    background-color: #ffd5d5;
  }
  cursor: pointer;
`,SO=te.img`
  user-select: none;
`,wp=te.img`
  margin-right: 1rem;
  width: 20px;
  height: 20px;
`,AO=te.div``,bO=te.h3`
  margin-bottom: 0.5rem;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
`,CO=te.p`
  margin-bottom: 1.5rem;
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.87rem;
  font-weight: 400;
  text-align: left;
`,RO=te.img`
  border-radius: 8px;
`,PO=te.div`
  display: flex;
  justify-content: space-between;
`,xO=te.div`
  width: 63px;
  height: 24px;
`,kO=te.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`,DO=te.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
  margin-right: 1rem;
`,NO=te.div`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 500;
  text-align: left;
`,OO=te.div`
  height: 100%;
`,LO=te.div`
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  color: ${({$type:t})=>t==="error"?"#B42318":"#027A48"};
  background-color: ${({$type:t})=>t==="error"?"rgba(240, 68, 56, 0.1)":"rgba(18, 183, 106, 0.1)"};
`;var Tg=W0();const MO=Tm(Tg);function un(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var VO=typeof Symbol=="function"&&Symbol.observable||"@@observable",e0=VO,t0=()=>Math.random().toString(36).substring(7).split("").join("."),FO={INIT:`@@redux/INIT${t0()}`,REPLACE:`@@redux/REPLACE${t0()}`},n0=FO;function UO(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function VT(t,e,n){if(typeof t!="function")throw new Error(un(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(un(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(un(1));return n(VT)(t,e)}let r=t,o=e,a=new Map,u=a,h=0,f=!1;function m(){u===a&&(u=new Map,a.forEach((x,K)=>{u.set(K,x)}))}function v(){if(f)throw new Error(un(3));return o}function _(x){if(typeof x!="function")throw new Error(un(4));if(f)throw new Error(un(5));let K=!0;m();const q=h++;return u.set(q,x),function(){if(K){if(f)throw new Error(un(6));K=!1,m(),u.delete(q),a=null}}}function w(x){if(!UO(x))throw new Error(un(7));if(typeof x.type>"u")throw new Error(un(8));if(typeof x.type!="string")throw new Error(un(17));if(f)throw new Error(un(9));try{f=!0,o=r(o,x)}finally{f=!1}return(a=u).forEach(q=>{q()}),x}function T(x){if(typeof x!="function")throw new Error(un(10));r=x,w({type:n0.REPLACE})}function D(){const x=_;return{subscribe(K){if(typeof K!="object"||K===null)throw new Error(un(11));function q(){const z=K;z.next&&z.next(v())}return q(),{unsubscribe:x(q)}},[e0](){return this}}}return w({type:n0.INIT}),{dispatch:w,subscribe:_,getState:v,replaceReducer:T,[e0]:D}}function r0(t,e){return function(...n){return e(t.apply(this,n))}}function i0(t,e){if(typeof t=="function")return r0(t,e);if(typeof t!="object"||t===null)throw new Error(un(16));const n={};for(const r in t){const o=t[r];typeof o=="function"&&(n[r]=r0(o,e))}return n}function FT(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function jO(...t){return e=>(n,r)=>{const o=e(n,r);let a=()=>{throw new Error(un(15))};const u={getState:o.getState,dispatch:(f,...m)=>a(f,...m)},h=t.map(f=>f(u));return a=FT(...h)(o.dispatch),{...o,dispatch:a}}}var Ep={exports:{}},Ip={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function BO(){if(s0)return Ip;s0=1;var t=jd();function e(f,m){return f===m&&(f!==0||1/f===1/m)||f!==f&&m!==m}var n=typeof Object.is=="function"?Object.is:e,r=t.useSyncExternalStore,o=t.useRef,a=t.useEffect,u=t.useMemo,h=t.useDebugValue;return Ip.useSyncExternalStoreWithSelector=function(f,m,v,_,w){var T=o(null);if(T.current===null){var D={hasValue:!1,value:null};T.current=D}else D=T.current;T=u(function(){function x(X){if(!K){if(K=!0,q=X,X=_(X),w!==void 0&&D.hasValue){var Q=D.value;if(w(Q,X))return G=Q}return G=X}if(Q=G,n(q,X))return Q;var b=_(X);return w!==void 0&&w(Q,b)?(q=X,Q):(q=X,G=b)}var K=!1,q,G,z=v===void 0?null:v;return[function(){return x(m())},z===null?void 0:function(){return x(z())}]},[m,v,_,w]);var L=r(f,T[0],T[1]);return a(function(){D.hasValue=!0,D.value=L},[L]),h(L),L},Ip}var o0;function $O(){return o0||(o0=1,Ep.exports=BO()),Ep.exports}$O();var zO=Z.version.startsWith("19"),WO=Symbol.for(zO?"react.transitional.element":"react.element"),GO=Symbol.for("react.portal"),HO=Symbol.for("react.fragment"),qO=Symbol.for("react.strict_mode"),KO=Symbol.for("react.profiler"),QO=Symbol.for("react.consumer"),YO=Symbol.for("react.context"),UT=Symbol.for("react.forward_ref"),XO=Symbol.for("react.suspense"),JO=Symbol.for("react.suspense_list"),Sg=Symbol.for("react.memo"),ZO=Symbol.for("react.lazy"),eL=UT,tL=Sg;function nL(t){if(typeof t=="object"&&t!==null){const{$$typeof:e}=t;switch(e){case WO:switch(t=t.type,t){case HO:case KO:case qO:case XO:case JO:return t;default:switch(t=t&&t.$$typeof,t){case YO:case UT:case ZO:case Sg:return t;case QO:return t;default:return e}}case GO:return e}}}function rL(t){return nL(t)===Sg}function iL(t,e,n,r,{areStatesEqual:o,areOwnPropsEqual:a,areStatePropsEqual:u}){let h=!1,f,m,v,_,w;function T(q,G){return f=q,m=G,v=t(f,m),_=e(r,m),w=n(v,_,m),h=!0,w}function D(){return v=t(f,m),e.dependsOnOwnProps&&(_=e(r,m)),w=n(v,_,m),w}function L(){return t.dependsOnOwnProps&&(v=t(f,m)),e.dependsOnOwnProps&&(_=e(r,m)),w=n(v,_,m),w}function x(){const q=t(f,m),G=!u(q,v);return v=q,G&&(w=n(v,_,m)),w}function K(q,G){const z=!a(G,m),X=!o(q,f,G,m);return f=q,m=G,z&&X?D():z?L():X?x():w}return function(G,z){return h?K(G,z):T(G,z)}}function sL(t,{initMapStateToProps:e,initMapDispatchToProps:n,initMergeProps:r,...o}){const a=e(t,o),u=n(t,o),h=r(t,o);return iL(a,u,h,t,o)}function oL(t,e){const n={};for(const r in t){const o=t[r];typeof o=="function"&&(n[r]=(...a)=>e(o(...a)))}return n}function mm(t){return function(n){const r=t(n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function a0(t){return t.dependsOnOwnProps?!!t.dependsOnOwnProps:t.length!==1}function jT(t,e){return function(r,{displayName:o}){const a=function(h,f){return a.dependsOnOwnProps?a.mapToProps(h,f):a.mapToProps(h,void 0)};return a.dependsOnOwnProps=!0,a.mapToProps=function(h,f){a.mapToProps=t,a.dependsOnOwnProps=a0(t);let m=a(h,f);return typeof m=="function"&&(a.mapToProps=m,a.dependsOnOwnProps=a0(m),m=a(h,f)),m},a}}function Ag(t,e){return(n,r)=>{throw new Error(`Invalid value of type ${typeof t} for ${e} argument when connecting component ${r.wrappedComponentName}.`)}}function aL(t){return t&&typeof t=="object"?mm(e=>oL(t,e)):t?typeof t=="function"?jT(t):Ag(t,"mapDispatchToProps"):mm(e=>({dispatch:e}))}function lL(t){return t?typeof t=="function"?jT(t):Ag(t,"mapStateToProps"):mm(()=>({}))}function uL(t,e,n){return{...n,...t,...e}}function cL(t){return function(n,{displayName:r,areMergedPropsEqual:o}){let a=!1,u;return function(f,m,v){const _=t(f,m,v);return a?o(_,u)||(u=_):(a=!0,u=_),u}}}function dL(t){return t?typeof t=="function"?cL(t):Ag(t,"mergeProps"):()=>uL}function hL(t){t()}function fL(){let t=null,e=null;return{clear(){t=null,e=null},notify(){hL(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const o=e={callback:n,next:null,prev:e};return o.prev?o.prev.next=o:t=o,function(){!r||t===null||(r=!1,o.next?o.next.prev=o.prev:e=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var l0={notify(){},get:()=>[]};function BT(t,e){let n,r=l0,o=0,a=!1;function u(L){v();const x=r.subscribe(L);let K=!1;return()=>{K||(K=!0,x(),_())}}function h(){r.notify()}function f(){D.onStateChange&&D.onStateChange()}function m(){return a}function v(){o++,n||(n=e?e.addNestedSub(f):t.subscribe(f),r=fL())}function _(){o--,n&&o===0&&(n(),n=void 0,r.clear(),r=l0)}function w(){a||(a=!0,v())}function T(){a&&(a=!1,_())}const D={addNestedSub:u,notifyNestedSubs:h,handleChangeWrapper:f,isSubscribed:m,trySubscribe:w,tryUnsubscribe:T,getListeners:()=>r};return D}var pL=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mL=pL(),gL=()=>typeof navigator<"u"&&navigator.product==="ReactNative",yL=gL(),vL=()=>mL||yL?Z.useLayoutEffect:Z.useEffect,kd=vL();function u0(t,e){return t===e?t!==0||e!==0||1/t===1/e:t!==t&&e!==e}function Tp(t,e){if(u0(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(!Object.prototype.hasOwnProperty.call(e,n[o])||!u0(t[n[o]],e[n[o]]))return!1;return!0}var _L={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},wL={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},EL={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$T={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},IL={[eL]:EL,[tL]:$T};function c0(t){return rL(t)?$T:IL[t.$$typeof]||_L}var TL=Object.defineProperty,SL=Object.getOwnPropertyNames,d0=Object.getOwnPropertySymbols,AL=Object.getOwnPropertyDescriptor,bL=Object.getPrototypeOf,h0=Object.prototype;function gm(t,e){if(typeof e!="string"){if(h0){const a=bL(e);a&&a!==h0&&gm(t,a)}let n=SL(e);d0&&(n=n.concat(d0(e)));const r=c0(t),o=c0(e);for(let a=0;a<n.length;++a){const u=n[a];if(!wL[u]&&!(o&&o[u])&&!(r&&r[u])){const h=AL(e,u);try{TL(t,u,h)}catch{}}}}return t}var Sp=Symbol.for("react-redux-context"),Ap=typeof globalThis<"u"?globalThis:{};function CL(){if(!Z.createContext)return{};const t=Ap[Sp]??(Ap[Sp]=new Map);let e=t.get(Z.createContext);return e||(e=Z.createContext(null),t.set(Z.createContext,e)),e}var zT=CL(),RL=[null,null];function PL(t,e,n){kd(()=>t(...e),n)}function xL(t,e,n,r,o,a){t.current=r,n.current=!1,o.current&&(o.current=null,a())}function kL(t,e,n,r,o,a,u,h,f,m,v){if(!t)return()=>{};let _=!1,w=null;const T=()=>{if(_||!h.current)return;const L=e.getState();let x,K;try{x=r(L,o.current)}catch(q){K=q,w=q}K||(w=null),x===a.current?u.current||m():(a.current=x,f.current=x,u.current=!0,v())};return n.onStateChange=T,n.trySubscribe(),T(),()=>{if(_=!0,n.tryUnsubscribe(),n.onStateChange=null,w)throw w}}function DL(t,e){return t===e}function NL(t,e,n,{pure:r,areStatesEqual:o=DL,areOwnPropsEqual:a=Tp,areStatePropsEqual:u=Tp,areMergedPropsEqual:h=Tp,forwardRef:f=!1,context:m=zT}={}){const v=m,_=lL(t),w=aL(e),T=dL(n),D=!!t;return x=>{const K=x.displayName||x.name||"Component",q=`Connect(${K})`,G={shouldHandleStateChanges:D,displayName:q,wrappedComponentName:K,WrappedComponent:x,initMapStateToProps:_,initMapDispatchToProps:w,initMergeProps:T,areStatesEqual:o,areStatePropsEqual:u,areOwnPropsEqual:a,areMergedPropsEqual:h};function z(b){const[A,C,k]=Z.useMemo(()=>{const{reactReduxForwardedRef:Je,...cn}=b;return[b.context,Je,cn]},[b]),N=Z.useMemo(()=>{let Je=v;return A!=null&&A.Consumer,Je},[A,v]),V=Z.useContext(N),P=!!b.store&&!!b.store.getState&&!!b.store.dispatch,Ze=!!V&&!!V.store,Ye=P?b.store:V.store,pt=Ze?V.getServerState:Ye.getState,Ve=Z.useMemo(()=>sL(Ye.dispatch,G),[Ye]),[oe,he]=Z.useMemo(()=>{if(!D)return RL;const Je=BT(Ye,P?void 0:V.subscription),cn=Je.notifyNestedSubs.bind(Je);return[Je,cn]},[Ye,P,V]),ue=Z.useMemo(()=>P?V:{...V,subscription:oe},[P,V,oe]),F=Z.useRef(void 0),Y=Z.useRef(k),pe=Z.useRef(void 0),Ce=Z.useRef(!1),Ae=Z.useRef(!1),Pe=Z.useRef(void 0);kd(()=>(Ae.current=!0,()=>{Ae.current=!1}),[]);const De=Z.useMemo(()=>()=>pe.current&&k===Y.current?pe.current:Ve(Ye.getState(),k),[Ye,k]),Ne=Z.useMemo(()=>cn=>oe?kL(D,Ye,oe,Ve,Y,F,Ce,Ae,pe,he,cn):()=>{},[oe]);PL(xL,[Y,F,Ce,k,pe,he]);let Oe;try{Oe=Z.useSyncExternalStore(Ne,De,pt?()=>Ve(pt(),k):De)}catch(Je){throw Pe.current&&(Je.message+=`
The error may be correlated with this previous error:
${Pe.current.stack}

`),Je}kd(()=>{Pe.current=void 0,pe.current=void 0,F.current=Oe});const tt=Z.useMemo(()=>Z.createElement(x,{...Oe,ref:C}),[C,x,Oe]);return Z.useMemo(()=>D?Z.createElement(N.Provider,{value:ue},tt):tt,[N,tt,ue])}const Q=Z.memo(z);if(Q.WrappedComponent=x,Q.displayName=z.displayName=q,f){const A=Z.forwardRef(function(k,N){return Z.createElement(Q,{...k,reactReduxForwardedRef:N})});return A.displayName=q,A.WrappedComponent=x,gm(A,x)}return gm(Q,x)}}var WT=NL;function OL(t){const{children:e,context:n,serverState:r,store:o}=t,a=Z.useMemo(()=>{const f=BT(o);return{store:o,subscription:f,getServerState:r?()=>r:void 0}},[o,r]),u=Z.useMemo(()=>o.getState(),[o]);kd(()=>{const{subscription:f}=a;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),u!==o.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[a,u]);const h=n||zT;return Z.createElement(h.Provider,{value:a},e)}var LL=OL,ML="Invariant failed";function VL(t,e){throw new Error(ML)}var dr=function(e){var n=e.top,r=e.right,o=e.bottom,a=e.left,u=r-a,h=o-n,f={top:n,right:r,bottom:o,left:a,width:u,height:h,x:a,y:n,center:{x:(r+a)/2,y:(o+n)/2}};return f},bg=function(e,n){return{top:e.top-n.top,left:e.left-n.left,bottom:e.bottom+n.bottom,right:e.right+n.right}},f0=function(e,n){return{top:e.top+n.top,left:e.left+n.left,bottom:e.bottom-n.bottom,right:e.right-n.right}},FL=function(e,n){return{top:e.top+n.y,left:e.left+n.x,bottom:e.bottom+n.y,right:e.right+n.x}},bp={top:0,right:0,bottom:0,left:0},Cg=function(e){var n=e.borderBox,r=e.margin,o=r===void 0?bp:r,a=e.border,u=a===void 0?bp:a,h=e.padding,f=h===void 0?bp:h,m=dr(bg(n,o)),v=dr(f0(n,u)),_=dr(f0(v,f));return{marginBox:m,borderBox:dr(n),paddingBox:v,contentBox:_,margin:o,border:u,padding:f}},$n=function(e){var n=e.slice(0,-2),r=e.slice(-2);if(r!=="px")return 0;var o=Number(n);return isNaN(o)&&VL(),o},UL=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Dd=function(e,n){var r=e.borderBox,o=e.border,a=e.margin,u=e.padding,h=FL(r,n);return Cg({borderBox:h,border:o,margin:a,padding:u})},Nd=function(e,n){return n===void 0&&(n=UL()),Dd(e,n)},GT=function(e,n){var r={top:$n(n.marginTop),right:$n(n.marginRight),bottom:$n(n.marginBottom),left:$n(n.marginLeft)},o={top:$n(n.paddingTop),right:$n(n.paddingRight),bottom:$n(n.paddingBottom),left:$n(n.paddingLeft)},a={top:$n(n.borderTopWidth),right:$n(n.borderRightWidth),bottom:$n(n.borderBottomWidth),left:$n(n.borderLeftWidth)};return Cg({borderBox:e,margin:r,padding:o,border:a})},HT=function(e){var n=e.getBoundingClientRect(),r=window.getComputedStyle(e);return GT(n,r)},Zl=function(e){var n=[],r=null,o=function(){for(var u=arguments.length,h=new Array(u),f=0;f<u;f++)h[f]=arguments[f];n=h,!r&&(r=requestAnimationFrame(function(){r=null,e.apply(void 0,n)}))};return o.cancel=function(){r&&(cancelAnimationFrame(r),r=null)},o};function Od(){return Od=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Od.apply(null,arguments)}function qT(t,e){}qT.bind(null,"warn");qT.bind(null,"error");function Wi(){}function jL(t,e){return{...t,...e}}function Wn(t,e,n){const r=e.map(o=>{const a=jL(n,o.options);return t.addEventListener(o.eventName,o.fn,a),function(){t.removeEventListener(o.eventName,o.fn,a)}});return function(){r.forEach(a=>{a()})}}const BL="Invariant failed";class Ld extends Error{}Ld.prototype.toString=function(){return this.message};function ae(t,e){throw new Ld(BL)}class $L extends He.Component{constructor(...e){super(...e),this.callbacks=null,this.unbind=Wi,this.onWindowError=n=>{const r=this.getCallbacks();r.isDragging()&&r.tryAbort(),n.error instanceof Ld&&n.preventDefault()},this.getCallbacks=()=>{if(!this.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return this.callbacks},this.setCallbacks=n=>{this.callbacks=n}}componentDidMount(){this.unbind=Wn(window,[{eventName:"error",fn:this.onWindowError}])}componentDidCatch(e){if(e instanceof Ld){this.setState({});return}throw e}componentWillUnmount(){this.unbind()}render(){return this.props.children(this.setCallbacks)}}const zL=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Md=t=>t+1,WL=t=>`
  You have lifted an item in position ${Md(t.source.index)}
`,KT=(t,e)=>{const n=t.droppableId===e.droppableId,r=Md(t.index),o=Md(e.index);return n?`
      You have moved the item from position ${r}
      to position ${o}
    `:`
    You have moved the item from position ${r}
    in list ${t.droppableId}
    to list ${e.droppableId}
    in position ${o}
  `},QT=(t,e,n)=>e.droppableId===n.droppableId?`
      The item ${t}
      has been combined with ${n.draggableId}`:`
      The item ${t}
      in list ${e.droppableId}
      has been combined with ${n.draggableId}
      in list ${n.droppableId}
    `,GL=t=>{const e=t.destination;if(e)return KT(t.source,e);const n=t.combine;return n?QT(t.draggableId,t.source,n):"You are over an area that cannot be dropped on"},p0=t=>`
  The item has returned to its starting position
  of ${Md(t.index)}
`,HL=t=>{if(t.reason==="CANCEL")return`
      Movement cancelled.
      ${p0(t.source)}
    `;const e=t.destination,n=t.combine;return e?`
      You have dropped the item.
      ${KT(t.source,e)}
    `:n?`
      You have dropped the item.
      ${QT(t.draggableId,t.source,n)}
    `:`
    The item has been dropped while not over a drop area.
    ${p0(t.source)}
  `},od={dragHandleUsageInstructions:zL,onDragStart:WL,onDragUpdate:GL,onDragEnd:HL};function qL(t,e){return!!(t===e||Number.isNaN(t)&&Number.isNaN(e))}function YT(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!qL(t[n],e[n]))return!1;return!0}function ze(t,e){const n=Z.useState(()=>({inputs:e,result:t()}))[0],r=Z.useRef(!0),o=Z.useRef(n),u=r.current||!!(e&&o.current.inputs&&YT(e,o.current.inputs))?o.current:{inputs:e,result:t()};return Z.useEffect(()=>{r.current=!1,o.current=u},[u]),u.result}function ve(t,e){return ze(()=>t,e)}const Ft={x:0,y:0},Gt=(t,e)=>({x:t.x+e.x,y:t.y+e.y}),Pn=(t,e)=>({x:t.x-e.x,y:t.y-e.y}),Gi=(t,e)=>t.x===e.x&&t.y===e.y,Ta=t=>({x:t.x!==0?-t.x:0,y:t.y!==0?-t.y:0}),Ws=(t,e,n=0)=>t==="x"?{x:e,y:n}:{x:n,y:e},eu=(t,e)=>Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2),m0=(t,e)=>Math.min(...e.map(n=>eu(t,n))),XT=t=>e=>({x:t(e.x),y:t(e.y)});var KL=(t,e)=>{const n=dr({top:Math.max(e.top,t.top),right:Math.min(e.right,t.right),bottom:Math.min(e.bottom,t.bottom),left:Math.max(e.left,t.left)});return n.width<=0||n.height<=0?null:n};const gu=(t,e)=>({top:t.top+e.y,left:t.left+e.x,bottom:t.bottom+e.y,right:t.right+e.x}),g0=t=>[{x:t.left,y:t.top},{x:t.right,y:t.top},{x:t.left,y:t.bottom},{x:t.right,y:t.bottom}],QL={top:0,right:0,bottom:0,left:0},YL=(t,e)=>e?gu(t,e.scroll.diff.displacement):t,XL=(t,e,n)=>n&&n.increasedBy?{...t,[e.end]:t[e.end]+n.increasedBy[e.line]}:t,JL=(t,e)=>e&&e.shouldClipSubject?KL(e.pageMarginBox,t):dr(t);var ha=({page:t,withPlaceholder:e,axis:n,frame:r})=>{const o=YL(t.marginBox,r),a=XL(o,n,e),u=JL(a,r);return{page:t,withPlaceholder:e,active:u}},Rg=(t,e)=>{t.frame||ae();const n=t.frame,r=Pn(e,n.scroll.initial),o=Ta(r),a={...n,scroll:{initial:n.scroll.initial,current:e,diff:{value:r,displacement:o},max:n.scroll.max}},u=ha({page:t.subject.page,withPlaceholder:t.subject.withPlaceholder,axis:t.axis,frame:a});return{...t,frame:a,subject:u}};function Vt(t,e=YT){let n=null;function r(...o){if(n&&n.lastThis===this&&e(o,n.lastArgs))return n.lastResult;const a=t.apply(this,o);return n={lastResult:a,lastArgs:o,lastThis:this},a}return r.clear=function(){n=null},r}const JT=Vt(t=>t.reduce((e,n)=>(e[n.descriptor.id]=n,e),{})),ZT=Vt(t=>t.reduce((e,n)=>(e[n.descriptor.id]=n,e),{})),ph=Vt(t=>Object.values(t)),ZL=Vt(t=>Object.values(t));var Sa=Vt((t,e)=>ZL(e).filter(r=>t===r.descriptor.droppableId).sort((r,o)=>r.descriptor.index-o.descriptor.index));function Pg(t){return t.at&&t.at.type==="REORDER"?t.at.destination:null}function mh(t){return t.at&&t.at.type==="COMBINE"?t.at.combine:null}var gh=Vt((t,e)=>e.filter(n=>n.descriptor.id!==t.descriptor.id)),eM=({isMovingForward:t,draggable:e,destination:n,insideDestination:r,previousImpact:o})=>{if(!n.isCombineEnabled||!Pg(o))return null;function u(T){const D={type:"COMBINE",combine:{draggableId:T,droppableId:n.descriptor.id}};return{...o,at:D}}const h=o.displaced.all,f=h.length?h[0]:null;if(t)return f?u(f):null;const m=gh(e,r);if(!f){if(!m.length)return null;const T=m[m.length-1];return u(T.descriptor.id)}const v=m.findIndex(T=>T.descriptor.id===f);v===-1&&ae();const _=v-1;if(_<0)return null;const w=m[_];return u(w.descriptor.id)},Aa=(t,e)=>t.descriptor.droppableId===e.descriptor.id;const eS={point:Ft,value:0},tu={invisible:{},visible:{},all:[]},tM={displaced:tu,displacedBy:eS,at:null};var Hn=(t,e)=>n=>t<=n&&n<=e,tS=t=>{const e=Hn(t.top,t.bottom),n=Hn(t.left,t.right);return r=>{if(e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right))return!0;const a=e(r.top)||e(r.bottom),u=n(r.left)||n(r.right);if(a&&u)return!0;const f=r.top<t.top&&r.bottom>t.bottom,m=r.left<t.left&&r.right>t.right;return f&&m?!0:f&&u||m&&a}},nM=t=>{const e=Hn(t.top,t.bottom),n=Hn(t.left,t.right);return r=>e(r.top)&&e(r.bottom)&&n(r.left)&&n(r.right)};const xg={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},nS={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"};var rM=t=>e=>{const n=Hn(e.top,e.bottom),r=Hn(e.left,e.right);return o=>t===xg?n(o.top)&&n(o.bottom):r(o.left)&&r(o.right)};const iM=(t,e)=>{const n=e.frame?e.frame.scroll.diff.displacement:Ft;return gu(t,n)},sM=(t,e,n)=>e.subject.active?n(e.subject.active)(t):!1,oM=(t,e,n)=>n(e)(t),kg=({target:t,destination:e,viewport:n,withDroppableDisplacement:r,isVisibleThroughFrameFn:o})=>{const a=r?iM(t,e):t;return sM(a,e,o)&&oM(a,n,o)},aM=t=>kg({...t,isVisibleThroughFrameFn:tS}),rS=t=>kg({...t,isVisibleThroughFrameFn:nM}),lM=t=>kg({...t,isVisibleThroughFrameFn:rM(t.destination.axis)}),uM=(t,e,n)=>{if(typeof n=="boolean")return n;if(!e)return!0;const{invisible:r,visible:o}=e;if(r[t])return!1;const a=o[t];return a?a.shouldAnimate:!0};function cM(t,e){const n=t.page.marginBox,r={top:e.point.y,right:0,bottom:0,left:e.point.x};return dr(bg(n,r))}function nu({afterDragging:t,destination:e,displacedBy:n,viewport:r,forceShouldAnimate:o,last:a}){return t.reduce(function(h,f){const m=cM(f,n),v=f.descriptor.id;if(h.all.push(v),!aM({target:m,destination:e,viewport:r,withDroppableDisplacement:!0}))return h.invisible[f.descriptor.id]=!0,h;const w=uM(v,a,o),T={draggableId:v,shouldAnimate:w};return h.visible[v]=T,h},{all:[],visible:{},invisible:{}})}function dM(t,e){if(!t.length)return 0;const n=t[t.length-1].descriptor.index;return e.inHomeList?n:n+1}function y0({insideDestination:t,inHomeList:e,displacedBy:n,destination:r}){const o=dM(t,{inHomeList:e});return{displaced:tu,displacedBy:n,at:{type:"REORDER",destination:{droppableId:r.descriptor.id,index:o}}}}function Vd({draggable:t,insideDestination:e,destination:n,viewport:r,displacedBy:o,last:a,index:u,forceShouldAnimate:h}){const f=Aa(t,n);if(u==null)return y0({insideDestination:e,inHomeList:f,displacedBy:o,destination:n});const m=e.find(D=>D.descriptor.index===u);if(!m)return y0({insideDestination:e,inHomeList:f,displacedBy:o,destination:n});const v=gh(t,e),_=e.indexOf(m),w=v.slice(_);return{displaced:nu({afterDragging:w,destination:n,displacedBy:o,last:a,viewport:r.frame,forceShouldAnimate:h}),displacedBy:o,at:{type:"REORDER",destination:{droppableId:n.descriptor.id,index:u}}}}function Ji(t,e){return!!e.effected[t]}var hM=({isMovingForward:t,destination:e,draggables:n,combine:r,afterCritical:o})=>{if(!e.isCombineEnabled)return null;const a=r.draggableId,h=n[a].descriptor.index;return Ji(a,o)?t?h:h-1:t?h+1:h},fM=({isMovingForward:t,isInHomeList:e,insideDestination:n,location:r})=>{if(!n.length)return null;const o=r.index,a=t?o+1:o-1,u=n[0].descriptor.index,h=n[n.length-1].descriptor.index,f=e?h:h+1;return a<u||a>f?null:a},pM=({isMovingForward:t,isInHomeList:e,draggable:n,draggables:r,destination:o,insideDestination:a,previousImpact:u,viewport:h,afterCritical:f})=>{const m=u.at;if(m||ae(),m.type==="REORDER"){const _=fM({isMovingForward:t,isInHomeList:e,location:m.destination,insideDestination:a});return _==null?null:Vd({draggable:n,insideDestination:a,destination:o,viewport:h,last:u.displaced,displacedBy:u.displacedBy,index:_})}const v=hM({isMovingForward:t,destination:o,displaced:u.displaced,draggables:r,combine:m.combine,afterCritical:f});return v==null?null:Vd({draggable:n,insideDestination:a,destination:o,viewport:h,last:u.displaced,displacedBy:u.displacedBy,index:v})},mM=({displaced:t,afterCritical:e,combineWith:n,displacedBy:r})=>{const o=!!(t.visible[n]||t.invisible[n]);return Ji(n,e)?o?Ft:Ta(r.point):o?r.point:Ft},gM=({afterCritical:t,impact:e,draggables:n})=>{const r=mh(e);r||ae();const o=r.draggableId,a=n[o].page.borderBox.center,u=mM({displaced:e.displaced,afterCritical:t,combineWith:o,displacedBy:e.displacedBy});return Gt(a,u)};const iS=(t,e)=>e.margin[t.start]+e.borderBox[t.size]/2,yM=(t,e)=>e.margin[t.end]+e.borderBox[t.size]/2,Dg=(t,e,n)=>e[t.crossAxisStart]+n.margin[t.crossAxisStart]+n.borderBox[t.crossAxisSize]/2,v0=({axis:t,moveRelativeTo:e,isMoving:n})=>Ws(t.line,e.marginBox[t.end]+iS(t,n),Dg(t,e.marginBox,n)),_0=({axis:t,moveRelativeTo:e,isMoving:n})=>Ws(t.line,e.marginBox[t.start]-yM(t,n),Dg(t,e.marginBox,n)),vM=({axis:t,moveInto:e,isMoving:n})=>Ws(t.line,e.contentBox[t.start]+iS(t,n),Dg(t,e.contentBox,n));var _M=({impact:t,draggable:e,draggables:n,droppable:r,afterCritical:o})=>{const a=Sa(r.descriptor.id,n),u=e.page,h=r.axis;if(!a.length)return vM({axis:h,moveInto:r.page,isMoving:u});const{displaced:f,displacedBy:m}=t,v=f.all[0];if(v){const w=n[v];if(Ji(v,o))return _0({axis:h,moveRelativeTo:w.page,isMoving:u});const T=Dd(w.page,m.point);return _0({axis:h,moveRelativeTo:T,isMoving:u})}const _=a[a.length-1];if(_.descriptor.id===e.descriptor.id)return u.borderBox.center;if(Ji(_.descriptor.id,o)){const w=Dd(_.page,Ta(o.displacedBy.point));return v0({axis:h,moveRelativeTo:w,isMoving:u})}return v0({axis:h,moveRelativeTo:_.page,isMoving:u})},ym=(t,e)=>{const n=t.frame;return n?Gt(e,n.scroll.diff.displacement):e};const wM=({impact:t,draggable:e,droppable:n,draggables:r,afterCritical:o})=>{const a=e.page.borderBox.center,u=t.at;return!n||!u?a:u.type==="REORDER"?_M({impact:t,draggable:e,draggables:r,droppable:n,afterCritical:o}):gM({impact:t,draggables:r,afterCritical:o})};var yh=t=>{const e=wM(t),n=t.droppable;return n?ym(n,e):e},sS=(t,e)=>{const n=Pn(e,t.scroll.initial),r=Ta(n);return{frame:dr({top:e.y,bottom:e.y+t.frame.height,left:e.x,right:e.x+t.frame.width}),scroll:{initial:t.scroll.initial,max:t.scroll.max,current:e,diff:{value:n,displacement:r}}}};function w0(t,e){return t.map(n=>e[n])}function EM(t,e){for(let n=0;n<e.length;n++){const r=e[n].visible[t];if(r)return r}return null}var IM=({impact:t,viewport:e,destination:n,draggables:r,maxScrollChange:o})=>{const a=sS(e,Gt(e.scroll.current,o)),u=n.frame?Rg(n,Gt(n.frame.scroll.current,o)):n,h=t.displaced,f=nu({afterDragging:w0(h.all,r),destination:n,displacedBy:t.displacedBy,viewport:a.frame,last:h,forceShouldAnimate:!1}),m=nu({afterDragging:w0(h.all,r),destination:u,displacedBy:t.displacedBy,viewport:e.frame,last:h,forceShouldAnimate:!1}),v={},_={},w=[h,f,m];return h.all.forEach(D=>{const L=EM(D,w);if(L){_[D]=L;return}v[D]=!0}),{...t,displaced:{all:h.all,invisible:v,visible:_}}},TM=(t,e)=>Gt(t.scroll.diff.displacement,e),Ng=({pageBorderBoxCenter:t,draggable:e,viewport:n})=>{const r=TM(n,t),o=Pn(r,e.page.borderBox.center);return Gt(e.client.borderBox.center,o)},oS=({draggable:t,destination:e,newPageBorderBoxCenter:n,viewport:r,withDroppableDisplacement:o,onlyOnMainAxis:a=!1})=>{const u=Pn(n,t.page.borderBox.center),f={target:gu(t.page.borderBox,u),destination:e,withDroppableDisplacement:o,viewport:r};return a?lM(f):rS(f)},SM=({isMovingForward:t,draggable:e,destination:n,draggables:r,previousImpact:o,viewport:a,previousPageBorderBoxCenter:u,previousClientSelection:h,afterCritical:f})=>{if(!n.isEnabled)return null;const m=Sa(n.descriptor.id,r),v=Aa(e,n),_=eM({isMovingForward:t,draggable:e,destination:n,insideDestination:m,previousImpact:o})||pM({isMovingForward:t,isInHomeList:v,draggable:e,draggables:r,destination:n,insideDestination:m,previousImpact:o,viewport:a,afterCritical:f});if(!_)return null;const w=yh({impact:_,draggable:e,droppable:n,draggables:r,afterCritical:f});if(oS({draggable:e,destination:n,newPageBorderBoxCenter:w,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0}))return{clientSelection:Ng({pageBorderBoxCenter:w,draggable:e,viewport:a}),impact:_,scrollJumpRequest:null};const D=Pn(w,u),L=IM({impact:_,viewport:a,destination:n,draggables:r,maxScrollChange:D});return{clientSelection:h,impact:L,scrollJumpRequest:D}};const ln=t=>{const e=t.subject.active;return e||ae(),e};var AM=({isMovingForward:t,pageBorderBoxCenter:e,source:n,droppables:r,viewport:o})=>{const a=n.subject.active;if(!a)return null;const u=n.axis,h=Hn(a[u.start],a[u.end]),f=ph(r).filter(v=>v!==n).filter(v=>v.isEnabled).filter(v=>!!v.subject.active).filter(v=>tS(o.frame)(ln(v))).filter(v=>{const _=ln(v);return t?a[u.crossAxisEnd]<_[u.crossAxisEnd]:_[u.crossAxisStart]<a[u.crossAxisStart]}).filter(v=>{const _=ln(v),w=Hn(_[u.start],_[u.end]);return h(_[u.start])||h(_[u.end])||w(a[u.start])||w(a[u.end])}).sort((v,_)=>{const w=ln(v)[u.crossAxisStart],T=ln(_)[u.crossAxisStart];return t?w-T:T-w}).filter((v,_,w)=>ln(v)[u.crossAxisStart]===ln(w[0])[u.crossAxisStart]);if(!f.length)return null;if(f.length===1)return f[0];const m=f.filter(v=>Hn(ln(v)[u.start],ln(v)[u.end])(e[u.line]));return m.length===1?m[0]:m.length>1?m.sort((v,_)=>ln(v)[u.start]-ln(_)[u.start])[0]:f.sort((v,_)=>{const w=m0(e,g0(ln(v))),T=m0(e,g0(ln(_)));return w!==T?w-T:ln(v)[u.start]-ln(_)[u.start]})[0]};const E0=(t,e)=>{const n=t.page.borderBox.center;return Ji(t.descriptor.id,e)?Pn(n,e.displacedBy.point):n},bM=(t,e)=>{const n=t.page.borderBox;return Ji(t.descriptor.id,e)?gu(n,Ta(e.displacedBy.point)):n};var CM=({pageBorderBoxCenter:t,viewport:e,destination:n,insideDestination:r,afterCritical:o})=>r.filter(u=>rS({target:bM(u,o),destination:n,viewport:e.frame,withDroppableDisplacement:!0})).sort((u,h)=>{const f=eu(t,ym(n,E0(u,o))),m=eu(t,ym(n,E0(h,o)));return f<m?-1:m<f?1:u.descriptor.index-h.descriptor.index})[0]||null,yu=Vt(function(e,n){const r=n[e.line];return{value:r,point:Ws(e.line,r)}});const RM=(t,e,n)=>{const r=t.axis;if(t.descriptor.mode==="virtual")return Ws(r.line,e[r.line]);const o=t.subject.page.contentBox[r.size],f=Sa(t.descriptor.id,n).reduce((m,v)=>m+v.client.marginBox[r.size],0)+e[r.line]-o;return f<=0?null:Ws(r.line,f)},aS=(t,e)=>({...t,scroll:{...t.scroll,max:e}}),lS=(t,e,n)=>{const r=t.frame;Aa(e,t)&&ae(),t.subject.withPlaceholder&&ae();const o=yu(t.axis,e.displaceBy).point,a=RM(t,o,n),u={placeholderSize:o,increasedBy:a,oldFrameMaxScroll:t.frame?t.frame.scroll.max:null};if(!r){const v=ha({page:t.subject.page,withPlaceholder:u,axis:t.axis,frame:t.frame});return{...t,subject:v}}const h=a?Gt(r.scroll.max,a):r.scroll.max,f=aS(r,h),m=ha({page:t.subject.page,withPlaceholder:u,axis:t.axis,frame:f});return{...t,subject:m,frame:f}},PM=t=>{const e=t.subject.withPlaceholder;e||ae();const n=t.frame;if(!n){const u=ha({page:t.subject.page,axis:t.axis,frame:null,withPlaceholder:null});return{...t,subject:u}}const r=e.oldFrameMaxScroll;r||ae();const o=aS(n,r),a=ha({page:t.subject.page,axis:t.axis,frame:o,withPlaceholder:null});return{...t,subject:a,frame:o}};var xM=({previousPageBorderBoxCenter:t,moveRelativeTo:e,insideDestination:n,draggable:r,draggables:o,destination:a,viewport:u,afterCritical:h})=>{if(!e){if(n.length)return null;const _={displaced:tu,displacedBy:eS,at:{type:"REORDER",destination:{droppableId:a.descriptor.id,index:0}}},w=yh({impact:_,draggable:r,droppable:a,draggables:o,afterCritical:h}),T=Aa(r,a)?a:lS(a,r,o);return oS({draggable:r,destination:T,newPageBorderBoxCenter:w,viewport:u.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0})?_:null}const f=t[a.axis.line]<=e.page.borderBox.center[a.axis.line],m=(()=>{const _=e.descriptor.index;return e.descriptor.id===r.descriptor.id||f?_:_+1})(),v=yu(a.axis,r.displaceBy);return Vd({draggable:r,insideDestination:n,destination:a,viewport:u,displacedBy:v,last:tu,index:m})},kM=({isMovingForward:t,previousPageBorderBoxCenter:e,draggable:n,isOver:r,draggables:o,droppables:a,viewport:u,afterCritical:h})=>{const f=AM({isMovingForward:t,pageBorderBoxCenter:e,source:r,droppables:a,viewport:u});if(!f)return null;const m=Sa(f.descriptor.id,o),v=CM({pageBorderBoxCenter:e,viewport:u,destination:f,insideDestination:m,afterCritical:h}),_=xM({previousPageBorderBoxCenter:e,destination:f,draggable:n,draggables:o,moveRelativeTo:v,insideDestination:m,viewport:u,afterCritical:h});if(!_)return null;const w=yh({impact:_,draggable:n,droppable:f,draggables:o,afterCritical:h});return{clientSelection:Ng({pageBorderBoxCenter:w,draggable:n,viewport:u}),impact:_,scrollJumpRequest:null}},xn=t=>{const e=t.at;return e?e.type==="REORDER"?e.destination.droppableId:e.combine.droppableId:null};const DM=(t,e)=>{const n=xn(t);return n?e[n]:null};var NM=({state:t,type:e})=>{const n=DM(t.impact,t.dimensions.droppables),r=!!n,o=t.dimensions.droppables[t.critical.droppable.id],a=n||o,u=a.axis.direction,h=u==="vertical"&&(e==="MOVE_UP"||e==="MOVE_DOWN")||u==="horizontal"&&(e==="MOVE_LEFT"||e==="MOVE_RIGHT");if(h&&!r)return null;const f=e==="MOVE_DOWN"||e==="MOVE_RIGHT",m=t.dimensions.draggables[t.critical.draggable.id],v=t.current.page.borderBoxCenter,{draggables:_,droppables:w}=t.dimensions;return h?SM({isMovingForward:f,previousPageBorderBoxCenter:v,draggable:m,destination:a,draggables:_,viewport:t.viewport,previousClientSelection:t.current.client.selection,previousImpact:t.impact,afterCritical:t.afterCritical}):kM({isMovingForward:f,previousPageBorderBoxCenter:v,draggable:m,isOver:a,draggables:_,droppables:w,viewport:t.viewport,afterCritical:t.afterCritical})};function Ds(t){return t.phase==="DRAGGING"||t.phase==="COLLECTING"}function uS(t){const e=Hn(t.top,t.bottom),n=Hn(t.left,t.right);return function(o){return e(o.y)&&n(o.x)}}function OM(t,e){return t.left<e.right&&t.right>e.left&&t.top<e.bottom&&t.bottom>e.top}function LM({pageBorderBox:t,draggable:e,candidates:n}){const r=e.page.borderBox.center,o=n.map(a=>{const u=a.axis,h=Ws(a.axis.line,t.center[u.line],a.page.borderBox.center[u.crossAxisLine]);return{id:a.descriptor.id,distance:eu(r,h)}}).sort((a,u)=>u.distance-a.distance);return o[0]?o[0].id:null}function MM({pageBorderBox:t,draggable:e,droppables:n}){const r=ph(n).filter(o=>{if(!o.isEnabled)return!1;const a=o.subject.active;if(!a||!OM(t,a))return!1;if(uS(a)(t.center))return!0;const u=o.axis,h=a.center[u.crossAxisLine],f=t[u.crossAxisStart],m=t[u.crossAxisEnd],v=Hn(a[u.crossAxisStart],a[u.crossAxisEnd]),_=v(f),w=v(m);return!_&&!w?!0:_?f<h:m>h});return r.length?r.length===1?r[0].descriptor.id:LM({pageBorderBox:t,draggable:e,candidates:r}):null}const cS=(t,e)=>dr(gu(t,e));var VM=(t,e)=>{const n=t.frame;return n?cS(e,n.scroll.diff.value):e};function dS({displaced:t,id:e}){return!!(t.visible[e]||t.invisible[e])}function FM({draggable:t,closest:e,inHomeList:n}){return e?n&&e.descriptor.index>t.descriptor.index?e.descriptor.index-1:e.descriptor.index:null}var UM=({pageBorderBoxWithDroppableScroll:t,draggable:e,destination:n,insideDestination:r,last:o,viewport:a,afterCritical:u})=>{const h=n.axis,f=yu(n.axis,e.displaceBy),m=f.value,v=t[h.start],_=t[h.end],T=gh(e,r).find(L=>{const x=L.descriptor.id,K=L.page.borderBox.center[h.line],q=Ji(x,u),G=dS({displaced:o,id:x});return q?G?_<=K:v<K-m:G?_<=K+m:v<K})||null,D=FM({draggable:e,closest:T,inHomeList:Aa(e,n)});return Vd({draggable:e,insideDestination:r,destination:n,viewport:a,last:o,displacedBy:f,index:D})};const jM=4;var BM=({draggable:t,pageBorderBoxWithDroppableScroll:e,previousImpact:n,destination:r,insideDestination:o,afterCritical:a})=>{if(!r.isCombineEnabled)return null;const u=r.axis,h=yu(r.axis,t.displaceBy),f=h.value,m=e[u.start],v=e[u.end],w=gh(t,o).find(D=>{const L=D.descriptor.id,x=D.page.borderBox,q=x[u.size]/jM,G=Ji(L,a),z=dS({displaced:n.displaced,id:L});return G?z?v>x[u.start]+q&&v<x[u.end]-q:m>x[u.start]-f+q&&m<x[u.end]-f-q:z?v>x[u.start]+f+q&&v<x[u.end]+f-q:m>x[u.start]+q&&m<x[u.end]-q});return w?{displacedBy:h,displaced:n.displaced,at:{type:"COMBINE",combine:{draggableId:w.descriptor.id,droppableId:r.descriptor.id}}}:null},hS=({pageOffset:t,draggable:e,draggables:n,droppables:r,previousImpact:o,viewport:a,afterCritical:u})=>{const h=cS(e.page.borderBox,t),f=MM({pageBorderBox:h,draggable:e,droppables:r});if(!f)return tM;const m=r[f],v=Sa(m.descriptor.id,n),_=VM(m,h);return BM({pageBorderBoxWithDroppableScroll:_,draggable:e,previousImpact:o,destination:m,insideDestination:v,afterCritical:u})||UM({pageBorderBoxWithDroppableScroll:_,draggable:e,destination:m,insideDestination:v,last:o.displaced,viewport:a,afterCritical:u})},Og=(t,e)=>({...t,[e.descriptor.id]:e});const $M=({previousImpact:t,impact:e,droppables:n})=>{const r=xn(t),o=xn(e);if(!r||r===o)return n;const a=n[r];if(!a.subject.withPlaceholder)return n;const u=PM(a);return Og(n,u)};var zM=({draggable:t,draggables:e,droppables:n,previousImpact:r,impact:o})=>{const a=$M({previousImpact:r,impact:o,droppables:n}),u=xn(o);if(!u)return a;const h=n[u];if(Aa(t,h)||h.subject.withPlaceholder)return a;const f=lS(h,t,e);return Og(a,f)},Vl=({state:t,clientSelection:e,dimensions:n,viewport:r,impact:o,scrollJumpRequest:a})=>{const u=r||t.viewport,h=n||t.dimensions,f=e||t.current.client.selection,m=Pn(f,t.initial.client.selection),v={offset:m,selection:f,borderBoxCenter:Gt(t.initial.client.borderBoxCenter,m)},_={selection:Gt(v.selection,u.scroll.current),borderBoxCenter:Gt(v.borderBoxCenter,u.scroll.current),offset:Gt(v.offset,u.scroll.diff.value)},w={client:v,page:_};if(t.phase==="COLLECTING")return{...t,dimensions:h,viewport:u,current:w};const T=h.draggables[t.critical.draggable.id],D=o||hS({pageOffset:_.offset,draggable:T,draggables:h.draggables,droppables:h.droppables,previousImpact:t.impact,viewport:u,afterCritical:t.afterCritical}),L=zM({draggable:T,impact:D,previousImpact:t.impact,draggables:h.draggables,droppables:h.droppables});return{...t,current:w,dimensions:{draggables:h.draggables,droppables:L},impact:D,viewport:u,scrollJumpRequest:a||null,forceShouldAnimate:a?!1:null}};function WM(t,e){return t.map(n=>e[n])}var fS=({impact:t,viewport:e,draggables:n,destination:r,forceShouldAnimate:o})=>{const a=t.displaced,u=WM(a.all,n),h=nu({afterDragging:u,destination:r,displacedBy:t.displacedBy,viewport:e.frame,forceShouldAnimate:o,last:a});return{...t,displaced:h}},pS=({impact:t,draggable:e,droppable:n,draggables:r,viewport:o,afterCritical:a})=>{const u=yh({impact:t,draggable:e,draggables:r,droppable:n,afterCritical:a});return Ng({pageBorderBoxCenter:u,draggable:e,viewport:o})},mS=({state:t,dimensions:e,viewport:n})=>{t.movementMode!=="SNAP"&&ae();const r=t.impact,o=n||t.viewport,a=e||t.dimensions,{draggables:u,droppables:h}=a,f=u[t.critical.draggable.id],m=xn(r);m||ae();const v=h[m],_=fS({impact:r,viewport:o,destination:v,draggables:u}),w=pS({impact:_,draggable:f,droppable:v,draggables:u,viewport:o,afterCritical:t.afterCritical});return Vl({impact:_,clientSelection:w,state:t,dimensions:a,viewport:o})},GM=t=>({index:t.index,droppableId:t.droppableId}),gS=({draggable:t,home:e,draggables:n,viewport:r})=>{const o=yu(e.axis,t.displaceBy),a=Sa(e.descriptor.id,n),u=a.indexOf(t);u===-1&&ae();const h=a.slice(u+1),f=h.reduce((w,T)=>(w[T.descriptor.id]=!0,w),{}),m={inVirtualList:e.descriptor.mode==="virtual",displacedBy:o,effected:f};return{impact:{displaced:nu({afterDragging:h,destination:e,displacedBy:o,last:null,viewport:r.frame,forceShouldAnimate:!1}),displacedBy:o,at:{type:"REORDER",destination:GM(t.descriptor)}},afterCritical:m}},HM=(t,e)=>({draggables:t.draggables,droppables:Og(t.droppables,e)}),qM=({draggable:t,offset:e,initialWindowScroll:n})=>{const r=Dd(t.client,e),o=Nd(r,n);return{...t,placeholder:{...t.placeholder,client:r},client:r,page:o}},KM=t=>{const e=t.frame;return e||ae(),e},QM=({additions:t,updatedDroppables:e,viewport:n})=>{const r=n.scroll.diff.value;return t.map(o=>{const a=o.descriptor.droppableId,u=e[a],f=KM(u).scroll.diff.value,m=Gt(r,f);return qM({draggable:o,offset:m,initialWindowScroll:n.scroll.initial})})},YM=({state:t,published:e})=>{const n=e.modified.map(K=>{const q=t.dimensions.droppables[K.droppableId];return Rg(q,K.scroll)}),r={...t.dimensions.droppables,...JT(n)},o=ZT(QM({additions:e.additions,updatedDroppables:r,viewport:t.viewport})),a={...t.dimensions.draggables,...o};e.removals.forEach(K=>{delete a[K]});const u={droppables:r,draggables:a},h=xn(t.impact),f=h?u.droppables[h]:null,m=u.draggables[t.critical.draggable.id],v=u.droppables[t.critical.droppable.id],{impact:_,afterCritical:w}=gS({draggable:m,home:v,draggables:a,viewport:t.viewport}),T=f&&f.isCombineEnabled?t.impact:_,D=hS({pageOffset:t.current.page.offset,draggable:u.draggables[t.critical.draggable.id],draggables:u.draggables,droppables:u.droppables,previousImpact:T,viewport:t.viewport,afterCritical:w}),L={...t,phase:"DRAGGING",impact:D,onLiftImpact:_,dimensions:u,afterCritical:w,forceShouldAnimate:!1};return t.phase==="COLLECTING"?L:{...L,phase:"DROP_PENDING",reason:t.reason,isWaiting:!1}};const vm=t=>t.movementMode==="SNAP",Cp=(t,e,n)=>{const r=HM(t.dimensions,e);return!vm(t)||n?Vl({state:t,dimensions:r}):mS({state:t,dimensions:r})};function Rp(t){return t.isDragging&&t.movementMode==="SNAP"?{...t,scrollJumpRequest:null}:t}const I0={phase:"IDLE",completed:null,shouldFlush:!1};var XM=(t=I0,e)=>{if(e.type==="FLUSH")return{...I0,shouldFlush:!0};if(e.type==="INITIAL_PUBLISH"){t.phase!=="IDLE"&&ae();const{critical:n,clientSelection:r,viewport:o,dimensions:a,movementMode:u}=e.payload,h=a.draggables[n.draggable.id],f=a.droppables[n.droppable.id],m={selection:r,borderBoxCenter:h.client.borderBox.center,offset:Ft},v={client:m,page:{selection:Gt(m.selection,o.scroll.initial),borderBoxCenter:Gt(m.selection,o.scroll.initial),offset:Gt(m.selection,o.scroll.diff.value)}},_=ph(a.droppables).every(L=>!L.isFixedOnPage),{impact:w,afterCritical:T}=gS({draggable:h,home:f,draggables:a.draggables,viewport:o});return{phase:"DRAGGING",isDragging:!0,critical:n,movementMode:u,dimensions:a,initial:v,current:v,isWindowScrollAllowed:_,impact:w,afterCritical:T,onLiftImpact:w,viewport:o,scrollJumpRequest:null,forceShouldAnimate:null}}if(e.type==="COLLECTION_STARTING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"?t:(t.phase!=="DRAGGING"&&ae(),{...t,phase:"COLLECTING"});if(e.type==="PUBLISH_WHILE_DRAGGING")return t.phase==="COLLECTING"||t.phase==="DROP_PENDING"||ae(),YM({state:t,published:e.payload});if(e.type==="MOVE"){if(t.phase==="DROP_PENDING")return t;Ds(t)||ae();const{client:n}=e.payload;return Gi(n,t.current.client.selection)?t:Vl({state:t,clientSelection:n,impact:vm(t)?t.impact:null})}if(e.type==="UPDATE_DROPPABLE_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="COLLECTING")return Rp(t);Ds(t)||ae();const{id:n,newScroll:r}=e.payload,o=t.dimensions.droppables[n];if(!o)return t;const a=Rg(o,r);return Cp(t,a,!1)}if(e.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(t.phase==="DROP_PENDING")return t;Ds(t)||ae();const{id:n,isEnabled:r}=e.payload,o=t.dimensions.droppables[n];o||ae(),o.isEnabled===r&&ae();const a={...o,isEnabled:r};return Cp(t,a,!0)}if(e.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(t.phase==="DROP_PENDING")return t;Ds(t)||ae();const{id:n,isCombineEnabled:r}=e.payload,o=t.dimensions.droppables[n];o||ae(),o.isCombineEnabled===r&&ae();const a={...o,isCombineEnabled:r};return Cp(t,a,!0)}if(e.type==="MOVE_BY_WINDOW_SCROLL"){if(t.phase==="DROP_PENDING"||t.phase==="DROP_ANIMATING")return t;Ds(t)||ae(),t.isWindowScrollAllowed||ae();const n=e.payload.newScroll;if(Gi(t.viewport.scroll.current,n))return Rp(t);const r=sS(t.viewport,n);return vm(t)?mS({state:t,viewport:r}):Vl({state:t,viewport:r})}if(e.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Ds(t))return t;const n=e.payload.maxScroll;if(Gi(n,t.viewport.scroll.max))return t;const r={...t.viewport,scroll:{...t.viewport.scroll,max:n}};return{...t,viewport:r}}if(e.type==="MOVE_UP"||e.type==="MOVE_DOWN"||e.type==="MOVE_LEFT"||e.type==="MOVE_RIGHT"){if(t.phase==="COLLECTING"||t.phase==="DROP_PENDING")return t;t.phase!=="DRAGGING"&&ae();const n=NM({state:t,type:e.type});return n?Vl({state:t,impact:n.impact,clientSelection:n.clientSelection,scrollJumpRequest:n.scrollJumpRequest}):t}if(e.type==="DROP_PENDING"){const n=e.payload.reason;return t.phase!=="COLLECTING"&&ae(),{...t,phase:"DROP_PENDING",isWaiting:!0,reason:n}}if(e.type==="DROP_ANIMATE"){const{completed:n,dropDuration:r,newHomeClientOffset:o}=e.payload;return t.phase==="DRAGGING"||t.phase==="DROP_PENDING"||ae(),{phase:"DROP_ANIMATING",completed:n,dropDuration:r,newHomeClientOffset:o,dimensions:t.dimensions}}if(e.type==="DROP_COMPLETE"){const{completed:n}=e.payload;return{phase:"IDLE",completed:n,shouldFlush:!1}}return t};function Ke(t,e){return t instanceof Object&&"type"in t&&t.type===e}const JM=t=>({type:"BEFORE_INITIAL_CAPTURE",payload:t}),ZM=t=>({type:"LIFT",payload:t}),eV=t=>({type:"INITIAL_PUBLISH",payload:t}),tV=t=>({type:"PUBLISH_WHILE_DRAGGING",payload:t}),nV=()=>({type:"COLLECTION_STARTING",payload:null}),rV=t=>({type:"UPDATE_DROPPABLE_SCROLL",payload:t}),iV=t=>({type:"UPDATE_DROPPABLE_IS_ENABLED",payload:t}),sV=t=>({type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:t}),yS=t=>({type:"MOVE",payload:t}),oV=t=>({type:"MOVE_BY_WINDOW_SCROLL",payload:t}),aV=t=>({type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:t}),lV=()=>({type:"MOVE_UP",payload:null}),uV=()=>({type:"MOVE_DOWN",payload:null}),cV=()=>({type:"MOVE_RIGHT",payload:null}),dV=()=>({type:"MOVE_LEFT",payload:null}),Lg=()=>({type:"FLUSH",payload:null}),hV=t=>({type:"DROP_ANIMATE",payload:t}),Mg=t=>({type:"DROP_COMPLETE",payload:t}),vS=t=>({type:"DROP",payload:t}),fV=t=>({type:"DROP_PENDING",payload:t}),_S=()=>({type:"DROP_ANIMATION_FINISHED",payload:null});var pV=t=>({getState:e,dispatch:n})=>r=>o=>{if(!Ke(o,"LIFT")){r(o);return}const{id:a,clientSelection:u,movementMode:h}=o.payload,f=e();f.phase==="DROP_ANIMATING"&&n(Mg({completed:f.completed})),e().phase!=="IDLE"&&ae(),n(Lg()),n(JM({draggableId:a,movementMode:h}));const v={draggableId:a,scrollOptions:{shouldPublishImmediately:h==="SNAP"}},{critical:_,dimensions:w,viewport:T}=t.startPublishing(v);n(eV({critical:_,dimensions:w,clientSelection:u,movementMode:h,viewport:T}))},mV=t=>()=>e=>n=>{Ke(n,"INITIAL_PUBLISH")&&t.dragging(),Ke(n,"DROP_ANIMATE")&&t.dropping(n.payload.completed.result.reason),(Ke(n,"FLUSH")||Ke(n,"DROP_COMPLETE"))&&t.resting(),e(n)};const Vg={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},ru={opacity:{drop:0,combining:.7},scale:{drop:.75}},wS={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},xs=`${wS.outOfTheWay}s ${Vg.outOfTheWay}`,Fl={fluid:`opacity ${xs}`,snap:`transform ${xs}, opacity ${xs}`,drop:t=>{const e=`${t}s ${Vg.drop}`;return`transform ${e}, opacity ${e}`},outOfTheWay:`transform ${xs}`,placeholder:`height ${xs}, width ${xs}, margin ${xs}`},T0=t=>Gi(t,Ft)?void 0:`translate(${t.x}px, ${t.y}px)`,_m={moveTo:T0,drop:(t,e)=>{const n=T0(t);if(n)return e?`${n} scale(${ru.scale.drop})`:n}},{minDropTime:wm,maxDropTime:ES}=wS,gV=ES-wm,S0=1500,yV=.6;var vV=({current:t,destination:e,reason:n})=>{const r=eu(t,e);if(r<=0)return wm;if(r>=S0)return ES;const o=r/S0,a=wm+gV*o,u=n==="CANCEL"?a*yV:a;return Number(u.toFixed(2))},_V=({impact:t,draggable:e,dimensions:n,viewport:r,afterCritical:o})=>{const{draggables:a,droppables:u}=n,h=xn(t),f=h?u[h]:null,m=u[e.descriptor.droppableId],v=pS({impact:t,draggable:e,draggables:a,afterCritical:o,droppable:f||m,viewport:r});return Pn(v,e.client.borderBox.center)},wV=({draggables:t,reason:e,lastImpact:n,home:r,viewport:o,onLiftImpact:a})=>!n.at||e!=="DROP"?{impact:fS({draggables:t,impact:a,destination:r,viewport:o,forceShouldAnimate:!0}),didDropInsideDroppable:!1}:n.at.type==="REORDER"?{impact:n,didDropInsideDroppable:!0}:{impact:{...n,displaced:tu},didDropInsideDroppable:!0};const EV=({getState:t,dispatch:e})=>n=>r=>{if(!Ke(r,"DROP")){n(r);return}const o=t(),a=r.payload.reason;if(o.phase==="COLLECTING"){e(fV({reason:a}));return}if(o.phase==="IDLE")return;o.phase==="DROP_PENDING"&&o.isWaiting&&ae(),o.phase==="DRAGGING"||o.phase==="DROP_PENDING"||ae();const h=o.critical,f=o.dimensions,m=f.draggables[o.critical.draggable.id],{impact:v,didDropInsideDroppable:_}=wV({reason:a,lastImpact:o.impact,afterCritical:o.afterCritical,onLiftImpact:o.onLiftImpact,home:o.dimensions.droppables[o.critical.droppable.id],viewport:o.viewport,draggables:o.dimensions.draggables}),w=_?Pg(v):null,T=_?mh(v):null,D={index:h.draggable.index,droppableId:h.droppable.id},L={draggableId:m.descriptor.id,type:m.descriptor.type,source:D,reason:a,mode:o.movementMode,destination:w,combine:T},x=_V({impact:v,draggable:m,dimensions:f,viewport:o.viewport,afterCritical:o.afterCritical}),K={critical:o.critical,afterCritical:o.afterCritical,result:L,impact:v};if(!(!Gi(o.current.client.offset,x)||!!L.combine)){e(Mg({completed:K}));return}const G=vV({current:o.current.client.offset,destination:x,reason:a});e(hV({newHomeClientOffset:x,dropDuration:G,completed:K}))};var IS=()=>({x:window.pageXOffset,y:window.pageYOffset});function IV(t){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:e=>{e.target!==window&&e.target!==window.document||t()}}}function TV({onWindowScroll:t}){function e(){t(IS())}const n=Zl(e),r=IV(n);let o=Wi;function a(){return o!==Wi}function u(){a()&&ae(),o=Wn(window,[r])}function h(){a()||ae(),n.cancel(),o(),o=Wi}return{start:u,stop:h,isActive:a}}const SV=t=>Ke(t,"DROP_COMPLETE")||Ke(t,"DROP_ANIMATE")||Ke(t,"FLUSH"),AV=t=>{const e=TV({onWindowScroll:n=>{t.dispatch(oV({newScroll:n}))}});return n=>r=>{!e.isActive()&&Ke(r,"INITIAL_PUBLISH")&&e.start(),e.isActive()&&SV(r)&&e.stop(),n(r)}};var bV=t=>{let e=!1,n=!1;const r=setTimeout(()=>{n=!0}),o=a=>{e||n||(e=!0,t(a),clearTimeout(r))};return o.wasCalled=()=>e,o},CV=()=>{const t=[],e=o=>{const a=t.findIndex(h=>h.timerId===o);a===-1&&ae();const[u]=t.splice(a,1);u.callback()};return{add:o=>{const a=setTimeout(()=>e(a)),u={timerId:a,callback:o};t.push(u)},flush:()=>{if(!t.length)return;const o=[...t];t.length=0,o.forEach(a=>{clearTimeout(a.timerId),a.callback()})}}};const RV=(t,e)=>t==null&&e==null?!0:t==null||e==null?!1:t.droppableId===e.droppableId&&t.index===e.index,PV=(t,e)=>t==null&&e==null?!0:t==null||e==null?!1:t.draggableId===e.draggableId&&t.droppableId===e.droppableId,xV=(t,e)=>{if(t===e)return!0;const n=t.draggable.id===e.draggable.id&&t.draggable.droppableId===e.draggable.droppableId&&t.draggable.type===e.draggable.type&&t.draggable.index===e.draggable.index,r=t.droppable.id===e.droppable.id&&t.droppable.type===e.droppable.type;return n&&r},El=(t,e)=>{e()},$c=(t,e)=>({draggableId:t.draggable.id,type:t.droppable.type,source:{droppableId:t.droppable.id,index:t.draggable.index},mode:e});function Pp(t,e,n,r){if(!t){n(r(e));return}const o=bV(n);t(e,{announce:o}),o.wasCalled()||n(r(e))}var kV=(t,e)=>{const n=CV();let r=null;const o=(_,w)=>{r&&ae(),El("onBeforeCapture",()=>{const T=t().onBeforeCapture;T&&T({draggableId:_,mode:w})})},a=(_,w)=>{r&&ae(),El("onBeforeDragStart",()=>{const T=t().onBeforeDragStart;T&&T($c(_,w))})},u=(_,w)=>{r&&ae();const T=$c(_,w);r={mode:w,lastCritical:_,lastLocation:T.source,lastCombine:null},n.add(()=>{El("onDragStart",()=>Pp(t().onDragStart,T,e,od.onDragStart))})},h=(_,w)=>{const T=Pg(w),D=mh(w);r||ae();const L=!xV(_,r.lastCritical);L&&(r.lastCritical=_);const x=!RV(r.lastLocation,T);x&&(r.lastLocation=T);const K=!PV(r.lastCombine,D);if(K&&(r.lastCombine=D),!L&&!x&&!K)return;const q={...$c(_,r.mode),combine:D,destination:T};n.add(()=>{El("onDragUpdate",()=>Pp(t().onDragUpdate,q,e,od.onDragUpdate))})},f=()=>{r||ae(),n.flush()},m=_=>{r||ae(),r=null,El("onDragEnd",()=>Pp(t().onDragEnd,_,e,od.onDragEnd))};return{beforeCapture:o,beforeStart:a,start:u,update:h,flush:f,drop:m,abort:()=>{if(!r)return;const _={...$c(r.lastCritical,r.mode),combine:null,destination:null,reason:"CANCEL"};m(_)}}},DV=(t,e)=>{const n=kV(t,e);return r=>o=>a=>{if(Ke(a,"BEFORE_INITIAL_CAPTURE")){n.beforeCapture(a.payload.draggableId,a.payload.movementMode);return}if(Ke(a,"INITIAL_PUBLISH")){const h=a.payload.critical;n.beforeStart(h,a.payload.movementMode),o(a),n.start(h,a.payload.movementMode);return}if(Ke(a,"DROP_COMPLETE")){const h=a.payload.completed.result;n.flush(),o(a),n.drop(h);return}if(o(a),Ke(a,"FLUSH")){n.abort();return}const u=r.getState();u.phase==="DRAGGING"&&n.update(u.critical,u.impact)}};const NV=t=>e=>n=>{if(!Ke(n,"DROP_ANIMATION_FINISHED")){e(n);return}const r=t.getState();r.phase!=="DROP_ANIMATING"&&ae(),t.dispatch(Mg({completed:r.completed}))},OV=t=>{let e=null,n=null;function r(){n&&(cancelAnimationFrame(n),n=null),e&&(e(),e=null)}return o=>a=>{if((Ke(a,"FLUSH")||Ke(a,"DROP_COMPLETE")||Ke(a,"DROP_ANIMATION_FINISHED"))&&r(),o(a),!Ke(a,"DROP_ANIMATE"))return;const u={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){t.getState().phase==="DROP_ANIMATING"&&t.dispatch(_S())}};n=requestAnimationFrame(()=>{n=null,e=Wn(window,[u])})}};var LV=t=>()=>e=>n=>{(Ke(n,"DROP_COMPLETE")||Ke(n,"FLUSH")||Ke(n,"DROP_ANIMATE"))&&t.stopPublishing(),e(n)},MV=t=>{let e=!1;return()=>n=>r=>{if(Ke(r,"INITIAL_PUBLISH")){e=!0,t.tryRecordFocus(r.payload.critical.draggable.id),n(r),t.tryRestoreFocusRecorded();return}if(n(r),!!e){if(Ke(r,"FLUSH")){e=!1,t.tryRestoreFocusRecorded();return}if(Ke(r,"DROP_COMPLETE")){e=!1;const o=r.payload.completed.result;o.combine&&t.tryShiftRecord(o.draggableId,o.combine.draggableId),t.tryRestoreFocusRecorded()}}}};const VV=t=>Ke(t,"DROP_COMPLETE")||Ke(t,"DROP_ANIMATE")||Ke(t,"FLUSH");var FV=t=>e=>n=>r=>{if(VV(r)){t.stop(),n(r);return}if(Ke(r,"INITIAL_PUBLISH")){n(r);const o=e.getState();o.phase!=="DRAGGING"&&ae(),t.start(o);return}n(r),t.scroll(e.getState())};const UV=t=>e=>n=>{if(e(n),!Ke(n,"PUBLISH_WHILE_DRAGGING"))return;const r=t.getState();r.phase==="DROP_PENDING"&&(r.isWaiting||t.dispatch(vS({reason:r.reason})))},jV=FT;var BV=({dimensionMarshal:t,focusMarshal:e,styleMarshal:n,getResponders:r,announce:o,autoScroller:a})=>VT(XM,jV(jO(mV(n),LV(t),pV(t),EV,NV,OV,UV,FV(a),AV,MV(e),DV(r,o))));const xp=()=>({additions:{},removals:{},modified:{}});function $V({registry:t,callbacks:e}){let n=xp(),r=null;const o=()=>{r||(e.collectionStarting(),r=requestAnimationFrame(()=>{r=null;const{additions:f,removals:m,modified:v}=n,_=Object.keys(f).map(D=>t.draggable.getById(D).getDimension(Ft)).sort((D,L)=>D.descriptor.index-L.descriptor.index),w=Object.keys(v).map(D=>{const x=t.droppable.getById(D).callbacks.getScrollWhileDragging();return{droppableId:D,scroll:x}}),T={additions:_,removals:Object.keys(m),modified:w};n=xp(),e.publish(T)}))};return{add:f=>{const m=f.descriptor.id;n.additions[m]=f,n.modified[f.descriptor.droppableId]=!0,n.removals[m]&&delete n.removals[m],o()},remove:f=>{const m=f.descriptor;n.removals[m.id]=!0,n.modified[m.droppableId]=!0,n.additions[m.id]&&delete n.additions[m.id],o()},stop:()=>{r&&(cancelAnimationFrame(r),r=null,n=xp())}}}var TS=({scrollHeight:t,scrollWidth:e,height:n,width:r})=>{const o=Pn({x:e,y:t},{x:r,y:n});return{x:Math.max(0,o.x),y:Math.max(0,o.y)}},SS=()=>{const t=document.documentElement;return t||ae(),t},AS=()=>{const t=SS();return TS({scrollHeight:t.scrollHeight,scrollWidth:t.scrollWidth,width:t.clientWidth,height:t.clientHeight})},zV=()=>{const t=IS(),e=AS(),n=t.y,r=t.x,o=SS(),a=o.clientWidth,u=o.clientHeight,h=r+a,f=n+u;return{frame:dr({top:n,left:r,right:h,bottom:f}),scroll:{initial:t,current:t,max:e,diff:{value:Ft,displacement:Ft}}}},WV=({critical:t,scrollOptions:e,registry:n})=>{const r=zV(),o=r.scroll.current,a=t.droppable,u=n.droppable.getAllByType(a.type).map(v=>v.callbacks.getDimensionAndWatchScroll(o,e)),h=n.draggable.getAllByType(t.draggable.type).map(v=>v.getDimension(o));return{dimensions:{draggables:ZT(h),droppables:JT(u)},critical:t,viewport:r}};function A0(t,e,n){return!(n.descriptor.id===e.id||n.descriptor.type!==e.type||t.droppable.getById(n.descriptor.droppableId).descriptor.mode!=="virtual")}var GV=(t,e)=>{let n=null;const r=$V({callbacks:{publish:e.publishWhileDragging,collectionStarting:e.collectionStarting},registry:t}),o=(w,T)=>{t.droppable.exists(w)||ae(),n&&e.updateDroppableIsEnabled({id:w,isEnabled:T})},a=(w,T)=>{n&&(t.droppable.exists(w)||ae(),e.updateDroppableIsCombineEnabled({id:w,isCombineEnabled:T}))},u=(w,T)=>{n&&(t.droppable.exists(w)||ae(),e.updateDroppableScroll({id:w,newScroll:T}))},h=(w,T)=>{n&&t.droppable.getById(w).callbacks.scroll(T)},f=()=>{if(!n)return;r.stop();const w=n.critical.droppable;t.droppable.getAllByType(w.type).forEach(T=>T.callbacks.dragStopped()),n.unsubscribe(),n=null},m=w=>{n||ae();const T=n.critical.draggable;w.type==="ADDITION"&&A0(t,T,w.value)&&r.add(w.value),w.type==="REMOVAL"&&A0(t,T,w.value)&&r.remove(w.value)};return{updateDroppableIsEnabled:o,updateDroppableIsCombineEnabled:a,scrollDroppable:h,updateDroppableScroll:u,startPublishing:w=>{n&&ae();const T=t.draggable.getById(w.draggableId),D=t.droppable.getById(T.descriptor.droppableId),L={draggable:T.descriptor,droppable:D.descriptor},x=t.subscribe(m);return n={critical:L,unsubscribe:x},WV({critical:L,registry:t,scrollOptions:w.scrollOptions})},stopPublishing:f}},bS=(t,e)=>t.phase==="IDLE"?!0:t.phase!=="DROP_ANIMATING"||t.completed.result.draggableId===e?!1:t.completed.result.reason==="DROP",HV=t=>{window.scrollBy(t.x,t.y)};const qV=Vt(t=>ph(t).filter(e=>!(!e.isEnabled||!e.frame))),KV=(t,e)=>qV(e).find(r=>(r.frame||ae(),uS(r.frame.pageMarginBox)(t)))||null;var QV=({center:t,destination:e,droppables:n})=>{if(e){const o=n[e];return o.frame?o:null}return KV(t,n)};const iu={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:t=>t**2,durationDampening:{stopDampeningAt:1200,accelerateAt:360},disabled:!1};var YV=(t,e,n=()=>iu)=>{const r=n(),o=t[e.size]*r.startFromPercentage,a=t[e.size]*r.maxScrollAtPercentage;return{startScrollingFrom:o,maxScrollValueAt:a}},CS=({startOfRange:t,endOfRange:e,current:n})=>{const r=e-t;return r===0?0:(n-t)/r},Fg=1,XV=(t,e,n=()=>iu)=>{const r=n();if(t>e.startScrollingFrom)return 0;if(t<=e.maxScrollValueAt)return r.maxPixelScroll;if(t===e.startScrollingFrom)return Fg;const a=1-CS({startOfRange:e.maxScrollValueAt,endOfRange:e.startScrollingFrom,current:t}),u=r.maxPixelScroll*r.ease(a);return Math.ceil(u)},JV=(t,e,n)=>{const r=n(),o=r.durationDampening.accelerateAt,a=r.durationDampening.stopDampeningAt,u=e,h=a,m=Date.now()-u;if(m>=a)return t;if(m<o)return Fg;const v=CS({startOfRange:o,endOfRange:h,current:m}),_=t*r.ease(v);return Math.ceil(_)},b0=({distanceToEdge:t,thresholds:e,dragStartTime:n,shouldUseTimeDampening:r,getAutoScrollerOptions:o})=>{const a=XV(t,e,o);return a===0?0:r?Math.max(JV(a,n,o),Fg):a},C0=({container:t,distanceToEdges:e,dragStartTime:n,axis:r,shouldUseTimeDampening:o,getAutoScrollerOptions:a})=>{const u=YV(t,r,a);return e[r.end]<e[r.start]?b0({distanceToEdge:e[r.end],thresholds:u,dragStartTime:n,shouldUseTimeDampening:o,getAutoScrollerOptions:a}):-1*b0({distanceToEdge:e[r.start],thresholds:u,dragStartTime:n,shouldUseTimeDampening:o,getAutoScrollerOptions:a})},ZV=({container:t,subject:e,proposedScroll:n})=>{const r=e.height>t.height,o=e.width>t.width;return!o&&!r?n:o&&r?null:{x:o?0:n.x,y:r?0:n.y}};const e2=XT(t=>t===0?0:t);var RS=({dragStartTime:t,container:e,subject:n,center:r,shouldUseTimeDampening:o,getAutoScrollerOptions:a})=>{const u={top:r.y-e.top,right:e.right-r.x,bottom:e.bottom-r.y,left:r.x-e.left},h=C0({container:e,distanceToEdges:u,dragStartTime:t,axis:xg,shouldUseTimeDampening:o,getAutoScrollerOptions:a}),f=C0({container:e,distanceToEdges:u,dragStartTime:t,axis:nS,shouldUseTimeDampening:o,getAutoScrollerOptions:a}),m=e2({x:f,y:h});if(Gi(m,Ft))return null;const v=ZV({container:e,subject:n,proposedScroll:m});return v?Gi(v,Ft)?null:v:null};const t2=XT(t=>t===0?0:t>0?1:-1),Ug=(()=>{const t=(e,n)=>e<0?e:e>n?e-n:0;return({current:e,max:n,change:r})=>{const o=Gt(e,r),a={x:t(o.x,n.x),y:t(o.y,n.y)};return Gi(a,Ft)?null:a}})(),PS=({max:t,current:e,change:n})=>{const r={x:Math.max(e.x,t.x),y:Math.max(e.y,t.y)},o=t2(n),a=Ug({max:r,current:e,change:o});return!a||o.x!==0&&a.x===0||o.y!==0&&a.y===0},jg=(t,e)=>PS({current:t.scroll.current,max:t.scroll.max,change:e}),n2=(t,e)=>{if(!jg(t,e))return null;const n=t.scroll.max,r=t.scroll.current;return Ug({current:r,max:n,change:e})},Bg=(t,e)=>{const n=t.frame;return n?PS({current:n.scroll.current,max:n.scroll.max,change:e}):!1},r2=(t,e)=>{const n=t.frame;return!n||!Bg(t,e)?null:Ug({current:n.scroll.current,max:n.scroll.max,change:e})};var i2=({viewport:t,subject:e,center:n,dragStartTime:r,shouldUseTimeDampening:o,getAutoScrollerOptions:a})=>{const u=RS({dragStartTime:r,container:t.frame,subject:e,center:n,shouldUseTimeDampening:o,getAutoScrollerOptions:a});return u&&jg(t,u)?u:null},s2=({droppable:t,subject:e,center:n,dragStartTime:r,shouldUseTimeDampening:o,getAutoScrollerOptions:a})=>{const u=t.frame;if(!u)return null;const h=RS({dragStartTime:r,container:u.pageMarginBox,subject:e,center:n,shouldUseTimeDampening:o,getAutoScrollerOptions:a});return h&&Bg(t,h)?h:null},R0=({state:t,dragStartTime:e,shouldUseTimeDampening:n,scrollWindow:r,scrollDroppable:o,getAutoScrollerOptions:a})=>{const u=t.current.page.borderBoxCenter,f=t.dimensions.draggables[t.critical.draggable.id].page.marginBox;if(t.isWindowScrollAllowed){const _=t.viewport,w=i2({dragStartTime:e,viewport:_,subject:f,center:u,shouldUseTimeDampening:n,getAutoScrollerOptions:a});if(w){r(w);return}}const m=QV({center:u,destination:xn(t.impact),droppables:t.dimensions.droppables});if(!m)return;const v=s2({dragStartTime:e,droppable:m,subject:f,center:u,shouldUseTimeDampening:n,getAutoScrollerOptions:a});v&&o(m.descriptor.id,v)},o2=({scrollWindow:t,scrollDroppable:e,getAutoScrollerOptions:n=()=>iu})=>{const r=Zl(t),o=Zl(e);let a=null;const u=m=>{a||ae();const{shouldUseTimeDampening:v,dragStartTime:_}=a;R0({state:m,scrollWindow:r,scrollDroppable:o,dragStartTime:_,shouldUseTimeDampening:v,getAutoScrollerOptions:n})};return{start:m=>{a&&ae();const v=Date.now();let _=!1;const w=()=>{_=!0};R0({state:m,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:w,scrollDroppable:w,getAutoScrollerOptions:n}),a={dragStartTime:v,shouldUseTimeDampening:_},_&&u(m)},stop:()=>{a&&(r.cancel(),o.cancel(),a=null)},scroll:u}},a2=({move:t,scrollDroppable:e,scrollWindow:n})=>{const r=(h,f)=>{const m=Gt(h.current.client.selection,f);t({client:m})},o=(h,f)=>{if(!Bg(h,f))return f;const m=r2(h,f);if(!m)return e(h.descriptor.id,f),null;const v=Pn(f,m);return e(h.descriptor.id,v),Pn(f,v)},a=(h,f,m)=>{if(!h||!jg(f,m))return m;const v=n2(f,m);if(!v)return n(m),null;const _=Pn(m,v);return n(_),Pn(m,_)};return h=>{const f=h.scrollJumpRequest;if(!f)return;const m=xn(h.impact);m||ae();const v=o(h.dimensions.droppables[m],f);if(!v)return;const _=h.viewport,w=a(h.isWindowScrollAllowed,_,v);w&&r(h,w)}},l2=({scrollDroppable:t,scrollWindow:e,move:n,getAutoScrollerOptions:r})=>{const o=o2({scrollWindow:e,scrollDroppable:t,getAutoScrollerOptions:r}),a=a2({move:n,scrollWindow:e,scrollDroppable:t});return{scroll:f=>{if(!(r().disabled||f.phase!=="DRAGGING")){if(f.movementMode==="FLUID"){o.scroll(f);return}f.scrollJumpRequest&&a(f)}},start:o.start,stop:o.stop}};const fa="data-rfd",pa=(()=>{const t=`${fa}-drag-handle`;return{base:t,draggableId:`${t}-draggable-id`,contextId:`${t}-context-id`}})(),Em=(()=>{const t=`${fa}-draggable`;return{base:t,contextId:`${t}-context-id`,id:`${t}-id`}})(),u2=(()=>{const t=`${fa}-droppable`;return{base:t,contextId:`${t}-context-id`,id:`${t}-id`}})(),P0={contextId:`${fa}-scroll-container-context-id`},c2=t=>e=>`[${e}="${t}"]`,Il=(t,e)=>t.map(n=>{const r=n.styles[e];return r?`${n.selector} { ${r} }`:""}).join(" "),d2="pointer-events: none;";var h2=t=>{const e=c2(t),n=(()=>{const h=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:e(pa.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:h,dragging:d2,dropAnimating:h}}})(),r=(()=>{const h=`
      transition: ${Fl.outOfTheWay};
    `;return{selector:e(Em.contextId),styles:{dragging:h,dropAnimating:h,userCancel:h}}})(),o={selector:e(u2.contextId),styles:{always:"overflow-anchor: none;"}},u=[r,n,o,{selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}}];return{always:Il(u,"always"),resting:Il(u,"resting"),dragging:Il(u,"dragging"),dropAnimating:Il(u,"dropAnimating"),userCancel:Il(u,"userCancel")}};const kn=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?Z.useLayoutEffect:Z.useEffect,kp=()=>{const t=document.querySelector("head");return t||ae(),t},x0=t=>{const e=document.createElement("style");return t&&e.setAttribute("nonce",t),e.type="text/css",e};function f2(t,e){const n=ze(()=>h2(t),[t]),r=Z.useRef(null),o=Z.useRef(null),a=ve(Vt(_=>{const w=o.current;w||ae(),w.textContent=_}),[]),u=ve(_=>{const w=r.current;w||ae(),w.textContent=_},[]);kn(()=>{!r.current&&!o.current||ae();const _=x0(e),w=x0(e);return r.current=_,o.current=w,_.setAttribute(`${fa}-always`,t),w.setAttribute(`${fa}-dynamic`,t),kp().appendChild(_),kp().appendChild(w),u(n.always),a(n.resting),()=>{const T=D=>{const L=D.current;L||ae(),kp().removeChild(L),D.current=null};T(r),T(o)}},[e,u,a,n.always,n.resting,t]);const h=ve(()=>a(n.dragging),[a,n.dragging]),f=ve(_=>{if(_==="DROP"){a(n.dropAnimating);return}a(n.userCancel)},[a,n.dropAnimating,n.userCancel]),m=ve(()=>{o.current&&a(n.resting)},[a,n.resting]);return ze(()=>({dragging:h,dropping:f,resting:m}),[h,f,m])}function xS(t,e){return Array.from(t.querySelectorAll(e))}var kS=t=>t&&t.ownerDocument&&t.ownerDocument.defaultView?t.ownerDocument.defaultView:window;function vh(t){return t instanceof kS(t).HTMLElement}function p2(t,e){const n=`[${pa.contextId}="${t}"]`,r=xS(document,n);if(!r.length)return null;const o=r.find(a=>a.getAttribute(pa.draggableId)===e);return!o||!vh(o)?null:o}function m2(t){const e=Z.useRef({}),n=Z.useRef(null),r=Z.useRef(null),o=Z.useRef(!1),a=ve(function(w,T){const D={id:w,focus:T};return e.current[w]=D,function(){const x=e.current;x[w]!==D&&delete x[w]}},[]),u=ve(function(w){const T=p2(t,w);T&&T!==document.activeElement&&T.focus()},[t]),h=ve(function(w,T){n.current===w&&(n.current=T)},[]),f=ve(function(){r.current||o.current&&(r.current=requestAnimationFrame(()=>{r.current=null;const w=n.current;w&&u(w)}))},[u]),m=ve(function(w){n.current=null;const T=document.activeElement;T&&T.getAttribute(pa.draggableId)===w&&(n.current=w)},[]);return kn(()=>(o.current=!0,function(){o.current=!1;const w=r.current;w&&cancelAnimationFrame(w)}),[]),ze(()=>({register:a,tryRecordFocus:m,tryRestoreFocusRecorded:f,tryShiftRecord:h}),[a,m,f,h])}function g2(){const t={draggables:{},droppables:{}},e=[];function n(_){return e.push(_),function(){const T=e.indexOf(_);T!==-1&&e.splice(T,1)}}function r(_){e.length&&e.forEach(w=>w(_))}function o(_){return t.draggables[_]||null}function a(_){const w=o(_);return w||ae(),w}const u={register:_=>{t.draggables[_.descriptor.id]=_,r({type:"ADDITION",value:_})},update:(_,w)=>{const T=t.draggables[w.descriptor.id];T&&T.uniqueId===_.uniqueId&&(delete t.draggables[w.descriptor.id],t.draggables[_.descriptor.id]=_)},unregister:_=>{const w=_.descriptor.id,T=o(w);T&&_.uniqueId===T.uniqueId&&(delete t.draggables[w],t.droppables[_.descriptor.droppableId]&&r({type:"REMOVAL",value:_}))},getById:a,findById:o,exists:_=>!!o(_),getAllByType:_=>Object.values(t.draggables).filter(w=>w.descriptor.type===_)};function h(_){return t.droppables[_]||null}function f(_){const w=h(_);return w||ae(),w}const m={register:_=>{t.droppables[_.descriptor.id]=_},unregister:_=>{const w=h(_.descriptor.id);w&&_.uniqueId===w.uniqueId&&delete t.droppables[_.descriptor.id]},getById:f,findById:h,exists:_=>!!h(_),getAllByType:_=>Object.values(t.droppables).filter(w=>w.descriptor.type===_)};function v(){t.draggables={},t.droppables={},e.length=0}return{draggable:u,droppable:m,subscribe:n,clean:v}}function y2(){const t=ze(g2,[]);return Z.useEffect(()=>function(){t.clean()},[t]),t}var $g=He.createContext(null),Fd=()=>{const t=document.body;return t||ae(),t};const v2={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},_2=t=>`rfd-announcement-${t}`;function w2(t){const e=ze(()=>_2(t),[t]),n=Z.useRef(null);return Z.useEffect(function(){const a=document.createElement("div");return n.current=a,a.id=e,a.setAttribute("aria-live","assertive"),a.setAttribute("aria-atomic","true"),Od(a.style,v2),Fd().appendChild(a),function(){setTimeout(function(){const f=Fd();f.contains(a)&&f.removeChild(a),a===n.current&&(n.current=null)})}},[e]),ve(o=>{const a=n.current;if(a){a.textContent=o;return}},[])}const E2={separator:"::"};function zg(t,e=E2){const n=He.useId();return ze(()=>`${t}${e.separator}${n}`,[e.separator,t,n])}function I2({contextId:t,uniqueId:e}){return`rfd-hidden-text-${t}-${e}`}function T2({contextId:t,text:e}){const n=zg("hidden-text",{separator:"-"}),r=ze(()=>I2({contextId:t,uniqueId:n}),[n,t]);return Z.useEffect(function(){const a=document.createElement("div");return a.id=r,a.textContent=e,a.style.display="none",Fd().appendChild(a),function(){const h=Fd();h.contains(a)&&h.removeChild(a)}},[r,e]),r}var _h=He.createContext(null);function DS(t){const e=Z.useRef(t);return Z.useEffect(()=>{e.current=t}),e}function S2(){let t=null;function e(){return!!t}function n(u){return u===t}function r(u){t&&ae();const h={abandon:u};return t=h,h}function o(){t||ae(),t=null}function a(){t&&(t.abandon(),o())}return{isClaimed:e,isActive:n,claim:r,release:o,tryAbandon:a}}function su(t){return t.phase==="IDLE"||t.phase==="DROP_ANIMATING"?!1:t.isDragging}const A2=9,b2=13,Wg=27,NS=32,C2=33,R2=34,P2=35,x2=36,k2=37,D2=38,N2=39,O2=40,L2={[b2]:!0,[A2]:!0};var OS=t=>{L2[t.keyCode]&&t.preventDefault()};const wh=(()=>{const t="visibilitychange";return typeof document>"u"?t:[t,`ms${t}`,`webkit${t}`,`moz${t}`,`o${t}`].find(r=>`on${r}`in document)||t})(),LS=0,k0=5;function M2(t,e){return Math.abs(e.x-t.x)>=k0||Math.abs(e.y-t.y)>=k0}const D0={type:"IDLE"};function V2({cancel:t,completed:e,getPhase:n,setPhase:r}){return[{eventName:"mousemove",fn:o=>{const{button:a,clientX:u,clientY:h}=o;if(a!==LS)return;const f={x:u,y:h},m=n();if(m.type==="DRAGGING"){o.preventDefault(),m.actions.move(f);return}m.type!=="PENDING"&&ae();const v=m.point;if(!M2(v,f))return;o.preventDefault();const _=m.actions.fluidLift(f);r({type:"DRAGGING",actions:_})}},{eventName:"mouseup",fn:o=>{const a=n();if(a.type!=="DRAGGING"){t();return}o.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),e()}},{eventName:"mousedown",fn:o=>{n().type==="DRAGGING"&&o.preventDefault(),t()}},{eventName:"keydown",fn:o=>{if(n().type==="PENDING"){t();return}if(o.keyCode===Wg){o.preventDefault(),t();return}OS(o)}},{eventName:"resize",fn:t},{eventName:"scroll",options:{passive:!0,capture:!1},fn:()=>{n().type==="PENDING"&&t()}},{eventName:"webkitmouseforcedown",fn:o=>{const a=n();if(a.type==="IDLE"&&ae(),a.actions.shouldRespectForcePress()){t();return}o.preventDefault()}},{eventName:wh,fn:t}]}function F2(t){const e=Z.useRef(D0),n=Z.useRef(Wi),r=ze(()=>({eventName:"mousedown",fn:function(_){if(_.defaultPrevented||_.button!==LS||_.ctrlKey||_.metaKey||_.shiftKey||_.altKey)return;const w=t.findClosestDraggableId(_);if(!w)return;const T=t.tryGetLock(w,u,{sourceEvent:_});if(!T)return;_.preventDefault();const D={x:_.clientX,y:_.clientY};n.current(),m(T,D)}}),[t]),o=ze(()=>({eventName:"webkitmouseforcewillbegin",fn:v=>{if(v.defaultPrevented)return;const _=t.findClosestDraggableId(v);if(!_)return;const w=t.findOptionsForDraggable(_);w&&(w.shouldRespectForcePress||t.canGetLock(_)&&v.preventDefault())}}),[t]),a=ve(function(){const _={passive:!1,capture:!0};n.current=Wn(window,[o,r],_)},[o,r]),u=ve(()=>{e.current.type!=="IDLE"&&(e.current=D0,n.current(),a())},[a]),h=ve(()=>{const v=e.current;u(),v.type==="DRAGGING"&&v.actions.cancel({shouldBlockNextClick:!0}),v.type==="PENDING"&&v.actions.abort()},[u]),f=ve(function(){const _={capture:!0,passive:!1},w=V2({cancel:h,completed:u,getPhase:()=>e.current,setPhase:T=>{e.current=T}});n.current=Wn(window,w,_)},[h,u]),m=ve(function(_,w){e.current.type!=="IDLE"&&ae(),e.current={type:"PENDING",point:w,actions:_},f()},[f]);kn(function(){return a(),function(){n.current()}},[a])}function U2(){}const j2={[R2]:!0,[C2]:!0,[x2]:!0,[P2]:!0};function B2(t,e){function n(){e(),t.cancel()}function r(){e(),t.drop()}return[{eventName:"keydown",fn:o=>{if(o.keyCode===Wg){o.preventDefault(),n();return}if(o.keyCode===NS){o.preventDefault(),r();return}if(o.keyCode===O2){o.preventDefault(),t.moveDown();return}if(o.keyCode===D2){o.preventDefault(),t.moveUp();return}if(o.keyCode===N2){o.preventDefault(),t.moveRight();return}if(o.keyCode===k2){o.preventDefault(),t.moveLeft();return}if(j2[o.keyCode]){o.preventDefault();return}OS(o)}},{eventName:"mousedown",fn:n},{eventName:"mouseup",fn:n},{eventName:"click",fn:n},{eventName:"touchstart",fn:n},{eventName:"resize",fn:n},{eventName:"wheel",fn:n,options:{passive:!0}},{eventName:wh,fn:n}]}function $2(t){const e=Z.useRef(U2),n=ze(()=>({eventName:"keydown",fn:function(a){if(a.defaultPrevented||a.keyCode!==NS)return;const u=t.findClosestDraggableId(a);if(!u)return;const h=t.tryGetLock(u,v,{sourceEvent:a});if(!h)return;a.preventDefault();let f=!0;const m=h.snapLift();e.current();function v(){f||ae(),f=!1,e.current(),r()}e.current=Wn(window,B2(m,v),{capture:!0,passive:!1})}}),[t]),r=ve(function(){const a={passive:!1,capture:!0};e.current=Wn(window,[n],a)},[n]);kn(function(){return r(),function(){e.current()}},[r])}const Dp={type:"IDLE"},z2=120,W2=.15;function G2({cancel:t,getPhase:e}){return[{eventName:"orientationchange",fn:t},{eventName:"resize",fn:t},{eventName:"contextmenu",fn:n=>{n.preventDefault()}},{eventName:"keydown",fn:n=>{if(e().type!=="DRAGGING"){t();return}n.keyCode===Wg&&n.preventDefault(),t()}},{eventName:wh,fn:t}]}function H2({cancel:t,completed:e,getPhase:n}){return[{eventName:"touchmove",options:{capture:!1},fn:r=>{const o=n();if(o.type!=="DRAGGING"){t();return}o.hasMoved=!0;const{clientX:a,clientY:u}=r.touches[0],h={x:a,y:u};r.preventDefault(),o.actions.move(h)}},{eventName:"touchend",fn:r=>{const o=n();if(o.type!=="DRAGGING"){t();return}r.preventDefault(),o.actions.drop({shouldBlockNextClick:!0}),e()}},{eventName:"touchcancel",fn:r=>{if(n().type!=="DRAGGING"){t();return}r.preventDefault(),t()}},{eventName:"touchforcechange",fn:r=>{const o=n();o.type==="IDLE"&&ae();const a=r.touches[0];if(!a||!(a.force>=W2))return;const h=o.actions.shouldRespectForcePress();if(o.type==="PENDING"){h&&t();return}if(h){if(o.hasMoved){r.preventDefault();return}t();return}r.preventDefault()}},{eventName:wh,fn:t}]}function q2(t){const e=Z.useRef(Dp),n=Z.useRef(Wi),r=ve(function(){return e.current},[]),o=ve(function(T){e.current=T},[]),a=ze(()=>({eventName:"touchstart",fn:function(T){if(T.defaultPrevented)return;const D=t.findClosestDraggableId(T);if(!D)return;const L=t.tryGetLock(D,h,{sourceEvent:T});if(!L)return;const x=T.touches[0],{clientX:K,clientY:q}=x,G={x:K,y:q};n.current(),_(L,G)}}),[t]),u=ve(function(){const T={capture:!0,passive:!1};n.current=Wn(window,[a],T)},[a]),h=ve(()=>{const w=e.current;w.type!=="IDLE"&&(w.type==="PENDING"&&clearTimeout(w.longPressTimerId),o(Dp),n.current(),u())},[u,o]),f=ve(()=>{const w=e.current;h(),w.type==="DRAGGING"&&w.actions.cancel({shouldBlockNextClick:!0}),w.type==="PENDING"&&w.actions.abort()},[h]),m=ve(function(){const T={capture:!0,passive:!1},D={cancel:f,completed:h,getPhase:r},L=Wn(window,H2(D),T),x=Wn(window,G2(D),T);n.current=function(){L(),x()}},[f,r,h]),v=ve(function(){const T=r();T.type!=="PENDING"&&ae();const D=T.actions.fluidLift(T.point);o({type:"DRAGGING",actions:D,hasMoved:!1})},[r,o]),_=ve(function(T,D){r().type!=="IDLE"&&ae();const L=setTimeout(v,z2);o({type:"PENDING",point:D,actions:T,longPressTimerId:L}),m()},[m,r,o,v]);kn(function(){return u(),function(){n.current();const D=r();D.type==="PENDING"&&(clearTimeout(D.longPressTimerId),o(Dp))}},[r,u,o]),kn(function(){return Wn(window,[{eventName:"touchmove",fn:()=>{},options:{capture:!1,passive:!1}}])},[])}const K2=["input","button","textarea","select","option","optgroup","video","audio"];function MS(t,e){if(e==null)return!1;if(K2.includes(e.tagName.toLowerCase()))return!0;const r=e.getAttribute("contenteditable");return r==="true"||r===""?!0:e===t?!1:MS(t,e.parentElement)}function Q2(t,e){const n=e.target;return vh(n)?MS(t,n):!1}var Y2=t=>dr(t.getBoundingClientRect()).center;function X2(t){return t instanceof kS(t).Element}const J2=(()=>{const t="matches";return typeof document>"u"?t:[t,"msMatchesSelector","webkitMatchesSelector"].find(r=>r in Element.prototype)||t})();function VS(t,e){return t==null?null:t[J2](e)?t:VS(t.parentElement,e)}function Z2(t,e){return t.closest?t.closest(e):VS(t,e)}function eF(t){return`[${pa.contextId}="${t}"]`}function tF(t,e){const n=e.target;if(!X2(n))return null;const r=eF(t),o=Z2(n,r);return!o||!vh(o)?null:o}function nF(t,e){const n=tF(t,e);return n?n.getAttribute(pa.draggableId):null}function rF(t,e){const n=`[${Em.contextId}="${t}"]`,o=xS(document,n).find(a=>a.getAttribute(Em.id)===e);return!o||!vh(o)?null:o}function iF(t){t.preventDefault()}function zc({expected:t,phase:e,isLockActive:n,shouldWarn:r}){return!(!n()||t!==e)}function FS({lockAPI:t,store:e,registry:n,draggableId:r}){if(t.isClaimed())return!1;const o=n.draggable.findById(r);return!(!o||!o.options.isEnabled||!bS(e.getState(),r))}function sF({lockAPI:t,contextId:e,store:n,registry:r,draggableId:o,forceSensorStop:a,sourceEvent:u}){if(!FS({lockAPI:t,store:n,registry:r,draggableId:o}))return null;const f=r.draggable.getById(o),m=rF(e,f.descriptor.id);if(!m||u&&!f.options.canDragInteractiveElements&&Q2(m,u))return null;const v=t.claim(a||Wi);let _="PRE_DRAG";function w(){return f.options.shouldRespectForcePress}function T(){return t.isActive(v)}function D(X,Q){zc({expected:X,phase:_,isLockActive:T,shouldWarn:!0})&&n.dispatch(Q())}const L=D.bind(null,"DRAGGING");function x(X){function Q(){t.release(),_="COMPLETED"}_!=="PRE_DRAG"&&(Q(),ae()),n.dispatch(ZM(X.liftActionArgs)),_="DRAGGING";function b(A,C={shouldBlockNextClick:!1}){if(X.cleanup(),C.shouldBlockNextClick){const k=Wn(window,[{eventName:"click",fn:iF,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(k)}Q(),n.dispatch(vS({reason:A}))}return{isActive:()=>zc({expected:"DRAGGING",phase:_,isLockActive:T,shouldWarn:!1}),shouldRespectForcePress:w,drop:A=>b("DROP",A),cancel:A=>b("CANCEL",A),...X.actions}}function K(X){const Q=Zl(A=>{L(()=>yS({client:A}))});return{...x({liftActionArgs:{id:o,clientSelection:X,movementMode:"FLUID"},cleanup:()=>Q.cancel(),actions:{move:Q}}),move:Q}}function q(){const X={moveUp:()=>L(lV),moveRight:()=>L(cV),moveDown:()=>L(uV),moveLeft:()=>L(dV)};return x({liftActionArgs:{id:o,clientSelection:Y2(m),movementMode:"SNAP"},cleanup:Wi,actions:X})}function G(){zc({expected:"PRE_DRAG",phase:_,isLockActive:T,shouldWarn:!0})&&t.release()}return{isActive:()=>zc({expected:"PRE_DRAG",phase:_,isLockActive:T,shouldWarn:!1}),shouldRespectForcePress:w,fluidLift:K,snapLift:q,abort:G}}const oF=[F2,$2,q2];function aF({contextId:t,store:e,registry:n,customSensors:r,enableDefaultSensors:o}){const a=[...o?oF:[],...r||[]],u=Z.useState(()=>S2())[0],h=ve(function(x,K){su(x)&&!su(K)&&u.tryAbandon()},[u]);kn(function(){let x=e.getState();return e.subscribe(()=>{const q=e.getState();h(x,q),x=q})},[u,e,h]),kn(()=>u.tryAbandon,[u.tryAbandon]);const f=ve(L=>FS({lockAPI:u,registry:n,store:e,draggableId:L}),[u,n,e]),m=ve((L,x,K)=>sF({lockAPI:u,registry:n,contextId:t,store:e,draggableId:L,forceSensorStop:x||null,sourceEvent:K&&K.sourceEvent?K.sourceEvent:null}),[t,u,n,e]),v=ve(L=>nF(t,L),[t]),_=ve(L=>{const x=n.draggable.findById(L);return x?x.options:null},[n.draggable]),w=ve(function(){u.isClaimed()&&(u.tryAbandon(),e.getState().phase!=="IDLE"&&e.dispatch(Lg()))},[u,e]),T=ve(()=>u.isClaimed(),[u]),D=ze(()=>({canGetLock:f,tryGetLock:m,findClosestDraggableId:v,findOptionsForDraggable:_,tryReleaseLock:w,isLockClaimed:T}),[f,m,v,_,w,T]);for(let L=0;L<a.length;L++)a[L](D)}const lF=t=>({onBeforeCapture:e=>{const n=()=>{t.onBeforeCapture&&t.onBeforeCapture(e)};Tg.flushSync(n)},onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragEnd:t.onDragEnd,onDragUpdate:t.onDragUpdate}),uF=t=>({...iu,...t.autoScrollerOptions,durationDampening:{...iu.durationDampening,...t.autoScrollerOptions}});function Tl(t){return t.current||ae(),t.current}function cF(t){const{contextId:e,setCallbacks:n,sensors:r,nonce:o,dragHandleUsageInstructions:a}=t,u=Z.useRef(null),h=DS(t),f=ve(()=>lF(h.current),[h]),m=ve(()=>uF(h.current),[h]),v=w2(e),_=T2({contextId:e,text:a}),w=f2(e,o),T=ve(k=>{Tl(u).dispatch(k)},[]),D=ze(()=>i0({publishWhileDragging:tV,updateDroppableScroll:rV,updateDroppableIsEnabled:iV,updateDroppableIsCombineEnabled:sV,collectionStarting:nV},T),[T]),L=y2(),x=ze(()=>GV(L,D),[L,D]),K=ze(()=>l2({scrollWindow:HV,scrollDroppable:x.scrollDroppable,getAutoScrollerOptions:m,...i0({move:yS},T)}),[x.scrollDroppable,T,m]),q=m2(e),G=ze(()=>BV({announce:v,autoScroller:K,dimensionMarshal:x,focusMarshal:q,getResponders:f,styleMarshal:w}),[v,K,x,q,f,w]);u.current=G;const z=ve(()=>{const k=Tl(u);k.getState().phase!=="IDLE"&&k.dispatch(Lg())},[]),X=ve(()=>{const k=Tl(u).getState();return k.phase==="DROP_ANIMATING"?!0:k.phase==="IDLE"?!1:k.isDragging},[]),Q=ze(()=>({isDragging:X,tryAbort:z}),[X,z]);n(Q);const b=ve(k=>bS(Tl(u).getState(),k),[]),A=ve(()=>Ds(Tl(u).getState()),[]),C=ze(()=>({marshal:x,focus:q,contextId:e,canLift:b,isMovementAllowed:A,dragHandleUsageInstructionsId:_,registry:L}),[e,x,_,q,b,A,L]);return aF({contextId:e,store:G,registry:L,customSensors:r||null,enableDefaultSensors:t.enableDefaultSensors!==!1}),Z.useEffect(()=>z,[z]),He.createElement(_h.Provider,{value:C},He.createElement(LL,{context:$g,store:G},t.children))}function dF(){return He.useId()}function hF(t){const e=dF(),n=t.dragHandleUsageInstructions||od.dragHandleUsageInstructions;return He.createElement($L,null,r=>He.createElement(cF,{nonce:t.nonce,contextId:e,setCallbacks:r,dragHandleUsageInstructions:n,enableDefaultSensors:t.enableDefaultSensors,sensors:t.sensors,onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragUpdate:t.onDragUpdate,onDragEnd:t.onDragEnd,autoScrollerOptions:t.autoScrollerOptions},t.children))}const N0={dragging:5e3,dropAnimating:4500},fF=(t,e)=>e?Fl.drop(e.duration):t?Fl.snap:Fl.fluid,pF=(t,e)=>{if(t)return e?ru.opacity.drop:ru.opacity.combining},mF=t=>t.forceShouldAnimate!=null?t.forceShouldAnimate:t.mode==="SNAP";function gF(t){const n=t.dimension.client,{offset:r,combineWith:o,dropping:a}=t,u=!!o,h=mF(t),f=!!a,m=f?_m.drop(r,u):_m.moveTo(r);return{position:"fixed",top:n.marginBox.top,left:n.marginBox.left,boxSizing:"border-box",width:n.borderBox.width,height:n.borderBox.height,transition:fF(h,a),transform:m,opacity:pF(u,f),zIndex:f?N0.dropAnimating:N0.dragging,pointerEvents:"none"}}function yF(t){return{transform:_m.moveTo(t.offset),transition:t.shouldAnimateDisplacement?void 0:"none"}}function vF(t){return t.type==="DRAGGING"?gF(t):yF(t)}function _F(t,e,n=Ft){const r=window.getComputedStyle(e),o=e.getBoundingClientRect(),a=GT(o,r),u=Nd(a,n),h={client:a,tagName:e.tagName.toLowerCase(),display:r.display},f={x:a.marginBox.width,y:a.marginBox.height};return{descriptor:t,placeholder:h,displaceBy:f,client:a,page:u}}function wF(t){const e=zg("draggable"),{descriptor:n,registry:r,getDraggableRef:o,canDragInteractiveElements:a,shouldRespectForcePress:u,isEnabled:h}=t,f=ze(()=>({canDragInteractiveElements:a,shouldRespectForcePress:u,isEnabled:h}),[a,h,u]),m=ve(T=>{const D=o();return D||ae(),_F(n,D,T)},[n,o]),v=ze(()=>({uniqueId:e,descriptor:n,options:f,getDimension:m}),[n,m,f,e]),_=Z.useRef(v),w=Z.useRef(!0);kn(()=>(r.draggable.register(_.current),()=>r.draggable.unregister(_.current)),[r.draggable]),kn(()=>{if(w.current){w.current=!1;return}const T=_.current;_.current=v,r.draggable.update(v,T)},[v,r.draggable])}var Gg=He.createContext(null);function Ud(t){const e=Z.useContext(t);return e||ae(),e}function EF(t){t.preventDefault()}const IF=t=>{const e=Z.useRef(null),n=ve((Q=null)=>{e.current=Q},[]),r=ve(()=>e.current,[]),{contextId:o,dragHandleUsageInstructionsId:a,registry:u}=Ud(_h),{type:h,droppableId:f}=Ud(Gg),m=ze(()=>({id:t.draggableId,index:t.index,type:h,droppableId:f}),[t.draggableId,t.index,h,f]),{children:v,draggableId:_,isEnabled:w,shouldRespectForcePress:T,canDragInteractiveElements:D,isClone:L,mapped:x,dropAnimationFinished:K}=t;if(!L){const Q=ze(()=>({descriptor:m,registry:u,getDraggableRef:r,canDragInteractiveElements:D,shouldRespectForcePress:T,isEnabled:w}),[m,u,r,D,T,w]);wF(Q)}const q=ze(()=>w?{tabIndex:0,role:"button","aria-describedby":a,"data-rfd-drag-handle-draggable-id":_,"data-rfd-drag-handle-context-id":o,draggable:!1,onDragStart:EF}:null,[o,a,_,w]),G=ve(Q=>{x.type==="DRAGGING"&&x.dropping&&Q.propertyName==="transform"&&Tg.flushSync(K)},[K,x]),z=ze(()=>{const Q=vF(x),b=x.type==="DRAGGING"&&x.dropping?G:void 0;return{innerRef:n,draggableProps:{"data-rfd-draggable-context-id":o,"data-rfd-draggable-id":_,style:Q,onTransitionEnd:b},dragHandleProps:q}},[o,q,_,x,G,n]),X=ze(()=>({draggableId:m.id,type:m.type,source:{index:m.index,droppableId:m.droppableId}}),[m.droppableId,m.id,m.index,m.type]);return He.createElement(He.Fragment,null,v(z,x.snapshot,X))};var US=(t,e)=>t===e,jS=t=>{const{combine:e,destination:n}=t;return n?n.droppableId:e?e.droppableId:null};const TF=t=>t.combine?t.combine.draggableId:null,SF=t=>t.at&&t.at.type==="COMBINE"?t.at.combine.draggableId:null;function AF(){const t=Vt((o,a)=>({x:o,y:a})),e=Vt((o,a,u=null,h=null,f=null)=>({isDragging:!0,isClone:a,isDropAnimating:!!f,dropAnimation:f,mode:o,draggingOver:u,combineWith:h,combineTargetFor:null})),n=Vt((o,a,u,h,f=null,m=null,v=null)=>({mapped:{type:"DRAGGING",dropping:null,draggingOver:f,combineWith:m,mode:a,offset:o,dimension:u,forceShouldAnimate:v,snapshot:e(a,h,f,m,null)}}));return(o,a)=>{if(su(o)){if(o.critical.draggable.id!==a.draggableId)return null;const u=o.current.client.offset,h=o.dimensions.draggables[a.draggableId],f=xn(o.impact),m=SF(o.impact),v=o.forceShouldAnimate;return n(t(u.x,u.y),o.movementMode,h,a.isClone,f,m,v)}if(o.phase==="DROP_ANIMATING"){const u=o.completed;if(u.result.draggableId!==a.draggableId)return null;const h=a.isClone,f=o.dimensions.draggables[a.draggableId],m=u.result,v=m.mode,_=jS(m),w=TF(m),D={duration:o.dropDuration,curve:Vg.drop,moveTo:o.newHomeClientOffset,opacity:w?ru.opacity.drop:null,scale:w?ru.scale.drop:null};return{mapped:{type:"DRAGGING",offset:o.newHomeClientOffset,dimension:f,dropping:D,draggingOver:_,combineWith:w,mode:v,forceShouldAnimate:null,snapshot:e(v,h,_,w,D)}}}return null}}function BS(t=null){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:t,combineWith:null}}const bF={mapped:{type:"SECONDARY",offset:Ft,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:BS(null)}};function CF(){const t=Vt((u,h)=>({x:u,y:h})),e=Vt(BS),n=Vt((u,h=null,f)=>({mapped:{type:"SECONDARY",offset:u,combineTargetFor:h,shouldAnimateDisplacement:f,snapshot:e(h)}})),r=u=>u?n(Ft,u,!0):null,o=(u,h,f,m)=>{const v=f.displaced.visible[u],_=!!(m.inVirtualList&&m.effected[u]),w=mh(f),T=w&&w.draggableId===u?h:null;if(!v){if(!_)return r(T);if(f.displaced.invisible[u])return null;const x=Ta(m.displacedBy.point),K=t(x.x,x.y);return n(K,T,!0)}if(_)return r(T);const D=f.displacedBy.point,L=t(D.x,D.y);return n(L,T,v.shouldAnimate)};return(u,h)=>{if(su(u))return u.critical.draggable.id===h.draggableId?null:o(h.draggableId,u.critical.draggable.id,u.impact,u.afterCritical);if(u.phase==="DROP_ANIMATING"){const f=u.completed;return f.result.draggableId===h.draggableId?null:o(h.draggableId,f.result.draggableId,f.impact,f.afterCritical)}return null}}const RF=()=>{const t=AF(),e=CF();return(r,o)=>t(r,o)||e(r,o)||bF},PF={dropAnimationFinished:_S},xF=WT(RF,PF,null,{context:$g,areStatePropsEqual:US})(IF);function $S(t){return Ud(Gg).isUsingCloneFor===t.draggableId&&!t.isClone?null:He.createElement(xF,t)}function kF(t){const e=typeof t.isDragDisabled=="boolean"?!t.isDragDisabled:!0,n=!!t.disableInteractiveElementBlocking,r=!!t.shouldRespectForcePress;return He.createElement($S,Od({},t,{isClone:!1,isEnabled:e,canDragInteractiveElements:n,shouldRespectForcePress:r}))}const zS=t=>e=>t===e,DF=zS("scroll"),NF=zS("auto"),O0=(t,e)=>e(t.overflowX)||e(t.overflowY),OF=t=>{const e=window.getComputedStyle(t),n={overflowX:e.overflowX,overflowY:e.overflowY};return O0(n,DF)||O0(n,NF)},LF=()=>!1,WS=t=>t==null?null:t===document.body?LF()?t:null:t===document.documentElement?null:OF(t)?t:WS(t.parentElement);var Im=t=>({x:t.scrollLeft,y:t.scrollTop});const GS=t=>t?window.getComputedStyle(t).position==="fixed"?!0:GS(t.parentElement):!1;var MF=t=>{const e=WS(t),n=GS(t);return{closestScrollable:e,isFixedOnPage:n}},VF=({descriptor:t,isEnabled:e,isCombineEnabled:n,isFixedOnPage:r,direction:o,client:a,page:u,closest:h})=>{const f=(()=>{if(!h)return null;const{scrollSize:w,client:T}=h,D=TS({scrollHeight:w.scrollHeight,scrollWidth:w.scrollWidth,height:T.paddingBox.height,width:T.paddingBox.width});return{pageMarginBox:h.page.marginBox,frameClient:T,scrollSize:w,shouldClipSubject:h.shouldClipSubject,scroll:{initial:h.scroll,current:h.scroll,max:D,diff:{value:Ft,displacement:Ft}}}})(),m=o==="vertical"?xg:nS,v=ha({page:u,withPlaceholder:null,axis:m,frame:f});return{descriptor:t,isCombineEnabled:n,isFixedOnPage:r,axis:m,isEnabled:e,client:a,page:u,frame:f,subject:v}};const FF=(t,e)=>{const n=HT(t);if(!e||t!==e)return n;const r=n.paddingBox.top-e.scrollTop,o=n.paddingBox.left-e.scrollLeft,a=r+e.scrollHeight,u=o+e.scrollWidth,f=bg({top:r,right:u,bottom:a,left:o},n.border);return Cg({borderBox:f,margin:n.margin,border:n.border,padding:n.padding})};var UF=({ref:t,descriptor:e,env:n,windowScroll:r,direction:o,isDropDisabled:a,isCombineEnabled:u,shouldClipSubject:h})=>{const f=n.closestScrollable,m=FF(t,f),v=Nd(m,r),_=(()=>{if(!f)return null;const T=HT(f),D={scrollHeight:f.scrollHeight,scrollWidth:f.scrollWidth};return{client:T,page:Nd(T,r),scroll:Im(f),scrollSize:D,shouldClipSubject:h}})();return VF({descriptor:e,isEnabled:!a,isCombineEnabled:u,isFixedOnPage:n.isFixedOnPage,direction:o,client:m,page:v,closest:_})};const jF={passive:!1},BF={passive:!0};var L0=t=>t.shouldPublishImmediately?jF:BF;const Wc=t=>t&&t.env.closestScrollable||null;function $F(t){const e=Z.useRef(null),n=Ud(_h),r=zg("droppable"),{registry:o,marshal:a}=n,u=DS(t),h=ze(()=>({id:t.droppableId,type:t.type,mode:t.mode}),[t.droppableId,t.mode,t.type]),f=Z.useRef(h),m=ze(()=>Vt((z,X)=>{e.current||ae();const Q={x:z,y:X};a.updateDroppableScroll(h.id,Q)}),[h.id,a]),v=ve(()=>{const z=e.current;return!z||!z.env.closestScrollable?Ft:Im(z.env.closestScrollable)},[]),_=ve(()=>{const z=v();m(z.x,z.y)},[v,m]),w=ze(()=>Zl(_),[_]),T=ve(()=>{const z=e.current,X=Wc(z);if(z&&X||ae(),z.scrollOptions.shouldPublishImmediately){_();return}w()},[w,_]),D=ve((z,X)=>{e.current&&ae();const Q=u.current,b=Q.getDroppableRef();b||ae();const A=MF(b),C={ref:b,descriptor:h,env:A,scrollOptions:X};e.current=C;const k=UF({ref:b,descriptor:h,env:A,windowScroll:z,direction:Q.direction,isDropDisabled:Q.isDropDisabled,isCombineEnabled:Q.isCombineEnabled,shouldClipSubject:!Q.ignoreContainerClipping}),N=A.closestScrollable;return N&&(N.setAttribute(P0.contextId,n.contextId),N.addEventListener("scroll",T,L0(C.scrollOptions))),k},[n.contextId,h,T,u]),L=ve(()=>{const z=e.current,X=Wc(z);return z&&X||ae(),Im(X)},[]),x=ve(()=>{const z=e.current;z||ae();const X=Wc(z);e.current=null,X&&(w.cancel(),X.removeAttribute(P0.contextId),X.removeEventListener("scroll",T,L0(z.scrollOptions)))},[T,w]),K=ve(z=>{const X=e.current;X||ae();const Q=Wc(X);Q||ae(),Q.scrollTop+=z.y,Q.scrollLeft+=z.x},[]),q=ze(()=>({getDimensionAndWatchScroll:D,getScrollWhileDragging:L,dragStopped:x,scroll:K}),[x,D,L,K]),G=ze(()=>({uniqueId:r,descriptor:h,callbacks:q}),[q,h,r]);kn(()=>(f.current=G.descriptor,o.droppable.register(G),()=>{e.current&&x(),o.droppable.unregister(G)}),[q,h,x,G,a,o.droppable]),kn(()=>{e.current&&a.updateDroppableIsEnabled(f.current.id,!t.isDropDisabled)},[t.isDropDisabled,a]),kn(()=>{e.current&&a.updateDroppableIsCombineEnabled(f.current.id,t.isCombineEnabled)},[t.isCombineEnabled,a])}function Np(){}const M0={width:0,height:0,margin:QL},zF=({isAnimatingOpenOnMount:t,placeholder:e,animate:n})=>t||n==="close"?M0:{height:e.client.borderBox.height,width:e.client.borderBox.width,margin:e.client.margin},WF=({isAnimatingOpenOnMount:t,placeholder:e,animate:n})=>{const r=zF({isAnimatingOpenOnMount:t,placeholder:e,animate:n});return{display:e.display,boxSizing:"border-box",width:r.width,height:r.height,marginTop:r.margin.top,marginRight:r.margin.right,marginBottom:r.margin.bottom,marginLeft:r.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:n!=="none"?Fl.placeholder:null}},GF=t=>{const e=Z.useRef(null),n=ve(()=>{e.current&&(clearTimeout(e.current),e.current=null)},[]),{animate:r,onTransitionEnd:o,onClose:a,contextId:u}=t,[h,f]=Z.useState(t.animate==="open");Z.useEffect(()=>h?r!=="open"?(n(),f(!1),Np):e.current?Np:(e.current=setTimeout(()=>{e.current=null,f(!1)}),n):Np,[r,h,n]);const m=ve(_=>{_.propertyName==="height"&&(o(),r==="close"&&a())},[r,a,o]),v=WF({isAnimatingOpenOnMount:h,animate:t.animate,placeholder:t.placeholder});return He.createElement(t.placeholder.tagName,{style:v,"data-rfd-placeholder-context-id":u,onTransitionEnd:m,ref:t.innerRef})};var HF=He.memo(GF);class qF extends He.PureComponent{constructor(...e){super(...e),this.state={isVisible:!!this.props.on,data:this.props.on,animate:this.props.shouldAnimate&&this.props.on?"open":"none"},this.onClose=()=>{this.state.animate==="close"&&this.setState({isVisible:!1})}}static getDerivedStateFromProps(e,n){return e.shouldAnimate?e.on?{isVisible:!0,data:e.on,animate:"open"}:n.isVisible?{isVisible:!0,data:n.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!e.on,data:e.on,animate:"none"}}render(){if(!this.state.isVisible)return null;const e={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(e)}}const KF=t=>{const e=Z.useContext(_h);e||ae();const{contextId:n,isMovementAllowed:r}=e,o=Z.useRef(null),a=Z.useRef(null),{children:u,droppableId:h,type:f,mode:m,direction:v,ignoreContainerClipping:_,isDropDisabled:w,isCombineEnabled:T,snapshot:D,useClone:L,updateViewportMaxScroll:x,getContainerForClone:K}=t,q=ve(()=>o.current,[]),G=ve((N=null)=>{o.current=N},[]);ve(()=>a.current,[]);const z=ve((N=null)=>{a.current=N},[]),X=ve(()=>{r()&&x({maxScroll:AS()})},[r,x]);$F({droppableId:h,type:f,mode:m,direction:v,isDropDisabled:w,isCombineEnabled:T,ignoreContainerClipping:_,getDroppableRef:q});const Q=ze(()=>He.createElement(qF,{on:t.placeholder,shouldAnimate:t.shouldAnimatePlaceholder},({onClose:N,data:V,animate:P})=>He.createElement(HF,{placeholder:V,onClose:N,innerRef:z,animate:P,contextId:n,onTransitionEnd:X})),[n,X,t.placeholder,t.shouldAnimatePlaceholder,z]),b=ze(()=>({innerRef:G,placeholder:Q,droppableProps:{"data-rfd-droppable-id":h,"data-rfd-droppable-context-id":n}}),[n,h,Q,G]),A=L?L.dragging.draggableId:null,C=ze(()=>({droppableId:h,type:f,isUsingCloneFor:A}),[h,A,f]);function k(){if(!L)return null;const{dragging:N,render:V}=L,P=He.createElement($S,{draggableId:N.draggableId,index:N.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},(Ze,Ye)=>V(Ze,Ye,N));return MO.createPortal(P,K())}return He.createElement(Gg.Provider,{value:C},u(b,D),k())};function QF(){return document.body||ae(),document.body}const V0={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:QF},HS=t=>{let e={...t},n;for(n in V0)t[n]===void 0&&(e={...e,[n]:V0[n]});return e},Op=(t,e)=>t===e.droppable.type,F0=(t,e)=>e.draggables[t.draggable.id],YF=()=>{const t={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},e={...t,shouldAnimatePlaceholder:!1},n=Vt(a=>({draggableId:a.id,type:a.type,source:{index:a.index,droppableId:a.droppableId}})),r=Vt((a,u,h,f,m,v)=>{const _=m.descriptor.id;if(m.descriptor.droppableId===a){const D=v?{render:v,dragging:n(m.descriptor)}:null,L={isDraggingOver:h,draggingOverWith:h?_:null,draggingFromThisWith:_,isUsingPlaceholder:!0};return{placeholder:m.placeholder,shouldAnimatePlaceholder:!1,snapshot:L,useClone:D}}if(!u)return e;if(!f)return t;const T={isDraggingOver:h,draggingOverWith:_,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:m.placeholder,shouldAnimatePlaceholder:!0,snapshot:T,useClone:null}});return(a,u)=>{const h=HS(u),f=h.droppableId,m=h.type,v=!h.isDropDisabled,_=h.renderClone;if(su(a)){const w=a.critical;if(!Op(m,w))return e;const T=F0(w,a.dimensions),D=xn(a.impact)===f;return r(f,v,D,D,T,_)}if(a.phase==="DROP_ANIMATING"){const w=a.completed;if(!Op(m,w.critical))return e;const T=F0(w.critical,a.dimensions);return r(f,v,jS(w.result)===f,xn(w.impact)===f,T,_)}if(a.phase==="IDLE"&&a.completed&&!a.shouldFlush){const w=a.completed;if(!Op(m,w.critical))return e;const T=xn(w.impact)===f,D=!!(w.impact.at&&w.impact.at.type==="COMBINE"),L=w.critical.droppable.id===f;return T?D?t:e:L?t:e}return e}},XF={updateViewportMaxScroll:aV},JF=WT(YF,XF,(t,e,n)=>({...HS(n),...t,...e}),{context:$g,areStatePropsEqual:US})(KF),U0=te.div`
  width: 100%;
`,ZF=te.div`
  position: absolute;
  width: 400px;
  z-index: 999;
`,e4=te.h1`
  font-size: 24px;
  margin-bottom: 16px;
  font-weight: 600;
`,t4=te.form`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  padding: 24px;
  width: 100%;
  max-width: 500px;
`,Sl=te.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
`,j0=te.input`
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
`,n4=te.textarea`
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
`,B0=te.select`
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  margin-bottom: 16px;
`,r4=te.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
`,$o=te.option``,i4=te.button`
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
`,s4=te.button`
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
`,o4=te.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 0;
`,$0=te.div`
  position: absolute;
  width: 20px;
  height: 3px;
  background-color: ${ra.colors.lightText};
  border-radius: 1px;

  &:nth-child(1) {
    transform: rotate(45deg);
  }

  &:nth-child(2) {
    transform: rotate(-45deg);
  }
`,Hg=({onClick:t})=>U.jsxs(o4,{type:"button",onClick:t,"aria-label":"Close",children:[U.jsx($0,{}),U.jsx($0,{})]});Hg.propTypes={onClick:Zr.func.isRequired};const a4=({setNewTaskIsOpen:t,onSubmit:e,newProjectFormData:{formTitle:n,taskTitle:r,description:o,level:a,status:u,attachFiles:h,addTask:f}})=>{const[m,v]=Z.useState({content:"",description:"",level:"",status:""}),_=w=>{w.preventDefault(),e(m)};return U.jsx(ZF,{children:U.jsxs(t4,{onSubmit:_,children:[U.jsx(Hg,{onClick:()=>t(!1)}),U.jsx(e4,{children:n}),U.jsx(Sl,{children:r}),U.jsx(j0,{value:m.content,type:"text",placeholder:"e.g. Brainstorming Session",onChange:w=>v(T=>({...T,content:w.target.value}))}),U.jsx(Sl,{children:o}),U.jsx(n4,{value:m.description,placeholder:"What needs to be done?",onChange:w=>v(T=>({...T,description:w.target.value}))}),U.jsxs(r4,{children:[U.jsxs(U0,{children:[U.jsx(Sl,{children:a}),U.jsxs(B0,{value:m.level,onChange:w=>v(T=>({...T,level:w.target.value})),children:[U.jsx($o,{children:"Low"}),U.jsx($o,{children:"Medium"}),U.jsx($o,{children:"Hight"})]})]}),U.jsxs(U0,{children:[U.jsx(Sl,{children:u}),U.jsxs(B0,{value:m.status,onChange:w=>v(T=>({...T,status:w.target.value})),children:[U.jsx($o,{children:"To Do"}),U.jsx($o,{children:"In Progress"}),U.jsx($o,{children:"Done"})]})]})]}),U.jsxs(Sl,{htmlFor:"fileUpload",children:[h," "]}),U.jsxs(i4,{children:[U.jsx("span",{children:"📎"})," Attach Files"]}),U.jsx(j0,{id:"fileUpload",type:"file",multiple:!0,style:{display:"none"}}),U.jsx(s4,{type:"submit",children:f})]})})},l4=async({collectionName:t,docId:e,updatedData:n})=>{try{const r=ch(fh,t,e);await Eg(r,n),console.log(`✅ Документ у '${t}' оновлено (ID: ${e})`)}catch(r){throw console.error("❌ Помилка при оновленні документа:",r),r}},z0=async({projectId:t,updatedStartColumn:e,updatedFinishColumn:n})=>{try{const r=ch(fh,"projects",t);await Eg(r,{[`columns.${e.id}.taskIds`]:e.taskIds,[`columns.${n.id}.taskIds`]:n.taskIds}),console.log("✅ Task order updated in Firestore")}catch(r){console.error("❌ Error updating task order:",r)}},u4=async({collectionName:t,docId:e})=>{try{const n=ch(fh,t,e),r=await ZN(n);return r.exists()?(console.log(`📦 Документ з '${t}' отримано (ID: ${e})`),r.data()):(console.warn(`⚠️ Документ не знайдено в '${t}' (ID: ${e})`),null)}catch(n){return console.error("❌ Помилка при отриманні документа:",n),null}},c4=()=>({deleteData:async({projectId:e,taskId:n,columnId:r,currentTaskIds:o})=>{try{const a=ch(fh,"projects",e),u=o.filter(h=>h!==n);return await Eg(a,{[`tasks.${n}`]:rO(),[`columns.${r}.taskIds`]:u}),console.log(`✅ Таска ${n} видалена з проєкту ${e}`),u}catch(a){throw console.error("❌ Помилка при видаленні таски:",a),a}}}),d4=()=>{const[t,e]=Z.useState(null),[n,r]=Z.useState(!1),[o,a]=Z.useState(null),[u,h]=Z.useState(null),{deleteData:f}=c4();Z.useEffect(()=>{if(!u)return;const G=setTimeout(()=>h(null),3e3);return()=>clearTimeout(G)},[u]);const m={formTitle:"Add Task to Project",taskTitle:"Task Title",description:"Description",level:"Priority",status:"Status",attachFiles:"Attach Files",addTask:"Add Task"},v=async()=>{const G=await u4({collectionName:"projects",docId:"project-1"});e(G),console.log("initialArray:",G)};Z.useEffect(()=>{v()},[]);const _={"To Do":"column-1","In Progress":"column-2",Done:"column-3"},w=async G=>{const z=`task-${crypto.randomUUID()}`,X=_[G.status]||"column-1",Q={id:z,...G};try{await l4({collectionName:"projects",docId:"project-1",updatedData:{[`tasks.${z}`]:Q,[`columns.${X}.taskIds`]:[...t.columns[X].taskIds,z]}}),r(!1),h({type:"success",text:"Task added successfully"})}catch(b){console.error("Failed to add task:",b),h({type:"error",text:"Failed to add task"})}finally{v()}},T=async(G,z)=>{console.log("taskId:",G,"columnId:",z);try{const X=await f({projectId:"project-1",taskId:G,columnId:z,currentTaskIds:t.columns[z].taskIds});e(Q=>{const{[G]:b,...A}=Q.tasks;return{...Q,tasks:A,columns:{...Q.columns,[z]:{...Q.columns[z],taskIds:X}}}})}catch(X){console.error("Failed to delete task:",X),h({type:"error",text:"Failed to delete task"})}},D=G=>{w(G)},L=(G,z)=>{T(G,z)},x=G=>{a(o===null?G:null)},K=(G,z,X,Q,b)=>{const A=Array.from(G.taskIds);A.splice(X,1);const C=Array.from(z.taskIds||[]);return C.splice(Q,0,b),{updatedStartColumn:{...G,taskIds:A},updatedFinishColumn:{...z,taskIds:C}}},q=async G=>{const{source:z,destination:X,draggableId:Q}=G;if(!X||z.droppableId===X.droppableId&&z.index===X.index)return;const b=t.columns[z.droppableId],A=t.columns[X.droppableId];if(b===A){const C=Array.from(b.taskIds);C.splice(z.index,1),C.splice(X.index,0,Q);const k={...b,taskIds:C};e(N=>({...N,columns:{...N.columns,[k.id]:k}})),await z0({projectId:"project-1",updatedStartColumn:k,updatedFinishColumn:k})}else{const{updatedStartColumn:C,updatedFinishColumn:k}=K(b,A,z.index,X.index,Q);e(N=>({...N,columns:{...N.columns,[C.id]:C,[k.id]:k}})),await z0({projectId:"project-1",updatedStartColumn:C,updatedFinishColumn:k})}};return U.jsxs(uO,{children:[u&&U.jsx(LO,{$type:u.type,role:"status",children:u.text}),U.jsxs(dO,{children:[n&&U.jsx(a4,{newProjectFormData:m,setNewTaskIsOpen:r,onSubmit:D}),U.jsx(hF,{onDragEnd:q,children:t&&t.columnOrder.map(G=>{const z=t.columns[G],X=z.taskIds.map(Q=>t.tasks[Q]);return U.jsxs(hO,{$column:z,$tasks:X,children:[U.jsxs(fO,{$lineColor:z.lineColor,children:[U.jsxs(pO,{$lineColor:z.lineColor,children:[z.title,U.jsx(mO,{"aria-label":"State Project",children:z.taskIds.length})]}),z.id==="column-1"&&U.jsx(gO,{"aria-haspopup":"dialog","aria-controls":"new-project-popup","aria-label":"Create new project",children:U.jsx(yO,{onClick:()=>r(!0),src:"icon/add-square_icon.svg","aria-hidden":"true"})})]}),U.jsx(JF,{droppableId:z.id,children:Q=>U.jsxs(vO,{ref:Q.innerRef,...Q.droppableProps,children:[X.map((b,A)=>U.jsx(kF,{draggableId:b.id,index:A,children:C=>U.jsxs(_O,{...C.draggableProps,...C.dragHandleProps,ref:C.innerRef,children:[U.jsxs(wO,{children:[U.jsx(EO,{"aria-label":"Project level",$levelColor:b.levelColor,$levelBg:b.levelBackgroundColor,children:b.level}),U.jsx(IO,{role:"button",onClick:()=>x(b.id),children:U.jsx(SO,{src:"icon/dots_icon.svg",alt:"Menu"})}),U.jsxs(TO,{$taskMenuIsOpen:o,$taskId:b.id,children:[U.jsxs(_p,{children:[U.jsx(wp,{src:"./public/icon/pen_icon.png"}),"Edit Task"]}),U.jsxs(_p,{onClick:()=>L(b.id,G),children:[U.jsx(wp,{src:"./public/icon/delete_icon.png"}),"Delete Task"]}),U.jsxs(_p,{children:[U.jsx(wp,{src:"./public/icon/right-arrow_icon.png"}),"Move to Column"]})]})]}),U.jsxs(AO,{children:[U.jsx(bO,{children:b.content}),b!=null&&b.image?U.jsx(cO,{children:U.jsx(RO,{src:b.image,alt:b.content||"Project image"})}):U.jsx(CO,{children:b.description||"No Description Available"})]}),U.jsxs(PO,{children:[U.jsx(xO,{children:U.jsx("img",{src:"image/Group 633.png",alt:"Persons"})}),U.jsxs(kO,{children:[U.jsxs(DO,{children:[U.jsx("img",{src:"icon/comments_icon.svg",alt:"Comments"}),"10 comments"]}),U.jsxs(NO,{children:[U.jsx("img",{src:"icon/folder_icon.svg",alt:"Folder"}),"3 files"]})]})]})]})},b.id)),Q.placeholder,z.taskIds.length===0&&U.jsx(OO,{style:{textAlign:"center",color:"#aaa"},children:"Drop tasks here"})]})})]},z.id)})})]})]})},h4=()=>U.jsx(lO,{children:U.jsx(d4,{})}),f4=te.main`
  display: flex;
  justify-content: center;
  margin-top: ${({theme:t})=>t.headerSize.desktopHeight};

  @media (max-width: ${({theme:t})=>t.mobile}) {
    margin-top: ${({theme:t})=>t.headerSize.mobileHeight};
  }

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-top: ${({theme:t})=>t.headerSize.tabletHeight};
  }
`,p4=te.div`
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
`,qS=({isSidebarOpen:t})=>U.jsx(f4,{children:U.jsx(lC,{children:U.jsx(p4,{$isSidebarOpen:t,children:U.jsx(h4,{})})})});qS.propTypes={isSidebarOpen:Zr.bool.isRequired,sidebarRef:Zr.any};const m4=t=>{const[e,n]=Z.useState(!1),r=Z.useCallback(()=>{n(window.innerWidth<=t)},[t]);return Z.useEffect(()=>{if(typeof window>"u")return;let o;const a=()=>{clearTimeout(o),o=setTimeout(r,0)};return window.addEventListener("resize",a),r(),()=>{window.removeEventListener("resize",a)}},[r]),e},g4=(t=!1)=>{const e=m4(700),[n,r]=Z.useState(e?!1:t),o=()=>r(a=>!a);return Z.useEffect(()=>{r(!e)},[e]),[n,o,e]};function y4(t){const[e,n]=Z.useState(!1);return Z.useEffect(()=>{function r(o){const a=t.every(u=>u.current&&!u.current.contains(o.target));n(a)}return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[t]),e}const v4=()=>{const{setIsLoggedIn:t,mode:e,setMode:n,setShowLoginForm:r,setLoggedUser:o}=Z.useContext(ga),[a,u]=Z.useState({email:"",password:"",confirmPassword:""}),[h,f]=Z.useState("");Z.useEffect(()=>{const w=TP(sd,T=>{T?(o(T),t(!0)):(o(null),t(!1))});return()=>w()},[]);const m=()=>{n(w=>w==="login"?"register":"login")},v=w=>{if(w.preventDefault(),e==="register"&&a.password!==a.confirmPassword){f("Passwords do not match"),setTimeout(()=>f(""),5e3);return}switch(e){case"login":wP(sd,a.email,a.password).then(()=>{t(!0),r(!1)}).catch(T=>{console.log(T),t(!1),f("User not defined")}).finally(()=>{setTimeout(()=>f(""),5e3)});break;case"register":_P(sd,a.email,a.password).then(()=>{t(!0),r(!1)}).catch(T=>f(T.message));break}},_=w=>{const{name:T,value:D}=w.target;u(L=>({...L,[T]:D}))};return U.jsx(OC,{children:U.jsxs(LC,{onSubmit:v,children:[U.jsx(jC,{children:U.jsx(Hg,{onClick:()=>r(!1)})}),U.jsx(MC,{children:e==="login"?"Login":"Register"}),U.jsxs(C_,{children:["To log in, use the email: ",U.jsx("br",{})," ",U.jsx("span",{children:"projectm@example.com"})," ",U.jsx("br",{})," and password: ",U.jsx("br",{}),U.jsx("span",{children:"123456"})]}),h&&U.jsx(C_,{children:h}),U.jsx(op,{children:U.jsx(ap,{type:"email",name:"email",placeholder:"Email",value:a.email,onChange:_,required:!0})}),U.jsx(op,{children:U.jsx(ap,{type:"password",name:"password",placeholder:"Password",value:a.password,onChange:_,required:!0})}),e==="register"&&U.jsx(op,{children:U.jsx(ap,{type:"password",name:"confirmPassword",placeholder:"Confirm Password",value:a.confirmPassword,onChange:_,required:!0})}),U.jsx(xm,{type:"submit",children:e==="login"?"Sign in":"Sign up"}),U.jsxs(FC,{children:[e==="login"?"Don't have an account? ":"Already have an account? ",U.jsx(UC,{onClick:m,children:e==="login"?"Sign up":"Sign in"})]})]})})},_4=te.main`
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
`,w4=te.section`
  display: flex;
  max-width: 1280px;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    display: block;
    text-align: center;
  }
`,E4=te.div`
  margin-right: 2rem;

  @media (max-width: ${({theme:t})=>t.tablet}) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`,I4=te.h1`
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 1.1;
`,T4=te.p`
  margin-bottom: 2rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.5;
`,S4=te(xm)`
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  width: 150px;
  background-color: #000000;
`,A4=te.div`
`,b4=te.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`,C4=()=>{const{showLoginForm:t,setShowLoginForm:e}=Z.useContext(ga),n=()=>{e(r=>!r)};return U.jsxs(_4,{children:[t&&U.jsx(v4,{}),U.jsxs(w4,{children:[U.jsxs(E4,{children:[U.jsx(I4,{children:"Manage your projects with ease"}),U.jsx(T4,{children:"Functional components to easily create modern UI. Enable date tracking to get an overview of project timelines."}),U.jsx(S4,{onClick:n,"aria-label":"Button for open login form",role:"Open login form",children:"Get Started"})]}),U.jsx(A4,{children:U.jsx(b4,{src:"image/Hero_img.png",alt:"Hero image"})})]})]})},R4=te.div`
  padding: 0 0 2rem 1rem;
  border-bottom: ${({theme:t})=>t.colors.borderLineColor};
`,P4=te.ul`
  display: flex;
  flex-direction: column;

  gap: 2rem;
`,x4=te.li`
  cursor: pointer;
  list-style: none;
  img {
    margin-right: 1rem;
  }
`,k4=[{id:1,name:"Home",icon:"icon/home_icon.svg"},{id:2,name:"Massages",icon:"icon/message_icon.svg"},{id:3,name:"Tasks",icon:"icon/task_icon.svg"},{id:4,name:"Members",icon:"icon/members_icon.svg"},{id:5,name:"Settings",icon:"icon/settings_icon.svg"}];function D4(){return U.jsx(R4,{children:U.jsx(P4,{children:k4.map(t=>U.jsxs(x4,{children:[U.jsx("img",{src:t.icon,alt:t.name}),U.jsx("a",{href:"#",children:U.jsx("span",{children:t.name})})]},t.id))})})}const N4=te.div`
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
`,O4=te.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  background-color: ${({theme:t})=>t.colors.secondaryLightBackground};
`,L4=te.h3`
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
`,M4=te.p`
  color: ${({theme:t})=>t.colors.lightText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  margin-bottom: 1rem;
`,V4=te.input`
  width: 10rem;
  height: 3rem;
  border-radius: 16px;
  color: ${({theme:t})=>t.colors.darkText};
  font-family: ${({theme:t})=>t.fonts.primaryFont};
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
`,F4=()=>U.jsxs(N4,{children:[U.jsx(O4,{}),U.jsx(L4,{children:"Thoughts Time"}),U.jsx(M4,{children:"We don’t have any notice for you, till then you can share your thoughts with your peers."}),U.jsx(V4,{type:"text",placeholder:"Write a message"})]}),U4=te.div`
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
`,j4=te.div`
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
`,B4=te.div`
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
`,$4=te.div`
  display: none;
`,z4=[{id:1,name:"Mobile App",description:"Description for Mobile App",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:2,name:"Website Redesign",description:"Description for Website Redesign",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:3,name:"Design System",description:"Description for Design System",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"},{id:4,name:"Wireframes",description:"Description for Wireframes",image:"https://via.placeholder.com/150",createdAt:"2023-07-10",updatedAt:"2023-07-10",status:"Active"}],W4=()=>U.jsxs(j4,{children:[U.jsxs(U4,{children:[U.jsx("h2",{children:"My projects"}),U.jsx("button",{className:"add-project",children:U.jsx("img",{src:"icon/plus_icon.svg",alt:"Add Project"})})]}),U.jsx("ul",{children:z4.map(t=>U.jsxs("li",{children:[U.jsxs(B4,{children:[U.jsxs("a",{href:"#","aria-label":"Go to project",className:"project-item",children:[U.jsx("div",{className:"project-status","aria-hidden":"true"}),U.jsx("h3",{children:t.name})]}),U.jsx("button",{children:U.jsx("img",{src:"icon/dots_icon.svg",alt:"Submenu icon"})})]}),U.jsxs($4,{children:[U.jsx("p",{children:t.description}),U.jsx("p",{children:t.createdAt}),U.jsx("p",{children:t.updatedAt}),U.jsx("p",{children:t.status})]})]},t.id))})]}),qg=Z.forwardRef(({isSidebarOpen:t},e)=>U.jsx(dC,{ref:e,$isSidebarOpen:t,children:U.jsxs(hC,{children:[U.jsx(D4,{}),U.jsx(W4,{}),U.jsx(F4,{})]})}));qg.displayName="Sidebar";qg.propTypes={isSidebarOpen:Zr.bool.isRequired,onToggleSidebar:Zr.func,sidebarRef:Zr.any};const G4=()=>{const[t,e,n]=g4(),r=Z.useRef(null),o=Z.useRef(null);y4([r,o])&&t&&n&&e();const{isLoggedIn:u}=Z.useContext(ga);return U.jsxs(iC,{theme:ra,children:[U.jsx(uC,{$isSidebarOpen:t}),U.jsx(Ig,{ref:r,onToggleSidebar:e,isSidebarOpen:t}),u?U.jsxs(U.Fragment,{children:[U.jsx(qg,{isSidebarOpen:t,ref:o}),U.jsx(qS,{isSidebarOpen:t,sidebarRef:o})]}):U.jsx(C4,{})]})},KS=({children:t})=>{const[e,n]=Z.useState(!1),[r,o]=Z.useState(!1),[a,u]=Z.useState("login"),[h,f]=Z.useState(null);return U.jsx(ga.Provider,{value:{isLoggedIn:e,setIsLoggedIn:n,showLoginForm:r,setShowLoginForm:o,mode:a,setMode:u,loggedUser:h,setLoggedUser:f},children:t})};KS.propTypes={children:Zr.node.isRequired};sb.createRoot(document.getElementById("root")).render(U.jsx(KS,{children:U.jsx(G4,{})}));
