import React,{useState} from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import {NavLink} from 'react-router-dom';
import "../../styles/HeaderStyles.css";

const Header = () => {
  const[mobileOpen, setMobileOpen]=useState(false)
  const handleDrawerToggle  =() => {
    setMobileOpen(!mobileOpen)
  }
  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
 <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1, my:2}}>
              <FastfoodIcon/>
              My Restaurant</Typography>
              <Divider />
              
                <ul className='mobile-navigation'>
                  <li>
                    <NavLink to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                
                </ul>
              
    </Box>
  )
  return (
    <div>
        <Box>
          <AppBar component={"nav"} sx={{bgcolor:"black"}}>
            <Toolbar>
              <IconButton color='inherit' aria-label='open-drawer' edge="start" sx={{mr:2, display:{sm:'none'},}} onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow:1}}>
              <FastfoodIcon/>
              My Restaurant</Typography>
              <Box sx={{display:{xs:"none", sm:"block"}}}>
                <ul className='navigation-menu'>
                  <li>
                    <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/about"}>About</NavLink>
                  </li>
                
                </ul>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component='nav'>
            <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{xs:'block',sm:'none'}}}>
              {drawer}
            </Drawer>
          </Box >
          <Box>
          <Toolbar />
          </Box>
        </Box>
    </div>
  )
}

export default Header