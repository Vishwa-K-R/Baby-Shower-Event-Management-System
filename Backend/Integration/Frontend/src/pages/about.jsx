import React from 'react';
import '../assets/css/about.css'
import NavBar from '../components/Navbar';

const AboutUs = () => {
  return (
    <>
    <NavBar/>
    <div className="about-us-container">
      <h2>About Us</h2>
      <p>
        Welcome to <strong>TinyToes</strong>, your one-stop solution for organizing and managing memorable baby shower events!
        Our team is dedicated to ensuring that every baby shower we plan is a unique and joyful experience for both
        parents-to-be and their guests.
      </p>
      <p>
        At <strong>TinyToes</strong>, we understand the significance of a baby shower — a celebration of new life and a moment
        to cherish with family and friends. Our experienced event planners take care of every detail, from creative
        themes and decorations to entertainment and thoughtful gifts.
      </p>
      <p>
        Why choose us?
        <ul>
          <li>Experienced and passionate event planning team</li>
          <li>Customized themes and decorations</li>
          <li>Attention to every detail for a seamless event</li>
          <li>Personalized service tailored to your preferences</li>
          <li>Memorable experiences that last a lifetime</li>
        </ul>
      </p>
      <p>
        Let us transform your baby shower ideas into a reality! Contact us today to discuss your event and learn more
        about our services.
      </p>
    </div>
    <footer>
        <p>&copy; 2024 TinyToes. All rights reserved.</p>
      </footer>
    </>
  );
};

export default AboutUs;
