import React from "react"
import styled from "styled-components"

import TransitionImage from "../components/TransitionImage"

export default function AboutScreen() {
  return (
    <About.Container className="about-screen" id="about">
      <About.BarTop className="about-bar-top" />
      <About.TextContainer className="about-text-container">
        <About.ImageAndTitle>
          <About.Title className="about-title">About Me</About.Title>
          <TransitionImage />
        </About.ImageAndTitle>
        <p className="about-text">
          Hello! I’m Patrick Hubbell and I’m a senior Computer and Information
          Science student at The Ohio State University. Through my major
          specialization of Software Engineering, I have gained experience with
          technologies such as{" "}
          <About.Tech>
            Java, C, Ruby on Rails, JavaScript, React, React Native, Node,
            SQLite, HTML, CSS, and Git.
          </About.Tech>
        </p>
        <p className="about-text">
          I had my first internship experience in my hometown of Akron, Ohio as
          an IT Automation and Integration Intern with the Goodyear Tire and
          Rubber Company. As an A&I Intern, I used technologies such as
          PowerShell and UiPath Studio to deliver automation scripts and
          construct a Robotic Process Automation prototype.
        </p>
        <p className="about-text">
          I have recently been taking online classes and working on personal
          projects to learn about technologies that I would not have learned in
          the classroom at Ohio State.
        </p>
        <p className="about-text">
          Some of my hobbies and passions are playing soccer, snowboarding,
          bicycling, listening to podcasts, and spending time with my dog,
          Lucky.
        </p>
      </About.TextContainer>
      <About.BarBottom className="about-bar-bottom" />
    </About.Container>
  )
}

const Bar = styled.div`
  background: rgb(237, 174, 73);
  background: linear-gradient(
    90deg,
    rgba(237, 174, 73, 1) 0%,
    rgba(0, 121, 140, 1) 70%,
    rgba(48, 99, 142, 1) 100%
  );
  height: 0.4rem;
  width: 90%;
`

const About = {
  Container: styled.div`
    align-items: center;
    background-color: var(--black);
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    position: relative;
  `,
  BarTop: styled(Bar)`
    margin-bottom: 3rem;
  `,
  BarBottom: styled(Bar)`
    margin-top: 3rem;
  `,
  TextContainer: styled.div`
    color: var(--white);
    display: flex;
    flex-direction: column;
    width: 80%;
  `,
  ImageAndTitle: styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
  `,
  Title: styled.h1`
    color: var(--white);
    font-family: var(--title-font);
    margin: 0;
    margin-right: 3rem;
    padding: 0;
    white-space: nowrap;
  `,
  Tech: styled.span`
    color: var(--light);
  `,
}
