import{_ as u,a as p,b as _,c as f,d as b,e as m,f as g,g as k,h as w,i as v,j as y}from"./sc-8f64e2e4.js";import{_ as S,N as x,a9 as O,a1 as t,P as s,Q as e,W as o,ag as C,G as a}from"./framework-ffef1a40.js";const A={},B=C('<h1 id="s3" tabindex="-1"><a class="header-anchor" href="#s3" aria-hidden="true">#</a> S3</h1><p>S3 object storage protocols, such as COS, OSS, B2, etc.</p><h3 id="bucket" tabindex="-1"><a class="header-anchor" href="#bucket" aria-hidden="true">#</a> BucKet</h3><p>bucket name</p><h3 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> Endpoint</h3><p>Endpoint address (If you don’t know, you can read the official documents below)</p><h3 id="region" tabindex="-1"><a class="header-anchor" href="#region" aria-hidden="true">#</a> Region</h3><p>area (If you don’t know, you can read the official documents below)</p><h3 id="access-key-id" tabindex="-1"><a class="header-anchor" href="#access-key-id" aria-hidden="true">#</a> Access key id</h3><p>Access key id</p><h3 id="secret-access-key" tabindex="-1"><a class="header-anchor" href="#secret-access-key" aria-hidden="true">#</a> Secret access key</h3><p>Secret access key</p><h3 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path" aria-hidden="true">#</a> Root folder path</h3><p>Root path, if not filled, it defaults to the root directory.</p><h3 id="custom-host" tabindex="-1"><a class="header-anchor" href="#custom-host" aria-hidden="true">#</a> Custom Host</h3><p>Custom cdn acceleration domain name</p><h3 id="sign-url-expire" tabindex="-1"><a class="header-anchor" href="#sign-url-expire" aria-hidden="true">#</a> Sign url expire</h3><p>The validity period of the signed download address is 4 hours by default. If a custom accelerated domain name is used, this option is invalid.</p><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> Placeholder</h3><p>The name of placeholder file.</p><h3 id="force-path-style" tabindex="-1"><a class="header-anchor" href="#force-path-style" aria-hidden="true">#</a> Force path style</h3><p>If enable ForcePathStyle, usually needed for minio.</p><h3 id="list-object-version" tabindex="-1"><a class="header-anchor" href="#list-object-version" aria-hidden="true">#</a> List object version</h3><p>Refer to s3 sdk documents.</p><h2 id="add-object-storage-examples-and-official-documents" tabindex="-1"><a class="header-anchor" href="#add-object-storage-examples-and-official-documents" aria-hidden="true">#</a> Add object storage examples and official documents</h2>',25),E={href:"https://oss.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},R=e("strong",null,"Alibaba Cloud OSS Official Website",-1),j={href:"https://help.aliyun.com/document_detail/31837.html",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"Comparison Table of Endpoints in Different Regions of OSS under Public Cloud",-1),W=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,[o("Alist needs to skip "),e("code",null,"referer"),o(" to mount "),e("strong",null,"Alibaba Cloud Disk"),o(". If you do not allow "),e("code",null,"referer"),o(" to be empty in anti-leech, it will not work, because Alibaba Cloud Disk uses Alibaba Cloud OSS (in Beijing area)")]),e("p",null,[o("In fact, the "),e("code",null,"Region|Region"),o(" option can be written as "),e("code",null,"Endpoint"),o(", but for the sake of specification, let’s write it according to the comparison table.:::")])],-1),T=e("p",null,"Fill in example:",-1),D=e("p",null,[e("img",{src:u,alt:"s3"})],-1),F=e("p",null,null,-1),K={href:"https://console.cloud.tencent.com/cos",target:"_blank",rel:"noopener noreferrer"},U=e("strong",null,"Tencent Cloud COS Official Website",-1),z={href:"https://cloud.tencent.com/document/product/436/6224",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"Collection Table of Endpoints in Each Region of COS under the Public Cloud",-1),L=e("p",null,"Fill in example:",-1),Q=e("p",null,[e("img",{src:p,alt:"s3"})],-1),P={href:"https://oos-cn.ctyun.cn/oos/ctyun/consoleBucket.html",target:"_blank",rel:"noopener noreferrer"},Y=e("strong",null,"Tianyi Cloud OOS Official Website",-1),q={href:"https://www.ctyun.cn/document/10026693/10027878",target:"_blank",rel:"noopener noreferrer"},H=e("strong",null,"Comparison Table of Endpoints of OOS Regions under Public Cloud",-1),G=e("p",null,"Fill in example:",-1),V=e("p",null,[e("img",{src:_,alt:"s3"})],-1),J=e("p",null,null,-1),M={href:"https://console.bce.baidu.com/bos",target:"_blank",rel:"noopener noreferrer"},X=e("strong",null,"Baidu Cloud BOS official website",-1),Z={href:"https://cloud.baidu.com/doc/BOS/s/Bk6kqu8eq#Setrefererwhitelist",target:"_blank",rel:"noopener noreferrer"},$=e("strong",null,"Self-configure Bucket’s Referer whitelist permissions",-1),ee={href:"https://intl.cloud.baidu.com/doc/BOS/s/xjwvyq9l4-en",target:"_blank",rel:"noopener noreferrer"},te=e("strong",null,"comparison table of Region and Endpoint of BOS under public cloud",-1),oe=e("strong",null,"Endpoint comparison table compatible with AWS S3",-1),ne={href:"https://cloud.baidu.com/doc/BOS/s/xjwvyq9l4",target:"_blank",rel:"noopener noreferrer"},se=e("strong",null,"Click to view details",-1),le=e("p",null,"Fill in example:",-1),ie=e("p",null,[e("img",{src:f,alt:"s3"})],-1),re=e("p",null,null,-1),ae={href:"https://portal.qiniu.com/kodo/bucket",target:"_blank",rel:"noopener noreferrer"},ce=e("strong",null,"Qiniu Cloud Kodo official website",-1),de=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),he={href:"https://developer",target:"_blank",rel:"noopener noreferrer"},ue=e("p",null,"Fill in example:",-1),pe=e("p",null,[e("img",{src:b,alt:"s3"})],-1),_e=e("p",null,null,-1),fe={href:"https://www.huaweicloud.com/intl/en-us/",target:"_blank",rel:"noopener noreferrer"},be=e("strong",null,"HUAWEI CLOUD OBS Official Website",-1),me={href:"https://developer.huaweicloud.com/intl/en-us/endpoint",target:"_blank",rel:"noopener noreferrer"},ge=e("strong",null,"Check the Region and Endpoint comparison table of OBS under the public cloud",-1),ke={href:"https://console.huaweicloud.com/iam/?region=cn-north-4#/mine/accessKey",target:"_blank",rel:"noopener noreferrer"},we=e("p",null,"Fill in example:",-1),ve=e("p",null,[e("img",{src:m,alt:"s3"})],-1),ye={href:"https://www.jdcloud.com/cn/products/object-storage-service",target:"_blank",rel:"noopener noreferrer"},Se=e("strong",null,"JD CLOUD OBS Official Website",-1),xe={href:"https://www.jdcloud.com/cn/activity/oss",target:"_blank",rel:"noopener noreferrer"},Oe={href:"https://docs.jdcloud.com/cn/object-storage-service/oss-endpont-list",target:"_blank",rel:"noopener noreferrer"},Ce=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),Ae=e("p",null,"Fill in example:",-1),Be=e("p",null,[e("img",{src:g,alt:"s3"})],-1),Ee={href:"https://console.ecloud.10086.cn/api/page/eos-console-web/CIDC-RP-00/eos/bucket?productType=os&v=new",target:"_blank",rel:"noopener noreferrer"},Re=e("strong",null,"139 CLOUD EOS Official Website",-1),je=e("p",null,"need to precharge 100 to open",-1),Ie={href:"https://ecloud.10086.cn/op-help-center/doc/article/48082",target:"_blank",rel:"noopener noreferrer"},We=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),Te=e("p",null,"Fill in example:",-1),De=e("p",null,[e("img",{src:k,alt:"s3"})],-1),Fe={href:"https://console.upyun.com/services/file/",target:"_blank",rel:"noopener noreferrer"},Ke=e("strong",null,"Yupyun USS Official Website",-1),Ue={href:"https://s3.console.aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"},ze=e("strong",null,"Amazon S3 Official Website",-1),Ne=e("p",null,"No example",-1),Le=e("p",null,[o("None: Get "),e("strong",null,"Endpoint"),o(" hellish difficulty....")],-1),Qe={href:"https://www.youtube.com/watch?v=uvKWJ4c1EYc",target:"_blank",rel:"noopener noreferrer"},Pe=e("p",null,"Or use your own method, welcome to add after success~",-1),Ye={href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},qe=e("strong",null,"cloudflare R2 Official Website",-1),He=e("p",null,[e("strong",null,"Endpoint"),o(" ：The S3 endpoint is available via the "),e("strong",null,[e("code",null,"https://<ACCOUNT_ID>.r2.cloudflarestorage.com")]),o(" endpoint.")],-1),Ge=e("p",null,[e("strong",null,[e("code",null,"ACCOUNT_ID")]),o(" ：This account ID can be seen everywhere, and the simplest is the position at the top of the browser. The string of IDs behind the website link is your account ID.")],-1),Ve=e("p",null,"填写示例：",-1),Je=e("p",null,[e("img",{src:w,alt:"s3"})],-1),Me={href:"https://secure.backblaze.com/b2_buckets.htm",target:"_blank",rel:"noopener noreferrer"},Xe=e("strong",null,"B2 Official Website",-1),Ze=e("p",null,[o("The full name is "),e("strong",null,[e("code",null,"Backblaze")]),o(", no verification information is required, and it is said that the first 10G is free.")],-1),$e=e("p",null,"Fill in example:",-1),et=e("p",null,[e("img",{src:v,alt:"s3"})],-1),tt={href:"https://console.scaleway.com/object-storage/buckets",target:"_blank",rel:"noopener noreferrer"},ot=e("strong",null,"Scaleway Official Website",-1),nt=e("p",null,"Card required, verification information",-1),st={href:"https://www.scaleway.com/en/docs/storage/object/concepts/#object-storage",target:"_blank",rel:"noopener noreferrer"},lt=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),it=e("p",null,"Fill in example:",-1),rt=e("p",null,[e("img",{src:y,alt:"s3"})],-1),at=e("h3",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),o(" The default download method used")],-1);function ct(dt,ht){const n=a("ExternalLinkIcon"),c=a("RouterLink"),d=a("Tabs"),h=a("Mermaid");return x(),O("div",null,[B,t(d,{id:"75",data:[{title:"Alibaba"},{title:"Tencent"},{title:"Tianyi"},{title:"Baidu"},{title:"Qiniu"},{title:"Huawei"},{title:"JD"},{title:"139"},{title:"upyun"},{title:"Amazon"},{title:"R2"},{title:"B2"},{title:"scaleway"}],"tab-id":"S3"},{tab0:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",E,[R,t(n)])]),e("p",null,[e("a",j,[I,t(n)])]),W,T,D,F]),tab1:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",K,[U,t(n)])]),e("p",null,[e("a",z,[N,t(n)])]),L,Q]),tab2:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",P,[Y,t(n)])]),e("p",null,[e("a",q,[H,t(n)])]),G,V,J]),tab3:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",M,[X,t(n)])]),e("p",null,[e("a",Z,[$,t(n)])]),e("p",null,[e("a",ee,[te,t(n)])]),e("p",null,[oe,e("a",ne,[se,t(n)])]),le,ie,re]),tab4:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",ae,[ce,t(n)])]),e("p",null,[o("["),de,o("]("),e("a",he,[o("https://developer"),t(n)]),o(" .qiniu.com/kodo/4088/s3-access-domainname)")]),ue,pe,_e]),tab5:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",fe,[be,t(n)])]),e("p",null,[e("a",me,[ge,t(n)]),o(", the secret key AK/SK"),e("a",ke,[o("acquire"),t(n)]),o(" to set by yourself.")]),we,ve]),tab6:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",ye,[Se,t(n)])]),e("p",null,[o("Advantages: "),e("a",xe,[o("free 10G"),t(n)]),o(", support IPV6 Disadvantages: need to precharge 100 to open，However, after the pre-deposit is completed, the object storage is activated, and the pre-deposited amount can still be used after withdrawal.")]),e("p",null,[e("a",Oe,[Ce,t(n)])]),Ae,Be]),tab7:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Ee,[Re,t(n)])]),je,e("p",null,[e("a",Ie,[We,t(n)])]),Te,De]),tab8:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Fe,[Ke,t(n)]),o(":"),t(c,{to:"/guide/drivers/uss.html"},{default:s(()=>[o("Click here to configure USS")]),_:1})])]),tab9:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Ue,[ze,t(n)])]),Ne,Le,e("p",null,[o("If you have to give it a try, you can refer to "),e("strong",null,[e("a",Qe,[o("https://www.youtube.com/watch?v=uvKWJ4c1EYc"),t(n)])])]),Pe]),tab10:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Ye,[qe,t(n)])]),He,Ge,Ve,Je]),tab11:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",Me,[Xe,t(n)])]),Ze,$e,et]),tab12:s(({title:l,value:i,isActive:r})=>[e("p",null,[e("a",tt,[ot,t(n)])]),nt,e("p",null,[e("a",st,[lt,t(n)])]),it,rt]),_:1}),at,t(h,{id:"mermaid-294",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}const _t=S(A,[["render",ct],["__file","s3.html.vue"]]);export{_t as default};
