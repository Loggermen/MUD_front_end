import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        textDecoration: 'None',
        width: '100%',
        height: '50px',
        backgroundColor: 'black',
    },
    link: {
        margin: '0% 2%',
        textDecoration: 'None',
        color: 'White'
    }
})

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>Hello</div>
            <Link className={classes.link} to="/login">Login</Link>
            <Link className={classes.link} to='/register'>Register</Link>
            <Link className={classes.link} to='/game'>Game</Link>
        </div>
    )
}

export default Header;