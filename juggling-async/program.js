var http = require('http')
var bl = require('bl')

var urls = [process.argv[2], process.argv[3], process.argv[4]]
var responses = [];
var completed_requests = 0;

urls.forEach(function(url) {

  http.get(url, function (res) {

    res.pipe(bl(function (err, data) {

      if (err)
      return console.error(err)
      data = data.toString()
      responses[urls.indexOf(url)]=data
      if (completed_requests++ == urls.length - 1) {
        for (response of responses) {
          console.log(response)
        }
      }
    }))
  })
})
