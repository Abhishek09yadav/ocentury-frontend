import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdKeyboardReturn } from "react-icons/md";
import { RiCustomerServiceLine } from "react-icons/ri";

const WhyChooseUs = () => {
    return (
        <>
            <div className='font-[lora] my-6'>
                <h1 className='text-6xl text-center my-10'>Why Choose Us ?</h1>
                <div className='grid grid-cols-3 gap-y-6 px-10'>
                    <div className='flex flex-wrap'>
                        <h2 className='flex gap-4 items-center text-[2rem] text-gray-900'><TbTruckDelivery />Free Shipping</h2>
                        <p className='text-lg text-gray-600 ml-14'>Enjoy Pan-India Free Shipping on all Orders!</p>
                    </div>
                    <div className='flex flex-wrap'>
                        <h2 className='flex gap-4 items-center text-[2rem] text-gray-900'><MdKeyboardReturn /> Easy Return and Exchange</h2>
                        <p className='text-lg text-gray-600 ml-14'>14- Day Hassle-Free Return and Exchange Policy</p>
                    </div>
                    <div className='flex flex-wrap'>
                        <h2 className='flex gap-4 items-center text-[2rem] text-gray-900'><RiCustomerServiceLine />Customer Support</h2>
                        <p className='text-lg text-gray-600 ml-14'>Never Fear, Help is Here! Get 24x7 Assistance on All Things Shopping!</p>
                    </div>
                    <div className='flex flex-wrap'>
                        <h2 className='flex gap-4 items-center text-[2rem] text-gray-900'><TbTruckDelivery />Free Shipping</h2>
                        <p className='text-lg text-gray-600 ml-14'>Enjoy Pan-India Free Shipping on all Orders!</p>
                    </div>
                    <div className='flex flex-wrap'>
                        <h2 className='flex gap-4 items-center text-[2rem] text-gray-900'><MdKeyboardReturn /> Easy Return and Exchange</h2>
                        <p className='text-lg text-gray-600 ml-14'>14- Day Hassle-Free Return and Exchange Policy</p>
                    </div>
                    <div className='flex flex-wrap'>
                        <h2 className='flex gap-4 items-center text-[2rem] text-gray-900'><RiCustomerServiceLine />Customer Support</h2>
                        <p className='text-lg text-gray-600 ml-14'>Never Fear, Help is Here! Get 24x7 Assistance on All Things Shopping!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs