import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            headerLinks{
              name
              link
            }
            footerLinks{
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <MainWrapper>
          <Header siteTitle={data.site.siteMetadata.title} headerLinks={data.site.siteMetadata.headerLinks} />
          <main>{children}</main>
          <Footer footerLinks={data.site.siteMetadata.footerLinks} />
        </MainWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
