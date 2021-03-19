import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HeaderContainer, Navbar, NavLogo, Logo, LogoName, NavListGroup, NavList } from './styles'
import logo from '../../assets/images/AKARI.svg'
import NavButton from '../NavButton'


const Header = () => {
  const [open, setOpen] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);
  
  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;
  //   setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
  //   setPrevScrollPos(currentScrollPos);
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  // }, [prevScrollPos, visible, handleScroll])

  return (
    <HeaderContainer>
      <Navbar>
        <NavLogo>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <Logo src={logo} alt="logo"/>
          </Link>
          <LogoName>AKARI</LogoName>
        </NavLogo>

        <NavButton open={open} setOpen={setOpen} />

        <NavListGroup open={open}>
          <NavList>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
          </NavList>
          <NavList>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
          </NavList>
          <NavList>
            <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
          </NavList>
          <NavList>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
          </NavList>
        </NavListGroup>
      </Navbar>
    </HeaderContainer>
  )
}

export default Header
