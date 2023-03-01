import React from 'react'
import "./List.scss"

// importing stuffs we need for our table

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const List = () => {

// let us get dummy data for now tfo insert into our table

const rows=[
  {
id:1230,
product:"St Paul sandals",
sex:"Male",
img:"https://i5.walmartimages.com/asr/ff14dc71-212c-4101-a311-5f251eae654e.8c6c64aa7b0e80214e7e2f3b9983f7ed.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
customer:"Fonyuy Patrick",
date:"2 February",
amount :6000,
method:"online",
status:"pending"

  },

  {
    id:1231,
    product:"St Jude sandals",
    sex:"Male",
    img:"https://i5.walmartimages.com/asr/ff14dc71-212c-4101-a311-5f251eae654e.8c6c64aa7b0e80214e7e2f3b9983f7ed.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    customer:"Fonyuy Patrick",
    date:"2 February",
    amount :6000,
    method:"online",
    status:"Approved"
    
      },

      {
        id:1232,
        product:"Our Lady",
        sex:"Male",
        img:"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
        customer:"Fonyuy Patrick",
        date:"3 February",
        amount :5000,
        method:"online",
        status:"pending"
        
          },

          {
            id:1233,
            product:"Men Dressing Sleepers",
            sex:"Male",
            img:"https://www.shutterstock.com/image-photo/image-handsome-smiling-young-african-260nw-722913181.jpg",
            customer:"Ngum Ismael",
            date:"3 February",
            amount :6000,
            method:"online",
            status:"pending"
            
              },

              {
                id:1234,
                product:"St Paul sandals",
                sex:"Female",
                img:"https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
                customer:"Tangua Luis",
                date:"4 February",
                amount :5000,
                method:"online",
                status:"Approved"
                
                  },

                  {
                    id:1235,
                    product:"Cover Shoe",
                    sex:"Male",
                    img:"https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg",
                    customer:"Jean Luis",
                    date:"4 February",
                    amount :36000,
                    method:"online",
                    status:"pending"
                    
                      },
]

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
           
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Sex</TableCell>
            <TableCell className="tableCell">Customer Avatar</TableCell>
            <TableCell className="tableCell">Customers</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount(FCFA)</TableCell>
            <TableCell className="tableCell">Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={rows.id} >
              <TableCell >{row.id} </TableCell>
              <TableCell className="tableCell">{row.product}</TableCell>
              <TableCell className="tableCell">{row.sex}</TableCell>
              <TableCell className="rowCell"><img src={row.img} alt="" /></TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
              <span className={`tableStatus  ${row.status}`} >
              {row.status}
              </span>
              </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List