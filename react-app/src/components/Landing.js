import React,{useEffect, useState} from "react";
import {useSelector,useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import NearYou from "./NearYou";
import LogoutButton from './auth/LogoutButton';
import Logo from '../image/Savor.png';
import '../index.css'

export default function Landing(){
    const dispatch = useDispatch()
    const user = useSelector(state=>Object.values(state.session))
    

   

    return (
      <div className="landingContainer">
        <div className="landingTopBackground" />
        <div className="landingTopContent">
          {user[0] && <Link to={`/AddPost/${user[0].id}`} >New Post</Link>}
          <img className="logo" src={Logo} alt="logo"></img>
          <div className="searchContainer">
            <div className="searchDiv">
              <lable className="searchLable">Search</lable>
              <input className="searchInput" placeholder="Ramen" />
            </div>
            <div className="searchDiv">
              <lable className="searchLable"> Location</lable>
              <input className="searchInput" placeholder="Houston, Texas" />
            </div>
            <button className="searchBtn">Find</button>
          </div>
        </div>
          <NearYou />
        
      </div>
    );
}