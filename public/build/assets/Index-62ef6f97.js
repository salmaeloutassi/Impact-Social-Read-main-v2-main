import{r as s,s as V,a as r,j as t,L as Z,F as G,d as C}from"./main-7817f3b1.js";import{D as U,a as W}from"./DefaultLayout-c44391f7.js";import{N as X}from"./index-a42b5db0.js";import{s as y}from"./sortBy-2ed23318.js";import{g as S,f as q,d as J}from"./index.esm-fffe3f01.js";import{S as K}from"./sweetalert2.all-b373c7ca.js";import{u as Q}from"./useDispatch-d01b19de.js";import{t as k,S as _}from"./transition-35f1fbff.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";import"./floating-ui.dom.browser.min-71618afd.js";import"./keyboard-bc2fdc5c.js";function pe({partenaires:b,success:u}){const P=Q();s.useEffect(()=>{P(V("Column Chooser Table"))});const[h,p]=s.useState(1),g=[10,20,30,50,100],[c,L]=s.useState(g[0]),[l,x]=s.useState(y(b,"id")),[E,D]=s.useState(l),[o,F]=s.useState(""),[d,j]=s.useState({columnAccessor:"id",direction:"asc"}),[i,f]=s.useState(["created_at"]),A=(e,a)=>{i.includes(e)?f(n=>i.filter($=>$!==n)):f([...i,e])},T=[{accessor:"id",title:"Id"},{accessor:"type_partner",title:"Type"},{accessor:"Status",title:"Statut"},{accessor:"created_at",title:"Date"}];s.useEffect(()=>{p(1)},[c]),s.useEffect(()=>{const e=(h-1)*c,a=e+c;D([...l.slice(e,a)])},[h,c,l]),s.useEffect(()=>{x(()=>b.filter(e=>e.id.toString().includes(o.toLowerCase())||e.type_partner.toLowerCase().includes(o.toLowerCase())||e.status.toString().includes(o.toLowerCase())))},[o]),s.useEffect(()=>{const e=y(l,d.columnAccessor);x(d.direction==="desc"?e.reverse():e),p(1)},[d]);const[N,m]=s.useState(!1),[R,M]=s.useState(""),z=(e="",a="success")=>{K.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3,customClass:{container:"toast"}}).fire({icon:a,title:e,padding:"10px 20px"})};s.useEffect(()=>{u&&z(u)},[u]);const v=e=>{C.Inertia.get(route("dashboard.liste-partenaire-type.edit",e))},H=e=>{m(!0),M(e),I},B=e=>{C.Inertia.get(route("dashboard.liste-partenaire-type.show",e))},w=[{id:1,label:"btn btn-info",labIcon:J,methode:H}];function O(e){return e.replace(/\w+/g,function(a){return a.charAt(0).toUpperCase()+a.slice(1).toLowerCase()}).replace(/\s/g,"")}return r(U,{children:[r("div",{className:"panel datatables",children:[t("div",{className:"flex justify-between mb-5",children:t("h3",{className:"text-lg ",children:"Liste de type de partenaire"})}),r("div",{className:"flex md:items-center md:flex-row flex-col mb-5 gap-5",children:[t(Z,{href:route("dashboard.liste-partenaire-type.create"),className:"btn btn-success",children:"Création"}),r("div",{className:"flex items-center gap-5 ltr:ml-auto rtl:mr-auto",children:[t("div",{className:"flex md:items-center md:flex-row flex-col gap-5",children:t("div",{className:"dropdown",children:t(W,{btnClassName:"!flex items-center border font-semibold border-white-light dark:border-[#253b5c] rounded-md px-4 py-2 text-sm dark:bg-[#1b2e4b] dark:text-white-dark",button:r(G,{children:[t("span",{className:"ltr:mr-1 rtl:ml-1",children:"Colonnes"}),t("svg",{className:"w-5 h-5",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{d:"M19 9L12 15L5 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),children:t("ul",{className:"!min-w-[140px]",children:T.map((e,a)=>t("li",{className:"flex flex-col",onClick:n=>{n.stopPropagation()},children:t("div",{className:"flex items-center px-4 py-1",children:r("label",{className:"cursor-pointer mb-0",children:[t("input",{type:"checkbox",checked:!i.includes(e.accessor),className:"form-checkbox",defaultValue:e.accessor,onChange:n=>{f(n.target.value),A(e.accessor,n.target.checked)}}),t("span",{className:"ltr:ml-2 rtl:mr-2",children:e.title})]})})},a))})})})}),t("div",{className:"text-right",children:t("input",{type:"text",className:"form-input",placeholder:"Recherche....",value:o,onChange:e=>F(e.target.value)})})]})]}),t(X,{className:"whitespace-nowrap table-hover",records:E,columns:[{accessor:"id",title:"Id",sortable:!0,hidden:i.includes("id")},{accessor:"type_partner",title:"Type",sortable:!0,hidden:i.includes("type_partner"),render:e=>O(e.type_partner)},{accessor:"status",title:"Statut",sortable:!0,hidden:i.includes("status"),render:e=>e.status==!0?t("span",{className:"badge bg-success",children:"Activé"}):t("span",{className:"badge bg-danger",children:"Désactivé"})},{accessor:"created_at",title:"Date création",sortable:!0,hidden:i.includes("created_at")},{accessor:"",title:"Action",sortable:!0,hidden:i.includes("Action"),render:e=>e.status==!0?r("div",{className:"flex space-x-2",children:[t("button",{className:"btn btn-success",onClick:()=>v(e.id),children:t(S,{})}),w.map(a=>t("button",{className:a.label,onClick:()=>a.methode(e.id),children:t(a.labIcon,{})},a.id))]}):r("div",{className:"flex space-x-2",children:[t("button",{className:"btn btn-danger",onClick:()=>v(e.id),children:t(S,{})}),w.map(a=>t("button",{className:a.label,onClick:()=>a.methode(e.id),children:t(a.labIcon,{})},a.id))]})}],highlightOnHover:!0,totalRecords:l.length,recordsPerPage:c,page:h,onPageChange:e=>p(e),recordsPerPageOptions:g,onRecordsPerPageChange:L,sortStatus:d,onSortStatusChange:j,minHeight:200,paginationText:({from:e,to:a,totalRecords:n})=>`Showing  ${e} to ${a} of ${n} entries`})]}),t("div",{children:t(k,{appear:!0,show:N,as:s.Fragment,children:r(_,{as:"div",open:N,onClose:()=>m(!1),children:[t(k.Child,{as:s.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:t("div",{className:"fixed inset-0"})}),t("div",{id:"slideIn_down_modal",className:"fixed inset-0 z-[999] overflow-y-auto bg-[black]/60",children:t("div",{className:"flex min-h-screen items-start justify-center px-4",children:r(_.Panel,{className:"panel animate__animated animate__slideInDown my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark",children:[r("div",{className:"flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]",children:[t("h5",{className:"text-lg font-bold",children:"Modification"}),t("button",{onClick:()=>m(!1),type:"button",className:"text-white-dark hover:text-dark",children:t(q,{})})]}),r("div",{className:"p-5",children:[t("p",{children:"Voulez-vous modifier cet élément ?"}),r("div",{className:"mt-8 flex items-center justify-end",children:[t("button",{onClick:()=>m(!1),type:"button",className:"btn btn-outline-danger",children:"Non"}),t("button",{onClick:()=>B(R),type:"button",className:"btn btn-primary ltr:ml-4 rtl:mr-4",children:"Oui"})]})]})]})})})]})})})]})}export{pe as default};