import React from 'react'
import { useTranslations } from 'next-intl'

interface ContactUsProps {
    isContact: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ isContact = false }) => {
    const t = useTranslations('contactUs');

    return (
        <div className={`bg-primary ${isContact ? 'pt-[81px] bg-secondary2' : 'pt-[40px]'} pb-[130px]`}>
            <div className='flex flex-col justify-center items-center pb-[32px]'>
                <p className={`text-customPink ${isContact ? 'hidden' : ''} text-[24px] leading-[34px] text-center`}>
                    {t('header')}
                </p>
                <p className='text-[2.5rem] md:text-[3.5rem] leading-[55px] md:leading-[66px] font-semibold text-center text-white'>
                    {t('subHeader')}
                </p>
                <p className={`text-[18px] max-w-[80%] md:max-w-[60%] ${isContact ? 'max-w-[90%] lg:max-w-[80%]' : 'lg:max-w-[30%]'} lg:max-w-[30%] leading-[30px] text-center mt-[16px] text-[#EBEBEB]`}>
                    {t('description')}
                </p>
            </div>

            <form action="" className={`flex flex-col mx-[10px] ${isContact ? 'w-full' : 'sm:max-w-[55%] '} sm:mx-auto`}>
                <div className="mb-4">
                    <label htmlFor="first-name" className="block text-sm text-white mb-2">{t('firstName')}</label>
                    <input type="text" id="first-name" placeholder="Placeholder"
                        className="w-full p-2.5 text-gray-700 bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="last-name" className="block text-sm text-white mb-2">{t('lastName')}</label>
                    <input type="text" id="last-name" placeholder="Placeholder"
                        className="w-full p-2.5 text-gray-700 bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="business-email" className="block text-sm text-white mb-2">{t('businessEmail')}</label>
                    <input type="email" id="business-email" placeholder="Placeholder"
                        className="w-full p-2.5 text-gray-700 bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone-number" className="block text-sm text-white mb-2">{t('phoneNumber')}</label>
                    <input type="tel" id="phone-number" placeholder="Placeholder"
                        className="w-full p-2.5 text-gray-700 bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm text-white mb-2">{t('descriptionField')}</label>
                    <textarea id="description" placeholder="Placeholder"
                        className="w-full p-2.5 h-[96px] text-gray-700 bg-gray-200 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className='flex justify-center items-center mt-4'>
                    <button className='px-[32px] py-[17px] bg-customPink rounded-[10px] text-white'>
                        {t('sendMessage')}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactUs;
