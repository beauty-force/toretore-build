import{H as y,L as v,u as w,r as u,o as l,c as a,a as m,w as k,F as _,b as e,d as V,e as d,v as c,t as n,f as i,a0 as U,I as L,n as A}from"./app.e21d12b2.js";import{A as j}from"./Admin.48561915.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.363ece78.js";const p=["\u5317\u6D77\u9053","\u9752\u68EE\u770C","\u5CA9\u624B\u770C","\u5BAE\u57CE\u770C","\u79CB\u7530\u770C","\u5C71\u5F62\u770C","\u798F\u5CF6\u770C","\u8328\u57CE\u770C","\u6803\u6728\u770C","\u7FA4\u99AC\u770C","\u57FC\u7389\u770C","\u5343\u8449\u770C","\u6771\u4EAC\u90FD","\u795E\u5948\u5DDD\u770C","\u65B0\u6F5F\u770C","\u5BCC\u5C71\u770C","\u77F3\u5DDD\u770C","\u798F\u4E95\u770C","\u5C71\u68A8\u770C","\u9577\u91CE\u770C","\u5C90\u961C\u770C","\u9759\u5CA1\u770C","\u611B\u77E5\u770C","\u4E09\u91CD\u770C","\u6ECB\u8CC0\u770C","\u4EAC\u90FD\u5E9C","\u5927\u962A\u5E9C","\u5175\u5EAB\u770C","\u5948\u826F\u770C","\u548C\u6B4C\u5C71\u770C","\u9CE5\u53D6\u770C","\u5CF6\u6839\u770C","\u5CA1\u5C71\u770C","\u5E83\u5CF6\u770C","\u5C71\u53E3\u770C","\u5FB3\u5CF6\u770C","\u9999\u5DDD\u770C","\u611B\u5A9B\u770C","\u9AD8\u77E5\u770C","\u798F\u5CA1\u770C","\u4F50\u8CC0\u770C","\u9577\u5D0E\u770C","\u718A\u672C\u770C","\u5927\u5206\u770C","\u5BAE\u5D0E\u770C","\u9E7F\u5150\u5CF6\u770C","\u6C96\u7E04\u770C"],F={components:{Head:y,AdminLayout:j,Link:v},props:{errors:Object,gacha:Object,category_share:Object,profiles:Object},data(){return{prefectures:p}},methods:{submit(){this.form.post(route("user.address.post"),{onFinish:()=>{}})}},setup(f){let o={first_name:"",last_name:"",first_name_gana:"",last_name_gana:"",postal_code:"",prefecture:p[0],address:"",phone:""};if(f.profiles.length){let t=f.profiles[0];o={first_name:t.first_name,last_name:t.last_name,first_name_gana:t.first_name_gana,last_name_gana:t.last_name_gana,postal_code:t.postal_code,prefecture:t.prefecture,address:t.address,phone:t.phone}}return{form:w(o)}},mounted(){}},H={class:"pt-6"},O=e("h1",{class:"mb-8 text-xl text-center underline underline-offset-8 font-bold"},"\xA0\xA0\u500B\u4EBA\u60C5\u5831\u767B\u9332\xA0\xA0",-1),B={class:"w-full text-sm md:px-12 px-6"},D={class:"w-full mb-4"},M={class:"w-1/2 p-1 md:pr-8 inline-block"},N=e("label",{for:"first_name",class:"mb-1 pb-2 px-5 text-lg font-bold block"},"\u59D3",-1),S={key:0,class:"text-red-500 text-sm"},z={class:"w-1/2 p-1 inline-block"},E=e("label",{for:"last_name",class:"mb-1 pb-2 px-5 text-lg font-bold block"},"\u540D",-1),I={key:0,class:"text-red-500 text-sm"},P={class:"w-full mb-4"},T={class:"w-1/2 p-1 md:pr-8 inline-block"},q=e("label",{for:"first_name_gana",class:"mb-1 pb-2 px-5 text-lg font-bold block"},"\u59D3 (\u30AB\u30CA)",-1),G={key:0,class:"text-red-500 text-sm"},J={class:"w-1/2 p-1 inline-block"},K=e("label",{for:"last_name_gana",class:"mb-1 pb-2 px-5 text-lg font-bold block"},"\u540D (\u30AB\u30CA)",-1),Q={key:0,class:"text-red-500 text-sm"},R={class:"w-full mb-4 p-1"},W=e("label",{for:"postal_code",class:"mb-1 pb-2 px-5 text-lg font-bold block"},"\u90F5\u4FBF\u756A\u53F7 (\u30CF\u30A4\u30D5\u30F3\u306A\u3057\u534A\u89D2\u6570\u5B57)",-1),X={key:0,class:"text-red-500 text-sm"},Y={class:"w-full mb-4 p-1"},Z=e("label",{for:"prefecture",class:"mb-1 pb-2 px-5 text-lg font-bold block"},"\u90FD\u9053\u5E9C\u770C",-1),$=["value"],ee={key:0,class:"text-red-500 text-sm"},te={class:"w-full mb-4 p-1"},oe=e("label",{for:"address",class:"mb-1 pb-2 px-5 text-lg font-bold block"},"\u4F4F\u6240",-1),re={key:0,class:"text-red-500 text-sm"},se={class:"w-full mb-6 p-1"},le=e("label",{for:"phone",class:"mb-1 pb-2 px-5 text-lg font-bold block"},"\u96FB\u8A71\u756A\u53F7 (\u30CF\u30A4\u30D5\u30F3\u306A\u3057\u534A\u89D2\u6570\u5B57)",-1),ae={key:0,class:"text-red-500 text-sm"},ne={class:"w-full mb-4 mt-10 pb-8 p-1 text-center"},de=["disabled"];function ie(f,o,s,t,b,x){const g=u("Head"),h=u("AdminLayout");return l(),a(_,null,[m(g,{title:"\u500B\u4EBA\u60C5\u5831\u767B\u9332"}),m(h,null,{default:k(()=>[e("div",H,[O,e("div",B,[e("form",{onSubmit:o[8]||(o[8]=V(r=>x.submit(),["prevent"]))},[e("div",D,[e("div",M,[N,d(e("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>t.form.first_name=r),id:"first_name",type:"text",class:"h-12 w-full md:px-5 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 placeholder-neutral-300",placeholder:"\u52D5\u6CE2"},null,512),[[c,t.form.first_name]]),s.errors.first_name?(l(),a("div",S,n(s.errors.first_name),1)):i("",!0)]),e("div",z,[E,d(e("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>t.form.last_name=r),id:"last_name",type:"text",class:"h-12 w-full md:px-5 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 placeholder-neutral-300",placeholder:"\u592A\u90CE"},null,512),[[c,t.form.last_name]]),s.errors.last_name?(l(),a("div",I,n(s.errors.last_name),1)):i("",!0)])]),e("div",P,[e("div",T,[q,d(e("input",{"onUpdate:modelValue":o[2]||(o[2]=r=>t.form.first_name_gana=r),id:"first_name_gana",type:"text",class:"h-12 w-full md:px-5 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 placeholder-neutral-300",placeholder:"\u30C9\u30A6\u30D0"},null,512),[[c,t.form.first_name_gana]]),s.errors.first_name_gana?(l(),a("div",G,n(s.errors.first_name_gana),1)):i("",!0)]),e("div",J,[K,d(e("input",{"onUpdate:modelValue":o[3]||(o[3]=r=>t.form.last_name_gana=r),id:"last_name_gana",type:"text",class:"h-12 w-full md:px-5 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 placeholder-neutral-300",placeholder:"\u30BF\u30ED\u30A6"},null,512),[[c,t.form.last_name_gana]]),s.errors.last_name_gana?(l(),a("div",Q,n(s.errors.last_name_gana),1)):i("",!0)])]),e("div",R,[W,d(e("input",{"onUpdate:modelValue":o[4]||(o[4]=r=>t.form.postal_code=r),id:"postal_code",type:"text",class:"h-12 w-full md:px-5 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"},null,512),[[c,t.form.postal_code]]),s.errors.postal_code?(l(),a("div",X,n(s.errors.postal_code),1)):i("",!0)]),e("div",Y,[Z,d(e("select",{"onUpdate:modelValue":o[5]||(o[5]=r=>t.form.prefecture=r),id:"prefecture",class:"h-12 w-full md:px-5 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 placeholder-neutral-300",placeholder:"\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"},[(l(!0),a(_,null,L(b.prefectures,(r,ce)=>(l(),a("option",{value:r},n(r),9,$))),256))],512),[[U,t.form.prefecture]]),s.errors.prefecture?(l(),a("div",ee,n(s.errors.prefecture),1)):i("",!0)]),e("div",te,[oe,d(e("input",{"onUpdate:modelValue":o[6]||(o[6]=r=>t.form.address=r),type:"text",id:"address",class:"h-12 w-full md:px-5 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 placeholder-neutral-300",placeholder:"\u4F8B) \u6E0B\u8C37\u533A\u795E\u5BAE\u524D1-2-3 DP\u30D3\u30EB501\u53F7\u5BA4"},null,512),[[c,t.form.address]]),s.errors.address?(l(),a("div",re,n(s.errors.address),1)):i("",!0)]),e("div",se,[le,d(e("input",{"onUpdate:modelValue":o[7]||(o[7]=r=>t.form.phone=r),id:"phone",type:"tel",class:"h-12 w-full md:px-5 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[c,t.form.phone]]),s.errors.phone?(l(),a("div",ae,n(s.errors.phone),1)):i("",!0)]),e("div",ne,[e("button",{type:"submit",class:A([{"opacity-25":t.form.processing},"inline-flex items-center px-10 py-1.5 font-semibold text-lg text-white uppercase tracking-widest hover:bg-[#896858] bg-[#60493d] transition ease-in-out duration-150"]),disabled:t.form.processing}," \u4FDD\u5B58 ",10,de)])],32)])])]),_:1})],64)}const pe=C(F,[["render",ie]]);export{pe as default};
