

import React from 'react'

const ContactUs = () => {
    return (
        <div className='bg-primary pt-[40px] pb-[130px]'>
            <div className='flex flex-col justify-center items-center pb-[32px]'>
                <p className='text-customPink text-[24px] leading-[34px] text-center'>Contact us</p>
                <p className='text-[2.5rem] md:text-[3.5rem] leading-[55px] md:leading-[66px] font-semibold text-center text-white  '>Get in touch today</p>
                <p className='text-[18px] max-w-[80%] md:max-w-[60%] lg:max-w-[30%] leading-[30px] text-center mt-[16px] text-[#EBEBEB]'>“Have questions or need a consultation? Reach out to us and let’s explore how we can help your business thrive”</p>
            </div>

            <form action="" className='flex flex-col mx-[10px] sm:max-w-[55%] sm:mx-auto'>
                <div className="mb-4">
                    <label htmlFor="business-email" className="block text-sm text-white mb-2">First Name</label>
                    <input type="email" id="business-email" placeholder="Placeholder"
                        className="w-full p-2.5 text-gray-700 bg-gray-200 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="Last Name" className="block text-sm text-white mb-2">Last Name</label>
                    <input type="email" id="business-email" placeholder="Placeholder"
                        className="w-full p-2.5 text-gray-700 bg-gray-200 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="Business email" className="block text-sm text-white mb-2">Business Email</label>
                    <input type="email" id="business-email" placeholder="Placeholder"
                        className="w-full p-2.5 text-gray-700 bg-gray-200 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="Phone Number" className="block text-sm text-white mb-2">Phone Number</label>
                    <input type="email" id="business-email" placeholder="Placeholder"
                        className="w-full p-2.5 text-gray-700 bg-gray-200 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className="mb-4">
                    <label htmlFor="Description" className="block text-sm text-white mb-2">Description</label>
                    <textarea  placeholder="Placeholder"
                        className="w-full p-2.5 h-[96px] text-gray-700 bg-gray-200 border border-gray-300  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400" />
                </div>
                <div className='flex justify-center items-center mt-4'>
                <button className='px-[32px] py-[17px] bg-customPink rounded-[10px] text-white'>Send Message</button>
                </div>
               
            </form>
        </div>
    )
}

export default ContactUs