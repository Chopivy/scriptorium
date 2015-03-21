/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 // require the "http" module
var http = require("http");
// After requiring the module "http" you can use its function "request"
var weatherService = "http://api.openweathermap.org/data/2.5/weather"
// invoke the weatherService third party API
var callResult = http.request({"url":weatherService, "params": {"q":"siedlce,pl"}});
// parse the result of the call using regular JSON object
var weatherInfo = JSON.parse(callResult.body);
var temperature = weatherInfo.main.temp -273.15;
return Math.round(temperature).toString();   							