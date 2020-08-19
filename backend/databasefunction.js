const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'dbcooper';

// Create a new MongoClient
const client = new MongoClient(url);


// Use connect method to connect to the Server

  module.exports.senddata= function (mydata,mycollection) {
	client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  const collection = db.collection(mycollection);
collection.insertOne(mydata);

});
  }
  
  
    module.exports.getxdata= function (mycollection) {
	client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection(mycollection);
collection.findOne({},
	{"sort":
	{_id:-1}
	,
	"limit":10}
,function(err,result){
	console.log(result);
	res.send(result);
});
db.close();
});
}
 