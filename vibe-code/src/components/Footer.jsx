import React, { useState } from "react";
import "./Footer.css";

const footerLinks = [
  {
    heading: "About Tripadvisor",
    links: [
      "About Us",
      "Press",
      "Resources and Policies",
      "Careers",
      "Investor Relations",
      "Trust & Safety",
      "Contact us",
      "Accessibility Statement",
      "Bug Bounty Program",
      "Tripadvisor Technology Blog"
    ]
  },
  {
    heading: "Explore",
    links: [
      "Write a review",
      "Add a Place",
      "Join",
      "Travelers' Choice",
      "Help Center",
      "Travel Stories"
    ]
  },
  {
    heading: "Do Business With Us",
    links: [
      "Owners",
      "Business Advantage",
      "Sponsored Placements",
      "Advertise with Us",
      "Access our Content API",
      "Become an Affiliate"
    ],
    appHeading: "Get the App",
    appLinks: ["iPhone App", "Android App"]
  },
  {
    heading: "Tripadvisor Sites",
    sites: [
      { text: "Book the best restaurants with ", link: "TheFork" },
      { text: "Book tours and attraction tickets on ", link: "Viator" },
      { text: "Read cruise reviews on ", link: "Cruise Critic" },
      { text: "Get airline seating charts on ", link: "Seat Guru" },
      { text: "Search for holiday rentals on ", link: "Holiday Lettings" }
    ]
  }
];

const bottomLinks = [
  "Terms of Use",
  "Privacy and Cookies Statement",
  "Cookie consent",
  "Site Map",
  "How the site works",
  "Contact us"
];

const socialIcons = [
  { icon: "facebook", url: "#" },
  { icon: "x", url: "#" },
  { icon: "pinterest", url: "#" },
  { icon: "instagram", url: "#" },
  { icon: "youtube", url: "#" },
  { icon: "tiktok", url: "#" }
];

const Footer = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-cols">
          {footerLinks.map((section) => (
            <div className="footer-section" key={section.heading}>
              <h4 className="footer-heading">{section.heading}</h4>
              {section.links && (
                <ul className="footer-links">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              )}
              {section.appHeading && (
                <>
                  <div className="footer-app-heading">{section.appHeading}</div>
                  <ul className="footer-links">
                    {section.appLinks.map((link) => (
                      <li key={link}>
                        <a href="#" className="footer-link">{link}</a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {section.sites && (
                <ul className="footer-links">
                  {section.sites.map((site) => (
                    <li key={site.link} className="footer-site-line">
                      {site.text}
                      <a href="#" className="footer-site-link always-underline">{site.link}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-bottom-left">
          <div className="footer-brand-row">
            <img src="/Tripadvisor_logoset_solid_green.svg" alt="Tripadvisor Logo" className="footer-logo" />
            <span className="footer-copyright"> © 2025 Tripadvisor LLC All rights reserved.</span>
          </div>
          <div className="footer-links-row">
            {bottomLinks.slice(0, 5).map((link) => (
              <a href="#" className="footer-bottom-link always-underline" key={link}>{link}</a>
            ))}
          </div>
          <div className="footer-links-row">
            <a href="#" className="footer-bottom-link always-underline" key={bottomLinks[5]}>{bottomLinks[5]}</a>
          </div>
        </div>
        <div className="footer-bottom-right">
          <div className="footer-controls-row">
            <button className="footer-btn">$ USD <span className="footer-btn-arrow">▼</span></button>
            <button className="footer-btn">United States <span className="footer-btn-arrow">▼</span></button>
          </div>
          <div className="footer-social-row">
            <a href="#" className="footer-social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.129 22 16.992 22 12Z" />
              </svg>
            </a>
            <a href="#" className="footer-social-icon" aria-label="X">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M13.905 10.47 21.35 2h-1.764L13.12 9.353 7.956 2H2l7.809 11.12L2 22h1.764l6.827-7.766L16.044 22H22M4.4 3.302h2.71l12.476 17.46h-2.71" />
              </svg>
            </a>
            <a href="#" className="footer-social-icon" aria-label="Pinterest">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12.008 2C6.481 2 2 6.474 2 11.992c0 4.235 2.636 7.853 6.36 9.309-.091-.79-.166-2.007.032-2.87.181-.781 1.17-4.967 1.17-4.967s-.297-.6-.297-1.48c0-1.39.807-2.426 1.812-2.426.857 0 1.269.641 1.269 1.406 0 .855-.544 2.138-.832 3.33-.239.995.503 1.81 1.483 1.81 1.779 0 3.146-1.875 3.146-4.573 0-2.393-1.721-4.062-4.184-4.062-2.85 0-4.522 2.13-4.522 4.334 0 .855.329 1.776.74 2.278a.3.3 0 0 1 .067.287c-.074.313-.247.995-.28 1.135-.041.181-.149.222-.338.132-1.252-.584-2.035-2.401-2.035-3.873 0-3.15 2.29-6.045 6.615-6.045 3.468 0 6.17 2.467 6.17 5.773 0 3.446-2.175 6.217-5.19 6.217-1.013 0-1.969-.526-2.29-1.151l-.626 2.377c-.222.871-.832 1.957-1.244 2.623.94.288 1.928.444 2.966.444C17.519 22 22 17.526 22 12.008 22.016 6.474 17.535 2 12.008 2" />
              </svg>
            </a>
            <a href="#" className="footer-social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M12 3.803c2.67 0 2.986.01 4.04.059.976.044 1.505.207 1.858.344.435.16.828.416 1.151.748.332.323.588.716.748 1.151.137.353.3.882.344 1.857.049 1.055.059 1.37.059 4.041 0 2.67-.01 2.986-.059 4.041-.044.975-.207 1.505-.344 1.857A3.32 3.32 0 0 1 17.9 19.8c-.352.137-.882.3-1.857.344-1.054.048-1.37.058-4.04.058s-2.987-.01-4.041-.058c-.975-.044-1.505-.207-1.857-.344a3.1 3.1 0 0 1-1.151-.748 3.1 3.1 0 0 1-.749-1.151c-.137-.353-.3-.883-.344-1.857-.048-1.055-.058-1.371-.058-4.041s.01-2.987.058-4.041c.045-.975.207-1.505.344-1.857a3.1 3.1 0 0 1 .749-1.151 3.1 3.1 0 0 1 1.15-.749c.353-.137.883-.3 1.858-.344 1.054-.048 1.37-.058 4.04-.058zM12.002 2c-2.716 0-3.057.012-4.124.06-1.066.05-1.793.22-2.428.466A4.9 4.9 0 0 0 3.678 3.68a4.9 4.9 0 0 0-1.153 1.772c-.247.635-.416 1.363-.465 2.427C2.012 8.943 2 9.286 2 12.002c0 2.715.012 3.056.06 4.123.05 1.066.218 1.791.465 2.426a4.9 4.9 0 0 0 1.153 1.772c.5.508 1.105.902 1.772 1.153.635.248 1.363.417 2.428.465s1.407.06 4.123.06 3.056-.01 4.123-.06 1.79-.217 2.426-.465a5.1 5.1 0 0 0 2.925-2.925c.247-.635.416-1.363.465-2.427.048-1.064.06-1.407.06-4.123s-.012-3.057-.06-4.123c-.05-1.067-.218-1.791-.465-2.426a4.9 4.9 0 0 0-1.153-1.771 4.9 4.9 0 0 0-1.772-1.155c-.635-.247-1.363-.416-2.428-.464s-1.406-.06-4.122-.06z"></path>
                <path d="M12 6.866a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27m0 8.47a3.334 3.334 0 1 1 0-6.669 3.334 3.334 0 0 1 0 6.669m5.338-7.473a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4" />
              </svg>
            </a>
            <a href="#" className="footer-social-icon" aria-label="Youtube">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M21.8 7.9s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.8-2.8-.2-7-.2-7-.2s-4.2 0-7 .2c-.4.1-1.3.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.399.8 2c.8.8 1.8.8 2.2.899C6.8 18.9 12 19 12 19s4.2 0 7-.2c.4 0 1.2-.1 2-.8.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5c0-1.7-.2-3.4-.2-3.4M9.9 14.5V8.9l5.4 2.8z" />
              </svg>
            </a>
            <a href="#" className="footer-social-icon" aria-label="TikTok">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M18.116 6.009A4.8 4.8 0 0 1 15.936 2h-3.438l-.005 13.78a2.89 2.89 0 0 1-2.885 2.782 2.89 2.89 0 0 1-2.89-2.89 2.894 2.894 0 0 1 2.89-2.891c.297 0 .583.049.853.133v-3.51a6 6 0 0 0-.853-.062 6.336 6.336 0 0 0-6.329 6.33 6.32 6.32 0 0 0 2.702 5.181A6.3 6.3 0 0 0 9.608 22a6.336 6.336 0 0 0 6.329-6.328V8.683a8.18 8.18 0 0 0 4.784 1.538V6.783c-.96 0-1.855-.285-2.605-.774" />
              </svg>
            </a>

          </div>
        </div>
      </div>
      <div className="footer-note">
        This is the version of our website addressed to speakers of English in the United States. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu. {" "}
        <button
  className="bg-none border-none p-0 m-0 text-sm text-gray-600 hover:underline cursor-pointer font-normal inline align-baseline"
  onClick={() => setShowMore((v) => !v)}
>
  {showMore ? "Show less" : "Show more"}
</button>

        {showMore && (
          <div className="footer-note-extra">
            <p>Tripadvisor LLC makes no guarantees for availability of prices advertised on our sites and applications. Listed prices may require a stay of a particular length or have blackout dates, qualifications or other applicable restrictions. Tripadvisor LLC is not responsible for any content on external web sites that are not owned or operated by Tripadvisor . Indicative hotel prices displayed on our “Explore” pages are estimates extrapolated from historic pricing data.</p>
            <p>Tripadvisor LLC is not a booking agent or tour operator. When you book with one of our partners, please be sure to check their site for a full disclosure of all applicable fees.</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
