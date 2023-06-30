(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[43],{31982:function(e,t,n){Promise.resolve().then(n.bind(n,44323))},74724:function(e,t,n){"use strict";n.d(t,{S:function(){return s}});let s="http://30.183.153.109:5000"},44323:function(e,t,n){"use strict";n.r(t);var s=n(9268),a=n(56008),o=n(86006),r=n(72474),i=n(50157),l=n(3748),c=n(50645),d=n(5737),h=n(78635),u=n(99987),p=n(83192),x=n(58927),g=n(11437),f=n(90545),m=n(70900),j=n(35086),y=n(866),b=n(74724);let{Dragger:w}=i.default,P=(0,c.Z)(d.Z)(e=>{let{theme:t}=e;return{width:"33%",backgroundColor:"dark"===t.palette.mode?t.palette.background.level1:"#fff",...t.typography.body2,padding:t.spacing(1),textAlign:"center",borderRadius:4,color:t.vars.palette.text.secondary}}),S=["Knowledge Space Configuration","Choose a Datasource type","Setup the Datasource"],Z=[{type:"text",title:"Text",subTitle:"Fill your raw text"},{type:"webPage",title:"URL",subTitle:"Fetch the content of a URL"},{type:"file",title:"Document",subTitle:"Upload a document, document type can be PDF, CSV, Text, PowerPoint, Word, Markdown"}];t.default=()=>{let e=(0,a.useRouter)(),{mode:t}=(0,h.tv)(),[n,i]=(0,o.useState)(0),[c,C]=(0,o.useState)(""),[v,T]=(0,o.useState)([]),[k,_]=(0,o.useState)(!1),[N,O]=(0,o.useState)(""),[F,R]=(0,o.useState)(""),[W,D]=(0,o.useState)(""),[U,E]=(0,o.useState)(""),[L,z]=(0,o.useState)(""),[J,B]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(async function(){let e=await fetch("".concat(b.S,"/knowledge/space/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}),t=await e.json();t.success&&T(t.data)})()},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(d.Z,{sx:{display:"flex",justifyContent:"space-between"},className:"p-4",children:[(0,s.jsx)(d.Z,{sx:{fontSize:"30px",fontWeight:"bold"},children:"Knowledge Spaces"}),(0,s.jsx)(u.Z,{onClick:()=>_(!0),variant:"outlined",children:"+ New Knowledge Space"})]}),(0,s.jsx)("div",{className:"page-body p-4",children:v.length?(0,s.jsxs)(p.Z,{color:"info",variant:"soft",size:"lg",sx:{"& tbody tr: hover":{backgroundColor:"light"===t?"rgb(246, 246, 246)":"rgb(33, 33, 40)"},"& tbody tr: hover a":{textDecoration:"underline"}},children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Name"}),(0,s.jsx)("th",{children:"Vector"}),(0,s.jsx)("th",{children:"Owner"})]})}),(0,s.jsx)("tbody",{children:v.map(t=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("a",{style:{fontWeight:"bold"},href:"javascript:;",onClick:()=>e.push("/datastores/documents?name=".concat(t.name)),children:t.name})}),(0,s.jsx)("td",{children:(0,s.jsx)(x.Z,{variant:"soft",color:"neutral",sx:{fontWeight:300},children:t.vector_type})}),(0,s.jsx)("td",{children:(0,s.jsx)(x.Z,{variant:"soft",color:"neutral",sx:{fontWeight:300},children:t.owner})})]},t.id))})]}):(0,s.jsx)(s.Fragment,{})}),(0,s.jsx)(g.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center","z-index":1e3},open:k,onClose:()=>_(!1),children:(0,s.jsxs)(d.Z,{variant:"outlined",sx:{width:800,borderRadius:"md",p:3,boxShadow:"lg"},children:[(0,s.jsx)(f.Z,{sx:{width:"100%"},children:(0,s.jsx)(m.Z,{spacing:2,direction:"row",children:S.map((e,t)=>(0,s.jsx)(P,{sx:{fontWeight:n===t?"bold":""},children:e},e))})}),0===n?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f.Z,{sx:{margin:"30px auto"},children:["Knowledge Space Name:",(0,s.jsx)(j.ZP,{placeholder:"Please input the name",onChange:e=>O(e.target.value)})]}),(0,s.jsx)(u.Z,{variant:"outlined",onClick:async()=>{if(""===N){l.ZP.error("please input the name");return}let e=await fetch("".concat(b.S,"/knowledge/space/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:N,vector_type:"Chroma",owner:"keting",desc:"test1"})}),t=await e.json();if(t.success){l.ZP.success("success"),i(1);let e=await fetch("".concat(b.S,"/knowledge/space/list"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({})}),t=await e.json();t.success&&T(t.data)}else l.ZP.error(t.err_msg||"failed")},children:"Next"})]}):1===n?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(f.Z,{sx:{margin:"30px auto"},children:Z.map(e=>(0,s.jsxs)(d.Z,{sx:{boxSizing:"border-box",height:"80px",padding:"12px",display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid gray",borderRadius:"6px",marginBottom:"20px",cursor:"pointer"},onClick:()=>{C(e.type),i(2)},children:[(0,s.jsx)(d.Z,{sx:{fontSize:"20px",fontWeight:"bold"},children:e.title}),(0,s.jsx)(d.Z,{children:e.subTitle})]},e.type))})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(f.Z,{sx:{margin:"30px auto"},children:["Name:",(0,s.jsx)(j.ZP,{placeholder:"Please input the name",onChange:e=>D(e.target.value),sx:{marginBottom:"20px"}}),"webPage"===c?(0,s.jsxs)(s.Fragment,{children:["Web Page URL:",(0,s.jsx)(j.ZP,{placeholder:"Please input the Web Page URL",onChange:e=>R(e.target.value)})]}):"file"===c?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(w,{name:"file",multiple:!1,onChange(e){var t;if(console.log(e),0===e.fileList.length){B(null),D("");return}B(e.file.originFileObj),D(null===(t=e.file.originFileObj)||void 0===t?void 0:t.name)},children:[(0,s.jsx)("p",{className:"ant-upload-drag-icon",children:(0,s.jsx)(r.Z,{})}),(0,s.jsx)("p",{style:{color:"rgb(22, 108, 255)",fontSize:"20px"},children:"Select or Drop file"}),(0,s.jsx)("p",{className:"ant-upload-hint",style:{color:"rgb(22, 108, 255)"},children:"PDF, PowerPoint, Excel, Word, Text, Markdown,"})]})}):(0,s.jsxs)(s.Fragment,{children:["Text Source(Optional):",(0,s.jsx)(j.ZP,{placeholder:"Please input the text source",onChange:e=>E(e.target.value),sx:{marginBottom:"20px"}}),"Text:",(0,s.jsx)(y.Z,{onChange:e=>z(e.target.value),minRows:4,sx:{marginBottom:"20px"}})]})]}),(0,s.jsx)(u.Z,{onClick:async()=>{if(""===W){l.ZP.error("Please input the name");return}if("webPage"===c){if(""===F){l.ZP.error("Please input the Web Page URL");return}let e=await fetch("".concat(b.S,"/knowledge/").concat(N,"/document/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_name:W,content:F,doc_type:"URL"})}),t=await e.json();t.success?(l.ZP.success("success"),_(!1)):l.ZP.error(t.err_msg||"failed")}else if("file"===c){if(!J){l.ZP.error("Please select a file");return}let e=new FormData;e.append("doc_name",W),e.append("doc_file",J),e.append("doc_type","DOCUMENT");let t=await fetch("".concat(b.S,"/knowledge/").concat(N,"/document/upload"),{method:"POST",body:e}),n=await t.json();n.success?(l.ZP.success("success"),_(!1)):l.ZP.error(n.err_msg||"failed")}else{if(""===L){l.ZP.error("Please input the text");return}let e=await fetch("".concat(b.S,"/knowledge/").concat(N,"/document/add"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({doc_name:W,source:U,content:L,doc_type:"TEXT"})}),t=await e.json();t.success?(l.ZP.success("success"),_(!1)):l.ZP.error(t.err_msg||"failed")}},children:"Finish"})]})]})})]})}}},function(e){e.O(0,[448,22,599,86,952,261,777,611,253,769,744],function(){return e(e.s=31982)}),_N_E=e.O()}]);