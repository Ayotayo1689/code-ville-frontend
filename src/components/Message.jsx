import React, { useEffect, useState } from 'react'
import Staff from "../images/profile-icon.jpg"
import "../pages/DashApp.css"
import axios from 'axios'
import { Base_url } from './Url'

const Message = ({message}) => {
    const [data, setData] = useState([]);



  const loggedInUser = localStorage.getItem("loggedInUser")
  const fetchCoinData = async () => {

   

  const url = `${Base_url()}/users/${loggedInUser}`



  axios.get(url)
  .then(response => {
  // setLoading(false)
  setData(response.data.data)
  })
  .catch(error => {
  });

};

useEffect(() => {
  

  fetchCoinData();
  
}, []);

  


  return (
    <div className='chat-big'>
        <div className={message.senderId === loggedInUser ? "chat sender" : "chat receiver"}>
            <div className="chat-image avatar">
                <div className="rounded-full">
                    <img src={data.profilePic ? data.profilePic : Staff} alt=""  style={{
    borderRadius: "50%",
    objectFit: "cover", 
    // maxWidth: "100%",   
    // maxHeight: "100%"   
  }} /> 
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