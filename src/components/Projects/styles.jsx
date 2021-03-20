import styled from 'styled-components'

export const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  color: #4e4d4a;
  padding: 36px;

  @media (min-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px){
    grid-template-columns: repeat(3, 1fr);
  }
`

export const WorkWrapper = styled.div`
  background-color: #fff;
  margin-top: 16px;
  transition: all 0.5s 0s ease-in-out;

  :hover {
    box-shadow: 0 0 11px rgb(33 33 33 / 20%);
  }
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
  display: inline-block;
  position: relative;
  overflow: hidden;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ff8a7d;
    transform: scale(0, 1);
    transform-origin: center;
    transition: transform .4s; 
  }

  :hover::after {
    transform: scale(1);
  }
`

export const StackGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 16px;
`

export const StackItem = styled.div`
  border: 1px solid #4e4d4a;
  border-radius: 3px;
  color: #4e4d4a;
  font-size: .8rem;
  padding: 5px;
  margin: 3px;
`

export const Desc = styled.div`
  margin-bottom: 24px;
`
