import React, { Fragment, useState } from "react";
import { KeyboardTimePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import moment from 'moment';
var timeon=moment("0900","hhmm");

function BasicTimePicker() {
  const [selectedDate, setValue] = useState(timeon);
	const handleTimeChange = (event, newValue) => {
    setValue(newValue);
	timeon=newValue;
	console.log(moment(timeon).format('hhmm'));
  };
  return (
  
  <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardTimePicker
        clearable
        ampm={false}
        label="time on"
        value={selectedDate}
        onChange={handleTimeChange}
      />
	</MuiPickersUtilsProvider>
  );
}

export default BasicTimePicker;
export var timeon;