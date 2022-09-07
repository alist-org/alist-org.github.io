import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as s,a as t,d as a,w as h,b as e,e as c,r as i}from"./app.83fefdb6.js";const l={},p=t("h1",{id:"global-settings",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#global-settings","aria-hidden":"true"},"#"),e(" Global settings")],-1),_=t("h3",{id:"hide-files",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#hide-files","aria-hidden":"true"},"#"),e(" Hide files")],-1),u=e("Match files hidden by regular expressions("),f=t("code",null,"javascript",-1),m=e("). If you don't understand, don't fill in them randomly. Wrong regular expressions will cause the front-end page to crash. One per line. By default, there is an example expression that hides "),g={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},b=e("README.md"),x=e(" in all directories."),w=e("It's not really hiding. It still exists in the list returned by the api, it just doesn't show up in the frontend list. So if you want to really hide, add a "),y=e("meta"),k=e(" record instead."),v=c('<h3 id="package-download" tabindex="-1"><a class="header-anchor" href="#package-download" aria-hidden="true">#</a> Package download</h3><p>Whether to enable package download, default is true.</p><h3 id="customize-head" tabindex="-1"><a class="header-anchor" href="#customize-head" aria-hidden="true">#</a> Customize head</h3><p>Any content you want which are automatically placed at the beginning of the head of the web page</p><h3 id="customize-body" tabindex="-1"><a class="header-anchor" href="#customize-body" aria-hidden="true">#</a> Customize body</h3><p>Any content you want which are automatically placed at the end of the body of the web page</p><h3 id="link-expiration" tabindex="-1"><a class="header-anchor" href="#link-expiration" aria-hidden="true">#</a> Link expiration</h3><p>The expiration time of the direct link, in hours. If it &lt;= 0, it will not expire. Default is 0.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Only the straight chain of the path with the password added will have an expiration time, otherwise it will not expire.Because the expiration time is added to the sign query parameter, and the path without adding the password will not check the sign.</p></div><h3 id="privacy-regs" tabindex="-1"><a class="header-anchor" href="#privacy-regs" aria-hidden="true">#</a> Privacy regs</h3><p>What you don&#39;t want to show in the error message, One regular expression (in <code>Golang</code>) per line. The matched content will be replaced with * of the corresponding length.</p><h3 id="ocr-api" tabindex="-1"><a class="header-anchor" href="#ocr-api" aria-hidden="true">#</a> Ocr api</h3>',12),E=e("Used to identify verification codes. You can deploy yourself: "),z={href:"https://hub.docker.com/r/xhofe/ddddocr_server",target:"_blank",rel:"noopener noreferrer"},I=e("https://hub.docker.com/r/xhofe/ddddocr_server"),B=e(". The default ocr api is deployed on the "),L={href:"https://app.koyeb.com/",target:"_blank",rel:"noopener noreferrer"},N=e("koyeb"),A=e(", which is not recommended to use in production environment.");function C(O,R){const o=i("ExternalLinkIcon"),n=i("RouterLink");return d(),s("div",null,[p,_,t("p",null,[u,f,m,t("a",g,[b,a(o)]),x]),t("p",null,[w,a(n,{to:"/guide/advanced/meta.html"},{default:h(()=>[y]),_:1}),k]),v,t("p",null,[E,t("a",z,[I,a(o)]),B,t("a",L,[N,a(o)]),A])])}const D=r(l,[["render",C],["__file","global.html.vue"]]);export{D as default};
