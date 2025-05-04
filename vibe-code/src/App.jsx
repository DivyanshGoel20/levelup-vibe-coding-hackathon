import { useState } from 'react'
import Navbar from './components/Navbar';
import WhereTo from './components/WhereTo';
import ExploreMore from "./components/ExploreMore";
import DreamNextTrip from './components/DreamNextTrip';
import TravelersChoiceBanner from './components/TravelersChoiceBanner';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <WhereTo />
      <ExploreMore />
      <DreamNextTrip />
      <TravelersChoiceBanner />
      <Footer />
    </>
  )
}

export default App
