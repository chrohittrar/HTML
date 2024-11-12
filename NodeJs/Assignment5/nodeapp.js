var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    var url_p = url.parse(req.url, true);
    var nm = url_p.query.nm; 
    console.log(url_p);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h2>Welcome "+nm+" </h2>");
    res.end();
}).listen(9000, function(){ console.log("Server-9000")});