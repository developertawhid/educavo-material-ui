import { Box } from '@mui/system';
import React from 'react';
import Blog from './Blog';
import CommonSlider from './CommonSlider';
import ContainerSection from './ContainerSection';
import SectionTitle from './SectionTitle';

const data =[
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/1.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/2.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/3.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/4.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/5.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/1.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/2.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/3.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/4.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/5.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
    {
        creator: "Admin", 
        date: "June 15 2021", 
        imgLink: "https://keenitsolutions.com/products/html/educavo/assets/images/blog/style2/1.jpg", 
        title: "Modern School the Lovely Valley Team Work", 
        titleLink: "/", 
        paragraph: "the acquisition of knowledge, skills, values befs, and habits. Educational methods include teach ing, training, storytelling", 
        comments: "12", 
        blogLink: "/"
    },
];

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 }
  ];

function BlogSection() {
    return (
        <ContainerSection bgColor="#f3f8f9">
            <SectionTitle subTitle="NEWS UPDATE" title="Latest News &amp; Events" />
    
            <CommonSlider breakPoints={breakPoints}>
                {data.map((item, index)=> (
                        <Box key={index} sx={{padding: "5px 0 150px 0"}}>
                            <Blog data={item} />
                        </Box>
                    ))}
            </CommonSlider>
        </ContainerSection>
    )
}

export default BlogSection;
