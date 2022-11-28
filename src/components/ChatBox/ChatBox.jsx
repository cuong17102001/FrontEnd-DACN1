import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getUser } from '../../api/UserRequest';
import defaultProfile from '../../img/default.png'
import './ChatBox.css'
import { format } from 'timeago.js'
import InputEmoji from 'react-input-emoji'

const ChatBox = ({ chat, currentUser }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("123");

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);

    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser])

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        axios.get('/message/' + chat._id)
          .then(function (response) {
            setMessages(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })

      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat])

  const handleOnChange = (newMsg)=>{
    setNewMessage(newMsg)
  }

  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
          <div className='chat-header'>
            <div className='follower'>
              <div>
                {/* <div className="online-dot"></div> */}
                <img src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture :
                  defaultProfile} alt=""
                  className='followerImage'
                  style={{ width: "50px", height: "50px" }} />
                <div className='name' style={{ fontSize: "0.8rem" }}>
                  <span>{userData?.firstname} {userData?.lastname}</span>
                  {/* <span>Online</span> */}
                </div>
              </div>
            </div>
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
          </div>
          <div className="chat-body">
            {messages.map((message) => (
              <>
                <div className={message.senderId === currentUser ? "message own" : "message"}>
                  <span>{message.text}</span>
                  <span>{format(message.createdAt)}</span>
                </div>
              </>
            ))}
          </div>

          <div className='chat-sender'>
              <div>+</div>
              <InputEmoji
                value = {newMessage}
                onChange={handleOnChange}
              />
              <div className="send-button button">
              Send
              </div>
          </div>
        </>
        ) : <span className='chatbox-empty-message'>choose chat</span>}
      </div>
    </>
  )
}

export default ChatBox
