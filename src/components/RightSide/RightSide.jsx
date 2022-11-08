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

export const RightSide = () => {
  const [modalOpened , setModalOpened] = useState(false);
  const dispatch = useDispatch();
  const handleLogOut = ()=>{
    dispatch(logOut())
  }
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" onClick={handleLogOut}/>
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>

      <TrendCard />

      <button className='button r-button'onClick={()=>setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}
