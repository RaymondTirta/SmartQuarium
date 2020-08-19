import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { latestpH } from './latestdata.js';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const name="Change pH";
const defaultval="6" 
const granularity="0.1" 
const min="5" 
const max="9" 
const suffix=""

var pH=8;

const useStyles = makeStyles({
  root: {
    width: 300,
	
	},
	text: {
		color: '#2ec4b6',
	},
	 thumb:{
      color: '#27a599',
      }
  ,
  track: {
        color: '#27a599'
  },
  rail: {
	  color:'#49d4c6'
  }


});




/*
function valuetext(value) {
  return `${value}°C`;
}
*/




export default function DiscreteSlider(option) {
	
	const [value, setValue] = React.useState(option.pH);
	const handleSliderChange = (event, newValue) => {
    setValue(newValue);
	pH=newValue;
	//console.log(pH);
  };
	function nanana() {
		//console.log(value);
	}
  const classes = useStyles();
  
	const marks = [
	
  {
    value: min,
    label: min+suffix,
  },

  {
    value: max,
    label: max+suffix,
  },
];

/*
var keys = ['value','label'];
for (var i=option.min; i<=option.max; i+=option.granularity){
	if (i==option.min || i==option.max){
		values
}
var arrayOfObjects = [];
for(var i=0; i<values.length; i++){
    var obj = {};
    for(var j=0; j<values[i].length; j++){
         obj[keys[j]] = values[i][j];  
      }
    arrayOfObjects.push(obj);
}
*/
  return (
    <div  className={classes.root}>
	   
		<Typography id="discrete-slider" classes ={{root: classes.text,}}
		 gutterBottom>
	  {name}
      </Typography>
   
 
	 
      
 
      <Slider 
		classes ={{rail: classes.rail, track: classes.track, thumb: classes.thumb}}
        defaultValue={defaultval}
		/* 
        getAriaValueText={valuetext}
		*/
		value={value}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={JSON.parse(granularity)}
		min={JSON.parse(min)}
		max={JSON.parse(max)}
		onChange = {handleSliderChange}
		onMouseUp = {nanana}
        marks={marks}
      />

    </div>
  );
}

export var pH;