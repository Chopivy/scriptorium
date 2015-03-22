/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var http = require("http");
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
//get the response of the body as a string
var responseBodyStr = response.body;
if (response.status == "200"){
  var result = JSON.parse(responseBodyStr);
  var lat = result.latitude;
  var lon = result.longitude;
  return {"lat" : lat, "lon" : lon};
} else {
  return "Remote API return an error " + response.status;
}
 							   							