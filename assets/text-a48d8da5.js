import{d as n,b as h,l as Y,e as d,m as s,n as Z,o as ee,u as w,h as x,q as oe,k as T,r as re,s as te,j as u,v as ne,w as de,t as ae}from"./app-09a6d651.js";import{r as m,c as se}from"./browser-08b9bb69.js";import{c as B,h as p,j as l}from"./framework-ffef1a40.js";const le=n([h("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[Y({background:"var(--n-color-modal)"}),d("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),d("content-segmented",[n(">",[s("content",{paddingTop:"var(--n-padding-bottom)"})])]),d("content-soft-segmented",[n(">",[s("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),d("footer-segmented",[n(">",[s("footer",{paddingTop:"var(--n-padding-bottom)"})])]),d("footer-soft-segmented",[n(">",[s("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[h("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[s("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),s("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),s("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),s("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),s("content","flex: 1; min-width: 0;"),s("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),s("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),h("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),d("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),d("action-segmented",[n(">",[s("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("content-segmented, content-soft-segmented",[n(">",[s("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("footer-segmented, footer-soft-segmented",[n(">",[s("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),d("embedded",`
 background-color: var(--n-color-embedded);
 `)]),Z(h("card",`
 background: var(--n-color-modal);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),ee(h("card",`
 background: var(--n-color-popover);
 `,[d("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),ie={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},ce=Object.assign(Object.assign({},x.props),ie),he=B({name:"Card",props:ce,setup(e){const b=()=>{const{onClose:r}=e;r&&se(r)},{inlineThemeDisabled:i,mergedClsPrefixRef:o,mergedRtlRef:c}=w(e),t=x("Card","-card",le,te,e,o),f=oe("Card",c,o),g=p(()=>{const{size:r}=e,{self:{color:v,colorModal:C,colorTarget:z,textColor:y,titleTextColor:S,titleFontWeight:$,borderColor:k,actionColor:R,borderRadius:P,lineHeight:_,closeIconColor:j,closeIconColorHover:E,closeIconColorPressed:O,closeColorHover:V,closeColorPressed:M,closeBorderRadius:I,closeIconSize:F,closeSize:H,boxShadow:N,colorPopover:D,colorEmbedded:L,colorEmbeddedModal:W,colorEmbeddedPopover:K,[u("padding",r)]:q,[u("fontSize",r)]:A,[u("titleFontSize",r)]:G},common:{cubicBezierEaseInOut:J}}=t.value,{top:Q,left:U,bottom:X}=ne(q);return{"--n-bezier":J,"--n-border-radius":P,"--n-color":v,"--n-color-modal":C,"--n-color-popover":D,"--n-color-embedded":L,"--n-color-embedded-modal":W,"--n-color-embedded-popover":K,"--n-color-target":z,"--n-text-color":y,"--n-line-height":_,"--n-action-color":R,"--n-title-text-color":S,"--n-title-font-weight":$,"--n-close-icon-color":j,"--n-close-icon-color-hover":E,"--n-close-icon-color-pressed":O,"--n-close-color-hover":V,"--n-close-color-pressed":M,"--n-border-color":k,"--n-box-shadow":N,"--n-padding-top":Q,"--n-padding-bottom":X,"--n-padding-left":U,"--n-font-size":A,"--n-title-font-size":G,"--n-close-size":H,"--n-close-icon-size":F,"--n-close-border-radius":I}}),a=i?T("card",p(()=>e.size[0]),g,e):void 0;return{rtlEnabled:f,mergedClsPrefix:o,mergedTheme:t,handleCloseClick:b,cssVars:i?void 0:g,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:e,bordered:b,hoverable:i,mergedClsPrefix:o,rtlEnabled:c,onRender:t,embedded:f,tag:g,$slots:a}=this;return t==null||t(),l(g,{class:[`${o}-card`,this.themeClass,f&&`${o}-card--embedded`,{[`${o}-card--rtl`]:c,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:b,[`${o}-card--hoverable`]:i}],style:this.cssVars,role:this.role},m(a.cover,r=>r&&l("div",{class:`${o}-card-cover`,role:"none"},r)),m(a.header,r=>r||this.title||this.closable?l("div",{class:`${o}-card-header`,style:this.headerStyle},l("div",{class:`${o}-card-header__main`,role:"heading"},r||this.title),m(a["header-extra"],v=>v&&l("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},v)),this.closable?l(re,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),m(a.default,r=>r&&l("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},r)),m(a.footer,r=>r&&[l("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},r)]),m(a.action,r=>r&&l("div",{class:`${o}-card__action`,role:"none"},r)))}}),be=h("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("strong",`
 font-weight: var(--n-font-weight-strong);
 `),d("italic",{fontStyle:"italic"}),d("underline",{textDecoration:"underline"}),d("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),ge=Object.assign(Object.assign({},x.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),ue=B({name:"Text",props:ge,setup(e){const{mergedClsPrefixRef:b,inlineThemeDisabled:i}=w(e),o=x("Typography","-text",be,ae,e,b),c=p(()=>{const{depth:f,type:g}=e,a=g==="default"?f===void 0?"textColor":`textColor${f}Depth`:u("textColor",g),{common:{fontWeightStrong:r,fontFamilyMono:v,cubicBezierEaseInOut:C},self:{codeTextColor:z,codeBorderRadius:y,codeColor:S,codeBorder:$,[a]:k}}=o.value;return{"--n-bezier":C,"--n-text-color":k,"--n-font-weight-strong":r,"--n-font-famliy-mono":v,"--n-code-border-radius":y,"--n-code-text-color":z,"--n-code-color":S,"--n-code-border":$}}),t=i?T("text",p(()=>`${e.type[0]}${e.depth||""}`),c,e):void 0;return{mergedClsPrefix:b,compitableTag:de(e,["as","tag"]),cssVars:i?void 0:c,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,b,i;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const c=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(i=(b=this.$slots).default)===null||i===void 0?void 0:i.call(b);return this.code?l("code",{class:c,style:this.cssVars},this.delete?l("del",null,t):t):this.delete?l("del",{class:c,style:this.cssVars},t):l(this.compitableTag||"span",{class:c,style:this.cssVars},t)}});export{he as N,ue as a};
