import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
import { green,red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import moment from 'moment';

import axios from 'axios';
import {pH} from './phline.js';
import {temperature} from './temperatureline.js';
import {timeon} from './timeon.js';
import {timeoff} from './timeoff.js';
const senddataurl='http://localhost:5000/AntaresSend';


const firstdelay= 500;
const seconddelay= 1000;



const useStyles = makeStyles((theme) => ({
	buttontesting: {
		backgroundColor:"#2ec4b6",
		'&:hover': {
          backgroundColor: '#27a599'
        }
	},
  root: {
    display: 'flex',
    alignItems: 'center',
	
	
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
	
  },
  buttonSuccess: {
	  
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
    buttonFail: {
	  
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    }
},}));

export default function CircularIntegration() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [fail, setFail] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
	[classes.buttonFail]: fail,
  });


  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  	

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
	  		axios.post(senddataurl,{
			temperature,
			pH,
			"ON":parseInt(moment(timeon).format("hhmm")),
			"OFF":parseInt(moment(timeoff).format("hhmm"))
		})
		.then(function (response) {
			
    console.log(response.status);
	if (response.status==200){
		timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, firstdelay);
	  timer.current = setTimeout(() => {
        setSuccess(false);
      }, seconddelay);
		} else
		{
		timer.current = setTimeout(() => {
        setFail(true);
        setLoading(false);
      }, firstdelay);
	  timer.current = setTimeout(() => {
        setFail(false);
      }, seconddelay);
		}
	//if (response.status = 200)
  })
  .catch(function (error) {
    console.log(error);
			timer.current = setTimeout(() => {
        setFail(true);
        setLoading(false);
      }, firstdelay);
	  timer.current = setTimeout(() => {
        setFail(false);
      }, seconddelay);
  });
  /*
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, firstdelay);
	  timer.current = setTimeout(() => {
        setSuccess(false);
      }, seconddelay);
	  */
    }
  };

  return (
    <div className={classes.root}>

      <div className={classes.wrapper}>
        <Button
          variant="contained"
		  classes={{
        root: classes.buttontesting, // class name, e.g. `classes-nesting-root-x`
        // class name, e.g. `classes-nesting-label-x`
      }}
          color="primary"
          className={buttonClassname}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Change Config
        </Button>
        {loading && <LinearProgress />}
      </div>
    </div>
  );
}

/*
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

//import serverdata from './sy



const senddataurl='http://localhost:5000/AntaresSend'

export default function ButtontoSend() {
	function axiossend(){
		axios.post(senddataurl,{
			temperature,
			pH
		})
		.then(function (response) {
    console.log(response.status);
	if (response.status = 200
  })
  .catch(function (error) {
    console.log(error);
  });	
		}
	return(
	<Button  variant="contained" color="primary"
	onClick={() => { axiossend() }}
	>
	Update Config
    </Button>
	);
}
*/