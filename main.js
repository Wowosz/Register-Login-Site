var http = require('http');
var dt = require('./myfirstmodule')

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(dt.myDataTime());
    res.end('hello world');
}).listen(8080); 