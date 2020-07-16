import React from "react"

import AboutImage from "../components/AboutImage"

export default function AboutScreen() {
  return (
    <div className="about-screen" id="about">
      <div className="about-bar-top" />
      <div className="about-image-and-text">
        <AboutImage />
        <div className="about-text-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            Hello! I’m Patrick Hubbell and I’m a senior Computer and Information
            Science student at The Ohio State University. Through my major
            specialization of Software Engineering, I have gained experience
            with technologies such as{" "}
            <span className="about-tech">
              Java, C, Ruby on Rails, JavaScript, React, React Native, Node,
              SQLite, HTML, CSS, and Git.
            </span>
          </p>
          <p className="about-text">
            I had my first internship experience in my hometown of Akron, Ohio
            as an IT Automation and Integration Intern with the Goodyear Tire
            and Rubber Company. As an A&I Intern, I used technologies such as
            PowerShell and UiPath Studio to deliver automation scripts and
            construct a Robotic Process Automation prototype.
          </p>
          <p className="about-text">
            I have recently been taking online classes and working on personal
            projects to learn about technologies that I would not have learned
            in the classroom at Ohio State.
          </p>
          <p className="about-text">
            Some of my hobbies and passions are playing soccer, snowboarding,
            bicycling, listening to podcasts, and spending time with my dog,
            Lucky.
          </p>
        </div>
      </div>
      <div className="about-bar-bottom" />
    </div>
  )
}
