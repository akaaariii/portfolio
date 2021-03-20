import React from 'react'
import { BgPrimary, Wrapper, LinkButton, GithubIcom, LinkedinIcon } from '../../globalStyles'
import { AboutContainer } from './styles'

const About = () => {
  return (
    <BgPrimary>
      <Wrapper id="about">
        <h2>About Me</h2>
        <AboutContainer>
          <div>
            <p>
              I'm Akari Tsutsui, Front-End Developer.
              
            </p>
            <LinkButton href="">Resume</LinkButton>
            <a href="https://github.com/akaaariii" target="_blank"><GithubIcom /></a>
            <a href="https://www.linkedin.com/in/akari-tsutsui" target="_blank"><LinkedinIcon /></a>
          </div>
          <img src="https://via.placeholder.com/200" alt=""/>
        </AboutContainer>
      </Wrapper>
    </BgPrimary>
  )
}

export default About
