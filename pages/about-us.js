import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import AboutContent from '../components/AboutUs/AboutContent';
import FeaturesArea from '../components/HomeTwo/FeaturesArea';
import TeamCard from '../components/Common/TeamCard';
import Footer from '../components/Layouts/Footer';
class AboutUs extends Component {
    render() {
        return (
            <>
                <Navbar />

                <AboutContent />

                <TeamCard />

                <FeaturesArea />

                <Footer />
            </>
        );
    }
}

export default AboutUs;