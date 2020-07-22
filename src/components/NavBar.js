import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faHome,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"

export default function NavBar() {
  return (
    <Nav.Container>
      <Nav.List>
        <Nav.ListItem>
          <Nav.Logo>hubl</Nav.Logo>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Nav.Icon icon={faHome} />
            <Nav.LinkText className="link-text">Home</Nav.LinkText>
          </Nav.ScrollLink>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Nav.Icon icon={faAddressCard} />
            <Nav.LinkText className="link-text">About</Nav.LinkText>
          </Nav.ScrollLink>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Nav.Icon icon={faProjectDiagram} />
            <Nav.LinkText className="link-text">Projects</Nav.LinkText>
          </Nav.ScrollLink>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.Link href="https://github.com/pat-hubbell" target="_blank">
            <Nav.Icon icon={faGithub} />
            <Nav.LinkText className="link-text">GitHub</Nav.LinkText>
          </Nav.Link>
        </Nav.ListItem>
        <Nav.ListItem>
          <Nav.Link
            href="https://linkedin.com/in/patrick-hubbell"
            target="_blank"
          >
            <Nav.Icon icon={faLinkedin} />
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
  ScrollLink: styled(Link)`
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
  Icon: styled(FontAwesomeIcon)`
    color: var(--light);
    font-size: 1.5rem;
    min-width: 2rem;
    margin: 0 1.5rem;
  `,
  LinkText: styled.span`
    color: var(--light);
    margin: 1rem;
    opacity: 0;
    visibility: hidden;
  `,
}
