(this.webpackJsonpconversor2=this.webpackJsonpconversor2||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(3),u=n.n(r),o=n(4),s=n(1);n(10);function l(e){var t=e.currencyOptions,n=e.selectedCurrency,a=e.onChangeCurrency,r=e.onChangeAmount,u=e.amount;return c.a.createElement("div",null,c.a.createElement("input",{type:"number",className:"input",value:u,onChange:r}),c.a.createElement("select",{value:n,onChange:a},t.map((function(e){return c.a.createElement("option",{key:e,value:e},e)}))))}var i="https://api.exchangeratesapi.io/latest";var m=function(){var e,t,n=Object(a.useState)([]),r=Object(s.a)(n,2),u=r[0],m=r[1],b=Object(a.useState)(),f=Object(s.a)(b,2),v=f[0],O=f[1],h=Object(a.useState)(),j=Object(s.a)(h,2),p=j[0],y=j[1],C=Object(a.useState)(),g=Object(s.a)(C,2),E=g[0],d=g[1],S=Object(a.useState)(1),k=Object(s.a)(S,2),N=k[0],A=k[1],w=Object(a.useState)(!0),x=Object(s.a)(w,2),J=x[0],B=x[1];return J?(t=N,e=N*E):(e=N,t=N/E),Object(a.useEffect)((function(){fetch(i).then((function(e){return e.json()})).then((function(e){var t=Object.keys(e.rates)[0];m([e.base].concat(Object(o.a)(Object.keys(e.rates)))),O(e.base),y(t),d(e.rates[t])}))}),[]),Object(a.useEffect)((function(){null!=v&&null!=p&&fetch("".concat(i,"?base=").concat(v,"&symbols=").concat(p)).then((function(e){return e.json()})).then((function(e){return d(e.rates[p])}))}),[v,p]),c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement("p",{className:"p1"},"Conversor de Moedas"),c.a.createElement(l,{currencyOptions:u,selectedCurrency:v,onChangeCurrency:function(e){return O(e.target.value)},onChangeAmount:function(e){A(e.target.value),B(!0)},amount:t}),c.a.createElement("div",{className:"division"},"\u21c5"),c.a.createElement(l,{currencyOptions:u,selectedCurrency:p,onChangeCurrency:function(e){return y(e.target.value)},onChangeAmount:function(e){A(e.target.value),B(!1)},amount:e})))};u.a.render(c.a.createElement(m,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.e8587034.chunk.js.map