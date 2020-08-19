import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import axios from 'axios';
const period = 10;
var Mydata = [];




const data2 = [
  {
    time: 0*10, uv: 4000, pv: 2400, amt: 2400,
  },
  {
    time: 1*10, uv: 3000, pv: 1398, amt: 2210,
  },
  {
    time: 2*10, uv: 2000, pv: 9800, amt: 2290,
  },
  {
    time: 3*10, uv: 2780, pv: 3908, amt: 2000,
  },
  {
    time: 4*10, uv: 1890, pv: 4800, amt: 2181,
  },
  {
    time: 5*10, uv: 2390, pv: 3800, amt: 2500,
  },
  {
    time: 6*10, uv: 3490, pv: 4300, amt: 2100,
  },
];






export  class Temperaturegraph extends PureComponent {
	constructor() {
  super()
  this.state = { isLoading: true}
}

componentDidMount() {
	axios.get('http://localhost:5000/MongodbGetLatest')
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
}
	
  render() {
	
    return (
	 <div>
      {!this.state.isLoading &&      <LineChart
        width={500}
        height={300}
        data={Mydata}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
		
		<Line type="monotone" dataKey="temperature" stroke="#ec465a" />
        
        <YAxis domain={[22, 28]}/>
        <Tooltip />
        <Legend /> 
      </LineChart>}
    </div>
 
    );
  }
}

export  class PHgraph extends PureComponent {
	constructor() {
  super()
  this.state = { isLoading: true}
}

componentDidMount() {
	axios.get('http://localhost:5000/MongodbGetLatest')
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
}
	
  render() {
	
    return (
	 <div>
      {!this.state.isLoading &&      <LineChart
        width={500}
        height={300}
        data={Mydata}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
		<Line type="monotone" dataKey="pH" stroke="#82ca9d" />
        
        <YAxis />
        <Tooltip />
        <Legend /> 
      </LineChart>}
    </div>
 
    );
  }
}

export  class Turbiditygraph extends PureComponent {
	constructor() {
  super()
  this.state = { isLoading: true}
}

componentDidMount() {
	axios.get('http://localhost:5000/MongodbGetLatest')
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
}
	
  render() {
	
    return (
	 <div>
      {!this.state.isLoading &&      <LineChart
        width={500}
        height={300}
        data={Mydata}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
		<Line type="monotone" dataKey="turbidity" stroke="#FF9F1C" />
        
        <YAxis />
        <Tooltip />
        <Legend /> 
      </LineChart>}
    </div>
 
    );
  }
}

export  class TDSgraph extends PureComponent {
	constructor() {
  super()
  this.state = { isLoading: true}
}

componentDidMount() {
	axios.get('http://localhost:5000/MongodbGetLatest')
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
}
	
  render() {
	
    return (
	 <div>
      {!this.state.isLoading &&      <LineChart
        width={500}
        height={300}
        data={Mydata}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
		<Line type="monotone" dataKey="tds" stroke="#74c69d" />
		
        <YAxis domain={[250, 300]}/>
        <Tooltip />
        <Legend /> 
      </LineChart>}
    </div>
 
    );
  }
}
