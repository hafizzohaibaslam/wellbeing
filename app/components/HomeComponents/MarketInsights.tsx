

import React from 'react'
import Image from 'next/image'
const MarketInsights = () => {
    return (
        <div className='bg-primary  '>
            <div className='max-w-[93%] xl:max-w-[83%] mx-auto py-[98px]'>

                <div className='grid  md:grid-cols-2 '>
                    <div className='flex flex-col '>
                        <p className='text-customPink text-[24px] leading-[34px] '>MARKET INSIGHTS</p>
                        <p className='text-[2.8rem] xl:text-[3.5rem] leading-[56px] xl:leading-[66px] font-semibold  text-white '>Data-Driven Insights for Decision Makers</p>
                        <p className=' text-[18px] pb-[32px] leading-[30px]  mt-[16px] text-[#EBEBEB]'>Explore key market insights and trends to guide strategic decisions in digital health, business agility, and innovation. Ideal for entrepreneurs, investors, and policymakers.</p>
                        <button className='px-[32px] py-[17px] border-white border-2 w-fit text-white rounded-[10px]'>Discover More</button>
                    </div>
                    
                    <div>
                    <Image className='w-full h-full' src="/assets/HomeImages/graph.png"  alt='graph' width={958} height={526} />
                    </div>
                  
                  
                </div>
                
              
            </div>
        </div>
    )
}

export default MarketInsights