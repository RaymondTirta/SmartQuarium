var express = require('express');
var router = express.Router();
const axios = require("axios"),
	fs = require("fs"),
	path = require('path'),
	  cors = require("cors");

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'dbcooper';

// Create a new MongoClient
const client = new MongoClient(url);

const mycollection = 'newdbcooper';

var latestdata = {};

/* GET users listing. */
router.get('/', function(req, res, next) {
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection(mycollection);
  /*
collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    //db.close();
  });
*/
collection.find({}).limit(20).sort
	({_id:-1})
	
	.toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	res.send(result);
  });
});
});


module.exports = router;
