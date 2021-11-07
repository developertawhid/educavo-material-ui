import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import UnderlineEffact from './UnderlineEffact';

const useStyles = makeStyles({
    root: {
        padding: "8px",
        alignItems: "center", 
        display: "flex",
        background: "transparent",
        boxShadow: "0px 2px 1px -1px rgb(90 150 220 / 20%), 0px 1px 1px 0px rgb(90 150 220 / 14%), 0px 1px 3px 0px rgb(90 150 220 / 12%)",
        color: "white",
        "&:hover": {
            background: "rgb(90 150 220 / 40%)"
        }
    },
    link: {
        color: "inherit",
        marginLeft: "5px",
        fontSize: "14px",
        textDecoration: "none",
        transition: "0.1s",
        "&:hover": {
            textDecoration: "underline",
        }
    }
});

function FooterLists({listItem:{title, contents}}) {

    const classes = useStyles();
    return (
        <Box>
            <Typography sx={{mb: 3, color: "white"}} variant="subtitle1">{title}</Typography>
            {contents.map((content, index) => (
                <Paper key={index} className={classes.root}>
                    <AddBoxSharpIcon sx={{mr: 1, fontSize: "12px"}} />
                    <UnderlineEffact white link={content.link}>{content.list}</UnderlineEffact>
                </Paper>
            ))}
        </Box>
    )
}

export default FooterLists;
