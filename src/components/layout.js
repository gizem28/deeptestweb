import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={container}>
      <br/>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          {/* <li className={navLinkItem}>
          <Link to="/categorypage" className={navLinkText}>
              Categories
             </Link> 
          </li> */}
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Models
            </Link>
          </li>
        </ul>
        <hr/>
      </nav>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout