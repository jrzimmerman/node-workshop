// Twilio Credentials 
var accountSid = 'AC751fce89a9c07deb302a4a2fe9e5663c'; 
var authToken = 'ba558b069020483981aa75f918c7f83e'; 

var twilio = require('twilio')(accountSid, authToken);


twilio.sendMessage({
  'to':'+13018761328',
  'from':'+12409794356',
  'body':'hello world!'
}, function(err, msg) {
  if(err) {
    console.error(err);
  } else {
    console.log(msg);
  }
});