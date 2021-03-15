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
              <div>Restaurant Website</div><br />
              <div>An Italian Restaurant website. You can make a reservation and order online.</div><br />
              <div>HTML, CSS, JavaScript, Bootstrap</div><br />
              <a href="https://akaaariii.github.io/0520-web-Second-Project" target="_blank">Visit <i className="fas fa-external-link-alt"></i></a>
              <a href="https://github.com/akaaariii/0520-web-Second-Project" target="_blank">Github</a>
            </OverlayText>
          </WorkWrapper>
  
          <WorkWrapper>
            <img src={work2Img} alt="Recipe app"/>
            <OverlayText>
              <div>Recipe App</div>
              <div>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</div>
              <div>HTML, CSS, JavaScript, Bootstrap</div><br />
              <a href="https://akaaariii.github.io/react-recipe-app" target="_blank">Visit <i className="fas fa-external-link-alt"></i></a>
              <a href="https://github.com/akaaariii/react-recipe-app" target="_blank">Github</a>
            </OverlayText>
          </WorkWrapper>
  
          <WorkWrapper>
            <img src={work3Img} alt="COVID-19 Dashboard"/>
            <OverlayText>
              <div>COVID-19 Dashboard</div>
              <div>A website that shows COVID-19 infected, recovered and deaths cases. You can see the number of cases by country.</div>
              <div>React, Chart.js</div><br />
              <a href="https://covid19-dashboard2.vercel.app" target="_blank">Visit <i className="fas fa-external-link-alt"></i></a>
              <a href="https://github.com/akaaariii/covid19-dashboard2" target="_blank">Github</a>
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
