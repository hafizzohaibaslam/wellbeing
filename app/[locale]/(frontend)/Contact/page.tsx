

import ContactHero from '../../components/Contact/ContactHero'
import FAQ from '../../components/Contact/FAQ'
import GetTouch from '../../components/Contact/GetTouch'
import React from 'react'
import { useTranslations } from 'next-intl'
const Page = () => {
  const t = useTranslations("contact")
  return (
    <div>
      <ContactHero heading={`${t('mainHeader')}`} label={`${t('navTitle')}`}/>
      <GetTouch/>
      <FAQ/>
    </div>
  )
}

export default Page