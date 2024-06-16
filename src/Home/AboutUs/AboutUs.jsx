import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section class="bg-gray-100 py-16 rounded-lg mx-20 my-10">
        <div class="container mx-auto px-10">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800">About Us</h2>
            <p class="mt-4 text-gray-600">
              Learn more about our journey and mission.
            </p>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <img
                src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="About Us Image"
                class="rounded-lg shadow-lg"
              />
            </div>
            <div class="w-full lg:w-1/2 px-4 flex flex-col justify-center">
              <h3 class="text-3xl font-semibold text-gray-800 mb-4">
                Our Story
              </h3>
              <p class="text-gray-600 mb-4">
                Our company was founded with the mission to provide the best
                services and products to our customers. Over the years, we have
                grown and expanded our offerings, always keeping our core values
                at the heart of everything we do.
              </p>
              <h3 class="text-3xl font-semibold text-gray-800 mb-4">
                Our Mission
              </h3>
              <p class="text-gray-600 mb-4">
                We strive to deliver exceptional quality and value to our
                customers. Our team is dedicated to continuous improvement and
                innovation, ensuring that we meet and exceed expectations in all
                that we do.
              </p>
              <h3 class="text-3xl font-semibold text-gray-800 mb-4">
                Our Values
              </h3>
              <p class="text-gray-600">
                Integrity, customer focus, and a commitment to excellence are
                the pillars of our company. We believe in fostering a positive
                and inclusive workplace culture where everyone can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
