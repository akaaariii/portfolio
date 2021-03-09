import styled from 'styled-components'

export const HeaderContainer = styled.header`
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

export const NavListGroup = styled.ul`
  display: flex;
`

export const NavList = styled.li`
  padding: 0 10px;
  cursor: pointer;
`