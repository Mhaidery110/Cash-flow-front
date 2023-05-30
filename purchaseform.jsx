import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { useState } from 'react';
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


function Purchaseform() {
  const [open, setOpen] = React.useState(false);

  const [Details, setDetails] = useState([{
  date: "",
  bill: "",
  item: "",
  amount: "",
  catagory: "",
  source: "",
  }]);
   
  
  function Submit(){
          axios.post("http://localhost:3001/postpurchase",{
              date: Details.date,
              bill: Details.bill,
              item: Details.item,
              amount: Details.amount,
              catagory: Details.catagory,
              source: Details.source,
              
  }).then((res) => {
              console.log(res)
            }).catch((error)=>{
              console.log(error);
            })
            setDetails({
          date: "",
          bill: "",
          item: "",
          amount: "",
          catagory: "",
          source: ""
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
            
            name='date'
            onChange={HandleChange}
          />
          </div>
        
        <div>
          <TextField
          style={{ width: "500px", margin: "20px" }}
            type="text"
            label="Bill No"
            id="outlined-size-small"
            
            
            name='bill'
            onChange={HandleChange}
          />
          </div>
        
          <TextField
          style={{ width: "500px", margin: "20px" }}
            type="text"
            label="Item Details"
            id="outlined-size-small"
            
            name='item'
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
            label="Source"
            style={{ width: "500px", margin: "20px" }}
            type="text"
            id="outlined-size-small"
            name='source'
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

export default Purchaseform;
