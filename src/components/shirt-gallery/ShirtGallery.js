import React from 'react';
import ShirtImages from './ShirtImages';

const ShirtGallery = () => {
    return (
        <div className=" flex flex-col md:flex-row justify-between items-center max-w-5xl mx-16 px-4 py-16">
            {/* Left Section */}
            <div className="max-w-lg text-center md:text-left">
                <p className="text-gray-500 text-[20px] mb-2">
                    Give the gift that gives comfort
                </p>
                <h2 className="text-[2.5rem] font-bold text-gray-900 mb-4">
                    Comfortable Shirts
                </h2>
                <p className="text-gray-700 text-[22px] mb-6">
                    We are launching our new collection of cotton shirts at affordable rates.
                </p>
                <button className="bg-black text-white px-8 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition">
                    SHOP NOW
                </button>
            </div>

            {/* Right Section */}
            <div className="mt-12 md:mt-0">
                <ShirtImages />
            </div>
        </div>
    );
};

export default ShirtGallery;
