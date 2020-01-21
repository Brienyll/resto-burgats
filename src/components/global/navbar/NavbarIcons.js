import React, { Component } from "react"
import styled from "styled-components"
import { styles } from "../../../utils"
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
} from "react-icons/fa"

export default class NavbarIcons extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaInstagram className="icon-instagran-icon" />,
        path: "https://www.instagram.com",
      },
      {
        id: 2,
        icon: <FaTwitter className="icon-twitter-icon" />,
        path: "https://www.twitter.com",
      },
      {
        id: 3,
        icon: <FaFacebookF className="icon-facebook-icon" />,
        path: "https://www.facebook.com",
      },
      {
        id: 4,
        icon: <FaGooglePlusG className="icon-google-icon" />,
        path: "https://www.google.com",
      },
    ],
  }
  render() {
    return (
      <IconWrapper>
        {this.state.icons.map(icon => {
          return (
            <a
              href={icon.path}
              key={icon.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          )
        })}
      </IconWrapper>
    )
  }
}

const IconWrapper = styled.div`
  .icon {
    font-size: 1.3rem;
    cursor: pointer;
    ${styles.transFunction()};
  }
  .facebook-icon {
    color: white;
  }
  .icon:hover {
    color: ${styles.colors.mainYellow};
  }
  display: none;
  @media (min-width: 768px) {
    display: flex;
    width: 10rem;
    justify-content: space-around;
  }
`
