import{r as bn,h as St,u as Vt,a as Nt,b as et,e as yt,i as zt,j as pn,c as Ie,f as R,g as gn,d as mn,k as wn}from"./Space-d1c52f14.js";import{v as jt,l as yn,c as C,a as Xt,b as W,d as h,e as X,f as Le,u as Ut,w as xn,p as _e,x as Wt,y as Cn,z as fr,A as Sn,B as ft}from"./app-1ef77e86.js";import{c as ce,w as xt,h as k,r as T,o as Rt,a as zn,n as hr,B as Tt,Y as Rn,af as Tn,ag as Pn,m as Pt,L as vr,j as c,T as Ft,H as rt,A as Ot,ac as br,ab as Bn,v as At}from"./framework-65876511.js";function kn(e){return e.composedPath()[0]||null}function ae(e,...r){if(Array.isArray(e))e.forEach(t=>ae(t,...r));else return e(...r)}const Gt=ce({render(){var e,r;return(r=(e=this.$slots).default)===null||r===void 0?void 0:r.call(e)}});function Qt(e){return e.replace(/#|\(|\)|,|\s/g,"_")}function mt(e){return e.composedPath()[0]}const En={mousemoveoutside:new WeakMap,clickoutside:new WeakMap};function Mn(e,r,t){if(e==="mousemoveoutside"){const i=o=>{r.contains(mt(o))||t(o)};return{mousemove:i,touchstart:i}}else if(e==="clickoutside"){let i=!1;const o=u=>{i=!r.contains(mt(u))},s=u=>{i&&(r.contains(mt(u))||t(u))};return{mousedown:o,mouseup:s,touchstart:o,touchend:s}}return console.error(`[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`),{}}function pr(e,r,t){const i=En[e];let o=i.get(r);o===void 0&&i.set(r,o=new WeakMap);let s=o.get(t);return s===void 0&&o.set(t,s=Mn(e,r,t)),s}function $n(e,r,t,i){if(e==="mousemoveoutside"||e==="clickoutside"){const o=pr(e,r,t);return Object.keys(o).forEach(s=>{De(s,document,o[s],i)}),!0}return!1}function _n(e,r,t,i){if(e==="mousemoveoutside"||e==="clickoutside"){const o=pr(e,r,t);return Object.keys(o).forEach(s=>{we(s,document,o[s],i)}),!0}return!1}function Dn(){if(typeof window>"u")return{on:()=>{},off:()=>{}};const e=new WeakMap,r=new WeakMap;function t(){e.set(this,!0)}function i(){e.set(this,!0),r.set(this,!0)}function o(a,f,y){const P=a[f];return a[f]=function(){return y.apply(a,arguments),P.apply(a,arguments)},a}function s(a,f){a[f]=Event.prototype[f]}const u=new WeakMap,p=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function b(){var a;return(a=u.get(this))!==null&&a!==void 0?a:null}function v(a,f){p!==void 0&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:f??p.get})}const g={bubble:{},capture:{}},w={};function $(){const a=function(f){const{type:y,eventPhase:P,bubbles:_}=f,D=mt(f);if(P===2)return;const re=P===1?"capture":"bubble";let V=D;const N=[];for(;V===null&&(V=window),N.push(V),V!==window;)V=V.parentNode||null;const K=g.capture[y],B=g.bubble[y];if(o(f,"stopPropagation",t),o(f,"stopImmediatePropagation",i),v(f,b),re==="capture"){if(K===void 0)return;for(let te=N.length-1;te>=0&&!e.has(f);--te){const le=N[te],ne=K.get(le);if(ne!==void 0){u.set(f,le);for(const ue of ne){if(r.has(f))break;ue(f)}}if(te===0&&!_&&B!==void 0){const ue=B.get(le);if(ue!==void 0)for(const ge of ue){if(r.has(f))break;ge(f)}}}}else if(re==="bubble"){if(B===void 0)return;for(let te=0;te<N.length&&!e.has(f);++te){const le=N[te],ne=B.get(le);if(ne!==void 0){u.set(f,le);for(const ue of ne){if(r.has(f))break;ue(f)}}}}s(f,"stopPropagation"),s(f,"stopImmediatePropagation"),v(f)};return a.displayName="evtdUnifiedHandler",a}function Z(){const a=function(f){const{type:y,eventPhase:P}=f;if(P!==2)return;const _=w[y];_!==void 0&&_.forEach(D=>D(f))};return a.displayName="evtdUnifiedWindowEventHandler",a}const L=$(),de=Z();function ee(a,f){const y=g[a];return y[f]===void 0&&(y[f]=new Map,window.addEventListener(f,L,a==="capture")),y[f]}function ie(a){return w[a]===void 0&&(w[a]=new Set,window.addEventListener(a,de)),w[a]}function U(a,f){let y=a.get(f);return y===void 0&&a.set(f,y=new Set),y}function q(a,f,y,P){const _=g[f][y];if(_!==void 0){const D=_.get(a);if(D!==void 0&&D.has(P))return!0}return!1}function S(a,f){const y=w[a];return!!(y!==void 0&&y.has(f))}function E(a,f,y,P){let _;if(typeof P=="object"&&P.once===!0?_=K=>{F(a,f,_,P),y(K)}:_=y,$n(a,f,_,P))return;const re=P===!0||typeof P=="object"&&P.capture===!0?"capture":"bubble",V=ee(re,a),N=U(V,f);if(N.has(_)||N.add(_),f===window){const K=ie(a);K.has(_)||K.add(_)}}function F(a,f,y,P){if(_n(a,f,y,P))return;const D=P===!0||typeof P=="object"&&P.capture===!0,re=D?"capture":"bubble",V=ee(re,a),N=U(V,f);if(f===window&&!q(f,D?"bubble":"capture",a,y)&&S(a,y)){const B=w[a];B.delete(y),B.size===0&&(window.removeEventListener(a,de),w[a]=void 0)}N.has(y)&&N.delete(y),N.size===0&&V.delete(f),V.size===0&&(window.removeEventListener(a,L,re==="capture"),g[re][a]=void 0)}return{on:E,off:F}}const{on:De,off:we}=Dn();function Wn(e,r){return xt(e,t=>{t!==void 0&&(r.value=t)}),k(()=>e.value===void 0?r.value:e.value)}function Fn(){const e=T(!1);return Rt(()=>{e.value=!0}),zn(e)}const On=(typeof window>"u"?!1:/iPad|iPhone|iPod/.test(navigator.platform)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!window.MSStream;function An(){return On}function Jt(e,r){console.error(`[vueuc/${e}]: ${r}`)}var We=[],In=function(){return We.some(function(e){return e.activeTargets.length>0})},Hn=function(){return We.some(function(e){return e.skippedTargets.length>0})},Zt="ResizeObserver loop completed with undelivered notifications.",Ln=function(){var e;typeof ErrorEvent=="function"?e=new ErrorEvent("error",{message:Zt}):(e=document.createEvent("Event"),e.initEvent("error",!1,!1),e.message=Zt),window.dispatchEvent(e)},nt;(function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"})(nt||(nt={}));var Fe=function(e){return Object.freeze(e)},Vn=function(){function e(r,t){this.inlineSize=r,this.blockSize=t,Fe(this)}return e}(),gr=function(){function e(r,t,i,o){return this.x=r,this.y=t,this.width=i,this.height=o,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Fe(this)}return e.prototype.toJSON=function(){var r=this,t=r.x,i=r.y,o=r.top,s=r.right,u=r.bottom,p=r.left,b=r.width,v=r.height;return{x:t,y:i,top:o,right:s,bottom:u,left:p,width:b,height:v}},e.fromRect=function(r){return new e(r.x,r.y,r.width,r.height)},e}(),Yt=function(e){return e instanceof SVGElement&&"getBBox"in e},mr=function(e){if(Yt(e)){var r=e.getBBox(),t=r.width,i=r.height;return!t&&!i}var o=e,s=o.offsetWidth,u=o.offsetHeight;return!(s||u||e.getClientRects().length)},er=function(e){var r;if(e instanceof Element)return!0;var t=(r=e==null?void 0:e.ownerDocument)===null||r===void 0?void 0:r.defaultView;return!!(t&&e instanceof t.Element)},Nn=function(e){switch(e.tagName){case"INPUT":if(e.type!=="image")break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1},tt=typeof window<"u"?window:{},ht=new WeakMap,tr=/auto|scroll/,jn=/^tb|vertical/,Xn=/msie|trident/i.test(tt.navigator&&tt.navigator.userAgent),pe=function(e){return parseFloat(e||"0")},He=function(e,r,t){return e===void 0&&(e=0),r===void 0&&(r=0),t===void 0&&(t=!1),new Vn((t?r:e)||0,(t?e:r)||0)},rr=Fe({devicePixelContentBoxSize:He(),borderBoxSize:He(),contentBoxSize:He(),contentRect:new gr(0,0,0,0)}),wr=function(e,r){if(r===void 0&&(r=!1),ht.has(e)&&!r)return ht.get(e);if(mr(e))return ht.set(e,rr),rr;var t=getComputedStyle(e),i=Yt(e)&&e.ownerSVGElement&&e.getBBox(),o=!Xn&&t.boxSizing==="border-box",s=jn.test(t.writingMode||""),u=!i&&tr.test(t.overflowY||""),p=!i&&tr.test(t.overflowX||""),b=i?0:pe(t.paddingTop),v=i?0:pe(t.paddingRight),g=i?0:pe(t.paddingBottom),w=i?0:pe(t.paddingLeft),$=i?0:pe(t.borderTopWidth),Z=i?0:pe(t.borderRightWidth),L=i?0:pe(t.borderBottomWidth),de=i?0:pe(t.borderLeftWidth),ee=w+v,ie=b+g,U=de+Z,q=$+L,S=p?e.offsetHeight-q-e.clientHeight:0,E=u?e.offsetWidth-U-e.clientWidth:0,F=o?ee+U:0,a=o?ie+q:0,f=i?i.width:pe(t.width)-F-E,y=i?i.height:pe(t.height)-a-S,P=f+ee+E+U,_=y+ie+S+q,D=Fe({devicePixelContentBoxSize:He(Math.round(f*devicePixelRatio),Math.round(y*devicePixelRatio),s),borderBoxSize:He(P,_,s),contentBoxSize:He(f,y,s),contentRect:new gr(w,b,f,y)});return ht.set(e,D),D},yr=function(e,r,t){var i=wr(e,t),o=i.borderBoxSize,s=i.contentBoxSize,u=i.devicePixelContentBoxSize;switch(r){case nt.DEVICE_PIXEL_CONTENT_BOX:return u;case nt.BORDER_BOX:return o;default:return s}},Un=function(){function e(r){var t=wr(r);this.target=r,this.contentRect=t.contentRect,this.borderBoxSize=Fe([t.borderBoxSize]),this.contentBoxSize=Fe([t.contentBoxSize]),this.devicePixelContentBoxSize=Fe([t.devicePixelContentBoxSize])}return e}(),xr=function(e){if(mr(e))return 1/0;for(var r=0,t=e.parentNode;t;)r+=1,t=t.parentNode;return r},Yn=function(){var e=1/0,r=[];We.forEach(function(u){if(u.activeTargets.length!==0){var p=[];u.activeTargets.forEach(function(v){var g=new Un(v.target),w=xr(v.target);p.push(g),v.lastReportedSize=yr(v.target,v.observedBox),w<e&&(e=w)}),r.push(function(){u.callback.call(u.observer,p,u.observer)}),u.activeTargets.splice(0,u.activeTargets.length)}});for(var t=0,i=r;t<i.length;t++){var o=i[t];o()}return e},nr=function(e){We.forEach(function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach(function(o){o.isActive()&&(xr(o.target)>e?t.activeTargets.push(o):t.skippedTargets.push(o))})})},qn=function(){var e=0;for(nr(e);In();)e=Yn(),nr(e);return Hn()&&Ln(),e>0},$t,Cr=[],Kn=function(){return Cr.splice(0).forEach(function(e){return e()})},Gn=function(e){if(!$t){var r=0,t=document.createTextNode(""),i={characterData:!0};new MutationObserver(function(){return Kn()}).observe(t,i),$t=function(){t.textContent="".concat(r?r--:r++)}}Cr.push(e),$t()},Qn=function(e){Gn(function(){requestAnimationFrame(e)})},wt=0,Jn=function(){return!!wt},Zn=250,eo={attributes:!0,characterData:!0,childList:!0,subtree:!0},or=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],ar=function(e){return e===void 0&&(e=0),Date.now()+e},_t=!1,to=function(){function e(){var r=this;this.stopped=!0,this.listener=function(){return r.schedule()}}return e.prototype.run=function(r){var t=this;if(r===void 0&&(r=Zn),!_t){_t=!0;var i=ar(r);Qn(function(){var o=!1;try{o=qn()}finally{if(_t=!1,r=i-ar(),!Jn())return;o?t.run(1e3):r>0?t.run(r):t.start()}})}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var r=this,t=function(){return r.observer&&r.observer.observe(document.body,eo)};document.body?t():tt.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var r=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),or.forEach(function(t){return tt.addEventListener(t,r.listener,!0)}))},e.prototype.stop=function(){var r=this;this.stopped||(this.observer&&this.observer.disconnect(),or.forEach(function(t){return tt.removeEventListener(t,r.listener,!0)}),this.stopped=!0)},e}(),It=new to,ir=function(e){!wt&&e>0&&It.start(),wt+=e,!wt&&It.stop()},ro=function(e){return!Yt(e)&&!Nn(e)&&getComputedStyle(e).display==="inline"},no=function(){function e(r,t){this.target=r,this.observedBox=t||nt.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var r=yr(this.target,this.observedBox,!0);return ro(this.target)&&(this.lastReportedSize=r),this.lastReportedSize.inlineSize!==r.inlineSize||this.lastReportedSize.blockSize!==r.blockSize},e}(),oo=function(){function e(r,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=r,this.callback=t}return e}(),vt=new WeakMap,lr=function(e,r){for(var t=0;t<e.length;t+=1)if(e[t].target===r)return t;return-1},bt=function(){function e(){}return e.connect=function(r,t){var i=new oo(r,t);vt.set(r,i)},e.observe=function(r,t,i){var o=vt.get(r),s=o.observationTargets.length===0;lr(o.observationTargets,t)<0&&(s&&We.push(o),o.observationTargets.push(new no(t,i&&i.box)),ir(1),It.schedule())},e.unobserve=function(r,t){var i=vt.get(r),o=lr(i.observationTargets,t),s=i.observationTargets.length===1;o>=0&&(s&&We.splice(We.indexOf(i),1),i.observationTargets.splice(o,1),ir(-1))},e.disconnect=function(r){var t=this,i=vt.get(r);i.observationTargets.slice().forEach(function(o){return t.unobserve(r,o.target)}),i.activeTargets.splice(0,i.activeTargets.length)},e}(),ao=function(){function e(r){if(arguments.length===0)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if(typeof r!="function")throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");bt.connect(this,r)}return e.prototype.observe=function(r,t){if(arguments.length===0)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!er(r))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");bt.observe(this,r,t)},e.prototype.unobserve=function(r){if(arguments.length===0)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!er(r))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");bt.unobserve(this,r)},e.prototype.disconnect=function(){bt.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}();class io{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new(typeof window<"u"&&window.ResizeObserver||ao)(this.handleResize),this.elHandlersMap=new Map}handleResize(r){for(const t of r){const i=this.elHandlersMap.get(t.target);i!==void 0&&i(t)}}registerHandler(r,t){this.elHandlersMap.set(r,t),this.observer.observe(r)}unregisterHandler(r){this.elHandlersMap.has(r)&&(this.elHandlersMap.delete(r),this.observer.unobserve(r))}}const sr=new io,Ht=ce({name:"ResizeObserver",props:{onResize:Function},setup(e){let r=!1;const t=hr().proxy;function i(o){const{onResize:s}=e;s!==void 0&&s(o)}Rt(()=>{const o=t.$el;if(o===void 0){Jt("resize-observer","$el does not exist.");return}if(o.nextElementSibling!==o.nextSibling&&o.nodeType===3&&o.nodeValue!==""){Jt("resize-observer","$el can not be observed (it may be a text node).");return}o.nextElementSibling!==null&&(sr.registerHandler(o.nextElementSibling,i),r=!0)}),Tt(()=>{r&&sr.unregisterHandler(t.$el.nextElementSibling)})},render(){return Rn(this.$slots,"default")}});function lo(e){const r={isDeactivated:!1};let t=!1;return Tn(()=>{if(r.isDeactivated=!1,!t){t=!0;return}e()}),Pn(()=>{r.isDeactivated=!0,t||(t=!0)}),r}const cr=jt("n-form-item");function Sr(e,{defaultSize:r="medium",mergedSize:t,mergedDisabled:i}={}){const o=Pt(cr,null);vr(cr,null);const s=k(t?()=>t(o):()=>{const{size:b}=e;if(b)return b;if(o){const{mergedSize:v}=o;if(v.value!==void 0)return v.value}return r}),u=k(i?()=>i(o):()=>{const{disabled:b}=e;return b!==void 0?b:o?o.disabled.value:!1}),p=k(()=>{const{status:b}=e;return b||(o==null?void 0:o.mergedValidationStatus.value)});return Tt(()=>{o&&o.restoreValidation()}),{mergedSizeRef:s,mergedDisabledRef:u,mergedStatusRef:p,nTriggerFormBlur(){o&&o.handleContentBlur()},nTriggerFormChange(){o&&o.handleContentChange()},nTriggerFormFocus(){o&&o.handleContentFocus()},nTriggerFormInput(){o&&o.handleContentInput()}}}const so={name:"en-US",global:{undo:"Undo",redo:"Redo",confirm:"Confirm",clear:"Clear"},Popconfirm:{positiveText:"Confirm",negativeText:"Cancel"},Cascader:{placeholder:"Please Select",loading:"Loading",loadingRequiredMessage:e=>`Please load all ${e}'s descendants before checking it.`},Time:{dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss"},DatePicker:{yearFormat:"yyyy",monthFormat:"MMM",dayFormat:"eeeeee",yearTypeFormat:"yyyy",monthTypeFormat:"yyyy-MM",dateFormat:"yyyy-MM-dd",dateTimeFormat:"yyyy-MM-dd HH:mm:ss",quarterFormat:"yyyy-qqq",clear:"Clear",now:"Now",confirm:"Confirm",selectTime:"Select Time",selectDate:"Select Date",datePlaceholder:"Select Date",datetimePlaceholder:"Select Date and Time",monthPlaceholder:"Select Month",yearPlaceholder:"Select Year",quarterPlaceholder:"Select Quarter",startDatePlaceholder:"Start Date",endDatePlaceholder:"End Date",startDatetimePlaceholder:"Start Date and Time",endDatetimePlaceholder:"End Date and Time",startMonthPlaceholder:"Start Month",endMonthPlaceholder:"End Month",monthBeforeYear:!0,firstDayOfWeek:6,today:"Today"},DataTable:{checkTableAll:"Select all in the table",uncheckTableAll:"Unselect all in the table",confirm:"Confirm",clear:"Clear"},LegacyTransfer:{sourceTitle:"Source",targetTitle:"Target"},Transfer:{selectAll:"Select all",unselectAll:"Unselect all",clearAll:"Clear",total:e=>`Total ${e} items`,selected:e=>`${e} items selected`},Empty:{description:"No Data"},Select:{placeholder:"Please Select"},TimePicker:{placeholder:"Select Time",positiveText:"OK",negativeText:"Cancel",now:"Now"},Pagination:{goto:"Goto",selectionSuffix:"page"},DynamicTags:{add:"Add"},Log:{loading:"Loading"},Input:{placeholder:"Please Input"},InputNumber:{placeholder:"Please Input"},DynamicInput:{create:"Create"},ThemeEditor:{title:"Theme Editor",clearAllVars:"Clear All Variables",clearSearch:"Clear Search",filterCompName:"Filter Component Name",filterVarName:"Filter Variable Name",import:"Import",export:"Export",restore:"Reset to Default"},Image:{tipPrevious:"Previous picture (←)",tipNext:"Next picture (→)",tipCounterclockwise:"Counterclockwise",tipClockwise:"Clockwise",tipZoomOut:"Zoom out",tipZoomIn:"Zoom in",tipClose:"Close (Esc)",tipOriginalSize:"Zoom to original size"}},co=so;function Dt(e){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=r.width?String(r.width):e.defaultWidth,i=e.formats[t]||e.formats[e.defaultWidth];return i}}function Je(e){return function(r,t){var i=t!=null&&t.context?String(t.context):"standalone",o;if(i==="formatting"&&e.formattingValues){var s=e.defaultFormattingWidth||e.defaultWidth,u=t!=null&&t.width?String(t.width):s;o=e.formattingValues[u]||e.formattingValues[s]}else{var p=e.defaultWidth,b=t!=null&&t.width?String(t.width):e.defaultWidth;o=e.values[b]||e.values[p]}var v=e.argumentCallback?e.argumentCallback(r):r;return o[v]}}function Ze(e){return function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=r.match(o);if(!s)return null;var u=s[0],p=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],b=Array.isArray(p)?fo(p,function(w){return w.test(u)}):uo(p,function(w){return w.test(u)}),v;v=e.valueCallback?e.valueCallback(b):b,v=t.valueCallback?t.valueCallback(v):v;var g=r.slice(u.length);return{value:v,rest:g}}}function uo(e,r){for(var t in e)if(e.hasOwnProperty(t)&&r(e[t]))return t}function fo(e,r){for(var t=0;t<e.length;t++)if(r(e[t]))return t}function ho(e){return function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.match(e.matchPattern);if(!i)return null;var o=i[0],s=r.match(e.parsePattern);if(!s)return null;var u=e.valueCallback?e.valueCallback(s[0]):s[0];u=t.valueCallback?t.valueCallback(u):u;var p=r.slice(o.length);return{value:u,rest:p}}}var vo={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},bo=function(r,t,i){var o,s=vo[r];return typeof s=="string"?o=s:t===1?o=s.one:o=s.other.replace("{{count}}",t.toString()),i!=null&&i.addSuffix?i.comparison&&i.comparison>0?"in "+o:o+" ago":o};const po=bo;var go={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},mo={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},wo={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},yo={date:Dt({formats:go,defaultWidth:"full"}),time:Dt({formats:mo,defaultWidth:"full"}),dateTime:Dt({formats:wo,defaultWidth:"full"})};const xo=yo;var Co={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},So=function(r,t,i,o){return Co[r]};const zo=So;var Ro={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},To={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Po={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Bo={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},ko={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Eo={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Mo=function(r,t){var i=Number(r),o=i%100;if(o>20||o<10)switch(o%10){case 1:return i+"st";case 2:return i+"nd";case 3:return i+"rd"}return i+"th"},$o={ordinalNumber:Mo,era:Je({values:Ro,defaultWidth:"wide"}),quarter:Je({values:To,defaultWidth:"wide",argumentCallback:function(r){return r-1}}),month:Je({values:Po,defaultWidth:"wide"}),day:Je({values:Bo,defaultWidth:"wide"}),dayPeriod:Je({values:ko,defaultWidth:"wide",formattingValues:Eo,defaultFormattingWidth:"wide"})};const _o=$o;var Do=/^(\d+)(th|st|nd|rd)?/i,Wo=/\d+/i,Fo={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Oo={any:[/^b/i,/^(a|c)/i]},Ao={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Io={any:[/1/i,/2/i,/3/i,/4/i]},Ho={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Lo={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Vo={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},No={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},jo={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Xo={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Uo={ordinalNumber:ho({matchPattern:Do,parsePattern:Wo,valueCallback:function(r){return parseInt(r,10)}}),era:Ze({matchPatterns:Fo,defaultMatchWidth:"wide",parsePatterns:Oo,defaultParseWidth:"any"}),quarter:Ze({matchPatterns:Ao,defaultMatchWidth:"wide",parsePatterns:Io,defaultParseWidth:"any",valueCallback:function(r){return r+1}}),month:Ze({matchPatterns:Ho,defaultMatchWidth:"wide",parsePatterns:Lo,defaultParseWidth:"any"}),day:Ze({matchPatterns:Vo,defaultMatchWidth:"wide",parsePatterns:No,defaultParseWidth:"any"}),dayPeriod:Ze({matchPatterns:jo,defaultMatchWidth:"any",parsePatterns:Xo,defaultParseWidth:"any"})};const Yo=Uo;var qo={code:"en-US",formatDistance:po,formatLong:xo,formatRelative:zo,localize:_o,match:Yo,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Ko=qo,Go={name:"en-US",locale:Ko},Qo=Go;function Jo(e){const{mergedLocaleRef:r,mergedDateLocaleRef:t}=Pt(yn,null)||{},i=k(()=>{var s,u;return(u=(s=r==null?void 0:r.value)===null||s===void 0?void 0:s[e])!==null&&u!==void 0?u:co[e]});return{dateLocaleRef:k(()=>{var s;return(s=t==null?void 0:t.value)!==null&&s!==void 0?s:Qo}),localeRef:i}}const Zo=ce({name:"Eye",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),c("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),ea=ce({name:"EyeOff",render(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},c("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),c("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),c("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),c("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),c("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),ta=ce({name:"ChevronDown",render(){return c("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),ra=bn("clear",c("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},c("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},c("g",{fill:"currentColor","fill-rule":"nonzero"},c("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),qt=ce({name:"BaseIconSwitchTransition",setup(e,{slots:r}){const t=Fn();return()=>c(Ft,{name:"icon-switch-transition",appear:t.value},r)}}),{cubicBezierEaseInOut:na}=Xt;function Ct({originalTransform:e="",left:r=0,top:t=0,transition:i=`all .3s ${na} !important`}={}){return[C("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:r,top:t,opacity:0}),C("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:r,top:t,opacity:1}),C("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:r,top:t,transition:i})]}const oa=C([C("@keyframes loading-container-rotate",`
 to {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }
 `),C("@keyframes loading-layer-rotate",`
 12.5% {
 -webkit-transform: rotate(135deg);
 transform: rotate(135deg);
 }
 25% {
 -webkit-transform: rotate(270deg);
 transform: rotate(270deg);
 }
 37.5% {
 -webkit-transform: rotate(405deg);
 transform: rotate(405deg);
 }
 50% {
 -webkit-transform: rotate(540deg);
 transform: rotate(540deg);
 }
 62.5% {
 -webkit-transform: rotate(675deg);
 transform: rotate(675deg);
 }
 75% {
 -webkit-transform: rotate(810deg);
 transform: rotate(810deg);
 }
 87.5% {
 -webkit-transform: rotate(945deg);
 transform: rotate(945deg);
 }
 100% {
 -webkit-transform: rotate(1080deg);
 transform: rotate(1080deg);
 } 
 `),C("@keyframes loading-left-spin",`
 from {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 50% {
 -webkit-transform: rotate(130deg);
 transform: rotate(130deg);
 }
 to {
 -webkit-transform: rotate(265deg);
 transform: rotate(265deg);
 }
 `),C("@keyframes loading-right-spin",`
 from {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 50% {
 -webkit-transform: rotate(-130deg);
 transform: rotate(-130deg);
 }
 to {
 -webkit-transform: rotate(-265deg);
 transform: rotate(-265deg);
 }
 `),W("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[h("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[Ct()]),h("container",`
 display: inline-flex;
 position: relative;
 direction: ltr;
 line-height: 0;
 animation: loading-container-rotate 1568.2352941176ms linear infinite;
 font-size: 0;
 letter-spacing: 0;
 white-space: nowrap;
 opacity: 1;
 width: 100%;
 height: 100%;
 `,[h("svg",`
 stroke: var(--n-text-color);
 fill: transparent;
 position: absolute;
 height: 100%;
 overflow: hidden;
 `),h("container-layer",`
 position: absolute;
 width: 100%;
 height: 100%;
 animation: loading-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 `,[h("container-layer-left",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[h("svg",`
 animation: loading-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 width: 200%;
 `)]),h("container-layer-patch",`
 position: absolute;
 top: 0;
 left: 47.5%;
 box-sizing: border-box;
 width: 5%;
 height: 100%;
 overflow: hidden;
 `,[h("svg",`
 left: -900%;
 width: 2000%;
 transform: rotate(180deg);
 `)]),h("container-layer-right",`
 display: inline-flex;
 position: relative;
 width: 50%;
 height: 100%;
 overflow: hidden;
 `,[h("svg",`
 animation: loading-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
 left: -100%;
 width: 200%;
 `)])])]),h("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ct({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})])])]),aa={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},zr=ce({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},aa),setup(e){St("-base-loading",oa,rt(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:r,strokeWidth:t,stroke:i,scale:o}=this,s=r/o;return c("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},c(qt,null,{default:()=>this.show?c("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},c("div",{class:`${e}-base-loading__container`},c("div",{class:`${e}-base-loading__container-layer`},c("div",{class:`${e}-base-loading__container-layer-left`},c("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:s,cy:s,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),c("div",{class:`${e}-base-loading__container-layer-patch`},c("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:s,cy:s,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r}))),c("div",{class:`${e}-base-loading__container-layer-right`},c("svg",{class:`${e}-base-loading__svg`,viewBox:`0 0 ${2*s} ${2*s}`,xmlns:"http://www.w3.org/2000/svg",style:{color:i}},c("circle",{fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round",cx:s,cy:s,r:r-t/2,"stroke-dasharray":4.91*r,"stroke-dashoffset":2.46*r})))))):c("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),{cubicBezierEaseInOut:dr}=Xt;function ia({name:e="fade-in",enterDuration:r="0.2s",leaveDuration:t="0.2s",enterCubicBezier:i=dr,leaveCubicBezier:o=dr}={}){return[C(`&.${e}-transition-enter-active`,{transition:`all ${r} ${i}!important`}),C(`&.${e}-transition-leave-active`,{transition:`all ${t} ${o}!important`}),C(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`,{opacity:0}),C(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`,{opacity:1})]}const la=W("scrollbar",`
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`,[C(">",[W("scrollbar-container",`
 width: 100%;
 overflow: scroll;
 height: 100%;
 max-height: inherit;
 scrollbar-width: none;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C(">",[W("scrollbar-content",`
 box-sizing: border-box;
 min-width: 100%;
 `)])])]),C(">, +",[W("scrollbar-rail",`
 position: absolute;
 pointer-events: none;
 user-select: none;
 -webkit-user-select: none;
 `,[X("horizontal",`
 left: 2px;
 right: 2px;
 bottom: 4px;
 height: var(--n-scrollbar-height);
 `,[C(">",[h("scrollbar",`
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]),X("vertical",`
 right: 4px;
 top: 2px;
 bottom: 2px;
 width: var(--n-scrollbar-width);
 `,[C(">",[h("scrollbar",`
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]),X("disabled",[C(">",[h("scrollbar",{pointerEvents:"none"})])]),C(">",[h("scrollbar",`
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `,[ia(),C("&:hover",{backgroundColor:"var(--n-scrollbar-color-hover)"})])])])])]),sa=Object.assign(Object.assign({},Le.props),{size:{type:Number,default:5},duration:{type:Number,default:0},scrollable:{type:Boolean,default:!0},xScrollable:Boolean,trigger:{type:String,default:"hover"},useUnifiedContainer:Boolean,triggerDisplayManually:Boolean,container:Function,content:Function,containerClass:String,containerStyle:[String,Object],contentClass:String,contentStyle:[String,Object],horizontalRailStyle:[String,Object],verticalRailStyle:[String,Object],onScroll:Function,onWheel:Function,onResize:Function,internalOnUpdateScrollLeft:Function,internalHoistYRail:Boolean}),Rr=ce({name:"Scrollbar",props:sa,inheritAttrs:!1,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t,mergedRtlRef:i}=Ut(e),o=Vt("Scrollbar",i,r),s=T(null),u=T(null),p=T(null),b=T(null),v=T(null),g=T(null),w=T(null),$=T(null),Z=T(null),L=T(null),de=T(null),ee=T(0),ie=T(0),U=T(!1),q=T(!1);let S=!1,E=!1,F,a,f=0,y=0,P=0,_=0;const D=An(),re=k(()=>{const{value:d}=$,{value:m}=g,{value:z}=L;return d===null||m===null||z===null?0:Math.min(d,z*d/m+e.size*1.5)}),V=k(()=>`${re.value}px`),N=k(()=>{const{value:d}=Z,{value:m}=w,{value:z}=de;return d===null||m===null||z===null?0:z*d/m+e.size*1.5}),K=k(()=>`${N.value}px`),B=k(()=>{const{value:d}=$,{value:m}=ee,{value:z}=g,{value:O}=L;if(d===null||z===null||O===null)return 0;{const Q=z-d;return Q?m/Q*(O-re.value):0}}),te=k(()=>`${B.value}px`),le=k(()=>{const{value:d}=Z,{value:m}=ie,{value:z}=w,{value:O}=de;if(d===null||z===null||O===null)return 0;{const Q=z-d;return Q?m/Q*(O-N.value):0}}),ne=k(()=>`${le.value}px`),ue=k(()=>{const{value:d}=$,{value:m}=g;return d!==null&&m!==null&&m>d}),ge=k(()=>{const{value:d}=Z,{value:m}=w;return d!==null&&m!==null&&m>d}),Ve=k(()=>{const{trigger:d}=e;return d==="none"||U.value}),ye=k(()=>{const{trigger:d}=e;return d==="none"||q.value}),se=k(()=>{const{container:d}=e;return d?d():u.value}),A=k(()=>{const{content:d}=e;return d?d():p.value}),me=lo(()=>{e.container||xe({top:ee.value,left:ie.value})}),Oe=()=>{me.isDeactivated||he()},M=d=>{if(me.isDeactivated)return;const{onResize:m}=e;m&&m(d),he()},xe=(d,m)=>{if(!e.scrollable)return;if(typeof d=="number"){be(m??0,d,0,!1,"auto");return}const{left:z,top:O,index:Q,elSize:oe,position:fe,behavior:Y,el:ve,debounce:Be=!0}=d;(z!==void 0||O!==void 0)&&be(z??0,O??0,0,!1,Y),ve!==void 0?be(0,ve.offsetTop,ve.offsetHeight,Be,Y):Q!==void 0&&oe!==void 0?be(0,Q*oe,oe,Be,Y):fe==="bottom"?be(0,Number.MAX_SAFE_INTEGER,0,!1,Y):fe==="top"&&be(0,0,0,!1,Y)},Te=(d,m)=>{if(!e.scrollable)return;const{value:z}=se;z&&(typeof d=="object"?z.scrollBy(d):z.scrollBy(d,m||0))};function be(d,m,z,O,Q){const{value:oe}=se;if(oe){if(O){const{scrollTop:fe,offsetHeight:Y}=oe;if(m>fe){m+z<=fe+Y||oe.scrollTo({left:d,top:m+z-Y,behavior:Q});return}}oe.scrollTo({left:d,top:m,behavior:Q})}}function Ne(){Ce(),Ye(),he()}function je(){Pe()}function Pe(){Xe(),Ue()}function Xe(){a!==void 0&&window.clearTimeout(a),a=window.setTimeout(()=>{q.value=!1},e.duration)}function Ue(){F!==void 0&&window.clearTimeout(F),F=window.setTimeout(()=>{U.value=!1},e.duration)}function Ce(){F!==void 0&&window.clearTimeout(F),U.value=!0}function Ye(){a!==void 0&&window.clearTimeout(a),q.value=!0}function I(d){const{onScroll:m}=e;m&&m(d),G()}function G(){const{value:d}=se;d&&(ee.value=d.scrollTop,ie.value=d.scrollLeft*(o!=null&&o.value?-1:1))}function Se(){const{value:d}=A;d&&(g.value=d.offsetHeight,w.value=d.offsetWidth);const{value:m}=se;m&&($.value=m.offsetHeight,Z.value=m.offsetWidth);const{value:z}=v,{value:O}=b;z&&(de.value=z.offsetWidth),O&&(L.value=O.offsetHeight)}function ot(){const{value:d}=se;d&&(ee.value=d.scrollTop,ie.value=d.scrollLeft*(o!=null&&o.value?-1:1),$.value=d.offsetHeight,Z.value=d.offsetWidth,g.value=d.scrollHeight,w.value=d.scrollWidth);const{value:m}=v,{value:z}=b;m&&(de.value=m.offsetWidth),z&&(L.value=z.offsetHeight)}function he(){e.scrollable&&(e.useUnifiedContainer?ot():(Se(),G()))}function at(d){var m;return!(!((m=s.value)===null||m===void 0)&&m.contains(kn(d)))}function Bt(d){d.preventDefault(),d.stopPropagation(),E=!0,De("mousemove",window,it,!0),De("mouseup",window,lt,!0),y=ie.value,P=o!=null&&o.value?window.innerWidth-d.clientX:d.clientX}function it(d){if(!E)return;F!==void 0&&window.clearTimeout(F),a!==void 0&&window.clearTimeout(a);const{value:m}=Z,{value:z}=w,{value:O}=N;if(m===null||z===null)return;const oe=(o!=null&&o.value?window.innerWidth-d.clientX-P:d.clientX-P)*(z-m)/(m-O),fe=z-m;let Y=y+oe;Y=Math.min(fe,Y),Y=Math.max(Y,0);const{value:ve}=se;if(ve){ve.scrollLeft=Y*(o!=null&&o.value?-1:1);const{internalOnUpdateScrollLeft:Be}=e;Be&&Be(Y)}}function lt(d){d.preventDefault(),d.stopPropagation(),we("mousemove",window,it,!0),we("mouseup",window,lt,!0),E=!1,he(),at(d)&&Pe()}function kt(d){d.preventDefault(),d.stopPropagation(),S=!0,De("mousemove",window,qe,!0),De("mouseup",window,Ke,!0),f=ee.value,_=d.clientY}function qe(d){if(!S)return;F!==void 0&&window.clearTimeout(F),a!==void 0&&window.clearTimeout(a);const{value:m}=$,{value:z}=g,{value:O}=re;if(m===null||z===null)return;const oe=(d.clientY-_)*(z-m)/(m-O),fe=z-m;let Y=f+oe;Y=Math.min(fe,Y),Y=Math.max(Y,0);const{value:ve}=se;ve&&(ve.scrollTop=Y)}function Ke(d){d.preventDefault(),d.stopPropagation(),we("mousemove",window,qe,!0),we("mouseup",window,Ke,!0),S=!1,he(),at(d)&&Pe()}Ot(()=>{const{value:d}=ge,{value:m}=ue,{value:z}=r,{value:O}=v,{value:Q}=b;O&&(d?O.classList.remove(`${z}-scrollbar-rail--disabled`):O.classList.add(`${z}-scrollbar-rail--disabled`)),Q&&(m?Q.classList.remove(`${z}-scrollbar-rail--disabled`):Q.classList.add(`${z}-scrollbar-rail--disabled`))}),Rt(()=>{e.container||he()}),Tt(()=>{F!==void 0&&window.clearTimeout(F),a!==void 0&&window.clearTimeout(a),we("mousemove",window,qe,!0),we("mouseup",window,Ke,!0)});const Et=Le("Scrollbar","-scrollbar",la,xn,e,r),st=k(()=>{const{common:{cubicBezierEaseInOut:d,scrollbarBorderRadius:m,scrollbarHeight:z,scrollbarWidth:O},self:{color:Q,colorHover:oe}}=Et.value;return{"--n-scrollbar-bezier":d,"--n-scrollbar-color":Q,"--n-scrollbar-color-hover":oe,"--n-scrollbar-border-radius":m,"--n-scrollbar-width":O,"--n-scrollbar-height":z}}),ze=t?Nt("scrollbar",void 0,st,e):void 0;return Object.assign(Object.assign({},{scrollTo:xe,scrollBy:Te,sync:he,syncUnifiedContainer:ot,handleMouseEnterWrapper:Ne,handleMouseLeaveWrapper:je}),{mergedClsPrefix:r,rtlEnabled:o,containerScrollTop:ee,wrapperRef:s,containerRef:u,contentRef:p,yRailRef:b,xRailRef:v,needYBar:ue,needXBar:ge,yBarSizePx:V,xBarSizePx:K,yBarTopPx:te,xBarLeftPx:ne,isShowXBar:Ve,isShowYBar:ye,isIos:D,handleScroll:I,handleContentResize:Oe,handleContainerResize:M,handleYScrollMouseDown:kt,handleXScrollMouseDown:Bt,cssVars:t?void 0:st,themeClass:ze==null?void 0:ze.themeClass,onRender:ze==null?void 0:ze.onRender})},render(){var e;const{$slots:r,mergedClsPrefix:t,triggerDisplayManually:i,rtlEnabled:o,internalHoistYRail:s}=this;if(!this.scrollable)return(e=r.default)===null||e===void 0?void 0:e.call(r);const u=this.trigger==="none",p=()=>c("div",{ref:"yRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--vertical`],"data-scrollbar-rail":!0,style:this.verticalRailStyle,"aria-hidden":!0},c(u?Gt:Ft,u?null:{name:"fade-in-transition"},{default:()=>this.needYBar&&this.isShowYBar&&!this.isIos?c("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{height:this.yBarSizePx,top:this.yBarTopPx},onMousedown:this.handleYScrollMouseDown}):null})),b=()=>{var g,w;return(g=this.onRender)===null||g===void 0||g.call(this),c("div",Bn(this.$attrs,{role:"none",ref:"wrapperRef",class:[`${t}-scrollbar`,this.themeClass,o&&`${t}-scrollbar--rtl`],style:this.cssVars,onMouseenter:i?void 0:this.handleMouseEnterWrapper,onMouseleave:i?void 0:this.handleMouseLeaveWrapper}),[this.container?(w=r.default)===null||w===void 0?void 0:w.call(r):c("div",{role:"none",ref:"containerRef",class:[`${t}-scrollbar-container`,this.containerClass],style:this.containerStyle,onScroll:this.handleScroll,onWheel:this.onWheel},c(Ht,{onResize:this.handleContentResize},{default:()=>c("div",{ref:"contentRef",role:"none",style:[{width:this.xScrollable?"fit-content":null},this.contentStyle],class:[`${t}-scrollbar-content`,this.contentClass]},r)})),s?null:p(),this.xScrollable&&c("div",{ref:"xRailRef",class:[`${t}-scrollbar-rail`,`${t}-scrollbar-rail--horizontal`],style:this.horizontalRailStyle,"data-scrollbar-rail":!0,"aria-hidden":!0},c(u?Gt:Ft,u?null:{name:"fade-in-transition"},{default:()=>this.needXBar&&this.isShowXBar&&!this.isIos?c("div",{class:`${t}-scrollbar-rail__scrollbar`,style:{width:this.xBarSizePx,right:o?this.xBarLeftPx:void 0,left:o?void 0:this.xBarLeftPx},onMousedown:this.handleXScrollMouseDown}):null}))])},v=this.container?b():c(Ht,{onResize:this.handleContainerResize},{default:b});return s?c(br,null,v,p()):v}}),ca=Rr,Ba=Rr,da=W("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),ua=ce({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){St("-base-wave",da,rt(e,"clsPrefix"));const r=T(null),t=T(!1);let i=null;return Tt(()=>{i!==null&&window.clearTimeout(i)}),{active:t,selfRef:r,play(){i!==null&&(window.clearTimeout(i),t.value=!1,i=null),At(()=>{var o;(o=r.value)===null||o===void 0||o.offsetHeight,t.value=!0,i=window.setTimeout(()=>{t.value=!1,i=null},1e3)})}}},render(){const{clsPrefix:e}=this;return c("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),fa=W("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[C(">",[h("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[C("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),C("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),h("placeholder",`
 display: flex;
 `),h("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Ct({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Lt=ce({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return St("-base-clear",fa,rt(e,"clsPrefix")),{handleMouseDown(r){r.preventDefault()}}},render(){const{clsPrefix:e}=this;return c("div",{class:`${e}-base-clear`},c(qt,null,{default:()=>{var r,t;return this.show?c("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},et(this.$slots.icon,()=>[c(yt,{clsPrefix:e},{default:()=>c(ra,null)})])):c("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(r=this.$slots).placeholder)===null||t===void 0?void 0:t.call(r))}}))}}),ha=ce({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:r}){return()=>{const{clsPrefix:t}=e;return c(zr,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?c(Lt,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>c(yt,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>et(r.default,()=>[c(ta,null)])})}):null})}}}),{cubicBezierEaseInOut:Re}=Xt;function va({duration:e=".2s",delay:r=".1s"}={}){return[C("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),C("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),C("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Re},
 max-width ${e} ${Re} ${r},
 margin-left ${e} ${Re} ${r},
 margin-right ${e} ${Re} ${r};
 `),C("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${Re} ${r},
 max-width ${e} ${Re},
 margin-left ${e} ${Re},
 margin-right ${e} ${Re};
 `)]}const ba=zt&&"chrome"in window;zt&&navigator.userAgent.includes("Firefox");const Tr=zt&&navigator.userAgent.includes("Safari")&&!ba,Pr=jt("n-input");function pa(e){let r=0;for(const t of e)r++;return r}function pt(e){return e===""||e==null}function ga(e){const r=T(null);function t(){const{value:s}=e;if(!(s!=null&&s.focus)){o();return}const{selectionStart:u,selectionEnd:p,value:b}=s;if(u==null||p==null){o();return}r.value={start:u,end:p,beforeText:b.slice(0,u),afterText:b.slice(p)}}function i(){var s;const{value:u}=r,{value:p}=e;if(!u||!p)return;const{value:b}=p,{start:v,beforeText:g,afterText:w}=u;let $=b.length;if(b.endsWith(w))$=b.length-w.length;else if(b.startsWith(g))$=g.length;else{const Z=g[v-1],L=b.indexOf(Z,v-1);L!==-1&&($=L+1)}(s=p.setSelectionRange)===null||s===void 0||s.call(p,$,$)}function o(){r.value=null}return xt(e,o),{recordCursor:t,restoreCursor:i}}const ur=ce({name:"InputWordCount",setup(e,{slots:r}){const{mergedValueRef:t,maxlengthRef:i,mergedClsPrefixRef:o,countGraphemesRef:s}=Pt(Pr),u=k(()=>{const{value:p}=t;return p===null||Array.isArray(p)?0:(s.value||pa)(p)});return()=>{const{value:p}=i,{value:b}=t;return c("span",{class:`${o.value}-input-word-count`},pn(r.default,{value:b===null||Array.isArray(b)?"":b},()=>[p===void 0?u.value:`${u.value} / ${p}`]))}}}),ma=W("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[h("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),h("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),h("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[C("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),C("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),C("&:-webkit-autofill ~",[h("placeholder","display: none;")])]),X("round",[_e("textarea","border-radius: calc(var(--n-height) / 2);")]),h("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[C("span",`
 width: 100%;
 display: inline-block;
 `)]),X("textarea",[h("placeholder","overflow: visible;")]),_e("autosize","width: 100%;"),X("autosize",[h("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),W("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),h("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),h("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[C("+",[h("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),_e("textarea",[h("placeholder","white-space: nowrap;")]),h("eye",`
 transition: color .3s var(--n-bezier);
 `),X("textarea","width: 100%;",[W("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),X("resizable",[W("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),h("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),h("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),X("pair",[h("input-el, placeholder","text-align: center;"),h("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[W("icon",`
 color: var(--n-icon-color);
 `),W("base-icon",`
 color: var(--n-icon-color);
 `)])]),X("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[h("border","border: var(--n-border-disabled);"),h("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),h("placeholder","color: var(--n-placeholder-color-disabled);"),h("separator","color: var(--n-text-color-disabled);",[W("icon",`
 color: var(--n-icon-color-disabled);
 `),W("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),W("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),h("suffix, prefix","color: var(--n-text-color-disabled);",[W("icon",`
 color: var(--n-icon-color-disabled);
 `),W("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),_e("disabled",[h("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[C("&:hover",`
 color: var(--n-icon-color-hover);
 `),C("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),C("&:hover",[h("state-border","border: var(--n-border-hover);")]),X("focus","background-color: var(--n-color-focus);",[h("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),h("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),h("state-border",`
 border-color: #0000;
 z-index: 1;
 `),h("prefix","margin-right: 4px;"),h("suffix",`
 margin-left: 4px;
 `),h("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[W("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),W("base-clear",`
 font-size: var(--n-icon-size);
 `,[h("placeholder",[W("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),C(">",[W("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),W("base-icon",`
 font-size: var(--n-icon-size);
 `)]),W("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>X(`${e}-status`,[_e("disabled",[W("base-loading",`
 color: var(--n-loading-color-${e})
 `),h("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),h("state-border",`
 border: var(--n-border-${e});
 `),C("&:hover",[h("state-border",`
 border: var(--n-border-hover-${e});
 `)]),C("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[h("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),X("focus",`
 background-color: var(--n-color-focus-${e});
 `,[h("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),wa=W("input",[X("disabled",[h("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),ya=Object.assign(Object.assign({},Le.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),ka=ce({name:"Input",props:ya,setup(e){const{mergedClsPrefixRef:r,mergedBorderedRef:t,inlineThemeDisabled:i,mergedRtlRef:o}=Ut(e),s=Le("Input","-input",ma,Cn,e,r);Tr&&St("-input-safari",wa,r);const u=T(null),p=T(null),b=T(null),v=T(null),g=T(null),w=T(null),$=T(null),Z=ga($),L=T(null),{localeRef:de}=Jo("Input"),ee=T(e.defaultValue),ie=rt(e,"value"),U=Wn(ie,ee),q=Sr(e),{mergedSizeRef:S,mergedDisabledRef:E,mergedStatusRef:F}=q,a=T(!1),f=T(!1),y=T(!1),P=T(!1);let _=null;const D=k(()=>{const{placeholder:n,pair:l}=e;return l?Array.isArray(n)?n:n===void 0?["",""]:[n,n]:n===void 0?[de.value.placeholder]:[n]}),re=k(()=>{const{value:n}=y,{value:l}=U,{value:x}=D;return!n&&(pt(l)||Array.isArray(l)&&pt(l[0]))&&x[0]}),V=k(()=>{const{value:n}=y,{value:l}=U,{value:x}=D;return!n&&x[1]&&(pt(l)||Array.isArray(l)&&pt(l[1]))}),N=Wt(()=>e.internalForceFocus||a.value),K=Wt(()=>{if(E.value||e.readonly||!e.clearable||!N.value&&!f.value)return!1;const{value:n}=U,{value:l}=N;return e.pair?!!(Array.isArray(n)&&(n[0]||n[1]))&&(f.value||l):!!n&&(f.value||l)}),B=k(()=>{const{showPasswordOn:n}=e;if(n)return n;if(e.showPasswordToggle)return"click"}),te=T(!1),le=k(()=>{const{textDecoration:n}=e;return n?Array.isArray(n)?n.map(l=>({textDecoration:l})):[{textDecoration:n}]:["",""]}),ne=T(void 0),ue=()=>{var n,l;if(e.type==="textarea"){const{autosize:x}=e;if(x&&(ne.value=(l=(n=L.value)===null||n===void 0?void 0:n.$el)===null||l===void 0?void 0:l.offsetWidth),!p.value||typeof x=="boolean")return;const{paddingTop:j,paddingBottom:J,lineHeight:H}=window.getComputedStyle(p.value),ke=Number(j.slice(0,-2)),Ee=Number(J.slice(0,-2)),Me=Number(H.slice(0,-2)),{value:Ge}=b;if(!Ge)return;if(x.minRows){const Qe=Math.max(x.minRows,1),Mt=`${ke+Ee+Me*Qe}px`;Ge.style.minHeight=Mt}if(x.maxRows){const Qe=`${ke+Ee+Me*x.maxRows}px`;Ge.style.maxHeight=Qe}}},ge=k(()=>{const{maxlength:n}=e;return n===void 0?void 0:Number(n)});Rt(()=>{const{value:n}=U;Array.isArray(n)||fe(n)});const Ve=hr().proxy;function ye(n){const{onUpdateValue:l,"onUpdate:value":x,onInput:j}=e,{nTriggerFormInput:J}=q;l&&ae(l,n),x&&ae(x,n),j&&ae(j,n),ee.value=n,J()}function se(n){const{onChange:l}=e,{nTriggerFormChange:x}=q;l&&ae(l,n),ee.value=n,x()}function A(n){const{onBlur:l}=e,{nTriggerFormBlur:x}=q;l&&ae(l,n),x()}function me(n){const{onFocus:l}=e,{nTriggerFormFocus:x}=q;l&&ae(l,n),x()}function Oe(n){const{onClear:l}=e;l&&ae(l,n)}function M(n){const{onInputBlur:l}=e;l&&ae(l,n)}function xe(n){const{onInputFocus:l}=e;l&&ae(l,n)}function Te(){const{onDeactivate:n}=e;n&&ae(n)}function be(){const{onActivate:n}=e;n&&ae(n)}function Ne(n){const{onClick:l}=e;l&&ae(l,n)}function je(n){const{onWrapperFocus:l}=e;l&&ae(l,n)}function Pe(n){const{onWrapperBlur:l}=e;l&&ae(l,n)}function Xe(){y.value=!0}function Ue(n){y.value=!1,n.target===w.value?Ce(n,1):Ce(n,0)}function Ce(n,l=0,x="input"){const j=n.target.value;if(fe(j),n instanceof InputEvent&&!n.isComposing&&(y.value=!1),e.type==="textarea"){const{value:H}=L;H&&H.syncUnifiedContainer()}if(_=j,y.value)return;Z.recordCursor();const J=Ye(j);if(J)if(!e.pair)x==="input"?ye(j):se(j);else{let{value:H}=U;Array.isArray(H)?H=[H[0],H[1]]:H=["",""],H[l]=j,x==="input"?ye(H):se(H)}Ve.$forceUpdate(),J||At(Z.restoreCursor)}function Ye(n){const{countGraphemes:l,maxlength:x,minlength:j}=e;if(l){let H;if(x!==void 0&&(H===void 0&&(H=l(n)),H>Number(x))||j!==void 0&&(H===void 0&&(H=l(n)),H<Number(x)))return!1}const{allowInput:J}=e;return typeof J=="function"?J(n):!0}function I(n){M(n),n.relatedTarget===u.value&&Te(),n.relatedTarget!==null&&(n.relatedTarget===g.value||n.relatedTarget===w.value||n.relatedTarget===p.value)||(P.value=!1),he(n,"blur"),$.value=null}function G(n,l){xe(n),a.value=!0,P.value=!0,be(),he(n,"focus"),l===0?$.value=g.value:l===1?$.value=w.value:l===2&&($.value=p.value)}function Se(n){e.passivelyActivated&&(Pe(n),he(n,"blur"))}function ot(n){e.passivelyActivated&&(a.value=!0,je(n),he(n,"focus"))}function he(n,l){n.relatedTarget!==null&&(n.relatedTarget===g.value||n.relatedTarget===w.value||n.relatedTarget===p.value||n.relatedTarget===u.value)||(l==="focus"?(me(n),a.value=!0):l==="blur"&&(A(n),a.value=!1))}function at(n,l){Ce(n,l,"change")}function Bt(n){Ne(n)}function it(n){Oe(n),e.pair?(ye(["",""]),se(["",""])):(ye(""),se(""))}function lt(n){const{onMousedown:l}=e;l&&l(n);const{tagName:x}=n.target;if(x!=="INPUT"&&x!=="TEXTAREA"){if(e.resizable){const{value:j}=u;if(j){const{left:J,top:H,width:ke,height:Ee}=j.getBoundingClientRect(),Me=14;if(J+ke-Me<n.clientX&&n.clientX<J+ke&&H+Ee-Me<n.clientY&&n.clientY<H+Ee)return}}n.preventDefault(),a.value||d()}}function kt(){var n;f.value=!0,e.type==="textarea"&&((n=L.value)===null||n===void 0||n.handleMouseEnterWrapper())}function qe(){var n;f.value=!1,e.type==="textarea"&&((n=L.value)===null||n===void 0||n.handleMouseLeaveWrapper())}function Ke(){E.value||B.value==="click"&&(te.value=!te.value)}function Et(n){if(E.value)return;n.preventDefault();const l=j=>{j.preventDefault(),we("mouseup",document,l)};if(De("mouseup",document,l),B.value!=="mousedown")return;te.value=!0;const x=()=>{te.value=!1,we("mouseup",document,x)};De("mouseup",document,x)}function st(n){var l;switch((l=e.onKeydown)===null||l===void 0||l.call(e,n),n.key){case"Escape":ct();break;case"Enter":ze(n);break}}function ze(n){var l,x;if(e.passivelyActivated){const{value:j}=P;if(j){e.internalDeactivateOnEnter&&ct();return}n.preventDefault(),e.type==="textarea"?(l=p.value)===null||l===void 0||l.focus():(x=g.value)===null||x===void 0||x.focus()}}function ct(){e.passivelyActivated&&(P.value=!1,At(()=>{var n;(n=u.value)===null||n===void 0||n.focus()}))}function d(){var n,l,x;E.value||(e.passivelyActivated?(n=u.value)===null||n===void 0||n.focus():((l=p.value)===null||l===void 0||l.focus(),(x=g.value)===null||x===void 0||x.focus()))}function m(){var n;!((n=u.value)===null||n===void 0)&&n.contains(document.activeElement)&&document.activeElement.blur()}function z(){var n,l;(n=p.value)===null||n===void 0||n.select(),(l=g.value)===null||l===void 0||l.select()}function O(){E.value||(p.value?p.value.focus():g.value&&g.value.focus())}function Q(){const{value:n}=u;n!=null&&n.contains(document.activeElement)&&n!==document.activeElement&&ct()}function oe(n){if(e.type==="textarea"){const{value:l}=p;l==null||l.scrollTo(n)}else{const{value:l}=g;l==null||l.scrollTo(n)}}function fe(n){const{type:l,pair:x,autosize:j}=e;if(!x&&j)if(l==="textarea"){const{value:J}=b;J&&(J.textContent=(n??"")+`\r
`)}else{const{value:J}=v;J&&(n?J.textContent=n:J.innerHTML="&nbsp;")}}function Y(){ue()}const ve=T({top:"0"});function Be(n){var l;const{scrollTop:x}=n.target;ve.value.top=`${-x}px`,(l=L.value)===null||l===void 0||l.syncUnifiedContainer()}let dt=null;Ot(()=>{const{autosize:n,type:l}=e;n&&l==="textarea"?dt=xt(U,x=>{!Array.isArray(x)&&x!==_&&fe(x)}):dt==null||dt()});let ut=null;Ot(()=>{e.type==="textarea"?ut=xt(U,n=>{var l;!Array.isArray(n)&&n!==_&&((l=L.value)===null||l===void 0||l.syncUnifiedContainer())}):ut==null||ut()}),vr(Pr,{mergedValueRef:U,maxlengthRef:ge,mergedClsPrefixRef:r,countGraphemesRef:rt(e,"countGraphemes")});const Br={wrapperElRef:u,inputElRef:g,textareaElRef:p,isCompositing:y,focus:d,blur:m,select:z,deactivate:Q,activate:O,scrollTo:oe},kr=Vt("Input",o,r),Kt=k(()=>{const{value:n}=S,{common:{cubicBezierEaseInOut:l},self:{color:x,borderRadius:j,textColor:J,caretColor:H,caretColorError:ke,caretColorWarning:Ee,textDecorationColor:Me,border:Ge,borderDisabled:Qe,borderHover:Mt,borderFocus:Er,placeholderColor:Mr,placeholderColorDisabled:$r,lineHeightTextarea:_r,colorDisabled:Dr,colorFocus:Wr,textColorDisabled:Fr,boxShadowFocus:Or,iconSize:Ar,colorFocusWarning:Ir,boxShadowFocusWarning:Hr,borderWarning:Lr,borderFocusWarning:Vr,borderHoverWarning:Nr,colorFocusError:jr,boxShadowFocusError:Xr,borderError:Ur,borderFocusError:Yr,borderHoverError:qr,clearSize:Kr,clearColor:Gr,clearColorHover:Qr,clearColorPressed:Jr,iconColor:Zr,iconColorDisabled:en,suffixTextColor:tn,countTextColor:rn,countTextColorDisabled:nn,iconColorHover:on,iconColorPressed:an,loadingColor:ln,loadingColorError:sn,loadingColorWarning:cn,[R("padding",n)]:dn,[R("fontSize",n)]:un,[R("height",n)]:fn}}=s.value,{left:hn,right:vn}=gn(dn);return{"--n-bezier":l,"--n-count-text-color":rn,"--n-count-text-color-disabled":nn,"--n-color":x,"--n-font-size":un,"--n-border-radius":j,"--n-height":fn,"--n-padding-left":hn,"--n-padding-right":vn,"--n-text-color":J,"--n-caret-color":H,"--n-text-decoration-color":Me,"--n-border":Ge,"--n-border-disabled":Qe,"--n-border-hover":Mt,"--n-border-focus":Er,"--n-placeholder-color":Mr,"--n-placeholder-color-disabled":$r,"--n-icon-size":Ar,"--n-line-height-textarea":_r,"--n-color-disabled":Dr,"--n-color-focus":Wr,"--n-text-color-disabled":Fr,"--n-box-shadow-focus":Or,"--n-loading-color":ln,"--n-caret-color-warning":Ee,"--n-color-focus-warning":Ir,"--n-box-shadow-focus-warning":Hr,"--n-border-warning":Lr,"--n-border-focus-warning":Vr,"--n-border-hover-warning":Nr,"--n-loading-color-warning":cn,"--n-caret-color-error":ke,"--n-color-focus-error":jr,"--n-box-shadow-focus-error":Xr,"--n-border-error":Ur,"--n-border-focus-error":Yr,"--n-border-hover-error":qr,"--n-loading-color-error":sn,"--n-clear-color":Gr,"--n-clear-size":Kr,"--n-clear-color-hover":Qr,"--n-clear-color-pressed":Jr,"--n-icon-color":Zr,"--n-icon-color-hover":on,"--n-icon-color-pressed":an,"--n-icon-color-disabled":en,"--n-suffix-text-color":tn}}),Ae=i?Nt("input",k(()=>{const{value:n}=S;return n[0]}),Kt,e):void 0;return Object.assign(Object.assign({},Br),{wrapperElRef:u,inputElRef:g,inputMirrorElRef:v,inputEl2Ref:w,textareaElRef:p,textareaMirrorElRef:b,textareaScrollbarInstRef:L,rtlEnabled:kr,uncontrolledValue:ee,mergedValue:U,passwordVisible:te,mergedPlaceholder:D,showPlaceholder1:re,showPlaceholder2:V,mergedFocus:N,isComposing:y,activated:P,showClearButton:K,mergedSize:S,mergedDisabled:E,textDecorationStyle:le,mergedClsPrefix:r,mergedBordered:t,mergedShowPasswordOn:B,placeholderStyle:ve,mergedStatus:F,textAreaScrollContainerWidth:ne,handleTextAreaScroll:Be,handleCompositionStart:Xe,handleCompositionEnd:Ue,handleInput:Ce,handleInputBlur:I,handleInputFocus:G,handleWrapperBlur:Se,handleWrapperFocus:ot,handleMouseEnter:kt,handleMouseLeave:qe,handleMouseDown:lt,handleChange:at,handleClick:Bt,handleClear:it,handlePasswordToggleClick:Ke,handlePasswordToggleMousedown:Et,handleWrapperKeydown:st,handleTextAreaMirrorResize:Y,getTextareaScrollContainer:()=>p.value,mergedTheme:s,cssVars:i?void 0:Kt,themeClass:Ae==null?void 0:Ae.themeClass,onRender:Ae==null?void 0:Ae.onRender})},render(){var e,r;const{mergedClsPrefix:t,mergedStatus:i,themeClass:o,type:s,countGraphemes:u,onRender:p}=this,b=this.$slots;return p==null||p(),c("div",{ref:"wrapperElRef",class:[`${t}-input`,o,i&&`${t}-input--${i}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:s==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&s!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},c("div",{class:`${t}-input-wrapper`},Ie(b.prefix,v=>v&&c("div",{class:`${t}-input__prefix`},v)),s==="textarea"?c(ca,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var v,g;const{textAreaScrollContainerWidth:w}=this,$={width:this.autosize&&w&&`${w}px`};return c(br,null,c("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(v=this.inputProps)===null||v===void 0?void 0:v.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(g=this.inputProps)===null||g===void 0?void 0:g.style,$],onBlur:this.handleInputBlur,onFocus:Z=>this.handleInputFocus(Z,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?c("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,$],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?c(Ht,{onResize:this.handleTextAreaMirrorResize},{default:()=>c("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):c("div",{class:`${t}-input__input`},c("input",Object.assign({type:s==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":s},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(r=this.inputProps)===null||r===void 0?void 0:r.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:v=>this.handleInputFocus(v,0),onInput:v=>this.handleInput(v,0),onChange:v=>this.handleChange(v,0)})),this.showPlaceholder1?c("div",{class:`${t}-input__placeholder`},c("span",null,this.mergedPlaceholder[0])):null,this.autosize?c("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&Ie(b.suffix,v=>v||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?c("div",{class:`${t}-input__suffix`},[Ie(b["clear-icon-placeholder"],g=>(this.clearable||g)&&c(Lt,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>g,icon:()=>{var w,$;return($=(w=this.$slots)["clear-icon"])===null||$===void 0?void 0:$.call(w)}})),this.internalLoadingBeforeSuffix?null:v,this.loading!==void 0?c(ha,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?v:null,this.showCount&&this.type!=="textarea"?c(ur,null,{default:g=>{var w;return(w=b.count)===null||w===void 0?void 0:w.call(b,g)}}):null,this.mergedShowPasswordOn&&this.type==="password"?c("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?et(b["password-visible-icon"],()=>[c(yt,{clsPrefix:t},{default:()=>c(Zo,null)})]):et(b["password-invisible-icon"],()=>[c(yt,{clsPrefix:t},{default:()=>c(ea,null)})])):null]):null)),this.pair?c("span",{class:`${t}-input__separator`},et(b.separator,()=>[this.separator])):null,this.pair?c("div",{class:`${t}-input-wrapper`},c("div",{class:`${t}-input__input`},c("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:v=>this.handleInputFocus(v,1),onInput:v=>this.handleInput(v,1),onChange:v=>this.handleChange(v,1)}),this.showPlaceholder2?c("div",{class:`${t}-input__placeholder`},c("span",null,this.mergedPlaceholder[1])):null),Ie(b.suffix,v=>(this.clearable||v)&&c("div",{class:`${t}-input__suffix`},[this.clearable&&c(Lt,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var g;return(g=b["clear-icon"])===null||g===void 0?void 0:g.call(b)},placeholder:()=>{var g;return(g=b["clear-icon-placeholder"])===null||g===void 0?void 0:g.call(b)}}),v]))):null,this.mergedBordered?c("div",{class:`${t}-input__border`}):null,this.mergedBordered?c("div",{class:`${t}-input__state-border`}):null,this.showCount&&s==="textarea"?c(ur,null,{default:v=>{var g;const{renderCount:w}=this;return w?w(v):(g=b.count)===null||g===void 0?void 0:g.call(b,v)}}):null)}});function $e(e){return fr(e,[255,255,255,.16])}function gt(e){return fr(e,[0,0,0,.12])}const xa=jt("n-button-group"),Ca=C([W("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[X("color",[h("border",{borderColor:"var(--n-border-color)"}),X("disabled",[h("border",{borderColor:"var(--n-border-color-disabled)"})]),_e("disabled",[C("&:focus",[h("state-border",{borderColor:"var(--n-border-color-focus)"})]),C("&:hover",[h("state-border",{borderColor:"var(--n-border-color-hover)"})]),C("&:active",[h("state-border",{borderColor:"var(--n-border-color-pressed)"})]),X("pressed",[h("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),X("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[h("border",{border:"var(--n-border-disabled)"})]),_e("disabled",[C("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[h("state-border",{border:"var(--n-border-focus)"})]),C("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[h("state-border",{border:"var(--n-border-hover)"})]),C("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[h("state-border",{border:"var(--n-border-pressed)"})]),X("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[h("state-border",{border:"var(--n-border-pressed)"})])]),X("loading","cursor: wait;"),W("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[X("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),zt&&"MozBoxSizing"in document.createElement("div").style?C("&::moz-focus-inner",{border:0}):null,h("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),h("border",{border:"var(--n-border)"}),h("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),h("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[W("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[Ct({top:"50%",originalTransform:"translateY(-50%)"})]),va()]),h("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[C("~",[h("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),X("block",`
 display: flex;
 width: 100%;
 `),X("dashed",[h("border, state-border",{borderStyle:"dashed !important"})]),X("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),C("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),C("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),Sa=Object.assign(Object.assign({},Le.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!Tr}}),za=ce({name:"Button",props:Sa,setup(e){const r=T(null),t=T(null),i=T(!1),o=Wt(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),s=Pt(xa,{}),{mergedSizeRef:u}=Sr({},{defaultSize:"medium",mergedSize:S=>{const{size:E}=e;if(E)return E;const{size:F}=s;if(F)return F;const{mergedSize:a}=S||{};return a?a.value:"medium"}}),p=k(()=>e.focusable&&!e.disabled),b=S=>{var E;p.value||S.preventDefault(),!e.nativeFocusBehavior&&(S.preventDefault(),!e.disabled&&p.value&&((E=r.value)===null||E===void 0||E.focus({preventScroll:!0})))},v=S=>{var E;if(!e.disabled&&!e.loading){const{onClick:F}=e;F&&ae(F,S),e.text||(E=t.value)===null||E===void 0||E.play()}},g=S=>{switch(S.key){case"Enter":if(!e.keyboard)return;i.value=!1}},w=S=>{switch(S.key){case"Enter":if(!e.keyboard||e.loading){S.preventDefault();return}i.value=!0}},$=()=>{i.value=!1},{inlineThemeDisabled:Z,mergedClsPrefixRef:L,mergedRtlRef:de}=Ut(e),ee=Le("Button","-button",Ca,Sn,e,L),ie=Vt("Button",de,L),U=k(()=>{const S=ee.value,{common:{cubicBezierEaseInOut:E,cubicBezierEaseOut:F},self:a}=S,{rippleDuration:f,opacityDisabled:y,fontWeight:P,fontWeightStrong:_}=a,D=u.value,{dashed:re,type:V,ghost:N,text:K,color:B,round:te,circle:le,textColor:ne,secondary:ue,tertiary:ge,quaternary:Ve,strong:ye}=e,se={"font-weight":ye?_:P};let A={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const me=V==="tertiary",Oe=V==="default",M=me?"default":V;if(K){const I=ne||B;A={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":I||a[R("textColorText",M)],"--n-text-color-hover":I?$e(I):a[R("textColorTextHover",M)],"--n-text-color-pressed":I?gt(I):a[R("textColorTextPressed",M)],"--n-text-color-focus":I?$e(I):a[R("textColorTextHover",M)],"--n-text-color-disabled":I||a[R("textColorTextDisabled",M)]}}else if(N||re){const I=ne||B;A={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":B||a[R("rippleColor",M)],"--n-text-color":I||a[R("textColorGhost",M)],"--n-text-color-hover":I?$e(I):a[R("textColorGhostHover",M)],"--n-text-color-pressed":I?gt(I):a[R("textColorGhostPressed",M)],"--n-text-color-focus":I?$e(I):a[R("textColorGhostHover",M)],"--n-text-color-disabled":I||a[R("textColorGhostDisabled",M)]}}else if(ue){const I=Oe?a.textColor:me?a.textColorTertiary:a[R("color",M)],G=B||I,Se=V!=="default"&&V!=="tertiary";A={"--n-color":Se?ft(G,{alpha:Number(a.colorOpacitySecondary)}):a.colorSecondary,"--n-color-hover":Se?ft(G,{alpha:Number(a.colorOpacitySecondaryHover)}):a.colorSecondaryHover,"--n-color-pressed":Se?ft(G,{alpha:Number(a.colorOpacitySecondaryPressed)}):a.colorSecondaryPressed,"--n-color-focus":Se?ft(G,{alpha:Number(a.colorOpacitySecondaryHover)}):a.colorSecondaryHover,"--n-color-disabled":a.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":G,"--n-text-color-hover":G,"--n-text-color-pressed":G,"--n-text-color-focus":G,"--n-text-color-disabled":G}}else if(ge||Ve){const I=Oe?a.textColor:me?a.textColorTertiary:a[R("color",M)],G=B||I;ge?(A["--n-color"]=a.colorTertiary,A["--n-color-hover"]=a.colorTertiaryHover,A["--n-color-pressed"]=a.colorTertiaryPressed,A["--n-color-focus"]=a.colorSecondaryHover,A["--n-color-disabled"]=a.colorTertiary):(A["--n-color"]=a.colorQuaternary,A["--n-color-hover"]=a.colorQuaternaryHover,A["--n-color-pressed"]=a.colorQuaternaryPressed,A["--n-color-focus"]=a.colorQuaternaryHover,A["--n-color-disabled"]=a.colorQuaternary),A["--n-ripple-color"]="#0000",A["--n-text-color"]=G,A["--n-text-color-hover"]=G,A["--n-text-color-pressed"]=G,A["--n-text-color-focus"]=G,A["--n-text-color-disabled"]=G}else A={"--n-color":B||a[R("color",M)],"--n-color-hover":B?$e(B):a[R("colorHover",M)],"--n-color-pressed":B?gt(B):a[R("colorPressed",M)],"--n-color-focus":B?$e(B):a[R("colorFocus",M)],"--n-color-disabled":B||a[R("colorDisabled",M)],"--n-ripple-color":B||a[R("rippleColor",M)],"--n-text-color":ne||(B?a.textColorPrimary:me?a.textColorTertiary:a[R("textColor",M)]),"--n-text-color-hover":ne||(B?a.textColorHoverPrimary:a[R("textColorHover",M)]),"--n-text-color-pressed":ne||(B?a.textColorPressedPrimary:a[R("textColorPressed",M)]),"--n-text-color-focus":ne||(B?a.textColorFocusPrimary:a[R("textColorFocus",M)]),"--n-text-color-disabled":ne||(B?a.textColorDisabledPrimary:a[R("textColorDisabled",M)])};let xe={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};K?xe={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:xe={"--n-border":a[R("border",M)],"--n-border-hover":a[R("borderHover",M)],"--n-border-pressed":a[R("borderPressed",M)],"--n-border-focus":a[R("borderFocus",M)],"--n-border-disabled":a[R("borderDisabled",M)]};const{[R("height",D)]:Te,[R("fontSize",D)]:be,[R("padding",D)]:Ne,[R("paddingRound",D)]:je,[R("iconSize",D)]:Pe,[R("borderRadius",D)]:Xe,[R("iconMargin",D)]:Ue,waveOpacity:Ce}=a,Ye={"--n-width":le&&!K?Te:"initial","--n-height":K?"initial":Te,"--n-font-size":be,"--n-padding":le||K?"initial":te?je:Ne,"--n-icon-size":Pe,"--n-icon-margin":Ue,"--n-border-radius":K?"initial":le||te?Te:Xe};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":E,"--n-bezier-ease-out":F,"--n-ripple-duration":f,"--n-opacity-disabled":y,"--n-wave-opacity":Ce},se),A),xe),Ye)}),q=Z?Nt("button",k(()=>{let S="";const{dashed:E,type:F,ghost:a,text:f,color:y,round:P,circle:_,textColor:D,secondary:re,tertiary:V,quaternary:N,strong:K}=e;E&&(S+="a"),a&&(S+="b"),f&&(S+="c"),P&&(S+="d"),_&&(S+="e"),re&&(S+="f"),V&&(S+="g"),N&&(S+="h"),K&&(S+="i"),y&&(S+="j"+Qt(y)),D&&(S+="k"+Qt(D));const{value:B}=u;return S+="l"+B[0],S+="m"+F[0],S}),U,e):void 0;return{selfElRef:r,waveElRef:t,mergedClsPrefix:L,mergedFocusable:p,mergedSize:u,showBorder:o,enterPressed:i,rtlEnabled:ie,handleMousedown:b,handleKeydown:w,handleBlur:$,handleKeyup:g,handleClick:v,customColorCssVars:k(()=>{const{color:S}=e;if(!S)return null;const E=$e(S);return{"--n-border-color":S,"--n-border-color-hover":E,"--n-border-color-pressed":gt(S),"--n-border-color-focus":E,"--n-border-color-disabled":S}}),cssVars:Z?void 0:U,themeClass:q==null?void 0:q.themeClass,onRender:q==null?void 0:q.onRender}},render(){const{mergedClsPrefix:e,tag:r,onRender:t}=this;t==null||t();const i=Ie(this.$slots.default,o=>o&&c("span",{class:`${e}-button__content`},o));return c(r,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&i,c(mn,{width:!0},{default:()=>Ie(this.$slots.icon,o=>(this.loading||this.renderIcon||o)&&c("span",{class:`${e}-button__icon`,style:{margin:wn(this.$slots.default)?"0":""}},c(qt,null,{default:()=>this.loading?c(zr,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):c("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():o)})))}),this.iconPlacement==="left"&&i,this.text?null:c(ua,{ref:"waveElRef",clsPrefix:e}),this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),Ea=za;export{zr as N,Ht as V,Gt as W,Ba as X,ka as a,Ea as b,we as c,ca as d,Wn as e,ia as f,kn as g,ae as h,Fn as i,Qt as j,ha as k,Sr as l,De as o,sr as r,Jo as u};
