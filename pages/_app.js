import '../public/css/bootstrap.min.css';
import '../public/css/fontawesome.min.css';
import '../public/css/flaticon.css';
import 'animate.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import '../utils/i18nClient';
import { appWithTranslation } from 'next-i18next';

import App from 'next/app';
import Head from 'next/head';
import GoTop from '../components/Layouts/GoTop';



class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props

        return (
            <>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Top Developers Latam is a provider of software development and outsourcing services"/>
                    <meta name="robots" content="index,nofollow"/>
                    <meta name="keywords" content="dev, outsourcing, software development, latam, brazil"/>
                    <meta property="og:title" content="Top Dev Latam"/>
                    <meta property="og:description" content="Offering software development and outsourcing services."/>
                    <meta property="og:image" content="https://www.topdevlatam.com.br/images/logo.png"/>
                    <meta property="og:url" content="https://www.topdevlatam.com.br/"/>
                    <title>Top Dev Latam</title>
                </Head>
 
                <Component {...pageProps} />
                
                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="15.50" />
            </>
        );
    }
}


export default appWithTranslation(MyApp);