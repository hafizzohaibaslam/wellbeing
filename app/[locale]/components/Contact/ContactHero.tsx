import Header from '@/app/[locale]/Header';
import Image from 'next/image';
import React from 'react';

interface ContactHeroProps {
  heading: string;
  label:string
}

const ContactHero: React.FC<ContactHeroProps> = ({ heading ,label}) => {
  return (
    <div
      className="bg-cover bg-center h-[396px]"
      style={{ backgroundImage: "url('/assets/Contact/contactHero.svg')" }} // Static background
    >
      <Header />
      <div className="max-w-[93%] xl:max-w-[83%] mx-auto">
        <div className="flex items-center text-lightGray gap-2 mt-[48px]">
          <Image src="/assets/Contact/home.svg" width={12} height={12} alt="Home" />
          <Image src="/assets/Contact/leftArrow.svg" width={12} height={12} alt="Left Arrow" />
          <p className="text-[14px] leading-[26px]">{label}</p>
        </div>
        <p className="text-[50px] sm:text-[64px] leading-[74px] font-normal text-white mt-[64px]">{heading}</p>
      </div>
    </div>
  );
};

export default ContactHero;
