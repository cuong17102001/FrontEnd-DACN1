import React, { useEffect, useState } from 'react'
import './Posts.css'
// import { PostsData } from '../../data/PostsData'
import { Post } from '../Post/Post'
import {useDispatch, useSelector} from 'react-redux'
import { getTimelinePosts } from '../../api/PostRequest'
// import { getTimelinePosts } from '../../actions/PostAction'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Posts = ({location}) => {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer.authData)
  // const {posts , loading} = useSelector((state) => state.postReducer)
  const [posts , setPosts] = useState([])

  const {id} = useParams()

  const userIdPosts = location === "profilePage" ? id : user._id


  useEffect(()=>{
    axios.get(`http://localhost:5000/post/${userIdPosts}/timeline`)
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
