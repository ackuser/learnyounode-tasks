var mymodule = require('./mymodule.js')
var myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);
//if (myArgs.length != 2) throw 'Worng arguments!!!';
mymodule(myArgs[0],myArgs[1],function (err, data) {
  //console.log(toString.call(data));
  if (err)
    return err;
  else{
    for (file in data) {
      console.log(data[file]);
    //console.log(list[file]);
    };
  };
});
