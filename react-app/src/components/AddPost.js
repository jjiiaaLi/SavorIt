import React,{useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

export default function AddPost(){
    const userId = useParams()
    

    const submitPost = (e)=>{
        e.preventDefault()
        
    }

    return(

        <div>
            <form onSubmit={submitPost}>
                <input>Location</input>
                <input>itemName</input>
                <input>comment</input>
                <input>image</input>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}