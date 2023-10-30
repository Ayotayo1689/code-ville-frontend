import React, { useEffect, useState } from 'react'
import Staff from "../images/profile-icon.jpg"
import "../pages/DashApp.css"
import axios from 'axios'
import { Base_url } from './Url'

const Message = ({message}) => {
    


  const loggedInUser = localStorage.getItem("loggedInUser")

  


  return (
    <div className='chat-big'>
        <div className={message.senderId === loggedInUser ? "chat sender" : "chat receiver"}>
            <div className="chat-image avatar">
                <div className="rounded-full">
                    <img src={Staff} alt="hellos" />
                </div>
            </div>
           <div className="content">
           <div className="chat-header">
               {message.name}
                <time>{message.createdAt}</time>
            </div>
            <div className="chat-bubble">{message.text}</div>
            {/* <div className="chat-footer">
                Delivered
            </div> */}
           </div>
        </div>
    </div>
  )
}

export default Message