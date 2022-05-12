import React from 'react'

export default function Newsletter({ zero }) {
    return (
        <div className={zero ? "bg-orange-500 mt-10 p-10" : "bg-blue-900  text-white mt-14 p-6"}>
            <div className="container mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
                <div>
                    <h1 className="text-lg md:text-2xl text-center md:text-left font-semibold text-white">There always
                        something to be better</h1>
                    <p className="text-lg md:text-2xl text-center md:text-left font-semibold mt-3 text-white">And you always
                        hope for best</p>
                </div>
                <div>
                    <button
                        className="bg-red-600 text-white mt-10 md:mt-0  md:flex justify-center items-center py-2 px-5 rounded-3xl font-bold">Get
                        Started</button>
                </div>
            </div>
        </div>
    )
}
