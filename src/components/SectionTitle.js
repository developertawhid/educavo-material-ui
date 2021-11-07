import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';

const useStyles = makeStyles({
    root: ({left, white}) => ({
        textAlign: left ? "left" : "center",
        marginBottom: "60px",
        "& h6": {
            color: white ? "white" : "#21a7d0",
            fontSize: "16px",
            fontWeight: "500"
        },
        "& h2": {
            color: white ? "white" : "#112958",
            fontFamily: "'Nunito', sans-serif !important",
            fontSize: "30px",
            fontWeight: "800"
        },
    })
})

function SectionTitle({subTitle, title, left=null, white=null}) {

    const classes = useStyles({left, white});

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle1">{subTitle}</Typography>
            <Typography variant="h2">{title}</Typography>
        </Box>
    )
}

export default SectionTitle;
