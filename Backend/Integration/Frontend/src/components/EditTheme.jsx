// EditThemesPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/editthem.css';

const EditThemesPage = () => {
  const [themes, setThemes] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [editedTheme, setEditedTheme] = useState({
    themeName: '',
    themeURL: '',
    themeCost: '',
  });

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

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setEditedTheme({
      themeName: theme.themeName,
      themeURL: theme.themeURL,
      themeCost: theme.themeCost,
    });
  };

  const handleEditTheme = () => {
    // Make a PUT request to update the selected theme
    axios.put(`http://localhost:8080/themes/${selectedTheme._id}`, editedTheme)
      .then(response => {
        console.log('Theme edited successfully:', response.data);
        // Refresh themes after editing
        axios.get('http://localhost:8080/get')
          .then(response => {
            setThemes(response.data);
          })
          .catch(error => {
            console.error('Error fetching themes:', error);
          });
        // Reset selected theme and edited theme
        setSelectedTheme(null);
        setEditedTheme({
          themeName: '',
          themeURL: '',
          themeCost: '',
        });
      })
      .catch(error => {
        console.error('Error editing theme:', error);
        // Handle error scenarios as needed
      });
  };

  return (
    <div className="edit-themes-container">
      <h2>Edit Themes</h2>
      <div className="theme-list">
        {themes.map(theme => (
          <div
            key={theme._id}
            className={`theme-item ${theme === selectedTheme ? 'selected' : ''}`}
            onClick={() => handleThemeSelect(theme)}
          >
            {theme.themeName}
          </div>
        ))}
      </div>
      {selectedTheme && (
        <div className="edit-form">
          <h3>Edit Theme</h3>
          <label htmlFor="themeName">Theme Name:</label>
          <input
            type="text"
            id="themeName"
            value={editedTheme.themeName}
            onChange={(e) => setEditedTheme({ ...editedTheme, themeName: e.target.value })}
          />
          <label htmlFor="themeURL">Theme URL:</label>
          <input
            type="text"
            id="themeURL"
            value={editedTheme.themeURL}
            onChange={(e) => setEditedTheme({ ...editedTheme, themeURL: e.target.value })}
          />
          <label htmlFor="themeCost">Theme Cost:</label>
          <input
            type="number"
            id="themeCost"
            value={editedTheme.themeCost}
            onChange={(e) => setEditedTheme({ ...editedTheme, themeCost: e.target.value })}
          />
          <button onClick={handleEditTheme}>Save Changes</button>
        </div>
      )}
    </div>
  );
};

export default EditThemesPage;
