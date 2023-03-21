import{_ as d,N as a,a9 as n,Q as e,W as t,a1 as r,ag as c,G as s}from"./framework-95cb4087.js";const h={},u=e("h1",{id:"百度网盘分享链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#百度网盘分享链接","aria-hidden":"true"},"#"),t(" 百度网盘分享链接")],-1),i=e("p",null,"挂载百度网盘分享链接，可供下载，无上传编辑等功能，api非官方。",-1),l=e("h2",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),t(" 配置")],-1),_=e("code",null,"pan.baidu.com/s/",-1),b=e("code",null,"?",-1),p={href:"https://blog.imwcr.cn/2022/11/24/%e5%a6%82%e4%bd%95%e6%8a%93%e5%8c%85%e8%8e%b7%e5%8f%96%e7%99%be%e5%ba%a6%e7%bd%91%e7%9b%98%e7%bd%91%e9%a1%b5%e7%89%88%e5%ae%8c%e6%95%b4-cookie/",target:"_blank",rel:"noopener noreferrer"},q=c('<h2 id="qa" tabindex="-1"><a class="header-anchor" href="#qa" aria-hidden="true">#</a> QA</h2><table><thead><tr><th>出错配置</th><th>典型报错</th><th>修复说明</th></tr></thead><tbody><tr><td>surl</td><td><code>{&quot;errno&quot;:2,&quot;errtype&quot;:0}</code></td><td>分享链接可能失效, 检查链接状态</td></tr><tr><td>pwd</td><td><code>{&quot;errno&quot;:-130,&quot;errtype&quot;:&quot;mispwd-9&quot;}</code></td><td>分享密码错误</td></tr><tr><td>BDUSS</td><td><code>{&quot;errno&quot;:9019,&quot;errmsg&quot;:&quot;need verify&quot;}</code></td><td>BDUSS无效</td></tr><tr><td>UA</td><td><code>{&quot;error_code&quot;:31326,&quot;error_msg&quot;:&quot;user is not authorized, hitcode:119&quot;}</code></td><td>user-agent违反百度限制, 访问端需设置非浏览器UA(如netdisk)或开启Web代理</td></tr></tbody></table><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2>',3),f={href:"https://github.com/yuantuo666/baiduwp-php",target:"_blank",rel:"noopener noreferrer"};function m(g,x){const o=s("ExternalLinkIcon");return a(),n("div",null,[u,i,l,e("p",null,[t("浏览目录需设置分享surl和pwd，下载还需设置BDUSS。 surl即为分享地址"),_,t("后"),b,t("前部分，pwd填4位提取码，无提取码留空。 BDUSS由cookie中提取，"),e("a",p,[t("参考教程"),r(o)]),t("。")]),q,e("p",null,[t("接口来自"),e("a",f,[t("github.com/yuantuo666/baiduwp-php"),r(o)]),t("项目，非官方api。 当前仅移植目录浏览和普通下载功能，欢迎继续开发。 因缺失官方文档，不排除存在一些兼容问题，可至github反馈，建议提供复现链接以供调试。 不能突破速度限制，请合理使用。")])])}const S=d(h,[["render",m],["__file","baidu_share.html.vue"]]);export{S as default};
