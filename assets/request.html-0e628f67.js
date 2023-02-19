import{N as C}from"./Button-65c4a5a3.js";import{u as ue,b as D,d as _,l as ge,h as y,g as be,a as E,N}from"./Space-ed3f6b4b.js";import{c as s,b as x,z as fe,e as i,d,A as pe,B as me,u as M,f as w,C as he,D as ve}from"./app-05c8b916.js";import{N as _e,u as xe}from"./Close-507d69bf.js";import{c as k,h as z,j as u,b as Ce,N as O,O as j,P as p,Z as f,u as c,a5 as h,a7 as I,aa as ye,Q as V,_ as F,a4 as ze,G as we}from"./framework-65876511.js";const ke=s([x("card",`
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
 `,[fe({background:"var(--n-color-modal)"}),i("hoverable",[s("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[s(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[s(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),i("footer-segmented",[s(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),i("footer-soft-segmented",[s(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),s(">",[x("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[s("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),x("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[s("img",`
 display: block;
 width: 100%;
 `)]),i("bordered",`
 border: 1px solid var(--n-border-color);
 `,[s("&:target","border-color: var(--n-color-target);")]),i("action-segmented",[s(">",[d("action",[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("content-segmented, content-soft-segmented",[s(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("footer-segmented, footer-soft-segmented",[s(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[s("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("embedded",`
 background-color: var(--n-color-embedded);
 `)]),pe(x("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),me(x("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),$e={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Se=Object.assign(Object.assign({},w.props),$e),Re=k({name:"Card",props:Se,setup(o){const g=()=>{const{onClose:t}=o;t&&ge(t)},{inlineThemeDisabled:l,mergedClsPrefixRef:e,mergedRtlRef:r}=M(o),a=w("Card","-card",ke,he,o,e),v=ue("Card",r,e),m=z(()=>{const{size:t}=o,{self:{color:b,colorModal:$,colorTarget:S,textColor:R,titleTextColor:B,titleFontWeight:P,borderColor:T,actionColor:U,borderRadius:H,lineHeight:L,closeIconColor:W,closeIconColorHover:G,closeIconColorPressed:Z,closeColorHover:A,closeColorPressed:K,closeBorderRadius:J,closeIconSize:Q,closeSize:X,boxShadow:Y,colorPopover:ee,colorEmbedded:oe,colorEmbeddedModal:te,colorEmbeddedPopover:re,[y("padding",t)]:ne,[y("fontSize",t)]:ae,[y("titleFontSize",t)]:le},common:{cubicBezierEaseInOut:se}}=a.value,{top:ie,left:de,bottom:ce}=be(ne);return{"--n-bezier":se,"--n-border-radius":H,"--n-color":b,"--n-color-modal":$,"--n-color-popover":ee,"--n-color-embedded":oe,"--n-color-embedded-modal":te,"--n-color-embedded-popover":re,"--n-color-target":S,"--n-text-color":R,"--n-line-height":L,"--n-action-color":U,"--n-title-text-color":B,"--n-title-font-weight":P,"--n-close-icon-color":W,"--n-close-icon-color-hover":G,"--n-close-icon-color-pressed":Z,"--n-close-color-hover":A,"--n-close-color-pressed":K,"--n-border-color":T,"--n-box-shadow":Y,"--n-padding-top":ie,"--n-padding-bottom":ce,"--n-padding-left":de,"--n-font-size":ae,"--n-title-font-size":le,"--n-close-size":X,"--n-close-icon-size":Q,"--n-close-border-radius":J}}),n=l?D("card",z(()=>o.size[0]),m,o):void 0;return{rtlEnabled:v,mergedClsPrefix:e,mergedTheme:a,handleCloseClick:g,cssVars:l?void 0:m,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{segmented:o,bordered:g,hoverable:l,mergedClsPrefix:e,rtlEnabled:r,onRender:a,embedded:v,tag:m,$slots:n}=this;return a==null||a(),u(m,{class:[`${e}-card`,this.themeClass,v&&`${e}-card--embedded`,{[`${e}-card--rtl`]:r,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:g,[`${e}-card--hoverable`]:l}],style:this.cssVars,role:this.role},_(n.cover,t=>t&&u("div",{class:`${e}-card-cover`,role:"none"},t)),_(n.header,t=>t||this.title||this.closable?u("div",{class:`${e}-card-header`,style:this.headerStyle},u("div",{class:`${e}-card-header__main`,role:"heading"},t||this.title),_(n["header-extra"],b=>b&&u("div",{class:`${e}-card-header__extra`,style:this.headerExtraStyle},b)),this.closable?u(_e,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),_(n.default,t=>t&&u("div",{class:`${e}-card__content`,style:this.contentStyle,role:"none"},t)),_(n.footer,t=>t&&[u("div",{class:`${e}-card__footer`,style:this.footerStyle,role:"none"},t)]),_(n.action,t=>t&&u("div",{class:`${e}-card__action`,role:"none"},t)))}}),Be=x("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
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
 `)]),Pe=Object.assign(Object.assign({},w.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),q=k({name:"Text",props:Pe,setup(o){const{mergedClsPrefixRef:g,inlineThemeDisabled:l}=M(o),e=w("Typography","-text",Be,ve,o,g),r=z(()=>{const{depth:v,type:m}=o,n=m==="default"?v===void 0?"textColor":`textColor${v}Depth`:y("textColor",m),{common:{fontWeightStrong:t,fontFamilyMono:b,cubicBezierEaseInOut:$},self:{codeTextColor:S,codeBorderRadius:R,codeColor:B,codeBorder:P,[n]:T}}=e.value;return{"--n-bezier":$,"--n-text-color":T,"--n-font-weight-strong":t,"--n-font-famliy-mono":b,"--n-code-border-radius":R,"--n-code-text-color":S,"--n-code-color":B,"--n-code-border":P}}),a=l?D("text",z(()=>`${o.type[0]}${o.depth||""}`),r,o):void 0;return{mergedClsPrefix:g,compitableTag:xe(o,["as","tag"]),cssVars:l?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var o,g,l;const{mergedClsPrefix:e}=this;(o=this.onRender)===null||o===void 0||o.call(this);const r=[`${e}-text`,this.themeClass,{[`${e}-text--code`]:this.code,[`${e}-text--delete`]:this.delete,[`${e}-text--strong`]:this.strong,[`${e}-text--italic`]:this.italic,[`${e}-text--underline`]:this.underline}],a=(l=(g=this.$slots).default)===null||l===void 0?void 0:l.call(g);return this.code?u("code",{class:r,style:this.cssVars},this.delete?u("del",null,a):a):this.delete?u("del",{class:r,style:this.cssVars},a):u(this.compitableTag||"span",{class:r,style:this.cssVars},a)}}),Te=V("h4",null,"client_id",-1),Ne=V("h4",null,"client_secret",-1),Oe=V("h4",null,"redirect_uri",-1),Ve=k({__name:"Request",setup(o){function g(){window.open("https://console.developers.google.com/","_blank")}const l={client_id:"202264815644.apps.googleusercontent.com",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_secret:"X4Z3ca8xfWDb1Voo-F9a7ZxJ",redirect_uri:"http://127.0.0.1:53682/"},e="https://alist.nn.ci/tool/google/callback",r=Ce({client_id:"",client_secret:"",redirect_uri:""});function a(){r.client_id=l.client_id,r.client_secret=l.client_secret,r.redirect_uri=l.redirect_uri}function v(){r.client_id="",r.client_secret="",r.redirect_uri=e}function m(){const n=new URL("https://accounts.google.com/o/oauth2/auth");n.searchParams.set("client_id",r.client_id),n.searchParams.set("response_type","code"),n.searchParams.set("redirect_uri",r.redirect_uri),n.searchParams.set("scope","openid profile https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/photoslibrary"),n.searchParams.set("access_type","offline"),n.searchParams.set("approval_prompt","auto"),n.searchParams.set("state",btoa(`${r.client_id}::${r.client_secret}::${r.redirect_uri}`)),window.open(n.toString(),"_blank")}return(n,t)=>(O(),j(c(E),{vertical:"",size:"large"},{default:p(()=>[f(c(E),{justify:"center"},{default:p(()=>[f(c(C),{size:"large",secondary:"",onClick:g},{default:p(()=>[h("Create client")]),_:1}),f(c(C),{size:"large",type:"primary",onClick:a},{default:p(()=>[h("Use RClone client")]),_:1}),f(c(C),{size:"large",type:"info",onClick:v},{default:p(()=>[h("Use own client")]),_:1})]),_:1}),Te,f(c(N),{size:"large",value:r.client_id,"onUpdate:value":t[0]||(t[0]=b=>r.client_id=b)},null,8,["value"]),Ne,f(c(N),{size:"large",value:r.client_secret,"onUpdate:value":t[1]||(t[1]=b=>r.client_secret=b)},null,8,["value"]),Oe,f(c(N),{size:"large",value:r.redirect_uri,"onUpdate:value":t[2]||(t[2]=b=>r.redirect_uri=b)},null,8,["value"]),f(c(C),{size:"large",type:"primary",block:"",onClick:m},{default:p(()=>[h("Go get")]),_:1}),r.client_id===l.client_id?(O(),j(c(Re),{key:0,title:"If you use rclone client"},{default:p(()=>[h(" Replace "),f(c(q),{code:""},{default:p(()=>[h(I(l.redirect_uri),1)]),_:1}),h(" with "),f(c(q),{code:""},{default:p(()=>[h(I(e))]),_:1}),h(" after oauth. ")]),_:1})):ye("v-if",!0)]),_:1}))}});const Ee=F(Ve,[["__file","Request.vue"]]),je=k({__name:"request.html",setup(o){return(g,l)=>{const e=we("NaiveClient");return O(),ze("div",null,[f(e,null,{default:p(()=>[f(c(Ee))]),_:1})])}}}),Ue=F(je,[["__file","request.html.vue"]]);export{Ue as default};
