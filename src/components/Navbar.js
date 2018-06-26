import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          This is us
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
)

export default Navbar
