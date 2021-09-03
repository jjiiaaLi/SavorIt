import React from "react";
import { Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Logo from '../image/Savor.png';
import '../index.css'

export default function Landing(){

    return (
      <>
        <div className="landingTopBackground" />
        <div className="landingTopContent">
            <div></div>
            
            <p>Create An Account</p>
            <p>Login</p>
        </div>
      </>
    );
}