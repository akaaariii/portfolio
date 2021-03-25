import styled from 'styled-components'

export const WorksContainer = styled.div`
  color: #4e4d4a;
  padding: 36px;
`

export const WorkWrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 0 11px rgb(33 33 33 / 20%);
  margin-bottom: 16px;

  @media (min-width: 768px){
    display: flex;
    :nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`

export const WorkImg = styled.img`
  @media (min-width: 768px){
    width: 50%;
    margin: 0;
  }
`

export const WorkContent = styled.div`
  text-align: center;
  margin: 0 auto 36px;
  padding-bottom: 56px;
  
  @media (min-width: 768px){
    margin: 36px auto;
    padding: 16px;
  }
`

export const Title = styled.h4`
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

export const StackGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 0 16px;
`

export const StackItem = styled.li`
  border: 1px solid #4e4d4a;
  border-radius: 3px;
  color: #4e4d4a;
  font-size: .8rem;
  padding: 5px;
  margin: 3px;
`

export const Desc = styled.p`
  font-style: italic;
  padding: 0 16px;
  margin-bottom: 24px;
`
