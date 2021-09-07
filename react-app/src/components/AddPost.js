import React,{useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';

export default function AddPost(){
    const {userId} = useParams() // userId is a string here
    const [location, setLocation] = useState('');
    const [itemName, setItemName] = useState('');
    const [comment, setComment] = useState('');
    const [image, setImage] = useState();

    const handleImageSelect = e =>{
        const imageUploaded = e.target.files[0]
        setImage(imageUploaded)
        console.log(imageUploaded)

    }

    const submitPost = (e)=>{
        e.preventDefault()
        console.log(image)
    }

    return(

        <div>
            <form onSubmit={submitPost}>
                {image && <img src={image}/>}
                <input type='file' value={image} onChange={handleImageSelect}/>
                <input value={itemName} onChange={e=>{setItemName(e.target.value)}}/>
                <input value={comment} onChange={e=>{setComment(e.target.value)}}/>
                
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}