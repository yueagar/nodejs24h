var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(501);
  res.end('Hello world\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');