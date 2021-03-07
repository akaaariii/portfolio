import React from 'react'
import { BgPrimary, Wrapper } from '../../globalStyles'
import { WorksContainer, WorkWrapper, OverlayText } from './styles'

const Projects = () => {
  return (
    <BgPrimary>
      <Wrapper>
        <h2>Projects</h2>

        <WorksContainer>
          <WorkWrapper>
            <img src="https://via.placeholder.com/300x300" alt=""/>
            <OverlayText>
              <div>Title</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam. Repellat amet numquam saepe aut voluptates perferendis temporibus</div>
            </OverlayText>
          </WorkWrapper>
  
          <WorkWrapper>
            <img src="https://via.placeholder.com/300x300" alt=""/>
            <OverlayText>
              <div>Title</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam. Repellat amet numquam saepe aut voluptates perferendis temporibus</div>
            </OverlayText>
          </WorkWrapper>
  
          <WorkWrapper>
            <img src="https://via.placeholder.com/300x300" alt=""/>
            <OverlayText>
              <div>Title</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam. Repellat amet numquam saepe aut voluptates perferendis temporibus</div>
            </OverlayText>
          </WorkWrapper>
  
          <WorkWrapper>
            <img src="https://via.placeholder.com/300x300" alt=""/>
            <OverlayText>
              <div>Title</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam. Repellat amet numquam saepe aut voluptates perferendis temporibus</div>
            </OverlayText>
          </WorkWrapper>
        </WorksContainer>
      </Wrapper>
    </BgPrimary>
  )
}

export default Projects
