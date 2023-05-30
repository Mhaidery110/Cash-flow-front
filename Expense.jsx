import React, {useState, useEffect} from 'react'
import MaterialReactTable from "material-react-table"
import {Box, TextField, Button} from '@mui/material';
import Purchase from './Purchase';
import Owner from './Owner';
import Formpage from '../pages/Formpage';


function Expense() {
  const [data, setdata] = useState()

  useEffect(()=>{
    fetch("http://localhost:3001/total")
    .then(res=>res.json())
    .then(res=>{setdata(res[0].total)})},[])

    console.log(data);

    
  
    
  
  
    return (
      <div className='content-wrapper'>
        <h1>Total = {data} </h1>
      </div>
    )
}

export default Expense;
