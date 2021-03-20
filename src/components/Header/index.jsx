import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { HeaderContainer, Navbar, NavLogo, Logo, LogoName, NavListGroup, NavList } from './styles'
import logo from '../../assets/images/AKARI.svg'
import NavButton from '../NavButton'


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <Navbar>
        <NavLogo>
          <Link onClick={() => setOpen(!open)} to="home" spy={true} smooth={true} duration={500}>
            <Logo src={logo} alt="logo"/>
          </Link>
          <LogoName>AKARI</LogoName>
        </NavLogo>

        <NavButton open={open} setOpen={setOpen} />

        <NavListGroup open={open} onClick={() => setOpen(!open)}>
          <NavList>
            <Link onClick={() => setOpen(!open)} to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
          </NavList>
          <NavList>
            <Link onClick={() => setOpen(!open)} to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
          </NavList>
          <NavList>
            <Link onClick={() => setOpen(!open)} to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
          </NavList>
          <NavList>
            <Link onClick={() => setOpen(!open)} to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
          </NavList>
        </NavListGroup>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
