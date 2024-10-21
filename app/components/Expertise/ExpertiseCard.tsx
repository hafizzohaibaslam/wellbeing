import React from 'react';
import Image from 'next/image';

// Define the interface for props
interface ExpertiseCardProps {
    imageSrc: string;
    title: string;
    description: string;
    index: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ imageSrc, title, description,index }) => {
    return (
        <div className='xl:flex grid md:grid-cols-2 items-center gap-[40px] pb-[118px]'>
            <div className={` ${index%2!=0?'order-2':''} w-full xl:w-auto xl:max-h-[300px]  max-h-[500px] h-full xl:flex-shrink-0`}>
                <Image  className='xl:max-h-[300px] md:w-auto w-full h-full object-cover' src={imageSrc} width={487} height={300} alt='Expertise Card Image' />
            </div>

            <div className={` ${index%2!=0?'text-right':'text-left'} xl:flex-grow `}>
                <h1 className=' text-[2.8rem] xl:text-[3.5rem]  xl:leading-[56px] font-normal text-white'>{title}</h1>
                <p className=' text-[16px] xl:text-[18px] font-normal leading-[30px] mb-[15px]  xl:mb-[32px] mt-[8px] xl:mt-[16px] text-lightGray'>
                    {description}
                </p>
                <div className={` ${index%2!=0?' justify-end':''}  flex items-center gap-2`}>
                    <p className="text-customPink">Get Started</p>
                    <Image
                        src="/assets/HomeImages/ArrowRight.svg"
                        width={20}
                        height={20}
                        alt="arrow icon"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExpertiseCard;
