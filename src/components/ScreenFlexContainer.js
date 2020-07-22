import React from "react"
import styled from "styled-components"

export default function ScreenFlexContainer({ children }) {
  return <Container>{children}</Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
