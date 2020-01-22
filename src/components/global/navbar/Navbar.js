import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarLogo from "./NavbarLogo"
import NavbarIcons from "./NavbarIcons"
import NavbarPhone from "./NavbarPhone"
import styled from "styled-components"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  handleNavbar = () => {
    this.setState(() => {
      return {
        navbarOpen: !this.state.navbarOpen,
      }
    })
  }
  render() {
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLinks navbarOpen={this.state.navbarOpen} />
        <NavbarLogo />
        <NavbarIcons />
        <NavbarPhone />
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`
