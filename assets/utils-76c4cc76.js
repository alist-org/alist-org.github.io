import{n as a}from"./framework-ffef1a40.js";let t=[];const i=new WeakMap;function f(){t.forEach(e=>e(...i.get(e))),t=[]}function m(e,...n){i.set(e,n),!t.includes(e)&&t.push(e)===1&&requestAnimationFrame(f)}const c=/^(\d|\.)+$/,u=/(\d|\.)+/;function x(e,{c:n=1,offset:s=0,attachPx:o=!0}={}){if(typeof e=="number"){const r=(e+s)*n;return r===0?"0":`${r}px`}else if(typeof e=="string")if(c.test(e)){const r=(Number(e)+s)*n;return o?r===0?"0":`${r}px`:`${r}`}else{const r=u.exec(e);return r?e.replace(u,String((Number(r[0])+s)*n)):e}return e}function b(){return a()!==null}const d=typeof window<"u";export{m as b,x as f,b as h,d as i};
