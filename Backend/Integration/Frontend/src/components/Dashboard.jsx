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
              <Link to={'/addService'}><span className="links_name">Add Service</span></Link>
            </a>
          </li>
        <li>
          <a href="#">
            <i class='bx bx-book-alt' ></i>
            <Link to={'/viewtheme'}><span class="links_name">Total order</span></Link>
          </a>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-cog' ></i>
            <Link to={'/eventtable'}><span class="links_name">Setting</span></Link>
          </a>
        </li>
        <li class="log_out">
          <a href="#">
            <i class='bx bx-log-out'></i>
            <Link to={'/logout'}><span class="links_name">Log out</span></Link>
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
                <div className="number">500</div>
              </div>
              <i className='bx bx-cart-alt cart'></i>
            </div>
            
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Event Completed</div>
            <div class="number">486</div>
          </div>
          <i class='bx bxs-cart-add cart two' ></i>
        </div>
        <div class="box">
          <div class="right-side">
            <div class="box-topic">Total Profit</div>
            <div class="number">$1000</div>
          </div>
          <i class='bx bx-cart cart three' ></i>
        </div>
            <div class="box">
          <div class="right-side">
            <div class="box-topic">Skipped</div>
            <div class="number">20</div>
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
              <img src="https://babyjoyjoy.com/wp-content/uploads/2022/06/Best-Girl-Baby-Shower-Themes-3-min.png" alt=""/>
              <span class="product">Baby Shower Basic</span>
            </a>
            <span class="price">$300</span>
          </li>
          <li>
            <a href="#">
               <img src="data:image/jpeg;base64,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" alt=""/>
              <span class="product">Baby shower Standard </span>
            </a>
            <span class="price">$500</span>
          </li>
          <li>
            <a href="#">
             <img src="https://babyjoyjoy.com/wp-content/uploads/2022/06/Best-Girl-Baby-Shower-Themes-3-min.png" alt=""/>
              <span class="product">Baby shower Basic</span>
            </a>
            <span class="price">$300</span>
          </li>
          <li>
            <a href="#">
              <img src="https://opt.toiimg.com/recuperator/img/toi/m-69838228/69838228.jpg&width=500&resizemode=4" alt=""/>
              <span class="product">Baby shower Premium</span>
            </a>
            <span class="price">$800</span>
          </li>
          <li>
            <a href="#">
              <img src="data:image/jpeg;base64,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" alt=""/>
              <span class="product">Baby shower Standard</span>
            </a>
            <span class="price">$500</span>
          </li>
          <li>
            <a href="#">
              <img src="https://opt.toiimg.com/recuperator/img/toi/m-69838228/69838228.jpg&width=500&resizemode=4" alt=""/>
              <span class="product">Baby shower Premium</span>
            </a>
            <span class="price">$800</span>
            </li>
          <li>
            <a href="#">
              <img src="https://babyjoyjoy.com/wp-content/uploads/2022/06/Best-Girl-Baby-Shower-Themes-3-min.png" alt=""/>
              <span class="product">Baby Shower Basic</span>
            </a>
            <span class="price">$300</span>
          </li>
<li>
            <a href="#">
             <img src="https://opt.toiimg.com/recuperator/img/toi/m-69838228/69838228.jpg&width=500&resizemode=4" alt=""/>
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