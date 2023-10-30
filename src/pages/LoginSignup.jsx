import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Logsign.css"
import eyeOpen from "../images/eyeOpen.png"
import eyeClose from "../images/eyeClose.png"
import Logo from "../images/logo.svg"
import codeVille from "../images/codeville.jpg"
import Loader from "../images/loader.svg"
import axios from 'axios'
import { Base_url } from '../components/Url'
import { useEffect } from 'react'


const LoginSignup = () => {



    const navigate = useNavigate();

    const [logError, setLogError] = useState(false)
    const [logErrorMsg, setLogErrorMsg] = useState("")
    const [page, setPage] = useState(true);

    const [logInProcess, setLogInProcess] = useState(false)


  
    const [password, setpassword] = useState(true)
    const openpassword =()=>{
        setpassword(!password)
    }

  

  const [username, setUsername] = useState('');
  const [passWord, setPassWord] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [department, setDepartment] = useState('');

     

     

      const closeErr = () => {
        setLogError(false);
      };

      const switchPage = () => {
        setPage(!page)
      }

     
  const handleLogin = async () => {

    setLogInProcess(true)

    const url = `${Base_url()}/login`;
   
    const data = {
      email: username,
      password: passWord
    };

  
    
    try {
      const response = await axios.post(url, data );
      setLogInProcess(false)
      const loggedInUser = response.data.data.id;
   

      localStorage.setItem("loggedInUser", loggedInUser)
    if(localStorage.getItem("loggedInUser")){
      const timeout = setTimeout(() => {
        navigate("/data_bundle");
      }, 1000);
  
      return () => {
        clearTimeout(timeout);
      };
      
    }
    console.log(response)
    } catch (error) {
      console.error('Sign-in failed:', error);
      setLogErrorMsg("Sign In Failed");
      setLogInProcess(false)
    
    }
  };



  const handleSignUp= async () => {

    setLogInProcess(true)

    const url = `${Base_url()}/users`;
   
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNo: phoneNo,
      password: passWord,
      department: department
    };

  
    
    try {
      const response = await axios.post(url, data );
   
      setLogInProcess(false)
      setPage(!page)
    } catch (error) {
      console.error('Sign-up failed:', error);
      setLogErrorMsg("Sign up Failed");
      setLogInProcess(false)
    
    }
  };

 
  

  useEffect(() => {
    
    if(localStorage.getItem("loggedInUser")){
      
        navigate("/data_bundle");
     
    }
  }, []);
  




  return (
    <div className='sign-log'>
      <div className="right">

      </div>
      <div className="left">
     





<div className="left-child">
{
  page ? <div className="login">
        <h1>Welcome Back</h1>
        <input style={{background: "rgba(255, 255, 255, 0.515)"}}
         type="email"
         value={username}
         onChange={(e) => setUsername(e.target.value)}
         placeholder="Email"/>
        <div className="password">
        <input style={{background: "rgba(255, 255, 255, 0.515)"}} type={password? "password": "text"}
         placeholder='Password...' 
  value={passWord}
  onChange={(e) => setPassWord(e.target.value)}
        className='input'/>
        <div onClick={openpassword}>
            {password? <img src={eyeClose} alt="/"  /> :<img src={eyeOpen} alt="/" />}
        </div>
        
        
        </div>
        <i style={{color:"red"}} >{logErrorMsg}</i>
         <button onClick={handleLogin}>{logInProcess ? <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"10px"}}><img src={Loader} alt={"jhgjg"}/> {"Please wait.." }</div> : "Login"}</button>
      <p className='p'>Don't have an account? <span onClick={switchPage}>Register</span> </p>
    </div>:<div className="login">
        <h1>Welcome to CodeVille</h1>
        <input style={{background: "rgba(255, 255, 255, 0.515)"}}
         type="text"
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
         placeholder="First Name"/>

        <input style={{background: "rgba(255, 255, 255, 0.515)"}}
         type="text"
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
         placeholder="Last Name"/>

        <input style={{background: "rgba(255, 255, 255, 0.515)"}}
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         placeholder="Email"/>

          <input style={{background: "rgba(255, 255, 255, 0.515)"}}
         type="text"
         value={phoneNo}
         onChange={(e) => setPhoneNo(e.target.value)}
         placeholder="Phone Number"/>

        <input style={{background: "rgba(255, 255, 255, 0.515)"}}
         type="text"
         value={department}
         onChange={(e) => setDepartment(e.target.value)}
         placeholder="Department"/>

        <div className="password">
        <input style={{background: "rgba(255, 255, 255, 0.515)"}} type={password? "password": "text"}
         placeholder='Password...' 
  value={passWord}
  onChange={(e) => setPassWord(e.target.value)}
        className='input'/>
        <div onClick={openpassword}>
            {password? <img src={eyeClose} alt="/"  /> :<img src={eyeOpen} alt="/" />}
        </div>
        
        
        </div>
        <i style={{color:"red"}} >{logErrorMsg}</i>
         <button onClick={handleSignUp}>{logInProcess ? <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"10px"}}><img src={Loader} alt={"jhgjg"}/> {"Please wait.." }</div> : "Register"}</button>
      <p className='p-signup'>Already have an account? <span onClick={switchPage}>Login</span> </p>
    </div>
}
          


</div>



      </div>
        {/* <div className="error" style={logError ? {}: {display:"none"}}>
            <div className="error-box">
                An error occurred lease try again
                <button onClick={closeErr}>ok</button>
            </div>
        </div> */}
        
{/* 
        <div className="login">
          <img src={Logo} alt="" />
                <h1>Welcome back</h1>
                <input style={{background: "rgba(255, 255, 255, 0.515)"}}
                 type="email"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 placeholder="Email"/>
                <div className="password">
                <input style={{background: "rgba(255, 255, 255, 0.515)"}} type={password? "password": "text"}
                 placeholder='Password...' 
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
                className='input'/>
                <div onClick={openpassword}>
                    {password? <img src={eyeClose} alt="/"  /> :<img src={eyeOpen} alt="/" />}
                </div>
                
                
                </div>
                <i style={{color:"red"}} >{logErrorMsg}</i>
                 <button onClick={handleLogin}>{logInProcess ? <div style={{display:"flex", justifyContent:"center",alignItems:"center", gap:"10px"}}><img src={Loader} alt={"jhgjg"}/> {"Please wait.." }</div> : "Login"}</button>
              
            </div> */}
          

            
       
    </div>
  )
}

export default LoginSignup
