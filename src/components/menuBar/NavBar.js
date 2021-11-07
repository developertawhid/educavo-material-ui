import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, ButtonGroup, Container, Grid, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      background: '#e22626'
    },
}));

function NavBar() {  
    const btnLink = {color: '#333', textDecoration: 'none', fontSize: "17px", padding: "10px 0px"}
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <Box sx={{paddingTop: 3, paddingBottom: 3}}>
            <Container maxWidth="lg">
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item>
                        <Box sx={{ flexGrow: 1 }}>
                            <img style={{maxWidth: "240px"}} alt="logo" src="https://keenitsolutions.com/products/html/educavo/assets/images/logo-dark.png" />
                        </Box>
                    </Grid>
                    <Grid item>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>

                        <Grid container alignItems="center">

                            <Toolbar>
                                <ButtonGroup variant="" aria-label="text button group">
                                    <Button style={{color: 'white'}}>
                                        <Link style={btnLink} to="/">HOME +</Link>
                                    </Button>
                                    <Button>
                                        <Link style={btnLink} to="/about">ABOUT +</Link>
                                    </Button>
                                    <Button>
                                        <Link style={btnLink} to="/courses">COURSES +</Link>
                                    </Button>
                                    <Button>
                                        <Link style={btnLink} to="/pages">PAGES +</Link>
                                    </Button>
                                    <Button>
                                        <Link style={btnLink} to="/blog">BLOG +</Link>
                                    </Button>
                                    <Button>
                                        <Link style={btnLink} to="/contact">CONTACT +</Link>
                                    </Button>
                                </ButtonGroup>
                            </Toolbar>

                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <SearchIcon />
                            </IconButton>
                            <Box sx={{ fontSize: "25px" }}>|</Box>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <StyledBadge badgeContent={4} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                    
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ ml: 0 }}
                            >
                                <MenuIcon fontSize="large" style={{width: "20px !important", height: "20px !important" }} />
                            </IconButton>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default NavBar;
