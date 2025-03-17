import{H as v,L as w,h,a3 as k,u as V,r as a,o as c,i as L,w as g,a as i,b as e,d as F,t as I,c as p,e as l,v as u,a1 as T,n as f,f as b,g as C}from"./app.e21d12b2.js";import{_ as j}from"./Checkbox.46c5b6c9.js";import{A as U}from"./Admin.48561915.js";import{b as A,_ as B,a as E}from"./TextInput.b80f6420.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.363ece78.js";const N={components:{Checkbox:j,Head:v,AdminLayout:U,InputError:A,InputLabel:B,TextInput:E,Link:w},data:()=>({passwordFieldType:"password",step_integer:0,step_titles:["\u30A2\u30AB\u30A6\u30F3\u30C8\u767B\u9332","\u8A8D\u8A3C\u30B3\u30FC\u30C9\u5165\u529B","\u3054\u672C\u4EBA\u8A8D\u8A3C"],is_processing:!1,data:{}}),props:{errors:Object},methods:{submit(){this.step_integer==0?this.form.post(route("register.email.send"),{onFinish:()=>{this.data=h().props.value.flash,this.data.data&&this.data.data.status==1&&(this.step_integer=1)}}):this.step_integer==1?this.form.post(route("register.email.verify"),{onFinish:()=>{this.data=h().props.value.flash,this.data.data&&this.data.data.status==1&&(this.step_integer=2)}}):this.form.post(route("register.phone.register"),{onFinish:()=>{}})},submit_phone(){const o={phone:this.form.phone};this.is_processing=!0,k.post(route("register.phone.send"),o).then(t=>{(t.status==201||t.status==200)&&console.log(t.data),this.is_processing=!1}).catch(t=>{this.is_processing=!1,console.log(t)})},switchVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"}},setup(){return{form:V({phone:"",code:"",email:"",password:"",invite_code:""})}},mounted(){}},D={class:"pt-6 md:px-20 px-4 md:mx-0 mx-4 h-fit"},M={class:"mb-10 text-xl text-center font-bold underline underline-offset-8"},P={key:0},S={class:"mb-8"},z={class:"mb-8"},O={class:"block mb-6"},R=["type"],q={class:"block mb-6"},G={class:"flex items-center cursor-pointer"},J=e("span",{class:"ml-2 text-sm text-gray-600"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A",-1),K={class:"flex items-center justify-center mt-10"},Q=["disabled"],W={key:1},X={class:"mb-8"},Y={class:"flex items-center justify-center mt-10"},Z=["disabled"],$={key:2},ee={class:"mb-4"},te={class:"mt-10 flex items-center justify-center"},se=["disabled"],oe={class:"flex items-center justify-center mt-8 mb-8 pb-8"};function re(o,t,ie,s,ne,m){const _=a("Head"),n=a("InputLabel"),d=a("InputError"),y=a("Link"),x=a("AdminLayout");return c(),L(x,null,{default:g(()=>[i(_,{title:"\u65B0\u898F\u767B\u9332"}),e("div",D,[e("form",{onSubmit:t[6]||(t[6]=F((...r)=>m.submit&&m.submit(...r),["prevent"]))},[e("h2",M,"\xA0\xA0\xA0"+I(o.step_titles[o.step_integer])+"\xA0\xA0",1),o.step_integer==2?(c(),p("div",P,[e("div",S,[i(n,{for:"invite_code",value:"\u62DB\u5F85\u30B3\u30FC\u30C9",class:"block text-md font-bold text-neutral-700 pl-4 mb-4",title:"\u3042\u306A\u305F\u3092\u62DB\u5F85\u3057\u305F\u53CB\u9054\u306E\u62DB\u5F85\u30B3\u30FC\u30C9"}),l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.invite_code=r),id:"invite_code",type:"text",class:"h-12 w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u62DB\u5F85\u3057\u305F\u53CB\u9054\u306E\u62DB\u5F85\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u307E\u3059",autocomplete:"off"},null,512),[[u,s.form.invite_code]])]),e("div",z,[i(n,{for:"phone",value:"\u96FB\u8A71\u756A\u53F7",class:"block text-md font-bold text-neutral-700 pl-4 mb-4"}),l(e("input",{"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.phone=r),id:"phone",type:"tel",class:"h-12 w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u534A\u89D2\u6570\u5B57\u306E\u307F\u3067\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[u,s.form.phone]]),i(d,{class:"mt-2",message:s.form.errors.phone},null,8,["message"])]),e("div",O,[i(n,{for:"password",class:"block text-md font-bold text-neutral-700 pl-4 mb-4",value:"\u30D1\u30B9\u30EF\u30FC\u30C9"}),l(e("input",{"onUpdate:modelValue":t[2]||(t[2]=r=>s.form.password=r),id:"password",type:o.passwordFieldType,class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u534A\u89D2\u82F1\u6570\u5B576\uFF5E20\u6587\u5B57"},null,8,R),[[T,s.form.password]]),i(d,{class:"mt-2",message:s.form.errors.password},null,8,["message"])]),e("div",q,[e("label",G,[e("input",{type:"checkbox",onClick:t[3]||(t[3]=r=>m.switchVisibility()),class:"rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"}),J])]),e("div",K,[e("button",{type:"submit",class:f([{"opacity-25":o.is_processing},"inline-flex items-center px-8 py-1.5 bg-[#896858] hover:bg-[#60493d] border border-transparent font-semibold text-md text-white uppercase tracking-widest active:bg-indigo-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"]),disabled:o.is_processing}," \u767B\u9332 ",10,Q)])])):b("",!0),o.step_integer==1?(c(),p("div",W,[e("div",X,[i(n,{for:"code",class:"block text-md font-bold text-neutral-700 pl-4 mb-4",value:"\u767B\u9332\u3057\u305F\u30E1\u30FC\u30EB\u306B\u9001\u4FE1\u3055\u308C\u305F4\u884C\u306E\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),l(e("input",{"onUpdate:modelValue":t[4]||(t[4]=r=>s.form.code=r),id:"code",type:"tel",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[u,s.form.code]]),i(d,{class:"mt-2",message:s.form.errors.code},null,8,["message"])]),e("div",Y,[e("button",{type:"submit",class:f([{"opacity-25":s.form.processing},"inline-flex items-center px-8 py-1.5 bg-[#896858] hover:bg-[#60493d] border border-transparent font-semibold text-xs text-white uppercase tracking-widest active:bg-red-800 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"]),disabled:s.form.processing}," \u6B21\u3078 ",10,Z)])])):b("",!0),o.step_integer==0?(c(),p("div",$,[e("div",ee,[i(n,{for:"email",class:"block text-md font-bold text-neutral-700 pl-4 mb-4",value:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"}),l(e("input",{"onUpdate:modelValue":t[5]||(t[5]=r=>s.form.email=r),id:"email",type:"email",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u4F8B) user@duceoripa.com"},null,512),[[u,s.form.email]]),i(d,{class:"mt-2",message:s.form.errors.email},null,8,["message"])]),e("div",te,[e("button",{type:"submit",class:f([{"opacity-25":s.form.processing},"inline-flex items-center px-8 py-1.5 bg-[#896858] hover:bg-[#60493d] border border-transparent font-semibold text-sm text-white uppercase tracking-widest active:bg-indigo-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"]),disabled:s.form.processing}," \u8A8D\u8A3C\u3078\u9032\u3080 ",10,se)])])):b("",!0),e("div",oe,[i(y,{href:o.route("login"),class:"underline underline-offset-[6px] text-sm text-neutral-600 hover:text-blue-500 active:text-blue-700 font-[650]"},{default:g(()=>[C("\u3059\u3067\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u306E\u65B9\u306F\u3053\u3061\u3089")]),_:1},8,["href"])])],32)])]),_:1})}const pe=H(N,[["render",re]]);export{pe as default};
