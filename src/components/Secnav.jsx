import React from 'react'

const Secnav = () => {
  return (
    <div>
         <div className="navbar">
        <div className="logo">
            HELLO
        </div>
        {/* <div className="nav">
            <Link to="/" className="navlink">Home</Link>
            <Link className="navlink">Products</Link>
            <Link to="/investment-club" className="navlink">Investment Club</Link>
            <Link to="/about-us" className="navlink">About Us</Link>
            <Link to="/faqs" className="navlink">FAQs</Link>
            <Link className="navlink">Blog</Link>
            <Link to="/Login" className="navlink">Login</Link >
            <button className='buttons'>Sign Up</button>
        </div> */}
        <div className="ham"style={{border:"2px solid red"}} >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="RED" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M11 6L20 6" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 12H20.5" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 18H11" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path></svg>
        </div>
    </div>
    </div>
  )
}

export default Secnav