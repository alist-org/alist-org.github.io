import{_ as a}from"./github-2f91a473.js";import{_ as r,N as s,a6 as o,U as t,a7 as e,a0 as n,a8 as i,G as h}from"./framework-2769d840.js";const c={},u=i('<h1 id="github登录" tabindex="-1"><a class="header-anchor" href="#github登录" aria-hidden="true">#</a> GitHub登录</h1><h3 id="github-client-id" tabindex="-1"><a class="header-anchor" href="#github-client-id" aria-hidden="true">#</a> Github client id</h3><p>客户端ID</p><h3 id="github-client-secrets" tabindex="-1"><a class="header-anchor" href="#github-client-secrets" aria-hidden="true">#</a> Github client secrets</h3><p>秘钥ID</p>',5),d={href:"https://github.com/settings/developers",target:"_blank",rel:"noopener noreferrer"},p=t("strong",null,[t("code",null,"New OAuth App")],-1),_=t("h3",{id:"register-oauth-填写说明",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#register-oauth-填写说明","aria-hidden":"true"},"#"),e(" Register OAuth 填写说明")],-1),g=i("<li>Application name <ul><li>随便写想叫什么叫什么</li></ul></li><li><mark><strong>Homepage URL</strong></mark><ul><li>主页网址地址 <ul><li>可以使用http https都可以</li></ul></li></ul></li><li>Application description <ul><li>随便写</li></ul></li>",3),b=t("mark",null,[t("strong",null,"Authorization callback URL")],-1),m=t("li",null,"回调URL地址",-1),f={href:"https://xn--6qqv7i2xdt95b/api/auth/github_callback",target:"_blank",rel:"noopener noreferrer"},x=t("ul",null,[t("li",null,"可以使用http https都可以")],-1),k=i('<p>填写完毕后记得获取一下 <strong>Client secrets</strong>，然后填写到Alist后台。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>若想使用GitHub登录，首选需要你搭建Alist的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用</p></div><h3 id="完整填写参考示意图" tabindex="-1"><a class="header-anchor" href="#完整填写参考示意图" aria-hidden="true">#</a> 完整填写参考示意图</h3><p><img src="'+a+'" alt="github"></p>',4);function v(A,G){const l=h("ExternalLinkIcon");return s(),o("div",null,[u,t("p",null,[e("打开 "),t("strong",null,[t("a",d,[e("https://github.com/settings/developers"),n(l)])]),e(" 点击 "),p]),_,t("ul",null,[g,t("li",null,[b,t("ul",null,[m,t("li",null,[t("strong",null,[t("a",f,[e("https://你的域名/api/auth/github_callback"),n(l)])]),x])])])]),k])}const H=r(c,[["render",v],["__file","github.html.vue"]]);export{H as default};
