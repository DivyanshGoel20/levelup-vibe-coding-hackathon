import React from "react";
import "./SignInModal.css";

const SignInModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="signin-modal-overlay">
      <div className="signin-modal longer-modal">
        <div className="signin-modal-header">
          <img src="/Tripadvisor_logoset_solid_green.svg" alt="Tripadvisor Logo" className="signin-modal-logo" />
          <button className="signin-modal-close" onClick={onClose} aria-label="Close sign in modal">×</button>
        </div>
        <div className="signin-modal-title">Sign in to unlock the best of Tripadvisor.</div>
        <button className="signin-modal-btn signin-google-btn">
          <img src="./G_color_40x40.png" alt="Google" className="signin-btn-icon" />
          <span>Continue with Google</span>
        </button>
        <button className="signin-modal-btn signin-email-btn">
          <svg className="signin-btn-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="22,6 12,13 2,6" /></svg>
          <span>Continue with email</span>
        </button>
        <div className="signin-modal-legal">
          <p>By proceeding, you agree to our <a href="#">Terms of Use</a> and confirm you have read our <a href="#">Privacy and Cookie Statement</a>.</p>
          <p className="signin-modal-recaptcha">This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
