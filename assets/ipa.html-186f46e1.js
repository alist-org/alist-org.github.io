import{_ as p}from"./TrollStore-f5353058.js";import{_,N as m,a9 as b,Q as e,W as t,a1 as o,P as i,ag as a,G as n}from"./framework-ffef1a40.js";const f={},g=a('<h1 id="ipa-install" tabindex="-1"><a class="header-anchor" href="#ipa-install" aria-hidden="true">#</a> IPA install</h1><h2 id="_1-ipa-native-installation" tabindex="-1"><a class="header-anchor" href="#_1-ipa-native-installation" aria-hidden="true">#</a> 1. IPA native installation</h2><p>You can directly upload the ipa file.</p><p>But for <strong>ios&gt;=16</strong>, you need to name the ipa file: <code>original file name@bundle-identifier.ipa</code>, that is, you need to add <code>@bundle-identifier</code> on the original basis, in which <code>bundle-identifier</code> is the <code>CFBundleIdentifier</code> of Info.plist in the IPA package. Such as:</p><ul><li>aszs@rn.notes.best.ipa</li></ul>',5),T={href:"https://github.com/Xhofe/ipa-renamer",target:"_blank",rel:"noopener noreferrer"},v=e("ul",null,[e("li",null,"If you are a mobile phone user, you can also rename the IPA file, but you must know the format mentioned above, but there is no mobile phone renaming software, please solve it yourself...")],-1),S=e("h3",{id:"tips",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tips","aria-hidden":"true"},"#"),t(" Tips")],-1),y=e("ul",null,[e("li",null,[e("mark",null,".ipa installation requires https and a valid certificate"),t(" , not just a package can be installed without a signature")])],-1),k={href:"https://b23.tv/oLvHHC8",target:"_blank",rel:"noopener noreferrer"},w={href:"https://b23.tv/GxGG8Dn",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[e("strong",null,"Installation Demo"),t(": Deploy "),e("strong",null,"HTTPS"),t(" and "),e("strong",null,"IPA files"),t(" are signed prerequisites, if "),e("mark",null,"IOS16 rename by yourself"),t(" If you can’t install it yourself, please check the problem yourself")],-1),A=e("ul",null,[e("li",null,[e("strong",null,"Installation demo environment"),t(": IOS15.4.1 iPhone12PM, personal certificate, HTTPS")])],-1),I=e("h2",{id:"_2-trollstore-install",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-trollstore-install","aria-hidden":"true"},"#"),t(" 2. TrollStore install")],-1),N=e("p",null,"Devices that support the installation of TrollStore (jailbroken devices are not explained here)",-1),H=e("p",null,[t("The device that supports the installation of TrollStore is up to the iPhone 13 series device system version not greater than "),e("code",null,"stable version 15.4.1"),t(),e("code",null,"beta version 15.6 beta 1 - 5")],-1),B=e("p",null,"If you are an iPhone 14, the factory system version is too high. For other details, please check the table below.",-1),D=e("thead",null,[e("tr",null,[e("th",null,"Version / Device"),e("th",null,"arm64 (A8 - A11)"),e("th",null,"arm64e (A12 - A15, M1)")])],-1),O=e("tr",null,[e("td",null,"13.7 and below"),e("td",null,"Not Supported (CT Bug only got introduced in 14.0)"),e("td",null,"Not Supported (CT Bug only got introduced in 14.0)")],-1),P=e("td",null,"14.0 - 14.8.1",-1),G={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelper.md",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_arm64e.md",target:"_blank",rel:"noopener noreferrer"},C=e("td",null,"15.0 - 15.4.1",-1),R={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md",target:"_blank",rel:"noopener noreferrer"},L=e("td",null,"15.5 beta 1 - 4",-1),q={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_ios15.md",target:"_blank",rel:"noopener noreferrer"},E=e("tr",null,[e("td",null,"15.5 (RC)"),e("td",null,"Not Supported (CT Bug fixed)"),e("td",null,"Not Supported (CT Bug fixed)")],-1),F=e("td",null,"15.6 beta 1 - 5",-1),M={href:"https://github.com/opa334/TrollStore/blob/main/install_sshrd.md",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/opa334/TrollStore/blob/main/install_trollhelperota_arm64e.md",target:"_blank",rel:"noopener noreferrer"},Y=e("tr",null,[e("td",null,"15.6 (RC1/2) and above"),e("td",null,"Not Supported (CT Bug fixed)"),e("td",null,"Not Supported (CT Bug fixed)")],-1),Q=a('<h3 id="installation-example" tabindex="-1"><a class="header-anchor" href="#installation-example" aria-hidden="true">#</a> Installation example</h3><p>If you want to use the installation is very simple, click the *<em>TrollStore</em> button to install</p><p><img src="https://pic.rmb.bdstatic.com/bjh/ff1e47ebc1efe5a907dbfffabf4d5f67.gif" alt="gif"></p><h3 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions" aria-hidden="true">#</a> other instructions</h3><ol><li><p>If you click the <strong>TrollStore</strong> button to open Apple&#39;s magnifying glass, it is because of the following reasons</p><ul><li>Your <code>TrollStore</code> version number is less than version 1.3+, it is recommended to update to the latest version directly</li><li>Your URL scheme is not enabled. If you enable it, remember to click the first option to log out immediately <strong>(Rebuild Now)</strong><ul><li><img src="'+p+'" alt="TrollStore"></li></ul></li></ul></li><li><p>What is the wake-up format of the TrollStore URL?</p><blockquote><p><code>apple-magnifier://install?url=&lt;URL_to_IPA&gt;</code></p></blockquote></li><li><p>Is there any benefit to this installation?</p><ul><li>See the flow chart below for explanation</li></ul></li></ol>',5);function U(Z,z){const l=n("ExternalLinkIcon"),r=n("ArtPlayer"),s=n("Tabs"),h=n("Mermaid");return m(),b("div",null,[g,e("p",null,[t("Recommended to use "),e("a",T,[t("ipa-renamer"),o(l)]),t(" to rename your ipa files automatically and quickly.")]),v,S,y,o(s,{id:"39",data:[{title:"How to change the name of the computer version"},{title:"how to change the name of the IOS 16 mobile phone"}],"tab-id":"ipa"},{tab0:i(({title:d,value:u,isActive:c})=>[o(r,{src:"https://hub.onmicrosoft.cn/public/video/wechat?wxv=wxv_2786278463950405640&raw=true",poster:"/img/advanced/video.png"}),e("p",null,[e("strong",null,[t("If the video fails, you can watch it here: "),e("a",k,[t("https://b23.tv/oLvHHC8"),o(l)])])])]),tab1:i(({title:d,value:u,isActive:c})=>[o(r,{src:"https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4871961534007938&raw=true"}),e("p",null,[e("strong",null,[t("If the video fails, you can watch it here:"),e("a",w,[t("https://b23.tv/GxGG8Dn"),o(l)])])])]),_:1}),x,A,o(r,{src:"https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4870951244144255&raw=true"}),I,N,H,B,e("table",null,[D,e("tbody",null,[O,e("tr",null,[P,e("td",null,[e("a",G,[t("checkra1n + TrollHelper"),o(l)])]),e("td",null,[e("a",V,[t("TrollHelperOTA (arm64e)"),o(l)])])]),e("tr",null,[C,e("td",null,[e("a",R,[t("TrollHelperOTA (iOS 15+)"),o(l)])]),e("td",null,[e("a",j,[t("TrollHelperOTA (iOS 15+)"),o(l)])])]),e("tr",null,[L,e("td",null,[e("a",q,[t("TrollHelperOTA (iOS 15+)"),o(l)])]),e("td",null,[e("a",K,[t("TrollHelperOTA (iOS 15+)"),o(l)])])]),E,e("tr",null,[F,e("td",null,[e("a",M,[t("SSH Ramdisk"),o(l)])]),e("td",null,[e("a",W,[t("TrollHelperOTA (arm64e)"),o(l)])])]),Y])]),Q,o(h,{id:"mermaid-230",code:"eJxVUjtuwzAM3XMKHqC+QIcW+Tdpx25CBsWmYrWKKEg0jN6+lBQnsSeDfD8+u2maBVt2+AqHBNxjRND+D87o0VgGJhnaBNYn1s5ptuTfF5llHI1tryPD92oB8iyb5q2+peF8iTr0sFQU7cV67SBEajGlUwGs1c7GxNDR6B3pLhuDDsHZtjiAiXSF5ZdNfBLVjTLWV9DEwA4SGR51xCq5EdxWtaLwCyKQsRNADhI0OmwZkiRGuaYAhhAwgiTsGVqKHmPV2orW7uHJkZwD25Kv652s9+pnuAYRKgVNmLujTG+NVcpeKB/qNip5OsnDAnzKWaHou3mJK1XFZw0e1LqcmvmlpynlzeI8MEsN2al2koGBQjMEGOUwGrPeNZR+jwo9SxOPQ+RbFO6o5R8wFO+9V/ejkD6VNpk0bay/vDx5zYM8TvsHVAHSXA=="})])}const $=_(f,[["render",U],["__file","ipa.html.vue"]]);export{$ as default};
