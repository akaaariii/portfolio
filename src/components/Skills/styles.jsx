import styled from 'styled-components'

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 25px;
  font-family: 'Lato', sans-serif;
  color: #4e4d4a;
`

export const SkillIcon = styled.div`
  margin: 32px auto 16px;
  width: 40%;
  height: 50px;
  transition: all 0.5s 0s ease-in-out;

  :hover {
    transform: scale(1.2);
  }
`

export const SkillText = styled.div`
  display: inline-block;
  margin: 1em 0;
  padding: 7px 10px;
  min-width: 100%;
  border: solid 1px #4e4d4a;
  color: #4e4d4a;
  font-size: .9rem;
  border-radius: 8px;
  text-align: center;
`