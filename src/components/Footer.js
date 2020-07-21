import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <Foot.Container className="footer">
      <Foot.Bar />
      <Foot.Text>Patrick Hubbell 2020</Foot.Text>
      <Foot.Contact>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ filter: "opacity(0.5)", marginRight: "0.5rem" }}
        />
        <Foot.Text>hubbell.64@osu.edu</Foot.Text>
      </Foot.Contact>
    </Foot.Container>
  )
}

const Foot = {
  Container: styled.div`
    align-items: center;
    background-color: var(--black);
    color: var(--white);
    display: flex;
    flex-direction: column;
    height: 7rem;
  `,
  Bar: styled.div`
    background-color: var(--dark);
    height: 0.1rem;
    margin-bottom: 1.7rem;
    width: 90%;
  `,
  Text: styled.p`
    filter: opacity(0.5);
    margin: 0;
    margin-bottom: 0.8rem;
    padding: 0;
  `,
  Contact: styled.div`
    display: flex;
  `,
}
