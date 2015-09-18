var fs = require('fs')
var fs = require("fs");

fs.readFile(process.argv[2], "utf-8", function (err, data) {
    if (err) throw err;
    console.log(data.split('\n').length-1);
});
/* EXAMPLE OF EXECUTION */
//node myfirst-io/program.js /opt/mean/learnyounode-tasks/myfirst-io/todo.md
