import React from 'react'
import "../styles/SpecialOffers.css"
import SpecialCard from '../components/SpecialCard.js'

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
            <h1>This Week's Specials</h1>
            <div className="btn-container">
                <button className="btn btn-menu">Online Menu</button>
            </div>
      </div>
      <SpecialCard />
    </div>
  )
}

export default Specials
