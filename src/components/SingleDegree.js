import { Button, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

function SingleDegree({classes, data}) {
    return (
        <Grid item md={6} lg={4} sm={12}>
            <Paper elevation={3} className={classes.root} sx={{backgroundImage: `linear-gradient(transparent, #273c66), url(${data.img})`}}>
                
                <Typography className={classes.boxSubTitle} variant="h6">{data.title}</Typography>
                
                <Box className={classes.hoverBox}>
                    
                    <Typography sx={{fontSize: "25px", mb: 1}} variant="h5">{data.title}</Typography>
                    <Typography sx={{fontSize: "14px", mb: 2}} variant="p">{data.paragraph}</Typography>
                    <Button className={classes.hoverButton}>
                        <Link style={{color: "white"}} to="/" >READ MORE</Link>
                    </Button>
                </Box>
            </Paper>
        </Grid>
    )
}

export default SingleDegree;
