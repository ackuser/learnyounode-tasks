var http = require('http')
//var concat = require('concat-stream')
const BufferList = require('bl')


http.get(process.argv[2], function (response) {
  response.pipe(BufferList(function(err,data){
       content = data.toString();
       console.log(content.length);
       console.log(content);
    }));
});
