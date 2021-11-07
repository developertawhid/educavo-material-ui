import { Box, Grid, Link } from '@mui/material';
import React from 'react';
import SocialIcons from './SocialIcons';

function FooterBottom() {
    return (
        <Grid container alignItems="center" sx={{padding: "10px 0"}}>
            <Grid item sm={12} xl={2}>
                <img style={{width: "100%"}} src="https://keenitsolutions.com/products/html/educavo/assets/images/logo.png" alt="" />
            </Grid>
            <Grid sm item />
            <Grid item sm={6} xl={4}>
                <Box sx={{color: "white"}}>&copy; 2020 All Rights Reserved. Developed By 
                    <Link to="/"> RSTheme</Link> 
                </Box>
            </Grid>
            <Grid sm item />
            <Grid item>
                <SocialIcons />
            </Grid>
        </Grid>
    )
}

export default FooterBottom;
