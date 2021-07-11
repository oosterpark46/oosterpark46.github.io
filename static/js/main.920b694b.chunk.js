(this.webpackJsonphuisapp=this.webpackJsonphuisapp||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(17),i=n.n(s),c=(n(34),n(35),n(15)),o=n(3),u=n(11),l=n(12),h=n(14),d=n(13),j=n(22),p=n(4),b=n.n(p),v=n(8),O=n(27),f=n(28),x=n(29),m=n(19),w=(n(39),n(1)),g=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).hideReservation=function(){e.props.close()},e.handleDelete=function(){e.props.removeReservation(e.props.reservation.id)},e.handleSave=function(){e.props.saveReservation()},e.handleChange=function(t){e.props.updateReservation(Object(m.a)({},t.target.id,t.target.value))},e.handleChangeDate=function(t){e.props.updateReservation(Object(m.a)({},t.target.id,new Date(t.target.value)))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(w.jsx)(w.Fragment,{children:this.props.visible?Object(w.jsx)("div",{className:"overlayBackground",children:Object(w.jsxs)("div",{className:"reservation-wrapper",children:[Object(w.jsx)("div",{className:"reservation-header",children:Object(w.jsx)("button",{onClick:this.hideReservation,className:"close-icon"})}),Object(w.jsxs)("div",{className:"reservation-container",children:[Object(w.jsx)("h2",{children:"Reservation!"}),Object(w.jsxs)("form",{children:[Object(w.jsxs)("label",{children:[Object(w.jsx)("p",{children:"Title"}),Object(w.jsx)("input",{type:"text",id:"title",value:this.props.reservation.title,onChange:this.handleChange})]}),Object(w.jsxs)("label",{children:[Object(w.jsx)("p",{children:"Start"}),Object(w.jsx)("input",{type:"date",id:"start",value:this.props.reservation.start.toISOString().slice(0,10),onChange:this.handleChangeDate})]}),Object(w.jsxs)("label",{children:[Object(w.jsx)("p",{children:"End"}),Object(w.jsx)("input",{type:"date",id:"end",value:this.props.reservation.end.toISOString().slice(0,10),onChange:this.handleChangeDate})]}),Object(w.jsxs)("div",{className:"reservationButtons",children:[this.props.newReservation?null:Object(w.jsx)("button",{onClick:this.handleDelete,children:"Delete"}),Object(w.jsx)("button",{onClick:this.handleSave,children:"Save"})]})]})]})]})}):null})}}]),n}(a.a.Component),y=(n(41),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={weekendsVisible:!0,currentEvents:[],editReservation:"",editorVisibility:!1,editingNew:!1},r.handleDateSelect=function(e){r.setState({editingNew:!0,editorVisibility:!0,editReservation:{title:"test",start:new Date(e.startStr),end:new Date(e.endStr),allDay:!0}}),e.view.calendar.unselect()},r.handleEventClick=function(e){r.setState({editingNew:!1,editorVisibility:!0,editReservation:e.event})},r.handleEvents=function(e){r.setState({currentEvents:e})},r.fetchEvents=function(){var e=Object(v.a)(b.a.mark((function e(t,n,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://huisapp-vd4sokpoaa-ew.a.run.app/api/reservation/range?start="+t.start+"&end="+t.end,{method:"GET",headers:new Headers({Authorization:"Bearer "+r.props.token})}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return a(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),r.closeEditor=function(){r.setState({editingNew:!1,editorVisibility:!1,editReservation:""})},r.updateEditor=function(e){r.setState({editReservation:Object(j.a)(Object(j.a)({},r.state.editReservation),e)})},r.handleSave=Object(v.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.postReservation({reservation:r.state.editReservation},(function(e){r.closeEditor()}),(function(){}));case 2:case"end":return e.stop()}}),e)}))),r.handleDelete=function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.deleteReservation({reservation:{id:t}},(function(e){r.closeEditor()}),(function(){}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.postReservation=function(){var e=Object(v.a)(b.a.mark((function e(t,n,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://huisapp-vd4sokpoaa-ew.a.run.app/api/reservation",{method:"POST",headers:new Headers({Authorization:"Bearer "+r.props.token,"Content-Type":"application/json","Cache-Control":"no-cache"}),body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return a(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),r.deleteReservation=function(){var e=Object(v.a)(b.a.mark((function e(t,n,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://huisapp-vd4sokpoaa-ew.a.run.app/api/reservation",{method:"DELETE",headers:new Headers({Authorization:"Bearer "+r.props.token,"Content-Type":"application/json","Cache-Control":"no-cache"}),body:JSON.stringify(t)}).then((function(e){return n(e)})).catch((function(e){return a(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),r.calendarRef=a.a.createRef(),r}return Object(l.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{className:"calendar-wrapper",children:Object(w.jsx)("div",{className:"calendar-container",children:Object(w.jsx)(O.a,{ref:this.calendarRef,plugins:[f.a,x.a],height:600,initialView:"dayGridMonth",selectable:!0,selectMirror:!0,dayMaxEvents:!0,weekends:!0,firstDay:1,events:this.fetchEvents,eventContent:k,select:this.handleDateSelect,eventClick:this.handleEventClick,eventsSet:this.handleEvents})})}),Object(w.jsx)(g,{newReservation:this.state.editingNew,visible:this.state.editorVisibility,reservation:this.state.editReservation,close:this.closeEditor,updateReservation:this.updateEditor,removeReservation:this.handleDelete,saveReservation:this.handleSave})]})}}]),n}(a.a.Component));function k(e){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("i",{children:e.event.title})})}n(42);var S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{className:"dash-wrapper",children:Object(w.jsxs)("div",{className:"dash-column",children:[Object(w.jsx)("h1",{children:"Dashboard!"}),Object(w.jsx)(y,{token:this.props.token})]})})}}]),n}(a.a.Component),C=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(w.jsx)("div",{className:"prefs",children:Object(w.jsx)("h1",{children:"Preferences!"})})}}]),n}(a.a.Component),N=n(10);n(43);function R(e){return E.apply(this,arguments)}function E(){return(E=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://huisapp-vd4sokpoaa-ew.a.run.app/api/user/login",{method:"POST",headers:new Headers({"Content-Type":"application/json","Cache-Control":"no-cache"}),body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){var t=e.setToken,n=Object(r.useState)(),a=Object(N.a)(n,2),s=a[0],i=a[1],c=Object(r.useState)(),o=Object(N.a)(c,2),u=o[0],l=o[1],h=function(){var e=Object(v.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,R({user:{email:s,password:u}});case 3:r=e.sent,t(r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"login-wrapper",children:[Object(w.jsx)("h1",{children:"Please Log In"}),Object(w.jsxs)("form",{onSubmit:h,children:[Object(w.jsxs)("label",{children:[Object(w.jsx)("p",{children:"Email"}),Object(w.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)}})]}),Object(w.jsxs)("label",{children:[Object(w.jsx)("p",{children:"Password"}),Object(w.jsx)("input",{type:"password",onChange:function(e){return l(e.target.value)}})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"submit",children:"Submit"})})]})]})}n(44);function T(e){return J.apply(this,arguments)}function J(){return(J=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://huisapp-vd4sokpoaa-ew.a.run.app/api/user/signup",{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){var t=e.setToken,n=Object(r.useState)(),a=Object(N.a)(n,2),s=a[0],i=a[1],c=Object(r.useState)(),u=Object(N.a)(c,2),l=u[0],h=u[1],d=Object(r.useState)(),j=Object(N.a)(d,2),p=j[0],O=j[1],f=function(){var e=Object(v.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,T({user:{name:s,email:l,password:p}});case 3:r=e.sent,t(r),o.a;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"signup-wrapper",children:[Object(w.jsx)("h1",{children:"Create account"}),Object(w.jsxs)("form",{onSubmit:f,children:[Object(w.jsxs)("label",{children:[Object(w.jsx)("p",{children:"Email"}),Object(w.jsx)("input",{type:"text",onChange:function(e){return h(e.target.value)}})]}),Object(w.jsxs)("label",{children:[Object(w.jsx)("p",{children:"Name"}),Object(w.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)}})]}),Object(w.jsxs)("label",{children:[Object(w.jsx)("p",{children:"Password"}),Object(w.jsx)("input",{type:"password",onChange:function(e){return O(e.target.value)}})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"submit",children:"Submit"})})]})]})}n(50);function V(){return Object(w.jsxs)("div",{className:"header-wrapper",children:[Object(w.jsx)("div",{className:"header-filler-front"}),Object(w.jsx)(c.b,{to:"/dashboard",children:Object(w.jsx)("div",{className:"header-item",children:"Home"})}),Object(w.jsx)(c.b,{to:"/preferences",children:Object(w.jsx)("div",{className:"header-item",children:"Preferences"})}),Object(w.jsx)("div",{className:"header-filler-back"})]})}n(51);var B=function(){var e=function(){var e=Object(r.useState)(function(){var e=sessionStorage.getItem("token"),t=JSON.parse(e);return null===t||void 0===t?void 0:t.token}()),t=Object(N.a)(e,2),n=t[0],a=t[1];return{setToken:function(e){sessionStorage.setItem("token",JSON.stringify(e)),a(e.token)},token:n}}(),t=e.token,n=e.setToken;return t?Object(w.jsx)("div",{className:"main-wrapper",children:Object(w.jsxs)(c.a,{children:[Object(w.jsx)(V,{}),Object(w.jsxs)(o.d,{children:[Object(w.jsx)(o.b,{path:"/dashboard",children:Object(w.jsx)(S,{token:t})}),Object(w.jsx)(o.b,{path:"/preferences",children:Object(w.jsx)(C,{})}),Object(w.jsx)(o.b,{path:"/",children:Object(w.jsx)(S,{token:t})})]})]})}):Object(w.jsxs)("div",{className:"main-login-wrapper",children:[Object(w.jsx)("h1",{children:"Login system"}),Object(w.jsx)(c.a,{children:Object(w.jsxs)(o.d,{children:[Object(w.jsx)(o.b,{path:"/signup",children:Object(w.jsx)(P,{setToken:n})}),Object(w.jsx)(o.b,{path:"/login",children:Object(w.jsx)(D,{setToken:n})}),Object(w.jsx)(o.b,{path:"/",children:Object(w.jsx)(D,{setToken:n})})]})})]})};i.a.render(Object(w.jsx)("div",{className:"default-theme",children:Object(w.jsx)(B,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.920b694b.chunk.js.map