import{a5 as A,_ as u,al as R,am as $,an as K,ao as L,ap as W,r as S,a7 as q,z as F,j as C,D as T,E as B,v as E,aq as j,t as Z,ar as U,w as b,c as P,as as G,y as z}from"./index-72638cd3.js";import{s as H,u as J}from"./useThemeProps-5accff98.js";const Q=["component","direction","spacing","divider","children","className","useFlexGap"],X=A(),Y=H("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root});function ee(e){return J({props:e,name:"MuiStack",defaultTheme:X})}function re(e,r){const s=S.Children.toArray(e).filter(Boolean);return s.reduce((t,n,a)=>(t.push(n),a<s.length-1&&t.push(S.cloneElement(r,{key:`separator-${a}`})),t),[])}const se=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],te=({ownerState:e,theme:r})=>{let s=u({display:"flex",flexDirection:"column"},R({theme:r},$({values:e.direction,breakpoints:r.breakpoints.values}),t=>({flexDirection:t})));if(e.spacing){const t=K(r),n=Object.keys(r.breakpoints.values).reduce((i,o)=>((typeof e.spacing=="object"&&e.spacing[o]!=null||typeof e.direction=="object"&&e.direction[o]!=null)&&(i[o]=!0),i),{}),a=$({values:e.direction,base:n}),g=$({values:e.spacing,base:n});typeof a=="object"&&Object.keys(a).forEach((i,o,l)=>{if(!a[i]){const v=o>0?a[l[o-1]]:"column";a[i]=v}}),s=L(s,R({theme:r},g,(i,o)=>e.useFlexGap?{gap:j(t,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${se(o?a[o]:e.direction)}`]:j(t,i)}}))}return s=W(r.breakpoints,s),s};function oe(e={}){const{createStyledComponent:r=Y,useThemeProps:s=ee,componentName:t="MuiStack"}=e,n=()=>B({root:["root"]},i=>E(t,i),{}),a=r(te);return S.forwardRef(function(i,o){const l=s(i),p=q(l),{component:v="div",direction:m="column",spacing:h=0,divider:f,children:y,className:k,useFlexGap:x=!1}=p,I=F(p,Q),w={direction:m,spacing:h,useFlexGap:x},O=n();return C.jsx(a,u({as:v,ownerState:w,ref:o,className:T(O.root,k)},I,{children:f?re(y,f):y}))})}function ae(e){return E("MuiCircularProgress",e)}Z("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const ie=["className","color","disableShrink","size","style","thickness","value","variant"];let D=e=>e,M,_,N,V;const c=44,ne=U(M||(M=D`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),ce=U(_||(_=D`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),le=e=>{const{classes:r,variant:s,color:t,disableShrink:n}=e,a={root:["root",s,`color${P(t)}`],svg:["svg"],circle:["circle",`circle${P(s)}`,n&&"circleDisableShrink"]};return B(a,ae,r)},ue=b("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${P(s.color)}`]]}})(({ownerState:e,theme:r})=>u({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&G(N||(N=D`
      animation: ${0} 1.4s linear infinite;
    `),ne)),de=b("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),pe=b("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${P(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>u({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&G(V||(V=D`
      animation: ${0} 1.4s ease-in-out infinite;
    `),ce)),me=S.forwardRef(function(r,s){const t=z({props:r,name:"MuiCircularProgress"}),{className:n,color:a="primary",disableShrink:g=!1,size:d=40,style:i,thickness:o=3.6,value:l=0,variant:p="indeterminate"}=t,v=F(t,ie),m=u({},t,{color:a,disableShrink:g,size:d,thickness:o,value:l,variant:p}),h=le(m),f={},y={},k={};if(p==="determinate"){const x=2*Math.PI*((c-o)/2);f.strokeDasharray=x.toFixed(3),k["aria-valuenow"]=Math.round(l),f.strokeDashoffset=`${((100-l)/100*x).toFixed(3)}px`,y.transform="rotate(-90deg)"}return C.jsx(ue,u({className:T(h.root,n),style:u({width:d,height:d},y,i),ownerState:m,ref:s,role:"progressbar"},k,v,{children:C.jsx(de,{className:h.svg,ownerState:m,viewBox:`${c/2} ${c/2} ${c} ${c}`,children:C.jsx(pe,{className:h.circle,style:f,ownerState:m,cx:c,cy:c,r:(c-o)/2,fill:"none",strokeWidth:o})})}))}),ye=me,fe=oe({createStyledComponent:b("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,r)=>r.root}),useThemeProps:e=>z({props:e,name:"MuiStack"})}),ge=fe;export{ye as C,ge as S};
