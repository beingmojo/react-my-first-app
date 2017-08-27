module.exports = {
	entry: "./app/js/main.js",
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module:{
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
}