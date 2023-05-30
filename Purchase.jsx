import React, { useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button, TextField} from '@mui/material';
import * as XLSX from "xlsx";
import { Navigate, NavLink } from "react-router-dom";
import {Delete, Key} from "@mui/icons-material"
import axios from "axios";
import Purchaseform from "./purchaseform";

function Purchase() {

    const [data, setdata] = useState([]);

useEffect(()=>{
    axios.get("http://localhost:3001/readpurchase")
    .then((res)=>{
        setdata(res.data)
    })
},[data]);


    const columns = useMemo(
        ()=> [
            {
                header: 'Id',
                accessorKey: 'id'
            },
            {
            header: 'Date',
            accessorKey: 'date'
            },
            {
                header: 'Bill No.',
                accessorKey: 'bill',
            },
            {
                header: 'Item Details',
                accessorKey: 'item'
            },
        
            {
                header: 'Amount',
                accessorKey: 'amount'
            },
            {
                header: 'Catagory',
                accessorKey: 'catagory'
            },
            {
                header: 'Source',
                accessorKey: 'source'
            }
        ]
    )
 
  return (
    <div className="content-wrapper">
<center>
<h1>Purchase Table</h1>
</center>
    
      <MaterialReactTable 
        columns={columns}
        data={data}
        autoResetPageIndex={false}
        
        renderTopToolbarCustomActions={({ data }) => (
    
    <Box sx={{ display: 'flex', gap: '2rem', p: '7px' }}>
    <Purchaseform />
     <TextField type="file"  /> 
     </Box>
 )} />
    </div>
  )
}

export default Purchase;
