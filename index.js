// var http = require('http');
// var fs = require('fs');
var _ = require('lodash');
var Hapi = require('hapi');
var calc = require('./calc');


var server = new Hapi.Server();
server.connection({ port: 3000 });

// server.start(function () {
//     console.log('Server running at:', server.info.uri);
//
// server.route({
//     method: 'GET',
//     path: '/',
//     handler: function (request, reply) {
//         reply('Hello, world!');
//     }
// });
// server.route({
//     method: 'GET',
//     path: '/{num}',
//     handler: function (request, reply) {
//         reply(encodeURIComponent(request.params.num) * encodeURIComponent(request.params.num) );
//     }
// });
server.route({
    method: 'GET',
    path: '/calc/{input}',
    handler: function (request, reply) {
      reply(calc(request.params.input));

    }
});
server.route({
    method: 'GET',
    path: '/{num}/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});
// server.route({
//     method: 'GET',
//     path: '/{num}/{name}',
//     handler: function (request, reply) {
//         reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
//     }
// });
});



//this is another way to write server below
// fs.readFile('sample-text.txt', {encoding: 'UTF-8'}, function(err, text){
//   if (!err){
//
//     http.createServer(function(req, response){
//       // console.log(req);
//       response.writeHead(200, {'Content-Type': 'text/plain'});
//       response.write(text);
//       response.end();
//     }).listen(9615);
//
//   }
//
//   else{
//
//     throw err;
//
//   }
// });
