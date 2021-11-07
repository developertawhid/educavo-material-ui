import { Box, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import CommonButton from './CommonButton';
import ContainerSection from './ContainerSection';
import TestimonialCard from './TestimonialCard';

const useStyles = makeStyles({
    paperImg: {
        height: "300px", 
        backgroundImage: "url(https://keenitsolutions.com/products/html/educavo/assets/images/donor/1.jpg)", 
        backgroundPosition: "center center", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover", 
        marginBottom: "15px"
    },
    root: {
        paddingLeft: "60px",
    },
})


const data=[
    {
        title: "Education is the passport to the future for tomorrow belongs to those who prepare for it today",
        name: "Mahadi mansura",
        peopleTitle: "Head Teacher",
        img: "https://keenitsolutions.com/products/html/educavo/assets/images/testimonial/style2/1.jpg"
    },
    {
        title: "Education is the passport to the future for tomorrow belongs to those who prepare for it today",
        name: "Mahadi mansura",
        peopleTitle: "Head Teacher",
        img: "https://keenitsolutions.com/products/html/educavo/assets/images/testimonial/style2/2.jpg"
    },
    {
        title: "Education is the passport to the future for tomorrow belongs to those who prepare for it today",
        name: "Mahadi mansura",
        peopleTitle: "Head Teacher",
        img: "https://keenitsolutions.com/products/html/educavo/assets/images/donor/1.jpg"
    },
]

function TestimonialSection() {

    const classes = useStyles();

    return (
        <ContainerSection>
            <Grid container>
                <Grid item sm={12} md={5}>
                    <Paper className={classes.paperImg}></Paper>
                    <Box>
                        <Typography sx={{fontSize: "30px", fontWeight: "500"}} variant="h4">Donation helps us</Typography>
                        <Box sx={{fontSize: "15px", color: "#555", fontWeight: "500", marginBottom: "30px"}} component="p">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua enims ad minim dolor sit amet, consectetur adipisic ing elit adipisic, sed eius to mod tempors .</Box>

                        <CommonButton value="BECOME A DONOR" />
                    </Box>
                </Grid>
                <Grid item sm={12} md={7} className={classes.root}>
                    <Grid container flexDirection="column"  spacing={3}>


                        {data.map((item, index)=> (
                           <Grid item key={index}>
                                <TestimonialCard data={item}  />
                            </Grid> 
                        ))}

                    </Grid>
                </Grid>
            </Grid>
        </ContainerSection>
    )
}

export default TestimonialSection;
