import{r as t,s as b,j as s,a as p,L as N}from"./main-7817f3b1.js";import{D as x,e as C}from"./DefaultLayout-c44391f7.js";import{N as P}from"./index-a42b5db0.js";import{a as E}from"./index.esm-fffe3f01.js";import{u as v}from"./useDispatch-d01b19de.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";import"./floating-ui.dom.browser.min-71618afd.js";function F({inscription:d}){console.log(d),t.useState();const c=d.map((e,o)=>({...JSON.parse(e.dataForm),status:e.status,id:e.user_id,index:o+1}));console.log("data",c);const g=v();t.useEffect(()=>{g(b("List"))});const l=[10,20,30,50,100],[n,u]=t.useState(1),[r,h]=t.useState(l[0]),[i,f]=t.useState(c),[w,L]=t.useState(i),[a,S]=t.useState("");return t.useEffect(()=>{u(1)},[r]),t.useEffect(()=>{const e=(n-1)*r,o=e+r;L([...i.slice(e,o)])},[n,r,i]),t.useEffect(()=>{f(()=>c.filter(e=>e.index.toString().includes(a.toLowerCase())||e.name.toLowerCase().includes(a.toLowerCase())||e.lastName.toLowerCase().includes(a.toLowerCase())||e.emailAddress.toLowerCase().includes(a.toLowerCase())||e.status.toLowerCase().includes(a.toLowerCase())||e.id.toString().includes(a.toLowerCase())))},[a]),s(x,{children:s("div",{className:"space-y-6",children:p("div",{className:"panel",children:[p("div",{className:"flex items-center justify-between mb-5",children:[s("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Liste des candidatures"}),s("input",{type:"text",className:"form-input w-auto",placeholder:"Search...",value:a,onChange:e=>S(e.target.value)})]}),s("div",{className:"datatables",children:s(P,{striped:!0,className:"whitespace-nowrap table-striped",records:w,columns:[{accessor:"index",title:"ID"},{accessor:"name",title:"Nom"},{accessor:"lastName",title:"Prènom"},{accessor:"emailAddress",title:"Email"},{accessor:"status",title:"Traitement",render:({status:e})=>s("span",{className:e=="En cours"?"badge bg-warning ":"badge bg-success ",children:e})},{accessor:"id",title:"Action",render:({id:e})=>s(N,{href:route("dashboard.candidate.view",C(e)),className:"text-white inline-block p-2 rounded hover:text-gray-100 mr-2 bg-blue-600 ",children:s(E,{})})}],totalRecords:i.length,recordsPerPage:r,page:n,onPageChange:e=>u(e),recordsPerPageOptions:l,onRecordsPerPageChange:h,minHeight:200,paginationText:({from:e,to:o,totalRecords:m})=>`Showing  ${e} to ${o} of ${m} entries`})})]})})})}export{F as default};