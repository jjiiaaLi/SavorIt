import React from "react";
import Logo from '../image/Savor.png';
import '../index.css'

export default function Landing(){

    return(
        <div className='phoneScreen'>
            <img className='logo' src={Logo} alt='logo'></img>
        </div>
    )
}