var http = require('http')
var url = require('url')
//console.log(url.parse(process.argv[2]).port)
//console.log(process.argv[2]);
http.get({
        host: url.parse(process.argv[2]).hostname,
        port: url.parse(process.argv[2]).port
        //path: '/email'
    }, function(res) {
  res.setEncoding('utf8');

  var data = "";
  res.on('data', function (chunk) {
    data = chunk;
    console.log(data);
  });
  res.on("end", function () {
    //console.log(data);
  });
  //console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
