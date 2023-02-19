import{_ as l,N as s,a6 as d,U as t,a7 as e,a0 as a,P as i,a8 as n,G as r}from"./framework-2769d840.js";const h={},c=n('<h1 id="site-settings" tabindex="-1"><a class="header-anchor" href="#site-settings" aria-hidden="true">#</a> Site settings</h1><h3 id="version" tabindex="-1"><a class="header-anchor" href="#version" aria-hidden="true">#</a> Version</h3><p>The version of the <code>alist</code>, readonly.</p><h3 id="api-url" tabindex="-1"><a class="header-anchor" href="#api-url" aria-hidden="true">#</a> Api url</h3>',4),u=n('<p>The address of your <code>alist</code>, such as <code>https://pan.nn.ci</code>.This address will be used in some places in the program, If you do not set this field, Some features may not work properly, such as:</p><ul><li>thumbnail of <code>LocalStorage</code></li><li>Preview after opening web proxy</li><li>The download address after opening the web proxy</li><li>Reverse proxy to sub directory</li><li>...</li></ul><h3 id="base-path" tabindex="-1"><a class="header-anchor" href="#base-path" aria-hidden="true">#</a> Base path</h3>',3),p=t("code",null,"/",-1),f=t("code",null,"https://pan.nn.ci/alist",-1),m=t("code",null,"alist",-1),_=t("code",null,"Api url",-1),y=t("code",null,"https://pan.nn.ci/alist",-1),b=n('<h3 id="site-title" tabindex="-1"><a class="header-anchor" href="#site-title" aria-hidden="true">#</a> Site title</h3><p>The title of the <code>alist</code>, such as <code>Alist</code>.</p><h3 id="announcement" tabindex="-1"><a class="header-anchor" href="#announcement" aria-hidden="true">#</a> Announcement</h3><p>The announcement of the <code>alist</code>, such as <code>### Hello\\nWelcome to use Alist</code>. We suggest you add a title in front of the content, such as <code>### Hello</code>, so that the content will not be covered by <code>Close Button</code>.</p><ul><li>If you don&#39;t want to display it, you can clear the contents of the announcement to not display it.</li></ul><h3 id="pagination-type" tabindex="-1"><a class="header-anchor" href="#pagination-type" aria-hidden="true">#</a> Pagination type</h3><ul><li>All: All files will be displayed at once.</li><li>Pagination: Show a <code>Paginator</code> at the bottom of the page.</li><li>Load more: Show a <code>Load more</code> button at the bottom of the page.</li><li>Auto load more: Automatically load more files when scrolling to the bottom of the page.</li></ul><h3 id="default-page-size" tabindex="-1"><a class="header-anchor" href="#default-page-size" aria-hidden="true">#</a> Default page size</h3><p>The default page size of the <code>alist</code> if <code>Pagination type</code> doesn&#39;t set to <code>All</code>, such as <code>20</code>.</p><h3 id="allow-indexing" tabindex="-1"><a class="header-anchor" href="#allow-indexing" aria-hidden="true">#</a> allow indexing</h3><p>Whether to allow others to mount your Alist to build the index, check it and enable it.</p><p>The default is off, use with caution. (New features in version 3.8.0)</p>',12);function g(w,x){const o=r("RouterLink");return s(),d("div",null,[c,t("blockquote",null,[t("p",null,[e("Deprecated in v3.0.2 and later, moved to "),a(o,{to:"/config/configuration.html#site-url"},{default:i(()=>[e("site_url")]),_:1})])]),u,t("blockquote",null,[t("p",null,[e("Deprecated in v3.0.2 and later, moved to "),a(o,{to:"/config/configuration.html#site-url"},{default:i(()=>[e("site_url")]),_:1})])]),t("p",null,[e("Default "),p,e(", if you want reverse proxy with sub directory(see "),a(o,{to:"/faq/howto.html#how-to-reverse-proxy-with-sub-directory"},{default:i(()=>[e("reverse proxy with sub directory")]),_:1}),e(" for details), such as "),f,e(", you should set this field to "),m,e(", at the same time you need to set "),_,e(" to "),y,e(".")]),b])}const A=l(h,[["render",g],["__file","site.html.vue"]]);export{A as default};
