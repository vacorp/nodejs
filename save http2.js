var routes = {
'/': function index (request, response) {
response.writeHead(200);
response.end('Hello, World!');
},
'/foo': function foo (request, response) {
response.writeHead(200);
response.end('You are now viewing "foo"');
}
}