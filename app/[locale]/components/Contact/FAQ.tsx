'use client';
import React, { useState } from 'react';
import FAQsQuestion from './FAQsQuestion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Open question index

  const handleToggle = (index: number) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index)); // Toggle clicked FAQ
  };

  return (
    <div className='bg-[#0D1F2C]  text-white pt-[80px] pb-[160px]'>
      <h1 className='text-[56px] font-semibold leading-[66px] text-center'>FAQ</h1>

      <div className='max-w-full  lg:max-w-[872px] mx-8 lg:mx-auto mt-[48px]'>
        {['Question1', 'Question2', 'Question3', 'Question4'].map((question, index) => (
          <FAQsQuestion 
            key={index} 
            question={question} 
            isOpen={openIndex === index} // Check if this FAQ is open
            onClick={() => handleToggle(index)} // Pass toggle handler
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
