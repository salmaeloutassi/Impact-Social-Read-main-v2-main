import{u as s,j as e,a}from"./main-7817f3b1.js";import{D as n}from"./DefaultLayout-c44391f7.js";import{F as m}from"./index.esm-fffe3f01.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./useDispatch-d01b19de.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";function _(){const{data:r,post:l,setData:i,processing:o,errors:d}=s({date_debut:"",date_fin:""});return e(n,{children:a("div",{children:[e("div",{className:"flex items-center justify-between mb-5",children:e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Périodes de candidature"})}),e("div",{className:"datatables grid grid-rows-3",children:e("div",{className:" flex justify-between flex-nowrap dark:text-white gap-4",children:e("div",{className:"md:w-3/5 sm:w-full",children:a("div",{className:"panel",children:[e("h2",{className:"text-lg mb-3 font-bold",children:"Créer une une période"}),e("form",{onSubmit:t=>{t.preventDefault(),l(route("dashboard.periode-candidature.store"),{})},children:a("div",{className:"grid gap-3",children:[a("div",{className:"my-2",children:[e("label",{htmlFor:"date_debut",className:"text-base",children:"Date de début"}),e("input",{type:"date",value:r.date_debut,onChange:t=>i("date_debut",t.target.value),className:"form-input border-dark ",placeholder:""}),d.date_debut&&e("div",{className:"text-danger",children:d.date_debut})]}),a("div",{className:"my-2",children:[e("label",{htmlFor:"date_fin",className:"text-base",children:"Date fin"}),e("input",{type:"date",value:r.date_fin,onChange:t=>i("date_fin",t.target.value),className:"form-input border-dark ",placeholder:""}),d.date_fin&&e("div",{className:"text-danger",children:d.date_fin})]}),a("button",{type:"submit",className:"btn bg-lime-500 text-white border-lime-500",children:[e(m,{className:"mr-4 rtl:order-2"}),e("span",{children:"Sauvegarder"})]})]})})]})})})})]})})}export{_ as default};