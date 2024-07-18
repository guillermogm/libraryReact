import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Login } from '../Login/Login'
import { Home } from '../Home/Home'
import { NotFound } from '../NotFound/NotFound'
import { Register } from '../Register/Register'
import { Services } from '../Services/Services'

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path='*' element={<NotFound/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Home/>}/>
    </Routes>
    </>
  )
}
