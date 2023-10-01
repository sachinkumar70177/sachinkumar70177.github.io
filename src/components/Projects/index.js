import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper className="nav-link projects">
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From todo apps to Ecommerce apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Ecommerce app' ?
            <ToggleButton active value="Ecommerce app" onClick={() => setToggle('Ecommerce app')}>Ecommerce APP'S</ToggleButton>
            :
            <ToggleButton value="Ecommerce app" onClick={() => setToggle('Ecommerce app')}>Ecommerce APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'Health app' ?
            <ToggleButton active value="Health app" onClick={() => setToggle('Health app')}>Health APP'S</ToggleButton>
            :
            <ToggleButton value="Health app" onClick={() => setToggle('Health app')}>Health APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'tax app' ?
            <ToggleButton active value="tax app" onClick={() => setToggle('tax app')}>Financial App's</ToggleButton>
            :
            <ToggleButton value="tax app" onClick={() => setToggle('tax app')}>Financial App's</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project,index) => (
              <ProjectCard  key ={index} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects