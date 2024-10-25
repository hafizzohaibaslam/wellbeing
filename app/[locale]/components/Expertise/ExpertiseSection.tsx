import React from 'react';
import ExpertiseCard from './ExpertiseCard';

const expertiseData = [
    {
        imageSrc: "/assets/Expertise/card.png",
        title: "Digital Mental Health",
        description: "We offer innovative digital solutions that prioritize mental well-being, helping organizations support their teams with personalized, accessible mental health services that drive both employee satisfaction and productivity."
    },
    {
        imageSrc: "/assets/Expertise/card2.png",
        title: "Human-Centered Design",
        description: "Our design strategies put people first, creating products and services that are intuitive, engaging, and impactful. We help businesses connect deeply with clients and employees by focusing on their needs and experiences."
    },
    {
        imageSrc: "/assets/Expertise/card3.png",
        title: "Business Agility",
        description: "Adapt quickly and thrive in a changing market. We empower organizations with agile frameworks that enhance flexibility, boost efficiency, and enable rapid response to new challenges and opportunities."
    }
];

const ExpertiseSection = () => {
    return (
        <div className='bg-primary pt-[286px] pl-[20px] sm:pl-[42px]'>
            <div className='bg-secondary2 px-[20px] lg:px-[40px] xl:px-[120px]'>
                <h1 className='text-white text-center pt-[87px] pb-[80px] text-[24px] xl:text-[36px] leading-[46px] font-normal'>
                    Driving <span className='text-customPink'>Innovation</span>  and <span className='text-customPink'>Excellence</span> Across Every Aspect of Your Business
                </h1>
                {expertiseData.map((expertise, index) => (
                    <ExpertiseCard 
                        key={index}
                        imageSrc={expertise.imageSrc}
                        title={expertise.title}
                        description={expertise.description}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExpertiseSection;
