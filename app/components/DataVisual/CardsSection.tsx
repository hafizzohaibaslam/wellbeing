

import React from 'react'
import ExpertiseCard from '../HomeComponents/ExpertiseCard'
const data = [

    {
        title: "Digital Mental Health ",
        description: "Revolutionize your mental health Services",
        img: "/assets/DataVisuals/c3.png"

    }, {
        title: "Human Centered Design",
        description: "Revolutionize your mental health Services",
        img: "/assets/DataVisuals/c3.png"
    },
    {
        title: "Business Agility",
        description: "Revolutionize your mental health Services",
        img: "/assets/DataVisuals/c3.png"
    },
    {
        title: "Intelligent Shift",
        description: "Revolutionize your mental health Services",
        img: "/assets/DataVisuals/c3.png"
    }
]
const CardsSection = () => {
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