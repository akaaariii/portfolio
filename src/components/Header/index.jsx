import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HeaderContainer, Navbar, NavListGroup, NavList, Logo } from './styles'
import logo from '../../assets/images/AKARI.svg'


const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  return (
    <HeaderContainer>
      <Navbar>
        <NavList>
          <Link to="home" spy={true} smooth={true} duration={500}>
            {/* Akari */}
            <Logo src={logo} alt="logo"/>
          </Link>
        </NavList>

        <NavListGroup>
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
