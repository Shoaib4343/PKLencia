import React from 'react'

const PopularCategory = ({name}) => {
  return (
    <div>
        <section class="bg-white py-8">
    <div class="container mx-auto px-10 ">
        <h2 class="text-gray-800 text-4xl font-bold mb-6 text-left">Popular {name}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div class="bg-green-600 text-white p-4 rounded-lg shadow-lg max-w-xs text-center">
                <p class="font-bold mb-2">Website Development</p>
                <img src="https://images.pexels.com/photos/35196/water-plant-green-fine-layers.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Website Development" class="mx-auto rounded-lg"/>
            </div>
           
            <div class="bg-yellow-400 text-white p-4 rounded-lg shadow-lg max-w-xs text-center">
                <p class="font-bold mb-2">Website SEO and Website Design </p>
                <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Website Development" class="mx-auto rounded-lg"/>
            </div>
           
            <div class="bg-red-600 text-white p-4 rounded-lg shadow-lg max-w-xs text-center">
                <p class="font-bold mb-2">Website Development</p>
                <img src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Website Development" class="mx-auto rounded-lg"/>
            </div>
           
            <div class="bg-pink-600 text-white p-4 rounded-lg shadow-lg max-w-xs text-center">
                <p class="font-bold mb-2">Website SEO and Website Design </p>
                <img src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Website Development" class="mx-auto rounded-lg"/>
            </div>
           
            <div class="bg-gray-600 text-white p-4 rounded-lg shadow-lg max-w-xs text-center">
                <p class="font-bold mb-2">Website Development</p>
                <img src="https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Website Development" class="mx-auto rounded-lg"/>
            </div>
           
            <div class="bg-blue-500 text-white p-4 rounded-lg shadow-lg max-w-xs text-center">
                <p class="font-bold mb-2">Website SEO and Website Design </p>
                <img src="https://images.pexels.com/photos/53012/glider-hang-glider-pilot-flying-53012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Website Development" class="mx-auto rounded-lg"/>
            </div>
           
            
           
            
            {/* <!-- Add more service cards as needed --> */}
        </div>
    </div>
</section>
    </div>
  )
}

export default PopularCategory