const path = require('path');

module.exports = {
	devtool: 'eval',
	entry: './src/index.js',
	output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module:{
  	loaders:[{
  		test:/\.js$/,
  		loaders: ['babel-loader'],
  		exclude: /node_modules/,
  	},{
  		test:/\.css/,
  		loaders:['style-loader','css-loader'],
  		exclude: /node_modules/
  	}],
  },
}