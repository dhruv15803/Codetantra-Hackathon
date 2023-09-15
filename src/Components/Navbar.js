import React from 'react'
import './ComponentsCss.css/NavbarCss.css'

export default function Navbar() {
  return (
    <>
    <nav id="navbar">
        <div id="navLeft">
            CompanyName
        </div>
        <ul>
            <div><li><a href="/">Home</a></li></div>
            <div><li><a href="/">About</a></li></div>
            <div><li><a href="/">Contact us</a></li></div>
            <div><li><a href="/">Services</a></li></div>
        </ul>
        <div id="navRight">
            <button className="navBtn">Login</button>
        </div>
    </nav>
    </>
  )
}
