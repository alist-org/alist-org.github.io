import{_ as a,a as s,b as l}from"./onedrive-update-permission-e18ee92d.js";import{_ as c,N as d,a0 as h,Q as e,a2 as t,a1 as n,P as _,a3 as u,G as i}from"./framework-b57bf042.js";const p={},f=e("h1",{id:"onedrive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#onedrive","aria-hidden":"true"},"#"),t(" OneDrive")],-1),m={class:"hint-container tip"},v=e("p",{class:"hint-container-title"},"提示",-1),b={href:"https://alist.nn.ci/tool/onedrive/request",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"创建应用​",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#创建应用​","aria-hidden":"true"},"#"),t(" 创建应用​")],-1),k=e("blockquote",null,[e("p",null,"你也可以选择跳过此步，使用默认提供的client，但是需要组织管理员批准。")],-1),g=e("li",null,"在打开的页面，选择所在区域，点击创建应用",-1),P={href:"https://tool.nn.ci/onedrive/callback",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"client_id",-1),q=e("img",{src:a,alt:"client_id"},null,-1),A=e("li",null,[t('注册好应用程序之后，选择"证书和密码"，点击"新客户端密码"，输入一串密码，选择时间为最长的那个，点击"添加" （注：在添加之后输入的密码之后会消失，请记录下来 '),e("code",null,"client_secret"),t(" 的值） "),e("img",{src:s,alt:"client_secret"})],-1),I=e("li",null,[t('选择 "API 权限"，点击 "Microsoft Graph"，在"选择权限"中输入 '),e("code",null,"file"),t("，勾选 "),e("code",null,"Files.read"),t('（注：Files.read 是只读最小权限，图中权限较大，也同样可以），点击"确定" '),e("img",{src:l,alt:"api"})],-1),L=e("h2",{id:"获取刷新令牌",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取刷新令牌","aria-hidden":"true"},"#"),t(" 获取刷新令牌")],-1),N=e("code",null,"client_id",-1),B=e("code",null,"client_secret",-1),D={href:"https://tool.nn.ci/onedrive/request",target:"_blank",rel:"noopener noreferrer"},E=u('<h2 id="获取-sharepoint-site-id" tabindex="-1"><a class="header-anchor" href="#获取-sharepoint-site-id" aria-hidden="true">#</a> 获取 SharePoint site_id</h2><p>如果需要挂载 SharePoint，完成上一步后，在显示刷新令牌的界面会出现一个输入站点地址，输入站点地址后点击获取 <code>site_id</code> 即可。</p><h2 id="添加账号" tabindex="-1"><a class="header-anchor" href="#添加账号" aria-hidden="true">#</a> 添加账号</h2><p>将上述过程中获取得到的值依次填入即可。</p><h2 id="根目录路径" tabindex="-1"><a class="header-anchor" href="#根目录路径" aria-hidden="true">#</a> 根目录路径</h2><p>默认为 <code>/</code>，如果需要自定义，就填路径就行，从根路径开始，和本地路径一样，比如 <code>/test</code></p>',6);function R(S,w){const r=i("RouterLink"),o=i("ExternalLinkIcon");return d(),h("div",null,[f,e("div",m,[v,e("p",null,[t("如果你的账号不支持 API，（比如学校账号没有验证管理员，或者管理员禁用了 API），那么你也可以通过 WebDAV 挂载。 有关详细信息，请参阅 "),n(r,{to:"/zh/guide/drivers/webdav.html"},{default:_(()=>[t("WevDAV 页面")]),_:1})])]),e("p",null,[t("首先打开 "),e("a",b,[t("https://alist.nn.ci/tool/onedrive/request"),n(o)])]),x,k,e("ul",null,[g,e("li",null,[t('登陆后选择"注册应用程序"，输入"名称"，选择"任何组织目录中的账户和个人"（注意这里不要看位置选择而是看文字，部分人可能是中间那个选项，不要选成单一租户或者其他选项，否则会导致登陆时出现问题），输入重定向 URL 为 '),e("a",P,[t("https://tool.nn.ci/onedrive/callback"),n(o)]),t(" ，点击注册即可，然后可以得到 "),V,q]),A,I]),L,e("p",null,[t("将上一步骤中获得的 "),N,t(" 和 "),B,t(" 填入 "),e("a",D,[t("https://tool.nn.ci/onedrive/request"),n(o)]),t(' ，点击"获取刷新令牌"即可')]),E])}const G=c(p,[["render",R],["__file","onedrive.html.vue"]]);export{G as default};
