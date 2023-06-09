import * as React from 'react';
import { Link, Routes, Route, Navigate } from "react-router-dom"; 

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { purple, red } from '@mui/material/colors';

const pages = [
  ['Activities', "/activities"], 
  ['Meet the Horses', "/horses"],
  ['Location', "/location"], 
  ['Contact Us', "/contact"], 
  ['FAQ', "/faq"]
];

const logo = require("../images/rvr_logo1.png");

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="static"
      style={{ 
        // background: "#D92A28 ",
        background: 'linear-gradient(45deg,#CD1818, #381010)',

        // background: 'linear-gradient(45deg,#d92a28, #381010)',
        // filter: "brightness(125%)",
        borderStyle: "solid", 
        borderColor: "black", 
        color: "black"
      }}

    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' },
                height: 100,
                width: 160,
                mr: 1
              }}
              component="img"
              src={logo}>
            </ Box>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: red[500],
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page[1]}>
                  <MenuItem 
                    key={page[0]} 
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center" color="black" fontWeight="bold" >{page[0]}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'flex', md: 'none' },
              height: 100,  
              width: 100,
              mr: 1
            }}
            component="img"
            src={logo}
            >
          </ Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: red[500],
              textDecoration: 'none',
            }}
          >
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page[1]}>
                <Button
                  key={page[0]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'black', fontWeight: "bold" , display: 'block',}}
                >
                  {page[0]}
                </Button>
              </Link>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;