import React from "react";
import "./TravelersChoiceBanner.css";

const TravelersChoiceBanner = () => {
  return (
    <section className="tc-banner" style={{ marginBottom: "60px" }}>
      <div className="tc-banner-center">
        <div className="tc-banner-left">
          <img src="TC_badge_yellow.svg" alt="Travelers' Choice Badge" className="tc-badge-img" />
          <div className="tc-banner-text">
            <h2 className="tc-banner-title">Travelers' Choice Awards Best of the Best</h2>
            <p className="tc-banner-desc">Among our top 1% of places, stays, eats, and experiences—decided by you.</p>
            <button className="tc-banner-btn">See the winners</button>
          </div>
        </div>
        <div className="tc-banner-right">
          <img src="tc_cards_2025.png" alt="Travelers exploring destination" className="tc-cards-img" />
        </div>
      </div>
    </section>
  );
};

export default TravelersChoiceBanner;