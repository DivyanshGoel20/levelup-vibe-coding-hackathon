import React, { useState } from "react";
import "./ExploreMore.css";

const exploreItems = [
  {
    img: "/explore/flower.jpg",
    title: "5 flower festivals worth planning a trip around",
  },
  {
    img: "/explore/spring.jpg",
    title: "6 family-friendly European cities for spring break",
  },
  {
    img: "/explore/park.jpg",
    title: "A first timer's guide to Canada's national parks",
  },
];

const ExploreMore = () => {
  const [showHeartPopup, setShowHeartPopup] = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);

  const handleHeartClick = (idx) => {
    setActiveIdx(idx);
    setShowHeartPopup(true);
    // Popup logic will be added later
  };

  return (
    <section className="explore-section">
      <div className="explore-center">
        <div className="explore-title">More to explore</div>
        <div className="explore-cards-row">
          {exploreItems.map((item, idx) => (
            <div className="explore-card" key={item.title}>
              <div className="explore-img-wrapper">
                <img src={item.img} alt={item.title} className="explore-img" />
                <button
                  className="explore-heart-btn"
                  aria-label="Add to favorites"
                  onClick={() => handleHeartClick(idx)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="28"
                    height="28"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      fill="black"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.798 5.166A5.77 5.77 0 0 1 7.72 3.63c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.77 5.77 0 0 1 3.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.598 2.324 1.569 3.662-.03 1.323-.579 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a185 185 0 0 1-3.153 2.785l-.069.059-.489-.569.489.569-.485.416-.488-.412a102 102 0 0 1-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453zm8.19 13.226.472-.412a184 184 0 0 0 2.236-1.988c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.147-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.27 4.27 0 0 0-2.904-1.138c-1.08 0-2.117.407-2.903 1.136l-1.35 1.292-1.375-1.3a4.27 4.27 0 0 0-2.9-1.133 4.27 4.27 0 0 0-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a101 101 0 0 0 7.127 6.742"
                    />
                  </svg>
                </button>



              </div>
              <div className="explore-card-title">{item.title}</div>
            </div>
          ))}
        </div>
        {/* Popup placeholder */}
        {showHeartPopup && (
          <div className="explore-heart-popup">Popup coming soon!</div>
        )}
      </div>
    </section>
  );
};

export default ExploreMore;
