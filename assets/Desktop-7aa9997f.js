import{r as A,w as pe,b as Be,a as Te,Z as je,B as Ae,c as D,j as d,L as E,h as g,T as Fe,ab as xe,m as H,X as Le,H as z,ai as ve,N as Me,O as Ee,P as Z,a1 as J,u as B,W as be,ae as me,_ as He}from"./framework-ffef1a40.js";import{V as Ge,a as Ue,b as We,p as ke,r as qe,m as Ve,d as Xe,f as Ze,k as Je,N as Qe,c as Se}from"./Popover-2fbbbfeb.js";import{b as P,A as ne,d as R,e as S,m as C,u as Ne,x as Ye,q as eo,c as fe,a as oe,J as te,I as oo,h as Pe,k as no,K as to,j as M,N as ro}from"./app-9926302b.js";import{N as io}from"./Icon-4ebfe1fe.js";import{h as we,c as ao}from"./create-657dc0dd.js";import{o as Y,a as ee,X as lo,u as so}from"./Scrollbar-f9a26d10.js";import{h as uo}from"./utils-76c4cc76.js";import{c as ue}from"./browser-1bf661b8.js";import{b as co,N as ye}from"./Button-3cd2e90c.js";import{N as po}from"./Image-6dc1024f.js";function fo(e){return o=>{o?e.value=o.$el:e.value=null}}function ho(e,o,i){if(!o)return e;const r=A(e.value);let n=null;return pe(e,t=>{n!==null&&window.clearTimeout(n),t===!0?i&&!i.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function vo(e={},o){const i=Be({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,t=a=>{switch(a.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==a.key)return;const h=r[y];if(typeof h=="function")h(a);else{const{stop:N=!1,prevent:_=!1}=h;N&&a.stopPropagation(),_&&a.preventDefault(),h.handler(a)}})},c=a=>{switch(a.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}n!==void 0&&Object.keys(n).forEach(y=>{if(y!==a.key)return;const h=n[y];if(typeof h=="function")h(a);else{const{stop:N=!1,prevent:_=!1}=h;N&&a.stopPropagation(),_&&a.preventDefault(),h.handler(a)}})},u=()=>{(o===void 0||o.value)&&(Y("keydown",document,t),Y("keyup",document,c)),o!==void 0&&pe(o,a=>{a?(Y("keydown",document,t),Y("keyup",document,c)):(ee("keydown",document,t),ee("keyup",document,c))})};return uo()?(je(u),Ae(()=>{(o===void 0||o.value)&&(ee("keydown",document,t),ee("keyup",document,c))})):u(),Te(i)}const bo=D({name:"ChevronRight",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",fill:"currentColor"}))}}),v="0!important",_e="-1px!important";function W(e){return S(e+"-type",[R("& +",[P("button",{},[S(e+"-type",[C("border",{borderLeftWidth:v}),C("state-border",{left:_e})])])])])}function q(e){return S(e+"-type",[R("& +",[P("button",[S(e+"-type",[C("border",{borderTopWidth:v}),C("state-border",{top:_e})])])])])}const mo=P("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ne("vertical",{flexDirection:"row"},[ne("rtl",[P("button",[R("&:first-child:not(:last-child)",`
 margin-right: ${v};
 border-top-right-radius: ${v};
 border-bottom-right-radius: ${v};
 `),R("&:last-child:not(:first-child)",`
 margin-left: ${v};
 border-top-left-radius: ${v};
 border-bottom-left-radius: ${v};
 `),R("&:not(:first-child):not(:last-child)",`
 margin-left: ${v};
 margin-right: ${v};
 border-radius: ${v};
 `),W("default"),S("ghost",[W("primary"),W("info"),W("success"),W("warning"),W("error")])])])]),S("vertical",{flexDirection:"column"},[P("button",[R("&:first-child:not(:last-child)",`
 margin-bottom: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-bottom-left-radius: ${v};
 border-bottom-right-radius: ${v};
 `),R("&:last-child:not(:first-child)",`
 margin-top: ${v};
 margin-left: ${v};
 margin-right: ${v};
 border-top-left-radius: ${v};
 border-top-right-radius: ${v};
 `),R("&:not(:first-child):not(:last-child)",`
 margin: ${v};
 border-radius: ${v};
 `),q("default"),S("ghost",[q("primary"),q("info"),q("success"),q("warning"),q("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},yo=D({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i}=Ne(e);return Ye("-button-group",mo,o),E(co,e),{rtlEnabled:eo("ButtonGroup",i,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return d("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Re=D({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return d("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),he=fe("n-dropdown-menu"),re=fe("n-dropdown"),ge=fe("n-dropdown-option");function ce(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function go(e){return e.type==="group"}function $e(e){return e.type==="divider"}function xo(e){return e.type==="render"}const Ce=D({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=H(re),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:t,activeKeyPathRef:c,animatedRef:u,mergedShowRef:a,renderLabelRef:y,renderIconRef:h,labelFieldRef:N,childrenFieldRef:_,renderOptionRef:I,nodePropsRef:K,menuPropsRef:x}=o,k=H(ge,null),T=H(he),V=H(ke),ie=g(()=>e.tmNode.rawNode),X=g(()=>{const{value:s}=_;return ce(e.tmNode.rawNode,s)}),ae=g(()=>{const{disabled:s}=e.tmNode;return s}),de=g(()=>{if(!X.value)return!1;const{key:s,disabled:w}=e.tmNode;if(w)return!1;const{value:O}=i,{value:F}=r,{value:se}=n,{value:L}=t;return O!==null?L.includes(s):F!==null?L.includes(s)&&L[L.length-1]!==s:se!==null?L.includes(s):!1}),le=g(()=>r.value===null&&!u.value),Q=ho(de,300,le),G=g(()=>!!(k!=null&&k.enteringSubmenuRef.value)),U=A(!1);E(ge,{enteringSubmenuRef:U});function j(){U.value=!0}function l(){U.value=!1}function m(){const{parentKey:s,tmNode:w}=e;w.disabled||a.value&&(n.value=s,r.value=null,i.value=w.key)}function f(){const{tmNode:s}=e;s.disabled||a.value&&i.value!==s.key&&m()}function p(s){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:w}=s;w&&!we({target:w},"dropdownOption")&&!we({target:w},"scrollbarRail")&&(i.value=null)}function $(){const{value:s}=X,{tmNode:w}=e;a.value&&!s&&!w.disabled&&(o.doSelect(w.key,w.rawNode),o.doUpdateShow(!1))}return{labelField:N,renderLabel:y,renderIcon:h,siblingHasIcon:T.showIconRef,siblingHasSubmenu:T.hasSubmenuRef,menuProps:x,popoverBody:V,animated:u,mergedShowSubmenu:g(()=>Q.value&&!G.value),rawNode:ie,hasSubmenu:X,pending:oe(()=>{const{value:s}=t,{key:w}=e.tmNode;return s.includes(w)}),childActive:oe(()=>{const{value:s}=c,{key:w}=e.tmNode,O=s.findIndex(F=>w===F);return O===-1?!1:O<s.length-1}),active:oe(()=>{const{value:s}=c,{key:w}=e.tmNode,O=s.findIndex(F=>w===F);return O===-1?!1:O===s.length-1}),mergedDisabled:ae,renderOption:I,nodeProps:K,handleClick:$,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:p,handleSubmenuBeforeEnter:j,handleSubmenuAfterEnter:l}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:n,clsPrefix:t,siblingHasIcon:c,siblingHasSubmenu:u,renderLabel:a,renderIcon:y,renderOption:h,nodeProps:N,props:_,scrollable:I}=this;let K=null;if(n){const V=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);K=d(Ie,Object.assign({},V,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const x={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=N==null?void 0:N(r),T=d("div",Object.assign({class:[`${t}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),d("div",xe(x,_),[d("div",{class:[`${t}-dropdown-option-body__prefix`,c&&`${t}-dropdown-option-body__prefix--show-icon`]},[y?y(r):te(r.icon)]),d("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),d("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,u&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?d(io,null,{default:()=>d(bo,null)}):null)]),this.hasSubmenu?d(Ge,null,{default:()=>[d(Ue,null,{default:()=>d("div",{class:`${t}-dropdown-offset-container`},d(We,{show:this.mergedShowSubmenu,placement:this.placement,to:I&&this.popoverBody||void 0,teleportDisabled:!I},{default:()=>d("div",{class:`${t}-dropdown-menu-wrapper`},i?d(Fe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>K}):K)}))})]}):null);return h?h({node:T,option:r}):T}}),ko=D({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=H(he),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:n,renderOptionRef:t}=H(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:n,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:n,renderLabel:t,renderOption:c}=this,{rawNode:u}=this.tmNode,a=d("div",Object.assign({class:`${o}-dropdown-option`},n==null?void 0:n(u)),d("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},d("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(u.icon)),d("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(u):te((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),d("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:a,option:u}):a}}),So=D({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return d(Le,null,d(ko,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:t}=n;return t.show===!1?null:$e(t)?d(Re,{clsPrefix:i,key:n.key}):n.isGroup?(oo("dropdown","`group` node is not allowed to be put in `group` node."),null):d(Ce,{clsPrefix:i,tmNode:n,parentKey:o,key:n.key})}))}}),No=D({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return d("div",o,[e==null?void 0:e()])}}),Ie=D({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=H(re);E(he,{showIconRef:g(()=>{const n=o.value;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>n?n(a):a.icon);const{rawNode:u}=t;return n?n(u):u.icon})}),hasSubmenuRef:g(()=>{const{value:n}=i;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>ce(a,n));const{rawNode:u}=t;return ce(u,n)})})});const r=A(null);return E(Ve,null),E(Xe,null),E(ke,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(n=>{const{rawNode:t}=n;return t.show===!1?null:xo(t)?d(No,{tmNode:n,key:n.key}):$e(t)?d(Re,{clsPrefix:o,key:n.key}):go(t)?d(So,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key}):d(Ce,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key,props:t.props,scrollable:i})});return d("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?d(lo,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?qe({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),Po=P("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Ze(),P("dropdown-option",`
 position: relative;
 `,[R("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[R("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),P("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[R("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),ne("disabled",[S("pending",`
 color: var(--n-option-text-color-hover);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),S("active",`
 color: var(--n-option-text-color-active);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),S("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[C("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),S("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),S("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[C("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[S("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),C("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[S("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),C("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),C("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[S("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),P("icon",`
 font-size: var(--n-option-icon-size);
 `)]),P("dropdown-menu","pointer-events: all;")]),P("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),P("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),P("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),R(">",[P("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),ne("scrollable",`
 padding: var(--n-padding);
 `),S("scrollable",[C("content",`
 padding: var(--n-padding);
 `)])]),_o={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(Se),$o=Object.assign(Object.assign(Object.assign({},Se),_o),Pe.props),Co=D({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=A(!1),i=so(z(e,"show"),o),r=g(()=>{const{keyField:l,childrenField:m}=e;return ao(e.options,{getKey(f){return f[l]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),n=g(()=>r.value.treeNodes),t=A(null),c=A(null),u=A(null),a=g(()=>{var l,m,f;return(f=(m=(l=t.value)!==null&&l!==void 0?l:c.value)!==null&&m!==void 0?m:u.value)!==null&&f!==void 0?f:null}),y=g(()=>r.value.getPath(a.value).keyPath),h=g(()=>r.value.getPath(e.value).keyPath),N=oe(()=>e.keyboard&&i.value);vo({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:X},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:V}},N);const{mergedClsPrefixRef:_,inlineThemeDisabled:I}=Ne(e),K=Pe("Dropdown","-dropdown",Po,to,e,_);E(re,{labelFieldRef:z(e,"labelField"),childrenFieldRef:z(e,"childrenField"),renderLabelRef:z(e,"renderLabel"),renderIconRef:z(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:c,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:y,activeKeyPathRef:h,animatedRef:z(e,"animated"),mergedShowRef:i,nodePropsRef:z(e,"nodeProps"),renderOptionRef:z(e,"renderOption"),menuPropsRef:z(e,"menuProps"),doSelect:x,doUpdateShow:k}),pe(i,l=>{!e.animated&&!l&&T()});function x(l,m){const{onSelect:f}=e;f&&ue(f,l,m)}function k(l){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&ue(m,l),f&&ue(f,l),o.value=l}function T(){t.value=null,c.value=null,u.value=null}function V(){k(!1)}function ie(){G("left")}function X(){G("right")}function ae(){G("up")}function de(){G("down")}function le(){const l=Q();l!=null&&l.isLeaf&&i.value&&(x(l.key,l.rawNode),k(!1))}function Q(){var l;const{value:m}=r,{value:f}=a;return!m||f===null?null:(l=m.getNode(f))!==null&&l!==void 0?l:null}function G(l){const{value:m}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(m===null){const $=f();$!==null&&(p=$.key)}else{const $=Q();if($){let s;switch(l){case"down":s=$.getNext();break;case"up":s=$.getPrev();break;case"right":s=$.getChild();break;case"left":s=$.getParent();break}s&&(p=s.key)}}p!==null&&(t.value=null,c.value=p)}const U=g(()=>{const{size:l,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:p}=K.value,{padding:$,dividerColor:s,borderRadius:w,optionOpacityDisabled:O,[M("optionIconSuffixWidth",l)]:F,[M("optionSuffixWidth",l)]:se,[M("optionIconPrefixWidth",l)]:L,[M("optionPrefixWidth",l)]:Ke,[M("fontSize",l)]:De,[M("optionHeight",l)]:Oe,[M("optionIconSize",l)]:ze}=p,b={"--n-bezier":f,"--n-font-size":De,"--n-padding":$,"--n-border-radius":w,"--n-option-height":Oe,"--n-option-prefix-width":Ke,"--n-option-icon-prefix-width":L,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":F,"--n-option-icon-size":ze,"--n-divider-color":s,"--n-option-opacity-disabled":O};return m?(b["--n-color"]=p.colorInverted,b["--n-option-color-hover"]=p.optionColorHoverInverted,b["--n-option-color-active"]=p.optionColorActiveInverted,b["--n-option-text-color"]=p.optionTextColorInverted,b["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,b["--n-option-text-color-active"]=p.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,b["--n-prefix-color"]=p.prefixColorInverted,b["--n-suffix-color"]=p.suffixColorInverted,b["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(b["--n-color"]=p.color,b["--n-option-color-hover"]=p.optionColorHover,b["--n-option-color-active"]=p.optionColorActive,b["--n-option-text-color"]=p.optionTextColor,b["--n-option-text-color-hover"]=p.optionTextColorHover,b["--n-option-text-color-active"]=p.optionTextColorActive,b["--n-option-text-color-child-active"]=p.optionTextColorChildActive,b["--n-prefix-color"]=p.prefixColor,b["--n-suffix-color"]=p.suffixColor,b["--n-group-header-text-color"]=p.groupHeaderTextColor),b}),j=I?no("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:_,mergedTheme:K,tmNodes:n,mergedShow:i,handleAfterLeave:()=>{e.animated&&T()},doUpdateShow:k,cssVars:I?void 0:U,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender}},render(){const e=(r,n,t,c,u)=>{var a;const{mergedClsPrefix:y,menuProps:h}=this;(a=this.onRender)===null||a===void 0||a.call(this);const N=(h==null?void 0:h(void 0,this.tmNodes.map(I=>I.rawNode)))||{},_={ref:fo(n),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:u};return d(Ie,xe(this.$attrs,_,N))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return d(Qe,Object.assign({},Je(this.$props,Ro),i),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}}),Io=D({__name:"Desktop",async setup(e){let o,i;const r=navigator.platform.toLowerCase(),n=A("win");r.includes("win")?n.value="win":r.includes("linux")?n.value="linux":r.includes("mac")&&(n.value="mac"),console.log(n.value);const t=([o,i]=ve(()=>fetch("https://api.nn.ci/proxy/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop-proxy.json")),o=await o,i(),o),u=([o,i]=ve(()=>t.json()),o=await o,i(),o).name.slice(1),a={win:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_x64_en-US.msi`,linux:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_amd64.deb`,mac:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_x64.dmg`};let y={down:"Download"};const h=[{key:"win",label:"Windows"},{key:"linux",label:"Linux"},{key:"mac",label:"MacOS"}],N=g(()=>{var x;return(x=h.find(k=>k.key===n.value))==null?void 0:x.label}),_=g(()=>h.map(x=>({...x,label:`${x.label} ${n.value===x.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(y={down:"下载"});function I(){window.open(a[n.value],"_blank")}function K(x){n.value=x}return(x,k)=>(Me(),Ee(B(ro),{align:"center",vertical:"",size:"large"},{default:Z(()=>[J(B(yo),{class:"down"},{default:Z(()=>[J(B(Co),{trigger:"hover",options:B(_),onSelect:K,size:"large"},{default:Z(()=>[J(B(ye),{size:"large",type:"primary",tertiary:""},{default:Z(()=>[be("💻"+me(B(N)),1)]),_:1})]),_:1},8,["options"]),J(B(ye),{size:"large",onClick:I,type:"info",secondary:""},{default:Z(()=>[be(me(B(y).down),1)]),_:1})]),_:1}),J(B(po),{src:"/img/guide/desktop.png"})]),_:1}))}});const Mo=He(Io,[["__scopeId","data-v-12e9e8f0"],["__file","Desktop.vue"]]);export{Mo as D};
