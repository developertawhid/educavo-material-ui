import React from 'react';
import AboutSection from '../AboutSection';
import BlogSection from '../BlogSection';
import CtaSection from '../CtaSection';
import DegreeSection from '../DegreeSection';
import EventsSection from '../EventsSection ';
import Footer from '../Footer';
import PartnerSection from '../PartnerSection';
import ServicesSection from '../ServicesSection';
import Slider from '../Slider';
import TestimonialSection from '../TestimonialSection';

function Home() {
    return (
        <div>
            <Slider />
            <ServicesSection/>
            <AboutSection />
            <DegreeSection />
            <CtaSection />
            <EventsSection />
            <PartnerSection />
            <TestimonialSection />
            <BlogSection />
            <Footer />
        </div>
    )
}

export default Home;
