var fs = require('fs')
var path = require('path')

module.exports = function (callback) {
  fs.readdir(process.argv[2], function (err, list) {
  //console.log(process.argv.length != 4);
  if (process.argv.length != 4 || err) return callback(new Error('Errors'));
  //console.log('HOLA');
    list.forEach(function (file) {
      if (path.extname(file) === '.' + process.argv[3])
        console.log(file)
    })
    callback(err, list);
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
