import React, { useMemo } from "react";
import { useState, useEffect} from "react";
import MaterialReactTable from "material-react-table";
import { Box, TextField} from '@mui/material';
import * as XLSX from "xlsx";
import SalesForm from "./Formsale";
import axios from "axios";
import {Tooltip, IconButton} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useCallback } from "react";
import { getValue } from "@mui/system";




function Sales(){

  const [data, setdata] = useState([])
  const [total, setTotal] = useState();

  // useEffect(()=>{
  //   fetch("http://localhost:3001/totalsales")
  //   .then(res=>res.json())
  //   .then(res=>{console.log(res[0].total)})},[total])
 
  
 
  //excel import codes

//   const ImportExcel = (e) => {
//     const file = e.target.files[0]

//     const reader = new FileReader()
//     reader.onload = (event) => {
      
//       // parse data here

//       const bstr = event.target.result
//       const workBook = XLSX.read(bstr, {type: "binary"})
      
//       // getting first Sheet 

//       const workSheetName = workBook.SheetNames[0]
//       const workSheet = workBook.Sheets[workSheetName]
      
//       // converting to array

//       const fileData = XLSX.utils.sheet_to_json(workSheet, {header: 1})
//       console.log(fileData)
//     }

//     reader.readAsArrayBuffer(file)
//   }
  

//fetching data from API


  useEffect(()=>{
    axios.get("http://localhost:3001/total")
    .then((res)=>{
      setdata(res.data)
    })
  },[]);

 

    //delete Api

  
    const handleDeleteRow =  (row) => {
          alert(row.row.original.id)
          axios.delete(`http://localhost:3001/deleterec${row.row.original.id}`)
       }
      
  

    const columns = useMemo(
      () => [
        {
          accessorKey: "id",
          id: "id",
          header: "ID",
          size: 50
        },
        {
          accessorKey: 'date', 
          header: 'Date',
          enableColumnOrdering: true,
          size: 50
        },
        {
          accessorKey: 'bill',
          header: 'Bill No',
          size: 50
        },
        {
          accessorKey: 'customer', 
          header: 'Customer Name',
        },
        {
          accessorKey: 'type',
          header: 'Type',
          size: 50
        },
        {
          accessorKey: 'subtotal',
          header: 'Subtotal',
          size: 50
          
        },
        {
          accessorKey: 'discount',
          header: 'Discount',
          size: 50
        },
        {
          header: 'Total',
          accessorKey: 'Total',
          size: 50
        },
        {
          accessorKey: 'sstatus',
          header: 'Status',
          enableGrouping: true
        }
      ],
      [],
    );
  

    return <div className="content-wrapper">
    <div>

    <center>
    <h3>Bill Details</h3>
    </center>
    
    
   
    </div>
     <MaterialReactTable
     title="Customer Bill Section"
      columns={columns}
      data={data} 
      autoResetPageIndex={false}
      enableRowActions={true}
     renderRowActions={(row) =>  (
    <Box sx="50">
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
    </Box>
  )}
  
      displayColumnDefOptions={{
        'mrt-row-actions': {
          size: 50, //set custom width
          muiTableHeadCellProps: {
            align: 'center', //change head cell props
          },
        },
        'mrt-row-numbers': {
          enableColumnOrdering: true, //turn on some features that are usually off
          enableResizing: true,
          muiTableHeadCellProps: {
            sx: {
              fontSize: '1.2rem',
            },
          },
        },
        'mrt-row-select': {
          enableColumnActions: true,
          enableHiding: true,
          size: 100,
        },
      }}
      enableColumnOrdering
      positionGlobalFilter="left"
      renderTopToolbarCustomActions={({ data }) => (
    
         <Box sx={{ display: 'flex', gap: '2rem', p: '7px' }}> 
         
          <SalesForm />

          <TextField type="file"  />
          
          <div>
          <h1> Your Total Sale : {}</h1>
          </div>
          
          </Box>
      )} />
 </div>   
}



   export default Sales;




   
   
   
   
   
   
   
   
   
   
   





   


