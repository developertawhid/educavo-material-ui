import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles({
    singlePaper: {
        display: "flex",
        padding: "22px 35px",
        background: "#f3f8f9"
    },
    cardImg: ({img})=> ({
        height: "115px", 
        minWidth: "140px",
        marginRight: "40px",
        backgroundPosition: "center center", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "cover",
        background: `url(${img})`
    }),
    rightBox: {
        "& p": {
            fontSize: "19px",
            fontWeight: "600",
            marginTop: "0",
            lineHeight: "25px",
            marginBottom: "5px",
            color: "#112958",
            fontFamily: "'Nunito', sans-serif"
        },
        "& .MuiTypography-span": {
            display: "block",
            fontWeight: "500",
            marginTop: "0"
        }
    },
    rightBoxTitle: {
        color: "#112958",
        fontSize: "14px",
    },
    rightBoxSubTitle: {
        fontSize: "12px",
    },
})


function TestimonialCard({ data:{img, title, name, peopleTitle} }) {

    const classes = useStyles({img})
    return (
        <Paper className={classes.singlePaper} >
            <Paper className={classes.cardImg}></Paper>
            <Box className={classes.rightBox}>
                <Box component="p">{title}</Box>
                <Typography className={classes.rightBoxTitle} variant="span">{name}</Typography>
                <Typography className={classes.rightBoxSubTitle} variant="span">{peopleTitle}</Typography>
            </Box>
        </Paper>
    )
}

export default TestimonialCard;
