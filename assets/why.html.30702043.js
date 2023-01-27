import{_ as d,W as l,X as h,Y as e,a0 as t,Z as o,$ as c,a1 as a,y as i}from"./framework.00b47ed6.js";const u={},p=a('<h3 id="why-i-got-the-error-failed-get-storage-can-t-find-storage-with-rawpath-when-i-open-web-pages-after-install-upgrade" tabindex="-1"><a class="header-anchor" href="#why-i-got-the-error-failed-get-storage-can-t-find-storage-with-rawpath-when-i-open-web-pages-after-install-upgrade" aria-hidden="true">#</a> Why I got the error <code>failed get storage: can&#39;t find storage with rawPath: /</code> when I open web pages after install/upgrade?</h3><p>Because you haven&#39;t added storage. Click the <code>Login</code> button at the bottom to log in and then click <code>Manage</code> button to enter the background and add storage on the storage page.</p><h3 id="why-i-lost-all-my-storage-in-v3" tabindex="-1"><a class="header-anchor" href="#why-i-lost-all-my-storage-in-v3" aria-hidden="true">#</a> why i lost all my storage in v3</h3><p>New versions (V3 and later) are not compatible with V2, so you need to re-add your storage.</p><h3 id="why-i-see-failed-get-aria2-version-error-in-log" tabindex="-1"><a class="header-anchor" href="#why-i-see-failed-get-aria2-version-error-in-log" aria-hidden="true">#</a> Why I see <code>failed get aria2 version</code> error in log?</h3><p>Because you haven&#39;t installed aria2 or the settings of aria2 are wrong. Don&#39;t worry, it won&#39;t affect the use of Alist, you can ignore it.</p><h3 id="why-i-got-the-error-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path-when-i-add-new-storage" tabindex="-1"><a class="header-anchor" href="#why-i-got-the-error-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path-when-i-add-new-storage" aria-hidden="true">#</a> why i got the error <code>Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</code> when I add new storage?</h3>',7),f=e("strong",null,"UNIQUE",-1),g=e("br",null,null,-1),m=e("code",null,"Ctrl",-1),w=e("code",null,"F5",-1),y=a('<h3 id="why-can-t-i-preview-the-video-or-audio-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-video-or-audio-file" aria-hidden="true">#</a> Why can&#39;t I preview the video or audio file?</h3><ul><li>Requires a browser-supported encoding</li><li>General browsers do not support h265 encoded video</li><li>General browsers do not support ac3 encoded audio</li></ul><p>In particular, for Safari:</p><ul><li>For cross-origin media, content-type must be the media type, not the generic application/octet-stream. So if the content-type returned by the direct link is application/octet-stream, then Safari will not be able to play.(PS: Why Can AliyunDrive play in Safari? Because the official website of the video playback is not the use of download links, but after the transcoding of AliyunDrive)</li></ul><h3 id="why-can-t-i-preview-the-office-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-office-file" aria-hidden="true">#</a> Why can&#39;t I preview the office file?</h3><p>For microsoft office online viewers, you need:</p><ul><li>External network access</li><li>The document access address cannot use ip directly, it needs to be accessed through a domain name, and the port must be port 80 / 443</li><li>The format of the document (must be one of the following):</li><li>Word: docx, docm, dotm, dotx</li><li>Excel: xlsx, xlsb, xls, xlsm</li><li>PowerPoint: pptx, ppsx, ppt, pps, pptm, potm, ppam, potx, ppsm</li><li>Document size: Word and PowerPoint documents must be less than 10 megabytes; Excel must be less than five megabytes</li></ul><h3 id="why-can-t-i-preview-the-pdf-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-pdf-file" aria-hidden="true">#</a> Why can&#39;t I preview the PDF file?</h3><ul><li>We use <code>pdf.js</code> as the default PDF previewer. So it requires https+cors.</li><li>https is opened for yourself, reverse proxy or provide a certificate in the configuration file</li><li>cors provides support for related cloud disks and cannot be modified by yourself unless the agent is turned on to use the program to transfer</li></ul><h3 id="why-can-t-package​-download" tabindex="-1"><a class="header-anchor" href="#why-can-t-package​-download" aria-hidden="true">#</a> Why can&#39;t package​ download?</h3><p>Same as pdf preview, requires https+cors support,and:</p><ul><li>AList use stream API of browser to support package download, so it requires browser support. Usually, it is supported by new browsers, such as Chrome, Firefox, Edge, etc.</li></ul><h3 id="why-does-it-shows-uploading-in-the-backend-when-i-upload-a-file" tabindex="-1"><a class="header-anchor" href="#why-does-it-shows-uploading-in-the-backend-when-i-upload-a-file" aria-hidden="true">#</a> Why does it shows <code>Uploading in the backend</code> when I upload a file?</h3><ul><li>All uploads of this program use server transfer, which will consume server traffic to communicate with the corresponding storage API</li></ul><h3 id="why-do-i-get-413-http-code-when-i-upload-a-file" tabindex="-1"><a class="header-anchor" href="#why-do-i-get-413-http-code-when-i-upload-a-file" aria-hidden="true">#</a> Why do i get <code>413</code> http code when i upload a file?</h3><ul><li>If you use a reverse proxy, you may need to specify the maximum upload file size(<code>client_max_body_size</code>) and timeout in the web server configuration</li><li>Otherwise, it may happen that the upload is successful but the front end times out and there is no response</li></ul><h3 id="why-can-t-i-download-files-after-add-aliyundirve-storage-and-get-invalidargument-error" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-download-files-after-add-aliyundirve-storage-and-get-invalidargument-error" aria-hidden="true">#</a> Why can&#39;t I download files after add <code>AliyunDirve</code> storage and get <code>InvalidArgument</code> error?</h3><ul><li>Due to referrer restrictions, mobile tokens must be used if you don&#39;t open any proxy.</li></ul><h3 id="why-is-the-uploaded-file-not-displayed-deleted-file-still-modified-in-the-root-directory-does-not-take-effect-​" tabindex="-1"><a class="header-anchor" href="#why-is-the-uploaded-file-not-displayed-deleted-file-still-modified-in-the-root-directory-does-not-take-effect-​" aria-hidden="true">#</a> Why is the uploaded file not displayed/deleted file still/modified in the root directory does not take effect? ​</h3><p>There is a half-hour cache by default, which can be modified on the Add Storage page. If you need to refresh immediately, click the refresh button in the lower right corner of the directory that needs to be refreshed.</p><h3 id="why-is-it-still-incorrect-although-i-input-the-password-that-get-by-alist-admin-in-terminal" tabindex="-1"><a class="header-anchor" href="#why-is-it-still-incorrect-although-i-input-the-password-that-get-by-alist-admin-in-terminal" aria-hidden="true">#</a> Why is it still incorrect although I input the password that get by <code>./alist admin</code> in terminal?</h3><p>Check whether the directory you run <code>./alist admin</code> and start alist is the same. alist reads the configuration in the current directory where you run the program by default, so running in different directorys will result in different data being read.</p><hr><ul><li><strong>Here take Windows as an example</strong>: For example, your Alist file is in the <strong><code>D:\\Test\\Alist\\</code></strong> folder, and then you directly start the CMD command running window on the desktop, and then put the D drive Drag the Alist inside to the command running window to start, and then the configuration file it generates is actually in <strong><code>C:\\Windows\\System32</code></strong> here (because CMD is here by default), and then you Obtaining the password is also obtaining the password in this folder. At the same time, because Alist reads the password in the configuration file in the same directory as Alist, it is naturally wrong for you to log in with the password. <ul><li><img src="https://pic.rmb.bdstatic.com/bjh/e9f64b5c99c4709bd48db0385322263e.png" alt="png"></li></ul></li><li>Solution: You need to go to the folder where Alist is located to start or check the password, for example, the above is in <strong><code>D:\\Test\\Alist\\</code></strong>, you have to manually go to this folder and then enter Enter the startup command or the command to view the password to obtain the correct password <ul><li><strong>Windows</strong>: After going to the directory where Alist is located, enter CMD in the top address bar and press Enter, and then use the command to obtain the password <ul><li><img src="https://pic.rmb.bdstatic.com/bjh/720eddf065afa916634562bdad8d7786.gif" alt="Windows"></li></ul></li><li><strong>Linux</strong>: Use the CD command to go to the directory where Alist is located to get the correct password</li></ul></li></ul><h3 id="why-does-it-prompt-system-error-syntaxerror-invalid-regular-expression-nothing-to-repeat" tabindex="-1"><a class="header-anchor" href="#why-does-it-prompt-system-error-syntaxerror-invalid-regular-expression-nothing-to-repeat" aria-hidden="true">#</a> Why does it prompt System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat</h3>',25),b={href:"https://github.com/alist-org/alist/discussions/2399",target:"_blank",rel:"noopener noreferrer"},v=e("strong",null,"For details, click to view",-1),k=a('<h3 id="what-is-the-difference-between-the-two-uploads" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-the-two-uploads" aria-hidden="true">#</a> What is the difference between the two uploads?</h3><p><strong>1️⃣ stream</strong> directly puts the binary content of the file into the body, so that the backend can use very little memory, but the browser may limit the size because the file needs to be read into the memory at one time.</p><p><strong>2️⃣ form</strong> is to wrap the file into formdata and upload it. The memory used by the backend will be more, but there is no limit on the size.</p><h3 id="what-is-the-difference-between-the-two-aria2" tabindex="-1"><a class="header-anchor" href="#what-is-the-difference-between-the-two-aria2" aria-hidden="true">#</a> What is the difference between the two Aria2?</h3><p>1️⃣ Background management --&gt; Settings --&gt; Others: <strong>Aria2 here is used to download resources offline to the network disk</strong></p><p>2️⃣ Front-end interface --&gt; Local settings (the gear in the lower right corner) --&gt; **Aria2 here is used to download the resources in the network disk to the local, which is equivalent to a download method, everyone can use it without worrying about problems **</p><ul><li>As for how to use the first offline download: <ul><li>For example, if you want to download some resources offline in the <strong><code>/OneDrive/TV/Test</code></strong> folder, you must first fill in the <strong>address and secret key information</strong> in the background and then manually enter the front end In this folder of the interface, you can see the <strong>offline download</strong> icon (a magnet style) in the lower right corner after entering it, click and enter the link you want to download offline</li><li><code>Description</code>: <strong>Offline download, copy and upload</strong> are all in the same way. They are first downloaded from the resource** to the temporary folder of the server** and then uploaded from the <strong>server to the corresponding network disk</strong><ul><li>&quot;Copy&quot; can be directly transferred by the server without temporary storage for uploads that <strong>partially do not require</strong> to calculate the Hash value.</li></ul></li></ul></li></ul>',7),x=a('<h3 id="raidrive-mounts-baidu-network-disk-you-can-download-files-but-you-cannot-upload-files-throwing-files-to-the-mount-directory-prompts-prompt-you-need-permission-to-perform-this-operation-how-to-solve-this" tabindex="-1"><a class="header-anchor" href="#raidrive-mounts-baidu-network-disk-you-can-download-files-but-you-cannot-upload-files-throwing-files-to-the-mount-directory-prompts-prompt-you-need-permission-to-perform-this-operation-how-to-solve-this" aria-hidden="true">#</a> RaiDrive mounts Baidu network disk, you can download files, but you cannot upload files. Throwing files to the mount directory prompts &quot;Prompt &quot;You need permission to perform this operation&quot;. How to solve this?</h3><p>Raidrive is because uploading a file will create an empty file in advance, and Baidu Netdisk does not allow the creation of an empty file. v2 can succeed because v2 ignores empty file uploads.</p><h3 id="why-is-the-terabox-mounted-successfully-but-the-content-is-not-displayed" tabindex="-1"><a class="header-anchor" href="#why-is-the-terabox-mounted-successfully-but-the-content-is-not-displayed" aria-hidden="true">#</a> Why is the Terabox mounted successfully but the content is not displayed?</h3><p>Because <strong><code>Terabox</code></strong> restricts IP, if you access it from a non-overseas IP, you cannot access it, and naturally the content will not be displayed.</p><p>(Overseas machines can be used. If you have to use local machines (or domestic machines) to build, you can find a way to let Alist eat <strong>proxy</strong>)</p>',5),_={href:"https://github.com/alist-org/alist/discussions/3026",target:"_blank",rel:"noopener noreferrer"},A=a(`<h3 id="open-alist-prompt-system-error-typeerror-n-replaceall-is-not-a-function" tabindex="-1"><a class="header-anchor" href="#open-alist-prompt-system-error-typeerror-n-replaceall-is-not-a-function" aria-hidden="true">#</a> Open Alist prompt System error: TypeError: n.replaceAll is not a function?</h3><p>Your browser kernel version is too low, just add the following to the custom head.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--Alist V3 suggested to add, it has been added by default, if you don&#39;t suggest adding --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://polyfill.io/v3/polyfill.min.js?features=String.prototype.replaceAll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you think it is too slow, you can change to Ali Cloud</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://polyfill.alicdn.com/v3/polyfill.min.js?features=String.prototype.replaceAll<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="too-many-unsuccessful-sign-in-attempts-have-been-made-using-an-incorrect-username-or-password-try-again-later" tabindex="-1"><a class="header-anchor" href="#too-many-unsuccessful-sign-in-attempts-have-been-made-using-an-incorrect-username-or-password-try-again-later" aria-hidden="true">#</a> Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later.</h3><p><img src="https://pic.rmb.bdstatic.com/bjh/d72b5bad55dae6a3510adfd2768baf0f.png" alt="11"></p><p>If you enter the wrong password for 6 consecutive logins, it will be locked, and you can reset it by restarting Alist.</p><h3 id="when-adding-a-file-to-upload-there-is-an-option-of-add-as-task-what-does-it-do" tabindex="-1"><a class="header-anchor" href="#when-adding-a-file-to-upload-there-is-an-option-of-add-as-task-what-does-it-do" aria-hidden="true">#</a> When adding a file to upload, there is an option of &quot;add as task&quot;, what does it do?</h3><ul><li>After checking, upload to the server (the machine where Alist is built), and then when uploaded by the server to the network disk, it seems to be visible in the background (it seems to be like this)</li><li>You will not see it if it is not checked. For details, you can see the problem in the picture below.</li></ul><p><img src="https://pic.rmb.bdstatic.com/bjh/5a473909c0d90f3691af8818874a0643.jpeg" alt="Add"></p><h3 id="use-sqlite3-to-find-that-there-are-more-than-two-files-in-the-data-folder-data-db-shm-and-data-db-wal" tabindex="-1"><a class="header-anchor" href="#use-sqlite3-to-find-that-there-are-more-than-two-files-in-the-data-folder-data-db-shm-and-data-db-wal" aria-hidden="true">#</a> Use <strong><code>sqlite3</code></strong> to find that there are more than two files in the data folder, data.db-shm and data.db-wal</h3>`,12),I={href:"https://stackoverflow.com/questions/7778723/what-are-the-db-shm-and-db-wal-extensions-in-sqlite-databases",target:"_blank",rel:"noopener noreferrer"},W=e("strong",null,"Click to view detailed instructions",-1),q=e("h3",{id:"how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-do-i-set-it-so-that-visitors-can-only-see-the-content-after-logging-in","aria-hidden":"true"},"#"),t(" How do I set it so that visitors can only see the content after logging in?")],-1),D=e("ol",null,[e("li",null,[t("Point the directory seen by "),e("strong",null,[e("code",null,"guest")]),t(" users to an empty folder, and then write a readme description, don’t ask how to do it yourself")]),e("li",null,"Directly encrypt the root directory in the meta information"),e("li",null,"Find other solutions by yourself......")],-1);function S(T,C){const s=i("RouterLink"),n=i("ExternalLinkIcon"),r=i("FlowChart");return l(),h("div",null,[p,e("p",null,[t("I guess the error message is pretty clear. Because "),o(s,{to:"/guide/drivers/common.html#mount-path"},{default:c(()=>[t("mount_path")]),_:1}),t(" is "),f,t("."),g,t(" If you see this error when adding storage, but you don't see the corresponding duplicate entry on the web page, use "),m,t(" + "),w,t(" to force refresh page.")]),y,e("p",null,[t("Your Tampermonkey answering plug-in conflicts, just close it "),e("a",b,[v,o(n)])]),k,o(r,{id:"flowchart-266",code:"eJxVjDsOwjAQRPs9xZZQUOTXWLIrjgAHsOSFWAlea70Q5fYkKSylGT2N3kxjXVEvalDIhxVa6ziTeI2cDN55STP7gMroUemTWbys+OI5kEB3kh8jYSH5keA376sC/Ul4Hu3+pZuaSBeWCUMsEwzWUQoGtwBoLhLfo15vrq3UVeorDfAHwGNAAw==",preset:"vue"}),x,e("p",null,[t("Cases where it might be useful: "),e("strong",null,[e("a",_,[t("https://github.com/alist-org/alist/discussions/3026"),o(n)])])]),A,e("p",null,[e("a",I,[W,o(n)])]),q,D])}const F=d(u,[["render",S],["__file","why.html.vue"]]);export{F as default};
