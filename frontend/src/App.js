import React from 'react';
import PHline, {pH} from './phline.js';
import Temperatureline, {temperature} from './temperatureline.js';
import {Temperaturegraph, PHgraph, TDSgraph, Turbiditygraph} from './rechartsall.js';
//import Button from '@material-ui/core/Button';
import TheButton from './senddatabutton.js';
import TimeOn, {timeon} from  './timeon.js';
import TimeOff, {timeoff} from './timeoff.js';
//import syncdata from './syncdata.js';
import './App.css';






function App() {
	
  return (
 
    <div className="App">
	
      <header className="App-header">

	<PHline />
	<Temperatureline />
	
	<TimeOn />
	<TimeOff />
	<TheButton />
	<Temperaturegraph height="100px" width="100px"/>
	<PHgraph height="100px" width="100px"/>
	<TDSgraph height="100px" width="100px"/>
	<Turbiditygraph height="100px" width="100px"/>
	
	  </header>
    </div>
  );
}

export default App;

/*
	<Button  variant="contained" color="primary"
	onClick={() => { alert(temperature) }}
	>
        Primary
		
      </Button>
*/