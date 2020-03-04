import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
      width: '20%',
      border: '2px solid black'
    }
  });

function Initialbox() {
    const classes = useStyles();
    const [info, setInfo] = useState({});

    useEffect(() => {
        axios
            // console.log(localStorage.getItem("token"), 'TOKEN HERE')
        .get('https://lambda-mud-test.herokuapp.com/api/adv/init/',{headers: { Authorization: `Token ${localStorage.getItem("token")}` },
            "Content-Type": "application/json"})
        .then(response => {
            console.log('information', response)
            setInfo(response.data)
            })

        .catch(error => {
            console.log("did not get info", error);
        })
    },[]);

    console.log(info, 'THIS IS INFO after the axios call');

    return(
        <div className={classes.root}>
            <h3>Info</h3>
            <h4>Player: {info.name}</h4>
            <h4>Current Area: {info.title}</h4>
            <h4>Area Description: {info.description}</h4>
        </div>
    )
}

export default Initialbox;