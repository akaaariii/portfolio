import styled from 'styled-components'

export const HeaderContainer = styled.header`
  font-family: 'Lato', sans-serif;
  background-color: #4e4d4a;
  padding: 10px 0;
  position: fixed;
  top: 0;
  width: 100%;
  display: block;
  transition: top 0.3s;
  z-index: 1;
`

export const Navbar = styled.nav`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
`

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  width: 60px;
  cursor: pointer;
`

export const LogoName = styled.div`
  margin-left: 16px;
  font-family: 'Fredoka One', cursive;
  font-size: 1.5rem;
`

export const NavListGroup = styled.ul`
  display: flex;
`

export const NavList = styled.li`
  font-weight: bold;
  padding: 0 15px;
  cursor: pointer;
`