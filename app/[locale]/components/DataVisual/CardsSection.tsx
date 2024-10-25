

import React from 'react'
import ExpertiseCard from '../HomeComponents/ExpertiseCard'
import { useTranslations } from 'next-intl';

const CardsSection = () => {
    const t = useTranslations('OurExpertise');  // Fetch the translated text for 'OurExpertise'

    const data = [
        {
            title: t('sections.0.title'),  // Fetch the title from the translation
            description: t('sections.0.description'),  // Fetch the description from the translation
              img: "/assets/DataVisuals/c3.png"
        }, 
        {
            title: t('sections.1.title'),
            description: t('sections.1.description'),
          img: "/assets/DataVisuals/c3.png"
        },
        {
            title: t('sections.2.title'),
            description: t('sections.2.description'),
            img: "/assets/DataVisuals/c3.png"
        },
        {
            title: t('sections.3.title'),
            description: t('sections.3.description'),
              img: "/assets/DataVisuals/c3.png"
        }
    ];
    return (
        <div className=' bg-secondary2 '>
            <div className=' gap-[20px] xs:grid-cols-2 grid md:flex  lg:flex-nowrap flex-wrap items- justify-center xs:gap-[0px] '>
                {
                    data.map((item, index) => (



                        <ExpertiseCard
                            IsBlog={false}
                            key={index} // unique key for each element
                            img={item.img}
                            mainTitle={item.title} // assuming data contains mainTitle
                            description={item.description} // assuming data contains description
                            index={index}
                        />

                    ))
                }

            </div>
        </div>
    )
}

export default CardsSection