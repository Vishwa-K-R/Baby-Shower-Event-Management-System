import { useState } from 'react';
// import './App.css'
// import HomePage from './pages/home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import Review from './components/Review';
// import CardsContainer from './components/ProfileCard';
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
import AddService from './pages/AddService';
import AddThemePage from './components/AddTheme';
import AddAddonPage from './components/AddAddOn';
import AddMenuPage from './components/AddMenu';
import Login from './components/Login';
import Signup from './components/SignUp';
import ViewThemes from './components/ViewTheme';
import EditTheme from './components/EditTheme';
import ViewMenuPage from './components/ViewMenu';
import ViewAddonPage from './components/ViewAddOn';
import EditThemesPage from './components/EditTheme';
import EventTable from './components/EventTable';
function App() {
  return (
    <div>
    <Router>
    <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/form' element={<RSVPForm/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/logout' element={<Login/>}/>
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
         <Route path='/addService' element={<AddService/>}/>
         <Route path='/addtheme' element={<AddThemePage/>}/>
         <Route path='/addAddon' element={<AddAddonPage/>}/>
         <Route path='/addmenu' element={<AddMenuPage/>}/>
         <Route path='/viewtheme' element={<ViewThemes/>}/>
         <Route path='/viewmenu' element={<ViewMenuPage/>}/>
         <Route path='/viewaddon' element={<ViewAddonPage/>}/>
         <Route path='/edittheme' element={<EditThemesPage/>}/>
         <Route path='/eventtable' element={<EventTable/>}/>
      </Routes>
    </Router>
  </div>
  )
}

export default App;
