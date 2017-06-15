var base = require('./config/webpack.base.config.js');
var path = require('path');

base.entry = {
    'scripts': './src/app.js'
};
base.output = {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]/main.js'
};
base.module.rules.push({ 
    test: /\.spec.js$/,
    loader: 'ignore-loader' 
});

module.exports = base;