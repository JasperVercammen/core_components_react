var u=Object.defineProperty;var i=(s,e)=>u(s,"name",{value:e,configurable:!0});import{d as n,e as o,T as c}from"./layout.settings-9902fce9.js";import{c as p}from"./dom.utils-1db2b487.js";import{I as m}from"./Icon-597278d2.js";import{a as d,j as t}from"./jsx-runtime-bb315772.js";const C=i(({label:s,id:e,required:r,inline:a})=>{const l=p({"a-input__label":!0,"a-input__label--inline":!!a});return s?d("label",{className:l,htmlFor:e,children:[s,r&&t("span",{className:"u-text-danger",children:"*"})]}):null},"renderLabel"),b=i(({id:s,description:e,state:r})=>{const a=p({"a-input__description":!0,"is-error":r===n.ERROR,"is-success":r===n.SUCCESS});return e?d("small",{id:`${s}--description`,className:a,children:[r===n.SUCCESS&&t(m,{name:o[c.SUCCESS]}),r===n.ERROR&&t(m,{name:o[c.WARNING]}),e]}):null},"renderDescription"),f=i(({id:s,charCountText:e,charCounter:r,characterCount:a,maxLength:l})=>r&&l?t("small",{"aria-live":"polite",id:`${s}--counter`,className:"a-input__description u-text-right",children:e==null?void 0:e.replace("%max%",l.toString()).replace("%count%",a.toString()).replace("%left%",(l-a).toString())}):null,"renderCharacterCounter");export{b as a,f as b,C as r};
//# sourceMappingURL=input.renders-69495bb0.js.map
