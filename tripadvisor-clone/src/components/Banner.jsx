import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-outer">
      <div className="banner-inner">
        <img src="/banner.jpg" alt="Banner" className="banner-img" />
        <img src="/TC_badge-2025.png" alt="Travelers' Choice 2025 Badge" className="banner-badge" />
        <div className="banner-content">
          <div className="banner-title">World’s best hotels—chosen by you</div>
          <div className="banner-desc">
            From beachside resorts to the most unique stays. See the top 1% of hotels from Travelers’ Choice Best of the Best and save your faves.
          </div>
          <button className="banner-btn">Reveal winners</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
