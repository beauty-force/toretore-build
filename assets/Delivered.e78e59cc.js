import{H as h,L as x,r as c,o as s,c as o,a as l,w as i,F as a,b as t,I as d,i as b,n as y,g,t as r,f as v}from"./app.e21d12b2.js";import{A as k}from"./Admin.48561915.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.363ece78.js";const j={components:{Head:h,AdminLayout:k,Link:x},props:{errors:Object,gacha:Object,category_share:Object,products:Object},data(){return{main_tab:[{title:"\u672A\u9078\u629E",route_url:route("user.products"),is_active:!1},{title:"\u767A\u9001\u5F85\u3061",route_url:route("user.products.wait"),is_active:!1},{title:"\u767A\u9001\u6E08\u307F",route_url:route("user.products.delivered"),is_active:!0}]}}},L={style:{"min-height":"400px"},class:"px-4 md:px-8 w-full"},A={class:"pt-3 pb-1 mx-4 px-4 mb-3 border-black"},B=t("h1",{class:"mb-8 text-lg text-center font-bold underline underline-offset-8"},"\xA0\xA0\xA0\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7\xA0\xA0\xA0",-1),C={class:"w-full text-neutral-600 mb-3"},H={key:0,class:"grid md:grid-cols-2 gap-1"},N={class:"mt-1 py-2 px-3 hover:bg-sky-50 focus:bg-sky-50"},O={class:"flex border-neutral-200 items-start"},V=["src"],D={class:"cursor-pointer flex items-start justify-center inline-block text-sm py-1"},F={class:"ml-2 flex flex-col self-stretch justify-around py-3"},T={class:"text-sm py-1 px-3"},z={class:"text-sm py-1 px-3"},E={key:0,class:"flex bg-[#ff8000] justify-center items-center rounded-full px-3 md:my-1 mx-3 py-1 text-white w-fit"},I=t("img",{src:"/images/icon_cash.png",class:"h-5 mr-2"},null,-1),P={key:1,class:"mb-6"};function S($,q,n,G,_,J){const u=c("Head"),p=c("Link"),m=c("AdminLayout");return s(),o(a,null,[l(u,{title:"\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7"}),l(m,null,{default:i(()=>[t("div",L,[t("div",A,[B,t("div",C,[(s(!0),o(a,null,d(_.main_tab,(e,f)=>(s(),b(p,{href:e.route_url,class:y(["inline-block md:px-8 px-4 py-1.5",{"bg-[#896858] text-white":e.is_active}])},{default:i(()=>[g(r(e.title),1)]),_:2},1032,["href","class"]))),256))])]),n.products.data.length?(s(),o("div",H,[(s(!0),o(a,null,d(n.products.data,(e,f)=>(s(),o("div",N,[t("div",O,[t("img",{src:e.image,class:"w-24 h-32 inline-block object-contains"},null,8,V),t("label",D,[t("div",F,[t("div",T,r(e.name),1),t("div",z,r(e.rare),1),e.is_lost_product!=2?(s(),o("div",E,[I,t("span",null,r(e.point)+"\xA0PT",1)])):v("",!0)])])])]))),256))])):(s(),o("div",P," \u5546\u54C1\u306F\u3042\u308A\u307E\u305B\u3093\u3002 "))])]),_:1})],64)}const U=w(j,[["render",S]]);export{U as default};
