import{_ as r,N as i,a4 as a,Q as t,a5 as e,Z as o,a6 as d,G as n}from"./framework-fee3bc76.js";const s={},c=d('<h1 id="搜索" tabindex="-1"><a class="header-anchor" href="#搜索" aria-hidden="true">#</a> 搜索</h1><h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3><p>按照以下步骤开启搜索:</p><ol><li>转到<code>索引</code>页，选择一个搜索索引，并单击<code>保存</code>;</li><li>保存索引后，单击<code>构建索引</code>来构建索引;</li><li>现在你可以通过点击页面右上角的搜索块或使用快捷键<code>Ctrl + K</code>来搜索文件。</li></ol><h3 id="不同搜索索引之间的差异" tabindex="-1"><a class="header-anchor" href="#不同搜索索引之间的差异" aria-hidden="true">#</a> 不同搜索索引之间的差异</h3><ul><li><code>数据库</code>:按数据库搜索，它使用现有的 data.db。它将创建一个新表，记录父目录、名称和每个对象的大小，但搜索不拆分单词，这意味着匹配您输入的关键字是否出现在对象的名称中。一般来说，如果您没有特定的搜索要求，我们建议您选择它。</li><li><code>数据库（非全文搜索）</code>:上面使用的是全文搜索模式，但是全文搜索在使用 <strong>MySQL数据库</strong> 时作为Alist数据库会有一些奇怪的问题，暂时还未解决，所以如果你的Alist数据库更改为了 <strong>MySQL</strong> ，并且你的Alist版本 <strong><code>≥3.9.1</code></strong> 推荐你使用这个来构建索引，虽然比全文搜索慢一些差距不是很大，但是不会搜索出奇怪的文件，比较稳妥，等未来版本修复后再通知大家使用全新的全文搜索来构建索引,如果你使用的是 <strong>sqlite3</strong> 那两个你喜欢用那个都可以</li><li><code>bleve</code>:一个开源全文搜索引擎。它将分割对象名称中的单词，并搜索您输入的关键字。但它的搜索结果可能很奇怪，你不能得到你想要的结果，而且它会占用更多的资源。</li></ul><p>下表可以快速帮助您理解这两个搜索索引之间的区别:</p><table><thead><tr><th></th><th>数据库（全文搜索）</th><th>数据库（非全文搜索）</th><th>bleve</th></tr></thead><tbody><tr><td>搜索结果</td><td>中文基本上搜不到</td><td>比全文搜索准，可以搜索中文</td><td>模糊匹配</td></tr><tr><td>搜索速度</td><td>快，优缺点看上面</td><td>比全文搜索慢，优缺点看上面</td><td>快</td></tr><tr><td>指定文件夹搜索</td><td>支持</td><td>支持</td><td>不支持</td></tr><tr><td>硬盘占用</td><td>低</td><td>低</td><td>高</td></tr><tr><td>自动增量更新</td><td>支持</td><td>支持</td><td>不支持</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>若你使用的是MySQL作为数据库，建议使用 <strong><code>非全文搜索</code></strong> （强烈推荐）</p><p><strong><code>非全文搜索</code></strong> 虽然比不上全文搜索快，但是也慢不到哪里，若你非要使用全文搜索 可能得牺牲无法搜索中文为代价</p><p>若是使用 <mark>sqlite</mark> 作为数据库，没有全文两个数据库随便选~</p><p>全文搜索：不是在所有文件里面进行文件的文字里面进行搜索，别理解错了。</p></div><h3 id="搜索提示" tabindex="-1"><a class="header-anchor" href="#搜索提示" aria-hidden="true">#</a> 搜索提示</h3><ul><li>如果你想搜索一个特定的文件夹，你必须选择<code>数据库</code>作为搜索索引;</li><li>如果你选择<code>数据库</code>作为搜索索引，你的数据库类型是<code>sqlite3</code>，我们建议你在创建索引时不要在管理页面做任何更改，因为 <code>sqlite3</code> 不支持并发写，可能导致<code>数据库锁定</code>问题;</li><li>如果你选择<code>bleve</code>作为搜索索引，如果你想搜索新文件或不想搜索已删除的文件，索引需要完全重建才能生效，因为<code>bleve</code>不支持增量更新;</li><li>但对于<code>数据库</code>，它支持增量更新，所以你可以搜索新的文件或删除的文件，只需访问修改的文件夹(并单击&#39;刷新&#39;图标，如果缓存)，无需重建索引，这比<code>bleve</code>方便得多。</li></ul><h3 id="忽略路径" tabindex="-1"><a class="header-anchor" href="#忽略路径" aria-hidden="true">#</a> 忽略路径</h3><p>构建索引期间跳过填写的路径，一行一个路径，可多行填写</p><ul><li>例子： <ul><li>/aaa网盘</li><li>/bbb网盘/ccc文件夹</li></ul></li></ul><h3 id="更新索引" tabindex="-1"><a class="header-anchor" href="#更新索引" aria-hidden="true">#</a> 更新索引</h3><ul><li>(原：要更新索引的路径)</li></ul><p>构建完所有索引后，或者某文件有大批量文件更新，但是又不方便点重新构建就可以使用这个来更新一下索引</p><ul><li><p>例子：</p><ul><li><p>/aaa网盘</p></li><li><p>/bbb网盘/ccc文件夹</p></li></ul></li></ul><h3 id="自动更新索引" tabindex="-1"><a class="header-anchor" href="#自动更新索引" aria-hidden="true">#</a> 自动更新索引</h3><p>⚠️ <strong><code>默认是关闭状态，不自动构建索引</code></strong></p><p>例如你已经构建完毕索引，但是后面又添加一个 <strong>网盘挂载</strong> 或者 <strong>文件夹更新</strong></p><p>但是你已经构建好了索引比较多按照以往的话两个办法</p><ol><li>一个文件夹一个文件夹的进去然后才能构建</li><li>要么全部重构比较繁琐</li></ol><p>但是这次只要把 <strong><code>自动构建索引</code></strong> 按钮打开然后进入一下 <strong>新挂载的网盘</strong> 或者 <strong>有更新的文件夹</strong> 就会自动将这个目录里面索引的文件和文件夹自动构建索引不用一个文件夹一个文件夹的进入让他自动构建了</p><ul><li>优点：不用操心，有更新进有更新的文件夹根目录即可自动构建这个文件夹内所有的索引</li><li>缺点：随时待命准备构建</li></ul><hr><p>有人会发现上面不是有 <a href="#%E8%A6%81%E6%9B%B4%E6%96%B0%E7%B4%A2%E5%BC%95%E7%9A%84%E8%B7%AF%E5%BE%84"><strong>要更新索引的路径</strong></a> 也可以更新吗？ 可以更新但是两者不冲突</p><ul><li><a href="#%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E7%B4%A2%E5%BC%95"><strong>自动更新索引</strong></a> ：适合将所有文件都构建索引的用户</li><li><a href="#%E6%9B%B4%E6%96%B0%E7%B4%A2%E5%BC%95"><strong>更新索引</strong></a> ：适合 <strong>不</strong> 将所有文件都构建索引，但是有文件需要构建，自己手动去构建索引避免所有的都被构建索引</li></ul><h3 id="最大索引深度" tabindex="-1"><a class="header-anchor" href="#最大索引深度" aria-hidden="true">#</a> 最大索引深度</h3><p>默认为20。</p><p>外面显示的是手动构建的，更新索引选项在更新索引按钮里面选择深度。</p><p>说明：目录最多进几层，例如你有一个文件夹深度多达30层文件夹，设置为20，只构建前20层，剩下的10层不进行构建。</p><h3 id="使用注意事项" tabindex="-1"><a class="header-anchor" href="#使用注意事项" aria-hidden="true">#</a> ⚠️ 使用注意事项</h3>',33),h=d('<li><p>Alist <strong>V2</strong> 和 <strong>v3</strong> 类型的挂载默认不能构建</p></li><li><p>如果你使用的是 <strong>MySQL</strong> 作为数据库，推荐你使用 <strong>数据库(非全文搜索)</strong>, <a href="#%E4%B8%8D%E5%90%8C%E6%90%9C%E7%B4%A2%E7%B4%A2%E5%BC%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%B7%AE%E5%BC%82"><strong>点击查看详情看第二条</strong></a></p></li>',2),p=t("p",null,[e("在未来版本（"),t("strong",null,"≥3.9.0版本"),e("）V3用户可以选择是否允许别人挂载你的网盘然后进行索引 ⛔"),t("strong",null,[t("code",null,"谨慎使用")]),e("⛔")],-1),g={href:"https://alist.nn.ci/zh/config/site.html#%E5%85%81%E8%AE%B8%E7%B4%A2%E5%BC%95",target:"_blank",rel:"noopener noreferrer"},u=t("li",null,"别问为什么V2不支持，因为V2版本已不再进行维护，故没有后续了",-1),E={href:"https://github.com/alist-org/alist/discussions/2529",target:"_blank",rel:"noopener noreferrer"};function B(b,_){const l=n("ExternalLinkIcon");return i(),a("div",null,[c,t("ul",null,[h,t("li",null,[p,t("ul",null,[t("li",null,[e("详情查看："),t("a",g,[e("https://alist.nn.ci/zh/config/site.html#允许索引"),o(l)])]),u])]),t("li",null,[t("p",null,[e("为什么不直接开放V2 V3索引构建： "),t("strong",null,[t("a",E,[e("https://github.com/alist-org/alist/discussions/2529"),o(l)])])])])])])}const A=r(s,[["render",B],["__file","search.html.vue"]]);export{A as default};
