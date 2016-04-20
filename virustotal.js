var request = require("request");
var querystring = require("querystring");
var fs = require("fs");

var args = process.argv.slice(2);

console.log(args[0])
var api_key = fs.readFile("./api_key");
console.log(api_key);
