import React from 'react';
import '../assets/css/service.css';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
const AddService= () => {
  return (
    <>
    <NavBar/>
    <div className="baby-show">
      <h1>TinyToes</h1>
      <p>Affordable Party Packages</p>
      <div className="pricing-table">
        <div className="package basic">
          <h2>Add Theme</h2>
          <Link to={"/addtheme"}><button>Add</button></Link>
          <br></br>
          <Link to={'/viewtheme'}><button>View</button></Link>
        </div>
        <div className="package standard">
          <h2>Add Menu</h2>
          <Link to={"/addmenu"}><button>Add</button></Link>
          <br></br>
          <Link to={'/viewmenu'}><button>View</button></Link>
        </div>
        <div className="package premium">
          <h2>Add AddOns</h2>
          <Link to={"/addAddon"}><button>Add</button></Link>
          <br></br>
          <Link to={'/viewaddon'}><button>View</button></Link>
        </div>
      </div>
    </div>
    {/* <footer>
        <p>&copy; 2024 TinyToes. All rights reserved.</p>
      </footer> */}
    </>
  );
};

export default AddService;