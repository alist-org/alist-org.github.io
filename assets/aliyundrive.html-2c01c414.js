import{c as y,r as s,N as w,a7 as C,Q as e,W as t,a0 as r,P as S,a9 as u,aa as _,ab as f,a8 as E,G as v,_ as T}from"./framework-939b1f57.js";import{_ as A}from"./aliyundrive-2cb15386.js";import{_ as B}from"./aliyun-ca9ebc4d.js";const I=e("h1",{id:"阿里云盘-分享",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#阿里云盘-分享","aria-hidden":"true"},"#"),t(" 阿里云盘/分享")],-1),N={class:"hint-container warning"},D=e("p",{class:"hint-container-title"},"注意",-1),P=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[t("由于阿里云盘 referer 的限制，必须使用移动端 token。 使用桌面 Web 令牌将导致无法下载和预览。 当然，如果你在本地使用或者带宽足够大，你也可以开启代理，让桌面 Web 的 "),e("code",null,"refresh token"),t(" 正常工作。")])],-1),R=e("h2",{id:"刷新令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#刷新令牌","aria-hidden":"true"},"#"),t(" 刷新令牌")],-1),z={href:"https://github.com/Xhofe/alist/issues/88",target:"_blank",rel:"noopener noreferrer"},L=["disabled"],O={style:{margin:"4px"}},V=["src"],j={class:"hint-container info"},q={class:"hint-container-title"},W={href:"http://replit.com",target:"_blank",rel:"noopener noreferrer"},J=e("h2",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),t(" Root folder file_id")],-1),Q=e("p",null,"打开阿里云盘官网，点击进入要设置的文件夹时点击 URL 后面的字符串",-1),U={href:"https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},G=E('<p>这个文件夹的 file_id 即为 <code>5fe01e1830601baf774e4827a9fb8fb2b5bf7940</code>：</p><p><img src="'+A+'" alt="file_id"></p><h2 id="秒传" tabindex="-1"><a class="header-anchor" href="#秒传" aria-hidden="true">#</a> 秒传</h2><p>上传的时候校验hash，如果云端有，直接生成文件，不消耗流量</p><h2 id="内部上传" tabindex="-1"><a class="header-anchor" href="#内部上传" aria-hidden="true">#</a> 内部上传</h2><p>如果你部署 Alist 的服务器是阿里云北京地区ECS，打开此开关可以提升文件上传速度。不符合要求的服务器请不要打开此开关，否则会出现无法上传的问题。</p><h2 id="阿里云盘分享" tabindex="-1"><a class="header-anchor" href="#阿里云盘分享" aria-hidden="true">#</a> 阿里云盘分享</h2><p>主要填写 <strong><a href="#%E5%88%B7%E6%96%B0%E4%BB%A4%E7%89%8C">刷新令牌</a>，分享ID</strong></p><ul><li><p><strong>根文件夹ID</strong>(默认root根目录)，想写就写不想写就是默认根目录</p></li><li><p>分享密码有就写没有就不写</p></li></ul><p><img src="'+B+'" alt="alist"></p>',10),X=y({__name:"aliyundrive.html",setup($){const o=s("获取 Token"),a=s(0),l=s(""),c=s(""),h=s(""),b=async()=>{o.value="等待...",a.value=1;const n=await(await fetch("https://api.nn.ci/alist/ali/qr")).json();console.log(n),o.value="使用阿里云盘 APP 扫描然后点击",a.value=2,h.value=JSON.stringify({ck:n.content.data.ck,t:n.content.data.t.toString()}),l.value=`https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(n.content.data.codeContent)}`},m=async()=>{a.value=3,o.value="等待...";const n=await(await fetch("https://api.nn.ci/alist/ali/ck",{method:"POST",headers:{"Content-Type":"application/json"},body:h.value})).json(),{content:{data:{qrCodeStatus:d,loginResult:i,bizExt:k}}}=n;if(i!=="success"){a.value=2,o.value="使用阿里云盘 App 扫描然后点击",alert("Status:"+d);return}const x=JSON.parse(atob(k));c.value=x.pds_login_result.refreshToken,o.value="获取 Token 成功",a.value=4,console.log(n)},g=async()=>{a.value===0&&b(),a.value===2&&m()};return(p,n)=>{const d=v("RouterLink"),i=v("ExternalLinkIcon");return w(),C("div",null,[I,e("div",N,[D,e("p",null,[t("不推荐使用该驱动，因为它不稳定，随时可能被屏蔽，我们会在以后的版本中移除。推荐使用官方API的驱动 "),r(d,{to:"/zh/guide/drivers/aliyundrive_open.html"},{default:S(()=>[t("Aliyundrive Open")]),_:1}),t("。")])]),P,R,e("p",null,[t("按照这个 "),e("a",z,[t("issue"),r(i)]),t(" 在手机上捕获/查找日志 (/data/media/0/Android/data/com.alicloud.databox/ 文件/日志/跟踪/）。 或者您可以点击：")]),e("p",null,[e("button",{disabled:a.value===3||a.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:g},u(o.value),9,L)]),_(e("div",O,[e("img",{src:l.value},null,8,V)],512),[[f,l.value]]),_(e("div",null,[e("div",j,[e("p",q,"Token: "+u(c.value),1)])],512),[[f,c.value]]),e("p",null,[e("em",null,[t("API is hosted on "),e("a",W,[t("replit.com"),r(i)])])]),J,Q,e("p",null,[t("如 "),e("a",U,[t("https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),r(i)])]),G])}}}),M=T(X,[["__file","aliyundrive.html.vue"]]);export{M as default};
