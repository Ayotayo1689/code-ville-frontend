import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';


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


const SessionModal = () => {

    const navigate = useNavigate();
 
  
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const logOut = ()=>{
      localStorage.removeItem("token")
      navigate('/')
    }


  return (
    <div> 
         <Modal
    keepMounted
    open={open}
    
    aria-labelledby="keep-mounted-modal-title"
    aria-describedby="keep-mounted-modal-description"
  >
    <Box sx={style}>
      <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
        Session Expired
      </Typography>
      <Typography id="keep-mounted-modal-description" sx={{ m: "auto" }}>
      <Button onClick={logOut} >Ok</Button>
      
      </Typography>
    </Box>
  </Modal>
  </div>
  )
}

export default SessionModal