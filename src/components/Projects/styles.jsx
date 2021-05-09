import styled from 'styled-components'

export const WorksContainer = styled.div`
  color: #4e4d4a;
  padding: 24px 36px 36px;
`

export const WorkWrapper = styled.div`
  @media (min-width: 768px){
    display: flex;
    background-color: #fff;
    margin-bottom: 16px;
    transition: box-shadow .4s;

    :nth-child(even) {
      flex-direction: row-reverse;
    }
    :hover {
      box-shadow: 0 0 11px rgb(33 33 33 / 20%);
      /* box-shadow: 0 0 11px #a2c0be; */
      /* box-shadow: rgb(162, 192, 190) 5px 5px, rgba(162, 192, 190, 0.6) 10px 10px; */
      /* box-shadow: #a2c0be 8px 8px; */
      /* box-shadow: rgb(162, 192, 190) 0px 0px 0px 5px, rgba(162, 192, 190, 0.6) 0px 0px 0px 10px; */
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
    margin: 48px auto;
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
  padding-bottom: 5px;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #4e4d4a;
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

export const Desc = styled.div`
  font-style: italic;
  padding: 0 16px;
  margin-bottom: 24px;

  p {
    position: relative;
    padding: 0.5em 1em 0.5em 2em;
    margin-bottom:5px;

    ::before,::after {
      content:'';
      position: absolute;
      transform: rotate(45deg);
    }
    ::before {
      top: 0.7em;
      left: 0.2em;
      width: 12px;
      height: 12px;
      /* border:2px solid rgba(255,143,0,1); */
      border:2px solid rgb(185,163,145);
    }
    ::after {
      top: 0.9em;
      left: 0.7em;
      width: 14px;
      height: 14px;
      /* background: rgba(255,143,0,0.5); */
      background: rgba(185,163,145,0.5);
      transform: rotate(60deg);
    }
  }
`
