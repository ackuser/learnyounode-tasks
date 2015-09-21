var fs = require('fs')
var path = require('path')

module.exports = function (arg1,arg2,callback) {
  fs.readdir(arg1, function (err, list) {
  var data = [];
  if (err) return callback(err);
  //console.log(arg2);
    list.forEach(function (file) {
      if (path.extname(file) === '.' + arg2){
        data.push(file);
        //console.log(data);
      }
    });
    callback(null, data);
  });
};


/*
   function bar (callback) {
     foo(function (err, data) {
       if (err)
         return callback(err) // early return

       // ... no error, continue doing cool things with `data`

       // all went well, call callback with `null` for the error argument

       callback(null, data)
     })
   }
*/
