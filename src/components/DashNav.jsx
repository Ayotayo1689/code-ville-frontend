import{ useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { NavLink, useNavigate } from 'react-router-dom';
import "./nav.css"
import Logo from "../images/codeville.jpg"
import LogoutIcons from "../images/logoutIcon.svg"

import SideBarLink from "./sidebar"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  padding: "10px 20px",
  bgcolor: 'background.paper',
//   border: 'none',
display:"flex",
flexDirection:"column",
gap:"20px",
  borderRadius:"8px",
  boxShadow: 24,
  p: 4,
};

const DashNav = () => {

  const navigate = useNavigate()

  const logOut = ()=>{
    localStorage.removeItem("loggedInUser")
    navigate('/')
  }
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [navOpened, setNavOpened] = useState(true)
    const navOpen =()=>{
        setNavOpened(!navOpened)
        console.log("clicked");
    }
  return (
   <>
    <div onClick={navOpen} className={navOpened ? "dash-nav dash-nav-open" : "dash-nav dash-nav-close"} style={{flex:"1",height:"100vh"}}  >
        <img src={Logo} alt="" width="80%"   />
     {SideBarLink.map((item, index)=>{
      return(
        <NavLink 
        className={"inactive"}
        key={index}
         activeClassName="active"
          to={item.path} 
         style={{
          // height:"15px",
          fontSize:"16px",
          display:"flex",
          // justifyContent:"center",
          // alignItems:"center",
          gap:"10px"}}>
             <img src={item.icon} alt="" /> {item.title}
             </NavLink>
      )
     })}
      <div style={{fontSize:"16px",width:"90%"}} className="Link" onClick={handleOpen}> <img src={LogoutIcons} alt="" /> Logout</div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Are you sure you want to log out?
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ m: "auto" }}>
          <Button onClick={logOut} >YES</Button>
          <Button keepMounted
        open={open}
        onClick={handleClose}>NO</Button>
          </Typography>
        </Box>
      </Modal>
    {/* </div> */}
    </div>
    <div className="dash-ham" onClick={navOpen}>
      {navOpened ?     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M11 6L20 6" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 12H20.5" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path><path d="M3 18H11" stroke="currentColor" stroke-width="2" class="jsx-c57d90d04ebe9d60"></path></svg>    
 :         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="jsx-c57d90d04ebe9d60"><path d="M9.46585 8.01314L15.6959 1.78287C16.1014 1.37762 16.1014 0.722377 15.6959 0.317124C15.2907 -0.0881297 14.6354 -0.0881297 14.2302 0.317124L7.99992 6.54739L1.76983 0.317124C1.36439 -0.0881297 0.709336 -0.0881297 0.304083 0.317124C-0.101361 0.722377 -0.101361 1.37762 0.304083 1.78287L6.53417 8.01314L0.304083 14.2434C-0.101361 14.6487 -0.101361 15.3039 0.304083 15.7092C0.506045 15.9113 0.771595 16.0129 1.03696 16.0129C1.30232 16.0129 1.56768 15.9113 1.76983 15.7092L7.99992 9.47889L14.2302 15.7092C14.4323 15.9113 14.6977 16.0129 14.9631 16.0129C15.2284 16.0129 15.4938 15.9113 15.6959 15.7092C16.1014 15.3039 16.1014 14.6487 15.6959 14.2434L9.46585 8.01314Z" fill="currentColor" class="jsx-c57d90d04ebe9d60"></path></svg> }
    </div></>
  )
}

export default DashNav