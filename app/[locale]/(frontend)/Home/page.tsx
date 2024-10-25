import Blogs from '../../components/HomeComponents/Blogs';
import ContactUs from '../../components/HomeComponents/ContactUs';
import Expertise from '../../components/HomeComponents/Expertise';
import Hero from '../../components/HomeComponents/Hero';
import MarketInsights from '../../components/HomeComponents/MarketInsights';
import Testimonials from '../../components/HomeComponents/Testimonials';
import TrustedPartners from '../../components/HomeComponents/TrustedPartners';
import WhyUs from '../../components/HomeComponents/WhyUs';

import React from 'react';

const Page = () => {
  return (
   <div>
    <Hero/>
    <WhyUs/>
    <Expertise/>
    <MarketInsights/>
    <Blogs/>
    <Testimonials/>
    <TrustedPartners/>
    <ContactUs isContact={false}/>
  
   </div>
  );
};

export default Page;
