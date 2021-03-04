import React from 'react'
import { FooterContainer, FooterText } from './styles'


const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Akari Tsutsui</FooterText>
      <p>Copyright &copy; {new Date().getFullYear()} Akari Tsutsui, All rights Reserved.</p>
    </FooterContainer>
  )
}

export default Footer

