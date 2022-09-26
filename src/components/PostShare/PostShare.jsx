import React, {useState , useRef} from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"

const PostShare = () => {

    const [image , setImage] = useState(null)
    const imageRef = useRef()
    
    return (
        <div className='PostShare'>
            <img src={ProfileImage} alt="" />
            <div>
                <input type="text" placeholder='What is happening' />
                <div className="postOptions">
                    <div className="option" style={{color: "var(--photo)"}}>
                        <UilScenery /> Photo
                    </div>
                    <div className="option" style={{color: "var(--video)"}}>
                        <UilPlayCircle /> Video
                    </div>
                    <div className="option" style={{color: "var(--location)"}}>
                        <UilLocationPoint /> Location
                    </div>
                    <div className="option" style={{color: "var(--shedule)"}}>
                        <UilSchedule /> Shedule
                    </div>
                    <button className='button ps-button'>
                        Share
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PostShare