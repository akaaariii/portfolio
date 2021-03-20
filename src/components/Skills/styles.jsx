import styled from 'styled-components'

// export const SkillIcon = styled.div`
//   display: inline-block;
//   margin: 32px auto 16px;
//   width: 40%;
//   height: 50px;
//   transition: all 0.5s 0s ease-in-out;

//   :hover {
//     transform: scale(1.2);
//   }
// `

export const SkillsContainer = styled.div`
  padding: 36px;

  section {
    @media (min-width: 768px){
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 12px;
    }
  }
`

export const SkillGroup = styled.div`
  position: relative;
  margin: 2.5em 0;
  padding: 1em;
  border: solid 2px #8E8D8A;
  border-radius: 8px;
  color: #4e4d4a;
`

export const SkillGroupTitle = styled.div`
  position: absolute;
  display: inline-block;
  top: -13px;
  left: 10px;
  padding: 0 9px;
  line-height: 1;
  font-size: 19px;
  background: #FFF;
  color: #4e4d4a;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 768px){
    font-size: 14px;
  }

  @media (min-width: 1024px){
    font-size: 19px;
  }
`

export const SkillIconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  color: #4e4d4a;

  @media (min-width: 576px){
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: 768px){
    display: flex;
    justify-content: center;
  }

  div {
    width: 40px;
    margin: 10px;
  }
`