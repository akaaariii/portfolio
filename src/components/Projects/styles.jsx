import styled from 'styled-components'

export const WorksContainer = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(3, 1fr); */
  /* grid-template-columns: 2fr 3fr;
  grid-gap: 30px; */
`

export const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 48px;
  margin-bottom: 48px;

  position: relative;
  /* width: 300px; */
`

export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0;
`

export const StackGroup = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const StackItem = styled.div`
  border: 1px solid #4e4d4a;
  border-radius: 3px;
  color: #4e4d4a;
  font-size: .8rem;
  padding: 5px;
  margin: 0 3px;
`

export const Desc = styled.div`
  margin-bottom: 24px;
`

export const LinkButton = styled.a`
  text-decoration: none;
  background-color: #7c7c7c;
  color: #fff;
  border-radius: 3px;
  padding: 5px 10px;
  margin: 5px;

  :hover {
    background-color: transparent;
    border: 1px solid #4e4d4a;
    color: #4e4d4a;
  }
`
