import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        display: "flex",
        padding: "25px",
        alignItems: "center"
    },
    leftPaper: (props) => ({
        padding: "10px",
        marginRight: "25px",
        display: "flex",
        flexDirection: "column",
        minWidth: "80px",
        height: "80px",
        justifyContent: "center",
        alignItems: "center",
        background: props.bgColor,
    }),
    date: {
        fontSize: "35px",
        fontFamily: "'Nunito', sans-serif",
        color: "#112958",
        paddingTop: "0px",
        margin: "-5px 0px" ,
        fontWeight: '700'
    },
    subTitle: {
        fontSize: "14px",
        fontWeight: "500",
        color: "#555",
        "& a": {
            textDecoration: "none",
            color: "inherit",
            "&:hover ": {
                color: "#21a7d0"
            },
        },
        
    },
    
    titleLink: {
        lineHeight: "28px",
        fontSize: "22px",
        fontWeight: "500",
        "& a": {
            textDecoration: "none",
            color: "#111",
            transition: "0.3s"
        },
        "&:hover a": {
            color: "#21a7d0"
        },
        
    }
})

function EventsSingleCard({bgColor}) {

    const classes = useStyles({bgColor});

    return (
        <Paper className={classes.root}>
            <Paper className={classes.leftPaper}>
                <Box component="span" sx={{fontSize: "14px", fontWeight: '500', marginTop: "5px"}}>June</Box>
                <Box component="span" className={classes.date}>20</Box>
            </Paper>
            <Box>
                <Box component="span" className={classes.subTitle}>
                    <Link to="/">Math </Link>
                    &
                    <Link to="/"> Enlish</Link>
                </Box>
                <Typography variant="h5" className={classes.titleLink}>
                    <Link to="/">Seucation Technology and Mobile Accessories Learn</Link>
                </Typography>
            </Box>
        </Paper>
    )
}

export default EventsSingleCard;
