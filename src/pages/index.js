import React from "react"

import Layout from "../components/layout"
//import Image from "../components/image"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>The one page philosophy for financial independence</p>
      <h1>The Four Pillars of Wealth</h1>
      <h2>Earn</h2>
      <h2>Save</h2>
      <h2>Invest</h2>
      <h2>Taxes</h2>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Container>
  </Layout>
)

export default IndexPage
