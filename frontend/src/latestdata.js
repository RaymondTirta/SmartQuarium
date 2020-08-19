import React, { PureComponent } from 'react';
import axios from 'axios';
var Mydata={};

axios.get('http://localhost:5000/AntaresGetLatest')
  .then((response) => {
	  Mydata=response.data;
	  this.setState({ isLoading: false }); } )
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

export var latestpH=Mydata.pH;
export var latesttemperature=Mydata.temperature;