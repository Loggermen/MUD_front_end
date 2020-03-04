import React from 'react';
import Initialbox from './initialbox';
import Controls from './Controls.js'
import Map from './Map.js'

function Game() {
    return(
        <div>
            <Map/>
            <Controls/>
        </div>
    )
}

export default Game;