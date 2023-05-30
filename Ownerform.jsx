import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from 'react';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function Ownerform() {
     const [open, setOpen] = useState(false)
    const [Details, setDetails] = useState({
        dateofwith: "",
        name: "",
        withdrawl: ""
    })

    function Submit(){
        axios.post("http://localhost:3001/postowner",{
            dateofwith: Details.dateofwith,
            name: Details.name,
            withdrawl: Details.withdrawl})
            .then((res) => {
            console.log(res)
          }).catch((error)=>{
            console.log(error);
          })
        

      handleClose();  
      
}

const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


function HandleChange(event){
  const {name, value} = event.target;
  event.preventDefault();
  console.log(event.target.value);
  setDetails(prevValue => {
    return {
      ...prevValue,
      [name] : value
    }
  })
}

  return (
    
    <Box className='input'
      component="form"
       sx={{ display: 'flex', gap: '4rem', p: '4px' }}> 
    
    <Button variant="contained" color='primary' onClick={handleClickOpen}>
        Add New Details
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Details</DialogTitle>

      
   
      <div>
        <TextField
        style={{ width: "500px", margin: "20px" }}
          type="text"
          label="Date"
          id="outlined-size-small"
          name='dateofwith'
          onChange={HandleChange}
        />
        </div>
      
      <div>
        <TextField
        style={{ width: "500px", margin: "20px" }}
          type="text"
          label="name"
          id="outlined-size-small"
          name='name'
          onChange={HandleChange}
        />
        </div>
      
        <TextField
        style={{ width: "500px", margin: "20px" }}
          type="text"
          label="withdrawl"
          id="outlined-size-small"
          name='withdrawl'
          onChange={HandleChange}
        />
      
       
    
<div>
  
  <DialogActions>
  <Button variant='contained' color='success' onClick={Submit}>Add</Button>
          <Button variant='contained' color='warning' onClick={handleClose}>Cancel</Button>
        </DialogActions>
</div>
</Dialog>
 
  
   </Box>
  )}

export default Ownerform;
