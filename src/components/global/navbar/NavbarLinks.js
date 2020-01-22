import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "home",
      },
      {
        id: 1,
        path: "/menu",
        name: "menu",
      },
      {
        id: 2,
        path: "/about/",
        name: "about",
      },
      {
        id: 3,
        path: "/blog/",
        name: "blog",
      },
      {
        id: 4,
        path: "/pages/",
        name: "pages",
      },
      {
        id: 5,
        path: "/contact/",
        name: "contact",
      },
    ],
  }

  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.path} className="nav-link">
                {link.name}
              </Link>
            </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    font-family: "Paytone One", sans-serif;
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1rem;
      text-decoration: underline;
    }
  }
  height: ${props => (props.open ? "152px" : "0px")};
  overflow: hidden;
  ${styles.transObject};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
