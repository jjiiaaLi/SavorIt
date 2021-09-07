import React,{useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import '../index.css'

export default function AddPost(){
    const {userId} = useParams() // userId is a string here
    const [location, setLocation] = useState('');
    const [itemName, setItemName] = useState('');
    const [comment, setComment] = useState('');
    
    const imageInput = useRef()

    const handleImageSelect = e =>{
        const file = e.target.files[0]
        const reader = new FileReader()
        const {current} = imageInput
        current.file = file
        reader.onload=(e)=>{
            current.src = e.target.result
        }
        reader.readAsDataURL(file)
    }

    const submitPost = (e)=>{
        e.preventDefault()
        
    }

    return(

        <div>
            <form onSubmit={submitPost}>
                <img className='imgPreview' ref={imageInput}/>
                <input type='file'  onChange={handleImageSelect}/>
                <input value={itemName} onChange={e=>{setItemName(e.target.value)}}/>
                <input value={comment} onChange={e=>{setComment(e.target.value)}}/>
                
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}