(function(){"use strict";var t={6119:function(t,n,r){r(6992),r(8674),r(9601),r(7727);var e=r(144),i=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"wrapper"},[r("header",[r("div",{staticClass:"navbar"},[r("div",{staticClass:"container"},[r("div",{staticClass:"navbar-content"},[r("div",{staticClass:"logo"},[t._v("VUE-CLI")]),r("ul",{staticClass:"navbar-list"},t._l(t.links,(function(n){return r("li",{key:n.title,staticClass:"navbar-item"},[r("router-link",{staticClass:"navbar-link",attrs:{to:n.url,title:n.title}},[t._v(t._s(n.title))])],1)})),0)])])])]),r("router-view")],1)},s=[],o={data:function(){return{links:[{title:"Home",url:"/"},{title:"Users",url:"/users"}]}}},a=o,c=r(1001),u=(0,c.Z)(a,i,s,!1,null,null,null),l=u.exports,f=r(8345),v=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("h1",[t._v("Home page")])])])])}],d={},h=d,g=(0,c.Z)(h,v,p,!1,null,"5e92bf82",null),m=g.exports,_=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("table",[r("thead",[r("tr",[r("th",{on:{click:function(n){return t.sort("age")}}},[t._v("Name ↓")]),r("th",{on:{click:function(n){return t.sort("age")}}},[t._v("Age ↓")]),r("th",{on:{click:function(n){return t.sort("gender")}}},[t._v("Gender ↓")])])]),r("tbody",t._l(t.usersSort,(function(n){return r("tr",{key:n.id},[r("td",[r("img",{attrs:{src:n.img,alt:n.name}}),r("span",{staticClass:"user_name"},[t._v(t._s(n.name))])]),r("td",[t._v(t._s(n.age))]),r("td",[t._v(t._s(n.gender))])])})),0)])])]),r("section",[r("div",{staticClass:"container"},[r("div",{staticClass:"button-list"},[r("div",{staticClass:"btn btnPrimary",on:{click:t.prevPage}},[t._v("←")]),r("div",{staticClass:"btn btnPrimary",on:{click:t.nextPage}},[t._v("→")])])])])])},b=[],C=(r(7327),r(1539),r(2707),r(9669)),w=r.n(C),k={components:{},data:function(){return{users:[],currentSort:"name",currSortDir:"asc",page:{current:1,length:3}}},created:function(){var t=this;w().get("https://tocode.ru/static/_secret/courses/1/usersCrmApi.php").then((function(n){t.users=n.data})).catch((function(t){console.log(t)}))},computed:{usersSort:function(){var t=this;return this.users.sort((function(n,r){var e=1;return"desc"===t.currSortDir&&(e=-1),n[t.currentSort]<r[t.currentSort]?-1*e:n[t.currentSort]>r[t.currentSort]?1*e:0})).filter((function(n,r){var e=(t.page.current-1)*t.page.length,i=t.page.current*t.page.length;if(r>=e&&r<i)return!0}))}},methods:{sort:function(t){t===this.currentSort&&(this.currSortDir="asc"===this.currSortDir?"desc":"asc"),this.currentSort=t},prevPage:function(){this.page.current>1&&(this.page.current-=1)},nextPage:function(){this.page.current*this.page.length<this.users.length&&(this.page.current+=1)}}},y=k,S=(0,c.Z)(y,_,b,!1,null,null,null),x=S.exports,Z=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"wrapper-content wrapper-content--fixed"},[r("section",[r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[t._v("Page not found...")]),r("p",[t._v("return to "),r("router-link",{staticClass:"link",attrs:{to:"/"}},[t._v("Main page")])],1)])])])},O=[],P={},E=P,j=(0,c.Z)(E,Z,O,!1,null,"5e3da5c3",null),$=j.exports;e.Z.use(f.Z);var D=new f.Z({mode:"history",routes:[{path:"/",name:"home",component:m},{path:"/users",name:"users",component:x},{path:"*",name:"notFound",component:$}]}),T=r(629);e.Z.use(T.ZP);var A=new T.ZP.Store({modules:{}});e.Z.config.productionTip=!1,new e.Z({router:D,store:A,render:function(t){return t(l)}}).$mount("#app")}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,r),s.exports}r.m=t,function(){var t=[];r.O=function(n,e,i,s){if(!e){var o=1/0;for(l=0;l<t.length;l++){e=t[l][0],i=t[l][1],s=t[l][2];for(var a=!0,c=0;c<e.length;c++)(!1&s||o>=s)&&Object.keys(r.O).every((function(t){return r.O[t](e[c])}))?e.splice(c--,1):(a=!1,s<o&&(o=s));if(a){t.splice(l--,1);var u=i();void 0!==u&&(n=u)}}return n}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[e,i,s]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,s,o=e[0],a=e[1],c=e[2],u=0;if(o.some((function(n){return 0!==t[n]}))){for(i in a)r.o(a,i)&&(r.m[i]=a[i]);if(c)var l=c(r)}for(n&&n(e);u<o.length;u++)s=o[u],r.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return r.O(l)},e=self["webpackChunkuser_crm"]=self["webpackChunkuser_crm"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[998],(function(){return r(6119)}));e=r.O(e)})();