//Collect all component and bring over here!!!
import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';

import OpenAccount from '../OpenAccount'; //go out and select the folder
import Navbar from '../Navbar';
import Footer from '../Footer';


function HomePage() {
    return ( 
        <> 
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            
        </>
     
     );
}

export default HomePage;