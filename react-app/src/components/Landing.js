import React from "react";
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Logo from '../image/Savor.png';
import '../index.css'

export default function Landing(){

    return (
      <div className="landingContainer">
        <div className="landingTopBackground" />
        <div className="landingTopContent">
          <img className="logo" src={Logo} alt="logo"></img>
          <div>
            <input></input>
            <input></input>
            <button>Find</button>
          </div>
        </div>
      </div>
    );
}