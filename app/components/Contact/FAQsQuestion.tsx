'use client'
import React from 'react';
import Image from 'next/image';

interface FAQsQuestionProps {  // Define props interface here
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQsQuestion: React.FC<FAQsQuestionProps> = ({ question, isOpen, onClick }) => {
  return (
    <div onClick={onClick} className='border-b cursor-pointer border-[lightGray] py-[32px]'>
      <div className='flex w-full justify-between'>
        <p className='text-[26px] sm:text-[36px] leading-[46px] font-semibold'>{question}</p>
        {
          isOpen ? 
            <Image src="/assets/Contact/minus.svg" width={27} height={27} alt='-' /> : 
            <Image src="/assets/Contact/plus.svg" width={27} height={27} alt='+' />
        }
      </div>

      {isOpen && (
        <div>
          <p className='text-[24px] leading-[38px] font-normal pt-[16px] text-lightGray'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, voluptatum.
          </p>
        </div>
      )}
    </div>
  );
};

export default FAQsQuestion;
