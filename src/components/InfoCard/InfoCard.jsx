import React, { useEffect, useState } from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../ProfileModal/ProfileModal';
import { useParams } from "react-router-dom"
import * as UserApi from "../../api/UserRequest"
import axios from 'axios';
import { useSelector } from 'react-redux'

export const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);
    const params = useParams();
    const [profileUser, setProfileUser] = useState({})
    const { user } = useSelector((state) => state.authReducer.authData)

    const profileUserId = params.id

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL + `/user/${profileUserId}`)
            .then(res => {
                setProfileUser(res.data)
            })
            .catch(error => console.log(error));
    }, [profileUserId])

    return (
        <div className="InfoCard">
            <div className="InfoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId ? (
                    <div>
                        <UilPen width='2rem' height='1.2rem' onClick={() => setModalOpened(true)} />
                        <ProfileModal modalOpened={modalOpened} setModalOpened={setModalOpened} data={user}/>
                    </div>
                ) : ""}

            </div>
            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                {profileUser.relationship ? (
                    <span>{profileUser.relationship}</span>
                ) : ""}

            </div>
            <div className="info">
                <span>
                    <b>Live in </b>
                </span>
                {profileUser.livesin ? (
                    <span>{profileUser.livesin}</span>
                ) : ""}
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                {profileUser.workAt ? (
                    <span>{profileUser.workAt}</span>
                ) : ""}
            </div>
        </div>
    )
}
