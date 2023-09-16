import React from 'react'
import './ComponentsCss/NavbarCss.css'

export default function Navbar(props) {
  return (
    <>
    <nav className="navbar">
    <a href="/" className="logo">{props.companyName}</a>
    <ul>
      <div><li><a href="/applied">Applied Scholarships</a></li></div>
      <div><li><a href="/userPreferences">Choose scholarship</a></li></div>
    </ul>
    <div id="navRight">
      <button className="navBtn" id="loginBtn">Login</button>
    </div>
    </nav>
    </>
  )
}
