(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={hw:"Message_hw__1oMYn",message:"Message_message__2n81B",avatar:"Message_avatar__32c47",img:"Message_img__2EU3i",messageBlock:"Message_messageBlock__2jWME",nickName:"Message_nickName__2GCa_",quickMessageBlock:"Message_quickMessageBlock__NpdJX",quickMessage:"Message_quickMessage__1JoYa",date:"Message_date__oEDF3"}},function(e,a,t){e.exports={hw:"AlternativeMessage_hw__2XjR1",message:"AlternativeMessage_message__Rdwu0",avatar:"AlternativeMessage_avatar__3f4q-",img:"AlternativeMessage_img__3aX_o",messageBlock:"AlternativeMessage_messageBlock__2JMOD",nickName:"AlternativeMessage_nickName__8pNvC",quickMessageBlock:"AlternativeMessage_quickMessageBlock__1Djgx",quickMessage:"AlternativeMessage_quickMessage__1J-Na",date:"AlternativeMessage_date__o6way"}},,function(e,a,t){e.exports={Header:"Header_Header__oEjy5",button:"Header_button__56sWv",menu:"Header_menu__32fjA",Active:"Header_Active__1ui1F",mouseUp:"Header_mouseUp__Gfd0N",mouseMove:"Header_mouseMove__1GBBl"}},,,,function(e,a,t){e.exports={superInputDefault:"SuperInputText_superInputDefault__3LS82",errorInputDefault:"SuperInputText_errorInputDefault__3GAQy",error:"SuperInputText_error__32Sft"}},function(e,a,t){e.exports={blue:"HW4_blue__Gn6aT",column:"HW4_column__hWTTn",testSpanError:"HW4_testSpanError__2oif6"}},function(e,a,t){e.exports={someClass:"Affairs_someClass__1HfaO",affair:"Affairs_affair___LH-a",affairBlock:"Affairs_affairBlock__32DYx"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__27mAE",error:"Greeting_error__34kLF",notError:"Greeting_notError__1B1Fb"}},function(e,a,t){e.exports={default:"SuperButton_default__lzAJy",red:"SuperButton_red__18y4I"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__3_fyd",spanClassName:"SuperCheckbox_spanClassName__1oHxw"}},,,function(e,a,t){e.exports={App:"App_App__rUvol",hw:"App_hw__Rlgac"}},function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(26),t(20)),s=t.n(o),u=t(2),i=t(7),m=t(1),E=t(5),d=t.n(E),f=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("div",{className:d.a.avatar},r.a.createElement("img",{className:d.a.img,src:e.avatar,alt:"ava"})),r.a.createElement("div",{className:d.a.messageBlock},r.a.createElement("div",{className:d.a.nickName},e.name," :"),r.a.createElement("div",{className:d.a.quickMessageBlock},r.a.createElement("div",{className:d.a.quickMessage},e.message),r.a.createElement("div",{className:d.a.date},e.time))))},p=t(6),_=t.n(p),v=function(e){return r.a.createElement("div",{className:_.a.message},r.a.createElement("div",{className:_.a.avatar},r.a.createElement("img",{className:_.a.img,src:e.avatar,alt:"ava"})),r.a.createElement("div",{className:_.a.messageBlock},r.a.createElement("div",{className:_.a.nickName},e.name," :"),r.a.createElement("div",{className:_.a.quickMessageBlock},r.a.createElement("div",{className:_.a.quickMessage},e.message),r.a.createElement("div",{className:_.a.date},e.time))))},g="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="\u0425\u0430\u043d\u0430\u043a\u0430",k="\u0414\u0440\u0430\u0442\u0443\u0442\u0438))",b="22:00";var C=function(){return r.a.createElement("div",{className:d.a.hw},r.a.createElement("hr",null),r.a.createElement(f,{avatar:g,name:h,message:k,time:b}),r.a.createElement("hr",null),r.a.createElement(v,{avatar:g,name:h,message:k,time:b}),r.a.createElement("hr",null))},N=t(14),O=t.n(N);var j=function(e){return r.a.createElement("div",{className:O.a.affairBlock},r.a.createElement("span",{className:O.a.affair},e.affair.name),r.a.createElement("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"delete"))};var y=function(e){var a=e.data.map((function(a){return r.a.createElement(j,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){e.setFilter("All")}},"All"),r.a.createElement("button",{onClick:function(){e.setFilter("High")}},"High"),r.a.createElement("button",{onClick:function(){e.setFilter("Middle")}},"Middle"),r.a.createElement("button",{onClick:function(){e.setFilter("Low")}},"Low"))},M=[{_id:1,name:"React",priority:"High"},{_id:2,name:"anime",priority:"Low"},{_id:3,name:"games",priority:"Low"},{_id:4,name:"work",priority:"High"},{_id:5,name:"html & css",priority:"Middle"}];var S=function(){var e=Object(n.useState)(M),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("All"),o=Object(u.a)(c,2),s=o[0],i=o[1],m=function(e,a){return"All"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(y,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!=a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=t(10),A=t(15),x=t.n(A),B=t(4),H=t(12),F=t.n(H),T=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(B.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i=c?"".concat(F.a.error," ").concat(s||""):"",m="".concat(c?c||F.a.errorInputDefault:o||F.a.superInputDefault);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},q=t(16),D=t.n(q),I=function(e){var a=e.red,t=e.className,n=Object(B.a)(e,["red","className"]),l="".concat(a?D.a.red:D.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},P=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.users,s=e.refreshValueCallBack,u=l?"error":a;return console.log(o),r.a.createElement("div",null,r.a.createElement(T,{value:u,onChange:t,onClick:function(){return s()},className:l?x.a.error:x.a.notError}),r.a.createElement(I,{onClick:n,red:l,disabled:l},"add"),r.a.createElement("span",null,c))},J=t(29),U=function(e){var a=e.users,t=e.addUserCallback,l=e.error,c=e.refreshValueCallBack,o=e.setErrorCallBack,s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],E=i[1],d=Object(n.useState)(0),f=Object(u.a)(d,2),p=f[0],_=f[1];return r.a.createElement(P,{name:m,setNameCallback:function(e){return E(e.target.value)},addUser:function(){if(/^\s+$/.test(m)||!m||!a.every((function(e){return e.name!==m})))return o(),E("");t({name:m.trim(),_id:Object(J.a)()}),E(""),_(p=a.length)},error:l,totalUsers:p,users:a,refreshValueCallBack:c})};var W=function(){var e=Object(n.useState)([{_id:"null",name:"null"}]),a=Object(u.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),o=Object(u.a)(c,2),s=o[0],i=o[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(U,{users:t,addUserCallback:function(e){alert("Hello "+e.name),l([].concat(Object(w.a)(t),[e]))},error:s,refreshValueCallBack:function(){i(!1)},setErrorCallBack:function(){i(!0)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},G=t(13),L=t.n(G),R=t(17),V=t.n(R),X=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(B.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(V.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:V.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(u.a)(s,2),m=i[0],E=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:L.a.column},r.a.createElement(T,{value:t,onChangeText:l,onEnter:o,error:c,spanClassName:L.a.testSpanError}),r.a.createElement(T,{className:L.a.blue,error:c}),r.a.createElement(I,null,"default"),r.a.createElement(I,{red:!0,onClick:o},"delete "),r.a.createElement(I,{disabled:!0},"disabled"),r.a.createElement(X,{checked:m,onChangeChecked:E},"some text "),r.a.createElement(X,{checked:m,onChange:function(e){return E(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(B.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1],E=l||{},d=E.children,f=E.onDoubleClick,p=E.className,_=Object(B.a)(E,["children","onDoubleClick","className"]),v="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(T,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),a&&a(e)},onEnter:function(){m(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),f&&f(e)},className:v},_),d||c.value))};function z(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function $(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}z("test",{x:"A",y:1});$("test",{x:"",y:0});var Q=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement(K,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(I,{onClick:function(){z("editable-span-value",t)}},"save"),r.a.createElement(I,{onClick:function(){l($("editable-span-value","storage is empty"))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(S,null),r.a.createElement(W,null),r.a.createElement(Y,null),r.a.createElement(Q,null))};var ee=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},ae=function(e){var a=e.options,t=e.value,n=e.onChange,l=e.onChangeOption,c=Object(B.a)(e,["options","value","onChange","onChangeOption"]),o=a?a.map((function(e,a){return r.a.createElement("option",{key:e+"-"+a,value:e},e)})):[];return r.a.createElement("select",Object.assign({value:t,name:"select",onChange:function(e){n&&n(e),l&&l(e.currentTarget.value)}},c),o)},te=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=Object(B.a)(e,["type","name","options","value","onChange","onChangeOption"]),s=function(e){l&&l(e),c&&c(e.currentTarget.value)},u=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",Object.assign({type:"radio",name:a,checked:e===n,value:e,onChange:s},o)),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},ne=["x","y","z"];var re=function(){var e=Object(n.useState)(ne[1]),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(ae,{options:ne,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(te,{name:"radio",options:ne,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},le=function(e,a){switch(a.type){case"sort":return Object(w.a)(e.sort((function(e,t){return"up"===a.payload?e.age-t.age:"down"===a.payload?t.age-e.age:0})));case"check":return e.filter((function(e){return"all"===a.payload||e.age===Number(a.payload)}));default:return e}},ce=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var oe=function(){var e=Object(n.useState)(ce),a=Object(u.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("span",null,e.name+" "+e.age))})),o=function(e){l(le(t,{type:"sort",payload:e}))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(I,{onClick:function(){o("up")}},"sort up")),r.a.createElement("div",null,r.a.createElement(I,{onClick:function(){o("down")}},"sort down")),r.a.createElement("div",null,r.a.createElement(I,{onClick:function(){l(le(ce,{type:"check",payload:16}))}},"check 16")),r.a.createElement("hr",null),r.a.createElement(se,{people:t,setPeople:l,finalPeople:c}),r.a.createElement("hr",null))},se=function(e){var a=e.people,t=e.setPeople,l=(e.finalPeople,Object(n.useState)([])),c=Object(u.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(o[0]),m=Object(u.a)(i,2),E=m[0],d=m[1];Object(n.useEffect)((function(){var e=a.map((function(e){return String(e.age)}));s(Object(w.a)(e))}),[]);var f=function(e){d(e),t(le(ce,{type:"check",payload:e}))};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",null,r.a.createElement(te,{name:"radio1",options:o,value:E,onChangeOption:f})),r.a.createElement(I,{onClick:function(){f("all")}},"get all"))},ue="/pre-junior",ie="/junior",me="/junior-plus";var Ee=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:ue})}),r.a.createElement(m.b,{path:ue,element:r.a.createElement(Z,null)}),r.a.createElement(m.b,{path:ie,element:r.a.createElement(de,null)}),r.a.createElement(m.b,{path:me,element:r.a.createElement(fe,null)}),"// add routes",r.a.createElement(m.b,{path:"/*",element:r.a.createElement(ee,null)})))},de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(oe,null))},fe=function(){return r.a.createElement(r.a.Fragment,null,"JuniorPlus")},pe=t(8),_e=t.n(pe);var ve=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:_e.a.Header},r.a.createElement("div",{className:t?_e.a.Active:_e.a.menu},r.a.createElement(ge,null,r.a.createElement(i.b,{to:ue}," pre-junior")),r.a.createElement(ge,null,r.a.createElement(i.b,{to:ie}," junior")),r.a.createElement(ge,null,r.a.createElement(i.b,{to:me}," junior+plus"))),r.a.createElement("span",{className:_e.a.button},r.a.createElement("button",{onClick:function(){l(!t)}},"Menu")))},ge=function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),l=t[0],c=t[1],o=function(){return c(!l)};return r.a.createElement("span",{onMouseEnter:o,onMouseLeave:o,className:l?_e.a.mouseUp:_e.a.mouseMove},e.children)};var he=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(ve,null),r.a.createElement(Ee,null)))};var ke=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(he,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ke,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.acfffa89.chunk.js.map