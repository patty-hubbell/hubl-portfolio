import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export default function IntroScreen() {
  return (
    <div className="intro-screen" id="home">
      <div className="screen">
        <div className="screen-bar">
          <span className="button-exit" />
          <span className="button-min" />
          <span className="button-max" />
        </div>
        <div className="screen-text-area">
          <p className="screen-name">Patrick Hubbell</p>
          <p className="screen-title">Software Engineering Student at</p>
          <p className="screen-school">The Ohio State University</p>
          <div className="screen-connect-button">
            <a href="https://linkedin.com/in/patrick-hubbell" target="_blank">
              Connect With Me
            </a>
          </div>
        </div>
      </div>
      <FontAwesomeIcon className="chevron-down" icon={faChevronDown} />
    </div>
  )
}
