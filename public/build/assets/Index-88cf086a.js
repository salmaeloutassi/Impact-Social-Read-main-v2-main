import{r,j as t,a as d,L as b,d as n}from"./main-7817f3b1.js";import{D as u}from"./DefaultLayout-c44391f7.js";import{N as p}from"./index-a42b5db0.js";import{b as f,c as g}from"./index.esm-35a63bc3.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./useDispatch-d01b19de.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index.esm-fffe3f01.js";import"./index-d410f391.js";import"./floating-ui.dom.browser.min-71618afd.js";function D({section:s}){const[o,i]=r.useState(1),[c,l]=r.useState(s.slice(0,15));r.useEffect(()=>{const e=(o-1)*15,a=e+15;l(s.slice(e,a))},[o]);const m=e=>{n.Inertia.get(route("dashboard.section-one-candidate-ar.edit",{id:e}))},h=[{id:1,label:"btn btn-info",labIcon:f,methode:e=>{n.Inertia.get(route("dashboard.section-one-candidate-ar.show",e))}},{id:2,label:"btn btn-danger",labIcon:g,methode:e=>{n.Inertia.delete(route("dashboard.section-one-candidate-ar.destroy",e)),window.location.reload()}}];return r.useState(!1),t(u,{children:d("div",{className:"panel",children:[d("div",{className:"flex justify-between",children:[t("h3",{className:"text-xl font-bold",children:"Liste des messages en arabe"}),t(b,{href:route("dashboard.section-one-candidate-ar.create"),className:"btn btn-success",children:"Créer un message"})]}),t(p,{columns:[{accessor:"",title:"Message",render:e=>e.msg_info_candidature!=null>0?t("button",{className:"bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",onClick:()=>m(e.id),children:e.msg_info_candidature}):"error"},{accessor:"",title:"Action",render:e=>t("div",{className:"flex space-x-2",children:h.map(a=>t("button",{className:a.label,onClick:()=>a.methode(e.id),children:t(a.labIcon,{})},a.id))})}],records:c,totalRecords:s.length,recordsPerPage:15,page:o,onPageChange:e=>i(e)})]})})}export{D as default};
