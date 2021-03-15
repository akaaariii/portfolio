import styled from 'styled-components'
import { data } from './skillData'

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 25px;
  font-family: 'Lato', sans-serif;
  color: #4e4d4a;
`

export const SkillItem = styled.div`
  
`

export const SkillIcon = styled.div`
  margin: 32px auto 16px;
  width: 50%;
  height: 60px;
`

export const SkillText = styled.div`
  display: inline-block;
  margin: 1em 0;
  padding: 7px 10px;
  min-width: 100%;
  border: solid 1px #4e4d4a;
  color: #4e4d4a;
  border-radius: 8px;
  text-align: center;
`