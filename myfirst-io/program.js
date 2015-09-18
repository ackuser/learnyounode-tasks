var fs = require('fs')
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var total=0;
if (str.split('\n').length != 0)
  total=str.split('\n').length-1;
console.log(total);
/* EXAMPLE OF EXECUTION */
//node myfirst-io/program.js /opt/mean/learnyounode-tasks/myfirst-io/todo.md
