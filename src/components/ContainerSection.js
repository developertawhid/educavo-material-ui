import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function ContainerSection({children, bgColor=''}) {
    return (
        <Box sx={{ p: 12, background: bgColor }} component="section">
            <Container maxWidth="lg">{children}</Container>
        </Box>
    )
}

export default ContainerSection;
