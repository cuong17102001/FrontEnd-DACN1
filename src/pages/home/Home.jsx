import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import { RightSide } from '../../components/RightSide/RightSide'

export const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide location="homePage"/>
        <PostSide location="homePage"/>
        <RightSide/>
    </div>
  )
}
