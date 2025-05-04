import React, { useState } from "react";
import "./WhereTo.css";

const options = [
  { label: "Search All", icon: "\uD83C\uDFE0" },
  { label: "Hotels", icon: "\uD83C\uDFE8" },
  { label: "Things to Do", icon: "\uD83D\uDCCD" },
  { label: "Restaurants", icon: "\uD83C\uDF74" },
  { label: "Flights", icon: "\u2708\uFE0F" },
  { label: "Vacation Rentals", icon: "\uD83C\uDFE1" }
];

const headings = [
  "Where to?",
  "Where to stay?",
  "What to do?",
  "Where to eat?",
  "Where to fly?",
  "Where to rent?"
];

const placeholders = [
  "Places to go, things to do, hotels...",
  "Search for hotels...",
  "Search for activities...",
  "Search for restaurants...",
  "Search for flights...",
  "Search for rentals..."
];

const WhereTo = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="where-to-wrapper">
      <h1 className="where-to-heading">{headings[selected]}</h1>
      <div className="where-to-options">
        {options.map((opt, idx) => (
          <button
            key={opt.label}
            className={`where-to-option${selected === idx ? " selected" : ""}`}
            onClick={() => setSelected(idx)}
          >
            <span className="where-to-icon">{opt.icon}</span> {opt.label}
            <div className="where-to-underline" />
          </button>
        ))}
      </div>
      <div className="where-to-searchbar">
        <input
          type="text"
          className="where-to-search-input"
          placeholder={placeholders[selected]}
        />
        <button className="where-to-search-btn">Search</button>
      </div>
    </div>
  );
};

export default WhereTo;
