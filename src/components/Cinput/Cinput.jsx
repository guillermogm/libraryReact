import React from 'react'

export const Cinput = ({type="text", name="", placeholder="", emitFunction}) => {
  return (
    <>
        <input type={type} name={name} placeholder={placeholder} onChange={emitFunction}></input>
    </>
  )
}
