import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as n,e}from"./app.a4e9bf07.js";const t={},i=e(`<h1 id="\u4E00\u952E\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E00\u952E\u811A\u672C" aria-hidden="true">#</a> \u4E00\u952E\u811A\u672C</h1><p>\u4EC5\u9002\u7528\u4E8E Linux amd64/arm64 \u5E73\u53F0\u3002</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a> \u66F4\u65B0</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> uninstall
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u81EA\u5B9A\u4E49\u8DEF\u5F84" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8DEF\u5F84" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u8DEF\u5F84</h2><p>\u9ED8\u8BA4\u5B89\u88C5\u5728 <code>/opt/alist</code> \u4E2D\u3002 \u81EA\u5B9A\u4E49\u5B89\u88C5\u8DEF\u5F84\uFF0C\u5C06\u5B89\u88C5\u8DEF\u5F84\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570\u6DFB\u52A0\uFF0C\u5FC5\u987B\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF08\u5982\u679C\u8DEF\u5F84\u4EE5 alist \u7ED3\u5C3E\uFF0C\u5219\u76F4\u63A5\u5B89\u88C5\u5230\u7ED9\u5B9A\u8DEF\u5F84\uFF0C\u5426\u5219\u4F1A\u5B89\u88C5\u5728\u7ED9\u5B9A\u8DEF\u5F84 alist \u76EE\u5F55\u4E0B\uFF09\uFF0C\u5982 \u5B89\u88C5\u5230 <code>/root</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Install</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">install</span> /root
<span class="token comment"># update</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> update /root
<span class="token comment"># Uninstall</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> uninstall /root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),l=[i];function r(c,o){return s(),n("div",null,l)}const u=a(t,[["render",r],["__file","script.html.vue"]]);export{u as default};