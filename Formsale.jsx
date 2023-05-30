import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from 'react';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';



 function SalesForm() {

const [open, setOpen] = React.useState(false);

const [Details, setDetails] = useState([{
date: "",
bill: "",
type: "",
customer: "",
table: "",
sstatus: "",
subtotal: "",
discount: ""
}]);
 
  
  const Submit = ()=> {
    axios.post("http://localhost:3001/insert",Details)
    .then((res) => {
        console.log(res)
      }).catch((error)=>{
        console.log(error);
      });
    
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
       sx={{ display: 'flex', gap: '2rem', p: '6px' }}> 
    
    <Button variant="contained" color='primary' onClick={handleClickOpen}>
        Add New Bill
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Bill</DialogTitle>

      
   
      <div>
        <TextField
        style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Date"
          id="outlined-size-small"
          
          name='date'
          onChange={HandleChange}
        />
        </div>
      
      <div>
        <TextField
        style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Bill No"
          id="outlined-size-small"
          
          
          name='bill'
          onChange={HandleChange}
        />
        </div>
      
        <TextField
        style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Type"
          id="outlined-size-small"
          
          name='type'
          onChange={HandleChange}
        />
      
        <TextField
        style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Customer Name"
          id="outlined-size-small"
          
          name='customer'
          onChange={HandleChange}
        />
      
        <TextField
        style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Table No"
          id="outlined-size-small"
         
          name='table'
          onChange={HandleChange}
        />
      
        <TextField
          label="Subtotal"
          style={{ width: "500px", margin: "5px" }}
          type="text"
          id="outlined-size-small"
          name='subtotal'
          onChange={HandleChange}
        />
      
        <TextField
        style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Status"
          id="outlined-size-small"
         
          name='sstatus'
          onChange={HandleChange}
        />
      
        <TextField
        style={{ width: "500px", margin: "5px" }}
          type="text"
          label="Discount"
          id="outlined-size-small"
          name='discount'
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
    


export default SalesForm;