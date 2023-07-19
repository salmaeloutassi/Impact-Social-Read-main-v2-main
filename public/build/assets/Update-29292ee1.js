import{c as w,r as o,u as E,j as e,a as t}from"./main-7817f3b1.js";import{D as V}from"./DefaultLayout-c44391f7.js";import{F as j}from"./index.esm-fffe3f01.js";import{S as r}from"./react-select.esm-b3a586dc.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./useDispatch-d01b19de.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";import"./floating-ui.dom.browser.min-71618afd.js";function H(){const{beneficiaires:d,conventions:m,durations:p,familles:s}=w().props,[g,h]=o.useState([]),[u,b]=o.useState([]),[v,y]=o.useState([]),{data:l,put:f,setData:c,processing:k,errors:n}=E({name_family:s.name_family,cible:JSON.parse(s.cible),type_convention:JSON.parse(s.type_convention),engagement:JSON.parse(s.engagement),id:s.id}),N=d.map(a=>({key:a.id,value:a.type_beneficiary,label:a.type_beneficiary})),x=m.map(a=>({key:a.id,value:a.type_convention,label:a.type_convention})),_=p.map(a=>({key:a.id,value:a.type_duration,label:a.type_duration})),S=a=>{const i=[];l.cible=a,h(i)},C=a=>{const i=[];l.type_convention=a,b(i)},F=a=>{const i=[];l.engagement=a,y(i)};return e(V,{children:t("div",{children:[e("div",{className:"flex items-center justify-between mb-5",children:e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Famille des conventions"})}),e("div",{className:"datatables",children:e("div",{className:" flex justify-between flex-nowrap dark:text-white gap-4",children:e("div",{className:" sm:w-full",children:t("div",{className:"panel",children:[e("h2",{className:"text-lg mb-3 font-bold",children:"Modification"}),t("form",{onSubmit:a=>{a.preventDefault(),c("cible",g),c("type_convention",u),c("engagement",v),f(route("dashboard.famille-convention.update",s.id),{})},children:[t("div",{className:"grid grid-cols-2 gap-3",children:[t("div",{className:"my-2",children:[t("label",{htmlFor:"name_family",className:"text-base",children:["Nom de la famille ",e("span",{className:"text-danger",children:"*"})]}),e("input",{type:"text",value:l.name_family,onChange:a=>c("name_family",a.target.value),className:"form-input",placeholder:"Nom de la famille"}),n.name_family&&e("div",{className:"text-danger",children:n.name_family})]}),t("div",{className:"my-2 custom-select",children:[t("label",{htmlFor:"cible",className:"text-base",children:["Cible bénéficiare ",e("span",{className:"text-danger",children:"*"})]}),e(r,{options:N,multiple:!0,onChange:S,type:"text",isMulti:!0,isSearchable:!1,defaultValue:l.cible,placeholder:"Sélectionner les cibles"}),n.cible&&e("div",{className:"text-danger",children:n.cible})]})]}),t("div",{className:"grid grid-cols-2 gap-3",children:[t("div",{className:"my-2 custom-select",children:[t("label",{htmlFor:"type_convention",className:"text-base",children:["Type de convention ",e("span",{className:"text-danger",children:"*"})]}),e(r,{onChange:C,defaultValue:l.type_convention,options:x,isSearchable:!1}),n.type_convention&&e("div",{className:"text-danger",children:n.type_convention})]}),t("div",{className:"my-2 custom-select",children:[t("label",{htmlFor:"engagement",className:"text-base",children:["Engagement ",e("span",{className:"text-danger",children:"*"})]}),e(r,{onChange:F,defaultValue:l.engagement,options:_,isSearchable:!1}),n.engagement&&e("div",{className:"text-danger",children:n.engagement})]})]}),e("div",{className:"grid  gap-3 pt-4",children:t("button",{type:"submit",className:"btn bg-lime-500 text-white border-lime-500",children:[e(j,{className:"mr-4 rtl:order-2"}),e("span",{children:"Sauvegarder"})]})})]})]})})})})]})})}export{H as default};
