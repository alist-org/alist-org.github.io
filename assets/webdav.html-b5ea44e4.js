import{c as _,b as m,N as c,O as x,P as n,a1 as o,u as l,W as f,an as h,ao as b,Q as u,_ as d,a9 as U,G as N}from"./framework-ffef1a40.js";import{N as i}from"./Input-65f4322b.js";import{N as w}from"./Button-b07b4589.js";import{N as D}from"./app-4577b49e.js";import"./browser-e00fcf81.js";import"./Scrollbar-60bfbfbe.js";const v=s=>(h("data-v-afa431a3"),s=s(),b(),s),W=v(()=>u("p",null,"OneDrive: https://xx-my.sharepoint.xx/personal/xx_xx_xx/_layouts/15/onedrive.aspx",-1)),y=v(()=>u("p",null,"SharePoint: https://xx.sharepoint.xx/sites/xx",-1)),S=_({__name:"WebDav",setup(s){const e=m({spUrl:"",webdavUrl:""});function p(){let a=e.spUrl;a.startsWith("https://")&&(a=a.replace("https://",""));let t="https://"+a.split("/").slice(0,3).join("/");a.includes("/sites/")?e.webdavUrl=t+"/Shared Documents":e.webdavUrl=t+"/Documents"}return(a,t)=>(c(),x(l(D),{vertical:"",size:"large"},{default:n(()=>[o(l(i),{size:"large",placeholder:"Input Onedrive/SharePoint URL",value:e.spUrl,"onUpdate:value":t[0]||(t[0]=r=>e.spUrl=r)},null,8,["value"]),W,y,o(l(w),{block:"",size:"large",type:"primary",onClick:p},{default:n(()=>[f("Get WebDav URL")]),_:1}),o(l(i),{size:"large",type:"textarea",placeholder:"WebDav URL",value:e.webdavUrl,"onUpdate:value":t[1]||(t[1]=r=>e.webdavUrl=r),readonly:""},null,8,["value"])]),_:1}))}});const C=d(S,[["__scopeId","data-v-afa431a3"],["__file","WebDav.vue"]]),I=_({__name:"webdav.html",setup(s){return(e,p)=>{const a=N("NaiveClient");return c(),U("div",null,[o(a,null,{default:n(()=>[o(l(C))]),_:1})])}}}),O=d(I,[["__file","webdav.html.vue"]]);export{O as default};
