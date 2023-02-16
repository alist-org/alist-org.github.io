import{_ as s,a as d,b as c}from"./onedrive-update-permission-e18ee92d.js";import{_ as l,N as h,a4 as p,Q as e,a5 as t,Z as o,P as _,a6 as a,G as n}from"./framework-fee3bc76.js";const u={},f=e("h1",{id:"onedrive",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#onedrive","aria-hidden":"true"},"#"),t(" OneDrive")],-1),m={class:"hint-container tip"},g=e("p",{class:"hint-container-title"},"Tips",-1),k={href:"https://alist.nn.ci/tool/onedrive/request",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"create-an-application",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-an-application","aria-hidden":"true"},"#"),t(" Create an application")],-1),b=e("blockquote",null,[e("p",null,"You can also choose to skip this step and use the client provided by default, but requires the approval of the organization administrator.")],-1),w=e("li",null,"On the page that opens, select the region and click Create Application",-1),x=e("code",null,"Register Application",-1),y=e("code",null,"Name",-1),A=e("code",null,"Accounts and Individuals in Any Organization Directory",-1),N={href:"https://alist.nn.ci/tool/onedrive/callback",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,"register",-1),I=e("img",{src:s,alt:"client_id"},null,-1),S=a('<li>After registering the application, select <code>Certificate and Password</code>, click <code>New Client Password</code>, enter a string of passwords, select the one with the longest time, and click <code>Add</code> (Note: The password entered after adding will disappear, please record the value of client_secret) <img src="'+d+'" alt="client_secret"></li><li>Select <code>API Permissions</code>, click <code>MicroSoft Graph</code>, enter file in the <code>Select Permissions</code>, and check <code>Files.read</code> (Note: Files.read is a read-only minimum permission. The permission in the figure is larger, and the same can be done ), click <code>Update Permission</code><img src="'+c+'" alt="api"></li>',2),T=e("h3",{id:"get-refresh-token",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-refresh-token","aria-hidden":"true"},"#"),t(" Get refresh token")],-1),q={href:"https://alist.nn.ci/tool/onedrive/request",target:"_blank",rel:"noopener noreferrer"},C=a('<h3 id="get-sharepoint-site-id" tabindex="-1"><a class="header-anchor" href="#get-sharepoint-site-id" aria-hidden="true">#</a> Get Sharepoint site_id</h3><p>If you need to mount Sharepoint, after completing the previous step, an input site address will appear on the interface that displays the refresh token. After entering the site address, click Get site_id.</p><h3 id="add-storage" tabindex="-1"><a class="header-anchor" href="#add-storage" aria-hidden="true">#</a> Add storage</h3><p>Fill in the values ​​obtained in the above process one by one.</p><h4 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path" aria-hidden="true">#</a> Root folder path</h4><p>The default is <code>/</code>, if you need to customize, just fill in the path, starting from the root path, the same as the local path, such as <code>/test</code></p>',6);function F(G,R){const r=n("RouterLink"),i=n("ExternalLinkIcon");return h(),p("div",null,[f,e("div",m,[g,e("p",null,[t("If your account does not support the API, (for example, the school account has not verified the administrator, or the administrator has disabled the API), then you can also mount it through webdav. For details, see "),o(r,{to:"/guide/drivers/webdav.html"},{default:_(()=>[t("webdav")]),_:1})])]),e("p",null,[t("First open "),e("a",k,[t("https://alist.nn.ci/tool/onedrive/request"),o(i)])]),v,b,e("ul",null,[w,e("li",null,[t("After logging in, select "),x,t(", enter "),y,t(", and select "),A,t(" (note that you don't look at the location selection but the text here. Some people may be the middle option, don't select a single Tenant or other options, otherwise it will cause problems when logging in), enter the redirect URL as "),e("a",N,[t("https://alist.nn.ci/tool/onedrive/callback"),o(i)]),t(", "),P,t(", and then you can get client_id "),I]),S]),T,e("p",null,[t("Fill in the client_id and client_secret obtained in the previous step into the "),e("a",q,[t("https://alist.nn.ci/tool/onedrive/request"),o(i)]),t(" page, click Get Refresh Token, you can get the refresh token")]),C])}const z=l(u,[["render",F],["__file","onedrive.html.vue"]]);export{z as default};
