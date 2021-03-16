import styled from 'styled-components'

export const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  color: #4e4d4a;
`

export const WorkWrapper = styled.div`
  background-color: #fff;
  margin-top: 16px;
`

export const WorkImg = styled.img`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const WorkContent = styled.div`
  text-align: center;
  padding: 16px;
`

export const Title = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: 10px 0;
`

export const StackGroup = styled.div`
  display: flex;
  justify-content: center;
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
  background-color: #ff8a7d;
  color: #fff;
  padding: 5px 10px;
  margin: 5px;

  :hover {
    background-color: transparent;
    border: 1px solid #ff8a7d;
    color: #ff8a7d;
  }
`
