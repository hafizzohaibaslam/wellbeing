
import React from 'react'
import ExpertiseCard from './ExpertiseCard'


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
const Expertise = () => {
    return (
        <div className='bg-primary'>
            <div className='max-w-[93%] xl:max-w-[83%] mx-auto py-[120px] '>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-customPink text-[24px] leading-[34px] text-center'>OUR EXPERTISE</p>
                    <p className='text-[3.5rem] leading-[66px] font-semibold text-center text-white '>Tailored Solutions for Your Growth</p>
                    <p className='text-[18px] leading-[30px] text-center mt-[16px] text-[#EBEBEB]'>Driving Innovation and Excellence Across Every Aspect of Your Business</p>
                </div>
                <div className='mt-[40px]'>
                    <hr />
                </div>

                <div className='flex  lg:flex-nowrap flex-wrap items-center justify-center gap-[50px] lg:gap-[24px] mt-[108px]'>
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

        </div>
    )
}

export default Expertise