import React from "react"
import { Link } from "gatsby"
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
    <Nav>
      <List>
        <ListItem>
          <Logo>hubl</Logo>
        </ListItem>
        <ListItem>
          <NavLink href="#home">
            <FontAwesomeIcon className="icon" icon={faHome} />
            <NavLinkText className="link-text">Home</NavLinkText>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href="#about">
            <FontAwesomeIcon className="icon" icon={faAddressCard} />
            <NavLinkText className="link-text">About</NavLinkText>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href="#">
            <FontAwesomeIcon className="icon" icon={faProjectDiagram} />
            <NavLinkText className="link-text">Projects</NavLinkText>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href="https://github.com/pat-hubbell" target="_blank">
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <NavLinkText className="link-text">GitHub</NavLinkText>
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            href="https://linkedin.com/in/patrick-hubbell"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <NavLinkText className="link-text">LinkedIn</NavLinkText>
          </NavLink>
        </ListItem>
      </List>
    </Nav>
  )
}

const Nav = styled.nav`
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
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`

const ListItem = styled.li`
  width: 100%;

  &:nth-child(5) {
    margin-top: auto;
  }
`

const Logo = styled.h1`
  color: var(--white);
  filter: opacity(0.9);
  font-family: "Do Hyeon", sans-serif;
  margin: 1.2rem 1.2rem;
`

const NavLink = styled.a`
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
`

const NavLinkText = styled.span`
  color: var(--light);
  margin: 1rem;
  opacity: 0;
  visibility: hidden;
`
