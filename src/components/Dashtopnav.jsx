import React from 'react';
import "../pages/DashApp.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import Button from '@mui/material/Button';
import {IconButton, Badge, Menu, MenuItem} from '@mui/material'


 

const Dashtopnav = () => {

   const [anchorEl, setAnchorEl] = React.useState(null);
   const [anchorE2, setAnchorE2] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
      };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleClose2 = () => {
        setAnchorE2(null);
      };

    function notificationsLabel(count) {
        if (count === 0) {
          return 'no notifications';
        }
        if (count > 99) {
          return 'more than 99 notifications';
        }
        return `${count} notifications`;
      }

  return (
    <div className="Dashtopnav">
        <div className="nav-username">
            Welcome Ayotayo,

            <p style={{color:"black",fontSize:"16px",fontWeight:"300",marginTop:"10px"}} className="welcome-txt">Here is what is happening in your Ulego  application today </p>
        </div>
        <div style={{color:"black",fontSize:"24px",fontWeight:"500", marginTop:"40px"}}>
        Starboard
        </div>
        
    </div>
  );
};

export default Dashtopnav;
