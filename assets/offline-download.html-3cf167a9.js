import{_ as s}from"./offline-download-25b0dc81.js";import{_ as c,N as d,a6 as h,U as t,a0 as o,P as _,a7 as n,a8 as i,G as r}from"./framework-2769d840.js";const p={},u=i('<h1 id="离线下载" tabindex="-1"><a class="header-anchor" href="#离线下载" aria-hidden="true">#</a> 离线下载</h1><div class="hint-container warning"><p class="hint-container-title">请仔细阅读以下提示</p><p>有两款离线下载功能软件</p><p>两款用法都一样，提前设置好软件配置(具体配置看下面说明)，</p><p>然后回到前端界面， <mark>找到你想把离线文件上传到哪个文件夹，你就手动进入到该文件夹</mark></p><p>然后再右下角找到离线下载按钮，自行选择使用 Aria2下载还是qBittorrent下载(＞v 3.11.0)</p></div><h2 id="_1-aria2" tabindex="-1"><a class="header-anchor" href="#_1-aria2" aria-hidden="true">#</a> 1.Aria2</h2>',3),g=t("strong",null,"点击查看使用说明",-1),m=t("h2",{id:"_2-qbittorrent",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-qbittorrent","aria-hidden":"true"},"#"),n(" 2.qBittorrent")],-1),f=t("p",null,"（这里以Windows端举例，Linux端不清楚有没有）",-1),b=t("p",null,[n("首先我们先要在 "),t("strong",null,[t("code",null,"qBittorrent")]),n(" 客户端配置好预设值")],-1),q={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159",target:"_blank",rel:"noopener noreferrer"},w=i("<ul><li><strong>ip</strong>：localhost</li><li><strong>port</strong>：8080</li><li><strong>user</strong>：admin</li><li><strong>password</strong>：adminadmin</li></ul><p>将以上参数我们填写到 <strong><code>qBittorrent</code></strong> 客户端，配置好后我们去Alist前端进行离线下载（<strong>方法参考开头的说明</strong>）</p><ul><li>若提交离线链接后提示：<strong>Qbittorrent not ready</strong> 将Alist和qBittorrent都重启试试看</li></ul><p>预设值配置查看地址：</p>",4),B={href:"https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159",target:"_blank",rel:"noopener noreferrer"},x=t("li",null,[t("p",null,[t("code",null,'{ *** Value: "http://admin:adminadmin@localhost:8080/", Type: conf.TypeString, *** } ')])],-1),k=i('<p><img src="'+s+'" alt="Offline download"></p><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3><ol><li>在后台qBittorrent任务中出现：<strong><code>torrent parse timeout</code></strong>，解析超时</li><li>可以解析种子下载，但是在上传的时候出现 <strong><code>The system cannot find the path specified.</code></strong> 找不到路径</li></ol><p>以上两种办法大概率是因为 qBittorrent 软件本体导致的，可能是因为绿色版,修改版 进行了一些功能阉割 修改导致的，建议去官网下载安装即可恢复（由本人亲自踩坑后得出的结论）</p>',4),v=t("strong",null,"qBittorrent",-1),L={href:"https://www.qbittorrent.org/",target:"_blank",rel:"noopener noreferrer"},y=t("strong",null,"qBittorrent",-1),E={href:"https://github.com/c0re100/qBittorrent-Enhanced-Edition",target:"_blank",rel:"noopener noreferrer"},A={class:"hint-container details"},N=t("summary",null,"qBittorrent视频教程",-1);function V(T,P){const a=r("RouterLink"),e=r("ExternalLinkIcon"),l=r("ArtPlayer");return d(),h("div",null,[u,t("p",null,[o(a,{to:"/zh/config/other.html"},{default:_(()=>[g]),_:1})]),m,f,b,t("p",null,[n("根据"),t("a",q,[n("源码"),o(e)]),n("我们知道预设值分别是 admin:adminadmin@localhost:8080/")]),w,t("ul",null,[t("li",null,[t("p",null,[t("strong",null,[t("a",B,[n("https://github.com/alist-org/alist/blob/main/internal/bootstrap/data/setting.go#L159"),o(e)])])])]),x]),k,t("ul",null,[t("li",null,[v,n("官网："),t("strong",null,[t("a",L,[n("https://www.qbittorrent.org/"),o(e)])])]),t("li",null,[y,n("GitHub："),t("strong",null,[t("a",E,[n("https://github.com/c0re100/qBittorrent-Enhanced-Edition"),o(e)])])])]),t("details",A,[N,o(l,{src:"https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2804817007920660481&raw=true",poster:"/img/advanced/qbittorrent.png"})])])}const I=c(p,[["render",V],["__file","offline-download.html.vue"]]);export{I as default};