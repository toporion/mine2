import React from 'react';
import { GoDotFill } from 'react-icons/go';

const PriceTable = () => {
    return (
        <div className="w-[80%] mx-auto px-4 py-10">
            <p className='flex justify-center text-blue-700'><GoDotFill className='text-2xl' />Price Plans<GoDotFill className='text-2xl' /></p>
            <h2 className="text-4xl font-extrabold text-center mb-8 text-blue-600 fugaz-one-regular">
                Professional Web Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basic Plan */}
                <div className="border border-gray-300 rounded-lg shadow-lg p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Basic</h3>
                    <p className="text-gray-600 mb-4">Perfect for startups and small businesses</p>
                    <p className="text-4xl font-bold text-blue-600 mb-6">$599</p>
                    <ul className="mb-6 space-y-2">
                        <li>✓ Custom Web Development (Up to 5 Pages)</li>
                        <li>✓ Mobile-Friendly Design</li>
                        <li>✓ Free Basic SEO Setup</li>
                        <li>✓ 1 Month Free Maintenance</li>
                    </ul>
                    <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                        Choose Plan
                    </button>
                </div>

                {/* Standard Plan */}
                <div className="border border-gray-300 rounded-lg shadow-lg p-6 text-center bg-blue-50">
                    <h3 className="text-2xl font-semibold mb-4">Standard</h3>
                    <p className="text-gray-600 mb-4">Great for growing businesses</p>
                    <p className="text-4xl font-bold text-blue-600 mb-6">$1599</p>
                    <ul className="mb-6 space-y-2">
                        <li>✓ Custom Web Development (Up to 10 Pages)</li>
                        <li>✓ Advanced Responsive Design</li>
                        <li>✓ Free SEO Optimization</li>
                        <li>✓ 3 Months Free Maintenance</li>
                    </ul>
                    <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                        Choose Plan
                    </button>
                </div>

                {/* Premium Plan */}
                <div className="border border-gray-300 rounded-lg shadow-lg p-6 text-center">
                    <h3 className="text-2xl font-semibold mb-4">Premium</h3>
                    <p className="text-gray-600 mb-4">Ideal for established brands and enterprises</p>
                    <p className="text-4xl font-bold text-blue-600 mb-6">$2999</p>
                    <ul className="mb-6 space-y-2">
                        <li>✓ Fully Custom Web Development (Unlimited Pages)</li>
                        <li>✓ Premium UX/UI Design</li>
                        <li>✓ SEO + Analytics Integration</li>
                        <li>✓ 6 Months Free Maintenance</li>
                    </ul>
                    <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
                        Choose Plan
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PriceTable;
