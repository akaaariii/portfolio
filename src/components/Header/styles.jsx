import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #4e4d4a;
  padding: 10px 0;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  transition: top 0.3s;
  opacity: ${window.pageYOffset > 80 ? '0.9' : '1'};
  z-index: 1;
`

export const Navbar = styled.nav`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  padding: 0 10px;
`

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  z-index: 1;
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
  
  @media (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    background: #4e4d4a;
    width: 100%;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    padding: 2rem;
    margin-top: 60px;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.2s ease-in-out;
  }
`

export const NavList = styled.li`
  padding: 24px;
  cursor: pointer;

  @media (min-width: 1024px) {
    padding: 0 15px;
  }
`