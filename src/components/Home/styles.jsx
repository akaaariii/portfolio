import styled from 'styled-components'
import { CanadianMapleLeaf } from '@styled-icons/fa-brands/CanadianMapleLeaf'

export const HomeContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
`

export const HeroSection = styled.div`
  font-family: 'Shippori Mincho', serif;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: .5rem;
  font-size: 1.3rem;
  padding: 36px;
  margin: auto;

  @media (min-width: 768px){
    letter-spacing: .6rem;
    font-size: 1.5rem;
  }
  @media (min-width: 1024px){
    letter-spacing: .7rem;
    font-size: 2rem;
  }
`

export const Name = styled.span`
  color: #ff8a7d;
  font-family: 'Fredoka One', cursive;
  font-size: 2.5rem;

  @media (min-width: 768px){
    font-size: 3rem;
  }
  @media (min-width: 1024px){
    font-size: 3.5rem;
  }
`

export const FontEmph = styled.span`
  color: #EAE7DC;
  font-size: 2rem;
  font-weight: bold;

  @media (min-width: 768px){
    font-size: 2.5rem;
  }
  @media (min-width: 1024px){
    font-size: 3rem;
  }
`

export const MapleIcon = styled(CanadianMapleLeaf)`
  color: #EAE7DC;
  width: 50px;
  transition: all 0.5s 0s ease-in-out;

  :hover {
    color: #3cb371;
  }
`