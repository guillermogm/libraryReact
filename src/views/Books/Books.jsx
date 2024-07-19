import React, { useEffect } from 'react'

export const Books = () => {
    useEffect(() => {
      console.log("EFFECT");
      fetch("http://localhost:4000/api/books").then (res=> {
        console.log(res);
      }).catch(e=>{
        console.log(e);
      })
    })
    
  return (
    <>
        <h1>Books</h1>
    </>
  )
}
