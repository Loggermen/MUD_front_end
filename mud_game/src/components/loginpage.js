import React, { useState } from "react";
import {axiosWithAuth}  from '../utils/axiosWithAuth.js'


const LoginPage = (props) => {


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

        axiosWithAuth()
            .post('https://lambda-mud-test.herokuapp.com/api/login/', newLogin)
            // .then(response => console.log(response.data, "login"))
            .then(response => {
                localStorage.setItem('Token', response.data.key);
                console.log('response', response)

            })
            .catch(err => console.log(err.response));



    }


    return (
        <form className="login-form" onSubmit={handleLogin}>
            <h1>Login</h1>
            <input
                type="text"
                name="username"
                value={newLogin.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={newLogin.password}
                onChange={handleChange}
                placeholder="Password"
            />

            <button>Log in</button>


        </form>
    );
};

export default LoginPage;
