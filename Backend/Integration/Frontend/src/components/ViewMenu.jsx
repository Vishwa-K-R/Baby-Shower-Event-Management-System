// ViewMenuPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/viewmenu.css';

const ViewMenuPage = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    // Fetch menus from the backend when the component mounts
    axios.get('http://localhost:8080/fget')
      .then(response => {
        setMenus(response.data);
      })
      .catch(error => {
        console.error('Error fetching menus:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div className="view-menu-container">
      <h2>View Menu</h2>
      <div className="card-container">
        {menus.map(menu => (
          <div key={menu._id} className="card">
            <div className="card-details">
              <strong>Menu Type:</strong> {menu.foodMenuType}
              <br />
              <strong>Menu Items:</strong> {menu.foodMenuItems}
              <br />
              <strong>Menu Cost:</strong> {menu.foodMenuCost}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMenuPage;
