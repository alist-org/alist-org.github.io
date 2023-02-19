import{_ as l,a as i}from"./Google-photosend-22ab933b.js";import{_ as a,N as c,a4 as d,Q as e,a5 as o,Z as t,P as h,a6 as p,G as n}from"./framework-90372ca6.js";const _={},u=e("h1",{id:"谷歌相册",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#谷歌相册","aria-hidden":"true"},"#"),o(" 谷歌相册")],-1),g=e("h3",{id:"根目录id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#根目录id","aria-hidden":"true"},"#"),o(" 根目录ID")],-1),f=e("s",null,"貌似不能挂载单独的相册",-1),b={href:"https://github.com/alist-org/alist/discussions/3264#discussioncomment-4874536",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"参考",-1),y=e("h3",{id:"获取-client-id-client-secret",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取-client-id-client-secret","aria-hidden":"true"},"#"),o(" 获取 client_id, client_secret")],-1),v={href:"https://alist.nn.ci/tool/google/request",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"client_id(客户端ID) client_secret(客户端秘钥)",-1),k=e("strong",null,"谷歌网盘",-1),I=p('<div class="hint-container tip"><p class="hint-container-title">提示</p><p>提示 此应用未经 Google 验证</p><p>您获得了授权，可以使用一款目前处于测试阶段的应用。除非您了解向您发出邀请的开发者，否则请勿继续。</p><p>我们点击左侧的<strong>继续</strong>就行</p><p>此选项记得勾选不然会报错，下面的注意事项当中有说明</p><p><img src="'+l+'" alt="Googlephotos"></p></div><p>现在更加方便了，其实获取谷歌云盘的时候勾选了相册到时候获取到的token也可以拿来挂载相册~一举两得</p><p>记得打开 <strong><code>Photos Library API</code></strong> 哦~</p>',3),j={href:"https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513",target:"_blank",rel:"noopener noreferrer"},P=e("h3",{id:"两个注意事项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#两个注意事项","aria-hidden":"true"},"#"),o(" 两个注意事项：")],-1),L=e("li",null,[e("p",null,"failed get objs: failed to list objs: Request had insufficient authentication scopes.: []"),e("ul",null,[e("li",null,[o("是因为在获取授权的时候没有勾选 相册权限（查看上面提到的图片） "),e("code",null,"查看和整理您的Google相册媒体库中的内容,向媒体库上传内容。了解详情容")])])],-1),w={href:"https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview?project=357075621397",target:"_blank",rel:"noopener noreferrer"},A=e("ul",null,[e("li",null,[o("是因为没有开启 "),e("strong",null,[e("code",null,"Photos Library API")]),o(" 谷歌相册API")])],-1),G=e("h3",{id:"挂载展示",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#挂载展示","aria-hidden":"true"},"#"),o(" 挂载展示")],-1),N=e("p",null,[e("img",{src:i,alt:"Googlephotos"})],-1);function E(V,q){const s=n("ExternalLinkIcon"),r=n("RouterLink");return c(),d("div",null,[u,g,e("p",null,[o("根目录root，其他目录ID未知( "),f,o(" 还未解决"),e("a",b,[m,t(s)]),o(")")]),y,e("p",null,[o("获取工具 "),e("a",v,[o("https://alist.nn.ci/tool/google/request"),t(s)])]),e("p",null,[o("如何获取自己的 "),x,o(" 去看"),t(r,{to:"/zh/guide/drivers/googledrive.html"},{default:h(()=>[k]),_:1}),o("哪一篇")]),I,e("ul",null,[e("li",null,[e("strong",null,[e("a",j,[o("https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513"),t(s)])])])]),P,e("ol",null,[L,e("li",null,[e("p",null,[o("failed get objs: failed to list objs: Photos Library API has not been used in project 357075621397 before or it is disabled. Enable it by visiting "),e("a",w,[o("https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview?project=357075621397"),t(s)]),o(" then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []")]),A])]),G,N])}const R=a(_,[["render",E],["__file","googlephotos.html.vue"]]);export{R as default};
