(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{298:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__2b70u",dialogsItems:"Dialogs_dialogsItems__18ej-",active:"Dialogs_active__1p04N",messages:"Dialogs_messages__z9EuU",message:"Dialogs_message__cu2hN"}},301:function(e,t,a){e.exports={messageButton:"AddMessageForm_messageButton__2sPeg"}},309:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(102),o=a(298),c=a.n(o),i=a(312),u=function(e){var t="/dialogs/"+e.id;return s.a.createElement("div",{className:c.a.dialog+" "+c.a.active},s.a.createElement(i.a,{to:t},e.name))},l=function(e){return s.a.createElement("div",{className:c.a.dialog},e.message)},m=a(310),d=a(52),g=a(53),f=a(22),p=a(68),b=a(301),v=a.n(b),E=Object(p.a)(50),h=Object(g.a)({form:"dialog-add-message-form"})(function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{component:f.b,validate:[p.b,E],placeholder:"Enter your message",name:"newMessageBody"})),s.a.createElement("div",null,s.a.createElement("button",{className:v.a.messageButton},"Send")))}),_=function(e){var t=e.dialogsPage,a=t.dialogs.map(function(e){return s.a.createElement(u,{name:e.name,key:e.id,id:e.id})}),n=t.messages.map(function(e){return s.a.createElement(l,{message:e.message,key:e.id})});t.newMessageBody;return e.isAuth?s.a.createElement("div",{className:c.a.dialogs},s.a.createElement("div",{className:c.a.dialogsItems},a),s.a.createElement("div",{className:c.a.messages},s.a.createElement("div",null,n)),s.a.createElement(h,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})):s.a.createElement(m.a,{to:"/login"})},y=a(15),j=a(32),O=a(33),w=a(35),B=a(34),N=a(21);function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,n=Object(N.a)(e);if(t){var s=Object(N.a)(this).constructor;a=Reflect.construct(n,arguments,s)}else a=n.apply(this,arguments);return Object(B.a)(this,a)}}var k=function(e){return{isAuth:e.auth.isAuth}},A=a(7);t.default=Object(A.d)(Object(y.b)(function(e){return{dialogsPage:e.dialogsPage}},function(e){return{sendMessage:function(t){e(Object(r.b)(t))}}}),function(e){var t=function(t){Object(w.a)(n,t);var a=M(n);function n(){return Object(j.a)(this,n),a.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return this.props.isAuth?s.a.createElement(e,this.props):s.a.createElement(m.a,{to:"/login"})}}]),n}(s.a.Component);return Object(y.b)(k)(t)})(_)}}]);
//# sourceMappingURL=1.ee394874.chunk.js.map