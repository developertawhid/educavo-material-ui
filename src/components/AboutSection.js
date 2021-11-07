import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CommonButton from './CommonButton';
import ContainerSection from './ContainerSection';

function AboutSection() {
    return (
        <ContainerSection bgColor="white">
            <Grid container spacing={5}>
                <Grid item md={5}>
                    <Paper style={{background: "url(https://keenitsolutions.com/products/html/educavo/assets/images/bg/about-intro-bg.jpg)", padding: "100px 50px", color: "white" }}  elevation={3}>
                        <Typography sx={{color: "#21a7d0", fontWeight: "500"}} variant="subtitle1">ABOUTE EDUCAVO</Typography>
                        <Typography sx={{fontSize: "40px"}} variant="h3">Welcome to Educavo University</Typography>

                        <Box sx={{p: "20px 0 40px 0", lineHeight: "25px", fontSize: "15px"}} content="p">Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed eius to mod tempors incididunt ut labore et dolore magna this aliqua enims ad minim.</Box>

                        <CommonButton value="Read More" />
                    </Paper>
                </Grid>
                <Grid item md={7}>

                    <Grid container spacing={4} sx={{mb: 5}}>
                        <Grid item md={4}>
                            <Paper  sx={{backgroundColor: "#fbf8cc", textAlign: "center", padding: "25px 0"}} elevation={2}>
                                <Typography sx={{color: "#112958", fontWeight: "500"}} variant="h4">2K+</Typography>
                                <Typography sx={{color: "#394459", fontWeight: "500"}} variant="subtitle1">Students</Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={4}>
                            <Paper  sx={{backgroundColor: "#e9fbd5", textAlign: "center", padding: "25px 0"}} elevation={2}>
                                <Typography sx={{color: "#112958", fontWeight: "500"}} variant="h4">3.50</Typography>
                                <Typography sx={{color: "#394459", fontWeight: "500"}} variant="subtitle1">Average CGPA</Typography>
                            </Paper>
                        </Grid>
                        <Grid item md={4}>
                            <Paper  sx={{backgroundColor: "#dcf1fd", textAlign: "center", padding: "25px 0"}} elevation={2}>
                                <Typography sx={{color: "#112958", fontWeight: "500"}} variant="h4">95%</Typography>
                                <Typography sx={{color: "#394459", fontWeight: "500"}} variant="subtitle1">Graduates</Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        <Grid item md={6}>
                            <Paper  sx={{backgroundImage: "url(https://keenitsolutions.com/products/html/educavo/assets/images/about/style2/grid1.jpg)", height: "350px"}} elevation={3} />
                        </Grid>
                        <Grid item md={6}>
                            <Paper  sx={{backgroundImage: "url(https://keenitsolutions.com/products/html/educavo/assets/images/about/style2/grid2.jpg)", height: "350px"}} elevation={3} />
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </ContainerSection>
    )
}

export default AboutSection;
