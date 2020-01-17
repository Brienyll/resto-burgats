import React, { Component } from "react"
import NavbarHeader from "./NavbarHeader"
import NavbarLinks from "./NavbarLinks"
import NavbarIcons from "./NavbarIcons"

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavbarHeader />
        <NavbarLinks />
        <NavbarIcons />
      </div>
    )
  }
}
