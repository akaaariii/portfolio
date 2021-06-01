import React from 'react'
import { BgBlack, Wrapper } from '../../globalStyles'
import {
  HomeContainer,
  HeroSection,
  Name,
  FontEmph,
  ImageSection,
} from './styles'
import flower from '../../assets/images/flower.gif'

const Home = () => {
  return (
    <BgBlack>
      <Wrapper id="home">
        <HomeContainer>
          <ImageSection>
            <img src={flower} alt="flower" />
          </ImageSection>
          <HeroSection>
            I'm <Name>Akari</Name>
            <br />
            <FontEmph>F</FontEmph>ront-<FontEmph>E</FontEmph>nd{' '}
            <FontEmph>D</FontEmph>eveloper,
            <br />
            Based in <FontEmph>V</FontEmph>ancouver
          </HeroSection>
        </HomeContainer>
      </Wrapper>
    </BgBlack>
  )
}

export default Home
