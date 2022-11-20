import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as m,a as e,d as n,b as l,w as s,e as v,r as o}from"./app.453d40b9.js";const h={},b=e("h3",{id:"get-alist",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-alist","aria-hidden":"true"},"#"),n(" Get Alist")],-1),k={href:"https://github.com/Xhofe/alist/releases",target:"_blank",rel:"noopener noreferrer"},g=e("h3",{id:"running",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running","aria-hidden":"true"},"#"),n(" Running")],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Unzip the downloaded file to get the executable file:"),n(`
`),e("span",{class:"token function"},"tar"),n(),e("span",{class:"token parameter variable"},"-zxvf"),n(` alist-xxxx.tar.gz
`),e("span",{class:"token comment"},"# Grant program execution permissions:"),n(`
`),e("span",{class:"token function"},"chmod"),n(` +x alist
`),e("span",{class:"token comment"},"# Run the program"),n(`
./alist server
`),e("span",{class:"token comment"},"# Get admin's info"),n(`
./alist admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Unzip the downloaded file to get the executable file:"),n(`
`),e("span",{class:"token function"},"tar"),n(),e("span",{class:"token parameter variable"},"-zxvf"),n(` alist-xxxx.tar.gz
`),e("span",{class:"token comment"},"# Grant program execution permissions:"),n(`
`),e("span",{class:"token function"},"chmod"),n(` +x alist
`),e("span",{class:"token comment"},"# Run the program"),n(`
./alist server
`),e("span",{class:"token comment"},"# Get admin's info"),n(`
./alist admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),_=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Unzip the downloaded file to get the executable file:"),n(`
`),e("span",{class:"token function"},"unzip"),n(` alist-xxxx.zip
`),e("span",{class:"token comment"},"# Run the program"),n(`
.`),e("span",{class:"token punctuation"},"\\"),n(`alist.exe server
`),e("span",{class:"token comment"},"# Get admin's info"),n(`
.`),e("span",{class:"token punctuation"},"\\"),n(`alist.exe admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Install"),n(`
scoop `),e("span",{class:"token function"},"install"),n(` alist
`),e("span",{class:"token comment"},"# Run"),n(`
alist server
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("p",null,[e("em",null,"The xxxx refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is alist-linux-amd64. If your glibc version is too low, it is recommended to download the musl version")],-1),R=e("code",null,"start server @ 0.0.0.0:5244",-1),z=e("code",null,"http://ip:5244",-1),T=v(`<div class="custom-container info"><p class="custom-container-title">Info</p><p>For all platform, you can use follow command to silent start, stop and restart. (v3.4.0 and later)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># start server with \`--force-bin-dir\`</span>
alist start
<span class="token comment"># stop server by pid</span>
alist stop
<span class="token comment"># restart server by pid</span>
alist restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="daemon-linux" tabindex="-1"><a class="header-anchor" href="#daemon-linux" aria-hidden="true">#</a> Daemon(Linux)</h3><p><code>vim /usr/lib/systemd/system/alist.service</code> add the following content, where path_alist is the path where alist is located</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">alist</span>
<span class="token key attr-name">After</span><span class="token punctuation">=</span><span class="token value attr-value">network.target</span>
 
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>
<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">path_alist</span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">path_alist/alist server</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">on-failure</span>
 
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then <code>systemctl daemon-reload</code>, now you can use these commands to manage the program:</p><ul><li>Start: <code>systemctl start alist</code></li><li>Shut down: <code>systemctl stop alist</code></li><li>Self-start: <code>systemctl enable alist</code></li><li>Status: <code>systemctl status alist</code></li><li>Restart: <code>systemctl restart alist</code></li></ul>`,6);function A(L,S){const c=o("ExternalLinkIcon"),r=o("Tabs"),d=o("RouterLink");return p(),m("div",null,[b,e("p",null,[n("Open "),e("a",k,[n("AList Release"),l(c)]),n(" to download the files corresponding to the system to be deployed. The latest version of the front-end has been packaged with the back-end, so there is no need to download the front-end files again.")]),g,l(r,{id:"9",data:[{title:"linux"},{title:"macos"},{title:"windows"},{title:"win(scoop)"}],"tab-id":"os"},{tab0:s(({title:a,value:t,isActive:i})=>[f]),tab1:s(({title:a,value:t,isActive:i})=>[x]),tab2:s(({title:a,value:t,isActive:i})=>[_]),tab3:s(({title:a,value:t,isActive:i})=>[y]),_:1},8,["data"]),w,e("p",null,[n("When you see the output of "),R,n(" and no error is reported afterwards, it means that the operation is successful. The initial password will be output when running for the first time. The program listens to port 5244 by default. Now open "),z,n(" You can see the login page, please see "),l(d,{to:"/guide/webdav.html"},{default:s(()=>[n("WebDav")]),_:1}),n(" for webdav.")]),T])}const N=u(h,[["render",A],["__file","manual.html.vue"]]);export{N as default};
