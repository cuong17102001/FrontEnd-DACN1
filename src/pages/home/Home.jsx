import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'

export const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <div className='postSide'>post</div>
        <div className='rightSide'>right</div>
    </div>
  )
}
