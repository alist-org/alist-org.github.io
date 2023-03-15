import{c as y,r as s,N as x,a9 as S,Q as e,W as t,a1 as r,P as A,ae as b,ah as m,aa as v,ag as C,G as u,_ as T}from"./framework-ffef1a40.js";import{_ as O}from"./aliyundrive-2cb15386.js";const D=e("h1",{id:"aliyundrive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aliyundrive","aria-hidden":"true"},"#"),t(" Aliyundrive")],-1),I={class:"hint-container warning"},z=e("p",{class:"hint-container-title"},"Note",-1),N=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,[t("Due to the limitation of the referrer of Aliyundrive, the mobile token must be used. Using the desktop web token will result in failure to download and preview. Of course, you can also turn on the proxy so that "),e("code",null,"refresh token"),t(" of desktop web can work if you use it locally or if the bandwidth is large enough.")])],-1),B=e("h3",{id:"refresh-token",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#refresh-token","aria-hidden":"true"},"#"),t(" Refresh token")],-1),Q={href:"https://github.com/Xhofe/alist/issues/88",target:"_blank",rel:"noopener noreferrer"},R=["disabled"],U={style:{margin:"4px"}},W=["src"],E={class:"hint-container info"},P={class:"hint-container-title"},G={href:"http://replit.com",target:"_blank",rel:"noopener noreferrer"},L=e("h3",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),t(" Root folder file_id")],-1),V={href:"https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940",target:"_blank",rel:"noopener noreferrer"},X=e("code",null,"5fe01e1830601baf774e4827a9fb8fb2b5bf7940",-1),Y=C('<p><img src="'+O+'" alt="file_id"></p><h2 id="second-pass" tabindex="-1"><a class="header-anchor" href="#second-pass" aria-hidden="true">#</a> Second pass</h2><p>Check the hash when uploading. If there is one in the cloud, directly generate the file without consuming traffic</p><h2 id="internal-upload" tabindex="-1"><a class="header-anchor" href="#internal-upload" aria-hidden="true">#</a> Internal upload</h2><p>If the server you deploy Alist on is Aliyun ECS for Beijing area, turn on this switch to improve the upload speed. Do not turn on this switch for servers that do not meet the requirements, otherwise you will have problems with inability to upload.</p><h2 id="alibaba-cloud-disk-sharing" tabindex="-1"><a class="header-anchor" href="#alibaba-cloud-disk-sharing" aria-hidden="true">#</a> Alibaba cloud disk sharing</h2><p>Don&#39;t think about it... It has been repaired and will no longer develop and maintain the shared storage method, and the Alibaba cloud disk open platform token cannot be used for shared mounted storage.</p><h3 id="the-default-download-method-used" tabindex="-1"><a class="header-anchor" href="#the-default-download-method-used" aria-hidden="true">#</a> The default download method used</h3>',8),j=y({__name:"aliyundrive.html",setup(F){const o=s("Get Token"),a=s(0),l=s(""),d=s(""),p=s(""),_=async()=>{o.value="Waiting...",a.value=1;const n=await(await fetch("https://api.nn.ci/alist/ali/qr")).json();console.log(n),o.value="Use AliyunDrive APP To Scan Then Click",a.value=2,p.value=JSON.stringify({ck:n.content.data.ck,t:n.content.data.t.toString()}),l.value=`https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(n.content.data.codeContent)}`},k=async()=>{a.value=3,o.value="Waiting...";const n=await(await fetch("https://api.nn.ci/alist/ali/ck",{method:"POST",headers:{"Content-Type":"application/json"},body:p.value})).json(),{content:{data:{qrCodeStatus:c,loginResult:i,bizExt:h}}}=n;if(i!=="success"){a.value=2,o.value="Use AliyunDrive APP To Scan Then Click",alert("Status:"+c);return}const g=JSON.parse(atob(h));d.value=g.pds_login_result.refreshToken,o.value="Get Token Success",a.value=4,console.log(n)},w=async()=>{a.value===0&&_(),a.value===2&&k()};return(f,n)=>{const c=u("RouterLink"),i=u("ExternalLinkIcon"),h=u("Mermaid");return x(),S("div",null,[D,e("div",I,[z,e("p",null,[t("This driver is not recommended for use, because it is not stable and may be blocked at any time and we will remove it in a future version. We recommend using the official driver "),r(c,{to:"/guide/drivers/aliyundrive_open.html"},{default:A(()=>[t("Aliyundrive Open")]),_:1}),t(".")])]),N,B,e("p",null,[t("Follow to this "),e("a",Q,[t("issue"),r(i)]),t(" Capture/find the log on the mobile phone (/data/media/0/Android/data/com.alicloud.databox/ files/logs/trace/). Or you can click:")]),e("p",null,[e("button",{disabled:a.value===3||a.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:w},b(o.value),9,R)]),m(e("div",U,[e("img",{src:l.value},null,8,W)],512),[[v,l.value]]),m(e("div",null,[e("div",E,[e("p",P,"Token: "+b(d.value),1)])],512),[[v,d.value]]),e("p",null,[e("em",null,[t("API is hosted on "),e("a",G,[t("replit.com"),r(i)])])]),L,e("p",null,[t("Open the official website of Aliyundrive and click the string behind the url when you click into the folder you want to set, such as "),e("a",V,[t("https://www.aliyundrive.com/drive/folder/5fe01e1830601baf774e4827a9fb8fb2b5bf7940"),r(i)]),t(", which is "),X,t(":")]),Y,r(h,{id:"mermaid-61",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}}}),H=T(j,[["__file","aliyundrive.html.vue"]]);export{H as default};
