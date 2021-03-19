import React from 'react'
import { ButtonToggle } from './styles'

const NavButton = ({ open, setOpen }) => {
  return (
    <ButtonToggle open={open} onClick={() => setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </ButtonToggle>
  )
}

export default NavButton
