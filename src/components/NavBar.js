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
          <Link>
            <FontAwesomeIcon icon={faHome} />
            <span className="link-text">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link>
            <FontAwesomeIcon icon={faAddressCard} />
            <span className="link-text">About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link>
            <FontAwesomeIcon icon={faProjectDiagram} />
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link>
            <FontAwesomeIcon icon={faGithub} />
            <span className="link-text">GitHub</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link>
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="link-text">LinkedIn</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
