import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faHome,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

export default function NavBar() {
  return (
    <Nav.Container>
      <Nav.List>
        <Nav.ListItem>
          <Nav.Logo>hubl</Nav.Logo>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.Link href="#home">
            <FontAwesomeIcon className="icon" icon={faHome} />
            <Nav.LinkText className="link-text">Home</Nav.LinkText>
          </Nav.Link>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.Link href="#about">
            <FontAwesomeIcon className="icon" icon={faAddressCard} />
            <Nav.LinkText className="link-text">About</Nav.LinkText>
          </Nav.Link>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.Link href="#">
            <FontAwesomeIcon className="icon" icon={faProjectDiagram} />
            <Nav.LinkText className="link-text">Projects</Nav.LinkText>
          </Nav.Link>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.Link href="https://github.com/pat-hubbell" target="_blank">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <Nav.LinkText className="link-text">GitHub</Nav.LinkText>
          </Nav.Link>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.Link
            href="https://linkedin.com/in/patrick-hubbell"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <Nav.LinkText className="link-text">LinkedIn</Nav.LinkText>
          </Nav.Link>
        </Nav.ListItem>
      </Nav.List>
    </Nav.Container>
  )
}

const Nav = {
  Container: styled.nav`
    background-color: var(--dark);
    width: 5rem;
    height: 100vh;
    position: fixed;
    transition: width 300ms ease;
    z-index: 1;

    &:hover {
      width: 12rem;
    }

    &:hover .link-text {
      opacity: 1;
      transition: 500ms ease-in;
      visibility: visible;
    }
  `,
  List: styled.ul`
    display: flex;
    flex-direction: column;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  ListItem: styled.li`
    width: 100%;

    &:nth-child(5) {
      margin-top: auto;
    }
  `,
  Logo: styled.h1`
    color: var(--white);
    filter: opacity(0.9);
    font-family: "Do Hyeon", sans-serif;
    margin: 1.2rem 1.2rem;
  `,
  Link: styled.a`
    color: var(--white);
    display: flex;
    align-items: center;
    height: 5rem;
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
    transition: 500ms;

    &:hover {
      background-color: var(--dark-hover);
      filter: grayscale(0%) opacity(1);
    }
  `,
  LinkText: styled.span`
    color: var(--light);
    margin: 1rem;
    opacity: 0;
    visibility: hidden;
  `,
}
