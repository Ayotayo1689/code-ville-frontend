// import React, { useEffect, useState } from 'react'
// import Staff from "../images/profile-icon.jpg"
// import "../pages/DashApp.css"
// import axios from 'axios'
// import { Base_url } from './Url'

// const Message = ({message}) => {
//     const [data, setData] = useState([]);
//     const [userProfiles, setUserProfiles ] = useState([]);

//     const loggedInUser = localStorage.getItem("loggedInUser")
//     const userText = message
//     // userProfiles = get all users from api
//     const currentUserID = loggedInUser

//     const fetchAlluser = async () => {

   

//         const url = `${Base_url()}/users`
      
      
      
//         axios.get(url)
//         .then(response => {
//             setUserProfiles(response.data) 
//         })
//         .catch(error => {
//         });
      
//       };


//   const fetchCoinData = async () => {

   

//   const url = `${Base_url()}/users/${loggedInUser}`



//   axios.get(url)
//   .then(response => {
//   // setLoading(false)
//   setData(response.data.data)
//   })
//   .catch(error => {
//   });

// };

// useEffect(() => {
  
//     fetchAlluser()
//     fetchCoinData();
  
// }, []);

  


//   return (
//     <div className='chat-big'>
//         <div className={message.senderId === loggedInUser ? "chat sender" : "chat receiver"}>
//             <div className="chat-image avatar">
//                 <div className="rounded-full">
//                     <img src={message.senderId === loggedInUser  ? data.profilePic : message.pic } alt=""  style={{
//     borderRadius: "50%",
//     objectFit: "cover", 
//     // maxWidth: "100%",   
//     // maxHeight: "100%"   
//   }} /> 
//                </div>
//             </div>
//            <div className="content">
//            <div className="chat-header">
//                {message.name}
//                 <time>{message.createdAt}</time>
//             </div>
//             <div className="chat-bubble">{message.text}</div>
//             {/* <div className="chat-footer">
//                 Delivered
//             </div> */}
//            </div>
//         </div>
//     </div>
//   )
// }

// export default Message


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Staff from "../images/profile-icon.jpg";
import "../pages/DashApp.css";

const Message = ({ message, userProfiles, userData, loggedInUser }) => {
    // console.log(userProfiles)
  return (
    <div className='chat-big'>
      <div className={message.senderId === loggedInUser ? "chat sender" : "chat receiver"}>
        <div className="chat-image avatar">
          <div className="rounded-full">
            <img
              src={
                message.senderId === loggedInUser 
                  ? (userData && userData.profilePic) || Staff // Use Staff image if data is not available
                  : (userProfiles.find(user => user.id === message.senderId)?.profilePic) || Staff 
              }
              alt=""
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="content">
          <div className="chat-header">
            {message.name}
            <time>{message.createdAt}</time>
          </div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
