import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ContainerSection from './ContainerSection';
import SingleDegree from './SingleDegree';

const datas = [
    {
        id: "1",
        title: "Undergraduate",
        paragraph: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
        img: "https://keenitsolutions.com/products/html/educavo/assets/images/degrees/1.jpg",
        link: "/"
    },
    {
        id: "2",
        title: "Postgraduate",
        paragraph: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
        img: "https://keenitsolutions.com/products/html/educavo/assets/images/degrees/2.jpg",
        link: "/"
    },
    {
        id: "3",
        title: "PHD Scholarships",
        paragraph: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
        img: "https://keenitsolutions.com/products/html/educavo/assets/images/degrees/3.jpg",
        link: "/"
    },
    {
        id: "4",
        title: "International Hubs",
        paragraph: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
        img: "https://keenitsolutions.com/products/html/educavo/assets/images/degrees/4.jpg",
        link: "/"
    },
    {
        id: "5",
        title: "PHD Scholarships",
        paragraph: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod",
        img: "https://keenitsolutions.com/products/html/educavo/assets/images/degrees/5.jpg",
        link: "/"
    },
];

const useStyles = makeStyles({
    firstBox: {
        display: "grid", 
        alignContent: "center", 
        height: "350px"
    },
    firstBoxSubTitle: {
        color: "#21a7d0", 
        fontWeight: "500"
    },
    firstBoxTitle: {
        fontSize: "35px", 
        fontWeight: "500"
    },
    root: {
        height: "350px", 
        position: "relative", 
        padding: "30px",
        "&:hover .makeStyles-hoverBox-13": {
            visibility: "visible",
            transform: 'rotateY(0deg) rotate(0deg)',
        },
        "&:hover .makeStyles-boxSubTitle-12": {
            bottom: "-30px",
        },
    },
    boxSubTitle: {
        position: "absolute", 
        left: "25px", 
        bottom: "20px", 
        color: "white",
        transition: "0.3s"
    },
    hoverBox: {
        color: "white", 
        display: "grid",
        visibility: "hidden", 
        transition: "0.3s",
        transform: 'rotateY(90deg) rotate(1deg)',
        position: "absolute", 
        top: "30px", 
        left: "30px", 
        width: "calc(100% - 60px)", 
        height: "calc(100% - 60px)", 
        alignContent: "center", 
        textAlign: 'center', 
        backgroundColor: "#112958e6", 
        padding: "35px", 
        borderRadius: "3px"
    },
    hoverButton: {
        width: "120px", 
        margin: "0 auto"
    }
});

function DegreeSection() {

    const classes = useStyles();

    return (
        <ContainerSection bgColor="#f3f8f9 ">
            <Grid container spacing={4} >
                <Grid item md={6} lg={4} sm={12}>
                    <Box className={classes.firstBox}>
                        <Typography className={classes.firstBoxSubTitle} variant="subtitle1">DEGREE CATEGORIS</Typography>
                        <Typography className={classes.firstBoxTitle} variant="h4">Successfully Complete A Degree at Educavo University</Typography>
                    </Box>
                </Grid>
                {datas.map((item, index) => <SingleDegree key={index} data={item} classes={classes} />)}
            </Grid>
        </ContainerSection>
    )
}

export default DegreeSection;
