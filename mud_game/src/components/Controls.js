import React from 'react'
import {axiosWithAuth} from'../utils/axiosWithAuth.js'

const Controls = () => {

    // const [inputs, setInputs] = useState({
    //     direction: "",
        
    //   });

    const movement = input => {
        console.log(input,'"inn')

        axiosWithAuth()
            .post('https://lambda-mud-test.herokuapp.com/api/adv/move/', {direction: input})
            .then(response => console.log(response, "moveeeeeeee"))
            // .then(response => {
            //     console.log('response', response)

            // })
            .catch(err => console.log(err.response));



    }


    return (
        <div>
            <button onClick={() => movement("n")}>North</button>
            <button onClick={() => movement("s")}>South</button>
            <button onClick={() => movement("e")}>East</button>
            <button onClick={() => movement("w")}>West</button>
            
        </div>
    )
}

export default Controls