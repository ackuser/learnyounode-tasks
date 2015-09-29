var http = require('http')
var url = require('url');

http.createServer(function (req, res) {
  if (req.method != 'GET')
  return res.end('send me a GET\n')
  //console.log(url.parse(req.url).query)
  var route = url.parse(req.url).pathname
  var query = url.parse(req.url,true).query
  if (!query.iso){
    console.log('Bad request');
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
  if (route == '/api/unixtime'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ unixtime: Date.parse(query.iso) }))
  }
  //console.log(query.iso)
  if (route == '/api/parsetime'){
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var date = new Date(query.iso)
    //console.log(date)
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    console.log(hours + ':' + minutes + ':' + seconds);

    res.end(JSON.stringify({
      "hour": hours,
      "minute": minutes,
      "second": seconds
    }))
  }
}).listen(Number(process.argv[2]))
