import{h as d,j as s,c as u,H as b}from"./framework-90372ca6.js";import{b as f,e as a,c as n,v}from"./app-3f3c9827.js";import{r as h,k as g,f as p}from"./Space-8ccf122f.js";function x(e,o){return d(()=>{for(const r of o)if(e[r]!==void 0)return e[r];return e[o[o.length-1]]})}const C=h("close",s("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0},s("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},s("g",{fill:"currentColor","fill-rule":"nonzero"},s("path",{d:"M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"}))))),L=f("base-close",`
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`,[a("absolute",`
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `),n("&::before",`
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `),v("disabled",[n("&:hover",`
 color: var(--n-close-icon-color-hover);
 `),n("&:hover::before",`
 background-color: var(--n-close-color-hover);
 `),n("&:focus::before",`
 background-color: var(--n-close-color-hover);
 `),n("&:active",`
 color: var(--n-close-icon-color-pressed);
 `),n("&:active::before",`
 background-color: var(--n-close-color-pressed);
 `)]),a("disabled",`
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `),a("round",[n("&::before",`
 border-radius: 50%;
 `)])]),z=u({name:"BaseClose",props:{isButtonTag:{type:Boolean,default:!0},clsPrefix:{type:String,required:!0},disabled:{type:Boolean,default:void 0},focusable:{type:Boolean,default:!0},round:Boolean,onClick:Function,absolute:Boolean},setup(e){return g("-base-close",L,b(e,"clsPrefix")),()=>{const{clsPrefix:o,disabled:r,absolute:t,round:i,isButtonTag:l}=e;return s(l?"button":"div",{type:l?"button":void 0,tabindex:r||!e.focusable?-1:0,"aria-disabled":r,"aria-label":"close",role:l?void 0:"button",disabled:r,class:[`${o}-base-close`,t&&`${o}-base-close--absolute`,r&&`${o}-base-close--disabled`,i&&`${o}-base-close--round`],onMousedown:c=>{e.focusable||c.preventDefault()},onClick:e.onClick},s(p,{clsPrefix:o},{default:()=>s(C,null)}))}}});export{z as N,x as u};
