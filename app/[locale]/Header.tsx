// components/Header.js
"use client"
import Image from 'next/image';
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import LanguageSwitcher from './components/HomeComponents/LanguageSwitcher';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
const Header = () => {
  const [IsOpen,setIsOpen]=useState(false);
  const t = useTranslations('header');
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);
  const links = [
    { name: t('home'), path: `/${pathSegments[0]}/home` },
    { name: t('whyUs'), path: `/${pathSegments[0]}/whyus` },
    { name: t('expertise'), path: `/${pathSegments[0]}/expertise` },
    { name: t('marketInsights'), path: `/${pathSegments[0]}/datavisual` },
    { name: t('reports'), path: `/${pathSegments[0]}/blogs` },
  ];

  return (
    <div className=''>
      <div className='text-white flex max-w-[93%] xl:max-w-[83%] mx-auto items-center py-[31px] justify-between'>
        <GiHamburgerMenu onClick={()=>setIsOpen(true)} size={25} className='text-white lg:hidden block' />
       
        <Link href="/" passHref>
          <Image className='sm:max-w-[204px] max-w-[150px]' src='/assets/HomeImages/Logo.svg' alt='logo' width={204} height={43} />
        </Link>

        <div className='hidden lg:flex items-center gap-[28px] xl:gap-[33px] justify-between'>
          {links.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <p className='hover:text-lightGray'>{link.name}</p>
            </Link>
          ))}
        </div>

        <div className='flex items-center gap-x-[24px]'>
          <Image className='' src='/assets/HomeImages/search.svg' alt='search' width={24} height={24} />
          <LanguageSwitcher />
          <Link key='Contact' href={`/${pathSegments[0]}/Contact`} passHref>
            <button className='sm:block hidden px-[20px] sm:px-[32px] py-[12px] sm:py-[17px] bg-customPink rounded-[10px]'>
              {t('contact')}
            </button>
          </Link>
        </div>
      </div>

      {IsOpen&&
      <div className='lg:hidden flex text-white flex-col bg-primary py-20 items-center   z-20 absolute top-0 left-0 w-full xs:w-[50%] gap-[28px] xl:gap-[33px] justify-center'>
      <RxCross2 onClick={()=>setIsOpen(false)} size={35} className="absolute top-3 left-2" />
          {links.map((link) => (
            <Link key={link.name} href={link.path} passHref>
              <p className='hover:text-lightGray'>{link.name}</p>
            </Link>
          ))}
           <Link key='Contact' href={`/${pathSegments[0]}/Contact`} passHref>
            <button className='sm:hidden px-[20px] sm:px-[32px] py-[12px] sm:py-[17px] bg-customPink rounded-[10px]'>
              {t('contact')}
            </button>
          </Link>
        </div>
      }
    </div>
  );
};

export default Header;
