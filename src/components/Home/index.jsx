import React from 'react'
import { Wrapper } from '../../globalStyles'
import { HomeContainer, HeroSection, Name, FontEmph } from './styles'

const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <HeroSection>
          I'm <Name>Akari</Name><br />
          <FontEmph>F</FontEmph>ront-<FontEmph>E</FontEmph>nd <FontEmph>D</FontEmph>eveloper<br />
          Based in <FontEmph>V</FontEmph>ancouver <i className="fab fa-canadian-maple-leaf"></i>
        </HeroSection>
      </HomeContainer>
    </Wrapper>
  )
}

export default Home
