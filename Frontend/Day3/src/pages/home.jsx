import React from 'react';
import '../assets/css/home.css';

import NavBar from '../components/Navbar'
import Features from '../components/cards';
import Review from '../components/Review';
import  {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page-container">
        <div className="home-form">

        
        <NavBar/>
        <br></br>
        <center>
        <h1>Welcome to TinyToes</h1>
        <p>Creating Joyful Moments for Your Special Day</p>
        </center>

      <section className="hero-section">
        {/* <img
          src={logo}
          alt="Baby Shower"
        /> */}
        <p>Celebrate the upcoming arrival of a bundle of joy!</p>
        <Link to={"/form"} className='form-rsvp'>
            <center>
                <button>
            RSVP FORM
            </button>
            </center>
        </Link>
      </section>
      </div>

      <section className="features-section">
        <Features/>
      </section>

      <section className="call-to-action">
        <h2>Start Planning Today!</h2>
        <p>Join TinyToes and make your event unforgettable.</p>
        <Link to={'/started'}><button>Get Started</button></Link>
      </section>
      <section>
      <main>
    <section className="container">
    <div className="title">
  <h2>Our Reviews</h2>
<div className="underline"></div>
    </div>
    <Review/>
    </section>
    
    </main>
      </section>

      <footer>
        <p>&copy; 2024 TinyToes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
