(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{Evh6:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creator",function(){return t("y1ZH")}])},y1ZH:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),s=t.n(n),r=t("1Yj4"),l=t("ok1R"),o=t("rhny"),i=t("uBiN"),u=t("jrRI"),c=t("3OM0"),m=t("L3zb"),d=t("hfUC"),h=t("sOKU"),p=t("vDqi"),f=t.n(p),g=t("GUC0"),y=t.n(g),b=s.a.createElement,v=function(){var e=Object(n.useState)(""),a=e[0],t=e[1],s=Object(n.useState)(""),r=s[0],p=s[1],g=Object(n.useState)(""),v=g[0],w=g[1],N=Object(n.useState)(""),S=N[0],E=N[1],P=Object(n.useState)(null),j=P[0],C=P[1],O=Object(n.useState)(""),k=O[0],q=O[1],z=Object(n.useState)(!1),U=z[0],_=z[1],x=Object(n.useState)([]);x[0],x[1];return b("div",null,b(l.a,null,b(o.a,null,b("p",{className:"display-5"},"Welcome to the Art Creator. Here, you have the ability to upload your own design (it can literally be ",b("strong",{className:"display-5"},"ANYTHING"),' your heart desires) to submit what is called a "Custom Commission Piece". Remember, all pieces are subject to approval and Paddy Wack Homemade Gifts reserves the right to refuse working on a piece at the owner\'s discretion. Additionally, prices vary based on the size and complexity of the piece. For more information please contact us at ',b("a",{className:"display-5",href:"mailto:paddywackgifts@gmail.com"},"paddywackgifts@gmail.com"),"."))),b(i.a,{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),f()({method:"post",url:"".concat("/api/creator/index.php"),headers:{"content-type":"multipart/form-data"},data:{customerName:a,customerEmail:r,customerPhone:v,message:S,attachment:j}}).then((function(e){_(e.data.sent),y()("Success!","We have received your commission request and will respond in a few days with an estimate.","success")})).catch((function(e){return y()("Uh oh!","Something went wrong","error")}))}(e)}},b(l.a,null,b(o.a,{md:6},b(u.a,null,b(c.a,{for:"customerName",className:"display-4"},"Name"),b(m.a,{type:"text",name:"customerName",id:"customerName",bsSize:"lg",placeholder:"Please Enter a Name",required:!0,value:a,onChange:function(e){return t(e.target.value)}}),b(d.a,null,"Name is required to submit form")),b(u.a,null,b(c.a,{for:"customerEmail",className:"display-4"},"Email"),b(m.a,{type:"email",name:"customerEmail",id:"customerEmail",bsSize:"lg",placeholder:"Please Enter an Email",required:!0,value:r,onChange:function(e){return p(e.target.value)}}),b(d.a,null,"Please enter a valid email address to submit form")),b(u.a,null,b(c.a,{for:"customerPhone",className:"display-4"},"Phone"),b(m.a,{type:"phone",name:"customerPhone",id:"customerPhone",bsSize:"lg",placeholder:"Please Enter a Phone Number",value:v,onChange:function(e){return w(e.target.value)}}))),b(o.a,{md:6},b(u.a,null,b(c.a,{for:"message",className:"display-4"},"Message"),b(m.a,{type:"textarea",name:"message",id:"message",bsSize:"lg",style:{height:"200px"},placeholder:"Do you have specific instructions? Special message?",value:S,onChange:function(e){return E(e.target.value)}})),b(u.a,null,b(c.a,{for:"attachment",className:"display-4"},"Attach Image"),b(m.a,{type:"file",name:"attachment",onChange:function(e){C(e.target.files[0]);var a=URL.createObjectURL(e.target.files[0]);q(a)}})),b(h.a,{color:"primary"},"Submit")," ")),b("div",null,U)),k&&b("img",{src:k,width:"100%"}))},w=s.a.createElement;a.default=function(e){return w(r.a,null,w("h1",null,"Art Creator"),w(l.a,null,w(o.a,null,w(v,null))))}}},[["Evh6",0,1,2,6]]]);