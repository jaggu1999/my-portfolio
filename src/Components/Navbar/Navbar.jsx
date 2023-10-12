import React from 'react'
import "./Navbar.css"
import Logo from '../../Assets/Images/logo.svg';

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-logo">
        <img src={Logo} alt='Jagadeesh' />
      </div>
      <div className="n-contents">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Resume</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar