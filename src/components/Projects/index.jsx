import React from 'react'
import { BgPrimary, Wrapper } from '../../globalStyles'
import { WorksContainer, WorkWrapper, WorkImg, WorkContent, Title, StackGroup, Desc, StackItem, LinkButton } from './styles'
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
            <WorkImg src={work1Img} alt="Restaurant website" />
            <WorkContent>
              <Title>Restaurant Website</Title>
              <StackGroup>
                <StackItem>HTML</StackItem>
                <StackItem>CSS</StackItem>
                <StackItem>JavaScript</StackItem>
                <StackItem>Bootstrap</StackItem>
              </StackGroup>
              <Desc>An Italian Restaurant website. You can make a reservation and order online.</Desc>
              <LinkButton href="https://akaaariii.github.io/0520-web-Second-Project" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/0520-web-Second-Project" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>
  
          <WorkWrapper>
            <WorkImg src={work2Img} alt="Recipe app"/>
            <WorkContent>
              <Title>Recipe App</Title>
              <StackGroup>
                <StackItem>React</StackItem>
                <StackItem>Sass</StackItem>
                <StackItem>API</StackItem>
              </StackGroup>
              <Desc>A recipe search application.</Desc>
              <LinkButton href="https://akaaariii.github.io/react-recipe-app" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/react-recipe-app" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>
  
          <WorkWrapper>
            <WorkImg src={work3Img} alt="COVID-19 Dashboard"/>
            <WorkContent>
              <Title>COVID-19 Dashboard</Title>
              <StackGroup>
                <StackItem>React</StackItem>
                <StackItem>Chart.js</StackItem>
                <StackItem>TypeScript</StackItem>
                <StackItem>API</StackItem>
              </StackGroup>
              <Desc>A website that shows COVID-19 infected, recovered and deaths cases. You can see the number of cases by country.</Desc>
              <LinkButton href="https://covid19-dashboard2.vercel.app" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/covid19-dashboard2" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>
  
          <WorkWrapper>
            <WorkImg src="https://via.placeholder.com/300x300" alt=""/>
            <WorkContent>
              <Title>Shopping Website</Title>
              <Desc>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</Desc>
              <LinkButton href="" target="_blank">Visit website</LinkButton>
              <LinkButton href="" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>

          <WorkWrapper>
            <WorkImg src="https://via.placeholder.com/300x300" alt=""/>
            <WorkContent>
              <Title>Task Management App</Title>
              <Desc>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, iure deleniti dolorem fuga praesentium perspiciatis adipisci aliquam ipsa saepe laboriosam.</Desc>
              <LinkButton href="" target="_blank">Visit website</LinkButton>
              <LinkButton href="" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>

          <WorkWrapper>
            <WorkImg src="https://via.placeholder.com/300x300" alt=""/>
            <WorkContent>
              <Title>Portfolio</Title>
              <StackGroup>
                <StackItem>React</StackItem>
                <StackItem>Styled-components</StackItem>
              </StackGroup>
              <Desc>My Portfolio Website.<br />All my passion is here&#33;</Desc>
              <LinkButton href="https://github.com/akaaariii/portfolio" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>

        </WorksContainer>
      </Wrapper>
    </BgPrimary>
  )
}

export default Projects
