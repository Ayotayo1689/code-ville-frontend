
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import './transaction.css'
import { v4 } from "uuid"
import { storage } from "../firebase"
import { ref, uoloadBytes, uploadBytes, getDownloadURL  } from "firebase/storage"
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SessionModal from '../components/SessionModal';
import LoadingModal from '../components/LoadingModal';
import { Base_url } from '../components/Url';
import Staff from "../images/profile-icon.jpg"
import okay from "../images/okay.svg"
import error from "../images/error.svg"
import TextField from '@mui/material/TextField';
import loadingSpin from "../images/loadeing.svg"
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
// import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

 
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  '&:hover': {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0.4px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection:"column",
  justifyContent: 'center',
  alignItems: 'center',
};


export default function MyTask() {
  const [data, setData] = useState([]);
  const [apiErr, setApiErr] = useState(false);
    const loggedinUser = localStorage.getItem("loggedInUser")
  
    
    const fetchCoinData = async () => {

      const loggedInUser = localStorage.getItem("loggedInUser")

    const url = `${Base_url()}/users/${loggedInUser}`



    axios.get(url)
    .then(response => {
    // setLoading(false)
    setData(response.data.data)
    })
    .catch(error => {
     setApiErr(true)
    });
  
  };




    const [date, changeDate] = useState(new Date());
  const [imageSelected, setImageSelected] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [imageUploaded, setImageUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageErr, setImageErr] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{
    setOpen(false)
    setLoading(false)
    setImageSelected(false)
    setImageUploaded(false)
               
  };
  function changeValue(val) {
    changeDate(val);
 }

 
 

    // Create a reference for the file input element
    const fileInputRef = useRef(null);

    // Function to trigger file input click when the icon is clicked
    const handleUploadClick = () => {
      fileInputRef.current.click(); // Trigger click on file input
    };
  
    // Function to handle file selection

const handleFileSelect = (e) => {
   
  const selectedFile = e.target.files[0];

  if (selectedFile.name) {
    handleOpen()
    setLoading(true)

    const imageRef = ref(storage, `images/${selectedFile.name + v4()}`);

    uploadBytes(imageRef, selectedFile)
      .then(() => {
        
        setImageSelected(true)

        // Once the upload is successful, get the download URL
        getDownloadURL(imageRef)
          .then((downloadURL) => {
            try {
                const response = axios.put(
                  `${Base_url()}/users/${loggedinUser}/profile_pic`,
                  { profilePic: downloadURL }
                );
                fetchCoinData();
                setLoading(false)
                setImageSelected(false)
                setImageUploaded(true)
               
              } catch (error) {
                setLoading(false)
                setImageSelected(false)
                setImageErr(true)
              }
              
          })
          .catch((error) => {
            setLoading(false)
            setImageSelected(false)
            setImageErr(true)
          });
      })
      .catch((error) => {
        setLoading(false)
        setImageSelected(false)
        setImageErr(true)
      });
  } else {
    console.log('No file selected');
  }
};





  // Calculate index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = data.data.tasks.slice(indexOfFirstItem, indexOfLastItem);

 
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  useEffect(() => {
    

    fetchCoinData();
    
  }, []);


  return (
    <>
       


    <div className='dash'>
      
    <DashNav />
    <div className="dash-big">
         <div className="title">
           <div className="head">
           profile
            </div>
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search User…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </div>

      



        

            <div className="table-container" >
                <div className="banner" style={{ height:"30vh"}}>
                    <h1 >{`${data.firstName} ${data.lastName}`}</h1>
                    <p>{data.department} department</p>

                    <div className="profile-img"  style={{
          background: "#fff"
        }}>
    {data.profilePic === "" ?  <img src={Staff} alt="" /> :   <img src={data.profilePic} alt="" /> }
      <div
        className="upload-icon"
        style={{
          position: "absolute",
          bottom: "15px",
          right: "15px",
          // zIndex: "1",
          background: "#00803e77",
          padding: "5px",
          borderRadius: "50px",
        }}
        onClick={handleUploadClick} // Trigger file input click when this div is clicked
      >
        <AddAPhotoIcon />
      </div>
      {/* Hidden file input element */}
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef} // Assign the reference to the file input element
        onChange={handleFileSelect} // Handle file selection
      />
    </div>

                </div>

                <div className="detail">
                    <div className="about">
                        <h2>About</h2>
                        <p>
                            i'm {`${data.firstName} ${data.lastName}`} in the {data.department} department at codeVille.
                            bringing my best to the success of the company
                        </p>
                        <div className="contacts"> <MailOutlineIcon/> <span>{data.email}</span></div>
                        <div className="contacts"> <LocalPhoneOutlinedIcon/> <span>{data.phoneNo}</span></div>
                        {/* <div className="contacts"> <p>{`ayotayobadejo@gmail.com`}</p></div> */}

                    </div>
                    <div className="about" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    {/* <CalendarComponent></CalendarComponent> */}
                    <Calendar  onChange = {changeValue} value = {date} />

                        
                        </div>

                </div>

         


            </div>
      </div> 
    </div> 

    
  
    
    
   
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
      
          {
            loading &&  <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px", minHeight:"200px"}}>
            <img src={loadingSpin} alt="loading" />
            {/* <h5>Task assignes successfully</h5> */}

          </div>
          }
          {
            imageSelected && <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px"}}>
                Uploading...
          </div>
          }
          {
             imageUploaded &&
             <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px"}}>
               <img src={okay} alt="sucess" />
               <h5>Profile picture uploaded successfully</h5>
 
             </div>
          }
           {
             imageErr &&
             <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px"}}>
               <img src={error} alt="sucess" />
               <h5>Something went wrong </h5>
 
             </div>
          }

              
        
        </Box>
      </Fade>
    </Modal>
    </>    
  );
}
