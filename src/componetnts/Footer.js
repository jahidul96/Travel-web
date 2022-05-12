import React from 'react'

export default function Footer() {
    return (
        <div className=' bg-blue-600 px-6 py-12 text-white flex flex-col md:flex-row justify-around items-center md:space-x-4'>
            <div className='flex-1'>
                <h1 className='text-3xl mr-4 md:mr-0  font-bold'>Travel</h1>


            </div>
            <div className='flex-1 '>
                <p className='text-lg font-semibold mb-5 md:mt-0 mt-5'>Company</p>
                <ul>
                    <li className="hover:text-orange-400 mb-2">Home</li>
                    <li className="hover:text-orange-400 mb-2">About</li>
                    <li className="hover:text-orange-400 mb-2">Destinations</li>
                    <li className="hover:text-orange-400 mb-2">Blog</li>
                </ul>
            </div>
            <div className='flex-1'>
                <p className='text-lg font-semibold mb-5 md:mt-0 mt-5'>Services</p>
                <ul>
                    <li className="hover:text-orange-400 mb-2">Quality</li>
                    <li className="hover:text-orange-400 mb-2">Offers</li>
                    <li className="hover:text-orange-400 mb-2">Destinations</li>
                    <li className="hover:text-orange-400 mb-2">Blog</li>
                </ul>
            </div>
            <div className='flex-1' >
                <p className='text-lg font-semibold mb-5 md:mt-0 mt-5'>Quick Links</p>
                <ul>
                    <li className="hover:text-orange-400 mb-2">Pricing</li>
                    <li className="hover:text-orange-400 mb-2">Offers</li>
                    <li className="hover:text-orange-400 mb-2">Destinations</li>
                    <li className="hover:text-orange-400 mb-2">Blog</li>
                </ul>
            </div>
        </div>
    )
}
