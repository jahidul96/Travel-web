import React from 'react'


export default function Specialoffer(props) {
    const { title, subHeading } = props
    return (
        <div className='mt-32'>
            <div className={'text-center'}>
                <h1 className='md:text-4xl text-2xl   font-semibold'>{title}</h1>
                <div className={'p-6'}>
                    {subHeading}

                </div>
            </div>
        </div>
    )
}

export const Offersection = ({ offerData, zero }) => {
    return (
        <>
            <div className='flex flex-col md:flex-row md:flex-wrap md:space-x-4 justify-around items-center mt-20'>
                {
                    offerData.map(data => (
                        <div key={data.id} className={zero ? 'mb-14 p-4 md:p-0' : "relative mb-14 p-4 md:p-0"}>
                            {
                                zero ? <img className='md:w-64 w-96 h-96  md:h-64 rounded-xl opacity-60' src={data.newimg} /> : <img className='w-64 h-64 rounded-xl opacity-60' src={data.img} />
                            }
                            {
                                zero && <div className='flex mt-3'>
                                    <span><i className="fa-solid fa-location-dot"></i></span><p className='ml-2'>{data.newlocation}</p>
                                </div>
                            }


                            <div className='flex justify-between items-center mt-6'>
                                <div>
                                    {
                                        zero ? <><h3 className='font-bold text-lg'>{data.newlocation}</h3>
                                            <p className='mt-2'>{data.day}</p></> : <><h3 className='font-bold text-lg'>{data.location}</h3>
                                            <p className='mt-2'>{data.day}</p> </>
                                    }

                                </div>
                                {
                                    zero ? <button className='btn'>{data.rating}<i className="fa-solid fa-star text-black ml-2"></i></button> : <button className='btn2 bg-blue-500'>Get now</button>
                                }
                            </div>
                            {
                                zero ? '' : <p className={'absolute top-2 right-0 bg-yellow-300  flex justify-center items-center py-1 px-3 font-bold'}>{data.price}</p>
                            }

                        </div>
                    ))
                }

            </div>
            {
                zero ? '' : <div className='mt-20 text-center'>
                    <button className='py-3 px-12 bg-orange-50 ring-2 rounded-lg'>See more</button>
                </div>
            }

        </>
    )
}

