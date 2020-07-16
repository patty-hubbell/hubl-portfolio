import React from "react"
import SmoothScroll from "smooth-scroll"

import NavBar from "../components/NavBar"
import IntroScreen from "../screens/IntroScreen"
import AboutScreen from "../screens/AboutScreen"
import ScreenFlexContainer from "../components/ScreenFlexContainer"

export default function Home() {
  var scroll = new SmoothScroll('a[href*="#"]', {
    easing: "easeInOutQuad",
    speed: 800,
  })

  return (
    <>
      <NavBar />
      <ScreenFlexContainer>
        <IntroScreen />
        <AboutScreen />
      </ScreenFlexContainer>
    </>
  )
}
