(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8439:function(e,t,i){Promise.resolve().then(i.bind(i,7648)),Promise.resolve().then(i.bind(i,6580)),Promise.resolve().then(i.bind(i,2132)),Promise.resolve().then(i.t.bind(i,1749,23)),Promise.resolve().then(i.t.bind(i,5250,23)),Promise.resolve().then(i.bind(i,7141)),Promise.resolve().then(i.bind(i,6586)),Promise.resolve().then(i.bind(i,7825)),Promise.resolve().then(i.bind(i,8124)),Promise.resolve().then(i.bind(i,6146)),Promise.resolve().then(i.bind(i,9767)),Promise.resolve().then(i.bind(i,9605)),Promise.resolve().then(i.bind(i,1280)),Promise.resolve().then(i.bind(i,5589)),Promise.resolve().then(i.bind(i,4662)),Promise.resolve().then(i.bind(i,7782)),Promise.resolve().then(i.bind(i,9426)),Promise.resolve().then(i.bind(i,3948)),Promise.resolve().then(i.bind(i,3815)),Promise.resolve().then(i.bind(i,4434)),Promise.resolve().then(i.bind(i,8786)),Promise.resolve().then(i.bind(i,6908)),Promise.resolve().then(i.bind(i,5399)),Promise.resolve().then(i.bind(i,5397)),Promise.resolve().then(i.bind(i,9044)),Promise.resolve().then(i.bind(i,495)),Promise.resolve().then(i.bind(i,6780)),Promise.resolve().then(i.bind(i,474)),Promise.resolve().then(i.bind(i,3143)),Promise.resolve().then(i.bind(i,7139)),Promise.resolve().then(i.bind(i,7320)),Promise.resolve().then(i.bind(i,3894)),Promise.resolve().then(i.bind(i,7875)),Promise.resolve().then(i.bind(i,1154)),Promise.resolve().then(i.bind(i,3612)),Promise.resolve().then(i.bind(i,3318)),Promise.resolve().then(i.bind(i,9501)),Promise.resolve().then(i.bind(i,7355)),Promise.resolve().then(i.bind(i,507)),Promise.resolve().then(i.bind(i,7186)),Promise.resolve().then(i.bind(i,7388)),Promise.resolve().then(i.bind(i,5627)),Promise.resolve().then(i.bind(i,6834)),Promise.resolve().then(i.bind(i,7706)),Promise.resolve().then(i.bind(i,328)),Promise.resolve().then(i.bind(i,9275)),Promise.resolve().then(i.bind(i,5781)),Promise.resolve().then(i.bind(i,1110)),Promise.resolve().then(i.bind(i,772)),Promise.resolve().then(i.bind(i,610)),Promise.resolve().then(i.bind(i,3796)),Promise.resolve().then(i.bind(i,1657)),Promise.resolve().then(i.bind(i,2393)),Promise.resolve().then(i.bind(i,7828)),Promise.resolve().then(i.bind(i,7490)),Promise.resolve().then(i.bind(i,8196)),Promise.resolve().then(i.bind(i,961)),Promise.resolve().then(i.bind(i,729)),Promise.resolve().then(i.bind(i,3059)),Promise.resolve().then(i.bind(i,2495)),Promise.resolve().then(i.bind(i,8459)),Promise.resolve().then(i.bind(i,5633)),Promise.resolve().then(i.bind(i,6886)),Promise.resolve().then(i.bind(i,7069)),Promise.resolve().then(i.bind(i,9760)),Promise.resolve().then(i.bind(i,2882)),Promise.resolve().then(i.bind(i,2433)),Promise.resolve().then(i.bind(i,8636)),Promise.resolve().then(i.bind(i,1171)),Promise.resolve().then(i.bind(i,855)),Promise.resolve().then(i.bind(i,5187)),Promise.resolve().then(i.bind(i,3449)),Promise.resolve().then(i.bind(i,8203)),Promise.resolve().then(i.bind(i,8850)),Promise.resolve().then(i.bind(i,9483)),Promise.resolve().then(i.bind(i,4936)),Promise.resolve().then(i.bind(i,1878)),Promise.resolve().then(i.bind(i,2430)),Promise.resolve().then(i.bind(i,4473)),Promise.resolve().then(i.bind(i,1311)),Promise.resolve().then(i.bind(i,4128)),Promise.resolve().then(i.bind(i,8646)),Promise.resolve().then(i.bind(i,5607)),Promise.resolve().then(i.bind(i,8753))},7648:function(e,t,i){"use strict";i.r(t);var r=i(7437),s=i(2862),A=i.n(s);t.default=e=>{let{animationPath:t,width:i}=e;return(0,r.jsx)(A(),{loop:!0,autoplay:!0,animationData:t,style:{width:"95%"}})}},6580:function(e,t,i){"use strict";i.r(t);var r=i(7437),s=i(2265);t.default=e=>{let{children:t,identifier:i}=e;return(0,s.useEffect)(()=>{let e=document.querySelector(".glow-container-".concat(i)),t=document.querySelectorAll(".glow-card-".concat(i)),r={proximity:40,spread:80,blur:12,gap:32,vertical:!1,opacity:0},s=e=>{for(let i of t){let t=i.getBoundingClientRect();(null==e?void 0:e.x)>t.left-r.proximity&&(null==e?void 0:e.x)<t.left+t.width+r.proximity&&(null==e?void 0:e.y)>t.top-r.proximity&&(null==e?void 0:e.y)<t.top+t.height+r.proximity?i.style.setProperty("--active",1):i.style.setProperty("--active",r.opacity);let s=[t.left+.5*t.width,t.top+.5*t.height],A=180*Math.atan2((null==e?void 0:e.y)-s[1],(null==e?void 0:e.x)-s[0])/Math.PI;A=A<0?A+360:A,i.style.setProperty("--start",A+90)}};return document.body.addEventListener("pointermove",s),e.style.setProperty("--gap",r.gap),e.style.setProperty("--blur",r.blur),e.style.setProperty("--spread",r.spread),e.style.setProperty("--direction",r.vertical?"column":"row"),s(),()=>{document.body.removeEventListener("pointermove",s)}},[i]),(0,r.jsx)("div",{className:"glow-container-".concat(i," glow-container"),children:(0,r.jsxs)("article",{className:"glow-card glow-card-".concat(i," h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full"),children:[(0,r.jsx)("div",{className:"glows"}),t]})})}},2132:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return a}});var r=i(7437),s=i(5986),A=i(2265),n=i(7566),d=i(6123),a=function(){let[e,t]=(0,A.useState)({name:"",email:"",message:""}),[i,a]=(0,A.useState)({email:!1,required:!1}),h=()=>{e.email&&e.message&&e.name&&a({...i,required:!1})},l=async r=>{if(r.preventDefault(),e.email&&e.message&&e.name){if(i.email)return;a({...i,required:!1})}else{a({...i,required:!0});return}try{let i=await s.ZP.send("service_4f1xth7","template_15jb7la",e,{publicKey:"inrhlDSjhQPGBWx2r"});200===i.status&&(d.toast.success("Message sent successfully!"),t({name:"",email:"",message:""}))}catch(e){d.toast.error((null==e?void 0:e.text)||e)}};return(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("p",{className:"font-medium mb-5 text-[#16f2b3] text-xl uppercase",children:"Contact with me"}),(0,r.jsxs)("div",{className:"max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5",children:[(0,r.jsx)("p",{className:"text-sm text-[#d3d8e8]",children:"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}),(0,r.jsxs)("div",{className:"mt-6 flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Name: "}),(0,r.jsx)("input",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",type:"text",maxLength:"100",required:!0,onChange:i=>t({...e,name:i.target.value}),onBlur:h,value:e.name})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Email: "}),(0,r.jsx)("input",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",type:"email",maxLength:"100",required:!0,value:e.email,onChange:i=>t({...e,email:i.target.value}),onBlur:()=>{var t;h(),a({...i,email:(t=e.email,!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t))})}}),i.email&&(0,r.jsx)("p",{className:"text-sm text-red-400",children:"Please provide a valid email!"})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,r.jsx)("label",{className:"text-base",children:"Your Message: "}),(0,r.jsx)("textarea",{className:"bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2",maxLength:"500",name:"message",required:!0,onChange:i=>t({...e,message:i.target.value}),onBlur:h,rows:"4",value:e.message})]}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[i.required&&(0,r.jsx)("p",{className:"text-sm text-red-400",children:"Email and Message are required!"}),(0,r.jsxs)("button",{className:"flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold",role:"button",onClick:l,children:[(0,r.jsx)("span",{children:"Send Message"}),(0,r.jsx)(n.hlH,{className:"mt-1",size:18})]})]})]})]})]})}},6586:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/ayla.19ea4d31.jpg",height:4501,width:4501,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqYP/xAAdEAABAgcAAAAAAAAAAAAAAAACAQMABAURISIj/9oACAEBAAE/AGznEqTqGPC2mY//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",blurWidth:8,blurHeight:8}},7825:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/crefin.7d465e7f.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQP/2gAMAwEAAhADEAAAAKkCf//EABsQAAEEAwAAAAAAAAAAAAAAABMAAxJRIzFB/9oACAEBAAE/AMxJF25XKX//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAwEBPwCP/9k=",blurWidth:8,blurHeight:5}},8124:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/real-estate.aafb3b94.jpg",height:2e3,width:3e3,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAApIZ//8QAGxAAAQQDAAAAAAAAAAAAAAAAEgECFEEABBX/2gAIAQEAAT8ALZ6QyXBLaiNoErP/xAAWEQADAAAAAAAAAAAAAAAAAAAAAkH/2gAIAQIBAT8AeH//xAAVEQEBAAAAAAAAAAAAAAAAAAAAAv/aAAgBAwEBPwCX/9k=",blurWidth:8,blurHeight:5}},6146:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/travel.374bd821.jpg",height:4500,width:4500,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAAqIP/xAAcEAABBAMBAAAAAAAAAAAAAAABAgMRIQASYZH/2gAIAQEAAT8AKni5YhB7ewPkZ//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",blurWidth:8,blurHeight:8}},9767:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/adobe-xd.ea44eb0c.svg",height:50,width:50,blurWidth:0,blurHeight:0}},9605:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/adobeaudition.6ac54c6a.svg",height:256,width:256,blurWidth:0,blurHeight:0}},1280:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/after-effects.a9c72355.svg",height:50,width:50,blurWidth:0,blurHeight:0}},5589:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/angular.4bea2a47.svg",height:272,width:256,blurWidth:0,blurHeight:0}},4662:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/aws.ac2256dd.svg",height:153,width:256,blurWidth:0,blurHeight:0}},7782:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/azure.56a922c9.svg",height:244,width:256,blurWidth:0,blurHeight:0}},9426:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/blender.b6202fd4.svg",height:219,width:256,blurWidth:0,blurHeight:0}},3948:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/bootstrap.c61c87af.svg",height:256,width:256,blurWidth:0,blurHeight:0}},3815:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/bulma.ce338197.svg",height:373,width:256,blurWidth:0,blurHeight:0}},4434:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/c.8cdb6389.svg",height:288,width:256,blurWidth:0,blurHeight:0}},8786:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/canva.85fed86e.svg",height:44,width:44,blurWidth:0,blurHeight:0}},6908:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/capacitorjs.cb203835.svg",height:256,width:256,blurWidth:0,blurHeight:0}},5399:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/coffeescript.22e2f988.svg",height:206,width:256,blurWidth:0,blurHeight:0}},5397:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/cplusplus.d8945732.svg",height:288,width:256,blurWidth:0,blurHeight:0}},9044:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/csharp.39ee24d6.svg",height:288,width:256,blurWidth:0,blurHeight:0}},495:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/css.18a757c4.svg",height:290,width:256,blurWidth:0,blurHeight:0}},6780:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/dart.de9a7e9f.svg",height:256,width:256,blurWidth:0,blurHeight:0}},474:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/deno.7465a370.svg",height:256,width:256,blurWidth:0,blurHeight:0}},3143:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/django.47c79307.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7139:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/docker.1fd925da.svg",height:50,width:50,blurWidth:0,blurHeight:0}},7320:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/fastify.f1401f4e.svg",height:165,width:256,blurWidth:0,blurHeight:0}},3894:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/figma.1029bdd0.svg",height:384,width:256,blurWidth:0,blurHeight:0}},7875:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/firebase.00a078b9.svg",height:351,width:256,blurWidth:0,blurHeight:0}},1154:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/flutter.4975c7c9.svg",height:299,width:256,blurWidth:0,blurHeight:0}},3612:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/gcp.10375a69.svg",height:77,width:95,blurWidth:0,blurHeight:0}},3318:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/gimp.7c585e39.svg",height:256,width:296,blurWidth:0,blurHeight:0}},9501:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/git.50ce77c0.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7355:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/go.2398d0ba.svg",height:192,width:512,blurWidth:0,blurHeight:0}},507:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/graphql.1445d48c.svg",height:288,width:256,blurWidth:0,blurHeight:0}},7186:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/haxe.193d4b30.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7388:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/html.017306fd.svg",height:290,width:256,blurWidth:0,blurHeight:0}},5627:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/illustrator.82356208.svg",height:50,width:50,blurWidth:0,blurHeight:0}},6834:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/ionic.2515af68.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7706:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/java.28962703.svg",height:346,width:256,blurWidth:0,blurHeight:0}},328:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/javascript.b181c09e.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9275:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/julia.e82a371c.svg",height:330,width:512,blurWidth:0,blurHeight:0}},5781:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/kotlin.de8eaa2b.svg",height:256,width:256,blurWidth:0,blurHeight:0}},1110:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/lightroom.dbe8fbea.svg",height:256,width:256,blurWidth:0,blurHeight:0}},772:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/markdown.d252a99f.svg",height:158,width:256,blurWidth:0,blurHeight:0}},610:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/materialui.f63da241.svg",height:204,width:256,blurWidth:0,blurHeight:0}},3796:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/matlab.b345c227.svg",height:234,width:257,blurWidth:0,blurHeight:0}},1657:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/memsql.fe5acef9.svg",height:184,width:256,blurWidth:0,blurHeight:0}},2393:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/microsoftoffice.c275d93f.svg",height:326,width:256,blurWidth:0,blurHeight:0}},7828:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/mongoDB.bdbfe282.svg",height:249,width:112,blurWidth:0,blurHeight:0}},7490:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/mysql.f25ccd48.svg",height:252,width:256,blurWidth:0,blurHeight:0}},8196:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/nextJS.5d08e3a4.svg",height:256,width:256,blurWidth:0,blurHeight:0}},961:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/nginx.a985ae7e.svg",height:291,width:256,blurWidth:0,blurHeight:0}},729:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/numpy.3c09ea44.svg",height:274,width:256,blurWidth:0,blurHeight:0}},3059:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/nuxtJS.b3618890.svg",height:191,width:256,blurWidth:0,blurHeight:0}},2495:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/opencv.777de634.svg",height:238,width:256,blurWidth:0,blurHeight:0}},8459:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/photoshop.11ddf3ae.svg",height:50,width:50,blurWidth:0,blurHeight:0}},5633:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/php.92f5d4c3.svg",height:258,width:512,blurWidth:0,blurHeight:0}},6886:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/picsart.8fc4adf4.svg",height:256,width:256,blurWidth:0,blurHeight:0}},7069:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/postgresql.57f0feb0.svg",height:264,width:256,blurWidth:0,blurHeight:0}},9760:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/premierepro.0450e213.svg",height:256,width:256,blurWidth:0,blurHeight:0}},2882:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/python.54da882d.svg",height:255,width:256,blurWidth:0,blurHeight:0}},2433:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/pytorch.e649f8fc.svg",height:310,width:256,blurWidth:0,blurHeight:0}},8636:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/react.63480b3c.svg",height:228,width:256,blurWidth:0,blurHeight:0}},1171:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/ruby.734ec281.svg",height:255,width:256,blurWidth:0,blurHeight:0}},855:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/selenium.d21aeb58.svg",height:269,width:256,blurWidth:0,blurHeight:0}},5187:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/sketch.c9e20e22.svg",height:232,width:256,blurWidth:0,blurHeight:0}},3449:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/strapi.2c93db42.svg",height:252,width:256,blurWidth:0,blurHeight:0}},8203:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/svelte.6406f9ac.svg",height:308,width:256,blurWidth:0,blurHeight:0}},8850:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/swift.6006c4be.svg",height:256,width:256,blurWidth:0,blurHeight:0}},9483:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/tailwind.0327ce72.svg",height:154,width:256,blurWidth:0,blurHeight:0}},4936:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/tensorflow.65f6ca51.svg",height:287,width:256,blurWidth:0,blurHeight:0}},1878:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/typescript.e2083e1d.svg",height:256,width:256,blurWidth:0,blurHeight:0}},2430:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/unity.9841984c.svg",height:256,width:256,blurWidth:0,blurHeight:0}},4473:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/vitejs.5da26425.svg",height:257,width:256,blurWidth:0,blurHeight:0}},1311:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/vue.763d0be3.svg",height:221,width:256,blurWidth:0,blurHeight:0}},4128:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/vuetifyjs.f11a1e4c.svg",height:293,width:256,blurWidth:0,blurHeight:0}},8646:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/webix.9113f93c.svg",height:213,width:256,blurWidth:0,blurHeight:0}},5607:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/wolframalpha.6aeeed81.svg",height:256,width:256,blurWidth:0,blurHeight:0}},8753:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/wordpress.d1453069.svg",height:255,width:256,blurWidth:0,blurHeight:0}}},function(e){e.O(0,[465,705,330,858,971,69,744],function(){return e(e.s=8439)}),_N_E=e.O()}]);