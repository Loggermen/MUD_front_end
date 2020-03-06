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
        paddingTop: '1%',
        paddingLeft: '3%',
        paddingRight: '4%',
        border: '2px solid black',
        borderRadius: '8px',
        marginTop: '1%',
        marginRight:'1%',
        width:'10rem',
        height:'42.5rem'

        
    },
    controls: {
        display: 'flex',
        width:'11rem',
        paddingTop: '0rem',
        marginTop:'0rem',

        justifyContent: 'center',
        // border: 'solid 2px black',
        // borderRadius: '8px',
        // padding: '5% 2%'
    },
    button: {
        padding: '0.3em 1.2em',
        margin: '5% 2%',
        marginTop:'2.5rem',

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
        marginTop:'5rem',
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
    erm: {
        // display: 'flex',
        // justifyContent: 'center',
        // border: 'solid 2px black',
        // borderRadius: '8px',
        // padding: '5% 2%'
                // marginTop: '5rem',

        
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
                <h2>Directions:</h2>
                <div className={classes.controls}>
                <button className={classes.button2} onClick={() => movement("w")}>West</button>

                    <div>
                    <button className={classes.button} onClick={() => movement("n")}>North</button>

                    <button className={classes.button} onClick={() => movement("s")}>South</button>                    
                    </div>
                    <button className={classes.button2} onClick={() => movement("e")}>East</button>
                </div>
                <h3 className={classes.erm}>{moved.error_msg}</h3>

            </div>
        </div>
    )
}

export default Controls