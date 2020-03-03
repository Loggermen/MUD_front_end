import React, { useState, useEffect } from 'react';
import {axiosWithAuth} from'../utils/axiosWithAuth.js'

function Initialbox() {
    const [info, setInfo] = useState();

    // useEffect(() => {
        axiosWithAuth
            .get('https://lambda-mud-test.herokuapp.com/api/adv/init/')
            .then(response => {
                console.log('information', response)
                setInfo(response)
            })

            .catch(error => {
                console.log("did not get info", error);
            })
            // },[]);

    console.log(info, 'THIS IS INFO');

    return(
        <div>
            <h3>Info</h3>
            <div></div>
        </div>
    )
}

export default Initialbox;