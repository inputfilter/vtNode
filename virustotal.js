var request = require("request");
var querystring = require("querystring");
var fs = require("fs");

var args = process.argv.slice(2);

console.log(args[0])


//Load api key
var api_key;
fs.readFile("api_key", 'utf8',(err,api_key) =>{
  if (err) throw err;
  console.log(api_key);
});


