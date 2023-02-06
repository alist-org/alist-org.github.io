import{_ as s,a,b as l}from"./Google-photosend-cdc68c23.js";import{_ as c,X as d,Y as h,Z as e,a1 as o,$ as t,a0 as p,a2 as u,G as i}from"./framework-1d63669c.js";const g={},_=e("h1",{id:"google-photos",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#google-photos","aria-hidden":"true"},"#"),o(" Google Photos")],-1),m=e("h3",{id:"root-folder-file-id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#root-folder-file-id","aria-hidden":"true"},"#"),o(" Root folder file_id")],-1),b=e("s",null,"It seems that a separate album cannot be mounted",-1),f={href:"https://github.com/alist-org/alist/discussions/3264#discussioncomment-4874536",target:"_blank",rel:"noopener noreferrer"},y=e("strong",null,"Reference",-1),w=e("h3",{id:"get-client-id-client-secret",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-client-id-client-secret","aria-hidden":"true"},"#"),o(" Get client_id, client_secret")],-1),v={href:"https://tool.nn.ci/google/request",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"client_id (client ID) client_secret (client secret key)",-1),x=e("strong",null,"Google Drive",-1),G=u(`<p>Get client_id, client_secret Visit the link below to get the Code code</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=={client_id}=&amp;response_type=code&amp;redirect_uri=urn%3Aietf%3Awg%3Aoauth%3A2.0%3Aoob&amp;scope=openid%20profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fphotoslibrary&amp;access_type=offline&amp;approval_prompt=auto&amp;flowName=GeneralOAuthFlow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><mark><strong>(where <code>{client_id}</code> is replaced with <code>client_id</code> of your own application)</strong></mark></p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Tip This app has not been verified by Google</p><p>You have been authorized to use an app that is currently in beta. Do not proceed unless you know the developer who invited you.</p><p>Let&#39;s click <strong>Continue</strong> on the left</p><p>Remember to check this option, otherwise an error will be reported, as explained in the following precautions</p><p><img src="`+s+'" alt="Googlephotos"></p></div><p>After the Code code is obtained, obtain the refresh token</p><p><img src="'+a+'" alt="Googlephotos"></p><p>Remember to open <strong><code>Photos Library API</code></strong> oh~</p>',7),A={href:"https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513",target:"_blank",rel:"noopener noreferrer"},I=e("h3",{id:"two-notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#two-notes","aria-hidden":"true"},"#"),o(" Two notes:")],-1),P=e("li",null,[e("p",null,"failed get objs: failed to list objs: Request had insufficient authentication scopes.: []"),e("ul",null,[e("li",null,[o("It's because you didn't check "),e("code",null,"View and organize the content in your Google Photos media libraryView and organize the content in your Google Photos media library when getting the Code code Content, upload content to the media library. For details, upload content to the media library. Learn more")])])],-1),j={href:"https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview?project=357075621397",target:"_blank",rel:"noopener noreferrer"},L=e("ul",null,[e("li",null,[o("because "),e("strong",null,[e("code",null,"Photos Library API")]),o(" is not enabled")])],-1),C=e("h3",{id:"finish",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#finish","aria-hidden":"true"},"#"),o(" Finish")],-1),F=e("p",null,[e("img",{src:l,alt:"Googlephotos"})],-1);function R(V,T){const n=i("ExternalLinkIcon"),r=i("RouterLink");return d(),h("div",null,[_,m,e("p",null,[o("The root directory is root, and other directory IDs are unknown ("),b,o(" It has not been resolved yet "),e("a",f,[y,t(n)]),o(")")]),w,e("p",null,[o("Get the tool "),e("a",v,[o("https://tool.nn.ci/google/request"),t(n)])]),e("p",null,[o("How to get your own "),k,o(" Go to "),t(r,{to:"/guide/drivers/googledrive.html"},{default:p(()=>[x]),_:1}),o(" which article")]),G,e("p",null,[e("a",A,[o("https://console.cloud.google.com/apis/library/photoslibrary.googleapis.com?project=instant-shard-350513"),t(n)])]),I,e("ol",null,[P,e("li",null,[e("p",null,[o("failed get objs: failed to list objs: Photos Library API has not been used in project 357075621397 before or it is disabled. Enable it by visiting "),e("a",j,[o("https://console.developers.google.com/apis/api/photoslibrary.googleapis.com/overview?project=357075621397"),t(n)]),o(" then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry.: []")]),L])]),C,F])}const E=c(g,[["render",R],["__file","googlephotos.html.vue"]]);export{E as default};
