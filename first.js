var http = require('http');
var url = require('url');
var os = require('os');
var dns = require('dns');
var EventEmitter = require('events');
const School = require('./school');


const evts = new EventEmitter();

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
// console.log(req);
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);

// console.log(os.cpus().length);
// console.log(os.networkInterfaces());

const school = new School();

// evts.emit('belRing');
school.startPeriods();

school.on('belRing', ({period, status})=>{
  console.log(`hello khan ${period} ${status}`);
})


