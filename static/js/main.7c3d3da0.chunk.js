(this.webpackJsonphookstodo=this.webpackJsonphookstodo||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),o=n.n(i),l=n(9),r=n.n(l),s=n(2),a=n(8),j=n(6),d=n(10),u=n.n(d),b=(n(24),function(t){return Object(c.jsx)("div",{className:"list",children:t.list.map((function(e){return Object(c.jsxs)("div",{className:"list-content",children:[Object(c.jsxs)("li",{style:{textDecoration:e.isCompleted?"line-through":"none"},onClick:function(){return t.toggleState(e.id)},children:[Object(c.jsx)("input",{type:"checkbox",checked:e.isCompleted,onChange:function(){return!e.isCompleted}})," ",e.text]}),Object(c.jsxs)("div",{className:"tooltip",children:["   ",Object(c.jsx)("button",{onClick:function(){return t.deleteItem(e.id)},children:"x"}),Object(c.jsx)("span",{className:"tooltiptext",children:"delete"})]})]},e.id)}))})});n(25);var O=function(){var t=Object(i.useState)({text:""}),e=Object(j.a)(t,2),n=e[0],o=e[1],l=Object(i.useState)([]),r=Object(j.a)(l,2),d=r[0],O=r[1],h=Object(i.useState)("all"),f=Object(j.a)(h,2),x=f[0],p=f[1],m=function(t){t.preventDefault(),n.text.trim().length>0&&O((function(t){return[].concat(Object(s.a)(t),[n])})),o({text:""})},C=Object(s.a)(d);return"all"===x?C=Object(s.a)(d):"active"===x?C=C.filter((function(t){return!1===t.isCompleted})):"completed"===x&&(C=C.filter((function(t){return!0===t.isCompleted}))),Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("header",{id:"header",children:"TO-DO LIST"}),Object(c.jsxs)("p",{children:[" Number of active todos :"," ",d.filter((function(t){return!1===t.isCompleted})).length,"  "]}),Object(c.jsxs)("div",{className:"buttonGrp",children:[Object(c.jsx)("button",{onClick:function(){p("all")},children:" ALL "}),Object(c.jsx)("button",{onClick:function(){p("active")},children:" ACTIVE "}),Object(c.jsx)("button",{onClick:function(){p("completed")},children:" COMPLETED "})]}),Object(c.jsx)("button",{onClick:function(){var t=d.filter((function(t){return!1===t.isCompleted}));O(Object(s.a)(t))},children:" Delete Completed"}),Object(c.jsxs)("form",{onSubmit:m,children:[Object(c.jsx)("input",{placeholder:"Enter Here",onChange:function(t){o((function(e){return Object(a.a)(Object(a.a)({},e),{},{text:t.target.value,id:u.a.generate(),isCompleted:!1})}))},value:n.text}),Object(c.jsx)("button",{onClick:m,children:"+"})]}),Object(c.jsx)("div",{children:Object(c.jsx)(b,{toggleState:function(t){for(var e=Object(s.a)(d),n=0;n<e.length;n++)e[n].id===t&&(e[n].isCompleted=!e[n].isCompleted);O(Object(s.a)(e))},list:C,deleteItem:function(t){var e=d.filter((function(e){return e.id!==t}));O(Object(s.a)(e))}})})]})};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.7c3d3da0.chunk.js.map