import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    root: {
        background: "#21a7d0",
        color: "white",
        marginLeft: "10px",
        "&:hover": {
            background: "#32b8e1"
        }
    }
})

function SocialIcons() {

    const classes = useStyles();
    return (
        <>
            <IconButton className={classes.root}>
                <FacebookOutlinedIcon />
            </IconButton>
            <IconButton className={classes.root}>
                <TwitterIcon />
            </IconButton>
            <IconButton className={classes.root}>
                <InstagramIcon />
            </IconButton>
            <IconButton className={classes.root}>
                <LinkedInIcon />
            </IconButton>
            <IconButton className={classes.root}>
                <PinterestIcon />
            </IconButton>
        </>
    )
}

export default SocialIcons;
