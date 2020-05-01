import React from "react"
import Layout from "../components/layout"
import { Container } from "../components/layoutComponents"
import SEO from "../components/seo"

const contactPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <p><a href="mailto:thefilosopher@protonmail.com">Email the FIlosopher</a></p>
      
    </Container>
  </Layout>
)

export default contactPage