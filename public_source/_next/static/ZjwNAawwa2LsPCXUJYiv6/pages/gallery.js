(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},"29EK":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return n("dmCw")}])},CaDr:function(e,t,n){"use strict";var o=n("ELrk"),a=n("sDqW"),s=n("q1tI"),i=n.n(s),r=n("17x9"),c=n.n(r),l=n("TSYQ"),u=n.n(l),d=n("33Jr"),p={tag:c.a.oneOfType([c.a.func,c.a.string]),className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=Object(a.a)(e,["className","cssModule","tag"]),c=Object(d.i)(u()(t,"modal-body"),n);return i.a.createElement(s,Object(o.a)({},r,{className:c}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h},DCcX:function(e,t,n){"use strict";var o=n("uz0E"),a=n("ELrk"),s=n("tEjU"),i=n("BRRx"),r=n("q1tI"),c=n.n(r),l=n("17x9"),u=n.n(l),d=n("TSYQ"),p=n.n(d),h=n("i8i4"),f=n.n(h),m=n("33Jr"),b={children:u.a.node.isRequired,node:u.a.any},y=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},n.render=function(){return m.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),f.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);y.propTypes=b;var O=y,g=n("gwnE");function j(){}var v=u.a.shape(g.a.propTypes),C={isOpen:u.a.bool,autoFocus:u.a.bool,centered:u.a.bool,size:u.a.string,toggle:u.a.func,keyboard:u.a.bool,role:u.a.string,labelledBy:u.a.string,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),onEnter:u.a.func,onExit:u.a.func,onOpened:u.a.func,onClosed:u.a.func,children:u.a.node,className:u.a.string,wrapClassName:u.a.string,modalClassName:u.a.string,backdropClassName:u.a.string,contentClassName:u.a.string,external:u.a.node,fade:u.a.bool,cssModule:u.a.object,zIndex:u.a.oneOfType([u.a.number,u.a.string]),backdropTransition:v,modalTransition:v,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},E=Object.keys(C),k={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:j,onClosed:j,modalTransition:{timeout:m.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:m.c.Fade}},w=function(e){function t(t){var n;return(n=e.call(this,t)||this)._element=null,n._originalBodyPadding=null,n.getFocusableChildren=n.getFocusableChildren.bind(Object(i.a)(Object(i.a)(n))),n.handleBackdropClick=n.handleBackdropClick.bind(Object(i.a)(Object(i.a)(n))),n.handleBackdropMouseDown=n.handleBackdropMouseDown.bind(Object(i.a)(Object(i.a)(n))),n.handleEscape=n.handleEscape.bind(Object(i.a)(Object(i.a)(n))),n.handleTab=n.handleTab.bind(Object(i.a)(Object(i.a)(n))),n.onOpened=n.onOpened.bind(Object(i.a)(Object(i.a)(n))),n.onClosed=n.onClosed.bind(Object(i.a)(Object(i.a)(n))),n.state={isOpen:t.isOpen},t.isOpen&&n.init(),n}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},n.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},n.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},n.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},n.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},n.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||j)(e,t)},n.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||j)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},n.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},n.getFocusableChildren=function(){return this._element.querySelectorAll(m.g.join(", "))},n.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(n){e=t[0]}return e},n.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog;e.target&&!t.contains(e.target)&&this.props.toggle&&this.props.toggle(e)}},n.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),n=t.length,o=this.getFocusedChild(),a=0,s=0;s<n;s+=1)if(t[s]===o){a=s;break}e.shiftKey&&0===a?(e.preventDefault(),t[n-1].focus()):e.shiftKey||a!==n-1||(e.preventDefault(),t[0].focus())}},n.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},n.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},n.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(m.h)(),Object(m.e)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=p()(document.body.className,Object(m.i)("modal-open",this.props.cssModule))),t.openCount+=1},n.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(m.i)("modal-open",this.props.cssModule),n=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(n," ").trim()}t.openCount-=1,Object(m.l)(this._originalBodyPadding)},n.renderModalDialog=function(){var e,t=this,n=Object(m.j)(this.props,E);return c.a.createElement("div",Object(a.a)({},n,{className:Object(m.i)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(m.i)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},n.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,n=e.modalClassName,s=e.backdropClassName,i=e.cssModule,r=e.isOpen,l=e.backdrop,u=e.role,d=e.labelledBy,h=e.external,f=e.innerRef,b={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":d,role:u,tabIndex:"-1"},y=this.props.fade,j=Object(o.a)({},g.a.defaultProps,this.props.modalTransition,{baseClass:y?this.props.modalTransition.baseClass:"",timeout:y?this.props.modalTransition.timeout:0}),v=Object(o.a)({},g.a.defaultProps,this.props.backdropTransition,{baseClass:y?this.props.backdropTransition.baseClass:"",timeout:y?this.props.backdropTransition.timeout:0}),C=l&&(y?c.a.createElement(g.a,Object(a.a)({},v,{in:r&&!!l,cssModule:i,className:Object(m.i)(p()("modal-backdrop",s),i)})):c.a.createElement("div",{className:Object(m.i)(p()("modal-backdrop","show",s),i)}));return c.a.createElement(O,{node:this._element},c.a.createElement("div",{className:Object(m.i)(t)},c.a.createElement(g.a,Object(a.a)({},b,j,{in:r,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(m.i)(p()("modal",n),i),innerRef:f}),h,this.renderModalDialog()),C))}return null},t}(c.a.Component);w.propTypes=C,w.defaultProps=k,w.openCount=0;t.a=w},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return a}))},OBzv:function(e,t,n){"use strict";var o=n("ELrk"),a=n("sDqW"),s=n("q1tI"),i=n.n(s),r=n("17x9"),c=n.n(r),l=n("TSYQ"),u=n.n(l),d=n("33Jr"),p={tag:c.a.oneOfType([c.a.func,c.a.string]),className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,n=e.cssModule,s=e.tag,r=Object(a.a)(e,["className","cssModule","tag"]),c=Object(d.i)(u()(t,"modal-footer"),n);return i.a.createElement(s,Object(o.a)({},r,{className:c}))};h.propTypes=p,h.defaultProps={tag:"div"},t.a=h},dmCw:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),s=n("1Yj4"),i=n("h4VS"),r=n("1OyB"),c=n("vuIU"),l=n("JX7q"),u=n("Ji7U"),d=n("md7G"),p=n("foSv"),h=n("4KRT"),f=n("lTCR"),m=n.n(f),b=n("rhny"),y=n("ok1R"),O=n("DCcX"),g=n("CaDr"),j=n("OBzv"),v=a.a.createElement;function C(){var e=Object(i.a)(["\n            {\n                artworks {\n                    id,\n                    src {\n                        url\n                    },\n                }\n            }\n        "]);return C=function(){return e},e}var E=function(e){Object(u.a)(n,e);var t=function(e){function t(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}return function(){var n,o=Object(p.a)(e);if(t()){var a=Object(p.a)(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={show:!1,modalItem:[]},o.showModal=o.showModal.bind(Object(l.a)(o)),o.hideModal=o.hideModal.bind(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"showModal",value:function(e,t,n){this.setState({key:e,modalImage:n,modalBody:t,show:!0})}},{key:"hideModal",value:function(){this.setState({show:!1})}},{key:"render",value:function(){var e=this,t=m()(C());return v("div",null,v(h.b,{query:t},(function(t){var n=t.loading,o=t.error,a=t.data;if(n)return v("div",null,"Fetching");if(o)return v("div",null,"Error");var s=a.artworks.map((function(t){return v(b.a,{id:t.id,md:4,className:"text-center"},v("a",{onClick:function(){return e.showModal(t.id,t.caption,t.src.url)}},v("img",{className:"py-1",src:t.src.url,alt:t.caption,width:"95%"})))}));return v(y.a,{className:"align-items-center"},s)})),v(O.a,{className:"modal-xl",isOpen:this.state.show,toggle:this.hideModal},v(g.a,null,v(y.a,null,v(b.a,null,v("img",{src:this.state.modalImage,width:"100%",className:"float-left"})))),v(j.a,{className:"text-left"},this.state.modalBody)))}}]),n}(a.a.Component),k=a.a.createElement;t.default=function(){return k(s.a,null,k("h1",null,"Gallery"),k(E,null))}},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},h4VS:function(e,t,n){"use strict";function o(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return o}))},md7G:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return(a="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(e){return o(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":o(e)})(e)}n.d(t,"a",(function(){return i}));var s=n("JX7q");function i(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?Object(s.a)(e):t}},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return a}))}},[["29EK",0,1,2,3,7]]]);