import React, { useState } from 'react'
import './RightSide.css'

import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import { TrendCard } from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import { useDispatch } from 'react-redux'
import { logOut } from '../../actions/AuthAction'
import { Link } from 'react-router-dom'

export const RightSide = () => {
  const [modalOpened , setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const handleLogOut = ()=>{
    dispatch(logOut())
  }
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link style={{width :"1.5rem" , height:"1.5rem"}} to="/home">
        <img style={{width: "100%" , height:"100%"}} src={Home} alt=""/>
        </Link>
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" onClick={handleLogOut}/>
      </div>

      <TrendCard />

      <button className='button r-button'onClick={()=>setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}
