import{H as x,L as b,r as s,o,c as n,a as c,w as i,F as l,b as t,I as f,i as g,t as a}from"./app.e21d12b2.js";import{A as v}from"./Admin.48561915.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as k}from"./ChevronRightIcon.184baa4a.js";import"./toastify.363ece78.js";const L={components:{Head:x,AdminLayout:v,Link:b,ChevronRightIcon:k},props:{errors:Object,auth:Object,category_share:Object,products:Object},data(){return{}},methods:{format_number(r){return String(r).replace(/(.)(?=(\d{3})+$)/g,"$1,")}}},w={class:"pt-6 md:px-2 px-4",style:{"min-height":"400px"}},j=t("div",{class:"bg-custom py-6 pb-12 px-6"},[t("h1",{class:"mb-2 text-[24px] text-center font-bold underline"},"\u304A\u6C17\u306B\u5165\u308A\u4E00\u89A7")],-1),C={key:0,class:"mb-8"},A=["src"],B={class:"flex-1 inline-block text-sm px-2"},H={class:"text-lg font-bold px-3"},I={class:"text-md md:py-2 py-1 mb-4 px-3"},O={class:"py-1 mx-3 bg-red-500 text-white rounded-full w-24 text-center"},F={class:"text-neutral-300"},R={key:1,class:"mb-8"};function $(r,N,d,S,V,p){const _=s("Head"),m=s("ChevronRightIcon"),u=s("Link"),h=s("AdminLayout");return o(),n(l,null,[c(_,{title:"\u304A\u6C17\u306B\u5165\u308A\u4E00\u89A7"}),c(h,null,{default:i(()=>[t("div",w,[j,d.products.data.length?(o(),n("div",C,[(o(!0),n(l,null,f(d.products.data,(e,D)=>(o(),g(u,{href:r.route("user.dp.detail",{id:e.product.id}),class:"py-3 px-4 bg-custom flex items-start justify-between mb-1"},{default:i(()=>[t("img",{src:e.product.image,class:"h-32 w-24 inline-block object-cover"},null,8,A),t("div",B,[t("div",H,a(e.product.name),1),t("div",I,a(e.product.rare),1),t("div",O,a(p.format_number(e.product.dp))+"TP",1)]),t("div",F,[c(m,{class:"w-5"})])]),_:2},1032,["href"]))),256))])):(o(),n("div",R," \u5546\u54C1\u306F\u3042\u308A\u307E\u305B\u3093\u3002 "))])]),_:1})],64)}const G=y(L,[["render",$]]);export{G as default};
