// AddAddonPage.jsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useState } from 'react';
import '../assets/css/addAddon.css';
import axios from 'axios';

const AddAddonPage = ({ onAddAddon }) => {
  const [addonName, setAddonName] = useState('');
  const [addonPrice, setAddonPrice] = useState('');
  const [addonDescription, setAddonDescription] = useState('');
  const notifySuccess = () => toast.success('Added Successfully');
  const notifyError = () => toast.error('Error Adding Addon');

  const handleAddAddon = () => {
    const newAddon = {
      addonName,
      addonPrice,
      addonDescription,
    };

    // Make a POST request to your backend API
    axios.post('http://localhost:8080/addpost', newAddon)
      .then(response => {
        console.log('Addon added successfully:', response.data);
      
        // setAddonName('');
        // setAddonPrice('');
        // setAddonDescription('');
        // Show success notification
        notifySuccess();
      })
      .catch(error => {
        console.error('Error adding addon:', error);
        // Show error notification
        notifyError();
      });
  };

  return (
    <div className="add-addon-container">
      <h2>Add New Addon</h2>
      <form>
        <label htmlFor="addonName">Addon Name:</label>
        <input
          type="text"
          id="addonName"
          value={addonName}
          required
          onChange={(e) => setAddonName(e.target.value)}
        />
         <label htmlFor="addonPrice">Addon Price:</label>
        <input
          type="number"
          id="addonPrice"
          value={addonPrice}
          onChange={(e) => setAddonPrice(e.target.value)}
          required
        />

        <label htmlFor="addonDescription">Addon Description:</label>
        <textarea
          id="addonDescription"
          value={addonDescription}
          onChange={(e) => setAddonDescription(e.target.value)}
        />

        <button type="button" onClick={handleAddAddon}>
          Add Addon
        </button>
        <ToastContainer  position="top-center"
  reverseOrder={false}/>
      </form>
    </div>
  );
};

export default AddAddonPage;
