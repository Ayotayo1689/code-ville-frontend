
import React, { useEffect, useState } from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import './transaction.css'
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate  } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { Backdrop, Box, Button, Fade, Modal, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LoadingModal from '../components/LoadingModal';
import SessionModal from '../components/SessionModal';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Staff from "../images/profile-icon.jpg"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Base_url } from '../components/Url';

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
  justifyContent: 'center',
  alignItems: 'center',
};


export default function DataBundle() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [apiErr, setApiErr] = useState(false);

  const [action, setAction] = useState(null);
  
  const navigate = useNavigate();

  const actionClicked = (id) => {

    setAction(id === action ? null : id);
    
    // navigate(`/data_bundle/details?id=${id}`);
  };

  const handleRowClick = (id) => {

    console.log("clicked for " + " " + id);
    
    // navigate(`/data_bundle/details?id=${id}`);
  };

  const deviceKey = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';
  const datatoken = localStorage.getItem("token")
  const token = `Bearer ${datatoken}`;






  useEffect(() => {
    const fetchCoinData = async () => {

      const url = `${Base_url()}/users`
      axios.get(url)
      .then(response => {
   
      setData(response.data);
       setLoading(false) 
     
      })
      .catch(error => {
        // setApiErr(true)
        console.log(error)
      });
    
    };

    fetchCoinData();
  }, []);

  // Calculate index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const Items = data;
    const currentItems = Items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (

    <div className='dash'>
       {apiErr ? <SessionModal/> : ""}
    <DashNav />
    <div className="dash-big">
          <div className="title">
            <div className="head">
            Staffs
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
          <div className='table-container'>


          <table  border="0" width="100%" style={{background:'#fff',borderRadius:"10px", paddingTop:"0"}}>
  <tr>
   <td>
   <div className="table-data">
     <table width="100%" style={{ border:"0px",borderCollapse:"collapse",textAlign:"start", position:"relative"}}>
     <tr  style={{background:'#D6FFFD', height:"40px", border:"none",borderCollapse:"collapse", fontSize:"14px"}}> 
          <th style={{ border:"none",textAlign:"start",paddingLeft:"20px"}} >ID</th>
          <th style={{textAlign:"start",paddingLeft:"0px"}}>Name</th>
          <th style={{textAlign:"start",paddingLeft:"0px"}}> Department</th>
          <th style={{textAlign:"start",paddingLeft:"0px"}}>Email</th>
          <th style={{textAlign:"start",paddingLeft:"0px"}}>contact</th>
          <th style={{textAlign:"start",paddingLeft:"0px"}}>View</th>
          <th style={{textAlign:"start",paddingLeft:"0px"}}>Action</th>
     </tr>
        {
          loading ? <LoadingModal/> : <>{currentItems.map((user, index )=> (
         
         <>
            <tr key={user.id} className="coin tableHover"  >
        <td style={{paddingLeft:"0px",paddingLeft:"0px",display:"flex",alignItems:"center",gap:"6px"}}>{index+1}</td>
        <td style={{paddingLeft:"0px",paddingLeft:"0px",}}><img src={Staff} alt={"bundle logo"} width={"50px"} style={{borderRadius:"50%"}} /> <span style={{position:"relative",bottom:"20px"}}>{user.firstName} </span></td>
        <td style={{paddingLeft:"0px",marginLeft:"0px"}}>{user.department}</td>
        <td style={{paddingLeft:"0px",marginLeft:"0px"}}>{user.email}</td>
        <td style={{paddingLeft:"0px",marginLeft:"0px"}}>{user.phoneNo}</td>
        <td style={{paddingLeft:"0px",marginLeft:"0px"}}><RemoveRedEyeOutlinedIcon onClick={() => handleRowClick(index)} /></td>
        <td style={{paddingLeft:"0px",marginLeft:"0px"}}><MoreHorizIcon onClick={() => actionClicked(index)}/></td>
       
        { index === action && (
             <td className='action'>
              <p style={{color:"blue"}}>Edit</p>
              <p style={{color:"red"}} >Delete</p>
              {/* <AppRegistrationOutlinedIcon />
                <DeleteForeverOutlinedIcon sx={{ color: 'red' }} /> */}
              </td>
        )
            }
        
      </tr>

     
         </>
      
        ))}
    </>
        }
      </table>
     </div>
    </td>
   </tr>
 </table>
 
 </div>
        <div className="pagination" style={{fontWeight:"500"}}>
        
        <p>Page</p>
        <div className=""><span style={{border:"1px solid green", padding:"5px 30px", borderRadius:"3px"}}>{currentPage * itemsPerPage }</span> of {data.length}</div>
        
        <button className='next-prev' style={{display:"flex",justifyContent:"center",alignItems:"ceter",background:"#134E4A", border:"none",padding:"5px 0 5px 10px"}}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ArrowBackIosIcon style={{ color: 'white' }} />
        </button>
        
        <button className='next-prev' style={{display:"flex",justifyContent:"center",alignItems:"ceter",background:"#134E4A", border:"none",padding:"5px"}}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= data.length}
        >
         <ArrowForwardIosIcon style={{ color: 'white' }} />
        </button>
        </div>
      </div>
    </div> 












    
  );
}
