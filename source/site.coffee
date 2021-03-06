require './site.less'
require './examples.less'
global.log = console.log.bind(console)

{createElement,Component} = require 'react'
{render} = require 'react-dom'
h = createElement 
Slide = require './re-slide.coffee'
{Box,Shader} = require 'shader-box'
Markdown = require 'react-markdown'
gradient_shader = require('./gradient.glsl')
global.Markdown = Markdown
global.render = render
global.Slide = Slide
global.h = createElement
global.Component = Component


SimpleMenuExample = require './examples/SimpleMenuExample.coffee'
LayoutExample = require './examples/LayoutExample.coffee'
ButtonsExample = require './examples/ButtonsExample.coffee'
CarouselExample = require './examples/CarouselExample.coffee'
TreeMenuExample = require './examples/TreeMenuExample.coffee'



EXAMPLES = [
	['Layout',require('./examples/LayoutExample.md'),LayoutExample,'https://github.com/arxii/re-slide/blob/master/source/examples/LayoutExample.coffee?ts=4']
	['Simple Menu',require('./examples/SimpleMenuExample.md'),SimpleMenuExample,'https://github.com/arxii/re-slide/blob/master/source/examples/SimpleMenuExample.coffee?ts=4'],
	['Buttons',require('./examples/ButtonsExample.md'),ButtonsExample,'https://github.com/arxii/re-slide/blob/master/source/examples/ButtonsExample.coffee?ts=4'],
	['Carousel',require('./examples/CarouselExample.md'),CarouselExample,'https://github.com/arxii/re-slide/blob/master/source/examples/CarouselExample.coffee?ts=4'],
	['Tree Menu',require('./examples/TreeMenuExample.md'),TreeMenuExample,'https://github.com/arxii/re-slide/blob/master/source/examples/TreeMenuExample.coffee?ts=4'],
]




PROPS = [
	['vert','false','The slides flex or split direction. If `true`, the children will be positioned vertically from top to bottom.']
	['beta','100','The width/height percentage relative to parent split and size. Setting beta to 0 will throw an error.
']
	['dim','null','The width/height. If parents `vert` is true then this is the height, otherwise it is the width. This overrides `beta`.']
	['width | height','0','Force width/height in pixels shortcut (or use a css to override width/height for root slides)']
	['ratio','0','Set the automatic width over height ratio for the element which will be derived from the parent width/height based on its `vert`, if set to 0 no ratio will be forced. for example setting the ratio to .5 will result in the slide being square but will take up 50% width if the parent is `vert:true`']
	['offset','0','For edge cases, you may want to add or subtract some extra pixels to the `beta` property, like CSS `calc()`.']
	['slide','false','If set to `true`, creates an outer wrapper enabling the children to scroll or slide']
	['animate','true','Set this to `false` to disable slide transitions.']
	['ease','0.4s cubic-bezier(0.25, 0.35, 0, 1)','The CSS ease function for the slide transition.']
	['pos','0','Setting this to an `integer` will slide the parent to its child slide at that index. Setting the prop to a `float` will slide the parent to an interpolated offset between child at the index of the **floored** prop and the next child.']
	['x|y','null','overrides `pos` with pixels.']
	['align','null','force slide child to edge. For example, if child one is 100% and child 2 is 20%. when `vert:true,pos:2` the parent will be forced to align the 20% child to the very top, otherwise it will only slide until 20% is fully visible at the bottom.']
	
	['auto','false (unstable)','If `true`, parent will resize based on content inside.']
	['center','false','CSS flex center shortcut.']
	['inverse','false','The slide is inverted, meaning the last child is the first and the first child is the last']
	['scroll','false','If set to true, outer wrapper will be scrollable.']
	['style','null','style gets passed down to outermost component']
	['className','null','When `slide:true` className is applied for outer element. Otherwise it will fall back as className for the static slide.']
	['outerChildren','null','Since slides with `slide:true` can only have slides, you can pass down children to the outer/static slide.']
	['outerStyle','null','Style object gets passed down to outermost component.']
	['innerStyle','null','Style object gets passed down to inner component if there is one.']
	
	['iclassName','null','When `slide:true` className is applied for outer element. Otherwise it will fall back as className for the static slide.']
	
	['iclassName','null','className for the inner element if `slide:true`.']
	
	['onSlideStart','null','Event fired when a transition starts or the `pos` prop is changed.']
	['onSlideDone','null','Event fired when a transition ends or the `pos` prop is changed.']
	['on[EventName]','null','Pass down events to the outer/static div.']
]




class Header extends Component
	constructor: ->
		super()
		@state =
			title_snippet_pos_a: 0
			title_snippet_pos_b: 1
			show_bg: true
	
	componentDidMount: ->
		@t = Math.random()*10000
		@box = new Box
			canvas: @_canvas
			resize: true #auto resize on window.resize
			clearColor: [0.0, 0.0, 0.0, 1.0]
			context:
				antialias: false
				depth: false
		@gradient = new Shader
			source: gradient_shader
			uniforms:
				pos:
					type:'2fv'
					value: [0.5,0.5]
				seed:
					type:'3fv'
					value: [1.1,1.3,1.2]
				speed:
					type:'1f'
					value:1.0
				fade:
					type:'1f'
					value:1.0
				iTime:
					type:'1f'
					value: @t

		@box.add(@gradient)
		@box.clear().draw(@gradient)
		@tick(@t)


	tick: ()=>
		requestAnimationFrame(@tick)
		if window.scrollY > window.innerHeight && @state.show_bg
			@setState
				show_bg: false
		else if window.scrollY < window.innerHeight && !@state.show_bg
			@setState
				show_bg: true
		if !@state.show_bg
			return
		@gradient.uniforms.iTime.val = @t+=10
		@box.clear().draw(@gradient)
		


	render: ->
		h 'div',
			className: 'header'
			h 'canvas',
				style:
					visibility: !@state.show_bg && 'hidden' || null
				className: 'canvas'
				ref: (el)=>
					@_canvas = el
			h 'a',
				className: 'gradient-link center'
				href: 'https://github.com/arxii/shader-box-gradient'
				'?'

			h 'div',
				className: 'header-description',
				h 'div',
					className: 'title center'
					h 'a',
						href: "https://github.com/arxii/re-slide"
						className: 'title-name'
						'Slide'

					h Slide,
						className: 'title-snippet'
						vert: true
						center: yes
						'npm i re-slide'
					h 'a',
						href: "https://github.com/arxii/re-slide"
						className: 'center github-link'
						h 'img',
							src: './site/github.svg'
				h 'p',
					className:'header-description-sub'
					'About'
				h 'div',
					className:'header-description-text'
					h Markdown,
						className: 'section-text'
						source: ABOUT
					h 'div',
						className: 'shields'
						h 'a',
							href:'https://npmjs.com/package/re-slide'
							h 'img',
								src: 'https://img.shields.io/npm/v/re-slide.svg?style=for-the-badge'
						h 'a',
							href:'https://github.com/facebook/react'
							h 'img',
								src: 'https://img.shields.io/badge/react-v16.7.0-blue.svg?style=for-the-badge'
						h 'a',
							href:'https://travis-ci.org/arxii/re-slide'
							h 'img',
								src: 'https://img.shields.io/travis/arxii/re-slide.svg?style=for-the-badge'





ABOUT = require './about.md'

class Docs extends Component
	render: ->
		h 'div',
			className: 'docs'
			h Header
			h 'div',
				className: 'section'
				h 'h1',{},'Props'
				PROPS.map (prop,i)->
					h 'div',
						key: 'prop-'+i
						className: 'prop'
						h 'div',
							className: 'prop-name'
							prop[0]
						h 'div',
							className: 'prop-default'
							prop[1]
						h Markdown,
							source: prop[2]
							className: 'prop-text'
		

			h 'div',
				className: 'examples section'
				h 'h1',
					margin: 10
					'Examples'
				EXAMPLES.map (example,i)->
					h 'div',
						key: 'ex-'+i
						className: 'example-section'
						h 'a',
							href: example[3]
							target: '_blank'
							className: 'section-title'
							h 'span',
								className: 'section-title-name'
								example[0]
						h Markdown,
							source: example[1]
							className: 'section-text'
						h example[2]
						example[3] && h 'a',
							href: example[3]
							className: 'section-title-link'
							target: '_blank'
							'</>'
			h 'footer',
				className: 'footer'
				h 'a',
					href: "https://github.com/arxii/re-slide"
					className: 'footer-text'
					'Source'
				h 'a',
					href: "https://github.com/arxii/re-slide/blob/master/LICENSE"
					className: 'footer-text'
					'Apache License 2.0'




@docs_el = null
render(h(Docs),document.body,@docs_el)
# hljs.initHighlightingOnLoad()



