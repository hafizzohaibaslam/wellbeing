'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  // Dummy data for testimonials
  const testimonials = [
    {
      name: 'Abdullah',
      position: 'Head of Marketing',
      feedback: 'From strategy to execution, their solutions have driven efficiency and innovation across our business. It’s rare to find a partner that truly understands our needs.',
    },
    {
      name: 'Ayesha',
      position: 'Chief Operating Officer',
      feedback: 'Working with them has been a game-changer for us. They bring creativity and technical expertise that have helped grow our brand presence.',
    },
    {
      name: 'Ali',
      position: 'Product Manager',
      feedback: 'Their team is extremely collaborative and results-driven. They have become a valuable part of our extended team.',
    },
  ];

  // State to track the current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);

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
          TESTIMONIALS
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
