import{d as i,c as x,as as ge,b as l,a as d,aj as be,ak as pe,u as D,e as w,g as fe,h as F,N as me,at as he,l as C,au as ve}from"./app-34f93e07.js";import{a as _,h as _e,g as xe,N as E}from"./Space-2bca1db2.js";import{c as k,h as z,j as u,b as ye,N as O,O as I,P as f,a0 as p,u as c,W as h,a9 as q,ac as Ce,ad as ze,ae as we,Q as V,_ as U,a7 as ke,G as Se}from"./framework-939b1f57.js";import{u as $e}from"./use-compitable-6687ce15.js";import{N as y}from"./Button-54ce47a8.js";import{N}from"./Input-b13c317e.js";const Re=i([x("card",`
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
 `,[ge({background:"var(--n-color-modal)"}),l("hoverable",[i("&:hover","box-shadow: var(--n-box-shadow);")]),l("content-segmented",[i(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),l("content-soft-segmented",[i(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),l("footer-segmented",[i(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),l("footer-soft-segmented",[i(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),i(">",[x("card-header",`
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
 `,[i("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),x("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[i("img",`
 display: block;
 width: 100%;
 `)]),l("bordered",`
 border: 1px solid var(--n-border-color);
 `,[i("&:target","border-color: var(--n-color-target);")]),l("action-segmented",[i(">",[d("action",[i("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("content-segmented, content-soft-segmented",[i(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[i("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("footer-segmented, footer-soft-segmented",[i(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[i("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),l("embedded",`
 background-color: var(--n-color-embedded);
 `)]),be(x("card",`
 background: var(--n-color-modal);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),pe(x("card",`
 background: var(--n-color-popover);
 `,[l("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),Be={title:String,contentStyle:[Object,String],headerStyle:[Object,String],headerExtraStyle:[Object,String],footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"}},Pe=Object.assign(Object.assign({},w.props),Be),Te=k({name:"Card",props:Pe,setup(e){const g=()=>{const{onClose:t}=e;t&&_e(t)},{inlineThemeDisabled:s,mergedClsPrefixRef:o,mergedRtlRef:r}=D(e),a=w("Card","-card",Re,he,e,o),v=fe("Card",r,o),m=z(()=>{const{size:t}=e,{self:{color:b,colorModal:S,colorTarget:$,textColor:R,titleTextColor:B,titleFontWeight:P,borderColor:T,actionColor:H,borderRadius:W,lineHeight:L,closeIconColor:G,closeIconColorHover:K,closeIconColorPressed:Z,closeColorHover:A,closeColorPressed:J,closeBorderRadius:Q,closeIconSize:X,closeSize:Y,boxShadow:ee,colorPopover:oe,colorEmbedded:te,colorEmbeddedModal:re,colorEmbeddedPopover:ne,[C("padding",t)]:ae,[C("fontSize",t)]:se,[C("titleFontSize",t)]:ie},common:{cubicBezierEaseInOut:le}}=a.value,{top:de,left:ce,bottom:ue}=xe(ae);return{"--n-bezier":le,"--n-border-radius":W,"--n-color":b,"--n-color-modal":S,"--n-color-popover":oe,"--n-color-embedded":te,"--n-color-embedded-modal":re,"--n-color-embedded-popover":ne,"--n-color-target":$,"--n-text-color":R,"--n-line-height":L,"--n-action-color":H,"--n-title-text-color":B,"--n-title-font-weight":P,"--n-close-icon-color":G,"--n-close-icon-color-hover":K,"--n-close-icon-color-pressed":Z,"--n-close-color-hover":A,"--n-close-color-pressed":J,"--n-border-color":T,"--n-box-shadow":ee,"--n-padding-top":de,"--n-padding-bottom":ue,"--n-padding-left":ce,"--n-font-size":se,"--n-title-font-size":ie,"--n-close-size":Y,"--n-close-icon-size":X,"--n-close-border-radius":Q}}),n=s?F("card",z(()=>e.size[0]),m,e):void 0;return{rtlEnabled:v,mergedClsPrefix:o,mergedTheme:a,handleCloseClick:g,cssVars:s?void 0:m,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){const{segmented:e,bordered:g,hoverable:s,mergedClsPrefix:o,rtlEnabled:r,onRender:a,embedded:v,tag:m,$slots:n}=this;return a==null||a(),u(m,{class:[`${o}-card`,this.themeClass,v&&`${o}-card--embedded`,{[`${o}-card--rtl`]:r,[`${o}-card--content${typeof e!="boolean"&&e.content==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.content,[`${o}-card--footer${typeof e!="boolean"&&e.footer==="soft"?"-soft":""}-segmented`]:e===!0||e!==!1&&e.footer,[`${o}-card--action-segmented`]:e===!0||e!==!1&&e.action,[`${o}-card--bordered`]:g,[`${o}-card--hoverable`]:s}],style:this.cssVars,role:this.role},_(n.cover,t=>t&&u("div",{class:`${o}-card-cover`,role:"none"},t)),_(n.header,t=>t||this.title||this.closable?u("div",{class:`${o}-card-header`,style:this.headerStyle},u("div",{class:`${o}-card-header__main`,role:"heading"},t||this.title),_(n["header-extra"],b=>b&&u("div",{class:`${o}-card-header__extra`,style:this.headerExtraStyle},b)),this.closable?u(me,{clsPrefix:o,class:`${o}-card-header__close`,onClick:this.handleCloseClick,absolute:!0}):null):null),_(n.default,t=>t&&u("div",{class:`${o}-card__content`,style:this.contentStyle,role:"none"},t)),_(n.footer,t=>t&&[u("div",{class:`${o}-card__footer`,style:this.footerStyle,role:"none"},t)]),_(n.action,t=>t&&u("div",{class:`${o}-card__action`,role:"none"},t)))}}),Ne=x("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),l("italic",{fontStyle:"italic"}),l("underline",{textDecoration:"underline"}),l("code",`
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
 `)]),Oe=Object.assign(Object.assign({},w.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),M=k({name:"Text",props:Oe,setup(e){const{mergedClsPrefixRef:g,inlineThemeDisabled:s}=D(e),o=w("Typography","-text",Ne,ve,e,g),r=z(()=>{const{depth:v,type:m}=e,n=m==="default"?v===void 0?"textColor":`textColor${v}Depth`:C("textColor",m),{common:{fontWeightStrong:t,fontFamilyMono:b,cubicBezierEaseInOut:S},self:{codeTextColor:$,codeBorderRadius:R,codeColor:B,codeBorder:P,[n]:T}}=o.value;return{"--n-bezier":S,"--n-text-color":T,"--n-font-weight-strong":t,"--n-font-famliy-mono":b,"--n-code-border-radius":R,"--n-code-text-color":$,"--n-code-color":B,"--n-code-border":P}}),a=s?F("text",z(()=>`${e.type[0]}${e.depth||""}`),r,e):void 0;return{mergedClsPrefix:g,compitableTag:$e(e,["as","tag"]),cssVars:s?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var e,g,s;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const r=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],a=(s=(g=this.$slots).default)===null||s===void 0?void 0:s.call(g);return this.code?u("code",{class:r,style:this.cssVars},this.delete?u("del",null,a):a):this.delete?u("del",{class:r,style:this.cssVars},a):u(this.compitableTag||"span",{class:r,style:this.cssVars},a)}}),j=e=>(ze("data-v-69097093"),e=e(),we(),e),Ve=j(()=>V("h4",null,"client_id",-1)),je=j(()=>V("h4",null,"client_secret",-1)),Ee=j(()=>V("h4",null,"redirect_uri",-1)),Ie=k({__name:"Request",setup(e){function g(){window.open("https://console.developers.google.com/","_blank")}const s={client_id:"202264815644.apps.googleusercontent.com",auth_uri:"https://accounts.google.com/o/oauth2/auth",token_uri:"https://oauth2.googleapis.com/token",auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",client_secret:"X4Z3ca8xfWDb1Voo-F9a7ZxJ",redirect_uri:"http://127.0.0.1:53682/"},o="https://alist.nn.ci/tool/google/callback",r=ye({client_id:"",client_secret:"",redirect_uri:""});function a(){r.client_id=s.client_id,r.client_secret=s.client_secret,r.redirect_uri=s.redirect_uri}function v(){r.client_id="",r.client_secret="",r.redirect_uri=o}function m(){const n=new URL("https://accounts.google.com/o/oauth2/auth");n.searchParams.set("client_id",r.client_id),n.searchParams.set("response_type","code"),n.searchParams.set("redirect_uri",r.redirect_uri),n.searchParams.set("scope","openid profile https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/photoslibrary"),n.searchParams.set("access_type","offline"),n.searchParams.set("prompt","consent"),n.searchParams.set("state",btoa(`${r.client_id}::${r.client_secret}::${r.redirect_uri}`)),window.open(n.toString(),"_blank")}return(n,t)=>(O(),I(c(E),{vertical:"",size:"large"},{default:f(()=>[p(c(E),{justify:"center"},{default:f(()=>[p(c(y),{size:"large",secondary:"",onClick:g},{default:f(()=>[h("Create client")]),_:1}),p(c(y),{size:"large",type:"primary",onClick:a},{default:f(()=>[h("Use RClone client")]),_:1}),p(c(y),{size:"large",type:"info",onClick:v},{default:f(()=>[h("Use own client")]),_:1})]),_:1}),Ve,p(c(N),{size:"large",value:r.client_id,"onUpdate:value":t[0]||(t[0]=b=>r.client_id=b)},null,8,["value"]),je,p(c(N),{size:"large",value:r.client_secret,"onUpdate:value":t[1]||(t[1]=b=>r.client_secret=b)},null,8,["value"]),Ee,p(c(N),{size:"large",value:r.redirect_uri,"onUpdate:value":t[2]||(t[2]=b=>r.redirect_uri=b)},null,8,["value"]),p(c(y),{size:"large",type:"primary",block:"",onClick:m},{default:f(()=>[h("Go get")]),_:1}),r.client_id===s.client_id?(O(),I(c(Te),{key:0,title:"If you use rclone client"},{default:f(()=>[h(" Replace "),p(c(M),{code:""},{default:f(()=>[h(q(s.redirect_uri),1)]),_:1}),h(" with "),p(c(M),{code:""},{default:f(()=>[h(q(o))]),_:1}),h(" after oauth. ")]),_:1})):Ce("v-if",!0)]),_:1}))}});const qe=U(Ie,[["__scopeId","data-v-69097093"],["__file","Request.vue"]]),Me=k({__name:"request.html",setup(e){return(g,s)=>{const o=Se("NaiveClient");return O(),ke("div",null,[p(o,null,{default:f(()=>[p(c(qe))]),_:1})])}}}),Ge=U(Me,[["__file","request.html.vue"]]);export{Ge as default};
