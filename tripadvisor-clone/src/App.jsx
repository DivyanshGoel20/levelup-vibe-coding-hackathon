import { useState } from 'react'
import Navbar from './components/Navbar';
import WhereTo from './components/WhereTo';
import ExploreMore from "./components/ExploreMore";
import DreamNextTrip from './components/DreamNextTrip';
import TravelersChoiceBanner from './components/TravelersChoiceBanner';
import Footer from './components/Footer';
import WaysToTourDelhi from "./components/WaysToTourDelhi";
import MightLikeThese from "./components/MightLikeThese";
import TopHotels from "./components/TopHotels";
import SponsorBanner from "./components/SponsorBanner";
import Banner from "./components/Banner";
import GlobeExplorer from "./components/GlobeExplorer";
import './App.css'

function App() {
  return (
    <div className="app-main-bg">
      <div className="main-content-container">
        <Navbar />
        <WhereTo />
        <GlobeExplorer />
        <Banner />
        <TopHotels />
        <SponsorBanner />
        <MightLikeThese />
        <WaysToTourDelhi />
        <div style={{marginBottom: '60px'}}></div>
        <ExploreMore />
        <DreamNextTrip />
        <TravelersChoiceBanner />
        <Footer />
      </div>
    </div>
  )
}

export default App
