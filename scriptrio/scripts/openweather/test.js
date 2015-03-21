/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 // require the "http" module
var http = require("http");
// After requiring the module "http" you can use its function "request"
var response = http.request({"url": "http://api.openweathermap.org/data/2.5/weather","params": {"":"lat=52.171&lon=22.29"}});
return response;   							