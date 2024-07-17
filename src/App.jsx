import { useState } from 'react'
import './App.css'
import { Login } from './components/Login/Login.jsx'

function App() {
  // OPTION 1
  // const [email,setEmail]= useState("")
  // const [password,setPassword]= useState("")
  // const handleChange= (e)=>{
  //   const input =e.target.name
  //   if(input === "email"){
  //     setEmail(e.target.value)
  //   }
  //   if(input === "password"){
  //     setPassword(e.target.value)
  //   }
  // }
  // const login= ()=>{
  //   if (email.length === 0) {
  //     console.log("EMAIL NEDDED")
  //   }
  //   console.log(email);
  //   if (password.length === 0) {
  //     console.log("PASSWORd NEDDED")
  //   }
  //   console.log(password);
  // }
  return (
    <>
      <Login />
    </>
  )
}

export default App
