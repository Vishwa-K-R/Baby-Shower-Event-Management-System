import React, { useState } from 'react';
import axios from 'axios';
import '../assets/css/signup.css';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [signupFormData, setSignupFormData] = useState({
    name: '',  
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setSignupFormData({ ...signupFormData, [e.target.name]: e.target.value });
  };
  const navigate=useNavigate();
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/register', signupFormData);
      alert("Registeration successfull");
      navigate('/login');
      // Handle successful signup, e.g., redirect to another page
    } catch (error) {
      console.error(error);
      // Handle signup error
    }
  };

  return (
    <div className='sig'>
      <center><h2 className='h2'>Signup Page</h2></center>
      <form className='form1' onSubmit={handleSignupSubmit}>
        <div>
          <label className='label'>User Name:</label>
          <input className='input'
            type="text"
            name="name"  // Change 'userName' to 'name'
            value={signupFormData.name}  // Update to 'signupFormData.name'
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='label'>Email:</label>
          <input className='input'
            type="text"
            name="email"
            value={signupFormData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='label'>Password:</label>
          <input className='input'
            type="password"
            name="password"
            value={signupFormData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* <div>
          <label className='label'>Confirm Password:</label>
          <input className='input'
            type="password"
            name="confirmPassword"
            value={signupFormData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div> */}
        <div>
          <button className="button4" type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;