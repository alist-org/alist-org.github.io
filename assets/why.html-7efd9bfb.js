import{_ as d,a as h,b as c,c as u,d as p}from"./123error-fadc989e.js";import{_ as f,N as g,a7 as m,Q as e,W as t,a0 as o,P as r,af as n,G as i}from"./framework-acfcafcc.js";const w={},y=n('<h3 id="why-i-got-the-error-failed-get-storage-can-t-find-storage-with-rawpath-when-i-open-web-pages-after-install-upgrade" tabindex="-1"><a class="header-anchor" href="#why-i-got-the-error-failed-get-storage-can-t-find-storage-with-rawpath-when-i-open-web-pages-after-install-upgrade" aria-hidden="true">#</a> Why I got the error <code>failed get storage: can&#39;t find storage with rawPath: /</code> when I open web pages after install/upgrade?</h3><p>Because you haven&#39;t added storage. Click the <code>Login</code> button at the bottom to log in and then click <code>Manage</code> button to enter the background and add storage on the storage page.</p><h3 id="why-i-lost-all-my-storage-in-v3" tabindex="-1"><a class="header-anchor" href="#why-i-lost-all-my-storage-in-v3" aria-hidden="true">#</a> why i lost all my storage in v3</h3><p>New versions (V3 and later) are not compatible with V2, so you need to re-add your storage.</p><h3 id="why-i-see-failed-get-aria2-version-error-in-log" tabindex="-1"><a class="header-anchor" href="#why-i-see-failed-get-aria2-version-error-in-log" aria-hidden="true">#</a> Why I see <code>failed get aria2 version</code> error in log?</h3><p>Because you haven&#39;t installed aria2 or the settings of aria2 are wrong. Don&#39;t worry, it won&#39;t affect the use of Alist, you can ignore it.</p><h3 id="why-i-got-the-error-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path-when-i-add-new-storage" tabindex="-1"><a class="header-anchor" href="#why-i-got-the-error-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path-when-i-add-new-storage" aria-hidden="true">#</a> why i got the error <code>Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</code> when I add new storage?</h3>',7),b=e("strong",null,"UNIQUE",-1),k=e("br",null,null,-1),v=e("code",null,"Ctrl",-1),_=e("code",null,"F5",-1),x=n('<h3 id="why-can-t-i-preview-the-video-or-audio-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-video-or-audio-file" aria-hidden="true">#</a> Why can&#39;t I preview the video or audio file?</h3><ul><li>Requires a browser-supported encoding</li><li>General browsers do not support h265 encoded video</li><li>General browsers do not support ac3 encoded audio</li></ul><p>In particular, for Safari:</p><ul><li>For cross-origin media, content-type must be the media type, not the generic application/octet-stream. So if the content-type returned by the direct link is application/octet-stream, then Safari will not be able to play.(PS: Why Can AliyunDrive play in Safari? Because the official website of the video playback is not the use of download links, but after the transcoding of AliyunDrive)</li><li>Aliyun disk development platform driver supports online video playback (also limited to Aliyun disk open platform driver and <strong>Aliyun Video Previewer</strong> option player)</li></ul><h3 id="why-can-t-i-preview-the-office-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-office-file" aria-hidden="true">#</a> Why can&#39;t I preview the office file?</h3><p>For microsoft office online viewers, you need:</p><ul><li>External network access</li><li>The document access address cannot use ip directly, it needs to be accessed through a domain name, and the port must be port 80 / 443</li><li>The format of the document (must be one of the following):</li><li>Word: docx, docm, dotm, dotx</li><li>Excel: xlsx, xlsb, xls, xlsm</li><li>PowerPoint: pptx, ppsx, ppt, pps, pptm, potm, ppam, potx, ppsm</li><li>Document size: Word and PowerPoint documents must be less than 10 megabytes; Excel must be less than five megabytes</li></ul><h3 id="why-can-t-i-preview-the-pdf-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-pdf-file" aria-hidden="true">#</a> Why can&#39;t I preview the PDF file?</h3><ul><li>We use <code>pdf.js</code> as the default PDF previewer. So it requires https+cors.</li><li>https is opened for yourself, reverse proxy or provide a certificate in the configuration file</li><li>cors provides support for related cloud disks and cannot be modified by yourself unless the agent is turned on to use the program to transfer</li></ul><h3 id="why-can-t-package​-download" tabindex="-1"><a class="header-anchor" href="#why-can-t-package​-download" aria-hidden="true">#</a> Why can&#39;t package​ download?</h3><p>Same as pdf preview, requires https+cors support,and:</p><ul><li>AList use stream API of browser to support package download, so it requires browser support. Usually, it is supported by new browsers, such as Chrome, Firefox, Edge, etc.</li></ul><h3 id="why-does-it-shows-uploading-in-the-backend-when-i-upload-a-file" tabindex="-1"><a class="header-anchor" href="#why-does-it-shows-uploading-in-the-backend-when-i-upload-a-file" aria-hidden="true">#</a> Why does it shows <code>Uploading in the backend</code> when I upload a file?</h3><ul><li>All uploads of this program use server transfer, which will consume server traffic to communicate with the corresponding storage API</li></ul><h3 id="why-do-i-get-413-http-code-when-i-upload-a-file" tabindex="-1"><a class="header-anchor" href="#why-do-i-get-413-http-code-when-i-upload-a-file" aria-hidden="true">#</a> Why do i get <code>413</code> http code when i upload a file?</h3><ul><li>If you use a reverse proxy, you may need to specify the maximum upload file size(<code>client_max_body_size</code>) and timeout in the web server configuration</li><li>Otherwise, it may happen that the upload is successful but the front end times out and there is no response</li></ul><h3 id="why-can-t-i-download-files-after-add-aliyundirve-storage-and-get-invalidargument-error" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-download-files-after-add-aliyundirve-storage-and-get-invalidargument-error" aria-hidden="true">#</a> Why can&#39;t I download files after add <code>AliyunDirve</code> storage and get <code>InvalidArgument</code> error?</h3><ul><li>Due to referrer restrictions, mobile tokens must be used if you don&#39;t open any proxy.</li></ul><h3 id="why-is-the-uploaded-file-not-displayed-deleted-file-still-modified-in-the-root-directory-does-not-take-effect-​" tabindex="-1"><a class="header-anchor" href="#why-is-the-uploaded-file-not-displayed-deleted-file-still-modified-in-the-root-directory-does-not-take-effect-​" aria-hidden="true">#</a> Why is the uploaded file not displayed/deleted file still/modified in the root directory does not take effect? ​</h3><p>There is a half-hour cache by default, which can be modified on the Add Storage page. If you need to refresh immediately, click the refresh button in the lower right corner of the directory that needs to be refreshed.</p><h3 id="why-is-it-still-incorrect-although-i-input-the-password-that-get-by-alist-admin-in-terminal" tabindex="-1"><a class="header-anchor" href="#why-is-it-still-incorrect-although-i-input-the-password-that-get-by-alist-admin-in-terminal" aria-hidden="true">#</a> Why is it still incorrect although I input the password that get by <code>./alist admin</code> in terminal?</h3><p>Check whether the directory you run <code>./alist admin</code> and start alist is the same. alist reads the configuration in the current directory where you run the program by default, so running in different directorys will result in different data being read.</p><hr><ul><li><strong>Here take Windows as an example</strong>: For example, your Alist file is in the <strong><code>D:\\Test\\Alist\\</code></strong> folder, and then you directly start the CMD command running window on the desktop, and then put the D drive Drag the Alist inside to the command running window to start, and then the configuration file it generates is actually in <strong><code>C:\\Windows\\System32</code></strong> here (because CMD is here by default), and then you Obtaining the password is also obtaining the password in this folder. At the same time, because Alist reads the password in the configuration file in the same directory as Alist, it is naturally wrong for you to log in with the password. <ul><li><img src="'+d+'" alt="faq"></li></ul></li><li>Solution: You need to go to the folder where Alist is located to start or check the password, for example, the above is in <strong><code>D:\\Test\\Alist\\</code></strong>, you have to manually go to this folder and then enter Enter the startup command or the command to view the password to obtain the correct password <ul><li><strong>Windows</strong>: After going to the directory where Alist is located, enter CMD in the top address bar and press Enter, and then use the command to obtain the password <ul><li><img src="'+h+'" alt="faq"></li></ul></li><li><strong>Linux</strong>: Use the CD command to go to the directory where Alist is located to get the correct password</li></ul></li></ul><h3 id="why-does-it-prompt-system-error-syntaxerror-invalid-regular-expression-nothing-to-repeat" tabindex="-1"><a class="header-anchor" href="#why-does-it-prompt-system-error-syntaxerror-invalid-regular-expression-nothing-to-repeat" aria-hidden="true">#</a> Why does it prompt System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat</h3>',25),q={href:"https://github.com/alist-org/alist/discussions/2399",target:"_blank",rel:"noopener noreferrer"},A=e("strong",null,"For details, click to view",-1),I=n('<h3 id="what-is-the-difference-between-the-two-uploads" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-the-two-uploads" aria-hidden="true">#</a> What is the difference between the two uploads?</h3><p><strong>1️⃣ stream</strong> directly puts the binary content of the file into the body, so that the backend can use very little memory, but the browser may limit the size because the file needs to be read into the memory at one time.</p><p><strong>2️⃣ form</strong> is to wrap the file into formdata and upload it. The memory used by the backend will be more, but there is no limit on the size.</p><h3 id="what-is-the-difference-between-the-two-aria2" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-the-two-aria2" aria-hidden="true">#</a> What is the difference between the two Aria2?</h3><p>1️⃣ Background management --&gt; Settings --&gt; Others: <strong>Aria2 here is used to download resources offline to the network disk</strong></p><p>2️⃣ Front-end interface --&gt; Local settings (the gear in the lower right corner) --&gt; **Aria2 here is used to download the resources in the network disk to the local, which is equivalent to a download method, everyone can use it without worrying about problems **</p><ul><li>As for how to use the first offline download: <ul><li>For example, if you want to download some resources offline in the <strong><code>/OneDrive/TV/Test</code></strong> folder, you must first fill in the <strong>address and secret key information</strong> in the background and then manually enter the front end In this folder of the interface, you can see the <strong>offline download</strong> icon (a magnet style) in the lower right corner after entering it, click and enter the link you want to download offline</li><li><code>Description</code>: <strong>Offline download, copy and upload</strong> are all in the same way. They are first downloaded from the resource** to the temporary folder of the server** and then uploaded from the <strong>server to the corresponding network disk</strong><ul><li>&quot;Copy&quot; can be directly transferred by the server without temporary storage for uploads that <strong>partially do not require</strong> to calculate the Hash value.</li></ul></li></ul></li></ul>',7),W=n('<h3 id="raidrive-mounts-baidu-network-disk-you-can-download-files-but-you-cannot-upload-files-throwing-files-to-the-mount-directory-prompts-prompt-you-need-permission-to-perform-this-operation-how-to-solve-this" tabindex="-1"><a class="header-anchor" href="#raidrive-mounts-baidu-network-disk-you-can-download-files-but-you-cannot-upload-files-throwing-files-to-the-mount-directory-prompts-prompt-you-need-permission-to-perform-this-operation-how-to-solve-this" aria-hidden="true">#</a> RaiDrive mounts Baidu network disk, you can download files, but you cannot upload files. Throwing files to the mount directory prompts &quot;Prompt &quot;You need permission to perform this operation&quot;. How to solve this?</h3><p>Raidrive is because uploading a file will create an empty file in advance, and Baidu Netdisk does not allow the creation of an empty file. v2 can succeed because v2 ignores empty file uploads.</p><h3 id="why-is-the-terabox-mounted-successfully-but-the-content-is-not-displayed" tabindex="-1"><a class="header-anchor" href="#why-is-the-terabox-mounted-successfully-but-the-content-is-not-displayed" aria-hidden="true">#</a> Why is the Terabox mounted successfully but the content is not displayed?</h3><p>Because <strong><code>Terabox</code></strong> restricts IP, if you access it from a non-overseas IP, you cannot access it, and naturally the content will not be displayed.</p><p>(Overseas machines can be used. If you have to use local machines (or domestic machines) to build, you can find a way to let Alist eat <strong>proxy</strong>)</p>',5),T={href:"https://github.com/alist-org/alist/discussions/3026",target:"_blank",rel:"noopener noreferrer"},D=n(`<h3 id="open-alist-prompt-system-error-typeerror-n-replaceall-is-not-a-function" tabindex="-1"><a class="header-anchor" href="#open-alist-prompt-system-error-typeerror-n-replaceall-is-not-a-function" aria-hidden="true">#</a> Open Alist prompt System error: TypeError: n.replaceAll is not a function?</h3><p>Your browser kernel version is too low, just add the following to the custom head.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--Alist V3 suggested to add, it has been added by default, if you don&#39;t suggest adding --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you think it is too slow, you can change to Ali Cloud</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="too-many-unsuccessful-sign-in-attempts-have-been-made-using-an-incorrect-username-or-password-try-again-later" tabindex="-1"><a class="header-anchor" href="#too-many-unsuccessful-sign-in-attempts-have-been-made-using-an-incorrect-username-or-password-try-again-later" aria-hidden="true">#</a> Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.</h3><p><img src="`+c+'" alt="faq"></p><p>If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting Alist.</p><h3 id="when-adding-a-file-to-upload-there-is-an-option-of-add-as-task-what-does-it-do" tabindex="-1"><a class="header-anchor" href="#when-adding-a-file-to-upload-there-is-an-option-of-add-as-task-what-does-it-do" aria-hidden="true">#</a> When adding a file to upload, there is an option of &quot;add as task&quot;, what does it do?</h3><ul><li>After checking, upload to the server (the machine where Alist is built), and then when uploaded by the server to the network disk, it seems to be visible in the background (it seems to be like this)</li><li>You will not see it if it is not checked. For details, you can see the problem in the picture below.</li></ul><p><img src="'+u+'" alt="faq"></p><h3 id="i-am-asked-to-enter-the-otp-code-when-i-log-in-what-is-the-reason" tabindex="-1"><a class="header-anchor" href="#i-am-asked-to-enter-the-otp-code-when-i-log-in-what-is-the-reason" aria-hidden="true">#</a> I am asked to enter the OTP code when I log in. What is the reason?</h3><p>Are you logging into someone else&#39;s account? If it is your own, please enter the 2FA (two-step verification) verification code</p>',13),S=e("strong",null,"Click to view this guide",-1),C=e("h3",{id:"use-sqlite3-to-find-that-there-are-more-than-two-files-in-the-data-folder-data-db-shm-and-data-db-wal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#use-sqlite3-to-find-that-there-are-more-than-two-files-in-the-data-folder-data-db-shm-and-data-db-wal","aria-hidden":"true"},"#"),t(" Use "),e("strong",null,[e("code",null,"sqlite3")]),t(" to find that there are more than two files in the data folder, data.db-shm and data.db-wal")],-1),P={href:"https://stackoverflow.com/questions/7778723/what-are-the-db-shm-and-db-wal-extensions-in-sqlite-databases",target:"_blank",rel:"noopener noreferrer"},j=e("strong",null,"Click to view detailed instructions",-1),E=n(`<h3 id="how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in" tabindex="-1"><a class="header-anchor" href="#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in" aria-hidden="true">#</a> How do I set it so that visitors can only see the content after logging in?</h3><p>There is always one of the following three versions that suits you. Eat it quickly! !</p><ol><li><p>Point the directory seen by <strong><code>guest</code></strong> users to an empty folder, and then write a readme description, don’t ask how to do it yourself<a href="#how-to-create-a-completely-blank-folder">Click to view</a></p></li><li><p>Directly encrypt the root directory in the meta information</p></li><li><p>Directly deactivate the <strong><code>guest</code></strong> user, which will force a jump to the login page (version 3.10.1 and above)</p><ul><li>Find a way by yourself Welcome to provide new ways~~</li></ul></li></ol><h3 id="baidu-cloud-disk-unofficial-download-error-appears-hit-black-userlist-hit-illegal-dlna" tabindex="-1"><a class="header-anchor" href="#baidu-cloud-disk-unofficial-download-error-appears-hit-black-userlist-hit-illegal-dlna" aria-hidden="true">#</a> Baidu cloud disk unofficial download error appears &quot;hit black userlist, hit illegal dlna&quot;</h3><p>It should be repaired harmoniously, but the interface discoverer said to wait for 24 hours to try, if it still doesn&#39;t work, it is really repaired harmoniously.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;error_code&quot;</span><span class="token operator">:</span><span class="token number">31329</span><span class="token punctuation">,</span><span class="token property">&quot;error_msg&quot;</span><span class="token operator">:</span><span class="token string">&quot;hit black userlist , hit illegal dlna&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;request_id&quot;</span><span class="token operator">:</span><span class="token number">8942439159334999112</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="how-to-create-a-completely-blank-folder" tabindex="-1"><a class="header-anchor" href="#how-to-create-a-completely-blank-folder" aria-hidden="true">#</a> How to create a completely blank folder</h3><p>two ways</p><ol><li>Mount a local storage, select the folder is empty</li><li>Select virtual storage and directly change <mark>&quot;number of files&quot; &quot;number of folders&quot;</mark> to 0, save and then ignore the pop-up interface <ul><li>What does <strong>Virtual Storage</strong> do? It is generally used during testing. Don’t use it indiscriminately if you don’t understand the normal production environment....</li></ul></li></ol><p>How to add <strong><code>Readme</code></strong> instructions to an empty folder</p>`,10),F={href:"http://Readme.md",target:"_blank",rel:"noopener noreferrer"},B=e("li",null,"Meta information Select this folder, there are instructions below to write it yourself",-1),V=e("p",null,[t("What is the use of creating this blank folder? It can be used in conjunction with "),e("a",{href:"#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in"},[e("strong",null,"How to set up visitors to access the content after logging in, use the first method")])],-1),U=e("h3",{id:"lib64-libc-so-6-version-glibc-2-28-not-found-required-by-alist-or-accept-function-not-implemented",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#lib64-libc-so-6-version-glibc-2-28-not-found-required-by-alist-or-accept-function-not-implemented","aria-hidden":"true"},"#"),t(" lib64/libc.so.6: version `GLIBC_2.28' not found (required by ./alist) or accept: function not implemented")],-1),L=e("p",null,[t("Consider using the "),e("strong",null,"musl"),t(" version as an alternative due to the version of the "),e("strong",null,"glibc"),t(" on your platform is too low")],-1),N={href:"https://github.com/alist-org/alist/discussions/2295",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/alist-org/alist/issues/322#issuecomment-1010601181",target:"_blank",rel:"noopener noreferrer"},R=e("h3",{id:"what-is-the-extra-sign-parameter-after-the-file-now",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#what-is-the-extra-sign-parameter-after-the-file-now","aria-hidden":"true"},"#"),t(" What is the extra sign parameter after the file now?")],-1),H=e("p",null,"Encrypted for account security, you can view the details by [click to view](../config/global.md#Sign all)",-1),M={id:"prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout",tabindex:"-1"},z=e("a",{class:"header-anchor",href:"#prompt-when-adding-aliyun-drive-shared-prompt-post-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout","aria-hidden":"true"},"#",-1),G={href:"https://auth.aliyundrive.com/v2/account/token",target:"_blank",rel:"noopener noreferrer"},Q=e("p",null,[t("Reason: The VPS is located outside mainland China, and IPv6 is enabled Workaround: "),e("strong",null,"Method 1"),t(": Add the following three items in the vps hosts and restart the network or restart the vps")],-1),Y={href:"http://api.aliyundrive.com",target:"_blank",rel:"noopener noreferrer"},Z={href:"http://auth.aliyundrive.com",target:"_blank",rel:"noopener noreferrer"},X={href:"http://cn-beijing-data.aliyundrive.net",target:"_blank",rel:"noopener noreferrer"},J=e("p",null,[e("strong",null,"Method 2"),t(": Turn off and disable IPv6 of vps")],-1),K=e("h3",{id:"_123-when-the-cloud-disk-is-mounted-json-cannot-unmarshal-string-into-go-struct-field-tokenresp-data-of-type-struct-token-string-json-token",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_123-when-the-cloud-disk-is-mounted-json-cannot-unmarshal-string-into-go-struct-field-tokenresp-data-of-type-struct-token-string-json-token","aria-hidden":"true"},"#"),t(' 123 When the cloud disk is mounted, json: cannot unmarshal string into Go struct field TokenResp.data of type struct { Token string "json:"token"" }')],-1),$=e("p",null,[e("img",{src:p,alt:"faq"})],-1),ee=e("p",null,"There is a high probability that your device that builds Alist is temporarily blocked, frozen, blocked, or restricted. Don't mount it yet, wait a few hours and try again or wait a day",-1),te=e("p",null,"(Conclusions from the above questions have been tested)",-1);function oe(ae,ne){const s=i("RouterLink"),a=i("ExternalLinkIcon"),l=i("FlowChart");return g(),m("div",null,[y,e("p",null,[t("I guess the error message is pretty clear. Because "),o(s,{to:"/guide/drivers/common.html#mount-path"},{default:r(()=>[t("mount_path")]),_:1}),t(" is "),b,t("."),k,t(" If you see this error when adding storage, but you don't see the corresponding duplicate entry on the web page, use "),v,t(" + "),_,t(" to force refresh page.")]),x,e("p",null,[t("Your Tampermonkey answering plug-in conflicts, just close it "),e("a",q,[A,o(a)])]),I,o(l,{id:"flowchart-271",code:"eJxVjDsOwjAQRPs9xZZQUOTXWLIrjgAHsOSFWAlea70Q5fYkKSylGT2N3kxjXVEvalDIhxVa6ziTeI2cDN55STP7gMroUemTWbys+OI5kEB3kh8jYSH5keA376sC/Ul4Hu3+pZuaSBeWCUMsEwzWUQoGtwBoLhLfo15vrq3UVeorDfAHwGNAAw==",preset:"vue"}),W,e("p",null,[t("Cases where it might be useful: "),e("strong",null,[e("a",T,[t("https://github.com/alist-org/alist/discussions/3026"),o(a)])])]),D,e("p",null,[t("What? Don't know the verification code? "),o(s,{to:"/guide/advanced/2fa.html"},{default:r(()=>[S]),_:1})]),C,e("p",null,[e("a",P,[j,o(a)])]),E,e("ol",null,[e("li",null,[t("If you choose local storage, you can consider throwing a "),e("a",F,[t("Readme.md"),o(a)]),t(" file into it. If there is an update but the refresh is slow, use the second method if it is too slow")]),B]),V,U,L,e("p",null,[t("Reference instructions："),e("a",N,[t("#2295"),o(a)]),t("，"),e("a",O,[t("#322"),o(a)])]),R,H,e("h3",M,[z,t(' Prompt when adding Aliyun drive (shared) Prompt Post "'),e("a",G,[t("https://auth.aliyundrive.com/v2/account/token"),o(a)]),t('": net/http: TLS handshake timeout')]),Q,e("ul",null,[e("li",null,[e("p",null,[t("47.94.245.197 "),e("a",Y,[t("api.aliyundrive.com"),o(a)])])]),e("li",null,[e("p",null,[t("47.94.245.197 "),e("a",Z,[t("auth.aliyundrive.com"),o(a)])])]),e("li",null,[e("p",null,[t("121.89.3.30 "),e("a",X,[t("cn-beijing-data.aliyundrive.net"),o(a)])])])]),J,K,$,ee,te])}const re=f(w,[["render",oe],["__file","why.html.vue"]]);export{re as default};
