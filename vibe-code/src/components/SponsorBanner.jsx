import React from "react";
import "./SponsorBanner.css";

const SponsorBanner = () => {
  return (
    <section className="sponsor-banner-outer">
      <div className="sponsor-banner-inner">
        <div className="sponsor-banner-img-col">
          <img src="/Cesar.jpg" alt="Woman with dog" className="sponsor-banner-img" />
        </div>
        <div className="sponsor-banner-content-col">
          <div className="sponsor-banner-sponsored">
            <img src="/cesar-logo.jpg" alt="Cesar Logo" className="sponsor-banner-logo" />
            <span className="sponsor-banner-sponsored-label">Sponsored by <a href="#" className="sponsor-banner-link">CESAR®</a></span>
          </div>
          <div className="sponsor-banner-title">It's easier than ever to go together</div>
          <div className="sponsor-banner-desc">
            Travel is better when you can share it with your best friend. Find all the tips, guides, and tools you need to take a dream trip with your dog.
          </div>
          <button className="sponsor-banner-btn">Explore more</button>
        </div>
      </div>
    </section>
  );
};

export default SponsorBanner;
