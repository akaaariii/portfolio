import React from 'react'
import { BgPrimary, Wrapper, LinkButton } from '../../globalStyles'
import { WorksContainer, WorkWrapper, WorkImg, WorkContent, Title, StackGroup, Desc, StackItem } from './styles'
import work1Img from '../../assets/images/project_restaurant.png'
import work2Img from '../../assets/images/project_recipe_app.png'
import work3Img from '../../assets/images/project_covid19.png'
import work6Img from '../../assets/images/project_portfolio.png'

const Projects = () => {
  return (
    <BgPrimary>
      <Wrapper id="projects">
        <h3>Projects</h3>

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
                <StackItem>Figma</StackItem>
              </StackGroup>
              <Desc>
                An Italian Restaurant website.<br />
                Designed and developed as a team. User can make a reservation and order online.
              </Desc>
              <LinkButton href="https://akaaariii.github.io/restaurant-project" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/restaurant-project" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>
  
          <WorkWrapper>
            <WorkImg src={work2Img} alt="Recipe app"/>
            <WorkContent>
              <Title>Recipe Search App</Title>
              <StackGroup>
                <StackItem>React</StackItem>
                <StackItem>Sass</StackItem>
                <StackItem>API</StackItem>
              </StackGroup>
              <Desc>
                A recipe search application.<br />
                Using Recipe Search API.
              </Desc>
              <LinkButton href="https://akaaariii.github.io/react-recipe-app" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/react-recipe-app" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>
  
          <WorkWrapper>
            <WorkImg src={work3Img} alt="COVID-19 Dashboard"/>
            <WorkContent>
              <Title>COVID-19 Live Dashboard</Title>
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
              <Title>Leather Shop Website</Title>
              <StackGroup>
                <StackItem>React</StackItem>
                <StackItem>Redux</StackItem>
                <StackItem>Node.js</StackItem>
                <StackItem>Express</StackItem>
                <StackItem>MongoDB</StackItem>
                <StackItem>Styled-components</StackItem>
              </StackGroup>
              <Desc>E-commerce website using MERN stack. Authentication with JWT and checkout with Stripe and Paypal.</Desc>
              <LinkButton href="" target="_blank">Visit website</LinkButton>
              <LinkButton href="" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>

          <WorkWrapper>
            <WorkImg src="https://via.placeholder.com/300x300" alt=""/>
            <WorkContent>
              <Title>Task Management App</Title>
              <StackGroup>
                <StackItem>React</StackItem>
              </StackGroup>
              <Desc>Comming soon&#33;</Desc>
              <LinkButton href="" target="_blank">Visit website</LinkButton>
              <LinkButton href="" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>

          <WorkWrapper>
            <WorkImg src={work6Img} alt="Portfolio"/>
            <WorkContent>
              <Title>Portfolio</Title>
              <StackGroup>
                <StackItem>React</StackItem>
                <StackItem>Styled-components</StackItem>
                <StackItem>XD</StackItem>
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
