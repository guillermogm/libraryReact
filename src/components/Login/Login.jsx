import React, { useState } from 'react'

export const Login = () => {
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
    
    
      const login= ()=>{
        if(credentials.email === "" || credentials.password === ""){
            return console.log("No Email or Password");
        }
        console.log("Login");
        console.log(credentials)
      }
  return (
    <>
    <h1>Login</h1>
      <div>
        {/* <label htmlFor="email">Email</label> */}
        <input type="email" name="email" placeholder="Email" onChange={handleChange}></input>
      </div>
      <div>
        {/* <label htmlFor="password">Password</label> */}
        <input type="password" name="password" placeholder="Password" onChange={handleChange}></input>
      </div>
      <div>
        <input type="button" name="send" value="Login" onClick={login}></input>
      </div>
    </>
  )
}
