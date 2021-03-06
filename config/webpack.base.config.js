require('sass-loader');
require('css-loader');
require('style-loader');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
	    rules: [{
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader?presets[]=es2015'
        }, {
            test: /\.vue$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    js: 'babel-loader?presets[]=es2015',
                    scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                    sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                }
            }
        }, {
			test: /\.scss|sass$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'sass-loader']
			})
  		}, {
	      	test: /\.(html|png|jpg)$/,
            exclude: /\index.html$/,
          	loader: 'file-loader?name=[path][name].[ext]&context=./src'
        }]
  	},
    plugins: [
        new ExtractTextPlugin('styles/main.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
    	alias: {
    		'vue$': 'vue/dist/vue.common.js' // Fix to make webpack get the standalone version of Vue instead of runtime
    	}
    }
};