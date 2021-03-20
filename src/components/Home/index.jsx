import React from 'react'
import { BgBlack, Wrapper } from '../../globalStyles'
import { HomeContainer, HeroSection, Name, FontEmph, MapleIcon } from './styles'

const Home = () => {
  return (
    <BgBlack>
      <Wrapper id="home">
        <HomeContainer>
          <HeroSection>
            I'm <Name>Akari</Name><br />
            <FontEmph>F</FontEmph>ront-<FontEmph>E</FontEmph>nd <FontEmph>D</FontEmph>eveloper,<br />
            Based in <FontEmph>V</FontEmph>ancouver<MapleIcon />
          </HeroSection>
        </HomeContainer>
      </Wrapper>
    </BgBlack>
  )
}

export default Home
