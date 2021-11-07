import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CommonSlider from './CommonSlider';
import ContainerSection from './ContainerSection';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 8 }
  ];

function PartnerSection() {

    return (
        <ContainerSection bgColor="#f3f8f9">
            <CommonSlider breakPoints={breakPoints}>

                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/1.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/2.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/3.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/4.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/5.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/6.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/1.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/2.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/3.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/4.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/5.png" alt="Company logo" />
                    </Link>
                </Box>
                <Box>
                    <Link to="/"> 
                        <img src="https://keenitsolutions.com/products/html/educavo/assets/images/partner/6.png" alt="Company logo" />
                    </Link>
                </Box>

            </CommonSlider>
        </ContainerSection>
    )
}

export default PartnerSection;
