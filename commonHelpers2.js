import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */let t={email:"",message:""};const o="feedback-form-state",a=document.querySelector(".feedback-form"),l=a.querySelector("input"),r=a.querySelector("textarea");function s(){localStorage.setItem(o,JSON.stringify(t))}a.addEventListener("input",e=>{t[e.target.name]=e.target.value,s()});window.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem(o);e&&(t=JSON.parse(e),l.value=t.email,r.value=t.message)});a.addEventListener("submit",e=>{e.preventDefault(),(r.value===""||l.value==="")&&alert("Fill please all fields"),console.log(t),t={email:"",message:""},a.reset(),localStorage.removeItem("feedback-form-state")});
//# sourceMappingURL=commonHelpers2.js.map