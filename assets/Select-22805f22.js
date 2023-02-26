import{c as se,o as Me,ai as sn,aj as cn,h as B,r as I,j as d,af as dn,v as ft,a1 as un,B as zt,m as ht,T as Pt,H as oe,w as Te,L as at,A as fn,$ as hn,aa as vn,ab as gn}from"./framework-939b1f57.js";import{Q as Mt,v as De,c as L,a as N,d as le,u as vt,e as fe,h as Ie,j as It,am as bn,x as pn,l as J,an as Re,b as ee,t as Ce,ao as mn,m as yn,g as wn,N as xn,q as Cn,ap as kn,aq as Sn,F as Rn,ar as Tn}from"./app-62d05906.js";import{c as Bt,a as Ve,b as On,i as gt,f as _t,d as Fn,N as zn,u as st,V as Pn,e as Mn,g as In,h as pt}from"./Popover-c94f0bd8.js";import{q as ct,V as mt,p as Le,s as yt,u as At,a as dt,e as Bn,r as _n,g as Je,h as de,W as An,c as wt,d as $n,n as Nn}from"./Space-56851a73.js";import{u as En}from"./use-compitable-6687ce15.js";import{a as Ln}from"./Input-cb991abe.js";import{c as xt}from"./Button-972bef7b.js";function je(e,n){let{target:t}=e;for(;t;){if(t.dataset&&t.dataset[n]!==void 0)return!0;t=t.parentElement}return!1}function Kn(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function et(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(o=>{o&&o(t)})}}const Dn=new WeakSet;function Vn(e){Dn.add(e)}function Ct(e){return e&-e}class jn{constructor(n,t){this.l=n,this.min=t;const o=new Array(n+1);for(let i=0;i<n+1;++i)o[i]=0;this.ft=o}add(n,t){if(t===0)return;const{l:o,ft:i}=this;for(n+=1;n<=o;)i[n]+=t,n+=Ct(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:o,l:i}=this;if(n>i)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let s=n*o;for(;n>0;)s+=t[n],n-=Ct(n);return s}getBound(n){let t=0,o=this.l;for(;o>t;){const i=Math.floor((t+o)/2),s=this.sum(i);if(s>n){o=i;continue}else if(s<n){if(t===i)return this.sum(t+1)<=n?t+1:i;t=i}else return i}return t}}let Ke;function Hn(){return Ke===void 0&&("matchMedia"in window?Ke=window.matchMedia("(pointer:coarse)").matches:Ke=!1),Ke}let tt;function kt(){return tt===void 0&&(tt="chrome"in window?window.devicePixelRatio:1),tt}const Wn=Ve(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ve("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ve("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Un=se({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=Mt();Wn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Bt,ssr:n}),Me(()=>{const{defaultScrollIndex:m,defaultScrollKey:x}=e;m!=null?f({index:m}):x!=null&&f({key:x})});let t=!1,o=!1;sn(()=>{if(t=!1,!o){o=!0;return}f({top:v.value,left:h})}),cn(()=>{t=!0,o||(o=!0)});const i=B(()=>{const m=new Map,{keyField:x}=e;return e.items.forEach((_,q)=>{m.set(_[x],q)}),m}),s=I(null),a=I(void 0),r=new Map,b=B(()=>{const{items:m,itemSize:x,keyField:_}=e,q=new jn(m.length,x);return m.forEach((Y,G)=>{const V=Y[_],Z=r.get(V);Z!==void 0&&q.add(G,Z)}),q}),u=I(0);let h=0;const v=I(0),T=De(()=>Math.max(b.value.getBound(v.value-ct(e.paddingTop))-1,0)),k=B(()=>{const{value:m}=a;if(m===void 0)return[];const{items:x,itemSize:_}=e,q=T.value,Y=Math.min(q+Math.ceil(m/_+1),x.length-1),G=[];for(let V=q;V<=Y;++V)G.push(x[V]);return G}),f=(m,x)=>{if(typeof m=="number"){F(m,x,"auto");return}const{left:_,top:q,index:Y,key:G,position:V,behavior:Z,debounce:c=!0}=m;if(_!==void 0||q!==void 0)F(_,q,Z);else if(Y!==void 0)R(Y,Z,c);else if(G!==void 0){const y=i.value.get(G);y!==void 0&&R(y,Z,c)}else V==="bottom"?F(0,Number.MAX_SAFE_INTEGER,Z):V==="top"&&F(0,0,Z)};let O,M=null;function R(m,x,_){const{value:q}=b,Y=q.sum(m)+ct(e.paddingTop);if(!_)s.value.scrollTo({left:0,top:Y,behavior:x});else{O=m,M!==null&&window.clearTimeout(M),M=window.setTimeout(()=>{O=void 0,M=null},16);const{scrollTop:G,offsetHeight:V}=s.value;if(Y>G){const Z=q.get(m);Y+Z<=G+V||s.value.scrollTo({left:0,top:Y+Z-V,behavior:x})}else s.value.scrollTo({left:0,top:Y,behavior:x})}}function F(m,x,_){s.value.scrollTo({left:m,top:x,behavior:_})}function K(m,x){var _,q,Y;if(t||e.ignoreItemResize||D(x.target))return;const{value:G}=b,V=i.value.get(m),Z=G.get(V),c=(Y=(q=(_=x.borderBoxSize)===null||_===void 0?void 0:_[0])===null||q===void 0?void 0:q.blockSize)!==null&&Y!==void 0?Y:x.contentRect.height;if(c===Z)return;c-e.itemSize===0?r.delete(m):r.set(m,c-e.itemSize);const W=c-Z;if(W===0)return;G.add(V,W);const te=s.value;if(te!=null){if(O===void 0){const re=G.sum(V);te.scrollTop>re&&te.scrollBy(0,W)}else if(V<O)te.scrollBy(0,W);else if(V===O){const re=G.sum(V);c+re>te.scrollTop+te.offsetHeight&&te.scrollBy(0,W)}X()}u.value++}const w=!Hn();let C=!1;function z(m){var x;(x=e.onScroll)===null||x===void 0||x.call(e,m),(!w||!C)&&X()}function H(m){var x;if((x=e.onWheel)===null||x===void 0||x.call(e,m),w){const _=s.value;if(_!=null){if(m.deltaX===0&&(_.scrollTop===0&&m.deltaY<=0||_.scrollTop+_.offsetHeight>=_.scrollHeight&&m.deltaY>=0))return;m.preventDefault(),_.scrollTop+=m.deltaY/kt(),_.scrollLeft+=m.deltaX/kt(),X(),C=!0,On(()=>{C=!1})}}}function U(m){if(t||D(m.target)||m.contentRect.height===a.value)return;a.value=m.contentRect.height;const{onResize:x}=e;x!==void 0&&x(m)}function X(){const{value:m}=s;m!=null&&(v.value=m.scrollTop,h=m.scrollLeft)}function D(m){let x=m;for(;x!==null;){if(x.style.display==="none")return!0;x=x.parentElement}return!1}return{listHeight:a,listStyle:{overflow:"auto"},keyToIndex:i,itemsStyle:B(()=>{const{itemResizable:m}=e,x=Le(b.value.sum());return u.value,[e.itemsStyle,{boxSizing:"content-box",height:m?"":x,minHeight:m?x:"",paddingTop:Le(e.paddingTop),paddingBottom:Le(e.paddingBottom)}]}),visibleItemsStyle:B(()=>(u.value,{transform:`translateY(${Le(b.value.sum(T.value))})`})),viewportItems:k,listElRef:s,itemsElRef:I(null),scrollTo:f,handleListResize:U,handleListScroll:z,handleListWheel:H,handleItemResize:K}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:o}=this;return d(mt,{onResize:this.handleListResize},{default:()=>{var i,s;return d("div",dn(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(o,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(a=>{const r=a[n],b=t.get(r),u=this.$slots.default({item:a,index:b})[0];return e?d(mt,{key:r,onResize:h=>this.handleItemResize(r,h)},{default:()=>u}):(u.key=r,u)})})]):(s=(i=this.$slots).empty)===null||s===void 0?void 0:s.call(i)])}})}}),xe="v-hidden",Gn=Ve("[v-hidden]",{display:"none!important"}),St=se({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=I(null),o=I(null);function i(){const{value:a}=t,{getCounter:r,getTail:b}=e;let u;if(r!==void 0?u=r():u=o.value,!a||!u)return;u.hasAttribute(xe)&&u.removeAttribute(xe);const{children:h}=a,v=a.offsetWidth,T=[],k=n.tail?b==null?void 0:b():null;let f=k?k.offsetWidth:0,O=!1;const M=a.children.length-(n.tail?1:0);for(let F=0;F<M-1;++F){if(F<0)continue;const K=h[F];if(O){K.hasAttribute(xe)||K.setAttribute(xe,"");continue}else K.hasAttribute(xe)&&K.removeAttribute(xe);const w=K.offsetWidth;if(f+=w,T[F]=w,f>v){const{updateCounter:C}=e;for(let z=F;z>=0;--z){const H=M-1-z;C!==void 0?C(H):u.textContent=`${H}`;const U=u.offsetWidth;if(f-=T[z],f+U<=v||z===0){O=!0,F=z-1,k&&(F===-1?(k.style.maxWidth=`${v-U}px`,k.style.boxSizing="border-box"):k.style.maxWidth="");break}}}}const{onUpdateOverflow:R}=e;O?R!==void 0&&R(!0):(R!==void 0&&R(!1),u.setAttribute(xe,""))}const s=Mt();return Gn.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Bt,ssr:s}),Me(i),{selfRef:t,counterRef:o,sync:i}},render(){const{$slots:e}=this;return ft(this.sync),d("div",{class:"v-overflow",ref:"selfRef"},[un(e,"default"),e.counter?e.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function $t(e,n){n&&(Me(()=>{const{value:t}=e;t&&yt.registerHandler(t,n)}),zt(()=>{const{value:t}=e;t&&yt.unregisterHandler(t)}))}const qn=se({name:"Checkmark",render(){return d("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d("g",{fill:"none"},d("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Yn=se({name:"Empty",render(){return d("svg",{viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",fill:"currentColor"}),d("path",{d:"M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",fill:"currentColor"}))}}),Zn=se({props:{onFocus:Function,onBlur:Function},setup(e){return()=>d("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Rt(e){return Array.isArray(e)?e:[e]}const ut={STOP:"STOP"};function Nt(e,n){const t=n(e);e.children!==void 0&&t!==ut.STOP&&e.children.forEach(o=>Nt(o,n))}function Xn(e,n={}){const{preserveGroup:t=!1}=n,o=[],i=t?a=>{a.isLeaf||(o.push(a.key),s(a.children))}:a=>{a.isLeaf||(a.isGroup||o.push(a.key),s(a.children))};function s(a){a.forEach(i)}return s(e),o}function Qn(e,n){const{isLeaf:t}=e;return t!==void 0?t:!n(e)}function Jn(e){return e.children}function eo(e){return e.key}function to(){return!1}function no(e,n){const{isLeaf:t}=e;return!(t===!1&&!Array.isArray(n(e)))}function oo(e){return e.disabled===!0}function io(e,n){return e.isLeaf===!1&&!Array.isArray(n(e))}function nt(e){var n;return e==null?[]:Array.isArray(e)?e:(n=e.checkedKeys)!==null&&n!==void 0?n:[]}function ot(e){var n;return e==null||Array.isArray(e)?[]:(n=e.indeterminateKeys)!==null&&n!==void 0?n:[]}function lo(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)||t.add(o)}),Array.from(t)}function ro(e,n){const t=new Set(e);return n.forEach(o=>{t.has(o)&&t.delete(o)}),Array.from(t)}function ao(e){return(e==null?void 0:e.type)==="group"}function so(e){const n=new Map;return e.forEach((t,o)=>{n.set(t.key,o)}),t=>{var o;return(o=n.get(t))!==null&&o!==void 0?o:null}}class co extends Error{constructor(){super(),this.message="SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."}}function uo(e,n,t,o){return He(n.concat(e),t,o,!1)}function fo(e,n){const t=new Set;return e.forEach(o=>{const i=n.treeNodeMap.get(o);if(i!==void 0){let s=i.parent;for(;s!==null&&!(s.disabled||t.has(s.key));)t.add(s.key),s=s.parent}}),t}function ho(e,n,t,o){const i=He(n,t,o,!1),s=He(e,t,o,!0),a=fo(e,t),r=[];return i.forEach(b=>{(s.has(b)||a.has(b))&&r.push(b)}),r.forEach(b=>i.delete(b)),i}function it(e,n){const{checkedKeys:t,keysToCheck:o,keysToUncheck:i,indeterminateKeys:s,cascade:a,leafOnly:r,checkStrategy:b,allowNotLoaded:u}=e;if(!a)return o!==void 0?{checkedKeys:lo(t,o),indeterminateKeys:Array.from(s)}:i!==void 0?{checkedKeys:ro(t,i),indeterminateKeys:Array.from(s)}:{checkedKeys:Array.from(t),indeterminateKeys:Array.from(s)};const{levelTreeNodeMap:h}=n;let v;i!==void 0?v=ho(i,t,n,u):o!==void 0?v=uo(o,t,n,u):v=He(t,n,u,!1);const T=b==="parent",k=b==="child"||r,f=v,O=new Set,M=Math.max.apply(null,Array.from(h.keys()));for(let R=M;R>=0;R-=1){const F=R===0,K=h.get(R);for(const w of K){if(w.isLeaf)continue;const{key:C,shallowLoaded:z}=w;if(k&&z&&w.children.forEach(D=>{!D.disabled&&!D.isLeaf&&D.shallowLoaded&&f.has(D.key)&&f.delete(D.key)}),w.disabled||!z)continue;let H=!0,U=!1,X=!0;for(const D of w.children){const m=D.key;if(!D.disabled){if(X&&(X=!1),f.has(m))U=!0;else if(O.has(m)){U=!0,H=!1;break}else if(H=!1,U)break}}H&&!X?(T&&w.children.forEach(D=>{!D.disabled&&f.has(D.key)&&f.delete(D.key)}),f.add(C)):U&&O.add(C),F&&k&&f.has(C)&&f.delete(C)}}return{checkedKeys:Array.from(f),indeterminateKeys:Array.from(O)}}function He(e,n,t,o){const{treeNodeMap:i,getChildren:s}=n,a=new Set,r=new Set(e);return e.forEach(b=>{const u=i.get(b);u!==void 0&&Nt(u,h=>{if(h.disabled)return ut.STOP;const{key:v}=h;if(!a.has(v)&&(a.add(v),r.add(v),io(h.rawNode,s))){if(o)return ut.STOP;if(!t)throw new co}})}),r}function vo(e,{includeGroup:n=!1,includeSelf:t=!0},o){var i;const s=o.treeNodeMap;let a=e==null?null:(i=s.get(e))!==null&&i!==void 0?i:null;const r={keyPath:[],treeNodePath:[],treeNode:a};if(a!=null&&a.ignored)return r.treeNode=null,r;for(;a;)!a.ignored&&(n||!a.isGroup)&&r.treeNodePath.push(a),a=a.parent;return r.treeNodePath.reverse(),t||r.treeNodePath.pop(),r.keyPath=r.treeNodePath.map(b=>b.key),r}function go(e){if(e.length===0)return null;const n=e[0];return n.isGroup||n.ignored||n.disabled?n.getNext():n}function bo(e,n){const t=e.siblings,o=t.length,{index:i}=e;return n?t[(i+1)%o]:i===t.length-1?null:t[i+1]}function Tt(e,n,{loop:t=!1,includeDisabled:o=!1}={}){const i=n==="prev"?po:bo,s={reverse:n==="prev"};let a=!1,r=null;function b(u){if(u!==null){if(u===e){if(!a)a=!0;else if(!e.disabled&&!e.isGroup){r=e;return}}else if((!u.disabled||o)&&!u.ignored&&!u.isGroup){r=u;return}if(u.isGroup){const h=bt(u,s);h!==null?r=h:b(i(u,t))}else{const h=i(u,!1);if(h!==null)b(h);else{const v=mo(u);v!=null&&v.isGroup?b(i(v,t)):t&&b(i(u,!0))}}}}return b(e),r}function po(e,n){const t=e.siblings,o=t.length,{index:i}=e;return n?t[(i-1+o)%o]:i===0?null:t[i-1]}function mo(e){return e.parent}function bt(e,n={}){const{reverse:t=!1}=n,{children:o}=e;if(o){const{length:i}=o,s=t?i-1:0,a=t?-1:i,r=t?-1:1;for(let b=s;b!==a;b+=r){const u=o[b];if(!u.disabled&&!u.ignored)if(u.isGroup){const h=bt(u,n);if(h!==null)return h}else return u}}return null}const yo={getChild(){return this.ignored?null:bt(this)},getParent(){const{parent:e}=this;return e!=null&&e.isGroup?e.getParent():e},getNext(e={}){return Tt(this,"next",e)},getPrev(e={}){return Tt(this,"prev",e)}};function wo(e,n){const t=n?new Set(n):void 0,o=[];function i(s){s.forEach(a=>{o.push(a),!(a.isLeaf||!a.children||a.ignored)&&(a.isGroup||t===void 0||t.has(a.key))&&i(a.children)})}return i(e),o}function xo(e,n){const t=e.key;for(;n;){if(n.key===t)return!0;n=n.parent}return!1}function Et(e,n,t,o,i,s=null,a=0){const r=[];return e.forEach((b,u)=>{var h;const v=Object.create(o);if(v.rawNode=b,v.siblings=r,v.level=a,v.index=u,v.isFirstChild=u===0,v.isLastChild=u+1===e.length,v.parent=s,!v.ignored){const T=i(b);Array.isArray(T)&&(v.children=Et(T,n,t,o,i,v,a+1))}r.push(v),n.set(v.key,v),t.has(a)||t.set(a,[]),(h=t.get(a))===null||h===void 0||h.push(v)}),r}function Co(e,n={}){var t;const o=new Map,i=new Map,{getDisabled:s=oo,getIgnored:a=to,getIsGroup:r=ao,getKey:b=eo}=n,u=(t=n.getChildren)!==null&&t!==void 0?t:Jn,h=n.ignoreEmptyChildren?w=>{const C=u(w);return Array.isArray(C)?C.length?C:null:C}:u,v=Object.assign({get key(){return b(this.rawNode)},get disabled(){return s(this.rawNode)},get isGroup(){return r(this.rawNode)},get isLeaf(){return Qn(this.rawNode,h)},get shallowLoaded(){return no(this.rawNode,h)},get ignored(){return a(this.rawNode)},contains(w){return xo(this,w)}},yo),T=Et(e,o,i,v,h);function k(w){if(w==null)return null;const C=o.get(w);return C&&!C.isGroup&&!C.ignored?C:null}function f(w){if(w==null)return null;const C=o.get(w);return C&&!C.ignored?C:null}function O(w,C){const z=f(w);return z?z.getPrev(C):null}function M(w,C){const z=f(w);return z?z.getNext(C):null}function R(w){const C=f(w);return C?C.getParent():null}function F(w){const C=f(w);return C?C.getChild():null}const K={treeNodes:T,treeNodeMap:o,levelTreeNodeMap:i,maxLevel:Math.max(...i.keys()),getChildren:h,getFlattenedNodes(w){return wo(T,w)},getNode:k,getPrev:O,getNext:M,getParent:R,getChild:F,getFirstAvailableNode(){return go(T)},getPath(w,C={}){return vo(w,C,K)},getCheckedKeys(w,C={}){const{cascade:z=!0,leafOnly:H=!1,checkStrategy:U="all",allowNotLoaded:X=!1}=C;return it({checkedKeys:nt(w),indeterminateKeys:ot(w),cascade:z,leafOnly:H,checkStrategy:U,allowNotLoaded:X},K)},check(w,C,z={}){const{cascade:H=!0,leafOnly:U=!1,checkStrategy:X="all",allowNotLoaded:D=!1}=z;return it({checkedKeys:nt(C),indeterminateKeys:ot(C),keysToCheck:w==null?[]:Rt(w),cascade:H,leafOnly:U,checkStrategy:X,allowNotLoaded:D},K)},uncheck(w,C,z={}){const{cascade:H=!0,leafOnly:U=!1,checkStrategy:X="all",allowNotLoaded:D=!1}=z;return it({checkedKeys:nt(C),indeterminateKeys:ot(C),keysToUncheck:w==null?[]:Rt(w),cascade:H,leafOnly:U,checkStrategy:X,allowNotLoaded:D},K)},getNonLeafKeys(w={}){return Xn(T,w)}};return K}const ko=L("empty",`
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`,[N("icon",`
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `,[le("+",[N("description",`
 margin-top: 8px;
 `)])]),N("description",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),N("extra",`
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),So=Object.assign(Object.assign({},fe.props),{description:String,showDescription:{type:Boolean,default:!0},showIcon:{type:Boolean,default:!0},size:{type:String,default:"medium"},renderIcon:Function}),Ro=se({name:"Empty",props:So,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=vt(e),o=fe("Empty","-empty",ko,bn,e,n),{localeRef:i}=At("Empty"),s=ht(pn,null),a=B(()=>{var h,v,T;return(h=e.description)!==null&&h!==void 0?h:(T=(v=s==null?void 0:s.mergedComponentPropsRef.value)===null||v===void 0?void 0:v.Empty)===null||T===void 0?void 0:T.description}),r=B(()=>{var h,v;return((v=(h=s==null?void 0:s.mergedComponentPropsRef.value)===null||h===void 0?void 0:h.Empty)===null||v===void 0?void 0:v.renderIcon)||(()=>d(Yn,null))}),b=B(()=>{const{size:h}=e,{common:{cubicBezierEaseInOut:v},self:{[J("iconSize",h)]:T,[J("fontSize",h)]:k,textColor:f,iconColor:O,extraTextColor:M}}=o.value;return{"--n-icon-size":T,"--n-font-size":k,"--n-bezier":v,"--n-text-color":f,"--n-icon-color":O,"--n-extra-text-color":M}}),u=t?Ie("empty",B(()=>{let h="";const{size:v}=e;return h+=v[0],h}),b,e):void 0;return{mergedClsPrefix:n,mergedRenderIcon:r,localizedDescription:B(()=>a.value||i.value.description),cssVars:t?void 0:b,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{$slots:e,mergedClsPrefix:n,onRender:t}=this;return t==null||t(),d("div",{class:[`${n}-empty`,this.themeClass],style:this.cssVars},this.showIcon?d("div",{class:`${n}-empty__icon`},e.icon?e.icon():d(It,{clsPrefix:n},{default:this.mergedRenderIcon})):null,this.showDescription?d("div",{class:`${n}-empty__description`},e.default?e.default():this.localizedDescription):null,e.extra?d("div",{class:`${n}-empty__extra`},e.extra()):null)}});function To(e,n){return d(Pt,{name:"fade-in-scale-up-transition"},{default:()=>e?d(It,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>d(qn)}):null})}const Ot=se({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:o,valueSetRef:i,renderLabelRef:s,renderOptionRef:a,labelFieldRef:r,valueFieldRef:b,showCheckmarkRef:u,nodePropsRef:h,handleOptionClick:v,handleOptionMouseEnter:T}=ht(gt),k=De(()=>{const{value:R}=t;return R?e.tmNode.key===R.key:!1});function f(R){const{tmNode:F}=e;F.disabled||v(R,F)}function O(R){const{tmNode:F}=e;F.disabled||T(R,F)}function M(R){const{tmNode:F}=e,{value:K}=k;F.disabled||K||T(R,F)}return{multiple:o,isGrouped:De(()=>{const{tmNode:R}=e,{parent:F}=R;return F&&F.rawNode.type==="group"}),showCheckmark:u,nodeProps:h,isPending:k,isSelected:De(()=>{const{value:R}=n,{value:F}=o;if(R===null)return!1;const K=e.tmNode.rawNode[b.value];if(F){const{value:w}=i;return w.has(K)}else return R===K}),labelField:r,renderLabel:s,renderOption:a,handleMouseMove:M,handleMouseEnter:O,handleClick:f}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:o,isGrouped:i,showCheckmark:s,nodeProps:a,renderOption:r,renderLabel:b,handleClick:u,handleMouseEnter:h,handleMouseMove:v}=this,T=To(t,e),k=b?[b(n,t),s&&T]:[Re(n[this.labelField],n,t),s&&T],f=a==null?void 0:a(n),O=d("div",Object.assign({},f,{class:[`${e}-base-select-option`,n.class,f==null?void 0:f.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:i,[`${e}-base-select-option--pending`]:o,[`${e}-base-select-option--show-checkmark`]:s}],style:[(f==null?void 0:f.style)||"",n.style||""],onClick:et([u,f==null?void 0:f.onClick]),onMouseenter:et([h,f==null?void 0:f.onMouseenter]),onMousemove:et([v,f==null?void 0:f.onMousemove])}),d("div",{class:`${e}-base-select-option__content`},k));return n.render?n.render({node:O,option:n,selected:t}):r?r({node:O,option:n,selected:t}):O}}),Ft=se({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:o}=ht(gt);return{labelField:t,nodeProps:o,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:o,tmNode:{rawNode:i}}=this,s=o==null?void 0:o(i),a=n?n(i,!1):Re(i[this.labelField],i,!1),r=d("div",Object.assign({},s,{class:[`${e}-base-select-group-header`,s==null?void 0:s.class]}),a);return i.render?i.render({node:r,option:i}):t?t({node:r,option:i,selected:!1}):r}}),Oo=L("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[L("scrollbar",`
 max-height: var(--n-height);
 `),L("virtual-list",`
 max-height: var(--n-height);
 `),L("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[N("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),L("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),L("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),N("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),N("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),N("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),L("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),L("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ee("show-checkmark",`
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
 `),ee("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ee("pending",[le("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ee("selected",`
 color: var(--n-option-text-color-active);
 `,[le("&::before",`
 background-color: var(--n-option-color-active);
 `),ee("pending",[le("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ee("disabled",`
 cursor: not-allowed;
 `,[Ce("selected",`
 color: var(--n-option-text-color-disabled);
 `),ee("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),N("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[_t({enterScale:"0.5"})])])]),Fo=se({name:"InternalSelectMenu",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=fe("InternalSelectMenu","-internal-select-menu",Oo,mn,e,oe(e,"clsPrefix")),t=I(null),o=I(null),i=I(null),s=B(()=>e.treeMate.getFlattenedNodes()),a=B(()=>so(s.value)),r=I(null);function b(){const{treeMate:c}=e;let y=null;const{value:W}=e;W===null?y=c.getFirstAvailableNode():(e.multiple?y=c.getNode((W||[])[(W||[]).length-1]):y=c.getNode(W),(!y||y.disabled)&&(y=c.getFirstAvailableNode())),m(y||null)}function u(){const{value:c}=r;c&&!e.treeMate.getNode(c.key)&&(r.value=null)}let h;Te(()=>e.show,c=>{c?h=Te(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?b():u(),ft(x)):u()},{immediate:!0}):h==null||h()},{immediate:!0}),zt(()=>{h==null||h()});const v=B(()=>ct(n.value.self[J("optionHeight",e.size)])),T=B(()=>Je(n.value.self[J("padding",e.size)])),k=B(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),f=B(()=>{const c=s.value;return c&&c.length===0});function O(c){const{onToggle:y}=e;y&&y(c)}function M(c){const{onScroll:y}=e;y&&y(c)}function R(c){var y;(y=i.value)===null||y===void 0||y.sync(),M(c)}function F(){var c;(c=i.value)===null||c===void 0||c.sync()}function K(){const{value:c}=r;return c||null}function w(c,y){y.disabled||m(y,!1)}function C(c,y){y.disabled||O(y)}function z(c){var y;je(c,"action")||(y=e.onKeyup)===null||y===void 0||y.call(e,c)}function H(c){var y;je(c,"action")||(y=e.onKeydown)===null||y===void 0||y.call(e,c)}function U(c){var y;(y=e.onMousedown)===null||y===void 0||y.call(e,c),!e.focusable&&c.preventDefault()}function X(){const{value:c}=r;c&&m(c.getNext({loop:!0}),!0)}function D(){const{value:c}=r;c&&m(c.getPrev({loop:!0}),!0)}function m(c,y=!1){r.value=c,y&&x()}function x(){var c,y;const W=r.value;if(!W)return;const te=a.value(W.key);te!==null&&(e.virtualScroll?(c=o.value)===null||c===void 0||c.scrollTo({index:te}):(y=i.value)===null||y===void 0||y.scrollTo({index:te,elSize:v.value}))}function _(c){var y,W;!((y=t.value)===null||y===void 0)&&y.contains(c.target)&&((W=e.onFocus)===null||W===void 0||W.call(e,c))}function q(c){var y,W;!((y=t.value)===null||y===void 0)&&y.contains(c.relatedTarget)||(W=e.onBlur)===null||W===void 0||W.call(e,c)}at(gt,{handleOptionMouseEnter:w,handleOptionClick:C,valueSetRef:k,pendingTmNodeRef:r,nodePropsRef:oe(e,"nodeProps"),showCheckmarkRef:oe(e,"showCheckmark"),multipleRef:oe(e,"multiple"),valueRef:oe(e,"value"),renderLabelRef:oe(e,"renderLabel"),renderOptionRef:oe(e,"renderOption"),labelFieldRef:oe(e,"labelField"),valueFieldRef:oe(e,"valueField")}),at(Fn,t),Me(()=>{const{value:c}=i;c&&c.sync()});const Y=B(()=>{const{size:c}=e,{common:{cubicBezierEaseInOut:y},self:{height:W,borderRadius:te,color:re,groupHeaderTextColor:pe,actionDividerColor:me,optionTextColorPressed:ve,optionTextColor:he,optionTextColorDisabled:ce,optionTextColorActive:ie,optionOpacityDisabled:ge,optionCheckColor:ue,actionTextColor:Oe,optionColorPending:ye,optionColorActive:we,loadingColor:Fe,loadingSize:ze,optionColorActivePending:Pe,[J("optionFontSize",c)]:ke,[J("optionHeight",c)]:Se,[J("optionPadding",c)]:ae}}=n.value;return{"--n-height":W,"--n-action-divider-color":me,"--n-action-text-color":Oe,"--n-bezier":y,"--n-border-radius":te,"--n-color":re,"--n-option-font-size":ke,"--n-group-header-text-color":pe,"--n-option-check-color":ue,"--n-option-color-pending":ye,"--n-option-color-active":we,"--n-option-color-active-pending":Pe,"--n-option-height":Se,"--n-option-opacity-disabled":ge,"--n-option-text-color":he,"--n-option-text-color-active":ie,"--n-option-text-color-disabled":ce,"--n-option-text-color-pressed":ve,"--n-option-padding":ae,"--n-option-padding-left":Je(ae,"left"),"--n-option-padding-right":Je(ae,"right"),"--n-loading-color":Fe,"--n-loading-size":ze}}),{inlineThemeDisabled:G}=e,V=G?Ie("internal-select-menu",B(()=>e.size[0]),Y,e):void 0,Z={selfRef:t,next:X,prev:D,getPendingTmNode:K};return $t(t,e.onResize),Object.assign({mergedTheme:n,virtualListRef:o,scrollbarRef:i,itemSize:v,padding:T,flattenedNodes:s,empty:f,virtualListContainer(){const{value:c}=o;return c==null?void 0:c.listElRef},virtualListContent(){const{value:c}=o;return c==null?void 0:c.itemsElRef},doScroll:M,handleFocusin:_,handleFocusout:q,handleKeyUp:z,handleKeyDown:H,handleMouseDown:U,handleVirtualListResize:F,handleVirtualListScroll:R,cssVars:G?void 0:Y,themeClass:V==null?void 0:V.themeClass,onRender:V==null?void 0:V.onRender},Z)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:o,themeClass:i,onRender:s}=this;return s==null||s(),d("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,i,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?d("div",{class:`${t}-base-select-menu__loading`},d(yn,{clsPrefix:t,strokeWidth:20})):this.empty?d("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},_n(e.empty,()=>[d(Ro,{theme:o.peers.Empty,themeOverrides:o.peerOverrides.Empty})])):d(Bn,{ref:"scrollbarRef",theme:o.peers.Scrollbar,themeOverrides:o.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?d(Un,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:a})=>a.isGroup?d(Ft,{key:a.key,clsPrefix:t,tmNode:a}):a.ignored?null:d(Ot,{clsPrefix:t,key:a.key,tmNode:a})}):d("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(a=>a.isGroup?d(Ft,{key:a.key,clsPrefix:t,tmNode:a}):d(Ot,{clsPrefix:t,key:a.key,tmNode:a})))}),dt(e.action,a=>a&&[d("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},a),d(Zn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),zo={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Po=L("tag",`
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
`,[ee("strong",`
 font-weight: var(--n-font-weight-strong);
 `),N("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),N("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),N("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),N("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),ee("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[N("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),N("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),ee("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),ee("icon, avatar",[ee("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),ee("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),ee("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[Ce("disabled",[le("&:hover","background-color: var(--n-color-hover-checkable);",[Ce("checked","color: var(--n-text-color-hover-checkable);")]),le("&:active","background-color: var(--n-color-pressed-checkable);",[Ce("checked","color: var(--n-text-color-pressed-checkable);")])]),ee("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[Ce("disabled",[le("&:hover","background-color: var(--n-color-checked-hover);"),le("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Mo=Object.assign(Object.assign(Object.assign({},fe.props),zo),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Io=Cn("n-tag"),lt=se({name:"Tag",props:Mo,setup(e){const n=I(null),{mergedBorderedRef:t,mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:s}=vt(e),a=fe("Tag","-tag",Po,kn,e,o);at(Io,{roundRef:oe(e,"round")});function r(k){if(!e.disabled&&e.checkable){const{checked:f,onCheckedChange:O,onUpdateChecked:M,"onUpdate:checked":R}=e;M&&M(!f),R&&R(!f),O&&O(!f)}}function b(k){if(e.triggerClickOnClose||k.stopPropagation(),!e.disabled){const{onClose:f}=e;f&&de(f,k)}}const u={setTextContent(k){const{value:f}=n;f&&(f.textContent=k)}},h=wn("Tag",s,o),v=B(()=>{const{type:k,size:f,color:{color:O,textColor:M}={}}=e,{common:{cubicBezierEaseInOut:R},self:{padding:F,closeMargin:K,closeMarginRtl:w,borderRadius:C,opacityDisabled:z,textColorCheckable:H,textColorHoverCheckable:U,textColorPressedCheckable:X,textColorChecked:D,colorCheckable:m,colorHoverCheckable:x,colorPressedCheckable:_,colorChecked:q,colorCheckedHover:Y,colorCheckedPressed:G,closeBorderRadius:V,fontWeightStrong:Z,[J("colorBordered",k)]:c,[J("closeSize",f)]:y,[J("closeIconSize",f)]:W,[J("fontSize",f)]:te,[J("height",f)]:re,[J("color",k)]:pe,[J("textColor",k)]:me,[J("border",k)]:ve,[J("closeIconColor",k)]:he,[J("closeIconColorHover",k)]:ce,[J("closeIconColorPressed",k)]:ie,[J("closeColorHover",k)]:ge,[J("closeColorPressed",k)]:ue}}=a.value;return{"--n-font-weight-strong":Z,"--n-avatar-size-override":`calc(${re} - 8px)`,"--n-bezier":R,"--n-border-radius":C,"--n-border":ve,"--n-close-icon-size":W,"--n-close-color-pressed":ue,"--n-close-color-hover":ge,"--n-close-border-radius":V,"--n-close-icon-color":he,"--n-close-icon-color-hover":ce,"--n-close-icon-color-pressed":ie,"--n-close-icon-color-disabled":he,"--n-close-margin":K,"--n-close-margin-rtl":w,"--n-close-size":y,"--n-color":O||(t.value?c:pe),"--n-color-checkable":m,"--n-color-checked":q,"--n-color-checked-hover":Y,"--n-color-checked-pressed":G,"--n-color-hover-checkable":x,"--n-color-pressed-checkable":_,"--n-font-size":te,"--n-height":re,"--n-opacity-disabled":z,"--n-padding":F,"--n-text-color":M||me,"--n-text-color-checkable":H,"--n-text-color-checked":D,"--n-text-color-hover-checkable":U,"--n-text-color-pressed-checkable":X}}),T=i?Ie("tag",B(()=>{let k="";const{type:f,size:O,color:{color:M,textColor:R}={}}=e;return k+=f[0],k+=O[0],M&&(k+=`a${xt(M)}`),R&&(k+=`b${xt(R)}`),t.value&&(k+="c"),k}),v,e):void 0;return Object.assign(Object.assign({},u),{rtlEnabled:h,mergedClsPrefix:o,contentRef:n,mergedBordered:t,handleClick:r,handleCloseClick:b,cssVars:i?void 0:v,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var e,n;const{mergedClsPrefix:t,rtlEnabled:o,closable:i,color:{borderColor:s}={},round:a,onRender:r,$slots:b}=this;r==null||r();const u=dt(b.avatar,v=>v&&d("div",{class:`${t}-tag__avatar`},v)),h=dt(b.icon,v=>v&&d("div",{class:`${t}-tag__icon`},v));return d("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:o,[`${t}-tag--strong`]:this.strong,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:a,[`${t}-tag--avatar`]:u,[`${t}-tag--icon`]:h,[`${t}-tag--closable`]:i}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},h||u,d("span",{class:`${t}-tag__content`,ref:"contentRef"},(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e)),!this.checkable&&i?d(xn,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:a,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?d("div",{class:`${t}-tag__border`,style:{borderColor:s}}):null)}}),Bo=le([L("base-selection",`
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
 `,[L("base-loading",`
 color: var(--n-loading-color);
 `),L("base-selection-tags","min-height: var(--n-height);"),N("border, state-border",`
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
 `),N("state-border",`
 z-index: 1;
 border-color: #0000;
 `),L("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[N("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),L("base-selection-overlay",`
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
 `,[N("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),L("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[N("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),L("base-selection-tags",`
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
 `),L("base-selection-label",`
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
 `,[L("base-selection-input",`
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
 `,[N("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),N("render-label",`
 color: var(--n-text-color);
 `)]),Ce("disabled",[le("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ee("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ee("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),L("base-selection-label","background-color: var(--n-color-active);"),L("base-selection-tags","background-color: var(--n-color-active);")])]),ee("disabled","cursor: not-allowed;",[N("arrow",`
 color: var(--n-arrow-color-disabled);
 `),L("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[L("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),N("render-label",`
 color: var(--n-text-color-disabled);
 `)]),L("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),L("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),L("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[N("input",`
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
 `),N("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ee(`${e}-status`,[N("state-border",`border: var(--n-border-${e});`),Ce("disabled",[le("&:hover",[N("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ee("active",[N("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),L("base-selection-label",`background-color: var(--n-color-active-${e});`),L("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ee("focus",[N("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),L("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),L("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[le("&:last-child","padding-right: 0;"),L("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[N("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),_o=se({name:"InternalSelection",props:Object.assign(Object.assign({},fe.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=I(null),t=I(null),o=I(null),i=I(null),s=I(null),a=I(null),r=I(null),b=I(null),u=I(null),h=I(null),v=I(!1),T=I(!1),k=I(!1),f=fe("InternalSelection","-internal-selection",Bo,Sn,e,oe(e,"clsPrefix")),O=B(()=>e.clearable&&!e.disabled&&(k.value||e.active)),M=B(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Re(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),R=B(()=>{const g=e.selectedOption;if(g)return g[e.labelField]}),F=B(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function K(){var g;const{value:S}=n;if(S){const{value:Q}=t;Q&&(Q.style.width=`${S.offsetWidth}px`,e.maxTagCount!=="responsive"&&((g=u.value)===null||g===void 0||g.sync()))}}function w(){const{value:g}=h;g&&(g.style.display="none")}function C(){const{value:g}=h;g&&(g.style.display="inline-block")}Te(oe(e,"active"),g=>{g||w()}),Te(oe(e,"pattern"),()=>{e.multiple&&ft(K)});function z(g){const{onFocus:S}=e;S&&S(g)}function H(g){const{onBlur:S}=e;S&&S(g)}function U(g){const{onDeleteOption:S}=e;S&&S(g)}function X(g){const{onClear:S}=e;S&&S(g)}function D(g){const{onPatternInput:S}=e;S&&S(g)}function m(g){var S;(!g.relatedTarget||!(!((S=o.value)===null||S===void 0)&&S.contains(g.relatedTarget)))&&z(g)}function x(g){var S;!((S=o.value)===null||S===void 0)&&S.contains(g.relatedTarget)||H(g)}function _(g){X(g)}function q(){k.value=!0}function Y(){k.value=!1}function G(g){!e.active||!e.filterable||g.target!==t.value&&g.preventDefault()}function V(g){U(g)}function Z(g){if(g.key==="Backspace"&&!c.value&&!e.pattern.length){const{selectedOptions:S}=e;S!=null&&S.length&&V(S[S.length-1])}}const c=I(!1);let y=null;function W(g){const{value:S}=n;if(S){const Q=g.target.value;S.textContent=Q,K()}e.ignoreComposition&&c.value?y=g:D(g)}function te(){c.value=!0}function re(){c.value=!1,e.ignoreComposition&&D(y),y=null}function pe(g){var S;T.value=!0,(S=e.onPatternFocus)===null||S===void 0||S.call(e,g)}function me(g){var S;T.value=!1,(S=e.onPatternBlur)===null||S===void 0||S.call(e,g)}function ve(){var g,S;if(e.filterable)T.value=!1,(g=a.value)===null||g===void 0||g.blur(),(S=t.value)===null||S===void 0||S.blur();else if(e.multiple){const{value:Q}=i;Q==null||Q.blur()}else{const{value:Q}=s;Q==null||Q.blur()}}function he(){var g,S,Q;e.filterable?(T.value=!1,(g=a.value)===null||g===void 0||g.focus()):e.multiple?(S=i.value)===null||S===void 0||S.focus():(Q=s.value)===null||Q===void 0||Q.focus()}function ce(){const{value:g}=t;g&&(C(),g.focus())}function ie(){const{value:g}=t;g&&g.blur()}function ge(g){const{value:S}=r;S&&S.setTextContent(`+${g}`)}function ue(){const{value:g}=b;return g}function Oe(){return t.value}let ye=null;function we(){ye!==null&&window.clearTimeout(ye)}function Fe(){e.disabled||e.active||(we(),ye=window.setTimeout(()=>{F.value&&(v.value=!0)},100))}function ze(){we()}function Pe(g){g||(we(),v.value=!1)}Te(F,g=>{g||(v.value=!1)}),Me(()=>{fn(()=>{const g=a.value;g&&(g.tabIndex=e.disabled||T.value?-1:0)})}),$t(o,e.onResize);const{inlineThemeDisabled:ke}=e,Se=B(()=>{const{size:g}=e,{common:{cubicBezierEaseInOut:S},self:{borderRadius:Q,color:Be,placeholderColor:Ue,textColor:Ge,paddingSingle:qe,paddingMultiple:Ye,caretColor:_e,colorDisabled:Ae,textColorDisabled:$e,placeholderColorDisabled:Ze,colorActive:Xe,boxShadowFocus:Ne,boxShadowActive:be,boxShadowHover:l,border:p,borderFocus:P,borderHover:j,borderActive:A,arrowColor:E,arrowColorDisabled:$,loadingColor:ne,colorActiveWarning:Ee,boxShadowFocusWarning:Qe,boxShadowActiveWarning:Kt,boxShadowHoverWarning:Dt,borderWarning:Vt,borderFocusWarning:jt,borderHoverWarning:Ht,borderActiveWarning:Wt,colorActiveError:Ut,boxShadowFocusError:Gt,boxShadowActiveError:qt,boxShadowHoverError:Yt,borderError:Zt,borderFocusError:Xt,borderHoverError:Qt,borderActiveError:Jt,clearColor:en,clearColorHover:tn,clearColorPressed:nn,clearSize:on,arrowSize:ln,[J("height",g)]:rn,[J("fontSize",g)]:an}}=f.value;return{"--n-bezier":S,"--n-border":p,"--n-border-active":A,"--n-border-focus":P,"--n-border-hover":j,"--n-border-radius":Q,"--n-box-shadow-active":be,"--n-box-shadow-focus":Ne,"--n-box-shadow-hover":l,"--n-caret-color":_e,"--n-color":Be,"--n-color-active":Xe,"--n-color-disabled":Ae,"--n-font-size":an,"--n-height":rn,"--n-padding-single":qe,"--n-padding-multiple":Ye,"--n-placeholder-color":Ue,"--n-placeholder-color-disabled":Ze,"--n-text-color":Ge,"--n-text-color-disabled":$e,"--n-arrow-color":E,"--n-arrow-color-disabled":$,"--n-loading-color":ne,"--n-color-active-warning":Ee,"--n-box-shadow-focus-warning":Qe,"--n-box-shadow-active-warning":Kt,"--n-box-shadow-hover-warning":Dt,"--n-border-warning":Vt,"--n-border-focus-warning":jt,"--n-border-hover-warning":Ht,"--n-border-active-warning":Wt,"--n-color-active-error":Ut,"--n-box-shadow-focus-error":Gt,"--n-box-shadow-active-error":qt,"--n-box-shadow-hover-error":Yt,"--n-border-error":Zt,"--n-border-focus-error":Xt,"--n-border-hover-error":Qt,"--n-border-active-error":Jt,"--n-clear-size":on,"--n-clear-color":en,"--n-clear-color-hover":tn,"--n-clear-color-pressed":nn,"--n-arrow-size":ln}}),ae=ke?Ie("internal-selection",B(()=>e.size[0]),Se,e):void 0;return{mergedTheme:f,mergedClearable:O,patternInputFocused:T,filterablePlaceholder:M,label:R,selected:F,showTagsPanel:v,isComposing:c,counterRef:r,counterWrapperRef:b,patternInputMirrorRef:n,patternInputRef:t,selfRef:o,multipleElRef:i,singleElRef:s,patternInputWrapperRef:a,overflowRef:u,inputTagElRef:h,handleMouseDown:G,handleFocusin:m,handleClear:_,handleMouseEnter:q,handleMouseLeave:Y,handleDeleteOption:V,handlePatternKeyDown:Z,handlePatternInputInput:W,handlePatternInputBlur:me,handlePatternInputFocus:pe,handleMouseEnterCounter:Fe,handleMouseLeaveCounter:ze,handleFocusout:x,handleCompositionEnd:re,handleCompositionStart:te,onPopoverUpdateShow:Pe,focus:he,focusInput:ce,blur:ve,blurInput:ie,updateCounter:ge,getCounter:ue,getTail:Oe,renderLabel:e.renderLabel,cssVars:ke?void 0:Se,themeClass:ae==null?void 0:ae.themeClass,onRender:ae==null?void 0:ae.onRender}},render(){const{status:e,multiple:n,size:t,disabled:o,filterable:i,maxTagCount:s,bordered:a,clsPrefix:r,onRender:b,renderTag:u,renderLabel:h}=this;b==null||b();const v=s==="responsive",T=typeof s=="number",k=v||T,f=d(An,null,{default:()=>d(Ln,{clsPrefix:r,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var M,R;return(R=(M=this.$slots).arrow)===null||R===void 0?void 0:R.call(M)}})});let O;if(n){const{labelField:M}=this,R=x=>d("div",{class:`${r}-base-selection-tag-wrapper`,key:x.value},u?u({option:x,handleClose:()=>this.handleDeleteOption(x)}):d(lt,{size:t,closable:!x.disabled,disabled:o,onClose:()=>this.handleDeleteOption(x),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>h?h(x,!0):Re(x[M],x,!0)})),F=()=>(T?this.selectedOptions.slice(0,s):this.selectedOptions).map(R),K=i?d("div",{class:`${r}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:o,value:this.pattern,autofocus:this.autofocus,class:`${r}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),d("span",{ref:"patternInputMirrorRef",class:`${r}-base-selection-input-tag__mirror`},this.pattern)):null,w=v?()=>d("div",{class:`${r}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},d(lt,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:o})):void 0;let C;if(T){const x=this.selectedOptions.length-s;x>0&&(C=d("div",{class:`${r}-base-selection-tag-wrapper`,key:"__counter__"},d(lt,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:o},{default:()=>`+${x}`})))}const z=v?i?d(St,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:F,counter:w,tail:()=>K}):d(St,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:F,counter:w}):T?F().concat(C):F(),H=k?()=>d("div",{class:`${r}-base-selection-popover`},v?F():this.selectedOptions.map(R)):void 0,U=k?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,D=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`},d("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)):null,m=i?d("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-tags`},z,v?null:K,f):d("div",{ref:"multipleElRef",class:`${r}-base-selection-tags`,tabindex:o?void 0:0},z,f);O=d(hn,null,k?d(zn,Object.assign({},U,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>m,default:H}):m,D)}else if(i){const M=this.pattern||this.isComposing,R=this.active?!M:!this.selected,F=this.active?!1:this.selected;O=d("div",{ref:"patternInputWrapperRef",class:`${r}-base-selection-label`},d("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${r}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:o,disabled:o,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),F?d("div",{class:`${r}-base-selection-label__render-label ${r}-base-selection-overlay`,key:"input"},d("div",{class:`${r}-base-selection-overlay__wrapper`},u?u({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):null,R?d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${r}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,f)}else O=d("div",{ref:"singleElRef",class:`${r}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?d("div",{class:`${r}-base-selection-input`,title:Kn(this.label),key:"input"},d("div",{class:`${r}-base-selection-input__content`},u?u({option:this.selectedOption,handleClose:()=>{}}):h?h(this.selectedOption,!0):Re(this.label,this.selectedOption,!0))):d("div",{class:`${r}-base-selection-placeholder ${r}-base-selection-overlay`,key:"placeholder"},d("div",{class:`${r}-base-selection-placeholder__inner`},this.placeholder)),f);return d("div",{ref:"selfRef",class:[`${r}-base-selection`,this.themeClass,e&&`${r}-base-selection--${e}-status`,{[`${r}-base-selection--active`]:this.active,[`${r}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${r}-base-selection--disabled`]:this.disabled,[`${r}-base-selection--multiple`]:this.multiple,[`${r}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},O,a?d("div",{class:`${r}-base-selection__border`}):null,a?d("div",{class:`${r}-base-selection__state-border`}):null)}});function We(e){return e.type==="group"}function Lt(e){return e.type==="ignored"}function rt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Ao(e,n){return{getIsGroup:We,getIgnored:Lt,getKey(o){return We(o)?o.name||o.key||"key-required":o[e]},getChildren(o){return o[n]}}}function $o(e,n,t,o){if(!n)return e;function i(s){if(!Array.isArray(s))return[];const a=[];for(const r of s)if(We(r)){const b=i(r[o]);b.length&&a.push(Object.assign({},r,{[o]:b}))}else{if(Lt(r))continue;n(t,r)&&a.push(r)}return a}return i(e)}function No(e,n,t){const o=new Map;return e.forEach(i=>{We(i)?i[t].forEach(s=>{o.set(s[n],s)}):o.set(i[n],i)}),o}const Eo=le([L("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),L("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[_t({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Lo=Object.assign(Object.assign({},fe.props),{to:st.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Go=se({name:"Select",props:Lo,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:o,inlineThemeDisabled:i}=vt(e),s=fe("Select","-select",Eo,Tn,e,n),a=I(e.defaultValue),r=oe(e,"value"),b=wt(r,a),u=I(!1),h=I(""),v=B(()=>{const{valueField:l,childrenField:p}=e,P=Ao(l,p);return Co(x.value,P)}),T=B(()=>No(D.value,e.valueField,e.childrenField)),k=I(!1),f=wt(oe(e,"show"),k),O=I(null),M=I(null),R=I(null),{localeRef:F}=At("Select"),K=B(()=>{var l;return(l=e.placeholder)!==null&&l!==void 0?l:F.value.placeholder}),w=En(e,["items","options"]),C=[],z=I([]),H=I([]),U=I(new Map),X=B(()=>{const{fallbackOption:l}=e;if(l===void 0){const{labelField:p,valueField:P}=e;return j=>({[p]:String(j),[P]:j})}return l===!1?!1:p=>Object.assign(l(p),{value:p})}),D=B(()=>H.value.concat(z.value).concat(w.value)),m=B(()=>{const{filter:l}=e;if(l)return l;const{labelField:p,valueField:P}=e;return(j,A)=>{if(!A)return!1;const E=A[p];if(typeof E=="string")return rt(j,E);const $=A[P];return typeof $=="string"?rt(j,$):typeof $=="number"?rt(j,String($)):!1}}),x=B(()=>{if(e.remote)return w.value;{const{value:l}=D,{value:p}=h;return!p.length||!e.filterable?l:$o(l,m.value,p,e.childrenField)}});function _(l){const p=e.remote,{value:P}=U,{value:j}=T,{value:A}=X,E=[];return l.forEach($=>{if(j.has($))E.push(j.get($));else if(p&&P.has($))E.push(P.get($));else if(A){const ne=A($);ne&&E.push(ne)}}),E}const q=B(()=>{if(e.multiple){const{value:l}=b;return Array.isArray(l)?_(l):[]}return null}),Y=B(()=>{const{value:l}=b;return!e.multiple&&!Array.isArray(l)?l===null?null:_([l])[0]||null:null}),G=$n(e),{mergedSizeRef:V,mergedDisabledRef:Z,mergedStatusRef:c}=G;function y(l,p){const{onChange:P,"onUpdate:value":j,onUpdateValue:A}=e,{nTriggerFormChange:E,nTriggerFormInput:$}=G;P&&de(P,l,p),A&&de(A,l,p),j&&de(j,l,p),a.value=l,E(),$()}function W(l){const{onBlur:p}=e,{nTriggerFormBlur:P}=G;p&&de(p,l),P()}function te(){const{onClear:l}=e;l&&de(l)}function re(l){const{onFocus:p,showOnFocus:P}=e,{nTriggerFormFocus:j}=G;p&&de(p,l),j(),P&&ce()}function pe(l){const{onSearch:p}=e;p&&de(p,l)}function me(l){const{onScroll:p}=e;p&&de(p,l)}function ve(){var l;const{remote:p,multiple:P}=e;if(p){const{value:j}=U;if(P){const{valueField:A}=e;(l=q.value)===null||l===void 0||l.forEach(E=>{j.set(E[A],E)})}else{const A=Y.value;A&&j.set(A[e.valueField],A)}}}function he(l){const{onUpdateShow:p,"onUpdate:show":P}=e;p&&de(p,l),P&&de(P,l),k.value=l}function ce(){Z.value||(he(!0),k.value=!0,e.filterable&&$e())}function ie(){he(!1)}function ge(){h.value="",H.value=C}const ue=I(!1);function Oe(){e.filterable&&(ue.value=!0)}function ye(){e.filterable&&(ue.value=!1,f.value||ge())}function we(){Z.value||(f.value?e.filterable?$e():ie():ce())}function Fe(l){var p,P;!((P=(p=R.value)===null||p===void 0?void 0:p.selfRef)===null||P===void 0)&&P.contains(l.relatedTarget)||(u.value=!1,W(l),ie())}function ze(l){re(l),u.value=!0}function Pe(l){u.value=!0}function ke(l){var p;!((p=O.value)===null||p===void 0)&&p.$el.contains(l.relatedTarget)||(u.value=!1,W(l),ie())}function Se(){var l;(l=O.value)===null||l===void 0||l.focus(),ie()}function ae(l){var p;f.value&&(!((p=O.value)===null||p===void 0)&&p.$el.contains(Nn(l))||ie())}function g(l){if(!Array.isArray(l))return[];if(X.value)return Array.from(l);{const{remote:p}=e,{value:P}=T;if(p){const{value:j}=U;return l.filter(A=>P.has(A)||j.has(A))}else return l.filter(j=>P.has(j))}}function S(l){Q(l.rawNode)}function Q(l){if(Z.value)return;const{tag:p,remote:P,clearFilterAfterSelect:j,valueField:A}=e;if(p&&!P){const{value:E}=H,$=E[0]||null;if($){const ne=z.value;ne.length?ne.push($):z.value=[$],H.value=C}}if(P&&U.value.set(l[A],l),e.multiple){const E=g(b.value),$=E.findIndex(ne=>ne===l[A]);if(~$){if(E.splice($,1),p&&!P){const ne=Be(l[A]);~ne&&(z.value.splice(ne,1),j&&(h.value=""))}}else E.push(l[A]),j&&(h.value="");y(E,_(E))}else{if(p&&!P){const E=Be(l[A]);~E?z.value=[z.value[E]]:z.value=C}Ae(),ie(),y(l[A],l)}}function Be(l){return z.value.findIndex(P=>P[e.valueField]===l)}function Ue(l){f.value||ce();const{value:p}=l.target;h.value=p;const{tag:P,remote:j}=e;if(pe(p),P&&!j){if(!p){H.value=C;return}const{onCreate:A}=e,E=A?A(p):{[e.labelField]:p,[e.valueField]:p},{valueField:$}=e;w.value.some(ne=>ne[$]===E[$])||z.value.some(ne=>ne[$]===E[$])?H.value=C:H.value=[E]}}function Ge(l){l.stopPropagation();const{multiple:p}=e;!p&&e.filterable&&ie(),te(),p?y([],[]):y(null,null)}function qe(l){!je(l,"action")&&!je(l,"empty")&&l.preventDefault()}function Ye(l){me(l)}function _e(l){var p,P,j,A,E;switch(l.key){case" ":if(e.filterable)break;l.preventDefault();case"Enter":if(!(!((p=O.value)===null||p===void 0)&&p.isComposing)){if(f.value){const $=(P=R.value)===null||P===void 0?void 0:P.getPendingTmNode();$?S($):e.filterable||(ie(),Ae())}else if(ce(),e.tag&&ue.value){const $=H.value[0];if($){const ne=$[e.valueField],{value:Ee}=b;e.multiple&&Array.isArray(Ee)&&Ee.some(Qe=>Qe===ne)||Q($)}}}l.preventDefault();break;case"ArrowUp":if(l.preventDefault(),e.loading)return;f.value&&((j=R.value)===null||j===void 0||j.prev());break;case"ArrowDown":if(l.preventDefault(),e.loading)return;f.value?(A=R.value)===null||A===void 0||A.next():ce();break;case"Escape":f.value&&(Vn(l),ie()),(E=O.value)===null||E===void 0||E.focus();break}}function Ae(){var l;(l=O.value)===null||l===void 0||l.focus()}function $e(){var l;(l=O.value)===null||l===void 0||l.focusInput()}function Ze(){var l;f.value&&((l=M.value)===null||l===void 0||l.syncPosition())}ve(),Te(oe(e,"options"),ve);const Xe={focus:()=>{var l;(l=O.value)===null||l===void 0||l.focus()},blur:()=>{var l;(l=O.value)===null||l===void 0||l.blur()}},Ne=B(()=>{const{self:{menuBoxShadow:l}}=s.value;return{"--n-menu-box-shadow":l}}),be=i?Ie("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},Xe),{mergedStatus:c,mergedClsPrefix:n,mergedBordered:t,namespace:o,treeMate:v,isMounted:Rn(),triggerRef:O,menuRef:R,pattern:h,uncontrolledShow:k,mergedShow:f,adjustedTo:st(e),uncontrolledValue:a,mergedValue:b,followerRef:M,localizedPlaceholder:K,selectedOption:Y,selectedOptions:q,mergedSize:V,mergedDisabled:Z,focused:u,activeWithoutMenuOpen:ue,inlineThemeDisabled:i,onTriggerInputFocus:Oe,onTriggerInputBlur:ye,handleTriggerOrMenuResize:Ze,handleMenuFocus:Pe,handleMenuBlur:ke,handleMenuTabOut:Se,handleTriggerClick:we,handleToggle:S,handleDeleteOption:Q,handlePatternInput:Ue,handleClear:Ge,handleTriggerBlur:Fe,handleTriggerFocus:ze,handleKeydown:_e,handleMenuAfterLeave:ge,handleMenuClickOutside:ae,handleMenuScroll:Ye,handleMenuKeydown:_e,handleMenuMousedown:qe,mergedTheme:s,cssVars:i?void 0:Ne,themeClass:be==null?void 0:be.themeClass,onRender:be==null?void 0:be.onRender})},render(){return d("div",{class:`${this.mergedClsPrefix}-select`},d(Pn,null,{default:()=>[d(Mn,null,{default:()=>d(_o,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),d(In,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===st.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>d(Pt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),vn(d(Fo,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var o,i;return[(i=(o=this.$slots).empty)===null||i===void 0?void 0:i.call(o)]},action:()=>{var o,i;return[(i=(o=this.$slots).action)===null||i===void 0?void 0:i.call(o)]}}),this.displayDirective==="show"?[[gn,this.mergedShow],[pt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[pt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Go as N};
