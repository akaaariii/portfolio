import React from 'react'
import { BgSecondary, Wrapper } from '../../globalStyles'
import { SkillsContainer } from './styles'
import { Html5 } from '@styled-icons/simple-icons/Html5'
import { Css3 } from '@styled-icons/simple-icons/Css3'
import { Sass } from '@styled-icons/fa-brands/Sass'
import { Javascript } from '@styled-icons/simple-icons/Javascript'
import { Typescript } from '@styled-icons/simple-icons/Typescript'
import { ReactLogo } from '@styled-icons/simple-icons/ReactLogo'
import { Redux } from '@styled-icons/simple-icons/Redux'
import { NodeDotJs } from '@styled-icons/simple-icons/NodeDotJs'
import { Mongodb } from '@styled-icons/simple-icons/Mongodb'
import { Firebase } from '@styled-icons/simple-icons/Firebase'
import { Figma } from '@styled-icons/simple-icons/Figma'
import { Git } from '@styled-icons/simple-icons/Git'
import { TabletMobileCombo } from '@styled-icons/entypo/TabletMobileCombo'
import { Eye } from '@styled-icons/fa-regular/Eye'
// import { EmojiSmile } from '@styled-icons/bootstrap/EmojiSmile'

const Skills = () => {
  return (
    <BgSecondary>
      <Wrapper id="skills">
        <h2>Skills</h2>
        <SkillsContainer>
          <div>
            <Html5 />
            HTML
          </div>
          <div>
            <Css3 />
            CSS
          </div>
          <div>
            <Sass />
            Sass
          </div>
          <div>
            <Javascript />
            JavaScript
          </div>
          <div>
            <Typescript />
            TypeScript
          </div>
          <div>
            <ReactLogo />
            React
          </div>
          <div>
            <Redux />
            Redux
          </div>
          <div>
            <NodeDotJs />
            Node.js
          </div>
          <div>
            <Mongodb />
            MongoDB
          </div>
          <div>
            <Firebase />
            Firebase
          </div>
          <div>
            <Figma />
            Figma
          </div>
          <div>
            <Git />
            Git
          </div>
          <div>
            <TabletMobileCombo />
            Responsive Design
          </div>
          <div>
            <Eye />
            Keen eye for detail
          </div>
          {/* <EmojiSmile /> */}
        </SkillsContainer>
      </Wrapper>
    </BgSecondary>
  )
}

export default Skills
