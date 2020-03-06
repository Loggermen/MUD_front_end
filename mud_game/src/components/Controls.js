import React, { useState } from 'react'
import {axiosWithAuth} from'../utils/axiosWithAuth.js'
import Initialbox from './initialbox';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map.js'

const useStyles = makeStyles({
    information: {
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        background: "green",


    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        padding: '4%',
        border: '2px solid black',
        borderRadius: '8px',
        margin: '1% 0%',
        marginRight:'1%'

        
    },
    controls: {
        display: 'flex',
        width:'11rem',
        paddingTop: '0rem',

        justifyContent: 'center',
        width: '100%'
        // border: 'solid 2px black',
        // borderRadius: '8px',
        // padding: '5% 2%'
    },
    button: {
        padding: '0.3em 1.2em',
        margin: '5% 2%',
        width: '80px',
        border: '0.16em solid rgba(225,255,255,0)',
        height:'2rem',
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
    },
    button2: {
        padding: '0.3em 1.2em',
        margin: '5% 2%',
        marginTop:'1.5rem',
        border: '0.16em solid rgba(225,255,255,0)',
        height:'2rem',
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
    },
    mapint: {
        display: 'flex',
        // justifyContent: 'center',
        // border: 'solid 2px black',
        // borderRadius: '8px',
        // padding: '5% 2%'
                margin: '1% 2%',

        
    },
    root: {
        padding: '20rem',
        border: '0.16em solid yellow',

        

        // display: 'flex',
        // justifyContent: 'center',
        // border: 'solid 2px black',
        // borderRadius: '8px',
        // padding: '5% 2%'
    },
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
        <div className={classes.mapint} >
        < Initialbox className={classes.initial} moved={moved}/>
            <Map moved={moved}/>
            </div>
            <div className={classes.box}>
                <h3>Directions:</h3>
                <h3>{moved.error_msg}</h3>
                <div className={classes.controls}>
                <button className={classes.button2} onClick={() => movement("w")}>West</button>

                    <div>
                    <button className={classes.button} onClick={() => movement("n")}>North</button>

                    <button className={classes.button} onClick={() => movement("s")}>South</button>                    
                    </div>
                    <button className={classes.button2} onClick={() => movement("e")}>East</button>
                </div>
            </div>
        </div>
    )
}

export default Controls