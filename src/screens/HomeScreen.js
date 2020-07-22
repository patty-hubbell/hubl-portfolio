import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

export default function HomeScreen() {
  return (
    <Home.Container className="home-screen" id="home">
      <Home.Screen className="screen">
        <Home.Bar>
          <Home.ButtonExit />
          <Home.ButtonMin />
          <Home.ButtonMax />
        </Home.Bar>
        <Home.TextArea>
          <Home.Name className="screen-name">Patrick Hubbell</Home.Name>
          <Home.Title className="screen-title">
            Software Engineering Student at
          </Home.Title>
          <Home.School className="screen-school">
            The Ohio State University
          </Home.School>
          <Home.ConnectButton className="screen-connect-button">
            <a href="https://linkedin.com/in/patrick-hubbell" target="_blank">
              Connect With Me
            </a>
          </Home.ConnectButton>
        </Home.TextArea>
      </Home.Screen>
      <Home.Chevron icon={faChevronDown} />
    </Home.Container>
  )
}

const Button = styled.div`
  border-radius: 50%;
  height: 1rem;
  margin-right: 0.5rem;
  width: 1rem;
`

const Text = styled.p`
  text-align: center;
  margin: 0;
  padding: 0;
`

const Home = {
  Container: styled.div`
    background: rgb(48, 99, 142);
    background: linear-gradient(
      135deg,
      rgba(48, 99, 142, 1) 0%,
      rgba(0, 61, 91, 1) 35%,
      rgba(0, 28, 42, 1) 100%
    );
    display: flex;
    flex-direction: column;
    height: 100vh;
  `,
  Screen: styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
  `,
  Bar: styled.div`
    align-items: center;
    background-color: var(--primary);
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    display: flex;
    min-height: 2rem;
    justify-content: flex-start;
    margin-top: 0;
    width: 100%;
  `,
  ButtonExit: styled(Button)`
    background-color: var(--warm);
    margin-left: 0.5rem;
  `,
  ButtonMin: styled(Button)`
    background-color: var(--light);
  `,
  ButtonMax: styled(Button)`
    background-color: var(--secondary);
  `,
  TextArea: styled.div`
    align-items: center;
    background-color: var(--dark-opaque);
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
  `,
  Name: styled(Text)`
    color: var(--white);
    font-family: var(--title-font);
    white-space: nowrap;
  `,
  Title: styled(Text)`
    color: var(--light);
  `,
  School: styled(Text)`
    color: var(--warm);
  `,
  ConnectButton: styled.div`
    background-color: var(--primary);
    border-radius: 25px;
    display: flex;
    font-family: var(--title-font);
    transition: 200ms ease;
    white-space: nowrap;

    & a {
      color: var(--white);
      margin: auto;
      text-decoration: none;
    }

    &:hover {
      background-color: var(--secondary);
    }
  `,
  Chevron: styled(FontAwesomeIcon)`
    color: var(--white);
    filter: opacity(0.7);
    font-size: 3rem;
    margin: auto;
  `,
}
