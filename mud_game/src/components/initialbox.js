import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '10rem',
      padding: '2%',
      border: '2px solid black',
      borderRadius: '8px'
    }
  });

function Initialbox(props) {
    const classes = useStyles();
    const [info, setInfo] = useState({});
    // console.log('this is props', props)
    // console.log(info,"infoooo")

    useEffect(() => {
        axios
        .get('https://lumbwars-test.herokuapp.com/api/adv/init/',{headers: { Authorization: `Token ${localStorage.getItem("Token")}`},
            "Content-Type": "application/json"})
        .then(response => {
            // console.log('information', response);
            setInfo(response.data);
            })

        .catch(error => {
            console.log("did not get info", error);
        });
    },[props]);

    // console.log(info, 'THIS IS INFO after the axios call');

    return(
        <div className={classes.root}>
            <h3>Info:</h3>
            <h4>Player: {info.name}</h4>
            <h4>Current Area: {info.title}</h4>
            <h4>Area Description: {info.description}</h4>
            <h4>Other players in room:{info.players}</h4>
      
        </div>
        
    )
}

export default Initialbox;