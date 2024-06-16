import React from 'react'
import { FaSistrix } from 'react-icons/fa6'


const HeroSection = () => {
  return (
    <div>
        <header className="bg-green-900 pt-16 rounded-xl">
    <div className="container mx-auto flex flex-wrap items-center py-16 px-6">
        {/* <!-- Left Side: Title, Description, Search, and Buttons --> */}
        <div className="w-full md:w-1/2 md:pr-16 mb-8 md:mb-0">
            <h1 className="text-6xl font-bold text-white leading-tight mb-4">Find Freelancers and Products</h1>
            <p className="text-white leading-normal mb-4 text-xl">Hire skilled freelancers or browse products from sellers around the world.</p>
            <div className="relative max-w-md mb-8">
                <input type="text" placeholder="Search..." className="bg-gray-200 text-gray-800 rounded-lg p-4 w-full focus:outline-none" />
                <button className="absolute right-0 top-0 bottom-0 bg-green-900 text-white px-6 m-1 rounded-lg flex items-center justify-center">
                <FaSistrix />
                </button>
            </div>
            <div className="flex space-x-4">
                <a href="#" className="bg-white text-gray-800 hover:bg-gray-100 rounded-md px-6 py-3 font-semibold">Browse Services</a>
                <a href="#" className="bg-white text-gray-800 hover:bg-gray-100 rounded-md px-6 py-3 font-semibold">Shop Products</a>
            </div>
        </div>

        {/* <!-- Right Side: Grid of Images --> */}
        <div className="w-full md:w-1/2 grid grid-cols-4 grid-rows-2 gap-6">
            {/* <!-- Image 1: 1 column, 1 row --> */}
            <div className="bg-blue-300 rounded-3xl overflow-hidden col-span-1 row-span-1">
                <img src="https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" className="w-full h-full object-cover" />
            </div>

            {/* <!-- Image 2: 1 column, 1 row --> */}
            <div className="bg-green-300 rounded-3xl overflow-hidden col-span-1 row-span-1">
                <img src="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" className="w-full h-full object-cover" />
            </div>

            {/* <!-- Image 3: 2 columns, 2 rows --> */}
            <div className="bg-purple-300 rounded-3xl overflow-hidden col-span-2 row-span-2">
                <img src="https://images.pexels.com/photos/2191044/pexels-photo-2191044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" className="w-full h-full object-cover " />
            </div>

            {/* <!-- Image 4: 2 columns, 1 row --> */}
            <div className="bg-yellow-300 rounded-3xl overflow-hidden col-span-2 row-span-1">
                <img src="https://images.pexels.com/photos/2916450/pexels-photo-2916450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 4" className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
</header>
    </div>
  )
}

export default HeroSection