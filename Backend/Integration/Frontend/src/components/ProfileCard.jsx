import React, { useState } from 'react';
import '../assets/css/Pro.css'; // Import the CSS file for styling
import NavBar from './Navbar';

const Profile = () => {
  const [isEditing, setEditing] = useState(false);
  const [fname, setFName] = useState('Vishwa');
  const [lname, setLName] = useState('K R');
  const [email, setEmail] = useState('vishwa@gmail.com');
  const [role,setRole] = useState('Admin');
  const [profilePicture, setProfilePicture] = useState('https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'); // Placeholder image

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    // Add logic to save changes to the backend or perform any other necessary actions
  };

  return (
    <>
    <NavBar/>
    <br></br>
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-picture">
        <img src={profilePicture} alt="Profile" />
        {isEditing && (
          <div className="edit-overlay">
            <label htmlFor="profilePictureInput" className="edit-icon">
              📷
            </label>
            <input
              type="file"
              id="profilePictureInput"
              accept="image/*"
              onChange={(e) => setProfilePicture(URL.createObjectURL(e.target.files[0]))}
            />
          </div>
        )}
      </div>
      <div className="profile-details">
        <div className="profile-field">
          <label>First Name:</label>
          {isEditing ? (
            <input type="text" value={fname} onChange={(e) => setFName(e.target.value)} />
          ) : (
            <span>{fname}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Last Name:</label>
          {isEditing ? (
            <input type="text" value={lname} onChange={(e) => setLName(e.target.value)} />
          ) : (
            <span>{lname}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Email:</label>
          {isEditing ? (
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          ) : (
            <span>{email}</span>
          )}
        </div>
        <div className="profile-field">
          <label>Role:</label>
          {isEditing ? (
            <input type="email" value={role} onChange={(e) => setRole(e.target.value)} />
          ) : (
            <span>{role}</span>
          )}
        </div>
      </div>
      <div className="profile-actions">
        {isEditing ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit Profile</button>
        )}
      </div>
    </div>
    </>
  );
};

export default Profile;
