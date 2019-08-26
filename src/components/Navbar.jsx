import React from 'react'
import { Link } from 'gatsby'


const Navbar = () => (
  <nav className="navbar is-transparent pin-t">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">{/* <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> */}</figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item">What's on this page"</Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/GatsbyCentral/gatsby-starter-wordpress"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="icon">{/* <img src={github} alt="Github" /> */}</span>
        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
