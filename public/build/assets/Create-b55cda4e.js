import{c as W,r as i,s as z,j as o}from"./main-7817f3b1.js";import{D as G}from"./DefaultLayout-c44391f7.js";import J from"./ScoringValue-0f3d7589.js";import L from"./ScoringChampOpen-0f95ed6b.js";import{u as U}from"./useDispatch-d01b19de.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./slicedToArray-faa72b39.js";import"./index-4d501b15.js";import"./index.esm-fffe3f01.js";import"./index-d410f391.js";import"./transition-35f1fbff.js";import"./keyboard-bc2fdc5c.js";import"./index.esm-d48e620a.js";import"./react-select.esm-b3a586dc.js";import"./floating-ui.dom.browser.min-71618afd.js";const le=({fieldClose:p,fieldOpen:f,idChamp:h,cities:m,ecoles:S,situation__socials:g,filiere_bacs:v,logements:M,orphelinats:y,pays:Y,provinces:l,regions:F,information__pluses:c,handicapType:N,champScoring:b})=>{W();const[O,t]=i.useState(),[P,a]=i.useState(),n=+h;i.useState([]),i.useState(m),i.useState(l),i.useState(m),i.useState(F),i.useState(l),i.useState(c);const[e,q]=i.useState(b),B=U();i.useEffect(()=>{B(z("Create"))}),i.useState(1);const s=u=>u.filter(r=>r.id===n).map(r=>r.value)[0],C=u=>u.filter(r=>r.id===n).map(r=>r.name)[0],D=u=>u.filter(r=>r.id===n).map(r=>r.type)[0],j=C(e),k=[{id:1,name:"2020",status:!0},{id:2,name:"2021",status:!0},{id:3,name:"2022",status:!0},{id:4,name:"2023",status:!0}],A=[{id:1,name:"25%",status:!0},{id:2,name:"50%",status:!0},{id:3,name:"75%",status:!0},{id:4,name:"100%",status:!0}],E=[{id:1,name:"Mon pére",value:"Mon pere",status:!0},{id:2,name:"Ma mére",value:"Ma mere",status:!0}],T=[{id:1,name:"Oui",value:"yes",status:!0},{id:2,name:"Non",value:"no",status:!0}],V=[{id:1,name:"Oui",value:"trueFB",status:!0},{id:2,name:"Non",value:"falseFB",status:!0}],x=[{id:1,name:"Oui",value:"trueMB",status:!0},{id:2,name:"Non",value:"falseMB",status:!0}],R=[{id:1,name:"Masculin",status:!0},{id:2,name:"Féminin",status:!0}],w=[{id:1,name:"Oui",value:"Oui",status:!0},{id:2,name:"Non",value:"Nom",status:!0}],H=[{id:1,name:"Oui",value:"trueF",status:!0},{id:2,name:"Non",value:"falseF",status:!0},{id:3,name:"Retraité",value:"retraite",status:!0}],I=[{id:1,name:"Oui",value:"trueM",status:!0},{id:2,name:"Non",value:"falseM",status:!0},{id:3,name:"Retraité",value:"retraiteM",status:!0}];return i.useEffect(()=>{(async()=>{s(e)==="socialSituation"?(t(g),a("situation social")):s(e)==="housing"?(t(M),a("logement")):s(e)==="orphelinType"?(t(y),a("orphelin")):s(e)==="handicapType"?(t(N),a("type d'handicap")):s(e)==="bacStream"?(t(v),a("filiére du bac")):s(e)==="schoolName"?(t(S),a("lycée")):s(e)==="handicapSituation"?(t(x),a("Situation d'handicap")):s(e)==="parentalCare"?(t(E),a("Prise en charge par le parent")):s(e)==="handicapPercentage"?(t(A),a("Pourcentage d'handicap")):s(e)==="workSituationFather"?(t(H),a("Votre pére travail")):s(e)==="workSituationMother"?(t(I),a("Votre pére travail")):s(e)==="genre"?(t(R),a("genre")):s(e)==="supportByAnEPS"?(t(w),a("Prise en charge par un EPS")):s(e)==="situationBankFather"?(t(T),a("Situation bancaire du pére")):s(e)==="situationBankMother"?(t(V),a("Situation bancaire du mére")):s(e)==="yearBac"?(t(k),a("Année du bac")):s(e)==="fundationInfo"&&(t(c),a("Comment avez vous connu JADARA FOOUNDATION"))})()},[]),o(G,{children:D(e)?o(J,{dataValue:O,title:P,id:n,fieldClose:p}):o(L,{id:n,fieldOpen:f,titleField:j})})};export{le as default};
