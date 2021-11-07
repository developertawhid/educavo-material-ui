import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Box, Button, Container, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {
    return (
      <Box sx={{ backgroundColor: '#273c66', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center">


            <Grid item>
              <Box sx={{display: "flex", alignItems: "center", }}>
                <MailOutlineOutlinedIcon sx={{mr: 1}} />
                support@rstheme.com
              </Box>
            </Grid>
            <Grid item sm>
              <Grid container alignItems="center" sx={{padding: "0 25px"}}>

                <Grid item>
                  <Box sx={{display: "flex", alignItems: "center", }}>
                    <PhoneInTalkOutlinedIcon sx={{mr: 1}} />
                    (+088) 589-8745
                  </Box>
                </Grid>
                <Grid item sm />
                <Grid item>
                  <Box sx={{display: "flex", alignItems: "center", color: "white"}}>
                    <LogoutOutlinedIcon sx={{mr: 1}} />
                    <Link to="/login" style={{color: "white"}}>Login</Link>/<Link to="/registe" style={{color: "white"}}>Register</Link>
                  </Box>
                </Grid>

              </Grid>
            </Grid>
            <Grid item>
              <Button style={{color: 'white', padding: "15px 30px", backgroundColor: "#21a7d0", borderRadius: "0px"}}>Apply Now</Button>
            </Grid>

          </Grid>
        </Container>
      </Box>
    )
}

export default TopBar;
