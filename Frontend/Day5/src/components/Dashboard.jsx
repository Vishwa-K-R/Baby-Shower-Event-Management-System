import React from 'react';
import '../assets/css/dash.css'
import pro from '../assets/images/profile.png';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo-details">
          <i className='bx bxl-c-plus-plus'></i>
          <span className="logo_name">TinyToes</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className='bx bx-grid-alt'></i>
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-box'></i>
              <Link to='/aprofile'><span className="links_name">Profile</span></Link>
            </a>
          </li>
          <li>
            <a href="#">
              <i className='bx bx-list-ul'></i>
              <span className="links_name">Add Service</span>
            </a>
          </li>
          <li>
          <a href="#">
            <i class='bx bx-pie-chart-alt-2' ></i>
            <span class="links_name">Analytics</span>
          </a>
        </li>
        {/* <li>
          <a href="#">
            <i class='bx bx-coin-stack' ></i>
            <span class="links_name">Stock</span>
          </a>
        </li> */}
        <li>
          <a href="#">
            <i class='bx bx-book-alt' ></i>
            <span class="links_name">Total order</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-user' ></i>
            <span class="links_name">Design Team</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-message' ></i>
            <span class="links_name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-heart' ></i>
            <span class="links_name">Favrorites</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-cog' ></i>
            <span class="links_name">Setting</span>
          </a>
        </li>
        <li class="log_out">
          <a href="#">
            <i class='bx bx-log-out'></i>
            <span class="links_name">Log out</span>
          </a>
        </li>
        </ul>
      </div>

      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i className='bx bx-menu sidebarBtn'></i>
            <span className="dashboard">Dashboard</span>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className='bx bx-search'></i>
          </div>
          <div className="profile-details">
            <img src={pro} alt="" />
            <span className="admin_name">Prem Shahi</span>
            <i className='bx bx-chevron-down'></i>
          </div>
        </nav>

        <div className="home-content">
          <div className="overview-boxes">
            <div className="box">
              <div className="right-side">
                <div className="box-topic">Event Booked</div>
                <div className="number">40,876</div>
                <div className="indicator">
                  <i className='bx bx-up-arrow-alt'></i>
                  <span className="text">Up from yesterday</span>
                </div>
              </div>
              <i className='bx bx-cart-alt cart'></i>
            </div>
            
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Event Completed</div>
            <div class="number">38,876</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bxs-cart-add cart two' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Profit</div>
            <div class="number">$12,876</div>
            <div class="indicator">
              <i class='bx bx-up-arrow-alt'></i>
              <span class="text">Up from yesterday</span>
            </div>
          </div>
          <i class='bx bx-cart cart three' ></i>
        </div>
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Return</div>
            <div class="number">11,086</div>
            <div class="indicator">
              <i class='bx bx-down-arrow-alt down'></i>
              <span class="text">Down From Today</span>
            </div>
          </div>
          <i class='bx bxs-cart-download cart four' ></i>
        </div>
      </div>
          

      <div class="sales-boxes">
        <div class="recent-sales box">
          <div class="title">Recent Booked</div>
          <div class="sales-details">
            <ul class="details">
              <li class="topic">Date</li>
              <li><a href="#">02 Jan 2021</a></li>
              <li><a href="#">05 Jan 2021</a></li>
              <li><a href="#">10 Jan 2021</a></li>
              <li><a href="#">14 Jan 2021</a></li>
              <li><a href="#">19 Jan 2021</a></li>
              <li><a href="#">24 Jan 2021</a></li>
              <li><a href="#">29 Jan 2021</a></li>
            </ul>
            <ul class="details">
            <li class="topic">Customer</li>
            <li><a href="#">Alex Doe</a></li>
            <li><a href="#">David Mart</a></li>
            <li><a href="#">Roe Parter</a></li>
            <li><a href="#">Diana Penty</a></li>
            <li><a href="#">Martin Paw</a></li>
            <li><a href="#">Doe Alex</a></li>
            <li><a href="#">Aiana Lexa</a></li>
            <li><a href="#">Rexel Mags</a></li>
             <li><a href="#">Tiana Loths</a></li>
          </ul>
          <ul class="details">
            <li class="topic">Status</li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            <li><a href="#">Returned</a></li>
            <li><a href="#">Delivered</a></li>
            <li><a href="#">Pending</a></li>
            <li><a href="#">Returned</a></li>
            <li><a href="#">Delivered</a></li>
             <li><a href="#">Pending</a></li>
            <li><a href="#">Delivered</a></li>
          </ul>
          <ul class="details">
            <li class="topic">Total</li>
            <li><a href="#">$204.98</a></li>
            <li><a href="#">$24.55</a></li>
            <li><a href="#">$25.88</a></li>
            <li><a href="#">$170.66</a></li>
            <li><a href="#">$56.56</a></li>
            <li><a href="#">$44.95</a></li>
            <li><a href="#">$67.33</a></li>
             <li><a href="#">$23.53</a></li>
             <li><a href="#">$46.52</a></li>
          </ul>
          </div>
          <div class="button">
            <a href="#">See All</a>
          </div>
        </div>
        <div class="top-sales box">
          <div class="title">Top Booked Themes</div>
          <ul class="top-sales-details">
            <li>
            <a href="#">
              <img src="images/sunglasses.jpg" alt=""/>
              <span class="product">Baby Shower Basic</span>
            </a>
            <span class="price">$300</span>
          </li>
          <li>
            <a href="#">
               <img src="images/jeans.jpg" alt=""/>
              <span class="product">Baby shower Standard </span>
            </a>
            <span class="price">$500</span>
          </li>
          <li>
            <a href="#">
             <img src="images/nike.jpg" alt=""/>
              <span class="product">Baby shower Basic</span>
            </a>
            <span class="price">$300</span>
          </li>
          <li>
            <a href="#">
              <img src="images/scarves.jpg" alt=""/>
              <span class="product">Baby shower Premium</span>
            </a>
            <span class="price">$800</span>
          </li>
          <li>
            <a href="#">
              <img src="images/blueBag.jpg" alt=""/>
              <span class="product">Baby shower Standard</span>
            </a>
            <span class="price">$500</span>
          </li>
          <li>
            <a href="#">
              <img src="images/bag.jpg" alt=""/>
              <span class="product">Baby shower Premium</span>
            </a>
            <span class="price">$800</span>
            </li>
          <li>
            <a href="#">
              <img src="images/addidas.jpg" alt=""/>
              <span class="product">Baby Shower Basic</span>
            </a>
            <span class="price">$300</span>
          </li>
<li>
            <a href="#">
             <img src="images/shirt.jpg" alt=""/>
              <span class="product">Baby shower Premium</span>
            </a>
            <span class="price">$800</span>
          </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Dashboard;