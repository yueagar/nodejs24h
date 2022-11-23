var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text-plain'});
    res.end('I\'m programming in Node.js!\n');
}).listen(3E3, '127.0.0.1');
console.log('Server running at http://127.0.0.1:3000/')