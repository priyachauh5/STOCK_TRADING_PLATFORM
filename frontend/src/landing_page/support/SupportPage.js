import React from 'react';

import Hero from './Hero';
import CreateTicket from './CreateTicket';

import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';


function SupportPage() {
    return ( 
        <>
            <Hero />
            <CreateTicket />
            <OpenAccount />
        </>
     
     );
}

export default SupportPage;