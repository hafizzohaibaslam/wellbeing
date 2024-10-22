import React from 'react'
import Image from 'next/image'

// Define the interface for the props
interface ExpertiseCardProps {
  mainTitle: string;
  description: string;
  img:string;
  index:number;
  IsBlog:boolean
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ mainTitle, description,img,index,IsBlog}) => {
  return (
    <div className=''>
      <div className={`relative  max-w-[360px] ${((!IsBlog&&index==1)||(!IsBlog && index==3))?' xs:mt-28':''} ${(IsBlog && index==0) || (IsBlog && index==2 )?'xs:mt-28':'mt-0' }  overflow-y-hidden cursor-pointer border-b-[5px] hover:border-customPink border-white text-white group`}>
        <div className="absolute rounded-tr-[20px] rounded-tl-[20px] group-hover:hidden inset-0 bg-gradient-to-t from-gray-800 via-gray-700 to-gray-500 opacity-40 z-10"></div>
        <Image
          className="rounded-tr-[20px]   rounded-tl-[20px] filter grayscale transition-all duration-1000 ease-in-out group-hover:filter-none"
          src={img}
          width={360}
          height={457}
          alt="no image"
        />
        <div className="absolute z-20 bottom-0 pl-[23px] pr-[10px] mb-[-60px] group-hover:mb-[35px] transition-all duration-700 ease-in-out">
          <p className='w-[8px] h-[8px] mb-[16px] group-hover:bg-white rounded-md border-white border'></p>
          <p className="text-[28px] sm:text-[40px] w-full leading-[38px] sm:leading-[50px] pb-[35px] group-hover:pb-0 transition-all duration-700 ease-in-out">
            {mainTitle}
          </p>
          <div className="flex items-center gap-[47px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            <p className="text-[16px] w-[60%] leading-[28px] font-normal">
              {description}
            </p>
            <Image
              src="/assets/HomeImages/ArrowRight.svg"
              width={13.5}
              height={12.6}
              alt="arrow"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertiseCard
