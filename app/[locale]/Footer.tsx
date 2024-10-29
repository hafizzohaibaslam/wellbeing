import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('footer');

    return (
        <div className='bg-primary pt-[80px] pb-[96.5px]'>
            <div className='max-w-[93%] xl:max-w-[83%] mx-auto text-white'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[50px]'>
                    <div>
                        <Image src="/assets/HomeImages/logo.svg" width={204} height={43} alt="no image" />
                        <p className='text-[14px] leading-[26px] mt-[50px] text-[#C1C1C2] font-400'>
                            {t('description')}
                        </p>
                    </div>
                    <div className='flex flex-col gap-[32px]'>
                        <h1 className='text-[24px] font-semibold leading-[34px]'>{t('company')}</h1>
                        <p className='text-[16px] text-[#C1C1C2]'>{t('whyUs')}</p>
                        <p className='text-[#C1C1C2] text-[16px]'>{t('blogs')}</p>
                        <p className='text-[#C1C1C2] text-[16px]'>{t('testimonials')}</p>
                    </div>
                    <div className='flex flex-col gap-[32px]'>
                        <h1 className='text-[24px] font-semibold leading-[34px]'>{t('services')}</h1>
                        <p className='text-[16px] text-[#C1C1C2]'>{t('expertise')}</p>
                        <p className='text-[#C1C1C2] text-[16px]'>{t('dataCenter')}</p>
                        <p className='text-[#C1C1C2] text-[16px]'>{t('contactUs')}</p>
                    </div>
                    <div>
                        <h1 className='text-[24px] font-semibold leading-[34px]'>{t('newsletter')}</h1>
                        <div className='flex flex-wrap items-center gap-2 my-[35px]'>
                            <input type="email" id="business-email" placeholder="Placeholder"
                                className="p-2.5 text-gray-700 bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                            <button className='px-[32px] py-[13px] bg-customPink rounded-[10px] text-white'>{t('subscribe')}</button>
                        </div>
                        <div className='flex items-center gap-[16px] mt-[60px]'>
                            <Image src="/assets/HomeImages/youtube.svg" alt='no image' width={24} height={24} />
                            <Image src="/assets/HomeImages/facebook_icon.svg" alt='no image' width={24} height={24} />
                            <Image src="/assets/HomeImages/twitter.svg" alt='no image' width={24} height={24} />
                            <Image src="/assets/HomeImages/instagram.svg" alt='no image' width={24} height={24} />
                            <Image src="/assets/HomeImages/linkedin.svg" alt='no image' width={24} height={24} />
                        </div>
                    </div>
                </div>

                <div className='py-[32px]'>
                    <hr />
                </div>

                <div className='flex justify-between gap-[10px] flex-wrap text-[#C1C1C2]'>
                    <p>{t('wellbeing')}</p>
                    <div className='flex sm:flex-row flex-col sm:gap-[51px] gap-[20px]'>
                        <div className='flex items-center gap-[6px]'>
                            <Image src='/assets/HomeImages/Email.svg' alt='email' width={24} height={24} />
                            <p>{t('email')}</p>
                        </div>
                        <div className='flex gap-[6px]'>
                            <Image src='/assets/HomeImages/Phone.svg' alt='phone' width={24} height={24} />
                            <p>{t('phone')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
