var fs = require('fs')
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var total=0;
if (str.split('\n').length != 0)
  total=str.split('\n').length-1;
console.log(total);
/* EXAMPLE OF EXECUTION */
//node myfirst-io/program.js /opt/mean/learnyounode-tasks/myfirst-io/todo.md


/*
Here's the official solution in case you want to compare notes:

────────────────────────────────────────────────────────────────────────────────
    var fs = require('fs')

    var contents = fs.readFileSync(process.argv[2])
    var lines = contents.toString().split('\n').length - 1
    console.log(lines)

    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

────────────────────────────────────────────────────────────────────────────────
*/
