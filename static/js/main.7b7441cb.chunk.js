(this.webpackJsonpHangman=this.webpackJsonpHangman||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(5),a=n.n(s),i=(n(14),n(8)),u=n.n(i),o=n(10),j=n(2),l=n(3),d=(n(16),n(17),n(0));var b=function(e){var t=e.theme;return Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{style:{color:t},children:"HANGMAN"}),Object(d.jsxs)("div",{className:"watermark",children:[Object(d.jsx)("span",{children:"made by "}),Object(d.jsx)("span",{style:{color:t},id:"HXN",children:"HXN"})]})]})};n(19);var O=function(e){var t=e.mistakeCount,n=e.theme;return Object(d.jsxs)("svg",{height:"250",width:"200",className:"figure-container",children:[Object(d.jsx)("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),Object(d.jsx)("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),Object(d.jsx)("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),Object(d.jsx)("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),t>0&&Object(d.jsx)("circle",{cx:"140",cy:"70",r:"20",className:"figure-part",style:{stroke:n}}),t>1&&Object(d.jsx)("line",{x1:"140",y1:"90",x2:"140",y2:"150",className:"figure-part",style:{stroke:n}}),t>2&&Object(d.jsx)("line",{x1:"140",y1:"120",x2:"120",y2:"100",className:"figure-part",style:{stroke:n}}),t>3&&Object(d.jsx)("line",{x1:"140",y1:"120",x2:"160",y2:"100",className:"figure-part",style:{stroke:n}}),t>4&&Object(d.jsx)("line",{x1:"140",y1:"150",x2:"120",y2:"180",className:"figure-part",style:{stroke:n}}),t>5&&Object(d.jsx)("line",{x1:"140",y1:"150",x2:"160",y2:"180",className:"figure-part",style:{stroke:n}})]})};n(9),n(20);var f=function(e){var t=e.annoucement,n=e.hint,c=e.theWord,r=e.correctLetters,s=e.missingLetters;return Object(d.jsxs)("section",{className:"word",children:[Object(d.jsx)("div",{className:"guessWord",children:c.split("").map((function(e,t){var n="".concat(s.includes(e)?"red-hightlight":""," ").concat(r.length===Object(j.a)(new Set(c.split(""))).length?"green-highlight":"");return Object(d.jsxs)("span",{className:n,children:[r.includes(e)?e:null," ",s.includes(e)?e:null," "]},t)}))}),Object(d.jsx)("div",{className:"notification",children:t}),Object(d.jsxs)("div",{className:"hint",children:[Object(d.jsx)("h2",{children:"Hint"}),Object(d.jsx)("p",{children:n})]})]})};n(21);var h=function(e){var t=e.mistakeLetters;return Object(d.jsxs)("div",{className:"mistake",children:[Object(d.jsx)("h2",{children:"Mistakes"}),Object(d.jsx)("p",{className:"usedLetter",children:t.map((function(e){return e+" "}))})]})},x=n.p+"static/media/JokerLaugh.65a976d1.mp3",m=n.p+"static/media/boneCrushing.a4b3a561.mp3",p=n.p+"static/media/closeDoor.76222ee7.mp3";var y=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useRef)(0),a=Object(c.useRef)(""),i=Object(c.useState)([]),y=Object(l.a)(i,2),g=y[0],v=y[1],k=Object(c.useState)([]),w=Object(l.a)(k,2),N=w[0],S=w[1],L=Object(c.useState)("Enjoy"),E=Object(l.a)(L,2),A=E[0],H=E[1],C=Object(c.useState)(""),I=Object(l.a)(C,2),q=I[0],J=I[1],M=Object(c.useState)(""),W=Object(l.a)(M,2),B=W[0],D=W[1],G=Object(c.useState)(!1),R=Object(l.a)(G,2),X=R[0],Y=R[1];function z(e){if(X){var t=e.key;/[a-zA-Z]/.test(t)&&(t.length>1||(H(""),!function(e){if([].concat(Object(j.a)(g),Object(j.a)(n)).includes(e))return!0;return!1}(t)?a.current.includes(t)?(v((function(e){return[].concat(Object(j.a)(e),[t])})),function(e){var t=Object(j.a)(new Set(a.current.split("")));if(e.length!==t.length)return!1;return e.forEach((function(e){if(!t.includes(e))return!1})),!0}([].concat(Object(j.a)(g),[t]))&&Z(1)):s.current>5?Z(2):(s.current++,r((function(e){return[].concat(Object(j.a)(e),[t])}))):H("don't repeat yourself")))}}function P(){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(u.a.mark((function e(){var t,n,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://random-word-form.herokuapp.com/random/noun",{mode:"cors"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.next=8,fetch("https://api.dictionaryapi.dev/api/v2/entries/en/".concat(n[0]),{mode:"cors"});case 8:return c=e.sent,e.next=11,c.json();case 11:i=e.sent,o="";try{o=i[0].meanings[0].definitions[0].definition}catch(u){P()}a.current=n[0],J(o),r([]),s.current=0,v([]),S([]),Y((function(e){return!0}));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){1===e?(D("#38ff00"),H("You're not so stupid after all"),window.document.querySelector("audio[data-key = '1']").play()):(D("red"),H("IDIOTs must be dead"),S((function(e){var n=[];return Object(j.a)(new Set(a.current.split(""))).forEach((function(e){[].concat(Object(j.a)(g),[t]).includes(e)||n.push(e)})),n})),window.document.querySelector("audio[data-key = '2']").play()),Y((function(e){return!1}))}return Object(c.useEffect)((function(){P(),Y((function(e){return!0}))}),[]),Object(c.useEffect)((function(){return window.addEventListener("keydown",z),function(){window.removeEventListener("keydown",z)}}),[q,g,n,N,X]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{theme:B}),Object(d.jsx)("span",{onClick:function(){a.current="",J(""),P(),H("Enjoy"),D("#e0e0e0"),window.document.querySelector("audio[data-key = '3']").play()},className:"playBtn",children:"PLAY AGAIN"}),Object(d.jsxs)("section",{className:"game_container",children:[Object(d.jsx)(O,{mistakeCount:s.current,theme:B}),Object(d.jsx)(h,{mistakeLetters:n})]}),Object(d.jsx)(f,{annoucement:A,hint:q,theWord:a.current,correctLetters:g,missingLetters:N}),Object(d.jsx)("audio",{"data-key":"1",src:x}),Object(d.jsx)("audio",{"data-key":"2",src:m}),Object(d.jsx)("audio",{"data-key":"3",src:p})]})};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.7b7441cb.chunk.js.map