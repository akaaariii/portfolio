import React, { useState } from 'react'
import { BgSecondary, Wrapper } from '../../globalStyles'
import { SkillsContainer, SkillIconContainer, SkillIcon, SkillText } from './styles'
import { SkillGroup, SkillGroupTitle } from './styles'
import { data } from './skillData'

const Skills = () => {
  // const [hover, setHover] = useState(false)
  // const onHover = () => {
  //   setHover(!hover)
  // }

  return (
    <BgSecondary>
      <Wrapper id="skills">
        <h2>Skills</h2>
        <SkillsContainer>
          <section>
            <SkillGroup>
              <SkillGroupTitle>Languages</SkillGroupTitle>
              <div>
                HTML, CSS, Sass, JavaScript, TypeScript
              </div>
            </SkillGroup>
            <SkillGroup>
              <SkillGroupTitle>Frameworks &amp; Libraries</SkillGroupTitle>
              <div>
                React, Redux, Chart.js, jQuery, Node.js, Express.js
              </div>
            </SkillGroup>
            <SkillGroup>
              <SkillGroupTitle>Others</SkillGroupTitle>
              <div>
                MongoDB, MySQL, Firebase, Git, Heroku, Figma, XD, Responsive Design
              </div>
            </SkillGroup>
          </section>
          
          <SkillIconContainer>
            {data.map((item, index) => (
              <div key={index}>
                <item.icon />
              </div>
            ))}
          </SkillIconContainer>
        </SkillsContainer>

      </Wrapper>
    </BgSecondary>
  )
}

export default Skills
