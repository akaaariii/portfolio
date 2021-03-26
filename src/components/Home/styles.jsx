import styled from 'styled-components'

export const HomeContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px){
    flex-direction: row-reverse;
  }
`

export const HeroSection = styled.h2`
  font-family: 'Forum', cursive;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: .2rem;
  font-size: 1.2rem;
  font-weight: lighter;
  padding: 0 36px 62px;

  @media (min-width: 576px){
    letter-spacing: .6rem;
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    padding: 0 36px;
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

export const ImageSection = styled.div`
  width: 60%;
  margin-bottom: -80px;

  @media (min-width: 576px){
    width: 50%;
  }
  @media (min-width: 768px){
    width: 30%;
    margin-left: -46px;
    margin-bottom: 0;
  }
`