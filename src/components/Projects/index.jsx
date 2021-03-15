import React from 'react'
import { BgPrimary, Wrapper } from '../../globalStyles'
import { WorksContainer, WorkWrapper, OverlayText } from './styles'
import work1Img from '../../assets/images/work_restaurant.png'
import work2Img from '../../assets/images/work_recipe_app.png'
import work3Img from '../../assets/images/work_covid19.png'

const Projects = () => {
  return (
    <BgPrimary>
      <Wrapper id="projects">
        <h2>Projects</h2>

        <WorksContainer>
          <WorkWrapper>
            <img src={work1Img} alt="Restaurant website" />
            <OverlayText>
              <div>Restaurant website</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</div>
              <button>Visit <i className="fas fa-external-link-alt"></i></button>
              <button>Github</button>
            </OverlayText>
          </WorkWrapper>
  
          <WorkWrapper>
            <img src={work2Img} alt="Recipe app"/>
            <OverlayText>
              <div>Recipe app</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</div>
              <button>Visit <i className="fas fa-external-link-alt"></i></button>
              <button>Github</button>
            </OverlayText>
          </WorkWrapper>
  
          <WorkWrapper>
            <img src={work3Img} alt="COVID-19 Dashboard"/>
            <OverlayText>
              <div>COVID-19 Dashboard</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</div>
              <button>Visit <i className="fas fa-external-link-alt"></i></button>
              <button>Github</button>
            </OverlayText>
          </WorkWrapper>
  
          <WorkWrapper>
            <img src="https://via.placeholder.com/300x300" alt=""/>
            <OverlayText>
              <div>Title</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</div>
            </OverlayText>
          </WorkWrapper>

          <WorkWrapper>
            <img src="https://via.placeholder.com/300x300" alt=""/>
            <OverlayText>
              <div>Title</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</div>
            </OverlayText>
          </WorkWrapper>

          <WorkWrapper>
            <img src="https://via.placeholder.com/300x300" alt=""/>
            <OverlayText>
              <div>Title</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</div>
            </OverlayText>
          </WorkWrapper>
        </WorksContainer>
      </Wrapper>
    </BgPrimary>
  )
}

export default Projects
