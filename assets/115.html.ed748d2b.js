import{f as g,g as i,o as b,c as k,a as e,b as x,t as h,h as p,v as _,e as y,d as a,r as w}from"./app.a4e9bf07.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";const T=y('<h1 id="_115-cloud" tabindex="-1"><a class="header-anchor" href="#_115-cloud" aria-hidden="true">#</a> 115 Cloud</h1><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Due to the limitation of 115 Cloud, the download must carry cookies, so only the proxy function in this program can be used for transfer. (You can use other machines to transfer)</p></div><h2 id="root-folder-id" tabindex="-1"><a class="header-anchor" href="#root-folder-id" aria-hidden="true">#</a> Root folder ID</h2>',3),S=a("Open the official website of 115 Cloud and click the string behind the url when you click into the folder you want to set, such as "),q={href:"https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan",target:"_blank",rel:"noopener noreferrer"},D=a("https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan"),$=a(", which is "),B=e("code",null,"249163533602609229",-1),I=e("h2",{id:"login-by-qrcode",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#login-by-qrcode","aria-hidden":"true"},"#"),a(" Login by QRCode")],-1),L=["disabled"],N={style:{margin:"4px"}},P=["src"],R={class:"custom-container info"},V={class:"custom-container-title"},E=e("h2",{id:"login-by-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#login-by-cookie","aria-hidden":"true"},"#"),a(" Login by Cookie")],-1),Q=e("p",null,[a("The "),e("code",null,"cookie"),a(" is obtained from the request.")],-1),U=g({__name:"115.html",setup(j){const n=i("Get QRCode"),t=i(0),c=i(""),r=i(""),s=i(""),f=async()=>{n.value="\u7B49\u5F85...",t.value=1;const o=await(await fetch("https://api.nn.ci/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token")).json();console.log(o),n.value="Use 115 Cloud APP To Scan Then Click",t.value=2,s.value={uid:o.data.uid,time:o.data.time.toString(),sign:o.data.sign,_:(new Date().getTime()/1e3).toString()},c.value=`https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(o.data.qrcode)}`},v=async()=>{t.value=3,n.value="Waiting...";const o=await(await fetch(`https://api.nn.ci/proxy/qrcodeapi.115.com/get/status/?uid=${s.value.uid}&time=${s.value.time}&sign=${s.value.sign}&_=${s.value._}`)).json(),{data:{version:d,status:u,msg:z}}=o;if(u!==2){t.value=2,n.value="Use 115 Cloud APP To Scan Then Click",alert("Status:"+u);return}r.value=s.value.uid,n.value="Get Token Success",t.value=4,console.log(o)},m=async()=>{t.value===0&&f(),t.value===2&&v()};return(l,o)=>{const d=w("ExternalLinkIcon");return b(),k("div",null,[T,e("p",null,[S,e("a",q,[D,x(d)]),$,B]),I,e("p",null,[e("button",{disabled:t.value===3||t.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:m},h(n.value),9,L)]),p(e("div",N,[e("img",{src:c.value},null,8,P)],512),[[_,c.value]]),p(e("div",null,[e("div",R,[e("p",V,"Token: "+h(r.value),1)])],512),[[_,r.value]]),E,Q])}}}),F=C(U,[["__file","115.html.vue"]]);export{F as default};