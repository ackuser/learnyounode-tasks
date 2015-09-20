var fs = require('fs')
var myArgs = process.argv.slice(2);
//console.log('myArgs: ', myArgs);
if (myArgs.length != 2) throw 'Worng arguments!!!';
fs.readdir(myArgs[0], function (err, list) {
    var result;
    if (err) throw err;
    //console.log(list);
    for (file in list) {
      if (list[file].substring(list[file].length - myArgs[1].length -1, list[file].length) == '.' + myArgs[1])
        console.log(list[file]);
      //console.log(list[file]);
    }
});
