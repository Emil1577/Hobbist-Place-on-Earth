(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{121:function(e,t,n){"use strict";n.r(t);var c,a,r,i,s,o,b,l,d,j,u,m,h,O,g,p,x,y,v,f,A,w=n(0),k=n.n(w),N=n(43),D=n.n(N),C=(n(77),n(4)),I=n(91),B=n(132),E=n(134),S=n(131),Q=n(88),$=n(15),_=n(8),z=n(6),H=n(10),L=n(9),P=n(135),q=n(128),T=n(13),F=n(90),Y=n(19),J=n(133),U=(Object(J.a)(c||(c=Object(Y.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),Object(J.a)(a||(a=Object(Y.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"])))),R=Object(J.a)(r||(r=Object(Y.a)(["\n  mutation addUser($username: String!, $email: String!, $password: String!) {\n    addUser(username: $username, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),V=Object(J.a)(i||(i=Object(Y.a)(["\n  mutation removeCategory($categoryId: ID!) {\n    removeCategory(categoryId: $categoryId) {\n      _id\n    }\n    \n  }\n"]))),K=Object(J.a)(s||(s=Object(Y.a)(["\n  mutation removeHobby($hobbyId: ID!, $categoryId: ID!) {\n    removeHobby(hobbyId: $hobbyId, categoryId: $categoryId) {\n      _id\n    }\n    \n  }\n"]))),W=Object(J.a)(o||(o=Object(Y.a)(["\n  mutation removeComment($hobbyId: ID!, $commentId: ID!) {\n    removeComment(hobbyId: $hobbyId, commentId: $commentId) {\n      _id\n    }\n    \n  }\n"]))),X=Object(J.a)(b||(b=Object(Y.a)(["\n  mutation addCategory ( $title: String!, $description: String!){\n    addCategory ( title: $title, description: $description) {\n\n      title\n      description\n\n    }\n  }\n"]))),Z=Object(J.a)(l||(l=Object(Y.a)(["\n\nmutation addHobby ($categories: ID!, $title: String!, $description: String!){\n  addHobby ( categories: $categories, title: $title, description: $description) {\n\n    title\n    description\n    categories {\n      _id\n      title\n    }\n    users {\n      _id\n    }\n  }\n  \n}\n"]))),G=Object(J.a)(d||(d=Object(Y.a)(["\nmutation addComment ( $hobbies: ID!, $content: String! ){\n  addComment ( hobbies: $hobbies, content: $content ) {\n    content\n    hobbies {\n      _id\n      title\n    } \n    users {\n      username\n    }\n    \n  }\n  \n}\n"]))),M=(Object(J.a)(j||(j=Object(Y.a)(["\nmutation addHobbyLike ($_id: String!, $likes: Int!){\n  addHobbyLike ( likes: $likes ) {\n    likes\n  }\n}\n"]))),Object(J.a)(u||(u=Object(Y.a)(["\nmutation addCommentLike ($_id: String!, $likes: Int!){\n  addCommentLike ( likes: $likes ) {\n    likes\n  }\n}\n"]))),Object(J.a)(m||(m=Object(Y.a)(["\nmutation addHobbyDislike ($_id: String!, $dislikes: Int!){\n  addHobbyLike ( dislikes: $dislikes ) {\n    dislikes\n  }\n  \n}\n"]))),Object(J.a)(h||(h=Object(Y.a)(["\nmutation addCommentDislike ($_id: String!, $dislikes: Int!){\n  addCommentLike ( dislikes: $dislikes ) {\n    dislikes\n  }\n  \n}\n"]))),Object(J.a)(O||(O=Object(Y.a)(["\n  query users {\n    users {\n      _id\n      email\n      username\n      hobbies{\n        _id\n        title\n        description\n      }\n      comments{\n        _id\n        content\n      }\n\n    }\n  }\n"])))),ee=Object(J.a)(g||(g=Object(Y.a)(["\nquery hobbies($categories: ID! ) {\n  hobbies(categories: $categories) {\n    _id\n    title\n    description\n    categories{\n      _id\n      title\n      description\n    }\n\n  }  \n}\n"]))),te=Object(J.a)(p||(p=Object(Y.a)(["\n  query category($categoryId: ID! ) {\n    category(categoryId: $categoryId) {\n      _id\n      title\n      description\n\n    }  \n  }\n"]))),ne=Object(J.a)(x||(x=Object(Y.a)(["\n  query categories {\n    categories {\n      _id\n      title\n      description\n      hobbies{\n        _id\n        title\n        description\n      }\n    }\n  }\n"]))),ce=(Object(J.a)(y||(y=Object(Y.a)(["\n  query comments{\n    comments {\n      _id\n      content\n      users {\n        username\n      }\n      hobbies { category }\n    }\n  }\n"]))),Object(J.a)(v||(v=Object(Y.a)(["\n  query comments($hobbies: ID!) {\n    comments(hobbies: $hobbies) {\n      _id\n      content\n      hobbies{\n        _id\n        title\n        description\n      }\n      users {\n        _id\n        username\n        \n      }\n    }\n  }\n"])))),ae=Object(J.a)(f||(f=Object(Y.a)(["\n  query hobby($hobbyId: ID!) {\n    hobby(hobbyId: $hobbyId) {\n      _id\n      title\n      description\n      categories {\n        title\n      }\n      comments {\n        _id\n        content\n        users {\n          _id\n          username\n          \n        }\n      }\n      users {\n        _id\n        username\n        \n      }\n    }\n  }\n"]))),re=Object(J.a)(A||(A=Object(Y.a)(["\n  query me {\n    me {\n      _id\n      username\n      hobbies{\n        _id\n        title\n        description\n      }\n    }\n  }\n"]))),ie=n(28),se=n(29),oe=n(67),be=new(function(){function e(){Object(ie.a)(this,e)}return Object(se.a)(e,[{key:"getProfile",value:function(){return Object(oe.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!(!e||this.isTokenExpired(e))}},{key:"isTokenExpired",value:function(e){return Object(oe.a)(e).exp<Date.now()/1e3&&(localStorage.removeItem("id_token"),!0)}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.reload()}}]),e}()),le=n(44),de=n(1),je=Object(le.withSwal)((function(e){var t=e.category,n=e.swal,c=Object(w.useState)(""),a=Object(L.a)(c,2),r=a[0],i=a[1],s=Object(w.useState)(""),o=Object(L.a)(s,2),b=o[0],l=o[1],d=Object(w.useState)(null),j=Object(L.a)(d,2),u=j[0],m=j[1],h=Object(w.useState)(0),O=Object(L.a)(h,2),g=O[0],p=O[1],x=Object(P.a)(ne),y=(x.loading,x.data),v=(null===y||void 0===y?void 0:y.categories)||[],f=v.map((function(e){return{value:e._id,label:e.title}})),A=Object(w.useState)([]),k=Object(L.a)(A,2),N=k[0],D=k[1];Object(w.useEffect)((function(){D(v.map((function(e){return{value:e._id,label:e.title}})))}),[v]),Object(w.useEffect)((function(){if(t){var e=N.find((function(e){return e.label===t}));e!==u&&m(e)}}),[t,N,u]);var I=Object(q.a)(Z,{update:function(e,t){var n=t.data.addHobby;try{var c=e.readQuery({query:te}).categories.map((function(e){return e._id===n.categories[0]._id?Object(C.a)(Object(C.a)({},e),{},{hobbies:[].concat(Object(T.a)(e.hobbies),[n])}):e}));e.writeQuery({query:ne,data:{categories:c}})}catch(a){console.error(a)}}}),B=Object(L.a)(I,2),E=B[0],S=B[1],Q=S.loading,_=S.error,Y=function(){var e=Object(H.a)(Object(z.a)().mark((function e(t){return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,E({variables:{title:r,description:b,categories:u.value}});case 4:i(""),l(""),m(null),n.fire({title:"Comment added",icon:"success",confirmButtonText:"OK"}).then((function(){window.location.reload()})),setTimeout((function(){return window.location.reload()}),2e3),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error("Error creating hobby:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),J=function(e){var t=e.target,n=t.name,c=t.value;"description"===n&&c.length<=280?l(c):i(c),p(r.length+b.length)};return Object(de.jsxs)("div",{className:"form-group",children:[Object(de.jsx)("h5",{children:"Add a New Hobby"}),be.loggedIn()?Object(de.jsxs)(de.Fragment,{children:[Object(de.jsxs)("p",{className:"m-0 ".concat(280===g||_?"text-danger":""),children:["Character Count: ",g,"/280"]}),Object(de.jsxs)("form",{onSubmit:Y,children:[Object(de.jsx)("div",{children:Object(de.jsx)("label",{children:" Title:"})}),Object(de.jsx)("input",{value:r,onChange:J}),Object(de.jsx)("label",{children:"Description:"}),Object(de.jsx)("input",{name:"description",value:b,onChange:J}),Object(de.jsx)("label",{children:"Category:"}),Object(de.jsx)(F.a,{options:f,value:u,onChange:m,isClearable:!0}),Object(de.jsx)("button",{type:"submit",disabled:!r||!b,children:Q?"Creating...":"Create Hobby"}),_&&Object(de.jsxs)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:["Error creating hobby: ",_.message]})]})]}):Object(de.jsxs)("p",{children:["You need to be logged in to add a Hobby. Please"," ",Object(de.jsx)($.b,{to:"/login",children:"login"})," or ",Object(de.jsx)($.b,{to:"/signup",children:"signup."})]})]})})),ue=n(35),me=n.n(ue),he=Object(le.withSwal)((function(e){var t=e.swal,n=Object(w.useState)(""),c=Object(L.a)(n,2),a=c[0],r=c[1],i=Object(w.useState)(""),s=Object(L.a)(i,2),o=s[0],b=s[1],l=Object(w.useState)(0),d=Object(L.a)(l,2),j=d[0],u=d[1],m=Object(q.a)(X,{update:function(e,t){var n=t.data.addCategory;try{var c=e.readQuery({query:ne}).categories;e.writeQuery({query:ne,data:{categories:[].concat(Object(T.a)(c),[n])}})}catch(a){console.error(a)}}}),h=Object(L.a)(m,2),O=h[0],g=h[1],p=g.loading,x=g.error,y=function(e){var t=e.target,n=t.name,c=t.value;"description"===n&&b(c),"title"===n&&r(c),u(a.length+o.length)},v=function(){var e=Object(H.a)(Object(z.a)().mark((function e(n){return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,O({variables:{title:a,description:o}});case 4:r(""),b(""),u(0),t.fire({icon:"success",title:"Category added!",showConfirmButton:!1,timer:1500}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(de.jsxs)("div",{children:[Object(de.jsx)("h5",{children:"Add a New Category"}),be.loggedIn()?Object(de.jsxs)(de.Fragment,{children:[Object(de.jsxs)("p",{className:"m-0 ".concat(280===j||x?"text-danger":""),children:["Character Count: ",j,"/280"]}),Object(de.jsxs)("form",{onSubmit:v,children:[Object(de.jsx)("label",{children:"Title:"}),Object(de.jsx)("input",{name:"title",value:a,onChange:y}),Object(de.jsx)("label",{children:"Description:"}),Object(de.jsx)("input",{name:"description",value:o,onChange:y}),Object(de.jsx)("div",{children:Object(de.jsx)("button",{type:"submit",disabled:!a||!o,children:p?"Creating...":"Create Category"})}),x&&Object(de.jsxs)("div",{className:"col-12 my-3 bg-danger text-white p-3",children:["Error creating Category: ",x.message]})]})]}):Object(de.jsxs)("p",{children:["You need to be logged in to add a Category. Please"," ",Object(de.jsx)($.b,{to:"/login",children:"login"})," or ",Object(de.jsx)($.b,{to:"/signup",children:"signup."})]})]})}),{Swal:me.a}),Oe=function(e){var t=e.categories,n=e.title,c=e.description,a=e.onDelete;return t.length?Object(de.jsxs)("div",{children:[Object(de.jsx)("h3",{children:n})&&Object(de.jsx)("p",{children:c}),t&&t.map((function(e){return Object(de.jsxs)("div",{className:"card mb-3",children:[Object(de.jsx)("h4",{className:"card-header bg-primary text-light p-2 m-0"}),Object(de.jsxs)("div",{className:"card-body bg-light p-2",children:[Object(de.jsx)("p",{children:e.title}),Object(de.jsx)("p",{children:e.description})]}),Object(de.jsx)("div",{children:Object(de.jsx)("button",{className:"btn btn-danger btn-block btn-squared",onClick:function(){return a(e._id)},children:"Delete"})}),Object(de.jsx)("div",{className:"card-footer",children:Object(de.jsx)($.b,{className:"btn btn-primary btn-block btn-squared",to:"/categories/".concat(e._id),children:"Join the discussion on this category."})})]},e._id)}))]}):Object(de.jsx)("h3",{children:"No Categories Yet"})},ge=function(){var e=Object(P.a)(ne),t=e.loading,n=e.data,c=(null===n||void 0===n?void 0:n.categories)||[],a=Object(q.a)(V,{update:function(e,t){var n=t.data.removeCategory;e.modify({fields:{categories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=(arguments.length>1?arguments[1]:void 0).readField;return e.filter((function(e){return n._id!==t("_id",e)}))}}})}}),r=Object(L.a)(a,1)[0],i=function(){var e=Object(H.a)(Object(z.a)().mark((function e(t){return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r({variables:{categoryId:t}});case 3:return e.next=5,me.a.fire({icon:"success",title:"Category deleted!",showConfirmButton:!1,timer:1500});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(de.jsxs)("div",{className:"container flex-direction: row",children:[Object(de.jsxs)("aside",{className:"container col-xl-4 col-md-12 mb-12 p-3",children:["`",Object(de.jsxs)("div",{className:"col-12 col-md-10 mb-3 p-3",style:{border:"1px dotted #1a1a1a"},children:[Object(de.jsx)(je,{}),"`"]}),"`",Object(de.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",style:{border:"1px dotted #1a1a1a"},children:Object(de.jsx)(he,{})})]}),Object(de.jsx)("div",{className:"container col-xl-8 col-md-12 mb-12 p-3",children:t?Object(de.jsx)("div",{children:"Loading..."}):Object(de.jsx)(Oe,{categories:c,title:"Categories",description:"Select a category to see its hobbies",onDelete:i})})]})},pe=n(12),xe=function(){var e=Object(w.useState)({username:"",email:"",password:""}),t=Object(L.a)(e,2),n=t[0],c=t[1],a=Object(q.a)(R),r=Object(L.a)(a,2),i=r[0],s=r[1],o=s.error,b=s.data,l=function(e){var t=e.target,a=t.name,r=t.value;c(Object(C.a)(Object(C.a)({},n),{},Object(pe.a)({},a,r)))},d=function(){var e=Object(H.a)(Object(z.a)().mark((function e(t){var c,a;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,i({variables:Object(C.a)({},n)});case 5:c=e.sent,a=c.data,be.login(a.addUser.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(de.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(de.jsx)("div",{className:"col-12 col-lg-10",children:Object(de.jsxs)("div",{className:"card",children:[Object(de.jsx)("h4",{className:"text-bg-primary p-3",children:"Sign Up"}),Object(de.jsxs)("div",{className:"card-body",children:[b?Object(de.jsxs)("p",{children:["Success! You may now head"," ",Object(de.jsx)($.b,{to:"/",children:"back to the homepage."})]}):Object(de.jsxs)("form",{onSubmit:d,children:[Object(de.jsx)("input",{className:"form-input",placeholder:"Your username",name:"username",type:"text",value:n.name,onChange:l}),Object(de.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:n.email,onChange:l}),Object(de.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:n.password,onChange:l}),Object(de.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),o&&Object(de.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:o.message})]})]})})})},ye=function(e){var t=Object(w.useState)({email:"",password:""}),n=Object(L.a)(t,2),c=n[0],a=n[1],r=Object(q.a)(U),i=Object(L.a)(r,2),s=i[0],o=i[1],b=o.error,l=o.data,d=function(e){var t=e.target,n=t.name,r=t.value;a(Object(C.a)(Object(C.a)({},c),{},Object(pe.a)({},n,r)))},j=function(){var e=Object(H.a)(Object(z.a)().mark((function e(t){var n,r;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(c),e.prev=2,e.next=5,s({variables:Object(C.a)({},c)});case 5:n=e.sent,r=n.data,be.login(r.login.token),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:a({email:"",password:""});case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(de.jsx)("main",{className:"flex-row justify-center mb-4",children:Object(de.jsx)("div",{className:"col-12 col-lg-10",children:Object(de.jsxs)("div",{className:"card",children:[Object(de.jsx)("h4",{className:"text-bg-primary p-3",children:"Login"}),Object(de.jsxs)("div",{className:"card-body",children:[l?Object(de.jsxs)("p",{children:["Success! You may now head"," ",Object(de.jsx)($.b,{to:"/",children:"back to the homepage."})]}):Object(de.jsxs)("form",{onSubmit:j,children:[Object(de.jsx)("input",{className:"form-input",placeholder:"Your email",name:"email",type:"email",value:c.email,onChange:d}),Object(de.jsx)("input",{className:"form-input",placeholder:"******",name:"password",type:"password",value:c.password,onChange:d}),Object(de.jsx)("button",{className:"btn btn-block btn-primary",style:{cursor:"pointer"},type:"submit",children:"Submit"})]}),b&&Object(de.jsx)("div",{className:"my-3 p-3 bg-danger text-white",children:b.message})]})]})})})},ve=Object(le.withSwal)((function(e){var t=e.thisHobby,n=e.swal,c=Object(w.useState)(""),a=Object(L.a)(c,2),r=a[0],i=a[1],s=Object(w.useState)(0),o=Object(L.a)(s,2),b=o[0],l=o[1],d=Object(q.a)(G),j=Object(L.a)(d,2),u=j[0],m=j[1].error,h=function(){var e=Object(H.a)(Object(z.a)().mark((function e(c){var a;return Object(z.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,u({variables:{hobbies:t,content:r,users:be.getProfile().data.username}});case 4:a=e.sent,a.data,i(""),l(0),n.fire({title:"Comment added",icon:"success",confirmButtonText:"OK"}).then((function(){window.location.reload()})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(de.jsxs)("div",{children:[Object(de.jsx)("h5",{children:"What are your thoughts on this hobby?"}),be.loggedIn()?Object(de.jsxs)(de.Fragment,{children:[Object(de.jsxs)("p",{className:"m-0 ".concat(280===b||m?"text-danger":""),children:["Character Count: ",b,"/280",m&&Object(de.jsx)("span",{className:"ml-2",children:m.message})]}),Object(de.jsxs)("form",{className:"flex-row justify-center justify-space-between-md align-center",onSubmit:h,children:[Object(de.jsx)("div",{className:"col-12 col-lg-9",children:Object(de.jsx)("textarea",{name:"content",placeholder:"Add your comment...",value:r,className:"form-input w-100",style:{lineHeight:"1.5",resize:"vertical"},onChange:function(e){var t=e.target,n=t.name,c=t.value;"content"===n&&c.length<=280&&(i(c),l(c.length))}})}),Object(de.jsx)("div",{className:"col-12 col-lg-3",children:Object(de.jsx)("button",{className:"btn btn-primary btn-block py-3",type:"submit",children:"Add Comment"})})]})]}):Object(de.jsxs)("p",{children:["You need to be logged in to share your thoughts. Please"," ",Object(de.jsx)($.b,{to:"/login",children:"login"})," or ",Object(de.jsx)($.b,{to:"/signup",children:"signup."})]})]})})),fe=function(){var e=Object(_.o)().hobbyId,t=Object(P.a)(ae,{variables:{hobbyId:e}}),n=t.loading,c=t.data,a=Object(P.a)(ce,{variables:{hobbies:e}}),r=a.loading,i=a.data,s=a.refetch,o=Object(q.a)(W),b=Object(L.a)(o,1)[0];if(n||r)return Object(de.jsx)("div",{children:"Loading..."});var l=(null===c||void 0===c?void 0:c.hobby)||{},d=(null===i||void 0===i?void 0:i.comments)||[],j=function(){var t=Object(H.a)(Object(z.a)().mark((function t(n){return Object(z.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b({variables:{commentId:n,hobbyId:e}});case 3:return t.next=5,me.a.fire({icon:"success",title:"Comment deleted!",showConfirmButton:!1,timer:1500});case 5:s(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(de.jsxs)("div",{children:[Object(de.jsxs)("div",{className:"my-6",children:[Object(de.jsx)("h2",{children:l.title}),Object(de.jsx)("p",{children:l.description})]}),Object(de.jsx)("div",{className:"my-6",children:Object(de.jsx)("h3",{children:"Comments:"})}),d.map((function(e){return Object(de.jsxs)("div",{className:"my-6",children:[e.users.map((function(e){return Object(de.jsxs)("h4",{children:["Commented by: ",e.username]},e._id)})),Object(de.jsxs)("p",{children:["Content: ",e.content]}),Object(de.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){return j(e._id)},children:"Delete"})]},e._id)})),Object(de.jsxs)("div",{className:"my-6",children:[Object(de.jsx)(ve,{thisHobby:e}),Object(de.jsx)("br",{}),Object(de.jsx)("br",{})]})]})},Ae=n.p+"static/media/lolo.392f62d0.png",we=function(){return Object(de.jsx)("header",{style:{backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiwAAABNCAYAAACFQD8/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAJBSURBVHhe7dm/ThRRGMbh78AiwV0K78BeqCyprUy8AmvtabkKr8OrsPMOJDFcAA2F/FMW9jgJk1BQLdlN3k2eZzI5c86UXyb5JdP2j770ItcwnWnN6vjhpBZtUW242Cy9P35i58P6Y35X1cxwI7Ve7XZSl59+1dWH38PWHDfZwfRj7bTXw1zHA+JtjSsAQCzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAQDzBAgDEEywAwDOt96hbsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLABBPsAAA8QQLALB2u3/HhxcSLADA2r3/uai3Z72278eDJQkWAGDtrmdVX7/d1/6fNp4sR7AAAKvVq95cVE3uxv3g9HC7Tt+1+rc3vHwBwQIArFarupq1epg8xcl8p9f3z5O63RsPliRYAICVm7/q1beefv8shuK4mY6bpVX9B0bwfHqlmvIoAAAAAElFTkSuQmCC",")")},className:"bg-primary mb-6 py-3 flex-row align-center ",children:Object(de.jsxs)("div",{className:"container flex-row justify-space-between-lg justify-center align-center",children:[Object(de.jsxs)("div",{children:[Object(de.jsx)($.b,{className:"a",to:"/",children:Object(de.jsx)("h1",{className:"m-2",children:"Hobbiest Place On Earth"})}),Object(de.jsx)("img",{src:Ae,alt:""}),Object(de.jsx)("p",{className:"m-0"})]}),Object(de.jsx)("div",{children:be.loggedIn()?Object(de.jsxs)(de.Fragment,{children:[Object(de.jsxs)($.b,{className:"btn btn-lg btn-info m-2",to:"/me",children:[be.getProfile().data.username,"'s profile"]}),Object(de.jsx)("button",{className:"btn btn-lg btn-light m-2",onClick:function(e){e.preventDefault(),be.logout()},children:"Logout"})]}):Object(de.jsxs)(de.Fragment,{children:[Object(de.jsx)($.b,{className:"btn btn-lg btn-info m-2",to:"/login",children:"Login"}),Object(de.jsx)($.b,{className:"btn btn-lg btn-light m-2",to:"/signup",children:"Signup"})]})})]})})},ke=function(){var e=Object(_.k)(),t=Object(_.m)();return Object(de.jsx)("footer",{className:"w-100 mt-auto bg-secondary p-4",children:Object(de.jsxs)("div",{className:"container text-center mb-5",children:["/"!==e.pathname&&Object(de.jsx)("button",{className:"btn btn-dark mb-3",onClick:function(){return t(-1)},children:"\u2190 Go Back"}),Object(de.jsxs)("h6",{children:["Hobbiest Place on Earth"," ",Object(de.jsx)("span",{className:"emoji",role:"img","aria-label":"heart","aria-hidden":"false",children:"\u2764\ufe0f"})," ","by the Team 7."]})]})})},Ne=function(){var e=Object(_.o)().id,t=Object(P.a)(te,{variables:{categoryId:e}}),n=t.loading,c=t.data,a=Object(P.a)(ee,{variables:{categories:e}}),r=a.loading,i=a.data,s=a.refetch,o=Object(q.a)(K),b=Object(L.a)(o,1)[0];if(n||r)return Object(de.jsx)("div",{children:"loading..."});var l=c.category,d=i.hobbies,j=function(){var t=Object(H.a)(Object(z.a)().mark((function t(n){return Object(z.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b({variables:{hobbyId:n,categoryId:e}});case 3:return t.next=5,me.a.fire({title:"Hobby deleted",text:"The hobby has been deleted successfully.",icon:"success"});case 5:s(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(de.jsx)("div",{children:Object(de.jsxs)("div",{children:[Object(de.jsxs)("h2",{className:"card-header bg-dark text-light p-2 m-0",children:[l.title," ",Object(de.jsx)("br",{}),Object(de.jsxs)("span",{style:{fontSize:"1rem"},children:["One of my category is ",l.title]})]}),Object(de.jsx)("div",{className:"bg-light-profile-cat py-4",children:Object(de.jsx)("blockquote",{className:"p-4-profile-cat",style:{fontSize:"1.5rem",fontStyle:"italic",lineHeight:"1.5"},children:l.description})}),Object(de.jsxs)("div",{className:"my-3 container flex-direction: row",children:[Object(de.jsxs)("div",{className:"my-5 container col-xl-8 col-md-12 mb-12 p-3",children:[Object(de.jsx)("h3",{children:"Hobbies:"}),d.map((function(e){return Object(de.jsxs)("div",{children:[Object(de.jsx)($.b,{className:"a",to:"/hobbies/".concat(e._id),children:Object(de.jsx)("h4",{children:e.title})}),Object(de.jsx)("p",{className:"profile-hobby-cont",children:e.description}),Object(de.jsx)($.b,{className:"btn btn-primary btn-block btn-squared",to:"/hobbies/".concat(e._id),children:"Join the discussion on this hobby."}),Object(de.jsx)("br",{}),Object(de.jsx)("button",{className:"btn btn-danger btn-block btn-squared",onClick:function(){return j(e._id)},children:"Delete"}),Object(de.jsx)("br",{})]},e._id)}))]}),Object(de.jsxs)("div",{className:"my-6",children:[Object(de.jsx)(je,{category:l.title,categoryId:l._id}),Object(de.jsx)("br",{}),Object(de.jsx)("br",{})]}),Object(de.jsx)("div",{})]})]})})},De=function(){var e=Object(_.o)().username,t=Object(P.a)(e?M:re,{variables:{username:e}}),n=t.loading,c=t.data,a=(null===c||void 0===c?void 0:c.me)||{};console.log(a);var r=a.hobbies;return n?Object(de.jsx)("div",{children:"Loading..."}):Object(de.jsx)("div",{children:Object(de.jsxs)("div",{className:"flex-row justify-center mb-3",children:[Object(de.jsxs)("h2",{className:"col-12 col-md-10 bg-dark text-light p-3 mb-5",children:["Viewing ","".concat(a.username,"'s your")," profile."]}),Object(de.jsxs)("div",{className:"col-12 col-md-10 mb-5",children:[Object(de.jsx)("h3",{children:" Hobbies:"}),Object(de.jsx)("div",{className:"my-5",children:r.map((function(e){return Object(de.jsxs)("div",{children:[Object(de.jsxs)("p",{children:["Title: ",e.title]}),Object(de.jsxs)("p",{children:["Description: ",e.description]}),Object(de.jsx)($.b,{className:"btn btn-primary btn-block btn-squared",to:"/hobbies/".concat(e._id),children:"Join the discussion on this hobby."})]},e._id)}))})]}),!e&&Object(de.jsx)("div",{className:"col-12 col-md-10 mb-3 p-3",children:Object(de.jsx)(je,{})})]})})},Ce=Object(I.a)({uri:"/graphql"}),Ie=Object(Q.a)((function(e,t){var n=t.headers,c=localStorage.getItem("id_token");return{headers:Object(C.a)(Object(C.a)({},n),{},{authorization:c?"Bearer ".concat(c):""})}})),Be=new B.a({link:Ie.concat(Ce),cache:new E.a});var Ee=function(){return Object(de.jsx)(S.a,{client:Be,children:Object(de.jsx)($.a,{children:Object(de.jsxs)("div",{className:"flex-column justify-flex-start min-150-vh",children:[Object(de.jsx)(we,{}),Object(de.jsx)("div",{className:"container",children:Object(de.jsxs)(_.c,{children:[Object(de.jsx)(_.a,{path:"/",element:Object(de.jsx)(ge,{})}),Object(de.jsx)(_.a,{path:"/login",element:Object(de.jsx)(ye,{})}),Object(de.jsx)(_.a,{path:"/signup",element:Object(de.jsx)(xe,{})}),Object(de.jsx)(_.a,{path:"/categories/:id",element:Object(de.jsx)(Ne,{})}),Object(de.jsx)(_.a,{path:"/hobbies/:hobbyId",element:Object(de.jsx)(fe,{})}),Object(de.jsx)(_.a,{path:"/me",element:Object(de.jsx)(De,{})})]})}),Object(de.jsx)(ke,{})]})})})},Se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,136)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};D.a.render(Object(de.jsx)(k.a.StrictMode,{children:Object(de.jsx)(Ee,{})}),document.getElementById("root")),Se()},77:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.bddf77d0.chunk.js.map