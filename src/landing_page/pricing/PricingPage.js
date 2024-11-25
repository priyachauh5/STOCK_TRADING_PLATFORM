import React from 'react';

import Hero from './Hero';
import Brokerage from './Brokerage';

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function PricingPage() {
    return ( 
        <>
            <Navbar/>
            <Hero/>
            <Brokerage/>
            <OpenAccount />
            <Footer />
        </>
     );
}

export default PricingPage;