import React from 'react'
import { FaCartShopping, FaMessage, FaSistrix, FaUserLarge, } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
        {/* <!-- Navbar --> */}
    <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* <!-- Left section with logo --> */}
            <div className="flex items-center">
                <a href="#" className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-900 rounded-full"></div>  {/*<!-- Replace with your logo --> */}
                    <span className="text-xl font-bold text-gray-800">Your Platform Name</span>
                </a>
            </div>

            {/* <!-- Middle section with navigation links --> */}
            <div className="hidden md:flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Services</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Products</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            </div>

            {/* <!-- Right section with icons for mobile view --> */}
            <div className="flex items-center space-x-4 md:flex">
                 <a href="#" className="text-gray-800 hover:text-gray-600 font-bold"><FaSistrix /> </a> {/*<!-- Search icon --> */}
                <a href="#" className="text-gray-800 hover:text-gray-600"><FaCartShopping /> </a>  {/*<!-- CArt icon --> */}
                <a href="#" className="text-gray-800 hover:text-gray-600"><FaUserLarge /> </a> {/*<!-- user Profile icon --> */}
                <a href="#" className="text-gray-800 hover:text-gray-600"><FaMessage /></a> {/*<!-- Email/Contact icon --> */}
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar