import { Box } from '@mui/material'
import React from 'react'
import Carousel from 'react-elastic-carousel'
import '../assets/styles/Slider.css'
import SliderItem from './SliderItem'


function Slider() {
    return (
        <Box component="section">
            <Carousel SliderItemsToShow={1} className="slider_wrappper">
                <SliderItem 
                    img="https://keenitsolutions.com/products/html/educavo/assets/images/slider/h2-2.jpg" 
                    subTitle="World Leading University" 
                    title="Educavo University" link="/" 
                />
                <SliderItem 
                    img="https://keenitsolutions.com/products/html/educavo/assets/images/slider/h2-1.jpg" 
                    subTitle="World Leading University"
                    title="Educavo University" 
                    link="/" 
                />
                <SliderItem 
                    img="https://keenitsolutions.com/products/html/educavo/assets/images/slider/h2-2.jpg" 
                    subTitle="World Leading University" 
                    title="Educavo University" link="/" 
                />
                <SliderItem 
                    img="https://keenitsolutions.com/products/html/educavo/assets/images/slider/h2-1.jpg" 
                    subTitle="World Leading University"
                    title="Educavo University" 
                    link="/" 
                />
            </Carousel>
        </Box>
    )
}

export default Slider
