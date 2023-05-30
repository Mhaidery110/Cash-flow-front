import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import MaterialReactTable from "material-react-table";
import { Box, TextField} from '@mui/material';
import * as XLSX from "xlsx";
import axios from "axios";
import Ownerform from "./Ownerform";

function Owner() {

  const[data, setdata] = useState([])

   useEffect(()=>{
    axios.get("http://localhost:3001/readowner")
    .then((res)=>{
      setdata(res.data)
    })
   },[])

   const columns = useMemo(
    ()=> [
        {
            header: 'Id',
            accessorKey: 'ownerId'
        },
        {
            header: 'Date',
            accessorKey: 'dateofwith'
        },
        {
            header: 'Name',
            accessorKey: 'name'
        },
        {
            header: 'Withdrawl',
            accessorKey: 'withdrawl'
        }
     
       
    ]
)


  return (
    <div className="content-wrapper">
    <center>
    <h1>Owner's Account</h1>
    </center>
        
          <MaterialReactTable 
            title="Purchase details"
            columns={columns}
            data={data}
            autoResetPageIndex={false}
            renderTopToolbarCustomActions={({ data }) => (
        
        <Box sx={{ display: 'flex', gap: '2rem', p: '7px' }}>
        <Ownerform />
         <TextField type="file"  /> 
         </Box>
     )} />
        </div>
      )
    }

export default Owner;
