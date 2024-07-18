import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Home } from '../../views/Home/Home'

export const CSurfer = ({
    content="Home",
    path="/"
}) => {
    const navigate= useNavigate()
  return (
    <div onClick={()=> navigate(path)}>{content}</div>
  )
}
