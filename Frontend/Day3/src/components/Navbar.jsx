import './nav.css'
import logo from "../assets/images/Logo2.png"
import { Link } from 'react-router-dom';
function NavBar() {
  return ( 
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src={logo} height={76} width={230}alt="Logo"></img>
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
        <Link to={"/home"}><a class="nav-link" href="#">Home</a></Link>
      </li>
      <li class="nav-item">
        <Link to={"/package"}><a class="nav-link" href="#">Packages</a></Link>
      </li>
      <li class="nav-item">
        <Link to={"/event"}><a class="nav-link" href="#">Book Event</a></Link>
      </li>
      <li class="nav-item">
        <Link to={'/view'}><a class="nav-link" href="#">View Book Event</a></Link>
      </li>
      <li class="nav-item">
        <Link to={'/about'}><a class="nav-link" href="#">About Us</a></Link>
      </li>
    </ul>

  <div class="btn-group">
    <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
      Profile
    </button>
    <div class="dropdown-menu">
      <Link to='/pro'><a class="dropdown-item" href="/profile">Profile</a></Link>
      <Link to={"/login"}><a class="dropdown-item">Login/SignUp</a></Link>
      <div class="dropdown-divider"></div>
      <Link to={"/logout"}><a class="dropdown-item" href="#">Logout</a></Link>
    </div>
  </div>

  </div>
</nav></>
   );
}

export default NavBar;
