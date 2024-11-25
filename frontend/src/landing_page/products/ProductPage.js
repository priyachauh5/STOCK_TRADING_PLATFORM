import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

import Navbar from '../Navbar';
import Footer from '../Footer';

function ProductPage(){
    return(
        <>
            <Navbar/>
            <Hero/>
            <LeftSection/>
            <RightSection/>
            <Universe/>
            <Footer/>
        </>
    );
}


export default ProductPage;