import React, { useState } from 'react'
import { ButtonToggle } from './styles'

const index = () => {
  const [open, setOpen] = useState(false);


  return (
    <ButtonToggle 
    type="button"
    onClick={() => setOpen(!open)}
  >
    <span></span>
    <span></span>
    <span></span>
  </ButtonToggle>
  )
}

export default index
