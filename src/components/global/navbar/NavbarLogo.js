import React, { Component } from "react"
import logo from "../../../images/logo.webp"
import { Link } from "gatsby"

export default class NavbarLogo extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img src={logo} alt="Burger Resto" />
        </Link>
      </div>
    )
  }
}
