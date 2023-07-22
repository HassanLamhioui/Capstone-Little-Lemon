import React from 'react';
import Header from '../components/Header.js';
import HeroSection from '../components/HeroSection.js';
import SpecialOffers from '../components/SpecialOffers.js';
import Footer from '../components/Footer.js';

const HomePage = () => {
  return (
    <>
      <Header/>
      <HeroSection />
      <SpecialOffers />
      <Footer />
    </>
  )
}

export default HomePage
