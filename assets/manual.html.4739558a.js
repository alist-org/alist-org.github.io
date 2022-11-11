import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as m,a as e,b as l,w as n,d as s,e as v,r as o}from"./app.8af2d968.js";const h={},b=e("h3",{id:"get-alist",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#get-alist","aria-hidden":"true"},"#"),s(" Get Alist")],-1),k=s("Open "),_={href:"https://github.com/Xhofe/alist/releases",target:"_blank",rel:"noopener noreferrer"},g=s("AList Release"),f=s(" to download the files corresponding to the system to be deployed. The latest version of the front-end has been packaged with the back-end, so there is no need to download the front-end files again."),x=e("h3",{id:"running",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#running","aria-hidden":"true"},"#"),s(" Running")],-1),y=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Unzip the downloaded file to get the executable file:"),s(`
`),e("span",{class:"token function"},"tar"),s(),e("span",{class:"token parameter variable"},"-zxvf"),s(` alist-xxxx.tar.gz
`),e("span",{class:"token comment"},"# Grant program execution permissions:"),s(`
`),e("span",{class:"token function"},"chmod"),s(` +x alist
`),e("span",{class:"token comment"},"# Run the program"),s(`
./alist server
`),e("span",{class:"token comment"},"# Get admin's info"),s(`
./alist admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Unzip the downloaded file to get the executable file:"),s(`
`),e("span",{class:"token function"},"tar"),s(),e("span",{class:"token parameter variable"},"-zxvf"),s(` alist-xxxx.tar.gz
`),e("span",{class:"token comment"},"# Grant program execution permissions:"),s(`
`),e("span",{class:"token function"},"chmod"),s(` +x alist
`),e("span",{class:"token comment"},"# Run the program"),s(`
./alist server
`),e("span",{class:"token comment"},"# Get admin's info"),s(`
./alist admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Unzip the downloaded file to get the executable file:"),s(`
`),e("span",{class:"token function"},"unzip"),s(` alist-xxxx.zip
`),e("span",{class:"token comment"},"# Run the program"),s(`
.`),e("span",{class:"token punctuation"},"\\"),s(`alist.exe server
`),e("span",{class:"token comment"},"# Get admin's info"),s(`
.`),e("span",{class:"token punctuation"},"\\"),s(`alist.exe admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),z=e("div",{class:"language-bash ext-sh line-numbers-mode"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# Install"),s(`
scoop `),e("span",{class:"token function"},"install"),s(` alist
`),e("span",{class:"token comment"},"# Run"),s(`
alist server
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=e("p",null,[e("em",null,"The xxxx refers to the names corresponding to different systems/architectures, generally Linux-x86/64 is alist-linux-amd64. If your glibc version is too low, it is recommended to download the musl version")],-1),A=s("When you see the output of "),L=e("code",null,"start server @ 0.0.0.0:5244",-1),S=s(" and no error is reported afterwards, it means that the operation is successful. The initial password will be output when running for the first time. The program listens to port 5244 by default. Now open "),G=e("code",null,"http://ip:5244",-1),I=s(" You can see the login page, please see "),N=s("WebDav"),B=s(" for webdav."),D=v(`<div class="custom-container info"><p class="custom-container-title">Info</p><p>For all platform, you can use follow command to silent start, stop and restart. (v3.4.0 and later)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># start server with \`--force-bin-dir\`</span>
alist start
<span class="token comment"># stop server by pid</span>
alist stop
<span class="token comment"># restart server by pid</span>
alist restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="daemon-linux" tabindex="-1"><a class="header-anchor" href="#daemon-linux" aria-hidden="true">#</a> Daemon(Linux)</h3><p><code>vim /usr/lib/systemd/system/alist.service</code> add the following content, where path_alist is the path where alist is located</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Unit</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Description</span><span class="token punctuation">=</span><span class="token value attr-value">alist</span>
<span class="token key attr-name">After</span><span class="token punctuation">=</span><span class="token value attr-value">network.target</span>
 
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Service</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">Type</span><span class="token punctuation">=</span><span class="token value attr-value">simple</span>
<span class="token key attr-name">WorkingDirectory</span><span class="token punctuation">=</span><span class="token value attr-value">path_alist</span>
<span class="token key attr-name">ExecStart</span><span class="token punctuation">=</span><span class="token value attr-value">path_alist/alist server</span>
<span class="token key attr-name">Restart</span><span class="token punctuation">=</span><span class="token value attr-value">on-failure</span>
 
<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">Install</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">WantedBy</span><span class="token punctuation">=</span><span class="token value attr-value">multi-user.target</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then <code>systemctl daemon-reload</code>, now you can use these commands to manage the program:</p><ul><li>Start: <code>systemctl start alist</code></li><li>Shut down: <code>systemctl stop alist</code></li><li>Self-start: <code>systemctl enable alist</code></li><li>Status: <code>systemctl status alist</code></li><li>Restart: <code>systemctl restart alist</code></li></ul>`,6);function E(U,V){const c=o("ExternalLinkIcon"),r=o("Tabs"),d=o("RouterLink");return p(),m("div",null,[b,e("p",null,[k,e("a",_,[g,l(c)]),f]),x,l(r,{data:[{title:"linux"},{title:"macos"},{title:"windows"},{title:"win(scoop)"}],"tab-id":"os"},{tab0:n(({title:a,value:t,isActive:i})=>[y]),tab1:n(({title:a,value:t,isActive:i})=>[w]),tab2:n(({title:a,value:t,isActive:i})=>[R]),tab3:n(({title:a,value:t,isActive:i})=>[z]),_:1},8,["data"]),T,e("p",null,[A,L,S,G,I,l(d,{to:"/guide/webdav.html"},{default:n(()=>[N]),_:1}),B]),D])}const F=u(h,[["render",E],["__file","manual.html.vue"]]);export{F as default};
