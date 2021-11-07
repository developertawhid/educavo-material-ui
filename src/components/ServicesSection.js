import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';


const data = [
    {
        img: 'https://keenitsolutions.com/products/html/educavo/assets/images/services/1.jpg',
        title: 'University Life',
        iconImg: 'https://keenitsolutions.com/products/html/educavo/assets/images/services/icons/1.png',
        bgColor: '#273c66e0',
        link: "/"
    },
    {
        img: 'https://keenitsolutions.com/products/html/educavo/assets/images/services/1.jpg',
        title: 'Graduation',
        iconImg: 'https://keenitsolutions.com/products/html/educavo/assets/images/services/icons/2.png',
        bgColor: '#21a7d0e0',
        link: "/"
    },
    {
        img: 'https://keenitsolutions.com/products/html/educavo/assets/images/services/1.jpg',
        title: 'Athletics',
        iconImg: 'https://keenitsolutions.com/products/html/educavo/assets/images/services/icons/3.png',
        bgColor: '#6610f2e0',
        link: "/"
    },
    {
        img: 'https://keenitsolutions.com/products/html/educavo/assets/images/services/1.jpg',
        title: 'Social',
        iconImg: 'https://keenitsolutions.com/products/html/educavo/assets/images/services/icons/3.png',
        bgColor: '#21a7d0e0',
        link: "/"
    },
]

const useStyles = makeStyles({
    root: {
        position: "relative", 
        height: "280px"
    },
    img: {
        position: "absolute", 
        zIndex: "-1", top: 0, 
        left: 0, width: "100%", 
        height: "100%" 
    },
    boxWrapper: {
        display: "grid",
        alignContent: "center", 
        justifyContent: "center", 
        zIndex: "999", 
        textAlign: "center", 
        height: "100%"
    },
    link: {
        color: "inherit", 
        textDecoration: "none"
    }
    
})

function ServicesSection() {
    const classes = useStyles()

    return (
        <Grid container sx={{mt: "75px"}}>
            {data.map((item, index) => (
                <Grid key={index} item sm={12} md={6} lg={3}  className={classes.root}>
                    <img src={item.img} alt="Services" className={classes.img} />

                    <Box className={classes.boxWrapper} style={{backgroundColor: item.bgColor,}}>

                        <img src={item.iconImg} alt="Services Icon" style={{margin: "0 auto"}} />
                        <Box component="h2" color="white" mt={2} >
                            <Link className={classes.link} to={item.link}>{item.title}</Link>
                        </Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    )
}

export default ServicesSection;
