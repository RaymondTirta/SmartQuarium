const axios = require("axios"),
	fs = require("fs"),
	path = require('path'),
	  cors = require("cors");



exports.AntaresgetData =  function (link,keys) {

axios.get(link, {
headers: {'X-M2M-Origin': keys,'Accept':'application/json','Content-type':'application/json;ty=3'},
crossdomain: true 
 })
  .then(function (response) {
	 var placeholder = JSON.parse(response.data['m2m:cin'].con);
	 placeholder.pH=placeholder.pH+5;
	 //console.log(placeholder["temperature"]);
	/*
	filePath = __dirname + '/client/public/dataAntares.json';
	fs.writeFile(filePath, JSON.stringify(placeholder),(err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});	
*/
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
  return this.placeholder;
}