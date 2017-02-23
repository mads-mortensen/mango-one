// Vendor
require('../node_modules/bulma');

// Assets
require.context('./assets/', true);

// Scripts
var scripts = require('./scripts/main.js');

// Sass
require.context('./sass/', true, /\.scss$/);