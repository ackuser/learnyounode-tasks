var http = require('http')
var map = require('through2-map')

http.createServer(function (req, res) {
  switch (req.method) {
    case 'POST':
      //console.log('I have received a POST request from ');
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
      break;
    }
  }).listen(Number(process.argv[2]))


//curl -d "this is body" http://localhost:3000
