//require.context('', true);

// Index
require('./index.html');

// Assets
require.context('./assets/', true);

// Vendor
//

// Scripts
var scripts = require('./scripts/main.js');

// Sass
require.context('./sass/', true, /\.scss$/);