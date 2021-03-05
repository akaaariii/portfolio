import React from 'react'
import { Wrapper } from '../../globalStyles'
import { HomeContainer, Name, FontEmph } from './styles'

const Home = () => {
  return (
    <Wrapper>
      <HomeContainer>
        <div>
          I'm <Name>Akari</Name><br />
          <FontEmph>F</FontEmph>ront-<FontEmph>E</FontEmph>nd <FontEmph>D</FontEmph>eveloper<br />
          Based in <FontEmph>V</FontEmph>ancouver
        </div>
      </HomeContainer>
    </Wrapper>
  )
}

export default Home
