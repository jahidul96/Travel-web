import React from 'react'

export default function InputBar() {
    return (
        <div className='mt-20  flex flex-col md:flex-row md:justify-between justify-center text-center md:text-left md:items-center border-t-2 bg-white shadow-lg p-4  inputbarWidth'>
            <div className='mb-10 md:mb-0 p-4 md:p-0'>
                <p className='font-semibold mb-2'>Where</p>
                <div>
                    <input className='input' placeholder='where...' />
                    <span><i className="fa-solid fa-location-dot ml-2"></i></span>
                </div>
            </div>
            <div className='mb-10 md:mb-0'>
                <p className='font-semibold mb-2'>Date</p>
                <div>
                    <input className='input' type="date" />
                    <span><i className="fa-solid fa-calendar-day ml-2"></i></span>
                </div>
            </div>
            <div className='mb-10 md:mb-0'>
                <p className='font-semibold mb-2'>Guets</p>
                <div>
                    <input className='input' placeholder='0' type="number" />
                    <span><i className="fa-solid fa-chevron-down ml-2"></i></span>
                </div>
            </div>
            <div >
                <button className='btn2 bg-blue-600'>See plan</button>
            </div>
        </div>
    )
}
