import{c as C,r as P,u as e,N as r,O as n,P as i,W as s,a9 as l,Q as a,ah as I,a0 as k,ai as B,aj as T,_ as g,a7 as V,G as z}from"./framework-acfcafcc.js";import{N}from"./Alert-fd6c681d.js";import{N as j}from"./Spin-448a901c.js";import{N as E}from"./Input-e0f6f40e.js";import{N as x}from"./Space-54ef5caa.js";import"./app-2c7027f2.js";import"./Scrollbar-3c63f87c.js";import"./use-compitable-ad56a9f1.js";const p=c=>(B("data-v-07bce39d"),c=c(),T(),c),L=p(()=>a("b",null,"client_id: ",-1)),O=p(()=>a("b",null,"client_secret: ",-1)),R=p(()=>a("b",null,"redirect_uri: ",-1)),U=p(()=>a("b",null,"refresh_token:",-1)),A=C({__name:"Callback",setup(c){const d="a78d5a69054042fa936f6c77f9a0ae8b",u="9c119bbb04b346d2a52aa64401936b2b",m="https://alist.nn.ci/tool/yandex/callback",f=new URL(window.location.href),h=f.searchParams.get("code"),b=f.searchParams.get("error"),w=f.searchParams.get("error_description"),t=P();return h&&!b&&(async()=>{const o=new URLSearchParams;o.append("grant_type","authorization_code"),o.append("client_id",d),o.append("client_secret",u),o.append("code",h||"");const _=await(await fetch("https://oauth.yandex.com/token",{method:"POST",body:o})).json();t.value=_})(),(o,S)=>!e(h)||e(b)?(r(),n(e(N),{key:0,title:e(b)||"Error",type:"error"},{default:i(()=>[s(l(e(w)),1)]),_:1},8,["title"])):(r(),n(e(x),{key:1,vertical:"",size:"large"},{default:i(()=>{var _,v,y;return[a("p",null,[L,s(l(d))]),a("p",null,[O,s(l(u))]),a("p",null,[R,s(l(m))]),(_=t.value)!=null&&_.error||(v=t.value)!=null&&v.error_description?(r(),n(e(N),{key:0,title:(y=t.value)==null?void 0:y.error,type:"error"},{default:i(()=>[s(l(t.value.error_description),1)]),_:1},8,["title"])):I("v-if",!0),k(e(x),{vertical:""},{default:i(()=>[U,t.value?(r(),n(e(E),{key:1,type:"textarea",autosize:"",readonly:"",value:t.value.refresh_token},null,8,["value"])):(r(),n(e(j),{key:0}))]),_:1})]}),_:1}))}});const D=g(A,[["__scopeId","data-v-07bce39d"],["__file","Callback.vue"]]),G=C({__name:"callback.html",setup(c){return(d,u)=>{const m=z("NaiveClient");return r(),V("div",null,[k(m,null,{default:i(()=>[k(e(D))]),_:1})])}}}),X=g(G,[["__file","callback.html.vue"]]);export{X as default};
