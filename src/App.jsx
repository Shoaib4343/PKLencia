import React from 'react'
import Navbar from './Home/Navbar/Navbar'
import HeroSection from './Home/HeroSection/HeroSection'
import Categories from './Home/Categories/Categories'
import PopularCategory from './Home/PopularCategory/PopularCategory'
import ImageGallery from './Home/ImageGallery/ImageGallery'
import CallUpButton from './Home/CallUpButton/CallUpButton'
import AboutUs from './Home/AboutUs/AboutUs'
import Footer from './Home/Footer/Footer'

const App = () => {
  return (
    <div>
      {/* NavBar */}
      <Navbar/>
       {/* Hero SEction */}
       <HeroSection />

       {/* Categories */}
       <Categories />


       {/* Popular Category */}
       {/* Popular Services */}
       <PopularCategory name={"Services"} />
       {/* Popular Product */}
       <PopularCategory name={"Product"} />

       {/* imageGallery */}
       <ImageGallery/>

       {/* CallUpButton */}
       <CallUpButton />

       {/* AboutUs */}
       <AboutUs />

       {/* Footer */}
       <Footer />
    </div>
  )
}

export default App