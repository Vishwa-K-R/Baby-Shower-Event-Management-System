// ViewAddonPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/viewaddon.css';

const ViewAddonPage = () => {
  const [addons, setAddons] = useState([]);

  useEffect(() => {
    // Fetch addons from the backend when the component mounts
    axios.get('http://localhost:8080/addget')
      .then(response => {
        setAddons(response.data);
      })
      .catch(error => {
        console.error('Error fetching addons:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div className="view-addon-container">
      <h2>View Addons</h2>
      <div className="card-container">
        {addons.map(addon => (
          <div key={addon._id} className="card">
            <div className="card-details">
              <strong>Addon Name:</strong> {addon.addonName}
              <br />
              <strong>Addon Price:</strong> {addon.addonPrice}
              <br />
              <strong>Addon Description:</strong> {addon.addonDescription}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAddonPage;
