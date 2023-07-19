import{r as l,n as N,s as le,j as p,a as W}from"./main-7817f3b1.js";/* empty css                        */import"./react-apexcharts.min-ca2222fa.js";import{D as oe}from"./DefaultLayout-c44391f7.js";import se from"./Candidate-8b17e8eb.js";import ie from"./Partner-7d160552.js";import{l as F,c as Z,p as ue,j as Q,L as U,y as B,s as H,o as L,D as q,f as ee,u as j,A as _,N as z,e as ce,g as P,I as R,b as T,t as de}from"./keyboard-bc2fdc5c.js";import{u as pe}from"./useDispatch-d01b19de.js";import"./index-4d501b15.js";import"./App-6286d217.js";import"./useSelector-73b17a09.js";import"./slicedToArray-faa72b39.js";import"./index.esm-fffe3f01.js";import"./index-d410f391.js";function V(e){var t;if(e.type)return e.type;let r=(t=e.as)!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function be(e,t){let[r,n]=l.useState(()=>V(e));return F(()=>{n(V(e))},[e.type,e.as]),F(()=>{r||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&n("button")},[r,t]),r}function fe({onFocus:e}){let[t,r]=l.useState(!0);return t?N.createElement(Z,{as:"button",type:"button",features:ue.Focusable,onFocus:n=>{n.preventDefault();let a,o=50;function i(){if(o--<=0){a&&cancelAnimationFrame(a);return}if(e()){r(!1),cancelAnimationFrame(a);return}a=requestAnimationFrame(i)}a=requestAnimationFrame(i)}}):null}const te=l.createContext(null);function me(){return{groups:new Map,get(e,t){var r;let n=this.groups.get(e);n||(n=new Map,this.groups.set(e,n));let a=(r=n.get(t))!=null?r:0;n.set(t,a+1);let o=Array.from(n.keys()).indexOf(t);function i(){let v=n.get(t);v>1?n.set(t,v-1):n.delete(t)}return[o,i]}}}function xe({children:e}){let t=l.useRef(me());return l.createElement(te.Provider,{value:t},e)}function re(e){let t=l.useContext(te);if(!t)throw new Error("You must wrap your component in a <StableCollection>");let r=he(),[n,a]=t.current.get(e,r);return l.useEffect(()=>a,[]),n}function he(){var e,t,r;let n=(r=(t=(e=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)==null?void 0:e.ReactCurrentOwner)==null?void 0:t.current)!=null?r:null;if(!n)return Symbol();let a=[],o=n;for(;o;)a.push(o.index),o=o.return;return"$."+a.join(".")}var ve=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(ve||{}),ge=(e=>(e[e.Less=-1]="Less",e[e.Equal=0]="Equal",e[e.Greater=1]="Greater",e))(ge||{}),ye=(e=>(e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e))(ye||{});let Pe={[0](e,t){var r;let n=_(e.tabs,d=>d.current),a=_(e.panels,d=>d.current),o=n.filter(d=>{var y;return!((y=d.current)!=null&&y.hasAttribute("disabled"))}),i={...e,tabs:n,panels:a};if(t.index<0||t.index>n.length-1){let d=j(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,[0]:()=>j(Math.sign(t.index),{[-1]:()=>0,[0]:()=>0,[1]:()=>1}),[1]:()=>0});return o.length===0?i:{...i,selectedIndex:j(d,{[0]:()=>n.indexOf(o[0]),[1]:()=>n.indexOf(o[o.length-1])})}}let v=n.slice(0,t.index),g=[...n.slice(t.index),...v].find(d=>o.includes(d));if(!g)return i;let m=(r=n.indexOf(g))!=null?r:e.selectedIndex;return m===-1&&(m=e.selectedIndex),{...i,selectedIndex:m}},[1](e,t){var r;if(e.tabs.includes(t.tab))return e;let n=e.tabs[e.selectedIndex],a=_([...e.tabs,t.tab],i=>i.current),o=(r=a.indexOf(n))!=null?r:e.selectedIndex;return o===-1&&(o=e.selectedIndex),{...e,tabs:a,selectedIndex:o}},[2](e,t){return{...e,tabs:e.tabs.filter(r=>r!==t.tab)}},[3](e,t){return e.panels.includes(t.panel)?e:{...e,panels:_([...e.panels,t.panel],r=>r.current)}},[4](e,t){return{...e,panels:e.panels.filter(r=>r!==t.panel)}}},Y=l.createContext(null);Y.displayName="TabsDataContext";function D(e){let t=l.useContext(Y);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,D),r}return t}let K=l.createContext(null);K.displayName="TabsActionsContext";function X(e){let t=l.useContext(K);if(t===null){let r=new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,X),r}return t}function Te(e,t){return j(t.type,Pe,e,t)}let Ie=l.Fragment;function Ee(e,t){let{defaultIndex:r=0,vertical:n=!1,manual:a=!1,onChange:o,selectedIndex:i=null,...v}=e;const g=n?"vertical":"horizontal",m=a?"manual":"auto";let d=i!==null,y=B(t),[c,h]=l.useReducer(Te,{selectedIndex:i??r,tabs:[],panels:[]}),b=l.useMemo(()=>({selectedIndex:c.selectedIndex}),[c.selectedIndex]),S=H(o||(()=>{})),A=H(c.tabs),f=l.useMemo(()=>({orientation:g,activation:m,...c}),[g,m,c]),x=L(u=>(h({type:1,tab:u}),()=>h({type:2,tab:u}))),I=L(u=>(h({type:3,panel:u}),()=>h({type:4,panel:u}))),E=L(u=>{k.current!==u&&S.current(u),d||h({type:0,index:u})}),k=H(d?e.selectedIndex:c.selectedIndex),M=l.useMemo(()=>({registerTab:x,registerPanel:I,change:E}),[]);F(()=>{h({type:0,index:i??r})},[i]),F(()=>{if(k.current===void 0||c.tabs.length<=0)return;let u=_(c.tabs,C=>C.current);u.some((C,s)=>c.tabs[s]!==C)&&E(u.indexOf(c.tabs[k.current]))});let O={ref:y};return N.createElement(xe,null,N.createElement(K.Provider,{value:M},N.createElement(Y.Provider,{value:f},f.tabs.length<=0&&N.createElement(fe,{onFocus:()=>{var u,C;for(let s of A.current)if(((u=s.current)==null?void 0:u.tabIndex)===0)return(C=s.current)==null||C.focus(),!0;return!1}}),q({ourProps:O,theirProps:v,slot:b,defaultTag:Ie,name:"Tabs"}))))}let ke="div";function we(e,t){let{orientation:r,selectedIndex:n}=D("Tab.List"),a=B(t);return q({ourProps:{ref:a,role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:n},defaultTag:ke,name:"Tabs.List"})}let $e="button";function Ce(e,t){var r,n;let a=ee(),{id:o=`headlessui-tabs-tab-${a}`,...i}=e,{orientation:v,activation:g,selectedIndex:m,tabs:d,panels:y}=D("Tab"),c=X("Tab"),h=D("Tab"),b=l.useRef(null),S=B(b,t);F(()=>c.registerTab(b),[c,b]);let A=re("tabs"),f=d.indexOf(b);f===-1&&(f=A);let x=f===m,I=L(s=>{var w;let G=s();if(G===z.Success&&g==="auto"){let ne=(w=ce(b))==null?void 0:w.activeElement,J=h.tabs.findIndex(ae=>ae.current===ne);J!==-1&&c.change(J)}return G}),E=L(s=>{let w=d.map(G=>G.current).filter(Boolean);if(s.key===P.Space||s.key===P.Enter){s.preventDefault(),s.stopPropagation(),c.change(f);return}switch(s.key){case P.Home:case P.PageUp:return s.preventDefault(),s.stopPropagation(),I(()=>R(w,T.First));case P.End:case P.PageDown:return s.preventDefault(),s.stopPropagation(),I(()=>R(w,T.Last))}if(I(()=>j(v,{vertical(){return s.key===P.ArrowUp?R(w,T.Previous|T.WrapAround):s.key===P.ArrowDown?R(w,T.Next|T.WrapAround):z.Error},horizontal(){return s.key===P.ArrowLeft?R(w,T.Previous|T.WrapAround):s.key===P.ArrowRight?R(w,T.Next|T.WrapAround):z.Error}}))===z.Success)return s.preventDefault()}),k=l.useRef(!1),M=L(()=>{var s;k.current||(k.current=!0,(s=b.current)==null||s.focus(),c.change(f),de(()=>{k.current=!1}))}),O=L(s=>{s.preventDefault()}),u=l.useMemo(()=>({selected:x}),[x]),C={ref:S,onKeyDown:E,onMouseDown:O,onClick:M,id:o,role:"tab",type:be(e,b),"aria-controls":(n=(r=y[f])==null?void 0:r.current)==null?void 0:n.id,"aria-selected":x,tabIndex:x?0:-1};return q({ourProps:C,theirProps:i,slot:u,defaultTag:$e,name:"Tabs.Tab"})}let Se="div";function Ae(e,t){let{selectedIndex:r}=D("Tab.Panels"),n=B(t),a=l.useMemo(()=>({selectedIndex:r}),[r]);return q({ourProps:{ref:n},theirProps:e,slot:a,defaultTag:Se,name:"Tabs.Panels"})}let Le="div",Re=Q.RenderStrategy|Q.Static;function Ne(e,t){var r,n,a,o;let i=ee(),{id:v=`headlessui-tabs-panel-${i}`,tabIndex:g=0,...m}=e,{selectedIndex:d,tabs:y,panels:c}=D("Tab.Panel"),h=X("Tab.Panel"),b=l.useRef(null),S=B(b,t);F(()=>h.registerPanel(b),[h,b]);let A=re("panels"),f=c.indexOf(b);f===-1&&(f=A);let x=f===d,I=l.useMemo(()=>({selected:x}),[x]),E={ref:S,id:v,role:"tabpanel","aria-labelledby":(n=(r=y[f])==null?void 0:r.current)==null?void 0:n.id,tabIndex:x?g:-1};return!x&&((a=m.unmount)==null||a)&&!((o=m.static)!=null&&o)?N.createElement(Z,{as:"span",...E}):q({ourProps:E,theirProps:m,slot:I,defaultTag:Le,features:Re,visible:x,name:"Tabs.Panel"})}let Fe=U(Ce),De=U(Ee),Me=U(we),Oe=U(Ae),_e=U(Ne),$=Object.assign(Fe,{Group:De,List:Me,Panels:Oe,Panel:_e});function Ze({candidat:e,candidateValidate:t,candidateInValidate:r,totalFinish:n,totalPaused:a,totalInscris:o,inscris:i,province:v,partenaire:g,partnerNoAccount:m,conventionF:d,conventionP:y}){const c=pe();l.useEffect(()=>{c(le("Tabs"))}),l.useState([]);const h=t,b=r,S=n,A=a,f=o,x=i,I=v,E=g,k=m,M=d,O=y;return p(oe,{children:W("div",{className:"mb-5 panel w-100",children:[p("div",{className:"flex justify-between",children:p("h3",{className:"text-xl font-bold mb-5",children:"Les statistiques de l'application"})}),W($.Group,{children:[W($.List,{className:"mt-3 flex flex-wrap border-b border-white-light dark:border-[#191e3a]",children:[p($,{as:l.Fragment,children:({selected:u})=>p("button",{className:`${u?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`,children:"Candidature"})}),p($,{as:l.Fragment,children:({selected:u})=>p("button",{className:`${u?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`,children:"Partenaire & Convention"})}),p($,{as:l.Fragment,children:({selected:u})=>p("button",{className:`${u?"!border-white-light !border-b-white  text-primary !outline-none dark:!border-[#191e3a] dark:!border-b-black ":""}
                                                    dark:hover:border-b-black' -mb-[1px] block border border-transparent p-3.5 py-2 hover:text-primary`,children:"Module à faire"})})]}),W($.Panels,{children:[p($.Panel,{children:p("div",{className:"active pt-5",children:p(se,{prop1:h,prop2:b,prop3:S,prop4:A,prop5:f,prop6:x,prop7:I})})}),p($.Panel,{children:p("div",{className:" pt-5",children:p(ie,{propPartner:E,propContact:k,propConventionF:M,propConventionP:O})})}),p($.Panel,{children:p("div",{className:"pt-5",children:p("p",{children:"En cours d'intégration"})})})]})]})]})})}export{Ze as default};
