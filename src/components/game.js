import React from 'react';
import Controls from './Controls.js'
import Map from './Map.js'

function Game() {
    return(
        <div className='game'>
            <Map/>
            <Controls/>
        </div>
    )
}

export default Game;