import{c as b,h as d,j as o,T as z}from"./framework-acfcafcc.js";import{b as m,c as l,a as u,d as S,u as f,e as C,A as x,H as k,h as $}from"./app-5e23600e.js";import{f as w}from"./Scrollbar-5e9038f6.js";import{u as T}from"./use-compitable-ad56a9f1.js";import{p as R}from"./Space-28498dae.js";const B=m([m("@keyframes spin-rotate",`
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
 `,[w()])]),l("spin-body",`
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
 `)])]),N={small:20,medium:18,large:16},P=Object.assign(Object.assign({},f.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),I=b({name:"Spin",props:P,setup(s){const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=S(s),t=f("Spin","-spin",B,k,s,a),c=d(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:r},self:p}=t.value,{opacitySpinning:h,color:v,textColor:y}=p,g=typeof n=="number"?R(n):p[$("size",n)];return{"--n-bezier":r,"--n-opacity-spinning":h,"--n-size":g,"--n-color":v,"--n-text-color":y}}),i=e?C("spin",d(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),c,s):void 0;return{mergedClsPrefix:a,compitableShow:T(s,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:r}=s;return N[typeof r=="number"?"medium":r]}),cssVars:e?void 0:c,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var s,a;const{$slots:e,mergedClsPrefix:t,description:c}=this,i=e.icon&&this.rotate,n=(c||e.description)&&o("div",{class:`${t}-spin-description`},c||((s=e.description)===null||s===void 0?void 0:s.call(e))),r=e.icon?o("div",{class:[`${t}-spin-body`,this.themeClass]},o("div",{class:[`${t}-spin`,i&&`${t}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):o("div",{class:[`${t}-spin-body`,this.themeClass]},o(x,{clsPrefix:t,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),n);return(a=this.onRender)===null||a===void 0||a.call(this),e.default?o("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},e),o(z,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});export{I as N};
