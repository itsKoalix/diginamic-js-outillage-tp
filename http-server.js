var http = require('http');
var hostname = '127.0.0.1';
var port = 3001;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello, World!</h1>");
    res.end();
    });
server.listen(port, hostname, function() {
    console.log("Server running at http://" + hostname + ":" + port + "/");
});