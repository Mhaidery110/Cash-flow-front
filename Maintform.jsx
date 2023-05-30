import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from 'react';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

function Maintform() {

    const [open, setOpen] = useState(false)
    const [Details, setDetails] = useState({
        dateofpay: "",
        mainItem: "",
        vouch: "",
        amount: "",
        catagory: "",
        ownerId: ""
    })

    function Submit(){
        axios.post("http://localhost:3001/postmaintain",{
        dateofpay: Details.dateofpay,
        mainItem: Details.mainItem,
        vouch: Details.vouch,
        amount: Details.amount,
        catagory: Details.catagory,
        ownerId: Details.ownerId})
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
    <div>
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
          name='dateofpay'
          onChange={HandleChange}
        />
        </div>
      
        <TextField
        style={{ width: "500px", margin: "20px" }}
          type="text"
          label="Item Details"
          id="outlined-size-small"
          name='mainItem'
          onChange={HandleChange}
        />

<TextField
        style={{ width: "500px", margin: "20px" }}
          type="text"
          label="Vouch"
          id="outlined-size-small"
          name='vouch'
          onChange={HandleChange}
        />

<TextField
        style={{ width: "500px", margin: "20px" }}
          type="text"
          label="Amount"
          id="outlined-size-small"
          name='amount'
          onChange={HandleChange}
        />

<TextField
        style={{ width: "500px", margin: "20px" }}
          type="text"
          label="Catagory"
          id="outlined-size-small"
          name='catagory'
          onChange={HandleChange}
        />

<TextField
        style={{ width: "500px", margin: "20px" }}
          type="text"
          label="Source Id"
          id="outlined-size-small"
          name='ownerId'
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

    </div>
  )
}

export default Maintform;
