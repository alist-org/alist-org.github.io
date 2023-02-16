import{c as N,h as C,j as f,T as V,b as j,u as t,N as d,O as m,P as h,a5 as p,a7 as _,Q as a,aa as v,Z as y,a4 as $,_ as M,G as R}from"./framework-65876511.js";import{c as I,b as g,e as w,u as D,f as O,r as W}from"./app-1ef77e86.js";import{f as E,N as G,a as P,b as L}from"./Button-a77fc591.js";import{a as U,p as H,f as J,N as z}from"./Space-d1c52f14.js";import{u as K}from"./use-compitable-1b648566.js";import{N as T}from"./Alert-cd88de8f.js";import"./Close-c793569b.js";const A=I([I("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),g("spin-container",{position:"relative"},[g("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[E()])]),g("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),g("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[w("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),g("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),g("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[w("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Q={small:20,medium:18,large:16},X=Object.assign(Object.assign({},O.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),B=N({name:"Spin",props:X,setup(r){const{mergedClsPrefixRef:o,inlineThemeDisabled:n}=D(r),s=O("Spin","-spin",A,W,r,o),c=C(()=>{const{size:e}=r,{common:{cubicBezierEaseInOut:u},self:k}=s.value,{opacitySpinning:S,color:b,textColor:x}=k,i=typeof e=="number"?H(e):k[J("size",e)];return{"--n-bezier":u,"--n-opacity-spinning":S,"--n-size":i,"--n-color":b,"--n-text-color":x}}),l=n?U("spin",C(()=>{const{size:e}=r;return typeof e=="number"?String(e):e[0]}),c,r):void 0;return{mergedClsPrefix:o,compitableShow:K(r,["spinning","show"]),mergedStrokeWidth:C(()=>{const{strokeWidth:e}=r;if(e!==void 0)return e;const{size:u}=r;return Q[typeof u=="number"?"medium":u]}),cssVars:n?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var r,o;const{$slots:n,mergedClsPrefix:s,description:c}=this,l=n.icon&&this.rotate,e=(c||n.description)&&f("div",{class:`${s}-spin-description`},c||((r=n.description)===null||r===void 0?void 0:r.call(n))),u=n.icon?f("div",{class:[`${s}-spin-body`,this.themeClass]},f("div",{class:[`${s}-spin`,l&&`${s}-spin--rotate`],style:n.default?"":this.cssVars},n.icon()),e):f("div",{class:[`${s}-spin-body`,this.themeClass]},f(G,{clsPrefix:s,style:n.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),e);return(o=this.onRender)===null||o===void 0||o.call(this),n.default?f("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},f("div",{class:[`${s}-spin-content`,this.compitableShow&&`${s}-spin-content--spinning`]},n),f(V,{name:"fade-in-transition"},{default:()=>this.compitableShow?u:null})):u}}),Y=a("b",null,"client_id: ",-1),Z=a("b",null,"client_secret: ",-1),q=a("b",null,"zone: ",-1),F=a("p",null,[a("b",null,"redirect_uri: "),p("https://alist.nn.ci/tool/onedrive/callback")],-1),ee=a("b",null,"refresh_token",-1),te=a("h3",null,"Get sharepoint site ID",-1),se={key:2},ne=a("b",null,"site_id: ",-1),ie=N({__name:"Callback",setup(r){const o=new URL(window.location.href),n=o.searchParams.get("code"),s=o.searchParams.get("state"),c=o.searchParams.get("error"),l=o.searchParams.get("error_description"),e=j({refreshToken:"",accessToken:"",error1:"",errorMessage1:"",siteUrl:"",siteId:"",error2:"",errorMessage2:"",gettingSiteId:!1});n&&s&&!c&&(()=>{fetch("https://api.nn.ci/alist/onedrive/get_refresh_token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:n,client:s})}).then(i=>i.json()).then(i=>{if(console.log(i),i.error){e.error1=i.error,e.errorMessage1=i.error_description;return}e.refreshToken=i.refresh_token,e.accessToken=i.access_token})})();const[k,S,b]=atob(s).split("::"),x=()=>{e.gettingSiteId=!0,fetch("https://api.nn.ci/alist/onedrive/get_site_id",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({site_url:e.siteUrl,access_token:e.accessToken,zone:b})}).then(i=>(e.gettingSiteId=!1,i.json())).then(i=>{if(i.error){e.error2=i.error,e.errorMessage2=i.error.message;return}e.siteId=i.id})};return(i,ae)=>!t(n)||!t(s)||t(c)?(d(),m(t(T),{key:0,title:t(c)||"Error",type:"error"},{default:h(()=>[p(_(t(l)),1)]),_:1},8,["title"])):(d(),m(t(z),{key:1,vertical:"",size:"large"},{default:h(()=>[a("p",null,[Y,p(_(t(k)),1)]),a("p",null,[Z,p(_(t(S)),1)]),a("p",null,[q,p(_(t(b)),1)]),F,e.error1||e.errorMessage1?(d(),m(t(T),{key:0,title:e.error1,type:"error"},{default:h(()=>[p(_(e.errorMessage1),1)]),_:1},8,["title"])):v("v-if",!0),e.refreshToken?v("v-if",!0):(d(),m(t(B),{key:1})),y(t(z),{vertical:""},{default:h(()=>[ee,y(t(P),{type:"textarea",autosize:"",readonly:"",value:e.refreshToken},null,8,["value"])]),_:1}),e.accessToken?(d(),m(t(z),{key:2,vertical:"",size:"large"},{default:h(()=>[te,e.error2||e.errorMessage2?(d(),m(t(T),{key:0,title:e.error2,type:"error"},{default:h(()=>[p(_(e.errorMessage2),1)]),_:1},8,["title"])):v("v-if",!0),y(t(P),{placeholder:"input site url (https://xx.sharepoint.xx/sites/xx)",size:"large"}),y(t(L),{type:"primary",size:"large",onClick:x},{default:h(()=>[p("Get SiteID")]),_:1}),e.gettingSiteId?(d(),m(t(B),{key:1})):e.siteId?(d(),$("p",se,[ne,p(_(e.siteId),1)])):v("v-if",!0)]),_:1})):v("v-if",!0)]),_:1}))}});const re=M(ie,[["__file","Callback.vue"]]),oe=N({__name:"callback.html",setup(r){return(o,n)=>{const s=R("NaiveClient");return d(),$("div",null,[y(s,null,{default:h(()=>[y(t(re))]),_:1})])}}}),me=M(oe,[["__file","callback.html.vue"]]);export{me as default};
