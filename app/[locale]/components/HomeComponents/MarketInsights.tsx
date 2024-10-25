import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const MarketInsights = () => {
    const t = useTranslations('MarketInsights');

    return (
        <section className='bg-primary'>
            <div className='max-w-[93%] xl:max-w-[83%] mx-auto py-[98px]'>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className='flex flex-col'>
                        <p className='text-customPink text-[24px] leading-[34px]'>{t('title')}</p>
                        <h2 className='text-[2.5rem] md:text-[2.8rem] xl:text-[3.5rem] leading-[56px] xl:leading-[66px] font-semibold text-white'>
                            {t('subtitle')}
                        </h2>
                        <p className='text-[18px] leading-[30px] text-[#EBEBEB] mt-[16px] pb-[32px]'>
                            {t('description')}
                        </p>
                        <a href="/market-insights" aria-label={t('buttonText')}>
                            <button className='px-[32px] py-[17px] border-white border-2 w-fit text-white rounded-[10px] hover:bg-white hover:text-primary transition'>
                                {t('buttonText')}
                            </button>
                        </a>
                    </div>

                    <div className='relative w-full h-full'>
                        <Image
                            className='object-cover'
                            src="/assets/HomeImages/graph.png"
                            alt={t('altText')}
                            layout='responsive'
                            width={958}
                            height={526}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MarketInsights
