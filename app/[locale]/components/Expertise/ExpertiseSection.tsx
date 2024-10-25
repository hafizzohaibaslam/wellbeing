import React from 'react';
import ExpertiseCard from './ExpertiseCard';
import { useTranslations } from 'next-intl';

const ExpertiseSection = () => {
    const t = useTranslations('expertise');

    // Retrieve expertise items individually
    const expertiseData = [
        {
            imageSrc: t('item1.imageSrc'),
            title: t('item1.title'),
            description: t('item1.description')
        },
        {
            imageSrc: t('item2.imageSrc'),
            title: t('item2.title'),
            description: t('item2.description')
        },
        {
            imageSrc: t('item3.imageSrc'),
            title: t('item3.title'),
            description: t('item3.description')
        }
    ];

    return (
        <div className='bg-primary pt-[286px] pl-[20px] sm:pl-[42px]'>
            <div className='bg-secondary2 px-[20px] lg:px-[40px] xl:px-[120px]'>
                <h1 className='text-white text-center pt-[87px] pb-[80px] text-[24px] xl:text-[36px] leading-[46px] font-normal'>
                    {t('title').split(' ').map((word, index) => (
                        <span key={index} className={word === "Innovation" || word === "Excellence" ? 'text-customPink' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>
                {expertiseData.map((expertise, index) => (
                    <ExpertiseCard
                        key={index}
                        imageSrc={expertise.imageSrc}
                        title={expertise.title}
                        description={expertise.description}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExpertiseSection;
