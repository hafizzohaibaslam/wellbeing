

import CardsSection from '@/app/components/DataVisual/CardsSection'
import ChartsSection from '@/app/components/DataVisual/ChartsSection'
import HeroDataVisual from '@/app/components/DataVisual/HeroDataVisual'
import React from 'react'


const page = () => {
  return (
    <div>
        <HeroDataVisual/>
        <CardsSection />
        <ChartsSection/>
    </div>
  )
}

export default page