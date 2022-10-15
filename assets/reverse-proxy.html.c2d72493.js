import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as d,a as n,b as r,w as l,d as e,e as t,r as c}from"./app.bd0d802b.js";const o={},v=n("h1",{id:"\u53CD\u5411\u4EE3\u7406",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53CD\u5411\u4EE3\u7406","aria-hidden":"true"},"#"),e(" \u53CD\u5411\u4EE3\u7406")],-1),u=e("\u7A0B\u5E8F\u9ED8\u8BA4\u76D1\u542C 5244 \u7AEF\u53E3\u3002\u5982\u6709\u4FEE\u6539\uFF0C\u8BF7\u4E00\u5E76\u4FEE\u6539\u4E0B\u5217\u914D\u7F6E\u4E2D\u7684\u7AEF\u53E3\u53F7\u3002\u5982\u679C\u4F60\u4F7F\u7528\u53CD\u5411\u4EE3\u7406\uFF0C\u5EFA\u8BAE\u4F60\u8BBE\u7F6E"),p=e("site_url"),m=e("\uFF0C\u4EE5\u5E2E\u52A9alist\u66F4\u597D\u7684\u5DE5\u4F5C\u3002"),h=t(`<h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> nginx</h2><p>\u5728\u7F51\u7AD9\u914D\u7F6E\u6587\u4EF6\u7684 server \u5B57\u6BB5\u4E2D\u6DFB\u52A0</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>location / {
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header Host $http_host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header Range $http_range;
	proxy_set_header If-Range $http_if_range;
  proxy_redirect off;
  proxy_pass http://127.0.0.1:5244;
  # the max size of file to upload
  client_max_body_size 20000m;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u4F7F\u7528\u5B9D\u5854\u9762\u677F\uFF0C\u8BF7\u52A1\u5FC5\u5220\u9664\u4EE5\u4E0B\u9ED8\u8BA4\u914D\u7F6E</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>- location ~ ^/(\\.user.ini|\\.htaccess|\\.git|\\.svn|\\.project|LICENSE|README.md
- location ~ .\\*\\.(gif|jpg|jpeg|png|bmp|swf)$
- location ~ .\\*\\.(js|css)?$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="apache" tabindex="-1"><a class="header-anchor" href="#apache" aria-hidden="true">#</a> Apache</h2><p>\u5728 VirtualHost \u5B57\u6BB5\u4E0B\u6DFB\u52A0\u914D\u7F6E\u9879 ProxyPass\uFF0C\u5982\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VirtualHost</span> <span class="token attr-name"><span class="token namespace">*:</span>80</span><span class="token punctuation">&gt;</span></span>
    ServerName myapp.example.com
    ServerAdmin webmaster@example.com
    DocumentRoot /www/myapp/public

    AllowEncodedSlashes NoDecode
    ProxyPass &quot;/&quot; &quot;http://127.0.0.1:5244/&quot; nocanon
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>VirtualHost</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="caddy" tabindex="-1"><a class="header-anchor" href="#caddy" aria-hidden="true">#</a> Caddy</h2><p>\u5728 Caddyfile \u6587\u4EF6\u4E0B\u6DFB\u52A0 reverse_proxy\uFF0C\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>:80 {
  reverse_proxy 127.0.0.1:5244
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u90E8\u7F72\u5728 443 \u7AEF\u53E3\u6B63\u5E38\u4F7F\u7528\u7684\u670D\u52A1\u5668\u4E0A\u4E14\u4F7F\u7528\u57DF\u540D\u8FDB\u884C\u8BBF\u95EE\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u79CD\u914D\u7F6E\u8BA9 Caddy \u81EA\u52A8\u7533\u8BF7\u8BC1\u4E66\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>example.com {
  reverse_proxy 127.0.0.1:5244
}

\u5C06 \`example.com\` \u66FF\u6362\u4E3A\u4F60\u81EA\u5DF1\u89E3\u6790\u540E\u7684\u57DF\u540D\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function _(b,x){const a=c("RouterLink");return i(),d("div",null,[v,n("p",null,[u,r(a,{to:"/zh/config/configuration.html#site_url"},{default:l(()=>[p]),_:1}),m]),h])}const y=s(o,[["render",_],["__file","reverse-proxy.html.vue"]]);export{y as default};
