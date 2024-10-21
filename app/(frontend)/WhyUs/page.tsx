


import ContactHero from '@/app/components/Contact/ContactHero'
import AboutUs from '@/app/components/WhyUs/AboutUs'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContactHero heading='Why Us?' label='Why Us?'/>
        <AboutUs/>
    </div>
  )
}

export default page