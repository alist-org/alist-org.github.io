import{c as g,r as i,N as k,a9 as x,Q as e,W as o,a1 as b,ae as h,ah as p,aa as _,ag as w,G as y,_ as C}from"./framework-ffef1a40.js";const q=w('<h1 id="_115网盘" tabindex="-1"><a class="header-anchor" href="#_115网盘" aria-hidden="true">#</a> 115网盘</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于115网盘的限制，下载必须携带 Cookies，所以只能使用本程序中的代理功能进行传输。 （可以用其他机器转）</p></div><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> 根文件夹ID</h2><p>打开115网盘官网，点击进入要设置的文件夹时点击 URL中 <code>cid</code>后面的数字</p>',4),D={href:"https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,[o("这个文件夹的 "),e("code",null,"根文件夹ID"),o(" 即为 "),e("code",null,"249163533602609229")],-1),T=e("h2",{id:"qrcode-扫码方式登录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#qrcode-扫码方式登录","aria-hidden":"true"},"#"),o(" QRCode 扫码方式登录")],-1),I=["disabled"],N={style:{margin:"4px"}},$=["src"],P={class:"hint-container info"},V={class:"hint-container-title"},B=e("h2",{id:"cookie-方式登录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cookie-方式登录","aria-hidden":"true"},"#"),o(" Cookie 方式登录")],-1),E=e("p",null,[e("code",null,"Cookie"),o("可以浏览器登录从浏览器的"),e("code",null,"api"),o("中获取，也可用抓包115应用获取cookie，115应用的有效期比较长，注意cookie最后不要有"),e("code",null,";"),o("。")],-1),L=g({__name:"115.html",setup(Q){const n=i("获取二维码"),t=i(0),c=i(""),r=i(""),s=i(""),v=async()=>{n.value="等待...",t.value=1;const a=await(await fetch("https://api.nn.ci/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token")).json();console.log(a),n.value="使用115网盘 APP 扫描然后点击",t.value=2,s.value={uid:a.data.uid,time:a.data.time.toString(),sign:a.data.sign,_:(new Date().getTime()/1e3).toString()},c.value=`https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(a.data.qrcode)}`},m=async()=>{t.value=3,n.value="等待...";const a=await(await fetch(`https://api.nn.ci/proxy/qrcodeapi.115.com/get/status/?uid=${s.value.uid}&time=${s.value.time}&sign=${s.value.sign}&_=${s.value._}`)).json(),{data:{version:d,status:u,msg:R}}=a;if(u!==2){t.value=2,n.value="使用115网盘 APP 扫描然后点击",alert("Status:"+u);return}r.value=s.value.uid,n.value="获取 Token 成功",t.value=4,console.log(a)},f=async()=>{t.value===0&&v(),t.value===2&&m()};return(l,a)=>{const d=y("ExternalLinkIcon");return k(),x("div",null,[q,e("p",null,[o("如 "),e("a",D,[o("https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan"),b(d)])]),S,T,e("p",null,[e("button",{disabled:t.value===3||t.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:f},h(n.value),9,I)]),p(e("div",N,[e("img",{src:c.value},null,8,$)],512),[[_,c.value]]),p(e("div",null,[e("div",P,[e("p",V,"Token: "+h(r.value),1)])],512),[[_,r.value]]),B,E])}}}),z=C(L,[["__file","115.html.vue"]]);export{z as default};