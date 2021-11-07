import { Box, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        color: "#505050",
    },
    imgPaper: ({imgLink}) => ({
        background: `url(${imgLink})`,
        height: "250px",
        whidth: "100%",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }),
    contentWrapper: {
        padding: "20px"
    },
    dateRoot: {
        display: "flex",
        alignItems: "center",
        marginBottom: "5px",
        "& span": {
            fontSize: "14px",
            color: "inherit",
            flexBasis: "50%",
        }
    },
    titleRoot: {
        lineHeight: "28px",
        fontSize: "22px",
        fontWeight: "700",
        fontFamily: "'Nunito', sans-serif",
        "& a": {
            textDecoration: "none",
            color: "#112958",
            transition: "0.3s"
        },
        "&:hover a": {
            color: "#21a7d0"
        },
    },
    paragraphRoot: {
        fontSize: "13px",
        color: "inherit",
        margin: "20px 0",
        lineHeight: "22px",
    },
    commentRoot: {
        display: "flex",
        alignItems: "center",
        "& p": {
            color: "inherit",
            fontSize: "13px",
            flexBasis: "100%"
        },
        "& a": {
            textDecoration: "none",
            color: "#555",
            transition: "0.3s",
            fontSize: "15px",
            fontWeight: "500",
            minWidth: "fit-content"
        },
        "&:hover a": {
            color: "#21a7d0"
        },
    }
})

function Blog({data:{creator, date, imgLink, title, titleLink, paragraph, comments, blogLink}}) {

    const classes = useStyles({imgLink});

    return (
        <Paper className={classes.root}>
            <Paper className={classes.imgPaper}/>
            <Box className={classes.contentWrapper}>
                <Box className={classes.dateRoot}>
                    <Box component="span">{creator}</Box>
                    <Box component="span">{date}</Box>
                </Box>
                <Typography variant="h2" className={classes.titleRoot}>
                    <Link to={titleLink}>{title}</Link>
                </Typography>
                <Box component="p" className={classes.paragraphRoot}>{paragraph}</Box>
                <hr />
                <Box className={classes.commentRoot}>
                    <Box className={classes.commentRoot} component="p">({comments}) Comments</Box>
                    <Link to={blogLink} >READ MORE </Link>
                </Box>
            </Box>
        </Paper>
    )
}

export default Blog;
