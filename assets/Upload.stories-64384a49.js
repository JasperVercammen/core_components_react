var E=Object.defineProperty;var u=(e,o)=>E(e,"name",{value:o,configurable:!0});import{R as N,r as U}from"./index-d23035ce.js";import{c as T}from"./dom.utils-1db2b487.js";import{h as A,a as B,I,b as w}from"./Icon-c6891515.js";import{B as j}from"./Button-4c45ab8a.js";import{a as f,j as a}from"./jsx-runtime-bb315772.js";import{Q as C}from"./stories.settings-7ac24d87.js";import"./es.object.get-own-property-descriptor-89e834e9.js";import"./settings-4d2c475c.js";import"./log.utils-f56af116.js";import"./layout.settings-9902fce9.js";import"./render.utils-ac75191e.js";import"./Avatar-9186c019.js";import"./Spinner-2995a70f.js";function P({file:e,acceptedFormat:o,maxSize:r,onDelete:t,formatErrorLabel:d,deleteAriaLabel:i,sizeErrorLabel:y}){const l=A(e,o),p=B(e,r);return f("li",{children:[a(I,{name:l&&p?"common-file-empty":"alert-triangle"}),a("span",{className:"m-upload__filename",children:e.name}),!l&&a("span",{className:"m-upload__error",children:d}),!p&&a("span",{className:"m-upload__error",children:y}),t&&a("div",{className:"m-upload__delete",children:a(j,{ariaLabel:i,addOn:{type:"icon",iconProps:{name:"remove"}},emphasis:"low",theme:"danger",size:"small",onClick:()=>t(e)})})]},e.name)}u(P,"UploadFile");function g({acceptedFormat:e,deleteAriaLabel:o,disabled:r,files:t,formatErrorLabel:d,id:i,label:y,maxSize:l,maxSizeLabel:p,multiple:V,onChange:c,onDelete:b,sizeErrorLabel:S,qa:z}){const h=N.useRef(null),O=u(n=>{b&&b(t==null?void 0:t.filter(s=>(s==null?void 0:s.name)!==n.name)),h.current&&(h.current.value="")},"handleDelete"),F=u(n=>{var s,x,v,_,M;if(V){const m=(s=n.target)!=null&&s.files?[...t,...Array.from(n.target.files)].filter((L,D,R)=>R.findIndex(k=>k.name===L.name)===D):[];c&&c(m,w(m,e,l))}else{const m=(v=(x=n.target)==null?void 0:x.files)!=null&&v[0]?[(M=(_=n.target)==null?void 0:_.files)==null?void 0:M[0]]:[];c&&c(m,w(m,e,l))}},"handleChange");return f("div",{className:T({"m-upload":!0,"is-disabled":!!r}),"data-qa":z,children:[a("div",{className:"m-upload__inner",children:f("div",{className:"m-upload__dropzone",children:[a("input",{ref:h,id:i,type:"file",multiple:V,onChange:F,accept:e,className:"m-upload__input",disabled:r,"aria-describedby":`${i}-description`}),a("div",{className:"m-upload__content",children:a("label",{htmlFor:i,className:"m-upload__message u-margin-bottom",children:y})})]})}),l&&f("small",{id:`${i}-description`,className:"m-upload__description",children:[p," ",l,"MB"]}),a("ul",{className:"m-upload__files",children:t==null?void 0:t.map(n=>a(P,{file:n,deleteAriaLabel:o,formatErrorLabel:d,sizeErrorLabel:S,onDelete:b&&O,maxSize:l,acceptedFormat:e},n==null?void 0:n.name))})]})}u(g,"Upload");g.defaultProps={label:"Sleep een bestand hier of klik om te bladeren",maxSize:10,multiple:!0,disabled:!1,acceptedFormat:"*",files:[],maxSizeLabel:"Maximale bestandsgrootte:",formatErrorLabel:"Dit bestandsformaat is niet toegestaan.",sizeErrorLabel:"Maximale bestandsgrootte overschreden.",deleteAriaLabel:"Verwijder bestand"};const le={title:"React/Molecules/Upload",component:g,parameters:{storySource:{source:`import Upload from './Upload';
import { QA_PROP_STORY } from '../../../constants/stories.settings';
import { useState } from 'react';

export default {
  title: 'React/Molecules/Upload',
  component: Upload,

  parameters: {
    docs: {
      description: {
        component: 'Whenever a user needs to upload one or more files, always use our custom upload component.'
      }
    }
  },
  argTypes: {
    files: {
      control: null,
      table: {
        type: { summary: 'File[]' },
        defaultValue: { summary: '[]' }
      },
      defaultValue: [],
      description: 'List of files displayed under the \`Upload\` component.'
    },
    id: {
      control: { type: 'text' },
      table: {
        type: { summary: 'string' }
      },
      defaultValue: 'aui-upload-stories',
      description: "ID on input element. Make sure it's unique across all \`Upload\` components."
    },
    label: {
      control: { type: 'text' },
      description: 'Override default text of upload zone. This can be rich text (ReactElement).',
      defaultValue: 'Sleep een bestand hier of klik om te bladeren',
      table: {
        type: { summary: 'ReactElement | string' },
        defaultValue: { summary: 'Sleep een bestand hier of klik om te bladeren' }
      }
    },
    multiple: {
      control: { type: 'boolean' },
      description: 'Sets \`multiple\` attribute on \`input\`.',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true }
      }
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the input.',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    acceptedFormat: {
      control: { type: 'text' },
      description:
        'Allows to set accepted format. Should be MIME type or \`.ext\`, accepts wildcard when using MIME types, like \`image/*\`.',
      defaultValue: '*',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '*' }
      }
    },
    maxSize: {
      control: { type: 'number' },
      description: 'Sets maximum allowed size for single file (in MB). 10MB by default.',
      defaultValue: 1,
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 10 }
      }
    },
    onChange: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onChange',
      description:
        'Handler for change of uploaded files. Fires on native file input user action. Will pass array of all unique files. When \`multiple=false\` it will return an array with a single file. The second argument is an array of validations for the current files (\`{validSize: boolean, validFormat: boolean}[]\`).'
    },
    onDelete: {
      control: { type: 'function' },
      table: {
        type: { summary: 'function' }
      },
      action: 'onDelete',
      description:
        'Handler for the deletion of uploaded files. Will pass the filtered files in argument (without the deleted one).'
    },
    maxSizeLabel: {
      control: { type: 'text' },
      description: 'Override default text of the maximum size notice.',
      defaultValue: 'Maximale bestandsgrootte:',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximale bestandsgrootte:' }
      }
    },
    formatErrorLabel: {
      control: { type: 'text' },
      description: 'Override default text of the format error notice.',
      defaultValue: 'Dit bestandsformaat is niet toegestaan.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Dit bestandsformaat is niet toegestaan.' }
      }
    },
    sizeErrorLabel: {
      control: { type: 'text' },
      description: 'Override default text of the size error notice.',
      defaultValue: 'Maximale bestandsgrootte overschreden.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Maximale bestandsgrootte overschreden.' }
      }
    },
    deleteAriaLabel: {
      control: { type: 'text' },
      description: 'Override the \`aria-label\` attribute on the file removal button.',
      defaultValue: 'Verwijder bestand',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Verwijder bestand' }
      }
    },
    qa: QA_PROP_STORY
  }
};
const Template = (args) => {
  const [files, setFiles] = useState([]);
  return (
    <Upload
      {...args}
      files={files}
      onChange={(f, v) => {
        args.onChange(f, v);
        setFiles(f);
      }}
      onDelete={(f) => {
        args.onDelete(f);
        setFiles(f);
      }}
    />
  );
};

export const upload = Template.bind({});
`,locationsMap:{upload:{startLoc:{col:17,line:137},endLoc:{col:1,line:153},startBody:{col:17,line:137},endBody:{col:1,line:153}}}},docs:{description:{component:"Whenever a user needs to upload one or more files, always use our custom upload component."}}},argTypes:{files:{control:null,table:{type:{summary:"File[]"},defaultValue:{summary:"[]"}},defaultValue:[],description:"List of files displayed under the `Upload` component."},id:{control:{type:"text"},table:{type:{summary:"string"}},defaultValue:"aui-upload-stories",description:"ID on input element. Make sure it's unique across all `Upload` components."},label:{control:{type:"text"},description:"Override default text of upload zone. This can be rich text (ReactElement).",defaultValue:"Sleep een bestand hier of klik om te bladeren",table:{type:{summary:"ReactElement | string"},defaultValue:{summary:"Sleep een bestand hier of klik om te bladeren"}}},multiple:{control:{type:"boolean"},description:"Sets `multiple` attribute on `input`.",defaultValue:!0,table:{type:{summary:"boolean"},defaultValue:{summary:!0}}},disabled:{control:{type:"boolean"},description:"Disables the input.",defaultValue:!1,table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},acceptedFormat:{control:{type:"text"},description:"Allows to set accepted format. Should be MIME type or `.ext`, accepts wildcard when using MIME types, like `image/*`.",defaultValue:"*",table:{type:{summary:"string"},defaultValue:{summary:"*"}}},maxSize:{control:{type:"number"},description:"Sets maximum allowed size for single file (in MB). 10MB by default.",defaultValue:1,table:{type:{summary:"number"},defaultValue:{summary:10}}},onChange:{control:{type:"function"},table:{type:{summary:"function"}},action:"onChange",description:"Handler for change of uploaded files. Fires on native file input user action. Will pass array of all unique files. When `multiple=false` it will return an array with a single file. The second argument is an array of validations for the current files (`{validSize: boolean, validFormat: boolean}[]`)."},onDelete:{control:{type:"function"},table:{type:{summary:"function"}},action:"onDelete",description:"Handler for the deletion of uploaded files. Will pass the filtered files in argument (without the deleted one)."},maxSizeLabel:{control:{type:"text"},description:"Override default text of the maximum size notice.",defaultValue:"Maximale bestandsgrootte:",table:{type:{summary:"string"},defaultValue:{summary:"Maximale bestandsgrootte:"}}},formatErrorLabel:{control:{type:"text"},description:"Override default text of the format error notice.",defaultValue:"Dit bestandsformaat is niet toegestaan.",table:{type:{summary:"string"},defaultValue:{summary:"Dit bestandsformaat is niet toegestaan."}}},sizeErrorLabel:{control:{type:"text"},description:"Override default text of the size error notice.",defaultValue:"Maximale bestandsgrootte overschreden.",table:{type:{summary:"string"},defaultValue:{summary:"Maximale bestandsgrootte overschreden."}}},deleteAriaLabel:{control:{type:"text"},description:"Override the `aria-label` attribute on the file removal button.",defaultValue:"Verwijder bestand",table:{type:{summary:"string"},defaultValue:{summary:"Verwijder bestand"}}},qa:C}},W=u(e=>{const[o,r]=U.exports.useState([]);return a(g,{...e,files:o,onChange:(t,d)=>{e.onChange(t,d),r(t)},onDelete:t=>{e.onDelete(t),r(t)}})},"Template"),oe=W.bind({}),re=["upload"];export{re as __namedExportsOrder,le as default,oe as upload};
//# sourceMappingURL=Upload.stories-64384a49.js.map
