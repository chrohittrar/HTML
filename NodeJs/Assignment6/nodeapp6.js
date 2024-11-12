const http = require(`http`);
const url = require(`url`);
const fs = require(`fs`);

http.createServer(function (req, res) {
    const url_p = url.parse(req.url, true);
    // file path should be either in ./ fomat or without anything but our file is in /ab.txt format
    const fpath = "." + url_p.pathname;

    fs.readFile(fpath, function (err, data) {
        if (!err) {
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data.toString());
            res.end();
        }
        else {
            res.writeHead(404, { "content-type": "text/html" });
            res.write("Invalid Path");
            res.end();
        }
    })
}).listen(9000, function () { console.log("Server-9000") });