import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Cover from '../../img/default.jpg'
import Profile from '../../img/default.png'
import './ProfileCard.css'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"

export const ProfileCard = ({ location }) => {

    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useSelector(state => state.authReducer.authData)
    const { id } = useParams()

    const [userProfile, setUserProfile] = useState({})
    const [postUser, setPostUser] = useState({})

    useEffect(() => {

        if (id) {
            axios.get(process.env.REACT_APP_API_URL + `/user/${id}`)
                .then(res => {
                    setUserProfile(res.data)
                })
                .catch(error => console.log(error));
            axios.get(process.env.REACT_APP_API_URL + `/post/${id}/timeline`)
                .then(res => {
                    setPostUser(res.data)
                })
                .catch(error => console.log(error)); 
        } else {
            axios.get(process.env.REACT_APP_API_URL + `/user/${user._id}`)
                .then(res => {
                    setUserProfile(res.data)
                })
                .catch(error => console.log(error));
        }
    }, [])
    return (
        <div className="ProfileCard">
            <div className="ProfileImages">
                <img src={userProfile.coverPicture ? publicFolder + userProfile.coverPicture : Cover} alt='' />
                <img src={userProfile.profilePicture ? publicFolder + userProfile.profilePicture : Profile} alt='' />
            </div>
            <div className="ProfileName">
                <span>{userProfile.firstname} {userProfile.lastname}</span>
                <span>{userProfile.workAt ? userProfile.workAt : "Write about yourself"}</span>
            </div>
            <div className="FollowStatus">
                <hr />
                <div>
                    <div className='follow'>
                        <span>{userProfile.following ? userProfile.following.length : "0"}</span>
                        <span>Followings</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        <span>{userProfile.followers ? userProfile.followers.length : "0"}</span>
                        <span>Followers</span>
                    </div>

                    {location === "profilePage" && (
                        <>
                            <div className='vl'>

                            </div>
                            <div className="follow">
                                <span>{postUser ? postUser.length - 1 : "0"}</span>
                                <span>Posts</span>
                            </div>
                        </>
                    )}
                </div>
                <hr />
            </div>
            {location === "profilePage" ? "" : <span>
                <Link style={{ textDecoration: "none", color: "inherit" }} to={`/profile/${user._id}`}> My profile</Link>
            </span>}
        </div>
    )
}
