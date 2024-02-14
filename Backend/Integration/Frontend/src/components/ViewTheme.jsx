// ViewThemes.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/css/viewtheme.css';

const ViewThemes = () => {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    // Fetch themes from the backend when the component mounts
    axios.get('http://localhost:8080/get')
      .then(response => {
        setThemes(response.data);
      })
      .catch(error => {
        console.error('Error fetching themes:', error);
      });
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <div className="view-themes-container">
    <h2>View Themes</h2>
    <div className="card-container">
      {themes.map(theme => (
        <div key={theme._id} className="card">
          <img src={theme.themeURL} alt={theme.themeName} className="card-image" />
          <div className="card-details">
            <strong>Theme Name:</strong> {theme.themeName}
            <br />
            <strong>Theme Cost:</strong> {theme.themeCost}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ViewThemes;
