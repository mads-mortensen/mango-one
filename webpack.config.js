var base = require('./config/webpack.base.config.js');

base.entry = {
    'scripts': './src/app.js'
};
base.output = {
    path: './dist/',
    filename: '[name]/main.js'
};
base.module.rules.push({ 
    test: /\.spec.js$/,
    loader: 'ignore-loader' 
});

module.exports = base;