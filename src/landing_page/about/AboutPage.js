import React from 'react';
import Hero from './Hero';
import Team from './Team';

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';


function AboutPage() {
    return ( 
        <>
            <Hero />
            <Team />
            <OpenAccount />
        </>
     
     );
}

export default AboutPage;