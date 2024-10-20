

import ContactHero from '@/app/components/Contact/ContactHero'
import FAQ from '@/app/components/Contact/FAQ'
import GetTouch from '@/app/components/Contact/GetTouch'
import React from 'react'

const Page = () => {
  return (
    <div>
      <ContactHero heading='Our Contact' label='Contact'/>
      <GetTouch/>
      <FAQ/>
    </div>
  )
}

export default Page