import{c as d,u as m,j as e,a as i}from"./main-7817f3b1.js";import{D as n}from"./DefaultLayout-c44391f7.js";import{F as o}from"./index.esm-fffe3f01.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./useDispatch-d01b19de.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";function _(){const{civilities:t}=d().props,{data:s,put:r,setData:c,processing:p,errors:l}=m({type_civility:t.type_civility,id:t.id});return e(n,{children:i("div",{children:[e("div",{className:"flex items-center justify-between mb-5",children:e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Civilité"})}),e("div",{className:"datatables",children:e("div",{className:" flex justify-between flex-nowrap dark:text-white gap-4",children:e("div",{className:"md:w-3/5 sm:w-full",children:i("div",{className:"panel",children:[e("h2",{className:"text-lg mb-3 font-bold",children:"Modification "}),e("form",{onSubmit:a=>{a.preventDefault(),r(route("dashboard.liste-civilite.update",t.id),{})},children:i("div",{className:"grid gap-3",children:[i("div",{className:"my-2",children:[e("label",{htmlFor:"type_civility",className:"text-base",children:"Type de civilité"}),e("input",{type:"text",value:s.type_civility,onChange:a=>c("type_civility",a.target.value),className:"form-input",placeholder:"Type de civilité"}),l.type_civility&&e("div",{className:"text-danger",children:l.type_civility})]}),i("button",{type:"submit",className:"btn bg-lime-500 text-white border-lime-500",children:[e(o,{className:"mr-4 rtl:order-2"}),e("span",{children:"Sauvegarder"})]})]})})]})})})})]})})}export{_ as default};
