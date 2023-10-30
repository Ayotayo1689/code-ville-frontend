import React, { useEffect, useRef, useState } from 'react'
import Message from './Message'
import { collection, query, where, onSnapshot, QuerySnapshot, orderBy, limit } from "firebase/firestore"
import { db } from '../firebase'
import "./Navbar.css";


 
const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef();
    
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

   
   useEffect(()=>{
    const q = query(collection(db, "messages"),
    orderBy("sentAt"),
    limit(50)
    
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot)=>{
        const messages = [];
        QuerySnapshot.forEach((doc)=>{
            console.log(doc.data()); 
            messages.push({...doc.data(),id: doc.id});
        });
        setMessages(messages)
    })

return ()=> unsubscribe;

   }, [])
    
  return (
    <div className='message-big' >
        {messages.map(message =>(
            <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef}></div>
    </div>
  )
}

export default ChatBox