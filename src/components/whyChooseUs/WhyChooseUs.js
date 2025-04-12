import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdKeyboardReturn } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";

const WhyChooseUs = () => {
    return (
        <div className='font-[lora] my-6 px-4 sm:px-6 md:px-10'>
            <h1 className='text-3xl sm:text-4xl md:text-6xl text-center my-10 font-bold'>
                Why Choose Us?
            </h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6'>
                {/* Card 1 */}
                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <TbTruckDelivery /> Free Shipping
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Enjoy Pan-India Free Shipping on all Orders!
                    </p>
                </div>

                {/* Card 2 */}
                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <MdKeyboardReturn /> Easy Return and Exchange
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        14-Day Hassle-Free Return and Exchange Policy
                    </p>
                </div>

                {/* Card 3 */}
                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <RiCustomerServiceLine /> Customer Support
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Never Fear, Help is Here! Get 24x7 Assistance on All Things Shopping!
                    </p>
                </div>

                {/* Repeating for demo — you can remove or update */}
                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <TbTruckDelivery /> Free Shipping
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Enjoy Pan-India Free Shipping on all Orders!
                    </p>
                </div>

                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <MdKeyboardReturn /> Easy Return and Exchange
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        14-Day Hassle-Free Return and Exchange Policy
                    </p>
                </div>

                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <RiCustomerServiceLine /> Customer Support
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Never Fear, Help is Here! Get 24x7 Assistance on All Things Shopping!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
