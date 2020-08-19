import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



const name="Change Temp";
const defaultval="25" 
const granularity="1" 
const min="21" 
const max="30" 
const suffix="°C"


var temperature=parseInt(defaultval);

const useStyles = makeStyles({
  root: {
    width: 300,
	
	},
	text: {
		color: '#e71d36',
	},
	 thumb:{
      color: '#ec465a',
      }
  ,
  track: {
        color: '#ec465a'
  },
  rail: {
	  color:'#cb152b'
  }


});

/*
function valuetext(value) {
  return `${value}°C`;
}
*/



export default function DiscreteSlider() {
	
	const [value, setValue] = React.useState(defaultval);
	const handleSliderChange = (event, newValue) => {
    setValue(newValue);
	temperature=newValue;
	//console.log(temperature);
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
    <div className={classes.root}>
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

export var temperature;