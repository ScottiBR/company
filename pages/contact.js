import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import AnalysisFormContent from '../components/HomeOne/AnalysisFormContent';
import TeamCard from '../components/Common/TeamCard';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <div className="pt-100 pb-100">
                    <AnalysisFormContent />
                </div>

                <TeamCard />
                
                <Footer />
            </>
        );
    }
}

export default Contact;