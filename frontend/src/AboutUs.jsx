import React from 'react';
import './about.css';

const AboutUs = () => (
  <div className="container">
    {/* <header>
      <div className="logo">
        <a href="/home">
          <img src="/Logos/logo.png" alt="Logo" />
        </a>
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
    </header> */}
    <main>
      <div className="about-content">
        <section className="vision-section">
          <h2>Vision</h2>
          <p>"To create a future where every individual's true potential is recognized, bridging the gap between education and industry, and fostering sustainable, data-driven career growth."</p>
        </section>
        <section className="mission-section">
          <h2>Mission</h2>
          <p>"Our mission is to revolutionize employability by providing a platform that empowers job seekers with continuous opportunities, equips recruiters with advanced tools for smarter hiring, and connects academia with industry to build a thriving ecosystem of mentorship, learning, and professional success."</p>
        </section>
        <section className="blogs-section">
          <h2>Our Blogs</h2>
          <div className="blogs-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img src="/Logos/blog-placeholder.jpg" alt="Blog Image" />
              </div>
              <div className="blog-content">
                <h3>How to Ace Your First Job Interview</h3>
                <p>Essential tips and strategies to help you prepare for your first job interview and make a lasting impression.</p>
                <span className="blog-date">March 15, 2024</span>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src="/Logos/blog-placeholder.jpg" alt="Blog Image" />
              </div>
              <div className="blog-content">
                <h3>Top Skills Employers Look For in 2024</h3>
                <p>Discover the most in-demand skills that employers are seeking in today's competitive job market.</p>
                <span className="blog-date">March 10, 2024</span>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src="/Logos/blog-placeholder.jpg" alt="Blog Image" />
              </div>
              <div className="blog-content">
                <h3>Building Your Professional Network</h3>
                <p>Learn effective strategies for building and maintaining professional relationships that can boost your career.</p>
                <span className="blog-date">March 5, 2024</span>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <img src="/Logos/blog-placeholder.jpg" alt="Blog Image" />
              </div>
              <div className="blog-content">
                <h3>Resume Writing Best Practices</h3>
                <p>Create a compelling resume that stands out to recruiters and effectively showcases your qualifications.</p>
                <span className="blog-date">February 28, 2024</span>
              </div>
            </div>
          </div>
        </section>
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

export default AboutUs; 