import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HeaderContainer, Navbar, NavLogo, Logo, LogoName, NavListGroup, NavList } from './styles'
import logo from '../../assets/images/akari.png'
import NavButton from '../NavButton'


const Header = () => {
  const [open, setOpen] = useState(false);
  const [style, setStyle] = useState();

  const handleScroll = () => {
    setStyle(window.pageYOffset > 160 ? {opacity: '.9'} : {opacity: 1});
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <HeaderContainer style={style}>
      <Navbar>
        <NavLogo>
          <Link onClick={() => setOpen(false)} to="home" spy={true} smooth={true} offset={-70} duration={500}>
            <Logo src={logo} alt="logo"/>
          </Link>
          <LogoName>AKARI</LogoName>
        </NavLogo>

        <NavButton open={open} setOpen={setOpen} />

        <NavListGroup open={open} onClick={() => setOpen(false)}>
          <NavList>
            <Link onClick={() => setOpen(false)} to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
          </NavList>
          <NavList>
            <Link onClick={() => setOpen(false)} to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
          </NavList>
          <NavList>
            <Link onClick={() => setOpen(false)} to="projects" spy={true} smooth={true} offset={-70} duration={500}>Portfolio</Link>
          </NavList>
          <NavList>
            <Link onClick={() => setOpen(false)} to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
          </NavList>
        </NavListGroup>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
