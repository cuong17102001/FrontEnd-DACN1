import React, { useEffect, useState } from 'react'
import './Posts.css'
import { Post } from '../Post/Post'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Posts = ({location}) => {
  const {user} = useSelector((state) => state.authReducer.authData)
  const [posts , setPosts] = useState([])

  const {id} = useParams()

  const userIdPosts = location === "profilePage" ? id : user._id


  useEffect(()=>{
    axios.get(process.env.REACT_APP_API_URL+`/post/${userIdPosts}/timeline`)
    .then(res => {
      const listPost = res.data;
      
      let allPost = null
      if (location === "profilePage") {
        listPost.pop();
        allPost = listPost
        setPosts(allPost)
      }
      else if(location === "homePage"){
        allPost = listPost.pop();
        setPosts(allPost.followingPosts)  
      }
    })
    .catch(error => console.log(error));
  },[])
  return (
    <div className='Posts'>
      { posts.map((post , id) =>{
        return <Post data={post} id={id}/>
      })}
    </div>
  )
}

export default Posts
