import{u as c,o as i,i as d,w as r,a as t,G as e,H as u,c as _,t as f,f as p,b as a,g,n as b,d as x}from"./app.e21d12b2.js";import{_ as w}from"./GuestLayout.c5d730ba.js";import{_ as V,a as v,b as y}from"./TextInput.b80f6420.js";import{_ as h}from"./PrimaryButton.37ae99e5.js";import"./ApplicationLogo.313cc497.js";import"./_plugin-vue_export-helper.cdc0426e.js";const k=a("div",{class:"mb-4 text-sm text-gray-600"}," \u767B\u9332\u6642\u306E\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF01 ",-1),$={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],N={class:"flex items-center justify-end mt-4"},z={__name:"ForgotPassword",props:{status:String},setup(o){const s=c({email:""}),l=()=>{s.post(route("password.email"))};return(S,m)=>(i(),d(w,null,{default:r(()=>[t(e(u),{title:"Forgot Password"}),k,o.status?(i(),_("div",$,f(o.status),1)):p("",!0),a("form",{onSubmit:x(l,["prevent"])},[a("div",null,[t(V,{for:"email",value:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"}),t(v,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":m[0]||(m[0]=n=>e(s).email=n),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),t(y,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),a("div",N,[t(h,{class:b({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:r(()=>[g(" \u30D1\u30B9\u30EF\u30FC\u30C9\u30EA\u30BB\u30C3\u30C8\u30E1\u30FC\u30EB\u3092\u9001\u4FE1 ")]),_:1},8,["class","disabled"])])],40,B)]),_:1}))}};export{z as default};
