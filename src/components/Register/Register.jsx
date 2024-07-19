import React, { useState } from 'react'
import { Cinput } from '../Cinput/Cinput'

export const CRegister = () => {
  const [credentials, setCredentials] = useState(
    {
      email: "",
      password: ""
    }
  )
  const handleChange = (e) => {
    console.log(1)
    setCredentials(prevState => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }


  const register = async () => {
    try {
      console.log(credentials)
      // validar la data voy a enviar
      if (credentials.email === "" || credentials.password === "") {
        return console.log("No Email or Password");
      }
      // consumir la api
      const request = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
  
      const result = await request.json();
  
      console.log(result);   
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Register</h1>
      <div>
        {/* <label htmlFor="email">Email</label> */}
        {/* <input type="email" name="email" placeholder="Email" onChange={handleChange}></input> */}
        <Cinput type="email" name="email" placeholder="Email" emitFunction={handleChange} />
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        {/* <input type="password" name="password" placeholder="Password" onChange={handleChange}></input> */}
        <Cinput type="password" name="password" placeholder="Password" emitFunction={handleChange} />
      </div>
      <div>
        <input type="button" name="send" value="Register" onClick={register}></input>
      </div>
    </>
  )
}
