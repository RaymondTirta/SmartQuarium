axios.get('https://platform.antares.id:8443/~/antares-cse/antares-id/testingkafin1/esp8266kafin/la', {
headers: {'X-M2M-Origin': ' 38727ec4c4a0a1aa:7de4a820d4d6c54c','Accept':'application/json','Content-type':'application/json;ty=3'},
params: { 'fu':'1','lim':'3','ty':'4'},
crossdomain: true 
 })
  .then(function (response) {
	 //var placeholder = JSON.parse(response.data['m2m:cin'].con);
	  var placeholder = response.data['m2m:uril'];
	  console.log(placeholder[0]);
	 /*
	 var antaresData = placeholder.replace(/["']/,"");
	 console.log(placeholder);
	 filePath = __dirname + '/client/public/dataAntares.json';
	 fs.writeFile(filePath, antaresData,(err) => {
	 if (err) throw err;
	 */
	 
	 //placeholder.pH=placeholder.pH+5;
	 //console.log(placeholder["temperature"]);
	filePath = __dirname + '/client/public/dataAntares.json';
	fs.writeFile(filePath, JSON.stringify(placeholder),(err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});	
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  