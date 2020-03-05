import React from 'react';
import Controls from './Controls.js'
import Map from './Map.js'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    game: {
        display: 'flex',
        width: '100%',
    }
})

function Game() {
    const classes = useStyles();

    return(
        <div className={classes.game}>
            <Map/>
            <Controls/>
        </div>
    )
}

export default Game;