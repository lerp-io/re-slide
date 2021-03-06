

class TreeMenu extends Component
	constructor: (props)->
		super(props)
		@state =
			dim: 30
			list: @makeList(0,0,3,3)
			size: 0
		
		@recalculateList(@state.list)

	recalculateList: (list,level,parent)->
		list.parent = parent
		if level == undefined || level == null
			level = -1

		list.level = level
		list.size = 0
		list.visible_size = 0


		for item in list.items
			@recalculateList(item,list.level+1,list)
			list.size += item.size + 1
			list.visible_size += item.visible_size + 1

		if level == -1
			list.toggle = true

		if !list.toggle
			list.visible_size = 0 

		return [list.size,list.visible_size]

	componentWillUpdate: =>
		cnt = 0
		@recalculateList(@state.list)
		
	# generate list of items
	makeList: (i,level,max,amount)->
		
		# make a name
		name = ''
		for j in [0...level]
			name += String.fromCharCode( (97+26*Math.random()))
		name = name.toUpperCase()
		
		# item object
		item = 
			name: name
			toggle: false
			items: []

		# check max recursion
		if level == max
			return item

		for j in [0...amount]
			item.items.push @makeList(i+j,level+1,max,amount)

		return item

	item: (item,i)->
		h Slide,
			key: i
			onClick: =>
				if item.level == 0
					for it in item.parent.items
						if it != item
							it.toggle = false
				item.toggle = !item.toggle
				@forceUpdate()
			height: 30
			style:
				'cursor': item.items.length && 'pointer'
				'paddingLeft':10+10*item.level
			item.name
	
	list: (items)->
		if items.length == 1
			return @item(items[0])
		h Slide,
			vert: yes
			height: items.length*30
			items.map (item,i)=>
				@item(item,i)

	makeItem: (item,remainder=[],render_self)->			
		if item.size == 0 && !remainder.length
			return h Slide,{vert: yes,beta: 100},@item(item)

		else if item.size == 0 && remainder.length
			return [@item(item),@makeItem remainder[0], remainder.slice(1)]
				
		else
			
			size = item.size*@state.dim
			visible_size = item.visible_size*@state.dim
	
			list = []
			new_remainder = []
			for child,i in item.items
				if child.size == 0
					list.push child
				else
					list.push child
					for j in [i...item.items.length]
						new_remainder.push item.items[j]
					break

			c = 230-item.level*20

			children = h Slide,
				vert: yes
				beta: 100
				slide: yes
				y: size - visible_size
				className: '1'
				h Slide,
					vert: yes
					style:
						background: "rgb(#{c},#{c},#{c})"
					height: size
					slide: yes
					className: '2'
					y: -size + visible_size
					@list list
					new_remainder.length && @makeItem(new_remainder[0],new_remainder.slice(1)) || null
				remainder.length && @makeItem(remainder[0],remainder.slice(1),true) || null

			if render_self
				return h Slide,
					beta: 100
					vert: yes
					@item(item)
					children
			else
				return children

	setSize: =>
		s = @_root._outer.querySelectorAll('*').length
		if @state.size != s
			@setState
				size: s 
	
	componentDidUpdate: ->
		clearTimeout @setSize
		setTimeout @setSize,500
		
	

	componentDidMount: ->
		s = @_root._outer.querySelectorAll('*').length
		if @state.size != s
			@setState
				size: s 


	render: ->
		items = @state.items
		h Slide,
			ref: (e)=>
				@_root = e
			className: 'example example-tree'
			vert: true
			height: @state.list.visible_size * @state.dim + 100
			h 'blockquote',
				style:
					height: 100
					fontFamily:'monospace'
				ref: (e)=>
					@_count = e
				className: 'center'
				'div count: '+@state.size
			@makeItem @state.list


module.exports = TreeMenu