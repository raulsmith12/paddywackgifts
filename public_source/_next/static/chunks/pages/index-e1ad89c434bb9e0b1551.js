_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("QLaP");function c(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function i(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function l(e,t){return Object.keys(t).reduce((function(n,l){var u,s=n,f=s[c(l)],d=s[l],p=Object(a.a)(s,[c(l),l].map(i)),m=t[l],v=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),c=a[0],i=a[1],l=void 0!==e,u=r.current;return r.current=l,!l&&u&&c!==t&&i(t),[l?e:c,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),i(e)}),[n])]}(d,f,e[m]),g=v[0],b=v[1];return Object(r.a)({},p,((u={})[l]=g,u[m]=b,u))}),e)}n("dI71"),n("VCL8")},QLaP:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,c,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,c,i],s=0;(l=new Error(t.replace(/%s/g,(function(){return u[s++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("wx14"),c=n("zLVn"),i=n("17x9"),l=n.n(i),u=n("TSYQ"),s=n.n(u),f=n("33Jr"),d={tag:l.a.oneOfType([l.a.func,l.a.string]),fluid:l.a.bool,className:l.a.string,cssModule:l.a.object},p=function(e){var t=e.className,n=e.cssModule,r=e.tag,i=e.fluid,l=Object(c.a)(e,["className","cssModule","tag","fluid"]),u=Object(f.i)(s()(t,"jumbotron",!!i&&"jumbotron-fluid"),n);return a.a.createElement(r,Object(o.a)({},l,{className:u}))};p.propTypes=d,p.defaultProps={tag:"div"};var m=p,v=n("ok1R"),g=n("rhny"),b=n("jT3O"),h=n("4KRT"),y=n("lTCR"),w=n.n(y),O=n("ZCiN");var j=function(e,t){var n=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},N=n("XcHJ"),E=n("i52p"),k=Math.pow(2,31)-1;function S(e,t,n){var r=n-Date.now();e.current=r<=k?setTimeout(t,r):setTimeout((function(){return S(e,t,n)}),k)}function I(){var e=Object(N.a)(),t=Object(r.useRef)();return Object(E.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=k?t.current=setTimeout(r,a):S(t,r,Date.now()+a))},clear:n}}),[])}var x=n("CR+v"),_=n("xgq2"),M=n("JCAc"),C=n("YdCC"),T=Object(C.a)("carousel-caption"),L=Object(C.a)("carousel-item");function P(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}var R=n("dbZe"),D=n("vUet"),U=n("z+q/"),A={bsPrefix:l.a.string,as:l.a.elementType,slide:l.a.bool,fade:l.a.bool,controls:l.a.bool,indicators:l.a.bool,activeIndex:l.a.number,onSelect:l.a.func,onSlide:l.a.func,onSlid:l.a.func,interval:l.a.number,keyboard:l.a.bool,pause:l.a.oneOf(["hover",!1]),wrap:l.a.bool,touch:l.a.bool,prevIcon:l.a.node,prevLabel:l.a.string,nextIcon:l.a.node,nextLabel:l.a.string},F={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:a.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var W=a.a.forwardRef((function(e,t){var n=Object(M.a)(e,{activeIndex:"onSelect"}),i=n.as,l=void 0===i?"div":i,u=n.bsPrefix,f=n.slide,d=n.fade,p=n.controls,m=n.indicators,v=n.activeIndex,g=n.onSelect,b=n.onSlide,h=n.onSlid,y=n.interval,w=n.keyboard,N=n.onKeyDown,E=n.pause,k=n.onMouseOver,S=n.onMouseOut,C=n.wrap,T=n.touch,L=n.onTouchStart,A=n.onTouchMove,F=n.onTouchEnd,W=n.prevIcon,q=n.prevLabel,z=n.nextIcon,V=n.nextLabel,K=n.className,J=n.children,Q=Object(c.a)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),B=Object(D.a)(u,"carousel"),H=Object(r.useRef)(null),Y=Object(r.useState)("next"),X=Y[0],G=Y[1],Z=Object(r.useState)(!1),$=Z[0],ee=Z[1],te=Object(r.useState)(v||0),ne=te[0],re=te[1];$||v===ne||(H.current?(G(H.current),H.current=null):G((v||0)>ne?"next":"prev"),f&&ee(!0),re(v||0));var ae=a.a.Children.toArray(J).filter(a.a.isValidElement).length,oe=Object(r.useCallback)((function(e){if(!$){var t=ne-1;if(t<0){if(!C)return;t=ae-1}H.current="prev",g&&g(t,e)}}),[$,ne,g,C,ae]),ce=Object(O.a)((function(e){if(!$){var t=ne+1;if(t>=ae){if(!C)return;t=0}H.current="next",g&&g(t,e)}})),ie=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:ie.current,prev:oe,next:ce}}));var le=Object(O.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&ce()})),ue="next"===X?"left":"right";j((function(){f||(b&&b(ne,ue),h&&h(ne,ue))}),[ne]);var se=B+"-item-"+X,fe=B+"-item-"+ue,de=Object(r.useCallback)((function(e){Object(U.a)(e),b&&b(ne,ue)}),[b,ne,ue]),pe=Object(r.useCallback)((function(){ee(!1),h&&h(ne,ue)}),[h,ne,ue]),me=Object(r.useCallback)((function(e){if(w&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void oe(e);case"ArrowRight":return e.preventDefault(),void ce(e)}N&&N(e)}),[w,N,oe,ce]),ve=Object(r.useState)(!1),ge=ve[0],be=ve[1],he=Object(r.useCallback)((function(e){"hover"===E&&be(!0),k&&k(e)}),[E,k]),ye=Object(r.useCallback)((function(e){be(!1),S&&S(e)}),[S]),we=Object(r.useRef)(0),Oe=Object(r.useRef)(0),je=Object(r.useState)(!1),Ne=je[0],Ee=je[1],ke=I(),Se=Object(r.useCallback)((function(e){we.current=e.touches[0].clientX,Oe.current=0,T&&Ee(!0),L&&L(e)}),[T,L]),Ie=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Oe.current=0:Oe.current=e.touches[0].clientX-we.current,A&&A(e)}),[A]),xe=Object(r.useCallback)((function(e){if(T){var t=Oe.current;if(Math.abs(t)<=40)return;t>0?oe(e):ce(e)}ke.set((function(){Ee(!1)}),y||void 0),F&&F(e)}),[T,oe,ce,ke,y,F]),_e=null!=y&&!ge&&!Ne&&!$,Me=Object(r.useRef)();Object(r.useEffect)((function(){if(_e)return Me.current=window.setInterval(document.visibilityState?le:ce,y||void 0),function(){null!==Me.current&&clearInterval(Me.current)}}),[_e,ce,y,le]);var Ce=Object(r.useMemo)((function(){return m&&Array.from({length:ae},(function(e,t){return function(e){g&&g(t,e)}}))}),[m,ae,g]);return a.a.createElement(l,Object(o.a)({ref:ie},Q,{onKeyDown:me,onMouseOver:he,onMouseOut:ye,onTouchStart:Se,onTouchMove:Ie,onTouchEnd:xe,className:s()(K,B,f&&"slide",d&&B+"-fade")}),m&&a.a.createElement("ol",{className:B+"-indicators"},P(J,(function(e,t){return a.a.createElement("li",{key:t,className:t===ne?"active":void 0,onClick:Ce?Ce[t]:void 0})}))),a.a.createElement("div",{className:B+"-inner"},P(J,(function(e,t){var n=t===ne;return f?a.a.createElement(_.c,{in:n,onEnter:n?de:void 0,onEntered:n?pe:void 0,addEndListener:x.a},(function(t){return a.a.cloneElement(e,{className:s()(e.props.className,n&&"entered"!==t&&se,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&fe)})})):a.a.cloneElement(e,{className:s()(e.props.className,n&&"active")})}))),p&&a.a.createElement(a.a.Fragment,null,(C||0!==v)&&a.a.createElement(R.a,{className:B+"-control-prev",onClick:oe},W,q&&a.a.createElement("span",{className:"sr-only"},q)),(C||v!==ae-1)&&a.a.createElement(R.a,{className:B+"-control-next",onClick:ce},z,V&&a.a.createElement("span",{className:"sr-only"},V))))}));W.displayName="Carousel",W.propTypes=A,W.defaultProps=F,W.Caption=T,W.Item=L;var q=W,z=a.a.createElement;function V(){var e=Object(b.a)(["\n    {\n      homepageSliders(first:1)\n      {\n        id,\n        sliderImg {\n            url\n        }\n      }\n    }\n    "]);return V=function(){return e},e}var K=function(){var e=w()(V());return z(h.b,{query:e},(function(e){var t=e.loading,n=e.error,r=e.data;if(t)return z("div",null,"Fetching");if(n)return z("div",null,"Error");var a=r.homepageSliders.map((function(e){return z(q.Item,{key:e.id},z("img",{className:"d-block w-100",src:e.sliderImg.url,alt:"slide"}))}));return z(q,{controls:!1,fade:!0,indicators:!1,pause:!1},z(q.Item,null,z("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})),a,z(q.Item,null,z("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})),z(q.Item,null,z("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})))}))},J=a.a.createElement;function Q(){var e=Object(b.a)(["\n    {\n      homepageSliders(first:1 skip:1)\n      {\n        id,\n        sliderImg {\n            url\n        }\n      }\n    }\n    "]);return Q=function(){return e},e}var B=function(){var e=w()(Q());return J(h.b,{query:e},(function(e){var t=e.loading,n=e.error,r=e.data;if(t)return J("div",null,"Fetching");if(n)return J("div",null,"Error");var a=r.homepageSliders.map((function(e){return J(q.Item,{key:e.id},J("img",{className:"d-block w-100",src:e.sliderImg.url,alt:"slide"}))}));return J(q,{controls:!1,fade:!0,indicators:!1,pause:!1},J(q.Item,null,J("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})),J(q.Item,null,J("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})),a,J(q.Item,null,J("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})))}))},H=a.a.createElement;function Y(){var e=Object(b.a)(["\n    {\n      homepageSliders(last:1)\n      {\n        id,\n        sliderImg {\n            url\n        }\n      }\n    }\n    "]);return Y=function(){return e},e}var X=function(){var e=w()(Y());return H(h.b,{query:e},(function(e){var t=e.loading,n=e.error,r=e.data;if(t)return H("div",null,"Fetching");if(n)return H("div",null,"Error");var a=r.homepageSliders.map((function(e){return H(q.Item,{key:e.id},H("img",{className:"d-block w-100",src:e.sliderImg.url,alt:"slide"}))}));return H(q,{controls:!1,fade:!0,indicators:!1,pause:!1},H(q.Item,null,H("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})),H(q.Item,null,H("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})),H(q.Item,null,H("img",{className:"d-block w-100",src:"https://paddywackgifts.com/img/img_plc.png",alt:""})),a)}))},G=a.a.createElement,Z=function(){return G(m,null,G("img",{src:"https://paddywackgifts.com/img/banner_white.png",width:"50%"}),G(v.a,null,G(g.a,{className:"col-4"},G(K,null)),G(g.a,{className:"col-4"},G(B,null)),G(g.a,{className:"col-4"},G(X,null))))},$=n("YFqc"),ee=n.n($),te=a.a.createElement;function ne(){var e=Object(b.a)(["\n query homepageSections {\n  homepageSections {\n    id,\n    header,\n    content,\n    link,\n    icon {\n      url\n    }\n  }\n}\n"]);return ne=function(){return e},e}var re=w()(ne()),ae=Object(h.c)(re)((function(e){var t=e.data,n=t.loading,r=t.homepageSections;return n?te("h2",null,"Loading Posts..."):te(v.a,{className:"wrapper"},r.map((function(e){return te(g.a,{md:4,key:e.id,className:"text-center"},te("img",{alt:e.header,src:e.icon.url}),te(ee.a,{href:e.link},te("a",null,te("h3",null,e.header),te("p",null,e.content))))})))})),oe=a.a.createElement;t.default=function(e){return oe("div",null,oe(Z,null),oe(ae,null))}},VCL8:function(e,t,n){"use strict";function r(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function a(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function o(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}function c(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var n=null,c=null,i=null;if("function"===typeof t.componentWillMount?n="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?c="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(c="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?i="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(i="UNSAFE_componentWillUpdate"),null!==n||null!==c||null!==i){var l=e.displayName||e.name,u="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+u+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==c?"\n  "+c:"")+(null!==i?"\n  "+i:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=r,t.componentWillReceiveProps=a),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var r=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,r)}}return e}n.r(t),n.d(t,"polyfill",(function(){return c})),r.__suppressDeprecationWarning=!0,a.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),c=n("elyg"),i=n("nOHt"),l=n("vNVm"),u={};function s(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,c.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,v=e.replace,g=e.shallow,b=e.scroll,h=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var y=o.Children.only(m),w=y&&"object"===typeof y&&y.ref,O=(0,l.useIntersection)({rootMargin:"200px"}),j=r(O,2),N=j[0],E=j[1],k=o.default.useCallback((function(e){N(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,N]);(0,o.useEffect)((function(){var e=E&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof h?h:n&&n.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&s(n,d,p,{locale:r})}),[p,d,E,h,t,n]);var S={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:l,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,d,p,v,g,b,h)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(n,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var I="undefined"!==typeof h?h:n&&n.locale,x=(0,c.getDomainLocale)(p,I,n&&n.locales,n&&n.domainLocales);S.href=x||(0,c.addBasePath)((0,c.addLocale)(p,I,n&&n.defaultLocale))}return o.default.cloneElement(y,S)};t.default=f},dbZe:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),c=n.n(o);var i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function l(e){return!e||"#"===e.trim()}var u=c.a.forwardRef((function(e,t){var n=e.as,o=void 0===n?"a":n,u=e.disabled,s=e.onKeyDown,f=Object(a.a)(e,["as","disabled","onKeyDown"]),d=function(e){var t=f.href,n=f.onClick;(u||l(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return l(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),u&&(f.tabIndex=-1,f["aria-disabled"]=!0),c.a.createElement(o,Object(r.a)({ref:t},f,{onClick:d,onKeyDown:i((function(e){" "===e.key&&(e.preventDefault(),d(e))}),s)}))}));u.displayName="SafeAnchor";t.a=u},ok1R:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("q1tI"),c=n.n(o),i=n("17x9"),l=n.n(i),u=n("TSYQ"),s=n.n(u),f=n("33Jr"),d={tag:l.a.oneOfType([l.a.func,l.a.string]),noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool},p=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,i=e.tag,l=e.form,u=Object(a.a)(e,["className","cssModule","noGutters","tag","form"]),d=Object(f.i)(s()(t,o?"no-gutters":null,l?"form-row":"row"),n);return c.a.createElement(i,Object(r.a)({},u,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},t.a=p},rhny:function(e,t,n){"use strict";var r=n("wx14"),a=n("zLVn"),o=n("xQ8M"),c=n.n(o),i=n("q1tI"),l=n.n(i),u=n("17x9"),s=n.n(u),f=n("TSYQ"),d=n.n(f),p=n("33Jr"),m=s.a.oneOfType([s.a.number,s.a.string]),v=s.a.oneOfType([s.a.bool,s.a.number,s.a.string,s.a.shape({size:s.a.oneOfType([s.a.bool,s.a.number,s.a.string]),push:Object(p.f)(m,'Please use the prop "order"'),pull:Object(p.f)(m,'Please use the prop "order"'),order:m,offset:m})]),g={tag:s.a.oneOfType([s.a.func,s.a.string]),xs:v,sm:v,md:v,lg:v,xl:v,className:s.a.string,cssModule:s.a.object,widths:s.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},y=function(e){var t=e.className,n=e.cssModule,o=e.widths,i=e.tag,u=Object(a.a)(e,["className","cssModule","widths","tag"]),s=[];o.forEach((function(t,r){var a=e[t];if(delete u[t],a||""===a){var o=!r;if(c()(a)){var i,l=o?"-":"-"+t+"-",f=h(o,t,a.size);s.push(Object(p.i)(d()(((i={})[f]=a.size||""===a.size,i["order"+l+a.order]=a.order||0===a.order,i["offset"+l+a.offset]=a.offset||0===a.offset,i)),n))}else{var m=h(o,t,a);s.push(m)}}})),s.length||s.push("col");var f=Object(p.i)(d()(t,s),n);return l.a.createElement(i,Object(r.a)({},u,{className:f}))};y.propTypes=g,y.defaultProps=b,t.a=y},vNVm:function(e,t,n){"use strict";var r=n("zoAU"),a=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),u=(0,o.useState)(!1),s=r(u,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,c=r.elements;return c.set(e,t),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),l.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,c.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),c=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var l=new Map},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},xQ8M:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}}},[["vlRD",0,1,2,3,4,5,8]]]);