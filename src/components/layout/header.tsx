import * as React from "react"
import { Link } from "gatsby"
import DarkModeToggle from "../darkmode-toggle/darkmode-toggle"
import HamburgerMenu from "../hamburger-menu/hamburger-menu"

export default function Header({ siteTitle }: { siteTitle: string }) {

  return (
    <header
      style={{
        margin: `0 auto`,
        padding: `var(--space-4) var(--size-gutter)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `space-between`,
        borderBottom: `solid 1px #fff`
      }}
    >
      <div className="container d-flex justify-content-between align-content-center mx-auto">
        <HamburgerMenu />
          <Link
            to="/"
            style={{
              fontSize: `var(--font-xl)`,
              textDecoration: `none`,
              fontFamily: "Changa One",
              fontWeight: "bold",
              lineHeight: `var(--font-xl)`,
            }}
          >
          {siteTitle}
        </Link>
        <DarkModeToggle />
      </div>
      
      
      
    </header>
  )
  
}
