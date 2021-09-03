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
          <div className="searchContainer">
            <div className="searchDiv">
              <lable className="searchLable">Search</lable>
              <input className="searchInput" placeholder='Ramen' />
            </div>
            <div className="searchDiv">
              <lable className="searchLable">Location</lable>
              <input className="searchInput" placeholder='Houston, Texas'/>
            </div>

            <button className="searchBtn">Find</button>
          </div>
        </div>
      </div>
    );
}