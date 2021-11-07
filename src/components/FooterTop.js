import { Grid } from '@mui/material';
import React from 'react';
import FooterAddress from './FooterAddress';
import FooterLists from './FooterLists';

const lists = [
    {
        id: 1,
        title: "EXPLORE",
        contents: [
            {
                list: "eLearning School",
                link: "/",
            },
            {
                list: "Privacy Policy",
                link: "/",
            },
            {
                list: "Courses",
                link: "/",
            },
            {
                list: "Become A Teacher",
                link: "/",
            },
            {
                list: "Blog",
                link: "/",
            },
        ]
    },
    {
        id: 2,
        title: "CATEGORIES",
        contents: [
            {
                list: "All Courses",
                link: "/",
            },
            {
                list: "Web Development",
                link: "/",
            },
            {
                list: "Genarel Education",
                link: "/",
            },
            {
                list: "Digital Marketing",
                link: "/",
            },
            {
                list: "Web Design",
                link: "/",
            },
        ]
    },
    {
        id: 3,
        title: "RESOURCES",
        contents: [
            {
                list: "Become A Teacher",
                link: "/",
            },
            {
                list: "Instructor/Student Profile",
                link: "/",
            },
            {
                list: "Courses",
                link: "/",
            },
            {
                list: "Checkout",
                link: "/",
            },
            {
                list: "Terms & Conditions",
                link: "/",
            },
        ]
    },
]

function FooterTop() {
    return (
        <Grid container sx={{my: 10}} spacing={3}>
            {lists.map((list) => (
                <Grid item key={list.id} sm={12} md={6} lg={3}>
                    <FooterLists listItem={list} />
                </Grid>
            ))}

            <Grid item sm={12} md={6} lg={3}>
                <FooterAddress />
            </Grid>
        </Grid>
    )
}

export default FooterTop;
