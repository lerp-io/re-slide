module.exports=function(t){var i={};function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}return s.m=t,s.c=i,s.d=function(t,i,e){s.o(t,i)||Object.defineProperty(t,i,{enumerable:!0,get:e})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,i){if(1&i&&(t=s(t)),8&i)return t;if(4&i&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&i&&"string"!=typeof t)for(var r in t)s.d(e,r,function(i){return t[i]}.bind(null,r));return e},s.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(i,"a",i),i},s.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},s.p="",s(s.s=0)}([function(t,i,s){var e,r,h,o,n,p,l,u=function(t,i){if(!(t instanceof i))throw new Error("Bound instance method accessed before binding")};s(1),({createElement:p,Component:e,createContext:n}=s(2)),l=p,r={vert:null,beta:100,slide:!1,pos:0,auto:!1,dim:0,animate:!1,ease:"0.4s cubic-bezier(0.25, 0.35, 0, 1)",ease_duration:400,width:0,height:0,ratio:0,center:!1,hide:!0,inverse:!1,scroll:!1,className:null,iclassName:null,offset:0,x:null,y:null,align:!1,outerChildren:null},new RegExp("^on[A-Z]"),o=n({_i_slide:null}),(h=class t extends e{constructor(t){super(t),this.componentDidMount=this.componentDidMount.bind(this),this.componentWillUpdate=this.componentWillUpdate.bind(this),this.componentWillUnmount=this.componentWillUnmount.bind(this),this.isChildVisible=this.isChildVisible.bind(this),this.updatePostVisibility=this.updatePostVisibility.bind(this),this.updatePreVisibility=this.updatePreVisibility.bind(this),this.updateSetVisibility=this.updateSetVisibility.bind(this),this.onSlideDone=this.onSlideDone.bind(this),this.onSlideStart=this.onSlideStart.bind(this),this.getBeta=this.getBeta.bind(this),this.getOuterHW=this.getOuterHW.bind(this),this.resizeEvent=this.resizeEvent.bind(this),this.inner_ref=this.inner_ref.bind(this),this.outer_ref=this.outer_ref.bind(this),this.renderSlide=this.renderSlide.bind(this),this.renderStatic=this.renderStatic.bind(this),this.render=this.render.bind(this),this.state={offset:0,x:0,y:0,dim:0},this.outer_rect={width:0,height:0},this._context={},this.visibility_map=new Map}componentWillMount(){return this._initial_render=!0}componentDidMount(){return u(this,t),this.props.slide&&this._inner?this.setXY(this.getIndexXY(this.props.pos)):this.forceUpdate()}componentWillUpdate(){var i;return u(this,t),this._initial_render=!1,this.calculateBounds(),this._context={},this._context.outer_width=this.outer_rect.width,this._context.outer_height=this.outer_rect.height,this._context.vert=this.props.vert,this._context.count=null!=(i=this.props.children)?i.length:void 0,this._context.isChildVisible=this.isChildVisible,this._context.dim=this.props.vert?this.outer_rect.width:this.outer_rect.height,this._context.slide=this.props.slide,this._context._i_slide=!0}componentDidUpdate(t,i){if(this.props.slide)return t.vert!==this.props.vert&&this.props.slide&&setTimeout(()=>this.forceUpdate(),0),this.checkSlideUpdate(t,i)}componentWillUnmount(){return u(this,t),this.state.visible=!1,clearTimeout(this._timeout),this._timeout=null}componentWillReceiveProps(t){}isChildVisible(i,s){if(u(this,t),!this.props.slide||!0===this.visibility_map.get(i._outer)||!1===this.props.hide)return!0;if(i._outer){if(this.props.vert&&this.inViewBounds(i._outer.offsetTop,i._outer.clientHeight||1,this.state.y,this.outer_rect.height))return!0;if(!this.props.vert&&this.inViewBounds(i._outer.offsetLeft,i._outer.clientWidth||1,this.state.x,this.outer_rect.width))return!0}return!1}calculateBounds(){return this.outer_rect.width=this._outer.clientWidth,this.outer_rect.height=this._outer.clientHeight}legacyProps(t){if(!t.beta)return t.beta=100}inViewBounds(t,i,s,e){return Math.round(t+i)>Math.round(s)&&Math.round(t)<Math.round(s+e)}updatePostVisibility(){var i,s,e,r,h,o;for(u(this,t),this.calculateBounds(),o=[],s=e=0,r=(h=this._inner.children).length;e<r;s=++e)i=h[s],!this.props.vert&&!this.inViewBounds(i.offsetLeft,i.clientWidth,this.state.x,this.outer_rect.width)||this.props.vert&&!this.inViewBounds(i.offsetTop,i.clientHeight,this.state.y,this.outer_rect.height)?(i.style.visibility="hidden",o.push(this.visibility_map.set(i,!1))):o.push(this.visibility_map.set(i,!0));return o}updatePreVisibility(i){var s,e,r,h,o,n,p,l;for(u(this,t),this.calculateBounds(),l=[],r=h=0,o=(p=this._inner.children).length;h<o;r=++h)s=p[r],this.props.vert?(n=this.inViewBounds(s.offsetTop,s.clientHeight,i.y,this.outer_rect.height),e=this.inViewBounds(s.offsetTop,s.clientHeight,this.state.y,this.outer_rect.height),n||e?l.push(this.visibility_map.set(s,!0)):l.push(void 0)):(n=this.inViewBounds(s.offsetLeft,s.clientWidth,i.x,this.outer_rect.width),e=this.inViewBounds(s.offsetLeft,s.clientWidth,this.state.x,this.outer_rect.width),n||e?l.push(this.visibility_map.set(s,!0)):l.push(void 0));return l}updateSetVisibility(i){var s,e,r,h,o,n;for(u(this,t),this.visibility_map=new Map,this.calculateBounds(),n=[],e=r=0,h=(o=this._inner.children).length;r<h;e=++r)s=o[e],(this.props.vert?this.inViewBounds(s.offsetTop,s.clientHeight,i.y,this.outer_rect.height):this.inViewBounds(s.offsetLeft,s.clientWidth,i.x,this.outer_rect.width))?n.push(this.visibility_map.set(s,!0)):n.push(void 0);return n}onSlideDone(){var i;if(u(this,t),this._inner)return this.props.hide&&this.updatePostVisibility(),this._timeout=null,"function"==typeof(i=this.props).onSlideDone?i.onSlideDone(this.props.pos):void 0}onSlideStart(i){var s;if(u(this,t),"function"==typeof(s=this.props).onSlideStart&&s.onSlideStart(i),this.props.hide)return this.visibility_map=new Map,this.updatePreVisibility(i)}checkSlideUpdate(t,i){var s;return!!this._inner&&(s=null!==this.props.y||null!==this.props.x?{x:this.props.x,y:this.props.y}:this.getIndexXY(this.props.pos),this.props.x!==t.x||this.props.y!==t.y||this.props.pos!==t.pos||this.props.offset!==t.offset?this.toXY(s):this.state.x!==s.x||this.state.y!==s.y||this.props.height!==t.height||this.props.width!==t.width||this.props.auto!==t.auto||this.props.beta!==t.beta||this.props.dim!==t.dim||this.props.vert!==t.vert?this.setXY(s):void 0)}getTransition(){return"transform "+this.props.ease}toXY(t){return this._timeout&&clearTimeout(this._timeout),this.onSlideStart(t),this.setState({transition:this.getTransition(),transform:"translate("+-t.x+"px,"+-t.y+"px)",x:t.x,y:t.y},()=>{if(this.props.hide)return this._timeout=setTimeout(this.onSlideDone,this.props.ease_duration+100)})}setXY(t){return this._timeout&&clearTimeout(this._timeout),this.props.hide&&this.updateSetVisibility(t),this.setState({transition:"",transform:"translate("+-t.x+"px,"+-t.y+"px)",x:t.x,y:t.y},()=>this._timeout=setTimeout(this.onSlideDone,0))}roundDim(t){var i;return t=(i=Math.round(t)-t)>-.5&&i<0?Math.round(t+.5):Math.round(t)}getChildHeight(t){var i;return i=t.attributes&&t.attributes.beta||100,t.attributes&&t.attributes.height||this.outer_rect.height/100*i}getChildWidth(t){var i;return i=t.attributes&&t.attributes.beta||100,t.attributes&&t.attributes.width||this.outer_rect.width/100*i}getIndexXY(t){var i,s,e,r,h,o,n,p;if(null==t)throw new Error("index position is undefined");if(t>=this.props.children.length)throw new Error("index position out of bounds");return n=0,p=0,s=this._inner.children[Math.floor(t)],i=this.props.children[Math.floor(t)],s.getBoundingClientRect(),this.calculateBounds(),h=this.outer_rect.height||this.props.height,o=this.outer_rect.width||this.props.width,this.props.vert?(p=s.offsetTop>this.state.y?s.clientHeight>=h||this.props.align?s.offsetTop:s.offsetTop-h+s.clientHeight:s.offsetTop,t%1!=0&&(p+=Math.round(t%1*this.getChildHeight(i))*(this.props.inverse?-1:1))):(n=s.offsetLeft>this.state.x?s.clientWidth>=o||this.props.align?s.offsetLeft:s.offsetLeft-o+s.clientWidth:s.offsetLeft,t%1!=0&&(n+=Math.round(t%1*this.getChildWidth(i))*(this.props.inverse?-1:1))),e=this._inner.children[this._inner.children.length-1],this.props.align||(this.props.vert?p>(r=e.offsetTop-h+e.clientHeight)&&r>0&&(p=r):n>(r=e.offsetLeft-o+e.clientWidth)&&r>0&&(n=r)),{x:Math.round(n),y:Math.round(p)}}getBeta(){var i,s,e;if(u(this,t),!this.props.beta||this.props.beta<0)throw new Error("beta is ( <= 0 | null ) ");return!this.is_root&&this.context.outer_width&&!this.context.vert&&this.context.slide?(i=this.context.outer_width/100*this.props.beta+this.props.offset,this.state.dim=this.roundDim(i),this.state.dim+"px"):!this.is_root&&this.context.outer_height&&this.context.vert&&this.context.slide?(i=this.context.outer_height/100*this.props.beta+this.props.offset,this.state.dim=this.roundDim(i),this.state.dim+"px"):(this.props.offset&&(e=this.props.offset<0?"-":"+",s=Math.abs(this.props.offset)),2===this.context.count&&this.context.outer_width/2%Math.floor(this.context.outer_width/2)==.5&&this._outer&&this._outer.nextElementSibling?s?"calc("+this.props.beta+"% "+e+" "+(s+.5)+"px)":"calc("+this.props.beta+"% + 0.5px)":s?"calc("+this.props.beta+"% "+e+" "+s+"px)":this.props.beta+"%")}getOuterHW(){var i,s,e,r,h,o;return u(this,t),this.props.ratio?(i={},this.context.vert?(i.height=this.context.dim*this.props.ratio,i.width="100%"):(i.height="100%",i.width=this.context.dim*this.props.ratio),i):(this.context.vert?(o=this.props.width||null,s=this.props.dim||this.props.height||null):(o=this.props.dim||this.props.width||null,s=this.props.height||null),(h=null==this.props.vert?this.context.vert:this.props.vert)&&this.props.auto?e="auto":s&&(e=s+"px"),!h&&this.props.auto?r="auto":o&&(r=o+"px"),this.context.vert?(r=r||"100%",e=e||this.getBeta()):(r=r||this.getBeta(),e=e||"100%"),{height:e,width:r})}resizeEvent(){return u(this,t),this.forceUpdate()}inner_ref(i){return u(this,t),this._inner=i}outer_ref(i){return u(this,t),this._outer=i}isRoot(){return!this.context._i_slide}isVisible(t){return this.isRoot()?(this.state.visible=!0,!0):this.context.isChildVisible&&this.context.isChildVisible(this,t)?(this.state.visible=!0,!0):(this.state.visible=!1,!1)}renderSlide(){var i,s,e,r,h,o,n,p,d,a;return u(this,t),n=this.props.iclassName&&" "+this.props.iclassName||"",r=this.props.className&&" "+this.props.className||"",s=this.props.center?" -i-s-center":"",o=this.props.vert?" -i-s-vertical":"",e=this.props.ratio||this.props.dim||this.props.width||this.props.height?" -i-s-fixed":"",h=this.props.inverse?" -i-s-reverse":"",i=this.props.auto?" -i-s-auto":"",p={ref:this.inner_ref,style:{transform:this.state.transform},className:"-i-s-inner"+o+n+s+h+i},this.state.transition&&(p.style.transition=this.state.transition),this.props.inner_props&&(p=Object.assign(p,this.props.inner_props)),this.props.innerStyle&&(p.style=Object.assign(p.style,this.props.innerStyle)),(d={}).ref=this.outer_ref,d.className="-i-s-outer"+r+e,d.style={},(this.context._i_slide||this.props.height||this.props.width)&&(d.style=this.getOuterHW(),"number"==typeof d.style.width&&(this.outer_rect.width=d.style.width),"number"==typeof d.style.height&&(this.outer_rect.height=d.style.height)),(this.props.outerStyle||this.props.style)&&(d.style=Object.assign(d.style,this.props.outerStyle||this.props.style)),a=this.isVisible(),d.style.visibility=a?"":"hidden",this.attachCommonEvents(d),(this.props.pass_props||this.props.outer_props)&&Object.assign(d,this.props.pass_props||this.props.outer_props),!a||this._initial_render?l("div",d):l("div",d,l("div",p,this.props.children),this.props.outerChildren||this.props.outer_children||null)}attachCommonEvents(t){if(this.props.onClick&&(t.onClick=this.props.onClick),this.props.onMouseEnter&&(t.onMouseEnter=this.props.onMouseEnter),this.props.onMouseLeave&&(t.onMouseLeave=this.props.onMouseLeave),this.props.onMouseDown&&(t.onMouseDown=this.props.onMouseDown),this.props.onMouseUp)return t.onMouseUp=this.props.onMouseUp}renderStatic(){var i,s,e,r,h,o,n,p;return u(this,t),e=this.props.className&&" "+this.props.className||"",i=this.props.center?" -i-s-center":"",o=this.props.vert?" -i-s-vertical":"",s=this.props.ratio||this.props.dim||this.props.width||this.props.height?" -i-s-fixed":"",r=this.props.inverse?" -i-s-reverse":"",h=this.props.scroll?" -i-s-scroll":"",n=this.props.pass_props||this.props.outer_props||{},this.attachCommonEvents(n),p=this.isVisible(),(this.context._i_slide||this.props.height||this.props.width)&&(n.style=this.getOuterHW(),n.style.visibility=p?"":"hidden"),n.className="-i-s-static"+e+s+o+i+r+h,n.id=this.props.id,n.ref=this.outer_ref,(this.props.outerStyle||this.props.style)&&(n.style=Object.assign({},n.style,this.props.outerStyle||this.props.style)),!p||this._initial_render?l("div",n):this.props.renderChildren?l("div",n,this.props.renderChildren(),this.props.outerChildren||this.props.outer_children):this.props.outerChildren||this.props.outer_children?l("div",n,this.props.children,this.props.outerChildren||this.props.outer_children):l("div",n,this.props.children)}render(){var i;return u(this,t),i=this.props.slide?this.renderSlide():this.renderStatic(),l(o.Provider,{value:this._context},i)}}).contextType=o,h.defaultProps=r,t.exports=h},function(t,i,s){},function(t,i){t.exports=require("react")}]);
//# sourceMappingURL=re-slide.js.map