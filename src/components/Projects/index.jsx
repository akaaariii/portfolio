import React from 'react'
import { BgPrimary, Wrapper, LinkButton } from '../../globalStyles'
import { WorksContainer, WorkWrapper, WorkImg, WorkContent, Title, StackGroup, Desc, StackItem } from './styles'
import work1Img from '../../assets/images/project_restaurant.png'
import work2Img from '../../assets/images/project_recipe_app.png'
import work3Img from '../../assets/images/project_covid19.png'
import work4Img from '../../assets/images/project_ecommerce.png'
import work5Img from '../../assets/images/project_taskmanagement.png'
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
                Designed and developed as a team. User can make a reservation and order online after sign in.
              </Desc>
              <LinkButton href="https://akaaariii.github.io/restaurant-project/" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/restaurant-project/" target="_blank">Github</LinkButton>
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
                Type a keyword and hit the search button, then you can find your favourite recipes.<br />
                All the recipes are from Recipe Search API.
              </Desc>
              <LinkButton href="https://akaaariii.github.io/react-recipe-app/" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/react-recipe-app/" target="_blank">Github</LinkButton>
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
              <Desc>
                A website where you can see how many people have been infected, recovered and died in COVID-19.<br />
                You can see the number of cases by country.
              </Desc>
              <LinkButton href="https://covid19-dashboard2.vercel.app/" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/covid19-dashboard2/" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>
  
          <WorkWrapper>
            <WorkImg src={work4Img} alt="Leather shop website"/>
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
              <Desc>
                E-commerce website using MERN stack.<br />
                Authentication with Google OAuth and checkout with Stripe and Paypal.
              </Desc>
              <LinkButton href="https://natleather.herokuapp.com/" target="_blank">Visit website</LinkButton>
              <LinkButton href="https://github.com/akaaariii/0520-node-final-project/" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>

          <WorkWrapper>
            <WorkImg src={work5Img} alt="Task management app"/>
            <WorkContent>
              <Title>Task Management App</Title>
              <StackGroup>
                <StackItem>React</StackItem>
                <StackItem>Styled-components</StackItem>
              </StackGroup>
              <Desc>Coming soon&#33;</Desc>
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
              <Desc>
                My Portfolio Website.<br />All my passion is here&#33;
              </Desc>
              <LinkButton href="https://github.com/akaaariii/portfolio/" target="_blank">Github</LinkButton>
            </WorkContent>
          </WorkWrapper>

        </WorksContainer>
      </Wrapper>
    </BgPrimary>
  )
}

export default Projects
