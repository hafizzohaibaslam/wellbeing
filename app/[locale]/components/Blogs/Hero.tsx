

import React from 'react'
import ExpertiseCard from '../HomeComponents/ExpertiseCard'
import Header from '@/app/[locale]/Header'
import Image from 'next/image'
const data = [

    {
        title: "Digital Mental Health ",
        description: "Revolutionize your mental health Services",
        img: "/assets/HomeImages/E1.png"

    }, {
        title: "Human Centered Design",
        description: "Revolutionize your mental health Services",
        img: "/assets/HomeImages/E2.png"
    },
    {
        title: "Business Agility",
        description: "Revolutionize your mental health Services",
        img: "/assets/HomeImages/E3.png"
    },
    {
        title: "Intelligent Shift",
        description: "Revolutionize your mental health Services",
        img: "/assets/HomeImages/E4.png"
    }
]
const Hero = () => {
    return (
        <div>
            <div className='bg-primary'
            style={{ backgroundImage: "url('/assets/Contact/contactHero.svg')" }}
            >
                <Header />
                <div className='max-w-[93%] xl:max-w-[83%] mx-auto pb-[107px] '>

                    <div className="flex items-center text-lightGray gap-2">
                        <Image src="/assets/Contact/home.svg" width={12} height={12} alt="Home" />
                        <Image src="/assets/Contact/leftArrow.svg" width={12} height={12} alt="Left Arrow" />
                        <p className="text-[14px] leading-[26px]">Blogs</p>
                    </div>

                    <div className='grid items-center  xs:mt-0 mt-2 justify-center  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px] xs:gap-[10px] lg:gap-[24px]'>
                        {
                            data.map((item, index) => (



                                <ExpertiseCard
                                    IsBlog={true}
                                    key={index} 
                                    img={item.img}
                                    mainTitle={item.title} 
                                    description={item.description} 
                                    index={index}
                                />

                            ))
                        }

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero