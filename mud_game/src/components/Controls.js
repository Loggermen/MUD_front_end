import React, { useState } from 'react'
import {axiosWithAuth} from'../utils/axiosWithAuth.js'
import Initialbox from './initialbox';
import Map from './Map.js'

const Controls = () => {
    const [moved, setMoved] = useState();
    // const [inputs, setInputs] = useState({
    //     direction: "",
        
    //   });

    const movement = input => {

        axiosWithAuth()
            .post('https://lumbwars.herokuapp.com/api/adv/move/', {direction: input})
            .then(response => {
                console.log(response.data)
                setMoved(response.data)
            })
                // console.log(response, "moveeeeeeee"))
            // .then(response => {
            //     console.log('response', response)

            // })
            .catch(err => console.log(err.response));
    }


    return (
        <div>
            <Map moved={moved}/>
            <Initialbox moved={moved}/>
            <button onClick={() => movement("n")}>North</button>
            <button onClick={() => movement("s")}>South</button>
            <button onClick={() => movement("e")}>East</button>
            <button onClick={() => movement("w")}>West</button>
            
        </div>
    )
}

export default Controls