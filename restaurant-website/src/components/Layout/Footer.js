import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
  <>
  <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p:3}}>
    <Box sx={{my:3, "& svg":{
        fontSize:"40PX",
        cursor:"pointer",
        mr:2,
    },
    "& svg:hover":{
        color:'orange',
        transform:'translateX(5px)',
        transition:'all 400ms'
    }
    }}>
       <InstagramIcon />
       <TwitterIcon />
       <FacebookIcon />
       <GitHubIcon />
       <YouTubeIcon />
    </Box>
    <Typography variant='h5' sx={{"@media(max-width:600px)":{fontSize:'1rem'}}}>
        All Rights Reserverd &copy; SagarInfo s&d
    </Typography>
  </Box>
  </>
  )
}

export default Footer