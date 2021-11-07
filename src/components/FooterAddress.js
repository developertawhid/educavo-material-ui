import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import UnderlineEffact from './UnderlineEffact';

const useStyles = makeStyles({
    root: {
        padding: "8px",
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
})

function FooterAddress() {

    const classes = useStyles();
    return (
        <Box>
            <Typography sx={{mb: 3, color: "white"}} variant="subtitle1">ADDRESS</Typography>
            <Paper className={classes.root}>
                <AddLocationAltOutlinedIcon sx={{mr: 1}} />
                <Box sx={{fontSize: "14px", lineHeight: "30px"}}>503 Old Buffalo Street Northwest #205 New York-3087</Box>
            </Paper>
            <Paper className={classes.root}>
                <PhoneInTalkOutlinedIcon sx={{mr: 1}} />
                <Box>
                    <UnderlineEffact white>(123)-456-7890 </UnderlineEffact>, <UnderlineEffact white> (123)-456-7890</UnderlineEffact>
                </Box>
            </Paper>
            <Paper className={classes.root}>
                <MailOutlineOutlinedIcon sx={{mr: 1}} />
                <Box>
                    <UnderlineEffact white>infoname@gmail.com </UnderlineEffact> , <UnderlineEffact white> www.yourname.com</UnderlineEffact>
                </Box>
            </Paper>
        </Box>
    )
}

export default FooterAddress;
