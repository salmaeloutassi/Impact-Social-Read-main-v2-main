import{r as n,j as e,a as t,F as N,d as g}from"./main-7817f3b1.js";import{D as x}from"./DefaultLayout-c44391f7.js";import{b as y}from"./index.esm-fffe3f01.js";import{N as A}from"./index-a42b5db0.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./useDispatch-d01b19de.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";import"./floating-ui.dom.browser.min-71618afd.js";function F({service:a,id:o,convention:h,serachService:m}){const[c,u]=n.useState(1),[v,p]=n.useState(a.slice(0,15));n.useEffect(()=>{const r=(c-1)*15,l=r+15;p(a.slice(r,l))},[c]);const i=JSON.parse(h.data);let s;i.numberBeneficiary!==null?s=i.numberBeneficiary:s=1;const d=a.map(r=>r.cout_service*s).map(r=>r).reduce((r,l)=>r+l,0),b=d/s,f=r=>{g.Inertia.get(route("dashboard.save-convention.edit",r))};return console.log("service : ",m),e(x,{children:t("div",{children:[e("div",{className:"flex items-center justify-between mb-5"}),e("div",{className:"datatables mb-5",children:e("div",{className:" flex justify-between flex-nowrap dark:text-white gap-4",children:e("div",{className:" sm:w-full",children:t("div",{className:"panel",children:[e("div",{className:"flex justify-between mb-4",children:t("h3",{className:"text-xl  mb-4",children:["Les services rattachés à la convention numéro ",o," assuré par le partenaire ",e("span",{class:"badge bg-success",children:i.partnerId.label})," "]})}),e(A,{columns:[{accessor:"service_id",title:"Numéro service ",render:r=>t("span",{children:["S",r.service_id]})},{accessor:"cout",title:"Cout unitaire"},{accessor:"objectif",title:"Objectif"},{accessor:"cout_service",title:"Cout service"},{accessor:"type_operator",title:"Type opérateur"},{accessor:"",title:"Action",render:r=>e("button",{className:"btn btn-danger",onClick:()=>f(r.id),children:e(y,{})})},,],records:v,totalRecords:a.length,recordsPerPage:15,page:c,onPageChange:r=>u(r)})]})})})}),e("div",{className:"datatables",children:e("div",{className:" flex justify-between flex-nowrap dark:text-white gap-4",children:e("div",{className:" sm:w-full",children:e("div",{className:"panel",children:e("div",{className:"table-responsive",children:t("table",{children:[e("thead",{children:t("tr",{children:[e("th",{children:"Services"}),e("th",{children:"Cout applicable"}),e("th",{children:"1ère année"}),e("th",{children:"Global"})]})}),t("tbody",{children:[a.map(r=>e(N,{children:t("tr",{children:[t("td",{children:["S",r.service_id]}),t("td",{children:[r.cout_service*s," ",i.devise.value]}),e("td",{children:"A voir"}),e("td",{children:"A voir"})]},r.id)})),t("tr",{children:[e("td",{children:"Total des services"}),t("td",{children:[d," ",i.devise.value]}),e("td",{children:"A voir"}),e("td",{children:"A voir"})]}),t("tr",{children:[e("td",{children:"Total des services par bénéficiaire"}),t("td",{children:[b," ",i.devise.value]}),e("td",{children:"A voir"}),e("td",{children:"A voir"})]})]})]})})})})})})]})})}export{F as default};
