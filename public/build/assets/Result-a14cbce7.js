import{r as i,s as he,u as C,j as l,a as n,L as ye}from"./main-7817f3b1.js";import{D as se,e as Ne}from"./DefaultLayout-c44391f7.js";import{N as be}from"./index-a42b5db0.js";import{a as we}from"./index.esm-fffe3f01.js";import"./sweetalert2.all-b373c7ca.js";import{u as Ce}from"./useDispatch-d01b19de.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index-d410f391.js";import"./floating-ui.dom.browser.min-71618afd.js";function Qe({inscription:V,scoringOpenField:z,fieldScoring:y,scoringCloseField:L,cities:P,provinces:_,beneficiaries:D,regions:E,filiere_bacs:xe,ecoles:$,logements:Se,orphelinats:Le,situation__socials:Pe,information__pluses:_e}){console.log("retuiuujn",D);const k=JSON.parse(D[0].dataBeneficiary);console.log("re",k);const H=k.dataBenificiary;console.log("reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedfff",H);const G=V.map((r,f)=>({...JSON.parse(r.dataForm),status:r.status,id:r.user_id,indepoint:f+1})),W=z.filter(r=>r.type==="tranche"),Z=Ce();i.useEffect(()=>{Z(he("Result"))}),console.log("close",L);const g=()=>{const f=(()=>G.map(o=>{const e=E.find(v=>v.id==o.regionOfOrigin),t=_.find(v=>v.id==o.provinceOfOrigin),d=P.find(v=>v.id==o.cityOfOrigin);return{...o,regionOfOrigin:e.name_region,provinceOfOrigin:t.name_province,cityOfOrigin:d.name_city}}))();console.log("ertyttg",f);const N=L.filter(o=>y.some(e=>e.id===o.field_id)).map(o=>{const e=y.find(d=>d.id===o.field_id);return{...JSON.parse(o.data),field_id:o.field_id,value:e.value,coef:e.coef}}),ie=W.filter(o=>y.some(e=>e.id===o.field_id)).map(o=>{const e=y.find(d=>d.id===o.field_id);return{...JSON.parse(o.data),field_id:o.field_id,value:e.value,coef:e.coef}}),ne=null,B=ie.map(o=>f.map(e=>{if(e[o.value]&&+e[o.value]>=+o.min&&+e[o.value]<+o.max)return{...ne,id:e.id,val:e[o.value],name:e.name,field_name:o.field_name,city:e.cityOfOrigin,region:e.regionOfOrigin,school:e.schoolName,province:e.provinceOfOrigin,point:+o.val,field:o.value,coef:o.coef}})),q=B.map(o=>o.filter(e=>e!==void 0)).filter(o=>o.length>0);console.log("ee",B),console.log("recup2",q);const a=null,fe=N.map(o=>f.map(e=>{if(e[o.value]=="Famille d'accueil")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Avec les parents")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="EPS")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[3],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Internat")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[4],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Normale")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Orphelin")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Abandonné")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[3],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Parent divorcés")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[4],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="de pere")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="de mere")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="les deux")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[3],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Réseaux sociaux")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Caravane JADARA")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Boursiers JADARA")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[3],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Site d’orientation")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[4],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Affichage au Lycée")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[5],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="2020")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="2021")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="2022")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[3],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="2O23")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[4],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="25%")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="50%")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="75%")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[3],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="100%")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[4],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Masculin")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Féminin")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Mon pere")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Ma mere")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="yes")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="no")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="trueF")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="falseF")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="trueFB")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="falseFB")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="trueM")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="falseM")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="trueMB")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="falseMB")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Oui")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Non")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="retraiteM")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="retraite")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Moteur")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Mental")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Psychique")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sensoriel")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences Agronomiques")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[1],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences Economiques")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[2],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Techniques de Gestion Et Comptabilité")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[3],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Science de Vie Et Terre")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[4],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Lettres")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[5],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences Humaines")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[6],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences Mathématiques A")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[7],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences Mathématiques B")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[8],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences de la Chariaa")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[9],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Langue Arabe")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[10],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Arts Appliqués")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[11],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences Physiques")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[12],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences et Technologies Electriques")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[13],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin};if(e[o.value]=="Sciences et Technologies Mécaniques")return{...a,id:e.id,val:e[o.value],name:e.name,point:o[14],field:o.value,coef:o.coef,school:e.schoolName,city:e.cityOfOrigin,region:e.regionOfOrigin,province:e.provinceOfOrigin}})).map(o=>o.filter(e=>e!==void 0));function I(o){const e={};o.forEach((v,J)=>{v.forEach(h=>{const{id:O,point:b,coef:w}=h;e[O]?e[O].push(h):e[O]=[h],e[O].totalPoints?e[O].totalPoints+=+b*(w/100):e[O].totalPoints=+b*(w/100)})});const t=Object.values(e);return console.log("taberc",t),t.map((v,J)=>{const h=v[0].id,O=v[0].name,b=v.totalPoints.toFixed(2),w=J+1,Oe=v[0].city,de=v[0].province,ce=v[0].region,pe=v[0].school;return{id:h,name:O,totalPoints:b,index:w,city:Oe,province:de,region:ce,school:pe}})}const ve=I(fe),ue=I(q),te=null,ge=ve.map(o=>ue.filter(e=>o.id==e.id).map(e=>({...te,id:o.id,name:o.name,province:o.province,city:o.city,school:o.school,region:o.region,totalPoints:(+(+o.totalPoints+ +e.totalPoints)).toFixed(2)}))).flat();return(()=>ge.sort((e,t)=>t.totalPoints-e.totalPoints).map((e,t)=>({...e,keys:t+1})))()};console.log("methosd",g());const R=[10,20,30,50,100],[x,A]=i.useState(1),[M,K]=i.useState(""),[j,Q]=i.useState(""),[F,U]=i.useState(""),[T,X]=i.useState(""),[c,Y]=i.useState(R[0]),[s,p]=i.useState(g()),[m,ee]=i.useState(s),[S,oe]=i.useState(),{data:De,setData:re,processing:Ee,errors:ke,reset:Re,put:Ae,post:ae}=C();C(),C(),C();const[u,le]=i.useState("");return i.useEffect(()=>{A(1)},[c]),i.useEffect(()=>{const r=(x-1)*c,f=r+c;ee([...s.slice(r,f)])},[x,c,s]),i.useEffect(()=>{p(()=>g().filter((r,f)=>r.keys.toString().includes(u.toLowerCase())||r.name.toLowerCase().includes(u.toLowerCase())||r.name.toLowerCase().includes(u.toLowerCase())||r.totalPoints.includes(u.toLowerCase())||r.region.toLowerCase().includes(u.toLowerCase())||r.city.toLowerCase().includes(u.toLowerCase())||r.province.toLowerCase().includes(u.toLowerCase())||r.school.toLowerCase().includes(u.toLowerCase())||r.id.toString().includes(u.toLowerCase())))},[u]),i.useEffect(()=>{p(()=>g().filter((r,f)=>r.region.toLowerCase().includes(M.toLowerCase())))},[M]),i.useEffect(()=>{p(()=>g().filter((r,f)=>r.city.toLowerCase().includes(F.toLowerCase())))},[F]),i.useEffect(()=>{console.log("province"),p(()=>g().filter((r,f)=>r.province.toLowerCase().includes(j.toLowerCase())))},[j]),i.useEffect(()=>{p(()=>g().filter((r,f)=>r.school.toLowerCase().includes(T.toLowerCase())))},[T]),i.useEffect(()=>{oe(g().length)}),l(se,{children:n("div",{className:"space-y-6",children:[l("div",{className:"",children:l("div",{className:"select-beneficiary",children:n("div",{className:"panel my-6",children:[n("div",{className:"relative flex items-center my-5 border p-3.5 rounded text-success bg-success-light border-success ltr:border-l-[64px] rtl:border-r-[64px] dark:bg-success-dark-light",children:[l("span",{className:"absolute ltr:-left-11 rtl:-right-11 inset-y-0 text-white w-6 h-6 m-auto",children:n("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[l("path",{opacity:"0.5",d:"M5.31171 10.7615C8.23007 5.58716 9.68925 3 12 3C14.3107 3 15.7699 5.58716 18.6883 10.7615L19.0519 11.4063C21.4771 15.7061 22.6897 17.856 21.5937 19.428C20.4978 21 17.7864 21 12.3637 21H11.6363C6.21356 21 3.50217 21 2.40626 19.428C1.31034 17.856 2.52291 15.7061 4.94805 11.4063L5.31171 10.7615Z",stroke:"currentColor",strokeWidth:"1.5"}),l("path",{d:"M12 8V13",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),l("circle",{cx:"12",cy:"16",r:"1",fill:"currentColor"})]})}),n("span",{className:"ltr:mr-1 rtl:ml-1",children:[" Veuillez sélectionner le nombre total de candidat bénéficiaire d'une bourse. ",n("span",{className:"font-black",children:["interval [ 1 - ",S," ]"]}),"   "]})]}),l("form",{onSubmit:r=>{r.preventDefault(),ae(route("dashboard.store.list.beneficiary"))},children:n("div",{className:" mb-5 flex items-center justify-between ",children:[l("input",{type:"number",onChange:r=>re("dataBenificiary",g().slice(0,+r.target.value)),className:"form-input",placeholder:`Entrez un nombre maximum ${S}`,max:S}),l("button",{className:"mx-3 btn btn-success ",type:"submit",children:"Valider"})]})})]})})}),n("div",{className:"panel",children:[n("div",{className:"flex items-center justify-between mb-5",children:[l("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Résultat des candidatures"}),l("input",{type:"text",className:"form-input w-auto",placeholder:"Recherche rapide...",value:u,onChange:r=>le(r.target.value)})]}),n("div",{className:"flex items-center justify-between mb-5",children:[n("select",{className:"form-select w-auto mx-1 ",name:"region",id:"",onChange:r=>K(r.target.value),children:[l("option",{value:"",children:"sélectionner  une region..."}),E.map((r,f)=>n("option",{value:r.name_region,children:[r.name_region," "]}))," "]}),n("select",{className:"form-select w-auto mx-1",name:"province",id:"",onChange:r=>Q(r.target.value),children:[l("option",{value:"",children:"sélectionner  une province..."}),_.map((r,f)=>n("option",{value:r.name_province,children:[r.name_province," "]}))," "]}),n("select",{className:"form-select w-auto mx-1",name:"city",id:"",onChange:r=>U(r.target.value),children:[l("option",{value:"",children:"sélectionner  une ville..."}),P.map((r,f)=>n("option",{value:r.name_city,children:[r.name_city," "]}))," "]}),n("select",{className:"form-select w-auto mx-1",name:"school",id:"",onChange:r=>X(r.target.value),children:[l("option",{value:"",children:"sélectionner  une école..."}),$.map((r,f)=>n("option",{value:r.nom_fr,children:[r.nom_fr," "]}))," "]})]}),l("div",{className:"datatables",children:l(be,{striped:!0,className:"whitespace-nowrap table-striped",records:m,columns:[{accessor:"keys",title:"Rang"},{accessor:"name",title:"Nom"},{accessor:"region",title:"Region"},{accessor:"province",title:"Province"},{accessor:"city",title:"Ville"},{accessor:"school",title:"Lycée"},{accessor:"totalPoints",title:"Point",render:({totalPoints:r})=>n("span",{className:"text-white inline-block p-2 rounded hover:text-gray-100 mr-2 bg-danger ",children:[r," "]})},{accessor:"id",title:"Action",render:({id:r})=>l(ye,{href:route("dashboard.detail.scoring.candidate",Ne(r)),className:"text-white inline-block p-2 rounded hover:text-gray-100 mr-2 bg-blue-600 ",children:l(we,{})})}],totalRecords:s.length,recordsPerPage:c,page:x,onPageChange:r=>A(r),recordsPerPageOptions:R,onRecordsPerPageChange:Y,minHeight:200,paginationText:({from:r,to:f,totalRecords:N})=>`Showing  ${r} to ${f} of ${N} entries`})})]})]})})}export{Qe as default};