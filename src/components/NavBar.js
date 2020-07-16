import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faHome,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <h1 className="logo">hubl</h1>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-scroll href="#home">
            <FontAwesomeIcon className="icon" icon={faHome} />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-scroll href="#about">
            <FontAwesomeIcon className="icon" icon={faAddressCard} />
            <span className="link-text">About</span>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects/">
            <FontAwesomeIcon className="icon" icon={faProjectDiagram} />
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://github.com/pat-hubbell"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
            <span className="link-text">GitHub</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://linkedin.com/in/patrick-hubbell"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
            <span className="link-text">LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
