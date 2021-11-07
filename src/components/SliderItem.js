import { Box, Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CommonButton from './CommonButton';

const useStyles = makeStyles({
    root: ({img}) => ({
        background: `url(${img})`,
        position: 'relative', 
        height: 'calc(100vh - 150px)', 
        maxHeight: "900px", 
        minHeight: "500px", width: '100%', 
        backgroundPosition: 'center 0', 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: "cover"
    }),
    container: {
        height: "100%", 
        display: 'flex', 
        alignItems: 'center'
    },
    titleStyle: {fontFamily: "'Nunito', sans-serif", fontWeight: "600", fontSize: "100px", padding: "30px 0"}
})

function SliderItem({img, subTitle, title, link}) {

    const classes = useStyles({img});

    return (
        <Box className={classes.root}>
            <Container maxWidth="lg"  className={classes.container}>
                <Box sx={{color: "white"}}>
                    <Typography sx={{fontWeight: "500"}}  variant="h2">{subTitle}</Typography>
                    <Typography className={classes.titleStyle} variant="h1">{title}</Typography>
                    <Box>
                        <CommonButton value="Discover More" />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default SliderItem;
