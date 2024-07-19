import React, { useState } from 'react'
import { Cinput } from '../Cinput/Cinput'
import { registerUser } from '../../Services/apiCalls'

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

      const response = await registerUser(credentials)
      console.log(response);

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
