_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"1Yj4":function(e,t,n){"use strict";var a=n("wx14"),o=n("zLVn"),r=n("q1tI"),i=n.n(r),c=n("17x9"),s=n.n(c),l=n("TSYQ"),u=n.n(l),d=n("33Jr"),f={tag:s.a.oneOfType([s.a.func,s.a.string]),fluid:s.a.bool,className:s.a.string,cssModule:s.a.object},m=function(e){var t=e.className,n=e.cssModule,r=e.fluid,c=e.tag,s=Object(o.a)(e,["className","cssModule","fluid","tag"]),l=Object(d.i)(u()(t,r?"container-fluid":"container"),n);return i.a.createElement(c,Object(a.a)({},s,{className:l}))};m.propTypes=f,m.defaultProps={tag:"div"},t.a=m},"29EK":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return n("dmCw")}])},"2W6z":function(e,t,n){"use strict";var a=function(){};e.exports=a},"3Hwf":function(e,t,n){"use strict";function a(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return a}))},"3Z9Z":function(e,t,n){"use strict";var a=n("wx14"),o=n("zLVn"),r=n("TSYQ"),i=n.n(r),c=n("q1tI"),s=n.n(c),l=n("vUet"),u=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.noGutters,d=e.as,f=void 0===d?"div":d,m=Object(o.a)(e,["bsPrefix","className","noGutters","as"]),v=Object(l.a)(n,"row"),p=v+"-cols",b=[];return u.forEach((function(e){var t,n=m[e];delete m[e];var a="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"===typeof n?n.cols:n)&&b.push(""+p+a+"-"+t)})),s.a.createElement(f,Object(a.a)({ref:t},m,{className:i.a.apply(void 0,[r,v,c&&"no-gutters"].concat(b))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},t.a=d},"4opw":function(e,t,n){"use strict";var a=n("vxNi"),o=!1,r=!1;try{var i={get passive(){return o=!0},get once(){return r=o=!0}};a.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(l){}var c=function(e,t,n,a){if(a&&"boolean"!==typeof a&&!r){var i=a.once,c=a.capture,s=n;!r&&i&&(s=n.__once||function e(a){this.removeEventListener(t,e,c),n.call(this,a)},n.__once=s),e.addEventListener(t,s,o?a:c)}e.addEventListener(t,n,a)};var s=function(e,t,n,a){var o=a&&"boolean"!==typeof a?a.capture:a;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};t.a=function(e,t,n,a){return c(e,t,n,a),function(){s(e,t,n,a)}}},"7A6N":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");function o(){return Object(a.useState)(null)}},JI6e:function(e,t,n){"use strict";var a=n("wx14"),o=n("zLVn"),r=n("TSYQ"),i=n.n(r),c=n("q1tI"),s=n.n(c),l=n("vUet"),u=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.as,d=void 0===c?"div":c,f=Object(o.a)(e,["bsPrefix","className","as"]),m=Object(l.a)(n,"col"),v=[],p=[];return u.forEach((function(e){var t,n,a,o=f[e];if(delete f[e],"object"===typeof o&&null!=o){var r=o.span;t=void 0===r||r,n=o.offset,a=o.order}else t=o;var i="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+m+i:""+m+i+"-"+t),null!=a&&p.push("order"+i+"-"+a),null!=n&&p.push("offset"+i+"-"+n)})),v.length||v.push(m),s.a.createElement(d,Object(a.a)({},f,{ref:t,className:i.a.apply(void 0,[r].concat(v,p))}))}));d.displayName="Col",t.a=d},dmCw:function(e,t,n){"use strict";n.r(t);var a,o=n("q1tI"),r=n.n(o),i=n("1Yj4"),c=n("jT3O"),s=n("4KRT"),l=n("lTCR"),u=n.n(l),d=n("JI6e"),f=n("3Z9Z"),m=n("wx14"),v=n("zLVn"),p=n("TSYQ"),b=n.n(p),h=n("VXAI"),g=n("ctsM"),O=n("stpP"),y=n("UZG4");function E(e){if((!a&&0!==a||e)&&g.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),a=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return a}var w=n("7A6N"),j=n("ZCiN"),N=n("i52p"),x=n("CR+v"),k=n("3Hwf");function C(e){void 0===e&&(e=Object(k.a)());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(n){return e.body}}var S=n("kvSq"),R=n("vxNi"),T=n("4opw"),F=n("17x9"),P=n.n(F),A=n("i8i4"),D=n.n(A),L=n("XcHJ"),_=n("qvwu");function I(e,t){e.classList?e.classList.add(t):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(e,t)||("string"===typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function H(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function M(e,t){e.classList?e.classList.remove(t):"string"===typeof e.className?e.className=H(e.className,t):e.setAttribute("class",H(e.className&&e.className.baseVal||"",t))}function q(e,t){return function(e){var t=Object(k.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var B=/([A-Z])/g;var z=/^ms-/;function V(e){return function(e){return e.replace(B,"-$1").toLowerCase()}(e).replace(z,"-ms-")}var K=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var Y,U=function(e,t){var n="",a="";if("string"===typeof t)return e.style.getPropertyValue(V(t))||q(e).getPropertyValue(V(t));Object.keys(t).forEach((function(o){var r=t[o];r||0===r?!function(e){return!(!e||!K.test(e))}(o)?n+=V(o)+": "+r+";":a+=o+"("+r+") ":e.style.removeProperty(V(o))})),a&&(n+="transform: "+a+";"),e.style.cssText+=";"+n};function W(e){return"window"in e&&e.window===e?e:"nodeType"in(t=e)&&t.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var t}function Z(e){var t;return W(e)||(t=e)&&"body"===t.tagName.toLowerCase()?function(e){var t=W(e)?Object(k.a)():Object(k.a)(e),n=W(e)||t.defaultView;return t.body.clientWidth<n.innerWidth}(e):e.scrollHeight>e.clientHeight}var G=["template","script","style"],J=function(e,t,n){[].forEach.call(e.children,(function(e){-1===t.indexOf(e)&&function(e){var t=e.nodeType,n=e.tagName;return 1===t&&-1===G.indexOf(n.toLowerCase())}(e)&&n(e)}))};function X(e,t){t&&(e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden"))}var $,Q=function(){function e(e){var t=void 0===e?{}:e,n=t.hideSiblingNodes,a=void 0===n||n,o=t.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=function(e){if((!Y&&0!==Y||e)&&R.a){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),Y=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return Y}()}var t=e.prototype;return t.isContainerOverflowing=function(e){var t=this.data[this.containerIndexFromModal(e)];return t&&t.overflowing},t.containerIndexFromModal=function(e){return function(e,t){var n=-1;return e.some((function(e,a){return!!t(e,a)&&(n=a,!0)})),n}(this.data,(function(t){return-1!==t.modals.indexOf(e)}))},t.setContainerStyle=function(e,t){var n={overflow:"hidden"};e.style={overflow:t.style.overflow,paddingRight:t.style.paddingRight},e.overflowing&&(n.paddingRight=parseInt(U(t,"paddingRight")||"0",10)+this.scrollbarSize+"px"),U(t,n)},t.removeContainerStyle=function(e,t){Object.assign(t.style,e.style)},t.add=function(e,t,n){var a=this.modals.indexOf(e),o=this.containers.indexOf(t);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;J(e,[n,a],(function(e){return X(!0,e)}))}(t,e),-1!==o)return this.data[o].modals.push(e),a;var r={modals:[e],classes:n?n.split(/\s+/):[],overflowing:Z(t)};return this.handleContainerOverflow&&this.setContainerStyle(r,t),r.classes.forEach(I.bind(null,t)),this.containers.push(t),this.data.push(r),a},t.remove=function(e){var t=this.modals.indexOf(e);if(-1!==t){var n=this.containerIndexFromModal(e),a=this.data[n],o=this.containers[n];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(t,1),0===a.modals.length)a.classes.forEach(M.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(a,o),this.hideSiblingNodes&&function(e,t){var n=t.dialog,a=t.backdrop;J(e,[n,a],(function(e){return X(!1,e)}))}(o,e),this.containers.splice(n,1),this.data.splice(n,1);else if(this.hideSiblingNodes){var r=a.modals[a.modals.length-1],i=r.backdrop;X(!1,r.dialog),X(!1,i)}}},t.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),ee=n("knGs");function te(e){var t=e||($||($=new Q),$),n=Object(o.useRef)({dialog:null,backdrop:null});return Object.assign(n.current,{add:function(e,a){return t.add(n.current,e,a)},remove:function(){return t.remove(n.current)},isTopModal:function(){return t.isTopModal(n.current)},setDialogRef:Object(o.useCallback)((function(e){n.current.dialog=e}),[]),setBackdropRef:Object(o.useCallback)((function(e){n.current.backdrop=e}),[])})}var ne=Object(o.forwardRef)((function(e,t){var n=e.show,a=void 0!==n&&n,i=e.role,c=void 0===i?"dialog":i,s=e.className,l=e.style,u=e.children,d=e.backdrop,f=void 0===d||d,p=e.keyboard,b=void 0===p||p,h=e.onBackdropClick,g=e.onEscapeKeyDown,O=e.transition,y=e.backdropTransition,E=e.autoFocus,w=void 0===E||E,x=e.enforceFocus,k=void 0===x||x,F=e.restoreFocus,P=void 0===F||F,A=e.restoreFocusOptions,I=e.renderDialog,H=e.renderBackdrop,M=void 0===H?function(e){return r.a.createElement("div",e)}:H,q=e.manager,B=e.container,z=e.containerClassName,V=e.onShow,K=e.onHide,Y=void 0===K?function(){}:K,U=e.onExit,W=e.onExited,Z=e.onExiting,G=e.onEnter,J=e.onEntering,X=e.onEntered,$=Object(v.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),Q=Object(ee.a)(B),ne=te(q),ae=Object(L.a)(),oe=Object(_.a)(a),re=Object(o.useState)(!a),ie=re[0],ce=re[1],se=Object(o.useRef)(null);Object(o.useImperativeHandle)(t,(function(){return ne}),[ne]),R.a&&!oe&&a&&(se.current=C()),O||a||ie?a&&ie&&ce(!1):ce(!0);var le=Object(j.a)((function(){if(ne.add(Q,z),pe.current=Object(T.a)(document,"keydown",me),ve.current=Object(T.a)(document,"focus",(function(){return setTimeout(de)}),!0),V&&V(),w){var e=C(document);ne.dialog&&e&&!Object(S.a)(ne.dialog,e)&&(se.current=e,ne.dialog.focus())}})),ue=Object(j.a)((function(){var e;(ne.remove(),null==pe.current||pe.current(),null==ve.current||ve.current(),P)&&(null==(e=se.current)||null==e.focus||e.focus(A),se.current=null)}));Object(o.useEffect)((function(){a&&Q&&le()}),[a,Q,le]),Object(o.useEffect)((function(){ie&&ue()}),[ie,ue]),Object(N.a)((function(){ue()}));var de=Object(j.a)((function(){if(k&&ae()&&ne.isTopModal()){var e=C();ne.dialog&&e&&!Object(S.a)(ne.dialog,e)&&ne.dialog.focus()}})),fe=Object(j.a)((function(e){e.target===e.currentTarget&&(null==h||h(e),!0===f&&Y())})),me=Object(j.a)((function(e){b&&27===e.keyCode&&ne.isTopModal()&&(null==g||g(e),e.defaultPrevented||Y())})),ve=Object(o.useRef)(),pe=Object(o.useRef)(),be=O;if(!Q||!(a||be&&!ie))return null;var he=Object(m.a)({role:c,ref:ne.setDialogRef,"aria-modal":"dialog"===c||void 0},$,{style:l,className:s,tabIndex:-1}),ge=I?I(he):r.a.createElement("div",he,r.a.cloneElement(u,{role:"document"}));be&&(ge=r.a.createElement(be,{appear:!0,unmountOnExit:!0,in:!!a,onExit:U,onExiting:Z,onExited:function(){ce(!0);for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==W||W.apply(void 0,t)},onEnter:G,onEntering:J,onEntered:X},ge));var Oe=null;if(f){var ye=y;Oe=M({ref:ne.setBackdropRef,onClick:fe}),ye&&(Oe=r.a.createElement(ye,{appear:!0,in:!!a},Oe))}return r.a.createElement(r.a.Fragment,null,D.a.createPortal(r.a.createElement(r.a.Fragment,null,Oe,ge),Q))})),ae={show:P.a.bool,container:P.a.any,onShow:P.a.func,onHide:P.a.func,backdrop:P.a.oneOfType([P.a.bool,P.a.oneOf(["static"])]),renderDialog:P.a.func,renderBackdrop:P.a.func,onEscapeKeyDown:P.a.func,onBackdropClick:P.a.func,containerClassName:P.a.string,keyboard:P.a.bool,transition:P.a.elementType,backdropTransition:P.a.elementType,autoFocus:P.a.bool,enforceFocus:P.a.bool,restoreFocus:P.a.bool,restoreFocusOptions:P.a.shape({preventScroll:P.a.bool}),onEnter:P.a.func,onEntering:P.a.func,onEntered:P.a.func,onExit:P.a.func,onExiting:P.a.func,onExited:P.a.func,manager:P.a.instanceOf(Q)};ne.displayName="Modal",ne.propTypes=ae;var oe=Object.assign(ne,{Manager:Q}),re=(n("2W6z"),n("dI71")),ie=n("ANPE"),ce=Function.prototype.bind.call(Function.prototype.call,[].slice);function se(e,t){return ce(e.querySelectorAll(t))}var le,ue=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",de=".sticky-top",fe=".navbar-toggler",me=function(e){function t(){return e.apply(this,arguments)||this}Object(re.a)(t,e);var n=t.prototype;return n.adjustAndStore=function(e,t,n){var a,o=t.style[e];t.dataset[e]=o,Object(ie.a)(t,((a={})[e]=parseFloat(Object(ie.a)(t,e))+n+"px",a))},n.restore=function(e,t){var n,a=t.dataset[e];void 0!==a&&(delete t.dataset[e],Object(ie.a)(t,((n={})[e]=a,n)))},n.setContainerStyle=function(t,n){var a=this;if(e.prototype.setContainerStyle.call(this,t,n),t.overflowing){var o=E();se(n,ue).forEach((function(e){return a.adjustAndStore("paddingRight",e,o)})),se(n,de).forEach((function(e){return a.adjustAndStore("marginRight",e,-o)})),se(n,fe).forEach((function(e){return a.adjustAndStore("marginRight",e,o)}))}},n.removeContainerStyle=function(t,n){var a=this;e.prototype.removeContainerStyle.call(this,t,n),se(n,ue).forEach((function(e){return a.restore("paddingRight",e)})),se(n,de).forEach((function(e){return a.restore("marginRight",e)})),se(n,fe).forEach((function(e){return a.restore("marginRight",e)}))},t}(Q),ve=n("xgq2"),pe=n("z+q/"),be=((le={})[ve.b]="show",le[ve.a]="show",le),he=r.a.forwardRef((function(e,t){var n=e.className,a=e.children,i=Object(v.a)(e,["className","children"]),c=Object(o.useCallback)((function(e){Object(pe.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return r.a.createElement(ve.c,Object(m.a)({ref:t,addEndListener:x.a},i,{onEnter:c}),(function(e,t){return r.a.cloneElement(a,Object(m.a)({},t,{className:b()("fade",n,a.props.className,be[e])}))}))}));he.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},he.displayName="Fade";var ge=he,Oe=n("YdCC"),ye=Object(Oe.a)("modal-body"),Ee=r.a.createContext({onHide:function(){}}),we=n("vUet"),je=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,o=e.centered,i=e.size,c=e.children,s=e.scrollable,l=Object(v.a)(e,["bsPrefix","className","centered","size","children","scrollable"]),u=(n=Object(we.a)(n,"modal"))+"-dialog";return r.a.createElement("div",Object(m.a)({},l,{ref:t,className:b()(u,a,i&&n+"-"+i,o&&u+"-centered",s&&u+"-scrollable")}),r.a.createElement("div",{className:n+"-content"},c))}));je.displayName="ModalDialog";var Ne=je,xe=Object(Oe.a)("modal-footer"),ke={label:P.a.string.isRequired,onClick:P.a.func},Ce=r.a.forwardRef((function(e,t){var n=e.label,a=e.onClick,o=e.className,i=Object(v.a)(e,["label","onClick","className"]);return r.a.createElement("button",Object(m.a)({ref:t,type:"button",className:b()("close",o),onClick:a},i),r.a.createElement("span",{"aria-hidden":"true"},"\xd7"),r.a.createElement("span",{className:"sr-only"},n))}));Ce.displayName="CloseButton",Ce.propTypes=ke,Ce.defaultProps={label:"Close"};var Se=Ce,Re=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.closeLabel,i=e.closeButton,c=e.onHide,s=e.className,l=e.children,u=Object(v.a)(e,["bsPrefix","closeLabel","closeButton","onHide","className","children"]);n=Object(we.a)(n,"modal-header");var d=Object(o.useContext)(Ee),f=Object(j.a)((function(){d&&d.onHide(),c&&c()}));return r.a.createElement("div",Object(m.a)({ref:t},u,{className:b()(s,n)}),l,i&&r.a.createElement(Se,{label:a,onClick:f}))}));Re.displayName="ModalHeader",Re.defaultProps={closeLabel:"Close",closeButton:!1};var Te,Fe,Pe=Re,Ae=(Te="h4",r.a.forwardRef((function(e,t){return r.a.createElement("div",Object(m.a)({},e,{ref:t,className:b()(e.className,Te)}))}))),De=Object(Oe.a)("modal-title",{Component:Ae}),Le={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Ne};function _e(e){return r.a.createElement(ge,e)}function Ie(e){return r.a.createElement(ge,e)}var He=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.style,c=e.dialogClassName,s=e.children,l=e.dialogAs,u=e["aria-labelledby"],d=e.show,f=e.animation,p=e.backdrop,k=e.keyboard,C=e.onEscapeKeyDown,S=e.onShow,R=e.onHide,T=e.container,F=e.autoFocus,P=e.enforceFocus,A=e.restoreFocus,D=e.restoreFocusOptions,L=e.onEntered,_=e.onExit,I=e.onExiting,H=e.onEnter,M=e.onEntering,q=e.onExited,B=e.backdropClassName,z=e.manager,V=Object(v.a)(e,["bsPrefix","className","style","dialogClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),K=Object(o.useState)({}),Y=K[0],U=K[1],W=Object(o.useState)(!1),Z=W[0],G=W[1],J=Object(o.useRef)(!1),X=Object(o.useRef)(!1),$=Object(o.useRef)(null),Q=Object(w.a)(),ee=Q[0],te=Q[1],ne=Object(j.a)(R);n=Object(we.a)(n,"modal"),Object(o.useImperativeHandle)(t,(function(){return{get _modal(){return ee}}}),[ee]);var ae=Object(o.useMemo)((function(){return{onHide:ne}}),[ne]);function re(){return z||(Fe||(Fe=new me),Fe)}function ie(e){if(g.a){var t=re().isContainerOverflowing(ee),n=e.scrollHeight>Object(O.a)(e).documentElement.clientHeight;U({paddingRight:t&&!n?E():void 0,paddingLeft:!t&&n?E():void 0})}}var ce=Object(j.a)((function(){ee&&ie(ee.dialog)}));Object(N.a)((function(){Object(y.a)(window,"resize",ce),$.current&&$.current()}));var se=function(){J.current=!0},le=function(e){J.current&&ee&&e.target===ee.dialog&&(X.current=!0),J.current=!1},ue=function(){G(!0),$.current=Object(x.a)(ee.dialog,(function(){G(!1)}))},de=function(e){"static"!==p?X.current||e.target!==e.currentTarget?X.current=!1:R():function(e){e.target===e.currentTarget&&ue()}(e)},fe=Object(o.useCallback)((function(e){return r.a.createElement("div",Object(m.a)({},e,{className:b()(n+"-backdrop",B,!f&&"show")}))}),[f,B,n]),ve=Object(m.a)({},i,{},Y);f||(ve.display="block");return r.a.createElement(Ee.Provider,{value:ae},r.a.createElement(oe,{show:d,ref:te,backdrop:p,container:T,keyboard:!0,autoFocus:F,enforceFocus:P,restoreFocus:A,restoreFocusOptions:D,onEscapeKeyDown:function(e){k||"static"!==p?k&&C&&C(e):(e.preventDefault(),ue())},onShow:S,onHide:R,onEnter:function(e){e&&(e.style.display="block",ie(e));for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];H&&H.apply(void 0,[e].concat(n))},onEntering:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];M&&M.apply(void 0,[e].concat(n)),Object(h.a)(window,"resize",ce)},onEntered:L,onExit:function(e){$.current&&$.current();for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];_&&_.apply(void 0,[e].concat(n))},onExiting:I,onExited:function(e){e&&(e.style.display="");for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];q&&q.apply(void 0,n),Object(y.a)(window,"resize",ce)},manager:re(),containerClassName:n+"-open",transition:f?_e:void 0,backdropTransition:f?Ie:void 0,renderBackdrop:fe,renderDialog:function(e){return r.a.createElement("div",Object(m.a)({role:"dialog"},e,{style:ve,className:b()(a,n,Z&&n+"-static"),onClick:p?de:void 0,onMouseUp:le,"aria-labelledby":u}),r.a.createElement(l,Object(m.a)({},V,{role:"document",onMouseDown:se,className:c}),s))}}))}));He.displayName="Modal",He.defaultProps=Le,He.Body=ye,He.Header=Pe,He.Title=De,He.Footer=xe,He.Dialog=Ne,He.TRANSITION_DURATION=300,He.BACKDROP_TRANSITION_DURATION=150;var Me=He,qe=r.a.createElement;function Be(){var e=Object(c.a)(["\n        {\n            artworks {\n                id,\n                caption,\n                src {\n                    url\n                }\n            }\n        }\n    "]);return Be=function(){return e},e}var ze=function(){var e=Object(o.useState)(!1),t=e[0],n=e[1],a=Object(o.useState)(),r=a[0],i=a[1],c=Object(o.useState)(),l=c[0],m=c[1],v=u()(Be());return qe("div",null,qe(s.b,{query:v},(function(e){var t=e.loading,a=e.error,o=e.data;if(t)return qe("div",null,"Fetching");if(a)return qe("div",null,"Error");var r=o.artworks.map((function(e){return qe(d.a,{id:e.id,md:4,className:"text-center"},qe("a",{onClick:function(){return t=e.caption,a=e.src.url,i(a),m(t),void n(!0);var t,a}},qe("img",{className:"py-1",src:e.src.url,alt:e.caption,width:"95%"})))}));return qe(f.a,{className:"align-items-center"},r)})),qe(Me.Dialog,{isOpen:t,toggle:function(){return n(!t)},className:"modal-x1"},qe(Me.Body,null,qe(f.a,null,qe(d.a,null,qe("img",{src:r,width:"100%",className:"float-left"})))),qe(Me.Footer,{className:"text-left"},l)))},Ve=r.a.createElement;t.default=function(){return Ve(i.a,null,Ve("h1",null,"Gallery"),Ve(ze,null))}},knGs:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("3Hwf"),o=n("q1tI"),r=function(e){var t;return"undefined"===typeof document?null:null==e?Object(a.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),(null==(t=e)?void 0:t.nodeType)&&e||null)};function i(e,t){var n=Object(o.useState)((function(){return r(e)})),a=n[0],i=n[1];if(!a){var c=r(e);c&&i(c)}return Object(o.useEffect)((function(){t&&a&&t(a)}),[t,a]),Object(o.useEffect)((function(){var t=r(e);t!==a&&i(t)}),[e,a]),a}},kvSq:function(e,t,n){"use strict";function a(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return a}))},qvwu:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI");function o(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){t.current=e})),t.current}},vxNi:function(e,t,n){"use strict";t.a=!("undefined"===typeof window||!window.document||!window.document.createElement)}},[["29EK",0,1,2,3,8]]]);