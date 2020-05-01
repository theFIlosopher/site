import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"

const Header = ({ siteTitle, className, headerLinks }) => (
  <header className={className}>
    <Container>
      <h1>
        {/* <Link to="/">{siteTitle}</Link> */}
        {siteTitle}
      </h1>

    <div>
          <nav>
            <ul style={{ display: "flex"}}>
              {headerLinks.map(link => (
                <li
                  key={link.name}
                  style={{
                    listStyleType: `none`,
                    padding: `1rem`,
                  }}
                >
                  <Link style={{ color: `var(--primary-text)` }} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

const StyledHeader = styled(Header)`
  font-family: cinzel;
  color: var(--primary-text);
  display: flex;
`

export default StyledHeader
