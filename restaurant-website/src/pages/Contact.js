import React from 'react'
import Layout from '../components/Layout/Layout'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { Box, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'

function Contact() {
  return (
    <Layout>
      <Box sx={{my:5, ml:10, "& h4":{fontWeight:'bold', mb:2}}}>
        <Typography variant='h4'>
          Contact My Restaurant
        </Typography>
        <p>
        Hotel that provides lodging, meals, and other services to the traveling public on a commercial basis. A motel performs the same functions as a hotel but in a format designed for travelers using automobiles. Inns have existed since very ancient times to serve merchants and other travelers.
        </p>
      </Box>
      <Box sx={{m:3, width:'600px', ml:10,mb:10, "@media (max-width:600px)":{
        width:"300px"
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label='contact-table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:"black", color:"white",}}align='center'>
                  Contact Details
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:"red", pt:1.5}} /> 1800-000-000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{color:"skyblue", pt:1.5}}  /> test@gmail.com 
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                <CallIcon sx={{color:"skyblue", pt:1.5}}  /> 1234567890
                </TableCell>
              </TableRow>
            </TableHead>

          </Table>

        </TableContainer>
      </Box>
        </Layout>
  )
}

export default Contact