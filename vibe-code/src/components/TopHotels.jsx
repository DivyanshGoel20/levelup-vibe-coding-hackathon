import React, { useState, useRef, useEffect } from "react";
import "./TopHotels.css";

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

const destinations = [
    { label: "World", img: "/top-hotels/world.jpg" },
    { label: "Luxury", img: "/top-hotels/luxury.jpg" },
    { label: "Family-Friendly", img: "/top-hotels/family-friendly.jpg" },
    { label: "One of a Kind", img: "/top-hotels/one-of-a-kind.jpg" },
    { label: "All-Inclusive", img: "/top-hotels/all-inclusive.jpg" },
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

const TopHotels = () => {
    const [destIndex, setDestIndex] = useState(0);
  
    const showDest = destinations.slice(destIndex, destIndex + CARD_COUNT);
  
    const handleDestLeft = () => {
      if (destIndex === 0) return;
      setDestIndex(Math.max(0, destIndex - CARD_COUNT));
    };
  
    const handleDestRight = () => {
      if (destIndex + CARD_COUNT >= destinations.length) return;
      setDestIndex(Math.min(destinations.length - CARD_COUNT, destIndex + CARD_COUNT));
    };
  
    const destSwipeRef = useSwipeable(
      handleDestRight,
      handleDestLeft,
      () => destIndex + CARD_COUNT < destinations.length,
      () => destIndex > 0
    );
  
    return (
      <section className="ways-section" style={{ marginTop: '60px', marginBottom: '60px' }}>
        <div className="ways-center">
          <div className="ways-title" style={{ fontSize: '24px', textAlign: 'left' }}>
            Stay at the world’s top hotels
          </div>
          <div className="ways-subtitle" style={{ fontSize: '18px', marginBottom: '20px' }}>
            2025’s Travelers’ Choice Awards Best of the Best Hotels
          </div>
          <div className="ways-cards-row-wrapper">
            <div className="ways-cards-row" ref={destSwipeRef}>
              {showDest.map((item, idx) => (
                <div
                  key={item.label}
                  className="ways-card"
                  style={{ marginRight: idx !== showDest.length - 1 ? 24 : 0 }}
                >
                  <div className="ways-img-wrapper">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="ways-img"
                      style={{ width: 272, height: 272 }}
                    />
  
                    {idx === 0 && destIndex > 0 && (
                      <button className="ways-navigation-btn left" onClick={handleDestLeft}>
                        <Arrow direction="left" />
                      </button>
                    )}
                    {idx === showDest.length - 1 && destIndex + CARD_COUNT < destinations.length && (
                      <button className="ways-navigation-btn right" onClick={handleDestRight}>
                        <Arrow direction="right" />
                      </button>
                    )}
                  </div>
                  <div className="dream-trip-card-label">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

export default TopHotels;