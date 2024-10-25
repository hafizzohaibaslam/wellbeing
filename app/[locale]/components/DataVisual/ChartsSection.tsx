import React from 'react'
import { AreaChart1 } from './AreaChart1'
import { PieChartComponent } from './PieChartComponent'
import { BarChartComponent } from './BarChartComponents'
import { AreaChart2 } from './AreaChart2'
import { useTranslations } from 'next-intl'

const ChartsSection = () => {
    const t = useTranslations('DataVisual')

    return (
        <div className='bg-secondary2'>
            <div className='xl:max-w-[83%] pb-[89px] mx-auto gap-[20px] pt-[193px] max-w-[93%] lg:flex-row flex-col flex justify-between'>
                <div className='xl:max-w-[282px]'>

                    <div className="flex items-center outline-none border-b-2 border-customPink pb-3">
                        <span className="text-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-4.35-4.35m2.48-5.12a7.48 7.48 0 11-14.96 0 7.48 7.48 0 0114.96 0z"
                                />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder={t('searchPlaceholder2')}
                            className="ml-2 w-full bg-transparent text-gray-300 focus:outline-none focus:border-pink-500 transition duration-300"
                        />
                    </div>

                    <div className='text-lightGray flex flex-col mt-[80px] gap-[16px] text-[24px] leading-[34px]'>
                        <p className='px-[16px] py-[10px] rounded-md bg-customPink'>{t('filterOptions.all')}</p>
                        <p className='px-[16px] py-[10px] rounded-md'>{t('filterOptions.products')}</p>
                        <p className='px-[16px] py-[10px] rounded-md'>{t('filterOptions.sectors')}</p>
                        <p className='px-[16px] py-[10px] rounded-md'>{t('filterOptions.regional')}</p>
                    </div>
                </div>
                
                <div className='grid md:pt-0 pt-[50px] md:grid-cols-2 gap-x-[20px] xl:gap-x-[40px] gap-y-[80px] max-w-full lg:max-w-[800px] xl:max-w-[894px]'>
                    <AreaChart1 />
                    <PieChartComponent />
                    <BarChartComponent />
                    <AreaChart2 />
                    <BarChartComponent />
                    <PieChartComponent />
                </div>
            </div>
        </div>
    )
}

export default ChartsSection
