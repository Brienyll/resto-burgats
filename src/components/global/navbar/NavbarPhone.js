import React, { Component } from "react"
import styled from "styled-components"

export default class NavbarPhone extends Component {
  render() {
    return (
      <PhoneWrapper>
        <a href="/">+10 367 453 7382</a>
      </PhoneWrapper>
    )
  }
}

const PhoneWrapper = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: rgb(242, 198, 77);
  background: transparent;
  padding: 12px 26px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(242, 198, 77);
  border-radius: 30px;
`
