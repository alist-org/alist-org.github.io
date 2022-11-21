import{_ as m}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as v,a as e,d as s,b as t,w as n,e as b,r as c}from"./app.68359524.js";const p={},h=e("h1",{id:"手动安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#手动安装","aria-hidden":"true"},"#"),s(" 手动安装")],-1),_=e("h3",{id:"获取-alist",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#获取-alist","aria-hidden":"true"},"#"),s(" 获取 AList")],-1),x={href:"https://github.com/Xhofe/alist/releases",target:"_blank",rel:"noopener noreferrer"},k=e("h3",{id:"运行",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#运行","aria-hidden":"true"},"#"),s(" 运行")],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 解压下载的文件，得到可执行文件："),s(`
`),e("span",{class:"token function"},"tar"),s(),e("span",{class:"token parameter variable"},"-zxvf"),s(` alist-xxxx.tar.gz
`),e("span",{class:"token comment"},"# 授予程序执行权限："),s(`
`),e("span",{class:"token function"},"chmod"),s(` +x alist
`),e("span",{class:"token comment"},"# 运行程序"),s(`
./alist server
`),e("span",{class:"token comment"},"# 获得管理员信息"),s(`
./alist admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 解压下载的文件，得到可执行文件："),s(`
`),e("span",{class:"token function"},"tar"),s(),e("span",{class:"token parameter variable"},"-zxvf"),s(` alist-xxxx.tar.gz
`),e("span",{class:"token comment"},"# 授予程序执行权限："),s(`
`),e("span",{class:"token function"},"chmod"),s(` +x alist
`),e("span",{class:"token comment"},"# 运行程序"),s(`
./alist server
`),e("span",{class:"token comment"},"# 获得管理员信息"),s(`
./alist admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),y=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 解压下载的文件，得到可执行文件："),s(`
`),e("span",{class:"token function"},"unzip"),s(` alist-xxxx.zip
`),e("span",{class:"token comment"},"# 运行程序"),s(`
.`),e("span",{class:"token punctuation"},"\\"),s(`alist.exe server
`),e("span",{class:"token comment"},"# 获得管理员信息"),s(`
.`),e("span",{class:"token punctuation"},"\\"),s(`alist.exe admin
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),L=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 安装"),s(`
scoop `),e("span",{class:"token function"},"install"),s(` alist
`),e("span",{class:"token comment"},"# 运行"),s(`
alist server
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=e("p",null,"xxxx 指的是不同系统/架构对应的名称，一般 Linux-x86/64 为 alist-linux-amd64。如果你的 glibc 版本太低，建议下载 musl 版本",-1),z=e("code",null,"start server@0.0.0.0:5244",-1),w=e("code",null,"http://ip:5244",-1),V=b(`<div class="custom-container info"><p class="custom-container-title">相关信息</p><p>对于所有平台，您可以使用以下命令来静默启动、停止和重新启动。 （v3.4.0 及更高版本）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 携带\`--force-bin-dir\`参数启动服务</span>
alist start
<span class="token comment"># 通过pid停止服务</span>
alist stop
<span class="token comment"># 通过pid重启服务</span>
alist restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="守护进程-linux" tabindex="-1"><a class="header-anchor" href="#守护进程-linux" aria-hidden="true">#</a> 守护进程(Linux)</h3><p>使用任意方式编辑 <code>/usr/lib/systemd/system/alist.service</code> 并添加如下内容，其中 path_alist 为 AList 所在的路径</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>[Unit]
Description=alist
After=network.target
 
[Service]
Type=simple
WorkingDirectory=path_alist
ExecStart=path_alist/alist server
Restart=on-failure
 
[Install]
WantedBy=multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，执行 <code>systemctl daemon-reload</code> 重载配置，现在你可以使用这些命令来管理程序：</p><ul><li>启动: <code>systemctl start alist</code></li><li>关闭: <code>systemctl stop alist</code></li><li>配置开机自启: <code>systemctl enable alist</code></li><li>取消开机自启: <code>systemctl disable alist</code></li><li>状态: <code>systemctl status alist</code></li><li>重启: <code>systemctl restart alist</code></li></ul>`,6);function W(B,D){const d=c("ExternalLinkIcon"),r=c("Tabs"),o=c("RouterLink");return u(),v("div",null,[h,_,e("p",null,[s("打开 "),e("a",x,[s("AList Release"),t(d)]),s(" 下载待部署系统对应的文件。最新版的前端已经和后端打包好了，不用再下载前端文件了。")]),k,t(r,{id:"12",data:[{title:"Linux"},{title:"macOS"},{title:"Windows"},{title:"win(scoop)"}],"tab-id":"os"},{tab0:n(({title:a,value:i,isActive:l})=>[g]),tab1:n(({title:a,value:i,isActive:l})=>[f]),tab2:n(({title:a,value:i,isActive:l})=>[y]),tab3:n(({title:a,value:i,isActive:l})=>[L]),_:1},8,["data"]),A,e("p",null,[s("当你看到 "),z,s(" 的输出，之后没有报错，说明操作成功。 第一次运行时会输出初始密码。程序默认监听 5244 端口。 现在打开 "),w,s(" 可以看到登录页面，WebDAV 请参阅 "),t(o,{to:"/zh/guide/webdav.html"},{default:n(()=>[s("WebDav")]),_:1}),s("。")]),V])}const R=m(p,[["render",W],["__file","manual.html.vue"]]);export{R as default};
