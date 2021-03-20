import styled from 'styled-components'
import { CanadianMapleLeaf } from '@styled-icons/fa-brands/CanadianMapleLeaf'

export const HomeContainer = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
`

export const HeroSection = styled.h2`
  font-family: 'Forum', cursive;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-size: 1.2rem;
  font-weight: lighter;
  padding: 0 36px 36px;
  margin: auto;

  @media (min-width: 576px){
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

  @media (min-width: 576px){
    font-size: 3rem;
  }
  @media (min-width: 1024px){
    font-size: 3.5rem;
  }
`

export const FontEmph = styled.span`
  color: #EAE7DC;
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: 576px){
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