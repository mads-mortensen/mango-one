var base = require('./../webpack.base.config.js');
var path = require('path');

base.entry = {
    'scripts': './src/app.js'
};
base.output = {
    path: path.resolve(__dirname, '../../test'),
    filename: '[name]/main.js'
};

module.exports = base;