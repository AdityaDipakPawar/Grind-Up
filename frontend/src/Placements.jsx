import React from 'react';
import './placement.css';

const Placements = () => (
  <div className="container">
    {/* <header>
      <div className="logo">
        <img src="/Logos/logo.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <a href="/home" className="nav-link">Home</a>
        <a href="/placements" className="nav-link active">Placements</a>
        <a href="/invite" className="nav-link">Invites</a>
        <a href="/contact" className="nav-link">Contact us</a>
      </nav>
      <div className="user-actions">
        <div className="notification-icon">
          <img src="/Logos/notification.svg" alt="Notifications" />
        </div>
        <div className="profile-icon">
          <img src="/Logos/profile.svg" alt="Profile" />
        </div>
      </div>
    </header> */}
    <main>
      <div className="placement-header">
        <div className="section-title">
          <h3>Actively hiring companies</h3>
        </div>
        <div className="filters">
          <span>filters</span>
        </div>
      </div>
      <div className="placement-grid">
        <div className="placement-card">
          <div className="company-header">
            <div className="company-logo">
              <span>Logo</span>
            </div>
            <h4>company name</h4>
          </div>
          <div className="job-details">
            <div className="detail-item">
              <span className="label">Role :</span>
              <span className="value">Software Developer</span>
            </div>
            <div className="detail-item">
              <span className="label">No. of vacancies :</span>
              <span className="value">5</span>
            </div>
            <div className="detail-item">
              <span className="label">Location :</span>
              <span className="value">Mumbai, Bangalore</span>
            </div>
            <div className="detail-item">
              <span className="label">Employment type :</span>
              <span className="value">Full-time</span>
            </div>
            <div className="detail-item">
              <span className="label">Salary :</span>
              <span className="value">₹6.5 - 8.5 LPA</span>
            </div>
            <div className="detail-item">
              <span className="label">Must have skills :</span>
              <span className="value">Java, Spring Boot, MySQL</span>
            </div>
            <div className="detail-item">
              <span className="label">Good to have skills :</span>
              <span className="value">React, AWS, Docker</span>
            </div>
            <div className="detail-item">
              <span className="label">Job Description :</span>
              <span className="value">Develop and maintain web applications...</span>
            </div>
            <div className="detail-item">
              <span className="label">Application end date :</span>
              <span className="value">25th March 2024</span>
            </div>
          </div>
          <div className="action-buttons">
            <button className="interested-btn">Interested</button>
            <button className="ignore-btn">Ignore</button>
          </div>
        </div>
        <div className="placement-card">
          <div className="company-header">
            <div className="company-logo">
              <span>Logo</span>
            </div>
            <h4>company name</h4>
          </div>
          <div className="job-details">
            <div className="detail-item">
              <span className="label">Role :</span>
              <span className="value">Frontend Developer</span>
            </div>
            <div className="detail-item">
              <span className="label">No. of vacancies :</span>
              <span className="value">3</span>
            </div>
            <div className="detail-item">
              <span className="label">Location :</span>
              <span className="value">Pune, Hyderabad</span>
            </div>
            <div className="detail-item">
              <span className="label">Employment type :</span>
              <span className="value">Full-time</span>
            </div>
            <div className="detail-item">
              <span className="label">Salary :</span>
              <span className="value">₹5.5 - 7.5 LPA</span>
            </div>
            <div className="detail-item">
              <span className="label">Must have skills :</span>
              <span className="value">React, JavaScript, CSS</span>
            </div>
            <div className="detail-item">
              <span className="label">Good to have skills :</span>
              <span className="value">TypeScript, Redux, Node.js</span>
            </div>
            <div className="detail-item">
              <span className="label">Job Description :</span>
              <span className="value">Create responsive user interfaces...</span>
            </div>
            <div className="detail-item">
              <span className="label">Application end date :</span>
              <span className="value">30th March 2024</span>
            </div>
          </div>
          <div className="action-buttons">
            <button className="interested-btn">Interested</button>
            <button className="ignore-btn">Ignore</button>
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

export default Placements; 