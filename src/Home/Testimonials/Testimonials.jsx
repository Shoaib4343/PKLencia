// import React from 'react'

// const Testimonials = () => {
//   return (
//     <div className='bg-gray-500 w-full h-screen my-10 p-24 rounded-lg'>
//     <h1>Hello World</h1>

//     </div>
//   )
// }

// export default Testimonials
import React from 'react';

const Testimonials = [
    {
        name: "Michael Jackson",
        role: "CEO of Company",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  // Replace with your image path
        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis.",
    },
    {
        name: "Purves Hossein",
        role: "CEO of Company",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  // Replace with your image path

        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis.",
    },
    {
        name: "Shakib Hossen",
        role: "CEO of Company",
        image: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  // Replace with your image path

        feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent convallis.",
    },
];

const Testimonial = () => {
    return (
        <div className="flex flex-col items-center bg-gray-100 py-12">
            <h2 className="text-3xl font-bold mb-8 text-blue-600">User Testimonials</h2>
            <div className="flex flex-wrap justify-center space-x-4">
                {Testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs">
                        <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto object-cover object-top" />
                        <h3 className="text-xl font-semibold text-center mt-4">{testimonial.name}</h3>
                        <p className="text-center text-gray-600">{testimonial.role}</p>
                        <p className="text-center mt-4 text-gray-700">{testimonial.feedback}</p>
                        <div className="flex justify-center mt-4">
                            <div className="flex items-center">
                                {Array(5).fill().map((_, i) => (
                                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.564-.955L10 0l2.946 5.955 6.564.955-4.755 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;
