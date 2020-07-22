import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProjectContainer({
  children,
  gitHubSrc,
  imgSrc,
  containerStyle,
  textAlign = "right",
  title,
}) {
  return (
    <Project.Container className="project-container" style={containerStyle}>
      {textAlign === "right" && (
        <>
          <img className="project-image" src={imgSrc} />
          <Project.Buffer className="project-buffer" />
        </>
      )}
      <Project.TextContainer>
        <Project.Title className="project-title">{title}</Project.Title>
        <Project.Description className="project-description">
          {children}
        </Project.Description>
        <Project.GitHubButton className="project-github-button">
          <Project.GitHubLink href={gitHubSrc} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ marginRight: "0.5rem" }}
            />
            Check out the source code!
          </Project.GitHubLink>
        </Project.GitHubButton>
      </Project.TextContainer>
      {textAlign === "left" && (
        <>
          <Project.Buffer className="project-buffer" />
          <img className="project-image" src={imgSrc} />
        </>
      )}
    </Project.Container>
  )
}

const Project = {
  Container: styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,
  Buffer: styled.div`
    height: 1rem;
  `,
  TextContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.h1`
    background: linear-gradient(
      90deg,
      rgba(209, 73, 91, 1) 0%,
      rgba(237, 174, 73, 1) 100%
    );
    font-family: var(--title-font);
    margin: 0;
    padding: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  `,
  Description: styled.p`
    color: var(--white);
    font-family: var(--text-font);
  `,
  GitHubButton: styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
  `,
  GitHubLink: styled.a`
    color: var(--warm);
    text-decoration: none;
    transition: 500ms ease;

    &:hover {
      color: var(--light);
    }
  `,
}
