var request = require("request");
var querystring = require("querystring");
var fs = require("fs");
var vtapi = require("./libs/vtapi.js")

//Load api key
fs.readFile("api_key", 'utf8',(err,data) =>{
  if (err) throw err;
  console.log("Data: ",data);
  vtapi(data);
  
});
