(function(t){function e(e){for(var a,s,c=e[0],i=e[1],l=e[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"1a5c":function(t,e,n){},"1a90":function(t,e,n){},4362:function(t,e,n){"use strict";var a=n("1a90"),r=n.n(a);r.a},"532a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=(n("034f"),n("2877")),c={},i=Object(s["a"])(c,r,o,!1,null,null,null),l=i.exports,u=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"background"}),n("div",{staticClass:"content"},[t._m(0),n("div",{staticClass:"content-container body"},[n("div",{staticClass:"buttons"},[n("div",{staticClass:"button",class:{active:t.about},on:{click:function(){t.about=!t.about,t.showcase=!1}}},[t._v("About")]),n("div",{staticClass:"button",class:{active:t.showcase},on:{click:function(){t.showcase=!t.showcase,t.about=!1}}},[t._v("Showcase")])]),n("about-me",{staticClass:"transition",class:{hidden:!t.about}}),n("showcase",{staticClass:"transition",class:{hidden:!t.showcase}})],1)])])},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-container"},[n("h1",[t._v("Collwyn Bevan")]),n("p",{staticClass:"subtitle"},[t._v("Full stack developer")])])}],v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("p",{staticClass:"description"},[t._v(" Hi, I'm a degree apprentice currently completing my 2nd year at IBM and Exeter university. "),n("br"),t._v("I am currently a rapid prototyping developer, which means I mainly create full-stack web applications for prominent IBM clients, I also help teach people how to use IBM technologies such as IBM cloud, and Watson assistant, whilst also teaching them JavaScript, HTML, CSS, and nodeJS. "),n("br"),n("br"),t._v("Technologies I regularly work with: ")]),n("ul",[n("li",[t._v("HTML")]),n("li",[t._v("CSS")]),n("li",[t._v("JavaScript")]),n("li",[t._v("NodeJS")]),n("li",[t._v("VueJS")]),n("li",[t._v("Many APIs")])])])}],h={},b=h,_=(n("4362"),Object(s["a"])(b,v,d,!1,null,"35e88894",null)),m=_.exports,w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"title"},[t._v("Nothing here yet!")]),n("p",{staticClass:"description"},[t._v(" If you are interested in working with me and appearing here please do contact "),n("b",{staticClass:"bold"},[t._v("collwynbevan@gmail.com")]),t._v(" :) ")])])}],g={},C=g,S=(n("6082"),Object(s["a"])(C,w,y,!1,null,"34c189e8",null)),O=S.exports,j={components:{AboutMe:m,Showcase:O},data:function(){return{about:!1,showcase:!1}}},M=j,x=(n("7d32"),Object(s["a"])(M,p,f,!1,null,"4411b6b0",null)),I=x.exports;a["a"].use(u["a"]);var k=[{path:"/",name:"Home",component:I}],E=new u["a"]({routes:k}),P=E;a["a"].config.productionTip=!1,new a["a"]({router:P,render:function(t){return t(l)}}).$mount("#app")},6082:function(t,e,n){"use strict";var a=n("532a"),r=n.n(a);r.a},"7d32":function(t,e,n){"use strict";var a=n("1a5c"),r=n.n(a);r.a},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.a6279a95.js.map