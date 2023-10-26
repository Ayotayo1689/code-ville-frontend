import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import logo from "../images/bitstock-logo2.png"
// import logo from "./logo.svg"

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false)
  const openclose =()=>{
    setOpenNav(!openNav)
  }
  return (
    <div className="nav-side">
      {openNav ? <div className="navbar">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <div className="nav" style={{border:"2px solid red"}}>
            <Link to="/" className="navlink">Home</Link>
            <Link className="navlink">Products</Link>
            <Link to="/investment-club" className="navlink">Investment Club</Link>
            <Link to="/about-us" className="navlink">About Us</Link>
            <Link to="/faqs" className="navlink">FAQs</Link>
            <Link className="navlink">Blog</Link>
            <Link to="/Login" className="navlink">Login</Link >
            <Link to="/Login"><button className='buttons'>Sign Up</button></Link>
        </div>
        <div className="ham" onClick={openclose} >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M11 6L20 6" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 12H20.5" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 18H11" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path></svg>
        </div>
    </div>: <div className="absolute-nav">
    <div className="navbar">
        <div className="logo">
        <img src={logo} alt="logo"  />
        </div>
        
        <div className="" onClick={openclose}>
        </div>
    </div>
    <div className="navMenu" onClick={openclose}>
      <div className="btns">
            <Link to="/Login"><button className='buttons'>Sign Up</button></Link>
            <Link to="/Login" className="navlink">Login</Link >
      </div>
            <Link to="/" className="navlink">Home</Link>
            <Link className="navlink">Products</Link>
            <Link to="/investment-club" className="navlink">Investment Club</Link>
            <Link to="/about-us" className="navlink">About Us</Link>
            <Link to="/faqs" className="navlink">FAQs</Link>
            <Link className="navlink">Blog</Link>
            
    </div>
    </div> }
    </div>
  )
}

export default Navbar