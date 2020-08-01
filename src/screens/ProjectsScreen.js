import React from "react"
import styled from "styled-components"
import ProjectContainer from "../components/ProjectContainer"

export default function ProjectsScreen() {
  return (
    <Projects.Container className="projects-screen" id="projects">
      <Projects.Title className="projects-screen-title">
        Personal Projects
      </Projects.Title>
      <ProjectContainer
        gitHubSrc="https://github.com/pat-hubbell/your-reader"
        imgSrc={require("../../static/project1.svg")}
        title="Your Reader Mobile App"
        textAlign="right"
      >
        The Your Reader mobile application allows the user to take an image of a
        document, and this image is then processed using Optical Character
        Recognition Technology. During processing, text in the document is
        extracted, and the text is then read back to the user. The main
        technologies used in this project are JavaScript, React Native, Google
        Firebase Machine Learning Kit, React Navigation, and Expo Camera and
        Image Picker.
      </ProjectContainer>
      <ProjectContainer
        gitHubSrc="https://github.com/pat-hubbell/vast-views"
        imgSrc={require("../../static/project2.svg")}
        title="Vast Views Web App"
        textAlign="left"
      >
        The Vast Views web application allows the user to see a vast array of
        nature images fetched from the Unsplash API. I began this project to
        serve as a good foundation where I could continually add modern features
        over time. Currently, I have implemented an infinite scroll feature,
        similar to what you can find on social media websites. I've also
        implemented a light and dark theme toggle, and an image filter to allow
        the user to pick the orientation of the images that are fetched from the
        API.{" "}
        <span>
          <Projects.VastViewsLink
            href="http://vastviews.herokuapp.com"
            target="_blank"
          >
            Check out Vast Views!
          </Projects.VastViewsLink>
        </span>
      </ProjectContainer>
      <ProjectContainer
        gitHubSrc="https://github.com/pat-hubbell/hubl-portfolio"
        imgSrc={require("../../static/project3.svg")}
        title="Personal Portfolio Website"
        textAlign="right"
      >
        I began making this personal portfolio website in order to gain more web
        development experience, to learn more about React, and to experiment
        with making a website responsive to different device sizes without
        relying on styling libraries like Bootstrap to handle it for me. The
        main technologies used in this project are JavaScript, React, Gatsby,
        Styled-Components, HTML, and CSS.
      </ProjectContainer>
    </Projects.Container>
  )
}

const Projects = {
  Container: styled.div`
    align-items: center;
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
  `,
  Title: styled.h1`
    color: var(--white);
    font-family: var(--title-font);
    white-space: nowrap;
  `,
  VastViewsLink: styled.a`
    color: var(--light);
    text-decoration: none;
    transition: 500ms ease;

    &:hover {
      color: var(--warm);
    }
  `,
}
