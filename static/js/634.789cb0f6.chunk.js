"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[634],{634:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r,c=n(885),u=n(791),a=n(731),i=n(739),o=n(168),l=n(444).ZP.div(r||(r=(0,o.Z)(["\n    padding: 20px 40px;\n"]))),s=n(184),f=function(){var e=(0,a.lr)(),t=(0,c.Z)(e,2),n=t[0],r=t[1],o=n.get("query"),f=(0,u.useState)([]),d=(0,c.Z)(f,2),h=d[0],p=d[1],m=(0,u.useState)(o||""),v=(0,c.Z)(m,2),x=v[0],y=v[1],b=(0,i.TH)();(0,u.useEffect)((function(){var e="".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("afc22cf5c573169849cabd6217d3b7d3","&language=en-US&page=1&include_adult=false&query=").concat(x);""!==x&&fetch(e).then((function(e){return e.json()})).then((function(e){p(e.results.map((function(e){return{id:e.id,title:e.title}})))})).catch((function(e){return console.log(e)}))}),[x]);return(0,s.jsxs)(l,{children:[(0,s.jsxs)("form",{action:"",onSubmit:function(e){e.preventDefault();var t=e.target.query.value;y(t),r({query:t})},children:[(0,s.jsx)("input",{type:"text",name:"query",defaultValue:x}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("ul",{children:h.map((function(e){var t=e.id,n=e.title;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"".concat(t),search:{querySerch:"query=".concat(x)},state:{from:b},children:n})},t)}))})]})}}}]);
//# sourceMappingURL=634.789cb0f6.chunk.js.map