import { useState } from 'react';
// import './App.css'
// import HomePage from './pages/home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Review from './components/Review';
// import CardsContainer from './components/ProfileCard';
import { AdminLogin } from './components/Login';
// import Food from './pages/MDisplay';
import HomePage from './pages/home';
import RSVPForm from './components/Rsvp';
import BookEventForm from './pages/Event';
import Food from './pages/MDisplay';
// import Service from './pages/Details';
import Dashboard from './components/Dashboard';
import Profile from './components/ProfileCard';
import Packages from './components/Packages';
import View from './components/ViewBooked';
import AboutUs from './pages/about';
function App() {
  return (
    <div>
    <Router>
    <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/form' element={<RSVPForm/>}/>
         <Route path='/login' element={<AdminLogin/>}/>
         <Route path='/logout' element={<AdminLogin/>}/>
         <Route path='/event' element={<BookEventForm/>}/>
         <Route path='/menu' element={<Food/>}/>
         <Route path='/pro' element={<Dashboard/>}/>
         <Route path='/aprofile' element={<Profile/>}/>
         <Route path='/package' element={<Packages/>}/>
         <Route path='/signup' element={<HomePage/>}/>
         <Route path='/started' element={<Packages/>}/>
         <Route path='/home' element={<HomePage/>}/>
         <Route path='/view' element={<View/>}/>
         <Route path='/about' element={<AboutUs/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App;
