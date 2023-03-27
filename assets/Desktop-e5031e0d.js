import{V as Be,a as je,b as Te,p as xe,r as Ae,m as Fe,d as Me,f as Le,k as Ee,N as He,c as ke}from"./Popover-c5134b6a.js";import{r as A,w as pe,b as Ge,a as Ue,Z as We,B as Ve,c as B,L as E,j as s,h as g,T as qe,ab as Se,m as H,X as Xe,H as O,aj as ve,N as Qe,O as Ze,P as Q,a1 as Z,u as z,W as be,ae as me,_ as Je}from"./framework-95cb4087.js";import{d as P,y as ne,b as R,h as S,j as I,u as Ne,v as Ye,n as eo,c as fe,a as oe,Q as te,H as oo,m as Pe,o as no,R as to,s as L,N as ro}from"./app-84714aaa.js";import{N as io}from"./Icon-a15839f1.js";import{C as ao}from"./ChevronRight-1be918c1.js";import{h as we,c as lo}from"./create-657dc0dd.js";import{o as Y,a as ee,X as so}from"./Scrollbar-b06ffe15.js";import{u as uo}from"./use-merged-state-eecea3fd.js";import{h as co}from"./utils-aca1e85e.js";import{c as ue}from"./resolve-slot-16e06725.js";import{b as po,N as ye}from"./Button-35542151.js";import{N as fo}from"./Image-6c3062b9.js";function ho(e){return o=>{o?e.value=o.$el:e.value=null}}function vo(e,o,i){if(!o)return e;const r=A(e.value);let n=null;return pe(e,t=>{n!==null&&window.clearTimeout(n),t===!0?i&&!i.value?r.value=!0:n=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function bo(e={},o){const i=Ge({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:n}=e,t=a=>{switch(a.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(y=>{if(y!==a.key)return;const h=r[y];if(typeof h=="function")h(a);else{const{stop:N=!1,prevent:_=!1}=h;N&&a.stopPropagation(),_&&a.preventDefault(),h.handler(a)}})},c=a=>{switch(a.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}n!==void 0&&Object.keys(n).forEach(y=>{if(y!==a.key)return;const h=n[y];if(typeof h=="function")h(a);else{const{stop:N=!1,prevent:_=!1}=h;N&&a.stopPropagation(),_&&a.preventDefault(),h.handler(a)}})},u=()=>{(o===void 0||o.value)&&(Y("keydown",document,t),Y("keyup",document,c)),o!==void 0&&pe(o,a=>{a?(Y("keydown",document,t),Y("keyup",document,c)):(ee("keydown",document,t),ee("keyup",document,c))})};return co()?(We(u),Ve(()=>{(o===void 0||o.value)&&(ee("keydown",document,t),ee("keyup",document,c))})):u(),Ue(i)}const v="0!important",_e="-1px!important";function W(e){return S(e+"-type",[R("& +",[P("button",{},[S(e+"-type",[I("border",{borderLeftWidth:v}),I("state-border",{left:_e})])])])])}function V(e){return S(e+"-type",[R("& +",[P("button",[S(e+"-type",[I("border",{borderTopWidth:v}),I("state-border",{top:_e})])])])])}const mo=P("button-group",`
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
 `),V("default"),S("ghost",[V("primary"),V("info"),V("success"),V("warning"),V("error")])])])]),wo={size:{type:String,default:void 0},vertical:Boolean},yo=B({name:"ButtonGroup",props:wo,setup(e){const{mergedClsPrefixRef:o,mergedRtlRef:i}=Ne(e);return Ye("-button-group",mo,o),E(po,e),{rtlEnabled:eo("ButtonGroup",i,o),mergedClsPrefix:o}},render(){const{mergedClsPrefix:e}=this;return s("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Re=B({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return s("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),he=fe("n-dropdown-menu"),re=fe("n-dropdown"),ge=fe("n-dropdown-option");function ce(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function go(e){return e.type==="group"}function $e(e){return e.type==="divider"}function xo(e){return e.type==="render"}const Ie=B({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=H(re),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:n,pendingKeyPathRef:t,activeKeyPathRef:c,animatedRef:u,mergedShowRef:a,renderLabelRef:y,renderIconRef:h,labelFieldRef:N,childrenFieldRef:_,renderOptionRef:K,nodePropsRef:C,menuPropsRef:x}=o,k=H(ge,null),j=H(he),q=H(xe),ie=g(()=>e.tmNode.rawNode),X=g(()=>{const{value:l}=_;return ce(e.tmNode.rawNode,l)}),ae=g(()=>{const{disabled:l}=e.tmNode;return l}),de=g(()=>{if(!X.value)return!1;const{key:l,disabled:w}=e.tmNode;if(w)return!1;const{value:D}=i,{value:F}=r,{value:se}=n,{value:M}=t;return D!==null?M.includes(l):F!==null?M.includes(l)&&M[M.length-1]!==l:se!==null?M.includes(l):!1}),le=g(()=>r.value===null&&!u.value),J=vo(de,300,le),G=g(()=>!!(k!=null&&k.enteringSubmenuRef.value)),U=A(!1);E(ge,{enteringSubmenuRef:U});function T(){U.value=!0}function d(){U.value=!1}function m(){const{parentKey:l,tmNode:w}=e;w.disabled||a.value&&(n.value=l,r.value=null,i.value=w.key)}function f(){const{tmNode:l}=e;l.disabled||a.value&&i.value!==l.key&&m()}function p(l){if(e.tmNode.disabled||!a.value)return;const{relatedTarget:w}=l;w&&!we({target:w},"dropdownOption")&&!we({target:w},"scrollbarRail")&&(i.value=null)}function $(){const{value:l}=X,{tmNode:w}=e;a.value&&!l&&!w.disabled&&(o.doSelect(w.key,w.rawNode),o.doUpdateShow(!1))}return{labelField:N,renderLabel:y,renderIcon:h,siblingHasIcon:j.showIconRef,siblingHasSubmenu:j.hasSubmenuRef,menuProps:x,popoverBody:q,animated:u,mergedShowSubmenu:g(()=>J.value&&!G.value),rawNode:ie,hasSubmenu:X,pending:oe(()=>{const{value:l}=t,{key:w}=e.tmNode;return l.includes(w)}),childActive:oe(()=>{const{value:l}=c,{key:w}=e.tmNode,D=l.findIndex(F=>w===F);return D===-1?!1:D<l.length-1}),active:oe(()=>{const{value:l}=c,{key:w}=e.tmNode,D=l.findIndex(F=>w===F);return D===-1?!1:D===l.length-1}),mergedDisabled:ae,renderOption:K,nodeProps:C,handleClick:$,handleMouseMove:f,handleMouseEnter:m,handleMouseLeave:p,handleSubmenuBeforeEnter:T,handleSubmenuAfterEnter:d}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:n,clsPrefix:t,siblingHasIcon:c,siblingHasSubmenu:u,renderLabel:a,renderIcon:y,renderOption:h,nodeProps:N,props:_,scrollable:K}=this;let C=null;if(n){const q=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);C=s(Ke,Object.assign({},q,{clsPrefix:t,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const x={class:[`${t}-dropdown-option-body`,this.pending&&`${t}-dropdown-option-body--pending`,this.active&&`${t}-dropdown-option-body--active`,this.childActive&&`${t}-dropdown-option-body--child-active`,this.mergedDisabled&&`${t}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},k=N==null?void 0:N(r),j=s("div",Object.assign({class:[`${t}-dropdown-option`,k==null?void 0:k.class],"data-dropdown-option":!0},k),s("div",Se(x,_),[s("div",{class:[`${t}-dropdown-option-body__prefix`,c&&`${t}-dropdown-option-body__prefix--show-icon`]},[y?y(r):te(r.icon)]),s("div",{"data-dropdown-option":!0,class:`${t}-dropdown-option-body__label`},a?a(r):te((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),s("div",{"data-dropdown-option":!0,class:[`${t}-dropdown-option-body__suffix`,u&&`${t}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?s(io,null,{default:()=>s(ao,null)}):null)]),this.hasSubmenu?s(Be,null,{default:()=>[s(je,null,{default:()=>s("div",{class:`${t}-dropdown-offset-container`},s(Te,{show:this.mergedShowSubmenu,placement:this.placement,to:K&&this.popoverBody||void 0,teleportDisabled:!K},{default:()=>s("div",{class:`${t}-dropdown-menu-wrapper`},i?s(qe,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>C}):C)}))})]}):null);return h?h({node:j,option:r}):j}}),ko=B({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=H(he),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:n,renderOptionRef:t}=H(re);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:n,renderOption:t}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:n,renderLabel:t,renderOption:c}=this,{rawNode:u}=this.tmNode,a=s("div",Object.assign({class:`${o}-dropdown-option`},n==null?void 0:n(u)),s("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},s("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},te(u.icon)),s("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},t?t(u):te((e=u.title)!==null&&e!==void 0?e:u[this.labelField])),s("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:a,option:u}):a}}),So=B({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return s(Xe,null,s(ko,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(n=>{const{rawNode:t}=n;return t.show===!1?null:$e(t)?s(Re,{clsPrefix:i,key:n.key}):n.isGroup?(oo("dropdown","`group` node is not allowed to be put in `group` node."),null):s(Ie,{clsPrefix:i,tmNode:n,parentKey:o,key:n.key})}))}}),No=B({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return s("div",o,[e==null?void 0:e()])}}),Ke=B({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=H(re);E(he,{showIconRef:g(()=>{const n=o.value;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>n?n(a):a.icon);const{rawNode:u}=t;return n?n(u):u.icon})}),hasSubmenuRef:g(()=>{const{value:n}=i;return e.tmNodes.some(t=>{var c;if(t.isGroup)return(c=t.children)===null||c===void 0?void 0:c.some(({rawNode:a})=>ce(a,n));const{rawNode:u}=t;return ce(u,n)})})});const r=A(null);return E(Fe,null),E(Me,null),E(xe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(n=>{const{rawNode:t}=n;return t.show===!1?null:xo(t)?s(No,{tmNode:n,key:n.key}):$e(t)?s(Re,{clsPrefix:o,key:n.key}):go(t)?s(So,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key}):s(Ie,{clsPrefix:o,tmNode:n,parentKey:e,key:n.key,props:t.props,scrollable:i})});return s("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?s(so,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?Ae({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),Po=P("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Le(),P("dropdown-option",`
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
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),R("&::before","background-color: var(--n-option-color-hover);")]),S("active",`
 color: var(--n-option-text-color-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),R("&::before","background-color: var(--n-option-color-active);")]),S("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[I("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),S("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),S("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[I("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[S("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),I("prefix",`
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
 `)]),I("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),I("suffix",`
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
 `),S("scrollable",[I("content",`
 padding: var(--n-padding);
 `)])]),_o={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},Ro=Object.keys(ke),$o=Object.assign(Object.assign(Object.assign({},ke),_o),Pe.props),Io=B({name:"Dropdown",inheritAttrs:!1,props:$o,setup(e){const o=A(!1),i=uo(O(e,"show"),o),r=g(()=>{const{keyField:d,childrenField:m}=e;return lo(e.options,{getKey(f){return f[d]},getDisabled(f){return f.disabled===!0},getIgnored(f){return f.type==="divider"||f.type==="render"},getChildren(f){return f[m]}})}),n=g(()=>r.value.treeNodes),t=A(null),c=A(null),u=A(null),a=g(()=>{var d,m,f;return(f=(m=(d=t.value)!==null&&d!==void 0?d:c.value)!==null&&m!==void 0?m:u.value)!==null&&f!==void 0?f:null}),y=g(()=>r.value.getPath(a.value).keyPath),h=g(()=>r.value.getPath(e.value).keyPath),N=oe(()=>e.keyboard&&i.value);bo({keydown:{ArrowUp:{prevent:!0,handler:ae},ArrowRight:{prevent:!0,handler:X},ArrowDown:{prevent:!0,handler:de},ArrowLeft:{prevent:!0,handler:ie},Enter:{prevent:!0,handler:le},Escape:q}},N);const{mergedClsPrefixRef:_,inlineThemeDisabled:K}=Ne(e),C=Pe("Dropdown","-dropdown",Po,to,e,_);E(re,{labelFieldRef:O(e,"labelField"),childrenFieldRef:O(e,"childrenField"),renderLabelRef:O(e,"renderLabel"),renderIconRef:O(e,"renderIcon"),hoverKeyRef:t,keyboardKeyRef:c,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:y,activeKeyPathRef:h,animatedRef:O(e,"animated"),mergedShowRef:i,nodePropsRef:O(e,"nodeProps"),renderOptionRef:O(e,"renderOption"),menuPropsRef:O(e,"menuProps"),doSelect:x,doUpdateShow:k}),pe(i,d=>{!e.animated&&!d&&j()});function x(d,m){const{onSelect:f}=e;f&&ue(f,d,m)}function k(d){const{"onUpdate:show":m,onUpdateShow:f}=e;m&&ue(m,d),f&&ue(f,d),o.value=d}function j(){t.value=null,c.value=null,u.value=null}function q(){k(!1)}function ie(){G("left")}function X(){G("right")}function ae(){G("up")}function de(){G("down")}function le(){const d=J();d!=null&&d.isLeaf&&i.value&&(x(d.key,d.rawNode),k(!1))}function J(){var d;const{value:m}=r,{value:f}=a;return!m||f===null?null:(d=m.getNode(f))!==null&&d!==void 0?d:null}function G(d){const{value:m}=a,{value:{getFirstAvailableNode:f}}=r;let p=null;if(m===null){const $=f();$!==null&&(p=$.key)}else{const $=J();if($){let l;switch(d){case"down":l=$.getNext();break;case"up":l=$.getPrev();break;case"right":l=$.getChild();break;case"left":l=$.getParent();break}l&&(p=l.key)}}p!==null&&(t.value=null,c.value=p)}const U=g(()=>{const{size:d,inverted:m}=e,{common:{cubicBezierEaseInOut:f},self:p}=C.value,{padding:$,dividerColor:l,borderRadius:w,optionOpacityDisabled:D,[L("optionIconSuffixWidth",d)]:F,[L("optionSuffixWidth",d)]:se,[L("optionIconPrefixWidth",d)]:M,[L("optionPrefixWidth",d)]:Ce,[L("fontSize",d)]:De,[L("optionHeight",d)]:Oe,[L("optionIconSize",d)]:ze}=p,b={"--n-bezier":f,"--n-font-size":De,"--n-padding":$,"--n-border-radius":w,"--n-option-height":Oe,"--n-option-prefix-width":Ce,"--n-option-icon-prefix-width":M,"--n-option-suffix-width":se,"--n-option-icon-suffix-width":F,"--n-option-icon-size":ze,"--n-divider-color":l,"--n-option-opacity-disabled":D};return m?(b["--n-color"]=p.colorInverted,b["--n-option-color-hover"]=p.optionColorHoverInverted,b["--n-option-color-active"]=p.optionColorActiveInverted,b["--n-option-text-color"]=p.optionTextColorInverted,b["--n-option-text-color-hover"]=p.optionTextColorHoverInverted,b["--n-option-text-color-active"]=p.optionTextColorActiveInverted,b["--n-option-text-color-child-active"]=p.optionTextColorChildActiveInverted,b["--n-prefix-color"]=p.prefixColorInverted,b["--n-suffix-color"]=p.suffixColorInverted,b["--n-group-header-text-color"]=p.groupHeaderTextColorInverted):(b["--n-color"]=p.color,b["--n-option-color-hover"]=p.optionColorHover,b["--n-option-color-active"]=p.optionColorActive,b["--n-option-text-color"]=p.optionTextColor,b["--n-option-text-color-hover"]=p.optionTextColorHover,b["--n-option-text-color-active"]=p.optionTextColorActive,b["--n-option-text-color-child-active"]=p.optionTextColorChildActive,b["--n-prefix-color"]=p.prefixColor,b["--n-suffix-color"]=p.suffixColor,b["--n-group-header-text-color"]=p.groupHeaderTextColor),b}),T=K?no("dropdown",g(()=>`${e.size[0]}${e.inverted?"i":""}`),U,e):void 0;return{mergedClsPrefix:_,mergedTheme:C,tmNodes:n,mergedShow:i,handleAfterLeave:()=>{e.animated&&j()},doUpdateShow:k,cssVars:K?void 0:U,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const e=(r,n,t,c,u)=>{var a;const{mergedClsPrefix:y,menuProps:h}=this;(a=this.onRender)===null||a===void 0||a.call(this);const N=(h==null?void 0:h(void 0,this.tmNodes.map(K=>K.rawNode)))||{},_={ref:ho(n),class:[r,`${y}-dropdown`,this.themeClass],clsPrefix:y,tmNodes:this.tmNodes,style:[t,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:u};return s(Ke,Se(this.$attrs,_,N))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return s(He,Object.assign({},Ee(this.$props,Ro),i),{trigger:()=>{var r,n;return(n=(r=this.$slots).default)===null||n===void 0?void 0:n.call(r)}})}}),Ko=B({__name:"Desktop",async setup(e){let o,i;const r=navigator.platform.toLowerCase(),n=A("win");r.includes("win")?n.value="win":r.includes("linux")?n.value="linux":r.includes("mac")&&(n.value="mac"),console.log(n.value);const t=([o,i]=ve(()=>fetch("https://api.nn.ci/proxy/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop-proxy.json")),o=await o,i(),o),u=([o,i]=ve(()=>t.json()),o=await o,i(),o).name.slice(1),a={win:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_x64_en-US.msi`,linux:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_amd64.deb`,mac:`https://ghproxy.com/https://github.com/alist-org/desktop-release/releases/latest/download/alist-desktop_${u}_x64.dmg`};let y={down:"Download"};const h=[{key:"win",label:"Windows"},{key:"linux",label:"Linux"},{key:"mac",label:"MacOS"}],N=g(()=>{var x;return(x=h.find(k=>k.key===n.value))==null?void 0:x.label}),_=g(()=>h.map(x=>({...x,label:`${x.label} ${n.value===x.key?"✅":""}`})));location.pathname.startsWith("/zh/")&&(y={down:"下载"});function K(){window.open(a[n.value],"_blank")}function C(x){n.value=x}return(x,k)=>(Qe(),Ze(z(ro),{align:"center",vertical:"",size:"large"},{default:Q(()=>[Z(z(yo),{class:"down"},{default:Q(()=>[Z(z(Io),{trigger:"hover",options:z(_),onSelect:C,size:"large"},{default:Q(()=>[Z(z(ye),{size:"large",type:"primary",tertiary:""},{default:Q(()=>[be("💻"+me(z(N)),1)]),_:1})]),_:1},8,["options"]),Z(z(ye),{size:"large",onClick:K,type:"info",secondary:""},{default:Q(()=>[be(me(z(y).down),1)]),_:1})]),_:1}),Z(z(fo),{src:"/img/guide/desktop.png"})]),_:1}))}});const Ho=Je(Ko,[["__scopeId","data-v-12e9e8f0"],["__file","Desktop.vue"]]);export{Ho as D};
