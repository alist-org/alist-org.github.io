import{N as te}from"./Select-3c0e07da.js";import{N as le}from"./Button-21a25823.js";import{c as v,h as V,j as k,b as ne,r as P,N as h,O as _,P as n,Z as a,u as r,a5 as g,a7 as B,aa as j,a4 as F,aj as ae,ae as de,ab as se,ac as ie,Q as x,_ as G,G as ce}from"./framework-e8245049.js";import{u as ue,b as be,h as R,a as I,N as $}from"./Space-9712786a.js";import{c as o,b as M,e as S,v as pe,z as he,A as ve,u as me,f as H,B as ge}from"./app-619f3d85.js";import{N as E}from"./Alert-44e0e47f.js";import"./Close-b335c1d7.js";const fe=o([M("table",`
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `,[o("th",`
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),o("td",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `,[o("&:last-child",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),S("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `,[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]),S("single-line",[o("th",`
 border-right: 0px solid var(--n-merged-border-color);
 `),o("td",`
 border-right: 0px solid var(--n-merged-border-color);
 `)]),S("single-column",[o("tr",[o("&:not(:last-child)",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]),S("striped",[o("tr:nth-of-type(even)",[o("td","background-color: var(--n-td-color-striped)")])]),pe("bottom-bordered",[o("tr",[o("&:last-child",[o("td",`
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]),he(M("table",`
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `,[o("th",`
 background-color: var(--n-th-color-modal);
 `),o("td",`
 background-color: var(--n-td-color-modal);
 `)])),ve(M("table",`
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `,[o("th",`
 background-color: var(--n-th-color-popover);
 `),o("td",`
 background-color: var(--n-td-color-popover);
 `)]))]),_e=Object.assign(Object.assign({},H.props),{bordered:{type:Boolean,default:!0},bottomBordered:{type:Boolean,default:!0},singleLine:{type:Boolean,default:!0},striped:Boolean,singleColumn:Boolean,size:{type:String,default:"medium"}}),ke=v({name:"Table",props:_e,setup(d){const{mergedClsPrefixRef:s,inlineThemeDisabled:l,mergedRtlRef:c}=me(d),m=H("Table","-table",fe,ge,d,s),f=ue("Table",c,s),u=V(()=>{const{size:p}=d,{self:{borderColor:A,tdColor:i,tdColorModal:e,tdColorPopover:y,thColor:z,thColorModal:T,thColorPopover:N,thTextColor:w,tdTextColor:t,borderRadius:U,thFontWeight:K,lineHeight:Q,borderColorModal:W,borderColorPopover:Z,tdColorStriped:q,tdColorStripedModal:J,tdColorStripedPopover:X,[R("fontSize",p)]:Y,[R("tdPadding",p)]:ee,[R("thPadding",p)]:oe},common:{cubicBezierEaseInOut:re}}=m.value;return{"--n-bezier":re,"--n-td-color":i,"--n-td-color-modal":e,"--n-td-color-popover":y,"--n-td-text-color":t,"--n-border-color":A,"--n-border-color-modal":W,"--n-border-color-popover":Z,"--n-border-radius":U,"--n-font-size":Y,"--n-th-color":z,"--n-th-color-modal":T,"--n-th-color-popover":N,"--n-th-font-weight":K,"--n-th-text-color":w,"--n-line-height":Q,"--n-td-padding":ee,"--n-th-padding":oe,"--n-td-color-striped":q,"--n-td-color-striped-modal":J,"--n-td-color-striped-popover":X}}),b=l?be("table",V(()=>d.size[0]),u,d):void 0;return{rtlEnabled:f,mergedClsPrefix:s,cssVars:l?void 0:u,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var d;const{mergedClsPrefix:s}=this;return(d=this.onRender)===null||d===void 0||d.call(this),k("table",{class:[`${s}-table`,this.themeClass,{[`${s}-table--rtl`]:this.rtlEnabled,[`${s}-table--bottom-bordered`]:this.bottomBordered,[`${s}-table--bordered`]:this.bordered,[`${s}-table--single-line`]:this.singleLine,[`${s}-table--single-column`]:this.singleColumn,[`${s}-table--striped`]:this.striped}],style:this.cssVars},this.$slots)}}),L=v({name:"Th",render(){return k("th",null,this.$slots)}}),O=v({name:"Tr",render(){return k("tr",null,this.$slots)}}),D=v({name:"Td",render(){return k("td",null,this.$slots)}}),xe=v({name:"Thead",render(){return k("thead",null,this.$slots)}}),Ce=v({name:"Tbody",render(){return k("tbody",null,this.$slots)}}),C=d=>(se("data-v-14b6ef64"),d=d(),ie(),d),ye=C(()=>x("h4",null,"client_id",-1)),ze=C(()=>x("h4",null,"client_secret",-1)),Te=C(()=>x("h4",null,"refresh_token",-1)),Ne=C(()=>x("h4",null,"access_token",-1)),we=C(()=>x("h4",null,"Albums",-1)),Pe=v({__name:"Album",setup(d){const s=new URL(window.location.href),l=ne({client_id:"",client_secret:"",access_token:s.searchParams.get("access_token")||"",refresh_token:""}),c=P("access_token"),m=P(),f=P();let u=P([]);const b=async()=>{const i=new URLSearchParams;i.append("client_id",l.client_id),i.append("client_secret",l.client_secret),i.append("grant_type","refresh_token"),i.append("refresh_token",l.refresh_token),fetch("https://www.googleapis.com/oauth2/v4/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i}).then(e=>e.json()).then(e=>{console.log(e),m.value=e,(typeof e.error>"u"||!e.error)&&(l.access_token=e.access_token,typeof e.access_token<"u"&&e.access_token&&p(null))})},p=async i=>{i==null&&(i=""),fetch(`https://photoslibrary.googleapis.com/v1/albums?pageToken=${i}&pageSize=50`,{method:"GET",headers:{Authorization:`Bearer ${l.access_token}`}}).then(e=>e.json()).then(e=>{console.log(e),f.value=e,(typeof e.error>"u"||!e.error)&&(u.value=u.value.concat(e.albums),console.log(u),typeof e.nextPageToken<"u"&&e.nextPageToken&&p(e.nextPageToken))})};l.access_token&&p(null);function A(){u.value=[],c.value=="refresh_token"?b():p(null)}return(i,e)=>(h(),_(r(I),{vertical:"",size:"large"},{default:n(()=>{var y,z,T,N,w;return[a(r(te),{value:c.value,"onUpdate:value":e[0]||(e[0]=t=>c.value=t),size:"large",options:[{label:"Access token",value:"access_token"},{label:"Client & Refresh token",value:"refresh_token"}]},null,8,["value"]),c.value=="refresh_token"?(h(),_(r(I),{key:0,vertical:"",size:"large"},{default:n(()=>[ye,a(r($),{size:"large",value:l.client_id,"onUpdate:value":e[1]||(e[1]=t=>l.client_id=t)},null,8,["value"]),ze,a(r($),{size:"large",value:l.client_secret,"onUpdate:value":e[2]||(e[2]=t=>l.client_secret=t)},null,8,["value"]),Te,a(r($),{size:"large",value:l.refresh_token,"onUpdate:value":e[3]||(e[3]=t=>l.refresh_token=t)},null,8,["value"])]),_:1})):(h(),_(r(I),{key:1,vertical:"",size:"large"},{default:n(()=>[Ne,a(r($),{size:"large",value:l.access_token,"onUpdate:value":e[4]||(e[4]=t=>l.access_token=t)},null,8,["value"])]),_:1})),a(r(le),{size:"large",type:"primary",block:"",onClick:A},{default:n(()=>[g("Fetch Album")]),_:1}),(y=m.value)!=null&&y.error||(z=m.value)!=null&&z.error_description?(h(),_(r(E),{key:2,title:(T=m.value)==null?void 0:T.error,type:"error"},{default:n(()=>{var t;return[g(B((t=m.value)==null?void 0:t.error_description),1)]}),_:1},8,["title"])):j("v-if",!0),(N=f.value)!=null&&N.error?(h(),_(r(E),{key:3,title:(w=f.value)==null?void 0:w.error.status,type:"error"},{default:n(()=>{var t;return[g(B((t=f.value)==null?void 0:t.error.message),1)]}),_:1},8,["title"])):j("v-if",!0),we,a(r(ke),{size:"large"},{default:n(()=>[a(r(xe),null,{default:n(()=>[a(r(O),null,{default:n(()=>[a(r(L),null,{default:n(()=>[g("Album Title")]),_:1}),a(r(L),null,{default:n(()=>[g("Album ID")]),_:1})]),_:1})]),_:1}),a(r(Ce),null,{default:n(()=>[(h(!0),F(de,null,ae(r(u),(t,U)=>(h(),_(r(O),null,{default:n(()=>[a(r(D),null,{default:n(()=>[g(B(t.title),1)]),_:2},1024),a(r(D),null,{default:n(()=>[g(B(t.id),1)]),_:2},1024)]),_:2},1024))),256))]),_:1})]),_:1})]}),_:1}))}});const Be=G(Pe,[["__scopeId","data-v-14b6ef64"],["__file","Album.vue"]]),$e=v({__name:"album.html",setup(d){return(s,l)=>{const c=ce("NaiveClient");return h(),F("div",null,[a(c,null,{default:n(()=>[a(r(Be))]),_:1})])}}}),je=G($e,[["__file","album.html.vue"]]);export{je as default};
