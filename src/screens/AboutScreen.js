import React from "react"

import AboutImage from "../components/AboutImage"

export default function AboutScreen() {
  return (
    <div className="about-screen">
      <div className="about-bar-top" />
      <div className="about-image-and-text">
        <AboutImage />
        <div className="about-text-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-text">
            Still it was a square of faint light. They floated in the coffin for
            Armitage’s call. None of that prepared him for the arena, the crowd,
            the tense hush, the towering puppets of light from a half-open
            service hatch framed a heap of discarded fiber optics and the
            amplified breathing of the console in faded pinks and yellows. After
            the postoperative check at the rear of the arcade showed him broken
            lengths of damp chipboard and the dripping chassis of a gutted game
            console.
          </p>
          <p className="about-text">
            Still it was a square of faint light. They floated in the coffin for
            Armitage’s call. None of that prepared him for the arena, the crowd,
            the tense hush, the towering puppets of light from a half-open
            service hatch framed a heap of discarded fiber optics and the
            amplified breathing of the console in faded pinks and yellows. After
            the postoperative check at the rear of the arcade showed him broken
            lengths of damp chipboard and the dripping chassis of a gutted game
            console.
          </p>
        </div>
      </div>
      <div className="about-bar-bottom" />
    </div>
  )
}
