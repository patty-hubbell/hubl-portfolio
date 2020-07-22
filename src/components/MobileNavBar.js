import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faBars,
  faHome,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"
import { Link, animateScroll as scroll } from "react-scroll"

const handleClick = () => {
  var links = document.getElementById("links")

  if (links.style.visibility === "visible") {
    links.style.opacity = "0"
    links.style.visibility = "hidden"
  } else {
    links.style.visibility = "visible"
    links.style.opacity = "1"
  }
}

export default function MobileNavBar() {
  return (
    <MobileNav.Container>
      <MobileNav.Logo>hubl</MobileNav.Logo>
      <MobileNav.Button onClick={handleClick}>
        <MobileNav.Hamburger icon={faBars} />
      </MobileNav.Button>
      <MobileNav.List id="links">
        <MobileNav.ListItem>
          <MobileNav.ScrollLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <MobileNav.Icon icon={faHome} />
            <MobileNav.LinkText className="link-text">Home</MobileNav.LinkText>
          </MobileNav.ScrollLink>
        </MobileNav.ListItem>
        <MobileNav.ListItem>
          <MobileNav.ScrollLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            <MobileNav.Icon icon={faAddressCard} />
            <MobileNav.LinkText className="link-text">About</MobileNav.LinkText>
          </MobileNav.ScrollLink>
        </MobileNav.ListItem>
        <MobileNav.ListItem>
          <MobileNav.ScrollLink
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            <MobileNav.Icon icon={faProjectDiagram} />
            <MobileNav.LinkText className="link-text">
              Projects
            </MobileNav.LinkText>
          </MobileNav.ScrollLink>
        </MobileNav.ListItem>
        <MobileNav.ListItem>
          <MobileNav.Link href="https://github.com/pat-hubbell" target="_blank">
            <MobileNav.Icon icon={faGithub} />
            <MobileNav.LinkText className="link-text">
              GitHub
            </MobileNav.LinkText>
          </MobileNav.Link>
        </MobileNav.ListItem>
        <MobileNav.ListItem>
          <MobileNav.Link
            href="https://linkedin.com/in/patrick-hubbell"
            target="_blank"
          >
            <MobileNav.Icon icon={faLinkedin} />
            <MobileNav.LinkText className="link-text">
              LinkedIn
            </MobileNav.LinkText>
          </MobileNav.Link>
        </MobileNav.ListItem>
      </MobileNav.List>
    </MobileNav.Container>
  )
}

const MobileNav = {
  Container: styled.div`
    align-items: center;
    background-color: var(--dark);
    bottom: 0;
    display: flex;
    height: 3rem;
    justify-content: space-between;
    position: fixed;
    width: 100vw;
    z-index: 1;
  `,
  Logo: styled.h1`
    color: var(--white);
    filter: opacity(0.9);
    font-family: "Do Hyeon", sans-serif;
    margin-left: 1.5rem;
  `,
  Button: styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    filter: opacity(0.9);
    height: 3rem;
    margin-right: 1.5rem;
    outline: none;
    width: 3rem;
  `,
  Hamburger: styled(FontAwesomeIcon)`
    color: var(--white);
    font-size: 1.5rem;
  `,
  List: styled.ul`
    background-color: var(--dark);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    bottom: 3rem;
    list-style: none;
    margin: 0;
    opacity: 0;
    padding: 0;
    position: absolute;
    right: 0;
    transition: 500ms ease;
    visibility: hidden;
    z-index: 1;
  `,
  ListItem: styled.li`
    padding: 1.5rem;
  `,
  Link: styled.a`
    color: var(--white);
    text-decoration: none;
  `,
  ScrollLink: styled(Link)`
    color: var(--white);
    text-decoration: none;
  `,
  Icon: styled(FontAwesomeIcon)`
    color: var(--white);
    font-size: 1.5rem;
  `,
  LinkText: styled.span`
    margin-left: 1.5rem;
  `,
}
