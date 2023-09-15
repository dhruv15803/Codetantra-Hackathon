import React from 'react'
import './ComponentsCss.css/NavbarCss.css'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar">
    <label className="navbar-toggle" id="js-navbar-toggle" for="chkToggle">
            <i className="fa fa-bars"></i>
        </label>
    <a href="/" className="logo">{props.companyName}</a>
    <input type="checkbox" id="chkToggle"></input>
    <ul className="main-nav" id="js-menu">
      <li>
        <a href="/" className="nav-links">Home</a>
      </li>
      <li>
        <a href="/" className="nav-links">About</a>
      </li>
      <li>
        <a href="/" className="nav-links">Testimonials</a>
      </li>
      <li>
        <a href="/" className="nav-links">Contact Us</a>
      </li>
      <li>
        <a href="/" className="nav-links">Profile</a>
      </li>
    </ul>
  </nav>
    </>
  )
}
