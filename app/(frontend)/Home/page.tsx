import Blogs from '@/app/components/HomeComponents/Blogs';
import ContactUs from '@/app/components/HomeComponents/ContactUs';
import Expertise from '@/app/components/HomeComponents/Expertise';
import Hero from '@/app/components/HomeComponents/Hero';
import MarketInsights from '@/app/components/HomeComponents/MarketInsights';
import Testimonials from '@/app/components/HomeComponents/Testimonials';
import TrustedPartners from '@/app/components/HomeComponents/TrustedPartners';
import WhyUs from '@/app/components/HomeComponents/WhyUs';

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
