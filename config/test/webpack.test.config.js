var base = require('./../webpack.base.config.js');

base.entry = {
    'scripts': './src/app.js'
};
base.output = {
    path: './test/',
    filename: '[name]/main.js'
};

module.exports = base;