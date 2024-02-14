
import React, { useState } from 'react';
import '../assets/css/addmenu.css';
import axios from 'axios';

const AddMenuPage = ({ onAddMenu }) => {
  const [foodMenuType, setFoodType] = useState('');
  const [foodMenuItems, setFoodItems] = useState('');
  const [foodMenuCost, setFoodCost] = useState('');
  const handleAddMenu = () => {
    const newMenu = {
      foodMenuType,
      foodMenuItems,
      foodMenuCost,
    };

    // Make a POST request to your backend API
    axios.post('http://localhost:8080/fpost', newMenu)
      .then(response => {
        console.log('Menu added successfully:', response.data);
        // Call the provided callback to update state or perform additional actions
        // onAddMenu(newMenu);
        // Reset form fields
        setFoodType('');
        setFoodItems('');
        setFoodCost('');
        alert('Menu added');
      })
      .catch(error => {
        console.error('Error adding menu:', error);
        // Handle error scenarios as needed
      });
  };

  return (
    <div className="add-menu-container">
      <h2>Add New Menu</h2>
      <form>
        <label htmlFor="menutype">Menu Type:</label>
        <input
          type="text"
          id="menutype"
          value={foodMenuType}
          onChange={(e) => setFoodType(e.target.value)}
        />

        <label htmlFor="menuitems">Menu Items:</label>
        <input
          type='text'
          id="menuitems"
          value={foodMenuItems}
          onChange={(e) => setFoodItems(e.target.value)}
        />
        <label htmlFor="menucost">Menu Cost:</label>
        <input
          type='text'
          id="menucost"
          value={foodMenuCost}
          onChange={(e) => setFoodCost(e.target.value)}
        />

        <button type="button" onClick={handleAddMenu}>
          Add Menu
        </button>
      </form>
    </div>
  );
};

export default AddMenuPage;
