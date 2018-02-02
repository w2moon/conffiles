var FormData = require('form-data');
var fs = require('fs');
var arg = process.argv.splice(2);
var url = arg[0];
var file = arg[1];
var form = new FormData();
form.append("data",fs.createReadStream(arg[1]));

form.submit(url, function(err, res) {
    res.resume();
});