import React, { useState } from 'react'
import { Cinput } from '../Cinput/Cinput'

export const Register = () => {
    const [credentials, setCredentials] = useState(
        {
          email:"",
          password:""
        }
      )
      const handleChange= (e)=>{
        setCredentials(prevState =>(
          {
            ...prevState,
            [e.target.name]: e.target.value
          }
        ))
      }
    
    
      const register= ()=>{
        if(credentials.email === "" || credentials.password === ""){
            return console.log("No Email or Password");
        }
        console.log("Register");
        console.log(credentials)
      }
  return (
    <>
    <h1>Register</h1>
      <div>
        {/* <label htmlFor="email">Email</label> */}
        {/* <input type="email" name="email" placeholder="Email" onChange={handleChange}></input> */}
        <Cinput type="email" name="email" placeholder="Email" emitFuntion={handleChange}/>
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        {/* <input type="password" name="password" placeholder="Password" onChange={handleChange}></input> */}
        <Cinput type="password" name="password" placeholder="Password" emitFuntion={handleChange}/>
      </div>
      <div>
        <input type="button" name="send" value="Register" onClick={register}></input>
      </div>
    </>
  )
}
