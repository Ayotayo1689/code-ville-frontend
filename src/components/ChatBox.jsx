// import React, { useEffect, useRef, useState } from 'react'
// import Message from './Message'
// import { collection, query, where, onSnapshot, QuerySnapshot, orderBy, limit } from "firebase/firestore"
// import { db } from '../firebase'
// import "./Navbar.css";


 
// const ChatBox = () => {
//     const [messages, setMessages] = useState([]);
//     const messagesEndRef = useRef();
    
//     const scrollToBottom = () => {
//         messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//     };
    
//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

   
//    useEffect(()=>{
//     const q = query(collection(db, "messages"),
//     orderBy("date"),
//     limit(50)
    
//     );
//     const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
//         const messages = [];
//         QuerySnapshot.forEach((doc)=>{
//             console.log(doc.data()); 
//             messages.push({...doc.data(),id: doc.id});
//         });
//         setMessages(messages)
//     })

// return ()=> unsubscribe;

//    }, [])
    
//   return (
//     <div className='message-big' style={{padding:"20px 10px"}} >
//         {messages.map(message =>(
//             <Message key={message.id} message={message} />
//         ))}
//         <div ref={messagesEndRef}></div>
//     </div>
//   )
// }

// export default ChatBox





import React, { useEffect, useRef, useState } from 'react';
import Message from './Message';
import axios from 'axios';
import Staff from "../images/profile-icon.jpg";
import "../pages/DashApp.css";
import { db } from '../firebase';
import { collection, query, onSnapshot, orderBy, limit } from "firebase/firestore";
import { Base_url } from './Url';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [userData, setUserData] = useState(null);
  const messagesEndRef = useRef();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const fetchAllUsers = async () => {
    const url = `${Base_url()}/users`;

    axios.get(url)
      .then(response => {
        setUserProfiles(response.data);
      })
      .catch(error => {
        console.error('Error fetching user profiles:', error);
      });
  };

  const fetchCurrentUser = async () => {
    const url = `${Base_url()}/users/${loggedInUser}`;

    axios.get(url)
      .then(response => {
        setUserData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching current user data:', error);
      });
  };

  useEffect(() => {
    fetchAllUsers();
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"),
      orderBy("date"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className='message-big' style={{ padding: "20px 10px" }}>
      {messages.map(message => (
        <Message
          key={message.id}
          message={message}
          userProfiles={userProfiles}
          userData={userData}
          loggedInUser={loggedInUser}
        />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatBox;
