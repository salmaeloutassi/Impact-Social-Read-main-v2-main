import{u as f,r as l,j as e,a}from"./main-7817f3b1.js";import"./DefaultLayout-c44391f7.js";import{L as b}from"./logo1-3e47dc29.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./useDispatch-d01b19de.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index.esm-fffe3f01.js";import"./index-d410f391.js";const B=({token:d})=>{const{data:t,post:n,setData:x,processing:N,errors:r}=f({password:"",rePassword:"",id:d}),[c,m]=l.useState(""),[p,u]=l.useState(""),[h,o]=l.useState(!0),g=s=>{t.password=s.target.value,m(s.target.value),i(s.target.value,p)},v=s=>{t.rePassword=s.target.value,u(s.target.value),i(c,s.target.value)},i=(s,w)=>{o(s!==w)};return e("div",{className:"flex justify-center items-center min-h-screen bg-cover bg-center bg-[url('/assets/images/map.svg')] dark:bg-[url('/assets/images/map-dark.svg')]",children:a("div",{className:"panel sm:w-[480px] m-6 max-w-lg w-full",children:[a("div",{className:"flex items-center mb-10",children:[e("div",{className:"ltr:mr-4 rtl:ml-4",children:e("img",{src:b,className:"w-16 h-16 object-cover rounded-full",alt:"images"})}),a("div",{className:"flex-3",children:[e("h4",{className:"text-2xl",children:"Modification de mot de passe"}),e("p",{children:"Veuillez changer votre mot de passe"})]})]}),a("form",{className:"space-y-5",onSubmit:s=>{s.preventDefault(),n("/update-password-partner")},children:[a("div",{children:[e("label",{htmlFor:"password",children:"Mot de passe"}),e("input",{value:t.password,onChange:g,id:"password",type:"password",className:"form-input",placeholder:"Mot de passe"}),r.password&&e("div",{className:"text-danger",children:r.password})]}),a("div",{children:[e("label",{htmlFor:"password",children:"Confirmation"}),e("input",{value:t.rePassword,onChange:v,id:"password",type:"password",className:"form-input",placeholder:"Confirmation"}),r.rePassword&&e("div",{className:"text-danger",children:r.rePassword})]}),e("button",{type:"submit",disabled:h,className:"btn bg-lime-500 text-white border-lime-500 w-full",children:"Sauvegarder"})]})]})})};export{B as default};