var mymodule = require('./mymodule.js')
mymodule(function (err, data) {
  if (err)
    console.log(err);
    //return callback(err) // early return

});
