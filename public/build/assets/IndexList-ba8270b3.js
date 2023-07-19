import{r as a,s as O,a as r,j as t,L as C,F as M,d as $}from"./main-7817f3b1.js";import{D as B,a as G}from"./DefaultLayout-c44391f7.js";import{N as V}from"./index-a42b5db0.js";import{s as S}from"./sortBy-2ed23318.js";import{c as J}from"./index.esm-35a63bc3.js";import{f as W}from"./index.esm-fffe3f01.js";import{u as X}from"./useDispatch-d01b19de.js";import{t as k,S as y}from"./transition-35f1fbff.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";import"./floating-ui.dom.browser.min-71618afd.js";import"./keyboard-bc2fdc5c.js";function de({recouvrement:f,convention:L,id:_}){const D=X();a.useEffect(()=>{D(O("Column Chooser Table"))});const g=f.map((e,n)=>({...e,index:n+1})),[m,h]=a.useState(1),x=[10,20,30,50,100],[i,P]=a.useState(x[0]),[c,v]=a.useState(S(g,"id")),[w,I]=a.useState(c),[o,R]=a.useState(""),[d,j]=a.useState({columnAccessor:"id",direction:"asc"}),[s,p]=a.useState(["created_at"]),E=(e,n)=>{s.includes(e)?p(l=>s.filter(H=>H!==l)):p([...s,e])},F=[{accessor:"id",title:"Id"},{accessor:"nature",title:"Nature"},{accessor:"credit",title:"Crédit"},{accessor:"debit",title:"Débit"},{accessor:"solde",title:"Solde"},{accessor:"date_operation",title:"Date opération"},{accessor:"created_at",title:"Date"}];a.useEffect(()=>{h(1)},[i]),a.useEffect(()=>{const e=(m-1)*i,n=e+i;I([...c.slice(e,n)])},[m,i,c]),a.useEffect(()=>{v(()=>f.filter(e=>e.id.toString().includes(o.toLowerCase())||e.nature.toLowerCase().includes(o.toLowerCase())||e.credit.toLowerCase().includes(o.toLowerCase())||e.debit.toLowerCase().includes(o.toLowerCase())||e.solde.toLowerCase().includes(o.toLowerCase())||e.date_operation.toLowerCase().includes(o.toLowerCase())))},[o]),a.useEffect(()=>{const e=S(c,d.columnAccessor);v(d.direction==="desc"?e.reverse():e),h(1)},[d]);const u=JSON.parse(L.data),[N,b]=a.useState(!1),[T,Z]=a.useState(""),A=e=>{alert(e)},z=e=>{$.Inertia.get(route("dashboard.recouvrement.show",e))};return console.log("recouvrement ",g),r(B,{children:[r("div",{className:"panel datatables",children:[t("div",{className:"flex justify-between mb-5",children:r("h3",{className:"text-lg ",children:["Recouvrement de la convention numéro ",_," assurée par le partenaire ",t("span",{className:"badge bg-success",children:u.partnerId.label})]})}),r("div",{className:"flex md:items-center md:flex-row flex-col mb-5 gap-5",children:[t(C,{href:route("dashboard.recouvrement.index"),className:"btn btn-warning",children:"Retour"}),t(C,{href:route("dashboard.recouvrement.create"),className:"btn btn-success",children:"Création"}),r("div",{className:"flex items-center gap-5 ltr:ml-auto rtl:mr-auto",children:[t("div",{className:"flex md:items-center md:flex-row flex-col gap-5",children:t("div",{className:"dropdown",children:t(G,{btnClassName:"!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark",button:r(M,{children:[t("span",{className:"ltr:mr-1 rtl:ml-1",children:"Colonnes"}),t("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M19 9L12 15L5 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),children:t("ul",{className:"!min-w-[140px]",children:F.map((e,n)=>t("li",{className:"flex flex-col",onClick:l=>{l.stopPropagation()},children:t("div",{className:"flex items-center px-4 py-1",children:r("label",{className:"cursor-pointer mb-0",children:[t("input",{type:"checkbox",checked:!s.includes(e.accessor),className:"form-checkbox",defaultValue:e.accessor,onChange:l=>{p(l.target.value),E(e.accessor,l.target.checked)}}),t("span",{className:"ltr:ml-2 rtl:mr-2",children:e.title})]})})},n))})})})}),t("div",{className:"text-right",children:t("input",{type:"text",className:"form-input",placeholder:"Recherche....",value:o,onChange:e=>R(e.target.value)})})]})]}),t(V,{className:"whitespace-nowrap table-hover",records:w,columns:[{accessor:"nature",title:"Nature",sortable:!0,hidden:s.includes("nature"),render:e=>t("span",{children:e.nature})},{accessor:"credit",title:"Crédit",sortable:!0,hidden:s.includes("credit"),render:e=>r("span",{children:[e.credit," ",u.devise.label]})},{accessor:"debit",title:"Débit",sortable:!0,hidden:s.includes("debit"),render:e=>r("span",{children:[e.debit," ",u.devise.label]})},{accessor:"solde",title:"Solde",sortable:!0,hidden:s.includes("solde"),render:e=>r("span",{children:[e.solde," ",u.devise.label]})},{accessor:"date_operation",title:"Date opération",sortable:!0,hidden:s.includes("date_operation"),render:e=>e.date_operation},{accessor:"created_at",title:"Date création",sortable:!0,hidden:s.includes("created_at")},{accessor:"",title:"Action",sortable:!0,hidden:s.includes("Action"),render:e=>e.index===w.length?t("button",{className:"btn btn-danger",onClick:()=>A(e.id),children:t(J,{})}):null}],highlightOnHover:!0,totalRecords:c.length,recordsPerPage:i,page:m,onPageChange:e=>h(e),recordsPerPageOptions:x,onRecordsPerPageChange:P,sortStatus:d,onSortStatusChange:j,minHeight:200,paginationText:({from:e,to:n,totalRecords:l})=>`Showing  ${e} to ${n} of ${l} entries`})]}),t("div",{children:t(k,{appear:!0,show:N,as:a.Fragment,children:r(y,{as:"div",open:N,onClose:()=>b(!1),children:[t(k.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:t("div",{className:"fixed inset-0"})}),t("div",{id:"slideIn_down_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:t("div",{className:"flex min-h-screen items-start justify-center px-4",children:r(y.Panel,{className:"panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[r("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[t("h5",{className:"text-lg font-bold",children:"Suppression"}),t("button",{onClick:()=>b(!1),type:"button",className:"text-white-dark hover:text-dark",children:t(W,{})})]}),r("div",{className:"p-5",children:[t("p",{children:"Voulez-vous supprimer cet élément ?"}),r("div",{className:"mt-8 flex items-center justify-end",children:[t("button",{onClick:()=>b(!1),type:"button",className:"btn btn-outline-danger",children:"Non"}),t("button",{onClick:()=>z(T),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Oui"})]})]})]})})})]})})})]})}export{de as default};
