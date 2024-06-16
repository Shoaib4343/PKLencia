import React from 'react';
import { FaLaptopCode, FaPalette, FaBullhorn, FaPenNib, FaVideo, FaRobot, FaMusic } from 'react-icons/fa';

const Categories = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="category-item bg-white shadow-md rounded-lg p-4 text-center transition duration-300 transform hover:scale-105 hover:bg-blue-200 cursor-pointer">
            <FaLaptopCode className="text-gray-600 mb-2" />
            <p className="text-gray-800">Programming & Tech</p>
          </div>
          <div className="category-item bg-white shadow-md rounded-lg p-4 text-center transition duration-300 transform hover:scale-105 hover:bg-purple-200 cursor-pointer">
            <FaPalette className="text-gray-600 mb-2" />
            <p className="text-gray-800">Graphics & Design</p>
          </div>
          <div className="category-item bg-white shadow-md rounded-lg p-4 text-center transition duration-300 transform hover:scale-105 hover:bg-yellow-200 cursor-pointer">
            <FaBullhorn className="text-gray-600 mb-2" />
            <p className="text-gray-800">Digital Marketing</p>
          </div>
          <div className="category-item bg-white shadow-md rounded-lg p-4 text-center transition duration-300 transform hover:scale-105 hover:bg-green-200 cursor-pointer">
            <FaPenNib className="text-gray-600 mb-2" />
            <p className="text-gray-800">Writing & Translation</p>
          </div>
          <div className="category-item bg-white shadow-md rounded-lg p-4 text-center transition duration-300 transform hover:scale-105 hover:bg-red-200 cursor-pointer">
            <FaVideo className="text-gray-600 mb-2" />
            <p className="text-gray-800">Video & Animation</p>
          </div>
          <div className="category-item bg-white shadow-md rounded-lg p-4 text-center transition duration-300 transform hover:scale-105 hover:bg-indigo-200 cursor-pointer">
            <FaRobot className="text-gray-600 mb-2" />
            <p className="text-gray-800">AI Services</p>
          </div>
          <div className="category-item bg-white shadow-md rounded-lg p-4 text-center transition duration-300 transform hover:scale-105 hover:bg-pink-200 cursor-pointer">
            <FaMusic className="text-gray-600 mb-2" />
            <p className="text-gray-800">Music & Audio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
