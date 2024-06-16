import React from 'react'
import './ImageGallery.css'

const ImageGallery = () => {
  return (
    <div>
        <section class="bg-gray-200 py-8 rounded-lg ">
    <div class="container mx-auto px-10">
        {/* <!-- Filter Buttons --> */}
        <div class="flex justify-center space-x-4 my-10">
            <button onclick="filterGallery('all')" class="bg-blue-500 text-white px-4 py-2 rounded">All</button>
            <button onclick="filterGallery('services')" class="bg-green-500 text-white px-4 py-2 rounded">Services</button>
            <button onclick="filterGallery('products')" class="bg-yellow-500 text-white px-4 py-2 rounded">Products</button>
        </div>
        
        {/* <!-- Image Gallery --> */}
        <div  class="custom-columns">
            <div class="group bg-gray-300 rounded-lg overflow-hidden relative">
                <img src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 1" class="w-full object-cover"/>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-white text-gray-800 px-4 py-2 rounded">View Details</button>
                </div>
            </div>
            <div class="group bg-gray-300 rounded-lg overflow-hidden relative">
                <img src="https://images.pexels.com/photos/3879495/pexels-photo-3879495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" class="w-full object-cover"/>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-white text-gray-800 px-4 py-2 rounded">View Details</button>
                </div>
            </div>
            <div class="group bg-gray-300 rounded-lg overflow-hidden relative">
                <img src="https://i.pinimg.com/564x/70/ea/79/70ea79448ca47722bbf65946a18eb129.jpg" alt="Image 3" class="w-full object-cover"/>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-white text-gray-800 px-4 py-2 rounded">View Details</button>
                </div>
            </div>
            <div class="group bg-gray-300 rounded-lg overflow-hidden relative">
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/product-label-design.jpg?v=1680902906" alt="Image 4" class="w-full object-cover"/>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-white text-gray-800 px-4 py-2 rounded">View Details</button>
                </div>
            </div>
            {/* <!-- Add more images --> */}
            <div class="group bg-gray-300 rounded-lg overflow-hidden relative">
                <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/universal_20product_20code.png?v=1697911576" alt="Image 6" class="w-full object-cover"/>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-white text-gray-800 px-4 py-2 rounded">View Details</button>
                </div>
            </div>
            <div class="group bg-gray-300 rounded-lg overflow-hidden relative">
                <img src="https://i.pinimg.com/564x/4c/15/f7/4c15f7761483500acf238bd935ba6320.jpg" alt="Image 5" class="w-full object-cover"/>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-white text-gray-800 px-4 py-2 rounded">View Details</button>
                </div>
            </div>
            <div class="group bg-gray-300 rounded-lg overflow-hidden relative">
                <img src="https://images.pexels.com/photos/18495/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 7" class="w-full object-cover"/>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-white text-gray-800 px-4 py-2 rounded">View Details</button>
                </div>
            </div>
            <div class="group bg-gray-300 rounded-lg overflow-hidden relative">
                <img src="https://images.pexels.com/photos/1752804/pexels-photo-1752804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 8" class="w-full object-cover"/>
                <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <button class="bg-white text-gray-800 px-4 py-2 rounded">View Details</button>
                </div>
            </div>
            {/* <!-- Add more images as needed --> */}
        </div>
    </div>
</section>
    </div>
  )
}

export default ImageGallery