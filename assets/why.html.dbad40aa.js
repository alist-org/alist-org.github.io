import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as n,a as t,b as s,w as d,e as a,d as e,r as h}from"./app.95e1d394.js";const l={},c=a('<h3 id="why-i-got-the-error-failed-get-storage-can-t-find-storage-with-rawpath-when-i-open-web-pages-after-install-upgrade" tabindex="-1"><a class="header-anchor" href="#why-i-got-the-error-failed-get-storage-can-t-find-storage-with-rawpath-when-i-open-web-pages-after-install-upgrade" aria-hidden="true">#</a> Why I got the error <code>failed get storage: can&#39;t find storage with rawPath: /</code> when I open web pages after install/upgrade?</h3><p>Because you haven&#39;t added storage.</p><h3 id="why-i-lost-all-my-storage-in-v3" tabindex="-1"><a class="header-anchor" href="#why-i-lost-all-my-storage-in-v3" aria-hidden="true">#</a> why i lost all my storage in v3</h3><p>New versions (V3 and later) are not compatible with V2, so you need to re-add your storage.</p><h3 id="why-i-see-failed-get-aria2-version-error-in-log" tabindex="-1"><a class="header-anchor" href="#why-i-see-failed-get-aria2-version-error-in-log" aria-hidden="true">#</a> Why I see <code>failed get aria2 version</code> error in log?</h3><p>Because you haven&#39;t installed aria2 or the settings of aria2 are wrong. Don&#39;t worry, it won&#39;t affect the use of Alist, you can ignore it.</p><h3 id="why-i-got-the-error-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path-when-i-add-new-storage" tabindex="-1"><a class="header-anchor" href="#why-i-got-the-error-failed-create-storage-in-database-unique-constraint-failed-x-storages-mount-path-when-i-add-new-storage" aria-hidden="true">#</a> why i got the error <code>Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path</code> when I add new storage?</h3>',7),u=e("I guess the error message is pretty clear. Because "),p=e("mount_path"),f=e(" is "),w=t("strong",null,"UNIQUE",-1),g=e("."),y=t("br",null,null,-1),m=e(" If you see this error when adding storage, but you don't see the corresponding duplicate entry on the web page, use "),b=t("code",null,"Ctrl",-1),v=e(" + "),_=t("code",null,"F5",-1),x=e(" to force refresh page."),k=a('<h3 id="why-can-t-i-preview-the-video-or-audio-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-video-or-audio-file" aria-hidden="true">#</a> Why can&#39;t I preview the video or audio file?</h3><ul><li>Requires a browser-supported encoding</li><li>General browsers do not support h265 encoded video</li><li>General browsers do not support ac3 encoded audio</li></ul><p>In particular, for Safari:</p><ul><li>For cross-origin media, content-type must be the media type, not the generic application/octet-stream. So if the content-type returned by the direct link is application/octet-stream, then Safari will not be able to play.(PS: Why Can AliyunDirve play in Safari? Because the official website of the video playback is not the use of download links, but after the transcoding of AliyunDirve)</li></ul><h3 id="why-can-t-i-preview-the-office-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-office-file" aria-hidden="true">#</a> Why can&#39;t I preview the office file?</h3><p>For microsoft office online viewers, you need:</p><ul><li>External network access</li><li>The document access address cannot use ip directly, it needs to be accessed through a domain name, and the port must be port 80 / 443</li><li>The format of the document (must be one of the following):</li><li>Word: docx, docm, dotm, dotx</li><li>Excel: xlsx, xlsb, xls, xlsm</li><li>PowerPoint: pptx, ppsx, ppt, pps, pptm, potm, ppam, potx, ppsm</li><li>Document size: Word and PowerPoint documents must be less than 10 megabytes; Excel must be less than five megabytes</li></ul><h3 id="why-can-t-i-preview-the-pdf-file" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-preview-the-pdf-file" aria-hidden="true">#</a> Why can&#39;t I preview the PDF file?</h3><ul><li>We use <code>pdf.js</code> as the default PDF previewer. So it requires https+cors.</li><li>https is opened for yourself, reverse proxy or provide a certificate in the configuration file</li><li>cors provides support for related cloud disks and cannot be modified by yourself unless the agent is turned on to use the program to transfer</li></ul><h3 id="why-can-t-package\u200B-download" tabindex="-1"><a class="header-anchor" href="#why-can-t-package\u200B-download" aria-hidden="true">#</a> Why can&#39;t package\u200B download?</h3><p>Same as pdf preview, requires https+cors support,and:</p><ul><li>AList use stream API of browser to support package download, so it requires browser support. Usually, it is supported by new browsers, such as Chrome, Firefox, Edge, etc.</li></ul><h3 id="why-does-it-shows-uploading-in-the-backend-when-i-upload-a-file" tabindex="-1"><a class="header-anchor" href="#why-does-it-shows-uploading-in-the-backend-when-i-upload-a-file" aria-hidden="true">#</a> Why does it shows <code>Uploading in the backend</code> when I upload a file?</h3><ul><li>All uploads of this program use server transfer</li></ul><h3 id="why-do-i-get-413-http-code-when-i-upload-a-file" tabindex="-1"><a class="header-anchor" href="#why-do-i-get-413-http-code-when-i-upload-a-file" aria-hidden="true">#</a> Why do i get <code>413</code> http code when i upload a file?</h3><ul><li>If you use a reverse proxy, you may need to specify the maximum upload file size and timeout in the configuration</li><li>Otherwise, it may happen that the upload is successful but the front end times out and there is no response</li></ul><h3 id="why-can-t-i-download-files-after-add-aliyundirve-storage-and-get-invalidargument-error" tabindex="-1"><a class="header-anchor" href="#why-can-t-i-download-files-after-add-aliyundirve-storage-and-get-invalidargument-error" aria-hidden="true">#</a> Why can&#39;t I download files after add <code>AliyunDirve</code> storage and get <code>InvalidArgument</code> error?</h3><ul><li>Due to referrer restrictions, mobile tokens must be used if you don&#39;t open any proxy.</li></ul>',18);function I(W,P){const o=h("RouterLink");return r(),n("div",null,[c,t("p",null,[u,s(o,{to:"/guide/drivers/common.html#mount-path"},{default:d(()=>[p]),_:1}),f,w,g,y,m,b,v,_,x]),k])}const S=i(l,[["render",I],["__file","why.html.vue"]]);export{S as default};
