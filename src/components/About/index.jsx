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
            I'm Akari, Front-End Developer.
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci</li>
              <li>aliquam ipsa saepe laboriosam. Repellat amet numquam</li>
              <li>saepe aut voluptates perferendis temporibus, explicabo maiores.</li>
            </ul>
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
