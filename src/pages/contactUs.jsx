import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import End from '../components/End'
import Contact from '../components/contact'
import Map from '../components/map'

function ContactUs() {

    console.log("ContactUs page loaded");

    return (
        
    <div className="about-App">
        <Header />
        <Contact/>
        <Map/>
        <Footer />
        <End />
    </div>
    );
}

export default ContactUs;
