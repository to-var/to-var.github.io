(function(e){function t(t){for(var c,o,i=t[0],s=t[1],l=t[2],b=0,j=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&j.push(a[o][0]),a[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);u&&u(t);while(j.length)j.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(c=!1)}c&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},a={app:0},r=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/diccionario/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07bc":function(e,t,n){},"0b6c":function(e,t,n){},2662:function(e,t,n){"use strict";n("b9c0")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("d3b7");var c=n("7a23");function a(e,t,n,a,r,o){var i=Object(c["j"])("Nav"),s=Object(c["j"])("Dictionary");return Object(c["f"])(),Object(c["c"])(c["a"],null,[Object(c["e"])(i),Object(c["e"])(s)],64)}var r=Object(c["l"])("data-v-5e278aa0");Object(c["h"])("data-v-5e278aa0");var o={class:"main"},i=Object(c["e"])("h1",null,"Diccionario",-1),s={class:"category"},l=Object(c["e"])("tr",null,[Object(c["e"])("th",{class:"languages"},[Object(c["e"])("span",{class:"icon"},"🇪🇸🇲🇽")]),Object(c["e"])("th",{class:"terms"},[Object(c["e"])("span",{class:"icon"}),Object(c["d"])(" Español")]),Object(c["e"])("th",{class:"translations"},[Object(c["e"])("span",{class:"icon"},"🇯🇵"),Object(c["d"])(" 日本語")])],-1),u={class:"languages text-icon"},b={class:"icon"},j={class:"terms"},O={class:"term"},f={class:"translations"},d={class:"translation"};Object(c["g"])();var p=r((function(e,t,n,a,r,p){return Object(c["f"])(),Object(c["c"])("main",o,[i,Object(c["e"])("ul",null,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(r.categories,(function(e,t){return Object(c["f"])(),Object(c["c"])("li",{key:t},[Object(c["e"])("span",{class:"anchor",id:p.getCategoryId(e.title)},null,8,["id"]),Object(c["e"])("h2",null,Object(c["k"])(e.title),1),Object(c["e"])("table",s,[l,(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.terms,(function(e,t){return Object(c["f"])(),Object(c["c"])("tr",{key:t},[Object(c["e"])("td",u,[Object(c["e"])("span",b,Object(c["k"])(e.icon),1)]),Object(c["e"])("td",j,[Object(c["e"])("span",O,Object(c["k"])(e.value),1)]),Object(c["e"])("td",f,[Object(c["e"])("span",d,Object(c["k"])(e.translation),1)])])})),128))])])})),128))])])})),v=(n("a15b"),n("ac1f"),n("1276"),{name:"Dictionary",data:function(){return{categories:this.dictionary}},methods:{getCategoryId:function(e){return e.toLowerCase().split(" ").join("-")}}});n("a5c6");v.render=p,v.__scopeId="data-v-5e278aa0";var g=v,h=Object(c["l"])("data-v-88e20e8e");Object(c["h"])("data-v-88e20e8e");var y={class:"navigation"},m={class:"navigation-container","data-a":""};Object(c["g"])();var k=h((function(e,t,n,a,r,o){return Object(c["f"])(),Object(c["c"])("nav",y,[Object(c["e"])("div",m,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(r.categories,(function(e,t){return Object(c["f"])(),Object(c["c"])("a",{key:t,href:o.getCategoryAnchor(e.title),class:"navigation-link"},[Object(c["e"])("span",null,Object(c["k"])(e.title),1)],8,["href"])})),128))])])})),w={name:"Nav",data:function(){return{categories:this.dictionary}},methods:{getCategoryAnchor:function(e){return"#".concat(e.toLowerCase().split(" ").join("-"))}}};n("2662");w.render=k,w.__scopeId="data-v-88e20e8e";var _=w,P={name:"App",components:{Nav:_,Dictionary:g}};n("c114");P.render=a;var x=P;fetch("/diccionario/data.json").then((function(e){return e.json()})).then((function(e){var t=Object(c["b"])(x);t.config.globalProperties={dictionary:e},t.mount("#app")}))},a5c6:function(e,t,n){"use strict";n("07bc")},b9c0:function(e,t,n){},c114:function(e,t,n){"use strict";n("0b6c")}});
//# sourceMappingURL=app.14c0b3d1.js.map