import React from 'react'
import { useSelector } from 'react-redux'
import Cover from '../../img/default.jpg'
import Profile from '../../img/default.png'
import './ProfileCard.css'
import {Link} from 'react-router-dom'

export const ProfileCard = () => {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useSelector(state => state.authReducer.authData)
    
console.log(user);
    const ProfilePage = false;
  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img src={user.coverPicture ? publicFolder + user.coverPicture : Cover} alt='' />
            <img src={user.profilePicture ? publicFolder + user.profilePicture : Profile} alt='' />
        </div>
        <div className="ProfileName">
            <span>{user.firstname} {user.lastname}</span>
            <span>{user.workAt ? user.workAt : "Write about yourself"}</span>
        </div>
        <div className="FollowStatus">
            <hr/>
            <div>
                <div className='follow'>
                    <span>{user.following.length}</span>
                    <span>Followings</span>
                </div>
                <div className='vl'></div>
                <div className='follow'>
                    <span>{user.followers.length}</span>
                    <span>Followers</span>
                </div>

                {ProfilePage && (
                   <>
                    <div className='vl'>

                    </div>
                    <div className="follow">
                        <span>3</span>
                        <span>Posts</span>
                    </div>
                   </>
                )}
            </div>
            <hr/>
        </div>
        {ProfilePage ? "" : <span>
            <Link style={{textDecoration : "none" , color : "inherit"}} to={`/profile/${user._id}`}> My profile</Link>
            </span>}
    </div>
  )
}
