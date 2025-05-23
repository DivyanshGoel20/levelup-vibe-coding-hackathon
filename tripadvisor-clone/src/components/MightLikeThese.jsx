import React, { useState, useRef, useEffect } from "react";
import "./MightLikeThese.css";
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

// Updated tour items with popup data
const tourItems = [
    {
        img: "/like-these/same-day.jpg",
        title: "Same Day Taj Mahal, Agra Fort & Baby Taj Tour from Delhi by Car",
        rating: 4.9,
        reviews: "2,791",
        // Added popup data
        popupData: {
            cost: "$57",
            ageGroup: "All ages",
            description: "Experience the majesty of the Taj Mahal, explore historic Agra Fort, and discover the exquisite Baby Taj in a single day.",
            duration: "12 hours",
            included: ["Hotel pickup & drop-off", "Private car", "Guide", "Monument fees"]
        }
    },
    {
        img: "/like-these/full-day.jpg",
        title: "Full Day Old and New Delhi City Tour",
        rating: 4.9,
        reviews: "2,826",
        popupData: {
            cost: "$37",
            ageGroup: "5-85",
            description: "Discover both historic Old Delhi and modern New Delhi in this comprehensive tour featuring iconic landmarks and hidden gems.",
            duration: "8 hours",
            included: ["Air-conditioned vehicle", "Professional guide", "Lunch", "Rickshaw ride"]
        }
    },
    {
        img: "/like-these/indian-food.jpg",
        title: "The Great Indian Food Tour: Old Delhi Food and Heritage Walk",
        rating: 5.0,
        reviews: "1,066",
        hasBadge: true,
        popupData: {
            cost: "$44",
            ageGroup: "10-75",
            description: "Embark on a culinary adventure through Old Delhi's bustling streets, sampling authentic local delicacies with a knowledgeable food guide.",
            duration: "4 hours",
            included: ["7+ food tastings", "Bottled water", "Small group", "Cultural insights"]
        }
    },
    {
        img: "/like-these/top-rated.jpg",
        title: "Taj Mahal Day Tour from Delhi by Superfast Train - TOP RATED TOUR",
        rating: 4.9,
        reviews: "2,752",
        popupData: {
            cost: "$15",
            ageGroup: "12-80",
            description: "Travel comfortably by superfast train to experience the breathtaking Taj Mahal and historic Agra Fort in a single day trip.",
            duration: "14 hours",
            included: ["Round-trip train tickets", "Private transfers", "Guide", "Breakfast & lunch"]
        }
    },
    {
        img: "/like-these/half-day.jpg",
        title: "Half Day Private Delhi City Tour",
        rating: 4.9,
        reviews: "3,944",
        popupData: {
            cost: "$19",
            ageGroup: "All ages",
            description: "Perfect for travelers with limited time, this efficient tour covers Delhi's most significant highlights in just half a day.",
            duration: "4 hours",
            included: ["Hotel pickup & drop-off", "Private guide", "Air-conditioned car"]
        }
    },
    {
        img: "/like-these/inclusive-day.jpg",
        label: "LIKELY TO SELL OUT",
        title: "All Inclusive Day Trip to Taj Mahal, Agra Fort and Baby Taj from Delhi by Car",
        rating: 4.9,
        reviews: "3,18",
        popupData: {
            cost: "$33",
            ageGroup: "6-75",
            description: "Enjoy a worry-free excursion with all expenses covered in this comprehensive day trip to Agra's most magnificent monuments.",
            duration: "12 hours",
            included: ["All entrance fees", "Buffet lunch", "Professional guide", "Luxury vehicle"]
        }
    },
    {
        img: "/like-these/full-day-tour.jpg",
        title: "New Delhi and Old Delhi Private Full-Day Tour (Rated Excellent)",
        rating: 4.9,
        reviews: "1,381",
        popupData: {
            cost: "$29",
            ageGroup: "All ages",
            description: "Explore the contrasting worlds of Old and New Delhi with a knowledgeable guide who brings the city's fascinating history to life.",
            duration: "8 hours",
            included: ["Private tour", "Hotel pickup", "Lunch option", "Monument fees"]
        }
    },
    {
        img: "/like-these/private-sunrise.jpg",
        title: "Private Sunrise Taj Mahal Trip from Delhi all Inclusive",
        rating: 4.9,
        reviews: "1,459",
        popupData: {
            cost: "$88",
            ageGroup: "10-80",
            description: "Witness the magical sunrise at the Taj Mahal and enjoy the monument before the crowds arrive in this exclusive early morning tour.",
            duration: "13 hours",
            included: ["Early morning pickup", "Breakfast", "All entrance fees", "Professional photographer"]
        }
    },
    {
        img: "/like-these/viator-award.jpg",
        title: "Taj Mahal Tour from Delhi by Express Train (Viator Award Winner)",
        rating: 5.0,
        reviews: "2,153",
        popupData: {
            cost: "$120",
            ageGroup: "All ages",
            description: "This award-winning tour provides a comfortable and efficient train journey to see the iconic Taj Mahal and surrounding attractions.",
            duration: "14 hours",
            included: ["VIP train tickets", "Skip-the-line access", "Guided tour", "Meals"]
        }
    },
    {
        img: "/like-these/baby-tour.jpg",
        title: "Sunrise Taj Mahal, Agra Fort & Baby Taj Tour from Delhi by Car",
        rating: 4.9,
        reviews: "1,724",
        popupData: {
            cost: "$57",
            ageGroup: "8-85",
            description: "Experience the magical morning light on the Taj Mahal and continue your journey to Agra's other architectural marvels.",
            duration: "14 hours",
            included: ["Hotel pickup 3 AM", "Breakfast & lunch", "English-speaking guide", "All fees"]
        }
    },
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

const MightLikeThese = () => {
    const [index, setIndex] = useState(0);
    const [badgeLoaded, setBadgeLoaded] = useState(false);
    const [badgePath, setBadgePath] = useState("/TC_badge-2024.jpg");
    const showItems = tourItems.slice(index, index + CARD_COUNT);
    
    // Improved hover popup state management
    const [hoveredCard, setHoveredCard] = useState(null);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });
    const cardsRowRef = useRef();
    const popupTimeout = useRef(null);

    // Check if the badge image exists and test alternative paths
    useEffect(() => {
        const testBadgeExists = (path) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = path;
            });
        };

        const checkBadgeImage = async () => {
            // Try different paths that might work
            const paths = [
                "/TC_badge-2024.png",
                "./TC_badge-2024.png",
                "../TC_badge-2024.png",
                "/assets/TC_badge-2024.png",
                "/images/TC_badge-2024.png",
                "/TC_badge-2024.svg"
            ];
            
            for (const path of paths) {
                const exists = await testBadgeExists(path);
                if (exists) {
                    console.log(`Badge found at: ${path}`);
                    setBadgePath(path);
                    setBadgeLoaded(true);
                    break;
                }
            }
        };
        
        checkBadgeImage();
    }, []);

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

    const [showHeartPopup, setShowHeartPopup] = useState(false);
    const [activeIdx, setActiveIdx] = useState(null);
    const handleHeartClick = (idx, e) => {
        e.stopPropagation(); // Prevent card hover effect
        setActiveIdx(idx);
        setShowHeartPopup(true);
    };

    // Function to check if the current item is the one that needs the badge
    const checkIfNeedsBadge = (item) => {
        return item.hasBadge || 
               item.title.includes("The Great Indian Food Tour") || 
               item.title.includes("Food and Heritage Walk");
    };

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

    return (
        <section className="ways-section">
            <div className="ways-center">
                <div className="ways-title">You Might Like These</div>
                <div className="ways-subtitle">More things to do in New Delhi</div>
                <div className="ways-cards-row-wrapper" ref={swipeRef}>
                    <div className="ways-cards-row" ref={cardsRowRef}>
                        {showItems.map((item, idx) => {
                            const needsBadge = checkIfNeedsBadge(item);
                            return (
                                <div
                                    className="ways-card"
                                    key={item.title + idx}
                                    style={{ 
                                        marginRight: idx !== showItems.length - 1 ? 24 : 0, 
                                        position: 'relative' 
                                    }}
                                    onMouseEnter={(e) => handleMouseEnter(idx, e)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="ways-img-wrapper" style={{ position: 'relative' }}>
                                        <img 
                                            src={item.img} 
                                            alt={item.title} 
                                            className="ways-img" 
                                            style={{ width: 272, height: 272 }} 
                                        />
                                        
                                        {/* Badge - positioned in bottom left corner */}
                                        {needsBadge && (
                                            <div className="tc-badge-on-card">
                                                <img
                                                    src={badgePath}
                                                    alt="Travelers' Choice 2024 Badge"
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'contain',
                                                        zIndex: 101
                                                    }}
                                                    onLoad={() => console.log(`Badge loaded from ${badgePath}`)}
                                                    onError={(e) => {
                                                        console.error(`Failed to load badge from ${badgePath}`);
                                                        // Try a fallback image as last resort
                                                        e.target.src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCA1NCI+PGNpcmNsZSBjeD0iMjciIGN5PSIyNyIgcj0iMjUiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzAwOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PHRleHQgeD0iMjciIHk9IjI3IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIj5UQzwvdGV4dD48L3N2Zz4=";
                                                    }}
                                                />
                                            </div>
                                        )}
                                        
                                        {/* Navigation arrows */}
                                        {idx === 0 && index > 0 && (
                                            <button
                                                className="ways-navigation-btn left"
                                                onClick={handleLeft}
                                            >
                                                <Arrow direction="left" />
                                            </button>
                                        )}
                                        {idx === showItems.length - 1 && index + CARD_COUNT < tourItems.length && (
                                            <button
                                                className="ways-navigation-btn right"
                                                onClick={handleRight}
                                            >
                                                <Arrow direction="right" />
                                            </button>
                                        )}
                                        
                                        <button
                                            className="ways-heart-btn"
                                            aria-label="Add to favorites"
                                            onClick={(e) => handleHeartClick(idx, e)}
                                        >
                                            <svg viewBox="0 0 24 24" width="28" height="28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path fill="black" fillRule="evenodd" clipRule="evenodd" d="M3.798 5.166A5.77 5.77 0 0 1 7.72 3.63c1.455 0 2.857.548 3.922 1.536l.005.005.341.322.332-.317a5.77 5.77 0 0 1 3.928-1.54c1.458 0 2.862.55 3.928 1.54l.004.004c1.093 1.032 1.598 2.324 1.569 3.662-.03 1.323-.579 2.643-1.5 3.785-.884 1.096-2.85 2.943-4.547 4.478a185 185 0 0 1-3.153 2.785l-.069.059-.489-.569.489.569-.485.416-.488-.412a102 102 0 0 1-7.75-7.288l-.021-.021-.02-.023c-1.725-2.115-2.203-5.32.08-7.453zm8.19 13.226.472-.412a184 184 0 0 0 2.236-1.988c1.72-1.556 3.59-3.32 4.385-4.306.757-.939 1.147-1.948 1.168-2.877.02-.912-.313-1.795-1.097-2.536a4.27 4.27 0 0 0-2.904-1.138c-1.08 0-2.117.407-2.903 1.136l-1.35 1.292-1.375-1.3a4.27 4.27 0 0 0-2.9-1.133 4.27 4.27 0 0 0-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a101 101 0 0 0 7.127 6.742" />
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
                                                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" style={{ marginLeft: i === 0 ? 0 : 2 }}><path d="M 12 0C5.388 0 0 5.388 0 12s5.388 12 12 12 12-5.38 12-12c0-6.612-5.38-12-12-12z" fill="#04aa6d" /></svg>
                                                ))}
                                            </span>
                                            <span className="ways-rating-reviews" style={{ marginLeft: 6 }}>
                                                ({item.reviews})
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                {/* Custom popup with data from the hovered card */}
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

export default MightLikeThese;