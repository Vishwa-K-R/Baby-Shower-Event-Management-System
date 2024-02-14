import React, { useState } from 'react';
import '../assets/css/addtheme.css';
import axios from 'axios';

const AddThemePage = () => {
  const [themeName, setThemeName] = useState('');
  const [themeURL, setThemeUrl] = useState('');
  const [themeCost,setThemeCost] = useState('');

  const handleAddTheme = () => {
    // Create an object with the data to send to the backend
    const themeData = {
      themeName,
      themeURL,
      themeCost,
    };

    // Make a POST request to your backend API
    axios.post('http://localhost:8080/post', themeData)
      .then(response => {
        console.log('Theme added successfully:', response.data);
        // Reset form fields
        setThemeName('');
        setThemeUrl('');
        setThemeCost('');
        alert('Theme added successfully!');
      })
      .catch(error => {
        console.error('Error adding theme:', error);
        // Handle error scenarios as needed
        alert('Error adding theme. Please try again.');Þ
      });
  };

  return (
    <div className="add-theme-container">
      <h2>Add New Theme</h2>
      <form>
        <label htmlFor="themeName">Theme Name:</label>
        <input
          type="text"
          id="themeName"
          value={themeName}
          onChange={(e) => setThemeName(e.target.value)}
          required
        />

        <label htmlFor="themeurl">Theme URL:</label>
        <input
          type='text'
          id="themeurl"
          value={themeURL}
          onChange={(e) => setThemeUrl(e.target.value)}
          required
        />
        <label htmlFor="themeCost">Theme Cost:</label>
        <input
          type='number'
          id="themeCost"
          value={themeCost}
          onChange={(e) => setThemeCost(e.target.value)}
          required
        />

        <button type="button" onClick={handleAddTheme}>
          Add Theme
        </button>
      </form>
    </div>
  );
};

export default AddThemePage;
