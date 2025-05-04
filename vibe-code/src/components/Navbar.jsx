import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  {
    label: "Discover",
    dropdown: ["Travelers' Choice", "Travel Stories"]
  },
  { label: "Trips", dropdown: ["View my trips", "Start a new trip", "Create trip with AI"] },
  { label: "Review", dropdown: ["Write a review", "Post photos", "Add a place"] },
  { label: "More", dropdown: ["Cruises", "Rental Cars", "Forums"] }
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    if (activeDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <a href="#" className="navbar-link">
            <img src="/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="Tripadvisor Logo" className="navbar-logo" />
          </a>
        </div>
        <div className="navbar-center">
          {navLinks.map((link, idx) => (
            <div
              key={link.label}
              className="navbar-link-wrapper"
              ref={idx === 0 ? dropdownRef : null}
            >
              <button
                className={`navbar-link-btn${activeDropdown === idx ? " active" : ""}`}
                onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
              >
                {link.label}
              </button>
              {link.dropdown.length > 0 && activeDropdown === idx && (
                <div className="navbar-dropdown navbar-dropdown-pointer">
                  {link.dropdown.map((item) => (
                    <div className="navbar-dropdown-item" key={item}>{item}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="navbar-right">
          <button className="navbar-currency-btn">
            <span className="navbar-globe">🌐 | </span> USD
          </button>
          <button className="navbar-signin">Sign in</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
