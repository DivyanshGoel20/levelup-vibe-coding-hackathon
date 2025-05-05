import React, { useState, useRef, useEffect } from "react";
import "./WaysToTourDelhi.css";
import TripHoverPopup from "./TripHoverPopup";

const Arrow = ({ direction }) => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`dream-trip-arrow-svg ${direction}`}
  >
    <circle cx="19" cy="19" r="18" stroke="#bdbdbd" strokeWidth="2" fill="#fff" />
    <polyline
      points={direction === "left" ? "22,13 16,19 22,25" : "16,13 22,19 16,25"}
      fill="none"
      stroke="#222"
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const tourItems = [
  {
    img: "/new-delhi/inclusive-day-trip.jpg",
    label: "LIKELY TO SELL OUT",
    title: "All Inclusive Day Trip to Taj Mahal, Agra Fort and Baby Taj from Delhi by Car",
    rating: 4.9,
    reviews: 2981,
    price: "$46",
    priceLabel: "from $46 per adult",
    // Enhanced popup data
    popupData: {
      cost: "$46",
      ageGroup: "All ages",
      description: "Experience the iconic Taj Mahal, Agra Fort, and Baby Taj in one day with this all-inclusive trip from Delhi. Enjoy a hassle-free experience with a professional guide explaining the historical significance of each monument.",
      duration: "Full day (12 hours)",
      included: ["Hotel pickup & drop-off", "Private air-conditioned car", "Professional guide", "All entrance fees", "Bottled water"]
    }
  },
  {
    img: "/new-delhi/private-sunrise.jpg",
    title: "Private Sunrise Taj Mahal Trip from Delhi all Inclusive",
    rating: 5.0,
    reviews: 1857,
    price: "$58",
    priceLabel: "from $58 per adult",
    popupData: {
      cost: "$58",
      ageGroup: "All ages",
      description: "Witness the breathtaking sunrise view of the Taj Mahal with this private tour from Delhi. Enjoy the monument at its most magical hour before the crowds arrive, with expert narration on its history and architecture.",
      duration: "12 hours",
      included: ["Early morning hotel pickup (around 3 AM)", "Breakfast", "Private transport", "Skip-the-line entry", "Professional photographer"]
    }
  },
  {
    img: "/new-delhi/private-full-day.jpg",
    title: "New Delhi and Old Delhi Private Full-Day Tour (Rated Excellent)",
    rating: 5.0,
    reviews: 2581,
    price: "$29",
    priceLabel: "from $29 per adult",
    popupData: {
      cost: "$29",
      ageGroup: "All ages",
      description: "Explore the contrast between New Delhi and Old Delhi with this highly-rated full-day tour. Visit iconic sites like Jama Masjid, Chandni Chowk, Raj Ghat, Humayun's Tomb, and enjoy a rickshaw ride through the bustling streets.",
      duration: "8 hours",
      included: ["Hotel pickup & drop-off", "Air-conditioned vehicle", "Professional guide", "Rickshaw ride", "Bottled water"]
    }
  },
  {
    img: "/new-delhi/four-day.jpg",
    label: "LIKELY TO SELL OUT",
    title: "Four-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",
    rating: 4.9,
    reviews: 2431,
    price: "$119",
    priceLabel: "from $119 per adult",
    popupData: {
      cost: "$119",
      ageGroup: "All ages",
      description: "Experience the famous Golden Triangle with luxury accommodations over four days. Visit Delhi's historical monuments, Agra's Taj Mahal at sunrise, and Jaipur's majestic forts and palaces with a private guide throughout.",
      duration: "4 days",
      included: ["3 nights in 4-5 star hotels", "Daily breakfast", "Private car with driver", "Professional guides", "All entrance fees"]
    }
  },
  {
    img: "/new-delhi/private-full-day-delhi.jpg",
    label: "LIKELY TO SELL OUT",
    title: "Private Full Day New and Old Delhi City Tour",
    rating: 4.9,
    reviews: 75,
    price: "$33",
    priceLabel: "from $33 per adult",
    popupData: {
      cost: "$33",
      ageGroup: "All ages",
      description: "Get a comprehensive introduction to Delhi with this private guided tour of both the new and old city. Visit UNESCO World Heritage sites, experience local markets, and learn about the rich history spanning over 1,000 years.",
      duration: "8 hours",
      included: ["Hotel pickup & drop-off", "Private guide", "Air-conditioned vehicle", "Monument entrance fees", "Bottled water"]
    }
  },
  {
    img: "/new-delhi/five-day.jpg",
    label: "LIKELY TO SELL OUT",
    title: "5-Day Private Luxury Golden Triangle Tour to Agra and Jaipur From New Delhi",
    rating: 4.9,
    reviews: 73,
    price: "$230",
    priceLabel: "from $230 per adult",
    popupData: {
      cost: "$230",
      ageGroup: "All ages",
      description: "Extended luxury tour covering the Golden Triangle with more time to explore each destination. Enjoy a more relaxed pace with an extra day to discover hidden gems, local culture, and culinary experiences.",
      duration: "5 days",
      included: ["4 nights in luxury hotels", "Daily breakfast and dinner", "Private transportation", "Expert local guides", "All entrance fees", "Cultural performances"]
    }
  }
];

const CARD_COUNT = 4;

// Add swipeable functionality like in DreamNextTrip
function useSwipeable(onSwipeLeft, onSwipeRight, canSwipeLeft, canSwipeRight) {
  const ref = useRef();
  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let x0 = null;
    function handleTouchStart(e) {
      x0 = e.touches[0].clientX;
    }
    function handleTouchEnd(e) {
      if (x0 === null) return;
      let dx = e.changedTouches[0].clientX - x0;
      if (dx < -30 && canSwipeLeft()) onSwipeLeft();
      else if (dx > 30 && canSwipeRight()) onSwipeRight();
      x0 = null;
    }
    node.addEventListener("touchstart", handleTouchStart);
    node.addEventListener("touchend", handleTouchEnd);
    return () => {
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, canSwipeLeft, canSwipeRight]);
  return ref;
}

const WaysToTourDelhi = () => {
  const [index, setIndex] = useState(0);
  const showItems = tourItems.slice(index, index + CARD_COUNT);
  
  // Improved hover popup state management
  const [hoveredCard, setHoveredCard] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
  const cardsRowRef = useRef();
  const popupTimeout = useRef(null);

  const handleLeft = () => {
    if (index === 0) return;
    setIndex(Math.max(0, index - CARD_COUNT));
  };
  
  const handleRight = () => {
    if (index + CARD_COUNT >= tourItems.length) return;
    setIndex(Math.min(tourItems.length - CARD_COUNT, index + CARD_COUNT));
  };

  const swipeRef = useSwipeable(
    handleRight,
    handleLeft,
    () => index + CARD_COUNT < tourItems.length,
    () => index > 0
  );

  // Handle mouse enter with delay to prevent flickering
  const handleMouseEnter = (idx, e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Clear any existing timeout
    if (popupTimeout.current) {
      clearTimeout(popupTimeout.current);
    }
    
    // Set a short delay before showing the popup
    popupTimeout.current = setTimeout(() => {
      setHoveredCard(idx);
      setPopupPosition({
        top: rect.top + window.scrollY,  
        left: rect.right + 20 + window.scrollX // Position it to the right with some padding
      });
      setPopupVisible(true);
    }, 100);
  };

  // Handle mouse leave with delay
  const handleMouseLeave = () => {
    if (popupTimeout.current) {
      clearTimeout(popupTimeout.current);
    }
    
    // Set a short delay before hiding to prevent flickering
    popupTimeout.current = setTimeout(() => {
      setPopupVisible(false);
    }, 100);
  };

  // Handle heart button click
  const handleHeartClick = (e) => {
    e.stopPropagation();
    // Handle heart click functionality
    // Could add save to favorites functionality here
  };

  return (
    <section className="ways-section">
      <div className="ways-center">
        <div className="ways-title">Ways to tour New Delhi</div>
        <div className="ways-subtitle">Book these experiences for a close-up look at New Delhi.</div>
        <div className="ways-cards-row-wrapper" ref={swipeRef}>
          <div className="ways-cards-row" ref={cardsRowRef}>
            {showItems.map((item, idx) => (
              <div
                className="ways-card"
                key={idx}
                style={{ marginRight: idx !== showItems.length - 1 ? 24 : 0 }}
                onMouseEnter={(e) => handleMouseEnter(idx, e)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="ways-img-wrapper">
                  <img src={item.img} alt={item.title} className="ways-img" />
                  {/* Add left arrow on first card if we're not at the beginning */}
                  {idx === 0 && index > 0 && (
                    <button 
                      className="ways-navigation-btn left" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLeft();
                      }}
                    >
                      <Arrow direction="left" />
                    </button>
                  )}
                  {/* Add right arrow on last visible card if there are more items */}
                  {idx === showItems.length - 1 && index + CARD_COUNT < tourItems.length && (
                    <button 
                      className="ways-navigation-btn right" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRight();
                      }}
                    >
                      <Arrow direction="right" />
                    </button>
                  )}
                  <button
                    className="ways-heart-btn"
                    aria-label="Add to favorites"
                    onClick={handleHeartClick}
                  >
                    <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path fill="black" fillRule="evenodd" clipRule="evenodd" d="M3.798 5.166A5.77 5.77 0 0 1 7.72 3.63c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.77 5.77 0 0 1 3.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.598 2.324 1.569 3.662-.03 1.323-.579 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a185 185 0 0 1-3.153 2.785l-.069.059-.489-.569.489.569-.485.416-.488-.412a102 102 0 0 1-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453zm8.19 13.226.472-.412a184 184 0 0 0 2.236-1.988c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.147-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.27 4.27 0 0 0-2.904-1.138c-1.08 0-2.117.407-2.903 1.136l-1.35 1.292-1.375-1.3a4.27 4.27 0 0 0-2.9-1.133 4.27 4.27 0 0 0-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a101 101 0 0 0 7.127 6.742"/>
                    </svg>
                  </button>
                </div>
                {item.label && <div className="ways-card-label">{item.label}</div>}
                <div className="ways-card-title">{item.title}</div>
                <div className="ways-card-rating-row">
                  <span className="ways-rating">
                    <span className="ways-rating-value">{item.rating.toFixed(1)}</span>
                    <span className="ways-rating-balls">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" style={{marginLeft: i === 0 ? 0 : 2}}><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" fill="#04aa6d"/></svg>
                      ))}
                    </span>
                    <span className="ways-rating-reviews" style={{marginLeft: 6}}>
                      ({item.reviews})
                    </span>
                  </span>
                </div>
                <div className="ways-card-price-row">
                  <span className="ways-card-price-label">{item.priceLabel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced popup with more detailed information */}
        {popupVisible && hoveredCard !== null && (
          <TripHoverPopup
            cost={showItems[hoveredCard]?.popupData?.cost}
            rating={showItems[hoveredCard]?.rating}
            ageGroup={showItems[hoveredCard]?.popupData?.ageGroup}
            description={showItems[hoveredCard]?.popupData?.description}
            duration={showItems[hoveredCard]?.popupData?.duration}
            included={showItems[hoveredCard]?.popupData?.included}
            position={popupPosition}
            visible={popupVisible}
          />
        )}
      </div>
    </section>
  );
};

export default WaysToTourDelhi;