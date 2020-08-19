var express = require("express"),
  app = express(),
  port = process.env.PORT || 5000,
  cors = require("cors"),
  
mylink='https://platform.antares.id:8443/~/antares-cse/antares-id/testingkafin1/esp8266kafin/la';
mykey='38727ec4c4a0a1aa:7de4a820d4d6c54c';

 createError = require('http-errors');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var util = require('util');

var axios = require("axios"),
	fs = require("fs"),
	path = require('path');
	
var indexRouter = require('./routes/index');
var AntaresGetLatestRouter = require('./routes/AntaresGetLatest');
var AntaresGetIDRouter = require('./routes/AntaresGetDataID');
var AntaresSendRouter = require('./routes/AntaresSend');
var MongodbGetLatestRouter = require('./routes/mongodbGetLatest');
//var DBSendRouter = require('./routes/DBSend');

app.use(cors());
antares = require("./axios/getData.js");
antares.AntaresgetData(mylink,mykey);

app.listen(port, () => console.log("Backend server live on " + port));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/AntaresGetLatest', AntaresGetLatestRouter);
app.use('/AntaresGetDataID', AntaresGetIDRouter);
app.use('/AntaresSend', AntaresSendRouter);
app.use('/MongodbGetLatest', MongodbGetLatestRouter);
//app.use('/DBSend', DBSend);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});
*/

var mqtt = require('mqtt')
const antaresurl = 'mqtt://mqtt.antares.id:1883'
const subscribeurl ='/oneM2M/resp/antares-cse/38727ec4c4a0a1aa:7de4a820d4d6c54c/json'

var client  = mqtt.connect(antaresurl)
 
client.on('connect', function () {
  client.subscribe(subscribeurl, function (err) {
    if (!err) {
      //client.publish('presence', 'Hello mqtt')
    }
	else {
		console.log(err);
	}
  })
})
 
var dbdriver = require('./databasefunction');
const receivelink = '/antares-cse/cnt-EHC0die0Shy0-Azz';
client.on('message', function (topic, message) {
	
  // message is Buffer
  var thedata=JSON.parse(message.toString());
  if (thedata["m2m:rsp"].pc["m2m:cin"].pi == receivelink){
  var finaldata=JSON.parse(thedata["m2m:rsp"].pc["m2m:cin"].con);
  mytime=thedata["m2m:rsp"].pc["m2m:cin"].ct;
  finaldata.time=mytime.substr(0,4)+'-'+mytime.substr(4,2)+'-'+mytime.substr(6,5)+':'+mytime.substr(11,2)+':'+mytime.substr(13,2);
  //console.log(thedata);
  console.log(thedata["m2m:rsp"].pc["m2m:cin"]);
  console.log(finaldata.time);
  dbdriver.senddata(finaldata,'newdbcooper');
  }
 // if (finaldata.type=="downlink"){
 
})
