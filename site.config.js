var webpack = require("webpack");
var cfg = {
	devtool: 'source-map',
	module: {
		loaders: [
			{ test: /\.coffee$/, use: "coffee-loader"},
			{ test: /\.glsl$/, use: "glsl-template-loader" },
			{ test: /\.(xml|html|txt|md)$/, loader: "raw-loader" },
			{ test: /\.(less)$/, use: ['style-loader','css-loader','less-loader'] }
		]
	},
	entry: {
		main: "./source/site.coffee",
		test: "./source/test.coffee",
	},
	resolve: {
		// "modules": [__dirname+"/node_modules"],
	},
	output: {
		path: __dirname+'/site/',
		publicPath: '/site/',
		filename: "[name].js"
	},
	devServer: {
		// contentBase: '/',
		port: 3000,
		compress: true
	}
}
module.exports = cfg;