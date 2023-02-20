import{c as g,h as d,j as o,T as z}from"./framework-e8245049.js";import{c as m,b as l,e as u,u as S,f,s as C}from"./app-2751d525.js";import{i as x,b as k,j as $,p as w,h as T}from"./Space-1df203e1.js";import{u as R}from"./Close-15684c02.js";const B=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l("spin-container",{position:"relative"},[l("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[x()])]),l("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[u("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),l("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[u("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),N={small:20,medium:18,large:16},j=Object.assign(Object.assign({},f.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),I=g({name:"Spin",props:j,setup(s){const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=S(s),i=f("Spin","-spin",B,C,s,a),c=d(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:r},self:p}=i.value,{opacitySpinning:h,color:v,textColor:y}=p,b=typeof n=="number"?w(n):p[T("size",n)];return{"--n-bezier":r,"--n-opacity-spinning":h,"--n-size":b,"--n-color":v,"--n-text-color":y}}),t=e?k("spin",d(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),c,s):void 0;return{mergedClsPrefix:a,compitableShow:R(s,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:r}=s;return N[typeof r=="number"?"medium":r]}),cssVars:e?void 0:c,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var s,a;const{$slots:e,mergedClsPrefix:i,description:c}=this,t=e.icon&&this.rotate,n=(c||e.description)&&o("div",{class:`${i}-spin-description`},c||((s=e.description)===null||s===void 0?void 0:s.call(e))),r=e.icon?o("div",{class:[`${i}-spin-body`,this.themeClass]},o("div",{class:[`${i}-spin`,t&&`${i}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):o("div",{class:[`${i}-spin-body`,this.themeClass]},o($,{clsPrefix:i,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),n);return(a=this.onRender)===null||a===void 0||a.call(this),e.default?o("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${i}-spin-content`,this.compitableShow&&`${i}-spin-content--spinning`]},e),o(z,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});export{I as N};
