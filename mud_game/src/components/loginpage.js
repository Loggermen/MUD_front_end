import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        margin: '2%',
        padding: '2%',
        width: '32%',
        border: '2px solid black',
        borderRadius: '8px'
    },
    input: {
        padding: '2%',
        margin: '2% 0'
    },
    button: {
        padding: '0.3em 1.2em',
        margin: '5% 2%',
        border: '0.16em solid rgba(225,255,255,1)',
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
            borderColor: 'rgba(255,255,255,0)'
         }
    }
})

const LoginPage = (props) => {
    const classes = useStyles();

    const credentials = {
        username: '',
        password: ''
    }

    const [newLogin, setNewLogin] = useState(credentials)

    const handleChange = event => {
        setNewLogin({
            ...newLogin,
            [event.target.name]: event.target.value
        });

    }


    const handleLogin = event => {
        event.preventDefault();

        axios
            .post('https://lumbwars.herokuapp.com/api/login/', newLogin)
            // .then(response => console.log(response.data, "login"))
            .then(response => {
                localStorage.setItem('Token', response.data.key);
                props.history.push('/game')
            })
            .catch(err => console.log(err.response));



    }


    return (
        <form className={classes.loginForm} onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
                className={classes.input}
                type="text"
                name="username"
                value={newLogin.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                className={classes.input}
                type="password"
                name="password"
                value={newLogin.password}
                onChange={handleChange}
                placeholder="Password"
            />

            <button className={classes.button}>Log in</button>


        </form>
    );
};

export default LoginPage;
