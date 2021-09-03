import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Logo from "../image/Savor.png";
import '../index.css'

const NavBar = () => {
  return (
    <nav>
      <div className="navContainer">
        <div className='navLogoContainer'>
          <img className="logo" src={Logo} />
        </div>
        <div className= 'navBtnContainer'>
          <div className="navItem">
            <Link to="/" exact={true} className="navLink">
              Home
            </Link>
          </div>
          <div className="navItem">
            <Link to="/login" exact={true} className="navLink">
              Login
            </Link>
          </div>
          <div className="navItem">
            <Link to="/sign-up" exact={true} className="navLink">
              Sign Up
            </Link>
          </div>
          <div className="navItem">
            <Link to="/users" exact={true} className="navLink">
              Users
            </Link>
          </div>
          <div className="navItem">
            <LogoutButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
