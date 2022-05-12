import React from 'react'
import { blogData } from '../assets/data/data'


export default function Blog() {
    return (
        <div className=' blogcustomWidth mt-20 flex flex-col  justify-center items-center bg-white shadow-sm p-0s md:p-10'>
            {
                blogData.map(data => (
                    <div key={data.id} className='mb-14 flex flex-col  justify-center items-center bg-white shadow-lg p-10  md:p-0' >
                        <div className='md:p-4 p-1'>
                            <img className='w-full h-64 rounded-xl opacity-60' src={data.img} />
                        </div>
                        <div className='md:p-6 p-2'>
                            <p className='font-semibold text-lg mb-3 mt-3'>{data.title}</p>
                            <div className='leading-8'>{data.des}</div>
                        </div>

                        <div className='px-6 w-full'>
                            <p className='btn mt-10 md:mr-0 mr-10 mb-10 w-full text-center'>Learn more</p>
                        </div>
                    </div>
                ))
            }

        </div >
    )
}
