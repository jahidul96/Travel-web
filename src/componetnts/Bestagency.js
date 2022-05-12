import React from 'react'

export default function Bestagency() {
    return (
        <div className='mt-32 flex flex-col md:flex-row justify-between items-center'>
            <div className='md:ml-8 ml-0'>
                <div className='mb-5'>
                    <img className='md:rounded-xl' src='https://media.istockphoto.com/photos/mature-couple-hike-above-lake-lugano-in-the-morning-picture-id1292251389?b=1&k=20&m=1292251389&s=170667a&w=0&h=oqgL9rLyvKe6ifecSng8QXWlzXOiNTTrewU92ecnmEc=' />
                </div>
                <div>
                    <img className='md:rounded-xl' src='https://media.istockphoto.com/photos/winding-coast-road-in-corsica-picture-id1350993173?b=1&k=20&m=1350993173&s=170667a&w=0&h=vvgGktYjPV3IWLYTvWLsQnSsDsCChR_FO3d8e7touwk=' />
                </div>
            </div>

            <div className='flex mt-16 md:mt-0 flex-col   items-center'>
                <h2 className='md:text-4xl md:px-0 px-3 font-semibold text-xl md:font-bold md:w-1/2 text-center md:text-left mb-5'>Best agency since start bussiness.</h2>
                <div className='w-1/2 md:leading-8 md:text-left text-center text-lg'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                </div>

                <button className='mt-10 py-2 px-12 w-1/2  bg-yellow-200 text-black font-bold text-lg rounded-lg ring-2 ring-blue-700'>Find best tours</button>
            </div>
        </div>
    )
}
