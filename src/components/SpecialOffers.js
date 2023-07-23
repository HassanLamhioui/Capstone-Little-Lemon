import React from 'react'
import "../styles/SpecialOffers.css"
import SpecialCard from '../components/SpecialCard.js'

const Specials = () => {
  return (
    <div className="specials-section-container">
      <div className="specials-section-title">
            <h1>Exclusive Deals of the Week</h1>
      </div>
      <SpecialCard />
    </div>
  )
}

export default Specials
