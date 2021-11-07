import { Box, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';
import NewsletterSection from './NewsletterSection';

const useStyles = makeStyles({
    root: {
        padding: "16px", 
        background: "linear-gradient( #172e58d6, #172e58d6), url(https://keenitsolutions.com/products/html/educavo/assets/images/bg/footer-bg.png)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    }
})

function Footer() {

    const classes = useStyles();
    return (
        <Box className={classes.root} component="footer">
            <NewsletterSection />
            <Container maxWidth="lg">
                <FooterTop />
                <hr color= "#5a96dca5" />
                <FooterBottom />
            </Container>
        </Box>
    )
}

export default Footer;
