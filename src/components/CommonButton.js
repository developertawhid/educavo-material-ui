import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function CommonButton({value, link=null}) {
    return (
        <Button style={{color: 'white', padding: "12px 30px", backgroundColor: "#21a7d0", fontSize: "16px"}}>
            <Link style={{color: "inherit", textDecoration: "none"}} to={ link ? link: "/"}>{value}</Link>
        </Button>
    )
}

export default CommonButton;
