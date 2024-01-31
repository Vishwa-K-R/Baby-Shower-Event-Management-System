import React from 'react'
import { useState } from 'react'
import './Login.css'
import bg from '../assets/images/Bg2.jpg'
import user_icon from '../assets/images/person.png'
import email_icon from '../assets/images/email.png'
import password_icon from '../assets/images/password.png'
import { Link } from 'react-router-dom'

export const AdminLogin = () => {
    const[action,setAction]=useState("Login");
  return (
    <body>
      <div className='container'>
          {/* <img src={bg} alt=""></img> */}
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div>


            </div>:<div className="input">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={email_icon} alt=""/>
                <input type="email" placeholder='Email Id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt=""/>
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="sign Up"?<div>


        </div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
       
        <div className="sumbit-container" style={{display:'flex' , gap:'60px' , margin:'60px'}}>
            
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}><Link to={'/signup'}>Sign Up</Link></div>
            <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}><Link to={'/login'}>Login</Link></div>
        </div>
    </div>
    </body>
  ) 
}


