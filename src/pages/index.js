import React from "react"

import NavBar from "../components/NavBar"

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
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
      </main>
    </>
  )
}
