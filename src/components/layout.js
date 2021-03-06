import * as React from 'react'
import { Link } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
            <li className={navLinkItem}>
                <Link to="/" className={navLinkText}>
                    Home
                </Link>
            </li>
            <li className={navLinkItem}>
                <Link to ="/about" className={navLinkText}>
                    About
                </Link>
            </li>
            <li className={navLinkItem}>
            <Link to="/dont" className={navLinkText}>
              Don't click this link...
            </Link>
          </li>
        </ul>
    </nav>
    <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
    </main>
    </div>
  )
  }    
         
export default layout