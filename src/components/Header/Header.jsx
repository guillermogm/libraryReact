import React from 'react'

import { CSurfer } from '../CSurfer/CSurfer'

export const Header = () => {

  return (
    <>
      <CSurfer path="/" content="Home" />
      <CSurfer path="/login" content="Login" />
      <CSurfer path="/register" content="Register" />
      <CSurfer path="/authors" content="Authors" />
    </>
  )
}
