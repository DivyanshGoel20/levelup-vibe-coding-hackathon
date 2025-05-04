import { useState } from 'react'
import Navbar from './components/Navbar';
import WhereTo from './components/WhereTo';
import ExploreMore from "./components/ExploreMore";
import DreamNextTrip from './components/DreamNextTrip';
import TravelersChoiceBanner from './components/TravelersChoiceBanner';
import Footer from './components/Footer';
import WaysToTourDelhi from "./components/WaysToTourDelhi";
import MightLikeThese from "./components/MightLikeThese";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <WhereTo />
      <MightLikeThese />
      <WaysToTourDelhi />
      <div style={{marginBottom: '60px'}}></div>
      <ExploreMore />
      <DreamNextTrip />
      <TravelersChoiceBanner />
      <Footer />
    </>
  )
}

export default App
