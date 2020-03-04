import React, { useState } from 'react'
import {axiosWithAuth} from'../utils/axiosWithAuth.js'
import Initialbox from './initialbox';

const Controls = () => {
    const [moved, setMoved] = useState();
    // const [inputs, setInputs] = useState({
    //     direction: "",
        
    //   });

    const movement = input => {

        axiosWithAuth()
            .post('https://lambda-mud-test.herokuapp.com/api/adv/move/', {direction: input})
            .then(response => {
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
            <Initialbox moved={moved}/>
            <button onClick={() => movement("n")}>North</button>
            <button onClick={() => movement("s")}>South</button>
            <button onClick={() => movement("e")}>East</button>
            <button onClick={() => movement("w")}>West</button>
            
        </div>
    )
}

export default Controls