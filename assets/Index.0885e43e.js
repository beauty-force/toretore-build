import{o as r,c as o,b as t,H as k,K as y,r as a,a as l,w as v,F as d,I as h,t as c,j as C}from"./app.3e7d9b0d.js";import{U as L}from"./UserLayout.8fc6f78d.js";import{C as D,A as T,p as F,a as H,D as B}from"./index.393893ac.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.3c14b72d.js";function M(e,u){return r(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})])}function j(e,u){return r(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})])}D.register(T,F,H);const I={components:{Head:k,AppLayout:L,Doughnut:B,PencilIcon:M,TrashIcon:j},props:{errors:Object,ranks:Object,rankData:Array},data(){return{chartColors:["#FF6384","#36A2EB","#FFCE56","#4BC0C0","#9966FF","#FF9F40","#8E44AD","#2ECC71","#E74C3C","#3498DB","#F1C40F","#1ABC9C","#9B59B6","#34495E","#95A5A6"]}},computed:{rankDistributionData(){return{labels:this.rankData.map(e=>e.title),datasets:[{data:this.rankData.map(e=>e.count),backgroundColor:this.chartColors,hoverBackgroundColor:this.chartColors}]}},rankDistributionOptions(){return{responsive:!0,cutout:"0%",plugins:{legend:{display:!1},tooltip:{callbacks:{label:e=>`${e.raw} \u4EBA`}}}}}},methods:{destroy_rank(e){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&y.Inertia.delete(route("admin.rank.destroy",{id:e}))},modalOpen(e){},format_number(e){return String(e).replace(/(.)(?=(\d{3})+$)/g,"$1,")},pt_rate_string(e){return e.rankup==0?'<span class="text-[1.5em]">\u2014</span>':`${e.pt_rate}%`},bonus_pt_string(e){return e.bonus==0?'<span class="text-[1.5em]">\u2014</span>':`${this.format_number(e.bonus)} PT`},expiration_string(e){return e.expiration==0?'<span class="text-[1.5em]">\u2014</span>':`${e.expiration}\u65E5`},limit_string(e){return e.limit==0?'<span class="text-[1.5em]">\u2014</span>':`${this.format_number(e.limit)} \u5186`}}},E={class:"mb-6 max-w-3xl mx-auto"},O=t("h2",{class:"text-lg font-bold text-center mb-4"},"\u30E9\u30F3\u30AF\u5206\u5E03",-1),P={class:"flex flex-col md:flex-row items-center justify-center gap-8"},S={class:"w-full max-w-xs md:max-w-sm"},z={class:"w-full max-w-sm"},N={class:"w-full text-sm bg-white shadow rounded-lg"},U=t("thead",null,[t("tr",{class:"bg-gray-200"},[t("th",{class:"p-2 text-left"},"\u30E9\u30F3\u30AF\u540D"),t("th",{class:"p-2 text-left"},"\u4EBA\u6570"),t("th",{class:"p-2 text-left"},"\u8272")])],-1),V={class:"p-2"},$={class:"p-2"},K={class:"p-2"},q={class:"pt-4 px-2 md:px-4 py-2 max-w-3xl mx-auto"},G=t("h1",{class:"mb-2 text-lg font-bold"},"\u30E9\u30F3\u30AF\u7279\u5178\u8A2D\u5B9A",-1),J=t("hr",{class:"mb-2"},null,-1),Q={class:"w-full overflow-auto text-sm"},R={class:"min-w-full mt-2 bg-white shadow rounded-lg"},W=t("thead",null,[t("tr",{class:"bg-gray-200 whitespace-nowrap"},[t("th",{class:"p-2"},"\u30E9\u30F3\u30AF"),t("th",{class:"p-2"},"\u30E9\u30F3\u30AF\u540D"),t("th",{class:"p-2"},"\u8CFC\u5165\u6642PT\u4ED8\u4E0E"),t("th",{class:"p-2"},"\u5230\u9054\u91D1\u984D"),t("th",{class:"p-2"},"\u30DC\u30FC\u30CA\u30B9PT"),t("th",{class:"p-2"},"\u7DAD\u6301\u671F\u65E5"),t("th",{class:"p-2"},"\u7DAD\u6301\u91D1\u984D"),t("th")])],-1),X={class:"p-2 text-center"},Y={class:"p-2 text-center"},Z=["innerHTML"],tt={class:"p-2 text-center"},et=["innerHTML"],st=["innerHTML"],nt=["innerHTML"],rt={class:"px-1 py-2 flex items-center justify-center gap-0.5"},ot=["onClick"],at=["onClick"];function lt(e,u,_,ct,p,n){const m=a("Head"),x=a("Doughnut"),f=a("PencilIcon"),b=a("TrashIcon"),g=a("AppLayout");return r(),o(d,null,[l(m,{title:"\u30E9\u30F3\u30AF\u7279\u5178\u8A2D\u5B9A"}),l(g,null,{default:v(()=>[t("div",E,[O,t("div",P,[t("div",S,[l(x,{data:n.rankDistributionData,options:n.rankDistributionOptions},null,8,["data","options"])]),t("div",z,[t("table",N,[U,t("tbody",null,[(r(!0),o(d,null,h(_.rankData,(s,i)=>(r(),o("tr",{key:i,class:"border-b"},[t("td",V,c(s.title),1),t("td",$,c(s.count),1),t("td",K,[t("div",{class:"w-4 h-4 rounded-full",style:C({backgroundColor:p.chartColors[i]})},null,4)])]))),128))])])])])]),t("div",q,[G,J,t("div",Q,[t("table",R,[W,t("tbody",null,[(r(!0),o(d,null,h(_.ranks,(s,i)=>(r(),o("tr",{key:i,class:"border-b"},[t("td",X,c(s.rank),1),t("td",Y,c(s.title),1),t("td",{class:"p-2 text-center",innerHTML:n.pt_rate_string(s)},null,8,Z),t("td",tt,c(n.format_number(s.amount))+" \u5186",1),t("td",{class:"p-2 text-center",innerHTML:n.bonus_pt_string(s)},null,8,et),t("td",{class:"p-2 text-center",innerHTML:n.expiration_string(s)},null,8,st),t("td",{class:"p-2 text-center",innerHTML:n.limit_string(s)},null,8,nt),t("td",rt,[t("button",{type:"button",onClick:w=>n.modalOpen(s),class:"flex items-center justify-center w-9 h-9 rounded-full focus:outline-none hover:bg-sky-500 hover:text-white text-sky-500"},[l(f,{class:"h-5 w-5"})],8,ot),t("button",{type:"button",onClick:w=>n.destroy_rank(s.id),class:"flex items-center justify-center w-9 h-9 rounded-full focus:outline-none hover:bg-rose-500 hover:text-white text-rose-500"},[l(b,{class:"h-5 w-5"})],8,at)])]))),128))])])])])]),_:1})],64)}const pt=A(I,[["render",lt]]);export{pt as default};
