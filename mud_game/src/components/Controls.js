import React, { useState } from 'react'
import {axiosWithAuth} from'../utils/axiosWithAuth.js'
import Initialbox from './initialbox';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map.js'

const useStyles = makeStyles({
    information: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        padding: '2%',
        border: '2px solid black',
        borderRadius: '8px',
    },
    controls: {
        display: 'flex',
        justifyContent: 'center',
        // border: 'solid 2px black',
        // borderRadius: '8px',
        // padding: '5% 2%'
    },
    button: {
        padding: '0.3em 1.2em',
        margin: '5% 2%',
        border: '0.16em solid rgba(225,255,255,0)',
        borderRadius: '2em',
        boxSizing: 'border-box',
        textDecoration: 'none',
        fontWeight: '300',
        backgroundColor: 'black',
        color: 'white',
        textShadow: '0 0.04em 0.04em black',
        textAlign: 'center',
        transition: 'all 0.2s',
        '&:hover': {
            borderColor: 'rgba(255,255,255,1)'
         }
    }
})

const Controls = () => {
    const classes = useStyles();
    const [moved, setMoved] = useState('');
    // console.log(moved,"movestate")
    // const [inputs, setInputs] = useState({
    //     direction: "",
        
    //   });

    const movement = input => {

        axiosWithAuth()
            .post('https://lumbwars-test.herokuapp.com/api/adv/move/', {direction: input})
            .then(response => {
                // console.log(response.data, "MOVeeeEee")
                setMoved(response.data)
            })
          
            .catch(err => console.log(err.response));
    }


    return (
        <div className={classes.information}>
        {/* <div> */}
            <Map moved={moved}/>
            <Initialbox moved={moved}/>
            <div className={classes.box}>
                <h3>Directions:</h3>
                <h3>{moved.error_msg}</h3>
                <div className={classes.controls}>
                    <button className={classes.button} onClick={() => movement("n")}>North</button>
                    <button className={classes.button} onClick={() => movement("s")}>South</button>                    
                    <button className={classes.button} onClick={() => movement("w")}>West</button>
                    <button className={classes.button} onClick={() => movement("e")}>East</button>
                </div>
            </div>
        </div>
    )
}

export default Controls