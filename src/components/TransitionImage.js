import React from "react"
import styled from "styled-components"

export default function TransitionImage() {
  return (
    <Image.Container>
      <Image.Real
        className="about-real-pic"
        src={require("../assets/profile.jpg")}
      />
      <Image.Cartoon
        className="about-cartoon-pic"
        src={require("../assets/cartoon-profile.png")}
      />
    </Image.Container>
  )
}

const Image = {
  Container: styled.div`
    position: relative;
    margin-right: 3rem;
  `,
  Real: styled.img`
    border-radius: 50%;
    width: 7rem;
  `,
  Cartoon: styled.img`
    border-radius: 50%;
    filter: opacity(0);
    left: 0;
    position: absolute;
    width: 7rem;
    transition: 500ms ease;

    &:hover {
      filter: opacity(1);
    }
  `,
}
