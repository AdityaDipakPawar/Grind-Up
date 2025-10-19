import React from 'react';
import './invite.css';

const Invite = () => (
  <div className="container">
    {/* <header>
      <div className="logo">
        <img src="/Logos/logo.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <a href="/home" className="nav-link">Home</a>
        <a href="/placements" className="nav-link">Placements</a>
        <a href="/invite" className="nav-link active">Invites</a>
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
      <div className="invite-header">
        <div className="section-title">
          <h3>Placement Invites</h3>
        </div>
        <div className="filters">
          <span>filters</span>
        </div>
      </div>
      <div className="invite-grid">
        <div className="invite-card">
          <div className="company-header">
            <div className="company-logo">
              <span>Logo</span>
            </div>
            <h4>company name</h4>
          </div>
          <div className="job-details">
            <div className="detail-item">
              <span className="label">Role :</span>
              <span className="value">Full Stack Developer</span>
            </div>
            <div className="detail-item">
              <span className="label">No. of vacancies :</span>
              <span className="value">8</span>
            </div>
            <div className="detail-item">
              <span className="label">Location :</span>
              <span className="value">Delhi, Gurgaon</span>
            </div>
            <div className="detail-item">
              <span className="label">Employment type :</span>
              <span className="value">Full-time</span>
            </div>
            <div className="detail-item">
              <span className="label">Salary :</span>
              <span className="value">₹7.5 - 10 LPA</span>
            </div>
            <div className="detail-item">
              <span className="label">Must have skills :</span>
              <span className="value">React, Node.js, MongoDB</span>
            </div>
            <div className="detail-item">
              <span className="label">Good to have skills :</span>
              <span className="value">GraphQL, Redis, Kubernetes</span>
            </div>
            <div className="detail-item">
              <span className="label">Job Description :</span>
              <span className="value">Build scalable web applications using modern technologies...</span>
            </div>
            <div className="detail-item">
              <span className="label">Application end date :</span>
              <span className="value">15th April 2024</span>
            </div>
          </div>
          <div className="action-buttons">
            <button className="accept-btn">Accept</button>
            <button className="ignore-btn">Ignore</button>
          </div>
        </div>
        <div className="invite-card">
          <div className="company-header">
            <div className="company-logo">
              <span>Logo</span>
            </div>
            <h4>company name</h4>
          </div>
          <div className="job-details">
            <div className="detail-item">
              <span className="label">Role :</span>
              <span className="value">Data Scientist</span>
            </div>
            <div className="detail-item">
              <span className="label">No. of vacancies :</span>
              <span className="value">4</span>
            </div>
            <div className="detail-item">
              <span className="label">Location :</span>
              <span className="value">Bangalore, Chennai</span>
            </div>
            <div className="detail-item">
              <span className="label">Employment type :</span>
              <span className="value">Full-time</span>
            </div>
            <div className="detail-item">
              <span className="label">Salary :</span>
              <span className="value">₹9 - 12 LPA</span>
            </div>
            <div className="detail-item">
              <span className="label">Must have skills :</span>
              <span className="value">Python, Machine Learning, SQL</span>
            </div>
            <div className="detail-item">
              <span className="label">Good to have skills :</span>
              <span className="value">TensorFlow, AWS, Tableau</span>
            </div>
            <div className="detail-item">
              <span className="label">Job Description :</span>
              <span className="value">Analyze complex datasets and build predictive models...</span>
            </div>
            <div className="detail-item">
              <span className="label">Application end date :</span>
              <span className="value">20th April 2024</span>
            </div>
          </div>
          <div className="action-buttons">
            <button className="accept-btn">Accept</button>
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

export default Invite; 