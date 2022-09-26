import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'

export const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <PostSide/>
        <div className='rightSide'>right</div>
    </div>
  )
}
