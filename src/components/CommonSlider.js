import { makeStyles } from '@mui/styles';
import React from 'react';
import Carousel from 'react-elastic-carousel';

const useStyles = makeStyles({
    root: {
        color: "white",
        "& .rec-pagination, .rec-arrow-left, .rec-arrow-right": {
            display: "none"
        },
        "& .rec-carousel-item": {
            margin: "0 10px"
        },
        "& .rec-carousel-item img": {
            width: "100%"
        },
    }
});


function CommonSlider({children, ...rest}) {

    const classes = useStyles();

    return (
        <Carousel enableAutoPlay={true} autoPlaySpeed={3000} {...rest} className={classes.root} SliderItemsToShow={1}>
            {children}
        </Carousel>
    )
}

export default CommonSlider;
