import React from 'react'
import { BgPrimary, Wrapper, LinkButton, GithubIcom, LinkedinIcon } from '../../globalStyles'
import { AboutContainer, AboutText, ContentSection, ImageSection, MailIcon } from './styles'
import myphoto from '../../assets/images/aboutme.svg'

const About = () => {
  return (
    <BgPrimary>
      <Wrapper id="about">
        <h3>About Me</h3>
        <AboutContainer>
          <ContentSection>
            <AboutText>
              I'm Akari Tsutsui, Front-End Developer. I'm passionate about designing and building user-friendly websites. 
              I've learned solid working knowledge in front-end languages and frameworks including HTML, CSS, JavaScript and React. Also, I've acquired problem-solving and how to work in a team.
            </AboutText>
            <AboutText>
              Former I was working in a Bank for five years in Japan. Therefore, I take great pride in clean code and beautiful design with a keen eye for detail. I always try to better myself and learn up-to-date programming language and technologies!
            </AboutText>
            <AboutText>
              Other than programming, I love travelling, watching movies and especially baking cakes and sweets! <br />
              If you are interested in working with me, please drop me a line.
            </AboutText>
            {/* <LinkButton href="">Resume</LinkButton> */}
            <a href="mailto:caaari23&#64;gmail.com"><MailIcon /></a>
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
