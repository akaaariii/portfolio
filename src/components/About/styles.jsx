import styled from 'styled-components'
import { Mail } from '@styled-icons/feather/Mail'

export const AboutContainer = styled.div`
  color: #4e4d4a;
  padding: 36px;

  @media (min-width: 768px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`

export const ContentSection = styled.div`
  text-align: justify;
  padding: 0 0 16px 16px;
  @media (min-width: 768px){
    width: 50%;
  }
`

export const AboutText = styled.p`
  font-style: italic;
  line-height: 1.5;
  letter-spacing: .3px;
  padding: 0 0 16px 0;
  margin: 8px 0;
`

export const ImageSection = styled.div`
  margin: 2rem auto 0;
  @media (min-width: 576px) {
    width: 80%;
  }
  @media (min-width: 768px){
    width: 45%;
    margin: 0;
  }
`

export const MailIcon = styled(Mail)`
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