import React from 'react'
import { ColorBgSection, Wrapper } from '../../globalStyles'
import { Content } from './styles'

const About = () => {
  return (
    <ColorBgSection>
     <Wrapper>
       <h2>About Me</h2>
       <Content>
         <img src="https://via.placeholder.com/200" alt=""/>
         <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam. Repellat amet numquam saepe aut voluptates perferendis temporibus, explicabo maiores.</div>
       </Content>
     </Wrapper>
    </ColorBgSection>
  )
}

export default About
