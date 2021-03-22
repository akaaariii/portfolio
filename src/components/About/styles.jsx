import styled from 'styled-components'

export const AboutContainer = styled.div`
  color: #4e4d4a;
  padding: 36px;

  @media (min-width: 768px){
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  div {
    text-align: justify;

    @media (min-width: 768px){
      width: 60%;
    }
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