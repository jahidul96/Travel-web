import React from 'react'

export default function Howitworks() {
    return (
        <div className='flex flex-col md:flex-row md:flex-wrap md:justify-around justify-center items-center mt-32  md:space-x-4'>
            <div className='md:max-w-sm max-w-lg max-h-80 bg-white shadow-xl p-5 mb-10 border-t-8 border-orange-500'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <h2 className='text-center md:text-left font-bold md:text-3xl mb-3 md:w-1/2'>How work</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                    <button className='btn2 bg-blue-600 mt-5 '>Learn more</button>
                </div>
            </div>
            <div className='md:max-w-sm max-w-lg max-h-80 bg-white shadow-xl p-5 mb-10 border-t-8 border-red-500'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <h2 className='text-center md:text-left font-bold md:text-3xl mb-3 md:w-1/2'>Sign Up</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                    </p>
                    <button className='btn2 bg-blue-600 mt-5'>Learn more</button>
                </div>
            </div>
            <div className='md:max-w-sm max-w-lg max-h-80 bg-white shadow-xl p-5 mb-10 border-t-8 border-blue-600'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <h2 className='text-center md:text-left font-bold md:text-3xl mb-3 md:w-1/2'>Contribute</h2>
                    <p>
                        Apply for a montly subscription to our site and enjoy the ultimate
                    </p>
                    <button className='btn2 bg-blue-600 mt-5'>Learn more</button>
                </div>
            </div>
            <div className='md:max-w-sm max-w-lg max-h-80 bg-white shadow-xl p-5 mb-10 border-t-8 border-yellow-400'>
                <div className='flex flex-col justify-center md:items-start items-center'>
                    <h2 className='text-center md:text-left font-bold md:text-3xl mb-3 md:w-1/2'>Instruction</h2>
                    <p className='mt-2 '>
                        Apply for a montly subscription to our site and enjoy the ultimate
                    </p>
                    <button className='btn2 bg-blue-600 mt-5'>Learn more</button>
                </div>
            </div>
        </div>
    )
}
