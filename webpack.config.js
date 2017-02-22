require('sass-loader');
require('css-loader');
require('style-loader');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
    	'scripts': './src/app.js'
    },
	output: {
    	path: './dist/',
    	filename: '[name]/main.js'
    },
    module: {
	    rules: [{
			test: /\.scss|sass$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
  		}, {
	      	test: /\.(html|png|jpg)$/,
          	loader: 'file-loader?name=[path][name].[ext]&context=./src'
        }]
  	},
    plugins: [
    	new ExtractTextPlugin('styles/main.css')
    ],
    resolve: {
	alias: {
		'vue$': 'vue/dist/vue.common.js' // Fix to make webpack get the standalone version of Vue instead of runtime
	}
}
 };