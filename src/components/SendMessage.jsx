import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Base_url } from './Url';
import axios from 'axios';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const SendMessage = () => {
    const localCreatedAt = new Date();
    const hour = localCreatedAt.getHours();
    const minute = localCreatedAt.getMinutes();
    
    // Conditional check to add leading zero if minute is less than 10
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    
    const timeStamp = `${hour}:${formattedMinute}`;

 
const seconds = localCreatedAt.getSeconds();

const currentTime = `${hour}:${formattedMinute}:${seconds}`;
console.log(currentTime); 

    console.log(timeStamp);

    const [currentUser, setCurrentUser] = useState({})
    
   const loggedInUser = localStorage.getItem("loggedInUser")
    const fetchCoinData = async () => {

     

      const url = `${Base_url()}/users/${loggedInUser}`


  
      axios.get(url)
      .then(response => {
      console.log(response.data)
      // setLoading(false)
      setCurrentUser(response.data);
      })
      .catch(error => {
       console.log(error)
      });
    
    };

    const [value, setValue] = useState("")

    

    const handleSubmitMessage = async (e) =>{
        e.preventDefault()

        if(value.trim() === "") {
            alert("Enter a valid message!!")
            return;
        }

        try{
            const uid = currentUser.id
            const displayName = currentUser.data.firstName
           

            await addDoc(collection(db, "messages"), {
                text: value,
                name: displayName,
                createdAt: timeStamp,
                sentAt: currentTime,
                senderId: loggedInUser,
                uid
            })
 
        }catch(error){
            console.log(error)  
        }
        console.log(value)
        setValue("")
    }

    useEffect(()=>{
        fetchCoinData()
    }, [])

  return (
    <div className='send-message'>
        
             <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "90%" }}
                >
                   <InputBase
                   value={value}
                   onChange={e => setValue(e.target.value)}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Aa"
                   
                />
                 <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton onClick={handleSubmitMessage} type="button" sx={{ p: '10px' }} aria-label="search">
                     <SendIcon />
                </IconButton>
            </Paper>
    </div>
  )
}

export default SendMessage




