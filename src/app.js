// Vendor
require('../node_modules/bulma');

// Assets
require.context('./assets/', true);

// Scripts
var req = require.context('./scripts/', true,  /\.js|.vue$/);
req.keys().forEach(key => { 
	key.indexOf('.spec.js') == -1 && req(key); 
});

// Sass
require.context('./sass/', true, /\.scss$/);
