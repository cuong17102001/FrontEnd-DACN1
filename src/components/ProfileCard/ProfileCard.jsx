import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

export const ProfileCard = () => {
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={Cover} alt='' />
            <img src={Profile} alt='' />
        </div>
        <div className="ProfileName">
            <span>sadfsadf</span>
            <span>xcvzxcvzxcvxzcv</span>
        </div>
        <div className="FollowStatus">
            <hr/>
            <div>
                <div className='follow'>
                    <span>3,123</span>
                    <span>Followings</span>
                </div>
                <div className='vl'></div>
                <div className='follow'>
                    <span>548</span>
                    <span>Followers</span>
                </div>
            </div>
            <hr/>
        </div>
        <span>My profile</span>
    </div>
  )
}
