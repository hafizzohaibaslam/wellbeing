
import React from 'react'
import ContactHero from '../../components/Contact/ContactHero'
import ExpertiseSection from '@/app/components/Expertise/ExpertiseSection'

const page = () => {
  return (
    <div>
        <ContactHero  heading='Our Expertise' label='Expertise'/>
        <ExpertiseSection/>
    </div>
  )
}

export default page