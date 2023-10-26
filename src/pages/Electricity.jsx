
import React, { useEffect, useState } from 'react';
import DashNav from '../components/DashNav';
import Dashtopnav from '../components/Dashtopnav';
import './transaction.css'
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
import TextField from '@mui/material/TextField';

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


export default function Electricity() {
  const [data, setData] = useState([]);
  const [allId, setAllId] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [apiErr, setApiErr] = useState(false);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 



  

 





  const [selectedOptions, setSelectedOptions] = useState([]);

    const fetchCoinData = async () => {

      const url = `${Base_url()}/tasks`


  
      axios.get(url)
      .then(response => {
      console.log('GET request successful!');
      console.log(response.data)
      // setLoading(false)
      setData(response.data);
      })
      .catch(error => {
       setApiErr(true)
      });
    
    };




    
    const fetchAllId = async () => {

      const url = `${Base_url()}/users`


  
      axios.get(url)
      .then(response => {
      console.log('GET request successful!');
      console.log(response.data)
      // setLoading(false)
      setAllId(response.data);
      })
      .catch(error => {
       setApiErr(true)
      });
    
    };



  async function updateTaskState(task, state) {

    console.log(task.assigneeID);
    console.log(task.taskId);
    console.log(state);
  
  
    try {
      const response = await axios.put(
        `${Base_url()}/users/${task.assigneeID}/update-task-state/${task.taskId}`,
        { state }
      );

      if (response.status === 200) {
        fetchCoinData();
      } else {
        console.error('Failed to update task state');
      }
    } catch (error) {
      console.error('An error occurred while updating task state', error);
    }
  }

  const handleSelectChange = (e, task) => {
    const selectedState = e.target.value;

    
    updateTaskState(task, selectedState);

    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions.push(selectedState);
    setSelectedOptions(updatedSelectedOptions);
  };







  const navigate = useNavigate();

  const handleRowClick = (id) => {
    
    navigate(`/electricity/details?id=${id}`);
  };

  const deviceKey = 'ulego-app-f11ad7dd-e351-4395-b2ad-eae2de81090c';
  const datatoken = localStorage.getItem("token")
  const token = `Bearer ${datatoken}`;





  const [formData, setFormData] = useState({
    assigneeId: '', // User to whom the task will be assigned
    description: '',
    dueDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      // Send a POST request to assign the task
      const response = await axios.post(
        `${Base_url()}/users/${formData.assigneeId}/add-task`,
        {
          description: formData.description,
          dueDate: formData.dueDate,
        }
      );

      if (response.status === 201) {
        fetchCoinData();
        // Optionally, reset the form fields
        setFormData({
          assigneeId: '',
          description: '',
          dueDate: '',
        });
      } else {
        console.error('Failed to assign task');
      }
    } catch (error) {
      console.error('An error occurred while assigning the task', error);
    }
  };




  useEffect(() => {
    

    fetchAllId()
    fetchCoinData();
  }, []);

  // Calculate index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

 
  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
       


    <div className='dash'>
        {apiErr ? <SessionModal/> : ""}
    <DashNav />
    <div className="dash-big">
         <div className="title">
           <div className="head">
           All Tasks
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

          <div>
   <div className="" style={{
     position:"relative",height:"40px"
    }}>
   <Button variant="contained" sx={{
     position:"absolute",
     right:"0px",
     background:"#134E4A"
    }} onClick={handleOpen}>Create Task</Button>
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
        <div onSubmit={handleSubmit}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <div>
  <select
    id="assigneeId"
    name="assigneeId"
    value={formData.assigneeId}
    onChange={handleInputChange}
    style={{
      padding: '8px',
      fontSize: '14px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
    }}
  >
    <option value="">Assign Task To</option>
    {allId.map((staff) => (
      <option key={staff.id} value={staff.id}>
        {staff.firstName}
      </option>
    ))}
  </select>
</div>

          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={4}
            value={formData.description}
            name="description"
            onChange={handleInputChange}
          />
          <div>
  <label htmlFor="dueDate" style={{ fontSize: '16px', marginBottom: '10px', display: 'block' }}>
    Due Date:
  </label>
  <input
    type="date"
    id="dueDate"
    name="dueDate"
    value={formData.dueDate}
    onChange={handleInputChange}
    style={{
      padding: '8px',
      fontSize: '14px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
    }}
  />
</div>

        </div>
        <Button variant="contained" sx={{
     background:"#134E4A",
     marginTop:"20px"
    }} onClick={handleSubmit}>Add Task</Button>
      </Box>
    </div>
        </Box>
      </Fade>
    </Modal>
  </div>



          <div className='table-container'>

            <div className="" style={{display:"flex", gap:"20px"}}>

              <div  style={{flex:1, minWidth:"200px"}}>
               <h4 style={{marginBottom:"10px", paddingLeft:"20px"}}> Open</h4>
               {data.map((task, index)=>
                task.state === "open" && (
                  <div className="task-box" style={{minHeight:"100px", marginBottom:"20px", width:"100%",  borderRadius:"9px",padding:"10px"}}>
                    <p style={{color:"black", marginBottom:'20px'}}>{task.description.slice(0, 30)}...</p>
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <select
                name="cars"
                id="cars"
                value={selectedOptions[index] || task.state}
                onChange={(e) => handleSelectChange(e, task)}
                style={{ borderRadius: "8px" }}
                className={task.state}
              >
                <option value="open" style={{ color: "black", background: "white" }}>Open</option>
                <option value="in-progress" style={{ color: "black", background: "white" }}>In-Progress</option>
                <option value="done" style={{ color: "black", background: "white" }}>Done</option>
                <option value="tested" style={{ color: "black", background: "white" }}>Tested</option>
              </select>
                      <p style={{fontSize:"14px"}}>{task.department}</p>
                    </div>
                    <div className="flex" style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <img src={Staff} alt={"bundle logo"} width={"30px"} style={{borderRadius:"50%"}} /> <p>{task.assigneeName}</p>
                    </div>
                    
               </div>
                )
               )}
              </div>
              <div  style={{flex:1, minWidth:"200px"}}>
                <h4 style={{marginBottom:"10px", paddingLeft:"20px"}}>In-Progress</h4>
                {data.map((task, index)=>
                task.state === "in-progress" && (
                   <div className="task-box" style={{minHeight:"100px", marginBottom:"20px", width:"100%",  borderRadius:"9px",padding:"10px"}}>
                    <p style={{color:"black", marginBottom:'20px'}}>{task.description.slice(0, 30)}...</p>
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <select
                name="cars"
                id="cars"
                value={selectedOptions[index] || task.state}
                onChange={(e) => handleSelectChange(e, task)}
                style={{ borderRadius: "8px" }}
                className={task.state}
              >
                <option value="open" style={{ color: "black", background: "white" }}>Open</option>
                <option value="in-progress" style={{ color: "black", background: "white" }}>In-Progress</option>
                <option value="done" style={{ color: "black", background: "white" }}>Done</option>
                <option value="tested" style={{ color: "black", background: "white" }}>Tested</option>
              </select>
                      <p style={{fontSize:"14px"}}>{task.department}</p>
                    </div>
                    <div className="flex" style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <img src={Staff} alt={"bundle logo"} width={"30px"} style={{borderRadius:"50%"}} /> <p>{task.assigneeName}</p>
                    </div>
                    
               </div>
                )
               )}
                
              </div>
              <div  style={{flex:1, minWidth:"200px"}}>
               <h4 style={{marginBottom:"10px", paddingLeft:"20px"}}> Done</h4>
               {data.map((task, index)=>
                task.state === "done" && (
                   <div className="task-box" style={{minHeight:"100px", marginBottom:"20px", width:"100%",  borderRadius:"9px",padding:"10px"}}>
                    <p style={{color:"black", marginBottom:'20px'}}>{task.description.slice(0, 30)}...</p>
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <select
                name="cars"
                id="cars"
                value={selectedOptions[index] || task.state}
                onChange={(e) => handleSelectChange(e, task)}
                style={{ borderRadius: "8px" }}
                className={task.state}
              >
                <option value="open" style={{ color: "black", background: "white" }}>Open</option>
                <option value="in-progress" style={{ color: "black", background: "white" }}>In-Progress</option>
                <option value="done" style={{ color: "black", background: "white" }}>Done</option>
                <option value="tested" style={{ color: "black", background: "white" }}>Tested</option>
              </select>
                      <p style={{fontSize:"14px"}}>{task.department}</p>
                    </div>
                    <div className="flex" style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <img src={Staff} alt={"bundle logo"} width={"30px"} style={{borderRadius:"50%"}} /> <p>{task.assigneeName}</p>
                    </div>
                    
               </div>
                )
               )}
              </div>
              <div  style={{flex:1, minWidth:"200px"}}>
                <h4 style={{marginBottom:"10px", paddingLeft:"20px"}}>Tested</h4>
                {data.map((task, index)=>
                task.state === "tested" && (
                   <div className="task-box" style={{minHeight:"100px", marginBottom:"20px", width:"100%",  borderRadius:"9px",padding:"10px"}}>
                    <p style={{color:"black", marginBottom:'20px'}}>{task.description.slice(0, 30)}...</p>
                    <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <select
                name="cars"
                id="cars"
                value={selectedOptions[index] || task.state}
                onChange={(e) => handleSelectChange(e, task)}
                style={{ borderRadius: "8px" }}
                className={task.state}
              >
                <option value="open" style={{ color: "black", background: "white" }}>Open</option>
                <option value="in-progress" style={{ color: "black", background: "white" }}>In-Progress</option>
                <option value="done" style={{ color: "black", background: "white" }}>Done</option>
                <option value="tested" style={{ color: "black", background: "white" }}>Tested</option>
              </select>
                      <p style={{fontSize:"14px"}}>{task.department}</p>
                    </div>
                    <div className="flex" style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <img src={Staff} alt={"bundle logo"} width={"30px"} style={{borderRadius:"50%"}} /> <p>{task.assigneeName}</p>
                    </div>
                    
               </div>
                )
               )}

              </div>

            </div>


        </div>
      </div> 
    </div> 


    </>    
  );
}
