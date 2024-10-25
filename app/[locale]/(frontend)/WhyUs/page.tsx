


import ContactHero from '../../components/Contact/ContactHero'
import AboutUs from '../../components/WhyUs/AboutUs'
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