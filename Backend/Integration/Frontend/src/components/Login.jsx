import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import "../components/Login.css"
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  const navigate=useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', loginFormData);
      
       
    
     
    } catch (error) {
      alert("failed");
      // Handle login error
    }
  };
  const submit = () => {
    alert("Login Completed");
    
      navigate('/Userlogin');
   
  };

  return (
    <>
    <div className='coint'>
      <center><h2 className='h2'>Login Page</h2></center>
      <form className='form' onSubmit={handleLoginSubmit}>
        <div>
          <label className='label'>Email:</label>
          <input className='input'
            type="text"
            name="email"
            value={loginFormData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label className='label'>Password:</label>
          <input className='input'
            type="password"
            name="password"
            value={loginFormData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Link to={'/home'}><button className="button4"type="submit" onClick={submit}>Login</button></Link>
        </div>
      </form>
     
      <center><p className='p'>Don't have an account? 
        <Link to="/signup">  Sign up here</Link>
      </p></center>
    </div>
    </>
  );
};

export default Login;