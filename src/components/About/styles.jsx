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
    /* font-size: 1.1rem; */
    text-align: justify;

    @media (min-width: 768px){
      width: 60%;
    }
  }
`