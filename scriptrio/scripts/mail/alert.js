/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 var time = new Date();
var mailBody = "Hello,<br>An intrusion was detected at " + time + "<br>";
mailBody += "<a href='https://api.scriptr.io/discard?id=" + request.id + "'>Click here to discard the alert</a>";
var emailConfig = {
  "to": "abc@def.com",
  "fromName": "Node-RED flows",
  "subject": "Intrusion alert",
  "body": mailBody
};
return sendMail(emailConfig.to, emailConfig.fromName, emailConfig.subject, emailConfig.body);   							
