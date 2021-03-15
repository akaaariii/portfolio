import React, { useState } from 'react'
import { BgSecondary, Wrapper } from '../../globalStyles'
import { SkillsContainer, SkillIcon, SkillText } from './styles'
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
          {data.map((item, index) => (
            <div key={index}>
              <SkillIcon ><item.icon/></SkillIcon>
              <SkillText>{item.tag}</SkillText>
            </div>
          ))}
        </SkillsContainer>
      </Wrapper>
    </BgSecondary>
  )
}

export default Skills
