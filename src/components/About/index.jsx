import React from 'react'
import { BgPrimary, Wrapper, LinkButton, GithubIcom, LinkedinIcon } from '../../globalStyles'
import { AboutContainer, AboutText, ContentSection, ImageSection } from './styles'
import myphoto from '../../assets/images/aboutme.png'

const About = () => {
  return (
    <BgPrimary>
      <Wrapper id="about">
        <h3>About Me</h3>
        <AboutContainer>
          <ContentSection>
            <h4>Who I am?</h4>
            <AboutText>
            I'm Akari Tsutsui, Front-End Developer. I'm passionate about designing and building user-friendly websites. Former I was working in a Bank for five years in Japan. Therefore, I take great pride in clean code and beautiful design with a keen eye for detail. I always try to better myself and learn up-to-date programming language and technologies!
            </AboutText>
            <h4>What I Love?</h4>
            <AboutText>
              I love travelling, watching movies and especially baking cakes and sweets! <br />
              Also, I'm a chocoholic. Even when I get stuck with buggy code, chocolates make me happy and give me motivation.
            </AboutText>
            <LinkButton href="">Resume</LinkButton>
            <a href="https://github.com/akaaariii" target="_blank"><GithubIcom /></a>
            <a href="https://www.linkedin.com/in/akari-tsutsui" target="_blank"><LinkedinIcon /></a>
          </ContentSection>
          <ImageSection>
            <img src={myphoto} alt="Akari Tsutsui"/>
          </ImageSection>
        </AboutContainer>
      </Wrapper>
    </BgPrimary>
  )
}

export default About
