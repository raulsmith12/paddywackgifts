_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{ALdH:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),o=n.n(t),c=n("1Yj4"),l=n("ok1R"),s=n("rhny"),r=n("vDqi"),u=n.n(r),i=n("uBiN"),m=n("jrRI"),d=n("3OM0"),h=n("L3zb"),p=n("hfUC"),g=n("sOKU"),f=n("GUC0"),y=n.n(f),v=o.a.createElement,N=function(){var e=Object(t.useState)(""),a=e[0],n=e[1],o=Object(t.useState)(""),c=o[0],r=o[1],f=Object(t.useState)(""),N=f[0],k=f[1],b=Object(t.useState)(""),w=b[0],E=b[1],P=Object(t.useState)(""),C=P[0],S=P[1],_=Object(t.useState)(""),j=_[0],O=_[1],A=Object(t.useState)(!1),q=A[0],R=A[1],x=function(e){return E(e.target.value)},z=function(e){return S(e.target.value)};return v(i.a,{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),u()({method:"post",url:"".concat("https://www.paddywackgifts.com/api/contact/index.php"),headers:{"content-type":"application/json"},data:{customerName:a,customerEmail:c,customerPhone:N,contactTime:w,contactMethod:C,message:j}}).then((function(e){R(e.data.sent),y()("Success!","We have received your message and will respond in the next couple days.","success")})).catch((function(e){return y()("Uh oh!","Something went wrong","error")}))}(e)}},v(l.a,null,v(s.a,null,v("h6",{className:"text-center display-5"},v("a",{href:"mailto:paddywackgifts@gmail.com"},"paddywackgifts@gmail.com")))),v(l.a,null,v(s.a,{md:"6"},v(m.a,null,v(d.a,{for:"customerName",className:"display-4"},"Name"),v(h.a,{type:"text",name:"customerName",id:"customerName",bsSize:"lg",placeholder:"Please Enter a Name",required:!0,value:a,onChange:function(e){return n(e.target.value)}}),v(p.a,null,"Name is required to submit form"))),v(s.a,{md:"6"},v(m.a,null,v(d.a,{for:"customerEmail",className:"display-4"},"Email"),v(h.a,{type:"email",name:"customerEmail",id:"customerEmail",bsSize:"lg",placeholder:"Please Enter an Email",required:!0,value:c,onChange:function(e){return r(e.target.value)}}),v(p.a,null,"Please enter a valid email address to submit form")))),v(l.a,null,v(s.a,{md:"6"},v(m.a,null,v(d.a,{for:"customerPhone"},"Phone"),v(h.a,{type:"phone",name:"customerPhone",id:"customerPhone",bsSize:"lg",placeholder:"Please Enter a Phone Number",value:N,onChange:function(e){return k(e.target.value)}})),v("h4",null,"Preferred Time to Contact You?"),v(m.a,{check:!0},v(d.a,{check:!0},v(h.a,{type:"radio",name:"timeRadio",value:"day",checked:"day"===w,onChange:x})," ","\xa0\xa0",v("span",{className:"display-5"},"Day"))),v(m.a,{check:!0},v(d.a,{check:!0},v(h.a,{type:"radio",name:"timeRadio",value:"afternoon",checked:"afternoon"===w,onChange:x})," ","\xa0\xa0",v("span",{className:"display-5"},"Afternoon"))),v(m.a,{check:!0},v(d.a,{check:!0},v(h.a,{type:"radio",name:"timeRadio",value:"evening",checked:"evening"===w,onChange:x})," ","\xa0\xa0",v("span",{className:"display-5"},"Evening"))),v("h4",null,"Which Way Do You Prefer We Contact You?"),v(m.a,{check:!0},v(d.a,{check:!0},v(h.a,{type:"radio",name:"contactRadio",value:"email",checked:"email"===C,onChange:z})," ","\xa0\xa0",v("span",{className:"display-5"},"Email"))),v(m.a,{check:!0},v(d.a,{check:!0},v(h.a,{type:"radio",name:"contactRadio",value:"phone",checked:"phone"===C,onChange:z})," ","\xa0\xa0",v("span",{className:"display-5"},"Phone")))),v(s.a,{md:"6"},v(m.a,null,v(d.a,{for:"messageArea",className:"display-4"},"Message"),v(h.a,{type:"textarea",name:"messageArea",id:"messageArea",bsSize:"lg",style:{height:"200px"},placeholder:"Please Leave a Message, a Comment, a Compliment, or a Suggestion",value:j,onChange:function(e){return O(e.target.value)}})),v(g.a,{color:"primary"},"Submit")," ")),v("div",null,q))},k=o.a.createElement;a.default=function(e){return k(c.a,null,k("h1",null,"Contact Paddy Wack Gifts"),k(l.a,null,k(s.a,null,k(N,null))))}},lqnA:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return n("ALdH")}])}},[["lqnA",0,1,2,7]]]);