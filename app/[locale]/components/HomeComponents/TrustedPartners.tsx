import Image from 'next/image'
import React from 'react'
import { useTranslations } from 'next-intl'

const TrustedPartners = () => {
  const t = useTranslations('trustedPartners');

  return (
    <div className='bg-primary text-white pt-[127px] px-3 pb-[80px]'>
        <h2 className='text-[24px] leading-[34px] mb-[52px] text-center'>
          {t('title')}
        </h2>
        <div className='max-w-[93%] xl:max-w-[83%] mx-auto grid grid-cols-[50%,auto] justify-center sm:grid-cols-3 md:grid-cols-6 items-center gap-[24px] md:gap-[48px]'>
         <Image src="/assets/HomeImages/Google.png" width={145} height={64} alt="Google" />
         <Image src="/assets/HomeImages/Facebook.svg" width={145} height={64} alt="Facebook" />
         <Image src="/assets/HomeImages/Youtube.png" width={145} height={64} alt="YouTube" />
         <Image src="/assets/HomeImages/Pinterest.svg" width={145} height={64} alt="Pinterest" />
         <Image src="/assets/HomeImages/twitch.svg" width={145} height={64} alt="Twitch" />
         <Image src="/assets/HomeImages/webflow.svg" width={145} height={64} alt="Webflow" />
        </div>
    </div>
  )
}

export default TrustedPartners
