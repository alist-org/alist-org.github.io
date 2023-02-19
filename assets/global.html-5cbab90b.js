import{_ as r,N as d,a6 as l,U as e,a7 as a,a0 as t,P as h,a8 as s,G as o}from"./framework-2769d840.js";const c={},p=e("h1",{id:"global-settings",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#global-settings","aria-hidden":"true"},"#"),a(" Global settings")],-1),u=e("h3",{id:"hide-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hide-files","aria-hidden":"true"},"#"),a(" Hide files")],-1),f=e("code",null,"javascript",-1),m={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},g=s('<h3 id="package-download" tabindex="-1"><a class="header-anchor" href="#package-download" aria-hidden="true">#</a> Package download</h3><p>Whether to enable package download, default is true.</p><h3 id="customize-head" tabindex="-1"><a class="header-anchor" href="#customize-head" aria-hidden="true">#</a> Customize head</h3><p>Any content you want which are automatically placed at the beginning of the head of the web page</p><h3 id="customize-body" tabindex="-1"><a class="header-anchor" href="#customize-body" aria-hidden="true">#</a> Customize body</h3><p>Any content you want which are automatically placed at the end of the body of the web page</p><h3 id="link-expiration" tabindex="-1"><a class="header-anchor" href="#link-expiration" aria-hidden="true">#</a> Link expiration</h3><p>The expiration time of the direct link, in hours. If it equals 0, it will not expire. Default is 0.</p><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Only the straight chain of the path with the password added will have an expiration time, otherwise it will not expire.Because the expiration time is added to the sign query parameter, and the path without adding the password will not check the sign.</p></div><h3 id="privacy-regs" tabindex="-1"><a class="header-anchor" href="#privacy-regs" aria-hidden="true">#</a> Privacy regs</h3><p>What you don&#39;t want to show in the error message, One regular expression (in <code>Golang</code>) per line. The matched content will be replaced with * of the corresponding length.</p><h3 id="ocr-api" tabindex="-1"><a class="header-anchor" href="#ocr-api" aria-hidden="true">#</a> Ocr api</h3>',12),x={href:"https://hub.docker.com/r/xhofe/ddddocr_server",target:"_blank",rel:"noopener noreferrer"},b={href:"https://app.koyeb.com/",target:"_blank",rel:"noopener noreferrer"},y=e("h3",{id:"sign-all",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sign-all","aria-hidden":"true"},"#"),a(" Sign all")],-1),_={href:"https://xxxx.com/d/xx",target:"_blank",rel:"noopener noreferrer"},k=e("mark",null,[e("strong",null,"sign=vUQ5KFXnwMseKnIUXGRcfoG3cEHzKFBiPGp1NriMDXA=:0")],-1),w=e("p",null,"If you need to close it, you can close it yourself, but you need to pay attention to security issues. After closing the signature, if the site can be accessed by the public network, the password may be bypassed to access private files.",-1),v=e("h2",{id:"forward-direct-link-params",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#forward-direct-link-params","aria-hidden":"true"},"#"),a(" Forward direct link params")],-1),q={href:"https://github.com/alist-org/alist/issues/3123",target:"_blank",rel:"noopener noreferrer"},A=s(`<h3 id="filename-char-mapping" tabindex="-1"><a class="header-anchor" href="#filename-char-mapping" aria-hidden="true">#</a> Filename char mapping</h3><p>Mainly to map some special characters so that Alist can work normally</p><p>For example, the <code>/</code> symbol is a path symbol in the Alist program. Some people’s files have <code>/</code> symbols that cause the file to be disconnected halfway and cannot be viewed. We can use this method to map and convert.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;/&quot;</span><span class="token operator">:</span> <span class="token string">&quot;|&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;xx1&quot;</span><span class="token operator">:</span><span class="token string">&quot;xx1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;xx2&quot;</span><span class="token operator">:</span><span class="token string">&quot;xx2&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The default is the first one at the beginning. If you want to add it later, you can add it later. The format is as simple as above.</p>`,5);function I(E,N){const n=o("ExternalLinkIcon"),i=o("RouterLink");return d(),l("div",null,[p,u,e("p",null,[a("Match files hidden by regular expressions("),f,a("). If you don't understand, don't fill in them randomly. Wrong regular expressions will cause the front-end page to crash. One per line. By default, there is an example expression that hides "),e("a",m,[a("README.md"),t(n)]),a(" in all directories.")]),e("p",null,[a("It's not really hiding. It still exists in the list returned by the api, it just doesn't show up in the frontend list. So if you want to really hide, add a "),t(i,{to:"/guide/advanced/meta.html"},{default:h(()=>[a("meta")]),_:1}),a(" record instead.")]),g,e("p",null,[a("Used to identify verification codes. You can deploy yourself: "),e("a",x,[a("https://hub.docker.com/r/xhofe/ddddocr_server"),t(n)]),a(". The default ocr api is deployed on the "),e("a",b,[a("koyeb"),t(n)]),a("(No availability guarantee), which is not recommended to use in production environment.")]),y,e("p",null,[a("Add signatures to the direct link of all files (whether with password or not) That is "),e("a",_,[a("https://xxxx.com/d/xx"),t(n)]),a("? "),k]),w,v,e("p",null,[a("You can check it out yourself："),e("strong",null,[e("a",q,[a("https://github.com/alist-org/alist/issues/3123"),t(n)])])]),A])}const T=r(c,[["render",I],["__file","global.html.vue"]]);export{T as default};
