import{N as C,a as V}from"./Spin-08829354.js";import{c as y,r as B,u as e,N as r,O as l,P as s,a5 as o,a7 as n,Q as a,aa as G,Z as p,_ as g,a4 as S,G as T}from"./framework-65876511.js";import{N as z,a as N}from"./Space-ed3f6b4b.js";import"./app-05c8b916.js";import"./Close-507d69bf.js";const K=a("b",null,"client_id: ",-1),O=a("b",null,"client_secret: ",-1),j=a("b",null,"redirect_uri: ",-1),E=a("b",null,"refresh_token:",-1),F=y({__name:"Callback",setup(P){const d="iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v",f="jXiFMOPVPCWlO2M5CwWQzffpNPaGTRBG",c="https://alist.nn.ci/tool/baidu/callback",i=new URL(window.location.href),_=i.searchParams.get("code"),u=i.searchParams.get("error"),x=i.searchParams.get("error_description"),t=B();return _&&!u&&(async()=>{const k=await(await fetch(`https://api.nn.ci/alist/baidu/get_refresh_token?code=${_}`)).json();t.value=k})(),(w,k)=>!e(_)||e(u)?(r(),l(e(C),{key:0,title:e(u)||"Error",type:"error"},{default:s(()=>[o(n(e(x)),1)]),_:1},8,["title"])):(r(),l(e(N),{key:1,vertical:"",size:"large"},{default:s(()=>{var m,v,h;return[a("p",null,[K,o(n(d))]),a("p",null,[O,o(n(f))]),a("p",null,[j,o(n(c))]),(m=t.value)!=null&&m.error||(v=t.value)!=null&&v.error_description?(r(),l(e(C),{key:0,title:(h=t.value)==null?void 0:h.error,type:"error"},{default:s(()=>[o(n(t.value.error_description),1)]),_:1},8,["title"])):G("v-if",!0),p(e(N),{vertical:""},{default:s(()=>{var b;return[E,(b=t.value)!=null&&b.refresh_token?(r(),l(e(z),{key:1,type:"textarea",autosize:"",readonly:"",value:t.value.refresh_token},null,8,["value"])):(r(),l(e(V),{key:0}))]}),_:1})]}),_:1}))}});const M=g(F,[["__file","Callback.vue"]]),Q=y({__name:"callback.html",setup(P){return(d,f)=>{const c=T("NaiveClient");return r(),S("div",null,[p(c,null,{default:s(()=>[p(e(M))]),_:1})])}}}),A=g(Q,[["__file","callback.html.vue"]]);export{A as default};