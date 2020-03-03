import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const Register = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);

    axios
      .post('https://lambda-mud-test.herokuapp.com/api/registration/', values)
      // .then(response => console.log(response.data, "login"))
      .then(response => {
          console.log('response', response)
      })
      .catch(err => console.log(err.response));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input
        name="email"
        placeholder="Email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message} */}

      <input
        name="username"
        placeholder="username"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}

      <input
        name="password1"
        placeholder="password"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />

<input
        name="password2"
        placeholder="re-type password"
        ref={register({
          validate: value => value !== "admin" || "Nice try!"
        })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;