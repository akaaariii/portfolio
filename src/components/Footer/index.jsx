import React from 'react'
import { FooterContainer, FooterText } from './styles'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Akari Tsutsui</FooterText>
      <small>Copyright &copy; {new Date().getFullYear()} Akari Tsutsui, All rights Reserved.</small>
    </FooterContainer>
  )
}

export default Footer

