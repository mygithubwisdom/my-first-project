var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Welcome to my server!');
    res.end();
    // res.write('Welcome to my server!');
}).listen(8080);