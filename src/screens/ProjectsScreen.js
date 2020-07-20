import React from "react"
import styled from "styled-components"
import ProjectContainer from "../components/ProjectContainer"

export default function ProjectsScreen() {
  return (
    <Projects.Container id="projects">
      <Projects.Title>Personal Projects</Projects.Title>
      <ProjectContainer
        gitHubSrc="https://github.com/pat-hubbell/YourReader"
        imgSrc={require("../../static/project1.svg")}
        imgStyle={{ width: "24rem" }}
        title="Your Reader Mobile App"
        textAlign="right"
      ></ProjectContainer>
    </Projects.Container>
  )
}

const Projects = {
  Container: styled.div`
    align-items: center;
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    height: 100vh;
    margin-left: 5rem;
  `,
  Title: styled.h1`
    color: var(--white);
    font-family: var(--title-font);
    font-size: 3rem;
  `,
}
