import React from "react"

import NavBar from "../components/NavBar"
import IntroScreen from "../screens/IntroScreen"
import AboutScreen from "../screens/AboutScreen"
import ScreenFlexContainer from "../components/ScreenFlexContainer"

export default function Home() {
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
