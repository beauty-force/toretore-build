import{H as y,L as p,r as l,o as c,c as o,a as _,w as g,F as n,b as t,t as s,g as i,f as h,I as w}from"./app.e21d12b2.js";import{U as v}from"./UserLayout.7d8877ad.js";import{P as k}from"./Pagination.e476205d.js";import{G as j}from"./GachaButtons.09798e32.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.363ece78.js";import"./ChevronRightIcon.184baa4a.js";import"./PlayIcon.5933a4ec.js";const L={components:{Head:y,UserLayout:v,Pagination:k,Link:p,GachaButtons:j},props:{errors:Object,gachas:Object,category_share:Object,gacha_log:Array,is_admin:Boolean,search_cond:Object,total:Number,offset:Number},data(){return{}},methods:{format_number(d){return String(d).replace(/(.)(?=(\d{3})+$)/g,"$1,")}}},N={class:"absolute w-full h-full overflow-y-auto"},G={class:"md:w-[760px] w-full mx-auto bg-white md:py-6 py-0"},P={class:"mx-auto relative w-full md:max-w-[430px]"},H={class:"flex justify-end p-6 absolute top-0 w-full"},O={class:"rounded-full py-0.5 w-fit px-4 text-sm border-2 border-white bg-white items-center flex align-center"},U=t("span",{class:"font-semibold text-sm"},"\u6B8B\xA0\xA0",-1),V={class:"font-semibold text-sm"},C={class:"text-sm"},F=t("img",{src:"/images/icon_cash.png",class:"w-5 h-5"},null,-1),S={class:"font-semibold text-sm"},T=t("span",{class:"text-sm"},"PT",-1),A=["src"],D={class:"absolute w-full",style:{bottom:"30px"}},E={key:1,class:"w-full md:w-[768px] mx-auto mt-6"},I={class:"flex flex-wrap justify-between items-center"},q=t("h3",{class:"underline underline-offset-4 mb-4 px-4 text-lg"},"\u6392\u51FA\u5C65\u6B74",-1),z={class:"w-full"},J={class:"border-b border-collapse"},K=t("th",{class:"text-center py-2"},"\u756A\u53F7",-1),M=t("th",{class:"text-center py-2"},"\u540D\u524D",-1),Q=t("th",{class:"text-center py-2"},"\u753B\u50CF",-1),R=t("th",{class:"text-center py-2"},"\u30EC\u30A2\u5EA6",-1),W=t("th",{class:"text-center py-2"},"\u30DD\u30A4\u30F3\u30C8",-1),X=t("th",{class:"text-center py-2"},"\u30E6\u30FC\u30B6\u30FC",-1),Y=t("th",{class:"text-center py-2"},"\u6642\u9593",-1),Z=t("th",{class:"text-center py-2"},"\u72B6\u614B",-1),$={class:"border-b border-collapse"},tt={class:"text-center py-2"},et={class:"text-center py-2"},st={class:"text-center py-1 flex justify-center"},at=["src"],ct={class:"text-center py-2"},ot={class:"text-center py-2"},nt={class:"text-center py-2"},lt={class:"text-center py-2"},_t={class:"text-center py-2"};function rt(d,dt,e,it,ht,r){const m=l("Head"),u=l("GachaButtons"),f=l("Pagination"),x=l("UserLayout");return c(),o(n,null,[_(m,{title:"\u30AC\u30C1\u30E3"}),_(x,null,{default:g(()=>[!e.is_admin&&e.gacha_log.length==0?(c(),o(n,{key:0},[t("div",N,[t("div",G,[t("div",P,[t("div",H,[t("button",O,[U,t("span",V,s(r.format_number(e.gachas.data[0].count_rest)),1),t("span",C,"/"+s(r.format_number(e.gachas.data[0].count_card)),1),i(" \xA0\xA0\xA0\xA0 "),F,i("\xA0\xA0 "),t("span",S,s(r.format_number(e.gachas.data[0].point)),1),T])]),t("img",{src:e.gachas.data[0].image,class:"block w-full mb-[140px]"},null,8,A)])])]),t("div",D,[_(u,{gacha:e.gachas.data[0]},null,8,["gacha"])])],64)):(c(),o("div",E,[t("div",I,[q,_(f,{search_cond:{...e.search_cond,id:e.gachas.data[0].id},route_name:"user.gacha",total:e.total},null,8,["search_cond","total"])]),t("table",z,[t("thead",null,[t("tr",J,[K,M,Q,R,e.is_admin?(c(),o(n,{key:0},[W,X,Y,Z],64)):h("",!0)])]),t("tbody",null,[(c(!0),o(n,null,w(e.gacha_log,(a,b)=>(c(),o("tr",$,[t("td",tt,s(e.offset+b+1),1),t("td",et,s(a.name),1),t("td",st,[t("img",{class:"h-20",src:a.image},null,8,at)]),t("td",ct,s(a.rare),1),e.is_admin?(c(),o(n,{key:0},[t("td",ot,s(a.point),1),t("td",nt,s(a.email),1),t("td",lt,s(a.gacha_time),1),t("td",_t,s(a.status),1)],64)):h("",!0)]))),256))])])]))]),_:1})],64)}const wt=B(L,[["render",rt]]);export{wt as default};
