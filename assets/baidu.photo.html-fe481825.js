import{_ as n,N as a,a6 as i,U as e,a7 as t,a0 as l,G as r}from"./framework-2769d840.js";const s={},d=e("h1",{id:"一刻相册",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一刻相册","aria-hidden":"true"},"#"),t(" 一刻相册")],-1),u=e("h2",{id:"刷新令牌-同百度网盘的一样",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#刷新令牌-同百度网盘的一样","aria-hidden":"true"},"#"),t(" 刷新令牌（同百度网盘的一样）")],-1),c={href:"https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=iYCeC9g08h5vuP9UqvPHKKSVrKFXGa1v&redirect_uri=https://alist.nn.ci/tool/baidu/callback&scope=basic,netdisk&qrcode=1",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"相册id",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#相册id","aria-hidden":"true"},"#"),t(" 相册ID")],-1),_=e("li",null,[e("p",null,[e("strong",null,"默认为空时,直接显示根目录全部相册.")])],-1),p=e("li",null,[e("p",null,"如果挂载单个相册时需填写如下内容")],-1),b=e("li",null,[e("p",null,"相册ID 应填：{album_id}|{tid} 示例：4021858707431029901|316519298447849660")],-1),m=e("p",null,"{album_id} ：进入你需要挂载的相册后,查看顶部链接/album 后的ID就是 {album_id}",-1),f={href:"https://photo.baidu.com/photo/web/album/4021858707431029901",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[e("strong",null,"4021858707431029901"),t("就是 {album_id}")],-1),x={href:"https://photo.baidu.com/youai/album/v1/list.",target:"_blank",rel:"noopener noreferrer"},v=e("ul",null,[e("li",null,[t("进入界面后"),e("code",null,"Ctrl+F"),t("搜索上面的ID,在下面数几行就可以看到对应的 {tid}")])],-1);function g(I,C){const o=r("ExternalLinkIcon");return a(),i("div",null,[d,u,e("p",null,[e("a",c,[t("点此"),l(o)]),t("获取刷新令牌。")]),h,e("ul",null,[_,p,b,e("li",null,[m,e("ul",null,[e("li",null,[e("a",f,[t("https://photo.baidu.com/photo/web/album/4021858707431029901"),l(o)])]),k])]),e("li",null,[e("p",null,[t("{tid}:访问 "),e("strong",null,[e("a",x,[t("https://photo.baidu.com/youai/album/v1/list."),l(o)])]),t(" 获取")]),v])])])}const N=n(s,[["render",g],["__file","baidu.photo.html.vue"]]);export{N as default};
