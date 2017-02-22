'use strict';

const Hapi = require('hapi');
const Inert = require('inert');
const Path = require('path');

const server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8000
});

// Register Inert
server.register(Inert, () => {});

// PATH: assets
server.route({
    method: 'GET',
    path: '/assets/{param*}',
    handler: {
        directory: {
            path: 'dist/assets'
        }
    }
});

// PATH: scripts
server.route({
    method: 'GET',
    path: '/scripts/{param*}',
    handler: {
        directory: {
            path: 'dist/scripts/'
        }
    }
});

// PATH: styles
server.route({
    method: 'GET',
    path: '/styles/{param*}',
    handler: {
        directory: {
            path: 'dist/styles/'
        }
    }
});

// PATH: index
server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply) {
		return reply.file('dist/index.html');
	}
});

server.start(function(err) {
	if (err) {
		throw err;
	}
	console.log('Server running at: ', server.info.uri);
});