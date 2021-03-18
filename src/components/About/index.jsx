import React from 'react'
import { BgPrimary, Wrapper } from '../../globalStyles'
import { AboutContainer } from './styles'

const About = () => {
  return (
    <BgPrimary>
      <Wrapper id="about">
        <h2>About Me</h2>
        <AboutContainer>
          <img src="https://via.placeholder.com/200" alt=""/>
          <div>
            I'm Akari, Front-End Developer.
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci</li>
              <li>aliquam ipsa saepe laboriosam. Repellat amet numquam</li>
              <li>saepe aut voluptates perferendis temporibus, explicabo maiores.</li>
            </ul>
          </div>
        </AboutContainer>
      </Wrapper>
    </BgPrimary>
  )
}

export default About
