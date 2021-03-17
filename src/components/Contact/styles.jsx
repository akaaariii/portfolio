import styled from 'styled-components'
import { Mail } from '@styled-icons/feather/Mail'

export const ContactContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`

export const ContactLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MailLink = styled.a`
  font-family: 'Fredoka One', cursive;
  font-size: 1.8rem;
  text-decoration: none;
  color: #000;
  display: inline-block;
  position: relative;
  overflow: hidden;
  margin: 10px;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4e4d4a;
    transform: translate(-100%, 0);
    transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.4s;
  }

  :hover::after {
    transform: translate(0, 0);
  }
`

export const MailIcon = styled(Mail)`
  width: 30px;
`