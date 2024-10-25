import React from 'react';
import ExpertiseCard from './ExpertiseCard';
import { useTranslations } from 'next-intl';  // Import the useTranslations hook

const Expertise = () => {
    const t = useTranslations('OurExpertise');  // Fetch the translated text for 'OurExpertise'

    const data = [
        {
            title: t('sections.0.title'),  // Fetch the title from the translation
            description: t('sections.0.description'),  // Fetch the description from the translation
            img: "/assets/HomeImages/E1.png"
        }, 
        {
            title: t('sections.1.title'),
            description: t('sections.1.description'),
            img: "/assets/HomeImages/E2.png"
        },
        {
            title: t('sections.2.title'),
            description: t('sections.2.description'),
            img: "/assets/HomeImages/E3.png"
        },
        {
            title: t('sections.3.title'),
            description: t('sections.3.description'),
            img: "/assets/HomeImages/E4.png"
        }
    ];

    return (
        <div className='bg-primary'>
            <div className='max-w-[93%] xl:max-w-[83%] mx-auto py-[120px] '>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-customPink text-[24px] leading-[34px] text-center'>
                        {t('Maintitle')}  {/* Dynamic translation for the section title */}
                    </p>
                    <p className='text-[2.5rem] sm:text-[3.5rem] leading-[50px] sm:leading-[66px] font-semibold text-center text-white'>
                        {t('title')}  {/* Dynamic translation for the main heading */}
                    </p>
                    <p className='text-[18px] leading-[30px] text-center mt-[16px] text-[#EBEBEB]'>
                        {t('subtitle')}  {/* Dynamic translation for the subtitle */}
                    </p>
                </div>
                <div className='mt-[40px]'>
                    <hr />
                </div>

                <div className='flex lg:flex-nowrap flex-wrap items-center justify-center gap-[50px] lg:gap-[24px] mt-[108px]'>
                    {
                        data.map((item, index) => (
                            <ExpertiseCard
                                IsBlog={false}
                                key={index}  // Unique key for each element
                                img={item.img}
                                mainTitle={item.title}  // Dynamically fetch main title
                                description={item.description}  // Dynamically fetch description
                                index={index}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Expertise;
