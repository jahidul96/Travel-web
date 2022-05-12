import { useState } from "react"
import { Link } from "react-router-dom";




export default function Navbar() {
    const [showNav, setShowNav] = useState(false);
    return (

        <div>
            <nav className="flex justify-between items-center py-10 px-2">
                <div className="flex md:justify-center items-center">
                    <img className="w-8 h-8 object-contain" src="https://icons-for-free.com/download-icon-location+maker+map+icon-1320166084997417306_512.png" />
                    <h1 className="text-red-600 font-bold text-xl">Travel</h1>
                </div>
                <ul className=" hidden md:flex justify-center items-center md:space-x-6">
                    <Link to={'/'}><li className="hover:text-orange-400 md:mb-0 mb-3">Home</li></Link>
                    <Link to={'/review'}><li className="hover:text-orange-400 md:mb-0 mb-3">Reviews</li></Link>
                    <Link to={'/destination'}><li className="hover:text-orange-400 md:mb-0 mb-3">Destinations</li></Link>
                    <Link to={'/blog'}><li className="hover:text-orange-400 md:mb-0 mb-3">Blog</li></Link>
                    <Link to={'/contact'}><li className="btn ">Contact</li></Link>
                </ul>
                {
                    showNav ? '' : <button onClick={() => setShowNav(true)} className="block md:hidden"><i className="fa-solid fa-bars text-2xl pr-3"></i></button>
                }
            </nav>
            {
                showNav ? <div className="mt-0 relative bg-blue-600 border-t-8 border-yellow-600 w-full h-full p-6 pt-10 overflow-hidden">
                    <ul className=" flex flex-col justify-center items-center mt-20 text-white">
                        <Link to={'/'} className="w-full" onClick={() => setShowNav(false)}><li className="hover:text-orange-400 hover:bg-white hover:w-full  hover:py-2   smallScreenNavStyle">Home</li></Link>
                        <Link to={'/review'} className="w-full" onClick={() => setShowNav(false)}> <li className="hover:text-orange-400 hover:bg-white hover:w-full  hover:py-2 smallScreenNavStyle">Reviews</li></Link>
                        <Link to={'/destination'} className="w-full" onClick={() => setShowNav(false)}><li className="hover:text-orange-400 hover:bg-white hover:w-full  hover:py-2 smallScreenNavStyle">Destinations</li></Link>
                        <Link to={'/blog'} className="w-full" onClick={() => setShowNav(false)}><li className="hover:text-orange-400 hover:bg-white hover:w-full hover:py-2 smallScreenNavStyle" onClick={() => setShowNav(false)}>Blog</li></Link>
                        <Link to={'/contact'} className="w-full" onClick={() => setShowNav(false)}><li className="hover:text-orange-400 hover:bg-white hover:w-full hover:py-2 mb-6 bg-red-400 w-full py-2 text-white  smallScreenNavStyle">Contact</li></Link>

                        <button onClick={() => setShowNav(false)} className=" absolute top-10 text-red-600 right-10 text-3xl font-bold">X</button>
                    </ul>
                </div> : ''
            }
        </div>
    )
}
