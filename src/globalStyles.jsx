import styled from 'styled-components'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'
import { Github } from '@styled-icons/fa-brands/Github'

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px 0;
`

export const BgPrimary = styled.div`
  background-color: #fbf4ee;
  margin-top: -2px;
`

export const BgSecondary = styled.div`
  background-color: #fff;
`

export const BgBlack = styled.div`
  background-color: #2e2d2a;
`

export const LinkButton = styled.a`
  text-decoration: none;
  background-color: #a2c0be;
  color: #fff;
  border-radius: 24px;
  padding: 8px 16px;
  margin: 5px;
  transition: all 0.5s 0s ease-in-out;

  :hover {
    background-color: transparent;
    border: 1px solid #a2c0be;
    color: #a2c0be;
  }
`

export const GithubIcom = styled(Github)`
  width: 30px;
  margin: 24px 8px;
  cursor: pointer;
  color: #606161;
  transition: all 0.4s 0s ease-in-out;

  :hover {
    transform: scale(1.2);
    color: #ff8a7d;
  }
`

export const LinkedinIcon = styled(Linkedin)`
  width: 30px;
  margin: 24px 8px;
  cursor: pointer;
  color: #606161;
  transition: all 0.4s 0s ease-in-out;

  :hover {
    transform: scale(1.2);
    color: #ff8a7d;
  }
`

// #EEE2DC
// #4e4d4a brand color
// #2e2d2a
// #8E8D8A
// #F1DED7
// #ff8a7d  font color

// #ece4dc

// #FBF4EE brand color
