import React from 'react'
import './Post.css'

import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'

export const Post = ({data}) => {
  return (
    <div className='Post'>
        <img src={data.image} alt="" />

        <div className="postReact">
            <img src={data.liked ? Like : NotLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{color: "var(--gray)", fontSize : "12px"}}>{data.likes} Likes</span>
        <div className="detail">
            <span><b>{data.name}</b></span>
            <span>{data.desc}</span>
        </div>
    </div>
  )
}
