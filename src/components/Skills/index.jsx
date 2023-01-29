import React from 'react'
import { BgSecondary, Wrapper } from '../../globalStyles'
import {
  SkillsContainer,
  SkillGroup,
  SkillGroupTitle,
  SkillGroupLists,
  SkillIconContainer,
  SkillIcon,
} from './styles'
import { data } from './skillData'

const Skills = () => {
  return (
    <BgSecondary>
      <Wrapper id="skills">
        <h3>Skills</h3>
        <SkillsContainer>
          <section>
            <SkillGroup>
              <SkillGroupTitle>Languages</SkillGroupTitle>
              <SkillGroupLists>
                <li>HTML,</li>
                <li>CSS,</li>
                <li>JavaScript,</li>
                <li>TypeScript</li>
              </SkillGroupLists>
            </SkillGroup>
            <SkillGroup>
              <SkillGroupTitle>Frameworks &amp; Libraries</SkillGroupTitle>
              <SkillGroupLists>
                <li>React,</li>
                <li>React Hooks,</li>
                <li>Redux,</li>
                <li>Styled-components,</li>
                <li>Sass,</li>
                <li>Chart.js,</li>
                <li>jQuery,</li>
                <li>Node.js,</li>
                <li>Express.js</li>
              </SkillGroupLists>
            </SkillGroup>
            <SkillGroup>
              <SkillGroupTitle>Others</SkillGroupTitle>
              <SkillGroupLists>
                <li>MySQL,</li>
                <li>Firebase,</li>
                <li>Google Cloud Platform,</li>
                <li>MongoDB,</li>
                <li>Git,</li>
                <li>Figma,</li>
                <li>XD,</li>
                <li>Responsive Design</li>
              </SkillGroupLists>
            </SkillGroup>
          </section>

          <SkillIconContainer>
            {data.map((item, index) => (
              <SkillIcon key={index} icon={item}>
                <item.icon />
              </SkillIcon>
            ))}
          </SkillIconContainer>
        </SkillsContainer>
      </Wrapper>
    </BgSecondary>
  )
}

export default Skills
