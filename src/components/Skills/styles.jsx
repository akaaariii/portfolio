import styled from 'styled-components'

// export const SkillsContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 10px;
//   font-family: 'Lato', sans-serif;
//   color: #4e4d4a;
//   padding: 36px;

//   @media (min-width: 576px){
//     grid-template-columns: repeat(5, 1fr);
//   }

//   @media (min-width: 768px){
//     grid-template-columns: repeat(7, 1fr);
//     grid-gap: 25px;
//   }
// `

// export const SkillIcon = styled.div`
//   margin: 32px auto 16px;
//   width: 40%;
//   height: 50px;
//   transition: all 0.5s 0s ease-in-out;

//   :hover {
//     transform: scale(1.2);
//   }
// `

// export const SkillText = styled.div`
//   display: inline-block;
//   margin: 1em 0;
//   padding: 7px 5px;
//   min-width: 100%;
//   border: solid 1px #4e4d4a;
//   color: #4e4d4a;
//   font-size: .7rem;
//   border-radius: 8px;
//   text-align: center;
  
//   @media (min-width: 576px){
//     font-size: .9rem;
//     padding: 7px 10px;
//   }
// `

export const SkillsContainer = styled.div`
  padding: 36px;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
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