'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Testimonials = () => {
  const t = useTranslations('Testimonials');

  // State to track the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch translated testimonials as an array of objects
  const testimonials = [
    {
      name: t('testimonial_1.name'),
      position: t('testimonial_1.position'),
      feedback: t('testimonial_1.feedback'),
    },
    {
      name: t('testimonial_2.name'),
      position: t('testimonial_2.position'),
      feedback: t('testimonial_2.feedback'),
    },
    {
      name: t('testimonial_3.name'),
      position: t('testimonial_3.position'),
      feedback: t('testimonial_3.feedback'),
    },
  ];

  // Function to handle navigation to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Function to handle navigation to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div
      className="bg-cover bg-center h-screen flex z-10 bg-primary items-center"
      style={{ backgroundImage: "url('/assets/HomeImages/Testimonials.png')" }}
    >
      <div className="bg-[#0A18208C] text-white w-full py-[40px]">
        <p className="text-customPink text-center uppercase font-normal text-[24px]">
          {t('title')}
        </p>
        <div className="text-[24px] mt-2 flex flex-col justify-center items-center md:hidden">
            <p className="font-normal">{currentTestimonial.name}</p>
            <p>{currentTestimonial.position}</p>
        </div>
        <div className="flex  justify-between max-w-[93%] md:max-w-[83%] mx-auto flex-shrink-0 mt-[16px]">
          {/* Left caret for navigation */}
          <Image
            src="/assets/HomeImages/CaretLeft.svg"
            alt="Previous"
            width={40}
            height={40}
            onClick={prevTestimonial}
            className="cursor-pointer"
          />

          {/* Testimonial content */}
          <div className="text-[24px] hidden md:block">
            <p className="font-normal">{currentTestimonial.name}</p>
            <p>{currentTestimonial.position}</p>
          </div>

          <div className="flex gap-[27px] max-w-full md:max-w-[60%]">
            <Image
              className="h-fit xs:w-[49px] w-[30px]"
              src="/assets/HomeImages/Quotes.svg"
              alt="Quotes"
              width={49}
              height={48}
            />
            <h1 className=" text-[18px] leading-[28px] md:text-[24px] md:leading-[34px]">
              {currentTestimonial.feedback}
            </h1>
          </div>

          {/* Right caret for navigation */}
          <Image
            className="rotate-180 cursor-pointer"
            src="/assets/HomeImages/CaretLeft.svg"
            alt="Next"
            width={40}
            height={40}
            onClick={nextTestimonial}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
