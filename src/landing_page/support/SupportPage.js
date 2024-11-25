import React from 'react';

import Hero from './Hero';
import CreateTicket from './CreateTicket';

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';


function SupportPage() {
    return ( 
        <>
            <Navbar />
            <Hero />
            <CreateTicket />
            <OpenAccount />
            <Footer />
        </>
     
     );
}

export default SupportPage;