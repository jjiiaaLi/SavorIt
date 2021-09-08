import React,{useState, useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import '../index.css'

export default function AddPost(){
    const {userId} = useParams() // userId is a string here
    const [location, setLocation] = useState('');
    const [itemName, setItemName] = useState('');
    const [comment, setComment] = useState('');
    const [imgFile, setImgFile] = useState();
    
    const imageInput = useRef()

    const handleImageSelect = e =>{
        const file = e.target.files[0]
        setImgFile(file)
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
        console.log(imgFile)
    }

    return (
      <div>
        <form className="postForm" onSubmit={submitPost}>
          <img className="imgPreview" ref={imageInput} />
          <input type="file" onChange={handleImageSelect} />
          <lable className="postLable">Name the item</lable>
          <input
            className="postInput"
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
          />
          <lable className="postLable">Reviews/Comments</lable>
          <textarea
            className="postInput"
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />

          <button className="postBtn" type="submit">
            Submit Post
          </button>
        </form>
      </div>
    );
}