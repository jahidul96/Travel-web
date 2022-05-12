import React from 'react'
import Timage from '../assets/images/t2.png'
import TSecimage from '../assets/images/travel.png'

export default function Showcase() {
    return (
        <div className=' flex  p-5 mt-16  md:mt-14 mb-20   text-center md:text-left flex-col-reverse md:flex-row md:justify-between  items-center '>
            <div className='w-full md:w-1/2 mt-6 md:mt-0 mb-10 md:mb-0'>
                <h2 className='md:text-4xl text-2xl font-bold mb-4 '>Let's Travel with us.</h2>
                <div className='md:w-1/2 md:leading-7 px-5 md:px-0 md:py-0 py-2'>
                    Plan and book your perfect trip with advices
                    travel trip,destination information and inspiration from us
                </div>
                <button className='btn mt-5'>Discover more</button>
            </div>
            <div className='w-full  md:w-1/2 flex flex-col  justify-center items-center  md:flex-row '>
                <div className='md:shadow-xl mt-20 '>
                    <img src={Timage} className='max-w-64 max-h-64 md:ring-4 ring-orange-500 margintopDivStyle object-contain p-3 ' />
                </div>
                <div className='md:shadow-lg md:block hidden md:ml-16 md:max-h-64   -mt-16 '>
                    <img src={TSecimage} className='max-w-64 max-h-64 object-contain  imgNone' />
                </div>
            </div>
        </div>
    )
}
