import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ProfileImage from '../../img/default.png'
export const User = ({ person }) => {
    const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER
    const { user } = useSelector((state) => state.authReducer.authData)
    const [following , setFollowing] = useState(person.followers.includes(user._id))
    const handleFollow = () => {
        let strFollow = following ? "unfollow" : "follow"

        axios.put(process.env.REACT_APP_API_URL + `/user/${person._id}/${strFollow}` , {currentUserId : user._id})
            .then(res => {
                console.log(res.data);
            })
            .catch(error => console.log(error));

        setFollowing ((pev) => !pev)
    }
    console.log(following);
    return (
        <div>
            <div className='follower'>
                <div>
                    <img src={person.profilePicture ? publicFolder + person.profilePicture : ProfileImage} alt="" className='followerImg' />
                    <div className='name'>
                        <span>{person.firstname + " " + person.lastname}</span>
                        <span>@{person.username}</span>
                    </div>
                </div>
                <button onClick={handleFollow} className='button followButton'>
                    {following ? "Unfollow" : "Follow"}
                </button>
            </div>
        </div>
    )
}
