var B=Object.defineProperty;var p=(o,t)=>B(o,"name",{value:t,configurable:!0});import{c as G}from"./dom.utils-1db2b487.js";import{S as H,D as J}from"./layout.settings-9902fce9.js";import{I as C}from"./Icon-597278d2.js";import{r as K,a as O,b as Q}from"./input.renders-69495bb0.js";import{r as b}from"./index-d23035ce.js";import{a as T,j as c}from"./jsx-runtime-bb315772.js";const N=b.exports.forwardRef(p(function({addon:t,charCounter:h,charCountText:F,description:m,disabled:I,id:e,role:S,inline:u,label:$,maxLength:a,name:j,onChange:f,qa:D,readOnly:E,required:x,size:g,state:_,type:R="text",value:r,onBlur:w,onClick:A,onFocus:L,onKeyDown:P,onKeyUp:Z},M){const[U,k]=b.exports.useState(r?r.length:0),n=(t==null?void 0:t.type)==="text"&&t.placement==="left"?t.content:null,i=(t==null?void 0:t.type)==="text"&&t.placement==="right"?t.content:null,s=(t==null?void 0:t.type)==="icon"&&t.placement==="left"?t.content:null,l=(t==null?void 0:t.type)==="icon"&&t.placement==="right"?t.content:null,q=G({"a-input":!0,"a-input--inline":!!u,[`a-input--${H[g||J]}`]:!!g,"has-icon-left":!!s,"has-icon-right":!s&&!!l,"has-addon-left":!!n,"has-addon-right":!!i,"has-error":_==="error"}),v=p(y=>(k(y.target.value.length),f&&f(y)),"_handleChange");return T("div",{className:q,"data-qa":D,children:[K({label:$,id:e,required:x,inline:u}),O({id:e,description:m,state:_}),T("div",{className:"a-input__wrapper",children:[!!s&&c(C,{name:s}),!!n&&c("div",{className:"a-input__addon",children:n}),c("input",{ref:M,type:R,value:r,name:j,id:e,disabled:I,readOnly:E,required:x,maxLength:a,onChange:v,onBlur:w,onClick:A,onFocus:L,onKeyDown:P,onKeyUp:Z,role:S,...h&&a?{"aria-describedby":`${e}--counter`}:{},...m?{"aria-describedby":`${e}--description`}:{}}),!!l&&!s&&c(C,{name:l}),!!i&&c("div",{className:"a-input__addon",children:i})]}),Q({id:e,charCountText:F,charCounter:h,characterCount:r?r.length:U,maxLength:a})]})},"TextField2"));N.defaultProps={type:"text",id:"aui-text-field",charCountText:"%count% / %max%"};const et=N;export{et as T,N as a};
//# sourceMappingURL=TextField-5d29e60b.js.map
