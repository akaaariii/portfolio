import React from 'react'
import { FooterContainer, FooterContent, FooterText, Logo } from './styles'
import logo from '../../assets/images/akari.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src={logo} alt="logo"/>
        <FooterText>Akari Tsutsui</FooterText>
      </FooterContent>
      <small>Copyright &copy; {new Date().getFullYear()} Akari Tsutsui, All rights Reserved.</small>
    </FooterContainer>
  )
}

export default Footer

