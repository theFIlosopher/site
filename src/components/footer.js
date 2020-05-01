import React from "react"
import styled from "styled-components"
import { Container } from "./layoutComponents"
import { Link } from "gatsby"

const Footer = ({ className, footerLinks }) => (
  <footer className={className}>
    <Container>
    <div>
          <nav>
            <ul style={{ display: "flex"}}>
              {footerLinks.map(link => (
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
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </Container>
  </footer>
)

const StyledFooter = styled(Footer)`
  color: var(--primary-text);
  font-family: cinzel;
`

export default StyledFooter
