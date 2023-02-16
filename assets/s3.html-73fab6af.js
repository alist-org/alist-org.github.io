import{_ as d,a as _,b as p,c as u,d as f,e as g,f as b,g as m,h as k}from"./sc-043a03d1.js";import{_ as S,N as v,a4 as w,Z as t,P as s,Q as e,a5 as n,a6 as y,G as c}from"./framework-fee3bc76.js";const E={},x=y('<h1 id="对象存储" tabindex="-1"><a class="header-anchor" href="#对象存储" aria-hidden="true">#</a> 对象存储</h1><p>S3 对象存储协议，如 COS、OSS、B2。</p><h2 id="存储桶" tabindex="-1"><a class="header-anchor" href="#存储桶" aria-hidden="true">#</a> 存储桶</h2><p>存储桶名</p><h2 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> Endpoint</h2><p>Endpoint address（不知道可以看下方的官方文档）</p><h2 id="region" tabindex="-1"><a class="header-anchor" href="#region" aria-hidden="true">#</a> Region</h2><p>地区（不知道可以看下方的官方文档）</p><h2 id="access-key-id" tabindex="-1"><a class="header-anchor" href="#access-key-id" aria-hidden="true">#</a> Access key id</h2><p>Access key id</p><h2 id="secret-access-key" tabindex="-1"><a class="header-anchor" href="#secret-access-key" aria-hidden="true">#</a> Secret access key</h2><p>Secret access key</p><h2 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path" aria-hidden="true">#</a> Root folder path</h2><p>根路径，不填则默认为根目录。</p><h2 id="custom-host" tabindex="-1"><a class="header-anchor" href="#custom-host" aria-hidden="true">#</a> Custom Host</h2><p>自定义 CDN 加速域名</p><h2 id="sign-url-expire" tabindex="-1"><a class="header-anchor" href="#sign-url-expire" aria-hidden="true">#</a> Sign url expire</h2><p>签名下载地址的有效期默认为 4 小时。 如果使用自定义加速域名，该选项无效。</p><h2 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> Placeholder</h2><p>占位符文件的名称。</p><h2 id="force-path-style" tabindex="-1"><a class="header-anchor" href="#force-path-style" aria-hidden="true">#</a> Force path style</h2><p>是否启用 <code>ForcePathStyle</code>，通常是 minio 需要的。</p><h2 id="list-object-version" tabindex="-1"><a class="header-anchor" href="#list-object-version" aria-hidden="true">#</a> List object version</h2><p>参见 S3 的 SDK 文档。</p><h2 id="添加对象存储示例及官方文档" tabindex="-1"><a class="header-anchor" href="#添加对象存储示例及官方文档" aria-hidden="true">#</a> 添加对象存储示例及官方文档</h2>',25),B={href:"https://oss.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},O=e("strong",null,"阿里云OSS官网",-1),A={href:"https://help.aliyun.com/document_detail/31837.html",target:"_blank",rel:"noopener noreferrer"},j=e("strong",null,"公共云下OSS各地域Endpoint对照表",-1),R=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,[n("Alist挂载"),e("strong",null,"阿里云盘"),n("需要跳过 "),e("code",null,"referer"),n(" ，若你在防盗链开启不允许 "),e("code",null,"referer"),n(" 为空的话会无法使用，因为阿里云盘用的就是阿里云OSS（北京地区的）")]),e("p",null,[n("其实 "),e("code",null,"地区|Region"),n(" 选项写 "),e("code",null,"Endpoint"),n(" 一样的也可以用，但是为了规范还是照着对照表写吧。")])],-1),K=e("p",null,"填写示例：",-1),C=e("p",null,[e("img",{src:d,alt:"s3"})],-1),q=e("p",null,null,-1),D={href:"https://console.cloud.tencent.com/cos",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"腾讯云COS官网",-1),z={href:"https://cloud.tencent.com/document/product/436/6224",target:"_blank",rel:"noopener noreferrer"},L=e("strong",null,"公共云下COS各地域Endpoint对照表",-1),V=e("p",null,"填写示例：",-1),P=e("p",null,[e("img",{src:_,alt:"s3"})],-1),G=e("p",null,null,-1),I={href:"https://oos-cn.ctyun.cn/oos/ctyun/consoleBucket.html",target:"_blank",rel:"noopener noreferrer"},T=e("strong",null,"天翼云OOS官网",-1),W={href:"https://www.ctyun.cn/document/10026693/10027878",target:"_blank",rel:"noopener noreferrer"},F=e("strong",null,"公共云下OOS各地域Endpoint对照表",-1),J=e("p",null,"填写示例：",-1),U=e("p",null,[e("img",{src:p,alt:"s3"})],-1),Y=e("p",null,null,-1),H={href:"https://console.bce.baidu.com/bos",target:"_blank",rel:"noopener noreferrer"},Q=e("strong",null,"百度云BOS官网",-1),Z={href:"https://cloud.baidu.com/doc/BOS/s/Bk6kqu8eq#%E8%AE%BE%E7%BD%AEreferer%E7%99%BD%E5%90%8D%E5%8D%95",target:"_blank",rel:"noopener noreferrer"},M=e("strong",null,"自行配置Bucket的Referer白名单权限",-1),X={href:"https://cloud.baidu.com/doc/BOS/s/akrqd2wcx",target:"_blank",rel:"noopener noreferrer"},$=e("strong",null,"公共云下BOS各地域Region和Endpoint对照表",-1),ee=e("strong",null,"兼容AWS S3的Endpoint对照表",-1),te={href:"https://cloud.baidu.com/doc/BOS/s/xjwvyq9l4",target:"_blank",rel:"noopener noreferrer"},oe=e("strong",null,"点击查看具体",-1),ne=e("p",null,"填写示例：",-1),se=e("p",null,[e("img",{src:u,alt:"s3"})],-1),re=e("p",null,null,-1),le={href:"https://portal.qiniu.com/kodo/bucket",target:"_blank",rel:"noopener noreferrer"},ae=e("strong",null,"七牛云Kodo官网",-1),ce={href:"https://developer.qiniu.com/kodo/4088/s3-access-domainname",target:"_blank",rel:"noopener noreferrer"},ie=e("strong",null,"公共云下Kodo各地域Region和Endpoint对照表",-1),he=e("p",null,"填写示例：",-1),de=e("p",null,[e("img",{src:f,alt:"s3"})],-1),_e=e("p",null,null,-1),pe={href:"https://console.huaweicloud.com/console/#/obs/manager/buckets",target:"_blank",rel:"noopener noreferrer"},ue=e("strong",null,"华为云OBS官网",-1),fe={href:"https://developer.huaweicloud.com/endpoint?OBS",target:"_blank",rel:"noopener noreferrer"},ge=e("strong",null,"公共云下OBS各地域Region和Endpoint对照表自行查看",-1),be={href:"https://console.huaweicloud.com/iam/?region=cn-north-4&locale=zh-cn#/mine/accessKey",target:"_blank",rel:"noopener noreferrer"},me=e("p",null,"填写示例：",-1),ke=e("p",null,[e("img",{src:g,alt:"s3"})],-1),Se={href:"https://www.jdcloud.com/cn/products/object-storage-service",target:"_blank",rel:"noopener noreferrer"},ve=e("strong",null,"京东云OSS官网",-1),we={href:"https://www.jdcloud.com/cn/activity/oss",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://docs.jdcloud.com/cn/object-storage-service/oss-endpont-list",target:"_blank",rel:"noopener noreferrer"},Ee=e("strong",null,"公共云下OSS各地域Region和Endpoint对照表",-1),xe=e("p",null,"填写示例：",-1),Be=e("p",null,[e("img",{src:b,alt:"s3"})],-1),Oe=e("p",null,null,-1),Ae={href:"https://console.upyun.com/services/file/",target:"_blank",rel:"noopener noreferrer"},je=e("strong",null,"又拍云USS官网",-1),Re={href:"https://s3.console.aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"},Ke=e("strong",null,"亚马逊S3官网",-1),Ce=e("p",null,"无填写示例",-1),qe=e("p",null,[n("无：获取 "),e("strong",null,"Endpoint"),n(" 地狱级难度....")],-1),De={href:"https://www.youtube.com/watch?v=uvKWJ4c1EYc",target:"_blank",rel:"noopener noreferrer"},Ne=e("p",null,"或者自己用自己的办法，欢迎获取成功后 加进来~",-1),ze={href:"https://secure.backblaze.com/b2_buckets.htm",target:"_blank",rel:"noopener noreferrer"},Le=e("strong",null,"B2官网",-1),Ve=e("p",null,[n("国外的，全称 "),e("strong",null,[e("code",null,"Backblaze")]),n("，不需要验证信息，说是前10G免费。")],-1),Pe=e("p",null,"填写示例：",-1),Ge=e("p",null,[e("img",{src:m,alt:"s3"})],-1),Ie={href:"https://console.scaleway.com/object-storage/buckets",target:"_blank",rel:"noopener noreferrer"},Te=e("strong",null,"scaleway官网",-1),We=e("p",null,"国外的，需要卡验证信息",-1),Fe={href:"https://www.scaleway.com/en/docs/storage/object/concepts/#object-storage",target:"_blank",rel:"noopener noreferrer"},Je=e("strong",null,"公共云下Scaleway各地域Region和Endpoint对照表",-1),Ue=e("p",null,"填写示例：",-1),Ye=e("p",null,[e("img",{src:k,alt:"s3"})],-1);function He(Qe,Ze){const o=c("ExternalLinkIcon"),i=c("RouterLink"),h=c("Tabs");return v(),w("div",null,[x,t(h,{id:"75",data:[{title:"阿里云"},{title:"腾讯云"},{title:"天翼云"},{title:"百度云"},{title:"七牛云"},{title:"华为云"},{title:"京东云"},{title:"又拍云"},{title:"亚马逊"},{title:"B2"},{title:"Scaleway"}],"tab-id":"S3"},{tab0:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",B,[O,t(o)])]),e("p",null,[e("a",A,[j,t(o)])]),R,K,C,q]),tab1:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",D,[N,t(o)])]),e("p",null,[e("a",z,[L,t(o)])]),V,P,G]),tab2:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",I,[T,t(o)])]),e("p",null,[e("a",W,[F,t(o)])]),J,U,Y]),tab3:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",H,[Q,t(o)])]),e("p",null,[e("a",Z,[M,t(o)])]),e("p",null,[e("a",X,[$,t(o)])]),e("p",null,[ee,e("a",te,[oe,t(o)])]),ne,se,re]),tab4:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",le,[ae,t(o)])]),e("p",null,[e("a",ce,[ie,t(o)])]),he,de,_e]),tab5:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",pe,[ue,t(o)])]),e("p",null,[e("a",fe,[ge,t(o)]),n("对应的")]),e("p",null,[n("秘钥AK/SK"),e("a",be,[n("获取"),t(o)]),n("自行设置")]),me,ke]),tab6:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",Se,[ve,t(o)])]),e("p",null,[n("优点："),e("a",we,[n("免费10G"),t(o)]),n("，支持IPV6 缺点：需要预充值100元才能开通，不推荐尝试。")]),e("p",null,[e("a",ye,[Ee,t(o)])]),xe,Be,Oe]),tab7:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",Ae,[je,t(o)]),n("："),t(i,{to:"/zh/guide/drivers/uss.html"},{default:s(()=>[n("点击这里进行配置USS")]),_:1})])]),tab8:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",Re,[Ke,t(o)])]),Ce,qe,e("p",null,[n("如果非要试试看 可以参考 "),e("strong",null,[e("a",De,[n("https://www.youtube.com/watch?v=uvKWJ4c1EYc"),t(o)])])]),Ne]),tab9:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",ze,[Le,t(o)])]),Ve,Pe,Ge]),tab10:s(({title:r,value:l,isActive:a})=>[e("p",null,[e("a",Ie,[Te,t(o)])]),We,e("p",null,[e("a",Fe,[Je,t(o)])]),Ue,Ye]),_:1})])}const $e=S(E,[["render",He],["__file","s3.html.vue"]]);export{$e as default};
