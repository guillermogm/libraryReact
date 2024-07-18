import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CSurfer } from '../CSurfer/CSurfer'

export const Header = () => {
  const navigate= useNavigate()

  return (
    <>
          <div onClick={() => navigate("/login")}>Login</div>
          <CSurfer path="/" content="Home"/>
          <div onClick={() => navigate("/register")}>Register</div>
          <div>Services</div>
    </>
  )
}
