import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: ({white})=> ({
        position: "relative",
        display: "inline-block",
        "&::after": {
            width: "100%",
            display: "block",
            height: "1px",
            position: 'absolute',
            bottom: "0",
            backgroundColor: "#21a7d0",
            transformOrigin: "left",
            transform: "scaleX(0)",
            transition: "0.3s",
        },
        "&:hover::after": {
            transform: "scaleX(1)",
        },
        "& a": {
            textDecoration: "none",
            color: white ? "white" : "#111",
            fontSize: white ? "14px" : "16px",
            transition: "0.3s"
        },
        "&:hover a": {
            color: "#21a7d0"
        },
    }),
})

function UnderlineEffact({link=null,children, white=null , ...rest}) {

    const classes = useStyles({white});

    return (
        <Box className={classes.root} {...rest}>
            <Link className={classes.link} to={link ? link : "/"}>{children}</Link>
        </Box>
    )
}

export default UnderlineEffact;
