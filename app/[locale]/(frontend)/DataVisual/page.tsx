

import CardsSection from '../../components/DataVisual/CardsSection'
import ChartsSection from '../../components/DataVisual/ChartsSection'
import HeroDataVisual from '../../components/DataVisual/HeroDataVisual'
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