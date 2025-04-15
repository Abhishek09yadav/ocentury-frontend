import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdKeyboardReturn, MdSecurity } from "react-icons/md";
import { RiCustomerServiceLine, RiSecurePaymentLine } from "react-icons/ri";
import { BiPackage } from "react-icons/bi";
import { AiOutlineTag } from "react-icons/ai";

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
                        <MdKeyboardReturn /> Easy Returns
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        14-Day Hassle-Free Return and Exchange Policy
                    </p>
                </div>

                {/* Card 3 */}
                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <RiCustomerServiceLine /> 24/7 Support
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Get 24x7 Assistance on All Things Shopping!
                    </p>
                </div>

                {/* Card 4 */}
                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <RiSecurePaymentLine /> Secure Payment
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Multiple Secure Payment Options Available
                    </p>
                </div>

                {/* Card 5 */}
                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <BiPackage /> Quality Products
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        100% Genuine and Quality Assured Products
                    </p>
                </div>

                {/* Card 6 */}
                <div className='flex flex-col'>
                    <h2 className='flex gap-4 items-center text-xl sm:text-2xl md:text-[2rem] text-gray-900'>
                        <AiOutlineTag /> Best Prices
                    </h2>
                    <p className='text-base sm:text-lg text-gray-600 sm:ml-14'>
                        Competitive Prices and Regular Exciting Offers
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
