import{c as se,o as Pe,ak as Zt,al as Jt,h as O,r as T,j as r,ab as Qt,v as at,a2 as en,B as xt,m as st,T as Ct,H as te,w as ze,L as ot,A as tn,X as nn,ah as on,aa as ln}from"./framework-ffef1a40.js";import{V as St,a as Ve,az as lt,p as Le,b as E,m as _,d as le,u as ct,h as fe,k as Ie,S as kt,aA as rn,am as an,j as q,J as Re,e as X,A as Ce,aB as sn,E as cn,v as Je,q as dn,r as un,c as fn,aC as hn,aD as vn,w as gn,R as bn,aE as pn}from"./app-cacd0493.js";import{e as Rt,g as He,i as dt,f as zt,h as mn,N as wn,u as it,V as yn,a as xn,b as Cn,j as ut}from"./Popover-1f69c6ca.js";import{b as Ft,N as Sn,W as kn,u as ft,g as Rn}from"./Scrollbar-ddf979ce.js";import{V as ht,e as vt,r as rt,b as zn,c as de,u as Fn}from"./browser-90c586ea.js";import{a as Tn}from"./Input-443ee73c.js";import{c as gt}from"./Button-0d2c035d.js";import{b as On}from"./utils-76c4cc76.js";import{h as je,a as Mn,c as Pn}from"./create-657dc0dd.js";function In(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Qe(e){const o=e.filter(n=>n!==void 0);if(o.length!==0)return o.length===1?o[0]:n=>{e.forEach(i=>{i&&i(n)})}}const Bn=new WeakSet;function _n(e){Bn.add(e)}function bt(e){return e&-e}class $n{constructor(o,n){this.l=o,this.min=n;const i=new Array(o+1);for(let s=0;s<o+1;++s)i[s]=0;this.ft=i}add(o,n){if(n===0)return;const{l:i,ft:s}=this;for(o+=1;o<=i;)s[o]+=n,o+=bt(o)}get(o){return this.sum(o+1)-this.sum(o)}sum(o){if(o===void 0&&(o=this.l),o<=0)return 0;const{ft:n,min:i,l:s}=this;if(o>s)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let d=o*i;for(;o>0;)d+=n[o],o-=bt(o);return d}getBound(o){let n=0,i=this.l;for(;i>n;){const s=Math.floor((n+i)/2),d=this.sum(s);if(d>o){i=s;continue}else if(d<o){if(n===s)return this.sum(n+1)<=o?n+1:s;n=s}else return s}return n}}let De;function En(){return De===void 0&&("matchMedia"in window?De=window.matchMedia("(pointer:coarse)").matches:De=!1),De}let et;function pt(){return et===void 0&&(et="chrome"in window?window.devicePixelRatio:1),et}const An=He(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[He("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[He("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Nn=se({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const o=St();An.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Rt,ssr:o}),Pe(()=>{const{defaultScrollIndex:v,defaultScrollKey:g}=e;v!=null?f({index:v}):g!=null&&f({key:g})});let n=!1,i=!1;Zt(()=>{if(n=!1,!i){i=!0;return}f({top:x.value,left:m})}),Jt(()=>{n=!0,i||(i=!0)});const s=O(()=>{const v=new Map,{keyField:g}=e;return e.items.forEach((P,H)=>{v.set(P[g],H)}),v}),d=T(null),b=T(void 0),a=new Map,R=O(()=>{const{items:v,itemSize:g,keyField:P}=e,H=new $n(v.length,g);return v.forEach((j,V)=>{const A=j[P],W=a.get(A);W!==void 0&&H.add(V,W)}),H}),y=T(0);let m=0;const x=T(0),F=Ve(()=>Math.max(R.value.getBound(x.value-lt(e.paddingTop))-1,0)),w=O(()=>{const{value:v}=b;if(v===void 0)return[];const{items:g,itemSize:P}=e,H=F.value,j=Math.min(H+Math.ceil(v/P+1),g.length-1),V=[];for(let A=H;A<=j;++A)V.push(g[A]);return V}),f=(v,g)=>{if(typeof v=="number"){S(v,g,"auto");return}const{left:P,top:H,index:j,key:V,position:A,behavior:W,debounce:l=!0}=v;if(P!==void 0||H!==void 0)S(P,H,W);else if(j!==void 0)C(j,W,l);else if(V!==void 0){const h=s.value.get(V);h!==void 0&&C(h,W,l)}else A==="bottom"?S(0,Number.MAX_SAFE_INTEGER,W):A==="top"&&S(0,0,W)};let k,M=null;function C(v,g,P){const{value:H}=R,j=H.sum(v)+lt(e.paddingTop);if(!P)d.value.scrollTo({left:0,top:j,behavior:g});else{k=v,M!==null&&window.clearTimeout(M),M=window.setTimeout(()=>{k=void 0,M=null},16);const{scrollTop:V,offsetHeight:A}=d.value;if(j>V){const W=H.get(v);j+W<=V+A||d.value.scrollTo({left:0,top:j+W-A,behavior:g})}else d.value.scrollTo({left:0,top:j,behavior:g})}}function S(v,g,P){d.value.scrollTo({left:v,top:g,behavior:P})}function K(v,g){var P,H,j;if(n||e.ignoreItemResize||ne(g.target))return;const{value:V}=R,A=s.value.get(v),W=V.get(A),l=(j=(H=(P=g.borderBoxSize)===null||P===void 0?void 0:P[0])===null||H===void 0?void 0:H.blockSize)!==null&&j!==void 0?j:g.contentRect.height;if(l===W)return;l-e.itemSize===0?a.delete(v):a.set(v,l-e.itemSize);const L=l-W;if(L===0)return;V.add(A,L);const J=d.value;if(J!=null){if(k===void 0){const re=V.sum(A);J.scrollTop>re&&J.scrollBy(0,L)}else if(A<k)J.scrollBy(0,L);else if(A===k){const re=V.sum(A);l+re>J.scrollTop+J.offsetHeight&&J.scrollBy(0,L)}ie()}y.value++}const Z=!En();let G=!1;function D(v){var g;(g=e.onScroll)===null||g===void 0||g.call(e,v),(!Z||!G)&&ie()}function Y(v){var g;if((g=e.onWheel)===null||g===void 0||g.call(e,v),Z){const P=d.value;if(P!=null){if(v.deltaX===0&&(P.scrollTop===0&&v.deltaY<=0||P.scrollTop+P.offsetHeight>=P.scrollHeight&&v.deltaY>=0))return;v.preventDefault(),P.scrollTop+=v.deltaY/pt(),P.scrollLeft+=v.deltaX/pt(),ie(),G=!0,On(()=>{G=!1})}}}function ee(v){if(n||ne(v.target)||v.contentRect.height===b.value)return;b.value=v.contentRect.height;const{onResize:g}=e;g!==void 0&&g(v)}function ie(){const{value:v}=d;v!=null&&(x.value=v.scrollTop,m=v.scrollLeft)}function ne(v){let g=v;for(;g!==null;){if(g.style.display==="none")return!0;g=g.parentElement}return!1}return{listHeight:b,listStyle:{overflow:"auto"},keyToIndex:s,itemsStyle:O(()=>{const{itemResizable:v}=e,g=Le(R.value.sum());return y.value,[e.itemsStyle,{boxSizing:"content-box",height:v?"":g,minHeight:v?g:"",paddingTop:Le(e.paddingTop),paddingBottom:Le(e.paddingBottom)}]}),visibleItemsStyle:O(()=>(y.value,{transform:`translateY(${Le(R.value.sum(F.value))})`})),viewportItems:w,listElRef:d,itemsElRef:T(null),scrollTo:f,handleListResize:ee,handleListScroll:D,handleListWheel:Y,handleItemResize:K}},render(){const{itemResizable:e,keyField:o,keyToIndex:n,visibleItemsTag:i}=this;return r(ht,{onResize:this.handleListResize},{default:()=>{var s,d;return r("div",Qt(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?r("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[r(i,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(b=>{const a=b[o],R=n.get(a),y=this.$slots.default({item:b,index:R})[0];return e?r(ht,{key:a,onResize:m=>this.handleItemResize(a,m)},{default:()=>y}):(y.key=a,y)})})]):(d=(s=this.$slots).empty)===null||d===void 0?void 0:d.call(s)])}})}}),xe="v-hidden",Ln=He("[v-hidden]",{display:"none!important"}),mt=se({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:o}){const n=T(null),i=T(null);function s(){const{value:b}=n,{getCounter:a,getTail:R}=e;let y;if(a!==void 0?y=a():y=i.value,!b||!y)return;y.hasAttribute(xe)&&y.removeAttribute(xe);const{children:m}=b,x=b.offsetWidth,F=[],w=o.tail?R==null?void 0:R():null;let f=w?w.offsetWidth:0,k=!1;const M=b.children.length-(o.tail?1:0);for(let S=0;S<M-1;++S){if(S<0)continue;const K=m[S];if(k){K.hasAttribute(xe)||K.setAttribute(xe,"");continue}else K.hasAttribute(xe)&&K.removeAttribute(xe);const Z=K.offsetWidth;if(f+=Z,F[S]=Z,f>x){const{updateCounter:G}=e;for(let D=S;D>=0;--D){const Y=M-1-D;G!==void 0?G(Y):y.textContent=`${Y}`;const ee=y.offsetWidth;if(f-=F[D],f+ee<=x||D===0){k=!0,S=D-1,w&&(S===-1?(w.style.maxWidth=`${x-ee}px`,w.style.boxSizing="border-box"):w.style.maxWidth="");break}}}}const{onUpdateOverflow:C}=e;k?C!==void 0&&C(!0):(C!==void 0&&C(!1),y.setAttribute(xe,""))}const d=St();return Ln.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Rt,ssr:d}),Pe(s),{selfRef:n,counterRef:i,sync:s}},render(){const{$slots:e}=this;return at(this.sync),r("div",{class:"v-overflow",ref:"selfRef"},[en(e,"default"),e.counter?e.counter():r("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function Tt(e,o){o&&(Pe(()=>{const{value:n}=e;n&&vt.registerHandler(n,o)}),xt(()=>{const{value:n}=e;n&&vt.unregisterHandler(n)}))}const Dn=se({name:"Checkmark",render(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},r("g",{fill:"none"},r("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Vn=se({name:"Empty",render(){return r("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),r("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Hn=se({props:{onFocus:Function,onBlur:Function},setup(e){return()=>r("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}}),jn=E("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[_("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[le("+",[_("description",`
 margin-top: 8px;
 `)])]),_("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),_("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),Wn=Object.assign(Object.assign({},fe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Kn=se({name:"Empty",props:Wn,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=ct(e),i=fe("Empty","-empty",jn,rn,e,o),{localeRef:s}=Ft("Empty"),d=st(an,null),b=O(()=>{var m,x,F;return(m=e.description)!==null&&m!==void 0?m:(F=(x=d==null?void 0:d.mergedComponentPropsRef.value)===null||x===void 0?void 0:x.Empty)===null||F===void 0?void 0:F.description}),a=O(()=>{var m,x;return((x=(m=d==null?void 0:d.mergedComponentPropsRef.value)===null||m===void 0?void 0:m.Empty)===null||x===void 0?void 0:x.renderIcon)||(()=>r(Vn,null))}),R=O(()=>{const{size:m}=e,{common:{cubicBezierEaseInOut:x},self:{[q("iconSize",m)]:F,[q("fontSize",m)]:w,textColor:f,iconColor:k,extraTextColor:M}}=i.value;return{"--n-icon-size":F,"--n-font-size":w,"--n-bezier":x,"--n-text-color":f,"--n-icon-color":k,"--n-extra-text-color":M}}),y=n?Ie("empty",O(()=>{let m="";const{size:x}=e;return m+=x[0],m}),R,e):void 0;return{mergedClsPrefix:o,mergedRenderIcon:a,localizedDescription:O(()=>b.value||s.value.description),cssVars:n?void 0:R,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){const{$slots:e,mergedClsPrefix:o,onRender:n}=this;return n==null||n(),r("div",{class:[`${o}-empty`,this.themeClass],style:this.cssVars},this.showIcon?r("div",{class:`${o}-empty__icon`},e.icon?e.icon():r(kt,{clsPrefix:o},{default:this.mergedRenderIcon})):null,this.showDescription?r("div",{class:`${o}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?r("div",{class:`${o}-empty__extra`},e.extra()):null)}});function Un(e,o){return r(Ct,{name:"fade-in-scale-up-transition"},{default:()=>e?r(kt,{clsPrefix:o,class:`${o}-base-select-option__check`},{default:()=>r(Dn)}):null})}const wt=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:o,pendingTmNodeRef:n,multipleRef:i,valueSetRef:s,renderLabelRef:d,renderOptionRef:b,labelFieldRef:a,valueFieldRef:R,showCheckmarkRef:y,nodePropsRef:m,handleOptionClick:x,handleOptionMouseEnter:F}=st(dt),w=Ve(()=>{const{value:C}=n;return C?e.tmNode.key===C.key:!1});function f(C){const{tmNode:S}=e;S.disabled||x(C,S)}function k(C){const{tmNode:S}=e;S.disabled||F(C,S)}function M(C){const{tmNode:S}=e,{value:K}=w;S.disabled||K||F(C,S)}return{multiple:i,isGrouped:Ve(()=>{const{tmNode:C}=e,{parent:S}=C;return S&&S.rawNode.type==="group"}),showCheckmark:y,nodeProps:m,isPending:w,isSelected:Ve(()=>{const{value:C}=o,{value:S}=i;if(C===null)return!1;const K=e.tmNode.rawNode[R.value];if(S){const{value:Z}=s;return Z.has(K)}else return C===K}),labelField:a,renderLabel:d,renderOption:b,handleMouseMove:M,handleMouseEnter:k,handleClick:f}},render(){const{clsPrefix:e,tmNode:{rawNode:o},isSelected:n,isPending:i,isGrouped:s,showCheckmark:d,nodeProps:b,renderOption:a,renderLabel:R,handleClick:y,handleMouseEnter:m,handleMouseMove:x}=this,F=Un(n,e),w=R?[R(o,n),d&&F]:[Re(o[this.labelField],o,n),d&&F],f=b==null?void 0:b(o),k=r("div",Object.assign({},f,{class:[`${e}-base-select-option`,o.class,f==null?void 0:f.class,{[`${e}-base-select-option--disabled`]:o.disabled,[`${e}-base-select-option--selected`]:n,[`${e}-base-select-option--grouped`]:s,[`${e}-base-select-option--pending`]:i,[`${e}-base-select-option--show-checkmark`]:d}],style:[(f==null?void 0:f.style)||"",o.style||""],onClick:Qe([y,f==null?void 0:f.onClick]),onMouseenter:Qe([m,f==null?void 0:f.onMouseenter]),onMousemove:Qe([x,f==null?void 0:f.onMousemove])}),r("div",{class:`${e}-base-select-option__content`},w));return o.render?o.render({node:k,option:o,selected:n}):a?a({node:k,option:o,selected:n}):k}}),yt=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:o,labelFieldRef:n,nodePropsRef:i}=st(dt);return{labelField:n,nodeProps:i,renderLabel:e,renderOption:o}},render(){const{clsPrefix:e,renderLabel:o,renderOption:n,nodeProps:i,tmNode:{rawNode:s}}=this,d=i==null?void 0:i(s),b=o?o(s,!1):Re(s[this.labelField],s,!1),a=r("div",Object.assign({},d,{class:[`${e}-base-select-group-header`,d==null?void 0:d.class]}),b);return s.render?s.render({node:a,option:s}):n?n({node:a,option:s,selected:!1}):a}}),qn=E("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[E("scrollbar",`
 max-height: var(--n-height);
 `),E("virtual-list",`
 max-height: var(--n-height);
 `),E("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[_("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),E("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),E("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),_("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),_("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),_("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),E("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),E("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[X("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),le("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),le("&:active",`
 color: var(--n-option-text-color-pressed);
 `),X("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),X("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),X("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),X("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),X("disabled",`
 cursor: not-allowed;
 `,[Ce("selected",`
 color: var(--n-option-text-color-disabled);
 `),X("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),_("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[zt({enterScale:"0.5"})])])]),Gn=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const o=fe("InternalSelectMenu","-internal-select-menu",qn,sn,e,te(e,"clsPrefix")),n=T(null),i=T(null),s=T(null),d=O(()=>e.treeMate.getFlattenedNodes()),b=O(()=>Mn(d.value)),a=T(null);function R(){const{treeMate:l}=e;let h=null;const{value:L}=e;L===null?h=l.getFirstAvailableNode():(e.multiple?h=l.getNode((L||[])[(L||[]).length-1]):h=l.getNode(L),(!h||h.disabled)&&(h=l.getFirstAvailableNode())),v(h||null)}function y(){const{value:l}=a;l&&!e.treeMate.getNode(l.key)&&(a.value=null)}let m;ze(()=>e.show,l=>{l?m=ze(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?R():y(),at(g)):y()},{immediate:!0}):m==null||m()},{immediate:!0}),xt(()=>{m==null||m()});const x=O(()=>lt(o.value.self[q("optionHeight",e.size)])),F=O(()=>Je(o.value.self[q("padding",e.size)])),w=O(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),f=O(()=>{const l=d.value;return l&&l.length===0});function k(l){const{onToggle:h}=e;h&&h(l)}function M(l){const{onScroll:h}=e;h&&h(l)}function C(l){var h;(h=s.value)===null||h===void 0||h.sync(),M(l)}function S(){var l;(l=s.value)===null||l===void 0||l.sync()}function K(){const{value:l}=a;return l||null}function Z(l,h){h.disabled||v(h,!1)}function G(l,h){h.disabled||k(h)}function D(l){var h;je(l,"action")||(h=e.onKeyup)===null||h===void 0||h.call(e,l)}function Y(l){var h;je(l,"action")||(h=e.onKeydown)===null||h===void 0||h.call(e,l)}function ee(l){var h;(h=e.onMousedown)===null||h===void 0||h.call(e,l),!e.focusable&&l.preventDefault()}function ie(){const{value:l}=a;l&&v(l.getNext({loop:!0}),!0)}function ne(){const{value:l}=a;l&&v(l.getPrev({loop:!0}),!0)}function v(l,h=!1){a.value=l,h&&g()}function g(){var l,h;const L=a.value;if(!L)return;const J=b.value(L.key);J!==null&&(e.virtualScroll?(l=i.value)===null||l===void 0||l.scrollTo({index:J}):(h=s.value)===null||h===void 0||h.scrollTo({index:J,elSize:x.value}))}function P(l){var h,L;!((h=n.value)===null||h===void 0)&&h.contains(l.target)&&((L=e.onFocus)===null||L===void 0||L.call(e,l))}function H(l){var h,L;!((h=n.value)===null||h===void 0)&&h.contains(l.relatedTarget)||(L=e.onBlur)===null||L===void 0||L.call(e,l)}ot(dt,{handleOptionMouseEnter:Z,handleOptionClick:G,valueSetRef:w,pendingTmNodeRef:a,nodePropsRef:te(e,"nodeProps"),showCheckmarkRef:te(e,"showCheckmark"),multipleRef:te(e,"multiple"),valueRef:te(e,"value"),renderLabelRef:te(e,"renderLabel"),renderOptionRef:te(e,"renderOption"),labelFieldRef:te(e,"labelField"),valueFieldRef:te(e,"valueField")}),ot(mn,n),Pe(()=>{const{value:l}=s;l&&l.sync()});const j=O(()=>{const{size:l}=e,{common:{cubicBezierEaseInOut:h},self:{height:L,borderRadius:J,color:re,groupHeaderTextColor:pe,actionDividerColor:me,optionTextColorPressed:ve,optionTextColor:he,optionTextColorDisabled:ce,optionTextColorActive:oe,optionOpacityDisabled:ge,optionCheckColor:ue,actionTextColor:Fe,optionColorPending:we,optionColorActive:ye,loadingColor:Te,loadingSize:Oe,optionColorActivePending:Me,[q("optionFontSize",l)]:Se,[q("optionHeight",l)]:ke,[q("optionPadding",l)]:ae}}=o.value;return{"--n-height":L,"--n-action-divider-color":me,"--n-action-text-color":Fe,"--n-bezier":h,"--n-border-radius":J,"--n-color":re,"--n-option-font-size":Se,"--n-group-header-text-color":pe,"--n-option-check-color":ue,"--n-option-color-pending":we,"--n-option-color-active":ye,"--n-option-color-active-pending":Me,"--n-option-height":ke,"--n-option-opacity-disabled":ge,"--n-option-text-color":he,"--n-option-text-color-active":oe,"--n-option-text-color-disabled":ce,"--n-option-text-color-pressed":ve,"--n-option-padding":ae,"--n-option-padding-left":Je(ae,"left"),"--n-option-padding-right":Je(ae,"right"),"--n-loading-color":Te,"--n-loading-size":Oe}}),{inlineThemeDisabled:V}=e,A=V?Ie("internal-select-menu",O(()=>e.size[0]),j,e):void 0,W={selfRef:n,next:ie,prev:ne,getPendingTmNode:K};return Tt(n,e.onResize),Object.assign({mergedTheme:o,virtualListRef:i,scrollbarRef:s,itemSize:x,padding:F,flattenedNodes:d,empty:f,virtualListContainer(){const{value:l}=i;return l==null?void 0:l.listElRef},virtualListContent(){const{value:l}=i;return l==null?void 0:l.itemsElRef},doScroll:M,handleFocusin:P,handleFocusout:H,handleKeyUp:D,handleKeyDown:Y,handleMouseDown:ee,handleVirtualListResize:S,handleVirtualListScroll:C,cssVars:V?void 0:j,themeClass:A==null?void 0:A.themeClass,onRender:A==null?void 0:A.onRender},W)},render(){const{$slots:e,virtualScroll:o,clsPrefix:n,mergedTheme:i,themeClass:s,onRender:d}=this;return d==null||d(),r("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${n}-base-select-menu`,s,this.multiple&&`${n}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?r("div",{class:`${n}-base-select-menu__loading`},r(cn,{clsPrefix:n,strokeWidth:20})):this.empty?r("div",{class:`${n}-base-select-menu__empty`,"data-empty":!0},zn(e.empty,()=>[r(Kn,{theme:i.peers.Empty,themeOverrides:i.peerOverrides.Empty})])):r(Sn,{ref:"scrollbarRef",theme:i.peers.Scrollbar,themeOverrides:i.peerOverrides.Scrollbar,scrollable:this.scrollable,container:o?this.virtualListContainer:void 0,content:o?this.virtualListContent:void 0,onScroll:o?void 0:this.doScroll},{default:()=>o?r(Nn,{ref:"virtualListRef",class:`${n}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:b})=>b.isGroup?r(yt,{key:b.key,clsPrefix:n,tmNode:b}):b.ignored?null:r(wt,{clsPrefix:n,key:b.key,tmNode:b})}):r("div",{class:`${n}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(b=>b.isGroup?r(yt,{key:b.key,clsPrefix:n,tmNode:b}):r(wt,{clsPrefix:n,key:b.key,tmNode:b})))}),rt(e.action,b=>b&&[r("div",{class:`${n}-base-select-menu__action`,"data-action":!0,key:"action"},b),r(Hn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Yn={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Xn=E("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[X("strong",`
 font-weight: var(--n-font-weight-strong);
 `),_("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),_("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),_("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),_("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),X("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[_("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),_("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),X("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),X("icon, avatar",[X("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),X("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),X("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Ce("disabled",[le("&:hover","background-color: var(--n-color-hover-checkable);",[Ce("checked","color: var(--n-text-color-hover-checkable);")]),le("&:active","background-color: var(--n-color-pressed-checkable);",[Ce("checked","color: var(--n-text-color-pressed-checkable);")])]),X("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Ce("disabled",[le("&:hover","background-color: var(--n-color-checked-hover);"),le("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Zn=Object.assign(Object.assign(Object.assign({},fe.props),Yn),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Jn=fn("n-tag"),tt=se({name:"Tag",props:Zn,setup(e){const o=T(null),{mergedBorderedRef:n,mergedClsPrefixRef:i,inlineThemeDisabled:s,mergedRtlRef:d}=ct(e),b=fe("Tag","-tag",Xn,hn,e,i);ot(Jn,{roundRef:te(e,"round")});function a(w){if(!e.disabled&&e.checkable){const{checked:f,onCheckedChange:k,onUpdateChecked:M,"onUpdate:checked":C}=e;M&&M(!f),C&&C(!f),k&&k(!f)}}function R(w){if(e.triggerClickOnClose||w.stopPropagation(),!e.disabled){const{onClose:f}=e;f&&de(f,w)}}const y={setTextContent(w){const{value:f}=o;f&&(f.textContent=w)}},m=dn("Tag",d,i),x=O(()=>{const{type:w,size:f,color:{color:k,textColor:M}={}}=e,{common:{cubicBezierEaseInOut:C},self:{padding:S,closeMargin:K,closeMarginRtl:Z,borderRadius:G,opacityDisabled:D,textColorCheckable:Y,textColorHoverCheckable:ee,textColorPressedCheckable:ie,textColorChecked:ne,colorCheckable:v,colorHoverCheckable:g,colorPressedCheckable:P,colorChecked:H,colorCheckedHover:j,colorCheckedPressed:V,closeBorderRadius:A,fontWeightStrong:W,[q("colorBordered",w)]:l,[q("closeSize",f)]:h,[q("closeIconSize",f)]:L,[q("fontSize",f)]:J,[q("height",f)]:re,[q("color",w)]:pe,[q("textColor",w)]:me,[q("border",w)]:ve,[q("closeIconColor",w)]:he,[q("closeIconColorHover",w)]:ce,[q("closeIconColorPressed",w)]:oe,[q("closeColorHover",w)]:ge,[q("closeColorPressed",w)]:ue}}=b.value;return{"--n-font-weight-strong":W,"--n-avatar-size-override":`calc(${re} - 8px)`,"--n-bezier":C,"--n-border-radius":G,"--n-border":ve,"--n-close-icon-size":L,"--n-close-color-pressed":ue,"--n-close-color-hover":ge,"--n-close-border-radius":A,"--n-close-icon-color":he,"--n-close-icon-color-hover":ce,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":he,"--n-close-margin":K,"--n-close-margin-rtl":Z,"--n-close-size":h,"--n-color":k||(n.value?l:pe),"--n-color-checkable":v,"--n-color-checked":H,"--n-color-checked-hover":j,"--n-color-checked-pressed":V,"--n-color-hover-checkable":g,"--n-color-pressed-checkable":P,"--n-font-size":J,"--n-height":re,"--n-opacity-disabled":D,"--n-padding":S,"--n-text-color":M||me,"--n-text-color-checkable":Y,"--n-text-color-checked":ne,"--n-text-color-hover-checkable":ee,"--n-text-color-pressed-checkable":ie}}),F=s?Ie("tag",O(()=>{let w="";const{type:f,size:k,color:{color:M,textColor:C}={}}=e;return w+=f[0],w+=k[0],M&&(w+=`a${gt(M)}`),C&&(w+=`b${gt(C)}`),n.value&&(w+="c"),w}),x,e):void 0;return Object.assign(Object.assign({},y),{rtlEnabled:m,mergedClsPrefix:i,contentRef:o,mergedBordered:n,handleClick:a,handleCloseClick:R,cssVars:s?void 0:x,themeClass:F==null?void 0:F.themeClass,onRender:F==null?void 0:F.onRender})},render(){var e,o;const{mergedClsPrefix:n,rtlEnabled:i,closable:s,color:{borderColor:d}={},round:b,onRender:a,$slots:R}=this;a==null||a();const y=rt(R.avatar,x=>x&&r("div",{class:`${n}-tag__avatar`},x)),m=rt(R.icon,x=>x&&r("div",{class:`${n}-tag__icon`},x));return r("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:i,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:b,[`${n}-tag--avatar`]:y,[`${n}-tag--icon`]:m,[`${n}-tag--closable`]:s}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||y,r("span",{class:`${n}-tag__content`,ref:"contentRef"},(o=(e=this.$slots).default)===null||o===void 0?void 0:o.call(e)),!this.checkable&&s?r(un,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:b,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?r("div",{class:`${n}-tag__border`,style:{borderColor:d}}):null)}}),Qn=le([E("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[E("base-loading",`
 color: var(--n-loading-color);
 `),E("base-selection-tags","min-height: var(--n-height);"),_("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),_("state-border",`
 z-index: 1;
 border-color: #0000;
 `),E("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[_("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),E("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[_("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),E("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[_("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),E("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),E("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[E("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[_("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),_("render-label",`
 color: var(--n-text-color);
 `)]),Ce("disabled",[le("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),X("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),X("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),E("base-selection-label","background-color: var(--n-color-active);"),E("base-selection-tags","background-color: var(--n-color-active);")])]),X("disabled","cursor: not-allowed;",[_("arrow",`
 color: var(--n-arrow-color-disabled);
 `),E("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[E("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),_("render-label",`
 color: var(--n-text-color-disabled);
 `)]),E("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),E("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),E("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[_("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),_("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>X(`${e}-status`,[_("state-border",`border: var(--n-border-${e});`),Ce("disabled",[le("&:hover",[_("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),X("active",[_("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),E("base-selection-label",`background-color: var(--n-color-active-${e});`),E("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),X("focus",[_("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),E("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),E("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[le("&:last-child","padding-right: 0;"),E("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[_("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),eo=se({name:"InternalSelection",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const o=T(null),n=T(null),i=T(null),s=T(null),d=T(null),b=T(null),a=T(null),R=T(null),y=T(null),m=T(null),x=T(!1),F=T(!1),w=T(!1),f=fe("InternalSelection","-internal-selection",Qn,vn,e,te(e,"clsPrefix")),k=O(()=>e.clearable&&!e.disabled&&(w.value||e.active)),M=O(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),C=O(()=>{const c=e.selectedOption;if(c)return c[e.labelField]}),S=O(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function K(){var c;const{value:p}=o;if(p){const{value:U}=n;U&&(U.style.width=`${p.offsetWidth}px`,e.maxTagCount!=="responsive"&&((c=y.value)===null||c===void 0||c.sync()))}}function Z(){const{value:c}=m;c&&(c.style.display="none")}function G(){const{value:c}=m;c&&(c.style.display="inline-block")}ze(te(e,"active"),c=>{c||Z()}),ze(te(e,"pattern"),()=>{e.multiple&&at(K)});function D(c){const{onFocus:p}=e;p&&p(c)}function Y(c){const{onBlur:p}=e;p&&p(c)}function ee(c){const{onDeleteOption:p}=e;p&&p(c)}function ie(c){const{onClear:p}=e;p&&p(c)}function ne(c){const{onPatternInput:p}=e;p&&p(c)}function v(c){var p;(!c.relatedTarget||!(!((p=i.value)===null||p===void 0)&&p.contains(c.relatedTarget)))&&D(c)}function g(c){var p;!((p=i.value)===null||p===void 0)&&p.contains(c.relatedTarget)||Y(c)}function P(c){ie(c)}function H(){w.value=!0}function j(){w.value=!1}function V(c){!e.active||!e.filterable||c.target!==n.value&&c.preventDefault()}function A(c){ee(c)}function W(c){if(c.key==="Backspace"&&!l.value&&!e.pattern.length){const{selectedOptions:p}=e;p!=null&&p.length&&A(p[p.length-1])}}const l=T(!1);let h=null;function L(c){const{value:p}=o;if(p){const U=c.target.value;p.textContent=U,K()}e.ignoreComposition&&l.value?h=c:ne(c)}function J(){l.value=!0}function re(){l.value=!1,e.ignoreComposition&&ne(h),h=null}function pe(c){var p;F.value=!0,(p=e.onPatternFocus)===null||p===void 0||p.call(e,c)}function me(c){var p;F.value=!1,(p=e.onPatternBlur)===null||p===void 0||p.call(e,c)}function ve(){var c,p;if(e.filterable)F.value=!1,(c=b.value)===null||c===void 0||c.blur(),(p=n.value)===null||p===void 0||p.blur();else if(e.multiple){const{value:U}=s;U==null||U.blur()}else{const{value:U}=d;U==null||U.blur()}}function he(){var c,p,U;e.filterable?(F.value=!1,(c=b.value)===null||c===void 0||c.focus()):e.multiple?(p=s.value)===null||p===void 0||p.focus():(U=d.value)===null||U===void 0||U.focus()}function ce(){const{value:c}=n;c&&(G(),c.focus())}function oe(){const{value:c}=n;c&&c.blur()}function ge(c){const{value:p}=a;p&&p.setTextContent(`+${c}`)}function ue(){const{value:c}=R;return c}function Fe(){return n.value}let we=null;function ye(){we!==null&&window.clearTimeout(we)}function Te(){e.disabled||e.active||(ye(),we=window.setTimeout(()=>{S.value&&(x.value=!0)},100))}function Oe(){ye()}function Me(c){c||(ye(),x.value=!1)}ze(S,c=>{c||(x.value=!1)}),Pe(()=>{tn(()=>{const c=b.value;c&&(c.tabIndex=e.disabled||F.value?-1:0)})}),Tt(i,e.onResize);const{inlineThemeDisabled:Se}=e,ke=O(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:p},self:{borderRadius:U,color:Be,placeholderColor:Ke,textColor:Ue,paddingSingle:qe,paddingMultiple:Ge,caretColor:_e,colorDisabled:$e,textColorDisabled:Ee,placeholderColorDisabled:Ye,colorActive:Xe,boxShadowFocus:Ae,boxShadowActive:be,boxShadowHover:t,border:u,borderFocus:z,borderHover:N,borderActive:I,arrowColor:$,arrowColorDisabled:B,loadingColor:Q,colorActiveWarning:Ne,boxShadowFocusWarning:Ze,boxShadowActiveWarning:Mt,boxShadowHoverWarning:Pt,borderWarning:It,borderFocusWarning:Bt,borderHoverWarning:_t,borderActiveWarning:$t,colorActiveError:Et,boxShadowFocusError:At,boxShadowActiveError:Nt,boxShadowHoverError:Lt,borderError:Dt,borderFocusError:Vt,borderHoverError:Ht,borderActiveError:jt,clearColor:Wt,clearColorHover:Kt,clearColorPressed:Ut,clearSize:qt,arrowSize:Gt,[q("height",c)]:Yt,[q("fontSize",c)]:Xt}}=f.value;return{"--n-bezier":p,"--n-border":u,"--n-border-active":I,"--n-border-focus":z,"--n-border-hover":N,"--n-border-radius":U,"--n-box-shadow-active":be,"--n-box-shadow-focus":Ae,"--n-box-shadow-hover":t,"--n-caret-color":_e,"--n-color":Be,"--n-color-active":Xe,"--n-color-disabled":$e,"--n-font-size":Xt,"--n-height":Yt,"--n-padding-single":qe,"--n-padding-multiple":Ge,"--n-placeholder-color":Ke,"--n-placeholder-color-disabled":Ye,"--n-text-color":Ue,"--n-text-color-disabled":Ee,"--n-arrow-color":$,"--n-arrow-color-disabled":B,"--n-loading-color":Q,"--n-color-active-warning":Ne,"--n-box-shadow-focus-warning":Ze,"--n-box-shadow-active-warning":Mt,"--n-box-shadow-hover-warning":Pt,"--n-border-warning":It,"--n-border-focus-warning":Bt,"--n-border-hover-warning":_t,"--n-border-active-warning":$t,"--n-color-active-error":Et,"--n-box-shadow-focus-error":At,"--n-box-shadow-active-error":Nt,"--n-box-shadow-hover-error":Lt,"--n-border-error":Dt,"--n-border-focus-error":Vt,"--n-border-hover-error":Ht,"--n-border-active-error":jt,"--n-clear-size":qt,"--n-clear-color":Wt,"--n-clear-color-hover":Kt,"--n-clear-color-pressed":Ut,"--n-arrow-size":Gt}}),ae=Se?Ie("internal-selection",O(()=>e.size[0]),ke,e):void 0;return{mergedTheme:f,mergedClearable:k,patternInputFocused:F,filterablePlaceholder:M,label:C,selected:S,showTagsPanel:x,isComposing:l,counterRef:a,counterWrapperRef:R,patternInputMirrorRef:o,patternInputRef:n,selfRef:i,multipleElRef:s,singleElRef:d,patternInputWrapperRef:b,overflowRef:y,inputTagElRef:m,handleMouseDown:V,handleFocusin:v,handleClear:P,handleMouseEnter:H,handleMouseLeave:j,handleDeleteOption:A,handlePatternKeyDown:W,handlePatternInputInput:L,handlePatternInputBlur:me,handlePatternInputFocus:pe,handleMouseEnterCounter:Te,handleMouseLeaveCounter:Oe,handleFocusout:g,handleCompositionEnd:re,handleCompositionStart:J,onPopoverUpdateShow:Me,focus:he,focusInput:ce,blur:ve,blurInput:oe,updateCounter:ge,getCounter:ue,getTail:Fe,renderLabel:e.renderLabel,cssVars:Se?void 0:ke,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender}},render(){const{status:e,multiple:o,size:n,disabled:i,filterable:s,maxTagCount:d,bordered:b,clsPrefix:a,onRender:R,renderTag:y,renderLabel:m}=this;R==null||R();const x=d==="responsive",F=typeof d=="number",w=x||F,f=r(kn,null,{default:()=>r(Tn,{clsPrefix:a,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var M,C;return(C=(M=this.$slots).arrow)===null||C===void 0?void 0:C.call(M)}})});let k;if(o){const{labelField:M}=this,C=g=>r("div",{class:`${a}-base-selection-tag-wrapper`,key:g.value},y?y({option:g,handleClose:()=>this.handleDeleteOption(g)}):r(tt,{size:n,closable:!g.disabled,disabled:i,onClose:()=>this.handleDeleteOption(g),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>m?m(g,!0):Re(g[M],g,!0)})),S=()=>(F?this.selectedOptions.slice(0,d):this.selectedOptions).map(C),K=s?r("div",{class:`${a}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:i,value:this.pattern,autofocus:this.autofocus,class:`${a}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),r("span",{ref:"patternInputMirrorRef",class:`${a}-base-selection-input-tag__mirror`},this.pattern)):null,Z=x?()=>r("div",{class:`${a}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},r(tt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:i})):void 0;let G;if(F){const g=this.selectedOptions.length-d;g>0&&(G=r("div",{class:`${a}-base-selection-tag-wrapper`,key:"__counter__"},r(tt,{size:n,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:i},{default:()=>`+${g}`})))}const D=x?s?r(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:S,counter:Z,tail:()=>K}):r(mt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:S,counter:Z}):F?S().concat(G):S(),Y=w?()=>r("div",{class:`${a}-base-selection-popover`},x?S():this.selectedOptions.map(C)):void 0,ee=w?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,ne=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)):null,v=s?r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-tags`},D,x?null:K,f):r("div",{ref:"multipleElRef",class:`${a}-base-selection-tags`,tabindex:i?void 0:0},D,f);k=r(nn,null,w?r(wn,Object.assign({},ee,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>v,default:Y}):v,ne)}else if(s){const M=this.pattern||this.isComposing,C=this.active?!M:!this.selected,S=this.active?!1:this.selected;k=r("div",{ref:"patternInputWrapperRef",class:`${a}-base-selection-label`},r("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${a}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:i,disabled:i,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),S?r("div",{class:`${a}-base-selection-label__render-label ${a}-base-selection-overlay`,key:"input"},r("div",{class:`${a}-base-selection-overlay__wrapper`},y?y({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):null,C?r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,f)}else k=r("div",{ref:"singleElRef",class:`${a}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?r("div",{class:`${a}-base-selection-input`,title:In(this.label),key:"input"},r("div",{class:`${a}-base-selection-input__content`},y?y({option:this.selectedOption,handleClose:()=>{}}):m?m(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):r("div",{class:`${a}-base-selection-placeholder ${a}-base-selection-overlay`,key:"placeholder"},r("div",{class:`${a}-base-selection-placeholder__inner`},this.placeholder)),f);return r("div",{ref:"selfRef",class:[`${a}-base-selection`,this.themeClass,e&&`${a}-base-selection--${e}-status`,{[`${a}-base-selection--active`]:this.active,[`${a}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${a}-base-selection--disabled`]:this.disabled,[`${a}-base-selection--multiple`]:this.multiple,[`${a}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},k,b?r("div",{class:`${a}-base-selection__border`}):null,b?r("div",{class:`${a}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function Ot(e){return e.type==="ignored"}function nt(e,o){try{return!!(1+o.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function to(e,o){return{getIsGroup:We,getIgnored:Ot,getKey(i){return We(i)?i.name||i.key||"key-required":i[e]},getChildren(i){return i[o]}}}function no(e,o,n,i){if(!o)return e;function s(d){if(!Array.isArray(d))return[];const b=[];for(const a of d)if(We(a)){const R=s(a[i]);R.length&&b.push(Object.assign({},a,{[i]:R}))}else{if(Ot(a))continue;o(n,a)&&b.push(a)}return b}return s(e)}function oo(e,o,n){const i=new Map;return e.forEach(s=>{We(s)?s[n].forEach(d=>{i.set(d[o],d)}):i.set(s[o],s)}),i}const lo=le([E("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),E("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[zt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),io=Object.assign(Object.assign({},fe.props),{to:it.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),bo=se({name:"Select",props:io,setup(e){const{mergedClsPrefixRef:o,mergedBorderedRef:n,namespaceRef:i,inlineThemeDisabled:s}=ct(e),d=fe("Select","-select",lo,pn,e,o),b=T(e.defaultValue),a=te(e,"value"),R=ft(a,b),y=T(!1),m=T(""),x=O(()=>{const{valueField:t,childrenField:u}=e,z=to(t,u);return Pn(g.value,z)}),F=O(()=>oo(ne.value,e.valueField,e.childrenField)),w=T(!1),f=ft(te(e,"show"),w),k=T(null),M=T(null),C=T(null),{localeRef:S}=Ft("Select"),K=O(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:S.value.placeholder}),Z=gn(e,["items","options"]),G=[],D=T([]),Y=T([]),ee=T(new Map),ie=O(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:z}=e;return N=>({[u]:String(N),[z]:N})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),ne=O(()=>Y.value.concat(D.value).concat(Z.value)),v=O(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:z}=e;return(N,I)=>{if(!I)return!1;const $=I[u];if(typeof $=="string")return nt(N,$);const B=I[z];return typeof B=="string"?nt(N,B):typeof B=="number"?nt(N,String(B)):!1}}),g=O(()=>{if(e.remote)return Z.value;{const{value:t}=ne,{value:u}=m;return!u.length||!e.filterable?t:no(t,v.value,u,e.childrenField)}});function P(t){const u=e.remote,{value:z}=ee,{value:N}=F,{value:I}=ie,$=[];return t.forEach(B=>{if(N.has(B))$.push(N.get(B));else if(u&&z.has(B))$.push(z.get(B));else if(I){const Q=I(B);Q&&$.push(Q)}}),$}const H=O(()=>{if(e.multiple){const{value:t}=R;return Array.isArray(t)?P(t):[]}return null}),j=O(()=>{const{value:t}=R;return!e.multiple&&!Array.isArray(t)?t===null?null:P([t])[0]||null:null}),V=Fn(e),{mergedSizeRef:A,mergedDisabledRef:W,mergedStatusRef:l}=V;function h(t,u){const{onChange:z,"onUpdate:value":N,onUpdateValue:I}=e,{nTriggerFormChange:$,nTriggerFormInput:B}=V;z&&de(z,t,u),I&&de(I,t,u),N&&de(N,t,u),b.value=t,$(),B()}function L(t){const{onBlur:u}=e,{nTriggerFormBlur:z}=V;u&&de(u,t),z()}function J(){const{onClear:t}=e;t&&de(t)}function re(t){const{onFocus:u,showOnFocus:z}=e,{nTriggerFormFocus:N}=V;u&&de(u,t),N(),z&&ce()}function pe(t){const{onSearch:u}=e;u&&de(u,t)}function me(t){const{onScroll:u}=e;u&&de(u,t)}function ve(){var t;const{remote:u,multiple:z}=e;if(u){const{value:N}=ee;if(z){const{valueField:I}=e;(t=H.value)===null||t===void 0||t.forEach($=>{N.set($[I],$)})}else{const I=j.value;I&&N.set(I[e.valueField],I)}}}function he(t){const{onUpdateShow:u,"onUpdate:show":z}=e;u&&de(u,t),z&&de(z,t),w.value=t}function ce(){W.value||(he(!0),w.value=!0,e.filterable&&Ee())}function oe(){he(!1)}function ge(){m.value="",Y.value=G}const ue=T(!1);function Fe(){e.filterable&&(ue.value=!0)}function we(){e.filterable&&(ue.value=!1,f.value||ge())}function ye(){W.value||(f.value?e.filterable?Ee():oe():ce())}function Te(t){var u,z;!((z=(u=C.value)===null||u===void 0?void 0:u.selfRef)===null||z===void 0)&&z.contains(t.relatedTarget)||(y.value=!1,L(t),oe())}function Oe(t){re(t),y.value=!0}function Me(t){y.value=!0}function Se(t){var u;!((u=k.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(y.value=!1,L(t),oe())}function ke(){var t;(t=k.value)===null||t===void 0||t.focus(),oe()}function ae(t){var u;f.value&&(!((u=k.value)===null||u===void 0)&&u.$el.contains(Rn(t))||oe())}function c(t){if(!Array.isArray(t))return[];if(ie.value)return Array.from(t);{const{remote:u}=e,{value:z}=F;if(u){const{value:N}=ee;return t.filter(I=>z.has(I)||N.has(I))}else return t.filter(N=>z.has(N))}}function p(t){U(t.rawNode)}function U(t){if(W.value)return;const{tag:u,remote:z,clearFilterAfterSelect:N,valueField:I}=e;if(u&&!z){const{value:$}=Y,B=$[0]||null;if(B){const Q=D.value;Q.length?Q.push(B):D.value=[B],Y.value=G}}if(z&&ee.value.set(t[I],t),e.multiple){const $=c(R.value),B=$.findIndex(Q=>Q===t[I]);if(~B){if($.splice(B,1),u&&!z){const Q=Be(t[I]);~Q&&(D.value.splice(Q,1),N&&(m.value=""))}}else $.push(t[I]),N&&(m.value="");h($,P($))}else{if(u&&!z){const $=Be(t[I]);~$?D.value=[D.value[$]]:D.value=G}$e(),oe(),h(t[I],t)}}function Be(t){return D.value.findIndex(z=>z[e.valueField]===t)}function Ke(t){f.value||ce();const{value:u}=t.target;m.value=u;const{tag:z,remote:N}=e;if(pe(u),z&&!N){if(!u){Y.value=G;return}const{onCreate:I}=e,$=I?I(u):{[e.labelField]:u,[e.valueField]:u},{valueField:B}=e;Z.value.some(Q=>Q[B]===$[B])||D.value.some(Q=>Q[B]===$[B])?Y.value=G:Y.value=[$]}}function Ue(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&oe(),J(),u?h([],[]):h(null,null)}function qe(t){!je(t,"action")&&!je(t,"empty")&&t.preventDefault()}function Ge(t){me(t)}function _e(t){var u,z,N,I,$;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=k.value)===null||u===void 0)&&u.isComposing)){if(f.value){const B=(z=C.value)===null||z===void 0?void 0:z.getPendingTmNode();B?p(B):e.filterable||(oe(),$e())}else if(ce(),e.tag&&ue.value){const B=Y.value[0];if(B){const Q=B[e.valueField],{value:Ne}=R;e.multiple&&Array.isArray(Ne)&&Ne.some(Ze=>Ze===Q)||U(B)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;f.value&&((N=C.value)===null||N===void 0||N.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;f.value?(I=C.value)===null||I===void 0||I.next():ce();break;case"Escape":f.value&&(_n(t),oe()),($=k.value)===null||$===void 0||$.focus();break}}function $e(){var t;(t=k.value)===null||t===void 0||t.focus()}function Ee(){var t;(t=k.value)===null||t===void 0||t.focusInput()}function Ye(){var t;f.value&&((t=M.value)===null||t===void 0||t.syncPosition())}ve(),ze(te(e,"options"),ve);const Xe={focus:()=>{var t;(t=k.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=k.value)===null||t===void 0||t.blur()}},Ae=O(()=>{const{self:{menuBoxShadow:t}}=d.value;return{"--n-menu-box-shadow":t}}),be=s?Ie("select",void 0,Ae,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:l,mergedClsPrefix:o,mergedBordered:n,namespace:i,treeMate:x,isMounted:bn(),triggerRef:k,menuRef:C,pattern:m,uncontrolledShow:w,mergedShow:f,adjustedTo:it(e),uncontrolledValue:b,mergedValue:R,followerRef:M,localizedPlaceholder:K,selectedOption:j,selectedOptions:H,mergedSize:A,mergedDisabled:W,focused:y,activeWithoutMenuOpen:ue,inlineThemeDisabled:s,onTriggerInputFocus:Fe,onTriggerInputBlur:we,handleTriggerOrMenuResize:Ye,handleMenuFocus:Me,handleMenuBlur:Se,handleMenuTabOut:ke,handleTriggerClick:ye,handleToggle:p,handleDeleteOption:U,handlePatternInput:Ke,handleClear:Ue,handleTriggerBlur:Te,handleTriggerFocus:Oe,handleKeydown:_e,handleMenuAfterLeave:ge,handleMenuClickOutside:ae,handleMenuScroll:Ge,handleMenuKeydown:_e,handleMenuMousedown:qe,mergedTheme:d,cssVars:s?void 0:Ae,themeClass:be==null?void 0:be.themeClass,onRender:be==null?void 0:be.onRender})},render(){return r("div",{class:`${this.mergedClsPrefix}-select`},r(yn,null,{default:()=>[r(xn,null,{default:()=>r(eo,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,o;return[(o=(e=this.$slots).arrow)===null||o===void 0?void 0:o.call(e)]}})}),r(Cn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===it.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>r(Ct,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,o,n;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),on(r(Gn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(o=this.menuProps)===null||o===void 0?void 0:o.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(n=this.menuProps)===null||n===void 0?void 0:n.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var i,s;return[(s=(i=this.$slots).empty)===null||s===void 0?void 0:s.call(i)]},action:()=>{var i,s;return[(s=(i=this.$slots).action)===null||s===void 0?void 0:s.call(i)]}}),this.displayDirective==="show"?[[ln,this.mergedShow],[ut,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[ut,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{bo as N};
