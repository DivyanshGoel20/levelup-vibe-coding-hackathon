import React, { useRef, useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON, Popup } from "react-leaflet";
import countriesData from "./countries.geo.json";
import "leaflet/dist/leaflet.css";
import "./GlobeExplorer.css";

// Extensive travel/location data for many countries
const dummyPlaces = {
  US: [
    { name: "Grand Canyon", city: "Arizona" },
    { name: "Statue of Liberty", city: "New York" },
    { name: "Yellowstone National Park", city: "Wyoming" },
    { name: "Golden Gate Bridge", city: "San Francisco" },
    { name: "Times Square", city: "New York" },
    { name: "Disney World", city: "Florida" },
    { name: "Mount Rushmore", city: "South Dakota" }
  ],
  CA: [
    { name: "Niagara Falls", city: "Ontario" },
    { name: "Banff National Park", city: "Alberta" },
    { name: "CN Tower", city: "Toronto" },
    { name: "Old Quebec", city: "Quebec" },
    { name: "Stanley Park", city: "Vancouver" }
  ],
  GB: [
    { name: "Big Ben", city: "London" },
    { name: "Stonehenge", city: "Wiltshire" },
    { name: "Edinburgh Castle", city: "Edinburgh" },
    { name: "Tower of London", city: "London" },
    { name: "Lake District", city: "Cumbria" }
  ],
  FR: [
    { name: "Eiffel Tower", city: "Paris" },
    { name: "Louvre Museum", city: "Paris" },
    { name: "French Riviera", city: "Côte d'Azur" },
    { name: "Mont Saint-Michel", city: "Normandy" },
    { name: "Palace of Versailles", city: "Versailles" }
  ],
  DE: [
    { name: "Brandenburg Gate", city: "Berlin" },
    { name: "Neuschwanstein Castle", city: "Bavaria" },
    { name: "Cologne Cathedral", city: "Cologne" },
    { name: "Black Forest", city: "Baden-Württemberg" },
    { name: "Oktoberfest", city: "Munich" }
  ],
  IT: [
    { name: "Colosseum", city: "Rome" },
    { name: "Venice Canals", city: "Venice" },
    { name: "Leaning Tower of Pisa", city: "Pisa" },
    { name: "Florence Cathedral", city: "Florence" },
    { name: "Amalfi Coast", city: "Campania" }
  ],
  ES: [
    { name: "Sagrada Familia", city: "Barcelona" },
    { name: "Alhambra", city: "Granada" },
    { name: "Plaza Mayor", city: "Madrid" },
    { name: "Ibiza Beaches", city: "Ibiza" },
    { name: "Park Güell", city: "Barcelona" }
  ],
  IN: [
    { name: "Taj Mahal", city: "Agra" },
    { name: "Jaipur", city: "Rajasthan" },
    { name: "Goa Beaches", city: "Goa" },
    { name: "Qutub Minar", city: "Delhi" },
    { name: "Kerala Backwaters", city: "Kerala" },
    { name: "Varanasi Ghats", city: "Varanasi" },
    { name: "Gateway of India", city: "Mumbai" }
  ],
  CN: [
    { name: "Great Wall", city: "Beijing" },
    { name: "Terracotta Army", city: "Xi'an" },
    { name: "Li River", city: "Guilin" },
    { name: "Forbidden City", city: "Beijing" },
    { name: "The Bund", city: "Shanghai" }
  ],
  JP: [
    { name: "Mount Fuji", city: "Honshu" },
    { name: "Tokyo Tower", city: "Tokyo" },
    { name: "Fushimi Inari Shrine", city: "Kyoto" },
    { name: "Hiroshima Peace Memorial", city: "Hiroshima" },
    { name: "Osaka Castle", city: "Osaka" }
  ],
  RU: [
    { name: "Red Square", city: "Moscow" },
    { name: "Lake Baikal", city: "Siberia" },
    { name: "Hermitage Museum", city: "St. Petersburg" },
    { name: "Kremlin", city: "Moscow" },
    { name: "Trans-Siberian Railway", city: "Russia" }
  ],
  BR: [
    { name: "Christ the Redeemer", city: "Rio de Janeiro" },
    { name: "Iguazu Falls", city: "Paraná" },
    { name: "Amazon Rainforest", city: "Amazonas" },
    { name: "Copacabana Beach", city: "Rio de Janeiro" },
    { name: "Sugarloaf Mountain", city: "Rio de Janeiro" }
  ],
  MX: [
    { name: "Chichen Itza", city: "Yucatán" },
    { name: "Teotihuacan", city: "Mexico State" },
    { name: "Copper Canyon", city: "Chihuahua" },
    { name: "Cancun Beaches", city: "Cancun" },
    { name: "Frida Kahlo Museum", city: "Mexico City" }
  ],
  AU: [
    { name: "Sydney Opera House", city: "Sydney" },
    { name: "Great Barrier Reef", city: "Queensland" },
    { name: "Uluru", city: "Northern Territory" },
    { name: "Bondi Beach", city: "Sydney" },
    { name: "Twelve Apostles", city: "Victoria" }
  ],
  EG: [
    { name: "Pyramids of Giza", city: "Giza" },
    { name: "Valley of the Kings", city: "Luxor" },
    { name: "Abu Simbel Temples", city: "Nubia" },
    { name: "Egyptian Museum", city: "Cairo" },
    { name: "Karnak Temple", city: "Luxor" }
  ],
  ZA: [
    { name: "Table Mountain", city: "Cape Town" },
    { name: "Kruger National Park", city: "Mpumalanga" },
    { name: "Robben Island", city: "Cape Town" },
    { name: "Blyde River Canyon", city: "Mpumalanga" },
    { name: "Garden Route", city: "Western Cape" }
  ],
  TR: [
    { name: "Hagia Sophia", city: "Istanbul" },
    { name: "Cappadocia", city: "Nevşehir" },
    { name: "Pamukkale", city: "Denizli" },
    { name: "Blue Mosque", city: "Istanbul" },
    { name: "Ephesus", city: "Izmir" }
  ],
  TH: [
    { name: "Grand Palace", city: "Bangkok" },
    { name: "Phi Phi Islands", city: "Krabi" },
    { name: "Ayutthaya", city: "Ayutthaya" },
    { name: "Chiang Mai Old City", city: "Chiang Mai" },
    { name: "Railay Beach", city: "Krabi" }
  ],
  AR: [
    { name: "Iguazu Falls", city: "Misiones" },
    { name: "Perito Moreno Glacier", city: "Santa Cruz" },
    { name: "Buenos Aires Obelisk", city: "Buenos Aires" },
    { name: "Bariloche", city: "Río Negro" },
    { name: "Mendoza Vineyards", city: "Mendoza" }
  ],
  KE: [
    { name: "Maasai Mara", city: "Narok" },
    { name: "Diani Beach", city: "Kwale" },
    { name: "Mount Kenya", city: "Kirinyaga" },
    { name: "Nairobi National Park", city: "Nairobi" },
    { name: "Lake Nakuru", city: "Nakuru" }
  ],
  NG: [
    { name: "Zuma Rock", city: "Niger" },
    { name: "Olumo Rock", city: "Ogun" },
    { name: "Yankari National Park", city: "Bauchi" },
    { name: "Lekki Conservation Centre", city: "Lagos" },
    { name: "Aso Rock", city: "Abuja" }
  ],
  // Add even more countries as needed...
};

const CountryPopup = ({ country, position, onClose }) => (
  <Popup position={position} onClose={onClose} autoPan={true}>
    <div className="popup-title">{country.ADMIN}</div>
    <div className="popup-places-list">
      {(dummyPlaces[country.ISO_A2] || [
        { name: "No data yet", city: "" }
      ]).map((place, idx) => (
        <div key={idx} className="popup-place-item">
          <span className="popup-place-name">{place.name}</span>
          {place.city && <span className="popup-place-city">{` (${place.city})`}</span>}
        </div>
      ))}
    </div>
  </Popup>
);

const GlobeExplorer = () => {
  const [popup, setPopup] = useState({ show: false, country: null, position: null });

  // Handler for country click
  function onEachCountry(feature, layer) {
    layer.on({
      click: (e) => {
        setPopup({
          show: true,
          country: feature.properties,
          position: e.latlng
        });
      }
    });
    layer.options.fillColor = "#0af";
    layer.options.fillOpacity = 0.25;
    layer.options.color = "#04aa6d";
    layer.options.weight = 1.5;
  }

  return (
    <div className="globe-explorer-container">
      <MapContainer
        center={[20, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={7}
        style={{ height: "500px", width: "100%", borderRadius: "16px" }}
        className="maptiler-globe"
        scrollWheelZoom={true}
        worldCopyJump={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/attributions">CARTO</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <GeoJSON data={countriesData} onEachFeature={onEachCountry} />
        {popup.show && popup.country && popup.position && (
          <CountryPopup country={popup.country} position={popup.position} onClose={() => setPopup({ show: false, country: null, position: null })} />
        )}
      </MapContainer>
    </div>
  );
};

export default GlobeExplorer;