import React, { useState } from "react";
import "./WhereTo.css";

const options = [
  { label: "Search All", icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2"><path fillRule="evenodd" clipRule="evenodd" d="M11.889 3.542a.25.25 0 0 0-.278 0l-8 5.333a.25.25 0 0 0-.111.208v10.465c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25V9.083a.25.25 0 0 0-.111-.208zm-1.11-1.248a1.75 1.75 0 0 1 1.942 0l8 5.333c.487.325.779.871.779 1.456v10.465a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 19.548V9.083c0-.585.292-1.131.78-1.456z"></path></svg>
  )},
  { label: "Hotels", icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
      <path fillRule="evenodd" clipRule="evenodd" d="M22 12.5V20h-4.5v-3h-11v3H2V6.25a2.25 2.25 0 0 1 4.5 0v6.25zM5 6.25a.75.75 0 0 0-1.5 0V18.5H5v-3h14v3h1.5V14H5z"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 10.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 7h5.6a5.4 5.4 0 0 1 5.4 5.4V14H11zm9.241 4A3.9 3.9 0 0 0 16.6 8.5h-4.1v4h8v-.1a3.9 3.9 0 0 0-.259-1.4"></path>
    </svg>
  )},
  { label: "Things to Do", icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
      <path fillRule="evenodd" clipRule="evenodd" d="M7.56 7.5H3.75a.25.25 0 0 0-.25.25v10c0 .138.112.25.25.25h16.5a.25.25 0 0 0 .25-.25v-10a.25.25 0 0 0-.25-.25h-3.81l-2-2H9.56zM8.94 4h6.12l2 2h3.19c.966 0 1.75.784 1.75 1.75v10a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 17.75v-10C2 6.784 2.784 6 3.75 6h3.19z"></path>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M7.75 12a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"></path>
    </svg>
  )},
  { label: "Restaurants", icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
      <path fillRule="evenodd" clipRule="evenodd" d="M14.051 6.549v.003l1.134 1.14 3.241-3.25.003-.002 1.134 1.136-3.243 3.252 1.134 1.14a1 1 0 0 0 .09-.008c.293-.05.573-.324.72-.474l.005-.006 2.596-2.603L22 8.016l-2.597 2.604a3.73 3.73 0 0 1-1.982 1.015 4.3 4.3 0 0 1-3.162-.657l-.023-.016-.026-.018-1.366 1.407 8.509 8.512L20.219 22l-.002-.002-6.654-6.663-2.597 2.76-7.3-7.315C1.967 8.948 1.531 6.274 2.524 4.198c.241-.504.566-.973.978-1.386l8.154 8.416 1.418-1.423-.039-.045c-.858-1.002-1.048-2.368-.62-3.595a4.15 4.15 0 0 1 .983-1.561L16 2l1.135 1.138-2.598 2.602-.047.045c-.16.151-.394.374-.433.678zM3.809 5.523c-.362 1.319-.037 2.905 1.06 4.103L10.93 15.7l1.408-1.496zM2.205 20.697 3.34 21.84l4.543-4.552-1.135-1.143z"></path>
    </svg>
  )},
  { label: "Flights", icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
      <path d="m9.412 22.286-7.63-7.89 1.87-1.87 3.39.6c.08 0 .5 0 .73-.21l2.15-2.08c.02-.05.04-.13.04-.16 0-.02-.07-.1-.26-.19l-7.2-3.32 2.74-2.68 8.83 1.59c.2.02.49.02.62 0l3.21-3.24c.86-.78 2.58-1.75 3.76-.58 1.17 1.17.24 2.88-.49 3.71l-3.16 3.23c-.02.06-.05.24.01.61l1.52 8.83-2.7 2.43-3.29-6.84a.5.5 0 0 0-.18-.14l-2.49 2.33s-.01.15.01.3l.55 3.62-2.04 1.95zm-5.53-7.87 5.57 5.75.4-.38-.43-2.85c-.16-1.04.25-1.5.51-1.68l2.42-2.24c.45-.42.91-.46 1.2-.43.73.08 1.18.69 1.27.81l.06.1 2.45 5.1.59-.54-1.38-8.01c-.21-1.22.19-1.75.44-1.96l3.09-3.15c.25-.29.89-1.26.53-1.63-.36-.36-1.36.32-1.66.6l-3.27 3.29c-.47.45-1.35.42-1.83.35l-8.1-1.45-.63.62 5.21 2.4c.73.33.99.82 1.08 1.17.2.75-.23 1.38-.28 1.45l-.09.11-2.24 2.17c-.78.71-1.85.62-1.96.6l-2.67-.47-.27.27z"></path>
    </svg>
  )},
  { label: "Vacation Rentals", icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
      <path fillRule="evenodd" clipRule="evenodd" d="m11.995 2.174 9.76 6.5v13.152H2.245V8.674zm0 1.803-8.25 5.5v10.849h16.51V9.477zm-2.99 8.359a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.75 1.25a2.75 2.75 0 0 1 5.396-.75h6.344v1.5h-2.25v2.25h-1.5v-2.25h-2.594a2.751 2.751 0 0 1-5.396-.75"></path>
    </svg>
  )}
];

const headings = [
  "Where to?",
  "Stay somewhere great",
  "Do something fun",
  "Find places to eat",
  "Find the best flight",
  "Explore places to rent"
];

const placeholders = [
  "Places to go, things to do, hotels...",
  "Hotel name or destination",
  "Attraction, activity, or destination",
  "Restaurant or destination",
  "Flight name or destination",
  "Destination"
];

const WhereTo = () => {
  const [selected, setSelected] = useState(0);

  // Flight tab custom search bar UI
  const isFlights = selected === 4;

  // SVGs for flight fields
  const fromIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5">
      <path fillRule="evenodd" clipRule="evenodd" d="M9.706 4.14 6.651 5.514l3.477 6.063-2.656.544-2.54-2.257L1.685 11.1l4.15 5.993 14.643-3.782.014-.004c.364-.109.88-.36 1.274-.793.423-.467.7-1.152.464-1.991-.24-.851-.86-1.292-1.464-1.478a3.2 3.2 0 0 0-1.542-.064l-.016.004-3.558.91zm-.93 2.063.618-.278 5.814 5.632 4.338-1.11c.2-.04.513-.05.776.032.238.073.392.2.463.45.074.264.004.429-.131.578-.16.177-.407.306-.582.36L6.47 15.38l-2.464-3.559.61-.232 2.42 2.152 5.425-1.11z"></path>
      <path d="M2.372 19.86H22.04v-1.5H2.372z"></path>
    </svg>
  );
  const toIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5">
      <path fillRule="evenodd" clipRule="evenodd" d="m13.223 4.608-.14-.49-.506-.05-2.004-.203-.823-.084-.003.828-.017 6.162-2.573-.858L6.23 7.12l-.143-.432-.45-.073L3.6 6.288l-.945-.152.078.954.476 5.79.043.52.504.14 14.055 3.904.014.003.014.004c.369.087.942.129 1.5-.05a2.04 2.04 0 0 0 1.397-1.493c.218-.856-.098-1.547-.529-2.011a3.2 3.2 0 0 0-1.304-.827l-.015-.005-.016-.004-3.52-.986zm-1.996 7.204.018-6.372.675.068 2.104 7.381.115.404.404.113L18.45 14.5c.194.065.47.213.657.415.17.183.24.369.176.622-.068.265-.21.373-.402.435a1.4 1.4 0 0 1-.685.02L4.661 12.236l-.354-4.314.643.104.902 2.717.118.356.357.12 3.913 1.304.984.328zm-9.06 8.407h19.666v-1.5H2.167z"></path>
    </svg>
  );
  const calendarIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.007 2.75a.75.75 0 0 1 .748.752l-.002.748h2.512V3.5a.75.75 0 0 1 1.5 0v.75h2.472l-.002-.748a.75.75 0 1 1 1.5-.004l.002.752h4.018v17H3.245v-17h4.008l.002-.752a.75.75 0 0 1 .752-.748m-.758 3H4.745v14h14.51v-14h-2.513l.006 1.747-1.5.005-.006-1.752h-2.477V7.5h-1.5V5.75H8.749l-.004 1.752-1.5-.004zm-.004 6h5.5v5.5h-5.5zm1.5 1.5v2.5h2.5v-2.5z"></path>
    </svg>
  );
  const travelerIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 4.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3 1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m11 .5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-3 1.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m-5 2.5a6.91 6.91 0 0 1 5.36 2.493 6.96 6.96 0 0 1 8.244 2.312l.146.199v4.996H2.25v-6.997l.147-.199A6.91 6.91 0 0 1 8 10.75m3.75 8.5h8.5v-2.995a5.46 5.46 0 0 0-8.5 0zm-1.5 0h-6.5v-4.994a5.41 5.41 0 0 1 4.245-2.006h.01a5.4 5.4 0 0 1 4.006 1.73 7 7 0 0 0-1.615 1.575l-.146.199z"></path>
    </svg>
  );

  return (
    <div className="where-to-wrapper">
      <h1 className="where-to-heading">{headings[selected]}</h1>
      <div className="where-to-options">
        {options.map((opt, idx) => (
          <button
            key={opt.label}
            className={`where-to-option${selected === idx ? " selected" : ""}`}
            onClick={() => setSelected(idx)}
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            <span className="where-to-icon-img-text">
              {opt.icon}
              <span className="where-to-label">{opt.label}</span>
            </span>
            <div className="where-to-underline" style={{ opacity: selected === idx ? 1 : 0, background: selected === idx ? '#222' : 'transparent', height: '3px', borderRadius: '3px', marginTop: '4px', width: '100%' }} />
          </button>
        ))}
      </div>
      {isFlights ? (
        <div className="where-to-flights-bar center-bar">
          <div className="flight-field">
            <span className="flight-field-icon">{fromIcon}</span>
            <span className="flight-field-bold">From:</span> <span className="flight-field-grey">Origin</span>
          </div>
          <div className="flight-field">
            <span className="flight-field-icon">{toIcon}</span>
            <span className="flight-field-bold">To:</span> <span className="flight-field-grey">Destination</span>
          </div>
          <div className="flight-field flight-field-active">
            <span className="flight-field-icon">{calendarIcon}</span>
            <span className="flight-field-bold">May 19 → May 26</span>
          </div>
          <div className="flight-field flight-field-active">
            <span className="flight-field-icon">{travelerIcon}</span>
            <span className="flight-field-bold">1 Traveler</span>
          </div>
          <button className="where-to-search-btn flight-search-btn">Search</button>
        </div>
      ) : (
        <div className="where-to-searchbar">
          <span className="where-to-magnifier">
            <svg width="22" height="22" fill="none" stroke="#222" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </span>
          <input
            type="text"
            className="where-to-search-input"
            placeholder={placeholders[selected]}
          />
          <button className="where-to-search-btn">Search</button>
        </div>
      )}
    </div>
  );
};

export default WhereTo;
