import React from 'react';
import './first-view.css';

const FirstView = () => (
  <div className="container">
    {/* <header>
      <div className="logo">
        <img src="/Logos/logo.png" alt="Logo" />
      </div>
      <div className="auth-buttons">
        <button className="signup-btn">Sign up</button>
        <button className="login-btn">Log in</button>
        <button className="college-btn">College</button>
      </div>
    </header> */}
    <main>
      <div className="search-section">
        <h2>start your placement search</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search companies, jobs..." />
          <button type="button" className="search-btn">
            <img src="/Logos/Search.svg" alt="Search" />
          </button>
        </div>
      </div>
      <div className="companies-section">
        <div className="section-header">
          <h3>Actively hiring companies</h3>
        </div>
        <div className="companies-grid">
          <div className="company-card">
            <div className="company-logo">
              <span>Logo</span>
            </div>
            <div className="company-info">
              <h4>company name</h4>
              <button className="view-btn">View</button>
            </div>
          </div>
          <div className="company-card">
            <div className="company-logo">
              <span>Logo</span>
            </div>
            <div className="company-info">
              <h4>company name</h4>
              <button className="view-btn">View</button>
            </div>
          </div>
          <div className="company-card">
            <div className="company-logo">
              <span>Logo</span>
            </div>
            <div className="company-info">
              <h4>company name</h4>
              <button className="view-btn">View</button>
            </div>
          </div>
        </div>
      </div>
    </main>
    {/* <footer>
      <div className="footer-left">
        <div className="logo">
          <img src="/Logos/logo.png" alt="Logo" />
        </div>
        <div className="footer-section">
          <p>Know more about us :</p>
          <div className="social-links">
            <a href="#"><img src="/Logos/instagram-stroke-rounded.svg" alt="Instagram" /></a>
            <a href="#"><img src="/Logos/email.svg" alt="Gmail" /></a>
            <a href="#"><img src="/Logos/LinkedIn.svg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <div className="footer-center">
        <a href="#">Contact us</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">About us</a>
        <a href="#">FAQ</a>
      </div>
      <div className="footer-right">
        <p>Download our app</p>
        <div className="app-buttons">
          <img src="/Logos/google-play.png" alt="Google Play" />
          <img src="/Logos/app-store.png" alt="App Store" />
        </div>
      </div>
    </footer> */}
  </div>
);

export default FirstView; 