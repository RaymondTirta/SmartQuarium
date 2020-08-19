var express = require('express');
var router = express.Router();
const axios = require("axios"),
	fs = require("fs"),
	path = require('path'),
	  cors = require("cors");
	  
router.use(cors());

var placeholder = {};
var placeholder2 = [];

const link='https://platform.antares.id:8443/~/antares-cse/antares-id/testingkafin1/espsend/';
const keys='38727ec4c4a0a1aa:7de4a820d4d6c54c';
const totaldata= '7';
const link2='https://platform.antares.id:8443/~';
var count= 0;


axios.get(link, {
headers: {'X-M2M-Origin': keys,'Accept':'application/json','Content-type':'application/json;ty=3'},
params: { 'fu':'1','lim': totaldata,'ty':'4'},
crossdomain: true 
 })
  .then(function (response) {
	 //var placeholder = JSON.parse(response.data['m2m:cin'].con);
	  placeholder = response.data['m2m:uril'];
	 // console.log(placeholder);
	 /*
	 var antaresData = placeholder.replace(/["']/,"");
	 console.log(placeholder);
	 filePath = __dirname + '/client/public/dataAntares.json';
	 fs.writeFile(filePath, antaresData,(err) => {
	 if (err) throw err;
	 */
	 
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
   for (x in placeholder){
	console.log(placeholder[x]);
	axios.get(link2+placeholder[x], {
	headers: {'X-M2M-Origin': keys,'Accept':'application/json','Content-type':'application/json;ty=3'},
	crossdomain: true 
	})
	.then(function (response) {
	console.log(count);
	count++;
	obj = JSON.parse(response.data['m2m:cin'].con); //add other params if you need
	obj.time=parseInt(totaldata)-count;
	placeholder2.push(obj);
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
}

  });  
  

router.get('/', function(req, res, next) {
  res.send(placeholder2);
});

module.exports = router;