import React from "react"

export default function AboutImage() {
  return (
    <div className="about-image">
      <img className="about-real-pic" src={require("../assets/profile.jpg")} />
      <img
        className="about-cartoon-pic"
        src={require("../assets/cartoon-profile.png")}
      />
    </div>
  )
}
