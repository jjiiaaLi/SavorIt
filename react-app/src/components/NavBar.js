import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Logo from "../image/Savor.png";
import '../index.css'

const NavBar = () => {
  const user = useSelector(state=>Object.values(state.session))
  console.log(user[0])
  return (
    <nav>
      <div className="navContainer">
        <div className="navItem">
          <Link to="/" exact={true} className="navLink">
            Savor
          </Link>
        </div>
        {user[0] === null && (
          <div className="navItem">
            <Link to="/login" exact={true} className="navLink">
              Login
            </Link>
          </div>
        )}
        {user[0] === null && (
          <div className="navItem">
            <Link to="/sign-up" exact={true} className="navLink">
              Sign Up
            </Link>
          </div>
        )}
        <div className="navItem">
          <Link to="/users" exact={true} className="navLink">
            Users
          </Link>
        </div>
        {user[0] &&<div className="navItem">
          <LogoutButton />
        </div>}
      </div>
    </nav>
  );
}

export default NavBar;
