import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const aboutPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p>The story/goal of the FIlosopher.</p>
      
    </Container>
  </Layout>
)

export default aboutPage