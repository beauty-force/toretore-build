import{C as M,S as T,F as D,f as I,o as L,N as O,V as S,r as N,a as z,b as B,v as j,I as E,g as F,c as R,_ as X,T as H}from"./toastify.363ece78.js";import{L as P,h as d,r as i,o as u,c as x,a as o,w as n,b as t,t as b,i as y,g as U,f as q,k as A}from"./app.e21d12b2.js";import{_ as K}from"./_plugin-vue_export-helper.cdc0426e.js";const W={components:{Category:M,Sidebar:T,Footer:D,TransitionRoot:I,TransitionChild:L,Dialog:O,DialogOverlay:S,XMarkIcon:N,ChevronLeftIcon:z,Bars3Icon:B,Link:P,Menu:j,MenuButton:E,MenuItems:F,MenuItem:R,Logo:X},data(){return{sidebarOpened:!1,isDialogMessage:!1,dialogMessage:"",dialogTitle:"",user:{},point_value:0,dp_value:0,point_link:route("user.point"),hide_cat_bar:"",gacha_button:{}}},mounted(){this.user=d().props.value.auth.user,this.user&&(this.point_value=this.user.point,this.dp_value=this.user.dp),this.gacha_button=d().props.value.gacha_button,this.hide_cat_bar=d().props.value.hide_cat_bar;const s=document.querySelectorAll("img.lazy"),a={root:null,rootMargin:"0px",threshold:.1},f=e=>{e.src=e.dataset.src,e.classList.remove("lazy")},p=new IntersectionObserver((e,_)=>{e.forEach(r=>{r.isIntersecting&&(f(r.target),_.unobserve(r.target))})},a);s.forEach(e=>{p.observe(e)})},computed:{flash(){return d().props.value.flash}},watch:{flash:function(s,a){s.type=="notification"&&this.notification(s.message),s.type=="dialog"&&(this.dialogMessage=s.message,this.dialogTitle=s.title,this.isDialogMessage=!0),s.data&&s.data.user&&(this.point_value=s.data.user.point,this.dp_value=s.data.user.dp)}},methods:{format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},notification(s){s&&H({text:s,duration:3e3,newWindow:!0,close:!0,gravity:"top",position:"right",stopOnFocus:!1,className:"toastify-content newClass",onClick:function(){}}).showToast()},back(){window.history.back()}}},$={class:"flex min-h-screen text-neutral-700 text-base underline-offset-2 font-medium"},G={class:"flex flex-col relative z-10 h-full w-64 bg-gray-100 border-l border-neutral-200 ml-auto"},J=t("div",{class:"p-4"},null,-1),Q={class:"flex-1 overflow-y-auto"},Y={class:"flex flex-col text-neutral-700 rounded relative z-20 top-20 w-fit max-w-96 min-w-48 bg-neutral-50 border-l border-neutral-200 m-auto"},Z={class:"pt-3 pb-1 px-1 text-center font-bold border-b mb-2"},V=["innerHTML"],ee=t("hr",{class:"mt-3"},null,-1),te={class:"min-h-screen w-full flex flex-col"},se={class:"flex-shrink-0 w-full mb-1"},oe={class:"flex justify-center xl:px-8 px-0"},ae={class:"md:w-[760px] w-full flex md:px-0 px-2 mx-auto justify-center md:gap-2 gap-1"},ne={class:"flex items-center flex-1"},ie={class:"flex-shrink-0 flex items-center"},re={class:"flex items-center py-1 px-3"},le=t("img",{src:"/images/icon_cash.png",class:"md:h-6 h-5 mr-2"},null,-1),ce={class:"font-bold"},de=t("div",{class:"flex items-center bg-[#60493d] px-2.5"},[t("span",{class:"text-lg"},"+")],-1),ue={class:"relative flex-shrink-0 flex items-center"},fe={class:"w-full flex-1 relative"};function pe(s,a,f,p,e,_){const r=i("XMarkIcon"),k=i("Sidebar"),l=i("TransitionChild"),m=i("DialogOverlay"),h=i("Dialog"),g=i("TransitionRoot"),w=i("Logo"),v=i("Link"),C=i("Category");return u(),x("div",$,[o(g,{show:e.sidebarOpened,class:"h-full"},{default:n(()=>[o(h,{open:e.sidebarOpened,onClose:a[1]||(a[1]=c=>e.sidebarOpened=!1),class:"fixed h-full inset-0 z-40"},{default:n(()=>[o(l,{enter:"transition ease-in-out duration-200 transform","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transition ease-in-out duration-200 transform","leave-from":"translate-x-0","leave-to":"translate-x-full",as:"template"},{default:n(()=>[t("div",G,[t("button",{onClick:a[0]||(a[0]=c=>e.sidebarOpened=!1),class:"absolute top-2 right-2 mt-8 mr-8 flex items-center justify-center w-10 h-10 rounded-full focus:outline-none",type:"button",value:"Close sidebar"},[o(r,{class:"h-5 w-5"})]),J,t("div",Q,[o(k)])])]),_:1}),o(l,{enter:"transition-opacity ease-linear duration-200","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-200","leave-from":"opacity-100","leave-to":"opacity-0",as:"template"},{default:n(()=>[o(m,{class:"fixed inset-0 bg-neutral-600 h-full bg-opacity-50"})]),_:1})]),_:1},8,["open"])]),_:1},8,["show"]),o(g,{show:e.isDialogMessage,class:"h-full"},{default:n(()=>[o(h,{open:e.isDialogMessage,onClose:a[3]||(a[3]=c=>e.isDialogMessage=!1),class:"fixed h-full inset-0 z-40"},{default:n(()=>[o(l,{enter:"transition ease-in-out duration-200 transform","enter-from":"translate-y-full","enter-to":"translate-y-0",leave:"transition ease-in-out duration-200 transform","leave-from":"translate-y-0","leave-to":"translate-y-full",as:"template"},{default:n(()=>[t("div",Y,[t("div",Z,b(e.dialogTitle),1),t("div",{class:"px-4 text-sm text-center",innerHTML:e.dialogMessage},null,8,V),ee,t("button",{onClick:a[2]||(a[2]=c=>e.isDialogMessage=!1),class:"cursor-pointer p-2 text-cyan-500 text-center text-base focus-visible:outline-0"}," OK ")])]),_:1}),o(l,{enter:"transition-opacity ease-linear duration-200","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity ease-linear duration-200","leave-from":"opacity-100","leave-to":"opacity-0",as:"template"},{default:n(()=>[o(m,{class:"fixed inset-0 bg-neutral-600 h-full bg-opacity-50"})]),_:1})]),_:1},8,["open"])]),_:1},8,["show"]),t("div",te,[t("div",se,[t("div",oe,[t("div",ae,[t("div",ne,[o(w)]),t("div",ie,[o(v,{href:e.point_link,class:"flex text-center text-sm text-white rounded-md bg-[#896858] overflow-hidden"},{default:n(()=>[t("div",re,[le,t("span",ce,b(e.point_value)+"\xA0PT",1)]),de]),_:1},8,["href"])]),t("div",ue,[this.user?(u(),x("img",{key:0,onClick:a[4]||(a[4]=c=>e.sidebarOpened=!0),class:"md:w-8 md:h-8 w-7 h-7 inline cursor-pointer",src:"/images/dopakun.png"})):(u(),y(v,{key:1,href:s.route("login"),class:"md:h-8 h-7 border-solid border-neutral-600 hover:bg-[#896858] border rounded-md md:px-5 px-2 text-sm text-black hover:text-white",as:"button"},{default:n(()=>[U("\u30ED\u30B0\u30A4\u30F3")]),_:1},8,["href"]))])])]),e.hide_cat_bar?q("",!0):(u(),y(C,{key:0}))]),t("main",fe,[A(s.$slots,"default")])])])}const ge=K(W,[["render",pe]]);export{ge as U};
