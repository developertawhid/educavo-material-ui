import { Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import SectionTitle from './SectionTitle';
import SubscribeInput from './SubscribeInput';

const useStyles = makeStyles({
    root: {
        background: "url(https://keenitsolutions.com/products/html/educavo/assets/images/bg/newsletter-bg.jpg)",
        color: "white",
        padding: "60px",
        height: "220px"
    },
})

function NewsletterSection() {

    const classes = useStyles();

    return (
        <Container maxWidth="lg" style={{marginTop: "-120px"}}>
            <Paper className={classes.root} elevation={3}>

                <Grid container>
                    <Grid item sm={12} md={4}>
                        <SectionTitle left white title="Subscribe Us to join Our community" subTitle="SEWSKETTER" style={{color: "white"}} />
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid sx={{margin: "20px 0"}} item sm={12} md={6}>
                        <SubscribeInput />
                    </Grid>
                </Grid>
                
            </Paper>
        </Container>
    )
}

export default NewsletterSection;
