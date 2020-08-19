import React, { Fragment, useState } from "react";
import { KeyboardTimePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from '@date-io/moment';
import moment from 'moment';
var timeoff=moment("1500","hhmm");

function BasicTimePicker() {
  const [selectedDate, setValue] = useState(timeoff);
	const handleTimeChange = (event, newValue) => {
    setValue(newValue);
	timeoff=newValue;
	console.log(moment(timeoff).format('hhmm'));
  };
  return (
  
  <MuiPickersUtilsProvider utils={MomentUtils}>
            <KeyboardTimePicker
        clearable
        ampm={false}
        label="time off"
        value={selectedDate}
        onChange={handleTimeChange}
      />
	</MuiPickersUtilsProvider>
  );
}

export default BasicTimePicker;
export var timeoff;