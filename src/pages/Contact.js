import React from 'react'
import { Link } from 'react-router-dom'


export default function Contact() {
    return (
        <div className='container mx-auto'>
            <div className='blogcustomWidth bg-white shadow-md  md:p-6 p-2'>
                <div className='mt-10 flex flex-col '>
                    <p className='font-semibold text-blue-700 text-3xl  mb-5'>I am Jahidul Islam</p>
                    <div className='mb-10'>
                        <a href='https://www.facebook.com/dreamboy.jihad.3' ><i className="fa-brands fa-facebook mr-3 text-2xl text-blue-500"></i></a>
                        <a href='https://www.linkedin.com/in/jahidul-islam-9b3a40231/' ><i class="fa-brands fa-linkedin mr-3 text-2xl text-blue-500"></i></a>
                        <a href='#' ><i class="fa-brands fa-instagram mr-3 text-2xl text-blue-500"></i></a>
                        <a href='#' ><i class="fa-brands fa-stack-overflow mr-3 text-2xl text-blue-500"></i></a>
                    </div>
                    <ul className='flex flex-col justify-center items-center'>
                        <li className='font-semibold skillstyleText mt-8 mb-4 text-2xl'>What i know...</li>
                        <li className='skillstyle'>html</li>
                        <li className='skillstyle'>css</li>
                        <li className='skillstyle'>javascript</li>
                        <li className='skillstyle'>bootstrap</li>
                        <li className='skillstyle'>materialize css</li>
                        <li className='skillstyle'>Tailwind css</li>
                        <li className='skillstyle'>material ui</li>
                        <li className='skillstyle'>React js</li>
                        <li className='skillstyle'>Next js</li>
                        <li className='skillstyle'>Firebase</li>
                        <li className='font-semibold skillstyleText mt-8 mb-4 text-2xl'>Have fundamental knowledge in backend tech...Learning</li>
                        <li className='skillstyle'>Node js</li>
                        <li className='skillstyle'>Express js</li>
                        <li className='skillstyle'>Mongo db</li>
                        <li className='skillstyle'>Moongoose</li>
                        <li className='skillstyle'>etc...</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}
