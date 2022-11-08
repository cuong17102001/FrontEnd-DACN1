import React, { useEffect, useState } from 'react'
import './Posts.css'
// import { PostsData } from '../../data/PostsData'
import { Post } from '../Post/Post'
import {useDispatch, useSelector} from 'react-redux'
import { getTimelinePosts } from '../../api/PostRequest'
// import { getTimelinePosts } from '../../actions/PostAction'
import axios from 'axios';

const Posts = () => {
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.authReducer.authData)
  // const {posts , loading} = useSelector((state) => state.postReducer)
  const [posts , setPosts] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:5000/post/${user._id}/timeline`)
    .then(res => {
      const listPost = res.data;
      // setPosts(listPost)

      const followingPosts = listPost.pop();
      setPosts(followingPosts.followingPosts)
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
