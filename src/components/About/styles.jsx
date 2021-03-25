import styled from 'styled-components'

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
  @media (min-width: 768px){
    width: 50%;
  }

  h4 {
    margin: 0 0 10px;
    font-style: italic;
  }
`

export const AboutText = styled.p`
  font-style: italic;
  line-height: 1.5;
  letter-spacing: .3px;
  padding: 0 0 16px 16px;
  margin: 8px 0;
`

export const ImageSection = styled.div`
  width: 80%;
  margin: 2rem auto 0;
  @media (min-width: 768px){
    width: 45%;
    margin: 0;
  }
`