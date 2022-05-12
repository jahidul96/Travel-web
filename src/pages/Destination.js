import React from 'react'
import { offerData } from '../assets/data/data'
import Newsletter from '../componetnts/Newsletter'
import { Offersection } from '../componetnts/Specialoffer'

export default function Destination() {
    return (
        <>
            <div className='container mx-auto'>
                <Offersection offerData={offerData} zero={true} />

            </div>

            <Newsletter zero={true} />
            <div className='container mx-auto'>
                <Offersection offerData={offerData} />

            </div>
            <Newsletter />
        </>
    )
}
