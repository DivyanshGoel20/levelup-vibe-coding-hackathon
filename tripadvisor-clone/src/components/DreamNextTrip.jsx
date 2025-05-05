import React, { useState, useRef } from "react";
import "./DreamNextTrip.css";

const indiaTrips = [
  { label: "Rishikesh, India", img: "/india/rishikesh.jpg" },
  { label: "Mussoorie, India", img: "/india/mussoorie.jpg" },
  { label: "Dehradun, India", img: "/india/dehradun.jpg" },
  { label: "Jim Corbett National Park, India", img: "/india/corbett.jpg" },
  { label: "Vrindavan, India", img: "/india/vrindavan.jpg" },
  { label: "Agra, India", img: "/india/agra.jpg" },
  { label: "Tapovan, India", img: "/india/tapovan.jpg" },
  { label: "Ramnagar, India", img: "/india/ramnagar.jpg" },
  { label: "Pushkar, India", img: "/india/pushkar-lake.jpg" },
];

const destinations = [
  { label: "Rome, Italy", img: "/destinations/rome.jpg" },
  { label: "Paris, France", img: "/destinations/paris.jpg" },
  { label: "Las Vegas, NV", img: "/destinations/vegas.jpg" },
  { label: "Reykjavik, Iceland", img: "/destinations/iceland.jpg" },
  { label: "London, UK", img: "/destinations/london.jpg" },
  { label: "Florence, Italy", img: "/destinations/florence.jpg" },
  { label: "New York City, NY", img: "/destinations/nyc.jpg" },
  { label: "Barcelona, Spain", img: "/destinations/barcelona.jpg" },
  { label: "Dubai, United Arab Emirates", img: "/destinations/dubai-aquarium-underwater.jpg" },
  { label: "Queenstown, New Zealand", img: "/destinations/queenstown.jpg" }
];

const CARD_COUNT = 4;

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

const DreamNextTrip = () => {
  const [indiaIndex, setIndiaIndex] = useState(0);
  const [destIndex, setDestIndex] = useState(0);

  const showIndia = indiaTrips.slice(indiaIndex, indiaIndex + CARD_COUNT);
  const showDest = destinations.slice(destIndex, destIndex + CARD_COUNT);

  const handleIndiaLeft = () => {
    if (indiaIndex === 0) return;
    setIndiaIndex(Math.max(0, indiaIndex - CARD_COUNT));
  };
  const handleIndiaRight = () => {
    if (indiaIndex + CARD_COUNT >= indiaTrips.length) return;
    setIndiaIndex(Math.min(indiaTrips.length - CARD_COUNT, indiaIndex + CARD_COUNT));
  };

  const handleDestLeft = () => {
    if (destIndex === 0) return;
    setDestIndex(Math.max(0, destIndex - CARD_COUNT));
  };
  const handleDestRight = () => {
    if (destIndex + CARD_COUNT >= destinations.length) return;
    setDestIndex(Math.min(destinations.length - CARD_COUNT, destIndex + CARD_COUNT));
  };

  const indiaSwipeRef = useSwipeable(
    handleIndiaRight,
    handleIndiaLeft,
    () => indiaIndex + CARD_COUNT < indiaTrips.length,
    () => indiaIndex > 0
  );
  const destSwipeRef = useSwipeable(
    handleDestRight,
    handleDestLeft,
    () => destIndex + CARD_COUNT < destinations.length,
    () => destIndex > 0
  );

  return (
    <section className="dream-trip-section" style={{ marginTop: '60px', marginBottom: '60px' }}>
      <div className="dream-trip-center">
        <h3
          className="dream-trip-title dream-trip-title-left"
          style={{ fontSize: '24px', textAlign: 'left', alignSelf: 'flex-start' }}
        >
          Dream Your Next Trip
        </h3>

        {/* Weekend getaways from New Delhi */}
        <div className="dream-trip-group">
          <div className="dream-trip-label" style={{ fontSize: '18px' }}>
            Weekend getaways from New Delhi
          </div>
          <div className="dream-trip-cards-row-wrapper">
            <div className="dream-trip-cards-row" ref={indiaSwipeRef}>
              {showIndia.map((item, idx) => (
                <div
                  key={item.label}
                  className="dream-trip-card"
                  style={{ marginRight: idx !== showIndia.length - 1 ? 24 : 0 }}
                >
                  <div className="dream-trip-img-wrapper" style={{ position: 'relative' }}>
                    <img src={item.img} alt={item.label} className="dream-trip-img" />
                    {idx === 0 && indiaIndex > 0 && (
                      <button className="dream-trip-arrow left" onClick={handleIndiaLeft}>
                        <Arrow direction="left" />
                      </button>
                    )}
                    {idx === showIndia.length - 1 && indiaIndex + CARD_COUNT < indiaTrips.length && (
                      <button className="dream-trip-arrow right" onClick={handleIndiaRight}>
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

        {/* Top destinations for your next vacation */}
        <div className="dream-trip-group">
          <div className="dream-trip-label" style={{ fontSize: '18px' }}>
            Top destinations for your next vacation
          </div>
          <div className="dream-trip-cards-row-wrapper">
            <div className="dream-trip-cards-row" ref={destSwipeRef}>
              {showDest.map((item, idx) => (
                <div
                  key={item.label}
                  className="dream-trip-card"
                  style={{ marginRight: idx !== showDest.length - 1 ? 24 : 0 }}
                >
                  <div className="dream-trip-img-wrapper" style={{ position: 'relative' }}>
                    <img src={item.img} alt={item.label} className="dream-trip-img" />
                    {idx === 0 && destIndex > 0 && (
                      <button className="dream-trip-arrow left" onClick={handleDestLeft}>
                        <Arrow direction="left" />
                      </button>
                    )}
                    {idx === showDest.length - 1 && destIndex + CARD_COUNT < destinations.length && (
                      <button className="dream-trip-arrow right" onClick={handleDestRight}>
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
      </div>
    </section>
  );
};


export default DreamNextTrip;
