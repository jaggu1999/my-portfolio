import React from 'react'
import './LandingPage.css'
import Navbar from '../Navbar/Navbar'
import BackgroundImage from '../BackgroundImage/BackgroundImage'

const LandingPage = () => {
  return (
      <div className="landing-page">
        <BackgroundImage/>
        <Navbar/>
    </div>
  )
}

export default LandingPage