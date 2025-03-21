import{H as k,L as v,u as h,r as i,o as d,c,a as l,w as _,F as x,b as t,t as n,e as w,v as C,I as L,g as p,f as N}from"./app.616c3bee.js";import{A as j}from"./Admin.457f1142.js";import{P as S}from"./Pagination.ef476e8e.js";import{G as V}from"./GachaCard.f7b8c7d1.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.03183cdd.js";import"./ChevronRightIcon.bd8a75bb.js";import"./EllipsisHorizontalIcon.7b369cf8.js";import"./PlayIcon.780c507d.js";const H={components:{Head:k,AdminLayout:j,Link:v,GachaCard:V,Pagination:S},props:{errors:Object,users:Object,search_cond:Object,total:Number,user_pt:Number,product_pt:Number},mounted(){},methods:{search(){this.form_search.get(route("admin.users"))},format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},updateStatus(s,r){h({id:s,status:r}).post(route("admin.users.update"))}},setup(s){return{form_search:h(s.search_cond)}}},I={class:"md:px-1 px-2"},P={class:"border px-4 py-3 rounded-md mb-5"},B={class:"grid grid-cols-2 w-fit gap-x-4 gap-y-2"},F=t("span",{class:"text-sm"},"\u30E6\u30FC\u30B6\u30FC\u5168\u4F53\u306E\u30DD\u30A4\u30F3\u30C8\u5408\u8A08",-1),O={class:"text-right"},D=t("span",{class:"text-sm"},"\u7372\u5F97\u5546\u54C1\u306E\u30DD\u30A4\u30F3\u30C8\u5408\u8A08",-1),G={class:"text-right"},T=t("span",{class:"text-sm"},"\u5408\u8A08",-1),E={class:"text-right"},M={class:"w-full flex flex-col gap-4"},U={class:"w-full flex justify-between items-center gap-4"},q={class:"w-full overflow-auto"},z={class:"min-w-full table-auto"},J=t("thead",null,[t("tr",{class:"border-b border-collapse"},[t("td",{class:"text-center py-2"},"\u8A73\u7D30"),t("td",{class:"text-center py-2"},"\u540D\u524D"),t("td",{class:"text-center py-2"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"),t("td",{class:"text-center py-2"},"\u96FB\u8A71"),t("td",{class:"text-center py-2"},"\u30DD\u30A4\u30F3\u30C8"),t("td",{class:"text-center py-2"},"\u5C65\u6B74"),t("th",{class:"text-center py-2"})])],-1),K={class:"text-sm"},Q={class:"border border-sky-50 divide-x-2 divide-sky-50"},R={class:"text-center py-2"},W={class:"text-center py-2 text-red-600"},X={class:"text-center py-2"},Y={class:"text-center py-2"},Z={class:"text-center py-2"},$={class:"flex justify-center items-center py-2 gap-1"},tt={key:0,class:"text-center py-1 whitespace-nowrap"},et=["onClick"],st=["onClick"];function ot(s,r,a,m,rt,o){const f=i("Head"),u=i("Link"),y=i("Pagination"),b=i("AdminLayout");return d(),c(x,null,[l(f,{title:"\u30E6\u30FC\u30B6\u30FC\u7BA1\u7406"}),l(b,null,{default:_(()=>[t("div",I,[t("div",P,[t("div",B,[F,t("span",O,n(o.format_number(a.user_pt))+" pt",1),D,t("span",G,n(o.format_number(a.product_pt))+" pt",1),T,t("span",E,n(o.format_number(parseInt(a.user_pt)+parseInt(a.product_pt)))+" pt",1)])]),t("div",M,[t("div",U,[w(t("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>m.form_search.keyword=e),type:"text",class:"h-9 flex-1 w-16 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u540D\u524D\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3001\u96FB\u8A71\u756A\u53F7\u3001\u4F4F\u6240\u3092\u5165\u529B\u3057\u307E\u3059\u3002"},null,512),[[C,m.form_search.keyword]]),t("button",{type:"button",onClick:r[1]||(r[1]=(...e)=>o.search&&o.search(...e)),class:"rounded-md border bg-neutral-600 text-white px-4 py-1"},"\u691C\u7D22")]),t("div",q,[t("table",z,[J,t("tbody",K,[(d(!0),c(x,null,L(a.users,e=>(d(),c("tr",Q,[t("td",R,[l(u,{class:"px-2 py-0.5 border border-sky-300 rounded-lg hover:bg-sky-300 text-nowrap",href:s.route("admin.users.detail",{id:e.id})},{default:_(()=>[p("\u8A73\u7D30")]),_:2},1032,["href"])]),t("td",W,n(e.name),1),t("td",X,n(e.email),1),t("td",Y,n(e.phone),1),t("td",Z,n(o.format_number(e.point))+" pt",1),t("td",null,[t("div",$,[l(u,{href:s.route("admin.users.purchase_log",e.id),class:"rounded float-right px-2 py-1 text-xs bg-cyan-600 hover:bg-cyan-700 text-neutral-50 text-nowrap"},{default:_(()=>[p(" \u8CFC\u5165 ")]),_:2},1032,["href"]),l(u,{href:s.route("admin.users.gacha_log",e.id),class:"rounded float-right px-2 py-1 text-xs bg-red-500 hover:bg-red-700 text-neutral-50 text-nowrap"},{default:_(()=>[p(" \u30AC\u30C1\u30E3 ")]),_:2},1032,["href"])])]),e.type!=1?(d(),c("td",tt,[e.status?(d(),c("button",{key:0,onClick:g=>o.updateStatus(e.id,0),class:"px-2 py-1 rounded-md border text-rose-500 hover:bg-rose-100"},"\u524A\u9664",8,et)):(d(),c("button",{key:1,onClick:g=>o.updateStatus(e.id,1),class:"px-2 py-1 rounded-md border text-sky-500 hover:bg-sky-100"},"\u627F\u8A8D",8,st))])):N("",!0)]))),256))])])]),l(y,{search_cond:a.search_cond,route_name:"admin.users",total:a.total},null,8,["search_cond","total"])])])]),_:1})],64)}const mt=A(H,[["render",ot]]);export{mt as default};
