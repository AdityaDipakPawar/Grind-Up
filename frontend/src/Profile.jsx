import React from 'react';
import './profile.css';

const Profile = () => (
  <div className="container">
    <header>
      <div className="logo">
        <img src="/Logos/logo.png" alt="Logo" />
      </div>
      <nav className="navigation">
        <a href="/home" className="nav-link">Home</a>
        <a href="/placements" className="nav-link">Placements</a>
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
    </header>
    <main>
      <div className="profile-content">
        <div className="profile-header">
          <button className="profile-btn active">Profile</button>
        </div>
        <div className="profile-fields">
          <div className="field-item">
            <label>College name</label>
            <input type="text" placeholder="Enter college name" />
          </div>
          <div className="field-item">
            <label>College City</label>
            <input type="text" placeholder="Enter college city" />
          </div>
          <div className="field-item">
            <label>Grade of College</label>
            <input type="text" placeholder="Enter grade" />
          </div>
          <div className="field-item">
            <label>TPO name</label>
            <input type="text" placeholder="Enter TPO name" />
          </div>
          <div className="field-item">
            <label>Mobile no.</label>
            <input type="tel" placeholder="Enter mobile number" />
          </div>
          <div className="field-item">
            <label>Official Email ID</label>
            <input type="email" placeholder="Enter official email" />
          </div>
          <div className="field-item">
            <label>University Affiliation</label>
            <input type="text" placeholder="Enter university affiliation" />
          </div>
          <div className="field-item">
            <label>Courses offered by College</label>
            <input type="text" placeholder="Enter courses offered" />
          </div>
          <div className="field-item">
            <label>Number of students</label>
            <input type="number" placeholder="Enter number of students" />
          </div>
          <div className="field-item">
            <label>Highest CGPA of current batch</label>
            <input type="text" placeholder="Enter highest CGPA" />
          </div>
          <div className="field-item">
            <label>Average CTC offered in last 3 years</label>
            <input type="text" placeholder="Enter average CTC" />
          </div>
          <div className="field-item">
            <label>Average no. of students placed in last 3 years</label>
            <input type="number" placeholder="Enter average number" />
          </div>
          <div className="field-item">
            <label>Placement percentage of last 3 years</label>
            <input type="text" placeholder="Enter placement percentage" />
          </div>
        </div>
      </div>
    </main>
    <footer>
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
    </footer>
  </div>
);

export default Profile; 