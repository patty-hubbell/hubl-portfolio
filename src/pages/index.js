import React, { useEffect, useState } from "react"

import NavBar from "../components/NavBar"
import IntroScreen from "../screens/IntroScreen"
import AboutScreen from "../screens/AboutScreen"
import ScreenFlexContainer from "../components/ScreenFlexContainer"
import MobileNavBar from "../components/MobileNavBar"
import ProjectsScreen from "../screens/ProjectsScreen"
import Footer from "../components/Footer"

export default function Home() {
  const [windowDimension, setWindowDimension] = useState(null)

  useEffect(() => {
    setWindowDimension(window.innerWidth)
  }, [])

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const isMobile = windowDimension <= 600

  return (
    <>
      {isMobile ? <MobileNavBar /> : <NavBar />}
      <ScreenFlexContainer>
        <IntroScreen />
        <AboutScreen />
        <ProjectsScreen />
        <Footer />
      </ScreenFlexContainer>
    </>
  )
}
