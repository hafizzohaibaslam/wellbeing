

import ContactHero from '../../components/Contact/ContactHero'
import FAQ from '../../components/Contact/FAQ'
import GetTouch from '../../components/Contact/GetTouch'
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