import React from 'react'
import ContactHero from '../../components/Contact/ContactHero'
import ExpertiseSection from '../../components/Expertise/ExpertiseSection'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations("expertise")
  
  return (
    <div>
        <ContactHero heading={`${t('mainHeader')}`} label={`${t('navTitle')}`}/>
        <ExpertiseSection/>
    </div>
  )
}

export default Page
