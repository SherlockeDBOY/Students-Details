(this["webpackJsonpcard-app"]=this["webpackJsonpcard-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(3),r=n.n(a),i=(n(12),n(4)),u=n(5),o=n(7),d=n(6),h=(n(13),n(14),n(15),n(0)),l=function(e){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("img",{alt:"Students",src:"https://robohash.org/students/".concat(e.student.id,"?size=180x180")}),Object(h.jsxs)("h2",{children:[" ",e.student.name," "]}),Object(h.jsx)("p",{children:e.student.email})]})},j=(n(17),function(e){return Object(h.jsx)("div",{className:"card-container",children:e.students.map((function(e){return Object(h.jsx)(l,{student:e},e.id)}))})}),f=(n(18),function(e){var t=e.placeholder,n=e.handleChange;return Object(h.jsx)("input",{type:"search",className:"search",placeholder:t,onChange:n})}),p=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={students:[],searchField:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({students:t})}))}},{key:"render",value:function(){var e=this.state,t=e.students,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{className:"heading",children:" Student Details "}),Object(h.jsx)(f,{placeholder:"Search Students",handleChange:this.handleChange}),Object(h.jsx)(j,{students:c})]})}}]),n}(c.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),b()}],[[19,1,2]]]);
//# sourceMappingURL=main.4194656a.chunk.js.map