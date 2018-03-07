!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("preact")):"function"==typeof define&&define.amd?define(["preact"],e):"object"==typeof exports?exports.Slide=e(require("preact")):t.Slide=e(t.preact)}(window,function(t){return function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=6)}([function(e,i){e.exports=t},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var i=e.protocol+"//"+e.host,s=i+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,n=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(n)?t:(r=0===n.indexOf("//")?n:0===n.indexOf("/")?i+n:s+n.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(t,e,i){var s,r,n={},o=(s=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=s.apply(this,arguments)),r}),h=function(t){var e={};return function(t){if(void 0===e[t]){var i=function(t){return document.querySelector(t)}.call(this,t);if(i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),p=null,a=0,l=[],c=i(1);function u(t,e){for(var i=0;i<t.length;i++){var s=t[i],r=n[s.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](s.parts[o]);for(;o<s.parts.length;o++)r.parts.push(g(s.parts[o],e))}else{var h=[];for(o=0;o<s.parts.length;o++)h.push(g(s.parts[o],e));n[s.id]={id:s.id,refs:1,parts:h}}}}function d(t,e){for(var i=[],s={},r=0;r<t.length;r++){var n=t[r],o=e.base?n[0]+e.base:n[0],h={css:n[1],media:n[2],sourceMap:n[3]};s[o]?s[o].parts.push(h):i.push(s[o]={id:o,parts:[h]})}return i}function f(t,e){var i=h(t.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=l[l.length-1];if("top"===t.insertAt)s?s.nextSibling?i.insertBefore(e,s.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),l.push(e);else if("bottom"===t.insertAt)i.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=h(t.insertInto+" "+t.insertAt.before);i.insertBefore(e,r)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function b(t){var e=document.createElement("style");return t.attrs.type="text/css",m(e,t.attrs),f(t,e),e}function m(t,e){Object.keys(e).forEach(function(i){t.setAttribute(i,e[i])})}function g(t,e){var i,s,r,n;if(e.transform&&t.css){if(!(n=e.transform(t.css)))return function(){};t.css=n}if(e.singleton){var o=a++;i=p||(p=b(e)),s=w.bind(null,i,o,!1),r=w.bind(null,i,o,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",m(e,t.attrs),f(t,e),e}(e),s=function(t,e,i){var s=i.css,r=i.sourceMap,n=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||n)&&(s=c(s));r&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([s],{type:"text/css"}),h=t.href;t.href=URL.createObjectURL(o),h&&URL.revokeObjectURL(h)}.bind(null,i,e),r=function(){v(i),i.href&&URL.revokeObjectURL(i.href)}):(i=b(e),s=function(t,e){var i=e.css,s=e.media;s&&t.setAttribute("media",s);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),r=function(){v(i)});return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var i=d(t,e);return u(i,e),function(t){for(var s=[],r=0;r<i.length;r++){var o=i[r];(h=n[o.id]).refs--,s.push(h)}t&&u(d(t,e),e);for(r=0;r<s.length;r++){var h;if(0===(h=s[r]).refs){for(var p=0;p<h.parts.length;p++)h.parts[p]();delete n[h.id]}}}};var x,y=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function w(t,e,i,s){var r=i?"":s.css;if(t.styleSheet)t.styleSheet.cssText=y(e,r);else{var n=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(n,o[e]):t.appendChild(n)}}},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",s=t[3];if(!s)return i;if(e&&"function"==typeof btoa){var r=(o=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),n=s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"});return[i].concat(n).concat([r]).join("\n")}var o;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},r=0;r<this.length;r++){var n=this[r][0];"number"==typeof n&&(s[n]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&s[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),e.push(o))}},e}},function(t,e,i){(t.exports=i(3)(!1)).push([t.i,".-i-s-fixed {\n  transform: none !important;\n  flex-shrink: 0;\n}\n.-i-s-center {\n  align-items: center;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n.-i-s-static {\n  box-sizing: border-box;\n  position: relative;\n  flex-direction: row;\n  display: flex;\n  overflow: hidden;\n}\n.-i-s-static.-i-s-reverse {\n  flex-direction: row-reverse;\n}\n.-i-s-outer {\n  position: relative;\n  overflow: hidden;\n}\n.-i-s-inner {\n  height: 100%;\n  display: flex;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n}\n.-i-s-inner > .-i-s-in {\n  transition: transform 0.3s cubic-bezier(0, 0.93, 0.27, 1);\n  transform: scale(1) rotateY(0deg) !important;\n}\n.-i-s-inner > .-i-s-in_pre.-i-s-right {\n  transform-origin: 0% 50%;\n  transform: scale(1) rotateY(10deg);\n}\n.-i-s-inner > .-i-s-in_pre.-i-s-left {\n  transform-origin: 100% 50%;\n  transform: scale(1) rotateY(-10deg);\n}\n.-i-s-inner.-i-s-reverse {\n  flex-direction: row-reverse;\n}\n.-i-s-inner > .-i-s-outer {\n  flex-shrink: 0;\n}\n.-i-s-inner > .-i-s-static {\n  flex-shrink: 0;\n}\n.-i-s-horizontal {\n  flex-direction: row;\n}\n.-i-s-vertical {\n  flex-direction: column;\n}\n.-i-s-vertical.-i-s-inner {\n  height: 100%;\n}\n.-i-s-vertical > .-i-s-in_pre.-i-s-right {\n  transform-origin: 50% 0%;\n  transform: scale(1) rotateX(-60deg);\n}\n.-i-s-vertical > .-i-s-in_pre.-i-s-left {\n  transform-origin: 50% 100%;\n  transform: scale(1) rotateX(60deg);\n}\n.-i-s-vertical.-i-s-reverse {\n  flex-direction: column-reverse;\n}\n.-i-s-scroll {\n  overflow-x: scroll;\n  -webkit-overflow-scrolling: touch;\n  overflow-y: hidden;\n}\n.-i-s-scroll.-i-s-vertical {\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n",""])},function(t,e,i){var s=i(4);"string"==typeof s&&(s=[[t.i,s,""]]);var r={hmr:!0,transform:void 0};i(2)(s,r);s.locals&&(t.exports=s.locals)},function(t,e,i){var s,r,n,o,h,p=function(t,e){if(!(t instanceof e))throw new Error("Bound instance method accessed before binding")};i(5),({h:h,Component:s}=i(0)),r={vert:null,beta:100,slide:!1,pos:0,auto:!1,dim:0,animate:!1,ease:"0.4s cubic-bezier(0.25, 0.35, 0, 1)",width:0,height:0,ratio:0,center:!1,hide:!0,inverse:!1,scroll:!1,className:null,iclassName:null,offset:0,x:null,y:null,align:!1,outerChildren:null},n=new RegExp("^on[A-Z]"),(o=class t extends s{constructor(t){super(t),this.componentDidMount=this.componentDidMount.bind(this),this.componentWillUpdate=this.componentWillUpdate.bind(this),this.componentWillUnmount=this.componentWillUnmount.bind(this),this.isVisible=this.isVisible.bind(this),this.getChildContext=this.getChildContext.bind(this),this.updateVisibility=this.updateVisibility.bind(this),this.onSlideDone=this.onSlideDone.bind(this),this.onSlideStart=this.onSlideStart.bind(this),this.getBeta=this.getBeta.bind(this),this.getOuterHW=this.getOuterHW.bind(this),this.resizeEvent=this.resizeEvent.bind(this),this.inner_ref=this.inner_ref.bind(this),this.outer_ref=this.outer_ref.bind(this),this.renderSlide=this.renderSlide.bind(this),this.renderStatic=this.renderStatic.bind(this),this.render=this.render.bind(this),this.state={offset:0,x:0,y:0,dim:0},this.outer_rect={width:0,height:0},this.visibility_map=new Map}componentWillMount(){return this.passProps(this.props),this.legacyProps(this.props)}componentDidMount(){if(p(this,t),0!==this.context.dim&&addEventListener("resize",this.resizeEvent),0!==this.context.dim||this.props.slide)return this.forceUpdate()}componentWillUpdate(){return p(this,t),this.calculateBounds()}componentDidUpdate(t,e){return this.checkSlideUpdate(t,e)}componentWillUnmount(){return p(this,t),removeEventListener("resize",this.resizeEvent)}componentWillReceiveProps(t){return this.passProps(t),this.legacyProps(t)}isVisible(e){return p(this,t),!1!==this.visibility_map.get(e._outer)||!this.props.hide}getChildContext(){return p(this,t),{outer_width:this.outer_rect.width,outer_height:this.outer_rect.height,vert:this.props.vert||this.props.vert||!1,count:this.props.children.length,isVisible:this.isVisible,dim:this.props.vert?this.outer_rect.width:this.outer_rect.height,slide:this.props.slide,_i_slide:!0}}calculateBounds(){return this.outer_rect=this._outer.getBoundingClientRect()}legacyProps(t){if(!t.beta)return t.beta=100}inViewBounds(t,e,i,s){return Math.round(t+e)>Math.round(i)&&Math.round(t)<Math.round(i+s)}updateVisibility(e,i,s){var r,n,o,h,a,l;for(p(this,t),this.calculateBounds(),n=o=0,h=(l=this._inner.children).length;o<h;n=++o)a=(r=l[n]).getBoundingClientRect(),!this.props.vert&&this.inViewBounds(a.x+e,a.width,this.outer_rect.x,this.props.width||this.outer_rect.width)||this.props.vert&&this.inViewBounds(a.y+i,a.height,this.outer_rect.y,this.props.height||this.outer_rect.height)?this.visibility_map.set(r,!0):s&&this.visibility_map.set(r,!1)}onSlideDone(){if(p(this,t),this._inner)return this.props.hide&&(this.visibility_map=new Map,this.updateVisibility(0,0,!0)),this.setState({in_transition:!1},()=>{var t;return"function"==typeof(t=this.props).onSlideDone?t.onSlideDone(this.props.pos):void 0})}onSlideStart(e,i){var s;if(p(this,t),"function"==typeof(s=this.props).onSlideStart&&s.onSlideStart(this.props.pos),this.props.hide)return this.updateVisibility(e,i,!1)}checkSlideUpdate(t,e){var i;return!!this._inner&&(i=null!==this.props.y||null!==this.props.x?{x:this.props.x,y:this.props.y}:this.getIndexXY(this.props.pos),this.props.x!==t.x||this.props.y!==t.y||this.props.pos!==t.pos||this.props.offset!==t.offset?this.toXY(i):this.state.x!==i.x||this.state.y!==i.y||this.props.height!==t.height||this.props.width!==t.width||this.props.auto!==t.auto?this.setXY(i):void 0)}getTransition(){return"transform "+this.props.ease}toXY(t){return this.onSlideStart(this.state.x-t.x,this.state.y-t.y),this.setState({in_transition:!0,transition:this.getTransition(),transform:"matrix(1, 0, 0, 1, "+-t.x+", "+-t.y+")",x:t.x,y:t.y})}setXY(t){return this.onSlideStart(this.state.x-t.x,this.state.y-t.y),this.setState({in_transition:!1,transition:"",transform:"matrix(1, 0.00001, 0, 1, "+-t.x+", "+-t.y+")",x:t.x,y:t.y},()=>setTimeout(this.onSlideDone,0))}passProps(t){var e,i,s;for(i in this.pass_props={},s=[],t)e=t[i],n.test(i)?s.push(this.pass_props[i]=e):s.push(void 0);return s}roundDim(t){var e;return t=(e=Math.round(t)-t)>-.5&&e<0?Math.round(t+.5):Math.round(t)}getChildHeight(t){var e;return e=t.attributes&&t.attributes.beta||100,t.attributes&&t.attributes.height||this.outer_rect.height/100*e}getChildWidth(t){var e;return e=t.attributes&&t.attributes.beta||100,t.attributes&&t.attributes.width||this.outer_rect.width/100*e}getIndexXY(t){var e,i,s,r,n,o,h,p;if(null==t)throw new Error("index position is undefined");if(t>=this.props.children.length)throw new Error("index position out of bounds");return h=0,p=0,i=this._inner.children[Math.floor(t)],e=this.props.children[Math.floor(t)],i.getBoundingClientRect(),this.calculateBounds(),n=this.outer_rect.height||this.props.height,o=this.outer_rect.width||this.props.width,this.props.vert?(p=i.offsetTop>this.state.y?i.clientHeight>=n||this.props.align?i.offsetTop:i.offsetTop-n+i.clientHeight:i.offsetTop,t%1!=0&&(p+=Math.round(t%1*this.getChildHeight(e))*(this.props.inverse?-1:1))):(h=i.offsetLeft>this.state.x?i.clientWidth>=o||this.props.align?i.offsetLeft:i.offsetLeft-o+i.clientWidth:i.offsetLeft,t%1!=0&&(h+=Math.round(t%1*this.getChildWidth(e))*(this.props.inverse?-1:1))),s=this._inner.children[this._inner.children.length-1],this.props.vert?p>(r=s.offsetTop-n+s.clientHeight)&&r>0&&(p=r):h>(r=s.offsetLeft-o+s.clientWidth)&&r>0&&(h=r),{x:Math.round(h)||0,y:Math.round(p)||0}}getBeta(){var e,i,s;if(p(this,t),!this.props.beta||this.props.beta<0)throw new Error("beta is ( <= 0 | null ) ");return!this.is_root&&this.context.outer_width&&!this.context.vert&&this.context.slide?(e=this.context.outer_width/100*this.props.beta+this.props.offset,this.state.dim=this.roundDim(e),this.state.dim+"px"):!this.is_root&&this.context.outer_height&&this.context.vert&&this.context.slide?(e=this.context.outer_height/100*this.props.beta+this.props.offset,this.state.dim=this.roundDim(e),this.state.dim+"px"):(this.props.offset&&(s=this.props.offset<0?"-":"+",i=Math.abs(this.props.offset)),2===this.context.count&&this.context.outer_width/2%Math.floor(this.context.outer_width/2)==.5&&this._outer&&this._outer.nextElementSibling?i?"calc("+this.props.beta+"% "+s+" "+(i+.5)+"px)":"calc("+this.props.beta+"% + 0.5px)":i?"calc("+this.props.beta+"% "+s+" "+i+"px)":this.props.beta+"%")}getOuterHW(){var e,i,s,r,n,o;return p(this,t),this.props.ratio?(e={},this.context.vert?(e.height=this.context.dim*this.props.ratio,e.width="100%"):(e.height="100%",e.width=this.context.dim*this.props.ratio),e):(this.context.vert?(o=this.props.width||null,i=this.props.dim||this.props.height||null):(o=this.props.dim||this.props.width||null,i=this.props.height||null),(n=null==this.props.vert?this.context.vert:this.props.vert)&&this.props.auto?s="auto":i&&(s=i+"px"),!n&&this.props.auto?r="auto":o&&(r=o+"px"),this.context.vert?(r=r||"100%",s=s||this.getBeta()):(r=r||this.getBeta(),s=s||"100%"),{height:s,width:r})}resizeEvent(){return p(this,t),this.forceUpdate()}inner_ref(e){return p(this,t),this._inner=e}outer_ref(e){return p(this,t),this._outer=e}renderSlide(){var e,i,s,r,n,o,a,l,c,u;return p(this,t),l=this.props.iclassName&&" "+this.props.iclassName||"",e=this.props.className&&" "+this.props.className||"",s=this.props.center?" -i-s-center":"",o=this.props.vert?" -i-s-vertical":"",r=this.props.ratio||this.props.dim||this.props.width||this.props.height?" -i-s-fixed":"",n=this.props.inverse?" -i-s-reverse":"",i=this.props.auto?" -i-s-auto":"",c={ref:this.inner_ref,style:{transform:this.state.transform},className:"-i-s-inner"+o+l+s+n+i},this.state.transition&&(c.style.transition=this.state.transition),this.props.innerStyle&&(c.style=Object.assign(c.style,this.props.innerStyle)),c.onTransitionEnd=this.onSlideDone,(u=this.pass_props).ref=this.outer_ref,u.className="-i-s-outer"+e+r,(this.context._i_slide||this.props.height||this.props.width)&&(u.style=this.getOuterHW()),(this.props.outerStyle||this.props.style)&&(u.style=Object.assign(u.style,this.props.outerStyle||this.props.style)),(a=this.context.isVisible&&!this.context.isVisible(this)||!1)&&(u.style.visibility="hidden"),h("div",u,!a&&h("div",c,this.props.children),!a&&this.props.outerChildren)}renderStatic(){var e,i,s,r,n,o,a,l;return p(this,t),e=this.props.className&&" "+this.props.className||"",i=this.props.center?" -i-s-center":"",o=this.props.vert?" -i-s-vertical":"",s=this.props.ratio||this.props.dim||this.props.width||this.props.height?" -i-s-fixed":"",r=this.props.inverse?" -i-s-reverse":"",n=this.props.scroll?" -i-s-scroll":"",l=this.pass_props||{},a=this.context.isVisible&&!this.context.isVisible(this)||!1,(this.context._i_slide||this.props.height||this.props.width)&&(l.style=this.getOuterHW(),a&&(l.style.visibility="hidden")),l.className="-i-s-static"+e+s+o+i+r+n,l.id=this.props.id,l.ref=this.outer_ref,(this.props.outerStyle||this.props.style)&&(l.style=Object.assign(l.style||{},this.props.outerStyle||this.props.style)),this.context.isVisible&&!this.context.isVisible(this)?h("div",l):h("div",l,this.props.children,this.props.outerChildren)}render(){return p(this,t),this.props.slide?this.renderSlide():this.renderStatic()}}).defaultProps=r,t.exports=o}])});