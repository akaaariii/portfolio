import React from 'react'
import { Link } from 'react-scroll'
import { FooterContainer, FooterContent, FooterText, Logo } from './styles'
import logo from '../../assets/images/akari.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <Logo src={logo} alt="logo"/>
        </Link>
        <FooterText>Akari Tsutsui</FooterText>
      </FooterContent>
      <small>Copyright &copy; {new Date().getFullYear()} Akari Tsutsui, All rights Reserved.</small>
    </FooterContainer>
  )
}

export default Footer

