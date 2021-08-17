import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import FeaturesArea from '../components/HomeTwo/FeaturesArea';
import AboutContent from '../components/AboutUs/AboutContent';
import WhyChooseUs from '../components/Common/WhyChooseUs';
import TeamCard from '../components/Common/TeamCard';
import AnalysisFormContent from '../components/HomeOne/AnalysisFormContent';
import Footer from '../components/Layouts/Footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Index = () => {

        return (
            <>
                <Navbar />

                <MainBanner />

                <div className="pb-100">
                    <AboutContent />
                </div>

                <FeaturesArea />

                <WhyChooseUs />

                <TeamCard />

                <div className="pt-100 pb-100">
                    <AnalysisFormContent />
                </div>
                
                <Footer />
            </>
        );
}


export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  })
  

export default Index;