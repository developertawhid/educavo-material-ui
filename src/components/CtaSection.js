import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import { Box, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import CommonButton from './CommonButton';

const useStyles = makeStyles({
    root: {
        position: "relative",
        "&::before": {
            content: '',
            background: "url(https://keenitsolutions.com/products/html/educavo/assets/images/cta/style2/left-bg.jpg)",
            width: "50%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            zIndex: "-1",
        },
        "&::after": {
            content: '',
            background: "url(https://keenitsolutions.com/products/html/educavo/assets/images/cta/style2/right-bg.jpg)",
            width: "50%",
            height: "100%",
            position: "absolute",
            top: 0,
            right: 0,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            zIndex: "-1",
        },
        
    },
    leftSide:{
        paddingLeft: "120px",
        paddingBottom: "20px",
        "& a": {
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center"
        },
        "& .css-i4bv87-MuiSvgIcon-root" : {
            fontSize: "50px",
            marginRight: "15px"
        },
        "& p" : {
            width: "120px"
        }
    },
    riteSide: {
            padding: "120px 0px 120px 60px",
        "& > h2" : {
            fontSize: "30px",
            fontWeight: "500",
            color: "#112958"
        },
        "& > p" : {
            fontSize: "14px",
            padding: "0px 0 20px 0",
            color: "#112958"
        },
    },
})

function CtaSection() {
    
    const classes = useStyles();

    return (
        <Box className={classes.root} >
            <Container maxWidth="lg">
                <Grid container alignItems='flex-end'>
                    <Grid item sm={12} md={6} className={classes.leftSide}>
                        <a href="/">
                            <OndemandVideoOutlinedIcon />
                            <Box component="p" sx={{color: "white"}}>
                                Take a Video Tour at Educavo
                            </Box>
                        </a>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box className={classes.riteSide}>
                            <Typography variant="h2">Admission Open for 2021</Typography>
                            <Box component="p">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eius to mod tempor incididunt ut labore et dolore magna aliqua. Ut enims ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis.</Box>

                            <CommonButton value="Apply Now" link="/" />
                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CtaSection;
