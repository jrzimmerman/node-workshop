// var http = require('http');
// http.createServer(function(request,response) {
//   response.writeHead({'Content Type':'text/plain'});
//   response.end('Hello world!');
// }).listen(3000);

// var logger = require('./logger');
// logger.info('Hello world!');

var Point = require('./Point');
var pt = new Point(6,4);


pt.print();
