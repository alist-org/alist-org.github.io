import{c as f,b as w,w as b,N as v,O as N,P as c,a1 as n,u as a,W as u,an as k,ao as y,Q as p,_ as z,a9 as C,G as q}from"./framework-ffef1a40.js";import{N as x}from"./Select-bd2107cf.js";import{N as d}from"./Input-65f4322b.js";import{N as m}from"./Button-b07b4589.js";import{N as h}from"./app-4577b49e.js";import"./Popover-c6b6fd5e.js";import"./Scrollbar-60bfbfbe.js";import"./browser-e00fcf81.js";import"./utils-76c4cc76.js";import"./create-657dc0dd.js";const _=r=>(k("data-v-76484c22"),r=r(),y(),r),A=_(()=>p("h4",null,"zone",-1)),G=_(()=>p("h4",null,"client_id",-1)),P=_(()=>p("h4",null,"client_secret",-1)),S=f({__name:"Request",setup(r){const o={global:["https://login.microsoftonline.com","https://graph.microsoft.com","https://portal.azure.com","Global","https://www.office.com/","0a2991a3-1674-4334-8561-671cc7349960","uw67Q~TCMqdJyH35hlcHHclv~mhNOGx.jfPFm"],cn:["https://login.chinacloudapi.cn","https://microsoftgraph.chinacloudapi.cn","https://portal.azure.cn","21vianet(世纪互联)","https://portal.partner.microsoftonline.cn/Home","50ff485b-3bdc-4bd5-92a1-75b178187673","6v426lmVYKGM.bkuFu24-EqJAr_~~5_HKL"],de:["https://login.microsoftonline.de","https://graph.microsoft.de","https://portal.microsoftazure.de","Azure Germany"],us:["https://login.microsoftonline.us","https://graph.microsoft.us","https://portal.azure.us","Azure US GOV"]},e=w({zone:"global",client_id:"",client_secret:""});e.client_id=o[e.zone][5],e.client_secret=o[e.zone][6],b(()=>e.zone,t=>{e.client_id=o[t][5]||"",e.client_secret=o[t][6]||""});const i=()=>{window.open(o[e.zone][2]+"/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade","_blank")},g=()=>{const t=new URL(`${o[e.zone][0]}/common/oauth2/v2.0/authorize`);t.searchParams.set("client_id",e.client_id),t.searchParams.set("response_type","code"),t.searchParams.set("redirect_uri","https://alist.nn.ci/tool/onedrive/callback"),t.searchParams.set("scope","offline_access files.readwrite.all"),t.searchParams.set("state",window.btoa(`${e.client_id}::${e.client_secret}::${e.zone}`)),window.open(t.toString(),"_self")};return(t,l)=>(v(),N(a(h),{vertical:"",size:"large"},{default:c(()=>[A,n(a(x),{value:e.zone,"onUpdate:value":l[0]||(l[0]=s=>e.zone=s),size:"large",options:Object.keys(o).map(s=>({label:o[s][3],value:s}))},null,8,["value","options"]),G,n(a(d),{size:"large",value:e.client_id,"onUpdate:value":l[1]||(l[1]=s=>e.client_id=s)},null,8,["value"]),P,n(a(d),{size:"large",value:e.client_secret,"onUpdate:value":l[2]||(l[2]=s=>e.client_secret=s)},null,8,["value"]),n(a(h),{justify:"center"},{default:c(()=>[n(a(m),{size:"large",secondary:"",onClick:i},{default:c(()=>[u("Create client")]),_:1}),n(a(m),{size:"large",type:"primary",onClick:g},{default:c(()=>[u("Get Refresh Token")]),_:1})]),_:1})]),_:1}))}});const B=z(S,[["__scopeId","data-v-76484c22"],["__file","Request.vue"]]),R=f({__name:"request.html",setup(r){return(o,e)=>{const i=q("NaiveClient");return v(),C("div",null,[n(i,null,{default:c(()=>[n(a(B))]),_:1})])}}}),E=z(R,[["__file","request.html.vue"]]);export{E as default};
