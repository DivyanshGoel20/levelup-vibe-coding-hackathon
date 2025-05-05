import React from "react";
import "./TripHoverPopup.css";

const TripHoverPopup = ({ 
  cost, 
  rating, 
  ageGroup, 
  description, 
  duration, 
  included = [], 
  position, 
  visible 
}) => {
  if (!visible) return null;

  return (
    <div 
      className="trip-hover-popup" 
      style={{ 
        top: position.top, 
        left: position.left,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none"
      }}
    >
      <div className="trip-hover-content">
        {/* Cost Section */}
        <div className="trip-hover-section">
          <h4>Cost per person</h4>
          <p className="trip-hover-price">{cost}</p>
        </div>
        
        {/* Duration Section */}
        <div className="trip-hover-section">
          <h4>Duration</h4>
          <p>{duration}</p>
        </div>
        
        {/* Rating Section */}
        <div className="trip-hover-section">
          <h4>Rating</h4>
          <div className="trip-hover-rating">
            <span className="rating-number">{rating.toFixed(1)}</span>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24">
                  <path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" fill="#04aa6d" />
                </svg>
              ))}
            </div>
          </div>
        </div>
        
        {/* Age Group Section */}
        <div className="trip-hover-section">
          <h4>Recommended age</h4>
          <p>{ageGroup}</p>
        </div>
        
        {/* Description Section */}
        <div className="trip-hover-section">
          <h4>About this tour</h4>
          <p className="trip-hover-description">{description}</p>
        </div>
        
        {/* Included Items Section - new section for custom items */}
        {included && included.length > 0 && (
          <div className="trip-hover-section">
            <h4>What's included</h4>
            <ul className="trip-hover-included-list">
              {included.map((item, idx) => (
                <li key={idx} className="trip-hover-included-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" style={{ marginRight: 6 }}>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="#04aa6d" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Book Now Button */}
        <button className="trip-hover-book-btn">
          Book Now
        </button>
      </div>
      
      {/* Arrow pointing to the card */}
      <div 
        className="trip-hover-arrow"
        style={{
          position: "absolute",
          left: -10,
          top: 20,
          width: 0,
          height: 0,
          borderTop: "10px solid transparent",
          borderBottom: "10px solid transparent",
          borderRight: "10px solid white"
        }}
      />
    </div>
  );
};

export default TripHoverPopup;