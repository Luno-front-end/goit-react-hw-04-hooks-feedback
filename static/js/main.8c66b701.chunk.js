(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={container:"Feedback_container__1pRRB",containerHeading:"Feedback_containerHeading__2xxlV",heading:"Feedback_heading__31bTq",btn:"Feedback_btn__3F9Pf",good:"Feedback_good__1La_K",neutral:"Feedback_neutral__1ES-k",bad:"Feedback_bad__fkXvx",total:"Feedback_total__1HeLN",positivePercentage:"Feedback_positivePercentage__3C65O"}},11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(2),r=a(5),s=a.n(r),i=(a(11),a(3)),o=a(1),d=a.n(o);function b(e){var t=e.title,a=e.children;return Object(n.jsxs)("div",{className:d.a.containerHeading,children:[Object(n.jsx)("h2",{className:d.a.heading,children:t}),a]})}function j(e){var t=e.options,a=e.onLeaveFeedback,c=Object.keys(t);return Object(n.jsx)("div",{children:c.map((function(e,t){return Object(n.jsx)("button",{name:e,type:"button",onClick:a,className:d.a.btn,children:["\u0414\u043e\u0431\u0440\u0435","\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e","\u041f\u043e\u0433\u0430\u043d\u043e"][t]},Math.random(3))}))})}function l(e){var t=e.message;return Object(n.jsx)("div",{children:Object(n.jsx)("h2",{children:t})})}function u(e){var t=e.good,a=e.neutral,c=e.bad,r=e.total,s=e.positivePercentage;return Object(n.jsx)("div",{children:t||a||0!==c?Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:d.a.good,children:"\u0414\u043e\u0431\u0440\u0435"}),": ",t]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:d.a.neutral,children:"\u041d\u0435\u0439\u0442\u0440\u0430\u043b\u044c\u043d\u043e"}),": ",a]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{className:d.a.bad,children:" \u041f\u043e\u0433\u0430\u043d\u043e"}),": ",c]}),Object(n.jsxs)("li",{className:d.a.total,children:[" \u0417\u0430\u0433\u0430\u043b\u044c\u043d\u043e \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: ",r," "]}),Object(n.jsxs)("li",{className:d.a.positivePercentage,children:["\u0425\u043e\u0440\u043e\u0448\u0438\u0445 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432: ",s,"%"," "]})]}):Object(n.jsx)(l,{message:"\u041d\u0430\u0440\u0430\u0437\u0456 \u0432\u0456\u0434\u0433\u0443\u043a\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456! :)"})})}function h(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(0),o=Object(i.a)(s,2),l=o[0],h=o[1],O=Object(c.useState)(0),x=Object(i.a)(O,2),_=x[0],k=x[1],g={good:a,neutral:l,bad:_},f=function(){return a+_+l};return Object(n.jsxs)("div",{className:d.a.container,children:[Object(n.jsx)(b,{title:"\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430 \u0437\u0430\u043b\u0438\u0448\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0432\u0456\u0434\u0433\u0443\u043a",children:Object(n.jsx)(j,{options:g,onLeaveFeedback:function(e){switch(e.target.name){case"good":r((function(e){return e+1}));break;case"neutral":h((function(e){return e+1}));break;case"bad":k((function(e){return e+1}));break;default:return}}})}),Object(n.jsx)(b,{title:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",children:Object(n.jsx)(u,{good:a,neutral:l,bad:_,total:f(),positivePercentage:Math.round(100*a/f())})})]})}function O(){return Object(n.jsx)(h,{})}s.a.render(Object(n.jsx)(O,{}),document.querySelector("#root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.8c66b701.chunk.js.map