import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import EventsSingleCard from './EventsSingleCard';
import UnderlineEffact from './UnderlineEffact';

const useStyles = makeStyles({
    root: {
        paddingTop: "80px",
        background: "linear-gradient(to right, #fff 35%, #f3f8f9 35%)",
    },
    leftContent: {
        paddingRight: "60px", 
        "& .MuiTypography-subtitle1": {
            fontWeight: "500",
            color: '#21a7d0',
            fontSize: "18px"
        },
        "& .MuiTypography-h3": {
            fontSize: "30px",
            margin: "10px 0 30px 0",
            fontWeight: "600"
        },
        "& .MuiPaper-root": {
            padding: "0",
            overflow: "hidden",
            background: "url(https://keenitsolutions.com/products/html/educavo/assets/images/event/single.jpg)",
            height: "450px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
        },
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
        },
    }
})

function EventsSection () {

    const classes = useStyles();

    return (
        <Box component="section" className={classes.root}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item md={6} sm={12} className={classes.leftContent}>
                        <Typography variant="subtitle1">LATEST EVENTS</Typography>
                        <Typography variant="h3">Educavo Events</Typography>
                        <Paper elevation={4}></Paper>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Grid container  className={classes.rightContent} spacing={4} flexDirection="column">

                            <Grid item>
                                <EventsSingleCard bgColor="#dcf1fd" />
                            </Grid>
                            <Grid item>
                                <EventsSingleCard bgColor="#e9fbd5" />
                            </Grid>
                            <Grid item>
                                <EventsSingleCard bgColor="#fee2c0" />
                            </Grid>
                            <Grid item>
                                <UnderlineEffact>VIEW ALL EVENTS</UnderlineEffact>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default EventsSection;
