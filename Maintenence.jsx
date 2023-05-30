import React, { useMemo } from "react";
import { useState, useEffect, useCallback } from "react";
import MaterialReactTable from "material-react-table";
import { Box, Button, TextField} from '@mui/material';
import * as XLSX from "xlsx";
import { Navigate, NavLink } from "react-router-dom";
import {Delete, Key} from "@mui/icons-material"
import axios from "axios";
import Maintform from "./Maintform";

function Maintenence() {

    const [data, setdata] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3001/readmaintain")
        .then((res)=>{
            setdata(res.data)
        })
    },[])

    const columns = useMemo(
        ()=> [
            {
            header: 'ItemId',
            accessorKey: 'itemId',
            size: 30
            },
            {
            header: 'Date of Pay',
            accessorKey: 'dateofpay',
            size: 30
            },
            {
                header: 'Maintenece Item',
                accessorKey: 'mainItem',
                size: 30
            },
            {
                header: 'Vouch',
                accessorKey: 'vouch',
                size: 30
            },
        
            {
                header: 'Amount',
                accessorKey: 'amount',
                size: 30
            },
            {
                header: 'Catagory',
                accessorKey: 'catagory',
                size: 30
            },
            {
                header: 'SourceId',
                accessorKey: 'ownerId',
                size: 30
            },
            {
                header: 'Date of Withrwal',
                accessorKey: 'dateofwith',
                size: 30
            },
            {
                header: 'Owner Name',
                accessorKey: 'name',
                size: 30
            }
        ]
    )

  return (
    <div>
       <div className="content-wrapper">
<center>
<h1>Maintenece Table</h1>
</center>
    
      <MaterialReactTable 
        columns={columns}
        data={data}
        autoResetPageIndex={false}
        
        renderTopToolbarCustomActions={({ data }) => (
    
    <Box sx={{ display: 'flex', gap: '2rem', p: '7px' }}>
    <Maintform />
     <TextField type="file"  /> 
     </Box>
 )} />
    </div>
    </div>
  )
}

export default Maintenence;
