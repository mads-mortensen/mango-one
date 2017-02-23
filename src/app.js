// Vendor
require('../node_modules/bulma');

// Index
require('./index.html');

// Assets
require.context('./assets/', true);

// Scripts
var scripts = require('./scripts/main.js');

// Sass
require.context('./sass/', true, /\.scss$/);