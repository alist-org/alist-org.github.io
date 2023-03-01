import{c as h,k as t,a as m,D as H,b as F,d as M,u as C,n as N,e as j,N as O,y as W,E as V,F as D,W as G,I as K,S as q,G as J,h as i}from"./app-2b0e8cf0.js";import{e as Q,r as U,a as X}from"./Space-fe0b4b01.js";import{c as Y,h as p,r as Z,j as r,ab as ee}from"./framework-acfcafcc.js";const oe=h("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[t("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),m("closable",[h("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),h("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),H({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),t("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),m("show-icon",[h("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),h("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[F("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),re=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ae=Y({name:"Alert",inheritAttrs:!1,props:re,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:a,inlineThemeDisabled:u,mergedRtlRef:f}=M(n),d=C("Alert","-alert",oe,J,n,e),z=N("Alert",f,e),g=p(()=>{const{common:{cubicBezierEaseInOut:l},self:o}=d.value,{fontSize:x,borderRadius:I,titleFontWeight:R,lineHeight:A,iconSize:w,iconMargin:b,iconMarginRtl:$,closeIconSize:P,closeBorderRadius:T,closeSize:_,closeMargin:B,closeMarginRtl:S,padding:k}=o,{type:s}=n,{left:E,right:L}=X(b);return{"--n-bezier":l,"--n-color":o[i("color",s)],"--n-close-icon-size":P,"--n-close-border-radius":T,"--n-close-color-hover":o[i("closeColorHover",s)],"--n-close-color-pressed":o[i("closeColorPressed",s)],"--n-close-icon-color":o[i("closeIconColor",s)],"--n-close-icon-color-hover":o[i("closeIconColorHover",s)],"--n-close-icon-color-pressed":o[i("closeIconColorPressed",s)],"--n-icon-color":o[i("iconColor",s)],"--n-border":o[i("border",s)],"--n-title-text-color":o[i("titleTextColor",s)],"--n-content-text-color":o[i("contentTextColor",s)],"--n-line-height":A,"--n-border-radius":I,"--n-font-size":x,"--n-title-font-weight":R,"--n-icon-size":w,"--n-icon-margin":b,"--n-icon-margin-rtl":$,"--n-close-size":_,"--n-close-margin":B,"--n-close-margin-rtl":S,"--n-padding":k,"--n-icon-margin-left":E,"--n-icon-margin-right":L}}),c=u?j("alert",p(()=>n.type[0]),g,n):void 0,v=Z(!0),y=()=>{const{onAfterLeave:l,onAfterHide:o}=n;l&&l(),o&&o()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:a,visible:v,handleCloseClick:()=>{var l;Promise.resolve((l=n.onClose)===null||l===void 0?void 0:l.call(n)).then(o=>{o!==!1&&(v.value=!1)})},handleAfterLeave:()=>{y()},mergedTheme:d,cssVars:u?void 0:g,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),r(W,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:a}=this,u={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},ee(this.$attrs,u)),this.closable&&r(O,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&r("div",{class:`${e}-alert__border`}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},Q(a.icon,()=>[r(V,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(q,null);case"info":return r(K,null);case"warning":return r(G,null);case"error":return r(D,null);default:return null}}})])),r("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},U(a.header,f=>{const d=f||this.title;return d?r("div",{class:`${e}-alert-body__title`},d):null}),a.default&&r("div",{class:`${e}-alert-body__content`},a))):null}})}});export{ae as N};
