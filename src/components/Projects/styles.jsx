import styled from 'styled-components'

export const WorksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`

export const OverlayText = styled.div`
  position: absolute;
  text-align: center;
  padding: 10px;
  top: 2.5%;
  left: 2.5%;
  height: 95%;
  width: 95%;
  opacity: 0;
  transition: .5s ease;
  background-color: #fff;
`

export const WorkWrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 25px; */

  position: relative;
  /* width: 300px; */

  :hover ${OverlayText} {
    opacity: .9;
  }
`


