import{r as t,u as R,j as a,a as r,L as I}from"./main-7817f3b1.js";import{D as O,e as $}from"./DefaultLayout-c44391f7.js";import{N as z}from"./index-a42b5db0.js";import{a as A}from"./index.esm-fffe3f01.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./useDispatch-d01b19de.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";import"./floating-ui.dom.browser.min-71618afd.js";const Q=({beneficiaries:u,regions:S,provinces:C,cities:L,ecoles:y})=>{console.log(u);const h=JSON.parse(u[0].dataBeneficiary);console.log("re",h);const c=h.dataBenificiary;console.log("re",c);const m=[10,20,30,50,100],[d,p]=t.useState(1),[g,x]=t.useState(""),[f,N]=t.useState(""),[w,b]=t.useState(""),[v,P]=t.useState(""),[i,E]=t.useState(m[0]),[n,l]=t.useState(c),[k,_]=t.useState(n);t.useState(),R();const[s,j]=t.useState("");return t.useEffect(()=>{p(1)},[i]),t.useEffect(()=>{const e=(d-1)*i,o=e+i;_([...n==null?void 0:n.slice(e,o)])},[d,i,n]),t.useEffect(()=>{l(()=>c.filter((e,o)=>e.keys.toString().includes(s.toLowerCase())||e.name.toLowerCase().includes(s.toLowerCase())||e.name.toLowerCase().includes(s.toLowerCase())||e.totalPoints.includes(s.toLowerCase())||e.region.toLowerCase().includes(s.toLowerCase())||e.city.toLowerCase().includes(s.toLowerCase())||e.province.toLowerCase().includes(s.toLowerCase())||e.school.toLowerCase().includes(s.toLowerCase())||e.id.toString().includes(s.toLowerCase())))},[s]),t.useEffect(()=>{l(()=>c.filter((e,o)=>e.region.toLowerCase().includes(g.toLowerCase())))},[g]),t.useEffect(()=>{l(()=>c.filter((e,o)=>e.city.toLowerCase().includes(w.toLowerCase())))},[w]),t.useEffect(()=>{console.log("province"),l(()=>c.filter((e,o)=>e.province.toLowerCase().includes(f.toLowerCase())))},[f]),t.useEffect(()=>{l(()=>c.filter((e,o)=>e.school.toLowerCase().includes(v.toLowerCase())))},[v]),a(O,{children:a("div",{className:"space-y-6",children:r("div",{className:"panel",children:[r("div",{className:"flex items-center justify-between mb-5",children:[a("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Les bénéficiaire Selectionner"}),a("input",{type:"text",className:"form-input w-auto",placeholder:"Recherche rapide...",value:s,onChange:e=>j(e.target.value)})]}),r("div",{className:"flex items-center justify-between mb-5",children:[r("select",{className:"form-select w-auto mx-1 ",name:"region",id:"",onChange:e=>x(e.target.value),children:[a("option",{value:"",children:"Selectionner  une region..."}),S.map((e,o)=>r("option",{value:e.name_region,children:[e.name_region," "]}))," "]}),r("select",{className:"form-select w-auto mx-1",name:"province",id:"",onChange:e=>N(e.target.value),children:[a("option",{value:"",children:"Selectionner  une province..."}),C.map((e,o)=>r("option",{value:e.name_province,children:[e.name_province," "]}))," "]}),r("select",{className:"form-select w-auto mx-1",name:"city",id:"",onChange:e=>b(e.target.value),children:[a("option",{value:"",children:"Selectionner  une ville..."}),L.map((e,o)=>r("option",{value:e.name_city,children:[e.name_city," "]}))," "]}),r("select",{className:"form-select w-auto mx-1",name:"school",id:"",onChange:e=>P(e.target.value),children:[a("option",{value:"",children:"Selectionner  une école..."}),y.map((e,o)=>r("option",{value:e.nom_fr,children:[e.nom_fr," "]}))," "]})]}),a("div",{className:"datatables",children:a(z,{striped:!0,className:"whitespace-nowrap table-striped",records:k,columns:[{accessor:"keys",title:"Rang"},{accessor:"name",title:"Nom"},{accessor:"region",title:"Region"},{accessor:"province",title:"Province"},{accessor:"city",title:"Ville"},{accessor:"school",title:"Lycée"},{accessor:"totalPoints",title:"Point",render:({totalPoints:e})=>r("span",{className:"text-white inline-block p-2 rounded hover:text-gray-100 mr-2 bg-danger ",children:[e," "]})},{accessor:"id",title:"Action",render:({id:e})=>a(I,{href:route("dashboard.detail.scoring.candidate",$(e)),className:"text-white inline-block p-2 rounded hover:text-gray-100 mr-2 bg-blue-600 ",children:a(A,{})})}],totalRecords:n==null?void 0:n.length,recordsPerPage:i,page:d,onPageChange:e=>p(e),recordsPerPageOptions:m,onRecordsPerPageChange:E,minHeight:200,paginationText:({from:e,to:o,totalRecords:D})=>`Showing  ${e} to ${o} of ${D} entries`})})]})})})};export{Q as default};
