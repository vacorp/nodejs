const http = require('http');
function index (request, response) {
response.writeHead(200);
response.end('Hello, World!');
}
http.createServer(function (request, response) {
console.log ('request url '+ request.url)
if (request.url === '/') {
return index(request, response);
}
response.writeHead(404);
response.end(http.STATUS_CODES[404]);
}).listen(1337);