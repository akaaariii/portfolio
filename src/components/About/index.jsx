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
            I'm Akari Tsutsui, Front-End Developer. I'm enthusiastic about designing and building a user-friendly website. Former I was working in a Bank for five years. Therefore, I take great pride in clean code and beautiful design with a keen eye for detail.
            I always try to better myself with every project I work on and look for better solutions to solve difficult problems.
            </p>
            <p>
              I love traveling, watching movies and especially baking cakes and sweets! <br />
              Also I'm a chocoholic. Even when I get stuck with buggy code, chocolates make me happy and give me motivation.
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
