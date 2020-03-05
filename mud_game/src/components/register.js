import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  registerForm: {
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

const Register = (props) => {
  const classes = useStyles();
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);

    axios
      .post('https://lumbwars-test.herokuapp.com/api/registration/', values)
      // .then(response => console.log(response.data, "login"))
      .then(response => {
        localStorage.setItem('Token', response.data.key);
        props.history.push('/login')
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form className={classes.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <input
        className={classes.input}
        name="username"
        placeholder="username"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}

      <input
        className={classes.input}
        name="password1"
        placeholder="password"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />

      <input
        className={classes.input}
        name="password2"
        placeholder="re-type password"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />

      <button className={classes.button} type="submit">Submit</button>
    </form>
  );
};

export default Register;