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
  letter-spacing: .9rem;
  font-size: 2rem;
`

export const Name = styled.span`
  color: #ff8a7d;
  font-family: 'Fredoka One', cursive;
  font-size: 3.5rem;
  font-weight: bold;
`

export const FontEmph = styled.span`
  color: #EAE7DC;
  font-size: 3rem;
  font-weight: bold;
`

export const MapleIcon = styled(CanadianMapleLeaf)`
  width: 50px;
  transition: all 0.5s 0s ease-in-out;

  :hover {
    color: #3cb371;
  }
`