import React from 'react'

export default function Lastfooter() {
    return (
        <div className="bg-gray-400 overflow-hidden border-t-4  border-red-300">
            <div className="container mx-auto mt-2 px-6  text-white">
                <div className="flex flex-col md:flex-row justify-between items-center py-6">
                    <p className=" font-semibold mb-4">All right reserved by @me.</p>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="md:mr-10 mb-4 md:mb-0 font-semibold">Terms of Services</p>
                        <p className=" font-semibold text-red-600">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
