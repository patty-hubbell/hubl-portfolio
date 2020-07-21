import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProjectContainer({
  children,
  gitHubSrc,
  imgSrc,
  imgStyle,
  containerStyle,
  textAlign = "right",
  title,
}) {
  return (
    <Project.Container style={containerStyle}>
      {textAlign === "right" && <img src={imgSrc} style={imgStyle} />}
      <Project.TextContainer>
        <Project.Title>{title}</Project.Title>
        <Project.Description>{children}</Project.Description>
        <Project.GitHubButton>
          <Project.GitHubLink href={gitHubSrc} target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ fontSize: "1.2rem", marginRight: "0.5rem" }}
            />
            Check out the source code!
          </Project.GitHubLink>
        </Project.GitHubButton>
      </Project.TextContainer>
      {textAlign === "left" && <img src={imgSrc} style={imgStyle} />}
    </Project.Container>
  )
}

const Project = {
  Container: styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 2rem;
    width: 80%;
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
    font-size: 2rem;
    margin: 0;
    padding: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
  Description: styled.p`
    color: var(--white);
    font-family: var(--text-font);
    font-size: 1.2rem;
  `,
  GitHubButton: styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 3rem;
    width: 15rem;
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
