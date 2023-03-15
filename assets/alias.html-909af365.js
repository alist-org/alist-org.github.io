import{_ as a,N as o,a9 as i,Q as e,W as t,a1 as s,P as d,ag as c,G as n}from"./framework-95cb4087.js";const r={},h=c(`<h1 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h1><p>What are <code>alias</code>? <code>alias</code> is a function for path merging</p><p>Except <strong><code>download preview (read-only)</code></strong> operations ^(copy, delete, rename, offline download, upload)^ are not allowed</p><p>For example: cloud disk account 1 and cloud disk account 2 both have the folder <code>Movies</code>, but the contents may not (all) overlap</p><p><strong><code>Previously (virtual path)</code></strong>: can only be mounted to two different paths (cloud disk 1/movie, cloud disk 2/movie) or (movie\\cloud disk 1, movie\\cloud disk 2 ) <strong><code>Now(alias)</code></strong>: Provide an aggregated folder (movie) which can contain the contents of cloud disk 1 and cloud disk 2 at the same time</p><p>The folder content rules when displaying are as follows</p><ol><li>Merge with the same name: the same files (folders) are automatically merged into one</li><li>Priority of the same name: When accessing resources, the path file (folder) at the top (front) when filling in the path for each fixed access <ul><li>If the files with the same name are merged, click <strong><code> to play, and when downloading</code></strong>, it will be called first. When filling in <code>Paths</code>, the file with the 302 mode path will be used first.</li></ul></li></ol><p>Let me explain <strong><code>same name first²</code></strong> access rules</p><p>Example 1. Fill in the access according to the following path(302 mode has priority)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local: /localtest/local1
local: /localtest/local2
local: /localtest/local3
local: /localtest/local4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>1, if there is a video 1 2 3 4, each visit is <code>1</code></p><ul><li>If 1 3 4 uses the local proxy and 2 uses <code>302</code>, call 2 first</li></ul></li><li><p>2, a video 3 4 yes then every visit is <code>3</code></p><ul><li>If 3 uses a local proxy and 4 uses <code>302</code>, call 4 first</li></ul></li></ul><p>Example 2. Fill in the access according to the following path(302 mode has priority)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>local: /localtest/local4
local: /localtest/local3
local: /localtest/local2
local: /localtest/local1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>1, if a video has 1 2 3 4, each visit is <code>4</code></p><ul><li>If 1 3 4 uses the local proxy and 2 uses <code>302</code>, call 2 first</li></ul></li><li><p>2, a video 3 4 has then every visit is <code>4</code></p><ul><li>If 4 uses a local proxy and 2 uses <code>302</code>, call 2 first</li></ul></li></ul><h3 id="how-to-add" tabindex="-1"><a class="header-anchor" href="#how-to-add" aria-hidden="true">#</a> How to add</h3>`,15),u=e("strong",null,"alias",-1);function p(m,v){const l=n("RouterLink");return o(),i("div",null,[h,e("p",null,[t("Go to storage add "),s(l,{to:"/guide/drivers/alias.html"},{default:d(()=>[u]),_:1})])])}const g=a(r,[["render",p],["__file","alias.html.vue"]]);export{g as default};