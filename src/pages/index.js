import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { GiHamburger } from "react-icons/gi"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>
      <GiHamburger />
    </h3>
  </Layout>
)

export default IndexPage
