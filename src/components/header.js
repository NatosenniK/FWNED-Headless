import * as React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "./darkmode-toggle"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `var(--font-xl)`,
        textDecoration: `none`,
        fontFamily: "Changa One",
        fontWeight: "bold"
      }}
    >
      {siteTitle}
    </Link>
    <DarkModeToggle />
    
  </header>
)

export default Header
