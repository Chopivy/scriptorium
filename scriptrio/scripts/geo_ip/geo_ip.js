/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var http = require("http");
var ip = request.headers["x-forwarded-for"];
var iplookupUrl = "http://www.telize.com/geoip/" + ip;
var response = http.request({url: iplookupUrl});
if(response.status == "200"){
    var result = JSON.parse(response.body);
    var lat = result.latitude;
    var lon = result.longitude;
}
return {"lat" : lat, "lon" : lon};   							