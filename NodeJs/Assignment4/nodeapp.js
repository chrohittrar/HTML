var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
    req.end();
}).listen(9000, function(){ console.log("Server-9000")})