(this.webpackJsonpaffle=this.webpackJsonpaffle||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},115:function(e,t,n){},123:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(16),i=n.n(c),l=(n(110),n.p,n(111),n(26)),o=n(31),s=n(186),u=function(e){return{type:"SUBMIT_FORM",payload:e}},j=n(92),b=n(169),d=n(176),p=n(183),O=n(185),h=n(173),f=n(69),g=(n(115),n(184)),m=n(6),x=Object(b.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",flexWrap:"wrap","& > *":{margin:e.spacing(.5)}}}}));function y(e){var t=e.slot,n=e.timeHandler,a=x(),c=r.a.useState([{key:0,label:"10:00 AM",flag:""},{key:1,label:"10:30 AM",flag:""},{key:2,label:"11:00 AM",flag:""},{key:3,label:"11:30 AM",flag:""},{key:4,label:"12:00 PM",flag:""},{key:5,label:"12:30 PM",flag:""},{key:6,label:"1:00 PM",flag:""},{key:7,label:"1:30 PM",flag:""},{key:8,label:"2:00 PM",flag:""},{key:9,label:"2:30 PM",flag:""},{key:10,label:"3:00 PM",flag:""},{key:11,label:"3:30 PM",flag:""},{key:12,label:"4:00 PM",flag:""},{key:13,label:"4:30 PM",flag:""},{key:14,label:"5:00 PM",flag:""},{key:15,label:"5:30 PM",flag:""},{key:16,label:"6:00 PM",flag:""},{key:17,label:"6:30 PM",flag:""},{key:18,label:"7:00 PM",flag:""},{key:19,label:"7:30 PM",flag:""},{key:20,label:"8:00 PM",flag:""}]),i=Object(l.a)(c,2),o=i[0],s=i[1];return Object(m.jsxs)("div",{className:"chipx",children:[Object(m.jsx)("h3",{children:t}),Object(m.jsx)("div",{className:a.root,children:o.map((function(e){return Object(m.jsx)(g.a,{color:e.flag?"primary":"default",value:e.key,label:e.label,onClick:function(){return function(e){var t=Object(f.a)(o);t[e.key].flag="sam",t=t.map((function(t){return e.key==t.key?t.flag="sam":t.flag="",t})),s(t),n(e.label)}(e)}},e.key)}))})]})}n(117);var v=Object(b.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}})),k={meeting:"Training Room",currentDate:new Date};function M(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),b=i[0],f=i[1],g=Object(a.useState)(k.meeting),x=Object(l.a)(g,2),M=x[0],P=x[1],N=Object(a.useState)(k.currentDate),S=Object(l.a)(N,2),w=S[0],C=S[1],D=Object(o.b)(),E=Object(o.c)((function(e){return e})),I=v(),T=Object(a.useState)(!1),_=Object(l.a)(T,2),R=_[0],L=_[1],A=Object(a.useState)(!1),F=Object(l.a)(A,2),B=F[0],G=F[1],U=Object(a.useState)(""),W=Object(l.a)(U,2),z=W[0],X=W[1];console.log("state in form ",E);return Object(m.jsx)(h.a,{children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(m.jsxs)("div",{style:{width:350,margin:40,padding:0,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(m.jsxs)(h.a,{style:{margin:0},variant:"outlined",className:I.formControl,children:[Object(m.jsx)(O.a,{htmlFor:"outlined-meeting-native-simple",children:"Select Meeting Room"}),Object(m.jsxs)(p.a,{native:!0,value:M,onChange:function(e){P(e.target.value)},label:"Select Meeting Room",inputProps:{name:"meeting",id:"outlined-meeting-native-simple"},children:[Object(m.jsx)("option",{"aria-label":"None",value:""}),Object(m.jsx)("option",{children:"Training Room"}),Object(m.jsx)("option",{children:"General meeting"}),Object(m.jsx)("option",{children:"Group meeting"}),Object(m.jsx)("option",{children:"Discussion meeting"}),Object(m.jsx)("option",{children:"Company meeting"})]})]}),Object(m.jsx)("br",{}),Object(m.jsx)(s.a,{error:B,id:"outlined-full-width",label:"Name",placeholder:"Enter Your Name",margin:"normal",InputLabelProps:{shrink:!0},value:n,variant:"outlined",onChange:function(e){return r(e.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)(s.a,{error:R,id:"outlined-textarea",label:"Meeting Description",placeholder:"Enter Meeting Description",multiline:!0,helperText:R&&"description should have atleast 10 characters",InputLabelProps:{shrink:!0},value:b,variant:"outlined",onChange:function(e){return f(e.target.value)}})]}),Object(m.jsx)(j.a,{value:w,onChange:function(e){return C(e)}}),w.toDateString(),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("div",{children:Object(m.jsx)(y,{slot:"Please select your preferred slot",timeHandler:function(e){X(e)}})}),Object(m.jsx)("br",{}),Object(m.jsx)(d.a,{onClick:function(e){if(e.preventDefault(),!n||b.length<10)return G(!0),void L(!0);D(u({name:n,description:b,meeting:M,date:w.toLocaleDateString(),time:z})),P(k.meeting),C(k.currentDate),f(""),r("")},variant:"contained",color:"secondary",children:"BOOK APPOINTMENT"})]})})}var P=n(58),N=n.n(P),S=n(78),w=n(71);w.a.initializeApp({apiKey:"AIzaSyA9LQinui3eJFAK8oPx4fLbtaVn7WOYBfs",authDomain:"affle-3747d.firebaseapp.com",projectId:"affle-3747d",storageBucket:"affle-3747d.appspot.com",messagingSenderId:"611320614725",appId:"1:611320614725:web:92ec31814206c88a71b82c"});var C=w.a.auth(),D=new w.a.auth.GoogleAuthProvider;n(123);var E=function(e){var t=e.history,n=Object(o.b)(),a=function(){var e=Object(S.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C.signInWithPopup(D).then(function(){var e=Object(S.a)(N.a.mark((function e(a){var r,c;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.user,e.next=3,r.getIdTokenResult();case 3:c=e.sent,console.log("idTokenResult",c),n({type:"LOGGED_IN_USER",payload:{email:r.email,token:c.token,displayName:r.displayName}}),t.push("/home");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("you got error",e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"sty",children:Object(m.jsx)(d.a,{onClick:a,variant:"contained",color:"primary",children:"Login In With Google"})})},I=n(19),T=n(67),_=n(178),R=n(179),L=n(177),A=n(180),F=n(187),B=n(93),G=n(79),U=n.n(G),W=Object(b.a)((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(T.a)({textAlign:"left",marginLeft:"40%",display:"none"},e.breakpoints.up("sm"),{display:"block"}),inputRoot:{color:"inherit"}}}));var z=function(){var e=W(),t=r.a.useState(null),n=Object(l.a)(t,2),a=n[0],c=n[1],i=r.a.useState(null),s=Object(l.a)(i,2),u=s[0],j=s[1],b=Boolean(a),d=Boolean(u),p=Object(o.c)((function(e){return e.user.displayName})),O=function(e){c(e.currentTarget)},h=function(){j(null)},f=function(){c(null),h()},g="primary-search-account-menu",x=Object(m.jsxs)(B.a,{anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},id:g,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:f,children:[Object(m.jsx)(F.a,{onClick:f,children:"Profile"}),Object(m.jsx)(F.a,{onClick:f,children:"LOGOUT"})]}),y=Object(m.jsx)(B.a,{anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:h,children:Object(m.jsxs)(F.a,{onClick:O,children:[Object(m.jsx)(L.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit",children:Object(m.jsx)(U.a,{})}),Object(m.jsx)("p",{children:"Profile"})]})});return Object(m.jsxs)("div",{className:e.grow,children:[Object(m.jsx)(_.a,{position:"static",children:Object(m.jsxs)(R.a,{children:[Object(m.jsx)(A.a,{variant:"h6",noWrap:!0,children:"Meeting Room"}),Object(m.jsx)(A.a,{className:e.title,variant:"h6",noWrap:!0,children:"Hello ".concat(p)}),Object(m.jsx)("div",{className:e.grow}),Object(m.jsx)("div",{className:e.sectionDesktop,children:Object(m.jsx)(L.a,{edge:"end","aria-label":"account of current user","aria-controls":g,"aria-haspopup":"true",onClick:O,color:"inherit",children:Object(m.jsx)(U.a,{})})})]})}),y,x]})},X=n(181),H=n(182);var J=function(){var e=Object(o.c)((function(e){return e.userForm})),t={margin:3};return Object(m.jsx)(m.Fragment,{children:e.bookings.map((function(e,n){var a=e.name,r=e.time,c=e.date,i=e.meeting;return Object(m.jsx)("div",{children:Object(m.jsx)(X.a,{style:t,children:Object(m.jsxs)(H.a,{children:[Object(m.jsx)(A.a,{color:"textSecondary",children:a}),Object(m.jsx)(A.a,{color:"textSecondary",children:i}),Object(m.jsx)(A.a,{color:"textSecondary",children:"".concat(c,", ").concat(r)})]})})},n)}))})};var K=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"your meetings"}),Object(m.jsx)("div",{className:"lol",children:Object(m.jsx)(J,{})})]}),Object(m.jsx)("div",{className:"hey",children:Object(m.jsx)(M,{})})]})};var V=function(){return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)(z,{}),Object(m.jsxs)(I.c,{children:[Object(m.jsx)(I.a,{exact:!0,path:"/",component:E}),Object(m.jsx)(I.a,{path:"/home",component:K})]})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},Q=n(70),q=n(68),Z={bookings:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT_FORM":return{bookings:[].concat(Object(f.a)(e.bookings),[t.payload])};default:return Object(q.a)({},e)}},ee={email:"",token:"",displayName:""},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGGED_IN_USER":return{email:t.payload.email,token:t.payload.token,displayName:t.payload.displayName};default:return Object(q.a)({},e)}},ne=Object(Q.a)({userForm:$,user:te}),ae=n(63),re=Object(Q.b)(ne,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(m.jsx)(o.a,{store:re,children:Object(m.jsx)(ae.a,{children:Object(m.jsx)(V,{})})}),document.getElementById("root")),Y()}},[[134,1,2]]]);
//# sourceMappingURL=main.5df0a85c.chunk.js.map