import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Initialbox() {
    const [info, setInfo] = useState();

    useEffect(() => {
        axios
            .get('https://lambda-mud-test.herokuapp.com/api/adv/init/')
            .then(response => {
                // setInfo(response)
                console.log('information', response)
            })

            .catch(error => {
                console.log("did not get info", error);
            })
            },[]);

    console.log(info, 'THIS IS INFO');

    return(
        <div>
            <h3>Info</h3>
            <div></div>
        </div>
    )
}

export default Initialbox;