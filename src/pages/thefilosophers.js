import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const thefilosophersPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Isaac Towne</h1>
      <p>The next millionaire educator.</p>
      <h1>Brad Freeman</h1>
      <p>The lowly programmer.</p>
      
    </Container>
  </Layout>
)

export default thefilosophersPage