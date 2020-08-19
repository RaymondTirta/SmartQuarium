var express = require('express');
var router = express.Router();
const axios = require("axios"),
	fs = require("fs"),
	path = require('path'),
	  cors = require("cors");
	  
router.use(cors());

var placeholder = {};

const mylink='https://platform.antares.id:8443/~/antares-cse/antares-id/testingkafin1/esp8266kafin/';
const mykey='38727ec4c4a0a1aa:7de4a820d4d6c54c';

/* GET users listing. */
router.get('/', function(req, res, next) {
	axios.get(mylink+'la', {
headers: {'X-M2M-Origin': mykey,'Accept':'application/json','Content-type':'application/json;ty=3'},
crossdomain: true 
 })
  .then(function (response) {
	 placeholder = JSON.parse(response.data['m2m:cin'].con);
	 console.log(placeholder);
	 //placeholder.pH=placeholder.pH+5;
	 
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
  res.send(placeholder);
});

module.exports = router;
