var express = require('express');
var router = express.Router();
const axios = require("axios"),
	fs = require("fs"),
	path = require('path'),
	  cors = require("cors");
var lodash = require("lodash");
router.use(cors());

var dataantares = {};

const mylink='https://platform.antares.id:8443/~/antares-cse/antares-id/testingkafin1/espreceive/';
const mykey='38727ec4c4a0a1aa:7de4a820d4d6c54c';

router.post('/', function(req, res, next) {
  datafrontend=req.body;
  console.log('Got body:', datafrontend);
  axios.get(mylink+'la', {
headers: {'X-M2M-Origin': mykey,'Accept':'application/json','Content-type':'application/json;ty=3'},
crossdomain: true 
 })
  .then(function (response) {
	 dataantares = JSON.parse(response.data['m2m:cin'].con);
	//console.log(placeholder);
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
   if (lodash.isEqual(dataantares,datafrontend)==0){
	  console.log("data beda");
	  
	  axios.post(mylink,{
    "m2m:cin": {
    "con": JSON.stringify(datafrontend)
    }
},
  {
	headers: {'X-M2M-Origin': mykey,'Accept':'application/json','Content-type':'application/json;ty=4'},
	crossdomain: true 
	}
  )
  .then(function (response) {
    console.log(response.status);
	res.sendStatus(200);
  })
  .catch(function (error) {
    console.log(error);
	res.sendStatus(400);
  })
   }
  else {
	  console.log("data sama, tidak akan dikirim");
	  res.sendStatus(200);
  }
  });  
  /*
  axios.get('http://localhost:5000/AntaresGetLatest')
  .then(function(response){
	  dataantares=response.data;
	  console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then (function() {
	  if (lodash.isEqual(dataantares,datafrontend)==0){
	  console.log("data beda");
  }
  else {
	  console.log("data sama, tidak akan dikirim");
  }
  })
  */

  
  
  
  
  //console.log(data.temperature);
  
  //if (dataantares.
  /*
  axios.post(mylink,{
      "m2m:cin": {
    "con": req.body
  }},
  {
	headers: {'X-M2M-Origin': mykey,'Accept':'application/json','Content-type':'application/json;ty=3'},
	crossdomain: true 
	}
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  */
});

module.exports = router;